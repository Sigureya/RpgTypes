import type {
  Data_Actor,
  Data_Enemy,
  Data_Skill,
  Data_Class,
  Data_Item,
  Data_Weapon,
  Data_Armor,
  Data_State,
} from "@RpgTypes/rmmz";
import { replaceNote2, replaceXXXX } from "./utils";

export const repaceActorText = (
  actor: Data_Actor,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(actor, map);
  const name = replaceXXXX(actor.name, map);
  const nickname = replaceXXXX(actor.nickname, map);
  const profile = replaceXXXX(actor.profile, map);

  return {
    ...actor,
    name: name,
    nickname: nickname,
    profile: profile,
    note: note,
  };
};

export const repaceEnemyText = (
  enemy: Data_Enemy,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(enemy, map);
  const name: string = replaceXXXX(enemy.name, map);
  return {
    ...enemy,
    name: name,
    note: note,
  };
};

export const repaceClassText = (
  data: Data_Class,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(data, map);
  const name: string = replaceXXXX(data.name, map);
  return {
    ...data,
    name: name,
    note: note,
  };
};

export const repaceSkillText = (
  skill: Data_Skill,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(skill, map);
  const name: string = replaceXXXX(skill.name, map);
  const description: string = replaceXXXX(skill.description, map);
  const message1: string = replaceXXXX(skill.message1, map);
  const message2: string = replaceXXXX(skill.message2, map);

  return {
    ...skill,
    name: name,
    description: description,
    message1: message1,
    message2: message2,
    note: note,
  };
};

export const repaceItemText = <T extends Data_Item | Data_Weapon | Data_Armor>(
  item: T,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(item, map);
  const name: string = replaceXXXX(item.name, map);
  const description: string = replaceXXXX(item.description, map);
  return {
    ...item,
    name: name,
    description: description,
    note: note,
  } satisfies T;
};

export const repaceStateText = (
  state: Data_State,
  map: ReadonlyMap<string, string>
) => {
  const note: string = replaceNote2(state, map);
  const name: string = replaceXXXX(state.name, map);
  const message1: string = replaceXXXX(state.message1, map);
  const message2: string = replaceXXXX(state.message2, map);
  const message3: string = replaceXXXX(state.message3, map);
  const message4: string = replaceXXXX(state.message4, map);

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
