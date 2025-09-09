import Se from "ajv";
import { c as Ye, a as Xe, m } from "./make.es.js";
import { aF as Ge, aJ as _e, aK as Ue, ax as Pe, ay as Ce, az as qe, ae as Ke, ai as Ze, ak as $e, al as Je, F as Qe, G as ea, P as aa, p as ta, u as ra, z as V, cY as A, cZ as j, c_ as C, c$ as R, A as L, B as _, C as ia, j as sa, aZ as na, a_ as oa, au as ma, av as pa, v as k, cX as ca, cQ as da, cU as la, cS as ua } from "./make.es2.js";
const Bt = (e = 0) => ({ code: 314, indent: e, parameters: [0, 0] }), Et = (e, a = 0) => ({
  code: 314,
  indent: a,
  parameters: [1, e.targetSelectVariableId]
}), Vt = ({ actorId: e = 1, faceIndex: a = 0, faceName: t = "", characterIndex: r = 0, characterName: s = "", battlerName: n = "" } = {}, p = 0) => ({
  code: 322,
  indent: p,
  parameters: [e, s, r, t, a, n]
}), re = (e, a) => `\\${e}[${a}]`, Lt = (e, a) => a.map((t, r) => ({ text: t, controlChar: re(e, r) })), zt = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((a) => ({
  char: a[1],
  id: parseInt(a[2], 10)
})), Ot = (e) => e.map((a) => ({ text: a.name, controlChar: re("N", a.id) })), Wt = (e) => e.variables.map((a, t) => ({ text: a || "", controlChar: re("V", t) })).filter((a) => a.text !== ""), Ht = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Yt = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), Xt = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Gt = (e = {}) => ({
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
}), _t = 0, Ut = 1, Kt = 2, Zt = 3, $t = 4, Jt = 5, Qt = 6, er = 7, ar = 8, tr = 9, rr = 10, ir = 11, sr = 12, nr = 13, or = 14, mr = 15, pr = 16, cr = 17, dr = 18, lr = 19, ur = 20, yr = 21, gr = 22, br = 23, Ir = 24, fr = 25, vr = 26, hr = 27, xr = 28, Tr = 29, kr = 30, wr = 31, Nr = 32, Sr = 33, Pr = 34, Cr = 35, qr = 36, Dr = 37, Mr = 38, Ar = 39, jr = 40, Rr = 41, Fr = 42, Br = 43, Er = 44, Vr = 45, Lr = ({ id: e = 1, name: a = "", pages: t = [], note: r = "", x: s = 0, y: n = 0 } = {}) => ({
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
}), zr = ({ list: e = [], conditions: a = ya(), image: t = ga(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: a,
  list: e,
  directionFix: s,
  image: t,
  moveFrequency: r,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Or = (e = {}) => ({
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
}), Wr = (e = { id: 0 }) => {
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
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), fa = De.compile(ba), Hr = (e) => Ia(e), Yr = (e) => fa(e), va = {
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
}, ie = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Xr = (e = {}) => ({
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
}), Gr = (e) => ({
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
}), _r = (e = {}) => ({
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
}), Ur = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), xa = ({ mhp: e = 0, mmp: a = 0, atk: t = 0, def: r = 0, mat: s = 0, mdf: n = 0, agi: p = 0, luk: d = 0 }) => [e, a, t, r, s, n, p, d], Kr = (e) => {
  const [a, t, r, s, n, p, d, u] = e;
  return {
    mhp: a,
    mmp: t,
    atk: r,
    def: s,
    mat: n,
    mdf: p,
    agi: d,
    luk: u
  };
}, Ta = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), Zr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), $r = (e = {}) => {
  var a;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((a = e.dropItems) == null ? void 0 : a.map(() => Ta())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: e.params ? [...e.params] : xa({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
    actions: []
  };
}, Jr = (e = {}) => ({
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
}), l = "{name}", q = "{name} * {value}%", be = "{name} + {value}%", Ie = "{value}", ka = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: q, options: {
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
  specialParam: { title: "特殊能力値", format: q, options: {
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
  elementRate: { title: "属性有効度", format: q },
  debuffRate: { title: "弱体有効度", format: q },
  stateRate: { title: "ステート有効度", format: q },
  stateResist: {
    title: "ステート無効",
    format: l
  },
  attackElement: { title: "攻撃属性", format: l },
  attackState: { title: "攻撃ステート", format: be },
  attackSpeed: { title: "攻撃速度補正", format: Ie },
  attackTimes: {
    title: "攻撃追加回数",
    format: Ie
  },
  actionPlus: { title: "行動追加", format: q },
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
} }, wa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Qr = (e, a, t) => {
  const r = Ye(wa);
  return Xe(a, t, r, e.pattern, (s) => s.dataId);
}, ei = (e = {}) => ({
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
}), ai = {
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
}, ti = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ri = 0, ii = 1, si = 2, fe = "{name} {value1}%", K = "{value1}% + {value2}", ve = "{name} {value1}ターン", E = "{name}", Na = { title: "使用効果", options: {
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
} }, ni = 0, oi = (e, a, t) => {
  const r = t.find((n) => n.id === a.dataId), s = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", a.value1.toString()).replaceAll("{value2}", a.value2.toString()).replaceAll("{name}", s);
}, mi = { title: "アイテム", options: { consumable: "消耗品" } }, pi = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ci = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, di = (e = {}) => ({
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
}), li = (e = {}) => ({
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
}), ui = "data", yi = "actor", gi = "map", bi = "enemy", Ii = "state", fi = "skill", vi = "item", hi = "weapon", xi = "armor", Ti = "class", ki = "common_event", wi = "troop", Sa = {
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
}, Ni = () => ({ rpg: { damage: ha, data: va, traits: ka, itemEffect: Na }, global: Sa }), Si = (e, a = 0) => ({ code: Ge, parameters: [e.actorId, e.name], indent: a }), Pi = (e, a = 0) => ({
  code: _e,
  parameters: [e.actorId, e.nickname],
  indent: a
}), Ci = (e, a = 0) => ({ code: Ue, parameters: [e.actorId, e.profile], indent: a }), D = { direct: 0, variable: 1 }, qi = (e, a = 0) => ({
  code: Pe,
  indent: a,
  parameters: [...F[e.targetType](e, 0), e.allowDeath]
}), Di = (e, a = 0) => ({ code: Pe, indent: a, parameters: [...F[e.targetType](e, 1), e.allowDeath] }), Mi = (e, a = 0) => ({
  code: qe,
  indent: a,
  parameters: F[e.targetType](e, 0)
}), Ai = (e, a = 0) => ({ code: qe, indent: a, parameters: F[e.targetType](e, 1) }), ji = (e, a = 0) => ({ code: Ce, indent: a, parameters: F[e.targetType](e, 0) }), Ri = (e, a = 0) => ({
  code: Ce,
  indent: a,
  parameters: F[e.targetType](e, 1)
}), F = {
  direct: (e, a) => [D.direct, e.target, a, D[e.operand.type], e.operand.value],
  variable: (e, a) => [D.variable, e.target, a, D[e.operand.type], e.operand.value],
  each: (e, a) => [D.direct, -1, a, D[e.operand.type], e.operand.value]
}, Fi = (e, a) => w(e, m({
  name: a
})), w = (e, a, t = 0) => ({
  code: e,
  parameters: [m(a)],
  indent: t
}), Bi = (e, a = 0) => w(Ke, e, a), Ei = (e, a = 0) => w(Ze, e, a), Vi = (e, a = 0) => w($e, e, a), Li = (e, a = 0) => w(Je, e, a), zi = (e, a = 0) => w(Qe, e, a), Oi = (e, a = 0) => w(ea, e, a), Wi = (e, a = 0) => w(aa, e, a), Pa = {
  plus: 0,
  minus: 1
}, Hi = ({ operation: e, time: a }) => ({ code: 124, indent: 0, parameters: [Pa[e ?? "plus"] ?? 0, a ?? 0] });
function Yi(e, a = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: a };
}
const Xi = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), Gi = (e, a = 0) => ({ code: 333, indent: a, parameters: [e.enemyIndex, 0, e.stateId] }), _i = (e, a = 0) => ({
  code: 333,
  indent: a,
  parameters: [e.enemyIndex, 1, e.stateId]
}), Ui = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 0, e.stateId] }), Ki = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 1, e.stateId] }), Zi = (e = 0) => ({
  code: 334,
  indent: e,
  parameters: [0]
}), $i = (e, a = 0) => ({ code: 334, indent: a, parameters: [e.enemyIndex] }), Ji = (e, a = 0) => ({ code: ta, indent: a, parameters: Ca(e ?? {}) }), Qi = (e) => ({
  eventId: e[0]
}), Ca = (e) => [e.eventId ?? 0], es = (e) => ({ min: e[0], max: e[1], value: e[2] }), qa = (e) => [e.min, e.max, e.value], as = (e, a = 0) => ({ code: ra, indent: a, parameters: qa(e) }), ts = (e, a = 0) => ({
  code: 103,
  parameters: [e.variableId, e.maxDigits],
  indent: a
}), rs = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], is = (e) => ({ variableId: e[0], maxDigits: e[1] }), ss = (e) => e.parameters[3] === C, ns = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3]
}), os = (e, a = 0) => ({ code: V, indent: a, parameters: [e.operation, e.itemId, e.value, e.operand] }), ms = (e, a = 0) => ({
  code: V,
  indent: a,
  parameters: [A, e.itemId, e.value, j]
}), ps = (e, a = 0) => ({ code: V, indent: a, parameters: [A, e.itemId, e.variableId, C] }), cs = (e, a = 0) => ({
  code: V,
  indent: a,
  parameters: [R, e.itemId, e.value, j]
}), ds = (e, a = 0) => ({ code: V, indent: a, parameters: [R, e.itemId, e.variableId, C] }), ls = (e) => ({ operation: e[0], weaponId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), us = (e, a = 0) => ({
  code: L,
  indent: a,
  parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip]
}), ys = (e, a = 0) => ({ code: L, indent: a, parameters: [A, e.weaponId, e.value, j, !1] }), gs = (e, a = 0) => ({
  code: L,
  indent: a,
  parameters: [A, e.weaponId, e.variableId, C, !1]
}), bs = (e, a = 0) => ({ code: L, indent: a, parameters: [R, e.weaponId, e.value, j, !1] }), Is = (e, a = 0) => ({
  code: L,
  indent: a,
  parameters: [R, e.weaponId, e.variableId, C, !1]
}), fs = (e, a = 0) => ({ code: _, indent: a, parameters: [A, e.armorId, e.value, j, !1] }), vs = (e, a = 0) => ({
  code: _,
  indent: a,
  parameters: [A, e.armorId, e.variableId, C, !1]
}), hs = (e, a = 0) => ({ code: _, indent: a, parameters: [R, e.armorId, e.value, j, !1] }), xs = (e, a = 0) => ({
  code: _,
  indent: a,
  parameters: [R, e.armorId, e.variableId, C, !1]
}), Ts = (e, a = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: a }), ks = (e) => ({ variableId: e[0], itemType: e[1] }), ws = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), Ns = (e = 0) => ({ code: 135, parameters: [0], indent: e }), Ss = (e = 0) => ({ code: 134, parameters: [1], indent: e }), Ps = (e = 0) => ({ code: 134, parameters: [0], indent: e }), Cs = (e = 0) => ({
  code: 137,
  parameters: [1],
  indent: e
}), qs = (e = 0) => ({ code: 137, parameters: [0], indent: e }), Me = (e) => [e], Ds = (e) => ({ comment: e[0] }), Da = (e, a = 0) => ({ code: ia, indent: a, parameters: Me(e) }), Ma = (e, a = 0) => ({
  code: sa,
  indent: a,
  parameters: Me(e)
}), Ms = (e, a = 0) => e.map((t, r) => r === 0 ? Da(t, a) : Ma(t, a)), As = (e, a = 0) => ({ code: 402, indent: a, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), js = (e) => ({
  index: e[0],
  name: e[1]
}), Rs = (e) => [e.index ?? 0, e.name ?? ""], Fs = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Bs = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Es = (e, a = 0) => ({
  code: 102,
  indent: a,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Vs = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Ls = (e, a = 0) => ({ code: 261, indent: a, parameters: [e.filename] }), zs = (e) => ({
  filename: e[0]
}), Os = ({ args: e = {}, commandName: a, commandTitle: t = "", pluginName: r }, s = 0) => ({ code: 357, indent: s, parameters: [r, a, t, { ...e }] }), Ws = (e) => ({
  pluginName: e[0],
  commandName: e[1],
  commandTitle: e[2],
  args: { ...e[3] }
}), Hs = (e, a = 0) => ({ code: 129, parameters: [0, e.actorId], indent: a }), Ys = (e, a = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: a
}), Xs = ({ pictureId: e = 0, origin: a = 0, name: t = "", x: r = 0, y: s = 0, scaleX: n = 100, scaleY: p = 100, opacity: d = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, t, a, r, s, n, p, d, u]
}), Gs = ({ pictureId: e, origin: a, x: t, y: r, scaleX: s, scaleY: n, opacity: p, blendMode: d, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, a, t, r, s, n, p, d, u, I] }), Aa = (e, a = 0) => ({
  code: na,
  indent: a,
  parameters: [e]
}), ja = (e, a = 0) => ({ code: oa, indent: a, parameters: [e] }), _s = (e, a = 0) => e.map((t, r) => r === 0 ? Aa(t, a) : ja(t, a)), Us = 1, Ks = 0, O = {
  item: 0,
  weapon: 1,
  armors: 2
}, Zs = ({ goods: e, buyOnly: a = !1 }, t = 0) => e.map((r, s) => {
  const n = ((p) => p.customPrice !== void 0 && p.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? {
    code: ma,
    indent: t,
    parameters: [O[r.itemType] ?? O.item, r.id, n, r.customPrice ?? 0, a]
  } : { code: pa, indent: t, parameters: [O[r.itemType] ?? O.item, r.id, n, r.customPrice ?? 0] };
}), $s = 0, Js = 1, Qs = 2, en = 3, an = 4, tn = 0, rn = 1, sn = 2, nn = (e, a) => {
  switch (a[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return a[6] >= 2 && a[6] <= 9 ? e.param(a[6] - 2) : 0;
}, on = (e, a) => {
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
}, mn = (e) => e.parameters[2] === 1, Ra = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 3, a.index, a.param], pn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: Ra(e, a, t.operation ?? 0)
}), Fa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 2, a.armorId], cn = (e, a) => ({
  code: k,
  indent: 0,
  parameters: Fa(e, a, 0)
}), Ba = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 0, a.value], dn = (e, a, t = {}) => ({ code: k, indent: t.indent ?? 0, parameters: Ba(e, a, t.operation ?? 0) }), Ea = {
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
}, Va = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 4, a.index, Ea[a.param]], ln = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: Va(e, a, t.operation ?? 0)
}), un = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: La(e, a, t.operation ?? 0)
}), La = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 0, a.itemId], za = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 2, a.min, a.max], yn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: za(e, a, t.operation ?? 0)
}), Oa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 4, a.code], gn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: Oa(e, a, t.operation ?? 0)
}), Wa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 1, a.weaponId], bn = (e, a) => ({ code: k, indent: 0, parameters: Wa(e, a, 0) }), Ha = (e) => [...e], In = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Ha(e.parameters)
}), Ya = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", fn = (e) => e.parameters.every(Ya), vn = "bgm", hn = "se", xn = "me", Tn = "bgs", kn = "battlebacks1", wn = "battlebacks2", Nn = "characters", Sn = "enemies", Pn = "faces", Cn = "parallaxes", qn = "pictures", Dn = "sv_actors", Mn = "sv_enemies", An = "system", jn = "tilesets", Rn = "titles1", Fn = "titles2", Bn = "System.json", En = "Actors.json", Vn = "Classes.json", Ln = "Skills.json", zn = "Items.json", On = "Weapons.json", Wn = "Armors.json", Hn = "Enemies.json", Yn = "Troops.json", Xn = "States.json", Gn = "Animations.json", _n = "Tilesets.json", Un = "CommonEvents.json", Kn = "MapInfos.json", Zn = "data", $n = "img", Jn = "audio", Qn = "js", Ae = (e, a) => ({
  type: "array",
  items: a,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, he = (e) => e === void 0 || e === 0, Xa = (e) => Ae(e, { type: "string" }), Ga = (e) => {
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
      return Xa(e);
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
}), Y = (e, a, t) => ({ default: [], ...je(a, t), kind: e }), Re = "help", ee = "kind", Z = "text", xe = "struct", Fe = (e) => {
  const a = JSON.parse(e);
  return Array.isArray(a) ? a.map(X) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, X(r)])) : a;
}, X = (e) => {
  if (typeof e != "string") return e;
  try {
    const a = JSON.parse(e);
    return Array.isArray(a) ? a.map(X) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, X(r)])) : a;
  } catch {
    return e;
  }
}, _a = (e) => {
  if (ee in e.attr) {
    const a = Ua[e.attr.kind];
    if (a) return a(e);
  }
  return T("any", "", e.attr, G);
}, o = (e) => e, Be = (e) => e.replace("[", "").replace("]", "").split(",").map((a) => parseFloat(a.replaceAll('"', "").trim())).filter((a) => !isNaN(a)), G = {
  default: o,
  text: o,
  desc: o,
  parent: o
}, Te = (e) => T("string", "", e.attr, G), ke = (e) => {
  const a = { default: (t) => Fe(t), text: o, desc: o, parent: o };
  return Y("string[]", e.attr, a);
}, y = (e, a) => {
  const t = {
    default: Be,
    text: o,
    desc: o,
    parent: o
  };
  return Y(a, e.attr, t);
}, g = (e, a) => {
  const t = { default: (r) => parseInt(r, 10), text: o, desc: o, parent: o };
  return T(a, 0, e.attr, t);
}, Ua = {
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
    return Y("number[]", e.attr, a);
  },
  string: Te,
  "string[]": ke,
  multiline_string: Te,
  "multiline_string[]": ke,
  combo: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => r.option)) ?? [];
    return { ...T("combo", "", e.attr, G), options: a };
  },
  select: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...T("select", "", e.attr, G), options: a };
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
    return { dir: "", ...Y("file[]", e.attr, a) };
  }
}, Ee = "BODY", Ve = "STRUCT", W = "NONE", Ka = (e, a) => {
  const t = e.lines.length > 0 ? se(e) : e, r = a[1] || void 0;
  return { ...t, structName: r, blockType: r ? Ve : "INVALID", locale: a[2], lines: [] };
}, Za = (e) => ({
  ...e.lines.length > 0 ? se(e) : e,
  blockType: Ee,
  structName: void 0,
  locale: void 0,
  lines: []
}), se = (e) => e.blockType === Ee ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: W } : e.structName && e.blockType === Ve ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: W,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: W,
  structName: void 0,
  lines: []
}, $a = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, ae = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), H = (e) => {
  const a = Ja(e), t = et(a);
  return Qa(t);
}, Ja = (e) => {
  if (e.currentParam && e.currentOption) {
    const a = e.currentParam.attr.kind;
    if (a === "select" || a === "combo") return { ...e, currentParam: { ...e.currentParam, options: $a(e.currentOption).items } };
  }
  return e;
}, Qa = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, et = (e) => {
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
}, we = (e, a) => {
  const t = e.lines.reduce((r, s) => {
    const n = s.trim().replace(/^\*\s?/, "");
    if (!n.startsWith("@")) return r.currentContext === Re ? { ...r, helpLines: r.helpLines.concat(n) } : r;
    const [p, ...d] = n.slice(1).split(" "), u = d.join(" ").trim(), I = a[p];
    return I ? I(r, u) : r;
  }, tt());
  return H(t);
}, at = (e, a) => {
  const t = ((p) => {
    const d = p.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: W
    }, I = d.reduce((f, z) => {
      const N = z.trim(), B = N.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return B ? Ka(f, B) : N === "/*:" ? Za(f) : N === "*/" ? f.lines.length > 0 ? se(f) : f : { ...f, lines: f.lines.concat([N]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = t.structs.map((p) => ((d) => {
    const u = we(d, Le);
    return { name: d.struct, params: u.params };
  })(p)), s = ((p) => {
    if (p.bodies.length !== 0) return p.bodies[0];
  })(t);
  if (!s) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const n = we(s, a);
  return { params: n.params, commands: n.commands, meta: n.meta, helpLines: n.helpLines, structs: r };
}, tt = () => ({
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
    const t = H(e);
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
    const t = H(e);
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
  help: (e) => ({ ...H(e), currentContext: Re }),
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
}, rt = (e) => it(((a) => at(a, Le))(e)), it = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: st(e.commands),
  params: ze(e.params)
}), ze = (e) => e.reduce((a, t) => ({ [t.name]: _a(t), ...a }), {}), st = (e) => e.reduce((a, t) => {
  const r = { desc: t.desc, text: t.text, args: ze(t.args) };
  return { [t.command]: r, ...a };
}, {}), eo = (e) => rt(e), ao = (e) => ((a) => {
  const t = Object.entries(a).reduce((r, [s, n]) => {
    const p = Ga(n);
    return { ...r, [s]: p };
  }, {});
  return {
    type: "object",
    properties: t,
    required: Object.keys(t),
    additionalProperties: !1
  };
})(e), nt = (e = {}) => ({
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
}), ot = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], to = (e) => ({
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
}), ro = (e) => e.menuCommands[0], io = (e) => e.menuCommands[1], so = (e) => e.menuCommands[2], no = (e) => e.menuCommands[3], oo = (e) => e.menuCommands[4], mo = (e) => e.menuCommands[5], po = (e) => e.itemCategories[0], co = (e) => e.itemCategories[1], lo = (e) => e.itemCategories[2], uo = (e) => e.itemCategories[3], mt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], yo = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), pt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], go = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), ct = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, dt = (e = {}) => ({
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
}), b = { type: "boolean" }, lt = {
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
}, bo = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), ut = (e) => ({
  armorTypes: S(e.armorTypes),
  elements: S(e.elements),
  equipTypes: S(e.equipTypes),
  weaponTypes: S(e.weaponTypes),
  skillTypes: S(e.skillTypes),
  variables: S(e.variables),
  switches: S(e.switches)
}), S = (e) => e ? [...e] : [], Io = (e) => e.terms.params.map((a, t) => ({
  name: a,
  id: t
})), fo = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), J = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), yt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), vo = { title: "オプション", options: {
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
} }, ho = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, xo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, To = {
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
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, gt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: M, victoryMe: M, gameoverMe: M, titleBgm: M, defeatMe: M, sounds: {
    type: "array",
    items: M,
    minItems: 24,
    maxItems: 24
  } }
}, bt = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, It = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, ft = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, vt = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, P = { type: "array", items: { type: "string" } }, ht = {
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
}, c = { type: "string" }, Ne = { type: "string", nullable: !0 }, i = { type: "string" }, xt = {
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
      items: [c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, Ne, c, c, Ne, c, c],
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
}, Tt = {
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
}, kt = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
} }, wt = (e) => e.reduce((a, t) => ({ required: [...a.required, ...t.required], properties: { ...a.properties, ...t.properties } }), {
  required: [],
  properties: {}
}), U = new Se({ strict: !0 }), Nt = ((e) => {
  const a = wt(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(a.required)),
    properties: a.properties
  };
})([kt, gt, bt, ct, lt, It, We, vt, ht, xt, ft, Tt]), St = U.compile(Nt), ko = (e) => St(e), Pt = U.compile(He);
U.compile(Oe);
const Ct = U.compile(We), wo = (e) => {
  var t, r, s, n, p, d, u, I, f, z, N, B, ne, oe, me, pe, ce, de, le, ue, ye, ge;
  const a = Dt(e.size);
  return {
    ...dt(e.options),
    currencyUnit: ((t = e.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: ot(e.sounds),
    editor: yt(e.editing),
    advanced: nt(e.advanced),
    title1Name: ((s = e.images) == null ? void 0 : s.title1Name) ?? "",
    title2Name: ((n = e.images) == null ? void 0 : n.title2Name) ?? "",
    ...ut(e.dataNames ?? {}),
    magicSkills: te([]),
    airship: J((p = e.vehicles) == null ? void 0 : p.airship),
    boat: J((d = e.vehicles) == null ? void 0 : d.boat),
    ship: J((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: m((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: m((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: m((z = e.bgm) == null ? void 0 : z.titleBgm),
    tileSize: a.tileSize,
    faceSize: a.faceSize,
    iconSize: a.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((N = e.battleTest) == null ? void 0 : N.battleback1Name) ?? "",
    battleback2Name: ((B = e.battleTest) == null ? void 0 : B.battleback2Name) ?? "",
    testTroopId: ((ne = e.battleTest) == null ? void 0 : ne.testTroopId) ?? 0,
    testBattlers: Mt((oe = e.battleTest) == null ? void 0 : oe.testBattlers, At),
    battleBgm: m((me = e.bgm) == null ? void 0 : me.battleBgm),
    victoryMe: m((pe = e.me) == null ? void 0 : pe.victoryMe),
    editMapId: ((ce = e.editorTemporary) == null ? void 0 : ce.editMapId) ?? 0,
    battlerName: ((de = e.editorTemporary) == null ? void 0 : de.battlerName) ?? "",
    locale: "",
    startMapId: ((le = e.gameInit) == null ? void 0 : le.startMapId) ?? 0,
    startX: ((ue = e.gameInit) == null ? void 0 : ue.startX) ?? 0,
    startY: ((ye = e.gameInit) == null ? void 0 : ye.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: qt(e.terms ?? {}),
    itemCategories: mt(e.itemCategories),
    partyMembersArray: te((ge = e.gameInit) == null ? void 0 : ge.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: pt(e.menuComamnds)
  };
}, qt = (e) => ({
  basic: ua(e.basic ?? {}),
  commands: la(e.commands ?? {}),
  params: da(e.params ?? {}),
  messages: ca(e.messages ?? {})
}), te = (e) => e ? [...e] : [], Dt = (e) => ((a) => Ct(a))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Mt = (e, a) => e ? e.map(a) : [], At = (e) => ((a) => Pt(a))(e) ? { actorId: e.actorId, equips: te(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, No = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, So = (e) => {
  const a = e.split("/");
  return a[a.length - 1];
};
export {
  bs as $,
  Gi as A,
  Ki as B,
  _i as C,
  $i as D,
  Zi as E,
  Ji as F,
  Qi as G,
  Ca as H,
  es as I,
  qa as J,
  as as K,
  is as L,
  ts as M,
  rs as N,
  ks as O,
  Ts as P,
  ns as Q,
  ss as R,
  os as S,
  ms as T,
  ps as U,
  cs as V,
  ds as W,
  ls as X,
  us as Y,
  ys as Z,
  gs as _,
  Si as a,
  rn as a$,
  Is as a0,
  fs as a1,
  vs as a2,
  hs as a3,
  xs as a4,
  Cs as a5,
  ws as a6,
  Ss as a7,
  qs as a8,
  Ns as a9,
  Zs as aA,
  on as aB,
  nn as aC,
  mn as aD,
  pn as aE,
  Ra as aF,
  cn as aG,
  Fa as aH,
  dn as aI,
  Ba as aJ,
  ln as aK,
  Va as aL,
  un as aM,
  La as aN,
  yn as aO,
  za as aP,
  gn as aQ,
  Oa as aR,
  bn as aS,
  Wa as aT,
  $s as aU,
  en as aV,
  Qs as aW,
  an as aX,
  Js as aY,
  sn as aZ,
  tn as a_,
  Ps as aa,
  Me as ab,
  Ds as ac,
  Da as ad,
  Ma as ae,
  Ms as af,
  As as ag,
  js as ah,
  Rs as ai,
  Fs as aj,
  Bs as ak,
  Es as al,
  Vs as am,
  zs as an,
  Ls as ao,
  Ws as ap,
  Os as aq,
  Hs as ar,
  Ys as as,
  Xs as at,
  Gs as au,
  Aa as av,
  ja as aw,
  _s as ax,
  Us as ay,
  Ks as az,
  Pi as b,
  sr as b$,
  Ha as b0,
  In as b1,
  fn as b2,
  vn as b3,
  hn as b4,
  xn as b5,
  Tn as b6,
  kn as b7,
  wn as b8,
  Nn as b9,
  Jn as bA,
  Qn as bB,
  eo as bC,
  ao as bD,
  Ni as bE,
  re as bF,
  Lt as bG,
  zt as bH,
  Ot as bI,
  Wt as bJ,
  Ht as bK,
  Yt as bL,
  Xt as bM,
  Gt as bN,
  ya as bO,
  _t as bP,
  Ut as bQ,
  Kt as bR,
  Zt as bS,
  $t as bT,
  Jt as bU,
  Qt as bV,
  er as bW,
  ar as bX,
  tr as bY,
  rr as bZ,
  ir as b_,
  Sn as ba,
  Pn as bb,
  Cn as bc,
  qn as bd,
  Dn as be,
  Mn as bf,
  An as bg,
  jn as bh,
  Rn as bi,
  Fn as bj,
  Bn as bk,
  En as bl,
  Vn as bm,
  Ln as bn,
  zn as bo,
  On as bp,
  Wn as bq,
  Hn as br,
  Yn as bs,
  Xn as bt,
  Gn as bu,
  _n as bv,
  Un as bw,
  Kn as bx,
  Zn as by,
  $n as bz,
  Ci as c,
  ni as c$,
  nr as c0,
  or as c1,
  mr as c2,
  pr as c3,
  cr as c4,
  dr as c5,
  lr as c6,
  ur as c7,
  yr as c8,
  gr as c9,
  Or as cA,
  Wr as cB,
  Hr as cC,
  Yr as cD,
  va as cE,
  ha as cF,
  ie as cG,
  Xr as cH,
  Gr as cI,
  _r as cJ,
  Ur as cK,
  Ta as cL,
  Zr as cM,
  $r as cN,
  xa as cO,
  Kr as cP,
  Jr as cQ,
  Qr as cR,
  ka as cS,
  ei as cT,
  ai as cU,
  ti as cV,
  ri as cW,
  ii as cX,
  si as cY,
  oi as cZ,
  Na as c_,
  br as ca,
  Ir as cb,
  fr as cc,
  vr as cd,
  hr as ce,
  xr as cf,
  Tr as cg,
  kr as ch,
  wr as ci,
  Nr as cj,
  Sr as ck,
  Pr as cl,
  Cr as cm,
  qr as cn,
  Dr as co,
  Mr as cp,
  Ar as cq,
  jr as cr,
  Rr as cs,
  Fr as ct,
  Br as cu,
  Er as cv,
  Vr as cw,
  Lr as cx,
  ga as cy,
  zr as cz,
  qi as d,
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
  pt as dA,
  go as dB,
  dt as dC,
  bo as dD,
  ut as dE,
  Io as dF,
  fo as dG,
  J as dH,
  yt as dI,
  vo as dJ,
  ho as dK,
  xo as dL,
  To as dM,
  No as dN,
  fi as da,
  vi as db,
  hi as dc,
  xi as dd,
  Ti as de,
  ki as df,
  wi as dg,
  Sa as dh,
  ko as di,
  wo as dj,
  nt as dk,
  ot as dl,
  to as dm,
  ro as dn,
  io as dp,
  so as dq,
  no as dr,
  oo as ds,
  mo as dt,
  po as du,
  co as dv,
  lo as dw,
  uo as dx,
  mt as dy,
  yo as dz,
  So as e,
  ji as f,
  Mi as g,
  Di as h,
  Ri as i,
  Ai as j,
  Bt as k,
  Et as l,
  Vt as m,
  Fi as n,
  w as o,
  Bi as p,
  Ei as q,
  Vi as r,
  Li as s,
  zi as t,
  Oi as u,
  Wi as v,
  Hi as w,
  Xi as x,
  Yi as y,
  Ui as z
};
