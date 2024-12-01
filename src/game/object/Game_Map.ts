//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage

import type { Data_CommonEvent, Data_Tileset } from "../../schema";
import type { Game_CommonEvent } from "./Game_CommonEvent";
import type { Game_Event } from "./Game_Event";
import type { Game_Interpreter } from "./Game_Interpreter";
import type { Game_Vehicle } from "./Game_Vehicle";
import type { Direction8 } from "./types/interface/character";

// determination functions.
export declare class Game_Map {
  _interpreter: Game_Interpreter;
  _mapId: number;
  _tilesetId: number;
  _events: Game_Event[];
  _commonEvents: Game_CommonEvent[];
  _vehicles: Game_Vehicle[];
  _displayX: number;
  _displayY: number;
  _nameDisplay: boolean;
  _scrollDirection: number;
  _scrollRest: number;
  _scrollSpeed: number;
  _parallaxName: string;
  _parallaxZero: boolean;
  _parallaxLoopX: boolean;
  _parallaxLoopY: boolean;
  _parallaxSx: number;
  _parallaxSy: number;
  _parallaxX: number;
  _parallaxY: number;
  _battleback1Name: null | string;
  _battleback2Name: null;
  _needsRefresh: boolean;
  _tileEvents: any;
  constructor();
  initialize(): void;
  setup(mapId: number): void;
  isEventRunning(): boolean;
  tileWidth(): number;
  tileHeight(): number;
  bushDepth(): number;
  mapId(): number;
  tilesetId(): number;
  displayX(): number;
  displayY(): number;
  parallaxName(): string;
  battleback1Name(): string;
  battleback2Name(): string;
  requestRefresh(): void;
  isNameDisplayEnabled(): boolean;
  disableNameDisplay(): void;
  enableNameDisplay(): void;
  createVehicles(): void;
  refereshVehicles(): void;
  vehicles(): void;
  vehicle(type: string | number): Game_Vehicle | null;
  boat(): Game_Vehicle;
  ship(): Game_Vehicle;
  airship(): Game_Vehicle;
  setupEvents(): void;
  events(): Game_Event[];
  event(eventId: number): Game_Event | undefined;
  eraseEvent(eventId: number): void;
  autorunCommonEvents(): Data_CommonEvent[];
  parallelCommonEvents(): Data_CommonEvent[];
  setupScroll(): void;
  setupParallax(): void;
  setupBattleback(): void;
  setDisplayPos(x: number, y: number): void;
  parallaxOx(): number;
  parallaxOy(): number;
  tileset(): Data_Tileset;
  tilesetFlags(): [];
  displayName(): string;
  width(): number;
  height(): number;
  data(): [];
  isLoopHorizontal(): boolean;
  isLoopVertical(): boolean;
  isDashDisabled(): boolean;
  encounterList(): [];
  encounterStep(): number;
  isOverworld(): boolean;
  screenTileX(): number;
  screenTileY(): number;
  adjustX(x: number): number;
  adjustY(y: number): number;
  roundX(x: number): number;
  roundY(y: number): number;
  xWithDirection(x: number, d: Direction8): number;
  yWithDirection(y: number, d: Direction8): number;
  roundXWithDirection(x: number, d: Direction8): number;
  roundYWithDirection(y: number, d: Direction8): number;
  deltaX(x1: number, x2: number): number;
  deltaY(y1: number, y2: number): number;
  distance(x1: number, y1: number, x2: number, y2: number): number;
  canvasToMapX(x: number): number;
  canvasToMapY(y: number): number;
  autoplay(): void;
  refreshIfNeeded(): void;
  refresh(): void;
  refreshTileEvents(): void;
  eventsXy(x: number, y: number): Game_Event[];
  eventsXyNt(x: any, y: any): Game_Event[];
  tileEventsXy(x: any, y: any): Game_Event[];
  eventIdXy(x: number, y: number): number;
  scrollDown(distance: number): void;
  scrollLeft(distance: number): void;
  scrollRight(distance: number): void;
  scrollUp(distance: number): void;
  isValid(x: number, y: number): boolean;
  checkPassage(x: any, y: any, bit: number): boolean;
  tileId(x: number, y: number, z: number): number;
  layeredTiles(x: any, y: any): [];
  allTiles(x: any, y: any): [];
  autotileType(x: any, y: any, z: any): number;
  isPassable(x: any, y: any, d: number): boolean;
  isBoatPassable(x: any, y: any): boolean;
  isShipPassable(x: any, y: any): boolean;
  isAirshipLandOk(x: any, y: any): boolean;
  checkLayeredTilesFlags(x: any, y: any, bit: number): boolean;
  isLadder(x: any, y: any): boolean;
  isBush(x: any, y: any): boolean;
  isCounter(x: any, y: any): boolean;
  isDamageFloor(x: any, y: any): boolean;
  terrainTag(x: any, y: any): number;
  regionId(x: any, y: any): number;
  startScroll(direction: number, distance: number, speed: number): void;
  isScrolling(): boolean;
  update(sceneActive: any): void;
  updateScroll(): void;
  scrollDistance(): number;
  doScroll(direction: number, distance: number): void;
  updateEvents(): void;
  updateVehicles(): void;
  updateParallax(): void;
  changeTileset(tilesetId: number): void;
  changeBattleback(battleback1Name: null, battleback2Name: null): void;
  changeParallax(
    name: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
  ): void;
  updateInterpreter(): void;
  unlockEvent(eventId: number): void;
  setupStartingEvent(): boolean;
  setupTestEvent(): boolean;
  setupStartingMapEvent(): boolean;
  setupAutorunCommonEvent(): boolean;
  isAnyEventStarting(): boolean;
}
