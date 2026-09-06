import { beforeAll, describe, expect, test } from "vitest";
import type { ColorRGBA } from "@RpgTypes/libs";
import {
  makeCommandMovePicture,
  makeCommandShowPicture,
  PICTURE_POINT_DIRECT,
} from "@RpgTypes/rmmz/eventCommand";
import {
  applyMovePictureCommand,
  applyShowPictureCommand,
  createPictureStore,
  movePicture,
  rotatePicture,
  showPicture,
  tintPicture,
  updatePicture,
  type Picture_EasingKind,
  type Store_Picture,
} from "@RpgTypes/rpgNext/picture";
import type { Rmmz_Picture } from "@RpgTypes/rmmzRuntime";
import { Game_Picture } from "./rmmz_objects";

beforeAll(() => {
  // rmmz_core.js の拡張。Game_Picture.tint が使う
  Object.defineProperty(Array.prototype, "clone", {
    configurable: true,
    value: function () {
      return this.slice(0);
    },
  });
});

const SHOW = {
  name: "actor1",
  origin: 1,
  x: 0,
  y: 0,
  scaleX: 100,
  scaleY: 100,
  opacity: 0,
  blendMode: 0,
} as const;

const MOVE = {
  origin: 0,
  x: 100,
  y: 200,
  scaleX: 50,
  scaleY: 150,
  opacity: 255,
  blendMode: 1,
  duration: 4,
} as const;

const TINT: ColorRGBA = [64, -32, 0, 128];
const TINT_DURATION = 4;
const ROTATION_SPEED = 6;

/** 1 フレーム進めるごとに外から見える値 */
interface FrameExpectation {
  x: number;
  opacity: number;
  tone: ColorRGBA;
  angle: number;
}

interface TestCase {
  name: string;
  easingType: Picture_EasingKind;
  /** 4 フレーム分。移動も色調も duration=4 */
  frames: FrameExpectation[];
}

const showPictureOnCore = (picture: Rmmz_Picture): void => {
  picture.show(
    SHOW.name,
    SHOW.origin,
    SHOW.x,
    SHOW.y,
    SHOW.scaleX,
    SHOW.scaleY,
    SHOW.opacity,
    SHOW.blendMode,
  );
};

const movePictureOnCore = (
  picture: Rmmz_Picture,
  easingType: Picture_EasingKind,
): void => {
  picture.move(
    MOVE.origin,
    MOVE.x,
    MOVE.y,
    MOVE.scaleX,
    MOVE.scaleY,
    MOVE.opacity,
    MOVE.blendMode,
    MOVE.duration,
    easingType,
  );
};

const createCorePicture = (easingType: Picture_EasingKind): Rmmz_Picture => {
  const picture: Rmmz_Picture = new Game_Picture();
  showPictureOnCore(picture);
  movePictureOnCore(picture, easingType);
  picture.rotate(ROTATION_SPEED);
  picture.tint(TINT, TINT_DURATION);
  return picture;
};

const createStore = (easingType: Picture_EasingKind): Store_Picture => {
  let store = showPicture(createPictureStore(1), SHOW);
  store = movePicture(store, { ...MOVE, easingType });
  store = rotatePicture(store, ROTATION_SPEED);
  return tintPicture(store, TINT, TINT_DURATION);
};

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { easingType, frames } = testCase;

    describe("function", () => {
      frames.forEach((expected, index) => {
        test(`${index + 1} フレーム目`, () => {
          let store = createStore(easingType);
          for (let i = 0; i <= index; i++) {
            store = updatePicture(store);
          }
          expect(store.current.x).toBe(expected.x);
          expect(store.current.opacity).toBe(expected.opacity);
          expect(store.tone?.value).toEqual(expected.tone);
          expect(store.rotation.angle).toBe(expected.angle);
        });
      });

      test("最後まで進めたら移動が終わる", () => {
        let store = createStore(easingType);
        frames.forEach(() => {
          store = updatePicture(store);
        });
        expect(store.target).toBe(null);
      });
    });

    describe("Picture", () => {
      frames.forEach((expected, index) => {
        test(`${index + 1} フレーム目`, () => {
          const picture = createCorePicture(easingType);
          for (let i = 0; i <= index; i++) {
            picture.update();
          }
          expect(picture.x()).toBe(expected.x);
          expect(picture.opacity()).toBe(expected.opacity);
          expect(picture.tone()).toEqual(expected.tone);
          expect(picture.angle()).toBe(expected.angle);
        });
      });
    });
  });
};

/**
 * 色調は 1/d ずつ目標へ寄る。角度は速度の半分ずつ増える。
 * どちらも補間の種類によらないので共通。
 */
const TONE_BY_FRAME: ColorRGBA[] = [
  [16, -8, 0, 32],
  [32, -16, 0, 64],
  [48, -24, 0, 96],
  [64, -32, 0, 128],
];

const ANGLE_BY_FRAME = [3, 6, 9, 12];

/** 補間の割合から x (0→100) と opacity (0→255) を作る */
const frames = (rates: number[]): FrameExpectation[] =>
  rates.map((rate, index) => ({
    x: 100 * rate,
    opacity: 255 * rate,
    tone: TONE_BY_FRAME[index],
    angle: ANGLE_BY_FRAME[index],
  }));

const testCases: TestCase[] = [
  {
    name: "linear (0)",
    easingType: 0,
    // 等間隔
    frames: frames([0.25, 0.5, 0.75, 1]),
  },
  {
    name: "easeIn (1)",
    easingType: 1,
    // t^2: 0.25^2, 0.5^2, 0.75^2, 1
    frames: frames([0.0625, 0.25, 0.5625, 1]),
  },
  {
    name: "easeOut (2)",
    easingType: 2,
    // 1-(1-t)^2
    frames: frames([0.4375, 0.75, 0.9375, 1]),
  },
  {
    name: "easeInOut (3)",
    easingType: 3,
    // 前半は t^2 の半分、後半は easeOut の半分 + 0.5
    frames: frames([0.125, 0.5, 0.875, 1]),
  },
];

testCases.forEach(runTestCase);

interface SingleCase {
  name: string;
  expected: {
    tone: ColorRGBA | null;
    x: number;
    angle: number;
  };
  runFunction(): Store_Picture;
  runCore(): Rmmz_Picture;
}

const singleCases: SingleCase[] = [
  {
    name: "duration 0 の色調変更は即座に適用される",
    expected: { tone: [10, 20, 30, 40], x: 0, angle: 0 },
    runFunction: () => tintPicture(createPictureStore(1), [10, 20, 30, 40], 0),
    runCore: () => {
      const picture: Rmmz_Picture = new Game_Picture();
      picture.tint([10, 20, 30, 40], 0);
      return picture;
    },
  },
  {
    name: "duration 0 の移動は適用されない",
    expected: { tone: null, x: 0, angle: 0 },
    runFunction: () => {
      const store = movePicture(createPictureStore(1), {
        ...MOVE,
        duration: 0,
        easingType: 0,
      });
      return updatePicture(store);
    },
    runCore: () => {
      const picture: Rmmz_Picture = new Game_Picture();
      picture.move(0, MOVE.x, MOVE.y, 50, 150, 128, 1, 0, 0);
      picture.update();
      return picture;
    },
  },
  {
    name: "show は移動・色調・回転を初期化する",
    expected: { tone: null, x: SHOW.x, angle: 0 },
    runFunction: () => {
      let store = rotatePicture(createPictureStore(1), ROTATION_SPEED);
      store = tintPicture(store, TINT, TINT_DURATION);
      store = movePicture(store, { ...MOVE, easingType: 0 });
      return showPicture(store, SHOW);
    },
    runCore: () => {
      const picture: Rmmz_Picture = new Game_Picture();
      picture.rotate(ROTATION_SPEED);
      picture.tint(TINT, TINT_DURATION);
      movePictureOnCore(picture, 0);
      showPictureOnCore(picture);
      return picture;
    },
  },
];

singleCases.forEach(({ name, expected, runFunction, runCore }) => {
  describe(name, () => {
    test("function", () => {
      const store = runFunction();
      expect(store.tone?.value ?? null).toEqual(expected.tone);
      expect(store.current.x).toBe(expected.x);
      expect(store.rotation.angle).toBe(expected.angle);
    });

    test("Picture", () => {
      const picture = runCore();
      expect(picture.tone()).toEqual(expected.tone);
      expect(picture.x()).toBe(expected.x);
      expect(picture.angle()).toBe(expected.angle);
    });
  });
});

describe("イベントコマンドから同じ結果になる", () => {
  const showCommand = makeCommandShowPicture({
    pictureId: 3,
    name: SHOW.name,
    origin: SHOW.origin,
    designation: PICTURE_POINT_DIRECT,
    x: SHOW.x,
    y: SHOW.y,
    scaleX: SHOW.scaleX,
    scaleY: SHOW.scaleY,
    opacity: SHOW.opacity,
    blendMode: SHOW.blendMode,
  });
  const moveCommand = makeCommandMovePicture({
    pictureId: 3,
    origin: MOVE.origin,
    designation: PICTURE_POINT_DIRECT,
    x: MOVE.x,
    y: MOVE.y,
    scaleX: MOVE.scaleX,
    scaleY: MOVE.scaleY,
    opacity: MOVE.opacity,
    blendMode: MOVE.blendMode,
    duration: MOVE.duration,
    wait: true,
    easingType: 2,
  });
  const readVariable = (id: number) => id * 100;
  // easeOut の 2 フレーム目
  const expectedX = 75;

  test("function", () => {
    let store = applyShowPictureCommand(
      createPictureStore(3),
      showCommand,
      readVariable,
    );
    store = applyMovePictureCommand(store, moveCommand, readVariable);
    store = updatePicture(store);
    store = updatePicture(store);
    expect(store.current.x).toBe(expectedX);
  });

  test("Picture", () => {
    const picture: Rmmz_Picture = new Game_Picture();
    showPictureOnCore(picture);
    movePictureOnCore(picture, 2);
    picture.update();
    picture.update();
    expect(picture.x()).toBe(expectedX);
  });
});
