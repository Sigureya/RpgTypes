/* eslint-disable @functional/no-return-void */
import type { Trait } from "@RpgTypes/rmmz";
import type { Rmmz_Action, Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import type {
  ActionContext,
  ActionCost,
  ActionTotalCost,
  BattleField,
  BattleXX,
} from "./customValue";

const canPay = (battler: Rmmz_Battler, cost: ActionCost[]) => {
  return true;
};

const calcCost = (
  battler: Rmmz_Battler,
  cost: ActionCost[],
): ActionTotalCost => {
  return {};
};

interface Context2 {
  totalCost: ActionTotalCost;
  subject: Rmmz_Battler;
  targets: Rmmz_Battler[];
}

interface BattlerXXQuery {}

interface Pair {
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

const battleXX2 = (
  field: BattleField,
  action: Rmmz_Action,
  handlers: ReadonlyArray<Pair>,
) => {
  const context: ActionContext = { filed: field, action };
  if (
    !handlers.some((h): boolean => {
      return h.canUse(context);
    })
  ) {
    return undefined;
  }
  const subject = action.subject();
  const cost: ActionCost[] = handlers.flatMap((h) => h.additionalCost(context));
  if (!canPay(subject, cost)) {
    return undefined;
  }
  const totalCost = calcCost(subject, cost);
  const targets = action.makeTargets();
  const context2: Context2 = { totalCost, subject, targets };
  handlers.forEach((h) => {
    h.onActionStart(context, context2);
  });

  return createActionResult(context, handlers);
};

const createActionResult = (
  context: ActionContext,
  handlers: ReadonlyArray<Pair>,
) => {
  return {
    result: handlers
      .map((h) => {
        return h.onActionEnd(context);
      })
      .filter((x): x is BattleXX => x !== undefined),
  };
};
const executeDamage = (
  target: Rmmz_Battler,
  context: ActionContext,
  handlers: ReadonlyArray<Pair>,
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
