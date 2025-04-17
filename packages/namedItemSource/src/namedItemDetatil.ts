// import type {
//   Data_NamedItem,
//   GlobalLabel,
//   LabelRegistry,
//   System_DataNames,
//   TraitLabels,
// } from "@sigureya/rpgtypes";
// import type { NamedItemRecord, NamedItemSource } from "./listSource";
// import {
//   SRC_DATA_ACTOR,
//   SRC_DATA_ARMOR,
//   SRC_ARMOR_TYPES,
//   SRC_DATA_CLASS,
//   SRC_COMMON_EVNET,
//   SRC_ELEMENTS,
//   SRC_DATA_ENEMY,
//   SRC_EQUIP_TYPES,
//   SRC_DATA_ITEMS,
//   SRC_PARAMS_REGULAR,
//   SRC_TRAIT_COLLAPS,
//   SRC_PARAMS_EXTRA,
//   SRC_PARAMS_SPECIAL,
//   SRC_DATA_SKILL,
//   SRC_SKILL_TYPES,
//   SRC_DATA_STATE,
//   SRC_TROOP,
//   SRC_DATA_VARIABLE,
//   SRC_WEAPON_TYPES,
//   SRC_TRAIT_PARTY_ABILITY,
//   SRC_TRAIT_SPECIAL_FLAG,
//   SRC_DATA_WEAPON,
// } from "./listSource";
// import type { GlobalGameDataNamedItems, MainDataDomains } from "./transformers";
// import {
//   getArmorTypes,
//   getElements,
//   getEquipTypes,
//   getSkillTypes,
//   getVariableNames,
//   getWeaponTypes,
//   foldRegularParam,
//   foldExtraParam,
//   foldSpecialParams,
//   foldCollapsOptions,
//   foldPartyAbilityOptions,
// } from "./transformers";

// interface NamedItems_System {
//   armorTypes: NamedItemSource;
//   weaponTypes: NamedItemSource;
//   skillTypes: NamedItemSource;
//   elements: NamedItemSource;
//   variables: NamedItemSource;
//   equipTypes: NamedItemSource;
// }

// export interface SystemLables {
//   armorTypes: string;
//   weaponTypes: string;
//   skillTypes: string;
//   elements: string;
//   variables: string;
//   equipTypes: string;
// }

// export const systemData = (
//   system: System_DataNames,
//   labels: SystemLables
// ): NamedItems_System => ({
//   armorTypes: {
//     items: getArmorTypes(system),
//     sourceKey: SRC_ARMOR_TYPES,
//     label: labels.armorTypes,
//   },
//   elements: {
//     items: getElements(system),
//     sourceKey: SRC_ELEMENTS,
//     label: labels.elements,
//   },
//   equipTypes: {
//     items: getEquipTypes(system),
//     sourceKey: SRC_EQUIP_TYPES,
//     label: labels.equipTypes,
//   },
//   skillTypes: {
//     items: getSkillTypes(system),
//     sourceKey: SRC_SKILL_TYPES,
//     label: labels.equipTypes,
//   },
//   variables: {
//     items: getVariableNames(system),
//     sourceKey: SRC_DATA_VARIABLE,
//     label: labels.variables,
//   },
//   weaponTypes: {
//     items: getWeaponTypes(system),
//     sourceKey: SRC_WEAPON_TYPES,
//     label: labels.weaponTypes,
//   },
// });

// const makeNamedItem = (itemList: Data_NamedItem[]): Data_NamedItem[] =>
//   itemList.map<Data_NamedItem>((item) => ({ id: item.id, name: item.name }));

// export const mainData = (
//   gameData: GlobalGameDataNamedItems,
//   domains: MainDataDomains
// ): NamedItemRecord<GlobalGameDataNamedItems> => ({
//   actors: {
//     items: makeNamedItem(gameData.actors),
//     sourceKey: SRC_DATA_ACTOR,
//     label: domains.actors.domainName,
//   },
//   armors: {
//     items: makeNamedItem(gameData.armors),
//     sourceKey: SRC_DATA_ARMOR,
//     label: domains.armors.domainName,
//   },
//   classes: {
//     items: makeNamedItem(gameData.classes),
//     sourceKey: SRC_DATA_CLASS,
//     label: domains.classes.domainName,
//   },
//   commonEvents: {
//     items: makeNamedItem(gameData.commonEvents),
//     sourceKey: SRC_COMMON_EVNET,
//     label: domains.commonEvents.domainName,
//   },
//   enemies: {
//     items: makeNamedItem(gameData.enemies),
//     sourceKey: SRC_DATA_ENEMY,
//     label: domains.enemies.domainName,
//   },
//   items: {
//     items: makeNamedItem(gameData.items),
//     sourceKey: SRC_DATA_ITEMS,
//     label: domains.items.domainName,
//   },
//   skills: {
//     items: makeNamedItem(gameData.skills),
//     sourceKey: SRC_DATA_SKILL,
//     label: domains.items.domainName,
//   },
//   states: {
//     items: makeNamedItem(gameData.states),
//     sourceKey: SRC_DATA_STATE,
//     label: domains.states.domainName,
//   },
//   troops: {
//     items: makeNamedItem(gameData.troops),
//     sourceKey: SRC_TROOP,
//     label: domains.troops.domainName,
//   },
//   weapons: {
//     items: makeNamedItem(gameData.weapons),
//     sourceKey: SRC_DATA_WEAPON,
//     label: domains.weapons.domainName,
//   },
// });

// export const trait = (
//   globalLabel: LabelRegistry,
//   labels: TraitLabels
// ): NamedItemRecord<TraitLabels["options"]> => ({
//   paramRegular: {
//     sourceKey: SRC_PARAMS_REGULAR,
//     label: globalLabel.rpg.trait.regularParam,
//     items: foldRegularParam(globalLabel.rpg.paramRegular),
//   },
//   paramExtra: {
//     sourceKey: SRC_PARAMS_EXTRA,
//     label: labels.extraParam,
//     items: foldExtraParam(labels.paramExtra),
//   },
//   paramSpecial: {
//     sourceKey: SRC_PARAMS_SPECIAL,
//     label: labels.types.specialParam,
//     items: foldSpecialParams(labels.options.paramSpecial),
//   },
//   collaps: {
//     sourceKey: SRC_TRAIT_COLLAPS,
//     label: labels.types.collapseType,
//     items: foldCollapsOptions(labels.options.collaps, globalLabel),
//   },
//   partyAbility: {
//     sourceKey: SRC_TRAIT_PARTY_ABILITY,
//     label: labels.types.partyAbility,
//     items: foldPartyAbilityOptions(labels.options.partyAbility),
//   },
//   specialFlag: {
//     sourceKey: SRC_TRAIT_SPECIAL_FLAG,
//     label: labels.types.specialFlag,
//     items: [],
//   },
// });
