import { Data_NamedItem } from '../../../../schema';
import { Data_System, System_ParamNames } from '../../../../system';
export declare const getVariableNames: (system: Pick<Data_System, "variables">) => Data_NamedItem[];
export declare const getElementTypes: (system: Pick<Data_System, "elements">) => Data_NamedItem[];
export declare const getEquipTypes: (system: Pick<Data_System, "equipTypes">) => Data_NamedItem[];
export declare const getSkillTypes: (system: Pick<Data_System, "skillTypes">) => Data_NamedItem[];
export declare const getWeaponTypes: (system: Pick<Data_System, "weaponTypes">) => Data_NamedItem[];
export declare const getArmorTypes: (system: Pick<Data_System, "armorTypes">) => Data_NamedItem[];
export declare const getParamNames: (system: System_ParamNames) => Data_NamedItem[];
