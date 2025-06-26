const toStringDeep = (val: unknown): unknown => {
  if (Array.isArray(val)) {
    return val.map(toStringDeep);
  }
  if (typeof val === "object" && val !== null) {
    return Object.fromEntries(
      Object.entries(val).map(([k, v]) => [k, toStringDeep(v)])
    );
  }
  return String(val);
};

export const fnEx = (obj: unknown): string => {
  return JSON.stringify(fn(obj));
};

const fn = (obj: unknown): Record<string, string> | string[] => {
  if (Array.isArray(obj)) {
    return obj.map((v) =>
      typeof v === "object" && v !== null
        ? JSON.stringify(toStringDeep(v))
        : String(v)
    );
  }
  if (typeof obj === "object" && obj !== null) {
    return Object.entries(obj).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        if (typeof value === "object" && value !== null) {
          if (Array.isArray(value)) {
            acc[key] = JSON.stringify(
              value.map((v) =>
                typeof v === "object" && v !== null
                  ? JSON.stringify(toStringDeep(v))
                  : String(v)
              )
            );
          } else {
            acc[key] = JSON.stringify(toStringDeep(value));
          }
        } else {
          acc[key] = String(value);
        }
        return acc;
      },
      {}
    );
  }
  return {};
};
