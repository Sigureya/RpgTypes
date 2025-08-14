import { w as l, C as p, p as c, S as y, o as I, n as w, v as b, k, a as C, u as N, b3 as x, q as j, aP as q, aL as E, aQ as S, cI as U, cJ as $, cW as z, d0 as J, c$ as M, cY as L, b8 as O, b7 as P, cU as Q, r as W, cr as Y } from "./make.es3.js";
import { m as v } from "./mergeItemsSource.es.js";
const T = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class f {
  constructor(a, s) {
    this.header = a, this.bodies = s;
  }
  getBodyText() {
    return T(this.joinCommandBodies());
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
class h {
  constructor(a, s, t) {
    this.bodyCode = a, this.header = s, this.bodies = t;
  }
  normalizedCommands() {
    const a = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [a] : [a, this.mergedBody()];
  }
  getBodyText() {
    return T(this.bodies);
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
    const u = e[n];
    if (!t(u)) break;
    d.push(u);
  }
  return { header: r, bodies: d };
}, _ = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === p, (n) => n.code === l))(e, a);
  return A(t) ? new h(l, t, s) : new f(t, s);
}, A = (e) => e.parameters[0] === "選択肢ヘルプ", D = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === y, (n) => n.code === c))(e, a);
  return new h(c, t, s);
}, F = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, w, I))(e, a);
  return new f(t, s);
}, G = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, C, k))(e, a);
  return new h(b, t, s);
}, H = {
  [y]: (e, a, s) => s.showMessage(D(e, a), a, e),
  [x]: (e, a, s) => s.script(F(e, a), a, e),
  [p]: (e, a, s) => s.comment(_(e, a), a, e),
  [N]: (e, a, s) => s.showScrollingText(G(e, a), a, e)
}, K = (e) => ((a, s) => ({
  code: a.code,
  paramIndex: s,
  value: a.parameters[s]
}))(e, 1), R = (e) => e.parameters[0].map((a, s) => ({ code: 102, paramIndex: s, value: a })), g = (e) => e.reduce((a, s, t) => {
  if (s.code === j) return [...a, ...R(s)];
  const r = (d = s.code, H[d]);
  var d;
  if (r) {
    const n = r(e, t, V);
    if (n !== void 0) return [...a, n];
  }
  return s.code === q || s.code === E || s.code === S ? [...a, K(s)] : a;
}, []), V = { comment: (e) => ({ code: p, paramIndex: 0, value: e.getBodyText() }), showMessage: (e) => {
  return { code: c, paramIndex: 0, value: (a = e).getBodyText(), speaker: (s = a.header, s.parameters[4] ? s.parameters[4].trimEnd() : "") };
  var a, s;
}, script: (e) => ((a) => ({ code: x, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({
  code: b,
  paramIndex: 0,
  value: a.getBodyText()
}))(e) }, X = (e) => !!e, B = (e, a) => e.pages.map((s, t) => a(s, t, e)), Z = (e, a) => ((s, t) => s.events.filter(X).map((r) => B(r, t)))(e, a).flat(1), re = (e) => {
  return a = (s, t, { id: r }) => ({
    eventId: r,
    commands: g(s.list)
  }), e.map((s) => a(s, 0, s));
  var a;
}, de = (e) => ((a, s) => a.map((t) => B(t, s)))(e, (a, s, { id: t }) => ({ eventId: t, pageIndex: s, commands: g(a.list) })), ne = (e) => ({
  note: e.note,
  noteItems: U(e.note),
  displayedName: e.displayName,
  events: ee(e)
}), ee = (e) => Z(e, (a, s, t) => ({ eventId: t.id, pageIndex: s, commands: g(a.list), note: t.note, noteItems: [], name: t.name })), oe = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), m = (e, a, s) => ({
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
}), xe = (e, a, s, t, r, d) => [...O(s, t), ...P(e, a), ...Q(r, d)], ve = (e, a) => v(W(a), e), Te = (e, a, s) => {
  const t = Y(a);
  return v(s ? [...t, ...s] : t, e);
};
export {
  re as a,
  g as b,
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
