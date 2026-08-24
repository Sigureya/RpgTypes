import type { EventCommand } from "./eventCommand";
import type {
  Data_CommonEventUnknown,
  Data_MapUnknown,
  Data_TroopUnknonw,
} from "./rpg";

export type Data_CommonEvent = Data_CommonEventUnknown<EventCommand>;
export type Data_Troop = Data_TroopUnknonw<EventCommand>;
export type Data_Map = Data_MapUnknown<EventCommand>;
