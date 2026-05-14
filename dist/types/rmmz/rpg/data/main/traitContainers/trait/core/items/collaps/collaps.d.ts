import { Data_NamedItem, DomainLabel, NamedItemSource } from '../../../../../../../../../libs';
import { CollapsOptionLabels, NormalLabel } from './labels';
export declare const defineTraitCollapseType: (labels: DomainLabel<CollapsOptionLabels>, global: NormalLabel) => NamedItemSource;
export declare const collapsOptionsToArray: (options: CollapsOptionLabels, global: NormalLabel) => Data_NamedItem[];
