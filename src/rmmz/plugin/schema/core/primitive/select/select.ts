import type { Schema } from "jsonschema";
import type { RmmzParamCore_Option, RmmzParamCore_Select } from "./types";

export const makeSelectSchema = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: [
      "type",
      "default",
      "options",
    ] satisfies (keyof RmmzParamCore_Select<number | string>)[],
    properties: {
      type: { type: "string", const: "select" },
      default: {},
      options: {},
    },
    allOf: [
      makeSelectTypeBranchSchema("number"),
      makeSelectTypeBranchSchema("string"),
    ],
  } as const satisfies Schema);

const makeSelectTypeBranchSchema = <T extends "string" | "number">(
  valueType: T
) =>
  ({
    if: {
      properties: {
        default: { type: valueType },
      },
    },
    then: {
      properties: {
        default: { type: valueType },
        options: makeSelectOptionsArraySchema(valueType),
      },
    },
  } as const satisfies Schema);

const makeSelectOptionsArraySchema = <T extends "string" | "number">(
  valueType: T
) =>
  ({
    type: "array",
    items: {
      additionalProperties: false,
      type: "object",
      required: ["value", "option"] satisfies (keyof RmmzParamCore_Option<
        number | string
      >)[],
      properties: {
        option: { type: "string" },
        value: { type: valueType },
      },
    },
  } as const satisfies Schema);
