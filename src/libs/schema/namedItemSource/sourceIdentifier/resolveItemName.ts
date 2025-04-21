import type { Data_NamedItem } from "@RpgTypes/schema";
import { joinSourceKey } from "./make";
import type { SourceIdentifier } from "./types";

const formatFallbackLabel = (
  dataSource: SourceIdentifier,
  dataId: number
): string => {
  const sourceText: string = joinSourceKey(dataSource);
  return `${sourceText}[${dataId}]`;
};

export const resolveDataName = (
  dataId: number,
  dataSource: SourceIdentifier,
  getSourceItems: (
    src: SourceIdentifier
  ) => ReadonlyArray<Data_NamedItem> | undefined
): string => {
  const list = getSourceItems(dataSource);
  if (!list) {
    return formatFallbackLabel(dataSource, dataId); // リストが無くて名前を解決できない
  }

  const item = list.find((item) => item.id === dataId);
  return item
    ? item.name // 名前解決に成功
    : formatFallbackLabel(dataSource, dataId); // データが無くて名前解決に失敗
};
