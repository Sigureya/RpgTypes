import Se from "ajv";
import { c as He, a as Ye, m } from "./make.es.js";
import { aT as Xe, aX as Ge, aY as _e, aL as Ne, aM as Pe, aN as qe, as as Ue, aw as Ke, ay as Ze, az as $e, X as Je, Y as Qe, a2 as et, H as tt, M as at, V as E, db as D, da as M, dd as A, dc as j, T as V, U as L, C as rt, A as it, bb as st, bc as nt, aI as ot, aJ as mt, d9 as pt, d2 as ct, d6 as dt, d4 as lt } from "./make.es3.js";
const Na = ({ actorId: e = 1, faceIndex: t = 0, faceName: a = "", characterIndex: r = 0, characterName: s = "", battlerName: n = "" } = {}, c = 0) => ({
  code: 322,
  indent: c,
  parameters: [e, s, r, a, t, n]
}), ae = (e, t) => `\\${e}[${t}]`, Pa = (e, t) => t.map((a, r) => ({ text: a, controlChar: ae(e, r) })), qa = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((t) => ({
  char: t[1],
  id: parseInt(t[2], 10)
})), Ca = (e) => e.map((t) => ({ text: t.name, controlChar: ae("N", t.id) })), Da = (e) => e.variables.map((t, a) => ({ text: t || "", controlChar: ae("V", a) })).filter((t) => t.text !== ""), Ma = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Aa = (e = {}) => ({ id: e.id ?? 0, name: e.name ?? "", members: e.members ?? [], pages: e.pages ?? [] }), ja = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Ra = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), ut = (e = {}) => ({
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
}), Fa = 0, Ba = 1, Ea = 2, Va = 3, La = 4, Oa = 5, za = 6, Wa = 7, Ha = 8, Ya = 9, Xa = 10, Ga = 11, _a = 12, Ua = 13, Ka = 14, Za = 15, $a = 16, Ja = 17, Qa = 18, er = 19, tr = 20, ar = 21, rr = 22, ir = 23, sr = 24, nr = 25, or = 26, mr = 27, pr = 28, cr = 29, dr = 30, lr = 31, ur = 32, yr = 33, gr = 34, br = 35, Ir = 36, fr = 37, vr = 38, hr = 39, xr = 40, Tr = 41, wr = 42, kr = 43, Sr = 44, Nr = 45, Pr = ({ id: e = 1, name: t = "", pages: a = [], note: r = "", x: s = 0, y: n = 0 } = {}) => ({
  id: e,
  name: t,
  pages: a,
  note: r,
  x: s,
  y: n
}), yt = ({ characterIndex: e = 0, characterName: t = "", direction: a = 2, pattern: r = 0, tileId: s = 0 } = {}) => ({
  characterIndex: e,
  characterName: t,
  direction: a,
  pattern: r,
  tileId: s
}), qr = ({ list: e = [], conditions: t = ut(), image: a = yt(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 } } = {}) => ({
  conditions: t,
  list: e,
  directionFix: s,
  image: a,
  moveFrequency: r,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Cr = (e = {}) => ({
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
}), Dr = (e = { id: 0 }) => {
  return { name: e.name ?? (t = e.id, t.toString().padStart(3, "0")), id: e.id, expanded: e.expanded ?? !1, order: e.order ?? 0, parentId: e.parentId ?? 0, scrollX: e.scrollX ?? 0, scrollY: e.scrollY ?? 0 };
  var t;
}, gt = {
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
}, Ce = new Se({
  strict: !0
}), bt = Ce.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), It = Ce.compile(gt), Mr = (e) => bt(e), Ar = (e) => It(e), ft = {
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
}, vt = {
  title: "ダメージ",
  options: {}
}, re = (e = {}) => ({ type: e.type ?? 0, elementId: e.elementId ?? 0, formula: e.formula ?? "", variance: e.variance ?? 0, critical: e.critical ?? !1 }), jr = (e = {}) => ({
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
}), Rr = (e) => ({
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
}), Fr = (e = {}) => ({
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
}), Br = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), ht = (e = {}) => ({ dataId: e.dataId ?? 0, denominator: e.denominator ?? 0, kind: e.kind ?? 0 }), Er = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Vr = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => ht())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Lr = (e = {}) => ({
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
}), d = "{name}", P = "{name} * {value}%", ge = "{name} + {value}%", be = "{value}", xt = { title: "特徴", options: {
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
  elementRate: { title: "属性有効度", format: P },
  debuffRate: { title: "弱体有効度", format: P },
  stateRate: { title: "ステート有効度", format: P },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: ge },
  attackSpeed: { title: "攻撃速度補正", format: be },
  attackTimes: {
    title: "攻撃追加回数",
    format: be
  },
  actionPlus: { title: "行動追加", format: P },
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
} }, Tt = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Or = (e, t, a) => {
  const r = He(Tt);
  return Ye(t, a, r, e.pattern, (s) => s.dataId);
}, zr = (e = {}) => ({
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
  damage: re(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Wr = {
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
}, Hr = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Yr = 0, Xr = 1, Gr = 2, Ie = "{name} {value1}%", U = "{value1}% + {value2}", fe = "{name} {value1}ターン", B = "{name}", wt = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: fe },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: fe },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: U },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: B },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: U
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: U },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: B
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: B },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Ie },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: B
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: Ie },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: B }
} }, _r = 0, Ur = (e, t, a) => {
  const r = a.find((n) => n.id === t.dataId), s = r ? r.name : "Unknown Item";
  return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", s);
}, Kr = { title: "アイテム", options: { consumable: "消耗品" } }, Zr = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, $r = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Jr = (e = {}) => ({
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
  damage: re(e.damage ?? {}),
  effects: [],
  price: 0
}), Qr = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: re(e.damage ?? {}),
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
}), ei = "data", ti = "actor", ai = "map", ri = "enemy", ii = "state", si = "skill", ni = "item", oi = "weapon", mi = "armor", pi = "class", ci = "common_event", di = "troop", kt = {
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
}, li = () => ({ rpg: { damage: vt, data: ft, traits: xt, itemEffect: wt }, global: kt }), ui = (e, t = 0) => ({ code: Xe, parameters: [e.actorId, e.name], indent: t }), yi = (e, t = 0) => ({
  code: Ge,
  parameters: [e.actorId, e.nickname],
  indent: t
}), gi = (e, t = 0) => ({ code: _e, parameters: [e.actorId, e.profile], indent: t }), q = { direct: 0, variable: 1 }, bi = (e, t = 0) => ({
  code: Ne,
  indent: t,
  parameters: [...R[e.targetType](e, 0), e.allowDeath]
}), Ii = (e, t = 0) => ({ code: Ne, indent: t, parameters: [...R[e.targetType](e, 1), e.allowDeath] }), fi = (e, t = 0) => ({
  code: qe,
  indent: t,
  parameters: R[e.targetType](e, 0)
}), vi = (e, t = 0) => ({ code: qe, indent: t, parameters: R[e.targetType](e, 1) }), hi = (e, t = 0) => ({ code: Pe, indent: t, parameters: R[e.targetType](e, 0) }), xi = (e, t = 0) => ({
  code: Pe,
  indent: t,
  parameters: R[e.targetType](e, 1)
}), R = {
  direct: (e, t) => [q.direct, e.target, t, q[e.operand.type], e.operand.value],
  variable: (e, t) => [q.variable, e.target, t, q[e.operand.type], e.operand.value],
  each: (e, t) => [q.direct, -1, t, q[e.operand.type], e.operand.value]
}, Ti = (e, t) => w(e, m({
  name: t
})), w = (e, t, a = 0) => ({
  code: e,
  parameters: [m(t)],
  indent: a
}), wi = (e, t = 0) => w(Ue, e, t), ki = (e, t = 0) => w(Ke, e, t), Si = (e, t = 0) => w(Ze, e, t), Ni = (e, t = 0) => w($e, e, t), Pi = (e, t = 0) => w(Je, e, t), qi = (e, t = 0) => w(Qe, e, t), Ci = (e, t = 0) => w(et, e, t), St = {
  plus: 0,
  minus: 1
}, Di = ({ operation: e, time: t }) => ({ code: 124, indent: 0, parameters: [St[e ?? "plus"] ?? 0, t ?? 0] });
function Mi(e, t = 0) {
  return { code: 336, parameters: [e.enemyId, e.newEnemyId], indent: t };
}
const Ai = (e) => ({ enemyId: e[0], newEnemyId: e[1] }), ji = (e, t = 0) => ({ code: 333, indent: t, parameters: [e.enemyIndex, 0, e.stateId] }), Ri = (e, t = 0) => ({
  code: 333,
  indent: t,
  parameters: [e.enemyIndex, 1, e.stateId]
}), Fi = (e, t = 0) => ({ code: 333, indent: t, parameters: [-1, 0, e.stateId] }), Bi = (e, t = 0) => ({ code: 333, indent: t, parameters: [-1, 1, e.stateId] }), Ei = (e, t = 0) => ({
  code: tt,
  indent: t,
  parameters: Nt(e ?? {})
}), Vi = (e) => ({ eventId: e[0] }), Nt = (e) => [e.eventId ?? 0], Li = (e) => ({ min: e[0], max: e[1], value: e[2] }), Pt = (e) => [e.min, e.max, e.value], Oi = (e, t = 0) => ({
  code: at,
  indent: t,
  parameters: Pt(e)
}), zi = (e, t = 0) => ({ code: 103, parameters: [e.variableId, e.maxDigits], indent: t }), Wi = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], Hi = (e) => ({
  variableId: e[0],
  maxDigits: e[1]
}), Yi = (e, t = 0) => ({ code: E, parameters: [e.operation, e.armorId, e.value, e.operand, e.includesEquip], indent: t }), Xi = (e) => ({
  operation: e[0],
  armorId: e[1],
  value: e[2],
  operand: e[3],
  includesEquip: e[4]
}), Gi = (e, t = 0) => ({ code: E, parameters: [D, e.armorId, e.value, M, !1], indent: t }), _i = (e, t = 0) => ({ code: E, parameters: [D, e.armorId, e.variableId, A, !1], indent: t }), Ui = (e, t = 0) => ({
  code: E,
  parameters: [j, e.armorId, e.value, M, !1],
  indent: t
}), Ki = (e, t = 0) => ({ code: E, parameters: [j, e.armorId, e.variableId, A, !1], indent: t }), Zi = (e) => ({
  operation: e[0],
  itemId: e[1],
  value: e[2],
  operand: e[3],
  includesEquip: e[4]
}), $i = (e, t = 0) => ({ code: V, parameters: [e.operation, e.itemId, e.value, e.operand, e.includesEquip], indent: t }), Ji = (e, t = 0) => ({
  code: V,
  parameters: [D, e.itemId, e.value, M, !1],
  indent: t
}), Qi = (e, t = 0) => ({ code: V, parameters: [D, e.itemId, e.variableId, A, !1], indent: t }), es = (e, t = 0) => ({
  code: V,
  parameters: [j, e.itemId, e.value, M, !1],
  indent: t
}), ts = (e, t = 0) => ({ code: V, parameters: [j, e.itemId, e.variableId, A, !1], indent: t }), as = (e) => ({
  operation: e[0],
  weaponId: e[1],
  value: e[2],
  operand: e[3],
  includesEquip: e[4]
}), rs = (e, t = 0) => ({ code: L, indent: t, parameters: [e.operation, e.weaponId, e.value, e.operand, e.includesEquip] }), is = (e, t = 0) => ({
  code: L,
  parameters: [D, e.weaponId, e.value, M, !1],
  indent: t
}), ss = (e, t = 0) => ({ code: L, parameters: [D, e.weaponId, e.variableId, A, !1], indent: t }), ns = (e, t = 0) => ({ code: L, parameters: [j, e.weaponId, e.value, M, !1], indent: t }), os = (e, t = 0) => ({
  code: L,
  parameters: [j, e.weaponId, e.variableId, A, !1],
  indent: t
}), ms = (e, t = 0) => ({ code: 104, parameters: [e.variableId, e.itemType], indent: t }), ps = (e) => ({ variableId: e[0], itemType: e[1] }), cs = (e = 0) => ({
  code: 135,
  parameters: [1],
  indent: e
}), ds = (e = 0) => ({ code: 135, parameters: [0], indent: e }), ls = (e = 0) => ({ code: 134, parameters: [1], indent: e }), us = (e = 0) => ({
  code: 134,
  parameters: [0],
  indent: e
}), ys = (e = 0) => ({ code: 137, parameters: [1], indent: e }), gs = (e = 0) => ({ code: 137, parameters: [0], indent: e }), De = (e) => [e], bs = (e) => ({ comment: e[0] }), qt = (e, t = 0) => ({
  code: rt,
  indent: t,
  parameters: De(e)
}), Ct = (e, t = 0) => ({ code: it, indent: t, parameters: De(e) }), Is = (e, t = 0) => e.map((a, r) => r === 0 ? qt(a, t) : Ct(a, t)), fs = (e, t = 0) => ({
  code: 402,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), vs = (e) => ({ index: e[0], name: e[1] }), hs = (e) => [e.index ?? 0, e.name ?? ""], xs = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Ts = (e) => [e.choices ?? [], e.cancelType ?? 0, e.defaultType ?? 0, e.positionType ?? 2, e.background ?? 0], ws = (e, t = 0) => ({
  code: 102,
  indent: t,
  parameters: [(e == null ? void 0 : e.choices) ?? [], (e == null ? void 0 : e.cancelType) ?? 0, (e == null ? void 0 : e.defaultType) ?? 0, (e == null ? void 0 : e.positionType) ?? 2, (e == null ? void 0 : e.background) ?? 0]
}), ks = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [[...e.parameters[0]], e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
}), Ss = (e, t = 0) => ({ code: 261, indent: t, parameters: [e.filename] }), Ns = (e) => ({
  filename: e[0]
}), Ps = (e, t = 0) => ({ code: 129, parameters: [0, e.actorId], indent: t }), qs = (e, t = 0) => ({
  code: 129,
  parameters: [1, e.actorId],
  indent: t
}), Cs = ({ pictureId: e = 0, origin: t = 0, name: a = "", x: r = 0, y: s = 0, scaleX: n = 100, scaleY: c = 100, opacity: l = 255, blendMode: u = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [e, a, t, r, s, n, c, l, u]
}), Ds = ({ pictureId: e, origin: t, x: a, y: r, scaleX: s, scaleY: n, opacity: c, blendMode: l, wait: u = !1, easingType: I = 0 }) => ({ code: 232, indent: 0, parameters: [e, t, a, r, s, n, c, l, u, I] }), Dt = (e, t = 0) => ({
  code: st,
  indent: t,
  parameters: [e]
}), Mt = (e, t = 0) => ({ code: nt, indent: t, parameters: [e] }), Ms = (e, t = 0) => e.map((a, r) => r === 0 ? Dt(a, t) : Mt(a, t)), As = 1, js = 0, z = {
  item: 0,
  weapon: 1,
  armors: 2
}, Rs = ({ goods: e, buyOnly: t = !1 }, a = 0) => e.map((r, s) => {
  const n = ((c) => c.customPrice !== void 0 && c.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? {
    code: ot,
    indent: a,
    parameters: [z[r.itemType] ?? z.item, r.id, n, r.customPrice ?? 0, t]
  } : { code: mt, indent: a, parameters: [z[r.itemType] ?? z.item, r.id, n, r.customPrice ?? 0] };
}), Fs = 0, Bs = 1, Es = 2, Vs = 3, Ls = 4, At = {
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
}, Os = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 0, t.value], zs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 1, t.variableId], Ws = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 2, t.min, t.max], Hs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 4, t.code], Ys = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, t.type, t.itemId], Xs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 3, t.index, t.param], Gs = (e, t, a = 0) => [e.startId, e.endId ?? e.startId, a, 3, 4, t.index, At[t.param]], _s = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Us = (e, t) => {
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
}, jt = (e) => [...e], Ks = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: jt(e.parameters)
}), Rt = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Zs = (e) => e.parameters.every(Rt), $s = "bgm", Js = "se", Qs = "me", en = "bgs", tn = "battlebacks1", an = "battlebacks2", rn = "characters", sn = "enemies", nn = "faces", on = "parallaxes", mn = "pictures", pn = "sv_actors", cn = "sv_enemies", dn = "system", ln = "tilesets", un = "titles1", yn = "titles2", gn = "System.json", bn = "Actors.json", In = "Classes.json", fn = "Skills.json", vn = "Items.json", hn = "Weapons.json", xn = "Armors.json", Tn = "Enemies.json", wn = "Troops.json", kn = "States.json", Sn = "Animations.json", Nn = "Tilesets.json", Pn = "CommonEvents.json", qn = "MapInfos.json", Cn = "data", Dn = "img", Mn = "audio", An = "js", Me = (e, t) => ({
  type: "array",
  items: t,
  ...h(e),
  ...x(e.default)
}), h = (e) => ({ ...typeof e.text == "string" ? { title: e.text } : {}, ...typeof e.desc == "string" ? { description: e.desc } : {} }), x = (e) => e !== void 0 ? {
  default: e
} : {}, ve = (e) => e === void 0 || e === 0, Ft = (e) => Me(e, { type: "string" }), Bt = (e) => {
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
      return Ft(e);
    case "number[]":
      return ((a) => ({ type: "array", items: {
        type: ve(a.decimals) ? "integer" : "number"
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
      return ((a) => Me(a, { type: "integer" }))(e);
    case "number":
      return ((a) => ({ type: ve(a.decimals) ? "integer" : "number", ...x(a.default), ...h(a) }))(e);
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
}, Ae = (e, t) => Object.entries(t).reduce((a, [r, s]) => {
  if (r in e) {
    const n = e[r];
    if (typeof n == "string") return { ...a, [r]: s(n) };
  }
  return a;
}, {}), T = (e, t, a, r) => ({
  default: t,
  ...Ae(a, r),
  kind: e
}), Y = (e, t, a) => ({ default: [], ...Ae(t, a), kind: e }), je = "help", Q = "kind", K = "text", he = "struct", Re = (e) => {
  const t = JSON.parse(e);
  return Array.isArray(t) ? t.map(X) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, X(r)])) : t;
}, X = (e) => {
  if (typeof e != "string") return e;
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.map(X) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([a, r]) => [a, X(r)])) : t;
  } catch {
    return e;
  }
}, Et = (e) => {
  if (Q in e.attr) {
    const t = Vt[e.attr.kind];
    if (t) return t(e);
  }
  return T("any", "", e.attr, G);
}, o = (e) => e, Fe = (e) => e.replace("[", "").replace("]", "").split(",").map((t) => parseFloat(t.replaceAll('"', "").trim())).filter((t) => !isNaN(t)), G = {
  default: o,
  text: o,
  desc: o,
  parent: o
}, xe = (e) => T("string", "", e.attr, G), Te = (e) => {
  const t = { default: (a) => Re(a), text: o, desc: o, parent: o };
  return Y("string[]", e.attr, t);
}, y = (e, t) => {
  const a = {
    default: Fe,
    text: o,
    desc: o,
    parent: o
  };
  return Y(t, e.attr, a);
}, g = (e, t) => {
  const a = { default: (r) => parseInt(r, 10), text: o, desc: o, parent: o };
  return T(t, 0, e.attr, a);
}, Vt = {
  number: (e) => ((t) => {
    const a = {
      default: (r) => parseFloat(r),
      text: o,
      desc: o,
      decimals: (r) => parseInt(r, 10),
      min: (r) => parseFloat(r),
      max: (r) => parseFloat(r),
      parent: o
    };
    return T("number", 0, t.attr, a);
  })(e),
  "number[]": (e) => {
    const t = { default: Fe, text: o, desc: o, decimals: (a) => parseInt(a, 10), min: (a) => parseFloat(a), max: (a) => parseFloat(a), parent: o };
    return Y("number[]", e.attr, t);
  },
  string: xe,
  "string[]": Te,
  multiline_string: xe,
  "multiline_string[]": Te,
  combo: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => r.option)) ?? [];
    return { ...T("combo", "", e.attr, G), options: t };
  },
  select: (e) => {
    var a;
    const t = ((a = e.options) == null ? void 0 : a.map((r) => ({ option: r.option, value: r.value }))) ?? [];
    return { ...T("select", "", e.attr, G), options: t };
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
      text: o,
      desc: o,
      on: o,
      off: o,
      parent: o
    };
    return T("boolean", !0, e.attr, t);
  },
  file: (e) => {
    const t = { default: o, text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...T("file", "", e.attr, t) };
  },
  "file[]": (e) => {
    const t = { default: (a) => Re(a), text: o, desc: o, parent: o, dir: o };
    return { dir: "", ...Y("file[]", e.attr, t) };
  }
}, Be = "BODY", Ee = "STRUCT", W = "NONE", Lt = (e, t) => {
  const a = e.lines.length > 0 ? ie(e) : e, r = t[1] || void 0;
  return { ...a, structName: r, blockType: r ? Ee : "INVALID", locale: t[2], lines: [] };
}, Ot = (e) => ({
  ...e.lines.length > 0 ? ie(e) : e,
  blockType: Be,
  structName: void 0,
  locale: void 0,
  lines: []
}), ie = (e) => e.blockType === Be ? { ...e, bodies: e.bodies.concat([{ lines: [...e.lines] }]), lines: [], blockType: W } : e.structName && e.blockType === Ee ? {
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
}, zt = (e) => e.currentOption ? { items: e.items.concat({ option: e.currentOption, value: e.currentOption }) } : e, ee = (e) => ({
  ...typeof e.desc == "string" ? { desc: e.desc } : {},
  ...typeof e.text == "string" ? { text: e.text } : {}
}), H = (e) => {
  const t = Wt(e), a = Yt(t);
  return Ht(a);
}, Wt = (e) => {
  if (e.currentParam && e.currentOption) {
    const t = e.currentParam.attr.kind;
    if (t === "select" || t === "combo") return { ...e, currentParam: { ...e.currentParam, options: zt(e.currentOption).items } };
  }
  return e;
}, Ht = (e) => e.currentParam ? {
  ...e,
  params: [...e.params, e.currentParam],
  currentParam: null,
  currentContext: null
} : e, Yt = (e) => {
  if (!e.currentCommand) return e;
  const t = e.currentParam ? [...e.currentCommand.args, e.currentParam] : e.currentCommand.args, a = { ...ee(e.currentCommand), command: e.currentCommand.command, args: t };
  return {
    ...e,
    commands: [...e.commands, a],
    currentCommand: null,
    currentParam: null,
    currentContext: null,
    currentOption: null
  };
}, we = (e, t) => {
  const a = e.lines.reduce((r, s) => {
    const n = s.trim().replace(/^\*\s?/, "");
    if (!n.startsWith("@")) return r.currentContext === je ? { ...r, helpLines: r.helpLines.concat(n) } : r;
    const [c, ...l] = n.slice(1).split(" "), u = l.join(" ").trim(), I = t[c];
    return I ? I(r, u) : r;
  }, Gt());
  return H(a);
}, Xt = (e, t) => {
  const a = ((c) => {
    const l = c.split(`
`), u = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: W
    }, I = l.reduce((f, O) => {
      const k = O.trim(), F = k.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return F ? Lt(f, F) : k === "/*:" ? Ot(f) : k === "*/" ? f.lines.length > 0 ? ie(f) : f : { ...f, lines: f.lines.concat([k]) };
    }, u);
    return { structs: I.structs, bodies: I.bodies };
  })(e), r = a.structs.map((c) => ((l) => {
    const u = we(l, Ve);
    return { name: l.struct, params: u.params };
  })(c)), s = ((c) => {
    if (c.bodies.length !== 0) return c.bodies[0];
  })(a);
  if (!s) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r
  };
  const n = we(s, t);
  return { params: n.params, commands: n.commands, meta: n.meta, helpLines: n.helpLines, structs: r };
}, Gt = () => ({
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
} : e, Z = (e, t, a) => ({ ...e, meta: { [t]: a, ...e.meta } }), Ve = {
  param: (e, t) => {
    const a = H(e);
    return a.params.some((r) => r.name === t) ? a : { ...a, currentContext: "param", currentParam: { name: t, attr: {} } };
  },
  text: (e, t) => e.currentParam ? v(e, K, t) : e.currentCommand && !(K in e.currentCommand) ? { ...e, currentCommand: {
    ...ee(e.currentCommand),
    command: e.currentCommand.command,
    args: e.currentCommand.args,
    [K]: t
  } } : e,
  desc: (e, t) => e.currentParam ? v(e, "desc", t) : e.currentCommand ? { ...e, currentCommand: { ...e.currentCommand, desc: t } } : e,
  command: (e, t) => {
    const a = H(e);
    return a.commands.some((r) => r.command === t) ? a : { ...a, currentCommand: { command: t, args: [] }, currentParam: null };
  },
  arg: (e, t) => {
    if (!e.currentCommand) return e;
    if (e.currentParam) {
      const a = {
        ...ee(e.currentCommand),
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
  help: (e) => ({ ...H(e), currentContext: je }),
  option: (e, t) => {
    if (!e.currentParam) return e;
    const a = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: r.currentOption }), currentOption: s } : { items: r.items, currentOption: s })(e.currentOption ?? {
      items: []
    }, t);
    return { ...e, currentOption: a };
  },
  value: (e, t) => {
    if (!e.currentOption) return e;
    const a = ((r, s) => r.currentOption ? { items: r.items.concat({ option: r.currentOption, value: s }) } : {
      items: r.items
    })(e.currentOption, t);
    return { ...e, currentOption: a };
  },
  type: (e, t) => {
    if (((a) => a.endsWith(">") && a.startsWith("struct<"))(t)) {
      const a = t.slice(7, -1), r = v(e, he, a);
      return v(r, Q, he);
    }
    return e.currentParam ? v(e, Q, t) : e;
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
  author: (e, t) => Z(e, "author", t),
  plugindesc: (e, t) => Z(e, "plugindesc", t),
  url: (e, t) => Z(e, "url", t)
}, _t = (e) => Ut(((t) => Xt(t, Ve))(e)), Ut = (e) => ({
  target: "MZ",
  meta: e.meta,
  commands: Kt(e.commands),
  params: Le(e.params)
}), Le = (e) => e.reduce((t, a) => ({ [a.name]: Et(a), ...t }), {}), Kt = (e) => e.reduce((t, a) => {
  const r = { desc: a.desc, text: a.text, args: Le(a.args) };
  return { [a.command]: r, ...t };
}, {}), jn = (e) => _t(e), Rn = (e) => ((t) => {
  const a = Object.entries(t).reduce((r, [s, n]) => {
    const c = Bt(n);
    return { ...r, [s]: c };
  }, {});
  return {
    type: "object",
    properties: a,
    required: Object.keys(a),
    additionalProperties: !1
  };
})(e), Zt = (e = {}) => ({
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
}), $t = (e = {}) => [m(e.cursor), m(e.ok), m(e.cancel), m(e.buzzer), m(e.equip), m(e.save), m(e.load), m(e.battleStart), m(e.escape), m(e.enemyAttack), m(e.enemyDamage), m(e.enemyCollapse), m(e.bossCollapes1), m(e.bossCollapes2), m(e.actorDamage), m(e.actorCollapse), m(e.playRecovery), m(e.playMiss), m(e.playEvasion), m(e.playMagicEvasion), m(e.playReflection), m(e.shop), m(e.useItem), m(e.useSkill)], Fn = (e) => ({
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
}), Bn = (e) => e.menuCommands[0], En = (e) => e.menuCommands[1], Vn = (e) => e.menuCommands[2], Ln = (e) => e.menuCommands[3], On = (e) => e.menuCommands[4], zn = (e) => e.menuCommands[5], Wn = (e) => e.itemCategories[0], Hn = (e) => e.itemCategories[1], Yn = (e) => e.itemCategories[2], Xn = (e) => e.itemCategories[3], Jt = (e = {}) => [e.item ?? !0, e.weapon ?? !0, e.armor ?? !0, e.keyItem ?? !0], Gn = (e) => ({
  item: e[0],
  weapon: e[1],
  armor: e[2],
  keyItem: e[3]
}), Qt = (e = {}) => [e.item ?? !0, e.skill ?? !0, e.equip ?? !0, e.status ?? !0, e.formation ?? !0, e.save ?? !0], _n = (e) => ({
  item: e[0],
  skill: e[1],
  equip: e[2],
  status: e[3],
  formation: e[4],
  save: e[5]
}), ea = { required: ["itemCategories", "menuCommands"], additionalProperties: !1, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, ta = (e = {}) => ({
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
}), b = { type: "boolean" }, aa = {
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
}, Un = (e = {}) => ({
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  partyMembersArray: e.partyMembersArray ? Array.from(e.partyMembersArray) : [1]
}), ra = (e) => ({
  armorTypes: S(e.armorTypes),
  elements: S(e.elements),
  equipTypes: S(e.equipTypes),
  weaponTypes: S(e.weaponTypes),
  skillTypes: S(e.skillTypes),
  variables: S(e.variables),
  switches: S(e.switches)
}), S = (e) => e ? [...e] : [], Kn = (e) => e.terms.params.map((t, a) => ({
  name: t,
  id: a
})), Zn = (e) => ({ background: e.background ?? 0, offsetX: e.offsetX ?? 0, offsetY: e.offsetY ?? 0 }), $ = (e = {}) => ({
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  bgm: m(e.bgm ?? {}),
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), ia = (e = {}) => ({
  jsonFormatLevel: e.jsonFormatLevel ?? 0,
  messageWidth1: e.messageWidth1 ?? 816,
  messageWidth2: e.messageWidth2 ?? 816
}), $n = { title: "オプション", options: {
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
} }, Jn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Qn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, eo = {
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
}, Oe = { type: "object", additionalProperties: !1, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, ze = {
  additionalProperties: !1,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, We = { additionalProperties: !1, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
  type: "integer"
} } } }, C = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: !1 }, sa = {
  additionalProperties: !1,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: C, victoryMe: C, gameoverMe: C, titleBgm: C, defeatMe: C, sounds: {
    type: "array",
    items: C,
    minItems: 24,
    maxItems: 24
  } }
}, na = { type: "object", additionalProperties: !1, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: !0
}, battleSystem: { type: "number" } } }, oa = { additionalProperties: !1, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, ma = {
  additionalProperties: !1,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, pa = {
  type: "object",
  additionalProperties: !1,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, N = { type: "array", items: { type: "string" } }, ca = {
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
}, p = { type: "string" }, ke = { type: "string", nullable: !0 }, i = { type: "string" }, da = {
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
      items: [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, ke, p, p, ke, p, p],
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
}, la = {
  additionalProperties: !1,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: We },
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
}, ua = { additionalProperties: !1, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
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
  attackMotions: { type: "array", items: Oe }
} }, ya = (e) => e.reduce((t, a) => ({ required: [...t.required, ...a.required], properties: { ...t.properties, ...a.properties } }), {
  required: [],
  properties: {}
}), _ = new Se({ strict: !0 }), ga = ((e) => {
  const t = ya(e);
  return {
    additionalProperties: !1,
    type: "object",
    required: Array.from(new Set(t.required)),
    properties: t.properties
  };
})([ua, sa, na, ea, aa, oa, ze, pa, ca, da, ma, la]), ba = _.compile(ga), to = (e) => ba(e), Ia = _.compile(We);
_.compile(Oe);
const fa = _.compile(ze), ao = (e) => {
  var a, r, s, n, c, l, u, I, f, O, k, F, se, ne, oe, me, pe, ce, de, le, ue, ye;
  const t = ha(e.size);
  return {
    ...ta(e.options),
    currencyUnit: ((a = e.texts) == null ? void 0 : a.currencyUnit) ?? "",
    gameTitle: ((r = e.texts) == null ? void 0 : r.gameTitle) ?? "",
    sounds: $t(e.sounds),
    editor: ia(e.editing),
    advanced: Zt(e.advanced),
    title1Name: ((s = e.images) == null ? void 0 : s.title1Name) ?? "",
    title2Name: ((n = e.images) == null ? void 0 : n.title2Name) ?? "",
    ...ra(e.dataNames ?? {}),
    magicSkills: te([]),
    airship: $((c = e.vehicles) == null ? void 0 : c.airship),
    boat: $((l = e.vehicles) == null ? void 0 : l.boat),
    ship: $((u = e.vehicles) == null ? void 0 : u.ship),
    defeatMe: m((I = e.me) == null ? void 0 : I.defeatMe),
    gameoverMe: m((f = e.me) == null ? void 0 : f.gameoverMe),
    titleBgm: m((O = e.bgm) == null ? void 0 : O.titleBgm),
    tileSize: t.tileSize,
    faceSize: t.faceSize,
    iconSize: t.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((k = e.battleTest) == null ? void 0 : k.battleback1Name) ?? "",
    battleback2Name: ((F = e.battleTest) == null ? void 0 : F.battleback2Name) ?? "",
    testTroopId: ((se = e.battleTest) == null ? void 0 : se.testTroopId) ?? 0,
    testBattlers: xa((ne = e.battleTest) == null ? void 0 : ne.testBattlers, Ta),
    battleBgm: m((oe = e.bgm) == null ? void 0 : oe.battleBgm),
    victoryMe: m((me = e.me) == null ? void 0 : me.victoryMe),
    editMapId: ((pe = e.editorTemporary) == null ? void 0 : pe.editMapId) ?? 0,
    battlerName: ((ce = e.editorTemporary) == null ? void 0 : ce.battlerName) ?? "",
    locale: "",
    startMapId: ((de = e.gameInit) == null ? void 0 : de.startMapId) ?? 0,
    startX: ((le = e.gameInit) == null ? void 0 : le.startX) ?? 0,
    startY: ((ue = e.gameInit) == null ? void 0 : ue.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: va(e.terms ?? {}),
    itemCategories: Jt(e.itemCategories),
    partyMembersArray: te((ye = e.gameInit) == null ? void 0 : ye.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Qt(e.menuComamnds)
  };
}, va = (e) => ({
  basic: lt(e.basic ?? {}),
  commands: dt(e.commands ?? {}),
  params: ct(e.params ?? {}),
  messages: pt(e.messages ?? {})
}), te = (e) => e ? [...e] : [], ha = (e) => ((t) => fa(t))(e) ? {
  tileSize: e.tileSize,
  faceSize: e.faceSize,
  iconSize: e.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, xa = (e, t) => e ? e.map(t) : [], Ta = (e) => ((t) => Ia(t))(e) ? { actorId: e.actorId, equips: te(e.equips), level: e.level } : {
  actorId: 0,
  equips: [],
  level: 1
};
export {
  ps as $,
  Ei as A,
  Vi as B,
  Nt as C,
  Li as D,
  Pt as E,
  Oi as F,
  Hi as G,
  zi as H,
  Wi as I,
  Xi as J,
  Yi as K,
  Gi as L,
  _i as M,
  Ui as N,
  Ki as O,
  Zi as P,
  $i as Q,
  Ji as R,
  Qi as S,
  es as T,
  ts as U,
  as as V,
  rs as W,
  is as X,
  ss as Y,
  ns as Z,
  os as _,
  ui as a,
  un as a$,
  ms as a0,
  ys as a1,
  cs as a2,
  ls as a3,
  gs as a4,
  ds as a5,
  us as a6,
  De as a7,
  bs as a8,
  qt as a9,
  Os as aA,
  zs as aB,
  Ws as aC,
  Hs as aD,
  Ys as aE,
  Xs as aF,
  Gs as aG,
  _s as aH,
  Us as aI,
  jt as aJ,
  Ks as aK,
  Zs as aL,
  $s as aM,
  Js as aN,
  Qs as aO,
  en as aP,
  tn as aQ,
  an as aR,
  rn as aS,
  sn as aT,
  nn as aU,
  on as aV,
  mn as aW,
  pn as aX,
  cn as aY,
  dn as aZ,
  ln as a_,
  Ct as aa,
  Is as ab,
  fs as ac,
  vs as ad,
  hs as ae,
  xs as af,
  Ts as ag,
  ws as ah,
  ks as ai,
  Ns as aj,
  Ss as ak,
  Ps as al,
  qs as am,
  Cs as an,
  Ds as ao,
  Dt as ap,
  Mt as aq,
  Ms as ar,
  As as as,
  js as at,
  Rs as au,
  Fs as av,
  Bs as aw,
  Es as ax,
  Vs as ay,
  Ls as az,
  yi as b,
  lr as b$,
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
  La as bA,
  Oa as bB,
  za as bC,
  Wa as bD,
  Ha as bE,
  Ya as bF,
  Xa as bG,
  Ga as bH,
  _a as bI,
  Ua as bJ,
  Ka as bK,
  Za as bL,
  $a as bM,
  Ja as bN,
  Qa as bO,
  er as bP,
  tr as bQ,
  ar as bR,
  rr as bS,
  ir as bT,
  sr as bU,
  nr as bV,
  or as bW,
  mr as bX,
  pr as bY,
  cr as bZ,
  dr as b_,
  kn as ba,
  Sn as bb,
  Nn as bc,
  Pn as bd,
  qn as be,
  Cn as bf,
  Dn as bg,
  Mn as bh,
  An as bi,
  jn as bj,
  Rn as bk,
  li as bl,
  ae as bm,
  Pa as bn,
  qa as bo,
  Ca as bp,
  Da as bq,
  Ma as br,
  Aa as bs,
  ja as bt,
  Ra as bu,
  ut as bv,
  Fa as bw,
  Ba as bx,
  Ea as by,
  Va as bz,
  gi as c,
  Zt as c$,
  ur as c0,
  yr as c1,
  gr as c2,
  br as c3,
  Ir as c4,
  fr as c5,
  vr as c6,
  hr as c7,
  xr as c8,
  Tr as c9,
  Hr as cA,
  Yr as cB,
  Xr as cC,
  Gr as cD,
  Ur as cE,
  wt as cF,
  _r as cG,
  Kr as cH,
  Zr as cI,
  $r as cJ,
  Jr as cK,
  Qr as cL,
  ei as cM,
  ti as cN,
  ai as cO,
  ri as cP,
  ii as cQ,
  si as cR,
  ni as cS,
  oi as cT,
  mi as cU,
  pi as cV,
  ci as cW,
  di as cX,
  kt as cY,
  to as cZ,
  ao as c_,
  wr as ca,
  kr as cb,
  Sr as cc,
  Nr as cd,
  Pr as ce,
  yt as cf,
  qr as cg,
  Cr as ch,
  Dr as ci,
  Mr as cj,
  Ar as ck,
  ft as cl,
  vt as cm,
  re as cn,
  jr as co,
  Rr as cp,
  Fr as cq,
  Br as cr,
  ht as cs,
  Er as ct,
  Vr as cu,
  Lr as cv,
  Or as cw,
  xt as cx,
  zr as cy,
  Wr as cz,
  bi as d,
  $t as d0,
  Fn as d1,
  Bn as d2,
  En as d3,
  Vn as d4,
  Ln as d5,
  On as d6,
  zn as d7,
  Wn as d8,
  Hn as d9,
  Yn as da,
  Xn as db,
  Jt as dc,
  Gn as dd,
  Qt as de,
  _n as df,
  ta as dg,
  Un as dh,
  ra as di,
  Kn as dj,
  Zn as dk,
  $ as dl,
  ia as dm,
  $n as dn,
  Jn as dp,
  Qn as dq,
  eo as dr,
  hi as e,
  fi as f,
  Ii as g,
  xi as h,
  vi as i,
  Ti as j,
  w as k,
  wi as l,
  Na as m,
  ki as n,
  Si as o,
  Ni as p,
  Pi as q,
  qi as r,
  Ci as s,
  Di as t,
  Ai as u,
  Mi as v,
  Fi as w,
  ji as x,
  Bi as y,
  Ri as z
};
