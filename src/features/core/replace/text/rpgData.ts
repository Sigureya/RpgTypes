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
} from "@RpgTypes/rmmz";
import { replaceNoteTextByFunction } from "./note";
import { replaceTextByFunction } from "./utils";

export const replaceActorText = <Actor extends PickByType<Data_Actor, string>>(
  actor: Actor,
  fn: (key: string) => string | undefined
) => {
  const note: string = replaceNoteTextByFunction(actor, fn);
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
  fn: (key: string) => string | undefined
) => {
  const note: string = replaceNoteTextByFunction(enemy, fn);
  const name: string = replaceTextByFunction(enemy.name, fn);
  return {
    ...enemy,
    name: name,
    note: note,
  };
};

export const replaceClassText = <Class extends PickByType<Data_Class, string>>(
  data: Class,
  fn: (key: string) => string | undefined
) => {
  const note: string = replaceNoteTextByFunction(data, fn);
  const name: string = replaceTextByFunction(data.name, fn);
  return {
    ...data,
    name: name,
    note: note,
  };
};

export const replaceSkillText = <Skill extends PickByType<Data_Skill, string>>(
  skill: Skill,
  fn: (key: string) => string | undefined
) => {
  const note: string = replaceNoteTextByFunction(skill, fn);
  const name: string = replaceTextByFunction(skill.name, fn);
  const description: string = replaceTextByFunction(skill.description, fn);
  const message1: string = replaceTextByFunction(skill.message1, fn);
  const message2: string = replaceTextByFunction(skill.message2, fn);

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
  fn: (key: string) => string | undefined
) => {
  const note: string = replaceNoteTextByFunction(item, fn);
  const name: string = replaceTextByFunction(item.name, fn);
  const description: string = replaceTextByFunction(item.description, fn);
  return {
    ...item,
    name: name,
    description: description,
    note: note,
  } satisfies T;
};

export const replaceStateText = <State extends PickByType<Data_State, string>>(
  state: State,
  fn: (key: string) => string | undefined
) => {
  const note: string = replaceNoteTextByFunction(state, fn);
  const name: string = replaceTextByFunction(state.name, fn);
  const message1: string = replaceTextByFunction(state.message1, fn);
  const message2: string = replaceTextByFunction(state.message2, fn);
  const message3: string = replaceTextByFunction(state.message3, fn);
  const message4: string = replaceTextByFunction(state.message4, fn);

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
