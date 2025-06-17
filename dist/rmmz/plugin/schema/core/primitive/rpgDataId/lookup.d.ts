import { SourceIdUnion_RpgData } from '../../../../../rpg';
import { SourceId_SystemSwitches, SourceId_SystemVariables } from '../../../../../system';
import { SourceIdentifier } from '../../../../../../libs/namedItemSource';
export interface SourceId_RmmzUnknown extends SourceIdentifier {
    author: "rmmz";
    module: "unknown";
    kind: string;
}
export declare const lookupKind: (kind: string) => SourceIdUnion_RpgData | SourceId_SystemSwitches | SourceId_SystemVariables | SourceId_RmmzUnknown;
