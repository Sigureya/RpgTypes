import type {
  FormatWithSource,
  FormatErrorLabels,
  FormatError,
} from "./format";
import type { FormatRule, SourceKeyConcept, FormatItemMapper } from "./rule";
import { getItemMappersFromRule } from "./rule";

export const detectFormatErrors = <T extends object>(
  format: FormatWithSource,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  const dataSourceErrorResult = detectItemMapperErrors(
    format,
    formatRule,
    errorTexts
  );
  const invalidPlaceholdersResult = detectInvalidPlaceholders(
    format.format,
    formatRule,
    errorTexts
  );
  return [...dataSourceErrorResult, ...invalidPlaceholdersResult];
};

const isUnknownPlaceholderKey = <T extends object>(
  key: string,
  rule: FormatRule<T>
): boolean => {
  if (key.length === 0 || key.length >= 100) {
    return true;
  }
  if (rule.itemMapper) {
    if (key === rule.itemMapper.placeHolder) {
      return false;
    }
  }
  if ((rule.placeHolders as string[]).includes(key)) {
    return false;
  }
  return true;
};

const detectInvalidPlaceholders = <T extends object>(
  format: string,
  rule: FormatRule<T>,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  const matched = Array.from(format.matchAll(/\{([.a-zA-Z0-9]+)\}/g));
  return matched.reduce<FormatError[]>((acc, item) => {
    const text: string = item[1];
    if (text && isUnknownPlaceholderKey(text, rule)) {
      acc.push({
        message: errorTexts.extraPlaceHolder,
        reason: text,
      });
    }
    return acc;
  }, []);
};

const detectItemMapperErrors = <T extends object>(
  format: FormatWithSource,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  return getItemMappersFromRule(formatRule).reduce<FormatError[]>(
    (rule, item) => {
      const error = checkItemMapperSourceError(format, item, errorTexts);
      if (error) {
        rule.push(error);
      }
      return rule;
    },
    []
  );
};

const checkItemMapperSourceError = <T, SourceKey extends SourceKeyConcept>(
  format: FormatWithSource,
  rule: FormatItemMapper<T, SourceKey>,
  errorTexts: FormatErrorLabels
): FormatError | undefined => {
  const includedName: boolean = format.format.includes(rule.placeHolder);
  const hasSource: boolean = !!format.dataSource;
  if (!includedName && hasSource) {
    return {
      message: errorTexts.missingName,
      reason: rule.placeHolder,
    };
  }
  if (includedName && !hasSource) {
    return {
      message: errorTexts.missingSourceId,
      reason: rule.placeHolder,
    };
  }
  return undefined;
};
