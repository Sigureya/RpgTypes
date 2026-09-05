import type { Picture_Easing } from "./easing";

/**
 * 毎フレーム変化する値。
 * 現在値と目標値で同じ形を使う。
 */
export interface Picture_Transform {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
}

/**
 * 移動中だけ存在する状態。
 * duration が 0 になったら破棄する想定。
 */
export interface Picture_Target {
  value: Picture_Transform;
  easing: Picture_Easing;
  duration: number;
  wholeDuration: number;
}
