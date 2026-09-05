import { beforeAll, describe, expect, test } from "vitest";
import type { ColorRGBA } from "@RpgTypes/libs";
import {
  makeCommandMovePicture,
  makeCommandShowPicture,
  PICTURE_POINT_DIRECT,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Picture_EasingKind,
  Store_Picture,
} from "@RpgTypes/rpgNext/picture";
import {
  applyMovePictureCommand,
  applyShowPictureCommand,
  createPictureStore,
  movePicture,
  rotatePicture,
  showPicture,
  tintPicture,
  updatePicture,
} from "@RpgTypes/rpgNext/picture";
// @ts-expect-error 型定義のない移植元
import { Game_Picture } from "./rmmz_objects";

beforeAll(() => {
  // rmmz_core.js の拡張。Game_Picture.tint が使う。
  Object.defineProperty(Array.prototype, "clone", {
    configurable: true,
    value: function () {
      return this.slice(0);
    },
  });
});

/** 外から観測できる値。Game_Picture では getter 経由でしか見えない。 */
interface Snapshot {
  name: string;
  origin: number;
  blendMode: number;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
  angle: number;
  tone: number[] | null;
}

const fromOriginal = (picture: any): Snapshot => ({
  name: picture.name(),
  origin: picture.origin(),
  blendMode: picture.blendMode(),
  x: picture.x(),
  y: picture.y(),
  scaleX: picture.scaleX(),
  scaleY: picture.scaleY(),
  opacity: picture.opacity(),
  angle: picture.angle(),
  tone: picture.tone(),
});

const fromStore = (store: Store_Picture): Snapshot => ({
  name: store.setting.name,
  origin: store.setting.origin,
  blendMode: store.setting.blendMode,
  x: store.current.x,
  y: store.current.y,
  scaleX: store.current.scaleX,
  scaleY: store.current.scaleY,
  opacity: store.current.opacity,
  angle: store.rotation.angle,
  tone: store.tone ? [...store.tone.value] : null,
});

const showArgs = {
  name: "actor1",
  origin: 1,
  x: 10,
  y: 20,
  scaleX: 100,
  scaleY: 100,
  opacity: 255,
  blendMode: 0,
} as const;

const moveArgs = {
  origin: 0,
  x: 300,
  y: 400,
  scaleX: 50,
  scaleY: 150,
  opacity: 128,
  blendMode: 1,
  duration: 20,
} as const;

describe("Game_Picture と store の一致", () => {
  const easingTypes: Picture_EasingKind[] = [0, 1, 2, 3];
  test.each(easingTypes)("easingType=%i の移動が全フレーム一致する", (kind) => {
    const original = new (Game_Picture as any)();
    original.show(
      showArgs.name,
      showArgs.origin,
      showArgs.x,
      showArgs.y,
      showArgs.scaleX,
      showArgs.scaleY,
      showArgs.opacity,
      showArgs.blendMode,
    );
    original.move(
      moveArgs.origin,
      moveArgs.x,
      moveArgs.y,
      moveArgs.scaleX,
      moveArgs.scaleY,
      moveArgs.opacity,
      moveArgs.blendMode,
      moveArgs.duration,
      kind,
    );
    original.rotate(6);
    original.tint([64, -32, 0, 128], 10);

    let store = showPicture(createPictureStore(1), showArgs);
    store = movePicture(store, { ...moveArgs, easingType: kind });
    store = rotatePicture(store, 6);
    store = tintPicture(store, [64, -32, 0, 128], 10);

    expect(fromStore(store)).toEqual(fromOriginal(original));

    for (let frame = 0; frame < 25; frame++) {
      original.update();
      store = updatePicture(store);
      expect(fromStore(store)).toEqual(fromOriginal(original));
    }
    expect(store.target).toBe(null);
  });

  test("duration が 0 の tint は即座に適用される", () => {
    const tone: ColorRGBA = [10, 20, 30, 40];
    const original = new (Game_Picture as any)();
    original.tint(tone, 0);
    const store = tintPicture(createPictureStore(1), tone, 0);
    expect(fromStore(store).tone).toEqual(fromOriginal(original).tone);
  });

  test("duration が 0 の移動は適用されない", () => {
    const original = new (Game_Picture as any)();
    original.move(0, 300, 400, 50, 150, 128, 1, 0, 0);
    original.update();
    let store = movePicture(createPictureStore(1), {
      ...moveArgs,
      duration: 0,
      easingType: 0,
    });
    store = updatePicture(store);
    expect(fromStore(store)).toEqual(fromOriginal(original));
  });

  test("show は移動・色調・回転を初期化する", () => {
    const original = new (Game_Picture as any)();
    original.rotate(6);
    original.tint([64, 0, 0, 0], 10);
    original.move(0, 300, 400, 50, 150, 128, 1, 20, 0);
    original.show("b", 0, 1, 2, 3, 4, 5, 2);

    let store = rotatePicture(createPictureStore(1), 6);
    store = tintPicture(store, [64, 0, 0, 0], 10);
    store = movePicture(store, { ...moveArgs, easingType: 0 });
    store = showPicture(store, {
      name: "b",
      origin: 0,
      x: 1,
      y: 2,
      scaleX: 3,
      scaleY: 4,
      opacity: 5,
      blendMode: 2,
    });

    expect(store.target).toBe(null);
    expect(store.tone).toBe(null);
    expect(store.rotation).toEqual({ angle: 0, speed: 0 });
    expect(fromStore(store)).toEqual(fromOriginal(original));
  });
});

describe("イベントコマンドから Game_Picture と同じ結果になる", () => {
  const showCommand = makeCommandShowPicture({
    pictureId: 3,
    name: "actor1",
    origin: 1,
    designation: PICTURE_POINT_DIRECT,
    x: 10,
    y: 20,
    scaleX: 80,
    scaleY: 90,
    opacity: 200,
    blendMode: 2,
  });
  const readVariable = (id: number) => id * 100;

  test("231 は Game_Picture.show と一致する", () => {
    const original = new (Game_Picture as any)();
    original.show("actor1", 1, 10, 20, 80, 90, 200, 2);
    const store = applyShowPictureCommand(
      createPictureStore(3),
      showCommand,
      readVariable,
    );
    expect(fromStore(store)).toEqual(fromOriginal(original));
  });

  test("232 は Game_Picture.move と全フレーム一致する", () => {
    const command = makeCommandMovePicture({
      pictureId: 3,
      origin: 0,
      designation: PICTURE_POINT_DIRECT,
      x: 300,
      y: 400,
      scaleX: 50,
      scaleY: 150,
      opacity: 128,
      blendMode: 1,
      duration: 20,
      wait: true,
      easingType: 2,
    });
    const original = new (Game_Picture as any)();
    original.show("actor1", 1, 10, 20, 80, 90, 200, 2);
    original.move(0, 300, 400, 50, 150, 128, 1, 20, 2);

    let store = applyShowPictureCommand(
      createPictureStore(3),
      showCommand,
      readVariable,
    );
    store = applyMovePictureCommand(store, command, readVariable);
    for (let frame = 0; frame < 20; frame++) {
      original.update();
      store = updatePicture(store);
      expect(fromStore(store)).toEqual(fromOriginal(original));
    }
  });
});
