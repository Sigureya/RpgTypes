import type {
  Actor,
  Armor,
  ComboAnnotation,
  MultilineString,
  StringArg,
  Class,
  CommonEvent,
  Item,
  NumberArg,
  NumberSelect,
  Skill,
  State,
  Switch,
  Troop,
  Weapon,
} from "./primitive";

export const ANNOTATION_STRING: StringArg = {
  kind: "string",
  default: "",
} as const;

export const ANNOTATION_MULTILINE_STRING: MultilineString = {
  kind: "multiline_string",
  default: "",
} as const;

export const ANNOTATION_NUMBER: NumberArg = {
  kind: "number",
  default: 0,
} as const;

export const ANNOTATION_ACTOR: Actor = {
  kind: "actor",
  default: 0,
} as const;

export const ANNOTATION_SWITCH: Switch = {
  kind: "switch",
  default: 0,
} as const;

export const ANNOTATION_ARMOR: Armor = {
  kind: "armor",
  default: 0,
} as const;

export const ANNOTATION_SKILL: Skill = {
  kind: "skill",
  default: 0,
} as const;

export const ANNOTATION_ITEM: Item = {
  kind: "item",
  default: 0,
} as const;

export const ANNOTATION_WEAPON: Weapon = {
  kind: "weapon",
  default: 0,
} as const;

export const ANNOTATION_TROOP: Troop = {
  kind: "troop",
  default: 0,
} as const;

export const ANNOTATION_CLASS: Class = {
  kind: "class",
  default: 0,
} as const;

export const ANNOTATION_STATE: State = {
  kind: "state",
  default: 0,
} as const;

export const ANNOTATION_COMMON_EVENT: CommonEvent = {
  kind: "common_event",
  default: 0,
} as const;

export const ANNOTATION_COMBO: ComboAnnotation = {
  kind: "combo",
  default: "",
  options: [],
} as const;

export const ANNOTATION_SELECT_NUMBER: NumberSelect = {
  kind: "select",
  default: 0,
  options: [],
} as const;
export const ANNOTATION_TABLE_STRING = {
  string: ANNOTATION_STRING,
  combo: ANNOTATION_COMBO,
  multiline_string: ANNOTATION_MULTILINE_STRING,
} as const;
