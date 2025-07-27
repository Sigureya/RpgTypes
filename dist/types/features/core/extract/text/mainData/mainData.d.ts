import { PickByType } from '../../../../../libs/templates';
import { Data_Actor, Data_Armor, Data_Class, Data_Enemy, Data_Item, Data_Skill, Data_State, Data_Weapon } from '../../../../../rmmz';
import { ExtractedText, ExtractedTextItem, TextExtractable } from './types';
export declare const extractTextData: <T extends {
    note: string;
} & Record<KeyType, string>, KeyType extends string & keyof PickByType<T, string>>(data: T & {
    id: number;
}, keyList: ReadonlyArray<KeyType>) => ExtractedText;
export declare const extractNoteText: (data: {
    note: string;
    id: number;
}) => ExtractedTextItem[];
export declare const extractTextFromActor: (actor: TextExtractable<Data_Actor>) => ExtractedText;
export declare const extractTextFromEnemy: (enemy: TextExtractable<Data_Enemy>) => ExtractedText;
export declare const extractTextFromClass: (item: TextExtractable<Data_Class>) => ExtractedText;
export declare const extractTextFromSkill: (skill: TextExtractable<Data_Skill>) => ExtractedText;
export declare const extractTextFromItem: (item: TextExtractable<Data_Item>) => ExtractedText;
export declare const extractTextFromWeapon: (weapon: TextExtractable<Data_Weapon>) => ExtractedText;
export declare const extractTextFromArmor: (armor: TextExtractable<Data_Armor>) => ExtractedText;
export declare const extractTextFromState: (state: TextExtractable<Data_State>) => ExtractedText;
