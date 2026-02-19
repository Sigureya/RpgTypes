import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike, TINT_PICTURE } from '../../../../../libs/eventCommand';
export interface Command_TintPicture extends EventCommandLike<typeof TINT_PICTURE> {
    parameters: ParamArray_TintPicture;
}
export type ParamArray_TintPicture = [
    pictureId: number,
    tone: ColorRGBA,
    duration: number,
    wait: boolean
];
