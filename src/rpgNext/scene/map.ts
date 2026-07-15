import type { Direction8 } from "@RpgTypes/rmmz";

export interface MapEntryInfo {
  isLoad: boolean;
  isTransfer: boolean;
  isBattleAfter: boolean;
  from: {
    mapId: number;
    x: number;
    y: number;
    direction: Direction8;
  };
}
