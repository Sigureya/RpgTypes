import type { Data_NamedItem } from "@RpgTypes/libs";
import type { PickByTypeKeys } from "@RpgTypes/libs/templates";
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
  data: T & Data_NamedItem,
  keys: PickByTypeKeys<T, string>[],
) => {
  return {
    id: data.id,
    name: data.name,
    note: extractNoteText(data),
    main: keys.map(
      (k) =>
        ({
          key: k,
          value: data[k],
          id: data.id,
        }) satisfies Record<keyof ExtractedTextItem, unknown>,
    ),
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
      value: value,
      id: data.id,
    }),
  );
};

export const extractTextFromActor = (
  actor: TextExtractable<Data_Actor>,
): ExtractedText<Data_Actor> => {
  return extractTextData(actor, ["name", "nickname", "profile"]);
};

export const extractTextFromEnemy = (
  enemy: TextExtractable<Data_Enemy>,
): ExtractedText<Data_Enemy> => {
  return extractTextData(enemy, ["name"]);
};

export const extractTextFromClass = (
  item: TextExtractable<Data_Class>,
): ExtractedText<Data_Class> => {
  return extractTextData(item, ["name"]);
};

export const extractTextFromSkill = (
  skill: TextExtractable<Data_Skill>,
): ExtractedText<Data_Skill> => {
  type SkillTextKeys = "name" | "description" | "message1" | "message2";
  type S = Pick<Data_Skill, "note" | "id" | SkillTextKeys>;
  return extractTextData<S>(skill, [
    "name",
    "description",
    "message1",
    "message2",
  ]);
};

export const extractTextFromItem = (
  item: TextExtractable<Data_Item>,
): ExtractedText<Data_Item> => {
  return extractTextData(item, ["name", "description"]);
};
export const extractTextFromWeapon = (
  weapon: TextExtractable<Data_Weapon>,
): ExtractedText<Data_Weapon> => {
  return extractTextData(weapon, ["name", "description"]);
};

export const extractTextFromArmor = (
  armor: TextExtractable<Data_Armor>,
): ExtractedText<Data_Armor> => {
  return extractTextData(armor, ["name", "description"]);
};

export const extractTextFromState = (
  state: TextExtractable<Data_State>,
): ExtractedText<Data_State> => {
  return extractTextData(state, [
    "name",
    "message1",
    "message2",
    "message3",
    "message4",
  ]);
};
