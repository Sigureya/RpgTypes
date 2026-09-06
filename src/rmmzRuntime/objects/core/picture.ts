import type { ColorRGBA } from "@RpgTypes/libs";

/**
 * Game_Picture。読み出しは全てメソッドで、内部の値は公開されていない。
 * tone は tint されるまで null。
 */
export interface Rmmz_Picture {
  name(): string;
  origin(): number;
  x(): number;
  y(): number;
  scaleX(): number;
  scaleY(): number;
  opacity(): number;
  blendMode(): number;
  tone(): number[] | null;
  angle(): number;

  initBasic(): void;
  initTarget(): void;
  initTone(): void;
  initRotation(): void;

  show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
  ): void;
  move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number,
    easingType: number,
  ): void;
  rotate(speed: number): void;
  tint(tone: ColorRGBA | ReadonlyArray<number>, duration: number): void;

  update(): void;
  updateMove(): void;
  updateTone(): void;
  updateRotation(): void;
}

export interface Rmmz_Picture_Constructor {
  new (): Rmmz_Picture;
  prototype: Rmmz_Picture;
}
