import { Damage } from './damage';
import { ItemEffect } from './itemEffect';
import { Data_UsableItem } from './usableItem';
export interface Data_Item extends Data_UsableItem {
    name: string;
    id: number;
    iconIndex: number;
    price: number;
    consumable: boolean;
    effects: ItemEffect[];
    damage: Damage;
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
}
