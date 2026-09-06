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

  setDirection(direction: number): void;
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
