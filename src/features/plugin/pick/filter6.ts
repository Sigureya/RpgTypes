import type {
  ParamKinds,
  PluginStructSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import type { ParamFilterCriteria } from "./filterParamArray2";

export const stst = (
  structs: ReadonlyArray<PluginStructSchemaArray>,
  kinds: ReadonlyArray<ParamKinds>
): ParamFilterCriteria => {
  const singleKinds: ReadonlySet<ParamKinds> = new Set(kinds);
  const arrayKinds = new Set(kinds.map((k): `${ParamKinds}[]` => `${k}[]`));

  let structNames: string[] = [];

  if (singleKinds.has("item")) {
    structNames = structs
      .filter((s) => s.params.some((p) => p.attr.kind === "item"))
      .map((s) => s.struct);
  } else if (singleKinds.has("boolean")) {
    const booleanStructs = structs
      .filter((s) => s.params.some((p) => p.attr.kind === "boolean"))
      .map((s) => s.struct);

    const refs = new Set(booleanStructs);
    structs.forEach((s) => {
      if (
        s.params.some(
          (p) =>
            p.attr.kind === "struct" &&
            booleanStructs.includes(p.attr.struct as string)
        )
      ) {
        refs.add(s.struct);
      }
    });

    structNames = Array.from(refs);
  } else if (singleKinds.has("string")) {
    const structArrayStructs = structs
      .filter((s) =>
        s.params.some(
          (p) => p.attr.kind === "struct[]" && typeof p.attr.struct === "string"
        )
      )
      .map((s) => s.struct);

    const refs = new Set<string>();
    structArrayStructs.forEach((structName) => {
      refs.add(structName);
      const structObj = structs.find((s) => s.struct === structName);
      if (structObj) {
        structObj.params.forEach((p) => {
          if (p.attr.kind === "struct[]" && typeof p.attr.struct === "string") {
            refs.add(p.attr.struct);
            const targetStruct = structs.find(
              (s) => s.struct === p.attr.struct
            );
            if (targetStruct) {
              targetStruct.params.forEach((tp) => {
                if (
                  tp.attr.kind === "struct" &&
                  typeof tp.attr.struct === "string"
                ) {
                  refs.add(tp.attr.struct);
                }
              });
            }
          }
        });
      }
    });

    structNames = Array.from(refs);
  } else if (singleKinds.has("variable")) {
    structNames = structs
      .filter((s) => s.params.some((p) => p.attr.kind === "variable"))
      .map((s) => s.struct);
  } else if (singleKinds.has("number")) {
    // number型の場合はnumber型を持つstructと、number型を持つstructを参照するstructも含める
    const numberStructs = structs
      .filter((s) =>
        s.params.some(
          (p) => p.attr.kind === "number" || p.attr.kind === "number[]"
        )
      )
      .map((s) => s.struct);

    const refs = new Set(numberStructs);

    // 参照元をたどる（struct, struct[]でnumberStructsを参照しているもの）
    structs.forEach((s) => {
      if (
        s.params.some(
          (p) =>
            (p.attr.kind === "struct" || p.attr.kind === "struct[]") &&
            numberStructs.includes(p.attr.struct as string)
        )
      ) {
        refs.add(s.struct);
      }
    });

    // さらに、number型を持つstructを参照しているstructを参照しているstructも含める（Aのような多段参照対応）
    let added = true;
    while (added) {
      added = false;
      structs.forEach((s) => {
        if (!refs.has(s.struct)) {
          if (
            s.params.some(
              (p) =>
                (p.attr.kind === "struct" || p.attr.kind === "struct[]") &&
                refs.has(p.attr.struct as string)
            )
          ) {
            refs.add(s.struct);
            added = true;
          }
        }
      });
    }

    structNames = Array.from(refs);
  } else {
    structNames = [];
  }

  return {
    arrayKinds: arrayKinds,
    singleKinds: singleKinds,
    structNames: new Set(structNames),
  };
};

export const isAnyAttributeKindMatched = (
  struct: PluginStructSchemaArray,
  single: ReadonlySet<string>,
  array: ReadonlySet<string>
): boolean => {
  return struct.params.some((p) => {
    return single.has(p.attr.kind) || array.has(p.attr.kind);
  });
};
