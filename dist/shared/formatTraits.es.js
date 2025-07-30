import { w as u, C as l, p as m, S as g, o as w, n as T, v as b, k as C, a as N, u as k, b3 as x, q as y, aP as j, aL as E, aQ as S, cI as z, b8 as M, b7 as $, cU as q, r as J, cr as L } from "./namedItems.es.js";
import { m as v } from "./mergeItemsSource.es.js";
const f = (e) => e.map((a) => a.parameters[0].trimEnd()).join(`
`).trimEnd();
class B {
  constructor(a, r) {
    this.header = a, this.bodies = r;
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
class c {
  constructor(a, r, t) {
    this.bodyCode = a, this.header = r, this.bodies = t;
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
const n = (e, a, r, t) => {
  const s = e[a];
  if (!r(s)) throw new Error(`Invalid head at index ${a}: ${JSON.stringify(s)}`);
  const d = [];
  for (let o = a + 1; o < e.length; o++) {
    const p = e[o];
    if (!t(p)) break;
    d.push(p);
  }
  return { header: s, bodies: d };
}, O = (e, a) => {
  const { bodies: r, header: t } = ((s, d) => n(s, d, (o) => o.code === l, (o) => o.code === u))(e, a);
  return P(t) ? new c(u, t, r) : new B(t, r);
}, P = (e) => e.parameters[0] === "選択肢ヘルプ", Q = (e, a) => {
  const { bodies: r, header: t } = ((s, d) => n(s, d, (o) => o.code === g, (o) => o.code === m))(e, a);
  return new c(m, t, r);
}, U = (e, a) => {
  const { bodies: r, header: t } = ((s, d) => n(s, d, T, w))(e, a);
  return new B(t, r);
}, _ = (e, a) => {
  const { bodies: r, header: t } = ((s, d) => n(s, d, N, C))(e, a);
  return new c(b, t, r);
}, A = {
  [g]: (e, a, r) => r.showMessage(Q(e, a), a, e),
  [x]: (e, a, r) => r.script(U(e, a), a, e),
  [l]: (e, a, r) => r.comment(O(e, a), a, e),
  [k]: (e, a, r) => r.showScrollingText(_(e, a), a, e)
}, D = (e) => ((a, r) => ({
  code: a.code,
  paramIndex: r,
  value: a.parameters[r]
}))(e, 1), F = (e) => e.parameters[0].map((a, r) => ({ code: y, paramIndex: r, value: a })), h = (e) => e.reduce((a, r, t) => {
  if (r.code === y) return [...a, ...F(r)];
  const s = (d = r.code, A[d]);
  var d;
  if (s) {
    const o = s(e, t, G);
    if (o !== void 0) return [...a, o];
  }
  return r.code === j || r.code === E || r.code === S ? [...a, D(r)] : a;
}, []), G = { comment: (e) => {
  return { code: (a = e).header.code, paramIndex: 0, value: a.getBodyText() };
  var a;
}, showMessage: (e) => {
  return {
    code: m,
    paramIndex: 0,
    value: (a = e).getBodyText(),
    speaker: (r = a.header, r.parameters[4] ? r.parameters[4].trimEnd() : "")
  };
  var a, r;
}, script: (e) => ((a) => ({ code: x, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({
  code: b,
  paramIndex: 0,
  value: a.getBodyText()
}))(e) }, H = (e) => !!e, I = (e, a) => e.pages.map((r, t) => a(r, t, e)), K = (e, a) => ((r, t) => r.events.filter(H).map((s) => I(s, t)))(e, a).flat(1), X = (e) => {
  return a = (r, t, { id: s }) => ({ eventId: s, commands: h(r.list) }), e.map((r) => a(r, 0, r));
  var a;
}, Y = (e) => ((a, r) => a.map((t) => I(t, r)))(e, (a, r, { id: t }) => ({
  eventId: t,
  pageIndex: r,
  commands: h(a.list)
})), Z = (e) => ({ note: e.note, noteItems: z(e.note), displayedName: e.displayName, commands: R(e) }), R = (e) => K(e, (a, r, t) => ({
  eventId: t.id,
  pageIndex: r,
  commands: h(a.list),
  note: t.note,
  noteItems: []
})), ee = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), i = (e, a, r) => ({
  folder: r,
  key: a,
  image: e[a],
  id: e.id
}), ae = (e) => [i(e, "faceName", "faces"), i(e, "characterName", "characters"), i(e, "battlerName", "sv_actors")], re = (e, a, r, t, s, d) => [...M(r, t), ...$(e, a), ...q(s, d)], te = (e, a) => v(J(a), e), se = (e, a, r) => {
  const t = L(a);
  return v(r ? [...t, ...r] : t, e);
};
export {
  X as a,
  Z as b,
  ae as c,
  ee as d,
  Y as e,
  re as f,
  te as g,
  se as h
};
