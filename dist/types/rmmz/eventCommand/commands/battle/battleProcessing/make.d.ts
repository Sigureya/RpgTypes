import { ParamObject_BattleProcessing_Direct, Command_BattleProcessing, ParamObject_BattleProcessing_Variable, ParamObject_BattleBase, Command_BattleProcessing_Variable } from './types';
export declare const isCommandBattleProcessingVariable: (command: Command_BattleProcessing) => command is Command_BattleProcessing_Variable;
export declare const makeCommandBattleProcessingDirect: ({ troopId, canEscape, canLose, }: Partial<ParamObject_BattleProcessing_Direct>, indent?: number) => Command_BattleProcessing;
export declare const makeCommandBattleProcessingVariable: ({ variableId, canEscape, canLose, }: Partial<ParamObject_BattleProcessing_Variable>, indent?: number) => Command_BattleProcessing_Variable;
export declare const makeCommandBattleProcessingEncount: ({ canEscape, canLose }: Partial<ParamObject_BattleBase>, indent?: number) => Command_BattleProcessing;
