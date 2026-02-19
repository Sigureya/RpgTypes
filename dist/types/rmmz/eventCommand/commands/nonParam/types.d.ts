import { EventCommandLike, GAME_OVER, GATHER_FOLLOWERS, RETURN_TO_TITLE_SCREEN } from '../../../../libs/eventCommand';
export interface Command_GatherFollowers extends EventCommandLike<typeof GATHER_FOLLOWERS, [
]> {
}
export interface Command_GameOver extends EventCommandLike<typeof GAME_OVER, [
]> {
}
export interface Command_ReturnToTitleScreen extends EventCommandLike<typeof RETURN_TO_TITLE_SCREEN, [
]> {
}
