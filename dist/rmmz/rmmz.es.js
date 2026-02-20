import { q as M, N as O, b as k, m as c, r as R, v as z, w as j, E as Q, p as V, u as x, I as w, d as Z, f as J, M as $, am as aa, an as ea, ao as ta, aq as sa, B as D, R as ra, V as ma, P as oa, Q as na, aS as ia, aR as da, az as pa, ay as la, aH as ca, aI as Ea, X as n } from "../shared/eventCommandCodes.es.js";
import { A as xn, C as wn, a as Hn, c as Yn, e as Wn, g as qn, h as Xn, i as Kn, j as zn, k as jn, l as Qn, n as Zn, o as Jn, s as $n, t as ai, x as ei, y as ti, z as si, D as ri, F as mi, G as oi, H as ni, J as ii, K as di, L as pi, O as li, S as ci, T as Ei, U as Ai, W as Ti, Y as Ii, Z as _i, _ as Ci, $ as Ri, a0 as Si, a1 as yi, a2 as gi, a3 as Ni, a4 as Mi, a5 as Oi, a6 as ui, a7 as ki, a8 as Li, a9 as bi, aa as Pi, ab as vi, ac as Di, ad as hi, ae as fi, af as Fi, ag as Gi, ah as Bi, ai as Ui, aj as Vi, ak as xi, al as wi, ap as Hi, ar as Yi, as as Wi, at as qi, au as Xi, av as Ki, aw as zi, ax as ji, aA as Qi, aB as Zi, aC as Ji, aD as $i, aE as ad, aF as ed, aG as td, aJ as sd, aK as rd, aL as md, aM as od, aN as nd, aO as id, aP as dd, aQ as pd, aT as ld, aU as cd, aV as Ed, aW as Ad, aX as Td, aY as Id } from "../shared/eventCommandCodes.es.js";
import { be as S, bg as y, bh as I, bf as g, aT as Aa, aY as Ta, aV as Ia, as as _a, aZ as Ca, aS as Ra, aW as Sa, aU as ya } from "../shared/commands.es.js";
import { C as Cd, a as Rd, b as Sd, c as yd, E as gd, d as Nd, e as Md, f as Od, g as ud, h as kd, i as Ld, j as bd, k as Pd, l as vd, m as Dd, n as hd, o as fd, p as Fd, q as Gd, r as Bd, s as Ud, t as Vd, u as xd, v as wd, w as Hd, x as Yd, y as Wd, F as qd, z as Xd, A as Kd, B as zd, P as jd, D as Qd, G as Zd, H as Jd, I as $d, J as ap, R as ep, K as tp, L as sp, M as rp, N as mp, O as op, Q as np, S as ip, T as dp, U as pp, V as lp, W as cp, X as Ep, Y as Ap, Z as Tp, _ as Ip, $ as _p, a0 as Cp, a1 as Rp, a2 as Sp, a3 as yp, a4 as gp, a5 as Np, a6 as Mp, a7 as Op, a8 as up, a9 as kp, aa as Lp, ab as bp, ac as Pp, ad as vp, ae as Dp, af as hp, ag as fp, ah as Fp, ai as Gp, aj as Bp, ak as Up, al as Vp, am as xp, an as wp, ao as Hp, ap as Yp, aq as Wp, ar as qp, at as Xp, au as Kp, av as zp, aw as jp, ax as Qp, ay as Zp, az as Jp, aA as $p, aB as al, aC as el, aD as tl, aE as sl, aF as rl, aG as ml, aH as ol, aI as nl, aJ as il, aK as dl, aL as pl, aM as ll, aN as cl, aO as El, aP as Al, aQ as Tl, aR as Il, aX as _l, a_ as Cl, a$ as Rl, b0 as Sl, b1 as yl, b2 as gl, b3 as Nl, b4 as Ml, b5 as Ol, b6 as ul, b7 as kl, b8 as Ll, b9 as bl, ba as Pl, bb as vl, bc as Dl, bd as hl } from "../shared/commands.es.js";
import { m as r, c as ga, a as Na } from "../shared/make.es.js";
const ke = (a) => a.parameters[3] === I, Le = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), be = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), Pe = (a, e = 0) => ({ code: M, indent: e, parameters: [a.itemId, S, y, a.value] }), ve = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.itemId, S, I, a.variableId]
}), De = (a, e = 0) => ({ code: M, indent: e, parameters: [a.itemId, g, y, a.value] }), he = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.itemId, g, I, a.variableId]
}), fe = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Fe = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Ge = (a, e = 0) => ({ code: O, indent: e, parameters: [a.weaponId, S, y, a.value, !1] }), Be = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, S, I, a.variableId, !1]
}), Ue = (a, e = 0) => ({ code: O, indent: e, parameters: [a.weaponId, g, y, a.value, !1] }), Ve = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, g, I, a.variableId, !1]
}), xe = (a, e = 0) => ({ code: k, indent: e, parameters: [a.armorId, S, y, a.value, !1] }), we = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.armorId, S, I, a.variableId, !1]
}), He = (a, e = 0) => ({ code: k, indent: e, parameters: [a.armorId, g, y, a.value, !1] }), Ye = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.armorId, g, I, a.variableId, !1]
}), We = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), qe = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), Xe = (a, e = 0) => ({ code: c, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), Ke = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), ze = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), je = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), Qe = (a, e = 0) => ({
  code: c,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Ze = (a, e = 0) => ({ code: c, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), Je = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), $e = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), at = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), et = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), tt = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), st = (a, e = 0) => ({ code: R, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), rt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 0, a.stateId]
}), mt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 1, a.stateId] }), ot = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, 0, 0, a.stateId]
}), nt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), it = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 0, a.stateId] }), dt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 1, a.stateId]
}), pt = (a, e = 0) => ({ code: 321, parameters: [a.actorId, a.classId, a.keepExp], indent: e }), lt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), ct = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, d = 0) => ({
  code: 322,
  indent: d,
  parameters: [a, m, s, t, e, o]
}), Et = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), At = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Tt = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), It = (a, e = 0) => ({ code: z, parameters: [a.actorId, a.name], indent: e }), _t = (a, e = 0) => ({
  code: j,
  parameters: [a.actorId, a.nickname],
  indent: e
}), Ct = (a, e = 0) => ({ code: Q, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, Rt = (a, e = 0) => ({ code: V, indent: e, parameters: H(0, a) }), St = (a, e = 0) => ({
  code: V,
  indent: e,
  parameters: H(1, a)
}), yt = (a, e = 0) => ({ code: w, indent: e, parameters: L(0, a) }), gt = (a, e = 0) => ({ code: w, indent: e, parameters: L(1, a) }), Nt = (a, e = 0) => ({
  code: x,
  indent: e,
  parameters: L(0, a)
}), Mt = (a, e = 0) => ({
  code: x,
  indent: e,
  parameters: L(1, a)
}), L = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], H = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], Ot = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), ut = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), kt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Lt = (a = 0) => ({ code: 244, indent: a, parameters: [] }), bt = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Pt = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), vt = (a, e = 0) => E(aa, a, e), Dt = (a, e = 0) => E(ea, a, e), ht = (a, e = 0) => E(ta, a, e), ft = (a, e = 0) => E(sa, a, e), Ft = (a, e = 0) => E(Z, a, e), Gt = (a, e = 0) => E($, a, e), Bt = (a, e = 0) => E(J, a, e), Ut = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), Vt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), xt = 0, wt = 1, Ht = 2, Yt = (a) => a.parameters[0] === 1, Wt = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: D,
  indent: s,
  parameters: [0, a, e, t]
}), qt = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: D, indent: s, parameters: [1, a, e, t] }), Xt = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: D,
  indent: t,
  parameters: [2, 0, a, e]
}), Ma = { plus: 0, minus: 1 }, Kt = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ma[a ?? "plus"] ?? 0, e ?? 0] });
function zt(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const jt = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Qt = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), Zt = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), Jt = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), $t = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), as = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), es = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), ts = (a, e = 0) => ({ code: ra, indent: e, parameters: Oa(a ?? {}) }), ss = (a) => ({
  eventId: a[0]
}), Oa = (a) => [a.eventId ?? 0], rs = (a) => ({ min: a[0], max: a[1], value: a[2] }), ua = (a) => [a.min, a.max, a.value], ms = (a, e = 0) => ({ code: ma, indent: e, parameters: ua(a) }), os = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), ns = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], is = (a) => ({ variableId: a[0], maxDigits: a[1] }), ds = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), ps = (a) => ({ variableId: a[0], itemType: a[1] }), ls = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), cs = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), Es = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), As = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), Ts = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Is = (a = 0) => ({ code: 135, parameters: [1], indent: a }), _s = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), Cs = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Rs = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Ss = (a = 0) => ({ code: 137, parameters: [1], indent: a }), ys = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), Y = (a) => [a], gs = (a) => ({ comment: a[0] }), ka = (a, e = 0) => ({ code: na, indent: e, parameters: Y(a) }), La = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: Y(a)
}), Ns = (a, e = 0) => a.map(((t, s) => s === 0 ? ka(t, e) : La(t, e))), ba = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Ms = (a) => ({ speed: a[0], skip: a[1] }), Os = (a = {}, e = 0) => ({
  code: da,
  indent: e,
  parameters: ba(a)
}), Pa = (a = "") => [a], us = (a) => ({ content: a[0] }), ks = (a = "", e = 0) => ({ code: ia, indent: e ?? 0, parameters: Pa(a) }), Ls = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), bs = (a) => ({
  index: a[0],
  name: a[1]
}), Ps = (a) => [a.index ?? 0, a.name ?? ""], vs = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Ds = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], hs = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), fs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Fs = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Gs = (a) => ({
  filename: a[0]
}), Bs = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Us = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Vs = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), xs = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), ws = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Hs = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Ys = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Ws = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), qs = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: d = 100, opacity: l = 255, blendMode: A = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, d, l, A]
}), Xs = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: d, blendMode: l, wait: A = !1, easingType: b = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, d, l, A, b]
}), Ks = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), zs = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), js = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Qs = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Zs = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Js = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), va = (a, e = 0) => ({ code: la, indent: e, parameters: [a] }), Da = (a, e = 0) => ({
  code: pa,
  indent: e,
  parameters: [a]
}), $s = (a, e = 0) => a.map(((t, s) => s === 0 ? va(t, e) : Da(t, e))), ar = 1, er = 0, u = { item: 0, weapon: 1, armors: 2 }, tr = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const o = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: ca, indent: t, parameters: [u[s.itemType] ?? u.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: Ea,
    indent: t,
    parameters: [u[s.itemType] ?? u.item, s.id, o, s.customPrice ?? 0]
  };
})), sr = 0, rr = 1, mr = 2, or = 3, nr = 4, ir = 5, dr = 0, pr = 1, lr = 2, cr = 3, Er = 4, Ar = 0, Tr = 1, Ir = 2, _r = (a) => a.parameters[2] === 1, ha = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], Cr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: ha(a, e, t.operation ?? 0)
}), Rr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), Sr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), yr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), gr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Nr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), Mr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Or = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), ur = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), kr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Lr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), fa = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, br = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Fa(a, e) }), Fa = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, fa[e.param]], Pr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, vr = (a, e) => {
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
}, Ga = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], Dr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ga(a, e, t.operation ?? 0)
}), Ba = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], hr = (a, e) => ({
  code: n,
  indent: 0,
  parameters: Ba(a, e, 0)
}), Ua = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], fr = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Ua(a, e, t.operation ?? 0) }), Va = {
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
}, xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Va[e.param]], Fr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: xa(a, e, t.operation ?? 0)
}), Gr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: wa(a, e, t.operation ?? 0)
}), wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ha = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Br = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ha(a, e, t.operation ?? 0)
}), Ya = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Ur = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ya(a, e, t.operation ?? 0)
}), Wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], Vr = (a, e) => ({ code: n, indent: 0, parameters: Wa(a, e, 0) }), xr = (a = 0) => ({ code: 206, indent: a, parameters: [] }), wr = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Hr = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), Yr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), Wr = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), qr = 0, Xr = 1, Kr = 2, qa = (a) => [...a], zr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: qa(a.parameters)
}), Xa = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", jr = (a) => a.parameters.every(Xa), Qr = "bgm", Zr = "se", Jr = "me", $r = "bgs", am = "battlebacks1", em = "battlebacks2", tm = "characters", sm = "enemies", rm = "faces", mm = "parallaxes", om = "pictures", nm = "sv_actors", im = "sv_enemies", dm = "system", pm = "tilesets", lm = "titles1", cm = "titles2", Em = "System.json", Am = "Actors.json", Tm = "Classes.json", Im = "Skills.json", _m = "Items.json", Cm = "Weapons.json", Rm = "Armors.json", Sm = "Enemies.json", ym = "Troops.json", gm = "States.json", Nm = "Animations.json", Mm = "Tilesets.json", Om = "CommonEvents.json", um = "MapInfos.json", km = "data", Lm = "img", bm = "audio", Pm = "js", h = (a, e) => `\\${a}[${e}]`, vm = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: h(a, s)
}))), Dm = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), hm = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: h("N", e.id)
}))), fm = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: h("V", t) }))).filter(((e) => e.text !== "")), Fm = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), Gm = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), Bm = (a) => ({
  span: a.span ?? 0,
  conditions: Ka(a.conditions ?? {}),
  list: a.list ?? []
}), Um = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), Ka = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), za = (a = {}) => ({
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
}), Vm = 0, xm = 1, wm = 2, Hm = 3, Ym = 4, Wm = 5, qm = 6, Xm = 7, Km = 8, zm = 9, jm = 10, Qm = 11, Zm = 12, Jm = 13, $m = 14, ao = 15, eo = 16, to = 17, so = 18, ro = 19, mo = 20, oo = 21, no = 22, io = 23, po = 24, lo = 25, co = 26, Eo = 27, Ao = 28, To = 29, Io = 30, _o = 31, Co = 32, Ro = 33, So = 34, yo = 35, go = 36, No = 37, Mo = 38, Oo = 39, uo = 40, ko = 41, Lo = 42, bo = 43, Po = 44, vo = 45, Do = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: o
}), ja = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), ho = ({ list: a = [], conditions: e = za(), image: t = ja(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: l = !1, through: A = !1, walkAnime: b = !1, moveSpeed: q = 3, moveType: X = 0, trigger: K = 0 } = {}) => ({
  walkAnime: b,
  stepAnime: l,
  through: A,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: d,
  moveFrequency: s,
  moveSpeed: q,
  moveType: X,
  trigger: K,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), fo = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Fo = (a = {}) => ({
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
}), Go = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, Bo = (a, e) => a.map(((t) => t ? {
  ...t,
  pages: Qa(t, e)
} : null)), Qa = (a, e) => a.pages.map(((t) => ({ ...t, list: e(t.list) }))), Za = { actor: { title: "アクター", options: {
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
} }, Ja = { title: "ダメージ", options: {} }, f = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), Uo = (a = {}) => ({
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
}), Vo = (a) => ({
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
}), xo = (a = {}) => ({
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
}), wo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), $a = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: d = 0, luk: l = 0 }) => [a, e, t, s, m, o, d, l], Ho = (a) => {
  const [e, t, s, m, o, d, l, A] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: d, agi: l, luk: A };
}, ae = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Yo = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Wo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => ae())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : $a({
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
}), qo = (a = {}) => ({
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
}), i = "{name}", _ = "{name} * {value}%", F = "{name} + {value}%", G = "{value}", ee = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: _, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: F, options: {
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
  specialParam: { title: "特殊能力値", format: _, options: {
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
  elementRate: { title: "属性有効度", format: _ },
  debuffRate: { title: "弱体有効度", format: _ },
  stateRate: { title: "ステート有効度", format: _ },
  stateResist: {
    title: "ステート無効",
    format: i
  },
  attackElement: { title: "攻撃属性", format: i },
  attackState: { title: "攻撃ステート", format: F },
  attackSpeed: { title: "攻撃速度補正", format: G },
  attackTimes: {
    title: "攻撃追加回数",
    format: G
  },
  actionPlus: { title: "行動追加", format: _ },
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
} }, te = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Xo = (a, e, t) => {
  const s = ga(te);
  return Na(e, t, s, a.pattern, ((m) => m.dataId));
}, Ko = (a = {}) => ({
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
  damage: f(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), zo = {
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
}, jo = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Qo = 0, Zo = 1, Jo = 2, B = "{name} {value1}%", P = "{value1}% + {value2}", U = "{name} {value1}ターン", N = "{name}", se = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: U },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: U },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: P },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: N },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: P
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: P },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: N
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: N },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: B },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: N
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: B },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: N }
} }, $o = 0, an = (a, e, t) => {
  const s = t.find(((o) => o.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, en = { title: "アイテム", options: { consumable: "消耗品" } }, tn = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, sn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, rn = (a = {}) => ({
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
  damage: f(a.damage ?? {}),
  effects: [],
  price: 0
}), mn = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: f(a.damage ?? {}),
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
}), on = "data", nn = "actor", dn = "map", pn = "enemy", ln = "state", cn = "skill", En = "item", An = "weapon", Tn = "armor", In = "class", _n = "common_event", Cn = "troop", re = {
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
}, Rn = () => ({ rpg: { damage: Ja, data: Za, traits: ee, itemEffect: se }, global: re }), me = (a = {}) => ({
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
}), oe = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], ne = (a) => ({
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
}), ie = (a) => ({
  item: de(a),
  skill: pe(a),
  equip: le(a),
  status: ce(a),
  formation: Ee(a),
  save: Ae(a)
}), de = (a) => a.menuCommands[0], pe = (a) => a.menuCommands[1], le = (a) => a.menuCommands[2], ce = (a) => a.menuCommands[3], Ee = (a) => a.menuCommands[4], Ae = (a) => a.menuCommands[5], Sn = (a) => a.itemCategories[0], yn = (a) => a.itemCategories[1], gn = (a) => a.itemCategories[2], Nn = (a) => a.itemCategories[3], Te = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Mn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Ie = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], On = (a) => ({
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
}), un = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), kn = (a) => ({
  armorTypes: T(a.armorTypes),
  elements: T(a.elements),
  equipTypes: T(a.equipTypes),
  weaponTypes: T(a.weaponTypes),
  skillTypes: T(a.skillTypes),
  variables: T(a.variables),
  switches: T(a.switches)
}), T = (a) => a ? [...a] : [], Ln = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), Ce = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), v = (a = {}) => ({
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
}), bn = { title: "オプション", options: {
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
} }, Pn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, vn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Dn = {
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
}, hn = (a = W({})) => ({
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
}), fn = (a) => W({
  versionId: a.versionId,
  menuCommands: ie(a),
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
  sounds: ne(a.sounds),
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
    basic: Ia(a.terms.basic),
    commands: Ta(a.terms.commands),
    params: Aa(a.terms.params),
    messages: a.terms.messages
  }
}), W = (a) => {
  const e = ye(a.size);
  return {
    ..._e(a.options),
    titleCommandWindow: Ce(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: oe(a.sounds),
    editor: Re(a.editing),
    advanced: me(a.advanced),
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
    airship: v(a.vehicles?.airship),
    boat: v(a.vehicles?.boat),
    ship: v(a.vehicles?.ship),
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
    testBattlers: ge(a.battleTest?.testBattlers, Ne),
    battleBgm: r(a.bgm?.battleBgm),
    victoryMe: r(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Se(a.terms ?? {}),
    itemCategories: Te(a.itemCategories),
    partyMembers: p(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: Ie(a.menuCommands)
  };
}, Se = (a) => ({ basic: ya(a.basic ?? {}), commands: Sa(a.commands ?? {}), params: Ra(a.params ?? {}), messages: Ca(a.messages ?? {}) }), p = (a) => a ? [...a] : [], ye = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, ge = (a, e) => a ? a.map(e) : [], Ne = (a) => a ? {
  actorId: a.actorId,
  equips: p(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Fn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Gn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Bn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  xn as ABORT_BATTLE,
  xt as BATTLE_DIRECT,
  Ht as BATTLE_ENCOUNT,
  D as BATTLE_PROCESSING,
  wt as BATTLE_VARIABLE,
  wn as CHANGE_ACTOR_IMAGES,
  Hn as CHANGE_ACTOR_STATE,
  k as CHANGE_ARMORS,
  Yn as CHANGE_BATTLE_BACKGROUND,
  Z as CHANGE_BATTLE_BGM,
  Wn as CHANGE_CLASS,
  J as CHANGE_DEFEAT_ME,
  qn as CHANGE_ENCOUNTER,
  Xn as CHANGE_ENEMY_HP,
  Kn as CHANGE_ENEMY_MP,
  zn as CHANGE_ENEMY_STATE,
  jn as CHANGE_ENEMY_TP,
  Qn as CHANGE_EQUIP,
  c as CHANGE_EXP,
  Zn as CHANGE_FORMATION_ACCESS,
  Jn as CHANGE_GOLD,
  V as CHANGE_HP,
  M as CHANGE_ITEMS,
  R as CHANGE_LEVEL,
  $n as CHANGE_MAP_NAME_DISPLAY,
  ai as CHANGE_MENU_ACCESS,
  x as CHANGE_MP,
  z as CHANGE_NAME,
  j as CHANGE_NICKNAME,
  ei as CHANGE_PARALLAX,
  ti as CHANGE_PARAMETER,
  si as CHANGE_PARTY_MEMBER,
  ri as CHANGE_PLAYER_FOLLOWERS,
  Q as CHANGE_PROFILE,
  mi as CHANGE_SAVE_ACCESS,
  oi as CHANGE_SKILL,
  ni as CHANGE_TILESET,
  w as CHANGE_TP,
  ii as CHANGE_TRANSPARENCY,
  di as CHANGE_VEHICLE_BGM,
  pi as CHANGE_VEHICLE_IMAGE,
  $ as CHANGE_VICTORY_ME,
  O as CHANGE_WEAPONS,
  li as CHANGE_WINDOW_COLOR,
  Cd as COLLAPS_BOSS,
  Rd as COLLAPS_INSTANT,
  Sd as COLLAPS_NONE,
  yd as COLLAPS_NORMAL,
  oa as COMMENT_BODY,
  na as COMMENT_HEAD,
  ra as COMMON_EVENT,
  ci as CONDITIONAL_BRANCH,
  Ei as CONDITIONAL_BRANCH_ELSE,
  Ai as CONTROL_SELF_SWITCH,
  ma as CONTROL_SWITCHES,
  Ti as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  ar as CUSTOM_PRICE,
  Ja as DEFAULT_DAMAGE_LABELS,
  re as DEFAULT_GLOBAL_LABELS,
  en as DEFAULT_ITEM_LABELS,
  tn as DEFAULT_SKILL_LABELS,
  bn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Pn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  sn as DEFAULT_USABLE_ITEM_LABELS,
  Gn as DIRECTION,
  gd as EFFECT_ADD_BUFF,
  Nd as EFFECT_ADD_DEBUFF,
  Md as EFFECT_ADD_STATE,
  Od as EFFECT_COMMON_EVENT,
  ud as EFFECT_GAIN_TP,
  kd as EFFECT_GROW,
  Ld as EFFECT_LEARN_SKILL,
  bd as EFFECT_RECOVER_HP,
  Pd as EFFECT_RECOVER_MP,
  vd as EFFECT_REMOVE_BUFF,
  Dd as EFFECT_REMOVE_DEBUFF,
  hd as EFFECT_REMOVE_STATE,
  fd as EFFECT_SPECIAL,
  Ii as ENEMY_APPEAR,
  _i as ENEMY_RECOVER_ALL,
  Ci as ENEMY_TRANSFORM,
  Ri as ERASE_EVENT,
  Si as ERASE_PICTURE,
  yi as EXIT_EVENT_PROCESSING,
  Fd as EXTRA_PARAM_CEV,
  Gd as EXTRA_PARAM_CNT,
  Bd as EXTRA_PARAM_CRI,
  Ud as EXTRA_PARAM_EVA,
  Vd as EXTRA_PARAM_HIT,
  xd as EXTRA_PARAM_HRG,
  wd as EXTRA_PARAM_MEV,
  Hd as EXTRA_PARAM_MRF,
  Yd as EXTRA_PARAM_MRG,
  Wd as EXTRA_PARAM_TRG,
  gi as FADEIN_SCREEN,
  Ni as FADEOUT_BGM,
  Mi as FADEOUT_BGS,
  Oi as FADEOUT_SCREEN,
  Am as FILENAME_ACTORS,
  Nm as FILENAME_ANIMATIONS,
  Rm as FILENAME_ARMORS,
  Tm as FILENAME_CLASSES,
  Om as FILENAME_COMMON_EVENTS,
  Sm as FILENAME_ENEMIES,
  _m as FILENAME_ITEMS,
  um as FILENAME_MAP_INFOS,
  Im as FILENAME_SKILLS,
  gm as FILENAME_STATES,
  Em as FILENAME_SYSTEM,
  Mm as FILENAME_TILESET,
  ym as FILENAME_TROOPS,
  Cm as FILENAME_WEAPONS,
  qd as FLAG_ID_AUTO_BATTLE,
  Xd as FLAG_ID_GUARD,
  Kd as FLAG_ID_PRESERVE_TP,
  zd as FLAG_ID_SUBSTITUTE,
  ui as FLASH_SCREEN,
  bm as FOLDER_AUDIO,
  Qr as FOLDER_AUDIO_BGM,
  $r as FOLDER_AUDIO_BGS,
  Jr as FOLDER_AUDIO_ME,
  Zr as FOLDER_AUDIO_SE,
  km as FOLDER_DATA,
  Lm as FOLDER_IMG,
  am as FOLDER_IMG_BATTLEBACK1,
  em as FOLDER_IMG_BATTLEBACK2,
  tm as FOLDER_IMG_CHACTERS,
  sm as FOLDER_IMG_ENEMIES,
  rm as FOLDER_IMG_FACES,
  mm as FOLDER_IMG_PARALLACES,
  om as FOLDER_IMG_PICTURES,
  nm as FOLDER_IMG_SV_ACTORS,
  im as FOLDER_IMG_SV_ENEMIES,
  dm as FOLDER_IMG_SYSTEM,
  pm as FOLDER_IMG_TILESETS,
  lm as FOLDER_IMG_TITLES1,
  cm as FOLDER_IMG_TITLES2,
  Pm as FOLDER_JS,
  ki as FORCE_ACTION,
  Li as GAME_OVER,
  bi as GATHER_FOLLOWERS,
  Pi as GET_LOCATION_INFO,
  vi as GET_ONOFF_VEHICLE,
  Qo as HITTYPE_CERTAIN,
  Jo as HITTYPE_MAGICAL,
  Zo as HITTYPE_PHYSICAL,
  Di as INPUT_NUMBER,
  hi as LABEL,
  jo as LABELS_DATA_WEAPON,
  vn as LABELS_SYSTEM_BATTLER_PARAMS,
  Dn as LABELS_SYSTEM_GAME_COMMANDS,
  fi as LABEL_JUMP,
  Za as LABEL_SET_DATA,
  se as LABEL_SET_ITEM_EFFECT,
  ee as LABEL_SET_TRAIT,
  Fi as LOOP,
  Gi as LOOP_BREAK,
  on as MODULE_DATA,
  Bi as MOVE_PICTURE,
  Ui as NAME_INPUT_PROCESSING,
  er as NORMAL_PRICE,
  Vi as NO_OPERATION,
  xi as OPEN_MENU_SCREEN,
  wi as OPEN_SAVE_SCREEN,
  dr as OPERAND_CONSTANT,
  cr as OPERAND_GAMEDATA,
  lr as OPERAND_RANDOM,
  Er as OPERAND_SCRIPT,
  pr as OPERAND_VARIABLE,
  rr as OPERATION_ADD,
  nr as OPERATION_DIVIDE,
  ir as OPERATION_MOD,
  or as OPERATION_MULTIPLY,
  sr as OPERATION_SET,
  mr as OPERATION_SUBTRACT,
  jd as PARTY_ABILITY_CANCEL_SURPRISE,
  Qd as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Zd as PARTY_ABILITY_ENCOUNTER_HALF,
  Jd as PARTY_ABILITY_ENCOUNTER_NONE,
  $d as PARTY_ABILITY_GOLD_DOUBLE,
  ap as PARTY_ABILITY_RAISE_PREEMPTIVE,
  aa as PLAY_BGM,
  ea as PLAY_BGS,
  ta as PLAY_ME,
  Hi as PLAY_MOVIE,
  sa as PLAY_SE,
  Yi as PLUGIN_COMMAND_MV,
  Wi as PLUGIN_COMMAND_MZ,
  qi as RECOVER_ALL,
  ep as REGULAR_PARAM_AGI,
  tp as REGULAR_PARAM_ATK,
  sp as REGULAR_PARAM_DEF,
  rp as REGULAR_PARAM_LUK,
  mp as REGULAR_PARAM_MATK,
  op as REGULAR_PARAM_MAX_HP,
  np as REGULAR_PARAM_MAX_MP,
  ip as REGULAR_PARAM_MDEF,
  Xi as RESUME_BGM,
  Ki as RETURN_TO_TITLE_SCREEN,
  zi as ROTATE_PICTURE,
  bo as ROUTE_CHANGE_BLEND_MODE,
  Io as ROUTE_CHANGE_FREQ,
  ko as ROUTE_CHANGE_IMAGE,
  Lo as ROUTE_CHANGE_OPACITY,
  To as ROUTE_CHANGE_SPEED,
  go as ROUTE_DIR_FIX_OFF,
  yo as ROUTE_DIR_FIX_ON,
  Vm as ROUTE_END,
  $m as ROUTE_JUMP,
  Qm as ROUTE_MOVE_AWAY,
  Jm as ROUTE_MOVE_BACKWARD,
  xm as ROUTE_MOVE_DOWN,
  Zm as ROUTE_MOVE_FORWARD,
  wm as ROUTE_MOVE_LEFT,
  Wm as ROUTE_MOVE_LOWER_L,
  qm as ROUTE_MOVE_LOWER_R,
  zm as ROUTE_MOVE_RANDOM,
  Hm as ROUTE_MOVE_RIGHT,
  jm as ROUTE_MOVE_TOWARD,
  Ym as ROUTE_MOVE_UP,
  Xm as ROUTE_MOVE_UPPER_L,
  Km as ROUTE_MOVE_UPPER_R,
  Po as ROUTE_PLAY_SE,
  vo as ROUTE_SCRIPT,
  So as ROUTE_STEP_ANIME_OFF,
  Ro as ROUTE_STEP_ANIME_ON,
  Ao as ROUTE_SWITCH_OFF,
  Eo as ROUTE_SWITCH_ON,
  Mo as ROUTE_THROUGH_OFF,
  No as ROUTE_THROUGH_ON,
  uo as ROUTE_TRANSPARENT_OFF,
  Oo as ROUTE_TRANSPARENT_ON,
  no as ROUTE_TURN_180D,
  oo as ROUTE_TURN_90D_L,
  mo as ROUTE_TURN_90D_R,
  io as ROUTE_TURN_90D_R_L,
  co as ROUTE_TURN_AWAY,
  eo as ROUTE_TURN_DOWN,
  to as ROUTE_TURN_LEFT,
  po as ROUTE_TURN_RANDOM,
  so as ROUTE_TURN_RIGHT,
  lo as ROUTE_TURN_TOWARD,
  ro as ROUTE_TURN_UP,
  ao as ROUTE_WAIT,
  Co as ROUTE_WALK_ANIME_OFF,
  _o as ROUTE_WALK_ANIME_ON,
  ji as SAVE_BGM,
  zo as SCHEMA_DATA_WEAPON,
  la as SCRIPT_EVAL,
  pa as SCRIPT_EVAL_BODY,
  Qi as SCROLL_MAP,
  Zi as SELECT_ITEM,
  Ji as SET_EVENT_LOCATION,
  $i as SET_MOVEMENT_ROUTE,
  ad as SET_VEHICLE_LOCATION,
  ed as SET_WEATHER_EFFECT,
  td as SHAKE_SCREEN,
  ca as SHOP_PROCESSING,
  Ea as SHOP_PROCESSING_BODY,
  sd as SHOW_ANIMATION,
  rd as SHOW_BALLOON_ICON,
  md as SHOW_BATTLE_ANIMATION,
  od as SHOW_CHOICES,
  nd as SHOW_CHOICES_ITEM,
  id as SHOW_MESSAGE,
  dd as SHOW_MESSAGE_BODY,
  pd as SHOW_PICTURE,
  da as SHOW_SCROLLING_TEXT,
  ia as SHOW_SCROLLING_TEXT_BODY,
  ld as SKIP,
  $o as SPECIAL_EFFECT_ESCAPE,
  dp as SPECIAL_PARAM_EXR,
  pp as SPECIAL_PARAM_FDR,
  lp as SPECIAL_PARAM_GRD,
  cp as SPECIAL_PARAM_MCR,
  Ep as SPECIAL_PARAM_MDR,
  Ap as SPECIAL_PARAM_PDR,
  Tp as SPECIAL_PARAM_PHA,
  Ip as SPECIAL_PARAM_REC,
  _p as SPECIAL_PARAM_TCR,
  Cp as SPECIAL_PARAM_TGR,
  nn as SRC_DATA_ACTOR,
  Tn as SRC_DATA_ARMOR,
  In as SRC_DATA_CLASS,
  _n as SRC_DATA_COMMON_EVNET,
  pn as SRC_DATA_ENEMY,
  En as SRC_DATA_ITEMS,
  dn as SRC_DATA_MAP,
  cn as SRC_DATA_SKILL,
  ln as SRC_DATA_STATE,
  Cn as SRC_DATA_TROOP,
  An as SRC_DATA_WEAPON,
  cd as STOP_SE,
  Ed as TINT_PICTURE,
  Ad as TINT_SCREEN,
  Rp as TRAIT_ACTION_PLUS,
  Sp as TRAIT_ATTACK_ELEMENT,
  yp as TRAIT_ATTACK_SKILL,
  gp as TRAIT_ATTACK_SPEED,
  Np as TRAIT_ATTACK_STATE,
  Mp as TRAIT_ATTACK_TIMES,
  Op as TRAIT_COLLAPSE_TYPE,
  up as TRAIT_DEBUFF_RATE,
  kp as TRAIT_ELEMENT_RATE,
  Lp as TRAIT_EQUIP_ARMOR_TYPE,
  bp as TRAIT_EQUIP_LOCK,
  Pp as TRAIT_EQUIP_SEAL,
  vp as TRAIT_EQUIP_WEAPON_TYPE,
  Dp as TRAIT_PARAM,
  hp as TRAIT_PARTY_ABILITY,
  fp as TRAIT_SKILL_ADD,
  Fp as TRAIT_SKILL_SEAL,
  Gp as TRAIT_SKILL_TYPE_ADD,
  Bp as TRAIT_SKILL_TYPE_SEAL,
  Up as TRAIT_SLOT_TYPE,
  Vp as TRAIT_SPARAM,
  xp as TRAIT_SPECIAL_FLAG,
  wp as TRAIT_STATE_RATE,
  Hp as TRAIT_STATE_RESIST,
  Yp as TRAIT_XPARAM,
  Td as TRANSFER_PLAYER,
  Ir as TYPE_ARMOR,
  Ar as TYPE_ITEM,
  Tr as TYPE_WEAPON,
  Kr as VEHICLE_AIRSHIP,
  qr as VEHICLE_BOAT,
  Xr as VEHICLE_SHIP,
  Id as WAIT,
  Wp as buildNoteFromNormalized,
  fs as cloneChoices,
  zr as cloneEventCommand,
  qa as cloneParameters,
  qp as collapsOptionsToArray,
  gs as convertCommentArrayToObject,
  _a as convertTermsMessageMZtoMV,
  hm as createActorControlChars,
  h as createControlCharFormat,
  ie as createMenuCommandState,
  Xp as createNoteEntity,
  fm as createSystemVariableControlChars,
  Kp as defineGameDataSources,
  zp as defineSystemItems,
  jp as defineTraitCollapseType,
  Qp as defineTraitExtraParam,
  Zp as defineTraitItems,
  Jp as defineTraitPartyAbility,
  $p as defineTraitRegularParam,
  al as defineTraitSpecialFlag,
  el as defineTraitSpecialParam,
  tl as extraParamName,
  sl as extraParamsToArray,
  Bn as extractFileName,
  an as formatItemEffectText,
  Xo as formatTraitText,
  Le as fromArrayChangeItems,
  fe as fromArrayChangeWeapons,
  ss as fromArrayCommonEvent,
  rs as fromArrayControlSwitches,
  jt as fromArrayEnemyTransform,
  is as fromArrayInputNumber,
  Gs as fromArrayPlayMovie,
  Us as fromArrayPluginCommandMZ,
  us as fromArrayScrollingTextBody,
  Ms as fromArrayScrollingTextHeader,
  ps as fromArraySelectItem,
  vs as fromArraySetupChoice,
  bs as fromArraySetupChoiceItem,
  rl as fromArrayShowMessageHeader,
  vm as fromStringArray,
  vr as getActorValue,
  gn as getArmorCategoryEnabled,
  ml as getArmorTypes,
  Dm as getControlChars,
  ol as getElementTypes,
  Pr as getEnemyValue,
  le as getEquipCommandEnabled,
  nl as getEquipTypes,
  Ee as getFormationCommandEnabled,
  Sn as getItemCategoryEnabled,
  de as getItemCommandEnabled,
  il as getItemIdFromItemCommand,
  Nn as getKeyItemCategoryEnabled,
  dl as getNoteValue,
  Ln as getParamNames,
  Ae as getSaveCommandEnabled,
  pe as getSkillCommandEnabled,
  pl as getSkillTypes,
  ce as getStatusCommandEnabled,
  ll as getSwitches,
  cl as getVariableNames,
  yn as getWeaponCategoryEnabled,
  El as getWeaponTypes,
  jr as isCloneableCommand,
  Yt as isCommandBattleProcessingVariable,
  _r as isCommandOperandVariables,
  Al as isUsingVariableItemCommand,
  ke as isUsingVaribleCommandChangingItems,
  Rn as labelsRegistry,
  Uo as makeActorData,
  xo as makeArmorData,
  Pt as makeAudioCommand,
  Bm as makeBattleEventPage,
  _e as makeBooleanOptions,
  wo as makeClassData,
  $e as makeCommandActorLevelDown,
  et as makeCommandActorLevelDownByVariable,
  st as makeCommandActorLevelDownEach,
  Je as makeCommandActorLevelUp,
  at as makeCommandActorLevelUpByVariable,
  tt as makeCommandActorLevelUpEach,
  ot as makeCommandAddActorStateEach,
  rt as makeCommandAddActorStateTarget,
  it as makeCommandAddActorStateVariable,
  Jt as makeCommandAddEachEnemyState,
  Qt as makeCommandAddEnemyState,
  Vs as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  Wt as makeCommandBattleProcessingDirect,
  Xt as makeCommandBattleProcessingEncount,
  qt as makeCommandBattleProcessingVariable,
  ct as makeCommandChangeActorImages,
  It as makeCommandChangeActorName,
  _t as makeCommandChangeActorNickName,
  Ct as makeCommandChangeActorProfile,
  Ft as makeCommandChangeBattleBGM,
  Vt as makeCommandChangeBattleBackground,
  pt as makeCommandChangeClass,
  Bt as makeCommandChangeDefeatME,
  lt as makeCommandChangeEquip,
  be as makeCommandChangeItems,
  ls as makeCommandChangeParallax,
  Ts as makeCommandChangeTileset,
  Hr as makeCommandChangeVehicleBGM,
  wr as makeCommandChangeVehicleImage,
  Gt as makeCommandChangeVictoryME,
  Fe as makeCommandChangeWeapons,
  La as makeCommandCommentBody,
  ka as makeCommandCommentHeader,
  ts as makeCommandCommonEvent,
  ms as makeCommandControlSwitches,
  Kt as makeCommandControlTimer,
  Ss as makeCommandDisableFormationAccess,
  Is as makeCommandDisableMenuAccess,
  Cs as makeCommandDisableSaveAccess,
  Et as makeCommandEachActorRecoverAll,
  ys as makeCommandEnableFormationAccess,
  _s as makeCommandEnableMenuAccess,
  Rs as makeCommandEnableSaveAccess,
  es as makeCommandEnemyRecoverAll,
  as as makeCommandEnemyRecoverAllEach,
  zt as makeCommandEnemyTransform,
  zs as makeCommandFadeInScreen,
  ut as makeCommandFadeOutBGM,
  bt as makeCommandFadeOutBGS,
  js as makeCommandFadeOutScreen,
  Qs as makeCommandFlashScreen,
  Rt as makeCommandGainActorHP,
  Nt as makeCommandGainActorMP,
  yt as makeCommandGainActorTP,
  xe as makeCommandGainArmor,
  we as makeCommandGainArmorByVariable,
  Xe as makeCommandGainExpByVariable,
  We as makeCommandGainExpDirect,
  Qe as makeCommandGainExpTargetAndOperandVariable,
  ze as makeCommandGainExpTargetVariable,
  ws as makeCommandGainGold,
  Ys as makeCommandGainGoldByVariable,
  Pe as makeCommandGainItem,
  ve as makeCommandGainItemV,
  Ge as makeCommandGainWeapon,
  Be as makeCommandGainWeaponV,
  xr as makeCommandGetOnOffVehicle,
  As as makeCommandHideMapName,
  os as makeCommandInputNumber,
  St as makeCommandLoseActorHP,
  Mt as makeCommandLoseActorMP,
  gt as makeCommandLoseActorTP,
  He as makeCommandLoseArmor,
  Ye as makeCommandLoseArmorByVariable,
  Ke as makeCommandLoseExpByVariable,
  qe as makeCommandLoseExpDirect,
  Ze as makeCommandLoseExpTargetAndOperandVariable,
  je as makeCommandLoseExpTargetVariable,
  Hs as makeCommandLoseGold,
  Ws as makeCommandLoseGoldByVariable,
  De as makeCommandLoseItem,
  he as makeCommandLoseItemV,
  Ue as makeCommandLoseWeapon,
  Ve as makeCommandLoseWeaponV,
  Xs as makeCommandMovePicture,
  vt as makeCommandPlayBGM,
  Dt as makeCommandPlayBGS,
  ht as makeCommandPlayME,
  Fs as makeCommandPlayMovie,
  ft as makeCommandPlaySE,
  Bs as makeCommandPluginCommandMZ,
  nt as makeCommandRemoveActorStateEach,
  mt as makeCommandRemoveActorStateTarget,
  dt as makeCommandRemoveActorStateVariable,
  $t as makeCommandRemoveEachEnemyState,
  Zt as makeCommandRemoveEnemyState,
  xs as makeCommandRemovePartyMember,
  Lt as makeCommandResumeBGM,
  kt as makeCommandSaveBGM,
  $s as makeCommandScriptArray,
  Da as makeCommandScriptBody,
  va as makeCommandScriptHeader,
  cs as makeCommandScrollMap,
  ks as makeCommandScrollingTextBody,
  Os as makeCommandScrollingTextHeader,
  ds as makeCommandSelectItem,
  Yr as makeCommandSetVehicleLocation,
  Wr as makeCommandSetVehicleLocationFromVariables,
  Ks as makeCommandSetWeatherEffect,
  hs as makeCommandSetupChoice,
  Zs as makeCommandShakeScreen,
  tr as makeCommandShopProcessing,
  Ot as makeCommandShowAnimation,
  Ut as makeCommandShowBalloonIcon,
  Ls as makeCommandShowChoiceItem,
  Es as makeCommandShowMapName,
  Tl as makeCommandShowMessage,
  Il as makeCommandShowMessageBody,
  qs as makeCommandShowPicture,
  ur as makeCommandSystemBattleCount,
  Lr as makeCommandSystemEscapeCount,
  Or as makeCommandSystemSaveCount,
  Mr as makeCommandSystemTimer,
  kr as makeCommandSystemWinCount,
  At as makeCommandTargetActorRecoverAll,
  Tt as makeCommandTargetActorRecoverAllSelectV,
  Js as makeCommandTintScreen,
  Dr as makeCommandVariableFromActorStatusData,
  hr as makeCommandVariableFromArmor,
  fr as makeCommandVariableFromConstant,
  Fr as makeCommandVariableFromEnemyData,
  Gr as makeCommandVariableFromItemData,
  Rr as makeCommandVariableFromMapId,
  gr as makeCommandVariableFromPartyGold,
  Sr as makeCommandVariableFromPartyMembers,
  yr as makeCommandVariableFromPartySteps,
  Nr as makeCommandVariableFromPlaytime,
  Br as makeCommandVariableFromRandom,
  Ur as makeCommandVariableFromScript,
  br as makeCommandVariableFromTempLastData,
  Cr as makeCommandVariableFromVariable,
  Vr as makeCommandVariableFromWeapon,
  Y as makeCommentArray,
  Ns as makeCommentCommandArray,
  Fm as makeCommonEventData,
  f as makeDamage,
  kn as makeDataNames,
  ae as makeDropItem,
  Re as makeEditorSetting,
  Yo as makeEnemyAction,
  Wo as makeEnemyData,
  za as makeEventPageCondition,
  un as makeGameInitial,
  Te as makeItemCategories,
  Mn as makeItemCategoriesFromArray,
  rn as makeItemData,
  Fo as makeMapData,
  Do as makeMapEvent,
  ja as makeMapEventIamge,
  ho as makeMapEventPage,
  fo as makeMapFileInfo,
  Go as makeMapInfoData,
  Ie as makeMenuCommandsEnabled,
  On as makeMenuCommandsEnabledFromArray,
  $a as makeParamArray,
  Ra as makeParamNamesArray,
  Aa as makeParamNamesFromArray,
  mn as makeSkillData,
  oe as makeSoundsArray,
  ne as makeSoundsObject,
  qo as makeStateData,
  me as makeSystemAdvanced,
  W as makeSystemData,
  fn as makeSystemDataFromMV,
  hn as makeSystemDataMV,
  ya as makeTermsBasic,
  Ia as makeTermsBasicFromArray,
  Sa as makeTermsCommandArray,
  _l as makeTermsCommandArrayWithNulls,
  Ta as makeTermsCommandFromArray,
  Ca as makeTermsMessages,
  Ce as makeTitleCommandWindow,
  Gm as makeTroopData,
  Ka as makeTroopEventConditions,
  Um as makeTroopMember,
  v as makeVehicleData,
  Ko as makeWeaponData,
  Vo as normalizeDataActor,
  Cl as normalizeNote,
  Ho as paramArrayToObject,
  Rl as partyAbilityToArray,
  Sl as readNote,
  yl as readNoteEx,
  gl as readNoteObject,
  Nl as regularParamName,
  Ml as regularParamsToArray,
  Ol as replaceNote,
  ul as replaceNoteWithHandlers,
  Bo as repleaceMapEventCommands,
  kl as resolveItemEffectLabels,
  Ll as resolveTraitLabels,
  bl as setNoteValue,
  Pl as specialFlagToArray,
  vl as specialParamName,
  Dl as specialParamsToArray,
  Fn as textAndDesc,
  Oa as toArrayCommonEvent,
  ua as toArrayControlSwitches,
  ns as toArrayInputNumber,
  Ga as toArrayOperandActorStatus,
  Ba as toArrayOperandArmorData,
  Ua as toArrayOperandConstant,
  xa as toArrayOperandEnemyStatus,
  wa as toArrayOperandItemData,
  Ha as toArrayOperandRandom,
  Ya as toArrayOperandScript,
  ha as toArrayOperandVariable,
  Wa as toArrayOperandWeaponData,
  Pa as toArrayScrollingTextBody,
  ba as toArrayScrollingTextHeader,
  Ds as toArraySetupChoice,
  Ps as toArraySetupChoiceItem,
  hl as toArrayShowMessageHeader
};
