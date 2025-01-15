import type * as $ from "./code";
import type { CommandTableTamplate } from "./commandTableTemplate";

type MoveCodeTable = typeof $;
export type EventCode = MoveCodeTable[keyof MoveCodeTable];

type Table = CommandTableTamplate<
  MoveCodeTable,
  { p: [] },
  { abc: number },
  {
    ROUTE_END: [];
    // ROUTE_MOVE_DOWN: [];
    // ROUTE_MOVE_LEFT: [];
    // ROUTE_MOVE_RIGHT: [];
    // ROUTE_MOVE_UP: [];
    // ROUTE_MOVE_LOWER_L: [];
    // ROUTE_MOVE_LOWER_R: [];
    // ROUTE_MOVE_UPPER_L: [];
    // ROUTE_MOVE_UPPER_R: [];
    // ROUTE_MOVE_RANDOM: [];
    // ROUTE_MOVE_TOWARD: [];
    // ROUTE_MOVE_AWAY: [];
    // ROUTE_MOVE_FORWARD: [];
    // ROUTE_MOVE_BACKWARD: [];
    ROUTE_JUMP: [x: number, y: number];
    // ROUTE_WAIT: [];
    // ROUTE_TURN_DOWN: [];
    // ROUTE_TURN_LEFT: [];
    // ROUTE_TURN_RIGHT: [];
    // ROUTE_TURN_UP: [];
    // ROUTE_TURN_90D_R: [];
    // ROUTE_TURN_90D_L: [];
    // ROUTE_TURN_180D: [];
    // ROUTE_TURN_90D_R_L: [];
    // ROUTE_TURN_RANDOM: [];
    // ROUTE_TURN_TOWARD: [];
    // ROUTE_TURN_AWAY: [];
    // ROUTE_SWITCH_ON: [];
    // ROUTE_SWITCH_OFF: [];
    // ROUTE_CHANGE_SPEED: [];
    // ROUTE_CHANGE_FREQ: [];
    // ROUTE_WALK_ANIME_ON: [];
    // ROUTE_WALK_ANIME_OFF: [];
    // ROUTE_STEP_ANIME_ON: [];
    // ROUTE_STEP_ANIME_OFF: [];
    // ROUTE_DIR_FIX_ON: number;
    // ROUTE_DIR_FIX_OFF: number;
    // ROUTE_THROUGH_ON: number;
    // ROUTE_THROUGH_OFF: number;
    // ROUTE_TRANSPARENT_ON: [];
    // ROUTE_TRANSPARENT_OFF: [];
    // ROUTE_CHANGE_IMAGE: [];
    // ROUTE_CHANGE_OPACITY: [];
    // ROUTE_CHANGE_BLEND_MODE: [];
    // ROUTE_PLAY_SE: [];
    // ROUTE_SCRIPT: [];
  }
>;
export type MoveRouteCommand = Table["table"];
export type MoveRouteCode = Table["codeType"];
export type Command = Table["commandType"];
type CodeKeys = Table["codeKeys"];
const a: MoveRouteCode = 0;
const key: CodeKeys = "ROUTE_END";
