import type {
  Command_ControlVariables_FromActor,
  Command_ControlVariables_FromEnemy,
  Command_ControlVariables_FromMapCharactor,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Actor, Rmmz_Character } from "@RpgTypes/rmmzRuntime";

interface Provider {
  gameActor(actorId: number): Rmmz_Actor | null | undefined;
  gameEnemy(enemyIndex: number): Rmmz_Actor | null | undefined;
  character(characterId: number): Rmmz_Character;
}

export const variableFromActor = (
  command: Command_ControlVariables_FromActor,
  fallback: number,
  provider: Provider,
): number => {
  const actor = provider.gameActor(command.parameters[5]);
  if (!actor) {
    return fallback;
  }

  const mode: number = command.parameters[6];
  if (mode >= 4 && mode <= 11) {
    const paramId: number = mode - 4;
    return actor.param(paramId);
  }

  switch (mode) {
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
  const mode: number = command.parameters[6];
  if (mode >= 2 && mode <= 9) {
    const paramId: number = mode - 2;
    return enemy.param(paramId);
  }
  switch (mode) {
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
  const mode: number = command.parameters[6];
  switch (mode) {
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
