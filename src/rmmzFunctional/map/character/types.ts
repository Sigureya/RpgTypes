import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Rmmz_CharacterMapProvider {
  roundXWithDirection(x: number, direction: Direction8): number;
  roundYWithDirection(y: number, direction: Direction8): number;
  isValid(x: number, y: number): boolean;
  isPassable(x: number, y: number, direction: Direction8): boolean;
  deltaX(x1: number, x2: number): number;
  deltaY(y1: number, y2: number): number;
  adjustX(x: number): number;
  adjustY(y: number): number;
  tileWidth(): number;
  tileHeight(): number;
}

export interface Rmmz_CharacterCollisionProvider {
  isCollidedWithCharacters(x: number, y: number): boolean;
}

/** タイルの通行可否だけを見る範囲 */
export type Rmmz_CharacterTilePassage = Pick<
  Rmmz_CharacterMapProvider,
  "roundXWithDirection" | "roundYWithDirection" | "isPassable"
>;

/** 移動できるかを見る範囲。タイルに加えて範囲内かと衝突を見る */
export interface Rmmz_CharacterPassabilityProvider
  extends Rmmz_CharacterTilePassage,
    Pick<Rmmz_CharacterMapProvider, "isValid">,
    Rmmz_CharacterCollisionProvider {}

export interface CharacterPassabilityState {
  through: boolean;
  debugThrough: boolean;
}

export interface CharacterPositionLike {
  x: number;
  y: number;
}

export interface CharacterScreenState {
  realX: number;
  realY: number;
  shiftY: number;
  jumpHeight: number;
}

export interface GraphicsSize {
  width: number;
  height: number;
}
