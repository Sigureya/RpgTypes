import type { Command_BattleProcessing } from "@RpgTypes/rmmz/eventCommand";
import type { Data_Map } from "@RpgTypes/rmmz/events";
import type {
  Rmmz_Variables,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";
import { resolveTroopIdByCommand } from "./command/battle/battle";
import type { InterprterState } from "./command/types";

interface BattleResult {
  win: boolean;
  lose: boolean;
  escape: boolean;
}

interface BattleQuery {
  troopId: number;
  canEscape: boolean;
  canLose: boolean;
}

interface BattleService {
  startBattle(session: number, battle: BattleQuery): unknown;
  isBattleRunning(): boolean;
  getResult(session: number): BattleResult | null;
  deleteBattleResult(session: number): unknown;
}

const nextState = (state: InterprterState): InterprterState => {
  return {
    ...state,
    codeIndex: state.codeIndex + 1,
  };
};

const battleXXX = (
  command: Command_BattleProcessing,
  state: InterprterState,
  battle: BattleService,
  variables: Rmmz_Variables,
  player: Rmmz_PlayerCharactor,
  map: Data_Map,
  random: (maxWeight: number) => number,
): InterprterState => {
  const result = battle.getResult(state.session);
  if (result) {
    return onBattleEnd(result, battle, state);
  }
  if (battle.isBattleRunning()) {
    return nextState(state);
  }

  const battleQuery = makeBattleQuery(command, variables, player, map, random);
  battle.startBattle(state.session, battleQuery);
  return state;
};

const makeBattleQuery = (
  command: Command_BattleProcessing,
  variables: Rmmz_Variables,
  player: Rmmz_PlayerCharactor,
  map: Data_Map,
  random: (maxWeight: number) => number,
): BattleQuery => {
  const troopId = resolveTroopIdByCommand(
    command,
    variables,
    player,
    map,
    random,
  );
  return {
    troopId: troopId ?? 0,
    canEscape: command.parameters[2],
    canLose: command.parameters[3],
  };
};

const onBattleEnd = (
  result: BattleResult,
  battle: BattleService,
  state: InterprterState,
) => {
  battle.deleteBattleResult(state.session);
  if (result.win) {
    return onBattleWin(state);
  }
  if (result.lose) {
    return onBattleLose(state);
  }
  if (result.escape) {
    return onBattleEscape(state);
  }
  return nextState(state);
};

const onBattleLose = (state: InterprterState): InterprterState => {
  return state;
};

const onBattleEscape = (state: InterprterState): InterprterState => {
  return state;
};

const onBattleWin = (state: InterprterState): InterprterState => {
  return state;
};
