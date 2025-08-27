import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeParallax extends EventCommandLike2<284> {
  parameters: [
    parallaxName: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
  ];
}
