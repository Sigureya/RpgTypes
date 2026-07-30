import type { Direction8 } from "@RpgTypes/rmmz/utils";
import { DIRECTION } from "@RpgTypes/rmmz/utils";
import {
  CARDINAL_DIRECTIONS,
  DEFAULT_CHARACTER_SEARCH_LIMIT,
  REVERSE_DIRECTION_BASE,
  TURN_LEFT_90_TABLE,
  TURN_RIGHT_90_TABLE,
} from "./constants";
import type {
  CharacterPassabilityState,
  CharacterPositionLike,
  CharacterScreenState,
  GraphicsSize,
  Rmmz_CharacterMapProvider,
  Rmmz_CharacterPassabilityProvider,
} from "./types";

export type {
  CharacterPassabilityState,
  CharacterPositionLike,
  CharacterScreenState,
  GraphicsSize,
  Rmmz_CharacterCollisionProvider,
  Rmmz_CharacterMapProvider,
  Rmmz_CharacterPassabilityProvider,
} from "./types";

export {
  CARDINAL_DIRECTIONS,
  DEFAULT_CHARACTER_SEARCH_LIMIT,
  REVERSE_DIRECTION_BASE,
  TURN_LEFT_90_TABLE,
  TURN_RIGHT_90_TABLE,
} from "./constants";

export const jumpHeight = (jumpPeak: number, jumpCount: number): number => {
  return (
    (jumpPeak * jumpPeak - Math.pow(Math.abs(jumpCount - jumpPeak), 2)) / 2
  );
};

export const realMoveSpeed = (
  moveSpeed: number,
  isDashing: boolean,
): number => {
  return moveSpeed + (isDashing ? 1 : 0);
};

export const distancePerFrame = (
  moveSpeed: number,
  isDashing: boolean,
): number => {
  return Math.pow(2, realMoveSpeed(moveSpeed, isDashing)) / 256;
};

export const reverseDirection = (direction: Direction8): Direction8 => {
  return (REVERSE_DIRECTION_BASE - direction) as Direction8;
};

export const isMapPassable = (
  x: number,
  y: number,
  direction: Direction8,
  provider: Rmmz_CharacterMapProvider,
): boolean => {
  const x2 = provider.roundXWithDirection(x, direction);
  const y2 = provider.roundYWithDirection(y, direction);
  const reverse = reverseDirection(direction);
  return (
    provider.isPassable(x, y, direction) && provider.isPassable(x2, y2, reverse)
  );
};

export const canPass = (
  x: number,
  y: number,
  direction: Direction8,
  state: CharacterPassabilityState,
  provider: Rmmz_CharacterPassabilityProvider,
): boolean => {
  const x2 = provider.roundXWithDirection(x, direction);
  const y2 = provider.roundYWithDirection(y, direction);
  if (!provider.isValid(x2, y2)) {
    return false;
  }
  if (state.through || state.debugThrough) {
    return true;
  }
  if (!isMapPassable(x, y, direction, provider)) {
    return false;
  }
  return !provider.isCollidedWithCharacters(x2, y2);
};

export const canPassDiagonally = (
  x: number,
  y: number,
  horz: Direction8,
  vert: Direction8,
  state: CharacterPassabilityState,
  provider: Rmmz_CharacterPassabilityProvider,
): boolean => {
  const x2 = provider.roundXWithDirection(x, horz);
  const y2 = provider.roundYWithDirection(y, vert);
  if (
    canPass(x, y, vert, state, provider) &&
    canPass(x, y2, horz, state, provider)
  ) {
    return true;
  }
  return (
    canPass(x, y, horz, state, provider) &&
    canPass(x2, y, vert, state, provider)
  );
};

export const deltaXFrom = (
  selfX: number,
  otherX: number,
  provider: Pick<Rmmz_CharacterMapProvider, "deltaX">,
): number => {
  return provider.deltaX(selfX, otherX);
};

export const deltaYFrom = (
  selfY: number,
  otherY: number,
  provider: Pick<Rmmz_CharacterMapProvider, "deltaY">,
): number => {
  return provider.deltaY(selfY, otherY);
};

export const scrolledX = (
  realX: number,
  provider: Pick<Rmmz_CharacterMapProvider, "adjustX">,
): number => {
  return provider.adjustX(realX);
};

export const scrolledY = (
  realY: number,
  provider: Pick<Rmmz_CharacterMapProvider, "adjustY">,
): number => {
  return provider.adjustY(realY);
};

export const screenX = (
  state: Pick<CharacterScreenState, "realX">,
  provider: Pick<Rmmz_CharacterMapProvider, "adjustX" | "tileWidth">,
): number => {
  const tileWidth = provider.tileWidth();
  return Math.floor(
    scrolledX(state.realX, provider) * tileWidth + tileWidth / 2,
  );
};

export const screenY = (
  state: CharacterScreenState,
  provider: Pick<Rmmz_CharacterMapProvider, "adjustY" | "tileHeight">,
): number => {
  const tileHeight = provider.tileHeight();
  return Math.floor(
    scrolledY(state.realY, provider) * tileHeight +
      tileHeight -
      state.shiftY -
      state.jumpHeight,
  );
};

export const isNearTheScreen = (
  state: Pick<CharacterScreenState, "realX" | "realY">,
  map: Pick<
    Rmmz_CharacterMapProvider,
    "adjustX" | "adjustY" | "tileWidth" | "tileHeight"
  >,
  graphics: GraphicsSize,
): boolean => {
  const tw = map.tileWidth();
  const th = map.tileHeight();
  const px = scrolledX(state.realX, map) * tw + tw / 2 - graphics.width / 2;
  const py = scrolledY(state.realY, map) * th + th / 2 - graphics.height / 2;
  return (
    px >= -graphics.width &&
    px <= graphics.width &&
    py >= -graphics.height &&
    py <= graphics.height
  );
};

export const turnRight90 = (direction: Direction8): Direction8 => {
  return TURN_RIGHT_90_TABLE[direction] ?? direction;
};

export const turnLeft90 = (direction: Direction8): Direction8 => {
  return TURN_LEFT_90_TABLE[direction] ?? direction;
};

export const turn180 = (direction: Direction8): Direction8 => {
  return reverseDirection(direction);
};

export const turnRightOrLeft90 = (
  direction: Direction8,
  randomInt: (max: number) => number,
): Direction8 => {
  return randomInt(2) === 0 ? turnRight90(direction) : turnLeft90(direction);
};

export const turnRandom = (randomInt: (max: number) => number): Direction8 => {
  return CARDINAL_DIRECTIONS[randomInt(4)] ?? DIRECTION.DOWN;
};

export const directionTowardTarget = (
  self: CharacterPositionLike,
  target: CharacterPositionLike,
  map: Pick<Rmmz_CharacterMapProvider, "deltaX" | "deltaY">,
): Direction8 => {
  const sx = deltaXFrom(self.x, target.x, map);
  const sy = deltaYFrom(self.y, target.y, map);
  if (Math.abs(sx) > Math.abs(sy)) {
    return sx > 0 ? DIRECTION.LEFT : DIRECTION.RIGHT;
  }
  if (sy !== 0) {
    return sy > 0 ? DIRECTION.UP : DIRECTION.DOWN;
  }
  return DIRECTION.DOWN;
};

export const directionAwayFromTarget = (
  self: CharacterPositionLike,
  target: CharacterPositionLike,
  map: Pick<Rmmz_CharacterMapProvider, "deltaX" | "deltaY">,
): Direction8 => {
  const toward = directionTowardTarget(self, target, map);
  return reverseDirection(toward);
};

export const searchLimit = (): number => {
  return DEFAULT_CHARACTER_SEARCH_LIMIT;
};
