import { MOVE_PICTURE, SHOW_PICTURE } from "@RpgTypes/libs/eventCommand";
import type {
  Command_MovePicture,
  Command_ShowPicture,
  ParamObject_ParamsMovePicture,
  ParamObject_ParamsShowPicture,
} from "./types";

export const makeCommandShowPicture = ({
  pictureId = 0,
  name = "",
  origin = 0,
  designation = 0,
  x = 0,
  y = 0,
  scaleX = 100,
  scaleY = 100,
  opacity = 255,
  blendMode = 0,
}: Partial<ParamObject_ParamsShowPicture>): Command_ShowPicture => ({
  code: SHOW_PICTURE,
  indent: 0,
  parameters: [
    pictureId,
    name,
    origin,
    designation,
    x,
    y,
    scaleX,
    scaleY,
    opacity,
    blendMode,
  ],
});

export const makeCommandMovePicture = ({
  pictureId = 0,
  origin = 0,
  designation = 0,
  x = 0,
  y = 0,
  scaleX = 100,
  scaleY = 100,
  opacity = 255,
  blendMode = 0,
  duration = 0,
  wait = false,
  easingType = 0,
}: Partial<ParamObject_ParamsMovePicture>): Command_MovePicture => ({
  code: MOVE_PICTURE,
  indent: 0,
  parameters: [
    pictureId,
    0,
    origin,
    designation,
    x,
    y,
    scaleX,
    scaleY,
    opacity,
    blendMode,
    duration,
    wait,
    easingType,
  ],
});
