import { MapFileInfo } from '../../../rmmz';
export type MapFileNameWithExt = `Map${string}.json`;
export interface MapInfoReadFailure {
    message: string;
    filename: string;
    success: false;
}
export interface MapBatchReadResult<T> {
    info: MapInfoReadFailure | {
        success: true;
    };
    validMaps: MapFileInfo<T>[];
    invalidMaps: SingleMapReadFailure[];
}
export interface SingleMapReadFailure {
    map: null;
    message: string;
    filename: string;
    editingName: string;
}
export interface MapReadErrorMessages {
    jsonParseError: string;
    invalidStructure: string;
    fileNotFound: string;
}
