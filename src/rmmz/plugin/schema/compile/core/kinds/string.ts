import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./primitive";
import type {
  KindOfString,
  KindOfSelect,
  KindOFCombo,
  KindOfFile,
} from "./primitiveParams";

export const makeStringField = (data: KindOfString) =>
  ({
    type: "string",
    ...(data.default !== undefined ? { default: data.default } : {}),
  } satisfies JSONSchemaType<string>);

export const makeSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

export const makeComboField = (data: KindOFCombo) =>
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
