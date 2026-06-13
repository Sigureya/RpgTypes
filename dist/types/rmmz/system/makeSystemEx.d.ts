import { SystemTestDataSource } from '../../libs';
import { System_TermsPartial } from './core';
import { Data_System } from './system';
import { Data_SystemMV } from './systemMV';
export declare const makeSystemDataMV: (data?: Data_System) => Data_SystemMV;
export declare const makeSystemDataFromMV: (data: Data_SystemMV) => Data_System;
export declare const makeTestSystemData: ({ audio, image, systemText, switches, variables, }: SystemTestDataSource) => Data_System;
export declare const makeTestTerms: (text: string) => Required<System_TermsPartial>;
