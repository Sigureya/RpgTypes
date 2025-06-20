import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./primitive";
import type {
  KindOfString,
  KindOfSelect,
  KindOfCombo,
  KindOfFile,
} from "./primitiveParams";

export const makeStringField = (data: KindOfString) =>
  ({
    type: "string",
    ...withTexts(data),
    ...withDefault(data.default),
  } satisfies JSONSchemaType<string>);

export const makeSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

export const makeComboField = (data: KindOfCombo) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const makeFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);
