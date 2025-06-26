export const parseDeepJSON = (json: string): unknown => {
  const parsed = JSON.parse(json);
  if (Array.isArray(parsed)) {
    return parsed.map(parseDeepValue);
  }
  if (typeof parsed === "object" && parsed !== null) {
    return Object.fromEntries(
      Object.entries(parsed).map(([k, v]) => [k, parseDeepValue(v)])
    );
  }
  return parsed;
};

const parseDeepValue = (value: unknown): unknown => {
  if (typeof value !== "string") {
    return value;
  }
  try {
    const parsed = JSON.parse(value);
    // 配列の場合、各要素を再帰的にparseDeepValue
    if (Array.isArray(parsed)) {
      return parsed.map(parseDeepValue);
    }
    // オブジェクトの場合、各プロパティを再帰的にparseDeepValue
    if (typeof parsed === "object" && parsed !== null) {
      return Object.fromEntries(
        Object.entries(parsed).map(([k, v]) => [k, parseDeepValue(v)])
      );
    }
    return parsed;
  } catch {
    // JSON.parseに失敗した場合はそのまま返す
    return value;
  }
};
