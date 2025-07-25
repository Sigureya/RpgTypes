import {
  SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  SCHEMA_SYSTEM_GAME_INITIAL,
  SCHEMA_SYSTEM_IMAGE_SIZE,
  SCHEMA_SYSTEM_OTHER_DATA,
  SCHEMA_SYSTEM_RPG_DATA_NAMES,
  SCHEMA_SYSTEM_TERMS_BUNDLE,
  SCHEMA_SYSTEM_TITLE_IMAGES,
} from "./core";
import SCHEMA_SYSTEM_AUDIOFILES from "./core/audio/schema";
import SCHEMA_SYSTEM_BOOLEAN_OPTIONS from "./core/booleanOptions/gameSetting/schema";
import SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE from "./gameEdit/schema";
import { SCHEMA_SYSTEM_PARTIAL_BUNDLE } from "./schemaBundle";
import type { Data_System } from "./system";

export interface PartialSystemSchema {
  required: ReadonlyArray<keyof Data_System>;
  properties: Record<string, object>;
  additionalProperties: false;
  type: "object";
}

export const allSystemSchema = () => [
  SCHEMA_SYSTEM_PARTIAL_BUNDLE,
  SCHEMA_SYSTEM_AUDIOFILES,
  SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  SCHEMA_SYSTEM_GAME_INITIAL,
  SCHEMA_SYSTEM_IMAGE_SIZE,
  SCHEMA_SYSTEM_OTHER_DATA,
  SCHEMA_SYSTEM_RPG_DATA_NAMES,
  SCHEMA_SYSTEM_TERMS_BUNDLE,
  SCHEMA_SYSTEM_TITLE_IMAGES,
  SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
];

export const mergeSystemSchema = (
  list: ReadonlyArray<PartialSystemSchema>
): PartialSystemSchema => {
  const reducedList = reduce(list);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(reducedList.required)),
    properties: reducedList.properties,
  };
};

const reduce = (list: ReadonlyArray<PartialSystemSchema>) => {
  type Type = Pick<PartialSystemSchema, "required" | "properties">;
  return list.reduce<Type>(
    (acc, item) => ({
      required: [...acc.required, ...item.required],
      properties: { ...acc.properties, ...item.properties },
    }),
    { required: [], properties: {} }
  );
};
