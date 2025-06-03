import { mappingNamedItems } from "./namedItemMap";
import { joinSoruceId } from "./sourceId";
import type {
  FormatLabelResolved,
  NamedItemSource,
  FinalFormatEntry,
  SourceIdentifier,
} from "./types";

/**
 * 指定された ResolvedLabel からフォーマットデータを構築する
 */
const buildFinalFormatEntry = (
  label: FormatLabelResolved<number>,
  sourceMap: Map<string, NamedItemSource>
): FinalFormatEntry => {
  const source = resolveDataSource(label.dataSource, sourceMap);
  return {
    format: label.format,
    label: label.label,
    data: source ? source.items : [],
  };
};

/**
 * ResolvedLabel 配列と NamedItemSource 配列を統合し、
 * Trait.code によるマップを構築する
 */
export const buildFinalFormatMap = (
  labels: FormatLabelResolved<number>[],
  namedItemSources: NamedItemSource[]
): Map<number, FinalFormatEntry> => {
  const sourceMap = mappingNamedItems(namedItemSources);
  return labels.reduce<Map<number, FinalFormatEntry>>((acc, label) => {
    const entry = buildFinalFormatEntry(label, sourceMap);
    acc.set(label.targetKey, entry);
    return acc;
  }, new Map());
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

// const missingFormat = (trati: Trait): FormatResult => {
//   return {
//     label: "",
//     text: `Trait ${trati.code} is missing in the format map.`,
//   };
// };

// const ggggggggg = (
//   tarit: Trait,
//   formatMap: Map<number, ResolvedLabel>,
//   dataMap: Map<string, NamedItemSource>,
//   formatFn: (
//     label: ResolvedLabel,
//     trait: Trait,
//     list: ReadonlyArray<Data_NamedItem>
//   ) => string
// ): FormatResult => {
//   const format = formatMap.get(tarit.code);
//   if (!format) {
//     return missingFormat(tarit);
//   }
//   const source = resolveDataSource(format.dataSource, dataMap);
//   return {
//     label: format.label,
//     text: formatFn(format, tarit, source ? source.items : []),
//   };
// };
