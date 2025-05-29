import { GlobalLabel } from '../../../../../../../../labelUtils';
import { CollapsOptionLabels } from './labels';
import { Data_NamedItem2, SourceIdentifier } from '../../../../../../../../namedItemSource';
export declare const collapsSourceId: () => SourceIdentifier;
export declare const collapsOptionsToArray: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => Data_NamedItem2[];
