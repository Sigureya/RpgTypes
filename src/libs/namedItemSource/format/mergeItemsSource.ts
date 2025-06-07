import type {
  Data_NamedItem,
  FormatCompiled,
  FormatLabelResolved,
  NamedItemSource,
  SourceIdentifier,
} from "./core";
import { joinSoruceId } from "./core";

export const mergeItemsSource = <Key>(
  formatList: ReadonlyArray<FormatLabelResolved<Key>>,
  namedItemSources: ReadonlyArray<NamedItemSource>
): Map<Key, FormatCompiled> => {
  const sourceMap = mappingNamedItems(namedItemSources);
  return formatList.reduce<Map<Key, FormatCompiled>>((acc, label) => {
    const entry = buildFinalFormatEntry(label, sourceMap);
    acc.set(label.kindId, entry);
    return acc;
  }, new Map());
};

const buildFinalFormatEntry = <T>(
  format: FormatLabelResolved<T>,
  sourceMap: ReadonlyMap<string, NamedItemSource>
): FormatCompiled => {
  const source = resolveDataSource(format.dataSource, sourceMap);
  return {
    patternCompiled: format.pattern,
    label: format.label,
    data: source ? source.items : undefined,
  };
};

const resolveDataSource = (
  source: SourceIdentifier | undefined,
  sourceMap: ReadonlyMap<string, NamedItemSource>
): NamedItemSource | undefined => {
  if (!source) {
    return undefined;
  }
  return sourceMap.get(joinSoruceId(source));
};

const mappingNamedItems = (
  list: ReadonlyArray<NamedItemSource>
): Map<string, NamedItemSource> => {
  return list.reduce<Map<string, NamedItemSource>>((map, item) => {
    const newItem: NamedItemSource = {
      items: cloneItems(item.items), // 余計な情報の削除を兼ねてコピー
      source: item.source,
      label: item.label,
    };
    map.set(joinSoruceId(item.source), newItem);
    return map;
  }, new Map());
};

const cloneItems = (list: ReadonlyArray<Data_NamedItem>): Data_NamedItem[] => {
  return list.map<Data_NamedItem>((item) => ({ id: item.id, name: item.name }));
};
