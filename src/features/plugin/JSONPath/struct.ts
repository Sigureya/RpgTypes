import type {
  PluginParam,
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
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
  structs: PluginParam<StructRefParam>[],
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): ParamJSONPath[] {
  return structs.reduce<ParamJSONPath[]>((result, struct) => {
    const structSchema = structMap.get(struct.attr.struct);
    if (!structSchema) {
      return result;
    }
    // スカラー
    result.push(
      ...(structSchema.scalas ?? []).map(
        (param): ParamJSONPath => ({
          parent: root,
          param,
          path: `${root}.${struct.name}.${param.name}`,
        })
      )
    );
    // 構造体（ネストは未対応）
    result.push(
      ...(structSchema.structs ?? []).map(
        (param): ParamJSONPath => ({
          parent: root,
          param,
          path: `${root}.${struct.name}.${param.name}`,
        })
      )
    );
    return result;
  }, []);
}

function makeStructArrayPaths(
  structArrays: PluginParam<StructArrayRefParam>[],
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): ParamJSONPath[] {
  return structArrays.reduce<ParamJSONPath[]>((result, structArr) => {
    const structSchema = structMap.get(structArr.attr.struct);
    if (!structSchema) {
      return result;
    }
    // スカラー
    result.push(
      ...(structSchema.scalas ?? []).map(
        (param): ParamJSONPath => ({
          parent: root,
          param,
          path: `${root}.${structArr.name}[*].${param.name}`,
        })
      )
    );
    // 構造体（ネスト対応: さらにstructArraysがあれば再帰）
    result.push(
      ...(structSchema.structArrays ?? []).flatMap((param): ParamJSONPath[] => {
        const nestedSchema = structMap.get(param.attr.struct);
        if (!nestedSchema) {
          return [];
        }
        return (nestedSchema.scalas ?? []).map(
          (nestedParam): ParamJSONPath => ({
            parent: root,
            param: nestedParam,
            path: `${root}.${structArr.name}[*].${param.name}[*].${nestedParam.name}`,
          })
        );
      })
    );
    return result;
  }, []);
}

export const createPathFromSchema = (
  schema: ClassifiedPluginParams,
  root: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): ParamJSONPathSturct => {
  return {
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
