import type { AudioFileParams } from "../../types";
import type { WebAudio } from "../core";
interface AudioBuffer {
}
export interface AudioManager {
    _bgmVolume: number;
    _bgsVolume: number;
    _meVolume: number;
    _seVolume: number;
    _currentBgm: null;
    _currentBgs: null;
    _bgmBuffer: null;
    _bgsBuffer: null;
    _meBuffer: null;
    _seBuffers: [];
    _staticBuffers: [];
    _replayFadeTime: number;
    _path: "audio/";
    playBgm(bgm: AudioFileParams, pos: number): void;
    replayBgm(bgm: AudioFileParams): void;
    isCurrentBgm(bgm: AudioFileParams): boolean;
    updateBgmParameters(bgm: AudioFileParams): void;
    updateCurrentBgm(bgm: AudioFileParams, pos: number): void;
    stopBgm(): void;
    fadeOutBgm(duration: number): void;
    fadeInBgm(duration: number): void;
    playBgs(bgs: AudioFileParams, pos: number): void;
    replayBgs(bgs: AudioFileParams): void;
    isCurrentBgs(bgs: AudioFileParams): boolean;
    updateBgsParameters(bgs: AudioFileParams): void;
    updateCurrentBgs(bgs: AudioFileParams, pos: number): void;
    stopBgs(): void;
    fadeOutBgs(duration: number): void;
    fadeInBgs(duration: number): void;
    playMe(me: AudioFileParams): void;
    updateMeParameters(me: AudioFileParams): void;
    fadeOutMe(duration: number): void;
    stopMe(): void;
    playSe(se: AudioFileParams): void;
    updateSeParameters(buffer: AudioBuffer, se: AudioFileParams): void;
    cleanupSe(): void;
    stopSe(): void;
    playStaticSe(se: AudioBuffer): void;
    loadStaticSe(se: AudioBuffer): void;
    isStaticSe(se: AudioBuffer): boolean;
    saveBgm(): AudioFileParams;
    saveBgs(): AudioFileParams;
    stopAll(): void;
    makeEmptyAudioObject(): {
        name: string;
        volume: 0;
        pitch: 0;
    };
    createBuffer(folder: string, name: string): WebAudio;
    updateBufferParameters(buffer: WebAudio, configVolume: number, audio: AudioFileParams): void;
    audioFileExt(): string;
    checkErrors(): void;
}
export {};
