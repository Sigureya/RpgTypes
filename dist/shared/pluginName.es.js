import Se from "ajv";
import { c as Ye, a as Xe, m } from "./make.es.js";
import { aF as Ge, aJ as _e, aK as Ue, ax as Pe, ay as qe, az as Ce, ae as Ke, ai as Ze, ak as $e, al as Je, F as Qe, G as ea, P as aa, p as ta, u as ra, B as V, cY as A, cZ as j, c_ as P, c$ as R, z as L, A as z, C as ia, j as sa, aZ as na, a_ as oa, au as ma, av as pa, v as q, cX as ca, cQ as da, cU as la, cS as ua } from "./make.es2.js";
const Rt = ({ actorId: e = 1, faceIndex: a = 0, faceName: t = "", characterIndex: r = 0, characterName: s = "", battlerName: n = "" } = {}, c = 0) => ({
  code: 322,
  indent: c,
  parameters: [e, s, r, t, a, n]
}), re = (e, a) => `\\${e}[${a}]`, Ft = (e, a) => a.map((t, r) => ({ text: t, controlChar: re(e, r) })), Bt = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((a) => ({
  char: a[1],
  id: parseInt(a[2], 10)
})), Et = (e) => e.map((a) => ({ text: a.name, controlChar: re("N", a.id) })), Vt = (e) => e.variables.map((a, t) => ({ text: a || "", controlChar: re("V", t) })).filter((a) => a.text !== ""), Lt = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), zt = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), Ot = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Wt = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), ya = (e = {}) => ({
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
}), Ht = 0, Yt = 1, Xt = 2, Gt = 3, _t = 4, Ut = 5, Kt = 6, Zt = 7, $t = 8, Jt = 9, Qt = 10, er = 11, ar = 12, tr = 13, rr = 14, ir = 15, sr = 16, nr = 17, or = 18, mr = 19, pr = 20, cr = 21, dr = 22, lr = 23, ur = 24, yr = 25, gr = 26, br = 27, Ir = 28, fr = 29, vr = 30, hr = 31, xr = 32, Tr = 33, wr = 34, kr = 35, Nr = 36, Sr = 37, Pr = 38, qr = 39, Cr = 40, Dr = 41, Mr = 42, Ar = 43, jr = 44, Rr = 45, Fr = ({ id: e = 1, name: a = "", pages: t = [], note: r = "", x: s = 0, y: n = 0 } = {}) => ({
  id: e,
  name: a,
  pages: t,
  note: r,
  x: s,
  y: n
}), ga = ({ characterIndex: e = 0, characterName: a = "", direction: t = 2, pattern: r = 0, tileId: s = 0 } = {}) => ({
  characterIndex: e,
  characterName: a,
  direction: t,
  pattern: r,
  tileId: s
}), Br = ({ list: e = [], conditions: a = ya(), image: t = ga(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: a,
  list: e,
  directionFix: s,
  image: t,
  moveFrequency: r,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Er = (e = {}) => ({
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
}), Vr = (e = { id: 0 }) => {
  return { name: e.name ?? (a = e.id, a.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var a;
}, ba = {
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
}, De = new Se({
  strict: !0
}), Ia = De.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), fa = De.compile(ba), Lr = (e) => Ia(e), zr = (e) => fa(e), va = {
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
}, ie = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Or = (e = {}) => ({
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
}), Wr = (e) => ({
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
}), Hr = (e = {}) => ({
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
}), Yr = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), xa = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), Xr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Gr = (e = {}) => {
  var a;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((a = e.dropItems) == null ? void 0 : a.map(() => xa())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, _r = (e = {}) => ({
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
}), d = "{name}", C = "{name} * {value}%", be = "{name} + {value}%", Ie = "{value}", Ta = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: C, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: be, options: {
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
  specialParam: { title: "特殊能力値", format: C, options: {
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
  elementRate: { title: "属性有効度", format: C },
  debuffRate: { title: "弱体有効度", format: C },
  stateRate: { title: "ステート有効度", format: C },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: be },
  attackSpeed: { title: "攻撃速度補正", format: Ie },
  attackTimes: {
    title: "攻撃追加回数",
    format: Ie
  },
  actionPlus: { title: "行動追加", format: C },
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
} }, wa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Ur = (e, a, t) => {
  const r = Ye(wa);
  return Xe(a, t, r, e.pattern, (s) => s.dataId);
}, Kr = (e = {}) => ({
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
  damage: ie(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Zr = {
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
}, $r = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Jr = 0, Qr = 1, ei = 2, fe = "{name} {value1}%", K = "{value1}% + {value2}", ve = "{name} {value1}ターン", E = "{name}", ka = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: ve },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ve },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: K },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: E },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: K
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: K },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: E
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: E },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: fe },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: E
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: fe },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: E }
} }, ai = 0, ti = (e, a, t) => {
  const r = t.find((n) => n.id === a.dataId), s = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", a.value1.toString()).replaceAll("{value2}", a.value2.toString()).replaceAll("{name}", s);
}, ri = { title: "アイテム", options: { consumable: "消耗品" } }, ii = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, si = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, ni = (e = {}) => ({
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
  damage: ie(e.damage ?? {}),
  effects: [],
  price: 0
}), oi = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: ie(e.damage ?? {}),
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
}), mi = "data", pi = "actor", ci = "map", di = "enemy", li = "state", ui = "skill", yi = "item", gi = "weapon", bi = "armor", Ii = "class", fi = "common_event", vi = "troop", Na = {
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
}, hi = () => ({ rpg: { damage: ha, data: va, traits: Ta, itemEffect: ka }, global: Na }), xi = (e, a = 0) => ({ code: Ge, parameters: [e.actorId, e.name], indent: a }), Ti = (e, a = 0) => ({
  code: _e,
  parameters: [e.actorId, e.nickname],
  indent: a
}), wi = (e, a = 0) => ({ code: Ue, parameters: [e.actorId, e.profile], indent: a }), D = { direct: 0, variable: 1 }, ki = (e, a = 0) => ({
  code: Pe,
  indent: a,
  parameters: [...F[e.targetType](e, 0), e.allowDeath]
}), Ni = (e, a = 0) => ({ code: Pe, indent: a, parameters: [...F[e.targetType](e, 1), e.allowDeath] }), Si = (e, a = 0) => ({
  code: Ce,
  indent: a,
  parameters: F[e.targetType](e, 0)
}), Pi = (e, a = 0) => ({ code: Ce, indent: a, parameters: F[e.targetType](e, 1) }), qi = (e, a = 0) => ({ code: qe, indent: a, parameters: F[e.targetType](e, 0) }), Ci = (e, a = 0) => ({
  code: qe,
  indent: a,
  parameters: F[e.targetType](e, 1)
}), F = {
  direct: (e, a) => [D.direct, e.target, a, D[e.operand.type], e.operand.value],
  variable: (e, a) => [D.variable, e.target, a, D[e.operand.type], e.operand.value],
  each: (e, a) => [D.direct, -1, a, D[e.operand.type], e.operand.value]
}, Di = (e, a) => w(e, m({
  name: a
})), w = (e, a, t = 0) => ({
  code: e,
  parameters: [m(a)],
  indent: t
}), Mi = (e, a = 0) => w(Ke, e, a), Ai = (e, a = 0) => w(Ze, e, a), ji = (e, a = 0) => w($e, e, a), Ri = (e, a = 0) => w(Je, e, a), Fi = (e, a = 0) => w(Qe, e, a), Bi = (e, a = 0) => w(ea, e, a), Ei = (e, a = 0) => w(aa, e, a), Sa = {
  plus: 0,
  minus: 1
}, Vi = ({ operation: e, time: a }) => ({ code: 124, indent: 0, parameters: [Sa[e ?? "plus"] ?? 0, a ?? 0] });
function Li(e, a = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: a };
}
const zi = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), Oi = (e, a = 0) => ({ code: 333, indent: a, parameters: [e.enemyIndex, 0, e.stateId] }), Wi = (e, a = 0) => ({
  code: 333,
  indent: a,
  parameters: [e.enemyIndex, 1, e.stateId]
}), Hi = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 0, e.stateId] }), Yi = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 1, e.stateId] }), Xi = (e, a = 0) => ({
  code: ta,
  indent: a,
  parameters: Pa(e ?? {})
}), Gi = (e) => ({ eventId: e[0] }), Pa = (e) => [e.eventId ?? 0], _i = (e) => ({ min: e[0], max: e[1], value: e[2] }), qa = (e) => [e.min, e.max, e.value], Ui = (e, a = 0) => ({
  code: ra,
  indent: a,
  parameters: qa(e)
}), Ki = (e, a = 0) => ({ code: 103, parameters: [e.variableId, e.maxDigits], indent: a }), Zi = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], $i = (e) => ({
  variableId: e[0],
  maxDigits: e[1]
}), Ji = (e, a = 0) => ({ code: V, parameters: [e.operation, e.armorId, e.value, e.operand, e.includesEquip], indent: a }), Qi = (e) => ({
  operation: e[0],
  armorId: e[1],
  value: e[2],
  operand: e[3],
  includesEquip: e[4]
}), es = (e, a = 0) => ({ code: V, parameters: [A, e.armorId, e.value, j, !1], indent: a }), as = (e, a = 0) => ({ code: V, parameters: [A, e.armorId, e.variableId, P, !1], indent: a }), ts = (e, a = 0) => ({
  code: V,
  parameters: [R, e.armorId, e.value, j, !1],
  indent: a
}), rs = (e, a = 0) => ({ code: V, parameters: [R, e.armorId, e.variableId, P, !1], indent: a }), is = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3]
}), ss = (e, a = 0) => ({ code: L, indent: a, parameters: [e.operation, e.itemId, e.value, e.operand] }), ns = (e, a = 0) => ({ code: L, indent: a, parameters: [A, e.itemId, e.value, j] }), os = (e, a = 0) => ({
  code: L,
  indent: a,
  parameters: [A, e.itemId, e.variableId, P]
}), ms = (e, a = 0) => ({ code: L, indent: a, parameters: [R, e.itemId, e.value, j] }), ps = (e, a = 0) => ({
  code: L,
  indent: a,
  parameters: [R, e.itemId, e.variableId, P]
}), cs = (e) => e.parameters[3] === P, ds = (e) => ({ operation: e[0], weaponId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), ls = (e, a = 0) => ({
  code: z,
  indent: a,
  parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip]
}), us = (e, a = 0) => ({ code: z, parameters: [A, e.weaponId, e.value, j, !1], indent: a }), ys = (e, a = 0) => ({
  code: z,
  parameters: [A, e.weaponId, e.variableId, P, !1],
  indent: a
}), gs = (e, a = 0) => ({ code: z, parameters: [R, e.weaponId, e.value, j, !1], indent: a }), bs = (e, a = 0) => ({
  code: z,
  parameters: [R, e.weaponId, e.variableId, P, !1],
  indent: a
}), Is = (e, a = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: a }), fs = (e) => ({ variableId: e[0], itemType: e[1] }), vs = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), hs = (e = 0) => ({ code: 135, parameters: [0], indent: e }), xs = (e = 0) => ({ code: 134, parameters: [1], indent: e }), Ts = (e = 0) => ({
  code: 134,
  parameters: [0],
  indent: e
}), ws = (e = 0) => ({ code: 137, parameters: [1], indent: e }), ks = (e = 0) => ({ code: 137, parameters: [0], indent: e }), Me = (e) => [e], Ns = (e) => ({ comment: e[0] }), Ca = (e, a = 0) => ({
  code: ia,
  indent: a,
  parameters: Me(e)
}), Da = (e, a = 0) => ({ code: sa, indent: a, parameters: Me(e) }), Ss = (e, a = 0) => e.map((t, r) => r === 0 ? Ca(t, a) : Da(t, a)), Ps = (e, a = 0) => ({
  code: 402,
  indent: a,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), qs = (e) => ({ index: e[0], name: e[1] }), Cs = (e) => [e.index ?? 0, e.name ?? ""], Ds = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Ms = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], As = (e, a = 0) => ({
  code: 102,
  indent: a,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), js = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Rs = (e, a = 0) => ({ code: 261, indent: a, parameters: [e.filename] }), Fs = (e) => ({
  filename: e[0]
}), Bs = ({ args: e = {}, commandName: a, commandTitle: t = "", pluginName: r }, s = 0) => ({ code: 357, indent: s, parameters: [r, a, t, { ...e }] }), Es = (e) => ({
  pluginName: e[0],
  commandName: e[1],
  commandTitle: e[2],
  args: { ...e[3] }
}), Vs = (e, a = 0) => ({ code: 129, parameters: [0, e.actorId], indent: a }), Ls = (e, a = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: a
}), zs = ({ pictureId: e = 0, origin: a = 0, name: t = "", x: r = 0, y: s = 0, scaleX: n = 100, scaleY: c = 100, opacity: l = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, t, a, r, s, n, c, l, u]
}), Os = ({ pictureId: e, origin: a, x: t, y: r, scaleX: s, scaleY: n, opacity: c, blendMode: l, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, a, t, r, s, n, c, l, u, I] }), Ma = (e, a = 0) => ({
  code: na,
  indent: a,
  parameters: [e]
}), Aa = (e, a = 0) => ({ code: oa, indent: a, parameters: [e] }), Ws = (e, a = 0) => e.map((t, r) => r === 0 ? Ma(t, a) : Aa(t, a)), Hs = 1, Ys = 0, W = {
  item: 0,
  weapon: 1,
  armors: 2
}, Xs = ({ goods: e, buyOnly: a = !1 }, t = 0) => e.map((r, s) => {
  const n = ((c) => c.customPrice !== void 0 && c.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? {
    code: ma,
    indent: t,
    parameters: [W[r.itemType] ?? W.item, r.id, n, r.customPrice ?? 0, a]
  } : { code: pa, indent: t, parameters: [W[r.itemType] ?? W.item, r.id, n, r.customPrice ?? 0] };
}), Gs = 0, _s = 1, Us = 2, Ks = 3, Zs = 4, $s = 0, Js = 1, Qs = 2, en = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 0, a.value], an = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 1, a.variableId], tn = (e, a) => {
  switch (a[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return a[6] >= 2 && a[6] <= 9 ? e.param(a[6] - 2) : 0;
}, rn = (e, a) => {
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
}, ja = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 3, a.index, a.param], sn = (e, a, t = {}) => ({ code: q, indent: t.indent ?? 0, parameters: ja(e, a, t.operation ?? 0) }), nn = (e, a) => ({
  code: q,
  indent: 0,
  parameters: Ra(e, a, 0)
}), Ra = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 2, a.armorId], Fa = { HP: 0, MP: 1, MHP: 2, MMP: 3, ATK: 4, DEF: 5, MAT: 6, MDF: 7, AGI: 8, LUK: 9, TP: 10 }, on = (e, a, t = {}) => ({
  code: q,
  indent: t.indent ?? 0,
  parameters: Ba(e, a, t.operation ?? 0)
}), Ba = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 4, a.index, Fa[a.param]], mn = (e, a, t = {}) => ({
  code: q,
  indent: t.indent ?? 0,
  parameters: Ea(e, a, t.operation ?? 0)
}), Ea = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 0, a.itemId], pn = (e, a, t = {}) => ({
  code: q,
  indent: t.indent ?? 0,
  parameters: Va(e, a, t.operation ?? 0)
}), Va = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 2, a.min, a.max], La = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 4, a.code], cn = (e, a, t = {}) => ({
  code: q,
  indent: t.indent ?? 0,
  parameters: La(e, a, t.operation ?? 0)
}), dn = (e, a) => ({ code: q, indent: 0, parameters: za(e, a, 0) }), za = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 1, a.weaponId], Oa = (e) => [...e], ln = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Oa(e.parameters)
}), Wa = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", un = (e) => e.parameters.every(Wa), yn = "bgm", gn = "se", bn = "me", In = "bgs", fn = "battlebacks1", vn = "battlebacks2", hn = "characters", xn = "enemies", Tn = "faces", wn = "parallaxes", kn = "pictures", Nn = "sv_actors", Sn = "sv_enemies", Pn = "system", qn = "tilesets", Cn = "titles1", Dn = "titles2", Mn = "System.json", An = "Actors.json", jn = "Classes.json", Rn = "Skills.json", Fn = "Items.json", Bn = "Weapons.json", En = "Armors.json", Vn = "Enemies.json", Ln = "Troops.json", zn = "States.json", On = "Animations.json", Wn = "Tilesets.json", Hn = "CommonEvents.json", Yn = "MapInfos.json", Xn = "data", Gn = "img", _n = "audio", Un = "js", Ae = (e, a) => ({
  type: "array",
  items: a,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, he = (e) => e === void 0 || e === 0, Ha = (e) => Ae(e, { type: "string" }), Ya = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((t) => ({
        type: "string",
        ...h(t),
        ...x(t.default)
      }))(e);
    case "file":
    case "combo":
      return ((t) => ({ type: "string", ...x(t.default), ...h(t) }))(e);
    case "select":
      return ((t) => ({ type: "string", ...x(t.default), ...h(t), ...t.options ? {
        enum: t.options.map((r) => r.value)
      } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Ha(e);
    case "number[]":
      return ((t) => ({ type: "array", items: {
        type: he(t.decimals) ? "integer" : "number"
      }, ...x(t.default), ...h(t) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((t) => Ae(t, { type: "integer" }))(e);
    case "number":
      return ((t) => ({ type: he(t.decimals) ? "integer" : "number", ...x(t.default), ...h(t) }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((t) => ({ type: "integer", ...x(t.default), ...h(t) }))(e);
    case "boolean":
      return ((t) => ({ type: "boolean", ...x(t.default), ...h(t) }))(e);
    case "struct":
      return { $ref: `#/definitions/${(a = e).struct}`, ...h(a) };
    default:
      return {};
  }
  var a;
}, je = (e, a) => Object.entries(a).reduce((t, [r, s]) => {
  if (r in e) {
    const n = e[r];
    if (typeof n == "string") return { ...t, [r]: s(n) };
  }
  return t;
}, {}), T = (e, a, t, r) => ({
  default: a,
  ...je(t, r),
  kind: e
}), X = (e, a, t) => ({ default: [], ...je(a, t), kind: e }), Re = "help", ee = "kind", Z = "text", xe = "struct", Fe = (e) => {
  const a = JSON.parse(e);
  return Array.isArray(a) ? a.map(G) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, G(r)])) : a;
}, G = (e) => {
  if (typeof e != "string") return e;
  try {
    const a = JSON.parse(e);
    return Array.isArray(a) ? a.map(G) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, G(r)])) : a;
  } catch {
    return e;
  }
}, Xa = (e) => {
  if (ee in e.attr) {
    const a = Ga[e.attr.kind];
    if (a) return a(e);
  }
  return T("any", "", e.attr, _);
}, o = (e) => e, Be = (e) => e.replace("[", "").replace("]", "").split(",").map((a) => parseFloat(a.replaceAll('"', "").trim())).filter((a) => !isNaN(a)), _ = {
  default: o,
  text: o,
  desc: o,
  parent: o
}, Te = (e) => T("string", "", e.attr, _), we = (e) => {
  const a = { default: (t) => Fe(t), text: o, desc: o, parent: o };
  return X("string[]", e.attr, a);
}, y = (e, a) => {
  const t = {
    default: Be,
    text: o,
    desc: o,
    parent: o
  };
  return X(a, e.attr, t);
}, g = (e, a) => {
  const t = { default: (r) => parseInt(r, 10), text: o, desc: o, parent: o };
  return T(a, 0, e.attr, t);
}, Ga = {
  number: (e) => ((a) => {
    const t = {
      default: (r) => parseFloat(r),
      text: o,
      desc: o,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: o
    };
    return T("number", 0, a.attr, t);
  })(e),
  "number[]": (e) => {
    const a = { default: Be, text: o, desc: o, decimals: (t) => parseInt(t, 10), min: (t) => parseFloat(t), max: (t) => parseFloat(t), parent: o };
    return X("number[]", e.attr, a);
  },
  string: Te,
  "string[]": we,
  multiline_string: Te,
  "multiline_string[]": we,
  combo: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => r.option)) ?? [];
    return { ...T("combo", "", e.attr, _), options: a };
  },
  select: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...T("select", "", e.attr, _), options: a };
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
    const a = {
      default: (t) => t === "true",
      text: o,
      desc: o,
      on: o,
      off: o,
      parent: o
    };
    return T("boolean", !0, e.attr, a);
  },
  file: (e) => {
    const a = { default: o, text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...T("file", "", e.attr, a) };
  },
  "file[]": (e) => {
    const a = { default: (t) => Fe(t), text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...X("file[]", e.attr, a) };
  }
}, Ee = "BODY", Ve = "STRUCT", H = "NONE", _a = (e, a) => {
  const t = e.lines.length > 0 ? se(e) : e, r = a[1] || void 0;
  return { ...t, structName: r, blockType: r ? Ve : "INVALID", locale: a[2], lines: [] };
}, Ua = (e) => ({
  ...e.lines.length > 0 ? se(e) : e,
  blockType: Ee,
  structName: void 0,
  locale: void 0,
  lines: []
}), se = (e) => e.blockType === Ee ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: H } : e.structName && e.blockType === Ve ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: H,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: H,
  structName: void 0,
  lines: []
}, Ka = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, ae = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), Y = (e) => {
  const a = Za(e), t = Ja(a);
  return $a(t);
}, Za = (e) => {
  if (e.currentParam && e.currentOption) {
    const a = e.currentParam.attr.kind;
    if (a === "select" || a === "combo") return { ...e, currentParam: { ...e.currentParam, options: Ka(e.currentOption).items } };
  }
  return e;
}, $a = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, Ja = (e) => {
  if (!e.currentCommand) return e;
  const a = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, t = { ...ae(e.currentCommand), command: e.currentCommand.command, args: a };
  return {
    ...e,
    commands: [...e.commands, t],
    currentCommand: null,
    currentParam: null,
    currentContext: null,
    currentOption: null
  };
}, ke = (e, a) => {
  const t = e.lines.reduce((r, s) => {
    const n = s.trim().replace(/^\*\s?/, "");
    if (!n.startsWith("@")) return r.currentContext === Re ? { ...r, helpLines: r.helpLines.concat(n) } : r;
    const [c, ...l] = n.slice(1).split(" "), u = l.join(" ").trim(), I = a[c];
    return I ? I(r, u) : r;
  }, et());
  return Y(t);
}, Qa = (e, a) => {
  const t = ((c) => {
    const l = c.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: H
    }, I = l.reduce((f, O) => {
      const k = O.trim(), B = k.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return B ? _a(f, B) : k === "/*:" ? Ua(f) : k === "*/" ? f.lines.length > 0 ? se(f) : f : { ...f, lines: f.lines.concat([k]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = t.structs.map((c) => ((l) => {
    const u = ke(l, Le);
    return { name: l.struct, params: u.params };
  })(c)), s = ((c) => {
    if (c.bodies.length !== 0) return c.bodies[0];
  })(t);
  if (!s) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const n = ke(s, a);
  return { params: n.params, commands: n.commands, meta: n.meta, helpLines: n.helpLines, structs: r };
}, et = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), v = (e, a, t) => e.currentParam && !(a in e.currentParam.attr) ? {
  ...e,
  currentParam: { ...e.currentParam, attr: { ...e.currentParam.attr, [a]: t } }
} : e, $ = (e, a, t) => ({ ...e, meta: { [a]: t, ...e.meta } }), Le = {
  param: (e, a) => {
    const t = Y(e);
    return t.params.some((r) => r.name === a) ? t : { ...t, currentContext: "param", currentParam: { name: a, attr: {} } };
  },
  text: (e, a) => e.currentParam ? v(e, Z, a) : e.currentCommand && !(Z in e.currentCommand) ? { ...e, currentCommand: {
    ...ae(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [Z]: a
  } } : e,
  desc: (e, a) => e.currentParam ? v(e, "desc", a) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: a } } : e,
  command: (e, a) => {
    const t = Y(e);
    return t.commands.some((r) => r.command === a) ? t : { ...t, currentCommand: { command: a, args: [] }, currentParam: null };
  },
  arg: (e, a) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const t = {
        ...ae(e.currentCommand),
        command: e.currentCommand.command,
        args: e.currentCommand.args.concat(e.currentParam)
      };
      return {
        ...e,
        commands: e.commands,
        currentCommand: t,
        currentContext: "arg",
        currentParam: { name: a, attr: {} }
      };
    }
    return { ...e, currentParam: { name: a, attr: {} } };
  },
  help: (e) => ({ ...Y(e), currentContext: Re }),
  option: (e, a) => {
    if (!e.currentParam) return e;
    const t = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }), currentOption: s } : { items: r.items, currentOption: s })(e.currentOption ?? {
      items: []
    }, a);
    return { ...e, currentOption: t };
  },
  value: (e, a) => {
    if (!e.currentOption) return e;
    const t = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: s }) } : {
      items: r.items
    })(e.currentOption, a);
    return { ...e, currentOption: t };
  },
  type: (e, a) => {
    if (((t) => t.endsWith(">") && t.startsWith("struct<"))(a)) {
      const t = a.slice(7, -1), r = v(e, xe, t);
      return v(r, ee, xe);
    }
    return e.currentParam ? v(e, ee, a) : e;
  },
  default: (e, a) => v(e, "default", a),
  on: (e, a) => v(e, "on", a),
  off: (e, a) => v(e, "off", a),
  min: (e, a) => v(e, "min", a),
  max: (e, a) => v(e, "max", a),
  base: (e, a) => {
    return { ...e, dependencies: (t = e.dependencies, r = a, { orderAfter: t.orderAfter, orderBefore: t.orderBefore, base: t.base.concat(r) }) };
    var t, r;
  },
  orderAfter: (e, a) => {
    return { ...e, dependencies: (t = e.dependencies, r = a, { base: t.base, orderBefore: t.orderBefore, orderAfter: t.orderAfter.concat(r) }) };
    var t, r;
  },
  orderBefore: (e, a) => {
    return {
      ...e,
      dependencies: (t = e.dependencies, r = a, { base: t.base, orderAfter: t.orderAfter, orderBefore: t.orderBefore.concat(r) })
    };
    var t, r;
  },
  author: (e, a) => $(e, "author", a),
  plugindesc: (e, a) => $(e, "plugindesc", a),
  url: (e, a) => $(e, "url", a)
}, at = (e) => tt(((a) => Qa(a, Le))(e)), tt = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: rt(e.commands),
  params: ze(e.params)
}), ze = (e) => e.reduce((a, t) => ({ [t.name]: Xa(t), ...a }), {}), rt = (e) => e.reduce((a, t) => {
  const r = { desc: t.desc, text: t.text, args: ze(t.args) };
  return { [t.command]: r, ...a };
}, {}), Kn = (e) => at(e), Zn = (e) => ((a) => {
  const t = Object.entries(a).reduce((r, [s, n]) => {
    const c = Ya(n);
    return { ...r, [s]: c };
  }, {});
  return {
    type: "object",
    properties: t,
    required: Object.keys(t),
    additionalProperties: !1
  };
})(e), it = (e = {}) => ({
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
}), st = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], $n = (e) => ({
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
}), Jn = (e) => e.menuCommands[0], Qn = (e) => e.menuCommands[1], eo = (e) => e.menuCommands[2], ao = (e) => e.menuCommands[3], to = (e) => e.menuCommands[4], ro = (e) => e.menuCommands[5], io = (e) => e.itemCategories[0], so = (e) => e.itemCategories[1], no = (e) => e.itemCategories[2], oo = (e) => e.itemCategories[3], nt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], mo = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), ot = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], po = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), mt = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, pt = (e = {}) => ({
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
}), b = { type: "boolean" }, ct = {
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
}, co = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), dt = (e) => ({
  armorTypes: N(e.armorTypes),
  elements: N(e.elements),
  equipTypes: N(e.equipTypes),
  weaponTypes: N(e.weaponTypes),
  skillTypes: N(e.skillTypes),
  variables: N(e.variables),
  switches: N(e.switches)
}), N = (e) => e ? [...e] : [], lo = (e) => e.terms.params.map((a, t) => ({
  name: a,
  id: t
})), uo = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), J = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), lt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), yo = { title: "オプション", options: {
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
} }, go = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, bo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Io = {
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
}, Oe = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, We = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, He = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, M = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, ut = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: M, victoryMe: M, gameoverMe: M, titleBgm: M, defeatMe: M, sounds: {
    type: "array",
    items: M,
    minItems: 24,
    maxItems: 24
  } }
}, yt = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, gt = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, bt = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, It = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, S = { type: "array", items: { type: "string" } }, ft = {
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
}, p = { type: "string" }, Ne = { type: "string", nullable: !0 }, i = { type: "string" }, vt = {
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
      items: [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, Ne, p, p, Ne, p, p],
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
}, ht = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: He },
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
}, Q = {
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
}, xt = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: Q,
  boat: Q,
  ship: Q,
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
  attackMotions: { type: "array", items: Oe }
} }, Tt = (e) => e.reduce((a, t) => ({ required: [...a.required, ...t.required], properties: { ...a.properties, ...t.properties } }), {
  required: [],
  properties: {}
}), U = new Se({ strict: !0 }), wt = ((e) => {
  const a = Tt(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(a.required)),
    properties: a.properties
  };
})([xt, ut, yt, mt, ct, gt, We, It, ft, vt, bt, ht]), kt = U.compile(wt), fo = (e) => kt(e), Nt = U.compile(He);
U.compile(Oe);
const St = U.compile(We), vo = (e) => {
  var t, r, s, n, c, l, u, I, f, O, k, B, ne, oe, me, pe, ce, de, le, ue, ye, ge;
  const a = qt(e.size);
  return {
    ...pt(e.options),
    currencyUnit: ((t = e.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: st(e.sounds),
    editor: lt(e.editing),
    advanced: it(e.advanced),
    title1Name: ((s = e.images) == null ? void 0 : s.title1Name) ?? "",
    title2Name: ((n = e.images) == null ? void 0 : n.title2Name) ?? "",
    ...dt(e.dataNames ?? {}),
    magicSkills: te([]),
    airship: J((c = e.vehicles) == null ? void 0 : c.airship),
    boat: J((l = e.vehicles) == null ? void 0 : l.boat),
    ship: J((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: m((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: m((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: m((O = e.bgm) == null ? void 0 : O.titleBgm),
    tileSize: a.tileSize,
    faceSize: a.faceSize,
    iconSize: a.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((k = e.battleTest) == null ? void 0 : k.battleback1Name) ?? "",
    battleback2Name: ((B = e.battleTest) == null ? void 0 : B.battleback2Name) ?? "",
    testTroopId: ((ne = e.battleTest) == null ? void 0 : ne.testTroopId) ?? 0,
    testBattlers: Ct((oe = e.battleTest) == null ? void 0 : oe.testBattlers, Dt),
    battleBgm: m((me = e.bgm) == null ? void 0 : me.battleBgm),
    victoryMe: m((pe = e.me) == null ? void 0 : pe.victoryMe),
    editMapId: ((ce = e.editorTemporary) == null ? void 0 : ce.editMapId) ?? 0,
    battlerName: ((de = e.editorTemporary) == null ? void 0 : de.battlerName) ?? "",
    locale: "",
    startMapId: ((le = e.gameInit) == null ? void 0 : le.startMapId) ?? 0,
    startX: ((ue = e.gameInit) == null ? void 0 : ue.startX) ?? 0,
    startY: ((ye = e.gameInit) == null ? void 0 : ye.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Pt(e.terms ?? {}),
    itemCategories: nt(e.itemCategories),
    partyMembersArray: te((ge = e.gameInit) == null ? void 0 : ge.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: ot(e.menuComamnds)
  };
}, Pt = (e) => ({
  basic: ua(e.basic ?? {}),
  commands: la(e.commands ?? {}),
  params: da(e.params ?? {}),
  messages: ca(e.messages ?? {})
}), te = (e) => e ? [...e] : [], qt = (e) => ((a) => St(a))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ct = (e, a) => e ? e.map(a) : [], Dt = (e) => ((a) => Nt(a))(e) ? { actorId: e.actorId, equips: te(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, ho = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, xo = (e) => {
  const a = e.split("/");
  return a[a.length - 1];
};
export {
  us as $,
  Wi as A,
  Xi as B,
  Gi as C,
  Pa as D,
  _i as E,
  qa as F,
  Ui as G,
  $i as H,
  Ki as I,
  Zi as J,
  fs as K,
  Is as L,
  Qi as M,
  Ji as N,
  es as O,
  as as P,
  ts as Q,
  rs as R,
  is as S,
  cs as T,
  ss as U,
  ns as V,
  os as W,
  ms as X,
  ps as Y,
  ds as Z,
  ls as _,
  xi as a,
  un as a$,
  ys as a0,
  gs as a1,
  bs as a2,
  ws as a3,
  vs as a4,
  xs as a5,
  ks as a6,
  hs as a7,
  Ts as a8,
  Me as a9,
  tn as aA,
  sn as aB,
  ja as aC,
  nn as aD,
  Ra as aE,
  on as aF,
  Ba as aG,
  mn as aH,
  Ea as aI,
  pn as aJ,
  Va as aK,
  cn as aL,
  La as aM,
  dn as aN,
  za as aO,
  Gs as aP,
  Ks as aQ,
  Us as aR,
  Zs as aS,
  _s as aT,
  Qs as aU,
  $s as aV,
  Js as aW,
  en as aX,
  an as aY,
  Oa as aZ,
  ln as a_,
  Ns as aa,
  Ca as ab,
  Da as ac,
  Ss as ad,
  Ps as ae,
  qs as af,
  Cs as ag,
  Ds as ah,
  Ms as ai,
  As as aj,
  js as ak,
  Fs as al,
  Rs as am,
  Es as an,
  Bs as ao,
  Vs as ap,
  Ls as aq,
  zs as ar,
  Os as as,
  Ma as at,
  Aa as au,
  Ws as av,
  Hs as aw,
  Ys as ax,
  Xs as ay,
  rn as az,
  Ti as b,
  ir as b$,
  yn as b0,
  gn as b1,
  bn as b2,
  In as b3,
  fn as b4,
  vn as b5,
  hn as b6,
  xn as b7,
  Tn as b8,
  wn as b9,
  Zn as bA,
  hi as bB,
  re as bC,
  Ft as bD,
  Bt as bE,
  Et as bF,
  Vt as bG,
  Lt as bH,
  zt as bI,
  Ot as bJ,
  Wt as bK,
  ya as bL,
  Ht as bM,
  Yt as bN,
  Xt as bO,
  Gt as bP,
  _t as bQ,
  Ut as bR,
  Kt as bS,
  Zt as bT,
  $t as bU,
  Jt as bV,
  Qt as bW,
  er as bX,
  ar as bY,
  tr as bZ,
  rr as b_,
  kn as ba,
  Nn as bb,
  Sn as bc,
  Pn as bd,
  qn as be,
  Cn as bf,
  Dn as bg,
  Mn as bh,
  An as bi,
  jn as bj,
  Rn as bk,
  Fn as bl,
  Bn as bm,
  En as bn,
  Vn as bo,
  Ln as bp,
  zn as bq,
  On as br,
  Wn as bs,
  Hn as bt,
  Yn as bu,
  Xn as bv,
  Gn as bw,
  _n as bx,
  Un as by,
  Kn as bz,
  wi as c,
  oi as c$,
  sr as c0,
  nr as c1,
  or as c2,
  mr as c3,
  pr as c4,
  cr as c5,
  dr as c6,
  lr as c7,
  ur as c8,
  yr as c9,
  zr as cA,
  va as cB,
  ha as cC,
  ie as cD,
  Or as cE,
  Wr as cF,
  Hr as cG,
  Yr as cH,
  xa as cI,
  Xr as cJ,
  Gr as cK,
  _r as cL,
  Ur as cM,
  Ta as cN,
  Kr as cO,
  Zr as cP,
  $r as cQ,
  Jr as cR,
  Qr as cS,
  ei as cT,
  ti as cU,
  ka as cV,
  ai as cW,
  ri as cX,
  ii as cY,
  si as cZ,
  ni as c_,
  gr as ca,
  br as cb,
  Ir as cc,
  fr as cd,
  vr as ce,
  hr as cf,
  xr as cg,
  Tr as ch,
  wr as ci,
  kr as cj,
  Nr as ck,
  Sr as cl,
  Pr as cm,
  qr as cn,
  Cr as co,
  Dr as cp,
  Mr as cq,
  Ar as cr,
  jr as cs,
  Rr as ct,
  Fr as cu,
  ga as cv,
  Br as cw,
  Er as cx,
  Vr as cy,
  Lr as cz,
  ki as d,
  mi as d0,
  pi as d1,
  ci as d2,
  di as d3,
  li as d4,
  ui as d5,
  yi as d6,
  gi as d7,
  bi as d8,
  Ii as d9,
  lo as dA,
  uo as dB,
  J as dC,
  lt as dD,
  yo as dE,
  go as dF,
  bo as dG,
  Io as dH,
  ho as dI,
  fi as da,
  vi as db,
  Na as dc,
  fo as dd,
  vo as de,
  it as df,
  st as dg,
  $n as dh,
  Jn as di,
  Qn as dj,
  eo as dk,
  ao as dl,
  to as dm,
  ro as dn,
  io as dp,
  so as dq,
  no as dr,
  oo as ds,
  nt as dt,
  mo as du,
  ot as dv,
  po as dw,
  pt as dx,
  co as dy,
  dt as dz,
  xo as e,
  qi as f,
  Si as g,
  Ni as h,
  Ci as i,
  Pi as j,
  Di as k,
  w as l,
  Rt as m,
  Mi as n,
  Ai as o,
  ji as p,
  Ri as q,
  Fi as r,
  Bi as s,
  Ei as t,
  Vi as u,
  zi as v,
  Li as w,
  Hi as x,
  Oi as y,
  Yi as z
};
