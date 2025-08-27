import type { EventCommandLike2 } from "../../frame";

export interface Command_SetWeatherEffect extends EventCommandLike2<236> {
  parameters: [
    type: string,
    power: number,
    duration: number,
    needsWait: boolean
  ];
}
