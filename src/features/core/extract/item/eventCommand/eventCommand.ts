import { CHANGE_ARMORS, CHANGE_ITEMS, CHANGE_WEAPONS } from "@RpgTypes/rmmz";
import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "@RpgTypes/rmmz/eventCommand/commands/item";
import {
  OPERAND_DIRECT,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "@RpgTypes/rmmz/eventCommand/commands/item/types/constants";
import type {
  ItemCommandCode,
  ItemCommandParameterDirect,
  ItemCommandParameterVariable,
  ItemCommandTerms2,
} from "./types";

const e2 = () => {};

const KIND_TABKE = {
  [CHANGE_WEAPONS]: "weapon",
  [CHANGE_ARMORS]: "armor",
  [CHANGE_ITEMS]: "item",
} as const;

export const extractItemChangeData = (
  command:
    | Command_ChangeArmors2
    | Command_ChangeItems2
    | Command_ChangeWeapons2,
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
