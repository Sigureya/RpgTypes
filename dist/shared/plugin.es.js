import e from "ajv";
import { c as t, a, m as r } from "./make.es.js";
const i = (e2, t2) => `\\${e2}[${t2}]`, s = (e2, t2) => t2.map((t3, a2) => ({
  text: t3,
  controlChar: i(e2, a2)
})), n = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), o = (e2) => e2.map((e3) => ({
  text: e3.name,
  controlChar: i("N", e3.id)
})), m = (e2) => e2.variables.map((e3, t2) => ({ text: e3 || "", controlChar: i("V", t2) })).filter((e3) => "" !== e3.text), p = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), c = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", members: e2.members ?? [], pages: e2.pages ?? [] }), d = (e2 = {}) => ({
  enemyId: e2.enemyId ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  hidden: e2.hidden ?? false
}), l = (e2 = {}) => ({ actorHp: e2.actorHp ?? 0, actorId: e2.actorId ?? 0, enemyValid: e2.enemyValid ?? 0, switchValid: e2.switchValid ?? 0 }), u = (e2 = {}) => ({
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
}), y = 0, g = 101, b = 401, I = 102, f = 402, v = 103, h = 104, x = 105, T = 405, k = 108, w = 408, N = 109, S = 111, P = 411, q = 112, A = 113, C = 115, D = 117, j = 118, M = 119, R = 121, E = 122, F = 123, B = 124, V = 125, L = 126, H = 127, O = 128, z = 129, W = 132, X = 133, G = 134, Y = 135, U = 136, _ = 137, K = 138, $ = 139, Z = 140, J = 201, Q = 202, ee = 203, te = 204, ae = 205, re = 206, ie = 211, se = 212, ne = 213, oe = 214, me = 216, pe = 217, ce = 221, de = 222, le = 223, ue = 224, ye = 225, ge = 230, be = 231, Ie = 232, fe = 233, ve = 234, he = 235, xe = 236, Te = 241, ke = 242, we = 243, Ne = 244, Se = 245, Pe = 246, qe = 249, Ae = 250, Ce = 251, De = 261, je = 282, Me = 283, Re = 284, Ee = 285, Fe = 301, Be = 302, Ve = 605, Le = 303, He = 311, Oe = 312, ze = 313, We = 314, Xe = 315, Ge = 320, Ye = 321, Ue = 322, _e = 323, Ke = 324, $e = 325, Ze = 331, Je = 332, Qe = 333, et = 334, tt = 335, at = 336, rt = 337, it = 339, st = 340, nt = 351, ot = 342, mt = 352, pt = 353, ct = 354, dt = 355, lt = 655, ut = 356, yt = 357, gt = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), bt = 0, It = 1, ft = 2, vt = 3, ht = 4, xt = 5, Tt = 6, kt = 7, wt = 8, Nt = 9, St = 10, Pt = 11, qt = 12, At = 13, Ct = 14, Dt = 15, jt = 16, Mt = 17, Rt = 18, Et = 19, Ft = 20, Bt = 21, Vt = 22, Lt = 23, Ht = 24, Ot = 25, zt = 26, Wt = 27, Xt = 28, Gt = 29, Yt = 30, Ut = 31, _t = 32, Kt = 33, $t = 34, Zt = 35, Jt = 36, Qt = 37, ea = 38, ta = 39, aa = 40, ra = 41, ia = 42, sa = 43, na = 44, oa = 45, ma = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), pa = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), ca = () => ({ conditions: u(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), da = (e2 = {}) => ({
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
  bgs: e2.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e2.disableDashing ?? false,
  displayName: e2.displayName ?? "",
  encounterList: e2.encounterList ?? [],
  events: e2.events ?? []
}), la = (e2 = { id: 0 }) => {
  return { name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")), id: e2.id, expanded: e2.expanded ?? false, order: e2.order ?? 0, parentId: e2.parentId ?? 0, scrollX: e2.scrollX ?? 0, scrollY: e2.scrollY ?? 0 };
  var t2;
}, ua = {
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
}, ya = new e({
  strict: true
}), ga = ya.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), ba = ya.compile(ua), Ia = (e2) => ga(e2), fa = (e2) => ba(e2), va = {
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
}, ha = {
  title: "ダメージ",
  options: {}
}, xa = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), Ta = (e2 = {}) => ({
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
}), ka = (e2) => ({
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
}), wa = (e2 = {}) => ({
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
}), Na = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), Sa = (e2 = {}) => ({ dataId: e2.dataId ?? 0, denominator: e2.denominator ?? 0, kind: e2.kind ?? 0 }), Pa = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), qa = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Sa())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Aa = (e2 = {}) => ({
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
}), Ca = "{name}", Da = "{name} * {value}%", ja = "{name} + {value}%", Ma = "{value}", Ra = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: Da, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: ja, options: {
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
  specialParam: { title: "特殊能力値", format: Da, options: {
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
    format: Ca,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: Ca, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: Ca, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: Da },
  debuffRate: { title: "弱体有効度", format: Da },
  stateRate: { title: "ステート有効度", format: Da },
  stateResist: {
    title: "ステート無効",
    format: Ca
  },
  attackElement: { title: "攻撃属性", format: Ca },
  attackState: { title: "攻撃ステート", format: ja },
  attackSpeed: { title: "攻撃速度補正", format: Ma },
  attackTimes: {
    title: "攻撃追加回数",
    format: Ma
  },
  actionPlus: { title: "行動追加", format: Da },
  attackSkill: { title: "攻撃スキル", format: Ca },
  equipWeaponType: { title: "装備武器タイプ", format: Ca },
  equipArmorType: { title: "装備防具タイプ", format: Ca },
  equipLock: {
    title: "装備固定",
    format: Ca
  },
  equipSeal: { title: "装備封印", format: Ca },
  slotType: { title: "スロットタイプ", format: Ca },
  skillAdd: { title: "スキル追加", format: Ca },
  skillSeal: { title: "スキルタイプ封印", format: Ca },
  skillTypeAdd: { title: "スキルタイプ追加", format: Ca },
  skillTypeSeal: { title: "スキルタイプ封印", format: Ca }
} }, Ea = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Fa = (e2, r2, i2) => {
  const s2 = t(Ea);
  return a(r2, i2, s2, e2.pattern, (e3) => e3.dataId);
}, Ba = (e2 = {}) => ({
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
  damage: xa(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), Va = {
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
    }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } } }
}, La = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Ha = 0, Oa = 1, za = 2, Wa = "{name} {value1}%", Xa = "{value1}% + {value2}", Ga = "{name} {value1}ターン", Ya = "{name}", Ua = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: Ga },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Ga },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Xa },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Ya },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: Xa
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: Xa },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: Ya
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: Ya },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Wa },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: Ya
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: Wa },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Ya }
} }, _a = 0, Ka = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, $a = { title: "アイテム", options: { consumable: "消耗品" } }, Za = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Ja = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Qa = (e2 = {}) => ({
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
  damage: xa(e2.damage ?? {}),
  effects: [],
  price: 0
}), er = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: xa(e2.damage ?? {}),
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
}), tr = (e2, t2) => `<${e2}:${t2}>`, ar = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, rr = (e2, t2) => sr(e2.note, (a2, r2) => t2(a2, r2, e2)), ir = (e2) => sr(e2, (e3, t2) => [e3, t2]), sr = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, nr = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return tr(a2, i2);
  });
}, or = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, mr = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? tr(r3, a2) : e3);
}, pr = "data", cr = "actor", dr = "map", lr = "enemy", ur = "state", yr = "skill", gr = "item", br = "weapon", Ir = "armor", fr = "class", vr = "common_event", hr = "troop", xr = {
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
}, Tr = () => ({ rpg: { damage: ha, data: va, traits: Ra, itemEffect: Ua }, global: xr }), kr = (e2 = {}) => ({
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
}), wr = (e2 = {}) => [r(e2.cursor), r(e2.ok), r(e2.cancel), r(e2.buzzer), r(e2.equip), r(e2.save), r(e2.load), r(e2.battleStart), r(e2.escape), r(e2.enemyAttack), r(e2.enemyDamage), r(e2.enemyCollapse), r(e2.bossCollapes1), r(e2.bossCollapes2), r(e2.actorDamage), r(e2.actorCollapse), r(e2.playRecovery), r(e2.playMiss), r(e2.playEvasion), r(e2.playMagicEvasion), r(e2.playReflection), r(e2.shop), r(e2.useItem), r(e2.useSkill)], Nr = (e2) => ({
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
}), Sr = (e2) => e2.menuCommands[0], Pr = (e2) => e2.menuCommands[1], qr = (e2) => e2.menuCommands[2], Ar = (e2) => e2.menuCommands[3], Cr = (e2) => e2.menuCommands[4], Dr = (e2) => e2.menuCommands[5], jr = (e2) => e2.itemCategories[0], Mr = (e2) => e2.itemCategories[1], Rr = (e2) => e2.itemCategories[2], Er = (e2) => e2.itemCategories[3], Fr = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Br = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), Vr = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Lr = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), Hr = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Or = (e2 = {}) => ({
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
}), zr = { type: "boolean" }, Wr = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: zr,
    optDisplayTp: zr,
    optDrawTitle: zr,
    optExtraExp: zr,
    optFloorDeath: zr,
    optFollowers: zr,
    optKeyItemsNumber: zr,
    optSideView: zr,
    optSlipDeath: zr,
    optTransparent: zr,
    optMessageSkip: zr,
    optSplashScreen: zr
  }
}, Xr = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), Gr = (e2) => ({
  armorTypes: Yr(e2.armorTypes),
  elements: Yr(e2.elements),
  equipTypes: Yr(e2.equipTypes),
  weaponTypes: Yr(e2.weaponTypes),
  skillTypes: Yr(e2.skillTypes),
  variables: Yr(e2.variables),
  switches: Yr(e2.switches)
}), Yr = (e2) => e2 ? [...e2] : [], Ur = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], _r = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Kr = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), $r = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: r(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Zr = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Jr = { title: "オプション", options: {
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
} }, Qr = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, ei = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, ti = { title: "コマンド", options: {
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
} }, ai = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, ri = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, ii = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, si = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, ni = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: si, victoryMe: si, gameoverMe: si, titleBgm: si, defeatMe: si, sounds: {
    type: "array",
    items: si,
    minItems: 24,
    maxItems: 24
  } }
}, oi = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: true
}, battleSystem: { type: "number" } } }, mi = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, pi = {
  additionalProperties: false,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, ci = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, di = { type: "array", items: { type: "string" } }, li = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: di,
    skillTypes: di,
    elements: di,
    variables: di,
    equipTypes: di,
    switches: di,
    armorTypes: di
  }
}, ui = { type: "string" }, yi = { type: "string", nullable: true }, gi = { type: "string" }, bi = {
  required: ["terms", "currencyUnit", "gameTitle"],
  additionalProperties: false,
  type: "object",
  properties: { currencyUnit: { type: "string" }, gameTitle: { type: "string" }, terms: {
    additionalProperties: false,
    type: "object",
    required: ["messages", "commands", "basic", "params"],
    properties: { messages: {
      type: "object",
      additionalProperties: false,
      required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
      properties: {
        actionFailure: gi,
        actorDamage: gi,
        actorNoDamage: gi,
        actorRecovery: gi,
        actorGain: gi,
        actorLoss: gi,
        actorDrain: gi,
        alwaysDash: gi,
        bgmVolume: gi,
        bgsVolume: gi,
        commandRemember: gi,
        criticalToActor: gi,
        criticalToEnemy: gi,
        counterAttack: gi,
        debuffAdd: gi,
        defeat: gi,
        enemyDamage: gi,
        enemyNoDamage: gi,
        enemyRecovery: gi,
        enemyGain: gi,
        enemyLoss: gi,
        enemyDrain: gi,
        evasion: gi,
        expNext: gi,
        expTotal: gi,
        escapeFailure: gi,
        escapeStart: gi,
        file: gi,
        loadMessage: gi,
        meVolume: gi,
        magicEvasion: gi,
        magicReflection: gi,
        obtainExp: gi,
        obtainGold: gi,
        obtainItem: gi,
        obtainSkill: gi,
        partyName: gi,
        preemptive: gi,
        saveMessage: gi,
        seVolume: gi,
        substitute: gi,
        touchUI: gi,
        victory: gi,
        useItem: gi,
        buffAdd: gi,
        buffRemove: gi,
        actorNoHit: gi,
        enemyNoHit: gi,
        autosave: gi,
        emerge: gi,
        levelUp: gi,
        possession: gi,
        surprise: gi
      }
    }, commands: {
      type: "array",
      items: [ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, ui, yi, ui, ui, yi, ui, ui],
      minItems: 26,
      maxItems: 26
    }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 10,
      maxItems: 10,
      uniqueItems: true
    } }
  } }
}, Ii = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: ii },
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
}, fi = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: {
    characterIndex: { type: "integer", minimum: 0, maximum: 7 },
    characterName: {
      type: "string",
      minLength: 1
    },
    bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 50, maximum: 150 },
      pan: { type: "integer", minimum: -100, maximum: 100 }
    } },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0, maximum: 5e3 },
    startY: { type: "integer", minimum: 0, maximum: 5e3 }
  }
}, vi = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: fi,
  boat: fi,
  ship: fi,
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
    additionalProperties: false
  },
  attackMotions: { type: "array", items: ai }
} }, hi = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), xi = new e({ strict: true }), Ti = ((e2) => {
  const t2 = hi(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([vi, ni, oi, Hr, Wr, mi, ri, ci, li, bi, pi, Ii]), ki = xi.compile(Ti), wi = (e2) => ki(e2), Ni = xi.compile(ii);
xi.compile(ai);
const Si = xi.compile(ri), Pi = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], qi = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Ai = (e2, t2) => "string" == typeof e2 ? e2 : t2, Ci = (e2) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Mi(e2.size);
  return {
    ...Or(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: wr(e2.sounds),
    editor: Zr(e2.editing),
    advanced: kr(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...Gr(e2.dataNames ?? {}),
    magicSkills: ji([]),
    airship: $r((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: $r((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: $r((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: r((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: r((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: r((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: Ri((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Ei),
    battleBgm: r((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: r((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Di(e2.terms ?? {}),
    itemCategories: Fr(e2.itemCategories),
    partyMembersArray: ji((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Vr(e2.menuComamnds)
  };
}, Di = (e2) => {
  return { basic: Pi(e2.basic ?? {}), commands: (a2 = e2.commands ?? {}, qi(a2, "")), params: Ur(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: Ai(t2.actionFailure, "Action failed."),
    actorDamage: Ai(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: Ai(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: Ai(t2.actorGain, "%1 gained %2."),
    actorLoss: Ai(t2.actorLoss, "%1 lost %2."),
    actorDrain: Ai(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: Ai(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: Ai(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: Ai(t2.alwaysDash, "Always dash."),
    bgmVolume: Ai(t2.bgmVolume, "BGM volume"),
    bgsVolume: Ai(t2.bgsVolume, "BGS volume"),
    commandRemember: Ai(t2.commandRemember, "Command remember."),
    criticalToActor: Ai(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: Ai(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: Ai(t2.counterAttack, "%1 countered!"),
    debuffAdd: Ai(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: Ai(t2.defeat, "Defeat."),
    enemyDamage: Ai(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: Ai(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: Ai(t2.enemyGain, "%1 gained %2."),
    enemyLoss: Ai(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: Ai(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: Ai(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: Ai(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: Ai(t2.evasion, "%1 evaded the attack!"),
    autosave: Ai(t2.autosave, "Autosave"),
    escapeFailure: Ai(t2.escapeFailure, "Escape failed."),
    escapeStart: Ai(t2.escapeStart, "%1 started to escape!"),
    emerge: Ai(t2.emerge, "%1 appeared!"),
    expNext: Ai(t2.expNext, "Next level in %1 EXP."),
    expTotal: Ai(t2.expTotal, "Total EXP: %1"),
    file: Ai(t2.file, "File"),
    buffAdd: Ai(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: Ai(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: Ai(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: Ai(t2.obtainGold, "%1 gold obtained."),
    obtainItem: Ai(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: Ai(t2.obtainSkill, "%1 learned %2."),
    levelUp: Ai(t2.levelUp, "%1 leveled up!"),
    partyName: Ai(t2.partyName, "Party"),
    loadMessage: Ai(t2.loadMessage, "Load %1?"),
    meVolume: Ai(t2.meVolume, "ME volume"),
    possession: Ai(t2.possession, "Possession"),
    preemptive: Ai(t2.preemptive, "%1 attacked first!"),
    saveMessage: Ai(t2.saveMessage, "Save %1?"),
    seVolume: Ai(t2.seVolume, "SE volume"),
    magicEvasion: Ai(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: Ai(t2.magicReflection, "%1 reflected the magic!"),
    substitute: Ai(t2.substitute, "%1 took the hit!"),
    surprise: Ai(t2.surprise, "%1 surprised the enemy!"),
    touchUI: Ai(t2.touchUI, "Touch UI"),
    useItem: Ai(t2.useItem, "%1 used %2."),
    victory: Ai(t2.victory, "Victory!")
  }) };
  var t2, a2;
}, ji = (e2) => e2 ? [...e2] : [], Mi = (e2) => ((e3) => Si(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ri = (e2, t2) => e2 ? e2.map(t2) : [], Ei = (e2) => ((e3) => Ni(e3))(e2) ? { actorId: e2.actorId, equips: ji(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Fi = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), Bi = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), Vi = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), Li = (e2, t2) => Hi(e2, r({ name: t2 })), Hi = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [r(t2)],
  indent: a2
}), Oi = (e2, t2 = 0) => Hi(241, e2, t2), zi = (e2, t2 = 0) => Hi(245, e2, t2), Wi = (e2, t2 = 0) => Hi(249, e2, t2), Xi = (e2, t2 = 0) => Hi(250, e2, t2), Gi = (e2, t2 = 0) => Hi(132, e2, t2), Yi = (e2, t2 = 0) => Hi(133, e2, t2), Ui = (e2, t2 = 0) => Hi(139, e2, t2), _i = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: $i(e2 ?? {})
}), Ki = (e2) => ({ eventId: e2[0] }), $i = (e2) => [e2.eventId ?? 0], Zi = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), Ji = (e2) => [e2.min, e2.max, e2.value], Qi = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: Ji(e2)
}), es = (e2) => [e2], ts = (e2) => ({ comment: e2[0] }), as = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: es(e2) }), rs = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: es(e2)
}), is = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? as(e3, t2) : rs(e3, t2)), ss = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], ns = (e2) => ({ variableId: e2[0], digits: e2[1] }), os = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: ss(e2 ?? {})
}), ms = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), ps = (e2) => ({ index: e2[0], name: e2[1] }), cs = (e2) => [e2.index ?? 0, e2.name ?? ""], ds = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), ls = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], us = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), ys = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), gs = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), bs = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), Is = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], fs = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), vs = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), hs = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), xs = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? vs(e3, t2) : hs(e3, t2)), Ts = 0, ks = 1, ws = 2, Ns = 3, Ss = 4, Ps = {
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
}, qs = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], As = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], Cs = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], Ds = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], js = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], Ms = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Rs = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Ps[t2.param]], Es = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, Fs = (e2, t2) => {
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
}, Bs = (e2) => [...e2], Vs = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Bs(e2.parameters)
}), Ls = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Hs = (e2) => e2.parameters.every(Ls), Os = new e({ strict: true }), zs = Os.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), Ws = (e2) => zs(e2), Xs = Os.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Gs = (e2) => Xs(e2), Ys = Os.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Us = (e2) => Ys(e2), _s = Os.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Ks = (e2) => _s(e2), $s = Os.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Zs = (e2) => $s(e2), Js = Os.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Qs = (e2) => Js(e2), en = Os.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), tn = (e2) => en(e2), an = Os.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), rn = (e2) => an(e2), sn = Os.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), nn = (e2) => sn(e2), on = (e2) => Ks(e2) && 401 === e2.code, mn = (e2) => Ks(e2) && 405 === e2.code, pn = (e2) => Ks(e2) && 108 === e2.code, cn = (e2) => Ks(e2) && 408 === e2.code, dn = (e2) => Ks(e2) && 355 === e2.code, ln = (e2) => Ks(e2) && 655 === e2.code, un = "bgm", yn = "se", gn = "me", bn = "bgs", In = "battlebacks1", fn = "battlebacks2", vn = "characters", hn = "enemies", xn = "faces", Tn = "parallaxes", kn = "pictures", wn = "sv_actors", Nn = "sv_enemies", Sn = "system", Pn = "tilesets", qn = "titles1", An = "titles2", Cn = "System.json", Dn = "Actors.json", jn = "Classes.json", Mn = "Skills.json", Rn = "Items.json", En = "Weapons.json", Fn = "Armors.json", Bn = "Enemies.json", Vn = "Troops.json", Ln = "States.json", Hn = "Animations.json", On = "Tilesets.json", zn = "CommonEvents.json", Wn = "MapInfos.json", Xn = "data", Gn = "img", Yn = "audio", Un = "js", _n = (e2, t2) => ({
  type: "array",
  items: t2,
  ...Kn(e2),
  ...$n(e2.default)
}), Kn = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), $n = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, Zn = (e2) => void 0 === e2 || 0 === e2, Jn = (e2) => _n(e2, { type: "string" }), Qn = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...Kn(e3),
        ...$n(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...$n(e3.default), ...Kn(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...$n(e3.default), ...Kn(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Jn(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: Zn(e3.decimals) ? "integer" : "number"
      }, ...$n(e3.default), ...Kn(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => _n(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: Zn(e3.decimals) ? "integer" : "number", ...$n(e3.default), ...Kn(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...$n(e3.default), ...Kn(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...$n(e3.default), ...Kn(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...Kn(t2) };
    default:
      return {};
  }
  var t2;
}, eo = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), to = (e2, t2, a2, r2) => ({
  default: t2,
  ...eo(a2, r2),
  kind: e2
}), ao = (e2, t2, a2) => ({ default: [], ...eo(t2, a2), kind: e2 }), ro = "help", io = "kind", so = "text", no = "struct", oo = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(mo) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, mo(t3)])) : t2;
}, mo = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(mo) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, mo(t3)])) : t2;
  } catch {
    return e2;
  }
}, po = (e2) => {
  if (io in e2.attr) {
    const t2 = fo[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return to("any", "", e2.attr, uo);
}, co = (e2) => e2, lo = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), uo = {
  default: co,
  text: co,
  desc: co,
  parent: co
}, yo = (e2) => to("string", "", e2.attr, uo), go = (e2) => {
  const t2 = { default: (e3) => oo(e3), text: co, desc: co, parent: co };
  return ao("string[]", e2.attr, t2);
}, bo = (e2, t2) => {
  const a2 = {
    default: lo,
    text: co,
    desc: co,
    parent: co
  };
  return ao(t2, e2.attr, a2);
}, Io = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: co, desc: co, parent: co };
  return to(t2, 0, e2.attr, a2);
}, fo = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: co,
      desc: co,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: co
    };
    return to("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: lo, text: co, desc: co, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: co };
    return ao("number[]", e2.attr, t2);
  },
  string: yo,
  "string[]": go,
  multiline_string: yo,
  "multiline_string[]": go,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...to("combo", "", e2.attr, uo), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...to("select", "", e2.attr, uo), options: t2 };
  },
  actor: (e2) => Io(e2, "actor"),
  "actor[]": (e2) => bo(e2, "actor[]"),
  class: (e2) => Io(e2, "class"),
  "class[]": (e2) => bo(e2, "class[]"),
  skill: (e2) => Io(e2, "skill"),
  "skill[]": (e2) => bo(e2, "skill[]"),
  item: (e2) => Io(e2, "item"),
  "item[]": (e2) => bo(e2, "item[]"),
  weapon: (e2) => Io(e2, "weapon"),
  "weapon[]": (e2) => bo(e2, "weapon[]"),
  armor: (e2) => Io(e2, "armor"),
  "armor[]": (e2) => bo(e2, "armor[]"),
  state: (e2) => Io(e2, "state"),
  "state[]": (e2) => bo(e2, "state[]"),
  enemy: (e2) => Io(e2, "enemy"),
  "enemy[]": (e2) => bo(e2, "enemy[]"),
  common_event: (e2) => Io(e2, "common_event"),
  "common_event[]": (e2) => bo(e2, "common_event[]"),
  switch: (e2) => Io(e2, "switch"),
  "switch[]": (e2) => bo(e2, "switch[]"),
  variable: (e2) => Io(e2, "variable"),
  "variable[]": (e2) => bo(e2, "variable[]"),
  troop: (e2) => Io(e2, "troop"),
  "troop[]": (e2) => bo(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: co,
      desc: co,
      on: co,
      off: co,
      parent: co
    };
    return to("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: co, text: co, desc: co, parent: co, dir: co };
    return { dir: "", ...to("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => oo(e3), text: co, desc: co, parent: co, dir: co };
    return { dir: "", ...ao("file[]", e2.attr, t2) };
  }
}, vo = "BODY", ho = "STRUCT", xo = "NONE", To = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? wo(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? ho : "INVALID", locale: t2[2], lines: [] };
}, ko = (e2) => ({
  ...e2.lines.length > 0 ? wo(e2) : e2,
  blockType: vo,
  structName: void 0,
  locale: void 0,
  lines: []
}), wo = (e2) => e2.blockType === vo ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: xo } : e2.structName && e2.blockType === ho ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: xo,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: xo,
  structName: void 0,
  lines: []
}, No = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, So = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Po = (e2) => {
  const t2 = qo(e2), a2 = Co(t2);
  return Ao(a2);
}, qo = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: No(e2.currentOption).items } };
  }
  return e2;
}, Ao = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Co = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...So(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
    return {
      ...e2,
      commands: [...e2.commands, a2],
      currentCommand: null,
      currentParam: null,
      currentContext: null,
      currentOption: null
    };
  }
  return e2;
}, Do = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === ro ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...s2] = r2.slice(1).split(" "), n2 = s2.join(" ").trim(), o2 = t2[i2];
    return o2 ? o2(e3, n2) : e3;
  }, Mo());
  return Po(a2);
}, jo = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: xo
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? To(e4, r4) : "/*:" === a4 ? ko(e4) : "*/" === a4 ? e4.lines.length > 0 ? wo(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Do(e4, Fo);
    return { name: e4.struct, params: t3.params };
  })(e3)), i2 = ((e3) => {
    if (0 !== e3.bodies.length) return e3.bodies[0];
  })(a2);
  if (!i2) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r2
  };
  const s2 = Do(i2, t2);
  return { params: s2.params, commands: s2.commands, meta: s2.meta, helpLines: s2.helpLines, structs: r2 };
}, Mo = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), Ro = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, Eo = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), Fo = {
  param: (e2, t2) => {
    const a2 = Po(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? Ro(e2, so, t2) : e2.currentCommand && !(so in e2.currentCommand) ? { ...e2, currentCommand: {
    ...So(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [so]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? Ro(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = Po(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...So(e2.currentCommand),
        command: e2.currentCommand.command,
        args: e2.currentCommand.args.concat(e2.currentParam)
      };
      return {
        ...e2,
        commands: e2.commands,
        currentCommand: a2,
        currentContext: "arg",
        currentParam: { name: t2, attr: {} }
      };
    }
    return { ...e2, currentParam: { name: t2, attr: {} } };
  },
  help: (e2) => ({ ...Po(e2), currentContext: ro }),
  option: (e2, t2) => {
    if (!e2.currentParam) return e2;
    const a2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: e3.currentOption }), currentOption: t3 } : { items: e3.items, currentOption: t3 })(e2.currentOption ?? {
      items: []
    }, t2);
    return { ...e2, currentOption: a2 };
  },
  value: (e2, t2) => {
    if (!e2.currentOption) return e2;
    const a2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: t3 }) } : {
      items: e3.items
    })(e2.currentOption, t2);
    return { ...e2, currentOption: a2 };
  },
  type: (e2, t2) => {
    if (((e3) => e3.endsWith(">") && e3.startsWith("struct<"))(t2)) {
      const a2 = t2.slice(7, -1), r2 = Ro(e2, no, a2);
      return Ro(r2, io, no);
    }
    return e2.currentParam ? Ro(e2, io, t2) : e2;
  },
  default: (e2, t2) => Ro(e2, "default", t2),
  on: (e2, t2) => Ro(e2, "on", t2),
  off: (e2, t2) => Ro(e2, "off", t2),
  min: (e2, t2) => Ro(e2, "min", t2),
  max: (e2, t2) => Ro(e2, "max", t2),
  base: (e2, t2) => {
    return { ...e2, dependencies: (a2 = e2.dependencies, r2 = t2, { orderAfter: a2.orderAfter, orderBefore: a2.orderBefore, base: a2.base.concat(r2) }) };
    var a2, r2;
  },
  orderAfter: (e2, t2) => {
    return { ...e2, dependencies: (a2 = e2.dependencies, r2 = t2, { base: a2.base, orderBefore: a2.orderBefore, orderAfter: a2.orderAfter.concat(r2) }) };
    var a2, r2;
  },
  orderBefore: (e2, t2) => {
    return {
      ...e2,
      dependencies: (a2 = e2.dependencies, r2 = t2, { base: a2.base, orderAfter: a2.orderAfter, orderBefore: a2.orderBefore.concat(r2) })
    };
    var a2, r2;
  },
  author: (e2, t2) => Eo(e2, "author", t2),
  plugindesc: (e2, t2) => Eo(e2, "plugindesc", t2),
  url: (e2, t2) => Eo(e2, "url", t2)
}, Bo = (e2) => Vo(((e3) => jo(e3, Fo))(e2)), Vo = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: Ho(e2.commands),
  params: Lo(e2.params)
}), Lo = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: po(t2), ...e3 }), {}), Ho = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: Lo(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), Oo = (e2) => Bo(e2), zo = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = Qn(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return {
    type: "object",
    properties: t2,
    required: Object.keys(t2),
    additionalProperties: false
  };
})(e2);
export {
  Fs as $,
  ms as A,
  ps as B,
  cs as C,
  ds as D,
  ls as E,
  us as F,
  ys as G,
  gs as H,
  bs as I,
  Is as J,
  fs as K,
  vs as L,
  hs as M,
  xs as N,
  Ts as O,
  ks as P,
  ws as Q,
  Ns as R,
  Ss as S,
  qs as T,
  As as U,
  Cs as V,
  Ds as W,
  js as X,
  Ms as Y,
  Rs as Z,
  Es as _,
  Bi as a,
  d as a$,
  Bs as a0,
  Vs as a1,
  Hs as a2,
  Ws as a3,
  Gs as a4,
  Us as a5,
  Ks as a6,
  Zs as a7,
  Qs as a8,
  tn as a9,
  Dn as aA,
  jn as aB,
  Mn as aC,
  Rn as aD,
  En as aE,
  Fn as aF,
  Bn as aG,
  Vn as aH,
  Ln as aI,
  Hn as aJ,
  On as aK,
  zn as aL,
  Wn as aM,
  Xn as aN,
  Gn as aO,
  Yn as aP,
  Un as aQ,
  Oo as aR,
  zo as aS,
  Tr as aT,
  i as aU,
  s as aV,
  n as aW,
  o as aX,
  m as aY,
  p as aZ,
  c as a_,
  rn as aa,
  nn as ab,
  on as ac,
  mn as ad,
  pn as ae,
  cn as af,
  dn as ag,
  ln as ah,
  un as ai,
  yn as aj,
  gn as ak,
  bn as al,
  In as am,
  fn as an,
  vn as ao,
  hn as ap,
  xn as aq,
  Tn as ar,
  kn as as,
  wn as at,
  Nn as au,
  Sn as av,
  Pn as aw,
  qn as ax,
  An as ay,
  Cn as az,
  Vi as b,
  xe as b$,
  l as b0,
  u as b1,
  y as b2,
  g as b3,
  b as b4,
  I as b5,
  f as b6,
  v as b7,
  h as b8,
  x as b9,
  _ as bA,
  K as bB,
  $ as bC,
  Z as bD,
  J as bE,
  Q as bF,
  ee as bG,
  te as bH,
  ae as bI,
  re as bJ,
  ie as bK,
  se as bL,
  ne as bM,
  oe as bN,
  me as bO,
  pe as bP,
  ce as bQ,
  de as bR,
  le as bS,
  ue as bT,
  ye as bU,
  ge as bV,
  be as bW,
  Ie as bX,
  fe as bY,
  ve as bZ,
  he as b_,
  T as ba,
  k as bb,
  w as bc,
  N as bd,
  S as be,
  P as bf,
  q as bg,
  A as bh,
  C as bi,
  D as bj,
  j as bk,
  M as bl,
  R as bm,
  E as bn,
  F as bo,
  B as bp,
  V as bq,
  L as br,
  H as bs,
  O as bt,
  z as bu,
  W as bv,
  X as bw,
  G as bx,
  Y as by,
  U as bz,
  Li as c,
  Dt as c$,
  Te as c0,
  ke as c1,
  we as c2,
  Ne as c3,
  Se as c4,
  Pe as c5,
  qe as c6,
  Ae as c7,
  Ce as c8,
  De as c9,
  it as cA,
  st as cB,
  nt as cC,
  ot as cD,
  mt as cE,
  pt as cF,
  ct as cG,
  dt as cH,
  lt as cI,
  ut as cJ,
  yt as cK,
  gt as cL,
  bt as cM,
  It as cN,
  ft as cO,
  vt as cP,
  ht as cQ,
  xt as cR,
  Tt as cS,
  kt as cT,
  wt as cU,
  Nt as cV,
  St as cW,
  Pt as cX,
  qt as cY,
  At as cZ,
  Ct as c_,
  je as ca,
  Me as cb,
  Re as cc,
  Ee as cd,
  Fe as ce,
  Be as cf,
  Ve as cg,
  Le as ch,
  He as ci,
  Oe as cj,
  ze as ck,
  We as cl,
  Xe as cm,
  Ge as cn,
  Ye as co,
  Ue as cp,
  _e as cq,
  Ke as cr,
  $e as cs,
  Ze as ct,
  Je as cu,
  Qe as cv,
  et as cw,
  tt as cx,
  at as cy,
  rt as cz,
  Hi as d,
  Qa as d$,
  jt as d0,
  Mt as d1,
  Rt as d2,
  Et as d3,
  Ft as d4,
  Bt as d5,
  Vt as d6,
  Lt as d7,
  Ht as d8,
  Ot as d9,
  Ia as dA,
  fa as dB,
  va as dC,
  ha as dD,
  xa as dE,
  Ta as dF,
  ka as dG,
  wa as dH,
  Na as dI,
  Sa as dJ,
  Pa as dK,
  qa as dL,
  Aa as dM,
  Fa as dN,
  Ra as dO,
  Ba as dP,
  Va as dQ,
  La as dR,
  Ha as dS,
  Oa as dT,
  za as dU,
  Ka as dV,
  Ua as dW,
  _a as dX,
  $a as dY,
  Za as dZ,
  Ja as d_,
  zt as da,
  Wt as db,
  Xt as dc,
  Gt as dd,
  Yt as de,
  Ut as df,
  _t as dg,
  Kt as dh,
  $t as di,
  Zt as dj,
  Jt as dk,
  Qt as dl,
  ea as dm,
  ta as dn,
  aa as dp,
  ra as dq,
  ia as dr,
  sa as ds,
  na as dt,
  oa as du,
  ma as dv,
  pa as dw,
  ca as dx,
  da as dy,
  la as dz,
  Oi as e,
  er as e0,
  tr as e1,
  ar as e2,
  rr as e3,
  ir as e4,
  nr as e5,
  or as e6,
  mr as e7,
  pr as e8,
  cr as e9,
  Fr as eA,
  Br as eB,
  Vr as eC,
  Lr as eD,
  Or as eE,
  Xr as eF,
  Gr as eG,
  _r as eH,
  Ur as eI,
  Kr as eJ,
  $r as eK,
  Zr as eL,
  Jr as eM,
  Qr as eN,
  ei as eO,
  ti as eP,
  dr as ea,
  lr as eb,
  ur as ec,
  yr as ed,
  gr as ee,
  br as ef,
  Ir as eg,
  fr as eh,
  vr as ei,
  hr as ej,
  xr as ek,
  wi as el,
  Ci as em,
  kr as en,
  wr as eo,
  Nr as ep,
  Sr as eq,
  Pr as er,
  qr as es,
  Ar as et,
  Cr as eu,
  Dr as ev,
  jr as ew,
  Mr as ex,
  Rr as ey,
  Er as ez,
  zi as f,
  Wi as g,
  Xi as h,
  Gi as i,
  Yi as j,
  Ui as k,
  _i as l,
  Fi as m,
  Ki as n,
  Zi as o,
  Ji as p,
  Qi as q,
  es as r,
  ts as s,
  $i as t,
  as as u,
  rs as v,
  is as w,
  ss as x,
  ns as y,
  os as z
};
//# sourceMappingURL=plugin.es.js.map
