import Ajv from "ajv";
import { SCHEMA_COMMAND_TEXT_BODY } from "./commands/schema";
import { SCHEMA_COMMAND_SHOW_MESSAGE } from "./commands/message/showMessage/schema";
import { SCHEMA_COMMAND_INPUT_NUMBER } from "./commands/message/inputNumber/schema";
import { SCHEMA_COMMAND_CALL_COMMON_EVENT } from "./commands/callCommonEvent/schema";
import { SCHEMA_COMMAND_ANY_AUDIO } from "./commands/audio/schema";
import {
  SCHEMA_COMMAND_SHOW_CHOICES,
  SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
} from "./commands/message/setupChoice/schema";
import type {
  CommandUnion_AnyAudio,
  Command2_CommonEvent,
  Command2_ShowChoices,
  Command2_ShowChoiceItem,
  Command2_InputNumber,
  Command_ShowMessageHeader,
  CommandUnion_TextBody,
  Command2_ScrollTextHead,
} from "./commands";
import { SCHEMA_COMMAND_SCROLL_TEXT_HEAD } from "./commands/message/scrollText/schema";
const ajv = new Ajv();
// schemaはindex.ts無しで直接importすること！
// 過去に循環参照エラーで苦しんでます

const showMessage = ajv.compile(SCHEMA_COMMAND_SHOW_MESSAGE);

const showChoices = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICES);
const showChoiceItem = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICE_ITEM);

const inputNumber = ajv.compile(SCHEMA_COMMAND_INPUT_NUMBER);

const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);
const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);
const audioCommand = ajv.compile(SCHEMA_COMMAND_ANY_AUDIO);
const scrollTextHead = ajv.compile(SCHEMA_COMMAND_SCROLL_TEXT_HEAD);

export const isCommandScrollTextHead = (
  data: unknown
): data is Command2_ScrollTextHead => {
  return scrollTextHead(data);
};

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
