import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
} from "@RpgTypes/rmmz/plugin";

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
): string[] => {
  return scalaArrays.map((param) => `${parent}.${param.name}[*]`);
};
