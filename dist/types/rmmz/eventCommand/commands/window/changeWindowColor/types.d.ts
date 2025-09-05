import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike } from '../../../frame';
export interface Command_ChangeWindowColor extends EventCommandLike<138> {
    parameters: [color: ColorRGBA];
}
