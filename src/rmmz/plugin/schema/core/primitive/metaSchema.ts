import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { DiscriminatedUnionSchemaType } from "src/templates";
import type { X_MetaParamCore_Boolean } from "./boolean";
import type { X_MetaParamCore_Number } from "./numbers";
import type { ParamKinds_String } from "./string";

type KindOf<Kind extends string, T> = {
  kind: Kind;
  data: T;
};
export interface X_MetaParam_Shared {
  kind: string;
  parent?: string | null;
}

type kindsOfBoolean = KindOf<"boolean", X_MetaParamCore_Boolean>;
type kindsOfNumber = KindOf<"number", X_MetaParamCore_Number>;
type kindsOfDataId = KindOf<"dataId", SourceIdentifier | undefined>;

export type X_MetaParam_Boolean = X_MetaParam_Shared & kindsOfBoolean;
export type X_MetaParam_Number = X_MetaParam_Shared & kindsOfNumber;
export type X_MetaParam_DataId = X_MetaParam_Shared & kindsOfDataId;

export type X_MetaParamUnion =
  | X_MetaParam_Boolean
  | X_MetaParam_Number
  | X_MetaParam_DataId;
