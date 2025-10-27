import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
} from "@RpgTypes/rmmz/plugin";
import type { ArrayPathPair } from "./arrayEx/types";

export const makeScalaParams = (
  scalas: ReadonlyArray<PluginParam<ScalaParam>>,
  parent: string
): string => {
  const itesm = scalas.map((param) => `"${param.name}"`).join(",");
  return `${parent}[${itesm}]`;
};

export const makeScalaArrayParams = (
  scalaArrays: ReadonlyArray<PluginParam<ArrayParamTypes>>,
  parent: string
): ArrayPathPair[] => {
  return scalaArrays.map(
    (param): ArrayPathPair => ({
      path: `${parent}.${param.name}[*]`,
      param: param,
    })
  );
};
