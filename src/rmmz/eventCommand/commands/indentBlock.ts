import type { EventCommandUnknown } from "@RpgTypes/libs";
import { CONDITIONAL_BRANCH_ELSE } from "@RpgTypes/libs";
import type { CommnandUnion_Branch } from "./flow/branch/types/command";
import type { Command_BranchElse } from "./flow/branch/types/else";

export const makeComamndBlockBranch = <Command extends EventCommandUnknown>(
  branch: CommnandUnion_Branch,
  thenBlock: Command[],
  elseBlock: Command[],
) => {
  return [
    branch,
    ...thenBlock,
    makeCommandBracnhElse(branch.indent),
    ...elseBlock,
  ];
};

export const makeCommandBracnhElse = (indent: number): Command_BranchElse => {
  return {
    code: CONDITIONAL_BRANCH_ELSE,
    indent,
    parameters: [],
  };
};
