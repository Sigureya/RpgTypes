import Se from "ajv";
import { c as We, a as Ye, m } from "./make.es.js";
import { aP as Xe, aT as _e, aU as Ge, aK as Ne, aL as Pe, aM as qe, as as Ue, aw as Ke, ay as Ze, az as $e, X as Je, Y as Qe, a2 as et, H as tt, M as at, V as E, d7 as D, d6 as M, d9 as A, d8 as j, T as V, U as L, C as rt, A as it, b7 as st, b8 as nt, aH as ot, aI as mt, d5 as pt, c_ as ct, d2 as dt, d0 as lt } from "./make.es3.js";
const Pa = ({ actorId: e = 1, faceIndex: t = 0, faceName: a = "", characterIndex: r = 0, characterName: s = "", battlerName: n = "" } = {}, c = 0) => ({
  code: 322,
  indent: c,
  parameters: [e, s, r, a, t, n]
}), ae = (e, t) => `\\${e}[${t}]`, qa = (e, t) => t.map((a, r) => ({ text: a, controlChar: ae(e, r) })), Ca = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({
  char: t[1],
  id: parseInt(t[2], 10)
})), Da = (e) => e.map((t) => ({ text: t.name, controlChar: ae("N", t.id) })), Ma = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: ae("V", a) })).filter((t) => t.text !== ""), Aa = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), ja = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), Ra = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Fa = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), ut = (e = {}) => ({
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
}), Ba = 0, Ea = 1, Va = 2, La = 3, Oa = 4, za = 5, Ha = 6, Wa = 7, Ya = 8, Xa = 9, _a = 10, Ga = 11, Ua = 12, Ka = 13, Za = 14, $a = 15, Ja = 16, Qa = 17, er = 18, tr = 19, ar = 20, rr = 21, ir = 22, sr = 23, nr = 24, or = 25, mr = 26, pr = 27, cr = 28, dr = 29, lr = 30, ur = 31, yr = 32, gr = 33, br = 34, Ir = 35, fr = 36, vr = 37, hr = 38, xr = 39, Tr = 40, wr = 41, kr = 42, Sr = 43, Nr = 44, Pr = 45, qr = ({ id: e = 1, name: t = "", pages: a = [], note: r = "", x: s = 0, y: n = 0 } = {}) => ({
  id: e,
  name: t,
  pages: a,
  note: r,
  x: s,
  y: n
}), yt = ({ characterIndex: e = 0, characterName: t = "", direction: a = 2, pattern: r = 0, tileId: s = 0 } = {}) => ({
  characterIndex: e,
  characterName: t,
  direction: a,
  pattern: r,
  tileId: s
}), Cr = ({ list: e = [], conditions: t = ut(), image: a = yt(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: t,
  list: e,
  directionFix: s,
  image: a,
  moveFrequency: r,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Dr = (e = {}) => ({
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
}), Mr = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, gt = {
  type: "object",
  required: ["image", "moveRoute", "conditions", "directionFix", "moveFrequency"],
  properties: { moveFrequency: { type: "integer" }, directionFix: { type: "boolean" }, conditions: {
    type: "object",
    required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"],
    properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: {
      type: "integer",
      minimum: 0
    }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: {
      type: "boolean"
    }, actorId: { type: "integer" }, actorValid: { type: "boolean" } }
  }, image: { type: "object", required: ["characterIndex", "characterName", "direction", "pattern", "tileId"], properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" }
  } }, moveRoute: {
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
  } }
}, bt = {
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
      pages: { type: "array", items: gt }
    } } }
  }
}, Ce = new Se({ strict: !0 }), It = Ce.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), ft = Ce.compile(bt), Ar = (e) => It(e), jr = (e) => ft(e), vt = { actor: { title: "アクター", options: {
  initialEquipments: "初期装備",
  faceImage: "顔画像",
  characterImage: "キャラクター画像",
  svBattlerImage: "SVバトラー画像",
  nickname: "ニックネーム",
  profile: "プロフィール",
  classId: "職業ID",
  initialLevel: "初期レベル",
  maxLevel: "最大レベル"
} }, class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } }, armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: {
  title: "敵キャラ",
  options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
}, item: { title: "アイテム", options: { consumable: "消耗品" } }, skill: { title: "スキル", options: {
  requiredWeaponTypeId1: "必要武器タイプ1",
  requiredWeaponTypeId2: "必要武器タイプ2",
  mpCost: "MP消費",
  tpCost: "TP消費"
} }, state: { title: "ステート", options: {
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
} }, weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, ht = {
  title: "ダメージ",
  options: {}
}, re = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Rr = (e = {}) => ({
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
}), Fr = (e) => ({
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
}), Br = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  atypeId: e.atypeId ?? 0,
  params: e.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e.etypeId ?? 0,
  price: e.price ?? 0
}), Er = (e = {}) => ({ name: e.name ?? "", id: e.id ?? 0, traits: [], note: e.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e.learnings ?? [], expParams: e.expParams ?? [] }), xt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Vr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Lr = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => xt())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Or = (e = {}) => ({
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
}), d = "{name}", P = "{name} * {value}%", ge = "{name} + {value}%", be = "{value}", Tt = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: P, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: ge, options: {
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
  specialParam: { title: "特殊能力値", format: P, options: {
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
    title: "特殊フラグ",
    format: d,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: d, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: d, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: P },
  debuffRate: { title: "弱体有効度", format: P },
  stateRate: { title: "ステート有効度", format: P },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: ge },
  attackSpeed: { title: "攻撃速度補正", format: be },
  attackTimes: {
    title: "攻撃追加回数",
    format: be
  },
  actionPlus: { title: "行動追加", format: P },
  attackSkill: { title: "攻撃スキル", format: d },
  equipWeaponType: { title: "装備武器タイプ", format: d },
  equipArmorType: { title: "装備防具タイプ", format: d },
  equipLock: {
    title: "装備固定",
    format: d
  },
  equipSeal: { title: "装備封印", format: d },
  slotType: { title: "スロットタイプ", format: d },
  skillAdd: { title: "スキル追加", format: d },
  skillSeal: { title: "スキルタイプ封印", format: d },
  skillTypeAdd: { title: "スキルタイプ追加", format: d },
  skillTypeSeal: { title: "スキルタイプ封印", format: d }
} }, wt = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, zr = (e, t, a) => {
  const r = We(wt);
  return Ye(t, a, r, e.pattern, (s) => s.dataId);
}, Hr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  animationId: e.animationId ?? 0,
  params: e.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e.etypeId ?? 0,
  price: e.price ?? 0,
  damage: re(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Wr = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: {
    type: "string"
  }, etypeId: { type: "integer", minimum: 0 }, wtypeId: { type: "integer", minimum: 0 }, animationId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, damage: {
    type: "object",
    properties: { type: {
      type: "integer",
      minimum: 0
    }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: !1 } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } } }
}, Yr = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Xr = 0, _r = 1, Gr = 2, Ie = "{name} {value1}%", U = "{value1}% + {value2}", fe = "{name} {value1}ターン", B = "{name}", kt = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: fe },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: fe },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: U },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: B },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: U
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: U },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: B
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: B },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Ie },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: B
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: Ie },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: B }
} }, Ur = 0, Kr = (e, t, a) => {
  const r = a.find((n) => n.id === t.dataId), s = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", s);
}, Zr = { title: "アイテム", options: { consumable: "消耗品" } }, $r = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Jr = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Qr = (e = {}) => ({
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
  damage: re(e.damage ?? {}),
  effects: [],
  price: 0
}), ei = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: re(e.damage ?? {}),
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
}), ti = "data", ai = "actor", ri = "map", ii = "enemy", si = "state", ni = "skill", oi = "item", mi = "weapon", pi = "armor", ci = "class", di = "common_event", li = "troop", St = {
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
}, ui = () => ({ rpg: { damage: ht, data: vt, traits: Tt, itemEffect: kt }, global: St }), yi = (e, t = 0) => ({ code: Xe, parameters: [e.actorId, e.name], indent: t }), gi = (e, t = 0) => ({
  code: _e,
  parameters: [e.actorId, e.nickname],
  indent: t
}), bi = (e, t = 0) => ({ code: Ge, parameters: [e.actorId, e.profile], indent: t }), q = { direct: 0, variable: 1 }, Ii = (e, t = 0) => ({
  code: Ne,
  indent: t,
  parameters: [...R[e.targetType](e, 0), e.allowDeath]
}), fi = (e, t = 0) => ({ code: Ne, indent: t, parameters: [...R[e.targetType](e, 1), e.allowDeath] }), vi = (e, t = 0) => ({
  code: qe,
  indent: t,
  parameters: R[e.targetType](e, 0)
}), hi = (e, t = 0) => ({ code: qe, indent: t, parameters: R[e.targetType](e, 1) }), xi = (e, t = 0) => ({ code: Pe, indent: t, parameters: R[e.targetType](e, 0) }), Ti = (e, t = 0) => ({
  code: Pe,
  indent: t,
  parameters: R[e.targetType](e, 1)
}), R = {
  direct: (e, t) => [q.direct, e.target, t, q[e.operand.type], e.operand.value],
  variable: (e, t) => [q.variable, e.target, t, q[e.operand.type], e.operand.value],
  each: (e, t) => [q.direct, -1, t, q[e.operand.type], e.operand.value]
}, wi = (e, t) => w(e, m({
  name: t
})), w = (e, t, a = 0) => ({
  code: e,
  parameters: [m(t)],
  indent: a
}), ki = (e, t = 0) => w(Ue, e, t), Si = (e, t = 0) => w(Ke, e, t), Ni = (e, t = 0) => w(Ze, e, t), Pi = (e, t = 0) => w($e, e, t), qi = (e, t = 0) => w(Je, e, t), Ci = (e, t = 0) => w(Qe, e, t), Di = (e, t = 0) => w(et, e, t), Nt = {
  plus: 0,
  minus: 1
}, Mi = ({ operation: e, time: t }) => ({ code: 124, indent: 0, parameters: [Nt[e ?? "plus"] ?? 0, t ?? 0] }), Ai = (e, t = 0) => ({ code: tt, indent: t, parameters: Pt(e ?? {}) }), ji = (e) => ({
  eventId: e[0]
}), Pt = (e) => [e.eventId ?? 0], Ri = (e) => ({ min: e[0], max: e[1], value: e[2] }), qt = (e) => [e.min, e.max, e.value], Fi = (e, t = 0) => ({ code: at, indent: t, parameters: qt(e) }), Bi = (e, t = 0) => ({
  code: 103,
  parameters: [e.variableId, e.maxDigits],
  indent: t
}), Ei = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], Vi = (e) => ({ variableId: e[0], maxDigits: e[1] }), Li = (e, t = 0) => ({
  code: E,
  parameters: [e.operation, e.armorId, e.value, e.operand, e.includesEquip],
  indent: t
}), Oi = (e) => ({ operation: e[0], armorId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), zi = (e, t = 0) => ({
  code: E,
  parameters: [D, e.armorId, e.value, M, !1],
  indent: t
}), Hi = (e, t = 0) => ({ code: E, parameters: [D, e.armorId, e.variableId, A, !1], indent: t }), Wi = (e, t = 0) => ({
  code: E,
  parameters: [j, e.armorId, e.value, M, !1],
  indent: t
}), Yi = (e, t = 0) => ({ code: E, parameters: [j, e.armorId, e.variableId, A, !1], indent: t }), Xi = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3],
  includesEquip: e[4]
}), _i = (e, t = 0) => ({ code: V, parameters: [e.operation, e.itemId, e.value, e.operand, e.includesEquip], indent: t }), Gi = (e, t = 0) => ({
  code: V,
  parameters: [D, e.itemId, e.value, M, !1],
  indent: t
}), Ui = (e, t = 0) => ({ code: V, parameters: [D, e.itemId, e.variableId, A, !1], indent: t }), Ki = (e, t = 0) => ({
  code: V,
  parameters: [j, e.itemId, e.value, M, !1],
  indent: t
}), Zi = (e, t = 0) => ({ code: V, parameters: [j, e.itemId, e.variableId, A, !1], indent: t }), $i = (e) => ({
  operation: e[0],
  weaponId: e[1],
  value: e[2],
  operand: e[3],
  includesEquip: e[4]
}), Ji = (e, t = 0) => ({ code: L, indent: t, parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip] }), Qi = (e, t = 0) => ({
  code: L,
  parameters: [D, e.weaponId, e.value, M, !1],
  indent: t
}), es = (e, t = 0) => ({ code: L, parameters: [D, e.weaponId, e.variableId, A, !1], indent: t }), ts = (e, t = 0) => ({ code: L, parameters: [j, e.weaponId, e.value, M, !1], indent: t }), as = (e, t = 0) => ({
  code: L,
  parameters: [j, e.weaponId, e.variableId, A, !1],
  indent: t
}), rs = (e = 0) => ({ code: 135, parameters: [1], indent: e }), is = (e = 0) => ({ code: 135, parameters: [0], indent: e }), ss = (e = 0) => ({
  code: 134,
  parameters: [1],
  indent: e
}), ns = (e = 0) => ({ code: 134, parameters: [0], indent: e }), os = (e = 0) => ({ code: 137, parameters: [1], indent: e }), ms = (e = 0) => ({
  code: 137,
  parameters: [0],
  indent: e
}), De = (e) => [e], ps = (e) => ({ comment: e[0] }), Ct = (e, t = 0) => ({ code: rt, indent: t, parameters: De(e) }), Dt = (e, t = 0) => ({
  code: it,
  indent: t,
  parameters: De(e)
}), cs = (e, t = 0) => e.map((a, r) => r === 0 ? Ct(a, t) : Dt(a, t)), ds = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), ls = (e) => ({
  index: e[0],
  name: e[1]
}), us = (e) => [e.index ?? 0, e.name ?? ""], ys = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), gs = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], bs = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Is = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), fs = (e, t = 0) => ({ code: 261, indent: t, parameters: [e.filename] }), vs = (e) => ({
  filename: e[0]
}), hs = (e, t = 0) => ({ code: 129, parameters: [0, e.actorId], indent: t }), xs = (e, t = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: t
}), Ts = ({ pictureId: e = 0, origin: t = 0, name: a = "", x: r = 0, y: s = 0, scaleX: n = 100, scaleY: c = 100, opacity: l = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, a, t, r, s, n, c, l, u]
}), ws = ({ pictureId: e, origin: t, x: a, y: r, scaleX: s, scaleY: n, opacity: c, blendMode: l, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, t, a, r, s, n, c, l, u, I] }), Mt = (e, t = 0) => ({
  code: st,
  indent: t,
  parameters: [e]
}), At = (e, t = 0) => ({ code: nt, indent: t, parameters: [e] }), ks = (e, t = 0) => e.map((a, r) => r === 0 ? Mt(a, t) : At(a, t)), Ss = 1, Ns = 0, z = {
  item: 0,
  weapon: 1,
  armors: 2
}, Ps = ({ goods: e, buyOnly: t = !1 }, a = 0) => e.map((r, s) => {
  const n = ((c) => c.customPrice !== void 0 && c.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? {
    code: ot,
    indent: a,
    parameters: [z[r.itemType] ?? z.item, r.id, n, r.customPrice ?? 0, t]
  } : { code: mt, indent: a, parameters: [z[r.itemType] ?? z.item, r.id, n, r.customPrice ?? 0] };
}), qs = 0, Cs = 1, Ds = 2, Ms = 3, As = 4, jt = {
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
}, js = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], Rs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], Fs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], Bs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Es = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], Vs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], Ls = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, jt[t.param]], Os = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, zs = (e, t) => {
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
}, Rt = (e) => [...e], Hs = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Rt(e.parameters)
}), Ft = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Ws = (e) => e.parameters.every(Ft), Ys = "bgm", Xs = "se", _s = "me", Gs = "bgs", Us = "battlebacks1", Ks = "battlebacks2", Zs = "characters", $s = "enemies", Js = "faces", Qs = "parallaxes", en = "pictures", tn = "sv_actors", an = "sv_enemies", rn = "system", sn = "tilesets", nn = "titles1", on = "titles2", mn = "System.json", pn = "Actors.json", cn = "Classes.json", dn = "Skills.json", ln = "Items.json", un = "Weapons.json", yn = "Armors.json", gn = "Enemies.json", bn = "Troops.json", In = "States.json", fn = "Animations.json", vn = "Tilesets.json", hn = "CommonEvents.json", xn = "MapInfos.json", Tn = "data", wn = "img", kn = "audio", Sn = "js", Me = (e, t) => ({
  type: "array",
  items: t,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, ve = (e) => e === void 0 || e === 0, Bt = (e) => Me(e, { type: "string" }), Et = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({
        type: "string",
        ...h(a),
        ...x(a.default)
      }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...x(a.default), ...h(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...x(a.default), ...h(a), ...a.options ? {
        enum: a.options.map((r) => r.value)
      } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Bt(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: ve(a.decimals) ? "integer" : "number"
      }, ...x(a.default), ...h(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((a) => Me(a, { type: "integer" }))(e);
    case "number":
      return ((a) => ({ type: ve(a.decimals) ? "integer" : "number", ...x(a.default), ...h(a) }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...x(a.default), ...h(a) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...x(a.default), ...h(a) }))(e);
    case "struct":
      return { $ref: `#/definitions/${(t = e).struct}`, ...h(t) };
    default:
      return {};
  }
  var t;
}, Ae = (e, t) => Object.entries(t).reduce((a, [r, s]) => {
  if (r in e) {
    const n = e[r];
    if (typeof n == "string") return { ...a, [r]: s(n) };
  }
  return a;
}, {}), T = (e, t, a, r) => ({
  default: t,
  ...Ae(a, r),
  kind: e
}), Y = (e, t, a) => ({ default: [], ...Ae(t, a), kind: e }), je = "help", Q = "kind", K = "text", he = "struct", Re = (e) => {
  const t = JSON.parse(e);
  return Array.isArray(t) ? t.map(X) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, X(r)])) : t;
}, X = (e) => {
  if (typeof e != "string") return e;
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.map(X) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, X(r)])) : t;
  } catch {
    return e;
  }
}, Vt = (e) => {
  if (Q in e.attr) {
    const t = Lt[e.attr.kind];
    if (t) return t(e);
  }
  return T("any", "", e.attr, _);
}, o = (e) => e, Fe = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), _ = {
  default: o,
  text: o,
  desc: o,
  parent: o
}, xe = (e) => T("string", "", e.attr, _), Te = (e) => {
  const t = { default: (a) => Re(a), text: o, desc: o, parent: o };
  return Y("string[]", e.attr, t);
}, y = (e, t) => {
  const a = {
    default: Fe,
    text: o,
    desc: o,
    parent: o
  };
  return Y(t, e.attr, a);
}, g = (e, t) => {
  const a = { default: (r) => parseInt(r, 10), text: o, desc: o, parent: o };
  return T(t, 0, e.attr, a);
}, Lt = {
  number: (e) => ((t) => {
    const a = {
      default: (r) => parseFloat(r),
      text: o,
      desc: o,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: o
    };
    return T("number", 0, t.attr, a);
  })(e),
  "number[]": (e) => {
    const t = { default: Fe, text: o, desc: o, decimals: (a) => parseInt(a, 10), min: (a) => parseFloat(a), max: (a) => parseFloat(a), parent: o };
    return Y("number[]", e.attr, t);
  },
  string: xe,
  "string[]": Te,
  multiline_string: xe,
  "multiline_string[]": Te,
  combo: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => r.option)) ?? [];
    return { ...T("combo", "", e.attr, _), options: t };
  },
  select: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...T("select", "", e.attr, _), options: t };
  },
  actor: (e) => g(e, "actor"),
  "actor[]": (e) => y(e, "actor[]"),
  class: (e) => g(e, "class"),
  "class[]": (e) => y(e, "class[]"),
  skill: (e) => g(e, "skill"),
  "skill[]": (e) => y(e, "skill[]"),
  item: (e) => g(e, "item"),
  "item[]": (e) => y(e, "item[]"),
  weapon: (e) => g(e, "weapon"),
  "weapon[]": (e) => y(e, "weapon[]"),
  armor: (e) => g(e, "armor"),
  "armor[]": (e) => y(e, "armor[]"),
  state: (e) => g(e, "state"),
  "state[]": (e) => y(e, "state[]"),
  enemy: (e) => g(e, "enemy"),
  "enemy[]": (e) => y(e, "enemy[]"),
  common_event: (e) => g(e, "common_event"),
  "common_event[]": (e) => y(e, "common_event[]"),
  switch: (e) => g(e, "switch"),
  "switch[]": (e) => y(e, "switch[]"),
  variable: (e) => g(e, "variable"),
  "variable[]": (e) => y(e, "variable[]"),
  troop: (e) => g(e, "troop"),
  "troop[]": (e) => y(e, "troop[]"),
  boolean: (e) => {
    const t = {
      default: (a) => a === "true",
      text: o,
      desc: o,
      on: o,
      off: o,
      parent: o
    };
    return T("boolean", !0, e.attr, t);
  },
  file: (e) => {
    const t = { default: o, text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...T("file", "", e.attr, t) };
  },
  "file[]": (e) => {
    const t = { default: (a) => Re(a), text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...Y("file[]", e.attr, t) };
  }
}, Be = "BODY", Ee = "STRUCT", H = "NONE", Ot = (e, t) => {
  const a = e.lines.length > 0 ? ie(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? Ee : "INVALID", locale: t[2], lines: [] };
}, zt = (e) => ({
  ...e.lines.length > 0 ? ie(e) : e,
  blockType: Be,
  structName: void 0,
  locale: void 0,
  lines: []
}), ie = (e) => e.blockType === Be ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: H } : e.structName && e.blockType === Ee ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: H,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: H,
  structName: void 0,
  lines: []
}, Ht = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, ee = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), W = (e) => {
  const t = Wt(e), a = Xt(t);
  return Yt(a);
}, Wt = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: Ht(e.currentOption).items } };
  }
  return e;
}, Yt = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, Xt = (e) => {
  if (e.currentCommand) {
    const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ...ee(e.currentCommand), command: e.currentCommand.command, args: t };
    return {
      ...e,
      commands: [...e.commands, a],
      currentCommand: null,
      currentParam: null,
      currentContext: null,
      currentOption: null
    };
  }
  return e;
}, we = (e, t) => {
  const a = e.lines.reduce((r, s) => {
    const n = s.trim().replace(/^\*\s?/, "");
    if (!n.startsWith("@")) return r.currentContext === je ? { ...r, helpLines: r.helpLines.concat(n) } : r;
    const [c, ...l] = n.slice(1).split(" "), u = l.join(" ").trim(), I = t[c];
    return I ? I(r, u) : r;
  }, Gt());
  return W(a);
}, _t = (e, t) => {
  const a = ((c) => {
    const l = c.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: H
    }, I = l.reduce((f, O) => {
      const k = O.trim(), F = k.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return F ? Ot(f, F) : k === "/*:" ? zt(f) : k === "*/" ? f.lines.length > 0 ? ie(f) : f : { ...f, lines: f.lines.concat([k]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = a.structs.map((c) => ((l) => {
    const u = we(l, Ve);
    return { name: l.struct, params: u.params };
  })(c)), s = ((c) => {
    if (c.bodies.length !== 0) return c.bodies[0];
  })(a);
  if (!s) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const n = we(s, t);
  return { params: n.params, commands: n.commands, meta: n.meta, helpLines: n.helpLines, structs: r };
}, Gt = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), v = (e, t, a) => e.currentParam && !(t in e.currentParam.attr) ? {
  ...e,
  currentParam: { ...e.currentParam, attr: { ...e.currentParam.attr, [t]: a } }
} : e, Z = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Ve = {
  param: (e, t) => {
    const a = W(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? v(e, K, t) : e.currentCommand && !(K in e.currentCommand) ? { ...e, currentCommand: {
    ...ee(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [K]: t
  } } : e,
  desc: (e, t) => e.currentParam ? v(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
  command: (e, t) => {
    const a = W(e);
    return a.commands.some((r) => r.command === t) ? a : { ...a, currentCommand: { command: t, args: [] }, currentParam: null };
  },
  arg: (e, t) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const a = {
        ...ee(e.currentCommand),
        command: e.currentCommand.command,
        args: e.currentCommand.args.concat(e.currentParam)
      };
      return {
        ...e,
        commands: e.commands,
        currentCommand: a,
        currentContext: "arg",
        currentParam: { name: t, attr: {} }
      };
    }
    return { ...e, currentParam: { name: t, attr: {} } };
  },
  help: (e) => ({ ...W(e), currentContext: je }),
  option: (e, t) => {
    if (!e.currentParam) return e;
    const a = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }), currentOption: s } : { items: r.items, currentOption: s })(e.currentOption ?? {
      items: []
    }, t);
    return { ...e, currentOption: a };
  },
  value: (e, t) => {
    if (!e.currentOption) return e;
    const a = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: s }) } : {
      items: r.items
    })(e.currentOption, t);
    return { ...e, currentOption: a };
  },
  type: (e, t) => {
    if (((a) => a.endsWith(">") && a.startsWith("struct<"))(t)) {
      const a = t.slice(7, -1), r = v(e, he, a);
      return v(r, Q, he);
    }
    return e.currentParam ? v(e, Q, t) : e;
  },
  default: (e, t) => v(e, "default", t),
  on: (e, t) => v(e, "on", t),
  off: (e, t) => v(e, "off", t),
  min: (e, t) => v(e, "min", t),
  max: (e, t) => v(e, "max", t),
  base: (e, t) => {
    return { ...e, dependencies: (a = e.dependencies, r = t, { orderAfter: a.orderAfter, orderBefore: a.orderBefore, base: a.base.concat(r) }) };
    var a, r;
  },
  orderAfter: (e, t) => {
    return { ...e, dependencies: (a = e.dependencies, r = t, { base: a.base, orderBefore: a.orderBefore, orderAfter: a.orderAfter.concat(r) }) };
    var a, r;
  },
  orderBefore: (e, t) => {
    return {
      ...e,
      dependencies: (a = e.dependencies, r = t, { base: a.base, orderAfter: a.orderAfter, orderBefore: a.orderBefore.concat(r) })
    };
    var a, r;
  },
  author: (e, t) => Z(e, "author", t),
  plugindesc: (e, t) => Z(e, "plugindesc", t),
  url: (e, t) => Z(e, "url", t)
}, Ut = (e) => Kt(((t) => _t(t, Ve))(e)), Kt = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: Zt(e.commands),
  params: Le(e.params)
}), Le = (e) => e.reduce((t, a) => ({ [a.name]: Vt(a), ...t }), {}), Zt = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: Le(a.args) };
  return { [a.command]: r, ...t };
}, {}), Nn = (e) => Ut(e), Pn = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [s, n]) => {
    const c = Et(n);
    return { ...r, [s]: c };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e), $t = (e = {}) => ({
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
}), Jt = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], qn = (e) => ({
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
}), Cn = (e) => e.menuCommands[0], Dn = (e) => e.menuCommands[1], Mn = (e) => e.menuCommands[2], An = (e) => e.menuCommands[3], jn = (e) => e.menuCommands[4], Rn = (e) => e.menuCommands[5], Fn = (e) => e.itemCategories[0], Bn = (e) => e.itemCategories[1], En = (e) => e.itemCategories[2], Vn = (e) => e.itemCategories[3], Qt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], Ln = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), ea = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], On = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), ta = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, aa = (e = {}) => ({
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
}), b = { type: "boolean" }, ra = {
  type: "object",
  additionalProperties: !1,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: b,
    optDisplayTp: b,
    optDrawTitle: b,
    optExtraExp: b,
    optFloorDeath: b,
    optFollowers: b,
    optKeyItemsNumber: b,
    optSideView: b,
    optSlipDeath: b,
    optTransparent: b,
    optMessageSkip: b,
    optSplashScreen: b
  }
}, zn = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), ia = (e) => ({
  armorTypes: S(e.armorTypes),
  elements: S(e.elements),
  equipTypes: S(e.equipTypes),
  weaponTypes: S(e.weaponTypes),
  skillTypes: S(e.skillTypes),
  variables: S(e.variables),
  switches: S(e.switches)
}), S = (e) => e ? [...e] : [], Hn = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), Wn = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), $ = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), sa = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), Yn = { title: "オプション", options: {
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
} }, Xn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, _n = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Gn = {
  title: "コマンド",
  options: {
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
    continueGame: "続きから",
    equip2: "装備2",
    keyItem: "大事なもの",
    optimize: "最強装備",
    toTitle: "タイトルへ戻る"
  }
}, Oe = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, ze = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, He = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, C = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, na = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, oa = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, ma = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, pa = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, ca = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, N = { type: "array", items: { type: "string" } }, da = {
  additionalProperties: !1,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: N,
    skillTypes: N,
    elements: N,
    variables: N,
    equipTypes: N,
    switches: N,
    armorTypes: N
  }
}, p = { type: "string" }, ke = { type: "string", nullable: !0 }, i = { type: "string" }, la = {
  required: ["terms", "currencyUnit", "gameTitle"],
  additionalProperties: !1,
  type: "object",
  properties: { currencyUnit: { type: "string" }, gameTitle: { type: "string" }, terms: {
    additionalProperties: !1,
    type: "object",
    required: ["messages", "commands", "basic", "params"],
    properties: { messages: {
      type: "object",
      additionalProperties: !1,
      required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
      properties: {
        actionFailure: i,
        actorDamage: i,
        actorNoDamage: i,
        actorRecovery: i,
        actorGain: i,
        actorLoss: i,
        actorDrain: i,
        alwaysDash: i,
        bgmVolume: i,
        bgsVolume: i,
        commandRemember: i,
        criticalToActor: i,
        criticalToEnemy: i,
        counterAttack: i,
        debuffAdd: i,
        defeat: i,
        enemyDamage: i,
        enemyNoDamage: i,
        enemyRecovery: i,
        enemyGain: i,
        enemyLoss: i,
        enemyDrain: i,
        evasion: i,
        expNext: i,
        expTotal: i,
        escapeFailure: i,
        escapeStart: i,
        file: i,
        loadMessage: i,
        meVolume: i,
        magicEvasion: i,
        magicReflection: i,
        obtainExp: i,
        obtainGold: i,
        obtainItem: i,
        obtainSkill: i,
        partyName: i,
        preemptive: i,
        saveMessage: i,
        seVolume: i,
        substitute: i,
        touchUI: i,
        victory: i,
        useItem: i,
        buffAdd: i,
        buffRemove: i,
        actorNoHit: i,
        enemyNoHit: i,
        autosave: i,
        emerge: i,
        levelUp: i,
        possession: i,
        surprise: i
      }
    }, commands: {
      type: "array",
      items: [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ke, p, p, ke, p, p],
      minItems: 26,
      maxItems: 26
    }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 10,
      maxItems: 10,
      uniqueItems: !0
    } }
  } }
}, ua = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: He },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    editor: { additionalProperties: !1, type: "object", required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"], properties: { messageWidth1: {
      type: "integer",
      minimum: 0,
      maximum: 1e3
    }, messageWidth2: { type: "integer", minimum: 0, maximum: 1e3 }, jsonFormatLevel: { type: "integer", minimum: 0, maximum: 4 } } }
  }
}, J = {
  additionalProperties: !1,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: {
    characterIndex: { type: "integer", minimum: 0, maximum: 7 },
    characterName: {
      type: "string",
      minLength: 1
    },
    bgm: { type: "object", additionalProperties: !1, required: ["name", "volume", "pitch", "pan"], properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 50, maximum: 150 },
      pan: { type: "integer", minimum: -100, maximum: 100 }
    } },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0, maximum: 5e3 },
    startY: { type: "integer", minimum: 0, maximum: 5e3 }
  }
}, ya = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: J,
  boat: J,
  ship: J,
  advanced: {
    type: "object",
    properties: {
      gameId: { type: "integer" },
      screenWidth: { type: "integer" },
      screenHeight: { type: "integer" },
      uiAreaWidth: { type: "integer" },
      uiAreaHeight: {
        type: "integer"
      },
      windowOpacity: { type: "integer" },
      screenScale: { type: "number" },
      numberFontFilename: { type: "string" },
      mainFontFilename: { type: "string" },
      fallbackFonts: { type: "string" },
      fontSize: { type: "integer" }
    },
    required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
    additionalProperties: !1
  },
  attackMotions: { type: "array", items: Oe }
} }, ga = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), G = new Se({ strict: !0 }), ba = ((e) => {
  const t = ga(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([ya, na, oa, ta, ra, ma, ze, ca, da, la, pa, ua]), Ia = G.compile(ba), Un = (e) => Ia(e), fa = G.compile(He);
G.compile(Oe);
const va = G.compile(ze), Kn = (e) => {
  var a, r, s, n, c, l, u, I, f, O, k, F, se, ne, oe, me, pe, ce, de, le, ue, ye;
  const t = xa(e.size);
  return {
    ...aa(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Jt(e.sounds),
    editor: sa(e.editing),
    advanced: $t(e.advanced),
    title1Name: ((s = e.images) == null ? void 0 : s.title1Name) ?? "",
    title2Name: ((n = e.images) == null ? void 0 : n.title2Name) ?? "",
    ...ia(e.dataNames ?? {}),
    magicSkills: te([]),
    airship: $((c = e.vehicles) == null ? void 0 : c.airship),
    boat: $((l = e.vehicles) == null ? void 0 : l.boat),
    ship: $((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: m((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: m((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: m((O = e.bgm) == null ? void 0 : O.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((k = e.battleTest) == null ? void 0 : k.battleback1Name) ?? "",
    battleback2Name: ((F = e.battleTest) == null ? void 0 : F.battleback2Name) ?? "",
    testTroopId: ((se = e.battleTest) == null ? void 0 : se.testTroopId) ?? 0,
    testBattlers: Ta((ne = e.battleTest) == null ? void 0 : ne.testBattlers, wa),
    battleBgm: m((oe = e.bgm) == null ? void 0 : oe.battleBgm),
    victoryMe: m((me = e.me) == null ? void 0 : me.victoryMe),
    editMapId: ((pe = e.editorTemporary) == null ? void 0 : pe.editMapId) ?? 0,
    battlerName: ((ce = e.editorTemporary) == null ? void 0 : ce.battlerName) ?? "",
    locale: "",
    startMapId: ((de = e.gameInit) == null ? void 0 : de.startMapId) ?? 0,
    startX: ((le = e.gameInit) == null ? void 0 : le.startX) ?? 0,
    startY: ((ue = e.gameInit) == null ? void 0 : ue.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ha(e.terms ?? {}),
    itemCategories: Qt(e.itemCategories),
    partyMembersArray: te((ye = e.gameInit) == null ? void 0 : ye.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: ea(e.menuComamnds)
  };
}, ha = (e) => ({
  basic: lt(e.basic ?? {}),
  commands: dt(e.commands ?? {}),
  params: ct(e.params ?? {}),
  messages: pt(e.messages ?? {})
}), te = (e) => e ? [...e] : [], xa = (e) => ((t) => va(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ta = (e, t) => e ? e.map(t) : [], wa = (e) => ((t) => fa(t))(e) ? { actorId: e.actorId, equips: te(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
};
export {
  De as $,
  Vi as A,
  Bi as B,
  Ei as C,
  Oi as D,
  Li as E,
  zi as F,
  Hi as G,
  Wi as H,
  Yi as I,
  Xi as J,
  _i as K,
  Gi as L,
  Ui as M,
  Ki as N,
  Zi as O,
  $i as P,
  Ji as Q,
  Qi as R,
  es as S,
  ts as T,
  as as U,
  os as V,
  rs as W,
  ss as X,
  ms as Y,
  is as Z,
  ns as _,
  gi as a,
  yn as a$,
  ps as a0,
  Ct as a1,
  Dt as a2,
  cs as a3,
  ds as a4,
  ls as a5,
  us as a6,
  ys as a7,
  gs as a8,
  bs as a9,
  zs as aA,
  Rt as aB,
  Hs as aC,
  Ws as aD,
  Ys as aE,
  Xs as aF,
  _s as aG,
  Gs as aH,
  Us as aI,
  Ks as aJ,
  Zs as aK,
  $s as aL,
  Js as aM,
  Qs as aN,
  en as aO,
  tn as aP,
  an as aQ,
  rn as aR,
  sn as aS,
  nn as aT,
  on as aU,
  mn as aV,
  pn as aW,
  cn as aX,
  dn as aY,
  ln as aZ,
  un as a_,
  Is as aa,
  vs as ab,
  fs as ac,
  hs as ad,
  xs as ae,
  Ts as af,
  ws as ag,
  Mt as ah,
  At as ai,
  ks as aj,
  Ss as ak,
  Ns as al,
  Ps as am,
  qs as an,
  Cs as ao,
  Ds as ap,
  Ms as aq,
  As as ar,
  js as as,
  Rs as at,
  Fs as au,
  Bs as av,
  Es as aw,
  Vs as ax,
  Ls as ay,
  Os as az,
  bi as b,
  xr as b$,
  gn as b0,
  bn as b1,
  In as b2,
  fn as b3,
  vn as b4,
  hn as b5,
  xn as b6,
  Tn as b7,
  wn as b8,
  kn as b9,
  Ua as bA,
  Ka as bB,
  Za as bC,
  $a as bD,
  Ja as bE,
  Qa as bF,
  er as bG,
  tr as bH,
  ar as bI,
  rr as bJ,
  ir as bK,
  sr as bL,
  nr as bM,
  or as bN,
  mr as bO,
  pr as bP,
  cr as bQ,
  dr as bR,
  lr as bS,
  ur as bT,
  yr as bU,
  gr as bV,
  br as bW,
  Ir as bX,
  fr as bY,
  vr as bZ,
  hr as b_,
  Sn as ba,
  Nn as bb,
  Pn as bc,
  ui as bd,
  ae as be,
  qa as bf,
  Ca as bg,
  Da as bh,
  Ma as bi,
  Aa as bj,
  ja as bk,
  Ra as bl,
  Fa as bm,
  ut as bn,
  Ba as bo,
  Ea as bp,
  Va as bq,
  La as br,
  Oa as bs,
  za as bt,
  Ha as bu,
  Wa as bv,
  Ya as bw,
  Xa as bx,
  _a as by,
  Ga as bz,
  Ii as c,
  Rn as c$,
  Tr as c0,
  wr as c1,
  kr as c2,
  Sr as c3,
  Nr as c4,
  Pr as c5,
  qr as c6,
  yt as c7,
  Cr as c8,
  Dr as c9,
  $r as cA,
  Jr as cB,
  Qr as cC,
  ei as cD,
  ti as cE,
  ai as cF,
  ri as cG,
  ii as cH,
  si as cI,
  ni as cJ,
  oi as cK,
  mi as cL,
  pi as cM,
  ci as cN,
  di as cO,
  li as cP,
  St as cQ,
  Un as cR,
  Kn as cS,
  $t as cT,
  Jt as cU,
  qn as cV,
  Cn as cW,
  Dn as cX,
  Mn as cY,
  An as cZ,
  jn as c_,
  Mr as ca,
  Ar as cb,
  jr as cc,
  vt as cd,
  ht as ce,
  re as cf,
  Rr as cg,
  Fr as ch,
  Br as ci,
  Er as cj,
  xt as ck,
  Vr as cl,
  Lr as cm,
  Or as cn,
  zr as co,
  Tt as cp,
  Hr as cq,
  Wr as cr,
  Yr as cs,
  Xr as ct,
  _r as cu,
  Gr as cv,
  Kr as cw,
  kt as cx,
  Ur as cy,
  Zr as cz,
  xi as d,
  Fn as d0,
  Bn as d1,
  En as d2,
  Vn as d3,
  Qt as d4,
  Ln as d5,
  ea as d6,
  On as d7,
  aa as d8,
  zn as d9,
  ia as da,
  Hn as db,
  Wn as dc,
  $ as dd,
  sa as de,
  Yn as df,
  Xn as dg,
  _n as dh,
  Gn as di,
  vi as e,
  fi as f,
  Ti as g,
  hi as h,
  Pa as i,
  wi as j,
  w as k,
  ki as l,
  yi as m,
  Si as n,
  Ni as o,
  Pi as p,
  qi as q,
  Ci as r,
  Di as s,
  Mi as t,
  Ai as u,
  ji as v,
  Pt as w,
  Ri as x,
  qt as y,
  Fi as z
};
