import { EventCommandLike2 } from '../../..';
import { CONDITIONAL_BRANCH } from '../../../../rpg';
import { BranchParameters } from './types/branchParams';
export interface Command_ConditionalBranch extends EventCommandLike2<typeof CONDITIONAL_BRANCH> {
    parameters: BranchParameters;
}
export interface Command_ConditionalBranchElse extends EventCommandLike2<411> {
    parameters: [];
}
