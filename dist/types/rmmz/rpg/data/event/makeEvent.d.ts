import { EventCommandUnknown } from '../../../eventCommand';
import { Data_CommonEventUnknown } from './commonEvent';
import { Data_TroopUnknonw, Troop_EventConditions, Troop_Member } from './troop';
export declare const makeCommonEventData: <Command extends EventCommandUnknown>(data?: Partial<Data_CommonEventUnknown<Command>>) => Data_CommonEventUnknown<Command>;
export declare const makeTroopData: <Command extends EventCommandUnknown>(data?: Partial<Data_TroopUnknonw<Command>>) => Data_TroopUnknonw<Command>;
export declare const makeTroopMember: (data?: Partial<Troop_Member>) => Troop_Member;
export declare const makeTroopEventConditions: (data?: Partial<Troop_EventConditions>) => Troop_EventConditions;
