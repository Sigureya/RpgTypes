import { EventCommandLike, SHOW_CHOICES_ITEM } from '../../../../../../libs/eventCommand';
export interface ParamObject_ShowChoiceWhen {
    index: number;
    name: string;
}
export type ParamArray_ShowChoiceWhen = [index: number, name: string];
export interface Command_ShowChoiceWhen extends EventCommandLike<typeof SHOW_CHOICES_ITEM> {
    parameters: ParamArray_ShowChoiceWhen;
}
