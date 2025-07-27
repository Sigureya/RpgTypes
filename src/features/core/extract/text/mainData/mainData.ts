import type { PickByType } from "@RpgTypes/libs/templates";
import { pickString } from "@RpgTypes/libs/templates";
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
import { readNoteEx } from "@RpgTypes/rmmz";
import type {
  ExtractedText,
  ExtractedTextItem,
  TextExtractable,
} from "./types";

const createData = (
  key: string,
  text: string,
  data: { id: number }
): ExtractedTextItem => {
  return { key, text: text, id: data.id };
};

export const extractTextData = <
  T extends { note: string } & Record<KeyType, string>,
  KeyType extends string & keyof PickByType<T, string>
>(
  data: T & { id: number },
  keyList: ReadonlyArray<KeyType>
): ExtractedText => {
  return {
    main: pickString<ExtractedTextItem, T>(data, keyList, (key, value) => {
      return createData(key, value, data);
    }),
    note: extractNoteText(data),
  };
};

export const extractNoteText = (data: {
  note: string;
  id: number;
}): ExtractedTextItem[] => {
  return readNoteEx(data.note, (key, value) => createData(key, value, data));
};

export const extractTextFromActor = (actor: TextExtractable<Data_Actor>) => {
  return extractTextData(actor, ["name", "nickname", "profile"]);
};

export const extractTextFromEnemy = (enemy: TextExtractable<Data_Enemy>) => {
  return extractTextData(enemy, ["name"]);
};

export const extractTextFromClass = (item: TextExtractable<Data_Class>) => {
  return extractTextData(item, ["name"]);
};

export const extractTextFromSkill = (skill: TextExtractable<Data_Skill>) => {
  return extractTextData(skill, [
    "name",
    "description",
    "message1",
    "message2",
  ]);
};

export const extractTextFromItem = (item: TextExtractable<Data_Item>) => {
  return extractTextData(item, ["name", "description"]);
};
export const extractTextFromWeapon = (weapon: TextExtractable<Data_Weapon>) => {
  return extractTextData(weapon, ["name", "description"]);
};

export const extractTextFromArmor = (armor: TextExtractable<Data_Armor>) => {
  return extractTextData(armor, ["name", "description"]);
};

export const extractTextFromState = (state: TextExtractable<Data_State>) => {
  return extractTextData(state, [
    "name",
    "message1",
    "message2",
    "message3",
    "message4",
  ]);
};
