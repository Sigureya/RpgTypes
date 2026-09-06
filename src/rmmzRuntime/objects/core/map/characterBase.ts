import type { Rmmz_MapCharacter } from "./character";

/**
 * Game_CharacterBase。移動と表示位置の計算を持つ。
 *
 * 内部フィールドを並べているのは、prototype のメソッドが
 * this から直接読むためである (jumpHeight は _jumpPeak / _jumpCount を読む)。
 */
export interface Rmmz_CharacterBase extends Rmmz_MapCharacter {
  _realX: number;
  _realY: number;
  _moveSpeed: number;
  _jumpPeak: number;
  _jumpCount: number;
  _direction: number;
  _directionFix: boolean;

  setDirection(direction: number): void;
  isDirectionFixed(): boolean;
  resetStopCount(): void;
  isDashing(): boolean;
  isThrough(): boolean;
  isDebugThrough(): boolean;
  shiftY(): number;

  jumpHeight(): number;
  realMoveSpeed(): number;
  distancePerFrame(): number;
  reverseDir(direction: number): number;

  canPass(x: number, y: number, direction: number): boolean;
  canPassDiagonally(
    x: number,
    y: number,
    horz: number,
    vert: number,
  ): boolean;
  isMapPassable(x: number, y: number, direction: number): boolean;
  isCollidedWithCharacters(x: number, y: number): boolean;

  scrolledX(): number;
  scrolledY(): number;
  isNearTheScreen(): boolean;

  deltaXFrom(x: number): number;
  deltaYFrom(y: number): number;
}

export interface Rmmz_CharacterBase_Constructor {
  new (): Rmmz_CharacterBase;
  prototype: Rmmz_CharacterBase;
}

/** Game_Character。向きの変更を持つ */
export interface Rmmz_Character extends Rmmz_CharacterBase {
  turnRight90(): void;
  turnLeft90(): void;
  turn180(): void;
  turnRightOrLeft90(): void;
  turnRandom(): void;
  turnTowardCharacter(character: Rmmz_MapCharacter): void;
  turnAwayFromCharacter(character: Rmmz_MapCharacter): void;
}

export interface Rmmz_Character_Constructor {
  new (): Rmmz_Character;
  prototype: Rmmz_Character;
}
