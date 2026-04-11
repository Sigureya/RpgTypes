import {
  makeMoveCommandChangeBlendMode,
  makeMoveCommandChangeFrequency,
  makeMoveCommandChangeImage,
  makeMoveCommandChangeOpacity,
  makeMoveCommandChangeSpeed,
  makeMoveCommandJump,
  makeMoveCommandPlaySE,
  makeMoveCommandScript,
  makeMoveCommandSingleEx,
  makeMoveCommandSwitchOff,
  makeMoveCommandSwitchOn,
  makeMoveCommandWait,
} from "./moveRoute/make";
import {
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
} from "./moveRoute/types/constants";
import type { MoveRouteMakeExArray } from "./moveRoute/types/makeEx";
import type { MoveRouteCommand_PlaySE } from "./moveRoute/types/paramedCommands";
import type { MoveRouteCommandBasic } from "./moveRoute/types/union";
import type { AudioFileParams } from "./types";

export type MoveRouteCommand =
  | MoveRouteCommandBasic
  | MoveRouteCommand_PlaySE<AudioFileParams>;

export const makeMoveCommands = (
  list: readonly MoveRouteMakeExArray<AudioFileParams>[],
): MoveRouteCommand[] => {
  return list.flatMap((entry) => forData(entry));
};

const forData = (
  data: MoveRouteMakeExArray<AudioFileParams>,
): MoveRouteCommand | MoveRouteCommandBasic[] => {
  const code = data[0];
  if (code === ROUTE_PLAY_SE || code === "playSe") {
    const se = data[1];
    return makeMoveCommandPlaySE({
      name: se.name,
      volume: se.volume,
      pitch: se.pitch,
      pan: se.pan,
    });
  }
  if (code === ROUTE_CHANGE_IMAGE || code === "changeImage") {
    return makeMoveCommandChangeImage(data[1], data[2]);
  }
  if (code === ROUTE_SCRIPT || code === "script") {
    return makeMoveCommandScript(data[1]);
  }
  if (code === ROUTE_JUMP || code === "jump") {
    return makeMoveCommandJump(data[1], data[2]);
  }
  if (code === ROUTE_WAIT || code === "wait") {
    return makeMoveCommandWait(data[1]);
  }
  if (code === ROUTE_SWITCH_ON || code === "switchOn") {
    return makeMoveCommandSwitchOn(data[1]);
  }
  if (code === ROUTE_SWITCH_OFF || code === "switchOff") {
    return makeMoveCommandSwitchOff(data[1]);
  }
  if (code === ROUTE_CHANGE_SPEED || code === "changeSpeed") {
    return makeMoveCommandChangeSpeed(data[1]);
  }
  if (code === ROUTE_CHANGE_FREQ || code === "changeFrequency") {
    return makeMoveCommandChangeFrequency(data[1]);
  }
  if (code === ROUTE_CHANGE_OPACITY || code === "changeOpacity") {
    return makeMoveCommandChangeOpacity(data[1]);
  }
  if (code === ROUTE_CHANGE_BLEND_MODE || code === "changeBlendMode") {
    return makeMoveCommandChangeBlendMode(data[1]);
  }
  if (typeof code === "number") {
    return Array.from({ length: data[1] as number }, () => ({ code }));
  }
  if (typeof code === "string") {
    return Array.from({ length: data[1] as number }, () => {
      return makeMoveCommandSingleEx(code);
    });
  }
  return [];
};
