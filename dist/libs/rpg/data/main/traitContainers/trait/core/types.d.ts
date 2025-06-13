import { SourceIdentifier } from '../../../../../../namedItemSource';
import { TraitCode } from './constants';
export interface TraitFormat {
    pattern: string;
    kindId: TraitCode;
    label: string;
    dataSource?: SourceIdentifier;
}
