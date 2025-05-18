import Ajv from "ajv";
import { SCHEMA_COMMAND_TEXT_BODY } from "./commands/schema";
import { SCHEMA_COMMAND_SHOW_MESSAGE } from "./commands/message/showMessage/schema";
import { SCHEMA_COMMAND_INPUT_NUMBER } from "./commands/message/inputNumber/schema";
import { SCHEMA_COMMAND_ANY_AUDIO } from "./commands/audio/play/schema";
import {
  SCHEMA_COMMAND_SHOW_CHOICES,
  SCHEMA_COMMAND_SHOW_CHOICE_WHEN,
} from "./commands/message/setupChoice/schema";
import type {
  CommandUnion_AnyAudio,
  Command_ShowChoices,
  Command_ShowChoiceWhen,
  Command2_InputNumber,
  Command_ShowMessageHeader,
  CommandUnion_TextBody,
  Command_ScrollTextHeader,
  CommandUnion_ChangeActorText,
  Command_CommonEvent,
} from "./commands";
import { SCHEMA_COMMAND_SCROLL_TEXT_HEAD } from "./commands/message/scrollText/schema";
import { SCHEMA_COMMAND_CHANGE_ACTOR_TEXT } from "./commands/actor/changeText/schema";
import { SCHEMA_COMMAND_CALL_COMMON_EVENT } from "./commands/flow/callCommonEvent/schema";

const ajv = new Ajv();
// schemaはindex.ts無しで直接importすること！
// 過去に循環参照エラーで苦しんでます
const changeActorText = ajv.compile(SCHEMA_COMMAND_CHANGE_ACTOR_TEXT);
const inputNumber = ajv.compile(SCHEMA_COMMAND_INPUT_NUMBER);
const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);

const showChoiceItem = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICE_WHEN);
const showMessage = ajv.compile(SCHEMA_COMMAND_SHOW_MESSAGE);

const showChoices = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICES);

const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);
const audioCommand = ajv.compile(SCHEMA_COMMAND_ANY_AUDIO);
const scrollTextHead = ajv.compile(SCHEMA_COMMAND_SCROLL_TEXT_HEAD);

export const isCommandChangeActorText = (
  data: unknown
): data is CommandUnion_ChangeActorText => {
  return changeActorText(data);
};

export const isCommandScrollTextHead = (
  data: unknown
): data is Command_ScrollTextHeader => {
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
): data is Command_CommonEvent => {
  return commonVent(data);
};

export const isCommandShowChoices = (
  data: unknown
): data is Command_ShowChoices => {
  return showChoices(data);
};
export const isCommandShowChoiceItem = (
  data: unknown
): data is Command_ShowChoiceWhen => {
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
