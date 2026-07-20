/* eslint-disable @functional/no-return-void */
import type { Trait } from "@RpgTypes/rmmz";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import type {
  ActionContext,
  BattleXX,
  ActionCost,
  ActionTotalCost,
} from "./customValue";

export interface ActionBehavierRunner {
  canUse(context: ActionContext): boolean;
  onActionStart(context: ActionContext, context2: Context2): void;
  onDamage(context: ActionContext, target: Rmmz_Battler): void;
  onActionEnd(context: ActionContext): BattleXX | undefined;
  additionalCost(context: ActionContext): ActionCost[];
  aditionalTargetTraits(context: ActionContext, target: Rmmz_Battler): Trait[];
  aditionalSubjectTraits(
    context: ActionContext,
    subject: Rmmz_Battler,
  ): Trait[];
  afterDamage(context: ActionContext, target: Rmmz_Battler): BattlerXXQuery[];
}

export interface BattlerXXQuery {}

export interface Context2 {
  totalCost: ActionTotalCost;
  subject: Rmmz_Battler;
  targets: Rmmz_Battler[];
}
