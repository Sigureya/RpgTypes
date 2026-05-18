export interface Rmmz_Scene_Boot {
  create(): void;
  isReady(): boolean;
  isPlayerDataLoaded(): boolean;
  start(): void;
  onDatabaseLoaded(): void;
  setEncryptionInfo(): void;
  loadSystemImages(): void;
  loadPlayerData(): void;
  loadGameFonts(): void;
  startNormalGame(): void;
  resizeScreen(): void;
  adjustBoxSize(): void;
  adjustWindow(): void;
  screenScale(): number;
  updateDocumentTitle(): void;
  checkPlayerLocation(): void;
}

export interface Rmmv_Scene_Boot {
  create(): void;
  isReady(): boolean;
  isGameFontLoaded(): boolean;
  start(): void;
  loadSystemWindowImage(): void;
  updateDocumentTitle(): void;
  checkPlayerLocation(): void;
}
