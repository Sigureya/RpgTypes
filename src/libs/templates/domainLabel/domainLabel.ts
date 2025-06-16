import type { DomainName } from "./types";

export const domainNames = <T extends Record<string, DomainName>>(
  record: T
): string[] => {
  return Object.entries<DomainName>(record).map(([, value]) => value.title);
};
