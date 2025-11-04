import type {
  ScalaParam,
  ArrayParamTypes,
  PluginParamEx,
} from "@RpgTypes/rmmz/plugin";
import type { ArrayPathPair } from "./arrayEx/types/query";

export const makeScalaParams = (
  scalas: ReadonlyArray<PluginParamEx<ScalaParam>>,
  parent: string
): string => {
  const itesm = scalas.map((param) => `"${param.name}"`).join(",");
  return `${parent}[${itesm}]`;
};

export const makeScalaArrayParams = (
  scalaArrays: ReadonlyArray<PluginParamEx<ArrayParamTypes>>,
  parent: string
): ArrayPathPair[] => {
  return scalaArrays.map(
    (param): ArrayPathPair => ({
      path: `${parent}.${param.name}[*]`,
      param: param,
    })
  );
};
