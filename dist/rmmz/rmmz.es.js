import { q as N, N as u, b as L, m as c, r as S, G as y, v as Q, w as Z, E as J, p as V, u as H, I as U, d as $, f as aa, M as ea, am as ta, an as sa, ao as ra, aq as ma, B as D, R as oa, V as na, P as ia, Q as da, aS as pa, aR as la, az as ca, ay as Ea, aH as Ia, aI as Aa, X as i } from "../shared/eventCommandCodes.es.js";
import { A as rn, C as mn, a as on, c as nn, e as dn, g as pn, h as ln, i as cn, j as En, k as In, l as An, n as Tn, o as Cn, s as _n, t as Sn, x as yn, y as gn, z as Rn, D as kn, F as Mn, H as Nn, J as un, K as bn, L as Ln, O as Pn, S as vn, T as On, U as hn, W as Dn, Y as fn, Z as Fn, _ as Bn, $ as Gn, a0 as xn, a1 as wn, a2 as Vn, a3 as Hn, a4 as Un, a5 as Yn, a6 as Wn, a7 as qn, a8 as Xn, a9 as Kn, aa as zn, ab as jn, ac as Qn, ad as Zn, ae as Jn, af as $n, ag as ai, ah as ei, ai as ti, aj as si, ak as ri, al as mi, ap as oi, ar as ni, as as ii, at as di, au as pi, av as li, aw as ci, ax as Ei, aA as Ii, aB as Ai, aC as Ti, aD as Ci, aE as _i, aF as Si, aG as yi, aJ as gi, aK as Ri, aL as ki, aM as Mi, aN as Ni, aO as ui, aP as bi, aQ as Li, aT as Pi, aU as vi, aV as Oi, aW as hi, aX as Di, aY as fi } from "../shared/eventCommandCodes.es.js";
import { be as g, bg as R, bh as T, bf as k, aT as Ta, aY as Ca, aV as _a, as as Sa, aZ as ya, aS as ga, aW as Ra, aU as ka } from "../shared/commands.es.js";
import { C as Bi, a as Gi, b as xi, c as wi, E as Vi, d as Hi, e as Ui, f as Yi, g as Wi, h as qi, i as Xi, j as Ki, k as zi, l as ji, m as Qi, n as Zi, o as Ji, p as $i, q as ad, r as ed, s as td, t as sd, u as rd, v as md, w as od, x as nd, y as id, F as dd, z as pd, A as ld, B as cd, P as Ed, D as Id, G as Ad, H as Td, I as Cd, J as _d, R as Sd, K as yd, L as gd, M as Rd, N as kd, O as Md, Q as Nd, S as ud, T as bd, U as Ld, V as Pd, W as vd, X as Od, Y as hd, Z as Dd, _ as fd, $ as Fd, a0 as Bd, a1 as Gd, a2 as xd, a3 as wd, a4 as Vd, a5 as Hd, a6 as Ud, a7 as Yd, a8 as Wd, a9 as qd, aa as Xd, ab as Kd, ac as zd, ad as jd, ae as Qd, af as Zd, ag as Jd, ah as $d, ai as ap, aj as ep, ak as tp, al as sp, am as rp, an as mp, ao as op, ap as np, aq as ip, ar as dp, at as pp, au as lp, av as cp, aw as Ep, ax as Ip, ay as Ap, az as Tp, aA as Cp, aB as _p, aC as Sp, aD as yp, aE as gp, aF as Rp, aG as kp, aH as Mp, aI as Np, aJ as up, aK as bp, aL as Lp, aM as Pp, aN as vp, aO as Op, aP as hp, aQ as Dp, aR as fp, aX as Fp, a_ as Bp, a$ as Gp, b0 as xp, b1 as wp, b2 as Vp, b3 as Hp, b4 as Up, b5 as Yp, b6 as Wp, b7 as qp, b8 as Xp, b9 as Kp, ba as zp, bb as jp, bc as Qp, bd as Zp } from "../shared/commands.es.js";
import { m as r, c as Ma, a as Na } from "../shared/make.es.js";
const De = (a) => a.parameters[3] === T, fe = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), Fe = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), Be = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, g, R, a.value] }), Ge = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, g, T, a.variableId]
}), xe = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, k, R, a.value] }), we = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, k, T, a.variableId]
}), Ve = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), He = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Ue = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, g, R, a.value, !1] }), Ye = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, g, T, a.variableId, !1]
}), We = (a, e = 0) => ({ code: u, indent: e, parameters: [a.weaponId, k, R, a.value, !1] }), qe = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [a.weaponId, k, T, a.variableId, !1]
}), Xe = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, g, R, a.value, !1] }), Ke = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, g, T, a.variableId, !1]
}), ze = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, k, R, a.value, !1] }), je = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, k, T, a.variableId, !1]
}), Qe = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), Ze = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), Je = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), $e = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), at = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), et = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), tt = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), st = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), rt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), mt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), ot = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), nt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), it = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), dt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), pt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), lt = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), ct = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), Et = (a, e = 0) => ({ code: y, indent: e, parameters: [0, 0, 1, a.skillId] }), It = (a, e = 0) => ({ code: y, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), At = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), Tt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), Ct = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), _t = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), St = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), yt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), gt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), Rt = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), kt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Mt = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, d = 0) => ({ code: 322, indent: d, parameters: [a, m, s, t, e, n] }), Nt = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), ut = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), bt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Lt = (a, e = 0) => ({
  code: Q,
  parameters: [a.actorId, a.name],
  indent: e
}), Pt = (a, e = 0) => ({ code: Z, parameters: [a.actorId, a.nickname], indent: e }), vt = (a, e = 0) => ({
  code: J,
  parameters: [a.actorId, a.profile],
  indent: e
}), _ = { direct: 0, variable: 1 }, Ot = (a, e = 0) => ({ code: V, indent: e, parameters: Y(0, a) }), ht = (a, e = 0) => ({ code: V, indent: e, parameters: Y(1, a) }), Dt = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: P(0, a)
}), ft = (a, e = 0) => ({ code: U, indent: e, parameters: P(1, a) }), Ft = (a, e = 0) => ({ code: H, indent: e, parameters: P(0, a) }), Bt = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value], Y = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value, e.allowDeath], Gt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), xt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), wt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Vt = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Ht = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Ut = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), Yt = (a, e = 0) => E(ta, a, e), Wt = (a, e = 0) => E(sa, a, e), qt = (a, e = 0) => E(ra, a, e), Xt = (a, e = 0) => E(ma, a, e), Kt = (a, e = 0) => E($, a, e), zt = (a, e = 0) => E(ea, a, e), jt = (a, e = 0) => E(aa, a, e), Qt = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), Zt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), Jt = 0, $t = 1, as = 2, es = (a) => a.parameters[0] === 1, ts = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: D,
  indent: s,
  parameters: [0, a, e, t]
}), ss = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: D, indent: s, parameters: [1, a, e, t] }), rs = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: D,
  indent: t,
  parameters: [2, 0, a, e]
}), ua = { plus: 0, minus: 1 }, ms = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ua[a ?? "plus"] ?? 0, e ?? 0] });
function os(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const ns = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), is = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), ds = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), ps = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), ls = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), cs = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), Es = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Is = (a, e = 0) => ({ code: oa, indent: e, parameters: ba(a ?? {}) }), As = (a) => ({
  eventId: a[0]
}), ba = (a) => [a.eventId ?? 0], Ts = (a) => ({ min: a[0], max: a[1], value: a[2] }), La = (a) => [a.min, a.max, a.value], Cs = (a, e = 0) => ({ code: na, indent: e, parameters: La(a) }), _s = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Ss = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], ys = (a) => ({ variableId: a[0], maxDigits: a[1] }), gs = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), Rs = (a) => ({ variableId: a[0], itemType: a[1] }), ks = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), Ms = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), Ns = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), us = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), bs = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Ls = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Ps = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), vs = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Os = (a = 0) => ({ code: 134, parameters: [0], indent: a }), hs = (a = 0) => ({ code: 137, parameters: [1], indent: a }), Ds = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), W = (a) => [a], fs = (a) => ({ comment: a[0] }), Pa = (a, e = 0) => ({ code: da, indent: e, parameters: W(a) }), va = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: W(a)
}), Fs = (a, e = 0) => a.map(((t, s) => s === 0 ? Pa(t, e) : va(t, e))), Oa = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Bs = (a) => ({ speed: a[0], skip: a[1] }), Gs = (a = {}, e = 0) => ({
  code: la,
  indent: e,
  parameters: Oa(a)
}), ha = (a = "") => [a], xs = (a) => ({ content: a[0] }), ws = (a = "", e = 0) => ({ code: pa, indent: e ?? 0, parameters: ha(a) }), Vs = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Hs = (a) => ({
  index: a[0],
  name: a[1]
}), Us = (a) => [a.index ?? 0, a.name ?? ""], Ys = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Ws = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], qs = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), Xs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Ks = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), zs = (a) => ({
  filename: a[0]
}), js = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Qs = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Zs = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Js = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), $s = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), ar = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), er = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), tr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), sr = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: d = 100, opacity: o = 255, blendMode: I = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, d, o, I]
}), rr = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: d, blendMode: o, wait: I = !1, easingType: v = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, n, d, o, I, v]
}), mr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), or = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), nr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), ir = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), dr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), pr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Da = (a, e = 0) => ({ code: Ea, indent: e, parameters: [a] }), fa = (a, e = 0) => ({
  code: ca,
  indent: e,
  parameters: [a]
}), lr = (a, e = 0) => a.map(((t, s) => s === 0 ? Da(t, e) : fa(t, e))), cr = 1, Er = 0, b = { item: 0, weapon: 1, armors: 2 }, Ir = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const n = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Ia, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0, e] } : {
    code: Aa,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0]
  };
})), Ar = 0, Tr = 1, Cr = 2, _r = 3, Sr = 4, yr = 5, gr = 0, Rr = 1, kr = 2, Mr = 3, Nr = 4, ur = 0, br = 1, Lr = 2, Pr = (a) => a.parameters[2] === 1, Fa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], vr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Fa(a, e, t.operation ?? 0)
}), Or = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), hr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Dr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), fr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Fr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), Br = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Gr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), xr = (a, e = 0) => ({
  code: i,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), wr = (a, e = 0) => ({ code: i, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Vr = (a, e = 0) => ({
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
}, Hr = (a, e, t = {}) => ({ code: i, indent: t.indent ?? 0, parameters: Ga(a, e) }), Ga = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, Ba[e.param]], Ur = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Yr = (a, e) => {
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
}, xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], Wr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: xa(a, e, t.operation ?? 0)
}), wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], qr = (a, e) => ({
  code: i,
  indent: 0,
  parameters: wa(a, e, 0)
}), Va = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], Xr = (a, e, t = {}) => ({ code: i, indent: t.indent ?? 0, parameters: Va(a, e, t.operation ?? 0) }), Ha = {
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
}, Ua = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ha[e.param]], Kr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Ua(a, e, t.operation ?? 0)
}), zr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Ya(a, e, t.operation ?? 0)
}), Ya = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], jr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: Wa(a, e, t.operation ?? 0)
}), qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Qr = (a, e, t = {}) => ({
  code: i,
  indent: t.indent ?? 0,
  parameters: qa(a, e, t.operation ?? 0)
}), Xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], Zr = (a, e) => ({ code: i, indent: 0, parameters: Xa(a, e, 0) }), Jr = (a = 0) => ({ code: 206, indent: a, parameters: [] }), $r = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), am = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), em = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), tm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), sm = 0, rm = 1, mm = 2, Ka = (a) => [...a], om = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ka(a.parameters)
}), za = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", nm = (a) => a.parameters.every(za), im = "bgm", dm = "se", pm = "me", lm = "bgs", cm = "battlebacks1", Em = "battlebacks2", Im = "characters", Am = "enemies", Tm = "faces", Cm = "parallaxes", _m = "pictures", Sm = "sv_actors", ym = "sv_enemies", gm = "system", Rm = "tilesets", km = "titles1", Mm = "titles2", Nm = "System.json", um = "Actors.json", bm = "Classes.json", Lm = "Skills.json", Pm = "Items.json", vm = "Weapons.json", Om = "Armors.json", hm = "Enemies.json", Dm = "Troops.json", fm = "States.json", Fm = "Animations.json", Bm = "Tilesets.json", Gm = "CommonEvents.json", xm = "MapInfos.json", wm = "data", Vm = "img", Hm = "audio", Um = "js", f = (a, e) => `\\${a}[${e}]`, Ym = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: f(a, s)
}))), Wm = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), qm = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: f("N", e.id)
}))), Xm = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: f("V", t) }))).filter(((e) => e.text !== "")), Km = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), zm = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), jm = (a) => ({
  span: a.span ?? 0,
  conditions: ja(a.conditions ?? {}),
  list: a.list ?? []
}), Qm = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), ja = (a = {}) => ({
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
}), Za = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), Ja = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), $a = ({ list: a = [], conditions: e = Qa(), image: t = Ja(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
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
}), Zm = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Jm = (a) => ae({ events: [Za({ pages: [$a({ list: a })] })] }), ae = (a = {}) => ({
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
}), $m = (a = { id: 0 }) => {
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
}, ao = (a, e) => a.map(((t) => t ? { ...t, pages: ee(t, e) } : null)), ee = (a, e) => a.pages.map(((t) => ({ ...t, list: e(t.list) }))), te = {
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
}, se = {
  title: "ダメージ",
  options: {}
}, F = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), eo = (a = {}) => ({
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
}), to = (a) => ({
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
}), so = (a = {}) => ({
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
}), ro = (a = {}) => ({ name: a.name ?? "", id: a.id ?? 0, traits: [], note: a.note ?? "", params: a.params ?? q(), learnings: a.learnings ?? [], expParams: a.expParams ?? [] }), mo = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? re(a.params) : q(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), q = () => [[0], [0], [0], [0], [0], [0], [0], [0]], re = (a) => {
  const e = a.map(((o) => o.atk)), t = a.map(((o) => o.def)), s = a.map(((o) => o.mat)), m = a.map(((o) => o.mdf)), n = a.map(((o) => o.agi)), d = a.map(((o) => o.luk));
  return [a.map(((o) => o.mhp)), a.map(((o) => o.mmp)), e, t, s, m, n, d];
}, me = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: d = 0, luk: o = 0 }) => [a, e, t, s, m, n, d, o], oo = (a) => {
  const [e, t, s, m, n, d, o, I] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: d, agi: o, luk: I };
}, oe = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), no = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), io = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => oe())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : me({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), po = (a = {}) => ({
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
}), p = "{name}", C = "{name} * {value}%", B = "{name} + {value}%", G = "{value}", ne = { title: "特徴", options: {
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
} }, ie = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, lo = (a, e, t) => {
  const s = Ma(ie);
  return Na(e, t, s, a.pattern, ((m) => m.dataId));
}, co = (a = {}) => ({
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
}), Eo = {
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
}, Io = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Ao = 0, To = 1, Co = 2, x = "{name} {value1}%", O = "{value1}% + {value2}", w = "{name} {value1}ターン", M = "{name}", de = { title: "使用効果", options: {
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
} }, _o = 0, So = (a, e, t) => {
  const s = t.find(((n) => n.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, yo = { title: "アイテム", options: { consumable: "消耗品" } }, go = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Ro = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, ko = (a = {}) => ({
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
}), Mo = (a = {}) => ({
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
}), No = "data", uo = "actor", bo = "map", Lo = "enemy", Po = "state", vo = "skill", Oo = "item", ho = "weapon", Do = "armor", fo = "class", Fo = "common_event", Bo = "troop", pe = {
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
}, Go = () => ({ rpg: { damage: se, data: te, traits: ne, itemEffect: de }, global: pe }), le = (a = {}) => ({
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
}), ce = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], Ee = (a) => ({
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
}), Ie = (a) => ({
  item: Ae(a),
  skill: Te(a),
  equip: Ce(a),
  status: _e(a),
  formation: Se(a),
  save: ye(a)
}), Ae = (a) => a.menuCommands[0], Te = (a) => a.menuCommands[1], Ce = (a) => a.menuCommands[2], _e = (a) => a.menuCommands[3], Se = (a) => a.menuCommands[4], ye = (a) => a.menuCommands[5], xo = (a) => a.itemCategories[0], wo = (a) => a.itemCategories[1], Vo = (a) => a.itemCategories[2], Ho = (a) => a.itemCategories[3], ge = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Uo = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Re = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], Yo = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), ke = (a = {}) => ({
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
}), Wo = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), qo = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], Xo = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), Me = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), h = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Ne = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Ko = { title: "オプション", options: {
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
} }, zo = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, jo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Qo = {
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
}, Zo = (a = X({})) => ({
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
}), Jo = (a) => X({
  versionId: a.versionId,
  menuCommands: Ie(a),
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
  sounds: Ee(a.sounds),
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
  const e = be(a.size);
  return {
    ...ke(a.options),
    titleCommandWindow: Me(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: ce(a.sounds),
    editor: Ne(a.editing),
    advanced: le(a.advanced),
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
    testBattlers: Le(a.battleTest?.testBattlers, Pe),
    battleBgm: r(a.bgm?.battleBgm),
    victoryMe: r(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ue(a.terms ?? {}),
    itemCategories: ge(a.itemCategories),
    partyMembers: l(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: Re(a.menuCommands)
  };
}, ue = (a) => ({ basic: ka(a.basic ?? {}), commands: Ra(a.commands ?? {}), params: ga(a.params ?? {}), messages: ya(a.messages ?? {}) }), l = (a) => a ? [...a] : [], be = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Le = (a, e) => a ? a.map(e) : [], Pe = (a) => a ? {
  actorId: a.actorId,
  equips: l(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, $o = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), an = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, en = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  rn as ABORT_BATTLE,
  Jt as BATTLE_DIRECT,
  as as BATTLE_ENCOUNT,
  D as BATTLE_PROCESSING,
  $t as BATTLE_VARIABLE,
  mn as CHANGE_ACTOR_IMAGES,
  on as CHANGE_ACTOR_STATE,
  L as CHANGE_ARMORS,
  nn as CHANGE_BATTLE_BACKGROUND,
  $ as CHANGE_BATTLE_BGM,
  dn as CHANGE_CLASS,
  aa as CHANGE_DEFEAT_ME,
  pn as CHANGE_ENCOUNTER,
  ln as CHANGE_ENEMY_HP,
  cn as CHANGE_ENEMY_MP,
  En as CHANGE_ENEMY_STATE,
  In as CHANGE_ENEMY_TP,
  An as CHANGE_EQUIP,
  c as CHANGE_EXP,
  Tn as CHANGE_FORMATION_ACCESS,
  Cn as CHANGE_GOLD,
  V as CHANGE_HP,
  N as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  _n as CHANGE_MAP_NAME_DISPLAY,
  Sn as CHANGE_MENU_ACCESS,
  H as CHANGE_MP,
  Q as CHANGE_NAME,
  Z as CHANGE_NICKNAME,
  yn as CHANGE_PARALLAX,
  gn as CHANGE_PARAMETER,
  Rn as CHANGE_PARTY_MEMBER,
  kn as CHANGE_PLAYER_FOLLOWERS,
  J as CHANGE_PROFILE,
  Mn as CHANGE_SAVE_ACCESS,
  y as CHANGE_SKILL,
  Nn as CHANGE_TILESET,
  U as CHANGE_TP,
  un as CHANGE_TRANSPARENCY,
  bn as CHANGE_VEHICLE_BGM,
  Ln as CHANGE_VEHICLE_IMAGE,
  ea as CHANGE_VICTORY_ME,
  u as CHANGE_WEAPONS,
  Pn as CHANGE_WINDOW_COLOR,
  Bi as COLLAPS_BOSS,
  Gi as COLLAPS_INSTANT,
  xi as COLLAPS_NONE,
  wi as COLLAPS_NORMAL,
  ia as COMMENT_BODY,
  da as COMMENT_HEAD,
  oa as COMMON_EVENT,
  vn as CONDITIONAL_BRANCH,
  On as CONDITIONAL_BRANCH_ELSE,
  hn as CONTROL_SELF_SWITCH,
  na as CONTROL_SWITCHES,
  Dn as CONTROL_TIMER,
  i as CONTROL_VARIABLES,
  cr as CUSTOM_PRICE,
  se as DEFAULT_DAMAGE_LABELS,
  pe as DEFAULT_GLOBAL_LABELS,
  yo as DEFAULT_ITEM_LABELS,
  go as DEFAULT_SKILL_LABELS,
  Ko as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  zo as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Ro as DEFAULT_USABLE_ITEM_LABELS,
  an as DIRECTION,
  Vi as EFFECT_ADD_BUFF,
  Hi as EFFECT_ADD_DEBUFF,
  Ui as EFFECT_ADD_STATE,
  Yi as EFFECT_COMMON_EVENT,
  Wi as EFFECT_GAIN_TP,
  qi as EFFECT_GROW,
  Xi as EFFECT_LEARN_SKILL,
  Ki as EFFECT_RECOVER_HP,
  zi as EFFECT_RECOVER_MP,
  ji as EFFECT_REMOVE_BUFF,
  Qi as EFFECT_REMOVE_DEBUFF,
  Zi as EFFECT_REMOVE_STATE,
  Ji as EFFECT_SPECIAL,
  fn as ENEMY_APPEAR,
  Fn as ENEMY_RECOVER_ALL,
  Bn as ENEMY_TRANSFORM,
  Gn as ERASE_EVENT,
  xn as ERASE_PICTURE,
  wn as EXIT_EVENT_PROCESSING,
  $i as EXTRA_PARAM_CEV,
  ad as EXTRA_PARAM_CNT,
  ed as EXTRA_PARAM_CRI,
  td as EXTRA_PARAM_EVA,
  sd as EXTRA_PARAM_HIT,
  rd as EXTRA_PARAM_HRG,
  md as EXTRA_PARAM_MEV,
  od as EXTRA_PARAM_MRF,
  nd as EXTRA_PARAM_MRG,
  id as EXTRA_PARAM_TRG,
  Vn as FADEIN_SCREEN,
  Hn as FADEOUT_BGM,
  Un as FADEOUT_BGS,
  Yn as FADEOUT_SCREEN,
  um as FILENAME_ACTORS,
  Fm as FILENAME_ANIMATIONS,
  Om as FILENAME_ARMORS,
  bm as FILENAME_CLASSES,
  Gm as FILENAME_COMMON_EVENTS,
  hm as FILENAME_ENEMIES,
  Pm as FILENAME_ITEMS,
  xm as FILENAME_MAP_INFOS,
  Lm as FILENAME_SKILLS,
  fm as FILENAME_STATES,
  Nm as FILENAME_SYSTEM,
  Bm as FILENAME_TILESET,
  Dm as FILENAME_TROOPS,
  vm as FILENAME_WEAPONS,
  dd as FLAG_ID_AUTO_BATTLE,
  pd as FLAG_ID_GUARD,
  ld as FLAG_ID_PRESERVE_TP,
  cd as FLAG_ID_SUBSTITUTE,
  Wn as FLASH_SCREEN,
  Hm as FOLDER_AUDIO,
  im as FOLDER_AUDIO_BGM,
  lm as FOLDER_AUDIO_BGS,
  pm as FOLDER_AUDIO_ME,
  dm as FOLDER_AUDIO_SE,
  wm as FOLDER_DATA,
  Vm as FOLDER_IMG,
  cm as FOLDER_IMG_BATTLEBACK1,
  Em as FOLDER_IMG_BATTLEBACK2,
  Im as FOLDER_IMG_CHACTERS,
  Am as FOLDER_IMG_ENEMIES,
  Tm as FOLDER_IMG_FACES,
  Cm as FOLDER_IMG_PARALLACES,
  _m as FOLDER_IMG_PICTURES,
  Sm as FOLDER_IMG_SV_ACTORS,
  ym as FOLDER_IMG_SV_ENEMIES,
  gm as FOLDER_IMG_SYSTEM,
  Rm as FOLDER_IMG_TILESETS,
  km as FOLDER_IMG_TITLES1,
  Mm as FOLDER_IMG_TITLES2,
  Um as FOLDER_JS,
  qn as FORCE_ACTION,
  Xn as GAME_OVER,
  Kn as GATHER_FOLLOWERS,
  zn as GET_LOCATION_INFO,
  jn as GET_ONOFF_VEHICLE,
  Ao as HITTYPE_CERTAIN,
  Co as HITTYPE_MAGICAL,
  To as HITTYPE_PHYSICAL,
  Qn as INPUT_NUMBER,
  Zn as LABEL,
  Io as LABELS_DATA_WEAPON,
  jo as LABELS_SYSTEM_BATTLER_PARAMS,
  Qo as LABELS_SYSTEM_GAME_COMMANDS,
  Jn as LABEL_JUMP,
  te as LABEL_SET_DATA,
  de as LABEL_SET_ITEM_EFFECT,
  ne as LABEL_SET_TRAIT,
  $n as LOOP,
  ai as LOOP_BREAK,
  No as MODULE_DATA,
  ei as MOVE_PICTURE,
  ti as NAME_INPUT_PROCESSING,
  Er as NORMAL_PRICE,
  si as NO_OPERATION,
  ri as OPEN_MENU_SCREEN,
  mi as OPEN_SAVE_SCREEN,
  gr as OPERAND_CONSTANT,
  Mr as OPERAND_GAMEDATA,
  kr as OPERAND_RANDOM,
  Nr as OPERAND_SCRIPT,
  Rr as OPERAND_VARIABLE,
  Tr as OPERATION_ADD,
  Sr as OPERATION_DIVIDE,
  yr as OPERATION_MOD,
  _r as OPERATION_MULTIPLY,
  Ar as OPERATION_SET,
  Cr as OPERATION_SUBTRACT,
  Ed as PARTY_ABILITY_CANCEL_SURPRISE,
  Id as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Ad as PARTY_ABILITY_ENCOUNTER_HALF,
  Td as PARTY_ABILITY_ENCOUNTER_NONE,
  Cd as PARTY_ABILITY_GOLD_DOUBLE,
  _d as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ta as PLAY_BGM,
  sa as PLAY_BGS,
  ra as PLAY_ME,
  oi as PLAY_MOVIE,
  ma as PLAY_SE,
  ni as PLUGIN_COMMAND_MV,
  ii as PLUGIN_COMMAND_MZ,
  di as RECOVER_ALL,
  Sd as REGULAR_PARAM_AGI,
  yd as REGULAR_PARAM_ATK,
  gd as REGULAR_PARAM_DEF,
  Rd as REGULAR_PARAM_LUK,
  kd as REGULAR_PARAM_MATK,
  Md as REGULAR_PARAM_MAX_HP,
  Nd as REGULAR_PARAM_MAX_MP,
  ud as REGULAR_PARAM_MDEF,
  pi as RESUME_BGM,
  li as RETURN_TO_TITLE_SCREEN,
  ci as ROTATE_PICTURE,
  Ei as SAVE_BGM,
  Eo as SCHEMA_DATA_WEAPON,
  Ea as SCRIPT_EVAL,
  ca as SCRIPT_EVAL_BODY,
  Ii as SCROLL_MAP,
  Ai as SELECT_ITEM,
  Ti as SET_EVENT_LOCATION,
  Ci as SET_MOVEMENT_ROUTE,
  _i as SET_VEHICLE_LOCATION,
  Si as SET_WEATHER_EFFECT,
  yi as SHAKE_SCREEN,
  Ia as SHOP_PROCESSING,
  Aa as SHOP_PROCESSING_BODY,
  gi as SHOW_ANIMATION,
  Ri as SHOW_BALLOON_ICON,
  ki as SHOW_BATTLE_ANIMATION,
  Mi as SHOW_CHOICES,
  Ni as SHOW_CHOICES_ITEM,
  ui as SHOW_MESSAGE,
  bi as SHOW_MESSAGE_BODY,
  Li as SHOW_PICTURE,
  la as SHOW_SCROLLING_TEXT,
  pa as SHOW_SCROLLING_TEXT_BODY,
  Pi as SKIP,
  _o as SPECIAL_EFFECT_ESCAPE,
  bd as SPECIAL_PARAM_EXR,
  Ld as SPECIAL_PARAM_FDR,
  Pd as SPECIAL_PARAM_GRD,
  vd as SPECIAL_PARAM_MCR,
  Od as SPECIAL_PARAM_MDR,
  hd as SPECIAL_PARAM_PDR,
  Dd as SPECIAL_PARAM_PHA,
  fd as SPECIAL_PARAM_REC,
  Fd as SPECIAL_PARAM_TCR,
  Bd as SPECIAL_PARAM_TGR,
  uo as SRC_DATA_ACTOR,
  Do as SRC_DATA_ARMOR,
  fo as SRC_DATA_CLASS,
  Fo as SRC_DATA_COMMON_EVNET,
  Lo as SRC_DATA_ENEMY,
  Oo as SRC_DATA_ITEMS,
  bo as SRC_DATA_MAP,
  vo as SRC_DATA_SKILL,
  Po as SRC_DATA_STATE,
  Bo as SRC_DATA_TROOP,
  ho as SRC_DATA_WEAPON,
  vi as STOP_SE,
  Oi as TINT_PICTURE,
  hi as TINT_SCREEN,
  Gd as TRAIT_ACTION_PLUS,
  xd as TRAIT_ATTACK_ELEMENT,
  wd as TRAIT_ATTACK_SKILL,
  Vd as TRAIT_ATTACK_SPEED,
  Hd as TRAIT_ATTACK_STATE,
  Ud as TRAIT_ATTACK_TIMES,
  Yd as TRAIT_COLLAPSE_TYPE,
  Wd as TRAIT_DEBUFF_RATE,
  qd as TRAIT_ELEMENT_RATE,
  Xd as TRAIT_EQUIP_ARMOR_TYPE,
  Kd as TRAIT_EQUIP_LOCK,
  zd as TRAIT_EQUIP_SEAL,
  jd as TRAIT_EQUIP_WEAPON_TYPE,
  Qd as TRAIT_PARAM,
  Zd as TRAIT_PARTY_ABILITY,
  Jd as TRAIT_SKILL_ADD,
  $d as TRAIT_SKILL_SEAL,
  ap as TRAIT_SKILL_TYPE_ADD,
  ep as TRAIT_SKILL_TYPE_SEAL,
  tp as TRAIT_SLOT_TYPE,
  sp as TRAIT_SPARAM,
  rp as TRAIT_SPECIAL_FLAG,
  mp as TRAIT_STATE_RATE,
  op as TRAIT_STATE_RESIST,
  np as TRAIT_XPARAM,
  Di as TRANSFER_PLAYER,
  Lr as TYPE_ARMOR,
  ur as TYPE_ITEM,
  br as TYPE_WEAPON,
  mm as VEHICLE_AIRSHIP,
  sm as VEHICLE_BOAT,
  rm as VEHICLE_SHIP,
  fi as WAIT,
  ip as buildNoteFromNormalized,
  Xs as cloneChoices,
  om as cloneEventCommand,
  Ka as cloneParameters,
  dp as collapsOptionsToArray,
  fs as convertCommentArrayToObject,
  Sa as convertTermsMessageMZtoMV,
  qm as createActorControlChars,
  f as createControlCharFormat,
  Ie as createMenuCommandState,
  pp as createNoteEntity,
  Xm as createSystemVariableControlChars,
  lp as defineGameDataSources,
  cp as defineSystemItems,
  Ep as defineTraitCollapseType,
  Ip as defineTraitExtraParam,
  Ap as defineTraitItems,
  Tp as defineTraitPartyAbility,
  Cp as defineTraitRegularParam,
  _p as defineTraitSpecialFlag,
  Sp as defineTraitSpecialParam,
  yp as extraParamName,
  gp as extraParamsToArray,
  en as extractFileName,
  So as formatItemEffectText,
  lo as formatTraitText,
  fe as fromArrayChangeItems,
  Ve as fromArrayChangeWeapons,
  As as fromArrayCommonEvent,
  Ts as fromArrayControlSwitches,
  ns as fromArrayEnemyTransform,
  ys as fromArrayInputNumber,
  zs as fromArrayPlayMovie,
  Qs as fromArrayPluginCommandMZ,
  xs as fromArrayScrollingTextBody,
  Bs as fromArrayScrollingTextHeader,
  Rs as fromArraySelectItem,
  Ys as fromArraySetupChoice,
  Hs as fromArraySetupChoiceItem,
  Rp as fromArrayShowMessageHeader,
  Ym as fromStringArray,
  Yr as getActorValue,
  Vo as getArmorCategoryEnabled,
  kp as getArmorTypes,
  Wm as getControlChars,
  Mp as getElementTypes,
  Ur as getEnemyValue,
  Ce as getEquipCommandEnabled,
  Np as getEquipTypes,
  Se as getFormationCommandEnabled,
  xo as getItemCategoryEnabled,
  Ae as getItemCommandEnabled,
  up as getItemIdFromItemCommand,
  Ho as getKeyItemCategoryEnabled,
  bp as getNoteValue,
  Xo as getParamNames,
  ye as getSaveCommandEnabled,
  Te as getSkillCommandEnabled,
  Lp as getSkillTypes,
  _e as getStatusCommandEnabled,
  Pp as getSwitches,
  vp as getVariableNames,
  wo as getWeaponCategoryEnabled,
  Op as getWeaponTypes,
  nm as isCloneableCommand,
  es as isCommandBattleProcessingVariable,
  Pr as isCommandOperandVariables,
  hp as isUsingVariableItemCommand,
  De as isUsingVaribleCommandChangingItems,
  Go as labelsRegistry,
  eo as makeActorData,
  so as makeArmorData,
  Ut as makeAudioCommand,
  jm as makeBattleEventPage,
  ke as makeBooleanOptions,
  ro as makeClassData,
  mo as makeClassDataEx,
  ps as makeCommandAddEachEnemyState,
  is as makeCommandAddEnemyState,
  Zs as makeCommandAddPartyMember,
  yt as makeCommandAddStateByVariable,
  _t as makeCommandAddStateEachActor,
  Tt as makeCommandAddStateTargetActor,
  E as makeCommandAudioAny,
  ts as makeCommandBattleProcessingDirect,
  rs as makeCommandBattleProcessingEncount,
  ss as makeCommandBattleProcessingVariable,
  Mt as makeCommandChangeActorImages,
  Lt as makeCommandChangeActorName,
  Pt as makeCommandChangeActorNickName,
  vt as makeCommandChangeActorProfile,
  Kt as makeCommandChangeBattleBGM,
  Zt as makeCommandChangeBattleBackground,
  Rt as makeCommandChangeClass,
  jt as makeCommandChangeDefeatME,
  kt as makeCommandChangeEquip,
  Fe as makeCommandChangeItems,
  ks as makeCommandChangeParallax,
  bs as makeCommandChangeTileset,
  am as makeCommandChangeVehicleBGM,
  $r as makeCommandChangeVehicleImage,
  zt as makeCommandChangeVictoryME,
  He as makeCommandChangeWeapons,
  va as makeCommandCommentBody,
  Pa as makeCommandCommentHeader,
  Is as makeCommandCommonEvent,
  Cs as makeCommandControlSwitches,
  ms as makeCommandControlTimer,
  hs as makeCommandDisableFormationAccess,
  Ls as makeCommandDisableMenuAccess,
  vs as makeCommandDisableSaveAccess,
  Ds as makeCommandEnableFormationAccess,
  Ps as makeCommandEnableMenuAccess,
  Os as makeCommandEnableSaveAccess,
  Es as makeCommandEnemyRecoverAll,
  cs as makeCommandEnemyRecoverAllEach,
  os as makeCommandEnemyTransform,
  or as makeCommandFadeInScreen,
  xt as makeCommandFadeOutBGM,
  Ht as makeCommandFadeOutBGS,
  nr as makeCommandFadeOutScreen,
  ir as makeCommandFlashScreen,
  lt as makeCommandForgetSkill,
  At as makeCommandForgetSkillByVariable,
  Et as makeCommandForgetSkillEachActor,
  Ot as makeCommandGainActorHP,
  Ft as makeCommandGainActorMP,
  Dt as makeCommandGainActorTP,
  Xe as makeCommandGainArmor,
  Ke as makeCommandGainArmorByVariable,
  Je as makeCommandGainExpByVariable,
  Qe as makeCommandGainExpDirect,
  tt as makeCommandGainExpTargetAndOperandVariable,
  at as makeCommandGainExpTargetVariable,
  $s as makeCommandGainGold,
  er as makeCommandGainGoldByVariable,
  Be as makeCommandGainItem,
  Ge as makeCommandGainItemV,
  Ue as makeCommandGainWeapon,
  Ye as makeCommandGainWeaponV,
  Jr as makeCommandGetOnOffVehicle,
  us as makeCommandHideMapName,
  _s as makeCommandInputNumber,
  pt as makeCommandLearnSkill,
  It as makeCommandLearnSkillByVariable,
  ct as makeCommandLearnSkillEachActor,
  mt as makeCommandLevelDownActor,
  nt as makeCommandLevelDownActorByVariable,
  dt as makeCommandLevelDownEachActors,
  rt as makeCommandLevelUpActor,
  ot as makeCommandLevelUpActorByVariable,
  it as makeCommandLevelUpEachActors,
  ht as makeCommandLoseActorHP,
  Bt as makeCommandLoseActorMP,
  ft as makeCommandLoseActorTP,
  ze as makeCommandLoseArmor,
  je as makeCommandLoseArmorByVariable,
  $e as makeCommandLoseExpByVariable,
  Ze as makeCommandLoseExpDirect,
  st as makeCommandLoseExpTargetAndOperandVariable,
  et as makeCommandLoseExpTargetVariable,
  ar as makeCommandLoseGold,
  tr as makeCommandLoseGoldByVariable,
  xe as makeCommandLoseItem,
  we as makeCommandLoseItemV,
  We as makeCommandLoseWeapon,
  qe as makeCommandLoseWeaponV,
  rr as makeCommandMovePicture,
  Yt as makeCommandPlayBGM,
  Wt as makeCommandPlayBGS,
  qt as makeCommandPlayME,
  Ks as makeCommandPlayMovie,
  Xt as makeCommandPlaySE,
  js as makeCommandPluginCommandMZ,
  Nt as makeCommandRecoverAllEachActors,
  ut as makeCommandRecoverAllTargetActor,
  bt as makeCommandRecoverAllTargetActorByVariable,
  Ct as makeCommandRemoveActorTargetState,
  ls as makeCommandRemoveEachEnemyState,
  ds as makeCommandRemoveEnemyState,
  Js as makeCommandRemovePartyMember,
  gt as makeCommandRemoveStateByVariable,
  St as makeCommandRemoveStateEachActors,
  Vt as makeCommandResumeBGM,
  wt as makeCommandSaveBGM,
  lr as makeCommandScriptArray,
  fa as makeCommandScriptBody,
  Da as makeCommandScriptHeader,
  Ms as makeCommandScrollMap,
  ws as makeCommandScrollingTextBody,
  Gs as makeCommandScrollingTextHeader,
  gs as makeCommandSelectItem,
  em as makeCommandSetVehicleLocation,
  tm as makeCommandSetVehicleLocationFromVariables,
  mr as makeCommandSetWeatherEffect,
  qs as makeCommandSetupChoice,
  dr as makeCommandShakeScreen,
  Ir as makeCommandShopProcessing,
  Gt as makeCommandShowAnimation,
  Qt as makeCommandShowBalloonIcon,
  Vs as makeCommandShowChoiceItem,
  Ns as makeCommandShowMapName,
  Dp as makeCommandShowMessage,
  fp as makeCommandShowMessageBody,
  sr as makeCommandShowPicture,
  xr as makeCommandSystemBattleCount,
  Vr as makeCommandSystemEscapeCount,
  Gr as makeCommandSystemSaveCount,
  Br as makeCommandSystemTimer,
  wr as makeCommandSystemWinCount,
  pr as makeCommandTintScreen,
  Wr as makeCommandVariableFromActorStatusData,
  qr as makeCommandVariableFromArmor,
  Xr as makeCommandVariableFromConstant,
  Kr as makeCommandVariableFromEnemyData,
  zr as makeCommandVariableFromItemData,
  Or as makeCommandVariableFromMapId,
  fr as makeCommandVariableFromPartyGold,
  hr as makeCommandVariableFromPartyMembers,
  Dr as makeCommandVariableFromPartySteps,
  Fr as makeCommandVariableFromPlaytime,
  jr as makeCommandVariableFromRandom,
  Qr as makeCommandVariableFromScript,
  Hr as makeCommandVariableFromTempLastData,
  vr as makeCommandVariableFromVariable,
  Zr as makeCommandVariableFromWeapon,
  W as makeCommentArray,
  Fs as makeCommentCommandArray,
  Km as makeCommonEventData,
  F as makeDamage,
  qo as makeDataNames,
  oe as makeDropItem,
  Ne as makeEditorSetting,
  no as makeEnemyAction,
  io as makeEnemyData,
  Qa as makeEventPageCondition,
  Wo as makeGameInitial,
  ge as makeItemCategories,
  Uo as makeItemCategoriesFromArray,
  ko as makeItemData,
  ae as makeMapData,
  Jm as makeMapDataFromSingleEvent,
  Za as makeMapEvent,
  Ja as makeMapEventIamge,
  $a as makeMapEventPage,
  Zm as makeMapFileInfo,
  $m as makeMapInfoData,
  Re as makeMenuCommandsEnabled,
  Yo as makeMenuCommandsEnabledFromArray,
  me as makeParamArray,
  ga as makeParamNamesArray,
  Ta as makeParamNamesFromArray,
  Mo as makeSkillData,
  ce as makeSoundsArray,
  Ee as makeSoundsObject,
  po as makeStateData,
  le as makeSystemAdvanced,
  X as makeSystemData,
  Jo as makeSystemDataFromMV,
  Zo as makeSystemDataMV,
  ka as makeTermsBasic,
  _a as makeTermsBasicFromArray,
  Ra as makeTermsCommandArray,
  Fp as makeTermsCommandArrayWithNulls,
  Ca as makeTermsCommandFromArray,
  ya as makeTermsMessages,
  Me as makeTitleCommandWindow,
  zm as makeTroopData,
  ja as makeTroopEventConditions,
  Qm as makeTroopMember,
  h as makeVehicleData,
  co as makeWeaponData,
  to as normalizeDataActor,
  Bp as normalizeNote,
  oo as paramArrayToObject,
  Gp as partyAbilityToArray,
  xp as readNote,
  wp as readNoteEx,
  Vp as readNoteObject,
  Hp as regularParamName,
  Up as regularParamsToArray,
  Yp as replaceNote,
  Wp as replaceNoteWithHandlers,
  ao as repleaceMapEventCommands,
  qp as resolveItemEffectLabels,
  Xp as resolveTraitLabels,
  Kp as setNoteValue,
  zp as specialFlagToArray,
  jp as specialParamName,
  Qp as specialParamsToArray,
  $o as textAndDesc,
  ba as toArrayCommonEvent,
  La as toArrayControlSwitches,
  Ss as toArrayInputNumber,
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
  Ws as toArraySetupChoice,
  Us as toArraySetupChoiceItem,
  Zp as toArrayShowMessageHeader
};
