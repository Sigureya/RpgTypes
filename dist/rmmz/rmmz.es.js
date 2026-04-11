import { q as N, N as u, b as L, m as c, r as y, G as S, v as sa, w as ra, E as ma, p as V, u as H, I as U, d as Y, f as W, M as q, am as X, an as K, ao as z, aq as j, B as D, R as oa, V as na, P as ia, Q as da, aS as pa, aR as la, az as ca, ay as Ea, aH as Ia, aI as Aa, X as i } from "../shared/eventCommandCodes.es.js";
import { A as Ko, C as zo, a as jo, c as Qo, e as Zo, g as Jo, h as $o, i as an, j as en, k as tn, l as sn, n as rn, o as mn, s as on, t as nn, x as dn, y as pn, z as ln, D as cn, F as En, H as In, J as An, K as Tn, L as Cn, O as _n, S as yn, T as Sn, U as gn, W as Rn, Y as kn, Z as Mn, _ as Nn, $ as un, a0 as bn, a1 as Ln, a2 as Pn, a3 as vn, a4 as On, a5 as hn, a6 as Dn, a7 as fn, a8 as Fn, a9 as Bn, aa as Gn, ab as xn, ac as wn, ad as Vn, ae as Hn, af as Un, ag as Yn, ah as Wn, ai as qn, aj as Xn, ak as Kn, al as zn, ap as jn, ar as Qn, as as Zn, at as Jn, au as $n, av as ai, aw as ei, ax as ti, aA as si, aB as ri, aC as mi, aD as oi, aE as ni, aF as ii, aG as di, aJ as pi, aK as li, aL as ci, aM as Ei, aN as Ii, aO as Ai, aP as Ti, aQ as Ci, aT as _i, aU as yi, aV as Si, aW as gi, aX as Ri, aY as ki } from "../shared/eventCommandCodes.es.js";
import { be as g, bg as R, bh as T, bf as k, aT as Ta, aY as Ca, aV as _a, as as ya, aZ as Sa, aS as ga, aW as Ra, aU as ka } from "../shared/commands.es.js";
import { C as Ni, a as ui, b as bi, c as Li, E as Pi, d as vi, e as Oi, f as hi, g as Di, h as fi, i as Fi, j as Bi, k as Gi, l as xi, m as wi, n as Vi, o as Hi, p as Ui, q as Yi, r as Wi, s as qi, t as Xi, u as Ki, v as zi, w as ji, x as Qi, y as Zi, F as Ji, z as $i, A as ad, B as ed, P as td, D as sd, G as rd, H as md, I as od, J as nd, R as id, K as dd, L as pd, M as ld, N as cd, O as Ed, Q as Id, S as Ad, T as Td, U as Cd, V as _d, W as yd, X as Sd, Y as gd, Z as Rd, _ as kd, $ as Md, a0 as Nd, a1 as ud, a2 as bd, a3 as Ld, a4 as Pd, a5 as vd, a6 as Od, a7 as hd, a8 as Dd, a9 as fd, aa as Fd, ab as Bd, ac as Gd, ad as xd, ae as wd, af as Vd, ag as Hd, ah as Ud, ai as Yd, aj as Wd, ak as qd, al as Xd, am as Kd, an as zd, ao as jd, ap as Qd, aq as Zd, ar as Jd, at as $d, au as ap, av as ep, aw as tp, ax as sp, ay as rp, az as mp, aA as op, aB as np, aC as ip, aD as dp, aE as pp, aF as lp, aG as cp, aH as Ep, aI as Ip, aJ as Ap, aK as Tp, aL as Cp, aM as _p, aN as yp, aO as Sp, aP as gp, aQ as Rp, aR as kp, aX as Mp, a_ as Np, a$ as up, b0 as bp, b1 as Lp, b2 as Pp, b3 as vp, b4 as Op, b5 as hp, b6 as Dp, b7 as fp, b8 as Fp, b9 as Bp, ba as Gp, bb as xp, bc as wp, bd as Vp } from "../shared/commands.es.js";
import { F as Up, a as Yp, b as Wp, c as qp, d as Xp, e as Kp, f as zp, g as jp, h as Qp, i as Zp, j as Jp, k as $p, l as al, m as el } from "../shared/fileNames.es.js";
import { m as r, c as Ma, a as Na } from "../shared/make.es.js";
const fe = (a) => a.parameters[3] === T, Fe = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), Be = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), Ge = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, g, R, a.value] }), xe = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, g, T, a.variableId]
}), we = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, k, R, a.value] }), Ve = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, k, T, a.variableId]
}), He = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Ue = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Ye = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, g, R, a.value, !1] }), We = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, g, T, a.variableId, !1]
}), qe = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, k, R, a.value, !1] }), Xe = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, k, T, a.variableId, !1]
}), Ke = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, g, R, a.value, !1] }), ze = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, g, T, a.variableId, !1]
}), je = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, k, R, a.value, !1] }), Qe = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, k, T, a.variableId, !1]
}), Ze = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), Je = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), $e = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), at = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), et = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), tt = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), st = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), rt = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), mt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), ot = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), nt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), it = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), dt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), pt = (a, e = 0) => ({ code: y, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), lt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), ct = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), Et = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), It = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, a.skillId] }), At = (a, e = 0) => ({ code: S, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), Tt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), Ct = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), _t = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), yt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), St = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), gt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Rt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), kt = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), Mt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Nt = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, d = 0) => ({ code: 322, indent: d, parameters: [a, m, s, t, e, n] }), ut = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), bt = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Lt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Pt = (a, e = 0) => ({
  code: sa,
  parameters: [a.actorId, a.name],
  indent: e
}), vt = (a, e = 0) => ({ code: ra, parameters: [a.actorId, a.nickname], indent: e }), Ot = (a, e = 0) => ({
  code: ma,
  parameters: [a.actorId, a.profile],
  indent: e
}), _ = { direct: 0, variable: 1 }, ht = (a, e = 0) => ({ code: V, indent: e, parameters: Q(0, a) }), Dt = (a, e = 0) => ({ code: V, indent: e, parameters: Q(1, a) }), ft = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: P(0, a)
}), Ft = (a, e = 0) => ({ code: U, indent: e, parameters: P(1, a) }), Bt = (a, e = 0) => ({ code: H, indent: e, parameters: P(0, a) }), Gt = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value], Q = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value, e.allowDeath], xt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), wt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), Vt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Ht = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Ut = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), ua = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, Yt = (a) => ua[a], Wt = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), qt = (a, e = 0) => E(X, a, e), Xt = (a, e = 0) => E(K, a, e), Kt = (a, e = 0) => E(z, a, e), zt = (a, e = 0) => E(j, a, e), jt = (a, e = 0) => E(Y, a, e), Qt = (a, e = 0) => E(q, a, e), Zt = (a, e = 0) => E(W, a, e), Jt = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), $t = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), as = 0, es = 1, ts = 2, ss = (a) => a.parameters[0] === 1, rs = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: D,
  indent: s,
  parameters: [0, a, e, t]
}), ms = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: D, indent: s, parameters: [1, a, e, t] }), os = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: D,
  indent: t,
  parameters: [2, 0, a, e]
}), ba = { plus: 0, minus: 1 }, ns = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ba[a ?? "plus"] ?? 0, e ?? 0] });
function is(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const ds = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ps = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), ls = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), cs = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), Es = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Is = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), As = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Ts = (a, e = 0) => ({ code: oa, indent: e, parameters: La(a ?? {}) }), Cs = (a) => ({
  eventId: a[0]
}), La = (a) => [a.eventId ?? 0], _s = (a) => ({ min: a[0], max: a[1], value: a[2] }), Pa = (a) => [a.min, a.max, a.value], ys = (a, e = 0) => ({ code: na, indent: e, parameters: Pa(a) }), Ss = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), gs = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Rs = (a) => ({ variableId: a[0], maxDigits: a[1] }), ks = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), Ms = (a) => ({ variableId: a[0], itemType: a[1] }), Ns = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), us = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), bs = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), Ls = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), Ps = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), vs = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Os = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), hs = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Ds = (a = 0) => ({ code: 134, parameters: [0], indent: a }), fs = (a = 0) => ({ code: 137, parameters: [1], indent: a }), Fs = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), Z = (a) => [a], Bs = (a) => ({ comment: a[0] }), va = (a, e = 0) => ({ code: da, indent: e, parameters: Z(a) }), Oa = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: Z(a)
}), Gs = (a, e = 0) => a.map(((t, s) => s === 0 ? va(t, e) : Oa(t, e))), ha = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], xs = (a) => ({ speed: a[0], skip: a[1] }), ws = (a = {}, e = 0) => ({
  code: la,
  indent: e,
  parameters: ha(a)
}), Da = (a = "") => [a], Vs = (a) => ({ content: a[0] }), Hs = (a = "", e = 0) => ({ code: pa, indent: e ?? 0, parameters: Da(a) }), Us = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Ys = (a) => ({
  index: a[0],
  name: a[1]
}), Ws = (a) => [a.index ?? 0, a.name ?? ""], qs = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Xs = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Ks = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), zs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), js = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Qs = (a) => ({
  filename: a[0]
}), Zs = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Js = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), $s = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), ar = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), er = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), tr = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), sr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), rr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), mr = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: d = 100, opacity: o = 255, blendMode: I = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, d, o, I]
}), or = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: d, blendMode: o, wait: I = !1, easingType: v = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, n, d, o, I, v]
}), nr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), ir = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), dr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), pr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), lr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), cr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), fa = (a, e = 0) => ({ code: Ea, indent: e, parameters: [a] }), Fa = (a, e = 0) => ({
  code: ca,
  indent: e,
  parameters: [a]
}), Er = (a, e = 0) => a.map(((t, s) => s === 0 ? fa(t, e) : Fa(t, e))), Ir = 1, Ar = 0, b = { item: 0, weapon: 1, armors: 2 }, Tr = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const n = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Ia, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0, e] } : {
    code: Aa,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0]
  };
})), Cr = 0, _r = 1, yr = 2, Sr = 3, gr = 4, Rr = 5, kr = 0, Mr = 1, Nr = 2, ur = 3, br = 4, Lr = 0, Pr = 1, vr = 2, Or = (a) => a.parameters[2] === 1, Ba = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], hr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Ba(a, e, t.operation ?? 0)
}), Dr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), fr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Fr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Br = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Gr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), xr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), wr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), Vr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), Hr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Ur = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), Ga = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Yr = (a, e, t = {}) => ({ code: i, indent: t.indent ?? 0, parameters: xa(a, e) }), xa = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, Ga[e.param]], Wr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, qr = (a, e) => {
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
}, wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], Xr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: wa(a, e, t.operation ?? 0)
}), Va = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], Kr = (a, e) => ({
  code: i,
  indent: 0,
  parameters: Va(a, e, 0)
}), Ha = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], zr = (a, e, t = {}) => ({ code: i, indent: t.indent ?? 0, parameters: Ha(a, e, t.operation ?? 0) }), Ua = {
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
}, Ya = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ua[e.param]], jr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Ya(a, e, t.operation ?? 0)
}), Qr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Wa(a, e, t.operation ?? 0)
}), Wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Zr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: qa(a, e, t.operation ?? 0)
}), Xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Jr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Xa(a, e, t.operation ?? 0)
}), Ka = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], $r = (a, e) => ({ code: i, indent: 0, parameters: Ka(a, e, 0) }), am = (a = 0) => ({ code: 206, indent: a, parameters: [] }), em = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), tm = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), sm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), rm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), mm = 0, om = 1, nm = 2, im = (a) => a.code === X || a.code === K || a.code === z || a.code === j || a.code === Y || a.code === q || a.code === W, za = (a) => [...a], dm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: za(a.parameters)
}), ja = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", pm = (a) => a.parameters.every(ja), lm = "bgm", cm = "se", Em = "me", Im = "bgs", Am = "battlebacks1", Tm = "battlebacks2", Cm = "characters", _m = "enemies", ym = "faces", Sm = "parallaxes", gm = "pictures", Rm = "sv_actors", km = "sv_enemies", Mm = "system", Nm = "tilesets", um = "titles1", bm = "titles2", Lm = "data", Pm = "img", vm = "audio", Om = "js", f = (a, e) => `\\${a}[${e}]`, hm = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: f(a, s)
}))), Dm = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), fm = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: f("N", e.id)
}))), Fm = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: f("V", t) }))).filter(((e) => e.text !== "")), Bm = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), Gm = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), xm = (a) => ({
  span: a.span ?? 0,
  conditions: Qa(a.conditions ?? {}),
  list: a.list ?? []
}), wm = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), Qa = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), Za = (a = {}) => ({
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
}), Ja = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), $a = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), ae = ({ list: a = [], conditions: e = Za(), image: t = $a(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: o = !1, through: I = !1, walkAnime: v = !1, moveSpeed: aa = 3, moveType: ea = 0, trigger: ta = 0 } = {}) => ({
  walkAnime: v,
  stepAnime: o,
  through: I,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: d,
  moveFrequency: s,
  moveSpeed: aa,
  moveType: ea,
  trigger: ta,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Vm = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Hm = (a) => ee({ events: [Ja({ pages: [ae({ list: a })] })] }), ee = (a = {}) => ({
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
  bgm: a.bgm ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  bgs: a.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: a.disableDashing ?? !1,
  displayName: a.displayName ?? "",
  encounterList: a.encounterList ?? [],
  events: a.events ?? []
}), Um = (a = { id: 0 }) => {
  return {
    name: a.name ?? (e = a.id, e.toString().padStart(3, "0")),
    id: a.id,
    expanded: a.expanded ?? !1,
    order: a.order ?? 0,
    parentId: a.parentId ?? 0,
    scrollX: a.scrollX ?? 0,
    scrollY: a.scrollY ?? 0
  };
  var e;
}, Ym = (a, e) => a.map(((t) => t ? { ...t, pages: te(t, e) } : null)), te = (a, e) => a.pages.map(((t) => ({ ...t, list: e(t.list) }))), se = {
  actor: {
    title: "アクター",
    options: {
      initialEquipments: "初期装備",
      faceImage: "顔画像",
      characterImage: "キャラクター画像",
      svBattlerImage: "SVバトラー画像",
      nickname: "ニックネーム",
      profile: "プロフィール",
      classId: "職業ID",
      initialLevel: "初期レベル",
      maxLevel: "最大レベル"
    }
  },
  class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } },
  enemy: { title: "敵キャラ", options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" } },
  item: { title: "アイテム", options: { consumable: "消耗品" } },
  skill: { title: "スキル", options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  } },
  state: { title: "ステート", options: {
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
  } },
  weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: { title: "", options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  } },
  commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } }
}, re = {
  title: "ダメージ",
  options: {}
}, F = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), Wm = (a = {}) => ({
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
}), qm = (a) => ({
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
}), Xm = (a = {}) => ({
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
}), Km = (a = {}) => ({ name: a.name ?? "", id: a.id ?? 0, traits: [], note: a.note ?? "", params: a.params ?? J(), learnings: a.learnings ?? [], expParams: a.expParams ?? [] }), zm = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? me(a.params) : J(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), J = () => [[0], [0], [0], [0], [0], [0], [0], [0]], me = (a) => {
  const e = a.map(((o) => o.atk)), t = a.map(((o) => o.def)), s = a.map(((o) => o.mat)), m = a.map(((o) => o.mdf)), n = a.map(((o) => o.agi)), d = a.map(((o) => o.luk));
  return [a.map(((o) => o.mhp)), a.map(((o) => o.mmp)), e, t, s, m, n, d];
}, oe = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: d = 0, luk: o = 0 }) => [a, e, t, s, m, n, d, o], jm = (a) => {
  const [e, t, s, m, n, d, o, I] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: d, agi: o, luk: I };
}, ne = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Qm = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Zm = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => ne())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : oe({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), Jm = (a = {}) => ({
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
}), p = "{name}", C = "{name} * {value}%", B = "{name} + {value}%", G = "{value}", ie = { title: "特徴", options: {
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
} }, de = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, $m = (a, e, t) => {
  const s = Ma(de);
  return Na(e, t, s, a.pattern, ((m) => m.dataId));
}, ao = (a = {}) => ({
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
}), eo = {
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
}, to = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, so = 0, ro = 1, mo = 2, x = "{name} {value1}%", O = "{value1}% + {value2}", w = "{name} {value1}ターン", M = "{name}", pe = { title: "使用効果", options: {
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
} }, oo = 0, no = (a, e, t) => {
  const s = t.find(((n) => n.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, io = { title: "アイテム", options: { consumable: "消耗品" } }, po = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, lo = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, co = (a = {}) => ({
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
}), Eo = (a = {}) => ({
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
}), Io = "data", Ao = "actor", To = "map", Co = "enemy", _o = "state", yo = "skill", So = "item", go = "weapon", Ro = "armor", ko = "class", Mo = "common_event", No = "troop", le = {
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
}, uo = () => ({ rpg: { damage: re, data: se, traits: ie, itemEffect: pe }, global: le }), ce = (a = {}) => ({
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
}), Ee = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], Ie = (a) => ({
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
}), Ae = (a) => ({
  item: Te(a),
  skill: Ce(a),
  equip: _e(a),
  status: ye(a),
  formation: Se(a),
  save: ge(a)
}), Te = (a) => a.menuCommands[0], Ce = (a) => a.menuCommands[1], _e = (a) => a.menuCommands[2], ye = (a) => a.menuCommands[3], Se = (a) => a.menuCommands[4], ge = (a) => a.menuCommands[5], bo = (a) => a.itemCategories[0], Lo = (a) => a.itemCategories[1], Po = (a) => a.itemCategories[2], vo = (a) => a.itemCategories[3], Re = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Oo = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), ke = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], ho = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Me = (a = {}) => ({
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
}), Do = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), fo = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], Fo = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), Ne = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), h = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), ue = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Bo = { title: "オプション", options: {
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
} }, Go = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, xo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, wo = {
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
}, Vo = (a = $({})) => ({
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
    messages: ya(a.terms.messages)
  }
}), Ho = (a) => $({
  versionId: a.versionId,
  menuCommands: Ae(a),
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
  sounds: Ie(a.sounds),
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
}), $ = (a) => {
  const e = Le(a.size);
  return {
    ...Me(a.options),
    titleCommandWindow: Ne(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: Ee(a.sounds),
    editor: ue(a.editing),
    advanced: ce(a.advanced),
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
    testBattlers: Pe(a.battleTest?.testBattlers, ve),
    battleBgm: r(a.bgm?.battleBgm),
    victoryMe: r(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: be(a.terms ?? {}),
    itemCategories: Re(a.itemCategories),
    partyMembers: l(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: ke(a.menuCommands)
  };
}, be = (a) => ({ basic: ka(a.basic ?? {}), commands: Ra(a.commands ?? {}), params: ga(a.params ?? {}), messages: Sa(a.messages ?? {}) }), l = (a) => a ? [...a] : [], Le = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Pe = (a, e) => a ? a.map(e) : [], ve = (a) => a ? {
  actorId: a.actorId,
  equips: l(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Uo = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Yo = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Wo = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Ko as ABORT_BATTLE,
  as as BATTLE_DIRECT,
  ts as BATTLE_ENCOUNT,
  D as BATTLE_PROCESSING,
  es as BATTLE_VARIABLE,
  zo as CHANGE_ACTOR_IMAGES,
  jo as CHANGE_ACTOR_STATE,
  L as CHANGE_ARMORS,
  Qo as CHANGE_BATTLE_BACKGROUND,
  Y as CHANGE_BATTLE_BGM,
  Zo as CHANGE_CLASS,
  W as CHANGE_DEFEAT_ME,
  Jo as CHANGE_ENCOUNTER,
  $o as CHANGE_ENEMY_HP,
  an as CHANGE_ENEMY_MP,
  en as CHANGE_ENEMY_STATE,
  tn as CHANGE_ENEMY_TP,
  sn as CHANGE_EQUIP,
  c as CHANGE_EXP,
  rn as CHANGE_FORMATION_ACCESS,
  mn as CHANGE_GOLD,
  V as CHANGE_HP,
  N as CHANGE_ITEMS,
  y as CHANGE_LEVEL,
  on as CHANGE_MAP_NAME_DISPLAY,
  nn as CHANGE_MENU_ACCESS,
  H as CHANGE_MP,
  sa as CHANGE_NAME,
  ra as CHANGE_NICKNAME,
  dn as CHANGE_PARALLAX,
  pn as CHANGE_PARAMETER,
  ln as CHANGE_PARTY_MEMBER,
  cn as CHANGE_PLAYER_FOLLOWERS,
  ma as CHANGE_PROFILE,
  En as CHANGE_SAVE_ACCESS,
  S as CHANGE_SKILL,
  In as CHANGE_TILESET,
  U as CHANGE_TP,
  An as CHANGE_TRANSPARENCY,
  Tn as CHANGE_VEHICLE_BGM,
  Cn as CHANGE_VEHICLE_IMAGE,
  q as CHANGE_VICTORY_ME,
  u as CHANGE_WEAPONS,
  _n as CHANGE_WINDOW_COLOR,
  Ni as COLLAPS_BOSS,
  ui as COLLAPS_INSTANT,
  bi as COLLAPS_NONE,
  Li as COLLAPS_NORMAL,
  ia as COMMENT_BODY,
  da as COMMENT_HEAD,
  oa as COMMON_EVENT,
  yn as CONDITIONAL_BRANCH,
  Sn as CONDITIONAL_BRANCH_ELSE,
  gn as CONTROL_SELF_SWITCH,
  na as CONTROL_SWITCHES,
  Rn as CONTROL_TIMER,
  i as CONTROL_VARIABLES,
  Ir as CUSTOM_PRICE,
  re as DEFAULT_DAMAGE_LABELS,
  le as DEFAULT_GLOBAL_LABELS,
  io as DEFAULT_ITEM_LABELS,
  po as DEFAULT_SKILL_LABELS,
  Bo as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Go as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  lo as DEFAULT_USABLE_ITEM_LABELS,
  Yo as DIRECTION,
  Pi as EFFECT_ADD_BUFF,
  vi as EFFECT_ADD_DEBUFF,
  Oi as EFFECT_ADD_STATE,
  hi as EFFECT_COMMON_EVENT,
  Di as EFFECT_GAIN_TP,
  fi as EFFECT_GROW,
  Fi as EFFECT_LEARN_SKILL,
  Bi as EFFECT_RECOVER_HP,
  Gi as EFFECT_RECOVER_MP,
  xi as EFFECT_REMOVE_BUFF,
  wi as EFFECT_REMOVE_DEBUFF,
  Vi as EFFECT_REMOVE_STATE,
  Hi as EFFECT_SPECIAL,
  kn as ENEMY_APPEAR,
  Mn as ENEMY_RECOVER_ALL,
  Nn as ENEMY_TRANSFORM,
  un as ERASE_EVENT,
  bn as ERASE_PICTURE,
  Ln as EXIT_EVENT_PROCESSING,
  Ui as EXTRA_PARAM_CEV,
  Yi as EXTRA_PARAM_CNT,
  Wi as EXTRA_PARAM_CRI,
  qi as EXTRA_PARAM_EVA,
  Xi as EXTRA_PARAM_HIT,
  Ki as EXTRA_PARAM_HRG,
  zi as EXTRA_PARAM_MEV,
  ji as EXTRA_PARAM_MRF,
  Qi as EXTRA_PARAM_MRG,
  Zi as EXTRA_PARAM_TRG,
  Pn as FADEIN_SCREEN,
  vn as FADEOUT_BGM,
  On as FADEOUT_BGS,
  hn as FADEOUT_SCREEN,
  Up as FILENAME_ACTORS,
  Yp as FILENAME_ANIMATIONS,
  Wp as FILENAME_ARMORS,
  qp as FILENAME_CLASSES,
  Xp as FILENAME_COMMON_EVENTS,
  Kp as FILENAME_ENEMIES,
  zp as FILENAME_ITEMS,
  jp as FILENAME_MAP_INFOS,
  Qp as FILENAME_SKILLS,
  Zp as FILENAME_STATES,
  Jp as FILENAME_SYSTEM,
  $p as FILENAME_TILESET,
  al as FILENAME_TROOPS,
  el as FILENAME_WEAPONS,
  Ji as FLAG_ID_AUTO_BATTLE,
  $i as FLAG_ID_GUARD,
  ad as FLAG_ID_PRESERVE_TP,
  ed as FLAG_ID_SUBSTITUTE,
  Dn as FLASH_SCREEN,
  vm as FOLDER_AUDIO,
  lm as FOLDER_AUDIO_BGM,
  Im as FOLDER_AUDIO_BGS,
  Em as FOLDER_AUDIO_ME,
  cm as FOLDER_AUDIO_SE,
  Lm as FOLDER_DATA,
  Pm as FOLDER_IMG,
  Am as FOLDER_IMG_BATTLEBACK1,
  Tm as FOLDER_IMG_BATTLEBACK2,
  Cm as FOLDER_IMG_CHACTERS,
  _m as FOLDER_IMG_ENEMIES,
  ym as FOLDER_IMG_FACES,
  Sm as FOLDER_IMG_PARALLACES,
  gm as FOLDER_IMG_PICTURES,
  Rm as FOLDER_IMG_SV_ACTORS,
  km as FOLDER_IMG_SV_ENEMIES,
  Mm as FOLDER_IMG_SYSTEM,
  Nm as FOLDER_IMG_TILESETS,
  um as FOLDER_IMG_TITLES1,
  bm as FOLDER_IMG_TITLES2,
  Om as FOLDER_JS,
  fn as FORCE_ACTION,
  Fn as GAME_OVER,
  Bn as GATHER_FOLLOWERS,
  Gn as GET_LOCATION_INFO,
  xn as GET_ONOFF_VEHICLE,
  so as HITTYPE_CERTAIN,
  mo as HITTYPE_MAGICAL,
  ro as HITTYPE_PHYSICAL,
  wn as INPUT_NUMBER,
  Vn as LABEL,
  to as LABELS_DATA_WEAPON,
  xo as LABELS_SYSTEM_BATTLER_PARAMS,
  wo as LABELS_SYSTEM_GAME_COMMANDS,
  Hn as LABEL_JUMP,
  se as LABEL_SET_DATA,
  pe as LABEL_SET_ITEM_EFFECT,
  ie as LABEL_SET_TRAIT,
  Un as LOOP,
  Yn as LOOP_BREAK,
  Io as MODULE_DATA,
  Wn as MOVE_PICTURE,
  qn as NAME_INPUT_PROCESSING,
  Ar as NORMAL_PRICE,
  Xn as NO_OPERATION,
  Kn as OPEN_MENU_SCREEN,
  zn as OPEN_SAVE_SCREEN,
  kr as OPERAND_CONSTANT,
  ur as OPERAND_GAMEDATA,
  Nr as OPERAND_RANDOM,
  br as OPERAND_SCRIPT,
  Mr as OPERAND_VARIABLE,
  _r as OPERATION_ADD,
  gr as OPERATION_DIVIDE,
  Rr as OPERATION_MOD,
  Sr as OPERATION_MULTIPLY,
  Cr as OPERATION_SET,
  yr as OPERATION_SUBTRACT,
  td as PARTY_ABILITY_CANCEL_SURPRISE,
  sd as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  rd as PARTY_ABILITY_ENCOUNTER_HALF,
  md as PARTY_ABILITY_ENCOUNTER_NONE,
  od as PARTY_ABILITY_GOLD_DOUBLE,
  nd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  X as PLAY_BGM,
  K as PLAY_BGS,
  z as PLAY_ME,
  jn as PLAY_MOVIE,
  j as PLAY_SE,
  Qn as PLUGIN_COMMAND_MV,
  Zn as PLUGIN_COMMAND_MZ,
  Jn as RECOVER_ALL,
  id as REGULAR_PARAM_AGI,
  dd as REGULAR_PARAM_ATK,
  pd as REGULAR_PARAM_DEF,
  ld as REGULAR_PARAM_LUK,
  cd as REGULAR_PARAM_MATK,
  Ed as REGULAR_PARAM_MAX_HP,
  Id as REGULAR_PARAM_MAX_MP,
  Ad as REGULAR_PARAM_MDEF,
  $n as RESUME_BGM,
  ai as RETURN_TO_TITLE_SCREEN,
  ei as ROTATE_PICTURE,
  ti as SAVE_BGM,
  eo as SCHEMA_DATA_WEAPON,
  Ea as SCRIPT_EVAL,
  ca as SCRIPT_EVAL_BODY,
  si as SCROLL_MAP,
  ri as SELECT_ITEM,
  mi as SET_EVENT_LOCATION,
  oi as SET_MOVEMENT_ROUTE,
  ni as SET_VEHICLE_LOCATION,
  ii as SET_WEATHER_EFFECT,
  di as SHAKE_SCREEN,
  Ia as SHOP_PROCESSING,
  Aa as SHOP_PROCESSING_BODY,
  pi as SHOW_ANIMATION,
  li as SHOW_BALLOON_ICON,
  ci as SHOW_BATTLE_ANIMATION,
  Ei as SHOW_CHOICES,
  Ii as SHOW_CHOICES_ITEM,
  Ai as SHOW_MESSAGE,
  Ti as SHOW_MESSAGE_BODY,
  Ci as SHOW_PICTURE,
  la as SHOW_SCROLLING_TEXT,
  pa as SHOW_SCROLLING_TEXT_BODY,
  _i as SKIP,
  oo as SPECIAL_EFFECT_ESCAPE,
  Td as SPECIAL_PARAM_EXR,
  Cd as SPECIAL_PARAM_FDR,
  _d as SPECIAL_PARAM_GRD,
  yd as SPECIAL_PARAM_MCR,
  Sd as SPECIAL_PARAM_MDR,
  gd as SPECIAL_PARAM_PDR,
  Rd as SPECIAL_PARAM_PHA,
  kd as SPECIAL_PARAM_REC,
  Md as SPECIAL_PARAM_TCR,
  Nd as SPECIAL_PARAM_TGR,
  Ao as SRC_DATA_ACTOR,
  Ro as SRC_DATA_ARMOR,
  ko as SRC_DATA_CLASS,
  Mo as SRC_DATA_COMMON_EVNET,
  Co as SRC_DATA_ENEMY,
  So as SRC_DATA_ITEMS,
  To as SRC_DATA_MAP,
  yo as SRC_DATA_SKILL,
  _o as SRC_DATA_STATE,
  No as SRC_DATA_TROOP,
  go as SRC_DATA_WEAPON,
  yi as STOP_SE,
  Si as TINT_PICTURE,
  gi as TINT_SCREEN,
  ud as TRAIT_ACTION_PLUS,
  bd as TRAIT_ATTACK_ELEMENT,
  Ld as TRAIT_ATTACK_SKILL,
  Pd as TRAIT_ATTACK_SPEED,
  vd as TRAIT_ATTACK_STATE,
  Od as TRAIT_ATTACK_TIMES,
  hd as TRAIT_COLLAPSE_TYPE,
  Dd as TRAIT_DEBUFF_RATE,
  fd as TRAIT_ELEMENT_RATE,
  Fd as TRAIT_EQUIP_ARMOR_TYPE,
  Bd as TRAIT_EQUIP_LOCK,
  Gd as TRAIT_EQUIP_SEAL,
  xd as TRAIT_EQUIP_WEAPON_TYPE,
  wd as TRAIT_PARAM,
  Vd as TRAIT_PARTY_ABILITY,
  Hd as TRAIT_SKILL_ADD,
  Ud as TRAIT_SKILL_SEAL,
  Yd as TRAIT_SKILL_TYPE_ADD,
  Wd as TRAIT_SKILL_TYPE_SEAL,
  qd as TRAIT_SLOT_TYPE,
  Xd as TRAIT_SPARAM,
  Kd as TRAIT_SPECIAL_FLAG,
  zd as TRAIT_STATE_RATE,
  jd as TRAIT_STATE_RESIST,
  Qd as TRAIT_XPARAM,
  Ri as TRANSFER_PLAYER,
  vr as TYPE_ARMOR,
  Lr as TYPE_ITEM,
  Pr as TYPE_WEAPON,
  nm as VEHICLE_AIRSHIP,
  mm as VEHICLE_BOAT,
  om as VEHICLE_SHIP,
  ki as WAIT,
  Yt as assetDirectoryName,
  Zd as buildNoteFromNormalized,
  zs as cloneChoices,
  dm as cloneEventCommand,
  za as cloneParameters,
  Jd as collapsOptionsToArray,
  Bs as convertCommentArrayToObject,
  ya as convertTermsMessageMZtoMV,
  fm as createActorControlChars,
  f as createControlCharFormat,
  Ae as createMenuCommandState,
  $d as createNoteEntity,
  Fm as createSystemVariableControlChars,
  ap as defineGameDataSources,
  ep as defineSystemItems,
  tp as defineTraitCollapseType,
  sp as defineTraitExtraParam,
  rp as defineTraitItems,
  mp as defineTraitPartyAbility,
  op as defineTraitRegularParam,
  np as defineTraitSpecialFlag,
  ip as defineTraitSpecialParam,
  dp as extraParamName,
  pp as extraParamsToArray,
  Wo as extractFileName,
  no as formatItemEffectText,
  $m as formatTraitText,
  Fe as fromArrayChangeItems,
  He as fromArrayChangeWeapons,
  Cs as fromArrayCommonEvent,
  _s as fromArrayControlSwitches,
  ds as fromArrayEnemyTransform,
  Rs as fromArrayInputNumber,
  Qs as fromArrayPlayMovie,
  Js as fromArrayPluginCommandMZ,
  Vs as fromArrayScrollingTextBody,
  xs as fromArrayScrollingTextHeader,
  Ms as fromArraySelectItem,
  qs as fromArraySetupChoice,
  Ys as fromArraySetupChoiceItem,
  lp as fromArrayShowMessageHeader,
  hm as fromStringArray,
  qr as getActorValue,
  Po as getArmorCategoryEnabled,
  cp as getArmorTypes,
  Dm as getControlChars,
  Ep as getElementTypes,
  Wr as getEnemyValue,
  _e as getEquipCommandEnabled,
  Ip as getEquipTypes,
  Se as getFormationCommandEnabled,
  bo as getItemCategoryEnabled,
  Te as getItemCommandEnabled,
  Ap as getItemIdFromItemCommand,
  vo as getKeyItemCategoryEnabled,
  Tp as getNoteValue,
  Fo as getParamNames,
  ge as getSaveCommandEnabled,
  Ce as getSkillCommandEnabled,
  Cp as getSkillTypes,
  ye as getStatusCommandEnabled,
  _p as getSwitches,
  yp as getVariableNames,
  Lo as getWeaponCategoryEnabled,
  Sp as getWeaponTypes,
  pm as isCloneableCommand,
  im as isCommandAnyAudio,
  ss as isCommandBattleProcessingVariable,
  Or as isCommandOperandVariables,
  gp as isUsingVariableItemCommand,
  fe as isUsingVaribleCommandChangingItems,
  uo as labelsRegistry,
  Wm as makeActorData,
  Xm as makeArmorData,
  Wt as makeAudioCommand,
  xm as makeBattleEventPage,
  Me as makeBooleanOptions,
  Km as makeClassData,
  zm as makeClassDataEx,
  cs as makeCommandAddEachEnemyState,
  ps as makeCommandAddEnemyState,
  $s as makeCommandAddPartyMember,
  gt as makeCommandAddStateByVariable,
  yt as makeCommandAddStateEachActor,
  Ct as makeCommandAddStateTargetActor,
  E as makeCommandAudioAny,
  rs as makeCommandBattleProcessingDirect,
  os as makeCommandBattleProcessingEncount,
  ms as makeCommandBattleProcessingVariable,
  Nt as makeCommandChangeActorImages,
  Pt as makeCommandChangeActorName,
  vt as makeCommandChangeActorNickName,
  Ot as makeCommandChangeActorProfile,
  jt as makeCommandChangeBattleBGM,
  $t as makeCommandChangeBattleBackground,
  kt as makeCommandChangeClass,
  Zt as makeCommandChangeDefeatME,
  Mt as makeCommandChangeEquip,
  Be as makeCommandChangeItems,
  Ns as makeCommandChangeParallax,
  Ps as makeCommandChangeTileset,
  tm as makeCommandChangeVehicleBGM,
  em as makeCommandChangeVehicleImage,
  Qt as makeCommandChangeVictoryME,
  Ue as makeCommandChangeWeapons,
  Oa as makeCommandCommentBody,
  va as makeCommandCommentHeader,
  Ts as makeCommandCommonEvent,
  ys as makeCommandControlSwitches,
  ns as makeCommandControlTimer,
  fs as makeCommandDisableFormationAccess,
  vs as makeCommandDisableMenuAccess,
  hs as makeCommandDisableSaveAccess,
  Fs as makeCommandEnableFormationAccess,
  Os as makeCommandEnableMenuAccess,
  Ds as makeCommandEnableSaveAccess,
  As as makeCommandEnemyRecoverAll,
  Is as makeCommandEnemyRecoverAllEach,
  is as makeCommandEnemyTransform,
  ir as makeCommandFadeInScreen,
  wt as makeCommandFadeOutBGM,
  Ut as makeCommandFadeOutBGS,
  dr as makeCommandFadeOutScreen,
  pr as makeCommandFlashScreen,
  ct as makeCommandForgetSkill,
  Tt as makeCommandForgetSkillByVariable,
  It as makeCommandForgetSkillEachActor,
  ht as makeCommandGainActorHP,
  Bt as makeCommandGainActorMP,
  ft as makeCommandGainActorTP,
  Ke as makeCommandGainArmor,
  ze as makeCommandGainArmorByVariable,
  $e as makeCommandGainExpByVariable,
  Ze as makeCommandGainExpDirect,
  st as makeCommandGainExpTargetAndOperandVariable,
  et as makeCommandGainExpTargetVariable,
  er as makeCommandGainGold,
  sr as makeCommandGainGoldByVariable,
  Ge as makeCommandGainItem,
  xe as makeCommandGainItemV,
  Ye as makeCommandGainWeapon,
  We as makeCommandGainWeaponV,
  am as makeCommandGetOnOffVehicle,
  Ls as makeCommandHideMapName,
  Ss as makeCommandInputNumber,
  lt as makeCommandLearnSkill,
  At as makeCommandLearnSkillByVariable,
  Et as makeCommandLearnSkillEachActor,
  ot as makeCommandLevelDownActor,
  it as makeCommandLevelDownActorByVariable,
  pt as makeCommandLevelDownEachActors,
  mt as makeCommandLevelUpActor,
  nt as makeCommandLevelUpActorByVariable,
  dt as makeCommandLevelUpEachActors,
  Dt as makeCommandLoseActorHP,
  Gt as makeCommandLoseActorMP,
  Ft as makeCommandLoseActorTP,
  je as makeCommandLoseArmor,
  Qe as makeCommandLoseArmorByVariable,
  at as makeCommandLoseExpByVariable,
  Je as makeCommandLoseExpDirect,
  rt as makeCommandLoseExpTargetAndOperandVariable,
  tt as makeCommandLoseExpTargetVariable,
  tr as makeCommandLoseGold,
  rr as makeCommandLoseGoldByVariable,
  we as makeCommandLoseItem,
  Ve as makeCommandLoseItemV,
  qe as makeCommandLoseWeapon,
  Xe as makeCommandLoseWeaponV,
  or as makeCommandMovePicture,
  qt as makeCommandPlayBGM,
  Xt as makeCommandPlayBGS,
  Kt as makeCommandPlayME,
  js as makeCommandPlayMovie,
  zt as makeCommandPlaySE,
  Zs as makeCommandPluginCommandMZ,
  ut as makeCommandRecoverAllEachActors,
  bt as makeCommandRecoverAllTargetActor,
  Lt as makeCommandRecoverAllTargetActorByVariable,
  _t as makeCommandRemoveActorTargetState,
  Es as makeCommandRemoveEachEnemyState,
  ls as makeCommandRemoveEnemyState,
  ar as makeCommandRemovePartyMember,
  Rt as makeCommandRemoveStateByVariable,
  St as makeCommandRemoveStateEachActors,
  Ht as makeCommandResumeBGM,
  Vt as makeCommandSaveBGM,
  Er as makeCommandScriptArray,
  Fa as makeCommandScriptBody,
  fa as makeCommandScriptHeader,
  us as makeCommandScrollMap,
  Hs as makeCommandScrollingTextBody,
  ws as makeCommandScrollingTextHeader,
  ks as makeCommandSelectItem,
  sm as makeCommandSetVehicleLocation,
  rm as makeCommandSetVehicleLocationFromVariables,
  nr as makeCommandSetWeatherEffect,
  Ks as makeCommandSetupChoice,
  lr as makeCommandShakeScreen,
  Tr as makeCommandShopProcessing,
  xt as makeCommandShowAnimation,
  Jt as makeCommandShowBalloonIcon,
  Us as makeCommandShowChoiceItem,
  bs as makeCommandShowMapName,
  Rp as makeCommandShowMessage,
  kp as makeCommandShowMessageBody,
  mr as makeCommandShowPicture,
  Vr as makeCommandSystemBattleCount,
  Ur as makeCommandSystemEscapeCount,
  wr as makeCommandSystemSaveCount,
  xr as makeCommandSystemTimer,
  Hr as makeCommandSystemWinCount,
  cr as makeCommandTintScreen,
  Xr as makeCommandVariableFromActorStatusData,
  Kr as makeCommandVariableFromArmor,
  zr as makeCommandVariableFromConstant,
  jr as makeCommandVariableFromEnemyData,
  Qr as makeCommandVariableFromItemData,
  Dr as makeCommandVariableFromMapId,
  Br as makeCommandVariableFromPartyGold,
  fr as makeCommandVariableFromPartyMembers,
  Fr as makeCommandVariableFromPartySteps,
  Gr as makeCommandVariableFromPlaytime,
  Zr as makeCommandVariableFromRandom,
  Jr as makeCommandVariableFromScript,
  Yr as makeCommandVariableFromTempLastData,
  hr as makeCommandVariableFromVariable,
  $r as makeCommandVariableFromWeapon,
  Z as makeCommentArray,
  Gs as makeCommentCommandArray,
  Bm as makeCommonEventData,
  F as makeDamage,
  fo as makeDataNames,
  ne as makeDropItem,
  ue as makeEditorSetting,
  Qm as makeEnemyAction,
  Zm as makeEnemyData,
  Za as makeEventPageCondition,
  Do as makeGameInitial,
  Re as makeItemCategories,
  Oo as makeItemCategoriesFromArray,
  co as makeItemData,
  ee as makeMapData,
  Hm as makeMapDataFromSingleEvent,
  Ja as makeMapEvent,
  $a as makeMapEventIamge,
  ae as makeMapEventPage,
  Vm as makeMapFileInfo,
  Um as makeMapInfoData,
  ke as makeMenuCommandsEnabled,
  ho as makeMenuCommandsEnabledFromArray,
  oe as makeParamArray,
  ga as makeParamNamesArray,
  Ta as makeParamNamesFromArray,
  Eo as makeSkillData,
  Ee as makeSoundsArray,
  Ie as makeSoundsObject,
  Jm as makeStateData,
  ce as makeSystemAdvanced,
  $ as makeSystemData,
  Ho as makeSystemDataFromMV,
  Vo as makeSystemDataMV,
  ka as makeTermsBasic,
  _a as makeTermsBasicFromArray,
  Ra as makeTermsCommandArray,
  Mp as makeTermsCommandArrayWithNulls,
  Ca as makeTermsCommandFromArray,
  Sa as makeTermsMessages,
  Ne as makeTitleCommandWindow,
  Gm as makeTroopData,
  Qa as makeTroopEventConditions,
  wm as makeTroopMember,
  h as makeVehicleData,
  ao as makeWeaponData,
  qm as normalizeDataActor,
  Np as normalizeNote,
  jm as paramArrayToObject,
  up as partyAbilityToArray,
  bp as readNote,
  Lp as readNoteEx,
  Pp as readNoteObject,
  vp as regularParamName,
  Op as regularParamsToArray,
  hp as replaceNote,
  Dp as replaceNoteWithHandlers,
  Ym as repleaceMapEventCommands,
  fp as resolveItemEffectLabels,
  Fp as resolveTraitLabels,
  Bp as setNoteValue,
  Gp as specialFlagToArray,
  xp as specialParamName,
  wp as specialParamsToArray,
  Uo as textAndDesc,
  La as toArrayCommonEvent,
  Pa as toArrayControlSwitches,
  gs as toArrayInputNumber,
  wa as toArrayOperandActorStatus,
  Va as toArrayOperandArmorData,
  Ha as toArrayOperandConstant,
  Ya as toArrayOperandEnemyStatus,
  Wa as toArrayOperandItemData,
  qa as toArrayOperandRandom,
  Xa as toArrayOperandScript,
  Ba as toArrayOperandVariable,
  Ka as toArrayOperandWeaponData,
  Da as toArrayScrollingTextBody,
  ha as toArrayScrollingTextHeader,
  Xs as toArraySetupChoice,
  Ws as toArraySetupChoiceItem,
  Vp as toArrayShowMessageHeader
};
