import { EventCommandLike2 } from '../../../frame';
import { SELECT_ITEM } from '../../../../rpg';
export interface Command_SelectItem extends EventCommandLike2<typeof SELECT_ITEM> {
    parameters: ParamArray_SelectItem;
}
export type ParamArray_SelectItem = [variableId: number, itemType: number];
export interface ParamObject_SelectItem {
    variableId: number;
    itemType: number;
}
