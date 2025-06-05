import type {
  FormatWithSource,
  FormatErrorLabels,
  FormatErrorItem,
  FormatLimits,
  FormatErrorGroup,
} from "./format";
import type { FormatRule, SourceKeyConcept, FormatItemMapper } from "./rule";
import { getItemMappersFromRule, getPlaceHolderKeys } from "./rule";

export const detectFormatErrors = <T extends object>(
  format: FormatWithSource,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels,
  limits: FormatLimits = {
    placeHolderMaxLength: 50,
    formatMaxLength: 200,
  }
): FormatErrorGroup => {
  if (format.format.length > limits.formatMaxLength) {
    return {
      syntaxErrors: [
        {
          message: errorTexts.formatVeryLong,
          reason: format.format.slice(0, limits.formatMaxLength),
        },
      ],
      semanticErrors: [],
    };
  }
  const dataSourceErrorResult = detectItemMapperErrors(
    format,
    formatRule,
    errorTexts
  );
  const invalidPlaceholdersResult = detectInvalidPlaceholders(
    format.format,
    formatRule,
    errorTexts,
    limits.placeHolderMaxLength
  );
  return {
    syntaxErrors: invalidPlaceholdersResult,
    semanticErrors: dataSourceErrorResult,
  };
};

const detectInvalidPlaceholders = <T extends object>(
  format: string,
  rule: FormatRule<T>,
  errorTexts: FormatErrorLabels,
  placeHolderMaxLength: number
): FormatErrorItem[] => {
  const matched = Array.from(format.matchAll(/\{([.a-zA-Z0-9]+)\}/g));
  const placeHolderKeys: ReadonlySet<string> = getPlaceHolderKeys(rule);
  return matched.reduce<FormatErrorItem[]>((acc, item) => {
    const text: string = item[1];

    if (text.length === 0) {
      return acc;
    }
    if (text.length > placeHolderMaxLength) {
      acc.push({
        message: errorTexts.longPlaceHolder,
        reason: text.slice(0, placeHolderMaxLength),
      });
      return acc;
    }
    if (!placeHolderKeys.has(text)) {
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
): FormatErrorItem[] => {
  return getItemMappersFromRule(formatRule).reduce<FormatErrorItem[]>(
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
): FormatErrorItem | undefined => {
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
