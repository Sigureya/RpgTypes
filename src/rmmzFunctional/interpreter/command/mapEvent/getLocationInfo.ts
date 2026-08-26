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
): void => {
  const value = resolveLocationInfo(command, sourceEventId, variables, map);
  variables.setValue(command.parameters[0], value);
};

export const resolveLocationInfo = (
  command: Command_GetLocationInfo,
  sourceEventId: number,
  variables: Rmmz_Variables,
  map: Rmmz_MapLocationSource<Point>,
): number => {
  const pos = resolveLocationPoint(command, sourceEventId, variables, map);
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

const resolveLocationPoint = (
  command: Command_GetLocationInfo,
  sourceEventId: number,
  variables: Rmmz_Variables,
  map: Rmmz_MapLocationSource<Point>,
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
  const character = map.event(xParam > 0 ? xParam : sourceEventId);
  if (character) {
    return { x: character.x, y: character.y };
  }
  return { x: 0, y: 0 };
};
