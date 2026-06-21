import { SystemTestDataSource, TestDataSourceWithNote } from '../../libs';
import { MainDataFileNames } from './arrayData';
import { FILENAME_SYSTEM } from './system';
export type DataFileNames = MainDataFileNames | typeof FILENAME_SYSTEM;
export interface DataReadErrorItem {
    fileName: string;
    error: string;
}
export interface DataReadErrors {
    main: DataReadErrorItem[];
    map: DataReadErrorItem[];
}
export interface TestRawDataSource extends SystemTestDataSource, TestDataSourceWithNote {
    message: string;
    nonReplaceableText: string;
}
