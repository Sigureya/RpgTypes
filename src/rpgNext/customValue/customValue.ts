import type { ItemEffect, Trait } from "@RpgTypes/rmmz";
import type { Rmmz_Action, Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import type { PluginParam, PluginStructEx } from "@sigureya/rmmz-plugin-schema";
import type { EffectXX } from "../action/itemEffect";

export interface CustomValue {
  format: string;
}

export interface CustomStruct<T> {
  createInitValue(): T;
  createTraits(data: T, battler: Rmmz_Battler): Trait[];
  createItemEffects(data: T, action: Rmmz_Action): ItemEffect[];
  onLoad(data: T, battler: Rmmz_Battler): T;
  getBoolean(data: T, battler: Rmmz_Battler, arg: unknown): boolean;
}

export interface ActionCost {
  code: number;
  value: number;
  dataId: number;
}

export interface BattleXX {
  skillXX: unknown;
  otherXX: EffectXX[];
}

export interface BattleField {}
export interface ActionTotalCost {
  hp: number;
  mp: number;
  tp: number;
}

export interface ActionContext {
  filed: BattleField;
  action: Rmmz_Action<Rmmz_Battler & ActionHandlerContlol<object>>;
}

export interface ActionHandlerContlol<T> {
  getData(key: string): T;
}

export interface ActionHandlers<T, ACC> {
  isValidData(unknown: unknown): unknown is T;
  canUse(data: T, context: ActionContext): boolean;
  additionalEffects(data: T, context: ActionContext): ItemEffect[];
  additionalCost(data: T, context: ActionContext): ActionCost[];
  onActionStart(
    data: T,
    context: ActionContext,
    totalCost: ActionTotalCost,
    subject: Rmmz_Battler,
    targets: readonly Rmmz_Battler[],
  ): ACC;
  onDamage(
    data: T,
    context: ActionContext,
    acc: ACC,
    target: Rmmz_Battler,
  ): ACC;
  onActionEnd(data: T, context: ActionContext, acc: ACC): BattleXX | undefined;
}

export interface PropEx<T extends object> {
  query: CustomStructQuery;
  schema: PluginStructEx<T>;
  structs: PluginStructEx<T>[];
}

export interface PropertyQuery<T> {
  name: string;
  text: string;
  desc: string;
  fallback: T;
  args: PluginParam[];
}

export interface CustomStructQuery {
  booleans: PropertyQuery<boolean>[];
  strings: PropertyQuery<string>[];
  numbers: PropertyQuery<number>[];
}
