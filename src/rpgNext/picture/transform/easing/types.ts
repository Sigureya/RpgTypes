import type {
  EASING_IN,
  EASING_IN_OUT,
  EASING_LINEAR,
  EASING_OUT,
} from "./constants";

export type Picture_EasingKind =
  | typeof EASING_LINEAR
  | typeof EASING_IN
  | typeof EASING_OUT
  | typeof EASING_IN_OUT;

/** 補間のやり方。move の時に決まり、移動中は変化しない。 */
export interface Picture_Easing {
  kindId: Picture_EasingKind;
  exponent: number;
}

/**
 * 補間関数。0..1 の進捗を受け取り、0..1 の割合を返す。
 * 新型ではこれを外から渡す。将来的には描画担当が保持する。
 */
export type Picture_EasingFn = (t: number) => number;
