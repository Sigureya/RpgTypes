"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("ajv"), t = (e2, t2) => `\\${e2}[${t2}]`, a = (e2 = {}) => ({
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
}), r = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), o = {
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
}, i = {
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
      pages: { type: "array", items: o }
    } } }
  }
}, s = new e({ strict: true }), n = s.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), m = s.compile(i), p = (e2, t2) => [d(e2.skills, t2), l(e2.actors, t2), c(e2.states, t2), u(e2.armors, t2), y(e2.classes, t2), x(e2.enemies, t2), g(e2.items, t2), E(e2.weapons, t2), I(e2.commonEvents, t2)], d = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), l = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), c = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), u = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), y = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), x = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), g = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), E = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), I = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), A = {
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
  armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } },
  enemy: { title: "敵キャラ", options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" } },
  item: { title: "アイテム", options: { consumable: "消耗品" } },
  skill: { title: "スキル", options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  } },
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
  usableItem: { title: "", options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  } },
  commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } }
}, T = { title: "ダメージ", options: {} }, _ = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), b = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), R = (e2, t2) => ({ items: S(e2.options, t2), label: e2.title, source: { author: "rmmz", module: "trait", kind: "collaps" } }), S = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, {
  id: 2,
  name: e2.instantCollaps
}, { id: 3, name: e2.noneCollaps }], C = (e2) => ({ items: f(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), f = (e2) => [{ id: 0, name: e2.hitRate }, {
  id: 1,
  name: e2.evasionRate
}, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, {
  id: 6,
  name: e2.counterAttackRate
}, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], N = (e2) => ({ items: h(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "params"
} }), h = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, {
  id: 6,
  name: e2.agi
}, { id: 7, name: e2.luk }], v = (e2) => ({ items: k(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), k = (e2) => [{ id: 0, name: e2.targetRate }, {
  id: 1,
  name: e2.guardEffectRate
}, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, {
  id: 7,
  name: e2.magicDamageRate
}, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], P = (e2) => ({ items: O(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), O = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, {
  id: 5,
  name: e2.dropItemDouble
}], M = (e2) => ({ items: L(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), L = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], D = "{name}", F = "{name} * {value}%", w = "{name} + {value}%", H = "{value}", B = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: F, options: {
      maxHp: "最大HP",
      maxMp: "最大MP",
      atk: "攻撃力",
      def: "防御力",
      matk: "魔法攻撃力",
      mdef: "魔法防御力",
      agi: "敏捷性",
      luk: "運"
    } },
    extraParam: { title: "追加能力値", format: w, options: {
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
    specialParam: { title: "特殊能力値", format: F, options: {
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
      format: D,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: D, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: D, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: F },
    debuffRate: { title: "弱体有効度", format: F },
    stateRate: { title: "ステート有効度", format: F },
    stateResist: {
      title: "ステート無効",
      format: D
    },
    attackElement: { title: "攻撃属性", format: D },
    attackState: { title: "攻撃ステート", format: w },
    attackSpeed: { title: "攻撃速度補正", format: H },
    attackTimes: { title: "攻撃追加回数", format: H },
    actionPlus: { title: "行動追加", format: F },
    attackSkill: { title: "攻撃スキル", format: D },
    equipWeaponType: { title: "装備武器タイプ", format: D },
    equipArmorType: { title: "装備防具タイプ", format: D },
    equipLock: {
      title: "装備固定",
      format: D
    },
    equipSeal: { title: "装備封印", format: D },
    slotType: { title: "スロットタイプ", format: D },
    skillAdd: { title: "スキル追加", format: D },
    skillSeal: { title: "スキルタイプ封印", format: D },
    skillTypeAdd: {
      title: "スキルタイプ追加",
      format: D
    },
    skillTypeSeal: { title: "スキルタイプ封印", format: D }
  }
}, G = (e2, t2) => [N(e2.regularParam), C(e2.extraParam), v(e2.specialParam), R(e2.collaps, t2), M(e2.specialFlag), P(e2.partyAbility)], U = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), q = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), V = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, j = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, z = (e2, t2 = []) => {
  return {
    itemMappers: [...j(e2), ...t2].map(W),
    fallbackFormat: { text: Y(e2), label: K(e2) },
    properties: (a2 = e2.placeHolder ?? {}, { numbers: a2.numbers ? U(a2.numbers) : [], strings: a2.strings ? U(a2.strings) : [] }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(q) : []
  };
  var a2;
}, W = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Y = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, K = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, X = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, $ = (e2, t2, a2, r2) => {
  const o2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), i2 = ((e3) => {
    var _a2, _b, _c, _d;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...e3.itemMapper ? [e3.itemMapper.placeHolder] : [], ...((_b = e3.itemMappers) == null ? void 0 : _b.map((e4) => e4.placeHolder)) ?? [], ...((_c = e3.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d = e3.arrayIndex) == null ? void 0 : _d.map((e4) => e4.dataIdKey)) ?? []]);
  })(t2);
  return o2.reduce((e3, t3) => {
    const o3 = t3[1];
    return 0 === o3.length ? e3 : o3.length > r2 ? (e3.push({ message: a2.longPlaceHolder, reason: o3.slice(0, r2) }), e3) : (i2.has(o3) || e3.push({
      message: a2.extraPlaceHolder,
      reason: o3
    }), e3);
  }, []);
}, J = (e2, t2, a2) => j(t2).reduce((t3, r2) => {
  const o2 = Z(e2, r2, a2);
  return o2 && t3.push(o2), t3;
}, []), Z = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), o2 = !!e2.dataSource;
  return !r2 && o2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !o2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Q = (e2, t2) => {
  const a2 = ae(t2);
  return e2.reduce((e3, t3) => {
    const r2 = ee(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, ee = (e2, t2) => {
  const a2 = te(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, te = (e2, t2) => {
  if (e2) return t2.get(V(e2));
}, ae = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: re(t2.items), source: t2.source, label: t2.label };
  return e3.set(V(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), re = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), oe = (e2, t2, a2, r2, o2) => {
  const i2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => X(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => X(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? ie(i2, e2, a2, t2, o2) : i2;
}, ie = (e2, t2, a2, r2, o2) => {
  const i2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, o2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, i2), e2);
}, se = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, ne = (e2) => [de(e2), le(e2), ce(e2), ue(e2), ye(e2), xe(e2), ge(e2), Ee(e2), Ie(e2), pe(e2), Ae(e2), Te(e2), _e(e2)], me = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), pe = (e2) => me(41, e2.special), de = (e2) => me(11, e2.recoverHp), le = (e2) => me(12, e2.recoverMp), ce = (e2) => me(13, e2.gainTp), ue = (e2) => me(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), ye = (e2) => me(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), xe = (e2) => me(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), ge = (e2) => me(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Ee = (e2) => me(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), Ie = (e2) => me(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Ae = (e2) => me(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), Te = (e2) => me(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), _e = (e2) => me(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), be = "{name} {value1}%", Re = "{value1}% + {value2}", Se = "{name} {value1}ターン", Ce = "{name}", fe = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Se
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Se }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Re }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Ce }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: Re
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: Re
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: Ce }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: Ce
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: be }, special: { desc: "特殊効果", domainName: "特殊効果", format: Ce }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: be
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Ce } } }, Ne = { type: "integer" }, he = { type: "integer", minimum: 0 }, ve = {
  type: "string"
}, ke = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: he, formula: ve, variance: Ne, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, Pe = {
  type: "object",
  properties: { code: Ne, dataId: he, value1: Ne, value2: Ne },
  required: ["code", "dataId", "value1", "value2"],
  additionalProperties: false
}, Oe = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: ve,
    id: he,
    description: ve,
    iconIndex: he,
    message1: ve,
    message2: ve,
    messageType: he,
    mpCost: Ne,
    requiredWtypeId1: he,
    requiredWtypeId2: he,
    stypeId: he,
    tpCost: Ne,
    animationId: he,
    hitType: he,
    occasion: { type: "integer" },
    repeats: he,
    scope: Ne,
    speed: Ne,
    successRate: Ne,
    tpGain: Ne,
    note: ve,
    effects: { type: "array", items: Pe },
    damage: ke
  },
  additionalProperties: false
}, Me = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: ve, id: he, description: ve, iconIndex: he, note: ve, animationId: he, hitType: Ne, occasion: Ne, repeats: Ne, scope: Ne, speed: Ne, successRate: Ne, tpGain: Ne, consumable: {
    type: "boolean"
  }, price: he, itypeId: he, effects: { type: "array", items: Pe }, damage: ke }
}, Le = new e({ strict: true }), De = Le.compile(Me), Fe = Le.compile(Oe), we = Le.compile({
  type: "object",
  required: ["name", "id", "nickname", "battlerName", "characterName", "characterIndex", "faceName", "faceIndex", "classId", "initialLevel", "maxLevel"],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: {
      type: "integer",
      minimum: 0
    },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
      type: "integer"
    } }, required: ["code", "dataId", "value"] } }
  }
}), He = Le.compile({
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: {
      type: "string"
    },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }],
      minItems: 8,
      maxItems: 8
    },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } }
  }
}), Be = Le.compile({ type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
  name: { type: "string" },
  id: {
    type: "integer",
    minimum: 0
  },
  description: { type: "string" },
  iconIndex: { type: "integer", minimum: 0 },
  price: { type: "integer", minimum: 0 },
  note: { type: "string" },
  etypeId: { type: "integer", minimum: 0 },
  wtypeId: { type: "integer", minimum: 0 },
  animationId: { type: "integer", minimum: 0 },
  params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
  damage: {
    type: "object",
    properties: { type: { type: "integer", minimum: 0 }, elementId: {
      type: "integer",
      minimum: 0
    }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  },
  traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } }
} }), Ge = Le.compile({
  type: "object",
  required: ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: { type: "array", items: [{
      type: "integer"
    }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    actions: {
      type: "array",
      items: { type: "object", required: ["conditionParam1", "conditionParam2", "conditionType", "skillId", "rating"], properties: { conditionParam1: { type: "integer" }, conditionParam2: {
        type: "integer"
      }, conditionType: { type: "integer" }, skillId: { type: "integer" }, rating: { type: "integer" } } }
    },
    traits: { type: "array", items: { type: "object", properties: {
      code: { type: "integer" },
      dataId: { type: "integer" },
      value: { type: "integer" }
    }, required: ["code", "dataId", "value"] } },
    dropItems: { type: "array", items: { type: "object", properties: { kind: { type: "integer" }, dataId: {
      type: "integer"
    }, denominator: { type: "integer", minimum: 0 }, rate: { type: "number" } }, required: ["kind", "dataId", "denominator"] } }
  }
}), Ue = Le.compile({
  type: "object",
  required: ["name", "id", "iconIndex", "message1", "message2", "message3", "message4", "restriction", "priority", "motion", "overlay", "removeAtBattleEnd", "removeByDamage", "removeByWalking", "removeByRestriction", "autoRemovalTiming", "minTurns", "maxTurns", "chanceByDamage", "stepsToRemove", "note"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    message3: { type: "string" },
    message4: { type: "string" },
    restriction: { type: "integer" },
    priority: { type: "integer" },
    motion: { type: "integer" },
    overlay: { type: "integer" },
    removeAtBattleEnd: { type: "boolean" },
    removeByDamage: {
      type: "boolean"
    },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: {
      type: "integer"
    },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: { type: "array", items: {
      type: "object",
      properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
      required: ["code", "dataId", "value"]
    } }
  }
}), qe = Le.compile({
  type: "object",
  required: ["name", "id", "note", "expParams", "params", "learnings", "traits"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, note: { type: "string" }, expParams: {
    type: "array",
    items: { type: "integer" }
  }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }], minItems: 8, maxItems: 8 }, learnings: { type: "array", items: {
    type: "object",
    properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: { type: "string" } },
    required: ["level", "skillId"],
    additionalProperties: false
  } }, traits: { type: "array", items: {
    type: "object",
    properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
    required: ["code", "dataId", "value"],
    additionalProperties: false
  } } },
  additionalProperties: false
}), Ve = (e2, t2) => `<${e2}:${t2}>`, je = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, ze = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, We = (e2) => [Ye(e2.elementRate), Ke(e2.debuffRate), Xe(e2.stateRate), $e(e2.stateResist), Je(e2.regularParam), Ze(e2.extraParam), Qe(e2.specialParam), et(e2.attackElement), tt(e2.attackState), at(e2.attackSpeed), rt(e2.attackTimes), ot(e2.attackSkill), it(e2.skillTypeAdd), st(e2.skillTypeSeal), nt(e2.skillAdd), mt(e2.skillSeal), pt(e2.equipWeaponType), dt(e2.equipArmorType), lt(e2.equipLock), ct(e2.equipSeal), ut(e2.slotType), yt(e2.actionPlus), xt(e2.specialFlag), gt(e2.collaps), Et(e2.partyAbility)], Ye = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: Tt()
}), Ke = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Xe = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: It()
}), $e = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: It() }), Je = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Ze = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Qe = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), et = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: Tt() }), tt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: It()
}), at = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), rt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), ot = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: At()
}), it = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: _t() }), st = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: _t()
}), nt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: At() }), mt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: At() }), pt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: bt()
}), dt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: Rt() }), lt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: St()
}), ct = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: St() }), ut = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: St() }), yt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), xt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), gt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Et = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), It = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), At = () => ({ author: "rmmz", module: "data", kind: "skill" }), Tt = () => ({ author: "rmmz", module: "system", kind: "elements" }), _t = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), bt = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Rt = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), St = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Ct = {
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
}, ft = (e2 = {}) => ({
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
}), Nt = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), ht = (e2 = {}) => [Nt(e2.cursor), Nt(e2.ok), Nt(e2.cancel), Nt(e2.buzzer), Nt(e2.equip), Nt(e2.save), Nt(e2.load), Nt(e2.battleStart), Nt(e2.escape), Nt(e2.enemyAttack), Nt(e2.enemyDamage), Nt(e2.enemyCollapse), Nt(e2.bossCollapes1), Nt(e2.bossCollapes2), Nt(e2.actorDamage), Nt(e2.actorCollapse), Nt(e2.playRecovery), Nt(e2.playMiss), Nt(e2.playEvasion), Nt(e2.playMagicEvasion), Nt(e2.playReflection), Nt(e2.shop), Nt(e2.useItem), Nt(e2.useSkill)], vt = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], kt = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Pt = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: { type: "array", maxItems: 4, minItems: 4, items: { type: "boolean" } },
    menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } }
  }
}, Ot = (e2 = {}) => ({
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
}), Mt = {
  type: "boolean"
}, Lt = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Mt,
    optDisplayTp: Mt,
    optDrawTitle: Mt,
    optExtraExp: Mt,
    optFloorDeath: Mt,
    optFollowers: Mt,
    optKeyItemsNumber: Mt,
    optSideView: Mt,
    optSlipDeath: Mt,
    optTransparent: Mt,
    optMessageSkip: Mt,
    optSplashScreen: Mt
  }
}, Dt = (e2, t2) => ({
  name: e2,
  id: t2
}), Ft = (e2) => e2.variables.map(Dt), wt = (e2) => e2.elements.map(Dt), Ht = (e2) => e2.equipTypes.map(Dt), Bt = (e2) => e2.skillTypes.map(Dt), Gt = (e2) => e2.weaponTypes.map(Dt), Ut = (e2) => e2.armorTypes.map(Dt), qt = (e2) => e2.switches.map(Dt), Vt = (e2, t2) => [zt(e2, t2), Wt(e2, t2), $t(e2, t2), Yt(e2, t2), jt(e2, t2), Kt(e2, t2), Xt(e2, t2)], jt = (e2, t2) => ({
  items: Ut(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), zt = (e2, t2) => ({ items: wt(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Wt = (e2, t2) => ({ items: Ht(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Yt = (e2, t2) => ({
  items: Bt(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Kt = (e2, t2) => ({ items: Ft(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Xt = (e2, t2) => ({ items: qt(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), $t = (e2, t2) => ({
  items: Gt(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Jt = (e2) => ({
  armorTypes: Zt(e2.armorTypes),
  elements: Zt(e2.elements),
  equipTypes: Zt(e2.equipTypes),
  weaponTypes: Zt(e2.weaponTypes),
  skillTypes: Zt(e2.skillTypes),
  variables: Zt(e2.variables),
  switches: Zt(e2.switches)
}), Zt = (e2) => e2 ? [...e2] : [], Qt = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], ea = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: Nt(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), ta = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), aa = { type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: {
  type: "number"
}, weaponImageId: { type: "number" } } }, ra = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, oa = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: {
  type: "integer"
}, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: { type: "integer" } } } }, ia = { type: "object", properties: {
  name: { type: "string" },
  volume: { type: "integer", minimum: 0, maximum: 100 },
  pitch: { type: "integer", minimum: 0, maximum: 100 },
  pan: { type: "integer", minimum: -100, maximum: 100 }
}, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, sa = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: {
    battleBgm: ia,
    victoryMe: ia,
    gameoverMe: ia,
    titleBgm: ia,
    defeatMe: ia,
    sounds: { type: "array", items: ia, minItems: 24, maxItems: 24 }
  }
}, na = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: {
  magicSkills: { type: "array", items: { type: "number" }, minItems: 0, uniqueItems: true },
  battleSystem: { type: "number" }
} }, ma = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: {
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0 },
    startY: { type: "integer", minimum: 0 },
    partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
  }
}, pa = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: {
  type: "string"
}, title2Name: { type: "string" } } }, da = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: {
  type: "number"
}, windowTone: { type: "array", items: { type: "number" }, minItems: 4, maxItems: 4 } } }, la = { type: "array", items: { type: "string" } }, ca = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: la,
    skillTypes: la,
    elements: la,
    variables: la,
    equipTypes: la,
    switches: la,
    armorTypes: la
  }
}, ua = { type: "string" }, ya = { type: "string", nullable: true }, xa = { type: "string" }, ga = {
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
        actionFailure: xa,
        actorDamage: xa,
        actorNoDamage: xa,
        actorRecovery: xa,
        actorGain: xa,
        actorLoss: xa,
        actorDrain: xa,
        alwaysDash: xa,
        bgmVolume: xa,
        bgsVolume: xa,
        commandRemember: xa,
        criticalToActor: xa,
        criticalToEnemy: xa,
        counterAttack: xa,
        debuffAdd: xa,
        defeat: xa,
        enemyDamage: xa,
        enemyNoDamage: xa,
        enemyRecovery: xa,
        enemyGain: xa,
        enemyLoss: xa,
        enemyDrain: xa,
        evasion: xa,
        expNext: xa,
        expTotal: xa,
        escapeFailure: xa,
        escapeStart: xa,
        file: xa,
        loadMessage: xa,
        meVolume: xa,
        magicEvasion: xa,
        magicReflection: xa,
        obtainExp: xa,
        obtainGold: xa,
        obtainItem: xa,
        obtainSkill: xa,
        partyName: xa,
        preemptive: xa,
        saveMessage: xa,
        seVolume: xa,
        substitute: xa,
        touchUI: xa,
        victory: xa,
        useItem: xa,
        buffAdd: xa,
        buffRemove: xa,
        actorNoHit: xa,
        enemyNoHit: xa,
        autosave: xa,
        emerge: xa,
        levelUp: xa,
        possession: xa,
        surprise: xa
      }
    }, commands: {
      type: "array",
      items: [ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ua, ya, ua, ua, ya, ua, ua],
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
}, Ea = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: oa },
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
}, Ia = {
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
}, Aa = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: Ia,
  boat: Ia,
  ship: Ia,
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
  attackMotions: { type: "array", items: aa }
} }, Ta = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), _a = new e({ strict: true }), ba = ((e2) => {
  const t2 = Ta(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([Aa, sa, na, Pt, Lt, ma, ra, da, ca, ga, pa, Ea]), Ra = _a.compile(ba), Sa = _a.compile(oa);
_a.compile(aa);
const Ca = _a.compile(ra), fa = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], Na = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], ha = (e2, t2) => "string" == typeof e2 ? e2 : t2, va = (e2) => {
  return { basic: fa(e2.basic ?? {}), commands: (a2 = e2.commands ?? {}, Na(a2, "")), params: Qt(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: ha(t2.actionFailure, "Action failed."),
    actorDamage: ha(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: ha(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: ha(t2.actorGain, "%1 gained %2."),
    actorLoss: ha(t2.actorLoss, "%1 lost %2."),
    actorDrain: ha(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: ha(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: ha(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: ha(t2.alwaysDash, "Always dash."),
    bgmVolume: ha(t2.bgmVolume, "BGM volume"),
    bgsVolume: ha(t2.bgsVolume, "BGS volume"),
    commandRemember: ha(t2.commandRemember, "Command remember."),
    criticalToActor: ha(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: ha(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: ha(t2.counterAttack, "%1 countered!"),
    debuffAdd: ha(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: ha(t2.defeat, "Defeat."),
    enemyDamage: ha(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: ha(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: ha(t2.enemyGain, "%1 gained %2."),
    enemyLoss: ha(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: ha(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: ha(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: ha(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: ha(t2.evasion, "%1 evaded the attack!"),
    autosave: ha(t2.autosave, "Autosave"),
    escapeFailure: ha(t2.escapeFailure, "Escape failed."),
    escapeStart: ha(t2.escapeStart, "%1 started to escape!"),
    emerge: ha(t2.emerge, "%1 appeared!"),
    expNext: ha(t2.expNext, "Next level in %1 EXP."),
    expTotal: ha(t2.expTotal, "Total EXP: %1"),
    file: ha(t2.file, "File"),
    buffAdd: ha(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: ha(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: ha(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: ha(t2.obtainGold, "%1 gold obtained."),
    obtainItem: ha(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: ha(t2.obtainSkill, "%1 learned %2."),
    levelUp: ha(t2.levelUp, "%1 leveled up!"),
    partyName: ha(t2.partyName, "Party"),
    loadMessage: ha(t2.loadMessage, "Load %1?"),
    meVolume: ha(t2.meVolume, "ME volume"),
    possession: ha(t2.possession, "Possession"),
    preemptive: ha(t2.preemptive, "%1 attacked first!"),
    saveMessage: ha(t2.saveMessage, "Save %1?"),
    seVolume: ha(t2.seVolume, "SE volume"),
    magicEvasion: ha(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: ha(t2.magicReflection, "%1 reflected the magic!"),
    substitute: ha(t2.substitute, "%1 took the hit!"),
    surprise: ha(t2.surprise, "%1 surprised the enemy!"),
    touchUI: ha(t2.touchUI, "Touch UI"),
    useItem: ha(t2.useItem, "%1 used %2."),
    victory: ha(t2.victory, "Victory!")
  }) };
  var t2, a2;
}, ka = (e2) => e2 ? [...e2] : [], Pa = (e2) => ((e3) => Ca(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Oa = (e2, t2) => e2 ? e2.map(t2) : [], Ma = (e2) => ((e3) => Sa(e3))(e2) ? { actorId: e2.actorId, equips: ka(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, La = (e2, t2, a2 = 0) => ({ code: e2, parameters: [Nt(t2)], indent: a2 }), Da = (e2) => [e2.eventId ?? 0], Fa = (e2) => [e2.min, e2.max, e2.value], wa = (e2) => [e2], Ha = (e2, t2 = 0) => ({
  code: 108,
  indent: t2,
  parameters: wa(e2)
}), Ba = (e2, t2 = 0) => ({ code: 408, indent: t2, parameters: wa(e2) }), Ga = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Ua = (e2, t2 = 0) => ({ code: 355, indent: t2, parameters: [e2] }), qa = (e2, t2 = 0) => ({
  code: 655,
  indent: t2,
  parameters: [e2]
}), Va = {
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
}, ja = (e2) => [...e2], za = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Wa = new e({ strict: true }), Ya = Wa.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), Ka = Wa.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "boolean" }]
} }, required: ["code", "indent", "parameters"] }), Xa = Wa.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [132, 133, 139, 241, 245, 249, 250]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "object", properties: {
    name: { type: "string" },
    volume: { type: "integer" },
    pitch: { type: "integer" },
    pan: { type: "integer" }
  }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }] } },
  additionalProperties: false
}), $a = (e2) => Xa(e2), Ja = Wa.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: false }), Za = Wa.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Qa = (e2) => Za(e2), er = Wa.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), tr = Wa.compile({ type: "object", properties: {
  code: { type: "number", const: 102 },
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }] }
}, required: ["code", "indent", "parameters"] }), ar = Wa.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), rr = Wa.compile({
  type: "object",
  properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), or = Wa.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, {
  type: "string"
}], minItems: 5, maxItems: 5 } } }), ir = (e2, t2) => ({ type: "array", items: t2, ...sr(e2), ...nr(e2.default) }), sr = (e2) => ({
  ..."string" == typeof e2.text ? { title: e2.text } : {},
  ..."string" == typeof e2.desc ? { description: e2.desc } : {}
}), nr = (e2) => void 0 !== e2 ? { default: e2 } : {}, mr = (e2) => void 0 === e2 || 0 === e2, pr = (e2) => ir(e2, { type: "string" }), dr = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({ type: "string", ...sr(e3), ...nr(e3.default) }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...nr(e3.default), ...sr(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...nr(e3.default), ...sr(e3), ...e3.options ? { enum: e3.options.map((e4) => e4.value) } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return pr(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: { type: mr(e3.decimals) ? "integer" : "number" }, ...nr(e3.default), ...sr(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => ir(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({
        type: mr(e3.decimals) ? "integer" : "number",
        ...nr(e3.default),
        ...sr(e3)
      }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({
        type: "integer",
        ...nr(e3.default),
        ...sr(e3)
      }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...nr(e3.default), ...sr(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...sr(t2) };
    default:
      return {};
  }
  var t2;
}, lr = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const o2 = e2[a2];
    if ("string" == typeof o2) return { ...t3, [a2]: r2(o2) };
  }
  return t3;
}, {}), cr = (e2, t2, a2, r2) => ({
  default: t2,
  ...lr(a2, r2),
  kind: e2
}), ur = (e2, t2, a2) => ({ default: [], ...lr(t2, a2), kind: e2 }), yr = "help", xr = "kind", gr = "text", Er = "struct", Ir = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(Ar) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Ar(t3)])) : t2;
}, Ar = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(Ar) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Ar(t3)])) : t2;
  } catch {
    return e2;
  }
}, Tr = (e2) => {
  if (xr in e2.attr) {
    const t2 = hr[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return cr("any", "", e2.attr, Rr);
}, _r = (e2) => e2, br = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), Rr = {
  default: _r,
  text: _r,
  desc: _r,
  parent: _r
}, Sr = (e2) => cr("string", "", e2.attr, Rr), Cr = (e2) => {
  const t2 = { default: (e3) => Ir(e3), text: _r, desc: _r, parent: _r };
  return ur("string[]", e2.attr, t2);
}, fr = (e2, t2) => {
  const a2 = {
    default: br,
    text: _r,
    desc: _r,
    parent: _r
  };
  return ur(t2, e2.attr, a2);
}, Nr = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: _r, desc: _r, parent: _r };
  return cr(t2, 0, e2.attr, a2);
}, hr = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: _r,
      desc: _r,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: _r
    };
    return cr("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: br, text: _r, desc: _r, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: _r };
    return ur("number[]", e2.attr, t2);
  },
  string: Sr,
  "string[]": Cr,
  multiline_string: Sr,
  "multiline_string[]": Cr,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...cr("combo", "", e2.attr, Rr), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...cr("select", "", e2.attr, Rr), options: t2 };
  },
  actor: (e2) => Nr(e2, "actor"),
  "actor[]": (e2) => fr(e2, "actor[]"),
  class: (e2) => Nr(e2, "class"),
  "class[]": (e2) => fr(e2, "class[]"),
  skill: (e2) => Nr(e2, "skill"),
  "skill[]": (e2) => fr(e2, "skill[]"),
  item: (e2) => Nr(e2, "item"),
  "item[]": (e2) => fr(e2, "item[]"),
  weapon: (e2) => Nr(e2, "weapon"),
  "weapon[]": (e2) => fr(e2, "weapon[]"),
  armor: (e2) => Nr(e2, "armor"),
  "armor[]": (e2) => fr(e2, "armor[]"),
  state: (e2) => Nr(e2, "state"),
  "state[]": (e2) => fr(e2, "state[]"),
  enemy: (e2) => Nr(e2, "enemy"),
  "enemy[]": (e2) => fr(e2, "enemy[]"),
  common_event: (e2) => Nr(e2, "common_event"),
  "common_event[]": (e2) => fr(e2, "common_event[]"),
  switch: (e2) => Nr(e2, "switch"),
  "switch[]": (e2) => fr(e2, "switch[]"),
  variable: (e2) => Nr(e2, "variable"),
  "variable[]": (e2) => fr(e2, "variable[]"),
  troop: (e2) => Nr(e2, "troop"),
  "troop[]": (e2) => fr(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: _r,
      desc: _r,
      on: _r,
      off: _r,
      parent: _r
    };
    return cr("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: _r, text: _r, desc: _r, parent: _r, dir: _r };
    return { dir: "", ...cr("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => Ir(e3), text: _r, desc: _r, parent: _r, dir: _r };
    return { dir: "", ...ur("file[]", e2.attr, t2) };
  }
}, vr = "BODY", kr = "STRUCT", Pr = "NONE", Or = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? Lr(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? kr : "INVALID", locale: t2[2], lines: [] };
}, Mr = (e2) => ({
  ...e2.lines.length > 0 ? Lr(e2) : e2,
  blockType: vr,
  structName: void 0,
  locale: void 0,
  lines: []
}), Lr = (e2) => e2.blockType === vr ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Pr } : e2.structName && e2.blockType === kr ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Pr,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Pr,
  structName: void 0,
  lines: []
}, Dr = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, Fr = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), wr = (e2) => {
  const t2 = Hr(e2), a2 = Gr(t2);
  return Br(a2);
}, Hr = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: Dr(e2.currentOption).items } };
  }
  return e2;
}, Br = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Gr = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...Fr(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, Ur = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === yr ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [o2, ...i2] = r2.slice(1).split(" "), s2 = i2.join(" ").trim(), n2 = t2[o2];
    return n2 ? n2(e3, s2) : e3;
  }, Vr());
  return wr(a2);
}, qr = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Pr
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? Or(e4, r4) : "/*:" === a4 ? Mr(e4) : "*/" === a4 ? e4.lines.length > 0 ? Lr(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Ur(e4, Wr);
    return { name: e4.struct, params: t3.params };
  })(e3)), o2 = ((e3) => {
    if (0 !== e3.bodies.length) return e3.bodies[0];
  })(a2);
  if (!o2) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r2
  };
  const i2 = Ur(o2, t2);
  return { params: i2.params, commands: i2.commands, meta: i2.meta, helpLines: i2.helpLines, structs: r2 };
}, Vr = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), jr = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, zr = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), Wr = {
  param: (e2, t2) => {
    const a2 = wr(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? jr(e2, gr, t2) : e2.currentCommand && !(gr in e2.currentCommand) ? { ...e2, currentCommand: {
    ...Fr(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [gr]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? jr(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = wr(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...Fr(e2.currentCommand),
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
  help: (e2) => ({ ...wr(e2), currentContext: yr }),
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
      const a2 = t2.slice(7, -1), r2 = jr(e2, Er, a2);
      return jr(r2, xr, Er);
    }
    return e2.currentParam ? jr(e2, xr, t2) : e2;
  },
  default: (e2, t2) => jr(e2, "default", t2),
  on: (e2, t2) => jr(e2, "on", t2),
  off: (e2, t2) => jr(e2, "off", t2),
  min: (e2, t2) => jr(e2, "min", t2),
  max: (e2, t2) => jr(e2, "max", t2),
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
  author: (e2, t2) => zr(e2, "author", t2),
  plugindesc: (e2, t2) => zr(e2, "plugindesc", t2),
  url: (e2, t2) => zr(e2, "url", t2)
}, Yr = (e2) => Kr(((e3) => qr(e3, Wr))(e2)), Kr = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: $r(e2.commands),
  params: Xr(e2.params)
}), Xr = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: Tr(t2), ...e3 }), {}), $r = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: Xr(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {});
exports.ABORT_BATTLE = 340, exports.AUTHOR_RMMZ = "rmmz", exports.BATTLE_PROCESSING = 301, exports.CHANGE_ACTOR_IMAGES = 322, exports.CHANGE_ARMORS = 128, exports.CHANGE_BATTLE_BACKGROUND = 283, exports.CHANGE_BATTLE_BGM = 132, exports.CHANGE_CLASS = 321, exports.CHANGE_DEFEAT_ME = 139, exports.CHANGE_ENCOUNTER = 136, exports.CHANGE_ENEMY_HP = 331, exports.CHANGE_ENEMY_MP = 332, exports.CHANGE_ENEMY_STATE = 333, exports.CHANGE_ENEMY_TP = 342, exports.CHANGE_EXP = 315, exports.CHANGE_FORMATION_ACCESS = 137, exports.CHANGE_GOLD = 125, exports.CHANGE_HP = 311, exports.CHANGE_ITEMS = 126, exports.CHANGE_MENU_ACCESS = 135, exports.CHANGE_MP = 312, exports.CHANGE_NAME = 320, exports.CHANGE_NICKNAME = 324, exports.CHANGE_PARALLAX = 284, exports.CHANGE_PARTY_MEMBER = 129, exports.CHANGE_PLAYER_FOLLOWERS = 216, exports.CHANGE_PROFILE = 325, exports.CHANGE_SAVE_ACCESS = 134, exports.CHANGE_TILESET = 282, exports.CHANGE_TP = 313, exports.CHANGE_TRANSPARENCY = 211, exports.CHANGE_VEHICLE_BGM = 140, exports.CHANGE_VEHICLE_IMAGE = 323, exports.CHANGE_VICTORY_ME = 133, exports.CHANGE_WEAPONS = 127, exports.CHANGE_WINDOW_COLOR = 138, exports.COLLAPS_BOSS = 1, exports.COLLAPS_INSTANT = 2, exports.COLLAPS_NONE = 3, exports.COLLAPS_NORMAL = 0, exports.COMMENT_BODY = 408, exports.COMMENT_HEAD = 108, exports.COMMON_EVENT = 117, exports.CONDITIONAL_BRANCH = 111, exports.CONDITIONAL_BRANCH_ELSE = 411, exports.CONTROL_SELF_SWITCH = 123, exports.CONTROL_SWITCHES = 121, exports.CONTROL_TIMER = 124, exports.CONTROL_VARIABLES = 122, exports.DEFAULT_DAMAGE_LABELS = T, exports.DEFAULT_GLOBAL_LABELS = Ct, exports.DEFAULT_ITEM_LABELS = { title: "アイテム", options: { consumable: "消耗品" } }, exports.DEFAULT_SKILL_LABELS = { title: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = { title: "オプション", options: {
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
} }, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, exports.DEFAULT_USABLE_ITEM_LABELS = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, exports.EFFECT_ADD_BUFF = 31, exports.EFFECT_ADD_DEBUFF = 32, exports.EFFECT_ADD_STATE = 21, exports.EFFECT_COMMON_EVENT = 44, exports.EFFECT_GAIN_TP = 13, exports.EFFECT_GROW = 42, exports.EFFECT_LEARN_SKILL = 43, exports.EFFECT_RECOVER_HP = 11, exports.EFFECT_RECOVER_MP = 12, exports.EFFECT_REMOVE_BUFF = 33, exports.EFFECT_REMOVE_DEBUFF = 34, exports.EFFECT_REMOVE_STATE = 22, exports.EFFECT_SPECIAL = 41, exports.ENEMY_APPEAR = 335, exports.ENEMY_RECOVER_ALL = 334, exports.ENEMY_TRANSFORM = 336, exports.ERASE_EVENT = 214, exports.ERASE_PICTURE = 235, exports.EXIT_EVENT_PROCESSING = 115, exports.EXTRA_PARAM_CEV = 3, exports.EXTRA_PARAM_CNT = 6, exports.EXTRA_PARAM_CRI = 2, exports.EXTRA_PARAM_EVA = 1, exports.EXTRA_PARAM_HIT = 0, exports.EXTRA_PARAM_HRG = 7, exports.EXTRA_PARAM_MEV = 4, exports.EXTRA_PARAM_MRF = 5, exports.EXTRA_PARAM_MRG = 8, exports.EXTRA_PARAM_TRG = 9, exports.FADEIN_SCREEN = 222, exports.FADEOUT_BGM = 242, exports.FADEOUT_BGS = 246, exports.FADEOUT_SCREEN = 221, exports.FILENAME_ACTORS = "Actors.json", exports.FILENAME_ANIMATIONS = "Animations.json", exports.FILENAME_ARMORS = "Armors.json", exports.FILENAME_CLASSES = "Classes.json", exports.FILENAME_COMMON_EVENTS = "CommonEvents.json", exports.FILENAME_ENEMIES = "Enemies.json", exports.FILENAME_ITEMS = "Items.json", exports.FILENAME_MAP_INFOS = "MapInfos.json", exports.FILENAME_SKILLS = "Skills.json", exports.FILENAME_STATES = "States.json", exports.FILENAME_SYSTEM = "System.json", exports.FILENAME_TILESET = "Tilesets.json", exports.FILENAME_TROOPS = "Troops.json", exports.FILENAME_WEAPONS = "Weapons.json", exports.FLAG_ID_AUTO_BATTLE = 0, exports.FLAG_ID_GUARD = 1, exports.FLAG_ID_PRESERVE_TP = 3, exports.FLAG_ID_SUBSTITUTE = 2, exports.FLASH_SCREEN = 224, exports.FOLDER_AUDIO = "audio", exports.FOLDER_AUDIO_BGM = "bgm", exports.FOLDER_AUDIO_BGS = "bgs", exports.FOLDER_AUDIO_ME = "me", exports.FOLDER_AUDIO_SE = "se", exports.FOLDER_DATA = "data", exports.FOLDER_IMG = "img", exports.FOLDER_IMG_BATTLEBACK1 = "battlebacks1", exports.FOLDER_IMG_BATTLEBACK2 = "battlebacks2", exports.FOLDER_IMG_CHACTERS = "characters", exports.FOLDER_IMG_ENEMIES = "enemies", exports.FOLDER_IMG_FACES = "faces", exports.FOLDER_IMG_PARALLACES = "parallaxes", exports.FOLDER_IMG_PICTURES = "pictures", exports.FOLDER_IMG_SV_ACTORS = "sv_actors", exports.FOLDER_IMG_SV_ENEMIES = "sv_enemies", exports.FOLDER_IMG_SYSTEM = "system", exports.FOLDER_IMG_TILESETS = "tilesets", exports.FOLDER_IMG_TITLES1 = "titles1", exports.FOLDER_IMG_TITLES2 = "titles2", exports.FOLDER_JS = "js", exports.FORCE_ACTION = 339, exports.GAME_OVER = 353, exports.GATHER_FOLLOWERS = 217, exports.GET_LOCATION_INFO = 285, exports.GET_ONOFF_VEHICLE = 206, exports.HITTYPE_CERTAIN = 0, exports.HITTYPE_MAGICAL = 2, exports.HITTYPE_PHYSICAL = 1, exports.INPUT_NUMBER = 103, exports.LABEL = 118, exports.LABELS_DATA_WEAPON = { title: "武器", options: { weaponTypeId: "武器タイプID" } }, exports.LABELS_SYSTEM_BATTLER_PARAMS = { title: "能力値", options: {
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
} }, exports.LABELS_SYSTEM_GAME_COMMANDS = { title: "コマンド", options: {
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
} }, exports.LABEL_JUMP = 119, exports.LABEL_SET_DATA = A, exports.LABEL_SET_ITEM_EFFECT = fe, exports.LABEL_SET_TRAIT = B, exports.LOOP = 112, exports.LOOP_BREAK = 113, exports.MODULE_DATA = "data", exports.MOVE_PICTURE = 232, exports.NAME_INPUT_PROCESSING = 303, exports.NO_OPERATION = 0, exports.OPEN_MENU_SCREEN = 351, exports.OPEN_SAVE_SCREEN = 352, exports.OPERAND_CONSTANT = 0, exports.OPERAND_GAMEDATA = 3, exports.OPERAND_RANDOM = 2, exports.OPERAND_SCRIPT = 4, exports.OPERAND_VARIABLE = 1, exports.PARTY_ABILITY_CANCEL_SURPRISE = 2, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = 5, exports.PARTY_ABILITY_ENCOUNTER_HALF = 0, exports.PARTY_ABILITY_ENCOUNTER_NONE = 1, exports.PARTY_ABILITY_GOLD_DOUBLE = 4, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = 3, exports.PLAY_BGM = 241, exports.PLAY_BGS = 245, exports.PLAY_ME = 249, exports.PLAY_MOVIE = 261, exports.PLAY_SE = 250, exports.PLUGIN_COMMAND_MV = 356, exports.PLUGIN_COMMAND_MZ = 357, exports.RECOVER_ALL = 314, exports.REGULAR_PARAM_AGI = 6, exports.REGULAR_PARAM_ATK = 2, exports.REGULAR_PARAM_DEF = 3, exports.REGULAR_PARAM_LUK = 7, exports.REGULAR_PARAM_MATK = 4, exports.REGULAR_PARAM_MAX_HP = 0, exports.REGULAR_PARAM_MAX_MP = 1, exports.REGULAR_PARAM_MDEF = 5, exports.RESUME_BGM = 244, exports.RETURN_TO_TITLE_SCREEN = 354, exports.ROTATE_PICTURE = 233, exports.ROUTE_CHANGE_BLEND_MODE = 43, exports.ROUTE_CHANGE_FREQ = 30, exports.ROUTE_CHANGE_IMAGE = 41, exports.ROUTE_CHANGE_OPACITY = 42, exports.ROUTE_CHANGE_SPEED = 29, exports.ROUTE_DIR_FIX_OFF = 36, exports.ROUTE_DIR_FIX_ON = 35, exports.ROUTE_END = 0, exports.ROUTE_JUMP = 14, exports.ROUTE_MOVE_AWAY = 11, exports.ROUTE_MOVE_BACKWARD = 13, exports.ROUTE_MOVE_DOWN = 1, exports.ROUTE_MOVE_FORWARD = 12, exports.ROUTE_MOVE_LEFT = 2, exports.ROUTE_MOVE_LOWER_L = 5, exports.ROUTE_MOVE_LOWER_R = 6, exports.ROUTE_MOVE_RANDOM = 9, exports.ROUTE_MOVE_RIGHT = 3, exports.ROUTE_MOVE_TOWARD = 10, exports.ROUTE_MOVE_UP = 4, exports.ROUTE_MOVE_UPPER_L = 7, exports.ROUTE_MOVE_UPPER_R = 8, exports.ROUTE_PLAY_SE = 44, exports.ROUTE_SCRIPT = 45, exports.ROUTE_STEP_ANIME_OFF = 34, exports.ROUTE_STEP_ANIME_ON = 33, exports.ROUTE_SWITCH_OFF = 28, exports.ROUTE_SWITCH_ON = 27, exports.ROUTE_THROUGH_OFF = 38, exports.ROUTE_THROUGH_ON = 37, exports.ROUTE_TRANSPARENT_OFF = 40, exports.ROUTE_TRANSPARENT_ON = 39, exports.ROUTE_TURN_180D = 22, exports.ROUTE_TURN_90D_L = 21, exports.ROUTE_TURN_90D_R = 20, exports.ROUTE_TURN_90D_R_L = 23, exports.ROUTE_TURN_AWAY = 26, exports.ROUTE_TURN_DOWN = 16, exports.ROUTE_TURN_LEFT = 17, exports.ROUTE_TURN_RANDOM = 24, exports.ROUTE_TURN_RIGHT = 18, exports.ROUTE_TURN_TOWARD = 25, exports.ROUTE_TURN_UP = 19, exports.ROUTE_WAIT = 15, exports.ROUTE_WALK_ANIME_OFF = 32, exports.ROUTE_WALK_ANIME_ON = 31, exports.SAVE_BGM = 243, exports.SCRIPT_EVAL = 355, exports.SCRIPT_EVAL_BODY = 655, exports.SCROLL_MAP = 204, exports.SELECT_ITEM = 104, exports.SET_EVENT_LOCATION = 203, exports.SET_MOVEMENT_ROUTE = 205, exports.SET_VEHICLE_LOCATION = 202, exports.SET_WEATHER_EFFECT = 236, exports.SHAKE_SCREEN = 225, exports.SHOP_PROCESSING = 302, exports.SHOP_PROCESSING_BODY = 605, exports.SHOW_ANIMATION = 212, exports.SHOW_BALLOON_ICON = 213, exports.SHOW_BATTLE_ANIMATION = 337, exports.SHOW_CHOICES = 102, exports.SHOW_CHOICES_ITEM = 402, exports.SHOW_MESSAGE = 101, exports.SHOW_MESSAGE_BODY = 401, exports.SHOW_PICTURE = 231, exports.SHOW_SCROLLING_TEXT = 105, exports.SHOW_SCROLLING_TEXT_BODY = 405, exports.SKIP = 109, exports.SPECIAL_EFFECT_ESCAPE = 0, exports.SPECIAL_PARAM_EXR = 9, exports.SPECIAL_PARAM_FDR = 8, exports.SPECIAL_PARAM_GRD = 1, exports.SPECIAL_PARAM_MCR = 4, exports.SPECIAL_PARAM_MDR = 7, exports.SPECIAL_PARAM_PDR = 6, exports.SPECIAL_PARAM_PHA = 3, exports.SPECIAL_PARAM_REC = 2, exports.SPECIAL_PARAM_TCR = 5, exports.SPECIAL_PARAM_TGR = 0, exports.SRC_COLOR = "colors", exports.SRC_DATA_ACTOR = "actor", exports.SRC_DATA_ARMOR = "armor", exports.SRC_DATA_CLASS = "class", exports.SRC_DATA_COMMON_EVNET = "common_event", exports.SRC_DATA_ENEMY = "enemy", exports.SRC_DATA_ITEMS = "item", exports.SRC_DATA_MAP = "map", exports.SRC_DATA_SKILL = "skill", exports.SRC_DATA_STATE = "state", exports.SRC_DATA_TROOP = "troop", exports.SRC_DATA_WEAPON = "weapon", exports.STOP_SE = 251, exports.TINT_PICTURE = 234, exports.TINT_SCREEN = 223, exports.TRAIT_ACTION_PLUS = 61, exports.TRAIT_ATTACK_ELEMENT = 31, exports.TRAIT_ATTACK_SKILL = 35, exports.TRAIT_ATTACK_SPEED = 33, exports.TRAIT_ATTACK_STATE = 32, exports.TRAIT_ATTACK_TIMES = 34, exports.TRAIT_COLLAPSE_TYPE = 63, exports.TRAIT_DEBUFF_RATE = 12, exports.TRAIT_ELEMENT_RATE = 11, exports.TRAIT_EQUIP_ARMOR_TYPE = 52, exports.TRAIT_EQUIP_LOCK = 53, exports.TRAIT_EQUIP_SEAL = 54, exports.TRAIT_EQUIP_WEAPON_TYPE = 51, exports.TRAIT_PARAM = 21, exports.TRAIT_PARTY_ABILITY = 64, exports.TRAIT_SKILL_ADD = 43, exports.TRAIT_SKILL_SEAL = 44, exports.TRAIT_SKILL_TYPE_ADD = 41, exports.TRAIT_SKILL_TYPE_SEAL = 42, exports.TRAIT_SLOT_TYPE = 55, exports.TRAIT_SPARAM = 23, exports.TRAIT_SPECIAL_FLAG = 62, exports.TRAIT_STATE_RATE = 13, exports.TRAIT_STATE_RESIST = 14, exports.TRAIT_XPARAM = 22, exports.TRANSFER_PLAYER = 201, exports.WAIT = 230, exports.applyFormatRule = oe, exports.buildReferenceItemSources = (e2, t2, a2, r2, o2, i2) => [...G(a2, r2), ...p(e2, t2), ...Vt(o2, i2)], exports.cloneChoices = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), exports.cloneEventCommand = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: ja(e2.parameters)
}), exports.cloneParameters = ja, exports.collapsOptionsToArray = S, exports.compileFormatRule = z, exports.compileItemEffectDisplayData = (e2, t2, a2) => {
  const r2 = ne(t2);
  return Q(a2 ? [...r2, ...a2] : r2, e2);
}, exports.compileTraitDisplayData = (e2, t2) => Q(We(t2), e2), exports.convertCommentArrayToObject = (e2) => ({ comment: e2[0] }), exports.createActorControlChars = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), exports.createControlCharFormat = t, exports.createEventCommand = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), exports.createNoteEntity = Ve, exports.createSystemVariableControlChars = (e2) => e2.variables.map((e3, a2) => ({ text: e3 || "", controlChar: t("V", a2) })).filter((e3) => "" !== e3.text), exports.defineGameDataSources = p, exports.defineSystemItems = Vt, exports.defineTraitCollapseType = R, exports.defineTraitExtraParam = C, exports.defineTraitItems = G, exports.defineTraitPartyAbility = P, exports.defineTraitRegularParam = N, exports.defineTraitSpecialFlag = M, exports.defineTraitSpecialParam = v, exports.detectFormatErrors = (e2, t2, a2, r2 = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : { formatLabel: e2.label, semanticErrors: J(e2, t2, a2), syntaxErrors: $(e2.pattern, t2, a2, r2.placeHolderMaxLength) }, exports.domainNames = (e2) => Object.entries(e2).map(([, e3]) => e3.title), exports.extraParamName = (e2, t2) => {
  switch (e2) {
    case 3:
      return t2.criticalEvasionRate;
    case 1:
      return t2.evasionRate;
    case 6:
      return t2.counterAttackRate;
    case 2:
      return t2.criticalRate;
    case 0:
      return t2.hitRate;
    case 7:
      return t2.hpRegenerationRate;
    case 4:
      return t2.magicEvasionRate;
    case 5:
      return t2.magicReflectionRate;
    case 8:
      return t2.mpRegenerationRate;
    case 9:
      return t2.tpRegenerationRate;
  }
  return `?xparams[${e2}]`;
}, exports.extraParamsToArray = f, exports.formatItemEffectText = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), o2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", o2);
}, exports.formatTraitText = (e2, t2, a2) => {
  const r2 = z(se);
  return oe(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, exports.fromArrayCommonEvent = (e2) => ({ eventId: e2[0] }), exports.fromArrayControlSwitches = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), exports.fromArrayInputNumber = (e2) => ({ variableId: e2[0], digits: e2[1] }), exports.fromArraySetupChoice = (e2) => ({ choices: e2[0], cancelType: e2[1], defaultType: e2[2], positionType: e2[3], background: e2[4] }), exports.fromArraySetupChoiceItem = (e2) => ({ index: e2[0], name: e2[1] }), exports.fromArrayShowMessageHeader = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), exports.fromStringArray = (e2, a2) => a2.map((a3, r2) => ({ text: a3, controlChar: t(e2, r2) })), exports.getActorValue = (e2, t2) => {
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
}, exports.getArmorCategoryEnabled = (e2) => e2.itemCategories[2], exports.getArmorTypes = Ut, exports.getControlChars = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), exports.getElementTypes = wt, exports.getEnemyValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, exports.getEquipCommandEnabled = (e2) => e2.menuCommands[2], exports.getEquipTypes = Ht, exports.getFormationCommandEnabled = (e2) => e2.menuCommands[4], exports.getItemCategoryEnabled = (e2) => e2.itemCategories[0], exports.getItemCommandEnabled = (e2) => e2.menuCommands[0], exports.getKeyItemCategoryEnabled = (e2) => e2.itemCategories[3], exports.getNoteValue = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, exports.getParamNames = (e2) => e2.terms.params.map((e3, t2) => ({ name: e3, id: t2 })), exports.getSaveCommandEnabled = (e2) => e2.menuCommands[5], exports.getSkillCommandEnabled = (e2) => e2.menuCommands[1], exports.getSkillTypes = Bt, exports.getStatusCommandEnabled = (e2) => e2.menuCommands[3], exports.getSwitches = qt, exports.getVariableNames = Ft, exports.getWeaponCategoryEnabled = (e2) => e2.itemCategories[1], exports.getWeaponTypes = Gt, exports.isCloneableCommand = (e2) => e2.parameters.every(za), exports.isCommandAudio = $a, exports.isCommandChangeActorText = (e2) => Ya(e2), exports.isCommandChangeBattleBgm = (e2) => $a(e2) && 132 === e2.code, exports.isCommandChangeDefeatMe = (e2) => $a(e2) && 139 === e2.code, exports.isCommandChangeVictoryMe = (e2) => $a(e2) && 133 === e2.code, exports.isCommandCommentBody = (e2) => Qa(e2) && 408 === e2.code, exports.isCommandCommentHeader = (e2) => Qa(e2) && 108 === e2.code, exports.isCommandCommonEvent = (e2) => er(e2), exports.isCommandInputNumber = (e2) => rr(e2), exports.isCommandNonParam = (e2) => Ja(e2), exports.isCommandPlayBgm = (e2) => $a(e2) && 241 === e2.code, exports.isCommandPlayBgs = (e2) => $a(e2) && 245 === e2.code, exports.isCommandPlayMe = (e2) => $a(e2) && 249 === e2.code, exports.isCommandPlaySe = (e2) => $a(e2) && 250 === e2.code, exports.isCommandScriptBody = (e2) => Qa(e2) && 655 === e2.code, exports.isCommandScriptHeader = (e2) => Qa(e2) && 355 === e2.code, exports.isCommandScrollTextHead = (e2) => Ka(e2), exports.isCommandShowChoiceItem = (e2) => ar(e2), exports.isCommandShowChoices = (e2) => tr(e2), exports.isCommandShowMessage = (e2) => or(e2), exports.isCommandShowMessageBody = (e2) => Qa(e2) && 401 === e2.code, exports.isCommandShowScrollingTextBody = (e2) => Qa(e2) && 405 === e2.code, exports.isCommandTextBody = Qa, exports.isDataActor = (e2) => we(e2), exports.isDataArmor = (e2) => He(e2), exports.isDataClass = (e2) => qe(e2), exports.isDataEnemy = (e2) => Ge(e2), exports.isDataItem = (e2) => De(e2), exports.isDataMap = (e2) => m(e2), exports.isDataMapInfo = (e2) => n(e2), exports.isDataSkill = (e2) => Fe(e2), exports.isDataState = (e2) => Ue(e2), exports.isDataSystem = (e2) => Ra(e2), exports.isDataWeapon = (e2) => Be(e2), exports.isValidNumber = (e2) => "number" == typeof e2 && !Number.isNaN(e2), exports.labelsRegistry = () => ({ rpg: {
  damage: T,
  data: A,
  traits: B,
  itemEffect: fe
}, global: Ct }), exports.makeActorData = (e2 = {}) => ({
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
}), exports.makeArmorData = (e2 = {}) => ({
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
}), exports.makeAudioCommand = (e2, t2) => La(e2, Nt({
  name: t2
})), exports.makeAudioFileParams = Nt, exports.makeBooleanOptions = Ot, exports.makeClassData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), exports.makeCommandAudioAny = La, exports.makeCommandChangeActorName = (e2, t2 = 0) => ({
  code: 320,
  parameters: [e2.actorId, e2.name],
  indent: t2
}), exports.makeCommandChangeActorNickName = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), exports.makeCommandChangeActorProfile = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), exports.makeCommandChangeBattleBGM = (e2, t2 = 0) => La(132, e2, t2), exports.makeCommandChangeDefeatME = (e2, t2 = 0) => La(139, e2, t2), exports.makeCommandChangeVictoryME = (e2, t2 = 0) => La(133, e2, t2), exports.makeCommandCommentBody = Ba, exports.makeCommandCommentHeader = Ha, exports.makeCommandCommonEvent = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Da(e2 ?? {})
}), exports.makeCommandControlSwitches = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: Fa(e2) }), exports.makeCommandInputNumber = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Ga(e2 ?? {})
}), exports.makeCommandPlayBGM = (e2, t2 = 0) => La(241, e2, t2), exports.makeCommandPlayBGS = (e2, t2 = 0) => La(245, e2, t2), exports.makeCommandPlayME = (e2, t2 = 0) => La(249, e2, t2), exports.makeCommandPlaySE = (e2, t2 = 0) => La(250, e2, t2), exports.makeCommandScriptArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Ua(e3, t2) : qa(e3, t2)), exports.makeCommandScriptBody = qa, exports.makeCommandScriptHeader = Ua, exports.makeCommandSetupChoice = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), exports.makeCommandShowChoiceItem = (e2, t2 = 0) => ({
  code: 402,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""]
}), exports.makeCommandShowMessage = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), exports.makeCommandShowMessageBody = (e2, t2 = 0) => ({
  code: 401,
  indent: t2,
  parameters: [e2]
}), exports.makeCommentArray = wa, exports.makeCommentCommandArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Ha(e3, t2) : Ba(e3, t2)), exports.makeCommonEventData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), exports.makeDamage = _, exports.makeDataNames = Jt, exports.makeDropItem = b, exports.makeEditorSetting = ta, exports.makeEnemyAction = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), exports.makeEnemyData = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => b())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, exports.makeEventPageCondition = a, exports.makeGameInitial = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), exports.makeItemCategories = vt, exports.makeItemCategoriesFromArray = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), exports.makeItemData = (e2 = {}) => ({
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
  damage: _(e2.damage ?? {}),
  effects: [],
  price: 0
}), exports.makeMapData = (e2 = {}) => ({
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
}), exports.makeMapEvent = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), exports.makeMapEventIamge = r, exports.makeMapEventPage = () => ({ conditions: a(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), exports.makeMapInfoData = (e2 = { id: 0 }) => {
  return {
    name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")),
    id: e2.id,
    expanded: e2.expanded ?? false,
    order: e2.order ?? 0,
    parentId: e2.parentId ?? 0,
    scrollX: e2.scrollX ?? 0,
    scrollY: e2.scrollY ?? 0
  };
  var t2;
}, exports.makeMenuCommandsEnabled = kt, exports.makeMenuCommandsEnabledFromArray = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), exports.makeParamNamesArray = Qt, exports.makeRegex = je, exports.makeSkillData = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: _(e2.damage ?? {}),
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
}), exports.makeSoundsArray = ht, exports.makeSoundsObject = (e2) => ({
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
}), exports.makeStateData = (e2 = {}) => ({
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
}), exports.makeSystemAdvanced = ft, exports.makeSystemData = (e2) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r2, _s, _t2, _u, _v;
  const t2 = Pa(e2.size);
  return {
    ...Ot(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: ht(e2.sounds),
    editor: ta(e2.editing),
    advanced: ft(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...Jt(e2.dataNames ?? {}),
    magicSkills: ka([]),
    airship: ea((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: ea((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: ea((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: Nt((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: Nt((_i = e2.me) == null ? void 0 : _i.gameoverMe),
    titleBgm: Nt((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: Oa((_n = e2.battleTest) == null ? void 0 : _n.testBattlers, Ma),
    battleBgm: Nt((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: Nt((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s = e2.gameInit) == null ? void 0 : _s.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: va(e2.terms ?? {}),
    itemCategories: vt(e2.itemCategories),
    partyMembersArray: ka((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: kt(e2.menuComamnds)
  };
}, exports.makeTitleCommandWindow = (e2) => ({
  background: e2.background ?? 0,
  offsetX: e2.offsetX ?? 0,
  offsetY: e2.offsetY ?? 0
}), exports.makeTroopData = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", members: e2.members ?? [], pages: e2.pages ?? [] }), exports.makeTroopEventConditions = (e2 = {}) => ({ actorHp: e2.actorHp ?? 0, actorId: e2.actorId ?? 0, enemyValid: e2.enemyValid ?? 0, switchValid: e2.switchValid ?? 0 }), exports.makeTroopMember = (e2 = {}) => ({
  enemyId: e2.enemyId ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  hidden: e2.hidden ?? false
}), exports.makeVehicleData = ea, exports.makeWeaponData = (e2 = {}) => ({
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
  damage: _(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), exports.mergeItemsSource = Q, exports.normalizeDataActor = (e2) => ({
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
}), exports.partyAbilityToArray = O, exports.pluginSourceToJSON = (e2) => Yr(e2), exports.readNote = (e2) => ze(e2, (e3, t2) => [e3, t2]), exports.readNoteObject = (e2, t2) => ze(e2.note, (a2, r2) => t2(a2, r2, e2)), exports.regularParamName = (e2, t2) => {
  switch (e2) {
    case 0:
      return t2.maxHp;
    case 1:
      return t2.maxMp;
    case 2:
      return t2.atk;
    case 3:
      return t2.def;
    case 4:
      return t2.matk;
    case 5:
      return t2.mdef;
    case 6:
      return t2.agi;
    case 7:
      return t2.luk;
    default:
      return `?rparams[${e2}]`;
  }
}, exports.regularParamsToArray = h, exports.replaceNote = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const o2 = t2(a2, r2);
    if (o2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Ve(a2, o2);
  });
}, exports.resolveItemEffectLabels = ne, exports.resolveTraitLabels = We, exports.setNoteValue = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? Ve(r3, a2) : e3);
}, exports.specialFlagToArray = L, exports.specialParamName = (e2, t2) => {
  switch (e2) {
    case 9:
      return t2.experienceRate;
    case 0:
      return t2.targetRate;
    case 8:
      return t2.floorDamageRate;
    case 1:
      return t2.guardEffectRate;
    case 4:
      return t2.mpCostRate;
    case 5:
      return t2.tpChargeRate;
    case 6:
      return t2.physicalDamageRate;
    case 7:
      return t2.magicDamageRate;
    case 3:
      return t2.pharmacology;
    case 2:
      return t2.recoveryEffectRate;
  }
  return `?sparams[${e2}]`;
}, exports.specialParamsToArray = k, exports.structToJSONSchema = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = dr(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return { type: "object", properties: t2, required: Object.keys(t2), additionalProperties: false };
})(e2), exports.toArrayCommonEvent = Da, exports.toArrayControlSwitches = Fa, exports.toArrayInputNumber = Ga, exports.toArrayOperandActorStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], exports.toArrayOperandConstant = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], exports.toArrayOperandEnemyStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Va[t2.param]], exports.toArrayOperandItemData = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], exports.toArrayOperandRandom = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], exports.toArrayOperandScript = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], exports.toArrayOperandVariable = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], exports.toArraySetupChoice = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], exports.toArraySetupChoiceItem = (e2) => [e2.index ?? 0, e2.name ?? ""], exports.toArrayShowMessageHeader = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName];
//# sourceMappingURL=rpgTypes.cjs.js.map
