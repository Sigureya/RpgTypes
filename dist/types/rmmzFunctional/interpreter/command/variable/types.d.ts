import { Data_Item, Data_Weapon, Data_Armor } from '../../../../rmmz/rpg';
import { Rmmz_Actor, Rmmz_Enemy } from '../../../../rmmzRuntime';
import { Rmmz_MapCharacter } from '../../../../rmmzRuntime/objects/core/map/character';
export interface Rmmz_VariableSourceProvider {
    gameActor(actorId: number): Rmmz_VariableSourceActor | null | undefined;
    gameEnemy(enemyIndex: number): Rmmz_VariableSourceEnemy | null | undefined;
    character(characterId: number): Rmmz_VariableSourceCharacter | null | undefined;
    dataItem(itemId: number): Data_Item | null | undefined;
    dataWeapon(weaponId: number): Data_Weapon | null | undefined;
    dataArmor(armorId: number): Data_Armor | null | undefined;
    random(min: number, max: number): number;
}
export type Rmmz_VariableSourceActor = Pick<Rmmz_Actor, "level" | "currentExp" | "hp" | "mp" | "tp" | "param">;
export type Rmmz_VariableSourceEnemy = Pick<Rmmz_Enemy, "hp" | "mp" | "tp" | "param">;
export type Rmmz_VariableSourceCharacter = Pick<Rmmz_MapCharacter, "x" | "y" | "screenX" | "screenY" | "direction">;
