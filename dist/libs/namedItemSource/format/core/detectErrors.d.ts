import { FormatErrorLabels, FormatLimits, FormatErrorGroup } from './formatErrorTypes';
import { FormatInput } from './types';
import { FormatRule, SourceKeyConcept } from './rule';
export declare const isValidFormatErrorGroup: (formatError: FormatErrorGroup) => boolean;
export declare const collectFormatErrors: <T extends object, Src extends SourceKeyConcept>(formatList: ReadonlyArray<FormatInput>, formatRule: FormatRule<T, Src>, errorTexts: FormatErrorLabels, limits?: FormatLimits) => FormatErrorGroup[];
export declare const detectFormatErrors: <T extends object, Src extends SourceKeyConcept>(format: FormatInput, formatRule: FormatRule<T, Src>, errorTexts: FormatErrorLabels, limits?: FormatLimits) => FormatErrorGroup;
