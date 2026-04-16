import { q as f, N as D, b as F, m as T, r as u, G as N, ai as Ta, v as ya, w as _a, E as ka, y as j, p as Q, u as Z, I as $, d as J, f as aa, M as ea, am as ta, an as sa, ao as ra, aq as ma, B as H, g as ga, R as Sa, V as ba, aa as y, aC as Y, P as Ra, Q as ua, aS as Na, aR as Ma, az as va, ay as oa, aH as La, aI as Pa, X as t } from "../shared/eventCommandCodes.es.js";
import { A as fn, C as Dn, a as On, c as Fn, e as Vn, h as xn, i as Bn, j as Gn, k as wn, l as Hn, n as Yn, o as Un, s as Wn, t as Xn, x as qn, z as Kn, D as zn, F as jn, H as Qn, J as Zn, K as $n, L as Jn, O as ai, S as ei, T as ti, U as si, W as ri, Y as mi, Z as oi, _ as ni, $ as ii, a0 as di, a1 as pi, a2 as li, a3 as ci, a4 as Ii, a5 as Ei, a6 as Ai, a7 as Ci, a8 as Ti, a9 as yi, ab as _i, ac as ki, ad as gi, ae as Si, af as bi, ag as Ri, ah as ui, aj as Ni, ak as Mi, al as vi, ap as Li, ar as Pi, as as hi, at as fi, au as Di, av as Oi, aw as Fi, ax as Vi, aA as xi, aB as Bi, aD as Gi, aE as wi, aF as Hi, aG as Yi, aJ as Ui, aK as Wi, aL as Xi, aM as qi, aN as Ki, aO as zi, aP as ji, aQ as Qi, aT as Zi, aU as $i, aV as Ji, aW as ad, aX as ed, aY as td } from "../shared/eventCommandCodes.es.js";
import { be as M, bg as v, bh as S, bf as L, aT as ha, aY as fa, aV as Da, as as Oa, aZ as Fa, aS as Va, aW as xa, aU as Ba } from "../shared/commands.es.js";
import { C as rd, a as md, b as od, c as nd, E as id, d as dd, e as pd, f as ld, g as cd, h as Id, i as Ed, j as Ad, k as Cd, l as Td, m as yd, n as _d, o as kd, p as gd, q as Sd, r as bd, s as Rd, t as ud, u as Nd, v as Md, w as vd, x as Ld, y as Pd, F as hd, z as fd, A as Dd, B as Od, P as Fd, D as Vd, G as xd, H as Bd, I as Gd, J as wd, R as Hd, K as Yd, L as Ud, M as Wd, N as Xd, O as qd, Q as Kd, S as zd, T as jd, U as Qd, V as Zd, W as $d, X as Jd, Y as ap, Z as ep, _ as tp, $ as sp, a0 as rp, a1 as mp, a2 as op, a3 as np, a4 as ip, a5 as dp, a6 as pp, a7 as lp, a8 as cp, a9 as Ip, aa as Ep, ab as Ap, ac as Cp, ad as Tp, ae as yp, af as _p, ag as kp, ah as gp, ai as Sp, aj as bp, ak as Rp, al as up, am as Np, an as Mp, ao as vp, ap as Lp, aq as Pp, ar as hp, at as fp, au as Dp, av as Op, aw as Fp, ax as Vp, ay as xp, az as Bp, aA as Gp, aB as wp, aC as Hp, aD as Yp, aE as Up, aF as Wp, aG as Xp, aH as qp, aI as Kp, aJ as zp, aK as jp, aL as Qp, aM as Zp, aN as $p, aO as Jp, aP as al, aQ as el, aR as tl, aX as sl, a_ as rl, a$ as ml, b0 as ol, b1 as nl, b2 as il, b3 as dl, b4 as pl, b5 as ll, b6 as cl, b7 as Il, b8 as El, b9 as Al, ba as Cl, bb as Tl, bc as yl, bd as _l } from "../shared/commands.es.js";
import { m, g as Ga, f as wa } from "../shared/make.es.js";
import { O as gl, a as Sl, b as bl, c as Rl, d as ul, e as Nl } from "../shared/make.es.js";
const Ue = (a) => a.parameters[3] === S, We = (a) => ({ operation: a[1], itemId: a[0], value: a[3], operand: a[2] }), Xe = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.itemId, a.operation, a.operand, a.value]
}), qe = (a, e = 0) => ({ code: f, indent: e, parameters: [a.itemId, M, v, a.value] }), Ke = (a, e = 0) => ({ code: f, indent: e, parameters: [a.itemId, M, S, a.variableId] }), ze = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.itemId, L, v, a.value]
}), je = (a, e = 0) => ({ code: f, indent: e, parameters: [a.itemId, L, S, a.variableId] }), Qe = (a) => ({
  operation: a[1],
  weaponId: a[0],
  value: a[3],
  operand: a[2],
  includesEquip: a[4]
}), Ze = (a, e = 0) => ({ code: D, indent: e, parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip] }), $e = (a, e = 0) => ({
  code: D,
  indent: e,
  parameters: [a.weaponId, M, v, a.value, !1]
}), Je = (a, e = 0) => ({ code: D, indent: e, parameters: [a.weaponId, M, S, a.variableId, !1] }), at = (a, e = 0) => ({
  code: D,
  indent: e,
  parameters: [a.weaponId, L, v, a.value, !1]
}), et = (a, e = 0) => ({ code: D, indent: e, parameters: [a.weaponId, L, S, a.variableId, !1] }), tt = (a, e = 0) => ({
  code: F,
  indent: e,
  parameters: [a.armorId, M, v, a.value, !1]
}), st = (a, e = 0) => ({ code: F, indent: e, parameters: [a.armorId, M, S, a.variableId, !1] }), rt = (a, e = 0) => ({
  code: F,
  indent: e,
  parameters: [a.armorId, L, v, a.value, !1]
}), mt = (a, e = 0) => ({ code: F, indent: e, parameters: [a.armorId, L, S, a.variableId, !1] }), ot = (a, e = 0) => ({
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
}), It = (a, e = 0) => ({
  code: T,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage]
}), Et = (a, e = 0) => ({ code: u, indent: e, parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage] }), At = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage]
}), Ct = (a, e = 0) => ({ code: u, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), Tt = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), yt = (a, e = 0) => ({ code: u, indent: e, parameters: [0, 0, 0, 0, a.level, a.showMessaage] }), _t = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [0, 0, 1, 0, a.level, a.showMessaage]
}), kt = (a, e = 0) => ({ code: N, indent: e, parameters: [0, a.actorId, 0, a.skillId] }), gt = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [0, a.actorId, 1, a.skillId]
}), St = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 0, a.skillId] }), bt = (a, e = 0) => ({ code: N, indent: e, parameters: [0, 0, 1, a.skillId] }), Rt = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [1, a.variableId, 0, a.skillId]
}), ut = (a, e = 0) => ({ code: N, indent: e, parameters: [1, a.variableId, 1, a.skillId] }), Nt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 0, a.stateId]
}), Mt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 1, a.stateId] }), vt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, 0, 0, a.stateId]
}), Lt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), Pt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 0, a.stateId] }), ht = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 1, a.stateId]
}), ft = (a, e = 0) => ({ code: 321, parameters: [a.actorId, a.classId, a.keepExp], indent: e }), Dt = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Ot = ({ actorId: a = 1, faceIndex: e = 0, faceName: s = "", characterIndex: r = 0, characterName: o = "", battlerName: i = "" } = {}, d = 0) => ({
  code: 322,
  indent: d,
  parameters: [a, o, r, s, e, i]
}), Ft = (a, e = 0) => ({ code: Ta, indent: e, parameters: [a.actorId, a.maxLength] }), Vt = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), xt = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [0, a.targetActorId]
}), Bt = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.variableId] }), Gt = (a, e = 0) => ({
  code: ya,
  parameters: [a.actorId, a.name],
  indent: e
}), wt = (a, e = 0) => ({ code: _a, parameters: [a.actorId, a.nickname], indent: e }), Ht = (a, e = 0) => ({ code: ka, parameters: [a.actorId, a.profile], indent: e }), Yt = (a, e = 0) => ({
  code: j,
  indent: e,
  parameters: na(a, 0)
}), Ut = (a, e = 0) => ({ code: j, indent: e, parameters: na(a, 1) }), na = (a, e) => [a.actorId, a.paramId, e, a.value], R = { direct: 0, variable: 1 }, Wt = (a, e = 0) => ({
  code: Q,
  indent: e,
  parameters: ia(0, a)
}), Xt = (a, e = 0) => ({ code: Q, indent: e, parameters: ia(1, a) }), qt = (a, e = 0) => ({ code: $, indent: e, parameters: V(0, a) }), Kt = (a, e = 0) => ({
  code: $,
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
}), Zt = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), $t = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Jt = (a = 0) => ({ code: 244, indent: a, parameters: [] }), as = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Ha = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, es = (a) => Ha[a], ts = (a, e) => _(a, m({ name: e })), _ = (a, e, s = 0) => ({
  code: a,
  parameters: [m(e)],
  indent: s
}), ss = (a, e = 0) => _(ta, a, e), rs = (a, e = 0) => _(sa, a, e), ms = (a, e = 0) => _(ra, a, e), os = (a, e = 0) => _(ma, a, e), ns = (a, e = 0) => _(J, a, e), is = (a, e = 0) => _(ea, a, e), ds = (a, e = 0) => _(aa, a, e), ps = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), ls = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), cs = 0, Is = 1, Es = 2, As = (a) => a.parameters[0] === 1, Cs = ({ troopId: a = 0, canEscape: e = !1, canLose: s = !1 }, r = 0) => ({
  code: H,
  indent: r,
  parameters: [0, a, e, s]
}), Ts = ({ variableId: a = 0, canEscape: e = !1, canLose: s = !1 }, r = 0) => ({ code: H, indent: r, parameters: [1, a, e, s] }), ys = ({ canEscape: a = !1, canLose: e = !1 }, s = 0) => ({
  code: H,
  indent: s,
  parameters: [2, 0, a, e]
}), Ya = { plus: 0, minus: 1 }, _s = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ya[a ?? "plus"] ?? 0, e ?? 0] }), da = (a, e = 0) => ({
  code: ga,
  indent: e,
  parameters: [a]
}), ks = (a = 0) => da(0, a), gs = (a = 0) => da(1, a);
function Ss(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const bs = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Rs = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), us = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), Ns = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), Ms = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), vs = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), Ls = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), Ps = (a, e = 0) => ({ code: Sa, indent: e, parameters: Ua(a ?? {}) }), hs = (a) => ({ eventId: a[0] }), Ua = (a) => [a.eventId ?? 0], fs = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), Wa = (a) => [a.min, a.max, a.value], Ds = (a, e = 0) => ({ code: ba, indent: e, parameters: Wa(a) }), Os = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Fs = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Vs = (a) => ({ variableId: a[0], maxDigits: a[1] }), xs = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Bs = (a) => ({
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
}), Ws = (a, e = 0) => ({ code: y, indent: e, parameters: [a.variableId, 0, 1, a.x, a.y] }), Xs = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [a.variableId, 0, 0, a.x, a.y]
}), qs = (a, e = 0) => ({ code: y, indent: e, parameters: [a.variableId, 1, 1, a.x, a.y] }), Ks = (a, e = 0) => ({ code: y, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), zs = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [a.variableId, 6, 1, a.x, a.y]
}), js = (a, e = 0) => ({ code: y, indent: e, parameters: [a.variableId, 6, 0, a.x, a.y] }), Qs = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [a.variableId, pa[a.layer] ?? 2, 1, a.x, a.y]
}), Zs = (a, e = 0) => ({ code: y, indent: e, parameters: [a.variableId, pa[a.layer] ?? 2, 0, a.x, a.y] }), pa = { 1: 2, 2: 3, 3: 4, 4: 5 }, $s = (a, e = 0) => ({
  code: Y,
  indent: e,
  parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction]
}), Js = (a, e = 0) => ({
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
}), la = (a) => [a], nr = (a) => ({ comment: a[0] }), Xa = (a, e = 0) => ({ code: ua, indent: e, parameters: la(a) }), qa = (a, e = 0) => ({
  code: Ra,
  indent: e,
  parameters: la(a)
}), ir = (a, e = 0) => a.map(((s, r) => r === 0 ? Xa(s, e) : qa(s, e))), Ka = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], dr = (a) => ({ speed: a[0], skip: a[1] }), pr = (a = {}, e = 0) => ({
  code: Ma,
  indent: e,
  parameters: Ka(a)
}), za = (a = "") => [a], lr = (a) => ({ content: a[0] }), cr = (a = "", e = 0) => ({ code: Na, indent: e ?? 0, parameters: za(a) }), Ir = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Er = (a) => ({
  index: a[0],
  name: a[1]
}), Ar = (a) => [a.index ?? 0, a.name ?? ""], Cr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Tr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], yr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), _r = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), kr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), gr = (a) => ({
  filename: a[0]
}), Sr = ({ args: a = {}, commandName: e, commandTitle: s = "", pluginName: r }, o = 0) => ({ code: 357, indent: o, parameters: [r, e, s, { ...a }] }), br = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Rr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), ur = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Nr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Mr = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), vr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Lr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Pr = ({ pictureId: a = 0, origin: e = 0, name: s = "", x: r = 0, y: o = 0, scaleX: i = 100, scaleY: d = 100, opacity: n = 255, blendMode: k = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, s, e, r, o, i, d, n, k]
}), hr = ({ pictureId: a, origin: e, x: s, y: r, scaleX: o, scaleY: i, opacity: d, blendMode: n, wait: k = !1, easingType: B = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, s, r, o, i, d, n, k, B]
}), fr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Dr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Or = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Fr = (a, e = 0) => ({
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
  code: va,
  indent: e,
  parameters: [a]
}), Br = (a, e = 0) => a.map(((s, r) => r === 0 ? ja(s, e) : Qa(s, e))), Gr = 1, wr = 0, O = { item: 0, weapon: 1, armors: 2 }, Hr = ({ goods: a, buyOnly: e = !1 }, s = 0) => a.map(((r, o) => {
  const i = ((d) => d.customPrice !== void 0 && d.customPrice !== 0)(r) ? 1 : 0;
  return o === 0 ? { code: La, indent: s, parameters: [O[r.itemType] ?? O.item, r.id, i, r.customPrice ?? 0, e] } : {
    code: Pa,
    indent: s,
    parameters: [O[r.itemType] ?? O.item, r.id, i, r.customPrice ?? 0]
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
}), Zr = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 8) }), $r = (a, e = 0) => ({ code: t, indent: e, parameters: l(a, 9) }), Jr = (a, e = 0) => ({
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
}), pm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 1) }), lm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 10) }), cm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 2) }), Im = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 3)
}), Em = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 4) }), Am = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 5) }), Cm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 6)
}), Tm = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 7) }), ym = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, 8) }), _m = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, 9)
}), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], km = (a) => a.parameters[3] === 1, gm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Za(a)
}), Za = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], Sm = (a, e = 0) => ({ code: t, indent: e, parameters: $a(a) }), bm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Ja(a)
}), Rm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ae(a)
}), $a = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], Ja = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], ae = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], um = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: ee(a)
}), ee = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], E = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, Nm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A(a, E.X)
}), Mm = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, E.Y) }), vm = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, E.DIRECTION) }), Lm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A(a, E.SCREEN_X)
}), Pm = (a, e = 0) => ({ code: t, indent: e, parameters: A(a, E.SCREEN_Y) }), hm = (a, e = 0) => ({ code: t, indent: e, parameters: A({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, E.X) }), fm = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, E.Y)
}), Dm = (a, e = 0) => ({ code: t, indent: e, parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, E.DIRECTION) }), Om = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: A({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, E.SCREEN_X)
}), Fm = (a, e = 0) => ({ code: t, indent: e, parameters: A({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, E.SCREEN_Y) }), A = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], Vm = (a, e = 0) => ({
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
}), C = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], $m = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Jm = (a, e = 0) => ({ code: t, indent: e, parameters: P(a, 0) }), ao = (a, e = 0) => ({ code: t, indent: e, parameters: P(a, 1) }), eo = (a, e = 0) => ({ code: t, indent: e, parameters: P(a, 2) }), to = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: P(a, 3)
}), so = (a, e = 0) => ({ code: t, indent: e, parameters: P(a, 4) }), ro = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: P(a, 5)
}), P = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], mo = (a = 0) => ({ code: 206, indent: a, parameters: [] }), oo = (a, e = 0) => ({
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
}), lo = 0, co = 1, Io = 2, Eo = (a) => a.code === ta || a.code === sa || a.code === ra || a.code === ma || a.code === J || a.code === ea || a.code === aa, se = (a) => [...a], Ao = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: se(a.parameters)
}), re = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Co = (a) => a.parameters.every(re), U = (a, e) => `\\${a}[${e}]`, To = (a, e) => e.map(((s, r) => ({
  text: s,
  controlChar: U(a, r)
}))), yo = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({ char: e[1], id: parseInt(e[2], 10) }))), _o = (a) => a.map(((e) => ({
  text: e.name,
  controlChar: U("N", e.id)
}))), ko = (a) => a.variables.map(((e, s) => ({ text: e || "", controlChar: U("V", s) }))).filter(((e) => e.text !== "")), go = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), So = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), bo = (a) => ({
  span: a.span ?? 0,
  conditions: me(a.conditions ?? {}),
  list: a.list ?? []
}), Ro = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), me = (a = {}) => ({
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
}, priorityType: d = 1, stepAnime: n = !1, through: k = !1, walkAnime: B = !1, moveSpeed: Ea = 3, moveType: Aa = 0, trigger: Ca = 0 } = {}) => ({
  walkAnime: B,
  stepAnime: n,
  through: k,
  conditions: e,
  list: a,
  directionFix: o,
  image: s,
  priorityType: d,
  moveFrequency: r,
  moveSpeed: Ea,
  moveType: Aa,
  trigger: Ca,
  moveRoute: { list: i.list, repeat: i.repeat, skippable: i.skippable, wait: i.wait }
}), uo = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), No = (a) => pe({ events: [ne({ pages: [de({ list: a })] })] }), pe = (a = {}) => ({
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
}), Mo = (a = { id: 0 }) => {
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
}, vo = (a, e) => a.map(((s) => s ? { ...s, pages: le(s, e) } : null)), le = (a, e) => a.pages.map(((s) => ({ ...s, list: e(s.list) }))), ce = {
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
}, Ie = {
  title: "ダメージ",
  options: {}
}, W = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), Lo = (a = {}) => ({
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
}), Po = (a) => ({
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
}), ho = (a = {}) => ({
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
}), fo = (a = {}) => ({ name: a.name ?? "", id: a.id ?? 0, traits: [], note: a.note ?? "", params: a.params ?? ca(), learnings: a.learnings ?? [], expParams: a.expParams ?? [] }), Do = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: a.traits ?? [],
  note: a.note ?? "",
  params: a.params ? Ee(a.params) : ca(),
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), ca = () => [[0], [0], [0], [0], [0], [0], [0], [0]], Ee = (a) => {
  const e = a.map(((n) => n.atk)), s = a.map(((n) => n.def)), r = a.map(((n) => n.mat)), o = a.map(((n) => n.mdf)), i = a.map(((n) => n.agi)), d = a.map(((n) => n.luk));
  return [a.map(((n) => n.mhp)), a.map(((n) => n.mmp)), e, s, r, o, i, d];
}, Ae = ({ mhp: a = 0, mmp: e = 0, atk: s = 0, def: r = 0, mat: o = 0, mdf: i = 0, agi: d = 0, luk: n = 0 }) => [a, e, s, r, o, i, d, n], Oo = (a) => {
  const [e, s, r, o, i, d, n, k] = a;
  return { mhp: e, mmp: s, atk: r, def: o, mat: i, mdf: d, agi: n, luk: k };
}, Ce = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Fo = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Vo = (a = {}) => ({
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
}), xo = (a = {}) => ({
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
} }, ye = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Bo = (a, e, s) => {
  const r = Ga(ye);
  return wa(e, s, r, a.pattern, ((o) => o.dataId));
}, Go = (a = {}) => ({
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
}), wo = {
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
}, Ho = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Yo = 0, Uo = 1, Wo = 2, K = "{name} {value1}%", G = "{value1}% + {value2}", z = "{name} {value1}ターン", h = "{name}", _e = { title: "使用効果", options: {
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
} }, Xo = 0, qo = (a, e, s) => {
  const r = s.find(((i) => i.id === e.dataId)), o = r ? r.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o);
}, Ko = { title: "アイテム", options: { consumable: "消耗品" } }, zo = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, jo = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Qo = (a = {}) => ({
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
}), Zo = (a = {}) => ({
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
}), $o = "data", Jo = "actor", an = "map", en = "enemy", tn = "state", sn = "skill", rn = "item", mn = "weapon", on = "armor", nn = "class", dn = "common_event", pn = "troop", ke = {
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
}, ln = () => ({ rpg: { damage: Ie, data: ce, traits: Te, itemEffect: _e }, global: ke }), ge = (a = {}) => ({
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
}), Se = (a = {}) => [m(a.cursor), m(a.ok), m(a.cancel), m(a.buzzer), m(a.equip), m(a.save), m(a.load), m(a.battleStart), m(a.escape), m(a.enemyAttack), m(a.enemyDamage), m(a.enemyCollapse), m(a.bossCollapes1), m(a.bossCollapes2), m(a.actorDamage), m(a.actorCollapse), m(a.playRecovery), m(a.playMiss), m(a.playEvasion), m(a.playMagicEvasion), m(a.playReflection), m(a.shop), m(a.useItem), m(a.useSkill)], be = (a) => ({
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
  item: ue(a),
  skill: Ne(a),
  equip: Me(a),
  status: ve(a),
  formation: Le(a),
  save: Pe(a)
}), ue = (a) => a.menuCommands[0], Ne = (a) => a.menuCommands[1], Me = (a) => a.menuCommands[2], ve = (a) => a.menuCommands[3], Le = (a) => a.menuCommands[4], Pe = (a) => a.menuCommands[5], cn = (a) => a.itemCategories[0], In = (a) => a.itemCategories[1], En = (a) => a.itemCategories[2], An = (a) => a.itemCategories[3], he = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Cn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), fe = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], Tn = (a) => ({
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
}), yn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), _n = (a) => ({
  armorTypes: g(a.armorTypes),
  elements: g(a.elements),
  equipTypes: g(a.equipTypes),
  weaponTypes: g(a.weaponTypes),
  skillTypes: g(a.skillTypes),
  variables: g(a.variables),
  switches: g(a.switches)
}), g = (a) => a ? [...a] : [], kn = (a) => a.terms.params.map(((e, s) => ({
  name: e,
  id: s
}))), Oe = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), w = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: m(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Fe = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), gn = { title: "オプション", options: {
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
} }, Sn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, bn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Rn = {
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
}, un = (a = Ia({})) => ({
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
    messages: Oa(a.terms.messages)
  }
}), Nn = (a) => Ia({
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
    commands: fa(a.terms.commands),
    params: ha(a.terms.params),
    messages: a.terms.messages
  }
}), Ia = (a) => {
  const e = xe(a.size);
  return {
    ...De(a.options),
    titleCommandWindow: Oe(a.titleCommandWindow ?? {}),
    currencyUnit: a.texts?.currencyUnit ?? "",
    gameTitle: a.texts?.gameTitle ?? "",
    sounds: Se(a.sounds),
    editor: Fe(a.editing),
    advanced: ge(a.advanced),
    title1Name: a.images?.title1Name ?? "",
    title2Name: a.images?.title2Name ?? "",
    armorTypes: I(a.dataNames?.armorTypes),
    equipTypes: I(a.dataNames?.equipTypes),
    elements: I(a.dataNames?.elements),
    skillTypes: I(a.dataNames?.skillTypes),
    weaponTypes: I(a.dataNames?.weaponTypes),
    switches: I(a.dataNames?.switches),
    variables: I(a.dataNames?.variables),
    magicSkills: I(a.battle?.magicSkills),
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
    partyMembers: I(a.gameInit?.partyMembers),
    battlerHue: 0,
    menuCommands: fe(a.menuCommands)
  };
}, Ve = (a) => ({ basic: Ba(a.basic ?? {}), commands: xa(a.commands ?? {}), params: Va(a.params ?? {}), messages: Fa(a.messages ?? {}) }), I = (a) => a ? [...a] : [], xe = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Be = (a, e) => a ? a.map(e) : [], Ge = (a) => a ? {
  actorId: a.actorId,
  equips: I(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Mn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), vn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Ln = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  fn as ABORT_BATTLE,
  cs as BATTLE_DIRECT,
  Es as BATTLE_ENCOUNT,
  H as BATTLE_PROCESSING,
  Is as BATTLE_VARIABLE,
  Dn as CHANGE_ACTOR_IMAGES,
  On as CHANGE_ACTOR_STATE,
  F as CHANGE_ARMORS,
  Fn as CHANGE_BATTLE_BACKGROUND,
  J as CHANGE_BATTLE_BGM,
  Vn as CHANGE_CLASS,
  aa as CHANGE_DEFEAT_ME,
  ga as CHANGE_ENCOUNTER,
  xn as CHANGE_ENEMY_HP,
  Bn as CHANGE_ENEMY_MP,
  Gn as CHANGE_ENEMY_STATE,
  wn as CHANGE_ENEMY_TP,
  Hn as CHANGE_EQUIP,
  T as CHANGE_EXP,
  Yn as CHANGE_FORMATION_ACCESS,
  Un as CHANGE_GOLD,
  Q as CHANGE_HP,
  f as CHANGE_ITEMS,
  u as CHANGE_LEVEL,
  Wn as CHANGE_MAP_NAME_DISPLAY,
  Xn as CHANGE_MENU_ACCESS,
  Z as CHANGE_MP,
  ya as CHANGE_NAME,
  _a as CHANGE_NICKNAME,
  qn as CHANGE_PARALLAX,
  j as CHANGE_PARAMETER,
  Kn as CHANGE_PARTY_MEMBER,
  zn as CHANGE_PLAYER_FOLLOWERS,
  ka as CHANGE_PROFILE,
  jn as CHANGE_SAVE_ACCESS,
  N as CHANGE_SKILL,
  Qn as CHANGE_TILESET,
  $ as CHANGE_TP,
  Zn as CHANGE_TRANSPARENCY,
  $n as CHANGE_VEHICLE_BGM,
  Jn as CHANGE_VEHICLE_IMAGE,
  ea as CHANGE_VICTORY_ME,
  D as CHANGE_WEAPONS,
  ai as CHANGE_WINDOW_COLOR,
  rd as COLLAPS_BOSS,
  md as COLLAPS_INSTANT,
  od as COLLAPS_NONE,
  nd as COLLAPS_NORMAL,
  Ra as COMMENT_BODY,
  ua as COMMENT_HEAD,
  Sa as COMMON_EVENT,
  ei as CONDITIONAL_BRANCH,
  ti as CONDITIONAL_BRANCH_ELSE,
  si as CONTROL_SELF_SWITCH,
  ba as CONTROL_SWITCHES,
  ri as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Gr as CUSTOM_PRICE,
  Ie as DEFAULT_DAMAGE_LABELS,
  ke as DEFAULT_GLOBAL_LABELS,
  Ko as DEFAULT_ITEM_LABELS,
  zo as DEFAULT_SKILL_LABELS,
  gn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Sn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  jo as DEFAULT_USABLE_ITEM_LABELS,
  vn as DIRECTION,
  id as EFFECT_ADD_BUFF,
  dd as EFFECT_ADD_DEBUFF,
  pd as EFFECT_ADD_STATE,
  ld as EFFECT_COMMON_EVENT,
  cd as EFFECT_GAIN_TP,
  Id as EFFECT_GROW,
  Ed as EFFECT_LEARN_SKILL,
  Ad as EFFECT_RECOVER_HP,
  Cd as EFFECT_RECOVER_MP,
  Td as EFFECT_REMOVE_BUFF,
  yd as EFFECT_REMOVE_DEBUFF,
  _d as EFFECT_REMOVE_STATE,
  kd as EFFECT_SPECIAL,
  mi as ENEMY_APPEAR,
  oi as ENEMY_RECOVER_ALL,
  ni as ENEMY_TRANSFORM,
  ii as ERASE_EVENT,
  di as ERASE_PICTURE,
  pi as EXIT_EVENT_PROCESSING,
  gd as EXTRA_PARAM_CEV,
  Sd as EXTRA_PARAM_CNT,
  bd as EXTRA_PARAM_CRI,
  Rd as EXTRA_PARAM_EVA,
  ud as EXTRA_PARAM_HIT,
  Nd as EXTRA_PARAM_HRG,
  Md as EXTRA_PARAM_MEV,
  vd as EXTRA_PARAM_MRF,
  Ld as EXTRA_PARAM_MRG,
  Pd as EXTRA_PARAM_TRG,
  li as FADEIN_SCREEN,
  ci as FADEOUT_BGM,
  Ii as FADEOUT_BGS,
  Ei as FADEOUT_SCREEN,
  hd as FLAG_ID_AUTO_BATTLE,
  fd as FLAG_ID_GUARD,
  Dd as FLAG_ID_PRESERVE_TP,
  Od as FLAG_ID_SUBSTITUTE,
  Ai as FLASH_SCREEN,
  Ci as FORCE_ACTION,
  Ti as GAME_OVER,
  yi as GATHER_FOLLOWERS,
  y as GET_LOCATION_INFO,
  _i as GET_ONOFF_VEHICLE,
  Yo as HITTYPE_CERTAIN,
  Wo as HITTYPE_MAGICAL,
  Uo as HITTYPE_PHYSICAL,
  ki as INPUT_NUMBER,
  gi as LABEL,
  Ho as LABELS_DATA_WEAPON,
  bn as LABELS_SYSTEM_BATTLER_PARAMS,
  Rn as LABELS_SYSTEM_GAME_COMMANDS,
  Si as LABEL_JUMP,
  ce as LABEL_SET_DATA,
  _e as LABEL_SET_ITEM_EFFECT,
  Te as LABEL_SET_TRAIT,
  bi as LOOP,
  Ri as LOOP_BREAK,
  E as MAP_CHARACTOR_PARAM,
  $o as MODULE_DATA,
  ui as MOVE_PICTURE,
  Ta as NAME_INPUT_PROCESSING,
  wr as NORMAL_PRICE,
  Ni as NO_OPERATION,
  Mi as OPEN_MENU_SCREEN,
  vi as OPEN_SAVE_SCREEN,
  em as OPERAND_CONSTANT,
  rm as OPERAND_GAMEDATA,
  sm as OPERAND_RANDOM,
  mm as OPERAND_SCRIPT,
  tm as OPERAND_VARIABLE,
  gl as OPERATION_ADD,
  Sl as OPERATION_DIVIDE,
  bl as OPERATION_MOD,
  Rl as OPERATION_MULTIPLY,
  ul as OPERATION_SET,
  Nl as OPERATION_SUBTRACT,
  Fd as PARTY_ABILITY_CANCEL_SURPRISE,
  Vd as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  xd as PARTY_ABILITY_ENCOUNTER_HALF,
  Bd as PARTY_ABILITY_ENCOUNTER_NONE,
  Gd as PARTY_ABILITY_GOLD_DOUBLE,
  wd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ta as PLAY_BGM,
  sa as PLAY_BGS,
  ra as PLAY_ME,
  Li as PLAY_MOVIE,
  ma as PLAY_SE,
  Pi as PLUGIN_COMMAND_MV,
  hi as PLUGIN_COMMAND_MZ,
  fi as RECOVER_ALL,
  Hd as REGULAR_PARAM_AGI,
  Yd as REGULAR_PARAM_ATK,
  Ud as REGULAR_PARAM_DEF,
  Wd as REGULAR_PARAM_LUK,
  Xd as REGULAR_PARAM_MATK,
  qd as REGULAR_PARAM_MAX_HP,
  Kd as REGULAR_PARAM_MAX_MP,
  zd as REGULAR_PARAM_MDEF,
  Di as RESUME_BGM,
  Oi as RETURN_TO_TITLE_SCREEN,
  Fi as ROTATE_PICTURE,
  Vi as SAVE_BGM,
  wo as SCHEMA_DATA_WEAPON,
  oa as SCRIPT_EVAL,
  va as SCRIPT_EVAL_BODY,
  xi as SCROLL_MAP,
  Bi as SELECT_ITEM,
  Y as SET_EVENT_LOCATION,
  Gi as SET_MOVEMENT_ROUTE,
  wi as SET_VEHICLE_LOCATION,
  Hi as SET_WEATHER_EFFECT,
  Yi as SHAKE_SCREEN,
  La as SHOP_PROCESSING,
  Pa as SHOP_PROCESSING_BODY,
  Ui as SHOW_ANIMATION,
  Wi as SHOW_BALLOON_ICON,
  Xi as SHOW_BATTLE_ANIMATION,
  qi as SHOW_CHOICES,
  Ki as SHOW_CHOICES_ITEM,
  zi as SHOW_MESSAGE,
  ji as SHOW_MESSAGE_BODY,
  Qi as SHOW_PICTURE,
  Ma as SHOW_SCROLLING_TEXT,
  Na as SHOW_SCROLLING_TEXT_BODY,
  Zi as SKIP,
  Xo as SPECIAL_EFFECT_ESCAPE,
  jd as SPECIAL_PARAM_EXR,
  Qd as SPECIAL_PARAM_FDR,
  Zd as SPECIAL_PARAM_GRD,
  $d as SPECIAL_PARAM_MCR,
  Jd as SPECIAL_PARAM_MDR,
  ap as SPECIAL_PARAM_PDR,
  ep as SPECIAL_PARAM_PHA,
  tp as SPECIAL_PARAM_REC,
  sp as SPECIAL_PARAM_TCR,
  rp as SPECIAL_PARAM_TGR,
  Jo as SRC_DATA_ACTOR,
  on as SRC_DATA_ARMOR,
  nn as SRC_DATA_CLASS,
  dn as SRC_DATA_COMMON_EVNET,
  en as SRC_DATA_ENEMY,
  rn as SRC_DATA_ITEMS,
  an as SRC_DATA_MAP,
  sn as SRC_DATA_SKILL,
  tn as SRC_DATA_STATE,
  pn as SRC_DATA_TROOP,
  mn as SRC_DATA_WEAPON,
  $i as STOP_SE,
  Ji as TINT_PICTURE,
  ad as TINT_SCREEN,
  mp as TRAIT_ACTION_PLUS,
  op as TRAIT_ATTACK_ELEMENT,
  np as TRAIT_ATTACK_SKILL,
  ip as TRAIT_ATTACK_SPEED,
  dp as TRAIT_ATTACK_STATE,
  pp as TRAIT_ATTACK_TIMES,
  lp as TRAIT_COLLAPSE_TYPE,
  cp as TRAIT_DEBUFF_RATE,
  Ip as TRAIT_ELEMENT_RATE,
  Ep as TRAIT_EQUIP_ARMOR_TYPE,
  Ap as TRAIT_EQUIP_LOCK,
  Cp as TRAIT_EQUIP_SEAL,
  Tp as TRAIT_EQUIP_WEAPON_TYPE,
  yp as TRAIT_PARAM,
  _p as TRAIT_PARTY_ABILITY,
  kp as TRAIT_SKILL_ADD,
  gp as TRAIT_SKILL_SEAL,
  Sp as TRAIT_SKILL_TYPE_ADD,
  bp as TRAIT_SKILL_TYPE_SEAL,
  Rp as TRAIT_SLOT_TYPE,
  up as TRAIT_SPARAM,
  Np as TRAIT_SPECIAL_FLAG,
  Mp as TRAIT_STATE_RATE,
  vp as TRAIT_STATE_RESIST,
  Lp as TRAIT_XPARAM,
  ed as TRANSFER_PLAYER,
  im as TYPE_ARMOR,
  om as TYPE_ITEM,
  nm as TYPE_WEAPON,
  $m as VARIABLE_SRC_LAST,
  Io as VEHICLE_AIRSHIP,
  lo as VEHICLE_BOAT,
  co as VEHICLE_SHIP,
  td as WAIT,
  es as assetDirectoryName,
  Pp as buildNoteFromNormalized,
  _r as cloneChoices,
  Ao as cloneEventCommand,
  se as cloneParameters,
  hp as collapsOptionsToArray,
  nr as convertCommentArrayToObject,
  Oa as convertTermsMessageMZtoMV,
  _o as createActorControlChars,
  U as createControlCharFormat,
  Re as createMenuCommandState,
  fp as createNoteEntity,
  ko as createSystemVariableControlChars,
  Dp as defineGameDataSources,
  Op as defineSystemItems,
  Fp as defineTraitCollapseType,
  Vp as defineTraitExtraParam,
  xp as defineTraitItems,
  Bp as defineTraitPartyAbility,
  Gp as defineTraitRegularParam,
  wp as defineTraitSpecialFlag,
  Hp as defineTraitSpecialParam,
  Yp as extraParamName,
  Up as extraParamsToArray,
  Ln as extractFileName,
  qo as formatItemEffectText,
  Bo as formatTraitText,
  We as fromArrayChangeItems,
  Qe as fromArrayChangeWeapons,
  hs as fromArrayCommonEvent,
  fs as fromArrayControlSwitches,
  bs as fromArrayEnemyTransform,
  Vs as fromArrayInputNumber,
  gr as fromArrayPlayMovie,
  br as fromArrayPluginCommandMZ,
  lr as fromArrayScrollingTextBody,
  dr as fromArrayScrollingTextHeader,
  Bs as fromArraySelectItem,
  Cr as fromArraySetupChoice,
  Er as fromArraySetupChoiceItem,
  Wp as fromArrayShowMessageHeader,
  To as fromStringArray,
  En as getArmorCategoryEnabled,
  Xp as getArmorTypes,
  yo as getControlChars,
  qp as getElementTypes,
  Me as getEquipCommandEnabled,
  Kp as getEquipTypes,
  Le as getFormationCommandEnabled,
  cn as getItemCategoryEnabled,
  ue as getItemCommandEnabled,
  zp as getItemIdFromItemCommand,
  An as getKeyItemCategoryEnabled,
  jp as getNoteValue,
  kn as getParamNames,
  Pe as getSaveCommandEnabled,
  Ne as getSkillCommandEnabled,
  Qp as getSkillTypes,
  ve as getStatusCommandEnabled,
  Zp as getSwitches,
  $p as getVariableNames,
  In as getWeaponCategoryEnabled,
  Jp as getWeaponTypes,
  Co as isCloneableCommand,
  Eo as isCommandAnyAudio,
  As as isCommandBattleProcessingVariable,
  km as isCommandOperandVariables,
  al as isUsingVariableItemCommand,
  Ue as isUsingVaribleCommandChangingItems,
  ln as labelsRegistry,
  Lo as makeActorData,
  ho as makeArmorData,
  ts as makeAudioCommand,
  bo as makeBattleEventPage,
  De as makeBooleanOptions,
  fo as makeClassData,
  Do as makeClassDataEx,
  Ns as makeCommandAddEachEnemyState,
  Rs as makeCommandAddEnemyState,
  Rr as makeCommandAddPartyMember,
  Pt as makeCommandAddStateByVariable,
  vt as makeCommandAddStateEachActor,
  Nt as makeCommandAddStateTargetActor,
  _ as makeCommandAudioAny,
  Cs as makeCommandBattleProcessingDirect,
  ys as makeCommandBattleProcessingEncount,
  Ts as makeCommandBattleProcessingVariable,
  Ot as makeCommandChangeActorImages,
  Gt as makeCommandChangeActorName,
  wt as makeCommandChangeActorNickName,
  Ht as makeCommandChangeActorProfile,
  ns as makeCommandChangeBattleBGM,
  ls as makeCommandChangeBattleBackground,
  ft as makeCommandChangeClass,
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
  Ps as makeCommandCommonEvent,
  Ds as makeCommandControlSwitches,
  _s as makeCommandControlTimer,
  Ut as makeCommandDecreaseActorParam,
  gs as makeCommandDisableEncounter,
  mr as makeCommandDisableFormationAccess,
  er as makeCommandDisableMenuAccess,
  sr as makeCommandDisableSaveAccess,
  ks as makeCommandEnableEncounter,
  or as makeCommandEnableFormationAccess,
  tr as makeCommandEnableMenuAccess,
  rr as makeCommandEnableSaveAccess,
  Ls as makeCommandEnemyRecoverAll,
  vs as makeCommandEnemyRecoverAllEach,
  Ss as makeCommandEnemyTransform,
  Dr as makeCommandFadeInScreen,
  Zt as makeCommandFadeOutBGM,
  as as makeCommandFadeOutBGS,
  Or as makeCommandFadeOutScreen,
  Fr as makeCommandFlashScreen,
  gt as makeCommandForgetSkill,
  ut as makeCommandForgetSkillByVariable,
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
  vr as makeCommandGainGoldByVariable,
  qe as makeCommandGainItem,
  Ke as makeCommandGainItemV,
  $e as makeCommandGainWeapon,
  Je as makeCommandGainWeaponV,
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
  Os as makeCommandInputNumber,
  kt as makeCommandLearnSkill,
  Rt as makeCommandLearnSkillByVariable,
  St as makeCommandLearnSkillEachActor,
  At as makeCommandLevelDownActor,
  Tt as makeCommandLevelDownActorByVariable,
  _t as makeCommandLevelDownEachActors,
  Et as makeCommandLevelUpActor,
  Ct as makeCommandLevelUpActorByVariable,
  yt as makeCommandLevelUpEachActors,
  Xt as makeCommandLoseActorHP,
  jt as makeCommandLoseActorMP,
  Kt as makeCommandLoseActorTP,
  rt as makeCommandLoseArmor,
  mt as makeCommandLoseArmorByVariable,
  dt as makeCommandLoseExpByVariable,
  nt as makeCommandLoseExpDirect,
  It as makeCommandLoseExpTargetAndOperandVariable,
  lt as makeCommandLoseExpTargetVariable,
  Mr as makeCommandLoseGold,
  Lr as makeCommandLoseGoldByVariable,
  ze as makeCommandLoseItem,
  je as makeCommandLoseItemV,
  at as makeCommandLoseWeapon,
  et as makeCommandLoseWeaponV,
  hr as makeCommandMovePicture,
  Ft as makeCommandNameInputProcessing,
  ss as makeCommandPlayBGM,
  rs as makeCommandPlayBGS,
  ms as makeCommandPlayME,
  kr as makeCommandPlayMovie,
  os as makeCommandPlaySE,
  Sr as makeCommandPluginCommandMZ,
  Vt as makeCommandRecoverAllEachActors,
  xt as makeCommandRecoverAllTargetActor,
  Bt as makeCommandRecoverAllTargetActorByVariable,
  Mt as makeCommandRemoveActorTargetState,
  Ms as makeCommandRemoveEachEnemyState,
  us as makeCommandRemoveEnemyState,
  ur as makeCommandRemovePartyMember,
  ht as makeCommandRemoveStateByVariable,
  Lt as makeCommandRemoveStateEachActors,
  Jt as makeCommandResumeBGM,
  $t as makeCommandSaveBGM,
  Br as makeCommandScriptArray,
  Qa as makeCommandScriptBody,
  ja as makeCommandScriptHeader,
  ws as makeCommandScrollMap,
  cr as makeCommandScrollingTextBody,
  pr as makeCommandScrollingTextHeader,
  xs as makeCommandSelectItem,
  $s as makeCommandSetEventLocationDirect,
  ar as makeCommandSetEventLocationExchange,
  Js as makeCommandSetEventLocationVariable,
  io as makeCommandSetVehicleLocation,
  po as makeCommandSetVehicleLocationFromVariables,
  fr as makeCommandSetWeatherEffect,
  yr as makeCommandSetupChoice,
  Vr as makeCommandShakeScreen,
  Hr as makeCommandShopProcessing,
  Qt as makeCommandShowAnimation,
  ps as makeCommandShowBalloonIcon,
  Ir as makeCommandShowChoiceItem,
  Hs as makeCommandShowMapName,
  el as makeCommandShowMessage,
  tl as makeCommandShowMessageBody,
  Pr as makeCommandShowPicture,
  xr as makeCommandTintScreen,
  eo as makeCommandVariableDataLastActorId,
  Jr as makeCommandVariableFromActorAgi,
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
  $r as makeCommandVariableFromActorMdf,
  Rm as makeCommandVariableFromArmor,
  um as makeCommandVariableFromConstant,
  ym as makeCommandVariableFromEnemyAgi,
  Em as makeCommandVariableFromEnemyAtk,
  dm as makeCommandVariableFromEnemyCurrentHp,
  pm as makeCommandVariableFromEnemyCurrentMp,
  lm as makeCommandVariableFromEnemyCurrentTp,
  Am as makeCommandVariableFromEnemyDef,
  _m as makeCommandVariableFromEnemyLuk,
  Cm as makeCommandVariableFromEnemyMat,
  cm as makeCommandVariableFromEnemyMaxHp,
  Im as makeCommandVariableFromEnemyMaxMp,
  Tm as makeCommandVariableFromEnemyMdf,
  Sm as makeCommandVariableFromItemData,
  to as makeCommandVariableFromLastEnemyIndex,
  so as makeCommandVariableFromLastTargetActorId,
  ro as makeCommandVariableFromLastTargetEnemyIndex,
  ao as makeCommandVariableFromLastUsedItemId,
  Jm as makeCommandVariableFromLastUsedSkillId,
  vm as makeCommandVariableFromMapCharactorDirection,
  Lm as makeCommandVariableFromMapCharactorScreenX,
  Pm as makeCommandVariableFromMapCharactorScreenY,
  Nm as makeCommandVariableFromMapCharactorX,
  Mm as makeCommandVariableFromMapCharactorY,
  Vm as makeCommandVariableFromMapId,
  Dm as makeCommandVariableFromMapPlayerDirection,
  Om as makeCommandVariableFromMapPlayerScreenX,
  Fm as makeCommandVariableFromMapPlayerScreenY,
  hm as makeCommandVariableFromMapPlayerX,
  fm as makeCommandVariableFromMapPlayerY,
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
  gm as makeCommandVariableFromVariable,
  bm as makeCommandVariableFromWeapon,
  la as makeCommentArray,
  ir as makeCommentCommandArray,
  go as makeCommonEventData,
  W as makeDamage,
  _n as makeDataNames,
  Ce as makeDropItem,
  Fe as makeEditorSetting,
  Fo as makeEnemyAction,
  Vo as makeEnemyData,
  oe as makeEventPageCondition,
  yn as makeGameInitial,
  he as makeItemCategories,
  Cn as makeItemCategoriesFromArray,
  Qo as makeItemData,
  pe as makeMapData,
  No as makeMapDataFromSingleEvent,
  ne as makeMapEvent,
  ie as makeMapEventIamge,
  de as makeMapEventPage,
  uo as makeMapFileInfo,
  Mo as makeMapInfoData,
  fe as makeMenuCommandsEnabled,
  Tn as makeMenuCommandsEnabledFromArray,
  Ae as makeParamArray,
  Va as makeParamNamesArray,
  ha as makeParamNamesFromArray,
  Zo as makeSkillData,
  Se as makeSoundsArray,
  be as makeSoundsObject,
  xo as makeStateData,
  ge as makeSystemAdvanced,
  Ia as makeSystemData,
  Nn as makeSystemDataFromMV,
  un as makeSystemDataMV,
  Ba as makeTermsBasic,
  Da as makeTermsBasicFromArray,
  xa as makeTermsCommandArray,
  sl as makeTermsCommandArrayWithNulls,
  fa as makeTermsCommandFromArray,
  Fa as makeTermsMessages,
  Oe as makeTitleCommandWindow,
  So as makeTroopData,
  me as makeTroopEventConditions,
  Ro as makeTroopMember,
  w as makeVehicleData,
  Go as makeWeaponData,
  Po as normalizeDataActor,
  rl as normalizeNote,
  Oo as paramArrayToObject,
  ml as partyAbilityToArray,
  ol as readNote,
  nl as readNoteEx,
  il as readNoteObject,
  dl as regularParamName,
  pl as regularParamsToArray,
  ll as replaceNote,
  cl as replaceNoteWithHandlers,
  vo as repleaceMapEventCommands,
  Il as resolveItemEffectLabels,
  El as resolveTraitLabels,
  Al as setNoteValue,
  Cl as specialFlagToArray,
  Tl as specialParamName,
  yl as specialParamsToArray,
  Mn as textAndDesc,
  Ua as toArrayCommonEvent,
  Wa as toArrayControlSwitches,
  Fs as toArrayInputNumber,
  za as toArrayScrollingTextBody,
  Ka as toArrayScrollingTextHeader,
  Tr as toArraySetupChoice,
  Ar as toArraySetupChoiceItem,
  _l as toArrayShowMessageHeader
};
