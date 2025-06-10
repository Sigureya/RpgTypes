import { FormatCompiled, FormatLabelResolved, NamedItemSource } from './core';
export declare const mergeItemsSource: <Key>(formatList: ReadonlyArray<FormatLabelResolved<Key>>, namedItemSources: ReadonlyArray<NamedItemSource>) => Map<Key, FormatCompiled>;
