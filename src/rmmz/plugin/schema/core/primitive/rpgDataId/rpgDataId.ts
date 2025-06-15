import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { SourceIdentifier } from "src/namedItemSource";
import { lookupKind } from "./lookup";
import type { DataKindUnion } from "./rpgDataTypesNames";
import { rmmzDataTypes } from "./sourceId";
import type { RmmzParamCore_DataId, X_MetaParam_DataId } from "./types";

export const dataIdMetaParam = (
  data: RmmzParamCore_DataId<DataKindUnion>
): X_MetaParam_DataId => ({
  sourceId: lookupKind(data.type),
});

export const metaSchemaDataIdParam = () =>
  ({
    type: "object",
    additionalProperties: false,
    properties: {
      sourceId: {
        nullable: true as const,
        type: "object",
        additionalProperties: false,
        required: ["author", "module", "kind"],
        properties: {
          author: { type: "string" },
          module: { type: "string" },
          kind: { type: "string" },
        },
      } satisfies JSONSchemaType<SourceIdentifier | undefined>,
    },
  } satisfies Schema & JSONSchemaType<X_MetaParam_DataId>);

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
