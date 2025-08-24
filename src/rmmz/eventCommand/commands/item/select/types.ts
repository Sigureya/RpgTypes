import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { SELECT_ITEM } from "@RpgTypes/rmmz/rpg";

export interface Command_SelectItem
  extends EventCommandLike2<typeof SELECT_ITEM> {
  parameters: ParamArray_SelectItem;
}

export type ParamArray_SelectItem = [variableId: number, itemType: number];

export interface ParamObject_SelectItem {
  variableId: number;
  itemType: number;
}
