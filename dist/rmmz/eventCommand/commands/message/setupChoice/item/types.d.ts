import { EventCommandLike2 } from '../../../../frame';
export interface ParamObject_ShowChoiceWhen {
    index: number;
    name: string;
}
export type ParamArray_ShowChoiceWhen = [index: number, name: string];
export interface Command_ShowChoiceWhen extends EventCommandLike2<402> {
    parameters: ParamArray_ShowChoiceWhen;
}
