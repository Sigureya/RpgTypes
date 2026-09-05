import { describe, expect, test } from "vitest";
import { createPictureStore } from "./store";
import { movePicture, showPicture } from "./facade";
import { rotatePicture, tintPicture } from "./command";
import { updatePicture } from "./update";
import type { Store_Picture } from "./types";

// 層を跨ぐ検証だけを置く。
// 各サブドメインの単体は transform/ tone/ rotation/ の隣、
// コアスクリプトとの一致は rmmzMock/core/objects/picture.test.ts。

const showArgs = {
  name: "actor1",
  origin: 1,
  x: 0,
  y: 0,
  scaleX: 100,
  scaleY: 100,
  opacity: 255,
  blendMode: 0,
} as const;

const moveArgs = {
  origin: 0,
  x: 100,
  y: 200,
  scaleX: 50,
  scaleY: 50,
  opacity: 0,
  blendMode: 1,
  duration: 4,
  easingType: 1,
} as const;

describe("updatePicture", () => {
  test("移動・色調・回転が同じフレームで進む", () => {
    let store: Store_Picture = showPicture(createPictureStore(1), showArgs);
    store = movePicture(store, moveArgs);
    store = tintPicture(store, [64, 0, 0, 0], 4);
    store = rotatePicture(store, 6);

    const result: Store_Picture = updatePicture(store);
    expect(result.target?.duration).toBe(3);
    expect(result.tone?.duration).toBe(3);
    expect(result.rotation.angle).toBe(3);
    expect(result.current.x).not.toBe(0);
  });

  test("設定は update で書き換わらない", () => {
    let store: Store_Picture = showPicture(createPictureStore(1), showArgs);
    store = movePicture(store, moveArgs);
    const setting = store.setting;
    expect(updatePicture(store).setting).toBe(setting);
  });

  test("補間関数を渡すと store の kindId より優先される", () => {
    const start: Store_Picture = movePicture(
      showPicture(createPictureStore(1), showArgs),
      moveArgs,
    );
    // kindId=1 (easeIn, exponent=2) と同じ関数を明示的に渡す
    const easeInSquared = (t: number) => t * t;

    let byCallback: Store_Picture = start;
    let byKind: Store_Picture = start;
    for (let frame = 0; frame < 4; frame++) {
      byCallback = updatePicture(byCallback, easeInSquared);
      byKind = updatePicture(byKind);
    }
    expect(byCallback.current).toEqual(byKind.current);

    const linear: Store_Picture = updatePicture(start, (t) => t);
    expect(linear.current.x).not.toBe(updatePicture(start).current.x);
  });
});

describe("facade", () => {
  test("show は名前で渡しても値で渡しても同じ結果になる", () => {
    const store: Store_Picture = createPictureStore(1);
    const expected: Store_Picture = showPicture(store, showArgs);
    expect(expected.setting.name).toBe("actor1");
    expect(expected.current.x).toBe(0);
    expect(expected.target).toBe(null);
  });
});
