import type { PickByType, PickByTypeKeys } from "@RpgTypes/libs/templates";
import type {
  Data_Actor,
  Data_Enemy,
  Data_Weapon,
  Data_Armor,
  Data_Skill,
  Data_State,
  Data_Item,
  Data_Class,
} from "@RpgTypes/rmmz";

export type TextExtractable<T> = PickByType<T, string> & {
  id: number;
  note: string;
};

export interface ExtractedNoteList {
  note: ExtractedTextItem[];
}

export interface ExtractedText<T> extends ExtractedNoteList {
  main: ExtractedTextProperty<T>[];
  note: ExtractedTextItem[];
  id: number;
  name: string;
}

export interface ExtractedTextItem {
  key: string;
  value: string;
  id: number;
}

export interface ExtractedTextProperty<T> extends ExtractedTextItem {
  key: PickByTypeKeys<T, string> & string;
  value: string;
  id: number;
}

export interface ExtractedDataBundle {
  actors: ExtractedText<Data_Actor>[];
  enemies: ExtractedText<Data_Enemy>[];
  weapons: ExtractedText<Data_Weapon>[];
  armors: ExtractedText<Data_Armor>[];
  skills: ExtractedText<Data_Skill>[];
  states: ExtractedText<Data_State>[];
  items: ExtractedText<Data_Item>[];
  classes: ExtractedText<Data_Class>[];
}
