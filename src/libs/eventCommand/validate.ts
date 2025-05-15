import Ajv from "ajv";
import {
  SCHEMA_COMMAND_TEXT_BODY,
  type CommandUnion_TextBody,
} from "./commands/schema";
import {
  type Command2_ShowChoices,
  type Command2_ShowChoiceItem,
  SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
  SCHEMA_COMMAND_SHOW_CHOICES,
} from "./commands/message/setupChoice";
import type { Command2_InputNumber } from "./commands/message/inputNumber/types";
import { SCHEMA_COMMAND_SHOW_MESSAGE } from "./commands/message/showMessage/schema";
import type { Command_ShowMessageHeader } from "./commands/message/showMessage/types";
import { SCHEMA_COMMAND_INPUT_NUMBER } from "./commands/message/inputNumber/schema";
import { SCHEMA_COMMAND_CALL_COMMON_EVENT } from "./commands/callCommonEvent/schema";
import type { Command2_CommonEvent } from "./commands/callCommonEvent/types";
import type { CommandUnion_AnyAudio } from "./commands/audio";
import { SCHEMA_COMMAND_ANY_AUDIO } from "./commands/audio";
const ajv = new Ajv();

const showMessage = ajv.compile(SCHEMA_COMMAND_SHOW_MESSAGE);

const showChoices = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICES);
const showChoiceItem = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICE_ITEM);

const inputNumber = ajv.compile(SCHEMA_COMMAND_INPUT_NUMBER);

const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);
const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);
const audioCommand = ajv.compile(SCHEMA_COMMAND_ANY_AUDIO);

export const isCommandTextBody = (
  command: unknown
): command is CommandUnion_TextBody => {
  return textBody(command);
};

export const isCommandAudio = (
  data: unknown
): data is CommandUnion_AnyAudio => {
  return audioCommand(data);
};

export const isCommandCommonEvent = (
  data: unknown
): data is Command2_CommonEvent => {
  return commonVent(data);
};

export const isCommandShowChoices = (
  data: unknown
): data is Command2_ShowChoices => {
  return showChoices(data);
};
export const isCommandShowChoiceItem = (
  data: unknown
): data is Command2_ShowChoiceItem => {
  return showChoiceItem(data);
};

export const isCommandInputNumber = (
  data: unknown
): data is Command2_InputNumber => {
  return inputNumber(data);
};

export const isCommandShowMessage = (
  data: unknown
): data is Command_ShowMessageHeader => {
  return showMessage(data);
};
