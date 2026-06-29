import { EventCommandUnknown, EventCommanNoOperation } from '../../../libs';
import { Command_BattleProcessing, Command_BattleProcessing_If, Command_BattleProcessing_Variable } from './battle';
import { CommnandUnion_Branch } from './flow/branch/types/command';
import { Command_BranchElse } from './flow/branch/types/else';
import { Command_ShowChoices, Command_ShowChoiceWhen, ParamObject_SetupChoiceOptions } from './message';
export interface ChoiceThenBlock<Command extends EventCommandUnknown> {
    thenBlock: Command[];
    choiceText: string;
}
export interface BattleBlocks<Command extends EventCommandUnknown> {
    escape?: Command[];
    lose?: Command[];
    win?: Command[];
}
export declare const makeComamndBlockBranch: <Command extends EventCommandUnknown>(branch: CommnandUnion_Branch, thenBlock: Command[], elseBlock: Command[]) => (Command_BranchElse | CommnandUnion_Branch | Command)[];
export declare const makeCommandBracnhElse: (indent: number) => Command_BranchElse;
export declare const makeCommandBlockByBattle: <Command extends EventCommandUnknown>(battle: Command_BattleProcessing | Command_BattleProcessing_Variable, blocks: BattleBlocks<Command>) => (Command | Command_BattleProcessing | Command_BattleProcessing_Variable | Command_BattleProcessing_If | EventCommanNoOperation)[];
export declare const makeCommandBlockChoice: <Command extends EventCommandUnknown>(indent: number, options: Partial<ParamObject_SetupChoiceOptions>, choices: readonly ChoiceThenBlock<Command>[]) => (Command | Command_ShowChoices | Command_ShowChoiceWhen | Command_BranchElse | EventCommanNoOperation)[];
export declare const makeCommandNoOperation: (indent: number) => EventCommanNoOperation;
