import { SourceIdUnion_RpgData } from '../../../../../rpg';
import { SourceId_SystemSwitches, SourceId_SystemVariables } from '../../../../../system';
import { SourceIdentifier } from '../../../../../../libs/namedItemSource';
export interface SourceId_RmmzUnknown extends SourceIdentifier {
    author: "rmmz";
    module: "unknown";
    kind: string;
}
export type SourceId_ValidRmmzData = SourceIdUnion_RpgData | SourceId_SystemSwitches | SourceId_SystemVariables;
export declare const lookupKind: (kind: string) => SourceId_ValidRmmzData | SourceId_RmmzUnknown;
export declare const isRmmzDataKind: (sourceId: SourceIdentifier) => sourceId is SourceId_ValidRmmzData;
