import K from "ajv";
import { c as Ee, a as Fe, m as o } from "./make.es.js";
const $ = (e, t) => `\\${e}[${t}]`, oa = (e, t) => t.map((a, r) => ({
  text: a,
  controlChar: $(e, r)
})), ma = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({ char: t[1], id: parseInt(t[2], 10) })), pa = (e) => e.map((t) => ({
  text: t.name,
  controlChar: $("N", t.id)
})), ca = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: $("V", a) })).filter((t) => t.text !== ""), da = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), la = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), ua = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), ya = (e = {}) => ({ actorHp: e.actorHp ?? 0, actorId: e.actorId ?? 0, enemyValid: e.enemyValid ?? 0, switchValid: e.switchValid ?? 0 }), Be = (e = {}) => ({
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
}), ga = 0, ba = 101, Ia = 401, fa = 102, va = 402, ha = 103, xa = 104, Ta = 105, ka = 405, wa = 108, Na = 408, Sa = 109, Pa = 111, qa = 411, Aa = 112, Ca = 113, Da = 115, Ma = 117, ja = 118, Ra = 119, Ea = 121, Fa = 122, Ba = 123, Va = 124, La = 125, Ha = 126, Oa = 127, za = 128, Wa = 129, Xa = 132, Ga = 133, Ya = 134, Ua = 135, _a = 136, Ka = 137, $a = 138, Za = 139, Ja = 140, Qa = 201, er = 202, tr = 203, ar = 204, rr = 205, ir = 206, sr = 211, nr = 212, or = 213, mr = 214, pr = 216, cr = 217, dr = 221, lr = 222, ur = 223, yr = 224, gr = 225, br = 230, Ir = 231, fr = 232, vr = 233, hr = 234, xr = 235, Tr = 236, kr = 241, wr = 242, Nr = 243, Sr = 244, Pr = 245, qr = 246, Ar = 249, Cr = 250, Dr = 251, Mr = 261, jr = 282, Rr = 283, Er = 284, Fr = 285, Br = 301, Vr = 302, Lr = 605, Hr = 303, Or = 311, zr = 312, Wr = 313, Xr = 314, Gr = 315, Yr = 320, Ur = 321, _r = 322, Kr = 323, $r = 324, Zr = 325, Jr = 331, Qr = 332, ei = 333, ti = 334, ai = 335, ri = 336, ii = 337, si = 339, ni = 340, oi = 351, mi = 342, pi = 352, ci = 353, di = 354, li = 355, ui = 655, yi = 356, gi = 357, bi = (e, t, a = 0) => ({
  code: e,
  indent: a,
  parameters: t
}), Ii = 0, fi = 1, vi = 2, hi = 3, xi = 4, Ti = 5, ki = 6, wi = 7, Ni = 8, Si = 9, Pi = 10, qi = 11, Ai = 12, Ci = 13, Di = 14, Mi = 15, ji = 16, Ri = 17, Ei = 18, Fi = 19, Bi = 20, Vi = 21, Li = 22, Hi = 23, Oi = 24, zi = 25, Wi = 26, Xi = 27, Gi = 28, Yi = 29, Ui = 30, _i = 31, Ki = 32, $i = 33, Zi = 34, Ji = 35, Qi = 36, es = 37, ts = 38, as = 39, rs = 40, is = 41, ss = 42, ns = 43, os = 44, ms = 45, ps = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), cs = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), ds = () => ({ conditions: Be(), list: [], directionFix: !1, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: !1, skippable: !1, wait: !1 } }), ls = (e = {}) => ({
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
}), us = (e = { id: 0 }) => {
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
}), Oe = ve.compile(Le), ys = (e) => He(e), gs = (e) => Oe(e), ze = { actor: { title: "アクター", options: {
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
}, Z = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), bs = (e = {}) => ({
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
}), Is = (e) => ({
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
}), fs = (e = {}) => ({
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
}), vs = (e = {}) => ({ name: e.name ?? "", id: e.id ?? 0, traits: [], note: e.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e.learnings ?? [], expParams: e.expParams ?? [] }), Xe = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), hs = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), xs = (e = {}) => {
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
}, Ts = (e = {}) => ({
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
}), d = "{name}", A = "{name} * {value}%", pe = "{name} + {value}%", ce = "{value}", Ge = { title: "特徴", options: {
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
  elementRate: { title: "属性有効度", format: A },
  debuffRate: { title: "弱体有効度", format: A },
  stateRate: { title: "ステート有効度", format: A },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: pe },
  attackSpeed: { title: "攻撃速度補正", format: ce },
  attackTimes: {
    title: "攻撃追加回数",
    format: ce
  },
  actionPlus: { title: "行動追加", format: A },
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
} }, Ye = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, ks = (e, t, a) => {
  const r = Ee(Ye);
  return Fe(t, a, r, e.pattern, (m) => m.dataId);
}, ws = (e = {}) => ({
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
}), Ns = {
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
}, Ss = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Ps = 0, qs = 1, As = 2, de = "{name} {value1}%", O = "{value1}% + {value2}", le = "{name} {value1}ターン", j = "{name}", Ue = { title: "使用効果", options: {
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
} }, Cs = 0, Ds = (e, t, a) => {
  const r = a.find((p) => p.id === t.dataId), m = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", m);
}, Ms = { title: "アイテム", options: { consumable: "消耗品" } }, js = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Rs = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Es = (e = {}) => ({
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
}), Fs = (e = {}) => ({
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
}), he = (e, t) => `<${e}:${t}>`, Bs = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Vs = (e, t) => xe(e.note, (a, r) => t(a, r, e)), Ls = (e) => xe(e, (t, a) => [t, a]), xe = (e, t) => {
  const a = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(a), (r) => t(r[1], r[2]));
}, Hs = (e, t) => {
  if (e.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (a, r, m) => {
    const p = t(r, m);
    if (p.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return he(r, p);
  });
}, Os = (e, t) => {
  const a = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(e.matchAll(a)).find((m) => m[1] === t);
  return r ? r[2] : void 0;
}, zs = (e, t, a) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(r, (m, p) => p === t ? he(p, a) : m);
}, Ws = "data", Xs = "actor", Gs = "map", Ys = "enemy", Us = "state", _s = "skill", Ks = "item", $s = "weapon", Zs = "armor", Js = "class", Qs = "common_event", en = "troop", _e = {
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
}, tn = () => ({ rpg: { damage: We, data: ze, traits: Ge, itemEffect: Ue }, global: _e }), an = (e, t = 0) => ({ code: 320, parameters: [e.actorId, e.name], indent: t }), rn = (e, t = 0) => ({
  code: 324,
  parameters: [e.actorId, e.nickname],
  indent: t
}), sn = (e, t = 0) => ({ code: 325, parameters: [e.actorId, e.profile], indent: t }), nn = (e, t) => N(e, o({ name: t })), N = (e, t, a = 0) => ({
  code: e,
  parameters: [o(t)],
  indent: a
}), on = (e, t = 0) => N(241, e, t), mn = (e, t = 0) => N(245, e, t), pn = (e, t = 0) => N(249, e, t), cn = (e, t = 0) => N(250, e, t), dn = (e, t = 0) => N(132, e, t), ln = (e, t = 0) => N(133, e, t), un = (e, t = 0) => N(139, e, t), yn = (e, t = 0) => ({
  code: 117,
  indent: t,
  parameters: Ke(e ?? {})
}), gn = (e) => ({ eventId: e[0] }), Ke = (e) => [e.eventId ?? 0], bn = (e) => ({ min: e[0], max: e[1], value: e[2] }), $e = (e) => [e.min, e.max, e.value], In = (e, t = 0) => ({
  code: 121,
  indent: t,
  parameters: $e(e)
}), Te = (e) => [e], fn = (e) => ({ comment: e[0] }), Ze = (e, t = 0) => ({ code: 108, indent: t, parameters: Te(e) }), Je = (e, t = 0) => ({
  code: 408,
  indent: t,
  parameters: Te(e)
}), vn = (e, t = 0) => e.map((a, r) => r === 0 ? Ze(a, t) : Je(a, t)), Qe = (e) => [e.variableId ?? 0, e.digits ?? 0], hn = (e) => ({ variableId: e[0], digits: e[1] }), xn = (e, t = 0) => ({
  code: 103,
  indent: t,
  parameters: Qe(e ?? {})
}), Tn = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), kn = (e) => ({ index: e[0], name: e[1] }), wn = (e) => [e.index ?? 0, e.name ?? ""], Nn = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Sn = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Pn = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), qn = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), An = (e, t = 0) => ({
  code: 101,
  indent: t,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Cn = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Dn = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], Mn = (e, t = 0) => ({ code: 401, indent: t, parameters: [e] }), et = (e, t = 0) => ({
  code: 355,
  indent: t,
  parameters: [e]
}), tt = (e, t = 0) => ({ code: 655, indent: t, parameters: [e] }), jn = (e, t = 0) => e.map((a, r) => r === 0 ? et(a, t) : tt(a, t)), Rn = 0, En = 1, Fn = 2, Bn = 3, Vn = 4, at = {
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
}, Ln = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], Hn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], On = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], zn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Wn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], Xn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], Gn = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, at[t.param]], Yn = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Un = (e, t) => {
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
}, rt = (e) => [...e], _n = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: rt(e.parameters)
}), it = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Kn = (e) => e.parameters.every(it), h = new K({ strict: !0 }), st = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: !1
}), $n = (e) => st(e), nt = h.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Zn = (e) => nt(e), ot = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: !1
}), Jn = (e) => ot(e), mt = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: !1
}), D = (e) => mt(e), pt = h.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Qn = (e) => pt(e), ct = h.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), eo = (e) => ct(e), dt = h.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), to = (e) => dt(e), lt = h.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), ao = (e) => lt(e), ut = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), ro = (e) => ut(e), io = (e) => D(e) && e.code === 401, so = (e) => D(e) && e.code === 405, no = (e) => D(e) && e.code === 108, oo = (e) => D(e) && e.code === 408, mo = (e) => D(e) && e.code === 355, po = (e) => D(e) && e.code === 655, co = "bgm", lo = "se", uo = "me", yo = "bgs", go = "battlebacks1", bo = "battlebacks2", Io = "characters", fo = "enemies", vo = "faces", ho = "parallaxes", xo = "pictures", To = "sv_actors", ko = "sv_enemies", wo = "system", No = "tilesets", So = "titles1", Po = "titles2", qo = "System.json", Ao = "Actors.json", Co = "Classes.json", Do = "Skills.json", Mo = "Items.json", jo = "Weapons.json", Ro = "Armors.json", Eo = "Enemies.json", Fo = "Troops.json", Bo = "States.json", Vo = "Animations.json", Lo = "Tilesets.json", Ho = "CommonEvents.json", Oo = "MapInfos.json", zo = "data", Wo = "img", Xo = "audio", Go = "js", ke = (e, t) => ({
  type: "array",
  items: t,
  ...v(e),
  ...k(e.default)
}), v = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), k = (e) => e !== void 0 ? {
  default: e
} : {}, ue = (e) => e === void 0 || e === 0, yt = (e) => ke(e, { type: "string" }), gt = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({
        type: "string",
        ...v(a),
        ...k(a.default)
      }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...k(a.default), ...v(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...k(a.default), ...v(a), ...a.options ? {
        enum: a.options.map((r) => r.value)
      } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return yt(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: ue(a.decimals) ? "integer" : "number"
      }, ...k(a.default), ...v(a) }))(e);
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
      return ((a) => ({ type: ue(a.decimals) ? "integer" : "number", ...k(a.default), ...v(a) }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...k(a.default), ...v(a) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...k(a.default), ...v(a) }))(e);
    case "struct":
      return { $ref: `#/definitions/${(t = e).struct}`, ...v(t) };
    default:
      return {};
  }
  var t;
}, we = (e, t) => Object.entries(t).reduce((a, [r, m]) => {
  if (r in e) {
    const p = e[r];
    if (typeof p == "string") return { ...a, [r]: m(p) };
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
}, u = (e, t) => {
  const a = {
    default: Pe,
    text: n,
    desc: n,
    parent: n
  };
  return B(t, e.attr, a);
}, y = (e, t) => {
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
  actor: (e) => y(e, "actor"),
  "actor[]": (e) => u(e, "actor[]"),
  class: (e) => y(e, "class"),
  "class[]": (e) => u(e, "class[]"),
  skill: (e) => y(e, "skill"),
  "skill[]": (e) => u(e, "skill[]"),
  item: (e) => y(e, "item"),
  "item[]": (e) => u(e, "item[]"),
  weapon: (e) => y(e, "weapon"),
  "weapon[]": (e) => u(e, "weapon[]"),
  armor: (e) => y(e, "armor"),
  "armor[]": (e) => u(e, "armor[]"),
  state: (e) => y(e, "state"),
  "state[]": (e) => u(e, "state[]"),
  enemy: (e) => y(e, "enemy"),
  "enemy[]": (e) => u(e, "enemy[]"),
  common_event: (e) => y(e, "common_event"),
  "common_event[]": (e) => u(e, "common_event[]"),
  switch: (e) => y(e, "switch"),
  "switch[]": (e) => u(e, "switch[]"),
  variable: (e) => y(e, "variable"),
  "variable[]": (e) => u(e, "variable[]"),
  troop: (e) => y(e, "troop"),
  "troop[]": (e) => u(e, "troop[]"),
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
  const a = e.lines.reduce((r, m) => {
    const p = m.trim().replace(/^\*\s?/, "");
    if (!p.startsWith("@")) return r.currentContext === Ne ? { ...r, helpLines: r.helpLines.concat(p) } : r;
    const [l, ...f] = p.slice(1).split(" "), x = f.join(" ").trim(), T = t[l];
    return T ? T(r, x) : r;
  }, Nt());
  return F(a);
}, wt = (e, t) => {
  const a = ((l) => {
    const f = l.split(`
`), x = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: E
    }, T = f.reduce((b, R) => {
      const S = R.trim(), M = S.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return M ? ft(b, M) : S === "/*:" ? vt(b) : S === "*/" ? b.lines.length > 0 ? J(b) : b : { ...b, lines: b.lines.concat([S]) };
    }, x);
    return { structs: T.structs, bodies: T.bodies };
  })(e), r = a.structs.map((l) => ((f) => {
    const x = Ie(f, Ce);
    return { name: f.struct, params: x.params };
  })(l)), m = ((l) => {
    if (l.bodies.length !== 0) return l.bodies[0];
  })(a);
  if (!m) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const p = Ie(m, t);
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
}), I = (e, t, a) => e.currentParam && !(t in e.currentParam.attr) ? {
  ...e,
  currentParam: { ...e.currentParam, attr: { ...e.currentParam.attr, [t]: a } }
} : e, W = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Ce = {
  param: (e, t) => {
    const a = F(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? I(e, z, t) : e.currentCommand && !(z in e.currentCommand) ? { ...e, currentCommand: {
    ...U(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [z]: t
  } } : e,
  desc: (e, t) => e.currentParam ? I(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
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
    const a = ((r, m) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }), currentOption: m } : { items: r.items, currentOption: m })(e.currentOption ?? {
      items: []
    }, t);
    return { ...e, currentOption: a };
  },
  value: (e, t) => {
    if (!e.currentOption) return e;
    const a = ((r, m) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: m }) } : {
      items: r.items
    })(e.currentOption, t);
    return { ...e, currentOption: a };
  },
  type: (e, t) => {
    if (((a) => a.endsWith(">") && a.startsWith("struct<"))(t)) {
      const a = t.slice(7, -1), r = I(e, ye, a);
      return I(r, Y, ye);
    }
    return e.currentParam ? I(e, Y, t) : e;
  },
  default: (e, t) => I(e, "default", t),
  on: (e, t) => I(e, "on", t),
  off: (e, t) => I(e, "off", t),
  min: (e, t) => I(e, "min", t),
  max: (e, t) => I(e, "max", t),
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
}, {}), Yo = (e) => St(e), Uo = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [m, p]) => {
    const l = gt(p);
    return { ...r, [m]: l };
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
}), Ct = (e = {}) => [o(e.cursor), o(e.ok), o(e.cancel), o(e.buzzer), o(e.equip), o(e.save), o(e.load), o(e.battleStart), o(e.escape), o(e.enemyAttack), o(e.enemyDamage), o(e.enemyCollapse), o(e.bossCollapes1), o(e.bossCollapes2), o(e.actorDamage), o(e.actorCollapse), o(e.playRecovery), o(e.playMiss), o(e.playEvasion), o(e.playMagicEvasion), o(e.playReflection), o(e.shop), o(e.useItem), o(e.useSkill)], _o = (e) => ({
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
}), Ko = (e) => e.menuCommands[0], $o = (e) => e.menuCommands[1], Zo = (e) => e.menuCommands[2], Jo = (e) => e.menuCommands[3], Qo = (e) => e.menuCommands[4], em = (e) => e.menuCommands[5], tm = (e) => e.itemCategories[0], am = (e) => e.itemCategories[1], rm = (e) => e.itemCategories[2], im = (e) => e.itemCategories[3], Dt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], sm = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Mt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], nm = (e) => ({
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
}), g = { type: "boolean" }, Et = {
  type: "object",
  additionalProperties: !1,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: g,
    optDisplayTp: g,
    optDrawTitle: g,
    optExtraExp: g,
    optFloorDeath: g,
    optFollowers: g,
    optKeyItemsNumber: g,
    optSideView: g,
    optSlipDeath: g,
    optTransparent: g,
    optMessageSkip: g,
    optSplashScreen: g
  }
}, om = (e = {}) => ({
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
}), P = (e) => e ? [...e] : [], Bt = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], mm = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), pm = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), X = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: o(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Vt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), cm = { title: "オプション", options: {
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
} }, dm = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, lm = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, um = { title: "コマンド", options: {
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
})([Ut, Lt, Ht, jt, Et, Ot, je, Wt, Xt, Gt, zt, Yt]), $t = H.compile(Kt), ym = (e) => $t(e), Zt = H.compile(Re);
H.compile(Me);
const Jt = H.compile(je), Qt = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], ea = (e, t) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continue_ ?? "Continue", t, e.toTitle ?? "To Title", e.cancel ?? "Cancel", t, e.buy ?? "Buy", e.sell ?? "Sell"], s = (e, t) => typeof e == "string" ? e : t, gm = (e) => {
  var a, r, m, p, l, f, x, T, b, R, S, M, Q, ee, te, ae, re, ie, se, ne, oe, me;
  const t = aa(e.size);
  return {
    ...Rt(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Ct(e.sounds),
    editor: Vt(e.editing),
    advanced: At(e.advanced),
    title1Name: ((m = e.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((p = e.images) == null ? void 0 : p.title2Name) ?? "",
    ...Ft(e.dataNames ?? {}),
    magicSkills: _([]),
    airship: X((l = e.vehicles) == null ? void 0 : l.airship),
    boat: X((f = e.vehicles) == null ? void 0 : f.boat),
    ship: X((x = e.vehicles) == null ? void 0 : x.ship),
    defeatMe: o((T = e.me) == null ? void 0 : T.defeatMe),
    gameoverMe: o((b = e.me) == null ? void 0 : b.gameoverMe),
    titleBgm: o((R = e.bgm) == null ? void 0 : R.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((S = e.battleTest) == null ? void 0 : S.battleback1Name) ?? "",
    battleback2Name: ((M = e.battleTest) == null ? void 0 : M.battleback2Name) ?? "",
    testTroopId: ((Q = e.battleTest) == null ? void 0 : Q.testTroopId) ?? 0,
    testBattlers: ra((ee = e.battleTest) == null ? void 0 : ee.testBattlers, ia),
    battleBgm: o((te = e.bgm) == null ? void 0 : te.battleBgm),
    victoryMe: o((ae = e.me) == null ? void 0 : ae.victoryMe),
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
  et as L,
  tt as M,
  jn as N,
  Rn as O,
  En as P,
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
  ua as a$,
  rt as a0,
  _n as a1,
  Kn as a2,
  $n as a3,
  Zn as a4,
  Jn as a5,
  D as a6,
  Qn as a7,
  eo as a8,
  to as a9,
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
  tn as aT,
  $ as aU,
  oa as aV,
  ma as aW,
  pa as aX,
  ca as aY,
  da as aZ,
  la as a_,
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
  Tr as b$,
  ya as b0,
  Be as b1,
  ga as b2,
  ba as b3,
  Ia as b4,
  fa as b5,
  va as b6,
  ha as b7,
  xa as b8,
  Ta as b9,
  Ka as bA,
  $a as bB,
  Za as bC,
  Ja as bD,
  Qa as bE,
  er as bF,
  tr as bG,
  ar as bH,
  rr as bI,
  ir as bJ,
  sr as bK,
  nr as bL,
  or as bM,
  mr as bN,
  pr as bO,
  cr as bP,
  dr as bQ,
  lr as bR,
  ur as bS,
  yr as bT,
  gr as bU,
  br as bV,
  Ir as bW,
  fr as bX,
  vr as bY,
  hr as bZ,
  xr as b_,
  ka as ba,
  wa as bb,
  Na as bc,
  Sa as bd,
  Pa as be,
  qa as bf,
  Aa as bg,
  Ca as bh,
  Da as bi,
  Ma as bj,
  ja as bk,
  Ra as bl,
  Ea as bm,
  Fa as bn,
  Ba as bo,
  Va as bp,
  La as bq,
  Ha as br,
  Oa as bs,
  za as bt,
  Wa as bu,
  Xa as bv,
  Ga as bw,
  Ya as bx,
  Ua as by,
  _a as bz,
  nn as c,
  Mi as c$,
  kr as c0,
  wr as c1,
  Nr as c2,
  Sr as c3,
  Pr as c4,
  qr as c5,
  Ar as c6,
  Cr as c7,
  Dr as c8,
  Mr as c9,
  si as cA,
  ni as cB,
  oi as cC,
  mi as cD,
  pi as cE,
  ci as cF,
  di as cG,
  li as cH,
  ui as cI,
  yi as cJ,
  gi as cK,
  bi as cL,
  Ii as cM,
  fi as cN,
  vi as cO,
  hi as cP,
  xi as cQ,
  Ti as cR,
  ki as cS,
  wi as cT,
  Ni as cU,
  Si as cV,
  Pi as cW,
  qi as cX,
  Ai as cY,
  Ci as cZ,
  Di as c_,
  jr as ca,
  Rr as cb,
  Er as cc,
  Fr as cd,
  Br as ce,
  Vr as cf,
  Lr as cg,
  Hr as ch,
  Or as ci,
  zr as cj,
  Wr as ck,
  Xr as cl,
  Gr as cm,
  Yr as cn,
  Ur as co,
  _r as cp,
  Kr as cq,
  $r as cr,
  Zr as cs,
  Jr as ct,
  Qr as cu,
  ei as cv,
  ti as cw,
  ai as cx,
  ri as cy,
  ii as cz,
  N as d,
  Es as d$,
  ji as d0,
  Ri as d1,
  Ei as d2,
  Fi as d3,
  Bi as d4,
  Vi as d5,
  Li as d6,
  Hi as d7,
  Oi as d8,
  zi as d9,
  ys as dA,
  gs as dB,
  ze as dC,
  We as dD,
  Z as dE,
  bs as dF,
  Is as dG,
  fs as dH,
  vs as dI,
  Xe as dJ,
  hs as dK,
  xs as dL,
  Ts as dM,
  ks as dN,
  Ge as dO,
  ws as dP,
  Ns as dQ,
  Ss as dR,
  Ps as dS,
  qs as dT,
  As as dU,
  Ds as dV,
  Ue as dW,
  Cs as dX,
  Ms as dY,
  js as dZ,
  Rs as d_,
  Wi as da,
  Xi as db,
  Gi as dc,
  Yi as dd,
  Ui as de,
  _i as df,
  Ki as dg,
  $i as dh,
  Zi as di,
  Ji as dj,
  Qi as dk,
  es as dl,
  ts as dm,
  as as dn,
  rs as dp,
  is as dq,
  ss as dr,
  ns as ds,
  os as dt,
  ms as du,
  ps as dv,
  cs as dw,
  ds as dx,
  ls as dy,
  us as dz,
  on as e,
  Fs as e0,
  he as e1,
  Bs as e2,
  Vs as e3,
  Ls as e4,
  Hs as e5,
  Os as e6,
  zs as e7,
  Ws as e8,
  Xs as e9,
  Dt as eA,
  sm as eB,
  Mt as eC,
  nm as eD,
  Rt as eE,
  om as eF,
  Ft as eG,
  mm as eH,
  Bt as eI,
  pm as eJ,
  X as eK,
  Vt as eL,
  cm as eM,
  dm as eN,
  lm as eO,
  um as eP,
  Gs as ea,
  Ys as eb,
  Us as ec,
  _s as ed,
  Ks as ee,
  $s as ef,
  Zs as eg,
  Js as eh,
  Qs as ei,
  en as ej,
  _e as ek,
  ym as el,
  gm as em,
  At as en,
  Ct as eo,
  _o as ep,
  Ko as eq,
  $o as er,
  Zo as es,
  Jo as et,
  Qo as eu,
  em as ev,
  tm as ew,
  am as ex,
  rm as ey,
  im as ez,
  mn as f,
  pn as g,
  cn as h,
  dn as i,
  ln as j,
  un as k,
  yn as l,
  an as m,
  gn as n,
  bn as o,
  $e as p,
  In as q,
  Te as r,
  fn as s,
  Ke as t,
  Ze as u,
  Je as v,
  vn as w,
  Qe as x,
  hn as y,
  xn as z
};
