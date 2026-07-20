import type { ItemEffect } from "@RpgTypes/rmmz";
import type { ActionVariableSchema, VariableCodeTable } from "./types";

export const getActorVariableValue = <T>(
  variables: Record<string, T>,
  dataId: number,
  schemas: ReadonlyMap<number, ActionVariableSchema>,
): T | undefined => {
  const schema = schemas.get(dataId);
  if (!schema) {
    return;
  }
  if (schema.key in variables) {
    return variables[schema.key];
  }
};

export const createInitialVariables = (
  schemas: readonly ActionVariableSchema[],
): Record<string, number> => {
  const entries = schemas.map(
    (schema) => [schema.key, schema.initialValue] as const,
  );
  return Object.fromEntries<number>(entries);
};

export const changeActorVariable = <T extends Record<string, number>>(
  variables: T,
  { key, min, max }: ActionVariableSchema,
  fn: (oldValue: number) => number,
): T => {
  const oldValue = variables[key];
  const newValue = fn(oldValue);
  const clampedValue = Math.max(min, Math.min(max, newValue));
  return {
    ...variables,
    [key]: clampedValue,
  };
};

export const itemEffectChangeBattlerVariable = (
  variables: Record<string, number>,
  schemas: ReadonlyMap<number, ActionVariableSchema>,
  effect: ItemEffect,
  codeTabel: VariableCodeTable,
): Record<string, number> | undefined => {
  const schema = schemas.get(effect.dataId);
  if (!schema) {
    return;
  }
  if (effect.code === codeTabel.set) {
    return changeActorVariable(variables, schema, (): number => effect.value1);
  }

  if (effect.code === codeTabel.add) {
    return changeActorVariable(
      variables,
      schema,
      (oldValue): number => oldValue + effect.value1,
    );
  }
  if (effect.code === codeTabel.subtract) {
    return changeActorVariable(
      variables,
      schema,
      (oldValue): number => oldValue - effect.value1,
    );
  }
  if (effect.code === codeTabel.multiply) {
    return changeActorVariable(
      variables,
      schema,
      (oldValue): number => oldValue * effect.value1,
    );
  }
};
