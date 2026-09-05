import type {
  PICTURE_ORIGIN_CENTER,
  PICTURE_ORIGIN_UPPER_LEFT,
} from "./constants";

export type Picture_Origin =
  | typeof PICTURE_ORIGIN_UPPER_LEFT
  | typeof PICTURE_ORIGIN_CENTER;

export type Picture_BlendMode = 0 | 1 | 2 | 3;

/**
 * 変化しづらい設定。
 * show/move の時にしか書き換わらず、update では触らない。
 */
export interface Picture_Setting {
  id: number;
  name: string;
  origin: Picture_Origin;
  blendMode: Picture_BlendMode;
}
