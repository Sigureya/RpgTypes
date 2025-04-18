import type { SystemLabel_DataNames } from "@RpgTypes/schema";

export const MockSystemLabelDataTypes = {
  armorTypes: "防具タイプ",
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  switches: "スイッチ",
  variables: "変数",
} as const satisfies SystemLabel_DataNames;
