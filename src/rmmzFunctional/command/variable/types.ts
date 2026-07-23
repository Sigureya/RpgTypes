import type { Data_Item, Data_Weapon, Data_Armor } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Actor,
  Rmmz_Enemy,
  Rmmz_Character,
} from "@RpgTypes/rmmzRuntime";

export interface Provider {
  gameActor(actorId: number): Rmmz_Actor | null | undefined;
  gameEnemy(enemyIndex: number): Rmmz_Enemy | null | undefined;
  character(characterId: number): Rmmz_Character | null | undefined;
  dataItem(itemId: number): Data_Item | null | undefined;
  dataWeapon(weaponId: number): Data_Weapon | null | undefined;
  dataArmor(armorId: number): Data_Armor | null | undefined;
}
