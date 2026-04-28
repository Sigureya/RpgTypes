import { m as A, r as S, G as R, ai as $, y as w, p as W, u as X, I as K, B as h, g as aa, R as ea, V as ta, q as g, N as b, b as O, aa as E, aC as G, aS as ra, aR as ma, az as sa, ay as q, aH as oa, aI as na, X as t, am as da, an as ia, ao as ca, aq as pa, d as la, M as Aa, f as Ea } from "../shared/eventCommandCodes.es.js";
import { A as ws, C as Ws, a as Xs, c as Ks, e as qs, h as js, i as zs, j as Qs, k as Zs, l as Js, n as $s, o as ao, s as eo, t as to, v as ro, w as mo, x as so, z as oo, D as no, E as io, F as co, H as po, J as lo, K as Ao, L as Eo, O as Co, P as Io, Q as To, S as _o, T as ko, U as So, W as Ro, Y as yo, Z as Po, _ as Mo, $ as Lo, a0 as No, a1 as go, a2 as bo, a3 as uo, a4 as Oo, a5 as Do, a6 as Fo, a7 as vo, a8 as Vo, a9 as fo, ab as ho, ac as Go, ad as Bo, ae as Ho, af as xo, ag as Yo, ah as Uo, aj as wo, ak as Wo, al as Xo, ap as Ko, ar as qo, as as jo, at as zo, au as Qo, av as Zo, aw as Jo, ax as $o, aA as an, aB as en, aD as tn, aE as rn, aF as mn, aG as sn, aJ as on, aK as nn, aL as dn, aM as cn, aN as pn, aO as ln, aP as An, aQ as En, aT as Cn, aU as In, aV as Tn, aW as _n, aX as kn, aY as Sn } from "../shared/eventCommandCodes.es.js";
import { b1 as y, b3 as P, b4 as I, b2 as M } from "../shared/namedItems.es.js";
import { C as yn, a as Pn, b as Mn, c as Ln, E as Nn, d as gn, e as bn, f as un, g as On, h as Dn, i as Fn, j as vn, k as Vn, l as fn, m as hn, n as Gn, o as Bn, p as Hn, q as xn, r as Yn, s as Un, t as wn, u as Wn, v as Xn, w as Kn, x as qn, y as jn, F as zn, z as Qn, A as Zn, B as Jn, P as $n, D as ad, G as ed, H as td, I as rd, J as md, R as sd, K as od, L as nd, M as dd, N as id, O as cd, Q as pd, S as ld, T as Ad, U as Ed, V as Cd, W as Id, X as Td, Y as _d, Z as kd, _ as Sd, $ as Rd, a0 as yd, a1 as Pd, a2 as Md, a3 as Ld, a4 as Nd, a5 as gd, a6 as bd, a7 as ud, a8 as Od, a9 as Dd, aa as Fd, ab as vd, ac as Vd, ad as fd, ae as hd, af as Gd, ag as Bd, ah as Hd, ai as xd, aj as Yd, ak as Ud, al as wd, am as Wd, an as Xd, ao as Kd, ap as qd, aq as jd, ar as zd, as as Qd, at as Zd, au as Jd, av as $d, aw as ai, ax as ei, ay as ti, az as ri, aA as mi, aB as si, aC as oi, aD as ni, aE as di, aF as ii, aG as ci, aH as pi, aI as li, aJ as Ai, aK as Ei, aL as Ci, aM as Ii, aN as Ti, aO as _i, aP as ki, aQ as Si, aR as Ri, aS as yi, aT as Pi, aU as Mi, aV as Li, aW as Ni, aX as gi, aY as bi, aZ as ui, a_ as Oi, a$ as Di, b0 as Fi } from "../shared/namedItems.es.js";
import { g as Ca, f as Ia } from "../shared/applyFormat.es.js";
import { O as Vi, a as fi, b as hi, c as Gi, d as Bi, e as Hi } from "../shared/applyFormat.es.js";
import { c as Yi, m as Ui, a as wi, b as Wi, d as Xi, e as Ki, f as qi, g as ji, h as zi, i as Qi, j as Zi, k as Ji, l as $i, n as ac, o as ec, p as tc, q as rc, r as mc, s as sc, t as oc, u as nc, v as dc, w as ic, x as cc, y as pc, z as lc, A as Ac, B as Ec, C as Cc, D as Ic, E as Tc, F as _c, G as kc, H as Sc, I as Rc, J as yc, K as Pc, L as Mc, M as Lc, N as Nc, O as gc, P as bc, Q as uc, R as Oc, S as Dc, T as Fc, U as vc, V as Vc, W as fc, X as hc, Y as Gc, Z as Bc, _ as Hc, $ as xc, a0 as Yc, a1 as Uc, a2 as wc, a3 as Wc } from "../shared/makeTestData.es.js";
import { c as Kc, a as qc, g as jc, b as zc, d as Qc, e as Zc, f as Jc, h as $c, i as ap, j as ep, k as tp, l as rp, m as mp, n as sp, o as op, p as np, q as dp, r as ip, s as cp, t as pp, u as lp, v as Ap, w as Ep, x as Cp, y as Ip, z as Tp, A as _p, B as kp, C as Sp, D as Rp, E as yp, F as Pp, G as Mp, H as Lp, I as Np } from "../shared/makeSystemEx.es.js";
import { f as bp, m as up, a as Op, t as Dp } from "../shared/make.es.js";
import { m as Ta } from "../shared/makeAudio.es.js";
const Xa = (a, e = 0) => ({ code: A, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), Ka = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), qa = (a, e = 0) => ({ code: A, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), ja = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), za = (a, e = 0) => ({ code: A, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), Qa = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), Za = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Ja = (a, e = 0) => ({ code: A, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), $a = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), ae = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), ee = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), te = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), re = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), me = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), se = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), oe = (a, e = 0) => ({ code: R, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), ne = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), de = (a, e = 0) => ({ code: R, indent: e, parameters: [0, 0, 1, a.skillId] }), ie = (a, e = 0) => ({ code: R, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), ce = (a, e = 0) => ({
  code: R,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), pe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), le = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), Ae = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), Ee = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Ce = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Ie = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), Te = (a, e = 0) => ({
  code: $,
  indent: e,
  parameters: [a.actorId, a.maxLength]
}), _e = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), ke = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Se = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.variableId]
}), Re = (a, e = 0) => ({ code: w, indent: e, parameters: j(a, 0) }), ye = (a, e = 0) => ({
  code: w,
  indent: e,
  parameters: j(a, 1)
}), j = (a, e) => [a.actorId, a.paramId, e, a.value], k = { direct: 0, variable: 1 }, Pe = (a, e = 0) => ({ code: W, indent: e, parameters: z(0, a) }), Me = (a, e = 0) => ({
  code: W,
  indent: e,
  parameters: z(1, a)
}), Le = (a, e = 0) => ({ code: K, indent: e, parameters: D(0, a) }), Ne = (a, e = 0) => ({ code: K, indent: e, parameters: D(1, a) }), ge = (a, e = 0) => ({ code: X, indent: e, parameters: D(0, a) }), be = (a, e = 0) => ({
  code: X,
  indent: e,
  parameters: D(1, a)
}), D = (a, e) => [e.targetType === "variable" ? k.variable : k.direct, e.targetType === "each" ? 0 : e.target, a, k[e.operand.mode], e.operand.value], z = (a, e) => [e.targetType === "variable" ? k.variable : k.direct, e.targetType === "each" ? 0 : e.target, a, k[e.operand.mode], e.operand.value, e.allowDeath], ue = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Oe = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), De = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Fe = (a = 0) => ({ code: 244, indent: a, parameters: [] }), ve = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), _a = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, Ve = (a) => _a[a], fe = (a, e = 0) => ({ code: 213, indent: e, parameters: [a.characterId, a.balloonId, a.waiting] }), he = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), Ge = 0, Be = 1, He = 2, xe = (a) => a.parameters[0] === 1, Ye = ({ troopId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({
  code: h,
  indent: m,
  parameters: [0, a, e, r]
}), Ue = ({ variableId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({ code: h, indent: m, parameters: [1, a, e, r] }), we = ({ canEscape: a = !1, canLose: e = !1 }, r = 0) => ({
  code: h,
  indent: r,
  parameters: [2, 0, a, e]
}), ka = { plus: 0, minus: 1 }, We = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ka[a ?? "plus"] ?? 0, e ?? 0] }), Q = (a, e = 0) => ({
  code: aa,
  indent: e,
  parameters: [a]
}), Xe = (a = 0) => Q(0, a), Ke = (a = 0) => Q(1, a);
function qe(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const je = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ze = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), Qe = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), Ze = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), Je = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), $e = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), at = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), et = (a, e = 0) => ({ code: ea, indent: e, parameters: Sa(a ?? {}) }), tt = (a) => ({ eventId: a[0] }), Sa = (a) => [a.eventId ?? 0], rt = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), Ra = (a) => [a.min, a.max, a.value], mt = (a, e = 0) => ({ code: ta, indent: e, parameters: Ra(a) }), st = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), ot = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], nt = (a) => ({ variableId: a[0], maxDigits: a[1] }), dt = (a) => a.parameters[3] === I, it = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), ct = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), pt = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, y, P, a.value] }), lt = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.itemId, y, I, a.variableId]
}), At = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, M, P, a.value] }), Et = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.itemId, M, I, a.variableId]
}), Ct = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), It = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Tt = (a, e = 0) => ({ code: b, indent: e, parameters: [a.weaponId, y, P, a.value, !1] }), _t = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.weaponId, y, I, a.variableId, !1]
}), kt = (a, e = 0) => ({ code: b, indent: e, parameters: [a.weaponId, M, P, a.value, !1] }), St = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [a.weaponId, M, I, a.variableId, !1]
}), Rt = (a, e = 0) => ({ code: O, indent: e, parameters: [a.armorId, y, P, a.value, !1] }), yt = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.armorId, y, I, a.variableId, !1]
}), Pt = (a, e = 0) => ({ code: O, indent: e, parameters: [a.armorId, M, P, a.value, !1] }), Mt = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.armorId, M, I, a.variableId, !1]
}), Lt = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Nt = (a) => ({ variableId: a[0], itemType: a[1] }), gt = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), bt = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), ut = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), Ot = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), Dt = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Ft = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, 0, 1, a.x, a.y]
}), vt = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, 0, 0, a.x, a.y] }), Vt = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, 1, 1, a.x, a.y]
}), ft = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), ht = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, 6, 1, a.x, a.y] }), Gt = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, 6, 0, a.x, a.y]
}), Bt = (a, e = 0) => ({ code: E, indent: e, parameters: [a.variableId, Z[a.layer] ?? 2, 1, a.x, a.y] }), Ht = (a, e = 0) => ({
  code: E,
  indent: e,
  parameters: [a.variableId, Z[a.layer] ?? 2, 0, a.x, a.y]
}), Z = { 1: 2, 2: 3, 3: 4, 4: 5 }, xt = (a, e = 0) => ({ code: G, indent: e, parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction] }), Yt = (a, e = 0) => ({
  code: G,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), Ut = (a, e = 0) => ({
  code: G,
  indent: e,
  parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction]
}), wt = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Wt = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Xt = (a = 0) => ({
  code: 134,
  parameters: [1],
  indent: a
}), Kt = (a = 0) => ({ code: 134, parameters: [0], indent: a }), qt = (a = 0) => ({ code: 137, parameters: [1], indent: a }), jt = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), ya = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], zt = (a) => ({ speed: a[0], skip: a[1] }), Qt = (a = {}, e = 0) => ({ code: ma, indent: e, parameters: ya(a) }), Pa = (a = "") => [a], Zt = (a) => ({ content: a[0] }), Jt = (a = "", e = 0) => ({
  code: ra,
  indent: e ?? 0,
  parameters: Pa(a)
}), $t = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), ar = (a) => ({ index: a[0], name: a[1] }), er = (a) => [a.index ?? 0, a.name ?? ""], tr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), rr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], mr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), sr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), or = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), nr = (a) => ({
  filename: a[0]
}), dr = ({ args: a = {}, commandName: e, commandTitle: r = "", pluginName: m }, n = 0) => ({ code: 357, indent: n, parameters: [m, e, r, { ...a }] }), ir = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), cr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), pr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), lr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Ar = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Er = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Cr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Ir = ({ pictureId: a = 0, origin: e = 0, name: r = "", x: m = 0, y: n = 0, scaleX: l = 100, scaleY: T = 100, opacity: v = 255, blendMode: V = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, r, e, m, n, l, T, v, V]
}), Tr = ({ pictureId: a, origin: e, x: r, y: m, scaleX: n, scaleY: l, opacity: T, blendMode: v, wait: V = !1, easingType: J = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, r, m, n, l, T, v, V, J]
}), _r = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), kr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Sr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Rr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), yr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Pr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Ma = (a, e = 0) => ({ code: q, indent: e, parameters: [a] }), La = (a, e = 0) => ({
  code: sa,
  indent: e,
  parameters: [a]
}), Mr = (a, e = 0) => a.map(((r, m) => m === 0 ? Ma(r, e) : La(r, e))), Lr = 1, Nr = 0, u = { item: 0, weapon: 1, armors: 2 }, gr = ({ goods: a, buyOnly: e = !1 }, r = 0) => a.map(((m, n) => {
  const l = ((T) => T.customPrice !== void 0 && T.customPrice !== 0)(m) ? 1 : 0;
  return n === 0 ? { code: oa, indent: r, parameters: [u[m.itemType] ?? u.item, m.id, l, m.customPrice ?? 0, e] } : {
    code: na,
    indent: r,
    parameters: [u[m.itemType] ?? u.item, m.id, l, m.customPrice ?? 0]
  };
})), br = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 0) }), ur = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 1)
}), Or = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 2) }), Dr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 3) }), Fr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 12) }), vr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 4)
}), Vr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 5) }), fr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 6) }), hr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 7)
}), Gr = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 8) }), Br = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 9) }), Hr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 10)
}), xr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 11)
}), o = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], Yr = 0, Ur = 1, wr = 2, Wr = 3, Xr = 4, Kr = 0, qr = 1, jr = 2, zr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 0)
}), Qr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 1) }), Zr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 10) }), Jr = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 2) }), $r = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 3)
}), am = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 4) }), em = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 5) }), tm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 6)
}), rm = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 7) }), mm = (a, e = 0) => ({ code: t, indent: e, parameters: d(a, 8) }), sm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: d(a, 9)
}), d = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], om = (a) => a.parameters[3] === 1, nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Na(a)
}), Na = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], dm = (a, e = 0) => ({ code: t, indent: e, parameters: ga(a) }), im = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ba(a)
}), cm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ua(a)
}), ga = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], ba = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], ua = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], pm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Oa(a)
}), Oa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], i = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, lm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, i.X)
}), Am = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.Y) }), Em = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.DIRECTION) }), Cm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, i.SCREEN_X)
}), Im = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, i.SCREEN_Y) }), Tm = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, i.X) }), _m = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.Y)
}), km = (a, e = 0) => ({ code: t, indent: e, parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.DIRECTION) }), Sm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, i.SCREEN_X)
}), Rm = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, i.SCREEN_Y) }), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], ym = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: F(a, 0)
}), Pm = (a, e = 0) => ({ code: t, indent: e, parameters: F(a, 1) }), Mm = (a, e = 0) => ({ code: t, indent: e, parameters: F(a, 2) }), Lm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: F(a, 3)
}), F = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Da(a)
}), Da = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], gm = (a, e = 0) => ({ code: q, indent: e, parameters: [a] }), bm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 0)
}), um = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 1) }), Om = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 2) }), Dm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 3) }), Fm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 4)
}), vm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 5) }), Vm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 6) }), fm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 7)
}), hm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 8) }), Gm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 9)
}), p = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Bm = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Hm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 0) }), xm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 1) }), Ym = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 2) }), Um = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: L(a, 3)
}), wm = (a, e = 0) => ({ code: t, indent: e, parameters: L(a, 4) }), Wm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: L(a, 5)
}), L = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], Xm = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Km = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), qm = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, Ta(a.bgm)] }), jm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), zm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), Qm = 0, Zm = 1, Jm = 2, $m = (a) => a.code === da || a.code === ia || a.code === ca || a.code === pa || a.code === la || a.code === Aa || a.code === Ea, Fa = (a) => [...a], as = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Fa(a.parameters)
}), va = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", es = (a) => a.parameters.every(va), B = (a, e) => `\\${a}[${e}]`, ts = (a, e) => e.map(((r, m) => ({
  text: r,
  controlChar: B(a, m)
}))), rs = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), ms = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: B("N", e.id)
}))), ss = (a) => a.variables.map(((e, r) => ({ text: e || "", controlChar: B("V", r) }))).filter(((e) => e.text !== "")), os = (a, e) => a.map(((r) => r ? {
  ...r,
  pages: Va(r, e)
} : null)), Va = (a, e) => a.pages.map(((r) => ({ ...r, list: e(r.list) }))), fa = { actor: { title: "アクター", options: {
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
} }, s = "{name}", _ = "{name} * {value}%", H = "{name} + {value}%", x = "{value}", ha = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: _, options: { maxHp: "最大HP", maxMp: "最大MP", atk: "攻撃力", def: "防御力", matk: "魔法攻撃力", mdef: "魔法防御力", agi: "敏捷性", luk: "運" } },
    extraParam: {
      title: "追加能力値",
      format: H,
      options: {
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
      }
    },
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
    specialFlag: { title: "特殊フラグ", format: s, options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" } },
    collaps: {
      title: "消滅エフェクト",
      format: s,
      options: { bossCollaps: "ボス崩壊", instantCollaps: "即時崩壊", noneCollaps: "崩壊なし" }
    },
    partyAbility: { title: "パーティ能力", format: s, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: _ },
    debuffRate: {
      title: "弱体有効度",
      format: _
    },
    stateRate: { title: "ステート有効度", format: _ },
    stateResist: { title: "ステート無効", format: s },
    attackElement: { title: "攻撃属性", format: s },
    attackState: { title: "攻撃ステート", format: H },
    attackSpeed: { title: "攻撃速度補正", format: x },
    attackTimes: { title: "攻撃追加回数", format: x },
    actionPlus: { title: "行動追加", format: _ },
    attackSkill: { title: "攻撃スキル", format: s },
    equipWeaponType: {
      title: "装備武器タイプ",
      format: s
    },
    equipArmorType: { title: "装備防具タイプ", format: s },
    equipLock: { title: "装備固定", format: s },
    equipSeal: { title: "装備封印", format: s },
    slotType: { title: "スロットタイプ", format: s },
    skillAdd: { title: "スキル追加", format: s },
    skillSeal: { title: "スキルタイプ封印", format: s },
    skillTypeAdd: { title: "スキルタイプ追加", format: s },
    skillTypeSeal: { title: "スキルタイプ封印", format: s }
  }
}, Ga = { itemMapper: {
  placeHolder: "name",
  dataIdKey: "dataId",
  kindKey: "code"
}, placeHolder: { numbers: ["value"] } }, ns = (a, e, r) => {
  const m = Ca(Ga);
  return Ia(e, r, m, a.pattern, ((n) => n.dataId));
}, Ba = {
  title: "ダメージ",
  options: {}
}, ds = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
  name: { type: "string" },
  id: {
    type: "integer",
    minimum: 0
  },
  description: { type: "string" },
  iconIndex: { type: "integer", minimum: 0 },
  price: { type: "integer", minimum: 0 },
  note: { type: "string" },
  etypeId: { type: "integer", minimum: 0 },
  wtypeId: { type: "integer", minimum: 0 },
  animationId: { type: "integer", minimum: 0 },
  params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
  damage: {
    type: "object",
    properties: { type: { type: "integer", minimum: 0 }, elementId: {
      type: "integer",
      minimum: 0
    }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: !1 } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  },
  traits: { type: "array", items: { type: "object", additionalProperties: !1, properties: { code: { type: "integer" }, dataId: {
    type: "integer"
  }, value: { type: "number" } }, required: ["code", "dataId", "value"] } }
} }, is = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, cs = 0, ps = 1, ls = 2, Y = "{name} {value1}%", f = "{value1}% + {value2}", U = "{name} {value1}ターン", N = "{name}", Ha = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: U },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: U },
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
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: f },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: N
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: N },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Y },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: N
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: Y },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: N }
} }, As = 0, Es = (a, e, r) => {
  const m = r.find(((l) => l.id === e.dataId)), n = m ? m.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", n);
}, Cs = { title: "アイテム", options: { consumable: "消耗品" } }, Is = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Ts = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, _s = "data", ks = "actor", Ss = "map", Rs = "enemy", ys = "state", Ps = "skill", Ms = "item", Ls = "weapon", Ns = "armor", gs = "class", bs = "common_event", us = "troop", xa = {
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
}, Os = () => ({ rpg: { damage: Ba, data: fa, traits: ha, itemEffect: Ha }, global: xa }), Ds = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), Fs = (a) => ({
  armorTypes: C(a.armorTypes),
  elements: C(a.elements),
  equipTypes: C(a.equipTypes),
  weaponTypes: C(a.weaponTypes),
  skillTypes: C(a.skillTypes),
  variables: C(a.variables),
  switches: C(a.switches)
}), C = (a) => a ? [...a] : [], vs = (a) => a.terms.params.map(((e, r) => ({ name: e, id: r }))), Vs = { title: "オプション", options: {
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
} }, fs = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, hs = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Gs = { title: "コマンド", options: {
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
} }, Bs = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Hs = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, xs = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  ws as ABORT_BATTLE,
  Ge as BATTLE_DIRECT,
  He as BATTLE_ENCOUNT,
  h as BATTLE_PROCESSING,
  Be as BATTLE_VARIABLE,
  Ws as CHANGE_ACTOR_IMAGES,
  Xs as CHANGE_ACTOR_STATE,
  O as CHANGE_ARMORS,
  Ks as CHANGE_BATTLE_BACKGROUND,
  la as CHANGE_BATTLE_BGM,
  qs as CHANGE_CLASS,
  Ea as CHANGE_DEFEAT_ME,
  aa as CHANGE_ENCOUNTER,
  js as CHANGE_ENEMY_HP,
  zs as CHANGE_ENEMY_MP,
  Qs as CHANGE_ENEMY_STATE,
  Zs as CHANGE_ENEMY_TP,
  Js as CHANGE_EQUIP,
  A as CHANGE_EXP,
  $s as CHANGE_FORMATION_ACCESS,
  ao as CHANGE_GOLD,
  W as CHANGE_HP,
  g as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  eo as CHANGE_MAP_NAME_DISPLAY,
  to as CHANGE_MENU_ACCESS,
  X as CHANGE_MP,
  ro as CHANGE_NAME,
  mo as CHANGE_NICKNAME,
  so as CHANGE_PARALLAX,
  w as CHANGE_PARAMETER,
  oo as CHANGE_PARTY_MEMBER,
  no as CHANGE_PLAYER_FOLLOWERS,
  io as CHANGE_PROFILE,
  co as CHANGE_SAVE_ACCESS,
  R as CHANGE_SKILL,
  po as CHANGE_TILESET,
  K as CHANGE_TP,
  lo as CHANGE_TRANSPARENCY,
  Ao as CHANGE_VEHICLE_BGM,
  Eo as CHANGE_VEHICLE_IMAGE,
  Aa as CHANGE_VICTORY_ME,
  b as CHANGE_WEAPONS,
  Co as CHANGE_WINDOW_COLOR,
  yn as COLLAPS_BOSS,
  Pn as COLLAPS_INSTANT,
  Mn as COLLAPS_NONE,
  Ln as COLLAPS_NORMAL,
  Io as COMMENT_BODY,
  To as COMMENT_HEAD,
  ea as COMMON_EVENT,
  _o as CONDITIONAL_BRANCH,
  ko as CONDITIONAL_BRANCH_ELSE,
  So as CONTROL_SELF_SWITCH,
  ta as CONTROL_SWITCHES,
  Ro as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Lr as CUSTOM_PRICE,
  Ba as DEFAULT_DAMAGE_LABELS,
  xa as DEFAULT_GLOBAL_LABELS,
  Cs as DEFAULT_ITEM_LABELS,
  Is as DEFAULT_SKILL_LABELS,
  Vs as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  fs as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Ts as DEFAULT_USABLE_ITEM_LABELS,
  Hs as DIRECTION,
  Nn as EFFECT_ADD_BUFF,
  gn as EFFECT_ADD_DEBUFF,
  bn as EFFECT_ADD_STATE,
  un as EFFECT_COMMON_EVENT,
  On as EFFECT_GAIN_TP,
  Dn as EFFECT_GROW,
  Fn as EFFECT_LEARN_SKILL,
  vn as EFFECT_RECOVER_HP,
  Vn as EFFECT_RECOVER_MP,
  fn as EFFECT_REMOVE_BUFF,
  hn as EFFECT_REMOVE_DEBUFF,
  Gn as EFFECT_REMOVE_STATE,
  Bn as EFFECT_SPECIAL,
  yo as ENEMY_APPEAR,
  Po as ENEMY_RECOVER_ALL,
  Mo as ENEMY_TRANSFORM,
  Lo as ERASE_EVENT,
  No as ERASE_PICTURE,
  go as EXIT_EVENT_PROCESSING,
  Hn as EXTRA_PARAM_CEV,
  xn as EXTRA_PARAM_CNT,
  Yn as EXTRA_PARAM_CRI,
  Un as EXTRA_PARAM_EVA,
  wn as EXTRA_PARAM_HIT,
  Wn as EXTRA_PARAM_HRG,
  Xn as EXTRA_PARAM_MEV,
  Kn as EXTRA_PARAM_MRF,
  qn as EXTRA_PARAM_MRG,
  jn as EXTRA_PARAM_TRG,
  bo as FADEIN_SCREEN,
  uo as FADEOUT_BGM,
  Oo as FADEOUT_BGS,
  Do as FADEOUT_SCREEN,
  zn as FLAG_ID_AUTO_BATTLE,
  Qn as FLAG_ID_GUARD,
  Zn as FLAG_ID_PRESERVE_TP,
  Jn as FLAG_ID_SUBSTITUTE,
  Fo as FLASH_SCREEN,
  vo as FORCE_ACTION,
  Vo as GAME_OVER,
  fo as GATHER_FOLLOWERS,
  E as GET_LOCATION_INFO,
  ho as GET_ONOFF_VEHICLE,
  cs as HITTYPE_CERTAIN,
  ls as HITTYPE_MAGICAL,
  ps as HITTYPE_PHYSICAL,
  Go as INPUT_NUMBER,
  Bo as LABEL,
  is as LABELS_DATA_WEAPON,
  hs as LABELS_SYSTEM_BATTLER_PARAMS,
  Gs as LABELS_SYSTEM_GAME_COMMANDS,
  Ho as LABEL_JUMP,
  fa as LABEL_SET_DATA,
  Ha as LABEL_SET_ITEM_EFFECT,
  ha as LABEL_SET_TRAIT,
  xo as LOOP,
  Yo as LOOP_BREAK,
  i as MAP_CHARACTOR_PARAM,
  _s as MODULE_DATA,
  Uo as MOVE_PICTURE,
  $ as NAME_INPUT_PROCESSING,
  Nr as NORMAL_PRICE,
  wo as NO_OPERATION,
  Wo as OPEN_MENU_SCREEN,
  Xo as OPEN_SAVE_SCREEN,
  Yr as OPERAND_CONSTANT,
  Wr as OPERAND_GAMEDATA,
  wr as OPERAND_RANDOM,
  Xr as OPERAND_SCRIPT,
  Ur as OPERAND_VARIABLE,
  Vi as OPERATION_ADD,
  fi as OPERATION_DIVIDE,
  hi as OPERATION_MOD,
  Gi as OPERATION_MULTIPLY,
  Bi as OPERATION_SET,
  Hi as OPERATION_SUBTRACT,
  $n as PARTY_ABILITY_CANCEL_SURPRISE,
  ad as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ed as PARTY_ABILITY_ENCOUNTER_HALF,
  td as PARTY_ABILITY_ENCOUNTER_NONE,
  rd as PARTY_ABILITY_GOLD_DOUBLE,
  md as PARTY_ABILITY_RAISE_PREEMPTIVE,
  da as PLAY_BGM,
  ia as PLAY_BGS,
  ca as PLAY_ME,
  Ko as PLAY_MOVIE,
  pa as PLAY_SE,
  qo as PLUGIN_COMMAND_MV,
  jo as PLUGIN_COMMAND_MZ,
  zo as RECOVER_ALL,
  sd as REGULAR_PARAM_AGI,
  od as REGULAR_PARAM_ATK,
  nd as REGULAR_PARAM_DEF,
  dd as REGULAR_PARAM_LUK,
  id as REGULAR_PARAM_MATK,
  cd as REGULAR_PARAM_MAX_HP,
  pd as REGULAR_PARAM_MAX_MP,
  ld as REGULAR_PARAM_MDEF,
  Qo as RESUME_BGM,
  Zo as RETURN_TO_TITLE_SCREEN,
  Jo as ROTATE_PICTURE,
  $o as SAVE_BGM,
  ds as SCHEMA_DATA_WEAPON,
  q as SCRIPT_EVAL,
  sa as SCRIPT_EVAL_BODY,
  an as SCROLL_MAP,
  en as SELECT_ITEM,
  G as SET_EVENT_LOCATION,
  tn as SET_MOVEMENT_ROUTE,
  rn as SET_VEHICLE_LOCATION,
  mn as SET_WEATHER_EFFECT,
  sn as SHAKE_SCREEN,
  oa as SHOP_PROCESSING,
  na as SHOP_PROCESSING_BODY,
  on as SHOW_ANIMATION,
  nn as SHOW_BALLOON_ICON,
  dn as SHOW_BATTLE_ANIMATION,
  cn as SHOW_CHOICES,
  pn as SHOW_CHOICES_ITEM,
  ln as SHOW_MESSAGE,
  An as SHOW_MESSAGE_BODY,
  En as SHOW_PICTURE,
  ma as SHOW_SCROLLING_TEXT,
  ra as SHOW_SCROLLING_TEXT_BODY,
  Cn as SKIP,
  As as SPECIAL_EFFECT_ESCAPE,
  Ad as SPECIAL_PARAM_EXR,
  Ed as SPECIAL_PARAM_FDR,
  Cd as SPECIAL_PARAM_GRD,
  Id as SPECIAL_PARAM_MCR,
  Td as SPECIAL_PARAM_MDR,
  _d as SPECIAL_PARAM_PDR,
  kd as SPECIAL_PARAM_PHA,
  Sd as SPECIAL_PARAM_REC,
  Rd as SPECIAL_PARAM_TCR,
  yd as SPECIAL_PARAM_TGR,
  ks as SRC_DATA_ACTOR,
  Ns as SRC_DATA_ARMOR,
  gs as SRC_DATA_CLASS,
  bs as SRC_DATA_COMMON_EVNET,
  Rs as SRC_DATA_ENEMY,
  Ms as SRC_DATA_ITEMS,
  Ss as SRC_DATA_MAP,
  Ps as SRC_DATA_SKILL,
  ys as SRC_DATA_STATE,
  us as SRC_DATA_TROOP,
  Ls as SRC_DATA_WEAPON,
  In as STOP_SE,
  Tn as TINT_PICTURE,
  _n as TINT_SCREEN,
  Pd as TRAIT_ACTION_PLUS,
  Md as TRAIT_ATTACK_ELEMENT,
  Ld as TRAIT_ATTACK_SKILL,
  Nd as TRAIT_ATTACK_SPEED,
  gd as TRAIT_ATTACK_STATE,
  bd as TRAIT_ATTACK_TIMES,
  ud as TRAIT_COLLAPSE_TYPE,
  Od as TRAIT_DEBUFF_RATE,
  Dd as TRAIT_ELEMENT_RATE,
  Fd as TRAIT_EQUIP_ARMOR_TYPE,
  vd as TRAIT_EQUIP_LOCK,
  Vd as TRAIT_EQUIP_SEAL,
  fd as TRAIT_EQUIP_WEAPON_TYPE,
  hd as TRAIT_PARAM,
  Gd as TRAIT_PARTY_ABILITY,
  Bd as TRAIT_SKILL_ADD,
  Hd as TRAIT_SKILL_SEAL,
  xd as TRAIT_SKILL_TYPE_ADD,
  Yd as TRAIT_SKILL_TYPE_SEAL,
  Ud as TRAIT_SLOT_TYPE,
  wd as TRAIT_SPARAM,
  Wd as TRAIT_SPECIAL_FLAG,
  Xd as TRAIT_STATE_RATE,
  Kd as TRAIT_STATE_RESIST,
  qd as TRAIT_XPARAM,
  kn as TRANSFER_PLAYER,
  jr as TYPE_ARMOR,
  Kr as TYPE_ITEM,
  qr as TYPE_WEAPON,
  Bm as VARIABLE_SRC_LAST,
  Jm as VEHICLE_AIRSHIP,
  Qm as VEHICLE_BOAT,
  Zm as VEHICLE_SHIP,
  Sn as WAIT,
  Ve as assetDirectoryName,
  jd as buildNoteFromNormalized,
  sr as cloneChoices,
  as as cloneEventCommand,
  Fa as cloneParameters,
  zd as collapsOptionsToArray,
  Yi as convertCommentArrayToObject,
  Kc as convertTermsMessageMZtoMV,
  ms as createActorControlChars,
  B as createControlCharFormat,
  qc as createMenuCommandState,
  Qd as createNoteEntity,
  ss as createSystemVariableControlChars,
  Zd as defineGameDataSources,
  Jd as defineSystemItems,
  $d as defineTraitCollapseType,
  ai as defineTraitExtraParam,
  ei as defineTraitItems,
  ti as defineTraitPartyAbility,
  ri as defineTraitRegularParam,
  mi as defineTraitSpecialFlag,
  si as defineTraitSpecialParam,
  oi as extraParamName,
  ni as extraParamsToArray,
  xs as extractFileName,
  Es as formatItemEffectText,
  ns as formatTraitText,
  it as fromArrayChangeItems,
  Ct as fromArrayChangeWeapons,
  tt as fromArrayCommonEvent,
  rt as fromArrayControlSwitches,
  je as fromArrayEnemyTransform,
  nt as fromArrayInputNumber,
  nr as fromArrayPlayMovie,
  ir as fromArrayPluginCommandMZ,
  Zt as fromArrayScrollingTextBody,
  zt as fromArrayScrollingTextHeader,
  Nt as fromArraySelectItem,
  tr as fromArraySetupChoice,
  ar as fromArraySetupChoiceItem,
  bp as fromArrayShowMessageHeader,
  ts as fromStringArray,
  jc as getArmorCategoryEnabled,
  di as getArmorTypes,
  rs as getControlChars,
  ii as getElementTypes,
  zc as getEquipCommandEnabled,
  ci as getEquipTypes,
  Qc as getFormationCommandEnabled,
  Zc as getItemCategoryEnabled,
  Jc as getItemCommandEnabled,
  pi as getItemIdFromItemCommand,
  $c as getKeyItemCategoryEnabled,
  li as getNoteValue,
  vs as getParamNames,
  ap as getSaveCommandEnabled,
  ep as getSkillCommandEnabled,
  Ai as getSkillTypes,
  tp as getStatusCommandEnabled,
  Ei as getSwitches,
  Ci as getVariableNames,
  rp as getWeaponCategoryEnabled,
  Ii as getWeaponTypes,
  es as isCloneableCommand,
  $m as isCommandAnyAudio,
  xe as isCommandBattleProcessingVariable,
  om as isCommandOperandVariables,
  Ti as isUsingVariableItemCommand,
  dt as isUsingVaribleCommandChangingItems,
  Os as labelsRegistry,
  Ui as makeActorData,
  wi as makeActorDataFromTestSoruce,
  Wi as makeArmorData,
  Xi as makeArmorDataFromTestSoruce,
  Ki as makeAudioCommand,
  qi as makeBattleEventPage,
  mp as makeBooleanOptions,
  ji as makeClassData,
  zi as makeClassDataEx,
  Qi as makeClassDataFromTestSoruce,
  Ze as makeCommandAddEachEnemyState,
  ze as makeCommandAddEnemyState,
  cr as makeCommandAddPartyMember,
  Ce as makeCommandAddStateByVariable,
  Ae as makeCommandAddStateEachActor,
  pe as makeCommandAddStateTargetActor,
  Zi as makeCommandAudioAny,
  Ye as makeCommandBattleProcessingDirect,
  we as makeCommandBattleProcessingEncount,
  Ue as makeCommandBattleProcessingVariable,
  Ji as makeCommandChangeActorImages,
  $i as makeCommandChangeActorName,
  ac as makeCommandChangeActorNickName,
  ec as makeCommandChangeActorProfile,
  tc as makeCommandChangeBattleBGM,
  he as makeCommandChangeBattleBackground,
  rc as makeCommandChangeClass,
  mc as makeCommandChangeDefeatME,
  Q as makeCommandChangeEncounter,
  sc as makeCommandChangeEquip,
  ct as makeCommandChangeItems,
  gt as makeCommandChangeParallax,
  Dt as makeCommandChangeTileset,
  qm as makeCommandChangeVehicleBGM,
  Km as makeCommandChangeVehicleImage,
  oc as makeCommandChangeVictoryME,
  It as makeCommandChangeWeapons,
  nc as makeCommandCommentBody,
  dc as makeCommandCommentHeader,
  et as makeCommandCommonEvent,
  mt as makeCommandControlSwitches,
  We as makeCommandControlTimer,
  ye as makeCommandDecreaseActorParam,
  Ke as makeCommandDisableEncounter,
  qt as makeCommandDisableFormationAccess,
  wt as makeCommandDisableMenuAccess,
  Xt as makeCommandDisableSaveAccess,
  Xe as makeCommandEnableEncounter,
  jt as makeCommandEnableFormationAccess,
  Wt as makeCommandEnableMenuAccess,
  Kt as makeCommandEnableSaveAccess,
  at as makeCommandEnemyRecoverAll,
  $e as makeCommandEnemyRecoverAllEach,
  qe as makeCommandEnemyTransform,
  kr as makeCommandFadeInScreen,
  Oe as makeCommandFadeOutBGM,
  ve as makeCommandFadeOutBGS,
  Sr as makeCommandFadeOutScreen,
  Rr as makeCommandFlashScreen,
  oe as makeCommandForgetSkill,
  ce as makeCommandForgetSkillByVariable,
  de as makeCommandForgetSkillEachActor,
  Pe as makeCommandGainActorHP,
  ge as makeCommandGainActorMP,
  Le as makeCommandGainActorTP,
  Rt as makeCommandGainArmor,
  yt as makeCommandGainArmorByVariable,
  qa as makeCommandGainExpByVariable,
  Xa as makeCommandGainExpDirect,
  Za as makeCommandGainExpTargetAndOperandVariable,
  za as makeCommandGainExpTargetVariable,
  lr as makeCommandGainGold,
  Er as makeCommandGainGoldByVariable,
  pt as makeCommandGainItem,
  lt as makeCommandGainItemV,
  Tt as makeCommandGainWeapon,
  _t as makeCommandGainWeaponV,
  Vt as makeCommandGetEventIdXY,
  ft as makeCommandGetEventIdXYDirect,
  Xm as makeCommandGetOnOffVehicle,
  ht as makeCommandGetRegionId,
  Gt as makeCommandGetRegionIdDirect,
  Ft as makeCommandGetTerrainTag,
  vt as makeCommandGetTerrainTagDirect,
  Bt as makeCommandGetTileId,
  Ht as makeCommandGetTileIdDirect,
  Ot as makeCommandHideMapName,
  Re as makeCommandIncreaseActorParam,
  st as makeCommandInputNumber,
  se as makeCommandLearnSkill,
  ie as makeCommandLearnSkillByVariable,
  ne as makeCommandLearnSkillEachActor,
  ae as makeCommandLevelDownActor,
  te as makeCommandLevelDownActorByVariable,
  me as makeCommandLevelDownEachActors,
  $a as makeCommandLevelUpActor,
  ee as makeCommandLevelUpActorByVariable,
  re as makeCommandLevelUpEachActors,
  Me as makeCommandLoseActorHP,
  be as makeCommandLoseActorMP,
  Ne as makeCommandLoseActorTP,
  Pt as makeCommandLoseArmor,
  Mt as makeCommandLoseArmorByVariable,
  ja as makeCommandLoseExpByVariable,
  Ka as makeCommandLoseExpDirect,
  Ja as makeCommandLoseExpTargetAndOperandVariable,
  Qa as makeCommandLoseExpTargetVariable,
  Ar as makeCommandLoseGold,
  Cr as makeCommandLoseGoldByVariable,
  At as makeCommandLoseItem,
  Et as makeCommandLoseItemV,
  kt as makeCommandLoseWeapon,
  St as makeCommandLoseWeaponV,
  Tr as makeCommandMovePicture,
  Te as makeCommandNameInputProcessing,
  ic as makeCommandPlayBGM,
  cc as makeCommandPlayBGS,
  pc as makeCommandPlayME,
  or as makeCommandPlayMovie,
  lc as makeCommandPlaySE,
  dr as makeCommandPluginCommandMZ,
  _e as makeCommandRecoverAllEachActors,
  ke as makeCommandRecoverAllTargetActor,
  Se as makeCommandRecoverAllTargetActorByVariable,
  le as makeCommandRemoveActorTargetState,
  Je as makeCommandRemoveEachEnemyState,
  Qe as makeCommandRemoveEnemyState,
  pr as makeCommandRemovePartyMember,
  Ie as makeCommandRemoveStateByVariable,
  Ee as makeCommandRemoveStateEachActors,
  Fe as makeCommandResumeBGM,
  De as makeCommandSaveBGM,
  Mr as makeCommandScriptArray,
  La as makeCommandScriptBody,
  Ma as makeCommandScriptHeader,
  bt as makeCommandScrollMap,
  Jt as makeCommandScrollingTextBody,
  Qt as makeCommandScrollingTextHeader,
  Lt as makeCommandSelectItem,
  xt as makeCommandSetEventLocationDirect,
  Ut as makeCommandSetEventLocationExchange,
  Yt as makeCommandSetEventLocationVariable,
  jm as makeCommandSetVehicleLocation,
  zm as makeCommandSetVehicleLocationFromVariables,
  _r as makeCommandSetWeatherEffect,
  mr as makeCommandSetupChoice,
  yr as makeCommandShakeScreen,
  gr as makeCommandShopProcessing,
  ue as makeCommandShowAnimation,
  fe as makeCommandShowBalloonIcon,
  $t as makeCommandShowChoiceItem,
  ut as makeCommandShowMapName,
  up as makeCommandShowMessage,
  Op as makeCommandShowMessageBody,
  Ir as makeCommandShowPicture,
  Pr as makeCommandTintScreen,
  Ym as makeCommandVariableDataLastActorId,
  Hr as makeCommandVariableFromActorAgi,
  fr as makeCommandVariableFromActorAtk,
  ur as makeCommandVariableFromActorCurrentExp,
  Or as makeCommandVariableFromActorCurrentHp,
  br as makeCommandVariableFromActorCurrentLevel,
  Dr as makeCommandVariableFromActorCurrentMp,
  Fr as makeCommandVariableFromActorCurrentTp,
  hr as makeCommandVariableFromActorDef,
  xr as makeCommandVariableFromActorLuk,
  Gr as makeCommandVariableFromActorMat,
  vr as makeCommandVariableFromActorMaxHp,
  Vr as makeCommandVariableFromActorMaxMp,
  Br as makeCommandVariableFromActorMdf,
  cm as makeCommandVariableFromArmor,
  pm as makeCommandVariableFromConstant,
  mm as makeCommandVariableFromEnemyAgi,
  am as makeCommandVariableFromEnemyAtk,
  zr as makeCommandVariableFromEnemyCurrentHp,
  Qr as makeCommandVariableFromEnemyCurrentMp,
  Zr as makeCommandVariableFromEnemyCurrentTp,
  em as makeCommandVariableFromEnemyDef,
  sm as makeCommandVariableFromEnemyLuk,
  tm as makeCommandVariableFromEnemyMat,
  Jr as makeCommandVariableFromEnemyMaxHp,
  $r as makeCommandVariableFromEnemyMaxMp,
  rm as makeCommandVariableFromEnemyMdf,
  dm as makeCommandVariableFromItemData,
  Um as makeCommandVariableFromLastEnemyIndex,
  wm as makeCommandVariableFromLastTargetActorId,
  Wm as makeCommandVariableFromLastTargetEnemyIndex,
  xm as makeCommandVariableFromLastUsedItemId,
  Hm as makeCommandVariableFromLastUsedSkillId,
  Em as makeCommandVariableFromMapCharactorDirection,
  Cm as makeCommandVariableFromMapCharactorScreenX,
  Im as makeCommandVariableFromMapCharactorScreenY,
  lm as makeCommandVariableFromMapCharactorX,
  Am as makeCommandVariableFromMapCharactorY,
  ym as makeCommandVariableFromMapId,
  km as makeCommandVariableFromMapPlayerDirection,
  Sm as makeCommandVariableFromMapPlayerScreenX,
  Rm as makeCommandVariableFromMapPlayerScreenY,
  Tm as makeCommandVariableFromMapPlayerX,
  _m as makeCommandVariableFromMapPlayerY,
  Mm as makeCommandVariableFromPartyGold,
  Pm as makeCommandVariableFromPartySize,
  Lm as makeCommandVariableFromPartySteps,
  Nm as makeCommandVariableFromRandom,
  gm as makeCommandVariableFromScript,
  fm as makeCommandVariableFromSystemBattleCount,
  Gm as makeCommandVariableFromSystemEscapeCount,
  Om as makeCommandVariableFromSystemGold,
  bm as makeCommandVariableFromSystemMapId,
  um as makeCommandVariableFromSystemPartyMemberCount,
  Fm as makeCommandVariableFromSystemPlayTime,
  Vm as makeCommandVariableFromSystemSaveCount,
  Dm as makeCommandVariableFromSystemSteps,
  vm as makeCommandVariableFromSystemTimer,
  hm as makeCommandVariableFromSystemWinCount,
  nm as makeCommandVariableFromVariable,
  im as makeCommandVariableFromWeapon,
  Ac as makeCommentArray,
  Ec as makeCommentCommandArray,
  Cc as makeCommonEventData,
  Ic as makeDamage,
  Fs as makeDataNames,
  Tc as makeDropItem,
  sp as makeEditorSetting,
  _c as makeEnemyAction,
  kc as makeEnemyData,
  Sc as makeEnemyDataFromTestSoruce,
  Rc as makeEventPageCondition,
  Ds as makeGameInitial,
  op as makeItemCategories,
  np as makeItemCategoriesFromArray,
  yc as makeItemData,
  Pc as makeItemDataFromTestSoruce,
  Mc as makeMapData,
  Lc as makeMapDataFromSingleEvent,
  Nc as makeMapEvent,
  gc as makeMapEventIamge,
  bc as makeMapEventPage,
  uc as makeMapFileInfo,
  Oc as makeMapInfoData,
  Dc as makeMapName,
  dp as makeMenuCommandsEnabled,
  ip as makeMenuCommandsEnabledFromArray,
  Fc as makeParamArray,
  cp as makeParamNamesArray,
  pp as makeParamNamesFromArray,
  vc as makeSkillData,
  Vc as makeSkillDataFromTestSoruce,
  lp as makeSoundsArray,
  Ap as makeSoundsObject,
  fc as makeStateData,
  hc as makeStateDataFromTestSoruce,
  Ep as makeSystemAdvanced,
  Cp as makeSystemData,
  Ip as makeSystemDataFromMV,
  Tp as makeSystemDataMV,
  _p as makeTermsBasic,
  kp as makeTermsBasicFromArray,
  Sp as makeTermsCommandArray,
  Rp as makeTermsCommandArrayWithNulls,
  yp as makeTermsCommandFromArray,
  Pp as makeTermsMessages,
  Gc as makeTestAudioCommands,
  Mp as makeTestSystemData,
  Lp as makeTitleCommandWindow,
  Bc as makeTroopData,
  Hc as makeTroopEventConditions,
  xc as makeTroopMember,
  Np as makeVehicleData,
  Yc as makeWeaponData,
  Uc as makeWeaponDataFromTestSoruce,
  wc as normalizeDataActor,
  _i as normalizeNote,
  Wc as paramArrayToObject,
  ki as partyAbilityToArray,
  Si as readNote,
  Ri as readNoteEx,
  yi as readNoteObject,
  Pi as regularParamName,
  Mi as regularParamsToArray,
  Li as replaceNote,
  Ni as replaceNoteWithHandlers,
  os as repleaceMapEventCommands,
  gi as resolveItemEffectLabels,
  bi as resolveTraitLabels,
  ui as setNoteValue,
  Oi as specialFlagToArray,
  Di as specialParamName,
  Fi as specialParamsToArray,
  Bs as textAndDesc,
  Sa as toArrayCommonEvent,
  Ra as toArrayControlSwitches,
  ot as toArrayInputNumber,
  Pa as toArrayScrollingTextBody,
  ya as toArrayScrollingTextHeader,
  rr as toArraySetupChoice,
  er as toArraySetupChoiceItem,
  Dp as toArrayShowMessageHeader
};
