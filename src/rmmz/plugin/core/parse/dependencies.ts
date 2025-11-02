import type { PluginDependencies } from "./types";

export const addBasePlugin = (
  dep: PluginDependencies,
  base: string
): PluginDependencies => {
  return {
    orderAfter: dep.orderAfter,
    orderBefore: dep.orderBefore,
    base: dep.base.concat(base),
  };
};

export const addOrderBefore = (
  dep: PluginDependencies,
  order: string
): PluginDependencies => {
  return {
    base: dep.base,
    orderAfter: dep.orderAfter,
    orderBefore: dep.orderBefore.concat(order),
  };
};

export const addOrderAfter = (
  dep: PluginDependencies,
  order: string
): PluginDependencies => {
  return {
    base: dep.base,
    orderBefore: dep.orderBefore,
    orderAfter: dep.orderAfter.concat(order),
  };
};
