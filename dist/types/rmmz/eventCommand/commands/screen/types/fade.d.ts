import { EventCommandLike } from '../../../frame';
import { FADEIN_SCREEN, FADEOUT_SCREEN } from '../../../../rpg';
export interface Command_FadeOutScreen extends EventCommandLike<typeof FADEOUT_SCREEN> {
    parameters: [];
}
export interface Command_FadeInScreen extends EventCommandLike<typeof FADEIN_SCREEN, [
]> {
}
