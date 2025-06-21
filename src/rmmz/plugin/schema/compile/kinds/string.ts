import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/primitive";
import type {
  KindOfString,
  KindOfSelect,
  KindOfCombo,
  KindOfFile,
} from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

export const compileStringField = (data: KindOfString) =>
  ({
    type: "string",
    ...withTexts(data),
    ...withDefault(data.default),
  } satisfies JSONSchemaType<string>);

export const compileStringFieldWithXparam = (
  data: KindOfString
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
  ...xparamBaseData(data, {}),
});

export const compileSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

export const compileSelectFieldWithXparam = (
  data: KindOfSelect
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...{ enum: data.options.map((o): string => o.value) },
  ...xparamBaseData(data, {}),
});

export const compileComboField = (data: KindOfCombo) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileComboFieldWithXparam = (
  data: KindOfCombo
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {}),
});

export const compileFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileFileFieldWithXparam = (
  data: KindOfFile
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {}),
});
