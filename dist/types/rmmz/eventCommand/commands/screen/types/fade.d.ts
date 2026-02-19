import { EventCommandLike, FADEOUT_SCREEN, FADEIN_SCREEN } from '../../../../../libs/eventCommand';
export interface Command_FadeOutScreen extends EventCommandLike<typeof FADEOUT_SCREEN> {
    parameters: [];
}
export interface Command_FadeInScreen extends EventCommandLike<typeof FADEIN_SCREEN, [
]> {
}
