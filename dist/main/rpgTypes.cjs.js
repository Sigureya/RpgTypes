"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("ajv"), t = (e2, t2) => `\\${e2}[${t2}]`, r = (e2 = {}) => ({
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
}), a = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), s = {
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
      pages: { type: "array", items: s }
    } } }
  }
}, o = new e({ strict: true }), n = o.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), m = o.compile(i), p = (e2, t2) => [d(e2.skills, t2), c(e2.actors, t2), l(e2.states, t2), u(e2.armors, t2), y(e2.classes, t2), g(e2.enemies, t2), x(e2.items, t2), f(e2.weapons, t2), h(e2.commonEvents, t2)], d = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), c = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), l = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), u = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), y = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), g = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), x = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), f = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), h = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), E = {
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
}, I = { title: "ダメージ", options: {} }, b = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), A = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), T = (e2, t2) => ({ items: P(e2.options, t2), label: e2.title, source: { author: "rmmz", module: "trait", kind: "collaps" } }), P = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, {
  id: 2,
  name: e2.instantCollaps
}, { id: 3, name: e2.noneCollaps }], _ = (e2) => ({ items: N(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), N = (e2) => [{ id: 0, name: e2.hitRate }, {
  id: 1,
  name: e2.evasionRate
}, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, {
  id: 6,
  name: e2.counterAttackRate
}, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], v = (e2) => ({ items: R(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "params"
} }), R = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, {
  id: 6,
  name: e2.agi
}, { id: 7, name: e2.luk }], k = (e2) => ({ items: S(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), S = (e2) => [{ id: 0, name: e2.targetRate }, {
  id: 1,
  name: e2.guardEffectRate
}, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, {
  id: 7,
  name: e2.magicDamageRate
}, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], C = (e2) => ({ items: O(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "partyAbility"
} }), O = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, {
  id: 5,
  name: e2.dropItemDouble
}], M = (e2) => ({ items: L(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sflag" } }), L = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], w = "{name}", F = "{name} * {value}%", D = "{name} + {value}%", H = "{value}", G = {
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
    extraParam: { title: "追加能力値", format: D, options: {
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
      format: w,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: w, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: w, options: {
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
      format: w
    },
    attackElement: { title: "攻撃属性", format: w },
    attackState: { title: "攻撃ステート", format: D },
    attackSpeed: { title: "攻撃速度補正", format: H },
    attackTimes: { title: "攻撃追加回数", format: H },
    actionPlus: { title: "行動追加", format: F },
    attackSkill: { title: "攻撃スキル", format: w },
    equipWeaponType: { title: "装備武器タイプ", format: w },
    equipArmorType: { title: "装備防具タイプ", format: w },
    equipLock: {
      title: "装備固定",
      format: w
    },
    equipSeal: { title: "装備封印", format: w },
    slotType: { title: "スロットタイプ", format: w },
    skillAdd: { title: "スキル追加", format: w },
    skillSeal: { title: "スキルタイプ封印", format: w },
    skillTypeAdd: {
      title: "スキルタイプ追加",
      format: w
    },
    skillTypeSeal: { title: "スキルタイプ封印", format: w }
  }
}, q = (e2, t2) => [v(e2.regularParam), _(e2.extraParam), k(e2.specialParam), T(e2.collaps, t2), M(e2.specialFlag), C(e2.partyAbility)], U = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), B = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), j = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, V = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, z = (e2, t2 = []) => {
  return {
    itemMappers: [...V(e2), ...t2].map(W),
    fallbackFormat: { text: Y(e2), label: K(e2) },
    properties: (r2 = e2.placeHolder ?? {}, { numbers: r2.numbers ? U(r2.numbers) : [], strings: r2.strings ? U(r2.strings) : [] }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(B) : []
  };
  var r2;
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
}, X = (e2, t2, r2) => {
  const a2 = t2[r2.dataKey];
  return null == a2 ? e2 : e2.replaceAll(r2.placeHolder, String(a2));
}, $ = (e2, t2, r2, a2) => {
  const s2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), i2 = ((e3) => {
    var _a2, _b, _c, _d;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...e3.itemMapper ? [e3.itemMapper.placeHolder] : [], ...((_b = e3.itemMappers) == null ? void 0 : _b.map((e4) => e4.placeHolder)) ?? [], ...((_c = e3.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d = e3.arrayIndex) == null ? void 0 : _d.map((e4) => e4.dataIdKey)) ?? []]);
  })(t2);
  return s2.reduce((e3, t3) => {
    const s3 = t3[1];
    return 0 === s3.length ? e3 : s3.length > a2 ? (e3.push({ message: r2.longPlaceHolder, reason: s3.slice(0, a2) }), e3) : (i2.has(s3) || e3.push({
      message: r2.extraPlaceHolder,
      reason: s3
    }), e3);
  }, []);
}, J = (e2, t2, r2) => V(t2).reduce((t3, a2) => {
  const s2 = Z(e2, a2, r2);
  return s2 && t3.push(s2), t3;
}, []), Z = (e2, t2, r2) => {
  const a2 = e2.pattern.includes(t2.placeHolder), s2 = !!e2.dataSource;
  return !a2 && s2 ? { message: r2.missingName, reason: t2.placeHolder } : a2 && !s2 ? { message: r2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Q = (e2, t2) => {
  const r2 = re(t2);
  return e2.reduce((e3, t3) => {
    const a2 = ee(t3, r2);
    return e3.set(t3.kindId, a2), e3;
  }, /* @__PURE__ */ new Map());
}, ee = (e2, t2) => {
  const r2 = te(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: r2 ? r2.items : void 0 };
}, te = (e2, t2) => {
  if (e2) return t2.get(j(e2));
}, re = (e2) => e2.reduce((e3, t2) => {
  const r2 = { items: ae(t2.items), source: t2.source, label: t2.label };
  return e3.set(j(t2.source), r2), e3;
}, /* @__PURE__ */ new Map()), ae = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), se = (e2, t2, r2, a2, s2) => {
  const i2 = ((e3, t3, r3) => {
    const a3 = r3.properties.numbers.reduce((e4, r4) => X(e4, t3, r4), e3);
    return r3.properties.strings.reduce((e4, r4) => X(e4, t3, r4), a3);
  })(a2, e2, r2);
  return t2 ? ie(i2, e2, r2, t2, s2) : i2;
}, ie = (e2, t2, r2, a2, s2) => {
  const i2 = ((e3, t3) => {
    const r3 = ((e4, t4) => {
      const r4 = t4[e4];
      return r4 && r4.id === e4 ? r4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return r3 ? r3.name : `?data[${t3}]`;
  })(a2, s2(t2));
  return r2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, i2), e2);
}, oe = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, ne = (e2) => [de(e2), ce(e2), le(e2), ue(e2), ye(e2), ge(e2), xe(e2), fe(e2), he(e2), pe(e2), Ee(e2), Ie(e2), be(e2)], me = (e2, t2, r2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: r2
}), pe = (e2) => me(41, e2.special), de = (e2) => me(11, e2.recoverHp), ce = (e2) => me(12, e2.recoverMp), le = (e2) => me(13, e2.gainTp), ue = (e2) => me(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), ye = (e2) => me(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), ge = (e2) => me(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), xe = (e2) => me(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), fe = (e2) => me(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), he = (e2) => me(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Ee = (e2) => me(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), Ie = (e2) => me(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), be = (e2) => me(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Ae = "{name} {value1}%", Te = "{value1}% + {value2}", Pe = "{name} {value1}ターン", _e = "{name}", Ne = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Pe
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Pe }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Te }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: _e }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: Te
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: Te
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: _e }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: _e
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Ae }, special: { desc: "特殊効果", domainName: "特殊効果", format: _e }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: Ae
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: _e } } }, ve = { type: "integer" }, Re = { type: "integer", minimum: 0 }, ke = {
  type: "string"
}, Se = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: Re, formula: ke, variance: ve, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, Ce = {
  type: "object",
  properties: { code: ve, dataId: Re, value1: ve, value2: ve },
  required: ["code", "dataId", "value1", "value2"],
  additionalProperties: false
}, Oe = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: ke,
    id: Re,
    description: ke,
    iconIndex: Re,
    message1: ke,
    message2: ke,
    messageType: Re,
    mpCost: ve,
    requiredWtypeId1: Re,
    requiredWtypeId2: Re,
    stypeId: Re,
    tpCost: ve,
    animationId: Re,
    hitType: Re,
    occasion: { type: "integer" },
    repeats: Re,
    scope: ve,
    speed: ve,
    successRate: ve,
    tpGain: ve,
    note: ke,
    effects: { type: "array", items: Ce },
    damage: Se
  },
  additionalProperties: false
}, Me = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: ke, id: Re, description: ke, iconIndex: Re, note: ke, animationId: Re, hitType: ve, occasion: ve, repeats: ve, scope: ve, speed: ve, successRate: ve, tpGain: ve, consumable: {
    type: "boolean"
  }, price: Re, itypeId: Re, effects: { type: "array", items: Ce }, damage: Se }
}, Le = new e({ strict: true }), we = Le.compile(Me), Fe = Le.compile(Oe), De = Le.compile({
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: {
      type: "integer",
      minimum: 0
    },
    animationId: { type: "integer", minimum: 0 },
    params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
      type: "integer"
    }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    damage: { type: "object", properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: {
      type: "string"
    }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } }, required: ["type", "elementId", "formula", "variance", "critical"] },
    traits: {
      type: "array",
      items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] }
    }
  }
}), He = (e2, t2) => `<${e2}:${t2}>`, Ge = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, qe = (e2, t2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(r2), (e3) => t2(e3[1], e3[2]));
}, Ue = (e2) => [Be(e2.elementRate), je(e2.debuffRate), Ve(e2.stateRate), ze(e2.stateResist), We(e2.regularParam), Ye(e2.extraParam), Ke(e2.specialParam), Xe(e2.attackElement), $e(e2.attackState), Je(e2.attackSpeed), Ze(e2.attackTimes), Qe(e2.attackSkill), et(e2.skillTypeAdd), tt(e2.skillTypeSeal), rt(e2.skillAdd), at(e2.skillSeal), st(e2.equipWeaponType), it(e2.equipArmorType), ot(e2.equipLock), nt(e2.equipSeal), mt(e2.slotType), pt(e2.actionPlus), dt(e2.specialFlag), ct(e2.collaps), lt(e2.partyAbility)], Be = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: gt()
}), je = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Ve = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: ut()
}), ze = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: ut() }), We = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Ye = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Ke = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Xe = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: gt() }), $e = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: ut()
}), Je = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), Ze = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Qe = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: yt()
}), et = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: xt() }), tt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: xt()
}), rt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: yt() }), at = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: yt() }), st = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: ft()
}), it = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: ht() }), ot = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: Et()
}), nt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: Et() }), mt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: Et() }), pt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), dt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), ct = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), lt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), ut = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), yt = () => ({ author: "rmmz", module: "data", kind: "skill" }), gt = () => ({ author: "rmmz", module: "system", kind: "elements" }), xt = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), ft = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), ht = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Et = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), It = {
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
}, bt = (e2 = {}) => ({
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
}), At = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), Tt = (e2 = {}) => [At(e2.cursor), At(e2.ok), At(e2.cancel), At(e2.buzzer), At(e2.equip), At(e2.save), At(e2.load), At(e2.battleStart), At(e2.escape), At(e2.enemyAttack), At(e2.enemyDamage), At(e2.enemyCollapse), At(e2.bossCollapes1), At(e2.bossCollapes2), At(e2.actorDamage), At(e2.actorCollapse), At(e2.playRecovery), At(e2.playMiss), At(e2.playEvasion), At(e2.playMagicEvasion), At(e2.playReflection), At(e2.shop), At(e2.useItem), At(e2.useSkill)], Pt = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], _t = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Nt = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: { type: "array", maxItems: 4, minItems: 4, items: { type: "boolean" } },
    menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } }
  }
}, vt = (e2 = {}) => ({
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
}), Rt = {
  type: "boolean"
}, kt = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Rt,
    optDisplayTp: Rt,
    optDrawTitle: Rt,
    optExtraExp: Rt,
    optFloorDeath: Rt,
    optFollowers: Rt,
    optKeyItemsNumber: Rt,
    optSideView: Rt,
    optSlipDeath: Rt,
    optTransparent: Rt,
    optMessageSkip: Rt,
    optSplashScreen: Rt
  }
}, St = (e2, t2) => ({
  name: e2,
  id: t2
}), Ct = (e2) => e2.variables.map(St), Ot = (e2) => e2.elements.map(St), Mt = (e2) => e2.equipTypes.map(St), Lt = (e2) => e2.skillTypes.map(St), wt = (e2) => e2.weaponTypes.map(St), Ft = (e2) => e2.armorTypes.map(St), Dt = (e2) => e2.switches.map(St), Ht = (e2, t2) => [qt(e2, t2), Ut(e2, t2), zt(e2, t2), Bt(e2, t2), Gt(e2, t2), jt(e2, t2), Vt(e2, t2)], Gt = (e2, t2) => ({
  items: Ft(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), qt = (e2, t2) => ({ items: Ot(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ut = (e2, t2) => ({ items: Mt(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Bt = (e2, t2) => ({
  items: Lt(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), jt = (e2, t2) => ({ items: Ct(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Vt = (e2, t2) => ({ items: Dt(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), zt = (e2, t2) => ({
  items: wt(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Wt = (e2) => ({
  armorTypes: Yt(e2.armorTypes),
  elements: Yt(e2.elements),
  equipTypes: Yt(e2.equipTypes),
  weaponTypes: Yt(e2.weaponTypes),
  skillTypes: Yt(e2.skillTypes),
  variables: Yt(e2.variables),
  switches: Yt(e2.switches)
}), Yt = (e2) => e2 ? [...e2] : [], Kt = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Xt = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: At(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), $t = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Jt = { type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: {
  type: "number"
}, weaponImageId: { type: "number" } } }, Zt = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, Qt = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: {
  type: "integer"
}, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: { type: "integer" } } } }, er = { type: "object", properties: {
  name: { type: "string" },
  volume: { type: "integer", minimum: 0, maximum: 100 },
  pitch: { type: "integer", minimum: 0, maximum: 100 },
  pan: { type: "integer", minimum: -100, maximum: 100 }
}, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, tr = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: {
    battleBgm: er,
    victoryMe: er,
    gameoverMe: er,
    titleBgm: er,
    defeatMe: er,
    sounds: { type: "array", items: er, minItems: 24, maxItems: 24 }
  }
}, rr = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: {
  magicSkills: { type: "array", items: { type: "number" }, minItems: 0, uniqueItems: true },
  battleSystem: { type: "number" }
} }, ar = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: {
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0 },
    startY: { type: "integer", minimum: 0 },
    partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
  }
}, sr = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: {
  type: "string"
}, title2Name: { type: "string" } } }, ir = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: {
  type: "number"
}, windowTone: { type: "array", items: { type: "number" }, minItems: 4, maxItems: 4 } } }, or = { type: "array", items: { type: "string" } }, nr = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: or,
    skillTypes: or,
    elements: or,
    variables: or,
    equipTypes: or,
    switches: or,
    armorTypes: or
  }
}, mr = { type: "string" }, pr = { type: "string", nullable: true }, dr = { type: "string" }, cr = {
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
        actionFailure: dr,
        actorDamage: dr,
        actorNoDamage: dr,
        actorRecovery: dr,
        actorGain: dr,
        actorLoss: dr,
        actorDrain: dr,
        alwaysDash: dr,
        bgmVolume: dr,
        bgsVolume: dr,
        commandRemember: dr,
        criticalToActor: dr,
        criticalToEnemy: dr,
        counterAttack: dr,
        debuffAdd: dr,
        defeat: dr,
        enemyDamage: dr,
        enemyNoDamage: dr,
        enemyRecovery: dr,
        enemyGain: dr,
        enemyLoss: dr,
        enemyDrain: dr,
        evasion: dr,
        expNext: dr,
        expTotal: dr,
        escapeFailure: dr,
        escapeStart: dr,
        file: dr,
        loadMessage: dr,
        meVolume: dr,
        magicEvasion: dr,
        magicReflection: dr,
        obtainExp: dr,
        obtainGold: dr,
        obtainItem: dr,
        obtainSkill: dr,
        partyName: dr,
        preemptive: dr,
        saveMessage: dr,
        seVolume: dr,
        substitute: dr,
        touchUI: dr,
        victory: dr,
        useItem: dr,
        buffAdd: dr,
        buffRemove: dr,
        actorNoHit: dr,
        enemyNoHit: dr,
        autosave: dr,
        emerge: dr,
        levelUp: dr,
        possession: dr,
        surprise: dr
      }
    }, commands: {
      type: "array",
      items: [mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, mr, pr, mr, mr, pr, mr, mr],
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
}, lr = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Qt },
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
}, ur = {
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
}, yr = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: ur,
  boat: ur,
  ship: ur,
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
  attackMotions: { type: "array", items: Jt }
} }, gr = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), xr = new e({ strict: true }), fr = ((e2) => {
  const t2 = gr(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([yr, tr, rr, Nt, kt, ar, Zt, ir, nr, cr, sr, lr]), hr = xr.compile(fr), Er = xr.compile(Qt);
xr.compile(Jt);
const Ir = xr.compile(Zt), br = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], Ar = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Tr = (e2, t2) => "string" == typeof e2 ? e2 : t2, Pr = (e2) => {
  return { basic: br(e2.basic ?? {}), commands: (r2 = e2.commands ?? {}, Ar(r2, "")), params: Kt(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: Tr(t2.actionFailure, "Action failed."),
    actorDamage: Tr(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: Tr(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: Tr(t2.actorGain, "%1 gained %2."),
    actorLoss: Tr(t2.actorLoss, "%1 lost %2."),
    actorDrain: Tr(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: Tr(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: Tr(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: Tr(t2.alwaysDash, "Always dash."),
    bgmVolume: Tr(t2.bgmVolume, "BGM volume"),
    bgsVolume: Tr(t2.bgsVolume, "BGS volume"),
    commandRemember: Tr(t2.commandRemember, "Command remember."),
    criticalToActor: Tr(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: Tr(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: Tr(t2.counterAttack, "%1 countered!"),
    debuffAdd: Tr(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: Tr(t2.defeat, "Defeat."),
    enemyDamage: Tr(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: Tr(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: Tr(t2.enemyGain, "%1 gained %2."),
    enemyLoss: Tr(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: Tr(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: Tr(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: Tr(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: Tr(t2.evasion, "%1 evaded the attack!"),
    autosave: Tr(t2.autosave, "Autosave"),
    escapeFailure: Tr(t2.escapeFailure, "Escape failed."),
    escapeStart: Tr(t2.escapeStart, "%1 started to escape!"),
    emerge: Tr(t2.emerge, "%1 appeared!"),
    expNext: Tr(t2.expNext, "Next level in %1 EXP."),
    expTotal: Tr(t2.expTotal, "Total EXP: %1"),
    file: Tr(t2.file, "File"),
    buffAdd: Tr(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: Tr(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: Tr(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: Tr(t2.obtainGold, "%1 gold obtained."),
    obtainItem: Tr(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: Tr(t2.obtainSkill, "%1 learned %2."),
    levelUp: Tr(t2.levelUp, "%1 leveled up!"),
    partyName: Tr(t2.partyName, "Party"),
    loadMessage: Tr(t2.loadMessage, "Load %1?"),
    meVolume: Tr(t2.meVolume, "ME volume"),
    possession: Tr(t2.possession, "Possession"),
    preemptive: Tr(t2.preemptive, "%1 attacked first!"),
    saveMessage: Tr(t2.saveMessage, "Save %1?"),
    seVolume: Tr(t2.seVolume, "SE volume"),
    magicEvasion: Tr(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: Tr(t2.magicReflection, "%1 reflected the magic!"),
    substitute: Tr(t2.substitute, "%1 took the hit!"),
    surprise: Tr(t2.surprise, "%1 surprised the enemy!"),
    touchUI: Tr(t2.touchUI, "Touch UI"),
    useItem: Tr(t2.useItem, "%1 used %2."),
    victory: Tr(t2.victory, "Victory!")
  }) };
  var t2, r2;
}, _r = (e2) => e2 ? [...e2] : [], Nr = (e2) => ((e3) => Ir(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, vr = (e2, t2) => e2 ? e2.map(t2) : [], Rr = (e2) => ((e3) => Er(e3))(e2) ? { actorId: e2.actorId, equips: _r(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, kr = (e2, t2, r2 = 0) => ({ code: e2, parameters: [At(t2)], indent: r2 }), Sr = (e2) => [e2.eventId ?? 0], Cr = (e2) => [e2.min, e2.max, e2.value], Or = (e2) => [e2], Mr = (e2, t2 = 0) => ({
  code: 108,
  indent: t2,
  parameters: Or(e2)
}), Lr = (e2, t2 = 0) => ({ code: 408, indent: t2, parameters: Or(e2) }), wr = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Fr = (e2, t2 = 0) => ({ code: 355, indent: t2, parameters: [e2] }), Dr = (e2, t2 = 0) => ({
  code: 655,
  indent: t2,
  parameters: [e2]
}), Hr = {
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
}, Gr = (e2) => [...e2], qr = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Ur = new e({ strict: true }), Br = Ur.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), jr = Ur.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "boolean" }]
} }, required: ["code", "indent", "parameters"] }), Vr = Ur.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
  type: "integer",
  enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
} }, additionalProperties: false }), zr = Ur.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Wr = (e2) => zr(e2), Yr = Ur.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Kr = Ur.compile({ type: "object", properties: {
  code: { type: "number", const: 102 },
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }] }
}, required: ["code", "indent", "parameters"] }), Xr = Ur.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), $r = Ur.compile({
  type: "object",
  properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), Jr = Ur.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, {
  type: "string"
}], minItems: 5, maxItems: 5 } } }), Zr = (e2, t2) => ({ type: "array", items: t2, ...Qr(e2), ...ea(e2.default) }), Qr = (e2) => ({
  ..."string" == typeof e2.text ? { title: e2.text } : {},
  ..."string" == typeof e2.desc ? { description: e2.desc } : {}
}), ea = (e2) => void 0 !== e2 ? { default: e2 } : {}, ta = (e2) => void 0 === e2 || 0 === e2, ra = (e2) => Zr(e2, { type: "string" }), aa = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({ type: "string", ...Qr(e3), ...ea(e3.default) }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...ea(e3.default), ...Qr(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...ea(e3.default), ...Qr(e3), ...e3.options ? { enum: e3.options.map((e4) => e4.value) } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return ra(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: { type: ta(e3.decimals) ? "integer" : "number" }, ...ea(e3.default), ...Qr(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => Zr(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({
        type: ta(e3.decimals) ? "integer" : "number",
        ...ea(e3.default),
        ...Qr(e3)
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
        ...ea(e3.default),
        ...Qr(e3)
      }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...ea(e3.default), ...Qr(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...Qr(t2) };
    default:
      return {};
  }
  var t2;
}, sa = (e2, t2) => Object.entries(t2).reduce((t3, [r2, a2]) => {
  if (r2 in e2) {
    const s2 = e2[r2];
    if ("string" == typeof s2) return { ...t3, [r2]: a2(s2) };
  }
  return t3;
}, {}), ia = (e2, t2, r2, a2) => ({
  default: t2,
  ...sa(r2, a2),
  kind: e2
}), oa = (e2, t2, r2) => ({ default: [], ...sa(t2, r2), kind: e2 }), na = "help", ma = "kind", pa = "text", da = "struct", ca = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(la) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, la(t3)])) : t2;
}, la = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(la) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, la(t3)])) : t2;
  } catch {
    return e2;
  }
}, ua = (e2) => {
  if (ma in e2.attr) {
    const t2 = ba[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return ia("any", "", e2.attr, xa);
}, ya = (e2) => e2, ga = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), xa = {
  default: ya,
  text: ya,
  desc: ya,
  parent: ya
}, fa = (e2) => ia("string", "", e2.attr, xa), ha = (e2) => {
  const t2 = { default: (e3) => ca(e3), text: ya, desc: ya, parent: ya };
  return oa("string[]", e2.attr, t2);
}, Ea = (e2, t2) => {
  const r2 = {
    default: ga,
    text: ya,
    desc: ya,
    parent: ya
  };
  return oa(t2, e2.attr, r2);
}, Ia = (e2, t2) => {
  const r2 = { default: (e3) => parseInt(e3, 10), text: ya, desc: ya, parent: ya };
  return ia(t2, 0, e2.attr, r2);
}, ba = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: ya,
      desc: ya,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: ya
    };
    return ia("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: ga, text: ya, desc: ya, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: ya };
    return oa("number[]", e2.attr, t2);
  },
  string: fa,
  "string[]": ha,
  multiline_string: fa,
  "multiline_string[]": ha,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...ia("combo", "", e2.attr, xa), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...ia("select", "", e2.attr, xa), options: t2 };
  },
  actor: (e2) => Ia(e2, "actor"),
  "actor[]": (e2) => Ea(e2, "actor[]"),
  class: (e2) => Ia(e2, "class"),
  "class[]": (e2) => Ea(e2, "class[]"),
  skill: (e2) => Ia(e2, "skill"),
  "skill[]": (e2) => Ea(e2, "skill[]"),
  item: (e2) => Ia(e2, "item"),
  "item[]": (e2) => Ea(e2, "item[]"),
  weapon: (e2) => Ia(e2, "weapon"),
  "weapon[]": (e2) => Ea(e2, "weapon[]"),
  armor: (e2) => Ia(e2, "armor"),
  "armor[]": (e2) => Ea(e2, "armor[]"),
  state: (e2) => Ia(e2, "state"),
  "state[]": (e2) => Ea(e2, "state[]"),
  enemy: (e2) => Ia(e2, "enemy"),
  "enemy[]": (e2) => Ea(e2, "enemy[]"),
  common_event: (e2) => Ia(e2, "common_event"),
  "common_event[]": (e2) => Ea(e2, "common_event[]"),
  switch: (e2) => Ia(e2, "switch"),
  "switch[]": (e2) => Ea(e2, "switch[]"),
  variable: (e2) => Ia(e2, "variable"),
  "variable[]": (e2) => Ea(e2, "variable[]"),
  troop: (e2) => Ia(e2, "troop"),
  "troop[]": (e2) => Ea(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: ya,
      desc: ya,
      on: ya,
      off: ya,
      parent: ya
    };
    return ia("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: ya, text: ya, desc: ya, parent: ya, dir: ya };
    return { dir: "", ...ia("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => ca(e3), text: ya, desc: ya, parent: ya, dir: ya };
    return { dir: "", ...oa("file[]", e2.attr, t2) };
  }
}, Aa = "BODY", Ta = "STRUCT", Pa = "NONE", _a = (e2, t2) => {
  const r2 = e2.lines.length > 0 ? va(e2) : e2, a2 = t2[1] || void 0;
  return { ...r2, structName: a2, blockType: a2 ? Ta : "INVALID", locale: t2[2], lines: [] };
}, Na = (e2) => ({
  ...e2.lines.length > 0 ? va(e2) : e2,
  blockType: Aa,
  structName: void 0,
  locale: void 0,
  lines: []
}), va = (e2) => e2.blockType === Aa ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Pa } : e2.structName && e2.blockType === Ta ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Pa,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Pa,
  structName: void 0,
  lines: []
}, Ra = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, ka = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Sa = (e2) => {
  const t2 = Ca(e2), r2 = Ma(t2);
  return Oa(r2);
}, Ca = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: Ra(e2.currentOption).items } };
  }
  return e2;
}, Oa = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Ma = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, r2 = { ...ka(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
    return {
      ...e2,
      commands: [...e2.commands, r2],
      currentCommand: null,
      currentParam: null,
      currentContext: null,
      currentOption: null
    };
  }
  return e2;
}, La = (e2, t2) => {
  const r2 = e2.lines.reduce((e3, r3) => {
    const a2 = r3.trim().replace(/^\*\s?/, "");
    if (!a2.startsWith("@")) return e3.currentContext === na ? { ...e3, helpLines: e3.helpLines.concat(a2) } : e3;
    const [s2, ...i2] = a2.slice(1).split(" "), o2 = i2.join(" ").trim(), n2 = t2[s2];
    return n2 ? n2(e3, o2) : e3;
  }, Fa());
  return Sa(r2);
}, wa = (e2, t2) => {
  const r2 = ((e3) => {
    const t3 = e3.split("\n"), r3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Pa
    }, a3 = t3.reduce((e4, t4) => {
      const r4 = t4.trim(), a4 = r4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return a4 ? _a(e4, a4) : "/*:" === r4 ? Na(e4) : "*/" === r4 ? e4.lines.length > 0 ? va(e4) : e4 : { ...e4, lines: e4.lines.concat([r4]) };
    }, r3);
    return { structs: a3.structs, bodies: a3.bodies };
  })(e2), a2 = r2.structs.map((e3) => ((e4) => {
    const t3 = La(e4, Ga);
    return { name: e4.struct, params: t3.params };
  })(e3)), s2 = ((e3) => {
    if (0 !== e3.bodies.length) return e3.bodies[0];
  })(r2);
  if (!s2) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: a2
  };
  const i2 = La(s2, t2);
  return { params: i2.params, commands: i2.commands, meta: i2.meta, helpLines: i2.helpLines, structs: a2 };
}, Fa = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), Da = (e2, t2, r2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: r2 } }
} : e2, Ha = (e2, t2, r2) => ({ ...e2, meta: { [t2]: r2, ...e2.meta } }), Ga = {
  param: (e2, t2) => {
    const r2 = Sa(e2);
    return r2.params.some((e3) => e3.name === t2) ? r2 : { ...r2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? Da(e2, pa, t2) : e2.currentCommand && !(pa in e2.currentCommand) ? { ...e2, currentCommand: {
    ...ka(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [pa]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? Da(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const r2 = Sa(e2);
    return r2.commands.some((e3) => e3.command === t2) ? r2 : { ...r2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const r2 = {
        ...ka(e2.currentCommand),
        command: e2.currentCommand.command,
        args: e2.currentCommand.args.concat(e2.currentParam)
      };
      return {
        ...e2,
        commands: e2.commands,
        currentCommand: r2,
        currentContext: "arg",
        currentParam: { name: t2, attr: {} }
      };
    }
    return { ...e2, currentParam: { name: t2, attr: {} } };
  },
  help: (e2) => ({ ...Sa(e2), currentContext: na }),
  option: (e2, t2) => {
    if (!e2.currentParam) return e2;
    const r2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: e3.currentOption }), currentOption: t3 } : { items: e3.items, currentOption: t3 })(e2.currentOption ?? {
      items: []
    }, t2);
    return { ...e2, currentOption: r2 };
  },
  value: (e2, t2) => {
    if (!e2.currentOption) return e2;
    const r2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: t3 }) } : {
      items: e3.items
    })(e2.currentOption, t2);
    return { ...e2, currentOption: r2 };
  },
  type: (e2, t2) => {
    if (((e3) => e3.endsWith(">") && e3.startsWith("struct<"))(t2)) {
      const r2 = t2.slice(7, -1), a2 = Da(e2, da, r2);
      return Da(a2, ma, da);
    }
    return e2.currentParam ? Da(e2, ma, t2) : e2;
  },
  default: (e2, t2) => Da(e2, "default", t2),
  on: (e2, t2) => Da(e2, "on", t2),
  off: (e2, t2) => Da(e2, "off", t2),
  min: (e2, t2) => Da(e2, "min", t2),
  max: (e2, t2) => Da(e2, "max", t2),
  base: (e2, t2) => {
    return { ...e2, dependencies: (r2 = e2.dependencies, a2 = t2, { orderAfter: r2.orderAfter, orderBefore: r2.orderBefore, base: r2.base.concat(a2) }) };
    var r2, a2;
  },
  orderAfter: (e2, t2) => {
    return { ...e2, dependencies: (r2 = e2.dependencies, a2 = t2, { base: r2.base, orderBefore: r2.orderBefore, orderAfter: r2.orderAfter.concat(a2) }) };
    var r2, a2;
  },
  orderBefore: (e2, t2) => {
    return {
      ...e2,
      dependencies: (r2 = e2.dependencies, a2 = t2, { base: r2.base, orderAfter: r2.orderAfter, orderBefore: r2.orderBefore.concat(a2) })
    };
    var r2, a2;
  },
  author: (e2, t2) => Ha(e2, "author", t2),
  plugindesc: (e2, t2) => Ha(e2, "plugindesc", t2),
  url: (e2, t2) => Ha(e2, "url", t2)
}, qa = (e2) => Ua(((e3) => wa(e3, Ga))(e2)), Ua = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: ja(e2.commands),
  params: Ba(e2.params)
}), Ba = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: ua(t2), ...e3 }), {}), ja = (e2) => e2.reduce((e3, t2) => {
  const r2 = { desc: t2.desc, text: t2.text, args: Ba(t2.args) };
  return { [t2.command]: r2, ...e3 };
}, {});
function Va(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var za, Wa = { exports: {} };
const Ya = Va(function() {
  if (za) return Wa.exports;
  za = 1, Wa.exports = t2, Wa.exports.default = t2;
  const e2 = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function t2(r2, { instancePath: a2 = "", parentData: s2, parentDataProperty: i2, rootData: o2 = r2 } = {}) {
    if (!r2 || "object" != typeof r2 || Array.isArray(r2)) return t2.errors = [{ instancePath: a2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
    {
      let s3;
      if (void 0 === r2.code && (s3 = "code") || void 0 === r2.parameters && (s3 = "parameters") || void 0 === r2.indent && (s3 = "indent")) return t2.errors = [{
        instancePath: a2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: s3 },
        message: "must have required property '" + s3 + "'"
      }], false;
      for (const e3 in r2) if ("code" !== e3 && "indent" !== e3 && "parameters" !== e3) return t2.errors = [{
        instancePath: a2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e3 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== r2.code) {
        let s4 = r2.code;
        const i3 = 0;
        if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return t2.errors = [{
          instancePath: a2 + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], false;
        if (132 !== s4 && 133 !== s4 && 139 !== s4 && 241 !== s4 && 245 !== s4 && 249 !== s4 && 250 !== s4) return t2.errors = [{
          instancePath: a2 + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: e2.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], false;
        var n2 = 0 === i3;
      } else n2 = true;
      if (n2) {
        if (void 0 !== r2.indent) {
          let e3 = r2.indent;
          const s4 = 0;
          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return t2.errors = [{
            instancePath: a2 + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          n2 = 0 === s4;
        } else n2 = true;
        if (n2) if (void 0 !== r2.parameters) {
          let e3 = r2.parameters;
          const s4 = 0;
          if (!Array.isArray(e3)) return t2.errors = [{
            instancePath: a2 + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], false;
          if (e3.length > 1) return t2.errors = [{
            instancePath: a2 + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], false;
          if (e3.length < 1) return t2.errors = [{
            instancePath: a2 + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], false;
          if (e3.length > 0) {
            let r3 = e3[0];
            if (!r3 || "object" != typeof r3 || Array.isArray(r3)) return t2.errors = [{
              instancePath: a2 + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], false;
            {
              let e4;
              if (void 0 === r3.name && (e4 = "name") || void 0 === r3.volume && (e4 = "volume") || void 0 === r3.pitch && (e4 = "pitch") || void 0 === r3.pan && (e4 = "pan")) return t2.errors = [{
                instancePath: a2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: e4 },
                message: "must have required property '" + e4 + "'"
              }], false;
              for (const e5 in r3) if ("name" !== e5 && "volume" !== e5 && "pitch" !== e5 && "pan" !== e5) return t2.errors = [{
                instancePath: a2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: e5 },
                message: "must NOT have additional properties"
              }], false;
              if (void 0 !== r3.name) {
                const e5 = 0;
                if ("string" != typeof r3.name) return t2.errors = [{
                  instancePath: a2 + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                var m2 = 0 === e5;
              } else m2 = true;
              if (m2) {
                if (void 0 !== r3.volume) {
                  let e5 = r3.volume;
                  const s5 = 0;
                  if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return t2.errors = [{
                    instancePath: a2 + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  m2 = 0 === s5;
                } else m2 = true;
                if (m2) {
                  if (void 0 !== r3.pitch) {
                    let e5 = r3.pitch;
                    const s5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return t2.errors = [{
                      instancePath: a2 + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    m2 = 0 === s5;
                  } else m2 = true;
                  if (m2) if (void 0 !== r3.pan) {
                    let e5 = r3.pan;
                    const s5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return t2.errors = [{
                      instancePath: a2 + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    m2 = 0 === s5;
                  } else m2 = true;
                }
              }
            }
          }
          n2 = 0 === s4;
        } else n2 = true;
      }
    }
    return t2.errors = null, true;
  }
  return Wa.exports;
}());
var Ka, Xa = { exports: {} };
const $a = Va(function() {
  if (Ka) return Xa.exports;
  function e2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: s2, rootData: i2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{ instancePath: r2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
    {
      let a3;
      if (void 0 === t2.name && (a3 = "name") || void 0 === t2.id && (a3 = "id") || void 0 === t2.nickname && (a3 = "nickname") || void 0 === t2.battlerName && (a3 = "battlerName") || void 0 === t2.characterName && (a3 = "characterName") || void 0 === t2.characterIndex && (a3 = "characterIndex") || void 0 === t2.faceName && (a3 = "faceName") || void 0 === t2.faceIndex && (a3 = "faceIndex") || void 0 === t2.classId && (a3 = "classId") || void 0 === t2.initialLevel && (a3 = "initialLevel") || void 0 === t2.maxLevel && (a3 = "maxLevel")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const a4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var o2 = 0 === a4;
      } else o2 = true;
      if (o2) {
        if (void 0 !== t2.battlerName) {
          const a4 = 0;
          if ("string" != typeof t2.battlerName) return e2.errors = [{
            instancePath: r2 + "/battlerName",
            schemaPath: "#/properties/battlerName/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], false;
          o2 = 0 === a4;
        } else o2 = true;
        if (o2) {
          if (void 0 !== t2.characterName) {
            const a4 = 0;
            if ("string" != typeof t2.characterName) return e2.errors = [{
              instancePath: r2 + "/characterName",
              schemaPath: "#/properties/characterName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            o2 = 0 === a4;
          } else o2 = true;
          if (o2) {
            if (void 0 !== t2.characterIndex) {
              let a4 = t2.characterIndex;
              const s3 = 0;
              if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{ instancePath: r2 + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], false;
              o2 = 0 === s3;
            } else o2 = true;
            if (o2) {
              if (void 0 !== t2.faceName) {
                const a4 = 0;
                if ("string" != typeof t2.faceName) return e2.errors = [{
                  instancePath: r2 + "/faceName",
                  schemaPath: "#/properties/faceName/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                o2 = 0 === a4;
              } else o2 = true;
              if (o2) {
                if (void 0 !== t2.faceIndex) {
                  let a4 = t2.faceIndex;
                  const s3 = 0;
                  if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                    instancePath: r2 + "/faceIndex",
                    schemaPath: "#/properties/faceIndex/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof a4 && isFinite(a4)) {
                    if (a4 > 7 || isNaN(a4)) return e2.errors = [{
                      instancePath: r2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 7 },
                      message: "must be <= 7"
                    }], false;
                    if (a4 < 0 || isNaN(a4)) return e2.errors = [{
                      instancePath: r2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                  }
                  o2 = 0 === s3;
                } else o2 = true;
                if (o2) {
                  if (void 0 !== t2.id) {
                    let a4 = t2.id;
                    const s3 = 0;
                    if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                      instancePath: r2 + "/id",
                      schemaPath: "#/properties/id/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                      instancePath: r2 + "/id",
                      schemaPath: "#/properties/id/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    o2 = 0 === s3;
                  } else o2 = true;
                  if (o2) {
                    if (void 0 !== t2.nickname) {
                      const a4 = 0;
                      if ("string" != typeof t2.nickname) return e2.errors = [{
                        instancePath: r2 + "/nickname",
                        schemaPath: "#/properties/nickname/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], false;
                      o2 = 0 === a4;
                    } else o2 = true;
                    if (o2) {
                      if (void 0 !== t2.profile) {
                        const a4 = 0;
                        if ("string" != typeof t2.profile) return e2.errors = [{ instancePath: r2 + "/profile", schemaPath: "#/properties/profile/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
                        o2 = 0 === a4;
                      } else o2 = true;
                      if (o2) {
                        if (void 0 !== t2.initialLevel) {
                          let a4 = t2.initialLevel;
                          const s3 = 0;
                          if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                            instancePath: r2 + "/initialLevel",
                            schemaPath: "#/properties/initialLevel/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{ instancePath: r2 + "/initialLevel", schemaPath: "#/properties/initialLevel/minimum", keyword: "minimum", params: {
                            comparison: ">=",
                            limit: 0
                          }, message: "must be >= 0" }], false;
                          o2 = 0 === s3;
                        } else o2 = true;
                        if (o2) {
                          if (void 0 !== t2.maxLevel) {
                            let a4 = t2.maxLevel;
                            const s3 = 0;
                            if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                              instancePath: r2 + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            o2 = 0 === s3;
                          } else o2 = true;
                          if (o2) {
                            if (void 0 !== t2.classId) {
                              let a4 = t2.classId;
                              const s3 = 0;
                              if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                                instancePath: r2 + "/classId",
                                schemaPath: "#/properties/classId/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{ instancePath: r2 + "/classId", schemaPath: "#/properties/classId/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: 0
                              }, message: "must be >= 0" }], false;
                              o2 = 0 === s3;
                            } else o2 = true;
                            if (o2) {
                              if (void 0 !== t2.equips) {
                                let a4 = t2.equips;
                                const s3 = 0;
                                if (!Array.isArray(a4)) return e2.errors = [{
                                  instancePath: r2 + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], false;
                                {
                                  const t3 = a4.length;
                                  for (let s4 = 0; s4 < t3; s4++) {
                                    let t4 = a4[s4];
                                    const i3 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/equips/" + s4, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    if (!(0 === i3)) break;
                                  }
                                }
                                o2 = 0 === s3;
                              } else o2 = true;
                              if (o2) {
                                if (void 0 !== t2.note) {
                                  const a4 = 0;
                                  if ("string" != typeof t2.note) return e2.errors = [{
                                    instancePath: r2 + "/note",
                                    schemaPath: "#/properties/note/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], false;
                                  o2 = 0 === a4;
                                } else o2 = true;
                                if (o2) if (void 0 !== t2.traits) {
                                  let a4 = t2.traits;
                                  const s3 = 0;
                                  if (!Array.isArray(a4)) return e2.errors = [{
                                    instancePath: r2 + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], false;
                                  {
                                    const t3 = a4.length;
                                    for (let s4 = 0; s4 < t3; s4++) {
                                      let t4 = a4[s4];
                                      const i3 = 0;
                                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                        instancePath: r2 + "/traits/" + s4,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], false;
                                      {
                                        let a5;
                                        if (void 0 === t4.code && (a5 = "code") || void 0 === t4.dataId && (a5 = "dataId") || void 0 === t4.value && (a5 = "value")) return e2.errors = [{
                                          instancePath: r2 + "/traits/" + s4,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: a5 },
                                          message: "must have required property '" + a5 + "'"
                                        }], false;
                                        if (void 0 !== t4.code) {
                                          let a6 = t4.code;
                                          const i4 = 0;
                                          if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                            instancePath: r2 + "/traits/" + s4 + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          var n2 = 0 === i4;
                                        } else n2 = true;
                                        if (n2) {
                                          if (void 0 !== t4.dataId) {
                                            let a6 = t4.dataId;
                                            const i4 = 0;
                                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + s4 + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            n2 = 0 === i4;
                                          } else n2 = true;
                                          if (n2) if (void 0 !== t4.value) {
                                            let a6 = t4.value;
                                            const i4 = 0;
                                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + s4 + "/value",
                                              schemaPath: "#/properties/traits/items/properties/value/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            n2 = 0 === i4;
                                          } else n2 = true;
                                        }
                                      }
                                      if (!(0 === i3)) break;
                                    }
                                  }
                                  o2 = 0 === s3;
                                } else o2 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return Ka = 1, Xa.exports = e2, Xa.exports.default = e2, Xa.exports;
}());
var Ja, Za = { exports: {} };
const Qa = Va(function() {
  if (Ja) return Za.exports;
  function e2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: s2, rootData: i2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let a3;
      if (void 0 === t2.name && (a3 = "name") || void 0 === t2.id && (a3 = "id") || void 0 === t2.description && (a3 = "description") || void 0 === t2.iconIndex && (a3 = "iconIndex") || void 0 === t2.price && (a3 = "price") || void 0 === t2.params && (a3 = "params") || void 0 === t2.traits && (a3 = "traits") || void 0 === t2.note && (a3 = "note") || void 0 === t2.etypeId && (a3 = "etypeId") || void 0 === t2.atypeId && (a3 = "atypeId")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const a4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var o2 = 0 === a4;
      } else o2 = true;
      if (o2) {
        if (void 0 !== t2.id) {
          let a4 = t2.id;
          const s3 = 0;
          if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          o2 = 0 === s3;
        } else o2 = true;
        if (o2) {
          if (void 0 !== t2.description) {
            const a4 = 0;
            if ("string" != typeof t2.description) return e2.errors = [{
              instancePath: r2 + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            o2 = 0 === a4;
          } else o2 = true;
          if (o2) {
            if (void 0 !== t2.iconIndex) {
              let a4 = t2.iconIndex;
              const s3 = 0;
              if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                instancePath: r2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], false;
              if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                instancePath: r2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], false;
              o2 = 0 === s3;
            } else o2 = true;
            if (o2) {
              if (void 0 !== t2.price) {
                let a4 = t2.price;
                const s3 = 0;
                if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                  instancePath: r2 + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                  instancePath: r2 + "/price",
                  schemaPath: "#/properties/price/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], false;
                o2 = 0 === s3;
              } else o2 = true;
              if (o2) {
                if (void 0 !== t2.note) {
                  const a4 = 0;
                  if ("string" != typeof t2.note) return e2.errors = [{
                    instancePath: r2 + "/note",
                    schemaPath: "#/properties/note/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], false;
                  o2 = 0 === a4;
                } else o2 = true;
                if (o2) {
                  if (void 0 !== t2.etypeId) {
                    let a4 = t2.etypeId;
                    const s3 = 0;
                    if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                      instancePath: r2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                      instancePath: r2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    o2 = 0 === s3;
                  } else o2 = true;
                  if (o2) {
                    if (void 0 !== t2.atypeId) {
                      let a4 = t2.atypeId;
                      const s3 = 0;
                      if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                        instancePath: r2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                        instancePath: r2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], false;
                      o2 = 0 === s3;
                    } else o2 = true;
                    if (o2) {
                      if (void 0 !== t2.params) {
                        let a4 = t2.params;
                        const s3 = 0;
                        if (!Array.isArray(a4)) return e2.errors = [{
                          instancePath: r2 + "/params",
                          schemaPath: "#/properties/params/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        if (a4.length > 8) return e2.errors = [{
                          instancePath: r2 + "/params",
                          schemaPath: "#/properties/params/maxItems",
                          keyword: "maxItems",
                          params: { limit: 8 },
                          message: "must NOT have more than 8 items"
                        }], false;
                        if (a4.length < 8) return e2.errors = [{ instancePath: r2 + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                          limit: 8
                        }, message: "must NOT have fewer than 8 items" }], false;
                        {
                          const t3 = a4.length;
                          if (t3 > 0) {
                            let t4 = a4[0];
                            const s4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/0",
                              schemaPath: "#/properties/params/items/0/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            var n2 = 0 === s4;
                          }
                          if (n2) {
                            if (t3 > 1) {
                              let t4 = a4[1];
                              const s4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              n2 = 0 === s4;
                            }
                            if (n2) {
                              if (t3 > 2) {
                                let t4 = a4[2];
                                const s4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/2",
                                  schemaPath: "#/properties/params/items/2/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                n2 = 0 === s4;
                              }
                              if (n2) {
                                if (t3 > 3) {
                                  let t4 = a4[3];
                                  const s4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                    type: "integer"
                                  }, message: "must be integer" }], false;
                                  n2 = 0 === s4;
                                }
                                if (n2) {
                                  if (t3 > 4) {
                                    let t4 = a4[4];
                                    const s4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                      instancePath: r2 + "/params/4",
                                      schemaPath: "#/properties/params/items/4/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    n2 = 0 === s4;
                                  }
                                  if (n2) {
                                    if (t3 > 5) {
                                      let t4 = a4[5];
                                      const s4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      n2 = 0 === s4;
                                    }
                                    if (n2) {
                                      if (t3 > 6) {
                                        let t4 = a4[6];
                                        const s4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                          instancePath: r2 + "/params/6",
                                          schemaPath: "#/properties/params/items/6/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], false;
                                        n2 = 0 === s4;
                                      }
                                      if (n2 && t3 > 7) {
                                        let t4 = a4[7];
                                        const s4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], false;
                                        n2 = 0 === s4;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        o2 = 0 === s3;
                      } else o2 = true;
                      if (o2) if (void 0 !== t2.traits) {
                        let a4 = t2.traits;
                        const s3 = 0;
                        if (!Array.isArray(a4)) return e2.errors = [{
                          instancePath: r2 + "/traits",
                          schemaPath: "#/properties/traits/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const t3 = a4.length;
                          for (let s4 = 0; s4 < t3; s4++) {
                            let t4 = a4[s4];
                            const i3 = 0;
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: r2 + "/traits/" + s4, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let a5;
                              if (void 0 === t4.code && (a5 = "code") || void 0 === t4.dataId && (a5 = "dataId") || void 0 === t4.value && (a5 = "value")) return e2.errors = [{
                                instancePath: r2 + "/traits/" + s4,
                                schemaPath: "#/properties/traits/items/required",
                                keyword: "required",
                                params: { missingProperty: a5 },
                                message: "must have required property '" + a5 + "'"
                              }], false;
                              if (void 0 !== t4.code) {
                                let a6 = t4.code;
                                const i4 = 0;
                                if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                  instancePath: r2 + "/traits/" + s4 + "/code",
                                  schemaPath: "#/properties/traits/items/properties/code/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var m2 = 0 === i4;
                              } else m2 = true;
                              if (m2) {
                                if (void 0 !== t4.dataId) {
                                  let a6 = t4.dataId;
                                  const i4 = 0;
                                  if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + s4 + "/dataId",
                                    schemaPath: "#/properties/traits/items/properties/dataId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  m2 = 0 === i4;
                                } else m2 = true;
                                if (m2) if (void 0 !== t4.value) {
                                  let a6 = t4.value;
                                  const i4 = 0;
                                  if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + s4 + "/value",
                                    schemaPath: "#/properties/traits/items/properties/value/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  m2 = 0 === i4;
                                } else m2 = true;
                              }
                            }
                            if (!(0 === i3)) break;
                          }
                        }
                        o2 = 0 === s3;
                      } else o2 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return Ja = 1, Za.exports = e2, Za.exports.default = e2, Za.exports;
}());
var es, ts = { exports: {} };
const rs = Va(function() {
  if (es) return ts.exports;
  function e2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: s2, rootData: i2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let a3;
      if (void 0 === t2.name && (a3 = "name") || void 0 === t2.id && (a3 = "id") || void 0 === t2.note && (a3 = "note") || void 0 === t2.expParams && (a3 = "expParams") || void 0 === t2.params && (a3 = "params") || void 0 === t2.learnings && (a3 = "learnings") || void 0 === t2.traits && (a3 = "traits")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      for (const a4 in t2) if ("name" !== a4 && "id" !== a4 && "note" !== a4 && "expParams" !== a4 && "params" !== a4 && "learnings" !== a4 && "traits" !== a4) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: a4 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== t2.name) {
        const a4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var o2 = 0 === a4;
      } else o2 = true;
      if (o2) {
        if (void 0 !== t2.id) {
          let a4 = t2.id;
          const s3 = 0;
          if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          o2 = 0 === s3;
        } else o2 = true;
        if (o2) {
          if (void 0 !== t2.note) {
            const a4 = 0;
            if ("string" != typeof t2.note) return e2.errors = [{
              instancePath: r2 + "/note",
              schemaPath: "#/properties/note/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            o2 = 0 === a4;
          } else o2 = true;
          if (o2) {
            if (void 0 !== t2.expParams) {
              let a4 = t2.expParams;
              const s3 = 0;
              if (!Array.isArray(a4)) return e2.errors = [{
                instancePath: r2 + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], false;
              {
                const t3 = a4.length;
                for (let s4 = 0; s4 < t3; s4++) {
                  let t4 = a4[s4];
                  const i3 = 0;
                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/expParams/" + s4, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], false;
                  if (!(0 === i3)) break;
                }
              }
              o2 = 0 === s3;
            } else o2 = true;
            if (o2) {
              if (void 0 !== t2.params) {
                let a4 = t2.params;
                const s3 = 0;
                if (!Array.isArray(a4)) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], false;
                if (a4.length > 8) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/maxItems",
                  keyword: "maxItems",
                  params: { limit: 8 },
                  message: "must NOT have more than 8 items"
                }], false;
                if (a4.length < 8) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/minItems",
                  keyword: "minItems",
                  params: { limit: 8 },
                  message: "must NOT have fewer than 8 items"
                }], false;
                {
                  const t3 = a4.length;
                  if (t3 > 0) {
                    let t4 = a4[0];
                    const s4 = 0;
                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                      instancePath: r2 + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    var n2 = 0 === s4;
                  }
                  if (n2) {
                    if (t3 > 1) {
                      let t4 = a4[1];
                      const s4 = 0;
                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], false;
                      n2 = 0 === s4;
                    }
                    if (n2) {
                      if (t3 > 2) {
                        let t4 = a4[2];
                        const s4 = 0;
                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                          instancePath: r2 + "/params/2",
                          schemaPath: "#/properties/params/items/2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        n2 = 0 === s4;
                      }
                      if (n2) {
                        if (t3 > 3) {
                          let t4 = a4[3];
                          const s4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          n2 = 0 === s4;
                        }
                        if (n2) {
                          if (t3 > 4) {
                            let t4 = a4[4];
                            const s4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/4",
                              schemaPath: "#/properties/params/items/4/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === s4;
                          }
                          if (n2) {
                            if (t3 > 5) {
                              let t4 = a4[5];
                              const s4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              n2 = 0 === s4;
                            }
                            if (n2) {
                              if (t3 > 6) {
                                let t4 = a4[6];
                                const s4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/6",
                                  schemaPath: "#/properties/params/items/6/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                n2 = 0 === s4;
                              }
                              if (n2 && t3 > 7) {
                                let t4 = a4[7];
                                const s4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                n2 = 0 === s4;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                o2 = 0 === s3;
              } else o2 = true;
              if (o2) {
                if (void 0 !== t2.learnings) {
                  let a4 = t2.learnings;
                  const s3 = 0;
                  if (!Array.isArray(a4)) return e2.errors = [{
                    instancePath: r2 + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = a4.length;
                    for (let s4 = 0; s4 < t3; s4++) {
                      let t4 = a4[s4];
                      const i3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/learnings/" + s4,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let a5;
                        if (void 0 === t4.level && (a5 = "level") || void 0 === t4.skillId && (a5 = "skillId")) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + s4,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: a5 },
                          message: "must have required property '" + a5 + "'"
                        }], false;
                        for (const a6 in t4) if ("level" !== a6 && "skillId" !== a6 && "note" !== a6) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + s4,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: a6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.level) {
                          let a6 = t4.level;
                          const i4 = 0;
                          if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                            instancePath: r2 + "/learnings/" + s4 + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var m2 = 0 === i4;
                        } else m2 = true;
                        if (m2) {
                          if (void 0 !== t4.skillId) {
                            let a6 = t4.skillId;
                            const i4 = 0;
                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + s4 + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === i4;
                          } else m2 = true;
                          if (m2) if (void 0 !== t4.note) {
                            const a6 = 0;
                            if ("string" != typeof t4.note) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + s4 + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], false;
                            m2 = 0 === a6;
                          } else m2 = true;
                        }
                      }
                      if (!(0 === i3)) break;
                    }
                  }
                  o2 = 0 === s3;
                } else o2 = true;
                if (o2) if (void 0 !== t2.traits) {
                  let a4 = t2.traits;
                  const s3 = 0;
                  if (!Array.isArray(a4)) return e2.errors = [{
                    instancePath: r2 + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = a4.length;
                    for (let s4 = 0; s4 < t3; s4++) {
                      let t4 = a4[s4];
                      const i3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/traits/" + s4,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let a5;
                        if (void 0 === t4.code && (a5 = "code") || void 0 === t4.dataId && (a5 = "dataId") || void 0 === t4.value && (a5 = "value")) return e2.errors = [{
                          instancePath: r2 + "/traits/" + s4,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: a5 },
                          message: "must have required property '" + a5 + "'"
                        }], false;
                        for (const a6 in t4) if ("code" !== a6 && "dataId" !== a6 && "value" !== a6) return e2.errors = [{
                          instancePath: r2 + "/traits/" + s4,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: a6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.code) {
                          let a6 = t4.code;
                          const i4 = 0;
                          if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                            instancePath: r2 + "/traits/" + s4 + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var p2 = 0 === i4;
                        } else p2 = true;
                        if (p2) {
                          if (void 0 !== t4.dataId) {
                            let a6 = t4.dataId;
                            const i4 = 0;
                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + s4 + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === i4;
                          } else p2 = true;
                          if (p2) if (void 0 !== t4.value) {
                            let a6 = t4.value;
                            const i4 = 0;
                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + s4 + "/value",
                              schemaPath: "#/properties/traits/items/properties/value/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === i4;
                          } else p2 = true;
                        }
                      }
                      if (!(0 === i3)) break;
                    }
                  }
                  o2 = 0 === s3;
                } else o2 = true;
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return es = 1, ts.exports = e2, ts.exports.default = e2, ts.exports;
}());
exports.ABORT_BATTLE = 340, exports.AUTHOR_RMMZ = "rmmz", exports.BATTLE_PROCESSING = 301, exports.CHANGE_ACTOR_IMAGES = 322, exports.CHANGE_ARMORS = 128, exports.CHANGE_BATTLE_BACKGROUND = 283, exports.CHANGE_BATTLE_BGM = 132, exports.CHANGE_CLASS = 321, exports.CHANGE_DEFEAT_ME = 139, exports.CHANGE_ENCOUNTER = 136, exports.CHANGE_ENEMY_HP = 331, exports.CHANGE_ENEMY_MP = 332, exports.CHANGE_ENEMY_STATE = 333, exports.CHANGE_ENEMY_TP = 342, exports.CHANGE_EXP = 315, exports.CHANGE_FORMATION_ACCESS = 137, exports.CHANGE_GOLD = 125, exports.CHANGE_HP = 311, exports.CHANGE_ITEMS = 126, exports.CHANGE_MENU_ACCESS = 135, exports.CHANGE_MP = 312, exports.CHANGE_NAME = 320, exports.CHANGE_NICKNAME = 324, exports.CHANGE_PARALLAX = 284, exports.CHANGE_PARTY_MEMBER = 129, exports.CHANGE_PLAYER_FOLLOWERS = 216, exports.CHANGE_PROFILE = 325, exports.CHANGE_SAVE_ACCESS = 134, exports.CHANGE_TILESET = 282, exports.CHANGE_TP = 313, exports.CHANGE_TRANSPARENCY = 211, exports.CHANGE_VEHICLE_BGM = 140, exports.CHANGE_VEHICLE_IMAGE = 323, exports.CHANGE_VICTORY_ME = 133, exports.CHANGE_WEAPONS = 127, exports.CHANGE_WINDOW_COLOR = 138, exports.COLLAPS_BOSS = 1, exports.COLLAPS_INSTANT = 2, exports.COLLAPS_NONE = 3, exports.COLLAPS_NORMAL = 0, exports.COMMENT_BODY = 408, exports.COMMENT_HEAD = 108, exports.COMMON_EVENT = 117, exports.CONDITIONAL_BRANCH = 111, exports.CONDITIONAL_BRANCH_ELSE = 411, exports.CONTROL_SELF_SWITCH = 123, exports.CONTROL_SWITCHES = 121, exports.CONTROL_TIMER = 124, exports.CONTROL_VARIABLES = 122, exports.DEFAULT_DAMAGE_LABELS = I, exports.DEFAULT_GLOBAL_LABELS = It, exports.DEFAULT_ITEM_LABELS = { title: "アイテム", options: { consumable: "消耗品" } }, exports.DEFAULT_SKILL_LABELS = { title: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = { title: "オプション", options: {
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
} }, exports.LABEL_JUMP = 119, exports.LABEL_SET_DATA = E, exports.LABEL_SET_ITEM_EFFECT = Ne, exports.LABEL_SET_TRAIT = G, exports.LOOP = 112, exports.LOOP_BREAK = 113, exports.MODULE_DATA = "data", exports.MOVE_PICTURE = 232, exports.NAME_INPUT_PROCESSING = 303, exports.NO_OPERATION = 0, exports.OPEN_MENU_SCREEN = 351, exports.OPEN_SAVE_SCREEN = 352, exports.OPERAND_CONSTANT = 0, exports.OPERAND_GAMEDATA = 3, exports.OPERAND_RANDOM = 2, exports.OPERAND_SCRIPT = 4, exports.OPERAND_VARIABLE = 1, exports.PARTY_ABILITY_CANCEL_SURPRISE = 2, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = 5, exports.PARTY_ABILITY_ENCOUNTER_HALF = 0, exports.PARTY_ABILITY_ENCOUNTER_NONE = 1, exports.PARTY_ABILITY_GOLD_DOUBLE = 4, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = 3, exports.PLAY_BGM = 241, exports.PLAY_BGS = 245, exports.PLAY_ME = 249, exports.PLAY_MOVIE = 261, exports.PLAY_SE = 250, exports.PLUGIN_COMMAND_MV = 356, exports.PLUGIN_COMMAND_MZ = 357, exports.RECOVER_ALL = 314, exports.REGULAR_PARAM_AGI = 6, exports.REGULAR_PARAM_ATK = 2, exports.REGULAR_PARAM_DEF = 3, exports.REGULAR_PARAM_LUK = 7, exports.REGULAR_PARAM_MATK = 4, exports.REGULAR_PARAM_MAX_HP = 0, exports.REGULAR_PARAM_MAX_MP = 1, exports.REGULAR_PARAM_MDEF = 5, exports.RESUME_BGM = 244, exports.RETURN_TO_TITLE_SCREEN = 354, exports.ROTATE_PICTURE = 233, exports.ROUTE_CHANGE_BLEND_MODE = 43, exports.ROUTE_CHANGE_FREQ = 30, exports.ROUTE_CHANGE_IMAGE = 41, exports.ROUTE_CHANGE_OPACITY = 42, exports.ROUTE_CHANGE_SPEED = 29, exports.ROUTE_DIR_FIX_OFF = 36, exports.ROUTE_DIR_FIX_ON = 35, exports.ROUTE_END = 0, exports.ROUTE_JUMP = 14, exports.ROUTE_MOVE_AWAY = 11, exports.ROUTE_MOVE_BACKWARD = 13, exports.ROUTE_MOVE_DOWN = 1, exports.ROUTE_MOVE_FORWARD = 12, exports.ROUTE_MOVE_LEFT = 2, exports.ROUTE_MOVE_LOWER_L = 5, exports.ROUTE_MOVE_LOWER_R = 6, exports.ROUTE_MOVE_RANDOM = 9, exports.ROUTE_MOVE_RIGHT = 3, exports.ROUTE_MOVE_TOWARD = 10, exports.ROUTE_MOVE_UP = 4, exports.ROUTE_MOVE_UPPER_L = 7, exports.ROUTE_MOVE_UPPER_R = 8, exports.ROUTE_PLAY_SE = 44, exports.ROUTE_SCRIPT = 45, exports.ROUTE_STEP_ANIME_OFF = 34, exports.ROUTE_STEP_ANIME_ON = 33, exports.ROUTE_SWITCH_OFF = 28, exports.ROUTE_SWITCH_ON = 27, exports.ROUTE_THROUGH_OFF = 38, exports.ROUTE_THROUGH_ON = 37, exports.ROUTE_TRANSPARENT_OFF = 40, exports.ROUTE_TRANSPARENT_ON = 39, exports.ROUTE_TURN_180D = 22, exports.ROUTE_TURN_90D_L = 21, exports.ROUTE_TURN_90D_R = 20, exports.ROUTE_TURN_90D_R_L = 23, exports.ROUTE_TURN_AWAY = 26, exports.ROUTE_TURN_DOWN = 16, exports.ROUTE_TURN_LEFT = 17, exports.ROUTE_TURN_RANDOM = 24, exports.ROUTE_TURN_RIGHT = 18, exports.ROUTE_TURN_TOWARD = 25, exports.ROUTE_TURN_UP = 19, exports.ROUTE_WAIT = 15, exports.ROUTE_WALK_ANIME_OFF = 32, exports.ROUTE_WALK_ANIME_ON = 31, exports.SAVE_BGM = 243, exports.SCRIPT_EVAL = 355, exports.SCRIPT_EVAL_BODY = 655, exports.SCROLL_MAP = 204, exports.SELECT_ITEM = 104, exports.SET_EVENT_LOCATION = 203, exports.SET_MOVEMENT_ROUTE = 205, exports.SET_VEHICLE_LOCATION = 202, exports.SET_WEATHER_EFFECT = 236, exports.SHAKE_SCREEN = 225, exports.SHOP_PROCESSING = 302, exports.SHOP_PROCESSING_BODY = 605, exports.SHOW_ANIMATION = 212, exports.SHOW_BALLOON_ICON = 213, exports.SHOW_BATTLE_ANIMATION = 337, exports.SHOW_CHOICES = 102, exports.SHOW_CHOICES_ITEM = 402, exports.SHOW_MESSAGE = 101, exports.SHOW_MESSAGE_BODY = 401, exports.SHOW_PICTURE = 231, exports.SHOW_SCROLLING_TEXT = 105, exports.SHOW_SCROLLING_TEXT_BODY = 405, exports.SKIP = 109, exports.SPECIAL_EFFECT_ESCAPE = 0, exports.SPECIAL_PARAM_EXR = 9, exports.SPECIAL_PARAM_FDR = 8, exports.SPECIAL_PARAM_GRD = 1, exports.SPECIAL_PARAM_MCR = 4, exports.SPECIAL_PARAM_MDR = 7, exports.SPECIAL_PARAM_PDR = 6, exports.SPECIAL_PARAM_PHA = 3, exports.SPECIAL_PARAM_REC = 2, exports.SPECIAL_PARAM_TCR = 5, exports.SPECIAL_PARAM_TGR = 0, exports.SRC_COLOR = "colors", exports.SRC_DATA_ACTOR = "actor", exports.SRC_DATA_ARMOR = "armor", exports.SRC_DATA_CLASS = "class", exports.SRC_DATA_COMMON_EVNET = "common_event", exports.SRC_DATA_ENEMY = "enemy", exports.SRC_DATA_ITEMS = "item", exports.SRC_DATA_MAP = "map", exports.SRC_DATA_SKILL = "skill", exports.SRC_DATA_STATE = "state", exports.SRC_DATA_TROOP = "troop", exports.SRC_DATA_WEAPON = "weapon", exports.STOP_SE = 251, exports.TINT_PICTURE = 234, exports.TINT_SCREEN = 223, exports.TRAIT_ACTION_PLUS = 61, exports.TRAIT_ATTACK_ELEMENT = 31, exports.TRAIT_ATTACK_SKILL = 35, exports.TRAIT_ATTACK_SPEED = 33, exports.TRAIT_ATTACK_STATE = 32, exports.TRAIT_ATTACK_TIMES = 34, exports.TRAIT_COLLAPSE_TYPE = 63, exports.TRAIT_DEBUFF_RATE = 12, exports.TRAIT_ELEMENT_RATE = 11, exports.TRAIT_EQUIP_ARMOR_TYPE = 52, exports.TRAIT_EQUIP_LOCK = 53, exports.TRAIT_EQUIP_SEAL = 54, exports.TRAIT_EQUIP_WEAPON_TYPE = 51, exports.TRAIT_PARAM = 21, exports.TRAIT_PARTY_ABILITY = 64, exports.TRAIT_SKILL_ADD = 43, exports.TRAIT_SKILL_SEAL = 44, exports.TRAIT_SKILL_TYPE_ADD = 41, exports.TRAIT_SKILL_TYPE_SEAL = 42, exports.TRAIT_SLOT_TYPE = 55, exports.TRAIT_SPARAM = 23, exports.TRAIT_SPECIAL_FLAG = 62, exports.TRAIT_STATE_RATE = 13, exports.TRAIT_STATE_RESIST = 14, exports.TRAIT_XPARAM = 22, exports.TRANSFER_PLAYER = 201, exports.WAIT = 230, exports.applyFormatRule = se, exports.buildReferenceItemSources = (e2, t2, r2, a2, s2, i2) => [...q(r2, a2), ...p(e2, t2), ...Ht(s2, i2)], exports.cloneChoices = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), exports.cloneEventCommand = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Gr(e2.parameters)
}), exports.cloneParameters = Gr, exports.collapsOptionsToArray = P, exports.compileFormatRule = z, exports.compileItemEffectDisplayData = (e2, t2, r2) => {
  const a2 = ne(t2);
  return Q(r2 ? [...a2, ...r2] : a2, e2);
}, exports.compileTraitDisplayData = (e2, t2) => Q(Ue(t2), e2), exports.convertCommentArrayToObject = (e2) => ({ comment: e2[0] }), exports.createActorControlChars = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), exports.createControlCharFormat = t, exports.createEventCommand = (e2, t2, r2 = 0) => ({
  code: e2,
  indent: r2,
  parameters: t2
}), exports.createNoteEntity = He, exports.createSystemVariableControlChars = (e2) => e2.variables.map((e3, r2) => ({ text: e3 || "", controlChar: t("V", r2) })).filter((e3) => "" !== e3.text), exports.defineGameDataSources = p, exports.defineSystemItems = Ht, exports.defineTraitCollapseType = T, exports.defineTraitExtraParam = _, exports.defineTraitItems = q, exports.defineTraitPartyAbility = C, exports.defineTraitRegularParam = v, exports.defineTraitSpecialFlag = M, exports.defineTraitSpecialParam = k, exports.detectFormatErrors = (e2, t2, r2, a2 = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e2.pattern.length >= a2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: r2.formatVeryLong,
  reason: e2.pattern.slice(0, a2.formatMaxLength)
}], semanticErrors: [] } : { formatLabel: e2.label, semanticErrors: J(e2, t2, r2), syntaxErrors: $(e2.pattern, t2, r2, a2.placeHolderMaxLength) }, exports.domainNames = (e2) => Object.entries(e2).map(([, e3]) => e3.title), exports.extraParamName = (e2, t2) => {
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
}, exports.extraParamsToArray = N, exports.formatItemEffectText = (e2, t2, r2) => {
  const a2 = r2.find((e3) => e3.id === t2.dataId), s2 = a2 ? a2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", s2);
}, exports.formatTraitText = (e2, t2, r2) => {
  const a2 = z(oe);
  return se(t2, r2, a2, e2.pattern, (e3) => e3.dataId);
}, exports.fromArrayCommonEvent = (e2) => ({ eventId: e2[0] }), exports.fromArrayControlSwitches = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), exports.fromArrayInputNumber = (e2) => ({ variableId: e2[0], digits: e2[1] }), exports.fromArraySetupChoice = (e2) => ({ choices: e2[0], cancelType: e2[1], defaultType: e2[2], positionType: e2[3], background: e2[4] }), exports.fromArraySetupChoiceItem = (e2) => ({ index: e2[0], name: e2[1] }), exports.fromArrayShowMessageHeader = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), exports.fromStringArray = (e2, r2) => r2.map((r3, a2) => ({ text: r3, controlChar: t(e2, a2) })), exports.getActorValue = (e2, t2) => {
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
}, exports.getArmorCategoryEnabled = (e2) => e2.itemCategories[2], exports.getArmorTypes = Ft, exports.getControlChars = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), exports.getElementTypes = Ot, exports.getEnemyValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, exports.getEquipCommandEnabled = (e2) => e2.menuCommands[2], exports.getEquipTypes = Mt, exports.getFormationCommandEnabled = (e2) => e2.menuCommands[4], exports.getItemCategoryEnabled = (e2) => e2.itemCategories[0], exports.getItemCommandEnabled = (e2) => e2.menuCommands[0], exports.getKeyItemCategoryEnabled = (e2) => e2.itemCategories[3], exports.getNoteValue = (e2, t2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, a2 = Array.from(e2.matchAll(r2)).find((e3) => e3[1] === t2);
  return a2 ? a2[2] : void 0;
}, exports.getParamNames = (e2) => e2.terms.params.map((e3, t2) => ({ name: e3, id: t2 })), exports.getSaveCommandEnabled = (e2) => e2.menuCommands[5], exports.getSkillCommandEnabled = (e2) => e2.menuCommands[1], exports.getSkillTypes = Lt, exports.getStatusCommandEnabled = (e2) => e2.menuCommands[3], exports.getSwitches = Dt, exports.getVariableNames = Ct, exports.getWeaponCategoryEnabled = (e2) => e2.itemCategories[1], exports.getWeaponTypes = wt, exports.isAudioCommand = (e2) => Ya(e2), exports.isCloneableCommand = (e2) => e2.parameters.every(qr), exports.isCommandChangeActorText = (e2) => Br(e2), exports.isCommandCommentBody = (e2) => Wr(e2) && 408 === e2.code, exports.isCommandCommentHeader = (e2) => Wr(e2) && 108 === e2.code, exports.isCommandCommonEvent = (e2) => Yr(e2), exports.isCommandInputNumber = (e2) => $r(e2), exports.isCommandNonParam = (e2) => Vr(e2), exports.isCommandScriptBody = (e2) => Wr(e2) && 655 === e2.code, exports.isCommandScriptHeader = (e2) => Wr(e2) && 355 === e2.code, exports.isCommandScrollTextHead = (e2) => jr(e2), exports.isCommandShowChoiceItem = (e2) => Xr(e2), exports.isCommandShowChoices = (e2) => Kr(e2), exports.isCommandShowMessage = (e2) => Jr(e2), exports.isCommandShowMessageBody = (e2) => Wr(e2) && 401 === e2.code, exports.isCommandShowScrollingTextBody = (e2) => Wr(e2) && 405 === e2.code, exports.isCommandTextBody = Wr, exports.isDataActor = (e2) => $a(e2), exports.isDataArmor2 = (e2) => Qa(e2), exports.isDataClass = (e2) => rs(e2), exports.isDataItem = (e2) => we(e2), exports.isDataMap = (e2) => m(e2), exports.isDataMapInfo = (e2) => n(e2), exports.isDataSkill = (e2) => Fe(e2), exports.isDataSystem = (e2) => hr(e2), exports.isDataWeapon = (e2) => De(e2), exports.isValidNumber = (e2) => "number" == typeof e2 && !Number.isNaN(e2), exports.labelsRegistry = () => ({ rpg: { damage: I, data: E, traits: G, itemEffect: Ne }, global: It }), exports.makeActorData = (e2 = {}) => ({
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
}), exports.makeAudioCommand = (e2, t2) => kr(e2, At({ name: t2 })), exports.makeAudioFileParams = At, exports.makeBooleanOptions = vt, exports.makeClassData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), exports.makeCommandAudioAny = kr, exports.makeCommandChangeActorName = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), exports.makeCommandChangeActorNickName = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), exports.makeCommandChangeActorProfile = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), exports.makeCommandChangeBattleBGM = (e2, t2 = 0) => kr(132, e2, t2), exports.makeCommandChangeDefeatME = (e2, t2 = 0) => kr(139, e2, t2), exports.makeCommandChangeVictoryME = (e2, t2 = 0) => kr(133, e2, t2), exports.makeCommandCommentBody = Lr, exports.makeCommandCommentHeader = Mr, exports.makeCommandCommonEvent = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Sr(e2 ?? {})
}), exports.makeCommandControlSwitches = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: Cr(e2) }), exports.makeCommandInputNumber = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: wr(e2 ?? {})
}), exports.makeCommandPlayBGM = (e2, t2 = 0) => kr(241, e2, t2), exports.makeCommandPlayBGS = (e2, t2 = 0) => kr(245, e2, t2), exports.makeCommandPlayME = (e2, t2 = 0) => kr(249, e2, t2), exports.makeCommandPlaySE = (e2, t2 = 0) => kr(250, e2, t2), exports.makeCommandScriptArray = (e2, t2 = 0) => e2.map((e3, r2) => 0 === r2 ? Fr(e3, t2) : Dr(e3, t2)), exports.makeCommandScriptBody = Dr, exports.makeCommandScriptHeader = Fr, exports.makeCommandSetupChoice = (e2, t2 = 0) => ({
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
}), exports.makeCommentArray = Or, exports.makeCommentCommandArray = (e2, t2 = 0) => e2.map((e3, r2) => 0 === r2 ? Mr(e3, t2) : Lr(e3, t2)), exports.makeCommonEventData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), exports.makeDamage = b, exports.makeDataNames = Wt, exports.makeDropItem = A, exports.makeEditorSetting = $t, exports.makeEnemyAction = (e2 = {}) => ({
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
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => A())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, exports.makeEventPageCondition = r, exports.makeGameInitial = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), exports.makeItemCategories = Pt, exports.makeItemCategoriesFromArray = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), exports.makeItemData = (e2 = {}) => ({
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
  damage: b(e2.damage ?? {}),
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
}), exports.makeMapEventIamge = a, exports.makeMapEventPage = () => ({ conditions: r(), list: [], directionFix: false, image: {
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
}, exports.makeMenuCommandsEnabled = _t, exports.makeMenuCommandsEnabledFromArray = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), exports.makeParamNamesArray = Kt, exports.makeRegex = Ge, exports.makeSkillData = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: b(e2.damage ?? {}),
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
}), exports.makeSoundsArray = Tt, exports.makeSoundsObject = (e2) => ({
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
}), exports.makeSystemAdvanced = bt, exports.makeSystemData = (e2) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r2, _s, _t2, _u, _v;
  const t2 = Nr(e2.size);
  return {
    ...vt(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: Tt(e2.sounds),
    editor: $t(e2.editing),
    advanced: bt(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...Wt(e2.dataNames ?? {}),
    magicSkills: _r([]),
    airship: Xt((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: Xt((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: Xt((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: At((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: At((_i = e2.me) == null ? void 0 : _i.gameoverMe),
    titleBgm: At((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: vr((_n = e2.battleTest) == null ? void 0 : _n.testBattlers, Rr),
    battleBgm: At((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: At((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s = e2.gameInit) == null ? void 0 : _s.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Pr(e2.terms ?? {}),
    itemCategories: Pt(e2.itemCategories),
    partyMembersArray: _r((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: _t(e2.menuComamnds)
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
}), exports.makeVehicleData = Xt, exports.makeWeaponData = (e2 = {}) => ({
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
  damage: b(e2.damage ?? {}),
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
}), exports.partyAbilityToArray = O, exports.pluginSourceToJSON = (e2) => qa(e2), exports.readNote = (e2) => qe(e2, (e3, t2) => [e3, t2]), exports.readNoteObject = (e2, t2) => qe(e2.note, (r2, a2) => t2(r2, a2, e2)), exports.regularParamName = (e2, t2) => {
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
}, exports.regularParamsToArray = R, exports.replaceNote = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, r2, a2) => {
    const s2 = t2(r2, a2);
    if (s2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return He(r2, s2);
  });
}, exports.resolveItemEffectLabels = ne, exports.resolveTraitLabels = Ue, exports.setNoteValue = (e2, t2, r2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(a2, (e3, a3) => a3 === t2 ? He(a3, r2) : e3);
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
}, exports.specialParamsToArray = S, exports.structToJSONSchema = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, r2]) => {
    const a2 = aa(r2);
    return { ...e4, [t3]: a2 };
  }, {});
  return { type: "object", properties: t2, required: Object.keys(t2), additionalProperties: false };
})(e2), exports.toArrayCommonEvent = Sr, exports.toArrayControlSwitches = Cr, exports.toArrayInputNumber = wr, exports.toArrayOperandActorStatus = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 3, 3, t2.index, t2.param], exports.toArrayOperandConstant = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 0, t2.value], exports.toArrayOperandEnemyStatus = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 3, 4, t2.index, Hr[t2.param]], exports.toArrayOperandItemData = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 3, t2.type, t2.itemId], exports.toArrayOperandRandom = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 2, t2.min, t2.max], exports.toArrayOperandScript = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 4, t2.code], exports.toArrayOperandVariable = (e2, t2, r2 = 0) => [e2.startId, e2.endId ?? e2.startId, r2, 1, t2.variableId], exports.toArraySetupChoice = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], exports.toArraySetupChoiceItem = (e2) => [e2.index ?? 0, e2.name ?? ""], exports.toArrayShowMessageHeader = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName];
//# sourceMappingURL=rpgTypes.cjs.js.map
