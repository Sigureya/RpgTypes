import { CollapsOptionLabels } from './labels';
import { Data_NamedItem, NamedItemSource, SourceIdentifier } from '../../../../../../../../namedItemSource';
import { GlobalLabel } from '../../../../../../..';
export declare const collapsSourceId: () => SourceIdentifier;
export declare const defineTraitCollapseType: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => NamedItemSource;
export declare const collapsOptionsToArray: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => Data_NamedItem[];
