import { CompiledFormatBundle } from './bundle';
import { Data_NamedItem, FormatErrorLabels, FormatLabelResolved, FormatResult, FormatRule, FormatRuleCompiled, NamedItemSource } from './core';
import { FormatLookupKeys } from './core/accessor';
export declare const compileFormatBundle: <T extends object, KindKey>(rule: FormatRule<T>, formatList: ReadonlyArray<FormatLabelResolved<KindKey>>, namedItemSources: ReadonlyArray<NamedItemSource>, errorTexts: FormatErrorLabels) => CompiledFormatBundle<T, KindKey>;
export declare const isValidFormatBundle: <T extends object, KindKey>(bundle: CompiledFormatBundle<T, KindKey>) => boolean;
export declare const formatWithCompiledBundle: <T extends object, KindKey>(data: T, bundle: CompiledFormatBundle<T, KindKey>, lookup: FormatLookupKeys<T, KindKey>) => FormatResult;
export declare const applyFormatRule: <Schema, Data extends Schema>(data: Data, list: ReadonlyArray<Data_NamedItem> | undefined, rule: FormatRuleCompiled<Schema>, format: string, getDataId: (data: Data) => number) => string;
