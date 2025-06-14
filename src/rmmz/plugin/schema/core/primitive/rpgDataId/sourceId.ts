import type { DataTypeUnion } from "./rpgDataTypesNames";

export const rmmzDataTypes = () =>
  [
    "actor",
    //  "switch",
    "armor",
    "skill",
    "item",
    "weapon",
    "troop",
    "class",
    "state",
    //    "variable",
    "common_event",
  ] satisfies DataTypeUnion[];

export const rmmzDataTypeArrays = (): `${DataTypeUnion}[]`[] => [
  "actor[]",
  "switch[]",
  "weapon[]",
  "item[]",
  "armor[]",
  "skill[]",
  "state[]",
  "troop[]",
  "class[]",
  "variable[]",
  "common_event[]",
];
