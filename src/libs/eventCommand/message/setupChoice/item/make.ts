import { SHOW_CHOICES_ITEM } from "@RpgTypes/schema";
import type {
  ParamObject_ShowChoiceItem,
  Command2_ShowChoiceItem,
} from "./types";
import type { ParamArray_ShowChoiceItem } from "./types";

export const makeCommand2_ShowChoiceItem = (
  param: Partial<ParamObject_ShowChoiceItem> | undefined,
  indent: number = 0
): Command2_ShowChoiceItem => ({
  code: SHOW_CHOICES_ITEM,
  indent,
  parameters: [param?.index ?? 0, param?.name ?? ""],
});

export const fromArraySetupChoiceItem = (
  array: ParamArray_ShowChoiceItem
): ParamObject_ShowChoiceItem => ({
  index: array[0],
  name: array[1],
});

export const toArraySetupChoiceItem = (
  object: Partial<ParamObject_ShowChoiceItem>
): ParamArray_ShowChoiceItem => [object.index ?? 0, object.name ?? ""];
