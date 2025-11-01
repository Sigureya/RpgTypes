import type {
  PluginParamEx,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import type { StructArrayRefParam, StructRefParam } from "./primitiveParams";
import { isStructAttr } from "./typeTest";

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

export const findIndirectsFunctional = (
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  directStructNames: ReadonlySet<string>
): Set<string> => {
  const refMap = createRefMap(schemas);
  const allStructNames = Object.keys(refMap);
  return propagate(allStructNames, refMap, new Set(directStructNames));
};
