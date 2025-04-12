import { ItemCodeLabels, TraitLabels } from './data';
import { GlobalLabel } from './globalLabels';
export interface EditorLabels {
    global: GlobalLabel;
    trait: TraitLabels;
    itemEffect: ItemCodeLabels;
    actor: DataLabels;
    enemy: DataLabels;
}
export interface DataLabels {
    domainName: string;
}
