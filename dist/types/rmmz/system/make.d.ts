import { Data_System } from './system';
import { Data_SystemMV } from './systemMV';
import { SystemDataFragments } from './systemSegments';
export declare const makeSystemDataFromMV: (data: Data_SystemMV) => Data_System;
export declare const makeSystemData: (fragments: Partial<SystemDataFragments>) => Data_System;
