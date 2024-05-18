import {
  $dataSystem,
  Graphics,
  AudioManager,
  $dataMap,
} from "@niokasgami/rpg-maker-mz-typescript";

//-----------------------------------------------------------------------------
// Game_System
//
// The game object class for the system data.
export class Game_System {
  _saveEnabled: boolean;
  _menuEnabled: boolean;
  _encounterEnabled: boolean;
  _formationEnabled: boolean;
  _battleCount: number;
  _winCount: number;
  _escapeCount: number;
  _saveCount: number;
  _versionId: number;
  _savefileId: number;
  _framesOnSave: number;
  _bgmOnSave: null;
  _bgsOnSave: null;
  _windowTone: null;
  _battleBgm: null;
  _victoryMe: null;
  _defeatMe: null;
  _savedBgm: null;
  _walkingBgm: null;
  constructor() {}
  initialize() {
    this._saveEnabled = true;
    this._menuEnabled = true;
    this._encounterEnabled = true;
    this._formationEnabled = true;
    this._battleCount = 0;
    this._winCount = 0;
    this._escapeCount = 0;
    this._saveCount = 0;
    this._versionId = 0;
    this._savefileId = 0;
    this._framesOnSave = 0;
    this._bgmOnSave = null;
    this._bgsOnSave = null;
    this._windowTone = null;
    this._battleBgm = null;
    this._victoryMe = null;
    this._defeatMe = null;
    this._savedBgm = null;
    this._walkingBgm = null;
  }
  isJapanese() {
    return $dataSystem.locale.match(/^ja/);
  }
  isChinese() {
    return $dataSystem.locale.match(/^zh/);
  }
  isKorean() {
    return $dataSystem.locale.match(/^ko/);
  }
  isCJK() {
    return $dataSystem.locale.match(/^(ja|zh|ko)/);
  }
  isRussian() {
    return $dataSystem.locale.match(/^ru/);
  }
  isSideView() {
    return $dataSystem.optSideView;
  }
  isAutosaveEnabled() {
    return $dataSystem.optAutosave;
  }
  isSaveEnabled() {
    return this._saveEnabled;
  }
  disableSave() {
    this._saveEnabled = false;
  }
  enableSave() {
    this._saveEnabled = true;
  }
  isMenuEnabled() {
    return this._menuEnabled;
  }
  disableMenu() {
    this._menuEnabled = false;
  }
  enableMenu() {
    this._menuEnabled = true;
  }
  isEncounterEnabled() {
    return this._encounterEnabled;
  }
  disableEncounter() {
    this._encounterEnabled = false;
  }
  enableEncounter() {
    this._encounterEnabled = true;
  }
  isFormationEnabled() {
    return this._formationEnabled;
  }
  disableFormation() {
    this._formationEnabled = false;
  }
  enableFormation() {
    this._formationEnabled = true;
  }
  battleCount() {
    return this._battleCount;
  }
  winCount() {
    return this._winCount;
  }
  escapeCount() {
    return this._escapeCount;
  }
  saveCount() {
    return this._saveCount;
  }
  versionId() {
    return this._versionId;
  }
  savefileId() {
    return this._savefileId || 0;
  }
  setSavefileId(savefileId) {
    this._savefileId = savefileId;
  }
  windowTone() {
    return this._windowTone || $dataSystem.windowTone;
  }
  setWindowTone(value) {
    this._windowTone = value;
  }
  battleBgm() {
    return this._battleBgm || $dataSystem.battleBgm;
  }
  setBattleBgm(value) {
    this._battleBgm = value;
  }
  victoryMe() {
    return this._victoryMe || $dataSystem.victoryMe;
  }
  setVictoryMe(value) {
    this._victoryMe = value;
  }
  defeatMe() {
    return this._defeatMe || $dataSystem.defeatMe;
  }
  setDefeatMe(value) {
    this._defeatMe = value;
  }
  onBattleStart() {
    this._battleCount++;
  }
  onBattleWin() {
    this._winCount++;
  }
  onBattleEscape() {
    this._escapeCount++;
  }
  onBeforeSave() {
    this._saveCount++;
    this._versionId = $dataSystem.versionId;
    this._framesOnSave = Graphics.frameCount;
    this._bgmOnSave = AudioManager.saveBgm();
    this._bgsOnSave = AudioManager.saveBgs();
  }
  onAfterLoad() {
    Graphics.frameCount = this._framesOnSave;
    AudioManager.playBgm(this._bgmOnSave);
    AudioManager.playBgs(this._bgsOnSave);
  }
  playtime() {
    return Math.floor(Graphics.frameCount / 60);
  }
  playtimeText() {
    const hour = Math.floor(this.playtime() / 60 / 60);
    const min = Math.floor(this.playtime() / 60) % 60;
    const sec = this.playtime() % 60;
    return hour.padZero(2) + ":" + min.padZero(2) + ":" + sec.padZero(2);
  }
  saveBgm() {
    this._savedBgm = AudioManager.saveBgm();
  }
  replayBgm() {
    if (this._savedBgm) {
      AudioManager.replayBgm(this._savedBgm);
    }
  }
  saveWalkingBgm() {
    this._walkingBgm = AudioManager.saveBgm();
  }
  replayWalkingBgm() {
    if (this._walkingBgm) {
      AudioManager.playBgm(this._walkingBgm);
    }
  }
  saveWalkingBgm2() {
    this._walkingBgm = $dataMap.bgm;
  }
  mainFontFace() {
    return "rmmz-mainfont, " + $dataSystem.advanced.fallbackFonts;
  }
  numberFontFace() {
    return "rmmz-numberfont, " + this.mainFontFace();
  }
  mainFontSize() {
    return $dataSystem.advanced.fontSize;
  }
  windowPadding() {
    return 12;
  }
  windowOpacity() {
    return $dataSystem.advanced.windowOpacity;
  }
}
