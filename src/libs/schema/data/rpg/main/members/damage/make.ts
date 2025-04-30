import type { Damage } from "./damage";

export const makeDamage = (damage: Partial<Damage> = {}): Damage => ({
  type: damage.type ?? 0,
  elementId: damage.elementId ?? 0,
  formula: damage.formula ?? "",
  variance: damage.variance ?? 0,
  critical: damage.critical ?? false,
});
