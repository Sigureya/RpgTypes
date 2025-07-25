import { Data_CommonEvent } from './commonEvent';
import { Data_Troop, Troop_EventConditions, Troop_Member } from './troop';
export declare const makeCommonEventData: (data?: Partial<Data_CommonEvent>) => Data_CommonEvent;
export declare const makeTroopData: (data?: Partial<Data_Troop>) => Data_Troop;
export declare const makeTroopMember: (data?: Partial<Troop_Member>) => Troop_Member;
export declare const makeTroopEventConditions: (data?: Partial<Troop_EventConditions>) => Troop_EventConditions;
