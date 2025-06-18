import type {
  KindOfBoolean,
  KindOfNumber,
  KindOfNumberArray,
  KindOfRpgDataId,
  KindOfSelect,
  KindOfString,
  KindOfStringArray,
  KindOfSystemDataId,
  KindOfFile,
  KindOfRpgDataIdArray,
  KindOFCombo,
  KindOfStructRef,
  KindOfFileArray,
} from "./kinds";

// 各パラメータ型のユニオン
export type StructParam =
  | KindOfBoolean
  | KindOfNumber
  | KindOfNumberArray
  | KindOfRpgDataId
  | KindOfRpgDataIdArray
  | KindOFCombo
  | KindOfSelect
  | KindOfString
  | KindOfStringArray
  | KindOfSystemDataId
  | KindOfFile
  | KindOfFileArray
  | StructAnnotation<object> // ネスト構造体対応
  | CoreStruct
  | CoreStructArray
  | KindOfStructRef;

interface CoreStruct {
  kind: "struct";
  struct: StructType<object>;
}

interface CoreStructArray {
  kind: "struct[]";
  struct: StructType<object>;
  default: object[];
}

// 構造体本体
export interface StructType<T extends object> {
  structName: string;
  params: {
    [K in keyof T]: StructParam;
  };
}

// 構造体アノテーション
export interface StructAnnotation<T extends object> {
  kind: "struct";
  struct: StructType<T>;
}
