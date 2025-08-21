import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Weapon,
  NoteReadResult,
} from "@RpgTypes/rmmz";
import { replaceNote } from "@RpgTypes/rmmz";
import { replaceTextByMap } from "./utils";

const replaceNote2 = (
  data: { note: string },
  dic: ReadonlyMap<string, string>
): string => {
  return replaceNote(data.note, (item: NoteReadResult): string =>
    replaceTextByMap(item.value, dic)
  );
};

export const replaceActorText = (
  actor: Data_Actor,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(actor, map);
  const name = replaceTextByMap(actor.name, map);
  const nickname = replaceTextByMap(actor.nickname, map);
  const profile = replaceTextByMap(actor.profile, map);

  return {
    ...actor,
    name: name,
    nickname: nickname,
    profile: profile,
    note: note,
  };
};

export const replaceEnemyText = (
  enemy: Data_Enemy,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(enemy, map);
  const name: string = replaceTextByMap(enemy.name, map);
  return {
    ...enemy,
    name: name,
    note: note,
  };
};

export const replaceClassText = (
  data: Data_Class,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(data, map);
  const name: string = replaceTextByMap(data.name, map);
  return {
    ...data,
    name: name,
    note: note,
  };
};

export const replaceSkillText = (
  skill: Data_Skill,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(skill, map);
  const name: string = replaceTextByMap(skill.name, map);
  const description: string = replaceTextByMap(skill.description, map);
  const message1: string = replaceTextByMap(skill.message1, map);
  const message2: string = replaceTextByMap(skill.message2, map);

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
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(item, map);
  const name: string = replaceTextByMap(item.name, map);
  const description: string = replaceTextByMap(item.description, map);
  return {
    ...item,
    name: name,
    description: description,
    note: note,
  } satisfies T;
};

export const replaceStateText = (
  state: Data_State,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(state, map);
  const name: string = replaceTextByMap(state.name, map);
  const message1: string = replaceTextByMap(state.message1, map);
  const message2: string = replaceTextByMap(state.message2, map);
  const message3: string = replaceTextByMap(state.message3, map);
  const message4: string = replaceTextByMap(state.message4, map);

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
