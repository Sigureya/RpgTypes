import { q as O, N as D, b as f, m as T, r as M, G as N, ai as Ta, v as _a, w as ya, E as Sa, y as j, p as Q, u as Z, I as J, d as $, f as aa, M as ea, am as ta, an as sa, ao as ra, aq as ma, B as H, g as ka, R as ga, V as ba, aa as _, aC as Y, P as Ra, Q as Ma, aS as Na, aR as ua, az as La, ay as oa, aH as Pa, aI as va, X as t } from "../shared/eventCommandCodes.es.js";
import { A as $n, C as ai, a as ei, c as ti, e as si, h as ri, i as mi, j as oi, k as ni, l as ii, n as di, o as pi, s as li, t as ci, x as Ei, z as Ii, D as Ai, F as Ci, H as Ti, J as _i, K as yi, L as Si, O as ki, S as gi, T as bi, U as Ri, W as Mi, Y as Ni, Z as ui, _ as Li, $ as Pi, a0 as vi, a1 as hi, a2 as Oi, a3 as Di, a4 as Fi, a5 as fi, a6 as Vi, a7 as xi, a8 as Bi, a9 as Gi, ab as wi, ac as Hi, ad as Yi, ae as Ui, af as Wi, ag as Xi, ah as qi, aj as Ki, ak as zi, al as ji, ap as Qi, ar as Zi, as as Ji, at as $i, au as ad, av as ed, aw as td, ax as sd, aA as rd, aB as md, aD as od, aE as nd, aF as id, aG as dd, aJ as pd, aK as ld, aL as cd, aM as Ed, aN as Id, aO as Ad, aP as Cd, aQ as Td, aT as _d, aU as yd, aV as Sd, aW as kd, aX as gd, aY as bd } from "../shared/eventCommandCodes.es.js";
import { be as u, bg as L, bh as g, bf as P, aT as ha, aY as Oa, aV as Da, as as Fa, aZ as fa, aS as Va, aW as xa, aU as Ba } from "../shared/commands.es.js";
import { C as Md, a as Nd, b as ud, c as Ld, E as Pd, d as vd, e as hd, f as Od, g as Dd, h as Fd, i as fd, j as Vd, k as xd, l as Bd, m as Gd, n as wd, o as Hd, p as Yd, q as Ud, r as Wd, s as Xd, t as qd, u as Kd, v as zd, w as jd, x as Qd, y as Zd, F as Jd, z as $d, A as ap, B as ep, P as tp, D as sp, G as rp, H as mp, I as op, J as np, R as ip, K as dp, L as pp, M as lp, N as cp, O as Ep, Q as Ip, S as Ap, T as Cp, U as Tp, V as _p, W as yp, X as Sp, Y as kp, Z as gp, _ as bp, $ as Rp, a0 as Mp, a1 as Np, a2 as up, a3 as Lp, a4 as Pp, a5 as vp, a6 as hp, a7 as Op, a8 as Dp, a9 as Fp, aa as fp, ab as Vp, ac as xp, ad as Bp, ae as Gp, af as wp, ag as Hp, ah as Yp, ai as Up, aj as Wp, ak as Xp, al as qp, am as Kp, an as zp, ao as jp, ap as Qp, aq as Zp, ar as Jp, at as $p, au as al, av as el, aw as tl, ax as sl, ay as rl, az as ml, aA as ol, aB as nl, aC as il, aD as dl, aE as pl, aF as ll, aG as cl, aH as El, aI as Il, aJ as Al, aK as Cl, aL as Tl, aM as _l, aN as yl, aO as Sl, aP as kl, aQ as gl, aR as bl, aX as Rl, a_ as Ml, a$ as Nl, b0 as ul, b1 as Ll, b2 as Pl, b3 as vl, b4 as hl, b5 as Ol, b6 as Dl, b7 as Fl, b8 as fl, b9 as Vl, ba as xl, bb as Bl, bc as Gl, bd as wl } from "../shared/commands.es.js";
import { F as Yl, a as Ul, b as Wl, c as Xl, d as ql, e as Kl, f as zl, g as jl, h as Ql, i as Zl, j as Jl, k as $l, l as ac, m as ec } from "../shared/fileNames.es.js";
import { m, g as Ga, f as wa } from "../shared/make.es.js";
import { O as sc, a as rc, b as mc, c as oc, d as nc, e as ic } from "../shared/make.es.js";
const Ue = (a) => a.parameters[3] === g, We = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), Xe = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), qe = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, u, L, a.value] }), Ke = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, u, g, a.variableId] }), ze = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, P, L, a.value]
}), je = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, P, g, a.variableId] }), Qe = (a) => ({
  operation: a[1],
  weaponId: a[0],
  value: a[3],
  operand: a[2],
  includesEquip: a[4]
}), Ze = (a, e = 0) => ({ code: D, indent: e, parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip] }), Je = (a, e = 0) => ({
  code: D,
  indent: e,
  parameters: [a.weaponId, u, L, a.value, !1]
}), $e = (a, e = 0) => ({ code: D, indent: e, parameters: [a.weaponId, u, g, a.variableId, !1] }), at = (a, e = 0) => ({
  code: D,
  indent: e,
  parameters: [a.weaponId, P, L, a.value, !1]
}), et = (a, e = 0) => ({ code: D, indent: e, parameters: [a.weaponId, P, g, a.variableId, !1] }), tt = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, u, L, a.value, !1]
}), st = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, u, g, a.variableId, !1] }), rt = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, P, L, a.value, !1]
}), mt = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, P, g, a.variableId, !1] }), ot = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage]
}), nt = (a, e = 0) => ({ code: T, indent: e, parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage] }), it = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), dt = (a, e = 0) => ({ code: T, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), pt = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage]
}), lt = (a, e = 0) => ({ code: T, indent: e, parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage] }), ct = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), Et = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage]
}), It = (a, e = 0) => ({ code: M, indent: e, parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage] }), At = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage]
}), Ct = (a, e = 0) => ({ code: M, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), Tt = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), _t = (a, e = 0) => ({ code: M, indent: e, parameters: [0, 0, 0, 0, a.level, a.showMessaage] }), yt = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [0, 0, 1, 0, a.level, a.showMessaage]
}), St = (a, e = 0) => ({ code: N, indent: e, parameters: [0, a.actorId, 0, a.skillId] }), kt = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [0, a.actorId, 1, a.skillId]
}), gt = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 0, a.skillId] }), bt = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 1, a.skillId] }), Rt = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [1, a.variableId, 0, a.skillId]
}), Mt = (a, e = 0) => ({ code: N, indent: e, parameters: [1, a.variableId, 1, a.skillId] }), Nt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 0, a.stateId]
}), ut = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 1, a.stateId] }), Lt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, 0, 0, a.stateId]
}), Pt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), vt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 0, a.stateId] }), ht = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 1, a.stateId]
}), Ot = (a, e = 0) => ({ code: 321, parameters: [a.actorId, a.classId, a.keepExp], indent: e }), Dt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Ft = ({ actorId: a = 1, faceIndex: e = 0, faceName: s = "", characterIndex: r = 0, characterName: o = "", battlerName: i = "" } = {}, d = 0) => ({
  code: 322,
  indent: d,
  parameters: [a, o, r, s, e, i]
}), ft = (a, e = 0) => ({ code: Ta, indent: e, parameters: [a.actorId, a.maxLength] }), Vt = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), xt = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [0, a.targetActorId]
}), Bt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Gt = (a, e = 0) => ({
  code: _a,
  parameters: [a.actorId, a.name],
  indent: e
}), wt = (a, e = 0) => ({ code: ya, parameters: [a.actorId, a.nickname], indent: e }), Ht = (a, e = 0) => ({ code: Sa, parameters: [a.actorId, a.profile], indent: e }), Yt = (a, e = 0) => ({
  code: j,
  indent: e,
  parameters: na(a, 0)
}), Ut = (a, e = 0) => ({ code: j, indent: e, parameters: na(a, 1) }), na = (a, e) => [a.actorId, a.paramId, e, a.value], R = { direct: 0, variable: 1 }, Wt = (a, e = 0) => ({
  code: Q,
  indent: e,
  parameters: ia(0, a)
}), Xt = (a, e = 0) => ({ code: Q, indent: e, parameters: ia(1, a) }), qt = (a, e = 0) => ({ code: J, indent: e, parameters: V(0, a) }), Kt = (a, e = 0) => ({
  code: J,
  indent: e,
  parameters: V(1, a)
}), zt = (a, e = 0) => ({ code: Z, indent: e, parameters: V(0, a) }), jt = (a, e = 0) => ({
  code: Z,
  indent: e,
  parameters: V(1, a)
}), V = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value], ia = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value, e.allowDeath], Qt = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Zt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), Jt = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), $t = (a = 0) => ({ code: 244, indent: a, parameters: [] }), as = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Ha = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, es = (a) => Ha[a], ts = (a, e) => y(a, m({ name: e })), y = (a, e, s = 0) => ({
  code: a,
  parameters: [m(e)],
  indent: s
}), ss = (a, e = 0) => y(ta, a, e), rs = (a, e = 0) => y(sa, a, e), ms = (a, e = 0) => y(ra, a, e), os = (a, e = 0) => y(ma, a, e), ns = (a, e = 0) => y($, a, e), is = (a, e = 0) => y(ea, a, e), ds = (a, e = 0) => y(aa, a, e), ps = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), ls = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), cs = 0, Es = 1, Is = 2, As = (a) => a.parameters[0] === 1, Cs = ({ troopId: a = 0, canEscape: e = !1, canLose: s = !1 }, r = 0) => ({
  code: H,
  indent: r,
  parameters: [0, a, e, s]
}), Ts = ({ variableId: a = 0, canEscape: e = !1, canLose: s = !1 }, r = 0) => ({ code: H, indent: r, parameters: [1, a, e, s] }), _s = ({ canEscape: a = !1, canLose: e = !1 }, s = 0) => ({
  code: H,
  indent: s,
  parameters: [2, 0, a, e]
}), Ya = { plus: 0, minus: 1 }, ys = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ya[a ?? "plus"] ?? 0, e ?? 0] }), da = (a, e = 0) => ({
  code: ka,
  indent: e,
  parameters: [a]
}), Ss = (a = 0) => da(0, a), ks = (a = 0) => da(1, a);
function gs(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const bs = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Rs = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), Ms = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), Ns = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), us = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Ls = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), Ps = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), vs = (a, e = 0) => ({ code: ga, indent: e, parameters: Ua(a ?? {}) }), hs = (a) => ({ eventId: a[0] }), Ua = (a) => [a.eventId ?? 0], Os = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), Wa = (a) => [a.min, a.max, a.value], Ds = (a, e = 0) => ({ code: ba, indent: e, parameters: Wa(a) }), Fs = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), fs = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Vs = (a) => ({ variableId: a[0], maxDigits: a[1] }), xs = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Bs = (a) => ({
  variableId: a[0],
  itemType: a[1]
}), Gs = (a, e = 0) => ({ code: 284, indent: e, parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy] }), ws = (a, e = 0) => ({
  code: 204,
  indent: e,
  parameters: [a.direction, a.distance, a.speed, a.waiting]
}), Hs = (a = 0) => ({ code: 281, indent: a, parameters: [0] }), Ys = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), Us = (a = {}, e = 0) => ({
  code: 282,
  indent: e,
  parameters: [a.tilesetId ?? 0]
}), Ws = (a, e = 0) => ({ code: _, indent: e, parameters: [a.variableId, 0, 1, a.x, a.y] }), Xs = (a, e = 0) => ({
  code: _,
  indent: e,
  parameters: [a.variableId, 0, 0, a.x, a.y]
}), qs = (a, e = 0) => ({ code: _, indent: e, parameters: [a.variableId, 1, 1, a.x, a.y] }), Ks = (a, e = 0) => ({ code: _, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), zs = (a, e = 0) => ({
  code: _,
  indent: e,
  parameters: [a.variableId, 6, 1, a.x, a.y]
}), js = (a, e = 0) => ({ code: _, indent: e, parameters: [a.variableId, 6, 0, a.x, a.y] }), Qs = (a, e = 0) => ({
  code: _,
  indent: e,
  parameters: [a.variableId, pa[a.layer] ?? 2, 1, a.x, a.y]
}), Zs = (a, e = 0) => ({ code: _, indent: e, parameters: [a.variableId, pa[a.layer] ?? 2, 0, a.x, a.y] }), pa = { 1: 2, 2: 3, 3: 4, 4: 5 }, Js = (a, e = 0) => ({
  code: Y,
  indent: e,
  parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction]
}), $s = (a, e = 0) => ({
  code: Y,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), ar = (a, e = 0) => ({ code: Y, indent: e, parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction] }), er = (a = 0) => ({ code: 135, parameters: [1], indent: a }), tr = (a = 0) => ({
  code: 135,
  parameters: [0],
  indent: a
}), sr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), rr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), mr = (a = 0) => ({ code: 137, parameters: [1], indent: a }), or = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), la = (a) => [a], nr = (a) => ({ comment: a[0] }), Xa = (a, e = 0) => ({ code: Ma, indent: e, parameters: la(a) }), qa = (a, e = 0) => ({
  code: Ra,
  indent: e,
  parameters: la(a)
}), ir = (a, e = 0) => a.map(((s, r) => r === 0 ? Xa(s, e) : qa(s, e))), Ka = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], dr = (a) => ({ speed: a[0], skip: a[1] }), pr = (a = {}, e = 0) => ({
  code: ua,
  indent: e,
  parameters: Ka(a)
}), za = (a = "") => [a], lr = (a) => ({ content: a[0] }), cr = (a = "", e = 0) => ({ code: Na, indent: e ?? 0, parameters: za(a) }), Er = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Ir = (a) => ({
  index: a[0],
  name: a[1]
}), Ar = (a) => [a.index ?? 0, a.name ?? ""], Cr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Tr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], _r = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), yr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Sr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), kr = (a) => ({
  filename: a[0]
}), gr = ({ args: a = {}, commandName: e, commandTitle: s = "", pluginName: r }, o = 0) => ({ code: 357, indent: o, parameters: [r, e, s, { ...a }] }), br = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Rr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Mr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Nr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), ur = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Lr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Pr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), vr = ({ pictureId: a = 0, origin: e = 0, name: s = "", x: r = 0, y: o = 0, scaleX: i = 100, scaleY: d = 100, opacity: n = 255, blendMode: S = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, s, e, r, o, i, d, n, S]
}), hr = ({ pictureId: a, origin: e, x: s, y: r, scaleX: o, scaleY: i, opacity: d, blendMode: n, wait: S = !1, easingType: B = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, s, r, o, i, d, n, S, B]
}), Or = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Dr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Fr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), fr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Vr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), xr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), ja = (a, e = 0) => ({ code: oa, indent: e, parameters: [a] }), Qa = (a, e = 0) => ({
  code: La,
  indent: e,
  parameters: [a]
}), Br = (a, e = 0) => a.map(((s, r) => r === 0 ? ja(s, e) : Qa(s, e))), Gr = 1, wr = 0, F = { item: 0, weapon: 1, armors: 2 }, Hr = ({ goods: a, buyOnly: e = !1 }, s = 0) => a.map(((r, o) => {
  const i = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(r) ? 1 : 0;
  return o === 0 ? { code: Pa, indent: s, parameters: [F[r.itemType] ?? F.item, r.id, i, r.customPrice ?? 0, e] } : {
    code: va,
    indent: s,
    parameters: [F[r.itemType] ?? F.item, r.id, i, r.customPrice ?? 0]
  };
})), Yr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 0) }), Ur = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: l(a, 1)
}), Wr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 2) }), Xr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 3) }), qr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 12) }), Kr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: l(a, 4)
}), zr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 5) }), jr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 6) }), Qr = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: l(a, 7)
}), Zr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 8) }), Jr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 9) }), $r = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: l(a, 10)
}), am = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: l(a, 11)
}), l = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], em = 0, tm = 1, sm = 2, rm = 3, mm = 4, om = 0, nm = 1, im = 2, dm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 0)
}), pm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 1) }), lm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 10) }), cm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 2) }), Em = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 3)
}), Im = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 4) }), Am = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 5) }), Cm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 6)
}), Tm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 7) }), _m = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 8) }), ym = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 9)
}), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], Sm = (a) => a.parameters[3] === 1, km = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Za(a)
}), Za = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], gm = (a, e = 0) => ({ code: t, indent: e, parameters: Ja(a) }), bm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: $a(a)
}), Rm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ae(a)
}), Ja = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], $a = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], ae = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], Mm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ee(a)
}), ee = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], I = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, Nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A(a, I.X)
}), um = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, I.Y) }), Lm = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, I.DIRECTION) }), Pm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A(a, I.SCREEN_X)
}), vm = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, I.SCREEN_Y) }), hm = (a, e = 0) => ({ code: t, indent: e, parameters: A({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, I.X) }), Om = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, I.Y)
}), Dm = (a, e = 0) => ({ code: t, indent: e, parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, I.DIRECTION) }), Fm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, I.SCREEN_X)
}), fm = (a, e = 0) => ({ code: t, indent: e, parameters: A({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, I.SCREEN_Y) }), A = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], Vm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: x(a, 0)
}), xm = (a, e = 0) => ({ code: t, indent: e, parameters: x(a, 1) }), Bm = (a, e = 0) => ({ code: t, indent: e, parameters: x(a, 2) }), Gm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: x(a, 3)
}), x = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], wm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: te(a)
}), te = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], Hm = (a, e = 0) => ({ code: oa, indent: e, parameters: [a] }), Ym = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: C(a, 0)
}), Um = (a, e = 0) => ({ code: t, indent: e, parameters: C(a, 1) }), Wm = (a, e = 0) => ({ code: t, indent: e, parameters: C(a, 2) }), Xm = (a, e = 0) => ({ code: t, indent: e, parameters: C(a, 3) }), qm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: C(a, 4)
}), Km = (a, e = 0) => ({ code: t, indent: e, parameters: C(a, 5) }), zm = (a, e = 0) => ({ code: t, indent: e, parameters: C(a, 6) }), jm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: C(a, 7)
}), Qm = (a, e = 0) => ({ code: t, indent: e, parameters: C(a, 8) }), Zm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: C(a, 9)
}), C = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Jm = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, $m = (a, e = 0) => ({ code: t, indent: e, parameters: v(a, 0) }), ao = (a, e = 0) => ({ code: t, indent: e, parameters: v(a, 1) }), eo = (a, e = 0) => ({ code: t, indent: e, parameters: v(a, 2) }), to = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: v(a, 3)
}), so = (a, e = 0) => ({ code: t, indent: e, parameters: v(a, 4) }), ro = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: v(a, 5)
}), v = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], mo = (a = 0) => ({ code: 206, indent: a, parameters: [] }), oo = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), no = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, m(a.bgm)] }), io = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), po = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), lo = 0, co = 1, Eo = 2, Io = (a) => a.code === ta || a.code === sa || a.code === ra || a.code === ma || a.code === $ || a.code === ea || a.code === aa, se = (a) => [...a], Ao = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: se(a.parameters)
}), re = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Co = (a) => a.parameters.every(re), To = "bgm", _o = "se", yo = "me", So = "bgs", ko = "battlebacks1", go = "battlebacks2", bo = "characters", Ro = "enemies", Mo = "faces", No = "parallaxes", uo = "pictures", Lo = "sv_actors", Po = "sv_enemies", vo = "system", ho = "tilesets", Oo = "titles1", Do = "titles2", Fo = "data", fo = "img", Vo = "audio", xo = "js", U = (a, e) => `\\${a}[${e}]`, Bo = (a, e) => e.map(((s, r) => ({
  text: s,
  controlChar: U(a, r)
}))), Go = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), wo = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: U("N", e.id)
}))), Ho = (a) => a.variables.map(((e, s) => ({ text: e || "", controlChar: U("V", s) }))).filter(((e) => e.text !== "")), Yo = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), Uo = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), Wo = (a) => ({
  span: a.span ?? 0,
  conditions: me(a.conditions ?? {}),
  list: a.list ?? []
}), Xo = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), me = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), oe = (a = {}) => ({
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
}), ne = ({ id: a = 1, name: e = "", pages: s = [], note: r = "", x: o = 0, y: i = 0 } = {}) => ({
  id: a,
  name: e,
  pages: s,
  note: r,
  x: o,
  y: i
}), ie = ({ characterIndex: a = 0, characterName: e = "", direction: s = 2, pattern: r = 0, tileId: o = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: s,
  pattern: r,
  tileId: o
}), de = ({ list: a = [], conditions: e = oe(), image: s = ie(), moveFrequency: r = 5, directionFix: o = !1, moveRoute: i = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: d = 1, stepAnime: n = !1, through: S = !1, walkAnime: B = !1, moveSpeed: Ia = 3, moveType: Aa = 0, trigger: Ca = 0 } = {}) => ({
  walkAnime: B,
  stepAnime: n,
  through: S,
  conditions: e,
  list: a,
  directionFix: o,
  image: s,
  priorityType: d,
  moveFrequency: r,
  moveSpeed: Ia,
  moveType: Aa,
  trigger: Ca,
  moveRoute: { list: i.list, repeat: i.repeat, skippable: i.skippable, wait: i.wait }
}), qo = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Ko = (a) => pe({ events: [ne({ pages: [de({ list: a })] })] }), pe = (a = {}) => ({
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
}), zo = (a = { id: 0 }) => {
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
}, jo = (a, e) => a.map(((s) => s ? { ...s, pages: le(s, e) } : null)), le = (a, e) => a.pages.map(((s) => ({ ...s, list: e(s.list) }))), ce = {
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
}, Ee = {
  title: "ダメージ",
  options: {}
}, W = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), Qo = (a = {}) => ({
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
}), Zo = (a) => ({
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
}), Jo = (a = {}) => ({
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
}), $o = (a = {}) => ({ name: a.name ?? "", id: a.id ?? 0, traits: [], note: a.note ?? "", params: a.params ?? ca(), learnings: a.learnings ?? [], expParams: a.expParams ?? [] }), an = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? Ie(a.params) : ca(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), ca = () => [[0], [0], [0], [0], [0], [0], [0], [0]], Ie = (a) => {
  const e = a.map(((n) => n.atk)), s = a.map(((n) => n.def)), r = a.map(((n) => n.mat)), o = a.map(((n) => n.mdf)), i = a.map(((n) => n.agi)), d = a.map(((n) => n.luk));
  return [a.map(((n) => n.mhp)), a.map(((n) => n.mmp)), e, s, r, o, i, d];
}, Ae = ({ mhp: a = 0, mmp: e = 0, atk: s = 0, def: r = 0, mat: o = 0, mdf: i = 0, agi: d = 0, luk: n = 0 }) => [a, e, s, r, o, i, d, n], en = (a) => {
  const [e, s, r, o, i, d, n, S] = a;
  return { mhp: e, mmp: s, atk: r, def: o, mat: i, mdf: d, agi: n, luk: S };
}, Ce = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), tn = (a = {}) => ({
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
  dropItems: a.dropItems?.map((() => Ce())) ?? [],
  exp: a.exp ?? 0,
  gold: a.gold ?? 0,
  traits: [],
  note: a.note ?? "",
  params: a.params ? [...a.params] : Ae({ mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 }),
  actions: []
}), rn = (a = {}) => ({
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
}), p = "{name}", b = "{name} * {value}%", X = "{name} + {value}%", q = "{value}", Te = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: b, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: X, options: {
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
  specialParam: { title: "特殊能力値", format: b, options: {
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
  elementRate: { title: "属性有効度", format: b },
  debuffRate: { title: "弱体有効度", format: b },
  stateRate: { title: "ステート有効度", format: b },
  stateResist: {
    title: "ステート無効",
    format: p
  },
  attackElement: { title: "攻撃属性", format: p },
  attackState: { title: "攻撃ステート", format: X },
  attackSpeed: { title: "攻撃速度補正", format: q },
  attackTimes: {
    title: "攻撃追加回数",
    format: q
  },
  actionPlus: { title: "行動追加", format: b },
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
} }, _e = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, mn = (a, e, s) => {
  const r = Ga(_e);
  return wa(e, s, r, a.pattern, ((o) => o.dataId));
}, on = (a = {}) => ({
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
  damage: W(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), nn = {
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
}, dn = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, pn = 0, ln = 1, cn = 2, K = "{name} {value1}%", G = "{value1}% + {value2}", z = "{name} {value1}ターン", h = "{name}", ye = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: z },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: z },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: G },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: h },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: G
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: G },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: h
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: h },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: K },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: h
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: K },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: h }
} }, En = 0, In = (a, e, s) => {
  const r = s.find(((i) => i.id === e.dataId)), o = r ? r.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o);
}, An = { title: "アイテム", options: { consumable: "消耗品" } }, Cn = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Tn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, _n = (a = {}) => ({
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
  damage: W(a.damage ?? {}),
  effects: [],
  price: 0
}), yn = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: W(a.damage ?? {}),
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
}), Sn = "data", kn = "actor", gn = "map", bn = "enemy", Rn = "state", Mn = "skill", Nn = "item", un = "weapon", Ln = "armor", Pn = "class", vn = "common_event", hn = "troop", Se = {
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
}, On = () => ({ rpg: { damage: Ee, data: ce, traits: Te, itemEffect: ye }, global: Se }), ke = (a = {}) => ({
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
}), ge = (a = {}) => [m(a.cursor), m(a.ok), m(a.cancel), m(a.buzzer), m(a.equip), m(a.save), m(a.load), m(a.battleStart), m(a.escape), m(a.enemyAttack), m(a.enemyDamage), m(a.enemyCollapse), m(a.bossCollapes1), m(a.bossCollapes2), m(a.actorDamage), m(a.actorCollapse), m(a.playRecovery), m(a.playMiss), m(a.playEvasion), m(a.playMagicEvasion), m(a.playReflection), m(a.shop), m(a.useItem), m(a.useSkill)], be = (a) => ({
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
}), Re = (a) => ({
  item: Me(a),
  skill: Ne(a),
  equip: ue(a),
  status: Le(a),
  formation: Pe(a),
  save: ve(a)
}), Me = (a) => a.menuCommands[0], Ne = (a) => a.menuCommands[1], ue = (a) => a.menuCommands[2], Le = (a) => a.menuCommands[3], Pe = (a) => a.menuCommands[4], ve = (a) => a.menuCommands[5], Dn = (a) => a.itemCategories[0], Fn = (a) => a.itemCategories[1], fn = (a) => a.itemCategories[2], Vn = (a) => a.itemCategories[3], he = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], xn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Oe = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], Bn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), De = (a = {}) => ({
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
}), Gn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), wn = (a) => ({
  armorTypes: k(a.armorTypes),
  elements: k(a.elements),
  equipTypes: k(a.equipTypes),
  weaponTypes: k(a.weaponTypes),
  skillTypes: k(a.skillTypes),
  variables: k(a.variables),
  switches: k(a.switches)
}), k = (a) => a ? [...a] : [], Hn = (a) => a.terms.params.map(((e, s) => ({
  name: e,
  id: s
}))), Fe = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), w = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: m(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), fe = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Yn = { title: "オプション", options: {
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
} }, Un = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Wn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Xn = {
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
}, qn = (a = Ea({})) => ({
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
    messages: Fa(a.terms.messages)
  }
}), Kn = (a) => Ea({
  versionId: a.versionId,
  menuCommands: Re(a),
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
  sounds: be(a.sounds),
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
    basic: Da(a.terms.basic),
    commands: Oa(a.terms.commands),
    params: ha(a.terms.params),
    messages: a.terms.messages
  }
}), Ea = (a) => {
  const e = xe(a.size);
  return {
    ...De(a.options),
    titleCommandWindow: Fe(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: ge(a.sounds),
    editor: fe(a.editing),
    advanced: ke(a.advanced),
    title1Name: a.images?.title1Name ?? "",
    title2Name: a.images?.title2Name ?? "",
    armorTypes: E(a.dataNames?.armorTypes),
    equipTypes: E(a.dataNames?.equipTypes),
    elements: E(a.dataNames?.elements),
    skillTypes: E(a.dataNames?.skillTypes),
    weaponTypes: E(a.dataNames?.weaponTypes),
    switches: E(a.dataNames?.switches),
    variables: E(a.dataNames?.variables),
    magicSkills: E(a.battle?.magicSkills),
    battleSystem: a.battle?.battleSystem ?? 0,
    airship: w(a.vehicles?.airship),
    boat: w(a.vehicles?.boat),
    ship: w(a.vehicles?.ship),
    defeatMe: m(a.me?.defeatMe),
    gameoverMe: m(a.me?.gameoverMe),
    titleBgm: m(a.bgm?.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: a.versionId ?? 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: a.battleTest?.battleback1Name ?? "",
    battleback2Name: a.battleTest?.battleback2Name ?? "",
    testTroopId: a.battleTest?.testTroopId ?? 0,
    testBattlers: Be(a.battleTest?.testBattlers, Ge),
    battleBgm: m(a.bgm?.battleBgm),
    victoryMe: m(a.me?.victoryMe),
    editMapId: a.editorTemporary?.editMapId ?? 0,
    battlerName: a.editorTemporary?.battlerName ?? "",
    locale: a.locale ?? "en-US",
    startMapId: a.gameInit?.startMapId ?? 0,
    startX: a.gameInit?.startX ?? 0,
    startY: a.gameInit?.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Ve(a.terms ?? {}),
    itemCategories: he(a.itemCategories),
    partyMembers: E(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: Oe(a.menuCommands)
  };
}, Ve = (a) => ({ basic: Ba(a.basic ?? {}), commands: xa(a.commands ?? {}), params: Va(a.params ?? {}), messages: fa(a.messages ?? {}) }), E = (a) => a ? [...a] : [], xe = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Be = (a, e) => a ? a.map(e) : [], Ge = (a) => a ? {
  actorId: a.actorId,
  equips: E(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, zn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), jn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Qn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  $n as ABORT_BATTLE,
  cs as BATTLE_DIRECT,
  Is as BATTLE_ENCOUNT,
  H as BATTLE_PROCESSING,
  Es as BATTLE_VARIABLE,
  ai as CHANGE_ACTOR_IMAGES,
  ei as CHANGE_ACTOR_STATE,
  f as CHANGE_ARMORS,
  ti as CHANGE_BATTLE_BACKGROUND,
  $ as CHANGE_BATTLE_BGM,
  si as CHANGE_CLASS,
  aa as CHANGE_DEFEAT_ME,
  ka as CHANGE_ENCOUNTER,
  ri as CHANGE_ENEMY_HP,
  mi as CHANGE_ENEMY_MP,
  oi as CHANGE_ENEMY_STATE,
  ni as CHANGE_ENEMY_TP,
  ii as CHANGE_EQUIP,
  T as CHANGE_EXP,
  di as CHANGE_FORMATION_ACCESS,
  pi as CHANGE_GOLD,
  Q as CHANGE_HP,
  O as CHANGE_ITEMS,
  M as CHANGE_LEVEL,
  li as CHANGE_MAP_NAME_DISPLAY,
  ci as CHANGE_MENU_ACCESS,
  Z as CHANGE_MP,
  _a as CHANGE_NAME,
  ya as CHANGE_NICKNAME,
  Ei as CHANGE_PARALLAX,
  j as CHANGE_PARAMETER,
  Ii as CHANGE_PARTY_MEMBER,
  Ai as CHANGE_PLAYER_FOLLOWERS,
  Sa as CHANGE_PROFILE,
  Ci as CHANGE_SAVE_ACCESS,
  N as CHANGE_SKILL,
  Ti as CHANGE_TILESET,
  J as CHANGE_TP,
  _i as CHANGE_TRANSPARENCY,
  yi as CHANGE_VEHICLE_BGM,
  Si as CHANGE_VEHICLE_IMAGE,
  ea as CHANGE_VICTORY_ME,
  D as CHANGE_WEAPONS,
  ki as CHANGE_WINDOW_COLOR,
  Md as COLLAPS_BOSS,
  Nd as COLLAPS_INSTANT,
  ud as COLLAPS_NONE,
  Ld as COLLAPS_NORMAL,
  Ra as COMMENT_BODY,
  Ma as COMMENT_HEAD,
  ga as COMMON_EVENT,
  gi as CONDITIONAL_BRANCH,
  bi as CONDITIONAL_BRANCH_ELSE,
  Ri as CONTROL_SELF_SWITCH,
  ba as CONTROL_SWITCHES,
  Mi as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Gr as CUSTOM_PRICE,
  Ee as DEFAULT_DAMAGE_LABELS,
  Se as DEFAULT_GLOBAL_LABELS,
  An as DEFAULT_ITEM_LABELS,
  Cn as DEFAULT_SKILL_LABELS,
  Yn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Un as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Tn as DEFAULT_USABLE_ITEM_LABELS,
  jn as DIRECTION,
  Pd as EFFECT_ADD_BUFF,
  vd as EFFECT_ADD_DEBUFF,
  hd as EFFECT_ADD_STATE,
  Od as EFFECT_COMMON_EVENT,
  Dd as EFFECT_GAIN_TP,
  Fd as EFFECT_GROW,
  fd as EFFECT_LEARN_SKILL,
  Vd as EFFECT_RECOVER_HP,
  xd as EFFECT_RECOVER_MP,
  Bd as EFFECT_REMOVE_BUFF,
  Gd as EFFECT_REMOVE_DEBUFF,
  wd as EFFECT_REMOVE_STATE,
  Hd as EFFECT_SPECIAL,
  Ni as ENEMY_APPEAR,
  ui as ENEMY_RECOVER_ALL,
  Li as ENEMY_TRANSFORM,
  Pi as ERASE_EVENT,
  vi as ERASE_PICTURE,
  hi as EXIT_EVENT_PROCESSING,
  Yd as EXTRA_PARAM_CEV,
  Ud as EXTRA_PARAM_CNT,
  Wd as EXTRA_PARAM_CRI,
  Xd as EXTRA_PARAM_EVA,
  qd as EXTRA_PARAM_HIT,
  Kd as EXTRA_PARAM_HRG,
  zd as EXTRA_PARAM_MEV,
  jd as EXTRA_PARAM_MRF,
  Qd as EXTRA_PARAM_MRG,
  Zd as EXTRA_PARAM_TRG,
  Oi as FADEIN_SCREEN,
  Di as FADEOUT_BGM,
  Fi as FADEOUT_BGS,
  fi as FADEOUT_SCREEN,
  Yl as FILENAME_ACTORS,
  Ul as FILENAME_ANIMATIONS,
  Wl as FILENAME_ARMORS,
  Xl as FILENAME_CLASSES,
  ql as FILENAME_COMMON_EVENTS,
  Kl as FILENAME_ENEMIES,
  zl as FILENAME_ITEMS,
  jl as FILENAME_MAP_INFOS,
  Ql as FILENAME_SKILLS,
  Zl as FILENAME_STATES,
  Jl as FILENAME_SYSTEM,
  $l as FILENAME_TILESET,
  ac as FILENAME_TROOPS,
  ec as FILENAME_WEAPONS,
  Jd as FLAG_ID_AUTO_BATTLE,
  $d as FLAG_ID_GUARD,
  ap as FLAG_ID_PRESERVE_TP,
  ep as FLAG_ID_SUBSTITUTE,
  Vi as FLASH_SCREEN,
  Vo as FOLDER_AUDIO,
  To as FOLDER_AUDIO_BGM,
  So as FOLDER_AUDIO_BGS,
  yo as FOLDER_AUDIO_ME,
  _o as FOLDER_AUDIO_SE,
  Fo as FOLDER_DATA,
  fo as FOLDER_IMG,
  ko as FOLDER_IMG_BATTLEBACK1,
  go as FOLDER_IMG_BATTLEBACK2,
  bo as FOLDER_IMG_CHACTERS,
  Ro as FOLDER_IMG_ENEMIES,
  Mo as FOLDER_IMG_FACES,
  No as FOLDER_IMG_PARALLACES,
  uo as FOLDER_IMG_PICTURES,
  Lo as FOLDER_IMG_SV_ACTORS,
  Po as FOLDER_IMG_SV_ENEMIES,
  vo as FOLDER_IMG_SYSTEM,
  ho as FOLDER_IMG_TILESETS,
  Oo as FOLDER_IMG_TITLES1,
  Do as FOLDER_IMG_TITLES2,
  xo as FOLDER_JS,
  xi as FORCE_ACTION,
  Bi as GAME_OVER,
  Gi as GATHER_FOLLOWERS,
  _ as GET_LOCATION_INFO,
  wi as GET_ONOFF_VEHICLE,
  pn as HITTYPE_CERTAIN,
  cn as HITTYPE_MAGICAL,
  ln as HITTYPE_PHYSICAL,
  Hi as INPUT_NUMBER,
  Yi as LABEL,
  dn as LABELS_DATA_WEAPON,
  Wn as LABELS_SYSTEM_BATTLER_PARAMS,
  Xn as LABELS_SYSTEM_GAME_COMMANDS,
  Ui as LABEL_JUMP,
  ce as LABEL_SET_DATA,
  ye as LABEL_SET_ITEM_EFFECT,
  Te as LABEL_SET_TRAIT,
  Wi as LOOP,
  Xi as LOOP_BREAK,
  I as MAP_CHARACTOR_PARAM,
  Sn as MODULE_DATA,
  qi as MOVE_PICTURE,
  Ta as NAME_INPUT_PROCESSING,
  wr as NORMAL_PRICE,
  Ki as NO_OPERATION,
  zi as OPEN_MENU_SCREEN,
  ji as OPEN_SAVE_SCREEN,
  em as OPERAND_CONSTANT,
  rm as OPERAND_GAMEDATA,
  sm as OPERAND_RANDOM,
  mm as OPERAND_SCRIPT,
  tm as OPERAND_VARIABLE,
  sc as OPERATION_ADD,
  rc as OPERATION_DIVIDE,
  mc as OPERATION_MOD,
  oc as OPERATION_MULTIPLY,
  nc as OPERATION_SET,
  ic as OPERATION_SUBTRACT,
  tp as PARTY_ABILITY_CANCEL_SURPRISE,
  sp as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  rp as PARTY_ABILITY_ENCOUNTER_HALF,
  mp as PARTY_ABILITY_ENCOUNTER_NONE,
  op as PARTY_ABILITY_GOLD_DOUBLE,
  np as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ta as PLAY_BGM,
  sa as PLAY_BGS,
  ra as PLAY_ME,
  Qi as PLAY_MOVIE,
  ma as PLAY_SE,
  Zi as PLUGIN_COMMAND_MV,
  Ji as PLUGIN_COMMAND_MZ,
  $i as RECOVER_ALL,
  ip as REGULAR_PARAM_AGI,
  dp as REGULAR_PARAM_ATK,
  pp as REGULAR_PARAM_DEF,
  lp as REGULAR_PARAM_LUK,
  cp as REGULAR_PARAM_MATK,
  Ep as REGULAR_PARAM_MAX_HP,
  Ip as REGULAR_PARAM_MAX_MP,
  Ap as REGULAR_PARAM_MDEF,
  ad as RESUME_BGM,
  ed as RETURN_TO_TITLE_SCREEN,
  td as ROTATE_PICTURE,
  sd as SAVE_BGM,
  nn as SCHEMA_DATA_WEAPON,
  oa as SCRIPT_EVAL,
  La as SCRIPT_EVAL_BODY,
  rd as SCROLL_MAP,
  md as SELECT_ITEM,
  Y as SET_EVENT_LOCATION,
  od as SET_MOVEMENT_ROUTE,
  nd as SET_VEHICLE_LOCATION,
  id as SET_WEATHER_EFFECT,
  dd as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  va as SHOP_PROCESSING_BODY,
  pd as SHOW_ANIMATION,
  ld as SHOW_BALLOON_ICON,
  cd as SHOW_BATTLE_ANIMATION,
  Ed as SHOW_CHOICES,
  Id as SHOW_CHOICES_ITEM,
  Ad as SHOW_MESSAGE,
  Cd as SHOW_MESSAGE_BODY,
  Td as SHOW_PICTURE,
  ua as SHOW_SCROLLING_TEXT,
  Na as SHOW_SCROLLING_TEXT_BODY,
  _d as SKIP,
  En as SPECIAL_EFFECT_ESCAPE,
  Cp as SPECIAL_PARAM_EXR,
  Tp as SPECIAL_PARAM_FDR,
  _p as SPECIAL_PARAM_GRD,
  yp as SPECIAL_PARAM_MCR,
  Sp as SPECIAL_PARAM_MDR,
  kp as SPECIAL_PARAM_PDR,
  gp as SPECIAL_PARAM_PHA,
  bp as SPECIAL_PARAM_REC,
  Rp as SPECIAL_PARAM_TCR,
  Mp as SPECIAL_PARAM_TGR,
  kn as SRC_DATA_ACTOR,
  Ln as SRC_DATA_ARMOR,
  Pn as SRC_DATA_CLASS,
  vn as SRC_DATA_COMMON_EVNET,
  bn as SRC_DATA_ENEMY,
  Nn as SRC_DATA_ITEMS,
  gn as SRC_DATA_MAP,
  Mn as SRC_DATA_SKILL,
  Rn as SRC_DATA_STATE,
  hn as SRC_DATA_TROOP,
  un as SRC_DATA_WEAPON,
  yd as STOP_SE,
  Sd as TINT_PICTURE,
  kd as TINT_SCREEN,
  Np as TRAIT_ACTION_PLUS,
  up as TRAIT_ATTACK_ELEMENT,
  Lp as TRAIT_ATTACK_SKILL,
  Pp as TRAIT_ATTACK_SPEED,
  vp as TRAIT_ATTACK_STATE,
  hp as TRAIT_ATTACK_TIMES,
  Op as TRAIT_COLLAPSE_TYPE,
  Dp as TRAIT_DEBUFF_RATE,
  Fp as TRAIT_ELEMENT_RATE,
  fp as TRAIT_EQUIP_ARMOR_TYPE,
  Vp as TRAIT_EQUIP_LOCK,
  xp as TRAIT_EQUIP_SEAL,
  Bp as TRAIT_EQUIP_WEAPON_TYPE,
  Gp as TRAIT_PARAM,
  wp as TRAIT_PARTY_ABILITY,
  Hp as TRAIT_SKILL_ADD,
  Yp as TRAIT_SKILL_SEAL,
  Up as TRAIT_SKILL_TYPE_ADD,
  Wp as TRAIT_SKILL_TYPE_SEAL,
  Xp as TRAIT_SLOT_TYPE,
  qp as TRAIT_SPARAM,
  Kp as TRAIT_SPECIAL_FLAG,
  zp as TRAIT_STATE_RATE,
  jp as TRAIT_STATE_RESIST,
  Qp as TRAIT_XPARAM,
  gd as TRANSFER_PLAYER,
  im as TYPE_ARMOR,
  om as TYPE_ITEM,
  nm as TYPE_WEAPON,
  Jm as VARIABLE_SRC_LAST,
  Eo as VEHICLE_AIRSHIP,
  lo as VEHICLE_BOAT,
  co as VEHICLE_SHIP,
  bd as WAIT,
  es as assetDirectoryName,
  Zp as buildNoteFromNormalized,
  yr as cloneChoices,
  Ao as cloneEventCommand,
  se as cloneParameters,
  Jp as collapsOptionsToArray,
  nr as convertCommentArrayToObject,
  Fa as convertTermsMessageMZtoMV,
  wo as createActorControlChars,
  U as createControlCharFormat,
  Re as createMenuCommandState,
  $p as createNoteEntity,
  Ho as createSystemVariableControlChars,
  al as defineGameDataSources,
  el as defineSystemItems,
  tl as defineTraitCollapseType,
  sl as defineTraitExtraParam,
  rl as defineTraitItems,
  ml as defineTraitPartyAbility,
  ol as defineTraitRegularParam,
  nl as defineTraitSpecialFlag,
  il as defineTraitSpecialParam,
  dl as extraParamName,
  pl as extraParamsToArray,
  Qn as extractFileName,
  In as formatItemEffectText,
  mn as formatTraitText,
  We as fromArrayChangeItems,
  Qe as fromArrayChangeWeapons,
  hs as fromArrayCommonEvent,
  Os as fromArrayControlSwitches,
  bs as fromArrayEnemyTransform,
  Vs as fromArrayInputNumber,
  kr as fromArrayPlayMovie,
  br as fromArrayPluginCommandMZ,
  lr as fromArrayScrollingTextBody,
  dr as fromArrayScrollingTextHeader,
  Bs as fromArraySelectItem,
  Cr as fromArraySetupChoice,
  Ir as fromArraySetupChoiceItem,
  ll as fromArrayShowMessageHeader,
  Bo as fromStringArray,
  fn as getArmorCategoryEnabled,
  cl as getArmorTypes,
  Go as getControlChars,
  El as getElementTypes,
  ue as getEquipCommandEnabled,
  Il as getEquipTypes,
  Pe as getFormationCommandEnabled,
  Dn as getItemCategoryEnabled,
  Me as getItemCommandEnabled,
  Al as getItemIdFromItemCommand,
  Vn as getKeyItemCategoryEnabled,
  Cl as getNoteValue,
  Hn as getParamNames,
  ve as getSaveCommandEnabled,
  Ne as getSkillCommandEnabled,
  Tl as getSkillTypes,
  Le as getStatusCommandEnabled,
  _l as getSwitches,
  yl as getVariableNames,
  Fn as getWeaponCategoryEnabled,
  Sl as getWeaponTypes,
  Co as isCloneableCommand,
  Io as isCommandAnyAudio,
  As as isCommandBattleProcessingVariable,
  Sm as isCommandOperandVariables,
  kl as isUsingVariableItemCommand,
  Ue as isUsingVaribleCommandChangingItems,
  On as labelsRegistry,
  Qo as makeActorData,
  Jo as makeArmorData,
  ts as makeAudioCommand,
  Wo as makeBattleEventPage,
  De as makeBooleanOptions,
  $o as makeClassData,
  an as makeClassDataEx,
  Ns as makeCommandAddEachEnemyState,
  Rs as makeCommandAddEnemyState,
  Rr as makeCommandAddPartyMember,
  vt as makeCommandAddStateByVariable,
  Lt as makeCommandAddStateEachActor,
  Nt as makeCommandAddStateTargetActor,
  y as makeCommandAudioAny,
  Cs as makeCommandBattleProcessingDirect,
  _s as makeCommandBattleProcessingEncount,
  Ts as makeCommandBattleProcessingVariable,
  Ft as makeCommandChangeActorImages,
  Gt as makeCommandChangeActorName,
  wt as makeCommandChangeActorNickName,
  Ht as makeCommandChangeActorProfile,
  ns as makeCommandChangeBattleBGM,
  ls as makeCommandChangeBattleBackground,
  Ot as makeCommandChangeClass,
  ds as makeCommandChangeDefeatME,
  da as makeCommandChangeEncounter,
  Dt as makeCommandChangeEquip,
  Xe as makeCommandChangeItems,
  Gs as makeCommandChangeParallax,
  Us as makeCommandChangeTileset,
  no as makeCommandChangeVehicleBGM,
  oo as makeCommandChangeVehicleImage,
  is as makeCommandChangeVictoryME,
  Ze as makeCommandChangeWeapons,
  qa as makeCommandCommentBody,
  Xa as makeCommandCommentHeader,
  vs as makeCommandCommonEvent,
  Ds as makeCommandControlSwitches,
  ys as makeCommandControlTimer,
  Ut as makeCommandDecreaseActorParam,
  ks as makeCommandDisableEncounter,
  mr as makeCommandDisableFormationAccess,
  er as makeCommandDisableMenuAccess,
  sr as makeCommandDisableSaveAccess,
  Ss as makeCommandEnableEncounter,
  or as makeCommandEnableFormationAccess,
  tr as makeCommandEnableMenuAccess,
  rr as makeCommandEnableSaveAccess,
  Ps as makeCommandEnemyRecoverAll,
  Ls as makeCommandEnemyRecoverAllEach,
  gs as makeCommandEnemyTransform,
  Dr as makeCommandFadeInScreen,
  Zt as makeCommandFadeOutBGM,
  as as makeCommandFadeOutBGS,
  Fr as makeCommandFadeOutScreen,
  fr as makeCommandFlashScreen,
  kt as makeCommandForgetSkill,
  Mt as makeCommandForgetSkillByVariable,
  bt as makeCommandForgetSkillEachActor,
  Wt as makeCommandGainActorHP,
  zt as makeCommandGainActorMP,
  qt as makeCommandGainActorTP,
  tt as makeCommandGainArmor,
  st as makeCommandGainArmorByVariable,
  it as makeCommandGainExpByVariable,
  ot as makeCommandGainExpDirect,
  ct as makeCommandGainExpTargetAndOperandVariable,
  pt as makeCommandGainExpTargetVariable,
  Nr as makeCommandGainGold,
  Lr as makeCommandGainGoldByVariable,
  qe as makeCommandGainItem,
  Ke as makeCommandGainItemV,
  Je as makeCommandGainWeapon,
  $e as makeCommandGainWeaponV,
  qs as makeCommandGetEventIdXY,
  Ks as makeCommandGetEventIdXYDirect,
  mo as makeCommandGetOnOffVehicle,
  zs as makeCommandGetRegionId,
  js as makeCommandGetRegionIdDirect,
  Ws as makeCommandGetTerrainTag,
  Xs as makeCommandGetTerrainTagDirect,
  Qs as makeCommandGetTileId,
  Zs as makeCommandGetTileIdDirect,
  Ys as makeCommandHideMapName,
  Yt as makeCommandIncreaseActorParam,
  Fs as makeCommandInputNumber,
  St as makeCommandLearnSkill,
  Rt as makeCommandLearnSkillByVariable,
  gt as makeCommandLearnSkillEachActor,
  At as makeCommandLevelDownActor,
  Tt as makeCommandLevelDownActorByVariable,
  yt as makeCommandLevelDownEachActors,
  It as makeCommandLevelUpActor,
  Ct as makeCommandLevelUpActorByVariable,
  _t as makeCommandLevelUpEachActors,
  Xt as makeCommandLoseActorHP,
  jt as makeCommandLoseActorMP,
  Kt as makeCommandLoseActorTP,
  rt as makeCommandLoseArmor,
  mt as makeCommandLoseArmorByVariable,
  dt as makeCommandLoseExpByVariable,
  nt as makeCommandLoseExpDirect,
  Et as makeCommandLoseExpTargetAndOperandVariable,
  lt as makeCommandLoseExpTargetVariable,
  ur as makeCommandLoseGold,
  Pr as makeCommandLoseGoldByVariable,
  ze as makeCommandLoseItem,
  je as makeCommandLoseItemV,
  at as makeCommandLoseWeapon,
  et as makeCommandLoseWeaponV,
  hr as makeCommandMovePicture,
  ft as makeCommandNameInputProcessing,
  ss as makeCommandPlayBGM,
  rs as makeCommandPlayBGS,
  ms as makeCommandPlayME,
  Sr as makeCommandPlayMovie,
  os as makeCommandPlaySE,
  gr as makeCommandPluginCommandMZ,
  Vt as makeCommandRecoverAllEachActors,
  xt as makeCommandRecoverAllTargetActor,
  Bt as makeCommandRecoverAllTargetActorByVariable,
  ut as makeCommandRemoveActorTargetState,
  us as makeCommandRemoveEachEnemyState,
  Ms as makeCommandRemoveEnemyState,
  Mr as makeCommandRemovePartyMember,
  ht as makeCommandRemoveStateByVariable,
  Pt as makeCommandRemoveStateEachActors,
  $t as makeCommandResumeBGM,
  Jt as makeCommandSaveBGM,
  Br as makeCommandScriptArray,
  Qa as makeCommandScriptBody,
  ja as makeCommandScriptHeader,
  ws as makeCommandScrollMap,
  cr as makeCommandScrollingTextBody,
  pr as makeCommandScrollingTextHeader,
  xs as makeCommandSelectItem,
  Js as makeCommandSetEventLocationDirect,
  ar as makeCommandSetEventLocationExchange,
  $s as makeCommandSetEventLocationVariable,
  io as makeCommandSetVehicleLocation,
  po as makeCommandSetVehicleLocationFromVariables,
  Or as makeCommandSetWeatherEffect,
  _r as makeCommandSetupChoice,
  Vr as makeCommandShakeScreen,
  Hr as makeCommandShopProcessing,
  Qt as makeCommandShowAnimation,
  ps as makeCommandShowBalloonIcon,
  Er as makeCommandShowChoiceItem,
  Hs as makeCommandShowMapName,
  gl as makeCommandShowMessage,
  bl as makeCommandShowMessageBody,
  vr as makeCommandShowPicture,
  xr as makeCommandTintScreen,
  eo as makeCommandVariableDataLastActorId,
  $r as makeCommandVariableFromActorAgi,
  jr as makeCommandVariableFromActorAtk,
  Ur as makeCommandVariableFromActorCurrentExp,
  Wr as makeCommandVariableFromActorCurrentHp,
  Yr as makeCommandVariableFromActorCurrentLevel,
  Xr as makeCommandVariableFromActorCurrentMp,
  qr as makeCommandVariableFromActorCurrentTp,
  Qr as makeCommandVariableFromActorDef,
  am as makeCommandVariableFromActorLuk,
  Zr as makeCommandVariableFromActorMat,
  Kr as makeCommandVariableFromActorMaxHp,
  zr as makeCommandVariableFromActorMaxMp,
  Jr as makeCommandVariableFromActorMdf,
  Rm as makeCommandVariableFromArmor,
  Mm as makeCommandVariableFromConstant,
  _m as makeCommandVariableFromEnemyAgi,
  Im as makeCommandVariableFromEnemyAtk,
  dm as makeCommandVariableFromEnemyCurrentHp,
  pm as makeCommandVariableFromEnemyCurrentMp,
  lm as makeCommandVariableFromEnemyCurrentTp,
  Am as makeCommandVariableFromEnemyDef,
  ym as makeCommandVariableFromEnemyLuk,
  Cm as makeCommandVariableFromEnemyMat,
  cm as makeCommandVariableFromEnemyMaxHp,
  Em as makeCommandVariableFromEnemyMaxMp,
  Tm as makeCommandVariableFromEnemyMdf,
  gm as makeCommandVariableFromItemData,
  to as makeCommandVariableFromLastEnemyIndex,
  so as makeCommandVariableFromLastTargetActorId,
  ro as makeCommandVariableFromLastTargetEnemyIndex,
  ao as makeCommandVariableFromLastUsedItemId,
  $m as makeCommandVariableFromLastUsedSkillId,
  Lm as makeCommandVariableFromMapCharactorDirection,
  Pm as makeCommandVariableFromMapCharactorScreenX,
  vm as makeCommandVariableFromMapCharactorScreenY,
  Nm as makeCommandVariableFromMapCharactorX,
  um as makeCommandVariableFromMapCharactorY,
  Vm as makeCommandVariableFromMapId,
  Dm as makeCommandVariableFromMapPlayerDirection,
  Fm as makeCommandVariableFromMapPlayerScreenX,
  fm as makeCommandVariableFromMapPlayerScreenY,
  hm as makeCommandVariableFromMapPlayerX,
  Om as makeCommandVariableFromMapPlayerY,
  Bm as makeCommandVariableFromPartyGold,
  xm as makeCommandVariableFromPartySize,
  Gm as makeCommandVariableFromPartySteps,
  wm as makeCommandVariableFromRandom,
  Hm as makeCommandVariableFromScript,
  jm as makeCommandVariableFromSystemBattleCount,
  Zm as makeCommandVariableFromSystemEscapeCount,
  Wm as makeCommandVariableFromSystemGold,
  Ym as makeCommandVariableFromSystemMapId,
  Um as makeCommandVariableFromSystemPartyMemberCount,
  qm as makeCommandVariableFromSystemPlayTime,
  zm as makeCommandVariableFromSystemSaveCount,
  Xm as makeCommandVariableFromSystemSteps,
  Km as makeCommandVariableFromSystemTimer,
  Qm as makeCommandVariableFromSystemWinCount,
  km as makeCommandVariableFromVariable,
  bm as makeCommandVariableFromWeapon,
  la as makeCommentArray,
  ir as makeCommentCommandArray,
  Yo as makeCommonEventData,
  W as makeDamage,
  wn as makeDataNames,
  Ce as makeDropItem,
  fe as makeEditorSetting,
  tn as makeEnemyAction,
  sn as makeEnemyData,
  oe as makeEventPageCondition,
  Gn as makeGameInitial,
  he as makeItemCategories,
  xn as makeItemCategoriesFromArray,
  _n as makeItemData,
  pe as makeMapData,
  Ko as makeMapDataFromSingleEvent,
  ne as makeMapEvent,
  ie as makeMapEventIamge,
  de as makeMapEventPage,
  qo as makeMapFileInfo,
  zo as makeMapInfoData,
  Oe as makeMenuCommandsEnabled,
  Bn as makeMenuCommandsEnabledFromArray,
  Ae as makeParamArray,
  Va as makeParamNamesArray,
  ha as makeParamNamesFromArray,
  yn as makeSkillData,
  ge as makeSoundsArray,
  be as makeSoundsObject,
  rn as makeStateData,
  ke as makeSystemAdvanced,
  Ea as makeSystemData,
  Kn as makeSystemDataFromMV,
  qn as makeSystemDataMV,
  Ba as makeTermsBasic,
  Da as makeTermsBasicFromArray,
  xa as makeTermsCommandArray,
  Rl as makeTermsCommandArrayWithNulls,
  Oa as makeTermsCommandFromArray,
  fa as makeTermsMessages,
  Fe as makeTitleCommandWindow,
  Uo as makeTroopData,
  me as makeTroopEventConditions,
  Xo as makeTroopMember,
  w as makeVehicleData,
  on as makeWeaponData,
  Zo as normalizeDataActor,
  Ml as normalizeNote,
  en as paramArrayToObject,
  Nl as partyAbilityToArray,
  ul as readNote,
  Ll as readNoteEx,
  Pl as readNoteObject,
  vl as regularParamName,
  hl as regularParamsToArray,
  Ol as replaceNote,
  Dl as replaceNoteWithHandlers,
  jo as repleaceMapEventCommands,
  Fl as resolveItemEffectLabels,
  fl as resolveTraitLabels,
  Vl as setNoteValue,
  xl as specialFlagToArray,
  Bl as specialParamName,
  Gl as specialParamsToArray,
  zn as textAndDesc,
  Ua as toArrayCommonEvent,
  Wa as toArrayControlSwitches,
  fs as toArrayInputNumber,
  za as toArrayScrollingTextBody,
  Ka as toArrayScrollingTextHeader,
  Tr as toArraySetupChoice,
  Ar as toArraySetupChoiceItem,
  wl as toArrayShowMessageHeader
};
