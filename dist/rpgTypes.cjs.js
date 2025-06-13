"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("ajv"), t = (e2, t2) => ({ label: t2.skill.domainName, items: e2, source: {
  author: "rmmz",
  module: "data",
  kind: "skill"
} }), a = (e2, t2) => ({ items: e2, label: t2.actor.domainName, source: { author: "rmmz", module: "data", kind: "actor" } }), r = (e2, t2) => ({ items: e2, label: t2.state.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "state"
} }), o = (e2, t2) => ({ items: e2, label: t2.armor.domainName, source: { author: "rmmz", kind: "armor", module: "data" } }), m = (e2, t2) => ({
  items: e2,
  label: t2.class.domainName,
  source: { author: "rmmz", module: "data", kind: "class" }
}), i = (e2, t2) => ({
  items: e2,
  label: t2.enemy.domainName,
  source: { author: "rmmz", module: "data", kind: "enemy" }
}), s = (e2, t2) => ({ items: e2, label: t2.item.domainName, source: { author: "rmmz", module: "data", kind: "item" } }), n = (e2, t2) => ({ items: e2, label: t2.weapon.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), p = (e2, t2) => ({ items: e2, label: t2.commonEvent.domainName, source: { author: "rmmz", module: "data", kind: "common_event" } }), d = (e2, t2) => ({
  items: l(e2.options, t2),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), l = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, { id: 3, name: e2.noneCollaps }], c = (e2) => [{
  id: 0,
  name: e2.hitRate
}, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, {
  id: 6,
  name: e2.counterAttackRate
}, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], u = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, {
  id: 2,
  name: e2.atk
}, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], y = (e2) => ({ items: g(e2.options), label: e2.domainName, source: {
  author: "rmmz",
  module: "trait",
  kind: "sparams"
} }), g = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, {
  id: 5,
  name: e2.tpChargeRate
}, { id: 6, name: e2.physicalDamageRate }, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], b = (e2) => [{
  id: 0,
  name: e2.encounterHalf
}, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], x = (e2) => [{
  id: 0,
  name: e2.autoBattle
}, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, { id: 3, name: e2.preventEscape }], S = (e2, t2) => {
  return [(m2 = e2.regularParam, { items: u(m2.options), label: m2.domainName, source: {
    author: "rmmz",
    module: "trait",
    kind: "params"
  } }), (o2 = e2.extraParam, {
    items: c(o2.options),
    label: o2.domainName,
    source: { author: "rmmz", module: "trait", kind: "xparams" }
  }), y(e2.specialParam), d(e2.collaps, t2), (r2 = e2.specialFlag, { items: x(r2.options), label: r2.domainName, source: { author: "rmmz", module: "trait", kind: "sflag" } }), (a2 = e2.partyAbility, {
    items: b(a2.options),
    label: a2.domainName,
    source: { author: "rmmz", module: "trait", kind: "partyAbility" }
  })];
  var a2, r2, o2, m2;
}, I = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), k = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), E = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, A = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, h = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), T = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a;
    const t3 = new Set(((_a = e3.placeHolder) == null ? void 0 : _a.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.kindKey), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.kindKey);
    }), t3;
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, M = (e2) => {
  var _a;
  return void 0 !== ((_a = e2.fallbackFormat) == null ? void 0 : _a.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, f = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, C = (e2, t2, a2, r2) => {
  const o2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), m2 = ((e3) => {
    var _a;
    const t3 = new Set(((_a = e3.placeHolder) == null ? void 0 : _a.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return o2.reduce((e3, t3) => {
    const o3 = t3[1];
    return 0 === o3.length ? e3 : o3.length > r2 ? (e3.push({ message: a2.longPlaceHolder, reason: o3.slice(0, r2) }), e3) : (m2.has(o3) || e3.push({
      message: a2.extraPlaceHolder,
      reason: o3
    }), e3);
  }, []);
}, v = (e2, t2, a2) => A(t2).reduce((t3, r2) => {
  const o2 = N(e2, r2, a2);
  return o2 && t3.push(o2), t3;
}, []), N = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), o2 = !!e2.dataSource;
  return !r2 && o2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !o2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, _ = (e2, t2) => {
  const a2 = R(t2);
  return e2.reduce((e3, t3) => {
    const r2 = D(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, D = (e2, t2) => {
  const a2 = F(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, F = (e2, t2) => {
  if (e2) return t2.get(E(e2));
}, R = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: w(t2.items), source: t2.source, label: t2.label };
  return e3.set(E(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), w = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), L = (e2, t2, a2, r2, o2) => {
  const m2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, o2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, m2), e2);
}, P = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), z = (e2) => P(41, e2.special), O = (e2) => P(11, e2.recoverHp), H = (e2) => P(12, e2.recoverMp), q = (e2) => P(13, e2.gainTp), j = (e2) => P(21, e2.addState, { author: "rmmz", module: "data", kind: "state" }), B = (e2) => P(22, e2.removeState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), G = (e2) => P(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), V = (e2) => P(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Y = (e2) => P(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), U = (e2) => P(34, e2.removeDebuff, { author: "rmmz", module: "trait", kind: "params" }), W = (e2) => P(42, e2.grow, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), K = (e2) => P(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), X = (e2) => P(44, e2.commonEvent, { author: "rmmz", module: "data", kind: "common_event" }), $ = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 11,
  dataSource: he()
}), Z = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 12,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), J = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Ee() }), Q = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 14, dataSource: Ee() }), ee = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), te = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 22, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), ae = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 23, dataSource: { author: "rmmz", module: "trait", kind: "sparams" } }), re = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 31,
  dataSource: he()
}), oe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Ee() }), me = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), ie = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), se = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: Ae() }), ne = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: Te()
}), pe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: Te() }), de = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 43, dataSource: Ae() }), le = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 44,
  dataSource: Ae()
}), ce = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: Me() }), ue = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: fe()
}), ye = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: Ce() }), ge = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 54, dataSource: Ce() }), be = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 55,
  dataSource: Ce()
}), xe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), Se = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), Ie = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: { author: "rmmz", module: "trait", kind: "collaps" } }), ke = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 64,
  dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), Ee = () => ({ author: "rmmz", module: "data", kind: "state" }), Ae = () => ({
  author: "rmmz",
  module: "data",
  kind: "skill"
}), he = () => ({ author: "rmmz", module: "system", kind: "elements" }), Te = () => ({ author: "rmmz", module: "system", kind: "skillTypes" }), Me = () => ({
  author: "rmmz",
  module: "system",
  kind: "weaponTypes"
}), fe = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Ce = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), ve = (e2 = {}) => ({
  gameId: e2.gameId ?? 0,
  screenWidth: e2.screenWidth ?? 0,
  screenHeight: e2.screenHeight ?? 0,
  uiAreaWidth: e2.uiAreaWidth ?? 0,
  uiAreaHeight: e2.uiAreaHeight ?? 0,
  windowOpacity: e2.windowOpacity ?? 0,
  screenScale: e2.screenScale ?? 1,
  numberFontFilename: e2.numberFontFilename ?? "",
  mainFontFilename: e2.mainFontFilename ?? "",
  fallbackFonts: e2.fallbackFonts ?? "",
  fontSize: e2.fontSize ?? 28
}), Ne = {
  type: "object",
  properties: {
    gameId: { type: "integer" },
    screenWidth: { type: "integer" },
    screenHeight: { type: "integer" },
    uiAreaWidth: { type: "integer" },
    uiAreaHeight: { type: "integer" },
    windowOpacity: { type: "integer" },
    screenScale: { type: "number" },
    numberFontFilename: { type: "string" },
    mainFontFilename: { type: "string" },
    fallbackFonts: {
      type: "string"
    },
    fontSize: { type: "integer" }
  },
  required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
  additionalProperties: false
}, _e = { type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, De = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), Fe = (e2 = {}) => [De(e2.cursor), De(e2.ok), De(e2.cancel), De(e2.buzzer), De(e2.equip), De(e2.save), De(e2.load), De(e2.battleStart), De(e2.escape), De(e2.enemyAttack), De(e2.enemyDamage), De(e2.enemyCollapse), De(e2.bossCollapes1), De(e2.bossCollapes2), De(e2.actorDamage), De(e2.actorCollapse), De(e2.playRecovery), De(e2.playMiss), De(e2.playEvasion), De(e2.playMagicEvasion), De(e2.playReflection), De(e2.shop), De(e2.useItem), De(e2.useSkill)], Re = {
  type: "object",
  properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
    type: "integer",
    minimum: -100,
    maximum: 100
  } },
  required: ["name", "volume", "pitch", "pan"],
  additionalProperties: false
}, we = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: Re, victoryMe: Re, gameoverMe: Re, titleBgm: Re, defeatMe: Re, sounds: {
    type: "array",
    items: Re,
    minItems: 24,
    maxItems: 24
  } }
}, Le = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, Pe = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], ze = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Oe = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: { type: "array", maxItems: 4, minItems: 4, items: { type: "boolean" } },
    menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } }
  }
}, He = (e2 = {}) => ({
  optAutosave: e2.optAutosave ?? true,
  optDisplayTp: e2.optDisplayTp ?? true,
  optDrawTitle: e2.optDrawTitle ?? true,
  optExtraExp: e2.optExtraExp ?? true,
  optFloorDeath: e2.optFloorDeath ?? true,
  optFollowers: e2.optFollowers ?? true,
  optKeyItemsNumber: e2.optKeyItemsNumber ?? true,
  optSideView: e2.optSideView ?? true,
  optSlipDeath: e2.optSlipDeath ?? true,
  optTransparent: e2.optTransparent ?? true,
  optMessageSkip: e2.optMessageSkip ?? true,
  optSplashScreen: e2.optSplashScreen ?? true
}), qe = {
  type: "boolean"
}, je = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: qe,
    optDisplayTp: qe,
    optDrawTitle: qe,
    optExtraExp: qe,
    optFloorDeath: qe,
    optFollowers: qe,
    optKeyItemsNumber: qe,
    optSideView: qe,
    optSlipDeath: qe,
    optTransparent: qe,
    optMessageSkip: qe,
    optSplashScreen: qe
  }
}, Be = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: { startMapId: {
  type: "integer",
  minimum: 0
}, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } } } }, Ge = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: {
    type: "integer",
    minimum: 0
  } }
}, Ve = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: { type: "string" } } }, Ye = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: { type: "array", items: {
    type: "number"
  }, minItems: 4, maxItems: 4 } }
}, Ue = (e2, t2) => ({
  name: e2,
  id: t2
}), We = (e2) => e2.variables.map(Ue), Ke = (e2) => e2.elements.map(Ue), Xe = (e2) => e2.equipTypes.map(Ue), $e = (e2) => e2.skillTypes.map(Ue), Ze = (e2) => e2.weaponTypes.map(Ue), Je = (e2) => e2.armorTypes.map(Ue), Qe = (e2) => e2.switches.map(Ue), et = (e2, t2) => [at(e2, t2), rt(e2, t2), st(e2, t2), ot(e2, t2), tt(e2, t2), mt(e2, t2), it(e2, t2)], tt = (e2, t2) => ({
  items: Je(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), at = (e2, t2) => ({ items: Ke(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), rt = (e2, t2) => ({ items: Xe(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), ot = (e2, t2) => ({
  items: $e(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), mt = (e2, t2) => ({ items: We(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), it = (e2, t2) => ({ items: Qe(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), st = (e2, t2) => ({
  items: Ze(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), nt = { type: "array", items: { type: "string" } }, pt = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: nt,
    skillTypes: nt,
    elements: nt,
    variables: nt,
    equipTypes: nt,
    switches: nt,
    armorTypes: nt
  }
}, dt = (e2) => ({
  armorTypes: lt(e2.armorTypes),
  elements: lt(e2.elements),
  equipTypes: lt(e2.equipTypes),
  weaponTypes: lt(e2.weaponTypes),
  skillTypes: lt(e2.skillTypes),
  variables: lt(e2.variables),
  switches: lt(e2.switches)
}), lt = (e2) => e2 ? [...e2] : [], ct = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], ut = (e2) => yt(e2, ""), yt = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], gt = (e2, t2) => "string" == typeof e2 ? e2 : t2, bt = (e2) => ({
  actionFailure: gt(e2.actionFailure, "Action failed."),
  actorDamage: gt(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: gt(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: gt(e2.actorGain, "%1 gained %2."),
  actorLoss: gt(e2.actorLoss, "%1 lost %2."),
  actorDrain: gt(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: gt(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: gt(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: gt(e2.alwaysDash, "Always dash."),
  bgmVolume: gt(e2.bgmVolume, "BGM volume"),
  bgsVolume: gt(e2.bgsVolume, "BGS volume"),
  commandRemember: gt(e2.commandRemember, "Command remember."),
  criticalToActor: gt(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: gt(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: gt(e2.counterAttack, "%1 countered!"),
  debuffAdd: gt(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: gt(e2.defeat, "Defeat."),
  enemyDamage: gt(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: gt(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: gt(e2.enemyGain, "%1 gained %2."),
  enemyLoss: gt(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: gt(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: gt(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: gt(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: gt(e2.evasion, "%1 evaded the attack!"),
  autosave: gt(e2.autosave, "Autosave"),
  escapeFailure: gt(e2.escapeFailure, "Escape failed."),
  escapeStart: gt(e2.escapeStart, "%1 started to escape!"),
  emerge: gt(e2.emerge, "%1 appeared!"),
  expNext: gt(e2.expNext, "Next level in %1 EXP."),
  expTotal: gt(e2.expTotal, "Total EXP: %1"),
  file: gt(e2.file, "File"),
  buffAdd: gt(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: gt(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: gt(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: gt(e2.obtainGold, "%1 gold obtained."),
  obtainItem: gt(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: gt(e2.obtainSkill, "%1 learned %2."),
  levelUp: gt(e2.levelUp, "%1 leveled up!"),
  partyName: gt(e2.partyName, "Party"),
  loadMessage: gt(e2.loadMessage, "Load %1?"),
  meVolume: gt(e2.meVolume, "ME volume"),
  possession: gt(e2.possession, "Possession"),
  preemptive: gt(e2.preemptive, "%1 attacked first!"),
  saveMessage: gt(e2.saveMessage, "Save %1?"),
  seVolume: gt(e2.seVolume, "SE volume"),
  magicEvasion: gt(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: gt(e2.magicReflection, "%1 reflected the magic!"),
  substitute: gt(e2.substitute, "%1 took the hit!"),
  surprise: gt(e2.surprise, "%1 surprised the enemy!"),
  touchUI: gt(e2.touchUI, "Touch UI"),
  useItem: gt(e2.useItem, "%1 used %2."),
  victory: gt(e2.victory, "Victory!")
}), xt = { type: "string" }, St = {
  type: "string",
  nullable: true
}, It = { type: "string" }, kt = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: It,
      actorDamage: It,
      actorNoDamage: It,
      actorRecovery: It,
      actorGain: It,
      actorLoss: It,
      actorDrain: It,
      alwaysDash: It,
      bgmVolume: It,
      bgsVolume: It,
      commandRemember: It,
      criticalToActor: It,
      criticalToEnemy: It,
      counterAttack: It,
      debuffAdd: It,
      defeat: It,
      enemyDamage: It,
      enemyNoDamage: It,
      enemyRecovery: It,
      enemyGain: It,
      enemyLoss: It,
      enemyDrain: It,
      evasion: It,
      expNext: It,
      expTotal: It,
      escapeFailure: It,
      escapeStart: It,
      file: It,
      loadMessage: It,
      meVolume: It,
      magicEvasion: It,
      magicReflection: It,
      obtainExp: It,
      obtainGold: It,
      obtainItem: It,
      obtainSkill: It,
      partyName: It,
      preemptive: It,
      saveMessage: It,
      seVolume: It,
      substitute: It,
      touchUI: It,
      victory: It,
      useItem: It,
      buffAdd: It,
      buffRemove: It,
      actorNoHit: It,
      enemyNoHit: It,
      autosave: It,
      emerge: It,
      levelUp: It,
      possession: It,
      surprise: It
    }
  }, commands: {
    type: "array",
    items: [xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, xt, St, xt, xt, St, xt, xt],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, Et = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], At = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: De(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), ht = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: {
    characterIndex: { type: "integer", minimum: 0, maximum: 7 },
    characterName: {
      type: "string",
      minLength: 1
    },
    bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 50, maximum: 150 },
      pan: { type: "integer", minimum: -100, maximum: 100 }
    } },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0, maximum: 5e3 },
    startY: { type: "integer", minimum: 0, maximum: 5e3 }
  }
}, Tt = (e2 = {}) => ({ jsonFormatLevel: e2.jsonFormatLevel ?? 0, messageWidth1: e2.messageWidth1 ?? 816, messageWidth2: e2.messageWidth2 ?? 816 }), Mt = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, ft = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Mt },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    editor: { additionalProperties: false, type: "object", required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"], properties: { messageWidth1: {
      type: "integer",
      minimum: 0,
      maximum: 1e3
    }, messageWidth2: { type: "integer", minimum: 0, maximum: 1e3 }, jsonFormatLevel: { type: "integer", minimum: 0, maximum: 4 } } }
  }
}, Ct = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: ht, boat: ht, ship: ht, advanced: Ne, attackMotions: { type: "array", items: _e } }
}, vt = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), Nt = new e({ strict: true }), _t = ((e2) => {
  const t2 = vt(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([Ct, we, Le, Oe, je, Be, Ge, Ye, pt, kt, Ve, ft]), Dt = Nt.compile(_t), Ft = Nt.compile(Mt);
Nt.compile(_e);
const Rt = Nt.compile(Ge), wt = (e2) => ({
  basic: ct(e2.basic ?? {}),
  commands: ut(e2.commands ?? {}),
  params: Et(e2.params ?? {}),
  messages: bt(e2.messages ?? {})
}), Lt = (e2) => e2 ? [...e2] : [], Pt = (e2) => ((e3) => Rt(e3))(e2) ? { tileSize: e2.tileSize, faceSize: e2.faceSize, iconSize: e2.iconSize } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, zt = (e2, t2) => e2 ? e2.map(t2) : [], Ot = (e2) => ((e3) => Ft(e3))(e2) ? { actorId: e2.actorId, equips: Lt(e2.equips), level: e2.level } : { actorId: 0, equips: [], level: 1 }, Ht = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [De(t2)],
  indent: a2
}), qt = (e2) => [e2.eventId ?? 0], jt = (e2) => [e2.min, e2.max, e2.value], Bt = (e2) => [e2], Gt = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: Bt(e2) }), Vt = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: Bt(e2)
}), Yt = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Ut = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Wt = (e2 = "") => [e2], Kt = (e2, t2 = 0) => ({ code: 355, indent: t2, parameters: [e2] }), Xt = (e2, t2 = 0) => ({
  code: 655,
  indent: t2,
  parameters: [e2]
}), $t = {
  HP: 0,
  MP: 1,
  MHP: 2,
  MMP: 3,
  ATK: 4,
  DEF: 5,
  MAT: 6,
  MDF: 7,
  AGI: 8,
  LUK: 9,
  TP: 10
}, Zt = (e2) => [...e2], Jt = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Qt = new e(), ea = Qt.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [320, 324, 325]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), ta = Qt.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "boolean" }]
} }, required: ["code", "indent", "parameters"] }), aa = Qt.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [132, 133, 139, 241, 245, 249, 250]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "object", properties: {
    name: { type: "string" },
    volume: { type: "integer" },
    pitch: { type: "integer" },
    pan: { type: "integer" }
  }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }] } },
  additionalProperties: false
}), ra = (e2) => aa(e2), oa = Qt.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: false }), ma = Qt.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), ia = (e2) => ma(e2), sa = Qt.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), na = Qt.compile({ type: "object", properties: {
  code: { type: "number", const: 102 },
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }] }
}, required: ["code", "indent", "parameters"] }), pa = Qt.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), da = Qt.compile({
  type: "object",
  properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), la = Qt.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, {
  type: "string"
}], minItems: 5, maxItems: 5 } } });
exports.AUTHOR_RMMZ = "rmmz", exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = { domainName: "オプション", options: {
  optDrawTitle: "ゲームタイトルの描画",
  optDisplayTp: "ウィンドウにTPを表示",
  optFloorDeath: "床ダメージで戦闘不能",
  optSlipDeath: "スリップダメージで戦闘不能",
  optAutosave: "オートセーブを有効化",
  optExtraExp: "控えメンバーも経験値を獲得",
  optFollowers: "隊列歩行",
  optSideView: "戦闘をサイドビューにする",
  optKeyItemsNumber: "大事なものの個数を表示",
  optTransparent: "透明状態で開始",
  optMessageSkip: "メッセージスキップを有効化",
  optSplashScreen: "スプラッシュ画面を表示"
} }, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = { domainName: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, exports.FILENAME_ACTORS = "Actors.json", exports.FILENAME_ANIMATIONS = "Animations.json", exports.FILENAME_ARMORS = "Armors.json", exports.FILENAME_CLASSES = "Classes.json", exports.FILENAME_COMMON_EVENTS = "CommonEvents.json", exports.FILENAME_ENEMIES = "Enemies.json", exports.FILENAME_ITEMS = "Items.json", exports.FILENAME_MAP_INFOS = "MapInfos.json", exports.FILENAME_SKILLS = "Skills.json", exports.FILENAME_STATES = "States.json", exports.FILENAME_SYSTEM = "System.json", exports.FILENAME_TILESET = "Tilesets.json", exports.FILENAME_TROOPS = "Troops.json", exports.FILENAME_WEAPONS = "Weapons.json", exports.FOLDER_AUDIO = "audio", exports.FOLDER_AUDIO_BGM = "bgm", exports.FOLDER_AUDIO_BGS = "bgs", exports.FOLDER_AUDIO_ME = "me", exports.FOLDER_AUDIO_SE = "se", exports.FOLDER_DATA = "data", exports.FOLDER_IMG = "img", exports.FOLDER_IMG_BATTLEBACK1 = "battlebacks1", exports.FOLDER_IMG_BATTLEBACK2 = "battlebacks2", exports.FOLDER_IMG_CHACTERS = "characters", exports.FOLDER_IMG_ENEMIES = "enemies", exports.FOLDER_IMG_FACES = "faces", exports.FOLDER_IMG_PARALLACES = "parallaxes", exports.FOLDER_IMG_PICTURES = "pictures", exports.FOLDER_IMG_SV_ACTORS = "sv_actors", exports.FOLDER_IMG_SV_ENEMIES = "sv_enemies", exports.FOLDER_IMG_SYSTEM = "system", exports.FOLDER_IMG_TILESETS = "tilesets", exports.FOLDER_IMG_TITLES1 = "titles1", exports.FOLDER_IMG_TITLES2 = "titles2", exports.FOLDER_JS = "js", exports.LABELS_SYSTEM_BATTLER_PARAMS = { domainName: "能力値", options: {
  agi: "敏捷",
  atk: "攻撃力",
  def: "防御力",
  eva: "回避",
  hit: "命中",
  luk: "運",
  mat: "魔法攻撃力",
  mdf: "魔法防御力",
  mhp: "最大HP",
  mmp: "最大MP"
} }, exports.LABELS_SYSTEM_GAME_COMMANDS = { domainName: "コマンド", options: {
  item: "アイテム",
  skill: "スキル",
  equip: "装備",
  status: "ステータス",
  formation: "編成",
  options: "オプション",
  save: "セーブ",
  gameEnd: "ゲーム終了",
  armor: "防具",
  weapon: "武器",
  newGame: "ニューゲーム",
  attack: "攻撃",
  guard: "防御",
  escape: "逃げる",
  fight: "戦う",
  buy: "買う",
  sell: "売る",
  cancel: "キャンセル",
  clear: "クリア",
  continue_: "続きから",
  equip2: "装備2",
  keyItem: "大事なもの",
  optimize: "最強装備",
  toTitle: "タイトルへ戻る"
} }, exports.OPERAND_CONSTANT = 0, exports.OPERAND_GAMEDATA = 3, exports.OPERAND_RANDOM = 2, exports.OPERAND_SCRIPT = 4, exports.OPERAND_VARIABLE = 1, exports.SCHEMA_SYSTEM_ADVANCED = Ne, exports.SCHEMA_SYSTEM_AUDIOFILES = we, exports.SCHEMA_SYSTEM_BATTLE_RULE_RMMZ = Le, exports.SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS = Oe, exports.SCHEMA_SYSTEM_BOOLEAN_OPTIONS = je, exports.SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE = ft, exports.SCHEMA_SYSTEM_GAME_INITIAL = Be, exports.SCHEMA_SYSTEM_IMAGE_SIZE = Ge, exports.SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION = _e, exports.SCHEMA_SYSTEM_OTHER_DATA = Ye, exports.SCHEMA_SYSTEM_RPG_DATA_NAMES = pt, exports.SCHEMA_SYSTEM_TERMS_BUNDLE = kt, exports.SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW = { additionalProperties: false, type: "object", required: ["background", "offsetX", "offsetY"], properties: {
  background: { type: "integer", minimum: 0, maximum: 1e3 },
  offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 },
  offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 }
} }, exports.SCHEMA_SYSTEM_TITLE_IMAGES = Ve, exports.SCHEMA_SYSTEM_VEHICLE = ht, exports.SRC_COLOR = "colors", exports.applyFormatRule = (e2, t2, a2, r2, o2) => {
  const m2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => f(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => f(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? L(m2, e2, a2, t2, o2) : m2;
}, exports.buildReferenceItemSources = (e2, d2, l2, c2, u2, y2) => {
  return [...S(l2, c2), ...(g2 = e2, b2 = d2, [t(g2.skills, b2), a(g2.actors, b2), r(g2.states, b2), o(g2.armors, b2), m(g2.classes, b2), i(g2.enemies, b2), s(g2.items, b2), n(g2.weapons, b2), p(g2.commonEvents, b2)]), ...et(u2, y2)];
  var g2, b2;
}, exports.cloneChoices = (e2) => ({ code: e2.code, indent: e2.indent, parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]] }), exports.cloneEventCommand = (e2) => ({ code: e2.code, indent: e2.indent, parameters: Zt(e2.parameters) }), exports.cloneParameters = Zt, exports.compileFormatRule = (e2, t2 = []) => {
  return {
    itemMappers: [...A(e2), ...t2].map(h),
    fallbackFormat: { text: T(e2), label: M(e2) },
    properties: (a2 = e2.placeHolder ?? {}, { numbers: a2.numbers ? I(a2.numbers) : [], strings: a2.strings ? I(a2.strings) : [] }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(k) : []
  };
  var a2;
}, exports.compileItemEffectDisplayData = (e2, t2, a2) => {
  const r2 = [O(o2 = t2), H(o2), q(o2), j(o2), B(o2), G(o2), V(o2), Y(o2), U(o2), z(o2), W(o2), K(o2), X(o2)];
  var o2;
  return _(a2 ? [...r2, ...a2] : r2, e2);
}, exports.compileTraitDisplayData = (e2, t2) => {
  return _([$((a2 = t2).elementRate), Z(a2.debuffRate), J(a2.stateRate), Q(a2.stateResist), ee(a2.regularParam), te(a2.extraParam), ae(a2.specialParam), re(a2.attackElement), oe(a2.attackState), me(a2.attackSpeed), ie(a2.attackTimes), se(a2.attackSkill), ne(a2.skillTypeAdd), pe(a2.skillTypeSeal), de(a2.skillAdd), le(a2.skillSeal), ce(a2.equipWeaponType), ue(a2.equipArmorType), ye(a2.equipLock), ge(a2.equipSeal), be(a2.slotType), xe(a2.actionPlus), Se(a2.specialFlag), Ie(a2.collaps), ke(a2.partyAbility)], e2);
  var a2;
}, exports.convertCommentArrayToObject = (e2) => ({ comment: e2[0] }), exports.defineSystemItems = et, exports.detectFormatErrors = (e2, t2, a2, r2 = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{ message: a2.formatVeryLong, reason: e2.pattern.slice(0, r2.formatMaxLength) }], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: v(e2, t2, a2),
  syntaxErrors: C(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, exports.domainNames = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName), exports.fromArrayCommonEvent = (e2) => ({ eventId: e2[0] }), exports.fromArrayControlSwitches = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), exports.fromArrayInputNumber = (e2) => ({
  variableId: e2[0],
  digits: e2[1]
}), exports.fromArrayScrollingTextBody = (e2) => ({ content: e2[0] }), exports.fromArrayScrollingTextHeader = (e2) => ({ speed: e2[0], skip: e2[1] }), exports.fromArraySetupChoice = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), exports.fromArraySetupChoiceItem = (e2) => ({ index: e2[0], name: e2[1] }), exports.fromArrayShowMessageHeader = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), exports.getActorValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.level;
    case 1:
      return e2.currentExp();
    case 2:
      return e2.hp;
    case 3:
      return e2.mp;
    case 12:
      return e2.tp;
  }
  return t2[6] >= 4 && t2[6] <= 11 ? e2.param(t2[6] - 4) : 0;
}, exports.getArmorCategoryEnabled = (e2) => e2.itemCategories[2], exports.getArmorTypes = Je, exports.getElementTypes = Ke, exports.getEnemyValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, exports.getEquipCommandEnabled = (e2) => e2.menuCommands[2], exports.getEquipTypes = Xe, exports.getFormationCommandEnabled = (e2) => e2.menuCommands[4], exports.getItemCategoryEnabled = (e2) => e2.itemCategories[0], exports.getItemCommandEnabled = (e2) => e2.menuCommands[0], exports.getKeyItemCategoryEnabled = (e2) => e2.itemCategories[3], exports.getParamNames = (e2) => e2.terms.params.map((e3, t2) => ({ name: e3, id: t2 })), exports.getSaveCommandEnabled = (e2) => e2.menuCommands[5], exports.getSkillCommandEnabled = (e2) => e2.menuCommands[1], exports.getSkillTypes = $e, exports.getStatusCommandEnabled = (e2) => e2.menuCommands[3], exports.getSwitches = Qe, exports.getVariableNames = We, exports.getWeaponCategoryEnabled = (e2) => e2.itemCategories[1], exports.getWeaponTypes = Ze, exports.isCloneableCommand = (e2) => e2.parameters.every(Jt), exports.isCommandAudio = ra, exports.isCommandChangeActorText = (e2) => ea(e2), exports.isCommandChangeBattleBgm = (e2) => ra(e2) && 132 === e2.code, exports.isCommandChangeDefeatMe = (e2) => ra(e2) && 139 === e2.code, exports.isCommandChangeVictoryMe = (e2) => ra(e2) && 133 === e2.code, exports.isCommandCommentBody = (e2) => ia(e2) && 408 === e2.code, exports.isCommandCommentHeader = (e2) => ia(e2) && 108 === e2.code, exports.isCommandCommonEvent = (e2) => sa(e2), exports.isCommandInputNumber = (e2) => da(e2), exports.isCommandNonParam = (e2) => oa(e2), exports.isCommandPlayBgm = (e2) => ra(e2) && 241 === e2.code, exports.isCommandPlayBgs = (e2) => ra(e2) && 245 === e2.code, exports.isCommandPlayMe = (e2) => ra(e2) && 249 === e2.code, exports.isCommandPlaySe = (e2) => ra(e2) && 250 === e2.code, exports.isCommandScriptBody = (e2) => ia(e2) && 655 === e2.code, exports.isCommandScriptHeader = (e2) => ia(e2) && 355 === e2.code, exports.isCommandScrollTextHead = (e2) => ta(e2), exports.isCommandShowChoiceItem = (e2) => pa(e2), exports.isCommandShowChoices = (e2) => na(e2), exports.isCommandShowMessage = (e2) => la(e2), exports.isCommandShowMessageBody = (e2) => ia(e2) && 401 === e2.code, exports.isCommandShowScrollingTextBody = (e2) => ia(e2) && 405 === e2.code, exports.isCommandTextBody = ia, exports.isDataSystem = (e2) => Dt(e2), exports.makeAudioCommand = (e2, t2) => Ht(e2, De({ name: t2 })), exports.makeAudioFileParams = De, exports.makeBooleanOptions = He, exports.makeCommandAudioAny = Ht, exports.makeCommandChangeActorName = (e2, t2 = 0) => ({
  code: 320,
  parameters: [e2.actorId, e2.name],
  indent: t2
}), exports.makeCommandChangeActorNickName = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), exports.makeCommandChangeActorProfile = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), exports.makeCommandChangeBattleBGM = (e2, t2 = 0) => Ht(132, e2, t2), exports.makeCommandChangeDefeatME = (e2, t2 = 0) => Ht(139, e2, t2), exports.makeCommandChangeVictoryME = (e2, t2 = 0) => Ht(133, e2, t2), exports.makeCommandCommentBody = Vt, exports.makeCommandCommentHeader = Gt, exports.makeCommandCommonEvent = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: qt(e2 ?? {})
}), exports.makeCommandControlSwitches = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: jt(e2) }), exports.makeCommandInputNumber = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Yt(e2 ?? {})
}), exports.makeCommandPlayBGM = (e2, t2 = 0) => Ht(241, e2, t2), exports.makeCommandPlayBGS = (e2, t2 = 0) => Ht(245, e2, t2), exports.makeCommandPlayME = (e2, t2 = 0) => Ht(249, e2, t2), exports.makeCommandPlaySE = (e2, t2 = 0) => Ht(250, e2, t2), exports.makeCommandScriptArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Kt(e3, t2) : Xt(e3, t2)), exports.makeCommandScriptBody = Xt, exports.makeCommandScriptHeader = Kt, exports.makeCommandScrollingTextBody = (e2 = "", t2 = 0) => ({ code: 405, indent: t2 ?? 0, parameters: Wt(e2) }), exports.makeCommandScrollingTextHeader = (e2 = {}, t2 = 0) => ({
  code: 105,
  indent: t2,
  parameters: Ut(e2)
}), exports.makeCommandSetupChoice = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), exports.makeCommandShowChoiceItem = (e2, t2 = 0) => ({
  code: 402,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""]
}), exports.makeCommandShowMessage = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), exports.makeCommandShowMessageBody = (e2, t2 = 0) => ({
  code: 401,
  indent: t2,
  parameters: [e2]
}), exports.makeCommentArray = Bt, exports.makeCommentCommandArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Gt(e3, t2) : Vt(e3, t2)), exports.makeDataNames = dt, exports.makeEditorSetting = Tt, exports.makeGameInitial = (e2 = {}) => ({ startMapId: e2.startMapId ?? 0, startX: e2.startX ?? 0, startY: e2.startY ?? 0, partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1] }), exports.makeItemCategories = Pe, exports.makeItemCategoriesFromArray = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), exports.makeMenuCommandsEnabled = ze, exports.makeMenuCommandsEnabledFromArray = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), exports.makeParamNamesArray = Et, exports.makeSoundsArray = Fe, exports.makeSoundsObject = (e2) => ({
  cursor: e2[0],
  ok: e2[1],
  cancel: e2[2],
  buzzer: e2[3],
  equip: e2[4],
  save: e2[5],
  load: e2[6],
  battleStart: e2[7],
  escape: e2[8],
  enemyAttack: e2[9],
  enemyDamage: e2[10],
  enemyCollapse: e2[11],
  bossCollapes1: e2[12],
  bossCollapes2: e2[13],
  actorDamage: e2[14],
  actorCollapse: e2[15],
  playRecovery: e2[16],
  playMiss: e2[17],
  playEvasion: e2[18],
  playMagicEvasion: e2[19],
  playReflection: e2[20],
  shop: e2[21],
  useItem: e2[22],
  useSkill: e2[23]
}), exports.makeSystemAdvanced = ve, exports.makeSystemData = (e2) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v;
  const t2 = Pt(e2.size);
  return {
    ...He(e2.options),
    currencyUnit: ((_a = e2.texts) == null ? void 0 : _a.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: Fe(e2.sounds),
    editor: Tt(e2.editing),
    advanced: ve(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...dt(e2.dataNames ?? {}),
    magicSkills: Lt([]),
    airship: At((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: At((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: At((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: De((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: De((_i = e2.me) == null ? void 0 : _i.gameoverMe),
    titleBgm: De((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: zt((_n = e2.battleTest) == null ? void 0 : _n.testBattlers, Ot),
    battleBgm: De((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: De((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r = e2.editorTemporary) == null ? void 0 : _r.battlerName) ?? "",
    locale: "",
    startMapId: ((_s = e2.gameInit) == null ? void 0 : _s.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: wt(e2.terms ?? {}),
    itemCategories: Pe(e2.itemCategories),
    partyMembersArray: Lt((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: ze(e2.menuComamnds)
  };
}, exports.makeTermsBasic = ct, exports.makeTermsBasicFromArray = (e2) => ({ level: e2[0], levelA: e2[1], hp: e2[2], hpA: e2[3], mp: e2[4], mpA: e2[5], tp: e2[6], tpA: e2[7], experience: e2[8], exp: e2[9] }), exports.makeTermsCommand = ut, exports.makeTermsCommandFromArray = (e2) => ({
  fight: e2[0],
  escape: e2[1],
  attack: e2[2],
  guard: e2[3],
  item: e2[4],
  skill: e2[5],
  equip: e2[6],
  status: e2[7],
  formation: e2[8],
  save: e2[9],
  gameEnd: e2[10],
  options: e2[11],
  weapon: e2[12],
  armor: e2[13],
  keyItem: e2[14],
  equip2: e2[15],
  optimize: e2[16],
  clear: e2[17],
  newGame: e2[18],
  continue_: e2[19],
  toTitle: e2[21],
  cancel: e2[22],
  buy: e2[24],
  sell: e2[25]
}), exports.makeTermsMessages = bt, exports.makeTitleCommandWindow = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), exports.makeVehicleData = At, exports.mergeItemsSource = _, exports.toArrayCommonEvent = qt, exports.toArrayControlSwitches = jt, exports.toArrayInputNumber = Yt, exports.toArrayOperandActorStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], exports.toArrayOperandConstant = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], exports.toArrayOperandEnemyStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, $t[t2.param]], exports.toArrayOperandItemData = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], exports.toArrayOperandRandom = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], exports.toArrayOperandScript = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], exports.toArrayOperandVariable = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], exports.toArrayScrollingTextBody = Wt, exports.toArrayScrollingTextHeader = Ut, exports.toArraySetupChoice = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], exports.toArraySetupChoiceItem = (e2) => [e2.index ?? 0, e2.name ?? ""], exports.toArrayShowMessageHeader = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName];
//# sourceMappingURL=rpgTypes.cjs.js.map
