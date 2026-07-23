import type {
  Command_ControlVariables_FromActor,
  Command_ControlVariables_FromArmor,
  Command_ControlVariables_FromEnemy,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromMapCharactor,
  Command_ControlVariables_FromParty,
  Command_ControlVariables_FromSystem,
  Command_ControlVariables_FromWeapon,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Armor, Data_Item, Data_Weapon } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Actor,
  Rmmz_Character,
  Rmmz_Enemy,
  Rmmz_Map,
  Rmmz_Party,
  Rmmz_System,
  Rmmz_UnitPlayer,
} from "@RpgTypes/rmmzRuntime";
import type { Provider } from "./types";

export const variableFromActor = (
  command: Command_ControlVariables_FromActor,
  fallback: number,
  provider: Provider,
): number => {
  const actor = provider.gameActor(command.parameters[5]);
  if (!actor) {
    return fallback;
  }

  const kind: number = command.parameters[6];
  if (kind >= 4 && kind <= 11) {
    const paramId: number = kind - 4;
    return actor.param(paramId);
  }

  switch (kind) {
    case 0:
      return actor.level;
    case 1:
      return actor.currentExp();
    case 2:
      return actor.hp;
    case 3:
      return actor.mp;
    case 12:
      return actor.tp;
  }

  return fallback;
};

export const variableFromEnemy = (
  command: Command_ControlVariables_FromEnemy,
  fallback: number,
  provider: Provider,
): number => {
  const enemy = provider.gameEnemy(command.parameters[5]);
  if (!enemy) {
    return fallback;
  }
  const kind: number = command.parameters[6];
  if (kind >= 2 && kind <= 9) {
    const paramId: number = kind - 2;
    return enemy.param(paramId);
  }
  switch (kind) {
    case 0:
      return enemy.hp;
    case 1:
      return enemy.mp;
    case 10:
      return enemy.tp;
  }
  return fallback;
};

export const variableFromMapCharactor = (
  command: Command_ControlVariables_FromMapCharactor,
  fallback: number,
  provider: Provider,
): number => {
  const character = provider.character(command.parameters[5]);
  if (!character) {
    return fallback;
  }
  const kind: number = command.parameters[6];
  switch (kind) {
    case 0:
      return character.x;
    case 1:
      return character.y;
    case 2:
      return character.direction();
    case 3:
      return character.screenX();
    case 4:
      return character.screenY();
  }

  return fallback;
};

// export const variableFromLast = (
//   command: Command_ControlVariables_FromLastData,
//   temp: Rmmz_Temp,
// ): number => {
//   return temp.lastActionData(command.parameters[5]);
// };

export const variableFromOther = (
  command: Command_ControlVariables_FromSystem,
  map: Rmmz_Map,
  party: Rmmz_Party,
  system: Rmmz_System,
  //  timer: Rmmz_Timer,
): number => {
  switch (command.parameters[5]) {
    case 0:
      return map.mapId();

    case 1:
      return party.size();

    case 2:
      return party.gold();

    case 3:
      return party.steps();

    case 4:
      return system.playtime();

    // case 5:
    //   return timer.seconds();

    case 6:
      return system.saveCount();

    case 7:
      return system.battleCount();

    case 8:
      return system.winCount();

    case 9:
      return system.escapeCount();
  }

  return 0;
};
