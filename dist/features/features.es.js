import { cZ as j, cY as q, c$ as H, B as C, z as w, A as E, cF as L, aK as D, aJ as k, aF as B, i as l, j as T, C as x, c as u, d as h, S as b, m as z, b as Z, a_ as $, aZ as v, h as S, cB as A, cC as J, cR as W, cX as K, cW as _, cT as O, b2 as P, b1 as X, cP as Y, r as Q, cl as ee } from "../shared/make.es2.js";
import { m as M } from "../shared/mergeItemsSource.es.js";
const R = (e, t, a) => e.reduce((r, o) => (o.code !== C && o.code !== w && o.code !== E || r.push(se(o, t, a)), r), []), te = {
  [E]: "weapon",
  [C]: "armor",
  [w]: "item"
}, se = (e, t, a) => {
  const r = e.parameters[3] === j ? { direct: !0, value: e.parameters[2] } : {
    direct: !1,
    variableId: e.parameters[2]
  }, o = e.parameters[0] === q ? t.gain : e.parameters[0] === H ? t.lose : t.unknown, n = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
  return {
    itemKind: te[e.code],
    dataId: e.parameters[1],
    code: e.code,
    commandNameMZ: a(e.code),
    operation: o,
    ...n,
    ...r
  };
}, ae = (e) => !!e, f = (e, t) => e.pages.map((a, r) => t(a, r, e)), V = (e, t) => e.events.filter(ae).flatMap((a) => f(a, t)), Ee = (e, t, a) => V(e.map, (r, o, n) => ({
  ...re(r),
  commands: R(r.list, t, a),
  eventName: n.name,
  pageIndex: o
})), re = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, De = (e, t, a) => {
  return r = (o, n, m) => ({
    commands: R(o.list, t, a),
    eventName: m.name,
    troopId: m.id,
    pageIndex: n
  }), e.flatMap((o) => f(o, r));
  var r;
}, s = (e, t) => {
  const a = e.trimEnd(), r = t.get(a);
  return r ? r.trimEnd() : a;
}, i = (e, t, a = `
`) => L(e.note, (r) => s(r.value, t), a), ke = (e, t) => {
  const a = i(e, t), r = s(e.name, t), o = s(e.nickname, t), n = s(e.profile, t);
  return { ...e, name: r, nickname: o, profile: n, note: a };
}, Be = (e, t) => {
  const a = i(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, Se = (e, t) => {
  const a = i(e, t), r = s(e.name, t);
  return { ...e, name: r, note: a };
}, Ae = (e, t) => {
  const a = i(e, t), r = s(e.name, t), o = s(e.description, t), n = s(e.message1, t), m = s(e.message2, t);
  return { ...e, name: r, description: o, message1: n, message2: m, note: a };
}, Me = (e, t) => {
  const a = i(e, t), r = s(e.name, t), o = s(e.description, t);
  return { ...e, name: r, description: o, note: a };
}, Re = (e, t) => {
  const a = i(e, t), r = s(e.name, t), o = s(e.message1, t), n = s(e.message2, t), m = s(e.message3, t), p = s(e.message4, t);
  return { ...e, name: r, message1: o, message2: n, message3: m, message4: p, note: a };
}, I = (e, t) => e.map((a) => {
  switch (a.code) {
    case b:
      return ne(a, t);
    case h:
      return ce(a, t);
    case u:
    case x:
    case T:
    case l:
      return oe(a, t);
    case B:
    case k:
    case D:
      return me(a, t);
    default:
      return a;
  }
}), oe = (e, t) => {
  const a = s(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, ne = (e, t) => {
  const a = e.parameters[4] ? s(e.parameters[4], t) : "";
  return z({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, me = (e, t) => {
  const a = s(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, ce = (e, t) => {
  const a = e.parameters[0].map((r) => s(r, t));
  return {
    code: h,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ve = (e, t) => {
  const a = e.pages.map((r) => ({ list: I(r.list, t), conditions: r.conditions, span: r.span }));
  return { ...e, pages: a };
}, Ue = (e, t) => ({ ...e, list: I(e.list, t) }), Ge = (e, t) => {
  const a = s(e.displayName, t), r = i(e, t), o = { displayName: a, events: Z(e, (n) => I(n, t)), note: r };
  return { ...e, ...o };
}, ie = (e, t) => ({
  params: le(e.params, t),
  messages: ue(e.messages, t),
  commands: pe(e.commands, t),
  basic: de(e.basic, t)
}), de = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], pe = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t), s(e[10], t), s(e[11], t), s(e[12], t), s(e[13], t), s(e[14], t), s(e[15], t), s(e[16], t), s(e[17], t), s(e[18], t), s(e[19], t), "", s(e[21], t), s(e[22], t), "", s(e[24], t), s(e[25], t)], le = (e, t) => [s(e[0], t), s(e[1], t), s(e[2], t), s(e[3], t), s(e[4], t), s(e[5], t), s(e[6], t), s(e[7], t), s(e[8], t), s(e[9], t)], ue = (e, t) => ({
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
}), je = (e, t) => ({
  ...e,
  gameTitle: s(e.gameTitle, t),
  currencyUnit: s(e.currencyUnit, t),
  elements: d(e.elements, t),
  skillTypes: d(e.skillTypes, t),
  weaponTypes: d(e.weaponTypes, t),
  armorTypes: d(e.armorTypes, t),
  equipTypes: d(e.equipTypes, t),
  terms: ie(e.terms, t)
}), d = (e, t) => e.map((a) => s(a, t)), U = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class G {
  constructor(t, a) {
    this.header = t, this.bodies = a;
  }
  getBodyText() {
    return U(this.joinCommandBodies());
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
class N {
  constructor(t, a, r) {
    this.bodyCode = t, this.header = a, this.bodies = r;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  getBodyText() {
    return U(this.bodies);
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
    const p = e[m];
    if (!r(p)) break;
    n.push(p);
  }
  return { header: o, bodies: n };
}, xe = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === x, (m) => m.code === T))(e, t);
  return ge(r) ? new N(T, r, a) : new G(r, a);
}, ge = (e) => e.parameters[0] === "選択肢ヘルプ", ye = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === b, (m) => m.code === u))(e, t);
  return new N(u, r, a);
}, Te = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === v, (m) => m.code === $))(e, t);
  return new G(r, a);
}, he = (e, t) => {
  const { bodies: a, header: r } = ((o, n) => g(o, n, (m) => m.code === S, (m) => m.code === l))(e, t);
  return new N(l, r, a);
}, be = {
  [b]: (e, t, a) => a.showMessage(ye(e, t), t, e),
  [v]: (e, t, a) => a.script(Te(e, t), t, e),
  [x]: (e, t, a) => a.comment(xe(e, t), t, e),
  [S]: (e, t, a) => a.showScrollingText(he(e, t), t, e)
}, ve = (e) => ((t, a) => ({
  code: t.code,
  paramIndex: a,
  value: t.parameters[a]
}))(e, 1), fe = (e) => e.parameters[0].map((t, a) => ({ code: 102, paramIndex: a, value: t })), F = (e) => e.reduce((t, a, r) => {
  if (a.code === h) return [...t, ...fe(a)];
  const o = (n = a.code, be[n]);
  var n;
  if (o) {
    const m = o(e, r, Ie);
    if (m !== void 0) return [...t, m];
  }
  return a.code === k || a.code === B || a.code === D ? [...t, ve(a)] : t;
}, []), Ie = {
  comment: (e) => ({ code: x, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: u, paramIndex: 0, value: (t = e).getBodyText(), speaker: (a = t.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
    var t, a;
  },
  script: (e) => ((t) => ({
    code: v,
    paramIndex: 0,
    value: t.getBodyText()
  }))(e),
  showScrollingText: (e) => ((t) => ({ code: l, paramIndex: 0, value: t.getBodyText() }))(e)
}, qe = (e) => {
  return t = (a, r, { id: o }) => ({
    eventId: o,
    commands: F(a.list)
  }), e.map((a) => t(a, 0, a));
  var t;
}, He = (e) => ((t, a) => t.map((r) => f(r, a)))(e, (t, a, { id: r }) => ({ eventId: r, pageIndex: a, commands: F(t.list) })), Le = (e) => ({
  note: e.note,
  noteItems: A(e.note),
  displayedName: e.displayName,
  events: Ne(e)
}), Ne = (e) => V(e, (t, a, r) => ({ eventId: r.id, pageIndex: a, commands: F(t.list), note: r.note, noteItems: A(r.note), name: r.name })), ze = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), y = (e, t, a) => ({
  folder: a,
  key: t,
  image: e[t],
  id: e.id
}), Ze = (e) => [y(e, "faceName", "faces"), y(e, "characterName", "characters"), y(e, "battlerName", "sv_actors")], c = (e, t) => ({
  note: Fe(e),
  main: t.map((a) => ({ key: a, text: e[a], id: e.id }))
}), Fe = (e) => J(e.note, (t, a) => ({
  key: t,
  text: a,
  id: e.id
})), $e = (e) => c(e, ["name", "nickname", "profile"]), Je = (e) => c(e, ["name"]), We = (e) => c(e, ["name"]), Ke = (e) => c(e, ["name", "description", "message1", "message2"]), _e = (e) => c(e, ["name", "description"]), Oe = (e) => c(e, ["name", "description"]), Pe = (e) => c(e, ["name", "description"]), Xe = (e) => c(e, ["name", "message1", "message2", "message3", "message4"]), Ye = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: O(e.terms.basic),
    commands: _(e.terms.commands),
    messages: K(e.terms.messages),
    params: W(e.terms.params)
  }
}), Qe = (e, t, a, r, o, n) => [...P(a, r), ...X(e, t), ...Y(o, n)], et = (e, t) => M(Q(t), e), tt = (e, t, a) => {
  const r = ee(t);
  return M(a ? [...r, ...a] : r, e);
};
export {
  Qe as buildReferenceItemSources,
  tt as compileItemEffectDisplayData,
  et as compileTraitDisplayData,
  He as extractBattleEventTexts,
  qe as extractCommonEventTexts,
  Ze as extractImageFromActor,
  ze as extractImageFromEnemy,
  se as extractItemChangeData,
  R as extractItemCommands,
  Ee as extractItemFromMap,
  De as extractItemFromTroop,
  Le as extractMapText,
  Fe as extractNoteText,
  c as extractTextData,
  $e as extractTextFromActor,
  Pe as extractTextFromArmor,
  We as extractTextFromClass,
  Je as extractTextFromEnemy,
  F as extractTextFromEventCommands,
  _e as extractTextFromItem,
  Ke as extractTextFromSkill,
  Xe as extractTextFromState,
  Ye as extractTextFromSystem,
  Oe as extractTextFromWeapon,
  ke as replaceActorText,
  Me as replaceArmorText,
  Se as replaceClassText,
  Ue as replaceCommonEventTexts,
  Be as replaceEnemyText,
  I as replaceEventCommandTexts,
  Me as replaceItemText,
  Ge as replaceMapDataTexts,
  i as replaceNoteTextByMap,
  Ae as replaceSkillText,
  Re as replaceStateText,
  ie as replaceSystemTerms,
  je as replaceSystemText,
  s as replaceTextByMap,
  oe as replaceTextForCommand,
  me as replaceTextForCommandActor,
  ce as replaceTextForCommandShowChoices,
  ne as replaceTextForCommandShowMessage,
  Ve as replaceTroopTexts,
  Me as replaceWeaponText
};
