import { SourceIdentifier } from '../../../../../../../libs/namedItemSource';
import { TraitCode } from './constants';
export interface TraitFormat {
    pattern: string;
    kindId: TraitCode;
    label: string;
    dataSource?: SourceIdentifier;
}
