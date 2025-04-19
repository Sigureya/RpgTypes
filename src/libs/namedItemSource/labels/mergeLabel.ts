import type { DomainLabel } from "@RpgTypes/schema";

export type PrimitiveRecord<T> = {
  [K in keyof T]: string;
};

export const mergeWithDefaults = <T>(
  defaultLabels: PrimitiveRecord<T>,
  labels: Partial<T>
): {
  [K in keyof T]: string;
} => {
  const reulst = { ...defaultLabels };
  for (const key in defaultLabels) {
    const value = labels[key];
    if (typeof value === "string") {
      reulst[key] = value;
    }
  }
  return reulst;
};

export const mergeDomainLabel = <T>(
  base: DomainLabel<PrimitiveRecord<T>>,
  override: Partial<DomainLabel<Partial<T>>>
): DomainLabel<{ [K in keyof T]: string }> => {
  return {
    domainName: override.domainName ?? base.domainName,
    options: mergeWithDefaults(base.options, override.options ?? {}),
  };
};

export const mergeNestedPrimitiveRecords = <T>(
  base: T,
  override: Partial<{ [K in keyof T]: Partial<PrimitiveRecord<T[K]>> }>
): T => {
  const result: Partial<T> = {};
  for (const domain in base) {
    const domainBase = base[domain];
    const domainOverride = override[domain] ?? {};
    result[domain] = mergeWithDefaults(
      domainBase as Required<typeof domainOverride>,
      domainOverride
    ) as T[typeof domain];
  }
  return result as T;
};
