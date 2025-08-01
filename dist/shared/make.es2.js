import be from "ajv";
import { c as De, a as Me, m as o } from "./make.es.js";
import { aL as Re, aP as je, aQ as Ee, ao as Fe, as as Be, au as Ve, av as Le, T as He, U as ze, _ as Oe, B as We, G as Xe, C as Ge, w as Ye, I as Ue, S as _e, p as Ke, b3 as Ze, b4 as $e } from "./namedItems.es.js";
const ba = ({ actorId: e = 1, faceIndex: t = 0, faceName: a = "", characterIndex: r = 0, characterName: m = "", battlerName: p = "" } = {}, l = 0) => ({
  code: 322,
  indent: l,
  parameters: [e, m, r, a, t, p]
}), U = (e, t) => `\\${e}[${t}]`, fa = (e, t) => t.map((a, r) => ({ text: a, controlChar: U(e, r) })), Ia = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({
  char: t[1],
  id: parseInt(t[2], 10)
})), va = (e) => e.map((t) => ({ text: t.name, controlChar: U("N", t.id) })), ha = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: U("V", a) })).filter((t) => t.text !== ""), xa = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Ta = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), ka = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), wa = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Je = (e = {}) => ({
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
}), Na = (e, t, a = 0) => ({
  code: e,
  indent: a,
  parameters: t
}), Sa = 0, Pa = 1, Aa = 2, Ca = 3, qa = 4, Da = 5, Ma = 6, Ra = 7, ja = 8, Ea = 9, Fa = 10, Ba = 11, Va = 12, La = 13, Ha = 14, za = 15, Oa = 16, Wa = 17, Xa = 18, Ga = 19, Ya = 20, Ua = 21, _a = 22, Ka = 23, Za = 24, $a = 25, Ja = 26, Qa = 27, er = 28, tr = 29, ar = 30, rr = 31, ir = 32, sr = 33, nr = 34, or = 35, mr = 36, pr = 37, cr = 38, lr = 39, dr = 40, ur = 41, yr = 42, gr = 43, br = 44, fr = 45, Ir = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), vr = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), hr = () => ({ conditions: Je(), list: [], directionFix: !1, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: !1, skippable: !1, wait: !1 } }), xr = (e = {}) => ({
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
}), Tr = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, Qe = {
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
}, et = {
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
      pages: { type: "array", items: Qe }
    } } }
  }
}, fe = new be({ strict: !0 }), tt = fe.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), at = fe.compile(et), kr = (e) => tt(e), wr = (e) => at(e), rt = { actor: { title: "アクター", options: {
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
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, it = {
  title: "ダメージ",
  options: {}
}, _ = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Nr = (e = {}) => ({
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
}), Sr = (e) => ({
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
}), Pr = (e = {}) => ({
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
}), Ar = (e = {}) => ({ name: e.name ?? "", id: e.id ?? 0, traits: [], note: e.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e.learnings ?? [], expParams: e.expParams ?? [] }), st = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Cr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), qr = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => st())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Dr = (e = {}) => ({
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
}), d = "{name}", A = "{name} * {value}%", ne = "{name} + {value}%", oe = "{value}", nt = { title: "特徴", options: {
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
  extraParam: { title: "追加能力値", format: ne, options: {
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
  attackState: { title: "攻撃ステート", format: ne },
  attackSpeed: { title: "攻撃速度補正", format: oe },
  attackTimes: {
    title: "攻撃追加回数",
    format: oe
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
} }, ot = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Mr = (e, t, a) => {
  const r = De(ot);
  return Me(t, a, r, e.pattern, (m) => m.dataId);
}, Rr = (e = {}) => ({
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
  damage: _(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), jr = {
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
}, Er = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Fr = 0, Br = 1, Vr = 2, me = "{name} {value1}%", L = "{value1}% + {value2}", pe = "{name} {value1}ターン", D = "{name}", mt = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: pe },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: pe },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: L },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: D },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: L
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: L },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: D
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: D },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: me },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: D
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: me },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: D }
} }, Lr = 0, Hr = (e, t, a) => {
  const r = a.find((p) => p.id === t.dataId), m = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", m);
}, zr = { title: "アイテム", options: { consumable: "消耗品" } }, Or = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Wr = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Xr = (e = {}) => ({
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
  damage: _(e.damage ?? {}),
  effects: [],
  price: 0
}), Gr = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: _(e.damage ?? {}),
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
}), Yr = "data", Ur = "actor", _r = "map", Kr = "enemy", Zr = "state", $r = "skill", Jr = "item", Qr = "weapon", ei = "armor", ti = "class", ai = "common_event", ri = "troop", pt = {
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
}, ii = () => ({ rpg: { damage: it, data: rt, traits: nt, itemEffect: mt }, global: pt }), si = (e, t = 0) => ({ code: Re, parameters: [e.actorId, e.name], indent: t }), ni = (e, t = 0) => ({
  code: je,
  parameters: [e.actorId, e.nickname],
  indent: t
}), oi = (e, t = 0) => ({ code: Ee, parameters: [e.actorId, e.profile], indent: t }), mi = (e, t) => w(e, o({ name: t })), w = (e, t, a = 0) => ({
  code: e,
  parameters: [o(t)],
  indent: a
}), pi = (e, t = 0) => w(Fe, e, t), ci = (e, t = 0) => w(Be, e, t), li = (e, t = 0) => w(Ve, e, t), di = (e, t = 0) => w(Le, e, t), ui = (e, t = 0) => w(He, e, t), yi = (e, t = 0) => w(ze, e, t), gi = (e, t = 0) => w(Oe, e, t), bi = (e, t = 0) => ({
  code: We,
  indent: t,
  parameters: ct(e ?? {})
}), fi = (e) => ({ eventId: e[0] }), ct = (e) => [e.eventId ?? 0], Ii = (e) => ({ min: e[0], max: e[1], value: e[2] }), lt = (e) => [e.min, e.max, e.value], vi = (e, t = 0) => ({
  code: Xe,
  indent: t,
  parameters: lt(e)
}), Ie = (e) => [e], hi = (e) => ({ comment: e[0] }), dt = (e, t = 0) => ({ code: Ge, indent: t, parameters: Ie(e) }), ut = (e, t = 0) => ({
  code: Ye,
  indent: t,
  parameters: Ie(e)
}), xi = (e, t = 0) => e.map((a, r) => r === 0 ? dt(a, t) : ut(a, t)), yt = (e) => [e.variableId ?? 0, e.digits ?? 0], Ti = (e) => ({ variableId: e[0], digits: e[1] }), ki = (e, t = 0) => ({
  code: Ue,
  indent: t,
  parameters: yt(e ?? {})
}), wi = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), Ni = (e) => ({ index: e[0], name: e[1] }), Si = (e) => [e.index ?? 0, e.name ?? ""], Pi = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Ai = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Ci = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), qi = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Di = (e, t = 0) => ({
  code: _e,
  indent: t,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Mi = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Ri = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], ji = (e, t = 0) => ({
  code: Ke,
  indent: t,
  parameters: [e]
}), Ei = ({ pictureId: e = 0, origin: t = 0, name: a = "", x: r = 0, y: m = 0, scaleX: p = 100, scaleY: l = 100, opacity: u = 255, blendMode: y = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, a, t, r, m, p, l, u, y]
}), Fi = ({ pictureId: e, origin: t, x: a, y: r, scaleX: m, scaleY: p, opacity: l, blendMode: u, wait: y = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, t, a, r, m, p, l, u, y, I] }), gt = (e, t = 0) => ({
  code: Ze,
  indent: t,
  parameters: [e]
}), bt = (e, t = 0) => ({ code: $e, indent: t, parameters: [e] }), Bi = (e, t = 0) => e.map((a, r) => r === 0 ? gt(a, t) : bt(a, t)), Vi = 0, Li = 1, Hi = 2, zi = 3, Oi = 4, ft = {
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
}, Wi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], Xi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], Gi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], Yi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Ui = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], _i = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], Ki = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, ft[t.param]], Zi = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, $i = (e, t) => {
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
}, It = (e) => [...e], Ji = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: It(e.parameters)
}), vt = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Qi = (e) => e.parameters.every(vt), es = "bgm", ts = "se", as = "me", rs = "bgs", is = "battlebacks1", ss = "battlebacks2", ns = "characters", os = "enemies", ms = "faces", ps = "parallaxes", cs = "pictures", ls = "sv_actors", ds = "sv_enemies", us = "system", ys = "tilesets", gs = "titles1", bs = "titles2", fs = "System.json", Is = "Actors.json", vs = "Classes.json", hs = "Skills.json", xs = "Items.json", Ts = "Weapons.json", ks = "Armors.json", ws = "Enemies.json", Ns = "Troops.json", Ss = "States.json", Ps = "Animations.json", As = "Tilesets.json", Cs = "CommonEvents.json", qs = "MapInfos.json", Ds = "data", Ms = "img", Rs = "audio", js = "js", ve = (e, t) => ({
  type: "array",
  items: t,
  ...x(e),
  ...T(e.default)
}), x = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), T = (e) => e !== void 0 ? {
  default: e
} : {}, ce = (e) => e === void 0 || e === 0, ht = (e) => ve(e, { type: "string" }), xt = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((a) => ({
        type: "string",
        ...x(a),
        ...T(a.default)
      }))(e);
    case "file":
    case "combo":
      return ((a) => ({ type: "string", ...T(a.default), ...x(a) }))(e);
    case "select":
      return ((a) => ({ type: "string", ...T(a.default), ...x(a), ...a.options ? {
        enum: a.options.map((r) => r.value)
      } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return ht(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: ce(a.decimals) ? "integer" : "number"
      }, ...T(a.default), ...x(a) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((a) => ve(a, { type: "integer" }))(e);
    case "number":
      return ((a) => ({ type: ce(a.decimals) ? "integer" : "number", ...T(a.default), ...x(a) }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((a) => ({ type: "integer", ...T(a.default), ...x(a) }))(e);
    case "boolean":
      return ((a) => ({ type: "boolean", ...T(a.default), ...x(a) }))(e);
    case "struct":
      return { $ref: `#/definitions/${(t = e).struct}`, ...x(t) };
    default:
      return {};
  }
  var t;
}, he = (e, t) => Object.entries(t).reduce((a, [r, m]) => {
  if (r in e) {
    const p = e[r];
    if (typeof p == "string") return { ...a, [r]: m(p) };
  }
  return a;
}, {}), k = (e, t, a, r) => ({
  default: t,
  ...he(a, r),
  kind: e
}), E = (e, t, a) => ({ default: [], ...he(t, a), kind: e }), xe = "help", X = "kind", H = "text", le = "struct", Te = (e) => {
  const t = JSON.parse(e);
  return Array.isArray(t) ? t.map(F) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, F(r)])) : t;
}, F = (e) => {
  if (typeof e != "string") return e;
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.map(F) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, F(r)])) : t;
  } catch {
    return e;
  }
}, Tt = (e) => {
  if (X in e.attr) {
    const t = kt[e.attr.kind];
    if (t) return t(e);
  }
  return k("any", "", e.attr, B);
}, n = (e) => e, ke = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), B = {
  default: n,
  text: n,
  desc: n,
  parent: n
}, de = (e) => k("string", "", e.attr, B), ue = (e) => {
  const t = { default: (a) => Te(a), text: n, desc: n, parent: n };
  return E("string[]", e.attr, t);
}, g = (e, t) => {
  const a = {
    default: ke,
    text: n,
    desc: n,
    parent: n
  };
  return E(t, e.attr, a);
}, b = (e, t) => {
  const a = { default: (r) => parseInt(r, 10), text: n, desc: n, parent: n };
  return k(t, 0, e.attr, a);
}, kt = {
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
    return k("number", 0, t.attr, a);
  })(e),
  "number[]": (e) => {
    const t = { default: ke, text: n, desc: n, decimals: (a) => parseInt(a, 10), min: (a) => parseFloat(a), max: (a) => parseFloat(a), parent: n };
    return E("number[]", e.attr, t);
  },
  string: de,
  "string[]": ue,
  multiline_string: de,
  "multiline_string[]": ue,
  combo: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => r.option)) ?? [];
    return { ...k("combo", "", e.attr, B), options: t };
  },
  select: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...k("select", "", e.attr, B), options: t };
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
    return k("boolean", !0, e.attr, t);
  },
  file: (e) => {
    const t = { default: n, text: n, desc: n, parent: n, dir: n };
    return { dir: "", ...k("file", "", e.attr, t) };
  },
  "file[]": (e) => {
    const t = { default: (a) => Te(a), text: n, desc: n, parent: n, dir: n };
    return { dir: "", ...E("file[]", e.attr, t) };
  }
}, we = "BODY", Ne = "STRUCT", R = "NONE", wt = (e, t) => {
  const a = e.lines.length > 0 ? K(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? Ne : "INVALID", locale: t[2], lines: [] };
}, Nt = (e) => ({
  ...e.lines.length > 0 ? K(e) : e,
  blockType: we,
  structName: void 0,
  locale: void 0,
  lines: []
}), K = (e) => e.blockType === we ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: R } : e.structName && e.blockType === Ne ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: R,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: R,
  structName: void 0,
  lines: []
}, St = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, G = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), j = (e) => {
  const t = Pt(e), a = Ct(t);
  return At(a);
}, Pt = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: St(e.currentOption).items } };
  }
  return e;
}, At = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, Ct = (e) => {
  if (e.currentCommand) {
    const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ...G(e.currentCommand), command: e.currentCommand.command, args: t };
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
}, ye = (e, t) => {
  const a = e.lines.reduce((r, m) => {
    const p = m.trim().replace(/^\*\s?/, "");
    if (!p.startsWith("@")) return r.currentContext === xe ? { ...r, helpLines: r.helpLines.concat(p) } : r;
    const [l, ...u] = p.slice(1).split(" "), y = u.join(" ").trim(), I = t[l];
    return I ? I(r, y) : r;
  }, Dt());
  return j(a);
}, qt = (e, t) => {
  const a = ((l) => {
    const u = l.split(`
`), y = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: R
    }, I = u.reduce((v, M) => {
      const N = M.trim(), q = N.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return q ? wt(v, q) : N === "/*:" ? Nt(v) : N === "*/" ? v.lines.length > 0 ? K(v) : v : { ...v, lines: v.lines.concat([N]) };
    }, y);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = a.structs.map((l) => ((u) => {
    const y = ye(u, Se);
    return { name: u.struct, params: y.params };
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
  const p = ye(m, t);
  return { params: p.params, commands: p.commands, meta: p.meta, helpLines: p.helpLines, structs: r };
}, Dt = () => ({
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
} : e, z = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Se = {
  param: (e, t) => {
    const a = j(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? h(e, H, t) : e.currentCommand && !(H in e.currentCommand) ? { ...e, currentCommand: {
    ...G(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [H]: t
  } } : e,
  desc: (e, t) => e.currentParam ? h(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
  command: (e, t) => {
    const a = j(e);
    return a.commands.some((r) => r.command === t) ? a : { ...a, currentCommand: { command: t, args: [] }, currentParam: null };
  },
  arg: (e, t) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const a = {
        ...G(e.currentCommand),
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
  help: (e) => ({ ...j(e), currentContext: xe }),
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
      const a = t.slice(7, -1), r = h(e, le, a);
      return h(r, X, le);
    }
    return e.currentParam ? h(e, X, t) : e;
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
  author: (e, t) => z(e, "author", t),
  plugindesc: (e, t) => z(e, "plugindesc", t),
  url: (e, t) => z(e, "url", t)
}, Mt = (e) => Rt(((t) => qt(t, Se))(e)), Rt = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: jt(e.commands),
  params: Pe(e.params)
}), Pe = (e) => e.reduce((t, a) => ({ [a.name]: Tt(a), ...t }), {}), jt = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: Pe(a.args) };
  return { [a.command]: r, ...t };
}, {}), Es = (e) => Mt(e), Fs = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [m, p]) => {
    const l = xt(p);
    return { ...r, [m]: l };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e), Et = (e = {}) => ({
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
}), Ft = (e = {}) => [o(e.cursor), o(e.ok), o(e.cancel), o(e.buzzer), o(e.equip), o(e.save), o(e.load), o(e.battleStart), o(e.escape), o(e.enemyAttack), o(e.enemyDamage), o(e.enemyCollapse), o(e.bossCollapes1), o(e.bossCollapes2), o(e.actorDamage), o(e.actorCollapse), o(e.playRecovery), o(e.playMiss), o(e.playEvasion), o(e.playMagicEvasion), o(e.playReflection), o(e.shop), o(e.useItem), o(e.useSkill)], Bs = (e) => ({
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
}), Vs = (e) => e.menuCommands[0], Ls = (e) => e.menuCommands[1], Hs = (e) => e.menuCommands[2], zs = (e) => e.menuCommands[3], Os = (e) => e.menuCommands[4], Ws = (e) => e.menuCommands[5], Xs = (e) => e.itemCategories[0], Gs = (e) => e.itemCategories[1], Ys = (e) => e.itemCategories[2], Us = (e) => e.itemCategories[3], Bt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], _s = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Vt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], Ks = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), Lt = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Ht = (e = {}) => ({
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
}), f = { type: "boolean" }, zt = {
  type: "object",
  additionalProperties: !1,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: f,
    optDisplayTp: f,
    optDrawTitle: f,
    optExtraExp: f,
    optFloorDeath: f,
    optFollowers: f,
    optKeyItemsNumber: f,
    optSideView: f,
    optSlipDeath: f,
    optTransparent: f,
    optMessageSkip: f,
    optSplashScreen: f
  }
}, Zs = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), Ot = (e) => ({
  armorTypes: S(e.armorTypes),
  elements: S(e.elements),
  equipTypes: S(e.equipTypes),
  weaponTypes: S(e.weaponTypes),
  skillTypes: S(e.skillTypes),
  variables: S(e.variables),
  switches: S(e.switches)
}), S = (e) => e ? [...e] : [], $s = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), Wt = (e) => [e.mhp ?? "", e.mmp ?? "", e.atk ?? "", e.def ?? "", e.mat ?? "", e.mdf ?? "", e.agi ?? "", e.luk ?? "", e.hit ?? "", e.eva ?? ""], Js = (e) => ({
  mhp: e[0],
  mmp: e[1],
  atk: e[2],
  def: e[3],
  mat: e[4],
  mdf: e[5],
  agi: e[6],
  luk: e[7],
  hit: e[8],
  eva: e[9]
}), Xt = (e) => [e.level ?? "Level", e.levelA ?? "Level", e.hp ?? "HP", e.hpA ?? "HP", e.mp ?? "MP", e.mpA ?? "MP", e.tp ?? "TP", e.tpA ?? "TP", e.experience ?? "EXP", e.exp ?? "EXP"], Qs = (e) => ({
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
}), Gt = (e) => Yt(e, ""), Yt = (e, t) => [e.fight ?? "Fight", e.escape ?? "Escape", e.attack ?? "Attack", e.guard ?? "Guard", e.item ?? "Item", e.skill ?? "Skill", e.equip ?? "Equip", e.status ?? "Status", e.formation ?? "Formation", e.save ?? "Save", e.gameEnd ?? "Game End", e.options ?? "Options", e.weapon ?? "Weapon", e.armor ?? "Armor", e.keyItem ?? "Key Item", e.equip2 ?? "Equip2", e.optimize ?? "Optimize", e.clear ?? "Clear", e.newGame ?? "New Game", e.continue_ ?? "Continue", t, e.toTitle ?? "To Title", e.cancel ?? "Cancel", t, e.buy ?? "Buy", e.sell ?? "Sell"], en = (e) => ({
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
}), i = (e, t) => typeof e == "string" ? e : t, Ut = (e) => ({
  actionFailure: i(e.actionFailure, "Action failed."),
  actorDamage: i(e.actorDamage, "%1 took %2 damage."),
  actorRecovery: i(e.actorRecovery, "%1 recovered %2 HP."),
  actorGain: i(e.actorGain, "%1 gained %2."),
  actorLoss: i(e.actorLoss, "%1 lost %2."),
  actorDrain: i(e.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: i(e.actorNoDamage, "%1 was not damaged."),
  actorNoHit: i(e.actorNoHit, "%1 was not hit."),
  alwaysDash: i(e.alwaysDash, "Always dash."),
  bgmVolume: i(e.bgmVolume, "BGM volume"),
  bgsVolume: i(e.bgsVolume, "BGS volume"),
  commandRemember: i(e.commandRemember, "Command remember."),
  criticalToActor: i(e.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: i(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: i(e.counterAttack, "%1 countered!"),
  debuffAdd: i(e.debuffAdd, "%1's %2 was lowered."),
  defeat: i(e.defeat, "Defeat."),
  enemyDamage: i(e.enemyDamage, "%1 took %2 damage."),
  enemyDrain: i(e.enemyDrain, "%1 drained %2 HP."),
  enemyGain: i(e.enemyGain, "%1 gained %2."),
  enemyLoss: i(e.enemyLoss, "%1 lost %2."),
  enemyNoDamage: i(e.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: i(e.enemyNoHit, "%1 was not hit."),
  enemyRecovery: i(e.enemyRecovery, "%1 recovered %2 HP."),
  evasion: i(e.evasion, "%1 evaded the attack!"),
  autosave: i(e.autosave, "Autosave"),
  escapeFailure: i(e.escapeFailure, "Escape failed."),
  escapeStart: i(e.escapeStart, "%1 started to escape!"),
  emerge: i(e.emerge, "%1 appeared!"),
  expNext: i(e.expNext, "Next level in %1 EXP."),
  expTotal: i(e.expTotal, "Total EXP: %1"),
  file: i(e.file, "File"),
  buffAdd: i(e.buffAdd, "%1's %2 was raised."),
  buffRemove: i(e.buffRemove, "%1's %2 was lowered."),
  obtainExp: i(e.obtainExp, "%1 EXP obtained."),
  obtainGold: i(e.obtainGold, "%1 gold obtained."),
  obtainItem: i(e.obtainItem, "%1 obtained %2."),
  obtainSkill: i(e.obtainSkill, "%1 learned %2."),
  levelUp: i(e.levelUp, "%1 leveled up!"),
  partyName: i(e.partyName, "Party"),
  loadMessage: i(e.loadMessage, "Load %1?"),
  meVolume: i(e.meVolume, "ME volume"),
  possession: i(e.possession, "Possession"),
  preemptive: i(e.preemptive, "%1 attacked first!"),
  saveMessage: i(e.saveMessage, "Save %1?"),
  seVolume: i(e.seVolume, "SE volume"),
  magicEvasion: i(e.magicEvasion, "%1 evaded the magic!"),
  magicReflection: i(e.magicReflection, "%1 reflected the magic!"),
  substitute: i(e.substitute, "%1 took the hit!"),
  surprise: i(e.surprise, "%1 surprised the enemy!"),
  touchUI: i(e.touchUI, "Touch UI"),
  useItem: i(e.useItem, "%1 used %2."),
  victory: i(e.victory, "Victory!")
}), tn = (e) => ({
  background: e.background ?? 0,
  offsetX: e.offsetX ?? 0,
  offsetY: e.offsetY ?? 0
}), O = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: o(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), _t = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), an = { title: "オプション", options: {
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
} }, rn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, sn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, nn = { title: "コマンド", options: {
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
} }, Ae = {
  type: "object",
  additionalProperties: !1,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, Ce = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, qe = {
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
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, Kt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, Zt = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, $t = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, Jt = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, Qt = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, P = { type: "array", items: { type: "string" } }, ea = {
  additionalProperties: !1,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: P,
    skillTypes: P,
    elements: P,
    variables: P,
    equipTypes: P,
    switches: P,
    armorTypes: P
  }
}, c = { type: "string" }, ge = { type: "string", nullable: !0 }, s = { type: "string" }, ta = {
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
        actionFailure: s,
        actorDamage: s,
        actorNoDamage: s,
        actorRecovery: s,
        actorGain: s,
        actorLoss: s,
        actorDrain: s,
        alwaysDash: s,
        bgmVolume: s,
        bgsVolume: s,
        commandRemember: s,
        criticalToActor: s,
        criticalToEnemy: s,
        counterAttack: s,
        debuffAdd: s,
        defeat: s,
        enemyDamage: s,
        enemyNoDamage: s,
        enemyRecovery: s,
        enemyGain: s,
        enemyLoss: s,
        enemyDrain: s,
        evasion: s,
        expNext: s,
        expTotal: s,
        escapeFailure: s,
        escapeStart: s,
        file: s,
        loadMessage: s,
        meVolume: s,
        magicEvasion: s,
        magicReflection: s,
        obtainExp: s,
        obtainGold: s,
        obtainItem: s,
        obtainSkill: s,
        partyName: s,
        preemptive: s,
        saveMessage: s,
        seVolume: s,
        substitute: s,
        touchUI: s,
        victory: s,
        useItem: s,
        buffAdd: s,
        buffRemove: s,
        actorNoHit: s,
        enemyNoHit: s,
        autosave: s,
        emerge: s,
        levelUp: s,
        possession: s,
        surprise: s
      }
    }, commands: {
      type: "array",
      items: [c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, ge, c, c, ge, c, c],
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
}, aa = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: qe },
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
}, ra = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
  attackMotions: { type: "array", items: Ae }
} }, ia = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), V = new be({ strict: !0 }), sa = ((e) => {
  const t = ia(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([ra, Kt, Zt, Lt, zt, $t, Ce, Qt, ea, ta, Jt, aa]), na = V.compile(sa), on = (e) => na(e), oa = V.compile(qe);
V.compile(Ae);
const ma = V.compile(Ce), mn = (e) => {
  var a, r, m, p, l, u, y, I, v, M, N, q, Z, $, J, Q, ee, te, ae, re, ie, se;
  const t = ca(e.size);
  return {
    ...Ht(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Ft(e.sounds),
    editor: _t(e.editing),
    advanced: Et(e.advanced),
    title1Name: ((m = e.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((p = e.images) == null ? void 0 : p.title2Name) ?? "",
    ...Ot(e.dataNames ?? {}),
    magicSkills: Y([]),
    airship: O((l = e.vehicles) == null ? void 0 : l.airship),
    boat: O((u = e.vehicles) == null ? void 0 : u.boat),
    ship: O((y = e.vehicles) == null ? void 0 : y.ship),
    defeatMe: o((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: o((v = e.me) == null ? void 0 : v.gameoverMe),
    titleBgm: o((M = e.bgm) == null ? void 0 : M.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((N = e.battleTest) == null ? void 0 : N.battleback1Name) ?? "",
    battleback2Name: ((q = e.battleTest) == null ? void 0 : q.battleback2Name) ?? "",
    testTroopId: ((Z = e.battleTest) == null ? void 0 : Z.testTroopId) ?? 0,
    testBattlers: la(($ = e.battleTest) == null ? void 0 : $.testBattlers, da),
    battleBgm: o((J = e.bgm) == null ? void 0 : J.battleBgm),
    victoryMe: o((Q = e.me) == null ? void 0 : Q.victoryMe),
    editMapId: ((ee = e.editorTemporary) == null ? void 0 : ee.editMapId) ?? 0,
    battlerName: ((te = e.editorTemporary) == null ? void 0 : te.battlerName) ?? "",
    locale: "",
    startMapId: ((ae = e.gameInit) == null ? void 0 : ae.startMapId) ?? 0,
    startX: ((re = e.gameInit) == null ? void 0 : re.startX) ?? 0,
    startY: ((ie = e.gameInit) == null ? void 0 : ie.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: pa(e.terms ?? {}),
    itemCategories: Bt(e.itemCategories),
    partyMembersArray: Y((se = e.gameInit) == null ? void 0 : se.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Vt(e.menuComamnds)
  };
}, pa = (e) => ({
  basic: Xt(e.basic ?? {}),
  commands: Gt(e.commands ?? {}),
  params: Wt(e.params ?? {}),
  messages: Ut(e.messages ?? {})
}), Y = (e) => e ? [...e] : [], ca = (e) => ((t) => ma(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, la = (e, t) => e ? e.map(t) : [], da = (e) => ((t) => oa(t))(e) ? { actorId: e.actorId, equips: Y(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
};
export {
  _i as $,
  ki as A,
  wi as B,
  Ni as C,
  Si as D,
  Pi as E,
  Ai as F,
  Ci as G,
  qi as H,
  Di as I,
  Mi as J,
  Ri as K,
  ji as L,
  Ei as M,
  Fi as N,
  gt as O,
  bt as P,
  Bi as Q,
  Vi as R,
  Li as S,
  Hi as T,
  zi as U,
  Oi as V,
  Wi as W,
  Xi as X,
  Gi as Y,
  Yi as Z,
  Ui as _,
  si as a,
  ja as a$,
  Ki as a0,
  Zi as a1,
  $i as a2,
  It as a3,
  Ji as a4,
  Qi as a5,
  es as a6,
  ts as a7,
  as as a8,
  rs as a9,
  qs as aA,
  Ds as aB,
  Ms as aC,
  Rs as aD,
  js as aE,
  Es as aF,
  Fs as aG,
  ii as aH,
  U as aI,
  fa as aJ,
  Ia as aK,
  va as aL,
  ha as aM,
  xa as aN,
  Ta as aO,
  ka as aP,
  wa as aQ,
  Je as aR,
  Na as aS,
  Sa as aT,
  Pa as aU,
  Aa as aV,
  Ca as aW,
  qa as aX,
  Da as aY,
  Ma as aZ,
  Ra as a_,
  is as aa,
  ss as ab,
  ns as ac,
  os as ad,
  ms as ae,
  ps as af,
  cs as ag,
  ls as ah,
  ds as ai,
  us as aj,
  ys as ak,
  gs as al,
  bs as am,
  fs as an,
  Is as ao,
  vs as ap,
  hs as aq,
  xs as ar,
  Ts as as,
  ks as at,
  ws as au,
  Ns as av,
  Ss as aw,
  Ps as ax,
  As as ay,
  Cs as az,
  ni as b,
  Hr as b$,
  Ea as b0,
  Fa as b1,
  Ba as b2,
  Va as b3,
  La as b4,
  Ha as b5,
  za as b6,
  Oa as b7,
  Wa as b8,
  Xa as b9,
  fr as bA,
  Ir as bB,
  vr as bC,
  hr as bD,
  xr as bE,
  Tr as bF,
  kr as bG,
  wr as bH,
  rt as bI,
  it as bJ,
  _ as bK,
  Nr as bL,
  Sr as bM,
  Pr as bN,
  Ar as bO,
  st as bP,
  Cr as bQ,
  qr as bR,
  Dr as bS,
  Mr as bT,
  nt as bU,
  Rr as bV,
  jr as bW,
  Er as bX,
  Fr as bY,
  Br as bZ,
  Vr as b_,
  Ga as ba,
  Ya as bb,
  Ua as bc,
  _a as bd,
  Ka as be,
  Za as bf,
  $a as bg,
  Ja as bh,
  Qa as bi,
  er as bj,
  tr as bk,
  ar as bl,
  rr as bm,
  ir as bn,
  sr as bo,
  nr as bp,
  or as bq,
  mr as br,
  pr as bs,
  cr as bt,
  lr as bu,
  dr as bv,
  ur as bw,
  yr as bx,
  gr as by,
  br as bz,
  oi as c,
  mt as c0,
  Lr as c1,
  zr as c2,
  Or as c3,
  Wr as c4,
  Xr as c5,
  Gr as c6,
  Yr as c7,
  Ur as c8,
  _r as c9,
  _s as cA,
  Vt as cB,
  Ks as cC,
  Ht as cD,
  Zs as cE,
  Ot as cF,
  $s as cG,
  Wt as cH,
  Js as cI,
  Xt as cJ,
  Qs as cK,
  Gt as cL,
  Yt as cM,
  en as cN,
  Ut as cO,
  tn as cP,
  O as cQ,
  _t as cR,
  an as cS,
  rn as cT,
  sn as cU,
  nn as cV,
  Kr as ca,
  Zr as cb,
  $r as cc,
  Jr as cd,
  Qr as ce,
  ei as cf,
  ti as cg,
  ai as ch,
  ri as ci,
  pt as cj,
  on as ck,
  mn as cl,
  Et as cm,
  Ft as cn,
  Bs as co,
  Vs as cp,
  Ls as cq,
  Hs as cr,
  zs as cs,
  Os as ct,
  Ws as cu,
  Xs as cv,
  Gs as cw,
  Ys as cx,
  Us as cy,
  Bt as cz,
  mi as d,
  w as e,
  pi as f,
  ci as g,
  li as h,
  di as i,
  ui as j,
  yi as k,
  gi as l,
  ba as m,
  bi as n,
  fi as o,
  Ii as p,
  lt as q,
  vi as r,
  Ie as s,
  ct as t,
  hi as u,
  dt as v,
  ut as w,
  xi as x,
  yt as y,
  Ti as z
};
