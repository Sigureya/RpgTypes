import { Data_Armor, Data_Weapon, Trait } from './traitContainers';
export declare const canEquipWeapon: (weapon: Data_Weapon, traits: ReadonlyArray<Trait>) => boolean;
export declare const canEquipArmor: (armor: Data_Armor, traits: ReadonlyArray<Trait>) => boolean;
export declare const filterEquipableWeapons: (traits: ReadonlyArray<Trait>, equip: ReadonlyArray<Data_Weapon>) => Data_Weapon[];
export declare const filterEquipableArmors: (traits: ReadonlyArray<Trait>, equip: ReadonlyArray<Data_Armor>) => Data_Armor[];
