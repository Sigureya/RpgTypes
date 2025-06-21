import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type {
  ParamKinds_String,
  RmmzParamCore_FilePath,
  RmmzParamCore_String,
} from "./types";

export const paramKindsString = () =>
  ["string", "multiline_string", "combo", "file"] satisfies ParamKinds_String[];

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
