import type {
  GG,
  PluginParam,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import type { StructRefParam } from "./primitiveParams";

function createRefMap(
  schemas: ReadonlyArray<PluginStructSchemaArray>
): Record<string, PluginParam<StructRefParam>[]> {
  return Object.fromEntries(
    schemas.map((schema) => [
      schema.struct,
      schema.params.filter(
        (param: PluginParam): param is PluginParam<StructRefParam> =>
          param.attr.kind === "struct"
      ),
    ])
  );
}

function propagate(
  allStructNames: ReadonlyArray<string>,
  refMap: Record<string, PluginParam<StructRefParam>[]>,
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

export function filterStructs(
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  predicate: (param: PluginParam) => boolean
): GG {
  const directs = schemas.filter((schema) => schema.params.some(predicate));
  const directStructNames = new Set(directs.map((s) => s.struct));

  const indirects = findIndirectsFunctional(schemas, directStructNames);
  const indirectsOrdered = schemas.filter(
    (s) => !directStructNames.has(s.struct) && indirects.has(s.struct)
  );

  return {
    directs,
    indirects: indirectsOrdered,
  };
}
