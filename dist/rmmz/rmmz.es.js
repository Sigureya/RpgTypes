import { q as N, N as u, b as L, m as c, r as S, G as y, v as Q, w as Z, E as J, p as V, u as H, I as U, d as $, f as aa, M as ea, am as ta, an as sa, ao as ra, aq as ma, B as D, R as oa, V as na, P as ia, Q as da, aS as pa, aR as la, az as ca, ay as Ea, aH as Ia, aI as Aa, X as i } from "../shared/eventCommandCodes.es.js";
import { A as sn, C as rn, a as mn, c as on, e as nn, g as dn, h as pn, i as ln, j as cn, k as En, l as In, n as An, o as Tn, s as Cn, t as _n, x as Sn, y as yn, z as gn, D as Rn, F as kn, H as Mn, J as Nn, K as un, L as bn, O as Ln, S as Pn, T as vn, U as On, W as hn, Y as Dn, Z as fn, _ as Fn, $ as Bn, a0 as Gn, a1 as xn, a2 as wn, a3 as Vn, a4 as Hn, a5 as Un, a6 as Yn, a7 as Wn, a8 as qn, a9 as Xn, aa as Kn, ab as zn, ac as jn, ad as Qn, ae as Zn, af as Jn, ag as $n, ah as ai, ai as ei, aj as ti, ak as si, al as ri, ap as mi, ar as oi, as as ni, at as ii, au as di, av as pi, aw as li, ax as ci, aA as Ei, aB as Ii, aC as Ai, aD as Ti, aE as Ci, aF as _i, aG as Si, aJ as yi, aK as gi, aL as Ri, aM as ki, aN as Mi, aO as Ni, aP as ui, aQ as bi, aT as Li, aU as Pi, aV as vi, aW as Oi, aX as hi, aY as Di } from "../shared/eventCommandCodes.es.js";
import { be as g, bg as R, bh as T, bf as k, aT as Ta, aY as Ca, aV as _a, as as Sa, aZ as ya, aS as ga, aW as Ra, aU as ka } from "../shared/commands.es.js";
import { C as Fi, a as Bi, b as Gi, c as xi, E as wi, d as Vi, e as Hi, f as Ui, g as Yi, h as Wi, i as qi, j as Xi, k as Ki, l as zi, m as ji, n as Qi, o as Zi, p as Ji, q as $i, r as ad, s as ed, t as td, u as sd, v as rd, w as md, x as od, y as nd, F as id, z as dd, A as pd, B as ld, P as cd, D as Ed, G as Id, H as Ad, I as Td, J as Cd, R as _d, K as Sd, L as yd, M as gd, N as Rd, O as kd, Q as Md, S as Nd, T as ud, U as bd, V as Ld, W as Pd, X as vd, Y as Od, Z as hd, _ as Dd, $ as fd, a0 as Fd, a1 as Bd, a2 as Gd, a3 as xd, a4 as wd, a5 as Vd, a6 as Hd, a7 as Ud, a8 as Yd, a9 as Wd, aa as qd, ab as Xd, ac as Kd, ad as zd, ae as jd, af as Qd, ag as Zd, ah as Jd, ai as $d, aj as ap, ak as ep, al as tp, am as sp, an as rp, ao as mp, ap as op, aq as np, ar as ip, at as dp, au as pp, av as lp, aw as cp, ax as Ep, ay as Ip, az as Ap, aA as Tp, aB as Cp, aC as _p, aD as Sp, aE as yp, aF as gp, aG as Rp, aH as kp, aI as Mp, aJ as Np, aK as up, aL as bp, aM as Lp, aN as Pp, aO as vp, aP as Op, aQ as hp, aR as Dp, aX as fp, a_ as Fp, a$ as Bp, b0 as Gp, b1 as xp, b2 as wp, b3 as Vp, b4 as Hp, b5 as Up, b6 as Yp, b7 as Wp, b8 as qp, b9 as Xp, ba as Kp, bb as zp, bc as jp, bd as Qp } from "../shared/commands.es.js";
import { m as r, c as Ma, a as Na } from "../shared/make.es.js";
const ve = (a) => a.parameters[3] === T, Oe = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), he = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), De = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, g, R, a.value] }), fe = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, g, T, a.variableId]
}), Fe = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, k, R, a.value] }), Be = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, k, T, a.variableId]
}), Ge = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), xe = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), we = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, g, R, a.value, !1] }), Ve = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, g, T, a.variableId, !1]
}), He = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, k, R, a.value, !1] }), Ue = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, k, T, a.variableId, !1]
}), Ye = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, g, R, a.value, !1] }), We = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, g, T, a.variableId, !1]
}), qe = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, k, R, a.value, !1] }), Xe = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, k, T, a.variableId, !1]
}), Ke = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), ze = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), je = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), Qe = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), Ze = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), Je = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), $e = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), at = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), et = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), tt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), st = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), rt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), mt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), ot = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), nt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), it = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), dt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), pt = (a, e = 0) => ({ code: y, indent: e, parameters: [0, 0, 1, a.skillId] }), lt = (a, e = 0) => ({ code: y, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), ct = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), Et = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), It = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), At = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), Tt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Ct = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), _t = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), St = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), yt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), gt = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, d = 0) => ({ code: 322, indent: d, parameters: [a, m, s, t, e, n] }), Rt = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), kt = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Mt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Nt = (a, e = 0) => ({
  code: Q,
  parameters: [a.actorId, a.name],
  indent: e
}), ut = (a, e = 0) => ({ code: Z, parameters: [a.actorId, a.nickname], indent: e }), bt = (a, e = 0) => ({
  code: J,
  parameters: [a.actorId, a.profile],
  indent: e
}), _ = { direct: 0, variable: 1 }, Lt = (a, e = 0) => ({ code: V, indent: e, parameters: Y(0, a) }), Pt = (a, e = 0) => ({ code: V, indent: e, parameters: Y(1, a) }), vt = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: P(0, a)
}), Ot = (a, e = 0) => ({ code: U, indent: e, parameters: P(1, a) }), ht = (a, e = 0) => ({ code: H, indent: e, parameters: P(0, a) }), Dt = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value], Y = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value, e.allowDeath], ft = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Ft = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), Bt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Gt = (a = 0) => ({ code: 244, indent: a, parameters: [] }), xt = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), wt = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), Vt = (a, e = 0) => E(ta, a, e), Ht = (a, e = 0) => E(sa, a, e), Ut = (a, e = 0) => E(ra, a, e), Yt = (a, e = 0) => E(ma, a, e), Wt = (a, e = 0) => E($, a, e), qt = (a, e = 0) => E(ea, a, e), Xt = (a, e = 0) => E(aa, a, e), Kt = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), zt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), jt = 0, Qt = 1, Zt = 2, Jt = (a) => a.parameters[0] === 1, $t = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: D,
  indent: s,
  parameters: [0, a, e, t]
}), as = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: D, indent: s, parameters: [1, a, e, t] }), es = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: D,
  indent: t,
  parameters: [2, 0, a, e]
}), ua = { plus: 0, minus: 1 }, ts = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ua[a ?? "plus"] ?? 0, e ?? 0] });
function ss(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const rs = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ms = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), os = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), ns = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), is = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), ds = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), ps = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), ls = (a, e = 0) => ({ code: oa, indent: e, parameters: ba(a ?? {}) }), cs = (a) => ({
  eventId: a[0]
}), ba = (a) => [a.eventId ?? 0], Es = (a) => ({ min: a[0], max: a[1], value: a[2] }), La = (a) => [a.min, a.max, a.value], Is = (a, e = 0) => ({ code: na, indent: e, parameters: La(a) }), As = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Ts = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Cs = (a) => ({ variableId: a[0], maxDigits: a[1] }), _s = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), Ss = (a) => ({ variableId: a[0], itemType: a[1] }), ys = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), gs = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), Rs = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), ks = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), Ms = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Ns = (a = 0) => ({ code: 135, parameters: [1], indent: a }), us = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), bs = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Ls = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Ps = (a = 0) => ({ code: 137, parameters: [1], indent: a }), vs = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), W = (a) => [a], Os = (a) => ({ comment: a[0] }), Pa = (a, e = 0) => ({ code: da, indent: e, parameters: W(a) }), va = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: W(a)
}), hs = (a, e = 0) => a.map(((t, s) => s === 0 ? Pa(t, e) : va(t, e))), Oa = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Ds = (a) => ({ speed: a[0], skip: a[1] }), fs = (a = {}, e = 0) => ({
  code: la,
  indent: e,
  parameters: Oa(a)
}), ha = (a = "") => [a], Fs = (a) => ({ content: a[0] }), Bs = (a = "", e = 0) => ({ code: pa, indent: e ?? 0, parameters: ha(a) }), Gs = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), xs = (a) => ({
  index: a[0],
  name: a[1]
}), ws = (a) => [a.index ?? 0, a.name ?? ""], Vs = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Hs = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Us = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), Ys = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ws = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), qs = (a) => ({
  filename: a[0]
}), Xs = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Ks = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), zs = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), js = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Qs = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Zs = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Js = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), $s = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), ar = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: d = 100, opacity: o = 255, blendMode: I = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, d, o, I]
}), er = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: d, blendMode: o, wait: I = !1, easingType: v = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, n, d, o, I, v]
}), tr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), sr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), rr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), mr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), or = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), nr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Da = (a, e = 0) => ({ code: Ea, indent: e, parameters: [a] }), fa = (a, e = 0) => ({
  code: ca,
  indent: e,
  parameters: [a]
}), ir = (a, e = 0) => a.map(((t, s) => s === 0 ? Da(t, e) : fa(t, e))), dr = 1, pr = 0, b = { item: 0, weapon: 1, armors: 2 }, lr = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const n = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Ia, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0, e] } : {
    code: Aa,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0]
  };
})), cr = 0, Er = 1, Ir = 2, Ar = 3, Tr = 4, Cr = 5, _r = 0, Sr = 1, yr = 2, gr = 3, Rr = 4, kr = 0, Mr = 1, Nr = 2, ur = (a) => a.parameters[2] === 1, Fa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], br = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Fa(a, e, t.operation ?? 0)
}), Lr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), Pr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), vr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Or = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), hr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), Dr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), fr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), Fr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), Br = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Gr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), Ba = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, xr = (a, e, t = {}) => ({ code: i, indent: t.indent ?? 0, parameters: Ga(a, e) }), Ga = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, Ba[e.param]], wr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Vr = (a, e) => {
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
}, xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], Hr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: xa(a, e, t.operation ?? 0)
}), wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], Ur = (a, e) => ({
  code: i,
  indent: 0,
  parameters: wa(a, e, 0)
}), Va = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], Yr = (a, e, t = {}) => ({ code: i, indent: t.indent ?? 0, parameters: Va(a, e, t.operation ?? 0) }), Ha = {
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
}, Ua = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ha[e.param]], Wr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Ua(a, e, t.operation ?? 0)
}), qr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Ya(a, e, t.operation ?? 0)
}), Ya = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Xr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Wa(a, e, t.operation ?? 0)
}), qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Kr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: qa(a, e, t.operation ?? 0)
}), Xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], zr = (a, e) => ({ code: i, indent: 0, parameters: Xa(a, e, 0) }), jr = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Qr = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Zr = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), Jr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), $r = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), am = 0, em = 1, tm = 2, Ka = (a) => [...a], sm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ka(a.parameters)
}), za = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", rm = (a) => a.parameters.every(za), mm = "bgm", om = "se", nm = "me", im = "bgs", dm = "battlebacks1", pm = "battlebacks2", lm = "characters", cm = "enemies", Em = "faces", Im = "parallaxes", Am = "pictures", Tm = "sv_actors", Cm = "sv_enemies", _m = "system", Sm = "tilesets", ym = "titles1", gm = "titles2", Rm = "System.json", km = "Actors.json", Mm = "Classes.json", Nm = "Skills.json", um = "Items.json", bm = "Weapons.json", Lm = "Armors.json", Pm = "Enemies.json", vm = "Troops.json", Om = "States.json", hm = "Animations.json", Dm = "Tilesets.json", fm = "CommonEvents.json", Fm = "MapInfos.json", Bm = "data", Gm = "img", xm = "audio", wm = "js", f = (a, e) => `\\${a}[${e}]`, Vm = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: f(a, s)
}))), Hm = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), Um = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: f("N", e.id)
}))), Ym = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: f("V", t) }))).filter(((e) => e.text !== "")), Wm = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), qm = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), Xm = (a) => ({
  span: a.span ?? 0,
  conditions: ja(a.conditions ?? {}),
  list: a.list ?? []
}), Km = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), ja = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), Qa = (a = {}) => ({
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
}), zm = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), Za = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), jm = ({ list: a = [], conditions: e = Qa(), image: t = Za(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: o = !1, through: I = !1, walkAnime: v = !1, moveSpeed: K = 3, moveType: z = 0, trigger: j = 0 } = {}) => ({
  walkAnime: v,
  stepAnime: o,
  through: I,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: d,
  moveFrequency: s,
  moveSpeed: K,
  moveType: z,
  trigger: j,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Qm = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Zm = (a = {}) => ({
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
}), Jm = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, $m = (a, e) => a.map(((t) => t ? {
  ...t,
  pages: Ja(t, e)
} : null)), Ja = (a, e) => a.pages.map(((t) => ({ ...t, list: e(t.list) }))), $a = { actor: { title: "アクター", options: {
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
} }, ae = { title: "ダメージ", options: {} }, F = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), ao = (a = {}) => ({
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
}), eo = (a) => ({
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
}), to = (a = {}) => ({
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
}), so = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ?? q(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), ro = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? ee(a.params) : q(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), q = () => [[0], [0], [0], [0], [0], [0], [0], [0]], ee = (a) => {
  const e = a.map(((o) => o.atk)), t = a.map(((o) => o.def)), s = a.map(((o) => o.mat)), m = a.map(((o) => o.mdf)), n = a.map(((o) => o.agi)), d = a.map(((o) => o.luk));
  return [a.map(((o) => o.mhp)), a.map(((o) => o.mmp)), e, t, s, m, n, d];
}, te = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: d = 0, luk: o = 0 }) => [a, e, t, s, m, n, d, o], mo = (a) => {
  const [e, t, s, m, n, d, o, I] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: d, agi: o, luk: I };
}, se = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), oo = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), no = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => se())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : te({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), io = (a = {}) => ({
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
}), p = "{name}", C = "{name} * {value}%", B = "{name} + {value}%", G = "{value}", re = { title: "特徴", options: {
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
    format: p,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: p, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: p, options: {
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
    format: p
  },
  attackElement: { title: "攻撃属性", format: p },
  attackState: { title: "攻撃ステート", format: B },
  attackSpeed: { title: "攻撃速度補正", format: G },
  attackTimes: {
    title: "攻撃追加回数",
    format: G
  },
  actionPlus: { title: "行動追加", format: C },
  attackSkill: { title: "攻撃スキル", format: p },
  equipWeaponType: { title: "装備武器タイプ", format: p },
  equipArmorType: { title: "装備防具タイプ", format: p },
  equipLock: {
    title: "装備固定",
    format: p
  },
  equipSeal: { title: "装備封印", format: p },
  slotType: { title: "スロットタイプ", format: p },
  skillAdd: { title: "スキル追加", format: p },
  skillSeal: { title: "スキルタイプ封印", format: p },
  skillTypeAdd: { title: "スキルタイプ追加", format: p },
  skillTypeSeal: { title: "スキルタイプ封印", format: p }
} }, me = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, po = (a, e, t) => {
  const s = Ma(me);
  return Na(e, t, s, a.pattern, ((m) => m.dataId));
}, lo = (a = {}) => ({
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
}), co = {
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
  }, traits: { type: "array", items: { type: "object", additionalProperties: !1, properties: { code: { type: "integer" }, dataId: {
    type: "integer"
  }, value: { type: "number" } }, required: ["code", "dataId", "value"] } } }
}, Eo = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Io = 0, Ao = 1, To = 2, x = "{name} {value1}%", O = "{value1}% + {value2}", w = "{name} {value1}ターン", M = "{name}", oe = { title: "使用効果", options: {
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
} }, Co = 0, _o = (a, e, t) => {
  const s = t.find(((n) => n.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, So = { title: "アイテム", options: { consumable: "消耗品" } }, yo = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, go = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Ro = (a = {}) => ({
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
}), ko = (a = {}) => ({
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
}), Mo = "data", No = "actor", uo = "map", bo = "enemy", Lo = "state", Po = "skill", vo = "item", Oo = "weapon", ho = "armor", Do = "class", fo = "common_event", Fo = "troop", ne = {
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
}, Bo = () => ({ rpg: { damage: ae, data: $a, traits: re, itemEffect: oe }, global: ne }), ie = (a = {}) => ({
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
}), de = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], pe = (a) => ({
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
}), le = (a) => ({
  item: ce(a),
  skill: Ee(a),
  equip: Ie(a),
  status: Ae(a),
  formation: Te(a),
  save: Ce(a)
}), ce = (a) => a.menuCommands[0], Ee = (a) => a.menuCommands[1], Ie = (a) => a.menuCommands[2], Ae = (a) => a.menuCommands[3], Te = (a) => a.menuCommands[4], Ce = (a) => a.menuCommands[5], Go = (a) => a.itemCategories[0], xo = (a) => a.itemCategories[1], wo = (a) => a.itemCategories[2], Vo = (a) => a.itemCategories[3], _e = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Ho = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Se = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], Uo = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), ye = (a = {}) => ({
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
}), Yo = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), Wo = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], qo = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), ge = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), h = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Re = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Xo = { title: "オプション", options: {
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
} }, Ko = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, zo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, jo = {
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
}, Qo = (a = X({})) => ({
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
    messages: Sa(a.terms.messages)
  }
}), Zo = (a) => X({
  versionId: a.versionId,
  menuCommands: le(a),
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
  sounds: pe(a.sounds),
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
    basic: _a(a.terms.basic),
    commands: Ca(a.terms.commands),
    params: Ta(a.terms.params),
    messages: a.terms.messages
  }
}), X = (a) => {
  const e = Me(a.size);
  return {
    ...ye(a.options),
    titleCommandWindow: ge(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: de(a.sounds),
    editor: Re(a.editing),
    advanced: ie(a.advanced),
    title1Name: a.images?.title1Name ?? "",
    title2Name: a.images?.title2Name ?? "",
    armorTypes: l(a.dataNames?.armorTypes),
    equipTypes: l(a.dataNames?.equipTypes),
    elements: l(a.dataNames?.elements),
    skillTypes: l(a.dataNames?.skillTypes),
    weaponTypes: l(a.dataNames?.weaponTypes),
    switches: l(a.dataNames?.switches),
    variables: l(a.dataNames?.variables),
    magicSkills: l(a.battle?.magicSkills),
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
    testBattlers: Ne(a.battleTest?.testBattlers, ue),
    battleBgm: r(a.bgm?.battleBgm),
    victoryMe: r(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ke(a.terms ?? {}),
    itemCategories: _e(a.itemCategories),
    partyMembers: l(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: Se(a.menuCommands)
  };
}, ke = (a) => ({ basic: ka(a.basic ?? {}), commands: Ra(a.commands ?? {}), params: ga(a.params ?? {}), messages: ya(a.messages ?? {}) }), l = (a) => a ? [...a] : [], Me = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ne = (a, e) => a ? a.map(e) : [], ue = (a) => a ? {
  actorId: a.actorId,
  equips: l(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Jo = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), $o = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, an = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  sn as ABORT_BATTLE,
  jt as BATTLE_DIRECT,
  Zt as BATTLE_ENCOUNT,
  D as BATTLE_PROCESSING,
  Qt as BATTLE_VARIABLE,
  rn as CHANGE_ACTOR_IMAGES,
  mn as CHANGE_ACTOR_STATE,
  L as CHANGE_ARMORS,
  on as CHANGE_BATTLE_BACKGROUND,
  $ as CHANGE_BATTLE_BGM,
  nn as CHANGE_CLASS,
  aa as CHANGE_DEFEAT_ME,
  dn as CHANGE_ENCOUNTER,
  pn as CHANGE_ENEMY_HP,
  ln as CHANGE_ENEMY_MP,
  cn as CHANGE_ENEMY_STATE,
  En as CHANGE_ENEMY_TP,
  In as CHANGE_EQUIP,
  c as CHANGE_EXP,
  An as CHANGE_FORMATION_ACCESS,
  Tn as CHANGE_GOLD,
  V as CHANGE_HP,
  N as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  Cn as CHANGE_MAP_NAME_DISPLAY,
  _n as CHANGE_MENU_ACCESS,
  H as CHANGE_MP,
  Q as CHANGE_NAME,
  Z as CHANGE_NICKNAME,
  Sn as CHANGE_PARALLAX,
  yn as CHANGE_PARAMETER,
  gn as CHANGE_PARTY_MEMBER,
  Rn as CHANGE_PLAYER_FOLLOWERS,
  J as CHANGE_PROFILE,
  kn as CHANGE_SAVE_ACCESS,
  y as CHANGE_SKILL,
  Mn as CHANGE_TILESET,
  U as CHANGE_TP,
  Nn as CHANGE_TRANSPARENCY,
  un as CHANGE_VEHICLE_BGM,
  bn as CHANGE_VEHICLE_IMAGE,
  ea as CHANGE_VICTORY_ME,
  u as CHANGE_WEAPONS,
  Ln as CHANGE_WINDOW_COLOR,
  Fi as COLLAPS_BOSS,
  Bi as COLLAPS_INSTANT,
  Gi as COLLAPS_NONE,
  xi as COLLAPS_NORMAL,
  ia as COMMENT_BODY,
  da as COMMENT_HEAD,
  oa as COMMON_EVENT,
  Pn as CONDITIONAL_BRANCH,
  vn as CONDITIONAL_BRANCH_ELSE,
  On as CONTROL_SELF_SWITCH,
  na as CONTROL_SWITCHES,
  hn as CONTROL_TIMER,
  i as CONTROL_VARIABLES,
  dr as CUSTOM_PRICE,
  ae as DEFAULT_DAMAGE_LABELS,
  ne as DEFAULT_GLOBAL_LABELS,
  So as DEFAULT_ITEM_LABELS,
  yo as DEFAULT_SKILL_LABELS,
  Xo as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ko as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  go as DEFAULT_USABLE_ITEM_LABELS,
  $o as DIRECTION,
  wi as EFFECT_ADD_BUFF,
  Vi as EFFECT_ADD_DEBUFF,
  Hi as EFFECT_ADD_STATE,
  Ui as EFFECT_COMMON_EVENT,
  Yi as EFFECT_GAIN_TP,
  Wi as EFFECT_GROW,
  qi as EFFECT_LEARN_SKILL,
  Xi as EFFECT_RECOVER_HP,
  Ki as EFFECT_RECOVER_MP,
  zi as EFFECT_REMOVE_BUFF,
  ji as EFFECT_REMOVE_DEBUFF,
  Qi as EFFECT_REMOVE_STATE,
  Zi as EFFECT_SPECIAL,
  Dn as ENEMY_APPEAR,
  fn as ENEMY_RECOVER_ALL,
  Fn as ENEMY_TRANSFORM,
  Bn as ERASE_EVENT,
  Gn as ERASE_PICTURE,
  xn as EXIT_EVENT_PROCESSING,
  Ji as EXTRA_PARAM_CEV,
  $i as EXTRA_PARAM_CNT,
  ad as EXTRA_PARAM_CRI,
  ed as EXTRA_PARAM_EVA,
  td as EXTRA_PARAM_HIT,
  sd as EXTRA_PARAM_HRG,
  rd as EXTRA_PARAM_MEV,
  md as EXTRA_PARAM_MRF,
  od as EXTRA_PARAM_MRG,
  nd as EXTRA_PARAM_TRG,
  wn as FADEIN_SCREEN,
  Vn as FADEOUT_BGM,
  Hn as FADEOUT_BGS,
  Un as FADEOUT_SCREEN,
  km as FILENAME_ACTORS,
  hm as FILENAME_ANIMATIONS,
  Lm as FILENAME_ARMORS,
  Mm as FILENAME_CLASSES,
  fm as FILENAME_COMMON_EVENTS,
  Pm as FILENAME_ENEMIES,
  um as FILENAME_ITEMS,
  Fm as FILENAME_MAP_INFOS,
  Nm as FILENAME_SKILLS,
  Om as FILENAME_STATES,
  Rm as FILENAME_SYSTEM,
  Dm as FILENAME_TILESET,
  vm as FILENAME_TROOPS,
  bm as FILENAME_WEAPONS,
  id as FLAG_ID_AUTO_BATTLE,
  dd as FLAG_ID_GUARD,
  pd as FLAG_ID_PRESERVE_TP,
  ld as FLAG_ID_SUBSTITUTE,
  Yn as FLASH_SCREEN,
  xm as FOLDER_AUDIO,
  mm as FOLDER_AUDIO_BGM,
  im as FOLDER_AUDIO_BGS,
  nm as FOLDER_AUDIO_ME,
  om as FOLDER_AUDIO_SE,
  Bm as FOLDER_DATA,
  Gm as FOLDER_IMG,
  dm as FOLDER_IMG_BATTLEBACK1,
  pm as FOLDER_IMG_BATTLEBACK2,
  lm as FOLDER_IMG_CHACTERS,
  cm as FOLDER_IMG_ENEMIES,
  Em as FOLDER_IMG_FACES,
  Im as FOLDER_IMG_PARALLACES,
  Am as FOLDER_IMG_PICTURES,
  Tm as FOLDER_IMG_SV_ACTORS,
  Cm as FOLDER_IMG_SV_ENEMIES,
  _m as FOLDER_IMG_SYSTEM,
  Sm as FOLDER_IMG_TILESETS,
  ym as FOLDER_IMG_TITLES1,
  gm as FOLDER_IMG_TITLES2,
  wm as FOLDER_JS,
  Wn as FORCE_ACTION,
  qn as GAME_OVER,
  Xn as GATHER_FOLLOWERS,
  Kn as GET_LOCATION_INFO,
  zn as GET_ONOFF_VEHICLE,
  Io as HITTYPE_CERTAIN,
  To as HITTYPE_MAGICAL,
  Ao as HITTYPE_PHYSICAL,
  jn as INPUT_NUMBER,
  Qn as LABEL,
  Eo as LABELS_DATA_WEAPON,
  zo as LABELS_SYSTEM_BATTLER_PARAMS,
  jo as LABELS_SYSTEM_GAME_COMMANDS,
  Zn as LABEL_JUMP,
  $a as LABEL_SET_DATA,
  oe as LABEL_SET_ITEM_EFFECT,
  re as LABEL_SET_TRAIT,
  Jn as LOOP,
  $n as LOOP_BREAK,
  Mo as MODULE_DATA,
  ai as MOVE_PICTURE,
  ei as NAME_INPUT_PROCESSING,
  pr as NORMAL_PRICE,
  ti as NO_OPERATION,
  si as OPEN_MENU_SCREEN,
  ri as OPEN_SAVE_SCREEN,
  _r as OPERAND_CONSTANT,
  gr as OPERAND_GAMEDATA,
  yr as OPERAND_RANDOM,
  Rr as OPERAND_SCRIPT,
  Sr as OPERAND_VARIABLE,
  Er as OPERATION_ADD,
  Tr as OPERATION_DIVIDE,
  Cr as OPERATION_MOD,
  Ar as OPERATION_MULTIPLY,
  cr as OPERATION_SET,
  Ir as OPERATION_SUBTRACT,
  cd as PARTY_ABILITY_CANCEL_SURPRISE,
  Ed as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Id as PARTY_ABILITY_ENCOUNTER_HALF,
  Ad as PARTY_ABILITY_ENCOUNTER_NONE,
  Td as PARTY_ABILITY_GOLD_DOUBLE,
  Cd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ta as PLAY_BGM,
  sa as PLAY_BGS,
  ra as PLAY_ME,
  mi as PLAY_MOVIE,
  ma as PLAY_SE,
  oi as PLUGIN_COMMAND_MV,
  ni as PLUGIN_COMMAND_MZ,
  ii as RECOVER_ALL,
  _d as REGULAR_PARAM_AGI,
  Sd as REGULAR_PARAM_ATK,
  yd as REGULAR_PARAM_DEF,
  gd as REGULAR_PARAM_LUK,
  Rd as REGULAR_PARAM_MATK,
  kd as REGULAR_PARAM_MAX_HP,
  Md as REGULAR_PARAM_MAX_MP,
  Nd as REGULAR_PARAM_MDEF,
  di as RESUME_BGM,
  pi as RETURN_TO_TITLE_SCREEN,
  li as ROTATE_PICTURE,
  ci as SAVE_BGM,
  co as SCHEMA_DATA_WEAPON,
  Ea as SCRIPT_EVAL,
  ca as SCRIPT_EVAL_BODY,
  Ei as SCROLL_MAP,
  Ii as SELECT_ITEM,
  Ai as SET_EVENT_LOCATION,
  Ti as SET_MOVEMENT_ROUTE,
  Ci as SET_VEHICLE_LOCATION,
  _i as SET_WEATHER_EFFECT,
  Si as SHAKE_SCREEN,
  Ia as SHOP_PROCESSING,
  Aa as SHOP_PROCESSING_BODY,
  yi as SHOW_ANIMATION,
  gi as SHOW_BALLOON_ICON,
  Ri as SHOW_BATTLE_ANIMATION,
  ki as SHOW_CHOICES,
  Mi as SHOW_CHOICES_ITEM,
  Ni as SHOW_MESSAGE,
  ui as SHOW_MESSAGE_BODY,
  bi as SHOW_PICTURE,
  la as SHOW_SCROLLING_TEXT,
  pa as SHOW_SCROLLING_TEXT_BODY,
  Li as SKIP,
  Co as SPECIAL_EFFECT_ESCAPE,
  ud as SPECIAL_PARAM_EXR,
  bd as SPECIAL_PARAM_FDR,
  Ld as SPECIAL_PARAM_GRD,
  Pd as SPECIAL_PARAM_MCR,
  vd as SPECIAL_PARAM_MDR,
  Od as SPECIAL_PARAM_PDR,
  hd as SPECIAL_PARAM_PHA,
  Dd as SPECIAL_PARAM_REC,
  fd as SPECIAL_PARAM_TCR,
  Fd as SPECIAL_PARAM_TGR,
  No as SRC_DATA_ACTOR,
  ho as SRC_DATA_ARMOR,
  Do as SRC_DATA_CLASS,
  fo as SRC_DATA_COMMON_EVNET,
  bo as SRC_DATA_ENEMY,
  vo as SRC_DATA_ITEMS,
  uo as SRC_DATA_MAP,
  Po as SRC_DATA_SKILL,
  Lo as SRC_DATA_STATE,
  Fo as SRC_DATA_TROOP,
  Oo as SRC_DATA_WEAPON,
  Pi as STOP_SE,
  vi as TINT_PICTURE,
  Oi as TINT_SCREEN,
  Bd as TRAIT_ACTION_PLUS,
  Gd as TRAIT_ATTACK_ELEMENT,
  xd as TRAIT_ATTACK_SKILL,
  wd as TRAIT_ATTACK_SPEED,
  Vd as TRAIT_ATTACK_STATE,
  Hd as TRAIT_ATTACK_TIMES,
  Ud as TRAIT_COLLAPSE_TYPE,
  Yd as TRAIT_DEBUFF_RATE,
  Wd as TRAIT_ELEMENT_RATE,
  qd as TRAIT_EQUIP_ARMOR_TYPE,
  Xd as TRAIT_EQUIP_LOCK,
  Kd as TRAIT_EQUIP_SEAL,
  zd as TRAIT_EQUIP_WEAPON_TYPE,
  jd as TRAIT_PARAM,
  Qd as TRAIT_PARTY_ABILITY,
  Zd as TRAIT_SKILL_ADD,
  Jd as TRAIT_SKILL_SEAL,
  $d as TRAIT_SKILL_TYPE_ADD,
  ap as TRAIT_SKILL_TYPE_SEAL,
  ep as TRAIT_SLOT_TYPE,
  tp as TRAIT_SPARAM,
  sp as TRAIT_SPECIAL_FLAG,
  rp as TRAIT_STATE_RATE,
  mp as TRAIT_STATE_RESIST,
  op as TRAIT_XPARAM,
  hi as TRANSFER_PLAYER,
  Nr as TYPE_ARMOR,
  kr as TYPE_ITEM,
  Mr as TYPE_WEAPON,
  tm as VEHICLE_AIRSHIP,
  am as VEHICLE_BOAT,
  em as VEHICLE_SHIP,
  Di as WAIT,
  np as buildNoteFromNormalized,
  Ys as cloneChoices,
  sm as cloneEventCommand,
  Ka as cloneParameters,
  ip as collapsOptionsToArray,
  Os as convertCommentArrayToObject,
  Sa as convertTermsMessageMZtoMV,
  Um as createActorControlChars,
  f as createControlCharFormat,
  le as createMenuCommandState,
  dp as createNoteEntity,
  Ym as createSystemVariableControlChars,
  pp as defineGameDataSources,
  lp as defineSystemItems,
  cp as defineTraitCollapseType,
  Ep as defineTraitExtraParam,
  Ip as defineTraitItems,
  Ap as defineTraitPartyAbility,
  Tp as defineTraitRegularParam,
  Cp as defineTraitSpecialFlag,
  _p as defineTraitSpecialParam,
  Sp as extraParamName,
  yp as extraParamsToArray,
  an as extractFileName,
  _o as formatItemEffectText,
  po as formatTraitText,
  Oe as fromArrayChangeItems,
  Ge as fromArrayChangeWeapons,
  cs as fromArrayCommonEvent,
  Es as fromArrayControlSwitches,
  rs as fromArrayEnemyTransform,
  Cs as fromArrayInputNumber,
  qs as fromArrayPlayMovie,
  Ks as fromArrayPluginCommandMZ,
  Fs as fromArrayScrollingTextBody,
  Ds as fromArrayScrollingTextHeader,
  Ss as fromArraySelectItem,
  Vs as fromArraySetupChoice,
  xs as fromArraySetupChoiceItem,
  gp as fromArrayShowMessageHeader,
  Vm as fromStringArray,
  Vr as getActorValue,
  wo as getArmorCategoryEnabled,
  Rp as getArmorTypes,
  Hm as getControlChars,
  kp as getElementTypes,
  wr as getEnemyValue,
  Ie as getEquipCommandEnabled,
  Mp as getEquipTypes,
  Te as getFormationCommandEnabled,
  Go as getItemCategoryEnabled,
  ce as getItemCommandEnabled,
  Np as getItemIdFromItemCommand,
  Vo as getKeyItemCategoryEnabled,
  up as getNoteValue,
  qo as getParamNames,
  Ce as getSaveCommandEnabled,
  Ee as getSkillCommandEnabled,
  bp as getSkillTypes,
  Ae as getStatusCommandEnabled,
  Lp as getSwitches,
  Pp as getVariableNames,
  xo as getWeaponCategoryEnabled,
  vp as getWeaponTypes,
  rm as isCloneableCommand,
  Jt as isCommandBattleProcessingVariable,
  ur as isCommandOperandVariables,
  Op as isUsingVariableItemCommand,
  ve as isUsingVaribleCommandChangingItems,
  Bo as labelsRegistry,
  ao as makeActorData,
  to as makeArmorData,
  wt as makeAudioCommand,
  Xm as makeBattleEventPage,
  ye as makeBooleanOptions,
  so as makeClassData,
  ro as makeClassDataEx,
  ns as makeCommandAddEachEnemyState,
  ms as makeCommandAddEnemyState,
  zs as makeCommandAddPartyMember,
  Ct as makeCommandAddStateByVariable,
  At as makeCommandAddStateEachActor,
  Et as makeCommandAddStateTargetActor,
  E as makeCommandAudioAny,
  $t as makeCommandBattleProcessingDirect,
  es as makeCommandBattleProcessingEncount,
  as as makeCommandBattleProcessingVariable,
  gt as makeCommandChangeActorImages,
  Nt as makeCommandChangeActorName,
  ut as makeCommandChangeActorNickName,
  bt as makeCommandChangeActorProfile,
  Wt as makeCommandChangeBattleBGM,
  zt as makeCommandChangeBattleBackground,
  St as makeCommandChangeClass,
  Xt as makeCommandChangeDefeatME,
  yt as makeCommandChangeEquip,
  he as makeCommandChangeItems,
  ys as makeCommandChangeParallax,
  Ms as makeCommandChangeTileset,
  Zr as makeCommandChangeVehicleBGM,
  Qr as makeCommandChangeVehicleImage,
  qt as makeCommandChangeVictoryME,
  xe as makeCommandChangeWeapons,
  va as makeCommandCommentBody,
  Pa as makeCommandCommentHeader,
  ls as makeCommandCommonEvent,
  Is as makeCommandControlSwitches,
  ts as makeCommandControlTimer,
  Ps as makeCommandDisableFormationAccess,
  Ns as makeCommandDisableMenuAccess,
  bs as makeCommandDisableSaveAccess,
  vs as makeCommandEnableFormationAccess,
  us as makeCommandEnableMenuAccess,
  Ls as makeCommandEnableSaveAccess,
  ps as makeCommandEnemyRecoverAll,
  ds as makeCommandEnemyRecoverAllEach,
  ss as makeCommandEnemyTransform,
  sr as makeCommandFadeInScreen,
  Ft as makeCommandFadeOutBGM,
  xt as makeCommandFadeOutBGS,
  rr as makeCommandFadeOutScreen,
  mr as makeCommandFlashScreen,
  it as makeCommandForgetSkill,
  ct as makeCommandForgetSkillByVariable,
  pt as makeCommandForgetSkillEachActor,
  Lt as makeCommandGainActorHP,
  ht as makeCommandGainActorMP,
  vt as makeCommandGainActorTP,
  Ye as makeCommandGainArmor,
  We as makeCommandGainArmorByVariable,
  je as makeCommandGainExpByVariable,
  Ke as makeCommandGainExpDirect,
  $e as makeCommandGainExpTargetAndOperandVariable,
  Ze as makeCommandGainExpTargetVariable,
  Qs as makeCommandGainGold,
  Js as makeCommandGainGoldByVariable,
  De as makeCommandGainItem,
  fe as makeCommandGainItemV,
  we as makeCommandGainWeapon,
  Ve as makeCommandGainWeaponV,
  jr as makeCommandGetOnOffVehicle,
  ks as makeCommandHideMapName,
  As as makeCommandInputNumber,
  nt as makeCommandLearnSkill,
  lt as makeCommandLearnSkillByVariable,
  dt as makeCommandLearnSkillEachActor,
  tt as makeCommandLevelDownActor,
  rt as makeCommandLevelDownActorByVariable,
  ot as makeCommandLevelDownEachActors,
  et as makeCommandLevelUpActor,
  st as makeCommandLevelUpActorByVariable,
  mt as makeCommandLevelUpEachActors,
  Pt as makeCommandLoseActorHP,
  Dt as makeCommandLoseActorMP,
  Ot as makeCommandLoseActorTP,
  qe as makeCommandLoseArmor,
  Xe as makeCommandLoseArmorByVariable,
  Qe as makeCommandLoseExpByVariable,
  ze as makeCommandLoseExpDirect,
  at as makeCommandLoseExpTargetAndOperandVariable,
  Je as makeCommandLoseExpTargetVariable,
  Zs as makeCommandLoseGold,
  $s as makeCommandLoseGoldByVariable,
  Fe as makeCommandLoseItem,
  Be as makeCommandLoseItemV,
  He as makeCommandLoseWeapon,
  Ue as makeCommandLoseWeaponV,
  er as makeCommandMovePicture,
  Vt as makeCommandPlayBGM,
  Ht as makeCommandPlayBGS,
  Ut as makeCommandPlayME,
  Ws as makeCommandPlayMovie,
  Yt as makeCommandPlaySE,
  Xs as makeCommandPluginCommandMZ,
  Rt as makeCommandRecoverAllEachActors,
  kt as makeCommandRecoverAllTargetActor,
  Mt as makeCommandRecoverAllTargetActorByVariable,
  It as makeCommandRemoveActorTargetState,
  is as makeCommandRemoveEachEnemyState,
  os as makeCommandRemoveEnemyState,
  js as makeCommandRemovePartyMember,
  _t as makeCommandRemoveStateByVariable,
  Tt as makeCommandRemoveStateEachActors,
  Gt as makeCommandResumeBGM,
  Bt as makeCommandSaveBGM,
  ir as makeCommandScriptArray,
  fa as makeCommandScriptBody,
  Da as makeCommandScriptHeader,
  gs as makeCommandScrollMap,
  Bs as makeCommandScrollingTextBody,
  fs as makeCommandScrollingTextHeader,
  _s as makeCommandSelectItem,
  Jr as makeCommandSetVehicleLocation,
  $r as makeCommandSetVehicleLocationFromVariables,
  tr as makeCommandSetWeatherEffect,
  Us as makeCommandSetupChoice,
  or as makeCommandShakeScreen,
  lr as makeCommandShopProcessing,
  ft as makeCommandShowAnimation,
  Kt as makeCommandShowBalloonIcon,
  Gs as makeCommandShowChoiceItem,
  Rs as makeCommandShowMapName,
  hp as makeCommandShowMessage,
  Dp as makeCommandShowMessageBody,
  ar as makeCommandShowPicture,
  Fr as makeCommandSystemBattleCount,
  Gr as makeCommandSystemEscapeCount,
  fr as makeCommandSystemSaveCount,
  Dr as makeCommandSystemTimer,
  Br as makeCommandSystemWinCount,
  nr as makeCommandTintScreen,
  Hr as makeCommandVariableFromActorStatusData,
  Ur as makeCommandVariableFromArmor,
  Yr as makeCommandVariableFromConstant,
  Wr as makeCommandVariableFromEnemyData,
  qr as makeCommandVariableFromItemData,
  Lr as makeCommandVariableFromMapId,
  Or as makeCommandVariableFromPartyGold,
  Pr as makeCommandVariableFromPartyMembers,
  vr as makeCommandVariableFromPartySteps,
  hr as makeCommandVariableFromPlaytime,
  Xr as makeCommandVariableFromRandom,
  Kr as makeCommandVariableFromScript,
  xr as makeCommandVariableFromTempLastData,
  br as makeCommandVariableFromVariable,
  zr as makeCommandVariableFromWeapon,
  W as makeCommentArray,
  hs as makeCommentCommandArray,
  Wm as makeCommonEventData,
  F as makeDamage,
  Wo as makeDataNames,
  se as makeDropItem,
  Re as makeEditorSetting,
  oo as makeEnemyAction,
  no as makeEnemyData,
  Qa as makeEventPageCondition,
  Yo as makeGameInitial,
  _e as makeItemCategories,
  Ho as makeItemCategoriesFromArray,
  Ro as makeItemData,
  Zm as makeMapData,
  zm as makeMapEvent,
  Za as makeMapEventIamge,
  jm as makeMapEventPage,
  Qm as makeMapFileInfo,
  Jm as makeMapInfoData,
  Se as makeMenuCommandsEnabled,
  Uo as makeMenuCommandsEnabledFromArray,
  te as makeParamArray,
  ga as makeParamNamesArray,
  Ta as makeParamNamesFromArray,
  ko as makeSkillData,
  de as makeSoundsArray,
  pe as makeSoundsObject,
  io as makeStateData,
  ie as makeSystemAdvanced,
  X as makeSystemData,
  Zo as makeSystemDataFromMV,
  Qo as makeSystemDataMV,
  ka as makeTermsBasic,
  _a as makeTermsBasicFromArray,
  Ra as makeTermsCommandArray,
  fp as makeTermsCommandArrayWithNulls,
  Ca as makeTermsCommandFromArray,
  ya as makeTermsMessages,
  ge as makeTitleCommandWindow,
  qm as makeTroopData,
  ja as makeTroopEventConditions,
  Km as makeTroopMember,
  h as makeVehicleData,
  lo as makeWeaponData,
  eo as normalizeDataActor,
  Fp as normalizeNote,
  mo as paramArrayToObject,
  Bp as partyAbilityToArray,
  Gp as readNote,
  xp as readNoteEx,
  wp as readNoteObject,
  Vp as regularParamName,
  Hp as regularParamsToArray,
  Up as replaceNote,
  Yp as replaceNoteWithHandlers,
  $m as repleaceMapEventCommands,
  Wp as resolveItemEffectLabels,
  qp as resolveTraitLabels,
  Xp as setNoteValue,
  Kp as specialFlagToArray,
  zp as specialParamName,
  jp as specialParamsToArray,
  Jo as textAndDesc,
  ba as toArrayCommonEvent,
  La as toArrayControlSwitches,
  Ts as toArrayInputNumber,
  xa as toArrayOperandActorStatus,
  wa as toArrayOperandArmorData,
  Va as toArrayOperandConstant,
  Ua as toArrayOperandEnemyStatus,
  Ya as toArrayOperandItemData,
  Wa as toArrayOperandRandom,
  qa as toArrayOperandScript,
  Fa as toArrayOperandVariable,
  Xa as toArrayOperandWeaponData,
  ha as toArrayScrollingTextBody,
  Oa as toArrayScrollingTextHeader,
  Hs as toArraySetupChoice,
  ws as toArraySetupChoiceItem,
  Qp as toArrayShowMessageHeader
};
