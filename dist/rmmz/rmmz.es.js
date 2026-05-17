import { m as E, r as k, G as R, ai as J, y as U, p as w, u as W, I as X, B as G, g as $, R as aa, V as ea, q as b, N as g, b as O, aa as A, aC as h, aS as ta, aR as ra, az as ma, ay as K, aH as sa, aI as oa, X as t, aZ as na, am as da, an as ia, ao as ca, aq as pa, d as la, M as Ea, f as Aa } from "../shared/makeAudio.es.js";
import { A as Bs, C as Hs, a as xs, c as Ys, e as Us, h as ws, i as Ws, j as Xs, k as Ks, l as qs, n as js, o as zs, s as Qs, t as Zs, v as Js, w as $s, x as ao, z as eo, D as to, E as ro, F as mo, H as so, J as oo, K as no, L as io, O as co, P as po, Q as lo, S as Eo, T as Ao, U as Co, W as Io, Y as To, Z as _o, _ as So, $ as ko, a0 as Ro, a1 as yo, a2 as Mo, a3 as Po, a4 as Lo, a5 as No, a6 as bo, a7 as go, a8 as uo, a9 as Oo, ab as Do, ac as vo, ad as Fo, ae as Vo, af as fo, ag as Go, ah as ho, aj as Bo, ak as Ho, al as xo, ap as Yo, ar as Uo, as as wo, at as Wo, au as Xo, av as Ko, aw as qo, ax as jo, aA as zo, aB as Qo, aD as Zo, aE as Jo, aF as $o, aG as an, aJ as en, aK as tn, aL as rn, aM as mn, aN as sn, aO as on, aP as nn, aQ as dn, aT as cn, aU as pn, aV as ln, aW as En, aX as An, aY as Cn } from "../shared/makeAudio.es.js";
import { bj as y, bl as M, bm as I, bk as P } from "../shared/namedItems.es.js";
import { C as Tn, a as _n, b as Sn, c as kn, E as Rn, d as yn, e as Mn, f as Pn, g as Ln, h as Nn, i as bn, j as gn, k as un, l as On, m as Dn, n as vn, o as Fn, p as Vn, q as fn, r as Gn, s as hn, t as Bn, u as Hn, v as xn, w as Yn, x as Un, y as wn, F as Wn, z as Xn, A as Kn, B as qn, K as jn, D as zn, G as Qn, P as Zn, H as Jn, I as $n, J as ad, L as ed, M as td, R as rd, N as md, O as sd, Q as od, S as nd, T as dd, U as id, V as cd, W as pd, X as ld, Y as Ed, Z as Ad, _ as Cd, $ as Id, a0 as Td, a1 as _d, a2 as Sd, a3 as kd, a4 as Rd, a5 as yd, a6 as Md, a7 as Pd, a8 as Ld, a9 as Nd, aa as bd, ab as gd, ac as ud, ad as Od, ae as Dd, af as vd, ag as Fd, ah as Vd, ai as fd, aj as Gd, ak as hd, al as Bd, am as Hd, an as xd, ao as Yd, ap as Ud, aq as wd, ar as Wd, as as Xd, at as Kd, au as qd, av as jd, aw as zd, ax as Qd, ay as Zd, az as Jd, aA as $d, aB as ai, aC as ei, aD as ti, aE as ri, aF as mi, aG as si, aH as oi, aI as ni, aJ as di, aK as ii, aL as ci, aM as pi, aN as li, aO as Ei, aP as Ai, aQ as Ci, aR as Ii, aS as Ti, aT as _i, aU as Si, aV as ki, aW as Ri, aX as yi, aY as Mi, aZ as Pi, a_ as Li, a$ as Ni, b0 as bi, b1 as gi, b2 as ui, b3 as Oi, b4 as Di, b5 as vi, b6 as Fi, b7 as Vi, b8 as fi, b9 as Gi, ba as hi, bb as Bi, bc as Hi, bd as xi, be as Yi, bf as Ui, bg as wi, bh as Wi, bi as Xi } from "../shared/namedItems.es.js";
import { g as Ca, f as Ia } from "../shared/applyFormat.es.js";
import { O as qi, a as ji, b as zi, c as Qi, d as Zi, e as Ji } from "../shared/applyFormat.es.js";
import { c as ac, a as ec, g as tc, b as rc, d as mc, e as sc, f as oc, h as nc, i as dc, j as ic, k as cc, l as pc, m as lc, n as Ec, o as Ac, p as Cc, q as Ic, r as Tc, s as _c, t as Sc, u as kc, v as Rc, w as yc, x as Mc, y as Pc, z as Lc, A as Nc, B as bc, C as gc, D as uc, E as Oc, F as Dc, G as vc, H as Fc, I as Vc, J as fc, K as Gc, L as hc, M as Bc, N as Hc, O as xc, P as Yc, Q as Uc, R as wc, S as Wc, T as Xc, U as Kc, V as qc, W as jc, X as zc, Y as Qc, Z as Zc, _ as Jc, $ as $c, a0 as ap, a1 as ep, a2 as tp, a3 as rp, a4 as mp, a5 as sp, a6 as op, a7 as np, a8 as dp, a9 as ip, aa as cp, ab as pp, ac as lp, ad as Ep, ae as Ap, af as Cp, ag as Ip, ah as Tp } from "../shared/makeSystemEx.es.js";
import { c as Sp, f as kp, m as Rp, a as yp, b as Mp, d as Pp, e as Lp, g as Np, h as bp, i as gp, j as up, k as Op, l as Dp, n as vp, o as Fp, p as Vp, q as fp, r as Gp, s as hp, t as Bp, u as Hp, v as xp, w as Yp, x as Up, y as wp } from "../shared/makeSystem.es.js";
const wa = (a, e = 0) => ({ code: E, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), Wa = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), Xa = (a, e = 0) => ({ code: E, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), Ka = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), qa = (a, e = 0) => ({ code: E, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), ja = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), za = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Qa = (a, e = 0) => ({ code: E, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), Za = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), Ja = (a, e = 0) => ({ code: k, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), $a = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), ae = (a, e = 0) => ({ code: k, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), ee = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), te = (a, e = 0) => ({ code: k, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), re = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), me = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), se = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), oe = (a, e = 0) => ({ code: R, indent: e, parameters: [0, 0, 1, a.skillId] }), ne = (a, e = 0) => ({ code: R, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), de = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), ie = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), ce = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), pe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), le = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Ee = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Ae = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), Ce = (a, e = 0) => ({
  code: J,
  indent: e,
  parameters: [a.actorId, a.maxLength]
}), Ie = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), Te = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), _e = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.variableId]
}), Se = (a, e = 0) => ({ code: U, indent: e, parameters: q(a, 0) }), ke = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: q(a, 1)
}), q = (a, e) => [a.actorId, a.paramId, e, a.value], S = { direct: 0, variable: 1 }, Re = (a, e = 0) => ({ code: w, indent: e, parameters: j(0, a) }), ye = (a, e = 0) => ({
  code: w,
  indent: e,
  parameters: j(1, a)
}), Me = (a, e = 0) => ({ code: X, indent: e, parameters: D(0, a) }), Pe = (a, e = 0) => ({ code: X, indent: e, parameters: D(1, a) }), Le = (a, e = 0) => ({ code: W, indent: e, parameters: D(0, a) }), Ne = (a, e = 0) => ({
  code: W,
  indent: e,
  parameters: D(1, a)
}), D = (a, e) => [e.targetType === "variable" ? S.variable : S.direct, e.targetType === "each" ? 0 : e.target, a, S[e.operand.mode], e.operand.value], j = (a, e) => [e.targetType === "variable" ? S.variable : S.direct, e.targetType === "each" ? 0 : e.target, a, S[e.operand.mode], e.operand.value, e.allowDeath], be = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), ge = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), ue = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Oe = (a = 0) => ({ code: 244, indent: a, parameters: [] }), De = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Ta = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, ve = (a) => Ta[a], Fe = (a, e = 0) => ({ code: 213, indent: e, parameters: [a.characterId, a.balloonId, a.waiting] }), Ve = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), fe = 0, Ge = 1, he = 2, Be = (a) => a.parameters[0] === 1, He = ({ troopId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({
  code: G,
  indent: m,
  parameters: [0, a, e, r]
}), xe = ({ variableId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({ code: G, indent: m, parameters: [1, a, e, r] }), Ye = ({ canEscape: a = !1, canLose: e = !1 }, r = 0) => ({
  code: G,
  indent: r,
  parameters: [2, 0, a, e]
}), _a = { plus: 0, minus: 1 }, Ue = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [_a[a ?? "plus"] ?? 0, e ?? 0] }), z = (a, e = 0) => ({
  code: $,
  indent: e,
  parameters: [a]
}), we = (a = 0) => z(0, a), We = (a = 0) => z(1, a);
function Xe(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const Ke = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), qe = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), je = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), ze = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), Qe = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Ze = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), Je = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), $e = (a, e = 0) => ({ code: aa, indent: e, parameters: Sa(a ?? {}) }), at = (a) => ({ eventId: a[0] }), Sa = (a) => [a.eventId ?? 0], et = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), ka = (a) => [a.min, a.max, a.value], tt = (a, e = 0) => ({ code: ea, indent: e, parameters: ka(a) }), rt = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), mt = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], st = (a) => ({ variableId: a[0], maxDigits: a[1] }), ot = (a) => a.parameters[3] === I, nt = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), dt = (a, e = 0) => ({ code: b, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), it = (a, e = 0) => ({ code: b, indent: e, parameters: [a.itemId, y, M, a.value] }), ct = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.itemId, y, I, a.variableId]
}), pt = (a, e = 0) => ({ code: b, indent: e, parameters: [a.itemId, P, M, a.value] }), lt = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.itemId, P, I, a.variableId]
}), Et = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), At = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Ct = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, y, M, a.value, !1] }), It = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, y, I, a.variableId, !1]
}), Tt = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, P, M, a.value, !1] }), _t = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, P, I, a.variableId, !1]
}), St = (a, e = 0) => ({ code: O, indent: e, parameters: [a.armorId, y, M, a.value, !1] }), kt = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.armorId, y, I, a.variableId, !1]
}), Rt = (a, e = 0) => ({ code: O, indent: e, parameters: [a.armorId, P, M, a.value, !1] }), yt = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.armorId, P, I, a.variableId, !1]
}), Mt = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Pt = (a) => ({ variableId: a[0], itemType: a[1] }), Lt = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), Nt = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), bt = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), gt = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), ut = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Ot = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [a.variableId, 0, 1, a.x, a.y]
}), Dt = (a, e = 0) => ({ code: A, indent: e, parameters: [a.variableId, 0, 0, a.x, a.y] }), vt = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [a.variableId, 1, 1, a.x, a.y]
}), Ft = (a, e = 0) => ({ code: A, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), Vt = (a, e = 0) => ({ code: A, indent: e, parameters: [a.variableId, 6, 1, a.x, a.y] }), ft = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [a.variableId, 6, 0, a.x, a.y]
}), Gt = (a, e = 0) => ({ code: A, indent: e, parameters: [a.variableId, Q[a.layer] ?? 2, 1, a.x, a.y] }), ht = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [a.variableId, Q[a.layer] ?? 2, 0, a.x, a.y]
}), Q = { 1: 2, 2: 3, 3: 4, 4: 5 }, Bt = (a, e = 0) => ({ code: h, indent: e, parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction] }), Ht = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), xt = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction]
}), Yt = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Ut = (a = 0) => ({ code: 135, parameters: [0], indent: a }), wt = (a = 0) => ({
  code: 134,
  parameters: [1],
  indent: a
}), Wt = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Xt = (a = 0) => ({ code: 137, parameters: [1], indent: a }), Kt = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), Ra = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], qt = (a) => ({ speed: a[0], skip: a[1] }), jt = (a = {}, e = 0) => ({ code: ra, indent: e, parameters: Ra(a) }), ya = (a = "") => [a], zt = (a) => ({ content: a[0] }), Qt = (a = "", e = 0) => ({
  code: ta,
  indent: e ?? 0,
  parameters: ya(a)
}), Zt = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Jt = (a) => ({ index: a[0], name: a[1] }), $t = (a) => [a.index ?? 0, a.name ?? ""], ar = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), er = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], tr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), rr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), mr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), sr = (a) => ({
  filename: a[0]
}), or = ({ args: a = {}, commandName: e, commandTitle: r = "", pluginName: m }, n = 0) => ({ code: 357, indent: n, parameters: [m, e, r, { ...a }] }), nr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), dr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), ir = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), cr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), pr = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), lr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Er = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Ar = ({ pictureId: a = 0, origin: e = 0, name: r = "", x: m = 0, y: n = 0, scaleX: l = 100, scaleY: T = 100, opacity: F = 255, blendMode: V = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, r, e, m, n, l, T, F, V]
}), Cr = ({ pictureId: a, origin: e, x: r, y: m, scaleX: n, scaleY: l, opacity: T, blendMode: F, wait: V = !1, easingType: Z = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, r, m, n, l, T, F, V, Z]
}), Ir = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Tr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), _r = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Sr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), kr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Rr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Ma = (a, e = 0) => ({ code: K, indent: e, parameters: [a] }), Pa = (a, e = 0) => ({
  code: ma,
  indent: e,
  parameters: [a]
}), yr = (a, e = 0) => a.map(((r, m) => m === 0 ? Ma(r, e) : Pa(r, e))), Mr = 1, Pr = 0, u = { item: 0, weapon: 1, armors: 2 }, Lr = ({ goods: a, buyOnly: e = !1 }, r = 0) => a.map(((m, n) => {
  const l = ((T) => T.customPrice !== void 0 && T.customPrice !== 0)(m) ? 1 : 0;
  return n === 0 ? { code: sa, indent: r, parameters: [u[m.itemType] ?? u.item, m.id, l, m.customPrice ?? 0, e] } : {
    code: oa,
    indent: r,
    parameters: [u[m.itemType] ?? u.item, m.id, l, m.customPrice ?? 0]
  };
})), Nr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 0) }), br = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 1)
}), gr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 2) }), ur = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 3) }), Or = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 12) }), Dr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 4)
}), vr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 5) }), Fr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 6) }), Vr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 7)
}), fr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 8) }), Gr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 9) }), hr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 10)
}), Br = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 11)
}), o = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], Hr = 0, xr = 1, Yr = 2, Ur = 3, wr = 4, Wr = 0, Xr = 1, Kr = 2, qr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 0)
}), jr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 1) }), zr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 10) }), Qr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 2) }), Zr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 3)
}), Jr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 4) }), $r = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 5) }), am = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 6)
}), em = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 7) }), tm = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 8) }), rm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 9)
}), d = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], mm = (a) => a.parameters[3] === 1, sm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: La(a)
}), La = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], om = (a, e = 0) => ({ code: t, indent: e, parameters: Na(a) }), nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ba(a)
}), dm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ga(a)
}), Na = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], ba = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], ga = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], im = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ua(a)
}), ua = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], i = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, cm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, i.X)
}), pm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.Y) }), lm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.DIRECTION) }), Em = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, i.SCREEN_X)
}), Am = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.SCREEN_Y) }), Cm = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, i.X) }), Im = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.Y)
}), Tm = (a, e = 0) => ({ code: t, indent: e, parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.DIRECTION) }), _m = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.SCREEN_X)
}), Sm = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, i.SCREEN_Y) }), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], km = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: v(a, 0)
}), Rm = (a, e = 0) => ({ code: t, indent: e, parameters: v(a, 1) }), ym = (a, e = 0) => ({ code: t, indent: e, parameters: v(a, 2) }), Mm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: v(a, 3)
}), v = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Pm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Oa(a)
}), Oa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], Lm = (a, e = 0) => ({ code: K, indent: e, parameters: [a] }), Nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 0)
}), bm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 1) }), gm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 2) }), um = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 3) }), Om = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 4)
}), Dm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 5) }), vm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 6) }), Fm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 7)
}), Vm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 8) }), fm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 9)
}), p = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Gm = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, hm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 0) }), Bm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 1) }), Hm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 2) }), xm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: L(a, 3)
}), Ym = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 4) }), Um = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: L(a, 5)
}), L = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], wm = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Wm = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Xm = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, na(a.bgm)] }), Km = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), qm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), jm = 0, zm = 1, Qm = 2, Zm = (a) => a.code === da || a.code === ia || a.code === ca || a.code === pa || a.code === la || a.code === Ea || a.code === Aa, Da = (a) => [...a], Jm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Da(a.parameters)
}), va = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", $m = (a) => a.parameters.every(va), as = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
}))), es = (a, e) => a.map(((r) => r ? { ...r, pages: Fa(r, e) } : null)), Fa = (a, e) => a.pages.map(((r) => ({ ...r, list: e(r.list) }))), Va = {
  actor: { title: "アクター", options: {
    initialEquipments: "初期装備",
    faceImage: "顔画像",
    characterImage: "キャラクター画像",
    svBattlerImage: "SVバトラー画像",
    nickname: "ニックネーム",
    profile: "プロフィール",
    classId: "職業ID",
    initialLevel: "初期レベル",
    maxLevel: "最大レベル"
  } },
  class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } },
  enemy: {
    title: "敵キャラ",
    options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
  },
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
}, s = "{name}", _ = "{name} * {value}%", B = "{name} + {value}%", H = "{value}", fa = { title: "特徴", options: {
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
    format: s,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: s, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: s, options: {
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
    format: s
  },
  attackElement: { title: "攻撃属性", format: s },
  attackState: { title: "攻撃ステート", format: B },
  attackSpeed: { title: "攻撃速度補正", format: H },
  attackTimes: {
    title: "攻撃追加回数",
    format: H
  },
  actionPlus: { title: "行動追加", format: _ },
  attackSkill: { title: "攻撃スキル", format: s },
  equipWeaponType: { title: "装備武器タイプ", format: s },
  equipArmorType: { title: "装備防具タイプ", format: s },
  equipLock: {
    title: "装備固定",
    format: s
  },
  equipSeal: { title: "装備封印", format: s },
  slotType: { title: "スロットタイプ", format: s },
  skillAdd: { title: "スキル追加", format: s },
  skillSeal: { title: "スキルタイプ封印", format: s },
  skillTypeAdd: { title: "スキルタイプ追加", format: s },
  skillTypeSeal: { title: "スキルタイプ封印", format: s }
} }, Ga = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, ts = (a, e, r) => {
  const m = Ca(Ga);
  return Ia(e, r, m, a.pattern, ((n) => n.dataId));
}, ha = { title: "ダメージ", options: {} }, rs = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: {
      type: "integer",
      minimum: 0
    },
    animationId: { type: "integer", minimum: 0 },
    params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
      type: "integer"
    }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    damage: { type: "object", properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: {
      type: "string"
    }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: !1 } }, required: ["type", "elementId", "formula", "variance", "critical"] },
    traits: {
      type: "array",
      items: { type: "object", additionalProperties: !1, properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "number" } }, required: ["code", "dataId", "value"] }
    }
  }
}, ms = { title: "武器", options: { weaponTypeId: "武器タイプID" } }, ss = 0, os = 1, ns = 2, x = "{name} {value1}%", f = "{value1}% + {value2}", Y = "{name} {value1}ターン", N = "{name}", Ba = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: Y },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Y },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: f },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: N },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: f
  },
  recoverMp: {
    desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "MP回復",
    format: f
  },
  removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: N },
  removeDebuff: {
    desc: "デバフを解除する",
    domainName: "デバフ解除",
    format: N
  },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: x },
  special: { desc: "特殊効果", domainName: "特殊効果", format: N },
  addState: {
    desc: "状態異常を解除する",
    domainName: "ステート解除",
    format: x
  },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: N }
} }, ds = 0, is = (a, e, r) => {
  const m = r.find(((l) => l.id === e.dataId)), n = m ? m.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", n);
}, cs = { title: "アイテム", options: { consumable: "消耗品" } }, ps = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ls = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Es = "data", As = "actor", Cs = "map", Is = "enemy", Ts = "state", _s = "skill", Ss = "item", ks = "weapon", Rs = "armor", ys = "class", Ms = "common_event", Ps = "troop", Ha = {
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
}, Ls = () => ({ rpg: { damage: ha, data: Va, traits: fa, itemEffect: Ba }, global: Ha }), Ns = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), bs = (a) => ({
  armorTypes: C(a.armorTypes),
  elements: C(a.elements),
  equipTypes: C(a.equipTypes),
  weaponTypes: C(a.weaponTypes),
  skillTypes: C(a.skillTypes),
  variables: C(a.variables),
  switches: C(a.switches)
}), C = (a) => a ? [...a] : [], gs = (a) => a.terms.params.map(((e, r) => ({ name: e, id: r }))), us = { title: "オプション", options: {
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
} }, Os = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Ds = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, vs = { title: "コマンド", options: {
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
} }, Fs = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Vs = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, fs = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Bs as ABORT_BATTLE,
  fe as BATTLE_DIRECT,
  he as BATTLE_ENCOUNT,
  G as BATTLE_PROCESSING,
  Ge as BATTLE_VARIABLE,
  Hs as CHANGE_ACTOR_IMAGES,
  xs as CHANGE_ACTOR_STATE,
  O as CHANGE_ARMORS,
  Ys as CHANGE_BATTLE_BACKGROUND,
  la as CHANGE_BATTLE_BGM,
  Us as CHANGE_CLASS,
  Aa as CHANGE_DEFEAT_ME,
  $ as CHANGE_ENCOUNTER,
  ws as CHANGE_ENEMY_HP,
  Ws as CHANGE_ENEMY_MP,
  Xs as CHANGE_ENEMY_STATE,
  Ks as CHANGE_ENEMY_TP,
  qs as CHANGE_EQUIP,
  E as CHANGE_EXP,
  js as CHANGE_FORMATION_ACCESS,
  zs as CHANGE_GOLD,
  w as CHANGE_HP,
  b as CHANGE_ITEMS,
  k as CHANGE_LEVEL,
  Qs as CHANGE_MAP_NAME_DISPLAY,
  Zs as CHANGE_MENU_ACCESS,
  W as CHANGE_MP,
  Js as CHANGE_NAME,
  $s as CHANGE_NICKNAME,
  ao as CHANGE_PARALLAX,
  U as CHANGE_PARAMETER,
  eo as CHANGE_PARTY_MEMBER,
  to as CHANGE_PLAYER_FOLLOWERS,
  ro as CHANGE_PROFILE,
  mo as CHANGE_SAVE_ACCESS,
  R as CHANGE_SKILL,
  so as CHANGE_TILESET,
  X as CHANGE_TP,
  oo as CHANGE_TRANSPARENCY,
  no as CHANGE_VEHICLE_BGM,
  io as CHANGE_VEHICLE_IMAGE,
  Ea as CHANGE_VICTORY_ME,
  g as CHANGE_WEAPONS,
  co as CHANGE_WINDOW_COLOR,
  Tn as COLLAPS_BOSS,
  _n as COLLAPS_INSTANT,
  Sn as COLLAPS_NONE,
  kn as COLLAPS_NORMAL,
  po as COMMENT_BODY,
  lo as COMMENT_HEAD,
  aa as COMMON_EVENT,
  Eo as CONDITIONAL_BRANCH,
  Ao as CONDITIONAL_BRANCH_ELSE,
  Co as CONTROL_SELF_SWITCH,
  ea as CONTROL_SWITCHES,
  Io as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Mr as CUSTOM_PRICE,
  ha as DEFAULT_DAMAGE_LABELS,
  Ha as DEFAULT_GLOBAL_LABELS,
  cs as DEFAULT_ITEM_LABELS,
  ps as DEFAULT_SKILL_LABELS,
  us as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Os as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  ls as DEFAULT_USABLE_ITEM_LABELS,
  Vs as DIRECTION,
  Rn as EFFECT_ADD_BUFF,
  yn as EFFECT_ADD_DEBUFF,
  Mn as EFFECT_ADD_STATE,
  Pn as EFFECT_COMMON_EVENT,
  Ln as EFFECT_GAIN_TP,
  Nn as EFFECT_GROW,
  bn as EFFECT_LEARN_SKILL,
  gn as EFFECT_RECOVER_HP,
  un as EFFECT_RECOVER_MP,
  On as EFFECT_REMOVE_BUFF,
  Dn as EFFECT_REMOVE_DEBUFF,
  vn as EFFECT_REMOVE_STATE,
  Fn as EFFECT_SPECIAL,
  To as ENEMY_APPEAR,
  _o as ENEMY_RECOVER_ALL,
  So as ENEMY_TRANSFORM,
  ko as ERASE_EVENT,
  Ro as ERASE_PICTURE,
  yo as EXIT_EVENT_PROCESSING,
  Vn as EXTRA_PARAM_CEV,
  fn as EXTRA_PARAM_CNT,
  Gn as EXTRA_PARAM_CRI,
  hn as EXTRA_PARAM_EVA,
  Bn as EXTRA_PARAM_HIT,
  Hn as EXTRA_PARAM_HRG,
  xn as EXTRA_PARAM_MEV,
  Yn as EXTRA_PARAM_MRF,
  Un as EXTRA_PARAM_MRG,
  wn as EXTRA_PARAM_TRG,
  Mo as FADEIN_SCREEN,
  Po as FADEOUT_BGM,
  Lo as FADEOUT_BGS,
  No as FADEOUT_SCREEN,
  Wn as FLAG_ID_AUTO_BATTLE,
  Xn as FLAG_ID_GUARD,
  Kn as FLAG_ID_PRESERVE_TP,
  qn as FLAG_ID_SUBSTITUTE,
  bo as FLASH_SCREEN,
  go as FORCE_ACTION,
  uo as GAME_OVER,
  Oo as GATHER_FOLLOWERS,
  A as GET_LOCATION_INFO,
  Do as GET_ONOFF_VEHICLE,
  ss as HITTYPE_CERTAIN,
  ns as HITTYPE_MAGICAL,
  os as HITTYPE_PHYSICAL,
  vo as INPUT_NUMBER,
  jn as KEYWORD_GAME_OBJECTS,
  zn as KEYWORD_GAME_VALIABLES,
  Qn as KEYWORD_MATH,
  Fo as LABEL,
  ms as LABELS_DATA_WEAPON,
  Ds as LABELS_SYSTEM_BATTLER_PARAMS,
  vs as LABELS_SYSTEM_GAME_COMMANDS,
  Vo as LABEL_JUMP,
  Va as LABEL_SET_DATA,
  Ba as LABEL_SET_ITEM_EFFECT,
  fa as LABEL_SET_TRAIT,
  fo as LOOP,
  Go as LOOP_BREAK,
  i as MAP_CHARACTOR_PARAM,
  Es as MODULE_DATA,
  ho as MOVE_PICTURE,
  J as NAME_INPUT_PROCESSING,
  Pr as NORMAL_PRICE,
  Bo as NO_OPERATION,
  Ho as OPEN_MENU_SCREEN,
  xo as OPEN_SAVE_SCREEN,
  Hr as OPERAND_CONSTANT,
  Ur as OPERAND_GAMEDATA,
  Yr as OPERAND_RANDOM,
  wr as OPERAND_SCRIPT,
  xr as OPERAND_VARIABLE,
  qi as OPERATION_ADD,
  ji as OPERATION_DIVIDE,
  zi as OPERATION_MOD,
  Qi as OPERATION_MULTIPLY,
  Zi as OPERATION_SET,
  Ji as OPERATION_SUBTRACT,
  Zn as PARTY_ABILITY_CANCEL_SURPRISE,
  Jn as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  $n as PARTY_ABILITY_ENCOUNTER_HALF,
  ad as PARTY_ABILITY_ENCOUNTER_NONE,
  ed as PARTY_ABILITY_GOLD_DOUBLE,
  td as PARTY_ABILITY_RAISE_PREEMPTIVE,
  da as PLAY_BGM,
  ia as PLAY_BGS,
  ca as PLAY_ME,
  Yo as PLAY_MOVIE,
  pa as PLAY_SE,
  Uo as PLUGIN_COMMAND_MV,
  wo as PLUGIN_COMMAND_MZ,
  Wo as RECOVER_ALL,
  rd as REGULAR_PARAM_AGI,
  md as REGULAR_PARAM_ATK,
  sd as REGULAR_PARAM_DEF,
  od as REGULAR_PARAM_LUK,
  nd as REGULAR_PARAM_MATK,
  dd as REGULAR_PARAM_MAX_HP,
  id as REGULAR_PARAM_MAX_MP,
  cd as REGULAR_PARAM_MDEF,
  Xo as RESUME_BGM,
  Ko as RETURN_TO_TITLE_SCREEN,
  qo as ROTATE_PICTURE,
  jo as SAVE_BGM,
  rs as SCHEMA_DATA_WEAPON,
  K as SCRIPT_EVAL,
  ma as SCRIPT_EVAL_BODY,
  zo as SCROLL_MAP,
  Qo as SELECT_ITEM,
  h as SET_EVENT_LOCATION,
  Zo as SET_MOVEMENT_ROUTE,
  Jo as SET_VEHICLE_LOCATION,
  $o as SET_WEATHER_EFFECT,
  an as SHAKE_SCREEN,
  sa as SHOP_PROCESSING,
  oa as SHOP_PROCESSING_BODY,
  en as SHOW_ANIMATION,
  tn as SHOW_BALLOON_ICON,
  rn as SHOW_BATTLE_ANIMATION,
  mn as SHOW_CHOICES,
  sn as SHOW_CHOICES_ITEM,
  on as SHOW_MESSAGE,
  nn as SHOW_MESSAGE_BODY,
  dn as SHOW_PICTURE,
  ra as SHOW_SCROLLING_TEXT,
  ta as SHOW_SCROLLING_TEXT_BODY,
  cn as SKIP,
  ds as SPECIAL_EFFECT_ESCAPE,
  pd as SPECIAL_PARAM_EXR,
  ld as SPECIAL_PARAM_FDR,
  Ed as SPECIAL_PARAM_GRD,
  Ad as SPECIAL_PARAM_MCR,
  Cd as SPECIAL_PARAM_MDR,
  Id as SPECIAL_PARAM_PDR,
  Td as SPECIAL_PARAM_PHA,
  _d as SPECIAL_PARAM_REC,
  Sd as SPECIAL_PARAM_TCR,
  kd as SPECIAL_PARAM_TGR,
  As as SRC_DATA_ACTOR,
  Rs as SRC_DATA_ARMOR,
  ys as SRC_DATA_CLASS,
  Ms as SRC_DATA_COMMON_EVNET,
  Is as SRC_DATA_ENEMY,
  Ss as SRC_DATA_ITEMS,
  Cs as SRC_DATA_MAP,
  _s as SRC_DATA_SKILL,
  Ts as SRC_DATA_STATE,
  Ps as SRC_DATA_TROOP,
  ks as SRC_DATA_WEAPON,
  pn as STOP_SE,
  ln as TINT_PICTURE,
  En as TINT_SCREEN,
  Rd as TRAIT_ACTION_PLUS,
  yd as TRAIT_ATTACK_ELEMENT,
  Md as TRAIT_ATTACK_SKILL,
  Pd as TRAIT_ATTACK_SPEED,
  Ld as TRAIT_ATTACK_STATE,
  Nd as TRAIT_ATTACK_TIMES,
  bd as TRAIT_COLLAPSE_TYPE,
  gd as TRAIT_DEBUFF_RATE,
  ud as TRAIT_ELEMENT_RATE,
  Od as TRAIT_EQUIP_ARMOR_TYPE,
  Dd as TRAIT_EQUIP_LOCK,
  vd as TRAIT_EQUIP_SEAL,
  Fd as TRAIT_EQUIP_WEAPON_TYPE,
  Vd as TRAIT_PARAM,
  fd as TRAIT_PARTY_ABILITY,
  Gd as TRAIT_SKILL_ADD,
  hd as TRAIT_SKILL_SEAL,
  Bd as TRAIT_SKILL_TYPE_ADD,
  Hd as TRAIT_SKILL_TYPE_SEAL,
  xd as TRAIT_SLOT_TYPE,
  Yd as TRAIT_SPARAM,
  Ud as TRAIT_SPECIAL_FLAG,
  wd as TRAIT_STATE_RATE,
  Wd as TRAIT_STATE_RESIST,
  Xd as TRAIT_XPARAM,
  An as TRANSFER_PLAYER,
  Kr as TYPE_ARMOR,
  Wr as TYPE_ITEM,
  Xr as TYPE_WEAPON,
  Gm as VARIABLE_SRC_LAST,
  Qm as VEHICLE_AIRSHIP,
  jm as VEHICLE_BOAT,
  zm as VEHICLE_SHIP,
  Cn as WAIT,
  ve as assetDirectoryName,
  Kd as buildNoteFromNormalized,
  rr as cloneChoices,
  Jm as cloneEventCommand,
  Da as cloneParameters,
  qd as collapsOptionsToArray,
  jd as collectMapEvents,
  ac as convertCommentArrayToObject,
  Sp as convertTermsMessageMZtoMV,
  zd as correctTroopEvents,
  Qd as createActorControlChars,
  Zd as createCommandContext,
  Jd as createControlCharFormat,
  $d as createEventContext,
  ec as createMenuCommandState,
  ai as createNoteEntity,
  ei as createSystemVariableControlChars,
  ti as defineGameDataSources,
  ri as defineSystemItems,
  mi as defineTraitCollapseType,
  si as defineTraitExtraParam,
  oi as defineTraitItems,
  ni as defineTraitPartyAbility,
  di as defineTraitRegularParam,
  ii as defineTraitSpecialFlag,
  ci as defineTraitSpecialParam,
  pi as extraParamName,
  li as extraParamsToArray,
  fs as extractFileName,
  is as formatItemEffectText,
  ts as formatTraitText,
  nt as fromArrayChangeItems,
  Et as fromArrayChangeWeapons,
  at as fromArrayCommonEvent,
  et as fromArrayControlSwitches,
  Ke as fromArrayEnemyTransform,
  st as fromArrayInputNumber,
  sr as fromArrayPlayMovie,
  nr as fromArrayPluginCommandMZ,
  zt as fromArrayScrollingTextBody,
  qt as fromArrayScrollingTextHeader,
  Pt as fromArraySelectItem,
  ar as fromArraySetupChoice,
  Jt as fromArraySetupChoiceItem,
  kp as fromArrayShowMessageHeader,
  Ei as fromStringArray,
  Ai as gatherEventCommandContext,
  tc as getArmorCategoryEnabled,
  Ci as getArmorTypes,
  as as getControlChars,
  Ii as getElementTypes,
  rc as getEquipCommandEnabled,
  Ti as getEquipTypes,
  mc as getFormationCommandEnabled,
  sc as getItemCategoryEnabled,
  oc as getItemCommandEnabled,
  _i as getItemIdFromItemCommand,
  nc as getKeyItemCategoryEnabled,
  Si as getNoteValue,
  gs as getParamNames,
  dc as getSaveCommandEnabled,
  ic as getSkillCommandEnabled,
  ki as getSkillTypes,
  cc as getStatusCommandEnabled,
  Ri as getSwitches,
  yi as getVariableNames,
  pc as getWeaponCategoryEnabled,
  Mi as getWeaponTypes,
  $m as isCloneableCommand,
  Zm as isCommandAnyAudio,
  Be as isCommandBattleProcessingVariable,
  mm as isCommandOperandVariables,
  Pi as isScript,
  Li as isUsingVariableItemCommand,
  ot as isUsingVaribleCommandChangingItems,
  Ls as labelsRegistry,
  lc as makeActorData,
  Ec as makeActorDataFromTestSoruce,
  Ac as makeArmorData,
  Cc as makeArmorDataFromTestSoruce,
  Ic as makeAudioCommand,
  Tc as makeBattleEventPage,
  Rp as makeBooleanOptions,
  _c as makeClassData,
  Sc as makeClassDataEx,
  kc as makeClassDataFromTestSoruce,
  ze as makeCommandAddEachEnemyState,
  qe as makeCommandAddEnemyState,
  dr as makeCommandAddPartyMember,
  Ee as makeCommandAddStateByVariable,
  pe as makeCommandAddStateEachActor,
  ie as makeCommandAddStateTargetActor,
  Rc as makeCommandAudioAny,
  He as makeCommandBattleProcessingDirect,
  Ye as makeCommandBattleProcessingEncount,
  xe as makeCommandBattleProcessingVariable,
  yc as makeCommandChangeActorImages,
  Mc as makeCommandChangeActorName,
  Pc as makeCommandChangeActorNickName,
  Lc as makeCommandChangeActorProfile,
  Nc as makeCommandChangeBattleBGM,
  Ve as makeCommandChangeBattleBackground,
  bc as makeCommandChangeClass,
  gc as makeCommandChangeDefeatME,
  z as makeCommandChangeEncounter,
  uc as makeCommandChangeEquip,
  dt as makeCommandChangeItems,
  Lt as makeCommandChangeParallax,
  ut as makeCommandChangeTileset,
  Xm as makeCommandChangeVehicleBGM,
  Wm as makeCommandChangeVehicleImage,
  Oc as makeCommandChangeVictoryME,
  At as makeCommandChangeWeapons,
  Dc as makeCommandCommentBody,
  vc as makeCommandCommentHeader,
  $e as makeCommandCommonEvent,
  tt as makeCommandControlSwitches,
  Ue as makeCommandControlTimer,
  ke as makeCommandDecreaseActorParam,
  We as makeCommandDisableEncounter,
  Xt as makeCommandDisableFormationAccess,
  Yt as makeCommandDisableMenuAccess,
  wt as makeCommandDisableSaveAccess,
  we as makeCommandEnableEncounter,
  Kt as makeCommandEnableFormationAccess,
  Ut as makeCommandEnableMenuAccess,
  Wt as makeCommandEnableSaveAccess,
  Je as makeCommandEnemyRecoverAll,
  Ze as makeCommandEnemyRecoverAllEach,
  Xe as makeCommandEnemyTransform,
  Tr as makeCommandFadeInScreen,
  ge as makeCommandFadeOutBGM,
  De as makeCommandFadeOutBGS,
  _r as makeCommandFadeOutScreen,
  Sr as makeCommandFlashScreen,
  me as makeCommandForgetSkill,
  de as makeCommandForgetSkillByVariable,
  oe as makeCommandForgetSkillEachActor,
  Re as makeCommandGainActorHP,
  Le as makeCommandGainActorMP,
  Me as makeCommandGainActorTP,
  St as makeCommandGainArmor,
  kt as makeCommandGainArmorByVariable,
  Xa as makeCommandGainExpByVariable,
  wa as makeCommandGainExpDirect,
  za as makeCommandGainExpTargetAndOperandVariable,
  qa as makeCommandGainExpTargetVariable,
  cr as makeCommandGainGold,
  lr as makeCommandGainGoldByVariable,
  it as makeCommandGainItem,
  ct as makeCommandGainItemV,
  Ct as makeCommandGainWeapon,
  It as makeCommandGainWeaponV,
  vt as makeCommandGetEventIdXY,
  Ft as makeCommandGetEventIdXYDirect,
  wm as makeCommandGetOnOffVehicle,
  Vt as makeCommandGetRegionId,
  ft as makeCommandGetRegionIdDirect,
  Ot as makeCommandGetTerrainTag,
  Dt as makeCommandGetTerrainTagDirect,
  Gt as makeCommandGetTileId,
  ht as makeCommandGetTileIdDirect,
  gt as makeCommandHideMapName,
  Se as makeCommandIncreaseActorParam,
  rt as makeCommandInputNumber,
  re as makeCommandLearnSkill,
  ne as makeCommandLearnSkillByVariable,
  se as makeCommandLearnSkillEachActor,
  Ja as makeCommandLevelDownActor,
  ae as makeCommandLevelDownActorByVariable,
  te as makeCommandLevelDownEachActors,
  Za as makeCommandLevelUpActor,
  $a as makeCommandLevelUpActorByVariable,
  ee as makeCommandLevelUpEachActors,
  ye as makeCommandLoseActorHP,
  Ne as makeCommandLoseActorMP,
  Pe as makeCommandLoseActorTP,
  Rt as makeCommandLoseArmor,
  yt as makeCommandLoseArmorByVariable,
  Ka as makeCommandLoseExpByVariable,
  Wa as makeCommandLoseExpDirect,
  Qa as makeCommandLoseExpTargetAndOperandVariable,
  ja as makeCommandLoseExpTargetVariable,
  pr as makeCommandLoseGold,
  Er as makeCommandLoseGoldByVariable,
  pt as makeCommandLoseItem,
  lt as makeCommandLoseItemV,
  Tt as makeCommandLoseWeapon,
  _t as makeCommandLoseWeaponV,
  Cr as makeCommandMovePicture,
  Ce as makeCommandNameInputProcessing,
  Fc as makeCommandPlayBGM,
  Vc as makeCommandPlayBGS,
  fc as makeCommandPlayME,
  mr as makeCommandPlayMovie,
  Gc as makeCommandPlaySE,
  or as makeCommandPluginCommandMZ,
  Ie as makeCommandRecoverAllEachActors,
  Te as makeCommandRecoverAllTargetActor,
  _e as makeCommandRecoverAllTargetActorByVariable,
  ce as makeCommandRemoveActorTargetState,
  Qe as makeCommandRemoveEachEnemyState,
  je as makeCommandRemoveEnemyState,
  ir as makeCommandRemovePartyMember,
  Ae as makeCommandRemoveStateByVariable,
  le as makeCommandRemoveStateEachActors,
  Oe as makeCommandResumeBGM,
  ue as makeCommandSaveBGM,
  yr as makeCommandScriptArray,
  Pa as makeCommandScriptBody,
  Ma as makeCommandScriptHeader,
  Nt as makeCommandScrollMap,
  Qt as makeCommandScrollingTextBody,
  jt as makeCommandScrollingTextHeader,
  Mt as makeCommandSelectItem,
  Bt as makeCommandSetEventLocationDirect,
  xt as makeCommandSetEventLocationExchange,
  Ht as makeCommandSetEventLocationVariable,
  Km as makeCommandSetVehicleLocation,
  qm as makeCommandSetVehicleLocationFromVariables,
  Ir as makeCommandSetWeatherEffect,
  tr as makeCommandSetupChoice,
  kr as makeCommandShakeScreen,
  Lr as makeCommandShopProcessing,
  be as makeCommandShowAnimation,
  Fe as makeCommandShowBalloonIcon,
  Zt as makeCommandShowChoiceItem,
  bt as makeCommandShowMapName,
  yp as makeCommandShowMessage,
  Mp as makeCommandShowMessageBody,
  Ar as makeCommandShowPicture,
  Rr as makeCommandTintScreen,
  Hm as makeCommandVariableDataLastActorId,
  hr as makeCommandVariableFromActorAgi,
  Fr as makeCommandVariableFromActorAtk,
  br as makeCommandVariableFromActorCurrentExp,
  gr as makeCommandVariableFromActorCurrentHp,
  Nr as makeCommandVariableFromActorCurrentLevel,
  ur as makeCommandVariableFromActorCurrentMp,
  Or as makeCommandVariableFromActorCurrentTp,
  Vr as makeCommandVariableFromActorDef,
  Br as makeCommandVariableFromActorLuk,
  fr as makeCommandVariableFromActorMat,
  Dr as makeCommandVariableFromActorMaxHp,
  vr as makeCommandVariableFromActorMaxMp,
  Gr as makeCommandVariableFromActorMdf,
  dm as makeCommandVariableFromArmor,
  im as makeCommandVariableFromConstant,
  tm as makeCommandVariableFromEnemyAgi,
  Jr as makeCommandVariableFromEnemyAtk,
  qr as makeCommandVariableFromEnemyCurrentHp,
  jr as makeCommandVariableFromEnemyCurrentMp,
  zr as makeCommandVariableFromEnemyCurrentTp,
  $r as makeCommandVariableFromEnemyDef,
  rm as makeCommandVariableFromEnemyLuk,
  am as makeCommandVariableFromEnemyMat,
  Qr as makeCommandVariableFromEnemyMaxHp,
  Zr as makeCommandVariableFromEnemyMaxMp,
  em as makeCommandVariableFromEnemyMdf,
  om as makeCommandVariableFromItemData,
  xm as makeCommandVariableFromLastEnemyIndex,
  Ym as makeCommandVariableFromLastTargetActorId,
  Um as makeCommandVariableFromLastTargetEnemyIndex,
  Bm as makeCommandVariableFromLastUsedItemId,
  hm as makeCommandVariableFromLastUsedSkillId,
  lm as makeCommandVariableFromMapCharactorDirection,
  Em as makeCommandVariableFromMapCharactorScreenX,
  Am as makeCommandVariableFromMapCharactorScreenY,
  cm as makeCommandVariableFromMapCharactorX,
  pm as makeCommandVariableFromMapCharactorY,
  km as makeCommandVariableFromMapId,
  Tm as makeCommandVariableFromMapPlayerDirection,
  _m as makeCommandVariableFromMapPlayerScreenX,
  Sm as makeCommandVariableFromMapPlayerScreenY,
  Cm as makeCommandVariableFromMapPlayerX,
  Im as makeCommandVariableFromMapPlayerY,
  ym as makeCommandVariableFromPartyGold,
  Rm as makeCommandVariableFromPartySize,
  Mm as makeCommandVariableFromPartySteps,
  Pm as makeCommandVariableFromRandom,
  Lm as makeCommandVariableFromScript,
  Fm as makeCommandVariableFromSystemBattleCount,
  fm as makeCommandVariableFromSystemEscapeCount,
  gm as makeCommandVariableFromSystemGold,
  Nm as makeCommandVariableFromSystemMapId,
  bm as makeCommandVariableFromSystemPartyMemberCount,
  Om as makeCommandVariableFromSystemPlayTime,
  vm as makeCommandVariableFromSystemSaveCount,
  um as makeCommandVariableFromSystemSteps,
  Dm as makeCommandVariableFromSystemTimer,
  Vm as makeCommandVariableFromSystemWinCount,
  sm as makeCommandVariableFromVariable,
  nm as makeCommandVariableFromWeapon,
  hc as makeCommentArray,
  Bc as makeCommentCommandArray,
  Hc as makeCommonEventData,
  xc as makeDamage,
  bs as makeDataNames,
  Yc as makeDropItem,
  Pp as makeEditorSetting,
  Uc as makeEnemyAction,
  wc as makeEnemyData,
  Wc as makeEnemyDataFromTestSoruce,
  Xc as makeEventPageCondition,
  Ns as makeGameInitial,
  Lp as makeItemCategories,
  Np as makeItemCategoriesFromArray,
  Kc as makeItemData,
  qc as makeItemDataFromTestSoruce,
  jc as makeMapData,
  zc as makeMapDataFromSingleEvent,
  Qc as makeMapEvent,
  Zc as makeMapEventIamge,
  Jc as makeMapEventPage,
  $c as makeMapFileInfo,
  ap as makeMapInfoData,
  ep as makeMapName,
  bp as makeMenuCommandsEnabled,
  gp as makeMenuCommandsEnabledFromArray,
  tp as makeParamArray,
  up as makeParamNamesArray,
  Op as makeParamNamesFromArray,
  rp as makeSkillData,
  mp as makeSkillDataFromTestSoruce,
  Dp as makeSoundsArray,
  vp as makeSoundsObject,
  sp as makeStateData,
  op as makeStateDataFromTestSoruce,
  Fp as makeSystemAdvanced,
  Vp as makeSystemData,
  np as makeSystemDataFromMV,
  dp as makeSystemDataMV,
  fp as makeTermsBasic,
  Gp as makeTermsBasicFromArray,
  hp as makeTermsCommandArray,
  Bp as makeTermsCommandArrayWithNulls,
  Hp as makeTermsCommandFromArray,
  xp as makeTermsMessages,
  ip as makeTestAudioCommands,
  cp as makeTestSystemData,
  Yp as makeTitleCommandWindow,
  pp as makeTroopData,
  lp as makeTroopEventConditions,
  Ep as makeTroopMember,
  Up as makeVehicleData,
  Ap as makeWeaponData,
  Cp as makeWeaponDataFromTestSoruce,
  Ip as normalizeDataActor,
  Ni as normalizeNote,
  Tp as paramArrayToObject,
  bi as partyAbilityToArray,
  gi as processCommonEvents,
  ui as processEventPages,
  Oi as processMapEvents,
  Di as processTroopEvents,
  vi as readNote,
  Fi as readNoteEx,
  Vi as readNoteEx2,
  fi as readNoteObject,
  Gi as regularParamName,
  hi as regularParamsToArray,
  Bi as replaceNote,
  Hi as replaceNoteWithHandlers,
  es as repleaceMapEventCommands,
  xi as resolveItemEffectLabels,
  Yi as resolveTraitLabels,
  Ui as setNoteValue,
  wi as specialFlagToArray,
  Wi as specialParamName,
  Xi as specialParamsToArray,
  Fs as textAndDesc,
  Sa as toArrayCommonEvent,
  ka as toArrayControlSwitches,
  mt as toArrayInputNumber,
  ya as toArrayScrollingTextBody,
  Ra as toArrayScrollingTextHeader,
  er as toArraySetupChoice,
  $t as toArraySetupChoiceItem,
  wp as toArrayShowMessageHeader
};
