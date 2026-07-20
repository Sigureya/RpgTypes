import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import type {
  ActionContext,
  ActionCost,
  ActionHandlers,
  BattleXX,
} from "./customValue";
import type { ActionBehavierRunner, Context2 } from "./types";

/* eslint-disable @functional/no-return-void */
interface Manager2 {
  add(key: Keys, dataId: number): void;
}

export interface Keys {
  actor: string;
  battler: string;
  usableItem: string;
  trait: string;
  party: string;
}

export interface CustomData<StaticData, RuntimeData> {
  isValidStaticData(unknown: unknown): unknown is StaticData;
  isValidRuntimeData(unknown: unknown): unknown is RuntimeData;
  createInitValue(): RuntimeData;
  defaultStaticData(): StaticData;
}

export interface RuntimeDataCCC<T> {
  key: string;
  createInitValue(): T;
  isValidRuntimeData?(data: unknown): data is T;
}

export interface StaticDataCCC<T> {
  key: string;
  defaultValue: T;
  isValidStaticData?(data: unknown): data is T;
}

interface CustomDataObjectXX {
  customData(key: string): unknown;
}

const validateGGG = (
  obj: CustomDataObjectXX,
  schema: RuntimeDataCCC<unknown>,
) => {
  const data = obj.customData(schema.key);
  if (schema.isValidRuntimeData && !schema.isValidRuntimeData(data)) {
    throw new Error(`Invalid runtime data for key: ${schema.key}`);
  }
};

interface SSSUnknown {
  actorStaticSchema: StaticDataCCC<unknown>;
  actorRuntimeSchema: RuntimeDataCCC<unknown>;
  partySchema: RuntimeDataCCC<unknown>;
}

interface SSS<AS, AR, PS> extends SSSUnknown {
  actorStaticSchema: StaticDataCCC<AS>;
  actorRuntimeSchema: RuntimeDataCCC<AR>;
  partySchema: RuntimeDataCCC<PS>;
}

interface HandlersBundle<AS> {
  actorStaticSchema: StaticDataCCC<AS>;
}

type DDAA<AS, AR, PS> = {
  actorRuntime: AR;
  actorStatic: AS;
  party: PS;
};

const aaa = <T, ACC>(
  schema: RuntimeDataCCC<T>,
  handlres: ActionHandlers<T, ACC>,
): Partial<ActionBehavierRunner> => {
  return {
    additionalCost(context: ActionContext): ActionCost[] {
      const data = {} as T;
      return handlres.additionalCost(data, context);
    },
  };
};

class Runner2<T, ACC extends object> implements Partial<ActionBehavierRunner> {
  private _acc: ACC | null = null;

  constructor(
    private _handlers: ActionHandlers<T, ACC>,
    private _schema: RuntimeDataCCC<T>,
  ) {}
  additionalCost(context: ActionContext): ActionCost[] {
    const data = context.action.subject().getData(this._schema.key);
    return this._handlers.additionalCost(data as T, context);
  }
  canUse(context: ActionContext): boolean {
    const data = context.action.subject().getData(this._schema.key);
    return this._handlers.canUse(data as T, context);
  }
  onActionStart(context: ActionContext, c2: Context2) {
    const data = context.action.subject().getData(this._schema.key);
    this._acc = this._handlers.onActionStart(
      data as T,
      context,
      c2.totalCost,
      c2.subject,
      c2.targets,
    );
  }
  onDamage(context: ActionContext, target: Rmmz_Battler): void {
    if (this._acc === null) {
      throw new Error("onActionStart must be called before onDamage");
    }
    const data = context.action.subject().getData(this._schema.key);
    this._acc = this._handlers.onDamage(data as T, context, this._acc, target);
  }
  onActionEnd(context: ActionContext): BattleXX | undefined {
    if (this._acc === null) {
      return undefined;
    }
    const data = context.action.subject().getData(this._schema.key);
    return this._handlers.onActionEnd(data as T, context, this._acc);
  }
}

const xxx = <AS, AR, PS>(
  schema: Partial<SSS<AS, AR, PS>>,
  fn: (handlers: DDAA<AR, AS, PS>) => void,
) => {};

xxx(
  { actorRuntimeSchema: { key: "a", createInitValue: () => ({ x: 0, y: 0 }) } },
  (data) => {
    //    data.actorRuntime
  },
);
