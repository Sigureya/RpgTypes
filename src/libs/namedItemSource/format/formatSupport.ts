import type {
  FormatError,
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
} from "./types";

export const detectFormatErros = <T extends object>(
  format: FormatWithSource,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  const dataSourceErrorResult = dataSourceError(format, formatRule, errorTexts);
  const invalidPlaceholdersResult = invalidPlaceHolders(
    format.format,
    formatRule,
    errorTexts
  );
  return dataSourceErrorResult
    ? [dataSourceErrorResult, ...invalidPlaceholdersResult]
    : invalidPlaceholdersResult;
};

const isInvalidKey = <T extends object>(
  key: string,
  rule: FormatRule<T>
): boolean => {
  if (key.length === 0 || key.length >= 100) {
    return true;
  }
  if (key === rule.itemNamePlaceHolder) {
    return false;
  }
  if ((rule.placeHolders as string[]).includes(key)) {
    return false;
  }
  return true;
};

const invalidPlaceHolders = <T extends object>(
  format: string,
  rule: FormatRule<T>,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  const matched = Array.from(format.matchAll(/\{([.a-zA-Z0-9]+)\}/g));
  return matched.reduce<FormatError[]>((acc, item) => {
    const text: string = item[1];
    if (text && isInvalidKey(text, rule)) {
      acc.push({
        message: errorTexts.extraPlaceHolder,
        reason: text,
      });
    }
    return acc;
  }, []);
};

const dataSourceError = <T extends object>(
  format: FormatWithSource,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels
): FormatError | undefined => {
  const np = formatRule.itemNamePlaceHolder ?? "name";

  const includedName: boolean = format.format.includes(np);
  const hasSource: boolean = !!format.dataSource;
  if (!includedName && hasSource) {
    return {
      message: errorTexts.missingName,
      reason: np,
    };
  }
  if (includedName && !hasSource) {
    return {
      message: errorTexts.missingSourceId,
      reason: np,
    };
  }
  return undefined;
};
