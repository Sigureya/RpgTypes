import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
import type { Data_Enemy } from "./enemy";
import type { DropItem, Enemy_Action } from "./enemyMembers";
import { AUTHOR_RMMZ, MODULE_DATA } from "@RpgTypes/namedItemSource";
import { SRC_DATA_ENEMY } from "@RpgTypes/schema/namedItemSource";

export const makeDropItem = (dropItem: Partial<DropItem> = {}): DropItem => ({
  dataId: dropItem.dataId ?? 0,
  denominator: dropItem.denominator ?? 0,
  kind: dropItem.kind ?? 0,
});

export const makeEnemyAction = (
  action: Partial<Enemy_Action> = {}
): Enemy_Action => ({
  conditionParam1: action.conditionParam1 ?? 0,
  conditionParam2: action.conditionParam2 ?? 0,
  conditionType: action.conditionType ?? 0,
  rating: action.rating ?? 0,

  skillId: action.skillId ?? 0,
});

export const makeEnemyData = (data: Partial<Data_Enemy> = {}): Data_Enemy => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  battlerName: data.battlerName ?? "",
  battlerHue: data.battlerHue ?? 0,
  dropItems: data.dropItems?.map(() => makeDropItem()) ?? [],
  exp: data.exp ?? 0,
  gold: data.gold ?? 0,
  traits: [],
  note: data.note ?? "",
  params: [
    0, // maxhp
    0, // maxmp
    0, // atk
    0, // def
    0, // mat
    0, // mdf
    0, // agi
    0, // luk
  ],
  actions: [],
});

export const makeEnemySourceIdentifier = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ENEMY,
});
