import type { ArraySchemaFilterd } from "./arraySchemaFilterdTypes";
import type {
  PluginParam,
  PluginParamEx,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import { isStructAttr } from "./arraySchemaUtils";
import type { StructArrayRefParam, StructRefParam } from "./primitiveParams";

function createRefMap(
  schemas: ReadonlyArray<PluginStructSchemaArray>
): Record<string, PluginParamEx<StructRefParam | StructArrayRefParam>[]> {
  return Object.fromEntries(
    schemas.map((schema) => [schema.struct, schema.params.filter(isStructAttr)])
  );
}

function propagate(
  allStructNames: ReadonlyArray<string>,
  refMap: Record<string, PluginParamEx<StructRefParam | StructArrayRefParam>[]>,
  initialNames: Set<string>
): Set<string> {
  type State = { names: Set<string>; changed: boolean };

  // 最大伝播回数分だけreduceで状態を伝播
  const finalState = allStructNames.reduce<State>(
    (state) => {
      if (!state.changed) {
        return state;
      }
      const next: string[] = allStructNames.filter(
        (struct) =>
          !state.names.has(struct) &&
          refMap[struct].some((ref) => state.names.has(ref.attr.struct))
      );
      if (next.length === 0) {
        return { names: state.names, changed: false };
      }
      return {
        names: new Set([...state.names, ...next]),
        changed: true,
      };
    },
    { names: initialNames, changed: true }
  );

  return finalState.names;
}

function findIndirectsFunctional(
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  directStructNames: ReadonlySet<string>
): Set<string> {
  const refMap = createRefMap(schemas);
  const allStructNames = Object.keys(refMap);
  return propagate(allStructNames, refMap, new Set(directStructNames));
}

export const filterStructs2 = (
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  predicate: (param: PluginStructSchemaArray) => boolean
): ArraySchemaFilterd => {
  const directs = schemas.filter(predicate);
  const directNames: Set<string> = new Set(directs.map((s) => s.struct));
  const indirects: Set<string> = findIndirectsFunctional(schemas, directNames);

  return { directs, indirects, directNames };
};

export function filterStructs(
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  predicate: (param: PluginParam) => boolean
) {
  const { directs, indirects, directNames } = filterStructs2(schemas, (s) =>
    s.params.some((p) => predicate(p))
  );
  const indirectsOrdered = schemas.filter(
    (s) => !directNames.has(s.struct) && indirects.has(s.struct)
  );

  return {
    directs,
    indirects: indirectsOrdered,
    indirectsNames: indirects,
  };
}
