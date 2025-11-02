import type {
  PluginParamEx,
  StructRefParam,
  StructArrayRefParam,
  PluginStructSchemaArray,
} from "./types";
import { hasStructAttr } from "./typeTest";

type ParamType = PluginParamEx<StructRefParam | StructArrayRefParam>[];

function createRefMap(
  schemas: ReadonlyArray<PluginStructSchemaArray>
): Record<string, ParamType> {
  return Object.fromEntries(
    schemas.map((schema) => [
      schema.struct,
      schema.params.filter(hasStructAttr),
    ])
  );
}

function propagate(
  allStructNames: ReadonlyArray<string>,
  refMap: Record<string, ParamType>,
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

export const collectDependentStructNames = (
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  directStructNames: ReadonlySet<string>
): Set<string> => {
  const refMap = createRefMap(schemas);
  const allStructNames = Object.keys(refMap);
  return propagate(allStructNames, refMap, new Set(directStructNames));
};
