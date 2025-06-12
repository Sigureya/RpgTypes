import { AttackMotion, System_BooleanGameOptions, System_ImageSize } from './core';
import { TestBattler } from './gameEdit';
export declare const isSystemBooleanOptions: (data: object) => data is System_BooleanGameOptions;
export declare const isTestBattler: (data: unknown) => data is TestBattler;
export declare const isAttackMotion: (data: unknown) => data is AttackMotion;
export declare const isImageSize: (data: unknown) => data is System_ImageSize;
