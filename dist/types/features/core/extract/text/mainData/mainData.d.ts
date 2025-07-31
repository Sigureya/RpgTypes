import { PickByTypeKeys } from '../../../../../libs/templates';
import { Data_Actor, Data_Armor, Data_Class, Data_Enemy, Data_Item, Data_Skill, Data_State, Data_Weapon } from '../../../../../rmmz';
import { ExtractedTextItem, TextExtractable, ExtractedText } from './types';
export declare const extractTextData: <T extends {
    note: string;
    id: number;
}>(data: T & {
    id: number;
}, keys: PickByTypeKeys<T, string>[]) => {
    note: ExtractedTextItem[];
    main: {
        key: Extract<{ [K in keyof T]: T[K] extends string ? K : never; }[keyof T], string>;
        text: (T & {
            id: number;
        })[Extract<{ [K in keyof T]: T[K] extends string ? K : never; }[keyof T], string>];
        id: number;
    }[];
};
export declare const extractNoteText: (data: {
    note: string;
    id: number;
}) => ExtractedTextItem[];
export declare const extractTextFromActor: (actor: TextExtractable<Data_Actor>) => ExtractedText<Data_Actor>;
export declare const extractTextFromEnemy: (enemy: TextExtractable<Data_Enemy>) => ExtractedText<Data_Enemy>;
export declare const extractTextFromClass: (item: TextExtractable<Data_Class>) => ExtractedText<Data_Class>;
export declare const extractTextFromSkill: (skill: TextExtractable<Data_Skill>) => ExtractedText<Data_Skill>;
export declare const extractTextFromItem: (item: TextExtractable<Data_Item>) => ExtractedText<Data_Item>;
export declare const extractTextFromWeapon: (weapon: TextExtractable<Data_Weapon>) => ExtractedText<Data_Weapon>;
export declare const extractTextFromArmor: (armor: TextExtractable<Data_Armor>) => ExtractedText<Data_Armor>;
export declare const extractTextFromState: (state: TextExtractable<Data_State>) => ExtractedText<Data_State>;
