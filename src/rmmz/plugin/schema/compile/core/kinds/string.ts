import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./primitive";
import type {
  KindOfString,
  KindOfSelect,
  KindOfCombo,
  KindOfFile,
} from "./primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./x-rpg-param";
import { xparamBaseData } from "./x-rpg-param";

export const makeStringField = (data: KindOfString) =>
  ({
    type: "string",
    ...withTexts(data),
    ...withDefault(data.default),
  } satisfies JSONSchemaType<string>);

export const makeStringFieldWithXparam = (
  data: KindOfString
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
  ...xparamBaseData(data, {}),
});

export const makeSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

export const makeSelectFieldWithXparam = (
  data: KindOfSelect
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...{ enum: data.options.map((o): string => o.value) },
  ...xparamBaseData(data, {}),
});

export const makeComboField = (data: KindOfCombo) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const makeComboFieldWithXparam = (
  data: KindOfCombo
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {}),
});

export const makeFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const makeFileFieldWithXparam = (
  data: KindOfFile
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {}),
});
