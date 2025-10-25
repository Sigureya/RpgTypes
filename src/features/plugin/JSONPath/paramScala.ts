import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
} from "@RpgTypes/rmmz/plugin";
import type { PathPair } from "./types/struct2";

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
): PathPair<PluginParam<ArrayParamTypes>>[] => {
  return scalaArrays.map(
    (param): PathPair<PluginParam<ArrayParamTypes>> => ({
      path: `${parent}.${param.name}[*]`,
      param: param,
    })
  );
};
