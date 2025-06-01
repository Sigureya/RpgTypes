import { type SourceIdentifier } from "@RpgTypes/schema/namedItemSource";

import type { Data_Armor } from "./types";
import { AUTHOR_RMMZ } from "@RpgTypes/namedItemSource";
import { SRC_DATA_ARMOR, MODULE_DATA } from "../../../sourceConstants";

export const makeArmorData = (armor: Partial<Data_Armor> = {}): Data_Armor => ({
  id: armor.id ?? 0,
  name: armor.name ?? "",
  iconIndex: armor.iconIndex ?? 0,
  description: armor.description ?? "",
  traits: armor.traits ?? [],
  note: armor.note ?? "",
  atypeId: armor.atypeId ?? 0,
  params: armor.params ?? [
    0, // maxhp
    0, // maxmp
    0, // atk
    0, // def
    0, // mat
    0, // mdf
    0, // agi
    0, // luk
  ],
  etypeId: armor.etypeId ?? 0,
  price: armor.price ?? 0,
});

export const armorSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ARMOR,
});
