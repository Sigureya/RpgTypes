import { EventCommandLike2 } from '../../../frame';
export interface Command_Label extends EventCommandLike2<118> {
    parameters: [label: string];
}
export interface Command_LabelJump extends EventCommandLike2<119> {
    parameters: [label: string];
}
export type ParamArray_Label = [label: string];
