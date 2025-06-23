import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/basciMetaField";
import type {
  KindOfRpgDataId,
  KindOfSystemDataId,
} from "./core/primitiveParams";
import { lookupKind } from "./core/rpgData/lookup";
import type { X_Param } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

export const makeRpgIdField = (data: KindOfRpgDataId | KindOfSystemDataId) =>
  ({
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number>);

export const makeRpgIdFieldWithXParam = (
  data: KindOfRpgDataId | KindOfSystemDataId
) => {
  return {
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(xparamBaseData(data, lookupKind(data.kind)) satisfies X_Param),
  } satisfies JSONSchemaType<number>;
};
