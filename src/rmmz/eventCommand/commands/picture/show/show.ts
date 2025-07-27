import type {
  Command_ShowPicture2,
  ParamObject_ParamsMovePicture,
  Command_MovePicture2,
  ParamsArray_ParamsMovePicture,
  ParamObject_ParamsShowPicture,
} from "./types";

export const makeCommandShowPicture = ({
  pictureId = 0,
  origin = 0,
  name = "",
  x = 0,
  y = 0,
  scaleX = 100,
  scaleY = 100,
  opacity = 255,
  blendMode = 0,
}: Partial<ParamObject_ParamsShowPicture>): Command_ShowPicture2 => ({
  code: 231,
  indent: 0,
  parameters: [
    pictureId,
    name,
    origin,
    x,
    y,
    scaleX,
    scaleY,
    opacity,
    blendMode,
  ],
});

export const makeCommandMovePicture = ({
  pictureId,
  origin,
  x,
  y,
  scaleX,
  scaleY,
  opacity,
  blendMode,
  wait = false,
  easingType = 0,
}: ParamObject_ParamsMovePicture): Command_MovePicture2 => ({
  code: 232,
  indent: 0,
  parameters: [
    pictureId,
    origin,
    x,
    y,
    scaleX,
    scaleY,
    opacity,
    blendMode,
    wait,
    easingType,
  ] as ParamsArray_ParamsMovePicture,
});
