import K from "ajv";
import { c as Ee, a as Fe, m as o } from "./make.es.js";
const $ = (e, t) => `\\${e}[${t}]`, na = (e, t) => t.map((a, r) => ({
  text: a,
  controlChar: $(e, r)
})), oa = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({ char: t[1], id: parseInt(t[2], 10) })), ma = (e) => e.map((t) => ({
  text: t.name,
  controlChar: $("N", t.id)
})), pa = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: $("V", a) })).filter((t) => t.text !== ""), ca = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), da = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), la = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), ua = (e = {}) => ({ actorHp: e.actorHp ?? 0, actorId: e.actorId ?? 0, enemyValid: e.enemyValid ?? 0, switchValid: e.switchValid ?? 0 }), Be = (e = {}) => ({
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
}), ya = 0, ga = 101, ba = 401, Ia = 102, fa = 402, va = 103, ha = 104, xa = 105, Ta = 405, ka = 108, wa = 408, Na = 109, Sa = 111, Pa = 411, qa = 112, Aa = 113, Ca = 115, Da = 117, Ma = 118, ja = 119, Ra = 121, Ea = 122, Fa = 123, Ba = 124, Va = 125, La = 126, Ha = 127, Oa = 128, za = 129, Wa = 132, Xa = 133, Ga = 134, Ya = 135, Ua = 136, _a = 137, Ka = 138, $a = 139, Za = 140, Ja = 201, Qa = 202, er = 203, tr = 204, ar = 205, rr = 206, ir = 211, sr = 212, nr = 213, or = 214, mr = 216, pr = 217, cr = 221, dr = 222, lr = 223, ur = 224, yr = 225, gr = 230, br = 231, Ir = 232, fr = 233, vr = 234, hr = 235, xr = 236, Tr = 241, kr = 242, wr = 243, Nr = 244, Sr = 245, Pr = 246, qr = 249, Ar = 250, Cr = 251, Dr = 261, Mr = 282, jr = 283, Rr = 284, Er = 285, Fr = 301, Br = 302, Vr = 605, Lr = 303, Hr = 311, Or = 312, zr = 313, Wr = 314, Xr = 315, Gr = 320, Yr = 321, Ur = 322, _r = 323, Kr = 324, $r = 325, Zr = 331, Jr = 332, Qr = 333, ei = 334, ti = 335, ai = 336, ri = 337, ii = 339, si = 340, ni = 351, oi = 342, mi = 352, pi = 353, ci = 354, di = 355, li = 655, ui = 356, yi = 357, gi = (e, t, a = 0) => ({
  code: e,
  indent: a,
  parameters: t
}), bi = 0, Ii = 1, fi = 2, vi = 3, hi = 4, xi = 5, Ti = 6, ki = 7, wi = 8, Ni = 9, Si = 10, Pi = 11, qi = 12, Ai = 13, Ci = 14, Di = 15, Mi = 16, ji = 17, Ri = 18, Ei = 19, Fi = 20, Bi = 21, Vi = 22, Li = 23, Hi = 24, Oi = 25, zi = 26, Wi = 27, Xi = 28, Gi = 29, Yi = 30, Ui = 31, _i = 32, Ki = 33, $i = 34, Zi = 35, Ji = 36, Qi = 37, es = 38, ts = 39, as = 40, rs = 41, is = 42, ss = 43, ns = 44, os = 45, ms = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), ps = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), cs = () => ({ conditions: Be(), list: [], directionFix: !1, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: !1, skippable: !1, wait: !1 } }), ds = (e = {}) => ({
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
}), ls = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, Ve = {
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
}, ve = new K({
  strict: !0
}), Le = ve.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), He = ve.compile(Ve), us = (e) => Le(e), ys = (e) => He(e), Oe = {
  actor: {
    title: "アクター",
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
  class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: { title: "防具", options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  } },
  enemy: { title: "敵キャラ", options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" } },
  item: { title: "アイテム", options: { consumable: "消耗品" } },
  skill: { title: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } },
  state: { title: "ステート", options: {
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
  weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: {
    title: "",
    options: { scope: "範囲", speed: "速度補正", successRate: "成功率" }
  },
  commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } }
}, ze = {
  title: "ダメージ",
  options: {}
}, Z = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), gs = (e = {}) => ({
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
}), bs = (e) => ({
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
}), Is = (e = {}) => ({
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
}), fs = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), We = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), vs = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), hs = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => We())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, xs = (e = {}) => ({
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
}), d = "{name}", A = "{name} * {value}%", pe = "{name} + {value}%", ce = "{value}", Xe = { title: "特徴", options: {
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
} }, Ge = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Ts = (e, t, a) => {
  const r = Ee(Ge);
  return Fe(t, a, r, e.pattern, (m) => m.dataId);
}, ks = (e = {}) => ({
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
}), ws = {
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
}, Ns = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Ss = 0, Ps = 1, qs = 2, de = "{name} {value1}%", O = "{value1}% + {value2}", le = "{name} {value1}ターン", j = "{name}", Ye = { title: "使用効果", options: {
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
} }, As = 0, Cs = (e, t, a) => {
  const r = a.find((p) => p.id === t.dataId), m = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", m);
}, Ds = { title: "アイテム", options: { consumable: "消耗品" } }, Ms = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, js = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Rs = (e = {}) => ({
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
}), Es = (e = {}) => ({
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
}), he = (e, t) => `<${e}:${t}>`, Fs = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Bs = (e, t) => xe(e.note, (a, r) => t(a, r, e)), Vs = (e) => xe(e, (t, a) => [t, a]), xe = (e, t) => {
  const a = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e.matchAll(a), (r) => t(r[1], r[2]));
}, Ls = (e, t) => {
  if (e.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (a, r, m) => {
    const p = t(r, m);
    if (p.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return he(r, p);
  });
}, Hs = (e, t) => {
  const a = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r = Array.from(e.matchAll(a)).find((m) => m[1] === t);
  return r ? r[2] : void 0;
}, Os = (e, t, a) => {
  const r = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e.replace(r, (m, p) => p === t ? he(p, a) : m);
}, zs = "data", Ws = "actor", Xs = "map", Gs = "enemy", Ys = "state", Us = "skill", _s = "item", Ks = "weapon", $s = "armor", Zs = "class", Js = "common_event", Qs = "troop", Ue = {
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
}, en = () => ({ rpg: { damage: ze, data: Oe, traits: Xe, itemEffect: Ye }, global: Ue }), _e = (e = {}) => ({
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
}), Ke = (e = {}) => [o(e.cursor), o(e.ok), o(e.cancel), o(e.buzzer), o(e.equip), o(e.save), o(e.load), o(e.battleStart), o(e.escape), o(e.enemyAttack), o(e.enemyDamage), o(e.enemyCollapse), o(e.bossCollapes1), o(e.bossCollapes2), o(e.actorDamage), o(e.actorCollapse), o(e.playRecovery), o(e.playMiss), o(e.playEvasion), o(e.playMagicEvasion), o(e.playReflection), o(e.shop), o(e.useItem), o(e.useSkill)], tn = (e) => ({
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
}), an = (e) => e.menuCommands[0], rn = (e) => e.menuCommands[1], sn = (e) => e.menuCommands[2], nn = (e) => e.menuCommands[3], on = (e) => e.menuCommands[4], mn = (e) => e.menuCommands[5], pn = (e) => e.itemCategories[0], cn = (e) => e.itemCategories[1], dn = (e) => e.itemCategories[2], ln = (e) => e.itemCategories[3], $e = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], un = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Ze = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], yn = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), Je = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Qe = (e = {}) => ({
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
}), u = { type: "boolean" }, et = {
  type: "object",
  additionalProperties: !1,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: u,
    optDisplayTp: u,
    optDrawTitle: u,
    optExtraExp: u,
    optFloorDeath: u,
    optFollowers: u,
    optKeyItemsNumber: u,
    optSideView: u,
    optSlipDeath: u,
    optTransparent: u,
    optMessageSkip: u,
    optSplashScreen: u
  }
}, gn = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), tt = (e) => ({
  armorTypes: P(e.armorTypes),
  elements: P(e.elements),
  equipTypes: P(e.equipTypes),
  weaponTypes: P(e.weaponTypes),
  skillTypes: P(e.skillTypes),
  variables: P(e.variables),
  switches: P(e.switches)
}), P = (e) => e ? [...e] : [], at = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], bn = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), In = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), z = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: o(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), rt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), fn = { title: "オプション", options: {
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
} }, vn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, hn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, xn = { title: "コマンド", options: {
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
} }, Te = {
  type: "object",
  additionalProperties: !1,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, ke = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, we = {
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
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, it = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, st = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, nt = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, ot = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, mt = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, q = { type: "array", items: { type: "string" } }, pt = {
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
}, c = { type: "string" }, ue = { type: "string", nullable: !0 }, i = { type: "string" }, ct = {
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
      items: [c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ue, c, c, ue, c, c],
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
}, dt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: we },
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
}, W = {
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
}, lt = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: W,
  boat: W,
  ship: W,
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
  attackMotions: { type: "array", items: Te }
} }, ut = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), H = new K({ strict: !0 }), yt = ((e) => {
  const t = ut(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([lt, it, st, Je, et, nt, ke, mt, pt, ct, ot, dt]), gt = H.compile(yt), Tn = (e) => gt(e), bt = H.compile(we);
H.compile(Te);
const It = H.compile(ke), ft = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], vt = (e, t) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continue_ ?? "Continue", t, e.toTitle ?? "To Title", e.cancel ?? "Cancel", t, e.buy ?? "Buy", e.sell ?? "Sell"], s = (e, t) => typeof e == "string" ? e : t, kn = (e) => {
  var a, r, m, p, l, f, x, T, b, R, S, M, Q, ee, te, ae, re, ie, se, ne, oe, me;
  const t = xt(e.size);
  return {
    ...Qe(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Ke(e.sounds),
    editor: rt(e.editing),
    advanced: _e(e.advanced),
    title1Name: ((m = e.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((p = e.images) == null ? void 0 : p.title2Name) ?? "",
    ...tt(e.dataNames ?? {}),
    magicSkills: Y([]),
    airship: z((l = e.vehicles) == null ? void 0 : l.airship),
    boat: z((f = e.vehicles) == null ? void 0 : f.boat),
    ship: z((x = e.vehicles) == null ? void 0 : x.ship),
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
    testBattlers: Tt((ee = e.battleTest) == null ? void 0 : ee.testBattlers, kt),
    battleBgm: o((te = e.bgm) == null ? void 0 : te.battleBgm),
    victoryMe: o((ae = e.me) == null ? void 0 : ae.victoryMe),
    editMapId: ((re = e.editorTemporary) == null ? void 0 : re.editMapId) ?? 0,
    battlerName: ((ie = e.editorTemporary) == null ? void 0 : ie.battlerName) ?? "",
    locale: "",
    startMapId: ((se = e.gameInit) == null ? void 0 : se.startMapId) ?? 0,
    startX: ((ne = e.gameInit) == null ? void 0 : ne.startX) ?? 0,
    startY: ((oe = e.gameInit) == null ? void 0 : oe.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ht(e.terms ?? {}),
    itemCategories: $e(e.itemCategories),
    partyMembersArray: Y((me = e.gameInit) == null ? void 0 : me.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Ze(e.menuComamnds)
  };
}, ht = (e) => {
  return { basic: ft(e.basic ?? {}), commands: (a = e.commands ?? {}, vt(a, "")), params: at(e.params ?? {}), messages: (t = e.messages ?? {}, {
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
}, Y = (e) => e ? [...e] : [], xt = (e) => ((t) => It(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Tt = (e, t) => e ? e.map(t) : [], kt = (e) => ((t) => bt(t))(e) ? { actorId: e.actorId, equips: Y(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, wn = (e, t = 0) => ({ code: 320, parameters: [e.actorId, e.name], indent: t }), Nn = (e, t = 0) => ({ code: 324, parameters: [e.actorId, e.nickname], indent: t }), Sn = (e, t = 0) => ({
  code: 325,
  parameters: [e.actorId, e.profile],
  indent: t
}), Pn = (e, t) => N(e, o({ name: t })), N = (e, t, a = 0) => ({
  code: e,
  parameters: [o(t)],
  indent: a
}), qn = (e, t = 0) => N(241, e, t), An = (e, t = 0) => N(245, e, t), Cn = (e, t = 0) => N(249, e, t), Dn = (e, t = 0) => N(250, e, t), Mn = (e, t = 0) => N(132, e, t), jn = (e, t = 0) => N(133, e, t), Rn = (e, t = 0) => N(139, e, t), En = (e, t = 0) => ({
  code: 117,
  indent: t,
  parameters: wt(e ?? {})
}), Fn = (e) => ({ eventId: e[0] }), wt = (e) => [e.eventId ?? 0], Bn = (e) => ({ min: e[0], max: e[1], value: e[2] }), Nt = (e) => [e.min, e.max, e.value], Vn = (e, t = 0) => ({
  code: 121,
  indent: t,
  parameters: Nt(e)
}), Ne = (e) => [e], Ln = (e) => ({ comment: e[0] }), St = (e, t = 0) => ({ code: 108, indent: t, parameters: Ne(e) }), Pt = (e, t = 0) => ({
  code: 408,
  indent: t,
  parameters: Ne(e)
}), Hn = (e, t = 0) => e.map((a, r) => r === 0 ? St(a, t) : Pt(a, t)), qt = (e) => [e.variableId ?? 0, e.digits ?? 0], On = (e) => ({ variableId: e[0], digits: e[1] }), zn = (e, t = 0) => ({
  code: 103,
  indent: t,
  parameters: qt(e ?? {})
}), Wn = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), Xn = (e) => ({ index: e[0], name: e[1] }), Gn = (e) => [e.index ?? 0, e.name ?? ""], Yn = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Un = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], _n = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Kn = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), $n = (e, t = 0) => ({
  code: 101,
  indent: t,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Zn = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Jn = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], Qn = (e, t = 0) => ({ code: 401, indent: t, parameters: [e] }), At = (e, t = 0) => ({
  code: 355,
  indent: t,
  parameters: [e]
}), Ct = (e, t = 0) => ({ code: 655, indent: t, parameters: [e] }), eo = (e, t = 0) => e.map((a, r) => r === 0 ? At(a, t) : Ct(a, t)), to = 0, ao = 1, ro = 2, io = 3, so = 4, Dt = {
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
}, no = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], oo = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], mo = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], po = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], co = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], lo = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], uo = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, Dt[t.param]], yo = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, go = (e, t) => {
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
}, Mt = (e) => [...e], bo = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Mt(e.parameters)
}), jt = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Io = (e) => e.parameters.every(jt), h = new K({ strict: !0 }), Rt = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: !1
}), fo = (e) => Rt(e), Et = h.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), vo = (e) => Et(e), Ft = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: !1
}), ho = (e) => Ft(e), Bt = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: !1
}), D = (e) => Bt(e), Vt = h.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), xo = (e) => Vt(e), Lt = h.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), To = (e) => Lt(e), Ht = h.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), ko = (e) => Ht(e), Ot = h.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), wo = (e) => Ot(e), zt = h.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), No = (e) => zt(e), So = (e) => D(e) && e.code === 401, Po = (e) => D(e) && e.code === 405, qo = (e) => D(e) && e.code === 108, Ao = (e) => D(e) && e.code === 408, Co = (e) => D(e) && e.code === 355, Do = (e) => D(e) && e.code === 655, Mo = "bgm", jo = "se", Ro = "me", Eo = "bgs", Fo = "battlebacks1", Bo = "battlebacks2", Vo = "characters", Lo = "enemies", Ho = "faces", Oo = "parallaxes", zo = "pictures", Wo = "sv_actors", Xo = "sv_enemies", Go = "system", Yo = "tilesets", Uo = "titles1", _o = "titles2", Ko = "System.json", $o = "Actors.json", Zo = "Classes.json", Jo = "Skills.json", Qo = "Items.json", em = "Weapons.json", tm = "Armors.json", am = "Enemies.json", rm = "Troops.json", im = "States.json", sm = "Animations.json", nm = "Tilesets.json", om = "CommonEvents.json", mm = "MapInfos.json", pm = "data", cm = "img", dm = "audio", lm = "js", Se = (e, t) => ({
  type: "array",
  items: t,
  ...v(e),
  ...k(e.default)
}), v = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), k = (e) => e !== void 0 ? {
  default: e
} : {}, ye = (e) => e === void 0 || e === 0, Wt = (e) => Se(e, { type: "string" }), Xt = (e) => {
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
      return Wt(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: ye(a.decimals) ? "integer" : "number"
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
      return ((a) => Se(a, { type: "integer" }))(e);
    case "number":
      return ((a) => ({ type: ye(a.decimals) ? "integer" : "number", ...k(a.default), ...v(a) }))(e);
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
}, Pe = (e, t) => Object.entries(t).reduce((a, [r, m]) => {
  if (r in e) {
    const p = e[r];
    if (typeof p == "string") return { ...a, [r]: m(p) };
  }
  return a;
}, {}), w = (e, t, a, r) => ({
  default: t,
  ...Pe(a, r),
  kind: e
}), B = (e, t, a) => ({ default: [], ...Pe(t, a), kind: e }), qe = "help", U = "kind", X = "text", ge = "struct", Ae = (e) => {
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
}, Gt = (e) => {
  if (U in e.attr) {
    const t = Yt[e.attr.kind];
    if (t) return t(e);
  }
  return w("any", "", e.attr, L);
}, n = (e) => e, Ce = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), L = {
  default: n,
  text: n,
  desc: n,
  parent: n
}, be = (e) => w("string", "", e.attr, L), Ie = (e) => {
  const t = { default: (a) => Ae(a), text: n, desc: n, parent: n };
  return B("string[]", e.attr, t);
}, y = (e, t) => {
  const a = {
    default: Ce,
    text: n,
    desc: n,
    parent: n
  };
  return B(t, e.attr, a);
}, g = (e, t) => {
  const a = { default: (r) => parseInt(r, 10), text: n, desc: n, parent: n };
  return w(t, 0, e.attr, a);
}, Yt = {
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
    const t = { default: Ce, text: n, desc: n, decimals: (a) => parseInt(a, 10), min: (a) => parseFloat(a), max: (a) => parseFloat(a), parent: n };
    return B("number[]", e.attr, t);
  },
  string: be,
  "string[]": Ie,
  multiline_string: be,
  "multiline_string[]": Ie,
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
    const t = { default: (a) => Ae(a), text: n, desc: n, parent: n, dir: n };
    return { dir: "", ...B("file[]", e.attr, t) };
  }
}, De = "BODY", Me = "STRUCT", E = "NONE", Ut = (e, t) => {
  const a = e.lines.length > 0 ? J(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? Me : "INVALID", locale: t[2], lines: [] };
}, _t = (e) => ({
  ...e.lines.length > 0 ? J(e) : e,
  blockType: De,
  structName: void 0,
  locale: void 0,
  lines: []
}), J = (e) => e.blockType === De ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: E } : e.structName && e.blockType === Me ? {
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
}, Kt = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, _ = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), F = (e) => {
  const t = $t(e), a = Jt(t);
  return Zt(a);
}, $t = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: Kt(e.currentOption).items } };
  }
  return e;
}, Zt = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, Jt = (e) => {
  if (e.currentCommand) {
    const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ..._(e.currentCommand), command: e.currentCommand.command, args: t };
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
}, fe = (e, t) => {
  const a = e.lines.reduce((r, m) => {
    const p = m.trim().replace(/^\*\s?/, "");
    if (!p.startsWith("@")) return r.currentContext === qe ? { ...r, helpLines: r.helpLines.concat(p) } : r;
    const [l, ...f] = p.slice(1).split(" "), x = f.join(" ").trim(), T = t[l];
    return T ? T(r, x) : r;
  }, ea());
  return F(a);
}, Qt = (e, t) => {
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
      return M ? Ut(b, M) : S === "/*:" ? _t(b) : S === "*/" ? b.lines.length > 0 ? J(b) : b : { ...b, lines: b.lines.concat([S]) };
    }, x);
    return { structs: T.structs, bodies: T.bodies };
  })(e), r = a.structs.map((l) => ((f) => {
    const x = fe(f, je);
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
  const p = fe(m, t);
  return { params: p.params, commands: p.commands, meta: p.meta, helpLines: p.helpLines, structs: r };
}, ea = () => ({
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
} : e, G = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), je = {
  param: (e, t) => {
    const a = F(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? I(e, X, t) : e.currentCommand && !(X in e.currentCommand) ? { ...e, currentCommand: {
    ..._(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [X]: t
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
        ..._(e.currentCommand),
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
  help: (e) => ({ ...F(e), currentContext: qe }),
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
      const a = t.slice(7, -1), r = I(e, ge, a);
      return I(r, U, ge);
    }
    return e.currentParam ? I(e, U, t) : e;
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
  author: (e, t) => G(e, "author", t),
  plugindesc: (e, t) => G(e, "plugindesc", t),
  url: (e, t) => G(e, "url", t)
}, ta = (e) => aa(((t) => Qt(t, je))(e)), aa = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: ra(e.commands),
  params: Re(e.params)
}), Re = (e) => e.reduce((t, a) => ({ [a.name]: Gt(a), ...t }), {}), ra = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: Re(a.args) };
  return { [a.command]: r, ...t };
}, {}), um = (e) => ta(e), ym = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [m, p]) => {
    const l = Xt(p);
    return { ...r, [m]: l };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e);
export {
  go as $,
  Wn as A,
  Xn as B,
  Gn as C,
  Yn as D,
  Un as E,
  _n as F,
  Kn as G,
  $n as H,
  Zn as I,
  Jn as J,
  Qn as K,
  At as L,
  Ct as M,
  eo as N,
  to as O,
  ao as P,
  ro as Q,
  io as R,
  so as S,
  no as T,
  oo as U,
  mo as V,
  po as W,
  co as X,
  lo as Y,
  uo as Z,
  yo as _,
  Nn as a,
  la as a$,
  Mt as a0,
  bo as a1,
  Io as a2,
  fo as a3,
  vo as a4,
  ho as a5,
  D as a6,
  xo as a7,
  To as a8,
  ko as a9,
  $o as aA,
  Zo as aB,
  Jo as aC,
  Qo as aD,
  em as aE,
  tm as aF,
  am as aG,
  rm as aH,
  im as aI,
  sm as aJ,
  nm as aK,
  om as aL,
  mm as aM,
  pm as aN,
  cm as aO,
  dm as aP,
  lm as aQ,
  um as aR,
  ym as aS,
  en as aT,
  $ as aU,
  na as aV,
  oa as aW,
  ma as aX,
  pa as aY,
  ca as aZ,
  da as a_,
  wo as aa,
  No as ab,
  So as ac,
  Po as ad,
  qo as ae,
  Ao as af,
  Co as ag,
  Do as ah,
  Mo as ai,
  jo as aj,
  Ro as ak,
  Eo as al,
  Fo as am,
  Bo as an,
  Vo as ao,
  Lo as ap,
  Ho as aq,
  Oo as ar,
  zo as as,
  Wo as at,
  Xo as au,
  Go as av,
  Yo as aw,
  Uo as ax,
  _o as ay,
  Ko as az,
  Sn as b,
  xr as b$,
  ua as b0,
  Be as b1,
  ya as b2,
  ga as b3,
  ba as b4,
  Ia as b5,
  fa as b6,
  va as b7,
  ha as b8,
  xa as b9,
  _a as bA,
  Ka as bB,
  $a as bC,
  Za as bD,
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
  Ta as ba,
  ka as bb,
  wa as bc,
  Na as bd,
  Sa as be,
  Pa as bf,
  qa as bg,
  Aa as bh,
  Ca as bi,
  Da as bj,
  Ma as bk,
  ja as bl,
  Ra as bm,
  Ea as bn,
  Fa as bo,
  Ba as bp,
  Va as bq,
  La as br,
  Ha as bs,
  Oa as bt,
  za as bu,
  Wa as bv,
  Xa as bw,
  Ga as bx,
  Ya as by,
  Ua as bz,
  Pn as c,
  Di as c$,
  Tr as c0,
  kr as c1,
  wr as c2,
  Nr as c3,
  Sr as c4,
  Pr as c5,
  qr as c6,
  Ar as c7,
  Cr as c8,
  Dr as c9,
  ii as cA,
  si as cB,
  ni as cC,
  oi as cD,
  mi as cE,
  pi as cF,
  ci as cG,
  di as cH,
  li as cI,
  ui as cJ,
  yi as cK,
  gi as cL,
  bi as cM,
  Ii as cN,
  fi as cO,
  vi as cP,
  hi as cQ,
  xi as cR,
  Ti as cS,
  ki as cT,
  wi as cU,
  Ni as cV,
  Si as cW,
  Pi as cX,
  qi as cY,
  Ai as cZ,
  Ci as c_,
  Mr as ca,
  jr as cb,
  Rr as cc,
  Er as cd,
  Fr as ce,
  Br as cf,
  Vr as cg,
  Lr as ch,
  Hr as ci,
  Or as cj,
  zr as ck,
  Wr as cl,
  Xr as cm,
  Gr as cn,
  Yr as co,
  Ur as cp,
  _r as cq,
  Kr as cr,
  $r as cs,
  Zr as ct,
  Jr as cu,
  Qr as cv,
  ei as cw,
  ti as cx,
  ai as cy,
  ri as cz,
  N as d,
  Rs as d$,
  Mi as d0,
  ji as d1,
  Ri as d2,
  Ei as d3,
  Fi as d4,
  Bi as d5,
  Vi as d6,
  Li as d7,
  Hi as d8,
  Oi as d9,
  us as dA,
  ys as dB,
  Oe as dC,
  ze as dD,
  Z as dE,
  gs as dF,
  bs as dG,
  Is as dH,
  fs as dI,
  We as dJ,
  vs as dK,
  hs as dL,
  xs as dM,
  Ts as dN,
  Xe as dO,
  ks as dP,
  ws as dQ,
  Ns as dR,
  Ss as dS,
  Ps as dT,
  qs as dU,
  Cs as dV,
  Ye as dW,
  As as dX,
  Ds as dY,
  Ms as dZ,
  js as d_,
  zi as da,
  Wi as db,
  Xi as dc,
  Gi as dd,
  Yi as de,
  Ui as df,
  _i as dg,
  Ki as dh,
  $i as di,
  Zi as dj,
  Ji as dk,
  Qi as dl,
  es as dm,
  ts as dn,
  as as dp,
  rs as dq,
  is as dr,
  ss as ds,
  ns as dt,
  os as du,
  ms as dv,
  ps as dw,
  cs as dx,
  ds as dy,
  ls as dz,
  qn as e,
  Es as e0,
  he as e1,
  Fs as e2,
  Bs as e3,
  Vs as e4,
  Ls as e5,
  Hs as e6,
  Os as e7,
  zs as e8,
  Ws as e9,
  $e as eA,
  un as eB,
  Ze as eC,
  yn as eD,
  Qe as eE,
  gn as eF,
  tt as eG,
  bn as eH,
  at as eI,
  In as eJ,
  z as eK,
  rt as eL,
  fn as eM,
  vn as eN,
  hn as eO,
  xn as eP,
  Xs as ea,
  Gs as eb,
  Ys as ec,
  Us as ed,
  _s as ee,
  Ks as ef,
  $s as eg,
  Zs as eh,
  Js as ei,
  Qs as ej,
  Ue as ek,
  Tn as el,
  kn as em,
  _e as en,
  Ke as eo,
  tn as ep,
  an as eq,
  rn as er,
  sn as es,
  nn as et,
  on as eu,
  mn as ev,
  pn as ew,
  cn as ex,
  dn as ey,
  ln as ez,
  An as f,
  Cn as g,
  Dn as h,
  Mn as i,
  jn as j,
  Rn as k,
  En as l,
  wn as m,
  Fn as n,
  Bn as o,
  Nt as p,
  Vn as q,
  Ne as r,
  Ln as s,
  wt as t,
  St as u,
  Pt as v,
  Hn as w,
  qt as x,
  On as y,
  zn as z
};
