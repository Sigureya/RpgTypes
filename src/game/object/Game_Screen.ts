import { Game_Picture } from "./Game_Picture";
import { ColorRGBA } from "../../types/colorRGBA";

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.
export declare class Game_Screen {
  _zoomX: number;
  _zoomY: number;
  _zoomScale: number;
  _pictures: (Game_Picture | null)[];
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
  _brightness: any;
  _tone: ColorRGBA;
  _flashColor: ColorRGBA;
  _shake: any;
  _weatherType: string;
  _weatherPower: number;
  constructor();
  initialize(): void;
  clear(): void;
  onBattleStart(): void;
  brightness(): number;
  tone(): ColorRGBA;
  flashColor(): ColorRGBA;
  shake(): number;
  zoomX(): number;
  zoomY(): number;
  zoomScale(): number;
  weatherType(): string;
  weatherPower(): number;
  picture(pictureId: number): Game_Picture | null | undefined;
  realPictureId(pictureId: number): number;
  clearFade(): void;
  clearTone(): void;
  clearFlash(): void;
  clearShake(): void;
  clearZoom(): void;
  clearWeather(): void;
  clearPictures(): void;
  eraseBattlePictures(): void;
  maxPictures(): number;
  startFadeOut(duration: number): void;
  startFadeIn(duration: number): void;
  startTint(tone: ColorRGBA, duration: number): void;
  startFlash(color: ColorRGBA, duration: number): void;
  startShake(power: number, speed: number, duration: number): void;
  startZoom(x: number, y: number, scale: number, duration: number): void;
  setZoom(x: number, y: number, scale: number): void;
  changeWeather(type: string, power: number, duration: number): void;
  update(): void;
  updateFadeOut(): void;
  updateFadeIn(): void;
  updateTone(): void;
  updateFlash(): void;
  updateShake(): void;
  updateZoom(): void;
  updateWeather(): void;
  updatePictures(): void;
  startFlashForDamage(): void;
  showPicture(
    pictureId: number,
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number
  ): void;
  movePicture(
    pictureId: number,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number,
    easingType: number
  ): void;
  rotatePicture(pictureId: number, speed: number): void;
  tintPicture(pictureId: number, tone: ColorRGBA, duration: number): void;
  erasePicture(pictureId: number): void;
}
