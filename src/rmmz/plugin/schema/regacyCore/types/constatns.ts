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
  type: "string",
  default: "",
} as const;

export const ANNOTATION_MULTILINE_STRING: MultilineString = {
  type: "multiline_string",
  default: "",
} as const;

export const ANNOTATION_NUMBER: NumberArg = {
  type: "number",
  default: 0,
} as const;

export const ANNOTATION_ACTOR: Actor = {
  type: "actor",
  default: 0,
} as const;

export const ANNOTATION_SWITCH: Switch = {
  type: "switch",
  default: 0,
} as const;

export const ANNOTATION_ARMOR: Armor = {
  type: "armor",
  default: 0,
} as const;

export const ANNOTATION_SKILL: Skill = {
  type: "skill",
  default: 0,
} as const;

export const ANNOTATION_ITEM: Item = {
  type: "item",
  default: 0,
} as const;

export const ANNOTATION_WEAPON: Weapon = {
  type: "weapon",
  default: 0,
} as const;

export const ANNOTATION_TROOP: Troop = {
  type: "troop",
  default: 0,
} as const;

export const ANNOTATION_CLASS: Class = {
  type: "class",
  default: 0,
} as const;

export const ANNOTATION_STATE: State = {
  type: "state",
  default: 0,
} as const;

export const ANNOTATION_COMMON_EVENT: CommonEvent = {
  type: "common_event",
  default: 0,
} as const;

export const ANNOTATION_COMBO: ComboAnnotation = {
  type: "combo",
  default: "",
  options: [],
} as const;

export const ANNOTATION_SELECT_NUMBER: NumberSelect = {
  type: "select",
  default: 0,
  options: [],
} as const;
export const ANNOTATION_TABLE_STRING = {
  string: ANNOTATION_STRING,
  combo: ANNOTATION_COMBO,
  multiline_string: ANNOTATION_MULTILINE_STRING,
} as const;
