import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand";
import type { BranchParameters } from "./types/branchParams";

export interface Command_ConditionalBranchElse extends EventCommandLike2<411> {
  parameters: BranchParameters;
}
