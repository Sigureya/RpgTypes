import { FormatErrorLabels, FormatLimits, FormatErrorGroup } from './formatErrorTypes';
import { FormatWithSource } from './types';
import { FormatRule } from './rule';
export declare const detectFormatErrors: <T extends object>(format: FormatWithSource, formatRule: FormatRule<T>, errorTexts: FormatErrorLabels, limits?: FormatLimits) => FormatErrorGroup;
