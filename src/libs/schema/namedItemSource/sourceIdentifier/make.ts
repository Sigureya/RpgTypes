import type { SourceIdentifier } from "./types";

const validAsciiKey = /^[a-zA-Z0-9]+$/;

export const sanitizeKey = (value: string): string | undefined => {
  return validAsciiKey.test(value) ? value : undefined;
};

export const testUnknonwKey = (value: unknown): value is string => {
  return typeof value === "string" ? validAsciiKey.test(value) : false;
};

export const joinSourceKey = (key: SourceIdentifier): string => {
  return [key.author, key.module, key.kind].join(".");
};

export const isValid = (
  source: Partial<SourceIdentifier>
): source is SourceIdentifier => {
  return (
    testUnknonwKey(source.author) &&
    testUnknonwKey(source.module) &&
    testUnknonwKey(source.kind)
  );
};
// TODO:ソース選択画面のデザイン
