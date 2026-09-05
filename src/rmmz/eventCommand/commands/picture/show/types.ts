import type {
  EventCommandLike,
  MOVE_PICTURE,
  SHOW_PICTURE,
} from "@RpgTypes/libs/eventCommand";
import type {
  PICTURE_POINT_DIRECT,
  PICTURE_POINT_VARIABLE,
} from "./constants";

export interface Command_ShowPicture extends EventCommandLike<
  typeof SHOW_PICTURE
> {
  parameters: ParamsArray_ShowPicture;
}

export interface Command_MovePicture extends EventCommandLike<
  typeof MOVE_PICTURE
> {
  parameters: ParamsArray_MovePicture;
}

export type PicutureBlendModeV2 = 0 | 1 | 2 | 3;

export type PictureOrigin = 0 | 1;

/** 座標の指定方法。 */
export type PicturePointDesignation =
  | typeof PICTURE_POINT_DIRECT
  | typeof PICTURE_POINT_VARIABLE;

export type ParamsArray_ShowPicture = [
  pictureId: number,
  name: string,
  origin: PictureOrigin,
  designation: PicturePointDesignation,
  x: number,
  y: number,
  scaleX: number,
  scaleY: number,
  opacity: number,
  blendMode: PicutureBlendModeV2,
];

/**
 * [1] は使われない。ピクチャの表示 ([1]=name) と番号を揃えるための空き。
 * [12] は古いデータでは存在しない (コアスクリプトが `|| 0` で補う)。
 */
export type ParamsArray_MovePicture = [
  pictureId: number,
  unused: unknown,
  origin: PictureOrigin,
  designation: PicturePointDesignation,
  x: number,
  y: number,
  scaleX: number,
  scaleY: number,
  opacity: number,
  blendMode: PicutureBlendModeV2,
  duration: number,
  wait: boolean,
  easingType?: number,
];

export interface ParamObject_ParamsShowPicture {
  pictureId: number;
  name: string;
  origin: PictureOrigin;
  designation: PicturePointDesignation;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
  blendMode: PicutureBlendModeV2;
}

export interface ParamObject_ParamsMovePicture {
  pictureId: number;
  origin: PictureOrigin;
  designation: PicturePointDesignation;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
  blendMode: PicutureBlendModeV2;
  duration: number;
  wait: boolean;
  easingType: number;
}
