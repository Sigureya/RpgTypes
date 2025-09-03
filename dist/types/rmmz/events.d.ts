import { EventCommand } from './eventCommand';
import { Data_CommonEventUnknown } from './rpg/data/event/commonEvent';
import { Data_TroopUnknonw } from './rpg/data/event/troop';
export type Data_CommonEvent = Data_CommonEventUnknown<EventCommand>;
export type Data_Troop = Data_TroopUnknonw<EventCommand>;
