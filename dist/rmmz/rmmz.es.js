import { be as y, bg as C, bh as A, bf as R, aT as X, aY as K, aV as z, as as j, aZ as Q, aS as Z, aW as $, aU as J } from "../shared/commands.es.js";
import { C as kn, a as bn, b as Mn, c as Nn, E as vn, d as Ln, e as Pn, f as On, g as hn, h as Dn, i as fn, j as Fn, k as xn, l as Un, m as Bn, n as wn, o as Vn, p as Gn, q as Hn, r as Wn, s as Yn, t as qn, u as Xn, v as Kn, w as zn, x as jn, y as Qn, F as Zn, z as $n, A as Jn, B as ai, P as ei, D as ti, G as si, H as ri, I as mi, J as oi, R as ni, K as ii, L as di, M as pi, N as li, O as ci, Q as Ii, S as Ti, T as Ai, U as Ei, V as _i, W as yi, X as Ci, Y as Ri, Z as gi, _ as Si, $ as ui, a0 as ki, a1 as bi, a2 as Mi, a3 as Ni, a4 as vi, a5 as Li, a6 as Pi, a7 as Oi, a8 as hi, a9 as Di, aa as fi, ab as Fi, ac as xi, ad as Ui, ae as Bi, af as wi, ag as Vi, ah as Gi, ai as Hi, aj as Wi, ak as Yi, al as qi, am as Xi, an as Ki, ao as zi, ap as ji, aq as Qi, ar as Zi, at as $i, au as Ji, av as ad, aw as ed, ax as td, ay as sd, az as rd, aA as md, aB as od, aC as nd, aD as id, aE as dd, aF as pd, aG as ld, aH as cd, aI as Id, aJ as Td, aK as Ad, aL as Ed, aM as _d, aN as yd, aO as Cd, aP as Rd, aQ as gd, aR as Sd, aX as ud, a_ as kd, a$ as bd, b0 as Md, b1 as Nd, b2 as vd, b3 as Ld, b4 as Pd, b5 as Od, b6 as hd, b7 as Dd, b8 as fd, b9 as Fd, ba as xd, bb as Ud, bc as Bd, bd as wd } from "../shared/commands.es.js";
import { q as S, M as u, b, u as aa, v as ea, D as ta, p as U, t as B, H as w, d as sa, f as ra, L as ma, al as oa, am as na, an as ia, ap as da, B as P, Q as pa, U as la, O as ca, P as Ia, aR as Ta, aQ as Aa, ay as Ea, ax as _a, aG as ya, aH as Ca, W as n } from "../shared/eventCommandCodes.es.js";
import { m as r, c as Ra, a as ga } from "../shared/make.es.js";
const be = (a) => a.parameters[3] === A, Me = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), Ne = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), ve = (a, e = 0) => ({ code: S, indent: e, parameters: [a.itemId, y, C, a.value] }), Le = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [a.itemId, y, A, a.variableId]
}), Pe = (a, e = 0) => ({ code: S, indent: e, parameters: [a.itemId, R, C, a.value] }), Oe = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [a.itemId, R, A, a.variableId]
}), he = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), De = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), fe = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, y, C, a.value, !1] }), Fe = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, y, A, a.variableId, !1]
}), xe = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, R, C, a.value, !1] }), Ue = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, R, A, a.variableId, !1]
}), Be = (a, e = 0) => ({ code: b, indent: e, parameters: [a.armorId, y, C, a.value, !1] }), we = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.armorId, y, A, a.variableId, !1]
}), Ve = (a, e = 0) => ({ code: b, indent: e, parameters: [a.armorId, R, C, a.value, !1] }), Ge = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.armorId, R, A, a.variableId, !1]
}), He = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), We = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), Ye = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), qe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Xe = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Ke = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), ze = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), je = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Qe = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, d = 0) => ({ code: 322, indent: d, parameters: [a, m, s, t, e, o] }), Ze = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), $e = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Je = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), at = (a, e = 0) => ({ code: aa, parameters: [a.actorId, a.name], indent: e }), et = (a, e = 0) => ({ code: ea, parameters: [a.actorId, a.nickname], indent: e }), tt = (a, e = 0) => ({
  code: ta,
  parameters: [a.actorId, a.profile],
  indent: e
}), _ = { direct: 0, variable: 1 }, st = (a, e = 0) => ({ code: U, indent: e, parameters: V(0, a) }), rt = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: V(1, a)
}), mt = (a, e = 0) => ({ code: w, indent: e, parameters: M(0, a) }), ot = (a, e = 0) => ({ code: w, indent: e, parameters: M(1, a) }), nt = (a, e = 0) => ({ code: B, indent: e, parameters: M(0, a) }), it = (a, e = 0) => ({
  code: B,
  indent: e,
  parameters: M(1, a)
}), M = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value], V = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value, e.allowDeath], dt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), pt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), lt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), ct = (a = 0) => ({ code: 244, indent: a, parameters: [] }), It = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Tt = (a, e) => c(a, r({ name: e })), c = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), At = (a, e = 0) => c(oa, a, e), Et = (a, e = 0) => c(na, a, e), _t = (a, e = 0) => c(ia, a, e), yt = (a, e = 0) => c(da, a, e), Ct = (a, e = 0) => c(sa, a, e), Rt = (a, e = 0) => c(ma, a, e), gt = (a, e = 0) => c(ra, a, e), St = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), ut = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), kt = 0, bt = 1, Mt = 2, Nt = (a) => a.parameters[0] === 1, vt = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: P,
  indent: s,
  parameters: [0, a, e, t]
}), Lt = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: P, indent: s, parameters: [1, a, e, t] }), Pt = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: P,
  indent: t,
  parameters: [2, 0, a, e]
}), Sa = { plus: 0, minus: 1 }, Ot = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Sa[a ?? "plus"] ?? 0, e ?? 0] });
function ht(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const Dt = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ft = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), Ft = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), xt = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), Ut = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Bt = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), wt = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Vt = (a, e = 0) => ({ code: pa, indent: e, parameters: ua(a ?? {}) }), Gt = (a) => ({
  eventId: a[0]
}), ua = (a) => [a.eventId ?? 0], Ht = (a) => ({ min: a[0], max: a[1], value: a[2] }), ka = (a) => [a.min, a.max, a.value], Wt = (a, e = 0) => ({ code: la, indent: e, parameters: ka(a) }), Yt = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), qt = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Xt = (a) => ({ variableId: a[0], maxDigits: a[1] }), Kt = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), zt = (a) => ({ variableId: a[0], itemType: a[1] }), jt = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), Qt = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), Zt = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), $t = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), Jt = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), as = (a = 0) => ({ code: 135, parameters: [1], indent: a }), es = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), ts = (a = 0) => ({ code: 134, parameters: [1], indent: a }), ss = (a = 0) => ({ code: 134, parameters: [0], indent: a }), rs = (a = 0) => ({ code: 137, parameters: [1], indent: a }), ms = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), G = (a) => [a], os = (a) => ({ comment: a[0] }), ba = (a, e = 0) => ({ code: Ia, indent: e, parameters: G(a) }), Ma = (a, e = 0) => ({
  code: ca,
  indent: e,
  parameters: G(a)
}), ns = (a, e = 0) => a.map(((t, s) => s === 0 ? ba(t, e) : Ma(t, e))), Na = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], is = (a) => ({ speed: a[0], skip: a[1] }), ds = (a = {}, e = 0) => ({
  code: Aa,
  indent: e,
  parameters: Na(a)
}), va = (a = "") => [a], ps = (a) => ({ content: a[0] }), ls = (a = "", e = 0) => ({ code: Ta, indent: e ?? 0, parameters: va(a) }), cs = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Is = (a) => ({
  index: a[0],
  name: a[1]
}), Ts = (a) => [a.index ?? 0, a.name ?? ""], As = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Es = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], _s = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), ys = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Cs = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Rs = (a) => ({
  filename: a[0]
}), gs = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Ss = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), us = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), ks = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), bs = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Ms = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Ns = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), vs = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Ls = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: d = 100, opacity: l = 255, blendMode: I = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, d, l, I]
}), Ps = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: d, blendMode: l, wait: I = !1, easingType: N = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, d, l, I, N]
}), Os = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), hs = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Ds = (a = 0) => ({ code: 221, indent: a, parameters: [] }), fs = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Fs = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), xs = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), La = (a, e = 0) => ({ code: _a, indent: e, parameters: [a] }), Pa = (a, e = 0) => ({
  code: Ea,
  indent: e,
  parameters: [a]
}), Us = (a, e = 0) => a.map(((t, s) => s === 0 ? La(t, e) : Pa(t, e))), Bs = 1, ws = 0, k = { item: 0, weapon: 1, armors: 2 }, Vs = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const o = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: ya, indent: t, parameters: [k[s.itemType] ?? k.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: Ca,
    indent: t,
    parameters: [k[s.itemType] ?? k.item, s.id, o, s.customPrice ?? 0]
  };
})), Gs = 0, Hs = 1, Ws = 2, Ys = 3, qs = 4, Xs = 5, Ks = 0, zs = 1, js = 2, Qs = 3, Zs = 4, $s = 0, Js = 1, ar = 2, er = (a) => a.parameters[2] === 1, Oa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], tr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Oa(a, e, t.operation ?? 0)
}), sr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), rr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), mr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), or = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), nr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), ir = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), dr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), pr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), lr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), cr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), ha = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Ir = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Da(a, e) }), Da = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, ha[e.param]], Tr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Ar = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.level;
    case 1:
      return a.currentExp();
    case 2:
      return a.hp;
    case 3:
      return a.mp;
    case 12:
      return a.tp;
  }
  return e[6] >= 4 && e[6] <= 11 ? a.param(e[6] - 4) : 0;
}, fa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], Er = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: fa(a, e, t.operation ?? 0)
}), Fa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], _r = (a, e) => ({
  code: n,
  indent: 0,
  parameters: Fa(a, e, 0)
}), xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], yr = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: xa(a, e, t.operation ?? 0) }), Ua = {
  HP: 0,
  MP: 1,
  MHP: 2,
  MMP: 3,
  ATK: 4,
  DEF: 5,
  MAT: 6,
  MDF: 7,
  AGI: 8,
  LUK: 9,
  TP: 10
}, Ba = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ua[e.param]], Cr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ba(a, e, t.operation ?? 0)
}), Rr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: wa(a, e, t.operation ?? 0)
}), wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Va = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], gr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Va(a, e, t.operation ?? 0)
}), Ga = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Sr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ga(a, e, t.operation ?? 0)
}), Ha = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], ur = (a, e) => ({ code: n, indent: 0, parameters: Ha(a, e, 0) }), kr = (a = 0) => ({ code: 206, indent: a, parameters: [] }), br = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Mr = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), Nr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), vr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), Lr = 0, Pr = 1, Or = 2, Wa = (a) => [...a], hr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Wa(a.parameters)
}), Ya = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Dr = (a) => a.parameters.every(Ya), fr = "bgm", Fr = "se", xr = "me", Ur = "bgs", Br = "battlebacks1", wr = "battlebacks2", Vr = "characters", Gr = "enemies", Hr = "faces", Wr = "parallaxes", Yr = "pictures", qr = "sv_actors", Xr = "sv_enemies", Kr = "system", zr = "tilesets", jr = "titles1", Qr = "titles2", Zr = "System.json", $r = "Actors.json", Jr = "Classes.json", am = "Skills.json", em = "Items.json", tm = "Weapons.json", sm = "Armors.json", rm = "Enemies.json", mm = "Troops.json", om = "States.json", nm = "Animations.json", im = "Tilesets.json", dm = "CommonEvents.json", pm = "MapInfos.json", lm = "data", cm = "img", Im = "audio", Tm = "js", O = (a, e) => `\\${a}[${e}]`, Am = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: O(a, s)
}))), Em = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), _m = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: O("N", e.id)
}))), ym = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: O("V", t) }))).filter(((e) => e.text !== "")), Cm = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), Rm = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), gm = (a) => ({
  span: a.span ?? 0,
  conditions: qa(a.conditions ?? {}),
  list: a.list ?? []
}), Sm = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), qa = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), Xa = (a = {}) => ({
  switch1Id: a.switch1Id ?? 0,
  switch1Valid: a.switch1Id !== void 0,
  switch2Id: a.switch2Id ?? 0,
  switch2Valid: a.switch2Id !== void 0,
  variableId: a.variableId ?? 0,
  variableValid: a.variableId !== void 0,
  variableValue: a.variableValue ?? 0,
  selfSwitchCh: a.selfSwitchCh ?? "A",
  selfSwitchValid: a.selfSwitchCh !== void 0,
  itemId: a.itemId ?? 0,
  itemValid: a.itemId !== void 0,
  actorId: a.actorId ?? 0,
  actorValid: a.actorId !== void 0
}), um = 0, km = 1, bm = 2, Mm = 3, Nm = 4, vm = 5, Lm = 6, Pm = 7, Om = 8, hm = 9, Dm = 10, fm = 11, Fm = 12, xm = 13, Um = 14, Bm = 15, wm = 16, Vm = 17, Gm = 18, Hm = 19, Wm = 20, Ym = 21, qm = 22, Xm = 23, Km = 24, zm = 25, jm = 26, Qm = 27, Zm = 28, $m = 29, Jm = 30, ao = 31, eo = 32, to = 33, so = 34, ro = 35, mo = 36, oo = 37, no = 38, io = 39, po = 40, lo = 41, co = 42, Io = 43, To = 44, Ao = 45, Eo = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: o
}), Ka = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), _o = ({ list: a = [], conditions: e = Xa(), image: t = Ka(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: l = !1, through: I = !1, walkAnime: N = !1, moveSpeed: W = 3, moveType: Y = 0, trigger: q = 0 } = {}) => ({
  walkAnime: N,
  stepAnime: l,
  through: I,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: d,
  moveFrequency: s,
  moveSpeed: W,
  moveType: Y,
  trigger: q,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), yo = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Co = (a = {}) => ({
  tilesetId: a.tilesetId ?? 1,
  data: a.data ?? [],
  battleback1Name: a.battleback1Name ?? "",
  battleback2Name: a.battleback2Name ?? "",
  autoplayBgm: a.autoplayBgm ?? !1,
  autoplayBgs: a.autoplayBgs ?? !1,
  parallaxLoopX: a.parallaxLoopX ?? !1,
  parallaxLoopY: a.parallaxLoopY ?? !1,
  parallaxName: a.parallaxName ?? "",
  parallaxShow: a.parallaxShow ?? !1,
  parallaxSx: a.parallaxSx ?? 0,
  parallaxSy: a.parallaxSy ?? 0,
  encounterStep: a.encounterStep ?? 30,
  scrollType: a.scrollType ?? 0,
  specifyBattleback: a.specifyBattleback ?? !1,
  width: a.width ?? 0,
  height: a.height ?? 0,
  note: a.note ?? "",
  bgm: a.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: a.bgs ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  disableDashing: a.disableDashing ?? !1,
  displayName: a.displayName ?? "",
  encounterList: a.encounterList ?? [],
  events: a.events ?? []
}), Ro = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, go = (a, e) => a.map(((t) => t ? {
  ...t,
  pages: za(t, e)
} : null)), za = (a, e) => a.pages.map(((t) => ({ ...t, list: e(t.list) }))), ja = { actor: { title: "アクター", options: {
  initialEquipments: "初期装備",
  faceImage: "顔画像",
  characterImage: "キャラクター画像",
  svBattlerImage: "SVバトラー画像",
  nickname: "ニックネーム",
  profile: "プロフィール",
  classId: "職業ID",
  initialLevel: "初期レベル",
  maxLevel: "最大レベル"
} }, class: { title: "職業", options: {
  params: "パラメータ",
  learnings: "習得スキル",
  expParams: "経験値パラメータ"
} }, armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: { title: "敵キャラ", options: {
  dropItems: "ドロップアイテム",
  battlerHue: "バトラーヒュー",
  battlerName: "バトラー名",
  gold: "ゴールド"
} }, item: { title: "アイテム", options: { consumable: "消耗品" } }, skill: { title: "スキル", options: {
  requiredWeaponTypeId1: "必要武器タイプ1",
  requiredWeaponTypeId2: "必要武器タイプ2",
  mpCost: "MP消費",
  tpCost: "TP消費"
} }, state: { title: "ステート", options: {
  restriction: "制約",
  priority: "優先度",
  motion: "モーション",
  overlay: "オーバーレイ",
  removeAtBattleEnd: "戦闘終了時解除",
  removeByRestriction: "制約による解除",
  autoRemovalTiming: "自動解除タイミング",
  minTurns: "最小ターン数",
  maxTurns: "最大ターン数",
  removeByDamage: "ダメージによる解除",
  chanceByDamage: "ダメージによる解除確率",
  removeByWalking: "歩行による解除",
  stepsToRemove: "解除までの歩数"
} }, weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { title: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } }, commonEvent: {
  title: "コモンイベント",
  options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" }
} }, Qa = { title: "ダメージ", options: {} }, h = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), So = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), uo = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), ko = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  atypeId: a.atypeId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0
}), bo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Za = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: d = 0, luk: l = 0 }) => [a, e, t, s, m, o, d, l], Mo = (a) => {
  const [e, t, s, m, o, d, l, I] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: d, agi: l, luk: I };
}, $a = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), No = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), vo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => $a())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : Za({
    mhp: 0,
    mmp: 0,
    atk: 0,
    def: 0,
    mat: 0,
    mdf: 0,
    agi: 0,
    luk: 0
  }),
  actions: []
}), Lo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  iconIndex: a.iconIndex ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  message3: a.message3 ?? "",
  message4: a.message4 ?? "",
  traits: [],
  note: a.note ?? "",
  messageType: a.messageType ?? 0,
  releaseByDamage: a.releaseByDamage ?? !1,
  restriction: a.restriction ?? 0,
  priority: a.priority ?? 0,
  motion: a.motion ?? 0,
  overlay: a.overlay ?? 0,
  removeAtBattleEnd: a.removeAtBattleEnd ?? !1,
  removeByRestriction: a.removeByRestriction ?? !1,
  autoRemovalTiming: a.autoRemovalTiming ?? 0,
  minTurns: a.minTurns ?? 0,
  maxTurns: a.maxTurns ?? 0,
  removeByDamage: a.removeByDamage ?? !1,
  chanceByDamage: a.chanceByDamage ?? 0,
  removeByWalking: a.removeByWalking ?? !1,
  stepsToRemove: a.stepsToRemove ?? 0
}), i = "{name}", E = "{name} * {value}%", D = "{name} + {value}%", f = "{value}", Ja = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: E, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: D, options: {
    hitRate: "命中率",
    evasionRate: "回避率",
    criticalRate: "クリティカル率",
    criticalEvasionRate: "クリティカル回避率",
    magicEvasionRate: "魔法回避率",
    magicReflectionRate: "魔法反射率",
    counterAttackRate: "反撃率",
    hpRegenerationRate: "HP再生率",
    mpRegenerationRate: "MP再生率",
    tpRegenerationRate: "TP再生率"
  } },
  specialParam: { title: "特殊能力値", format: E, options: {
    targetRate: "狙われ率",
    guardEffectRate: "防御効果率",
    recoveryEffectRate: "回復効果率",
    pharmacology: "薬の知識",
    mpCostRate: "MP消費率",
    tpChargeRate: "TPチャージ率",
    physicalDamageRate: "物理ダメージ率",
    magicDamageRate: "魔法ダメージ率",
    floorDamageRate: "床ダメージ率",
    experienceRate: "経験値率"
  } },
  specialFlag: {
    title: "特殊フラグ",
    format: i,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: i, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: i, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: E },
  debuffRate: { title: "弱体有効度", format: E },
  stateRate: { title: "ステート有効度", format: E },
  stateResist: {
    title: "ステート無効",
    format: i
  },
  attackElement: { title: "攻撃属性", format: i },
  attackState: { title: "攻撃ステート", format: D },
  attackSpeed: { title: "攻撃速度補正", format: f },
  attackTimes: {
    title: "攻撃追加回数",
    format: f
  },
  actionPlus: { title: "行動追加", format: E },
  attackSkill: { title: "攻撃スキル", format: i },
  equipWeaponType: { title: "装備武器タイプ", format: i },
  equipArmorType: { title: "装備防具タイプ", format: i },
  equipLock: {
    title: "装備固定",
    format: i
  },
  equipSeal: { title: "装備封印", format: i },
  slotType: { title: "スロットタイプ", format: i },
  skillAdd: { title: "スキル追加", format: i },
  skillSeal: { title: "スキルタイプ封印", format: i },
  skillTypeAdd: { title: "スキルタイプ追加", format: i },
  skillTypeSeal: { title: "スキルタイプ封印", format: i }
} }, ae = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Po = (a, e, t) => {
  const s = Ra(ae);
  return ga(e, t, s, a.pattern, ((m) => m.dataId));
}, Oo = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  animationId: a.animationId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0,
  damage: h(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), ho = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: {
    type: "string"
  }, etypeId: { type: "integer", minimum: 0 }, wtypeId: { type: "integer", minimum: 0 }, animationId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, damage: {
    type: "object",
    properties: { type: {
      type: "integer",
      minimum: 0
    }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: !1 } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } } }
}, Do = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, fo = 0, Fo = 1, xo = 2, F = "{name} {value1}%", v = "{value1}% + {value2}", x = "{name} {value1}ターン", g = "{name}", ee = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: x },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: x },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: v },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: g },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: v
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: v },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: g
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: g },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: F },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: g
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: F },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: g }
} }, Uo = 0, Bo = (a, e, t) => {
  const s = t.find(((o) => o.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, wo = { title: "アイテム", options: { consumable: "消耗品" } }, Vo = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Go = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Ho = (a = {}) => ({
  animationId: a.animationId ?? 0,
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  itypeId: a.itypeId ?? 0,
  note: a.note ?? "",
  consumable: a.consumable ?? !1,
  scope: a.scope ?? 0,
  occasion: a.occasion ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  repeats: a.repeats ?? 0,
  tpGain: a.tpGain ?? 0,
  hitType: a.hitType ?? 0,
  damage: h(a.damage ?? {}),
  effects: [],
  price: 0
}), Wo = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: h(a.damage ?? {}),
  description: a.description ?? "",
  effects: [],
  hitType: a.hitType ?? 0,
  iconIndex: a.iconIndex ?? 0,
  id: a.id ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  messageType: a.messageType ?? 0,
  name: a.name ?? "",
  note: a.note ?? "",
  mpCost: a.mpCost ?? 0,
  occasion: a.occasion ?? 0,
  repeats: a.repeats ?? 0,
  scope: a.scope ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  tpCost: a.tpCost ?? 0,
  tpGain: a.tpGain ?? 0
}), Yo = "data", qo = "actor", Xo = "map", Ko = "enemy", zo = "state", jo = "skill", Qo = "item", Zo = "weapon", $o = "armor", Jo = "class", an = "common_event", en = "troop", te = {
  id: "識別子",
  name: "名前",
  note: "メモ",
  description: "説明",
  iconIndex: "アイコンインデックス",
  occasion: "使用タイミング",
  params: "パラメータ",
  repeats: "繰り返し回数",
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率",
  animationId: "アニメーションID",
  displayType: "表示タイプ",
  characterIndex: "キャラクターインデックス",
  characterName: "キャラクター名",
  effectName: "効果名",
  faceIndex: "顔グラフィックインデックス",
  faceName: "顔グラフィック名",
  flashTimings: "フラッシュタイミング",
  list: "リスト",
  messageType: "メッセージタイプ",
  offsetX: "オフセットX",
  offsetY: "オフセットY",
  overlay: "オーバーレイ",
  priority: "優先度",
  restriction: "制約",
  rotation: "回転",
  scale: "スケール",
  soundTimings: "サウンドタイミング",
  stepsToRemove: "解除までの歩数",
  type: "タイプ",
  variance: "分散度",
  unknownCode: "不明なコード",
  content: "内容",
  apply: "適用",
  turn: "ターン",
  commonEvent: "コモンイベント",
  normal: "通常",
  dualWield: "二刀流",
  bossCollaps: "ボス崩壊",
  instantCollaps: "即時崩壊",
  noneCollaps: "崩壊なし",
  escape: "逃走"
}, tn = () => ({ rpg: { damage: Qa, data: ja, traits: Ja, itemEffect: ee }, global: te }), se = (a = {}) => ({
  gameId: a.gameId ?? 0,
  screenWidth: a.screenWidth ?? 0,
  screenHeight: a.screenHeight ?? 0,
  uiAreaWidth: a.uiAreaWidth ?? 0,
  uiAreaHeight: a.uiAreaHeight ?? 0,
  windowOpacity: a.windowOpacity ?? 0,
  screenScale: a.screenScale ?? 1,
  numberFontFilename: a.numberFontFilename ?? "",
  mainFontFilename: a.mainFontFilename ?? "",
  fallbackFonts: a.fallbackFonts ?? "",
  fontSize: a.fontSize ?? 28,
  picturesUpperLimit: a.picturesUpperLimit ?? 100
}), re = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], me = (a) => ({
  cursor: a[0],
  ok: a[1],
  cancel: a[2],
  buzzer: a[3],
  equip: a[4],
  save: a[5],
  load: a[6],
  battleStart: a[7],
  escape: a[8],
  enemyAttack: a[9],
  enemyDamage: a[10],
  enemyCollapse: a[11],
  bossCollapes1: a[12],
  bossCollapes2: a[13],
  actorDamage: a[14],
  actorCollapse: a[15],
  playRecovery: a[16],
  playMiss: a[17],
  playEvasion: a[18],
  playMagicEvasion: a[19],
  playReflection: a[20],
  shop: a[21],
  useItem: a[22],
  useSkill: a[23]
}), oe = (a) => ({
  item: ne(a),
  skill: ie(a),
  equip: de(a),
  status: pe(a),
  formation: le(a),
  save: ce(a)
}), ne = (a) => a.menuCommands[0], ie = (a) => a.menuCommands[1], de = (a) => a.menuCommands[2], pe = (a) => a.menuCommands[3], le = (a) => a.menuCommands[4], ce = (a) => a.menuCommands[5], sn = (a) => a.itemCategories[0], rn = (a) => a.itemCategories[1], mn = (a) => a.itemCategories[2], on = (a) => a.itemCategories[3], Ie = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], nn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Te = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], dn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Ae = (a = {}) => ({
  optAutosave: a.optAutosave ?? !0,
  optDisplayTp: a.optDisplayTp ?? !0,
  optDrawTitle: a.optDrawTitle ?? !0,
  optExtraExp: a.optExtraExp ?? !0,
  optFloorDeath: a.optFloorDeath ?? !0,
  optFollowers: a.optFollowers ?? !0,
  optKeyItemsNumber: a.optKeyItemsNumber ?? !0,
  optSideView: a.optSideView ?? !0,
  optSlipDeath: a.optSlipDeath ?? !0,
  optTransparent: a.optTransparent ?? !0,
  optMessageSkip: a.optMessageSkip ?? !0,
  optSplashScreen: a.optSplashScreen ?? !0
}), pn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), ln = (a) => ({
  armorTypes: T(a.armorTypes),
  elements: T(a.elements),
  equipTypes: T(a.equipTypes),
  weaponTypes: T(a.weaponTypes),
  skillTypes: T(a.skillTypes),
  variables: T(a.variables),
  switches: T(a.switches)
}), T = (a) => a ? [...a] : [], cn = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), Ee = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), L = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), _e = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), In = { title: "オプション", options: {
  optDrawTitle: "ゲームタイトルの描画",
  optDisplayTp: "ウィンドウにTPを表示",
  optFloorDeath: "床ダメージで戦闘不能",
  optSlipDeath: "スリップダメージで戦闘不能",
  optAutosave: "オートセーブを有効化",
  optExtraExp: "控えメンバーも経験値を獲得",
  optFollowers: "隊列歩行",
  optSideView: "戦闘をサイドビューにする",
  optKeyItemsNumber: "大事なものの個数を表示",
  optTransparent: "透明状態で開始",
  optMessageSkip: "メッセージスキップを有効化",
  optSplashScreen: "スプラッシュ画面を表示"
} }, Tn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, An = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, En = {
  title: "コマンド",
  options: {
    item: "アイテム",
    skill: "スキル",
    equip: "装備",
    status: "ステータス",
    formation: "編成",
    options: "オプション",
    save: "セーブ",
    gameEnd: "ゲーム終了",
    armor: "防具",
    weapon: "武器",
    newGame: "ニューゲーム",
    attack: "攻撃",
    guard: "防御",
    escape: "逃げる",
    fight: "戦う",
    buy: "買う",
    sell: "売る",
    cancel: "キャンセル",
    clear: "クリア",
    continueGame: "続きから",
    equip2: "装備2",
    keyItem: "大事なもの",
    optimize: "最強装備",
    toTitle: "タイトルへ戻る"
  }
}, _n = (a = H({})) => ({
  versionId: a.versionId,
  menuCommands: a.menuCommands,
  locale: a.locale,
  startMapId: a.startMapId,
  startX: a.startX,
  startY: a.startY,
  partyMembers: a.partyMembers,
  magicSkills: a.magicSkills,
  title1Name: a.title1Name,
  title2Name: a.title2Name,
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  windowTone: a.windowTone,
  battleback1Name: a.battleback1Name,
  battleback2Name: a.battleback2Name,
  testTroopId: a.testTroopId,
  testBattlers: a.testBattlers,
  attackMotions: a.attackMotions,
  battlerHue: a.battlerHue,
  battlerName: a.battlerName,
  airship: a.airship,
  boat: a.boat,
  ship: a.ship,
  defeatMe: a.defeatMe,
  gameoverMe: a.gameoverMe,
  optDisplayTp: a.optDisplayTp,
  optDrawTitle: a.optDrawTitle,
  optExtraExp: a.optExtraExp,
  optFloorDeath: a.optFloorDeath,
  optSideView: a.optSideView,
  optFollowers: a.optFollowers,
  optSlipDeath: a.optSlipDeath,
  optTransparent: a.optTransparent,
  skillTypes: a.skillTypes,
  weaponTypes: a.weaponTypes,
  armorTypes: a.armorTypes,
  elements: a.elements,
  equipTypes: a.equipTypes,
  switches: a.switches,
  variables: a.variables,
  titleBgm: a.titleBgm,
  battleBgm: a.battleBgm,
  victoryMe: a.victoryMe,
  editMapId: a.editMapId,
  sounds: a.sounds,
  terms: {
    basic: a.terms.basic,
    commands: a.terms.commands,
    params: a.terms.params,
    messages: j(a.terms.messages)
  }
}), yn = (a) => H({
  versionId: a.versionId,
  menuCommands: oe(a),
  locale: a.locale,
  gameInit: {
    startMapId: a.startMapId,
    startX: a.startX,
    startY: a.startY,
    partyMembers: a.partyMembers
  },
  battle: { magicSkills: a.magicSkills },
  bgm: { titleBgm: a.titleBgm, battleBgm: a.battleBgm },
  options: a,
  vehicles: { airship: a.airship, boat: a.boat, ship: a.ship },
  images: { title1Name: a.title1Name, title2Name: a.title2Name },
  me: { defeatMe: a.defeatMe, gameoverMe: a.gameoverMe, victoryMe: a.victoryMe },
  battleTest: {
    battleback1Name: a.battleback1Name,
    battleback2Name: a.battleback2Name,
    testTroopId: a.testTroopId,
    testBattlers: a.testBattlers
  },
  attackMotion: a.attackMotions,
  sounds: me(a.sounds),
  dataNames: {
    skillTypes: a.skillTypes,
    weaponTypes: a.weaponTypes,
    armorTypes: a.armorTypes,
    elements: a.elements,
    equipTypes: a.equipTypes,
    switches: a.switches,
    variables: a.variables
  },
  texts: {
    currencyUnit: a.currencyUnit,
    gameTitle: a.gameTitle
  },
  editorTemporary: { editMapId: a.editMapId, battlerName: a.battlerName, battlerHue: a.battlerHue },
  terms: {
    basic: z(a.terms.basic),
    commands: K(a.terms.commands),
    params: X(a.terms.params),
    messages: a.terms.messages
  }
}), H = (a) => {
  const e = Ce(a.size);
  return {
    ...Ae(a.options),
    titleCommandWindow: Ee(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: re(a.sounds),
    editor: _e(a.editing),
    advanced: se(a.advanced),
    title1Name: a.images?.title1Name ?? "",
    title2Name: a.images?.title2Name ?? "",
    armorTypes: p(a.dataNames?.armorTypes),
    equipTypes: p(a.dataNames?.equipTypes),
    elements: p(a.dataNames?.elements),
    skillTypes: p(a.dataNames?.skillTypes),
    weaponTypes: p(a.dataNames?.weaponTypes),
    switches: p(a.dataNames?.switches),
    variables: p(a.dataNames?.variables),
    magicSkills: p(a.battle?.magicSkills),
    battleSystem: a.battle?.battleSystem ?? 0,
    airship: L(a.vehicles?.airship),
    boat: L(a.vehicles?.boat),
    ship: L(a.vehicles?.ship),
    defeatMe: r(a.me?.defeatMe),
    gameoverMe: r(a.me?.gameoverMe),
    titleBgm: r(a.bgm?.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: a.versionId ?? 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: a.battleTest?.battleback1Name ?? "",
    battleback2Name: a.battleTest?.battleback2Name ?? "",
    testTroopId: a.battleTest?.testTroopId ?? 0,
    testBattlers: Re(a.battleTest?.testBattlers, ge),
    battleBgm: r(a.bgm?.battleBgm),
    victoryMe: r(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ye(a.terms ?? {}),
    itemCategories: Ie(a.itemCategories),
    partyMembers: p(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: Te(a.menuCommands)
  };
}, ye = (a) => ({ basic: J(a.basic ?? {}), commands: $(a.commands ?? {}), params: Z(a.params ?? {}), messages: Q(a.messages ?? {}) }), p = (a) => a ? [...a] : [], Ce = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Re = (a, e) => a ? a.map(e) : [], ge = (a) => a ? {
  actorId: a.actorId,
  equips: p(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Cn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Rn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, gn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  kt as BATTLE_DIRECT,
  Mt as BATTLE_ENCOUNT,
  bt as BATTLE_VARIABLE,
  kn as COLLAPS_BOSS,
  bn as COLLAPS_INSTANT,
  Mn as COLLAPS_NONE,
  Nn as COLLAPS_NORMAL,
  Bs as CUSTOM_PRICE,
  Qa as DEFAULT_DAMAGE_LABELS,
  te as DEFAULT_GLOBAL_LABELS,
  wo as DEFAULT_ITEM_LABELS,
  Vo as DEFAULT_SKILL_LABELS,
  In as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Tn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Go as DEFAULT_USABLE_ITEM_LABELS,
  Rn as DIRECTION,
  vn as EFFECT_ADD_BUFF,
  Ln as EFFECT_ADD_DEBUFF,
  Pn as EFFECT_ADD_STATE,
  On as EFFECT_COMMON_EVENT,
  hn as EFFECT_GAIN_TP,
  Dn as EFFECT_GROW,
  fn as EFFECT_LEARN_SKILL,
  Fn as EFFECT_RECOVER_HP,
  xn as EFFECT_RECOVER_MP,
  Un as EFFECT_REMOVE_BUFF,
  Bn as EFFECT_REMOVE_DEBUFF,
  wn as EFFECT_REMOVE_STATE,
  Vn as EFFECT_SPECIAL,
  Gn as EXTRA_PARAM_CEV,
  Hn as EXTRA_PARAM_CNT,
  Wn as EXTRA_PARAM_CRI,
  Yn as EXTRA_PARAM_EVA,
  qn as EXTRA_PARAM_HIT,
  Xn as EXTRA_PARAM_HRG,
  Kn as EXTRA_PARAM_MEV,
  zn as EXTRA_PARAM_MRF,
  jn as EXTRA_PARAM_MRG,
  Qn as EXTRA_PARAM_TRG,
  $r as FILENAME_ACTORS,
  nm as FILENAME_ANIMATIONS,
  sm as FILENAME_ARMORS,
  Jr as FILENAME_CLASSES,
  dm as FILENAME_COMMON_EVENTS,
  rm as FILENAME_ENEMIES,
  em as FILENAME_ITEMS,
  pm as FILENAME_MAP_INFOS,
  am as FILENAME_SKILLS,
  om as FILENAME_STATES,
  Zr as FILENAME_SYSTEM,
  im as FILENAME_TILESET,
  mm as FILENAME_TROOPS,
  tm as FILENAME_WEAPONS,
  Zn as FLAG_ID_AUTO_BATTLE,
  $n as FLAG_ID_GUARD,
  Jn as FLAG_ID_PRESERVE_TP,
  ai as FLAG_ID_SUBSTITUTE,
  Im as FOLDER_AUDIO,
  fr as FOLDER_AUDIO_BGM,
  Ur as FOLDER_AUDIO_BGS,
  xr as FOLDER_AUDIO_ME,
  Fr as FOLDER_AUDIO_SE,
  lm as FOLDER_DATA,
  cm as FOLDER_IMG,
  Br as FOLDER_IMG_BATTLEBACK1,
  wr as FOLDER_IMG_BATTLEBACK2,
  Vr as FOLDER_IMG_CHACTERS,
  Gr as FOLDER_IMG_ENEMIES,
  Hr as FOLDER_IMG_FACES,
  Wr as FOLDER_IMG_PARALLACES,
  Yr as FOLDER_IMG_PICTURES,
  qr as FOLDER_IMG_SV_ACTORS,
  Xr as FOLDER_IMG_SV_ENEMIES,
  Kr as FOLDER_IMG_SYSTEM,
  zr as FOLDER_IMG_TILESETS,
  jr as FOLDER_IMG_TITLES1,
  Qr as FOLDER_IMG_TITLES2,
  Tm as FOLDER_JS,
  fo as HITTYPE_CERTAIN,
  xo as HITTYPE_MAGICAL,
  Fo as HITTYPE_PHYSICAL,
  Do as LABELS_DATA_WEAPON,
  An as LABELS_SYSTEM_BATTLER_PARAMS,
  En as LABELS_SYSTEM_GAME_COMMANDS,
  ja as LABEL_SET_DATA,
  ee as LABEL_SET_ITEM_EFFECT,
  Ja as LABEL_SET_TRAIT,
  Yo as MODULE_DATA,
  ws as NORMAL_PRICE,
  Ks as OPERAND_CONSTANT,
  Qs as OPERAND_GAMEDATA,
  js as OPERAND_RANDOM,
  Zs as OPERAND_SCRIPT,
  zs as OPERAND_VARIABLE,
  Hs as OPERATION_ADD,
  qs as OPERATION_DIVIDE,
  Xs as OPERATION_MOD,
  Ys as OPERATION_MULTIPLY,
  Gs as OPERATION_SET,
  Ws as OPERATION_SUBTRACT,
  ei as PARTY_ABILITY_CANCEL_SURPRISE,
  ti as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  si as PARTY_ABILITY_ENCOUNTER_HALF,
  ri as PARTY_ABILITY_ENCOUNTER_NONE,
  mi as PARTY_ABILITY_GOLD_DOUBLE,
  oi as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ni as REGULAR_PARAM_AGI,
  ii as REGULAR_PARAM_ATK,
  di as REGULAR_PARAM_DEF,
  pi as REGULAR_PARAM_LUK,
  li as REGULAR_PARAM_MATK,
  ci as REGULAR_PARAM_MAX_HP,
  Ii as REGULAR_PARAM_MAX_MP,
  Ti as REGULAR_PARAM_MDEF,
  Io as ROUTE_CHANGE_BLEND_MODE,
  Jm as ROUTE_CHANGE_FREQ,
  lo as ROUTE_CHANGE_IMAGE,
  co as ROUTE_CHANGE_OPACITY,
  $m as ROUTE_CHANGE_SPEED,
  mo as ROUTE_DIR_FIX_OFF,
  ro as ROUTE_DIR_FIX_ON,
  um as ROUTE_END,
  Um as ROUTE_JUMP,
  fm as ROUTE_MOVE_AWAY,
  xm as ROUTE_MOVE_BACKWARD,
  km as ROUTE_MOVE_DOWN,
  Fm as ROUTE_MOVE_FORWARD,
  bm as ROUTE_MOVE_LEFT,
  vm as ROUTE_MOVE_LOWER_L,
  Lm as ROUTE_MOVE_LOWER_R,
  hm as ROUTE_MOVE_RANDOM,
  Mm as ROUTE_MOVE_RIGHT,
  Dm as ROUTE_MOVE_TOWARD,
  Nm as ROUTE_MOVE_UP,
  Pm as ROUTE_MOVE_UPPER_L,
  Om as ROUTE_MOVE_UPPER_R,
  To as ROUTE_PLAY_SE,
  Ao as ROUTE_SCRIPT,
  so as ROUTE_STEP_ANIME_OFF,
  to as ROUTE_STEP_ANIME_ON,
  Zm as ROUTE_SWITCH_OFF,
  Qm as ROUTE_SWITCH_ON,
  no as ROUTE_THROUGH_OFF,
  oo as ROUTE_THROUGH_ON,
  po as ROUTE_TRANSPARENT_OFF,
  io as ROUTE_TRANSPARENT_ON,
  qm as ROUTE_TURN_180D,
  Ym as ROUTE_TURN_90D_L,
  Wm as ROUTE_TURN_90D_R,
  Xm as ROUTE_TURN_90D_R_L,
  jm as ROUTE_TURN_AWAY,
  wm as ROUTE_TURN_DOWN,
  Vm as ROUTE_TURN_LEFT,
  Km as ROUTE_TURN_RANDOM,
  Gm as ROUTE_TURN_RIGHT,
  zm as ROUTE_TURN_TOWARD,
  Hm as ROUTE_TURN_UP,
  Bm as ROUTE_WAIT,
  eo as ROUTE_WALK_ANIME_OFF,
  ao as ROUTE_WALK_ANIME_ON,
  ho as SCHEMA_DATA_WEAPON,
  Uo as SPECIAL_EFFECT_ESCAPE,
  Ai as SPECIAL_PARAM_EXR,
  Ei as SPECIAL_PARAM_FDR,
  _i as SPECIAL_PARAM_GRD,
  yi as SPECIAL_PARAM_MCR,
  Ci as SPECIAL_PARAM_MDR,
  Ri as SPECIAL_PARAM_PDR,
  gi as SPECIAL_PARAM_PHA,
  Si as SPECIAL_PARAM_REC,
  ui as SPECIAL_PARAM_TCR,
  ki as SPECIAL_PARAM_TGR,
  qo as SRC_DATA_ACTOR,
  $o as SRC_DATA_ARMOR,
  Jo as SRC_DATA_CLASS,
  an as SRC_DATA_COMMON_EVNET,
  Ko as SRC_DATA_ENEMY,
  Qo as SRC_DATA_ITEMS,
  Xo as SRC_DATA_MAP,
  jo as SRC_DATA_SKILL,
  zo as SRC_DATA_STATE,
  en as SRC_DATA_TROOP,
  Zo as SRC_DATA_WEAPON,
  bi as TRAIT_ACTION_PLUS,
  Mi as TRAIT_ATTACK_ELEMENT,
  Ni as TRAIT_ATTACK_SKILL,
  vi as TRAIT_ATTACK_SPEED,
  Li as TRAIT_ATTACK_STATE,
  Pi as TRAIT_ATTACK_TIMES,
  Oi as TRAIT_COLLAPSE_TYPE,
  hi as TRAIT_DEBUFF_RATE,
  Di as TRAIT_ELEMENT_RATE,
  fi as TRAIT_EQUIP_ARMOR_TYPE,
  Fi as TRAIT_EQUIP_LOCK,
  xi as TRAIT_EQUIP_SEAL,
  Ui as TRAIT_EQUIP_WEAPON_TYPE,
  Bi as TRAIT_PARAM,
  wi as TRAIT_PARTY_ABILITY,
  Vi as TRAIT_SKILL_ADD,
  Gi as TRAIT_SKILL_SEAL,
  Hi as TRAIT_SKILL_TYPE_ADD,
  Wi as TRAIT_SKILL_TYPE_SEAL,
  Yi as TRAIT_SLOT_TYPE,
  qi as TRAIT_SPARAM,
  Xi as TRAIT_SPECIAL_FLAG,
  Ki as TRAIT_STATE_RATE,
  zi as TRAIT_STATE_RESIST,
  ji as TRAIT_XPARAM,
  ar as TYPE_ARMOR,
  $s as TYPE_ITEM,
  Js as TYPE_WEAPON,
  Or as VEHICLE_AIRSHIP,
  Lr as VEHICLE_BOAT,
  Pr as VEHICLE_SHIP,
  Qi as buildNoteFromNormalized,
  ys as cloneChoices,
  hr as cloneEventCommand,
  Wa as cloneParameters,
  Zi as collapsOptionsToArray,
  os as convertCommentArrayToObject,
  j as convertTermsMessageMZtoMV,
  _m as createActorControlChars,
  O as createControlCharFormat,
  oe as createMenuCommandState,
  $i as createNoteEntity,
  ym as createSystemVariableControlChars,
  Ji as defineGameDataSources,
  ad as defineSystemItems,
  ed as defineTraitCollapseType,
  td as defineTraitExtraParam,
  sd as defineTraitItems,
  rd as defineTraitPartyAbility,
  md as defineTraitRegularParam,
  od as defineTraitSpecialFlag,
  nd as defineTraitSpecialParam,
  id as extraParamName,
  dd as extraParamsToArray,
  gn as extractFileName,
  Bo as formatItemEffectText,
  Po as formatTraitText,
  Me as fromArrayChangeItems,
  he as fromArrayChangeWeapons,
  Gt as fromArrayCommonEvent,
  Ht as fromArrayControlSwitches,
  Dt as fromArrayEnemyTransform,
  Xt as fromArrayInputNumber,
  Rs as fromArrayPlayMovie,
  Ss as fromArrayPluginCommandMZ,
  ps as fromArrayScrollingTextBody,
  is as fromArrayScrollingTextHeader,
  zt as fromArraySelectItem,
  As as fromArraySetupChoice,
  Is as fromArraySetupChoiceItem,
  pd as fromArrayShowMessageHeader,
  Am as fromStringArray,
  Ar as getActorValue,
  mn as getArmorCategoryEnabled,
  ld as getArmorTypes,
  Em as getControlChars,
  cd as getElementTypes,
  Tr as getEnemyValue,
  de as getEquipCommandEnabled,
  Id as getEquipTypes,
  le as getFormationCommandEnabled,
  sn as getItemCategoryEnabled,
  ne as getItemCommandEnabled,
  Td as getItemIdFromItemCommand,
  on as getKeyItemCategoryEnabled,
  Ad as getNoteValue,
  cn as getParamNames,
  ce as getSaveCommandEnabled,
  ie as getSkillCommandEnabled,
  Ed as getSkillTypes,
  pe as getStatusCommandEnabled,
  _d as getSwitches,
  yd as getVariableNames,
  rn as getWeaponCategoryEnabled,
  Cd as getWeaponTypes,
  Dr as isCloneableCommand,
  Nt as isCommandBattleProcessingVariable,
  er as isCommandOperandVariables,
  Rd as isUsingVariableItemCommand,
  be as isUsingVaribleCommandChangingItems,
  tn as labelsRegistry,
  So as makeActorData,
  ko as makeArmorData,
  Tt as makeAudioCommand,
  gm as makeBattleEventPage,
  Ae as makeBooleanOptions,
  bo as makeClassData,
  Ye as makeCommandAddActorStateEach,
  He as makeCommandAddActorStateTarget,
  Xe as makeCommandAddActorStateVariable,
  xt as makeCommandAddEachEnemyState,
  ft as makeCommandAddEnemyState,
  us as makeCommandAddPartyMember,
  c as makeCommandAudioAny,
  vt as makeCommandBattleProcessingDirect,
  Pt as makeCommandBattleProcessingEncount,
  Lt as makeCommandBattleProcessingVariable,
  Qe as makeCommandChangeActorImages,
  at as makeCommandChangeActorName,
  et as makeCommandChangeActorNickName,
  tt as makeCommandChangeActorProfile,
  Ct as makeCommandChangeBattleBGM,
  ut as makeCommandChangeBattleBackground,
  ze as makeCommandChangeClass,
  gt as makeCommandChangeDefeatME,
  je as makeCommandChangeEquip,
  Ne as makeCommandChangeItems,
  jt as makeCommandChangeParallax,
  Jt as makeCommandChangeTileset,
  Mr as makeCommandChangeVehicleBGM,
  br as makeCommandChangeVehicleImage,
  Rt as makeCommandChangeVictoryME,
  De as makeCommandChangeWeapons,
  Ma as makeCommandCommentBody,
  ba as makeCommandCommentHeader,
  Vt as makeCommandCommonEvent,
  Wt as makeCommandControlSwitches,
  Ot as makeCommandControlTimer,
  rs as makeCommandDisableFormationAccess,
  as as makeCommandDisableMenuAccess,
  ts as makeCommandDisableSaveAccess,
  Ze as makeCommandEachActorRecoverAll,
  ms as makeCommandEnableFormationAccess,
  es as makeCommandEnableMenuAccess,
  ss as makeCommandEnableSaveAccess,
  wt as makeCommandEnemyRecoverAll,
  Bt as makeCommandEnemyRecoverAllEach,
  ht as makeCommandEnemyTransform,
  hs as makeCommandFadeInScreen,
  pt as makeCommandFadeOutBGM,
  It as makeCommandFadeOutBGS,
  Ds as makeCommandFadeOutScreen,
  fs as makeCommandFlashScreen,
  st as makeCommandGainActorHP,
  nt as makeCommandGainActorMP,
  mt as makeCommandGainActorTP,
  Be as makeCommandGainArmor,
  we as makeCommandGainArmorByVariable,
  bs as makeCommandGainGold,
  Ns as makeCommandGainGoldByVariable,
  ve as makeCommandGainItem,
  Le as makeCommandGainItemV,
  fe as makeCommandGainWeapon,
  Fe as makeCommandGainWeaponV,
  kr as makeCommandGetOnOffVehicle,
  $t as makeCommandHideMapName,
  Yt as makeCommandInputNumber,
  rt as makeCommandLoseActorHP,
  it as makeCommandLoseActorMP,
  ot as makeCommandLoseActorTP,
  Ve as makeCommandLoseArmor,
  Ge as makeCommandLoseArmorByVariable,
  Ms as makeCommandLoseGold,
  vs as makeCommandLoseGoldByVariable,
  Pe as makeCommandLoseItem,
  Oe as makeCommandLoseItemV,
  xe as makeCommandLoseWeapon,
  Ue as makeCommandLoseWeaponV,
  Ps as makeCommandMovePicture,
  At as makeCommandPlayBGM,
  Et as makeCommandPlayBGS,
  _t as makeCommandPlayME,
  Cs as makeCommandPlayMovie,
  yt as makeCommandPlaySE,
  gs as makeCommandPluginCommandMZ,
  qe as makeCommandRemoveActorStateEach,
  We as makeCommandRemoveActorStateTarget,
  Ke as makeCommandRemoveActorStateVariable,
  Ut as makeCommandRemoveEachEnemyState,
  Ft as makeCommandRemoveEnemyState,
  ks as makeCommandRemovePartyMember,
  ct as makeCommandResumeBGM,
  lt as makeCommandSaveBGM,
  Us as makeCommandScriptArray,
  Pa as makeCommandScriptBody,
  La as makeCommandScriptHeader,
  Qt as makeCommandScrollMap,
  ls as makeCommandScrollingTextBody,
  ds as makeCommandScrollingTextHeader,
  Kt as makeCommandSelectItem,
  Nr as makeCommandSetVehicleLocation,
  vr as makeCommandSetVehicleLocationFromVariables,
  Os as makeCommandSetWeatherEffect,
  _s as makeCommandSetupChoice,
  Fs as makeCommandShakeScreen,
  Vs as makeCommandShopProcessing,
  dt as makeCommandShowAnimation,
  St as makeCommandShowBalloonIcon,
  cs as makeCommandShowChoiceItem,
  Zt as makeCommandShowMapName,
  gd as makeCommandShowMessage,
  Sd as makeCommandShowMessageBody,
  Ls as makeCommandShowPicture,
  pr as makeCommandSystemBattleCount,
  cr as makeCommandSystemEscapeCount,
  dr as makeCommandSystemSaveCount,
  ir as makeCommandSystemTimer,
  lr as makeCommandSystemWinCount,
  $e as makeCommandTargetActorRecoverAll,
  Je as makeCommandTargetActorRecoverAllSelectV,
  xs as makeCommandTintScreen,
  Er as makeCommandVariableFromActorStatusData,
  _r as makeCommandVariableFromArmor,
  yr as makeCommandVariableFromConstant,
  Cr as makeCommandVariableFromEnemyData,
  Rr as makeCommandVariableFromItemData,
  sr as makeCommandVariableFromMapId,
  or as makeCommandVariableFromPartyGold,
  rr as makeCommandVariableFromPartyMembers,
  mr as makeCommandVariableFromPartySteps,
  nr as makeCommandVariableFromPlaytime,
  gr as makeCommandVariableFromRandom,
  Sr as makeCommandVariableFromScript,
  Ir as makeCommandVariableFromTempLastData,
  tr as makeCommandVariableFromVariable,
  ur as makeCommandVariableFromWeapon,
  G as makeCommentArray,
  ns as makeCommentCommandArray,
  Cm as makeCommonEventData,
  h as makeDamage,
  ln as makeDataNames,
  $a as makeDropItem,
  _e as makeEditorSetting,
  No as makeEnemyAction,
  vo as makeEnemyData,
  Xa as makeEventPageCondition,
  pn as makeGameInitial,
  Ie as makeItemCategories,
  nn as makeItemCategoriesFromArray,
  Ho as makeItemData,
  Co as makeMapData,
  Eo as makeMapEvent,
  Ka as makeMapEventIamge,
  _o as makeMapEventPage,
  yo as makeMapFileInfo,
  Ro as makeMapInfoData,
  Te as makeMenuCommandsEnabled,
  dn as makeMenuCommandsEnabledFromArray,
  Za as makeParamArray,
  Z as makeParamNamesArray,
  X as makeParamNamesFromArray,
  Wo as makeSkillData,
  re as makeSoundsArray,
  me as makeSoundsObject,
  Lo as makeStateData,
  se as makeSystemAdvanced,
  H as makeSystemData,
  yn as makeSystemDataFromMV,
  _n as makeSystemDataMV,
  J as makeTermsBasic,
  z as makeTermsBasicFromArray,
  $ as makeTermsCommandArray,
  ud as makeTermsCommandArrayWithNulls,
  K as makeTermsCommandFromArray,
  Q as makeTermsMessages,
  Ee as makeTitleCommandWindow,
  Rm as makeTroopData,
  qa as makeTroopEventConditions,
  Sm as makeTroopMember,
  L as makeVehicleData,
  Oo as makeWeaponData,
  uo as normalizeDataActor,
  kd as normalizeNote,
  Mo as paramArrayToObject,
  bd as partyAbilityToArray,
  Md as readNote,
  Nd as readNoteEx,
  vd as readNoteObject,
  Ld as regularParamName,
  Pd as regularParamsToArray,
  Od as replaceNote,
  hd as replaceNoteWithHandlers,
  go as repleaceMapEventCommands,
  Dd as resolveItemEffectLabels,
  fd as resolveTraitLabels,
  Fd as setNoteValue,
  xd as specialFlagToArray,
  Ud as specialParamName,
  Bd as specialParamsToArray,
  Cn as textAndDesc,
  ua as toArrayCommonEvent,
  ka as toArrayControlSwitches,
  qt as toArrayInputNumber,
  fa as toArrayOperandActorStatus,
  Fa as toArrayOperandArmorData,
  xa as toArrayOperandConstant,
  Ba as toArrayOperandEnemyStatus,
  wa as toArrayOperandItemData,
  Va as toArrayOperandRandom,
  Ga as toArrayOperandScript,
  Oa as toArrayOperandVariable,
  Ha as toArrayOperandWeaponData,
  va as toArrayScrollingTextBody,
  Na as toArrayScrollingTextHeader,
  Es as toArraySetupChoice,
  Ts as toArraySetupChoiceItem,
  wd as toArrayShowMessageHeader
};
