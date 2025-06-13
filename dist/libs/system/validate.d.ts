import { AttackMotion, System_ImageSize } from './core';
import { TestBattler } from './gameEdit';
import { Data_System } from './system';
export declare const isDataSystem: (data: unknown) => data is Data_System;
export declare const isTestBattler: (data: unknown) => data is TestBattler;
export declare const isAttackMotion: (data: unknown) => data is AttackMotion;
export declare const isImageSize: (data: unknown) => data is System_ImageSize;
