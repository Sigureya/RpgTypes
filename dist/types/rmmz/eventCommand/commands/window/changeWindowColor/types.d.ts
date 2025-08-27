import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeWindowColor extends EventCommandLike2<138> {
    parameters: [color: ColorRGBA];
}
