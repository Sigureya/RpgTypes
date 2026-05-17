import { m as A, r as S, G as y, ai as sa, y as q, p as K, u as j, I as Q, B, g as oa, R as na, V as da, q as N, N as v, b as f, aa as C, aC as H, aS as ia, aR as la, az as ca, ay as Z, aH as pa, aI as Ea, X as t, aZ as Aa, am as Ca, an as Ia, ao as Ta, aq as _a, d as ka, M as ua, f as Ra } from "../shared/makeAudio.es.js";
import { A as Kd, C as jd, a as Qd, c as Zd, e as Jd, h as $d, i as ai, j as ei, k as ti, l as mi, n as ri, o as si, s as oi, t as ni, v as di, w as ii, x as li, z as ci, D as pi, E as Ei, F as Ai, H as Ci, J as Ii, K as Ti, L as _i, O as ki, P as ui, Q as Ri, S as Si, T as yi, U as bi, W as gi, Y as Pi, Z as Mi, _ as Li, $ as Ni, a0 as vi, a1 as Oi, a2 as fi, a3 as hi, a4 as Di, a5 as Fi, a6 as Vi, a7 as Gi, a8 as Bi, a9 as Hi, ab as xi, ac as wi, ad as Yi, ae as Ui, af as Wi, ag as zi, ah as Xi, aj as qi, ak as Ki, al as ji, ap as Qi, ar as Zi, as as Ji, at as $i, au as al, av as el, aw as tl, ax as ml, aA as rl, aB as sl, aD as ol, aE as nl, aF as dl, aG as il, aJ as ll, aK as cl, aL as pl, aM as El, aN as Al, aO as Cl, aP as Il, aQ as Tl, aT as _l, aU as kl, aV as ul, aW as Rl, aX as Sl, aY as yl } from "../shared/makeAudio.es.js";
import { O as b, E as g, F as T, D as P } from "../shared/isScript.es.js";
import { K as gl, a as Pl, b as Ml, c as Ll, d as Nl, e as vl, f as Ol, g as fl, h as hl, i as Dl, j as Fl, k as Vl, l as Gl, m as Bl, n as Hl, o as xl, p as wl, q as Yl, r as Ul, s as Wl, t as zl, u as Xl, v as ql, w as Kl, x as jl, y as Ql, z as Zl, A as Jl, B as $l, C as ac } from "../shared/isScript.es.js";
import { g as Sa, f as ya } from "../shared/applyFormat.es.js";
import { O as tc, a as mc, b as rc, c as sc, d as oc, e as nc } from "../shared/applyFormat.es.js";
import { c as ic, a as lc, g as cc, b as pc, d as Ec, e as Ac, f as Cc, h as Ic, i as Tc, j as _c, k as kc, l as uc, m as Rc, n as Sc, o as yc, p as bc, q as gc, r as Pc, s as Mc, t as Lc, u as Nc, v as vc, w as Oc, x as fc, y as hc, z as Dc, A as Fc, B as Vc, C as Gc, D as Bc, E as Hc, F as xc, G as wc, H as Yc, I as Uc, J as Wc, K as zc, L as Xc, M as qc, N as Kc, O as jc, P as Qc, Q as Zc, R as Jc, S as $c, T as ap, U as ep, V as tp, W as mp, X as rp, Y as sp, Z as op, _ as np, $ as dp, a0 as ip, a1 as lp, a2 as cp, a3 as pp, a4 as Ep, a5 as Ap, a6 as Cp, a7 as Ip, a8 as Tp, a9 as _p, aa as kp, ab as up, ac as Rp, ad as Sp, ae as yp, af as bp, ag as gp, ah as Pp } from "../shared/makeSystemEx.es.js";
import { c as Lp, f as Np, m as vp, a as Op, b as fp, d as hp, e as Dp, g as Fp, h as Vp, i as Gp, j as Bp, k as Hp, l as xp, n as wp, o as Yp, p as Up, q as Wp, r as zp, s as Xp, t as qp, u as Kp, v as jp, w as Qp, x as Zp, y as Jp } from "../shared/makeSystem.es.js";
const Tt = (a, e = 0) => ({ code: A, indent: e, parameters: [0, a.actorId, 0, 0, a.exp, a.showMessaage] }), _t = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [0, a.actorId, 1, 0, a.exp, a.showMessaage]
}), kt = (a, e = 0) => ({ code: A, indent: e, parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage] }), ut = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage]
}), Rt = (a, e = 0) => ({ code: A, indent: e, parameters: [1, a.targetVariableId, 0, 0, a.value, a.showMessaage] }), St = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [1, a.targetVariableId, 1, 0, a.value, a.showMessaage]
}), yt = (a, e = 0) => ({
  code: A,
  indent: e,
  parameters: [1, a.targetVariableId, 0, 1, a.operandVariableId, a.showMessaage]
}), bt = (a, e = 0) => ({ code: A, indent: e, parameters: [1, a.targetVariableId, 1, 1, a.operandVariableId, a.showMessaage] }), gt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 0, a.level, a.showMessaage]
}), Pt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 0, a.level, a.showMessaage] }), Mt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, a.actorId, 0, 1, a.variableId, a.showMessaage]
}), Lt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, a.actorId, 1, 1, a.variableId, a.showMessaage] }), Nt = (a, e = 0) => ({
  code: S,
  indent: e,
  parameters: [0, 0, 0, 0, a.level, a.showMessaage]
}), vt = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), Ot = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), ft = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), ht = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, 0, 0, a.skillId]
}), Dt = (a, e = 0) => ({ code: y, indent: e, parameters: [0, 0, 1, a.skillId] }), Ft = (a, e = 0) => ({ code: y, indent: e, parameters: [1, a.variableId, 0, a.skillId] }), Vt = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [1, a.variableId, 1, a.skillId]
}), Gt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), Bt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), Ht = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), xt = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), wt = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [1, a.actorIdVariable, 0, a.stateId]
}), Yt = (a, e = 0) => ({ code: 313, indent: e, parameters: [1, a.actorIdVariable, 1, a.stateId] }), Ut = (a, e = 0) => ({
  code: sa,
  indent: e,
  parameters: [a.actorId, a.maxLength]
}), Wt = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), zt = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Xt = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.variableId]
}), qt = (a, e = 0) => ({ code: q, indent: e, parameters: J(a, 0) }), Kt = (a, e = 0) => ({
  code: q,
  indent: e,
  parameters: J(a, 1)
}), J = (a, e) => [a.actorId, a.paramId, e, a.value], R = { direct: 0, variable: 1 }, jt = (a, e = 0) => ({ code: K, indent: e, parameters: $(0, a) }), Qt = (a, e = 0) => ({
  code: K,
  indent: e,
  parameters: $(1, a)
}), Zt = (a, e = 0) => ({ code: Q, indent: e, parameters: h(0, a) }), Jt = (a, e = 0) => ({ code: Q, indent: e, parameters: h(1, a) }), $t = (a, e = 0) => ({ code: j, indent: e, parameters: h(0, a) }), am = (a, e = 0) => ({
  code: j,
  indent: e,
  parameters: h(1, a)
}), h = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value], $ = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value, e.allowDeath], em = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), tm = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), mm = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), rm = (a = 0) => ({ code: 244, indent: a, parameters: [] }), sm = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), ba = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se"
}, om = (a) => ba[a], nm = (a, e = 0) => ({ code: 213, indent: e, parameters: [a.characterId, a.balloonId, a.waiting] }), dm = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), im = 0, lm = 1, cm = 2, pm = (a) => a.parameters[0] === 1, Em = ({ troopId: a = 0, canEscape: e = !1, canLose: m = !1 }, r = 0) => ({
  code: B,
  indent: r,
  parameters: [0, a, e, m]
}), Am = ({ variableId: a = 0, canEscape: e = !1, canLose: m = !1 }, r = 0) => ({ code: B, indent: r, parameters: [1, a, e, m] }), Cm = ({ canEscape: a = !1, canLose: e = !1 }, m = 0) => ({
  code: B,
  indent: m,
  parameters: [2, 0, a, e]
}), ga = { plus: 0, minus: 1 }, Im = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ga[a ?? "plus"] ?? 0, e ?? 0] }), aa = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: [a]
}), Tm = (a = 0) => aa(0, a), _m = (a = 0) => aa(1, a);
function km(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const um = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Rm = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 0, a.stateId]
}), Sm = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 1, a.stateId] }), ym = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 0, a.stateId]
}), bm = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), gm = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), Pm = (a, e = 0) => ({
  code: 334,
  indent: e,
  parameters: [a.enemyIndex]
}), Mm = (a, e = 0) => ({ code: na, indent: e, parameters: Pa(a ?? {}) }), Lm = (a) => ({ eventId: a[0] }), Pa = (a) => [a.eventId ?? 0], Nm = (a) => ({
  min: a[0],
  max: a[1],
  value: a[2]
}), Ma = (a) => [a.min, a.max, a.value], vm = (a, e = 0) => ({ code: da, indent: e, parameters: Ma(a) }), Om = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), fm = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], hm = (a) => ({ variableId: a[0], maxDigits: a[1] }), Dm = (a) => a.parameters[3] === T, Fm = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), Vm = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), Gm = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, b, g, a.value] }), Bm = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, b, T, a.variableId]
}), Hm = (a, e = 0) => ({ code: N, indent: e, parameters: [a.itemId, P, g, a.value] }), xm = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.itemId, P, T, a.variableId]
}), wm = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Ym = (a, e = 0) => ({
  code: v,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Um = (a, e = 0) => ({ code: v, indent: e, parameters: [a.weaponId, b, g, a.value, !1] }), Wm = (a, e = 0) => ({
  code: v,
  indent: e,
  parameters: [a.weaponId, b, T, a.variableId, !1]
}), zm = (a, e = 0) => ({ code: v, indent: e, parameters: [a.weaponId, P, g, a.value, !1] }), Xm = (a, e = 0) => ({
  code: v,
  indent: e,
  parameters: [a.weaponId, P, T, a.variableId, !1]
}), qm = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, b, g, a.value, !1] }), Km = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, b, T, a.variableId, !1]
}), jm = (a, e = 0) => ({ code: f, indent: e, parameters: [a.armorId, P, g, a.value, !1] }), Qm = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.armorId, P, T, a.variableId, !1]
}), Zm = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Jm = (a) => ({ variableId: a[0], itemType: a[1] }), $m = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), ar = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), er = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), tr = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), mr = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), rr = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, 0, 1, a.x, a.y]
}), sr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, 0, 0, a.x, a.y] }), or = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, 1, 1, a.x, a.y]
}), nr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, 1, 0, a.x, a.y] }), dr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, 6, 1, a.x, a.y] }), ir = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, 6, 0, a.x, a.y]
}), lr = (a, e = 0) => ({ code: C, indent: e, parameters: [a.variableId, ea[a.layer] ?? 2, 1, a.x, a.y] }), cr = (a, e = 0) => ({
  code: C,
  indent: e,
  parameters: [a.variableId, ea[a.layer] ?? 2, 0, a.x, a.y]
}), ea = { 1: 2, 2: 3, 3: 4, 4: 5 }, pr = (a, e = 0) => ({ code: H, indent: e, parameters: [a.targetCharacterId, 0, a.x, a.y, a.direction] }), Er = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: [a.targetCharacterId, 1, a.xVariableId, a.yVariableId, a.direction]
}), Ar = (a, e = 0) => ({
  code: H,
  indent: e,
  parameters: [a.targetCharacterId, 2, a.exchangeCharacterId, 0, a.direction]
}), Cr = (a = 0) => ({ code: 135, parameters: [1], indent: a }), Ir = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Tr = (a = 0) => ({
  code: 134,
  parameters: [1],
  indent: a
}), _r = (a = 0) => ({ code: 134, parameters: [0], indent: a }), kr = (a = 0) => ({ code: 137, parameters: [1], indent: a }), ur = (a = 0) => ({
  code: 137,
  parameters: [0],
  indent: a
}), La = (a = {}) => [a?.speed ?? 4, a?.skip ?? !1], Rr = (a) => ({ speed: a[0], skip: a[1] }), Sr = (a = {}, e = 0) => ({ code: la, indent: e, parameters: La(a) }), Na = (a = "") => [a], yr = (a) => ({ content: a[0] }), br = (a = "", e = 0) => ({
  code: ia,
  indent: e ?? 0,
  parameters: Na(a)
}), gr = (a, e = 0) => ({ code: 402, indent: e, parameters: [a?.index ?? 0, a?.name ?? ""] }), Pr = (a) => ({ index: a[0], name: a[1] }), Mr = (a) => [a.index ?? 0, a.name ?? ""], Lr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Nr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], vr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), Or = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), fr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), hr = (a) => ({
  filename: a[0]
}), Dr = ({ args: a = {}, commandName: e, commandTitle: m = "", pluginName: r }, d = 0) => ({ code: 357, indent: d, parameters: [r, e, m, { ...a }] }), Fr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Vr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Gr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Br = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Hr = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), xr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), wr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Yr = ({ pictureId: a = 0, origin: e = 0, name: m = "", x: r = 0, y: d = 0, scaleX: E = 100, scaleY: k = 100, opacity: F = 255, blendMode: V = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, m, e, r, d, E, k, F, V]
}), Ur = ({ pictureId: a, origin: e, x: m, y: r, scaleX: d, scaleY: E, opacity: k, blendMode: F, wait: V = !1, easingType: ra = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, m, r, d, E, k, F, V, ra]
}), Wr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), zr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Xr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), qr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Kr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), jr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), va = (a, e = 0) => ({ code: Z, indent: e, parameters: [a] }), Oa = (a, e = 0) => ({
  code: ca,
  indent: e,
  parameters: [a]
}), Qr = (a, e = 0) => a.map(((m, r) => r === 0 ? va(m, e) : Oa(m, e))), Zr = 1, Jr = 0, O = { item: 0, weapon: 1, armors: 2 }, $r = ({ goods: a, buyOnly: e = !1 }, m = 0) => a.map(((r, d) => {
  const E = ((k) => k.customPrice !== void 0 && k.customPrice !== 0)(r) ? 1 : 0;
  return d === 0 ? { code: pa, indent: m, parameters: [O[r.itemType] ?? O.item, r.id, E, r.customPrice ?? 0, e] } : {
    code: Ea,
    indent: m,
    parameters: [O[r.itemType] ?? O.item, r.id, E, r.customPrice ?? 0]
  };
})), as = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 0) }), es = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 1)
}), ts = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 2) }), ms = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 3) }), rs = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 12) }), ss = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 4)
}), os = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 5) }), ns = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 6) }), ds = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 7)
}), is = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 8) }), ls = (a, e = 0) => ({ code: t, indent: e, parameters: o(a, 9) }), cs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 10)
}), ps = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: o(a, 11)
}), o = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 3, a.actorId, e], Es = 0, As = 1, Cs = 2, Is = 3, Ts = 4, _s = 0, ks = 1, us = 2, Rs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: i(a, 0)
}), Ss = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 1) }), ys = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 10) }), bs = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 2) }), gs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: i(a, 3)
}), Ps = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 4) }), Ms = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 5) }), Ls = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: i(a, 6)
}), Ns = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 7) }), vs = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 8) }), Os = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: i(a, 9)
}), i = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], fs = (a) => a.parameters[3] === 1, hs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: fa(a)
}), fa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], Ds = (a, e = 0) => ({ code: t, indent: e, parameters: ha(a) }), Fs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Da(a)
}), Vs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Fa(a)
}), ha = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], Da = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], Fa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], Gs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Va(a)
}), Va = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 0, a.value], l = { X: 0, Y: 1, DIRECTION: 2, SCREEN_X: 3, SCREEN_Y: 4 }, Bs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, l.X)
}), Hs = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, l.Y) }), xs = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, l.DIRECTION) }), ws = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c(a, l.SCREEN_X)
}), Ys = (a, e = 0) => ({ code: t, indent: e, parameters: c(a, l.SCREEN_Y) }), Us = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, l.X) }), Ws = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.Y)
}), zs = (a, e = 0) => ({ code: t, indent: e, parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.DIRECTION) }), Xs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.SCREEN_X)
}), qs = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, l.SCREEN_Y) }), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], Ks = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: D(a, 0)
}), js = (a, e = 0) => ({ code: t, indent: e, parameters: D(a, 1) }), Qs = (a, e = 0) => ({ code: t, indent: e, parameters: D(a, 2) }), Zs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: D(a, 3)
}), D = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], Js = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Ga(a)
}), Ga = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 2, a.min, a.max], $s = (a, e = 0) => ({ code: Z, indent: e, parameters: [a] }), ao = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 0)
}), eo = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 1) }), to = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 2) }), mo = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 3) }), ro = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 4)
}), so = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 5) }), oo = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 6) }), no = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 7)
}), io = (a, e = 0) => ({ code: t, indent: e, parameters: p(a, 8) }), lo = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: p(a, 9)
}), p = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 7, e], co = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, po = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 0) }), Eo = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 1) }), Ao = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 2) }), Co = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: M(a, 3)
}), Io = (a, e = 0) => ({ code: t, indent: e, parameters: M(a, 4) }), To = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: M(a, 5)
}), M = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 8, e], _o = (a = 0) => ({ code: 206, indent: a, parameters: [] }), ko = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), uo = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, Aa(a.bgm)] }), Ro = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), So = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), yo = 0, bo = 1, go = 2, Po = (a) => a.code === Ca || a.code === Ia || a.code === Ta || a.code === _a || a.code === ka || a.code === ua || a.code === Ra, Ba = (a) => [...a], Mo = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ba(a.parameters)
}), Ha = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Lo = (a) => a.parameters.every(Ha), No = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
}))), vo = (a, e) => a.map(((m) => m ? { ...m, pages: xa(m, e) } : null)), xa = (a, e) => a.pages.map(((m) => ({
  ...m,
  list: e(m.list)
}))), Oo = (a, e) => [wa(a.skills, e), Ya(a.actors, e), Ua(a.states, e), Wa(a.armors, e), za(a.classes, e), Xa(a.enemies, e), qa(a.items, e), Ka(a.weapons, e), ja(a.commonEvents, e)], wa = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), Ya = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), Ua = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), Wa = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), za = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), Xa = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), qa = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), Ka = (a, e) => ({ items: a, label: e.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), ja = (a, e) => ({ items: a, label: e.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), Qa = {
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
}, fo = 11, ho = 12, Do = 13, Fo = 14, Vo = 21, Go = 22, Bo = 23, Ho = 31, xo = 32, wo = 33, Yo = 34, Uo = 35, Wo = 41, zo = 42, Xo = 43, qo = 44, Ko = 51, jo = 52, Qo = 53, Zo = 54, Jo = 55, $o = 61, an = 62, en = 63, tn = 64, mn = 0, rn = 1, sn = 2, on = 3, Za = (a, e) => ({
  items: Ja(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), Ja = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], nn = 0, dn = 1, ln = 2, cn = 3, pn = 4, En = 5, An = 6, Cn = 7, In = 8, Tn = 9, $a = (a) => ({
  items: ae(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), ae = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], _n = (a, e) => {
  switch (a) {
    case 3:
      return e.criticalEvasionRate;
    case 1:
      return e.evasionRate;
    case 6:
      return e.counterAttackRate;
    case 2:
      return e.criticalRate;
    case 0:
      return e.hitRate;
    case 7:
      return e.hpRegenerationRate;
    case 4:
      return e.magicEvasionRate;
    case 5:
      return e.magicReflectionRate;
    case 8:
      return e.mpRegenerationRate;
    case 9:
      return e.tpRegenerationRate;
  }
  return `?xparams[${a}]`;
}, kn = 0, un = 1, Rn = 2, Sn = 3, yn = 4, bn = 5, gn = 6, Pn = 7, ee = (a) => ({ items: te(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), te = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Mn = (a, e) => {
  switch (a) {
    case 0:
      return e.maxHp;
    case 1:
      return e.maxMp;
    case 2:
      return e.atk;
    case 3:
      return e.def;
    case 4:
      return e.matk;
    case 5:
      return e.mdef;
    case 6:
      return e.agi;
    case 7:
      return e.luk;
    default:
      return `?rparams[${a}]`;
  }
}, Ln = 0, Nn = 1, vn = 2, On = 3, fn = 4, hn = 5, Dn = 6, Fn = 7, Vn = 8, Gn = 9, me = (a) => ({ items: re(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), re = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], Bn = (a, e) => {
  switch (a) {
    case 9:
      return e.experienceRate;
    case 0:
      return e.targetRate;
    case 8:
      return e.floorDamageRate;
    case 1:
      return e.guardEffectRate;
    case 4:
      return e.mpCostRate;
    case 5:
      return e.tpChargeRate;
    case 6:
      return e.physicalDamageRate;
    case 7:
      return e.magicDamageRate;
    case 3:
      return e.pharmacology;
    case 2:
      return e.recoveryEffectRate;
  }
  return `?sparams[${a}]`;
}, Hn = 0, xn = 1, wn = 2, Yn = 3, Un = 4, Wn = 5, se = (a) => ({
  items: oe(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), oe = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], zn = 0, Xn = 1, qn = 2, Kn = 3, ne = (a) => ({ items: de(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), de = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], s = "{name}", u = "{name} * {value}%", U = "{name} + {value}%", W = "{value}", ie = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: u, options: {
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
    specialParam: { title: "特殊能力値", format: u, options: {
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
    elementRate: { title: "属性有効度", format: u },
    debuffRate: { title: "弱体有効度", format: u },
    stateRate: { title: "ステート有効度", format: u },
    stateResist: {
      title: "ステート無効",
      format: s
    },
    attackElement: { title: "攻撃属性", format: s },
    attackState: { title: "攻撃ステート", format: U },
    attackSpeed: { title: "攻撃速度補正", format: W },
    attackTimes: {
      title: "攻撃追加回数",
      format: W
    },
    actionPlus: { title: "行動追加", format: u },
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
  }
}, jn = (a, e) => [ee(a.regularParam), $a(a.extraParam), me(a.specialParam), Za(a.collaps, e), ne(a.specialFlag), se(a.partyAbility)], le = { itemMapper: {
  placeHolder: "name",
  dataIdKey: "dataId",
  kindKey: "code"
}, placeHolder: { numbers: ["value"] } }, Qn = (a, e, m) => {
  const r = Sa(le);
  return ya(e, m, r, a.pattern, ((d) => d.dataId));
}, ce = { title: "ダメージ", options: {} }, Zn = {
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
}, Jn = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, $n = 0, ad = 1, ed = 2, td = 11, md = 12, rd = 13, sd = 21, od = 22, nd = 31, dd = 32, id = 33, ld = 34, cd = 41, pd = 42, Ed = 43, Ad = 44, Cd = (a) => [Ee(a), Ae(a), Ce(a), Ie(a), Te(a), _e(a), ke(a), ue(a), Re(a), pe(a), Se(a), ye(a), be(a)], n = (a, e, m) => ({
  kindId: a,
  label: e.domainName,
  pattern: e.format,
  description: e.desc,
  dataSource: m
}), pe = (a) => n(41, a.special), Ee = (a) => n(11, a.recoverHp), Ae = (a) => n(12, a.recoverMp), Ce = (a) => n(13, a.gainTp), Ie = (a) => n(21, a.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), Te = (a) => n(22, a.removeState, { author: "rmmz", module: "data", kind: "state" }), _e = (a) => n(31, a.addBuff, { author: "rmmz", module: "trait", kind: "params" }), ke = (a) => n(32, a.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), ue = (a) => n(33, a.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), Re = (a) => n(34, a.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Se = (a) => n(42, a.grow, { author: "rmmz", module: "trait", kind: "params" }), ye = (a) => n(43, a.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), be = (a) => n(44, a.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), z = "{name} {value1}%", G = "{value1}% + {value2}", X = "{name} {value1}ターン", L = "{name}", ge = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: X
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: X }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: G }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: L }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: G
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: G
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: L }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: L
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: z }, special: { desc: "特殊効果", domainName: "特殊効果", format: L }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: z
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: L } } }, Id = 0, Td = (a, e, m) => {
  const r = m.find(((E) => E.id === e.dataId)), d = r ? r.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", d);
}, _d = { title: "アイテム", options: { consumable: "消耗品" } }, kd = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ud = {
  title: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Rd = "data", Sd = "actor", yd = "map", bd = "enemy", gd = "state", Pd = "skill", Md = "item", Ld = "weapon", Nd = "armor", vd = "class", Od = "common_event", fd = "troop", hd = (a) => [Pe(a.elementRate), Me(a.debuffRate), Le(a.stateRate), Ne(a.stateResist), ve(a.regularParam), Oe(a.extraParam), fe(a.specialParam), he(a.attackElement), De(a.attackState), Fe(a.attackSpeed), Ve(a.attackTimes), Ge(a.attackSkill), Be(a.skillTypeAdd), He(a.skillTypeSeal), xe(a.skillAdd), we(a.skillSeal), Ye(a.equipWeaponType), Ue(a.equipArmorType), We(a.equipLock), ze(a.equipSeal), Xe(a.slotType), qe(a.actionPlus), Ke(a.specialFlag), je(a.collaps), Qe(a.partyAbility)], Pe = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: ta()
}), Me = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Le = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: x()
}), Ne = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: x() }), ve = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Oe = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), fe = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), he = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: ta() }), De = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 32,
  dataSource: x()
}), Fe = (a) => ({ pattern: a.format, label: a.title, kindId: 33 }), Ve = (a) => ({ pattern: a.format, label: a.title, kindId: 34 }), Ge = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 35,
  dataSource: w()
}), Be = (a) => ({ pattern: a.format, label: a.title, kindId: 41, dataSource: ma() }), He = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 42,
  dataSource: ma()
}), xe = (a) => ({ pattern: a.format, label: a.title, kindId: 43, dataSource: w() }), we = (a) => ({ pattern: a.format, label: a.title, kindId: 44, dataSource: w() }), Ye = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 51,
  dataSource: Ze()
}), Ue = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Je() }), We = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: Y()
}), ze = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: Y() }), Xe = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: Y() }), qe = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), Ke = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), je = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Qe = (a) => ({ pattern: a.format, label: a.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), x = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), w = () => ({ author: "rmmz", module: "data", kind: "skill" }), ta = () => ({ author: "rmmz", module: "system", kind: "elements" }), ma = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Ze = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Je = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Y = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), $e = {
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
}, Dd = () => ({ rpg: { damage: ce, data: Qa, traits: ie, itemEffect: ge }, global: $e }), Fd = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), _ = (a, e) => ({
  name: a,
  id: e
}), at = (a) => a.variables.map(_), et = (a) => a.elements.map(_), tt = (a) => a.equipTypes.map(_), mt = (a) => a.skillTypes.map(_), rt = (a) => a.weaponTypes.map(_), st = (a) => a.armorTypes.map(_), ot = (a) => a.switches.map(_), Vd = (a, e) => [dt(a, e), it(a, e), Et(a, e), lt(a, e), nt(a, e), ct(a, e), pt(a, e)], nt = (a, e) => ({
  items: st(a),
  label: e.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), dt = (a, e) => ({ items: et(a), label: e.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), it = (a, e) => ({ items: tt(a), label: e.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), lt = (a, e) => ({
  items: mt(a),
  label: e.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), ct = (a, e) => ({ items: at(a), label: e.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), pt = (a, e) => ({ items: ot(a), label: e.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Et = (a, e) => ({
  items: rt(a),
  label: e.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Gd = (a) => ({
  armorTypes: I(a.armorTypes),
  elements: I(a.elements),
  equipTypes: I(a.equipTypes),
  weaponTypes: I(a.weaponTypes),
  skillTypes: I(a.skillTypes),
  variables: I(a.variables),
  switches: I(a.switches)
}), I = (a) => a ? [...a] : [], Bd = (a) => a.terms.params.map(((e, m) => ({ name: e, id: m }))), Hd = { title: "オプション", options: {
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
} }, xd = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, wd = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Yd = { title: "コマンド", options: {
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
} }, Ud = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Wd = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, zd = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Kd as ABORT_BATTLE,
  im as BATTLE_DIRECT,
  cm as BATTLE_ENCOUNT,
  B as BATTLE_PROCESSING,
  lm as BATTLE_VARIABLE,
  jd as CHANGE_ACTOR_IMAGES,
  Qd as CHANGE_ACTOR_STATE,
  f as CHANGE_ARMORS,
  Zd as CHANGE_BATTLE_BACKGROUND,
  ka as CHANGE_BATTLE_BGM,
  Jd as CHANGE_CLASS,
  Ra as CHANGE_DEFEAT_ME,
  oa as CHANGE_ENCOUNTER,
  $d as CHANGE_ENEMY_HP,
  ai as CHANGE_ENEMY_MP,
  ei as CHANGE_ENEMY_STATE,
  ti as CHANGE_ENEMY_TP,
  mi as CHANGE_EQUIP,
  A as CHANGE_EXP,
  ri as CHANGE_FORMATION_ACCESS,
  si as CHANGE_GOLD,
  K as CHANGE_HP,
  N as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  oi as CHANGE_MAP_NAME_DISPLAY,
  ni as CHANGE_MENU_ACCESS,
  j as CHANGE_MP,
  di as CHANGE_NAME,
  ii as CHANGE_NICKNAME,
  li as CHANGE_PARALLAX,
  q as CHANGE_PARAMETER,
  ci as CHANGE_PARTY_MEMBER,
  pi as CHANGE_PLAYER_FOLLOWERS,
  Ei as CHANGE_PROFILE,
  Ai as CHANGE_SAVE_ACCESS,
  y as CHANGE_SKILL,
  Ci as CHANGE_TILESET,
  Q as CHANGE_TP,
  Ii as CHANGE_TRANSPARENCY,
  Ti as CHANGE_VEHICLE_BGM,
  _i as CHANGE_VEHICLE_IMAGE,
  ua as CHANGE_VICTORY_ME,
  v as CHANGE_WEAPONS,
  ki as CHANGE_WINDOW_COLOR,
  rn as COLLAPS_BOSS,
  sn as COLLAPS_INSTANT,
  on as COLLAPS_NONE,
  mn as COLLAPS_NORMAL,
  ui as COMMENT_BODY,
  Ri as COMMENT_HEAD,
  na as COMMON_EVENT,
  Si as CONDITIONAL_BRANCH,
  yi as CONDITIONAL_BRANCH_ELSE,
  bi as CONTROL_SELF_SWITCH,
  da as CONTROL_SWITCHES,
  gi as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Zr as CUSTOM_PRICE,
  ce as DEFAULT_DAMAGE_LABELS,
  $e as DEFAULT_GLOBAL_LABELS,
  _d as DEFAULT_ITEM_LABELS,
  kd as DEFAULT_SKILL_LABELS,
  Hd as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  xd as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  ud as DEFAULT_USABLE_ITEM_LABELS,
  Wd as DIRECTION,
  nd as EFFECT_ADD_BUFF,
  dd as EFFECT_ADD_DEBUFF,
  sd as EFFECT_ADD_STATE,
  Ad as EFFECT_COMMON_EVENT,
  rd as EFFECT_GAIN_TP,
  pd as EFFECT_GROW,
  Ed as EFFECT_LEARN_SKILL,
  td as EFFECT_RECOVER_HP,
  md as EFFECT_RECOVER_MP,
  id as EFFECT_REMOVE_BUFF,
  ld as EFFECT_REMOVE_DEBUFF,
  od as EFFECT_REMOVE_STATE,
  cd as EFFECT_SPECIAL,
  Pi as ENEMY_APPEAR,
  Mi as ENEMY_RECOVER_ALL,
  Li as ENEMY_TRANSFORM,
  Ni as ERASE_EVENT,
  vi as ERASE_PICTURE,
  Oi as EXIT_EVENT_PROCESSING,
  cn as EXTRA_PARAM_CEV,
  An as EXTRA_PARAM_CNT,
  ln as EXTRA_PARAM_CRI,
  dn as EXTRA_PARAM_EVA,
  nn as EXTRA_PARAM_HIT,
  Cn as EXTRA_PARAM_HRG,
  pn as EXTRA_PARAM_MEV,
  En as EXTRA_PARAM_MRF,
  In as EXTRA_PARAM_MRG,
  Tn as EXTRA_PARAM_TRG,
  fi as FADEIN_SCREEN,
  hi as FADEOUT_BGM,
  Di as FADEOUT_BGS,
  Fi as FADEOUT_SCREEN,
  zn as FLAG_ID_AUTO_BATTLE,
  Xn as FLAG_ID_GUARD,
  Kn as FLAG_ID_PRESERVE_TP,
  qn as FLAG_ID_SUBSTITUTE,
  Vi as FLASH_SCREEN,
  Gi as FORCE_ACTION,
  Bi as GAME_OVER,
  Hi as GATHER_FOLLOWERS,
  C as GET_LOCATION_INFO,
  xi as GET_ONOFF_VEHICLE,
  $n as HITTYPE_CERTAIN,
  ed as HITTYPE_MAGICAL,
  ad as HITTYPE_PHYSICAL,
  wi as INPUT_NUMBER,
  gl as KEYWORD_GAME_OBJECTS,
  Pl as KEYWORD_GAME_VALIABLES,
  Ml as KEYWORD_MATH,
  Yi as LABEL,
  Jn as LABELS_DATA_WEAPON,
  wd as LABELS_SYSTEM_BATTLER_PARAMS,
  Yd as LABELS_SYSTEM_GAME_COMMANDS,
  Ui as LABEL_JUMP,
  Qa as LABEL_SET_DATA,
  ge as LABEL_SET_ITEM_EFFECT,
  ie as LABEL_SET_TRAIT,
  Wi as LOOP,
  zi as LOOP_BREAK,
  l as MAP_CHARACTOR_PARAM,
  Rd as MODULE_DATA,
  Xi as MOVE_PICTURE,
  sa as NAME_INPUT_PROCESSING,
  Jr as NORMAL_PRICE,
  qi as NO_OPERATION,
  Ki as OPEN_MENU_SCREEN,
  ji as OPEN_SAVE_SCREEN,
  Es as OPERAND_CONSTANT,
  Is as OPERAND_GAMEDATA,
  Cs as OPERAND_RANDOM,
  Ts as OPERAND_SCRIPT,
  As as OPERAND_VARIABLE,
  tc as OPERATION_ADD,
  mc as OPERATION_DIVIDE,
  rc as OPERATION_MOD,
  sc as OPERATION_MULTIPLY,
  oc as OPERATION_SET,
  nc as OPERATION_SUBTRACT,
  wn as PARTY_ABILITY_CANCEL_SURPRISE,
  Wn as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Hn as PARTY_ABILITY_ENCOUNTER_HALF,
  xn as PARTY_ABILITY_ENCOUNTER_NONE,
  Un as PARTY_ABILITY_GOLD_DOUBLE,
  Yn as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ca as PLAY_BGM,
  Ia as PLAY_BGS,
  Ta as PLAY_ME,
  Qi as PLAY_MOVIE,
  _a as PLAY_SE,
  Zi as PLUGIN_COMMAND_MV,
  Ji as PLUGIN_COMMAND_MZ,
  $i as RECOVER_ALL,
  gn as REGULAR_PARAM_AGI,
  Rn as REGULAR_PARAM_ATK,
  Sn as REGULAR_PARAM_DEF,
  Pn as REGULAR_PARAM_LUK,
  yn as REGULAR_PARAM_MATK,
  kn as REGULAR_PARAM_MAX_HP,
  un as REGULAR_PARAM_MAX_MP,
  bn as REGULAR_PARAM_MDEF,
  al as RESUME_BGM,
  el as RETURN_TO_TITLE_SCREEN,
  tl as ROTATE_PICTURE,
  ml as SAVE_BGM,
  Zn as SCHEMA_DATA_WEAPON,
  Z as SCRIPT_EVAL,
  ca as SCRIPT_EVAL_BODY,
  rl as SCROLL_MAP,
  sl as SELECT_ITEM,
  H as SET_EVENT_LOCATION,
  ol as SET_MOVEMENT_ROUTE,
  nl as SET_VEHICLE_LOCATION,
  dl as SET_WEATHER_EFFECT,
  il as SHAKE_SCREEN,
  pa as SHOP_PROCESSING,
  Ea as SHOP_PROCESSING_BODY,
  ll as SHOW_ANIMATION,
  cl as SHOW_BALLOON_ICON,
  pl as SHOW_BATTLE_ANIMATION,
  El as SHOW_CHOICES,
  Al as SHOW_CHOICES_ITEM,
  Cl as SHOW_MESSAGE,
  Il as SHOW_MESSAGE_BODY,
  Tl as SHOW_PICTURE,
  la as SHOW_SCROLLING_TEXT,
  ia as SHOW_SCROLLING_TEXT_BODY,
  _l as SKIP,
  Id as SPECIAL_EFFECT_ESCAPE,
  Gn as SPECIAL_PARAM_EXR,
  Vn as SPECIAL_PARAM_FDR,
  Nn as SPECIAL_PARAM_GRD,
  fn as SPECIAL_PARAM_MCR,
  Fn as SPECIAL_PARAM_MDR,
  Dn as SPECIAL_PARAM_PDR,
  On as SPECIAL_PARAM_PHA,
  vn as SPECIAL_PARAM_REC,
  hn as SPECIAL_PARAM_TCR,
  Ln as SPECIAL_PARAM_TGR,
  Sd as SRC_DATA_ACTOR,
  Nd as SRC_DATA_ARMOR,
  vd as SRC_DATA_CLASS,
  Od as SRC_DATA_COMMON_EVNET,
  bd as SRC_DATA_ENEMY,
  Md as SRC_DATA_ITEMS,
  yd as SRC_DATA_MAP,
  Pd as SRC_DATA_SKILL,
  gd as SRC_DATA_STATE,
  fd as SRC_DATA_TROOP,
  Ld as SRC_DATA_WEAPON,
  kl as STOP_SE,
  ul as TINT_PICTURE,
  Rl as TINT_SCREEN,
  $o as TRAIT_ACTION_PLUS,
  Ho as TRAIT_ATTACK_ELEMENT,
  Uo as TRAIT_ATTACK_SKILL,
  wo as TRAIT_ATTACK_SPEED,
  xo as TRAIT_ATTACK_STATE,
  Yo as TRAIT_ATTACK_TIMES,
  en as TRAIT_COLLAPSE_TYPE,
  ho as TRAIT_DEBUFF_RATE,
  fo as TRAIT_ELEMENT_RATE,
  jo as TRAIT_EQUIP_ARMOR_TYPE,
  Qo as TRAIT_EQUIP_LOCK,
  Zo as TRAIT_EQUIP_SEAL,
  Ko as TRAIT_EQUIP_WEAPON_TYPE,
  Vo as TRAIT_PARAM,
  tn as TRAIT_PARTY_ABILITY,
  Xo as TRAIT_SKILL_ADD,
  qo as TRAIT_SKILL_SEAL,
  Wo as TRAIT_SKILL_TYPE_ADD,
  zo as TRAIT_SKILL_TYPE_SEAL,
  Jo as TRAIT_SLOT_TYPE,
  Bo as TRAIT_SPARAM,
  an as TRAIT_SPECIAL_FLAG,
  Do as TRAIT_STATE_RATE,
  Fo as TRAIT_STATE_RESIST,
  Go as TRAIT_XPARAM,
  Sl as TRANSFER_PLAYER,
  us as TYPE_ARMOR,
  _s as TYPE_ITEM,
  ks as TYPE_WEAPON,
  co as VARIABLE_SRC_LAST,
  go as VEHICLE_AIRSHIP,
  yo as VEHICLE_BOAT,
  bo as VEHICLE_SHIP,
  yl as WAIT,
  om as assetDirectoryName,
  Ll as buildNoteFromNormalized,
  Or as cloneChoices,
  Mo as cloneEventCommand,
  Ba as cloneParameters,
  Ja as collapsOptionsToArray,
  Nl as collectMapEvents,
  ic as convertCommentArrayToObject,
  Lp as convertTermsMessageMZtoMV,
  vl as correctTroopEvents,
  Ol as createActorControlChars,
  fl as createCommandContext,
  hl as createControlCharFormat,
  Dl as createEventContext,
  lc as createMenuCommandState,
  Fl as createNoteEntity,
  Vl as createSystemVariableControlChars,
  Oo as defineGameDataSources,
  Vd as defineSystemItems,
  Za as defineTraitCollapseType,
  $a as defineTraitExtraParam,
  jn as defineTraitItems,
  se as defineTraitPartyAbility,
  ee as defineTraitRegularParam,
  ne as defineTraitSpecialFlag,
  me as defineTraitSpecialParam,
  _n as extraParamName,
  ae as extraParamsToArray,
  zd as extractFileName,
  Td as formatItemEffectText,
  Qn as formatTraitText,
  Fm as fromArrayChangeItems,
  wm as fromArrayChangeWeapons,
  Lm as fromArrayCommonEvent,
  Nm as fromArrayControlSwitches,
  um as fromArrayEnemyTransform,
  hm as fromArrayInputNumber,
  hr as fromArrayPlayMovie,
  Fr as fromArrayPluginCommandMZ,
  yr as fromArrayScrollingTextBody,
  Rr as fromArrayScrollingTextHeader,
  Jm as fromArraySelectItem,
  Lr as fromArraySetupChoice,
  Pr as fromArraySetupChoiceItem,
  Np as fromArrayShowMessageHeader,
  Gl as fromStringArray,
  Bl as gatherEventCommandContext,
  cc as getArmorCategoryEnabled,
  st as getArmorTypes,
  No as getControlChars,
  et as getElementTypes,
  pc as getEquipCommandEnabled,
  tt as getEquipTypes,
  Ec as getFormationCommandEnabled,
  Ac as getItemCategoryEnabled,
  Cc as getItemCommandEnabled,
  Hl as getItemIdFromItemCommand,
  Ic as getKeyItemCategoryEnabled,
  xl as getNoteValue,
  Bd as getParamNames,
  Tc as getSaveCommandEnabled,
  _c as getSkillCommandEnabled,
  mt as getSkillTypes,
  kc as getStatusCommandEnabled,
  ot as getSwitches,
  at as getVariableNames,
  uc as getWeaponCategoryEnabled,
  rt as getWeaponTypes,
  Lo as isCloneableCommand,
  Po as isCommandAnyAudio,
  pm as isCommandBattleProcessingVariable,
  fs as isCommandOperandVariables,
  wl as isScript,
  Yl as isUsingVariableItemCommand,
  Dm as isUsingVaribleCommandChangingItems,
  Dd as labelsRegistry,
  Rc as makeActorData,
  Sc as makeActorDataFromTestSoruce,
  yc as makeArmorData,
  bc as makeArmorDataFromTestSoruce,
  gc as makeAudioCommand,
  Pc as makeBattleEventPage,
  vp as makeBooleanOptions,
  Mc as makeClassData,
  Lc as makeClassDataEx,
  Nc as makeClassDataFromTestSoruce,
  ym as makeCommandAddEachEnemyState,
  Rm as makeCommandAddEnemyState,
  Vr as makeCommandAddPartyMember,
  wt as makeCommandAddStateByVariable,
  Ht as makeCommandAddStateEachActor,
  Gt as makeCommandAddStateTargetActor,
  vc as makeCommandAudioAny,
  Em as makeCommandBattleProcessingDirect,
  Cm as makeCommandBattleProcessingEncount,
  Am as makeCommandBattleProcessingVariable,
  Oc as makeCommandChangeActorImages,
  fc as makeCommandChangeActorName,
  hc as makeCommandChangeActorNickName,
  Dc as makeCommandChangeActorProfile,
  Fc as makeCommandChangeBattleBGM,
  dm as makeCommandChangeBattleBackground,
  Vc as makeCommandChangeClass,
  Gc as makeCommandChangeDefeatME,
  aa as makeCommandChangeEncounter,
  Bc as makeCommandChangeEquip,
  Vm as makeCommandChangeItems,
  $m as makeCommandChangeParallax,
  mr as makeCommandChangeTileset,
  uo as makeCommandChangeVehicleBGM,
  ko as makeCommandChangeVehicleImage,
  Hc as makeCommandChangeVictoryME,
  Ym as makeCommandChangeWeapons,
  xc as makeCommandCommentBody,
  wc as makeCommandCommentHeader,
  Mm as makeCommandCommonEvent,
  vm as makeCommandControlSwitches,
  Im as makeCommandControlTimer,
  Kt as makeCommandDecreaseActorParam,
  _m as makeCommandDisableEncounter,
  kr as makeCommandDisableFormationAccess,
  Cr as makeCommandDisableMenuAccess,
  Tr as makeCommandDisableSaveAccess,
  Tm as makeCommandEnableEncounter,
  ur as makeCommandEnableFormationAccess,
  Ir as makeCommandEnableMenuAccess,
  _r as makeCommandEnableSaveAccess,
  Pm as makeCommandEnemyRecoverAll,
  gm as makeCommandEnemyRecoverAllEach,
  km as makeCommandEnemyTransform,
  zr as makeCommandFadeInScreen,
  tm as makeCommandFadeOutBGM,
  sm as makeCommandFadeOutBGS,
  Xr as makeCommandFadeOutScreen,
  qr as makeCommandFlashScreen,
  ft as makeCommandForgetSkill,
  Vt as makeCommandForgetSkillByVariable,
  Dt as makeCommandForgetSkillEachActor,
  jt as makeCommandGainActorHP,
  $t as makeCommandGainActorMP,
  Zt as makeCommandGainActorTP,
  qm as makeCommandGainArmor,
  Km as makeCommandGainArmorByVariable,
  kt as makeCommandGainExpByVariable,
  Tt as makeCommandGainExpDirect,
  yt as makeCommandGainExpTargetAndOperandVariable,
  Rt as makeCommandGainExpTargetVariable,
  Br as makeCommandGainGold,
  xr as makeCommandGainGoldByVariable,
  Gm as makeCommandGainItem,
  Bm as makeCommandGainItemV,
  Um as makeCommandGainWeapon,
  Wm as makeCommandGainWeaponV,
  or as makeCommandGetEventIdXY,
  nr as makeCommandGetEventIdXYDirect,
  _o as makeCommandGetOnOffVehicle,
  dr as makeCommandGetRegionId,
  ir as makeCommandGetRegionIdDirect,
  rr as makeCommandGetTerrainTag,
  sr as makeCommandGetTerrainTagDirect,
  lr as makeCommandGetTileId,
  cr as makeCommandGetTileIdDirect,
  tr as makeCommandHideMapName,
  qt as makeCommandIncreaseActorParam,
  Om as makeCommandInputNumber,
  Ot as makeCommandLearnSkill,
  Ft as makeCommandLearnSkillByVariable,
  ht as makeCommandLearnSkillEachActor,
  Pt as makeCommandLevelDownActor,
  Lt as makeCommandLevelDownActorByVariable,
  vt as makeCommandLevelDownEachActors,
  gt as makeCommandLevelUpActor,
  Mt as makeCommandLevelUpActorByVariable,
  Nt as makeCommandLevelUpEachActors,
  Qt as makeCommandLoseActorHP,
  am as makeCommandLoseActorMP,
  Jt as makeCommandLoseActorTP,
  jm as makeCommandLoseArmor,
  Qm as makeCommandLoseArmorByVariable,
  ut as makeCommandLoseExpByVariable,
  _t as makeCommandLoseExpDirect,
  bt as makeCommandLoseExpTargetAndOperandVariable,
  St as makeCommandLoseExpTargetVariable,
  Hr as makeCommandLoseGold,
  wr as makeCommandLoseGoldByVariable,
  Hm as makeCommandLoseItem,
  xm as makeCommandLoseItemV,
  zm as makeCommandLoseWeapon,
  Xm as makeCommandLoseWeaponV,
  Ur as makeCommandMovePicture,
  Ut as makeCommandNameInputProcessing,
  Yc as makeCommandPlayBGM,
  Uc as makeCommandPlayBGS,
  Wc as makeCommandPlayME,
  fr as makeCommandPlayMovie,
  zc as makeCommandPlaySE,
  Dr as makeCommandPluginCommandMZ,
  Wt as makeCommandRecoverAllEachActors,
  zt as makeCommandRecoverAllTargetActor,
  Xt as makeCommandRecoverAllTargetActorByVariable,
  Bt as makeCommandRemoveActorTargetState,
  bm as makeCommandRemoveEachEnemyState,
  Sm as makeCommandRemoveEnemyState,
  Gr as makeCommandRemovePartyMember,
  Yt as makeCommandRemoveStateByVariable,
  xt as makeCommandRemoveStateEachActors,
  rm as makeCommandResumeBGM,
  mm as makeCommandSaveBGM,
  Qr as makeCommandScriptArray,
  Oa as makeCommandScriptBody,
  va as makeCommandScriptHeader,
  ar as makeCommandScrollMap,
  br as makeCommandScrollingTextBody,
  Sr as makeCommandScrollingTextHeader,
  Zm as makeCommandSelectItem,
  pr as makeCommandSetEventLocationDirect,
  Ar as makeCommandSetEventLocationExchange,
  Er as makeCommandSetEventLocationVariable,
  Ro as makeCommandSetVehicleLocation,
  So as makeCommandSetVehicleLocationFromVariables,
  Wr as makeCommandSetWeatherEffect,
  vr as makeCommandSetupChoice,
  Kr as makeCommandShakeScreen,
  $r as makeCommandShopProcessing,
  em as makeCommandShowAnimation,
  nm as makeCommandShowBalloonIcon,
  gr as makeCommandShowChoiceItem,
  er as makeCommandShowMapName,
  Op as makeCommandShowMessage,
  fp as makeCommandShowMessageBody,
  Yr as makeCommandShowPicture,
  jr as makeCommandTintScreen,
  Ao as makeCommandVariableDataLastActorId,
  cs as makeCommandVariableFromActorAgi,
  ns as makeCommandVariableFromActorAtk,
  es as makeCommandVariableFromActorCurrentExp,
  ts as makeCommandVariableFromActorCurrentHp,
  as as makeCommandVariableFromActorCurrentLevel,
  ms as makeCommandVariableFromActorCurrentMp,
  rs as makeCommandVariableFromActorCurrentTp,
  ds as makeCommandVariableFromActorDef,
  ps as makeCommandVariableFromActorLuk,
  is as makeCommandVariableFromActorMat,
  ss as makeCommandVariableFromActorMaxHp,
  os as makeCommandVariableFromActorMaxMp,
  ls as makeCommandVariableFromActorMdf,
  Vs as makeCommandVariableFromArmor,
  Gs as makeCommandVariableFromConstant,
  vs as makeCommandVariableFromEnemyAgi,
  Ps as makeCommandVariableFromEnemyAtk,
  Rs as makeCommandVariableFromEnemyCurrentHp,
  Ss as makeCommandVariableFromEnemyCurrentMp,
  ys as makeCommandVariableFromEnemyCurrentTp,
  Ms as makeCommandVariableFromEnemyDef,
  Os as makeCommandVariableFromEnemyLuk,
  Ls as makeCommandVariableFromEnemyMat,
  bs as makeCommandVariableFromEnemyMaxHp,
  gs as makeCommandVariableFromEnemyMaxMp,
  Ns as makeCommandVariableFromEnemyMdf,
  Ds as makeCommandVariableFromItemData,
  Co as makeCommandVariableFromLastEnemyIndex,
  Io as makeCommandVariableFromLastTargetActorId,
  To as makeCommandVariableFromLastTargetEnemyIndex,
  Eo as makeCommandVariableFromLastUsedItemId,
  po as makeCommandVariableFromLastUsedSkillId,
  xs as makeCommandVariableFromMapCharactorDirection,
  ws as makeCommandVariableFromMapCharactorScreenX,
  Ys as makeCommandVariableFromMapCharactorScreenY,
  Bs as makeCommandVariableFromMapCharactorX,
  Hs as makeCommandVariableFromMapCharactorY,
  Ks as makeCommandVariableFromMapId,
  zs as makeCommandVariableFromMapPlayerDirection,
  Xs as makeCommandVariableFromMapPlayerScreenX,
  qs as makeCommandVariableFromMapPlayerScreenY,
  Us as makeCommandVariableFromMapPlayerX,
  Ws as makeCommandVariableFromMapPlayerY,
  Qs as makeCommandVariableFromPartyGold,
  js as makeCommandVariableFromPartySize,
  Zs as makeCommandVariableFromPartySteps,
  Js as makeCommandVariableFromRandom,
  $s as makeCommandVariableFromScript,
  no as makeCommandVariableFromSystemBattleCount,
  lo as makeCommandVariableFromSystemEscapeCount,
  to as makeCommandVariableFromSystemGold,
  ao as makeCommandVariableFromSystemMapId,
  eo as makeCommandVariableFromSystemPartyMemberCount,
  ro as makeCommandVariableFromSystemPlayTime,
  oo as makeCommandVariableFromSystemSaveCount,
  mo as makeCommandVariableFromSystemSteps,
  so as makeCommandVariableFromSystemTimer,
  io as makeCommandVariableFromSystemWinCount,
  hs as makeCommandVariableFromVariable,
  Fs as makeCommandVariableFromWeapon,
  Xc as makeCommentArray,
  qc as makeCommentCommandArray,
  Kc as makeCommonEventData,
  jc as makeDamage,
  Gd as makeDataNames,
  Qc as makeDropItem,
  hp as makeEditorSetting,
  Zc as makeEnemyAction,
  Jc as makeEnemyData,
  $c as makeEnemyDataFromTestSoruce,
  ap as makeEventPageCondition,
  Fd as makeGameInitial,
  Dp as makeItemCategories,
  Fp as makeItemCategoriesFromArray,
  ep as makeItemData,
  tp as makeItemDataFromTestSoruce,
  mp as makeMapData,
  rp as makeMapDataFromSingleEvent,
  sp as makeMapEvent,
  op as makeMapEventIamge,
  np as makeMapEventPage,
  dp as makeMapFileInfo,
  ip as makeMapInfoData,
  lp as makeMapName,
  Vp as makeMenuCommandsEnabled,
  Gp as makeMenuCommandsEnabledFromArray,
  cp as makeParamArray,
  Bp as makeParamNamesArray,
  Hp as makeParamNamesFromArray,
  pp as makeSkillData,
  Ep as makeSkillDataFromTestSoruce,
  xp as makeSoundsArray,
  wp as makeSoundsObject,
  Ap as makeStateData,
  Cp as makeStateDataFromTestSoruce,
  Yp as makeSystemAdvanced,
  Up as makeSystemData,
  Ip as makeSystemDataFromMV,
  Tp as makeSystemDataMV,
  Wp as makeTermsBasic,
  zp as makeTermsBasicFromArray,
  Xp as makeTermsCommandArray,
  qp as makeTermsCommandArrayWithNulls,
  Kp as makeTermsCommandFromArray,
  jp as makeTermsMessages,
  _p as makeTestAudioCommands,
  kp as makeTestSystemData,
  Qp as makeTitleCommandWindow,
  up as makeTroopData,
  Rp as makeTroopEventConditions,
  Sp as makeTroopMember,
  Zp as makeVehicleData,
  yp as makeWeaponData,
  bp as makeWeaponDataFromTestSoruce,
  gp as normalizeDataActor,
  Ul as normalizeNote,
  Pp as paramArrayToObject,
  oe as partyAbilityToArray,
  Wl as processCommonEvents,
  zl as processEventPages,
  Xl as processMapEvents,
  ql as processTroopEvents,
  Kl as readNote,
  jl as readNoteEx,
  Ql as readNoteEx2,
  Zl as readNoteObject,
  Mn as regularParamName,
  te as regularParamsToArray,
  Jl as replaceNote,
  $l as replaceNoteWithHandlers,
  vo as repleaceMapEventCommands,
  Cd as resolveItemEffectLabels,
  hd as resolveTraitLabels,
  ac as setNoteValue,
  de as specialFlagToArray,
  Bn as specialParamName,
  re as specialParamsToArray,
  Ud as textAndDesc,
  Pa as toArrayCommonEvent,
  Ma as toArrayControlSwitches,
  fm as toArrayInputNumber,
  Na as toArrayScrollingTextBody,
  La as toArrayScrollingTextHeader,
  Nr as toArraySetupChoice,
  Mr as toArraySetupChoiceItem,
  Jp as toArrayShowMessageHeader
};
