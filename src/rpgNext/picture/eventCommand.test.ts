import { describe, expect, test } from "vitest";
import {
  makeCommandMovePicture,
  makeCommandShowPicture,
  ROTATE_PICTURE,
  TINT_PICTURE,
  type Command_MovePicture,
  type Command_RotatePicture,
  type Command_TintPicture,
} from "@RpgTypes/rmmz";
import {
  applyMovePictureCommand,
  applyRotatePictureCommand,
  applyShowPictureCommand,
  applyTintPictureCommand,
  pictureIdOfCommand,
  waitFramesOfMoveCommand,
  waitFramesOfTintCommand,
  PICTURE_POINT_DIRECT,
  PICTURE_POINT_VARIABLE,
} from "./eventCommand";
import { createPictureStore } from "./store";
import type { Picture_Transform } from "./transform";

// コアスクリプトとの一致は rmmzMock/core/objects/picture.test.ts で確かめる。
// ここでは引数の対応だけを見る。

const readVariable = (variableId: number) => variableId * 100;

describe("231: ピクチャの表示", () => {
  test("直接指定の座標をそのまま使う", () => {
    const command = makeCommandShowPicture({
      pictureId: 3,
      designation: PICTURE_POINT_DIRECT,
      x: 10,
      y: 20,
      scaleX: 80,
      scaleY: 90,
      opacity: 200,
    });
    const expected: Picture_Transform = {
      x: 10,
      y: 20,
      scaleX: 80,
      scaleY: 90,
      opacity: 200,
    };
    const result = applyShowPictureCommand(
      createPictureStore(3),
      command,
      readVariable,
    );
    expect(result.current).toEqual(expected);
  });

  test("変数指定なら変数から読む", () => {
    const command = makeCommandShowPicture({
      pictureId: 3,
      designation: PICTURE_POINT_VARIABLE,
      x: 4,
      y: 5,
    });
    const result = applyShowPictureCommand(
      createPictureStore(3),
      command,
      readVariable,
    );
    expect(result.current.x).toBe(400);
    expect(result.current.y).toBe(500);
  });

  test("ピクチャ番号は store の持ち主が決める", () => {
    const command = makeCommandShowPicture({ pictureId: 3 });
    expect(pictureIdOfCommand(command)).toBe(3);
    // 引数の番号は store 側へ持ち込まない
    const result = applyShowPictureCommand(
      createPictureStore(7),
      command,
      readVariable,
    );
    expect(result.setting.id).toBe(7);
  });
});

describe("232: ピクチャの移動", () => {
  test("変数指定なら変数から読む", () => {
    const command = makeCommandMovePicture({
      pictureId: 3,
      designation: PICTURE_POINT_VARIABLE,
      x: 4,
      y: 5,
      duration: 20,
    });
    const result = applyMovePictureCommand(
      createPictureStore(3),
      command,
      readVariable,
    );
    expect(result.target?.value.x).toBe(400);
    expect(result.target?.value.y).toBe(500);
  });

  test("duration は target に入り、easingType は補間の種類になる", () => {
    const command = makeCommandMovePicture({
      pictureId: 3,
      duration: 20,
      easingType: 2,
    });
    const result = applyMovePictureCommand(
      createPictureStore(3),
      command,
      readVariable,
    );
    expect(result.target?.duration).toBe(20);
    expect(result.target?.wholeDuration).toBe(20);
    expect(result.target?.easing.kindId).toBe(2);
  });

  test("easingType が無い古いデータは線形として扱う", () => {
    const command = makeCommandMovePicture({ pictureId: 3, duration: 20 });
    const old: Command_MovePicture = {
      ...command,
      parameters: command.parameters.slice(
        0,
        12,
      ) as Command_MovePicture["parameters"],
    };
    const result = applyMovePictureCommand(
      createPictureStore(3),
      old,
      readVariable,
    );
    expect(result.target?.easing.kindId).toBe(0);
  });

  test("wait の指定でフレーム数が出る", () => {
    const waiting = makeCommandMovePicture({ duration: 20, wait: true });
    const notWaiting = makeCommandMovePicture({ duration: 20, wait: false });
    expect(waitFramesOfMoveCommand(waiting)).toBe(20);
    expect(waitFramesOfMoveCommand(notWaiting)).toBe(0);
  });
});

describe("233 / 234", () => {
  const rotateCommand: Command_RotatePicture = {
    code: ROTATE_PICTURE,
    indent: 0,
    parameters: [3, 6],
  };
  const tintCommand: Command_TintPicture = {
    code: TINT_PICTURE,
    indent: 0,
    parameters: [3, [64, -32, 0, 128], 0, true],
  };

  test("233 の引数は回転速度になる", () => {
    const result = applyRotatePictureCommand(
      createPictureStore(3),
      rotateCommand,
    );
    expect(result.rotation.speed).toBe(6);
  });

  test("234 の引数は色調と時間になる", () => {
    const result = applyTintPictureCommand(createPictureStore(3), tintCommand);
    expect(result.tone?.target).toEqual([64, -32, 0, 128]);
    expect(result.tone?.duration).toBe(0);
  });

  test("234 は duration が 0 なら wait しない", () => {
    const waiting: Command_TintPicture = {
      ...tintCommand,
      parameters: [3, [0, 0, 0, 0], 60, true],
    };
    expect(waitFramesOfTintCommand(tintCommand)).toBe(0);
    expect(waitFramesOfTintCommand(waiting)).toBe(60);
  });
});
