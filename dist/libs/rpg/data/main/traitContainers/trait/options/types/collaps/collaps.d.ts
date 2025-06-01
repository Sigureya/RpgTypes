import { GlobalLabel } from '../../../../../../../labels';
import { CollapsOptionLabels } from './labels';
import { Data_NamedItem2, NamedItemSource, SourceIdentifier } from '../../../../../../../../schema/namedItemSource';
export declare const collapsSourceId: () => SourceIdentifier;
export declare const defineTraitCollapseType: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => NamedItemSource;
export declare const collapsOptionsToArray: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => Data_NamedItem2[];
