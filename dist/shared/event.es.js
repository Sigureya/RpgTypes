import { W as w, U as T, V as B, B as l, C as u, v as p, S as y, r as A, q as Q, A as v, n as $, b as _, z as D, b8 as N, w as k, aU as C, aQ as E, aV as M, cM as F, cN as J, d0 as K, d6 as O, d5 as W, d2 as Z, bd as G, bc as H, c_ as L, s as P, cw as R, cQ as j, m as X, u as Y } from "./make.es3.js";
import { m as q } from "./mergeItemsSource.es.js";
const ee = (e) => !!e, b = (e, s) => e.pages.map((a, t) => s(a, t, e)), z = (e, s) => e.events.filter(ee).flatMap((a) => b(a, s)), S = (e, s, a) => e.reduce((t, r) => (r.code !== w && r.code !== T && r.code !== B || t.push(ae(r, s, a)), t), []), se = { [B]: "weapon", [w]: "armor", [T]: "item" }, ae = (e, s, a) => {
  const t = e.parameters[3] === 0 ? { direct: !0, value: e.parameters[2] } : {
    direct: !1,
    variableId: e.parameters[2]
  }, r = e.parameters[0] === 0 ? s.gain : e.parameters[0] === 1 ? s.lose : s.unknown;
  return {
    itemKind: se[e.code],
    dataId: e.parameters[1],
    code: e.code,
    commandNameMZ: a(e.code),
    operation: r,
    includesEquip: e.parameters[4],
    ...t
  };
}, fe = (e, s, a) => z(e, (t, r, n) => ({ ...te(t), commands: S(t.list, s, a), eventName: n.name, pageIndex: r })), te = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? {
  pageCondition: { itemId: e.conditions.itemId }
} : {}, we = (e, s, a) => {
  return t = (r, n, o) => ({ commands: S(r.list, s, a), eventName: o.name, troopId: o.id, pageIndex: n }), e.flatMap((r) => b(r, t));
  var t;
}, U = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class V {
  constructor(s, a) {
    this.header = s, this.bodies = a;
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
class x {
  constructor(s, a, t) {
    this.bodyCode = s, this.header = a, this.bodies = t;
  }
  normalizedCommands() {
    const s = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters]
    };
    return this.bodies.length === 0 ? [s] : [s, this.mergedBody()];
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
const g = (e, s, a, t) => {
  const r = e[s];
  if (!a(r)) throw new Error(`Invalid head at index ${s}: ${JSON.stringify(r)}`);
  const n = [];
  for (let o = s + 1; o < e.length; o++) {
    const c = e[o];
    if (!t(c)) break;
    n.push(c);
  }
  return {
    header: r,
    bodies: n
  };
}, re = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, (o) => o.code === u, (o) => o.code === l))(e, s);
  return ne(t) ? new x(l, t, a) : new V(t, a);
}, ne = (e) => e.parameters[0] === "選択肢ヘルプ", de = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, (o) => o.code === y, (o) => o.code === p))(e, s);
  return new x(p, t, a);
}, oe = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, Q, A))(e, s);
  return new V(t, a);
}, me = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, _, $))(e, s);
  return new x(v, t, a);
}, ie = {
  [y]: (e, s, a) => a.showMessage(de(e, s), s, e),
  [N]: (e, s, a) => a.script(oe(e, s), s, e),
  [u]: (e, s, a) => a.comment(re(e, s), s, e),
  [D]: (e, s, a) => a.showScrollingText(me(e, s), s, e)
}, ce = (e) => ((s, a) => ({
  code: s.code,
  paramIndex: a,
  value: s.parameters[a]
}))(e, 1), pe = (e) => e.parameters[0].map((s, a) => ({ code: 102, paramIndex: a, value: s })), I = (e) => e.reduce((s, a, t) => {
  if (a.code === k) return [...s, ...pe(a)];
  const r = (n = a.code, ie[n]);
  var n;
  if (r) {
    const o = r(e, t, ue);
    if (o !== void 0) return [...s, o];
  }
  return a.code === C || a.code === E || a.code === M ? [...s, ce(a)] : s;
}, []), ue = {
  comment: (e) => ({ code: u, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: p, paramIndex: 0, value: (s = e).getBodyText(), speaker: (a = s.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
    var s, a;
  },
  script: (e) => ((s) => ({
    code: N,
    paramIndex: 0,
    value: s.getBodyText()
  }))(e),
  showScrollingText: (e) => ((s) => ({ code: v, paramIndex: 0, value: s.getBodyText() }))(e)
}, Te = (e) => {
  return s = (a, t, { id: r }) => ({
    eventId: r,
    commands: I(a.list)
  }), e.map((a) => s(a, 0, a));
  var s;
}, Be = (e) => ((s, a) => s.map((t) => b(t, a)))(e, (s, a, { id: t }) => ({ eventId: t, pageIndex: a, commands: I(s.list) })), Ne = (e) => ({
  note: e.note,
  noteItems: F(e.note),
  displayedName: e.displayName,
  events: ge(e)
}), ge = (e) => z(e, (s, a, t) => ({ eventId: t.id, pageIndex: a, commands: I(s.list), note: t.note, noteItems: [], name: t.name })), ke = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), h = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), Ce = (e) => [h(e, "faceName", "faces"), h(e, "characterName", "characters"), h(e, "battlerName", "sv_actors")], m = (e, s) => ({
  note: he(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), he = (e) => J(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), Ee = (e) => m(e, ["name", "nickname", "profile"]), Me = (e) => m(e, ["name"]), je = (e) => m(e, ["name"]), qe = (e) => m(e, ["name", "description", "message1", "message2"]), ze = (e) => m(e, ["name", "description"]), Se = (e) => m(e, ["name", "description"]), Ue = (e) => m(e, ["name", "description"]), Ve = (e) => m(e, ["name", "message1", "message2", "message3", "message4"]), Ae = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Z(e.terms.basic),
    commands: W(e.terms.commands),
    messages: O(e.terms.messages),
    params: K(e.terms.params)
  }
}), Qe = (e, s, a, t, r, n) => [...G(a, t), ...H(e, s), ...L(r, n)], $e = (e, s) => q(P(s), e), _e = (e, s, a) => {
  const t = R(s);
  return q(a ? [...t, ...a] : t, e);
}, d = (e, s) => {
  const a = e.trimEnd(), t = s.get(a);
  return t !== void 0 ? t.trimEnd() : a;
}, i = (e, s) => j(e.note, (a) => d(a.value, s)), De = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.nickname, s), n = d(e.profile, s);
  return { ...e, name: t, nickname: r, profile: n, note: a };
}, Fe = (e, s) => {
  const a = i(e, s), t = d(e.name, s);
  return {
    ...e,
    name: t,
    note: a
  };
}, Je = (e, s) => {
  const a = i(e, s), t = d(e.name, s);
  return { ...e, name: t, note: a };
}, Ke = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.description, s), n = d(e.message1, s), o = d(e.message2, s);
  return { ...e, name: t, description: r, message1: n, message2: o, note: a };
}, Oe = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.description, s);
  return { ...e, name: t, description: r, note: a };
}, We = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.message1, s), n = d(e.message2, s), o = d(e.message3, s), c = d(e.message4, s);
  return {
    ...e,
    name: t,
    message1: r,
    message2: n,
    message3: o,
    message4: c,
    note: a
  };
}, f = (e, s) => e.map((a) => {
  switch (a.code) {
    case y:
      return ye(a, s);
    case k:
      return be(a, s);
    case p:
    case u:
    case l:
    case v:
      return le(a, s);
    case E:
    case C:
    case M:
      return ve(a, s);
    default:
      return a;
  }
}), le = (e, s) => {
  const a = d(e.parameters[0], s);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, ye = (e, s) => {
  const a = d(e.parameters[4], s);
  return X({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, ve = (e, s) => {
  const a = d(e.parameters[1], s);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], a] };
}, be = (e, s) => {
  const a = e.parameters[0].map((t) => d(t, s));
  return {
    code: e.code,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ze = (e, s) => {
  const a = d(e.displayName, s), t = j(e.note, (n) => d(n.value, s)), r = {
    events: Y(e, (n) => f(n, s)),
    displayName: a,
    note: t
  };
  return { ...e, ...r };
}, Ge = (e, s) => {
  const a = e.pages.map((t) => ({ list: f(t.list, s), conditions: t.conditions, span: t.span }));
  return { ...e, pages: a };
}, He = (e, s) => ({
  ...e,
  list: f(e.list, s)
});
export {
  Ke as A,
  We as B,
  d as C,
  Ze as D,
  He as E,
  Ge as F,
  we as a,
  Be as b,
  Te as c,
  I as d,
  fe as e,
  Ne as f,
  Ce as g,
  ke as h,
  he as i,
  m as j,
  Ee as k,
  Ue as l,
  je as m,
  Me as n,
  ze as o,
  qe as p,
  Ve as q,
  Se as r,
  Ae as s,
  Qe as t,
  $e as u,
  _e as v,
  De as w,
  Je as x,
  Fe as y,
  Oe as z
};
