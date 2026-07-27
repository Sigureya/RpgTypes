import type {
  ParamArray_VariableFromActorStatus,
  ParamArray_VariableFromEnemyStatus,
  ParamArray_VariableFromMapCharactor,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_VariableSourceProvider } from "./types";

export const variableFromActor = (
  params: ParamArray_VariableFromActorStatus,
  fallback: number,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const actor = provider.gameActor(params[5]);
  if (!actor) {
    return fallback;
  }

  const kind: number = params[6];
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
  params: ParamArray_VariableFromEnemyStatus,
  fallback: number,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const enemy = provider.gameEnemy(params[5]);
  if (!enemy) {
    return fallback;
  }
  const kind: number = params[6];
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
  params: ParamArray_VariableFromMapCharactor,
  fallback: number,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const character = provider.character(params[5]);
  if (!character) {
    return fallback;
  }
  const kind: number = params[6];
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
