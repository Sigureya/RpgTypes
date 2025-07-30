import { w as l, C as u, p as c, S as b, o as k, n as C, v as x, k as N, a as j, u as E, b3 as y, q as v, aP as S, aL as q, aQ as z, cI as J, cJ as M, b8 as $, b7 as L, cU as O, r as P, cr as Q } from "./namedItems.es.js";
import { a as U, m as f } from "./pick.es.js";
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
}, _ = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === u, (n) => n.code === l))(e, a);
  return A(t) ? new h(l, t, s) : new I(t, s);
}, A = (e) => e.parameters[0] === "選択肢ヘルプ", D = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, (n) => n.code === b, (n) => n.code === c))(e, a);
  return new h(c, t, s);
}, F = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, C, k))(e, a);
  return new I(t, s);
}, G = (e, a) => {
  const { bodies: s, header: t } = ((r, d) => i(r, d, j, N))(e, a);
  return new h(x, t, s);
}, H = {
  [b]: (e, a, s) => s.showMessage(D(e, a), a, e),
  [y]: (e, a, s) => s.script(F(e, a), a, e),
  [u]: (e, a, s) => s.comment(_(e, a), a, e),
  [E]: (e, a, s) => s.showScrollingText(G(e, a), a, e)
}, K = (e) => ((a, s) => ({
  code: a.code,
  paramIndex: s,
  value: a.parameters[s]
}))(e, 1), R = (e) => e.parameters[0].map((a, s) => ({ code: v, paramIndex: s, value: a })), p = (e) => e.reduce((a, s, t) => {
  if (s.code === v) return [...a, ...R(s)];
  const r = (d = s.code, H[d]);
  var d;
  if (r) {
    const n = r(e, t, V);
    if (n !== void 0) return [...a, n];
  }
  return s.code === S || s.code === q || s.code === z ? [...a, K(s)] : a;
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
}, script: (e) => ((a) => ({ code: y, paramIndex: 0, value: a.getBodyText() }))(e), showScrollingText: (e) => ((a) => ({
  code: x,
  paramIndex: 0,
  value: a.getBodyText()
}))(e) }, W = (e) => !!e, w = (e, a) => e.pages.map((s, t) => a(s, t, e)), X = (e, a) => ((s, t) => s.events.filter(W).map((r) => w(r, t)))(e, a).flat(1), se = (e) => {
  return a = (s, t, { id: r }) => ({ eventId: r, commands: p(s.list) }), e.map((s) => a(s, 0, s));
  var a;
}, te = (e) => ((a, s) => a.map((t) => w(t, s)))(e, (a, s, { id: t }) => ({
  eventId: t,
  pageIndex: s,
  commands: p(a.list)
})), re = (e) => ({ note: e.note, noteItems: J(e.note), displayedName: e.displayName, commands: Y(e) }), Y = (e) => X(e, (a, s, t) => ({
  eventId: t.id,
  pageIndex: s,
  commands: p(a.list),
  note: t.note,
  noteItems: []
})), de = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), m = (e, a, s) => ({
  folder: s,
  key: a,
  image: e[a],
  id: e.id
}), ne = (e) => [m(e, "faceName", "faces"), m(e, "characterName", "characters"), m(e, "battlerName", "sv_actors")], T = (e, a, s) => ({ key: e, text: a, id: s.id }), o = (e, a) => ({
  main: U(e, a, (s, t) => T(s, t, e)),
  note: Z(e)
}), Z = (e) => M(e.note, (a, s) => T(a, s, e)), oe = (e) => o(e, ["name", "nickname", "profile"]), ie = (e) => o(e, ["name"]), me = (e) => o(e, ["name"]), ce = (e) => o(e, ["name", "description", "message1", "message2"]), he = (e) => o(e, ["name", "description"]), pe = (e) => o(e, ["name", "description"]), ge = (e) => o(e, ["name", "description"]), le = (e) => o(e, ["name", "message1", "message2", "message3", "message4"]), ue = (e, a, s, t, r, d) => [...$(s, t), ...L(e, a), ...O(r, d)], be = (e, a) => f(P(a), e), xe = (e, a, s) => {
  const t = Q(a);
  return f(s ? [...t, ...s] : t, e);
};
export {
  se as a,
  re as b,
  ne as c,
  de as d,
  te as e,
  Z as f,
  o as g,
  oe as h,
  ge as i,
  me as j,
  ie as k,
  he as l,
  ce as m,
  le as n,
  pe as o,
  ue as p,
  be as q,
  xe as r
};
