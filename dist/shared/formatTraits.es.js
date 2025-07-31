import { w as l, C as u, p as c, S as x, o as T, n as k, v as b, k as C, a as N, u as j, b3 as y, q as v, aP as E, aL as S, aQ as q, cI as z, cJ as J, b8 as M, b7 as $, cU as L, r as O, cr as P } from "./namedItems.es.js";
import { m as f } from "./mergeItemsSource.es.js";
const B = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class I {
  constructor(a, s) {
    this.header = a, this.bodies = s;
  }
  getBodyText() {
    return B(this.joinCommandBodies());
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
    return B(this.bodies);
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
}, Q = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === u, (n) => n.code === l))(e, a);
  return U(t) ? new h(l, t, s) : new I(t, s);
}, U = (e) => e.parameters[0] === "選択肢ヘルプ", _ = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === x, (n) => n.code === c))(e, a);
  return new h(c, t, s);
}, A = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, k, T))(e, a);
  return new I(t, s);
}, D = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, N, C))(e, a);
  return new h(b, t, s);
}, F = {
  [x]: (e, a, s) => s.showMessage(_(e, a), a, e),
  [y]: (e, a, s) => s.script(A(e, a), a, e),
  [u]: (e, a, s) => s.comment(Q(e, a), a, e),
  [j]: (e, a, s) => s.showScrollingText(D(e, a), a, e)
}, G = (e) => ((a, s) => ({
  code: a.code,
  paramIndex: s,
  value: a.parameters[s]
}))(e, 1), H = (e) => e.parameters[0].map((a, s) => ({ code: v, paramIndex: s, value: a })), p = (e) => e.reduce((a, s, t) => {
  if (s.code === v) return [...a, ...H(s)];
  const r = (d = s.code, F[d]);
  var d;
  if (r) {
    const n = r(e, t, K);
    if (n !== void 0) return [...a, n];
  }
  return s.code === E || s.code === S || s.code === q ? [...a, G(s)] : a;
}, []), K = { comment: (e) => {
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
}, script: (e) => ((a) => ({ code: y, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({
  code: b,
  paramIndex: 0,
  value: a.getBodyText()
}))(e) }, R = (e) => !!e, w = (e, a) => e.pages.map((s, t) => a(s, t, e)), V = (e, a) => ((s, t) => s.events.filter(R).map((r) => w(r, t)))(e, a).flat(1), ee = (e) => {
  return a = (s, t, { id: r }) => ({ eventId: r, commands: p(s.list) }), e.map((s) => a(s, 0, s));
  var a;
}, ae = (e) => ((a, s) => a.map((t) => w(t, s)))(e, (a, s, { id: t }) => ({
  eventId: t,
  pageIndex: s,
  commands: p(a.list)
})), se = (e) => ({ note: e.note, noteItems: z(e.note), displayedName: e.displayName, commands: W(e) }), W = (e) => V(e, (a, s, t) => ({
  eventId: t.id,
  pageIndex: s,
  commands: p(a.list),
  note: t.note,
  noteItems: []
})), te = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), m = (e, a, s) => ({
  folder: s,
  key: a,
  image: e[a],
  id: e.id
}), re = (e) => [m(e, "faceName", "faces"), m(e, "characterName", "characters"), m(e, "battlerName", "sv_actors")], o = (e, a) => ({
  note: X(e),
  main: a.map((s) => ({ key: s, text: e[s], id: e.id }))
}), X = (e) => J(e.note, (a, s) => ({
  key: a,
  text: s,
  id: e.id
})), de = (e) => o(e, ["name", "nickname", "profile"]), ne = (e) => o(e, ["name"]), oe = (e) => o(e, ["name"]), ie = (e) => o(e, ["name", "description", "message1", "message2"]), me = (e) => o(e, ["name", "description"]), ce = (e) => o(e, ["name", "description"]), he = (e) => o(e, ["name", "description"]), pe = (e) => o(e, ["name", "message1", "message2", "message3", "message4"]), ge = (e, a, s, t, r, d) => [...M(s, t), ...$(e, a), ...L(r, d)], le = (e, a) => f(O(a), e), ue = (e, a, s) => {
  const t = P(a);
  return f(s ? [...t, ...s] : t, e);
};
export {
  ee as a,
  se as b,
  re as c,
  te as d,
  ae as e,
  X as f,
  o as g,
  de as h,
  he as i,
  oe as j,
  ne as k,
  me as l,
  ie as m,
  pe as n,
  ce as o,
  ge as p,
  le as q,
  ue as r
};
