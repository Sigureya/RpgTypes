import {
  CHANGE_ARMORS,
  CHANGE_ITEMS,
  CHANGE_WEAPONS,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change";
import {
  getItemIdFromItemCommand,
  isUsingVariableItemCommand,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change";
import {
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
  commandNameFn: (code: ItemCommandCode) => string,
): (ItemCommandParameterDirect | ItemCommandParameterVariable)[] => {
  return list
    .filter((command) => {
      return (
        command.code === CHANGE_ARMORS ||
        command.code === CHANGE_ITEMS ||
        command.code === CHANGE_WEAPONS
      );
    })
    .map((command) => extractItemChangeData(command, terms, commandNameFn));
};

const KIND_TABKE = {
  [CHANGE_WEAPONS]: "weapon",
  [CHANGE_ARMORS]: "armor",
  [CHANGE_ITEMS]: "item",
} as const;

export const extractItemChangeData = (
  command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons,
  terms: ItemCommandTerms2,
  commandNameFn: (code: ItemCommandCode) => string,
): ItemCommandParameterDirect | ItemCommandParameterVariable => {
  const operand = isUsingVariableItemCommand(command)
    ? {
        direct: false as const,
        variableId: command.parameters[3],
      }
    : {
        direct: true as const,
        value: command.parameters[3],
      };

  const operation =
    command.parameters[1] === OPERATION_GAIN
      ? terms.gain
      : command.parameters[1] === OPERATION_LOSE
        ? terms.lose
        : terms.unknown;

  const includesEquip =
    typeof command.parameters[4] === "boolean"
      ? {
          includesEquip: command.parameters[4],
        }
      : {};

  return {
    itemKind: KIND_TABKE[command.code],
    dataId: getItemIdFromItemCommand(command),
    code: command.code,
    commandNameMZ: commandNameFn(command.code),
    operation: operation,
    ...includesEquip,
    ...operand,
  };
};
