import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike2 } from '../../../frame';
import { TINT_PICTURE } from '../../../../rpg';
export interface Command_TintPicture extends EventCommandLike2<typeof TINT_PICTURE> {
    parameters: ParamArray_TintPicture;
}
export type ParamArray_TintPicture = [
    pictureId: number,
    tone: ColorRGBA,
    duration: number,
    wait: boolean
];
