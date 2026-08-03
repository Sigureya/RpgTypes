import { Data_MapTiles } from './types';
export declare const isValidMapPosition: (map: Data_MapTiles, x: number, y: number) => boolean;
export declare const mapTileId: (map: Data_MapTiles, x: number, y: number, z: number) => number;
export declare const mapRegionId: (map: Data_MapTiles, x: number, y: number) => number;
export declare const mapLayeredTiles: (map: Data_MapTiles, x: number, y: number) => number[];
export declare const mapAutotileType: (map: Data_MapTiles, x: number, y: number, z: number) => number;
