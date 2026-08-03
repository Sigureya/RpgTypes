import { Direction8 } from '../../rmmz';
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
