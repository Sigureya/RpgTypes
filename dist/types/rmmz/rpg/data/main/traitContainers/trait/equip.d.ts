import { Trait } from './types';
export declare const isEquipWeaponTypeOk: (traits: ReadonlyArray<Trait>, wtypeId: number) => boolean;
export declare const isEquipArmorTypeOk: (traits: ReadonlyArray<Trait>, etypeId: number) => boolean;
export declare const isEquipTypeLocked: (traits: ReadonlyArray<Trait>, etypeId: number) => boolean;
export declare const isEquipTypeSealed: (traits: ReadonlyArray<Trait>, etypeId: number) => boolean;
