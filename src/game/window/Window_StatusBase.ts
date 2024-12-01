import type { Game_Actor } from "../object";
import type { Window_Selectable } from "./Window_Selectable";
import type { Sprite } from "../sprite/sprite";

//-----------------------------------------------------------------------------
// Window_StatusBase
//
// The superclass of windows for displaying actor status.

export declare class Window_StatusBase extends Window_Selectable {
  loadFaceImages(): void;

  refresh(): void;

  hideAdditionalSprites(): void;

  placeActorName(actor: Game_Actor, x: number, y: number): void;

  placeStateIcon(actor: Game_Actor, x: number, y: number): void;

  placeGauge(actor: Game_Actor, type: string, x: number, y: number): void;

  createInnerSprite(key: string, spriteClass: typeof Sprite): void;

  placeTimeGauge(actor: Game_Actor, x: number, y: number): void;

  placeBasicGauges(actor: Game_Actor, x: number, y: number): void;

  gaugeLineHeight(): number;

  drawActorCharacter(actor: Game_Actor, x: number, y: number): void;

  drawActorName(actor: Game_Actor, x: number, y: number, width: number): string;

  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;

  drawActorNickname(
    actor: Game_Actor,
    x: number,
    y: number,
    width: number
  ): void;

  drawActorLevel(actor: Game_Actor, x: number, y: number): void;

  drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;

  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;

  actorSlotName(actor: Game_Actor, index: number): string;
}
