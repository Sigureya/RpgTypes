import type {
  ParamObject_SelectItem,
  Command_SelectItem,
  ParamArray_SelectItem,
} from "./types";

export const makeCommandSelectItem = (
  params: ParamObject_SelectItem,
  indent: number = 0
): Command_SelectItem => ({
  code: 104,
  parameters: [params.variableId, params.itemType],
  indent,
});

export const fromArraySelectItem = (
  arr: ParamArray_SelectItem
): ParamObject_SelectItem => ({
  variableId: arr[0],
  itemType: arr[1],
});
