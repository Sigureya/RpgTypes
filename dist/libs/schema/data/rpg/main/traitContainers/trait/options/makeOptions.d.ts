import { Data_NamedItem, GlobalLabel } from '../../../../../..';
import { CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, RegularParamLabels, SpecialFlagOptions, SpecialParamLabels } from './types';
export declare const foldCollapsOptions: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => Data_NamedItem[];
export declare const foldPartyAbilityOptions: (options: PartyAbilityOptionLabels) => Data_NamedItem[];
export declare const foldRegularParam: (param: RegularParamLabels) => Data_NamedItem[];
export declare const foldExtraParam: (xparam: ExtraParamLabels) => Data_NamedItem[];
export declare const foldSpecialParams: (specialParams: SpecialParamLabels) => Data_NamedItem[];
export declare const foldSpecialFlag: (label: SpecialFlagOptions) => Data_NamedItem[];
