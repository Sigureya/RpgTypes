import type { Command_ShowScrollingTextBody } from "@RpgTypes/schema";
import {
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
  type Command_ShowScrollingText,
} from "@RpgTypes/schema";
import type {
  ParamArray_ScrollTextHead,
  ParamObject_ScrollTextHead,
} from "./types";
import type {
  ParamArray_ScrollTextBody,
  ParamObject_ScrollTextBody,
} from "./types";

export const toArrayScrollingTextHeader = (
  param: Partial<ParamObject_ScrollTextHead> = {}
): ParamArray_ScrollTextHead => {
  return [param?.speed ?? 4, param?.skip ?? false];
};

export const fromArrayScrollingTextHeader = (
  array: ParamArray_ScrollTextHead
): ParamObject_ScrollTextHead => {
  return {
    speed: array[0],
    skip: array[1],
  };
};

export const makeCommandScrollingTextHeader = (
  param: Partial<ParamObject_ScrollTextHead> = {},
  indent: number = 0
): Command_ShowScrollingText => {
  return {
    code: SHOW_SCROLLING_TEXT,
    indent,
    parameters: toArrayScrollingTextHeader(param),
  };
};

export const toArrayScrollingTextBody = (
  text: string = ""
): ParamArray_ScrollTextBody => {
  return [text];
};

export const fromArrayScrollingTextBody = (
  array: ParamArray_ScrollTextBody
): ParamObject_ScrollTextBody => {
  return {
    content: array[0],
  };
};
export const makeCommandScrollingTextBody = (
  text: string = "",
  indent: number = 0
): Command_ShowScrollingTextBody => {
  return {
    code: SHOW_SCROLLING_TEXT_BODY,
    indent: indent ?? 0,
    parameters: toArrayScrollingTextBody(text),
  };
};
