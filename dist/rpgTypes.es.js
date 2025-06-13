import e from "ajv";
const t = (e2, t2) => ({ label: t2.skill.domainName, items: e2, source: { author: "rmmz", module: "data", kind: "skill" } }), a = (e2, t2) => ({ items: e2, label: t2.actor.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "actor"
} }), r = (e2, t2) => ({ items: e2, label: t2.state.domainName, source: { author: "rmmz", module: "data", kind: "state" } }), i = (e2, t2) => ({
  items: e2,
  label: t2.armor.domainName,
  source: { author: "rmmz", kind: "armor", module: "data" }
}), m = (e2, t2) => ({
  items: e2,
  label: t2.class.domainName,
  source: { author: "rmmz", module: "data", kind: "class" }
}), o = (e2, t2) => ({ items: e2, label: t2.enemy.domainName, source: { author: "rmmz", module: "data", kind: "enemy" } }), n = (e2, t2) => ({ items: e2, label: t2.item.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "item"
} }), s = (e2, t2) => ({ items: e2, label: t2.weapon.domainName, source: { author: "rmmz", module: "data", kind: "weapon" } }), p = (e2, t2) => ({ items: e2, label: t2.commonEvent.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "common_event"
} }), d = (e2, t2) => ({ items: l(e2.options, t2), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "collaps" } }), l = (e2, t2) => [{
  id: 0,
  name: t2.normal
}, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, { id: 3, name: e2.noneCollaps }], c = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, {
  id: 3,
  name: e2.criticalEvasionRate
}, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, {
  id: 8,
  name: e2.mpRegenerationRate
}, { id: 9, name: e2.tpRegenerationRate }], u = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, {
  id: 5,
  name: e2.mdef
}, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], y = (e2) => ({ items: g(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "sparams" } }), g = (e2) => [{ id: 0, name: e2.targetRate }, {
  id: 1,
  name: e2.guardEffectRate
}, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, {
  id: 7,
  name: e2.magicDamageRate
}, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], b = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, {
  id: 3,
  name: e2.raisePreemptive
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], k = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], h = (e2, t2) => {
  return [(m2 = e2.regularParam, { items: u(m2.options), label: m2.domainName, source: { author: "rmmz", module: "trait", kind: "params" } }), (i2 = e2.extraParam, {
    items: c(i2.options),
    label: i2.domainName,
    source: { author: "rmmz", module: "trait", kind: "xparams" }
  }), y(e2.specialParam), d(e2.collaps, t2), (r2 = e2.specialFlag, {
    items: k(r2.options),
    label: r2.domainName,
    source: { author: "rmmz", module: "trait", kind: "sflag" }
  }), (a2 = e2.partyAbility, { items: b(a2.options), label: a2.domainName, source: {
    author: "rmmz",
    module: "trait",
    kind: "partyAbility"
  } })];
  var a2, r2, i2, m2;
}, I = "rmmz", f = "colors", v = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), S = (e2) => ({ dataKey: e2.dataIdKey, placeHolder: `{${e2.dataIdKey}}`, sourceId: {
  author: e2.sourceId.author,
  kind: e2.sourceId.kind,
  module: e2.sourceId.module
} }), T = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, x = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, N = (e2, t2 = []) => {
  return { itemMappers: [...x(e2), ...t2].map(M), fallbackFormat: { text: w(e2), label: z(e2) }, properties: (a2 = e2.placeHolder ?? {}, {
    numbers: a2.numbers ? v(a2.numbers) : [],
    strings: a2.strings ? v(a2.strings) : []
  }), arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(S) : [] };
  var a2;
}, M = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), w = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.kindKey), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.kindKey);
    }), t3;
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, z = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, A = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, q = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? {
  formatLabel: e2.label,
  syntaxErrors: [{ message: a2.formatVeryLong, reason: e2.pattern.slice(0, r2.formatMaxLength) }],
  semanticErrors: []
} : {
  formatLabel: e2.label,
  semanticErrors: D(e2, t2, a2),
  syntaxErrors: P(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, P = (e2, t2, a2, r2) => {
  const i2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), m2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return i2.reduce((e3, t3) => {
    const i3 = t3[1];
    return 0 === i3.length ? e3 : i3.length > r2 ? (e3.push({ message: a2.longPlaceHolder, reason: i3.slice(0, r2) }), e3) : (m2.has(i3) || e3.push({ message: a2.extraPlaceHolder, reason: i3 }), e3);
  }, []);
}, D = (e2, t2, a2) => x(t2).reduce((t3, r2) => {
  const i2 = E(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), E = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? {
    message: a2.missingName,
    reason: t2.placeHolder
  } : r2 && !i2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, j = (e2, t2) => {
  const a2 = H(t2);
  return e2.reduce((e3, t3) => {
    const r2 = F(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, F = (e2, t2) => {
  const a2 = R(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, R = (e2, t2) => {
  if (e2) return t2.get(T(e2));
}, H = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: C(t2.items), source: t2.source, label: t2.label };
  return e3.set(T(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), C = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name })), L = (e2, t2, a2, r2, i2) => {
  const m2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => A(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => A(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? V(m2, e2, a2, t2, i2) : m2;
}, V = (e2, t2, a2, r2, i2) => {
  const m2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, m2), e2);
}, G = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), K = (e2) => G(41, e2.special), W = (e2) => G(11, e2.recoverHp), X = (e2) => G(12, e2.recoverMp), B = (e2) => G(13, e2.gainTp), Y = (e2) => G(21, e2.addState, { author: "rmmz", module: "data", kind: "state" }), U = (e2) => G(22, e2.removeState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), $ = (e2) => G(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), O = (e2) => G(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), _ = (e2) => G(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), Z = (e2) => G(34, e2.removeDebuff, { author: "rmmz", module: "trait", kind: "params" }), J = (e2) => G(42, e2.grow, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Q = (e2) => G(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), ee = (e2) => G(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), te = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 11, dataSource: ze() }), ae = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 12, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "params"
} }), re = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Me() }), ie = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 14, dataSource: Me() }), me = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), oe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 22, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), ne = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 23, dataSource: { author: "rmmz", module: "trait", kind: "sparams" } }), se = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 31,
  dataSource: ze()
}), pe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Me() }), de = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), le = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), ce = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: we() }), ue = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: Ae()
}), ye = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: Ae() }), ge = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 43,
  dataSource: we()
}), be = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 44, dataSource: we() }), ke = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: qe() }), he = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: Pe()
}), Ie = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: De() }), fe = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 54,
  dataSource: De()
}), ve = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 55, dataSource: De() }), Se = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), Te = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), xe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Ne = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Me = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), we = () => ({ author: "rmmz", module: "data", kind: "skill" }), ze = () => ({ author: "rmmz", module: "system", kind: "elements" }), Ae = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), qe = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Pe = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), De = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Ee = (e2 = {}) => ({
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
}), je = {
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
    mainFontFilename: {
      type: "string"
    },
    fallbackFonts: { type: "string" },
    fontSize: { type: "integer" }
  },
  required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
  additionalProperties: false
}, Fe = { type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, Re = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), He = (e2 = {}) => [Re(e2.cursor), Re(e2.ok), Re(e2.cancel), Re(e2.buzzer), Re(e2.equip), Re(e2.save), Re(e2.load), Re(e2.battleStart), Re(e2.escape), Re(e2.enemyAttack), Re(e2.enemyDamage), Re(e2.enemyCollapse), Re(e2.bossCollapes1), Re(e2.bossCollapes2), Re(e2.actorDamage), Re(e2.actorCollapse), Re(e2.playRecovery), Re(e2.playMiss), Re(e2.playEvasion), Re(e2.playMagicEvasion), Re(e2.playReflection), Re(e2.shop), Re(e2.useItem), Re(e2.useSkill)], Ce = (e2) => ({
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
}), Le = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, Ve = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: Le, victoryMe: Le, gameoverMe: Le, titleBgm: Le, defeatMe: Le, sounds: {
    type: "array",
    items: Le,
    minItems: 24,
    maxItems: 24
  } }
}, Ge = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, Ke = (e2) => e2.menuCommands[0], We = (e2) => e2.menuCommands[1], Xe = (e2) => e2.menuCommands[2], Be = (e2) => e2.menuCommands[3], Ye = (e2) => e2.menuCommands[4], Ue = (e2) => e2.menuCommands[5], $e = (e2) => e2.itemCategories[0], Oe = (e2) => e2.itemCategories[1], _e = (e2) => e2.itemCategories[2], Ze = (e2) => e2.itemCategories[3], Je = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Qe = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), et = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], tt = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), at = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, rt = (e2 = {}) => ({
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
}), it = { type: "boolean" }, mt = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: it,
    optDisplayTp: it,
    optDrawTitle: it,
    optExtraExp: it,
    optFloorDeath: it,
    optFollowers: it,
    optKeyItemsNumber: it,
    optSideView: it,
    optSlipDeath: it,
    optTransparent: it,
    optMessageSkip: it,
    optSplashScreen: it
  }
}, ot = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), nt = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, st = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, pt = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: {
  type: "string"
} } }, dt = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, lt = (e2, t2) => ({
  name: e2,
  id: t2
}), ct = (e2) => e2.variables.map(lt), ut = (e2) => e2.elements.map(lt), yt = (e2) => e2.equipTypes.map(lt), gt = (e2) => e2.skillTypes.map(lt), bt = (e2) => e2.weaponTypes.map(lt), kt = (e2) => e2.armorTypes.map(lt), ht = (e2) => e2.switches.map(lt), It = (e2, t2) => [vt(e2, t2), St(e2, t2), Mt(e2, t2), Tt(e2, t2), ft(e2, t2), xt(e2, t2), Nt(e2, t2)], ft = (e2, t2) => ({
  items: kt(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), vt = (e2, t2) => ({ items: ut(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), St = (e2, t2) => ({ items: yt(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Tt = (e2, t2) => ({
  items: gt(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), xt = (e2, t2) => ({ items: ct(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), Nt = (e2, t2) => ({ items: ht(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), Mt = (e2, t2) => ({
  items: bt(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), wt = { type: "array", items: { type: "string" } }, zt = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: wt,
    skillTypes: wt,
    elements: wt,
    variables: wt,
    equipTypes: wt,
    switches: wt,
    armorTypes: wt
  }
}, At = (e2) => ({
  armorTypes: qt(e2.armorTypes),
  elements: qt(e2.elements),
  equipTypes: qt(e2.equipTypes),
  weaponTypes: qt(e2.weaponTypes),
  skillTypes: qt(e2.skillTypes),
  variables: qt(e2.variables),
  switches: qt(e2.switches)
}), qt = (e2) => e2 ? [...e2] : [], Pt = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], Dt = (e2) => ({
  level: e2[0],
  levelA: e2[1],
  hp: e2[2],
  hpA: e2[3],
  mp: e2[4],
  mpA: e2[5],
  tp: e2[6],
  tpA: e2[7],
  experience: e2[8],
  exp: e2[9]
}), Et = (e2) => jt(e2, ""), jt = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Ft = (e2) => ({
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
}), Rt = (e2, t2) => "string" == typeof e2 ? e2 : t2, Ht = (e2) => ({
  actionFailure: Rt(e2.actionFailure, "Action failed."),
  actorDamage: Rt(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: Rt(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: Rt(e2.actorGain, "%1 gained %2."),
  actorLoss: Rt(e2.actorLoss, "%1 lost %2."),
  actorDrain: Rt(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: Rt(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: Rt(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: Rt(e2.alwaysDash, "Always dash."),
  bgmVolume: Rt(e2.bgmVolume, "BGM volume"),
  bgsVolume: Rt(e2.bgsVolume, "BGS volume"),
  commandRemember: Rt(e2.commandRemember, "Command remember."),
  criticalToActor: Rt(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: Rt(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: Rt(e2.counterAttack, "%1 countered!"),
  debuffAdd: Rt(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: Rt(e2.defeat, "Defeat."),
  enemyDamage: Rt(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: Rt(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: Rt(e2.enemyGain, "%1 gained %2."),
  enemyLoss: Rt(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: Rt(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: Rt(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: Rt(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: Rt(e2.evasion, "%1 evaded the attack!"),
  autosave: Rt(e2.autosave, "Autosave"),
  escapeFailure: Rt(e2.escapeFailure, "Escape failed."),
  escapeStart: Rt(e2.escapeStart, "%1 started to escape!"),
  emerge: Rt(e2.emerge, "%1 appeared!"),
  expNext: Rt(e2.expNext, "Next level in %1 EXP."),
  expTotal: Rt(e2.expTotal, "Total EXP: %1"),
  file: Rt(e2.file, "File"),
  buffAdd: Rt(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: Rt(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: Rt(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: Rt(e2.obtainGold, "%1 gold obtained."),
  obtainItem: Rt(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: Rt(e2.obtainSkill, "%1 learned %2."),
  levelUp: Rt(e2.levelUp, "%1 leveled up!"),
  partyName: Rt(e2.partyName, "Party"),
  loadMessage: Rt(e2.loadMessage, "Load %1?"),
  meVolume: Rt(e2.meVolume, "ME volume"),
  possession: Rt(e2.possession, "Possession"),
  preemptive: Rt(e2.preemptive, "%1 attacked first!"),
  saveMessage: Rt(e2.saveMessage, "Save %1?"),
  seVolume: Rt(e2.seVolume, "SE volume"),
  magicEvasion: Rt(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: Rt(e2.magicReflection, "%1 reflected the magic!"),
  substitute: Rt(e2.substitute, "%1 took the hit!"),
  surprise: Rt(e2.surprise, "%1 surprised the enemy!"),
  touchUI: Rt(e2.touchUI, "Touch UI"),
  useItem: Rt(e2.useItem, "%1 used %2."),
  victory: Rt(e2.victory, "Victory!")
}), Ct = { type: "string" }, Lt = {
  type: "string",
  nullable: true
}, Vt = { type: "string" }, Gt = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: Vt,
      actorDamage: Vt,
      actorNoDamage: Vt,
      actorRecovery: Vt,
      actorGain: Vt,
      actorLoss: Vt,
      actorDrain: Vt,
      alwaysDash: Vt,
      bgmVolume: Vt,
      bgsVolume: Vt,
      commandRemember: Vt,
      criticalToActor: Vt,
      criticalToEnemy: Vt,
      counterAttack: Vt,
      debuffAdd: Vt,
      defeat: Vt,
      enemyDamage: Vt,
      enemyNoDamage: Vt,
      enemyRecovery: Vt,
      enemyGain: Vt,
      enemyLoss: Vt,
      enemyDrain: Vt,
      evasion: Vt,
      expNext: Vt,
      expTotal: Vt,
      escapeFailure: Vt,
      escapeStart: Vt,
      file: Vt,
      loadMessage: Vt,
      meVolume: Vt,
      magicEvasion: Vt,
      magicReflection: Vt,
      obtainExp: Vt,
      obtainGold: Vt,
      obtainItem: Vt,
      obtainSkill: Vt,
      partyName: Vt,
      preemptive: Vt,
      saveMessage: Vt,
      seVolume: Vt,
      substitute: Vt,
      touchUI: Vt,
      victory: Vt,
      useItem: Vt,
      buffAdd: Vt,
      buffRemove: Vt,
      actorNoHit: Vt,
      enemyNoHit: Vt,
      autosave: Vt,
      emerge: Vt,
      levelUp: Vt,
      possession: Vt,
      surprise: Vt
    }
  }, commands: {
    type: "array",
    items: [Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Ct, Lt, Ct, Ct, Lt, Ct, Ct],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, Kt = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Wt = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Xt = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), Bt = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: { background: { type: "integer", minimum: 0, maximum: 1e3 }, offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 }, offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 } }
}, Yt = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: Re(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Ut = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: { characterIndex: {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, characterName: { type: "string", minLength: 1 }, bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: { name: { type: "string" }, volume: {
    type: "integer",
    minimum: 0,
    maximum: 100
  }, pitch: { type: "integer", minimum: 50, maximum: 150 }, pan: { type: "integer", minimum: -100, maximum: 100 } } }, startMapId: { type: "integer", minimum: 0 }, startX: {
    type: "integer",
    minimum: 0,
    maximum: 5e3
  }, startY: { type: "integer", minimum: 0, maximum: 5e3 } }
}, $t = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Ot = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } }, _t = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Ot },
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
}, Zt = { domainName: "オプション", options: {
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
} }, Jt = {
  domainName: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Qt = {
  domainName: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, ea = { domainName: "コマンド", options: {
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
} }, ta = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: Ut, boat: Ut, ship: Ut, advanced: je, attackMotions: { type: "array", items: Fe } }
}, aa = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), ra = new e({ strict: true }), ia = ((e2) => {
  const t2 = aa(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([ta, Ve, Ge, at, mt, nt, st, dt, zt, Gt, pt, _t]), ma = ra.compile(ia), oa = (e2) => ma(e2), na = ra.compile(Ot);
ra.compile(Fe);
const sa = ra.compile(st), pa = (e2) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r2, _s, _t2, _u, _v;
  const t2 = ca(e2.size);
  return {
    ...rt(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: He(e2.sounds),
    editor: $t(e2.editing),
    advanced: Ee(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...At(e2.dataNames ?? {}),
    magicSkills: la([]),
    airship: Yt((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: Yt((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: Yt((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: Re((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: Re((_i = e2.me) == null ? void 0 : _i.gameoverMe),
    titleBgm: Re((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: ua((_n = e2.battleTest) == null ? void 0 : _n.testBattlers, ya),
    battleBgm: Re((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: Re((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s = e2.gameInit) == null ? void 0 : _s.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: da(e2.terms ?? {}),
    itemCategories: Je(e2.itemCategories),
    partyMembersArray: la((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: et(e2.menuComamnds)
  };
}, da = (e2) => ({
  basic: Pt(e2.basic ?? {}),
  commands: Et(e2.commands ?? {}),
  params: Kt(e2.params ?? {}),
  messages: Ht(e2.messages ?? {})
}), la = (e2) => e2 ? [...e2] : [], ca = (e2) => ((e3) => sa(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, ua = (e2, t2) => e2 ? e2.map(t2) : [], ya = (e2) => ((e3) => na(e3))(e2) ? { actorId: e2.actorId, equips: la(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, ga = (e2, d2, l2, c2, u2, y2) => {
  return [...h(l2, c2), ...(g2 = e2, b2 = d2, [t(g2.skills, b2), a(g2.actors, b2), r(g2.states, b2), i(g2.armors, b2), m(g2.classes, b2), o(g2.enemies, b2), n(g2.items, b2), s(g2.weapons, b2), p(g2.commonEvents, b2)]), ...It(u2, y2)];
  var g2, b2;
}, ba = (e2, t2) => {
  return j([te((a2 = t2).elementRate), ae(a2.debuffRate), re(a2.stateRate), ie(a2.stateResist), me(a2.regularParam), oe(a2.extraParam), ne(a2.specialParam), se(a2.attackElement), pe(a2.attackState), de(a2.attackSpeed), le(a2.attackTimes), ce(a2.attackSkill), ue(a2.skillTypeAdd), ye(a2.skillTypeSeal), ge(a2.skillAdd), be(a2.skillSeal), ke(a2.equipWeaponType), he(a2.equipArmorType), Ie(a2.equipLock), fe(a2.equipSeal), ve(a2.slotType), Se(a2.actionPlus), Te(a2.specialFlag), xe(a2.collaps), Ne(a2.partyAbility)], e2);
  var a2;
}, ka = (e2, t2, a2) => {
  const r2 = [W(i2 = t2), X(i2), B(i2), Y(i2), U(i2), $(i2), O(i2), _(i2), Z(i2), K(i2), J(i2), Q(i2), ee(i2)];
  var i2;
  return j(a2 ? [...r2, ...a2] : r2, e2);
}, ha = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName), Ia = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), fa = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), va = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), Sa = (e2, t2) => Ta(e2, Re({ name: t2 })), Ta = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [Re(t2)],
  indent: a2
}), xa = (e2, t2 = 0) => Ta(241, e2, t2), Na = (e2, t2 = 0) => Ta(245, e2, t2), Ma = (e2, t2 = 0) => Ta(249, e2, t2), wa = (e2, t2 = 0) => Ta(250, e2, t2), za = (e2, t2 = 0) => Ta(132, e2, t2), Aa = (e2, t2 = 0) => Ta(133, e2, t2), qa = (e2, t2 = 0) => Ta(139, e2, t2), Pa = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Ea(e2 ?? {})
}), Da = (e2) => ({ eventId: e2[0] }), Ea = (e2) => [e2.eventId ?? 0], ja = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), Fa = (e2) => [e2.min, e2.max, e2.value], Ra = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: Fa(e2)
}), Ha = (e2) => [e2], Ca = (e2) => ({ comment: e2[0] }), La = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: Ha(e2) }), Va = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: Ha(e2)
}), Ga = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? La(e3, t2) : Va(e3, t2)), Ka = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Wa = (e2) => ({ variableId: e2[0], digits: e2[1] }), Xa = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Ka(e2 ?? {})
}), Ba = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Ya = (e2) => ({ speed: e2[0], skip: e2[1] }), Ua = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Ba(e2) }), $a = (e2 = "") => [e2], Oa = (e2) => ({ content: e2[0] }), _a = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: $a(e2)
}), Za = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Ja = (e2) => ({ index: e2[0], name: e2[1] }), Qa = (e2) => [e2.index ?? 0, e2.name ?? ""], er = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), tr = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], ar = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), rr = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), ir = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), mr = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), or = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], nr = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), sr = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), pr = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), dr = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? sr(e3, t2) : pr(e3, t2)), lr = 0, cr = 1, ur = 2, yr = 3, gr = 4, br = {
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
}, kr = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], hr = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], Ir = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], fr = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], vr = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], Sr = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Tr = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, br[t2.param]], xr = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, Nr = (e2, t2) => {
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
}, Mr = (e2) => [...e2], wr = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Mr(e2.parameters)
}), zr = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Ar = (e2) => e2.parameters.every(zr), qr = new e(), Pr = qr.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), Dr = (e2) => Pr(e2), Er = qr.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), jr = (e2) => Er(e2), Fr = qr.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [132, 133, 139, 241, 245, 249, 250] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{
      type: "object",
      properties: { name: { type: "string" }, volume: { type: "integer" }, pitch: { type: "integer" }, pan: { type: "integer" } },
      required: ["name", "volume", "pitch", "pan"],
      additionalProperties: false
    }]
  } },
  additionalProperties: false
}), Rr = (e2) => Fr(e2), Hr = qr.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Cr = (e2) => Hr(e2), Lr = qr.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Vr = (e2) => Lr(e2), Gr = qr.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Kr = (e2) => Gr(e2), Wr = qr.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Xr = (e2) => Wr(e2), Br = qr.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), Yr = (e2) => Br(e2), Ur = qr.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), $r = (e2) => Ur(e2), Or = qr.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), _r = (e2) => Or(e2), Zr = (e2) => Rr(e2) && 241 === e2.code, Jr = (e2) => Rr(e2) && 245 === e2.code, Qr = (e2) => Rr(e2) && 249 === e2.code, ei = (e2) => Rr(e2) && 250 === e2.code, ti = (e2) => Rr(e2) && 132 === e2.code, ai = (e2) => Rr(e2) && 133 === e2.code, ri = (e2) => Rr(e2) && 139 === e2.code, ii = (e2) => Vr(e2) && 401 === e2.code, mi = (e2) => Vr(e2) && 405 === e2.code, oi = (e2) => Vr(e2) && 108 === e2.code, ni = (e2) => Vr(e2) && 408 === e2.code, si = (e2) => Vr(e2) && 355 === e2.code, pi = (e2) => Vr(e2) && 655 === e2.code, di = "bgm", li = "se", ci = "me", ui = "bgs", yi = "battlebacks1", gi = "battlebacks2", bi = "characters", ki = "enemies", hi = "faces", Ii = "parallaxes", fi = "pictures", vi = "sv_actors", Si = "sv_enemies", Ti = "system", xi = "tilesets", Ni = "titles1", Mi = "titles2", wi = "System.json", zi = "Actors.json", Ai = "Classes.json", qi = "Skills.json", Pi = "Items.json", Di = "Weapons.json", Ei = "Armors.json", ji = "Enemies.json", Fi = "Troops.json", Ri = "States.json", Hi = "Animations.json", Ci = "Tilesets.json", Li = "CommonEvents.json", Vi = "MapInfos.json", Gi = "data", Ki = "img", Wi = "audio", Xi = "js";
export {
  I as AUTHOR_RMMZ,
  Zt as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Jt as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  zi as FILENAME_ACTORS,
  Hi as FILENAME_ANIMATIONS,
  Ei as FILENAME_ARMORS,
  Ai as FILENAME_CLASSES,
  Li as FILENAME_COMMON_EVENTS,
  ji as FILENAME_ENEMIES,
  Pi as FILENAME_ITEMS,
  Vi as FILENAME_MAP_INFOS,
  qi as FILENAME_SKILLS,
  Ri as FILENAME_STATES,
  wi as FILENAME_SYSTEM,
  Ci as FILENAME_TILESET,
  Fi as FILENAME_TROOPS,
  Di as FILENAME_WEAPONS,
  Wi as FOLDER_AUDIO,
  di as FOLDER_AUDIO_BGM,
  ui as FOLDER_AUDIO_BGS,
  ci as FOLDER_AUDIO_ME,
  li as FOLDER_AUDIO_SE,
  Gi as FOLDER_DATA,
  Ki as FOLDER_IMG,
  yi as FOLDER_IMG_BATTLEBACK1,
  gi as FOLDER_IMG_BATTLEBACK2,
  bi as FOLDER_IMG_CHACTERS,
  ki as FOLDER_IMG_ENEMIES,
  hi as FOLDER_IMG_FACES,
  Ii as FOLDER_IMG_PARALLACES,
  fi as FOLDER_IMG_PICTURES,
  vi as FOLDER_IMG_SV_ACTORS,
  Si as FOLDER_IMG_SV_ENEMIES,
  Ti as FOLDER_IMG_SYSTEM,
  xi as FOLDER_IMG_TILESETS,
  Ni as FOLDER_IMG_TITLES1,
  Mi as FOLDER_IMG_TITLES2,
  Xi as FOLDER_JS,
  Qt as LABELS_SYSTEM_BATTLER_PARAMS,
  ea as LABELS_SYSTEM_GAME_COMMANDS,
  lr as OPERAND_CONSTANT,
  yr as OPERAND_GAMEDATA,
  ur as OPERAND_RANDOM,
  gr as OPERAND_SCRIPT,
  cr as OPERAND_VARIABLE,
  je as SCHEMA_SYSTEM_ADVANCED,
  Ve as SCHEMA_SYSTEM_AUDIOFILES,
  Ge as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  at as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  mt as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  _t as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  nt as SCHEMA_SYSTEM_GAME_INITIAL,
  st as SCHEMA_SYSTEM_IMAGE_SIZE,
  Fe as SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  dt as SCHEMA_SYSTEM_OTHER_DATA,
  zt as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  Gt as SCHEMA_SYSTEM_TERMS_BUNDLE,
  Bt as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  pt as SCHEMA_SYSTEM_TITLE_IMAGES,
  Ut as SCHEMA_SYSTEM_VEHICLE,
  f as SRC_COLOR,
  L as applyFormatRule,
  ga as buildReferenceItemSources,
  rr as cloneChoices,
  wr as cloneEventCommand,
  Mr as cloneParameters,
  N as compileFormatRule,
  ka as compileItemEffectDisplayData,
  ba as compileTraitDisplayData,
  Ca as convertCommentArrayToObject,
  It as defineSystemItems,
  q as detectFormatErrors,
  ha as domainNames,
  Da as fromArrayCommonEvent,
  ja as fromArrayControlSwitches,
  Wa as fromArrayInputNumber,
  Oa as fromArrayScrollingTextBody,
  Ya as fromArrayScrollingTextHeader,
  er as fromArraySetupChoice,
  Ja as fromArraySetupChoiceItem,
  mr as fromArrayShowMessageHeader,
  Nr as getActorValue,
  _e as getArmorCategoryEnabled,
  kt as getArmorTypes,
  ut as getElementTypes,
  xr as getEnemyValue,
  Xe as getEquipCommandEnabled,
  yt as getEquipTypes,
  Ye as getFormationCommandEnabled,
  $e as getItemCategoryEnabled,
  Ke as getItemCommandEnabled,
  Ze as getKeyItemCategoryEnabled,
  Wt as getParamNames,
  Ue as getSaveCommandEnabled,
  We as getSkillCommandEnabled,
  gt as getSkillTypes,
  Be as getStatusCommandEnabled,
  ht as getSwitches,
  ct as getVariableNames,
  Oe as getWeaponCategoryEnabled,
  bt as getWeaponTypes,
  Ar as isCloneableCommand,
  Rr as isCommandAudio,
  Dr as isCommandChangeActorText,
  ti as isCommandChangeBattleBgm,
  ri as isCommandChangeDefeatMe,
  ai as isCommandChangeVictoryMe,
  ni as isCommandCommentBody,
  oi as isCommandCommentHeader,
  Kr as isCommandCommonEvent,
  $r as isCommandInputNumber,
  Cr as isCommandNonParam,
  Zr as isCommandPlayBgm,
  Jr as isCommandPlayBgs,
  Qr as isCommandPlayMe,
  ei as isCommandPlaySe,
  pi as isCommandScriptBody,
  si as isCommandScriptHeader,
  jr as isCommandScrollTextHead,
  Yr as isCommandShowChoiceItem,
  Xr as isCommandShowChoices,
  _r as isCommandShowMessage,
  ii as isCommandShowMessageBody,
  mi as isCommandShowScrollingTextBody,
  Vr as isCommandTextBody,
  oa as isDataSystem,
  Sa as makeAudioCommand,
  Re as makeAudioFileParams,
  rt as makeBooleanOptions,
  Ta as makeCommandAudioAny,
  Ia as makeCommandChangeActorName,
  fa as makeCommandChangeActorNickName,
  va as makeCommandChangeActorProfile,
  za as makeCommandChangeBattleBGM,
  qa as makeCommandChangeDefeatME,
  Aa as makeCommandChangeVictoryME,
  Va as makeCommandCommentBody,
  La as makeCommandCommentHeader,
  Pa as makeCommandCommonEvent,
  Ra as makeCommandControlSwitches,
  Xa as makeCommandInputNumber,
  xa as makeCommandPlayBGM,
  Na as makeCommandPlayBGS,
  Ma as makeCommandPlayME,
  wa as makeCommandPlaySE,
  dr as makeCommandScriptArray,
  pr as makeCommandScriptBody,
  sr as makeCommandScriptHeader,
  _a as makeCommandScrollingTextBody,
  Ua as makeCommandScrollingTextHeader,
  ar as makeCommandSetupChoice,
  Za as makeCommandShowChoiceItem,
  ir as makeCommandShowMessage,
  nr as makeCommandShowMessageBody,
  Ha as makeCommentArray,
  Ga as makeCommentCommandArray,
  At as makeDataNames,
  $t as makeEditorSetting,
  ot as makeGameInitial,
  Je as makeItemCategories,
  Qe as makeItemCategoriesFromArray,
  et as makeMenuCommandsEnabled,
  tt as makeMenuCommandsEnabledFromArray,
  Kt as makeParamNamesArray,
  He as makeSoundsArray,
  Ce as makeSoundsObject,
  Ee as makeSystemAdvanced,
  pa as makeSystemData,
  Pt as makeTermsBasic,
  Dt as makeTermsBasicFromArray,
  Et as makeTermsCommand,
  Ft as makeTermsCommandFromArray,
  Ht as makeTermsMessages,
  Xt as makeTitleCommandWindow,
  Yt as makeVehicleData,
  j as mergeItemsSource,
  Ea as toArrayCommonEvent,
  Fa as toArrayControlSwitches,
  Ka as toArrayInputNumber,
  Sr as toArrayOperandActorStatus,
  kr as toArrayOperandConstant,
  Tr as toArrayOperandEnemyStatus,
  vr as toArrayOperandItemData,
  Ir as toArrayOperandRandom,
  fr as toArrayOperandScript,
  hr as toArrayOperandVariable,
  $a as toArrayScrollingTextBody,
  Ba as toArrayScrollingTextHeader,
  tr as toArraySetupChoice,
  Qa as toArraySetupChoiceItem,
  or as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
