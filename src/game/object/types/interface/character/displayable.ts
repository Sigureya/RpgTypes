import type { Direction8 } from "./direction8";

export interface IDisplayableCharacter {
  isTransparent(): boolean;
  isTile(): boolean;
  isObjectCharacter(): boolean;
  characterName(): string;
  characterIndex(): number;
  direction(): Direction8;
  // TODO: spriteの方では呼び出されているが、実装が見当たらない
  //pattern(): number;
  screenX(): number;
  screenY(): number;
  screenZ(): number;
  opacity(): number;
  blendMode(): number;
  bushDepth(): number;
}
