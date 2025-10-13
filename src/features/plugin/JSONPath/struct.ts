import type {
  PluginStructSchemaArray,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParams } from "@RpgTypes/rmmz/plugin/classifyTypes";
import {
  scalaParamPath,
  arrayParamPath,
  structArrayParamPath,
  structParamPath,
} from "./param";
import type { ParamJSONPath } from "./types";
export interface StructPathXX {
  scalas: ParamJSONPath[];
  arrays: ParamJSONPath[];
}
export const xxxStruct = (
  params: ClassifiedPluginParams,
  parent: string,
  structMap: ReadonlyMap<string, PluginStructSchemaArray> = new Map(),
  visited: ReadonlySet<string> = new Set()
): StructPathXX => {
  const scala = params.scalas.map((p) => scalaParamPath(p, parent));
  const array = params.scalaArrays.map((p) => arrayParamPath(p, parent));
  params.structs.reduce((acc: unknown[], p) => {
    if (visited.has(p.attr.struct)) {
      return acc;
    }
    const v2 = new Set(visited);
    v2.add(p.attr.struct);
    return acc;
  }, []);
  return {
    arrays: array,
    scalas: scala,
  };
};

interface UnknownStruct {
  error: string;
  childStruct: string;
  parentStruct: string;
  paramName: string;
}

interface SSS4 {
  errors: UnknownStruct[];
  params: [];
}

const sm2 = (
  struct: StructRefParam,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  visited: ReadonlySet<string>,
  parent: string,
  paramName: string
): SSS4 | null => {
  const ss = structMap.get(struct.struct);
  if (!ss) {
    return {
      params: [],
      errors: [
        {
          error: "unknown struct",
          childStruct: struct.struct,
          parentStruct: parent,
          paramName: paramName,
        },
      ],
    };
  }
  if (visited.has(struct.struct)) {
    return {
      params: [],
      errors: [
        {
          error: "circular reference",
          childStruct: struct.struct,
          parentStruct: parent,
          paramName: paramName,
        },
      ],
    };
  }

  return null;
};

const vvvv = () => {};
