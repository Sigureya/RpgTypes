import { m as A, r as S, G as y, ai as sa, y as K, p as q, u as j, I as Q, B, g as oa, R as na, V as da, q as N, N as f, b as v, aa as C, aC as H, aS as ia, aR as la, az as ca, ay as Z, aH as pa, aI as Ea, X as t, aZ as Aa, am as Ca, an as Ia, ao as Ta, aq as _a, d as ka, M as ua, f as Ra } from "../shared/makeAudio.es.js";
import { A as jd, C as Qd, a as Zd, c as Jd, e as $d, h as ai, i as ei, j as ti, k as mi, l as ri, n as si, o as oi, s as ni, t as di, v as ii, w as li, x as ci, z as pi, D as Ei, E as Ai, F as Ci, H as Ii, J as Ti, K as _i, L as ki, O as ui, P as Ri, Q as Si, S as yi, T as bi, U as gi, W as Pi, Y as Mi, Z as Li, _ as Ni, $ as fi, a0 as hi, a1 as vi, a2 as Oi, a3 as Di, a4 as Fi, a5 as Vi, a6 as Gi, a7 as Bi, a8 as Hi, a9 as xi, ab as wi, ac as Yi, ad as Ui, ae as zi, af as Wi, ag as Xi, ah as Ki, aj as qi, ak as ji, al as Qi, ap as Zi, ar as Ji, as as $i, at as al, au as el, av as tl, aw as ml, ax as rl, aA as sl, aB as ol, aD as nl, aE as dl, aF as il, aG as ll, aJ as cl, aK as pl, aL as El, aM as Al, aN as Cl, aO as Il, aP as Tl, aQ as _l, aT as kl, aU as ul, aV as Rl, aW as Sl, aX as yl, aY as bl } from "../shared/makeAudio.es.js";
import { O as b, H as g, I as T, G as P } from "../shared/isScript.es.js";
import { K as Pl, a as Ml, b as Ll, c as Nl, d as fl, e as hl, f as vl, g as Ol, h as Dl, i as Fl, j as Vl, k as Gl, l as Bl, m as Hl, n as xl, o as wl, p as Yl, q as Ul, r as zl, s as Wl, t as Xl, u as Kl, v as ql, w as jl, x as Ql, y as Zl, z as Jl, A as $l, B as ac, C as ec, D as tc, E as mc, F as rc } from "../shared/isScript.es.js";
import { g as Sa, f as ya } from "../shared/applyFormat.es.js";
import { O as oc, a as nc, b as dc, c as ic, d as lc, e as cc } from "../shared/applyFormat.es.js";
import { c as Ec, a as Ac, g as Cc, b as Ic, d as Tc, e as _c, f as kc, h as uc, i as Rc, j as Sc, k as yc, l as bc, m as gc, n as Pc, o as Mc, p as Lc, q as Nc, r as fc, s as hc, t as vc, u as Oc, v as Dc, w as Fc, x as Vc, y as Gc, z as Bc, A as Hc, B as xc, C as wc, D as Yc, E as Uc, F as zc, G as Wc, H as Xc, I as Kc, J as qc, K as jc, L as Qc, M as Zc, N as Jc, O as $c, P as ap, Q as ep, R as tp, S as mp, T as rp, U as sp, V as op, W as np, X as dp, Y as ip, Z as lp, _ as cp, $ as pp, a0 as Ep, a1 as Ap, a2 as Cp, a3 as Ip, a4 as Tp, a5 as _p, a6 as kp, a7 as up, a8 as Rp, a9 as Sp, aa as yp, ab as bp, ac as gp, ad as Pp, ae as Mp, af as Lp, ag as Np, ah as fp } from "../shared/makeSystemEx.es.js";
import { c as vp, f as Op, m as Dp, a as Fp, b as Vp, d as Gp, e as Bp, g as Hp, h as xp, i as wp, j as Yp, k as Up, l as zp, n as Wp, o as Xp, p as Kp, q as qp, r as jp, s as Qp, t as Zp, u as Jp, v as $p, w as aE, x as eE, y as tE } from "../shared/makeSystem.es.js";
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
}), ft = (a, e = 0) => ({ code: S, indent: e, parameters: [0, 0, 1, 0, a.level, a.showMessaage] }), ht = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [0, a.actorId, 0, a.skillId]
}), vt = (a, e = 0) => ({ code: y, indent: e, parameters: [0, a.actorId, 1, a.skillId] }), Ot = (a, e = 0) => ({
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
}), zt = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), Wt = (a, e = 0) => ({ code: 314, indent: e, parameters: [0, a.targetActorId] }), Xt = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.variableId]
}), Kt = (a, e = 0) => ({ code: K, indent: e, parameters: J(a, 0) }), qt = (a, e = 0) => ({
  code: K,
  indent: e,
  parameters: J(a, 1)
}), J = (a, e) => [a.actorId, a.paramId, e, a.value], R = { direct: 0, variable: 1 }, jt = (a, e = 0) => ({ code: q, indent: e, parameters: $(0, a) }), Qt = (a, e = 0) => ({
  code: q,
  indent: e,
  parameters: $(1, a)
}), Zt = (a, e = 0) => ({ code: Q, indent: e, parameters: O(0, a) }), Jt = (a, e = 0) => ({ code: Q, indent: e, parameters: O(1, a) }), $t = (a, e = 0) => ({ code: j, indent: e, parameters: O(0, a) }), am = (a, e = 0) => ({
  code: j,
  indent: e,
  parameters: O(1, a)
}), O = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value], $ = (a, e) => [e.targetType === "variable" ? R.variable : R.direct, e.targetType === "each" ? 0 : e.target, a, R[e.operand.mode], e.operand.value, e.allowDeath], em = (a = {}, e = 0) => ({
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
}), Ma = (a) => [a.min, a.max, a.value], fm = (a, e = 0) => ({ code: da, indent: e, parameters: Ma(a) }), hm = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), vm = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Om = (a) => ({ variableId: a[0], maxDigits: a[1] }), Dm = (a) => a.parameters[3] === T, Fm = (a) => ({
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
  code: f,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Um = (a, e = 0) => ({ code: f, indent: e, parameters: [a.weaponId, b, g, a.value, !1] }), zm = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.weaponId, b, T, a.variableId, !1]
}), Wm = (a, e = 0) => ({ code: f, indent: e, parameters: [a.weaponId, P, g, a.value, !1] }), Xm = (a, e = 0) => ({
  code: f,
  indent: e,
  parameters: [a.weaponId, P, T, a.variableId, !1]
}), Km = (a, e = 0) => ({ code: v, indent: e, parameters: [a.armorId, b, g, a.value, !1] }), qm = (a, e = 0) => ({
  code: v,
  indent: e,
  parameters: [a.armorId, b, T, a.variableId, !1]
}), jm = (a, e = 0) => ({ code: v, indent: e, parameters: [a.armorId, P, g, a.value, !1] }), Qm = (a, e = 0) => ({
  code: v,
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
}), Nr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], fr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [a?.choices ?? [], a?.cancelType ?? 0, a?.defaultType ?? 0, a?.positionType ?? 2, a?.background ?? 0]
}), hr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), vr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Or = (a) => ({
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
}), zr = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Wr = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Xr = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Kr = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), qr = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), jr = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), fa = (a, e = 0) => ({ code: Z, indent: e, parameters: [a] }), ha = (a, e = 0) => ({
  code: ca,
  indent: e,
  parameters: [a]
}), Qr = (a, e = 0) => a.map(((m, r) => r === 0 ? fa(m, e) : ha(m, e))), Zr = 1, Jr = 0, h = { item: 0, weapon: 1, armors: 2 }, $r = ({ goods: a, buyOnly: e = !1 }, m = 0) => a.map(((r, d) => {
  const E = ((k) => k.customPrice !== void 0 && k.customPrice !== 0)(r) ? 1 : 0;
  return d === 0 ? { code: pa, indent: m, parameters: [h[r.itemType] ?? h.item, r.id, E, r.customPrice ?? 0, e] } : {
    code: Ea,
    indent: m,
    parameters: [h[r.itemType] ?? h.item, r.id, E, r.customPrice ?? 0]
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
}), Ns = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 7) }), fs = (a, e = 0) => ({ code: t, indent: e, parameters: i(a, 8) }), hs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: i(a, 9)
}), i = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 4, a.enemyIndex, e], vs = (a) => a.parameters[3] === 1, Os = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: va(a)
}), va = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 1, a.variableId], Ds = (a, e = 0) => ({ code: t, indent: e, parameters: Oa(a) }), Fs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Da(a)
}), Vs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: Fa(a)
}), Oa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 0, a.itemId], Da = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 1, a.weaponId], Fa = (a) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 2, a.armorId], Gs = (a, e = 0) => ({
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
}, l.X) }), zs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.Y)
}), Ws = (a, e = 0) => ({ code: t, indent: e, parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.DIRECTION) }), Xs = (a, e = 0) => ({
  code: t,
  indent: e,
  parameters: c({ startId: a.startId, endId: a.endId, operation: a.operation, charactorId: -1 }, l.SCREEN_X)
}), Ks = (a, e = 0) => ({ code: t, indent: e, parameters: c({
  startId: a.startId,
  endId: a.endId,
  operation: a.operation,
  charactorId: -1
}, l.SCREEN_Y) }), c = (a, e) => [a.startId, a.endId ?? a.startId, a.operation ?? 0, 3, 5, a.charactorId ?? 0, e], qs = (a, e = 0) => ({
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
}), Ha = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Lo = (a) => a.parameters.every(Ha), No = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  effectName: a.effectName ?? "",
  displayType: a.displayType ?? 0,
  offsetX: a.offsetX ?? 0,
  offsetY: a.offsetY ?? 0,
  scale: a.scale ?? 100,
  speed: a.speed ?? 100,
  rotation: a.rotation ?? { x: 0, y: 0, z: 0 },
  soundTimings: a.soundTimings ?? [],
  flashTimings: a.flashTimings ?? []
}), fo = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
}))), ho = (a, e) => a.map(((m) => m ? { ...m, pages: xa(m, e) } : null)), xa = (a, e) => a.pages.map(((m) => ({
  ...m,
  list: e(m.list)
}))), vo = (a, e) => [wa(a.skills, e), Ya(a.actors, e), Ua(a.states, e), za(a.armors, e), Wa(a.classes, e), Xa(a.enemies, e), Ka(a.items, e), qa(a.weapons, e), ja(a.commonEvents, e)], wa = (a, e) => ({
  label: e.skill.title,
  items: a,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), Ya = (a, e) => ({
  items: a,
  label: e.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), Ua = (a, e) => ({ items: a, label: e.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), za = (a, e) => ({ items: a, label: e.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), Wa = (a, e) => ({ items: a, label: e.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), Xa = (a, e) => ({ items: a, label: e.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), Ka = (a, e) => ({ items: a, label: e.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), qa = (a, e) => ({ items: a, label: e.weapon.title, source: {
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
}, Oo = 11, Do = 12, Fo = 13, Vo = 14, Go = 21, Bo = 22, Ho = 23, xo = 31, wo = 32, Yo = 33, Uo = 34, zo = 35, Wo = 41, Xo = 42, Ko = 43, qo = 44, jo = 51, Qo = 52, Zo = 53, Jo = 54, $o = 55, an = 61, en = 62, tn = 63, mn = 64, rn = 0, sn = 1, on = 2, nn = 3, Za = (a, e) => ({
  items: Ja(a.options, e),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), Ja = (a, e) => [{ id: 0, name: e.normal }, { id: 1, name: a.bossCollaps }, { id: 2, name: a.instantCollaps }, {
  id: 3,
  name: a.noneCollaps
}], dn = 0, ln = 1, cn = 2, pn = 3, En = 4, An = 5, Cn = 6, In = 7, Tn = 8, _n = 9, $a = (a) => ({
  items: ae(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), ae = (a) => [{ id: 0, name: a.hitRate }, { id: 1, name: a.evasionRate }, { id: 2, name: a.criticalRate }, { id: 3, name: a.criticalEvasionRate }, { id: 4, name: a.magicEvasionRate }, {
  id: 5,
  name: a.magicReflectionRate
}, { id: 6, name: a.counterAttackRate }, { id: 7, name: a.hpRegenerationRate }, { id: 8, name: a.mpRegenerationRate }, { id: 9, name: a.tpRegenerationRate }], kn = (a, e) => {
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
}, un = 0, Rn = 1, Sn = 2, yn = 3, bn = 4, gn = 5, Pn = 6, Mn = 7, ee = (a) => ({ items: te(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "params" } }), te = (a) => [{
  id: 0,
  name: a.maxHp
}, { id: 1, name: a.maxMp }, { id: 2, name: a.atk }, { id: 3, name: a.def }, { id: 4, name: a.matk }, { id: 5, name: a.mdef }, { id: 6, name: a.agi }, { id: 7, name: a.luk }], Ln = (a, e) => {
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
}, Nn = 0, fn = 1, hn = 2, vn = 3, On = 4, Dn = 5, Fn = 6, Vn = 7, Gn = 8, Bn = 9, me = (a) => ({ items: re(a.options), label: a.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), re = (a) => [{
  id: 0,
  name: a.targetRate
}, { id: 1, name: a.guardEffectRate }, { id: 2, name: a.recoveryEffectRate }, { id: 3, name: a.pharmacology }, { id: 4, name: a.mpCostRate }, { id: 5, name: a.tpChargeRate }, {
  id: 6,
  name: a.physicalDamageRate
}, { id: 7, name: a.magicDamageRate }, { id: 8, name: a.floorDamageRate }, { id: 9, name: a.experienceRate }], Hn = (a, e) => {
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
}, xn = 0, wn = 1, Yn = 2, Un = 3, zn = 4, Wn = 5, se = (a) => ({
  items: oe(a.options),
  label: a.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), oe = (a) => [{ id: 0, name: a.encounterHalf }, { id: 1, name: a.encounterNone }, { id: 2, name: a.cancelSurprise }, {
  id: 3,
  name: a.raisePreemptive
}, { id: 4, name: a.goldDouble }, { id: 5, name: a.dropItemDouble }], Xn = 0, Kn = 1, qn = 2, jn = 3, ne = (a) => ({ items: de(a.options), label: a.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), de = (a) => [{ id: 0, name: a.autoBattle }, { id: 1, name: a.guard }, { id: 2, name: a.substitute }, {
  id: 3,
  name: a.preventEscape
}], s = "{name}", u = "{name} * {value}%", U = "{name} + {value}%", z = "{value}", ie = {
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
    attackSpeed: { title: "攻撃速度補正", format: z },
    attackTimes: {
      title: "攻撃追加回数",
      format: z
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
}, Qn = (a, e) => [ee(a.regularParam), $a(a.extraParam), me(a.specialParam), Za(a.collaps, e), ne(a.specialFlag), se(a.partyAbility)], le = { itemMapper: {
  placeHolder: "name",
  dataIdKey: "dataId",
  kindKey: "code"
}, placeHolder: { numbers: ["value"] } }, Zn = (a, e, m) => {
  const r = Sa(le);
  return ya(e, m, r, a.pattern, ((d) => d.dataId));
}, ce = { title: "ダメージ", options: {} }, Jn = {
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
}, $n = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ad = 0, ed = 1, td = 2, md = 11, rd = 12, sd = 13, od = 21, nd = 22, dd = 31, id = 32, ld = 33, cd = 34, pd = 41, Ed = 42, Ad = 43, Cd = 44, Id = (a) => [Ee(a), Ae(a), Ce(a), Ie(a), Te(a), _e(a), ke(a), ue(a), Re(a), pe(a), Se(a), ye(a), be(a)], n = (a, e, m) => ({
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
}), W = "{name} {value1}%", G = "{value1}% + {value2}", X = "{name} {value1}ターン", L = "{name}", ge = { title: "使用効果", options: { addBuff: {
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
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: W }, special: { desc: "特殊効果", domainName: "特殊効果", format: L }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: W
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: L } } }, Td = 0, _d = (a, e, m) => {
  const r = m.find(((E) => E.id === e.dataId)), d = r ? r.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", d);
}, kd = { title: "アイテム", options: { consumable: "消耗品" } }, ud = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Rd = {
  title: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Sd = "data", yd = "actor", bd = "map", gd = "enemy", Pd = "state", Md = "skill", Ld = "item", Nd = "weapon", fd = "armor", hd = "class", vd = "common_event", Od = "troop", Dd = (a) => [Pe(a.elementRate), Me(a.debuffRate), Le(a.stateRate), Ne(a.stateResist), fe(a.regularParam), he(a.extraParam), ve(a.specialParam), Oe(a.attackElement), De(a.attackState), Fe(a.attackSpeed), Ve(a.attackTimes), Ge(a.attackSkill), Be(a.skillTypeAdd), He(a.skillTypeSeal), xe(a.skillAdd), we(a.skillSeal), Ye(a.equipWeaponType), Ue(a.equipArmorType), ze(a.equipLock), We(a.equipSeal), Xe(a.slotType), Ke(a.actionPlus), qe(a.specialFlag), je(a.collaps), Qe(a.partyAbility)], Pe = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 11,
  dataSource: ta()
}), Me = (a) => ({ pattern: a.format, label: a.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Le = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 13,
  dataSource: x()
}), Ne = (a) => ({ pattern: a.format, label: a.title, kindId: 14, dataSource: x() }), fe = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), he = (a) => ({ pattern: a.format, label: a.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), ve = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Oe = (a) => ({ pattern: a.format, label: a.title, kindId: 31, dataSource: ta() }), De = (a) => ({
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
}), Ue = (a) => ({ pattern: a.format, label: a.title, kindId: 52, dataSource: Je() }), ze = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 53,
  dataSource: Y()
}), We = (a) => ({ pattern: a.format, label: a.title, kindId: 54, dataSource: Y() }), Xe = (a) => ({ pattern: a.format, label: a.title, kindId: 55, dataSource: Y() }), Ke = (a) => ({
  pattern: a.format,
  label: a.title,
  kindId: 61
}), qe = (a) => ({ pattern: a.format, label: a.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), je = (a) => ({ pattern: a.format, label: a.title, kindId: 63, dataSource: {
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
}, Fd = () => ({ rpg: { damage: ce, data: Qa, traits: ie, itemEffect: ge }, global: $e }), Vd = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), _ = (a, e) => ({
  name: a,
  id: e
}), at = (a) => a.variables.map(_), et = (a) => a.elements.map(_), tt = (a) => a.equipTypes.map(_), mt = (a) => a.skillTypes.map(_), rt = (a) => a.weaponTypes.map(_), st = (a) => a.armorTypes.map(_), ot = (a) => a.switches.map(_), Gd = (a, e) => [dt(a, e), it(a, e), Et(a, e), lt(a, e), nt(a, e), ct(a, e), pt(a, e)], nt = (a, e) => ({
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
}), Bd = (a) => ({
  armorTypes: I(a.armorTypes),
  elements: I(a.elements),
  equipTypes: I(a.equipTypes),
  weaponTypes: I(a.weaponTypes),
  skillTypes: I(a.skillTypes),
  variables: I(a.variables),
  switches: I(a.switches)
}), I = (a) => a ? [...a] : [], Hd = (a) => a.terms.params.map(((e, m) => ({ name: e, id: m }))), xd = { title: "オプション", options: {
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
} }, wd = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Yd = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Ud = { title: "コマンド", options: {
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
} }, zd = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Wd = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6
}, Xd = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  jd as ABORT_BATTLE,
  im as BATTLE_DIRECT,
  cm as BATTLE_ENCOUNT,
  B as BATTLE_PROCESSING,
  lm as BATTLE_VARIABLE,
  Qd as CHANGE_ACTOR_IMAGES,
  Zd as CHANGE_ACTOR_STATE,
  v as CHANGE_ARMORS,
  Jd as CHANGE_BATTLE_BACKGROUND,
  ka as CHANGE_BATTLE_BGM,
  $d as CHANGE_CLASS,
  Ra as CHANGE_DEFEAT_ME,
  oa as CHANGE_ENCOUNTER,
  ai as CHANGE_ENEMY_HP,
  ei as CHANGE_ENEMY_MP,
  ti as CHANGE_ENEMY_STATE,
  mi as CHANGE_ENEMY_TP,
  ri as CHANGE_EQUIP,
  A as CHANGE_EXP,
  si as CHANGE_FORMATION_ACCESS,
  oi as CHANGE_GOLD,
  q as CHANGE_HP,
  N as CHANGE_ITEMS,
  S as CHANGE_LEVEL,
  ni as CHANGE_MAP_NAME_DISPLAY,
  di as CHANGE_MENU_ACCESS,
  j as CHANGE_MP,
  ii as CHANGE_NAME,
  li as CHANGE_NICKNAME,
  ci as CHANGE_PARALLAX,
  K as CHANGE_PARAMETER,
  pi as CHANGE_PARTY_MEMBER,
  Ei as CHANGE_PLAYER_FOLLOWERS,
  Ai as CHANGE_PROFILE,
  Ci as CHANGE_SAVE_ACCESS,
  y as CHANGE_SKILL,
  Ii as CHANGE_TILESET,
  Q as CHANGE_TP,
  Ti as CHANGE_TRANSPARENCY,
  _i as CHANGE_VEHICLE_BGM,
  ki as CHANGE_VEHICLE_IMAGE,
  ua as CHANGE_VICTORY_ME,
  f as CHANGE_WEAPONS,
  ui as CHANGE_WINDOW_COLOR,
  sn as COLLAPS_BOSS,
  on as COLLAPS_INSTANT,
  nn as COLLAPS_NONE,
  rn as COLLAPS_NORMAL,
  Ri as COMMENT_BODY,
  Si as COMMENT_HEAD,
  na as COMMON_EVENT,
  yi as CONDITIONAL_BRANCH,
  bi as CONDITIONAL_BRANCH_ELSE,
  gi as CONTROL_SELF_SWITCH,
  da as CONTROL_SWITCHES,
  Pi as CONTROL_TIMER,
  t as CONTROL_VARIABLES,
  Zr as CUSTOM_PRICE,
  ce as DEFAULT_DAMAGE_LABELS,
  $e as DEFAULT_GLOBAL_LABELS,
  kd as DEFAULT_ITEM_LABELS,
  ud as DEFAULT_SKILL_LABELS,
  xd as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  wd as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Rd as DEFAULT_USABLE_ITEM_LABELS,
  Wd as DIRECTION,
  dd as EFFECT_ADD_BUFF,
  id as EFFECT_ADD_DEBUFF,
  od as EFFECT_ADD_STATE,
  Cd as EFFECT_COMMON_EVENT,
  sd as EFFECT_GAIN_TP,
  Ed as EFFECT_GROW,
  Ad as EFFECT_LEARN_SKILL,
  md as EFFECT_RECOVER_HP,
  rd as EFFECT_RECOVER_MP,
  ld as EFFECT_REMOVE_BUFF,
  cd as EFFECT_REMOVE_DEBUFF,
  nd as EFFECT_REMOVE_STATE,
  pd as EFFECT_SPECIAL,
  Mi as ENEMY_APPEAR,
  Li as ENEMY_RECOVER_ALL,
  Ni as ENEMY_TRANSFORM,
  fi as ERASE_EVENT,
  hi as ERASE_PICTURE,
  vi as EXIT_EVENT_PROCESSING,
  pn as EXTRA_PARAM_CEV,
  Cn as EXTRA_PARAM_CNT,
  cn as EXTRA_PARAM_CRI,
  ln as EXTRA_PARAM_EVA,
  dn as EXTRA_PARAM_HIT,
  In as EXTRA_PARAM_HRG,
  En as EXTRA_PARAM_MEV,
  An as EXTRA_PARAM_MRF,
  Tn as EXTRA_PARAM_MRG,
  _n as EXTRA_PARAM_TRG,
  Oi as FADEIN_SCREEN,
  Di as FADEOUT_BGM,
  Fi as FADEOUT_BGS,
  Vi as FADEOUT_SCREEN,
  Xn as FLAG_ID_AUTO_BATTLE,
  Kn as FLAG_ID_GUARD,
  jn as FLAG_ID_PRESERVE_TP,
  qn as FLAG_ID_SUBSTITUTE,
  Gi as FLASH_SCREEN,
  Bi as FORCE_ACTION,
  Hi as GAME_OVER,
  xi as GATHER_FOLLOWERS,
  C as GET_LOCATION_INFO,
  wi as GET_ONOFF_VEHICLE,
  ad as HITTYPE_CERTAIN,
  td as HITTYPE_MAGICAL,
  ed as HITTYPE_PHYSICAL,
  Yi as INPUT_NUMBER,
  Pl as KEYWORD_GAME_OBJECTS,
  Ml as KEYWORD_GAME_VALIABLES,
  Ll as KEYWORD_MANAGER,
  Nl as KEYWORD_MATH,
  Ui as LABEL,
  $n as LABELS_DATA_WEAPON,
  Yd as LABELS_SYSTEM_BATTLER_PARAMS,
  Ud as LABELS_SYSTEM_GAME_COMMANDS,
  zi as LABEL_JUMP,
  Qa as LABEL_SET_DATA,
  ge as LABEL_SET_ITEM_EFFECT,
  ie as LABEL_SET_TRAIT,
  Wi as LOOP,
  Xi as LOOP_BREAK,
  l as MAP_CHARACTOR_PARAM,
  Sd as MODULE_DATA,
  Ki as MOVE_PICTURE,
  sa as NAME_INPUT_PROCESSING,
  Jr as NORMAL_PRICE,
  qi as NO_OPERATION,
  ji as OPEN_MENU_SCREEN,
  Qi as OPEN_SAVE_SCREEN,
  Es as OPERAND_CONSTANT,
  Is as OPERAND_GAMEDATA,
  Cs as OPERAND_RANDOM,
  Ts as OPERAND_SCRIPT,
  As as OPERAND_VARIABLE,
  oc as OPERATION_ADD,
  nc as OPERATION_DIVIDE,
  dc as OPERATION_MOD,
  ic as OPERATION_MULTIPLY,
  lc as OPERATION_SET,
  cc as OPERATION_SUBTRACT,
  Yn as PARTY_ABILITY_CANCEL_SURPRISE,
  Wn as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  xn as PARTY_ABILITY_ENCOUNTER_HALF,
  wn as PARTY_ABILITY_ENCOUNTER_NONE,
  zn as PARTY_ABILITY_GOLD_DOUBLE,
  Un as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ca as PLAY_BGM,
  Ia as PLAY_BGS,
  Ta as PLAY_ME,
  Zi as PLAY_MOVIE,
  _a as PLAY_SE,
  Ji as PLUGIN_COMMAND_MV,
  $i as PLUGIN_COMMAND_MZ,
  al as RECOVER_ALL,
  Pn as REGULAR_PARAM_AGI,
  Sn as REGULAR_PARAM_ATK,
  yn as REGULAR_PARAM_DEF,
  Mn as REGULAR_PARAM_LUK,
  bn as REGULAR_PARAM_MATK,
  un as REGULAR_PARAM_MAX_HP,
  Rn as REGULAR_PARAM_MAX_MP,
  gn as REGULAR_PARAM_MDEF,
  el as RESUME_BGM,
  tl as RETURN_TO_TITLE_SCREEN,
  ml as ROTATE_PICTURE,
  rl as SAVE_BGM,
  Jn as SCHEMA_DATA_WEAPON,
  Z as SCRIPT_EVAL,
  ca as SCRIPT_EVAL_BODY,
  sl as SCROLL_MAP,
  ol as SELECT_ITEM,
  H as SET_EVENT_LOCATION,
  nl as SET_MOVEMENT_ROUTE,
  dl as SET_VEHICLE_LOCATION,
  il as SET_WEATHER_EFFECT,
  ll as SHAKE_SCREEN,
  pa as SHOP_PROCESSING,
  Ea as SHOP_PROCESSING_BODY,
  cl as SHOW_ANIMATION,
  pl as SHOW_BALLOON_ICON,
  El as SHOW_BATTLE_ANIMATION,
  Al as SHOW_CHOICES,
  Cl as SHOW_CHOICES_ITEM,
  Il as SHOW_MESSAGE,
  Tl as SHOW_MESSAGE_BODY,
  _l as SHOW_PICTURE,
  la as SHOW_SCROLLING_TEXT,
  ia as SHOW_SCROLLING_TEXT_BODY,
  kl as SKIP,
  Td as SPECIAL_EFFECT_ESCAPE,
  Bn as SPECIAL_PARAM_EXR,
  Gn as SPECIAL_PARAM_FDR,
  fn as SPECIAL_PARAM_GRD,
  On as SPECIAL_PARAM_MCR,
  Vn as SPECIAL_PARAM_MDR,
  Fn as SPECIAL_PARAM_PDR,
  vn as SPECIAL_PARAM_PHA,
  hn as SPECIAL_PARAM_REC,
  Dn as SPECIAL_PARAM_TCR,
  Nn as SPECIAL_PARAM_TGR,
  yd as SRC_DATA_ACTOR,
  fd as SRC_DATA_ARMOR,
  hd as SRC_DATA_CLASS,
  vd as SRC_DATA_COMMON_EVNET,
  gd as SRC_DATA_ENEMY,
  Ld as SRC_DATA_ITEMS,
  bd as SRC_DATA_MAP,
  Md as SRC_DATA_SKILL,
  Pd as SRC_DATA_STATE,
  Od as SRC_DATA_TROOP,
  Nd as SRC_DATA_WEAPON,
  ul as STOP_SE,
  Rl as TINT_PICTURE,
  Sl as TINT_SCREEN,
  an as TRAIT_ACTION_PLUS,
  xo as TRAIT_ATTACK_ELEMENT,
  zo as TRAIT_ATTACK_SKILL,
  Yo as TRAIT_ATTACK_SPEED,
  wo as TRAIT_ATTACK_STATE,
  Uo as TRAIT_ATTACK_TIMES,
  tn as TRAIT_COLLAPSE_TYPE,
  Do as TRAIT_DEBUFF_RATE,
  Oo as TRAIT_ELEMENT_RATE,
  Qo as TRAIT_EQUIP_ARMOR_TYPE,
  Zo as TRAIT_EQUIP_LOCK,
  Jo as TRAIT_EQUIP_SEAL,
  jo as TRAIT_EQUIP_WEAPON_TYPE,
  Go as TRAIT_PARAM,
  mn as TRAIT_PARTY_ABILITY,
  Ko as TRAIT_SKILL_ADD,
  qo as TRAIT_SKILL_SEAL,
  Wo as TRAIT_SKILL_TYPE_ADD,
  Xo as TRAIT_SKILL_TYPE_SEAL,
  $o as TRAIT_SLOT_TYPE,
  Ho as TRAIT_SPARAM,
  en as TRAIT_SPECIAL_FLAG,
  Fo as TRAIT_STATE_RATE,
  Vo as TRAIT_STATE_RESIST,
  Bo as TRAIT_XPARAM,
  yl as TRANSFER_PLAYER,
  us as TYPE_ARMOR,
  _s as TYPE_ITEM,
  ks as TYPE_WEAPON,
  co as VARIABLE_SRC_LAST,
  go as VEHICLE_AIRSHIP,
  yo as VEHICLE_BOAT,
  bo as VEHICLE_SHIP,
  bl as WAIT,
  fl as actorNameControlChars,
  om as assetDirectoryName,
  hl as buildNoteFromNormalized,
  hr as cloneChoices,
  Mo as cloneEventCommand,
  Ba as cloneParameters,
  Ja as collapsOptionsToArray,
  vl as collectMapEvents,
  Ec as convertCommentArrayToObject,
  vp as convertTermsMessageMZtoMV,
  Ol as correctTroopEvents,
  Dl as createActorControlChars,
  Fl as createCommandContext,
  Vl as createControlCharFormat,
  Gl as createEventContext,
  Ac as createMenuCommandState,
  Bl as createNoteEntity,
  Hl as createSystemVariableControlChars,
  vo as defineGameDataSources,
  Gd as defineSystemItems,
  Za as defineTraitCollapseType,
  $a as defineTraitExtraParam,
  Qn as defineTraitItems,
  se as defineTraitPartyAbility,
  ee as defineTraitRegularParam,
  ne as defineTraitSpecialFlag,
  me as defineTraitSpecialParam,
  kn as extraParamName,
  ae as extraParamsToArray,
  Xd as extractFileName,
  _d as formatItemEffectText,
  Zn as formatTraitText,
  Fm as fromArrayChangeItems,
  wm as fromArrayChangeWeapons,
  Lm as fromArrayCommonEvent,
  Nm as fromArrayControlSwitches,
  um as fromArrayEnemyTransform,
  Om as fromArrayInputNumber,
  Or as fromArrayPlayMovie,
  Fr as fromArrayPluginCommandMZ,
  yr as fromArrayScrollingTextBody,
  Rr as fromArrayScrollingTextHeader,
  Jm as fromArraySelectItem,
  Lr as fromArraySetupChoice,
  Pr as fromArraySetupChoiceItem,
  Op as fromArrayShowMessageHeader,
  xl as fromStringArray,
  wl as gatherEventCommandContext,
  Cc as getArmorCategoryEnabled,
  st as getArmorTypes,
  fo as getControlChars,
  et as getElementTypes,
  Ic as getEquipCommandEnabled,
  tt as getEquipTypes,
  Tc as getFormationCommandEnabled,
  _c as getItemCategoryEnabled,
  kc as getItemCommandEnabled,
  Yl as getItemIdFromItemCommand,
  uc as getKeyItemCategoryEnabled,
  Ul as getNoteValue,
  Hd as getParamNames,
  Rc as getSaveCommandEnabled,
  Sc as getSkillCommandEnabled,
  mt as getSkillTypes,
  yc as getStatusCommandEnabled,
  ot as getSwitches,
  at as getVariableNames,
  bc as getWeaponCategoryEnabled,
  rt as getWeaponTypes,
  Lo as isCloneableCommand,
  Po as isCommandAnyAudio,
  pm as isCommandBattleProcessingVariable,
  vs as isCommandOperandVariables,
  zl as isScript,
  Wl as isUsingVariableItemCommand,
  Dm as isUsingVaribleCommandChangingItems,
  Fd as labelsRegistry,
  gc as makeActorData,
  Pc as makeActorDataFromTestSoruce,
  No as makeAnimation,
  Mc as makeArmorData,
  Lc as makeArmorDataFromTestSoruce,
  Nc as makeAudioCommand,
  fc as makeBattleEventPage,
  Dp as makeBooleanOptions,
  hc as makeClassData,
  vc as makeClassDataEx,
  Oc as makeClassDataFromTestSoruce,
  ym as makeCommandAddEachEnemyState,
  Rm as makeCommandAddEnemyState,
  Vr as makeCommandAddPartyMember,
  wt as makeCommandAddStateByVariable,
  Ht as makeCommandAddStateEachActor,
  Gt as makeCommandAddStateTargetActor,
  Dc as makeCommandAudioAny,
  Em as makeCommandBattleProcessingDirect,
  Cm as makeCommandBattleProcessingEncount,
  Am as makeCommandBattleProcessingVariable,
  Fc as makeCommandChangeActorImages,
  Vc as makeCommandChangeActorName,
  Gc as makeCommandChangeActorNickName,
  Bc as makeCommandChangeActorProfile,
  Hc as makeCommandChangeBattleBGM,
  dm as makeCommandChangeBattleBackground,
  xc as makeCommandChangeClass,
  wc as makeCommandChangeDefeatME,
  aa as makeCommandChangeEncounter,
  Yc as makeCommandChangeEquip,
  Vm as makeCommandChangeItems,
  $m as makeCommandChangeParallax,
  mr as makeCommandChangeTileset,
  uo as makeCommandChangeVehicleBGM,
  ko as makeCommandChangeVehicleImage,
  Uc as makeCommandChangeVictoryME,
  Ym as makeCommandChangeWeapons,
  zc as makeCommandCommentBody,
  Wc as makeCommandCommentHeader,
  Mm as makeCommandCommonEvent,
  fm as makeCommandControlSwitches,
  Im as makeCommandControlTimer,
  qt as makeCommandDecreaseActorParam,
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
  Wr as makeCommandFadeInScreen,
  tm as makeCommandFadeOutBGM,
  sm as makeCommandFadeOutBGS,
  Xr as makeCommandFadeOutScreen,
  Kr as makeCommandFlashScreen,
  vt as makeCommandForgetSkill,
  Vt as makeCommandForgetSkillByVariable,
  Dt as makeCommandForgetSkillEachActor,
  jt as makeCommandGainActorHP,
  $t as makeCommandGainActorMP,
  Zt as makeCommandGainActorTP,
  Km as makeCommandGainArmor,
  qm as makeCommandGainArmorByVariable,
  kt as makeCommandGainExpByVariable,
  Tt as makeCommandGainExpDirect,
  yt as makeCommandGainExpTargetAndOperandVariable,
  Rt as makeCommandGainExpTargetVariable,
  Br as makeCommandGainGold,
  xr as makeCommandGainGoldByVariable,
  Gm as makeCommandGainItem,
  Bm as makeCommandGainItemV,
  Um as makeCommandGainWeapon,
  zm as makeCommandGainWeaponV,
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
  Kt as makeCommandIncreaseActorParam,
  hm as makeCommandInputNumber,
  ht as makeCommandLearnSkill,
  Ft as makeCommandLearnSkillByVariable,
  Ot as makeCommandLearnSkillEachActor,
  Pt as makeCommandLevelDownActor,
  Lt as makeCommandLevelDownActorByVariable,
  ft as makeCommandLevelDownEachActors,
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
  Wm as makeCommandLoseWeapon,
  Xm as makeCommandLoseWeaponV,
  Ur as makeCommandMovePicture,
  Ut as makeCommandNameInputProcessing,
  Xc as makeCommandPlayBGM,
  Kc as makeCommandPlayBGS,
  qc as makeCommandPlayME,
  vr as makeCommandPlayMovie,
  jc as makeCommandPlaySE,
  Dr as makeCommandPluginCommandMZ,
  zt as makeCommandRecoverAllEachActors,
  Wt as makeCommandRecoverAllTargetActor,
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
  ha as makeCommandScriptBody,
  fa as makeCommandScriptHeader,
  ar as makeCommandScrollMap,
  br as makeCommandScrollingTextBody,
  Sr as makeCommandScrollingTextHeader,
  Zm as makeCommandSelectItem,
  pr as makeCommandSetEventLocationDirect,
  Ar as makeCommandSetEventLocationExchange,
  Er as makeCommandSetEventLocationVariable,
  Ro as makeCommandSetVehicleLocation,
  So as makeCommandSetVehicleLocationFromVariables,
  zr as makeCommandSetWeatherEffect,
  fr as makeCommandSetupChoice,
  qr as makeCommandShakeScreen,
  $r as makeCommandShopProcessing,
  em as makeCommandShowAnimation,
  nm as makeCommandShowBalloonIcon,
  gr as makeCommandShowChoiceItem,
  er as makeCommandShowMapName,
  Fp as makeCommandShowMessage,
  Vp as makeCommandShowMessageBody,
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
  fs as makeCommandVariableFromEnemyAgi,
  Ps as makeCommandVariableFromEnemyAtk,
  Rs as makeCommandVariableFromEnemyCurrentHp,
  Ss as makeCommandVariableFromEnemyCurrentMp,
  ys as makeCommandVariableFromEnemyCurrentTp,
  Ms as makeCommandVariableFromEnemyDef,
  hs as makeCommandVariableFromEnemyLuk,
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
  qs as makeCommandVariableFromMapId,
  Ws as makeCommandVariableFromMapPlayerDirection,
  Xs as makeCommandVariableFromMapPlayerScreenX,
  Ks as makeCommandVariableFromMapPlayerScreenY,
  Us as makeCommandVariableFromMapPlayerX,
  zs as makeCommandVariableFromMapPlayerY,
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
  Os as makeCommandVariableFromVariable,
  Fs as makeCommandVariableFromWeapon,
  Qc as makeCommentArray,
  Zc as makeCommentCommandArray,
  Jc as makeCommonEventData,
  $c as makeDamage,
  Bd as makeDataNames,
  ap as makeDropItem,
  Gp as makeEditorSetting,
  ep as makeEnemyAction,
  tp as makeEnemyData,
  mp as makeEnemyDataFromTestSoruce,
  rp as makeEventPageCondition,
  Vd as makeGameInitial,
  Bp as makeItemCategories,
  Hp as makeItemCategoriesFromArray,
  sp as makeItemData,
  op as makeItemDataFromTestSoruce,
  np as makeMapData,
  dp as makeMapDataFromSingleEvent,
  ip as makeMapEvent,
  lp as makeMapEventIamge,
  cp as makeMapEventPage,
  pp as makeMapFileInfo,
  Ep as makeMapInfoData,
  Ap as makeMapName,
  xp as makeMenuCommandsEnabled,
  wp as makeMenuCommandsEnabledFromArray,
  Cp as makeParamArray,
  Yp as makeParamNamesArray,
  Up as makeParamNamesFromArray,
  Ip as makeSkillData,
  Tp as makeSkillDataFromTestSoruce,
  zp as makeSoundsArray,
  Wp as makeSoundsObject,
  _p as makeStateData,
  kp as makeStateDataFromTestSoruce,
  Xp as makeSystemAdvanced,
  Kp as makeSystemData,
  up as makeSystemDataFromMV,
  Rp as makeSystemDataMV,
  qp as makeTermsBasic,
  jp as makeTermsBasicFromArray,
  Qp as makeTermsCommandArray,
  Zp as makeTermsCommandArrayWithNulls,
  Jp as makeTermsCommandFromArray,
  $p as makeTermsMessages,
  Sp as makeTestAudioCommands,
  yp as makeTestSystemData,
  aE as makeTitleCommandWindow,
  bp as makeTroopData,
  gp as makeTroopEventConditions,
  Pp as makeTroopMember,
  eE as makeVehicleData,
  Mp as makeWeaponData,
  Lp as makeWeaponDataFromTestSoruce,
  Np as normalizeDataActor,
  Xl as normalizeNote,
  fp as paramArrayToObject,
  oe as partyAbilityToArray,
  Kl as processCommonEvents,
  ql as processEventPages,
  jl as processMapEvents,
  Ql as processTroopEvents,
  Zl as readNote,
  Jl as readNoteEx,
  $l as readNoteEx2,
  ac as readNoteObject,
  Ln as regularParamName,
  te as regularParamsToArray,
  ec as replaceNote,
  tc as replaceNoteWithHandlers,
  ho as repleaceMapEventCommands,
  Id as resolveItemEffectLabels,
  Dd as resolveTraitLabels,
  mc as setNoteValue,
  de as specialFlagToArray,
  Hn as specialParamName,
  re as specialParamsToArray,
  zd as textAndDesc,
  Pa as toArrayCommonEvent,
  Ma as toArrayControlSwitches,
  vm as toArrayInputNumber,
  Na as toArrayScrollingTextBody,
  La as toArrayScrollingTextHeader,
  Nr as toArraySetupChoice,
  Mr as toArraySetupChoiceItem,
  tE as toArrayShowMessageHeader,
  rc as variabeleValueControlChars
};
