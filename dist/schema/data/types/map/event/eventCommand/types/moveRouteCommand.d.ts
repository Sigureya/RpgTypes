import type { AudioFileParams } from "./audioFileParams";
import type * as MoveRouteConstants from "./moveRoute/code";
import type { CommandTemplateSimple } from "./template/";
export type MoveRouteMapper = CommandTemplateSimple<typeof MoveRouteConstants, unknown[], {
    ROUTE_END: [];
    ROUTE_MOVE_DOWN: [];
    ROUTE_MOVE_LEFT: [];
    ROUTE_MOVE_RIGHT: [];
    ROUTE_MOVE_UP: [];
    ROUTE_MOVE_LOWER_L: [];
    ROUTE_MOVE_LOWER_R: [];
    ROUTE_MOVE_UPPER_L: [];
    ROUTE_MOVE_UPPER_R: [];
    ROUTE_MOVE_RANDOM: [];
    ROUTE_MOVE_TOWARD: [];
    ROUTE_MOVE_AWAY: [];
    ROUTE_MOVE_FORWARD: [];
    ROUTE_MOVE_BACKWARD: [];
    ROUTE_JUMP: [x: number, y: number];
    ROUTE_WAIT: [frames: number];
    ROUTE_TURN_DOWN: [];
    ROUTE_TURN_LEFT: [];
    ROUTE_TURN_RIGHT: [];
    ROUTE_TURN_UP: [];
    ROUTE_TURN_90D_R: [];
    ROUTE_TURN_90D_L: [];
    ROUTE_TURN_180D: [];
    ROUTE_TURN_90D_R_L: [];
    ROUTE_TURN_RANDOM: [];
    ROUTE_TURN_TOWARD: [];
    ROUTE_TURN_AWAY: [];
    ROUTE_SWITCH_ON: [switchId: number];
    ROUTE_SWITCH_OFF: [switchId: number];
    ROUTE_CHANGE_SPEED: [speed: number];
    ROUTE_CHANGE_FREQ: [frequency: number];
    ROUTE_WALK_ANIME_ON: [];
    ROUTE_WALK_ANIME_OFF: [];
    ROUTE_STEP_ANIME_ON: [];
    ROUTE_STEP_ANIME_OFF: [];
    ROUTE_DIR_FIX_ON: [];
    ROUTE_DIR_FIX_OFF: [];
    ROUTE_THROUGH_ON: [];
    ROUTE_THROUGH_OFF: [];
    ROUTE_TRANSPARENT_ON: [];
    ROUTE_TRANSPARENT_OFF: [];
    ROUTE_CHANGE_IMAGE: [characterName: string, characterIndex: number];
    ROUTE_CHANGE_OPACITY: [opacity: number];
    ROUTE_CHANGE_BLEND_MODE: [blendMode: number];
    ROUTE_PLAY_SE: [se: AudioFileParams];
    ROUTE_SCRIPT: [script: string];
}>;
export type MoveRouteCommand = MoveRouteMapper["commandType"];
