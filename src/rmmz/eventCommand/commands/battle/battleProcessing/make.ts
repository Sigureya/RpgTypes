import { BATTLE_PROCESSING } from "@RpgTypes/libs/eventCommand";
import { BATTLE_DIRECT, BATTLE_ENCOUNT, BATTLE_VARIABLE } from "./constants";
import type {
  ParamObject_BattleProcessing_Direct,
  Command_BattleProcessing,
  ParamObject_BattleProcessing_Variable,
  ParamObject_BattleBase,
  ParamArray_BattleProcessing_Direct,
  ParamArray_BattleProcessing_Encount,
  Command_BattleProcessing_Variable,
} from "./types";

export const isCommandBattleProcessingVariable = (
  command: Command_BattleProcessing,
): command is Command_BattleProcessing_Variable => {
  return command.parameters[0] === BATTLE_VARIABLE;
};

export const makeCommandBattleProcessingDirect = (
  {
    troopId = 0,
    canEscape = false,
    canLose = false,
  }: Partial<ParamObject_BattleProcessing_Direct>,
  indent: number = 0,
): Command_BattleProcessing => ({
  code: BATTLE_PROCESSING,
  indent: indent,
  parameters: [
    BATTLE_DIRECT,
    troopId,
    canEscape,
    canLose,
  ] satisfies ParamArray_BattleProcessing_Direct,
});

export const makeCommandBattleProcessingVariable = (
  {
    variableId = 0,
    canEscape = false,
    canLose = false,
  }: Partial<ParamObject_BattleProcessing_Variable>,
  indent: number = 0,
): Command_BattleProcessing_Variable => ({
  code: BATTLE_PROCESSING,
  indent: indent,
  parameters: [BATTLE_VARIABLE, variableId, canEscape, canLose],
});

export const makeCommandBattleProcessingEncount = (
  { canEscape = false, canLose = false }: Partial<ParamObject_BattleBase>,
  indent: number = 0,
): Command_BattleProcessing => ({
  code: BATTLE_PROCESSING,
  indent: indent,
  parameters: [
    BATTLE_ENCOUNT,
    0,
    canEscape,
    canLose,
  ] satisfies ParamArray_BattleProcessing_Encount,
});
