import type { Direction8 } from "./direction8";
export interface IDisplayableCharacter {
    isTransparent(): boolean;
    isTile(): boolean;
    isObjectCharacter(): boolean;
    characterName(): string;
    characterIndex(): number;
    direction(): Direction8;
    screenX(): number;
    screenY(): number;
    screenZ(): number;
    opacity(): number;
    blendMode(): number;
    bushDepth(): number;
}
