import { TestBattlers, AttackMotion, System_Advanced, System_Terms } from './systemMembers';
import { AudioFileParams, ColorRGBA } from './types';
import { Data_Vehicle } from './vehicle';
export interface Data_System {
    battleback1Name: string;
    battleback2Name: string;
    battlerName: string;
    title1Name: string;
    title2Name: string;
    gameTitle: string;
    currencyUnit: string;
    terms: System_Terms;
    weaponTypes: string[];
    skillTypes: string[];
    elements: string[];
    variables: string[];
    equipTypes: string[];
    switches: string[];
    armorTypes: string[];
    titleBgm: AudioFileParams;
    gameoverMe: AudioFileParams;
    battleBgm: AudioFileParams;
    defeatMe: AudioFileParams;
    victoryMe: AudioFileParams;
    sounds: System_SoundsArray;
    boat: Data_Vehicle;
    ship: Data_Vehicle;
    airship: Data_Vehicle;
    optAutosave: boolean;
    optDisplayTp: boolean;
    optDrawTitle: boolean;
    optExtraExp: boolean;
    optFloorDeath: boolean;
    optFollowers: boolean;
    optKeyItemsNumber: boolean;
    optSideView: boolean;
    optSlipDeath: boolean;
    optTransparent: boolean;
    startMapId: number;
    startX: number;
    startY: number;
    editMapId: number;
    testTroopId: number;
    testBattlers: TestBattlers[];
    windowTone: ColorRGBA;
    attackMotions: AttackMotion[];
    local: string;
    versionId: number;
    advanced: System_Advanced;
    tileSize: number;
}
export type System_SoundsArray = [
    cursor: AudioFileParams,
    ok: AudioFileParams,
    cancel: AudioFileParams,
    buzzer: AudioFileParams,
    equip: AudioFileParams,
    save: AudioFileParams,
    load: AudioFileParams,
    battleStart: AudioFileParams,
    escape: AudioFileParams,
    enemyAttack: AudioFileParams,
    enemyDamage: AudioFileParams,
    enemyCollapse: AudioFileParams,
    bossCollapes1: AudioFileParams,
    bossCollapes2: AudioFileParams,
    actorDamage: AudioFileParams,
    actorCollapse: AudioFileParams,
    playRecovery: AudioFileParams,
    playMiss: AudioFileParams,
    playEvasion: AudioFileParams,
    playMagicEvasion: AudioFileParams,
    playReflection: AudioFileParams,
    shop: AudioFileParams,
    useItem: AudioFileParams,
    useSkill: AudioFileParams
];
