import { NamedItemSource } from '../schema';
import { Data_System } from './system';
import { SystemLabel_DataNames } from './systemLabels';
export declare const buildElementTypesSource: (system: Pick<Data_System, "elements">, label: SystemLabel_DataNames) => NamedItemSource;
export declare const buildEquipTypesSource: (system: Pick<Data_System, "equipTypes">, label: SystemLabel_DataNames) => NamedItemSource;
export declare const buildWeaponTypesSource: (system: Pick<Data_System, "weaponTypes">, label: SystemLabel_DataNames) => NamedItemSource;
export declare const buildSkillTypesSource: (system: Pick<Data_System, "skillTypes">, label: SystemLabel_DataNames) => NamedItemSource;
export declare const buildArmorTypesSource: (system: Pick<Data_System, "armorTypes">, label: SystemLabel_DataNames) => NamedItemSource;
export declare const buildVariableNamesSource: (system: Pick<Data_System, "variables">, label: SystemLabel_DataNames) => NamedItemSource;
