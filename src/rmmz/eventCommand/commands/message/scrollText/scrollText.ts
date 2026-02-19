import {
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/libs/eventCommand";
import type {
  ParamArray_ScrollTextBody,
  ParamObject_ScrollTextBody,
  Command_ScrollTextBody,
} from "./body/types";
import type {
  ParamObject_ScrollTextHeader,
  ParamArray_ScrollTextHeader,
  Command_ScrollTextHeader,
} from "./head/types";

export const toArrayScrollingTextHeader = (
  param: Partial<ParamObject_ScrollTextHeader> = {},
): ParamArray_ScrollTextHeader => {
  return [param?.speed ?? 4, param?.skip ?? false];
};

export const fromArrayScrollingTextHeader = (
  array: ParamArray_ScrollTextHeader,
): ParamObject_ScrollTextHeader => {
  return {
    speed: array[0],
    skip: array[1],
  };
};

export const makeCommandScrollingTextHeader = (
  param: Partial<ParamObject_ScrollTextHeader> = {},
  indent: number = 0,
): Command_ScrollTextHeader => {
  return {
    code: SHOW_SCROLLING_TEXT,
    indent,
    parameters: toArrayScrollingTextHeader(param),
  };
};

export const toArrayScrollingTextBody = (
  text: string = "",
): ParamArray_ScrollTextBody => {
  return [text];
};

export const fromArrayScrollingTextBody = (
  array: ParamArray_ScrollTextBody,
): ParamObject_ScrollTextBody => {
  return {
    content: array[0],
  };
};
export const makeCommandScrollingTextBody = (
  text: string = "",
  indent: number = 0,
): Command_ScrollTextBody => {
  return {
    code: SHOW_SCROLLING_TEXT_BODY,
    indent: indent ?? 0,
    parameters: toArrayScrollingTextBody(text),
  };
};
