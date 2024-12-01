//-----------------------------------------------------------------------------
// Game_Picture
//
// The game object class for a picture.

import type { ColorRGBA } from "../../types/colorRGBA";

export declare class Game_Picture {
  _name: string;
  _origin: number;
  _x: number;
  _y: number;
  _scaleX: number;
  _scaleY: number;
  _opacity: number;
  _blendMode: any;
  _tone: null | ColorRGBA;
  _angle: number;
  _targetX: number;
  _targetY: number;
  _targetScaleX: number;
  _targetScaleY: number;
  _targetOpacity: number;
  _duration: number;
  _wholeDuration: number;
  _easingType: number;
  _easingExponent: number;
  _toneTarget: ColorRGBA | null;
  _toneDuration: number;
  _rotationSpeed: number;
  constructor();
  initialize(): void;
  name(): string;
  origin(): number;
  x(): number;
  y(): number;
  scaleX(): number;
  scaleY(): number;
  opacity(): number;
  blendMode(): number;
  tone(): ColorRGBA;
  angle(): number;
  initBasic(): void;
  initTarget(): void;
  initTone(): void;
  initRotation(): void;
  move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: any,
    duration: number,
    easingType: number
  ): void;
  show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: any,
    duration: number,
    easingType: number
  ): void;

  rotate(speed: number): void;
  tint(tone: ColorRGBA, duration: number): void;
  update(): void;
  updateMove(): void;
  updateTone(): void;
  updateRotation(): void;
  applyEasing(current: number, target: number): number;
  calcEasing(t: number): number;
  easeIn(t: number, exponent: number): number;
  easeOut(t: number, exponent: number): number;
  easeInOut(t: number, exponent: number): number;
}
