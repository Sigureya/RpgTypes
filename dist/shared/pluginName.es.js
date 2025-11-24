import re from "ajv";
import { c as ue, a as ge, m as s } from "./make.es.js";
import { aF as be, aJ as Ie, aK as ve, ax as se, ay as ne, az as oe, ae as he, ai as fe, ak as xe, al as Te, F as we, G as Se, P as ke, p as Ne, u as qe, z as N, cZ as T, cY as w, c$ as v, c_ as S, A as q, B as P, C as De, j as Me, aZ as Pe, a_ as Re, au as je, av as Ce, v as u, cX as Ae, cQ as Fe, cU as Ee, cS as Be } from "./make.es2.js";
const Ga = (e = 0) => ({ code: 314, indent: e, parameters: [0, 0] }), Ka = (e, a = 0) => ({
  code: 314,
  indent: a,
  parameters: [1, e.targetSelectVariableId]
}), Ua = ({ actorId: e = 1, faceIndex: a = 0, faceName: t = "", characterIndex: r = 0, characterName: n = "", battlerName: o = "" } = {}, p = 0) => ({
  code: 322,
  indent: p,
  parameters: [e, n, r, t, a, o]
}), B = (e, a) => `\\${e}[${a}]`, Oa = (e, a) => a.map((t, r) => ({ text: t, controlChar: B(e, r) })), _a = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((a) => ({
  char: a[1],
  id: parseInt(a[2], 10)
})), Za = (e) => e.map((a) => ({ text: a.name, controlChar: B("N", a.id) })), $a = (e) => e.variables.map((a, t) => ({ text: a || "", controlChar: B("V", t) })).filter((a) => a.text !== ""), Ja = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Qa = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), et = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), at = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Ve = (e = {}) => ({
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
}), tt = 0, it = 1, rt = 2, st = 3, nt = 4, ot = 5, mt = 6, pt = 7, dt = 8, ct = 9, lt = 10, yt = 11, ut = 12, gt = 13, bt = 14, It = 15, vt = 16, ht = 17, ft = 18, xt = 19, Tt = 20, wt = 21, St = 22, kt = 23, Nt = 24, qt = 25, Dt = 26, Mt = 27, Pt = 28, Rt = 29, jt = 30, Ct = 31, At = 32, Ft = 33, Et = 34, Bt = 35, Vt = 36, zt = 37, Lt = 38, Ht = 39, Wt = 40, Xt = 41, Yt = 42, Gt = 43, Kt = 44, Ut = 45, Ot = ({ id: e = 1, name: a = "", pages: t = [], note: r = "", x: n = 0, y: o = 0 } = {}) => ({
  id: e,
  name: a,
  pages: t,
  note: r,
  x: n,
  y: o
}), ze = ({ characterIndex: e = 0, characterName: a = "", direction: t = 2, pattern: r = 0, tileId: n = 0 } = {}) => ({
  characterIndex: e,
  characterName: a,
  direction: t,
  pattern: r,
  tileId: n
}), _t = ({ list: e = [], conditions: a = Ve(), image: t = ze(), moveFrequency: r = 5, directionFix: n = !1, moveRoute: o = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: a,
  list: e,
  directionFix: n,
  image: t,
  moveFrequency: r,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), Zt = (e = {}) => ({
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
}), $t = (e = { id: 0 }) => {
  return { name: e.name ?? (a = e.id, a.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var a;
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
}, me = new re({
  strict: !0
}), He = me.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), We = me.compile(Le), Jt = (e) => He(e), Qt = (e) => We(e), Xe = {
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
}, Ye = {
  title: "ダメージ",
  options: {}
}, V = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), ei = (e = {}) => ({
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
}), ai = (e) => ({
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
}), ti = (e = {}) => ({
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
}), ii = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), Ge = ({ mhp: e = 0, mmp: a = 0, atk: t = 0, def: r = 0, mat: n = 0, mdf: o = 0, agi: p = 0, luk: l = 0 }) => [e, a, t, r, n, o, p, l], ri = (e) => {
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
}, Ke = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), si = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), ni = (e = {}) => {
  var a;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((a = e.dropItems) == null ? void 0 : a.map(() => Ke())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: e.params ? [...e.params] : Ge({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
    actions: []
  };
}, oi = (e = {}) => ({
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
}), d = "{name}", h = "{name} * {value}%", Q = "{name} + {value}%", ee = "{value}", Ue = { title: "特徴", options: {
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
} }, mi = (e, a, t) => {
  const r = ue(Oe);
  return ge(a, t, r, e.pattern, (n) => n.dataId);
}, pi = (e = {}) => ({
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
}), di = {
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
}, ci = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, li = 0, yi = 1, ui = 2, ae = "{name} {value1}%", C = "{value1}% + {value2}", te = "{name} {value1}ターン", k = "{name}", _e = { title: "使用効果", options: {
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
} }, gi = 0, bi = (e, a, t) => {
  const r = t.find((o) => o.id === a.dataId), n = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", a.value1.toString()).replaceAll("{value2}", a.value2.toString()).replaceAll("{name}", n);
}, Ii = { title: "アイテム", options: { consumable: "消耗品" } }, vi = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, hi = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, fi = (e = {}) => ({
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
}), xi = (e = {}) => ({
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
}), Ti = "data", wi = "actor", Si = "map", ki = "enemy", Ni = "state", qi = "skill", Di = "item", Mi = "weapon", Pi = "armor", Ri = "class", ji = "common_event", Ci = "troop", Ze = {
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
}, Ai = () => ({ rpg: { damage: Ye, data: Xe, traits: Ue, itemEffect: _e }, global: Ze }), Fi = (e, a = 0) => ({ code: be, parameters: [e.actorId, e.name], indent: a }), Ei = (e, a = 0) => ({
  code: Ie,
  parameters: [e.actorId, e.nickname],
  indent: a
}), Bi = (e, a = 0) => ({ code: ve, parameters: [e.actorId, e.profile], indent: a }), x = { direct: 0, variable: 1 }, Vi = (e, a = 0) => ({
  code: se,
  indent: a,
  parameters: pe(0, e)
}), zi = (e, a = 0) => ({ code: se, indent: a, parameters: pe(1, e) }), Li = (e, a = 0) => ({ code: oe, indent: a, parameters: R(0, e) }), Hi = (e, a = 0) => ({
  code: oe,
  indent: a,
  parameters: R(1, e)
}), Wi = (e, a = 0) => ({ code: ne, indent: a, parameters: R(0, e) }), Xi = (e, a = 0) => ({
  code: ne,
  indent: a,
  parameters: R(1, e)
}), R = (e, a) => [a.targetType === "variable" ? x.variable : x.direct, a.targetType === "each" ? 0 : a.target, e, x[a.operand.mode], a.operand.value], pe = (e, a) => [a.targetType === "variable" ? x.variable : x.direct, a.targetType === "each" ? 0 : a.target, e, x[a.operand.mode], a.operand.value, a.allowDeath], Yi = (e, a = 0) => ({
  code: 242,
  indent: a,
  parameters: [e.duration]
}), Gi = (e = 0) => ({ code: 243, indent: e, parameters: [] }), Ki = (e = 0) => ({ code: 244, indent: e, parameters: [] }), Ui = (e, a = 0) => ({
  code: 246,
  indent: a,
  parameters: [e.duration]
}), Oi = (e, a) => g(e, s({ name: a })), g = (e, a, t = 0) => ({
  code: e,
  parameters: [s(a)],
  indent: t
}), _i = (e, a = 0) => g(he, e, a), Zi = (e, a = 0) => g(fe, e, a), $i = (e, a = 0) => g(xe, e, a), Ji = (e, a = 0) => g(Te, e, a), Qi = (e, a = 0) => g(we, e, a), er = (e, a = 0) => g(Se, e, a), ar = (e, a = 0) => g(ke, e, a), $e = {
  plus: 0,
  minus: 1
}, tr = ({ operation: e, time: a }) => ({ code: 124, indent: 0, parameters: [$e[e ?? "plus"] ?? 0, a ?? 0] });
function ir(e, a = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: a };
}
const rr = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), sr = (e, a = 0) => ({ code: 333, indent: a, parameters: [e.enemyIndex, 0, e.stateId] }), nr = (e, a = 0) => ({
  code: 333,
  indent: a,
  parameters: [e.enemyIndex, 1, e.stateId]
}), or = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 0, e.stateId] }), mr = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 1, e.stateId] }), pr = (e = 0) => ({
  code: 334,
  indent: e,
  parameters: [0]
}), dr = (e, a = 0) => ({ code: 334, indent: a, parameters: [e.enemyIndex] }), cr = (e, a = 0) => ({ code: Ne, indent: a, parameters: Je(e ?? {}) }), lr = (e) => ({
  eventId: e[0]
}), Je = (e) => [e.eventId ?? 0], yr = (e) => ({ min: e[0], max: e[1], value: e[2] }), Qe = (e) => [e.min, e.max, e.value], ur = (e, a = 0) => ({ code: qe, indent: a, parameters: Qe(e) }), gr = (e, a = 0) => ({
  code: 103,
  parameters: [e.variableId, e.maxDigits],
  indent: a
}), br = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], Ir = (e) => ({ variableId: e[0], maxDigits: e[1] }), vr = (e) => e.parameters[3] === v, hr = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3]
}), fr = (e, a = 0) => ({ code: N, indent: a, parameters: [e.operation, e.itemId, e.value, e.operand] }), xr = (e, a = 0) => ({
  code: N,
  indent: a,
  parameters: [T, e.itemId, e.value, w]
}), Tr = (e, a = 0) => ({ code: N, indent: a, parameters: [T, e.itemId, e.variableId, v] }), wr = (e, a = 0) => ({
  code: N,
  indent: a,
  parameters: [S, e.itemId, e.value, w]
}), Sr = (e, a = 0) => ({ code: N, indent: a, parameters: [S, e.itemId, e.variableId, v] }), kr = (e) => ({ operation: e[0], weaponId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), Nr = (e, a = 0) => ({
  code: q,
  indent: a,
  parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip]
}), qr = (e, a = 0) => ({ code: q, indent: a, parameters: [T, e.weaponId, e.value, w, !1] }), Dr = (e, a = 0) => ({
  code: q,
  indent: a,
  parameters: [T, e.weaponId, e.variableId, v, !1]
}), Mr = (e, a = 0) => ({ code: q, indent: a, parameters: [S, e.weaponId, e.value, w, !1] }), Pr = (e, a = 0) => ({
  code: q,
  indent: a,
  parameters: [S, e.weaponId, e.variableId, v, !1]
}), Rr = (e, a = 0) => ({ code: P, indent: a, parameters: [T, e.armorId, e.value, w, !1] }), jr = (e, a = 0) => ({
  code: P,
  indent: a,
  parameters: [T, e.armorId, e.variableId, v, !1]
}), Cr = (e, a = 0) => ({ code: P, indent: a, parameters: [S, e.armorId, e.value, w, !1] }), Ar = (e, a = 0) => ({
  code: P,
  indent: a,
  parameters: [S, e.armorId, e.variableId, v, !1]
}), Fr = (e, a = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: a }), Er = (e) => ({ variableId: e[0], itemType: e[1] }), Br = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), Vr = (e = 0) => ({ code: 135, parameters: [0], indent: e }), zr = (e = 0) => ({ code: 134, parameters: [1], indent: e }), Lr = (e = 0) => ({ code: 134, parameters: [0], indent: e }), Hr = (e = 0) => ({
  code: 137,
  parameters: [1],
  indent: e
}), Wr = (e = 0) => ({ code: 137, parameters: [0], indent: e }), de = (e) => [e], Xr = (e) => ({ comment: e[0] }), ea = (e, a = 0) => ({ code: De, indent: a, parameters: de(e) }), aa = (e, a = 0) => ({
  code: Me,
  indent: a,
  parameters: de(e)
}), Yr = (e, a = 0) => e.map((t, r) => r === 0 ? ea(t, a) : aa(t, a)), Gr = (e, a = 0) => ({ code: 402, indent: a, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), Kr = (e) => ({
  index: e[0],
  name: e[1]
}), Ur = (e) => [e.index ?? 0, e.name ?? ""], Or = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), _r = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Zr = (e, a = 0) => ({
  code: 102,
  indent: a,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), $r = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Jr = (e, a = 0) => ({ code: 261, indent: a, parameters: [e.filename] }), Qr = (e) => ({
  filename: e[0]
}), es = ({ args: e = {}, commandName: a, commandTitle: t = "", pluginName: r }, n = 0) => ({ code: 357, indent: n, parameters: [r, a, t, { ...e }] }), as = (e) => ({
  pluginName: e[0],
  commandName: e[1],
  commandTitle: e[2],
  args: { ...e[3] }
}), ts = (e, a = 0) => ({ code: 129, parameters: [0, e.actorId], indent: a }), is = (e, a = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: a
}), rs = ({ pictureId: e = 0, origin: a = 0, name: t = "", x: r = 0, y: n = 0, scaleX: o = 100, scaleY: p = 100, opacity: l = 255, blendMode: y = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, t, a, r, n, o, p, l, y]
}), ss = ({ pictureId: e, origin: a, x: t, y: r, scaleX: n, scaleY: o, opacity: p, blendMode: l, wait: y = !1, easingType: D = 0 }) => ({ code: 232, indent: 0, parameters: [e, a, t, r, n, o, p, l, y, D] }), ta = (e, a = 0) => ({
  code: Pe,
  indent: a,
  parameters: [e]
}), ia = (e, a = 0) => ({ code: Re, indent: a, parameters: [e] }), ns = (e, a = 0) => e.map((t, r) => r === 0 ? ta(t, a) : ia(t, a)), os = 1, ms = 0, M = {
  item: 0,
  weapon: 1,
  armors: 2
}, ps = ({ goods: e, buyOnly: a = !1 }, t = 0) => e.map((r, n) => {
  const o = ((p) => p.customPrice !== void 0 && p.customPrice !== 0)(r) ? 1 : 0;
  return n === 0 ? {
    code: je,
    indent: t,
    parameters: [M[r.itemType] ?? M.item, r.id, o, r.customPrice ?? 0, a]
  } : { code: Ce, indent: t, parameters: [M[r.itemType] ?? M.item, r.id, o, r.customPrice ?? 0] };
}), ds = 0, cs = 1, ls = 2, ys = 3, us = 4, gs = 0, bs = 1, Is = 2, vs = (e, a) => {
  switch (a[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return a[6] >= 2 && a[6] <= 9 ? e.param(a[6] - 2) : 0;
}, hs = (e, a) => {
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
}, fs = (e) => e.parameters[2] === 1, ra = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 3, a.index, a.param], xs = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: ra(e, a, t.operation ?? 0)
}), sa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 2, a.armorId], Ts = (e, a) => ({
  code: u,
  indent: 0,
  parameters: sa(e, a, 0)
}), na = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 0, a.value], ws = (e, a, t = {}) => ({ code: u, indent: t.indent ?? 0, parameters: na(e, a, t.operation ?? 0) }), oa = {
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
}, ma = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 4, a.index, oa[a.param]], Ss = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: ma(e, a, t.operation ?? 0)
}), ks = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: pa(e, a, t.operation ?? 0)
}), pa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 0, a.itemId], da = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 2, a.min, a.max], Ns = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: da(e, a, t.operation ?? 0)
}), ca = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 4, a.code], qs = (e, a, t = {}) => ({
  code: u,
  indent: t.indent ?? 0,
  parameters: ca(e, a, t.operation ?? 0)
}), la = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 1, a.weaponId], Ds = (e, a) => ({ code: u, indent: 0, parameters: la(e, a, 0) }), ya = (e) => [...e], Ms = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: ya(e.parameters)
}), ua = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Ps = (e) => e.parameters.every(ua), Rs = "bgm", js = "se", Cs = "me", As = "bgs", Fs = "battlebacks1", Es = "battlebacks2", Bs = "characters", Vs = "enemies", zs = "faces", Ls = "parallaxes", Hs = "pictures", Ws = "sv_actors", Xs = "sv_enemies", Ys = "system", Gs = "tilesets", Ks = "titles1", Us = "titles2", Os = "System.json", _s = "Actors.json", Zs = "Classes.json", $s = "Skills.json", Js = "Items.json", Qs = "Weapons.json", en = "Armors.json", an = "Enemies.json", tn = "Troops.json", rn = "States.json", sn = "Animations.json", nn = "Tilesets.json", on = "CommonEvents.json", mn = "MapInfos.json", pn = "data", dn = "img", cn = "audio", ln = "js", ga = (e = {}) => ({
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
}), ba = (e = {}) => [s(e.cursor), s(e.ok), s(e.cancel), s(e.buzzer), s(e.equip), s(e.save), s(e.load), s(e.battleStart), s(e.escape), s(e.enemyAttack), s(e.enemyDamage), s(e.enemyCollapse), s(e.bossCollapes1), s(e.bossCollapes2), s(e.actorDamage), s(e.actorCollapse), s(e.playRecovery), s(e.playMiss), s(e.playEvasion), s(e.playMagicEvasion), s(e.playReflection), s(e.shop), s(e.useItem), s(e.useSkill)], yn = (e) => ({
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
}), un = (e) => e.menuCommands[0], gn = (e) => e.menuCommands[1], bn = (e) => e.menuCommands[2], In = (e) => e.menuCommands[3], vn = (e) => e.menuCommands[4], hn = (e) => e.menuCommands[5], fn = (e) => e.itemCategories[0], xn = (e) => e.itemCategories[1], Tn = (e) => e.itemCategories[2], wn = (e) => e.itemCategories[3], Ia = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], Sn = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), va = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], kn = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), ha = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, fa = (e = {}) => ({
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
}), c = { type: "boolean" }, xa = {
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
}, Nn = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), Ta = (e) => ({
  armorTypes: b(e.armorTypes),
  elements: b(e.elements),
  equipTypes: b(e.equipTypes),
  weaponTypes: b(e.weaponTypes),
  skillTypes: b(e.skillTypes),
  variables: b(e.variables),
  switches: b(e.switches)
}), b = (e) => e ? [...e] : [], qn = (e) => e.terms.params.map((a, t) => ({
  name: a,
  id: t
})), Dn = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), A = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: s(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), wa = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), Mn = { title: "オプション", options: {
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
} }, Pn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Rn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, jn = {
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
}, ce = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, le = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, ye = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, f = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, Sa = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: f, victoryMe: f, gameoverMe: f, titleBgm: f, defeatMe: f, sounds: {
    type: "array",
    items: f,
    minItems: 24,
    maxItems: 24
  } }
}, ka = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, Na = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, qa = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, Da = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, I = { type: "array", items: { type: "string" } }, Ma = {
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
}, m = { type: "string" }, ie = { type: "string", nullable: !0 }, i = { type: "string" }, Pa = {
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
}, Ra = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: ye },
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
}, ja = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
  attackMotions: { type: "array", items: ce }
} }, Ca = (e) => e.reduce((a, t) => ({ required: [...a.required, ...t.required], properties: { ...a.properties, ...t.properties } }), {
  required: [],
  properties: {}
}), j = new re({ strict: !0 }), Aa = ((e) => {
  const a = Ca(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(a.required)),
    properties: a.properties
  };
})([ja, Sa, ka, ha, xa, Na, le, Da, Ma, Pa, qa, Ra]), Fa = j.compile(Aa), Cn = (e) => Fa(e), Ea = j.compile(ye);
j.compile(ce);
const Ba = j.compile(le), An = (e) => {
  var t, r, n, o, p, l, y, D, z, L, H, W, X, Y, G, K, U, O, _, Z, $, J;
  const a = za(e.size);
  return {
    ...fa(e.options),
    currencyUnit: ((t = e.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: ba(e.sounds),
    editor: wa(e.editing),
    advanced: ga(e.advanced),
    title1Name: ((n = e.images) == null ? void 0 : n.title1Name) ?? "",
    title2Name: ((o = e.images) == null ? void 0 : o.title2Name) ?? "",
    ...Ta(e.dataNames ?? {}),
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
    testBattlers: La((Y = e.battleTest) == null ? void 0 : Y.testBattlers, Ha),
    battleBgm: s((G = e.bgm) == null ? void 0 : G.battleBgm),
    victoryMe: s((K = e.me) == null ? void 0 : K.victoryMe),
    editMapId: ((U = e.editorTemporary) == null ? void 0 : U.editMapId) ?? 0,
    battlerName: ((O = e.editorTemporary) == null ? void 0 : O.battlerName) ?? "",
    locale: "",
    startMapId: ((_ = e.gameInit) == null ? void 0 : _.startMapId) ?? 0,
    startX: ((Z = e.gameInit) == null ? void 0 : Z.startX) ?? 0,
    startY: (($ = e.gameInit) == null ? void 0 : $.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Va(e.terms ?? {}),
    itemCategories: Ia(e.itemCategories),
    partyMembersArray: E((J = e.gameInit) == null ? void 0 : J.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: va(e.menuComamnds)
  };
}, Va = (e) => ({
  basic: Be(e.basic ?? {}),
  commands: Ee(e.commands ?? {}),
  params: Fe(e.params ?? {}),
  messages: Ae(e.messages ?? {})
}), E = (e) => e ? [...e] : [], za = (e) => ((a) => Ba(a))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, La = (e, a) => e ? e.map(a) : [], Ha = (e) => ((a) => Ea(a))(e) ? { actorId: e.actorId, equips: E(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Fn = (e) => ({ ...e.text ? { text: e.text } : {}, ...e.desc ? { desc: e.desc } : {} }), En = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Bn = (e) => {
  const a = e.split("/");
  return a[a.length - 1];
};
export {
  kr as $,
  tr as A,
  rr as B,
  ir as C,
  or as D,
  sr as E,
  mr as F,
  nr as G,
  dr as H,
  pr as I,
  cr as J,
  lr as K,
  Je as L,
  yr as M,
  Qe as N,
  ur as O,
  Ir as P,
  gr as Q,
  br as R,
  Er as S,
  Fr as T,
  hr as U,
  vr as V,
  fr as W,
  xr as X,
  Tr as Y,
  wr as Z,
  Sr as _,
  Fi as a,
  us as a$,
  Nr as a0,
  qr as a1,
  Dr as a2,
  Mr as a3,
  Pr as a4,
  Rr as a5,
  jr as a6,
  Cr as a7,
  Ar as a8,
  Hr as a9,
  ia as aA,
  ns as aB,
  os as aC,
  ms as aD,
  ps as aE,
  hs as aF,
  vs as aG,
  fs as aH,
  xs as aI,
  ra as aJ,
  Ts as aK,
  sa as aL,
  ws as aM,
  na as aN,
  Ss as aO,
  ma as aP,
  ks as aQ,
  pa as aR,
  Ns as aS,
  da as aT,
  qs as aU,
  ca as aV,
  Ds as aW,
  la as aX,
  ds as aY,
  ys as aZ,
  ls as a_,
  Br as aa,
  zr as ab,
  Wr as ac,
  Vr as ad,
  Lr as ae,
  de as af,
  Xr as ag,
  ea as ah,
  aa as ai,
  Yr as aj,
  Gr as ak,
  Kr as al,
  Ur as am,
  Or as an,
  _r as ao,
  Zr as ap,
  $r as aq,
  Qr as ar,
  Jr as as,
  as as at,
  es as au,
  ts as av,
  is as aw,
  rs as ax,
  ss as ay,
  ta as az,
  Ei as b,
  lt as b$,
  cs as b0,
  Is as b1,
  gs as b2,
  bs as b3,
  ya as b4,
  Ms as b5,
  Ps as b6,
  Rs as b7,
  js as b8,
  Cs as b9,
  on as bA,
  mn as bB,
  pn as bC,
  dn as bD,
  cn as bE,
  ln as bF,
  Ai as bG,
  B as bH,
  Oa as bI,
  _a as bJ,
  Za as bK,
  $a as bL,
  Ja as bM,
  Qa as bN,
  et as bO,
  at as bP,
  Ve as bQ,
  tt as bR,
  it as bS,
  rt as bT,
  st as bU,
  nt as bV,
  ot as bW,
  mt as bX,
  pt as bY,
  dt as bZ,
  ct as b_,
  As as ba,
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
  Ks as bm,
  Us as bn,
  Os as bo,
  _s as bp,
  Zs as bq,
  $s as br,
  Js as bs,
  Qs as bt,
  en as bu,
  an as bv,
  tn as bw,
  rn as bx,
  sn as by,
  nn as bz,
  Bi as c,
  bi as c$,
  yt as c0,
  ut as c1,
  gt as c2,
  bt as c3,
  It as c4,
  vt as c5,
  ht as c6,
  ft as c7,
  xt as c8,
  Tt as c9,
  ze as cA,
  _t as cB,
  Zt as cC,
  $t as cD,
  Jt as cE,
  Qt as cF,
  Xe as cG,
  Ye as cH,
  V as cI,
  ei as cJ,
  ai as cK,
  ti as cL,
  ii as cM,
  Ke as cN,
  si as cO,
  ni as cP,
  Ge as cQ,
  ri as cR,
  oi as cS,
  mi as cT,
  Ue as cU,
  pi as cV,
  di as cW,
  ci as cX,
  li as cY,
  yi as cZ,
  ui as c_,
  wt as ca,
  St as cb,
  kt as cc,
  Nt as cd,
  qt as ce,
  Dt as cf,
  Mt as cg,
  Pt as ch,
  Rt as ci,
  jt as cj,
  Ct as ck,
  At as cl,
  Ft as cm,
  Et as cn,
  Bt as co,
  Vt as cp,
  zt as cq,
  Lt as cr,
  Ht as cs,
  Wt as ct,
  Xt as cu,
  Yt as cv,
  Gt as cw,
  Kt as cx,
  Ut as cy,
  Ot as cz,
  Vi as d,
  _e as d0,
  gi as d1,
  Ii as d2,
  vi as d3,
  hi as d4,
  fi as d5,
  xi as d6,
  Ti as d7,
  wi as d8,
  Si as d9,
  Ia as dA,
  Sn as dB,
  va as dC,
  kn as dD,
  fa as dE,
  Nn as dF,
  Ta as dG,
  qn as dH,
  Dn as dI,
  A as dJ,
  wa as dK,
  Mn as dL,
  Pn as dM,
  Rn as dN,
  jn as dO,
  En as dP,
  Fn as dQ,
  ki as da,
  Ni as db,
  qi as dc,
  Di as dd,
  Mi as de,
  Pi as df,
  Ri as dg,
  ji as dh,
  Ci as di,
  Ze as dj,
  Cn as dk,
  An as dl,
  ga as dm,
  ba as dn,
  yn as dp,
  un as dq,
  gn as dr,
  bn as ds,
  In as dt,
  vn as du,
  hn as dv,
  fn as dw,
  xn as dx,
  Tn as dy,
  wn as dz,
  Bn as e,
  Wi as f,
  Li as g,
  zi as h,
  Xi as i,
  Hi as j,
  Ga as k,
  Ka as l,
  Ua as m,
  Yi as n,
  Ui as o,
  Ki as p,
  Gi as q,
  Oi as r,
  g as s,
  _i as t,
  Zi as u,
  $i as v,
  Ji as w,
  Qi as x,
  er as y,
  ar as z
};
