import { EventCommandLike } from '../../../frame';
export interface Command_Label extends EventCommandLike<118> {
    parameters: [label: string];
}
export interface Command_LabelJump extends EventCommandLike<119> {
    parameters: [label: string];
}
export type ParamArray_Label = [label: string];
