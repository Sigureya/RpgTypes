import Ajv from "ajv";
import SCHEMA_COMMAND_EMPTY_PARAM from "./commandEmptyParam.schema";
import type {
  CommandUnion_ChangeActorText,
  Command_ScrollTextHeader,
  Command_CommonEvent,
} from "./commands";
import SCHEMA_COMMAND_CHANGE_ACTOR_TEXT from "./commands/actor/changeText/schema";
import SCHEMA_COMMAND_CALL_COMMON_EVENT from "./commands/flow/callCommonEvent/schema";
import SCHEMA_COMMAND_SCROLL_TEXT_HEAD from "./commands/message/scrollText/head/schema";
import SCHEMA_COMMAND_TEXT_BODY from "./commandTextParam.schema";
import type {
  CommandUnion_EmptyParam,
  CommandUnion_TextBody,
} from "./unionTypes";

const ajv = new Ajv({ strict: true });
// schemaはindex.ts無しで直接importすること！
// 過去に循環参照エラーで苦しんでます

// 各Schemaはtype以外はimportしないこと
// 定数の解決に失敗してエラーになることがある
const changeActorText = ajv.compile(SCHEMA_COMMAND_CHANGE_ACTOR_TEXT);
export const isCommandChangeActorText = (
  data: unknown,
): data is CommandUnion_ChangeActorText => {
  return changeActorText(data);
};

const scrollTextHead = ajv.compile(SCHEMA_COMMAND_SCROLL_TEXT_HEAD);
export const isCommandScrollTextHead = (
  data: unknown,
): data is Command_ScrollTextHeader => {
  return scrollTextHead(data);
};

const emptyParam = ajv.compile(SCHEMA_COMMAND_EMPTY_PARAM);
export const isCommandNonParam = (
  data: unknown,
): data is CommandUnion_EmptyParam => {
  return emptyParam(data);
};

const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);
export const isCommandTextBody = (
  command: unknown,
): command is CommandUnion_TextBody => {
  return textBody(command);
};

const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);
export const isCommandCommonEvent = (
  data: unknown,
): data is Command_CommonEvent => {
  return commonVent(data);
};
