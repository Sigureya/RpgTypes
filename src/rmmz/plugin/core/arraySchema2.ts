import { filterStructs } from "./arraySchemaFilter";
import type {
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import type { SSSS } from "./arraySchemaTypes2";
import { isStructAttr } from "./arraySchemaUtils";
import type { StructArrayRefParam, StructRefParam } from "./primitiveParams";
import { isStructArrayParam, isStructParam } from "./typeTest";

interface GGG<T extends PluginParam> {
  struct: string;
  params: T[];
}

export const ssss = (struct: PluginStructSchemaArray): SSSS => ({
  struct: struct.struct,
  params: struct.params.filter(isStructAttr),
});

const cccc = <T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
) => {
  const { directs, indirects } = filterStructs(schema.structs, predicate);
  const s2: GGG<T>[] = directs.map((s) => ({
    struct: s.struct,
    params: s.params.filter((p) => predicate(p)),
  }));

  const s3 = indirects.map(ssss);
  return {
    structs: s2,
  };
};
