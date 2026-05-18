import type { RuntimeDictionaryData } from "@RpgTypes/features";
import type { JSONSchemaType } from "ajv";

const keyValuePairSchema = {
  type: "object",
  required: ["key", "value"],
  properties: {
    key: { type: "string" },
    value: { type: "string" },
  },
  additionalProperties: false,
} as const;

export const SCHEMA_RUNTIME_DICTIONARY_DATA = {
  type: "object",
  required: ["targetNoteKeys", "textDictionary", "actorTexts"],
  properties: {
    targetNoteKeys: {
      type: "array",
      items: { type: "string" },
    },
    textDictionary: {
      type: "array",
      items: keyValuePairSchema,
    },
    actorTexts: {
      type: "array",
      items: keyValuePairSchema,
    },
  },
} satisfies JSONSchemaType<RuntimeDictionaryData<string>>;
