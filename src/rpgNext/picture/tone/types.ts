import type { ColorRGBA } from "@RpgTypes/libs";

/**
 * 色調。tint されるまでは存在しない (null)。
 */
export interface Picture_Tone {
  value: ColorRGBA;
  target: ColorRGBA;
  duration: number;
}
