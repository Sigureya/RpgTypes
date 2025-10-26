import type { ParamKinds, PrimitiveParam, ScalaParam } from "./paramUnion";

const TABLE = {
  string: { type: "string" },
  number: { type: "number" },
  boolean: { type: "boolean" },
  armor: { type: "number" },
  actor: { type: "number" },
  class: { type: "number" },
  enemy: { type: "number" },
  skill: { type: "number" },
  state: { type: "number" },
  item: { type: "number" },
  weapon: { type: "number" },
  common_event: { type: "number" },
  switch: { type: "number" },
  variable: { type: "number" },
  troop: { type: "number" },
  multiline_string: { type: "string" },
  file: { type: "string" },
  combo: { type: "string" },
  select: { type: "string" },
  any: { type: "string" },
} as const satisfies {
  [key in ParamKinds]?: { type: string };
};

export const isStringValueParam = (
  param: ScalaParam
): param is Extract<PrimitiveParam, { default: string }> => {
  const info = TABLE[param.kind];
  return info.type === "string";
};
