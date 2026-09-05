import type { Picture_Rotation } from "./rotation";
import type { Picture_BlendMode, Picture_Origin, Picture_Setting } from "./setting";
import type { Picture_Tone } from "./tone";
import type {
  Picture_EasingKind,
  Picture_Target,
  Picture_Transform,
} from "./transform";

/**
 * Game_Picture の内部状態。
 * ここを純粋関数で更新し、クラスは保持と公開だけを担当する。
 */
export interface Store_Picture {
  /** 変化しづらい */
  setting: Picture_Setting;
  /** 毎フレーム変化する */
  current: Picture_Transform;
  /** 移動中のみ */
  target: Picture_Target | null;
  /** tint 後のみ */
  tone: Picture_Tone | null;
  rotation: Picture_Rotation;
}

/** show の引数。RMMZ の Game_Picture.show と同じ並び。 */
export interface Picture_ShowParams {
  name: string;
  origin: Picture_Origin;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
  blendMode: Picture_BlendMode;
}

/** move の引数。RMMZ の Game_Picture.move と同じ並び。 */
export interface Picture_MoveParams {
  origin: Picture_Origin;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
  blendMode: Picture_BlendMode;
  duration: number;
  easingType: Picture_EasingKind;
}
