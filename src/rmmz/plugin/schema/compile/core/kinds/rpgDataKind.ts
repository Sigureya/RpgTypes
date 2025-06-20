import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./primitive";
import type {
  KindBase,
  KindOfRpgDataId,
  KindOfSystemDataId,
} from "./primitiveParams";
import { lookupKind } from "./rpgData/lookup";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";
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
    ...(data.kind ? (xparamDataId(data) satisfies X_Param) : {}),
  } satisfies JSONSchemaType<number>;
};

export const xparamDataId = <
  Kind extends DataKind_RpgUnion | DataKind_SystemUnion
>(
  dataId: KindOfAnyData<Kind>
) => xparamBaseData(dataId, lookupKind(dataId.kind));

interface KindOfAnyData<Kind extends DataKind_RpgUnion | DataKind_SystemUnion>
  extends KindBase {
  kind: Kind;
  text?: string;
  desc?: string;
  parent?: string;
}
