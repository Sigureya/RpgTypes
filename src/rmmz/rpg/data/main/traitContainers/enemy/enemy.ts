import { makeParamArray } from "../members";
import {
  ENEMY_ACTION_CONDITION_HP_RATE,
  ENEMY_ACTION_CONDITION_MP_RATE,
  ENEMY_ACTION_CONDITION_PARTY_LEVEL,
  ENEMY_ACTION_CONDITION_STATE,
  ENEMY_ACTION_CONDITION_SWITCH,
  ENEMY_ACTION_CONDITION_TURN,
} from "./constants";
import type {
  Data_Enemy,
  DropItem,
  Enemy_Action,
  Enemy_Action_HpRate,
  Enemy_Action_MpRate,
  Enemy_Action_PartyLevel,
  Enemy_Action_State,
  Enemy_Action_Switch,
  Enemy_Action_Turn,
} from "./types";

export const makeDropItem = (dropItem: Partial<DropItem> = {}): DropItem => ({
  dataId: dropItem.dataId ?? 0,
  denominator: dropItem.denominator ?? 0,
  kind: dropItem.kind ?? 0,
});

export const makeEnemyAction = (
  action: Partial<Enemy_Action> = {},
): Enemy_Action => ({
  conditionParam1: action.conditionParam1 ?? 0,
  conditionParam2: action.conditionParam2 ?? 0,
  conditionType: action.conditionType ?? 0,
  rating: action.rating ?? 0,

  skillId: action.skillId ?? 0,
});

export const makeEnemyActionTurn = (e: Enemy_Action_Turn): Enemy_Action => {
  return {
    conditionParam1: e.turnStart,
    conditionParam2: e.turnInterval,
    conditionType: ENEMY_ACTION_CONDITION_TURN,
    rating: e.rating,
    skillId: e.skillId,
  };
};

export const makeEnemyActionHpRate = (e: Enemy_Action_HpRate): Enemy_Action => {
  return {
    conditionParam1: e.hpRateA,
    conditionParam2: e.hpRateB,
    conditionType: ENEMY_ACTION_CONDITION_HP_RATE,
    rating: e.rating,
    skillId: e.skillId,
  };
};

export const makeEnemyActionMpRate = (e: Enemy_Action_MpRate): Enemy_Action => {
  return {
    conditionParam1: e.mpRateA,
    conditionParam2: e.mpRateB,
    conditionType: ENEMY_ACTION_CONDITION_MP_RATE,
    rating: e.rating,
    skillId: e.skillId,
  };
};

export const makeEnemyActionState = (e: Enemy_Action_State): Enemy_Action => {
  return {
    conditionParam1: e.stateId,
    conditionParam2: 0,
    conditionType: ENEMY_ACTION_CONDITION_STATE,
    rating: e.rating,
    skillId: e.skillId,
  };
};

export const makeEnemyActionPartyLevel = (
  e: Enemy_Action_PartyLevel,
): Enemy_Action => {
  return {
    conditionParam1: e.partyLevel,
    conditionParam2: 0,
    conditionType: ENEMY_ACTION_CONDITION_PARTY_LEVEL,
    rating: e.rating,
    skillId: e.skillId,
  };
};

export const makeEnemyActionSwitch = (e: Enemy_Action_Switch): Enemy_Action => {
  return {
    conditionParam1: e.switchId,
    conditionParam2: 0,
    conditionType: ENEMY_ACTION_CONDITION_SWITCH,
    rating: e.rating,
    skillId: e.skillId,
  };
};

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
  params: data.params
    ? [...data.params]
    : makeParamArray({
        mhp: 0,
        mmp: 0,
        atk: 0,
        def: 0,
        mat: 0,
        mdf: 0,
        agi: 0,
        luk: 0,
      }),
  actions: [],
});
