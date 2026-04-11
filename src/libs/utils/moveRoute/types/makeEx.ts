import type {
  ROUTE_CHANGE_BLEND_MODE,
  ROUTE_CHANGE_FREQ,
  ROUTE_CHANGE_IMAGE,
  ROUTE_CHANGE_OPACITY,
  ROUTE_CHANGE_SPEED,
  ROUTE_JUMP,
  ROUTE_PLAY_SE,
  ROUTE_SCRIPT,
  ROUTE_SWITCH_OFF,
  ROUTE_SWITCH_ON,
  ROUTE_WAIT,
} from "./constants";
import type { MoveRouteLabels2, MoveRouteLabels3 } from "./labels";
import type {
  MoveCommand_Direction,
  MoveCommand_Move,
} from "./nonParamCommnads";

export type DirectionArray = [
  code: MoveCommand_Move["code"] | keyof MoveRouteLabels2,
  repeat: number,
];

export type TurnArray = [
  code: MoveCommand_Direction["code"] | keyof MoveRouteLabels3,
  repeat: number,
];

export type JumpArray = [
  code: "jump" | typeof ROUTE_JUMP,
  x: number,
  y: number,
];

export type WaitArray = [code: "wait" | typeof ROUTE_WAIT, frames: number];

export type SwitchOnArray = [
  code: "switchOn" | typeof ROUTE_SWITCH_ON,
  switchId: number,
];

export type SwitchOffArray = [
  code: "switchOff" | typeof ROUTE_SWITCH_OFF,
  switchId: number,
];

export type ChangeSpeedArray = [
  code: "changeSpeed" | typeof ROUTE_CHANGE_SPEED,
  speed: number,
];

export type ChangeFrequencyArray = [
  code: "changeFrequency" | typeof ROUTE_CHANGE_FREQ,
  frequency: number,
];

export type ChangeImageArray = [
  code: "changeImage" | typeof ROUTE_CHANGE_IMAGE,
  characterName: string,
  characterIndex: number,
];

export type ChangeOpacityArray = [
  code: "changeOpacity" | typeof ROUTE_CHANGE_OPACITY,
  opacity: number,
];

export type ChangeBlendModeArray = [
  code: "changeBlendMode" | typeof ROUTE_CHANGE_BLEND_MODE,
  blendMode: number,
];

export type PlaySeArray<SoundParamType> = [
  code: "playSe" | typeof ROUTE_PLAY_SE,
  se: SoundParamType,
];

export type ScriptArray = [
  code: "script" | typeof ROUTE_SCRIPT,
  script: string,
];

export type MoveRouteMakeExArray<SoundParamType> =
  | DirectionArray
  | TurnArray
  | JumpArray
  | WaitArray
  | SwitchOnArray
  | SwitchOffArray
  | ChangeSpeedArray
  | ChangeFrequencyArray
  | ChangeImageArray
  | ChangeOpacityArray
  | ChangeBlendModeArray
  | PlaySeArray<SoundParamType>
  | ScriptArray;
