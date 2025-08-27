import { EventCommandUnknown } from '../../../eventCommand';
import { Data_CommonEvent } from './commonEvent';
import { Data_Troop, Troop_EventConditions, Troop_Member } from './troop';
export declare const makeCommonEventData: <Command extends EventCommandUnknown>(data?: Partial<Data_CommonEvent<Command>>) => Data_CommonEvent<Command>;
export declare const makeTroopData: <Command extends EventCommandUnknown>(data?: Partial<Data_Troop<Command>>) => Data_Troop<Command>;
export declare const makeTroopMember: (data?: Partial<Troop_Member>) => Troop_Member;
export declare const makeTroopEventConditions: (data?: Partial<Troop_EventConditions>) => Troop_EventConditions;
