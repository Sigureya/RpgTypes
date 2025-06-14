import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type {
  RmmzParamCore_Combo,
  RmmzParamCore_FilePath,
  RmmzParamCore_String,
} from "./types";

export const rmmzSchemaStringParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["type", "default"],
    properties: {
      type: { type: "string", enum: ["string", "multiline_string"] },
      default: { type: "string", default: "" },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_String>);

export const rmmzSchemaComboParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["type", "default", "options"],
    properties: {
      type: { type: "string", const: "combo" },
      default: { type: "string", default: "" },
      options: {
        type: "array",
        items: { type: "string" },
        default: [],
      },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_Combo>);

export const rmmzSchemaFilePathParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["type", "default", "dir"],
    properties: {
      type: { type: "string", const: "file" },
      default: { type: "string", default: "" },
      dir: { type: "string", default: "" },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_FilePath>);
