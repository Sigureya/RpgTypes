import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
} from "@RpgTypes/rmmz/plugin";

export const getScalaParams = (
  scalas: ReadonlyArray<PluginParam<ScalaParam>>,
  parent: string
) => {
  const itesm = scalas.map((param) => `"${param.name}"`).join(",");
  return `${parent}[${itesm}]`;
};

export const getScalaArrayParams = (
  scalaArrays: ReadonlyArray<PluginParam<ArrayParamTypes>>,
  parent: string
): string[] => {
  return scalaArrays.map((param) => `${parent}.${param.name}[*]`);
};
