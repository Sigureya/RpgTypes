import type {
  Command_MovePicture,
  Command_ShowPicture,
} from "@RpgTypes/rmmz/eventCommand";
import { PICTURE_POINT_VARIABLE } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";

/**
 * 座標の指定方法と x/y の位置は、表示 (231) と移動 (232) で同じ。
 */
export type Command_PicturePoint = Command_ShowPicture | Command_MovePicture;

/**
 * 座標が変数指定か。
 * 分岐そのものは呼び出し元に置く。ここで分岐すると、
 * 変数を読まない場合でも Rmmz_Variables を渡す羽目になる。
 */
export const isPicturePointFromVariable = (
  command: Command_PicturePoint,
): boolean => command.parameters[3] === PICTURE_POINT_VARIABLE;

/** 直接指定の x。変数指定のコマンドに使うと変数番号がそのまま出る。 */
export const readPictureXDirect = (command: Command_PicturePoint): number => {
  return command.parameters[4];
};

export const readPictureYDirect = (command: Command_PicturePoint): number => {
  return command.parameters[5];
};

/** 変数指定の x。x の位置に入っている変数番号を読む。 */
export const readPictureXFromVariable = (
  command: Command_PicturePoint,
  variables: Rmmz_Variables,
): number => {
  const variableId = command.parameters[4];
  return variables.value(variableId);
};

export const readPictureYFromVariable = (
  command: Command_PicturePoint,
  variables: Rmmz_Variables,
): number => {
  const variableId = command.parameters[5];
  return variables.value(variableId);
};
