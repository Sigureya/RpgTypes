import type {
  FormatErrorLabels,
  FormatLimits,
  FormatErrorGroup,
  FormatErrorItem,
} from "./formatErrorTypes";
import type { FormatRule, FormatItemMapper } from "./rule";
import { getItemMappersFromRule, getPlaceHolderKeys } from "./rule";
import type { FormatInput, FormatWithSource } from "./types";

export const isValidFormatErrorGroup = (
  formatError: FormatErrorGroup
): boolean => {
  return (
    formatError.syntaxErrors.length === 0 &&
    formatError.semanticErrors.length === 0
  );
};

export const collectFormatErrors = <T extends object>(
  formatList: ReadonlyArray<FormatInput>,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels,
  limits: FormatLimits = {
    placeHolderMaxLength: 50,
    formatMaxLength: 200,
  }
): FormatErrorGroup[] => {
  return formatList.reduce<FormatErrorGroup[]>((acc, format) => {
    const errors = detectFormatErrors(format, formatRule, errorTexts, limits);
    if (!isValidFormatErrorGroup(errors)) {
      acc.push(errors);
    }
    return acc;
  }, []);
};

export const detectFormatErrors = <T extends object>(
  format: FormatInput,
  formatRule: FormatRule<T>,
  errorTexts: FormatErrorLabels,
  limits: FormatLimits = {
    placeHolderMaxLength: 50,
    formatMaxLength: 200,
  }
): FormatErrorGroup => {
  if (format.pattern.length >= limits.formatMaxLength) {
    return {
      formatLabel: format.label,
      syntaxErrors: [
        {
          message: errorTexts.formatVeryLong,
          reason: format.pattern.slice(0, limits.formatMaxLength),
        },
      ],
      semanticErrors: [],
    };
  }
  return {
    formatLabel: format.label,
    semanticErrors: detectItemMapperErrors(format, formatRule, errorTexts),
    syntaxErrors: detectInvalidPlaceholders(
      format.pattern,
      formatRule,
      errorTexts,
      limits.placeHolderMaxLength
    ),
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

const checkItemMapperSourceError = <T>(
  format: FormatWithSource,
  rule: FormatItemMapper<T>,
  errorTexts: FormatErrorLabels
): FormatErrorItem | undefined => {
  const includedName: boolean = format.pattern.includes(rule.placeHolder);
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
