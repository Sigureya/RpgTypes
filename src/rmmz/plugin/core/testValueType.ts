import type { ParamKinds, PrimitiveParam } from "./paramUnion";

const TABLE = {} as const satisfies {
  [key in ParamKinds]?: string;
};

const isStringValueParam = (param: PrimitiveParam) => {};
