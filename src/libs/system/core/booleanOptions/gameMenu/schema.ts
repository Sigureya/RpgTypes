import type { JSONSchemaType } from "ajv";
import { SCHEMA_SYSTEM_ITEM_CATEGORIES } from "./itemCategories/schema";
import { SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED } from "./menuCommands/schema";
import type { System_BooleanGameMenuOptions } from "./types";

export const SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: SCHEMA_SYSTEM_ITEM_CATEGORIES,
    menuCommands: SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED,
  },
} satisfies JSONSchemaType<
  Record<keyof System_BooleanGameMenuOptions, boolean[]>
>;
