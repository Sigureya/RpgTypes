import {
  PICTURE_POINT_DIRECT,
  PICTURE_POINT_VARIABLE,
} from "@RpgTypes/rmmz/eventCommand/commands/picture";
import type {
  Command_ErasePicture,
  Command_MovePicture,
  Command_RotatePicture,
  Command_ShowPicture,
  Command_TintPicture,
} from "@RpgTypes/rmmz/eventCommand/commands/picture";
import {
  movePictureValues,
  rotatePicture,
  showPictureValues,
  tintPicture,
} from "./command";
import { toEasingKind } from "./transform";
import type { Store_Picture } from "./types";

/**
 * 旧来のイベントコマンドから store を更新する。
 *
 * 受け取るのはコマンドそのもの。indent や code は読まないが、
 * 他のイベントコマンド処理と引数の形を揃えるため parameters だけを抜き出さない。
 * 引数の並びはツクールが決めたもので、名前は ParamsArray_* の名前付きタプルが持っている。
 * 値のまま最低レイヤーへ渡すため、途中でオブジェクトを作らない。
 */

export { PICTURE_POINT_DIRECT, PICTURE_POINT_VARIABLE };

/** 変数の読み出し。持ち主から渡してもらう。 */
export type Picture_VariableReader = (variableId: number) => number;

export type Command_Picture =
  | Command_ShowPicture
  | Command_MovePicture
  | Command_RotatePicture
  | Command_TintPicture
  | Command_ErasePicture;

/**
 * 座標の読み出しについて。
 * x/y をまとめて返すと戻り値の一時オブジェクトが毎回できるので値のまま返し、
 * 低レイヤーの呼び出しは 1 箇所に保つ。
 * 指定方法の判定は const に取り、軸ごとの三項演算はその真偽値だけを見る。
 * 呼び出しを直接指定用と変数指定用に複製すると、逆に大幅に遅くなる (計測済み)。
 */

/**
 * 対象のピクチャ番号。
 * どの store を渡すかを決めるのは持ち主 (Screen 相当) の仕事。
 */
export const pictureIdOfCommand = (command: Command_Picture): number =>
  command.parameters[0];

/** 231: ピクチャの表示 */
export const applyShowPictureCommand = (
  store: Store_Picture,
  command: Command_ShowPicture,
  readVariable: Picture_VariableReader,
): Store_Picture => {
  const params = command.parameters;
  const direct = params[3] === PICTURE_POINT_DIRECT;
  const x = direct ? params[4] : readVariable(params[4]);
  const y = direct ? params[5] : readVariable(params[5]);
  return showPictureValues(
    store,
    params[1],
    params[2],
    x,
    y,
    params[6],
    params[7],
    params[8],
    params[9],
  );
};

/** 232: ピクチャの移動 */
export const applyMovePictureCommand = (
  store: Store_Picture,
  command: Command_MovePicture,
  readVariable: Picture_VariableReader,
): Store_Picture => {
  const params = command.parameters;
  const direct = params[3] === PICTURE_POINT_DIRECT;
  const x = direct ? params[4] : readVariable(params[4]);
  const y = direct ? params[5] : readVariable(params[5]);
  return movePictureValues(
    store,
    params[2],
    x,
    y,
    params[6],
    params[7],
    params[8],
    params[9],
    params[10],
    toEasingKind(params[12] ?? 0),
  );
};

/** 233: ピクチャの回転。名前は angle だが実体は 1 フレームあたりの回転速度。 */
export const applyRotatePictureCommand = (
  store: Store_Picture,
  command: Command_RotatePicture,
): Store_Picture => rotatePicture(store, command.parameters[1]);

/** 234: ピクチャの色調変更 */
export const applyTintPictureCommand = (
  store: Store_Picture,
  command: Command_TintPicture,
): Store_Picture =>
  tintPicture(store, command.parameters[1], command.parameters[2]);

/** 待ちフレーム数。0 なら待たない。待つのは呼ぶ側 (インタプリタ) の仕事。 */
export const waitFramesOfMoveCommand = (
  command: Command_MovePicture,
): number => (command.parameters[11] ? command.parameters[10] : 0);

export const waitFramesOfTintCommand = (
  command: Command_TintPicture,
): number => (command.parameters[3] ? command.parameters[2] : 0);
