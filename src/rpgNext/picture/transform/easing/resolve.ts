import {
  EASING_IN,
  EASING_IN_OUT,
  EASING_LINEAR,
  EASING_OUT,
} from "./constants";
import { easeIn, easeInOut, easeOut, linearEasing } from "./ease";
import type {
  Picture_Easing,
  Picture_EasingFn,
  Picture_EasingKind,
} from "./types";

/**
 * 旧来の指定 (kindId + exponent) から補間関数を作る。
 * 渡す関数が固定される、というのが旧来の仕様。
 */
export const resolveEasing = (easing: Picture_Easing): Picture_EasingFn => {
  switch (easing.kindId) {
    case EASING_IN:
      return (t) => easeIn(t, easing.exponent);
    case EASING_OUT:
      return (t) => easeOut(t, easing.exponent);
    case EASING_IN_OUT:
      return (t) => easeInOut(t, easing.exponent);
    default:
      return linearEasing;
  }
};

/** 旧来の呼び出し口。kindId から関数を決めてその場で適用する。 */
export const calcEasing = (easing: Picture_Easing, t: number): number =>
  resolveEasing(easing)(t);

/**
 * イベントコマンドから来る数値を種類へ丸める。
 * 範囲外は RMMZ の default 分岐と同じく線形として扱う。
 */
export const toEasingKind = (value: number): Picture_EasingKind =>
  value === EASING_IN || value === EASING_OUT || value === EASING_IN_OUT
    ? value
    : EASING_LINEAR;
