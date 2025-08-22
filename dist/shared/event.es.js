import { B as l, C as u, v as p, S as y, r as z, q as S, A as b, n as M, b as U, z as A, b8 as T, w, aU as B, aQ as I, aV as k, cM as Q, cN as _, d0 as $, d6 as D, d5 as J, d2 as O, bd as V, bc as F, c_ as G, s as H, cw as K, cQ as N, m as L, u as P } from "./make.es3.js";
import { m as C } from "./mergeItemsSource.es.js";
const E = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class j {
  constructor(s, a) {
    this.header = s, this.bodies = a;
  }
  getBodyText() {
    return E(this.joinCommandBodies());
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
class x {
  constructor(s, a, t) {
    this.bodyCode = s, this.header = a, this.bodies = t;
  }
  normalizedCommands() {
    const s = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [s] : [s, this.mergedBody()];
  }
  getBodyText() {
    return E(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const h = (e, s, a, t) => {
  const r = e[s];
  if (!a(r)) throw new Error(`Invalid head at index ${s}: ${JSON.stringify(r)}`);
  const n = [];
  for (let d = s + 1; d < e.length; d++) {
    const c = e[d];
    if (!t(c)) break;
    n.push(c);
  }
  return { header: r, bodies: n };
}, R = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => h(r, n, (d) => d.code === u, (d) => d.code === l))(e, s);
  return W(t) ? new x(l, t, a) : new j(t, a);
}, W = (e) => e.parameters[0] === "選択肢ヘルプ", X = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => h(r, n, (d) => d.code === y, (d) => d.code === p))(e, s);
  return new x(p, t, a);
}, Y = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => h(r, n, S, z))(e, s);
  return new j(t, a);
}, Z = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => h(r, n, U, M))(e, s);
  return new x(b, t, a);
}, ee = {
  [y]: (e, s, a) => a.showMessage(X(e, s), s, e),
  [T]: (e, s, a) => a.script(Y(e, s), s, e),
  [u]: (e, s, a) => a.comment(R(e, s), s, e),
  [A]: (e, s, a) => a.showScrollingText(Z(e, s), s, e)
}, se = (e) => ((s, a) => ({
  code: s.code,
  paramIndex: a,
  value: s.parameters[a]
}))(e, 1), ae = (e) => e.parameters[0].map((s, a) => ({ code: 102, paramIndex: a, value: s })), v = (e) => e.reduce((s, a, t) => {
  if (a.code === w) return [...s, ...ae(a)];
  const r = (n = a.code, ee[n]);
  var n;
  if (r) {
    const d = r(e, t, te);
    if (d !== void 0) return [...s, d];
  }
  return a.code === B || a.code === I || a.code === k ? [...s, se(a)] : s;
}, []), te = { comment: (e) => ({ code: u, paramIndex: 0, value: e.getBodyText() }), showMessage: (e) => {
  return { code: p, paramIndex: 0, value: (s = e).getBodyText(), speaker: (a = s.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var s, a;
}, script: (e) => ((s) => ({ code: T, paramIndex: 0, value: s.getBodyText() }))(e), showScrollingText: (e) => ((s) => ({
  code: b,
  paramIndex: 0,
  value: s.getBodyText()
}))(e) }, re = (e) => !!e, q = (e, s) => e.pages.map((a, t) => s(a, t, e)), ne = (e, s) => ((a, t) => a.events.filter(re).map((r) => q(r, t)))(e, s).flat(1), ge = (e) => {
  return s = (a, t, { id: r }) => ({
    eventId: r,
    commands: v(a.list)
  }), e.map((a) => s(a, 0, a));
  var s;
}, le = (e) => ((s, a) => s.map((t) => q(t, a)))(e, (s, a, { id: t }) => ({ eventId: t, pageIndex: a, commands: v(s.list) })), ye = (e) => ({
  note: e.note,
  noteItems: Q(e.note),
  displayedName: e.displayName,
  events: oe(e)
}), oe = (e) => ne(e, (s, a, t) => ({ eventId: t.id, pageIndex: a, commands: v(s.list), note: t.note, noteItems: [], name: t.name })), be = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), g = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), xe = (e) => [g(e, "faceName", "faces"), g(e, "characterName", "characters"), g(e, "battlerName", "sv_actors")], m = (e, s) => ({
  note: de(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), de = (e) => _(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), ve = (e) => m(e, ["name", "nickname", "profile"]), fe = (e) => m(e, ["name"]), Te = (e) => m(e, ["name"]), we = (e) => m(e, ["name", "description", "message1", "message2"]), Be = (e) => m(e, ["name", "description"]), Ie = (e) => m(e, ["name", "description"]), ke = (e) => m(e, ["name", "description"]), Ne = (e) => m(e, ["name", "message1", "message2", "message3", "message4"]), Ce = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: O(e.terms.basic),
    commands: J(e.terms.commands),
    messages: D(e.terms.messages),
    params: $(e.terms.params)
  }
}), Ee = (e, s, a, t, r, n) => [...V(a, t), ...F(e, s), ...G(r, n)], je = (e, s) => C(H(s), e), qe = (e, s, a) => {
  const t = K(s);
  return C(a ? [...t, ...a] : t, e);
}, o = (e, s) => {
  const a = e.trimEnd(), t = s.get(a);
  return t !== void 0 ? t.trimEnd() : a;
}, i = (e, s) => N(e.note, (a) => o(a.value, s)), ze = (e, s) => {
  const a = i(e, s), t = o(e.name, s), r = o(e.nickname, s), n = o(e.profile, s);
  return { ...e, name: t, nickname: r, profile: n, note: a };
}, Se = (e, s) => {
  const a = i(e, s), t = o(e.name, s);
  return {
    ...e,
    name: t,
    note: a
  };
}, Me = (e, s) => {
  const a = i(e, s), t = o(e.name, s);
  return { ...e, name: t, note: a };
}, Ue = (e, s) => {
  const a = i(e, s), t = o(e.name, s), r = o(e.description, s), n = o(e.message1, s), d = o(e.message2, s);
  return { ...e, name: t, description: r, message1: n, message2: d, note: a };
}, Ae = (e, s) => {
  const a = i(e, s), t = o(e.name, s), r = o(e.description, s);
  return { ...e, name: t, description: r, note: a };
}, Qe = (e, s) => {
  const a = i(e, s), t = o(e.name, s), r = o(e.message1, s), n = o(e.message2, s), d = o(e.message3, s), c = o(e.message4, s);
  return {
    ...e,
    name: t,
    message1: r,
    message2: n,
    message3: d,
    message4: c,
    note: a
  };
}, f = (e, s) => e.map((a) => {
  switch (a.code) {
    case y:
      return ie(a, s);
    case w:
      return pe(a, s);
    case p:
    case u:
    case l:
    case b:
      return me(a, s);
    case I:
    case B:
    case k:
      return ce(a, s);
    default:
      return a;
  }
}), me = (e, s) => {
  const a = o(e.parameters[0], s);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, ie = (e, s) => {
  const a = o(e.parameters[4], s);
  return L({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, ce = (e, s) => {
  const a = o(e.parameters[1], s);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], a] };
}, pe = (e, s) => {
  const a = e.parameters[0].map((t) => o(t, s));
  return {
    code: e.code,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, _e = (e, s) => {
  const a = o(e.displayName, s), t = N(e.note, (n) => o(n.value, s)), r = {
    events: P(e, (n) => f(n, s)),
    displayName: a,
    note: t
  };
  return { ...e, ...r };
}, $e = (e, s) => {
  const a = e.pages.map((t) => ({ list: f(t.list, s), conditions: t.conditions, span: t.span }));
  return { ...e, pages: a };
}, De = (e, s) => ({
  ...e,
  list: f(e.list, s)
});
export {
  o as A,
  _e as B,
  De as C,
  $e as D,
  ge as a,
  v as b,
  ye as c,
  xe as d,
  le as e,
  be as f,
  de as g,
  m as h,
  ve as i,
  ke as j,
  Te as k,
  fe as l,
  Be as m,
  we as n,
  Ne as o,
  Ie as p,
  Ce as q,
  Ee as r,
  je as s,
  qe as t,
  ze as u,
  Me as v,
  Se as w,
  Ae as x,
  Ue as y,
  Qe as z
};
