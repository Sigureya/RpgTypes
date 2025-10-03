import { SourceIdentifier } from '../../../../libs';
import { SourceIdUnion_RpgData } from '../../../rpg';
import { SourceId_SystemSwitches, SourceId_SystemVariables } from '../../../system';
import { DataKind_SystemUnion, DataKind_RpgUnion } from './rpgDataTypesNames';
export interface SourceId_RmmzUnknown extends SourceIdentifier {
    author: "rmmz";
    module: "unknown";
    kind: string;
}
export type SourceId_ValidRmmzData = SourceIdUnion_RpgData | SourceId_SystemSwitches | SourceId_SystemVariables;
export declare const lookupKind: <Source extends string = DataKind_RpgUnion | DataKind_SystemUnion>(kind: Source) => SourceId_ValidRmmzData | SourceId_RmmzUnknown;
export declare const isRmmzDataKind: (sourceId: SourceIdentifier) => sourceId is SourceId_ValidRmmzData;
