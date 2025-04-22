import { Data_NamedItem } from '../..';
import { SourceIdentifier } from './types';
export declare const resolveDataName: (dataId: number, dataSource: SourceIdentifier, getSourceItems: (src: SourceIdentifier) => ReadonlyArray<Data_NamedItem> | undefined) => string;
