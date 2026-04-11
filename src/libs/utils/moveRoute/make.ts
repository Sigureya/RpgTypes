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
  ROUTE_JUMP,
  ROUTE_WAIT,
  ROUTE_SWITCH_ON,
  ROUTE_SWITCH_OFF,
  ROUTE_CHANGE_SPEED,
  ROUTE_CHANGE_FREQ,
  ROUTE_CHANGE_IMAGE,
  ROUTE_CHANGE_OPACITY,
  ROUTE_CHANGE_BLEND_MODE,
  ROUTE_PLAY_SE,
  ROUTE_SCRIPT,
} from "./types";
import type { MoveRouteCommandBase } from "./types/base";
import type { MoveRouteLabels2, MoveRouteLabels3 } from "./types/labels";
import type {
  MoveCommand_Direction,
  MoveCommand_Move,
} from "./types/nonParamCommnads";
import type {
  MoveRouteCommand_ChangeBlendMode,
  MoveRouteCommand_ChangeFrequency,
  MoveRouteCommand_ChangeImage,
  MoveRouteCommand_ChangeOpacity,
  MoveRouteCommand_ChangeSpeed,
  MoveRouteCommand_Jump,
  MoveRouteCommand_PlaySE,
  MoveRouteCommand_Script,
  MoveRouteCommand_SwitchOff,
  MoveRouteCommand_SwitchOn,
  MoveRouteCommand_Wait,
} from "./types/paramedCommands";
import type { MoveRouteCommandV2 } from "./types/union";

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
    code: TABLE2[key],
  }) satisfies MoveRouteCommandBase;

export const makeMoveCommandSingleEx = (
  key: keyof MoveRouteLabels3 | keyof MoveRouteLabels2,
): MoveRouteCommandV2 => {
  return {
    code: TABLE2[key],
  };
};

export const makeMoveCommandsSimple = (
  keys: (keyof MoveRouteLabels2 | keyof MoveRouteLabels3)[],
): MoveRouteCommandV2[] => {
  return keys.map(
    (key): MoveRouteCommandV2 => ({
      code: TABLE2[key],
    }),
  );
};

export const makeMoveCommandPlaySE = <SoundParamType>(
  soundParams: SoundParamType,
): MoveRouteCommand_PlaySE<SoundParamType> => ({
  code: ROUTE_PLAY_SE,
  parameters: [soundParams],
});

export const makeMoveCommandJump = (
  x: number,
  y: number,
): MoveRouteCommand_Jump => ({
  code: ROUTE_JUMP,
  parameters: [x, y],
});

export const makeMoveCommandWait = (frames: number): MoveRouteCommand_Wait => ({
  code: ROUTE_WAIT,
  parameters: [frames],
});

export const makeMoveCommandSwitchOn = (
  switchId: number,
): MoveRouteCommand_SwitchOn => ({
  code: ROUTE_SWITCH_ON,
  parameters: [switchId],
});

export const makeMoveCommandSwitchOff = (
  switchId: number,
): MoveRouteCommand_SwitchOff => ({
  code: ROUTE_SWITCH_OFF,
  parameters: [switchId],
});

export const makeMoveCommandChangeSpeed = (
  speed: number,
): MoveRouteCommand_ChangeSpeed => ({
  code: ROUTE_CHANGE_SPEED,
  parameters: [speed],
});

export const makeMoveCommandChangeFrequency = (
  frequency: number,
): MoveRouteCommand_ChangeFrequency => ({
  code: ROUTE_CHANGE_FREQ,
  parameters: [frequency],
});

export const makeMoveCommandChangeImage = (
  characterName: string,
  characterIndex: number,
): MoveRouteCommand_ChangeImage => ({
  code: ROUTE_CHANGE_IMAGE,
  parameters: [characterName, characterIndex],
});

export const makeMoveCommandChangeOpacity = (
  opacity: number,
): MoveRouteCommand_ChangeOpacity => ({
  code: ROUTE_CHANGE_OPACITY,
  parameters: [opacity],
});

export const makeMoveCommandChangeBlendMode = (
  blendMode: number,
): MoveRouteCommand_ChangeBlendMode => ({
  code: ROUTE_CHANGE_BLEND_MODE,
  parameters: [blendMode],
});

export const makeMoveCommandScript = (
  script: string,
): MoveRouteCommand_Script => ({
  code: ROUTE_SCRIPT,
  parameters: [script],
});

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
} as const satisfies DirectionTable & MoveTable;

type DirectionTable = Record<
  keyof MoveRouteLabels3,
  MoveCommand_Direction["code"]
>;

type MoveTable = Record<keyof MoveRouteLabels2, MoveCommand_Move["code"]>;
