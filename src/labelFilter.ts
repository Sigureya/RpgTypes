import type * as RPG from "./schema";

export const regularParamLabels = (
  labels: RPG.LabelRegistry
): RPG.RegularParamLabels => {
  return labels.rpg.trait.options.paramRegular;
};

export const specialParamLabels = (
  labels: RPG.LabelRegistry
): RPG.SpecialParamLabels => {
  return labels.rpg.trait.options.paramSpecial;
};

export const extraParamLabels = (
  labels: RPG.LabelRegistry
): RPG.ExtraParamLabels => {
  return labels.rpg.trait.options.paramExtra;
};

export const traitLabels = (labels: RPG.LabelRegistry): RPG.TraitLabels => {
  return labels.rpg.trait;
};

export const itemEffectLabels = (
  labels: RPG.LabelRegistry
): RPG.ItemCodeLabels => {
  return labels.rpg.itemEffect;
};

export const globalLabel = (labels: RPG.LabelRegistry): RPG.GlobalLabel => {
  return labels.global;
};

export const itemLabels = (labels: RPG.LabelRegistry): RPG.ItemLabels => {
  return labels.rpg.item;
};

export const skillLabels = (labels: RPG.LabelRegistry): RPG.SkillLabels => {
  return labels.rpg.skill;
};

export const actorLabels = (labels: RPG.LabelRegistry): RPG.ActorLabels => {
  return labels.rpg.actor;
};

export const classLabels = (labels: RPG.LabelRegistry): RPG.ClassLabels => {
  return labels.rpg.class;
};

export const stateLabels = (labels: RPG.LabelRegistry): RPG.StateLabels => {
  return labels.rpg.state;
};

export const enemyLabels = (labels: RPG.LabelRegistry): RPG.EnemyLabels => {
  return labels.rpg.enemy;
};

export const armorLabels = (labels: RPG.LabelRegistry): RPG.ArmorLabels => {
  return labels.rpg.armor;
};

export const weaponLabels = (labels: RPG.LabelRegistry): RPG.WeaponLabels => {
  return labels.rpg.weapon;
};

export const usableItemLabels = (
  labels: RPG.LabelRegistry
): RPG.UsableItemLabels => {
  return labels.rpg.usableItem;
};

export const itemCodeLabels = (
  labels: RPG.LabelRegistry
): RPG.ItemCodeLabels => {
  return labels.rpg.itemCode;
};
export const namedItemLabels = (
  labels: RPG.LabelRegistry
): RPG.NamedItemLabels => {
  return labels.rpg.namedItem;
};
export const damageLabels = (labels: RPG.LabelRegistry): RPG.DamageLabels => {
  return labels.rpg.damage;
};
