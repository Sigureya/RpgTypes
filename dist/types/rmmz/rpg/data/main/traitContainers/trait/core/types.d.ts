import { SourceIdentifier } from '../../../../../../../libs';
import { TraitCode } from './constants';
export interface TraitFormat {
    pattern: string;
    kindId: TraitCode;
    label: string;
    dataSource?: SourceIdentifier;
}
