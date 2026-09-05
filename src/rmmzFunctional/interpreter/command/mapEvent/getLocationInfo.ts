import type { Command_GetLocationInfo } from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapLocationSource,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";

type Point = { x: number; y: number };
export const commandGetLocationInfo = (
  command: Command_GetLocationInfo,
  sourceEventId: number,
  variables: Rmmz_Variables,
  map: Rmmz_MapLocationSource<Point>,
  player: Point,
): void => {
  const value = resolveLocationInfo(
    command,
    sourceEventId,
    variables,
    map,
    player,
  );
  variables.setValue(command.parameters[0], value);
};

export const resolveLocationInfo = (
  command: Command_GetLocationInfo,
  sourceEventId: number,
  variables: Rmmz_Variables,
  map: Rmmz_MapLocationSource<Point>,
  player: Point,
): number => {
  const pos = resolveLocationPoint(
    command,
    sourceEventId,
    variables,
    map,
    player,
  );
  return resolveValue(pos, command.parameters[1], map);
};

const resolveValue = (
  { x, y }: Point,
  mode: number,
  map: Rmmz_MapLocationSource<unknown>,
): number => {
  switch (mode) {
    case 0:
      return map.terrainTag(x, y);
    case 1:
      return map.eventIdXy(x, y);
    case 2:
    case 3:
    case 4:
    case 5:
      return map.tileId(x, y, mode - 2);
    default:
      return map.regionId(x, y);
  }
};

const ORIGIN: Point = { x: 0, y: 0 };

const resolveLocationPoint = (
  command: Command_GetLocationInfo,
  sourceEventId: number,
  variables: Rmmz_Variables,
  map: Rmmz_MapLocationSource<Point>,
  player: Point,
): Point => {
  const xParam = command.parameters[3];
  const yParam = command.parameters[4];
  const designationMode = command.parameters[2];
  if (designationMode === 0) {
    return { x: xParam, y: yParam };
  }
  if (designationMode === 1) {
    return {
      x: variables.value(xParam),
      y: variables.value(yParam),
    };
  }
  // 元実装の Game_Interpreter.character() と同じ解決順。
  // 負数はプレイヤー、0 は実行中のイベント、正数はその ID のイベントを指す。
  if (xParam < 0) {
    return player;
  }
  const character = map.event(xParam > 0 ? xParam : sourceEventId);
  if (character) {
    return { x: character.x, y: character.y };
  }
  // 元実装は該当キャラが無いと character.x で例外になる。
  // ここでは原点を返して落とさない。
  return ORIGIN;
};
