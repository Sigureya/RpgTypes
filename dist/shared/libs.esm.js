var e = 0, t = 101, n = 401, r = 102, i = 402, a = 103, ee = 104, te = 105, ne = 405, re = 108, ie = 408, ae = 109, oe = 111, se = 411, ce = 112, le = 113, ue = 115, de = 117, fe = 118, pe = 119, me = 121, he = 122, ge = 123, _e = 124, ve = 125, ye = 126, o = 127, s = 128, c = 129, l = 132, u = 133, d = 134, f = 135, p = 136, m = 137, h = 138, g = 139, _ = 140, v = 201, y = 202, b = 203, x = 204, S = 205, C = 206, w = 211, T = 212, E = 213, D = 214, O = 216, k = 217, A = 221, j = 222, M = 223, N = 224, P = 225, be = 230, xe = 231, Se = 232, Ce = 233, we = 234, Te = 235, Ee = 236, De = 241, Oe = 242, ke = 243, Ae = 244, je = 245, Me = 246, Ne = 249, Pe = 250, Fe = 251, Ie = 261, Le = 281, Re = 282, ze = 283, Be = 284, Ve = 285, He = 301, Ue = 601, We = 602, Ge = 603, Ke = 604, qe = 302, Je = 605, Ye = 303, Xe = 311, Ze = 312, Qe = 326, $e = 314, et = 315, tt = 316, nt = 313, rt = 317, it = 318, at = 319, ot = 320, st = 321, ct = 322, lt = 323, ut = 324, dt = 325, ft = 331, pt = 332, mt = 333, ht = 334, gt = 335, _t = 336, vt = 337, yt = 339, bt = 340, xt = 351, St = 342, Ct = 352, wt = 353, Tt = 354, Et = 355, Dt = 655, Ot = 356, kt = 357, At = 0, F = 1, jt = 2, Mt = 3, Nt = 4, Pt = 5, Ft = "rmmz", It = "colors", I = (e) => e.map(((e) => ({
	dataKey: e,
	placeHolder: `{${e}}`
}))), Lt = (e) => ({
	dataKey: e.dataIdKey,
	placeHolder: `{${e.dataIdKey}}`,
	sourceId: {
		author: e.sourceId.author,
		kind: e.sourceId.kind,
		module: e.sourceId.module
	}
}), L = (e) => `${e.author}.${e.module}.${e.kind}`, R = (e) => {
	let t = e.itemMappers ?? [];
	return e.itemMapper ? [...t, e.itemMapper] : [...t];
}, Rt = (e, t = []) => {
	return {
		itemMappers: [...R(e), ...t].map(zt),
		fallbackFormat: {
			text: Bt(e),
			label: Vt(e)
		},
		properties: (n = e.placeHolder ?? {}, {
			numbers: n.numbers ? I(n.numbers) : [],
			strings: n.strings ? I(n.strings) : []
		}),
		arrayIndex: e.arrayIndex ? e.arrayIndex.map(Lt) : []
	};
	var n;
}, zt = (e) => ({
	placeHolder: `{${e.placeHolder}}`,
	kindKey: e.kindKey,
	dataIdKey: e.dataIdKey
}), Bt = (e) => {
	if (e.fallbackFormat && e.fallbackFormat.text !== void 0) return e.fallbackFormat.text;
	let t = ((e) => new Set([
		...e.placeHolder?.numbers ?? [],
		...e.placeHolder?.strings ?? [],
		...e.arrayIndex?.map(((e) => e.dataIdKey)) ?? []
	]))(e);
	return t.size === 0 ? "value not found" : Array.from(t).map(((e) => `${e}:{${e}}`)).join(", ");
}, Vt = (e) => e.fallbackFormat?.label === void 0 ? "unknown key:{key}" : e.fallbackFormat.label, z = (e, t, n) => {
	let r = t[n.dataKey];
	return r == null ? e : e.replaceAll(n.placeHolder, String(r));
}, Ht = (e, t, n, r = {
	placeHolderMaxLength: 50,
	formatMaxLength: 200
}) => e.pattern.length >= r.formatMaxLength ? {
	formatLabel: e.label,
	syntaxErrors: [{
		message: n.formatVeryLong,
		reason: e.pattern.slice(0, r.formatMaxLength)
	}],
	semanticErrors: []
} : {
	formatLabel: e.label,
	semanticErrors: Wt(e, t, n),
	syntaxErrors: Ut(e.pattern, t, n, r.placeHolderMaxLength)
}, Ut = (e, t, n, r) => {
	let i = Array.from(e.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), a = ((e) => new Set([
		...e.placeHolder?.numbers ?? [],
		...e.itemMapper ? [e.itemMapper.placeHolder] : [],
		...e.itemMappers?.map(((e) => e.placeHolder)) ?? [],
		...e.placeHolder?.strings ?? [],
		...e.arrayIndex?.map(((e) => e.dataIdKey)) ?? []
	]))(t);
	return i.reduce(((e, t) => {
		let i = t[1];
		return i.length === 0 ? e : i.length > r ? (e.push({
			message: n.longPlaceHolder,
			reason: i.slice(0, r)
		}), e) : (a.has(i) || e.push({
			message: n.extraPlaceHolder,
			reason: i
		}), e);
	}), []);
}, Wt = (e, t, n) => R(t).reduce(((t, r) => {
	let i = Gt(e, r, n);
	return i && t.push(i), t;
}), []), Gt = (e, t, n) => {
	let r = e.pattern.includes(t.placeHolder), i = !!e.dataSource;
	return !r && i ? {
		message: n.missingName,
		reason: t.placeHolder
	} : r && !i ? {
		message: n.missingSourceId,
		reason: t.placeHolder
	} : void 0;
}, Kt = (e, t) => {
	let n = Yt(t);
	return e.reduce(((e, t) => {
		let r = qt(t, n);
		return e.set(t.kindId, r), e;
	}), /* @__PURE__ */ new Map());
}, qt = (e, t) => {
	let n = Jt(e.dataSource, t);
	return {
		patternCompiled: e.pattern,
		label: e.label,
		data: n ? n.items : void 0
	};
}, Jt = (e, t) => {
	if (e) return t.get(L(e));
}, Yt = (e) => e.reduce(((e, t) => {
	let n = {
		items: Xt(t.items),
		source: t.source,
		label: t.label
	};
	return e.set(L(t.source), n), e;
}), /* @__PURE__ */ new Map()), Xt = (e) => e.map(((e) => ({
	id: e.id,
	name: e.name
}))), Zt = (e, t, n, r, i) => {
	let a = ((e, t, n) => {
		let r = n.properties.numbers.reduce(((e, n) => z(e, t, n)), e);
		return n.properties.strings.reduce(((e, n) => z(e, t, n)), r);
	})(r, e, n);
	return t ? Qt(a, e, n, t, i) : a;
}, Qt = (e, t, n, r, i) => {
	let a = ((e, t) => {
		let n = ((e, t) => {
			let n = t[e];
			return n && n.id === e ? n : t.find(((t) => t.id === e));
		})(t, e);
		return n ? n.name : `?data[${t}]`;
	})(r, i(t));
	return n.itemMappers.reduce(((e, t) => e.replaceAll(t.placeHolder, a)), e);
}, $t = (e) => Object.entries(e).map((([, e]) => e.title)), B = (e, t, n) => t.map(((t) => n(t, e[t], e))), en = (e, t, n) => B(e, t, n), tn = (e) => typeof e == "number" && !Number.isNaN(e), nn = 0, rn = 1, an = 2, on = 3, sn = 4, cn = 5, ln = 6, un = 7, dn = 8, fn = 9, pn = 10, mn = 11, hn = 12, gn = 13, _n = 14, vn = 15, yn = 16, bn = 17, xn = 18, Sn = 19, Cn = 20, wn = 21, Tn = 22, En = 23, Dn = 24, On = 25, kn = 26, An = 27, jn = 28, Mn = 29, Nn = 30, Pn = 31, Fn = 32, In = 33, Ln = 34, Rn = 35, zn = 36, Bn = 37, Vn = 38, Hn = 39, Un = 40, Wn = 41, Gn = 42, Kn = 43, qn = 44, Jn = 45, Yn = (e) => ({ code: $[e] }), Xn = (e) => ({ code: $[e] }), V = (e) => ({ code: $[e] }), Zn = (e) => e.map(((e) => ({ code: $[e] }))), H = (e) => ({
	code: 44,
	parameters: [e]
}), U = (e, t) => ({
	code: 14,
	parameters: [e, t]
}), W = (e) => ({
	code: 15,
	parameters: [e]
}), G = (e) => ({
	code: 27,
	parameters: [e]
}), K = (e) => ({
	code: 28,
	parameters: [e]
}), q = (e) => ({
	code: 29,
	parameters: [e]
}), J = (e) => ({
	code: 30,
	parameters: [e]
}), Y = (e, t) => ({
	code: 41,
	parameters: [e, t]
}), X = (e) => ({
	code: 42,
	parameters: [e]
}), Z = (e) => ({
	code: 43,
	parameters: [e]
}), Q = (e) => ({
	code: 45,
	parameters: [e]
}), $ = {
	moveDown: 1,
	moveLeft: 2,
	moveRight: 3,
	moveUp: 4,
	moveLowerLeft: 5,
	moveLowerRight: 6,
	moveUpperLeft: 7,
	moveUpperRight: 8,
	moveRandom: 9,
	moveToward: 10,
	moveAway: 11,
	moveForward: 12,
	moveBackward: 13,
	turnDown: 16,
	turnLeft: 17,
	turnRight: 18,
	turnUp: 19,
	turn90DegreesRight: 20,
	turn90DegreesLeft: 21,
	turn180Degrees: 22,
	turn90DegreesRightOrLeft: 23,
	turnRandom: 24,
	turnToward: 25,
	turnAway: 26
}, Qn = (e) => e.flatMap(((e) => $n(e))), $n = (e) => {
	let t = e[0];
	if (t === 44 || t === "playSe") {
		let t = e[1];
		return H({
			name: t.name,
			volume: t.volume,
			pitch: t.pitch,
			pan: t.pan
		});
	}
	return t === 41 || t === "changeImage" ? Y(e[1], e[2]) : t === 45 || t === "script" ? Q(e[1]) : t === 14 || t === "jump" ? U(e[1], e[2]) : t === 15 || t === "wait" ? W(e[1]) : t === 27 || t === "switchOn" ? G(e[1]) : t === 28 || t === "switchOff" ? K(e[1]) : t === 29 || t === "changeSpeed" ? q(e[1]) : t === 30 || t === "changeFrequency" ? J(e[1]) : t === 42 || t === "changeOpacity" ? X(e[1]) : t === 43 || t === "changeBlendMode" ? Z(e[1]) : typeof t == "number" ? Array.from({ length: e[1] }, (() => ({ code: t }))) : typeof t == "string" ? Array.from({ length: e[1] }, (() => V(t))) : [];
}, er = (e) => e.trimEnd(), tr = (e = {}) => ({
	name: e.name ?? "",
	volume: e.volume ?? 100,
	pitch: e.pitch ?? 100,
	pan: e.pan ?? 0
});
export { Cn as $, De as $n, f as $t, rn as A, D as An, te as Ar, We as At, dn as B, k as Bn, p as Bt, Mn as C, ge as Cn, E as Cr, Pt as Ct, _n as D, gt as Dn, t as Dr, bt as Dt, nn as E, he as En, i as Er, jt as Et, fn as F, Me as Fn, M as Fr, s as Ft, jn as G, pe as Gn, at as Gt, Jn as H, C as Hn, pt as Ht, on as I, A as In, v as Ir, ze as It, Bn as J, Se as Jn, ve as Jt, An as K, ce as Kn, et as Kt, pn as L, N as Ln, be as Lr, l as Lt, an as M, ue as Mn, ae as Mr, Ue as Mt, cn as N, j as Nn, Fe as Nr, ct as Nt, mn as O, ht as On, n as Or, He as Ot, ln as P, Oe as Pn, we as Pr, nt as Pt, wn as Q, Ct as Qn, Le as Qt, sn as R, yt as Rn, st as Rt, Gn as S, se as Sn, T as Sr, Nt as St, Rn as T, _e as Tn, r as Tr, At as Tt, Ln as U, a as Un, mt as Ut, qn as V, Ve as Vn, ft as Vt, In as W, fe as Wn, St as Wt, Hn as X, e as Xn, ye as Xt, Un as Y, Ye as Yn, Xe as Yt, Tn as Z, xt as Zn, tt as Zt, W as _, h as _n, y as _r, Ht as _t, J as a, c as an, kt as ar, xn as at, Nn as b, de as bn, qe as br, It as bt, q as c, d as cn, Tt as cr, vn as ct, Yn as d, Qe as dn, Et as dr, tn as dt, Ze as en, je as er, En as et, H as f, w as fn, Dt as fr, B as ft, G as g, o as gn, S as gr, Kt as gt, K as h, u as hn, b as hr, Zt as ht, Z as i, rt as in, Ot as ir, Dn as it, hn as j, Te as jn, ne as jr, Ge as jt, gn as k, _t as kn, xe as kr, Ke as kt, Xn as l, it as ln, Ce as lr, Fn as lt, V as m, lt as mn, ee as mr, $t as mt, er as n, ut as nn, Ie as nr, yn as nt, Y as o, O as on, $e as or, On as ot, Q as p, _ as pn, x as pr, en as pt, Vn as q, le as qn, m as qt, Qn as r, Be as rn, Pe as rr, bn as rt, X as s, dt as sn, Ae as sr, Sn as st, tr as t, ot as tn, Ne as tr, kn as tt, U as u, Re as un, ke as ur, Pn as ut, Zn as v, ie as vn, Ee as vr, Rt as vt, zn as w, me as wn, vt as wr, Mt as wt, Wn as x, oe as xn, Je as xr, F as xt, Kn as y, re as yn, P as yr, Ft as yt, un as z, wt as zn, g as zt };
