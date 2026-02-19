import { ColorRGBA } from '../../../../../libs';
import { CHANGE_WINDOW_COLOR, EventCommandLike } from '../../../../../libs/eventCommand';
export interface Command_ChangeWindowColor extends EventCommandLike<typeof CHANGE_WINDOW_COLOR> {
    parameters: [color: ColorRGBA];
}
