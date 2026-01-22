import ea from "ajv";
import { c as ta, a as sa, m as i } from "./make.es2.js";
import { aF as ia, aJ as ra, aK as na, ax as $, ay as Z, az as J, ae as oa, ai as ma, ak as pa, al as da, F as ca, G as la, P as ya, p as ga, u as ua, z as x, cZ as I, cY as v, c$ as g, c_ as h, A as T, B as S, C as ba, j as Ia, h as va, i as ha, aZ as fa, a_ as xa, au as Ta, av as wa, v as c, cX as ka, cQ as Sa, cU as Na, cS as Ra } from "./make.es.js";
const fe = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), xe = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), Te = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: r = "", battlerName: n = "" } = {}, o = 0) => ({
  code: 322,
  indent: o,
  parameters: [a, r, s, t, e, n]
}), M = (a, e) => `\\${a}[${e}]`, we = (a, e) => e.map((t, s) => ({ text: t, controlChar: M(a, s) })), ke = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), Se = (a) => a.map((e) => ({ text: e.name, controlChar: M("N", e.id) })), Ne = (a) => a.variables.map((e, t) => ({ text: e || "", controlChar: M("V", t) })).filter((e) => e.text !== ""), Re = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), Ce = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), De = (a = {}) => ({
  enemyId: a.enemyId ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  hidden: a.hidden ?? !1
}), Me = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), Ca = (a = {}) => ({
  switch1Id: a.switch1Id ?? 0,
  switch1Valid: a.switch1Id !== void 0,
  switch2Id: a.switch2Id ?? 0,
  switch2Valid: a.switch2Id !== void 0,
  variableId: a.variableId ?? 0,
  variableValid: a.variableId !== void 0,
  variableValue: a.variableValue ?? 0,
  selfSwitchCh: a.selfSwitchCh ?? "A",
  selfSwitchValid: a.selfSwitchCh !== void 0,
  itemId: a.itemId ?? 0,
  itemValid: a.itemId !== void 0,
  actorId: a.actorId ?? 0,
  actorValid: a.actorId !== void 0
}), qe = 0, Pe = 1, Ae = 2, Be = 3, Ee = 4, je = 5, Fe = 6, Ve = 7, ze = 8, Le = 9, He = 10, We = 11, Xe = 12, Ye = 13, Ge = 14, Ke = 15, Ue = 16, Oe = 17, _e = 18, $e = 19, Ze = 20, Je = 21, Qe = 22, at = 23, et = 24, tt = 25, st = 26, it = 27, rt = 28, nt = 29, ot = 30, mt = 31, pt = 32, dt = 33, ct = 34, lt = 35, yt = 36, gt = 37, ut = 38, bt = 39, It = 40, vt = 41, ht = 42, ft = 43, xt = 44, Tt = 45, wt = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: r = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: r,
  y: n
}), Da = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: r = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: r
}), kt = ({ list: a = [], conditions: e = Ca(), image: t = Da(), moveFrequency: s = 5, directionFix: r = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: e,
  list: a,
  directionFix: r,
  image: t,
  moveFrequency: s,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), St = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Nt = (a = {}) => ({
  data: a.data ?? [],
  battleback1Name: a.battleback1Name ?? "",
  battleback2Name: a.battleback2Name ?? "",
  autoplayBgm: a.autoplayBgm ?? !1,
  autoplayBgs: a.autoplayBgs ?? !1,
  parallaxLoopX: a.parallaxLoopX ?? !1,
  parallaxLoopY: a.parallaxLoopY ?? !1,
  parallaxName: a.parallaxName ?? "",
  parallaxShow: a.parallaxShow ?? !1,
  parallaxSx: a.parallaxSx ?? 0,
  parallaxSy: a.parallaxSy ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  width: a.width ?? 0,
  height: a.height ?? 0,
  note: a.note ?? "",
  bgm: a.bgm ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  bgs: a.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: a.disableDashing ?? !1,
  displayName: a.displayName ?? "",
  encounterList: a.encounterList ?? [],
  events: a.events ?? []
}), Rt = (a = { id: 0 }) => {
  return {
    name: a.name ?? (e = a.id, e.toString().padStart(3, "0")),
    id: a.id,
    expanded: a.expanded ?? !1,
    order: a.order ?? 0,
    parentId: a.parentId ?? 0,
    scrollX: a.scrollX ?? 0,
    scrollY: a.scrollY ?? 0
  };
  var e;
}, Ma = {
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
}, qa = new ea({
  strict: !0
}).compile(Ma), Ct = (a) => qa(a), Pa = {
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
}, Aa = { title: "ダメージ", options: {} }, q = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), Dt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), Mt = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), qt = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  atypeId: a.atypeId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0
}), Pt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Ba = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: r = 0, mdf: n = 0, agi: o = 0, luk: p = 0 }) => [a, e, t, s, r, n, o, p], At = (a) => {
  const [e, t, s, r, n, o, p, d] = a;
  return {
    mhp: e,
    mmp: t,
    atk: s,
    def: r,
    mat: n,
    mdf: o,
    agi: p,
    luk: d
  };
}, Ea = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Bt = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Et = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => Ea())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : Ba({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
    actions: []
  };
}, jt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  iconIndex: a.iconIndex ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  message3: a.message3 ?? "",
  message4: a.message4 ?? "",
  traits: [],
  note: a.note ?? "",
  messageType: a.messageType ?? 0,
  releaseByDamage: a.releaseByDamage ?? !1,
  restriction: a.restriction ?? 0,
  priority: a.priority ?? 0,
  motion: a.motion ?? 0,
  overlay: a.overlay ?? 0,
  removeAtBattleEnd: a.removeAtBattleEnd ?? !1,
  removeByRestriction: a.removeByRestriction ?? !1,
  autoRemovalTiming: a.autoRemovalTiming ?? 0,
  minTurns: a.minTurns ?? 0,
  maxTurns: a.maxTurns ?? 0,
  removeByDamage: a.removeByDamage ?? !1,
  chanceByDamage: a.chanceByDamage ?? 0,
  removeByWalking: a.removeByWalking ?? !1,
  stepsToRemove: a.stepsToRemove ?? 0
}), m = "{name}", u = "{name} * {value}%", K = "{name} + {value}%", U = "{value}", ja = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: u, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: K, options: {
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
  specialParam: { title: "特殊能力値", format: u, options: {
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
    format: m,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: m, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: m, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: u },
  debuffRate: { title: "弱体有効度", format: u },
  stateRate: { title: "ステート有効度", format: u },
  stateResist: {
    title: "ステート無効",
    format: m
  },
  attackElement: { title: "攻撃属性", format: m },
  attackState: { title: "攻撃ステート", format: K },
  attackSpeed: { title: "攻撃速度補正", format: U },
  attackTimes: {
    title: "攻撃追加回数",
    format: U
  },
  actionPlus: { title: "行動追加", format: u },
  attackSkill: { title: "攻撃スキル", format: m },
  equipWeaponType: { title: "装備武器タイプ", format: m },
  equipArmorType: { title: "装備防具タイプ", format: m },
  equipLock: {
    title: "装備固定",
    format: m
  },
  equipSeal: { title: "装備封印", format: m },
  slotType: { title: "スロットタイプ", format: m },
  skillAdd: { title: "スキル追加", format: m },
  skillSeal: { title: "スキルタイプ封印", format: m },
  skillTypeAdd: { title: "スキルタイプ追加", format: m },
  skillTypeSeal: { title: "スキルタイプ封印", format: m }
} }, Fa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Ft = (a, e, t) => {
  const s = ta(Fa);
  return sa(e, t, s, a.pattern, (r) => r.dataId);
}, Vt = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  animationId: a.animationId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0,
  damage: q(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), zt = {
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
}, Lt = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Ht = 0, Wt = 1, Xt = 2, O = "{name} {value1}%", R = "{value1}% + {value2}", _ = "{name} {value1}ターン", f = "{name}", Va = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: _ },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: _ },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: R },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: f },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: R
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: R },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: f
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: f },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: O },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: f
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: O },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: f }
} }, Yt = 0, Gt = (a, e, t) => {
  const s = t.find((n) => n.id === e.dataId), r = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", r);
}, Kt = { title: "アイテム", options: { consumable: "消耗品" } }, Ut = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Ot = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, _t = (a = {}) => ({
  animationId: a.animationId ?? 0,
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  itypeId: a.itypeId ?? 0,
  note: a.note ?? "",
  consumable: a.consumable ?? !1,
  scope: a.scope ?? 0,
  occasion: a.occasion ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  repeats: a.repeats ?? 0,
  tpGain: a.tpGain ?? 0,
  hitType: a.hitType ?? 0,
  damage: q(a.damage ?? {}),
  effects: [],
  price: 0
}), $t = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: q(a.damage ?? {}),
  description: a.description ?? "",
  effects: [],
  hitType: a.hitType ?? 0,
  iconIndex: a.iconIndex ?? 0,
  id: a.id ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  messageType: a.messageType ?? 0,
  name: a.name ?? "",
  note: a.note ?? "",
  mpCost: a.mpCost ?? 0,
  occasion: a.occasion ?? 0,
  repeats: a.repeats ?? 0,
  scope: a.scope ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  tpCost: a.tpCost ?? 0,
  tpGain: a.tpGain ?? 0
}), Zt = "data", Jt = "actor", Qt = "map", as = "enemy", es = "state", ts = "skill", ss = "item", is = "weapon", rs = "armor", ns = "class", os = "common_event", ms = "troop", za = {
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
}, ps = () => ({ rpg: { damage: Aa, data: Pa, traits: ja, itemEffect: Va }, global: za }), ds = (a, e = 0) => ({ code: ia, parameters: [a.actorId, a.name], indent: e }), cs = (a, e = 0) => ({
  code: ra,
  parameters: [a.actorId, a.nickname],
  indent: e
}), ls = (a, e = 0) => ({ code: na, parameters: [a.actorId, a.profile], indent: e }), b = { direct: 0, variable: 1 }, ys = (a, e = 0) => ({
  code: $,
  indent: e,
  parameters: Q(0, a)
}), gs = (a, e = 0) => ({ code: $, indent: e, parameters: Q(1, a) }), us = (a, e = 0) => ({ code: J, indent: e, parameters: N(0, a) }), bs = (a, e = 0) => ({
  code: J,
  indent: e,
  parameters: N(1, a)
}), Is = (a, e = 0) => ({ code: Z, indent: e, parameters: N(0, a) }), vs = (a, e = 0) => ({
  code: Z,
  indent: e,
  parameters: N(1, a)
}), N = (a, e) => [e.targetType === "variable" ? b.variable : b.direct, e.targetType === "each" ? 0 : e.target, a, b[e.operand.mode], e.operand.value], Q = (a, e) => [e.targetType === "variable" ? b.variable : b.direct, e.targetType === "each" ? 0 : e.target, a, b[e.operand.mode], e.operand.value, e.allowDeath], hs = (a, e = 0) => ({
  code: 242,
  indent: e,
  parameters: [a.duration]
}), fs = (a = 0) => ({ code: 243, indent: a, parameters: [] }), xs = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Ts = (a, e = 0) => ({
  code: 246,
  indent: e,
  parameters: [a.duration]
}), ws = (a, e) => l(a, i({ name: e })), l = (a, e, t = 0) => ({
  code: a,
  parameters: [i(e)],
  indent: t
}), ks = (a, e = 0) => l(oa, a, e), Ss = (a, e = 0) => l(ma, a, e), Ns = (a, e = 0) => l(pa, a, e), Rs = (a, e = 0) => l(da, a, e), Cs = (a, e = 0) => l(ca, a, e), Ds = (a, e = 0) => l(la, a, e), Ms = (a, e = 0) => l(ya, a, e), La = {
  plus: 0,
  minus: 1
}, qs = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [La[a ?? "plus"] ?? 0, e ?? 0] });
function Ps(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const As = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Bs = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), Es = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), js = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), Fs = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Vs = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), zs = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Ls = (a, e = 0) => ({ code: ga, indent: e, parameters: Ha(a ?? {}) }), Hs = (a) => ({
  eventId: a[0]
}), Ha = (a) => [a.eventId ?? 0], Ws = (a) => ({ min: a[0], max: a[1], value: a[2] }), Wa = (a) => [a.min, a.max, a.value], Xs = (a, e = 0) => ({ code: ua, indent: e, parameters: Wa(a) }), Ys = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Gs = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Ks = (a) => ({ variableId: a[0], maxDigits: a[1] }), Us = (a) => a.parameters[3] === g, Os = (a) => ({
  operation: a[0],
  itemId: a[1],
  value: a[2],
  operand: a[3]
}), _s = (a, e = 0) => ({ code: x, indent: e, parameters: [a.operation, a.itemId, a.value, a.operand] }), $s = (a, e = 0) => ({
  code: x,
  indent: e,
  parameters: [I, a.itemId, a.value, v]
}), Zs = (a, e = 0) => ({ code: x, indent: e, parameters: [I, a.itemId, a.variableId, g] }), Js = (a, e = 0) => ({
  code: x,
  indent: e,
  parameters: [h, a.itemId, a.value, v]
}), Qs = (a, e = 0) => ({ code: x, indent: e, parameters: [h, a.itemId, a.variableId, g] }), ai = (a) => ({ operation: a[0], weaponId: a[1], value: a[2], operand: a[3], includesEquip: a[4] }), ei = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [a.operation, a.weaponId, a.value, a.operand, a.includesEquip]
}), ti = (a, e = 0) => ({ code: T, indent: e, parameters: [I, a.weaponId, a.value, v, !1] }), si = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [I, a.weaponId, a.variableId, g, !1]
}), ii = (a, e = 0) => ({ code: T, indent: e, parameters: [h, a.weaponId, a.value, v, !1] }), ri = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [h, a.weaponId, a.variableId, g, !1]
}), ni = (a, e = 0) => ({ code: S, indent: e, parameters: [I, a.armorId, a.value, v, !1] }), oi = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [I, a.armorId, a.variableId, g, !1]
}), mi = (a, e = 0) => ({ code: S, indent: e, parameters: [h, a.armorId, a.value, v, !1] }), pi = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [h, a.armorId, a.variableId, g, !1]
}), di = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), ci = (a) => ({ variableId: a[0], itemType: a[1] }), li = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), yi = (a = 0) => ({ code: 135, parameters: [0], indent: a }), gi = (a = 0) => ({ code: 134, parameters: [1], indent: a }), ui = (a = 0) => ({ code: 134, parameters: [0], indent: a }), bi = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), Ii = (a = 0) => ({ code: 137, parameters: [0], indent: a }), aa = (a) => [a], vi = (a) => ({ comment: a[0] }), Xa = (a, e = 0) => ({ code: ba, indent: e, parameters: aa(a) }), Ya = (a, e = 0) => ({
  code: Ia,
  indent: e,
  parameters: aa(a)
}), hi = (a, e = 0) => a.map((t, s) => s === 0 ? Xa(t, e) : Ya(t, e)), Ga = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], fi = (a) => ({ speed: a[0], skip: a[1] }), xi = (a = {}, e = 0) => ({
  code: va,
  indent: e,
  parameters: Ga(a)
}), Ka = (a = "") => [a], Ti = (a) => ({ content: a[0] }), wi = (a = "", e = 0) => ({ code: ha, indent: e ?? 0, parameters: Ka(a) }), ki = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), Si = (a) => ({ index: a[0], name: a[1] }), Ni = (a) => [a.index ?? 0, a.name ?? ""], Ri = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Ci = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Di = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), Mi = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), qi = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Pi = (a) => ({
  filename: a[0]
}), Ai = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, r = 0) => ({ code: 357, indent: r, parameters: [s, e, t, { ...a }] }), Bi = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Ei = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), ji = (a, e = 0) => ({
  code: 129,
  parameters: [1, a.actorId],
  indent: e
}), Fi = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: r = 0, scaleX: n = 100, scaleY: o = 100, opacity: p = 255, blendMode: d = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, r, n, o, p, d]
}), Vi = ({ pictureId: a, origin: e, x: t, y: s, scaleX: r, scaleY: n, opacity: o, blendMode: p, wait: d = !1, easingType: w = 0 }) => ({ code: 232, indent: 0, parameters: [a, e, t, s, r, n, o, p, d, w] }), Ua = (a, e = 0) => ({
  code: fa,
  indent: e,
  parameters: [a]
}), Oa = (a, e = 0) => ({ code: xa, indent: e, parameters: [a] }), zi = (a, e = 0) => a.map((t, s) => s === 0 ? Ua(t, e) : Oa(t, e)), Li = 1, Hi = 0, k = {
  item: 0,
  weapon: 1,
  armors: 2
}, Wi = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, r) => {
  const n = ((o) => o.customPrice !== void 0 && o.customPrice !== 0)(s) ? 1 : 0;
  return r === 0 ? {
    code: Ta,
    indent: t,
    parameters: [k[s.itemType] ?? k.item, s.id, n, s.customPrice ?? 0, e]
  } : { code: wa, indent: t, parameters: [k[s.itemType] ?? k.item, s.id, n, s.customPrice ?? 0] };
}), Xi = 0, Yi = 1, Gi = 2, Ki = 3, Ui = 4, Oi = 0, _i = 1, $i = 2, Zi = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Ji = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.level;
    case 1:
      return a.currentExp();
    case 2:
      return a.hp;
    case 3:
      return a.mp;
    case 12:
      return a.tp;
  }
  return e[6] >= 4 && e[6] <= 11 ? a.param(e[6] - 4) : 0;
}, Qi = (a) => a.parameters[2] === 1, _a = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], ar = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: _a(a, e, t.operation ?? 0)
}), $a = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], er = (a, e) => ({
  code: c,
  indent: 0,
  parameters: $a(a, e, 0)
}), Za = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], tr = (a, e, t = {}) => ({ code: c, indent: t.indent ?? 0, parameters: Za(a, e, t.operation ?? 0) }), Ja = {
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
}, Qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ja[e.param]], sr = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: Qa(a, e, t.operation ?? 0)
}), ir = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: ae(a, e, t.operation ?? 0)
}), ae = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], rr = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: ee(a, e, t.operation ?? 0)
}), te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], nr = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: te(a, e, t.operation ?? 0)
}), se = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], or = (a, e) => ({ code: c, indent: 0, parameters: se(a, e, 0) }), ie = (a) => [...a], mr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: ie(a.parameters)
}), re = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", pr = (a) => a.parameters.every(re), dr = "bgm", cr = "se", lr = "me", yr = "bgs", gr = "battlebacks1", ur = "battlebacks2", br = "characters", Ir = "enemies", vr = "faces", hr = "parallaxes", fr = "pictures", xr = "sv_actors", Tr = "sv_enemies", wr = "system", kr = "tilesets", Sr = "titles1", Nr = "titles2", Rr = "System.json", Cr = "Actors.json", Dr = "Classes.json", Mr = "Skills.json", qr = "Items.json", Pr = "Weapons.json", Ar = "Armors.json", Br = "Enemies.json", Er = "Troops.json", jr = "States.json", Fr = "Animations.json", Vr = "Tilesets.json", zr = "CommonEvents.json", Lr = "MapInfos.json", Hr = "data", Wr = "img", Xr = "audio", Yr = "js", ne = (a = {}) => ({
  gameId: a.gameId ?? 0,
  screenWidth: a.screenWidth ?? 0,
  screenHeight: a.screenHeight ?? 0,
  uiAreaWidth: a.uiAreaWidth ?? 0,
  uiAreaHeight: a.uiAreaHeight ?? 0,
  windowOpacity: a.windowOpacity ?? 0,
  screenScale: a.screenScale ?? 1,
  numberFontFilename: a.numberFontFilename ?? "",
  mainFontFilename: a.mainFontFilename ?? "",
  fallbackFonts: a.fallbackFonts ?? "",
  fontSize: a.fontSize ?? 28
}), oe = (a = {}) => [i(a.cursor), i(a.ok), i(a.cancel), i(a.buzzer), i(a.equip), i(a.save), i(a.load), i(a.battleStart), i(a.escape), i(a.enemyAttack), i(a.enemyDamage), i(a.enemyCollapse), i(a.bossCollapes1), i(a.bossCollapes2), i(a.actorDamage), i(a.actorCollapse), i(a.playRecovery), i(a.playMiss), i(a.playEvasion), i(a.playMagicEvasion), i(a.playReflection), i(a.shop), i(a.useItem), i(a.useSkill)], Gr = (a) => ({
  cursor: a[0],
  ok: a[1],
  cancel: a[2],
  buzzer: a[3],
  equip: a[4],
  save: a[5],
  load: a[6],
  battleStart: a[7],
  escape: a[8],
  enemyAttack: a[9],
  enemyDamage: a[10],
  enemyCollapse: a[11],
  bossCollapes1: a[12],
  bossCollapes2: a[13],
  actorDamage: a[14],
  actorCollapse: a[15],
  playRecovery: a[16],
  playMiss: a[17],
  playEvasion: a[18],
  playMagicEvasion: a[19],
  playReflection: a[20],
  shop: a[21],
  useItem: a[22],
  useSkill: a[23]
}), Kr = (a) => a.menuCommands[0], Ur = (a) => a.menuCommands[1], Or = (a) => a.menuCommands[2], _r = (a) => a.menuCommands[3], $r = (a) => a.menuCommands[4], Zr = (a) => a.menuCommands[5], Jr = (a) => a.itemCategories[0], Qr = (a) => a.itemCategories[1], an = (a) => a.itemCategories[2], en = (a) => a.itemCategories[3], me = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], tn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), pe = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], sn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), de = (a = {}) => ({
  optAutosave: a.optAutosave ?? !0,
  optDisplayTp: a.optDisplayTp ?? !0,
  optDrawTitle: a.optDrawTitle ?? !0,
  optExtraExp: a.optExtraExp ?? !0,
  optFloorDeath: a.optFloorDeath ?? !0,
  optFollowers: a.optFollowers ?? !0,
  optKeyItemsNumber: a.optKeyItemsNumber ?? !0,
  optSideView: a.optSideView ?? !0,
  optSlipDeath: a.optSlipDeath ?? !0,
  optTransparent: a.optTransparent ?? !0,
  optMessageSkip: a.optMessageSkip ?? !0,
  optSplashScreen: a.optSplashScreen ?? !0
}), rn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembersArray: a.partyMembersArray ? Array.from(a.partyMembersArray) : [1]
}), ce = (a) => ({
  armorTypes: y(a.armorTypes),
  elements: y(a.elements),
  equipTypes: y(a.equipTypes),
  weaponTypes: y(a.weaponTypes),
  skillTypes: y(a.skillTypes),
  variables: y(a.variables),
  switches: y(a.switches)
}), y = (a) => a ? [...a] : [], nn = (a) => a.terms.params.map((e, t) => ({ name: e, id: t })), on = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), C = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: i(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), le = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), mn = { title: "オプション", options: {
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
} }, pn = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, dn = { title: "能力値", options: {
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
} }, cn = { title: "コマンド", options: {
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
} }, ln = (a) => {
  var t, s, r, n, o, p, d, w, P, A, B, E, j, F, V, z, L, H, W, X, Y, G;
  const e = ge(a.size);
  return {
    ...de(a.options),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: oe(a.sounds),
    editor: le(a.editing),
    advanced: ne(a.advanced),
    title1Name: ((r = a.images) == null ? void 0 : r.title1Name) ?? "",
    title2Name: ((n = a.images) == null ? void 0 : n.title2Name) ?? "",
    ...ce(a.dataNames ?? {}),
    magicSkills: D([]),
    airship: C((o = a.vehicles) == null ? void 0 : o.airship),
    boat: C((p = a.vehicles) == null ? void 0 : p.boat),
    ship: C((d = a.vehicles) == null ? void 0 : d.ship),
    defeatMe: i((w = a.me) == null ? void 0 : w.defeatMe),
    gameoverMe: i((P = a.me) == null ? void 0 : P.gameoverMe),
    titleBgm: i((A = a.bgm) == null ? void 0 : A.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((B = a.battleTest) == null ? void 0 : B.battleback1Name) ?? "",
    battleback2Name: ((E = a.battleTest) == null ? void 0 : E.battleback2Name) ?? "",
    testTroopId: ((j = a.battleTest) == null ? void 0 : j.testTroopId) ?? 0,
    testBattlers: ue((F = a.battleTest) == null ? void 0 : F.testBattlers, be),
    battleBgm: i((V = a.bgm) == null ? void 0 : V.battleBgm),
    victoryMe: i((z = a.me) == null ? void 0 : z.victoryMe),
    editMapId: ((L = a.editorTemporary) == null ? void 0 : L.editMapId) ?? 0,
    battlerName: ((H = a.editorTemporary) == null ? void 0 : H.battlerName) ?? "",
    locale: "",
    startMapId: ((W = a.gameInit) == null ? void 0 : W.startMapId) ?? 0,
    startX: ((X = a.gameInit) == null ? void 0 : X.startX) ?? 0,
    startY: ((Y = a.gameInit) == null ? void 0 : Y.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ye(a.terms ?? {}),
    itemCategories: me(a.itemCategories),
    partyMembersArray: D((G = a.gameInit) == null ? void 0 : G.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: pe(a.menuComamnds)
  };
}, ye = (a) => ({
  basic: Ra(a.basic ?? {}),
  commands: Na(a.commands ?? {}),
  params: Sa(a.params ?? {}),
  messages: ka(a.messages ?? {})
}), D = (a) => a ? [...a] : [], ge = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, ue = (a, e) => a ? a.map(e) : [], be = (a) => a ? { actorId: a.actorId, equips: D(a.equips), level: a.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, yn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), gn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, un = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  ai as $,
  qs as A,
  As as B,
  Ps as C,
  js as D,
  Bs as E,
  Fs as F,
  Es as G,
  zs as H,
  Vs as I,
  Ls as J,
  Hs as K,
  Ha as L,
  Ws as M,
  Wa as N,
  Xs as O,
  Ks as P,
  Ys as Q,
  Gs as R,
  ci as S,
  di as T,
  Os as U,
  Us as V,
  _s as W,
  $s as X,
  Zs as Y,
  Js as Z,
  Qs as _,
  ds as a,
  te as a$,
  ei as a0,
  ti as a1,
  si as a2,
  ii as a3,
  ri as a4,
  ni as a5,
  oi as a6,
  mi as a7,
  pi as a8,
  bi as a9,
  Ai as aA,
  Ei as aB,
  ji as aC,
  Fi as aD,
  Vi as aE,
  Ua as aF,
  Oa as aG,
  zi as aH,
  Li as aI,
  Hi as aJ,
  Wi as aK,
  Ji as aL,
  Zi as aM,
  Qi as aN,
  ar as aO,
  _a as aP,
  er as aQ,
  $a as aR,
  tr as aS,
  Za as aT,
  sr as aU,
  Qa as aV,
  ir as aW,
  ae as aX,
  rr as aY,
  ee as aZ,
  nr as a_,
  li as aa,
  gi as ab,
  Ii as ac,
  yi as ad,
  ui as ae,
  aa as af,
  vi as ag,
  Xa as ah,
  Ya as ai,
  hi as aj,
  Ga as ak,
  fi as al,
  xi as am,
  Ka as an,
  Ti as ao,
  wi as ap,
  ki as aq,
  Si as ar,
  Ni as as,
  Ri as at,
  Ci as au,
  Di as av,
  Mi as aw,
  Pi as ax,
  qi as ay,
  Bi as az,
  cs as b,
  Ee as b$,
  or as b0,
  se as b1,
  Xi as b2,
  Ki as b3,
  Gi as b4,
  Ui as b5,
  Yi as b6,
  $i as b7,
  Oi as b8,
  _i as b9,
  Ar as bA,
  Br as bB,
  Er as bC,
  jr as bD,
  Fr as bE,
  Vr as bF,
  zr as bG,
  Lr as bH,
  Hr as bI,
  Wr as bJ,
  Xr as bK,
  Yr as bL,
  ps as bM,
  M as bN,
  we as bO,
  ke as bP,
  Se as bQ,
  Ne as bR,
  Re as bS,
  Ce as bT,
  De as bU,
  Me as bV,
  Ca as bW,
  qe as bX,
  Pe as bY,
  Ae as bZ,
  Be as b_,
  ie as ba,
  mr as bb,
  pr as bc,
  dr as bd,
  cr as be,
  lr as bf,
  yr as bg,
  gr as bh,
  ur as bi,
  br as bj,
  Ir as bk,
  vr as bl,
  hr as bm,
  fr as bn,
  xr as bo,
  Tr as bp,
  wr as bq,
  kr as br,
  Sr as bs,
  Nr as bt,
  Rr as bu,
  Cr as bv,
  Dr as bw,
  Mr as bx,
  qr as by,
  Pr as bz,
  ls as c,
  Vt as c$,
  je as c0,
  Fe as c1,
  Ve as c2,
  ze as c3,
  Le as c4,
  He as c5,
  We as c6,
  Xe as c7,
  Ye as c8,
  Ge as c9,
  vt as cA,
  ht as cB,
  ft as cC,
  xt as cD,
  Tt as cE,
  wt as cF,
  Da as cG,
  kt as cH,
  St as cI,
  Nt as cJ,
  Rt as cK,
  Ct as cL,
  Pa as cM,
  Aa as cN,
  q as cO,
  Dt as cP,
  Mt as cQ,
  qt as cR,
  Pt as cS,
  Ea as cT,
  Bt as cU,
  Et as cV,
  Ba as cW,
  At as cX,
  jt as cY,
  Ft as cZ,
  ja as c_,
  Ke as ca,
  Ue as cb,
  Oe as cc,
  _e as cd,
  $e as ce,
  Ze as cf,
  Je as cg,
  Qe as ch,
  at as ci,
  et as cj,
  tt as ck,
  st as cl,
  it as cm,
  rt as cn,
  nt as co,
  ot as cp,
  mt as cq,
  pt as cr,
  dt as cs,
  ct,
  lt as cu,
  yt as cv,
  gt as cw,
  ut as cx,
  bt as cy,
  It as cz,
  ys as d,
  zt as d0,
  Lt as d1,
  Ht as d2,
  Wt as d3,
  Xt as d4,
  Gt as d5,
  Va as d6,
  Yt as d7,
  Kt as d8,
  Ut as d9,
  Zr as dA,
  Jr as dB,
  Qr as dC,
  an as dD,
  en as dE,
  me as dF,
  tn as dG,
  pe as dH,
  sn as dI,
  de as dJ,
  rn as dK,
  ce as dL,
  nn as dM,
  on as dN,
  C as dO,
  le as dP,
  mn as dQ,
  pn as dR,
  dn as dS,
  cn as dT,
  gn as dU,
  yn as dV,
  Ot as da,
  _t as db,
  $t as dc,
  Zt as dd,
  Jt as de,
  Qt as df,
  as as dg,
  es as dh,
  ts as di,
  ss as dj,
  is as dk,
  rs as dl,
  ns as dm,
  os as dn,
  ms as dp,
  za as dq,
  ln as dr,
  ne as ds,
  oe as dt,
  Gr as du,
  Kr as dv,
  Ur as dw,
  Or as dx,
  _r as dy,
  $r as dz,
  un as e,
  Is as f,
  us as g,
  gs as h,
  vs as i,
  bs as j,
  fe as k,
  xe as l,
  Te as m,
  hs as n,
  Ts as o,
  xs as p,
  fs as q,
  ws as r,
  l as s,
  ks as t,
  Ss as u,
  Ns as v,
  Rs as w,
  Cs as x,
  Ds as y,
  Ms as z
};
