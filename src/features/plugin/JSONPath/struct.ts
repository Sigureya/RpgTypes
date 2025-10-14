import type { ClassifiedPluginParams } from "@RpgTypes/rmmz/plugin/classifyTypes";

// パラメータからJSONPath情報を生成
function makeScalaPaths(scalas: any[], root: string) {
  return scalas.map((param) => ({
    parent: root,
    param,
    path: `${root}.${param.name}`,
  }));
}

function makeScalaArrayPaths(scalaArrays: any[], root: string) {
  return scalaArrays.map((param) => ({
    parent: root,
    param,
    path: `${root}.${param.name}[*]`,
  }));
}

function makeStructPaths(
  structs: any[],
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
) {
  const result: any[] = [];
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
  structArrays: any[],
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
) {
  const result: any[] = [];
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
) => {
  return {
    struct: structMap.has(schema.structName) ? schema.structName : "",
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
