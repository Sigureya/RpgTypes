import { TestDataSourceWithNote, TestEventDataSource } from '../libs';
import { NormalizedEventCommand } from './eventCommand';
import { Data_CommonEvent, Data_Troop } from './events';
import { Data_Map } from './rpg/data/event';
export declare const makeTestTroopData: (source: TestEventDataSource) => Data_Troop;
export declare const makeTestCommonEventData: (soruce: TestEventDataSource) => Data_CommonEvent;
export declare const makeMapDataFromTestDataSource: (soruce: TestDataSourceWithNote) => Data_Map<NormalizedEventCommand>;
