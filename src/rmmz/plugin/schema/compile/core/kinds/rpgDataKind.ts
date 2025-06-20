import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./primitive";
import type { KindOfRpgDataId, KindOfSystemDataId } from "./primitiveParams";
import { lookupKind } from "./rpgData/lookup";
import type { X_Param } from "./x-rpg-param";
import { xparamBaseData } from "./x-rpg-param";

export const makeIdField = (data: KindOfRpgDataId | KindOfSystemDataId) =>
  ({
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number>);

export const makeIdFieldWithXParam = (
  data: KindOfRpgDataId | KindOfSystemDataId
) => {
  return {
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(xparamBaseData(data, lookupKind(data.kind)) satisfies X_Param),
  } satisfies JSONSchemaType<number>;
};
