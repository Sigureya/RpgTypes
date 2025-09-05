import { EventCommandLike } from '../../..';
import { CONDITIONAL_BRANCH } from '../../../../rpg';
import { BranchParameters } from './types/branchParams';
export interface Command_ConditionalBranch extends EventCommandLike<typeof CONDITIONAL_BRANCH> {
    parameters: BranchParameters;
}
export interface Command_ConditionalBranchElse extends EventCommandLike<411> {
    parameters: [];
}
