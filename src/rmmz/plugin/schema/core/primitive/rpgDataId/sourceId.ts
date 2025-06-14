import type { DataKindUnion } from "./rpgDataTypesNames";

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
  ] satisfies DataKindUnion[];

export const rmmzDataTypeArrays = (): `${DataKindUnion}[]`[] => [
  "actor[]",
  // "switch[]",
  "weapon[]",
  "item[]",
  "armor[]",
  "skill[]",
  "state[]",
  "troop[]",
  "class[]",
  //  "variable[]",
  "common_event[]",
];
