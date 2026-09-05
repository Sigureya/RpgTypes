import { describe, expect, test } from "vitest";
import type { ColorRGBA } from "@RpgTypes/libs";
import { BLANK_TONE } from "./constants";
import { startTint, updateTone } from "./tint";
import type { Picture_Tone } from "./types";

const target: ColorRGBA = [64, -32, 0, 128];

describe("startTint", () => {
  test("初回は黒 (BLANK_TONE) から始まる", () => {
    const expected: Picture_Tone = { value: BLANK_TONE, target, duration: 10 };
    const result: Picture_Tone = startTint(null, target, 10);
    expect(result).toEqual(expected);
  });

  test("duration が 0 なら即座に適用される", () => {
    const expected: Picture_Tone = { value: target, target, duration: 0 };
    const result: Picture_Tone = startTint(null, target, 0);
    expect(result).toEqual(expected);
  });

  test("色調変更中に始めると、そのときの値から続く", () => {
    const running: Picture_Tone = {
      value: [10, 20, 30, 40],
      target: [0, 0, 0, 0],
      duration: 5,
    };
    const result: Picture_Tone = startTint(running, target, 10);
    expect(result.value).toEqual(running.value);
    expect(result.target).toEqual(target);
  });

  test("渡した配列を持ち込まない", () => {
    const passed: ColorRGBA = [1, 2, 3, 4];
    const result: Picture_Tone = startTint(null, passed, 10);
    expect(result.target).not.toBe(passed);
    expect(result.target).toEqual(passed);
  });
});

describe("updateTone", () => {
  test("色調が無ければ何もしない", () => {
    expect(updateTone(null)).toBe(null);
  });

  test("duration が 0 ならそのまま返す", () => {
    const done: Picture_Tone = { value: target, target, duration: 0 };
    expect(updateTone(done)).toBe(done);
  });

  test("残り 1 フレームで目標値に届く", () => {
    const expected: Picture_Tone = { value: target, target, duration: 0 };
    const result = updateTone({ value: BLANK_TONE, target, duration: 1 });
    expect(result).toEqual(expected);
  });

  test("残り d フレームなら 1/d ずつ近づく", () => {
    const expected: ColorRGBA = [16, -8, 0, 32];
    const result = updateTone({ value: BLANK_TONE, target, duration: 4 });
    expect(result?.value).toEqual(expected);
    expect(result?.duration).toBe(3);
  });
});
