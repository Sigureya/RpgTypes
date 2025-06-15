import type { DataKindUnion } from "./rpgDataId";
import type { ParamKinds_String } from "./string";

export const kindsOfString = () =>
  ["string", "multiline_string", "file", "select", "combo"] satisfies (
    | ParamKinds_String
    | "select"
  )[];

export const kindsOfBoolean = () => ["boolean"] as const;

export const kindsOfNumber = () =>
  [
    "number",
    "variable",
    "switch",
    "common_event",
    "actor",
    "enemy",
    "class",
    "skill",
    "item",
    "weapon",
    "armor",
    "state",
    "troop",
    "select",
  ] satisfies (DataKindUnion | "select" | "number")[];
