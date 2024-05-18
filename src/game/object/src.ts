//=============================================================================
// rmmz_objects.js v1.7.0
//=============================================================================

//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.
import "@niokasgami/rpg-maker-mz-typescript";
import {
  Utils,
  $gameParty,
  $dataCommonEvents,
  $dataAnimations,
  $dataSystem,
  Graphics,
  AudioManager,
  $dataMap,
  BattleManager,
  $dataSkills,
  $dataItems,
  $dataWeapons,
  $dataArmors,
  DataManager,
  $gameTroop,
  $gameVariables,
  $gameTemp,
  $dataStates,
  SoundManager,
  $dataActors,
  $dataClasses,
  TextManager,
  $gameMessage,
  $gameSystem,
  $gameScreen,
  $dataEnemies,
  $gameSwitches,
  $dataTroops,
  ImageManager,
  $dataTilesets,
  $testEvent,
  Input,
  ConfigManager,
  TouchInput,
  $gameSelfSwitches,
  SceneManager,
  Video,
  $gameTimer,
  Point,
  Scene_Menu,
  Scene_Save,
  Scene_Title,
  PluginManager,
} from "@niokasgami/rpg-maker-mz-typescript";
import { Window_MenuCommand } from "../window";
import { Game_Unit } from "./Game_Unit";
import { Game_Action } from "./Game_Action";
class Game_Temp {
  _isPlaytest: any;
  _destinationX: null | number;
  _destinationY: null | number;
  _touchTarget: null;
  _touchState: string;
  _needsBattleRefresh: boolean;
  _lastActionData: number[];
  constructor() {}
  initialize() {
    this._isPlaytest = Utils.isOptionValid("test");
    this._destinationX = null;
    this._destinationY = null;
    this._touchTarget = null;
    this._touchState = "";
    this._needsBattleRefresh = false;
    this._commonEventQueue = [];
    this._animationQueue = [];
    this._balloonQueue = [];
    this._lastActionData = [0, 0, 0, 0, 0, 0];
  }
  isPlaytest() {
    return this._isPlaytest;
  }
  setDestination(x: number, y: number) {
    this._destinationX = x;
    this._destinationY = y;
  }
  clearDestination() {
    this._destinationX = null;
    this._destinationY = null;
  }
  isDestinationValid() {
    return this._destinationX !== null;
  }
  destinationX() {
    return this._destinationX;
  }
  destinationY() {
    return this._destinationY;
  }
  setTouchState(target, state) {
    this._touchTarget = target;
    this._touchState = state;
  }
  clearTouchState() {
    this._touchTarget = null;
    this._touchState = "";
  }
  touchTarget() {
    return this._touchTarget;
  }
  touchState() {
    return this._touchState;
  }
  requestBattleRefresh() {
    if ($gameParty.inBattle()) {
      this._needsBattleRefresh = true;
    }
  }
  clearBattleRefreshRequest() {
    this._needsBattleRefresh = false;
  }
  isBattleRefreshRequested() {
    return this._needsBattleRefresh;
  }
  reserveCommonEvent(commonEventId: number) {
    this._commonEventQueue.push(commonEventId);
  }
  retrieveCommonEvent() {
    return $dataCommonEvents[this._commonEventQueue.shift()];
  }
  clearCommonEventReservation() {
    this._commonEventQueue.length = 0;
  }
  isCommonEventReserved() {
    return this._commonEventQueue.length > 0;
  }
  // prettier-ignore
  requestAnimation(targets, animationId:number, mirror = false) {
      if ($dataAnimations[animationId]) {
        const request = {
          targets: targets,
          animationId: animationId,
          mirror: mirror
        };
        this._animationQueue.push(request);
        for (const target of targets) {
          if (target.startAnimation) {
            target.startAnimation();
          }
        }
      }
    }
  retrieveAnimation() {
    return this._animationQueue.shift();
  }
  requestBalloon(target, balloonId: number) {
    const request = { target: target, balloonId: balloonId };
    this._balloonQueue.push(request);
    if (target.startBalloon) {
      target.startBalloon();
    }
  }
  retrieveBalloon() {
    return this._balloonQueue.shift();
  }
  lastActionData(type) {
    return this._lastActionData[type] || 0;
  }
  setLastActionData(type, value) {
    this._lastActionData[type] = value;
  }
  setLastUsedSkillId(skillID) {
    this.setLastActionData(0, skillID);
  }
  setLastUsedItemId(itemID) {
    this.setLastActionData(1, itemID);
  }
  setLastSubjectActorId(actorID) {
    this.setLastActionData(2, actorID);
  }
  setLastSubjectEnemyIndex(enemyIndex) {
    this.setLastActionData(3, enemyIndex);
  }
  setLastTargetActorId(actorID) {
    this.setLastActionData(4, actorID);
  }
  setLastTargetEnemyIndex(enemyIndex) {
    this.setLastActionData(5, enemyIndex);
  }
}

//-----------------------------------------------------------------------------
// Game_System
//
// The game object class for the system data.

class Game_System {
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

//-----------------------------------------------------------------------------
// Game_Variables
//
// The game object class for variables.

class Game_Variables {
  _data: never[];
  constructor() {}
  initialize() {
    this.clear();
  }
  clear() {
    this._data = [];
  }
  value(variableId) {
    return this._data[variableId] || 0;
  }
  setValue(variableId, value) {
    if (variableId > 0 && variableId < $dataSystem.variables.length) {
      if (typeof value === "number") {
        value = Math.floor(value);
      }
      this._data[variableId] = value;
      this.onChange();
    }
  }
  onChange() {
    $gameMap.requestRefresh();
  }
}

//-----------------------------------------------------------------------------
// Game_SelfSwitches
//
// The game object class for self switches.

class Game_SelfSwitches {
  _data: {};
  constructor() {}
  initialize() {
    this.clear();
  }
  clear() {
    this._data = {};
  }
  value(key) {
    return !!this._data[key];
  }
  setValue(key, value) {
    if (value) {
      this._data[key] = true;
    } else {
      delete this._data[key];
    }
    this.onChange();
  }
  onChange() {
    $gameMap.requestRefresh();
  }
}

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.

class Game_Screen {
  _brightness: any;
  _tone: any;
  _flashColor: any;
  _shake: any;
  _zoomX: any;
  _zoomY: any;
  _zoomScale: any;
  _weatherType: any;
  _weatherPower: any;
  _pictures: any;
  _fadeOutDuration: number;
  _fadeInDuration: number;
  _toneTarget: number[];
  _toneDuration: number;
  _flashDuration: number;
  _shakePower: number;
  _shakeSpeed: number;
  _shakeDuration: number;
  _shakeDirection: number;
  _zoomScaleTarget: number;
  _zoomDuration: number;
  _weatherPowerTarget: number;
  _weatherDuration: number;
  constructor() {}
  initialize() {
    this.clear();
  }
  clear() {
    this.clearFade();
    this.clearTone();
    this.clearFlash();
    this.clearShake();
    this.clearZoom();
    this.clearWeather();
    this.clearPictures();
  }
  onBattleStart() {
    this.clearFade();
    this.clearFlash();
    this.clearShake();
    this.clearZoom();
    this.eraseBattlePictures();
  }
  brightness() {
    return this._brightness;
  }
  tone() {
    return this._tone;
  }
  flashColor() {
    return this._flashColor;
  }
  shake() {
    return this._shake;
  }
  zoomX() {
    return this._zoomX;
  }
  zoomY() {
    return this._zoomY;
  }
  zoomScale() {
    return this._zoomScale;
  }
  weatherType() {
    return this._weatherType;
  }
  weatherPower() {
    return this._weatherPower;
  }
  picture(pictureId) {
    const realPictureId = this.realPictureId(pictureId);
    return this._pictures[realPictureId];
  }
  realPictureId(pictureId) {
    if ($gameParty.inBattle()) {
      return pictureId + this.maxPictures();
    } else {
      return pictureId;
    }
  }
  clearFade() {
    this._brightness = 255;
    this._fadeOutDuration = 0;
    this._fadeInDuration = 0;
  }
  clearTone() {
    this._tone = [0, 0, 0, 0];
    this._toneTarget = [0, 0, 0, 0];
    this._toneDuration = 0;
  }
  clearFlash() {
    this._flashColor = [0, 0, 0, 0];
    this._flashDuration = 0;
  }
  clearShake() {
    this._shakePower = 0;
    this._shakeSpeed = 0;
    this._shakeDuration = 0;
    this._shakeDirection = 1;
    this._shake = 0;
  }
  clearZoom() {
    this._zoomX = 0;
    this._zoomY = 0;
    this._zoomScale = 1;
    this._zoomScaleTarget = 1;
    this._zoomDuration = 0;
  }
  clearWeather() {
    this._weatherType = "none";
    this._weatherPower = 0;
    this._weatherPowerTarget = 0;
    this._weatherDuration = 0;
  }
  clearPictures() {
    this._pictures = [];
  }
  eraseBattlePictures() {
    this._pictures = this._pictures.slice(0, this.maxPictures() + 1);
  }
  maxPictures() {
    return 100;
  }
  startFadeOut(duration) {
    this._fadeOutDuration = duration;
    this._fadeInDuration = 0;
  }
  startFadeIn(duration) {
    this._fadeInDuration = duration;
    this._fadeOutDuration = 0;
  }
  startTint(tone, duration) {
    this._toneTarget = tone.clone();
    this._toneDuration = duration;
    if (this._toneDuration === 0) {
      this._tone = this._toneTarget.clone();
    }
  }
  startFlash(color, duration) {
    this._flashColor = color.clone();
    this._flashDuration = duration;
  }
  startShake(power, speed, duration) {
    this._shakePower = power;
    this._shakeSpeed = speed;
    this._shakeDuration = duration;
  }
  startZoom(x, y, scale, duration) {
    this._zoomX = x;
    this._zoomY = y;
    this._zoomScaleTarget = scale;
    this._zoomDuration = duration;
  }
  setZoom(x, y, scale) {
    this._zoomX = x;
    this._zoomY = y;
    this._zoomScale = scale;
  }
  changeWeather(type, power, duration) {
    if (type !== "none" || duration === 0) {
      this._weatherType = type;
    }
    this._weatherPowerTarget = type === "none" ? 0 : power;
    this._weatherDuration = duration;
    if (duration === 0) {
      this._weatherPower = this._weatherPowerTarget;
    }
  }
  update() {
    this.updateFadeOut();
    this.updateFadeIn();
    this.updateTone();
    this.updateFlash();
    this.updateShake();
    this.updateZoom();
    this.updateWeather();
    this.updatePictures();
  }
  updateFadeOut() {
    if (this._fadeOutDuration > 0) {
      const d = this._fadeOutDuration;
      this._brightness = (this._brightness * (d - 1)) / d;
      this._fadeOutDuration--;
    }
  }
  updateFadeIn() {
    if (this._fadeInDuration > 0) {
      const d = this._fadeInDuration;
      this._brightness = (this._brightness * (d - 1) + 255) / d;
      this._fadeInDuration--;
    }
  }
  updateTone() {
    if (this._toneDuration > 0) {
      const d = this._toneDuration;
      for (let i = 0; i < 4; i++) {
        this._tone[i] = (this._tone[i] * (d - 1) + this._toneTarget[i]) / d;
      }
      this._toneDuration--;
    }
  }
  updateFlash() {
    if (this._flashDuration > 0) {
      const d = this._flashDuration;
      this._flashColor[3] *= (d - 1) / d;
      this._flashDuration--;
    }
  }
  updateShake() {
    if (this._shakeDuration > 0 || this._shake !== 0) {
      const delta =
        (this._shakePower * this._shakeSpeed * this._shakeDirection) / 10;
      if (this._shakeDuration <= 1 && this._shake * (this._shake + delta) < 0) {
        this._shake = 0;
      } else {
        this._shake += delta;
      }
      if (this._shake > this._shakePower * 2) {
        this._shakeDirection = -1;
      }
      if (this._shake < -this._shakePower * 2) {
        this._shakeDirection = 1;
      }
      this._shakeDuration--;
    }
  }
  updateZoom() {
    if (this._zoomDuration > 0) {
      const d = this._zoomDuration;
      const t = this._zoomScaleTarget;
      this._zoomScale = (this._zoomScale * (d - 1) + t) / d;
      this._zoomDuration--;
    }
  }
  updateWeather() {
    if (this._weatherDuration > 0) {
      const d = this._weatherDuration;
      const t = this._weatherPowerTarget;
      this._weatherPower = (this._weatherPower * (d - 1) + t) / d;
      this._weatherDuration--;
      if (this._weatherDuration === 0 && this._weatherPowerTarget === 0) {
        this._weatherType = "none";
      }
    }
  }
  updatePictures() {
    for (const picture of this._pictures) {
      if (picture) {
        picture.update();
      }
    }
  }
  startFlashForDamage() {
    this.startFlash([255, 0, 0, 128], 8);
  }
  // prettier-ignore
  showPicture(pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
      const realPictureId = this.realPictureId(pictureId);
      const picture = new Game_Picture();
      picture.show(name, origin, x, y, scaleX, scaleY, opacity, blendMode);
      this._pictures[realPictureId] = picture;
    }
  // prettier-ignore
  movePicture(pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration,
      easingType) {
      const picture = this.picture(pictureId);
      if (picture) {
        // prettier-ignore
        picture.move(origin, x, y, scaleX, scaleY, opacity, blendMode,
          duration, easingType);
      }
    }
  rotatePicture(pictureId, speed) {
    const picture = this.picture(pictureId);
    if (picture) {
      picture.rotate(speed);
    }
  }
  tintPicture(pictureId, tone, duration) {
    const picture = this.picture(pictureId);
    if (picture) {
      picture.tint(tone, duration);
    }
  }
  erasePicture(pictureId) {
    const realPictureId = this.realPictureId(pictureId);
    this._pictures[realPictureId] = null;
  }
}

//-----------------------------------------------------------------------------
// Game_Picture
//
// The game object class for a picture.

class Game_Picture {
  _name: any;
  _origin: any;
  _x: any;
  _y: any;
  _scaleX: any;
  _scaleY: any;
  _opacity: any;
  _blendMode: any;
  _tone: any;
  _angle: any;
  _targetX: any;
  _targetY: any;
  _targetScaleX: any;
  _targetScaleY: any;
  _targetOpacity: any;
  _duration: number;
  _wholeDuration: number;
  _easingType: number;
  _easingExponent: number;
  _toneTarget: null;
  _toneDuration: number;
  _rotationSpeed: number;
  constructor() {}
  initialize() {
    this.initBasic();
    this.initTarget();
    this.initTone();
    this.initRotation();
  }
  name() {
    return this._name;
  }
  origin() {
    return this._origin;
  }
  x() {
    return this._x;
  }
  y() {
    return this._y;
  }
  scaleX() {
    return this._scaleX;
  }
  scaleY() {
    return this._scaleY;
  }
  opacity() {
    return this._opacity;
  }
  blendMode() {
    return this._blendMode;
  }
  tone() {
    return this._tone;
  }
  angle() {
    return this._angle;
  }
  initBasic() {
    this._name = "";
    this._origin = 0;
    this._x = 0;
    this._y = 0;
    this._scaleX = 100;
    this._scaleY = 100;
    this._opacity = 255;
    this._blendMode = 0;
  }
  initTarget() {
    this._targetX = this._x;
    this._targetY = this._y;
    this._targetScaleX = this._scaleX;
    this._targetScaleY = this._scaleY;
    this._targetOpacity = this._opacity;
    this._duration = 0;
    this._wholeDuration = 0;
    this._easingType = 0;
    this._easingExponent = 0;
  }
  initTone() {
    this._tone = null;
    this._toneTarget = null;
    this._toneDuration = 0;
  }
  initRotation() {
    this._angle = 0;
    this._rotationSpeed = 0;
  }
  // prettier-ignore
  show(name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
      this._name = name;
      this._origin = origin;
      this._x = x;
      this._y = y;
      this._scaleX = scaleX;
      this._scaleY = scaleY;
      this._opacity = opacity;
      this._blendMode = blendMode;
      this.initTarget();
      this.initTone();
      this.initRotation();
    }
  // prettier-ignore
  move(origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easingType) {
      this._origin = origin;
      this._targetX = x;
      this._targetY = y;
      this._targetScaleX = scaleX;
      this._targetScaleY = scaleY;
      this._targetOpacity = opacity;
      this._blendMode = blendMode;
      this._duration = duration;
      this._wholeDuration = duration;
      this._easingType = easingType;
      this._easingExponent = 2;
    }
  rotate(speed) {
    this._rotationSpeed = speed;
  }
  tint(tone, duration) {
    if (!this._tone) {
      this._tone = [0, 0, 0, 0];
    }
    this._toneTarget = tone.clone();
    this._toneDuration = duration;
    if (this._toneDuration === 0) {
      this._tone = this._toneTarget.clone();
    }
  }
  update() {
    this.updateMove();
    this.updateTone();
    this.updateRotation();
  }
  updateMove() {
    if (this._duration > 0) {
      this._x = this.applyEasing(this._x, this._targetX);
      this._y = this.applyEasing(this._y, this._targetY);
      this._scaleX = this.applyEasing(this._scaleX, this._targetScaleX);
      this._scaleY = this.applyEasing(this._scaleY, this._targetScaleY);
      this._opacity = this.applyEasing(this._opacity, this._targetOpacity);
      this._duration--;
    }
  }
  updateTone() {
    if (this._toneDuration > 0) {
      const d = this._toneDuration;
      for (let i = 0; i < 4; i++) {
        this._tone[i] = (this._tone[i] * (d - 1) + this._toneTarget[i]) / d;
      }
      this._toneDuration--;
    }
  }
  updateRotation() {
    if (this._rotationSpeed !== 0) {
      this._angle += this._rotationSpeed / 2;
    }
  }
  applyEasing(current, target) {
    const d = this._duration;
    const wd = this._wholeDuration;
    const lt = this.calcEasing((wd - d) / wd);
    const t = this.calcEasing((wd - d + 1) / wd);
    const start = (current - target * lt) / (1 - lt);
    return start + (target - start) * t;
  }
  calcEasing(t) {
    const exponent = this._easingExponent;
    switch (this._easingType) {
      case 1: // Slow start
        return this.easeIn(t, exponent);
      case 2: // Slow end
        return this.easeOut(t, exponent);
      case 3: // Slow start and end
        return this.easeInOut(t, exponent);
      default:
        return t;
    }
  }
  easeIn(t, exponent) {
    return Math.pow(t, exponent);
  }
  easeOut(t, exponent) {
    return 1 - Math.pow(1 - t, exponent);
  }
  easeInOut(t, exponent) {
    if (t < 0.5) {
      return this.easeIn(t * 2, exponent) / 2;
    } else {
      return this.easeOut(t * 2 - 1, exponent) / 2 + 0.5;
    }
  }
}

//-----------------------------------------------------------------------------
// Game_Item
//
// The game object class for handling skills, items, weapons, and armor. It is
// required because save data should not include the database object itself.

export class Game_Item {
  _dataClass: string;
  _itemId: number;
  constructor() {}
  initialize(item) {
    this._dataClass = "";
    this._itemId = 0;
    if (item) {
      this.setObject(item);
    }
  }
  isSkill() {
    return this._dataClass === "skill";
  }
  isItem() {
    return this._dataClass === "item";
  }
  isUsableItem() {
    return this.isSkill() || this.isItem();
  }
  isWeapon() {
    return this._dataClass === "weapon";
  }
  isArmor() {
    return this._dataClass === "armor";
  }
  isEquipItem() {
    return this.isWeapon() || this.isArmor();
  }
  isNull() {
    return this._dataClass === "";
  }
  itemId() {
    return this._itemId;
  }
  object() {
    if (this.isSkill()) {
      return $dataSkills[this._itemId];
    } else if (this.isItem()) {
      return $dataItems[this._itemId];
    } else if (this.isWeapon()) {
      return $dataWeapons[this._itemId];
    } else if (this.isArmor()) {
      return $dataArmors[this._itemId];
    } else {
      return null;
    }
  }
  setObject(item) {
    if (DataManager.isSkill(item)) {
      this._dataClass = "skill";
    } else if (DataManager.isItem(item)) {
      this._dataClass = "item";
    } else if (DataManager.isWeapon(item)) {
      this._dataClass = "weapon";
    } else if (DataManager.isArmor(item)) {
      this._dataClass = "armor";
    } else {
      this._dataClass = "";
    }
    this._itemId = item ? item.id : 0;
  }
  setEquip(isWeapon, itemId) {
    this._dataClass = isWeapon ? "weapon" : "armor";
    this._itemId = itemId;
  }
}

Game_Action.EFFECT_RECOVER_HP = 11;
Game_Action.EFFECT_RECOVER_MP = 12;
Game_Action.EFFECT_GAIN_TP = 13;
Game_Action.EFFECT_ADD_STATE = 21;
Game_Action.EFFECT_REMOVE_STATE = 22;
Game_Action.EFFECT_ADD_BUFF = 31;
Game_Action.EFFECT_ADD_DEBUFF = 32;
Game_Action.EFFECT_REMOVE_BUFF = 33;
Game_Action.EFFECT_REMOVE_DEBUFF = 34;
Game_Action.EFFECT_SPECIAL = 41;
Game_Action.EFFECT_GROW = 42;
Game_Action.EFFECT_LEARN_SKILL = 43;
Game_Action.EFFECT_COMMON_EVENT = 44;
Game_Action.SPECIAL_EFFECT_ESCAPE = 0;
Game_Action.HITTYPE_CERTAIN = 0;
Game_Action.HITTYPE_PHYSICAL = 1;
Game_Action.HITTYPE_MAGICAL = 2;

//-----------------------------------------------------------------------------
// Game_ActionResult
//
// The game object class for a result of a battle action. For convinience, all
// member variables in this class are public.

class Game_ActionResult {
  used: boolean;
  missed: boolean;
  evaded: boolean;
  physical: boolean;
  drain: boolean;
  critical: boolean;
  success: boolean;
  hpAffected: boolean;
  hpDamage: number;
  mpDamage: number;
  tpDamage: number;
  addedStates: never[];
  removedStates: never[];
  addedBuffs: never[];
  addedDebuffs: never[];
  removedBuffs: never[];
  constructor() {}
  initialize() {
    this.clear();
  }
  clear() {
    this.used = false;
    this.missed = false;
    this.evaded = false;
    this.physical = false;
    this.drain = false;
    this.critical = false;
    this.success = false;
    this.hpAffected = false;
    this.hpDamage = 0;
    this.mpDamage = 0;
    this.tpDamage = 0;
    this.addedStates = [];
    this.removedStates = [];
    this.addedBuffs = [];
    this.addedDebuffs = [];
    this.removedBuffs = [];
  }
  addedStateObjects() {
    return this.addedStates.map((id) => $dataStates[id]);
  }
  removedStateObjects() {
    return this.removedStates.map((id) => $dataStates[id]);
  }
  isStatusAffected() {
    return (
      this.addedStates.length > 0 ||
      this.removedStates.length > 0 ||
      this.addedBuffs.length > 0 ||
      this.addedDebuffs.length > 0 ||
      this.removedBuffs.length > 0
    );
  }
  isHit() {
    return this.used && !this.missed && !this.evaded;
  }
  isStateAdded(stateId) {
    return this.addedStates.includes(stateId);
  }
  pushAddedState(stateId) {
    if (!this.isStateAdded(stateId)) {
      this.addedStates.push(stateId);
    }
  }
  isStateRemoved(stateId) {
    return this.removedStates.includes(stateId);
  }
  pushRemovedState(stateId) {
    if (!this.isStateRemoved(stateId)) {
      this.removedStates.push(stateId);
    }
  }
  isBuffAdded(paramId) {
    return this.addedBuffs.includes(paramId);
  }
  pushAddedBuff(paramId) {
    if (!this.isBuffAdded(paramId)) {
      this.addedBuffs.push(paramId);
    }
  }
  isDebuffAdded(paramId) {
    return this.addedDebuffs.includes(paramId);
  }
  pushAddedDebuff(paramId) {
    if (!this.isDebuffAdded(paramId)) {
      this.addedDebuffs.push(paramId);
    }
  }
  isBuffRemoved(paramId) {
    return this.removedBuffs.includes(paramId);
  }
  pushRemovedBuff(paramId) {
    if (!this.isBuffRemoved(paramId)) {
      this.removedBuffs.push(paramId);
    }
  }
}

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

class Game_BattlerBase {
  _hp: number;
  _mp: number;
  _tp: number;
  _hidden: boolean;
  _paramPlus: number[];
  _states: never[];
  _stateTurns: {};
  _buffs: number[];
  _buffTurns: number[];
  static ICON_BUFF_START: number;
  static ICON_DEBUFF_START: number;
  hp: any;
  mp: any;
  tp: number;
  mcr: any;
  constructor() {}
  initialize() {
    this.initMembers();
  }
  initMembers() {
    this._hp = 1;
    this._mp = 0;
    this._tp = 0;
    this._hidden = false;
    this.clearParamPlus();
    this.clearStates();
    this.clearBuffs();
  }
  clearParamPlus() {
    this._paramPlus = [0, 0, 0, 0, 0, 0, 0, 0];
  }
  clearStates() {
    this._states = [];
    this._stateTurns = {};
  }
  eraseState(stateId) {
    this._states.remove(stateId);
    delete this._stateTurns[stateId];
  }
  isStateAffected(stateId) {
    return this._states.includes(stateId);
  }
  isDeathStateAffected() {
    return this.isStateAffected(this.deathStateId());
  }
  deathStateId() {
    return 1;
  }
  resetStateCounts(stateId) {
    const state = $dataStates[stateId];
    const variance = 1 + Math.max(state.maxTurns - state.minTurns, 0);
    this._stateTurns[stateId] = state.minTurns + Math.randomInt(variance);
  }
  isStateExpired(stateId) {
    return this._stateTurns[stateId] === 0;
  }
  updateStateTurns() {
    for (const stateId of this._states) {
      if (this._stateTurns[stateId] > 0) {
        this._stateTurns[stateId]--;
      }
    }
  }
  clearBuffs() {
    this._buffs = [0, 0, 0, 0, 0, 0, 0, 0];
    this._buffTurns = [0, 0, 0, 0, 0, 0, 0, 0];
  }
  eraseBuff(paramId) {
    this._buffs[paramId] = 0;
    this._buffTurns[paramId] = 0;
  }
  buffLength() {
    return this._buffs.length;
  }
  buff(paramId) {
    return this._buffs[paramId];
  }
  isBuffAffected(paramId) {
    return this._buffs[paramId] > 0;
  }
  isDebuffAffected(paramId) {
    return this._buffs[paramId] < 0;
  }
  isBuffOrDebuffAffected(paramId) {
    return this._buffs[paramId] !== 0;
  }
  isMaxBuffAffected(paramId) {
    return this._buffs[paramId] === 2;
  }
  isMaxDebuffAffected(paramId) {
    return this._buffs[paramId] === -2;
  }
  increaseBuff(paramId) {
    if (!this.isMaxBuffAffected(paramId)) {
      this._buffs[paramId]++;
    }
  }
  decreaseBuff(paramId) {
    if (!this.isMaxDebuffAffected(paramId)) {
      this._buffs[paramId]--;
    }
  }
  overwriteBuffTurns(paramId, turns) {
    if (this._buffTurns[paramId] < turns) {
      this._buffTurns[paramId] = turns;
    }
  }
  isBuffExpired(paramId) {
    return this._buffTurns[paramId] === 0;
  }
  updateBuffTurns() {
    for (let i = 0; i < this._buffTurns.length; i++) {
      if (this._buffTurns[i] > 0) {
        this._buffTurns[i]--;
      }
    }
  }
  die() {
    this._hp = 0;
    this.clearStates();
    this.clearBuffs();
  }
  revive() {
    if (this._hp === 0) {
      this._hp = 1;
    }
  }
  states() {
    return this._states.map((id) => $dataStates[id]);
  }
  stateIcons() {
    return this.states()
      .map((state) => state.iconIndex)
      .filter((iconIndex) => iconIndex > 0);
  }
  buffIcons() {
    const icons = [];
    for (let i = 0; i < this._buffs.length; i++) {
      if (this._buffs[i] !== 0) {
        icons.push(this.buffIconIndex(this._buffs[i], i));
      }
    }
    return icons;
  }
  buffIconIndex(buffLevel, paramId) {
    if (buffLevel > 0) {
      return Game_BattlerBase.ICON_BUFF_START + (buffLevel - 1) * 8 + paramId;
    } else if (buffLevel < 0) {
      return (
        Game_BattlerBase.ICON_DEBUFF_START + (-buffLevel - 1) * 8 + paramId
      );
    } else {
      return 0;
    }
  }
  allIcons() {
    return this.stateIcons().concat(this.buffIcons());
  }
  traitObjects() {
    // Returns an array of the all objects having traits. States only here.
    return this.states();
  }
  allTraits() {
    return this.traitObjects().reduce((r, obj) => r.concat(obj.traits), []);
  }
  traits(code) {
    return this.allTraits().filter((trait) => trait.code === code);
  }
  traitsWithId(code, id) {
    return this.allTraits().filter(
      (trait) => trait.code === code && trait.dataId === id
    );
  }
  traitsPi(code, id) {
    return this.traitsWithId(code, id).reduce((r, trait) => r * trait.value, 1);
  }
  traitsSum(code, id) {
    return this.traitsWithId(code, id).reduce((r, trait) => r + trait.value, 0);
  }
  traitsSumAll(code) {
    return this.traits(code).reduce((r, trait) => r + trait.value, 0);
  }
  traitsSet(code) {
    return this.traits(code).reduce((r, trait) => r.concat(trait.dataId), []);
  }
  paramBase(/*paramId*/) {
    return 0;
  }
  paramPlus(paramId) {
    return this._paramPlus[paramId];
  }
  paramBasePlus(paramId) {
    return Math.max(0, this.paramBase(paramId) + this.paramPlus(paramId));
  }
  paramMin(paramId) {
    if (paramId === 0) {
      return 1; // MHP
    } else {
      return 0;
    }
  }
  paramMax(/*paramId*/) {
    return Infinity;
  }
  paramRate(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_PARAM, paramId);
  }
  static TRAIT_PARAM(TRAIT_PARAM: any, paramId: any) {
    throw new Error("Method not implemented.");
  }
  paramBuffRate(paramId) {
    return this._buffs[paramId] * 0.25 + 1.0;
  }
  param(paramId) {
    const value =
      this.paramBasePlus(paramId) *
      this.paramRate(paramId) *
      this.paramBuffRate(paramId);
    const maxValue = this.paramMax(paramId);
    const minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
  }
  xparam(xparamId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);
  }
  static TRAIT_XPARAM(TRAIT_XPARAM: any, xparamId: any) {
    throw new Error("Method not implemented.");
  }
  sparam(sparamId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
  }
  static TRAIT_SPARAM(TRAIT_SPARAM: any, sparamId: any) {
    throw new Error("Method not implemented.");
  }
  elementRate(elementId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, elementId);
  }
  static TRAIT_ELEMENT_RATE(TRAIT_ELEMENT_RATE: any, elementId: any) {
    throw new Error("Method not implemented.");
  }
  debuffRate(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId);
  }
  static TRAIT_DEBUFF_RATE(TRAIT_DEBUFF_RATE: any, paramId: any) {
    throw new Error("Method not implemented.");
  }
  stateRate(stateId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_STATE_RATE, stateId);
  }
  static TRAIT_STATE_RATE(TRAIT_STATE_RATE: any, stateId: any) {
    throw new Error("Method not implemented.");
  }
  stateResistSet() {
    return this.traitsSet(Game_BattlerBase.TRAIT_STATE_RESIST);
  }
  static TRAIT_STATE_RESIST(TRAIT_STATE_RESIST: any) {
    throw new Error("Method not implemented.");
  }
  isStateResist(stateId) {
    return this.stateResistSet().includes(stateId);
  }
  attackElements() {
    return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_ELEMENT);
  }
  static TRAIT_ATTACK_ELEMENT(TRAIT_ATTACK_ELEMENT: any) {
    throw new Error("Method not implemented.");
  }
  attackStates() {
    return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_STATE);
  }
  static TRAIT_ATTACK_STATE(TRAIT_ATTACK_STATE: any) {
    throw new Error("Method not implemented.");
  }
  attackStatesRate(stateId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_ATTACK_STATE, stateId);
  }
  attackSpeed() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_SPEED);
  }
  static TRAIT_ATTACK_SPEED(TRAIT_ATTACK_SPEED: any) {
    throw new Error("Method not implemented.");
  }
  attackTimesAdd() {
    return Math.max(this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_TIMES), 0);
  }
  static TRAIT_ATTACK_TIMES(TRAIT_ATTACK_TIMES: any): number {
    throw new Error("Method not implemented.");
  }
  attackSkillId() {
    const set = this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_SKILL);
    return set.length > 0 ? Math.max(...set) : 1;
  }
  static TRAIT_ATTACK_SKILL(TRAIT_ATTACK_SKILL: any) {
    throw new Error("Method not implemented.");
  }
  addedSkillTypes() {
    return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_ADD);
  }
  static TRAIT_STYPE_ADD(TRAIT_STYPE_ADD: any) {
    throw new Error("Method not implemented.");
  }
  isSkillTypeSealed(stypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_SEAL).includes(stypeId);
  }
  static TRAIT_STYPE_SEAL(TRAIT_STYPE_SEAL: any) {
    throw new Error("Method not implemented.");
  }
  addedSkills() {
    return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_ADD);
  }
  static TRAIT_SKILL_ADD(TRAIT_SKILL_ADD: any) {
    throw new Error("Method not implemented.");
  }
  isSkillSealed(skillId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_SEAL).includes(skillId);
  }
  static TRAIT_SKILL_SEAL(TRAIT_SKILL_SEAL: any) {
    throw new Error("Method not implemented.");
  }
  isEquipWtypeOk(wtypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_WTYPE).includes(wtypeId);
  }
  static TRAIT_EQUIP_WTYPE(TRAIT_EQUIP_WTYPE: any) {
    throw new Error("Method not implemented.");
  }
  isEquipAtypeOk(atypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_ATYPE).includes(atypeId);
  }
  static TRAIT_EQUIP_ATYPE(TRAIT_EQUIP_ATYPE: any) {
    throw new Error("Method not implemented.");
  }
  isEquipTypeLocked(etypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_LOCK).includes(etypeId);
  }
  static TRAIT_EQUIP_LOCK(TRAIT_EQUIP_LOCK: any) {
    throw new Error("Method not implemented.");
  }
  isEquipTypeSealed(etypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_SEAL).includes(etypeId);
  }
  static TRAIT_EQUIP_SEAL(TRAIT_EQUIP_SEAL: any) {
    throw new Error("Method not implemented.");
  }
  slotType() {
    const set = this.traitsSet(Game_BattlerBase.TRAIT_SLOT_TYPE);
    return set.length > 0 ? Math.max(...set) : 0;
  }
  static TRAIT_SLOT_TYPE(TRAIT_SLOT_TYPE: any) {
    throw new Error("Method not implemented.");
  }
  isDualWield() {
    return this.slotType() === 1;
  }
  actionPlusSet() {
    return this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map(
      (trait) => trait.value
    );
  }
  static TRAIT_ACTION_PLUS(TRAIT_ACTION_PLUS: any) {
    throw new Error("Method not implemented.");
  }
  specialFlag(flagId) {
    return this.traits(Game_BattlerBase.TRAIT_SPECIAL_FLAG).some(
      (trait) => trait.dataId === flagId
    );
  }
  static TRAIT_SPECIAL_FLAG(TRAIT_SPECIAL_FLAG: any) {
    throw new Error("Method not implemented.");
  }
  collapseType() {
    const set = this.traitsSet(Game_BattlerBase.TRAIT_COLLAPSE_TYPE);
    return set.length > 0 ? Math.max(...set) : 0;
  }
  static TRAIT_COLLAPSE_TYPE(TRAIT_COLLAPSE_TYPE: any) {
    throw new Error("Method not implemented.");
  }
  partyAbility(abilityId) {
    return this.traits(Game_BattlerBase.TRAIT_PARTY_ABILITY).some(
      (trait) => trait.dataId === abilityId
    );
  }
  static TRAIT_PARTY_ABILITY(TRAIT_PARTY_ABILITY: any) {
    throw new Error("Method not implemented.");
  }
  isAutoBattle() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_AUTO_BATTLE);
  }
  static FLAG_ID_AUTO_BATTLE(FLAG_ID_AUTO_BATTLE: any) {
    throw new Error("Method not implemented.");
  }
  isGuard() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_GUARD) && this.canMove();
  }
  static FLAG_ID_GUARD(FLAG_ID_GUARD: any) {
    throw new Error("Method not implemented.");
  }
  isSubstitute() {
    return (
      this.specialFlag(Game_BattlerBase.FLAG_ID_SUBSTITUTE) && this.canMove()
    );
  }
  static FLAG_ID_SUBSTITUTE(FLAG_ID_SUBSTITUTE: any) {
    throw new Error("Method not implemented.");
  }
  isPreserveTp() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_PRESERVE_TP);
  }
  static FLAG_ID_PRESERVE_TP(FLAG_ID_PRESERVE_TP: any) {
    throw new Error("Method not implemented.");
  }
  addParam(paramId, value) {
    this._paramPlus[paramId] += value;
    this.refresh();
  }
  setHp(hp) {
    this._hp = hp;
    this.refresh();
  }
  setMp(mp) {
    this._mp = mp;
    this.refresh();
  }
  setTp(tp) {
    this._tp = tp;
    this.refresh();
  }
  maxTp() {
    return 100;
  }
  refresh() {
    for (const stateId of this.stateResistSet()) {
      this.eraseState(stateId);
    }
    this._hp = this._hp.clamp(0, this.mhp);
    this._mp = this._mp.clamp(0, this.mmp);
    this._tp = this._tp.clamp(0, this.maxTp());
  }
  mhp(arg0: number, mhp: any): any {
    throw new Error("Method not implemented.");
  }
  mmp(arg0: number, mmp: any): any {
    throw new Error("Method not implemented.");
  }
  recoverAll() {
    this.clearStates();
    this._hp = this.mhp;
    this._mp = this.mmp;
  }
  hpRate() {
    return this.hp / this.mhp;
  }
  mpRate() {
    return this.mmp > 0 ? this.mp / this.mmp : 0;
  }
  tpRate() {
    return this.tp / this.maxTp();
  }
  hide() {
    this._hidden = true;
  }
  appear() {
    this._hidden = false;
  }
  isHidden() {
    return this._hidden;
  }
  isAppeared() {
    return !this.isHidden();
  }
  isDead() {
    return this.isAppeared() && this.isDeathStateAffected();
  }
  isAlive() {
    return this.isAppeared() && !this.isDeathStateAffected();
  }
  isDying() {
    return this.isAlive() && this._hp < this.mhp / 4;
  }
  isRestricted() {
    return this.isAppeared() && this.restriction() > 0;
  }
  canInput() {
    // prettier-ignore
    return this.isAppeared() && this.isActor() &&
        !this.isRestricted() && !this.isAutoBattle();
  }
  canMove() {
    return this.isAppeared() && this.restriction() < 4;
  }
  isConfused() {
    return (
      this.isAppeared() && this.restriction() >= 1 && this.restriction() <= 3
    );
  }
  confusionLevel() {
    return this.isConfused() ? this.restriction() : 0;
  }
  isActor() {
    return false;
  }
  isEnemy() {
    return false;
  }
  sortStates() {
    this._states.sort((a, b) => {
      const p1 = $dataStates[a].priority;
      const p2 = $dataStates[b].priority;
      if (p1 !== p2) {
        return p2 - p1;
      }
      return a - b;
    });
  }
  restriction() {
    const restrictions = this.states().map((state) => state.restriction);
    return Math.max(0, ...restrictions);
  }
  addNewState(stateId) {
    if (stateId === this.deathStateId()) {
      this.die();
    }
    const restricted = this.isRestricted();
    this._states.push(stateId);
    this.sortStates();
    if (!restricted && this.isRestricted()) {
      this.onRestrict();
    }
  }
  onRestrict() {
    //
  }
  mostImportantStateText() {
    for (const state of this.states()) {
      if (state.message3) {
        return state.message3;
      }
    }
    return "";
  }
  stateMotionIndex() {
    const states = this.states();
    if (states.length > 0) {
      return states[0].motion;
    } else {
      return 0;
    }
  }
  stateOverlayIndex() {
    const states = this.states();
    if (states.length > 0) {
      return states[0].overlay;
    } else {
      return 0;
    }
  }
  isSkillWtypeOk(/*skill*/) {
    return true;
  }
  skillMpCost(skill) {
    return Math.floor(skill.mpCost * this.mcr);
  }
  skillTpCost(skill) {
    return skill.tpCost;
  }
  canPaySkillCost(skill) {
    return (
      this._tp >= this.skillTpCost(skill) && this._mp >= this.skillMpCost(skill)
    );
  }
  paySkillCost(skill) {
    this._mp -= this.skillMpCost(skill);
    this._tp -= this.skillTpCost(skill);
  }
  isOccasionOk(item) {
    if ($gameParty.inBattle()) {
      return item.occasion === 0 || item.occasion === 1;
    } else {
      return item.occasion === 0 || item.occasion === 2;
    }
  }
  meetsUsableItemConditions(item) {
    return this.canMove() && this.isOccasionOk(item);
  }
  meetsSkillConditions(skill) {
    return (
      this.meetsUsableItemConditions(skill) &&
      this.isSkillWtypeOk(skill) &&
      this.canPaySkillCost(skill) &&
      !this.isSkillSealed(skill.id) &&
      !this.isSkillTypeSealed(skill.stypeId)
    );
  }
  meetsItemConditions(item) {
    return this.meetsUsableItemConditions(item) && $gameParty.hasItem(item);
  }
  canUse(item) {
    if (!item) {
      return false;
    } else if (DataManager.isSkill(item)) {
      return this.meetsSkillConditions(item);
    } else if (DataManager.isItem(item)) {
      return this.meetsItemConditions(item);
    } else {
      return false;
    }
  }
  canEquip(item) {
    if (!item) {
      return false;
    } else if (DataManager.isWeapon(item)) {
      return this.canEquipWeapon(item);
    } else if (DataManager.isArmor(item)) {
      return this.canEquipArmor(item);
    } else {
      return false;
    }
  }
  canEquipWeapon(item) {
    return (
      this.isEquipWtypeOk(item.wtypeId) && !this.isEquipTypeSealed(item.etypeId)
    );
  }
  canEquipArmor(item) {
    return (
      this.isEquipAtypeOk(item.atypeId) && !this.isEquipTypeSealed(item.etypeId)
    );
  }
  guardSkillId() {
    return 2;
  }
  canAttack() {
    return this.canUse($dataSkills[this.attackSkillId()]);
  }
  canGuard() {
    return this.canUse($dataSkills[this.guardSkillId()]);
  }
}

Game_BattlerBase.TRAIT_ELEMENT_RATE = 11;
Game_BattlerBase.TRAIT_DEBUFF_RATE = 12;
Game_BattlerBase.TRAIT_STATE_RATE = 13;
Game_BattlerBase.TRAIT_STATE_RESIST = 14;
Game_BattlerBase.TRAIT_PARAM = 21;
Game_BattlerBase.TRAIT_XPARAM = 22;
Game_BattlerBase.TRAIT_SPARAM = 23;
Game_BattlerBase.TRAIT_ATTACK_ELEMENT = 31;
Game_BattlerBase.TRAIT_ATTACK_STATE = 32;
Game_BattlerBase.TRAIT_ATTACK_SPEED = 33;
Game_BattlerBase.TRAIT_ATTACK_TIMES = 34;
Game_BattlerBase.TRAIT_ATTACK_SKILL = 35;
Game_BattlerBase.TRAIT_STYPE_ADD = 41;
Game_BattlerBase.TRAIT_STYPE_SEAL = 42;
Game_BattlerBase.TRAIT_SKILL_ADD = 43;
Game_BattlerBase.TRAIT_SKILL_SEAL = 44;
Game_BattlerBase.TRAIT_EQUIP_WTYPE = 51;
Game_BattlerBase.TRAIT_EQUIP_ATYPE = 52;
Game_BattlerBase.TRAIT_EQUIP_LOCK = 53;
Game_BattlerBase.TRAIT_EQUIP_SEAL = 54;
Game_BattlerBase.TRAIT_SLOT_TYPE = 55;
Game_BattlerBase.TRAIT_ACTION_PLUS = 61;
Game_BattlerBase.TRAIT_SPECIAL_FLAG = 62;
Game_BattlerBase.TRAIT_COLLAPSE_TYPE = 63;
Game_BattlerBase.TRAIT_PARTY_ABILITY = 64;
Game_BattlerBase.FLAG_ID_AUTO_BATTLE = 0;
Game_BattlerBase.FLAG_ID_GUARD = 1;
Game_BattlerBase.FLAG_ID_SUBSTITUTE = 2;
Game_BattlerBase.FLAG_ID_PRESERVE_TP = 3;
Game_BattlerBase.ICON_BUFF_START = 32;
Game_BattlerBase.ICON_DEBUFF_START = 48;

Object.defineProperties(Game_BattlerBase.prototype, {
  // Hit Points
  hp: {
    get: function () {
      return this._hp;
    },
    configurable: true,
  },
  // Magic Points
  mp: {
    get: function () {
      return this._mp;
    },
    configurable: true,
  },
  // Tactical Points
  tp: {
    get: function () {
      return this._tp;
    },
    configurable: true,
  },
  // Maximum Hit Points
  mhp: {
    get: function () {
      return this.param(0);
    },
    configurable: true,
  },
  // Maximum Magic Points
  mmp: {
    get: function () {
      return this.param(1);
    },
    configurable: true,
  },
  // ATtacK power
  atk: {
    get: function () {
      return this.param(2);
    },
    configurable: true,
  },
  // DEFense power
  def: {
    get: function () {
      return this.param(3);
    },
    configurable: true,
  },
  // Magic ATtack power
  mat: {
    get: function () {
      return this.param(4);
    },
    configurable: true,
  },
  // Magic DeFense power
  mdf: {
    get: function () {
      return this.param(5);
    },
    configurable: true,
  },
  // AGIlity
  agi: {
    get: function () {
      return this.param(6);
    },
    configurable: true,
  },
  // LUcK
  luk: {
    get: function () {
      return this.param(7);
    },
    configurable: true,
  },
  // HIT rate
  hit: {
    get: function () {
      return this.xparam(0);
    },
    configurable: true,
  },
  // EVAsion rate
  eva: {
    get: function () {
      return this.xparam(1);
    },
    configurable: true,
  },
  // CRItical rate
  cri: {
    get: function () {
      return this.xparam(2);
    },
    configurable: true,
  },
  // Critical EVasion rate
  cev: {
    get: function () {
      return this.xparam(3);
    },
    configurable: true,
  },
  // Magic EVasion rate
  mev: {
    get: function () {
      return this.xparam(4);
    },
    configurable: true,
  },
  // Magic ReFlection rate
  mrf: {
    get: function () {
      return this.xparam(5);
    },
    configurable: true,
  },
  // CouNTer attack rate
  cnt: {
    get: function () {
      return this.xparam(6);
    },
    configurable: true,
  },
  // Hp ReGeneration rate
  hrg: {
    get: function () {
      return this.xparam(7);
    },
    configurable: true,
  },
  // Mp ReGeneration rate
  mrg: {
    get: function () {
      return this.xparam(8);
    },
    configurable: true,
  },
  // Tp ReGeneration rate
  trg: {
    get: function () {
      return this.xparam(9);
    },
    configurable: true,
  },
  // TarGet Rate
  tgr: {
    get: function () {
      return this.sparam(0);
    },
    configurable: true,
  },
  // GuaRD effect rate
  grd: {
    get: function () {
      return this.sparam(1);
    },
    configurable: true,
  },
  // RECovery effect rate
  rec: {
    get: function () {
      return this.sparam(2);
    },
    configurable: true,
  },
  // PHArmacology
  pha: {
    get: function () {
      return this.sparam(3);
    },
    configurable: true,
  },
  // Mp Cost Rate
  mcr: {
    get: function () {
      return this.sparam(4);
    },
    configurable: true,
  },
  // Tp Charge Rate
  tcr: {
    get: function () {
      return this.sparam(5);
    },
    configurable: true,
  },
  // Physical Damage Rate
  pdr: {
    get: function () {
      return this.sparam(6);
    },
    configurable: true,
  },
  // Magic Damage Rate
  mdr: {
    get: function () {
      return this.sparam(7);
    },
    configurable: true,
  },
  // Floor Damage Rate
  fdr: {
    get: function () {
      return this.sparam(8);
    },
    configurable: true,
  },
  // EXperience Rate
  exr: {
    get: function () {
      return this.sparam(9);
    },
    configurable: true,
  },
});

//-----------------------------------------------------------------------------
// Game_Troop
//
// The game object class for a troop and the battle-related data.

class Game_Troop {
  _interpreter: Game_Interpreter;
  _turnCount: any;
  _enemies: any;
  _troopId: number;
  _eventFlags: {};
  _namesCount: {};
  static LETTER_TABLE_FULL: any;
  static LETTER_TABLE_HALF: any;
  constructor() {}
  initialize() {
    Game_Unit.prototype.initialize.call(this);
    this._interpreter = new Game_Interpreter();
    this.clear();
  }
  isEventRunning() {
    return this._interpreter.isRunning();
  }
  updateInterpreter() {
    this._interpreter.update();
  }
  turnCount() {
    return this._turnCount;
  }
  members() {
    return this._enemies;
  }
  clear() {
    this._interpreter.clear();
    this._troopId = 0;
    this._eventFlags = {};
    this._enemies = [];
    this._turnCount = 0;
    this._namesCount = {};
  }
  troop() {
    return $dataTroops[this._troopId];
  }
  setup(troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
    for (const member of this.troop().members) {
      if ($dataEnemies[member.enemyId]) {
        const enemyId = member.enemyId;
        const x = member.x;
        const y = member.y;
        const enemy = new Game_Enemy(enemyId, x, y);
        if (member.hidden) {
          enemy.hide();
        }
        this._enemies.push(enemy);
      }
    }
    this.makeUniqueNames();
  }
  makeUniqueNames() {
    const table = this.letterTable();
    for (const enemy of this.members()) {
      if (enemy.isAlive() && enemy.isLetterEmpty()) {
        const name = enemy.originalName();
        const n = this._namesCount[name] || 0;
        enemy.setLetter(table[n % table.length]);
        this._namesCount[name] = n + 1;
      }
    }
    this.updatePluralFlags();
  }
  updatePluralFlags() {
    for (const enemy of this.members()) {
      const name = enemy.originalName();
      if (this._namesCount[name] >= 2) {
        enemy.setPlural(true);
      }
    }
  }
  letterTable() {
    return $gameSystem.isCJK()
      ? Game_Troop.LETTER_TABLE_FULL
      : Game_Troop.LETTER_TABLE_HALF;
  }
  enemyNames() {
    const names = [];
    for (const enemy of this.members()) {
      const name = enemy.originalName();
      if (enemy.isAlive() && !names.includes(name)) {
        names.push(name);
      }
    }
    return names;
  }
  meetsConditions(page) {
    const c = page.conditions;
    if (
      !c.turnEnding &&
      !c.turnValid &&
      !c.enemyValid &&
      !c.actorValid &&
      !c.switchValid
    ) {
      return false; // Conditions not set
    }
    if (c.turnEnding) {
      if (!BattleManager.isTurnEnd()) {
        return false;
      }
    }
    if (c.turnValid) {
      const n = this._turnCount;
      const a = c.turnA;
      const b = c.turnB;
      if (b === 0 && n !== a) {
        return false;
      }
      if (b > 0 && (n < 1 || n < a || n % b !== a % b)) {
        return false;
      }
    }
    if (c.enemyValid) {
      const enemy = $gameTroop.members()[c.enemyIndex];
      if (!enemy || enemy.hpRate() * 100 > c.enemyHp) {
        return false;
      }
    }
    if (c.actorValid) {
      const actor = $gameActors.actor(c.actorId);
      if (!actor || actor.hpRate() * 100 > c.actorHp) {
        return false;
      }
    }
    if (c.switchValid) {
      if (!$gameSwitches.value(c.switchId)) {
        return false;
      }
    }
    return true;
  }
  setupBattleEvent() {
    if (!this._interpreter.isRunning()) {
      if (this._interpreter.setupReservedCommonEvent()) {
        return;
      }
      const pages = this.troop().pages;
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        if (this.meetsConditions(page) && !this._eventFlags[i]) {
          this._interpreter.setup(page.list);
          if (page.span <= 1) {
            this._eventFlags[i] = true;
          }
          break;
        }
      }
    }
  }
  increaseTurn() {
    const pages = this.troop().pages;
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (page.span === 1) {
        this._eventFlags[i] = false;
      }
    }
    this._turnCount++;
  }
  expTotal() {
    return this.deadMembers().reduce((r, enemy) => r + enemy.exp(), 0);
  }
  deadMembers() {
    throw new Error("Method not implemented.");
  }
  goldTotal() {
    const members = this.deadMembers();
    return members.reduce((r, enemy) => r + enemy.gold(), 0) * this.goldRate();
  }
  goldRate() {
    return $gameParty.hasGoldDouble() ? 2 : 1;
  }
  makeDropItems() {
    const members = this.deadMembers();
    return members.reduce((r, enemy) => r.concat(enemy.makeDropItems()), []);
  }
  isTpbTurnEnd() {
    const members = this.members();
    const turnMax = Math.max(...members.map((member) => member.turnCount()));
    return turnMax > this._turnCount;
  }
}

Game_Troop.prototype = Object.create(Game_Unit.prototype);
// prettier-ignore
Game_Troop.LETTER_TABLE_HALF = [
      " A"," B"," C"," D"," E"," F"," G"," H"," I"," J"," K"," L"," M",
      " N"," O"," P"," Q"," R"," S"," T"," U"," V"," W"," X"," Y"," Z"
  ];
// prettier-ignore
Game_Troop.LETTER_TABLE_FULL = [
      "Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ",
      "Ｎ","Ｏ","Ｐ","Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ"
  ];

//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.

class Game_Map {
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
  setup(mapId) {
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
  tileWidth() {
    if ("tileSize" in $dataSystem) {
      return $dataSystem.tileSize;
    } else {
      return 48;
    }
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
    this._vehicles = [];
    this._vehicles[0] = new Game_Vehicle("boat");
    this._vehicles[1] = new Game_Vehicle("ship");
    this._vehicles[2] = new Game_Vehicle("airship");
  }
  refereshVehicles() {
    for (const vehicle of this._vehicles) {
      vehicle.refresh();
    }
  }
  vehicles() {
    return this._vehicles;
  }
  vehicle(type) {
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
    for (const event of $dataMap.events.filter((event) => !!event)) {
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
  event(eventId) {
    return this._events[eventId];
  }
  eraseEvent(eventId) {
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
  setDisplayPos(x, y) {
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
  adjustX(x) {
    if (
      this.isLoopHorizontal() &&
      x < this._displayX - (this.width() - this.screenTileX()) / 2
    ) {
      return x - this._displayX + $dataMap.width;
    } else {
      return x - this._displayX;
    }
  }
  adjustY(y) {
    if (
      this.isLoopVertical() &&
      y < this._displayY - (this.height() - this.screenTileY()) / 2
    ) {
      return y - this._displayY + $dataMap.height;
    } else {
      return y - this._displayY;
    }
  }
  roundX(x) {
    return this.isLoopHorizontal() ? x.mod(this.width()) : x;
  }
  roundY(y) {
    return this.isLoopVertical() ? y.mod(this.height()) : y;
  }
  xWithDirection(x, d) {
    return x + (d === 6 ? 1 : d === 4 ? -1 : 0);
  }
  yWithDirection(y, d) {
    return y + (d === 2 ? 1 : d === 8 ? -1 : 0);
  }
  roundXWithDirection(x, d) {
    return this.roundX(x + (d === 6 ? 1 : d === 4 ? -1 : 0));
  }
  roundYWithDirection(y, d) {
    return this.roundY(y + (d === 2 ? 1 : d === 8 ? -1 : 0));
  }
  deltaX(x1, x2) {
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
  deltaY(y1, y2) {
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
  distance(x1, y1, x2, y2) {
    return Math.abs(this.deltaX(x1, x2)) + Math.abs(this.deltaY(y1, y2));
  }
  canvasToMapX(x) {
    const tileWidth = this.tileWidth();
    const originX = this._displayX * tileWidth;
    const mapX = Math.floor((originX + x) / tileWidth);
    return this.roundX(mapX);
  }
  canvasToMapY(y) {
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
  eventsXy(x, y) {
    return this.events().filter((event) => event.pos(x, y));
  }
  eventsXyNt(x, y) {
    return this.events().filter((event) => event.posNt(x, y));
  }
  tileEventsXy(x, y) {
    return this._tileEvents.filter((event) => event.posNt(x, y));
  }
  eventIdXy(x, y) {
    const list = this.eventsXy(x, y);
    return list.length === 0 ? 0 : list[0].eventId();
  }
  scrollDown(distance) {
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
  scrollLeft(distance) {
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
  scrollRight(distance) {
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
  scrollUp(distance) {
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
  isValid(x, y) {
    return x >= 0 && x < this.width() && y >= 0 && y < this.height();
  }
  checkPassage(x, y, bit) {
    const flags = this.tilesetFlags();
    const tiles = this.allTiles(x, y);
    for (const tile of tiles) {
      const flag = flags[tile];
      if ((flag & 0x10) !== 0) {
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
  tileId(x, y, z) {
    const width = $dataMap.width;
    const height = $dataMap.height;
    return $dataMap.data[(z * height + y) * width + x] || 0;
  }
  layeredTiles(x, y) {
    const tiles = [];
    for (let i = 0; i < 4; i++) {
      tiles.push(this.tileId(x, y, 3 - i));
    }
    return tiles;
  }
  allTiles(x, y) {
    const tiles = this.tileEventsXy(x, y).map((event) => event.tileId());
    return tiles.concat(this.layeredTiles(x, y));
  }
  autotileType(x, y, z) {
    const tileId = this.tileId(x, y, z);
    return tileId >= 2048 ? Math.floor((tileId - 2048) / 48) : -1;
  }
  isPassable(x, y, d) {
    return this.checkPassage(x, y, (1 << (d / 2 - 1)) & 0x0f);
  }
  isBoatPassable(x, y) {
    return this.checkPassage(x, y, 0x0200);
  }
  isShipPassable(x, y) {
    return this.checkPassage(x, y, 0x0400);
  }
  isAirshipLandOk(x, y) {
    return this.checkPassage(x, y, 0x0800) && this.checkPassage(x, y, 0x0f);
  }
  checkLayeredTilesFlags(x, y, bit) {
    const flags = this.tilesetFlags();
    return this.layeredTiles(x, y).some(
      (tileId) => (flags[tileId] & bit) !== 0
    );
  }
  isLadder(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x20);
  }
  isBush(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x40);
  }
  isCounter(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x80);
  }
  isDamageFloor(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x100);
  }
  terrainTag(x, y) {
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
  regionId(x, y) {
    return this.isValid(x, y) ? this.tileId(x, y, 5) : 0;
  }
  startScroll(direction, distance, speed) {
    this._scrollDirection = direction;
    this._scrollRest = distance;
    this._scrollSpeed = speed;
  }
  isScrolling() {
    return this._scrollRest > 0;
  }
  update(sceneActive) {
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
  doScroll(direction, distance) {
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
  changeTileset(tilesetId) {
    this._tilesetId = tilesetId;
    this.refresh();
  }
  changeBattleback(battleback1Name, battleback2Name) {
    this._battleback1Name = battleback1Name;
    this._battleback2Name = battleback2Name;
  }
  changeParallax(name, loopX, loopY, sx, sy) {
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
  unlockEvent(eventId) {
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

//-----------------------------------------------------------------------------
// Game_CommonEvent
//
// The game object class for a common event. It contains functionality for
// running parallel process events.

class Game_CommonEvent {
  _commonEventId: any;
  _interpreter: any;
  constructor() {}
  initialize(commonEventId) {
    this._commonEventId = commonEventId;
    this.refresh();
  }
  event() {
    return $dataCommonEvents[this._commonEventId];
  }
  list() {
    return this.event().list;
  }
  refresh() {
    if (this.isActive()) {
      if (!this._interpreter) {
        this._interpreter = new Game_Interpreter();
      }
    } else {
      this._interpreter = null;
    }
  }
  isActive() {
    const event = this.event();
    return event.trigger === 2 && $gameSwitches.value(event.switchId);
  }
  update() {
    if (this._interpreter) {
      if (!this._interpreter.isRunning()) {
        this._interpreter.setup(this.list());
      }
      this._interpreter.update();
    }
  }
}

//-----------------------------------------------------------------------------
// Game_CharacterBase
//
// The superclass of Game_Character. It handles basic information, such as
// coordinates and images, shared by all characters.

class Game_CharacterBase {
  _x: number;
  _y: number;
  _realX: number;
  _realY: number;
  _moveSpeed: number;
  _moveFrequency: number;
  _opacity: number;
  _blendMode: number;
  _direction: number;
  _pattern: number;
  _priorityType: number;
  _tileId: number;
  _characterName: string;
  _characterIndex: number;
  _isObjectCharacter: boolean;
  _walkAnime: boolean;
  _stepAnime: boolean;
  _directionFix: boolean;
  _through: boolean;
  _transparent: boolean;
  _bushDepth: number;
  _animationId: number;
  _balloonId: number;
  _animationPlaying: boolean;
  _balloonPlaying: boolean;
  _animationCount: number;
  _stopCount: number;
  _jumpCount: number;
  _jumpPeak: number;
  _movementSuccess: boolean;
  constructor() {}
  initialize() {
    this.initMembers();
  }
  initMembers() {
    this._x = 0;
    this._y = 0;
    this._realX = 0;
    this._realY = 0;
    this._moveSpeed = 4;
    this._moveFrequency = 6;
    this._opacity = 255;
    this._blendMode = 0;
    this._direction = 2;
    this._pattern = 1;
    this._priorityType = 1;
    this._tileId = 0;
    this._characterName = "";
    this._characterIndex = 0;
    this._isObjectCharacter = false;
    this._walkAnime = true;
    this._stepAnime = false;
    this._directionFix = false;
    this._through = false;
    this._transparent = false;
    this._bushDepth = 0;
    this._animationId = 0;
    this._balloonId = 0;
    this._animationPlaying = false;
    this._balloonPlaying = false;
    this._animationCount = 0;
    this._stopCount = 0;
    this._jumpCount = 0;
    this._jumpPeak = 0;
    this._movementSuccess = true;
  }
  pos(x, y) {
    return this._x === x && this._y === y;
  }
  posNt(x, y) {
    // No through
    return this.pos(x, y) && !this.isThrough();
  }
  moveSpeed() {
    return this._moveSpeed;
  }
  setMoveSpeed(moveSpeed) {
    this._moveSpeed = moveSpeed;
  }
  moveFrequency() {
    return this._moveFrequency;
  }
  setMoveFrequency(moveFrequency) {
    this._moveFrequency = moveFrequency;
  }
  opacity() {
    return this._opacity;
  }
  setOpacity(opacity) {
    this._opacity = opacity;
  }
  blendMode() {
    return this._blendMode;
  }
  setBlendMode(blendMode) {
    this._blendMode = blendMode;
  }
  isNormalPriority() {
    return this._priorityType === 1;
  }
  setPriorityType(priorityType) {
    this._priorityType = priorityType;
  }
  isMoving() {
    return this._realX !== this._x || this._realY !== this._y;
  }
  isJumping() {
    return this._jumpCount > 0;
  }
  jumpHeight() {
    return (
      (this._jumpPeak * this._jumpPeak -
        Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) /
      2
    );
  }
  isStopping() {
    return !this.isMoving() && !this.isJumping();
  }
  checkStop(threshold) {
    return this._stopCount > threshold;
  }
  resetStopCount() {
    this._stopCount = 0;
  }
  realMoveSpeed() {
    return this._moveSpeed + (this.isDashing() ? 1 : 0);
  }
  distancePerFrame() {
    return Math.pow(2, this.realMoveSpeed()) / 256;
  }
  isDashing() {
    return false;
  }
  isDebugThrough() {
    return false;
  }
  straighten() {
    if (this.hasWalkAnime() || this.hasStepAnime()) {
      this._pattern = 1;
    }
    this._animationCount = 0;
  }
  reverseDir(d) {
    return 10 - d;
  }
  canPass(x, y, d) {
    const x2 = $gameMap.roundXWithDirection(x, d);
    const y2 = $gameMap.roundYWithDirection(y, d);
    if (!$gameMap.isValid(x2, y2)) {
      return false;
    }
    if (this.isThrough() || this.isDebugThrough()) {
      return true;
    }
    if (!this.isMapPassable(x, y, d)) {
      return false;
    }
    if (this.isCollidedWithCharacters(x2, y2)) {
      return false;
    }
    return true;
  }
  canPassDiagonally(x, y, horz, vert) {
    const x2 = $gameMap.roundXWithDirection(x, horz);
    const y2 = $gameMap.roundYWithDirection(y, vert);
    if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
      return true;
    }
    if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
      return true;
    }
    return false;
  }
  isMapPassable(x, y, d) {
    const x2 = $gameMap.roundXWithDirection(x, d);
    const y2 = $gameMap.roundYWithDirection(y, d);
    const d2 = this.reverseDir(d);
    return $gameMap.isPassable(x, y, d) && $gameMap.isPassable(x2, y2, d2);
  }
  isCollidedWithCharacters(x, y) {
    return this.isCollidedWithEvents(x, y) || this.isCollidedWithVehicles(x, y);
  }
  isCollidedWithEvents(x, y) {
    const events = $gameMap.eventsXyNt(x, y);
    return events.some((event) => event.isNormalPriority());
  }
  isCollidedWithVehicles(x, y) {
    return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
  }
  setPosition(x, y) {
    this._x = Math.round(x);
    this._y = Math.round(y);
    this._realX = x;
    this._realY = y;
  }
  copyPosition(character) {
    this._x = character._x;
    this._y = character._y;
    this._realX = character._realX;
    this._realY = character._realY;
    this._direction = character._direction;
  }
  locate(x, y) {
    this.setPosition(x, y);
    this.straighten();
    this.refreshBushDepth();
  }
  direction() {
    return this._direction;
  }
  setDirection(d) {
    if (!this.isDirectionFixed() && d) {
      this._direction = d;
    }
    this.resetStopCount();
  }
  isTile() {
    return this._tileId > 0 && this._priorityType === 0;
  }
  isObjectCharacter() {
    return this._isObjectCharacter;
  }
  shiftY() {
    return this.isObjectCharacter() ? 0 : 6;
  }
  scrolledX() {
    return $gameMap.adjustX(this._realX);
  }
  scrolledY() {
    return $gameMap.adjustY(this._realY);
  }
  screenX() {
    const tw = $gameMap.tileWidth();
    return Math.floor(this.scrolledX() * tw + tw / 2);
  }
  screenY() {
    const th = $gameMap.tileHeight();
    return Math.floor(
      this.scrolledY() * th + th - this.shiftY() - this.jumpHeight()
    );
  }
  screenZ() {
    return this._priorityType * 2 + 1;
  }
  isNearTheScreen() {
    const gw = Graphics.width;
    const gh = Graphics.height;
    const tw = $gameMap.tileWidth();
    const th = $gameMap.tileHeight();
    const px = this.scrolledX() * tw + tw / 2 - gw / 2;
    const py = this.scrolledY() * th + th / 2 - gh / 2;
    return px >= -gw && px <= gw && py >= -gh && py <= gh;
  }
  update() {
    if (this.isStopping()) {
      this.updateStop();
    }
    if (this.isJumping()) {
      this.updateJump();
    } else if (this.isMoving()) {
      this.updateMove();
    }
    this.updateAnimation();
  }
  updateStop() {
    this._stopCount++;
  }
  updateJump() {
    this._jumpCount--;
    this._realX =
      (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
    this._realY =
      (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
    this.refreshBushDepth();
    if (this._jumpCount === 0) {
      this._realX = this._x = $gameMap.roundX(this._x);
      this._realY = this._y = $gameMap.roundY(this._y);
    }
  }
  updateMove() {
    if (this._x < this._realX) {
      this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
    }
    if (this._x > this._realX) {
      this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
    }
    if (this._y < this._realY) {
      this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
    }
    if (this._y > this._realY) {
      this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
    }
    if (!this.isMoving()) {
      this.refreshBushDepth();
    }
  }
  updateAnimation() {
    this.updateAnimationCount();
    if (this._animationCount >= this.animationWait()) {
      this.updatePattern();
      this._animationCount = 0;
    }
  }
  animationWait() {
    return (9 - this.realMoveSpeed()) * 3;
  }
  updateAnimationCount() {
    if (this.isMoving() && this.hasWalkAnime()) {
      this._animationCount += 1.5;
    } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
      this._animationCount++;
    }
  }
  updatePattern() {
    if (!this.hasStepAnime() && this._stopCount > 0) {
      this.resetPattern();
    } else {
      this._pattern = (this._pattern + 1) % this.maxPattern();
    }
  }
  maxPattern() {
    return 4;
  }
  pattern() {
    return this._pattern < 3 ? this._pattern : 1;
  }
  setPattern(pattern) {
    this._pattern = pattern;
  }
  isOriginalPattern() {
    return this.pattern() === 1;
  }
  resetPattern() {
    this.setPattern(1);
  }
  refreshBushDepth() {
    if (
      this.isNormalPriority() &&
      !this.isObjectCharacter() &&
      this.isOnBush() &&
      !this.isJumping()
    ) {
      if (!this.isMoving()) {
        this._bushDepth = $gameMap.bushDepth();
      }
    } else {
      this._bushDepth = 0;
    }
  }
  isOnLadder() {
    return $gameMap.isLadder(this._x, this._y);
  }
  isOnBush() {
    return $gameMap.isBush(this._x, this._y);
  }
  terrainTag() {
    return $gameMap.terrainTag(this._x, this._y);
  }
  regionId() {
    return $gameMap.regionId(this._x, this._y);
  }
  increaseSteps() {
    if (this.isOnLadder()) {
      this.setDirection(8);
    }
    this.resetStopCount();
    this.refreshBushDepth();
  }
  tileId() {
    return this._tileId;
  }
  characterName() {
    return this._characterName;
  }
  characterIndex() {
    return this._characterIndex;
  }
  setImage(characterName, characterIndex) {
    this._tileId = 0;
    this._characterName = characterName;
    this._characterIndex = characterIndex;
    this._isObjectCharacter = ImageManager.isObjectCharacter(characterName);
  }
  setTileImage(tileId) {
    this._tileId = tileId;
    this._characterName = "";
    this._characterIndex = 0;
    this._isObjectCharacter = true;
  }
  checkEventTriggerTouchFront(d) {
    const x2 = $gameMap.roundXWithDirection(this._x, d);
    const y2 = $gameMap.roundYWithDirection(this._y, d);
    this.checkEventTriggerTouch(x2, y2);
  }
  checkEventTriggerTouch(/*x, y*/) {
    return false;
  }
  isMovementSucceeded(/*x, y*/) {
    return this._movementSuccess;
  }
  setMovementSuccess(success) {
    this._movementSuccess = success;
  }
  moveStraight(d) {
    this.setMovementSuccess(this.canPass(this._x, this._y, d));
    if (this.isMovementSucceeded()) {
      this.setDirection(d);
      this._x = $gameMap.roundXWithDirection(this._x, d);
      this._y = $gameMap.roundYWithDirection(this._y, d);
      this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
      this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
      this.increaseSteps();
    } else {
      this.setDirection(d);
      this.checkEventTriggerTouchFront(d);
    }
  }
  moveDiagonally(horz, vert) {
    this.setMovementSuccess(
      this.canPassDiagonally(this._x, this._y, horz, vert)
    );
    if (this.isMovementSucceeded()) {
      this._x = $gameMap.roundXWithDirection(this._x, horz);
      this._y = $gameMap.roundYWithDirection(this._y, vert);
      this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
      this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
      this.increaseSteps();
    }
    if (this._direction === this.reverseDir(horz)) {
      this.setDirection(horz);
    }
    if (this._direction === this.reverseDir(vert)) {
      this.setDirection(vert);
    }
  }
  jump(xPlus, yPlus) {
    if (Math.abs(xPlus) > Math.abs(yPlus)) {
      if (xPlus !== 0) {
        this.setDirection(xPlus < 0 ? 4 : 6);
      }
    } else {
      if (yPlus !== 0) {
        this.setDirection(yPlus < 0 ? 8 : 2);
      }
    }
    this._x += xPlus;
    this._y += yPlus;
    const distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
    this._jumpPeak = 10 + distance - this._moveSpeed;
    this._jumpCount = this._jumpPeak * 2;
    this.resetStopCount();
    this.straighten();
  }
  hasWalkAnime() {
    return this._walkAnime;
  }
  setWalkAnime(walkAnime) {
    this._walkAnime = walkAnime;
  }
  hasStepAnime() {
    return this._stepAnime;
  }
  setStepAnime(stepAnime) {
    this._stepAnime = stepAnime;
  }
  isDirectionFixed() {
    return this._directionFix;
  }
  setDirectionFix(directionFix) {
    this._directionFix = directionFix;
  }
  isThrough() {
    return this._through;
  }
  setThrough(through) {
    this._through = through;
  }
  isTransparent() {
    return this._transparent;
  }
  bushDepth() {
    return this._bushDepth;
  }
  setTransparent(transparent) {
    this._transparent = transparent;
  }
  startAnimation() {
    this._animationPlaying = true;
  }
  startBalloon() {
    this._balloonPlaying = true;
  }
  isAnimationPlaying() {
    return this._animationPlaying;
  }
  isBalloonPlaying() {
    return this._balloonPlaying;
  }
  endAnimation() {
    this._animationPlaying = false;
  }
  endBalloon() {
    this._balloonPlaying = false;
  }
}

Object.defineProperties(Game_CharacterBase.prototype, {
  x: {
    get: function () {
      return this._x;
    },
    configurable: true,
  },
  y: {
    get: function () {
      return this._y;
    },
    configurable: true,
  },
});

//-----------------------------------------------------------------------------
// Game_Character
//
// The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.

class Game_Character {
  _moveRouteForcing: boolean;
  _moveRoute: null;
  _moveRouteIndex: number;
  _originalMoveRoute: null;
  _originalMoveRouteIndex: number;
  _waitCount: number;
  static ROUTE_END: any;
  static ROUTE_MOVE_DOWN: any;
  static ROUTE_MOVE_LEFT: any;
  static ROUTE_MOVE_RIGHT: any;
  static ROUTE_MOVE_UP: any;
  static ROUTE_MOVE_LOWER_L: any;
  static ROUTE_MOVE_LOWER_R: any;
  static ROUTE_MOVE_UPPER_L: any;
  static ROUTE_MOVE_UPPER_R: any;
  static ROUTE_MOVE_RANDOM: any;
  static ROUTE_MOVE_TOWARD: any;
  static ROUTE_MOVE_AWAY: any;
  static ROUTE_MOVE_FORWARD: any;
  static ROUTE_MOVE_BACKWARD: any;
  static ROUTE_JUMP: any;
  static ROUTE_WAIT: any;
  static ROUTE_TURN_DOWN: any;
  static ROUTE_TURN_LEFT: any;
  static ROUTE_TURN_RIGHT: any;
  static ROUTE_TURN_UP: any;
  static ROUTE_TURN_90D_R: any;
  static ROUTE_TURN_90D_L: any;
  static ROUTE_TURN_180D: any;
  static ROUTE_TURN_90D_R_L: any;
  static ROUTE_TURN_RANDOM: any;
  static ROUTE_TURN_TOWARD: any;
  static ROUTE_TURN_AWAY: any;
  static ROUTE_SWITCH_ON: any;
  static ROUTE_SWITCH_OFF: any;
  static ROUTE_CHANGE_SPEED: any;
  static ROUTE_CHANGE_FREQ: any;
  static ROUTE_WALK_ANIME_ON: any;
  static ROUTE_WALK_ANIME_OFF: any;
  static ROUTE_STEP_ANIME_ON: any;
  static ROUTE_STEP_ANIME_OFF: any;
  static ROUTE_DIR_FIX_ON: any;
  static ROUTE_DIR_FIX_OFF: any;
  static ROUTE_THROUGH_ON: any;
  static ROUTE_THROUGH_OFF: any;
  static ROUTE_TRANSPARENT_ON: any;
  static ROUTE_TRANSPARENT_OFF: any;
  static ROUTE_CHANGE_IMAGE: any;
  static ROUTE_CHANGE_OPACITY: any;
  static ROUTE_CHANGE_BLEND_MODE: any;
  static ROUTE_PLAY_SE: any;
  static ROUTE_SCRIPT: any;
  isStopping: any;
  isMapPassable: any;
  increaseSteps: any;
  update: any;
  pos: any;
  screenY: any;
  isCollidedWithCharacters: any;
  constructor() {}
  initialize() {
    Game_CharacterBase.prototype.initialize.call(this);
  }
  initMembers() {
    Game_CharacterBase.prototype.initMembers.call(this);
    this._moveRouteForcing = false;
    this._moveRoute = null;
    this._moveRouteIndex = 0;
    this._originalMoveRoute = null;
    this._originalMoveRouteIndex = 0;
    this._waitCount = 0;
  }
  memorizeMoveRoute() {
    this._originalMoveRoute = this._moveRoute;
    this._originalMoveRouteIndex = this._moveRouteIndex;
  }
  restoreMoveRoute() {
    this._moveRoute = this._originalMoveRoute;
    this._moveRouteIndex = this._originalMoveRouteIndex;
    this._originalMoveRoute = null;
  }
  isMoveRouteForcing() {
    return this._moveRouteForcing;
  }
  setMoveRoute(moveRoute) {
    if (this._moveRouteForcing) {
      this._originalMoveRoute = moveRoute;
      this._originalMoveRouteIndex = 0;
    } else {
      this._moveRoute = moveRoute;
      this._moveRouteIndex = 0;
    }
  }
  forceMoveRoute(moveRoute) {
    if (!this._originalMoveRoute) {
      this.memorizeMoveRoute();
    }
    this._moveRoute = moveRoute;
    this._moveRouteIndex = 0;
    this._moveRouteForcing = true;
    this._waitCount = 0;
  }
  updateStop() {
    Game_CharacterBase.prototype.updateStop.call(this);
    if (this._moveRouteForcing) {
      this.updateRoutineMove();
    }
  }
  updateRoutineMove() {
    if (this._waitCount > 0) {
      this._waitCount--;
    } else {
      this.setMovementSuccess(true);
      const command = this._moveRoute.list[this._moveRouteIndex];
      if (command) {
        this.processMoveCommand(command);
        this.advanceMoveRouteIndex();
      }
    }
  }
  setMovementSuccess(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  processMoveCommand(command) {
    const gc = Game_Character;
    const params = command.parameters;
    switch (command.code) {
      case gc.ROUTE_END:
        this.processRouteEnd();
        break;
      case gc.ROUTE_MOVE_DOWN:
        this.moveStraight(2);
        break;
      case gc.ROUTE_MOVE_LEFT:
        this.moveStraight(4);
        break;
      case gc.ROUTE_MOVE_RIGHT:
        this.moveStraight(6);
        break;
      case gc.ROUTE_MOVE_UP:
        this.moveStraight(8);
        break;
      case gc.ROUTE_MOVE_LOWER_L:
        this.moveDiagonally(4, 2);
        break;
      case gc.ROUTE_MOVE_LOWER_R:
        this.moveDiagonally(6, 2);
        break;
      case gc.ROUTE_MOVE_UPPER_L:
        this.moveDiagonally(4, 8);
        break;
      case gc.ROUTE_MOVE_UPPER_R:
        this.moveDiagonally(6, 8);
        break;
      case gc.ROUTE_MOVE_RANDOM:
        this.moveRandom();
        break;
      case gc.ROUTE_MOVE_TOWARD:
        this.moveTowardPlayer();
        break;
      case gc.ROUTE_MOVE_AWAY:
        this.moveAwayFromPlayer();
        break;
      case gc.ROUTE_MOVE_FORWARD:
        this.moveForward();
        break;
      case gc.ROUTE_MOVE_BACKWARD:
        this.moveBackward();
        break;
      case gc.ROUTE_JUMP:
        this.jump(params[0], params[1]);
        break;
      case gc.ROUTE_WAIT:
        this._waitCount = params[0] - 1;
        break;
      case gc.ROUTE_TURN_DOWN:
        this.setDirection(2);
        break;
      case gc.ROUTE_TURN_LEFT:
        this.setDirection(4);
        break;
      case gc.ROUTE_TURN_RIGHT:
        this.setDirection(6);
        break;
      case gc.ROUTE_TURN_UP:
        this.setDirection(8);
        break;
      case gc.ROUTE_TURN_90D_R:
        this.turnRight90();
        break;
      case gc.ROUTE_TURN_90D_L:
        this.turnLeft90();
        break;
      case gc.ROUTE_TURN_180D:
        this.turn180();
        break;
      case gc.ROUTE_TURN_90D_R_L:
        this.turnRightOrLeft90();
        break;
      case gc.ROUTE_TURN_RANDOM:
        this.turnRandom();
        break;
      case gc.ROUTE_TURN_TOWARD:
        this.turnTowardPlayer();
        break;
      case gc.ROUTE_TURN_AWAY:
        this.turnAwayFromPlayer();
        break;
      case gc.ROUTE_SWITCH_ON:
        $gameSwitches.setValue(params[0], true);
        break;
      case gc.ROUTE_SWITCH_OFF:
        $gameSwitches.setValue(params[0], false);
        break;
      case gc.ROUTE_CHANGE_SPEED:
        this.setMoveSpeed(params[0]);
        break;
      case gc.ROUTE_CHANGE_FREQ:
        this.setMoveFrequency(params[0]);
        break;
      case gc.ROUTE_WALK_ANIME_ON:
        this.setWalkAnime(true);
        break;
      case gc.ROUTE_WALK_ANIME_OFF:
        this.setWalkAnime(false);
        break;
      case gc.ROUTE_STEP_ANIME_ON:
        this.setStepAnime(true);
        break;
      case gc.ROUTE_STEP_ANIME_OFF:
        this.setStepAnime(false);
        break;
      case gc.ROUTE_DIR_FIX_ON:
        this.setDirectionFix(true);
        break;
      case gc.ROUTE_DIR_FIX_OFF:
        this.setDirectionFix(false);
        break;
      case gc.ROUTE_THROUGH_ON:
        this.setThrough(true);
        break;
      case gc.ROUTE_THROUGH_OFF:
        this.setThrough(false);
        break;
      case gc.ROUTE_TRANSPARENT_ON:
        this.setTransparent(true);
        break;
      case gc.ROUTE_TRANSPARENT_OFF:
        this.setTransparent(false);
        break;
      case gc.ROUTE_CHANGE_IMAGE:
        this.setImage(params[0], params[1]);
        break;
      case gc.ROUTE_CHANGE_OPACITY:
        this.setOpacity(params[0]);
        break;
      case gc.ROUTE_CHANGE_BLEND_MODE:
        this.setBlendMode(params[0]);
        break;
      case gc.ROUTE_PLAY_SE:
        AudioManager.playSe(params[0]);
        break;
      case gc.ROUTE_SCRIPT:
        eval(params[0]);
        break;
    }
  }
  moveStraight(arg0: number) {
    throw new Error("Method not implemented.");
  }
  moveDiagonally(arg0: number, arg1: number) {
    throw new Error("Method not implemented.");
  }
  jump(arg0: any, arg1: any) {
    throw new Error("Method not implemented.");
  }
  setDirection(arg0: number) {
    throw new Error("Method not implemented.");
  }
  setMoveSpeed(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setMoveFrequency(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setWalkAnime(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setStepAnime(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setDirectionFix(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setThrough(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setTransparent(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setImage(arg0: any, arg1: any) {
    throw new Error("Method not implemented.");
  }
  setOpacity(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setBlendMode(arg0: any) {
    throw new Error("Method not implemented.");
  }
  deltaXFrom(x) {
    return $gameMap.deltaX(this.x, x);
  }
  x(x: any, x1: any) {
    throw new Error("Method not implemented.");
  }
  deltaYFrom(y) {
    return $gameMap.deltaY(this.y, y);
  }
  y(y: any, y1: any) {
    throw new Error("Method not implemented.");
  }
  moveRandom() {
    const d = 2 + Math.randomInt(4) * 2;
    if (this.canPass(this.x, this.y, d)) {
      this.moveStraight(d);
    }
  }
  canPass(x: any, y: any, d: number) {
    throw new Error("Method not implemented.");
  }
  moveTowardCharacter(character) {
    const sx = this.deltaXFrom(character.x);
    const sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
      this.moveStraight(sx > 0 ? 4 : 6);
      if (!this.isMovementSucceeded() && sy !== 0) {
        this.moveStraight(sy > 0 ? 8 : 2);
      }
    } else if (sy !== 0) {
      this.moveStraight(sy > 0 ? 8 : 2);
      if (!this.isMovementSucceeded() && sx !== 0) {
        this.moveStraight(sx > 0 ? 4 : 6);
      }
    }
  }
  isMovementSucceeded() {
    throw new Error("Method not implemented.");
  }
  moveAwayFromCharacter(character) {
    const sx = this.deltaXFrom(character.x);
    const sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
      this.moveStraight(sx > 0 ? 6 : 4);
      if (!this.isMovementSucceeded() && sy !== 0) {
        this.moveStraight(sy > 0 ? 2 : 8);
      }
    } else if (sy !== 0) {
      this.moveStraight(sy > 0 ? 2 : 8);
      if (!this.isMovementSucceeded() && sx !== 0) {
        this.moveStraight(sx > 0 ? 6 : 4);
      }
    }
  }
  turnTowardCharacter(character) {
    const sx = this.deltaXFrom(character.x);
    const sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
      this.setDirection(sx > 0 ? 4 : 6);
    } else if (sy !== 0) {
      this.setDirection(sy > 0 ? 8 : 2);
    }
  }
  turnAwayFromCharacter(character) {
    const sx = this.deltaXFrom(character.x);
    const sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
      this.setDirection(sx > 0 ? 6 : 4);
    } else if (sy !== 0) {
      this.setDirection(sy > 0 ? 2 : 8);
    }
  }
  turnTowardPlayer() {
    this.turnTowardCharacter($gamePlayer);
  }
  turnAwayFromPlayer() {
    this.turnAwayFromCharacter($gamePlayer);
  }
  moveTowardPlayer() {
    this.moveTowardCharacter($gamePlayer);
  }
  moveAwayFromPlayer() {
    this.moveAwayFromCharacter($gamePlayer);
  }
  moveForward() {
    this.moveStraight(this.direction());
  }
  direction(): any {
    throw new Error("Method not implemented.");
  }
  moveBackward() {
    const lastDirectionFix = this.isDirectionFixed();
    this.setDirectionFix(true);
    this.moveStraight(this.reverseDir(this.direction()));
    this.setDirectionFix(lastDirectionFix);
  }
  isDirectionFixed() {
    throw new Error("Method not implemented.");
  }
  reverseDir(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  processRouteEnd() {
    if (this._moveRoute.repeat) {
      this._moveRouteIndex = -1;
    } else if (this._moveRouteForcing) {
      this._moveRouteForcing = false;
      this.restoreMoveRoute();
      this.setMovementSuccess(false);
    }
  }
  advanceMoveRouteIndex() {
    const moveRoute = this._moveRoute;
    if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
      let numCommands = moveRoute.list.length - 1;
      this._moveRouteIndex++;
      if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
        this._moveRouteIndex = 0;
      }
    }
  }
  turnRight90() {
    switch (this.direction()) {
      case 2:
        this.setDirection(4);
        break;
      case 4:
        this.setDirection(8);
        break;
      case 6:
        this.setDirection(2);
        break;
      case 8:
        this.setDirection(6);
        break;
    }
  }
  turnLeft90() {
    switch (this.direction()) {
      case 2:
        this.setDirection(6);
        break;
      case 4:
        this.setDirection(2);
        break;
      case 6:
        this.setDirection(8);
        break;
      case 8:
        this.setDirection(4);
        break;
    }
  }
  turn180() {
    this.setDirection(this.reverseDir(this.direction()));
  }
  turnRightOrLeft90() {
    switch (Math.randomInt(2)) {
      case 0:
        this.turnRight90();
        break;
      case 1:
        this.turnLeft90();
        break;
    }
  }
  turnRandom() {
    this.setDirection(2 + Math.randomInt(4) * 2);
  }
  swap(character) {
    const newX = character.x;
    const newY = character.y;
    character.locate(this.x, this.y);
    this.locate(newX, newY);
  }
  locate(newX: any, newY: any) {
    throw new Error("Method not implemented.");
  }
  findDirectionTo(goalX, goalY) {
    const searchLimit = this.searchLimit();
    const mapWidth = $gameMap.width();
    const nodeList = [];
    const openList = [];
    const closedList = [];
    const start = {};
    let best = start;

    if (this.x === goalX && this.y === goalY) {
      return 0;
    }

    start.parent = null;
    start.x = this.x;
    start.y = this.y;
    start.g = 0;
    start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
    nodeList.push(start);
    openList.push(start.y * mapWidth + start.x);

    while (nodeList.length > 0) {
      let bestIndex = 0;
      for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].f < nodeList[bestIndex].f) {
          bestIndex = i;
        }
      }

      const current = nodeList[bestIndex];
      const x1 = current.x;
      const y1 = current.y;
      const pos1 = y1 * mapWidth + x1;
      const g1 = current.g;

      nodeList.splice(bestIndex, 1);
      openList.splice(openList.indexOf(pos1), 1);
      closedList.push(pos1);

      if (current.x === goalX && current.y === goalY) {
        best = current;
        break;
      }

      if (g1 >= searchLimit) {
        continue;
      }

      for (let j = 0; j < 4; j++) {
        const direction = 2 + j * 2;
        const x2 = $gameMap.roundXWithDirection(x1, direction);
        const y2 = $gameMap.roundYWithDirection(y1, direction);
        const pos2 = y2 * mapWidth + x2;

        if (closedList.includes(pos2)) {
          continue;
        }
        if (!this.canPass(x1, y1, direction)) {
          continue;
        }

        const g2 = g1 + 1;
        const index2 = openList.indexOf(pos2);

        if (index2 < 0 || g2 < nodeList[index2].g) {
          let neighbor = {};
          if (index2 >= 0) {
            neighbor = nodeList[index2];
          } else {
            nodeList.push(neighbor);
            openList.push(pos2);
          }
          neighbor.parent = current;
          neighbor.x = x2;
          neighbor.y = y2;
          neighbor.g = g2;
          neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
          if (!best || neighbor.f - neighbor.g < best.f - best.g) {
            best = neighbor;
          }
        }
      }
    }

    let node = best;
    while (node.parent && node.parent !== start) {
      node = node.parent;
    }

    const deltaX1 = $gameMap.deltaX(node.x, start.x);
    const deltaY1 = $gameMap.deltaY(node.y, start.y);
    if (deltaY1 > 0) {
      return 2;
    } else if (deltaX1 < 0) {
      return 4;
    } else if (deltaX1 > 0) {
      return 6;
    } else if (deltaY1 < 0) {
      return 8;
    }

    const deltaX2 = this.deltaXFrom(goalX);
    const deltaY2 = this.deltaYFrom(goalY);
    if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
      return deltaX2 > 0 ? 4 : 6;
    } else if (deltaY2 !== 0) {
      return deltaY2 > 0 ? 8 : 2;
    }

    return 0;
  }
  searchLimit() {
    return 12;
  }
}

Game_Character.prototype = Object.create(Game_CharacterBase.prototype);
Game_Character.ROUTE_END = 0;
Game_Character.ROUTE_MOVE_DOWN = 1;
Game_Character.ROUTE_MOVE_LEFT = 2;
Game_Character.ROUTE_MOVE_RIGHT = 3;
Game_Character.ROUTE_MOVE_UP = 4;
Game_Character.ROUTE_MOVE_LOWER_L = 5;
Game_Character.ROUTE_MOVE_LOWER_R = 6;
Game_Character.ROUTE_MOVE_UPPER_L = 7;
Game_Character.ROUTE_MOVE_UPPER_R = 8;
Game_Character.ROUTE_MOVE_RANDOM = 9;
Game_Character.ROUTE_MOVE_TOWARD = 10;
Game_Character.ROUTE_MOVE_AWAY = 11;
Game_Character.ROUTE_MOVE_FORWARD = 12;
Game_Character.ROUTE_MOVE_BACKWARD = 13;
Game_Character.ROUTE_JUMP = 14;
Game_Character.ROUTE_WAIT = 15;
Game_Character.ROUTE_TURN_DOWN = 16;
Game_Character.ROUTE_TURN_LEFT = 17;
Game_Character.ROUTE_TURN_RIGHT = 18;
Game_Character.ROUTE_TURN_UP = 19;
Game_Character.ROUTE_TURN_90D_R = 20;
Game_Character.ROUTE_TURN_90D_L = 21;
Game_Character.ROUTE_TURN_180D = 22;
Game_Character.ROUTE_TURN_90D_R_L = 23;
Game_Character.ROUTE_TURN_RANDOM = 24;
Game_Character.ROUTE_TURN_TOWARD = 25;
Game_Character.ROUTE_TURN_AWAY = 26;
Game_Character.ROUTE_SWITCH_ON = 27;
Game_Character.ROUTE_SWITCH_OFF = 28;
Game_Character.ROUTE_CHANGE_SPEED = 29;
Game_Character.ROUTE_CHANGE_FREQ = 30;
Game_Character.ROUTE_WALK_ANIME_ON = 31;
Game_Character.ROUTE_WALK_ANIME_OFF = 32;
Game_Character.ROUTE_STEP_ANIME_ON = 33;
Game_Character.ROUTE_STEP_ANIME_OFF = 34;
Game_Character.ROUTE_DIR_FIX_ON = 35;
Game_Character.ROUTE_DIR_FIX_OFF = 36;
Game_Character.ROUTE_THROUGH_ON = 37;
Game_Character.ROUTE_THROUGH_OFF = 38;
Game_Character.ROUTE_TRANSPARENT_ON = 39;
Game_Character.ROUTE_TRANSPARENT_OFF = 40;
Game_Character.ROUTE_CHANGE_IMAGE = 41;
Game_Character.ROUTE_CHANGE_OPACITY = 42;
Game_Character.ROUTE_CHANGE_BLEND_MODE = 43;
Game_Character.ROUTE_PLAY_SE = 44;
Game_Character.ROUTE_SCRIPT = 45;

//-----------------------------------------------------------------------------
// Game_Player
//
// The game object class for the player. It contains event starting
// determinants and map scrolling functions.

class Game_Player {
  _vehicleType: string;
  _vehicleGettingOn: boolean;
  _vehicleGettingOff: boolean;
  _dashing: boolean;
  _needsMapReload: boolean;
  _transferring: boolean;
  _newMapId: number;
  _newX: number;
  _newY: number;
  _newDirection: number;
  _fadeType: number;
  _followers: Game_Followers;
  _encounterCount: number;
  x: any;
  y: any;
  constructor() {}
  initialize() {
    Game_Character.prototype.initialize.call(this);
    this.setTransparent($dataSystem.optTransparent);
  }
  setTransparent(optTransparent: any) {
    throw new Error("Method not implemented.");
  }
  initMembers() {
    Game_Character.prototype.initMembers.call(this);
    this._vehicleType = "walk";
    this._vehicleGettingOn = false;
    this._vehicleGettingOff = false;
    this._dashing = false;
    this._needsMapReload = false;
    this._transferring = false;
    this._newMapId = 0;
    this._newX = 0;
    this._newY = 0;
    this._newDirection = 0;
    this._fadeType = 0;
    this._followers = new Game_Followers();
    this._encounterCount = 0;
  }
  clearTransferInfo() {
    this._transferring = false;
    this._newMapId = 0;
    this._newX = 0;
    this._newY = 0;
    this._newDirection = 0;
  }
  followers() {
    return this._followers;
  }
  refresh() {
    const actor = $gameParty.leader();
    const characterName = actor ? actor.characterName() : "";
    const characterIndex = actor ? actor.characterIndex() : 0;
    this.setImage(characterName, characterIndex);
    this._followers.refresh();
  }
  setImage(characterName: any, characterIndex: any) {
    throw new Error("Method not implemented.");
  }
  isStopping() {
    if (this._vehicleGettingOn || this._vehicleGettingOff) {
      return false;
    }
    return Game_Character.prototype.isStopping.call(this);
  }
  reserveTransfer(mapId, x, y, d, fadeType) {
    this._transferring = true;
    this._newMapId = mapId;
    this._newX = x;
    this._newY = y;
    this._newDirection = d;
    this._fadeType = fadeType;
  }
  setupForNewGame() {
    const mapId = $dataSystem.startMapId;
    const x = $dataSystem.startX;
    const y = $dataSystem.startY;
    this.reserveTransfer(mapId, x, y, 2, 0);
  }
  requestMapReload() {
    this._needsMapReload = true;
  }
  isTransferring() {
    return this._transferring;
  }
  newMapId() {
    return this._newMapId;
  }
  fadeType() {
    return this._fadeType;
  }
  performTransfer() {
    if (this.isTransferring()) {
      this.setDirection(this._newDirection);
      if (this._newMapId !== $gameMap.mapId() || this._needsMapReload) {
        $gameMap.setup(this._newMapId);
        this._needsMapReload = false;
      }
      this.locate(this._newX, this._newY);
      this.refresh();
      this.clearTransferInfo();
    }
  }
  setDirection(_newDirection: any) {
    throw new Error("Method not implemented.");
  }
  isMapPassable(x, y, d) {
    const vehicle = this.vehicle();
    if (vehicle) {
      return vehicle.isMapPassable(x, y, d);
    } else {
      return Game_Character.prototype.isMapPassable.call(this, x, y, d);
    }
  }
  vehicle() {
    return $gameMap.vehicle(this._vehicleType);
  }
  isInBoat() {
    return this._vehicleType === "boat";
  }
  isInShip() {
    return this._vehicleType === "ship";
  }
  isInAirship() {
    return this._vehicleType === "airship";
  }
  isInVehicle() {
    return this.isInBoat() || this.isInShip() || this.isInAirship();
  }
  isNormal() {
    return this._vehicleType === "walk" && !this.isMoveRouteForcing();
  }
  isMoveRouteForcing() {
    throw new Error("Method not implemented.");
  }
  isDashing() {
    return this._dashing;
  }
  isDebugThrough() {
    return Input.isPressed("control") && $gameTemp.isPlaytest();
  }
  isCollided(x, y) {
    if (this.isThrough()) {
      return false;
    } else {
      return this.pos(x, y) || this._followers.isSomeoneCollided(x, y);
    }
  }
  isThrough() {
    throw new Error("Method not implemented.");
  }
  pos(x: any, y: any) {
    throw new Error("Method not implemented.");
  }
  centerX() {
    return ($gameMap.screenTileX() - 1) / 2;
  }
  centerY() {
    return ($gameMap.screenTileY() - 1) / 2;
  }
  center(x, y) {
    return $gameMap.setDisplayPos(x - this.centerX(), y - this.centerY());
  }
  locate(x, y) {
    Game_Character.prototype.locate.call(this, x, y);
    this.center(x, y);
    this.makeEncounterCount();
    if (this.isInVehicle()) {
      this.vehicle().refresh();
    }
    this._followers.synchronize(x, y, this.direction());
  }
  direction(): any {
    throw new Error("Method not implemented.");
  }
  increaseSteps() {
    Game_Character.prototype.increaseSteps.call(this);
    if (this.isNormal()) {
      $gameParty.increaseSteps();
    }
  }
  makeEncounterCount() {
    const n = $gameMap.encounterStep();
    this._encounterCount = Math.randomInt(n) + Math.randomInt(n) + 1;
  }
  makeEncounterTroopId() {
    const encounterList = [];
    let weightSum = 0;
    for (const encounter of $gameMap.encounterList()) {
      if (this.meetsEncounterConditions(encounter)) {
        encounterList.push(encounter);
        weightSum += encounter.weight;
      }
    }
    if (weightSum > 0) {
      let value = Math.randomInt(weightSum);
      for (const encounter of encounterList) {
        value -= encounter.weight;
        if (value < 0) {
          return encounter.troopId;
        }
      }
    }
    return 0;
  }
  meetsEncounterConditions(encounter) {
    return (
      encounter.regionSet.length === 0 ||
      encounter.regionSet.includes(this.regionId())
    );
  }
  regionId(): any {
    throw new Error("Method not implemented.");
  }
  executeEncounter() {
    if (!$gameMap.isEventRunning() && this._encounterCount <= 0) {
      this.makeEncounterCount();
      const troopId = this.makeEncounterTroopId();
      if ($dataTroops[troopId]) {
        BattleManager.setup(troopId, true, false);
        BattleManager.onEncounter();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  startMapEvent(x, y, triggers, normal) {
    if (!$gameMap.isEventRunning()) {
      for (const event of $gameMap.eventsXy(x, y)) {
        if (
          event.isTriggerIn(triggers) &&
          event.isNormalPriority() === normal
        ) {
          event.start();
        }
      }
    }
  }
  moveByInput() {
    if (!this.isMoving() && this.canMove()) {
      let direction = this.getInputDirection();
      if (direction > 0) {
        $gameTemp.clearDestination();
      } else if ($gameTemp.isDestinationValid()) {
        const x = $gameTemp.destinationX();
        const y = $gameTemp.destinationY();
        direction = this.findDirectionTo(x, y);
      }
      if (direction > 0) {
        this.executeMove(direction);
      }
    }
  }
  isMoving() {
    throw new Error("Method not implemented.");
  }
  findDirectionTo(x: any, y: any): any {
    throw new Error("Method not implemented.");
  }
  canMove() {
    if ($gameMap.isEventRunning() || $gameMessage.isBusy()) {
      return false;
    }
    if (this.isMoveRouteForcing() || this.areFollowersGathering()) {
      return false;
    }
    if (this._vehicleGettingOn || this._vehicleGettingOff) {
      return false;
    }
    if (this.isInVehicle() && !this.vehicle().canMove()) {
      return false;
    }
    return true;
  }
  getInputDirection() {
    return Input.dir4;
  }
  executeMove(direction) {
    this.moveStraight(direction);
  }
  update(sceneActive) {
    const lastScrolledX = this.scrolledX();
    const lastScrolledY = this.scrolledY();
    const wasMoving = this.isMoving();
    this.updateDashing();
    if (sceneActive) {
      this.moveByInput();
    }
    Game_Character.prototype.update.call(this);
    this.updateScroll(lastScrolledX, lastScrolledY);
    this.updateVehicle();
    if (!this.isMoving()) {
      this.updateNonmoving(wasMoving, sceneActive);
    }
    this._followers.update();
  }
  scrolledX() {
    throw new Error("Method not implemented.");
  }
  scrolledY() {
    throw new Error("Method not implemented.");
  }
  updateDashing() {
    if (this.isMoving()) {
      return;
    }
    if (this.canMove() && !this.isInVehicle() && !$gameMap.isDashDisabled()) {
      this._dashing =
        this.isDashButtonPressed() || $gameTemp.isDestinationValid();
    } else {
      this._dashing = false;
    }
  }
  isDashButtonPressed() {
    const shift = Input.isPressed("shift");
    if (ConfigManager.alwaysDash) {
      return !shift;
    } else {
      return shift;
    }
  }
  updateScroll(lastScrolledX, lastScrolledY) {
    const x1 = lastScrolledX;
    const y1 = lastScrolledY;
    const x2 = this.scrolledX();
    const y2 = this.scrolledY();
    if (y2 > y1 && y2 > this.centerY()) {
      $gameMap.scrollDown(y2 - y1);
    }
    if (x2 < x1 && x2 < this.centerX()) {
      $gameMap.scrollLeft(x1 - x2);
    }
    if (x2 > x1 && x2 > this.centerX()) {
      $gameMap.scrollRight(x2 - x1);
    }
    if (y2 < y1 && y2 < this.centerY()) {
      $gameMap.scrollUp(y1 - y2);
    }
  }
  updateVehicle() {
    if (this.isInVehicle() && !this.areFollowersGathering()) {
      if (this._vehicleGettingOn) {
        this.updateVehicleGetOn();
      } else if (this._vehicleGettingOff) {
        this.updateVehicleGetOff();
      } else {
        this.vehicle().syncWithPlayer();
      }
    }
  }
  updateVehicleGetOn() {
    if (!this.areFollowersGathering() && !this.isMoving()) {
      this.setDirection(this.vehicle().direction());
      this.setMoveSpeed(this.vehicle().moveSpeed());
      this._vehicleGettingOn = false;
      this.setTransparent(true);
      if (this.isInAirship()) {
        this.setThrough(true);
      }
      this.vehicle().getOn();
    }
  }
  setMoveSpeed(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setThrough(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  updateVehicleGetOff() {
    if (!this.areFollowersGathering() && this.vehicle().isLowest()) {
      this._vehicleGettingOff = false;
      this._vehicleType = "walk";
      this.setTransparent(false);
    }
  }
  updateNonmoving(wasMoving, sceneActive) {
    if (!$gameMap.isEventRunning()) {
      if (wasMoving) {
        $gameParty.onPlayerWalk();
        this.checkEventTriggerHere([1, 2]);
        if ($gameMap.setupStartingEvent()) {
          return;
        }
      }
      if (sceneActive && this.triggerAction()) {
        return;
      }
      if (wasMoving) {
        this.updateEncounterCount();
      } else {
        $gameTemp.clearDestination();
      }
    }
  }
  triggerAction() {
    if (this.canMove()) {
      if (this.triggerButtonAction()) {
        return true;
      }
      if (this.triggerTouchAction()) {
        return true;
      }
    }
    return false;
  }
  triggerButtonAction() {
    if (Input.isTriggered("ok")) {
      if (this.getOnOffVehicle()) {
        return true;
      }
      this.checkEventTriggerHere([0]);
      if ($gameMap.setupStartingEvent()) {
        return true;
      }
      this.checkEventTriggerThere([0, 1, 2]);
      if ($gameMap.setupStartingEvent()) {
        return true;
      }
    }
    return false;
  }
  triggerTouchAction() {
    if ($gameTemp.isDestinationValid()) {
      const direction = this.direction();
      const x1 = this.x;
      const y1 = this.y;
      const x2 = $gameMap.roundXWithDirection(x1, direction);
      const y2 = $gameMap.roundYWithDirection(y1, direction);
      const x3 = $gameMap.roundXWithDirection(x2, direction);
      const y3 = $gameMap.roundYWithDirection(y2, direction);
      const destX = $gameTemp.destinationX();
      const destY = $gameTemp.destinationY();
      if (destX === x1 && destY === y1) {
        return this.triggerTouchActionD1(x1, y1);
      } else if (destX === x2 && destY === y2) {
        return this.triggerTouchActionD2(x2, y2);
      } else if (destX === x3 && destY === y3) {
        return this.triggerTouchActionD3(x2, y2);
      }
    }
    return false;
  }
  triggerTouchActionD1(x1, y1) {
    if ($gameMap.airship().pos(x1, y1)) {
      if (TouchInput.isTriggered() && this.getOnOffVehicle()) {
        return true;
      }
    }
    this.checkEventTriggerHere([0]);
    return $gameMap.setupStartingEvent();
  }
  triggerTouchActionD2(x2, y2) {
    if ($gameMap.boat().pos(x2, y2) || $gameMap.ship().pos(x2, y2)) {
      if (TouchInput.isTriggered() && this.getOnVehicle()) {
        return true;
      }
    }
    if (this.isInBoat() || this.isInShip()) {
      if (TouchInput.isTriggered() && this.getOffVehicle()) {
        return true;
      }
    }
    this.checkEventTriggerThere([0, 1, 2]);
    return $gameMap.setupStartingEvent();
  }
  triggerTouchActionD3(x2, y2) {
    if ($gameMap.isCounter(x2, y2)) {
      this.checkEventTriggerThere([0, 1, 2]);
    }
    return $gameMap.setupStartingEvent();
  }
  updateEncounterCount() {
    if (this.canEncounter()) {
      this._encounterCount -= this.encounterProgressValue();
    }
  }
  canEncounter() {
    return (
      !$gameParty.hasEncounterNone() &&
      $gameSystem.isEncounterEnabled() &&
      !this.isInAirship() &&
      !this.isMoveRouteForcing() &&
      !this.isDebugThrough()
    );
  }
  encounterProgressValue() {
    let value = $gameMap.isBush(this.x, this.y) ? 2 : 1;
    if ($gameParty.hasEncounterHalf()) {
      value *= 0.5;
    }
    if (this.isInShip()) {
      value *= 0.5;
    }
    return value;
  }
  checkEventTriggerHere(triggers) {
    if (this.canStartLocalEvents()) {
      this.startMapEvent(this.x, this.y, triggers, false);
    }
  }
  checkEventTriggerThere(triggers) {
    if (this.canStartLocalEvents()) {
      const direction = this.direction();
      const x1 = this.x;
      const y1 = this.y;
      const x2 = $gameMap.roundXWithDirection(x1, direction);
      const y2 = $gameMap.roundYWithDirection(y1, direction);
      this.startMapEvent(x2, y2, triggers, true);
      if (!$gameMap.isAnyEventStarting() && $gameMap.isCounter(x2, y2)) {
        const x3 = $gameMap.roundXWithDirection(x2, direction);
        const y3 = $gameMap.roundYWithDirection(y2, direction);
        this.startMapEvent(x3, y3, triggers, true);
      }
    }
  }
  checkEventTriggerTouch(x, y) {
    if (this.canStartLocalEvents()) {
      this.startMapEvent(x, y, [1, 2], true);
    }
  }
  canStartLocalEvents() {
    return !this.isInAirship();
  }
  getOnOffVehicle() {
    if (this.isInVehicle()) {
      return this.getOffVehicle();
    } else {
      return this.getOnVehicle();
    }
  }
  getOnVehicle() {
    const direction = this.direction();
    const x1 = this.x;
    const y1 = this.y;
    const x2 = $gameMap.roundXWithDirection(x1, direction);
    const y2 = $gameMap.roundYWithDirection(y1, direction);
    if ($gameMap.airship().pos(x1, y1)) {
      this._vehicleType = "airship";
    } else if ($gameMap.ship().pos(x2, y2)) {
      this._vehicleType = "ship";
    } else if ($gameMap.boat().pos(x2, y2)) {
      this._vehicleType = "boat";
    }
    if (this.isInVehicle()) {
      this._vehicleGettingOn = true;
      if (!this.isInAirship()) {
        this.forceMoveForward();
      }
      this.gatherFollowers();
    }
    return this._vehicleGettingOn;
  }
  getOffVehicle() {
    if (this.vehicle().isLandOk(this.x, this.y, this.direction())) {
      if (this.isInAirship()) {
        this.setDirection(2);
      }
      this._followers.synchronize(this.x, this.y, this.direction());
      this.vehicle().getOff();
      if (!this.isInAirship()) {
        this.forceMoveForward();
        this.setTransparent(false);
      }
      this._vehicleGettingOff = true;
      this.setMoveSpeed(4);
      this.setThrough(false);
      this.makeEncounterCount();
      this.gatherFollowers();
    }
    return this._vehicleGettingOff;
  }
  forceMoveForward() {
    this.setThrough(true);
    this.moveForward();
    this.setThrough(false);
  }
  moveForward() {
    throw new Error("Method not implemented.");
  }
  isOnDamageFloor() {
    return $gameMap.isDamageFloor(this.x, this.y) && !this.isInAirship();
  }
  moveStraight(d) {
    if (this.canPass(this.x, this.y, d)) {
      this._followers.updateMove();
    }
    Game_Character.prototype.moveStraight.call(this, d);
  }
  canPass(x: any, y: any, d: any) {
    throw new Error("Method not implemented.");
  }
  moveDiagonally(horz, vert) {
    if (this.canPassDiagonally(this.x, this.y, horz, vert)) {
      this._followers.updateMove();
    }
    Game_Character.prototype.moveDiagonally.call(this, horz, vert);
  }
  canPassDiagonally(x: any, y: any, horz: any, vert: any) {
    throw new Error("Method not implemented.");
  }
  jump(xPlus, yPlus) {
    Game_Character.prototype.jump.call(this, xPlus, yPlus);
    this._followers.jumpAll();
  }
  showFollowers() {
    this._followers.show();
  }
  hideFollowers() {
    this._followers.hide();
  }
  gatherFollowers() {
    this._followers.gather();
  }
  areFollowersGathering() {
    return this._followers.areGathering();
  }
  areFollowersGathered() {
    return this._followers.areGathered();
  }
}

Game_Player.prototype = Object.create(Game_Character.prototype);
//-----------------------------------------------------------------------------
// Game_Follower
//
// The game object class for a follower. A follower is an allied character,
// other than the front character, displayed in the party.

class Game_Follower {
  _memberIndex: any;
  constructor() {}
  initialize(memberIndex) {
    Game_Character.prototype.initialize.call(this);
    this._memberIndex = memberIndex;
    this.setTransparent($dataSystem.optTransparent);
    this.setThrough(true);
  }
  setTransparent(optTransparent: any) {
    throw new Error("Method not implemented.");
  }
  setThrough(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  refresh() {
    const characterName = this.isVisible() ? this.actor().characterName() : "";
    const characterIndex = this.isVisible() ? this.actor().characterIndex() : 0;
    this.setImage(characterName, characterIndex);
  }
  setImage(characterName: any, characterIndex: any) {
    throw new Error("Method not implemented.");
  }
  actor() {
    return $gameParty.battleMembers()[this._memberIndex];
  }
  isVisible() {
    return this.actor() && $gamePlayer.followers().isVisible();
  }
  isGathered() {
    return !this.isMoving() && this.pos($gamePlayer.x, $gamePlayer.y);
  }
  isMoving() {
    throw new Error("Method not implemented.");
  }
  pos(x: any, y: any) {
    throw new Error("Method not implemented.");
  }
  update() {
    Game_Character.prototype.update.call(this);
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
    this.setOpacity($gamePlayer.opacity());
    this.setBlendMode($gamePlayer.blendMode());
    this.setWalkAnime($gamePlayer.hasWalkAnime());
    this.setStepAnime($gamePlayer.hasStepAnime());
    this.setDirectionFix($gamePlayer.isDirectionFixed());
    this.setTransparent($gamePlayer.isTransparent());
  }
  setMoveSpeed(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setOpacity(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setBlendMode(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setWalkAnime(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setStepAnime(arg0: any) {
    throw new Error("Method not implemented.");
  }
  setDirectionFix(arg0: any) {
    throw new Error("Method not implemented.");
  }
  chaseCharacter(character) {
    const sx = this.deltaXFrom(character.x);
    const sy = this.deltaYFrom(character.y);
    if (sx !== 0 && sy !== 0) {
      this.moveDiagonally(sx > 0 ? 4 : 6, sy > 0 ? 8 : 2);
    } else if (sx !== 0) {
      this.moveStraight(sx > 0 ? 4 : 6);
    } else if (sy !== 0) {
      this.moveStraight(sy > 0 ? 8 : 2);
    }
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
  }
  deltaXFrom(x: any) {
    throw new Error("Method not implemented.");
  }
  deltaYFrom(y: any) {
    throw new Error("Method not implemented.");
  }
  moveDiagonally(arg0: number, arg1: number) {
    throw new Error("Method not implemented.");
  }
  moveStraight(arg0: number) {
    throw new Error("Method not implemented.");
  }
}

Game_Follower.prototype = Object.create(Game_Character.prototype);
//-----------------------------------------------------------------------------
// Game_Followers
//
// The wrapper class for a follower array.

class Game_Followers {
  _visible: any;
  _gathering: boolean;
  _data: never[];
  constructor() {}
  initialize() {
    this._visible = $dataSystem.optFollowers;
    this._gathering = false;
    this._data = [];
    this.setup();
  }
  setup() {
    this._data = [];
    for (let i = 1; i < $gameParty.maxBattleMembers(); i++) {
      this._data.push(new Game_Follower(i));
    }
  }
  isVisible() {
    return this._visible;
  }
  show() {
    this._visible = true;
  }
  hide() {
    this._visible = false;
  }
  data() {
    return this._data.clone();
  }
  reverseData() {
    return this._data.clone().reverse();
  }
  follower(index) {
    return this._data[index];
  }
  refresh() {
    for (const follower of this._data) {
      follower.refresh();
    }
  }
  update() {
    if (this.areGathering()) {
      if (!this.areMoving()) {
        this.updateMove();
      }
      if (this.areGathered()) {
        this._gathering = false;
      }
    }
    for (const follower of this._data) {
      follower.update();
    }
  }
  updateMove() {
    for (let i = this._data.length - 1; i >= 0; i--) {
      const precedingCharacter = i > 0 ? this._data[i - 1] : $gamePlayer;
      this._data[i].chaseCharacter(precedingCharacter);
    }
  }
  jumpAll() {
    if ($gamePlayer.isJumping()) {
      for (const follower of this._data) {
        const sx = $gamePlayer.deltaXFrom(follower.x);
        const sy = $gamePlayer.deltaYFrom(follower.y);
        follower.jump(sx, sy);
      }
    }
  }
  synchronize(x, y, d) {
    for (const follower of this._data) {
      follower.locate(x, y);
      follower.setDirection(d);
    }
  }
  gather() {
    this._gathering = true;
  }
  areGathering() {
    return this._gathering;
  }
  visibleFollowers() {
    return this._data.filter((follower) => follower.isVisible());
  }
  areMoving() {
    return this.visibleFollowers().some((follower) => follower.isMoving());
  }
  areGathered() {
    return this.visibleFollowers().every((follower) => follower.isGathered());
  }
  isSomeoneCollided(x, y) {
    return this.visibleFollowers().some((follower) => follower.pos(x, y));
  }
}

//-----------------------------------------------------------------------------
// Game_Vehicle
//
// The game object class for a vehicle.

class Game_Vehicle {
  _type: any;
  _mapId: number;
  _altitude: number;
  _driving: boolean;
  _bgm: null;
  constructor() {}
  initialize(type) {
    Game_Character.prototype.initialize.call(this);
    this._type = type;
    this.resetDirection();
    this.initMoveSpeed();
    this.loadSystemSettings();
  }
  initMembers() {
    Game_Character.prototype.initMembers.call(this);
    this._type = "";
    this._mapId = 0;
    this._altitude = 0;
    this._driving = false;
    this._bgm = null;
  }
  isBoat() {
    return this._type === "boat";
  }
  isShip() {
    return this._type === "ship";
  }
  isAirship() {
    return this._type === "airship";
  }
  resetDirection() {
    this.setDirection(4);
  }
  setDirection(arg0: number) {
    throw new Error("Method not implemented.");
  }
  initMoveSpeed() {
    if (this.isBoat()) {
      this.setMoveSpeed(4);
    } else if (this.isShip()) {
      this.setMoveSpeed(5);
    } else if (this.isAirship()) {
      this.setMoveSpeed(6);
    }
  }
  setMoveSpeed(arg0: number) {
    throw new Error("Method not implemented.");
  }
  vehicle() {
    if (this.isBoat()) {
      return $dataSystem.boat;
    } else if (this.isShip()) {
      return $dataSystem.ship;
    } else if (this.isAirship()) {
      return $dataSystem.airship;
    } else {
      return null;
    }
  }
  loadSystemSettings() {
    const vehicle = this.vehicle();
    this._mapId = vehicle.startMapId;
    this.setPosition(vehicle.startX, vehicle.startY);
    this.setImage(vehicle.characterName, vehicle.characterIndex);
  }
  setPosition(startX: any, startY: any) {
    throw new Error("Method not implemented.");
  }
  setImage(characterName: any, characterIndex: any) {
    throw new Error("Method not implemented.");
  }
  refresh() {
    if (this._driving) {
      this._mapId = $gameMap.mapId();
      this.syncWithPlayer();
    } else if (this._mapId === $gameMap.mapId()) {
      this.locate(this.x, this.y);
    }
    if (this.isAirship()) {
      this.setPriorityType(this._driving ? 2 : 0);
    } else {
      this.setPriorityType(1);
    }
    this.setWalkAnime(this._driving);
    this.setStepAnime(this._driving);
    this.setTransparent(this._mapId !== $gameMap.mapId());
  }
  locate(x: any, y: any) {
    throw new Error("Method not implemented.");
  }
  x(x: any, y: any) {
    throw new Error("Method not implemented.");
  }
  y(x: any, y: any) {
    throw new Error("Method not implemented.");
  }
  setPriorityType(arg0: number) {
    throw new Error("Method not implemented.");
  }
  setWalkAnime(_driving: any) {
    throw new Error("Method not implemented.");
  }
  setStepAnime(_driving: any) {
    throw new Error("Method not implemented.");
  }
  setTransparent(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setLocation(mapId, x, y) {
    this._mapId = mapId;
    this.setPosition(x, y);
    this.refresh();
  }
  pos(x, y) {
    if (this._mapId === $gameMap.mapId()) {
      return Game_Character.prototype.pos.call(this, x, y);
    } else {
      return false;
    }
  }
  isMapPassable(x, y, d) {
    const x2 = $gameMap.roundXWithDirection(x, d);
    const y2 = $gameMap.roundYWithDirection(y, d);
    if (this.isBoat()) {
      return $gameMap.isBoatPassable(x2, y2);
    } else if (this.isShip()) {
      return $gameMap.isShipPassable(x2, y2);
    } else if (this.isAirship()) {
      return true;
    } else {
      return false;
    }
  }
  getOn() {
    this._driving = true;
    this.setWalkAnime(true);
    this.setStepAnime(true);
    $gameSystem.saveWalkingBgm();
    this.playBgm();
  }
  getOff() {
    this._driving = false;
    this.setWalkAnime(false);
    this.setStepAnime(false);
    this.resetDirection();
    $gameSystem.replayWalkingBgm();
  }
  setBgm(bgm) {
    this._bgm = bgm;
  }
  playBgm() {
    AudioManager.playBgm(this._bgm || this.vehicle().bgm);
  }
  syncWithPlayer() {
    this.copyPosition($gamePlayer);
    this.refreshBushDepth();
  }
  copyPosition($gamePlayer: any) {
    throw new Error("Method not implemented.");
  }
  refreshBushDepth() {
    throw new Error("Method not implemented.");
  }
  screenY() {
    return Game_Character.prototype.screenY.call(this) - this._altitude;
  }
  shadowX() {
    return this.screenX();
  }
  screenX() {
    throw new Error("Method not implemented.");
  }
  shadowY() {
    return this.screenY() + this._altitude;
  }
  shadowOpacity() {
    return (255 * this._altitude) / this.maxAltitude();
  }
  canMove() {
    if (this.isAirship()) {
      return this.isHighest();
    } else {
      return true;
    }
  }
  update() {
    Game_Character.prototype.update.call(this);
    if (this.isAirship()) {
      this.updateAirship();
    }
  }
  updateAirship() {
    this.updateAirshipAltitude();
    this.setStepAnime(this.isHighest());
    this.setPriorityType(this.isLowest() ? 0 : 2);
  }
  updateAirshipAltitude() {
    if (this._driving && !this.isHighest()) {
      this._altitude++;
    }
    if (!this._driving && !this.isLowest()) {
      this._altitude--;
    }
  }
  maxAltitude() {
    return 48;
  }
  isLowest() {
    return this._altitude <= 0;
  }
  isHighest() {
    return this._altitude >= this.maxAltitude();
  }
  isTakeoffOk() {
    return $gamePlayer.areFollowersGathered();
  }
  isLandOk(x, y, d) {
    if (this.isAirship()) {
      if (!$gameMap.isAirshipLandOk(x, y)) {
        return false;
      }
      if ($gameMap.eventsXy(x, y).length > 0) {
        return false;
      }
    } else {
      const x2 = $gameMap.roundXWithDirection(x, d);
      const y2 = $gameMap.roundYWithDirection(y, d);
      if (!$gameMap.isValid(x2, y2)) {
        return false;
      }
      if (!$gameMap.isPassable(x2, y2, this.reverseDir(d))) {
        return false;
      }
      if (this.isCollidedWithCharacters(x2, y2)) {
        return false;
      }
    }
    return true;
  }
  reverseDir(d: any): any {
    throw new Error("Method not implemented.");
  }
  isCollidedWithCharacters(x2: any, y2: any) {
    throw new Error("Method not implemented.");
  }
}

Game_Vehicle.prototype = Object.create(Game_Character.prototype);
//-----------------------------------------------------------------------------
// Game_Event
//
// The game object class for an event. It contains functionality for event page
// switching and running parallel process events.

class Game_Event {
  _mapId: any;
  _eventId: any;
  _moveType: number;
  _trigger: number;
  _starting: boolean;
  _erased: boolean;
  _pageIndex: number;
  _originalPattern: number;
  _originalDirection: number;
  _prelockDirection: number;
  _locked: boolean;
  _interpreter: null;
  constructor() {}
  initialize(mapId, eventId) {
    Game_Character.prototype.initialize.call(this);
    this._mapId = mapId;
    this._eventId = eventId;
    this.locate(this.event().x, this.event().y);
    this.refresh();
  }
  initMembers() {
    Game_Character.prototype.initMembers.call(this);
    this._moveType = 0;
    this._trigger = 0;
    this._starting = false;
    this._erased = false;
    this._pageIndex = -2;
    this._originalPattern = 1;
    this._originalDirection = 2;
    this._prelockDirection = 0;
    this._locked = false;
  }
  eventId() {
    return this._eventId;
  }
  event() {
    return $dataMap.events[this._eventId];
  }
  page() {
    return this.event().pages[this._pageIndex];
  }
  list() {
    return this.page().list;
  }
  isCollidedWithCharacters(x, y) {
    return (
      Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
      this.isCollidedWithPlayerCharacters(x, y)
    );
  }
  isCollidedWithEvents(x, y) {
    const events = $gameMap.eventsXyNt(x, y);
    return events.length > 0;
  }
  isCollidedWithPlayerCharacters(x, y) {
    return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
  }
  isNormalPriority() {
    throw new Error("Method not implemented.");
  }
  lock() {
    if (!this._locked) {
      this._prelockDirection = this.direction();
      this.turnTowardPlayer();
      this._locked = true;
    }
  }
  direction(): any {
    throw new Error("Method not implemented.");
  }
  turnTowardPlayer() {
    throw new Error("Method not implemented.");
  }
  unlock() {
    if (this._locked) {
      this._locked = false;
      this.setDirection(this._prelockDirection);
    }
  }
  setDirection(_prelockDirection: any) {
    throw new Error("Method not implemented.");
  }
  updateStop() {
    if (this._locked) {
      this.resetStopCount();
    }
    Game_Character.prototype.updateStop.call(this);
    if (!this.isMoveRouteForcing()) {
      this.updateSelfMovement();
    }
  }
  resetStopCount() {
    throw new Error("Method not implemented.");
  }
  isMoveRouteForcing() {
    throw new Error("Method not implemented.");
  }
  updateSelfMovement() {
    if (
      !this._locked &&
      this.isNearTheScreen() &&
      this.checkStop(this.stopCountThreshold())
    ) {
      switch (this._moveType) {
        case 1:
          this.moveTypeRandom();
          break;
        case 2:
          this.moveTypeTowardPlayer();
          break;
        case 3:
          this.moveTypeCustom();
          break;
      }
    }
  }
  isNearTheScreen() {
    throw new Error("Method not implemented.");
  }
  checkStop(arg0: number) {
    throw new Error("Method not implemented.");
  }
  stopCountThreshold() {
    return 30 * (5 - this.moveFrequency());
  }
  moveFrequency() {
    throw new Error("Method not implemented.");
  }
  moveTypeRandom() {
    switch (Math.randomInt(6)) {
      case 0:
      case 1:
        this.moveRandom();
        break;
      case 2:
      case 3:
      case 4:
        this.moveForward();
        break;
      case 5:
        this.resetStopCount();
        break;
    }
  }
  moveRandom() {
    throw new Error("Method not implemented.");
  }
  moveForward() {
    throw new Error("Method not implemented.");
  }
  moveTypeTowardPlayer() {
    if (this.isNearThePlayer()) {
      switch (Math.randomInt(6)) {
        case 0:
        case 1:
        case 2:
        case 3:
          this.moveTowardPlayer();
          break;
        case 4:
          this.moveRandom();
          break;
        case 5:
          this.moveForward();
          break;
      }
    } else {
      this.moveRandom();
    }
  }
  moveTowardPlayer() {
    throw new Error("Method not implemented.");
  }
  isNearThePlayer() {
    const sx = Math.abs(this.deltaXFrom($gamePlayer.x));
    const sy = Math.abs(this.deltaYFrom($gamePlayer.y));
    return sx + sy < 20;
  }
  deltaXFrom(x: any): number {
    throw new Error("Method not implemented.");
  }
  deltaYFrom(y: any): number {
    throw new Error("Method not implemented.");
  }
  moveTypeCustom() {
    this.updateRoutineMove();
  }
  updateRoutineMove() {
    throw new Error("Method not implemented.");
  }
  isStarting() {
    return this._starting;
  }
  clearStartingFlag() {
    this._starting = false;
  }
  isTriggerIn(triggers) {
    return triggers.includes(this._trigger);
  }
  start() {
    const list = this.list();
    if (list && list.length > 1) {
      this._starting = true;
      if (this.isTriggerIn([0, 1, 2])) {
        this.lock();
      }
    }
  }
  erase() {
    this._erased = true;
    this.refresh();
  }
  refresh() {
    const newPageIndex = this._erased ? -1 : this.findProperPageIndex();
    if (this._pageIndex !== newPageIndex) {
      this._pageIndex = newPageIndex;
      this.setupPage();
    }
  }
  findProperPageIndex() {
    const pages = this.event().pages;
    for (let i = pages.length - 1; i >= 0; i--) {
      const page = pages[i];
      if (this.meetsConditions(page)) {
        return i;
      }
    }
    return -1;
  }
  meetsConditions(page) {
    const c = page.conditions;
    if (c.switch1Valid) {
      if (!$gameSwitches.value(c.switch1Id)) {
        return false;
      }
    }
    if (c.switch2Valid) {
      if (!$gameSwitches.value(c.switch2Id)) {
        return false;
      }
    }
    if (c.variableValid) {
      if ($gameVariables.value(c.variableId) < c.variableValue) {
        return false;
      }
    }
    if (c.selfSwitchValid) {
      const key = [this._mapId, this._eventId, c.selfSwitchCh];
      if ($gameSelfSwitches.value(key) !== true) {
        return false;
      }
    }
    if (c.itemValid) {
      const item = $dataItems[c.itemId];
      if (!$gameParty.hasItem(item)) {
        return false;
      }
    }
    if (c.actorValid) {
      const actor = $gameActors.actor(c.actorId);
      if (!$gameParty.members().includes(actor)) {
        return false;
      }
    }
    return true;
  }
  setupPage() {
    if (this._pageIndex >= 0) {
      this.setupPageSettings();
    } else {
      this.clearPageSettings();
    }
    this.refreshBushDepth();
    this.clearStartingFlag();
    this.checkEventTriggerAuto();
  }
  refreshBushDepth() {
    throw new Error("Method not implemented.");
  }
  clearPageSettings() {
    this.setImage("", 0);
    this._moveType = 0;
    this._trigger = null;
    this._interpreter = null;
    this.setThrough(true);
  }
  setImage(arg0: string, arg1: number) {
    throw new Error("Method not implemented.");
  }
  setThrough(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setupPageSettings() {
    const page = this.page();
    const image = page.image;
    if (image.tileId > 0) {
      this.setTileImage(image.tileId);
    } else {
      this.setImage(image.characterName, image.characterIndex);
    }
    if (this._originalDirection !== image.direction) {
      this._originalDirection = image.direction;
      this._prelockDirection = 0;
      this.setDirectionFix(false);
      this.setDirection(image.direction);
    }
    if (this._originalPattern !== image.pattern) {
      this._originalPattern = image.pattern;
      this.setPattern(image.pattern);
    }
    this.setMoveSpeed(page.moveSpeed);
    this.setMoveFrequency(page.moveFrequency);
    this.setPriorityType(page.priorityType);
    this.setWalkAnime(page.walkAnime);
    this.setStepAnime(page.stepAnime);
    this.setDirectionFix(page.directionFix);
    this.setThrough(page.through);
    this.setMoveRoute(page.moveRoute);
    this._moveType = page.moveType;
    this._trigger = page.trigger;
    if (this._trigger === 4) {
      this._interpreter = new Game_Interpreter();
    } else {
      this._interpreter = null;
    }
  }
  setTileImage(tileId: any) {
    throw new Error("Method not implemented.");
  }
  setDirectionFix(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  setPattern(pattern: any) {
    throw new Error("Method not implemented.");
  }
  setMoveSpeed(moveSpeed: any) {
    throw new Error("Method not implemented.");
  }
  setMoveFrequency(moveFrequency: any) {
    throw new Error("Method not implemented.");
  }
  setPriorityType(priorityType: any) {
    throw new Error("Method not implemented.");
  }
  setWalkAnime(walkAnime: any) {
    throw new Error("Method not implemented.");
  }
  setStepAnime(stepAnime: any) {
    throw new Error("Method not implemented.");
  }
  setMoveRoute(moveRoute: any) {
    throw new Error("Method not implemented.");
  }
  isOriginalPattern() {
    return this.pattern() === this._originalPattern;
  }
  pattern() {
    throw new Error("Method not implemented.");
  }
  resetPattern() {
    this.setPattern(this._originalPattern);
  }
  checkEventTriggerTouch(x, y) {
    if (!$gameMap.isEventRunning()) {
      if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
        if (!this.isJumping() && this.isNormalPriority()) {
          this.start();
        }
      }
    }
  }
  isJumping() {
    throw new Error("Method not implemented.");
  }
  checkEventTriggerAuto() {
    if (this._trigger === 3) {
      this.start();
    }
  }
  update() {
    Game_Character.prototype.update.call(this);
    this.checkEventTriggerAuto();
    this.updateParallel();
  }
  updateParallel() {
    if (this._interpreter) {
      if (!this._interpreter.isRunning()) {
        this._interpreter.setup(this.list(), this._eventId);
      }
      this._interpreter.update();
    }
  }
  locate(x, y) {
    Game_Character.prototype.locate.call(this, x, y);
    this._prelockDirection = 0;
  }
  forceMoveRoute(moveRoute) {
    Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
    this._prelockDirection = 0;
  }
}

Game_Event.prototype = Object.create(Game_Character.prototype);

//-----------------------------------------------------------------------------
