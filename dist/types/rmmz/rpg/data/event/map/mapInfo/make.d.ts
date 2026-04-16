import { Data_MapInfo } from './mapInfo';
export declare const makeMapName: (mapId: number) => string;
export declare const makeMapInfoData: (info?: {
    id: number;
} & Partial<Data_MapInfo>) => Data_MapInfo;
