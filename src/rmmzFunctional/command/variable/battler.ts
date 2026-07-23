import type {
  Command_ControlVariables_FromActor,
  Command_ControlVariables_FromEnemy,
  Command_ControlVariables_FromMapCharactor,
} from "@RpgTypes/rmmz/eventCommand";
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
