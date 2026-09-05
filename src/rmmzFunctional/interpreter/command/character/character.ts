import type { Command_TransferPlayer } from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Message,
  Rmmz_Party,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";

/**
 * @description 場所移動を実行してよいかを判定する。
 * 元実装は戦闘中かメッセージ表示中なら false を返し、同じコマンドを次のフレームで再実行する。
 */
export const canTransferPlayer = (
  party: Pick<Rmmz_Party, "inBattle">,
  message: Pick<Rmmz_Message, "isBusy">,
): boolean => {
  return !party.inBattle() && !message.isBusy();
};

export interface Transfer {
  mapId: number;
  x: number;
  y: number;
  direction: number;
  fadeType: number;
}

export const resplveTransferPlayerPostion = (
  { parameters }: Command_TransferPlayer,
  valiables: Rmmz_Variables,
): Transfer => {
  if (parameters[0] === 0) {
    return {
      mapId: parameters[1],
      x: parameters[2],
      y: parameters[3],
      direction: parameters[4],
      fadeType: parameters[5],
    };
  }
  return {
    mapId: valiables.value(parameters[1]),
    x: valiables.value(parameters[2]),
    y: valiables.value(parameters[3]),
    direction: parameters[4],
    fadeType: parameters[5],
  };
};
