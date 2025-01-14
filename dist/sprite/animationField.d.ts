import type { ISprite } from "./spriteInterface";
export interface AnimatinField<T> {
    findTargetSprite(target: T): ISprite;
}
