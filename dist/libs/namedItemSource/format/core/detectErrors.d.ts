import { FormatErrorLabels, FormatLimits, FormatErrorGroup } from './formatErrorTypes';
import { FormatRule } from './rule';
import { FormatInput } from './types';
export declare const isValidFormatErrorGroup: (formatError: FormatErrorGroup) => boolean;
export declare const collectFormatErrors: <T extends object>(formatList: ReadonlyArray<FormatInput>, formatRule: FormatRule<T>, errorTexts: FormatErrorLabels, limits?: FormatLimits) => FormatErrorGroup[];
export declare const detectFormatErrors: <T extends object>(format: FormatInput, formatRule: FormatRule<T>, errorTexts: FormatErrorLabels, limits?: FormatLimits) => FormatErrorGroup;
