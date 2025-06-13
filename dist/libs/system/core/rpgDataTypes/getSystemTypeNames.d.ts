import { Data_NamedItem } from '../../../namedItemSource';
import { System_RPG_DataNames } from './types';
export declare const getVariableNames: (system: Pick<System_RPG_DataNames, "variables">) => Data_NamedItem[];
export declare const getElementTypes: (system: Pick<System_RPG_DataNames, "elements">) => Data_NamedItem[];
export declare const getEquipTypes: (system: Pick<System_RPG_DataNames, "equipTypes">) => Data_NamedItem[];
export declare const getSkillTypes: (system: Pick<System_RPG_DataNames, "skillTypes">) => Data_NamedItem[];
export declare const getWeaponTypes: (system: Pick<System_RPG_DataNames, "weaponTypes">) => Data_NamedItem[];
export declare const getArmorTypes: (system: Pick<System_RPG_DataNames, "armorTypes">) => Data_NamedItem[];
export declare const getSwitches: (system: Pick<System_RPG_DataNames, "switches">) => Data_NamedItem[];
