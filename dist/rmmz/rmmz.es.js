import { q as N, N as u, b as L, m as c, r as S, G as y, v as j, w as Q, E as Z, p as V, u as H, I as U, d as J, f as $, M as aa, am as ea, an as ta, ao as sa, aq as ra, B as D, R as ma, V as oa, P as na, Q as ia, aS as da, aR as pa, az as la, ay as ca, aH as Ea, aI as Ia, X as n } from "../shared/eventCommandCodes.es.js";
import { A as an, C as en, a as tn, c as sn, e as rn, g as mn, h as on, i as nn, j as dn, k as pn, l as ln, n as cn, o as En, s as In, t as An, x as Tn, y as Cn, z as _n, D as Sn, F as yn, H as gn, J as Rn, K as kn, L as Mn, O as Nn, S as un, T as bn, U as Ln, W as Pn, Y as vn, Z as On, _ as hn, $ as Dn, a0 as fn, a1 as Fn, a2 as Bn, a3 as Gn, a4 as xn, a5 as wn, a6 as Vn, a7 as Hn, a8 as Un, a9 as Yn, aa as Wn, ab as qn, ac as Xn, ad as Kn, ae as zn, af as jn, ag as Qn, ah as Zn, ai as Jn, aj as $n, ak as ai, al as ei, ap as ti, ar as si, as as ri, at as mi, au as oi, av as ni, aw as ii, ax as di, aA as pi, aB as li, aC as ci, aD as Ei, aE as Ii, aF as Ai, aG as Ti, aJ as Ci, aK as _i, aL as Si, aM as yi, aN as gi, aO as Ri, aP as ki, aQ as Mi, aT as Ni, aU as ui, aV as bi, aW as Li, aX as Pi, aY as vi } from "../shared/eventCommandCodes.es.js";
import { be as g, bg as R, bh as T, bf as k, aT as Aa, aY as Ta, aV as Ca, as as _a, aZ as Sa, aS as ya, aW as ga, aU as Ra } from "../shared/commands.es.js";
import { C as hi, a as Di, b as fi, c as Fi, E as Bi, d as Gi, e as xi, f as wi, g as Vi, h as Hi, i as Ui, j as Yi, k as Wi, l as qi, m as Xi, n as Ki, o as zi, p as ji, q as Qi, r as Zi, s as Ji, t as $i, u as ad, v as ed, w as td, x as sd, y as rd, F as md, z as od, A as nd, B as id, P as dd, D as pd, G as ld, H as cd, I as Ed, J as Id, R as Ad, K as Td, L as Cd, M as _d, N as Sd, O as yd, Q as gd, S as Rd, T as kd, U as Md, V as Nd, W as ud, X as bd, Y as Ld, Z as Pd, _ as vd, $ as Od, a0 as hd, a1 as Dd, a2 as fd, a3 as Fd, a4 as Bd, a5 as Gd, a6 as xd, a7 as wd, a8 as Vd, a9 as Hd, aa as Ud, ab as Yd, ac as Wd, ad as qd, ae as Xd, af as Kd, ag as zd, ah as jd, ai as Qd, aj as Zd, ak as Jd, al as $d, am as ap, an as ep, ao as tp, ap as sp, aq as rp, ar as mp, at as op, au as np, av as ip, aw as dp, ax as pp, ay as lp, az as cp, aA as Ep, aB as Ip, aC as Ap, aD as Tp, aE as Cp, aF as _p, aG as Sp, aH as yp, aI as gp, aJ as Rp, aK as kp, aL as Mp, aM as Np, aN as up, aO as bp, aP as Lp, aQ as Pp, aR as vp, aX as Op, a_ as hp, a$ as Dp, b0 as fp, b1 as Fp, b2 as Bp, b3 as Gp, b4 as xp, b5 as wp, b6 as Vp, b7 as Hp, b8 as Up, b9 as Yp, ba as Wp, bb as qp, bc as Xp, bd as Kp } from "../shared/commands.es.js";
import { m as r, c as ka, a as Ma } from "../shared/make.es.js";
const Le = (a) => a.parameters[3] === T, Pe = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), ve = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), Oe = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, g, R, a.value] }), he = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, g, T, a.variableId]
}), De = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, k, R, a.value] }), fe = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, k, T, a.variableId]
}), Fe = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Be = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Ge = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, g, R, a.value, !1] }), xe = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, g, T, a.variableId, !1]
}), we = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, k, R, a.value, !1] }), Ve = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, k, T, a.variableId, !1]
}), He = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, g, R, a.value, !1] }), Ue = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, g, T, a.variableId, !1]
}), Ye = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, k, R, a.value, !1] }), We = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, k, T, a.variableId, !1]
}), qe = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), Xe = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), Ke = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), ze = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), je = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), Qe = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), Ze = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Je = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), $e = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), at = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), et = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), tt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), st = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), rt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), mt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), ot = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), nt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), it = (a, e = 0) => ({ code: y, indent: e, parameters: [0, 0, 1, a.skillId] }), dt = (a, e = 0) => ({ code: y, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), pt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), lt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), ct = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), Et = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), It = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), At = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Tt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), Ct = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), _t = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), St = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, d = 0) => ({ code: 322, indent: d, parameters: [a, m, s, t, e, o] }), yt = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), gt = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Rt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), kt = (a, e = 0) => ({
  code: j,
  parameters: [a.actorId, a.name],
  indent: e
}), Mt = (a, e = 0) => ({ code: Q, parameters: [a.actorId, a.nickname], indent: e }), Nt = (a, e = 0) => ({
  code: Z,
  parameters: [a.actorId, a.profile],
  indent: e
}), _ = { direct: 0, variable: 1 }, ut = (a, e = 0) => ({ code: V, indent: e, parameters: Y(0, a) }), bt = (a, e = 0) => ({ code: V, indent: e, parameters: Y(1, a) }), Lt = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: P(0, a)
}), Pt = (a, e = 0) => ({ code: U, indent: e, parameters: P(1, a) }), vt = (a, e = 0) => ({ code: H, indent: e, parameters: P(0, a) }), Ot = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value], Y = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value, e.allowDeath], ht = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Dt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), ft = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Ft = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Bt = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Gt = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), xt = (a, e = 0) => E(ea, a, e), wt = (a, e = 0) => E(ta, a, e), Vt = (a, e = 0) => E(sa, a, e), Ht = (a, e = 0) => E(ra, a, e), Ut = (a, e = 0) => E(J, a, e), Yt = (a, e = 0) => E(aa, a, e), Wt = (a, e = 0) => E($, a, e), qt = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), Xt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), Kt = 0, zt = 1, jt = 2, Qt = (a) => a.parameters[0] === 1, Zt = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: D,
  indent: s,
  parameters: [0, a, e, t]
}), Jt = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: D, indent: s, parameters: [1, a, e, t] }), $t = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: D,
  indent: t,
  parameters: [2, 0, a, e]
}), Na = { plus: 0, minus: 1 }, as = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Na[a ?? "plus"] ?? 0, e ?? 0] });
function es(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const ts = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ss = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), rs = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), ms = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), os = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), ns = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), is = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), ds = (a, e = 0) => ({ code: ma, indent: e, parameters: ua(a ?? {}) }), ps = (a) => ({
  eventId: a[0]
}), ua = (a) => [a.eventId ?? 0], ls = (a) => ({ min: a[0], max: a[1], value: a[2] }), ba = (a) => [a.min, a.max, a.value], cs = (a, e = 0) => ({ code: oa, indent: e, parameters: ba(a) }), Es = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Is = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], As = (a) => ({ variableId: a[0], maxDigits: a[1] }), Ts = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), Cs = (a) => ({ variableId: a[0], itemType: a[1] }), _s = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), Ss = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), ys = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), gs = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), Rs = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), ks = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Ms = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), Ns = (a = 0) => ({ code: 134, parameters: [1], indent: a }), us = (a = 0) => ({ code: 134, parameters: [0], indent: a }), bs = (a = 0) => ({ code: 137, parameters: [1], indent: a }), Ls = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), W = (a) => [a], Ps = (a) => ({ comment: a[0] }), La = (a, e = 0) => ({ code: ia, indent: e, parameters: W(a) }), Pa = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: W(a)
}), vs = (a, e = 0) => a.map(((t, s) => s === 0 ? La(t, e) : Pa(t, e))), va = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Os = (a) => ({ speed: a[0], skip: a[1] }), hs = (a = {}, e = 0) => ({
  code: pa,
  indent: e,
  parameters: va(a)
}), Oa = (a = "") => [a], Ds = (a) => ({ content: a[0] }), fs = (a = "", e = 0) => ({ code: da, indent: e ?? 0, parameters: Oa(a) }), Fs = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Bs = (a) => ({
  index: a[0],
  name: a[1]
}), Gs = (a) => [a.index ?? 0, a.name ?? ""], xs = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), ws = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Vs = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), Hs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Us = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Ys = (a) => ({
  filename: a[0]
}), Ws = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), qs = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Xs = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Ks = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), zs = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), js = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Qs = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Zs = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Js = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: d = 100, opacity: l = 255, blendMode: I = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, d, l, I]
}), $s = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: d, blendMode: l, wait: I = !1, easingType: v = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, d, l, I, v]
}), ar = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), er = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), tr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), sr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), rr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), mr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), ha = (a, e = 0) => ({ code: ca, indent: e, parameters: [a] }), Da = (a, e = 0) => ({
  code: la,
  indent: e,
  parameters: [a]
}), or = (a, e = 0) => a.map(((t, s) => s === 0 ? ha(t, e) : Da(t, e))), nr = 1, ir = 0, b = { item: 0, weapon: 1, armors: 2 }, dr = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const o = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Ea, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: Ia,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, o, s.customPrice ?? 0]
  };
})), pr = 0, lr = 1, cr = 2, Er = 3, Ir = 4, Ar = 5, Tr = 0, Cr = 1, _r = 2, Sr = 3, yr = 4, gr = 0, Rr = 1, kr = 2, Mr = (a) => a.parameters[2] === 1, fa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], Nr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: fa(a, e, t.operation ?? 0)
}), ur = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), br = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Lr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Pr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), vr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), Or = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), hr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), Dr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), fr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Fr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), Fa = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Br = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Ba(a, e) }), Ba = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, Fa[e.param]], Gr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, xr = (a, e) => {
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
}, Ga = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], wr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ga(a, e, t.operation ?? 0)
}), xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], Vr = (a, e) => ({
  code: n,
  indent: 0,
  parameters: xa(a, e, 0)
}), wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], Hr = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: wa(a, e, t.operation ?? 0) }), Va = {
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
}, Ha = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Va[e.param]], Ur = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ha(a, e, t.operation ?? 0)
}), Yr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ua(a, e, t.operation ?? 0)
}), Ua = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ya = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Wr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ya(a, e, t.operation ?? 0)
}), Wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], qr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Wa(a, e, t.operation ?? 0)
}), qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], Xr = (a, e) => ({ code: n, indent: 0, parameters: qa(a, e, 0) }), Kr = (a = 0) => ({ code: 206, indent: a, parameters: [] }), zr = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), jr = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), Qr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), Zr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), Jr = 0, $r = 1, am = 2, Xa = (a) => [...a], em = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Xa(a.parameters)
}), Ka = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", tm = (a) => a.parameters.every(Ka), sm = "bgm", rm = "se", mm = "me", om = "bgs", nm = "battlebacks1", im = "battlebacks2", dm = "characters", pm = "enemies", lm = "faces", cm = "parallaxes", Em = "pictures", Im = "sv_actors", Am = "sv_enemies", Tm = "system", Cm = "tilesets", _m = "titles1", Sm = "titles2", ym = "System.json", gm = "Actors.json", Rm = "Classes.json", km = "Skills.json", Mm = "Items.json", Nm = "Weapons.json", um = "Armors.json", bm = "Enemies.json", Lm = "Troops.json", Pm = "States.json", vm = "Animations.json", Om = "Tilesets.json", hm = "CommonEvents.json", Dm = "MapInfos.json", fm = "data", Fm = "img", Bm = "audio", Gm = "js", f = (a, e) => `\\${a}[${e}]`, xm = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: f(a, s)
}))), wm = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), Vm = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: f("N", e.id)
}))), Hm = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: f("V", t) }))).filter(((e) => e.text !== "")), Um = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), Ym = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), Wm = (a) => ({
  span: a.span ?? 0,
  conditions: za(a.conditions ?? {}),
  list: a.list ?? []
}), qm = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), za = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), ja = (a = {}) => ({
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
}), Xm = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: o
}), Qa = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), Km = ({ list: a = [], conditions: e = ja(), image: t = Qa(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: l = !1, through: I = !1, walkAnime: v = !1, moveSpeed: X = 3, moveType: K = 0, trigger: z = 0 } = {}) => ({
  walkAnime: v,
  stepAnime: l,
  through: I,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: d,
  moveFrequency: s,
  moveSpeed: X,
  moveType: K,
  trigger: z,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), zm = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), jm = (a = {}) => ({
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
}), Qm = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, Zm = (a, e) => a.map(((t) => t ? {
  ...t,
  pages: Za(t, e)
} : null)), Za = (a, e) => a.pages.map(((t) => ({ ...t, list: e(t.list) }))), Ja = { actor: { title: "アクター", options: {
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
} }, $a = { title: "ダメージ", options: {} }, F = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), Jm = (a = {}) => ({
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
}), $m = (a) => ({
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
}), ao = (a = {}) => ({
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
}), eo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), ae = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: d = 0, luk: l = 0 }) => [a, e, t, s, m, o, d, l], to = (a) => {
  const [e, t, s, m, o, d, l, I] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: d, agi: l, luk: I };
}, ee = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), so = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), ro = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => ee())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : ae({
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
}), mo = (a = {}) => ({
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
}), i = "{name}", C = "{name} * {value}%", B = "{name} + {value}%", G = "{value}", te = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: C, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: B, options: {
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
  specialParam: { title: "特殊能力値", format: C, options: {
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
  elementRate: { title: "属性有効度", format: C },
  debuffRate: { title: "弱体有効度", format: C },
  stateRate: { title: "ステート有効度", format: C },
  stateResist: {
    title: "ステート無効",
    format: i
  },
  attackElement: { title: "攻撃属性", format: i },
  attackState: { title: "攻撃ステート", format: B },
  attackSpeed: { title: "攻撃速度補正", format: G },
  attackTimes: {
    title: "攻撃追加回数",
    format: G
  },
  actionPlus: { title: "行動追加", format: C },
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
} }, se = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, oo = (a, e, t) => {
  const s = ka(se);
  return Ma(e, t, s, a.pattern, ((m) => m.dataId));
}, no = (a = {}) => ({
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
  damage: F(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), io = {
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
}, po = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, lo = 0, co = 1, Eo = 2, x = "{name} {value1}%", O = "{value1}% + {value2}", w = "{name} {value1}ターン", M = "{name}", re = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: w },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: w },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: O },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: M },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: O
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: O },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: M
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: M },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: x },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: M
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: x },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: M }
} }, Io = 0, Ao = (a, e, t) => {
  const s = t.find(((o) => o.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, To = { title: "アイテム", options: { consumable: "消耗品" } }, Co = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, _o = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, So = (a = {}) => ({
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
  damage: F(a.damage ?? {}),
  effects: [],
  price: 0
}), yo = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: F(a.damage ?? {}),
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
}), go = "data", Ro = "actor", ko = "map", Mo = "enemy", No = "state", uo = "skill", bo = "item", Lo = "weapon", Po = "armor", vo = "class", Oo = "common_event", ho = "troop", me = {
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
}, Do = () => ({ rpg: { damage: $a, data: Ja, traits: te, itemEffect: re }, global: me }), oe = (a = {}) => ({
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
}), ne = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], ie = (a) => ({
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
}), de = (a) => ({
  item: pe(a),
  skill: le(a),
  equip: ce(a),
  status: Ee(a),
  formation: Ie(a),
  save: Ae(a)
}), pe = (a) => a.menuCommands[0], le = (a) => a.menuCommands[1], ce = (a) => a.menuCommands[2], Ee = (a) => a.menuCommands[3], Ie = (a) => a.menuCommands[4], Ae = (a) => a.menuCommands[5], fo = (a) => a.itemCategories[0], Fo = (a) => a.itemCategories[1], Bo = (a) => a.itemCategories[2], Go = (a) => a.itemCategories[3], Te = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], xo = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Ce = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], wo = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), _e = (a = {}) => ({
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
}), Vo = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), Ho = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], Uo = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), Se = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), h = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), ye = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Yo = { title: "オプション", options: {
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
} }, Wo = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, qo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Xo = {
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
}, Ko = (a = q({})) => ({
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
    messages: _a(a.terms.messages)
  }
}), zo = (a) => q({
  versionId: a.versionId,
  menuCommands: de(a),
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
  sounds: ie(a.sounds),
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
    basic: Ca(a.terms.basic),
    commands: Ta(a.terms.commands),
    params: Aa(a.terms.params),
    messages: a.terms.messages
  }
}), q = (a) => {
  const e = Re(a.size);
  return {
    ..._e(a.options),
    titleCommandWindow: Se(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: ne(a.sounds),
    editor: ye(a.editing),
    advanced: oe(a.advanced),
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
    airship: h(a.vehicles?.airship),
    boat: h(a.vehicles?.boat),
    ship: h(a.vehicles?.ship),
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
    testBattlers: ke(a.battleTest?.testBattlers, Me),
    battleBgm: r(a.bgm?.battleBgm),
    victoryMe: r(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ge(a.terms ?? {}),
    itemCategories: Te(a.itemCategories),
    partyMembers: p(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: Ce(a.menuCommands)
  };
}, ge = (a) => ({ basic: Ra(a.basic ?? {}), commands: ga(a.commands ?? {}), params: ya(a.params ?? {}), messages: Sa(a.messages ?? {}) }), p = (a) => a ? [...a] : [], Re = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, ke = (a, e) => a ? a.map(e) : [], Me = (a) => a ? {
  actorId: a.actorId,
  equips: p(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, jo = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Qo = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Zo = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  an as ABORT_BATTLE,
  Kt as BATTLE_DIRECT,
  jt as BATTLE_ENCOUNT,
  D as BATTLE_PROCESSING,
  zt as BATTLE_VARIABLE,
  en as CHANGE_ACTOR_IMAGES,
  tn as CHANGE_ACTOR_STATE,
  L as CHANGE_ARMORS,
  sn as CHANGE_BATTLE_BACKGROUND,
  J as CHANGE_BATTLE_BGM,
  rn as CHANGE_CLASS,
  $ as CHANGE_DEFEAT_ME,
  mn as CHANGE_ENCOUNTER,
  on as CHANGE_ENEMY_HP,
  nn as CHANGE_ENEMY_MP,
  dn as CHANGE_ENEMY_STATE,
  pn as CHANGE_ENEMY_TP,
  ln as CHANGE_EQUIP,
  c as CHANGE_EXP,
  cn as CHANGE_FORMATION_ACCESS,
  En as CHANGE_GOLD,
  V as CHANGE_HP,
  N as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  In as CHANGE_MAP_NAME_DISPLAY,
  An as CHANGE_MENU_ACCESS,
  H as CHANGE_MP,
  j as CHANGE_NAME,
  Q as CHANGE_NICKNAME,
  Tn as CHANGE_PARALLAX,
  Cn as CHANGE_PARAMETER,
  _n as CHANGE_PARTY_MEMBER,
  Sn as CHANGE_PLAYER_FOLLOWERS,
  Z as CHANGE_PROFILE,
  yn as CHANGE_SAVE_ACCESS,
  y as CHANGE_SKILL,
  gn as CHANGE_TILESET,
  U as CHANGE_TP,
  Rn as CHANGE_TRANSPARENCY,
  kn as CHANGE_VEHICLE_BGM,
  Mn as CHANGE_VEHICLE_IMAGE,
  aa as CHANGE_VICTORY_ME,
  u as CHANGE_WEAPONS,
  Nn as CHANGE_WINDOW_COLOR,
  hi as COLLAPS_BOSS,
  Di as COLLAPS_INSTANT,
  fi as COLLAPS_NONE,
  Fi as COLLAPS_NORMAL,
  na as COMMENT_BODY,
  ia as COMMENT_HEAD,
  ma as COMMON_EVENT,
  un as CONDITIONAL_BRANCH,
  bn as CONDITIONAL_BRANCH_ELSE,
  Ln as CONTROL_SELF_SWITCH,
  oa as CONTROL_SWITCHES,
  Pn as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  nr as CUSTOM_PRICE,
  $a as DEFAULT_DAMAGE_LABELS,
  me as DEFAULT_GLOBAL_LABELS,
  To as DEFAULT_ITEM_LABELS,
  Co as DEFAULT_SKILL_LABELS,
  Yo as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Wo as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  _o as DEFAULT_USABLE_ITEM_LABELS,
  Qo as DIRECTION,
  Bi as EFFECT_ADD_BUFF,
  Gi as EFFECT_ADD_DEBUFF,
  xi as EFFECT_ADD_STATE,
  wi as EFFECT_COMMON_EVENT,
  Vi as EFFECT_GAIN_TP,
  Hi as EFFECT_GROW,
  Ui as EFFECT_LEARN_SKILL,
  Yi as EFFECT_RECOVER_HP,
  Wi as EFFECT_RECOVER_MP,
  qi as EFFECT_REMOVE_BUFF,
  Xi as EFFECT_REMOVE_DEBUFF,
  Ki as EFFECT_REMOVE_STATE,
  zi as EFFECT_SPECIAL,
  vn as ENEMY_APPEAR,
  On as ENEMY_RECOVER_ALL,
  hn as ENEMY_TRANSFORM,
  Dn as ERASE_EVENT,
  fn as ERASE_PICTURE,
  Fn as EXIT_EVENT_PROCESSING,
  ji as EXTRA_PARAM_CEV,
  Qi as EXTRA_PARAM_CNT,
  Zi as EXTRA_PARAM_CRI,
  Ji as EXTRA_PARAM_EVA,
  $i as EXTRA_PARAM_HIT,
  ad as EXTRA_PARAM_HRG,
  ed as EXTRA_PARAM_MEV,
  td as EXTRA_PARAM_MRF,
  sd as EXTRA_PARAM_MRG,
  rd as EXTRA_PARAM_TRG,
  Bn as FADEIN_SCREEN,
  Gn as FADEOUT_BGM,
  xn as FADEOUT_BGS,
  wn as FADEOUT_SCREEN,
  gm as FILENAME_ACTORS,
  vm as FILENAME_ANIMATIONS,
  um as FILENAME_ARMORS,
  Rm as FILENAME_CLASSES,
  hm as FILENAME_COMMON_EVENTS,
  bm as FILENAME_ENEMIES,
  Mm as FILENAME_ITEMS,
  Dm as FILENAME_MAP_INFOS,
  km as FILENAME_SKILLS,
  Pm as FILENAME_STATES,
  ym as FILENAME_SYSTEM,
  Om as FILENAME_TILESET,
  Lm as FILENAME_TROOPS,
  Nm as FILENAME_WEAPONS,
  md as FLAG_ID_AUTO_BATTLE,
  od as FLAG_ID_GUARD,
  nd as FLAG_ID_PRESERVE_TP,
  id as FLAG_ID_SUBSTITUTE,
  Vn as FLASH_SCREEN,
  Bm as FOLDER_AUDIO,
  sm as FOLDER_AUDIO_BGM,
  om as FOLDER_AUDIO_BGS,
  mm as FOLDER_AUDIO_ME,
  rm as FOLDER_AUDIO_SE,
  fm as FOLDER_DATA,
  Fm as FOLDER_IMG,
  nm as FOLDER_IMG_BATTLEBACK1,
  im as FOLDER_IMG_BATTLEBACK2,
  dm as FOLDER_IMG_CHACTERS,
  pm as FOLDER_IMG_ENEMIES,
  lm as FOLDER_IMG_FACES,
  cm as FOLDER_IMG_PARALLACES,
  Em as FOLDER_IMG_PICTURES,
  Im as FOLDER_IMG_SV_ACTORS,
  Am as FOLDER_IMG_SV_ENEMIES,
  Tm as FOLDER_IMG_SYSTEM,
  Cm as FOLDER_IMG_TILESETS,
  _m as FOLDER_IMG_TITLES1,
  Sm as FOLDER_IMG_TITLES2,
  Gm as FOLDER_JS,
  Hn as FORCE_ACTION,
  Un as GAME_OVER,
  Yn as GATHER_FOLLOWERS,
  Wn as GET_LOCATION_INFO,
  qn as GET_ONOFF_VEHICLE,
  lo as HITTYPE_CERTAIN,
  Eo as HITTYPE_MAGICAL,
  co as HITTYPE_PHYSICAL,
  Xn as INPUT_NUMBER,
  Kn as LABEL,
  po as LABELS_DATA_WEAPON,
  qo as LABELS_SYSTEM_BATTLER_PARAMS,
  Xo as LABELS_SYSTEM_GAME_COMMANDS,
  zn as LABEL_JUMP,
  Ja as LABEL_SET_DATA,
  re as LABEL_SET_ITEM_EFFECT,
  te as LABEL_SET_TRAIT,
  jn as LOOP,
  Qn as LOOP_BREAK,
  go as MODULE_DATA,
  Zn as MOVE_PICTURE,
  Jn as NAME_INPUT_PROCESSING,
  ir as NORMAL_PRICE,
  $n as NO_OPERATION,
  ai as OPEN_MENU_SCREEN,
  ei as OPEN_SAVE_SCREEN,
  Tr as OPERAND_CONSTANT,
  Sr as OPERAND_GAMEDATA,
  _r as OPERAND_RANDOM,
  yr as OPERAND_SCRIPT,
  Cr as OPERAND_VARIABLE,
  lr as OPERATION_ADD,
  Ir as OPERATION_DIVIDE,
  Ar as OPERATION_MOD,
  Er as OPERATION_MULTIPLY,
  pr as OPERATION_SET,
  cr as OPERATION_SUBTRACT,
  dd as PARTY_ABILITY_CANCEL_SURPRISE,
  pd as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ld as PARTY_ABILITY_ENCOUNTER_HALF,
  cd as PARTY_ABILITY_ENCOUNTER_NONE,
  Ed as PARTY_ABILITY_GOLD_DOUBLE,
  Id as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ea as PLAY_BGM,
  ta as PLAY_BGS,
  sa as PLAY_ME,
  ti as PLAY_MOVIE,
  ra as PLAY_SE,
  si as PLUGIN_COMMAND_MV,
  ri as PLUGIN_COMMAND_MZ,
  mi as RECOVER_ALL,
  Ad as REGULAR_PARAM_AGI,
  Td as REGULAR_PARAM_ATK,
  Cd as REGULAR_PARAM_DEF,
  _d as REGULAR_PARAM_LUK,
  Sd as REGULAR_PARAM_MATK,
  yd as REGULAR_PARAM_MAX_HP,
  gd as REGULAR_PARAM_MAX_MP,
  Rd as REGULAR_PARAM_MDEF,
  oi as RESUME_BGM,
  ni as RETURN_TO_TITLE_SCREEN,
  ii as ROTATE_PICTURE,
  di as SAVE_BGM,
  io as SCHEMA_DATA_WEAPON,
  ca as SCRIPT_EVAL,
  la as SCRIPT_EVAL_BODY,
  pi as SCROLL_MAP,
  li as SELECT_ITEM,
  ci as SET_EVENT_LOCATION,
  Ei as SET_MOVEMENT_ROUTE,
  Ii as SET_VEHICLE_LOCATION,
  Ai as SET_WEATHER_EFFECT,
  Ti as SHAKE_SCREEN,
  Ea as SHOP_PROCESSING,
  Ia as SHOP_PROCESSING_BODY,
  Ci as SHOW_ANIMATION,
  _i as SHOW_BALLOON_ICON,
  Si as SHOW_BATTLE_ANIMATION,
  yi as SHOW_CHOICES,
  gi as SHOW_CHOICES_ITEM,
  Ri as SHOW_MESSAGE,
  ki as SHOW_MESSAGE_BODY,
  Mi as SHOW_PICTURE,
  pa as SHOW_SCROLLING_TEXT,
  da as SHOW_SCROLLING_TEXT_BODY,
  Ni as SKIP,
  Io as SPECIAL_EFFECT_ESCAPE,
  kd as SPECIAL_PARAM_EXR,
  Md as SPECIAL_PARAM_FDR,
  Nd as SPECIAL_PARAM_GRD,
  ud as SPECIAL_PARAM_MCR,
  bd as SPECIAL_PARAM_MDR,
  Ld as SPECIAL_PARAM_PDR,
  Pd as SPECIAL_PARAM_PHA,
  vd as SPECIAL_PARAM_REC,
  Od as SPECIAL_PARAM_TCR,
  hd as SPECIAL_PARAM_TGR,
  Ro as SRC_DATA_ACTOR,
  Po as SRC_DATA_ARMOR,
  vo as SRC_DATA_CLASS,
  Oo as SRC_DATA_COMMON_EVNET,
  Mo as SRC_DATA_ENEMY,
  bo as SRC_DATA_ITEMS,
  ko as SRC_DATA_MAP,
  uo as SRC_DATA_SKILL,
  No as SRC_DATA_STATE,
  ho as SRC_DATA_TROOP,
  Lo as SRC_DATA_WEAPON,
  ui as STOP_SE,
  bi as TINT_PICTURE,
  Li as TINT_SCREEN,
  Dd as TRAIT_ACTION_PLUS,
  fd as TRAIT_ATTACK_ELEMENT,
  Fd as TRAIT_ATTACK_SKILL,
  Bd as TRAIT_ATTACK_SPEED,
  Gd as TRAIT_ATTACK_STATE,
  xd as TRAIT_ATTACK_TIMES,
  wd as TRAIT_COLLAPSE_TYPE,
  Vd as TRAIT_DEBUFF_RATE,
  Hd as TRAIT_ELEMENT_RATE,
  Ud as TRAIT_EQUIP_ARMOR_TYPE,
  Yd as TRAIT_EQUIP_LOCK,
  Wd as TRAIT_EQUIP_SEAL,
  qd as TRAIT_EQUIP_WEAPON_TYPE,
  Xd as TRAIT_PARAM,
  Kd as TRAIT_PARTY_ABILITY,
  zd as TRAIT_SKILL_ADD,
  jd as TRAIT_SKILL_SEAL,
  Qd as TRAIT_SKILL_TYPE_ADD,
  Zd as TRAIT_SKILL_TYPE_SEAL,
  Jd as TRAIT_SLOT_TYPE,
  $d as TRAIT_SPARAM,
  ap as TRAIT_SPECIAL_FLAG,
  ep as TRAIT_STATE_RATE,
  tp as TRAIT_STATE_RESIST,
  sp as TRAIT_XPARAM,
  Pi as TRANSFER_PLAYER,
  kr as TYPE_ARMOR,
  gr as TYPE_ITEM,
  Rr as TYPE_WEAPON,
  am as VEHICLE_AIRSHIP,
  Jr as VEHICLE_BOAT,
  $r as VEHICLE_SHIP,
  vi as WAIT,
  rp as buildNoteFromNormalized,
  Hs as cloneChoices,
  em as cloneEventCommand,
  Xa as cloneParameters,
  mp as collapsOptionsToArray,
  Ps as convertCommentArrayToObject,
  _a as convertTermsMessageMZtoMV,
  Vm as createActorControlChars,
  f as createControlCharFormat,
  de as createMenuCommandState,
  op as createNoteEntity,
  Hm as createSystemVariableControlChars,
  np as defineGameDataSources,
  ip as defineSystemItems,
  dp as defineTraitCollapseType,
  pp as defineTraitExtraParam,
  lp as defineTraitItems,
  cp as defineTraitPartyAbility,
  Ep as defineTraitRegularParam,
  Ip as defineTraitSpecialFlag,
  Ap as defineTraitSpecialParam,
  Tp as extraParamName,
  Cp as extraParamsToArray,
  Zo as extractFileName,
  Ao as formatItemEffectText,
  oo as formatTraitText,
  Pe as fromArrayChangeItems,
  Fe as fromArrayChangeWeapons,
  ps as fromArrayCommonEvent,
  ls as fromArrayControlSwitches,
  ts as fromArrayEnemyTransform,
  As as fromArrayInputNumber,
  Ys as fromArrayPlayMovie,
  qs as fromArrayPluginCommandMZ,
  Ds as fromArrayScrollingTextBody,
  Os as fromArrayScrollingTextHeader,
  Cs as fromArraySelectItem,
  xs as fromArraySetupChoice,
  Bs as fromArraySetupChoiceItem,
  _p as fromArrayShowMessageHeader,
  xm as fromStringArray,
  xr as getActorValue,
  Bo as getArmorCategoryEnabled,
  Sp as getArmorTypes,
  wm as getControlChars,
  yp as getElementTypes,
  Gr as getEnemyValue,
  ce as getEquipCommandEnabled,
  gp as getEquipTypes,
  Ie as getFormationCommandEnabled,
  fo as getItemCategoryEnabled,
  pe as getItemCommandEnabled,
  Rp as getItemIdFromItemCommand,
  Go as getKeyItemCategoryEnabled,
  kp as getNoteValue,
  Uo as getParamNames,
  Ae as getSaveCommandEnabled,
  le as getSkillCommandEnabled,
  Mp as getSkillTypes,
  Ee as getStatusCommandEnabled,
  Np as getSwitches,
  up as getVariableNames,
  Fo as getWeaponCategoryEnabled,
  bp as getWeaponTypes,
  tm as isCloneableCommand,
  Qt as isCommandBattleProcessingVariable,
  Mr as isCommandOperandVariables,
  Lp as isUsingVariableItemCommand,
  Le as isUsingVaribleCommandChangingItems,
  Do as labelsRegistry,
  Jm as makeActorData,
  ao as makeArmorData,
  Gt as makeAudioCommand,
  Wm as makeBattleEventPage,
  _e as makeBooleanOptions,
  eo as makeClassData,
  ms as makeCommandAddEachEnemyState,
  ss as makeCommandAddEnemyState,
  Xs as makeCommandAddPartyMember,
  At as makeCommandAddStateByVariable,
  Et as makeCommandAddStateEachActor,
  lt as makeCommandAddStateTargetActor,
  E as makeCommandAudioAny,
  Zt as makeCommandBattleProcessingDirect,
  $t as makeCommandBattleProcessingEncount,
  Jt as makeCommandBattleProcessingVariable,
  St as makeCommandChangeActorImages,
  kt as makeCommandChangeActorName,
  Mt as makeCommandChangeActorNickName,
  Nt as makeCommandChangeActorProfile,
  Ut as makeCommandChangeBattleBGM,
  Xt as makeCommandChangeBattleBackground,
  Ct as makeCommandChangeClass,
  Wt as makeCommandChangeDefeatME,
  _t as makeCommandChangeEquip,
  ve as makeCommandChangeItems,
  _s as makeCommandChangeParallax,
  Rs as makeCommandChangeTileset,
  jr as makeCommandChangeVehicleBGM,
  zr as makeCommandChangeVehicleImage,
  Yt as makeCommandChangeVictoryME,
  Be as makeCommandChangeWeapons,
  Pa as makeCommandCommentBody,
  La as makeCommandCommentHeader,
  ds as makeCommandCommonEvent,
  cs as makeCommandControlSwitches,
  as as makeCommandControlTimer,
  bs as makeCommandDisableFormationAccess,
  ks as makeCommandDisableMenuAccess,
  Ns as makeCommandDisableSaveAccess,
  Ls as makeCommandEnableFormationAccess,
  Ms as makeCommandEnableMenuAccess,
  us as makeCommandEnableSaveAccess,
  is as makeCommandEnemyRecoverAll,
  ns as makeCommandEnemyRecoverAllEach,
  es as makeCommandEnemyTransform,
  er as makeCommandFadeInScreen,
  Dt as makeCommandFadeOutBGM,
  Bt as makeCommandFadeOutBGS,
  tr as makeCommandFadeOutScreen,
  sr as makeCommandFlashScreen,
  ot as makeCommandForgetSkill,
  pt as makeCommandForgetSkillByVariable,
  it as makeCommandForgetSkillEachActor,
  ut as makeCommandGainActorHP,
  vt as makeCommandGainActorMP,
  Lt as makeCommandGainActorTP,
  He as makeCommandGainArmor,
  Ue as makeCommandGainArmorByVariable,
  Ke as makeCommandGainExpByVariable,
  qe as makeCommandGainExpDirect,
  Ze as makeCommandGainExpTargetAndOperandVariable,
  je as makeCommandGainExpTargetVariable,
  zs as makeCommandGainGold,
  Qs as makeCommandGainGoldByVariable,
  Oe as makeCommandGainItem,
  he as makeCommandGainItemV,
  Ge as makeCommandGainWeapon,
  xe as makeCommandGainWeaponV,
  Kr as makeCommandGetOnOffVehicle,
  gs as makeCommandHideMapName,
  Es as makeCommandInputNumber,
  mt as makeCommandLearnSkill,
  dt as makeCommandLearnSkillByVariable,
  nt as makeCommandLearnSkillEachActor,
  at as makeCommandLevelDownActor,
  tt as makeCommandLevelDownActorByVariable,
  rt as makeCommandLevelDownEachActors,
  $e as makeCommandLevelUpActor,
  et as makeCommandLevelUpActorByVariable,
  st as makeCommandLevelUpEachActors,
  bt as makeCommandLoseActorHP,
  Ot as makeCommandLoseActorMP,
  Pt as makeCommandLoseActorTP,
  Ye as makeCommandLoseArmor,
  We as makeCommandLoseArmorByVariable,
  ze as makeCommandLoseExpByVariable,
  Xe as makeCommandLoseExpDirect,
  Je as makeCommandLoseExpTargetAndOperandVariable,
  Qe as makeCommandLoseExpTargetVariable,
  js as makeCommandLoseGold,
  Zs as makeCommandLoseGoldByVariable,
  De as makeCommandLoseItem,
  fe as makeCommandLoseItemV,
  we as makeCommandLoseWeapon,
  Ve as makeCommandLoseWeaponV,
  $s as makeCommandMovePicture,
  xt as makeCommandPlayBGM,
  wt as makeCommandPlayBGS,
  Vt as makeCommandPlayME,
  Us as makeCommandPlayMovie,
  Ht as makeCommandPlaySE,
  Ws as makeCommandPluginCommandMZ,
  yt as makeCommandRecoverAllEachActors,
  gt as makeCommandRecoverAllTargetActor,
  Rt as makeCommandRecoverAllTargetActorByVariable,
  ct as makeCommandRemoveActorTargetState,
  os as makeCommandRemoveEachEnemyState,
  rs as makeCommandRemoveEnemyState,
  Ks as makeCommandRemovePartyMember,
  Tt as makeCommandRemoveStateByVariable,
  It as makeCommandRemoveStateEachActors,
  Ft as makeCommandResumeBGM,
  ft as makeCommandSaveBGM,
  or as makeCommandScriptArray,
  Da as makeCommandScriptBody,
  ha as makeCommandScriptHeader,
  Ss as makeCommandScrollMap,
  fs as makeCommandScrollingTextBody,
  hs as makeCommandScrollingTextHeader,
  Ts as makeCommandSelectItem,
  Qr as makeCommandSetVehicleLocation,
  Zr as makeCommandSetVehicleLocationFromVariables,
  ar as makeCommandSetWeatherEffect,
  Vs as makeCommandSetupChoice,
  rr as makeCommandShakeScreen,
  dr as makeCommandShopProcessing,
  ht as makeCommandShowAnimation,
  qt as makeCommandShowBalloonIcon,
  Fs as makeCommandShowChoiceItem,
  ys as makeCommandShowMapName,
  Pp as makeCommandShowMessage,
  vp as makeCommandShowMessageBody,
  Js as makeCommandShowPicture,
  Dr as makeCommandSystemBattleCount,
  Fr as makeCommandSystemEscapeCount,
  hr as makeCommandSystemSaveCount,
  Or as makeCommandSystemTimer,
  fr as makeCommandSystemWinCount,
  mr as makeCommandTintScreen,
  wr as makeCommandVariableFromActorStatusData,
  Vr as makeCommandVariableFromArmor,
  Hr as makeCommandVariableFromConstant,
  Ur as makeCommandVariableFromEnemyData,
  Yr as makeCommandVariableFromItemData,
  ur as makeCommandVariableFromMapId,
  Pr as makeCommandVariableFromPartyGold,
  br as makeCommandVariableFromPartyMembers,
  Lr as makeCommandVariableFromPartySteps,
  vr as makeCommandVariableFromPlaytime,
  Wr as makeCommandVariableFromRandom,
  qr as makeCommandVariableFromScript,
  Br as makeCommandVariableFromTempLastData,
  Nr as makeCommandVariableFromVariable,
  Xr as makeCommandVariableFromWeapon,
  W as makeCommentArray,
  vs as makeCommentCommandArray,
  Um as makeCommonEventData,
  F as makeDamage,
  Ho as makeDataNames,
  ee as makeDropItem,
  ye as makeEditorSetting,
  so as makeEnemyAction,
  ro as makeEnemyData,
  ja as makeEventPageCondition,
  Vo as makeGameInitial,
  Te as makeItemCategories,
  xo as makeItemCategoriesFromArray,
  So as makeItemData,
  jm as makeMapData,
  Xm as makeMapEvent,
  Qa as makeMapEventIamge,
  Km as makeMapEventPage,
  zm as makeMapFileInfo,
  Qm as makeMapInfoData,
  Ce as makeMenuCommandsEnabled,
  wo as makeMenuCommandsEnabledFromArray,
  ae as makeParamArray,
  ya as makeParamNamesArray,
  Aa as makeParamNamesFromArray,
  yo as makeSkillData,
  ne as makeSoundsArray,
  ie as makeSoundsObject,
  mo as makeStateData,
  oe as makeSystemAdvanced,
  q as makeSystemData,
  zo as makeSystemDataFromMV,
  Ko as makeSystemDataMV,
  Ra as makeTermsBasic,
  Ca as makeTermsBasicFromArray,
  ga as makeTermsCommandArray,
  Op as makeTermsCommandArrayWithNulls,
  Ta as makeTermsCommandFromArray,
  Sa as makeTermsMessages,
  Se as makeTitleCommandWindow,
  Ym as makeTroopData,
  za as makeTroopEventConditions,
  qm as makeTroopMember,
  h as makeVehicleData,
  no as makeWeaponData,
  $m as normalizeDataActor,
  hp as normalizeNote,
  to as paramArrayToObject,
  Dp as partyAbilityToArray,
  fp as readNote,
  Fp as readNoteEx,
  Bp as readNoteObject,
  Gp as regularParamName,
  xp as regularParamsToArray,
  wp as replaceNote,
  Vp as replaceNoteWithHandlers,
  Zm as repleaceMapEventCommands,
  Hp as resolveItemEffectLabels,
  Up as resolveTraitLabels,
  Yp as setNoteValue,
  Wp as specialFlagToArray,
  qp as specialParamName,
  Xp as specialParamsToArray,
  jo as textAndDesc,
  ua as toArrayCommonEvent,
  ba as toArrayControlSwitches,
  Is as toArrayInputNumber,
  Ga as toArrayOperandActorStatus,
  xa as toArrayOperandArmorData,
  wa as toArrayOperandConstant,
  Ha as toArrayOperandEnemyStatus,
  Ua as toArrayOperandItemData,
  Ya as toArrayOperandRandom,
  Wa as toArrayOperandScript,
  fa as toArrayOperandVariable,
  qa as toArrayOperandWeaponData,
  Oa as toArrayScrollingTextBody,
  va as toArrayScrollingTextHeader,
  ws as toArraySetupChoice,
  Gs as toArraySetupChoiceItem,
  Kp as toArrayShowMessageHeader
};
