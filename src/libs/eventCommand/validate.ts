import Ajv from "ajv";
import type {
  Command2_CommonEvent,
  Command2_ShowChoices,
  Command2_ShowChoiceItem,
  Command2_InputNumber,
  Command_ShowMessageHeader,
  CommandUnion_AnyAudio,
  CommandUnion_TextBody,
} from "./commands";
import {
  SCHEMA_COMMAND_CALL_COMMON_EVENT,
  SCHEMA_COMMAND_SHOW_MESSAGE,
  SCHEMA_COMMAND_SHOW_CHOICES,
  SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
  SCHEMA_COMMAND_INPUT_NUMBER,
  SCHEMA_COMMAND_ANY_AUDIO,
  SCHEMA_COMMAND_TEXT_BODY,
} from "./commands";
const ajv = new Ajv();

const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);

const showMessage = ajv.compile(SCHEMA_COMMAND_SHOW_MESSAGE);

const showChoices = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICES);
const showChoiceItem = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICE_ITEM);

const inputNumber = ajv.compile(SCHEMA_COMMAND_INPUT_NUMBER);
const audioCommand = ajv.compile(SCHEMA_COMMAND_ANY_AUDIO);

const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);

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
