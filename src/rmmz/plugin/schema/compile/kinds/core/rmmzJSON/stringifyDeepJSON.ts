export const stringifyDeepJSON = (obj: unknown): string => {
  return JSON.stringify(fn(obj));
};

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const fn = (obj: unknown): Record<string, string> | string[] => {
  if (Array.isArray(obj)) {
    return toStringArray(obj);
  }
  if (isPlainObject(obj)) {
    return toStringRecord(obj);
  }
  return {};
};

const toStringRecord = (obj: unknown): Record<string, string> => {
  if (!isPlainObject(obj)) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      if (Array.isArray(v)) {
        // 配列の場合、各要素をtoStringRecordでstring化し、さらにJSON.stringifyで配列化
        const arr = v.map((item) =>
          isPlainObject(item)
            ? JSON.stringify(toStringRecord(item))
            : String(item)
        );
        return [k, JSON.stringify(arr)];
      }
      if (isPlainObject(v)) {
        // オブジェクトの場合、再帰的にtoStringRecordでstring化し、JSON.stringify
        return [k, JSON.stringify(toStringRecord(v))];
      }
      // プリミティブ値はstring化
      return [k, String(v)];
    })
  );
};

const toStringArray = (arr: unknown[]): string[] => {
  return arr.map((v) =>
    typeof v === "object" && v !== null
      ? JSON.stringify(toStringRecord(v))
      : String(v)
  );
};
