import { FormatRule, FormatRuleCompiled, SourceKeyConcept, FormatItemMapper, FormatItemMapperCompiled } from './types';
export declare const compileFormatRule: <T, SoruceKey extends SourceKeyConcept>(rule: FormatRule<T, SoruceKey>) => FormatRuleCompiled<T, SoruceKey>;
export declare const getItemMappersFromRule: <T, SoruceKey extends SourceKeyConcept>(rule: FormatRule<T, SoruceKey>) => ReadonlyArray<FormatItemMapper<T, SoruceKey>>;
export declare const getPlaceHolderKeys: <T>(rule: FormatRule<T>) => Set<string>;
export declare const compileFormatItemMapper: <T, SoruceKey extends SourceKeyConcept>(itemMappers: FormatItemMapper<T, SoruceKey>) => FormatItemMapperCompiled<T, SoruceKey>;
export declare const execFormatRule: <Schema, Data extends Schema, SoruceKey extends SourceKeyConcept>(baseText: string, data: Data, rule: FormatRuleCompiled<Schema, SoruceKey>) => string;
