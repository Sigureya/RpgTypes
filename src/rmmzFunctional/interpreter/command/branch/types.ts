import type {
  Data_Class,
  Data_Armor,
  Data_Weapon,
  Data_Item,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor, Rmmz_Enemy } from "@RpgTypes/rmmzRuntime";

export interface Rmmz_BranchSourceProvider {
  gameActor(actorId: number): Rmmz_BranchSourceActor | null | undefined;
  gameEnemy(enemyId: number): Rmmz_BranchSourceEnemy | null | undefined;
  mapCharacter(characterId: number): { direction(): number } | null | undefined;
  dataClass(classId: number): Data_Class | null | undefined;
  dataArmor(armorId: number): Data_Armor | null | undefined;
  dataItem(itemId: number): Data_Item | null | undefined;
  dataWeapon(weaponId: number): Data_Weapon | null | undefined;
}

export type Rmmz_BranchSourceActor = Pick<
  Rmmz_Actor,
  "isClass" | "hasSkill" | "hasWeapon" | "hasArmor" | "isStateAffected" | "name"
>;

export type Rmmz_BranchSourceEnemy = Pick<
  Rmmz_Enemy,
  "isAlive" | "isStateAffected" | "enemyId"
>;
