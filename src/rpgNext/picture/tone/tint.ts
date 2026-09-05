import type { ColorRGBA } from "@RpgTypes/libs";
import { BLANK_TONE } from "./constants";
import type { Picture_Tone } from "./types";

/** 色調変更の開始。duration が 0 なら即座に適用される。 */
export const startTint = (
  tone: Picture_Tone | null,
  target: ColorRGBA,
  duration: number,
): Picture_Tone => {
  const goal: ColorRGBA = [...target];
  return {
    value: duration === 0 ? goal : (tone?.value ?? BLANK_TONE),
    target: goal,
    duration,
  };
};

const blend = (tone: Picture_Tone): ColorRGBA => {
  const d = tone.duration;
  const at = (index: 0 | 1 | 2 | 3): number =>
    (tone.value[index] * (d - 1) + tone.target[index]) / d;
  return [at(0), at(1), at(2), at(3)];
};

export const updateTone = (tone: Picture_Tone | null): Picture_Tone | null => {
  if (!tone || tone.duration <= 0) {
    return tone;
  }
  return {
    value: blend(tone),
    target: tone.target,
    duration: tone.duration - 1,
  };
};
