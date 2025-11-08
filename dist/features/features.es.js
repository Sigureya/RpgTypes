import { cZ as H, cY as L, c$ as z, B as w, z as E, A as D, cF as W, aK as k, aJ as B, aF as S, i as l, j as h, C as x, c as u, d as b, S as v, m as Z, b as $, a_ as J, aZ as f, h as A, b0 as K, cB as M, cC as _, cR as O, cX as P, cW as X, cT as Y, b2 as Q, b1 as ee, cP as te, r as se, cl as ae } from "../shared/make.es2.js";
import { m as R } from "../shared/mergeItemsSource.es.js";
const V = (e, t, a) => e.reduce((r, o) => (o.code !== w && o.code !== E && o.code !== D || r.push(oe(o, t, a)), r), []), re = {
  [D]: "weapon",
  [w]: "armor",
  [E]: "item"
}, oe = (e, t, a) => {
  const r = e.parameters[3] === H ? { direct: !0, value: e.parameters[2] } : {
    direct: !1,
    variableId: e.parameters[2]
  }, o = e.parameters[0] === L ? t.gain : e.parameters[0] === z ? t.lose : t.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: re[e.code],
    dataId: e.parameters[1],
    code: e.code,
    commandNameMZ: a(e.code),
    operation: o,
    ...n,
    ...r
  };
}, ne = (e) => !!e, I = (e, t) => e.pages.map((a, r) => t(a, r, e)), U = (e, t) => e.events.filter(ne).flatMap((a) => I(a, t)), ke = (e, t, a) => U(e.map, (r, o, n) => ({
  ...me(r),
  commands: V(r.list, t, a),
  eventName: n.name,
  pageIndex: o
})), me = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Be = (e, t, a) => {
  return r = (o, n, m) => ({
    commands: V(o.list, t, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), e.flatMap((o) => I(o, r));
  var r;
}, s = (e, t) => {
  const a = e.trimEnd(), r = t.get(a);
  return r ? r.trimEnd() : a;
}, d = (e, t, a = `
`) => W(e.note, (r) => s(r.value, t), a), Se = (e, t) => {
  const a = d(e, t), r = s(e.name, t), o = s(e.nickname, t), n = s(e.profile, t);
  return { ...e, name: r, nickname: o, profile: n, note: a };
}, Ae = (e, t) => {
  const a = d(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, Me = (e, t) => {
  const a = d(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, Re = (e, t) => {
  const a = d(e, t), r = s(e.name, t), o = s(e.description, t), n = s(e.message1, t), m = s(e.message2, t);
  return { ...e, name: r, description: o, message1: n, message2: m, note: a };
}, Ve = (e, t) => {
  const a = d(e, t), r = s(e.name, t), o = s(e.description, t);
  return { ...e, name: r, description: o, note: a };
}, Ue = (e, t) => {
  const a = d(e, t), r = s(e.name, t), o = s(e.message1, t), n = s(e.message2, t), m = s(e.message3, t), c = s(e.message4, t);
  return { ...e, name: r, message1: o, message2: n, message3: m, message4: c, note: a };
}, N = (e, t) => e.map((a) => {
  switch (a.code) {
    case v:
      return ie(a, t);
    case b:
      return pe(a, t);
    case u:
    case x:
    case h:
    case l:
      return ce(a, t);
    case S:
    case B:
    case k:
      return de(a, t);
    default:
      return a;
  }
}), ce = (e, t) => {
  const a = s(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, ie = (e, t) => {
  const a = e.parameters[4] ? s(e.parameters[4], t) : "";
  return Z({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, de = (e, t) => {
  const a = s(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, pe = (e, t) => {
  const a = e.parameters[0].map((r) => s(r, t));
  return {
    code: b,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ge = (e, t) => {
  const a = e.pages.map((r) => ({ list: N(r.list, t), conditions: r.conditions, span: r.span }));
  return { ...e, pages: a };
}, je = (e, t) => ({ ...e, list: N(e.list, t) }), qe = (e, t) => {
  const a = s(e.displayName, t), r = d(e, t), o = { displayName: a, events: $(e, (n) => N(n, t)), note: r };
  return { ...e, ...o };
}, le = (e, t) => ({
  params: ge(e.params, t),
  messages: ye(e.messages, t),
  commands: xe(e.commands, t),
  basic: ue(e.basic, t)
}), ue = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], xe = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t), s(e[10], t), s(e[11], t), s(e[12], t), s(e[13], t), s(e[14], t), s(e[15], t), s(e[16], t), s(e[17], t), s(e[18], t), s(e[19], t), "", s(e[21], t), s(e[22], t), "", s(e[24], t), s(e[25], t)], ge = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], ye = (e, t) => ({
  actionFailure: s(e.actionFailure, t),
  actorDamage: s(e.actorDamage, t),
  actorDrain: s(e.actorDrain, t),
  actorGain: s(e.actorGain, t),
  actorLoss: s(e.actorLoss, t),
  actorNoDamage: s(e.actorNoDamage, t),
  actorNoHit: s(e.actorNoHit, t),
  actorRecovery: s(e.actorRecovery, t),
  alwaysDash: s(e.alwaysDash, t),
  autosave: s(e.autosave, t),
  bgmVolume: s(e.bgmVolume, t),
  bgsVolume: s(e.bgsVolume, t),
  buffAdd: s(e.buffAdd, t),
  buffRemove: s(e.buffRemove, t),
  commandRemember: s(e.commandRemember, t),
  counterAttack: s(e.counterAttack, t),
  criticalToActor: s(e.criticalToActor, t),
  criticalToEnemy: s(e.criticalToEnemy, t),
  defeat: s(e.defeat, t),
  debuffAdd: s(e.debuffAdd, t),
  emerge: s(e.emerge, t),
  enemyDamage: s(e.enemyDamage, t),
  enemyDrain: s(e.enemyDrain, t),
  enemyGain: s(e.enemyGain, t),
  enemyLoss: s(e.enemyLoss, t),
  enemyNoDamage: s(e.enemyNoDamage, t),
  enemyNoHit: s(e.enemyNoHit, t),
  enemyRecovery: s(e.enemyRecovery, t),
  escapeFailure: s(e.escapeFailure, t),
  escapeStart: s(e.escapeStart, t),
  evasion: s(e.evasion, t),
  expNext: s(e.expNext, t),
  expTotal: s(e.expTotal, t),
  file: s(e.file, t),
  loadMessage: s(e.loadMessage, t),
  levelUp: s(e.levelUp, t),
  magicEvasion: s(e.magicEvasion, t),
  magicReflection: s(e.magicReflection, t),
  meVolume: s(e.meVolume, t),
  obtainExp: s(e.obtainExp, t),
  obtainGold: s(e.obtainGold, t),
  obtainItem: s(e.obtainItem, t),
  obtainSkill: s(e.obtainSkill, t),
  partyName: s(e.partyName, t),
  possession: s(e.possession, t),
  preemptive: s(e.preemptive, t),
  saveMessage: s(e.saveMessage, t),
  seVolume: s(e.seVolume, t),
  substitute: s(e.substitute, t),
  surprise: s(e.surprise, t),
  touchUI: s(e.touchUI, t),
  useItem: s(e.useItem, t),
  victory: s(e.victory, t)
}), He = (e, t) => ({
  ...e,
  gameTitle: s(e.gameTitle, t),
  currencyUnit: s(e.currencyUnit, t),
  elements: p(e.elements, t),
  skillTypes: p(e.skillTypes, t),
  weaponTypes: p(e.weaponTypes, t),
  armorTypes: p(e.armorTypes, t),
  equipTypes: p(e.equipTypes, t),
  terms: le(e.terms, t)
}), p = (e, t) => e.map((a) => s(a, t)), G = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class j {
  constructor(t, a) {
    this.header = t, this.bodies = a;
  }
  getBodyText() {
    return G(this.joinCommandBodies());
  }
  mergedBody() {
    return { code: this.header.code, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
  joinCommandBodies() {
    return [this.header, ...this.bodies];
  }
  normalizedCommands() {
    return [this.mergedBody()];
  }
}
class F {
  constructor(t, a, r) {
    this.bodyCode = t, this.header = a, this.bodies = r;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  getBodyText() {
    return G(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const g = (e, t, a, r) => {
  const o = e[t];
  if (!a(o)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(o)}`);
  const n = [];
  for (let m = t + 1; m < e.length; m++) {
    const c = e[m];
    if (!r(c)) break;
    n.push(c);
  }
  return { header: o, bodies: n };
}, Te = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === x, (m) => m.code === h))(e, t);
  return he(r) ? new F(h, r, a) : new j(r, a);
}, he = (e) => e.parameters[0] === "選択肢ヘルプ", be = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === v, (m) => m.code === u))(e, t);
  return new F(u, r, a);
}, ve = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === f, (m) => m.code === J))(e, t);
  return new j(r, a);
}, fe = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === A, (m) => m.code === l))(e, t);
  return new F(l, r, a);
}, Ie = {
  [v]: (e, t, a) => a.showMessage(be(e, t), t, e),
  [f]: (e, t, a) => a.script(ve(e, t), t, e),
  [x]: (e, t, a) => a.comment(Te(e, t), t, e),
  [A]: (e, t, a) => a.showScrollingText(fe(e, t), t, e)
}, y = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), Ne = (e) => e.parameters[0].map((t, a) => ({ code: 102, paramIndex: a, value: t })), Le = (e) => q(e, () => []), C = (e, t) => q(e, t), q = (e, t) => e.reduce((a, r, o) => {
  if (r.code === b) return [...a, ...Ne(r)];
  const n = (m = r.code, Ie[m]);
  var m;
  if (n) {
    const c = n(e, o, Fe);
    if (c !== void 0) return [...a, c];
  }
  if (r.code === B) return [...a, y(r)];
  if (r.code === S) return [...a, y(r)];
  if (r.code === k) return [...a, y(r)];
  if (r.code === K) {
    const c = t(r);
    return c.length === 0 ? a : [...a, ...c];
  }
  return a;
}, []), Fe = { comment: (e) => ({
  code: x,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: u, paramIndex: 0, value: (t = e).getBodyText(), speaker: (a = t.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var t, a;
}, script: (e) => ((t) => ({ code: f, paramIndex: 0, value: t.getBodyText() }))(e), showScrollingText: (e) => ((t) => ({ code: l, paramIndex: 0, value: t.getBodyText() }))(e) }, ze = (e, t = () => []) => {
  return a = (r, o, { id: n }) => ({ eventId: n, commands: C(r.list, t) }), e.map((r) => a(r, 0, r));
  var a;
}, We = (e, t = () => []) => ((a, r) => a.map((o) => I(o, r)))(e, (a, r, { id: o }) => ({
  eventId: o,
  pageIndex: r,
  commands: C(a.list, t)
})), Ze = (e, t = () => []) => ({ note: e.note, noteItems: M(e.note), displayedName: e.displayName, events: Ce(e, t) }), Ce = (e, t) => U(e, (a, r, o) => ({
  eventId: o.id,
  pageIndex: r,
  commands: C(a.list, t),
  note: o.note,
  noteItems: M(o.note),
  name: o.name
})), $e = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), T = (e, t, a) => ({
  folder: a,
  key: t,
  image: e[t],
  id: e.id
}), Je = (e) => [T(e, "faceName", "faces"), T(e, "characterName", "characters"), T(e, "battlerName", "sv_actors")], i = (e, t) => ({
  note: we(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), we = (e) => _(e.note, (t, a) => ({
  key: t,
  text: a,
  id: e.id
})), Ke = (e) => i(e, ["name", "nickname", "profile"]), _e = (e) => i(e, ["name"]), Oe = (e) => i(e, ["name"]), Pe = (e) => i(e, ["name", "description", "message1", "message2"]), Xe = (e) => i(e, ["name", "description"]), Ye = (e) => i(e, ["name", "description"]), Qe = (e) => i(e, ["name", "description"]), et = (e) => i(e, ["name", "message1", "message2", "message3", "message4"]), tt = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Y(e.terms.basic),
    commands: X(e.terms.commands),
    messages: P(e.terms.messages),
    params: O(e.terms.params)
  }
}), st = (e, t, a, r, o, n) => [...Q(a, r), ...ee(e, t), ...te(o, n)], at = (e, t) => R(se(t), e), rt = (e, t, a) => {
  const r = ae(t);
  return R(a ? [...r, ...a] : r, e);
};
export {
  st as buildReferenceItemSources,
  rt as compileItemEffectDisplayData,
  at as compileTraitDisplayData,
  We as extractBattleEventTexts,
  ze as extractCommonEventTexts,
  Je as extractImageFromActor,
  $e as extractImageFromEnemy,
  oe as extractItemChangeData,
  V as extractItemCommands,
  ke as extractItemFromMap,
  Be as extractItemFromTroop,
  Ze as extractMapText,
  we as extractNoteText,
  i as extractTextData,
  Ke as extractTextFromActor,
  Qe as extractTextFromArmor,
  Oe as extractTextFromClass,
  _e as extractTextFromEnemy,
  Le as extractTextFromEventCommands,
  Xe as extractTextFromItem,
  Pe as extractTextFromSkill,
  et as extractTextFromState,
  tt as extractTextFromSystem,
  Ye as extractTextFromWeapon,
  Se as replaceActorText,
  Ve as replaceArmorText,
  Me as replaceClassText,
  je as replaceCommonEventTexts,
  Ae as replaceEnemyText,
  N as replaceEventCommandTexts,
  Ve as replaceItemText,
  qe as replaceMapDataTexts,
  d as replaceNoteTextByMap,
  Re as replaceSkillText,
  Ue as replaceStateText,
  le as replaceSystemTerms,
  He as replaceSystemText,
  s as replaceTextByMap,
  ce as replaceTextForCommand,
  de as replaceTextForCommandActor,
  pe as replaceTextForCommandShowChoices,
  ie as replaceTextForCommandShowMessage,
  Ge as replaceTroopTexts,
  Ve as replaceWeaponText
};
