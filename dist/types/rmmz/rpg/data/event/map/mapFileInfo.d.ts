import { Data_MapUnknown } from './map';
export interface MapFileInfo<Data = Data_MapUnknown> {
    map: Data;
    filename: `Map${string}`;
    editingName: string;
}
