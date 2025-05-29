import {
  SRC_DATA_CLASS,
  type SourceIdentifier,
} from "@RpgTypes/schema/namedItemSource";
import type { Data_Class } from "./types";
import { AUTHOR_RMMZ, MODULE_DATA } from "@RpgTypes/namedItemSource";
export const makeClassData = (data: Partial<Data_Class> = {}): Data_Class => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  traits: [],
  note: data.note ?? "",
  params: [
    0, // maxhp
    0, // maxmp
    0, // atk
    0, // def
    0, // mat
    0, // mdf
    0, // agi
    0, // luk
  ],
  learnings: data.learnings ?? [],
  expParams: data.expParams ?? [],
});
export const makeClassSourceIdentifier = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  kind: SRC_DATA_CLASS,
  module: MODULE_DATA,
});
