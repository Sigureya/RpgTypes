import e from "ajv";
const t = (e2 = {}) => ({ gameId: e2.gameId ?? 0, screenWidth: e2.screenWidth ?? 0, screenHeight: e2.screenHeight ?? 0, uiAreaWidth: e2.uiAreaWidth ?? 0, uiAreaHeight: e2.uiAreaHeight ?? 0, windowOpacity: e2.windowOpacity ?? 0, screenScale: e2.screenScale ?? 1, numberFontFilename: e2.numberFontFilename ?? "", mainFontFilename: e2.mainFontFilename ?? "", fallbackFonts: e2.fallbackFonts ?? "", fontSize: e2.fontSize ?? 28 }), a = { type: "object", properties: { gameId: { type: "integer" }, screenWidth: { type: "integer" }, screenHeight: { type: "integer" }, uiAreaWidth: { type: "integer" }, uiAreaHeight: { type: "integer" }, windowOpacity: { type: "integer" }, screenScale: { type: "number" }, numberFontFilename: { type: "string" }, mainFontFilename: { type: "string" }, fallbackFonts: { type: "string" }, fontSize: { type: "integer" } }, required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"], additionalProperties: false }, i = (e2 = {}) => ({ name: e2.name ?? "", volume: e2.volume ?? 100, pitch: e2.pitch ?? 100, pan: e2.pan ?? 0 }), r = (e2 = {}) => [i(e2.cursor), i(e2.ok), i(e2.cancel), i(e2.buzzer), i(e2.equip), i(e2.save), i(e2.load), i(e2.battleStart), i(e2.escape), i(e2.enemyAttack), i(e2.enemyDamage), i(e2.enemyCollapse), i(e2.bossCollapes1), i(e2.bossCollapes2), i(e2.actorDamage), i(e2.actorCollapse), i(e2.playRecovery), i(e2.playMiss), i(e2.playEvasion), i(e2.playMagicEvasion), i(e2.playReflection), i(e2.shop), i(e2.useItem), i(e2.useSkill)], n = (e2) => ({ cursor: e2[0], ok: e2[1], cancel: e2[2], buzzer: e2[3], equip: e2[4], save: e2[5], load: e2[6], battleStart: e2[7], escape: e2[8], enemyAttack: e2[9], enemyDamage: e2[10], enemyCollapse: e2[11], bossCollapes1: e2[12], bossCollapes2: e2[13], actorDamage: e2[14], actorCollapse: e2[15], playRecovery: e2[16], playMiss: e2[17], playEvasion: e2[18], playMagicEvasion: e2[19], playReflection: e2[20], shop: e2[21], useItem: e2[22], useSkill: e2[23] }), o = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], m = (e2) => ({ level: e2[0], levelA: e2[1], hp: e2[2], hpA: e2[3], mp: e2[4], mpA: e2[5], tp: e2[6], tpA: e2[7], experience: e2[8], exp: e2[9] }), p = (e2) => s(e2, ""), s = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], d = (e2) => ({ fight: e2[0], escape: e2[1], attack: e2[2], guard: e2[3], item: e2[4], skill: e2[5], equip: e2[6], status: e2[7], formation: e2[8], save: e2[9], gameEnd: e2[10], options: e2[11], weapon: e2[12], armor: e2[13], keyItem: e2[14], equip2: e2[15], optimize: e2[16], clear: e2[17], newGame: e2[18], continue_: e2[19], toTitle: e2[21], cancel: e2[22], buy: e2[24], sell: e2[25] }), l = (e2, t2) => "string" == typeof e2 ? e2 : t2, c = (e2) => ({ actionFailure: l(e2.actionFailure, "Action failed."), actorDamage: l(e2.actorDamage, "%1 took %2 damage."), actorRecovery: l(e2.actorRecovery, "%1 recovered %2 HP."), actorGain: l(e2.actorGain, "%1 gained %2."), actorLoss: l(e2.actorLoss, "%1 lost %2."), actorDrain: l(e2.actorDrain, "%1 drained %2 HP."), actorNoDamage: l(e2.actorNoDamage, "%1 was not damaged."), actorNoHit: l(e2.actorNoHit, "%1 was not hit."), alwaysDash: l(e2.alwaysDash, "Always dash."), bgmVolume: l(e2.bgmVolume, "BGM volume"), bgsVolume: l(e2.bgsVolume, "BGS volume"), commandRemember: l(e2.commandRemember, "Command remember."), criticalToActor: l(e2.criticalToActor, "%1 dealt %2 damage to %3."), criticalToEnemy: l(e2.criticalToEnemy, "%1 dealt %2 damage to %3."), counterAttack: l(e2.counterAttack, "%1 countered!"), debuffAdd: l(e2.debuffAdd, "%1's %2 was lowered."), defeat: l(e2.defeat, "Defeat."), enemyDamage: l(e2.enemyDamage, "%1 took %2 damage."), enemyDrain: l(e2.enemyDrain, "%1 drained %2 HP."), enemyGain: l(e2.enemyGain, "%1 gained %2."), enemyLoss: l(e2.enemyLoss, "%1 lost %2."), enemyNoDamage: l(e2.enemyNoDamage, "%1 was not damaged."), enemyNoHit: l(e2.enemyNoHit, "%1 was not hit."), enemyRecovery: l(e2.enemyRecovery, "%1 recovered %2 HP."), evasion: l(e2.evasion, "%1 evaded the attack!"), autosave: l(e2.autosave, "Autosave"), escapeFailure: l(e2.escapeFailure, "Escape failed."), escapeStart: l(e2.escapeStart, "%1 started to escape!"), emerge: l(e2.emerge, "%1 appeared!"), expNext: l(e2.expNext, "Next level in %1 EXP."), expTotal: l(e2.expTotal, "Total EXP: %1"), file: l(e2.file, "File"), buffAdd: l(e2.buffAdd, "%1's %2 was raised."), buffRemove: l(e2.buffRemove, "%1's %2 was lowered."), obtainExp: l(e2.obtainExp, "%1 EXP obtained."), obtainGold: l(e2.obtainGold, "%1 gold obtained."), obtainItem: l(e2.obtainItem, "%1 obtained %2."), obtainSkill: l(e2.obtainSkill, "%1 learned %2."), levelUp: l(e2.levelUp, "%1 leveled up!"), partyName: l(e2.partyName, "Party"), loadMessage: l(e2.loadMessage, "Load %1?"), meVolume: l(e2.meVolume, "ME volume"), possession: l(e2.possession, "Possession"), preemptive: l(e2.preemptive, "%1 attacked first!"), saveMessage: l(e2.saveMessage, "Save %1?"), seVolume: l(e2.seVolume, "SE volume"), magicEvasion: l(e2.magicEvasion, "%1 evaded the magic!"), magicReflection: l(e2.magicReflection, "%1 reflected the magic!"), substitute: l(e2.substitute, "%1 took the hit!"), surprise: l(e2.surprise, "%1 surprised the enemy!"), touchUI: l(e2.touchUI, "Touch UI"), useItem: l(e2.useItem, "%1 used %2."), victory: l(e2.victory, "Victory!") }), y = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], u = (e2 = {}) => ({ characterIndex: e2.characterIndex ?? 0, characterName: e2.characterName ?? "", bgm: i(e2.bgm ?? {}), startMapId: e2.startMapId ?? 0, startX: e2.startX ?? 0, startY: e2.startY ?? 0 }), g = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], b = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), I = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], f = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), v = (e2 = {}) => ({ jsonFormatLevel: e2.jsonFormatLevel ?? 0, messageWidth1: e2.messageWidth1 ?? 816, messageWidth2: e2.messageWidth2 ?? 816 }), h = { domainName: "オプション", options: { optDrawTitle: "ゲームタイトルの描画", optDisplayTp: "ウィンドウにTPを表示", optFloorDeath: "床ダメージで戦闘不能", optSlipDeath: "スリップダメージで戦闘不能", optAutosave: "オートセーブを有効化", optExtraExp: "控えメンバーも経験値を獲得", optFollowers: "隊列歩行", optSideView: "戦闘をサイドビューにする", optKeyItemsNumber: "大事なものの個数を表示", optTransparent: "透明状態で開始", optMessageSkip: "メッセージスキップを有効化", optSplashScreen: "スプラッシュ画面を表示" } }, x = { domainName: "タイプ", options: { armorTypes: "防具タイプ", elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", switches: "スイッチ", variables: "変数" } }, N = (e2 = {}) => ({ optAutosave: e2.optAutosave ?? true, optDisplayTp: e2.optDisplayTp ?? true, optDrawTitle: e2.optDrawTitle ?? true, optExtraExp: e2.optExtraExp ?? true, optFloorDeath: e2.optFloorDeath ?? true, optFollowers: e2.optFollowers ?? true, optKeyItemsNumber: e2.optKeyItemsNumber ?? true, optSideView: e2.optSideView ?? true, optSlipDeath: e2.optSlipDeath ?? true, optTransparent: e2.optTransparent ?? true, optMessageSkip: e2.optMessageSkip ?? true, optSplashScreen: e2.optSplashScreen ?? true }), k = new e({ strict: false });
k.compile({ type: "object", additionalProperties: true, required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"], properties: { optAutosave: { type: "boolean" }, optDisplayTp: { type: "boolean" }, optDrawTitle: { type: "boolean" }, optExtraExp: { type: "boolean" }, optFloorDeath: { type: "boolean" }, optFollowers: { type: "boolean" }, optKeyItemsNumber: { type: "boolean" }, optSideView: { type: "boolean" }, optSlipDeath: { type: "boolean" }, optTransparent: { type: "boolean" }, optMessageSkip: { type: "boolean" }, optSplashScreen: { type: "boolean" } } });
const T = k.compile({ additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: { type: "integer" } } } });
k.compile({ type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } });
const S = k.compile({ additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } } }), w = (e2) => {
  var _a2, _b, _c, _d, _e2;
  const a2 = e2.vehicles ?? {}, n2 = e2.dataNames ?? {}, o2 = e2.debug ?? {}, m2 = e2.images ?? {}, p2 = e2.gameInit ?? {}, s2 = e2.bgm ?? {}, d2 = A(e2.size);
  return { ...N(e2.options), currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "", gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "", sounds: r(e2.sounds), editor: v(e2.editing), advanced: t(e2.advanced), title1Name: m2.title1Name ?? "", title2Name: m2.title2Name ?? "", battleback1Name: m2.battleback1Name ?? "", battleback2Name: m2.battleback2Name ?? "", armorTypes: q(n2.armorTypes), elements: q(n2.elements), equipTypes: q(n2.equipTypes), weaponTypes: q(n2.weaponTypes), skillTypes: q(n2.skillTypes), switches: q(n2.switches), variables: q(n2.variables), magicSkills: P([]), airship: u(a2.airship), boat: u(a2.boat), ship: u(a2.ship), defeatMe: i((_c = e2.me) == null ? void 0 : _c.defeatMe), gameoverMe: i((_d = e2.me) == null ? void 0 : _d.gameoverMe), titleBgm: i(s2.titleBgm), tileSize: d2.tileSize, faceSize: d2.faceSize, iconSize: d2.iconSize, versionId: 1, attackMotions: [], testBattlers: D(o2.testBattlers, E), battleBgm: i(s2.battleBgm), victoryMe: i((_e2 = e2.me) == null ? void 0 : _e2.victoryMe), editMapId: o2.editMapId ?? 0, locale: "", startMapId: p2.startMapId ?? 0, startX: p2.startX ?? 0, startY: p2.startY ?? 0, testTroopId: o2.testTroopId ?? 0, windowTone: [0, 0, 0, 0], terms: R(e2.terms ?? {}), itemCategories: I(e2.itemCategories), partyMembersArray: P(p2.partyMembersArray), battleSystem: 0, battlerHue: 0, battlerName: o2.battlerName ?? "", menuCommands: g(e2.menuComamnds) };
}, R = (e2) => ({ basic: o(e2.basic ?? {}), commands: p(e2.commands ?? {}), params: y(e2.params ?? {}), messages: c(e2.messages ?? {}) }), q = (e2) => e2 ? [...e2] : [], P = (e2) => e2 ? [...e2] : [], A = (e2) => ((e3) => S(e3))(e2) ? { tileSize: e2.tileSize, faceSize: e2.faceSize, iconSize: e2.iconSize } : { tileSize: 48, faceSize: 144, iconSize: 32 }, D = (e2, t2) => e2 ? e2.map(t2) : [], E = (e2) => ((e3) => T(e3))(e2) ? { actorId: e2.actorId, equips: P(e2.equips), level: e2.level } : { actorId: 0, equips: [], level: 1 }, M = (e2, t2) => ({ name: e2, id: t2 }), j = (e2) => e2.variables.map(M), H = (e2) => e2.elements.map(M), C = (e2) => e2.equipTypes.map(M), B = (e2) => e2.skillTypes.map(M), F = (e2) => e2.weaponTypes.map(M), V = (e2) => e2.armorTypes.map(M), L = (e2) => e2.switches.map(M), z = "rmmz", W = "colors", G = (e2) => ({ properties: e2.placeHolders.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), itemMappers: X(e2).map(K) }), X = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : t2;
}, K = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey, map: e2.map.map((e3) => ({ kindId: e3.kindId, sourceId: e3.sourceId })) }), Y = (e2, t2, a2) => {
  const i2 = t2[a2.dataKey];
  return null == i2 ? e2 : e2.replaceAll(a2.placeHolder, String(i2));
}, $ = (e2, t2, a2, i2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => {
  if (e2.format.length >= i2.formatMaxLength) return { syntaxErrors: [{ message: a2.formatVeryLong, reason: e2.format.slice(0, i2.formatMaxLength) }], semanticErrors: [] };
  const r2 = O(e2, t2, a2);
  return { syntaxErrors: U(e2.format, t2, a2, i2.placeHolderMaxLength), semanticErrors: r2 };
}, U = (e2, t2, a2, i2) => {
  const r2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    const t3 = new Set(e3.placeHolders);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return r2.reduce((e3, t3) => {
    const r3 = t3[1];
    return 0 === r3.length ? e3 : r3.length > i2 ? (e3.push({ message: a2.longPlaceHolder, reason: r3.slice(0, i2) }), e3) : (n2.has(r3) || e3.push({ message: a2.extraPlaceHolder, reason: r3 }), e3);
  }, []);
}, O = (e2, t2, a2) => X(t2).reduce((t3, i2) => {
  const r2 = _(e2, i2, a2);
  return r2 && t3.push(r2), t3;
}, []), _ = (e2, t2, a2) => {
  const i2 = e2.format.includes(t2.placeHolder), r2 = !!e2.dataSource;
  return !i2 && r2 ? { message: a2.missingName, reason: t2.placeHolder } : i2 && !r2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Z = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, J = (e2, t2) => {
  const a2 = te(t2);
  return e2.reduce((e3, t3) => {
    const i2 = Q(t3, a2);
    return e3.set(t3.targetKey, i2), e3;
  }, /* @__PURE__ */ new Map());
}, Q = (e2, t2) => {
  const a2 = ee(e2.dataSource, t2);
  return { format: e2.format, label: e2.label, data: a2 ? a2.items : void 0 };
}, ee = (e2, t2) => {
  if (!e2) return;
  const a2 = Z(e2);
  return t2.get(a2);
}, te = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: ae(t2.items), source: t2.source, label: t2.label };
  return e3.set(Z(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), ae = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name })), ie = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3, a3) => a3.properties.reduce((e4, a4) => Y(e4, t3, a4), e3))(i2, e2, a2);
  return t2 ? ((e3, t3, a3, i3, r3) => {
    const n3 = ((e4, t4) => {
      const a4 = ((e5, t5) => {
        const a5 = t5[e5];
        return a5 && a5.id === e5 ? a5 : t5.find((t6) => t6.id === e5);
      })(t4, e4);
      return a4 ? a4.name : `?data[${t4}]`;
    })(i3, r3(t3));
    return a3.itemMappers.reduce((e4, t4) => e4.replaceAll(t4.placeHolder, n3), e3);
  })(n2, e2, a2, t2, r2) : n2;
}, re = "system", ne = () => ({ author: z, module: re, kind: "elements" }), oe = () => ({ author: z, module: re, kind: "armorTypes" }), me = () => ({ author: z, module: re, kind: "equipTypes" }), pe = () => ({ author: z, module: re, kind: "skillTypes" }), se = () => ({ author: z, module: re, kind: "switches" }), de = () => ({ author: z, module: re, kind: "variables" }), le = () => ({ author: z, module: re, kind: "weaponTypes" }), ce = (e2, t2) => [ue(e2, t2), ge(e2, t2), ve(e2, t2), be(e2, t2), ye(e2, t2), Ie(e2, t2), fe(e2, t2)], ye = (e2, t2) => ({ items: V(e2), label: t2.armorTypes, source: oe() }), ue = (e2, t2) => ({ items: H(e2), label: t2.elements, source: ne() }), ge = (e2, t2) => ({ items: C(e2), label: t2.equipTypes, source: me() }), be = (e2, t2) => ({ items: B(e2), label: t2.skillTypes, source: pe() }), Ie = (e2, t2) => ({ items: j(e2), label: t2.variables, source: de() }), fe = (e2, t2) => ({ items: L(e2), label: t2.switches, source: se() }), ve = (e2, t2) => ({ items: F(e2), label: t2.weaponTypes, source: le() }), he = "bgm", xe = "se", Ne = "me", ke = "bgs", Te = "battlebacks1", Se = "battlebacks2", we = "characters", Re = "enemies", qe = "faces", Pe = "parallaxes", Ae = "pictures", De = "sv_actors", Ee = "sv_enemies", Me = "system", je = "tilesets", He = "titles1", Ce = "titles2", Be = "System.json", Fe = "Actors.json", Ve = "Classes.json", Le = "Skills.json", ze = "Items.json", We = "Weapons.json", Ge = "Armors.json", Xe = "Enemies.json", Ke = "Troops.json", Ye = "States.json", $e = "Animations.json", Ue = "Tilesets.json", Oe = "CommonEvents.json", _e = "MapInfos.json", Ze = "data", Je = "img", Qe = "audio", et = "js", tt = 0, at = 1, it = 2, rt = 3, nt = { id: "識別子", name: "名前", note: "メモ", description: "説明", iconIndex: "アイコンインデックス", occasion: "使用タイミング", params: "パラメータ", repeats: "繰り返し回数", scope: "範囲", speed: "速度補正", successRate: "成功率", animationId: "アニメーションID", displayType: "表示タイプ", characterIndex: "キャラクターインデックス", characterName: "キャラクター名", effectName: "効果名", faceIndex: "顔グラフィックインデックス", faceName: "顔グラフィック名", flashTimings: "フラッシュタイミング", list: "リスト", messageType: "メッセージタイプ", offsetX: "オフセットX", offsetY: "オフセットY", overlay: "オーバーレイ", priority: "優先度", restriction: "制約", rotation: "回転", scale: "スケール", soundTimings: "サウンドタイミング", stepsToRemove: "解除までの歩数", type: "タイプ", variance: "分散度", unknownCode: "不明なコード", content: "内容", apply: "適用", turn: "ターン", commonEvent: "コモンイベント", normal: "通常", dualWield: "二刀流", bossCollaps: "ボス崩壊", instantCollaps: "即時崩壊", noneCollaps: "崩壊なし", escape: "逃走" }, ot = () => ({ author: z, module: La, kind: Xa }), mt = (e2, t2) => ({ items: pt(e2.options, t2), label: e2.domainName, source: ot() }), pt = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, { id: 3, name: e2.noneCollaps }], st = 0, dt = 1, lt = 2, ct = 3, yt = 4, ut = 5, gt = () => ({ author: z, module: La, kind: Ka }), bt = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], It = 0, ft = 1, vt = 2, ht = 3, xt = (e2) => ({ items: kt(e2.options), label: e2.domainName, source: Nt() }), Nt = () => ({ author: z, module: La, kind: Ya }), kt = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, { id: 3, name: e2.preventEscape }], Tt = 0, St = 1, wt = 2, Rt = 3, qt = 4, Pt = 5, At = 6, Dt = 7, Et = 8, Mt = 9, jt = () => ({ author: z, module: La, kind: Wa }), Ht = (e2) => ({ items: Ct(e2.options), label: e2.domainName, source: jt() }), Ct = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Bt = (e2, t2) => {
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
}, Ft = 0, Vt = 1, Lt = 2, zt = 3, Wt = 4, Gt = 5, Xt = 6, Kt = 7, Yt = () => ({ author: z, module: La, kind: za }), $t = (e2) => ({ items: Ut(e2.options), label: e2.domainName, source: Yt() }), Ut = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Ot = (e2, t2) => {
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
}, _t = 0, Zt = 1, Jt = 2, Qt = 3, ea = 4, ta = 5, aa = 6, ia = 7, ra = 8, na = 9, oa = () => ({ author: z, module: La, kind: Ga }), ma = (e2) => ({ items: pa(e2.options), label: e2.domainName, source: oa() }), pa = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], sa = (e2, t2) => {
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
}, da = "{name}", la = "{name} * {value}%", ca = "{name} + {value}%", ya = "{value}", ua = { domainName: "特徴", options: { regularParam: { domainName: "基本能力値", format: la, options: { maxHp: "最大HP", maxMp: "最大MP", atk: "攻撃力", def: "防御力", matk: "魔法攻撃力", mdef: "魔法防御力", agi: "敏捷性", luk: "運" } }, extraParam: { domainName: "追加能力値", format: ca, options: { hitRate: "命中率", evasionRate: "回避率", criticalRate: "クリティカル率", criticalEvasionRate: "クリティカル回避率", magicEvasionRate: "魔法回避率", magicReflectionRate: "魔法反射率", counterAttackRate: "反撃率", hpRegenerationRate: "HP再生率", mpRegenerationRate: "MP再生率", tpRegenerationRate: "TP再生率" } }, specialParam: { domainName: "特殊能力値", format: la, options: { targetRate: "狙われ率", guardEffectRate: "防御効果率", recoveryEffectRate: "回復効果率", pharmacology: "薬の知識", mpCostRate: "MP消費率", tpChargeRate: "TPチャージ率", physicalDamageRate: "物理ダメージ率", magicDamageRate: "魔法ダメージ率", floorDamageRate: "床ダメージ率", experienceRate: "経験値率" } }, specialFlag: { domainName: "特殊フラグ", format: da, options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" } }, collaps: { domainName: "消滅エフェクト", format: da, options: { bossCollaps: "ボス崩壊", instantCollaps: "即時崩壊", noneCollaps: "崩壊なし" } }, partyAbility: { domainName: "パーティ能力", format: da, options: { cancelSurprise: "不意打ち無効", dropItemDouble: "アイテムドロップ2倍", encounterHalf: "エンカウント半減", encounterNone: "エンカウントなし", goldDouble: "ゴールド2倍", raisePreemptive: "先制攻撃率アップ" } }, elementRate: { domainName: "属性有効度", format: la }, debuffRate: { domainName: "弱体有効度", format: la }, stateRate: { domainName: "ステート有効度", format: la }, stateResist: { domainName: "ステート無効", format: da }, attackElement: { domainName: "攻撃属性", format: da }, attackState: { domainName: "攻撃ステート", format: ca }, attackSpeed: { domainName: "攻撃速度補正", format: ya }, attackTimes: { domainName: "攻撃追加回数", format: ya }, actionPlus: { domainName: "行動追加", format: la }, attackSkill: { domainName: "攻撃スキル", format: da }, equipWeaponType: { domainName: "装備武器タイプ", format: da }, equipArmorType: { domainName: "装備防具タイプ", format: da }, equipLock: { domainName: "装備固定", format: da }, equipSeal: { domainName: "装備封印", format: da }, slotType: { domainName: "スロットタイプ", format: da }, skillAdd: { domainName: "スキル追加", format: da }, skillSeal: { domainName: "スキルタイプ封印", format: da }, skillTypeAdd: { domainName: "スキルタイプ追加", format: da }, skillTypeSeal: { domainName: "スキルタイプ封印", format: da } } }, ga = 11, ba = 12, Ia = 13, fa = 14, va = 21, ha = 22, xa = 23, Na = 31, ka = 32, Ta = 33, Sa = 34, wa = 35, Ra = 41, qa = 42, Pa = 43, Aa = 44, Da = 51, Ea = 52, Ma = 53, ja = 54, Ha = 55, Ca = 61, Ba = 62, Fa = 63, Va = 64, La = "trait", za = "params", Wa = "xparams", Ga = "sparams", Xa = "collaps", Ka = "partyAbiility", Ya = "sflag", $a = (e2, t2) => [$t(e2.regularParam), Ht(e2.extraParam), ma(e2.specialParam), mt(e2.collaps, t2), xt(e2.specialFlag)], Ua = (e2) => [Oa(e2.elementRate), _a(e2.debuffRate), Za(e2.stateRate), Ja(e2.stateResist), Qa(e2.regularParam), ei(e2.extraParam), ti(e2.specialParam), ai(e2.attackElement), ii(e2.attackState), ri(e2.attackSpeed), ni(e2.attackTimes), oi(e2.attackSkill), mi(e2.skillTypeAdd), pi(e2.skillTypeSeal), si(e2.skillAdd), di(e2.skillAdd), li(e2.equipWeaponType), ci(e2.equipArmorType), yi(e2.equipLock), ui(e2.equipSeal), gi(e2.slotType), bi(e2.actionPlus), Ii(e2.specialFlag), fi(e2.collaps), vi(e2.partyAbility)], Oa = (e2) => ({ format: e2.format, label: e2.domainName, code: 11, dataSource: ne() }), _a = (e2) => ({ format: e2.format, label: e2.domainName, code: 12, dataSource: Yt() }), Za = (e2) => ({ format: e2.format, label: e2.domainName, code: 13, dataSource: Yi() }), Ja = (e2) => ({ format: e2.format, label: e2.domainName, code: 14, dataSource: Yi() }), Qa = (e2) => ({ format: e2.format, label: e2.domainName, code: 21, dataSource: Yt() }), ei = (e2) => ({ format: e2.format, label: e2.domainName, code: 22, dataSource: jt() }), ti = (e2) => ({ format: e2.format, label: e2.domainName, code: 23, dataSource: oa() }), ai = (e2) => ({ format: e2.format, label: e2.domainName, code: 31, dataSource: ne() }), ii = (e2) => ({ format: e2.format, label: e2.domainName, code: 32, dataSource: Yi() }), ri = (e2) => ({ format: e2.format, label: e2.domainName, code: 33 }), ni = (e2) => ({ format: e2.format, label: e2.domainName, code: 34 }), oi = (e2) => ({ format: e2.format, label: e2.domainName, code: 35 }), mi = (e2) => ({ format: e2.format, label: e2.domainName, code: 41, dataSource: pe() }), pi = (e2) => ({ format: e2.format, label: e2.domainName, code: 42, dataSource: pe() }), si = (e2) => ({ format: e2.format, label: e2.domainName, code: 43, dataSource: mr() }), di = (e2) => ({ format: e2.format, label: e2.domainName, code: 44, dataSource: mr() }), li = (e2) => ({ format: e2.format, label: e2.domainName, code: 51, dataSource: le() }), ci = (e2) => ({ format: e2.format, label: e2.domainName, code: 52, dataSource: oe() }), yi = (e2) => ({ format: e2.format, label: e2.domainName, code: 53, dataSource: me() }), ui = (e2) => ({ format: e2.format, label: e2.domainName, code: 54, dataSource: me() }), gi = (e2) => ({ format: e2.format, label: e2.domainName, code: 55, dataSource: me() }), bi = (e2) => ({ format: e2.format, label: e2.domainName, code: 61 }), Ii = (e2) => ({ format: e2.format, label: e2.domainName, code: 62, dataSource: Nt() }), fi = (e2) => ({ format: e2.format, label: e2.domainName, code: 63, dataSource: ot() }), vi = (e2) => ({ format: e2.format, label: e2.domainName, code: 64, dataSource: gt() }), hi = "Trait", xi = { type: "object", required: ["code", "dataId", "value"], properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } } }, Ni = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code", map: [] }, placeHolders: ["value"], itemMappers: [] }, ki = (e2, t2, a2) => {
  const i2 = G(Ni);
  return ie(t2, a2, i2, e2.format, (e3) => e3.dataId);
}, Ti = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, battlerName: e2.battlerName ?? "", characterName: e2.characterName ?? "", characterIndex: e2.characterIndex ?? 0, faceName: e2.faceName ?? "", faceIndex: e2.faceIndex ?? 0, traits: [], note: e2.note ?? "", classId: e2.classId ?? 0, nickname: e2.nickname ?? "", profile: e2.profile ?? "", equips: [], initialLevel: e2.initialLevel ?? 0, maxLevel: e2.maxLevel ?? 0 }), Si = () => ({ author: z, module: Ri, kind: qi }), wi = { type: "object", required: ["name", "id", "nickname", "battlerName", "characterName", "characterIndex", "faceName", "faceIndex", "classId", "initialLevel", "maxLevel"], properties: { name: { type: "string" }, battlerName: { type: "string" }, characterName: { type: "string" }, characterIndex: { type: "integer" }, faceName: { type: "string" }, faceIndex: { type: "integer", minimum: 0, maximum: 7 }, id: { type: "integer", minimum: 0 }, nickname: { type: "string" }, profile: { type: "string" }, initialLevel: { type: "integer", minimum: 0 }, maxLevel: { type: "integer" }, classId: { type: "integer", minimum: 0 }, equips: { type: "array", items: { type: "integer" } }, note: { type: "string" }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } } } }, Ri = "data", qi = "actor", Pi = "map", Ai = "enemy", Di = "state", Ei = "skill", Mi = "items", ji = "weapon", Hi = "armor", Ci = "class", Bi = "common_event", Fi = "troop", Vi = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", iconIndex: e2.iconIndex ?? 0, description: e2.description ?? "", traits: e2.traits ?? [], note: e2.note ?? "", atypeId: e2.atypeId ?? 0, params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0], etypeId: e2.etypeId ?? 0, price: e2.price ?? 0 }), Li = () => ({ author: z, module: Ri, kind: Hi }), zi = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: { type: "string" }, etypeId: { type: "integer", minimum: 0 }, atypeId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } } } }, Wi = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e2.learnings ?? [], expParams: e2.expParams ?? [] }), Gi = () => ({ author: z, module: Ri, kind: Ci }), Xi = { type: "object", required: ["name", "id", "note", "expParams", "params", "learnings", "traits"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, note: { type: "string" }, expParams: { type: "array", items: { type: "integer" } }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, learnings: { type: "array", items: { type: "object", properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: { type: "string" } }, required: ["level", "skillId"], additionalProperties: false } }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"], additionalProperties: false } } }, additionalProperties: false }, Ki = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, iconIndex: e2.iconIndex ?? 0, message1: e2.message1 ?? "", message2: e2.message2 ?? "", message3: e2.message3 ?? "", message4: e2.message4 ?? "", traits: [], note: e2.note ?? "", messageType: e2.messageType ?? 0, releaseByDamage: e2.releaseByDamage ?? false, restriction: e2.restriction ?? 0, priority: e2.priority ?? 0, motion: e2.motion ?? 0, overlay: e2.overlay ?? 0, removeAtBattleEnd: e2.removeAtBattleEnd ?? false, removeByRestriction: e2.removeByRestriction ?? false, autoRemovalTiming: e2.autoRemovalTiming ?? 0, minTurns: e2.minTurns ?? 0, maxTurns: e2.maxTurns ?? 0, removeByDamage: e2.removeByDamage ?? false, chanceByDamage: e2.chanceByDamage ?? 0, removeByWalking: e2.removeByWalking ?? false, stepsToRemove: e2.stepsToRemove ?? 0 }), Yi = () => ({ author: z, module: Ri, kind: Di }), $i = { type: "object", required: ["name", "id", "iconIndex", "message1", "message2", "message3", "message4", "restriction", "priority", "motion", "overlay", "removeAtBattleEnd", "removeByDamage", "removeByWalking", "removeByRestriction", "autoRemovalTiming", "minTurns", "maxTurns", "chanceByDamage", "stepsToRemove", "note"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, iconIndex: { type: "integer", minimum: 0 }, message1: { type: "string" }, message2: { type: "string" }, message3: { type: "string" }, message4: { type: "string" }, restriction: { type: "integer" }, priority: { type: "integer" }, motion: { type: "integer" }, overlay: { type: "integer" }, removeAtBattleEnd: { type: "boolean" }, removeByDamage: { type: "boolean" }, removeByWalking: { type: "boolean" }, removeByRestriction: { type: "boolean" }, messageType: { type: "integer" }, releaseByDamage: { type: "boolean" }, autoRemovalTiming: { type: "integer" }, minTurns: { type: "integer" }, maxTurns: { type: "integer" }, chanceByDamage: { type: "integer" }, stepsToRemove: { type: "integer" }, note: { type: "string" }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } } } }, Ui = { domainName: "武器", options: { weaponTypeId: "武器タイプID" } }, Oi = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", iconIndex: e2.iconIndex ?? 0, description: e2.description ?? "", traits: e2.traits ?? [], note: e2.note ?? "", animationId: e2.animationId ?? 0, params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0], etypeId: e2.etypeId ?? 0, price: e2.price ?? 0, damage: ir(e2.damage ?? {}), wtypeId: e2.wtypeId ?? 0 }), _i = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: { type: "string" }, etypeId: { type: "integer", minimum: 0 }, wtypeId: { type: "integer", minimum: 0 }, animationId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, damage: { type: "object", properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } }, required: ["type", "elementId", "formula", "variance", "critical"] }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } } } }, Zi = (e2 = {}) => ({ dataId: e2.dataId ?? 0, denominator: e2.denominator ?? 0, kind: e2.kind ?? 0 }), Ji = (e2 = {}) => ({ conditionParam1: e2.conditionParam1 ?? 0, conditionParam2: e2.conditionParam2 ?? 0, conditionType: e2.conditionType ?? 0, rating: e2.rating ?? 0, skillId: e2.skillId ?? 0 }), Qi = (e2 = {}) => {
  var _a2;
  return { name: e2.name ?? "", id: e2.id ?? 0, battlerName: e2.battlerName ?? "", battlerHue: e2.battlerHue ?? 0, dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Zi())) ?? [], exp: e2.exp ?? 0, gold: e2.gold ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], actions: [] };
}, er = () => ({ author: z, module: Ri, kind: Ai }), tr = { type: "object", required: ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, battlerHue: { type: "integer", minimum: 0 }, battlerName: { type: "string" }, exp: { type: "integer", minimum: 0 }, gold: { type: "integer", minimum: 0 }, note: { type: "string" }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, actions: { type: "array", items: { type: "object", required: ["conditionParam1", "conditionParam2", "conditionType", "skillId", "rating"], properties: { conditionParam1: { type: "integer" }, conditionParam2: { type: "integer" }, conditionType: { type: "integer" }, skillId: { type: "integer" }, rating: { type: "integer" } } } }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } }, dropItems: { type: "array", items: { type: "object", properties: { kind: { type: "integer" }, dataId: { type: "integer" }, denominator: { type: "integer", minimum: 0 }, rate: { type: "number" } }, required: ["kind", "dataId", "denominator"] } } } }, ar = { domainName: "ダメージ", options: {} }, ir = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), rr = { type: "object", required: ["type", "elementId", "formula", "variance", "critical"], properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer" }, critical: { type: "boolean" } } }, nr = () => ({ author: z, module: Ri, kind: Mi }), or = (e2 = {}) => ({ animationId: e2.animationId ?? 0, id: e2.id ?? 0, name: e2.name ?? "", iconIndex: e2.iconIndex ?? 0, description: e2.description ?? "", itypeId: e2.itypeId ?? 0, note: e2.note ?? "", consumable: e2.consumable ?? false, scope: e2.scope ?? 0, occasion: e2.occasion ?? 0, speed: e2.speed ?? 0, successRate: e2.successRate ?? 0, repeats: e2.repeats ?? 0, tpGain: e2.tpGain ?? 0, hitType: e2.hitType ?? 0, damage: ir(e2.damage ?? {}), effects: [], price: 0 }), mr = () => ({ author: z, module: Ri, kind: Ei }), pr = (e2 = {}) => ({ stypeId: e2.stypeId ?? 0, requiredWtypeId1: e2.requiredWtypeId1 ?? 0, requiredWtypeId2: e2.requiredWtypeId2 ?? 0, animationId: e2.animationId ?? 0, damage: ir(e2.damage ?? {}), description: e2.description ?? "", effects: [], hitType: e2.hitType ?? 0, iconIndex: e2.iconIndex ?? 0, id: e2.id ?? 0, message1: e2.message1 ?? "", message2: e2.message2 ?? "", messageType: e2.messageType ?? 0, name: e2.name ?? "", note: e2.note ?? "", mpCost: e2.mpCost ?? 0, occasion: e2.occasion ?? 0, repeats: e2.repeats ?? 0, scope: e2.scope ?? 0, speed: e2.speed ?? 0, successRate: e2.successRate ?? 0, tpCost: e2.tpCost ?? 0, tpGain: e2.tpGain ?? 0 }), sr = { type: "object", required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, message1: { type: "string" }, message2: { type: "string" }, messageType: { type: "integer" }, mpCost: { type: "integer" }, requiredWtypeId1: { type: "integer" }, requiredWtypeId2: { type: "integer" }, stypeId: { type: "integer" }, tpCost: { type: "integer" }, animationId: { type: "integer", minimum: 0 }, hitType: { type: "integer" }, occasion: { type: "integer" }, repeats: { type: "integer" }, scope: { type: "integer" }, speed: { type: "integer" }, successRate: { type: "integer" }, tpGain: { type: "integer" }, note: { type: "string" }, effects: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value1: { type: "integer" }, value2: { type: "integer" } }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } }, damage: { type: "object", properties: { type: { type: "integer" }, elementId: { type: "integer" }, formula: { type: "string" }, variance: { type: "integer" }, critical: { type: "boolean" } }, required: ["type", "elementId", "formula", "variance", "critical"], additionalProperties: false } }, additionalProperties: false }, dr = { type: "object", required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, note: { type: "string" }, animationId: { type: "integer", minimum: 0 }, hitType: { type: "integer" }, occasion: { type: "integer" }, repeats: { type: "integer" }, scope: { type: "integer" }, speed: { type: "integer" }, successRate: { type: "integer" }, tpGain: { type: "integer" }, consumable: { type: "boolean" }, price: { type: "integer", minimum: 0 }, itypeId: { type: "integer" }, effects: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value1: { type: "integer" }, value2: { type: "integer" } }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } }, damage: { type: "object", properties: { type: { type: "integer" }, elementId: { type: "integer" }, formula: { type: "string" }, variance: { type: "integer" }, critical: { type: "boolean" } }, required: ["type", "elementId", "formula", "variance", "critical"], additionalProperties: false } } }, lr = 0, cr = 1, yr = 2, ur = "{name} {value1}%", gr = "{value1}% + {value2}", br = "{name} {value1}ターン", Ir = "{name}", fr = { domainName: "使用効果", options: { addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: br }, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: br }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: gr }, grow: { desc: "成長効果", domainName: "成長効果", format: "{name} + {value1}" }, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Ir }, recoverHp: { desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "HP回復", format: gr }, recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: gr }, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: Ir }, removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: Ir }, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: ur }, special: { desc: "特殊効果", domainName: "特殊効果", format: Ir }, addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: ur }, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Ir } } }, vr = 11, hr = 12, xr = 13, Nr = 21, kr = 22, Tr = 31, Sr = 32, wr = 33, Rr = 34, qr = 41, Pr = 42, Ar = 43, Dr = 44, Er = 0, Mr = (e2) => [Hr(e2), Cr(e2), Br(e2), Fr(e2), Vr(e2), Lr(e2), zr(e2), Wr(e2), Gr(e2), Xr(e2), Kr(e2), Yr(e2)], jr = (e2, t2, a2) => ({ code: e2, label: t2.domainName, format: t2.format, description: t2.desc, dataSource: a2 }), Hr = (e2) => jr(11, e2.recoverHp), Cr = (e2) => jr(12, e2.recoverMp), Br = (e2) => jr(13, e2.gainTp), Fr = (e2) => jr(21, e2.addState, Yi()), Vr = (e2) => jr(22, e2.removeState, Yi()), Lr = (e2) => jr(31, e2.addBuff, Yt()), zr = (e2) => jr(32, e2.addDebuff, Yt()), Wr = (e2) => jr(33, e2.removeBuff, Yt()), Gr = (e2) => jr(34, e2.removeDebuff, Yt()), Xr = (e2) => jr(42, e2.grow, Yt()), Kr = (e2) => jr(43, e2.learnSkill, mr()), Yr = (e2) => jr(44, e2.commonEvent, { author: z, module: Ri, kind: Bi }), $r = (e2, t2, a2) => {
  const i2 = a2.find((e3) => e3.id === t2.dataId), r2 = i2 ? i2.name : "Unknown Item";
  return e2.format.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", r2);
}, Ur = { domainName: "アイテム", options: { consumable: "消耗品" } }, Or = { domainName: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, _r = { domainName: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } }, Zr = { actor: { domainName: "アクター", options: { initialEquipments: "初期装備", faceImage: "顔画像", characterImage: "キャラクター画像", svBattlerImage: "SVバトラー画像", nickname: "ニックネーム", profile: "プロフィール", classId: "職業ID", initialLevel: "初期レベル", maxLevel: "最大レベル" } }, class: { domainName: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } }, armor: { domainName: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: { domainName: "敵キャラ", options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" } }, item: { domainName: "アイテム", options: { consumable: "消耗品" } }, skill: { domainName: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, state: { domainName: "ステート", options: { restriction: "制約", priority: "優先度", motion: "モーション", overlay: "オーバーレイ", removeAtBattleEnd: "戦闘終了時解除", removeByRestriction: "制約による解除", autoRemovalTiming: "自動解除タイミング", minTurns: "最小ターン数", maxTurns: "最大ターン数", removeByDamage: "ダメージによる解除", chanceByDamage: "ダメージによる解除確率", removeByWalking: "歩行による解除", stepsToRemove: "解除までの歩数" } }, weapon: { domainName: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { domainName: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } } }, Jr = new e(), Qr = Jr.compile(dr), en = Jr.compile(sr), tn = Jr.compile(wi), an = Jr.compile(zi), rn = Jr.compile(_i), nn = Jr.compile(tr), on = Jr.compile($i), mn = Jr.compile(Xi), pn = (e2) => Qr(e2), sn = (e2) => en(e2), dn = (e2) => tn(e2), ln = (e2) => an(e2), cn = (e2) => rn(e2), yn = (e2) => nn(e2), un = (e2) => on(e2), gn = (e2) => mn(e2), bn = 0, In = 101, fn = 401, vn = 102, hn = 402, xn = 103, Nn = 104, kn = 105, Tn = 405, Sn = 108, wn = 408, Rn = 109, qn = 111, Pn = 411, An = 112, Dn = 113, En = 115, Mn = 117, jn = 118, Hn = 119, Cn = 121, Bn = 122, Fn = 123, Vn = 124, Ln = 125, zn = 126, Wn = 127, Gn = 128, Xn = 129, Kn = 132, Yn = 133, $n = 134, Un = 135, On = 136, _n = 137, Zn = 138, Jn = 139, Qn = 140, eo = 201, to = 202, ao = 203, io = 204, ro = 205, no = 206, oo = 211, mo = 212, po = 213, so = 214, lo = 216, co = 217, yo = 221, uo = 222, go = 223, bo = 224, Io = 225, fo = 230, vo = 231, ho = 232, xo = 233, No = 234, ko = 235, To = 236, So = 241, wo = 242, Ro = 243, qo = 244, Po = 245, Ao = 246, Do = 249, Eo = 250, Mo = 251, jo = 261, Ho = 282, Co = 283, Bo = 284, Fo = 285, Vo = 301, Lo = 302, zo = 605, Wo = 303, Go = 311, Xo = 312, Ko = 313, Yo = 314, $o = 315, Uo = 320, Oo = 321, _o = 322, Zo = 323, Jo = 324, Qo = 325, em = 331, tm = 332, am = 333, im = 334, rm = 335, nm = 336, om = 337, mm = 339, pm = 340, sm = 351, dm = 342, lm = 352, cm = 353, ym = 354, um = 355, gm = 655, bm = 356, Im = 357, fm = 0, vm = 1, hm = 2, xm = 3, Nm = 4, km = 5, Tm = 6, Sm = 7, wm = 8, Rm = 9, qm = 10, Pm = 11, Am = 12, Dm = 13, Em = 14, Mm = 15, jm = 16, Hm = 17, Cm = 18, Bm = 19, Fm = 20, Vm = 21, Lm = 22, zm = 23, Wm = 24, Gm = 25, Xm = 26, Km = 27, Ym = 28, $m = 29, Um = 30, Om = 31, _m = 32, Zm = 33, Jm = 34, Qm = 35, ep = 36, tp = 37, ap = 38, ip = 39, rp = 40, np = 41, op = 42, mp = 43, pp = 44, sp = 45, dp = (e2, t2, a2 = 0) => ({ code: e2, indent: a2, parameters: t2 }), lp = (e2 = {}) => ({ switch1Id: e2.switch1Id ?? 0, switch1Valid: void 0 !== e2.switch1Id, switch2Id: e2.switch2Id ?? 0, switch2Valid: void 0 !== e2.switch2Id, variableId: e2.variableId ?? 0, variableValid: void 0 !== e2.variableId, variableValue: e2.variableValue ?? 0, selfSwitchCh: e2.selfSwitchCh ?? "A", selfSwitchValid: void 0 !== e2.selfSwitchCh, itemId: e2.itemId ?? 0, itemValid: void 0 !== e2.itemId, actorId: e2.actorId ?? 0, actorValid: void 0 !== e2.actorId }), cp = () => ({ id: 1, name: "", pages: [], note: "", x: 0, y: 0 }), yp = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), up = () => ({ conditions: lp(), list: [], directionFix: false, image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), gp = { type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "integer" }, scrollY: { type: "integer" } } }, bp = (e2 = { id: 0 }) => {
  return { name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")), id: e2.id, expanded: e2.expanded ?? false, order: e2.order ?? 0, parentId: e2.parentId ?? 0, scrollX: e2.scrollX ?? 0, scrollY: e2.scrollY ?? 0 };
  var t2;
}, Ip = (e2 = {}) => ({ data: e2.data ?? [], battleback1Name: e2.battleback1Name ?? "", battleback2Name: e2.battleback2Name ?? "", autoplayBgm: e2.autoplayBgm ?? false, autoplayBgs: e2.autoplayBgs ?? false, parallaxLoopX: e2.parallaxLoopX ?? false, parallaxLoopY: e2.parallaxLoopY ?? false, parallaxName: e2.parallaxName ?? "", parallaxShow: e2.parallaxShow ?? false, parallaxSx: e2.parallaxSx ?? 0, parallaxSy: e2.parallaxSy ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, width: e2.width ?? 0, height: e2.height ?? 0, note: e2.note ?? "", bgm: e2.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 }, bgs: e2.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 }, disableDashing: e2.disableDashing ?? false, displayName: e2.displayName ?? "", encounterList: e2.encounterList ?? [], events: e2.events ?? [] }), fp = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", trigger: e2.trigger ?? 0, list: e2.list ?? [], switchId: e2.switchId ?? 0 }), vp = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", members: e2.members ?? [], pages: e2.pages ?? [] }), hp = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), xp = (e2 = {}) => ({ actorHp: e2.actorHp ?? 0, actorId: e2.actorId ?? 0, enemyValid: e2.enemyValid ?? 0, switchValid: e2.switchValid ?? 0 }), Np = { type: "object", required: ["battleback1Name", "battleback2Name", "note", "width", "height", "x", "y", "parallaxSy", "parallaxSx", "parallaxLoopY", "parallaxLoopX", "disableDashing", "parallaxName", "parallaxShow", "displayName", "data", "autoplayBgm", "bgm", "autoplayBgs", "bgs"], properties: { data: { type: "array", items: { type: "integer" } }, battleback1Name: { type: "string" }, battleback2Name: { type: "string" }, parallaxLoopY: { type: "boolean" }, parallaxLoopX: { type: "boolean" }, parallaxName: { type: "string" }, parallaxShow: { type: "boolean" }, parallaxSy: { type: "integer" }, parallaxSx: { type: "integer" }, x: { type: "integer", minimum: 0 }, y: { type: "integer", minimum: 0 }, width: { type: "integer", minimum: 0 }, height: { type: "integer", minimum: 0 }, note: { type: "string" }, displayName: { type: "string" }, disableDashing: { type: "boolean" }, autoplayBgm: { type: "boolean" }, bgm: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } }, autoplayBgs: { type: "boolean" }, bgs: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } }, encounterList: { type: "array", items: { type: "object", required: ["regionSet", "troopId", "weight"], properties: { regionSet: { type: "array", items: { type: "integer" } }, troopId: { type: "integer" }, weight: { type: "integer" } } } }, events: { type: "array", items: { type: "object", required: ["id", "name", "x", "y", "pages"], properties: { id: { type: "integer" }, name: { type: "string" }, x: { type: "integer" }, y: { type: "integer" }, note: { type: "string" }, pages: { type: "array", items: { type: "object", required: ["image", "moveRoute", "conditions", "directionFix", "moveFrequency"], properties: { moveFrequency: { type: "integer" }, directionFix: { type: "boolean" }, conditions: { type: "object", required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"], properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: { type: "integer", minimum: 0 }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: { type: "boolean" }, actorId: { type: "integer" }, actorValid: { type: "boolean" } } }, image: { type: "object", required: ["characterIndex", "characterName", "direction", "pattern", "tileId"], properties: { characterIndex: { type: "integer", minimum: 0 }, characterName: { type: "string" }, direction: { type: "integer", enum: [2, 4, 6, 8] }, pattern: { type: "integer" }, tileId: { type: "integer" } } }, moveRoute: { type: "object", required: ["wait", "repeat", "skippable", "list"], properties: { wait: { type: "boolean" }, repeat: { type: "boolean" }, skippable: { type: "boolean" }, list: { type: "array", items: { type: "object", required: ["code", "parameters"], properties: { code: { type: "integer" }, parameters: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }, { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } }] } } } } } } } } } } } } } } }, kp = new e(), Tp = kp.compile(gp), Sp = kp.compile(Np), wp = (e2) => Tp(e2), Rp = (e2) => Sp(e2), qp = (e2, t2) => `<${e2}:${t2}>`, Pp = () => /<([^<>:]+):([^>]*)>/g, Ap = (e2, t2) => Ep(e2.note, (a2, i2) => t2(a2, i2, e2)), Dp = (e2) => Ep(e2, (e3, t2) => [e3, t2]), Ep = (e2, t2) => {
  const a2 = /<([^<>:]+):([^>]*)>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, Mp = (e2, t2) => {
  if (e2.length >= 123456) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]+):([^>]*)>/g, (e3, a2, i2) => {
    const r2 = t2(a2, i2);
    if (r2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return qp(a2, r2);
  });
}, jp = (e2, t2) => {
  const a2 = /<([^<>:]+):([^>]*)>/g, i2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return i2 ? i2[2] : void 0;
}, Hp = (e2, t2, a2) => {
  const i2 = /<([^<>:]+):([^>]*)>/g;
  return e2.replace(i2, (e3, i3) => i3 === t2 ? qp(i3, a2) : e3);
}, Cp = (e2, t2) => `\\${e2}[${t2}]`, Bp = (e2, t2) => t2.map((t3, a2) => ({ text: t3, controlChar: Cp(e2, a2) })), Fp = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), Vp = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: Cp("N", e3.id) })), Lp = (e2) => e2.variables.map((e3, t2) => ({ text: e3 || "", controlChar: Cp("V", t2) })).filter((e3) => "" !== e3.text), zp = { rpg: { damage: ar, data: Zr, traits: ua, itemEffect: fr }, global: nt }, Wp = new e(), Gp = Wp.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } }, additionalProperties: false }), Xp = (e2) => Gp(e2), Kp = Wp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Yp = (e2) => Kp(e2), $p = Wp.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [132, 133, 139, 241, 245, 249, 250] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "object", properties: { name: { type: "string" }, volume: { type: "integer" }, pitch: { type: "integer" }, pan: { type: "integer" } }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }] } }, additionalProperties: false }), Up = (e2) => $p(e2), Op = Wp.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] } }, additionalProperties: false }), _p = (e2) => Op(e2), Zp = Wp.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "string" }] } }, additionalProperties: false }), Jp = (e2) => Zp(e2), Qp = Wp.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), es = (e2) => Qp(e2), ts = Wp.compile({ type: "object", properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } }, required: ["code", "indent", "parameters"] }), as = (e2) => ts(e2), is = Wp.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), rs = (e2) => is(e2), ns = Wp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } }, required: ["code", "indent", "parameters"] }), os = (e2) => ns(e2), ms = Wp.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } } }), ps = (e2) => ms(e2), ss = (e2) => Jp(e2) && 401 === e2.code, ds = (e2) => Jp(e2) && 405 === e2.code, ls = (e2) => Jp(e2) && 108 === e2.code, cs = (e2) => Jp(e2) && 408 === e2.code, ys = (e2) => Jp(e2) && 355 === e2.code, us = (e2) => Jp(e2) && 655 === e2.code, gs = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), bs = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), Is = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), fs = (e2, t2) => vs(e2, i({ name: t2 })), vs = (e2, t2, a2 = 0) => ({ code: e2, parameters: [i(t2)], indent: a2 }), hs = (e2, t2 = 0) => vs(241, e2, t2), xs = (e2, t2 = 0) => vs(245, e2, t2), Ns = (e2, t2 = 0) => vs(249, e2, t2), ks = (e2, t2 = 0) => vs(250, e2, t2), Ts = (e2, t2 = 0) => vs(132, e2, t2), Ss = (e2, t2 = 0) => vs(133, e2, t2), ws = (e2, t2 = 0) => vs(139, e2, t2), Rs = (e2) => [e2], qs = (e2) => ({ comment: e2[0] }), Ps = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: Rs(e2) }), As = (e2, t2 = 0) => ({ code: 408, indent: t2, parameters: Rs(e2) }), Ds = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Ps(e3, t2) : As(e3, t2)), Es = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Ms = (e2) => ({ variableId: e2[0], digits: e2[1] }), js = (e2, t2 = 0) => ({ code: 103, indent: t2, parameters: Es(e2 ?? {}) }), Hs = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Cs = (e2) => ({ speed: e2[0], skip: e2[1] }), Bs = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Hs(e2) }), Fs = (e2 = "") => [e2], Vs = (e2) => ({ content: e2[0] }), Ls = (e2 = "", t2 = 0) => ({ code: 405, indent: t2 ?? 0, parameters: Fs(e2) }), zs = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Ws = (e2) => ({ index: e2[0], name: e2[1] }), Gs = (e2) => [e2.index ?? 0, e2.name ?? ""], Xs = (e2) => ({ choices: e2[0], cancelType: e2[1], defaultType: e2[2], positionType: e2[3], background: e2[4] }), Ks = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], Ys = (e2, t2 = 0) => ({ code: 102, indent: t2, parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0] }), $s = (e2) => ({ code: e2.code, indent: e2.indent, parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]] }), Us = (e2, t2 = 0) => ({ code: 101, indent: t2, parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""] }), Os = (e2) => ({ facename: e2[0], faceIndex: e2[1], background: e2[2], positionType: e2[3], speakerName: e2[4] }), _s = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Zs = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Js = (e2, t2 = 0) => ({ code: 355, indent: t2, parameters: [e2] }), Qs = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), ed = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Js(e3, t2) : Qs(e3, t2)), td = 0, ad = 1, id = 2, rd = 3, nd = 4, od = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, md = (e2, t2) => {
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
}, pd = { HP: 0, MP: 1, MHP: 2, MMP: 3, ATK: 4, DEF: 5, MAT: 6, MDF: 7, AGI: 8, LUK: 9, TP: 10 }, sd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], dd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], ld = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], cd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], yd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], ud = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], gd = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, pd[t2.param]], bd = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), Id = (e2) => [e2.min, e2.max, e2.value], fd = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: Id(e2) }), vd = (e2, t2 = 0) => ({ code: 117, indent: t2, parameters: xd(e2 ?? {}) }), hd = (e2) => ({ eventId: e2[0] }), xd = (e2) => [e2.eventId ?? 0], Nd = (e2) => Up(e2) && 241 === e2.code, kd = (e2) => Up(e2) && 245 === e2.code, Td = (e2) => Up(e2) && 249 === e2.code, Sd = (e2) => Up(e2) && 250 === e2.code, wd = (e2) => Up(e2) && 132 === e2.code, Rd = (e2) => Up(e2) && 133 === e2.code, qd = (e2) => Up(e2) && 139 === e2.code, Pd = (e2) => [...e2], Ad = (e2) => ({ code: e2.code, indent: e2.indent, parameters: Pd(e2.parameters) }), Dd = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Ed = (e2) => e2.parameters.every(Dd);
export {
  pm as ABORT_BATTLE,
  z as AUTHOR_RMMZ,
  Vo as BATTLE_PROCESSING,
  _o as CHANGE_ACTOR_IMAGES,
  Gn as CHANGE_ARMORS,
  Co as CHANGE_BATTLE_BACKGROUND,
  Kn as CHANGE_BATTLE_BGM,
  Oo as CHANGE_CLASS,
  Jn as CHANGE_DEFEAT_ME,
  On as CHANGE_ENCOUNTER,
  em as CHANGE_ENEMY_HP,
  tm as CHANGE_ENEMY_MP,
  am as CHANGE_ENEMY_STATE,
  dm as CHANGE_ENEMY_TP,
  $o as CHANGE_EXP,
  _n as CHANGE_FORMATION_ACCESS,
  Ln as CHANGE_GOLD,
  Go as CHANGE_HP,
  zn as CHANGE_ITEMS,
  Un as CHANGE_MENU_ACCESS,
  Xo as CHANGE_MP,
  Uo as CHANGE_NAME,
  Jo as CHANGE_NICKNAME,
  Bo as CHANGE_PARALLAX,
  Xn as CHANGE_PARTY_MEMBER,
  lo as CHANGE_PLAYER_FOLLOWERS,
  Qo as CHANGE_PROFILE,
  $n as CHANGE_SAVE_ACCESS,
  Ho as CHANGE_TILESET,
  Ko as CHANGE_TP,
  oo as CHANGE_TRANSPARENCY,
  Qn as CHANGE_VEHICLE_BGM,
  Zo as CHANGE_VEHICLE_IMAGE,
  Yn as CHANGE_VICTORY_ME,
  Wn as CHANGE_WEAPONS,
  Zn as CHANGE_WINDOW_COLOR,
  at as COLLAPS_BOSS,
  it as COLLAPS_INSTANT,
  rt as COLLAPS_NONE,
  tt as COLLAPS_NORMAL,
  wn as COMMENT_BODY,
  Sn as COMMENT_HEAD,
  Mn as COMMON_EVENT,
  qn as CONDITIONAL_BRANCH,
  Pn as CONDITIONAL_BRANCH_ELSE,
  Fn as CONTROL_SELF_SWITCH,
  Cn as CONTROL_SWITCHES,
  Vn as CONTROL_TIMER,
  Bn as CONTROL_VARIABLES,
  ar as DEFAULT_DAMAGE_LABELS,
  nt as DEFAULT_GLOBAL_LABELS,
  Ur as DEFAULT_ITEM_LABELS,
  Or as DEFAULT_SKILL_LABELS,
  h as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  x as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  _r as DEFAULT_USABLE_ITEM_LABELS,
  Tr as EFFECT_ADD_BUFF,
  Sr as EFFECT_ADD_DEBUFF,
  Nr as EFFECT_ADD_STATE,
  Dr as EFFECT_COMMON_EVENT,
  xr as EFFECT_GAIN_TP,
  Pr as EFFECT_GROW,
  Ar as EFFECT_LEARN_SKILL,
  vr as EFFECT_RECOVER_HP,
  hr as EFFECT_RECOVER_MP,
  wr as EFFECT_REMOVE_BUFF,
  Rr as EFFECT_REMOVE_DEBUFF,
  kr as EFFECT_REMOVE_STATE,
  qr as EFFECT_SPECIAL,
  rm as ENEMY_APPEAR,
  im as ENEMY_RECOVER_ALL,
  nm as ENEMY_TRANSFORM,
  so as ERASE_EVENT,
  ko as ERASE_PICTURE,
  En as EXIT_EVENT_PROCESSING,
  Rt as EXTRA_PARAM_CEV,
  At as EXTRA_PARAM_CNT,
  wt as EXTRA_PARAM_CRI,
  St as EXTRA_PARAM_EVA,
  Tt as EXTRA_PARAM_HIT,
  Dt as EXTRA_PARAM_HRG,
  qt as EXTRA_PARAM_MEV,
  Pt as EXTRA_PARAM_MRF,
  Et as EXTRA_PARAM_MRG,
  Mt as EXTRA_PARAM_TRG,
  uo as FADEIN_SCREEN,
  wo as FADEOUT_BGM,
  Ao as FADEOUT_BGS,
  yo as FADEOUT_SCREEN,
  Fe as FILENAME_ACTORS,
  $e as FILENAME_ANIMATIONS,
  Ge as FILENAME_ARMORS,
  Ve as FILENAME_CLASSES,
  Oe as FILENAME_COMMON_EVENTS,
  Xe as FILENAME_ENEMIES,
  ze as FILENAME_ITEMS,
  _e as FILENAME_MAP_INFOS,
  Le as FILENAME_SKILLS,
  Ye as FILENAME_STATES,
  Be as FILENAME_SYSTEM,
  Ue as FILENAME_TILESET,
  Ke as FILENAME_TROOPS,
  We as FILENAME_WEAPONS,
  It as FLAG_ID_AUTO_BATTLE,
  ft as FLAG_ID_GUARD,
  ht as FLAG_ID_PRESERVE_TP,
  vt as FLAG_ID_SUBSTITUTE,
  bo as FLASH_SCREEN,
  Qe as FOLDER_AUDIO,
  he as FOLDER_AUDIO_BGM,
  ke as FOLDER_AUDIO_BGS,
  Ne as FOLDER_AUDIO_ME,
  xe as FOLDER_AUDIO_SE,
  Ze as FOLDER_DATA,
  Je as FOLDER_IMG,
  Te as FOLDER_IMG_BATTLEBACK1,
  Se as FOLDER_IMG_BATTLEBACK2,
  we as FOLDER_IMG_CHACTERS,
  Re as FOLDER_IMG_ENEMIES,
  qe as FOLDER_IMG_FACES,
  Pe as FOLDER_IMG_PARALLACES,
  Ae as FOLDER_IMG_PICTURES,
  De as FOLDER_IMG_SV_ACTORS,
  Ee as FOLDER_IMG_SV_ENEMIES,
  Me as FOLDER_IMG_SYSTEM,
  je as FOLDER_IMG_TILESETS,
  He as FOLDER_IMG_TITLES1,
  Ce as FOLDER_IMG_TITLES2,
  et as FOLDER_JS,
  mm as FORCE_ACTION,
  da as FORMAT_NAME,
  ya as FORMAT_PARAM_VALUE,
  cm as GAME_OVER,
  co as GATHER_FOLLOWERS,
  Fo as GET_LOCATION_INFO,
  no as GET_ONOFF_VEHICLE,
  lr as HITTYPE_CERTAIN,
  yr as HITTYPE_MAGICAL,
  cr as HITTYPE_PHYSICAL,
  xn as INPUT_NUMBER,
  jn as LABEL,
  Ui as LABELS_DATA_WEAPON,
  Hn as LABEL_JUMP,
  zp as LABEL_REGISTRY_JP,
  Zr as LABEL_SET_DATA,
  fr as LABEL_SET_ITEM_EFFECT,
  ua as LABEL_SET_TRAIT,
  An as LOOP,
  Dn as LOOP_BREAK,
  Ri as MODULE_DATA,
  La as MODULE_TRAIT,
  ho as MOVE_PICTURE,
  Wo as NAME_INPUT_PROCESSING,
  bn as NO_OPERATION,
  sm as OPEN_MENU_SCREEN,
  lm as OPEN_SAVE_SCREEN,
  td as OPERAND_CONSTANT,
  rd as OPERAND_GAMEDATA,
  id as OPERAND_RANDOM,
  nd as OPERAND_SCRIPT,
  ad as OPERAND_VARIABLE,
  lt as PARTY_ABILITY_CANCEL_SURPRISE,
  ut as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  st as PARTY_ABILITY_ENCOUNTER_HALF,
  dt as PARTY_ABILITY_ENCOUNTER_NONE,
  yt as PARTY_ABILITY_GOLD_DOUBLE,
  ct as PARTY_ABILITY_RAISE_PREEMPTIVE,
  So as PLAY_BGM,
  Po as PLAY_BGS,
  Do as PLAY_ME,
  jo as PLAY_MOVIE,
  Eo as PLAY_SE,
  bm as PLUGIN_COMMAND_MV,
  Im as PLUGIN_COMMAND_MZ,
  Yo as RECOVER_ALL,
  Xt as REGULAR_PARAM_AGI,
  Lt as REGULAR_PARAM_ATK,
  zt as REGULAR_PARAM_DEF,
  Kt as REGULAR_PARAM_LUK,
  Wt as REGULAR_PARAM_MATK,
  Ft as REGULAR_PARAM_MAX_HP,
  Vt as REGULAR_PARAM_MAX_MP,
  Gt as REGULAR_PARAM_MDEF,
  qo as RESUME_BGM,
  ym as RETURN_TO_TITLE_SCREEN,
  xo as ROTATE_PICTURE,
  mp as ROUTE_CHANGE_BLEND_MODE,
  Um as ROUTE_CHANGE_FREQ,
  np as ROUTE_CHANGE_IMAGE,
  op as ROUTE_CHANGE_OPACITY,
  $m as ROUTE_CHANGE_SPEED,
  ep as ROUTE_DIR_FIX_OFF,
  Qm as ROUTE_DIR_FIX_ON,
  fm as ROUTE_END,
  Em as ROUTE_JUMP,
  Pm as ROUTE_MOVE_AWAY,
  Dm as ROUTE_MOVE_BACKWARD,
  vm as ROUTE_MOVE_DOWN,
  Am as ROUTE_MOVE_FORWARD,
  hm as ROUTE_MOVE_LEFT,
  km as ROUTE_MOVE_LOWER_L,
  Tm as ROUTE_MOVE_LOWER_R,
  Rm as ROUTE_MOVE_RANDOM,
  xm as ROUTE_MOVE_RIGHT,
  qm as ROUTE_MOVE_TOWARD,
  Nm as ROUTE_MOVE_UP,
  Sm as ROUTE_MOVE_UPPER_L,
  wm as ROUTE_MOVE_UPPER_R,
  pp as ROUTE_PLAY_SE,
  sp as ROUTE_SCRIPT,
  Jm as ROUTE_STEP_ANIME_OFF,
  Zm as ROUTE_STEP_ANIME_ON,
  Ym as ROUTE_SWITCH_OFF,
  Km as ROUTE_SWITCH_ON,
  ap as ROUTE_THROUGH_OFF,
  tp as ROUTE_THROUGH_ON,
  rp as ROUTE_TRANSPARENT_OFF,
  ip as ROUTE_TRANSPARENT_ON,
  Lm as ROUTE_TURN_180D,
  Vm as ROUTE_TURN_90D_L,
  Fm as ROUTE_TURN_90D_R,
  zm as ROUTE_TURN_90D_R_L,
  Xm as ROUTE_TURN_AWAY,
  jm as ROUTE_TURN_DOWN,
  Hm as ROUTE_TURN_LEFT,
  Wm as ROUTE_TURN_RANDOM,
  Cm as ROUTE_TURN_RIGHT,
  Gm as ROUTE_TURN_TOWARD,
  Bm as ROUTE_TURN_UP,
  Mm as ROUTE_WAIT,
  _m as ROUTE_WALK_ANIME_OFF,
  Om as ROUTE_WALK_ANIME_ON,
  Ro as SAVE_BGM,
  rr as SCHEMA_DAMAGE,
  wi as SCHEMA_DATA_ACTOR,
  zi as SCHEMA_DATA_ARMMOR,
  Xi as SCHEMA_DATA_CLASS,
  tr as SCHEMA_DATA_ENEMY,
  dr as SCHEMA_DATA_ITEM,
  gp as SCHEMA_DATA_MAP_INFO,
  sr as SCHEMA_DATA_SKILL,
  $i as SCHEMA_DATA_STATE,
  _i as SCHEMA_DATA_WEAPON,
  a as SCHEMA_SYSTEM_ADVANCED,
  xi as SCHEMA_TRAIT,
  um as SCRIPT_EVAL,
  gm as SCRIPT_EVAL_BODY,
  io as SCROLL_MAP,
  Nn as SELECT_ITEM,
  ao as SET_EVENT_LOCATION,
  ro as SET_MOVEMENT_ROUTE,
  to as SET_VEHICLE_LOCATION,
  To as SET_WEATHER_EFFECT,
  Io as SHAKE_SCREEN,
  Lo as SHOP_PROCESSING,
  zo as SHOP_PROCESSING_BODY,
  mo as SHOW_ANIMATION,
  po as SHOW_BALLOON_ICON,
  om as SHOW_BATTLE_ANIMATION,
  vn as SHOW_CHOICES,
  hn as SHOW_CHOICES_ITEM,
  In as SHOW_MESSAGE,
  fn as SHOW_MESSAGE_BODY,
  vo as SHOW_PICTURE,
  kn as SHOW_SCROLLING_TEXT,
  Tn as SHOW_SCROLLING_TEXT_BODY,
  Rn as SKIP,
  Er as SPECIAL_EFFECT_ESCAPE,
  na as SPECIAL_PARAM_EXR,
  ra as SPECIAL_PARAM_FDR,
  Zt as SPECIAL_PARAM_GRD,
  ea as SPECIAL_PARAM_MCR,
  ia as SPECIAL_PARAM_MDR,
  aa as SPECIAL_PARAM_PDR,
  Qt as SPECIAL_PARAM_PHA,
  Jt as SPECIAL_PARAM_REC,
  ta as SPECIAL_PARAM_TCR,
  _t as SPECIAL_PARAM_TGR,
  W as SRC_COLOR,
  qi as SRC_DATA_ACTOR,
  Hi as SRC_DATA_ARMOR,
  Ci as SRC_DATA_CLASS,
  Bi as SRC_DATA_COMMON_EVNET,
  Ai as SRC_DATA_ENEMY,
  Mi as SRC_DATA_ITEMS,
  Pi as SRC_DATA_MAP,
  Ei as SRC_DATA_SKILL,
  Di as SRC_DATA_STATE,
  Fi as SRC_DATA_TROOP,
  ji as SRC_DATA_WEAPON,
  Wa as SRC_PARAMS_EXTRA,
  za as SRC_PARAMS_REGULAR,
  Ga as SRC_PARAMS_SPECIAL,
  Xa as SRC_TRAIT_COLLAPS,
  Ka as SRC_TRAIT_PARTY_ABILITY,
  Ya as SRC_TRAIT_SPECIAL_FLAG,
  Mo as STOP_SE,
  No as TINT_PICTURE,
  go as TINT_SCREEN,
  Ca as TRAIT_ACTION_PLUS,
  Na as TRAIT_ATTACK_ELEMENT,
  wa as TRAIT_ATTACK_SKILL,
  Ta as TRAIT_ATTACK_SPEED,
  ka as TRAIT_ATTACK_STATE,
  Sa as TRAIT_ATTACK_TIMES,
  Fa as TRAIT_COLLAPSE_TYPE,
  ba as TRAIT_DEBUFF_RATE,
  ga as TRAIT_ELEMENT_RATE,
  Ea as TRAIT_EQUIP_ARMOR_TYPE,
  Ma as TRAIT_EQUIP_LOCK,
  ja as TRAIT_EQUIP_SEAL,
  Da as TRAIT_EQUIP_WEAPON_TYPE,
  va as TRAIT_PARAM,
  Va as TRAIT_PARTY_ABILITY,
  Pa as TRAIT_SKILL_ADD,
  Aa as TRAIT_SKILL_SEAL,
  Ra as TRAIT_SKILL_TYPE_ADD,
  qa as TRAIT_SKILL_TYPE_SEAL,
  Ha as TRAIT_SLOT_TYPE,
  xa as TRAIT_SPARAM,
  Ba as TRAIT_SPECIAL_FLAG,
  Ia as TRAIT_STATE_RATE,
  fa as TRAIT_STATE_RESIST,
  ha as TRAIT_XPARAM,
  eo as TRANSFER_PLAYER,
  hi as TYPENAME_TRAIT,
  fo as WAIT,
  Si as actorSourceId,
  ie as applyFormatRule,
  Li as armorSourceId,
  ye as buildArmorTypesSource,
  ue as buildElementTypesSource,
  ge as buildEquipTypesSource,
  be as buildSkillTypesSource,
  fe as buildSwitchesSource,
  Ie as buildVariableNamesSource,
  ve as buildWeaponTypesSource,
  $s as cloneChoices,
  Ad as cloneEventCommand,
  Pd as cloneParameters,
  pt as collapsOptionsToArray,
  ot as collapsSourceId,
  G as compileFormatRule,
  qs as convertCommentArrayToObject,
  Vp as createActorControlChars,
  Cp as createControlCharFormat,
  dp as createEventCommand,
  qp as createNoteEntity,
  Lp as createSystemVariableControlChars,
  ce as defineSystemItems,
  mt as defineTraitCollapseType,
  Ht as defineTraitExtraParam,
  $a as defineTraitItems,
  $t as defineTraitRegularParam,
  xt as defineTraitSpecialFlag,
  ma as defineTraitSpecialParam,
  $ as detectFormatErrors,
  er as enemySourceId,
  Bt as extraParamName,
  jt as extraParamSourceId,
  Ct as extraParamsToArray,
  $r as formatItemEffectText,
  ki as formatTraitText,
  hd as fromArrayCommonEvent,
  bd as fromArrayControlSwitches,
  Ms as fromArrayInputNumber,
  Vs as fromArrayScrollingTextBody,
  Cs as fromArrayScrollingTextHeader,
  Xs as fromArraySetupChoice,
  Ws as fromArraySetupChoiceItem,
  Os as fromArrayShowMessageHeader,
  Bp as fromStringArray,
  md as getActorValue,
  Fp as getControlChars,
  od as getEnemyValue,
  jp as getNoteValue,
  Ed as isCloneableCommand,
  Up as isCommandAudio,
  Xp as isCommandChangeActorText,
  wd as isCommandChangeBattleBgm,
  qd as isCommandChangeDefeatMe,
  Rd as isCommandChangeVictoryMe,
  cs as isCommandCommentBody,
  ls as isCommandCommentHeader,
  es as isCommandCommonEvent,
  os as isCommandInputNumber,
  _p as isCommandNonParam,
  Nd as isCommandPlayBgm,
  kd as isCommandPlayBgs,
  Td as isCommandPlayMe,
  Sd as isCommandPlaySe,
  us as isCommandScriptBody,
  ys as isCommandScriptHeader,
  Yp as isCommandScrollTextHead,
  rs as isCommandShowChoiceItem,
  as as isCommandShowChoices,
  ps as isCommandShowMessage,
  ss as isCommandShowMessageBody,
  ds as isCommandShowScrollingTextBody,
  Jp as isCommandTextBody,
  dn as isDataActor,
  ln as isDataArmor,
  gn as isDataClass,
  yn as isDataEnemy,
  pn as isDataItem,
  Rp as isDataMap,
  wp as isDataMapInfo,
  sn as isDataSkill,
  un as isDataState,
  cn as isDataWeapon,
  nr as itemSourceId,
  J as joinItemsSoruce,
  Ti as makeActorData,
  Vi as makeArmorData,
  fs as makeAudioCommand,
  i as makeAudioFileParams,
  Wi as makeClassData,
  Gi as makeClassSourceIdentifier,
  vs as makeCommandAudioAny,
  gs as makeCommandChangeActorName,
  bs as makeCommandChangeActorNickName,
  Is as makeCommandChangeActorProfile,
  Ts as makeCommandChangeBattleBGM,
  ws as makeCommandChangeDefeatME,
  Ss as makeCommandChangeVictoryME,
  As as makeCommandCommentBody,
  Ps as makeCommandCommentHeader,
  vd as makeCommandCommonEvent,
  fd as makeCommandControlSwitches,
  js as makeCommandInputNumber,
  hs as makeCommandPlayBGM,
  xs as makeCommandPlayBGS,
  Ns as makeCommandPlayME,
  ks as makeCommandPlaySE,
  ed as makeCommandScriptArray,
  Qs as makeCommandScriptBody,
  Js as makeCommandScriptHeader,
  Ls as makeCommandScrollingTextBody,
  Bs as makeCommandScrollingTextHeader,
  Ys as makeCommandSetupChoice,
  zs as makeCommandShowChoiceItem,
  Us as makeCommandShowMessage,
  Zs as makeCommandShowMessageBody,
  Rs as makeCommentArray,
  Ds as makeCommentCommandArray,
  fp as makeCommonEventData,
  ir as makeDamage,
  Zi as makeDropItem,
  v as makeEditorSetting,
  Ji as makeEnemyAction,
  Qi as makeEnemyData,
  lp as makeEventPageCondition,
  I as makeItemCategories,
  f as makeItemCategoriesFromArray,
  or as makeItemData,
  Ip as makeMapData,
  cp as makeMapEvent,
  yp as makeMapEventIamge,
  up as makeMapEventPage,
  bp as makeMapInfoData,
  g as makeMenuCommandsEnabled,
  b as makeMenuCommandsEnabledFromArray,
  y as makeParamNamesArray,
  Pp as makeRegex,
  pr as makeSkillData,
  r as makeSoundsArray,
  n as makeSoundsObject,
  Ki as makeStateData,
  t as makeSystemAdvanced,
  w as makeSystemData,
  o as makeTermsBasic,
  m as makeTermsBasicFromArray,
  p as makeTermsCommand,
  d as makeTermsCommandFromArray,
  c as makeTermsMessages,
  vp as makeTroopData,
  xp as makeTroopEventConditions,
  hp as makeTroopMember,
  u as makeVehicleData,
  Oi as makeWeaponData,
  gt as partyAbilitySourceId,
  bt as partyAbilityToArray,
  Dp as readNote,
  Ep as readNoteEx,
  Ap as readNoteObject,
  Ot as regularParamName,
  Yt as regularParamSourceId,
  Ut as regularParamsToArray,
  Mp as replaceNote,
  Mr as resolveItemEffectLabels,
  Ua as resolveTraitLabels,
  Hp as setNoteValue,
  mr as skillSourceId,
  Nt as specialFlagSourceId,
  kt as specialFlagToArray,
  sa as specialParamName,
  oa as specialParamSourceId,
  pa as specialParamsToArray,
  Yi as stateSourceId,
  oe as systemArmorTypesSourceId,
  ne as systemElementsSourceId,
  me as systemEquipTypesSourceId,
  pe as systemSkillTypesSourceId,
  se as systemSwitchesSourceId,
  de as systemVariablesSourceId,
  le as systemWeaponTypesSourceId,
  xd as toArrayCommonEvent,
  Id as toArrayControlSwitches,
  Es as toArrayInputNumber,
  ud as toArrayOperandActorStatus,
  sd as toArrayOperandConstant,
  gd as toArrayOperandEnemyStatus,
  yd as toArrayOperandItemData,
  ld as toArrayOperandRandom,
  cd as toArrayOperandScript,
  dd as toArrayOperandVariable,
  Fs as toArrayScrollingTextBody,
  Hs as toArrayScrollingTextHeader,
  Ks as toArraySetupChoice,
  Gs as toArraySetupChoiceItem,
  _s as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
