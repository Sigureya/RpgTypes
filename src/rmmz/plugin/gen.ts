import type {
  PluginStructSchemaArray,
  PluginParam,
  StructRefParam,
  StructArrayRefParam,
} from "./core";
import type {
  ScalaParam,
  ArrayParamTypes,
  PrimitiveParam,
  ParamKinds,
} from "./core/paramUnion";

interface PP {
  struct: string;
  paramName: string;
}

const gen = <T>(struct: PluginStructSchemaArray, fn: () => T) => {};

interface Handlers<A, S, P, SA> extends Handlers2 {
  struct: (struct: StructRefParam) => S;
  structArray: (structArray: StructArrayRefParam) => SA;
  scala: (param: PluginParam<ScalaParam>) => P;
  array: (param: PluginParam<ArrayParamTypes>) => A;
}
interface Handlers2 {
  struct: (struct: StructRefParam) => unknown;
  structArray: (structArray: StructArrayRefParam) => unknown;
  scala: (param: PluginParam<ScalaParam>) => unknown;
  array: (param: PluginParam<ArrayParamTypes>) => unknown;
}

const createStructMap3 = <K extends ParamKinds, H extends Handlers2>(
  params: ReadonlyArray<PluginParam>,
  handlers: H
) => {};

export const createStructMap2 = (
  structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};

const isAnyAttributeKindMatched = (
  struct: PluginStructSchemaArray,
  single: ReadonlySet<string>,
  array: ReadonlySet<string>
): boolean => {
  return struct.params.some((p) => {
    return single.has(p.attr.kind) || array.has(p.attr.kind);
  });
};

// const pickParamByKind = <K>(struct: PluginStructSchemaArray) => {};
