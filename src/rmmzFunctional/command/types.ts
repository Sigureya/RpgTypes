/* eslint-disable @functional/no-let */
/* eslint-disable @functional/no-loop-statements */
import type {
  Command_BattleProcessing,
  EventCommand,
  ParamObject_ShopGoods,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Map } from "@RpgTypes/rmmz/events";
import type {
  Rmmz_Variables,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";
import { ggTroopId } from "./battle/battle";

export interface InterprterState {
  /**
   * @description 別シーンから結果を受け取る際に使う
   */
  session: number;
  codeIndex: number;
  source: number;
}

export const skipBranch = (
  state: InterprterState,
  commands: ReadonlyArray<EventCommand>,
  indent: number,
): InterprterState => {
  for (let i = state.codeIndex + 1; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd.indent > indent) {
      return {
        ...state,
        codeIndex: i,
      };
    }
  }
  return {
    ...state,
    codeIndex: commands.length,
  };
};
