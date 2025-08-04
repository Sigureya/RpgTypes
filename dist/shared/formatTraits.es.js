import { w as u, C as l, p as c, S as y, o as w, n as k, v as b, k as C, a as N, u as j, b3 as x, q as v, aP as q, aL as E, aQ as S, cI as U, cJ as $, cW as z, d0 as J, c$ as M, cY as L, b8 as O, b7 as P, cU as Q, r as W, cr as Y } from "./make.es3.js";
import { m as T } from "./mergeItemsSource.es.js";
const f = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class B {
  constructor(a, s) {
    this.header = a, this.bodies = s;
  }
  getBodyText() {
    return f(this.joinCommandBodies());
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
class p {
  constructor(a, s, t) {
    this.bodyCode = a, this.header = s, this.bodies = t;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return f(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const i = (e, a, s, t) => {
  const r = e[a];
  if (!s(r)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(r)}`);
  const d = [];
  for (let n = a + 1; n < e.length; n++) {
    const g = e[n];
    if (!t(g)) break;
    d.push(g);
  }
  return { header: r, bodies: d };
}, _ = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === l, (n) => n.code === u))(e, a);
  return A(t) ? new p(u, t, s) : new B(t, s);
}, A = (e) => e.parameters[0] === "選択肢ヘルプ", D = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === y, (n) => n.code === c))(e, a);
  return new p(c, t, s);
}, F = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, k, w))(e, a);
  return new B(t, s);
}, G = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, N, C))(e, a);
  return new p(b, t, s);
}, H = {
  [y]: (e, a, s) => s.showMessage(D(e, a), a, e),
  [x]: (e, a, s) => s.script(F(e, a), a, e),
  [l]: (e, a, s) => s.comment(_(e, a), a, e),
  [j]: (e, a, s) => s.showScrollingText(G(e, a), a, e)
}, K = (e) => ((a, s) => ({
  code: a.code,
  paramIndex: s,
  value: a.parameters[s]
}))(e, 1), R = (e) => e.parameters[0].map((a, s) => ({ code: v, paramIndex: s, value: a })), h = (e) => e.reduce((a, s, t) => {
  if (s.code === v) return [...a, ...R(s)];
  const r = (d = s.code, H[d]);
  var d;
  if (r) {
    const n = r(e, t, V);
    if (n !== void 0) return [...a, n];
  }
  return s.code === q || s.code === E || s.code === S ? [...a, K(s)] : a;
}, []), V = { comment: (e) => {
  return { code: (a = e).header.code, paramIndex: 0, value: a.getBodyText() };
  var a;
}, showMessage: (e) => {
  return {
    code: c,
    paramIndex: 0,
    value: (a = e).getBodyText(),
    speaker: (s = a.header, s.parameters[4] ? s.parameters[4].trimEnd() : "")
  };
  var a, s;
}, script: (e) => ((a) => ({ code: x, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({
  code: b,
  paramIndex: 0,
  value: a.getBodyText()
}))(e) }, X = (e) => !!e, I = (e, a) => e.pages.map((s, t) => a(s, t, e)), Z = (e, a) => ((s, t) => s.events.filter(X).map((r) => I(r, t)))(e, a).flat(1), re = (e) => {
  return a = (s, t, { id: r }) => ({ eventId: r, commands: h(s.list) }), e.map((s) => a(s, 0, s));
  var a;
}, de = (e) => ((a, s) => a.map((t) => I(t, s)))(e, (a, s, { id: t }) => ({
  eventId: t,
  pageIndex: s,
  commands: h(a.list)
})), ne = (e) => ({ note: e.note, noteItems: U(e.note), displayedName: e.displayName, commands: ee(e) }), ee = (e) => Z(e, (a, s, t) => ({
  eventId: t.id,
  pageIndex: s,
  commands: h(a.list),
  note: t.note,
  noteItems: []
})), oe = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), m = (e, a, s) => ({
  folder: s,
  key: a,
  image: e[a],
  id: e.id
}), ie = (e) => [m(e, "faceName", "faces"), m(e, "characterName", "characters"), m(e, "battlerName", "sv_actors")], o = (e, a) => ({
  note: ae(e),
  main: a.map((s) => ({ key: s, text: e[s], id: e.id }))
}), ae = (e) => $(e.note, (a, s) => ({
  key: a,
  text: s,
  id: e.id
})), me = (e) => o(e, ["name", "nickname", "profile"]), ce = (e) => o(e, ["name"]), pe = (e) => o(e, ["name"]), he = (e) => o(e, ["name", "description", "message1", "message2"]), ge = (e) => o(e, ["name", "description"]), ue = (e) => o(e, ["name", "description"]), le = (e) => o(e, ["name", "description"]), ye = (e) => o(e, ["name", "message1", "message2", "message3", "message4"]), be = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: L(e.terms.basic),
    commands: M(e.terms.commands),
    messages: J(e.terms.messages),
    params: z(e.terms.params)
  }
}), xe = (e, a, s, t, r, d) => [...O(s, t), ...P(e, a), ...Q(r, d)], ve = (e, a) => T(W(a), e), Te = (e, a, s) => {
  const t = Y(a);
  return T(s ? [...t, ...s] : t, e);
};
export {
  re as a,
  h as b,
  ne as c,
  ie as d,
  de as e,
  oe as f,
  ae as g,
  o as h,
  me as i,
  le as j,
  pe as k,
  ce as l,
  ge as m,
  he as n,
  ye as o,
  ue as p,
  be as q,
  xe as r,
  ve as s,
  Te as t
};
