import we from "ajv";
import { c as ze, a as He, m } from "./make.es.js";
import { aH as We, aL as Ye, aM as Xe, az as Ne, aA as Se, aB as Pe, ag as Ge, ak as _e, am as Ue, an as Ke, H as Ze, J as Je, R as $e, s as Qe, w as ea, B as F, c_ as D, c$ as M, d0 as S, d1 as A, D as B, F as Y, C as aa, k as ta, a$ as ra, b0 as ia, aw as sa, ax as na, x, cZ as oa, cS as ma, cW as pa, cU as da } from "./make.es2.js";
const jt = (e = 0) => ({ code: 314, indent: e, parameters: [0, 0] }), Rt = (e, a = 0) => ({
  code: 314,
  indent: a,
  parameters: [1, e.targetSelectVariableId]
}), Ft = ({ actorId: e = 1, faceIndex: a = 0, faceName: t = "", characterIndex: r = 0, characterName: s = "", battlerName: n = "" } = {}, p = 0) => ({
  code: 322,
  indent: p,
  parameters: [e, s, r, t, a, n]
}), ae = (e, a) => `\\${e}[${a}]`, Bt = (e, a) => a.map((t, r) => ({ text: t, controlChar: ae(e, r) })), Et = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((a) => ({
  char: a[1],
  id: parseInt(a[2], 10)
})), Lt = (e) => e.map((a) => ({ text: a.name, controlChar: ae("N", a.id) })), Vt = (e) => e.variables.map((a, t) => ({ text: a || "", controlChar: ae("V", t) })).filter((a) => a.text !== ""), Ot = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), zt = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), Ht = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Wt = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), ca = (e = {}) => ({
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
}), Yt = 0, Xt = 1, Gt = 2, _t = 3, Ut = 4, Kt = 5, Zt = 6, Jt = 7, $t = 8, Qt = 9, er = 10, ar = 11, tr = 12, rr = 13, ir = 14, sr = 15, nr = 16, or = 17, mr = 18, pr = 19, dr = 20, cr = 21, lr = 22, ur = 23, yr = 24, gr = 25, br = 26, Ir = 27, fr = 28, vr = 29, hr = 30, xr = 31, Tr = 32, kr = 33, wr = 34, Nr = 35, Sr = 36, Pr = 37, Cr = 38, qr = 39, Dr = 40, Mr = 41, Ar = 42, jr = 43, Rr = 44, Fr = 45, Br = ({ id: e = 1, name: a = "", pages: t = [], note: r = "", x: s = 0, y: n = 0 } = {}) => ({
  id: e,
  name: a,
  pages: t,
  note: r,
  x: s,
  y: n
}), la = ({ characterIndex: e = 0, characterName: a = "", direction: t = 2, pattern: r = 0, tileId: s = 0 } = {}) => ({
  characterIndex: e,
  characterName: a,
  direction: t,
  pattern: r,
  tileId: s
}), Er = ({ list: e = [], conditions: a = ca(), image: t = la(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: a,
  list: e,
  directionFix: s,
  image: t,
  moveFrequency: r,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Lr = (e = {}) => ({
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
}, Ce = new we({
  strict: !0
}), ya = Ce.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), ga = Ce.compile(ua), Or = (e) => ya(e), zr = (e) => ga(e), ba = {
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
}, Ia = {
  title: "ダメージ",
  options: {}
}, te = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), Hr = (e = {}) => ({
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
}), Yr = (e = {}) => ({
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
}), Xr = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), fa = ({ mhp: e = 0, mmp: a = 0, atk: t = 0, def: r = 0, mat: s = 0, mdf: n = 0, agi: p = 0, luk: c = 0 }) => [e, a, t, r, s, n, p, c], Gr = (e) => {
  const [a, t, r, s, n, p, c, u] = e;
  return {
    mhp: a,
    mmp: t,
    atk: r,
    def: s,
    mat: n,
    mdf: p,
    agi: c,
    luk: u
  };
}, va = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), _r = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Ur = (e = {}) => {
  var a;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((a = e.dropItems) == null ? void 0 : a.map(() => va())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: e.params ? [...e.params] : fa({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
    actions: []
  };
}, Kr = (e = {}) => ({
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
}), l = "{name}", P = "{name} * {value}%", ge = "{name} + {value}%", be = "{value}", ha = { title: "特徴", options: {
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
  extraParam: { title: "追加能力値", format: ge, options: {
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
  attackState: { title: "攻撃ステート", format: ge },
  attackSpeed: { title: "攻撃速度補正", format: be },
  attackTimes: {
    title: "攻撃追加回数",
    format: be
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
} }, xa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Zr = (e, a, t) => {
  const r = ze(xa);
  return He(a, t, r, e.pattern, (s) => s.dataId);
}, Jr = (e = {}) => ({
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
  damage: te(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), $r = {
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
}, Qr = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ei = 0, ai = 1, ti = 2, Ie = "{name} {value1}%", _ = "{value1}% + {value2}", fe = "{name} {value1}ターン", R = "{name}", Ta = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: fe },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: fe },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: _ },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: R },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: _
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: _ },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: R
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: R },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Ie },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: R
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: Ie },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: R }
} }, ri = 0, ii = (e, a, t) => {
  const r = t.find((n) => n.id === a.dataId), s = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", a.value1.toString()).replaceAll("{value2}", a.value2.toString()).replaceAll("{name}", s);
}, si = { title: "アイテム", options: { consumable: "消耗品" } }, ni = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, oi = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, mi = (e = {}) => ({
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
  damage: te(e.damage ?? {}),
  effects: [],
  price: 0
}), pi = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: te(e.damage ?? {}),
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
}), di = "data", ci = "actor", li = "map", ui = "enemy", yi = "state", gi = "skill", bi = "item", Ii = "weapon", fi = "armor", vi = "class", hi = "common_event", xi = "troop", ka = {
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
}, Ti = () => ({ rpg: { damage: Ia, data: ba, traits: ha, itemEffect: Ta }, global: ka }), ki = (e, a = 0) => ({ code: We, parameters: [e.actorId, e.name], indent: a }), wi = (e, a = 0) => ({
  code: Ye,
  parameters: [e.actorId, e.nickname],
  indent: a
}), Ni = (e, a = 0) => ({ code: Xe, parameters: [e.actorId, e.profile], indent: a }), q = { direct: 0, variable: 1 }, Si = (e, a = 0) => ({
  code: Ne,
  indent: a,
  parameters: qe(0, e)
}), Pi = (e, a = 0) => ({ code: Ne, indent: a, parameters: qe(1, e) }), Ci = (e, a = 0) => ({ code: Pe, indent: a, parameters: X(0, e) }), qi = (e, a = 0) => ({
  code: Pe,
  indent: a,
  parameters: X(1, e)
}), Di = (e, a = 0) => ({ code: Se, indent: a, parameters: X(0, e) }), Mi = (e, a = 0) => ({
  code: Se,
  indent: a,
  parameters: X(1, e)
}), X = (e, a) => [a.targetType === "variable" ? q.variable : q.direct, a.targetType === "each" ? 0 : a.target, e, q[a.operand.mode], a.operand.value], qe = (e, a) => [a.targetType === "variable" ? q.variable : q.direct, a.targetType === "each" ? 0 : a.target, e, q[a.operand.mode], a.operand.value, a.allowDeath], Ai = (e, a = 0) => ({
  code: 242,
  indent: a,
  parameters: [e.duration]
}), ji = (e = 0) => ({ code: 243, indent: e, parameters: [] }), Ri = (e = 0) => ({ code: 244, indent: e, parameters: [] }), Fi = (e, a = 0) => ({
  code: 246,
  indent: a,
  parameters: [e.duration]
}), Bi = (e, a) => T(e, m({ name: a })), T = (e, a, t = 0) => ({
  code: e,
  parameters: [m(a)],
  indent: t
}), Ei = (e, a = 0) => T(Ge, e, a), Li = (e, a = 0) => T(_e, e, a), Vi = (e, a = 0) => T(Ue, e, a), Oi = (e, a = 0) => T(Ke, e, a), zi = (e, a = 0) => T(Ze, e, a), Hi = (e, a = 0) => T(Je, e, a), Wi = (e, a = 0) => T($e, e, a), wa = {
  plus: 0,
  minus: 1
}, Yi = ({ operation: e, time: a }) => ({ code: 124, indent: 0, parameters: [wa[e ?? "plus"] ?? 0, a ?? 0] });
function Xi(e, a = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: a };
}
const Gi = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), _i = (e, a = 0) => ({ code: 333, indent: a, parameters: [e.enemyIndex, 0, e.stateId] }), Ui = (e, a = 0) => ({
  code: 333,
  indent: a,
  parameters: [e.enemyIndex, 1, e.stateId]
}), Ki = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 0, e.stateId] }), Zi = (e, a = 0) => ({ code: 333, indent: a, parameters: [-1, 1, e.stateId] }), Ji = (e = 0) => ({
  code: 334,
  indent: e,
  parameters: [0]
}), $i = (e, a = 0) => ({ code: 334, indent: a, parameters: [e.enemyIndex] }), Qi = (e, a = 0) => ({ code: Qe, indent: a, parameters: Na(e ?? {}) }), es = (e) => ({
  eventId: e[0]
}), Na = (e) => [e.eventId ?? 0], as = (e) => ({ min: e[0], max: e[1], value: e[2] }), Sa = (e) => [e.min, e.max, e.value], ts = (e, a = 0) => ({ code: ea, indent: a, parameters: Sa(e) }), rs = (e, a = 0) => ({
  code: 103,
  parameters: [e.variableId, e.maxDigits],
  indent: a
}), is = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], ss = (e) => ({ variableId: e[0], maxDigits: e[1] }), ns = (e) => e.parameters[3] === S, os = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3]
}), ms = (e, a = 0) => ({ code: F, indent: a, parameters: [e.operation, e.itemId, e.value, e.operand] }), ps = (e, a = 0) => ({
  code: F,
  indent: a,
  parameters: [D, e.itemId, e.value, M]
}), ds = (e, a = 0) => ({ code: F, indent: a, parameters: [D, e.itemId, e.variableId, S] }), cs = (e, a = 0) => ({
  code: F,
  indent: a,
  parameters: [A, e.itemId, e.value, M]
}), ls = (e, a = 0) => ({ code: F, indent: a, parameters: [A, e.itemId, e.variableId, S] }), us = (e) => ({ operation: e[0], weaponId: e[1], value: e[2], operand: e[3], includesEquip: e[4] }), ys = (e, a = 0) => ({
  code: B,
  indent: a,
  parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip]
}), gs = (e, a = 0) => ({ code: B, indent: a, parameters: [D, e.weaponId, e.value, M, !1] }), bs = (e, a = 0) => ({
  code: B,
  indent: a,
  parameters: [D, e.weaponId, e.variableId, S, !1]
}), Is = (e, a = 0) => ({ code: B, indent: a, parameters: [A, e.weaponId, e.value, M, !1] }), fs = (e, a = 0) => ({
  code: B,
  indent: a,
  parameters: [A, e.weaponId, e.variableId, S, !1]
}), vs = (e, a = 0) => ({ code: Y, indent: a, parameters: [D, e.armorId, e.value, M, !1] }), hs = (e, a = 0) => ({
  code: Y,
  indent: a,
  parameters: [D, e.armorId, e.variableId, S, !1]
}), xs = (e, a = 0) => ({ code: Y, indent: a, parameters: [A, e.armorId, e.value, M, !1] }), Ts = (e, a = 0) => ({
  code: Y,
  indent: a,
  parameters: [A, e.armorId, e.variableId, S, !1]
}), ks = (e, a = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: a }), ws = (e) => ({ variableId: e[0], itemType: e[1] }), Ns = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), Ss = (e = 0) => ({ code: 135, parameters: [0], indent: e }), Ps = (e = 0) => ({ code: 134, parameters: [1], indent: e }), Cs = (e = 0) => ({ code: 134, parameters: [0], indent: e }), qs = (e = 0) => ({
  code: 137,
  parameters: [1],
  indent: e
}), Ds = (e = 0) => ({ code: 137, parameters: [0], indent: e }), De = (e) => [e], Ms = (e) => ({ comment: e[0] }), Pa = (e, a = 0) => ({ code: aa, indent: a, parameters: De(e) }), Ca = (e, a = 0) => ({
  code: ta,
  indent: a,
  parameters: De(e)
}), As = (e, a = 0) => e.map((t, r) => r === 0 ? Pa(t, a) : Ca(t, a)), js = (e, a = 0) => ({ code: 402, indent: a, parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""] }), Rs = (e) => ({
  index: e[0],
  name: e[1]
}), Fs = (e) => [e.index ?? 0, e.name ?? ""], Bs = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Es = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], Ls = (e, a = 0) => ({
  code: 102,
  indent: a,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), Vs = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Os = (e, a = 0) => ({ code: 261, indent: a, parameters: [e.filename] }), zs = (e) => ({
  filename: e[0]
}), Hs = ({ args: e = {}, commandName: a, commandTitle: t = "", pluginName: r }, s = 0) => ({ code: 357, indent: s, parameters: [r, a, t, { ...e }] }), Ws = (e) => ({
  pluginName: e[0],
  commandName: e[1],
  commandTitle: e[2],
  args: { ...e[3] }
}), Ys = (e, a = 0) => ({ code: 129, parameters: [0, e.actorId], indent: a }), Xs = (e, a = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: a
}), Gs = ({ pictureId: e = 0, origin: a = 0, name: t = "", x: r = 0, y: s = 0, scaleX: n = 100, scaleY: p = 100, opacity: c = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, t, a, r, s, n, p, c, u]
}), _s = ({ pictureId: e, origin: a, x: t, y: r, scaleX: s, scaleY: n, opacity: p, blendMode: c, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, a, t, r, s, n, p, c, u, I] }), qa = (e, a = 0) => ({
  code: ra,
  indent: a,
  parameters: [e]
}), Da = (e, a = 0) => ({ code: ia, indent: a, parameters: [e] }), Us = (e, a = 0) => e.map((t, r) => r === 0 ? qa(t, a) : Da(t, a)), Ks = 1, Zs = 0, L = {
  item: 0,
  weapon: 1,
  armors: 2
}, Js = ({ goods: e, buyOnly: a = !1 }, t = 0) => e.map((r, s) => {
  const n = ((p) => p.customPrice !== void 0 && p.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? {
    code: sa,
    indent: t,
    parameters: [L[r.itemType] ?? L.item, r.id, n, r.customPrice ?? 0, a]
  } : { code: na, indent: t, parameters: [L[r.itemType] ?? L.item, r.id, n, r.customPrice ?? 0] };
}), $s = 0, Qs = 1, en = 2, an = 3, tn = 4, rn = 0, sn = 1, nn = 2, on = (e, a) => {
  switch (a[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return a[6] >= 2 && a[6] <= 9 ? e.param(a[6] - 2) : 0;
}, mn = (e, a) => {
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
}, pn = (e) => e.parameters[2] === 1, Ma = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 3, a.index, a.param], dn = (e, a, t = {}) => ({
  code: x,
  indent: t.indent ?? 0,
  parameters: Ma(e, a, t.operation ?? 0)
}), Aa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 2, a.armorId], cn = (e, a) => ({
  code: x,
  indent: 0,
  parameters: Aa(e, a, 0)
}), ja = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 0, a.value], ln = (e, a, t = {}) => ({ code: x, indent: t.indent ?? 0, parameters: ja(e, a, t.operation ?? 0) }), Ra = {
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
}, Fa = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 4, a.index, Ra[a.param]], un = (e, a, t = {}) => ({
  code: x,
  indent: t.indent ?? 0,
  parameters: Fa(e, a, t.operation ?? 0)
}), yn = (e, a, t = {}) => ({
  code: x,
  indent: t.indent ?? 0,
  parameters: Ba(e, a, t.operation ?? 0)
}), Ba = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 0, a.itemId], Ea = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 2, a.min, a.max], gn = (e, a, t = {}) => ({
  code: x,
  indent: t.indent ?? 0,
  parameters: Ea(e, a, t.operation ?? 0)
}), La = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 4, a.code], bn = (e, a, t = {}) => ({
  code: x,
  indent: t.indent ?? 0,
  parameters: La(e, a, t.operation ?? 0)
}), Va = (e, a, t = 0) => [e.startId, e.endId ?? e.startId, t, 3, 1, a.weaponId], In = (e, a) => ({ code: x, indent: 0, parameters: Va(e, a, 0) }), Oa = (e) => [...e], fn = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: Oa(e.parameters)
}), za = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", vn = (e) => e.parameters.every(za), hn = "bgm", xn = "se", Tn = "me", kn = "bgs", wn = "battlebacks1", Nn = "battlebacks2", Sn = "characters", Pn = "enemies", Cn = "faces", qn = "parallaxes", Dn = "pictures", Mn = "sv_actors", An = "sv_enemies", jn = "system", Rn = "tilesets", Fn = "titles1", Bn = "titles2", En = "System.json", Ln = "Actors.json", Vn = "Classes.json", On = "Skills.json", zn = "Items.json", Hn = "Weapons.json", Wn = "Armors.json", Yn = "Enemies.json", Xn = "Troops.json", Gn = "States.json", _n = "Animations.json", Un = "Tilesets.json", Kn = "CommonEvents.json", Zn = "MapInfos.json", Jn = "data", $n = "img", Qn = "audio", eo = "js", Me = (e, a) => Object.entries(a).reduce((t, [r, s]) => {
  if (r in e) {
    const n = e[r];
    if (typeof n == "string") return { ...t, [r]: s(n) };
  }
  return t;
}, {}), h = (e, a, t, r) => ({ default: a, ...Me(t, r), kind: e }), z = (e, a, t) => ({
  default: [],
  ...Me(a, t),
  kind: e
}), Ae = "help", $ = "kind", U = "text", ve = "struct", je = (e) => {
  const a = JSON.parse(e);
  return Array.isArray(a) ? a.map(H) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, H(r)])) : a;
}, H = (e) => {
  if (typeof e != "string") return e;
  try {
    const a = JSON.parse(e);
    return Array.isArray(a) ? a.map(H) : typeof a == "object" && a !== null ? Object.fromEntries(Object.entries(a).map(([t, r]) => [t, H(r)])) : a;
  } catch {
    return e;
  }
}, Ha = (e) => {
  if ($ in e.attr) {
    const a = Wa[e.attr.kind];
    if (a) return a(e);
  }
  return h("any", "", e.attr, W);
}, o = (e) => e, Re = (e) => e.replace("[", "").replace("]", "").split(",").map((a) => parseFloat(a.replaceAll('"', "").trim())).filter((a) => !isNaN(a)), W = {
  default: o,
  text: o,
  desc: o,
  parent: o
}, he = (e) => h("string", "", e.attr, W), xe = (e) => {
  const a = { default: (t) => je(t), text: o, desc: o, parent: o };
  return z("string[]", e.attr, a);
}, y = (e, a) => {
  const t = {
    default: Re,
    text: o,
    desc: o,
    parent: o
  };
  return z(a, e.attr, t);
}, g = (e, a) => {
  const t = { default: (r) => parseInt(r, 10), text: o, desc: o, parent: o };
  return h(a, 0, e.attr, t);
}, Wa = {
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
    return h("number", 0, a.attr, t);
  })(e),
  "number[]": (e) => {
    const a = { default: Re, text: o, desc: o, decimals: (t) => parseInt(t, 10), min: (t) => parseFloat(t), max: (t) => parseFloat(t), parent: o };
    return z("number[]", e.attr, a);
  },
  string: he,
  "string[]": xe,
  multiline_string: he,
  "multiline_string[]": xe,
  combo: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => r.option)) ?? [];
    return { ...h("combo", "", e.attr, W), options: a };
  },
  select: (e) => {
    var t;
    const a = ((t = e.options) == null ? void 0 : t.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...h("select", "", e.attr, W), options: a };
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
    return h("boolean", !0, e.attr, a);
  },
  file: (e) => {
    const a = { default: o, text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...h("file", "", e.attr, a) };
  },
  "file[]": (e) => {
    const a = { default: (t) => je(t), text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...z("file[]", e.attr, a) };
  }
}, Ya = ["string", "multiline_string", "select"], ao = (e) => Ya.includes(e.kind), Fe = "BODY", Be = "STRUCT", V = "NONE", Xa = (e, a) => {
  const t = e.lines.length > 0 ? re(e) : e, r = a[1] || void 0;
  return {
    ...t,
    structName: r,
    blockType: r ? Be : "INVALID",
    locale: a[2],
    lines: []
  };
}, Ga = (e) => ({ ...e.lines.length > 0 ? re(e) : e, blockType: Fe, structName: void 0, locale: void 0, lines: [] }), re = (e) => e.blockType === Fe ? {
  ...e,
  bodies: e.bodies.concat([{ lines: [...e.lines] }]),
  lines: [],
  blockType: V
} : e.structName && e.blockType === Be ? { ...e, structs: e.structs.concat([{
  struct: e.structName,
  locale: e.locale,
  lines: [...e.lines]
}]), blockType: V, structName: void 0, locale: void 0, lines: [] } : { ...e, blockType: V, structName: void 0, lines: [] }, _a = (e) => e.currentOption ? { items: e.items.concat({
  option: e.currentOption,
  value: e.currentOption
}) } : e, Q = (e) => ({ ...typeof e.desc == "string" ? { desc: e.desc } : {}, ...typeof e.text == "string" ? { text: e.text } : {} }), O = (e) => {
  const a = Ua(e), t = Za(a);
  return Ka(t);
}, Ua = (e) => {
  if (e.currentParam && e.currentOption) {
    const a = e.currentParam.attr.kind;
    if (a === "select" || a === "combo") return { ...e, currentParam: {
      ...e.currentParam,
      options: _a(e.currentOption).items
    } };
  }
  return e;
}, Ka = (e) => e.currentParam ? { ...e, params: [...e.params, e.currentParam], currentParam: null, currentContext: null } : e, Za = (e) => {
  if (!e.currentCommand) return e;
  const a = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, t = {
    ...Q(e.currentCommand),
    command: e.currentCommand.command,
    args: a
  };
  return { ...e, commands: [...e.commands, t], currentCommand: null, currentParam: null, currentContext: null, currentOption: null };
}, Te = (e, a) => {
  const t = e.lines.reduce((r, s) => {
    const n = s.trim().replace(/^\*\s?/, "");
    if (!n.startsWith("@")) return r.currentContext === Ae ? { ...r, helpLines: r.helpLines.concat(n) } : r;
    const [p, ...c] = n.slice(1).split(" "), u = c.join(" ").trim(), I = a[p];
    return I ? I(r, u) : r;
  }, $a());
  return O(t);
}, Ja = (e, a) => {
  const t = ((p) => {
    const c = p.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: V
    }, I = c.reduce((f, E) => {
      const k = E.trim(), j = k.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return j ? Xa(f, j) : k === "/*:" ? Ga(f) : k === "*/" ? f.lines.length > 0 ? re(f) : f : { ...f, lines: f.lines.concat([k]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = t.structs.map((p) => ((c) => {
    const u = Te(c, Ee);
    return { name: c.struct, params: u.params };
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
  const n = Te(s, a);
  return { params: n.params, commands: n.commands, meta: n.meta, helpLines: n.helpLines, structs: r };
}, $a = () => ({
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
} : e, K = (e, a, t) => ({ ...e, meta: { [a]: t, ...e.meta } }), Ee = {
  param: (e, a) => {
    const t = O(e);
    return t.params.some((r) => r.name === a) ? t : { ...t, currentContext: "param", currentParam: { name: a, attr: {} } };
  },
  text: (e, a) => e.currentParam ? v(e, U, a) : e.currentCommand && !(U in e.currentCommand) ? { ...e, currentCommand: {
    ...Q(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [U]: a
  } } : e,
  desc: (e, a) => e.currentParam ? v(e, "desc", a) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: a } } : e,
  command: (e, a) => {
    const t = O(e);
    return t.commands.some((r) => r.command === a) ? t : { ...t, currentCommand: { command: a, args: [] }, currentParam: null };
  },
  arg: (e, a) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const t = {
        ...Q(e.currentCommand),
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
  help: (e) => ({ ...O(e), currentContext: Ae }),
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
      const t = a.slice(7, -1), r = v(e, ve, t);
      return v(r, $, ve);
    }
    return e.currentParam ? v(e, $, a) : e;
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
  author: (e, a) => K(e, "author", a),
  plugindesc: (e, a) => K(e, "plugindesc", a),
  url: (e, a) => K(e, "url", a)
}, Qa = (e) => et(((a) => Ja(a, Ee))(e)), et = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: at(e.commands),
  params: ie(e.params),
  structs: tt(e.structs)
}), ie = (e) => Object.fromEntries(e.map((a) => [a.name, Ha(a)])), at = (e) => Object.fromEntries(e.map((a) => [a.command, {
  desc: a.desc,
  text: a.text,
  args: ie(a.args)
}])), tt = (e) => Object.fromEntries(e.map((a) => [a.name, { params: ie(a.params) }])), to = (e) => Qa(e), rt = (e = {}) => ({
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
}), it = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], ro = (e) => ({
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
}), io = (e) => e.menuCommands[0], so = (e) => e.menuCommands[1], no = (e) => e.menuCommands[2], oo = (e) => e.menuCommands[3], mo = (e) => e.menuCommands[4], po = (e) => e.menuCommands[5], co = (e) => e.itemCategories[0], lo = (e) => e.itemCategories[1], uo = (e) => e.itemCategories[2], yo = (e) => e.itemCategories[3], st = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], go = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), nt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], bo = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), ot = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, mt = (e = {}) => ({
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
}), b = { type: "boolean" }, pt = {
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
}, Io = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), dt = (e) => ({
  armorTypes: w(e.armorTypes),
  elements: w(e.elements),
  equipTypes: w(e.equipTypes),
  weaponTypes: w(e.weaponTypes),
  skillTypes: w(e.skillTypes),
  variables: w(e.variables),
  switches: w(e.switches)
}), w = (e) => e ? [...e] : [], fo = (e) => e.terms.params.map((a, t) => ({
  name: a,
  id: t
})), vo = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), Z = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), ct = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), ho = { title: "オプション", options: {
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
} }, xo = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, To = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, ko = {
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
}, Le = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, Ve = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, Oe = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, C = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, lt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, ut = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, yt = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, gt = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, bt = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, N = { type: "array", items: { type: "string" } }, It = {
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
}, d = { type: "string" }, ke = { type: "string", nullable: !0 }, i = { type: "string" }, ft = {
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
      items: [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, ke, d, d, ke, d, d],
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
}, vt = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Oe },
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
}, J = {
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
}, ht = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: J,
  boat: J,
  ship: J,
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
  attackMotions: { type: "array", items: Le }
} }, xt = (e) => e.reduce((a, t) => ({ required: [...a.required, ...t.required], properties: { ...a.properties, ...t.properties } }), {
  required: [],
  properties: {}
}), G = new we({ strict: !0 }), Tt = ((e) => {
  const a = xt(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(a.required)),
    properties: a.properties
  };
})([ht, lt, ut, ot, pt, yt, Ve, bt, It, ft, gt, vt]), kt = G.compile(Tt), wo = (e) => kt(e), wt = G.compile(Oe);
G.compile(Le);
const Nt = G.compile(Ve), No = (e) => {
  var t, r, s, n, p, c, u, I, f, E, k, j, se, ne, oe, me, pe, de, ce, le, ue, ye;
  const a = Pt(e.size);
  return {
    ...mt(e.options),
    currencyUnit: ((t = e.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: it(e.sounds),
    editor: ct(e.editing),
    advanced: rt(e.advanced),
    title1Name: ((s = e.images) == null ? void 0 : s.title1Name) ?? "",
    title2Name: ((n = e.images) == null ? void 0 : n.title2Name) ?? "",
    ...dt(e.dataNames ?? {}),
    magicSkills: ee([]),
    airship: Z((p = e.vehicles) == null ? void 0 : p.airship),
    boat: Z((c = e.vehicles) == null ? void 0 : c.boat),
    ship: Z((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: m((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: m((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: m((E = e.bgm) == null ? void 0 : E.titleBgm),
    tileSize: a.tileSize,
    faceSize: a.faceSize,
    iconSize: a.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((k = e.battleTest) == null ? void 0 : k.battleback1Name) ?? "",
    battleback2Name: ((j = e.battleTest) == null ? void 0 : j.battleback2Name) ?? "",
    testTroopId: ((se = e.battleTest) == null ? void 0 : se.testTroopId) ?? 0,
    testBattlers: Ct((ne = e.battleTest) == null ? void 0 : ne.testBattlers, qt),
    battleBgm: m((oe = e.bgm) == null ? void 0 : oe.battleBgm),
    victoryMe: m((me = e.me) == null ? void 0 : me.victoryMe),
    editMapId: ((pe = e.editorTemporary) == null ? void 0 : pe.editMapId) ?? 0,
    battlerName: ((de = e.editorTemporary) == null ? void 0 : de.battlerName) ?? "",
    locale: "",
    startMapId: ((ce = e.gameInit) == null ? void 0 : ce.startMapId) ?? 0,
    startX: ((le = e.gameInit) == null ? void 0 : le.startX) ?? 0,
    startY: ((ue = e.gameInit) == null ? void 0 : ue.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: St(e.terms ?? {}),
    itemCategories: st(e.itemCategories),
    partyMembersArray: ee((ye = e.gameInit) == null ? void 0 : ye.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: nt(e.menuComamnds)
  };
}, St = (e) => ({
  basic: da(e.basic ?? {}),
  commands: pa(e.commands ?? {}),
  params: ma(e.params ?? {}),
  messages: oa(e.messages ?? {})
}), ee = (e) => e ? [...e] : [], Pt = (e) => ((a) => Nt(a))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ct = (e, a) => e ? e.map(a) : [], qt = (e) => ((a) => wt(a))(e) ? { actorId: e.actorId, equips: ee(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, So = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Po = (e) => {
  const a = e.split("/");
  return a[a.length - 1];
};
export {
  us as $,
  Yi as A,
  Gi as B,
  Xi as C,
  Ki as D,
  _i as E,
  Zi as F,
  Ui as G,
  $i as H,
  Ji as I,
  Qi as J,
  es as K,
  Na as L,
  as as M,
  Sa as N,
  ts as O,
  ss as P,
  rs as Q,
  is as R,
  ws as S,
  ks as T,
  os as U,
  ns as V,
  ms as W,
  ps as X,
  ds as Y,
  cs as Z,
  ls as _,
  ki as a,
  tn as a$,
  ys as a0,
  gs as a1,
  bs as a2,
  Is as a3,
  fs as a4,
  vs as a5,
  hs as a6,
  xs as a7,
  Ts as a8,
  qs as a9,
  Da as aA,
  Us as aB,
  Ks as aC,
  Zs as aD,
  Js as aE,
  mn as aF,
  on as aG,
  pn as aH,
  dn as aI,
  Ma as aJ,
  cn as aK,
  Aa as aL,
  ln as aM,
  ja as aN,
  un as aO,
  Fa as aP,
  yn as aQ,
  Ba as aR,
  gn as aS,
  Ea as aT,
  bn as aU,
  La as aV,
  In as aW,
  Va as aX,
  $s as aY,
  an as aZ,
  en as a_,
  Ns as aa,
  Ps as ab,
  Ds as ac,
  Ss as ad,
  Cs as ae,
  De as af,
  Ms as ag,
  Pa as ah,
  Ca as ai,
  As as aj,
  js as ak,
  Rs as al,
  Fs as am,
  Bs as an,
  Es as ao,
  Ls as ap,
  Vs as aq,
  zs as ar,
  Os as as,
  Ws as at,
  Hs as au,
  Ys as av,
  Xs as aw,
  Gs as ax,
  _s as ay,
  qa as az,
  wi as b,
  Jt as b$,
  Qs as b0,
  nn as b1,
  rn as b2,
  sn as b3,
  Oa as b4,
  fn as b5,
  vn as b6,
  hn as b7,
  xn as b8,
  Tn as b9,
  Kn as bA,
  Zn as bB,
  Jn as bC,
  $n as bD,
  Qn as bE,
  eo as bF,
  to as bG,
  Ha as bH,
  ao as bI,
  Ti as bJ,
  ae as bK,
  Bt as bL,
  Et as bM,
  Lt as bN,
  Vt as bO,
  Ot as bP,
  zt as bQ,
  Ht as bR,
  Wt as bS,
  ca as bT,
  Yt as bU,
  Xt as bV,
  Gt as bW,
  _t as bX,
  Ut as bY,
  Kt as bZ,
  Zt as b_,
  kn as ba,
  wn as bb,
  Nn as bc,
  Sn as bd,
  Pn as be,
  Cn as bf,
  qn as bg,
  Dn as bh,
  Mn as bi,
  An as bj,
  jn as bk,
  Rn as bl,
  Fn as bm,
  Bn as bn,
  En as bo,
  Ln as bp,
  Vn as bq,
  On as br,
  zn as bs,
  Hn as bt,
  Wn as bu,
  Yn as bv,
  Xn as bw,
  Gn as bx,
  _n as by,
  Un as bz,
  Ni as c,
  ei as c$,
  $t as c0,
  Qt as c1,
  er as c2,
  ar as c3,
  tr as c4,
  rr as c5,
  ir as c6,
  sr as c7,
  nr as c8,
  or as c9,
  Rr as cA,
  Fr as cB,
  Br as cC,
  la as cD,
  Er as cE,
  Lr as cF,
  Vr as cG,
  Or as cH,
  zr as cI,
  ba as cJ,
  Ia as cK,
  te as cL,
  Hr as cM,
  Wr as cN,
  Yr as cO,
  Xr as cP,
  va as cQ,
  _r as cR,
  Ur as cS,
  fa as cT,
  Gr as cU,
  Kr as cV,
  Zr as cW,
  ha as cX,
  Jr as cY,
  $r as cZ,
  Qr as c_,
  mr as ca,
  pr as cb,
  dr as cc,
  cr as cd,
  lr as ce,
  ur as cf,
  yr as cg,
  gr as ch,
  br as ci,
  Ir as cj,
  fr as ck,
  vr as cl,
  hr as cm,
  xr as cn,
  Tr as co,
  kr as cp,
  wr as cq,
  Nr as cr,
  Sr as cs,
  Pr as ct,
  Cr as cu,
  qr as cv,
  Dr as cw,
  Mr as cx,
  Ar as cy,
  jr as cz,
  Si as d,
  ai as d0,
  ti as d1,
  ii as d2,
  Ta as d3,
  ri as d4,
  si as d5,
  ni as d6,
  oi as d7,
  mi as d8,
  pi as d9,
  lo as dA,
  uo as dB,
  yo as dC,
  st as dD,
  go as dE,
  nt as dF,
  bo as dG,
  mt as dH,
  Io as dI,
  dt as dJ,
  fo as dK,
  vo as dL,
  Z as dM,
  ct as dN,
  ho as dO,
  xo as dP,
  To as dQ,
  ko as dR,
  So as dS,
  di as da,
  ci as db,
  li as dc,
  ui as dd,
  yi as de,
  gi as df,
  bi as dg,
  Ii as dh,
  fi as di,
  vi as dj,
  hi as dk,
  xi as dl,
  ka as dm,
  wo as dn,
  No as dp,
  rt as dq,
  it as dr,
  ro as ds,
  io as dt,
  so as du,
  no as dv,
  oo as dw,
  mo as dx,
  po as dy,
  co as dz,
  Po as e,
  Di as f,
  Ci as g,
  Pi as h,
  Mi as i,
  qi as j,
  jt as k,
  Rt as l,
  Ft as m,
  Ai as n,
  Fi as o,
  Ri as p,
  ji as q,
  Bi as r,
  T as s,
  Ei as t,
  Li as u,
  Vi as v,
  Oi as w,
  zi as x,
  Hi as y,
  Wi as z
};
