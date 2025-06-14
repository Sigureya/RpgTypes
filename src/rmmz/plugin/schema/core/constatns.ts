import type {
  ComboAnnotation,
  MultilineString,
  StringArg,
  NumberArg,
  NumberSelect,
} from "./primitive";
import type {
  Actor,
  Armor,
  Class,
  CommonEvent,
  Item,
  Skill,
  State,
  Switch,
  Troop,
  Weapon,
} from "./primitive/paramTypes";

export const ANNOTATION_STRING = {
  type: "string",
  default: "",
} as const satisfies StringArg;

export const ANNOTATION_MULTILINE_STRING = {
  type: "multiline_string",
  default: "",
} as const satisfies MultilineString;

export const ANNOTATION_NUMBER = {
  type: "number",
  default: 0,
} as const satisfies NumberArg;

export const ANNOTATION_ACTOR = {
  type: "actor",
  default: 0,
} as const satisfies Actor;

export const ANNOTATION_SWITCH = {
  type: "switch",
  default: 0,
} as const satisfies Switch;

export const ANNOTATION_ARMOR = {
  type: "armor",
  default: 0,
} as const satisfies Armor;

export const ANNOTATION_SKILL = {
  type: "skill",
  default: 0,
} as const satisfies Skill;

export const ANNOTATION_ITEM = {
  type: "item",
  default: 0,
} as const satisfies Item;

export const ANNOTATION_WEAPON = {
  type: "weapon",
  default: 0,
} as const satisfies Weapon;

export const ANNOTATION_TROOP = {
  type: "troop",
  default: 0,
} as const satisfies Troop;

export const ANNOTATION_CLASS = {
  type: "class",
  default: 0,
} as const satisfies Class;

export const ANNOTATION_STATE = {
  type: "state",
  default: 0,
} as const satisfies State;

export const ANNOTATION_COMMON_EVENT = {
  type: "common_event",
  default: 0,
} as const satisfies CommonEvent;

export const ANNOTATION_COMBO = {
  type: "combo",
  default: "",
  options: [],
} as const satisfies ComboAnnotation;

export const ANNOTATION_SELECT_NUMBER = {
  type: "select",
  default: 0,
  options: [],
} as const satisfies NumberSelect;

export const ANNOTATION_TABLE_STRING = {
  string: ANNOTATION_STRING,
  combo: ANNOTATION_COMBO,
  multiline_string: ANNOTATION_MULTILINE_STRING,
} as const;
