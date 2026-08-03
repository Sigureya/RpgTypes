import { ItemEffect } from '../../../rmmz';
import { ActionVariableSchema, VariableCodeTable } from './types';
export declare const getActorVariableValue: <T>(variables: Record<string, T>, dataId: number, schemas: ReadonlyMap<number, ActionVariableSchema>) => T | undefined;
export declare const createInitialVariables: (schemas: readonly ActionVariableSchema[]) => Record<string, number>;
export declare const changeActorVariable: <T extends Record<string, number>>(variables: T, { key, min, max }: ActionVariableSchema, fn: (oldValue: number) => number) => T;
export declare const itemEffectChangeBattlerVariable: (variables: Record<string, number>, schemas: ReadonlyMap<number, ActionVariableSchema>, effect: ItemEffect, codeTabel: VariableCodeTable) => Record<string, number> | undefined;
