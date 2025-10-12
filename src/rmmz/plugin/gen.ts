/* eslint-disable @functional/no-return-void */
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
} from "./core/paramUnion";
import { isArrayParam, isStructArrayParam, isStructParam } from "./typeTest";

export interface Handlers2<ST, STA, S, A> {
  struct: (
    struct: StructRefParam,
    name: string,
    s: PluginStructSchemaArray | null
  ) => ST;
  structArray: (
    structArray: StructArrayRefParam,
    name: string,
    s: PluginStructSchemaArray | null
  ) => STA;
  scala: (param: ScalaParam, name: string) => S;
  array: (param: ArrayParamTypes, name: string) => A;
}

export interface XXX<ST, STA, S, A> {
  structs: ST[];
  structArrays: STA[];
  scalas: S[];
  arrays: A[];
}

export const createStructMap3 = <ST, STA, S, A>(
  structSchema: PluginStructSchemaArray,
  handlers: Handlers2<ST, STA, S, A>,
  structMap: ReadonlyMap<string, PluginStructSchemaArray> = new Map()
): XXX<ST, STA, S, A> => {
  const structs: ST[] = [];
  const structArrays: STA[] = [];
  const scalas: S[] = [];
  const arrays: A[] = [];

  structSchema.params.forEach((p: PluginParam<PrimitiveParam>) => {
    if (isStructParam(p.attr)) {
      const otehrStruct = structMap.get(p.attr.struct);
      structs.push(handlers.struct(p.attr, p.name, otehrStruct ?? null));
      return;
    }
    if (isStructArrayParam(p.attr)) {
      const otehrStruct = structMap.get(p.attr.struct);
      structArrays.push(
        handlers.structArray(p.attr, p.name, otehrStruct ?? null)
      );
      return;
    }
    if (isArrayParam(p.attr)) {
      arrays.push(handlers.array(p.attr, p.name));
      return;
    }
    scalas.push(handlers.scala(p.attr, p.name));
  });
  return {
    structs,
    structArrays,
    scalas,
    arrays,
  };
};
