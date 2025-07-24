import Ajv from "ajv";
import type {
  CommandUnion_ChangeActorText,
  Command_ScrollTextHeader,
  CommandUnion_AnyAudio,
  Command_CommonEvent,
  Command_ShowChoices,
  Command_ShowChoiceWhen,
  Command_InputNumber,
  Command_ShowMessageHeader,
} from "./commands";
import { SCHEMA_COMMAND_CHANGE_ACTOR_TEXT } from "./commands/actor/changeText/schema";
import { SCHEMA_COMMAND_ANY_AUDIO } from "./commands/audio/play/schema";
import { SCHEMA_COMMAND_CALL_COMMON_EVENT } from "./commands/flow/callCommonEvent/schema";
import { SCHEMA_COMMAND_INPUT_NUMBER } from "./commands/message/inputNumber/schema";
import { SCHEMA_COMMAND_SCROLL_TEXT_HEAD } from "./commands/message/scrollText/schema";
import {
  SCHEMA_COMMAND_SHOW_CHOICE_WHEN,
  SCHEMA_COMMAND_SHOW_CHOICES,
} from "./commands/message/setupChoice/schema";
import { SCHEMA_COMMAND_SHOW_MESSAGE } from "./commands/message/showMessage/schema";
import {
  SCHEMA_COMMAND_EMPTY_PARAM,
  SCHEMA_COMMAND_TEXT_BODY,
} from "./unionSchema";
import type {
  CommandUnion_EmptyParam,
  CommandUnion_TextBody,
} from "./unionTypes";

const ajv = new Ajv({ code: { source: true }, strict: true });
// schemaはindex.ts無しで直接importすること！
// 過去に循環参照エラーで苦しんでます

// 各Schemaはtype以外はimportしないこと
// 定数の解決に失敗してエラーになることがある
const changeActorText = ajv.compile(SCHEMA_COMMAND_CHANGE_ACTOR_TEXT);
export const isCommandChangeActorText = (
  data: unknown
): data is CommandUnion_ChangeActorText => {
  return changeActorText(data);
};

const scrollTextHead = ajv.compile(SCHEMA_COMMAND_SCROLL_TEXT_HEAD);
export const isCommandScrollTextHead = (
  data: unknown
): data is Command_ScrollTextHeader => {
  return scrollTextHead(data);
};

const audioCommand = ajv.compile(SCHEMA_COMMAND_ANY_AUDIO);
export const isCommandAudio = (
  data: unknown
): data is CommandUnion_AnyAudio => {
  return audioCommand(data);
};

const emptyParam = ajv.compile(SCHEMA_COMMAND_EMPTY_PARAM);
export const isCommandNonParam = (
  data: unknown
): data is CommandUnion_EmptyParam => {
  return emptyParam(data);
};

const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);
export const isCommandTextBody = (
  command: unknown
): command is CommandUnion_TextBody => {
  return textBody(command);
};

const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);
export const isCommandCommonEvent = (
  data: unknown
): data is Command_CommonEvent => {
  return commonVent(data);
};

const showChoices = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICES);
export const isCommandShowChoices = (
  data: unknown
): data is Command_ShowChoices => {
  return showChoices(data);
};

const showChoiceItem = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICE_WHEN);
export const isCommandShowChoiceItem = (
  data: unknown
): data is Command_ShowChoiceWhen => {
  return showChoiceItem(data);
};

const inputNumber = ajv.compile(SCHEMA_COMMAND_INPUT_NUMBER);
export const isCommandInputNumber = (
  data: unknown
): data is Command_InputNumber => {
  return inputNumber(data);
};

const showMessage = ajv.compile(SCHEMA_COMMAND_SHOW_MESSAGE);
export const isCommandShowMessage = (
  data: unknown
): data is Command_ShowMessageHeader => {
  return showMessage(data);
};
