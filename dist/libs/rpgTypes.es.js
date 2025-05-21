import O from "ajv";
const st = (e = {}) => ({
  gameId: e.gameId ?? 0,
  screenWidth: e.screenWidth ?? 0,
  screenHeight: e.screenHeight ?? 0,
  uiAreaWidth: e.uiAreaWidth ?? 0,
  uiAreaHeight: e.uiAreaHeight ?? 0,
  windowOpacity: e.windowOpacity ?? 0,
  screenScale: e.screenScale ?? 1,
  numberFontFilename: e.numberFontFilename ?? "",
  mainFontFilename: e.mainFontFilename ?? "",
  fallbackFonts: e.fallbackFonts ?? "",
  fontSize: e.fontSize ?? 28
}), $a = {
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
    fallbackFonts: { type: "string" },
    fontSize: { type: "integer" }
  },
  required: [
    "gameId",
    "screenWidth",
    "screenHeight",
    "uiAreaWidth",
    "uiAreaHeight",
    "windowOpacity",
    "screenScale",
    "numberFontFilename",
    "mainFontFilename",
    "fallbackFonts",
    "fontSize"
  ],
  additionalProperties: !1
}, i = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), ct = (e = {}) => [
  i(e.cursor),
  i(e.ok),
  i(e.cancel),
  i(e.buzzer),
  i(e.equip),
  i(e.save),
  i(e.load),
  i(e.battleStart),
  i(e.escape),
  i(e.enemyAttack),
  i(e.enemyDamage),
  i(e.enemyCollapse),
  i(e.bossCollapes1),
  i(e.bossCollapes2),
  i(e.actorDamage),
  i(e.actorCollapse),
  i(e.playRecovery),
  i(e.playMiss),
  i(e.playEvasion),
  i(e.playMagicEvasion),
  i(e.playReflection),
  i(e.shop),
  i(e.useItem),
  i(e.useSkill)
], Qa = (e) => ({
  cursor: e[0],
  ok: e[1],
  cancel: e[2],
  buzzer: e[3],
  equip: e[4],
  save: e[5],
  load: e[6],
  battleStart: e[7],
  escape: e[8],
  enemyAttack: e[9],
  enemyDamage: e[10],
  enemyCollapse: e[11],
  bossCollapes1: e[12],
  bossCollapes2: e[13],
  actorDamage: e[14],
  actorCollapse: e[15],
  playRecovery: e[16],
  playMiss: e[17],
  playEvasion: e[18],
  playMagicEvasion: e[19],
  playReflection: e[20],
  shop: e[21],
  useItem: e[22],
  useSkill: e[23]
}), mt = (e) => [
  e.level ?? "Level",
  e.levelA ?? "Level",
  e.hp ?? "HP",
  e.hpA ?? "HP",
  e.mp ?? "MP",
  e.mpA ?? "MP",
  e.tp ?? "TP",
  e.tpA ?? "TP",
  e.experience ?? "EXP",
  e.exp ?? "EXP"
], Za = (e) => ({
  level: e[0],
  levelA: e[1],
  hp: e[2],
  hpA: e[3],
  mp: e[4],
  mpA: e[5],
  tp: e[6],
  tpA: e[7],
  experience: e[8],
  exp: e[9]
}), pt = (e) => dt(e, ""), dt = (e, t) => [
  e.fight ?? "Fight",
  e.escape ?? "Escape",
  e.attack ?? "Attack",
  e.guard ?? "Guard",
  e.item ?? "Item",
  e.skill ?? "Skill",
  e.equip ?? "Equip",
  e.status ?? "Status",
  e.formation ?? "Formation",
  e.save ?? "Save",
  e.gameEnd ?? "Game End",
  e.options ?? "Options",
  e.weapon ?? "Weapon",
  e.armor ?? "Armor",
  e.keyItem ?? "Key Item",
  e.equip2 ?? "Equip2",
  e.optimize ?? "Optimize",
  e.clear ?? "Clear",
  e.newGame ?? "New Game",
  e.continue_ ?? "Continue",
  t,
  e.toTitle ?? "To Title",
  e.cancel ?? "Cancel",
  t,
  e.buy ?? "Buy",
  e.sell ?? "Sell"
], Ja = (e) => ({
  fight: e[0],
  escape: e[1],
  attack: e[2],
  guard: e[3],
  item: e[4],
  skill: e[5],
  equip: e[6],
  status: e[7],
  formation: e[8],
  save: e[9],
  gameEnd: e[10],
  options: e[11],
  weapon: e[12],
  armor: e[13],
  keyItem: e[14],
  equip2: e[15],
  optimize: e[16],
  clear: e[17],
  newGame: e[18],
  continue_: e[19],
  toTitle: e[21],
  cancel: e[22],
  buy: e[24],
  sell: e[25]
}), a = (e, t) => typeof e == "string" ? e : t, lt = (e) => ({
  actionFailure: a(e.actionFailure, "Action failed."),
  actorDamage: a(e.actorDamage, "%1 took %2 damage."),
  actorRecovery: a(e.actorRecovery, "%1 recovered %2 HP."),
  actorGain: a(e.actorGain, "%1 gained %2."),
  actorLoss: a(e.actorLoss, "%1 lost %2."),
  actorDrain: a(e.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: a(e.actorNoDamage, "%1 was not damaged."),
  actorNoHit: a(e.actorNoHit, "%1 was not hit."),
  alwaysDash: a(e.alwaysDash, "Always dash."),
  bgmVolume: a(e.bgmVolume, "BGM volume"),
  bgsVolume: a(e.bgsVolume, "BGS volume"),
  commandRemember: a(e.commandRemember, "Command remember."),
  criticalToActor: a(e.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: a(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: a(e.counterAttack, "%1 countered!"),
  debuffAdd: a(e.debuffAdd, "%1's %2 was lowered."),
  defeat: a(e.defeat, "Defeat."),
  enemyDamage: a(e.enemyDamage, "%1 took %2 damage."),
  enemyDrain: a(e.enemyDrain, "%1 drained %2 HP."),
  enemyGain: a(e.enemyGain, "%1 gained %2."),
  enemyLoss: a(e.enemyLoss, "%1 lost %2."),
  enemyNoDamage: a(e.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: a(e.enemyNoHit, "%1 was not hit."),
  enemyRecovery: a(e.enemyRecovery, "%1 recovered %2 HP."),
  evasion: a(e.evasion, "%1 evaded the attack!"),
  autosave: a(e.autosave, "Autosave"),
  escapeFailure: a(e.escapeFailure, "Escape failed."),
  escapeStart: a(e.escapeStart, "%1 started to escape!"),
  emerge: a(e.emerge, "%1 appeared!"),
  expNext: a(e.expNext, "Next level in %1 EXP."),
  expTotal: a(e.expTotal, "Total EXP: %1"),
  file: a(e.file, "File"),
  buffAdd: a(e.buffAdd, "%1's %2 was raised."),
  buffRemove: a(e.buffRemove, "%1's %2 was lowered."),
  obtainExp: a(e.obtainExp, "%1 EXP obtained."),
  obtainGold: a(e.obtainGold, "%1 gold obtained."),
  obtainItem: a(e.obtainItem, "%1 obtained %2."),
  obtainSkill: a(e.obtainSkill, "%1 learned %2."),
  levelUp: a(e.levelUp, "%1 leveled up!"),
  partyName: a(e.partyName, "Party"),
  loadMessage: a(e.loadMessage, "Load %1?"),
  meVolume: a(e.meVolume, "ME volume"),
  possession: a(e.possession, "Possession"),
  preemptive: a(e.preemptive, "%1 attacked first!"),
  saveMessage: a(e.saveMessage, "Save %1?"),
  seVolume: a(e.seVolume, "SE volume"),
  magicEvasion: a(e.magicEvasion, "%1 evaded the magic!"),
  magicReflection: a(e.magicReflection, "%1 reflected the magic!"),
  substitute: a(e.substitute, "%1 took the hit!"),
  surprise: a(e.surprise, "%1 surprised the enemy!"),
  touchUI: a(e.touchUI, "Touch UI"),
  useItem: a(e.useItem, "%1 used %2."),
  victory: a(e.victory, "Victory!")
}), yt = (e) => [
  e.mhp ?? "",
  e.mmp ?? "",
  e.atk ?? "",
  e.def ?? "",
  e.mat ?? "",
  e.mdf ?? "",
  e.agi ?? "",
  e.luk ?? "",
  e.hit ?? "",
  e.eva ?? ""
], k = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: i(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Et = (e = {}) => [
  e.item ?? !0,
  e.skill ?? !0,
  e.equip ?? !0,
  e.status ?? !0,
  e.formation ?? !0,
  e.save ?? !0
], ei = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), At = (e = {}) => [
  e.item ?? !0,
  e.weapon ?? !0,
  e.armor ?? !0,
  e.keyItem ?? !0
], ti = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), ut = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), ni = {
  domainName: "オプション",
  options: {
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
  }
}, oi = {
  domainName: "タイプ",
  options: {
    armorTypes: "防具タイプ",
    elements: "属性",
    equipTypes: "装備タイプ",
    skillTypes: "スキルタイプ",
    weaponTypes: "武器タイプ",
    switches: "スイッチ",
    variables: "変数",
    magicSkills: "魔法スキル"
  }
}, Tt = (e = {}) => ({
  optAutosave: e.optAutosave ?? !0,
  optDisplayTp: e.optDisplayTp ?? !0,
  optDrawTitle: e.optDrawTitle ?? !0,
  optExtraExp: e.optExtraExp ?? !0,
  optFloorDeath: e.optFloorDeath ?? !0,
  optFollowers: e.optFollowers ?? !0,
  optKeyItemsNumber: e.optKeyItemsNumber ?? !0,
  optSideView: e.optSideView ?? !0,
  optSlipDeath: e.optSlipDeath ?? !0,
  optTransparent: e.optTransparent ?? !0,
  optMessageSkip: e.optMessageSkip ?? !0,
  optSplashScreen: e.optSplashScreen ?? !0
}), _t = {
  type: "object",
  additionalProperties: !0,
  required: [
    "optAutosave",
    "optDisplayTp",
    "optDrawTitle",
    "optExtraExp",
    "optFloorDeath",
    "optFollowers",
    "optKeyItemsNumber",
    "optSideView",
    "optSlipDeath",
    "optTransparent",
    "optMessageSkip",
    "optSplashScreen"
  ],
  properties: {
    optAutosave: { type: "boolean" },
    optDisplayTp: { type: "boolean" },
    optDrawTitle: { type: "boolean" },
    optExtraExp: { type: "boolean" },
    optFloorDeath: { type: "boolean" },
    optFollowers: { type: "boolean" },
    optKeyItemsNumber: { type: "boolean" },
    optSideView: { type: "boolean" },
    optSlipDeath: { type: "boolean" },
    optTransparent: { type: "boolean" },
    optMessageSkip: { type: "boolean" },
    optSplashScreen: { type: "boolean" }
  }
}, gt = {
  additionalProperties: !1,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: {
    actorId: { type: "integer" },
    level: { type: "integer", minimum: 1 },
    equips: {
      type: "array",
      items: { type: "integer" }
    }
  }
}, It = {
  type: "object",
  additionalProperties: !1,
  required: ["type", "weaponImageId"],
  properties: {
    type: { type: "number" },
    weaponImageId: { type: "number" }
  }
}, Rt = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: {
    tileSize: { type: "integer", minimum: 0 },
    faceSize: { type: "integer", minimum: 0 },
    iconSize: { type: "integer", minimum: 0 }
  }
}, L = new O({ strict: !1 });
L.compile(_t);
const St = L.compile(gt), Ct = (e) => St(e);
L.compile(It);
const Nt = L.compile(Rt), ft = (e) => Nt(e), ai = (e) => {
  var w, V, q, Y, W;
  const t = e.vehicles ?? {}, n = e.dataNames ?? {}, o = e.debug ?? {}, c = e.images ?? {}, m = e.gameInit ?? {}, M = e.bgm ?? {}, b = Ot(e.size);
  return {
    ...Tt(e.options),
    currencyUnit: ((w = e.texts) == null ? void 0 : w.currencyUnit) ?? "",
    gameTitle: ((V = e.texts) == null ? void 0 : V.gameTitle) ?? "",
    sounds: ct(e.sounds),
    editor: ut(e.editing),
    advanced: st(e.advanced),
    title1Name: c.title1Name ?? "",
    title2Name: c.title2Name ?? "",
    battleback1Name: c.battleback1Name ?? "",
    battleback2Name: c.battleback2Name ?? "",
    armorTypes: A(n.armorTypes),
    elements: A(n.elements),
    equipTypes: A(n.equipTypes),
    weaponTypes: A(n.weaponTypes),
    skillTypes: A(n.skillTypes),
    switches: A(n.switches),
    variables: A(n.variables),
    magicSkills: A(n.magicSkills),
    airship: k(t.airship),
    boat: k(t.boat),
    ship: k(t.ship),
    defeatMe: i((q = e.me) == null ? void 0 : q.defeatMe),
    gameoverMe: i((Y = e.me) == null ? void 0 : Y.gameoverMe),
    titleBgm: i(M.titleBgm),
    tileSize: b.tileSize,
    faceSize: b.faceSize,
    iconSize: b.iconSize,
    versionId: 1,
    attackMotions: [],
    testBattlers: Lt(o.testBattlers, Pt),
    battleBgm: i(M.battleBgm),
    victoryMe: i((W = e.me) == null ? void 0 : W.victoryMe),
    editMapId: o.editMapId ?? 0,
    locale: "",
    startMapId: m.startMapId ?? 0,
    startX: m.startX ?? 0,
    startY: m.startY ?? 0,
    testTroopId: o.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Mt(e.terms ?? {}),
    itemCategories: At(e.itemCategories),
    partyMembersArray: ne(m.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: o.battlerName ?? "",
    menuCommands: Et(e.menuComamnds)
  };
}, Mt = (e) => ({
  basic: mt(e.basic ?? {}),
  commands: pt(e.commands ?? {}),
  params: yt(e.params ?? {}),
  messages: lt(e.messages ?? {})
}), A = (e) => e ? [...e] : [], ne = (e) => e ? [...e] : [], Ot = (e) => ft(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, Lt = (e, t) => e ? e.map(t) : [], Pt = (e) => Ct(e) ? {
  actorId: e.actorId,
  equips: ne(e.equips),
  level: e.level
} : {
  actorId: 0,
  equips: [],
  level: 1
}, ii = "bgm", ri = "se", si = "me", ci = "bgs", mi = "battlebacks1", pi = "battlebacks2", di = "characters", li = "enemies", yi = "faces", Ei = "parallaxes", Ai = "pictures", ui = "sv_actors", Ti = "sv_enemies", _i = "system", gi = "tilesets", Ii = "titles1", Ri = "titles2", Si = "System.json", Ci = "Actors.json", Ni = "Classes.json", fi = "Skills.json", Mi = "Items.json", Oi = "Weapons.json", Li = "Armors.json", Pi = "Enemies.json", hi = "Troops.json", Di = "States.json", vi = "Animations.json", bi = "Tilesets.json", ki = "CommonEvents.json", Fi = "MapInfos.json", xi = "data", Hi = "img", Bi = "audio", Ui = "js", oe = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const c = t[o];
    typeof c == "string" && (n[o] = c);
  }
  return n;
}, Gi = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: oe(e.options, t.options ?? {})
}), wi = (e, t) => {
  const n = {};
  for (const o in e) {
    const c = e[o], m = t[o] ?? {};
    n[o] = oe(
      c,
      m
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Vi = (e) => e.variables.map(_), qi = (e) => e.elements.map(_), Yi = (e) => e.equipTypes.map(_), Wi = (e) => e.skillTypes.map(_), ji = (e) => e.weaponTypes.map(_), Xi = (e) => e.armorTypes.map(_), Ki = (e) => e.terms.params.map(_), g = "rmmz", H = "trait", ae = "data", ie = "system", ht = 11, Dt = 12, vt = 13, bt = 14, kt = 21, Ft = 22, xt = 23, Ht = 31, Bt = 32, Ut = 33, Gt = 34, wt = 35, Vt = 41, qt = 42, Yt = 43, Wt = 44, jt = 51, Xt = 52, Kt = 53, zt = 54, $t = 55, Qt = 61, Zt = 62, Jt = 63, en = 64, tn = 0, nn = 1, on = 2, an = 3, rn = 0, sn = 1, cn = 2, mn = 3, pn = 4, dn = 5, ln = 0, yn = 1, En = 2, An = 3, re = 0, se = 1, ce = 2, me = 3, pe = 4, de = 5, le = 6, ye = 7, Ee = 8, Ae = 9, ue = 0, Te = 1, _e = 2, ge = 3, Ie = 4, Re = 5, Se = 6, Ce = 7, Ne = 0, fe = 1, Me = 2, Oe = 3, Le = 4, Pe = 5, he = 6, De = 7, ve = 8, be = 9, zi = (e, t) => {
  switch (e) {
    case ue:
      return t.maxHp;
    case Te:
      return t.maxMp;
    case _e:
      return t.atk;
    case ge:
      return t.def;
    case Ie:
      return t.matk;
    case Re:
      return t.mdef;
    case Se:
      return t.agi;
    case Ce:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, $i = (e, t) => {
  switch (e) {
    case me:
      return t.criticalEvasionRate;
    case se:
      return t.evasionRate;
    case le:
      return t.counterAttackRate;
    case ce:
      return t.criticalRate;
    case re:
      return t.hitRate;
    case ye:
      return t.hpRegenerationRate;
    case pe:
      return t.magicEvasionRate;
    case de:
      return t.magicReflectionRate;
    case Ee:
      return t.mpRegenerationRate;
    case Ae:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Qi = (e, t) => {
  switch (e) {
    case be:
      return t.experienceRate;
    case Ne:
      return t.targetRate;
    case ve:
      return t.floorDamageRate;
    case fe:
      return t.guradEffectRate;
    case Le:
      return t.mpCostRate;
    case Pe:
      return t.tpChargeRate;
    case he:
      return t.physicalDamageRate;
    case De:
      return t.magicDamageRate;
    case Oe:
      return t.pharmacology;
    case Me:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, un = (e, t) => [
  {
    id: tn,
    name: t.normal
  },
  {
    id: nn,
    name: e.bossCollaps
  },
  {
    id: on,
    name: e.instantCollaps
  },
  {
    id: an,
    name: e.noneCollaps
  }
], Tn = (e) => [
  {
    id: rn,
    name: e.encounterHalf
  },
  {
    id: sn,
    name: e.encounterNone
  },
  {
    id: cn,
    name: e.cancelSurprise
  },
  {
    id: mn,
    name: e.raisePreemptive
  },
  {
    id: pn,
    name: e.goldDouble
  },
  {
    id: dn,
    name: e.dropItemDouble
  }
], _n = (e) => [
  { id: ue, name: e.maxHp },
  { id: Te, name: e.maxMp },
  { id: _e, name: e.atk },
  { id: ge, name: e.def },
  { id: Ie, name: e.matk },
  { id: Re, name: e.mdef },
  { id: Se, name: e.agi },
  { id: Ce, name: e.luk }
], gn = (e) => [
  {
    id: re,
    name: e.hitRate
  },
  {
    id: se,
    name: e.evasionRate
  },
  {
    id: ce,
    name: e.criticalRate
  },
  {
    id: me,
    name: e.criticalEvasionRate
  },
  {
    id: pe,
    name: e.magicEvasionRate
  },
  {
    id: de,
    name: e.magicReflectionRate
  },
  {
    id: le,
    name: e.counterAttackRate
  },
  {
    id: ye,
    name: e.hpRegenerationRate
  },
  {
    id: Ee,
    name: e.mpRegenerationRate
  },
  {
    id: Ae,
    name: e.tpRegenerationRate
  }
], In = (e) => [
  {
    id: Ne,
    name: e.targetRate
  },
  {
    id: fe,
    name: e.guradEffectRate
  },
  {
    id: Me,
    name: e.recoveryEffectRate
  },
  {
    id: Oe,
    name: e.pharmacology
  },
  {
    id: Le,
    name: e.mpCostRate
  },
  {
    id: Pe,
    name: e.tpChargeRate
  },
  {
    id: he,
    name: e.physicalDamageRate
  },
  {
    id: De,
    name: e.magicDamageRate
  },
  {
    id: ve,
    name: e.floorDamageRate
  },
  {
    id: be,
    name: e.experienceRate
  }
], Rn = (e) => [
  {
    id: ln,
    name: e.autoBattle
  },
  {
    id: yn,
    name: e.guard
  },
  {
    id: En,
    name: e.substitute
  },
  {
    id: An,
    name: e.preventEscape
  }
], S = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: g,
    module: H,
    kind: e
  }
}), Zi = (e, t) => S(
  Ge,
  e,
  (n) => un(n, t)
), Ji = (e) => S(we, e, Tn), er = (e) => S(f, e, _n), tr = (e) => S(Be, e, gn), nr = (e) => S(Ue, e, In), or = (e) => S(Ve, e, Rn), p = "{name}", R = "{name} * {value}%", j = "{name} + {value}%", X = "{value}", r = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: R,
      options: {
        maxHp: "最大HP",
        maxMp: "最大MP",
        atk: "攻撃力",
        def: "防御力",
        matk: "魔法攻撃力",
        mdef: "魔法防御力",
        agi: "敏捷性",
        luk: "運"
      }
    },
    extraParam: {
      domainName: "追加能力値",
      format: j,
      options: {
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
      }
    },
    specialParam: {
      domainName: "特殊能力値",
      format: R,
      options: {
        targetRate: "狙われ率",
        guradEffectRate: "防御効果率",
        recoveryEffectRate: "回復効果率",
        pharmacology: "薬の知識",
        mpCostRate: "MP消費率",
        tpChargeRate: "TPチャージ率",
        physicalDamageRate: "物理ダメージ率",
        magicDamageRate: "魔法ダメージ率",
        floorDamageRate: "床ダメージ率",
        experienceRate: "経験値率"
      }
    },
    specialFlag: {
      domainName: "特殊フラグ",
      format: p,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: p,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: p,
      options: {
        cancelSurprise: "不意打ち無効",
        dropItemDouble: "アイテムドロップ2倍",
        encounterHalf: "エンカウント半減",
        encounterNone: "エンカウントなし",
        goldDouble: "ゴールド2倍",
        raisePreemptive: "先制攻撃率アップ"
      }
    },
    elementRate: {
      domainName: "属性有効度",
      format: R
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: R
    },
    stateRate: {
      domainName: "ステート有効度",
      format: R
    },
    stateResist: {
      domainName: "ステート無効",
      format: p
    },
    attackElement: {
      domainName: "攻撃属性",
      format: p
    },
    attackState: {
      domainName: "攻撃ステート",
      format: j
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: X
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: X
    },
    actionPlus: {
      domainName: "行動追加",
      format: R
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: p
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: p
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: p
    },
    equipLock: {
      domainName: "装備固定",
      format: p
    },
    equipSeal: {
      domainName: "装備封印",
      format: p
    },
    slotType: {
      domainName: "スロットタイプ",
      format: p
    },
    skillAdd: {
      domainName: "スキル追加",
      format: p
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: p
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: p
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: p
    }
  }
}, K = "{value}", z = "{name}";
class Sn {
  constructor(t, n, o, c) {
    this.code = t, this.label = n, this.format = o, this.dataSource = c;
  }
  match(t) {
    return this.code === t.code;
  }
  testTraitCode(t) {
    this.match(t);
  }
  formatText(t, n) {
    this.testTraitCode(t);
    const o = this.format.replaceAll(
      K,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      z,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(K);
  }
  requiresName() {
    return this.format.includes(z);
  }
  invalidPlaceHolder() {
    const t = ["value", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((o) => o[1]).filter((o) => !t.includes(o));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const t = !this.isFormatValidForDataSource(), n = this.requiresName() && !this.dataSource, o = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: t || n || o.length > 0,
      missingDataSourceError: t,
      sourceMismatchError: n,
      invalidPlaceHolders: o
    };
  }
}
const ar = (e) => [
  Cn(e.elementRate),
  Nn(e.debuffRate),
  fn(e.stateRate),
  Mn(e.stateResist),
  On(e.regularParam),
  Ln(e.extraParam),
  Pn(e.specialParam),
  hn(e.attackElement),
  Dn(e.attackState),
  vn(e.attackSpeed),
  bn(e.attackTimes),
  kn(e.attackSkill),
  jn(e.skillTypeAdd),
  Xn(e.skillTypeSeal),
  qn(e.skillAdd),
  Yn(e.skillSeal),
  Un(e.equipWeaponType),
  Gn(e.equipArmorType),
  wn(e.equipLock),
  Vn(e.equipSeal),
  Wn(e.slotType),
  Fn(e.actionPlus),
  xn(e.specialFlag),
  Hn(e.collaps),
  Bn(e.partyAbility)
], $ = (e, t) => typeof t == "string" ? t : e, s = (e, t, n, o) => {
  const c = $(t.domainName, n.domainName), m = $(t.format, n.format);
  return new Sn(e, c, m, o);
}, ke = () => ({
  module: ie,
  author: g,
  kind: Io
}), Fe = (e) => ({
  module: ae,
  author: g,
  kind: e
}), E = (e) => ({
  author: g,
  module: H,
  kind: e
}), xe = (e) => ({
  author: g,
  module: ie,
  kind: e
}), Cn = (e) => s(
  ht,
  r.options.elementRate,
  e,
  ke()
), Nn = (e) => s(
  Dt,
  r.options.debuffRate,
  e,
  E(f)
), fn = (e) => s(
  vt,
  r.options.stateRate,
  e,
  E(f)
), Mn = (e) => s(
  bt,
  r.options.stateResist,
  e,
  Fe(P)
), On = (e) => s(
  kt,
  r.options.regularParam,
  e,
  E(f)
), Ln = (e) => s(
  Ft,
  r.options.extraParam,
  e,
  E(Be)
), Pn = (e) => s(
  xt,
  r.options.specialParam,
  e,
  E(Ue)
), hn = (e) => s(
  Ht,
  r.options.attackElement,
  e,
  ke()
), Dn = (e) => s(
  Bt,
  r.options.attackState,
  e,
  E(P)
), vn = (e) => s(Ut, r.options.attackSpeed, e), bn = (e) => s(Gt, r.options.attackTimes, e), kn = (e) => s(
  wt,
  r.options.attackSkill,
  e,
  Fe(qe)
), Fn = (e) => s(Qt, r.options.actionPlus, e), xn = (e) => s(
  Zt,
  r.options.specialFlag,
  e,
  E(Ve)
), Hn = (e) => s(
  Jt,
  r.options.collaps,
  e,
  E(Ge)
), Bn = (e) => s(
  en,
  r.options.partyAbility,
  e,
  E(we)
), Un = (e) => s(
  jt,
  r.options.equipWeaponType,
  e,
  xe(_o)
), Gn = (e) => s(
  Xt,
  r.options.equipArmorType,
  e,
  xe(go)
), wn = (e) => s(Kt, r.options.equipLock, e), Vn = (e) => s(zt, r.options.equipSeal, e), qn = (e) => s(Yt, r.options.skillAdd, e), Yn = (e) => s(Wt, r.options.skillSeal, e), Wn = (e) => s($t, r.options.slotType, e), jn = (e) => s(
  Vt,
  r.options.skillTypeAdd,
  e
), Xn = (e) => s(
  qt,
  r.options.skillTypeSeal,
  e
), ir = "Trait", rr = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, sr = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  battlerName: e.battlerName ?? "",
  characterName: e.characterName ?? "",
  characterIndex: e.characterIndex ?? 0,
  faceName: e.faceName ?? "",
  faceIndex: e.faceIndex ?? 0,
  traits: [],
  note: e.note ?? "",
  classId: e.classId ?? 0,
  nickname: e.nickname ?? "",
  profile: e.profile ?? "",
  equips: [],
  initialLevel: e.initialLevel ?? 0,
  maxLevel: e.maxLevel ?? 0
}), Kn = {
  type: "object",
  required: [
    "name",
    "id",
    "nickname",
    "battlerName",
    "characterName",
    "characterIndex",
    "faceName",
    "faceIndex",
    "classId",
    "initialLevel",
    "maxLevel"
  ],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: { type: "integer", minimum: 0 },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, cr = (e) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  battlerName: e.battlerName ?? "",
  characterName: e.characterName ?? "",
  characterIndex: e.characterIndex ?? 0,
  faceName: e.faceName ?? "",
  faceIndex: e.faceIndex ?? 0,
  traits: [],
  note: e.note ?? "",
  classId: e.classId ?? 0,
  nickname: e.nickname ?? "",
  profile: e.profile ?? "",
  equips: [],
  initialLevel: e.initialLevel ?? 0,
  maxLevel: e.maxLevel ?? 0
}), mr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  atypeId: e.atypeId ?? 0,
  params: e.params ?? [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  etypeId: e.etypeId ?? 0,
  price: e.price ?? 0
}), zn = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId",
    "atypeId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, pr = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), $n = {
  type: "object",
  required: [
    "name",
    "id",
    "note",
    "expParams",
    "params",
    "learnings",
    "traits"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },
    expParams: {
      type: "array",
      items: { type: "integer" }
    },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    learnings: {
      type: "array",
      items: {
        type: "object",
        properties: {
          level: { type: "integer" },
          skillId: { type: "integer" },
          note: { type: "string" }
        },
        required: ["level", "skillId"],
        additionalProperties: !1
      }
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"],
        additionalProperties: !1
      }
    }
  },
  additionalProperties: !1
}, dr = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  iconIndex: e.iconIndex ?? 0,
  message1: e.message1 ?? "",
  message2: e.message2 ?? "",
  message3: e.message3 ?? "",
  message4: e.message4 ?? "",
  traits: [],
  note: e.note ?? "",
  messageType: e.messageType ?? 0,
  releaseByDamage: e.releaseByDamage ?? !1,
  restriction: e.restriction ?? 0,
  priority: e.priority ?? 0,
  motion: e.motion ?? 0,
  overlay: e.overlay ?? 0,
  removeAtBattleEnd: e.removeAtBattleEnd ?? !1,
  removeByRestriction: e.removeByRestriction ?? !1,
  autoRemovalTiming: e.autoRemovalTiming ?? 0,
  minTurns: e.minTurns ?? 0,
  maxTurns: e.maxTurns ?? 0,
  removeByDamage: e.removeByDamage ?? !1,
  chanceByDamage: e.chanceByDamage ?? 0,
  removeByWalking: e.removeByWalking ?? !1,
  stepsToRemove: e.stepsToRemove ?? 0
}), Qn = {
  type: "object",
  required: [
    "name",
    "id",
    "iconIndex",
    "message1",
    "message2",
    "message3",
    "message4",
    "restriction",
    "priority",
    "motion",
    "overlay",
    "removeAtBattleEnd",
    "removeByDamage",
    "removeByWalking",
    "removeByRestriction",
    "autoRemovalTiming",
    "minTurns",
    "maxTurns",
    "chanceByDamage",
    "stepsToRemove",
    "note"
  ],
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
    removeByDamage: { type: "boolean" },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: { type: "integer" },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, lr = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, yr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  animationId: e.animationId ?? 0,
  params: e.params ?? [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  etypeId: e.etypeId ?? 0,
  price: e.price ?? 0,
  damage: B(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Zn = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId",
    "animationId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: { type: "integer", minimum: 0 },
    animationId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer", minimum: 0 },
        elementId: { type: "integer", minimum: 0 },
        formula: { type: "string" },
        variance: { type: "integer", minimum: 0, maximum: 100 },
        critical: { type: "boolean", default: !1 }
      },
      required: ["type", "elementId", "formula", "variance", "critical"]
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, Jn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Er = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Ar = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => Jn())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [
      0,
      // maxhp
      0,
      // maxmp
      0,
      // atk
      0,
      // def
      0,
      // mat
      0,
      // mdf
      0,
      // agi
      0
      // luk
    ],
    actions: []
  };
}, eo = {
  type: "object",
  required: [
    "name",
    "id",
    "battlerName",
    "battlerHue",
    "exp",
    "gold",
    "note",
    "params",
    "dropItems",
    "traits",
    "actions"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    actions: {
      type: "array",
      items: {
        type: "object",
        required: [
          "conditionParam1",
          "conditionParam2",
          "conditionType",
          "skillId",
          "rating"
        ],
        properties: {
          conditionParam1: { type: "integer" },
          conditionParam2: { type: "integer" },
          conditionType: { type: "integer" },
          skillId: { type: "integer" },
          rating: { type: "integer" }
        }
      }
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    },
    dropItems: {
      type: "array",
      items: {
        type: "object",
        properties: {
          kind: { type: "integer" },
          dataId: { type: "integer" },
          denominator: { type: "integer", minimum: 0 },
          rate: { type: "number" }
        },
        required: ["kind", "dataId", "denominator"]
      }
    }
  }
}, ur = (e = {}) => ({
  animationId: e.animationId ?? 0,
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  itypeId: e.itypeId ?? 0,
  note: e.note ?? "",
  consumable: e.consumable ?? !1,
  scope: e.scope ?? 0,
  occasion: e.occasion ?? 0,
  speed: e.speed ?? 0,
  successRate: e.successRate ?? 0,
  repeats: e.repeats ?? 0,
  tpGain: e.tpGain ?? 0,
  hitType: e.hitType ?? 0,
  damage: B(e.damage ?? {}),
  effects: [],
  price: 0
}), Tr = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: B(e.damage ?? {}),
  description: e.description ?? "",
  effects: [],
  hitType: e.hitType ?? 0,
  iconIndex: e.iconIndex ?? 0,
  id: e.id ?? 0,
  message1: e.message1 ?? "",
  message2: e.message2 ?? "",
  messageType: e.messageType ?? 0,
  name: e.name ?? "",
  note: e.note ?? "",
  mpCost: e.mpCost ?? 0,
  occasion: e.occasion ?? 0,
  repeats: e.repeats ?? 0,
  scope: e.scope ?? 0,
  speed: e.speed ?? 0,
  successRate: e.successRate ?? 0,
  tpCost: e.tpCost ?? 0,
  tpGain: e.tpGain ?? 0
}), to = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "message1",
    "message2",
    "messageType",
    "mpCost",
    "requiredWtypeId1",
    "requiredWtypeId2",
    "stypeId",
    "tpCost",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "note",
    "effects"
  ],
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
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value1: { type: "integer" },
          value2: { type: "integer" }
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: !1
      }
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer" },
        elementId: { type: "integer" },
        formula: { type: "string" },
        variance: { type: "integer" },
        critical: { type: "boolean" }
      },
      required: ["type", "elementId", "formula", "variance", "critical"],
      additionalProperties: !1
    }
  },
  additionalProperties: !1
}, no = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "note",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "consumable",
    "price",
    "effects"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    note: { type: "string" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    consumable: { type: "boolean" },
    price: { type: "integer", minimum: 0 },
    itypeId: { type: "integer" },
    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value1: { type: "integer" },
          value2: { type: "integer" }
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: !1
      }
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer" },
        elementId: { type: "integer" },
        formula: { type: "string" },
        variance: { type: "integer" },
        critical: { type: "boolean" }
      },
      required: ["type", "elementId", "formula", "variance", "critical"],
      additionalProperties: !1
    }
  }
}, _r = 0, gr = 1, Ir = 2, oo = "{name} + {value1}", Q = "{name} {value1}%", F = "{value1}% + {value2}", Z = "{name} {value1}ターン", N = "{name}", d = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: Z
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: Z
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: F
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: oo
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: N
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: F
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: F
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: N
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: N
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: Q
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: N
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: Q
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: N
    }
  }
}, ao = 11, io = 12, ro = 13, so = 21, co = 22, mo = 31, po = 32, lo = 33, yo = 34, Rr = 41, Eo = 42, Ao = 43, uo = 44, Sr = 0, He = /^[a-zA-Z0-9]+$/, Cr = (e) => He.test(e) ? e : void 0, x = (e) => typeof e == "string" ? He.test(e) : !1, Nr = (e) => [e.author, e.module, e.kind].join("."), fr = (e) => x(e.author) && x(e.module) && x(e.kind), f = "params", Be = "xparams", Ue = "sparams", Ge = "collaps", we = "partyAbiility", Ve = "sflag", Mr = "actor", Or = "variables", Lr = "map", Pr = "enemy", P = "state", qe = "skill", hr = "items", Dr = "weapon", vr = "armor", br = "class", To = "common_event", kr = "troop", Fr = "colors", _o = "weaponTypes", go = "armorTypes", xr = "equipTypes", Hr = "switches", Br = "skillTypes", Io = "elements", J = "{value1}", ee = "{value2}", te = "{name}";
class Ro {
  constructor(t, n, o, c, m) {
    this.codeId = t, this.label = n, this.format = o, this.description = c, this.dataSource = m;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(J, t.value1.toString()).replaceAll(ee, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      te,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(J);
  }
  requiresValue2() {
    return this.format.includes(ee);
  }
  requiresName() {
    return this.format.includes(te);
  }
  invalidPlaceHolder() {
    const t = ["value1", "value2", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((o) => o[1]).filter((o) => !t.includes(o));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
}
const Ur = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Gr = (e) => [
  So(e.options.recoverHp),
  Co(e.options.recoverMp),
  No(e.options.gainTp),
  fo(e.options.addState),
  Mo(e.options.removeState),
  Oo(e.options.addBuff),
  ho(e.options.addDebuff),
  Lo(e.options.removeBuff),
  Do(e.options.removeDebuff),
  Po(e.options.learnSkill),
  vo(e.options.commonEvent)
], h = () => ({
  author: g,
  module: H,
  kind: f
}), D = (e) => ({
  author: g,
  module: ae,
  kind: e
}), l = (e, t, n, o) => {
  const c = n.domainName ?? t.domainName, m = n.format ?? t.format, M = n.desc ?? t.desc;
  return new Ro(e, c, m, M, o);
}, So = (e) => l(
  ao,
  d.options.recoverHp,
  e
), Co = (e) => l(
  io,
  d.options.recoverMp,
  e
), No = (e) => l(ro, d.options.gainTp, e), wr = (e) => l(Eo, d.options.grow, e), fo = (e) => l(
  so,
  d.options.addState,
  e,
  D(P)
), Mo = (e) => l(
  co,
  d.options.removeState,
  e,
  D(P)
), Oo = (e) => l(
  mo,
  d.options.addBuff,
  e,
  h()
), Lo = (e) => l(
  lo,
  d.options.removeBuff,
  e,
  h()
), Po = (e) => l(
  Ao,
  d.options.learnSkill,
  e,
  D(qe)
), ho = (e) => l(
  po,
  d.options.addBuff,
  e,
  h()
), Do = (e) => l(
  yo,
  d.options.removeDebuff,
  e,
  h()
), vo = (e) => l(
  uo,
  d.options.commonEvent,
  e,
  D(To)
), Vr = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, qr = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Yr = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, bo = {
  actor: {
    domainName: "アクター",
    options: {
      initialEquipments: "初期装備",
      faceImage: "顔画像",
      characterImage: "キャラクター画像",
      svBattlerImage: "SVバトラー画像",
      nickname: "ニックネーム",
      profile: "プロフィール",
      classId: "職業ID",
      initialLevel: "初期レベル",
      maxLevel: "最大レベル"
    }
  },
  class: {
    domainName: "職業",
    options: {
      params: "パラメータ",
      learnings: "習得スキル",
      expParams: "経験値パラメータ"
    }
  },
  armor: {
    domainName: "防具",
    options: {
      armorTypeId: "防具タイプID",
      slotTypeId: "スロットタイプID"
    }
  },
  enemy: {
    domainName: "敵キャラ",
    options: {
      dropItems: "ドロップアイテム",
      battlerHue: "バトラーヒュー",
      battlerName: "バトラー名",
      gold: "ゴールド"
    }
  },
  item: {
    domainName: "アイテム",
    options: {
      consumable: "消耗品"
    }
  },
  skill: {
    domainName: "スキル",
    options: {
      requiredWeaponTypeId1: "必要武器タイプ1",
      requiredWeaponTypeId2: "必要武器タイプ2",
      mpCost: "MP消費",
      tpCost: "TP消費"
    }
  },
  state: {
    domainName: "ステート",
    options: {
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
    }
  },
  weapon: {
    domainName: "武器",
    options: {
      weaponTypeId: "武器タイプID"
    }
  },
  usableItem: {
    domainName: "",
    options: {
      scope: "範囲",
      speed: "速度補正",
      successRate: "成功率"
    }
  }
}, ko = {
  domainName: "ダメージ",
  options: {}
}, B = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Wr = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, u = new O(), Fo = u.compile(no), xo = u.compile(to), Ho = u.compile(Kn), Bo = u.compile(zn), Uo = u.compile(Zn), Go = u.compile(eo), wo = u.compile(Qn), Vo = u.compile($n), jr = (e) => Fo(e), Xr = (e) => xo(e), Kr = (e) => Ho(e), zr = (e) => Bo(e), $r = (e) => Uo(e), Qr = (e) => Go(e), Zr = (e) => wo(e), Jr = (e) => Vo(e), es = 0, qo = 101, Ye = 401, Yo = 102, Wo = 402, jo = 103, ts = 104, Xo = 105, We = 405, je = 108, Xe = 408, ns = 109, os = 111, as = 411, is = 112, rs = 113, ss = 115, Ko = 117, cs = 118, ms = 119, zo = 121, ps = 122, ds = 123, ls = 124, ys = 125, Es = 126, As = 127, us = 128, Ts = 129, Ke = 132, ze = 133, _s = 134, gs = 135, Is = 136, Rs = 137, Ss = 138, $e = 139, Cs = 140, Ns = 201, fs = 202, Ms = 203, Os = 204, Ls = 205, Ps = 206, hs = 211, Ds = 212, vs = 213, bs = 214, ks = 216, Fs = 217, xs = 221, Hs = 222, Bs = 223, Us = 224, Gs = 225, ws = 230, Vs = 231, qs = 232, Ys = 233, Ws = 234, js = 235, Xs = 236, Qe = 241, Ks = 242, zs = 243, $s = 244, Ze = 245, Qs = 246, Je = 249, et = 250, Zs = 251, Js = 261, ec = 282, tc = 283, nc = 284, oc = 285, ac = 301, ic = 302, rc = 605, sc = 303, cc = 311, mc = 312, pc = 313, dc = 314, lc = 315, $o = 320, yc = 321, Ec = 322, Ac = 323, Qo = 324, Zo = 325, uc = 331, Tc = 332, _c = 333, gc = 334, Ic = 335, Rc = 336, Sc = 337, Cc = 339, Nc = 340, fc = 351, Mc = 342, Oc = 352, Lc = 353, Pc = 354, tt = 355, nt = 655, hc = 356, Dc = 357, vc = 0, bc = 1, kc = 2, Fc = 3, xc = 4, Hc = 5, Bc = 6, Uc = 7, Gc = 8, wc = 9, Vc = 10, qc = 11, Yc = 12, Wc = 13, jc = 14, Xc = 15, Kc = 16, zc = 17, $c = 18, Qc = 19, Zc = 20, Jc = 21, em = 22, tm = 23, nm = 24, om = 25, am = 26, im = 27, rm = 28, sm = 29, cm = 30, mm = 31, pm = 32, dm = 33, lm = 34, ym = 35, Em = 36, Am = 37, um = 38, Tm = 39, _m = 40, gm = 41, Im = 42, Rm = 43, Sm = 44, Cm = 45, Nm = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), Jo = (e = {}) => ({
  switch1Id: e.switch1Id ?? 0,
  switch1Valid: e.switch1Id !== void 0,
  switch2Id: e.switch2Id ?? 0,
  switch2Valid: e.switch2Id !== void 0,
  variableId: e.variableId ?? 0,
  variableValid: e.variableId !== void 0,
  variableValue: e.variableValue ?? 0,
  selfSwitchCh: e.selfSwitchCh ?? "A",
  selfSwitchValid: e.selfSwitchCh !== void 0,
  itemId: e.itemId ?? 0,
  itemValid: e.itemId !== void 0,
  actorId: e.actorId ?? 0,
  actorValid: e.actorId !== void 0
}), fm = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), ea = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), Mm = () => ({
  conditions: Jo(),
  list: [],
  directionFix: !1,
  image: ea(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), ta = {
  type: "object",
  required: [
    "name",
    "id",
    "expanded",
    "order",
    "parentId",
    "scrollX",
    "scrollY"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    expanded: { type: "boolean" },
    order: { type: "integer" },
    parentId: { type: "integer" },
    scrollX: { type: "integer" },
    scrollY: { type: "integer" }
  }
}, na = (e) => e.toString().padStart(3, "0"), Om = (e = { id: 0 }) => ({
  name: e.name ?? na(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Lm = (e = {}) => ({
  data: e.data ?? [],
  battleback1Name: e.battleback1Name ?? "",
  battleback2Name: e.battleback2Name ?? "",
  autoplayBgm: e.autoplayBgm ?? !1,
  autoplayBgs: e.autoplayBgs ?? !1,
  parallaxLoopX: e.parallaxLoopX ?? !1,
  parallaxLoopY: e.parallaxLoopY ?? !1,
  parallaxName: e.parallaxName ?? "",
  parallaxShow: e.parallaxShow ?? !1,
  parallaxSx: e.parallaxSx ?? 0,
  parallaxSy: e.parallaxSy ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  width: e.width ?? 0,
  height: e.height ?? 0,
  note: e.note ?? "",
  bgm: e.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: e.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e.disableDashing ?? !1,
  displayName: e.displayName ?? "",
  encounterList: e.encounterList ?? [],
  events: e.events ?? []
}), Pm = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), hm = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Dm = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), vm = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), oa = {
  type: "object",
  required: ["wait", "repeat", "skippable", "list"],
  properties: {
    wait: { type: "boolean" },
    repeat: { type: "boolean" },
    skippable: { type: "boolean" },
    list: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "parameters"],
        properties: {
          code: { type: "integer" },
          parameters: {
            type: "array",
            items: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                {
                  type: "object",
                  required: ["name", "pan", "pitch", "volume"],
                  properties: {
                    name: { type: "string" },
                    pan: { type: "integer" },
                    pitch: { type: "integer" },
                    volume: { type: "integer" }
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
}, aa = {
  type: "object",
  required: [
    "switch1Id",
    "switch1Valid",
    "switch2Id",
    "switch2Valid",
    "variableId",
    "variableValid",
    "selfSwitchCh",
    "selfSwitchValid",
    "variableValue",
    "itemId",
    "itemValid",
    "actorId",
    "actorValid"
  ],
  properties: {
    switch1Id: { type: "integer", minimum: 0 },
    switch1Valid: { type: "boolean" },
    switch2Id: { type: "integer", minimum: 0 },
    switch2Valid: { type: "boolean" },
    variableId: { type: "integer", minimum: 0 },
    variableValid: { type: "boolean" },
    selfSwitchCh: { type: "string" },
    selfSwitchValid: { type: "boolean" },
    variableValue: { type: "integer" },
    itemId: { type: "integer", minimum: 0 },
    itemValid: { type: "boolean" },
    actorId: { type: "integer" },
    actorValid: { type: "boolean" }
  }
}, ia = {
  type: "object",
  required: [
    "characterIndex",
    "characterName",
    "direction",
    "pattern",
    "tileId"
  ],
  properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" }
  }
}, ra = {
  type: "object",
  required: [
    "image",
    "moveRoute",
    "conditions",
    "directionFix",
    "moveFrequency"
  ],
  properties: {
    moveFrequency: { type: "integer" },
    directionFix: { type: "boolean" },
    conditions: aa,
    image: ia,
    moveRoute: oa
    // list: {
    //   type: "array",
    //   items: {
    //     type: "object",
    //     required: ["code", "indent", "parameters"],
    //     properties: {
    //       code: { type: "integer" },
    //       indent: { type: "integer" },
    //       parameters: {
    //         type: "array",
    //         items: {},
    //       },
    //     },
    //   },
    // },
  }
}, sa = {
  type: "object",
  required: [
    "battleback1Name",
    "battleback2Name",
    "note",
    "width",
    "height",
    "x",
    "y",
    "parallaxSy",
    "parallaxSx",
    "parallaxLoopY",
    "parallaxLoopX",
    "disableDashing",
    "parallaxName",
    "parallaxShow",
    "displayName",
    "data",
    "autoplayBgm",
    "bgm",
    "autoplayBgs",
    "bgs"
  ],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: { type: "boolean" },
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
    bgm: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" }
      }
    },
    autoplayBgs: { type: "boolean" },
    bgs: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" }
      }
    },
    encounterList: {
      type: "array",
      items: {
        type: "object",
        required: ["regionSet", "troopId", "weight"],
        properties: {
          regionSet: { type: "array", items: { type: "integer" } },
          troopId: { type: "integer" },
          weight: { type: "integer" }
        }
      }
    },
    events: {
      type: "array",
      items: {
        type: "object",
        required: [
          "id",
          "name",
          "x",
          "y",
          "pages"
        ],
        properties: {
          id: { type: "integer" },
          name: { type: "string" },
          x: { type: "integer" },
          y: { type: "integer" },
          note: { type: "string" },
          pages: {
            type: "array",
            items: ra
          }
        }
      }
    }
  }
  // satisfies Record<keyof Data_Map, unknown>,
}, ot = new O(), ca = ot.compile(ta), ma = ot.compile(sa), bm = (e) => ca(e), km = (e) => ma(e), at = (e, t) => `<${e}:${t}>`, v = () => /<([^<>:]+):([^>]*)>/g, Fm = (e, t) => it(e.note, (n, o) => t(n, o, e)), xm = (e) => it(e, (t, n) => [t, n]), it = (e, t) => {
  const n = v();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Hm = (e, t) => e.replaceAll(
  v(),
  (n, o, c) => {
    const m = t(o, c);
    return at(o, m);
  }
), Bm = (e, t) => {
  const n = v(), o = Array.from(e.matchAll(n)).find(
    (c) => c[1] === t
  );
  return o ? o[2] : void 0;
}, Um = (e, t, n) => {
  const o = v();
  return e.replace(o, (c, m) => m === t ? at(m, n) : c);
}, U = (e, t) => `\\${e}[${t}]`, Gm = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: U(e, o)
})), wm = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, pa = "N", da = "V", Vm = (e) => e.map((t) => ({
  text: t.name,
  controlChar: U(pa, t.id)
})), qm = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: U(da, n)
})).filter((t) => t.text !== ""), la = {
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
}, Ym = {
  rpg: {
    damage: ko,
    data: bo,
    traits: r,
    itemEffect: d
  },
  global: la
}, ya = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [108, 355, 401, 405, 408, 655]
    },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }]
    }
  },
  additionalProperties: !1
}, Ea = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: {
      type: "integer",
      enum: [
        0,
        109,
        112,
        113,
        115,
        204,
        206,
        213,
        214,
        216,
        217,
        221,
        222,
        243,
        244,
        251,
        314,
        315,
        340,
        351,
        352,
        353,
        354,
        411
      ]
    }
  },
  additionalProperties: !1
}, Aa = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [320, 324, 325]
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer", minimum: 0 },
        // actorId
        { type: "string" }
        // name
      ]
    }
  },
  additionalProperties: !1
}, ua = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [132, 133, 139, 241, 245, 249, 250]
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [
        {
          type: "object",
          properties: {
            name: { type: "string" },
            volume: { type: "integer" },
            pitch: { type: "integer" },
            pan: { type: "integer" }
          },
          required: ["name", "volume", "pitch", "pan"],
          additionalProperties: !1
        }
      ]
    }
  },
  additionalProperties: !1
}, Ta = {
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "number", minimum: 0, default: 0 }]
    }
  },
  required: ["code", "indent", "parameters"]
}, _a = {
  type: "object",
  properties: {
    code: { type: "number", const: 103 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" },
        // variableId
        { type: "number" }
        // digits
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, ga = {
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" },
        // speed
        { type: "boolean" }
        // skip
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, Ia = {
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer" },
        // index
        { type: "string" }
        // name
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, Ra = {
  type: "object",
  properties: {
    code: { type: "number", const: 102 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: [
        { type: "array", items: { type: "string" } },
        // choices
        { type: "integer" },
        // cancelType
        { type: "integer" },
        // defaultType
        { type: "integer" },
        // positionType
        { type: "integer" }
        // background
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, Sa = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", const: 101 },
    // Assuming 101 is the code for ShowMessage
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      items: [
        { type: "string" },
        // facename
        { type: "integer", minimum: 0, maximum: 7 },
        // faceIndex
        { type: "integer", minimum: 0, maximum: 2 },
        // background
        { type: "integer", minimum: 0, maximum: 2 },
        // positionType
        { type: "string" }
        // speakerName
      ],
      minItems: 5,
      maxItems: 5
    }
  }
}, y = new O(), Ca = y.compile(Aa), Wm = (e) => Ca(e), Na = y.compile(ga), jm = (e) => Na(e), fa = y.compile(ua), I = (e) => fa(e), Ma = y.compile(Ea), Xm = (e) => Ma(e), Oa = y.compile(ya), C = (e) => Oa(e), La = y.compile(Ta), Km = (e) => La(e), Pa = y.compile(Ra), zm = (e) => Pa(e), ha = y.compile(Ia), $m = (e) => ha(e), Da = y.compile(_a), Qm = (e) => Da(e), va = y.compile(Sa), Zm = (e) => va(e), Jm = (e) => C(e) && e.code === Ye, ep = (e) => C(e) && e.code === We, tp = (e) => C(e) && e.code === je, np = (e) => C(e) && e.code === Xe, op = (e) => C(e) && e.code === tt, ap = (e) => C(e) && e.code === nt, ip = (e, t = 0) => ({
  code: $o,
  parameters: [e.actorId, e.name],
  indent: t
}), rp = (e, t = 0) => ({
  code: Qo,
  parameters: [e.actorId, e.nickname],
  indent: t
}), sp = (e, t = 0) => ({
  code: Zo,
  parameters: [e.actorId, e.profile],
  indent: t
}), cp = (e, t) => T(e, i({ name: t })), T = (e, t, n = 0) => ({
  code: e,
  parameters: [i(t)],
  indent: n
}), mp = (e, t = 0) => T(Qe, e, t), pp = (e, t = 0) => T(Ze, e, t), dp = (e, t = 0) => T(Je, e, t), lp = (e, t = 0) => T(et, e, t), yp = (e, t = 0) => T(Ke, e, t), Ep = (e, t = 0) => T(ze, e, t), Ap = (e, t = 0) => T($e, e, t), rt = (e) => [e], up = (e) => ({
  comment: e[0]
}), ba = (e, t = 0) => ({
  code: je,
  indent: t,
  parameters: rt(e)
}), ka = (e, t = 0) => ({
  code: Xe,
  indent: t,
  parameters: rt(e)
}), Tp = (e, t = 0) => e.map(
  (n, o) => o === 0 ? ba(n, t) : ka(n, t)
), Fa = (e) => [e.variableId ?? 0, e.digits ?? 0], _p = (e) => ({
  variableId: e[0],
  digits: e[1]
}), gp = (e, t = 0) => ({
  code: jo,
  indent: t,
  parameters: Fa(e ?? {})
}), xa = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], Ip = (e) => ({
  speed: e[0],
  skip: e[1]
}), Rp = (e = {}, t = 0) => ({
  code: Xo,
  indent: t,
  parameters: xa(e)
}), Ha = (e = "") => [e], Sp = (e) => ({
  content: e[0]
}), Cp = (e = "", t = 0) => ({
  code: We,
  indent: t ?? 0,
  parameters: Ha(e)
}), Np = (e, t = 0) => ({
  code: Wo,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), fp = (e) => ({
  index: e[0],
  name: e[1]
}), Mp = (e) => [e.index ?? 0, e.name ?? ""], Op = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Lp = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Pp = (e, t = 0) => ({
  code: Yo,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), hp = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [
    [...e.parameters[0]],
    e.parameters[1],
    e.parameters[2],
    e.parameters[3],
    e.parameters[4]
  ]
}), Dp = (e, t = 0) => ({
  code: qo,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), vp = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), bp = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], kp = (e, t = 0) => ({
  code: Ye,
  indent: t,
  parameters: [e]
}), Ba = (e, t = 0) => ({
  code: tt,
  indent: t,
  parameters: [e]
}), Ua = (e, t = 0) => ({
  code: nt,
  indent: t,
  parameters: [e]
}), Fp = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Ba(n, t) : Ua(n, t)
), Ga = 0, wa = 1, Va = 2, G = 3, qa = 4, xp = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Hp = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.level;
    case 1:
      return e.currentExp();
    case 2:
      return e.hp;
    case 3:
      return e.mp;
    case 12:
      return e.tp;
  }
  return t[6] >= 4 && t[6] <= 11 ? e.param(t[6] - 4) : 0;
}, Ya = {
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
}, Bp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Ga,
  t.value
], Up = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  wa,
  t.variableId
], Gp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Va,
  t.min,
  t.max
], wp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  qa,
  t.code
], Vp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  G,
  t.type,
  t.itemId
], qp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  G,
  3,
  t.index,
  t.param
], Yp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  G,
  4,
  t.index,
  Ya[t.param]
], Wp = (e) => ({
  min: e[0],
  max: e[1],
  value: e[2]
}), Wa = (e) => [e.min, e.max, e.value], jp = (e, t = 0) => ({
  code: zo,
  indent: t,
  parameters: Wa(e)
}), Xp = (e, t = 0) => ({
  code: Ko,
  indent: t,
  parameters: ja(e ?? {})
}), Kp = (e) => ({
  eventId: e[0]
}), ja = (e) => [e.eventId ?? 0], zp = (e) => I(e) && e.code === Qe, $p = (e) => I(e) && e.code === Ze, Qp = (e) => I(e) && e.code === Je, Zp = (e) => I(e) && e.code === et, Jp = (e) => I(e) && e.code === Ke, ed = (e) => I(e) && e.code === ze, td = (e) => I(e) && e.code === $e, Xa = (e) => [...e], nd = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Xa(e.parameters)
}), Ka = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", od = (e) => e.parameters.every(Ka);
export {
  Nc as ABORT_BATTLE,
  g as AUTHOR_RMMZ,
  ac as BATTLE_PROCESSING,
  Ec as CHANGE_ACTOR_IMAGES,
  us as CHANGE_ARMORS,
  tc as CHANGE_BATTLE_BACKGROUND,
  Ke as CHANGE_BATTLE_BGM,
  yc as CHANGE_CLASS,
  $e as CHANGE_DEFEAT_ME,
  Is as CHANGE_ENCOUNTER,
  uc as CHANGE_ENEMY_HP,
  Tc as CHANGE_ENEMY_MP,
  _c as CHANGE_ENEMY_STATE,
  Mc as CHANGE_ENEMY_TP,
  lc as CHANGE_EXP,
  Rs as CHANGE_FORMATION_ACCESS,
  ys as CHANGE_GOLD,
  cc as CHANGE_HP,
  Es as CHANGE_ITEMS,
  gs as CHANGE_MENU_ACCESS,
  mc as CHANGE_MP,
  $o as CHANGE_NAME,
  Qo as CHANGE_NICKNAME,
  nc as CHANGE_PARALLAX,
  Ts as CHANGE_PARTY_MEMBER,
  ks as CHANGE_PLAYER_FOLLOWERS,
  Zo as CHANGE_PROFILE,
  _s as CHANGE_SAVE_ACCESS,
  ec as CHANGE_TILESET,
  pc as CHANGE_TP,
  hs as CHANGE_TRANSPARENCY,
  Cs as CHANGE_VEHICLE_BGM,
  Ac as CHANGE_VEHICLE_IMAGE,
  ze as CHANGE_VICTORY_ME,
  As as CHANGE_WEAPONS,
  Ss as CHANGE_WINDOW_COLOR,
  nn as COLLAPS_BOSS,
  on as COLLAPS_INSTANT,
  an as COLLAPS_NONE,
  tn as COLLAPS_NORMAL,
  Xe as COMMENT_BODY,
  je as COMMENT_HEAD,
  Ko as COMMON_EVENT,
  os as CONDITIONAL_BRANCH,
  as as CONDITIONAL_BRANCH_ELSE,
  ds as CONTROL_SELF_SWITCH,
  zo as CONTROL_SWITCHES,
  ls as CONTROL_TIMER,
  ps as CONTROL_VARIABLES,
  ko as DEFAULT_DAMAGE_LABELS,
  la as DEFAULT_GLOBAL_LABELS,
  Vr as DEFAULT_ITEM_LABELS,
  qr as DEFAULT_SKILL_LABELS,
  ni as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  oi as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Yr as DEFAULT_USABLE_ITEM_LABELS,
  mo as EFFECT_ADD_BUFF,
  po as EFFECT_ADD_DEBUFF,
  so as EFFECT_ADD_STATE,
  uo as EFFECT_COMMON_EVENT,
  ro as EFFECT_GAIN_TP,
  Eo as EFFECT_GROW,
  Ao as EFFECT_LEARN_SKILL,
  ao as EFFECT_RECOVER_HP,
  io as EFFECT_RECOVER_MP,
  lo as EFFECT_REMOVE_BUFF,
  yo as EFFECT_REMOVE_DEBUFF,
  co as EFFECT_REMOVE_STATE,
  Rr as EFFECT_SPECIAL,
  Ic as ENEMY_APPEAR,
  gc as ENEMY_RECOVER_ALL,
  Rc as ENEMY_TRANSFORM,
  bs as ERASE_EVENT,
  js as ERASE_PICTURE,
  ss as EXIT_EVENT_PROCESSING,
  me as EXTRA_PARAM_CEV,
  le as EXTRA_PARAM_CNT,
  ce as EXTRA_PARAM_CRI,
  se as EXTRA_PARAM_EVA,
  re as EXTRA_PARAM_HIT,
  ye as EXTRA_PARAM_HRG,
  pe as EXTRA_PARAM_MEV,
  de as EXTRA_PARAM_MRF,
  Ee as EXTRA_PARAM_MRG,
  Ae as EXTRA_PARAM_TRG,
  Hs as FADEIN_SCREEN,
  Ks as FADEOUT_BGM,
  Qs as FADEOUT_BGS,
  xs as FADEOUT_SCREEN,
  Ci as FILENAME_ACTORS,
  vi as FILENAME_ANIMATIONS,
  Li as FILENAME_ARMORS,
  Ni as FILENAME_CLASSES,
  ki as FILENAME_COMMON_EVENTS,
  Pi as FILENAME_ENEMIES,
  Mi as FILENAME_ITEMS,
  Fi as FILENAME_MAP_INFOS,
  fi as FILENAME_SKILLS,
  Di as FILENAME_STATES,
  Si as FILENAME_SYSTEM,
  bi as FILENAME_TILESET,
  hi as FILENAME_TROOPS,
  Oi as FILENAME_WEAPONS,
  ln as FLAG_ID_AUTO_BATTLE,
  yn as FLAG_ID_GUARD,
  An as FLAG_ID_PRESERVE_TP,
  En as FLAG_ID_SUBSTITUTE,
  Us as FLASH_SCREEN,
  Bi as FOLDER_AUDIO,
  ii as FOLDER_AUDIO_BGM,
  ci as FOLDER_AUDIO_BGS,
  si as FOLDER_AUDIO_ME,
  ri as FOLDER_AUDIO_SE,
  xi as FOLDER_DATA,
  Hi as FOLDER_IMG,
  mi as FOLDER_IMG_BATTLEBACK1,
  pi as FOLDER_IMG_BATTLEBACK2,
  di as FOLDER_IMG_CHACTERS,
  li as FOLDER_IMG_ENEMIES,
  yi as FOLDER_IMG_FACES,
  Ei as FOLDER_IMG_PARALLACES,
  Ai as FOLDER_IMG_PICTURES,
  ui as FOLDER_IMG_SV_ACTORS,
  Ti as FOLDER_IMG_SV_ENEMIES,
  _i as FOLDER_IMG_SYSTEM,
  gi as FOLDER_IMG_TILESETS,
  Ii as FOLDER_IMG_TITLES1,
  Ri as FOLDER_IMG_TITLES2,
  Ui as FOLDER_JS,
  Cc as FORCE_ACTION,
  Lc as GAME_OVER,
  Fs as GATHER_FOLLOWERS,
  oc as GET_LOCATION_INFO,
  Ps as GET_ONOFF_VEHICLE,
  _r as HITTYPE_CERTAIN,
  Ir as HITTYPE_MAGICAL,
  gr as HITTYPE_PHYSICAL,
  jo as INPUT_NUMBER,
  cs as LABEL,
  lr as LABELS_DATA_WEAPON,
  ms as LABEL_JUMP,
  Ym as LABEL_REGISTRY_JP,
  bo as LABEL_SET_DATA,
  d as LABEL_SET_ITEM_EFFECT,
  r as LABEL_SET_TRAIT,
  is as LOOP,
  rs as LOOP_BREAK,
  ae as MODULE_DATA,
  ie as MODULE_SYSTEM,
  H as MODULE_TRAIT,
  qs as MOVE_PICTURE,
  sc as NAME_INPUT_PROCESSING,
  es as NO_OPERATION,
  fc as OPEN_MENU_SCREEN,
  Oc as OPEN_SAVE_SCREEN,
  Ga as OPERAND_CONSTANT,
  G as OPERAND_GAMEDATA,
  Va as OPERAND_RANDOM,
  qa as OPERAND_SCRIPT,
  wa as OPERAND_VARIABLE,
  cn as PARTY_ABILITY_CANCEL_SURPRISE,
  dn as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  rn as PARTY_ABILITY_ENCOUNTER_HALF,
  sn as PARTY_ABILITY_ENCOUNTER_NONE,
  pn as PARTY_ABILITY_GOLD_DOUBLE,
  mn as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Qe as PLAY_BGM,
  Ze as PLAY_BGS,
  Je as PLAY_ME,
  Js as PLAY_MOVIE,
  et as PLAY_SE,
  hc as PLUGIN_COMMAND_MV,
  Dc as PLUGIN_COMMAND_MZ,
  dc as RECOVER_ALL,
  Se as REGULAR_PARAM_AGI,
  _e as REGULAR_PARAM_ATK,
  ge as REGULAR_PARAM_DEF,
  Ce as REGULAR_PARAM_LUK,
  Ie as REGULAR_PARAM_MATK,
  ue as REGULAR_PARAM_MAX_HP,
  Te as REGULAR_PARAM_MAX_MP,
  Re as REGULAR_PARAM_MDEF,
  $s as RESUME_BGM,
  Pc as RETURN_TO_TITLE_SCREEN,
  Ys as ROTATE_PICTURE,
  Rm as ROUTE_CHANGE_BLEND_MODE,
  cm as ROUTE_CHANGE_FREQ,
  gm as ROUTE_CHANGE_IMAGE,
  Im as ROUTE_CHANGE_OPACITY,
  sm as ROUTE_CHANGE_SPEED,
  Em as ROUTE_DIR_FIX_OFF,
  ym as ROUTE_DIR_FIX_ON,
  vc as ROUTE_END,
  jc as ROUTE_JUMP,
  qc as ROUTE_MOVE_AWAY,
  Wc as ROUTE_MOVE_BACKWARD,
  bc as ROUTE_MOVE_DOWN,
  Yc as ROUTE_MOVE_FORWARD,
  kc as ROUTE_MOVE_LEFT,
  Hc as ROUTE_MOVE_LOWER_L,
  Bc as ROUTE_MOVE_LOWER_R,
  wc as ROUTE_MOVE_RANDOM,
  Fc as ROUTE_MOVE_RIGHT,
  Vc as ROUTE_MOVE_TOWARD,
  xc as ROUTE_MOVE_UP,
  Uc as ROUTE_MOVE_UPPER_L,
  Gc as ROUTE_MOVE_UPPER_R,
  Sm as ROUTE_PLAY_SE,
  Cm as ROUTE_SCRIPT,
  lm as ROUTE_STEP_ANIME_OFF,
  dm as ROUTE_STEP_ANIME_ON,
  rm as ROUTE_SWITCH_OFF,
  im as ROUTE_SWITCH_ON,
  um as ROUTE_THROUGH_OFF,
  Am as ROUTE_THROUGH_ON,
  _m as ROUTE_TRANSPARENT_OFF,
  Tm as ROUTE_TRANSPARENT_ON,
  em as ROUTE_TURN_180D,
  Jc as ROUTE_TURN_90D_L,
  Zc as ROUTE_TURN_90D_R,
  tm as ROUTE_TURN_90D_R_L,
  am as ROUTE_TURN_AWAY,
  Kc as ROUTE_TURN_DOWN,
  zc as ROUTE_TURN_LEFT,
  nm as ROUTE_TURN_RANDOM,
  $c as ROUTE_TURN_RIGHT,
  om as ROUTE_TURN_TOWARD,
  Qc as ROUTE_TURN_UP,
  Xc as ROUTE_WAIT,
  pm as ROUTE_WALK_ANIME_OFF,
  mm as ROUTE_WALK_ANIME_ON,
  zs as SAVE_BGM,
  Wr as SCHEMA_DAMAGE,
  Kn as SCHEMA_DATA_ACTOR,
  zn as SCHEMA_DATA_ARMMOR,
  $n as SCHEMA_DATA_CLASS,
  eo as SCHEMA_DATA_ENEMY,
  no as SCHEMA_DATA_ITEM,
  ta as SCHEMA_DATA_MAP_INFO,
  to as SCHEMA_DATA_SKILL,
  Qn as SCHEMA_DATA_STATE,
  Zn as SCHEMA_DATA_WEAPON,
  $a as SCHEMA_SYSTEM_ADVANCED,
  rr as SCHEMA_TRAIT,
  tt as SCRIPT_EVAL,
  nt as SCRIPT_EVAL_BODY,
  Os as SCROLL_MAP,
  ts as SELECT_ITEM,
  Ms as SET_EVENT_LOCATION,
  Ls as SET_MOVEMENT_ROUTE,
  fs as SET_VEHICLE_LOCATION,
  Xs as SET_WEATHER_EFFECT,
  Gs as SHAKE_SCREEN,
  ic as SHOP_PROCESSING,
  rc as SHOP_PROCESSING_BODY,
  Ds as SHOW_ANIMATION,
  vs as SHOW_BALLOON_ICON,
  Sc as SHOW_BATTLE_ANIMATION,
  Yo as SHOW_CHOICES,
  Wo as SHOW_CHOICES_ITEM,
  qo as SHOW_MESSAGE,
  Ye as SHOW_MESSAGE_BODY,
  Vs as SHOW_PICTURE,
  Xo as SHOW_SCROLLING_TEXT,
  We as SHOW_SCROLLING_TEXT_BODY,
  ns as SKIP,
  Sr as SPECIAL_EFFECT_ESCAPE,
  be as SPECIAL_PARAM_EXR,
  ve as SPECIAL_PARAM_FDR,
  fe as SPECIAL_PARAM_GRD,
  Le as SPECIAL_PARAM_MCR,
  De as SPECIAL_PARAM_MDR,
  he as SPECIAL_PARAM_PDR,
  Oe as SPECIAL_PARAM_PHA,
  Me as SPECIAL_PARAM_REC,
  Pe as SPECIAL_PARAM_TCR,
  Ne as SPECIAL_PARAM_TGR,
  go as SRC_ARMOR_TYPES,
  Fr as SRC_COLOR,
  Mr as SRC_DATA_ACTOR,
  vr as SRC_DATA_ARMOR,
  br as SRC_DATA_CLASS,
  To as SRC_DATA_COMMON_EVNET,
  Pr as SRC_DATA_ENEMY,
  hr as SRC_DATA_ITEMS,
  Lr as SRC_DATA_MAP,
  qe as SRC_DATA_SKILL,
  P as SRC_DATA_STATE,
  kr as SRC_DATA_TROOP,
  Or as SRC_DATA_VARIABLE,
  Dr as SRC_DATA_WEAPON,
  Io as SRC_ELEMENTS,
  xr as SRC_EQUIP_TYPES,
  Be as SRC_PARAMS_EXTRA,
  f as SRC_PARAMS_REGULAR,
  Ue as SRC_PARAMS_SPECIAL,
  Br as SRC_SKILL_TYPES,
  Hr as SRC_SWITCHES,
  Ge as SRC_TRAIT_COLLAPS,
  we as SRC_TRAIT_PARTY_ABILITY,
  Ve as SRC_TRAIT_SPECIAL_FLAG,
  _o as SRC_WEAPON_TYPES,
  Zs as STOP_SE,
  Ws as TINT_PICTURE,
  Bs as TINT_SCREEN,
  Qt as TRAIT_ACTION_PLUS,
  Ht as TRAIT_ATTACK_ELEMENT,
  wt as TRAIT_ATTACK_SKILL,
  Ut as TRAIT_ATTACK_SPEED,
  Bt as TRAIT_ATTACK_STATE,
  Gt as TRAIT_ATTACK_TIMES,
  Jt as TRAIT_COLLAPSE_TYPE,
  Dt as TRAIT_DEBUFF_RATE,
  ht as TRAIT_ELEMENT_RATE,
  Xt as TRAIT_EQUIP_ARMOR_TYPE,
  Kt as TRAIT_EQUIP_LOCK,
  zt as TRAIT_EQUIP_SEAL,
  jt as TRAIT_EQUIP_WEAPON_TYPE,
  kt as TRAIT_PARAM,
  en as TRAIT_PARTY_ABILITY,
  Yt as TRAIT_SKILL_ADD,
  Wt as TRAIT_SKILL_SEAL,
  Vt as TRAIT_SKILL_TYPE_ADD,
  qt as TRAIT_SKILL_TYPE_SEAL,
  $t as TRAIT_SLOT_TYPE,
  xt as TRAIT_SPARAM,
  Zt as TRAIT_SPECIAL_FLAG,
  vt as TRAIT_STATE_RATE,
  bt as TRAIT_STATE_RESIST,
  Ft as TRAIT_XPARAM,
  Ns as TRANSFER_PLAYER,
  ir as TYPENAME_TRAIT,
  Sn as TraitDescriptor,
  ws as WAIT,
  Zi as buildCollapsSource,
  tr as buildExtraParamSource,
  Ji as buildPartyAbilitySource,
  er as buildRegularParamSource,
  or as buildSpecialFlagSource,
  nr as buildSpecialParamSource,
  hp as cloneChoices,
  nd as cloneEventCommand,
  Xa as cloneParameters,
  up as convertCommentArrayToObject,
  Vm as createActorControlChars,
  U as createControlCharFormat,
  Nm as createEventCommand,
  at as createNoteEntity,
  qm as createSystemVariableControlChars,
  Oo as defineEffectAddBuff,
  ho as defineEffectAddDebuff,
  fo as defineEffectAddState,
  vo as defineEffectCommonEvent,
  No as defineEffectGainTp,
  wr as defineEffectGrow,
  Po as defineEffectLearnSkill,
  So as defineEffectRecoverHp,
  Co as defineEffectRecoverMp,
  Lo as defineEffectRemoveBuff,
  Do as defineEffectRemoveDebuff,
  Mo as defineEffectRemoveState,
  $i as extraParamName,
  un as foldCollapsOptions,
  gn as foldExtraParam,
  Tn as foldPartyAbilityOptions,
  _n as foldRegularParam,
  Rn as foldSpecialFlag,
  In as foldSpecialParams,
  Ur as formatItemEffectText,
  Kp as fromArrayCommonEvent,
  Wp as fromArrayControlSwitches,
  _p as fromArrayInputNumber,
  Sp as fromArrayScrollingTextBody,
  Ip as fromArrayScrollingTextHeader,
  Op as fromArraySetupChoice,
  fp as fromArraySetupChoiceItem,
  vp as fromArrayShowMessageHeader,
  Gm as fromStringArray,
  Hp as getActorValue,
  Xi as getArmorTypes,
  wm as getControlChars,
  qi as getElementTypes,
  xp as getEnemyValue,
  Yi as getEquipTypes,
  Bm as getNoteValue,
  Ki as getParamNames,
  Wi as getSkillTypes,
  Vi as getVariableNames,
  ji as getWeaponTypes,
  od as isCloneableCommand,
  I as isCommandAudio,
  Wm as isCommandChangeActorText,
  Jp as isCommandChangeBattleBgm,
  td as isCommandChangeDefeatMe,
  ed as isCommandChangeVictoryMe,
  np as isCommandCommentBody,
  tp as isCommandCommentHeader,
  Km as isCommandCommonEvent,
  Qm as isCommandInputNumber,
  Xm as isCommandNonParam,
  zp as isCommandPlayBgm,
  $p as isCommandPlayBgs,
  Qp as isCommandPlayMe,
  Zp as isCommandPlaySe,
  ap as isCommandScriptBody,
  op as isCommandScriptHeader,
  jm as isCommandScrollTextHead,
  $m as isCommandShowChoiceItem,
  zm as isCommandShowChoices,
  Zm as isCommandShowMessage,
  Jm as isCommandShowMessageBody,
  ep as isCommandShowScrollingTextBody,
  C as isCommandTextBody,
  Kr as isDataActor,
  zr as isDataArmor,
  Jr as isDataClass,
  Qr as isDataEnemy,
  jr as isDataItem,
  km as isDataMap,
  bm as isDataMapInfo,
  Xr as isDataSkill,
  Zr as isDataState,
  $r as isDataWeapon,
  fr as isValid,
  Nr as joinSourceKey,
  sr as makeActorData,
  mr as makeArmorData,
  cp as makeAudioCommand,
  i as makeAudioFileParams,
  pr as makeClassData,
  T as makeCommandAudioAny,
  ip as makeCommandChangeActorName,
  rp as makeCommandChangeActorNickName,
  sp as makeCommandChangeActorProfile,
  yp as makeCommandChangeBattleBGM,
  Ap as makeCommandChangeDefeatME,
  Ep as makeCommandChangeVictoryME,
  ka as makeCommandCommentBody,
  ba as makeCommandCommentHeader,
  Xp as makeCommandCommonEvent,
  jp as makeCommandControlSwitches,
  gp as makeCommandInputNumber,
  mp as makeCommandPlayBGM,
  pp as makeCommandPlayBGS,
  dp as makeCommandPlayME,
  lp as makeCommandPlaySE,
  Fp as makeCommandScriptArray,
  Ua as makeCommandScriptBody,
  Ba as makeCommandScriptHeader,
  Cp as makeCommandScrollingTextBody,
  Rp as makeCommandScrollingTextHeader,
  Pp as makeCommandSetupChoice,
  Np as makeCommandShowChoiceItem,
  Dp as makeCommandShowMessage,
  kp as makeCommandShowMessageBody,
  rt as makeCommentArray,
  Tp as makeCommentCommandArray,
  Pm as makeCommonEventData,
  B as makeDamage,
  Jn as makeDropItem,
  ut as makeEditorSetting,
  Er as makeEnemyAction,
  Ar as makeEnemyData,
  Jo as makeEventPageCondition,
  At as makeItemCategories,
  ti as makeItemCategoriesFromArray,
  ur as makeItemData,
  Lm as makeMapData,
  fm as makeMapEvent,
  ea as makeMapEventIamge,
  Mm as makeMapEventPage,
  Om as makeMapInfoData,
  Et as makeMenuCommandsEnabled,
  ei as makeMenuCommandsEnabledFromArray,
  yt as makeParamNamesArray,
  v as makeRegex,
  Tr as makeSkillData,
  ct as makeSoundsArray,
  Qa as makeSoundsObject,
  dr as makeStateData,
  st as makeSystemAdvanced,
  ai as makeSystemData,
  mt as makeTermsBasic,
  Za as makeTermsBasicFromArray,
  pt as makeTermsCommand,
  Ja as makeTermsCommandFromArray,
  lt as makeTermsMessages,
  hm as makeTroopData,
  vm as makeTroopEventConditions,
  Dm as makeTroopMember,
  k as makeVehicleData,
  yr as makeWeaponData,
  Gi as mergeDomainLabel,
  wi as mergeNestedPrimitiveRecords,
  oe as mergeWithDefaults,
  cr as normalizeDataActor,
  xm as readNote,
  it as readNoteEx,
  Fm as readNoteObject,
  zi as regularParamName,
  Hm as replaceNote,
  Gr as resolveItemEffectLabels,
  ar as resolveTraitLabels,
  Cr as sanitizeKey,
  Um as setNoteValue,
  Qi as specialParamName,
  x as testUnknonwKey,
  ja as toArrayCommonEvent,
  Wa as toArrayControlSwitches,
  Fa as toArrayInputNumber,
  qp as toArrayOperandActorStatus,
  Bp as toArrayOperandConstant,
  Yp as toArrayOperandEnemyStatus,
  Vp as toArrayOperandItemData,
  Gp as toArrayOperandRandom,
  wp as toArrayOperandScript,
  Up as toArrayOperandVariable,
  Ha as toArrayScrollingTextBody,
  xa as toArrayScrollingTextHeader,
  Lp as toArraySetupChoice,
  Mp as toArraySetupChoiceItem,
  bp as toArrayShowMessageHeader,
  S as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
