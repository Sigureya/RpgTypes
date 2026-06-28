import {
  BATTLE_PROCESSING,
  BATTLE_PROCESSING_IF_WIN,
  BATTLE_PROCESSING_IF_ESCAPE,
  BATTLE_PROCESSING_IF_LOSE,
  BATTLE_PROCESSING_BLOCK_END,
} from "@RpgTypes/libs";
import { BATTLE_VARIABLE, BATTLE_DIRECT, BATTLE_ENCOUNT } from "./constants";
import type {
  Command_BattleProcessing,
  Command_BattleProcessing_Variable,
  ParamObject_BattleProcessing_Direct,
  ParamArray_BattleProcessing_Direct,
  ParamObject_BattleProcessing_Variable,
  ParamObject_BattleBase,
  ParamArray_BattleProcessing_Encount,
  Command_BattleProcessing_If,
  Command_BattleProcessing_BlockEnd,
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

export const makeCommandBattleProcessingIfWin = (
  indent: number = 0,
): Command_BattleProcessing_If => ({
  code: BATTLE_PROCESSING_IF_WIN,
  indent: indent,
  parameters: [],
});

export const makeCommandBattleProcessingIfEscape = (
  indent: number = 0,
): Command_BattleProcessing_If => ({
  code: BATTLE_PROCESSING_IF_ESCAPE,
  indent: indent,
  parameters: [],
});

export const makeCommandBattleProcessingIfLose = (
  indent: number = 0,
): Command_BattleProcessing_If => ({
  code: BATTLE_PROCESSING_IF_LOSE,
  indent: indent,
  parameters: [],
});

export const makeCommandBattleProcessingBlockEnd = (
  indent: number = 0,
): Command_BattleProcessing_BlockEnd => ({
  code: BATTLE_PROCESSING_BLOCK_END,
  indent: indent,
  parameters: [],
});
