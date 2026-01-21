import re from "ajv";
import { c as ye, a as ue, m as s } from "./make.es.js";
import { aF as ge, aJ as be, aK as Ie, ax as se, ay as ne, az as oe, ae as ve, ai as he, ak as fe, al as xe, F as Te, G as we, P as Se, p as ke, u as Ne, z as N, cZ as T, cY as w, c$ as v, c_ as S, A as q, B as P, C as qe, j as De, h as Me, i as Pe, aZ as Re, a_ as je, au as Ce, av as Ae, v as u, cX as Fe, cQ as Ee, cU as Be, cS as Ve } from "./make.es2.js";
const Ka = (e = 0) => ({ code: 314, indent: e, parameters: [0, 0] }), Oa = (e, a = 0) => ({
  code: 314,
  indent: a,
  parameters: [1, e.targetSelectVariableId]
}), _a = ({ actorId: e = 1, faceIndex: a = 0, faceName: t = "", characterIndex: r = 0, characterName: n = "", battlerName: o = "" } = {}, p = 0) => ({
  code: 322,
  indent: p,
  parameters: [e, n, r, t, a, o]
}), B = (e, a) => `\\${e}[${a}]`, $a = (e, a) => a.map((t, r) => ({ text: t, controlChar: B(e, r) })), Za = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((a) => ({
  char: a[1],
  id: parseInt(a[2], 10)
})), Ja = (e) => e.map((a) => ({ text: a.name, controlChar: B("N", a.id) })), Qa = (e) => e.variables.map((a, t) => ({ text: a || "", controlChar: B("V", t) })).filter((a) => a.text !== ""), et = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), at = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), tt = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), it = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), ze = (e = {}) => ({
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
}), rt = 0, st = 1, nt = 2, ot = 3, mt = 4, pt = 5, dt = 6, ct = 7, lt = 8, yt = 9, ut = 10, gt = 11, bt = 12, It = 13, vt = 14, ht = 15, ft = 16, xt = 17, Tt = 18, wt = 19, St = 20, kt = 21, Nt = 22, qt = 23, Dt = 24, Mt = 25, Pt = 26, Rt = 27, jt = 28, Ct = 29, At = 30, Ft = 31, Et = 32, Bt = 33, Vt = 34, zt = 35, Lt = 36, Ht = 37, Wt = 38, Xt = 39, Yt = 40, Gt = 41, Ut = 42, Kt = 43, Ot = 44, _t = 45, $t = ({ id: e = 1, name: a = "", pages: t = [], note: r = "", x: n = 0, y: o = 0 } = {}) => ({
  id: e,
  name: a,
  pages: t,
  note: r,
  x: n,
  y: o
}), Le = ({ characterIndex: e = 0, characterName: a = "", direction: t = 2, pattern: r = 0, tileId: n = 0 } = {}) => ({
  characterIndex: e,
  characterName: a,
  direction: t,
  pattern: r,
  tileId: n
}), Zt = ({ list: e = [], conditions: a = ze(), image: t = Le(), moveFrequency: r = 5, directionFix: n = !1, moveRoute: o = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: a,
  list: e,
  directionFix: n,
  image: t,
  moveFrequency: r,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), Jt = (e, a) => ({
  map: a,
  filename: `Map${e.id.toString().padStart(3, "0")}`,
  editingName: e.name
}), Qt = (e = {}) => ({
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
  bgm: e.bgm ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  bgs: e.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e.disableDashing ?? !1,
  displayName: e.displayName ?? "",
  encounterList: e.encounterList ?? [],
  events: e.events ?? []
}), ei = (e = { id: 0 }) => {
  return {
    name: e.name ?? (a = e.id, a.toString().padStart(3, "0")),
    id: e.id,
    expanded: e.expanded ?? !1,
    order: e.order ?? 0,
    parentId: e.parentId ?? 0,
    scrollX: e.scrollX ?? 0,
    scrollY: e.scrollY ?? 0
  };
  var a;
}, He = {
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
}, We = new re({
  strict: !0
}).compile(He), ai = (e) => We(e), Xe = {
  actor: { title: "アクター", options: {
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
  class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: {
    title: "防具",
    options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" }
  },
  enemy: { title: "敵キャラ", options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" } },
  item: {
    title: "アイテム",
    options: { consumable: "消耗品" }
  },
  skill: { title: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } },
  state: {
    title: "ステート",
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
  weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: { title: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } },
  commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } }
}, Ye = { title: "ダメージ", options: {} }, V = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), ti = (e = {}) => ({
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
}), ii = (e) => ({
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
}), ri = (e = {}) => ({
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
}), si = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), Ge = ({ mhp: e = 0, mmp: a = 0, atk: t = 0, def: r = 0, mat: n = 0, mdf: o = 0, agi: p = 0, luk: l = 0 }) => [e, a, t, r, n, o, p, l], ni = (e) => {
  const [a, t, r, n, o, p, l, y] = e;
  return {
    mhp: a,
    mmp: t,
    atk: r,
    def: n,
    mat: o,
    mdf: p,
    agi: l,
    luk: y
  };
}, Ue = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), oi = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), mi = (e = {}) => {
  var a;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((a = e.dropItems) == null ? void 0 : a.map(() => Ue())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: e.params ? [...e.params] : Ge({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
    actions: []
  };
}, pi = (e = {}) => ({
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
}), d = "{name}", h = "{name} * {value}%", Q = "{name} + {value}%", ee = "{value}", Ke = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: h, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: Q, options: {
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
  specialParam: { title: "特殊能力値", format: h, options: {
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
  elementRate: { title: "属性有効度", format: h },
  debuffRate: { title: "弱体有効度", format: h },
  stateRate: { title: "ステート有効度", format: h },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: Q },
  attackSpeed: { title: "攻撃速度補正", format: ee },
  attackTimes: {
    title: "攻撃追加回数",
    format: ee
  },
  actionPlus: { title: "行動追加", format: h },
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
} }, Oe = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, di = (e, a, t) => {
  const r = ye(Oe);
  return ue(a, t, r, e.pattern, (n) => n.dataId);
}, ci = (e = {}) => ({
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
  damage: V(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), li = {
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
}, yi = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ui = 0, gi = 1, bi = 2, ae = "{name} {value1}%", C = "{value1}% + {value2}", te = "{name} {value1}ターン", k = "{name}", _e = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: te },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: te },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: C },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: k },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: C
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: C },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: k
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: k },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: ae },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: k
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: ae },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: k }
} }, Ii = 0, vi = (e, a, t) => {
  const r = t.find((o) => o.id === a.dataId), n = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", a.value1.toString()).replaceAll("{value2}", a.value2.toString()).replaceAll("{name}", n);
}, hi = { title: "アイテム", options: { consumable: "消耗品" } }, fi = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, xi = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Ti = (e = {}) => ({
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
  damage: V(e.damage ?? {}),
  effects: [],
  price: 0
}), wi = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: V(e.damage ?? {}),
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
}), Si = "data", ki = "actor", Ni = "map", qi = "enemy", Di = "state", Mi = "skill", Pi = "item", Ri = "weapon", ji = "armor", Ci = "class", Ai = "common_event", Fi = "troop", $e = {
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
}, Ei = () => ({ rpg: { damage: Ye, data: Xe, traits: Ke, itemEffect: _e }, global: $e }), Bi = (e, a = 0) => ({ code: ge, parameters: [e.actorId, e.name], indent: a }), Vi = (e, a = 0) => ({
  code: be,
  parameters: [e.actorId, e.nickname],
  indent: a
}), zi = (e, a = 0) => ({ code: Ie, parameters: [e.actorId, e.profile], indent: a }), x = { direct: 0, variable: 1 }, Li = (e, a = 0) => ({
  code: se,
  indent: a,
  parameters: me(0, e)
}), Hi = (e, a = 0) => ({ code: se, indent: a, parameters: me(1, e) }), Wi = (e, a = 0) => ({ code: oe, indent: a, parameters: R(0, e) }), Xi = (e, a = 0) => ({
  code: oe,
  indent: a,
  parameters: R(1, e)
}), Yi = (e, a = 0) => ({ code: ne, indent: a, parameters: R(0, e) }), Gi = (e, a = 0) => ({
  code: ne,
  indent: a,
  parameters: R(1, e)
}), R = (e, a) => [a.targetType === "variable" ? x.variable : x.direct, a.targetType === "each" ? 0 : a.target, e, x[a.operand.mode], a.operand.value], me = (e, a) => [a.targetType === "variable" ? x.variable : x.direct, a.targetType === "each" ? 0 : a.target, e, x[a.operand.mode], a.operand.value, a.allowDeath], Ui = (e, a = 0) => ({
  code: 242,
  indent: a,
  parameters: [e.duration]
}), Ki = (e = 0) => ({ code: 243, indent: e, parameters: [] }), Oi = (e = 0) => ({ code: 244, indent: e, parameters: [] }), _i = (e, a = 0) => ({
  code: 246,
  indent: a,
  parameters: [e.duration]
}), $i = (e, a) => g(e, s({ name: a })), g = (e, a, t = 0) => ({
  code: e,
  parameters: [s(a)],
  indent: t
}), Zi = (e, a = 0) => g(ve, e, a), Ji = (e, a = 0) => g(he, e, a), Qi = (e, a = 0) => g(fe, e, a), er = (e, a = 0) => g(xe, e, a), ar = (e, a = 0) => g(Te, e, a), tr = (e, a = 0) => g(we, e, a), ir = (e, a = 0) => g(Se, e, a), Ze = {
  plus: 0,
  minus: 1
}, rr = ({ operation: e, time: a }) => ({ code: 124, indent: 0, parameters: [Ze[e ?? "plus"] ?? 0, a ?? 0] });
function sr(e, a = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: a };
}
const nr = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), or = (e, a = 0) => ({ code: 333, indent: a, parameters: [e.enemyIndex, 0, e.stateId] }), mr = (e, a = 0) => ({
  code: 333,
  indent: a,
  parameters: [e.enemyIndex, 1, e.stateId]
}), pr = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 0, e.stateId] }), dr = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 1, e.stateId] }), cr = (e = 0) => ({
  code: 334,
  indent: e,
  parameters: [0]
}), lr = (e, a = 0) => ({ code: 334, indent: a, parameters: [e.enemyIndex] }), yr = (e, a = 0) => ({ code: ke, indent: a, parameters: Je(e ?? {}) }), ur = (e) => ({
  eventId: e[0]
}), Je = (e) => [e.eventId ?? 0], gr = (e) => ({ min: e[0], max: e[1], value: e[2] }), Qe = (e) => [e.min, e.max, e.value], br = (e, a = 0) => ({ code: Ne, indent: a, parameters: Qe(e) }), Ir = (e, a = 0) => ({
  code: 103,
  parameters: [e.variableId, e.maxDigits],
  indent: a
}), vr = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], hr = (e) => ({ variableId: e[0], maxDigits: e[1] }), fr = (e) => e.parameters[3] === v, xr = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3]
}), Tr = (e, a = 0) => ({ code: N, indent: a, parameters: [e.operation, e.itemId, e.value, e.operand] }), wr = (e, a = 0) => ({
  code: N,
  indent: a,
  parameters: [T, e.itemId, e.value, w]
}), Sr = (e, a = 0) => ({ code: N, indent: a, parameters: [T, e.itemId, e.variableId, v] }), kr = (e, a = 0) => ({
  code: N,
  indent: a,
  parameters: [S, e.itemId, e.value, w]
}), Nr = (e, a = 0) => ({ code: N, indent: a, parameters: [S, e.itemId, e.variableId, v] }), qr = (e) => ({ operation: e[0], weaponId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), Dr = (e, a = 0) => ({
  code: q,
  indent: a,
  parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip]
}), Mr = (e, a = 0) => ({ code: q, indent: a, parameters: [T, e.weaponId, e.value, w, !1] }), Pr = (e, a = 0) => ({
  code: q,
  indent: a,
  parameters: [T, e.weaponId, e.variableId, v, !1]
}), Rr = (e, a = 0) => ({ code: q, indent: a, parameters: [S, e.weaponId, e.value, w, !1] }), jr = (e, a = 0) => ({
  code: q,
  indent: a,
  parameters: [S, e.weaponId, e.variableId, v, !1]
}), Cr = (e, a = 0) => ({ code: P, indent: a, parameters: [T, e.armorId, e.value, w, !1] }), Ar = (e, a = 0) => ({
  code: P,
  indent: a,
  parameters: [T, e.armorId, e.variableId, v, !1]
}), Fr = (e, a = 0) => ({ code: P, indent: a, parameters: [S, e.armorId, e.value, w, !1] }), Er = (e, a = 0) => ({
  code: P,
  indent: a,
  parameters: [S, e.armorId, e.variableId, v, !1]
}), Br = (e, a = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: a }), Vr = (e) => ({ variableId: e[0], itemType: e[1] }), zr = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), Lr = (e = 0) => ({ code: 135, parameters: [0], indent: e }), Hr = (e = 0) => ({ code: 134, parameters: [1], indent: e }), Wr = (e = 0) => ({ code: 134, parameters: [0], indent: e }), Xr = (e = 0) => ({
  code: 137,
  parameters: [1],
  indent: e
}), Yr = (e = 0) => ({ code: 137, parameters: [0], indent: e }), pe = (e) => [e], Gr = (e) => ({ comment: e[0] }), ea = (e, a = 0) => ({ code: qe, indent: a, parameters: pe(e) }), aa = (e, a = 0) => ({
  code: De,
  indent: a,
  parameters: pe(e)
}), Ur = (e, a = 0) => e.map((t, r) => r === 0 ? ea(t, a) : aa(t, a)), ta = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], Kr = (e) => ({ speed: e[0], skip: e[1] }), Or = (e = {}, a = 0) => ({
  code: Me,
  indent: a,
  parameters: ta(e)
}), ia = (e = "") => [e], _r = (e) => ({ content: e[0] }), $r = (e = "", a = 0) => ({ code: Pe, indent: a ?? 0, parameters: ia(e) }), Zr = (e, a = 0) => ({
  code: 402,
  indent: a,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Jr = (e) => ({ index: e[0], name: e[1] }), Qr = (e) => [e.index ?? 0, e.name ?? ""], es = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), as = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], ts = (e, a = 0) => ({
  code: 102,
  indent: a,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), is = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), rs = (e, a = 0) => ({ code: 261, indent: a, parameters: [e.filename] }), ss = (e) => ({
  filename: e[0]
}), ns = ({ args: e = {}, commandName: a, commandTitle: t = "", pluginName: r }, n = 0) => ({ code: 357, indent: n, parameters: [r, a, t, { ...e }] }), os = (e) => ({
  pluginName: e[0],
  commandName: e[1],
  commandTitle: e[2],
  args: { ...e[3] }
}), ms = (e, a = 0) => ({ code: 129, parameters: [0, e.actorId], indent: a }), ps = (e, a = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: a
}), ds = ({ pictureId: e = 0, origin: a = 0, name: t = "", x: r = 0, y: n = 0, scaleX: o = 100, scaleY: p = 100, opacity: l = 255, blendMode: y = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, t, a, r, n, o, p, l, y]
}), cs = ({ pictureId: e, origin: a, x: t, y: r, scaleX: n, scaleY: o, opacity: p, blendMode: l, wait: y = !1, easingType: D = 0 }) => ({ code: 232, indent: 0, parameters: [e, a, t, r, n, o, p, l, y, D] }), ra = (e, a = 0) => ({
  code: Re,
  indent: a,
  parameters: [e]
}), sa = (e, a = 0) => ({ code: je, indent: a, parameters: [e] }), ls = (e, a = 0) => e.map((t, r) => r === 0 ? ra(t, a) : sa(t, a)), ys = 1, us = 0, M = {
  item: 0,
  weapon: 1,
  armors: 2
}, gs = ({ goods: e, buyOnly: a = !1 }, t = 0) => e.map((r, n) => {
  const o = ((p) => p.customPrice !== void 0 && p.customPrice !== 0)(r) ? 1 : 0;
  return n === 0 ? {
    code: Ce,
    indent: t,
    parameters: [M[r.itemType] ?? M.item, r.id, o, r.customPrice ?? 0, a]
  } : { code: Ae, indent: t, parameters: [M[r.itemType] ?? M.item, r.id, o, r.customPrice ?? 0] };
}), bs = 0, Is = 1, vs = 2, hs = 3, fs = 4, xs = 0, Ts = 1, ws = 2, Ss = (e, a) => {
  switch (a[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return a[6] >= 2 && a[6] <= 9 ? e.param(a[6] - 2) : 0;
}, ks = (e, a) => {
  switch (a[6]) {
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
  return a[6] >= 4 && a[6] <= 11 ? e.param(a[6] - 4) : 0;
}, Ns = (e) => e.parameters[2] === 1, na = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 3, a.index, a.param], qs = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: na(e, a, t.operation ?? 0)
}), oa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 2, a.armorId], Ds = (e, a) => ({
  code: u,
  indent: 0,
  parameters: oa(e, a, 0)
}), ma = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 0, a.value], Ms = (e, a, t = {}) => ({ code: u, indent: t.indent ?? 0, parameters: ma(e, a, t.operation ?? 0) }), pa = {
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
}, da = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 4, a.index, pa[a.param]], Ps = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: da(e, a, t.operation ?? 0)
}), Rs = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: ca(e, a, t.operation ?? 0)
}), ca = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 0, a.itemId], la = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 2, a.min, a.max], js = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: la(e, a, t.operation ?? 0)
}), ya = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 4, a.code], Cs = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: ya(e, a, t.operation ?? 0)
}), ua = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 1, a.weaponId], As = (e, a) => ({ code: u, indent: 0, parameters: ua(e, a, 0) }), ga = (e) => [...e], Fs = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: ga(e.parameters)
}), ba = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Es = (e) => e.parameters.every(ba), Bs = "bgm", Vs = "se", zs = "me", Ls = "bgs", Hs = "battlebacks1", Ws = "battlebacks2", Xs = "characters", Ys = "enemies", Gs = "faces", Us = "parallaxes", Ks = "pictures", Os = "sv_actors", _s = "sv_enemies", $s = "system", Zs = "tilesets", Js = "titles1", Qs = "titles2", en = "System.json", an = "Actors.json", tn = "Classes.json", rn = "Skills.json", sn = "Items.json", nn = "Weapons.json", on = "Armors.json", mn = "Enemies.json", pn = "Troops.json", dn = "States.json", cn = "Animations.json", ln = "Tilesets.json", yn = "CommonEvents.json", un = "MapInfos.json", gn = "data", bn = "img", In = "audio", vn = "js", Ia = (e = {}) => ({
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
}), va = (e = {}) => [s(e.cursor), s(e.ok), s(e.cancel), s(e.buzzer), s(e.equip), s(e.save), s(e.load), s(e.battleStart), s(e.escape), s(e.enemyAttack), s(e.enemyDamage), s(e.enemyCollapse), s(e.bossCollapes1), s(e.bossCollapes2), s(e.actorDamage), s(e.actorCollapse), s(e.playRecovery), s(e.playMiss), s(e.playEvasion), s(e.playMagicEvasion), s(e.playReflection), s(e.shop), s(e.useItem), s(e.useSkill)], hn = (e) => ({
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
}), fn = (e) => e.menuCommands[0], xn = (e) => e.menuCommands[1], Tn = (e) => e.menuCommands[2], wn = (e) => e.menuCommands[3], Sn = (e) => e.menuCommands[4], kn = (e) => e.menuCommands[5], Nn = (e) => e.itemCategories[0], qn = (e) => e.itemCategories[1], Dn = (e) => e.itemCategories[2], Mn = (e) => e.itemCategories[3], ha = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], Pn = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), fa = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], Rn = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), xa = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Ta = (e = {}) => ({
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
}), c = { type: "boolean" }, wa = {
  type: "object",
  additionalProperties: !1,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: c,
    optDisplayTp: c,
    optDrawTitle: c,
    optExtraExp: c,
    optFloorDeath: c,
    optFollowers: c,
    optKeyItemsNumber: c,
    optSideView: c,
    optSlipDeath: c,
    optTransparent: c,
    optMessageSkip: c,
    optSplashScreen: c
  }
}, jn = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), Sa = (e) => ({
  armorTypes: b(e.armorTypes),
  elements: b(e.elements),
  equipTypes: b(e.equipTypes),
  weaponTypes: b(e.weaponTypes),
  skillTypes: b(e.skillTypes),
  variables: b(e.variables),
  switches: b(e.switches)
}), b = (e) => e ? [...e] : [], Cn = (e) => e.terms.params.map((a, t) => ({
  name: a,
  id: t
})), An = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), A = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: s(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), ka = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), Fn = { title: "オプション", options: {
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
} }, En = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Bn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Vn = {
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
}, de = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, ce = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, le = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, f = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, Na = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: f, victoryMe: f, gameoverMe: f, titleBgm: f, defeatMe: f, sounds: {
    type: "array",
    items: f,
    minItems: 24,
    maxItems: 24
  } }
}, qa = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, Da = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, Ma = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, Pa = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, I = { type: "array", items: { type: "string" } }, Ra = {
  additionalProperties: !1,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: I,
    skillTypes: I,
    elements: I,
    variables: I,
    equipTypes: I,
    switches: I,
    armorTypes: I
  }
}, m = { type: "string" }, ie = { type: "string", nullable: !0 }, i = { type: "string" }, ja = {
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
      items: [m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, ie, m, m, ie, m, m],
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
}, Ca = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: le },
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
}, F = {
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
}, Aa = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: F,
  boat: F,
  ship: F,
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
  attackMotions: { type: "array", items: de }
} }, Fa = (e) => e.reduce((a, t) => ({ required: [...a.required, ...t.required], properties: { ...a.properties, ...t.properties } }), {
  required: [],
  properties: {}
}), j = new re({ strict: !0 }), Ea = ((e) => {
  const a = Fa(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(a.required)),
    properties: a.properties
  };
})([Aa, Na, qa, xa, wa, Da, ce, Pa, Ra, ja, Ma, Ca]), Ba = j.compile(Ea), zn = (e) => Ba(e), Va = j.compile(le);
j.compile(de);
const za = j.compile(ce), Ln = (e) => {
  var t, r, n, o, p, l, y, D, z, L, H, W, X, Y, G, U, K, O, _, $, Z, J;
  const a = Ha(e.size);
  return {
    ...Ta(e.options),
    currencyUnit: ((t = e.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: va(e.sounds),
    editor: ka(e.editing),
    advanced: Ia(e.advanced),
    title1Name: ((n = e.images) == null ? void 0 : n.title1Name) ?? "",
    title2Name: ((o = e.images) == null ? void 0 : o.title2Name) ?? "",
    ...Sa(e.dataNames ?? {}),
    magicSkills: E([]),
    airship: A((p = e.vehicles) == null ? void 0 : p.airship),
    boat: A((l = e.vehicles) == null ? void 0 : l.boat),
    ship: A((y = e.vehicles) == null ? void 0 : y.ship),
    defeatMe: s((D = e.me) == null ? void 0 : D.defeatMe),
    gameoverMe: s((z = e.me) == null ? void 0 : z.gameoverMe),
    titleBgm: s((L = e.bgm) == null ? void 0 : L.titleBgm),
    tileSize: a.tileSize,
    faceSize: a.faceSize,
    iconSize: a.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((H = e.battleTest) == null ? void 0 : H.battleback1Name) ?? "",
    battleback2Name: ((W = e.battleTest) == null ? void 0 : W.battleback2Name) ?? "",
    testTroopId: ((X = e.battleTest) == null ? void 0 : X.testTroopId) ?? 0,
    testBattlers: Wa((Y = e.battleTest) == null ? void 0 : Y.testBattlers, Xa),
    battleBgm: s((G = e.bgm) == null ? void 0 : G.battleBgm),
    victoryMe: s((U = e.me) == null ? void 0 : U.victoryMe),
    editMapId: ((K = e.editorTemporary) == null ? void 0 : K.editMapId) ?? 0,
    battlerName: ((O = e.editorTemporary) == null ? void 0 : O.battlerName) ?? "",
    locale: "",
    startMapId: ((_ = e.gameInit) == null ? void 0 : _.startMapId) ?? 0,
    startX: (($ = e.gameInit) == null ? void 0 : $.startX) ?? 0,
    startY: ((Z = e.gameInit) == null ? void 0 : Z.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: La(e.terms ?? {}),
    itemCategories: ha(e.itemCategories),
    partyMembersArray: E((J = e.gameInit) == null ? void 0 : J.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: fa(e.menuComamnds)
  };
}, La = (e) => ({
  basic: Ve(e.basic ?? {}),
  commands: Be(e.commands ?? {}),
  params: Ee(e.params ?? {}),
  messages: Fe(e.messages ?? {})
}), E = (e) => e ? [...e] : [], Ha = (e) => ((a) => za(a))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Wa = (e, a) => e ? e.map(a) : [], Xa = (e) => ((a) => Va(a))(e) ? { actorId: e.actorId, equips: E(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Hn = (e) => ({ ...e.text ? { text: e.text } : {}, ...e.desc ? { desc: e.desc } : {} }), Wn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Xn = (e) => {
  const a = e.split("/");
  return a[a.length - 1];
};
export {
  qr as $,
  rr as A,
  nr as B,
  sr as C,
  pr as D,
  or as E,
  dr as F,
  mr as G,
  lr as H,
  cr as I,
  yr as J,
  ur as K,
  Je as L,
  gr as M,
  Qe as N,
  br as O,
  hr as P,
  Ir as Q,
  vr as R,
  Vr as S,
  Br as T,
  xr as U,
  fr as V,
  Tr as W,
  wr as X,
  Sr as Y,
  kr as Z,
  Nr as _,
  Bi as a,
  ya as a$,
  Dr as a0,
  Mr as a1,
  Pr as a2,
  Rr as a3,
  jr as a4,
  Cr as a5,
  Ar as a6,
  Fr as a7,
  Er as a8,
  Xr as a9,
  ns as aA,
  ms as aB,
  ps as aC,
  ds as aD,
  cs as aE,
  ra as aF,
  sa as aG,
  ls as aH,
  ys as aI,
  us as aJ,
  gs as aK,
  ks as aL,
  Ss as aM,
  Ns as aN,
  qs as aO,
  na as aP,
  Ds as aQ,
  oa as aR,
  Ms as aS,
  ma as aT,
  Ps as aU,
  da as aV,
  Rs as aW,
  ca as aX,
  js as aY,
  la as aZ,
  Cs as a_,
  zr as aa,
  Hr as ab,
  Yr as ac,
  Lr as ad,
  Wr as ae,
  pe as af,
  Gr as ag,
  ea as ah,
  aa as ai,
  Ur as aj,
  ta as ak,
  Kr as al,
  Or as am,
  ia as an,
  _r as ao,
  $r as ap,
  Zr as aq,
  Jr as ar,
  Qr as as,
  es as at,
  as as au,
  ts as av,
  is as aw,
  ss as ax,
  rs as ay,
  os as az,
  Vi as b,
  mt as b$,
  As as b0,
  ua as b1,
  bs as b2,
  hs as b3,
  vs as b4,
  fs as b5,
  Is as b6,
  ws as b7,
  xs as b8,
  Ts as b9,
  on as bA,
  mn as bB,
  pn as bC,
  dn as bD,
  cn as bE,
  ln as bF,
  yn as bG,
  un as bH,
  gn as bI,
  bn as bJ,
  In as bK,
  vn as bL,
  Ei as bM,
  B as bN,
  $a as bO,
  Za as bP,
  Ja as bQ,
  Qa as bR,
  et as bS,
  at as bT,
  tt as bU,
  it as bV,
  ze as bW,
  rt as bX,
  st as bY,
  nt as bZ,
  ot as b_,
  ga as ba,
  Fs as bb,
  Es as bc,
  Bs as bd,
  Vs as be,
  zs as bf,
  Ls as bg,
  Hs as bh,
  Ws as bi,
  Xs as bj,
  Ys as bk,
  Gs as bl,
  Us as bm,
  Ks as bn,
  Os as bo,
  _s as bp,
  $s as bq,
  Zs as br,
  Js as bs,
  Qs as bt,
  en as bu,
  an as bv,
  tn as bw,
  rn as bx,
  sn as by,
  nn as bz,
  zi as c,
  ci as c$,
  pt as c0,
  dt as c1,
  ct as c2,
  lt as c3,
  yt as c4,
  ut as c5,
  gt as c6,
  bt as c7,
  It as c8,
  vt as c9,
  Gt as cA,
  Ut as cB,
  Kt as cC,
  Ot as cD,
  _t as cE,
  $t as cF,
  Le as cG,
  Zt as cH,
  Jt as cI,
  Qt as cJ,
  ei as cK,
  ai as cL,
  Xe as cM,
  Ye as cN,
  V as cO,
  ti as cP,
  ii as cQ,
  ri as cR,
  si as cS,
  Ue as cT,
  oi as cU,
  mi as cV,
  Ge as cW,
  ni as cX,
  pi as cY,
  di as cZ,
  Ke as c_,
  ht as ca,
  ft as cb,
  xt as cc,
  Tt as cd,
  wt as ce,
  St as cf,
  kt as cg,
  Nt as ch,
  qt as ci,
  Dt as cj,
  Mt as ck,
  Pt as cl,
  Rt as cm,
  jt as cn,
  Ct as co,
  At as cp,
  Ft as cq,
  Et as cr,
  Bt as cs,
  Vt as ct,
  zt as cu,
  Lt as cv,
  Ht as cw,
  Wt as cx,
  Xt as cy,
  Yt as cz,
  Li as d,
  li as d0,
  yi as d1,
  ui as d2,
  gi as d3,
  bi as d4,
  vi as d5,
  _e as d6,
  Ii as d7,
  hi as d8,
  fi as d9,
  Sn as dA,
  kn as dB,
  Nn as dC,
  qn as dD,
  Dn as dE,
  Mn as dF,
  ha as dG,
  Pn as dH,
  fa as dI,
  Rn as dJ,
  Ta as dK,
  jn as dL,
  Sa as dM,
  Cn as dN,
  An as dO,
  A as dP,
  ka as dQ,
  Fn as dR,
  En as dS,
  Bn as dT,
  Vn as dU,
  Wn as dV,
  Hn as dW,
  xi as da,
  Ti as db,
  wi as dc,
  Si as dd,
  ki as de,
  Ni as df,
  qi as dg,
  Di as dh,
  Mi as di,
  Pi as dj,
  Ri as dk,
  ji as dl,
  Ci as dm,
  Ai as dn,
  Fi as dp,
  $e as dq,
  zn as dr,
  Ln as ds,
  Ia as dt,
  va as du,
  hn as dv,
  fn as dw,
  xn as dx,
  Tn as dy,
  wn as dz,
  Xn as e,
  Yi as f,
  Wi as g,
  Hi as h,
  Gi as i,
  Xi as j,
  Ka as k,
  Oa as l,
  _a as m,
  Ui as n,
  _i as o,
  Oi as p,
  Ki as q,
  $i as r,
  g as s,
  Zi as t,
  Ji as u,
  Qi as v,
  er as w,
  ar as x,
  tr as y,
  ir as z
};
