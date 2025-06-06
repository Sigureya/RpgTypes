import type {
  FormatLabelResolved,
  NamedItemSource,
  FinalFormatEntry,
  SourceIdentifier,
  Data_NamedItem,
} from "./core";
import { joinSoruceId } from "./core";

/**
 * ResolvedLabel 配列と NamedItemSource 配列を統合し、
 * Trait.code によるマップを構築する
 */
export const joinItemsSoruce = <Key>(
  labels: FormatLabelResolved<Key>[],
  namedItemSources: ReadonlyArray<NamedItemSource>
): Map<Key, FinalFormatEntry> => {
  const sourceMap = mappingNamedItems(namedItemSources);
  return labels.reduce<Map<Key, FinalFormatEntry>>((acc, label) => {
    const entry = buildFinalFormatEntry(label, sourceMap);
    acc.set(label.targetKey, entry);
    return acc;
  }, new Map());
};

/**
 * 指定された ResolvedLabel からフォーマットデータを構築する
 */
const buildFinalFormatEntry = <T>(
  label: FormatLabelResolved<T>,
  sourceMap: ReadonlyMap<string, NamedItemSource>
): FinalFormatEntry => {
  const source = resolveDataSource(label.dataSource, sourceMap);
  return {
    format: label.format,
    label: label.label,
    data: source ? source.items : undefined,
  };
};

/**
 * SourceIdentifier に対応する NamedItemSource を取得
 */
const resolveDataSource = (
  source: SourceIdentifier | undefined,
  sourceMap: ReadonlyMap<string, NamedItemSource>
): NamedItemSource | undefined => {
  if (!source) {
    return undefined;
  }
  const key = joinSoruceId(source);
  return sourceMap.get(key);
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
