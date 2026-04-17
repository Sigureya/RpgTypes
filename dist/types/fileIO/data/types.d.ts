import { MainDataFileNames } from './arrayData';
import { FILENAME_SYSTEM } from './system';
export type DataFileNames = MainDataFileNames | typeof FILENAME_SYSTEM;
export interface ErrorItem {
    fileName: string;
    error: string;
}
export interface DataReadErrors {
    main: ErrorItem[];
    map: ErrorItem[];
}
