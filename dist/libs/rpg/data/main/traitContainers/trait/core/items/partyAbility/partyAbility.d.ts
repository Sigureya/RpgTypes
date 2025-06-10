import { DomainLabel } from '../../../../../../../../templates';
import { Data_NamedItem, NamedItemSource } from '../../../../../../../../namedItemSource';
import { PartyAbilityOptionLabels } from './labels';
export declare const defineTraitPartyAbility: (options: DomainLabel<PartyAbilityOptionLabels>) => NamedItemSource;
export declare const partyAbilityToArray: (options: PartyAbilityOptionLabels) => Data_NamedItem[];
