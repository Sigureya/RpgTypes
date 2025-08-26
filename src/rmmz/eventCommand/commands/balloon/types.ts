import type { EventCommandLike2 } from "../../frame";

export interface Command_ShowBalloonIcon extends EventCommandLike2<213> {
  parameters: [characterId: number, balloonId: number];
}
