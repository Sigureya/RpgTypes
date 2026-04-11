import {
  ROUTE_MOVE_DOWN,
  ROUTE_MOVE_LEFT,
  ROUTE_MOVE_RIGHT,
  ROUTE_MOVE_UP,
  ROUTE_MOVE_LOWER_L,
  ROUTE_MOVE_LOWER_R,
  ROUTE_MOVE_UPPER_L,
  ROUTE_MOVE_UPPER_R,
  ROUTE_MOVE_RANDOM,
  ROUTE_MOVE_TOWARD,
  ROUTE_MOVE_AWAY,
  ROUTE_MOVE_FORWARD,
  ROUTE_MOVE_BACKWARD,
  ROUTE_TURN_180D,
  ROUTE_TURN_90D_L,
  ROUTE_TURN_90D_R,
  ROUTE_TURN_90D_R_L,
  ROUTE_TURN_AWAY,
  ROUTE_TURN_DOWN,
  ROUTE_TURN_LEFT,
  ROUTE_TURN_RANDOM,
  ROUTE_TURN_RIGHT,
  ROUTE_TURN_TOWARD,
  ROUTE_TURN_UP,
} from "./types";
import type { MoveRouteCommandBase } from "./types/base";
import type {
  MoveCommand_Direction,
  MoveCommand_Move,
} from "./types/commandType";
import type { MoveRouteLabels2, MoveRouteLabels3 } from "./types/labels";

export const makeMoveCommandMove = (
  key: keyof MoveRouteLabels2,
): MoveCommand_Move =>
  ({
    code: TABLE2[key],
  }) satisfies MoveRouteCommandBase;

export const makeMoveCommandDirection = (
  key: keyof MoveRouteLabels3,
): MoveCommand_Direction =>
  ({
    code: TABLE3[key],
  }) satisfies MoveRouteCommandBase;

const TABLE2 = {
  moveDown: ROUTE_MOVE_DOWN,
  moveLeft: ROUTE_MOVE_LEFT,
  moveRight: ROUTE_MOVE_RIGHT,
  moveUp: ROUTE_MOVE_UP,
  moveLowerLeft: ROUTE_MOVE_LOWER_L,
  moveLowerRight: ROUTE_MOVE_LOWER_R,
  moveUpperLeft: ROUTE_MOVE_UPPER_L,
  moveUpperRight: ROUTE_MOVE_UPPER_R,
  moveRandom: ROUTE_MOVE_RANDOM,
  moveToward: ROUTE_MOVE_TOWARD,
  moveAway: ROUTE_MOVE_AWAY,
  moveForward: ROUTE_MOVE_FORWARD,
  moveBackward: ROUTE_MOVE_BACKWARD,
} as const satisfies Record<keyof MoveRouteLabels2, MoveCommand_Move["code"]>;

const TABLE3 = {
  turnDown: ROUTE_TURN_DOWN,
  turnLeft: ROUTE_TURN_LEFT,
  turnRight: ROUTE_TURN_RIGHT,
  turnUp: ROUTE_TURN_UP,
  turn90DegreesRight: ROUTE_TURN_90D_R,
  turn90DegreesLeft: ROUTE_TURN_90D_L,
  turn180Degrees: ROUTE_TURN_180D,
  turn90DegreesRightOrLeft: ROUTE_TURN_90D_R_L,
  turnRandom: ROUTE_TURN_RANDOM,
  turnToward: ROUTE_TURN_TOWARD,
  turnAway: ROUTE_TURN_AWAY,
} as const satisfies Record<
  keyof MoveRouteLabels3,
  MoveCommand_Direction["code"]
>;
