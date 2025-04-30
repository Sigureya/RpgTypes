import type { Data_Map } from "./map";

export const makeMapData = (map: Partial<Data_Map> = {}): Data_Map => {
  return {
    autoplayBgm: map.autoplayBgm ?? false,
    autoplayBgs: map.autoplayBgs ?? false,
    battleback1Name: map.battleback1Name ?? "",
    battleback2Name: map.battleback2Name ?? "",
    bgm: map.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
    bgs: map.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
    disableDashing: map.disableDashing ?? false,
    displayName: map.displayName ?? "",
    encounterList: map.encounterList ?? [],
    events: map.events ?? [],
    height: map.height ?? 0,
    note: map.note ?? "",
    parallaxLoopX: map.parallaxLoopX ?? false,
    parallaxLoopY: map.parallaxLoopY ?? false,
    parallaxName: map.parallaxName ?? "",
    parallaxShow: map.parallaxShow ?? false,
    parallaxSx: map.parallaxSx ?? 0,
    parallaxSy: map.parallaxSy ?? 0,
    width: map.width ?? 0,
    x: map.x ?? 0,
    y: map.y ?? 0,
    data: map.data ?? [],
  };
};
