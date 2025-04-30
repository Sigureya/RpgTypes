import { Enemy_Action, DropItem } from './enemyMembers';
import { ParamArray } from '../members';
import { Data_TraitContainer, Trait } from '../trait';
export interface Data_Enemy extends Data_TraitContainer {
    name: string;
    id: number;
    actions: Enemy_Action[];
    battlerHue: number;
    battlerName: string;
    dropItems: DropItem[];
    exp: number;
    gold: number;
    params: ParamArray;
    traits: Trait[];
    note: string;
}
