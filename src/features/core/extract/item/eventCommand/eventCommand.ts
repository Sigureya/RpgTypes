import { CHANGE_ARMORS, CHANGE_ITEMS, CHANGE_WEAPONS } from "@RpgTypes/rmmz";
import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change";
import {
  OPERAND_DIRECT,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change/types/constants";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand/commands/union";
import type {
  ItemCommandCode,
  ItemCommandParameterDirect,
  ItemCommandParameterVariable,
  ItemCommandTerms2,
} from "./types";

export const extractItemCommands = (
  list: ReadonlyArray<EventCommand>,
  terms: ItemCommandTerms2,
  commandNameFn: (code: ItemCommandCode) => string
): (ItemCommandParameterDirect | ItemCommandParameterVariable)[] => {
  return list.reduce(
    (
      acc: (ItemCommandParameterDirect | ItemCommandParameterVariable)[],
      command
    ) => {
      if (
        command.code === CHANGE_ARMORS ||
        command.code === CHANGE_ITEMS ||
        command.code === CHANGE_WEAPONS
      ) {
        acc.push(extractItemChangeData(command, terms, commandNameFn));
      }
      return acc;
    },
    []
  );
};

const KIND_TABKE = {
  [CHANGE_WEAPONS]: "weapon",
  [CHANGE_ARMORS]: "armor",
  [CHANGE_ITEMS]: "item",
} as const;

export const extractItemChangeData = (
  command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons,
  terms: ItemCommandTerms2,
  commandNameFn: (code: ItemCommandCode) => string
): ItemCommandParameterDirect | ItemCommandParameterVariable => {
  const operand =
    command.parameters[3] === OPERAND_DIRECT
      ? {
          direct: true as const,
          value: command.parameters[2],
        }
      : {
          direct: false as const,
          variableId: command.parameters[2],
        };

  const operation =
    command.parameters[0] === OPERATION_GAIN
      ? terms.gain
      : command.parameters[0] === OPERATION_LOSE
      ? terms.lose
      : terms.unknown;
  return {
    itemKind: KIND_TABKE[command.code],
    dataId: command.parameters[1],
    code: command.code,
    commandNameMZ: commandNameFn(command.code),
    operation: operation,
    includesEquip: command.parameters[4],
    ...operand,
  };
};
