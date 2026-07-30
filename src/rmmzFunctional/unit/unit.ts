import type { Data_Actor, Data_Enemy } from "@RpgTypes/rmmz";
import type { Data_Troop } from "@RpgTypes/rmmz/events";
import {
  CJK_LOCALE_REGEXP,
  TROOP_LETTER_TABLE_FULL,
  TROOP_LETTER_TABLE_HALF,
} from "./constants";
import type { Rmmz_UnitDataProvider, TroopEnemyLabel } from "./types";

export type { Rmmz_UnitDataProvider, TroopEnemyLabel } from "./types";
export {
  CJK_LOCALE_REGEXP,
  TROOP_LETTER_TABLE_FULL,
  TROOP_LETTER_TABLE_HALF,
} from "./constants";

export const dataTroop = (
  provider: Rmmz_UnitDataProvider,
  troopId: number,
): Data_Troop | undefined => {
  return normalizeData(provider.troopData(troopId));
};

export const dataEnemy = (
  provider: Rmmz_UnitDataProvider,
  enemyId: number,
): Data_Enemy | undefined => {
  return normalizeData(provider.enemyData(enemyId));
};

export const initialPartyActorIds = (
  provider: Rmmz_UnitDataProvider,
): number[] => {
  const system = provider.systemData();
  return system.partyMembers.filter((id) => id > 0);
};

export const initialPartyActors = (
  provider: Rmmz_UnitDataProvider,
): Data_Actor[] => {
  return initialPartyActorIds(provider)
    .map((actorId) => normalizeData(provider.actorData(actorId)))
    .filter(isDefined);
};

export const battleTestTroop = (
  provider: Rmmz_UnitDataProvider,
): Data_Troop | undefined => {
  return dataTroop(provider, provider.systemData().testTroopId);
};

export const troopEnemyIds = (troop: Data_Troop): number[] => {
  return troop.members.map((member) => member.enemyId);
};

export const troopEnemies = (
  troop: Data_Troop,
  provider: Rmmz_UnitDataProvider,
): Data_Enemy[] => {
  return troopEnemyIds(troop)
    .map((enemyId) => dataEnemy(provider, enemyId))
    .filter(isDefined);
};

export const troopEnemyNames = (
  troop: Data_Troop,
  provider: Rmmz_UnitDataProvider,
): string[] => {
  return uniqStrings(troopEnemies(troop, provider).map((enemy) => enemy.name));
};

export const troopLetterTable = (
  provider: Rmmz_UnitDataProvider,
): ReadonlyArray<string> => {
  return isCjkLocale(provider.systemData().locale)
    ? TROOP_LETTER_TABLE_FULL
    : TROOP_LETTER_TABLE_HALF;
};

export const troopEnemyLabels = (
  troop: Data_Troop,
  provider: Rmmz_UnitDataProvider,
): TroopEnemyLabel[] => {
  const table = troopLetterTable(provider);
  const enemiesInTroop = troopEnemies(troop, provider);
  const counts = countNames(enemiesInTroop);
  const serialByName: Record<string, number> = {};

  return enemiesInTroop.map((enemy): TroopEnemyLabel => {
    const serial = serialByName[enemy.name] ?? 0;
    serialByName[enemy.name] = serial + 1;
    return {
      enemyId: enemy.id,
      name: enemy.name,
      letter: table[serial % table.length],
      plural: (counts[enemy.name] ?? 0) >= 2,
    };
  });
};

const isDefined = <T>(value: T | null | undefined): value is T => {
  return value !== undefined && value !== null;
};

const normalizeData = <T>(data: T | null | undefined): T | undefined => {
  return data ?? undefined;
};

const uniqStrings = (list: ReadonlyArray<string>): string[] => {
  return [...new Set(list)];
};

const countNames = (enemies: ReadonlyArray<Pick<Data_Enemy, "name">>) => {
  return enemies.reduce<Record<string, number>>((acc, enemy) => {
    acc[enemy.name] = (acc[enemy.name] ?? 0) + 1;
    return acc;
  }, {});
};

const isCjkLocale = (locale: string): boolean => {
  return CJK_LOCALE_REGEXP.test(locale);
};
