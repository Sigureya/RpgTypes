import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { SourceIdentifier } from "src/namedItemSource";
import { lookupKind } from "./lookup";
import type { DataKindUnion } from "./rpgDataTypesNames";
import { rmmzDataTypes } from "./sourceId";
import type { RmmzParamCore_DataId } from "./types";

export const dataIdMetaParam = (
  data: RmmzParamCore_DataId<DataKindUnion>
): SourceIdentifier => lookupKind(data.type);

export const dataIndexSchema = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      default: { type: "integer", default: 0, minimum: 0 },
      type: {
        type: "string",
        enum: rmmzDataTypes(),
      },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_DataId<DataKindUnion>>);
