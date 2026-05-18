import { Data_Skill, Data_Item, Data_Weapon, Data_Armor } from '../../../rmmz/rpg';
import { DataFileInfo } from './types';
export interface RpgMakerDataManagerBase {
    get _databaseFiles(): DataFileInfo[];
    loadDatabase(): void;
    loadDataFile(name: string, src: string): void;
    isDatabaseLoaded(): boolean;
    loadMapData(mapId: number): void;
    makeEmptyMap(): void;
    isMapLoaded(): boolean;
    onLoad(object: object): void;
    extractMetadata(data: {
        note: string;
    }): void;
    isBattleTest(): boolean;
    isEventTest(): boolean;
    isSkill(data: unknown): data is Data_Skill;
    isItem(data: unknown): data is Data_Item;
    isWeapon(data: unknown): data is Data_Weapon;
    isArmor(data: unknown): data is Data_Armor;
    createGameObjects(): void;
    setupNewGame(): void;
    setupBattleTest(): void;
    setupEventTest(): void;
    isAnySavefileExists(): boolean;
    latestSavefileId(): number;
    loadGame(savefileId: number): Promise<number>;
    saveGame(savefileId: number): Promise<number>;
}
