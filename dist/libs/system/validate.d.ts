import { System_BooleanOptions, System_ImageSize } from './subset';
import { AttackMotion, TestBattler } from './members';
export declare const isSystemBooleanOptions: (data: object) => data is System_BooleanOptions;
export declare const isTestBattler: (data: unknown) => data is TestBattler;
export declare const isAttackMotion: (data: unknown) => data is AttackMotion;
export declare const isImageSize: (data: unknown) => data is System_ImageSize;
