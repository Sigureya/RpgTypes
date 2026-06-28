import type {
  EventCommandUnknown,
  EventCommanNoOperation,
} from "@RpgTypes/libs";
import { CONDITIONAL_BRANCH_ELSE, NO_OPERATION } from "@RpgTypes/libs";
import type {
  Command_BattleProcessing,
  Command_BattleProcessing_If,
  Command_BattleProcessing_Variable,
} from "./battle";
import {
  makeCommandBattleProcessingIfEscape,
  makeCommandBattleProcessingIfLose,
  makeCommandBattleProcessingIfWin,
} from "./battle/battleProcessing/make";
import type { CommnandUnion_Branch } from "./flow/branch/types/command";
import type { Command_BranchElse } from "./flow/branch/types/else";
import type {
  Command_ShowChoices,
  Command_ShowChoiceWhen,
  ParamObject_SetupChoiceOptions,
} from "./message";
import { makeCommandSetupChoice, makeCommandShowChoiceItem } from "./message";

export interface ChoiceThenBlock<Command extends EventCommandUnknown> {
  thenBlock: Command[];
  choiceText: string;
}

export interface BattleBlocks<Command extends EventCommandUnknown> {
  escape?: Command[];
  lose?: Command[];
  win?: Command[];
}

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

export const makeCommandBlockByBattle = <Command extends EventCommandUnknown>(
  battle: Command_BattleProcessing | Command_BattleProcessing_Variable,
  blocks: BattleBlocks<Command>,
): (
  | Command
  | Command_BattleProcessing
  | Command_BattleProcessing_Variable
  | Command_BattleProcessing_If
  | EventCommanNoOperation
)[] => {
  const win = blocks.win
    ? makeBlockWithHead(
        makeCommandBattleProcessingIfWin(battle.indent),
        blocks.win,
      )
    : [];
  const escape = blocks.escape
    ? makeBlockWithHead(
        makeCommandBattleProcessingIfEscape(battle.indent),
        blocks.escape,
      )
    : [];
  const lose = blocks.lose
    ? makeBlockWithHead(
        makeCommandBattleProcessingIfLose(battle.indent),
        blocks.lose,
      )
    : [];

  return [battle, win, escape, lose].flat(2);
};

export const makeCommandBlockChoice = <Command extends EventCommandUnknown>(
  indent: number,
  options: Partial<ParamObject_SetupChoiceOptions>,
  choices: readonly ChoiceThenBlock<Command>[],
): (
  | Command
  | Command_ShowChoices
  | Command_ShowChoiceWhen
  | Command_BranchElse
  | EventCommanNoOperation
)[] => {
  const c: Command_ShowChoices = makeCommandSetupChoice(
    {
      background: options.background,
      cancelType: options.cancelType,
      defaultType: options.defaultType,
      positionType: options.positionType,
      choices: choices.map((c) => c.choiceText),
    },
    indent,
  );
  return [c, ...xxx(indent, choices)];
};

const xxx = <T extends EventCommandUnknown>(
  indent: number,
  cx: readonly ChoiceThenBlock<T>[],
): (T | Command_ShowChoiceWhen)[] => {
  return cx.flatMap((c, index) => {
    return [
      makeCommandShowChoiceItem({ index, name: c.choiceText }, indent),
      ...c.thenBlock,
    ];
  });
};

const makeBlockWithHead = <
  Head extends EventCommandUnknown,
  Command extends EventCommandUnknown,
>(
  head: Head,
  block: readonly Command[],
): (readonly Command[] | Head | EventCommanNoOperation)[] => {
  if (block.length === 0) {
    return [head];
  }
  const last = block[block.length - 1];
  if (last.code === NO_OPERATION) {
    return [head, block];
  }
  return [head, block, makeCommandNoOperation(head.indent)];
};

export const makeCommandNoOperation = (
  indent: number,
): EventCommanNoOperation => {
  return {
    code: NO_OPERATION,
    indent,
    parameters: [],
  };
};
