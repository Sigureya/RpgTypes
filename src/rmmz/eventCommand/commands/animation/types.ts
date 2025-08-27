import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";

export interface Command_ShowAnimation extends EventCommandLike2<212> {
  parameters: [
    characterId: number,
    animationId: number,
    waiting: ValueOf<Toggle>
  ];
}
