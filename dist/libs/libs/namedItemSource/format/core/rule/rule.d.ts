import { FormatItemMapper, FormatRule, FormatRuleCompiled } from './core';
export declare const compileFormatRule: <T>(rule: FormatRule<T>, extraItems?: ReadonlyArray<FormatItemMapper<T>>) => FormatRuleCompiled<T>;
export declare const resolveUnknownLabel: <T>(rule: FormatRuleCompiled<T>, key: string) => string;
export declare const applyPlaceholdersToText: <Schema, Data extends Schema>(baseText: string, data: Data, rule: FormatRuleCompiled<Schema>) => string;
