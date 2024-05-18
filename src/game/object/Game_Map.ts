import {
  $dataCommonEvents,
  $dataSystem,
  Graphics,
  AudioManager,
  $dataMap,
  $gameSystem,
  $gameSwitches,
  ImageManager,
  $dataTilesets,
  $testEvent,
} from "@niokasgami/rpg-maker-mz-typescript";
import { Game_Interpreter } from "./Game_Interpreter";

//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.
export class Game_Map {
  _interpreter: Game_Interpreter;
  _mapId: number;
  _tilesetId: number;
  _events: never[];
  _commonEvents: never[];
  _vehicles: never[];
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
  _battleback1Name: null;
  _battleback2Name: null;
  _needsRefresh: boolean;
  _tileEvents: any;
  constructor() {}
  initialize() {
    this._interpreter = new Game_Interpreter();
    this._mapId = 0;
    this._tilesetId = 0;
    this._events = [];
    this._commonEvents = [];
    this._vehicles = [];
    this._displayX = 0;
    this._displayY = 0;
    this._nameDisplay = true;
    this._scrollDirection = 2;
    this._scrollRest = 0;
    this._scrollSpeed = 4;
    this._parallaxName = "";
    this._parallaxZero = false;
    this._parallaxLoopX = false;
    this._parallaxLoopY = false;
    this._parallaxSx = 0;
    this._parallaxSy = 0;
    this._parallaxX = 0;
    this._parallaxY = 0;
    this._battleback1Name = null;
    this._battleback2Name = null;
    this.createVehicles();
  }
  setup(mapId: number) {
    if (!$dataMap) {
      throw new Error("The map data is not available");
    }
    this._mapId = mapId;
    this._tilesetId = $dataMap.tilesetId;
    this._displayX = 0;
    this._displayY = 0;
    this.refereshVehicles();
    this.setupEvents();
    this.setupScroll();
    this.setupParallax();
    this.setupBattleback();
    this._needsRefresh = false;
  }
  isEventRunning() {
    return this._interpreter.isRunning() || this.isAnyEventStarting();
  }
  tileWidth(): number {
    if ("tileSize" in $dataSystem) {
    } else {
    }
    return 48;
  }
  tileHeight() {
    return this.tileWidth();
  }
  bushDepth() {
    return this.tileHeight() / 4;
  }
  mapId() {
    return this._mapId;
  }
  tilesetId() {
    return this._tilesetId;
  }
  displayX() {
    return this._displayX;
  }
  displayY() {
    return this._displayY;
  }
  parallaxName() {
    return this._parallaxName;
  }
  battleback1Name() {
    return this._battleback1Name;
  }
  battleback2Name() {
    return this._battleback2Name;
  }
  requestRefresh() {
    this._needsRefresh = true;
  }
  isNameDisplayEnabled() {
    return this._nameDisplay;
  }
  disableNameDisplay() {
    this._nameDisplay = false;
  }
  enableNameDisplay() {
    this._nameDisplay = true;
  }
  createVehicles() {
    this._vehicles = [new Game_Vehicle("boat")];
  }
  refereshVehicles() {
    for (const vehicle of this._vehicles) {
      vehicle.refresh();
    }
  }
  vehicles() {
    return this._vehicles;
  }
  vehicle(type: string | number) {
    if (type === 0 || type === "boat") {
      return this.boat();
    } else if (type === 1 || type === "ship") {
      return this.ship();
    } else if (type === 2 || type === "airship") {
      return this.airship();
    } else {
      return null;
    }
  }
  boat() {
    return this._vehicles[0];
  }
  ship() {
    return this._vehicles[1];
  }
  airship() {
    return this._vehicles[2];
  }
  setupEvents() {
    this._events = [];
    this._commonEvents = [];
    for (const event of $dataMap.events.filter((event: any) => !!event)) {
      this._events[event.id] = new Game_Event(this._mapId, event.id);
    }
    for (const commonEvent of this.parallelCommonEvents()) {
      this._commonEvents.push(new Game_CommonEvent(commonEvent.id));
    }
    this.refreshTileEvents();
  }
  events() {
    return this._events.filter((event) => !!event);
  }
  event(eventId: string | number) {
    return this._events[eventId];
  }
  eraseEvent(eventId: string | number) {
    this._events[eventId].erase();
  }
  autorunCommonEvents() {
    return $dataCommonEvents.filter(
      (commonEvent) => commonEvent && commonEvent.trigger === 1
    );
  }
  parallelCommonEvents() {
    return $dataCommonEvents.filter(
      (commonEvent) => commonEvent && commonEvent.trigger === 2
    );
  }
  setupScroll() {
    this._scrollDirection = 2;
    this._scrollRest = 0;
    this._scrollSpeed = 4;
  }
  setupParallax() {
    this._parallaxName = $dataMap.parallaxName || "";
    this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
    this._parallaxLoopX = $dataMap.parallaxLoopX;
    this._parallaxLoopY = $dataMap.parallaxLoopY;
    this._parallaxSx = $dataMap.parallaxSx;
    this._parallaxSy = $dataMap.parallaxSy;
    this._parallaxX = 0;
    this._parallaxY = 0;
  }
  setupBattleback() {
    if ($dataMap.specifyBattleback) {
      this._battleback1Name = $dataMap.battleback1Name;
      this._battleback2Name = $dataMap.battleback2Name;
    } else {
      this._battleback1Name = null;
      this._battleback2Name = null;
    }
  }
  setDisplayPos(x: number, y: number) {
    if (this.isLoopHorizontal()) {
      this._displayX = x.mod(this.width());
      this._parallaxX = x;
    } else {
      const endX = this.width() - this.screenTileX();
      this._displayX = endX < 0 ? endX / 2 : x.clamp(0, endX);
      this._parallaxX = this._displayX;
    }
    if (this.isLoopVertical()) {
      this._displayY = y.mod(this.height());
      this._parallaxY = y;
    } else {
      const endY = this.height() - this.screenTileY();
      this._displayY = endY < 0 ? endY / 2 : y.clamp(0, endY);
      this._parallaxY = this._displayY;
    }
  }
  parallaxOx() {
    if (this._parallaxZero) {
      return this._parallaxX * this.tileWidth();
    } else if (this._parallaxLoopX) {
      return (this._parallaxX * this.tileWidth()) / 2;
    } else {
      return 0;
    }
  }
  parallaxOy() {
    if (this._parallaxZero) {
      return this._parallaxY * this.tileHeight();
    } else if (this._parallaxLoopY) {
      return (this._parallaxY * this.tileHeight()) / 2;
    } else {
      return 0;
    }
  }
  tileset() {
    return $dataTilesets[this._tilesetId];
  }
  tilesetFlags() {
    const tileset = this.tileset();
    if (tileset) {
      return tileset.flags;
    } else {
      return [];
    }
  }
  displayName() {
    return $dataMap.displayName;
  }
  width() {
    return $dataMap.width;
  }
  height() {
    return $dataMap.height;
  }
  data() {
    return $dataMap.data;
  }
  isLoopHorizontal() {
    return $dataMap.scrollType === 2 || $dataMap.scrollType === 3;
  }
  isLoopVertical() {
    return $dataMap.scrollType === 1 || $dataMap.scrollType === 3;
  }
  isDashDisabled() {
    return $dataMap.disableDashing;
  }
  encounterList() {
    return $dataMap.encounterList;
  }
  encounterStep() {
    return $dataMap.encounterStep;
  }
  isOverworld() {
    return this.tileset() && this.tileset().mode === 0;
  }
  screenTileX() {
    return Math.round((Graphics.width / this.tileWidth()) * 16) / 16;
  }
  screenTileY() {
    return Math.round((Graphics.height / this.tileHeight()) * 16) / 16;
  }
  adjustX(x: number) {
    if (
      this.isLoopHorizontal() &&
      x < this._displayX - (this.width() - this.screenTileX()) / 2
    ) {
      return x - this._displayX + $dataMap.width;
    } else {
      return x - this._displayX;
    }
  }
  adjustY(y: number) {
    if (
      this.isLoopVertical() &&
      y < this._displayY - (this.height() - this.screenTileY()) / 2
    ) {
      return y - this._displayY + $dataMap.height;
    } else {
      return y - this._displayY;
    }
  }
  roundX(x: number) {
    return this.isLoopHorizontal() ? x.mod(this.width()) : x;
  }
  roundY(y: number) {
    return this.isLoopVertical() ? y.mod(this.height()) : y;
  }
  xWithDirection(x: string | number, d: number) {
    return x + (d === 6 ? 1 : d === 4 ? -1 : 0);
  }
  yWithDirection(y: string | number, d: number) {
    return y + (d === 2 ? 1 : d === 8 ? -1 : 0);
  }
  roundXWithDirection(x: string | number, d: number) {
    return this.roundX(x + (d === 6 ? 1 : d === 4 ? -1 : 0));
  }
  roundYWithDirection(y: string | number, d: number) {
    return this.roundY(y + (d === 2 ? 1 : d === 8 ? -1 : 0));
  }
  deltaX(x1: number, x2: number) {
    let result = x1 - x2;
    if (this.isLoopHorizontal() && Math.abs(result) > this.width() / 2) {
      if (result < 0) {
        result += this.width();
      } else {
        result -= this.width();
      }
    }
    return result;
  }
  deltaY(y1: number, y2: number) {
    let result = y1 - y2;
    if (this.isLoopVertical() && Math.abs(result) > this.height() / 2) {
      if (result < 0) {
        result += this.height();
      } else {
        result -= this.height();
      }
    }
    return result;
  }
  distance(x1: any, y1: any, x2: any, y2: any) {
    return Math.abs(this.deltaX(x1, x2)) + Math.abs(this.deltaY(y1, y2));
  }
  canvasToMapX(x: number) {
    const tileWidth = this.tileWidth();
    const originX = this._displayX * tileWidth;
    const mapX = Math.floor((originX + x) / tileWidth);
    return this.roundX(mapX);
  }
  canvasToMapY(y: number) {
    const tileHeight = this.tileHeight();
    const originY = this._displayY * tileHeight;
    const mapY = Math.floor((originY + y) / tileHeight);
    return this.roundY(mapY);
  }
  autoplay() {
    if ($dataMap.autoplayBgm) {
      if ($gamePlayer.isInVehicle()) {
        $gameSystem.saveWalkingBgm2();
      } else {
        AudioManager.playBgm($dataMap.bgm);
      }
    }
    if ($dataMap.autoplayBgs) {
      AudioManager.playBgs($dataMap.bgs);
    }
  }
  refreshIfNeeded() {
    if (this._needsRefresh) {
      this.refresh();
    }
  }
  refresh() {
    for (const event of this.events()) {
      event.refresh();
    }
    for (const commonEvent of this._commonEvents) {
      commonEvent.refresh();
    }
    this.refreshTileEvents();
    this._needsRefresh = false;
  }
  refreshTileEvents() {
    this._tileEvents = this.events().filter((event) => event.isTile());
  }
  eventsXy(x: any, y: any) {
    return this.events().filter((event) => event.pos(x, y));
  }
  eventsXyNt(x: any, y: any) {
    return this.events().filter((event) => event.posNt(x, y));
  }
  tileEventsXy(x: any, y: any) {
    return this._tileEvents.filter(
      (event: { posNt: (arg0: any, arg1: any) => any }) => event.posNt(x, y)
    );
  }
  eventIdXy(x: any, y: any) {
    const list = this.eventsXy(x, y);
    return list.length === 0 ? 0 : list[0].eventId();
  }
  scrollDown(distance: number) {
    if (this.isLoopVertical()) {
      this._displayY += distance;
      this._displayY %= $dataMap.height;
      if (this._parallaxLoopY) {
        this._parallaxY += distance;
      }
    } else if (this.height() >= this.screenTileY()) {
      const lastY = this._displayY;
      this._displayY = Math.min(
        this._displayY + distance,
        this.height() - this.screenTileY()
      );
      this._parallaxY += this._displayY - lastY;
    }
  }
  scrollLeft(distance: number) {
    if (this.isLoopHorizontal()) {
      this._displayX += $dataMap.width - distance;
      this._displayX %= $dataMap.width;
      if (this._parallaxLoopX) {
        this._parallaxX -= distance;
      }
    } else if (this.width() >= this.screenTileX()) {
      const lastX = this._displayX;
      this._displayX = Math.max(this._displayX - distance, 0);
      this._parallaxX += this._displayX - lastX;
    }
  }
  scrollRight(distance: number) {
    if (this.isLoopHorizontal()) {
      this._displayX += distance;
      this._displayX %= $dataMap.width;
      if (this._parallaxLoopX) {
        this._parallaxX += distance;
      }
    } else if (this.width() >= this.screenTileX()) {
      const lastX = this._displayX;
      this._displayX = Math.min(
        this._displayX + distance,
        this.width() - this.screenTileX()
      );
      this._parallaxX += this._displayX - lastX;
    }
  }
  scrollUp(distance: number) {
    if (this.isLoopVertical()) {
      this._displayY += $dataMap.height - distance;
      this._displayY %= $dataMap.height;
      if (this._parallaxLoopY) {
        this._parallaxY -= distance;
      }
    } else if (this.height() >= this.screenTileY()) {
      const lastY = this._displayY;
      this._displayY = Math.max(this._displayY - distance, 0);
      this._parallaxY += this._displayY - lastY;
    }
  }
  isValid(x: number, y: number) {
    return x >= 0 && x < this.width() && y >= 0 && y < this.height();
  }
  checkPassage(x: any, y: any, bit: number) {
    const flags = this.tilesetFlags();
    const tiles = this.allTiles(x, y);
    for (const tile of tiles) {
      const flag = flags[tile];
      if ((flag & 16) !== 0) {
        // [*] No effect on passage
        continue;
      }
      if ((flag & bit) === 0) {
        // [o] Passable
        return true;
      }
      if ((flag & bit) === bit) {
        // [x] Impassable
        return false;
      }
    }
    return false;
  }
  tileId(x: number, y: number, z: number) {
    const width = $dataMap.width;
    const height = $dataMap.height;
    return $dataMap.data[(z * height + y) * width + x] || 0;
  }
  layeredTiles(x: any, y: any) {
    const tiles = [];
    for (let i = 0; i < 4; i++) {
      tiles.push(this.tileId(x, y, 3 - i));
    }
    return tiles;
  }
  allTiles(x: any, y: any) {
    const tiles = this.tileEventsXy(x, y).map((event: { tileId: () => any }) =>
      event.tileId()
    );
    return tiles.concat(this.layeredTiles(x, y));
  }
  autotileType(x: any, y: any, z: any) {
    const tileId = this.tileId(x, y, z);
    return tileId >= 2048 ? Math.floor((tileId - 2048) / 48) : -1;
  }
  isPassable(x: any, y: any, d: number) {
    return this.checkPassage(x, y, (1 << (d / 2 - 1)) & 15);
  }
  isBoatPassable(x: any, y: any) {
    return this.checkPassage(x, y, 512);
  }
  isShipPassable(x: any, y: any) {
    return this.checkPassage(x, y, 1024);
  }
  isAirshipLandOk(x: any, y: any) {
    return this.checkPassage(x, y, 2048) && this.checkPassage(x, y, 15);
  }
  checkLayeredTilesFlags(x: any, y: any, bit: number) {
    const flags = this.tilesetFlags();
    return this.layeredTiles(x, y).some(
      (tileId) => (flags[tileId] & bit) !== 0
    );
  }
  isLadder(x: any, y: any) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 32);
  }
  isBush(x: any, y: any) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 64);
  }
  isCounter(x: any, y: any) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 128);
  }
  isDamageFloor(x: any, y: any) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 256);
  }
  terrainTag(x: any, y: any) {
    if (this.isValid(x, y)) {
      const flags = this.tilesetFlags();
      const tiles = this.layeredTiles(x, y);
      for (const tile of tiles) {
        const tag = flags[tile] >> 12;
        if (tag > 0) {
          return tag;
        }
      }
    }
    return 0;
  }
  regionId(x: any, y: any) {
    return this.isValid(x, y) ? this.tileId(x, y, 5) : 0;
  }
  startScroll(direction: number, distance: number, speed: number) {
    this._scrollDirection = direction;
    this._scrollRest = distance;
    this._scrollSpeed = speed;
  }
  isScrolling() {
    return this._scrollRest > 0;
  }
  update(sceneActive: any) {
    this.refreshIfNeeded();
    if (sceneActive) {
      this.updateInterpreter();
    }
    this.updateScroll();
    this.updateEvents();
    this.updateVehicles();
    this.updateParallax();
  }
  updateScroll() {
    if (this.isScrolling()) {
      const lastX = this._displayX;
      const lastY = this._displayY;
      this.doScroll(this._scrollDirection, this.scrollDistance());
      if (this._displayX === lastX && this._displayY === lastY) {
        this._scrollRest = 0;
      } else {
        this._scrollRest -= this.scrollDistance();
      }
    }
  }
  scrollDistance() {
    return Math.pow(2, this._scrollSpeed) / 256;
  }
  doScroll(direction: number, distance: number) {
    switch (direction) {
      case 2:
        this.scrollDown(distance);
        break;
      case 4:
        this.scrollLeft(distance);
        break;
      case 6:
        this.scrollRight(distance);
        break;
      case 8:
        this.scrollUp(distance);
        break;
    }
  }
  updateEvents() {
    for (const event of this.events()) {
      event.update();
    }
    for (const commonEvent of this._commonEvents) {
      commonEvent.update();
    }
  }
  updateVehicles() {
    for (const vehicle of this._vehicles) {
      vehicle.update();
    }
  }
  updateParallax() {
    if (this._parallaxLoopX) {
      this._parallaxX += this._parallaxSx / this.tileWidth() / 2;
    }
    if (this._parallaxLoopY) {
      this._parallaxY += this._parallaxSy / this.tileHeight() / 2;
    }
  }
  changeTileset(tilesetId: number) {
    this._tilesetId = tilesetId;
    this.refresh();
  }
  changeBattleback(battleback1Name: null, battleback2Name: null) {
    this._battleback1Name = battleback1Name;
    this._battleback2Name = battleback2Name;
  }
  changeParallax(
    name: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
  ) {
    this._parallaxName = name;
    this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
    if (this._parallaxLoopX && !loopX) {
      this._parallaxX = 0;
    }
    if (this._parallaxLoopY && !loopY) {
      this._parallaxY = 0;
    }
    this._parallaxLoopX = loopX;
    this._parallaxLoopY = loopY;
    this._parallaxSx = sx;
    this._parallaxSy = sy;
  }
  updateInterpreter() {
    for (;;) {
      this._interpreter.update();
      if (this._interpreter.isRunning()) {
        return;
      }
      if (this._interpreter.eventId() > 0) {
        this.unlockEvent(this._interpreter.eventId());
        this._interpreter.clear();
      }
      if (!this.setupStartingEvent()) {
        return;
      }
    }
  }
  unlockEvent(eventId: number) {
    if (this._events[eventId]) {
      this._events[eventId].unlock();
    }
  }
  setupStartingEvent() {
    this.refreshIfNeeded();
    if (this._interpreter.setupReservedCommonEvent()) {
      return true;
    }
    if (this.setupTestEvent()) {
      return true;
    }
    if (this.setupStartingMapEvent()) {
      return true;
    }
    if (this.setupAutorunCommonEvent()) {
      return true;
    }
    return false;
  }
  setupTestEvent() {
    if (window.$testEvent) {
      this._interpreter.setup($testEvent, 0);
      $testEvent = null;
      return true;
    }
    return false;
  }
  setupStartingMapEvent() {
    for (const event of this.events()) {
      if (event.isStarting()) {
        event.clearStartingFlag();
        this._interpreter.setup(event.list(), event.eventId());
        return true;
      }
    }
    return false;
  }
  setupAutorunCommonEvent() {
    for (const commonEvent of this.autorunCommonEvents()) {
      if ($gameSwitches.value(commonEvent.switchId)) {
        this._interpreter.setup(commonEvent.list);
        return true;
      }
    }
    return false;
  }
  isAnyEventStarting() {
    return this.events().some((event) => event.isStarting());
  }
}
