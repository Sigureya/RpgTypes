import { Damage } from '../../members';
import { ItemEffect } from './itemEffect';
import { Data_UsableItem } from './usableItem';
export interface Data_Item extends Data_UsableItem {
    name: string;
    id: number;
    iconIndex: number;
    price: number;
    consumable: boolean;
    itypeId: number;
    animationId: number;
    hitType: number;
    occasion: number;
    repeats: number;
    scope: number;
    speed: number;
    successRate: number;
    tpGain: number;
    description: string;
    note: string;
    effects: ItemEffect[];
    damage: Damage;
}
