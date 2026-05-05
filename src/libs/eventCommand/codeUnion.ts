import type {
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  CHANGE_NAME,
  SHOW_SCROLLING_TEXT_BODY,
  SHOW_CHOICES,
  SCRIPT_EVAL,
  COMMENT_HEAD,
} from "./eventCommandCodes";

export type TextCommandCodeUnion =
  | typeof CHANGE_NICKNAME
  | typeof CHANGE_PROFILE
  | typeof CHANGE_NAME
  | typeof SHOW_SCROLLING_TEXT_BODY
  | typeof SHOW_CHOICES
  | typeof SCRIPT_EVAL
  | typeof COMMENT_HEAD;
