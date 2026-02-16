import { PickByType } from '../../../../libs';
import { Data_Actor, Data_Armor, Data_Class, Data_Enemy, Data_Item, Data_Skill, Data_State, Data_Weapon, NoteReplaceHandlers } from '../../../../rmmz';
export declare const replaceActorText: <Actor extends PickByType<Data_Actor, string>>(actor: Actor, handlers: NoteReplaceHandlers) => Actor & {
    name: string;
    nickname: string;
    profile: string;
    note: string;
};
export declare const replaceEnemyText: <Enemy extends PickByType<Data_Enemy, string>>(enemy: Enemy, handlers: NoteReplaceHandlers) => Enemy & {
    name: string;
    note: string;
};
export declare const replaceClassText: <Class extends PickByType<Data_Class, string>>(data: Class, handlers: NoteReplaceHandlers) => Class & {
    name: string;
    note: string;
};
export declare const replaceSkillText: <Skill extends PickByType<Data_Skill, string>>(skill: Skill, handlers: NoteReplaceHandlers) => Skill & {
    name: string;
    description: string;
    message1: string;
    message2: string;
    note: string;
};
export declare const replaceItemText: <T extends Data_Item | Data_Weapon | Data_Armor>(item: T, handlers: NoteReplaceHandlers) => T & {
    name: string;
    description: string;
    note: string;
};
export declare const replaceStateText: <State extends PickByType<Data_State, string>>(state: State, handlers: NoteReplaceHandlers) => State & {
    name: string;
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    note: string;
};
