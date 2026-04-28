import { SystemTestDataSource } from '../../libs';
import { Data_System } from './system';
import { Data_SystemMV } from './systemMV';
export declare const makeSystemDataMV: (data?: Data_System) => Data_SystemMV;
export declare const makeSystemDataFromMV: (data: Data_SystemMV) => Data_System;
export declare const makeTestSystemData: ({ audio, image, text, switches, variables, }: SystemTestDataSource) => Data_System;
