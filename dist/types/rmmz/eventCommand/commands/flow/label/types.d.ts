import { EventCommandLike, LABEL, LABEL_JUMP } from '../../../../../libs/eventCommand';
export interface Command_Label extends EventCommandLike<typeof LABEL> {
    parameters: [label: string];
}
export interface Command_LabelJump extends EventCommandLike<typeof LABEL_JUMP> {
    parameters: [label: string];
}
export type ParamArray_Label = [label: string];
