import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
} from "@RpgTypes/rmmz/plugin";
import type { ScalaStruct } from "@RpgTypes/rmmz/plugin/classifyTypes";
import type { Result3 } from "./types/struct2";

export const getScalaParams = (
  scalas: ReadonlyArray<PluginParam<ScalaParam>>,
  parent: string
): string => {
  const itesm = scalas.map((param) => `"${param.name}"`).join(",");
  return `${parent}[${itesm}]`;
};

export const getScalaArrayParams = (
  scalaArrays: ReadonlyArray<PluginParam<ArrayParamTypes>>,
  parent: string
): string[] => {
  return scalaArrays.map((param) => `${parent}.${param.name}[*]`);
};

export const makeScalaPath = (
  scalas: ScalaStruct,
  parent: string
): Result3 => ({
  scalas: getScalaParams(scalas.scalas, parent),
  scalaArrays: getScalaArrayParams(scalas.scalaArrays, parent),
});
