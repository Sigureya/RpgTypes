import type { PickByType } from "@RpgTypes/libs/templates";
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
  ExtractedTextItem,
  TextExtractable,
  ExtractedText,
} from "./types";

export const extractTextData = <T extends { note: string; id: number }>(
  data: T & { id: number },
  keys: Extract<keyof PickByType<T, string>, string>[]
) => {
  return {
    note: extractNoteText(data),
    main: keys.map((k) => ({
      key: k,
      text: data[k],
      id: data.id,
    })),
  };
};

export const extractNoteText = (data: {
  note: string;
  id: number;
}): ExtractedTextItem[] => {
  return readNoteEx(
    data.note,
    (key, value): ExtractedTextItem => ({
      key: key,
      text: value,
      id: data.id,
    })
  );
};

export const extractTextFromActor = (
  actor: TextExtractable<Data_Actor>
): ExtractedText<Data_Actor> => {
  return extractTextData(actor, ["name", "nickname", "profile"]);
};

export const extractTextFromEnemy = (
  enemy: TextExtractable<Data_Enemy>
): ExtractedText<Data_Enemy> => {
  return extractTextData(enemy, ["name"]);
};

export const extractTextFromClass = (
  item: TextExtractable<Data_Class>
): ExtractedText<Data_Class> => {
  return extractTextData(item, ["name"]);
};

export const extractTextFromSkill = (
  skill: TextExtractable<Data_Skill>
): ExtractedText<Data_Skill> => {
  return extractTextData(skill, [
    "name",
    "description",
    "message1",
    "message2",
  ]);
};

export const extractTextFromItem = (
  item: TextExtractable<Data_Item>
): ExtractedText<Data_Item> => {
  return extractTextData(item, ["name", "description"]);
};
export const extractTextFromWeapon = (
  weapon: TextExtractable<Data_Weapon>
): ExtractedText<Data_Weapon> => {
  return extractTextData(weapon, ["name", "description"]);
};

export const extractTextFromArmor = (
  armor: TextExtractable<Data_Armor>
): ExtractedText<Data_Armor> => {
  return extractTextData(armor, ["name", "description"]);
};

export const extractTextFromState = (
  state: TextExtractable<Data_State>
): ExtractedText<Data_State> => {
  return extractTextData(state, [
    "name",
    "message1",
    "message2",
    "message3",
    "message4",
  ]);
};
