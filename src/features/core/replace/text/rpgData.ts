import type { PickByType } from "@RpgTypes/libs";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Weapon,
  NoteReplaceHandlers,
} from "@RpgTypes/rmmz";
import { replaceNoteWithHandlers } from "@RpgTypes/rmmz";
import { replaceTextByFunction, replaceTextByHandlers } from "./utils";

export const replaceActorText = <Actor extends PickByType<Data_Actor, string>>(
  actor: Actor,
  handlers: NoteReplaceHandlers,
) => {
  const fn = (key: string): string | undefined => {
    return handlers.replaceText(key);
  };
  const note: string = replaceNoteWithHandlers(actor.note, handlers);
  const name: string = replaceTextByFunction(actor.name, fn);
  const nickname: string = replaceTextByFunction(actor.nickname, fn);
  const profile: string = replaceTextByFunction(actor.profile, fn);
  return {
    ...actor,
    name: name,
    nickname: nickname,
    profile: profile,
    note: note,
  };
};

export const replaceEnemyText = <Enemy extends PickByType<Data_Enemy, string>>(
  enemy: Enemy,
  handlers: NoteReplaceHandlers,
) => {
  const note: string = replaceNoteWithHandlers(enemy.note, handlers);
  const name: string = replaceTextByHandlers(enemy.name, handlers);
  return {
    ...enemy,
    name: name,
    note: note,
  };
};

export const replaceClassText = <Class extends PickByType<Data_Class, string>>(
  data: Class,
  handlers: NoteReplaceHandlers,
) => {
  const note: string = replaceNoteWithHandlers(data.note, handlers);
  const name: string = replaceTextByHandlers(data.name, handlers);
  return {
    ...data,
    name: name,
    note: note,
  };
};

export const replaceSkillText = <Skill extends PickByType<Data_Skill, string>>(
  skill: Skill,
  handlers: NoteReplaceHandlers,
) => {
  const note: string = replaceNoteWithHandlers(skill.note, handlers);
  const name: string = replaceTextByHandlers(skill.name, handlers);
  const description: string = replaceTextByHandlers(
    skill.description,
    handlers,
  );
  const message1: string = replaceTextByHandlers(skill.message1, handlers);
  const message2: string = replaceTextByHandlers(skill.message2, handlers);
  return {
    ...skill,
    name: name,
    description: description,
    message1: message1,
    message2: message2,
    note: note,
  };
};

export const replaceItemText = <T extends Data_Item | Data_Weapon | Data_Armor>(
  item: T,
  handlers: NoteReplaceHandlers,
) => {
  const note: string = replaceNoteWithHandlers(item.note, handlers);
  const name: string = replaceTextByHandlers(item.name, handlers);
  const description: string = replaceTextByHandlers(item.description, handlers);
  return {
    ...item,
    name: name,
    description: description,
    note: note,
  };
};

export const replaceStateText = <State extends PickByType<Data_State, string>>(
  state: State,
  handlers: NoteReplaceHandlers,
) => {
  const note: string = replaceNoteWithHandlers(state.note, handlers);
  const name: string = replaceTextByHandlers(state.name, handlers);
  const message1: string = replaceTextByHandlers(state.message1, handlers);
  const message2: string = replaceTextByHandlers(state.message2, handlers);
  const message3: string = replaceTextByHandlers(state.message3, handlers);
  const message4: string = replaceTextByHandlers(state.message4, handlers);
  return {
    ...state,
    name: name,
    message1: message1,
    message2: message2,
    message3: message3,
    message4: message4,
    note: note,
  };
};
