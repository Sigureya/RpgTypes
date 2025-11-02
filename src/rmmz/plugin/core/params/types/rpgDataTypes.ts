import type { ParamBase } from "./paramBase";
import type {
  DataKind_SystemUnion,
  DataKind_RpgUnion,
} from "./rpgDataTypesNames";

export interface SystemDataIdParam extends ParamBase {
  kind: DataKind_SystemUnion;
  default: number;
}

export interface SystemDataIdArrayParam extends ParamBase {
  kind: `${DataKind_SystemUnion}[]`;
  default: number[];
}
export interface RpgDataIdParam extends ParamBase {
  kind: DataKind_RpgUnion;
  default: number;
}

export interface RpgDataIdArrayParam extends ParamBase {
  kind: `${DataKind_RpgUnion}[]`;
  default: number[];
}
