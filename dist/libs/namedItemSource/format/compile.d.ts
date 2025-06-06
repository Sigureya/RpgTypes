import { CompiledFormatBundle } from './bundle';
import { FormatErrorLabels, FormatLabelResolved, FormatRule, NamedItemSource, SourceKeyConcept } from './core';
export declare const compileFormatBundle: <T extends object, Key, Source extends SourceKeyConcept>(rule: FormatRule<T, Source>, formatList: ReadonlyArray<FormatLabelResolved<Key>>, namedItemSources: ReadonlyArray<NamedItemSource>, errorTexts: FormatErrorLabels) => CompiledFormatBundle<T, Key, Source>;
