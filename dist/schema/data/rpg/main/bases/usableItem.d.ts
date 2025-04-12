import { ItemEffect } from './itemEffect';
import { Data_NamedItem } from './namedItem';
export interface Damage {
    type: number;
    elementId: number;
    formula: string;
    variance: number;
    critical: boolean;
}
export interface Data_UsableItem extends Data_NamedItem {
    iconIndex: number;
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
