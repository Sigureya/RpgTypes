import { FormatLabelResolved, NamedItemSource, FinalFormatEntry } from './core';
/**
 * ResolvedLabel 配列と NamedItemSource 配列を統合し、
 * Trait.code によるマップを構築する
 */
export declare const joinItemsSoruce: <Key>(labels: FormatLabelResolved<Key>[], namedItemSources: ReadonlyArray<NamedItemSource>) => Map<Key, FinalFormatEntry>;
