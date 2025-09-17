import Se from "ajv";
import { c as Xe, a as Ge, m } from "./make.es.js";
import { aF as _e, aJ as Ue, aK as Ke, ax as Pe, ay as Ce, az as qe, ae as Ze, ai as $e, ak as Je, al as Qe, F as ea, G as aa, P as ta, p as ra, u as ia, z as E, cY as A, cZ as j, c_ as C, c$ as R, A as V, B as G, C as sa, j as na, aZ as oa, a_ as ma, au as pa, av as ca, v as k, cX as da, cQ as la, cU as ua, cS as ya } from "./make.es2.js";
const Et = (e = 0) => ({ code: 314, indent: e, parameters: [0, 0] }), Vt = (e, a = 0) => ({
  code: 314,
  indent: a,
  parameters: [1, e.targetSelectVariableId]
}), Lt = ({ actorId: e = 1, faceIndex: a = 0, faceName: t = "", characterIndex: r = 0, characterName: s = "", battlerName: n = "" } = {}, p = 0) => ({
  code: 322,
  indent: p,
  parameters: [e, s, r, t, a, n]
}), re = (e, a) => `\\${e}[${a}]`, Ot = (e, a) => a.map((t, r) => ({ text: t, controlChar: re(e, r) })), zt = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((a) => ({
  char: a[1],
  id: parseInt(a[2], 10)
})), Wt = (e) => e.map((a) => ({ text: a.name, controlChar: re("N", a.id) })), Ht = (e) => e.variables.map((a, t) => ({ text: a || "", controlChar: re("V", t) })).filter((a) => a.text !== ""), Yt = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Xt = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), Gt = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), _t = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), ga = (e = {}) => ({
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
}), Ut = 0, Kt = 1, Zt = 2, $t = 3, Jt = 4, Qt = 5, er = 6, ar = 7, tr = 8, rr = 9, ir = 10, sr = 11, nr = 12, or = 13, mr = 14, pr = 15, cr = 16, dr = 17, lr = 18, ur = 19, yr = 20, gr = 21, br = 22, Ir = 23, fr = 24, vr = 25, hr = 26, xr = 27, Tr = 28, kr = 29, wr = 30, Nr = 31, Sr = 32, Pr = 33, Cr = 34, qr = 35, Dr = 36, Mr = 37, Ar = 38, jr = 39, Rr = 40, Fr = 41, Br = 42, Er = 43, Vr = 44, Lr = 45, Or = ({ id: e = 1, name: a = "", pages: t = [], note: r = "", x: s = 0, y: n = 0 } = {}) => ({
  id: e,
  name: a,
  pages: t,
  note: r,
  x: s,
  y: n
}), ba = ({ characterIndex: e = 0, characterName: a = "", direction: t = 2, pattern: r = 0, tileId: s = 0 } = {}) => ({
  characterIndex: e,
  characterName: a,
  direction: t,
  pattern: r,
  tileId: s
}), zr = ({ list: e = [], conditions: a = ga(), image: t = ba(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: a,
  list: e,
  directionFix: s,
  image: t,
  moveFrequency: r,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Wr = (e = {}) => ({
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
}), Hr = (e = { id: 0 }) => {
  return { name: e.name ?? (a = e.id, a.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var a;
}, Ia = {
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
}), fa = De.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), va = De.compile(Ia), Yr = (e) => fa(e), Xr = (e) => va(e), ha = {
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
}, xa = {
  title: "ダメージ",
  options: {}
}, ie = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Gr = (e = {}) => ({
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
}), _r = (e) => ({
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
}), Ur = (e = {}) => ({
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
}), Kr = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), Ta = ({ mhp: e = 0, mmp: a = 0, atk: t = 0, def: r = 0, mat: s = 0, mdf: n = 0, agi: p = 0, luk: d = 0 }) => [e, a, t, r, s, n, p, d], Zr = (e) => {
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
}, ka = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), $r = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Jr = (e = {}) => {
  var a;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((a = e.dropItems) == null ? void 0 : a.map(() => ka())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: e.params ? [...e.params] : Ta({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
    actions: []
  };
}, Qr = (e = {}) => ({
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
}), l = "{name}", q = "{name} * {value}%", be = "{name} + {value}%", Ie = "{value}", wa = { title: "特徴", options: {
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
} }, Na = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, ei = (e, a, t) => {
  const r = Xe(Na);
  return Ge(a, t, r, e.pattern, (s) => s.dataId);
}, ai = (e = {}) => ({
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
}), ti = {
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
}, ri = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ii = 0, si = 1, ni = 2, fe = "{name} {value1}%", K = "{value1}% + {value2}", ve = "{name} {value1}ターン", B = "{name}", Sa = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: ve },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ve },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: K },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: B },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: K
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: K },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: B
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: B },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: fe },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: B
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: fe },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: B }
} }, oi = 0, mi = (e, a, t) => {
  const r = t.find((n) => n.id === a.dataId), s = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", a.value1.toString()).replaceAll("{value2}", a.value2.toString()).replaceAll("{name}", s);
}, pi = { title: "アイテム", options: { consumable: "消耗品" } }, ci = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, di = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, li = (e = {}) => ({
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
}), ui = (e = {}) => ({
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
}), yi = "data", gi = "actor", bi = "map", Ii = "enemy", fi = "state", vi = "skill", hi = "item", xi = "weapon", Ti = "armor", ki = "class", wi = "common_event", Ni = "troop", Pa = {
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
}, Si = () => ({ rpg: { damage: xa, data: ha, traits: wa, itemEffect: Sa }, global: Pa }), Pi = (e, a = 0) => ({ code: _e, parameters: [e.actorId, e.name], indent: a }), Ci = (e, a = 0) => ({
  code: Ue,
  parameters: [e.actorId, e.nickname],
  indent: a
}), qi = (e, a = 0) => ({ code: Ke, parameters: [e.actorId, e.profile], indent: a }), M = { direct: 0, variable: 1 }, Di = (e, a = 0) => ({
  code: Pe,
  indent: a,
  parameters: Me(0, e)
}), Mi = (e, a = 0) => ({ code: Pe, indent: a, parameters: Me(1, e) }), Ai = (e, a = 0) => ({ code: qe, indent: a, parameters: _(0, e) }), ji = (e, a = 0) => ({
  code: qe,
  indent: a,
  parameters: _(1, e)
}), Ri = (e, a = 0) => ({ code: Ce, indent: a, parameters: _(0, e) }), Fi = (e, a = 0) => ({
  code: Ce,
  indent: a,
  parameters: _(1, e)
}), _ = (e, a) => [a.targetType === "variable" ? M.variable : M.direct, a.targetType === "each" ? 0 : a.target, e, M[a.operand.mode], a.operand.value], Me = (e, a) => [a.targetType === "variable" ? M.variable : M.direct, a.targetType === "each" ? 0 : a.target, e, M[a.operand.mode], a.operand.value, a.allowDeath], Bi = (e, a = 0) => ({
  code: 242,
  indent: a,
  parameters: [e.duration]
}), Ei = (e = 0) => ({ code: 243, indent: e, parameters: [] }), Vi = (e = 0) => ({ code: 244, indent: e, parameters: [] }), Li = (e, a = 0) => ({
  code: 246,
  indent: a,
  parameters: [e.duration]
}), Oi = (e, a) => w(e, m({ name: a })), w = (e, a, t = 0) => ({
  code: e,
  parameters: [m(a)],
  indent: t
}), zi = (e, a = 0) => w(Ze, e, a), Wi = (e, a = 0) => w($e, e, a), Hi = (e, a = 0) => w(Je, e, a), Yi = (e, a = 0) => w(Qe, e, a), Xi = (e, a = 0) => w(ea, e, a), Gi = (e, a = 0) => w(aa, e, a), _i = (e, a = 0) => w(ta, e, a), Ca = {
  plus: 0,
  minus: 1
}, Ui = ({ operation: e, time: a }) => ({ code: 124, indent: 0, parameters: [Ca[e ?? "plus"] ?? 0, a ?? 0] });
function Ki(e, a = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: a };
}
const Zi = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), $i = (e, a = 0) => ({ code: 333, indent: a, parameters: [e.enemyIndex, 0, e.stateId] }), Ji = (e, a = 0) => ({
  code: 333,
  indent: a,
  parameters: [e.enemyIndex, 1, e.stateId]
}), Qi = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 0, e.stateId] }), es = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 1, e.stateId] }), as = (e = 0) => ({
  code: 334,
  indent: e,
  parameters: [0]
}), ts = (e, a = 0) => ({ code: 334, indent: a, parameters: [e.enemyIndex] }), rs = (e, a = 0) => ({ code: ra, indent: a, parameters: qa(e ?? {}) }), is = (e) => ({
  eventId: e[0]
}), qa = (e) => [e.eventId ?? 0], ss = (e) => ({ min: e[0], max: e[1], value: e[2] }), Da = (e) => [e.min, e.max, e.value], ns = (e, a = 0) => ({ code: ia, indent: a, parameters: Da(e) }), os = (e, a = 0) => ({
  code: 103,
  parameters: [e.variableId, e.maxDigits],
  indent: a
}), ms = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], ps = (e) => ({ variableId: e[0], maxDigits: e[1] }), cs = (e) => e.parameters[3] === C, ds = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3]
}), ls = (e, a = 0) => ({ code: E, indent: a, parameters: [e.operation, e.itemId, e.value, e.operand] }), us = (e, a = 0) => ({
  code: E,
  indent: a,
  parameters: [A, e.itemId, e.value, j]
}), ys = (e, a = 0) => ({ code: E, indent: a, parameters: [A, e.itemId, e.variableId, C] }), gs = (e, a = 0) => ({
  code: E,
  indent: a,
  parameters: [R, e.itemId, e.value, j]
}), bs = (e, a = 0) => ({ code: E, indent: a, parameters: [R, e.itemId, e.variableId, C] }), Is = (e) => ({ operation: e[0], weaponId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), fs = (e, a = 0) => ({
  code: V,
  indent: a,
  parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip]
}), vs = (e, a = 0) => ({ code: V, indent: a, parameters: [A, e.weaponId, e.value, j, !1] }), hs = (e, a = 0) => ({
  code: V,
  indent: a,
  parameters: [A, e.weaponId, e.variableId, C, !1]
}), xs = (e, a = 0) => ({ code: V, indent: a, parameters: [R, e.weaponId, e.value, j, !1] }), Ts = (e, a = 0) => ({
  code: V,
  indent: a,
  parameters: [R, e.weaponId, e.variableId, C, !1]
}), ks = (e, a = 0) => ({ code: G, indent: a, parameters: [A, e.armorId, e.value, j, !1] }), ws = (e, a = 0) => ({
  code: G,
  indent: a,
  parameters: [A, e.armorId, e.variableId, C, !1]
}), Ns = (e, a = 0) => ({ code: G, indent: a, parameters: [R, e.armorId, e.value, j, !1] }), Ss = (e, a = 0) => ({
  code: G,
  indent: a,
  parameters: [R, e.armorId, e.variableId, C, !1]
}), Ps = (e, a = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: a }), Cs = (e) => ({ variableId: e[0], itemType: e[1] }), qs = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), Ds = (e = 0) => ({ code: 135, parameters: [0], indent: e }), Ms = (e = 0) => ({ code: 134, parameters: [1], indent: e }), As = (e = 0) => ({ code: 134, parameters: [0], indent: e }), js = (e = 0) => ({
  code: 137,
  parameters: [1],
  indent: e
}), Rs = (e = 0) => ({ code: 137, parameters: [0], indent: e }), Ae = (e) => [e], Fs = (e) => ({ comment: e[0] }), Ma = (e, a = 0) => ({ code: sa, indent: a, parameters: Ae(e) }), Aa = (e, a = 0) => ({
  code: na,
  indent: a,
  parameters: Ae(e)
}), Bs = (e, a = 0) => e.map((t, r) => r === 0 ? Ma(t, a) : Aa(t, a)), Es = (e, a = 0) => ({ code: 402, indent: a, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), Vs = (e) => ({
  index: e[0],
  name: e[1]
}), Ls = (e) => [e.index ?? 0, e.name ?? ""], Os = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), zs = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Ws = (e, a = 0) => ({
  code: 102,
  indent: a,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Hs = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Ys = (e, a = 0) => ({ code: 261, indent: a, parameters: [e.filename] }), Xs = (e) => ({
  filename: e[0]
}), Gs = ({ args: e = {}, commandName: a, commandTitle: t = "", pluginName: r }, s = 0) => ({ code: 357, indent: s, parameters: [r, a, t, { ...e }] }), _s = (e) => ({
  pluginName: e[0],
  commandName: e[1],
  commandTitle: e[2],
  args: { ...e[3] }
}), Us = (e, a = 0) => ({ code: 129, parameters: [0, e.actorId], indent: a }), Ks = (e, a = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: a
}), Zs = ({ pictureId: e = 0, origin: a = 0, name: t = "", x: r = 0, y: s = 0, scaleX: n = 100, scaleY: p = 100, opacity: d = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, t, a, r, s, n, p, d, u]
}), $s = ({ pictureId: e, origin: a, x: t, y: r, scaleX: s, scaleY: n, opacity: p, blendMode: d, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, a, t, r, s, n, p, d, u, I] }), ja = (e, a = 0) => ({
  code: oa,
  indent: a,
  parameters: [e]
}), Ra = (e, a = 0) => ({ code: ma, indent: a, parameters: [e] }), Js = (e, a = 0) => e.map((t, r) => r === 0 ? ja(t, a) : Ra(t, a)), Qs = 1, en = 0, O = {
  item: 0,
  weapon: 1,
  armors: 2
}, an = ({ goods: e, buyOnly: a = !1 }, t = 0) => e.map((r, s) => {
  const n = ((p) => p.customPrice !== void 0 && p.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? {
    code: pa,
    indent: t,
    parameters: [O[r.itemType] ?? O.item, r.id, n, r.customPrice ?? 0, a]
  } : { code: ca, indent: t, parameters: [O[r.itemType] ?? O.item, r.id, n, r.customPrice ?? 0] };
}), tn = 0, rn = 1, sn = 2, nn = 3, on = 4, mn = 0, pn = 1, cn = 2, dn = (e, a) => {
  switch (a[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return a[6] >= 2 && a[6] <= 9 ? e.param(a[6] - 2) : 0;
}, ln = (e, a) => {
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
}, un = (e) => e.parameters[2] === 1, Fa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 3, a.index, a.param], yn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: Fa(e, a, t.operation ?? 0)
}), Ba = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 2, a.armorId], gn = (e, a) => ({
  code: k,
  indent: 0,
  parameters: Ba(e, a, 0)
}), Ea = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 0, a.value], bn = (e, a, t = {}) => ({ code: k, indent: t.indent ?? 0, parameters: Ea(e, a, t.operation ?? 0) }), Va = {
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
}, La = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 4, a.index, Va[a.param]], In = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: La(e, a, t.operation ?? 0)
}), fn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: Oa(e, a, t.operation ?? 0)
}), Oa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 0, a.itemId], za = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 2, a.min, a.max], vn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: za(e, a, t.operation ?? 0)
}), Wa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 4, a.code], hn = (e, a, t = {}) => ({
  code: k,
  indent: t.indent ?? 0,
  parameters: Wa(e, a, t.operation ?? 0)
}), Ha = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 1, a.weaponId], xn = (e, a) => ({ code: k, indent: 0, parameters: Ha(e, a, 0) }), Ya = (e) => [...e], Tn = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Ya(e.parameters)
}), Xa = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", kn = (e) => e.parameters.every(Xa), wn = "bgm", Nn = "se", Sn = "me", Pn = "bgs", Cn = "battlebacks1", qn = "battlebacks2", Dn = "characters", Mn = "enemies", An = "faces", jn = "parallaxes", Rn = "pictures", Fn = "sv_actors", Bn = "sv_enemies", En = "system", Vn = "tilesets", Ln = "titles1", On = "titles2", zn = "System.json", Wn = "Actors.json", Hn = "Classes.json", Yn = "Skills.json", Xn = "Items.json", Gn = "Weapons.json", _n = "Armors.json", Un = "Enemies.json", Kn = "Troops.json", Zn = "States.json", $n = "Animations.json", Jn = "Tilesets.json", Qn = "CommonEvents.json", eo = "MapInfos.json", ao = "data", to = "img", ro = "audio", io = "js", je = (e, a) => ({
  type: "array",
  items: a,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, he = (e) => e === void 0 || e === 0, Ga = (e) => je(e, { type: "string" }), _a = (e) => {
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
      return Ga(e);
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
      return ((t) => je(t, { type: "integer" }))(e);
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
}, Re = (e, a) => Object.entries(a).reduce((t, [r, s]) => {
  if (r in e) {
    const n = e[r];
    if (typeof n == "string") return { ...t, [r]: s(n) };
  }
  return t;
}, {}), T = (e, a, t, r) => ({
  default: a,
  ...Re(t, r),
  kind: e
}), H = (e, a, t) => ({ default: [], ...Re(a, t), kind: e }), Fe = "help", ee = "kind", Z = "text", xe = "struct", Be = (e) => {
  const a = JSON.parse(e);
  return Array.isArray(a) ? a.map(Y) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, Y(r)])) : a;
}, Y = (e) => {
  if (typeof e != "string") return e;
  try {
    const a = JSON.parse(e);
    return Array.isArray(a) ? a.map(Y) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, Y(r)])) : a;
  } catch {
    return e;
  }
}, Ua = (e) => {
  if (ee in e.attr) {
    const a = Ka[e.attr.kind];
    if (a) return a(e);
  }
  return T("any", "", e.attr, X);
}, o = (e) => e, Ee = (e) => e.replace("[", "").replace("]", "").split(",").map((a) => parseFloat(a.replaceAll('"', "").trim())).filter((a) => !isNaN(a)), X = {
  default: o,
  text: o,
  desc: o,
  parent: o
}, Te = (e) => T("string", "", e.attr, X), ke = (e) => {
  const a = { default: (t) => Be(t), text: o, desc: o, parent: o };
  return H("string[]", e.attr, a);
}, y = (e, a) => {
  const t = {
    default: Ee,
    text: o,
    desc: o,
    parent: o
  };
  return H(a, e.attr, t);
}, g = (e, a) => {
  const t = { default: (r) => parseInt(r, 10), text: o, desc: o, parent: o };
  return T(a, 0, e.attr, t);
}, Ka = {
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
    const a = { default: Ee, text: o, desc: o, decimals: (t) => parseInt(t, 10), min: (t) => parseFloat(t), max: (t) => parseFloat(t), parent: o };
    return H("number[]", e.attr, a);
  },
  string: Te,
  "string[]": ke,
  multiline_string: Te,
  "multiline_string[]": ke,
  combo: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => r.option)) ?? [];
    return { ...T("combo", "", e.attr, X), options: a };
  },
  select: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...T("select", "", e.attr, X), options: a };
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
    const a = { default: (t) => Be(t), text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...H("file[]", e.attr, a) };
  }
}, Ve = "BODY", Le = "STRUCT", z = "NONE", Za = (e, a) => {
  const t = e.lines.length > 0 ? se(e) : e, r = a[1] || void 0;
  return { ...t, structName: r, blockType: r ? Le : "INVALID", locale: a[2], lines: [] };
}, $a = (e) => ({
  ...e.lines.length > 0 ? se(e) : e,
  blockType: Ve,
  structName: void 0,
  locale: void 0,
  lines: []
}), se = (e) => e.blockType === Ve ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: z } : e.structName && e.blockType === Le ? {
  ...e,
  structs: e.structs.concat([{ struct: e.structName, locale: e.locale, lines: [...e.lines] }]),
  blockType: z,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e,
  blockType: z,
  structName: void 0,
  lines: []
}, Ja = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, ae = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), W = (e) => {
  const a = Qa(e), t = at(a);
  return et(t);
}, Qa = (e) => {
  if (e.currentParam && e.currentOption) {
    const a = e.currentParam.attr.kind;
    if (a === "select" || a === "combo") return { ...e, currentParam: { ...e.currentParam, options: Ja(e.currentOption).items } };
  }
  return e;
}, et = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, at = (e) => {
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
    if (!n.startsWith("@")) return r.currentContext === Fe ? { ...r, helpLines: r.helpLines.concat(n) } : r;
    const [p, ...d] = n.slice(1).split(" "), u = d.join(" ").trim(), I = a[p];
    return I ? I(r, u) : r;
  }, rt());
  return W(t);
}, tt = (e, a) => {
  const t = ((p) => {
    const d = p.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: z
    }, I = d.reduce((f, L) => {
      const N = L.trim(), F = N.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return F ? Za(f, F) : N === "/*:" ? $a(f) : N === "*/" ? f.lines.length > 0 ? se(f) : f : { ...f, lines: f.lines.concat([N]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = t.structs.map((p) => ((d) => {
    const u = we(d, Oe);
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
}, rt = () => ({
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
} : e, $ = (e, a, t) => ({ ...e, meta: { [a]: t, ...e.meta } }), Oe = {
  param: (e, a) => {
    const t = W(e);
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
    const t = W(e);
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
  help: (e) => ({ ...W(e), currentContext: Fe }),
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
}, it = (e) => st(((a) => tt(a, Oe))(e)), st = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: nt(e.commands),
  params: ze(e.params)
}), ze = (e) => e.reduce((a, t) => ({ [t.name]: Ua(t), ...a }), {}), nt = (e) => e.reduce((a, t) => {
  const r = { desc: t.desc, text: t.text, args: ze(t.args) };
  return { [t.command]: r, ...a };
}, {}), so = (e) => it(e), no = (e) => ((a) => {
  const t = Object.entries(a).reduce((r, [s, n]) => {
    const p = _a(n);
    return { ...r, [s]: p };
  }, {});
  return {
    type: "object",
    properties: t,
    required: Object.keys(t),
    additionalProperties: !1
  };
})(e), ot = (e = {}) => ({
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
}), mt = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], oo = (e) => ({
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
}), mo = (e) => e.menuCommands[0], po = (e) => e.menuCommands[1], co = (e) => e.menuCommands[2], lo = (e) => e.menuCommands[3], uo = (e) => e.menuCommands[4], yo = (e) => e.menuCommands[5], go = (e) => e.itemCategories[0], bo = (e) => e.itemCategories[1], Io = (e) => e.itemCategories[2], fo = (e) => e.itemCategories[3], pt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], vo = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), ct = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], ho = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), dt = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, lt = (e = {}) => ({
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
}), b = { type: "boolean" }, ut = {
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
}, xo = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), yt = (e) => ({
  armorTypes: S(e.armorTypes),
  elements: S(e.elements),
  equipTypes: S(e.equipTypes),
  weaponTypes: S(e.weaponTypes),
  skillTypes: S(e.skillTypes),
  variables: S(e.variables),
  switches: S(e.switches)
}), S = (e) => e ? [...e] : [], To = (e) => e.terms.params.map((a, t) => ({
  name: a,
  id: t
})), ko = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), J = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), gt = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), wo = { title: "オプション", options: {
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
} }, No = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, So = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Po = {
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
}, We = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, He = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, Ye = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, D = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, bt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: D, victoryMe: D, gameoverMe: D, titleBgm: D, defeatMe: D, sounds: {
    type: "array",
    items: D,
    minItems: 24,
    maxItems: 24
  } }
}, It = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, ft = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, vt = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, ht = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, P = { type: "array", items: { type: "string" } }, xt = {
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
}, c = { type: "string" }, Ne = { type: "string", nullable: !0 }, i = { type: "string" }, Tt = {
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
}, kt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Ye },
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
}, wt = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
  attackMotions: { type: "array", items: We }
} }, Nt = (e) => e.reduce((a, t) => ({ required: [...a.required, ...t.required], properties: { ...a.properties, ...t.properties } }), {
  required: [],
  properties: {}
}), U = new Se({ strict: !0 }), St = ((e) => {
  const a = Nt(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(a.required)),
    properties: a.properties
  };
})([wt, bt, It, dt, ut, ft, He, ht, xt, Tt, vt, kt]), Pt = U.compile(St), Co = (e) => Pt(e), Ct = U.compile(Ye);
U.compile(We);
const qt = U.compile(He), qo = (e) => {
  var t, r, s, n, p, d, u, I, f, L, N, F, ne, oe, me, pe, ce, de, le, ue, ye, ge;
  const a = Mt(e.size);
  return {
    ...lt(e.options),
    currencyUnit: ((t = e.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: mt(e.sounds),
    editor: gt(e.editing),
    advanced: ot(e.advanced),
    title1Name: ((s = e.images) == null ? void 0 : s.title1Name) ?? "",
    title2Name: ((n = e.images) == null ? void 0 : n.title2Name) ?? "",
    ...yt(e.dataNames ?? {}),
    magicSkills: te([]),
    airship: J((p = e.vehicles) == null ? void 0 : p.airship),
    boat: J((d = e.vehicles) == null ? void 0 : d.boat),
    ship: J((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: m((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: m((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: m((L = e.bgm) == null ? void 0 : L.titleBgm),
    tileSize: a.tileSize,
    faceSize: a.faceSize,
    iconSize: a.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((N = e.battleTest) == null ? void 0 : N.battleback1Name) ?? "",
    battleback2Name: ((F = e.battleTest) == null ? void 0 : F.battleback2Name) ?? "",
    testTroopId: ((ne = e.battleTest) == null ? void 0 : ne.testTroopId) ?? 0,
    testBattlers: At((oe = e.battleTest) == null ? void 0 : oe.testBattlers, jt),
    battleBgm: m((me = e.bgm) == null ? void 0 : me.battleBgm),
    victoryMe: m((pe = e.me) == null ? void 0 : pe.victoryMe),
    editMapId: ((ce = e.editorTemporary) == null ? void 0 : ce.editMapId) ?? 0,
    battlerName: ((de = e.editorTemporary) == null ? void 0 : de.battlerName) ?? "",
    locale: "",
    startMapId: ((le = e.gameInit) == null ? void 0 : le.startMapId) ?? 0,
    startX: ((ue = e.gameInit) == null ? void 0 : ue.startX) ?? 0,
    startY: ((ye = e.gameInit) == null ? void 0 : ye.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Dt(e.terms ?? {}),
    itemCategories: pt(e.itemCategories),
    partyMembersArray: te((ge = e.gameInit) == null ? void 0 : ge.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: ct(e.menuComamnds)
  };
}, Dt = (e) => ({
  basic: ya(e.basic ?? {}),
  commands: ua(e.commands ?? {}),
  params: la(e.params ?? {}),
  messages: da(e.messages ?? {})
}), te = (e) => e ? [...e] : [], Mt = (e) => ((a) => qt(a))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, At = (e, a) => e ? e.map(a) : [], jt = (e) => ((a) => Ct(a))(e) ? { actorId: e.actorId, equips: te(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Do = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Mo = (e) => {
  const a = e.split("/");
  return a[a.length - 1];
};
export {
  Is as $,
  Ui as A,
  Zi as B,
  Ki as C,
  Qi as D,
  $i as E,
  es as F,
  Ji as G,
  ts as H,
  as as I,
  rs as J,
  is as K,
  qa as L,
  ss as M,
  Da as N,
  ns as O,
  ps as P,
  os as Q,
  ms as R,
  Cs as S,
  Ps as T,
  ds as U,
  cs as V,
  ls as W,
  us as X,
  ys as Y,
  gs as Z,
  bs as _,
  Pi as a,
  on as a$,
  fs as a0,
  vs as a1,
  hs as a2,
  xs as a3,
  Ts as a4,
  ks as a5,
  ws as a6,
  Ns as a7,
  Ss as a8,
  js as a9,
  Ra as aA,
  Js as aB,
  Qs as aC,
  en as aD,
  an as aE,
  ln as aF,
  dn as aG,
  un as aH,
  yn as aI,
  Fa as aJ,
  gn as aK,
  Ba as aL,
  bn as aM,
  Ea as aN,
  In as aO,
  La as aP,
  fn as aQ,
  Oa as aR,
  vn as aS,
  za as aT,
  hn as aU,
  Wa as aV,
  xn as aW,
  Ha as aX,
  tn as aY,
  nn as aZ,
  sn as a_,
  qs as aa,
  Ms as ab,
  Rs as ac,
  Ds as ad,
  As as ae,
  Ae as af,
  Fs as ag,
  Ma as ah,
  Aa as ai,
  Bs as aj,
  Es as ak,
  Vs as al,
  Ls as am,
  Os as an,
  zs as ao,
  Ws as ap,
  Hs as aq,
  Xs as ar,
  Ys as as,
  _s as at,
  Gs as au,
  Us as av,
  Ks as aw,
  Zs as ax,
  $s as ay,
  ja as az,
  Ci as b,
  tr as b$,
  rn as b0,
  cn as b1,
  mn as b2,
  pn as b3,
  Ya as b4,
  Tn as b5,
  kn as b6,
  wn as b7,
  Nn as b8,
  Sn as b9,
  Qn as bA,
  eo as bB,
  ao as bC,
  to as bD,
  ro as bE,
  io as bF,
  so as bG,
  no as bH,
  Si as bI,
  re as bJ,
  Ot as bK,
  zt as bL,
  Wt as bM,
  Ht as bN,
  Yt as bO,
  Xt as bP,
  Gt as bQ,
  _t as bR,
  ga as bS,
  Ut as bT,
  Kt as bU,
  Zt as bV,
  $t as bW,
  Jt as bX,
  Qt as bY,
  er as bZ,
  ar as b_,
  Pn as ba,
  Cn as bb,
  qn as bc,
  Dn as bd,
  Mn as be,
  An as bf,
  jn as bg,
  Rn as bh,
  Fn as bi,
  Bn as bj,
  En as bk,
  Vn as bl,
  Ln as bm,
  On as bn,
  zn as bo,
  Wn as bp,
  Hn as bq,
  Yn as br,
  Xn as bs,
  Gn as bt,
  _n as bu,
  Un as bv,
  Kn as bw,
  Zn as bx,
  $n as by,
  Jn as bz,
  qi as c,
  si as c$,
  rr as c0,
  ir as c1,
  sr as c2,
  nr as c3,
  or as c4,
  mr as c5,
  pr as c6,
  cr as c7,
  dr as c8,
  lr as c9,
  Lr as cA,
  Or as cB,
  ba as cC,
  zr as cD,
  Wr as cE,
  Hr as cF,
  Yr as cG,
  Xr as cH,
  ha as cI,
  xa as cJ,
  ie as cK,
  Gr as cL,
  _r as cM,
  Ur as cN,
  Kr as cO,
  ka as cP,
  $r as cQ,
  Jr as cR,
  Ta as cS,
  Zr as cT,
  Qr as cU,
  ei as cV,
  wa as cW,
  ai as cX,
  ti as cY,
  ri as cZ,
  ii as c_,
  ur as ca,
  yr as cb,
  gr as cc,
  br as cd,
  Ir as ce,
  fr as cf,
  vr as cg,
  hr as ch,
  xr as ci,
  Tr as cj,
  kr as ck,
  wr as cl,
  Nr as cm,
  Sr as cn,
  Pr as co,
  Cr as cp,
  qr as cq,
  Dr as cr,
  Mr as cs,
  Ar as ct,
  jr as cu,
  Rr as cv,
  Fr as cw,
  Br as cx,
  Er as cy,
  Vr as cz,
  Di as d,
  ni as d0,
  mi as d1,
  Sa as d2,
  oi as d3,
  pi as d4,
  ci as d5,
  di as d6,
  li as d7,
  ui as d8,
  yi as d9,
  Io as dA,
  fo as dB,
  pt as dC,
  vo as dD,
  ct as dE,
  ho as dF,
  lt as dG,
  xo as dH,
  yt as dI,
  To as dJ,
  ko as dK,
  J as dL,
  gt as dM,
  wo as dN,
  No as dO,
  So as dP,
  Po as dQ,
  Do as dR,
  gi as da,
  bi as db,
  Ii as dc,
  fi as dd,
  vi as de,
  hi as df,
  xi as dg,
  Ti as dh,
  ki as di,
  wi as dj,
  Ni as dk,
  Pa as dl,
  Co as dm,
  qo as dn,
  ot as dp,
  mt as dq,
  oo as dr,
  mo as ds,
  po as dt,
  co as du,
  lo as dv,
  uo as dw,
  yo as dx,
  go as dy,
  bo as dz,
  Mo as e,
  Ri as f,
  Ai as g,
  Mi as h,
  Fi as i,
  ji as j,
  Et as k,
  Vt as l,
  Lt as m,
  Bi as n,
  Li as o,
  Vi as p,
  Ei as q,
  Oi as r,
  w as s,
  zi as t,
  Wi as u,
  Hi as v,
  Yi as w,
  Xi as x,
  Gi as y,
  _i as z
};
