import { Data_NamedItem, FormatRuleCompiled } from './core';
export declare const applyFormatRule: <Schema, Data extends Schema>(data: Data, list: ReadonlyArray<Data_NamedItem> | undefined, rule: FormatRuleCompiled<Schema>, format: string, getDataId: (data: Data) => number) => string;
