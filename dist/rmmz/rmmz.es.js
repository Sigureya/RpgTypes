import { q as k, N as O, b, m as c, r as R, G as S, v as j, w as Q, E as Z, p as x, u as w, I as H, d as J, f as $, M as aa, am as ea, an as ta, ao as sa, aq as ra, B as h, R as ma, V as oa, P as na, Q as ia, aS as da, aR as pa, az as la, ay as ca, aH as Ea, aI as Aa, X as n } from "../shared/eventCommandCodes.es.js";
import { A as Kn, C as zn, a as jn, c as Qn, e as Zn, g as Jn, h as $n, i as ai, j as ei, k as ti, l as si, n as ri, o as mi, s as oi, t as ni, x as ii, y as di, z as pi, D as li, F as ci, H as Ei, J as Ai, K as Ii, L as Ti, O as _i, S as Ci, T as Ri, U as Si, W as yi, Y as gi, Z as Ni, _ as Mi, $ as ki, a0 as Oi, a1 as ui, a2 as bi, a3 as Li, a4 as Pi, a5 as vi, a6 as Di, a7 as hi, a8 as fi, a9 as Fi, aa as Bi, ab as Gi, ac as Ui, ad as Vi, ae as xi, af as wi, ag as Hi, ah as Yi, ai as Wi, aj as qi, ak as Xi, al as Ki, ap as zi, ar as ji, as as Qi, at as Zi, au as Ji, av as $i, aw as ad, ax as ed, aA as td, aB as sd, aC as rd, aD as md, aE as od, aF as nd, aG as id, aJ as dd, aK as pd, aL as ld, aM as cd, aN as Ed, aO as Ad, aP as Id, aQ as Td, aT as _d, aU as Cd, aV as Rd, aW as Sd, aX as yd, aY as gd } from "../shared/eventCommandCodes.es.js";
import { be as y, bg as g, bh as T, bf as N, aT as Ia, aY as Ta, aV as _a, as as Ca, aZ as Ra, aS as Sa, aW as ya, aU as ga } from "../shared/commands.es.js";
import { C as Md, a as kd, b as Od, c as ud, E as bd, d as Ld, e as Pd, f as vd, g as Dd, h as hd, i as fd, j as Fd, k as Bd, l as Gd, m as Ud, n as Vd, o as xd, p as wd, q as Hd, r as Yd, s as Wd, t as qd, u as Xd, v as Kd, w as zd, x as jd, y as Qd, F as Zd, z as Jd, A as $d, B as ap, P as ep, D as tp, G as sp, H as rp, I as mp, J as op, R as np, K as ip, L as dp, M as pp, N as lp, O as cp, Q as Ep, S as Ap, T as Ip, U as Tp, V as _p, W as Cp, X as Rp, Y as Sp, Z as yp, _ as gp, $ as Np, a0 as Mp, a1 as kp, a2 as Op, a3 as up, a4 as bp, a5 as Lp, a6 as Pp, a7 as vp, a8 as Dp, a9 as hp, aa as fp, ab as Fp, ac as Bp, ad as Gp, ae as Up, af as Vp, ag as xp, ah as wp, ai as Hp, aj as Yp, ak as Wp, al as qp, am as Xp, an as Kp, ao as zp, ap as jp, aq as Qp, ar as Zp, at as Jp, au as $p, av as al, aw as el, ax as tl, ay as sl, az as rl, aA as ml, aB as ol, aC as nl, aD as il, aE as dl, aF as pl, aG as ll, aH as cl, aI as El, aJ as Al, aK as Il, aL as Tl, aM as _l, aN as Cl, aO as Rl, aP as Sl, aQ as yl, aR as gl, aX as Nl, a_ as Ml, a$ as kl, b0 as Ol, b1 as ul, b2 as bl, b3 as Ll, b4 as Pl, b5 as vl, b6 as Dl, b7 as hl, b8 as fl, b9 as Fl, ba as Bl, bb as Gl, bc as Ul, bd as Vl } from "../shared/commands.es.js";
import { m as r, c as Na, a as Ma } from "../shared/make.es.js";
const be = (a) => a.parameters[3] === T, Le = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), Pe = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), ve = (a, e = 0) => ({ code: k, indent: e, parameters: [a.itemId, y, g, a.value] }), De = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.itemId, y, T, a.variableId]
}), he = (a, e = 0) => ({ code: k, indent: e, parameters: [a.itemId, N, g, a.value] }), fe = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.itemId, N, T, a.variableId]
}), Fe = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Be = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Ge = (a, e = 0) => ({ code: O, indent: e, parameters: [a.weaponId, y, g, a.value, !1] }), Ue = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, y, T, a.variableId, !1]
}), Ve = (a, e = 0) => ({ code: O, indent: e, parameters: [a.weaponId, N, g, a.value, !1] }), xe = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, N, T, a.variableId, !1]
}), we = (a, e = 0) => ({ code: b, indent: e, parameters: [a.armorId, y, g, a.value, !1] }), He = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.armorId, y, T, a.variableId, !1]
}), Ye = (a, e = 0) => ({ code: b, indent: e, parameters: [a.armorId, N, g, a.value, !1] }), We = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.armorId, N, T, a.variableId, !1]
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
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), at = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), et = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), tt = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), st = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), rt = (a, e = 0) => ({ code: R, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), mt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), ot = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), nt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), it = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, a.skillId] }), dt = (a, e = 0) => ({ code: S, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), pt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), lt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), ct = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), Et = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), At = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), It = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Tt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), _t = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), Ct = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Rt = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, d = 0) => ({ code: 322, indent: d, parameters: [a, m, s, t, e, o] }), St = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), yt = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), gt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Nt = (a, e = 0) => ({
  code: j,
  parameters: [a.actorId, a.name],
  indent: e
}), Mt = (a, e = 0) => ({ code: Q, parameters: [a.actorId, a.nickname], indent: e }), kt = (a, e = 0) => ({
  code: Z,
  parameters: [a.actorId, a.profile],
  indent: e
}), C = { direct: 0, variable: 1 }, Ot = (a, e = 0) => ({ code: x, indent: e, parameters: Y(0, a) }), ut = (a, e = 0) => ({ code: x, indent: e, parameters: Y(1, a) }), bt = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: L(0, a)
}), Lt = (a, e = 0) => ({ code: H, indent: e, parameters: L(1, a) }), Pt = (a, e = 0) => ({ code: w, indent: e, parameters: L(0, a) }), vt = (a, e = 0) => ({
  code: w,
  indent: e,
  parameters: L(1, a)
}), L = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], Y = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], Dt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), ht = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), ft = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Ft = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Bt = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Gt = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), Ut = (a, e = 0) => E(ea, a, e), Vt = (a, e = 0) => E(ta, a, e), xt = (a, e = 0) => E(sa, a, e), wt = (a, e = 0) => E(ra, a, e), Ht = (a, e = 0) => E(J, a, e), Yt = (a, e = 0) => E(aa, a, e), Wt = (a, e = 0) => E($, a, e), qt = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), Xt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), Kt = 0, zt = 1, jt = 2, Qt = (a) => a.parameters[0] === 1, Zt = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: h,
  indent: s,
  parameters: [0, a, e, t]
}), Jt = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: h, indent: s, parameters: [1, a, e, t] }), $t = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: h,
  indent: t,
  parameters: [2, 0, a, e]
}), ka = { plus: 0, minus: 1 }, as = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ka[a ?? "plus"] ?? 0, e ?? 0] });
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
}), is = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), ds = (a, e = 0) => ({ code: ma, indent: e, parameters: Oa(a ?? {}) }), ps = (a) => ({
  eventId: a[0]
}), Oa = (a) => [a.eventId ?? 0], ls = (a) => ({ min: a[0], max: a[1], value: a[2] }), ua = (a) => [a.min, a.max, a.value], cs = (a, e = 0) => ({ code: oa, indent: e, parameters: ua(a) }), Es = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), As = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Is = (a) => ({ variableId: a[0], maxDigits: a[1] }), Ts = (a, e = 0) => ({
  code: 104,
  parameters: [a.variableId, a.itemType],
  indent: e
}), _s = (a) => ({ variableId: a[0], itemType: a[1] }), Cs = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), Rs = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), Ss = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), ys = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [1]
}), gs = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Ns = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Ms = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), ks = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Os = (a = 0) => ({ code: 134, parameters: [0], indent: a }), us = (a = 0) => ({ code: 137, parameters: [1], indent: a }), bs = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), W = (a) => [a], Ls = (a) => ({ comment: a[0] }), ba = (a, e = 0) => ({ code: ia, indent: e, parameters: W(a) }), La = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: W(a)
}), Ps = (a, e = 0) => a.map(((t, s) => s === 0 ? ba(t, e) : La(t, e))), Pa = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], vs = (a) => ({ speed: a[0], skip: a[1] }), Ds = (a = {}, e = 0) => ({
  code: pa,
  indent: e,
  parameters: Pa(a)
}), va = (a = "") => [a], hs = (a) => ({ content: a[0] }), fs = (a = "", e = 0) => ({ code: da, indent: e ?? 0, parameters: va(a) }), Fs = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Bs = (a) => ({
  index: a[0],
  name: a[1]
}), Gs = (a) => [a.index ?? 0, a.name ?? ""], Us = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Vs = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], xs = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), ws = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Hs = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Ys = (a) => ({
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
}), Js = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: d = 100, opacity: l = 255, blendMode: A = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, d, l, A]
}), $s = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: d, blendMode: l, wait: A = !1, easingType: P = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, d, l, A, P]
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
}), Da = (a, e = 0) => ({ code: ca, indent: e, parameters: [a] }), ha = (a, e = 0) => ({
  code: la,
  indent: e,
  parameters: [a]
}), or = (a, e = 0) => a.map(((t, s) => s === 0 ? Da(t, e) : ha(t, e))), nr = 1, ir = 0, u = { item: 0, weapon: 1, armors: 2 }, dr = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map(((s, m) => {
  const o = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Ea, indent: t, parameters: [u[s.itemType] ?? u.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: Aa,
    indent: t,
    parameters: [u[s.itemType] ?? u.item, s.id, o, s.customPrice ?? 0]
  };
})), pr = 0, lr = 1, cr = 2, Er = 3, Ar = 4, Ir = 5, Tr = 0, _r = 1, Cr = 2, Rr = 3, Sr = 4, yr = 0, gr = 1, Nr = 2, Mr = (a) => a.parameters[2] === 1, fa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], kr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: fa(a, e, t.operation ?? 0)
}), Or = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), ur = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), br = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Lr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Pr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), vr = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Dr = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), hr = (a, e = 0) => ({
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
}, Ur = (a, e) => {
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
}, Ga = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], Vr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ga(a, e, t.operation ?? 0)
}), Ua = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], xr = (a, e) => ({
  code: n,
  indent: 0,
  parameters: Ua(a, e, 0)
}), Va = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], wr = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Va(a, e, t.operation ?? 0) }), xa = {
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
}, wa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, xa[e.param]], Hr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: wa(a, e, t.operation ?? 0)
}), Yr = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ha(a, e, t.operation ?? 0)
}), Ha = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ya = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Wr = (a, e, t = {}) => ({
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
}), Ka = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", tm = (a) => a.parameters.every(Ka), sm = "bgm", rm = "se", mm = "me", om = "bgs", nm = "battlebacks1", im = "battlebacks2", dm = "characters", pm = "enemies", lm = "faces", cm = "parallaxes", Em = "pictures", Am = "sv_actors", Im = "sv_enemies", Tm = "system", _m = "tilesets", Cm = "titles1", Rm = "titles2", Sm = "System.json", ym = "Actors.json", gm = "Classes.json", Nm = "Skills.json", Mm = "Items.json", km = "Weapons.json", Om = "Armors.json", um = "Enemies.json", bm = "Troops.json", Lm = "States.json", Pm = "Animations.json", vm = "Tilesets.json", Dm = "CommonEvents.json", hm = "MapInfos.json", fm = "data", Fm = "img", Bm = "audio", Gm = "js", f = (a, e) => `\\${a}[${e}]`, Um = (a, e) => e.map(((t, s) => ({
  text: t,
  controlChar: f(a, s)
}))), Vm = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), xm = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: f("N", e.id)
}))), wm = (a) => a.variables.map(((e, t) => ({ text: e || "", controlChar: f("V", t) }))).filter(((e) => e.text !== "")), Hm = (a = {}) => ({
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
}), Xm = 0, Km = 1, zm = 2, jm = 3, Qm = 4, Zm = 5, Jm = 6, $m = 7, ao = 8, eo = 9, to = 10, so = 11, ro = 12, mo = 13, oo = 14, no = 15, io = 16, po = 17, lo = 18, co = 19, Eo = 20, Ao = 21, Io = 22, To = 23, _o = 24, Co = 25, Ro = 26, So = 27, yo = 28, go = 29, No = 30, Mo = 31, ko = 32, Oo = 33, uo = 34, bo = 35, Lo = 36, Po = 37, vo = 38, Do = 39, ho = 40, fo = 41, Fo = 42, Bo = 43, Go = 44, Uo = 45, Vo = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
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
}), xo = ({ list: a = [], conditions: e = ja(), image: t = Qa(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: l = !1, through: A = !1, walkAnime: P = !1, moveSpeed: X = 3, moveType: K = 0, trigger: z = 0 } = {}) => ({
  walkAnime: P,
  stepAnime: l,
  through: A,
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
}), wo = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Ho = (a = {}) => ({
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
}), Yo = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, Wo = (a, e) => a.map(((t) => t ? {
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
}), qo = (a = {}) => ({
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
}), Xo = (a) => ({
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
}), Ko = (a = {}) => ({
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
}), zo = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), ae = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: d = 0, luk: l = 0 }) => [a, e, t, s, m, o, d, l], jo = (a) => {
  const [e, t, s, m, o, d, l, A] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: d, agi: l, luk: A };
}, ee = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Qo = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Zo = (a = {}) => ({
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
}), Jo = (a = {}) => ({
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
}), i = "{name}", _ = "{name} * {value}%", B = "{name} + {value}%", G = "{value}", te = { title: "特徴", options: {
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
  attackState: { title: "攻撃ステート", format: B },
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
} }, se = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, $o = (a, e, t) => {
  const s = Na(se);
  return Ma(e, t, s, a.pattern, ((m) => m.dataId));
}, an = (a = {}) => ({
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
}), en = {
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
}, tn = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, sn = 0, rn = 1, mn = 2, U = "{name} {value1}%", v = "{value1}% + {value2}", V = "{name} {value1}ターン", M = "{name}", re = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: V },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: V },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: v },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: M },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: v
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: v },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: M
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: M },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: U },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: M
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: U },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: M }
} }, on = 0, nn = (a, e, t) => {
  const s = t.find(((o) => o.id === e.dataId)), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, dn = { title: "アイテム", options: { consumable: "消耗品" } }, pn = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ln = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, cn = (a = {}) => ({
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
}), En = (a = {}) => ({
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
}), An = "data", In = "actor", Tn = "map", _n = "enemy", Cn = "state", Rn = "skill", Sn = "item", yn = "weapon", gn = "armor", Nn = "class", Mn = "common_event", kn = "troop", me = {
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
}, On = () => ({ rpg: { damage: $a, data: Ja, traits: te, itemEffect: re }, global: me }), oe = (a = {}) => ({
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
  formation: Ae(a),
  save: Ie(a)
}), pe = (a) => a.menuCommands[0], le = (a) => a.menuCommands[1], ce = (a) => a.menuCommands[2], Ee = (a) => a.menuCommands[3], Ae = (a) => a.menuCommands[4], Ie = (a) => a.menuCommands[5], un = (a) => a.itemCategories[0], bn = (a) => a.itemCategories[1], Ln = (a) => a.itemCategories[2], Pn = (a) => a.itemCategories[3], Te = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], vn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), _e = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], Dn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Ce = (a = {}) => ({
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
}), hn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), fn = (a) => ({
  armorTypes: I(a.armorTypes),
  elements: I(a.elements),
  equipTypes: I(a.equipTypes),
  weaponTypes: I(a.weaponTypes),
  skillTypes: I(a.skillTypes),
  variables: I(a.variables),
  switches: I(a.switches)
}), I = (a) => a ? [...a] : [], Fn = (a) => a.terms.params.map(((e, t) => ({
  name: e,
  id: t
}))), Re = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), D = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Se = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Bn = { title: "オプション", options: {
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
} }, Gn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Un = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Vn = {
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
}, xn = (a = q({})) => ({
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
    messages: Ca(a.terms.messages)
  }
}), wn = (a) => q({
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
    basic: _a(a.terms.basic),
    commands: Ta(a.terms.commands),
    params: Ia(a.terms.params),
    messages: a.terms.messages
  }
}), q = (a) => {
  const e = ge(a.size);
  return {
    ...Ce(a.options),
    titleCommandWindow: Re(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: ne(a.sounds),
    editor: Se(a.editing),
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
    airship: D(a.vehicles?.airship),
    boat: D(a.vehicles?.boat),
    ship: D(a.vehicles?.ship),
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
    testBattlers: Ne(a.battleTest?.testBattlers, Me),
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
    itemCategories: Te(a.itemCategories),
    partyMembers: p(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: _e(a.menuCommands)
  };
}, ye = (a) => ({ basic: ga(a.basic ?? {}), commands: ya(a.commands ?? {}), params: Sa(a.params ?? {}), messages: Ra(a.messages ?? {}) }), p = (a) => a ? [...a] : [], ge = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ne = (a, e) => a ? a.map(e) : [], Me = (a) => a ? {
  actorId: a.actorId,
  equips: p(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Hn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Yn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Wn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Kn as ABORT_BATTLE,
  Kt as BATTLE_DIRECT,
  jt as BATTLE_ENCOUNT,
  h as BATTLE_PROCESSING,
  zt as BATTLE_VARIABLE,
  zn as CHANGE_ACTOR_IMAGES,
  jn as CHANGE_ACTOR_STATE,
  b as CHANGE_ARMORS,
  Qn as CHANGE_BATTLE_BACKGROUND,
  J as CHANGE_BATTLE_BGM,
  Zn as CHANGE_CLASS,
  $ as CHANGE_DEFEAT_ME,
  Jn as CHANGE_ENCOUNTER,
  $n as CHANGE_ENEMY_HP,
  ai as CHANGE_ENEMY_MP,
  ei as CHANGE_ENEMY_STATE,
  ti as CHANGE_ENEMY_TP,
  si as CHANGE_EQUIP,
  c as CHANGE_EXP,
  ri as CHANGE_FORMATION_ACCESS,
  mi as CHANGE_GOLD,
  x as CHANGE_HP,
  k as CHANGE_ITEMS,
  R as CHANGE_LEVEL,
  oi as CHANGE_MAP_NAME_DISPLAY,
  ni as CHANGE_MENU_ACCESS,
  w as CHANGE_MP,
  j as CHANGE_NAME,
  Q as CHANGE_NICKNAME,
  ii as CHANGE_PARALLAX,
  di as CHANGE_PARAMETER,
  pi as CHANGE_PARTY_MEMBER,
  li as CHANGE_PLAYER_FOLLOWERS,
  Z as CHANGE_PROFILE,
  ci as CHANGE_SAVE_ACCESS,
  S as CHANGE_SKILL,
  Ei as CHANGE_TILESET,
  H as CHANGE_TP,
  Ai as CHANGE_TRANSPARENCY,
  Ii as CHANGE_VEHICLE_BGM,
  Ti as CHANGE_VEHICLE_IMAGE,
  aa as CHANGE_VICTORY_ME,
  O as CHANGE_WEAPONS,
  _i as CHANGE_WINDOW_COLOR,
  Md as COLLAPS_BOSS,
  kd as COLLAPS_INSTANT,
  Od as COLLAPS_NONE,
  ud as COLLAPS_NORMAL,
  na as COMMENT_BODY,
  ia as COMMENT_HEAD,
  ma as COMMON_EVENT,
  Ci as CONDITIONAL_BRANCH,
  Ri as CONDITIONAL_BRANCH_ELSE,
  Si as CONTROL_SELF_SWITCH,
  oa as CONTROL_SWITCHES,
  yi as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  nr as CUSTOM_PRICE,
  $a as DEFAULT_DAMAGE_LABELS,
  me as DEFAULT_GLOBAL_LABELS,
  dn as DEFAULT_ITEM_LABELS,
  pn as DEFAULT_SKILL_LABELS,
  Bn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Gn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  ln as DEFAULT_USABLE_ITEM_LABELS,
  Yn as DIRECTION,
  bd as EFFECT_ADD_BUFF,
  Ld as EFFECT_ADD_DEBUFF,
  Pd as EFFECT_ADD_STATE,
  vd as EFFECT_COMMON_EVENT,
  Dd as EFFECT_GAIN_TP,
  hd as EFFECT_GROW,
  fd as EFFECT_LEARN_SKILL,
  Fd as EFFECT_RECOVER_HP,
  Bd as EFFECT_RECOVER_MP,
  Gd as EFFECT_REMOVE_BUFF,
  Ud as EFFECT_REMOVE_DEBUFF,
  Vd as EFFECT_REMOVE_STATE,
  xd as EFFECT_SPECIAL,
  gi as ENEMY_APPEAR,
  Ni as ENEMY_RECOVER_ALL,
  Mi as ENEMY_TRANSFORM,
  ki as ERASE_EVENT,
  Oi as ERASE_PICTURE,
  ui as EXIT_EVENT_PROCESSING,
  wd as EXTRA_PARAM_CEV,
  Hd as EXTRA_PARAM_CNT,
  Yd as EXTRA_PARAM_CRI,
  Wd as EXTRA_PARAM_EVA,
  qd as EXTRA_PARAM_HIT,
  Xd as EXTRA_PARAM_HRG,
  Kd as EXTRA_PARAM_MEV,
  zd as EXTRA_PARAM_MRF,
  jd as EXTRA_PARAM_MRG,
  Qd as EXTRA_PARAM_TRG,
  bi as FADEIN_SCREEN,
  Li as FADEOUT_BGM,
  Pi as FADEOUT_BGS,
  vi as FADEOUT_SCREEN,
  ym as FILENAME_ACTORS,
  Pm as FILENAME_ANIMATIONS,
  Om as FILENAME_ARMORS,
  gm as FILENAME_CLASSES,
  Dm as FILENAME_COMMON_EVENTS,
  um as FILENAME_ENEMIES,
  Mm as FILENAME_ITEMS,
  hm as FILENAME_MAP_INFOS,
  Nm as FILENAME_SKILLS,
  Lm as FILENAME_STATES,
  Sm as FILENAME_SYSTEM,
  vm as FILENAME_TILESET,
  bm as FILENAME_TROOPS,
  km as FILENAME_WEAPONS,
  Zd as FLAG_ID_AUTO_BATTLE,
  Jd as FLAG_ID_GUARD,
  $d as FLAG_ID_PRESERVE_TP,
  ap as FLAG_ID_SUBSTITUTE,
  Di as FLASH_SCREEN,
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
  Am as FOLDER_IMG_SV_ACTORS,
  Im as FOLDER_IMG_SV_ENEMIES,
  Tm as FOLDER_IMG_SYSTEM,
  _m as FOLDER_IMG_TILESETS,
  Cm as FOLDER_IMG_TITLES1,
  Rm as FOLDER_IMG_TITLES2,
  Gm as FOLDER_JS,
  hi as FORCE_ACTION,
  fi as GAME_OVER,
  Fi as GATHER_FOLLOWERS,
  Bi as GET_LOCATION_INFO,
  Gi as GET_ONOFF_VEHICLE,
  sn as HITTYPE_CERTAIN,
  mn as HITTYPE_MAGICAL,
  rn as HITTYPE_PHYSICAL,
  Ui as INPUT_NUMBER,
  Vi as LABEL,
  tn as LABELS_DATA_WEAPON,
  Un as LABELS_SYSTEM_BATTLER_PARAMS,
  Vn as LABELS_SYSTEM_GAME_COMMANDS,
  xi as LABEL_JUMP,
  Ja as LABEL_SET_DATA,
  re as LABEL_SET_ITEM_EFFECT,
  te as LABEL_SET_TRAIT,
  wi as LOOP,
  Hi as LOOP_BREAK,
  An as MODULE_DATA,
  Yi as MOVE_PICTURE,
  Wi as NAME_INPUT_PROCESSING,
  ir as NORMAL_PRICE,
  qi as NO_OPERATION,
  Xi as OPEN_MENU_SCREEN,
  Ki as OPEN_SAVE_SCREEN,
  Tr as OPERAND_CONSTANT,
  Rr as OPERAND_GAMEDATA,
  Cr as OPERAND_RANDOM,
  Sr as OPERAND_SCRIPT,
  _r as OPERAND_VARIABLE,
  lr as OPERATION_ADD,
  Ar as OPERATION_DIVIDE,
  Ir as OPERATION_MOD,
  Er as OPERATION_MULTIPLY,
  pr as OPERATION_SET,
  cr as OPERATION_SUBTRACT,
  ep as PARTY_ABILITY_CANCEL_SURPRISE,
  tp as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  sp as PARTY_ABILITY_ENCOUNTER_HALF,
  rp as PARTY_ABILITY_ENCOUNTER_NONE,
  mp as PARTY_ABILITY_GOLD_DOUBLE,
  op as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ea as PLAY_BGM,
  ta as PLAY_BGS,
  sa as PLAY_ME,
  zi as PLAY_MOVIE,
  ra as PLAY_SE,
  ji as PLUGIN_COMMAND_MV,
  Qi as PLUGIN_COMMAND_MZ,
  Zi as RECOVER_ALL,
  np as REGULAR_PARAM_AGI,
  ip as REGULAR_PARAM_ATK,
  dp as REGULAR_PARAM_DEF,
  pp as REGULAR_PARAM_LUK,
  lp as REGULAR_PARAM_MATK,
  cp as REGULAR_PARAM_MAX_HP,
  Ep as REGULAR_PARAM_MAX_MP,
  Ap as REGULAR_PARAM_MDEF,
  Ji as RESUME_BGM,
  $i as RETURN_TO_TITLE_SCREEN,
  ad as ROTATE_PICTURE,
  Bo as ROUTE_CHANGE_BLEND_MODE,
  No as ROUTE_CHANGE_FREQ,
  fo as ROUTE_CHANGE_IMAGE,
  Fo as ROUTE_CHANGE_OPACITY,
  go as ROUTE_CHANGE_SPEED,
  Lo as ROUTE_DIR_FIX_OFF,
  bo as ROUTE_DIR_FIX_ON,
  Xm as ROUTE_END,
  oo as ROUTE_JUMP,
  so as ROUTE_MOVE_AWAY,
  mo as ROUTE_MOVE_BACKWARD,
  Km as ROUTE_MOVE_DOWN,
  ro as ROUTE_MOVE_FORWARD,
  zm as ROUTE_MOVE_LEFT,
  Zm as ROUTE_MOVE_LOWER_L,
  Jm as ROUTE_MOVE_LOWER_R,
  eo as ROUTE_MOVE_RANDOM,
  jm as ROUTE_MOVE_RIGHT,
  to as ROUTE_MOVE_TOWARD,
  Qm as ROUTE_MOVE_UP,
  $m as ROUTE_MOVE_UPPER_L,
  ao as ROUTE_MOVE_UPPER_R,
  Go as ROUTE_PLAY_SE,
  Uo as ROUTE_SCRIPT,
  uo as ROUTE_STEP_ANIME_OFF,
  Oo as ROUTE_STEP_ANIME_ON,
  yo as ROUTE_SWITCH_OFF,
  So as ROUTE_SWITCH_ON,
  vo as ROUTE_THROUGH_OFF,
  Po as ROUTE_THROUGH_ON,
  ho as ROUTE_TRANSPARENT_OFF,
  Do as ROUTE_TRANSPARENT_ON,
  Io as ROUTE_TURN_180D,
  Ao as ROUTE_TURN_90D_L,
  Eo as ROUTE_TURN_90D_R,
  To as ROUTE_TURN_90D_R_L,
  Ro as ROUTE_TURN_AWAY,
  io as ROUTE_TURN_DOWN,
  po as ROUTE_TURN_LEFT,
  _o as ROUTE_TURN_RANDOM,
  lo as ROUTE_TURN_RIGHT,
  Co as ROUTE_TURN_TOWARD,
  co as ROUTE_TURN_UP,
  no as ROUTE_WAIT,
  ko as ROUTE_WALK_ANIME_OFF,
  Mo as ROUTE_WALK_ANIME_ON,
  ed as SAVE_BGM,
  en as SCHEMA_DATA_WEAPON,
  ca as SCRIPT_EVAL,
  la as SCRIPT_EVAL_BODY,
  td as SCROLL_MAP,
  sd as SELECT_ITEM,
  rd as SET_EVENT_LOCATION,
  md as SET_MOVEMENT_ROUTE,
  od as SET_VEHICLE_LOCATION,
  nd as SET_WEATHER_EFFECT,
  id as SHAKE_SCREEN,
  Ea as SHOP_PROCESSING,
  Aa as SHOP_PROCESSING_BODY,
  dd as SHOW_ANIMATION,
  pd as SHOW_BALLOON_ICON,
  ld as SHOW_BATTLE_ANIMATION,
  cd as SHOW_CHOICES,
  Ed as SHOW_CHOICES_ITEM,
  Ad as SHOW_MESSAGE,
  Id as SHOW_MESSAGE_BODY,
  Td as SHOW_PICTURE,
  pa as SHOW_SCROLLING_TEXT,
  da as SHOW_SCROLLING_TEXT_BODY,
  _d as SKIP,
  on as SPECIAL_EFFECT_ESCAPE,
  Ip as SPECIAL_PARAM_EXR,
  Tp as SPECIAL_PARAM_FDR,
  _p as SPECIAL_PARAM_GRD,
  Cp as SPECIAL_PARAM_MCR,
  Rp as SPECIAL_PARAM_MDR,
  Sp as SPECIAL_PARAM_PDR,
  yp as SPECIAL_PARAM_PHA,
  gp as SPECIAL_PARAM_REC,
  Np as SPECIAL_PARAM_TCR,
  Mp as SPECIAL_PARAM_TGR,
  In as SRC_DATA_ACTOR,
  gn as SRC_DATA_ARMOR,
  Nn as SRC_DATA_CLASS,
  Mn as SRC_DATA_COMMON_EVNET,
  _n as SRC_DATA_ENEMY,
  Sn as SRC_DATA_ITEMS,
  Tn as SRC_DATA_MAP,
  Rn as SRC_DATA_SKILL,
  Cn as SRC_DATA_STATE,
  kn as SRC_DATA_TROOP,
  yn as SRC_DATA_WEAPON,
  Cd as STOP_SE,
  Rd as TINT_PICTURE,
  Sd as TINT_SCREEN,
  kp as TRAIT_ACTION_PLUS,
  Op as TRAIT_ATTACK_ELEMENT,
  up as TRAIT_ATTACK_SKILL,
  bp as TRAIT_ATTACK_SPEED,
  Lp as TRAIT_ATTACK_STATE,
  Pp as TRAIT_ATTACK_TIMES,
  vp as TRAIT_COLLAPSE_TYPE,
  Dp as TRAIT_DEBUFF_RATE,
  hp as TRAIT_ELEMENT_RATE,
  fp as TRAIT_EQUIP_ARMOR_TYPE,
  Fp as TRAIT_EQUIP_LOCK,
  Bp as TRAIT_EQUIP_SEAL,
  Gp as TRAIT_EQUIP_WEAPON_TYPE,
  Up as TRAIT_PARAM,
  Vp as TRAIT_PARTY_ABILITY,
  xp as TRAIT_SKILL_ADD,
  wp as TRAIT_SKILL_SEAL,
  Hp as TRAIT_SKILL_TYPE_ADD,
  Yp as TRAIT_SKILL_TYPE_SEAL,
  Wp as TRAIT_SLOT_TYPE,
  qp as TRAIT_SPARAM,
  Xp as TRAIT_SPECIAL_FLAG,
  Kp as TRAIT_STATE_RATE,
  zp as TRAIT_STATE_RESIST,
  jp as TRAIT_XPARAM,
  yd as TRANSFER_PLAYER,
  Nr as TYPE_ARMOR,
  yr as TYPE_ITEM,
  gr as TYPE_WEAPON,
  am as VEHICLE_AIRSHIP,
  Jr as VEHICLE_BOAT,
  $r as VEHICLE_SHIP,
  gd as WAIT,
  Qp as buildNoteFromNormalized,
  ws as cloneChoices,
  em as cloneEventCommand,
  Xa as cloneParameters,
  Zp as collapsOptionsToArray,
  Ls as convertCommentArrayToObject,
  Ca as convertTermsMessageMZtoMV,
  xm as createActorControlChars,
  f as createControlCharFormat,
  de as createMenuCommandState,
  Jp as createNoteEntity,
  wm as createSystemVariableControlChars,
  $p as defineGameDataSources,
  al as defineSystemItems,
  el as defineTraitCollapseType,
  tl as defineTraitExtraParam,
  sl as defineTraitItems,
  rl as defineTraitPartyAbility,
  ml as defineTraitRegularParam,
  ol as defineTraitSpecialFlag,
  nl as defineTraitSpecialParam,
  il as extraParamName,
  dl as extraParamsToArray,
  Wn as extractFileName,
  nn as formatItemEffectText,
  $o as formatTraitText,
  Le as fromArrayChangeItems,
  Fe as fromArrayChangeWeapons,
  ps as fromArrayCommonEvent,
  ls as fromArrayControlSwitches,
  ts as fromArrayEnemyTransform,
  Is as fromArrayInputNumber,
  Ys as fromArrayPlayMovie,
  qs as fromArrayPluginCommandMZ,
  hs as fromArrayScrollingTextBody,
  vs as fromArrayScrollingTextHeader,
  _s as fromArraySelectItem,
  Us as fromArraySetupChoice,
  Bs as fromArraySetupChoiceItem,
  pl as fromArrayShowMessageHeader,
  Um as fromStringArray,
  Ur as getActorValue,
  Ln as getArmorCategoryEnabled,
  ll as getArmorTypes,
  Vm as getControlChars,
  cl as getElementTypes,
  Gr as getEnemyValue,
  ce as getEquipCommandEnabled,
  El as getEquipTypes,
  Ae as getFormationCommandEnabled,
  un as getItemCategoryEnabled,
  pe as getItemCommandEnabled,
  Al as getItemIdFromItemCommand,
  Pn as getKeyItemCategoryEnabled,
  Il as getNoteValue,
  Fn as getParamNames,
  Ie as getSaveCommandEnabled,
  le as getSkillCommandEnabled,
  Tl as getSkillTypes,
  Ee as getStatusCommandEnabled,
  _l as getSwitches,
  Cl as getVariableNames,
  bn as getWeaponCategoryEnabled,
  Rl as getWeaponTypes,
  tm as isCloneableCommand,
  Qt as isCommandBattleProcessingVariable,
  Mr as isCommandOperandVariables,
  Sl as isUsingVariableItemCommand,
  be as isUsingVaribleCommandChangingItems,
  On as labelsRegistry,
  qo as makeActorData,
  Ko as makeArmorData,
  Gt as makeAudioCommand,
  Wm as makeBattleEventPage,
  Ce as makeBooleanOptions,
  zo as makeClassData,
  ms as makeCommandAddEachEnemyState,
  ss as makeCommandAddEnemyState,
  Xs as makeCommandAddPartyMember,
  It as makeCommandAddStateByVariable,
  Et as makeCommandAddStateEachActor,
  lt as makeCommandAddStateTargetActor,
  E as makeCommandAudioAny,
  Zt as makeCommandBattleProcessingDirect,
  $t as makeCommandBattleProcessingEncount,
  Jt as makeCommandBattleProcessingVariable,
  Rt as makeCommandChangeActorImages,
  Nt as makeCommandChangeActorName,
  Mt as makeCommandChangeActorNickName,
  kt as makeCommandChangeActorProfile,
  Ht as makeCommandChangeBattleBGM,
  Xt as makeCommandChangeBattleBackground,
  _t as makeCommandChangeClass,
  Wt as makeCommandChangeDefeatME,
  Ct as makeCommandChangeEquip,
  Pe as makeCommandChangeItems,
  Cs as makeCommandChangeParallax,
  gs as makeCommandChangeTileset,
  jr as makeCommandChangeVehicleBGM,
  zr as makeCommandChangeVehicleImage,
  Yt as makeCommandChangeVictoryME,
  Be as makeCommandChangeWeapons,
  La as makeCommandCommentBody,
  ba as makeCommandCommentHeader,
  ds as makeCommandCommonEvent,
  cs as makeCommandControlSwitches,
  as as makeCommandControlTimer,
  us as makeCommandDisableFormationAccess,
  Ns as makeCommandDisableMenuAccess,
  ks as makeCommandDisableSaveAccess,
  bs as makeCommandEnableFormationAccess,
  Ms as makeCommandEnableMenuAccess,
  Os as makeCommandEnableSaveAccess,
  is as makeCommandEnemyRecoverAll,
  ns as makeCommandEnemyRecoverAllEach,
  es as makeCommandEnemyTransform,
  er as makeCommandFadeInScreen,
  ht as makeCommandFadeOutBGM,
  Bt as makeCommandFadeOutBGS,
  tr as makeCommandFadeOutScreen,
  sr as makeCommandFlashScreen,
  ot as makeCommandForgetSkill,
  pt as makeCommandForgetSkillByVariable,
  it as makeCommandForgetSkillEachActor,
  Ot as makeCommandGainActorHP,
  Pt as makeCommandGainActorMP,
  bt as makeCommandGainActorTP,
  we as makeCommandGainArmor,
  He as makeCommandGainArmorByVariable,
  Ke as makeCommandGainExpByVariable,
  qe as makeCommandGainExpDirect,
  Ze as makeCommandGainExpTargetAndOperandVariable,
  je as makeCommandGainExpTargetVariable,
  zs as makeCommandGainGold,
  Qs as makeCommandGainGoldByVariable,
  ve as makeCommandGainItem,
  De as makeCommandGainItemV,
  Ge as makeCommandGainWeapon,
  Ue as makeCommandGainWeaponV,
  Kr as makeCommandGetOnOffVehicle,
  ys as makeCommandHideMapName,
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
  ut as makeCommandLoseActorHP,
  vt as makeCommandLoseActorMP,
  Lt as makeCommandLoseActorTP,
  Ye as makeCommandLoseArmor,
  We as makeCommandLoseArmorByVariable,
  ze as makeCommandLoseExpByVariable,
  Xe as makeCommandLoseExpDirect,
  Je as makeCommandLoseExpTargetAndOperandVariable,
  Qe as makeCommandLoseExpTargetVariable,
  js as makeCommandLoseGold,
  Zs as makeCommandLoseGoldByVariable,
  he as makeCommandLoseItem,
  fe as makeCommandLoseItemV,
  Ve as makeCommandLoseWeapon,
  xe as makeCommandLoseWeaponV,
  $s as makeCommandMovePicture,
  Ut as makeCommandPlayBGM,
  Vt as makeCommandPlayBGS,
  xt as makeCommandPlayME,
  Hs as makeCommandPlayMovie,
  wt as makeCommandPlaySE,
  Ws as makeCommandPluginCommandMZ,
  St as makeCommandRecoverAllEachActors,
  yt as makeCommandRecoverAllTargetActor,
  gt as makeCommandRecoverAllTargetActorByVariable,
  ct as makeCommandRemoveActorTargetState,
  os as makeCommandRemoveEachEnemyState,
  rs as makeCommandRemoveEnemyState,
  Ks as makeCommandRemovePartyMember,
  Tt as makeCommandRemoveStateByVariable,
  At as makeCommandRemoveStateEachActors,
  Ft as makeCommandResumeBGM,
  ft as makeCommandSaveBGM,
  or as makeCommandScriptArray,
  ha as makeCommandScriptBody,
  Da as makeCommandScriptHeader,
  Rs as makeCommandScrollMap,
  fs as makeCommandScrollingTextBody,
  Ds as makeCommandScrollingTextHeader,
  Ts as makeCommandSelectItem,
  Qr as makeCommandSetVehicleLocation,
  Zr as makeCommandSetVehicleLocationFromVariables,
  ar as makeCommandSetWeatherEffect,
  xs as makeCommandSetupChoice,
  rr as makeCommandShakeScreen,
  dr as makeCommandShopProcessing,
  Dt as makeCommandShowAnimation,
  qt as makeCommandShowBalloonIcon,
  Fs as makeCommandShowChoiceItem,
  Ss as makeCommandShowMapName,
  yl as makeCommandShowMessage,
  gl as makeCommandShowMessageBody,
  Js as makeCommandShowPicture,
  hr as makeCommandSystemBattleCount,
  Fr as makeCommandSystemEscapeCount,
  Dr as makeCommandSystemSaveCount,
  vr as makeCommandSystemTimer,
  fr as makeCommandSystemWinCount,
  mr as makeCommandTintScreen,
  Vr as makeCommandVariableFromActorStatusData,
  xr as makeCommandVariableFromArmor,
  wr as makeCommandVariableFromConstant,
  Hr as makeCommandVariableFromEnemyData,
  Yr as makeCommandVariableFromItemData,
  Or as makeCommandVariableFromMapId,
  Lr as makeCommandVariableFromPartyGold,
  ur as makeCommandVariableFromPartyMembers,
  br as makeCommandVariableFromPartySteps,
  Pr as makeCommandVariableFromPlaytime,
  Wr as makeCommandVariableFromRandom,
  qr as makeCommandVariableFromScript,
  Br as makeCommandVariableFromTempLastData,
  kr as makeCommandVariableFromVariable,
  Xr as makeCommandVariableFromWeapon,
  W as makeCommentArray,
  Ps as makeCommentCommandArray,
  Hm as makeCommonEventData,
  F as makeDamage,
  fn as makeDataNames,
  ee as makeDropItem,
  Se as makeEditorSetting,
  Qo as makeEnemyAction,
  Zo as makeEnemyData,
  ja as makeEventPageCondition,
  hn as makeGameInitial,
  Te as makeItemCategories,
  vn as makeItemCategoriesFromArray,
  cn as makeItemData,
  Ho as makeMapData,
  Vo as makeMapEvent,
  Qa as makeMapEventIamge,
  xo as makeMapEventPage,
  wo as makeMapFileInfo,
  Yo as makeMapInfoData,
  _e as makeMenuCommandsEnabled,
  Dn as makeMenuCommandsEnabledFromArray,
  ae as makeParamArray,
  Sa as makeParamNamesArray,
  Ia as makeParamNamesFromArray,
  En as makeSkillData,
  ne as makeSoundsArray,
  ie as makeSoundsObject,
  Jo as makeStateData,
  oe as makeSystemAdvanced,
  q as makeSystemData,
  wn as makeSystemDataFromMV,
  xn as makeSystemDataMV,
  ga as makeTermsBasic,
  _a as makeTermsBasicFromArray,
  ya as makeTermsCommandArray,
  Nl as makeTermsCommandArrayWithNulls,
  Ta as makeTermsCommandFromArray,
  Ra as makeTermsMessages,
  Re as makeTitleCommandWindow,
  Ym as makeTroopData,
  za as makeTroopEventConditions,
  qm as makeTroopMember,
  D as makeVehicleData,
  an as makeWeaponData,
  Xo as normalizeDataActor,
  Ml as normalizeNote,
  jo as paramArrayToObject,
  kl as partyAbilityToArray,
  Ol as readNote,
  ul as readNoteEx,
  bl as readNoteObject,
  Ll as regularParamName,
  Pl as regularParamsToArray,
  vl as replaceNote,
  Dl as replaceNoteWithHandlers,
  Wo as repleaceMapEventCommands,
  hl as resolveItemEffectLabels,
  fl as resolveTraitLabels,
  Fl as setNoteValue,
  Bl as specialFlagToArray,
  Gl as specialParamName,
  Ul as specialParamsToArray,
  Hn as textAndDesc,
  Oa as toArrayCommonEvent,
  ua as toArrayControlSwitches,
  As as toArrayInputNumber,
  Ga as toArrayOperandActorStatus,
  Ua as toArrayOperandArmorData,
  Va as toArrayOperandConstant,
  wa as toArrayOperandEnemyStatus,
  Ha as toArrayOperandItemData,
  Ya as toArrayOperandRandom,
  Wa as toArrayOperandScript,
  fa as toArrayOperandVariable,
  qa as toArrayOperandWeaponData,
  va as toArrayScrollingTextBody,
  Pa as toArrayScrollingTextHeader,
  Vs as toArraySetupChoice,
  Gs as toArraySetupChoiceItem,
  Vl as toArrayShowMessageHeader
};
