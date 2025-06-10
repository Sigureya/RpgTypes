import e from "ajv";
const t = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], a = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), r = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], i = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), n = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), o = { domainName: "オプション", options: {
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
} }, m = { domainName: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, p = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), s = (e2 = {}) => ({
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
}), d = (e2 = {}) => ({
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
}), l = (e2) => e2 ? [...e2] : [], c = (e2, t2) => ({
  name: e2,
  id: t2
}), y = (e2) => e2.variables.map(c), u = (e2) => e2.elements.map(c), g = (e2) => e2.equipTypes.map(c), b = (e2) => e2.skillTypes.map(c), I = (e2) => e2.weaponTypes.map(c), h = (e2) => e2.armorTypes.map(c), f = (e2) => e2.switches.map(c), v = (e2, t2) => [x(e2, t2), N(e2, t2), R(e2, t2), T(e2, t2), k(e2, t2), S(e2, t2), w(e2, t2)], k = (e2, t2) => ({
  items: h(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), x = (e2, t2) => ({ items: u(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), N = (e2, t2) => ({ items: g(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), T = (e2, t2) => ({
  items: b(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), S = (e2, t2) => ({ items: y(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), w = (e2, t2) => ({ items: f(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), R = (e2, t2) => ({
  items: I(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), q = (e2 = {}) => [p(e2.cursor), p(e2.ok), p(e2.cancel), p(e2.buzzer), p(e2.equip), p(e2.save), p(e2.load), p(e2.battleStart), p(e2.escape), p(e2.enemyAttack), p(e2.enemyDamage), p(e2.enemyCollapse), p(e2.bossCollapes1), p(e2.bossCollapes2), p(e2.actorDamage), p(e2.actorCollapse), p(e2.playRecovery), p(e2.playMiss), p(e2.playEvasion), p(e2.playMagicEvasion), p(e2.playReflection), p(e2.shop), p(e2.useItem), p(e2.useSkill)], P = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: p(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), D = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], z = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], A = (e2, t2) => "string" == typeof e2 ? e2 : t2, j = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], M = new e({
  strict: false
});
M.compile({
  type: "object",
  additionalProperties: true,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: { type: "boolean" },
    optDisplayTp: { type: "boolean" },
    optDrawTitle: { type: "boolean" },
    optExtraExp: { type: "boolean" },
    optFloorDeath: { type: "boolean" },
    optFollowers: {
      type: "boolean"
    },
    optKeyItemsNumber: { type: "boolean" },
    optSideView: { type: "boolean" },
    optSlipDeath: { type: "boolean" },
    optTransparent: { type: "boolean" },
    optMessageSkip: { type: "boolean" },
    optSplashScreen: { type: "boolean" }
  }
});
const E = M.compile({ additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } });
M.compile({ type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: {
  type: "number"
}, weaponImageId: { type: "number" } } });
const H = M.compile({ additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: {
  type: "integer",
  minimum: 0
}, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } } }), B = (e2) => {
  var _a2, _b, _c, _d, _e2;
  const a2 = e2.vehicles ?? {}, i2 = e2.dataNames ?? {}, o2 = e2.debug ?? {}, m2 = e2.images ?? {}, c2 = e2.gameInit ?? {}, y2 = e2.bgm ?? {}, u2 = L(e2.size);
  return {
    ...d(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: q(e2.sounds),
    editor: n(e2.editing),
    advanced: s(e2.advanced),
    title1Name: m2.title1Name ?? "",
    title2Name: m2.title2Name ?? "",
    battleback1Name: m2.battleback1Name ?? "",
    battleback2Name: m2.battleback2Name ?? "",
    ...(g2 = i2, {
      armorTypes: l(g2.armorTypes),
      elements: l(g2.elements),
      equipTypes: l(g2.equipTypes),
      weaponTypes: l(g2.weaponTypes),
      skillTypes: l(g2.skillTypes),
      variables: l(g2.variables),
      switches: l(g2.switches)
    }),
    magicSkills: F([]),
    airship: P(a2.airship),
    boat: P(a2.boat),
    ship: P(a2.ship),
    defeatMe: p((_c = e2.me) == null ? void 0 : _c.defeatMe),
    gameoverMe: p((_d = e2.me) == null ? void 0 : _d.gameoverMe),
    titleBgm: p(y2.titleBgm),
    tileSize: u2.tileSize,
    faceSize: u2.faceSize,
    iconSize: u2.iconSize,
    versionId: 1,
    attackMotions: [],
    testBattlers: V(o2.testBattlers, W),
    battleBgm: p(y2.battleBgm),
    victoryMe: p((_e2 = e2.me) == null ? void 0 : _e2.victoryMe),
    editMapId: o2.editMapId ?? 0,
    locale: "",
    startMapId: c2.startMapId ?? 0,
    startX: c2.startX ?? 0,
    startY: c2.startY ?? 0,
    testTroopId: o2.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: C(e2.terms ?? {}),
    itemCategories: r(e2.itemCategories),
    partyMembersArray: F(c2.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: o2.battlerName ?? "",
    menuCommands: t(e2.menuComamnds)
  };
  var g2;
}, C = (e2) => {
  return {
    basic: D(e2.basic ?? {}),
    commands: (a2 = e2.commands ?? {}, z(a2, "")),
    params: j(e2.params ?? {}),
    messages: (t2 = e2.messages ?? {}, {
      actionFailure: A(t2.actionFailure, "Action failed."),
      actorDamage: A(t2.actorDamage, "%1 took %2 damage."),
      actorRecovery: A(t2.actorRecovery, "%1 recovered %2 HP."),
      actorGain: A(t2.actorGain, "%1 gained %2."),
      actorLoss: A(t2.actorLoss, "%1 lost %2."),
      actorDrain: A(t2.actorDrain, "%1 drained %2 HP."),
      actorNoDamage: A(t2.actorNoDamage, "%1 was not damaged."),
      actorNoHit: A(t2.actorNoHit, "%1 was not hit."),
      alwaysDash: A(t2.alwaysDash, "Always dash."),
      bgmVolume: A(t2.bgmVolume, "BGM volume"),
      bgsVolume: A(t2.bgsVolume, "BGS volume"),
      commandRemember: A(t2.commandRemember, "Command remember."),
      criticalToActor: A(t2.criticalToActor, "%1 dealt %2 damage to %3."),
      criticalToEnemy: A(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
      counterAttack: A(t2.counterAttack, "%1 countered!"),
      debuffAdd: A(t2.debuffAdd, "%1's %2 was lowered."),
      defeat: A(t2.defeat, "Defeat."),
      enemyDamage: A(t2.enemyDamage, "%1 took %2 damage."),
      enemyDrain: A(t2.enemyDrain, "%1 drained %2 HP."),
      enemyGain: A(t2.enemyGain, "%1 gained %2."),
      enemyLoss: A(t2.enemyLoss, "%1 lost %2."),
      enemyNoDamage: A(t2.enemyNoDamage, "%1 was not damaged."),
      enemyNoHit: A(t2.enemyNoHit, "%1 was not hit."),
      enemyRecovery: A(t2.enemyRecovery, "%1 recovered %2 HP."),
      evasion: A(t2.evasion, "%1 evaded the attack!"),
      autosave: A(t2.autosave, "Autosave"),
      escapeFailure: A(t2.escapeFailure, "Escape failed."),
      escapeStart: A(t2.escapeStart, "%1 started to escape!"),
      emerge: A(t2.emerge, "%1 appeared!"),
      expNext: A(t2.expNext, "Next level in %1 EXP."),
      expTotal: A(t2.expTotal, "Total EXP: %1"),
      file: A(t2.file, "File"),
      buffAdd: A(t2.buffAdd, "%1's %2 was raised."),
      buffRemove: A(t2.buffRemove, "%1's %2 was lowered."),
      obtainExp: A(t2.obtainExp, "%1 EXP obtained."),
      obtainGold: A(t2.obtainGold, "%1 gold obtained."),
      obtainItem: A(t2.obtainItem, "%1 obtained %2."),
      obtainSkill: A(t2.obtainSkill, "%1 learned %2."),
      levelUp: A(t2.levelUp, "%1 leveled up!"),
      partyName: A(t2.partyName, "Party"),
      loadMessage: A(t2.loadMessage, "Load %1?"),
      meVolume: A(t2.meVolume, "ME volume"),
      possession: A(t2.possession, "Possession"),
      preemptive: A(t2.preemptive, "%1 attacked first!"),
      saveMessage: A(t2.saveMessage, "Save %1?"),
      seVolume: A(t2.seVolume, "SE volume"),
      magicEvasion: A(t2.magicEvasion, "%1 evaded the magic!"),
      magicReflection: A(t2.magicReflection, "%1 reflected the magic!"),
      substitute: A(t2.substitute, "%1 took the hit!"),
      surprise: A(t2.surprise, "%1 surprised the enemy!"),
      touchUI: A(t2.touchUI, "Touch UI"),
      useItem: A(t2.useItem, "%1 used %2."),
      victory: A(t2.victory, "Victory!")
    })
  };
  var t2, a2;
}, F = (e2) => e2 ? [...e2] : [], L = (e2) => ((e3) => H(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, V = (e2, t2) => e2 ? e2.map(t2) : [], W = (e2) => ((e3) => E(e3))(e2) ? { actorId: e2.actorId, equips: F(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, G = "bgm", K = "se", X = "me", $ = "bgs", Y = "battlebacks1", U = "battlebacks2", O = "characters", _ = "enemies", Z = "faces", J = "parallaxes", Q = "pictures", ee = "sv_actors", te = "sv_enemies", ae = "system", re = "tilesets", ie = "titles1", ne = "titles2", oe = "System.json", me = "Actors.json", pe = "Classes.json", se = "Skills.json", de = "Items.json", le = "Weapons.json", ce = "Armors.json", ye = "Enemies.json", ue = "Troops.json", ge = "States.json", be = "Animations.json", Ie = "Tilesets.json", he = "CommonEvents.json", fe = "MapInfos.json", ve = "data", ke = "img", xe = "audio", Ne = "js", Te = "rmmz", Se = "colors", we = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), Re = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), qe = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, Pe = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, De = (e2, t2 = []) => {
  return {
    itemMappers: [...Pe(e2), ...t2].map(ze),
    fallbackFormat: { text: Ae(e2), label: je(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? we(a2.numbers) : [],
      strings: a2.strings ? we(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(Re) : []
  };
  var a2;
}, ze = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Ae = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.kindKey), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.kindKey);
    }), t3;
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, je = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, Me = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, Ee = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Be(e2, t2, a2),
  syntaxErrors: He(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, He = (e2, t2, a2, r2) => {
  const i2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return i2.reduce((e3, t3) => {
    const i3 = t3[1];
    return 0 === i3.length ? e3 : i3.length > r2 ? (e3.push({
      message: a2.longPlaceHolder,
      reason: i3.slice(0, r2)
    }), e3) : (n2.has(i3) || e3.push({ message: a2.extraPlaceHolder, reason: i3 }), e3);
  }, []);
}, Be = (e2, t2, a2) => Pe(t2).reduce((t3, r2) => {
  const i2 = Ce(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), Ce = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? {
    message: a2.missingSourceId,
    reason: t2.placeHolder
  } : void 0;
}, Fe = (e2, t2) => {
  const a2 = We(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Le(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, Le = (e2, t2) => {
  const a2 = Ve(e2.dataSource, t2);
  return {
    patternCompiled: e2.pattern,
    label: e2.label,
    data: a2 ? a2.items : void 0
  };
}, Ve = (e2, t2) => {
  if (e2) return t2.get(qe(e2));
}, We = (e2) => e2.reduce((e3, t2) => {
  const a2 = {
    items: Ge(t2.items),
    source: t2.source,
    label: t2.label
  };
  return e3.set(qe(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Ge = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name })), Ke = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => Me(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => Me(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? Xe(n2, e2, a2, t2, i2) : n2;
}, Xe = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, $e = 0, Ye = 1, Ue = 2, Oe = 3, _e = (e2, t2) => ({ items: Ze(e2.options, t2), label: e2.domainName, source: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Ze = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], Je = 0, Qe = 1, et = 2, tt = 3, at = 4, rt = 5, it = (e2) => ({ items: nt(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), nt = (e2) => [{ id: 0, name: e2.encounterHalf }, {
  id: 1,
  name: e2.encounterNone
}, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], ot = 0, mt = 1, pt = 2, st = 3, dt = (e2) => ({
  items: lt(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sflag" }
}), lt = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], ct = 0, yt = 1, ut = 2, gt = 3, bt = 4, It = 5, ht = 6, ft = 7, vt = 8, kt = 9, xt = (e2) => ({
  items: Nt(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), Nt = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, {
  id: 5,
  name: e2.magicReflectionRate
}, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Tt = (e2, t2) => {
  switch (e2) {
    case 3:
      return t2.criticalEvasionRate;
    case 1:
      return t2.evasionRate;
    case 6:
      return t2.counterAttackRate;
    case 2:
      return t2.criticalRate;
    case 0:
      return t2.hitRate;
    case 7:
      return t2.hpRegenerationRate;
    case 4:
      return t2.magicEvasionRate;
    case 5:
      return t2.magicReflectionRate;
    case 8:
      return t2.mpRegenerationRate;
    case 9:
      return t2.tpRegenerationRate;
  }
  return `?xparams[${e2}]`;
}, St = 0, wt = 1, Rt = 2, qt = 3, Pt = 4, Dt = 5, zt = 6, At = 7, jt = (e2) => ({ items: Mt(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "params" } }), Mt = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Et = (e2, t2) => {
  switch (e2) {
    case 0:
      return t2.maxHp;
    case 1:
      return t2.maxMp;
    case 2:
      return t2.atk;
    case 3:
      return t2.def;
    case 4:
      return t2.matk;
    case 5:
      return t2.mdef;
    case 6:
      return t2.agi;
    case 7:
      return t2.luk;
    default:
      return `?rparams[${e2}]`;
  }
}, Ht = 0, Bt = 1, Ct = 2, Ft = 3, Lt = 4, Vt = 5, Wt = 6, Gt = 7, Kt = 8, Xt = 9, $t = (e2) => ({
  items: Yt(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), Yt = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
  id: 6,
  name: e2.physicalDamageRate
}, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], Ut = (e2, t2) => {
  switch (e2) {
    case 9:
      return t2.experienceRate;
    case 0:
      return t2.targetRate;
    case 8:
      return t2.floorDamageRate;
    case 1:
      return t2.guardEffectRate;
    case 4:
      return t2.mpCostRate;
    case 5:
      return t2.tpChargeRate;
    case 6:
      return t2.physicalDamageRate;
    case 7:
      return t2.magicDamageRate;
    case 3:
      return t2.pharmacology;
    case 2:
      return t2.recoveryEffectRate;
  }
  return `?sparams[${e2}]`;
}, Ot = "{name}", _t = "{name} * {value}%", Zt = "{name} + {value}%", Jt = "{value}", Qt = {
  domainName: "特徴",
  options: {
    regularParam: { domainName: "基本能力値", format: _t, options: {
      maxHp: "最大HP",
      maxMp: "最大MP",
      atk: "攻撃力",
      def: "防御力",
      matk: "魔法攻撃力",
      mdef: "魔法防御力",
      agi: "敏捷性",
      luk: "運"
    } },
    extraParam: { domainName: "追加能力値", format: Zt, options: {
      hitRate: "命中率",
      evasionRate: "回避率",
      criticalRate: "クリティカル率",
      criticalEvasionRate: "クリティカル回避率",
      magicEvasionRate: "魔法回避率",
      magicReflectionRate: "魔法反射率",
      counterAttackRate: "反撃率",
      hpRegenerationRate: "HP再生率",
      mpRegenerationRate: "MP再生率",
      tpRegenerationRate: "TP再生率"
    } },
    specialParam: { domainName: "特殊能力値", format: _t, options: {
      targetRate: "狙われ率",
      guardEffectRate: "防御効果率",
      recoveryEffectRate: "回復効果率",
      pharmacology: "薬の知識",
      mpCostRate: "MP消費率",
      tpChargeRate: "TPチャージ率",
      physicalDamageRate: "物理ダメージ率",
      magicDamageRate: "魔法ダメージ率",
      floorDamageRate: "床ダメージ率",
      experienceRate: "経験値率"
    } },
    specialFlag: {
      domainName: "特殊フラグ",
      format: Ot,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { domainName: "消滅エフェクト", format: Ot, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { domainName: "パーティ能力", format: Ot, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { domainName: "属性有効度", format: _t },
    debuffRate: { domainName: "弱体有効度", format: _t },
    stateRate: { domainName: "ステート有効度", format: _t },
    stateResist: { domainName: "ステート無効", format: Ot },
    attackElement: { domainName: "攻撃属性", format: Ot },
    attackState: { domainName: "攻撃ステート", format: Zt },
    attackSpeed: { domainName: "攻撃速度補正", format: Jt },
    attackTimes: { domainName: "攻撃追加回数", format: Jt },
    actionPlus: { domainName: "行動追加", format: _t },
    attackSkill: { domainName: "攻撃スキル", format: Ot },
    equipWeaponType: { domainName: "装備武器タイプ", format: Ot },
    equipArmorType: { domainName: "装備防具タイプ", format: Ot },
    equipLock: { domainName: "装備固定", format: Ot },
    equipSeal: { domainName: "装備封印", format: Ot },
    slotType: { domainName: "スロットタイプ", format: Ot },
    skillAdd: {
      domainName: "スキル追加",
      format: Ot
    },
    skillSeal: { domainName: "スキルタイプ封印", format: Ot },
    skillTypeAdd: { domainName: "スキルタイプ追加", format: Ot },
    skillTypeSeal: { domainName: "スキルタイプ封印", format: Ot }
  }
}, ea = 11, ta = 12, aa = 13, ra = 14, ia = 21, na = 22, oa = 23, ma = 31, pa = 32, sa = 33, da = 34, la = 35, ca = 41, ya = 42, ua = 43, ga = 44, ba = 51, Ia = 52, ha = 53, fa = 54, va = 55, ka = 61, xa = 62, Na = 63, Ta = 64, Sa = (e2) => [wa(e2.elementRate), Ra(e2.debuffRate), qa(e2.stateRate), Pa(e2.stateResist), Da(e2.regularParam), za(e2.extraParam), Aa(e2.specialParam), ja(e2.attackElement), Ma(e2.attackState), Ea(e2.attackSpeed), Ha(e2.attackTimes), Ba(e2.attackSkill), Ca(e2.skillTypeAdd), Fa(e2.skillTypeSeal), La(e2.skillAdd), Va(e2.skillSeal), Wa(e2.equipWeaponType), Ga(e2.equipArmorType), Ka(e2.equipLock), Xa(e2.equipSeal), $a(e2.slotType), Ya(e2.actionPlus), Ua(e2.specialFlag), Oa(e2.collaps), _a(e2.partyAbility)], wa = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 11,
  dataSource: Qa()
}), Ra = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 12,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), qa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Za() }), Pa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 14, dataSource: Za() }), Da = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), za = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 22, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), Aa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 23, dataSource: { author: "rmmz", module: "trait", kind: "sparams" } }), ja = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 31,
  dataSource: Qa()
}), Ma = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Za() }), Ea = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), Ha = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), Ba = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: Ja() }), Ca = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: er()
}), Fa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: er() }), La = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 43, dataSource: Ja() }), Va = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 44,
  dataSource: Ja()
}), Wa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: tr() }), Ga = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: ar()
}), Ka = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: rr() }), Xa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 54, dataSource: rr() }), $a = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 55,
  dataSource: rr()
}), Ya = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), Ua = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), Oa = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: { author: "rmmz", module: "trait", kind: "collaps" } }), _a = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 64,
  dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), Za = () => ({ author: "rmmz", module: "data", kind: "state" }), Ja = () => ({
  author: "rmmz",
  module: "data",
  kind: "skill"
}), Qa = () => ({ author: "rmmz", module: "system", kind: "elements" }), er = () => ({ author: "rmmz", module: "system", kind: "skillTypes" }), tr = () => ({
  author: "rmmz",
  module: "system",
  kind: "weaponTypes"
}), ar = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), rr = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), ir = (e2, t2) => [jt(e2.regularParam), xt(e2.extraParam), $t(e2.specialParam), _e(e2.collaps, t2), dt(e2.specialFlag), it(e2.partyAbility)], nr = "Trait", or = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, mr = { itemMapper: {
  placeHolder: "name",
  dataIdKey: "dataId",
  kindKey: "code"
}, placeHolder: { numbers: ["value"] } }, pr = (e2, t2, a2) => {
  const r2 = De(mr);
  return Ke(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, sr = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  battlerName: e2.battlerName ?? "",
  characterName: e2.characterName ?? "",
  characterIndex: e2.characterIndex ?? 0,
  faceName: e2.faceName ?? "",
  faceIndex: e2.faceIndex ?? 0,
  traits: [],
  note: e2.note ?? "",
  classId: e2.classId ?? 0,
  nickname: e2.nickname ?? "",
  profile: e2.profile ?? "",
  equips: [],
  initialLevel: e2.initialLevel ?? 0,
  maxLevel: e2.maxLevel ?? 0
}), dr = (e2) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  battlerName: e2.battlerName ?? "",
  characterName: e2.characterName ?? "",
  characterIndex: e2.characterIndex ?? 0,
  faceName: e2.faceName ?? "",
  faceIndex: e2.faceIndex ?? 0,
  traits: [],
  note: e2.note ?? "",
  classId: e2.classId ?? 0,
  nickname: e2.nickname ?? "",
  profile: e2.profile ?? "",
  equips: [],
  initialLevel: e2.initialLevel ?? 0,
  maxLevel: e2.maxLevel ?? 0
}), lr = {
  type: "object",
  required: ["name", "id", "nickname", "battlerName", "characterName", "characterIndex", "faceName", "faceIndex", "classId", "initialLevel", "maxLevel"],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: {
      type: "integer",
      minimum: 0
    },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
      type: "integer"
    } }, required: ["code", "dataId", "value"] } }
  }
}, cr = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  traits: e2.traits ?? [],
  note: e2.note ?? "",
  atypeId: e2.atypeId ?? 0,
  params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e2.etypeId ?? 0,
  price: e2.price ?? 0
}), yr = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: {
      type: "string"
    },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }],
      minItems: 8,
      maxItems: 8
    },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } }
  }
}, ur = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e2.learnings ?? [], expParams: e2.expParams ?? [] }), gr = {
  type: "object",
  required: ["name", "id", "note", "expParams", "params", "learnings", "traits"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, note: { type: "string" }, expParams: {
    type: "array",
    items: { type: "integer" }
  }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }], minItems: 8, maxItems: 8 }, learnings: { type: "array", items: {
    type: "object",
    properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: { type: "string" } },
    required: ["level", "skillId"],
    additionalProperties: false
  } }, traits: { type: "array", items: {
    type: "object",
    properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
    required: ["code", "dataId", "value"],
    additionalProperties: false
  } } },
  additionalProperties: false
}, br = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  iconIndex: e2.iconIndex ?? 0,
  message1: e2.message1 ?? "",
  message2: e2.message2 ?? "",
  message3: e2.message3 ?? "",
  message4: e2.message4 ?? "",
  traits: [],
  note: e2.note ?? "",
  messageType: e2.messageType ?? 0,
  releaseByDamage: e2.releaseByDamage ?? false,
  restriction: e2.restriction ?? 0,
  priority: e2.priority ?? 0,
  motion: e2.motion ?? 0,
  overlay: e2.overlay ?? 0,
  removeAtBattleEnd: e2.removeAtBattleEnd ?? false,
  removeByRestriction: e2.removeByRestriction ?? false,
  autoRemovalTiming: e2.autoRemovalTiming ?? 0,
  minTurns: e2.minTurns ?? 0,
  maxTurns: e2.maxTurns ?? 0,
  removeByDamage: e2.removeByDamage ?? false,
  chanceByDamage: e2.chanceByDamage ?? 0,
  removeByWalking: e2.removeByWalking ?? false,
  stepsToRemove: e2.stepsToRemove ?? 0
}), Ir = {
  type: "object",
  required: ["name", "id", "iconIndex", "message1", "message2", "message3", "message4", "restriction", "priority", "motion", "overlay", "removeAtBattleEnd", "removeByDamage", "removeByWalking", "removeByRestriction", "autoRemovalTiming", "minTurns", "maxTurns", "chanceByDamage", "stepsToRemove", "note"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    message3: { type: "string" },
    message4: { type: "string" },
    restriction: { type: "integer" },
    priority: { type: "integer" },
    motion: { type: "integer" },
    overlay: { type: "integer" },
    removeAtBattleEnd: { type: "boolean" },
    removeByDamage: {
      type: "boolean"
    },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: {
      type: "integer"
    },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: { type: "array", items: {
      type: "object",
      properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
      required: ["code", "dataId", "value"]
    } }
  }
}, hr = { domainName: "武器", options: {
  weaponTypeId: "武器タイプID"
} }, fr = { domainName: "ダメージ", options: {} }, vr = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), kr = { type: "object", required: ["type", "elementId", "formula", "variance", "critical"], properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: {
  type: "string"
}, variance: { type: "integer" }, critical: { type: "boolean" } } }, xr = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  traits: e2.traits ?? [],
  note: e2.note ?? "",
  animationId: e2.animationId ?? 0,
  params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e2.etypeId ?? 0,
  price: e2.price ?? 0,
  damage: vr(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), Nr = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
  name: { type: "string" },
  id: { type: "integer", minimum: 0 },
  description: { type: "string" },
  iconIndex: { type: "integer", minimum: 0 },
  price: { type: "integer", minimum: 0 },
  note: { type: "string" },
  etypeId: {
    type: "integer",
    minimum: 0
  },
  wtypeId: { type: "integer", minimum: 0 },
  animationId: { type: "integer", minimum: 0 },
  params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
  damage: {
    type: "object",
    properties: { type: { type: "integer", minimum: 0 }, elementId: {
      type: "integer",
      minimum: 0
    }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  },
  traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } }
} }, Tr = (e2 = {}) => ({ dataId: e2.dataId ?? 0, denominator: e2.denominator ?? 0, kind: e2.kind ?? 0 }), Sr = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), wr = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Tr())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Rr = { type: "object", required: ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"], properties: {
  name: { type: "string" },
  id: { type: "integer", minimum: 0 },
  battlerHue: { type: "integer", minimum: 0 },
  battlerName: { type: "string" },
  exp: { type: "integer", minimum: 0 },
  gold: { type: "integer", minimum: 0 },
  note: { type: "string" },
  params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }], minItems: 8, maxItems: 8 },
  actions: { type: "array", items: { type: "object", required: ["conditionParam1", "conditionParam2", "conditionType", "skillId", "rating"], properties: {
    conditionParam1: { type: "integer" },
    conditionParam2: { type: "integer" },
    conditionType: { type: "integer" },
    skillId: { type: "integer" },
    rating: { type: "integer" }
  } } },
  traits: { type: "array", items: {
    type: "object",
    properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
    required: ["code", "dataId", "value"]
  } },
  dropItems: { type: "array", items: {
    type: "object",
    properties: { kind: { type: "integer" }, dataId: { type: "integer" }, denominator: { type: "integer", minimum: 0 }, rate: { type: "number" } },
    required: ["kind", "dataId", "denominator"]
  } }
} }, qr = {
  id: "識別子",
  name: "名前",
  note: "メモ",
  description: "説明",
  iconIndex: "アイコンインデックス",
  occasion: "使用タイミング",
  params: "パラメータ",
  repeats: "繰り返し回数",
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率",
  animationId: "アニメーションID",
  displayType: "表示タイプ",
  characterIndex: "キャラクターインデックス",
  characterName: "キャラクター名",
  effectName: "効果名",
  faceIndex: "顔グラフィックインデックス",
  faceName: "顔グラフィック名",
  flashTimings: "フラッシュタイミング",
  list: "リスト",
  messageType: "メッセージタイプ",
  offsetX: "オフセットX",
  offsetY: "オフセットY",
  overlay: "オーバーレイ",
  priority: "優先度",
  restriction: "制約",
  rotation: "回転",
  scale: "スケール",
  soundTimings: "サウンドタイミング",
  stepsToRemove: "解除までの歩数",
  type: "タイプ",
  variance: "分散度",
  unknownCode: "不明なコード",
  content: "内容",
  apply: "適用",
  turn: "ターン",
  commonEvent: "コモンイベント",
  normal: "通常",
  dualWield: "二刀流",
  bossCollaps: "ボス崩壊",
  instantCollaps: "即時崩壊",
  noneCollaps: "崩壊なし",
  escape: "逃走"
}, Pr = () => ({ author: Te, module: dp, kind: bp }), Dr = (e2 = {}) => ({
  animationId: e2.animationId ?? 0,
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  itypeId: e2.itypeId ?? 0,
  note: e2.note ?? "",
  consumable: e2.consumable ?? false,
  scope: e2.scope ?? 0,
  occasion: e2.occasion ?? 0,
  speed: e2.speed ?? 0,
  successRate: e2.successRate ?? 0,
  repeats: e2.repeats ?? 0,
  tpGain: e2.tpGain ?? 0,
  hitType: e2.hitType ?? 0,
  damage: vr(e2.damage ?? {}),
  effects: [],
  price: 0
}), zr = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: vr(e2.damage ?? {}),
  description: e2.description ?? "",
  effects: [],
  hitType: e2.hitType ?? 0,
  iconIndex: e2.iconIndex ?? 0,
  id: e2.id ?? 0,
  message1: e2.message1 ?? "",
  message2: e2.message2 ?? "",
  messageType: e2.messageType ?? 0,
  name: e2.name ?? "",
  note: e2.note ?? "",
  mpCost: e2.mpCost ?? 0,
  occasion: e2.occasion ?? 0,
  repeats: e2.repeats ?? 0,
  scope: e2.scope ?? 0,
  speed: e2.speed ?? 0,
  successRate: e2.successRate ?? 0,
  tpCost: e2.tpCost ?? 0,
  tpGain: e2.tpGain ?? 0
}), Ar = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    messageType: { type: "integer" },
    mpCost: { type: "integer" },
    requiredWtypeId1: { type: "integer" },
    requiredWtypeId2: { type: "integer" },
    stypeId: { type: "integer" },
    tpCost: { type: "integer" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: {
      type: "integer"
    },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value1: {
      type: "integer"
    }, value2: { type: "integer" } }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } },
    damage: { type: "object", properties: { type: { type: "integer" }, elementId: {
      type: "integer"
    }, formula: { type: "string" }, variance: { type: "integer" }, critical: { type: "boolean" } }, required: ["type", "elementId", "formula", "variance", "critical"], additionalProperties: false }
  },
  additionalProperties: false
}, jr = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, note: { type: "string" }, animationId: {
    type: "integer",
    minimum: 0
  }, hitType: { type: "integer" }, occasion: { type: "integer" }, repeats: { type: "integer" }, scope: { type: "integer" }, speed: { type: "integer" }, successRate: { type: "integer" }, tpGain: {
    type: "integer"
  }, consumable: { type: "boolean" }, price: { type: "integer", minimum: 0 }, itypeId: { type: "integer" }, effects: { type: "array", items: { type: "object", properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value1: { type: "integer" },
    value2: { type: "integer" }
  }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } }, damage: {
    type: "object",
    properties: {
      type: { type: "integer" },
      elementId: { type: "integer" },
      formula: { type: "string" },
      variance: { type: "integer" },
      critical: { type: "boolean" }
    },
    required: ["type", "elementId", "formula", "variance", "critical"],
    additionalProperties: false
  } }
}, Mr = 0, Er = 1, Hr = 2, Br = "{name} {value1}%", Cr = "{value1}% + {value2}", Fr = "{name} {value1}ターン", Lr = "{name}", Vr = {
  domainName: "使用効果",
  options: { addBuff: {
    desc: "バフを付与する",
    domainName: "バフ付与",
    format: Fr
  }, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Fr }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Cr }, grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  }, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Lr }, recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: Cr
  }, recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: Cr }, removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: Lr
  }, removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: Lr }, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Br }, special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: Lr
  }, addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: Br }, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Lr } }
}, Wr = 0, Gr = 11, Kr = 12, Xr = 13, $r = 21, Yr = 22, Ur = 31, Or = 32, _r = 33, Zr = 34, Jr = 41, Qr = 42, ei = 43, ti = 44, ai = (e2) => [ii(e2), ni(e2), oi(e2), mi(e2), pi(e2), si(e2), di(e2), li(e2), ci(e2), yi(e2), ui(e2), gi(e2)], ri = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), ii = (e2) => ri(11, e2.recoverHp), ni = (e2) => ri(12, e2.recoverMp), oi = (e2) => ri(13, e2.gainTp), mi = (e2) => ri(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), pi = (e2) => ri(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), si = (e2) => ri(31, e2.addBuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), di = (e2) => ri(32, e2.addDebuff, { author: "rmmz", module: "trait", kind: "params" }), li = (e2) => ri(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), ci = (e2) => ri(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), yi = (e2) => ri(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), ui = (e2) => ri(43, e2.learnSkill, {
  author: "rmmz",
  module: "data",
  kind: "skill"
}), gi = (e2) => ri(44, e2.commonEvent, { author: Te, module: dp, kind: vp }), bi = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, Ii = {
  domainName: "アイテム",
  options: { consumable: "消耗品" }
}, hi = { domainName: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, fi = { domainName: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, vi = {
  actor: { domainName: "アクター", options: {
    initialEquipments: "初期装備",
    faceImage: "顔画像",
    characterImage: "キャラクター画像",
    svBattlerImage: "SVバトラー画像",
    nickname: "ニックネーム",
    profile: "プロフィール",
    classId: "職業ID",
    initialLevel: "初期レベル",
    maxLevel: "最大レベル"
  } },
  class: { domainName: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: {
    domainName: "防具",
    options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" }
  },
  enemy: {
    domainName: "敵キャラ",
    options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
  },
  item: { domainName: "アイテム", options: { consumable: "消耗品" } },
  skill: { domainName: "スキル", options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  } },
  state: { domainName: "ステート", options: {
    restriction: "制約",
    priority: "優先度",
    motion: "モーション",
    overlay: "オーバーレイ",
    removeAtBattleEnd: "戦闘終了時解除",
    removeByRestriction: "制約による解除",
    autoRemovalTiming: "自動解除タイミング",
    minTurns: "最小ターン数",
    maxTurns: "最大ターン数",
    removeByDamage: "ダメージによる解除",
    chanceByDamage: "ダメージによる解除確率",
    removeByWalking: "歩行による解除",
    stepsToRemove: "解除までの歩数"
  } },
  weapon: { domainName: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: { domainName: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } }
}, ki = new e(), xi = ki.compile(jr), Ni = ki.compile(Ar), Ti = ki.compile(lr), Si = ki.compile(yr), wi = ki.compile(Nr), Ri = ki.compile(Rr), qi = ki.compile(Ir), Pi = ki.compile(gr), Di = (e2) => xi(e2), zi = (e2) => Ni(e2), Ai = (e2) => Ti(e2), ji = (e2) => Si(e2), Mi = (e2) => wi(e2), Ei = (e2) => Ri(e2), Hi = (e2) => qi(e2), Bi = (e2) => Pi(e2), Ci = 0, Fi = 101, Li = 401, Vi = 102, Wi = 402, Gi = 103, Ki = 104, Xi = 105, $i = 405, Yi = 108, Ui = 408, Oi = 109, _i = 111, Zi = 411, Ji = 112, Qi = 113, en = 115, tn = 117, an = 118, rn = 119, nn = 121, on = 122, mn = 123, pn = 124, sn = 125, dn = 126, ln = 127, cn = 128, yn = 129, un = 132, gn = 133, bn = 134, In = 135, hn = 136, fn = 137, vn = 138, kn = 139, xn = 140, Nn = 201, Tn = 202, Sn = 203, wn = 204, Rn = 205, qn = 206, Pn = 211, Dn = 212, zn = 213, An = 214, jn = 216, Mn = 217, En = 221, Hn = 222, Bn = 223, Cn = 224, Fn = 225, Ln = 230, Vn = 231, Wn = 232, Gn = 233, Kn = 234, Xn = 235, $n = 236, Yn = 241, Un = 242, On = 243, _n = 244, Zn = 245, Jn = 246, Qn = 249, eo = 250, to = 251, ao = 261, ro = 282, io = 283, no = 284, oo = 285, mo = 301, po = 302, so = 605, lo = 303, co = 311, yo = 312, uo = 313, go = 314, bo = 315, Io = 320, ho = 321, fo = 322, vo = 323, ko = 324, xo = 325, No = 331, To = 332, So = 333, wo = 334, Ro = 335, qo = 336, Po = 337, Do = 339, zo = 340, Ao = 351, jo = 342, Mo = 352, Eo = 353, Ho = 354, Bo = 355, Co = 655, Fo = 356, Lo = 357, Vo = 0, Wo = 1, Go = 2, Ko = 3, Xo = 4, $o = 5, Yo = 6, Uo = 7, Oo = 8, _o = 9, Zo = 10, Jo = 11, Qo = 12, em = 13, tm = 14, am = 15, rm = 16, im = 17, nm = 18, om = 19, mm = 20, pm = 21, sm = 22, dm = 23, lm = 24, cm = 25, ym = 26, um = 27, gm = 28, bm = 29, Im = 30, hm = 31, fm = 32, vm = 33, km = 34, xm = 35, Nm = 36, Tm = 37, Sm = 38, wm = 39, Rm = 40, qm = 41, Pm = 42, Dm = 43, zm = 44, Am = 45, jm = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), Mm = (e2 = {}) => ({
  switch1Id: e2.switch1Id ?? 0,
  switch1Valid: void 0 !== e2.switch1Id,
  switch2Id: e2.switch2Id ?? 0,
  switch2Valid: void 0 !== e2.switch2Id,
  variableId: e2.variableId ?? 0,
  variableValid: void 0 !== e2.variableId,
  variableValue: e2.variableValue ?? 0,
  selfSwitchCh: e2.selfSwitchCh ?? "A",
  selfSwitchValid: void 0 !== e2.selfSwitchCh,
  itemId: e2.itemId ?? 0,
  itemValid: void 0 !== e2.itemId,
  actorId: e2.actorId ?? 0,
  actorValid: void 0 !== e2.actorId
}), Em = () => ({ id: 1, name: "", pages: [], note: "", x: 0, y: 0 }), Hm = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), Bm = () => ({
  conditions: Mm(),
  list: [],
  directionFix: false,
  image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
  moveFrequency: 5,
  moveRoute: { list: [], repeat: false, skippable: false, wait: false }
}), Cm = { type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: {
  type: "string"
}, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "integer" }, scrollY: { type: "integer" } } }, Fm = (e2 = {
  id: 0
}) => {
  return {
    name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")),
    id: e2.id,
    expanded: e2.expanded ?? false,
    order: e2.order ?? 0,
    parentId: e2.parentId ?? 0,
    scrollX: e2.scrollX ?? 0,
    scrollY: e2.scrollY ?? 0
  };
  var t2;
}, Lm = (e2 = {}) => ({
  data: e2.data ?? [],
  battleback1Name: e2.battleback1Name ?? "",
  battleback2Name: e2.battleback2Name ?? "",
  autoplayBgm: e2.autoplayBgm ?? false,
  autoplayBgs: e2.autoplayBgs ?? false,
  parallaxLoopX: e2.parallaxLoopX ?? false,
  parallaxLoopY: e2.parallaxLoopY ?? false,
  parallaxName: e2.parallaxName ?? "",
  parallaxShow: e2.parallaxShow ?? false,
  parallaxSx: e2.parallaxSx ?? 0,
  parallaxSy: e2.parallaxSy ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  width: e2.width ?? 0,
  height: e2.height ?? 0,
  note: e2.note ?? "",
  bgm: e2.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: e2.bgs ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  disableDashing: e2.disableDashing ?? false,
  displayName: e2.displayName ?? "",
  encounterList: e2.encounterList ?? [],
  events: e2.events ?? []
}), Vm = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), Wm = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", members: e2.members ?? [], pages: e2.pages ?? [] }), Gm = (e2 = {}) => ({
  enemyId: e2.enemyId ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  hidden: e2.hidden ?? false
}), Km = (e2 = {}) => ({ actorHp: e2.actorHp ?? 0, actorId: e2.actorId ?? 0, enemyValid: e2.enemyValid ?? 0, switchValid: e2.switchValid ?? 0 }), Xm = {
  type: "object",
  required: ["battleback1Name", "battleback2Name", "note", "width", "height", "x", "y", "parallaxSy", "parallaxSx", "parallaxLoopY", "parallaxLoopX", "disableDashing", "parallaxName", "parallaxShow", "displayName", "data", "autoplayBgm", "bgm", "autoplayBgs", "bgs"],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: {
      type: "boolean"
    },
    parallaxName: { type: "string" },
    parallaxShow: { type: "boolean" },
    parallaxSy: { type: "integer" },
    parallaxSx: { type: "integer" },
    x: { type: "integer", minimum: 0 },
    y: { type: "integer", minimum: 0 },
    width: { type: "integer", minimum: 0 },
    height: { type: "integer", minimum: 0 },
    note: { type: "string" },
    displayName: { type: "string" },
    disableDashing: { type: "boolean" },
    autoplayBgm: { type: "boolean" },
    bgm: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } },
    autoplayBgs: {
      type: "boolean"
    },
    bgs: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } },
    encounterList: { type: "array", items: { type: "object", required: ["regionSet", "troopId", "weight"], properties: {
      regionSet: { type: "array", items: { type: "integer" } },
      troopId: { type: "integer" },
      weight: { type: "integer" }
    } } },
    events: { type: "array", items: { type: "object", required: ["id", "name", "x", "y", "pages"], properties: {
      id: { type: "integer" },
      name: { type: "string" },
      x: { type: "integer" },
      y: { type: "integer" },
      note: { type: "string" },
      pages: { type: "array", items: { type: "object", required: ["image", "moveRoute", "conditions", "directionFix", "moveFrequency"], properties: {
        moveFrequency: { type: "integer" },
        directionFix: { type: "boolean" },
        conditions: {
          type: "object",
          required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"],
          properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: {
            type: "integer",
            minimum: 0
          }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: {
            type: "boolean"
          }, actorId: { type: "integer" }, actorValid: { type: "boolean" } }
        },
        image: { type: "object", required: ["characterIndex", "characterName", "direction", "pattern", "tileId"], properties: {
          characterIndex: { type: "integer", minimum: 0 },
          characterName: { type: "string" },
          direction: { type: "integer", enum: [2, 4, 6, 8] },
          pattern: { type: "integer" },
          tileId: { type: "integer" }
        } },
        moveRoute: {
          type: "object",
          required: ["wait", "repeat", "skippable", "list"],
          properties: { wait: { type: "boolean" }, repeat: { type: "boolean" }, skippable: { type: "boolean" }, list: { type: "array", items: {
            type: "object",
            required: ["code", "parameters"],
            properties: { code: { type: "integer" }, parameters: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }, {
              type: "object",
              required: ["name", "pan", "pitch", "volume"],
              properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } }
            }] } } }
          } } }
        }
      } } }
    } } }
  }
}, $m = new e(), Ym = $m.compile(Cm), Um = $m.compile(Xm), Om = (e2) => Ym(e2), _m = (e2) => Um(e2), Zm = (e2, t2) => `<${e2}:${t2}>`, Jm = () => /<([^<>:]+):([^>]*)>/g, Qm = (e2, t2) => tp(e2.note, (a2, r2) => t2(a2, r2, e2)), ep = (e2) => tp(e2, (e3, t2) => [e3, t2]), tp = (e2, t2) => {
  if (e2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
  const a2 = /<([^<>:]+):([^>]*)>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, ap = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]+):([^>]*)>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Zm(a2, i2);
  });
}, rp = (e2, t2) => {
  const a2 = /<([^<>:]+):([^>]*)>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, ip = (e2, t2, a2) => {
  const r2 = /<([^<>:]+):([^>]*)>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? Zm(r3, a2) : e3);
}, np = (e2, t2) => `\\${e2}[${t2}]`, op = (e2, t2) => t2.map((t3, a2) => ({
  text: t3,
  controlChar: np(e2, a2)
})), mp = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), pp = (e2) => e2.map((e3) => ({
  text: e3.name,
  controlChar: np("N", e3.id)
})), sp = (e2) => e2.variables.map((e3, t2) => ({
  text: e3 || "",
  controlChar: np("V", t2)
})).filter((e3) => "" !== e3.text), dp = "data", lp = "actor", cp = "map", yp = "enemy", up = "state", gp = "skill", bp = "item", Ip = "weapon", hp = "armor", fp = "class", vp = "common_event", kp = "troop", xp = (e2, t2) => [Np(e2.skills, t2), Tp(e2.actors, t2), Sp(e2.states, t2), wp(e2.armors, t2), Rp(e2.classes, t2), qp(e2.enemies, t2), Pp(e2.items, t2), Dp(e2.weapons, t2)], Np = (e2, t2) => ({
  label: t2.skill.domainName,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), Tp = (e2, t2) => ({
  items: e2,
  label: t2.actor.domainName,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), Sp = (e2, t2) => ({ items: e2, label: t2.state.domainName, source: { author: "rmmz", module: "data", kind: "state" } }), wp = (e2, t2) => ({ items: e2, label: t2.armor.domainName, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), Rp = (e2, t2) => ({ items: e2, label: t2.class.domainName, source: { author: "rmmz", module: "data", kind: "class" } }), qp = (e2, t2) => ({ items: e2, label: t2.enemy.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), Pp = (e2, t2) => ({ items: e2, label: t2.item.domainName, source: { author: "rmmz", module: "data", kind: "item" } }), Dp = (e2, t2) => ({
  items: e2,
  label: t2.weapon.domainName,
  source: { author: "rmmz", module: "data", kind: "weapon" }
}), zp = () => ({
  rpg: { damage: fr, data: vi, traits: Qt, itemEffect: Vr },
  global: qr
}), Ap = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName), jp = new e(), Mp = jp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [320, 324, 325]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), Ep = (e2) => Mp(e2), Hp = jp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
  type: "number"
}, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Bp = (e2) => Hp(e2), Cp = jp.compile({
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
}), Fp = (e2) => Cp(e2), Lp = jp.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: false }), Vp = (e2) => Lp(e2), Wp = jp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Gp = (e2) => Wp(e2), Kp = jp.compile({
  type: "object",
  properties: { code: { type: "number", const: 117 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } },
  required: ["code", "indent", "parameters"]
}), Xp = (e2) => Kp(e2), $p = jp.compile({ type: "object", properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{
  type: "array",
  items: { type: "string" }
}, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } }, required: ["code", "indent", "parameters"] }), Yp = (e2) => $p(e2), Up = jp.compile({
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] }
  },
  required: ["code", "indent", "parameters"]
}), Op = (e2) => Up(e2), _p = jp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Zp = (e2) => _p(e2), Jp = jp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Qp = (e2) => Jp(e2), es = (e2) => Gp(e2) && 401 === e2.code, ts = (e2) => Gp(e2) && 405 === e2.code, as = (e2) => Gp(e2) && 108 === e2.code, rs = (e2) => Gp(e2) && 408 === e2.code, is = (e2) => Gp(e2) && 355 === e2.code, ns = (e2) => Gp(e2) && 655 === e2.code, os = (e2, t2 = 0) => ({
  code: 320,
  parameters: [e2.actorId, e2.name],
  indent: t2
}), ms = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), ps = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), ss = (e2, t2) => ds(e2, p({ name: t2 })), ds = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [p(t2)],
  indent: a2
}), ls = (e2, t2 = 0) => ds(241, e2, t2), cs = (e2, t2 = 0) => ds(245, e2, t2), ys = (e2, t2 = 0) => ds(249, e2, t2), us = (e2, t2 = 0) => ds(250, e2, t2), gs = (e2, t2 = 0) => ds(132, e2, t2), bs = (e2, t2 = 0) => ds(133, e2, t2), Is = (e2, t2 = 0) => ds(139, e2, t2), hs = (e2) => [e2], fs = (e2) => ({
  comment: e2[0]
}), vs = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: hs(e2) }), ks = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: hs(e2)
}), xs = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? vs(e3, t2) : ks(e3, t2)), Ns = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Ts = (e2) => ({ variableId: e2[0], digits: e2[1] }), Ss = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Ns(e2 ?? {})
}), ws = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Rs = (e2) => ({ speed: e2[0], skip: e2[1] }), qs = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: ws(e2) }), Ps = (e2 = "") => [e2], Ds = (e2) => ({ content: e2[0] }), zs = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Ps(e2)
}), As = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), js = (e2) => ({ index: e2[0], name: e2[1] }), Ms = (e2) => [e2.index ?? 0, e2.name ?? ""], Es = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Hs = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], Bs = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Cs = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Fs = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Ls = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), Vs = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Ws = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Gs = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), Ks = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Xs = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Gs(e3, t2) : Ks(e3, t2)), $s = 0, Ys = 1, Us = 2, Os = 3, _s = 4, Zs = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, Js = (e2, t2) => {
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
}, Qs = {
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
}, ed = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], td = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], ad = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], rd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], id = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], nd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], od = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Qs[t2.param]], md = (e2) => ({
  min: e2[0],
  max: e2[1],
  value: e2[2]
}), pd = (e2) => [e2.min, e2.max, e2.value], sd = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: pd(e2) }), dd = (e2, t2 = 0) => ({ code: 117, indent: t2, parameters: cd(e2 ?? {}) }), ld = (e2) => ({
  eventId: e2[0]
}), cd = (e2) => [e2.eventId ?? 0], yd = (e2) => Fp(e2) && 241 === e2.code, ud = (e2) => Fp(e2) && 245 === e2.code, gd = (e2) => Fp(e2) && 249 === e2.code, bd = (e2) => Fp(e2) && 250 === e2.code, Id = (e2) => Fp(e2) && 132 === e2.code, hd = (e2) => Fp(e2) && 133 === e2.code, fd = (e2) => Fp(e2) && 139 === e2.code, vd = (e2) => [...e2], kd = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: vd(e2.parameters)
}), xd = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Nd = (e2) => e2.parameters.every(xd);
export {
  zo as ABORT_BATTLE,
  Te as AUTHOR_RMMZ,
  mo as BATTLE_PROCESSING,
  fo as CHANGE_ACTOR_IMAGES,
  cn as CHANGE_ARMORS,
  io as CHANGE_BATTLE_BACKGROUND,
  un as CHANGE_BATTLE_BGM,
  ho as CHANGE_CLASS,
  kn as CHANGE_DEFEAT_ME,
  hn as CHANGE_ENCOUNTER,
  No as CHANGE_ENEMY_HP,
  To as CHANGE_ENEMY_MP,
  So as CHANGE_ENEMY_STATE,
  jo as CHANGE_ENEMY_TP,
  bo as CHANGE_EXP,
  fn as CHANGE_FORMATION_ACCESS,
  sn as CHANGE_GOLD,
  co as CHANGE_HP,
  dn as CHANGE_ITEMS,
  In as CHANGE_MENU_ACCESS,
  yo as CHANGE_MP,
  Io as CHANGE_NAME,
  ko as CHANGE_NICKNAME,
  no as CHANGE_PARALLAX,
  yn as CHANGE_PARTY_MEMBER,
  jn as CHANGE_PLAYER_FOLLOWERS,
  xo as CHANGE_PROFILE,
  bn as CHANGE_SAVE_ACCESS,
  ro as CHANGE_TILESET,
  uo as CHANGE_TP,
  Pn as CHANGE_TRANSPARENCY,
  xn as CHANGE_VEHICLE_BGM,
  vo as CHANGE_VEHICLE_IMAGE,
  gn as CHANGE_VICTORY_ME,
  ln as CHANGE_WEAPONS,
  vn as CHANGE_WINDOW_COLOR,
  Ye as COLLAPS_BOSS,
  Ue as COLLAPS_INSTANT,
  Oe as COLLAPS_NONE,
  $e as COLLAPS_NORMAL,
  Ui as COMMENT_BODY,
  Yi as COMMENT_HEAD,
  tn as COMMON_EVENT,
  _i as CONDITIONAL_BRANCH,
  Zi as CONDITIONAL_BRANCH_ELSE,
  mn as CONTROL_SELF_SWITCH,
  nn as CONTROL_SWITCHES,
  pn as CONTROL_TIMER,
  on as CONTROL_VARIABLES,
  fr as DEFAULT_DAMAGE_LABELS,
  qr as DEFAULT_GLOBAL_LABELS,
  Ii as DEFAULT_ITEM_LABELS,
  hi as DEFAULT_SKILL_LABELS,
  o as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  m as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  fi as DEFAULT_USABLE_ITEM_LABELS,
  Ur as EFFECT_ADD_BUFF,
  Or as EFFECT_ADD_DEBUFF,
  $r as EFFECT_ADD_STATE,
  ti as EFFECT_COMMON_EVENT,
  Xr as EFFECT_GAIN_TP,
  Qr as EFFECT_GROW,
  ei as EFFECT_LEARN_SKILL,
  Gr as EFFECT_RECOVER_HP,
  Kr as EFFECT_RECOVER_MP,
  _r as EFFECT_REMOVE_BUFF,
  Zr as EFFECT_REMOVE_DEBUFF,
  Yr as EFFECT_REMOVE_STATE,
  Jr as EFFECT_SPECIAL,
  Ro as ENEMY_APPEAR,
  wo as ENEMY_RECOVER_ALL,
  qo as ENEMY_TRANSFORM,
  An as ERASE_EVENT,
  Xn as ERASE_PICTURE,
  en as EXIT_EVENT_PROCESSING,
  gt as EXTRA_PARAM_CEV,
  ht as EXTRA_PARAM_CNT,
  ut as EXTRA_PARAM_CRI,
  yt as EXTRA_PARAM_EVA,
  ct as EXTRA_PARAM_HIT,
  ft as EXTRA_PARAM_HRG,
  bt as EXTRA_PARAM_MEV,
  It as EXTRA_PARAM_MRF,
  vt as EXTRA_PARAM_MRG,
  kt as EXTRA_PARAM_TRG,
  Hn as FADEIN_SCREEN,
  Un as FADEOUT_BGM,
  Jn as FADEOUT_BGS,
  En as FADEOUT_SCREEN,
  me as FILENAME_ACTORS,
  be as FILENAME_ANIMATIONS,
  ce as FILENAME_ARMORS,
  pe as FILENAME_CLASSES,
  he as FILENAME_COMMON_EVENTS,
  ye as FILENAME_ENEMIES,
  de as FILENAME_ITEMS,
  fe as FILENAME_MAP_INFOS,
  se as FILENAME_SKILLS,
  ge as FILENAME_STATES,
  oe as FILENAME_SYSTEM,
  Ie as FILENAME_TILESET,
  ue as FILENAME_TROOPS,
  le as FILENAME_WEAPONS,
  ot as FLAG_ID_AUTO_BATTLE,
  mt as FLAG_ID_GUARD,
  st as FLAG_ID_PRESERVE_TP,
  pt as FLAG_ID_SUBSTITUTE,
  Cn as FLASH_SCREEN,
  xe as FOLDER_AUDIO,
  G as FOLDER_AUDIO_BGM,
  $ as FOLDER_AUDIO_BGS,
  X as FOLDER_AUDIO_ME,
  K as FOLDER_AUDIO_SE,
  ve as FOLDER_DATA,
  ke as FOLDER_IMG,
  Y as FOLDER_IMG_BATTLEBACK1,
  U as FOLDER_IMG_BATTLEBACK2,
  O as FOLDER_IMG_CHACTERS,
  _ as FOLDER_IMG_ENEMIES,
  Z as FOLDER_IMG_FACES,
  J as FOLDER_IMG_PARALLACES,
  Q as FOLDER_IMG_PICTURES,
  ee as FOLDER_IMG_SV_ACTORS,
  te as FOLDER_IMG_SV_ENEMIES,
  ae as FOLDER_IMG_SYSTEM,
  re as FOLDER_IMG_TILESETS,
  ie as FOLDER_IMG_TITLES1,
  ne as FOLDER_IMG_TITLES2,
  Ne as FOLDER_JS,
  Do as FORCE_ACTION,
  Eo as GAME_OVER,
  Mn as GATHER_FOLLOWERS,
  oo as GET_LOCATION_INFO,
  qn as GET_ONOFF_VEHICLE,
  Mr as HITTYPE_CERTAIN,
  Hr as HITTYPE_MAGICAL,
  Er as HITTYPE_PHYSICAL,
  Gi as INPUT_NUMBER,
  an as LABEL,
  hr as LABELS_DATA_WEAPON,
  rn as LABEL_JUMP,
  vi as LABEL_SET_DATA,
  Vr as LABEL_SET_ITEM_EFFECT,
  Qt as LABEL_SET_TRAIT,
  Ji as LOOP,
  Qi as LOOP_BREAK,
  dp as MODULE_DATA,
  Wn as MOVE_PICTURE,
  lo as NAME_INPUT_PROCESSING,
  Ci as NO_OPERATION,
  Ao as OPEN_MENU_SCREEN,
  Mo as OPEN_SAVE_SCREEN,
  $s as OPERAND_CONSTANT,
  Os as OPERAND_GAMEDATA,
  Us as OPERAND_RANDOM,
  _s as OPERAND_SCRIPT,
  Ys as OPERAND_VARIABLE,
  et as PARTY_ABILITY_CANCEL_SURPRISE,
  rt as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Je as PARTY_ABILITY_ENCOUNTER_HALF,
  Qe as PARTY_ABILITY_ENCOUNTER_NONE,
  at as PARTY_ABILITY_GOLD_DOUBLE,
  tt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Yn as PLAY_BGM,
  Zn as PLAY_BGS,
  Qn as PLAY_ME,
  ao as PLAY_MOVIE,
  eo as PLAY_SE,
  Fo as PLUGIN_COMMAND_MV,
  Lo as PLUGIN_COMMAND_MZ,
  go as RECOVER_ALL,
  zt as REGULAR_PARAM_AGI,
  Rt as REGULAR_PARAM_ATK,
  qt as REGULAR_PARAM_DEF,
  At as REGULAR_PARAM_LUK,
  Pt as REGULAR_PARAM_MATK,
  St as REGULAR_PARAM_MAX_HP,
  wt as REGULAR_PARAM_MAX_MP,
  Dt as REGULAR_PARAM_MDEF,
  _n as RESUME_BGM,
  Ho as RETURN_TO_TITLE_SCREEN,
  Gn as ROTATE_PICTURE,
  Dm as ROUTE_CHANGE_BLEND_MODE,
  Im as ROUTE_CHANGE_FREQ,
  qm as ROUTE_CHANGE_IMAGE,
  Pm as ROUTE_CHANGE_OPACITY,
  bm as ROUTE_CHANGE_SPEED,
  Nm as ROUTE_DIR_FIX_OFF,
  xm as ROUTE_DIR_FIX_ON,
  Vo as ROUTE_END,
  tm as ROUTE_JUMP,
  Jo as ROUTE_MOVE_AWAY,
  em as ROUTE_MOVE_BACKWARD,
  Wo as ROUTE_MOVE_DOWN,
  Qo as ROUTE_MOVE_FORWARD,
  Go as ROUTE_MOVE_LEFT,
  $o as ROUTE_MOVE_LOWER_L,
  Yo as ROUTE_MOVE_LOWER_R,
  _o as ROUTE_MOVE_RANDOM,
  Ko as ROUTE_MOVE_RIGHT,
  Zo as ROUTE_MOVE_TOWARD,
  Xo as ROUTE_MOVE_UP,
  Uo as ROUTE_MOVE_UPPER_L,
  Oo as ROUTE_MOVE_UPPER_R,
  zm as ROUTE_PLAY_SE,
  Am as ROUTE_SCRIPT,
  km as ROUTE_STEP_ANIME_OFF,
  vm as ROUTE_STEP_ANIME_ON,
  gm as ROUTE_SWITCH_OFF,
  um as ROUTE_SWITCH_ON,
  Sm as ROUTE_THROUGH_OFF,
  Tm as ROUTE_THROUGH_ON,
  Rm as ROUTE_TRANSPARENT_OFF,
  wm as ROUTE_TRANSPARENT_ON,
  sm as ROUTE_TURN_180D,
  pm as ROUTE_TURN_90D_L,
  mm as ROUTE_TURN_90D_R,
  dm as ROUTE_TURN_90D_R_L,
  ym as ROUTE_TURN_AWAY,
  rm as ROUTE_TURN_DOWN,
  im as ROUTE_TURN_LEFT,
  lm as ROUTE_TURN_RANDOM,
  nm as ROUTE_TURN_RIGHT,
  cm as ROUTE_TURN_TOWARD,
  om as ROUTE_TURN_UP,
  am as ROUTE_WAIT,
  fm as ROUTE_WALK_ANIME_OFF,
  hm as ROUTE_WALK_ANIME_ON,
  On as SAVE_BGM,
  kr as SCHEMA_DAMAGE,
  lr as SCHEMA_DATA_ACTOR,
  yr as SCHEMA_DATA_ARMMOR,
  gr as SCHEMA_DATA_CLASS,
  Rr as SCHEMA_DATA_ENEMY,
  jr as SCHEMA_DATA_ITEM,
  Cm as SCHEMA_DATA_MAP_INFO,
  Ar as SCHEMA_DATA_SKILL,
  Ir as SCHEMA_DATA_STATE,
  Nr as SCHEMA_DATA_WEAPON,
  or as SCHEMA_TRAIT,
  Bo as SCRIPT_EVAL,
  Co as SCRIPT_EVAL_BODY,
  wn as SCROLL_MAP,
  Ki as SELECT_ITEM,
  Sn as SET_EVENT_LOCATION,
  Rn as SET_MOVEMENT_ROUTE,
  Tn as SET_VEHICLE_LOCATION,
  $n as SET_WEATHER_EFFECT,
  Fn as SHAKE_SCREEN,
  po as SHOP_PROCESSING,
  so as SHOP_PROCESSING_BODY,
  Dn as SHOW_ANIMATION,
  zn as SHOW_BALLOON_ICON,
  Po as SHOW_BATTLE_ANIMATION,
  Vi as SHOW_CHOICES,
  Wi as SHOW_CHOICES_ITEM,
  Fi as SHOW_MESSAGE,
  Li as SHOW_MESSAGE_BODY,
  Vn as SHOW_PICTURE,
  Xi as SHOW_SCROLLING_TEXT,
  $i as SHOW_SCROLLING_TEXT_BODY,
  Oi as SKIP,
  Wr as SPECIAL_EFFECT_ESCAPE,
  Xt as SPECIAL_PARAM_EXR,
  Kt as SPECIAL_PARAM_FDR,
  Bt as SPECIAL_PARAM_GRD,
  Lt as SPECIAL_PARAM_MCR,
  Gt as SPECIAL_PARAM_MDR,
  Wt as SPECIAL_PARAM_PDR,
  Ft as SPECIAL_PARAM_PHA,
  Ct as SPECIAL_PARAM_REC,
  Vt as SPECIAL_PARAM_TCR,
  Ht as SPECIAL_PARAM_TGR,
  Se as SRC_COLOR,
  lp as SRC_DATA_ACTOR,
  hp as SRC_DATA_ARMOR,
  fp as SRC_DATA_CLASS,
  vp as SRC_DATA_COMMON_EVNET,
  yp as SRC_DATA_ENEMY,
  bp as SRC_DATA_ITEMS,
  cp as SRC_DATA_MAP,
  gp as SRC_DATA_SKILL,
  up as SRC_DATA_STATE,
  kp as SRC_DATA_TROOP,
  Ip as SRC_DATA_WEAPON,
  to as STOP_SE,
  Kn as TINT_PICTURE,
  Bn as TINT_SCREEN,
  ka as TRAIT_ACTION_PLUS,
  ma as TRAIT_ATTACK_ELEMENT,
  la as TRAIT_ATTACK_SKILL,
  sa as TRAIT_ATTACK_SPEED,
  pa as TRAIT_ATTACK_STATE,
  da as TRAIT_ATTACK_TIMES,
  Na as TRAIT_COLLAPSE_TYPE,
  ta as TRAIT_DEBUFF_RATE,
  ea as TRAIT_ELEMENT_RATE,
  Ia as TRAIT_EQUIP_ARMOR_TYPE,
  ha as TRAIT_EQUIP_LOCK,
  fa as TRAIT_EQUIP_SEAL,
  ba as TRAIT_EQUIP_WEAPON_TYPE,
  ia as TRAIT_PARAM,
  Ta as TRAIT_PARTY_ABILITY,
  ua as TRAIT_SKILL_ADD,
  ga as TRAIT_SKILL_SEAL,
  ca as TRAIT_SKILL_TYPE_ADD,
  ya as TRAIT_SKILL_TYPE_SEAL,
  va as TRAIT_SLOT_TYPE,
  oa as TRAIT_SPARAM,
  xa as TRAIT_SPECIAL_FLAG,
  aa as TRAIT_STATE_RATE,
  ra as TRAIT_STATE_RESIST,
  na as TRAIT_XPARAM,
  Nn as TRANSFER_PLAYER,
  nr as TYPENAME_TRAIT,
  Ln as WAIT,
  Ke as applyFormatRule,
  Cs as cloneChoices,
  kd as cloneEventCommand,
  vd as cloneParameters,
  Ze as collapsOptionsToArray,
  De as compileFormatRule,
  fs as convertCommentArrayToObject,
  pp as createActorControlChars,
  np as createControlCharFormat,
  jm as createEventCommand,
  Zm as createNoteEntity,
  sp as createSystemVariableControlChars,
  xp as defineGameDataSources,
  v as defineSystemItems,
  _e as defineTraitCollapseType,
  xt as defineTraitExtraParam,
  ir as defineTraitItems,
  it as defineTraitPartyAbility,
  jt as defineTraitRegularParam,
  dt as defineTraitSpecialFlag,
  $t as defineTraitSpecialParam,
  Ee as detectFormatErrors,
  Ap as domainNames,
  Tt as extraParamName,
  Nt as extraParamsToArray,
  bi as formatItemEffectText,
  pr as formatTraitText,
  ld as fromArrayCommonEvent,
  md as fromArrayControlSwitches,
  Ts as fromArrayInputNumber,
  Ds as fromArrayScrollingTextBody,
  Rs as fromArrayScrollingTextHeader,
  Es as fromArraySetupChoice,
  js as fromArraySetupChoiceItem,
  Ls as fromArrayShowMessageHeader,
  op as fromStringArray,
  Js as getActorValue,
  mp as getControlChars,
  Zs as getEnemyValue,
  rp as getNoteValue,
  Nd as isCloneableCommand,
  Fp as isCommandAudio,
  Ep as isCommandChangeActorText,
  Id as isCommandChangeBattleBgm,
  fd as isCommandChangeDefeatMe,
  hd as isCommandChangeVictoryMe,
  rs as isCommandCommentBody,
  as as isCommandCommentHeader,
  Xp as isCommandCommonEvent,
  Zp as isCommandInputNumber,
  Vp as isCommandNonParam,
  yd as isCommandPlayBgm,
  ud as isCommandPlayBgs,
  gd as isCommandPlayMe,
  bd as isCommandPlaySe,
  ns as isCommandScriptBody,
  is as isCommandScriptHeader,
  Bp as isCommandScrollTextHead,
  Op as isCommandShowChoiceItem,
  Yp as isCommandShowChoices,
  Qp as isCommandShowMessage,
  es as isCommandShowMessageBody,
  ts as isCommandShowScrollingTextBody,
  Gp as isCommandTextBody,
  Ai as isDataActor,
  ji as isDataArmor,
  Bi as isDataClass,
  Ei as isDataEnemy,
  Di as isDataItem,
  _m as isDataMap,
  Om as isDataMapInfo,
  zi as isDataSkill,
  Hi as isDataState,
  Mi as isDataWeapon,
  Pr as itemSourceId,
  zp as labelsRegistry,
  sr as makeActorData,
  cr as makeArmorData,
  ss as makeAudioCommand,
  p as makeAudioFileParams,
  ur as makeClassData,
  ds as makeCommandAudioAny,
  os as makeCommandChangeActorName,
  ms as makeCommandChangeActorNickName,
  ps as makeCommandChangeActorProfile,
  gs as makeCommandChangeBattleBGM,
  Is as makeCommandChangeDefeatME,
  bs as makeCommandChangeVictoryME,
  ks as makeCommandCommentBody,
  vs as makeCommandCommentHeader,
  dd as makeCommandCommonEvent,
  sd as makeCommandControlSwitches,
  Ss as makeCommandInputNumber,
  ls as makeCommandPlayBGM,
  cs as makeCommandPlayBGS,
  ys as makeCommandPlayME,
  us as makeCommandPlaySE,
  Xs as makeCommandScriptArray,
  Ks as makeCommandScriptBody,
  Gs as makeCommandScriptHeader,
  zs as makeCommandScrollingTextBody,
  qs as makeCommandScrollingTextHeader,
  Bs as makeCommandSetupChoice,
  As as makeCommandShowChoiceItem,
  Fs as makeCommandShowMessage,
  Ws as makeCommandShowMessageBody,
  hs as makeCommentArray,
  xs as makeCommentCommandArray,
  Vm as makeCommonEventData,
  vr as makeDamage,
  Tr as makeDropItem,
  n as makeEditorSetting,
  Sr as makeEnemyAction,
  wr as makeEnemyData,
  Mm as makeEventPageCondition,
  r as makeItemCategories,
  i as makeItemCategoriesFromArray,
  Dr as makeItemData,
  Lm as makeMapData,
  Em as makeMapEvent,
  Hm as makeMapEventIamge,
  Bm as makeMapEventPage,
  Fm as makeMapInfoData,
  t as makeMenuCommandsEnabled,
  a as makeMenuCommandsEnabledFromArray,
  Jm as makeRegex,
  zr as makeSkillData,
  br as makeStateData,
  B as makeSystemData,
  Wm as makeTroopData,
  Km as makeTroopEventConditions,
  Gm as makeTroopMember,
  xr as makeWeaponData,
  Fe as mergeItemsSource,
  dr as normalizeDataActor,
  nt as partyAbilityToArray,
  ep as readNote,
  Qm as readNoteObject,
  Et as regularParamName,
  Mt as regularParamsToArray,
  ap as replaceNote,
  ai as resolveItemEffectLabels,
  Sa as resolveTraitLabels,
  ip as setNoteValue,
  lt as specialFlagToArray,
  Ut as specialParamName,
  Yt as specialParamsToArray,
  cd as toArrayCommonEvent,
  pd as toArrayControlSwitches,
  Ns as toArrayInputNumber,
  nd as toArrayOperandActorStatus,
  ed as toArrayOperandConstant,
  od as toArrayOperandEnemyStatus,
  id as toArrayOperandItemData,
  ad as toArrayOperandRandom,
  rd as toArrayOperandScript,
  td as toArrayOperandVariable,
  Ps as toArrayScrollingTextBody,
  ws as toArrayScrollingTextHeader,
  Hs as toArraySetupChoice,
  Ms as toArraySetupChoiceItem,
  Vs as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
