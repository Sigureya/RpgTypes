import type { CompileLogItem } from "./core/kinds/compileLog";
import type { StructParam } from "./core/kinds/plugin";
import {} from "jsonschema";

const isStruct = (
  item: CompileLogItem
): item is CompileLogItem<
  Extract<StructParam, { kind: `struct` | `struct[]` }>
> => {
  return item.data.kind === `struct` || item.data.kind === `struct[]`;
};

const xxx = (list: CompileLogItem[]) => {
  list.filter(isStruct).map((item) => {
    //    item.
    //    item.data.
    return { [item.data.struct]: item.schema };
  });
  return 0;
};
