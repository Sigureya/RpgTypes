import type {
  FormatError,
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
} from "./types";

export const detectFormatErros = (
  format: FormatWithSource,
  formatRule: FormatRule,
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

const isInvalidKey = (key: string, rule: FormatRule): boolean => {
  if (key.length === 0 || key.length >= 100) {
    return true;
  }
  if (key === rule.itemNamePlaceHolder) {
    return false;
  }
  if (rule.placeHolders.includes(key)) {
    return false;
  }
  return true;
};

const invalidPlaceHolders = (
  format: string,
  rule: FormatRule,
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

const dataSourceError = (
  format: FormatWithSource,
  formatRule: FormatRule,
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
