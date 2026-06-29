import { Command_BattleProcessing, Command_BattleProcessing_Variable, ParamObject_BattleProcessing_Direct, ParamObject_BattleProcessing_Variable, ParamObject_BattleBase, Command_BattleProcessing_If, Command_BattleProcessing_BlockEnd } from './types';
export declare const isCommandBattleProcessingVariable: (command: Command_BattleProcessing) => command is Command_BattleProcessing_Variable;
export declare const makeCommandBattleProcessingDirect: ({ troopId, canEscape, canLose, }: Partial<ParamObject_BattleProcessing_Direct>, indent?: number) => Command_BattleProcessing;
export declare const makeCommandBattleProcessingVariable: ({ variableId, canEscape, canLose, }: Partial<ParamObject_BattleProcessing_Variable>, indent?: number) => Command_BattleProcessing_Variable;
export declare const makeCommandBattleProcessingEncount: ({ canEscape, canLose }: Partial<ParamObject_BattleBase>, indent?: number) => Command_BattleProcessing;
export declare const makeCommandBattleProcessingIfWin: (indent?: number) => Command_BattleProcessing_If;
export declare const makeCommandBattleProcessingIfEscape: (indent?: number) => Command_BattleProcessing_If;
export declare const makeCommandBattleProcessingIfLose: (indent?: number) => Command_BattleProcessing_If;
export declare const makeCommandBattleProcessingBlockEnd: (indent?: number) => Command_BattleProcessing_BlockEnd;
