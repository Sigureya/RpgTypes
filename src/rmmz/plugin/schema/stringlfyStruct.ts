const stringifyPrimitive = (value: string | number | boolean): string => {
  return value.toString();
};

const stringlfyValue = (
  value: object | string | number | boolean | unknown[]
) => {
  if (Array.isArray(value)) {
    return stringlfyArray(value as Array<string | number | boolean | object>);
  }
  if (typeof value === "object") {
    return stringlfyObject(value);
  }

  return stringifyPrimitive(value);
};

const typeSame = (array: unknown[], type: string) => {
  return array.every((e) => typeof e === type);
};

export const stringlfyArray = (
  array: ReadonlyArray<string | number | boolean | object>
) => {
  return JSON.stringify(stringlfyArrayImple(array), null, 0);
};
export const stringlfyArrayImple = (
  array: ReadonlyArray<string | number | boolean | object>,
  knows: Set<object> = new Set()
): string[] => {
  if (array.length === 0) {
    return [];
  }
  const type = typeof array[0];
  switch (type) {
    case "string":
    case "number":
      return array.map((e) => e.toString());
  }
  if (type !== "object") {
    throw new Error(`Invalid type:${type}`);
  }
  const invalidItems = array.filter((e) => Array.isArray(e));
  if (invalidItems.length > 0) {
    throw new Error(`Invalid items:${invalidItems.length}`, {
      cause: invalidItems,
    });
  }
  return array.map((e) => stringlfyObject(e as object));
};

const isArrayTypeValid = (array: unknown[]) => {
  if (array.length === 0) {
    return true;
  }
  const type = typeof array[0];
  return array.every((e) => {
    return typeof e === type && !Array.isArray(e);
  });
};

export const stringlfyObject = <T extends object>(
  object: Exclude<T, unknown[]>
  //  knows: Set<object> = new Set()
) => {
  const o = Object.entries(object).reduce<Record<string, unknown>>(
    (prev, [key, value]) => {
      const v = stringlfyValue(value);
      prev[key] = v;
      return prev;
    },
    {}
  );
  return JSON.stringify(o);
};

// 整理
// Struct<Record<string, string |number|boolean>> =>そのまま変換可能
// Struct<Record<string, string |number|boolean| string[]|number[]>> => 配列を.map<string>()してからJSON.stringfy()するだけで可能
// Struct<Record<string,object[]>> 変換可能だが、objectの中身次第。
// objectが完全であることは保証されるが、object => StructJSON<T>への変換が必要

// StructWithDefault<T> →少なくとも一番上は変換可能。
// StructWithName<T> → 変換に失敗する場合がある。辞書が不完全だと発生
// StructWithParams<T> → 基本的に成功する。内部にあるstructが不完全だと失敗
