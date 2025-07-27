import K from "ajv";
import { c as Ee, a as Fe, m } from "./make.es.js";
const oa = ({ actorId: e = 1, faceIndex: t = 0, faceName: a = "", characterIndex: r = 0, characterName: o = "", battlerName: p = "" } = {}, d = 0) => ({
  code: 322,
  indent: d,
  parameters: [e, o, r, a, t, p]
}), $ = (e, t) => `\\${e}[${t}]`, ma = (e, t) => t.map((a, r) => ({
  text: a,
  controlChar: $(e, r)
})), pa = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({ char: t[1], id: parseInt(t[2], 10) })), ca = (e) => e.map((t) => ({
  text: t.name,
  controlChar: $("N", t.id)
})), da = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: $("V", a) })).filter((t) => t.text !== ""), la = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), ua = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), ya = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), ga = (e = {}) => ({ actorHp: e.actorHp ?? 0, actorId: e.actorId ?? 0, enemyValid: e.enemyValid ?? 0, switchValid: e.switchValid ?? 0 }), Be = (e = {}) => ({
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
}), ba = 0, Ia = 101, fa = 401, va = 102, ha = 402, xa = 103, Ta = 104, ka = 105, wa = 405, Na = 108, Sa = 408, Pa = 109, qa = 111, Aa = 411, Ca = 112, Da = 113, Ma = 115, ja = 117, Ra = 118, Ea = 119, Fa = 121, Ba = 122, Va = 123, La = 124, Ha = 125, Oa = 126, za = 127, Wa = 128, Xa = 129, Ga = 132, Ya = 133, Ua = 134, _a = 135, Ka = 136, $a = 137, Za = 138, Ja = 139, Qa = 140, er = 201, tr = 202, ar = 203, rr = 204, ir = 205, sr = 206, nr = 211, or = 212, mr = 213, pr = 214, cr = 216, dr = 217, lr = 221, ur = 222, yr = 223, gr = 224, br = 225, Ir = 230, fr = 231, vr = 232, hr = 233, xr = 234, Tr = 235, kr = 236, wr = 241, Nr = 242, Sr = 243, Pr = 244, qr = 245, Ar = 246, Cr = 249, Dr = 250, Mr = 251, jr = 261, Rr = 282, Er = 283, Fr = 284, Br = 285, Vr = 301, Lr = 302, Hr = 605, Or = 303, zr = 311, Wr = 312, Xr = 313, Gr = 314, Yr = 315, Ur = 320, _r = 321, Kr = 322, $r = 323, Zr = 324, Jr = 325, Qr = 331, ei = 332, ti = 333, ai = 334, ri = 335, ii = 336, si = 337, ni = 339, oi = 340, mi = 351, pi = 342, ci = 352, di = 353, li = 354, ui = 355, yi = 655, gi = 356, bi = 357, Ii = (e, t, a = 0) => ({
  code: e,
  indent: a,
  parameters: t
}), fi = 0, vi = 1, hi = 2, xi = 3, Ti = 4, ki = 5, wi = 6, Ni = 7, Si = 8, Pi = 9, qi = 10, Ai = 11, Ci = 12, Di = 13, Mi = 14, ji = 15, Ri = 16, Ei = 17, Fi = 18, Bi = 19, Vi = 20, Li = 21, Hi = 22, Oi = 23, zi = 24, Wi = 25, Xi = 26, Gi = 27, Yi = 28, Ui = 29, _i = 30, Ki = 31, $i = 32, Zi = 33, Ji = 34, Qi = 35, es = 36, ts = 37, as = 38, rs = 39, is = 40, ss = 41, ns = 42, os = 43, ms = 44, ps = 45, cs = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), ds = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), ls = () => ({ conditions: Be(), list: [], directionFix: !1, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: !1, skippable: !1, wait: !1 } }), us = (e = {}) => ({
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
}), ys = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, Ve = {
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
}, Le = {
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
      pages: { type: "array", items: Ve }
    } } }
  }
}, ve = new K({ strict: !0 }), He = ve.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), Oe = ve.compile(Le), gs = (e) => He(e), bs = (e) => Oe(e), ze = { actor: { title: "アクター", options: {
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
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, We = {
  title: "ダメージ",
  options: {}
}, Z = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Is = (e = {}) => ({
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
}), fs = (e) => ({
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
}), vs = (e = {}) => ({
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
}), hs = (e = {}) => ({ name: e.name ?? "", id: e.id ?? 0, traits: [], note: e.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e.learnings ?? [], expParams: e.expParams ?? [] }), Xe = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), xs = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Ts = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => Xe())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, ks = (e = {}) => ({
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
}), l = "{name}", A = "{name} * {value}%", pe = "{name} + {value}%", ce = "{value}", Ge = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: A, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: pe, options: {
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
  specialParam: { title: "特殊能力値", format: A, options: {
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
    format: l,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: l, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: l, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: A },
  debuffRate: { title: "弱体有効度", format: A },
  stateRate: { title: "ステート有効度", format: A },
  stateResist: {
    title: "ステート無効",
    format: l
  },
  attackElement: { title: "攻撃属性", format: l },
  attackState: { title: "攻撃ステート", format: pe },
  attackSpeed: { title: "攻撃速度補正", format: ce },
  attackTimes: {
    title: "攻撃追加回数",
    format: ce
  },
  actionPlus: { title: "行動追加", format: A },
  attackSkill: { title: "攻撃スキル", format: l },
  equipWeaponType: { title: "装備武器タイプ", format: l },
  equipArmorType: { title: "装備防具タイプ", format: l },
  equipLock: {
    title: "装備固定",
    format: l
  },
  equipSeal: { title: "装備封印", format: l },
  slotType: { title: "スロットタイプ", format: l },
  skillAdd: { title: "スキル追加", format: l },
  skillSeal: { title: "スキルタイプ封印", format: l },
  skillTypeAdd: { title: "スキルタイプ追加", format: l },
  skillTypeSeal: { title: "スキルタイプ封印", format: l }
} }, Ye = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, ws = (e, t, a) => {
  const r = Ee(Ye);
  return Fe(t, a, r, e.pattern, (o) => o.dataId);
}, Ns = (e = {}) => ({
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
  damage: Z(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Ss = {
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
}, Ps = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, qs = 0, As = 1, Cs = 2, de = "{name} {value1}%", O = "{value1}% + {value2}", le = "{name} {value1}ターン", j = "{name}", Ue = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: le },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: le },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: O },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: j },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: O
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: O },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: j
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: j },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: de },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: j
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: de },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: j }
} }, Ds = 0, Ms = (e, t, a) => {
  const r = a.find((p) => p.id === t.dataId), o = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", o);
}, js = { title: "アイテム", options: { consumable: "消耗品" } }, Rs = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Es = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Fs = (e = {}) => ({
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
  damage: Z(e.damage ?? {}),
  effects: [],
  price: 0
}), Bs = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: Z(e.damage ?? {}),
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
}), he = (e, t) => `<${e}:${t}>`, Vs = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Ls = (e, t) => xe(e.note, (a, r) => t(a, r, e)), Hs = (e) => xe(e, (t, a) => [t, a]), xe = (e, t) => {
  const a = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(a), (r) => t(r[1], r[2]));
}, Os = (e, t) => {
  if (e.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (a, r, o) => {
    const p = t(r, o);
    if (p.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return he(r, p);
  });
}, zs = (e, t) => {
  const a = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(e.matchAll(a)).find((o) => o[1] === t);
  return r ? r[2] : void 0;
}, Ws = (e, t, a) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(r, (o, p) => p === t ? he(p, a) : o);
}, Xs = "data", Gs = "actor", Ys = "map", Us = "enemy", _s = "state", Ks = "skill", $s = "item", Zs = "weapon", Js = "armor", Qs = "class", en = "common_event", tn = "troop", _e = {
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
}, an = () => ({ rpg: { damage: We, data: ze, traits: Ge, itemEffect: Ue }, global: _e }), rn = (e, t = 0) => ({ code: 320, parameters: [e.actorId, e.name], indent: t }), sn = (e, t = 0) => ({
  code: 324,
  parameters: [e.actorId, e.nickname],
  indent: t
}), nn = (e, t = 0) => ({ code: 325, parameters: [e.actorId, e.profile], indent: t }), on = (e, t) => N(e, m({ name: t })), N = (e, t, a = 0) => ({
  code: e,
  parameters: [m(t)],
  indent: a
}), mn = (e, t = 0) => N(241, e, t), pn = (e, t = 0) => N(245, e, t), cn = (e, t = 0) => N(249, e, t), dn = (e, t = 0) => N(250, e, t), ln = (e, t = 0) => N(132, e, t), un = (e, t = 0) => N(133, e, t), yn = (e, t = 0) => N(139, e, t), gn = (e, t = 0) => ({
  code: 117,
  indent: t,
  parameters: Ke(e ?? {})
}), bn = (e) => ({ eventId: e[0] }), Ke = (e) => [e.eventId ?? 0], In = (e) => ({ min: e[0], max: e[1], value: e[2] }), $e = (e) => [e.min, e.max, e.value], fn = (e, t = 0) => ({
  code: 121,
  indent: t,
  parameters: $e(e)
}), Te = (e) => [e], vn = (e) => ({ comment: e[0] }), Ze = (e, t = 0) => ({ code: 108, indent: t, parameters: Te(e) }), Je = (e, t = 0) => ({
  code: 408,
  indent: t,
  parameters: Te(e)
}), hn = (e, t = 0) => e.map((a, r) => r === 0 ? Ze(a, t) : Je(a, t)), Qe = (e) => [e.variableId ?? 0, e.digits ?? 0], xn = (e) => ({ variableId: e[0], digits: e[1] }), Tn = (e, t = 0) => ({
  code: 103,
  indent: t,
  parameters: Qe(e ?? {})
}), kn = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), wn = (e) => ({ index: e[0], name: e[1] }), Nn = (e) => [e.index ?? 0, e.name ?? ""], Sn = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Pn = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], qn = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), An = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Cn = (e, t = 0) => ({
  code: 101,
  indent: t,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Dn = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Mn = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], jn = (e, t = 0) => ({
  code: 401,
  indent: t,
  parameters: [e]
}), Rn = ({ pictureId: e = 0, origin: t = 0, name: a = "", x: r = 0, y: o = 0, scaleX: p = 100, scaleY: d = 100, opacity: u = 255, blendMode: y = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, a, t, r, o, p, d, u, y]
}), En = ({ pictureId: e, origin: t, x: a, y: r, scaleX: o, scaleY: p, opacity: d, blendMode: u, wait: y = !1, easingType: f = 0 }) => ({ code: 232, indent: 0, parameters: [e, t, a, r, o, p, d, u, y, f] }), et = (e, t = 0) => ({
  code: 355,
  indent: t,
  parameters: [e]
}), tt = (e, t = 0) => ({ code: 655, indent: t, parameters: [e] }), Fn = (e, t = 0) => e.map((a, r) => r === 0 ? et(a, t) : tt(a, t)), Bn = 0, Vn = 1, Ln = 2, Hn = 3, On = 4, at = {
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
}, zn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], Wn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], Xn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], Gn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Yn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], Un = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], _n = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, at[t.param]], Kn = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, $n = (e, t) => {
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
}, rt = (e) => [...e], Zn = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: rt(e.parameters)
}), it = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Jn = (e) => e.parameters.every(it), T = new K({ strict: !0 }), st = T.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: !1
}), Qn = (e) => st(e), nt = T.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), eo = (e) => nt(e), ot = T.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: !1
}), to = (e) => ot(e), mt = T.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: !1
}), D = (e) => mt(e), pt = T.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), ao = (e) => pt(e), ct = T.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), ro = (e) => ct(e), dt = T.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), io = (e) => dt(e), lt = T.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), so = (e) => lt(e), ut = T.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), no = (e) => ut(e), oo = (e) => D(e) && e.code === 401, mo = (e) => D(e) && e.code === 405, po = (e) => D(e) && e.code === 108, co = (e) => D(e) && e.code === 408, lo = (e) => D(e) && e.code === 355, uo = (e) => D(e) && e.code === 655, yo = "bgm", go = "se", bo = "me", Io = "bgs", fo = "battlebacks1", vo = "battlebacks2", ho = "characters", xo = "enemies", To = "faces", ko = "parallaxes", wo = "pictures", No = "sv_actors", So = "sv_enemies", Po = "system", qo = "tilesets", Ao = "titles1", Co = "titles2", Do = "System.json", Mo = "Actors.json", jo = "Classes.json", Ro = "Skills.json", Eo = "Items.json", Fo = "Weapons.json", Bo = "Armors.json", Vo = "Enemies.json", Lo = "Troops.json", Ho = "States.json", Oo = "Animations.json", zo = "Tilesets.json", Wo = "CommonEvents.json", Xo = "MapInfos.json", Go = "data", Yo = "img", Uo = "audio", _o = "js", ke = (e, t) => ({
  type: "array",
  items: t,
  ...x(e),
  ...k(e.default)
}), x = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), k = (e) => e !== void 0 ? {
  default: e
} : {}, ue = (e) => e === void 0 || e === 0, yt = (e) => ke(e, { type: "string" }), gt = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({
        type: "string",
        ...x(a),
        ...k(a.default)
      }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...k(a.default), ...x(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...k(a.default), ...x(a), ...a.options ? {
        enum: a.options.map((r) => r.value)
      } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return yt(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: ue(a.decimals) ? "integer" : "number"
      }, ...k(a.default), ...x(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((a) => ke(a, { type: "integer" }))(e);
    case "number":
      return ((a) => ({ type: ue(a.decimals) ? "integer" : "number", ...k(a.default), ...x(a) }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...k(a.default), ...x(a) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...k(a.default), ...x(a) }))(e);
    case "struct":
      return { $ref: `#/definitions/${(t = e).struct}`, ...x(t) };
    default:
      return {};
  }
  var t;
}, we = (e, t) => Object.entries(t).reduce((a, [r, o]) => {
  if (r in e) {
    const p = e[r];
    if (typeof p == "string") return { ...a, [r]: o(p) };
  }
  return a;
}, {}), w = (e, t, a, r) => ({
  default: t,
  ...we(a, r),
  kind: e
}), B = (e, t, a) => ({ default: [], ...we(t, a), kind: e }), Ne = "help", Y = "kind", z = "text", ye = "struct", Se = (e) => {
  const t = JSON.parse(e);
  return Array.isArray(t) ? t.map(V) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, V(r)])) : t;
}, V = (e) => {
  if (typeof e != "string") return e;
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.map(V) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, V(r)])) : t;
  } catch {
    return e;
  }
}, bt = (e) => {
  if (Y in e.attr) {
    const t = It[e.attr.kind];
    if (t) return t(e);
  }
  return w("any", "", e.attr, L);
}, n = (e) => e, Pe = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), L = {
  default: n,
  text: n,
  desc: n,
  parent: n
}, ge = (e) => w("string", "", e.attr, L), be = (e) => {
  const t = { default: (a) => Se(a), text: n, desc: n, parent: n };
  return B("string[]", e.attr, t);
}, g = (e, t) => {
  const a = {
    default: Pe,
    text: n,
    desc: n,
    parent: n
  };
  return B(t, e.attr, a);
}, b = (e, t) => {
  const a = { default: (r) => parseInt(r, 10), text: n, desc: n, parent: n };
  return w(t, 0, e.attr, a);
}, It = {
  number: (e) => ((t) => {
    const a = {
      default: (r) => parseFloat(r),
      text: n,
      desc: n,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: n
    };
    return w("number", 0, t.attr, a);
  })(e),
  "number[]": (e) => {
    const t = { default: Pe, text: n, desc: n, decimals: (a) => parseInt(a, 10), min: (a) => parseFloat(a), max: (a) => parseFloat(a), parent: n };
    return B("number[]", e.attr, t);
  },
  string: ge,
  "string[]": be,
  multiline_string: ge,
  "multiline_string[]": be,
  combo: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => r.option)) ?? [];
    return { ...w("combo", "", e.attr, L), options: t };
  },
  select: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...w("select", "", e.attr, L), options: t };
  },
  actor: (e) => b(e, "actor"),
  "actor[]": (e) => g(e, "actor[]"),
  class: (e) => b(e, "class"),
  "class[]": (e) => g(e, "class[]"),
  skill: (e) => b(e, "skill"),
  "skill[]": (e) => g(e, "skill[]"),
  item: (e) => b(e, "item"),
  "item[]": (e) => g(e, "item[]"),
  weapon: (e) => b(e, "weapon"),
  "weapon[]": (e) => g(e, "weapon[]"),
  armor: (e) => b(e, "armor"),
  "armor[]": (e) => g(e, "armor[]"),
  state: (e) => b(e, "state"),
  "state[]": (e) => g(e, "state[]"),
  enemy: (e) => b(e, "enemy"),
  "enemy[]": (e) => g(e, "enemy[]"),
  common_event: (e) => b(e, "common_event"),
  "common_event[]": (e) => g(e, "common_event[]"),
  switch: (e) => b(e, "switch"),
  "switch[]": (e) => g(e, "switch[]"),
  variable: (e) => b(e, "variable"),
  "variable[]": (e) => g(e, "variable[]"),
  troop: (e) => b(e, "troop"),
  "troop[]": (e) => g(e, "troop[]"),
  boolean: (e) => {
    const t = {
      default: (a) => a === "true",
      text: n,
      desc: n,
      on: n,
      off: n,
      parent: n
    };
    return w("boolean", !0, e.attr, t);
  },
  file: (e) => {
    const t = { default: n, text: n, desc: n, parent: n, dir: n };
    return { dir: "", ...w("file", "", e.attr, t) };
  },
  "file[]": (e) => {
    const t = { default: (a) => Se(a), text: n, desc: n, parent: n, dir: n };
    return { dir: "", ...B("file[]", e.attr, t) };
  }
}, qe = "BODY", Ae = "STRUCT", E = "NONE", ft = (e, t) => {
  const a = e.lines.length > 0 ? J(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? Ae : "INVALID", locale: t[2], lines: [] };
}, vt = (e) => ({
  ...e.lines.length > 0 ? J(e) : e,
  blockType: qe,
  structName: void 0,
  locale: void 0,
  lines: []
}), J = (e) => e.blockType === qe ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: E } : e.structName && e.blockType === Ae ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: E,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: E,
  structName: void 0,
  lines: []
}, ht = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, U = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), F = (e) => {
  const t = xt(e), a = kt(t);
  return Tt(a);
}, xt = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: ht(e.currentOption).items } };
  }
  return e;
}, Tt = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, kt = (e) => {
  if (e.currentCommand) {
    const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ...U(e.currentCommand), command: e.currentCommand.command, args: t };
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
}, Ie = (e, t) => {
  const a = e.lines.reduce((r, o) => {
    const p = o.trim().replace(/^\*\s?/, "");
    if (!p.startsWith("@")) return r.currentContext === Ne ? { ...r, helpLines: r.helpLines.concat(p) } : r;
    const [d, ...u] = p.slice(1).split(" "), y = u.join(" ").trim(), f = t[d];
    return f ? f(r, y) : r;
  }, Nt());
  return F(a);
}, wt = (e, t) => {
  const a = ((d) => {
    const u = d.split(`
`), y = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: E
    }, f = u.reduce((v, R) => {
      const S = R.trim(), M = S.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return M ? ft(v, M) : S === "/*:" ? vt(v) : S === "*/" ? v.lines.length > 0 ? J(v) : v : { ...v, lines: v.lines.concat([S]) };
    }, y);
    return { structs: f.structs, bodies: f.bodies };
  })(e), r = a.structs.map((d) => ((u) => {
    const y = Ie(u, Ce);
    return { name: u.struct, params: y.params };
  })(d)), o = ((d) => {
    if (d.bodies.length !== 0) return d.bodies[0];
  })(a);
  if (!o) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const p = Ie(o, t);
  return { params: p.params, commands: p.commands, meta: p.meta, helpLines: p.helpLines, structs: r };
}, Nt = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), h = (e, t, a) => e.currentParam && !(t in e.currentParam.attr) ? {
  ...e,
  currentParam: { ...e.currentParam, attr: { ...e.currentParam.attr, [t]: a } }
} : e, W = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Ce = {
  param: (e, t) => {
    const a = F(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? h(e, z, t) : e.currentCommand && !(z in e.currentCommand) ? { ...e, currentCommand: {
    ...U(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [z]: t
  } } : e,
  desc: (e, t) => e.currentParam ? h(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
  command: (e, t) => {
    const a = F(e);
    return a.commands.some((r) => r.command === t) ? a : { ...a, currentCommand: { command: t, args: [] }, currentParam: null };
  },
  arg: (e, t) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const a = {
        ...U(e.currentCommand),
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
  help: (e) => ({ ...F(e), currentContext: Ne }),
  option: (e, t) => {
    if (!e.currentParam) return e;
    const a = ((r, o) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }), currentOption: o } : { items: r.items, currentOption: o })(e.currentOption ?? {
      items: []
    }, t);
    return { ...e, currentOption: a };
  },
  value: (e, t) => {
    if (!e.currentOption) return e;
    const a = ((r, o) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: o }) } : {
      items: r.items
    })(e.currentOption, t);
    return { ...e, currentOption: a };
  },
  type: (e, t) => {
    if (((a) => a.endsWith(">") && a.startsWith("struct<"))(t)) {
      const a = t.slice(7, -1), r = h(e, ye, a);
      return h(r, Y, ye);
    }
    return e.currentParam ? h(e, Y, t) : e;
  },
  default: (e, t) => h(e, "default", t),
  on: (e, t) => h(e, "on", t),
  off: (e, t) => h(e, "off", t),
  min: (e, t) => h(e, "min", t),
  max: (e, t) => h(e, "max", t),
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
  author: (e, t) => W(e, "author", t),
  plugindesc: (e, t) => W(e, "plugindesc", t),
  url: (e, t) => W(e, "url", t)
}, St = (e) => Pt(((t) => wt(t, Ce))(e)), Pt = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: qt(e.commands),
  params: De(e.params)
}), De = (e) => e.reduce((t, a) => ({ [a.name]: bt(a), ...t }), {}), qt = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: De(a.args) };
  return { [a.command]: r, ...t };
}, {}), Ko = (e) => St(e), $o = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [o, p]) => {
    const d = gt(p);
    return { ...r, [o]: d };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e), At = (e = {}) => ({
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
}), Ct = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], Zo = (e) => ({
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
}), Jo = (e) => e.menuCommands[0], Qo = (e) => e.menuCommands[1], em = (e) => e.menuCommands[2], tm = (e) => e.menuCommands[3], am = (e) => e.menuCommands[4], rm = (e) => e.menuCommands[5], im = (e) => e.itemCategories[0], sm = (e) => e.itemCategories[1], nm = (e) => e.itemCategories[2], om = (e) => e.itemCategories[3], Dt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], mm = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Mt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], pm = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), jt = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Rt = (e = {}) => ({
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
}), I = { type: "boolean" }, Et = {
  type: "object",
  additionalProperties: !1,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: I,
    optDisplayTp: I,
    optDrawTitle: I,
    optExtraExp: I,
    optFloorDeath: I,
    optFollowers: I,
    optKeyItemsNumber: I,
    optSideView: I,
    optSlipDeath: I,
    optTransparent: I,
    optMessageSkip: I,
    optSplashScreen: I
  }
}, cm = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), Ft = (e) => ({
  armorTypes: P(e.armorTypes),
  elements: P(e.elements),
  equipTypes: P(e.equipTypes),
  weaponTypes: P(e.weaponTypes),
  skillTypes: P(e.skillTypes),
  variables: P(e.variables),
  switches: P(e.switches)
}), P = (e) => e ? [...e] : [], Bt = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], dm = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), lm = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), X = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Vt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), um = { title: "オプション", options: {
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
} }, ym = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, gm = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, bm = { title: "コマンド", options: {
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
} }, Me = {
  type: "object",
  additionalProperties: !1,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, je = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, Re = {
  additionalProperties: !1,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, C = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, Lt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, Ht = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, Ot = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, zt = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, Wt = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, q = { type: "array", items: { type: "string" } }, Xt = {
  additionalProperties: !1,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: q,
    skillTypes: q,
    elements: q,
    variables: q,
    equipTypes: q,
    switches: q,
    armorTypes: q
  }
}, c = { type: "string" }, fe = { type: "string", nullable: !0 }, i = { type: "string" }, Gt = {
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
      items: [c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, fe, c, c, fe, c, c],
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
}, Yt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Re },
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
}, G = {
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
}, Ut = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: G,
  boat: G,
  ship: G,
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
  attackMotions: { type: "array", items: Me }
} }, _t = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), H = new K({ strict: !0 }), Kt = ((e) => {
  const t = _t(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([Ut, Lt, Ht, jt, Et, Ot, je, Wt, Xt, Gt, zt, Yt]), $t = H.compile(Kt), Im = (e) => $t(e), Zt = H.compile(Re);
H.compile(Me);
const Jt = H.compile(je), Qt = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], ea = (e, t) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continue_ ?? "Continue", t, e.toTitle ?? "To Title", e.cancel ?? "Cancel", t, e.buy ?? "Buy", e.sell ?? "Sell"], s = (e, t) => typeof e == "string" ? e : t, fm = (e) => {
  var a, r, o, p, d, u, y, f, v, R, S, M, Q, ee, te, ae, re, ie, se, ne, oe, me;
  const t = aa(e.size);
  return {
    ...Rt(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Ct(e.sounds),
    editor: Vt(e.editing),
    advanced: At(e.advanced),
    title1Name: ((o = e.images) == null ? void 0 : o.title1Name) ?? "",
    title2Name: ((p = e.images) == null ? void 0 : p.title2Name) ?? "",
    ...Ft(e.dataNames ?? {}),
    magicSkills: _([]),
    airship: X((d = e.vehicles) == null ? void 0 : d.airship),
    boat: X((u = e.vehicles) == null ? void 0 : u.boat),
    ship: X((y = e.vehicles) == null ? void 0 : y.ship),
    defeatMe: m((f = e.me) == null ? void 0 : f.defeatMe),
    gameoverMe: m((v = e.me) == null ? void 0 : v.gameoverMe),
    titleBgm: m((R = e.bgm) == null ? void 0 : R.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((S = e.battleTest) == null ? void 0 : S.battleback1Name) ?? "",
    battleback2Name: ((M = e.battleTest) == null ? void 0 : M.battleback2Name) ?? "",
    testTroopId: ((Q = e.battleTest) == null ? void 0 : Q.testTroopId) ?? 0,
    testBattlers: ra((ee = e.battleTest) == null ? void 0 : ee.testBattlers, ia),
    battleBgm: m((te = e.bgm) == null ? void 0 : te.battleBgm),
    victoryMe: m((ae = e.me) == null ? void 0 : ae.victoryMe),
    editMapId: ((re = e.editorTemporary) == null ? void 0 : re.editMapId) ?? 0,
    battlerName: ((ie = e.editorTemporary) == null ? void 0 : ie.battlerName) ?? "",
    locale: "",
    startMapId: ((se = e.gameInit) == null ? void 0 : se.startMapId) ?? 0,
    startX: ((ne = e.gameInit) == null ? void 0 : ne.startX) ?? 0,
    startY: ((oe = e.gameInit) == null ? void 0 : oe.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ta(e.terms ?? {}),
    itemCategories: Dt(e.itemCategories),
    partyMembersArray: _((me = e.gameInit) == null ? void 0 : me.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Mt(e.menuComamnds)
  };
}, ta = (e) => {
  return { basic: Qt(e.basic ?? {}), commands: (a = e.commands ?? {}, ea(a, "")), params: Bt(e.params ?? {}), messages: (t = e.messages ?? {}, {
    actionFailure: s(t.actionFailure, "Action failed."),
    actorDamage: s(t.actorDamage, "%1 took %2 damage."),
    actorRecovery: s(t.actorRecovery, "%1 recovered %2 HP."),
    actorGain: s(t.actorGain, "%1 gained %2."),
    actorLoss: s(t.actorLoss, "%1 lost %2."),
    actorDrain: s(t.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: s(t.actorNoDamage, "%1 was not damaged."),
    actorNoHit: s(t.actorNoHit, "%1 was not hit."),
    alwaysDash: s(t.alwaysDash, "Always dash."),
    bgmVolume: s(t.bgmVolume, "BGM volume"),
    bgsVolume: s(t.bgsVolume, "BGS volume"),
    commandRemember: s(t.commandRemember, "Command remember."),
    criticalToActor: s(t.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: s(t.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: s(t.counterAttack, "%1 countered!"),
    debuffAdd: s(t.debuffAdd, "%1's %2 was lowered."),
    defeat: s(t.defeat, "Defeat."),
    enemyDamage: s(t.enemyDamage, "%1 took %2 damage."),
    enemyDrain: s(t.enemyDrain, "%1 drained %2 HP."),
    enemyGain: s(t.enemyGain, "%1 gained %2."),
    enemyLoss: s(t.enemyLoss, "%1 lost %2."),
    enemyNoDamage: s(t.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: s(t.enemyNoHit, "%1 was not hit."),
    enemyRecovery: s(t.enemyRecovery, "%1 recovered %2 HP."),
    evasion: s(t.evasion, "%1 evaded the attack!"),
    autosave: s(t.autosave, "Autosave"),
    escapeFailure: s(t.escapeFailure, "Escape failed."),
    escapeStart: s(t.escapeStart, "%1 started to escape!"),
    emerge: s(t.emerge, "%1 appeared!"),
    expNext: s(t.expNext, "Next level in %1 EXP."),
    expTotal: s(t.expTotal, "Total EXP: %1"),
    file: s(t.file, "File"),
    buffAdd: s(t.buffAdd, "%1's %2 was raised."),
    buffRemove: s(t.buffRemove, "%1's %2 was lowered."),
    obtainExp: s(t.obtainExp, "%1 EXP obtained."),
    obtainGold: s(t.obtainGold, "%1 gold obtained."),
    obtainItem: s(t.obtainItem, "%1 obtained %2."),
    obtainSkill: s(t.obtainSkill, "%1 learned %2."),
    levelUp: s(t.levelUp, "%1 leveled up!"),
    partyName: s(t.partyName, "Party"),
    loadMessage: s(t.loadMessage, "Load %1?"),
    meVolume: s(t.meVolume, "ME volume"),
    possession: s(t.possession, "Possession"),
    preemptive: s(t.preemptive, "%1 attacked first!"),
    saveMessage: s(t.saveMessage, "Save %1?"),
    seVolume: s(t.seVolume, "SE volume"),
    magicEvasion: s(t.magicEvasion, "%1 evaded the magic!"),
    magicReflection: s(t.magicReflection, "%1 reflected the magic!"),
    substitute: s(t.substitute, "%1 took the hit!"),
    surprise: s(t.surprise, "%1 surprised the enemy!"),
    touchUI: s(t.touchUI, "Touch UI"),
    useItem: s(t.useItem, "%1 used %2."),
    victory: s(t.victory, "Victory!")
  }) };
  var t, a;
}, _ = (e) => e ? [...e] : [], aa = (e) => ((t) => Jt(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, ra = (e, t) => e ? e.map(t) : [], ia = (e) => ((t) => Zt(t))(e) ? { actorId: e.actorId, equips: _(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
};
export {
  Un as $,
  Tn as A,
  kn as B,
  wn as C,
  Nn as D,
  Sn as E,
  Pn as F,
  qn as G,
  An as H,
  Cn as I,
  Dn as J,
  Mn as K,
  jn as L,
  Rn as M,
  En as N,
  et as O,
  tt as P,
  Fn as Q,
  Bn as R,
  Vn as S,
  Ln as T,
  Hn as U,
  On as V,
  zn as W,
  Wn as X,
  Xn as Y,
  Gn as Z,
  Yn as _,
  rn as a,
  da as a$,
  _n as a0,
  Kn as a1,
  $n as a2,
  rt as a3,
  Zn as a4,
  Jn as a5,
  Qn as a6,
  eo as a7,
  to as a8,
  D as a9,
  Ao as aA,
  Co as aB,
  Do as aC,
  Mo as aD,
  jo as aE,
  Ro as aF,
  Eo as aG,
  Fo as aH,
  Bo as aI,
  Vo as aJ,
  Lo as aK,
  Ho as aL,
  Oo as aM,
  zo as aN,
  Wo as aO,
  Xo as aP,
  Go as aQ,
  Yo as aR,
  Uo as aS,
  _o as aT,
  Ko as aU,
  $o as aV,
  an as aW,
  $ as aX,
  ma as aY,
  pa as aZ,
  ca as a_,
  ao as aa,
  ro as ab,
  io as ac,
  so as ad,
  no as ae,
  oo as af,
  mo as ag,
  po as ah,
  co as ai,
  lo as aj,
  uo as ak,
  yo as al,
  go as am,
  bo as an,
  Io as ao,
  fo as ap,
  vo as aq,
  ho as ar,
  xo as as,
  To as at,
  ko as au,
  wo as av,
  No as aw,
  So as ax,
  Po as ay,
  qo as az,
  sn as b,
  hr as b$,
  la as b0,
  ua as b1,
  ya as b2,
  ga as b3,
  Be as b4,
  ba as b5,
  Ia as b6,
  fa as b7,
  va as b8,
  ha as b9,
  Ua as bA,
  _a as bB,
  Ka as bC,
  $a as bD,
  Za as bE,
  Ja as bF,
  Qa as bG,
  er as bH,
  tr as bI,
  ar as bJ,
  rr as bK,
  ir as bL,
  sr as bM,
  nr as bN,
  or as bO,
  mr as bP,
  pr as bQ,
  cr as bR,
  dr as bS,
  lr as bT,
  ur as bU,
  yr as bV,
  gr as bW,
  br as bX,
  Ir as bY,
  fr as bZ,
  vr as b_,
  xa as ba,
  Ta as bb,
  ka as bc,
  wa as bd,
  Na as be,
  Sa as bf,
  Pa as bg,
  qa as bh,
  Aa as bi,
  Ca as bj,
  Da as bk,
  Ma as bl,
  ja as bm,
  Ra as bn,
  Ea as bo,
  Fa as bp,
  Ba as bq,
  Va as br,
  La as bs,
  Ha as bt,
  Oa as bu,
  za as bv,
  Wa as bw,
  Xa as bx,
  Ga as by,
  Ya as bz,
  nn as c,
  Ci as c$,
  xr as c0,
  Tr as c1,
  kr as c2,
  wr as c3,
  Nr as c4,
  Sr as c5,
  Pr as c6,
  qr as c7,
  Ar as c8,
  Cr as c9,
  ri as cA,
  ii as cB,
  si as cC,
  ni as cD,
  oi as cE,
  mi as cF,
  pi as cG,
  ci as cH,
  di as cI,
  li as cJ,
  ui as cK,
  yi as cL,
  gi as cM,
  bi as cN,
  Ii as cO,
  fi as cP,
  vi as cQ,
  hi as cR,
  xi as cS,
  Ti as cT,
  ki as cU,
  wi as cV,
  Ni as cW,
  Si as cX,
  Pi as cY,
  qi as cZ,
  Ai as c_,
  Dr as ca,
  Mr as cb,
  jr as cc,
  Rr as cd,
  Er as ce,
  Fr as cf,
  Br as cg,
  Vr as ch,
  Lr as ci,
  Hr as cj,
  Or as ck,
  zr as cl,
  Wr as cm,
  Xr as cn,
  Gr as co,
  Yr as cp,
  Ur as cq,
  _r as cr,
  Kr as cs,
  $r as ct,
  Zr as cu,
  Jr as cv,
  Qr as cw,
  ei as cx,
  ti as cy,
  ai as cz,
  on as d,
  js as d$,
  Di as d0,
  Mi as d1,
  ji as d2,
  Ri as d3,
  Ei as d4,
  Fi as d5,
  Bi as d6,
  Vi as d7,
  Li as d8,
  Hi as d9,
  ls as dA,
  us as dB,
  ys as dC,
  gs as dD,
  bs as dE,
  ze as dF,
  We as dG,
  Z as dH,
  Is as dI,
  fs as dJ,
  vs as dK,
  hs as dL,
  Xe as dM,
  xs as dN,
  Ts as dO,
  ks as dP,
  ws as dQ,
  Ge as dR,
  Ns as dS,
  Ss as dT,
  Ps as dU,
  qs as dV,
  As as dW,
  Cs as dX,
  Ms as dY,
  Ue as dZ,
  Ds as d_,
  Oi as da,
  zi as db,
  Wi as dc,
  Xi as dd,
  Gi as de,
  Yi as df,
  Ui as dg,
  _i as dh,
  Ki as di,
  $i as dj,
  Zi as dk,
  Ji as dl,
  Qi as dm,
  es as dn,
  ts as dp,
  as as dq,
  rs as dr,
  is as ds,
  ss as dt,
  ns as du,
  os as dv,
  ms as dw,
  ps as dx,
  cs as dy,
  ds as dz,
  N as e,
  Rs as e0,
  Es as e1,
  Fs as e2,
  Bs as e3,
  he as e4,
  Vs as e5,
  Ls as e6,
  Hs as e7,
  xe as e8,
  Os as e9,
  im as eA,
  sm as eB,
  nm as eC,
  om as eD,
  Dt as eE,
  mm as eF,
  Mt as eG,
  pm as eH,
  Rt as eI,
  cm as eJ,
  Ft as eK,
  dm as eL,
  Bt as eM,
  lm as eN,
  X as eO,
  Vt as eP,
  um as eQ,
  ym as eR,
  gm as eS,
  bm as eT,
  zs as ea,
  Ws as eb,
  Xs as ec,
  Gs as ed,
  Ys as ee,
  Us as ef,
  _s as eg,
  Ks as eh,
  $s as ei,
  Zs as ej,
  Js as ek,
  Qs as el,
  en as em,
  tn as en,
  _e as eo,
  Im as ep,
  fm as eq,
  At as er,
  Ct as es,
  Zo as et,
  Jo as eu,
  Qo as ev,
  em as ew,
  tm as ex,
  am as ey,
  rm as ez,
  mn as f,
  pn as g,
  cn as h,
  dn as i,
  ln as j,
  un as k,
  yn as l,
  oa as m,
  gn as n,
  bn as o,
  In as p,
  $e as q,
  fn as r,
  Te as s,
  Ke as t,
  vn as u,
  Ze as v,
  Je as w,
  hn as x,
  Qe as y,
  xn as z
};
