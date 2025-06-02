import { AUTHOR_RMMZ, type SourceIdentifier } from "src/namedItemSource";
import type { Data_Class } from "./types";

import { MODULE_DATA, SRC_DATA_CLASS } from "src/rpg";
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

export const classSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_CLASS,
});
