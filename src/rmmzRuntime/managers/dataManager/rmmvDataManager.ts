export interface Rmmv_DataManager {
  _globalId: string;
  _lastAccessedId: number;
  _errorUrl: string | null;
  _databaseFiles: Array<{ name: string; src: string }>;

  loadDatabase(): void;
  loadDataFile(name: string, src: string): void;
  isDatabaseLoaded(): boolean;

  loadMapData(mapId: number): void;
  makeEmptyMap(): void;
  isMapLoaded(): boolean;

  onLoad(object: object): void;
  extractMetadata(data: object): void;
  checkError(): void;

  isBattleTest(): boolean;
  isEventTest(): boolean;

  isSkill(item: object): boolean;
  isItem(item: object): boolean;
  isWeapon(item: object): boolean;
  isArmor(item: object): boolean;

  createGameObjects(): void;
  setupNewGame(): void;
  setupBattleTest(): void;
  setupEventTest(): void;

  loadGlobalInfo(): unknown[];
  saveGlobalInfo(info: unknown[]): void;

  isThisGameFile(savefileId: number): boolean;
  isAnySavefileExists(): boolean;
  latestSavefileId(): number;
  maxSavefiles(): number;
  lastAccessedSavefileId(): number;

  loadAllSavefileImages(): void;
  loadSavefileImages(info: unknown): void;

  saveGame(savefileId: number): boolean;
  loadGame(savefileId: number): boolean;
  loadSavefileInfo(savefileId: number): unknown;
  saveGameWithoutRescue(savefileId: number): boolean;
  loadGameWithoutRescue(savefileId: number): boolean;
  selectSavefileForNewGame(): void;

  makeSavefileInfo(): unknown;
  makeSaveContents(): unknown;
  extractSaveContents(contents: unknown): void;
}
