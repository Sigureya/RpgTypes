import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";
import type { CONDITIONAL_BRANCH } from "@RpgTypes/rmmz/rpg";
import type { BranchParameters } from "./types/branchParams";

export interface Command_ConditionalBranch
  extends EventCommandLike<typeof CONDITIONAL_BRANCH> {
  parameters: BranchParameters;
}

export interface Command_ConditionalBranchElse extends EventCommandLike<411> {
  parameters: [];
}
