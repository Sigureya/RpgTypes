import { Data_Armor, Data_Weapon } from './traitContainers';
import { Data_Item, Data_Skill } from './usableItems';
export declare const isDataItem: (data: unknown) => data is Data_Item;
export declare const isDataSkill: (data: unknown) => data is Data_Skill;
export declare const isDataArmor: (data: unknown) => data is Data_Armor;
export declare const isDataWeapon: (data: unknown) => data is Data_Weapon;
