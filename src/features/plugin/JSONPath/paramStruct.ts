import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { makeScalaParams, makeScalaArrayParams } from "./paramScala";
import type { ErrorCodes } from "./types/errorTypes";
import type { StructPropertysPath, Result4 } from "./types/struct2";

const ERROR_CODE = {
  undefinedStruct: "undefined_struct",
} as const satisfies ErrorCodes;

function collectFromSchema(
  schemaName: string,
  basePath: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes,
  visited: ReadonlySet<string>
): Result4 {
  if (visited.has(schemaName)) {
    return {
      items: [],
      errors: [],
    };
  }

  const schema = structMap.get(schemaName);
  if (!schema) {
    return {
      items: [],
      errors: [
        {
          code: errors.undefinedStruct,
          path: basePath,
        },
      ],
    };
  }

  // 現在ノード（このスキーマ由来）に関する情報を取得。scala値のみ。
  const current: StructPropertysPath = {
    structName: schemaName,
    scalas: makeScalaParams(schema.scalas, basePath),
    scalaArrays: makeScalaArrayParams(schema.scalaArrays, basePath),
  };

  // structs（通常の入れ子）の再帰結果を reduce で取得
  const structChildren = schema.structs.reduce<Result4[]>((acc, s) => {
    const v2 = new Set(visited);
    v2.add(schemaName);
    return acc.concat(
      collectFromSchema(
        s.attr.struct,
        `${basePath}.${s.name}`,
        structMap,
        errors,
        v2
      )
    );
  }, []);

  // structArrays（配列入れ子）の再帰結果を reduce で取得
  const structArrayChildren = schema.structArrays.reduce<Result4[]>(
    (acc, sa) =>
      acc.concat(
        collectFromSchema(
          sa.attr.struct,
          `${basePath}.${sa.name}[*]`,
          structMap,
          errors,
          visited
        )
      ),
    []
  );

  return {
    items: [
      current,
      ...structChildren.flatMap((r) => r.items),
      ...structArrayChildren.flatMap((r) => r.items),
    ],
    errors: [
      ...structChildren.flatMap((r) => r.errors),
      ...structArrayChildren.flatMap((r) => r.errors),
    ],
  };
}

/**
 * PluginParam<StructRefParam> の配列を root(parent) を起点に Result3[] に展開する
 */
export function getPathFromStructParam(
  params: ReadonlyArray<PluginParam<StructRefParam>>,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result4 {
  return params.reduce<Result4>(
    (result, param) => {
      const res = collectFromSchema(
        param.attr.struct,
        `${parent}.${param.name}`,
        structMap,
        ERROR_CODE,
        new Set()
      );
      return {
        items: result.items.concat(res.items),
        errors: result.errors.concat(res.errors),
      };
    },
    { items: [], errors: [] }
  );
}

/**
 * struct schema 名と parent を渡して Result3[] を得る補助関数
 */
export function getPathFromStructSchema(
  structName: string,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result4 {
  return collectFromSchema(
    structName,
    parent,
    structMap,
    ERROR_CODE,
    new Set()
  );
}
