import type { SourceIdentifier } from "./types";

export const joinSoruceId = (source: SourceIdentifier): string => {
  return `${source.author}.${source.module}.${source.kind}`;
};
