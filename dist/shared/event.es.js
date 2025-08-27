import { d5 as U, d6 as K, d7 as _, U as f, R as T, T as w, z as l, C as u, s as p, S as y, q as $, p as A, y as b, l as D, b as F, x as G, b6 as B, u as k, aS as N, aO as C, aT as E, cK as J, cL as L, c_ as R, d4 as V, d3 as Y, d0 as Z, bb as H, ba as P, cY as Q, r as W, cu as X, cO as ee, m as se } from "./make.es3.js";
import { m as j } from "./mergeItemsSource.es.js";
const q = (e, s, a) => e.reduce((t, r) => (r.code !== f && r.code !== T && r.code !== w || t.push(te(r, s, a)), t), []), ae = {
  [w]: "weapon",
  [f]: "armor",
  [T]: "item"
}, te = (e, s, a) => {
  const t = e.parameters[3] === U ? { direct: !0, value: e.parameters[2] } : { direct: !1, variableId: e.parameters[2] }, r = e.parameters[0] === K ? s.gain : e.parameters[0] === _ ? s.lose : s.unknown;
  return { itemKind: ae[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: a(e.code), operation: r, includesEquip: e.parameters[4], ...t };
}, re = (e) => !!e, x = (e, s) => e.pages.map((a, t) => s(a, t, e)), M = (e, s) => e.events.filter(re).flatMap((a) => x(a, s)), we = (e, s, a) => M(e.map, (t, r, n) => ({
  ...ne(t),
  commands: q(t.list, s, a),
  eventName: n.name,
  pageIndex: r
})), ne = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, Be = (e, s, a) => {
  return t = (r, n, o) => ({
    commands: q(r.list, s, a),
    eventName: o.name,
    troopId: o.id,
    pageIndex: n
  }), e.flatMap((r) => x(r, t));
  var t;
}, S = (e) => e.map((s) => s.parameters[0].trimEnd()).join(`
`).trimEnd();
class z {
  constructor(s, a) {
    this.header = s, this.bodies = a;
  }
  getBodyText() {
    return S(this.joinCommandBodies());
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
    return S(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()]
    };
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
  return { header: r, bodies: n };
}, oe = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, (o) => o.code === u, (o) => o.code === l))(e, s);
  return de(t) ? new v(l, t, a) : new z(t, a);
}, de = (e) => e.parameters[0] === "選択肢ヘルプ", me = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, (o) => o.code === y, (o) => o.code === p))(e, s);
  return new v(p, t, a);
}, ie = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, A, $))(e, s);
  return new z(t, a);
}, ce = (e, s) => {
  const { bodies: a, header: t } = ((r, n) => g(r, n, F, D))(e, s);
  return new v(b, t, a);
}, pe = {
  [y]: (e, s, a) => a.showMessage(me(e, s), s, e),
  [B]: (e, s, a) => a.script(ie(e, s), s, e),
  [u]: (e, s, a) => a.comment(oe(e, s), s, e),
  [G]: (e, s, a) => a.showScrollingText(ce(e, s), s, e)
}, ue = (e) => ((s, a) => ({
  code: s.code,
  paramIndex: a,
  value: s.parameters[a]
}))(e, 1), ge = (e) => e.parameters[0].map((s, a) => ({ code: 102, paramIndex: a, value: s })), I = (e) => e.reduce((s, a, t) => {
  if (a.code === k) return [...s, ...ge(a)];
  const r = (n = a.code, pe[n]);
  var n;
  if (r) {
    const o = r(e, t, he);
    if (o !== void 0) return [...s, o];
  }
  return a.code === N || a.code === C || a.code === E ? [...s, ue(a)] : s;
}, []), he = {
  comment: (e) => ({ code: u, paramIndex: 0, value: e.getBodyText() }),
  showMessage: (e) => {
    return { code: p, paramIndex: 0, value: (s = e).getBodyText(), speaker: (a = s.header, a.parameters[4] ? a.parameters[4].trimEnd() : "") };
    var s, a;
  },
  script: (e) => ((s) => ({
    code: B,
    paramIndex: 0,
    value: s.getBodyText()
  }))(e),
  showScrollingText: (e) => ((s) => ({ code: b, paramIndex: 0, value: s.getBodyText() }))(e)
}, ke = (e) => {
  return s = (a, t, { id: r }) => ({
    eventId: r,
    commands: I(a.list)
  }), e.map((a) => s(a, 0, a));
  var s;
}, Ne = (e) => ((s, a) => s.map((t) => x(t, a)))(e, (s, a, { id: t }) => ({ eventId: t, pageIndex: a, commands: I(s.list) })), Ce = (e) => ({
  note: e.note,
  noteItems: J(e.note),
  displayedName: e.displayName,
  events: le(e)
}), le = (e) => M(e, (s, a, t) => ({ eventId: t.id, pageIndex: a, commands: I(s.list), note: t.note, noteItems: [], name: t.name })), Ee = (e) => ({
  key: "battlerName",
  image: e.battlerName,
  id: e.id
}), h = (e, s, a) => ({
  folder: a,
  key: s,
  image: e[s],
  id: e.id
}), je = (e) => [h(e, "faceName", "faces"), h(e, "characterName", "characters"), h(e, "battlerName", "sv_actors")], m = (e, s) => ({
  note: ye(e),
  main: s.map((a) => ({ key: a, text: e[a], id: e.id }))
}), ye = (e) => L(e.note, (s, a) => ({
  key: s,
  text: a,
  id: e.id
})), qe = (e) => m(e, ["name", "nickname", "profile"]), Me = (e) => m(e, ["name"]), Se = (e) => m(e, ["name"]), ze = (e) => m(e, ["name", "description", "message1", "message2"]), Oe = (e) => m(e, ["name", "description"]), Ue = (e) => m(e, ["name", "description"]), Ke = (e) => m(e, ["name", "description"]), _e = (e) => m(e, ["name", "message1", "message2", "message3", "message4"]), $e = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Z(e.terms.basic),
    commands: Y(e.terms.commands),
    messages: V(e.terms.messages),
    params: R(e.terms.params)
  }
}), Ae = (e, s, a, t, r, n) => [...H(a, t), ...P(e, s), ...Q(r, n)], De = (e, s) => j(W(s), e), Fe = (e, s, a) => {
  const t = X(s);
  return j(a ? [...t, ...a] : t, e);
}, d = (e, s) => {
  const a = e.trimEnd(), t = s.get(a);
  return t !== void 0 ? t.trimEnd() : a;
}, i = (e, s, a = `
`) => ee(e.note, (t) => d(t.value, s), a), Ge = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.nickname, s), n = d(e.profile, s);
  return { ...e, name: t, nickname: r, profile: n, note: a };
}, Je = (e, s) => {
  const a = i(e, s), t = d(e.name, s);
  return {
    ...e,
    name: t,
    note: a
  };
}, Le = (e, s) => {
  const a = i(e, s), t = d(e.name, s);
  return { ...e, name: t, note: a };
}, Re = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.description, s), n = d(e.message1, s), o = d(e.message2, s);
  return { ...e, name: t, description: r, message1: n, message2: o, note: a };
}, Ve = (e, s) => {
  const a = i(e, s), t = d(e.name, s), r = d(e.description, s);
  return { ...e, name: t, description: r, note: a };
}, Ye = (e, s) => {
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
}, O = (e, s) => e.map((a) => {
  switch (a.code) {
    case y:
      return xe(a, s);
    case k:
      return Ie(a, s);
    case p:
    case u:
    case l:
    case b:
      return be(a, s);
    case C:
    case N:
    case E:
      return ve(a, s);
    default:
      return a;
  }
}), be = (e, s) => {
  const a = d(e.parameters[0], s);
  return { code: e.code, indent: e.indent, parameters: [a] };
}, xe = (e, s) => {
  const a = d(e.parameters[4], s);
  return se({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: a
  }, e.indent);
}, ve = (e, s) => {
  const a = d(e.parameters[1], s);
  return { code: e.code, indent: e.indent, parameters: [e.parameters[0], a] };
}, Ie = (e, s) => {
  const a = e.parameters[0].map((t) => d(t, s));
  return {
    code: e.code,
    indent: e.indent,
    parameters: [a, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ze = (e, s) => {
  const a = e.pages.map((t) => ({ list: O(t.list, s), conditions: t.conditions, span: t.span }));
  return { ...e, pages: a };
}, He = (e, s) => ({ ...e, list: O(e.list, s) });
export {
  Je as A,
  Ve as B,
  Re as C,
  Ye as D,
  d as E,
  He as F,
  Ze as G,
  q as a,
  we as b,
  Be as c,
  Ne as d,
  te as e,
  ke as f,
  I as g,
  Ce as h,
  je as i,
  Ee as j,
  ye as k,
  m as l,
  qe as m,
  Ke as n,
  Se as o,
  Me as p,
  Oe as q,
  ze as r,
  _e as s,
  Ue as t,
  $e as u,
  Ae as v,
  De as w,
  Fe as x,
  Ge as y,
  Le as z
};
