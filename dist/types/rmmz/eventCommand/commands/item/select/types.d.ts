import { EventCommandLike, SELECT_ITEM } from '../../../../../libs/eventCommand';
export interface Command_SelectItem extends EventCommandLike<typeof SELECT_ITEM> {
    parameters: ParamArray_SelectItem;
}
export type ParamArray_SelectItem = [variableId: number, itemType: number];
export interface ParamObject_SelectItem {
    variableId: number;
    itemType: number;
}
