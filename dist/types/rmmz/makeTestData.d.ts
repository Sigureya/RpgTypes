import { TestDataSourceWithNote } from '../libs';
import { NormalizedEventCommand } from './eventCommand';
import { Data_Map } from './rpg/data/event';
export declare const makeMapDataFromTestDataSource: (soruce: TestDataSourceWithNote) => Data_Map<NormalizedEventCommand>;
