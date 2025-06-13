import { DomainLabel } from '../../../../../../../../../libs/templates';
import { Data_NamedItem, NamedItemSource } from '../../../../../../../../../libs/namedItemSource';
import { PartyAbilityOptionLabels } from './labels';
export declare const defineTraitPartyAbility: (options: DomainLabel<PartyAbilityOptionLabels>) => NamedItemSource;
export declare const partyAbilityToArray: (options: PartyAbilityOptionLabels) => Data_NamedItem[];
