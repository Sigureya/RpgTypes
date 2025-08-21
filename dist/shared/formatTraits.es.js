import { cQ as T, aV as w, aU as B, aQ as I, B as b, C as g, v as h, w as k, S as x, m as S, u as M, r as U, q as A, A as N, n as Q, b as _, z as $, b8 as C, cM as J, cN as O, d0 as V, d6 as D, d5 as F, d2 as G, bd as H, bc as K, c_ as L, s as P, cw as R } from "./make.es3.js";
import { m as E } from "./mergeItemsSource.es.js";
const o = (e, s) => {
  const a = e.trimEnd(), t = s.get(a);
  return t !== void 0 ? t.trimEnd() : a;
}, c = (e, s) => T(e.note, (a) => o(a.value, s)), le = (e, s) => {
  const a = c(e, s), t = o(e.name, s), r = o(e.nickname, s), n = o(e.profile, s);
  return { ...e, name: t, nickname: r, profile: n, note: a };
}, ye = (e, s) => {
  const a = c(e, s), t = o(e.name, s);
  return { ...e, name: t, note: a };
}, be = (e, s) => {
  const a = c(e, s), t = o(e.name, s);
  return { ...e, name: t, note: a };
}, xe = (e, s) => {
  const a = c(e, s), t = o(e.name, s), r = o(e.description, s), n = o(e.message1, s), d = o(e.message2, s);
  return {
    ...e,
    name: t,
    description: r,
    message1: n,
    message2: d,
    note: a
  };
}, ve = (e, s) => {
  const a = c(e, s), t = o(e.name, s), r = o(e.description, s);
  return { ...e, name: t, description: r, note: a };
}, W = (e, s) => {
  const a = o(e.parameters[0], s);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, X = (e, s) => {
  const a = o(e.parameters[4], s);
  return S({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, Y = (e, s) => {
  const a = o(e.parameters[1], s);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], a]
  };
}, Z = (e, s) => {
  const a = e.parameters[0].map((t) => o(t, s));
  return {
    code: e.code,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, fe = (e, s) => {
  const a = o(e.displayName, s), t = T(e.note, (d) => o(d.value, s)), r = M(e, (d) => ((p, u) => p.map((i) => {
    switch (i.code) {
      case x:
        return X(i, u);
      case k:
        return Z(i, u);
      case h:
      case g:
      case b:
        return W(i, u);
      case I:
      case B:
      case w:
        return Y(i, u);
      default:
        return i;
    }
  }))(d, s));
  return { ...e, ...{
    events: r,
    displayName: a,
    note: t
  } };
}, j = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class q {
  constructor(s, a) {
    this.header = s, this.bodies = a;
  }
  getBodyText() {
    return j(this.joinCommandBodies());
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
class v {
  constructor(s, a, t) {
    this.bodyCode = s, this.header = a, this.bodies = t;
  }
  normalizedCommands() {
    const s = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [s] : [s, this.mergedBody()];
  }
  getBodyText() {
    return j(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const l = (e, s, a, t) => {
  const r = e[s];
  if (!a(r)) throw new Error(`Invalid head at index ${s}: ${JSON.stringify(r)}`);
  const n = [];
  for (let d = s + 1; d < e.length; d++) {
    const p = e[d];
    if (!t(p)) break;
    n.push(p);
  }
  return { header: r, bodies: n };
}, ee = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => l(r, n, (d) => d.code === g, (d) => d.code === b))(e, s);
  return se(t) ? new v(b, t, a) : new q(t, a);
}, se = (e) => e.parameters[0] === "選択肢ヘルプ", ae = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => l(r, n, (d) => d.code === x, (d) => d.code === h))(e, s);
  return new v(h, t, a);
}, te = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => l(r, n, A, U))(e, s);
  return new q(t, a);
}, re = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => l(r, n, _, Q))(e, s);
  return new v(N, t, a);
}, ne = {
  [x]: (e, s, a) => a.showMessage(ae(e, s), s, e),
  [C]: (e, s, a) => a.script(te(e, s), s, e),
  [g]: (e, s, a) => a.comment(ee(e, s), s, e),
  [$]: (e, s, a) => a.showScrollingText(re(e, s), s, e)
}, de = (e) => ((s, a) => ({
  code: s.code,
  paramIndex: a,
  value: s.parameters[a]
}))(e, 1), oe = (e) => e.parameters[0].map((s, a) => ({ code: 102, paramIndex: a, value: s })), f = (e) => e.reduce((s, a, t) => {
  if (a.code === k) return [...s, ...oe(a)];
  const r = (n = a.code, ne[n]);
  var n;
  if (r) {
    const d = r(e, t, me);
    if (d !== void 0) return [...s, d];
  }
  return a.code === B || a.code === I || a.code === w ? [...s, de(a)] : s;
}, []), me = { comment: (e) => ({ code: g, paramIndex: 0, value: e.getBodyText() }), showMessage: (e) => {
  return { code: h, paramIndex: 0, value: (s = e).getBodyText(), speaker: (a = s.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
  var s, a;
}, script: (e) => ((s) => ({ code: C, paramIndex: 0, value: s.getBodyText() }))(e), showScrollingText: (e) => ((s) => ({
  code: N,
  paramIndex: 0,
  value: s.getBodyText()
}))(e) }, ie = (e) => !!e, z = (e, s) => e.pages.map((a, t) => s(a, t, e)), ce = (e, s) => ((a, t) => a.events.filter(ie).map((r) => z(r, t)))(e, s).flat(1), Te = (e) => {
  return s = (a, t, { id: r }) => ({ eventId: r, commands: f(a.list) }), e.map((a) => s(a, 0, a));
  var s;
}, we = (e) => ((s, a) => s.map((t) => z(t, a)))(e, (s, a, { id: t }) => ({
  eventId: t,
  pageIndex: a,
  commands: f(s.list)
})), Be = (e) => ({ note: e.note, noteItems: J(e.note), displayedName: e.displayName, events: pe(e) }), pe = (e) => ce(e, (s, a, t) => ({
  eventId: t.id,
  pageIndex: a,
  commands: f(s.list),
  note: t.note,
  noteItems: [],
  name: t.name
})), Ie = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), y = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), ke = (e) => [y(e, "faceName", "faces"), y(e, "characterName", "characters"), y(e, "battlerName", "sv_actors")], m = (e, s) => ({
  note: ue(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), ue = (e) => O(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), Ne = (e) => m(e, ["name", "nickname", "profile"]), Ce = (e) => m(e, ["name"]), Ee = (e) => m(e, ["name"]), je = (e) => m(e, ["name", "description", "message1", "message2"]), qe = (e) => m(e, ["name", "description"]), ze = (e) => m(e, ["name", "description"]), Se = (e) => m(e, ["name", "description"]), Me = (e) => m(e, ["name", "message1", "message2", "message3", "message4"]), Ue = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: G(e.terms.basic),
    commands: F(e.terms.commands),
    messages: D(e.terms.messages),
    params: V(e.terms.params)
  }
}), Ae = (e, s, a, t, r, n) => [...H(a, t), ...K(e, s), ...L(r, n)], Qe = (e, s) => E(P(s), e), _e = (e, s, a) => {
  const t = R(s);
  return E(a ? [...t, ...a] : t, e);
};
export {
  _e as A,
  be as a,
  ye as b,
  ve as c,
  xe as d,
  fe as e,
  o as f,
  we as g,
  Te as h,
  f as i,
  Be as j,
  ke as k,
  Ie as l,
  ue as m,
  m as n,
  Ne as o,
  Se as p,
  Ee as q,
  le as r,
  Ce as s,
  qe as t,
  je as u,
  Me as v,
  ze as w,
  Ue as x,
  Ae as y,
  Qe as z
};
