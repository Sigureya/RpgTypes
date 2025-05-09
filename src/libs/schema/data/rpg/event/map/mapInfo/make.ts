import type { Data_MapInfo } from "./mapInfo";

const makeMapName = (mapId: number) => {
  return mapId.toString().padStart(3, "0");
};

export const makeMapInfoData = (
  info: { id: number } & Partial<Data_MapInfo> = { id: 0 }
): Data_MapInfo => {
  return {
    name: info.name ?? makeMapName(info.id),
    id: info.id,
    expanded: info.expanded ?? false,
    order: info.order ?? 0,
    parentId: info.parentId ?? 0,
    scrollX: info.scrollX ?? 0,
    scrollY: info.scrollY ?? 0,
  };
};
