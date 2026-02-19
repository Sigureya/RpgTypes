import type {
  EventCommandLike,
  CONDITIONAL_BRANCH,
  CONDITIONAL_BRANCH_ELSE,
} from "@RpgTypes/libs/eventCommand";
import type { BranchParameters } from "./types/branchParams";

export interface Command_ConditionalBranch extends EventCommandLike<
  typeof CONDITIONAL_BRANCH
> {
  parameters: BranchParameters;
}

export interface Command_ConditionalBranchElse extends EventCommandLike<
  typeof CONDITIONAL_BRANCH_ELSE
> {
  parameters: [];
}
