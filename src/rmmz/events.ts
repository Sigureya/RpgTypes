import type { EventCommand } from "./eventCommand";
import type { Data_CommonEventUnknown } from "./rpg/data/event/commonEvent";
import type { Data_TroopUnknonw } from "./rpg/data/event/troop";

export type Data_CommonEvent = Data_CommonEventUnknown<EventCommand>;
export type Data_Troop = Data_TroopUnknonw<EventCommand>;
