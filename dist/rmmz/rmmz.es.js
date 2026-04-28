import { m as C, r as N, G as b, ai as Ea, v as Ia, w as Ca, E as Ta, y as K, p as j, u as z, I as Q, d as Z, f as $, M as J, am as aa, an as ea, ao as ta, aq as ma, B, g as _a, R as ka, V as ya, q as h, N as O, b as f, aa as T, aC as H, P as Sa, Q as Ra, aS as ga, aR as Na, az as ba, ay as ra, aH as Pa, aI as ua, X as t } from "../shared/eventCommandCodes.es.js";
import { A as to, C as mo, a as ro, c as so, e as no, h as oo, i as io, j as co, k as po, l as lo, n as Ao, o as Eo, s as Io, t as Co, x as To, z as _o, D as ko, F as yo, H as So, J as Ro, K as go, L as No, O as bo, S as Po, T as uo, U as Lo, W as Mo, Y as vo, Z as ho, _ as Oo, $ as Do, a0 as fo, a1 as Fo, a2 as xo, a3 as Vo, a4 as Go, a5 as Bo, a6 as Ho, a7 as wo, a8 as Yo, a9 as Uo, ab as Wo, ac as Xo, ad as qo, ae as Ko, af as jo, ag as zo, ah as Qo, aj as Zo, ak as $o, al as Jo, ap as ad, ar as ed, as as td, at as md, au as rd, av as sd, aw as nd, ax as od, aA as dd, aB as id, aD as cd, aE as pd, aF as ld, aG as Ad, aJ as Ed, aK as Id, aL as Cd, aM as Td, aN as _d, aO as kd, aP as yd, aQ as Sd, aT as Rd, aU as gd, aV as Nd, aW as bd, aX as Pd, aY as ud } from "../shared/eventCommandCodes.es.js";
import { b5 as P, b7 as u, b8 as S, b6 as L } from "../shared/namedItems.es.js";
import { C as Md, a as vd, b as hd, c as Od, E as Dd, d as fd, e as Fd, f as xd, g as Vd, h as Gd, i as Bd, j as Hd, k as wd, l as Yd, m as Ud, n as Wd, o as Xd, p as qd, q as Kd, r as jd, s as zd, t as Qd, u as Zd, v as $d, w as Jd, x as ai, y as ei, F as ti, z as mi, A as ri, B as si, P as ni, D as oi, G as di, H as ii, I as ci, J as pi, R as li, K as Ai, L as Ei, M as Ii, N as Ci, O as Ti, Q as _i, S as ki, T as yi, U as Si, V as Ri, W as gi, X as Ni, Y as bi, Z as Pi, _ as ui, $ as Li, a0 as Mi, a1 as vi, a2 as hi, a3 as Oi, a4 as Di, a5 as fi, a6 as Fi, a7 as xi, a8 as Vi, a9 as Gi, aa as Bi, ab as Hi, ac as wi, ad as Yi, ae as Ui, af as Wi, ag as Xi, ah as qi, ai as Ki, aj as ji, ak as zi, al as Qi, am as Zi, an as $i, ao as Ji, ap as ac, aq as ec, ar as tc, as as mc, at as rc, au as sc, av as nc, aw as oc, ax as dc, ay as ic, az as cc, aA as pc, aB as lc, aC as Ac, aD as Ec, aE as Ic, aF as Cc, aG as Tc, aH as _c, aI as kc, aJ as yc, aK as Sc, aL as Rc, aM as gc, aN as Nc, aO as bc, aP as Pc, aQ as uc, aR as Lc, aS as Mc, aT as vc, aU as hc, aV as Oc, aW as Dc, aX as fc, aY as Fc, aZ as xc, a_ as Vc, a$ as Gc, b0 as Bc, b1 as Hc, b2 as wc, b3 as Yc, b4 as Uc } from "../shared/namedItems.es.js";
import { g as La, f as Ma } from "../shared/applyFormat.es.js";
import { O as Xc, a as qc, b as Kc, c as jc, d as zc, e as Qc } from "../shared/applyFormat.es.js";
import { c as $c, a as Jc, g as ap, b as ep, d as tp, e as mp, f as rp, h as sp, i as np, j as op, k as dp, l as ip, m as cp, n as pp, o as lp, p as Ap, q as Ep, r as Ip, s as Cp, t as Tp, u as _p, v as kp, w as yp, x as Sp, y as Rp, z as gp, A as Np, B as bp, C as Pp, D as up, E as Lp, F as Mp, G as vp, H as hp, I as Op } from "../shared/makeSystemEx.es.js";
import { m as l } from "../shared/makeAudio.es.js";
import { m as fp, a as Fp } from "../shared/make.es.js";
const Me = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage]
}), ve = (a, e = 0) => ({ code: C, indent: e, parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage] }), he = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), Oe = (a, e = 0) => ({ code: C, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), De = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage]
}), fe = (a, e = 0) => ({ code: C, indent: e, parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage] }), Fe = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), xe = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage]
}), Ve = (a, e = 0) => ({ code: N, indent: e, parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage] }), Ge = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage]
}), Be = (a, e = 0) => ({ code: N, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), He = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), we = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 0, 0, a.level, a.showMessaage] }), Ye = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [0, 0, 1, 0, a.level, a.showMessaage]
}), Ue = (a, e = 0) => ({ code: b, indent: e, parameters: [0, a.actorId, 0, a.skillId] }), We = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [0, a.actorId, 1, a.skillId]
}), Xe = (a, e = 0) => ({ code: b, indent: e, parameters: [0, 0, 0, a.skillId] }), qe = (a, e = 0) => ({ code: b, indent: e, parameters: [0, 0, 1, a.skillId] }), Ke = (a, e = 0) => ({
  code: b,
  indent: e,
  parameters: [1, a.variableId, 0, a.skillId]
}), je = (a, e = 0) => ({ code: b, indent: e, parameters: [1, a.variableId, 1, a.skillId] }), ze = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 0, a.stateId]
}), Qe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 1, a.stateId] }), Ze = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, 0, 0, a.stateId]
}), $e = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Je = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 0, a.stateId] }), at = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 1, a.stateId]
}), et = (a, e = 0) => ({ code: 321, parameters: [a.actorId, a.classId, a.keepExp], indent: e }), tt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), mt = ({ actorId: a = 1, faceIndex: e = 0, faceName: m = "", characterIndex: r = 0, characterName: s = "", battlerName: o = "" } = {}, d = 0) => ({
  code: 322,
  indent: d,
  parameters: [a, s, r, m, e, o]
}), rt = (a, e = 0) => ({ code: Ea, indent: e, parameters: [a.actorId, a.maxLength] }), st = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), nt = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [0, a.targetActorId]
}), ot = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), dt = (a, e = 0) => ({
  code: Ia,
  parameters: [a.actorId, a.name],
  indent: e
}), it = (a, e = 0) => ({ code: Ca, parameters: [a.actorId, a.nickname], indent: e }), ct = (a, e = 0) => ({ code: Ta, parameters: [a.actorId, a.profile], indent: e }), pt = (a, e = 0) => ({
  code: K,
  indent: e,
  parameters: sa(a, 0)
}), lt = (a, e = 0) => ({ code: K, indent: e, parameters: sa(a, 1) }), sa = (a, e) => [a.actorId, a.paramId, e, a.value], g = { direct: 0, variable: 1 }, At = (a, e = 0) => ({
  code: j,
  indent: e,
  parameters: na(0, a)
}), Et = (a, e = 0) => ({ code: j, indent: e, parameters: na(1, a) }), It = (a, e = 0) => ({ code: Q, indent: e, parameters: F(0, a) }), Ct = (a, e = 0) => ({
  code: Q,
  indent: e,
  parameters: F(1, a)
}), Tt = (a, e = 0) => ({ code: z, indent: e, parameters: F(0, a) }), _t = (a, e = 0) => ({
  code: z,
  indent: e,
  parameters: F(1, a)
}), F = (a, e) => [e.targetType === "variable" ? g.variable : g.direct, e.targetType === "each" ? 0 : e.target, a, g[e.operand.mode], e.operand.value], na = (a, e) => [e.targetType === "variable" ? g.variable : g.direct, e.targetType === "each" ? 0 : e.target, a, g[e.operand.mode], e.operand.value, e.allowDeath], kt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), yt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), St = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Rt = (a = 0) => ({ code: 244, indent: a, parameters: [] }), gt = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), va = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, Nt = (a) => va[a], bt = ({ audio: a }) => [ha(l({ name: a })), Oa(l({ name: a })), Da(l({ name: a })), fa(l({ name: a })), Fa(l({ name: a })), xa(l({ name: a })), Va(l({
  name: a
}))], Pt = (a, e) => _(a, l({ name: e })), _ = (a, e, m = 0) => ({
  code: a,
  parameters: [l(e)],
  indent: m
}), ha = (a, e = 0) => _(aa, a, e), Oa = (a, e = 0) => _(ea, a, e), Da = (a, e = 0) => _(ta, a, e), fa = (a, e = 0) => _(ma, a, e), Fa = (a, e = 0) => _(Z, a, e), xa = (a, e = 0) => _(J, a, e), Va = (a, e = 0) => _($, a, e), ut = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), Lt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), Mt = 0, vt = 1, ht = 2, Ot = (a) => a.parameters[0] === 1, Dt = ({ troopId: a = 0, canEscape: e = !1, canLose: m = !1 }, r = 0) => ({
  code: B,
  indent: r,
  parameters: [0, a, e, m]
}), ft = ({ variableId: a = 0, canEscape: e = !1, canLose: m = !1 }, r = 0) => ({ code: B, indent: r, parameters: [1, a, e, m] }), Ft = ({ canEscape: a = !1, canLose: e = !1 }, m = 0) => ({
  code: B,
  indent: m,
  parameters: [2, 0, a, e]
}), Ga = { plus: 0, minus: 1 }, xt = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ga[a ?? "plus"] ?? 0, e ?? 0] }), oa = (a, e = 0) => ({
  code: _a,
  indent: e,
  parameters: [a]
}), Vt = (a = 0) => oa(0, a), Gt = (a = 0) => oa(1, a);
function Bt(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const Ht = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), wt = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), Yt = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), Ut = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), Wt = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Xt = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), qt = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), Kt = (a, e = 0) => ({ code: ka, indent: e, parameters: Ba(a ?? {}) }), jt = (a) => ({ eventId: a[0] }), Ba = (a) => [a.eventId ?? 0], zt = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), Ha = (a) => [a.min, a.max, a.value], Qt = (a, e = 0) => ({ code: ya, indent: e, parameters: Ha(a) }), Zt = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), $t = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Jt = (a) => ({ variableId: a[0], maxDigits: a[1] }), am = (a) => a.parameters[3] === S, em = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), tm = (a, e = 0) => ({ code: h, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), mm = (a, e = 0) => ({ code: h, indent: e, parameters: [a.itemId, P, u, a.value] }), rm = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.itemId, P, S, a.variableId]
}), sm = (a, e = 0) => ({ code: h, indent: e, parameters: [a.itemId, L, u, a.value] }), nm = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.itemId, L, S, a.variableId]
}), om = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), dm = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), im = (a, e = 0) => ({ code: O, indent: e, parameters: [a.weaponId, P, u, a.value, !1] }), cm = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, P, S, a.variableId, !1]
}), pm = (a, e = 0) => ({ code: O, indent: e, parameters: [a.weaponId, L, u, a.value, !1] }), lm = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.weaponId, L, S, a.variableId, !1]
}), Am = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, P, u, a.value, !1] }), Em = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, P, S, a.variableId, !1]
}), Im = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, L, u, a.value, !1] }), Cm = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, L, S, a.variableId, !1]
}), Tm = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), _m = (a) => ({ variableId: a[0], itemType: a[1] }), km = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), ym = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), Sm = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), Rm = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), gm = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Nm = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [a.variableId, 0, 1, a.x, a.y]
}), bm = (a, e = 0) => ({ code: T, indent: e, parameters: [a.variableId, 0, 0, a.x, a.y] }), Pm = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [a.variableId, 1, 1, a.x, a.y]
}), um = (a, e = 0) => ({ code: T, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), Lm = (a, e = 0) => ({ code: T, indent: e, parameters: [a.variableId, 6, 1, a.x, a.y] }), Mm = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [a.variableId, 6, 0, a.x, a.y]
}), vm = (a, e = 0) => ({ code: T, indent: e, parameters: [a.variableId, da[a.layer] ?? 2, 1, a.x, a.y] }), hm = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [a.variableId, da[a.layer] ?? 2, 0, a.x, a.y]
}), da = { 1: 2, 2: 3, 3: 4, 4: 5 }, Om = (a, e = 0) => ({ code: H, indent: e, parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction] }), Dm = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), fm = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction]
}), Fm = (a = 0) => ({ code: 135, parameters: [1], indent: a }), xm = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Vm = (a = 0) => ({
  code: 134,
  parameters: [1],
  indent: a
}), Gm = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Bm = (a = 0) => ({ code: 137, parameters: [1], indent: a }), Hm = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), ia = (a) => [a], wm = (a) => ({ comment: a[0] }), wa = (a, e = 0) => ({ code: Ra, indent: e, parameters: ia(a) }), Ya = (a, e = 0) => ({
  code: Sa,
  indent: e,
  parameters: ia(a)
}), Ym = (a, e = 0) => a.map(((m, r) => r === 0 ? wa(m, e) : Ya(m, e))), Ua = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Um = (a) => ({ speed: a[0], skip: a[1] }), Wm = (a = {}, e = 0) => ({
  code: Na,
  indent: e,
  parameters: Ua(a)
}), Wa = (a = "") => [a], Xm = (a) => ({ content: a[0] }), qm = (a = "", e = 0) => ({ code: ga, indent: e ?? 0, parameters: Wa(a) }), Km = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), jm = (a) => ({
  index: a[0],
  name: a[1]
}), zm = (a) => [a.index ?? 0, a.name ?? ""], Qm = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Zm = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], $m = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), Jm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), ar = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), er = (a) => ({
  filename: a[0]
}), tr = ({ args: a = {}, commandName: e, commandTitle: m = "", pluginName: r }, s = 0) => ({ code: 357, indent: s, parameters: [r, e, m, { ...a }] }), mr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), rr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), sr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), nr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), or = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), dr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), ir = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), cr = ({ pictureId: a = 0, origin: e = 0, name: m = "", x: r = 0, y: s = 0, scaleX: o = 100, scaleY: d = 100, opacity: n = 255, blendMode: k = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, m, e, r, s, o, d, n, k]
}), pr = ({ pictureId: a, origin: e, x: m, y: r, scaleX: s, scaleY: o, opacity: d, blendMode: n, wait: k = !1, easingType: V = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, m, r, s, o, d, n, k, V]
}), lr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Ar = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Er = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Ir = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Cr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Tr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Xa = (a, e = 0) => ({ code: ra, indent: e, parameters: [a] }), qa = (a, e = 0) => ({
  code: ba,
  indent: e,
  parameters: [a]
}), _r = (a, e = 0) => a.map(((m, r) => r === 0 ? Xa(m, e) : qa(m, e))), kr = 1, yr = 0, D = { item: 0, weapon: 1, armors: 2 }, Sr = ({ goods: a, buyOnly: e = !1 }, m = 0) => a.map(((r, s) => {
  const o = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(r) ? 1 : 0;
  return s === 0 ? { code: Pa, indent: m, parameters: [D[r.itemType] ?? D.item, r.id, o, r.customPrice ?? 0, e] } : {
    code: ua,
    indent: m,
    parameters: [D[r.itemType] ?? D.item, r.id, o, r.customPrice ?? 0]
  };
})), Rr = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 0) }), gr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 1)
}), Nr = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 2) }), br = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 3) }), Pr = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 12) }), ur = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 4)
}), Lr = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 5) }), Mr = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 6) }), vr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 7)
}), hr = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 8) }), Or = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 9) }), Dr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 10)
}), fr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 11)
}), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], Fr = 0, xr = 1, Vr = 2, Gr = 3, Br = 4, Hr = 0, wr = 1, Yr = 2, Ur = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 0)
}), Wr = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 1) }), Xr = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 10) }), qr = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 2) }), Kr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 3)
}), jr = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 4) }), zr = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 5) }), Qr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 6)
}), Zr = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 7) }), $r = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 8) }), Jr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 9)
}), p = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], as = (a) => a.parameters[3] === 1, es = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Ka(a)
}), Ka = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], ts = (a, e = 0) => ({ code: t, indent: e, parameters: ja(a) }), ms = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: za(a)
}), rs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Qa(a)
}), ja = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], za = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], Qa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], ss = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Za(a)
}), Za = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], A = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, ns = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E(a, A.X)
}), os = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, A.Y) }), ds = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, A.DIRECTION) }), is = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E(a, A.SCREEN_X)
}), cs = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, A.SCREEN_Y) }), ps = (a, e = 0) => ({ code: t, indent: e, parameters: E({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, A.X) }), ls = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, A.Y)
}), As = (a, e = 0) => ({ code: t, indent: e, parameters: E({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, A.DIRECTION) }), Es = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, A.SCREEN_X)
}), Is = (a, e = 0) => ({ code: t, indent: e, parameters: E({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, A.SCREEN_Y) }), E = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], Cs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: x(a, 0)
}), Ts = (a, e = 0) => ({ code: t, indent: e, parameters: x(a, 1) }), _s = (a, e = 0) => ({ code: t, indent: e, parameters: x(a, 2) }), ks = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: x(a, 3)
}), x = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], ys = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: $a(a)
}), $a = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], Ss = (a, e = 0) => ({ code: ra, indent: e, parameters: [a] }), Rs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: I(a, 0)
}), gs = (a, e = 0) => ({ code: t, indent: e, parameters: I(a, 1) }), Ns = (a, e = 0) => ({ code: t, indent: e, parameters: I(a, 2) }), bs = (a, e = 0) => ({ code: t, indent: e, parameters: I(a, 3) }), Ps = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: I(a, 4)
}), us = (a, e = 0) => ({ code: t, indent: e, parameters: I(a, 5) }), Ls = (a, e = 0) => ({ code: t, indent: e, parameters: I(a, 6) }), Ms = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: I(a, 7)
}), vs = (a, e = 0) => ({ code: t, indent: e, parameters: I(a, 8) }), hs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: I(a, 9)
}), I = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Os = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Ds = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 0) }), fs = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 1) }), Fs = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 2) }), xs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: M(a, 3)
}), Vs = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 4) }), Gs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: M(a, 5)
}), M = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], Bs = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Hs = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), ws = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, l(a.bgm)] }), Ys = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), Us = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), Ws = 0, Xs = 1, qs = 2, Ks = (a) => a.code === aa || a.code === ea || a.code === ta || a.code === ma || a.code === Z || a.code === J || a.code === $, Ja = (a) => [...a], js = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ja(a.parameters)
}), ae = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", zs = (a) => a.parameters.every(ae), w = (a, e) => `\\${a}[${e}]`, Qs = (a, e) => e.map(((m, r) => ({
  text: m,
  controlChar: w(a, r)
}))), Zs = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), $s = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: w("N", e.id)
}))), Js = (a) => a.variables.map(((e, m) => ({ text: e || "", controlChar: w("V", m) }))).filter(((e) => e.text !== "")), an = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), en = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), tn = (a) => ({
  span: a.span ?? 0,
  conditions: ee(a.conditions ?? {}),
  list: a.list ?? []
}), mn = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), ee = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), te = (a = {}) => ({
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
}), me = ({ id: a = 1, name: e = "", pages: m = [], note: r = "", x: s = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: m,
  note: r,
  x: s,
  y: o
}), re = ({ characterIndex: a = 0, characterName: e = "", direction: m = 2, pattern: r = 0, tileId: s = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: m,
  pattern: r,
  tileId: s
}), se = ({ list: a = [], conditions: e = te(), image: m = re(), moveFrequency: r = 5, directionFix: s = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: n = !1, through: k = !1, walkAnime: V = !1, moveSpeed: pa = 3, moveType: la = 0, trigger: Aa = 0 } = {}) => ({
  walkAnime: V,
  stepAnime: n,
  through: k,
  conditions: e,
  list: a,
  directionFix: s,
  image: m,
  priorityType: d,
  moveFrequency: r,
  moveSpeed: pa,
  moveType: la,
  trigger: Aa,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), rn = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), sn = (a) => ne({ events: [me({ pages: [se({ list: a })] })] }), ne = (a = {}) => ({
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
}), nn = (a, e) => a.map(((m) => m ? { ...m, pages: oe(m, e) } : null)), oe = (a, e) => a.pages.map(((m) => ({ ...m, list: e(m.list) }))), de = { actor: { title: "アクター", options: {
  initialEquipments: "初期装備",
  faceImage: "顔画像",
  characterImage: "キャラクター画像",
  svBattlerImage: "SVバトラー画像",
  nickname: "ニックネーム",
  profile: "プロフィール",
  classId: "職業ID",
  initialLevel: "初期レベル",
  maxLevel: "最大レベル"
} }, class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } }, armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: {
  title: "敵キャラ",
  options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
}, item: { title: "アイテム", options: { consumable: "消耗品" } }, skill: { title: "スキル", options: {
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
} }, weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, ie = (a = {}) => ({
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
}), on = (a) => ({
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
}), ce = (a = {}) => ({
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
}), pe = (a = {}) => ({ name: a.name ?? "", id: a.id ?? 0, traits: [], note: a.note ?? "", params: a.params ?? ca(), learnings: a.learnings ?? [], expParams: a.expParams ?? [] }), dn = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? le(a.params) : ca(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), ca = () => [[0], [0], [0], [0], [0], [0], [0], [0]], le = (a) => {
  const e = a.map(((n) => n.atk)), m = a.map(((n) => n.def)), r = a.map(((n) => n.mat)), s = a.map(((n) => n.mdf)), o = a.map(((n) => n.agi)), d = a.map(((n) => n.luk));
  return [a.map(((n) => n.mhp)), a.map(((n) => n.mmp)), e, m, r, s, o, d];
}, Ae = ({ mhp: a = 0, mmp: e = 0, atk: m = 0, def: r = 0, mat: s = 0, mdf: o = 0, agi: d = 0, luk: n = 0 }) => [a, e, m, r, s, o, d, n], cn = (a) => {
  const [e, m, r, s, o, d, n, k] = a;
  return { mhp: e, mmp: m, atk: r, def: s, mat: o, mdf: d, agi: n, luk: k };
}, Ee = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), pn = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Ie = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => Ee())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : Ae({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), Ce = (a = {}) => ({
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
}), i = "{name}", R = "{name} * {value}%", U = "{name} + {value}%", W = "{value}", Te = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: R, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: U, options: {
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
  specialParam: { title: "特殊能力値", format: R, options: {
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
  elementRate: { title: "属性有効度", format: R },
  debuffRate: { title: "弱体有効度", format: R },
  stateRate: { title: "ステート有効度", format: R },
  stateResist: {
    title: "ステート無効",
    format: i
  },
  attackElement: { title: "攻撃属性", format: i },
  attackState: { title: "攻撃ステート", format: U },
  attackSpeed: { title: "攻撃速度補正", format: W },
  attackTimes: {
    title: "攻撃追加回数",
    format: W
  },
  actionPlus: { title: "行動追加", format: R },
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
} }, _e = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, ln = (a, e, m) => {
  const r = La(_e);
  return Ma(e, m, r, a.pattern, ((s) => s.dataId));
}, ke = { title: "ダメージ", options: {} }, Y = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), ye = (a = {}) => ({
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
  damage: Y(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), An = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
  name: { type: "string" },
  id: { type: "integer", minimum: 0 },
  description: { type: "string" },
  iconIndex: { type: "integer", minimum: 0 },
  price: { type: "integer", minimum: 0 },
  note: { type: "string" },
  etypeId: {
    type: "integer",
    minimum: 0
  },
  wtypeId: { type: "integer", minimum: 0 },
  animationId: { type: "integer", minimum: 0 },
  params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
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
} }, En = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, In = 0, Cn = 1, Tn = 2, X = "{name} {value1}%", G = "{value1}% + {value2}", q = "{name} {value1}ターン", v = "{name}", Se = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: q },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: q },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: G },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: v },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: G
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: G },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: v
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: v },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: X },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: v
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: X },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: v }
} }, _n = 0, kn = (a, e, m) => {
  const r = m.find(((o) => o.id === e.dataId)), s = r ? r.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", s);
}, yn = { title: "アイテム", options: { consumable: "消耗品" } }, Sn = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Rn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Re = (a = {}) => ({
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
  damage: Y(a.damage ?? {}),
  effects: [],
  price: 0
}), ge = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: Y(a.damage ?? {}),
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
}), gn = (a) => ie({
  battlerName: a.image,
  characterName: a.image,
  faceName: a.image,
  name: a.text,
  profile: a.text,
  nickname: a.text,
  note: a.note
}), Nn = (a) => pe({ name: a.text, note: a.note }), bn = (a) => ye({ name: a.text, note: a.note, description: a.text }), Pn = (a) => ce({
  name: a.text,
  note: a.note,
  description: a.text
}), un = (a) => Ie({ name: a.text, note: a.note, battlerName: a.image }), Ln = (a) => Ce({
  name: a.text,
  note: a.note,
  message1: a.text,
  message2: a.text,
  message3: a.text,
  message4: a.text
}), Mn = (a) => ge({ name: a.text, note: a.note, iconIndex: 0, description: a.text, message1: a.text, message2: a.text }), vn = (a) => Re({
  name: a.text,
  note: a.note,
  iconIndex: 0,
  description: a.text
}), hn = "data", On = "actor", Dn = "map", fn = "enemy", Fn = "state", xn = "skill", Vn = "item", Gn = "weapon", Bn = "armor", Hn = "class", wn = "common_event", Yn = "troop", Ne = {
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
}, Un = () => ({ rpg: { damage: ke, data: de, traits: Te, itemEffect: Se }, global: Ne }), Wn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), Xn = (a) => ({
  armorTypes: y(a.armorTypes),
  elements: y(a.elements),
  equipTypes: y(a.equipTypes),
  weaponTypes: y(a.weaponTypes),
  skillTypes: y(a.skillTypes),
  variables: y(a.variables),
  switches: y(a.switches)
}), y = (a) => a ? [...a] : [], qn = (a) => a.terms.params.map(((e, m) => ({ name: e, id: m }))), Kn = { title: "オプション", options: {
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
} }, jn = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, zn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Qn = { title: "コマンド", options: {
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
} }, Zn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), $n = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, Jn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  to as ABORT_BATTLE,
  Mt as BATTLE_DIRECT,
  ht as BATTLE_ENCOUNT,
  B as BATTLE_PROCESSING,
  vt as BATTLE_VARIABLE,
  mo as CHANGE_ACTOR_IMAGES,
  ro as CHANGE_ACTOR_STATE,
  f as CHANGE_ARMORS,
  so as CHANGE_BATTLE_BACKGROUND,
  Z as CHANGE_BATTLE_BGM,
  no as CHANGE_CLASS,
  $ as CHANGE_DEFEAT_ME,
  _a as CHANGE_ENCOUNTER,
  oo as CHANGE_ENEMY_HP,
  io as CHANGE_ENEMY_MP,
  co as CHANGE_ENEMY_STATE,
  po as CHANGE_ENEMY_TP,
  lo as CHANGE_EQUIP,
  C as CHANGE_EXP,
  Ao as CHANGE_FORMATION_ACCESS,
  Eo as CHANGE_GOLD,
  j as CHANGE_HP,
  h as CHANGE_ITEMS,
  N as CHANGE_LEVEL,
  Io as CHANGE_MAP_NAME_DISPLAY,
  Co as CHANGE_MENU_ACCESS,
  z as CHANGE_MP,
  Ia as CHANGE_NAME,
  Ca as CHANGE_NICKNAME,
  To as CHANGE_PARALLAX,
  K as CHANGE_PARAMETER,
  _o as CHANGE_PARTY_MEMBER,
  ko as CHANGE_PLAYER_FOLLOWERS,
  Ta as CHANGE_PROFILE,
  yo as CHANGE_SAVE_ACCESS,
  b as CHANGE_SKILL,
  So as CHANGE_TILESET,
  Q as CHANGE_TP,
  Ro as CHANGE_TRANSPARENCY,
  go as CHANGE_VEHICLE_BGM,
  No as CHANGE_VEHICLE_IMAGE,
  J as CHANGE_VICTORY_ME,
  O as CHANGE_WEAPONS,
  bo as CHANGE_WINDOW_COLOR,
  Md as COLLAPS_BOSS,
  vd as COLLAPS_INSTANT,
  hd as COLLAPS_NONE,
  Od as COLLAPS_NORMAL,
  Sa as COMMENT_BODY,
  Ra as COMMENT_HEAD,
  ka as COMMON_EVENT,
  Po as CONDITIONAL_BRANCH,
  uo as CONDITIONAL_BRANCH_ELSE,
  Lo as CONTROL_SELF_SWITCH,
  ya as CONTROL_SWITCHES,
  Mo as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  kr as CUSTOM_PRICE,
  ke as DEFAULT_DAMAGE_LABELS,
  Ne as DEFAULT_GLOBAL_LABELS,
  yn as DEFAULT_ITEM_LABELS,
  Sn as DEFAULT_SKILL_LABELS,
  Kn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  jn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Rn as DEFAULT_USABLE_ITEM_LABELS,
  $n as DIRECTION,
  Dd as EFFECT_ADD_BUFF,
  fd as EFFECT_ADD_DEBUFF,
  Fd as EFFECT_ADD_STATE,
  xd as EFFECT_COMMON_EVENT,
  Vd as EFFECT_GAIN_TP,
  Gd as EFFECT_GROW,
  Bd as EFFECT_LEARN_SKILL,
  Hd as EFFECT_RECOVER_HP,
  wd as EFFECT_RECOVER_MP,
  Yd as EFFECT_REMOVE_BUFF,
  Ud as EFFECT_REMOVE_DEBUFF,
  Wd as EFFECT_REMOVE_STATE,
  Xd as EFFECT_SPECIAL,
  vo as ENEMY_APPEAR,
  ho as ENEMY_RECOVER_ALL,
  Oo as ENEMY_TRANSFORM,
  Do as ERASE_EVENT,
  fo as ERASE_PICTURE,
  Fo as EXIT_EVENT_PROCESSING,
  qd as EXTRA_PARAM_CEV,
  Kd as EXTRA_PARAM_CNT,
  jd as EXTRA_PARAM_CRI,
  zd as EXTRA_PARAM_EVA,
  Qd as EXTRA_PARAM_HIT,
  Zd as EXTRA_PARAM_HRG,
  $d as EXTRA_PARAM_MEV,
  Jd as EXTRA_PARAM_MRF,
  ai as EXTRA_PARAM_MRG,
  ei as EXTRA_PARAM_TRG,
  xo as FADEIN_SCREEN,
  Vo as FADEOUT_BGM,
  Go as FADEOUT_BGS,
  Bo as FADEOUT_SCREEN,
  ti as FLAG_ID_AUTO_BATTLE,
  mi as FLAG_ID_GUARD,
  ri as FLAG_ID_PRESERVE_TP,
  si as FLAG_ID_SUBSTITUTE,
  Ho as FLASH_SCREEN,
  wo as FORCE_ACTION,
  Yo as GAME_OVER,
  Uo as GATHER_FOLLOWERS,
  T as GET_LOCATION_INFO,
  Wo as GET_ONOFF_VEHICLE,
  In as HITTYPE_CERTAIN,
  Tn as HITTYPE_MAGICAL,
  Cn as HITTYPE_PHYSICAL,
  Xo as INPUT_NUMBER,
  qo as LABEL,
  En as LABELS_DATA_WEAPON,
  zn as LABELS_SYSTEM_BATTLER_PARAMS,
  Qn as LABELS_SYSTEM_GAME_COMMANDS,
  Ko as LABEL_JUMP,
  de as LABEL_SET_DATA,
  Se as LABEL_SET_ITEM_EFFECT,
  Te as LABEL_SET_TRAIT,
  jo as LOOP,
  zo as LOOP_BREAK,
  A as MAP_CHARACTOR_PARAM,
  hn as MODULE_DATA,
  Qo as MOVE_PICTURE,
  Ea as NAME_INPUT_PROCESSING,
  yr as NORMAL_PRICE,
  Zo as NO_OPERATION,
  $o as OPEN_MENU_SCREEN,
  Jo as OPEN_SAVE_SCREEN,
  Fr as OPERAND_CONSTANT,
  Gr as OPERAND_GAMEDATA,
  Vr as OPERAND_RANDOM,
  Br as OPERAND_SCRIPT,
  xr as OPERAND_VARIABLE,
  Xc as OPERATION_ADD,
  qc as OPERATION_DIVIDE,
  Kc as OPERATION_MOD,
  jc as OPERATION_MULTIPLY,
  zc as OPERATION_SET,
  Qc as OPERATION_SUBTRACT,
  ni as PARTY_ABILITY_CANCEL_SURPRISE,
  oi as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  di as PARTY_ABILITY_ENCOUNTER_HALF,
  ii as PARTY_ABILITY_ENCOUNTER_NONE,
  ci as PARTY_ABILITY_GOLD_DOUBLE,
  pi as PARTY_ABILITY_RAISE_PREEMPTIVE,
  aa as PLAY_BGM,
  ea as PLAY_BGS,
  ta as PLAY_ME,
  ad as PLAY_MOVIE,
  ma as PLAY_SE,
  ed as PLUGIN_COMMAND_MV,
  td as PLUGIN_COMMAND_MZ,
  md as RECOVER_ALL,
  li as REGULAR_PARAM_AGI,
  Ai as REGULAR_PARAM_ATK,
  Ei as REGULAR_PARAM_DEF,
  Ii as REGULAR_PARAM_LUK,
  Ci as REGULAR_PARAM_MATK,
  Ti as REGULAR_PARAM_MAX_HP,
  _i as REGULAR_PARAM_MAX_MP,
  ki as REGULAR_PARAM_MDEF,
  rd as RESUME_BGM,
  sd as RETURN_TO_TITLE_SCREEN,
  nd as ROTATE_PICTURE,
  od as SAVE_BGM,
  An as SCHEMA_DATA_WEAPON,
  ra as SCRIPT_EVAL,
  ba as SCRIPT_EVAL_BODY,
  dd as SCROLL_MAP,
  id as SELECT_ITEM,
  H as SET_EVENT_LOCATION,
  cd as SET_MOVEMENT_ROUTE,
  pd as SET_VEHICLE_LOCATION,
  ld as SET_WEATHER_EFFECT,
  Ad as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  ua as SHOP_PROCESSING_BODY,
  Ed as SHOW_ANIMATION,
  Id as SHOW_BALLOON_ICON,
  Cd as SHOW_BATTLE_ANIMATION,
  Td as SHOW_CHOICES,
  _d as SHOW_CHOICES_ITEM,
  kd as SHOW_MESSAGE,
  yd as SHOW_MESSAGE_BODY,
  Sd as SHOW_PICTURE,
  Na as SHOW_SCROLLING_TEXT,
  ga as SHOW_SCROLLING_TEXT_BODY,
  Rd as SKIP,
  _n as SPECIAL_EFFECT_ESCAPE,
  yi as SPECIAL_PARAM_EXR,
  Si as SPECIAL_PARAM_FDR,
  Ri as SPECIAL_PARAM_GRD,
  gi as SPECIAL_PARAM_MCR,
  Ni as SPECIAL_PARAM_MDR,
  bi as SPECIAL_PARAM_PDR,
  Pi as SPECIAL_PARAM_PHA,
  ui as SPECIAL_PARAM_REC,
  Li as SPECIAL_PARAM_TCR,
  Mi as SPECIAL_PARAM_TGR,
  On as SRC_DATA_ACTOR,
  Bn as SRC_DATA_ARMOR,
  Hn as SRC_DATA_CLASS,
  wn as SRC_DATA_COMMON_EVNET,
  fn as SRC_DATA_ENEMY,
  Vn as SRC_DATA_ITEMS,
  Dn as SRC_DATA_MAP,
  xn as SRC_DATA_SKILL,
  Fn as SRC_DATA_STATE,
  Yn as SRC_DATA_TROOP,
  Gn as SRC_DATA_WEAPON,
  gd as STOP_SE,
  Nd as TINT_PICTURE,
  bd as TINT_SCREEN,
  vi as TRAIT_ACTION_PLUS,
  hi as TRAIT_ATTACK_ELEMENT,
  Oi as TRAIT_ATTACK_SKILL,
  Di as TRAIT_ATTACK_SPEED,
  fi as TRAIT_ATTACK_STATE,
  Fi as TRAIT_ATTACK_TIMES,
  xi as TRAIT_COLLAPSE_TYPE,
  Vi as TRAIT_DEBUFF_RATE,
  Gi as TRAIT_ELEMENT_RATE,
  Bi as TRAIT_EQUIP_ARMOR_TYPE,
  Hi as TRAIT_EQUIP_LOCK,
  wi as TRAIT_EQUIP_SEAL,
  Yi as TRAIT_EQUIP_WEAPON_TYPE,
  Ui as TRAIT_PARAM,
  Wi as TRAIT_PARTY_ABILITY,
  Xi as TRAIT_SKILL_ADD,
  qi as TRAIT_SKILL_SEAL,
  Ki as TRAIT_SKILL_TYPE_ADD,
  ji as TRAIT_SKILL_TYPE_SEAL,
  zi as TRAIT_SLOT_TYPE,
  Qi as TRAIT_SPARAM,
  Zi as TRAIT_SPECIAL_FLAG,
  $i as TRAIT_STATE_RATE,
  Ji as TRAIT_STATE_RESIST,
  ac as TRAIT_XPARAM,
  Pd as TRANSFER_PLAYER,
  Yr as TYPE_ARMOR,
  Hr as TYPE_ITEM,
  wr as TYPE_WEAPON,
  Os as VARIABLE_SRC_LAST,
  qs as VEHICLE_AIRSHIP,
  Ws as VEHICLE_BOAT,
  Xs as VEHICLE_SHIP,
  ud as WAIT,
  Nt as assetDirectoryName,
  ec as buildNoteFromNormalized,
  Jm as cloneChoices,
  js as cloneEventCommand,
  Ja as cloneParameters,
  tc as collapsOptionsToArray,
  wm as convertCommentArrayToObject,
  $c as convertTermsMessageMZtoMV,
  $s as createActorControlChars,
  w as createControlCharFormat,
  Jc as createMenuCommandState,
  mc as createNoteEntity,
  Js as createSystemVariableControlChars,
  rc as defineGameDataSources,
  sc as defineSystemItems,
  nc as defineTraitCollapseType,
  oc as defineTraitExtraParam,
  dc as defineTraitItems,
  ic as defineTraitPartyAbility,
  cc as defineTraitRegularParam,
  pc as defineTraitSpecialFlag,
  lc as defineTraitSpecialParam,
  Ac as extraParamName,
  Ec as extraParamsToArray,
  Jn as extractFileName,
  kn as formatItemEffectText,
  ln as formatTraitText,
  em as fromArrayChangeItems,
  om as fromArrayChangeWeapons,
  jt as fromArrayCommonEvent,
  zt as fromArrayControlSwitches,
  Ht as fromArrayEnemyTransform,
  Jt as fromArrayInputNumber,
  er as fromArrayPlayMovie,
  mr as fromArrayPluginCommandMZ,
  Xm as fromArrayScrollingTextBody,
  Um as fromArrayScrollingTextHeader,
  _m as fromArraySelectItem,
  Qm as fromArraySetupChoice,
  jm as fromArraySetupChoiceItem,
  Ic as fromArrayShowMessageHeader,
  Qs as fromStringArray,
  ap as getArmorCategoryEnabled,
  Cc as getArmorTypes,
  Zs as getControlChars,
  Tc as getElementTypes,
  ep as getEquipCommandEnabled,
  _c as getEquipTypes,
  tp as getFormationCommandEnabled,
  mp as getItemCategoryEnabled,
  rp as getItemCommandEnabled,
  kc as getItemIdFromItemCommand,
  sp as getKeyItemCategoryEnabled,
  yc as getNoteValue,
  qn as getParamNames,
  np as getSaveCommandEnabled,
  op as getSkillCommandEnabled,
  Sc as getSkillTypes,
  dp as getStatusCommandEnabled,
  Rc as getSwitches,
  gc as getVariableNames,
  ip as getWeaponCategoryEnabled,
  Nc as getWeaponTypes,
  zs as isCloneableCommand,
  Ks as isCommandAnyAudio,
  Ot as isCommandBattleProcessingVariable,
  as as isCommandOperandVariables,
  bc as isUsingVariableItemCommand,
  am as isUsingVaribleCommandChangingItems,
  Un as labelsRegistry,
  ie as makeActorData,
  gn as makeActorDataFromTestSoruce,
  ce as makeArmorData,
  Pn as makeArmorDataFromTestSoruce,
  Pt as makeAudioCommand,
  tn as makeBattleEventPage,
  cp as makeBooleanOptions,
  pe as makeClassData,
  dn as makeClassDataEx,
  Nn as makeClassDataFromTestSoruce,
  Ut as makeCommandAddEachEnemyState,
  wt as makeCommandAddEnemyState,
  rr as makeCommandAddPartyMember,
  Je as makeCommandAddStateByVariable,
  Ze as makeCommandAddStateEachActor,
  ze as makeCommandAddStateTargetActor,
  _ as makeCommandAudioAny,
  Dt as makeCommandBattleProcessingDirect,
  Ft as makeCommandBattleProcessingEncount,
  ft as makeCommandBattleProcessingVariable,
  mt as makeCommandChangeActorImages,
  dt as makeCommandChangeActorName,
  it as makeCommandChangeActorNickName,
  ct as makeCommandChangeActorProfile,
  Fa as makeCommandChangeBattleBGM,
  Lt as makeCommandChangeBattleBackground,
  et as makeCommandChangeClass,
  Va as makeCommandChangeDefeatME,
  oa as makeCommandChangeEncounter,
  tt as makeCommandChangeEquip,
  tm as makeCommandChangeItems,
  km as makeCommandChangeParallax,
  gm as makeCommandChangeTileset,
  ws as makeCommandChangeVehicleBGM,
  Hs as makeCommandChangeVehicleImage,
  xa as makeCommandChangeVictoryME,
  dm as makeCommandChangeWeapons,
  Ya as makeCommandCommentBody,
  wa as makeCommandCommentHeader,
  Kt as makeCommandCommonEvent,
  Qt as makeCommandControlSwitches,
  xt as makeCommandControlTimer,
  lt as makeCommandDecreaseActorParam,
  Gt as makeCommandDisableEncounter,
  Bm as makeCommandDisableFormationAccess,
  Fm as makeCommandDisableMenuAccess,
  Vm as makeCommandDisableSaveAccess,
  Vt as makeCommandEnableEncounter,
  Hm as makeCommandEnableFormationAccess,
  xm as makeCommandEnableMenuAccess,
  Gm as makeCommandEnableSaveAccess,
  qt as makeCommandEnemyRecoverAll,
  Xt as makeCommandEnemyRecoverAllEach,
  Bt as makeCommandEnemyTransform,
  Ar as makeCommandFadeInScreen,
  yt as makeCommandFadeOutBGM,
  gt as makeCommandFadeOutBGS,
  Er as makeCommandFadeOutScreen,
  Ir as makeCommandFlashScreen,
  We as makeCommandForgetSkill,
  je as makeCommandForgetSkillByVariable,
  qe as makeCommandForgetSkillEachActor,
  At as makeCommandGainActorHP,
  Tt as makeCommandGainActorMP,
  It as makeCommandGainActorTP,
  Am as makeCommandGainArmor,
  Em as makeCommandGainArmorByVariable,
  he as makeCommandGainExpByVariable,
  Me as makeCommandGainExpDirect,
  Fe as makeCommandGainExpTargetAndOperandVariable,
  De as makeCommandGainExpTargetVariable,
  nr as makeCommandGainGold,
  dr as makeCommandGainGoldByVariable,
  mm as makeCommandGainItem,
  rm as makeCommandGainItemV,
  im as makeCommandGainWeapon,
  cm as makeCommandGainWeaponV,
  Pm as makeCommandGetEventIdXY,
  um as makeCommandGetEventIdXYDirect,
  Bs as makeCommandGetOnOffVehicle,
  Lm as makeCommandGetRegionId,
  Mm as makeCommandGetRegionIdDirect,
  Nm as makeCommandGetTerrainTag,
  bm as makeCommandGetTerrainTagDirect,
  vm as makeCommandGetTileId,
  hm as makeCommandGetTileIdDirect,
  Rm as makeCommandHideMapName,
  pt as makeCommandIncreaseActorParam,
  Zt as makeCommandInputNumber,
  Ue as makeCommandLearnSkill,
  Ke as makeCommandLearnSkillByVariable,
  Xe as makeCommandLearnSkillEachActor,
  Ge as makeCommandLevelDownActor,
  He as makeCommandLevelDownActorByVariable,
  Ye as makeCommandLevelDownEachActors,
  Ve as makeCommandLevelUpActor,
  Be as makeCommandLevelUpActorByVariable,
  we as makeCommandLevelUpEachActors,
  Et as makeCommandLoseActorHP,
  _t as makeCommandLoseActorMP,
  Ct as makeCommandLoseActorTP,
  Im as makeCommandLoseArmor,
  Cm as makeCommandLoseArmorByVariable,
  Oe as makeCommandLoseExpByVariable,
  ve as makeCommandLoseExpDirect,
  xe as makeCommandLoseExpTargetAndOperandVariable,
  fe as makeCommandLoseExpTargetVariable,
  or as makeCommandLoseGold,
  ir as makeCommandLoseGoldByVariable,
  sm as makeCommandLoseItem,
  nm as makeCommandLoseItemV,
  pm as makeCommandLoseWeapon,
  lm as makeCommandLoseWeaponV,
  pr as makeCommandMovePicture,
  rt as makeCommandNameInputProcessing,
  ha as makeCommandPlayBGM,
  Oa as makeCommandPlayBGS,
  Da as makeCommandPlayME,
  ar as makeCommandPlayMovie,
  fa as makeCommandPlaySE,
  tr as makeCommandPluginCommandMZ,
  st as makeCommandRecoverAllEachActors,
  nt as makeCommandRecoverAllTargetActor,
  ot as makeCommandRecoverAllTargetActorByVariable,
  Qe as makeCommandRemoveActorTargetState,
  Wt as makeCommandRemoveEachEnemyState,
  Yt as makeCommandRemoveEnemyState,
  sr as makeCommandRemovePartyMember,
  at as makeCommandRemoveStateByVariable,
  $e as makeCommandRemoveStateEachActors,
  Rt as makeCommandResumeBGM,
  St as makeCommandSaveBGM,
  _r as makeCommandScriptArray,
  qa as makeCommandScriptBody,
  Xa as makeCommandScriptHeader,
  ym as makeCommandScrollMap,
  qm as makeCommandScrollingTextBody,
  Wm as makeCommandScrollingTextHeader,
  Tm as makeCommandSelectItem,
  Om as makeCommandSetEventLocationDirect,
  fm as makeCommandSetEventLocationExchange,
  Dm as makeCommandSetEventLocationVariable,
  Ys as makeCommandSetVehicleLocation,
  Us as makeCommandSetVehicleLocationFromVariables,
  lr as makeCommandSetWeatherEffect,
  $m as makeCommandSetupChoice,
  Cr as makeCommandShakeScreen,
  Sr as makeCommandShopProcessing,
  kt as makeCommandShowAnimation,
  ut as makeCommandShowBalloonIcon,
  Km as makeCommandShowChoiceItem,
  Sm as makeCommandShowMapName,
  Pc as makeCommandShowMessage,
  uc as makeCommandShowMessageBody,
  cr as makeCommandShowPicture,
  Tr as makeCommandTintScreen,
  Fs as makeCommandVariableDataLastActorId,
  Dr as makeCommandVariableFromActorAgi,
  Mr as makeCommandVariableFromActorAtk,
  gr as makeCommandVariableFromActorCurrentExp,
  Nr as makeCommandVariableFromActorCurrentHp,
  Rr as makeCommandVariableFromActorCurrentLevel,
  br as makeCommandVariableFromActorCurrentMp,
  Pr as makeCommandVariableFromActorCurrentTp,
  vr as makeCommandVariableFromActorDef,
  fr as makeCommandVariableFromActorLuk,
  hr as makeCommandVariableFromActorMat,
  ur as makeCommandVariableFromActorMaxHp,
  Lr as makeCommandVariableFromActorMaxMp,
  Or as makeCommandVariableFromActorMdf,
  rs as makeCommandVariableFromArmor,
  ss as makeCommandVariableFromConstant,
  $r as makeCommandVariableFromEnemyAgi,
  jr as makeCommandVariableFromEnemyAtk,
  Ur as makeCommandVariableFromEnemyCurrentHp,
  Wr as makeCommandVariableFromEnemyCurrentMp,
  Xr as makeCommandVariableFromEnemyCurrentTp,
  zr as makeCommandVariableFromEnemyDef,
  Jr as makeCommandVariableFromEnemyLuk,
  Qr as makeCommandVariableFromEnemyMat,
  qr as makeCommandVariableFromEnemyMaxHp,
  Kr as makeCommandVariableFromEnemyMaxMp,
  Zr as makeCommandVariableFromEnemyMdf,
  ts as makeCommandVariableFromItemData,
  xs as makeCommandVariableFromLastEnemyIndex,
  Vs as makeCommandVariableFromLastTargetActorId,
  Gs as makeCommandVariableFromLastTargetEnemyIndex,
  fs as makeCommandVariableFromLastUsedItemId,
  Ds as makeCommandVariableFromLastUsedSkillId,
  ds as makeCommandVariableFromMapCharactorDirection,
  is as makeCommandVariableFromMapCharactorScreenX,
  cs as makeCommandVariableFromMapCharactorScreenY,
  ns as makeCommandVariableFromMapCharactorX,
  os as makeCommandVariableFromMapCharactorY,
  Cs as makeCommandVariableFromMapId,
  As as makeCommandVariableFromMapPlayerDirection,
  Es as makeCommandVariableFromMapPlayerScreenX,
  Is as makeCommandVariableFromMapPlayerScreenY,
  ps as makeCommandVariableFromMapPlayerX,
  ls as makeCommandVariableFromMapPlayerY,
  _s as makeCommandVariableFromPartyGold,
  Ts as makeCommandVariableFromPartySize,
  ks as makeCommandVariableFromPartySteps,
  ys as makeCommandVariableFromRandom,
  Ss as makeCommandVariableFromScript,
  Ms as makeCommandVariableFromSystemBattleCount,
  hs as makeCommandVariableFromSystemEscapeCount,
  Ns as makeCommandVariableFromSystemGold,
  Rs as makeCommandVariableFromSystemMapId,
  gs as makeCommandVariableFromSystemPartyMemberCount,
  Ps as makeCommandVariableFromSystemPlayTime,
  Ls as makeCommandVariableFromSystemSaveCount,
  bs as makeCommandVariableFromSystemSteps,
  us as makeCommandVariableFromSystemTimer,
  vs as makeCommandVariableFromSystemWinCount,
  es as makeCommandVariableFromVariable,
  ms as makeCommandVariableFromWeapon,
  ia as makeCommentArray,
  Ym as makeCommentCommandArray,
  an as makeCommonEventData,
  Y as makeDamage,
  Xn as makeDataNames,
  Ee as makeDropItem,
  pp as makeEditorSetting,
  pn as makeEnemyAction,
  Ie as makeEnemyData,
  un as makeEnemyDataFromTestSoruce,
  te as makeEventPageCondition,
  Wn as makeGameInitial,
  lp as makeItemCategories,
  Ap as makeItemCategoriesFromArray,
  Re as makeItemData,
  vn as makeItemDataFromTestSoruce,
  ne as makeMapData,
  sn as makeMapDataFromSingleEvent,
  me as makeMapEvent,
  re as makeMapEventIamge,
  se as makeMapEventPage,
  rn as makeMapFileInfo,
  fp as makeMapInfoData,
  Fp as makeMapName,
  Ep as makeMenuCommandsEnabled,
  Ip as makeMenuCommandsEnabledFromArray,
  Ae as makeParamArray,
  Cp as makeParamNamesArray,
  Tp as makeParamNamesFromArray,
  ge as makeSkillData,
  Mn as makeSkillDataFromTestSoruce,
  _p as makeSoundsArray,
  kp as makeSoundsObject,
  Ce as makeStateData,
  Ln as makeStateDataFromTestSoruce,
  yp as makeSystemAdvanced,
  Sp as makeSystemData,
  Rp as makeSystemDataFromMV,
  gp as makeSystemDataMV,
  Np as makeTermsBasic,
  bp as makeTermsBasicFromArray,
  Pp as makeTermsCommandArray,
  up as makeTermsCommandArrayWithNulls,
  Lp as makeTermsCommandFromArray,
  Mp as makeTermsMessages,
  bt as makeTestAudioCommands,
  vp as makeTestSystemData,
  hp as makeTitleCommandWindow,
  en as makeTroopData,
  ee as makeTroopEventConditions,
  mn as makeTroopMember,
  Op as makeVehicleData,
  ye as makeWeaponData,
  bn as makeWeaponDataFromTestSoruce,
  on as normalizeDataActor,
  Lc as normalizeNote,
  cn as paramArrayToObject,
  Mc as partyAbilityToArray,
  vc as readNote,
  hc as readNoteEx,
  Oc as readNoteObject,
  Dc as regularParamName,
  fc as regularParamsToArray,
  Fc as replaceNote,
  xc as replaceNoteWithHandlers,
  nn as repleaceMapEventCommands,
  Vc as resolveItemEffectLabels,
  Gc as resolveTraitLabels,
  Bc as setNoteValue,
  Hc as specialFlagToArray,
  wc as specialParamName,
  Yc as specialParamsToArray,
  Zn as textAndDesc,
  Ba as toArrayCommonEvent,
  Ha as toArrayControlSwitches,
  $t as toArrayInputNumber,
  Wa as toArrayScrollingTextBody,
  Ua as toArrayScrollingTextHeader,
  Zm as toArraySetupChoice,
  zm as toArraySetupChoiceItem,
  Uc as toArrayShowMessageHeader
};
