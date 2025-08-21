import ge from "ajv";
import { c as Me, a as Ae, m as n } from "./make.es.js";
import { aQ as De, aU as je, aV as Re, at as Fe, ax as Be, az as Ee, aA as Ve, Y as Le, Z as ze, a3 as Oe, J as We, O as He, C as Ye, B as Xe, I as _e, b8 as Ge, b9 as Ue, d6 as Ke, c$ as Ze, d3 as $e, d1 as Je } from "./make.es3.js";
const da = ({ actorId: e = 1, faceIndex: t = 0, faceName: a = "", characterIndex: r = 0, characterName: o = "", battlerName: m = "" } = {}, c = 0) => ({
  code: 322,
  indent: c,
  parameters: [e, o, r, a, t, m]
}), _ = (e, t) => `\\${e}[${t}]`, ua = (e, t) => t.map((a, r) => ({ text: a, controlChar: _(e, r) })), ya = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({
  char: t[1],
  id: parseInt(t[2], 10)
})), ga = (e) => e.map((t) => ({ text: t.name, controlChar: _("N", t.id) })), ba = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: _("V", a) })).filter((t) => t.text !== ""), Ia = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), fa = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), va = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), ha = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Qe = (e = {}) => ({
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
}), xa = (e, t, a = 0) => ({
  code: e,
  indent: a,
  parameters: t
}), Ta = 0, ka = 1, wa = 2, Sa = 3, Na = 4, Pa = 5, Ca = 6, qa = 7, Ma = 8, Aa = 9, Da = 10, ja = 11, Ra = 12, Fa = 13, Ba = 14, Ea = 15, Va = 16, La = 17, za = 18, Oa = 19, Wa = 20, Ha = 21, Ya = 22, Xa = 23, _a = 24, Ga = 25, Ua = 26, Ka = 27, Za = 28, $a = 29, Ja = 30, Qa = 31, er = 32, tr = 33, ar = 34, rr = 35, ir = 36, sr = 37, nr = 38, or = 39, mr = 40, pr = 41, cr = 42, lr = 43, dr = 44, ur = 45, yr = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), gr = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), br = () => ({ conditions: Qe(), list: [], directionFix: !1, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: !1, skippable: !1, wait: !1 } }), Ir = (e = {}) => ({
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
}), fr = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, et = {
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
}, tt = {
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
      pages: { type: "array", items: et }
    } } }
  }
}, be = new ge({ strict: !0 }), at = be.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), rt = be.compile(tt), vr = (e) => at(e), hr = (e) => rt(e), it = { actor: { title: "アクター", options: {
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
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, st = {
  title: "ダメージ",
  options: {}
}, G = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), xr = (e = {}) => ({
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
}), Tr = (e) => ({
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
}), kr = (e = {}) => ({
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
}), wr = (e = {}) => ({ name: e.name ?? "", id: e.id ?? 0, traits: [], note: e.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e.learnings ?? [], expParams: e.expParams ?? [] }), nt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Sr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Nr = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => nt())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Pr = (e = {}) => ({
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
}), l = "{name}", P = "{name} * {value}%", se = "{name} + {value}%", ne = "{value}", ot = { title: "特徴", options: {
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
  extraParam: { title: "追加能力値", format: se, options: {
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
  elementRate: { title: "属性有効度", format: P },
  debuffRate: { title: "弱体有効度", format: P },
  stateRate: { title: "ステート有効度", format: P },
  stateResist: {
    title: "ステート無効",
    format: l
  },
  attackElement: { title: "攻撃属性", format: l },
  attackState: { title: "攻撃ステート", format: se },
  attackSpeed: { title: "攻撃速度補正", format: ne },
  attackTimes: {
    title: "攻撃追加回数",
    format: ne
  },
  actionPlus: { title: "行動追加", format: P },
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
} }, mt = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Cr = (e, t, a) => {
  const r = Me(mt);
  return Ae(t, a, r, e.pattern, (o) => o.dataId);
}, qr = (e = {}) => ({
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
  damage: G(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Mr = {
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
}, Ar = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Dr = 0, jr = 1, Rr = 2, oe = "{name} {value1}%", V = "{value1}% + {value2}", me = "{name} {value1}ターン", M = "{name}", pt = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: me },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: me },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: V },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: M },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: V
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: V },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: M
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: M },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: oe },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: M
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: oe },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: M }
} }, Fr = 0, Br = (e, t, a) => {
  const r = a.find((m) => m.id === t.dataId), o = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", o);
}, Er = { title: "アイテム", options: { consumable: "消耗品" } }, Vr = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Lr = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, zr = (e = {}) => ({
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
  damage: G(e.damage ?? {}),
  effects: [],
  price: 0
}), Or = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: G(e.damage ?? {}),
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
}), Wr = "data", Hr = "actor", Yr = "map", Xr = "enemy", _r = "state", Gr = "skill", Ur = "item", Kr = "weapon", Zr = "armor", $r = "class", Jr = "common_event", Qr = "troop", ct = {
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
}, ei = () => ({ rpg: { damage: st, data: it, traits: ot, itemEffect: pt }, global: ct }), ti = (e, t = 0) => ({ code: De, parameters: [e.actorId, e.name], indent: t }), ai = (e, t = 0) => ({
  code: je,
  parameters: [e.actorId, e.nickname],
  indent: t
}), ri = (e, t = 0) => ({ code: Re, parameters: [e.actorId, e.profile], indent: t }), ii = (e, t) => k(e, n({ name: t })), k = (e, t, a = 0) => ({
  code: e,
  parameters: [n(t)],
  indent: a
}), si = (e, t = 0) => k(Fe, e, t), ni = (e, t = 0) => k(Be, e, t), oi = (e, t = 0) => k(Ee, e, t), mi = (e, t = 0) => k(Ve, e, t), pi = (e, t = 0) => k(Le, e, t), ci = (e, t = 0) => k(ze, e, t), li = (e, t = 0) => k(Oe, e, t), di = (e, t = 0) => ({
  code: We,
  indent: t,
  parameters: lt(e ?? {})
}), ui = (e) => ({ eventId: e[0] }), lt = (e) => [e.eventId ?? 0], yi = (e) => ({ min: e[0], max: e[1], value: e[2] }), dt = (e) => [e.min, e.max, e.value], gi = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: dt(e)
}), Ie = (e) => [e], bi = (e) => ({ comment: e[0] }), ut = (e, t = 0) => ({ code: Ye, indent: t, parameters: Ie(e) }), yt = (e, t = 0) => ({
  code: Xe,
  indent: t,
  parameters: Ie(e)
}), Ii = (e, t = 0) => e.map((a, r) => r === 0 ? ut(a, t) : yt(a, t)), gt = (e) => [e.variableId ?? 0, e.digits ?? 0], fi = (e) => ({ variableId: e[0], digits: e[1] }), vi = (e, t = 0) => ({
  code: _e,
  indent: t,
  parameters: gt(e ?? {})
}), hi = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), xi = (e) => ({ index: e[0], name: e[1] }), Ti = (e) => [e.index ?? 0, e.name ?? ""], ki = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), wi = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Si = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Ni = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Pi = ({ pictureId: e = 0, origin: t = 0, name: a = "", x: r = 0, y: o = 0, scaleX: m = 100, scaleY: c = 100, opacity: d = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, a, t, r, o, m, c, d, u]
}), Ci = ({ pictureId: e, origin: t, x: a, y: r, scaleX: o, scaleY: m, opacity: c, blendMode: d, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, t, a, r, o, m, c, d, u, I] }), bt = (e, t = 0) => ({
  code: Ge,
  indent: t,
  parameters: [e]
}), It = (e, t = 0) => ({ code: Ue, indent: t, parameters: [e] }), qi = (e, t = 0) => e.map((a, r) => r === 0 ? bt(a, t) : It(a, t)), Mi = 0, Ai = 1, Di = 2, ji = 3, Ri = 4, ft = {
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
}, Fi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], Bi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], Ei = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], Vi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Li = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], zi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], Oi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, ft[t.param]], Wi = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Hi = (e, t) => {
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
}, vt = (e) => [...e], Yi = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: vt(e.parameters)
}), ht = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Xi = (e) => e.parameters.every(ht), _i = "bgm", Gi = "se", Ui = "me", Ki = "bgs", Zi = "battlebacks1", $i = "battlebacks2", Ji = "characters", Qi = "enemies", es = "faces", ts = "parallaxes", as = "pictures", rs = "sv_actors", is = "sv_enemies", ss = "system", ns = "tilesets", os = "titles1", ms = "titles2", ps = "System.json", cs = "Actors.json", ls = "Classes.json", ds = "Skills.json", us = "Items.json", ys = "Weapons.json", gs = "Armors.json", bs = "Enemies.json", Is = "Troops.json", fs = "States.json", vs = "Animations.json", hs = "Tilesets.json", xs = "CommonEvents.json", Ts = "MapInfos.json", ks = "data", ws = "img", Ss = "audio", Ns = "js", fe = (e, t) => ({
  type: "array",
  items: t,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, pe = (e) => e === void 0 || e === 0, xt = (e) => fe(e, { type: "string" }), Tt = (e) => {
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
      return xt(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: pe(a.decimals) ? "integer" : "number"
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
      return ((a) => fe(a, { type: "integer" }))(e);
    case "number":
      return ((a) => ({ type: pe(a.decimals) ? "integer" : "number", ...x(a.default), ...h(a) }))(e);
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
}, ve = (e, t) => Object.entries(t).reduce((a, [r, o]) => {
  if (r in e) {
    const m = e[r];
    if (typeof m == "string") return { ...a, [r]: o(m) };
  }
  return a;
}, {}), T = (e, t, a, r) => ({
  default: t,
  ...ve(a, r),
  kind: e
}), R = (e, t, a) => ({ default: [], ...ve(t, a), kind: e }), he = "help", H = "kind", L = "text", ce = "struct", xe = (e) => {
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
}, kt = (e) => {
  if (H in e.attr) {
    const t = wt[e.attr.kind];
    if (t) return t(e);
  }
  return T("any", "", e.attr, B);
}, s = (e) => e, Te = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), B = {
  default: s,
  text: s,
  desc: s,
  parent: s
}, le = (e) => T("string", "", e.attr, B), de = (e) => {
  const t = { default: (a) => xe(a), text: s, desc: s, parent: s };
  return R("string[]", e.attr, t);
}, y = (e, t) => {
  const a = {
    default: Te,
    text: s,
    desc: s,
    parent: s
  };
  return R(t, e.attr, a);
}, g = (e, t) => {
  const a = { default: (r) => parseInt(r, 10), text: s, desc: s, parent: s };
  return T(t, 0, e.attr, a);
}, wt = {
  number: (e) => ((t) => {
    const a = {
      default: (r) => parseFloat(r),
      text: s,
      desc: s,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: s
    };
    return T("number", 0, t.attr, a);
  })(e),
  "number[]": (e) => {
    const t = { default: Te, text: s, desc: s, decimals: (a) => parseInt(a, 10), min: (a) => parseFloat(a), max: (a) => parseFloat(a), parent: s };
    return R("number[]", e.attr, t);
  },
  string: le,
  "string[]": de,
  multiline_string: le,
  "multiline_string[]": de,
  combo: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => r.option)) ?? [];
    return { ...T("combo", "", e.attr, B), options: t };
  },
  select: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...T("select", "", e.attr, B), options: t };
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
      text: s,
      desc: s,
      on: s,
      off: s,
      parent: s
    };
    return T("boolean", !0, e.attr, t);
  },
  file: (e) => {
    const t = { default: s, text: s, desc: s, parent: s, dir: s };
    return { dir: "", ...T("file", "", e.attr, t) };
  },
  "file[]": (e) => {
    const t = { default: (a) => xe(a), text: s, desc: s, parent: s, dir: s };
    return { dir: "", ...R("file[]", e.attr, t) };
  }
}, ke = "BODY", we = "STRUCT", D = "NONE", St = (e, t) => {
  const a = e.lines.length > 0 ? U(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? we : "INVALID", locale: t[2], lines: [] };
}, Nt = (e) => ({
  ...e.lines.length > 0 ? U(e) : e,
  blockType: ke,
  structName: void 0,
  locale: void 0,
  lines: []
}), U = (e) => e.blockType === ke ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: D } : e.structName && e.blockType === we ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: D,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: D,
  structName: void 0,
  lines: []
}, Pt = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, Y = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), j = (e) => {
  const t = Ct(e), a = Mt(t);
  return qt(a);
}, Ct = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: Pt(e.currentOption).items } };
  }
  return e;
}, qt = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, Mt = (e) => {
  if (e.currentCommand) {
    const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ...Y(e.currentCommand), command: e.currentCommand.command, args: t };
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
}, ue = (e, t) => {
  const a = e.lines.reduce((r, o) => {
    const m = o.trim().replace(/^\*\s?/, "");
    if (!m.startsWith("@")) return r.currentContext === he ? { ...r, helpLines: r.helpLines.concat(m) } : r;
    const [c, ...d] = m.slice(1).split(" "), u = d.join(" ").trim(), I = t[c];
    return I ? I(r, u) : r;
  }, Dt());
  return j(a);
}, At = (e, t) => {
  const a = ((c) => {
    const d = c.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: D
    }, I = d.reduce((f, A) => {
      const w = A.trim(), q = w.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return q ? St(f, q) : w === "/*:" ? Nt(f) : w === "*/" ? f.lines.length > 0 ? U(f) : f : { ...f, lines: f.lines.concat([w]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = a.structs.map((c) => ((d) => {
    const u = ue(d, Se);
    return { name: d.struct, params: u.params };
  })(c)), o = ((c) => {
    if (c.bodies.length !== 0) return c.bodies[0];
  })(a);
  if (!o) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const m = ue(o, t);
  return { params: m.params, commands: m.commands, meta: m.meta, helpLines: m.helpLines, structs: r };
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
}), v = (e, t, a) => e.currentParam && !(t in e.currentParam.attr) ? {
  ...e,
  currentParam: { ...e.currentParam, attr: { ...e.currentParam.attr, [t]: a } }
} : e, z = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Se = {
  param: (e, t) => {
    const a = j(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? v(e, L, t) : e.currentCommand && !(L in e.currentCommand) ? { ...e, currentCommand: {
    ...Y(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [L]: t
  } } : e,
  desc: (e, t) => e.currentParam ? v(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
  command: (e, t) => {
    const a = j(e);
    return a.commands.some((r) => r.command === t) ? a : { ...a, currentCommand: { command: t, args: [] }, currentParam: null };
  },
  arg: (e, t) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const a = {
        ...Y(e.currentCommand),
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
  help: (e) => ({ ...j(e), currentContext: he }),
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
      const a = t.slice(7, -1), r = v(e, ce, a);
      return v(r, H, ce);
    }
    return e.currentParam ? v(e, H, t) : e;
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
  author: (e, t) => z(e, "author", t),
  plugindesc: (e, t) => z(e, "plugindesc", t),
  url: (e, t) => z(e, "url", t)
}, jt = (e) => Rt(((t) => At(t, Se))(e)), Rt = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: Ft(e.commands),
  params: Ne(e.params)
}), Ne = (e) => e.reduce((t, a) => ({ [a.name]: kt(a), ...t }), {}), Ft = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: Ne(a.args) };
  return { [a.command]: r, ...t };
}, {}), Ps = (e) => jt(e), Cs = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [o, m]) => {
    const c = Tt(m);
    return { ...r, [o]: c };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e), Bt = (e = {}) => ({
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
}), Et = (e = {}) => [n(e.cursor), n(e.ok), n(e.cancel), n(e.buzzer), n(e.equip), n(e.save), n(e.load), n(e.battleStart), n(e.escape), n(e.enemyAttack), n(e.enemyDamage), n(e.enemyCollapse), n(e.bossCollapes1), n(e.bossCollapes2), n(e.actorDamage), n(e.actorCollapse), n(e.playRecovery), n(e.playMiss), n(e.playEvasion), n(e.playMagicEvasion), n(e.playReflection), n(e.shop), n(e.useItem), n(e.useSkill)], qs = (e) => ({
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
}), Ms = (e) => e.menuCommands[0], As = (e) => e.menuCommands[1], Ds = (e) => e.menuCommands[2], js = (e) => e.menuCommands[3], Rs = (e) => e.menuCommands[4], Fs = (e) => e.menuCommands[5], Bs = (e) => e.itemCategories[0], Es = (e) => e.itemCategories[1], Vs = (e) => e.itemCategories[2], Ls = (e) => e.itemCategories[3], Vt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], zs = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Lt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], Os = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), zt = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Ot = (e = {}) => ({
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
}), b = { type: "boolean" }, Wt = {
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
}, Ws = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), Ht = (e) => ({
  armorTypes: S(e.armorTypes),
  elements: S(e.elements),
  equipTypes: S(e.equipTypes),
  weaponTypes: S(e.weaponTypes),
  skillTypes: S(e.skillTypes),
  variables: S(e.variables),
  switches: S(e.switches)
}), S = (e) => e ? [...e] : [], Hs = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), Ys = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), O = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: n(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Yt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), Xs = { title: "オプション", options: {
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
} }, _s = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Gs = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Us = { title: "コマンド", options: {
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
} }, Pe = {
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
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, Xt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, _t = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, Gt = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, Ut = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, Kt = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, N = { type: "array", items: { type: "string" } }, Zt = {
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
}, p = { type: "string" }, ye = { type: "string", nullable: !0 }, i = { type: "string" }, $t = {
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
      items: [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ye, p, p, ye, p, p],
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
}, Jt = {
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
}, Qt = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
  attackMotions: { type: "array", items: Pe }
} }, ea = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), E = new ge({ strict: !0 }), ta = ((e) => {
  const t = ea(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([Qt, Xt, _t, zt, Wt, Gt, Ce, Kt, Zt, $t, Ut, Jt]), aa = E.compile(ta), Ks = (e) => aa(e), ra = E.compile(qe);
E.compile(Pe);
const ia = E.compile(Ce), Zs = (e) => {
  var a, r, o, m, c, d, u, I, f, A, w, q, K, Z, $, J, Q, ee, te, ae, re, ie;
  const t = na(e.size);
  return {
    ...Ot(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Et(e.sounds),
    editor: Yt(e.editing),
    advanced: Bt(e.advanced),
    title1Name: ((o = e.images) == null ? void 0 : o.title1Name) ?? "",
    title2Name: ((m = e.images) == null ? void 0 : m.title2Name) ?? "",
    ...Ht(e.dataNames ?? {}),
    magicSkills: X([]),
    airship: O((c = e.vehicles) == null ? void 0 : c.airship),
    boat: O((d = e.vehicles) == null ? void 0 : d.boat),
    ship: O((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: n((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: n((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: n((A = e.bgm) == null ? void 0 : A.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((w = e.battleTest) == null ? void 0 : w.battleback1Name) ?? "",
    battleback2Name: ((q = e.battleTest) == null ? void 0 : q.battleback2Name) ?? "",
    testTroopId: ((K = e.battleTest) == null ? void 0 : K.testTroopId) ?? 0,
    testBattlers: oa((Z = e.battleTest) == null ? void 0 : Z.testBattlers, ma),
    battleBgm: n(($ = e.bgm) == null ? void 0 : $.battleBgm),
    victoryMe: n((J = e.me) == null ? void 0 : J.victoryMe),
    editMapId: ((Q = e.editorTemporary) == null ? void 0 : Q.editMapId) ?? 0,
    battlerName: ((ee = e.editorTemporary) == null ? void 0 : ee.battlerName) ?? "",
    locale: "",
    startMapId: ((te = e.gameInit) == null ? void 0 : te.startMapId) ?? 0,
    startX: ((ae = e.gameInit) == null ? void 0 : ae.startX) ?? 0,
    startY: ((re = e.gameInit) == null ? void 0 : re.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: sa(e.terms ?? {}),
    itemCategories: Vt(e.itemCategories),
    partyMembersArray: X((ie = e.gameInit) == null ? void 0 : ie.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Lt(e.menuComamnds)
  };
}, sa = (e) => ({
  basic: Je(e.basic ?? {}),
  commands: $e(e.commands ?? {}),
  params: Ze(e.params ?? {}),
  messages: Ke(e.messages ?? {})
}), X = (e) => e ? [...e] : [], na = (e) => ((t) => ia(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, oa = (e, t) => e ? e.map(t) : [], ma = (e) => ((t) => ra(t))(e) ? { actorId: e.actorId, equips: X(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
};
export {
  vt as $,
  vi as A,
  hi as B,
  xi as C,
  Ti as D,
  ki as E,
  wi as F,
  Si as G,
  Ni as H,
  Pi as I,
  Ci as J,
  bt as K,
  It as L,
  qi as M,
  Ai as N,
  Mi as O,
  Di as P,
  ji as Q,
  Ri as R,
  Fi as S,
  Bi as T,
  Ei as U,
  Vi as V,
  Li as W,
  zi as X,
  Oi as Y,
  Wi as Z,
  Hi as _,
  ti as a,
  Ra as a$,
  Yi as a0,
  Xi as a1,
  _i as a2,
  Gi as a3,
  Ui as a4,
  Ki as a5,
  Zi as a6,
  $i as a7,
  Ji as a8,
  Qi as a9,
  Ns as aA,
  Ps as aB,
  Cs as aC,
  ei as aD,
  _ as aE,
  ua as aF,
  ya as aG,
  ga as aH,
  ba as aI,
  Ia as aJ,
  fa as aK,
  va as aL,
  ha as aM,
  Qe as aN,
  xa as aO,
  Ta as aP,
  ka as aQ,
  wa as aR,
  Sa as aS,
  Na as aT,
  Pa as aU,
  Ca as aV,
  qa as aW,
  Ma as aX,
  Aa as aY,
  Da as aZ,
  ja as a_,
  es as aa,
  ts as ab,
  as as ac,
  rs as ad,
  is as ae,
  ss as af,
  ns as ag,
  os as ah,
  ms as ai,
  ps as aj,
  cs as ak,
  ls as al,
  ds as am,
  us as an,
  ys as ao,
  gs as ap,
  bs as aq,
  Is as ar,
  fs as as,
  vs as at,
  hs as au,
  xs as av,
  Ts as aw,
  ks as ax,
  ws as ay,
  Ss as az,
  ai as b,
  Vr as b$,
  Fa as b0,
  Ba as b1,
  Ea as b2,
  Va as b3,
  La as b4,
  za as b5,
  Oa as b6,
  Wa as b7,
  Ha as b8,
  Ya as b9,
  Ir as bA,
  fr as bB,
  vr as bC,
  hr as bD,
  it as bE,
  st as bF,
  G as bG,
  xr as bH,
  Tr as bI,
  kr as bJ,
  wr as bK,
  nt as bL,
  Sr as bM,
  Nr as bN,
  Pr as bO,
  Cr as bP,
  ot as bQ,
  qr as bR,
  Mr as bS,
  Ar as bT,
  Dr as bU,
  jr as bV,
  Rr as bW,
  Br as bX,
  pt as bY,
  Fr as bZ,
  Er as b_,
  Xa as ba,
  _a as bb,
  Ga as bc,
  Ua as bd,
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
  ri as c,
  Lr as c0,
  zr as c1,
  Or as c2,
  Wr as c3,
  Hr as c4,
  Yr as c5,
  Xr as c6,
  _r as c7,
  Gr as c8,
  Ur as c9,
  Ws as cA,
  Ht as cB,
  Hs as cC,
  Ys as cD,
  O as cE,
  Yt as cF,
  Xs as cG,
  _s as cH,
  Gs as cI,
  Us as cJ,
  Kr as ca,
  Zr as cb,
  $r as cc,
  Jr as cd,
  Qr as ce,
  ct as cf,
  Ks as cg,
  Zs as ch,
  Bt as ci,
  Et as cj,
  qs as ck,
  Ms as cl,
  As as cm,
  Ds as cn,
  js as co,
  Rs as cp,
  Fs as cq,
  Bs as cr,
  Es as cs,
  Vs as ct,
  Ls as cu,
  Vt as cv,
  zs as cw,
  Lt as cx,
  Os as cy,
  Ot as cz,
  ii as d,
  k as e,
  si as f,
  ni as g,
  oi as h,
  mi as i,
  pi as j,
  ci as k,
  li as l,
  da as m,
  di as n,
  ui as o,
  yi as p,
  dt as q,
  gi as r,
  Ie as s,
  lt as t,
  bi as u,
  ut as v,
  yt as w,
  Ii as x,
  gt as y,
  fi as z
};
