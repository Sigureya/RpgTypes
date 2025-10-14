import type { PluginParam, PrimitiveParam } from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParams } from "@RpgTypes/rmmz/plugin/classifyTypes";
import type { ParamJSONPath, ParamJSONPathSturct } from "./types/types";

// パラメータからJSONPath情報を生成
const makeScalaPaths = (
  scalas: ReadonlyArray<PluginParam<PrimitiveParam>>,
  root: string
): ParamJSONPath[] => {
  return scalas.map(
    (param): ParamJSONPath => ({
      parent: root,
      param,
      path: `${root}.${param.name}`,
    })
  );
};

function makeScalaArrayPaths(
  scalaArrays: ReadonlyArray<PluginParam<PrimitiveParam>>,
  root: string
): ParamJSONPath[] {
  return scalaArrays.map(
    (param): ParamJSONPath => ({
      parent: root,
      param,
      path: `${root}.${param.name}[*]`,
    })
  );
}

function makeStructPaths(
  structs: PluginParam<PrimitiveParam>[],
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): ParamJSONPath[] {
  const result: ParamJSONPath[] = [];
  for (const struct of structs) {
    const structSchema = structMap.get(struct.attr.struct);
    if (!structSchema) {
      continue;
    }
    // スカラー
    for (const param of structSchema.scalas ?? []) {
      result.push({
        parent: root,
        param,
        path: `${root}.${struct.name}.${param.name}`,
      });
    }
    // 構造体（ネストは未対応）
    for (const param of structSchema.structs ?? []) {
      result.push({
        parent: root,
        param,
        path: `${root}.${struct.name}.${param.name}`,
      });
    }
  }
  return result;
}

function makeStructArrayPaths(
  structArrays: PluginParam<PrimitiveParam>[],
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): ParamJSONPath[] {
  const result: ParamJSONPath[] = [];
  for (const structArr of structArrays) {
    const structSchema = structMap.get(structArr.attr.struct);
    if (!structSchema) {
      continue;
    }
    // スカラー
    for (const param of structSchema.scalas ?? []) {
      result.push({
        parent: root,
        param,
        path: `${root}.${structArr.name}[*].${param.name}`,
      });
    }
    // 構造体（ネスト対応: さらにstructArraysがあれば再帰）
    for (const param of structSchema.structArrays ?? []) {
      const nestedSchema = structMap.get(param.attr.struct);
      if (!nestedSchema) {
        continue;
      }
      for (const nestedParam of nestedSchema.scalas ?? []) {
        result.push({
          parent: root,
          param: nestedParam,
          path: `${root}.${structArr.name}[*].${param.name}[*].${nestedParam.name}`,
        });
      }
    }
  }
  return result;
}

export const createPathFromSchema = (
  schema: ClassifiedPluginParams,
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): ParamJSONPathSturct => {
  return {
    struct: "",
    scalas: makeScalaPaths(schema.scalas ?? [], root),
    scalaArrays: makeScalaArrayPaths(schema.scalaArrays ?? [], root),
    structs: makeStructPaths(schema.structs ?? [], root, structMap),
    structArrays: makeStructArrayPaths(
      schema.structArrays ?? [],
      root,
      structMap
    ),
  };
};
