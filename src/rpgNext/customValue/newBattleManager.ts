import type { Trait } from "@RpgTypes/rmmz";
import type { Rmmz_Battler, Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import {
  calcTotalActionCost,
  canPayActionCost,
  canPayActionCost2,
} from "../battle/cost/cost";
import type { ActionCost, ActionTotalCost } from "../battle/cost/types";
import type { ActionContext, BattleField, BattleXX } from "./customValue";
import type { ActionBehavierRunner } from "./types";

const canPay = (
  battler: Rmmz_BattlerBase,
  cost: readonly ActionCost[],
): ActionCost[] => {
  return cost.filter((c) => {
    return !canPayActionCost(battler, c);
  });
};

const calcCost = (
  battler: Rmmz_Battler,
  cost: ActionCost[],
): ActionTotalCost => {
  return {
    hp: 0,
    mp: 0,
    tp: 0,
    variable: [],
  };
};

interface Context2 {
  totalCost: ActionTotalCost;
  subject: Rmmz_Battler;
  targets: Rmmz_Battler[];
}

export interface ActionResultV2 {}

interface BattleV2 {
  traits: Trait[];
}

interface DamageContext {
  subject: BattleV2;
  target: BattleV2;
  field: BattleField;
}

interface BattleRRR {
  createActionResult(context: DamageContext): ActionResultV2;
}

interface ActionReultEEE {
  success: boolean;
}

interface ActionFailedHandler {
  costFailed(
    context: ActionContext,
    totalCost: ActionTotalCost,
  ): ActionReultEEE;
  conditionFailed(context: ActionContext): ActionReultEEE;
}

const totalCostXX = (
  handlers: ReadonlyArray<ActionBehavierRunner>,
  context: ActionContext,
): ActionTotalCost => {
  const flat: ActionCost[] = handlers.flatMap((h) => {
    return h.additionalCost(context);
  });
  return calcTotalActionCost(flat);
};

const battleXX2 = (
  context: ActionContext,
  handlers: ReadonlyArray<ActionBehavierRunner>,
  failedHandler: ActionFailedHandler,
) => {
  if (
    !handlers.some((h): boolean => {
      return h.canUse(context);
    })
  ) {
    return failedHandler.conditionFailed(context);
  }
  const subject = context.action.subject();
  const totalCost: ActionTotalCost = totalCostXX(handlers, context);
  if (!canPayActionCost2(subject, totalCost)) {
    return failedHandler.costFailed(context, totalCost);
  }
  const targets = context.action.makeTargets();
  const context2: Context2 = { totalCost, subject, targets };
  handlers.forEach((h) => {
    h.onActionStart(context, context2);
  });

  return createActionResult(context, handlers);
};

const createActionResult = (
  context: ActionContext,
  handlers: ReadonlyArray<ActionBehavierRunner>,
) => {
  return {
    result: handlers
      .map((h): BattleXX | undefined => {
        return h.onActionEnd(context);
      })
      .filter((x) => x !== undefined),
  };
};
const executeDamage = (
  target: Rmmz_Battler,
  context: ActionContext,
  handlers: ReadonlyArray<ActionBehavierRunner>,
  damageFn: () => {},
) => {
  const subject = context.action.subject();
  const atTraits = handlers.flatMap((h) => {
    return {
      subject: h.aditionalSubjectTraits(context, subject),
      target: [
        //        ...subject.traits(),
        ...h.aditionalTargetTraits(context, target),
      ],
    };
  });
};
