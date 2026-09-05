import { describe, expect, test, vi } from "vitest";
import {
  makeCommandMovePicture,
  makeCommandShowPicture,
  PICTURE_POINT_DIRECT,
  PICTURE_POINT_VARIABLE,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import {
  isPicturePointFromVariable,
  readPictureXDirect,
  readPictureXFromVariable,
  readPictureYDirect,
  readPictureYFromVariable,
} from "./picture";

const mockVariables = (): Rmmz_Variables => ({
  clear: vi.fn(),
  value: vi.fn((id: number) => id * 100),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

describe("ピクチャの座標解決", () => {
  test("直接指定はそのまま返し、変数を読まない", () => {
    const command = makeCommandShowPicture({
      designation: PICTURE_POINT_DIRECT,
      x: 10,
      y: 20,
    });
    expect(isPicturePointFromVariable(command)).toBe(false);
    expect(readPictureXDirect(command)).toBe(10);
    expect(readPictureYDirect(command)).toBe(20);
  });

  test("変数指定は変数番号として読む", () => {
    const command = makeCommandShowPicture({
      designation: PICTURE_POINT_VARIABLE,
      x: 4,
      y: 5,
    });
    const variables = mockVariables();
    expect(isPicturePointFromVariable(command)).toBe(true);
    expect(readPictureXFromVariable(command, variables)).toBe(400);
    expect(readPictureYFromVariable(command, variables)).toBe(500);
    expect(variables.value).toHaveBeenCalledWith(4);
    expect(variables.value).toHaveBeenCalledWith(5);
  });

  test("移動 (232) も同じ位置で解決できる", () => {
    const command = makeCommandMovePicture({
      designation: PICTURE_POINT_VARIABLE,
      x: 7,
      y: 8,
    });
    const variables = mockVariables();
    expect(isPicturePointFromVariable(command)).toBe(true);
    expect(readPictureXFromVariable(command, variables)).toBe(700);
    expect(readPictureYFromVariable(command, variables)).toBe(800);
  });
});
