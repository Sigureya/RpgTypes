import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./primitive";
import type { KindOfBoolean } from "./primitiveParams";
import type { X_Param } from "./x-rpg-param";
import { xparamBaseData } from "./x-rpg-param";

export const makeBooleanField = (data: KindOfBoolean) =>
  ({
    type: "boolean",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<boolean>);

export const makeBooleanFieldWithXParam = (data: KindOfBoolean) =>
  ({
    type: "boolean",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(xparamBoolean(data) satisfies X_Param),
  } satisfies JSONSchemaType<boolean>);

const xparamBoolean = (data: KindOfBoolean) =>
  xparamBaseData(data, {
    ...(typeof data.on === "string" ? { on: data.on } : {}),
    ...(typeof data.off === "string" ? { off: data.off } : {}),
  });
