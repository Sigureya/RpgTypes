import { m as I, r as g, G as N, ai as Ea, v as Ia, w as Ca, E as Ta, y as K, p as j, u as z, I as Q, d as Z, f as $, M as J, am as aa, an as ea, ao as ta, aq as ra, B as G, g as _a, R as ya, V as ka, q as v, N as h, b as f, aa as C, aC as B, P as Sa, Q as Ra, aS as ga, aR as Na, az as ba, ay as ma, aH as Pa, aI as La, X as t } from "../shared/eventCommandCodes.es.js";
import { A as Kn, C as jn, a as zn, c as Qn, e as Zn, h as $n, i as Jn, j as ao, k as eo, l as to, n as ro, o as mo, s as so, t as no, x as oo, z as io, D as po, F as co, H as lo, J as Ao, K as Eo, L as Io, O as Co, S as To, T as _o, U as yo, W as ko, Y as So, Z as Ro, _ as go, $ as No, a0 as bo, a1 as Po, a2 as Lo, a3 as Mo, a4 as uo, a5 as vo, a6 as ho, a7 as Oo, a8 as fo, a9 as Do, ab as Fo, ac as Vo, ad as xo, ae as Go, af as Bo, ag as Ho, ah as wo, aj as Yo, ak as Uo, al as Wo, ap as Xo, ar as qo, as as Ko, at as jo, au as zo, av as Qo, aw as Zo, ax as $o, aA as Jo, aB as ad, aD as ed, aE as td, aF as rd, aG as md, aJ as sd, aK as nd, aL as od, aM as dd, aN as id, aO as pd, aP as cd, aQ as ld, aT as Ad, aU as Ed, aV as Id, aW as Cd, aX as Td, aY as _d } from "../shared/eventCommandCodes.es.js";
import { b5 as b, b7 as P, b8 as k, b6 as L } from "../shared/namedItems.es.js";
import { C as kd, a as Sd, b as Rd, c as gd, E as Nd, d as bd, e as Pd, f as Ld, g as Md, h as ud, i as vd, j as hd, k as Od, l as fd, m as Dd, n as Fd, o as Vd, p as xd, q as Gd, r as Bd, s as Hd, t as wd, u as Yd, v as Ud, w as Wd, x as Xd, y as qd, F as Kd, z as jd, A as zd, B as Qd, P as Zd, D as $d, G as Jd, H as ai, I as ei, J as ti, R as ri, K as mi, L as si, M as ni, N as oi, O as di, Q as ii, S as pi, T as ci, U as li, V as Ai, W as Ei, X as Ii, Y as Ci, Z as Ti, _ as _i, $ as yi, a0 as ki, a1 as Si, a2 as Ri, a3 as gi, a4 as Ni, a5 as bi, a6 as Pi, a7 as Li, a8 as Mi, a9 as ui, aa as vi, ab as hi, ac as Oi, ad as fi, ae as Di, af as Fi, ag as Vi, ah as xi, ai as Gi, aj as Bi, ak as Hi, al as wi, am as Yi, an as Ui, ao as Wi, ap as Xi, aq as qi, ar as Ki, as as ji, at as zi, au as Qi, av as Zi, aw as $i, ax as Ji, ay as ap, az as ep, aA as tp, aB as rp, aC as mp, aD as sp, aE as np, aF as op, aG as dp, aH as ip, aI as pp, aJ as cp, aK as lp, aL as Ap, aM as Ep, aN as Ip, aO as Cp, aP as Tp, aQ as _p, aR as yp, aS as kp, aT as Sp, aU as Rp, aV as gp, aW as Np, aX as bp, aY as Pp, aZ as Lp, a_ as Mp, a$ as up, b0 as vp, b1 as hp, b2 as Op, b3 as fp, b4 as Dp } from "../shared/namedItems.es.js";
import { g as Ma, f as ua } from "../shared/applyFormat.es.js";
import { O as Vp, a as xp, b as Gp, c as Bp, d as Hp, e as wp } from "../shared/applyFormat.es.js";
import { c as Up, a as Wp, g as Xp, b as qp, d as Kp, e as jp, f as zp, h as Qp, i as Zp, j as $p, k as Jp, l as ac, m as ec, n as tc, o as rc, p as mc, q as sc, r as nc, s as oc, t as dc, u as ic, v as pc, w as cc, x as lc, y as Ac, z as Ec, A as Ic, B as Cc, C as Tc, D as _c, E as yc, F as kc, G as Sc, H as Rc } from "../shared/make.es.js";
import { m as H } from "../shared/makeAudio.es.js";
import { m as Nc, a as bc } from "../shared/make.es2.js";
const Ee = (a, e = 0) => ({
  code: I,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage]
}), Ie = (a, e = 0) => ({ code: I, indent: e, parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage] }), Ce = (a, e = 0) => ({
  code: I,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), Te = (a, e = 0) => ({ code: I, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), _e = (a, e = 0) => ({
  code: I,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage]
}), ye = (a, e = 0) => ({ code: I, indent: e, parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage] }), ke = (a, e = 0) => ({
  code: I,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Se = (a, e = 0) => ({
  code: I,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage]
}), Re = (a, e = 0) => ({ code: g, indent: e, parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage] }), ge = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage]
}), Ne = (a, e = 0) => ({ code: g, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), be = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), Pe = (a, e = 0) => ({ code: g, indent: e, parameters: [0, 0, 0, 0, a.level, a.showMessaage] }), Le = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [0, 0, 1, 0, a.level, a.showMessaage]
}), Me = (a, e = 0) => ({ code: N, indent: e, parameters: [0, a.actorId, 0, a.skillId] }), ue = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [0, a.actorId, 1, a.skillId]
}), ve = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 0, a.skillId] }), he = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 1, a.skillId] }), Oe = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [1, a.variableId, 0, a.skillId]
}), fe = (a, e = 0) => ({ code: N, indent: e, parameters: [1, a.variableId, 1, a.skillId] }), De = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 0, a.stateId]
}), Fe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 1, a.stateId] }), Ve = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, 0, 0, a.stateId]
}), xe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Ge = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 0, a.stateId] }), Be = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 1, a.stateId]
}), He = (a, e = 0) => ({ code: 321, parameters: [a.actorId, a.classId, a.keepExp], indent: e }), we = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Ye = ({ actorId: a = 1, faceIndex: e = 0, faceName: r = "", characterIndex: m = 0, characterName: s = "", battlerName: o = "" } = {}, d = 0) => ({
  code: 322,
  indent: d,
  parameters: [a, s, m, r, e, o]
}), Ue = (a, e = 0) => ({ code: Ea, indent: e, parameters: [a.actorId, a.maxLength] }), We = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), Xe = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [0, a.targetActorId]
}), qe = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Ke = (a, e = 0) => ({
  code: Ia,
  parameters: [a.actorId, a.name],
  indent: e
}), je = (a, e = 0) => ({ code: Ca, parameters: [a.actorId, a.nickname], indent: e }), ze = (a, e = 0) => ({ code: Ta, parameters: [a.actorId, a.profile], indent: e }), Qe = (a, e = 0) => ({
  code: K,
  indent: e,
  parameters: sa(a, 0)
}), Ze = (a, e = 0) => ({ code: K, indent: e, parameters: sa(a, 1) }), sa = (a, e) => [a.actorId, a.paramId, e, a.value], R = { direct: 0, variable: 1 }, $e = (a, e = 0) => ({
  code: j,
  indent: e,
  parameters: na(0, a)
}), Je = (a, e = 0) => ({ code: j, indent: e, parameters: na(1, a) }), at = (a, e = 0) => ({ code: Q, indent: e, parameters: D(0, a) }), et = (a, e = 0) => ({
  code: Q,
  indent: e,
  parameters: D(1, a)
}), tt = (a, e = 0) => ({ code: z, indent: e, parameters: D(0, a) }), rt = (a, e = 0) => ({
  code: z,
  indent: e,
  parameters: D(1, a)
}), D = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value], na = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value, e.allowDeath], mt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), st = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), nt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), ot = (a = 0) => ({ code: 244, indent: a, parameters: [] }), dt = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), va = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, it = (a) => va[a], pt = (a, e) => T(a, H({ name: e })), T = (a, e, r = 0) => ({
  code: a,
  parameters: [H(e)],
  indent: r
}), ct = (a, e = 0) => T(aa, a, e), lt = (a, e = 0) => T(ea, a, e), At = (a, e = 0) => T(ta, a, e), Et = (a, e = 0) => T(ra, a, e), It = (a, e = 0) => T(Z, a, e), Ct = (a, e = 0) => T(J, a, e), Tt = (a, e = 0) => T($, a, e), _t = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), yt = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), kt = 0, St = 1, Rt = 2, gt = (a) => a.parameters[0] === 1, Nt = ({ troopId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({
  code: G,
  indent: m,
  parameters: [0, a, e, r]
}), bt = ({ variableId: a = 0, canEscape: e = !1, canLose: r = !1 }, m = 0) => ({ code: G, indent: m, parameters: [1, a, e, r] }), Pt = ({ canEscape: a = !1, canLose: e = !1 }, r = 0) => ({
  code: G,
  indent: r,
  parameters: [2, 0, a, e]
}), ha = { plus: 0, minus: 1 }, Lt = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ha[a ?? "plus"] ?? 0, e ?? 0] }), oa = (a, e = 0) => ({
  code: _a,
  indent: e,
  parameters: [a]
}), Mt = (a = 0) => oa(0, a), ut = (a = 0) => oa(1, a);
function vt(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const ht = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Ot = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), ft = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), Dt = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), Ft = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Vt = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), xt = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), Gt = (a, e = 0) => ({ code: ya, indent: e, parameters: Oa(a ?? {}) }), Bt = (a) => ({ eventId: a[0] }), Oa = (a) => [a.eventId ?? 0], Ht = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), fa = (a) => [a.min, a.max, a.value], wt = (a, e = 0) => ({ code: ka, indent: e, parameters: fa(a) }), Yt = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Ut = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Wt = (a) => ({ variableId: a[0], maxDigits: a[1] }), Xt = (a) => a.parameters[3] === k, qt = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), Kt = (a, e = 0) => ({ code: v, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), jt = (a, e = 0) => ({ code: v, indent: e, parameters: [a.itemId, b, P, a.value] }), zt = (a, e = 0) => ({
  code: v,
  indent: e,
  parameters: [a.itemId, b, k, a.variableId]
}), Qt = (a, e = 0) => ({ code: v, indent: e, parameters: [a.itemId, L, P, a.value] }), Zt = (a, e = 0) => ({
  code: v,
  indent: e,
  parameters: [a.itemId, L, k, a.variableId]
}), $t = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Jt = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), ar = (a, e = 0) => ({ code: h, indent: e, parameters: [a.weaponId, b, P, a.value, !1] }), er = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.weaponId, b, k, a.variableId, !1]
}), tr = (a, e = 0) => ({ code: h, indent: e, parameters: [a.weaponId, L, P, a.value, !1] }), rr = (a, e = 0) => ({
  code: h,
  indent: e,
  parameters: [a.weaponId, L, k, a.variableId, !1]
}), mr = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, b, P, a.value, !1] }), sr = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, b, k, a.variableId, !1]
}), nr = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, L, P, a.value, !1] }), or = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, L, k, a.variableId, !1]
}), dr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), ir = (a) => ({ variableId: a[0], itemType: a[1] }), pr = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), cr = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), lr = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), Ar = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), Er = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), Ir = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, 0, 1, a.x, a.y]
}), Cr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, 0, 0, a.x, a.y] }), Tr = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, 1, 1, a.x, a.y]
}), _r = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), yr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, 6, 1, a.x, a.y] }), kr = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, 6, 0, a.x, a.y]
}), Sr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, da[a.layer] ?? 2, 1, a.x, a.y] }), Rr = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, da[a.layer] ?? 2, 0, a.x, a.y]
}), da = { 1: 2, 2: 3, 3: 4, 4: 5 }, gr = (a, e = 0) => ({ code: B, indent: e, parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction] }), Nr = (a, e = 0) => ({
  code: B,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), br = (a, e = 0) => ({
  code: B,
  indent: e,
  parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction]
}), Pr = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Lr = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Mr = (a = 0) => ({
  code: 134,
  parameters: [1],
  indent: a
}), ur = (a = 0) => ({ code: 134, parameters: [0], indent: a }), vr = (a = 0) => ({ code: 137, parameters: [1], indent: a }), hr = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), ia = (a) => [a], Or = (a) => ({ comment: a[0] }), Da = (a, e = 0) => ({ code: Ra, indent: e, parameters: ia(a) }), Fa = (a, e = 0) => ({
  code: Sa,
  indent: e,
  parameters: ia(a)
}), fr = (a, e = 0) => a.map(((r, m) => m === 0 ? Da(r, e) : Fa(r, e))), Va = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Dr = (a) => ({ speed: a[0], skip: a[1] }), Fr = (a = {}, e = 0) => ({
  code: Na,
  indent: e,
  parameters: Va(a)
}), xa = (a = "") => [a], Vr = (a) => ({ content: a[0] }), xr = (a = "", e = 0) => ({ code: ga, indent: e ?? 0, parameters: xa(a) }), Gr = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Br = (a) => ({
  index: a[0],
  name: a[1]
}), Hr = (a) => [a.index ?? 0, a.name ?? ""], wr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Yr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Ur = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), Wr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Xr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), qr = (a) => ({
  filename: a[0]
}), Kr = ({ args: a = {}, commandName: e, commandTitle: r = "", pluginName: m }, s = 0) => ({ code: 357, indent: s, parameters: [m, e, r, { ...a }] }), jr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), zr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Qr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Zr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), $r = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Jr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), am = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), em = ({ pictureId: a = 0, origin: e = 0, name: r = "", x: m = 0, y: s = 0, scaleX: o = 100, scaleY: d = 100, opacity: n = 255, blendMode: _ = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, r, e, m, s, o, d, n, _]
}), tm = ({ pictureId: a, origin: e, x: r, y: m, scaleX: s, scaleY: o, opacity: d, blendMode: n, wait: _ = !1, easingType: V = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, r, m, s, o, d, n, _, V]
}), rm = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), mm = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), sm = (a = 0) => ({ code: 221, indent: a, parameters: [] }), nm = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), om = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), dm = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), Ga = (a, e = 0) => ({ code: ma, indent: e, parameters: [a] }), Ba = (a, e = 0) => ({
  code: ba,
  indent: e,
  parameters: [a]
}), im = (a, e = 0) => a.map(((r, m) => m === 0 ? Ga(r, e) : Ba(r, e))), pm = 1, cm = 0, O = { item: 0, weapon: 1, armors: 2 }, lm = ({ goods: a, buyOnly: e = !1 }, r = 0) => a.map(((m, s) => {
  const o = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(m) ? 1 : 0;
  return s === 0 ? { code: Pa, indent: r, parameters: [O[m.itemType] ?? O.item, m.id, o, m.customPrice ?? 0, e] } : {
    code: La,
    indent: r,
    parameters: [O[m.itemType] ?? O.item, m.id, o, m.customPrice ?? 0]
  };
})), Am = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 0) }), Em = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 1)
}), Im = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 2) }), Cm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 3) }), Tm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 12) }), _m = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 4)
}), ym = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 5) }), km = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 6) }), Sm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 7)
}), Rm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 8) }), gm = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 9) }), Nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 10)
}), bm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 11)
}), p = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], Pm = 0, Lm = 1, Mm = 2, um = 3, vm = 4, hm = 0, Om = 1, fm = 2, Dm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 0)
}), Fm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 1) }), Vm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 10) }), xm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 2) }), Gm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 3)
}), Bm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 4) }), Hm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 5) }), wm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 6)
}), Ym = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 7) }), Um = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 8) }), Wm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 9)
}), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], Xm = (a) => a.parameters[3] === 1, qm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Ha(a)
}), Ha = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], Km = (a, e = 0) => ({ code: t, indent: e, parameters: wa(a) }), jm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Ya(a)
}), zm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Ua(a)
}), wa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], Ya = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], Ua = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], Qm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Wa(a)
}), Wa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], l = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, Zm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A(a, l.X)
}), $m = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, l.Y) }), Jm = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, l.DIRECTION) }), as = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A(a, l.SCREEN_X)
}), es = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, l.SCREEN_Y) }), ts = (a, e = 0) => ({ code: t, indent: e, parameters: A({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, l.X) }), rs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.Y)
}), ms = (a, e = 0) => ({ code: t, indent: e, parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.DIRECTION) }), ss = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.SCREEN_X)
}), ns = (a, e = 0) => ({ code: t, indent: e, parameters: A({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, l.SCREEN_Y) }), A = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], os = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: F(a, 0)
}), ds = (a, e = 0) => ({ code: t, indent: e, parameters: F(a, 1) }), is = (a, e = 0) => ({ code: t, indent: e, parameters: F(a, 2) }), ps = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: F(a, 3)
}), F = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], cs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Xa(a)
}), Xa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], ls = (a, e = 0) => ({ code: ma, indent: e, parameters: [a] }), As = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E(a, 0)
}), Es = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, 1) }), Is = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, 2) }), Cs = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, 3) }), Ts = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E(a, 4)
}), _s = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, 5) }), ys = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, 6) }), ks = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E(a, 7)
}), Ss = (a, e = 0) => ({ code: t, indent: e, parameters: E(a, 8) }), Rs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: E(a, 9)
}), E = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], gs = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Ns = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 0) }), bs = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 1) }), Ps = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 2) }), Ls = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: M(a, 3)
}), Ms = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 4) }), us = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: M(a, 5)
}), M = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], vs = (a = 0) => ({ code: 206, indent: a, parameters: [] }), hs = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Os = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, H(a.bgm)] }), fs = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), Ds = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), Fs = 0, Vs = 1, xs = 2, Gs = (a) => a.code === aa || a.code === ea || a.code === ta || a.code === ra || a.code === Z || a.code === J || a.code === $, qa = (a) => [...a], Bs = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: qa(a.parameters)
}), Ka = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Hs = (a) => a.parameters.every(Ka), w = (a, e) => `\\${a}[${e}]`, ws = (a, e) => e.map(((r, m) => ({
  text: r,
  controlChar: w(a, m)
}))), Ys = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), Us = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: w("N", e.id)
}))), Ws = (a) => a.variables.map(((e, r) => ({ text: e || "", controlChar: w("V", r) }))).filter(((e) => e.text !== "")), Xs = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), qs = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), Ks = (a) => ({
  span: a.span ?? 0,
  conditions: ja(a.conditions ?? {}),
  list: a.list ?? []
}), js = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), ja = (a = {}) => ({
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
}), Qa = ({ id: a = 1, name: e = "", pages: r = [], note: m = "", x: s = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: r,
  note: m,
  x: s,
  y: o
}), Za = ({ characterIndex: a = 0, characterName: e = "", direction: r = 2, pattern: m = 0, tileId: s = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: r,
  pattern: m,
  tileId: s
}), $a = ({ list: a = [], conditions: e = za(), image: r = Za(), moveFrequency: m = 5, directionFix: s = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: n = !1, through: _ = !1, walkAnime: V = !1, moveSpeed: ca = 3, moveType: la = 0, trigger: Aa = 0 } = {}) => ({
  walkAnime: V,
  stepAnime: n,
  through: _,
  conditions: e,
  list: a,
  directionFix: s,
  image: r,
  priorityType: d,
  moveFrequency: m,
  moveSpeed: ca,
  moveType: la,
  trigger: Aa,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), zs = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Qs = (a) => Ja({ events: [Qa({ pages: [$a({ list: a })] })] }), Ja = (a = {}) => ({
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
}), Zs = (a, e) => a.map(((r) => r ? { ...r, pages: ae(r, e) } : null)), ae = (a, e) => a.pages.map(((r) => ({ ...r, list: e(r.list) }))), ee = { actor: { title: "アクター", options: {
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
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, te = {
  title: "ダメージ",
  options: {}
}, Y = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), $s = (a = {}) => ({
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
}), Js = (a) => ({
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
}), an = (a = {}) => ({
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
}), en = (a = {}) => ({ name: a.name ?? "", id: a.id ?? 0, traits: [], note: a.note ?? "", params: a.params ?? pa(), learnings: a.learnings ?? [], expParams: a.expParams ?? [] }), tn = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? re(a.params) : pa(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), pa = () => [[0], [0], [0], [0], [0], [0], [0], [0]], re = (a) => {
  const e = a.map(((n) => n.atk)), r = a.map(((n) => n.def)), m = a.map(((n) => n.mat)), s = a.map(((n) => n.mdf)), o = a.map(((n) => n.agi)), d = a.map(((n) => n.luk));
  return [a.map(((n) => n.mhp)), a.map(((n) => n.mmp)), e, r, m, s, o, d];
}, me = ({ mhp: a = 0, mmp: e = 0, atk: r = 0, def: m = 0, mat: s = 0, mdf: o = 0, agi: d = 0, luk: n = 0 }) => [a, e, r, m, s, o, d, n], rn = (a) => {
  const [e, r, m, s, o, d, n, _] = a;
  return { mhp: e, mmp: r, atk: m, def: s, mat: o, mdf: d, agi: n, luk: _ };
}, se = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), mn = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), sn = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  battlerHue: a.battlerHue ?? 0,
  dropItems: a.dropItems?.map((() => se())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : me({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), nn = (a = {}) => ({
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
}), i = "{name}", S = "{name} * {value}%", U = "{name} + {value}%", W = "{value}", ne = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: S, options: {
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
  specialParam: { title: "特殊能力値", format: S, options: {
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
  elementRate: { title: "属性有効度", format: S },
  debuffRate: { title: "弱体有効度", format: S },
  stateRate: { title: "ステート有効度", format: S },
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
  actionPlus: { title: "行動追加", format: S },
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
} }, oe = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, on = (a, e, r) => {
  const m = Ma(oe);
  return ua(e, r, m, a.pattern, ((s) => s.dataId));
}, dn = (a = {}) => ({
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
}), pn = {
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
}, cn = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ln = 0, An = 1, En = 2, X = "{name} {value1}%", x = "{value1}% + {value2}", q = "{name} {value1}ターン", u = "{name}", de = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: q },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: q },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: x },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: u },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: x
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: x },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: u
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: u },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: X },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: u
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: X },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: u }
} }, In = 0, Cn = (a, e, r) => {
  const m = r.find(((o) => o.id === e.dataId)), s = m ? m.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", s);
}, Tn = { title: "アイテム", options: { consumable: "消耗品" } }, _n = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, yn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, kn = (a = {}) => ({
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
}), Sn = (a = {}) => ({
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
}), Rn = "data", gn = "actor", Nn = "map", bn = "enemy", Pn = "state", Ln = "skill", Mn = "item", un = "weapon", vn = "armor", hn = "class", On = "common_event", fn = "troop", ie = {
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
}, Dn = () => ({ rpg: { damage: te, data: ee, traits: ne, itemEffect: de }, global: ie }), Fn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), Vn = (a) => ({
  armorTypes: y(a.armorTypes),
  elements: y(a.elements),
  equipTypes: y(a.equipTypes),
  weaponTypes: y(a.weaponTypes),
  skillTypes: y(a.skillTypes),
  variables: y(a.variables),
  switches: y(a.switches)
}), y = (a) => a ? [...a] : [], xn = (a) => a.terms.params.map(((e, r) => ({ name: e, id: r }))), Gn = { title: "オプション", options: {
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
} }, Bn = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Hn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, wn = { title: "コマンド", options: {
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
} }, Yn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Un = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, Wn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Kn as ABORT_BATTLE,
  kt as BATTLE_DIRECT,
  Rt as BATTLE_ENCOUNT,
  G as BATTLE_PROCESSING,
  St as BATTLE_VARIABLE,
  jn as CHANGE_ACTOR_IMAGES,
  zn as CHANGE_ACTOR_STATE,
  f as CHANGE_ARMORS,
  Qn as CHANGE_BATTLE_BACKGROUND,
  Z as CHANGE_BATTLE_BGM,
  Zn as CHANGE_CLASS,
  $ as CHANGE_DEFEAT_ME,
  _a as CHANGE_ENCOUNTER,
  $n as CHANGE_ENEMY_HP,
  Jn as CHANGE_ENEMY_MP,
  ao as CHANGE_ENEMY_STATE,
  eo as CHANGE_ENEMY_TP,
  to as CHANGE_EQUIP,
  I as CHANGE_EXP,
  ro as CHANGE_FORMATION_ACCESS,
  mo as CHANGE_GOLD,
  j as CHANGE_HP,
  v as CHANGE_ITEMS,
  g as CHANGE_LEVEL,
  so as CHANGE_MAP_NAME_DISPLAY,
  no as CHANGE_MENU_ACCESS,
  z as CHANGE_MP,
  Ia as CHANGE_NAME,
  Ca as CHANGE_NICKNAME,
  oo as CHANGE_PARALLAX,
  K as CHANGE_PARAMETER,
  io as CHANGE_PARTY_MEMBER,
  po as CHANGE_PLAYER_FOLLOWERS,
  Ta as CHANGE_PROFILE,
  co as CHANGE_SAVE_ACCESS,
  N as CHANGE_SKILL,
  lo as CHANGE_TILESET,
  Q as CHANGE_TP,
  Ao as CHANGE_TRANSPARENCY,
  Eo as CHANGE_VEHICLE_BGM,
  Io as CHANGE_VEHICLE_IMAGE,
  J as CHANGE_VICTORY_ME,
  h as CHANGE_WEAPONS,
  Co as CHANGE_WINDOW_COLOR,
  kd as COLLAPS_BOSS,
  Sd as COLLAPS_INSTANT,
  Rd as COLLAPS_NONE,
  gd as COLLAPS_NORMAL,
  Sa as COMMENT_BODY,
  Ra as COMMENT_HEAD,
  ya as COMMON_EVENT,
  To as CONDITIONAL_BRANCH,
  _o as CONDITIONAL_BRANCH_ELSE,
  yo as CONTROL_SELF_SWITCH,
  ka as CONTROL_SWITCHES,
  ko as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  pm as CUSTOM_PRICE,
  te as DEFAULT_DAMAGE_LABELS,
  ie as DEFAULT_GLOBAL_LABELS,
  Tn as DEFAULT_ITEM_LABELS,
  _n as DEFAULT_SKILL_LABELS,
  Gn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Bn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  yn as DEFAULT_USABLE_ITEM_LABELS,
  Un as DIRECTION,
  Nd as EFFECT_ADD_BUFF,
  bd as EFFECT_ADD_DEBUFF,
  Pd as EFFECT_ADD_STATE,
  Ld as EFFECT_COMMON_EVENT,
  Md as EFFECT_GAIN_TP,
  ud as EFFECT_GROW,
  vd as EFFECT_LEARN_SKILL,
  hd as EFFECT_RECOVER_HP,
  Od as EFFECT_RECOVER_MP,
  fd as EFFECT_REMOVE_BUFF,
  Dd as EFFECT_REMOVE_DEBUFF,
  Fd as EFFECT_REMOVE_STATE,
  Vd as EFFECT_SPECIAL,
  So as ENEMY_APPEAR,
  Ro as ENEMY_RECOVER_ALL,
  go as ENEMY_TRANSFORM,
  No as ERASE_EVENT,
  bo as ERASE_PICTURE,
  Po as EXIT_EVENT_PROCESSING,
  xd as EXTRA_PARAM_CEV,
  Gd as EXTRA_PARAM_CNT,
  Bd as EXTRA_PARAM_CRI,
  Hd as EXTRA_PARAM_EVA,
  wd as EXTRA_PARAM_HIT,
  Yd as EXTRA_PARAM_HRG,
  Ud as EXTRA_PARAM_MEV,
  Wd as EXTRA_PARAM_MRF,
  Xd as EXTRA_PARAM_MRG,
  qd as EXTRA_PARAM_TRG,
  Lo as FADEIN_SCREEN,
  Mo as FADEOUT_BGM,
  uo as FADEOUT_BGS,
  vo as FADEOUT_SCREEN,
  Kd as FLAG_ID_AUTO_BATTLE,
  jd as FLAG_ID_GUARD,
  zd as FLAG_ID_PRESERVE_TP,
  Qd as FLAG_ID_SUBSTITUTE,
  ho as FLASH_SCREEN,
  Oo as FORCE_ACTION,
  fo as GAME_OVER,
  Do as GATHER_FOLLOWERS,
  C as GET_LOCATION_INFO,
  Fo as GET_ONOFF_VEHICLE,
  ln as HITTYPE_CERTAIN,
  En as HITTYPE_MAGICAL,
  An as HITTYPE_PHYSICAL,
  Vo as INPUT_NUMBER,
  xo as LABEL,
  cn as LABELS_DATA_WEAPON,
  Hn as LABELS_SYSTEM_BATTLER_PARAMS,
  wn as LABELS_SYSTEM_GAME_COMMANDS,
  Go as LABEL_JUMP,
  ee as LABEL_SET_DATA,
  de as LABEL_SET_ITEM_EFFECT,
  ne as LABEL_SET_TRAIT,
  Bo as LOOP,
  Ho as LOOP_BREAK,
  l as MAP_CHARACTOR_PARAM,
  Rn as MODULE_DATA,
  wo as MOVE_PICTURE,
  Ea as NAME_INPUT_PROCESSING,
  cm as NORMAL_PRICE,
  Yo as NO_OPERATION,
  Uo as OPEN_MENU_SCREEN,
  Wo as OPEN_SAVE_SCREEN,
  Pm as OPERAND_CONSTANT,
  um as OPERAND_GAMEDATA,
  Mm as OPERAND_RANDOM,
  vm as OPERAND_SCRIPT,
  Lm as OPERAND_VARIABLE,
  Vp as OPERATION_ADD,
  xp as OPERATION_DIVIDE,
  Gp as OPERATION_MOD,
  Bp as OPERATION_MULTIPLY,
  Hp as OPERATION_SET,
  wp as OPERATION_SUBTRACT,
  Zd as PARTY_ABILITY_CANCEL_SURPRISE,
  $d as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Jd as PARTY_ABILITY_ENCOUNTER_HALF,
  ai as PARTY_ABILITY_ENCOUNTER_NONE,
  ei as PARTY_ABILITY_GOLD_DOUBLE,
  ti as PARTY_ABILITY_RAISE_PREEMPTIVE,
  aa as PLAY_BGM,
  ea as PLAY_BGS,
  ta as PLAY_ME,
  Xo as PLAY_MOVIE,
  ra as PLAY_SE,
  qo as PLUGIN_COMMAND_MV,
  Ko as PLUGIN_COMMAND_MZ,
  jo as RECOVER_ALL,
  ri as REGULAR_PARAM_AGI,
  mi as REGULAR_PARAM_ATK,
  si as REGULAR_PARAM_DEF,
  ni as REGULAR_PARAM_LUK,
  oi as REGULAR_PARAM_MATK,
  di as REGULAR_PARAM_MAX_HP,
  ii as REGULAR_PARAM_MAX_MP,
  pi as REGULAR_PARAM_MDEF,
  zo as RESUME_BGM,
  Qo as RETURN_TO_TITLE_SCREEN,
  Zo as ROTATE_PICTURE,
  $o as SAVE_BGM,
  pn as SCHEMA_DATA_WEAPON,
  ma as SCRIPT_EVAL,
  ba as SCRIPT_EVAL_BODY,
  Jo as SCROLL_MAP,
  ad as SELECT_ITEM,
  B as SET_EVENT_LOCATION,
  ed as SET_MOVEMENT_ROUTE,
  td as SET_VEHICLE_LOCATION,
  rd as SET_WEATHER_EFFECT,
  md as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  La as SHOP_PROCESSING_BODY,
  sd as SHOW_ANIMATION,
  nd as SHOW_BALLOON_ICON,
  od as SHOW_BATTLE_ANIMATION,
  dd as SHOW_CHOICES,
  id as SHOW_CHOICES_ITEM,
  pd as SHOW_MESSAGE,
  cd as SHOW_MESSAGE_BODY,
  ld as SHOW_PICTURE,
  Na as SHOW_SCROLLING_TEXT,
  ga as SHOW_SCROLLING_TEXT_BODY,
  Ad as SKIP,
  In as SPECIAL_EFFECT_ESCAPE,
  ci as SPECIAL_PARAM_EXR,
  li as SPECIAL_PARAM_FDR,
  Ai as SPECIAL_PARAM_GRD,
  Ei as SPECIAL_PARAM_MCR,
  Ii as SPECIAL_PARAM_MDR,
  Ci as SPECIAL_PARAM_PDR,
  Ti as SPECIAL_PARAM_PHA,
  _i as SPECIAL_PARAM_REC,
  yi as SPECIAL_PARAM_TCR,
  ki as SPECIAL_PARAM_TGR,
  gn as SRC_DATA_ACTOR,
  vn as SRC_DATA_ARMOR,
  hn as SRC_DATA_CLASS,
  On as SRC_DATA_COMMON_EVNET,
  bn as SRC_DATA_ENEMY,
  Mn as SRC_DATA_ITEMS,
  Nn as SRC_DATA_MAP,
  Ln as SRC_DATA_SKILL,
  Pn as SRC_DATA_STATE,
  fn as SRC_DATA_TROOP,
  un as SRC_DATA_WEAPON,
  Ed as STOP_SE,
  Id as TINT_PICTURE,
  Cd as TINT_SCREEN,
  Si as TRAIT_ACTION_PLUS,
  Ri as TRAIT_ATTACK_ELEMENT,
  gi as TRAIT_ATTACK_SKILL,
  Ni as TRAIT_ATTACK_SPEED,
  bi as TRAIT_ATTACK_STATE,
  Pi as TRAIT_ATTACK_TIMES,
  Li as TRAIT_COLLAPSE_TYPE,
  Mi as TRAIT_DEBUFF_RATE,
  ui as TRAIT_ELEMENT_RATE,
  vi as TRAIT_EQUIP_ARMOR_TYPE,
  hi as TRAIT_EQUIP_LOCK,
  Oi as TRAIT_EQUIP_SEAL,
  fi as TRAIT_EQUIP_WEAPON_TYPE,
  Di as TRAIT_PARAM,
  Fi as TRAIT_PARTY_ABILITY,
  Vi as TRAIT_SKILL_ADD,
  xi as TRAIT_SKILL_SEAL,
  Gi as TRAIT_SKILL_TYPE_ADD,
  Bi as TRAIT_SKILL_TYPE_SEAL,
  Hi as TRAIT_SLOT_TYPE,
  wi as TRAIT_SPARAM,
  Yi as TRAIT_SPECIAL_FLAG,
  Ui as TRAIT_STATE_RATE,
  Wi as TRAIT_STATE_RESIST,
  Xi as TRAIT_XPARAM,
  Td as TRANSFER_PLAYER,
  fm as TYPE_ARMOR,
  hm as TYPE_ITEM,
  Om as TYPE_WEAPON,
  gs as VARIABLE_SRC_LAST,
  xs as VEHICLE_AIRSHIP,
  Fs as VEHICLE_BOAT,
  Vs as VEHICLE_SHIP,
  _d as WAIT,
  it as assetDirectoryName,
  qi as buildNoteFromNormalized,
  Wr as cloneChoices,
  Bs as cloneEventCommand,
  qa as cloneParameters,
  Ki as collapsOptionsToArray,
  Or as convertCommentArrayToObject,
  Up as convertTermsMessageMZtoMV,
  Us as createActorControlChars,
  w as createControlCharFormat,
  Wp as createMenuCommandState,
  ji as createNoteEntity,
  Ws as createSystemVariableControlChars,
  zi as defineGameDataSources,
  Qi as defineSystemItems,
  Zi as defineTraitCollapseType,
  $i as defineTraitExtraParam,
  Ji as defineTraitItems,
  ap as defineTraitPartyAbility,
  ep as defineTraitRegularParam,
  tp as defineTraitSpecialFlag,
  rp as defineTraitSpecialParam,
  mp as extraParamName,
  sp as extraParamsToArray,
  Wn as extractFileName,
  Cn as formatItemEffectText,
  on as formatTraitText,
  qt as fromArrayChangeItems,
  $t as fromArrayChangeWeapons,
  Bt as fromArrayCommonEvent,
  Ht as fromArrayControlSwitches,
  ht as fromArrayEnemyTransform,
  Wt as fromArrayInputNumber,
  qr as fromArrayPlayMovie,
  jr as fromArrayPluginCommandMZ,
  Vr as fromArrayScrollingTextBody,
  Dr as fromArrayScrollingTextHeader,
  ir as fromArraySelectItem,
  wr as fromArraySetupChoice,
  Br as fromArraySetupChoiceItem,
  np as fromArrayShowMessageHeader,
  ws as fromStringArray,
  Xp as getArmorCategoryEnabled,
  op as getArmorTypes,
  Ys as getControlChars,
  dp as getElementTypes,
  qp as getEquipCommandEnabled,
  ip as getEquipTypes,
  Kp as getFormationCommandEnabled,
  jp as getItemCategoryEnabled,
  zp as getItemCommandEnabled,
  pp as getItemIdFromItemCommand,
  Qp as getKeyItemCategoryEnabled,
  cp as getNoteValue,
  xn as getParamNames,
  Zp as getSaveCommandEnabled,
  $p as getSkillCommandEnabled,
  lp as getSkillTypes,
  Jp as getStatusCommandEnabled,
  Ap as getSwitches,
  Ep as getVariableNames,
  ac as getWeaponCategoryEnabled,
  Ip as getWeaponTypes,
  Hs as isCloneableCommand,
  Gs as isCommandAnyAudio,
  gt as isCommandBattleProcessingVariable,
  Xm as isCommandOperandVariables,
  Cp as isUsingVariableItemCommand,
  Xt as isUsingVaribleCommandChangingItems,
  Dn as labelsRegistry,
  $s as makeActorData,
  an as makeArmorData,
  pt as makeAudioCommand,
  Ks as makeBattleEventPage,
  ec as makeBooleanOptions,
  en as makeClassData,
  tn as makeClassDataEx,
  Dt as makeCommandAddEachEnemyState,
  Ot as makeCommandAddEnemyState,
  zr as makeCommandAddPartyMember,
  Ge as makeCommandAddStateByVariable,
  Ve as makeCommandAddStateEachActor,
  De as makeCommandAddStateTargetActor,
  T as makeCommandAudioAny,
  Nt as makeCommandBattleProcessingDirect,
  Pt as makeCommandBattleProcessingEncount,
  bt as makeCommandBattleProcessingVariable,
  Ye as makeCommandChangeActorImages,
  Ke as makeCommandChangeActorName,
  je as makeCommandChangeActorNickName,
  ze as makeCommandChangeActorProfile,
  It as makeCommandChangeBattleBGM,
  yt as makeCommandChangeBattleBackground,
  He as makeCommandChangeClass,
  Tt as makeCommandChangeDefeatME,
  oa as makeCommandChangeEncounter,
  we as makeCommandChangeEquip,
  Kt as makeCommandChangeItems,
  pr as makeCommandChangeParallax,
  Er as makeCommandChangeTileset,
  Os as makeCommandChangeVehicleBGM,
  hs as makeCommandChangeVehicleImage,
  Ct as makeCommandChangeVictoryME,
  Jt as makeCommandChangeWeapons,
  Fa as makeCommandCommentBody,
  Da as makeCommandCommentHeader,
  Gt as makeCommandCommonEvent,
  wt as makeCommandControlSwitches,
  Lt as makeCommandControlTimer,
  Ze as makeCommandDecreaseActorParam,
  ut as makeCommandDisableEncounter,
  vr as makeCommandDisableFormationAccess,
  Pr as makeCommandDisableMenuAccess,
  Mr as makeCommandDisableSaveAccess,
  Mt as makeCommandEnableEncounter,
  hr as makeCommandEnableFormationAccess,
  Lr as makeCommandEnableMenuAccess,
  ur as makeCommandEnableSaveAccess,
  xt as makeCommandEnemyRecoverAll,
  Vt as makeCommandEnemyRecoverAllEach,
  vt as makeCommandEnemyTransform,
  mm as makeCommandFadeInScreen,
  st as makeCommandFadeOutBGM,
  dt as makeCommandFadeOutBGS,
  sm as makeCommandFadeOutScreen,
  nm as makeCommandFlashScreen,
  ue as makeCommandForgetSkill,
  fe as makeCommandForgetSkillByVariable,
  he as makeCommandForgetSkillEachActor,
  $e as makeCommandGainActorHP,
  tt as makeCommandGainActorMP,
  at as makeCommandGainActorTP,
  mr as makeCommandGainArmor,
  sr as makeCommandGainArmorByVariable,
  Ce as makeCommandGainExpByVariable,
  Ee as makeCommandGainExpDirect,
  ke as makeCommandGainExpTargetAndOperandVariable,
  _e as makeCommandGainExpTargetVariable,
  Zr as makeCommandGainGold,
  Jr as makeCommandGainGoldByVariable,
  jt as makeCommandGainItem,
  zt as makeCommandGainItemV,
  ar as makeCommandGainWeapon,
  er as makeCommandGainWeaponV,
  Tr as makeCommandGetEventIdXY,
  _r as makeCommandGetEventIdXYDirect,
  vs as makeCommandGetOnOffVehicle,
  yr as makeCommandGetRegionId,
  kr as makeCommandGetRegionIdDirect,
  Ir as makeCommandGetTerrainTag,
  Cr as makeCommandGetTerrainTagDirect,
  Sr as makeCommandGetTileId,
  Rr as makeCommandGetTileIdDirect,
  Ar as makeCommandHideMapName,
  Qe as makeCommandIncreaseActorParam,
  Yt as makeCommandInputNumber,
  Me as makeCommandLearnSkill,
  Oe as makeCommandLearnSkillByVariable,
  ve as makeCommandLearnSkillEachActor,
  ge as makeCommandLevelDownActor,
  be as makeCommandLevelDownActorByVariable,
  Le as makeCommandLevelDownEachActors,
  Re as makeCommandLevelUpActor,
  Ne as makeCommandLevelUpActorByVariable,
  Pe as makeCommandLevelUpEachActors,
  Je as makeCommandLoseActorHP,
  rt as makeCommandLoseActorMP,
  et as makeCommandLoseActorTP,
  nr as makeCommandLoseArmor,
  or as makeCommandLoseArmorByVariable,
  Te as makeCommandLoseExpByVariable,
  Ie as makeCommandLoseExpDirect,
  Se as makeCommandLoseExpTargetAndOperandVariable,
  ye as makeCommandLoseExpTargetVariable,
  $r as makeCommandLoseGold,
  am as makeCommandLoseGoldByVariable,
  Qt as makeCommandLoseItem,
  Zt as makeCommandLoseItemV,
  tr as makeCommandLoseWeapon,
  rr as makeCommandLoseWeaponV,
  tm as makeCommandMovePicture,
  Ue as makeCommandNameInputProcessing,
  ct as makeCommandPlayBGM,
  lt as makeCommandPlayBGS,
  At as makeCommandPlayME,
  Xr as makeCommandPlayMovie,
  Et as makeCommandPlaySE,
  Kr as makeCommandPluginCommandMZ,
  We as makeCommandRecoverAllEachActors,
  Xe as makeCommandRecoverAllTargetActor,
  qe as makeCommandRecoverAllTargetActorByVariable,
  Fe as makeCommandRemoveActorTargetState,
  Ft as makeCommandRemoveEachEnemyState,
  ft as makeCommandRemoveEnemyState,
  Qr as makeCommandRemovePartyMember,
  Be as makeCommandRemoveStateByVariable,
  xe as makeCommandRemoveStateEachActors,
  ot as makeCommandResumeBGM,
  nt as makeCommandSaveBGM,
  im as makeCommandScriptArray,
  Ba as makeCommandScriptBody,
  Ga as makeCommandScriptHeader,
  cr as makeCommandScrollMap,
  xr as makeCommandScrollingTextBody,
  Fr as makeCommandScrollingTextHeader,
  dr as makeCommandSelectItem,
  gr as makeCommandSetEventLocationDirect,
  br as makeCommandSetEventLocationExchange,
  Nr as makeCommandSetEventLocationVariable,
  fs as makeCommandSetVehicleLocation,
  Ds as makeCommandSetVehicleLocationFromVariables,
  rm as makeCommandSetWeatherEffect,
  Ur as makeCommandSetupChoice,
  om as makeCommandShakeScreen,
  lm as makeCommandShopProcessing,
  mt as makeCommandShowAnimation,
  _t as makeCommandShowBalloonIcon,
  Gr as makeCommandShowChoiceItem,
  lr as makeCommandShowMapName,
  Tp as makeCommandShowMessage,
  _p as makeCommandShowMessageBody,
  em as makeCommandShowPicture,
  dm as makeCommandTintScreen,
  Ps as makeCommandVariableDataLastActorId,
  Nm as makeCommandVariableFromActorAgi,
  km as makeCommandVariableFromActorAtk,
  Em as makeCommandVariableFromActorCurrentExp,
  Im as makeCommandVariableFromActorCurrentHp,
  Am as makeCommandVariableFromActorCurrentLevel,
  Cm as makeCommandVariableFromActorCurrentMp,
  Tm as makeCommandVariableFromActorCurrentTp,
  Sm as makeCommandVariableFromActorDef,
  bm as makeCommandVariableFromActorLuk,
  Rm as makeCommandVariableFromActorMat,
  _m as makeCommandVariableFromActorMaxHp,
  ym as makeCommandVariableFromActorMaxMp,
  gm as makeCommandVariableFromActorMdf,
  zm as makeCommandVariableFromArmor,
  Qm as makeCommandVariableFromConstant,
  Um as makeCommandVariableFromEnemyAgi,
  Bm as makeCommandVariableFromEnemyAtk,
  Dm as makeCommandVariableFromEnemyCurrentHp,
  Fm as makeCommandVariableFromEnemyCurrentMp,
  Vm as makeCommandVariableFromEnemyCurrentTp,
  Hm as makeCommandVariableFromEnemyDef,
  Wm as makeCommandVariableFromEnemyLuk,
  wm as makeCommandVariableFromEnemyMat,
  xm as makeCommandVariableFromEnemyMaxHp,
  Gm as makeCommandVariableFromEnemyMaxMp,
  Ym as makeCommandVariableFromEnemyMdf,
  Km as makeCommandVariableFromItemData,
  Ls as makeCommandVariableFromLastEnemyIndex,
  Ms as makeCommandVariableFromLastTargetActorId,
  us as makeCommandVariableFromLastTargetEnemyIndex,
  bs as makeCommandVariableFromLastUsedItemId,
  Ns as makeCommandVariableFromLastUsedSkillId,
  Jm as makeCommandVariableFromMapCharactorDirection,
  as as makeCommandVariableFromMapCharactorScreenX,
  es as makeCommandVariableFromMapCharactorScreenY,
  Zm as makeCommandVariableFromMapCharactorX,
  $m as makeCommandVariableFromMapCharactorY,
  os as makeCommandVariableFromMapId,
  ms as makeCommandVariableFromMapPlayerDirection,
  ss as makeCommandVariableFromMapPlayerScreenX,
  ns as makeCommandVariableFromMapPlayerScreenY,
  ts as makeCommandVariableFromMapPlayerX,
  rs as makeCommandVariableFromMapPlayerY,
  is as makeCommandVariableFromPartyGold,
  ds as makeCommandVariableFromPartySize,
  ps as makeCommandVariableFromPartySteps,
  cs as makeCommandVariableFromRandom,
  ls as makeCommandVariableFromScript,
  ks as makeCommandVariableFromSystemBattleCount,
  Rs as makeCommandVariableFromSystemEscapeCount,
  Is as makeCommandVariableFromSystemGold,
  As as makeCommandVariableFromSystemMapId,
  Es as makeCommandVariableFromSystemPartyMemberCount,
  Ts as makeCommandVariableFromSystemPlayTime,
  ys as makeCommandVariableFromSystemSaveCount,
  Cs as makeCommandVariableFromSystemSteps,
  _s as makeCommandVariableFromSystemTimer,
  Ss as makeCommandVariableFromSystemWinCount,
  qm as makeCommandVariableFromVariable,
  jm as makeCommandVariableFromWeapon,
  ia as makeCommentArray,
  fr as makeCommentCommandArray,
  Xs as makeCommonEventData,
  Y as makeDamage,
  Vn as makeDataNames,
  se as makeDropItem,
  tc as makeEditorSetting,
  mn as makeEnemyAction,
  sn as makeEnemyData,
  za as makeEventPageCondition,
  Fn as makeGameInitial,
  rc as makeItemCategories,
  mc as makeItemCategoriesFromArray,
  kn as makeItemData,
  Ja as makeMapData,
  Qs as makeMapDataFromSingleEvent,
  Qa as makeMapEvent,
  Za as makeMapEventIamge,
  $a as makeMapEventPage,
  zs as makeMapFileInfo,
  Nc as makeMapInfoData,
  bc as makeMapName,
  sc as makeMenuCommandsEnabled,
  nc as makeMenuCommandsEnabledFromArray,
  me as makeParamArray,
  oc as makeParamNamesArray,
  dc as makeParamNamesFromArray,
  Sn as makeSkillData,
  ic as makeSoundsArray,
  pc as makeSoundsObject,
  nn as makeStateData,
  cc as makeSystemAdvanced,
  lc as makeSystemData,
  Ac as makeSystemDataFromMV,
  Ec as makeSystemDataMV,
  Ic as makeTermsBasic,
  Cc as makeTermsBasicFromArray,
  Tc as makeTermsCommandArray,
  _c as makeTermsCommandArrayWithNulls,
  yc as makeTermsCommandFromArray,
  kc as makeTermsMessages,
  Sc as makeTitleCommandWindow,
  qs as makeTroopData,
  ja as makeTroopEventConditions,
  js as makeTroopMember,
  Rc as makeVehicleData,
  dn as makeWeaponData,
  Js as normalizeDataActor,
  yp as normalizeNote,
  rn as paramArrayToObject,
  kp as partyAbilityToArray,
  Sp as readNote,
  Rp as readNoteEx,
  gp as readNoteObject,
  Np as regularParamName,
  bp as regularParamsToArray,
  Pp as replaceNote,
  Lp as replaceNoteWithHandlers,
  Zs as repleaceMapEventCommands,
  Mp as resolveItemEffectLabels,
  up as resolveTraitLabels,
  vp as setNoteValue,
  hp as specialFlagToArray,
  Op as specialParamName,
  fp as specialParamsToArray,
  Yn as textAndDesc,
  Oa as toArrayCommonEvent,
  fa as toArrayControlSwitches,
  Ut as toArrayInputNumber,
  xa as toArrayScrollingTextBody,
  Va as toArrayScrollingTextHeader,
  Yr as toArraySetupChoice,
  Hr as toArraySetupChoiceItem,
  Dp as toArrayShowMessageHeader
};
