import ge from "ajv";
import { c as Me, a as De, m as n } from "./make.es.js";
import { aL as Ae, aP as je, aQ as Re, ao as Fe, as as Be, au as Ee, av as Ve, T as Le, U as ze, _ as Oe, B as We, G as He, C as Xe, w as Ye, I as _e, S as Ge, p as Ue, b3 as Ke, b4 as Ze, d0 as $e, cV as Je, cZ as Qe, cX as et } from "./make.es3.js";
const ya = ({ actorId: e = 1, faceIndex: t = 0, faceName: a = "", characterIndex: r = 0, characterName: o = "", battlerName: m = "" } = {}, c = 0) => ({
  code: 322,
  indent: c,
  parameters: [e, o, r, a, t, m]
}), _ = (e, t) => `\\${e}[${t}]`, ga = (e, t) => t.map((a, r) => ({ text: a, controlChar: _(e, r) })), ba = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({
  char: t[1],
  id: parseInt(t[2], 10)
})), Ia = (e) => e.map((t) => ({ text: t.name, controlChar: _("N", t.id) })), fa = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: _("V", a) })).filter((t) => t.text !== ""), va = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), ha = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), xa = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Ta = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), tt = (e = {}) => ({
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
}), ka = (e, t, a = 0) => ({
  code: e,
  indent: a,
  parameters: t
}), wa = 0, Na = 1, Sa = 2, Pa = 3, Ca = 4, qa = 5, Ma = 6, Da = 7, Aa = 8, ja = 9, Ra = 10, Fa = 11, Ba = 12, Ea = 13, Va = 14, La = 15, za = 16, Oa = 17, Wa = 18, Ha = 19, Xa = 20, Ya = 21, _a = 22, Ga = 23, Ua = 24, Ka = 25, Za = 26, $a = 27, Ja = 28, Qa = 29, er = 30, tr = 31, ar = 32, rr = 33, ir = 34, sr = 35, nr = 36, or = 37, mr = 38, pr = 39, cr = 40, lr = 41, dr = 42, ur = 43, yr = 44, gr = 45, br = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), Ir = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), fr = () => ({ conditions: tt(), list: [], directionFix: !1, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: !1, skippable: !1, wait: !1 } }), vr = (e = {}) => ({
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
}), hr = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, at = {
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
}, rt = {
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
      pages: { type: "array", items: at }
    } } }
  }
}, be = new ge({ strict: !0 }), it = be.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), st = be.compile(rt), xr = (e) => it(e), Tr = (e) => st(e), nt = { actor: { title: "アクター", options: {
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
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, ot = {
  title: "ダメージ",
  options: {}
}, G = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), kr = (e = {}) => ({
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
}), wr = (e) => ({
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
}), Nr = (e = {}) => ({
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
}), Sr = (e = {}) => ({ name: e.name ?? "", id: e.id ?? 0, traits: [], note: e.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e.learnings ?? [], expParams: e.expParams ?? [] }), mt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Pr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Cr = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => mt())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, qr = (e = {}) => ({
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
}), l = "{name}", P = "{name} * {value}%", se = "{name} + {value}%", ne = "{value}", pt = { title: "特徴", options: {
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
} }, ct = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Mr = (e, t, a) => {
  const r = Me(ct);
  return De(t, a, r, e.pattern, (o) => o.dataId);
}, Dr = (e = {}) => ({
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
}), Ar = {
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
}, jr = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Rr = 0, Fr = 1, Br = 2, oe = "{name} {value1}%", V = "{value1}% + {value2}", me = "{name} {value1}ターン", M = "{name}", lt = { title: "使用効果", options: {
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
} }, Er = 0, Vr = (e, t, a) => {
  const r = a.find((m) => m.id === t.dataId), o = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", o);
}, Lr = { title: "アイテム", options: { consumable: "消耗品" } }, zr = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Or = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Wr = (e = {}) => ({
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
}), Hr = (e = {}) => ({
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
}), Xr = "data", Yr = "actor", _r = "map", Gr = "enemy", Ur = "state", Kr = "skill", Zr = "item", $r = "weapon", Jr = "armor", Qr = "class", ei = "common_event", ti = "troop", dt = {
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
}, ai = () => ({ rpg: { damage: ot, data: nt, traits: pt, itemEffect: lt }, global: dt }), ri = (e, t = 0) => ({ code: Ae, parameters: [e.actorId, e.name], indent: t }), ii = (e, t = 0) => ({
  code: je,
  parameters: [e.actorId, e.nickname],
  indent: t
}), si = (e, t = 0) => ({ code: Re, parameters: [e.actorId, e.profile], indent: t }), ni = (e, t) => k(e, n({ name: t })), k = (e, t, a = 0) => ({
  code: e,
  parameters: [n(t)],
  indent: a
}), oi = (e, t = 0) => k(Fe, e, t), mi = (e, t = 0) => k(Be, e, t), pi = (e, t = 0) => k(Ee, e, t), ci = (e, t = 0) => k(Ve, e, t), li = (e, t = 0) => k(Le, e, t), di = (e, t = 0) => k(ze, e, t), ui = (e, t = 0) => k(Oe, e, t), yi = (e, t = 0) => ({
  code: We,
  indent: t,
  parameters: ut(e ?? {})
}), gi = (e) => ({ eventId: e[0] }), ut = (e) => [e.eventId ?? 0], bi = (e) => ({ min: e[0], max: e[1], value: e[2] }), yt = (e) => [e.min, e.max, e.value], Ii = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: yt(e)
}), Ie = (e) => [e], fi = (e) => ({ comment: e[0] }), gt = (e, t = 0) => ({ code: Xe, indent: t, parameters: Ie(e) }), bt = (e, t = 0) => ({
  code: Ye,
  indent: t,
  parameters: Ie(e)
}), vi = (e, t = 0) => e.map((a, r) => r === 0 ? gt(a, t) : bt(a, t)), It = (e) => [e.variableId ?? 0, e.digits ?? 0], hi = (e) => ({ variableId: e[0], digits: e[1] }), xi = (e, t = 0) => ({
  code: _e,
  indent: t,
  parameters: It(e ?? {})
}), Ti = (e, t = 0) => ({ code: 402, indent: t, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), ki = (e) => ({ index: e[0], name: e[1] }), wi = (e) => [e.index ?? 0, e.name ?? ""], Ni = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Si = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Pi = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Ci = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), qi = (e, t = 0) => ({
  code: Ge,
  indent: t,
  parameters: [(e == null ? void 0 : e.facename) ?? "", (e == null ? void 0 : e.faceIndex) ?? 0, (e == null ? void 0 : e.background) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.speakerName) ?? ""]
}), Mi = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Di = (e) => [e.facename, e.faceIndex, e.background, e.positionType, e.speakerName], Ai = (e, t = 0) => ({
  code: Ue,
  indent: t,
  parameters: [e]
}), ji = ({ pictureId: e = 0, origin: t = 0, name: a = "", x: r = 0, y: o = 0, scaleX: m = 100, scaleY: c = 100, opacity: d = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, a, t, r, o, m, c, d, u]
}), Ri = ({ pictureId: e, origin: t, x: a, y: r, scaleX: o, scaleY: m, opacity: c, blendMode: d, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, t, a, r, o, m, c, d, u, I] }), ft = (e, t = 0) => ({
  code: Ke,
  indent: t,
  parameters: [e]
}), vt = (e, t = 0) => ({ code: Ze, indent: t, parameters: [e] }), Fi = (e, t = 0) => e.map((a, r) => r === 0 ? ft(a, t) : vt(a, t)), Bi = 0, Ei = 1, Vi = 2, Li = 3, zi = 4, ht = {
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
}, Oi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], Wi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], Hi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], Xi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Yi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], _i = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], Gi = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, ht[t.param]], Ui = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Ki = (e, t) => {
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
}, xt = (e) => [...e], Zi = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: xt(e.parameters)
}), Tt = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", $i = (e) => e.parameters.every(Tt), Ji = "bgm", Qi = "se", es = "me", ts = "bgs", as = "battlebacks1", rs = "battlebacks2", is = "characters", ss = "enemies", ns = "faces", os = "parallaxes", ms = "pictures", ps = "sv_actors", cs = "sv_enemies", ls = "system", ds = "tilesets", us = "titles1", ys = "titles2", gs = "System.json", bs = "Actors.json", Is = "Classes.json", fs = "Skills.json", vs = "Items.json", hs = "Weapons.json", xs = "Armors.json", Ts = "Enemies.json", ks = "Troops.json", ws = "States.json", Ns = "Animations.json", Ss = "Tilesets.json", Ps = "CommonEvents.json", Cs = "MapInfos.json", qs = "data", Ms = "img", Ds = "audio", As = "js", fe = (e, t) => ({
  type: "array",
  items: t,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, pe = (e) => e === void 0 || e === 0, kt = (e) => fe(e, { type: "string" }), wt = (e) => {
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
      return kt(e);
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
}, Nt = (e) => {
  if (H in e.attr) {
    const t = St[e.attr.kind];
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
}, St = {
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
}, ke = "BODY", we = "STRUCT", A = "NONE", Pt = (e, t) => {
  const a = e.lines.length > 0 ? U(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? we : "INVALID", locale: t[2], lines: [] };
}, Ct = (e) => ({
  ...e.lines.length > 0 ? U(e) : e,
  blockType: ke,
  structName: void 0,
  locale: void 0,
  lines: []
}), U = (e) => e.blockType === ke ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: A } : e.structName && e.blockType === we ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: A,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: A,
  structName: void 0,
  lines: []
}, qt = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, X = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), j = (e) => {
  const t = Mt(e), a = At(t);
  return Dt(a);
}, Mt = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: qt(e.currentOption).items } };
  }
  return e;
}, Dt = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, At = (e) => {
  if (e.currentCommand) {
    const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ...X(e.currentCommand), command: e.currentCommand.command, args: t };
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
  }, Rt());
  return j(a);
}, jt = (e, t) => {
  const a = ((c) => {
    const d = c.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: A
    }, I = d.reduce((f, D) => {
      const w = D.trim(), q = w.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return q ? Pt(f, q) : w === "/*:" ? Ct(f) : w === "*/" ? f.lines.length > 0 ? U(f) : f : { ...f, lines: f.lines.concat([w]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = a.structs.map((c) => ((d) => {
    const u = ue(d, Ne);
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
}, Rt = () => ({
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
} : e, z = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Ne = {
  param: (e, t) => {
    const a = j(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? v(e, L, t) : e.currentCommand && !(L in e.currentCommand) ? { ...e, currentCommand: {
    ...X(e.currentCommand),
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
        ...X(e.currentCommand),
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
}, Ft = (e) => Bt(((t) => jt(t, Ne))(e)), Bt = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: Et(e.commands),
  params: Se(e.params)
}), Se = (e) => e.reduce((t, a) => ({ [a.name]: Nt(a), ...t }), {}), Et = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: Se(a.args) };
  return { [a.command]: r, ...t };
}, {}), js = (e) => Ft(e), Rs = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [o, m]) => {
    const c = wt(m);
    return { ...r, [o]: c };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e), Vt = (e = {}) => ({
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
}), Lt = (e = {}) => [n(e.cursor), n(e.ok), n(e.cancel), n(e.buzzer), n(e.equip), n(e.save), n(e.load), n(e.battleStart), n(e.escape), n(e.enemyAttack), n(e.enemyDamage), n(e.enemyCollapse), n(e.bossCollapes1), n(e.bossCollapes2), n(e.actorDamage), n(e.actorCollapse), n(e.playRecovery), n(e.playMiss), n(e.playEvasion), n(e.playMagicEvasion), n(e.playReflection), n(e.shop), n(e.useItem), n(e.useSkill)], Fs = (e) => ({
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
}), Bs = (e) => e.menuCommands[0], Es = (e) => e.menuCommands[1], Vs = (e) => e.menuCommands[2], Ls = (e) => e.menuCommands[3], zs = (e) => e.menuCommands[4], Os = (e) => e.menuCommands[5], Ws = (e) => e.itemCategories[0], Hs = (e) => e.itemCategories[1], Xs = (e) => e.itemCategories[2], Ys = (e) => e.itemCategories[3], zt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], _s = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Ot = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], Gs = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), Wt = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
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
}), b = { type: "boolean" }, Xt = {
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
}, Us = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), Yt = (e) => ({
  armorTypes: N(e.armorTypes),
  elements: N(e.elements),
  equipTypes: N(e.equipTypes),
  weaponTypes: N(e.weaponTypes),
  skillTypes: N(e.skillTypes),
  variables: N(e.variables),
  switches: N(e.switches)
}), N = (e) => e ? [...e] : [], Ks = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), Zs = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), O = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: n(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), _t = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), $s = { title: "オプション", options: {
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
} }, Js = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Qs = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, en = { title: "コマンド", options: {
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
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, Gt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, Ut = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, Kt = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, Zt = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, $t = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, S = { type: "array", items: { type: "string" } }, Jt = {
  additionalProperties: !1,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: S,
    skillTypes: S,
    elements: S,
    variables: S,
    equipTypes: S,
    switches: S,
    armorTypes: S
  }
}, p = { type: "string" }, ye = { type: "string", nullable: !0 }, i = { type: "string" }, Qt = {
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
}, ea = {
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
}, ta = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
} }, aa = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), E = new ge({ strict: !0 }), ra = ((e) => {
  const t = aa(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([ta, Gt, Ut, Wt, Xt, Kt, Ce, $t, Jt, Qt, Zt, ea]), ia = E.compile(ra), tn = (e) => ia(e), sa = E.compile(qe);
E.compile(Pe);
const na = E.compile(Ce), an = (e) => {
  var a, r, o, m, c, d, u, I, f, D, w, q, K, Z, $, J, Q, ee, te, ae, re, ie;
  const t = ma(e.size);
  return {
    ...Ht(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: Lt(e.sounds),
    editor: _t(e.editing),
    advanced: Vt(e.advanced),
    title1Name: ((o = e.images) == null ? void 0 : o.title1Name) ?? "",
    title2Name: ((m = e.images) == null ? void 0 : m.title2Name) ?? "",
    ...Yt(e.dataNames ?? {}),
    magicSkills: Y([]),
    airship: O((c = e.vehicles) == null ? void 0 : c.airship),
    boat: O((d = e.vehicles) == null ? void 0 : d.boat),
    ship: O((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: n((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: n((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: n((D = e.bgm) == null ? void 0 : D.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((w = e.battleTest) == null ? void 0 : w.battleback1Name) ?? "",
    battleback2Name: ((q = e.battleTest) == null ? void 0 : q.battleback2Name) ?? "",
    testTroopId: ((K = e.battleTest) == null ? void 0 : K.testTroopId) ?? 0,
    testBattlers: pa((Z = e.battleTest) == null ? void 0 : Z.testBattlers, ca),
    battleBgm: n(($ = e.bgm) == null ? void 0 : $.battleBgm),
    victoryMe: n((J = e.me) == null ? void 0 : J.victoryMe),
    editMapId: ((Q = e.editorTemporary) == null ? void 0 : Q.editMapId) ?? 0,
    battlerName: ((ee = e.editorTemporary) == null ? void 0 : ee.battlerName) ?? "",
    locale: "",
    startMapId: ((te = e.gameInit) == null ? void 0 : te.startMapId) ?? 0,
    startX: ((ae = e.gameInit) == null ? void 0 : ae.startX) ?? 0,
    startY: ((re = e.gameInit) == null ? void 0 : re.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: oa(e.terms ?? {}),
    itemCategories: zt(e.itemCategories),
    partyMembersArray: Y((ie = e.gameInit) == null ? void 0 : ie.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Ot(e.menuComamnds)
  };
}, oa = (e) => ({
  basic: et(e.basic ?? {}),
  commands: Qe(e.commands ?? {}),
  params: Je(e.params ?? {}),
  messages: $e(e.messages ?? {})
}), Y = (e) => e ? [...e] : [], ma = (e) => ((t) => na(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, pa = (e, t) => e ? e.map(t) : [], ca = (e) => ((t) => sa(t))(e) ? { actorId: e.actorId, equips: Y(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
};
export {
  _i as $,
  xi as A,
  Ti as B,
  ki as C,
  wi as D,
  Ni as E,
  Si as F,
  Pi as G,
  Ci as H,
  qi as I,
  Mi as J,
  Di as K,
  Ai as L,
  ji as M,
  Ri as N,
  ft as O,
  vt as P,
  Fi as Q,
  Bi as R,
  Ei as S,
  Vi as T,
  Li as U,
  zi as V,
  Oi as W,
  Wi as X,
  Hi as Y,
  Xi as Z,
  Yi as _,
  ri as a,
  Aa as a$,
  Gi as a0,
  Ui as a1,
  Ki as a2,
  xt as a3,
  Zi as a4,
  $i as a5,
  Ji as a6,
  Qi as a7,
  es as a8,
  ts as a9,
  Cs as aA,
  qs as aB,
  Ms as aC,
  Ds as aD,
  As as aE,
  js as aF,
  Rs as aG,
  ai as aH,
  _ as aI,
  ga as aJ,
  ba as aK,
  Ia as aL,
  fa as aM,
  va as aN,
  ha as aO,
  xa as aP,
  Ta as aQ,
  tt as aR,
  ka as aS,
  wa as aT,
  Na as aU,
  Sa as aV,
  Pa as aW,
  Ca as aX,
  qa as aY,
  Ma as aZ,
  Da as a_,
  as as aa,
  rs as ab,
  is as ac,
  ss as ad,
  ns as ae,
  os as af,
  ms as ag,
  ps as ah,
  cs as ai,
  ls as aj,
  ds as ak,
  us as al,
  ys as am,
  gs as an,
  bs as ao,
  Is as ap,
  fs as aq,
  vs as ar,
  hs as as,
  xs as at,
  Ts as au,
  ks as av,
  ws as aw,
  Ns as ax,
  Ss as ay,
  Ps as az,
  ii as b,
  Vr as b$,
  ja as b0,
  Ra as b1,
  Fa as b2,
  Ba as b3,
  Ea as b4,
  Va as b5,
  La as b6,
  za as b7,
  Oa as b8,
  Wa as b9,
  gr as bA,
  br as bB,
  Ir as bC,
  fr as bD,
  vr as bE,
  hr as bF,
  xr as bG,
  Tr as bH,
  nt as bI,
  ot as bJ,
  G as bK,
  kr as bL,
  wr as bM,
  Nr as bN,
  Sr as bO,
  mt as bP,
  Pr as bQ,
  Cr as bR,
  qr as bS,
  Mr as bT,
  pt as bU,
  Dr as bV,
  Ar as bW,
  jr as bX,
  Rr as bY,
  Fr as bZ,
  Br as b_,
  Ha as ba,
  Xa as bb,
  Ya as bc,
  _a as bd,
  Ga as be,
  Ua as bf,
  Ka as bg,
  Za as bh,
  $a as bi,
  Ja as bj,
  Qa as bk,
  er as bl,
  tr as bm,
  ar as bn,
  rr as bo,
  ir as bp,
  sr as bq,
  nr as br,
  or as bs,
  mr as bt,
  pr as bu,
  cr as bv,
  lr as bw,
  dr as bx,
  ur as by,
  yr as bz,
  si as c,
  lt as c0,
  Er as c1,
  Lr as c2,
  zr as c3,
  Or as c4,
  Wr as c5,
  Hr as c6,
  Xr as c7,
  Yr as c8,
  _r as c9,
  _s as cA,
  Ot as cB,
  Gs as cC,
  Ht as cD,
  Us as cE,
  Yt as cF,
  Ks as cG,
  Zs as cH,
  O as cI,
  _t as cJ,
  $s as cK,
  Js as cL,
  Qs as cM,
  en as cN,
  Gr as ca,
  Ur as cb,
  Kr as cc,
  Zr as cd,
  $r as ce,
  Jr as cf,
  Qr as cg,
  ei as ch,
  ti as ci,
  dt as cj,
  tn as ck,
  an as cl,
  Vt as cm,
  Lt as cn,
  Fs as co,
  Bs as cp,
  Es as cq,
  Vs as cr,
  Ls as cs,
  zs as ct,
  Os as cu,
  Ws as cv,
  Hs as cw,
  Xs as cx,
  Ys as cy,
  zt as cz,
  ni as d,
  k as e,
  oi as f,
  mi as g,
  pi as h,
  ci as i,
  li as j,
  di as k,
  ui as l,
  ya as m,
  yi as n,
  gi as o,
  bi as p,
  yt as q,
  Ii as r,
  Ie as s,
  ut as t,
  fi as u,
  gt as v,
  bt as w,
  vi as x,
  It as y,
  hi as z
};
