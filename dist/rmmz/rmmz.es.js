import { m as A, r as S, G as R, ai as J, y as U, p as w, u as W, I as X, B as G, g as $, R as aa, V as ea, q as g, N as b, b as O, aa as E, aC as h, aS as ta, aR as ra, az as ma, ay as K, aH as sa, aI as oa, X as t, am as na, an as da, ao as ia, aq as ca, d as pa, M as la, f as Aa } from "../shared/eventCommandCodes.es.js";
import { A as Hs, C as xs, a as Ys, c as Us, e as ws, h as Ws, i as Xs, j as Ks, k as qs, l as js, n as zs, o as Qs, s as Zs, t as Js, v as $s, w as ao, x as eo, z as to, D as ro, E as mo, F as so, H as oo, J as no, K as io, L as co, O as po, P as lo, Q as Ao, S as Eo, T as Co, U as Io, W as To, Y as _o, Z as ko, _ as So, $ as Ro, a0 as yo, a1 as Po, a2 as Mo, a3 as Lo, a4 as No, a5 as go, a6 as bo, a7 as uo, a8 as Oo, a9 as Do, ab as Fo, ac as vo, ad as Vo, ae as fo, af as Go, ag as ho, ah as Bo, aj as Ho, ak as xo, al as Yo, ap as Uo, ar as wo, as as Wo, at as Xo, au as Ko, av as qo, aw as jo, ax as zo, aA as Qo, aB as Zo, aD as Jo, aE as $o, aF as an, aG as en, aJ as tn, aK as rn, aL as mn, aM as sn, aN as on, aO as nn, aP as dn, aQ as cn, aT as pn, aU as ln, aV as An, aW as En, aX as Cn, aY as In } from "../shared/eventCommandCodes.es.js";
import { b6 as y, b8 as P, b9 as I, b7 as M } from "../shared/namedItems.es.js";
import { C as _n, a as kn, b as Sn, c as Rn, E as yn, d as Pn, e as Mn, f as Ln, g as Nn, h as gn, i as bn, j as un, k as On, l as Dn, m as Fn, n as vn, o as Vn, p as fn, q as Gn, r as hn, s as Bn, t as Hn, u as xn, v as Yn, w as Un, x as wn, y as Wn, F as Xn, z as Kn, A as qn, B as jn, P as zn, D as Qn, G as Zn, H as Jn, I as $n, J as ad, R as ed, K as td, L as rd, M as md, N as sd, O as od, Q as nd, S as dd, T as id, U as cd, V as pd, W as ld, X as Ad, Y as Ed, Z as Cd, _ as Id, $ as Td, a0 as _d, a1 as kd, a2 as Sd, a3 as Rd, a4 as yd, a5 as Pd, a6 as Md, a7 as Ld, a8 as Nd, a9 as gd, aa as bd, ab as ud, ac as Od, ad as Dd, ae as Fd, af as vd, ag as Vd, ah as fd, ai as Gd, aj as hd, ak as Bd, al as Hd, am as xd, an as Yd, ao as Ud, ap as wd, aq as Wd, ar as Xd, as as Kd, at as qd, au as jd, av as zd, aw as Qd, ax as Zd, ay as Jd, az as $d, aA as ai, aB as ei, aC as ti, aD as ri, aE as mi, aF as si, aG as oi, aH as ni, aI as di, aJ as ii, aK as ci, aL as pi, aM as li, aN as Ai, aO as Ei, aP as Ci, aQ as Ii, aR as Ti, aS as _i, aT as ki, aU as Si, aV as Ri, aW as yi, aX as Pi, aY as Mi, aZ as Li, a_ as Ni, a$ as gi, b0 as bi, b1 as ui, b2 as Oi, b3 as Di, b4 as Fi, b5 as vi } from "../shared/namedItems.es.js";
import { g as Ea, f as Ca } from "../shared/applyFormat.es.js";
import { O as fi, a as Gi, b as hi, c as Bi, d as Hi, e as xi } from "../shared/applyFormat.es.js";
import { c as Ui, m as wi, a as Wi, b as Xi, d as Ki, e as qi, f as ji, g as zi, h as Qi, i as Zi, j as Ji, k as $i, l as ac, n as ec, o as tc, p as rc, q as mc, r as sc, s as oc, t as nc, u as dc, v as ic, w as cc, x as pc, y as lc, z as Ac, A as Ec, B as Cc, C as Ic, D as Tc, E as _c, F as kc, G as Sc, H as Rc, I as yc, J as Pc, K as Mc, L as Lc, M as Nc, N as gc, O as bc, P as uc, Q as Oc, R as Dc, S as Fc, T as vc, U as Vc, V as fc, W as Gc, X as hc, Y as Bc, Z as Hc, _ as xc, $ as Yc, a0 as Uc, a1 as wc, a2 as Wc, a3 as Xc } from "../shared/makeTestData.es.js";
import { c as qc, a as jc, g as zc, b as Qc, d as Zc, e as Jc, f as $c, h as ap, i as ep, j as tp, k as rp, l as mp, m as sp, n as op, o as np, p as dp, q as ip, r as cp, s as pp, t as lp, u as Ap, v as Ep, w as Cp, x as Ip, y as Tp, z as _p, A as kp, B as Sp, C as Rp, D as yp, E as Pp, F as Mp, G as Lp, H as Np, I as gp } from "../shared/makeSystemEx.es.js";
import { f as up, m as Op, a as Dp, t as Fp } from "../shared/make.es.js";
import { m as Ia } from "../shared/makeAudio.es.js";
const Wa = (a, e = 0) => ({ code: A, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), Xa = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), Ka = (a, e = 0) => ({ code: A, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), qa = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), ja = (a, e = 0) => ({ code: A, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), za = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), Qa = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Za = (a, e = 0) => ({ code: A, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), Ja = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), $a = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), ae = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), ee = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), te = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), re = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), me = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), se = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), oe = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), ne = (a, e = 0) => ({ code: R, indent: e, parameters: [0, 0, 1, a.skillId] }), de = (a, e = 0) => ({ code: R, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), ie = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), ce = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), pe = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), le = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), Ae = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Ee = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Ce = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), Ie = (a, e = 0) => ({
  code: J,
  indent: e,
  parameters: [a.actorId, a.maxLength]
}), Te = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), _e = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), ke = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.variableId]
}), Se = (a, e = 0) => ({ code: U, indent: e, parameters: q(a, 0) }), Re = (a, e = 0) => ({
  code: U,
  indent: e,
  parameters: q(a, 1)
}), q = (a, e) => [a.actorId, a.paramId, e, a.value], k = { direct: 0, variable: 1 }, ye = (a, e = 0) => ({ code: w, indent: e, parameters: j(0, a) }), Pe = (a, e = 0) => ({
  code: w,
  indent: e,
  parameters: j(1, a)
}), Me = (a, e = 0) => ({ code: X, indent: e, parameters: D(0, a) }), Le = (a, e = 0) => ({ code: X, indent: e, parameters: D(1, a) }), Ne = (a, e = 0) => ({ code: W, indent: e, parameters: D(0, a) }), ge = (a, e = 0) => ({
  code: W,
  indent: e,
  parameters: D(1, a)
}), D = (a, e) => [e.targetType === "variable" ? k.variable : k.direct, e.targetType === "each" ? 0 : e.target, a, k[e.operand.mode], e.operand.value], j = (a, e) => [e.targetType === "variable" ? k.variable : k.direct, e.targetType === "each" ? 0 : e.target, a, k[e.operand.mode], e.operand.value, e.allowDeath], be = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), ue = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), Oe = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), De = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Fe = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Ta = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, ve = (a) => Ta[a], Ve = (a, e = 0) => ({ code: 213, indent: e, parameters: [a.characterId, a.balloonId, a.waiting] }), fe = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), Ge = 0, he = 1, Be = 2, He = (a) => a.parameters[0] === 1, xe = ({ troopId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({
  code: G,
  indent: m,
  parameters: [0, a, e, r]
}), Ye = ({ variableId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({ code: G, indent: m, parameters: [1, a, e, r] }), Ue = ({ canEscape: a = !1, canLose: e = !1 }, r = 0) => ({
  code: G,
  indent: r,
  parameters: [2, 0, a, e]
}), _a = { plus: 0, minus: 1 }, we = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [_a[a ?? "plus"] ?? 0, e ?? 0] }), z = (a, e = 0) => ({
  code: $,
  indent: e,
  parameters: [a]
}), We = (a = 0) => z(0, a), Xe = (a = 0) => z(1, a);
function Ke(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const qe = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), je = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), ze = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), Qe = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), Ze = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Je = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), $e = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), at = (a, e = 0) => ({ code: aa, indent: e, parameters: ka(a ?? {}) }), et = (a) => ({ eventId: a[0] }), ka = (a) => [a.eventId ?? 0], tt = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), Sa = (a) => [a.min, a.max, a.value], rt = (a, e = 0) => ({ code: ea, indent: e, parameters: Sa(a) }), mt = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), st = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], ot = (a) => ({ variableId: a[0], maxDigits: a[1] }), nt = (a) => a.parameters[3] === I, dt = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), it = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), ct = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, y, P, a.value] }), pt = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.itemId, y, I, a.variableId]
}), lt = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, M, P, a.value] }), At = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.itemId, M, I, a.variableId]
}), Et = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Ct = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), It = (a, e = 0) => ({ code: b, indent: e, parameters: [a.weaponId, y, P, a.value, !1] }), Tt = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.weaponId, y, I, a.variableId, !1]
}), _t = (a, e = 0) => ({ code: b, indent: e, parameters: [a.weaponId, M, P, a.value, !1] }), kt = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.weaponId, M, I, a.variableId, !1]
}), St = (a, e = 0) => ({ code: O, indent: e, parameters: [a.armorId, y, P, a.value, !1] }), Rt = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.armorId, y, I, a.variableId, !1]
}), yt = (a, e = 0) => ({ code: O, indent: e, parameters: [a.armorId, M, P, a.value, !1] }), Pt = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.armorId, M, I, a.variableId, !1]
}), Mt = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Lt = (a) => ({ variableId: a[0], itemType: a[1] }), Nt = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), gt = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), bt = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), ut = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), Ot = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Dt = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, 0, 1, a.x, a.y]
}), Ft = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, 0, 0, a.x, a.y] }), vt = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, 1, 1, a.x, a.y]
}), Vt = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), ft = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, 6, 1, a.x, a.y] }), Gt = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, 6, 0, a.x, a.y]
}), ht = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, Q[a.layer] ?? 2, 1, a.x, a.y] }), Bt = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, Q[a.layer] ?? 2, 0, a.x, a.y]
}), Q = { 1: 2, 2: 3, 3: 4, 4: 5 }, Ht = (a, e = 0) => ({ code: h, indent: e, parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction] }), xt = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), Yt = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction]
}), Ut = (a = 0) => ({ code: 135, parameters: [1], indent: a }), wt = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Wt = (a = 0) => ({
  code: 134,
  parameters: [1],
  indent: a
}), Xt = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Kt = (a = 0) => ({ code: 137, parameters: [1], indent: a }), qt = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), Ra = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], jt = (a) => ({ speed: a[0], skip: a[1] }), zt = (a = {}, e = 0) => ({ code: ra, indent: e, parameters: Ra(a) }), ya = (a = "") => [a], Qt = (a) => ({ content: a[0] }), Zt = (a = "", e = 0) => ({
  code: ta,
  indent: e ?? 0,
  parameters: ya(a)
}), Jt = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), $t = (a) => ({ index: a[0], name: a[1] }), ar = (a) => [a.index ?? 0, a.name ?? ""], er = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), tr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], rr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), mr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), sr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), or = (a) => ({
  filename: a[0]
}), nr = ({ args: a = {}, commandName: e, commandTitle: r = "", pluginName: m }, n = 0) => ({ code: 357, indent: n, parameters: [m, e, r, { ...a }] }), dr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), ir = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), cr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), pr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), lr = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Ar = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Er = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Cr = ({ pictureId: a = 0, origin: e = 0, name: r = "", x: m = 0, y: n = 0, scaleX: l = 100, scaleY: T = 100, opacity: v = 255, blendMode: V = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, r, e, m, n, l, T, v, V]
}), Ir = ({ pictureId: a, origin: e, x: r, y: m, scaleX: n, scaleY: l, opacity: T, blendMode: v, wait: V = !1, easingType: Z = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, r, m, n, l, T, v, V, Z]
}), Tr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), _r = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), kr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Sr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Rr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), yr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Pa = (a, e = 0) => ({ code: K, indent: e, parameters: [a] }), Ma = (a, e = 0) => ({
  code: ma,
  indent: e,
  parameters: [a]
}), Pr = (a, e = 0) => a.map(((r, m) => m === 0 ? Pa(r, e) : Ma(r, e))), Mr = 1, Lr = 0, u = { item: 0, weapon: 1, armors: 2 }, Nr = ({ goods: a, buyOnly: e = !1 }, r = 0) => a.map(((m, n) => {
  const l = ((T) => T.customPrice !== void 0 && T.customPrice !== 0)(m) ? 1 : 0;
  return n === 0 ? { code: sa, indent: r, parameters: [u[m.itemType] ?? u.item, m.id, l, m.customPrice ?? 0, e] } : {
    code: oa,
    indent: r,
    parameters: [u[m.itemType] ?? u.item, m.id, l, m.customPrice ?? 0]
  };
})), gr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 0) }), br = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 1)
}), ur = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 2) }), Or = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 3) }), Dr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 12) }), Fr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 4)
}), vr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 5) }), Vr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 6) }), fr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 7)
}), Gr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 8) }), hr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 9) }), Br = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 10)
}), Hr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 11)
}), o = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], xr = 0, Yr = 1, Ur = 2, wr = 3, Wr = 4, Xr = 0, Kr = 1, qr = 2, jr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 0)
}), zr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 1) }), Qr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 10) }), Zr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 2) }), Jr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 3)
}), $r = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 4) }), am = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 5) }), em = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 6)
}), tm = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 7) }), rm = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 8) }), mm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 9)
}), d = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], sm = (a) => a.parameters[3] === 1, om = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: La(a)
}), La = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], nm = (a, e = 0) => ({ code: t, indent: e, parameters: Na(a) }), dm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ga(a)
}), im = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ba(a)
}), Na = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], ga = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], ba = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], cm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ua(a)
}), ua = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], i = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, pm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, i.X)
}), lm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.Y) }), Am = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.DIRECTION) }), Em = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, i.SCREEN_X)
}), Cm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.SCREEN_Y) }), Im = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, i.X) }), Tm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.Y)
}), _m = (a, e = 0) => ({ code: t, indent: e, parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.DIRECTION) }), km = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.SCREEN_X)
}), Sm = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, i.SCREEN_Y) }), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], Rm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: F(a, 0)
}), ym = (a, e = 0) => ({ code: t, indent: e, parameters: F(a, 1) }), Pm = (a, e = 0) => ({ code: t, indent: e, parameters: F(a, 2) }), Mm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: F(a, 3)
}), F = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Lm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Oa(a)
}), Oa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], Nm = (a, e = 0) => ({ code: K, indent: e, parameters: [a] }), gm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 0)
}), bm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 1) }), um = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 2) }), Om = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 3) }), Dm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 4)
}), Fm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 5) }), vm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 6) }), Vm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 7)
}), fm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 8) }), Gm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 9)
}), p = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], hm = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Bm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 0) }), Hm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 1) }), xm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 2) }), Ym = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: L(a, 3)
}), Um = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 4) }), wm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: L(a, 5)
}), L = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], Wm = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Xm = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Km = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, Ia(a.bgm)] }), qm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), jm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), zm = 0, Qm = 1, Zm = 2, Jm = (a) => a.code === na || a.code === da || a.code === ia || a.code === ca || a.code === pa || a.code === la || a.code === Aa, Da = (a) => [...a], $m = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Da(a.parameters)
}), Fa = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", as = (a) => a.parameters.every(Fa), es = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
}))), ts = (a, e) => a.map(((r) => r ? { ...r, pages: va(r, e) } : null)), va = (a, e) => a.pages.map(((r) => ({ ...r, list: e(r.list) }))), Va = {
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
} }, rs = (a, e, r) => {
  const m = Ea(Ga);
  return Ca(e, r, m, a.pattern, ((n) => n.dataId));
}, ha = { title: "ダメージ", options: {} }, ms = {
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
}, ss = { title: "武器", options: { weaponTypeId: "武器タイプID" } }, os = 0, ns = 1, ds = 2, x = "{name} {value1}%", f = "{value1}% + {value2}", Y = "{name} {value1}ターン", N = "{name}", Ba = { title: "使用効果", options: {
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
} }, is = 0, cs = (a, e, r) => {
  const m = r.find(((l) => l.id === e.dataId)), n = m ? m.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", n);
}, ps = { title: "アイテム", options: { consumable: "消耗品" } }, ls = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, As = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Es = "data", Cs = "actor", Is = "map", Ts = "enemy", _s = "state", ks = "skill", Ss = "item", Rs = "weapon", ys = "armor", Ps = "class", Ms = "common_event", Ls = "troop", Ha = {
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
}, Ns = () => ({ rpg: { damage: ha, data: Va, traits: fa, itemEffect: Ba }, global: Ha }), gs = (a = {}) => ({
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
}), C = (a) => a ? [...a] : [], us = (a) => a.terms.params.map(((e, r) => ({ name: e, id: r }))), Os = { title: "オプション", options: {
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
} }, Ds = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Fs = {
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
} }, Vs = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), fs = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, Gs = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Hs as ABORT_BATTLE,
  Ge as BATTLE_DIRECT,
  Be as BATTLE_ENCOUNT,
  G as BATTLE_PROCESSING,
  he as BATTLE_VARIABLE,
  xs as CHANGE_ACTOR_IMAGES,
  Ys as CHANGE_ACTOR_STATE,
  O as CHANGE_ARMORS,
  Us as CHANGE_BATTLE_BACKGROUND,
  pa as CHANGE_BATTLE_BGM,
  ws as CHANGE_CLASS,
  Aa as CHANGE_DEFEAT_ME,
  $ as CHANGE_ENCOUNTER,
  Ws as CHANGE_ENEMY_HP,
  Xs as CHANGE_ENEMY_MP,
  Ks as CHANGE_ENEMY_STATE,
  qs as CHANGE_ENEMY_TP,
  js as CHANGE_EQUIP,
  A as CHANGE_EXP,
  zs as CHANGE_FORMATION_ACCESS,
  Qs as CHANGE_GOLD,
  w as CHANGE_HP,
  g as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  Zs as CHANGE_MAP_NAME_DISPLAY,
  Js as CHANGE_MENU_ACCESS,
  W as CHANGE_MP,
  $s as CHANGE_NAME,
  ao as CHANGE_NICKNAME,
  eo as CHANGE_PARALLAX,
  U as CHANGE_PARAMETER,
  to as CHANGE_PARTY_MEMBER,
  ro as CHANGE_PLAYER_FOLLOWERS,
  mo as CHANGE_PROFILE,
  so as CHANGE_SAVE_ACCESS,
  R as CHANGE_SKILL,
  oo as CHANGE_TILESET,
  X as CHANGE_TP,
  no as CHANGE_TRANSPARENCY,
  io as CHANGE_VEHICLE_BGM,
  co as CHANGE_VEHICLE_IMAGE,
  la as CHANGE_VICTORY_ME,
  b as CHANGE_WEAPONS,
  po as CHANGE_WINDOW_COLOR,
  _n as COLLAPS_BOSS,
  kn as COLLAPS_INSTANT,
  Sn as COLLAPS_NONE,
  Rn as COLLAPS_NORMAL,
  lo as COMMENT_BODY,
  Ao as COMMENT_HEAD,
  aa as COMMON_EVENT,
  Eo as CONDITIONAL_BRANCH,
  Co as CONDITIONAL_BRANCH_ELSE,
  Io as CONTROL_SELF_SWITCH,
  ea as CONTROL_SWITCHES,
  To as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Mr as CUSTOM_PRICE,
  ha as DEFAULT_DAMAGE_LABELS,
  Ha as DEFAULT_GLOBAL_LABELS,
  ps as DEFAULT_ITEM_LABELS,
  ls as DEFAULT_SKILL_LABELS,
  Os as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ds as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  As as DEFAULT_USABLE_ITEM_LABELS,
  fs as DIRECTION,
  yn as EFFECT_ADD_BUFF,
  Pn as EFFECT_ADD_DEBUFF,
  Mn as EFFECT_ADD_STATE,
  Ln as EFFECT_COMMON_EVENT,
  Nn as EFFECT_GAIN_TP,
  gn as EFFECT_GROW,
  bn as EFFECT_LEARN_SKILL,
  un as EFFECT_RECOVER_HP,
  On as EFFECT_RECOVER_MP,
  Dn as EFFECT_REMOVE_BUFF,
  Fn as EFFECT_REMOVE_DEBUFF,
  vn as EFFECT_REMOVE_STATE,
  Vn as EFFECT_SPECIAL,
  _o as ENEMY_APPEAR,
  ko as ENEMY_RECOVER_ALL,
  So as ENEMY_TRANSFORM,
  Ro as ERASE_EVENT,
  yo as ERASE_PICTURE,
  Po as EXIT_EVENT_PROCESSING,
  fn as EXTRA_PARAM_CEV,
  Gn as EXTRA_PARAM_CNT,
  hn as EXTRA_PARAM_CRI,
  Bn as EXTRA_PARAM_EVA,
  Hn as EXTRA_PARAM_HIT,
  xn as EXTRA_PARAM_HRG,
  Yn as EXTRA_PARAM_MEV,
  Un as EXTRA_PARAM_MRF,
  wn as EXTRA_PARAM_MRG,
  Wn as EXTRA_PARAM_TRG,
  Mo as FADEIN_SCREEN,
  Lo as FADEOUT_BGM,
  No as FADEOUT_BGS,
  go as FADEOUT_SCREEN,
  Xn as FLAG_ID_AUTO_BATTLE,
  Kn as FLAG_ID_GUARD,
  qn as FLAG_ID_PRESERVE_TP,
  jn as FLAG_ID_SUBSTITUTE,
  bo as FLASH_SCREEN,
  uo as FORCE_ACTION,
  Oo as GAME_OVER,
  Do as GATHER_FOLLOWERS,
  E as GET_LOCATION_INFO,
  Fo as GET_ONOFF_VEHICLE,
  os as HITTYPE_CERTAIN,
  ds as HITTYPE_MAGICAL,
  ns as HITTYPE_PHYSICAL,
  vo as INPUT_NUMBER,
  Vo as LABEL,
  ss as LABELS_DATA_WEAPON,
  Fs as LABELS_SYSTEM_BATTLER_PARAMS,
  vs as LABELS_SYSTEM_GAME_COMMANDS,
  fo as LABEL_JUMP,
  Va as LABEL_SET_DATA,
  Ba as LABEL_SET_ITEM_EFFECT,
  fa as LABEL_SET_TRAIT,
  Go as LOOP,
  ho as LOOP_BREAK,
  i as MAP_CHARACTOR_PARAM,
  Es as MODULE_DATA,
  Bo as MOVE_PICTURE,
  J as NAME_INPUT_PROCESSING,
  Lr as NORMAL_PRICE,
  Ho as NO_OPERATION,
  xo as OPEN_MENU_SCREEN,
  Yo as OPEN_SAVE_SCREEN,
  xr as OPERAND_CONSTANT,
  wr as OPERAND_GAMEDATA,
  Ur as OPERAND_RANDOM,
  Wr as OPERAND_SCRIPT,
  Yr as OPERAND_VARIABLE,
  fi as OPERATION_ADD,
  Gi as OPERATION_DIVIDE,
  hi as OPERATION_MOD,
  Bi as OPERATION_MULTIPLY,
  Hi as OPERATION_SET,
  xi as OPERATION_SUBTRACT,
  zn as PARTY_ABILITY_CANCEL_SURPRISE,
  Qn as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Zn as PARTY_ABILITY_ENCOUNTER_HALF,
  Jn as PARTY_ABILITY_ENCOUNTER_NONE,
  $n as PARTY_ABILITY_GOLD_DOUBLE,
  ad as PARTY_ABILITY_RAISE_PREEMPTIVE,
  na as PLAY_BGM,
  da as PLAY_BGS,
  ia as PLAY_ME,
  Uo as PLAY_MOVIE,
  ca as PLAY_SE,
  wo as PLUGIN_COMMAND_MV,
  Wo as PLUGIN_COMMAND_MZ,
  Xo as RECOVER_ALL,
  ed as REGULAR_PARAM_AGI,
  td as REGULAR_PARAM_ATK,
  rd as REGULAR_PARAM_DEF,
  md as REGULAR_PARAM_LUK,
  sd as REGULAR_PARAM_MATK,
  od as REGULAR_PARAM_MAX_HP,
  nd as REGULAR_PARAM_MAX_MP,
  dd as REGULAR_PARAM_MDEF,
  Ko as RESUME_BGM,
  qo as RETURN_TO_TITLE_SCREEN,
  jo as ROTATE_PICTURE,
  zo as SAVE_BGM,
  ms as SCHEMA_DATA_WEAPON,
  K as SCRIPT_EVAL,
  ma as SCRIPT_EVAL_BODY,
  Qo as SCROLL_MAP,
  Zo as SELECT_ITEM,
  h as SET_EVENT_LOCATION,
  Jo as SET_MOVEMENT_ROUTE,
  $o as SET_VEHICLE_LOCATION,
  an as SET_WEATHER_EFFECT,
  en as SHAKE_SCREEN,
  sa as SHOP_PROCESSING,
  oa as SHOP_PROCESSING_BODY,
  tn as SHOW_ANIMATION,
  rn as SHOW_BALLOON_ICON,
  mn as SHOW_BATTLE_ANIMATION,
  sn as SHOW_CHOICES,
  on as SHOW_CHOICES_ITEM,
  nn as SHOW_MESSAGE,
  dn as SHOW_MESSAGE_BODY,
  cn as SHOW_PICTURE,
  ra as SHOW_SCROLLING_TEXT,
  ta as SHOW_SCROLLING_TEXT_BODY,
  pn as SKIP,
  is as SPECIAL_EFFECT_ESCAPE,
  id as SPECIAL_PARAM_EXR,
  cd as SPECIAL_PARAM_FDR,
  pd as SPECIAL_PARAM_GRD,
  ld as SPECIAL_PARAM_MCR,
  Ad as SPECIAL_PARAM_MDR,
  Ed as SPECIAL_PARAM_PDR,
  Cd as SPECIAL_PARAM_PHA,
  Id as SPECIAL_PARAM_REC,
  Td as SPECIAL_PARAM_TCR,
  _d as SPECIAL_PARAM_TGR,
  Cs as SRC_DATA_ACTOR,
  ys as SRC_DATA_ARMOR,
  Ps as SRC_DATA_CLASS,
  Ms as SRC_DATA_COMMON_EVNET,
  Ts as SRC_DATA_ENEMY,
  Ss as SRC_DATA_ITEMS,
  Is as SRC_DATA_MAP,
  ks as SRC_DATA_SKILL,
  _s as SRC_DATA_STATE,
  Ls as SRC_DATA_TROOP,
  Rs as SRC_DATA_WEAPON,
  ln as STOP_SE,
  An as TINT_PICTURE,
  En as TINT_SCREEN,
  kd as TRAIT_ACTION_PLUS,
  Sd as TRAIT_ATTACK_ELEMENT,
  Rd as TRAIT_ATTACK_SKILL,
  yd as TRAIT_ATTACK_SPEED,
  Pd as TRAIT_ATTACK_STATE,
  Md as TRAIT_ATTACK_TIMES,
  Ld as TRAIT_COLLAPSE_TYPE,
  Nd as TRAIT_DEBUFF_RATE,
  gd as TRAIT_ELEMENT_RATE,
  bd as TRAIT_EQUIP_ARMOR_TYPE,
  ud as TRAIT_EQUIP_LOCK,
  Od as TRAIT_EQUIP_SEAL,
  Dd as TRAIT_EQUIP_WEAPON_TYPE,
  Fd as TRAIT_PARAM,
  vd as TRAIT_PARTY_ABILITY,
  Vd as TRAIT_SKILL_ADD,
  fd as TRAIT_SKILL_SEAL,
  Gd as TRAIT_SKILL_TYPE_ADD,
  hd as TRAIT_SKILL_TYPE_SEAL,
  Bd as TRAIT_SLOT_TYPE,
  Hd as TRAIT_SPARAM,
  xd as TRAIT_SPECIAL_FLAG,
  Yd as TRAIT_STATE_RATE,
  Ud as TRAIT_STATE_RESIST,
  wd as TRAIT_XPARAM,
  Cn as TRANSFER_PLAYER,
  qr as TYPE_ARMOR,
  Xr as TYPE_ITEM,
  Kr as TYPE_WEAPON,
  hm as VARIABLE_SRC_LAST,
  Zm as VEHICLE_AIRSHIP,
  zm as VEHICLE_BOAT,
  Qm as VEHICLE_SHIP,
  In as WAIT,
  ve as assetDirectoryName,
  Wd as buildNoteFromNormalized,
  mr as cloneChoices,
  $m as cloneEventCommand,
  Da as cloneParameters,
  Xd as collapsOptionsToArray,
  Ui as convertCommentArrayToObject,
  qc as convertTermsMessageMZtoMV,
  Kd as createActorControlChars,
  qd as createControlCharFormat,
  jc as createMenuCommandState,
  jd as createNoteEntity,
  zd as createSystemVariableControlChars,
  Qd as defineGameDataSources,
  Zd as defineSystemItems,
  Jd as defineTraitCollapseType,
  $d as defineTraitExtraParam,
  ai as defineTraitItems,
  ei as defineTraitPartyAbility,
  ti as defineTraitRegularParam,
  ri as defineTraitSpecialFlag,
  mi as defineTraitSpecialParam,
  si as extraParamName,
  oi as extraParamsToArray,
  Gs as extractFileName,
  cs as formatItemEffectText,
  rs as formatTraitText,
  dt as fromArrayChangeItems,
  Et as fromArrayChangeWeapons,
  et as fromArrayCommonEvent,
  tt as fromArrayControlSwitches,
  qe as fromArrayEnemyTransform,
  ot as fromArrayInputNumber,
  or as fromArrayPlayMovie,
  dr as fromArrayPluginCommandMZ,
  Qt as fromArrayScrollingTextBody,
  jt as fromArrayScrollingTextHeader,
  Lt as fromArraySelectItem,
  er as fromArraySetupChoice,
  $t as fromArraySetupChoiceItem,
  up as fromArrayShowMessageHeader,
  ni as fromStringArray,
  zc as getArmorCategoryEnabled,
  di as getArmorTypes,
  es as getControlChars,
  ii as getElementTypes,
  Qc as getEquipCommandEnabled,
  ci as getEquipTypes,
  Zc as getFormationCommandEnabled,
  Jc as getItemCategoryEnabled,
  $c as getItemCommandEnabled,
  pi as getItemIdFromItemCommand,
  ap as getKeyItemCategoryEnabled,
  li as getNoteValue,
  us as getParamNames,
  ep as getSaveCommandEnabled,
  tp as getSkillCommandEnabled,
  Ai as getSkillTypes,
  rp as getStatusCommandEnabled,
  Ei as getSwitches,
  Ci as getVariableNames,
  mp as getWeaponCategoryEnabled,
  Ii as getWeaponTypes,
  as as isCloneableCommand,
  Jm as isCommandAnyAudio,
  He as isCommandBattleProcessingVariable,
  sm as isCommandOperandVariables,
  Ti as isUsingVariableItemCommand,
  nt as isUsingVaribleCommandChangingItems,
  Ns as labelsRegistry,
  wi as makeActorData,
  Wi as makeActorDataFromTestSoruce,
  Xi as makeArmorData,
  Ki as makeArmorDataFromTestSoruce,
  qi as makeAudioCommand,
  ji as makeBattleEventPage,
  sp as makeBooleanOptions,
  zi as makeClassData,
  Qi as makeClassDataEx,
  Zi as makeClassDataFromTestSoruce,
  Qe as makeCommandAddEachEnemyState,
  je as makeCommandAddEnemyState,
  ir as makeCommandAddPartyMember,
  Ee as makeCommandAddStateByVariable,
  le as makeCommandAddStateEachActor,
  ce as makeCommandAddStateTargetActor,
  Ji as makeCommandAudioAny,
  xe as makeCommandBattleProcessingDirect,
  Ue as makeCommandBattleProcessingEncount,
  Ye as makeCommandBattleProcessingVariable,
  $i as makeCommandChangeActorImages,
  ac as makeCommandChangeActorName,
  ec as makeCommandChangeActorNickName,
  tc as makeCommandChangeActorProfile,
  rc as makeCommandChangeBattleBGM,
  fe as makeCommandChangeBattleBackground,
  mc as makeCommandChangeClass,
  sc as makeCommandChangeDefeatME,
  z as makeCommandChangeEncounter,
  oc as makeCommandChangeEquip,
  it as makeCommandChangeItems,
  Nt as makeCommandChangeParallax,
  Ot as makeCommandChangeTileset,
  Km as makeCommandChangeVehicleBGM,
  Xm as makeCommandChangeVehicleImage,
  nc as makeCommandChangeVictoryME,
  Ct as makeCommandChangeWeapons,
  dc as makeCommandCommentBody,
  ic as makeCommandCommentHeader,
  at as makeCommandCommonEvent,
  rt as makeCommandControlSwitches,
  we as makeCommandControlTimer,
  Re as makeCommandDecreaseActorParam,
  Xe as makeCommandDisableEncounter,
  Kt as makeCommandDisableFormationAccess,
  Ut as makeCommandDisableMenuAccess,
  Wt as makeCommandDisableSaveAccess,
  We as makeCommandEnableEncounter,
  qt as makeCommandEnableFormationAccess,
  wt as makeCommandEnableMenuAccess,
  Xt as makeCommandEnableSaveAccess,
  $e as makeCommandEnemyRecoverAll,
  Je as makeCommandEnemyRecoverAllEach,
  Ke as makeCommandEnemyTransform,
  _r as makeCommandFadeInScreen,
  ue as makeCommandFadeOutBGM,
  Fe as makeCommandFadeOutBGS,
  kr as makeCommandFadeOutScreen,
  Sr as makeCommandFlashScreen,
  se as makeCommandForgetSkill,
  ie as makeCommandForgetSkillByVariable,
  ne as makeCommandForgetSkillEachActor,
  ye as makeCommandGainActorHP,
  Ne as makeCommandGainActorMP,
  Me as makeCommandGainActorTP,
  St as makeCommandGainArmor,
  Rt as makeCommandGainArmorByVariable,
  Ka as makeCommandGainExpByVariable,
  Wa as makeCommandGainExpDirect,
  Qa as makeCommandGainExpTargetAndOperandVariable,
  ja as makeCommandGainExpTargetVariable,
  pr as makeCommandGainGold,
  Ar as makeCommandGainGoldByVariable,
  ct as makeCommandGainItem,
  pt as makeCommandGainItemV,
  It as makeCommandGainWeapon,
  Tt as makeCommandGainWeaponV,
  vt as makeCommandGetEventIdXY,
  Vt as makeCommandGetEventIdXYDirect,
  Wm as makeCommandGetOnOffVehicle,
  ft as makeCommandGetRegionId,
  Gt as makeCommandGetRegionIdDirect,
  Dt as makeCommandGetTerrainTag,
  Ft as makeCommandGetTerrainTagDirect,
  ht as makeCommandGetTileId,
  Bt as makeCommandGetTileIdDirect,
  ut as makeCommandHideMapName,
  Se as makeCommandIncreaseActorParam,
  mt as makeCommandInputNumber,
  me as makeCommandLearnSkill,
  de as makeCommandLearnSkillByVariable,
  oe as makeCommandLearnSkillEachActor,
  $a as makeCommandLevelDownActor,
  ee as makeCommandLevelDownActorByVariable,
  re as makeCommandLevelDownEachActors,
  Ja as makeCommandLevelUpActor,
  ae as makeCommandLevelUpActorByVariable,
  te as makeCommandLevelUpEachActors,
  Pe as makeCommandLoseActorHP,
  ge as makeCommandLoseActorMP,
  Le as makeCommandLoseActorTP,
  yt as makeCommandLoseArmor,
  Pt as makeCommandLoseArmorByVariable,
  qa as makeCommandLoseExpByVariable,
  Xa as makeCommandLoseExpDirect,
  Za as makeCommandLoseExpTargetAndOperandVariable,
  za as makeCommandLoseExpTargetVariable,
  lr as makeCommandLoseGold,
  Er as makeCommandLoseGoldByVariable,
  lt as makeCommandLoseItem,
  At as makeCommandLoseItemV,
  _t as makeCommandLoseWeapon,
  kt as makeCommandLoseWeaponV,
  Ir as makeCommandMovePicture,
  Ie as makeCommandNameInputProcessing,
  cc as makeCommandPlayBGM,
  pc as makeCommandPlayBGS,
  lc as makeCommandPlayME,
  sr as makeCommandPlayMovie,
  Ac as makeCommandPlaySE,
  nr as makeCommandPluginCommandMZ,
  Te as makeCommandRecoverAllEachActors,
  _e as makeCommandRecoverAllTargetActor,
  ke as makeCommandRecoverAllTargetActorByVariable,
  pe as makeCommandRemoveActorTargetState,
  Ze as makeCommandRemoveEachEnemyState,
  ze as makeCommandRemoveEnemyState,
  cr as makeCommandRemovePartyMember,
  Ce as makeCommandRemoveStateByVariable,
  Ae as makeCommandRemoveStateEachActors,
  De as makeCommandResumeBGM,
  Oe as makeCommandSaveBGM,
  Pr as makeCommandScriptArray,
  Ma as makeCommandScriptBody,
  Pa as makeCommandScriptHeader,
  gt as makeCommandScrollMap,
  Zt as makeCommandScrollingTextBody,
  zt as makeCommandScrollingTextHeader,
  Mt as makeCommandSelectItem,
  Ht as makeCommandSetEventLocationDirect,
  Yt as makeCommandSetEventLocationExchange,
  xt as makeCommandSetEventLocationVariable,
  qm as makeCommandSetVehicleLocation,
  jm as makeCommandSetVehicleLocationFromVariables,
  Tr as makeCommandSetWeatherEffect,
  rr as makeCommandSetupChoice,
  Rr as makeCommandShakeScreen,
  Nr as makeCommandShopProcessing,
  be as makeCommandShowAnimation,
  Ve as makeCommandShowBalloonIcon,
  Jt as makeCommandShowChoiceItem,
  bt as makeCommandShowMapName,
  Op as makeCommandShowMessage,
  Dp as makeCommandShowMessageBody,
  Cr as makeCommandShowPicture,
  yr as makeCommandTintScreen,
  xm as makeCommandVariableDataLastActorId,
  Br as makeCommandVariableFromActorAgi,
  Vr as makeCommandVariableFromActorAtk,
  br as makeCommandVariableFromActorCurrentExp,
  ur as makeCommandVariableFromActorCurrentHp,
  gr as makeCommandVariableFromActorCurrentLevel,
  Or as makeCommandVariableFromActorCurrentMp,
  Dr as makeCommandVariableFromActorCurrentTp,
  fr as makeCommandVariableFromActorDef,
  Hr as makeCommandVariableFromActorLuk,
  Gr as makeCommandVariableFromActorMat,
  Fr as makeCommandVariableFromActorMaxHp,
  vr as makeCommandVariableFromActorMaxMp,
  hr as makeCommandVariableFromActorMdf,
  im as makeCommandVariableFromArmor,
  cm as makeCommandVariableFromConstant,
  rm as makeCommandVariableFromEnemyAgi,
  $r as makeCommandVariableFromEnemyAtk,
  jr as makeCommandVariableFromEnemyCurrentHp,
  zr as makeCommandVariableFromEnemyCurrentMp,
  Qr as makeCommandVariableFromEnemyCurrentTp,
  am as makeCommandVariableFromEnemyDef,
  mm as makeCommandVariableFromEnemyLuk,
  em as makeCommandVariableFromEnemyMat,
  Zr as makeCommandVariableFromEnemyMaxHp,
  Jr as makeCommandVariableFromEnemyMaxMp,
  tm as makeCommandVariableFromEnemyMdf,
  nm as makeCommandVariableFromItemData,
  Ym as makeCommandVariableFromLastEnemyIndex,
  Um as makeCommandVariableFromLastTargetActorId,
  wm as makeCommandVariableFromLastTargetEnemyIndex,
  Hm as makeCommandVariableFromLastUsedItemId,
  Bm as makeCommandVariableFromLastUsedSkillId,
  Am as makeCommandVariableFromMapCharactorDirection,
  Em as makeCommandVariableFromMapCharactorScreenX,
  Cm as makeCommandVariableFromMapCharactorScreenY,
  pm as makeCommandVariableFromMapCharactorX,
  lm as makeCommandVariableFromMapCharactorY,
  Rm as makeCommandVariableFromMapId,
  _m as makeCommandVariableFromMapPlayerDirection,
  km as makeCommandVariableFromMapPlayerScreenX,
  Sm as makeCommandVariableFromMapPlayerScreenY,
  Im as makeCommandVariableFromMapPlayerX,
  Tm as makeCommandVariableFromMapPlayerY,
  Pm as makeCommandVariableFromPartyGold,
  ym as makeCommandVariableFromPartySize,
  Mm as makeCommandVariableFromPartySteps,
  Lm as makeCommandVariableFromRandom,
  Nm as makeCommandVariableFromScript,
  Vm as makeCommandVariableFromSystemBattleCount,
  Gm as makeCommandVariableFromSystemEscapeCount,
  um as makeCommandVariableFromSystemGold,
  gm as makeCommandVariableFromSystemMapId,
  bm as makeCommandVariableFromSystemPartyMemberCount,
  Dm as makeCommandVariableFromSystemPlayTime,
  vm as makeCommandVariableFromSystemSaveCount,
  Om as makeCommandVariableFromSystemSteps,
  Fm as makeCommandVariableFromSystemTimer,
  fm as makeCommandVariableFromSystemWinCount,
  om as makeCommandVariableFromVariable,
  dm as makeCommandVariableFromWeapon,
  Ec as makeCommentArray,
  Cc as makeCommentCommandArray,
  Ic as makeCommonEventData,
  Tc as makeDamage,
  bs as makeDataNames,
  _c as makeDropItem,
  op as makeEditorSetting,
  kc as makeEnemyAction,
  Sc as makeEnemyData,
  Rc as makeEnemyDataFromTestSoruce,
  yc as makeEventPageCondition,
  gs as makeGameInitial,
  np as makeItemCategories,
  dp as makeItemCategoriesFromArray,
  Pc as makeItemData,
  Mc as makeItemDataFromTestSoruce,
  Lc as makeMapData,
  Nc as makeMapDataFromSingleEvent,
  gc as makeMapEvent,
  bc as makeMapEventIamge,
  uc as makeMapEventPage,
  Oc as makeMapFileInfo,
  Dc as makeMapInfoData,
  Fc as makeMapName,
  ip as makeMenuCommandsEnabled,
  cp as makeMenuCommandsEnabledFromArray,
  vc as makeParamArray,
  pp as makeParamNamesArray,
  lp as makeParamNamesFromArray,
  Vc as makeSkillData,
  fc as makeSkillDataFromTestSoruce,
  Ap as makeSoundsArray,
  Ep as makeSoundsObject,
  Gc as makeStateData,
  hc as makeStateDataFromTestSoruce,
  Cp as makeSystemAdvanced,
  Ip as makeSystemData,
  Tp as makeSystemDataFromMV,
  _p as makeSystemDataMV,
  kp as makeTermsBasic,
  Sp as makeTermsBasicFromArray,
  Rp as makeTermsCommandArray,
  yp as makeTermsCommandArrayWithNulls,
  Pp as makeTermsCommandFromArray,
  Mp as makeTermsMessages,
  Bc as makeTestAudioCommands,
  Lp as makeTestSystemData,
  Np as makeTitleCommandWindow,
  Hc as makeTroopData,
  xc as makeTroopEventConditions,
  Yc as makeTroopMember,
  gp as makeVehicleData,
  Uc as makeWeaponData,
  wc as makeWeaponDataFromTestSoruce,
  Wc as normalizeDataActor,
  _i as normalizeNote,
  Xc as paramArrayToObject,
  ki as partyAbilityToArray,
  Si as readNote,
  Ri as readNoteEx,
  yi as readNoteEx2,
  Pi as readNoteObject,
  Mi as regularParamName,
  Li as regularParamsToArray,
  Ni as replaceNote,
  gi as replaceNoteWithHandlers,
  ts as repleaceMapEventCommands,
  bi as resolveItemEffectLabels,
  ui as resolveTraitLabels,
  Oi as setNoteValue,
  Di as specialFlagToArray,
  Fi as specialParamName,
  vi as specialParamsToArray,
  Vs as textAndDesc,
  ka as toArrayCommonEvent,
  Sa as toArrayControlSwitches,
  st as toArrayInputNumber,
  ya as toArrayScrollingTextBody,
  Ra as toArrayScrollingTextHeader,
  tr as toArraySetupChoice,
  ar as toArraySetupChoiceItem,
  Fp as toArrayShowMessageHeader
};
