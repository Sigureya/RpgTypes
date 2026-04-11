import type {
  ROUTE_JUMP,
  ROUTE_CHANGE_IMAGE,
  ROUTE_WAIT,
  ROUTE_SWITCH_ON,
  ROUTE_SWITCH_OFF,
  ROUTE_CHANGE_SPEED,
  ROUTE_CHANGE_FREQ,
  ROUTE_CHANGE_OPACITY,
  ROUTE_CHANGE_BLEND_MODE,
  ROUTE_PLAY_SE,
  ROUTE_SCRIPT,
} from "./constants";

export interface MoveRouteCommand_Jump {
  code: typeof ROUTE_JUMP;
  parameters: [x: number, y: number];
}

export interface MoveRouteCommand_ChangeImage {
  code: typeof ROUTE_CHANGE_IMAGE;
  parameters: [characterName: string, characterIndex: number];
}

export interface MoveRouteCommand_Wait {
  code: typeof ROUTE_WAIT;
  parameters: [frames: number];
}

export interface MoveRouteCommand_SwitchOn {
  code: typeof ROUTE_SWITCH_ON;
  parameters: [switchId: number];
}

export interface MoveRouteCommand_SwitchOff {
  code: typeof ROUTE_SWITCH_OFF;
  parameters: [switchId: number];
}

export interface MoveRouteCommand_ChangeSpeed {
  code: typeof ROUTE_CHANGE_SPEED;
  parameters: [speed: number];
}

export interface MoveRouteCommand_ChangeFrequency {
  code: typeof ROUTE_CHANGE_FREQ;
  parameters: [frequency: number];
}

export interface MoveRouteCommand_ChangeOpacity {
  code: typeof ROUTE_CHANGE_OPACITY;
  parameters: [opacity: number];
}

export interface MoveRouteCommand_ChangeBlendMode {
  code: typeof ROUTE_CHANGE_BLEND_MODE;
  parameters: [blendMode: number];
}

export interface MoveRouteCommand_PlaySE<SoundParamType> {
  code: typeof ROUTE_PLAY_SE;
  parameters: [se: SoundParamType];
}

export interface MoveRouteCommand_Script {
  code: typeof ROUTE_SCRIPT;
  parameters: [script: string];
}
