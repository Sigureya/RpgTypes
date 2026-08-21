var e = 0, t = 101, n = 401, r = 102, i = 402, a = 403, ee = 103, te = 104, ne = 105, re = 405, ie = 108, ae = 408, oe = 109, se = 111, ce = 411, le = 112, ue = 113, de = 115, fe = 117, pe = 118, me = 119, he = 121, ge = 122, _e = 123, ve = 124, ye = 125, o = 126, s = 127, c = 128, l = 129, u = 132, d = 133, f = 134, p = 135, m = 136, h = 137, g = 138, _ = 139, v = 140, y = 201, b = 202, x = 203, S = 204, C = 205, w = 206, T = 211, E = 212, D = 213, O = 214, k = 216, A = 217, j = 221, M = 222, N = 223, P = 224, be = 225, xe = 230, Se = 231, Ce = 232, we = 233, Te = 234, Ee = 235, De = 236, Oe = 241, ke = 242, Ae = 243, je = 244, Me = 245, Ne = 246, Pe = 249, Fe = 250, Ie = 251, Le = 261, Re = 281, ze = 282, Be = 283, Ve = 284, He = 285, Ue = 301, We = 601, Ge = 602, Ke = 603, qe = 604, Je = 302, Ye = 605, Xe = 303, Ze = 311, Qe = 312, $e = 326, et = 314, tt = 315, nt = 316, rt = 313, it = 317, at = 318, ot = 319, st = 320, ct = 321, lt = 322, ut = 323, dt = 324, ft = 325, pt = 331, mt = 332, ht = 333, gt = 334, _t = 335, vt = 336, yt = 337, bt = 339, xt = 340, St = 351, Ct = 342, wt = 352, Tt = 353, Et = 354, Dt = 355, Ot = 655, kt = 356, At = 357, F = 0, jt = 1, Mt = 2, Nt = 3, Pt = 4, Ft = 5, It = "rmmz", Lt = "colors", I = (e) => e.map(((e) => ({
	dataKey: e,
	placeHolder: `{${e}}`
}))), Rt = (e) => ({
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
}, zt = (e, t = []) => {
	return {
		itemMappers: [...R(e), ...t].map(Bt),
		fallbackFormat: {
			text: Vt(e),
			label: Ht(e)
		},
		properties: (n = e.placeHolder ?? {}, {
			numbers: n.numbers ? I(n.numbers) : [],
			strings: n.strings ? I(n.strings) : []
		}),
		arrayIndex: e.arrayIndex ? e.arrayIndex.map(Rt) : []
	};
	var n;
}, Bt = (e) => ({
	placeHolder: `{${e.placeHolder}}`,
	kindKey: e.kindKey,
	dataIdKey: e.dataIdKey
}), Vt = (e) => {
	if (e.fallbackFormat && e.fallbackFormat.text !== void 0) return e.fallbackFormat.text;
	let t = ((e) => new Set([
		...e.placeHolder?.numbers ?? [],
		...e.placeHolder?.strings ?? [],
		...e.arrayIndex?.map(((e) => e.dataIdKey)) ?? []
	]))(e);
	return t.size === 0 ? "value not found" : Array.from(t).map(((e) => `${e}:{${e}}`)).join(", ");
}, Ht = (e) => e.fallbackFormat?.label === void 0 ? "unknown key:{key}" : e.fallbackFormat.label, z = (e, t, n) => {
	let r = t[n.dataKey];
	return r == null ? e : e.replaceAll(n.placeHolder, String(r));
}, Ut = (e, t, n, r = {
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
	semanticErrors: Gt(e, t, n),
	syntaxErrors: Wt(e.pattern, t, n, r.placeHolderMaxLength)
}, Wt = (e, t, n, r) => {
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
}, Gt = (e, t, n) => R(t).reduce(((t, r) => {
	let i = Kt(e, r, n);
	return i && t.push(i), t;
}), []), Kt = (e, t, n) => {
	let r = e.pattern.includes(t.placeHolder), i = !!e.dataSource;
	return !r && i ? {
		message: n.missingName,
		reason: t.placeHolder
	} : r && !i ? {
		message: n.missingSourceId,
		reason: t.placeHolder
	} : void 0;
}, qt = (e, t) => {
	let n = Xt(t);
	return e.reduce(((e, t) => {
		let r = Jt(t, n);
		return e.set(t.kindId, r), e;
	}), /* @__PURE__ */ new Map());
}, Jt = (e, t) => {
	let n = Yt(e.dataSource, t);
	return {
		patternCompiled: e.pattern,
		label: e.label,
		data: n ? n.items : void 0
	};
}, Yt = (e, t) => {
	if (e) return t.get(L(e));
}, Xt = (e) => e.reduce(((e, t) => {
	let n = {
		items: Zt(t.items),
		source: t.source,
		label: t.label
	};
	return e.set(L(t.source), n), e;
}), /* @__PURE__ */ new Map()), Zt = (e) => e.map(((e) => ({
	id: e.id,
	name: e.name
}))), Qt = (e, t, n, r, i) => {
	let a = ((e, t, n) => {
		let r = n.properties.numbers.reduce(((e, n) => z(e, t, n)), e);
		return n.properties.strings.reduce(((e, n) => z(e, t, n)), r);
	})(r, e, n);
	return t ? $t(a, e, n, t, i) : a;
}, $t = (e, t, n, r, i) => {
	let a = ((e, t) => {
		let n = ((e, t) => {
			let n = t[e];
			return n && n.id === e ? n : t.find(((t) => t.id === e));
		})(t, e);
		return n ? n.name : `?data[${t}]`;
	})(r, i(t));
	return n.itemMappers.reduce(((e, t) => e.replaceAll(t.placeHolder, a)), e);
}, en = (e) => Object.entries(e).map((([, e]) => e.title)), B = (e, t, n) => t.map(((t) => n(t, e[t], e))), tn = (e, t, n) => B(e, t, n), nn = (e) => typeof e == "number" && !Number.isNaN(e), rn = 0, an = 1, on = 2, sn = 3, cn = 4, ln = 5, un = 6, dn = 7, fn = 8, pn = 9, mn = 10, hn = 11, gn = 12, _n = 13, vn = 14, yn = 15, bn = 16, xn = 17, Sn = 18, Cn = 19, wn = 20, Tn = 21, En = 22, Dn = 23, On = 24, kn = 25, An = 26, jn = 27, Mn = 28, Nn = 29, Pn = 30, Fn = 31, In = 32, Ln = 33, Rn = 34, zn = 35, Bn = 36, Vn = 37, Hn = 38, Un = 39, Wn = 40, Gn = 41, Kn = 42, qn = 43, Jn = 44, Yn = 45, Xn = (e) => ({ code: $[e] }), Zn = (e) => ({ code: $[e] }), V = (e) => ({ code: $[e] }), Qn = (e) => e.map(((e) => ({ code: $[e] }))), H = (e) => ({
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
}, $n = (e) => e.flatMap(((e) => er(e))), er = (e) => {
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
}, tr = (e) => e.trimEnd(), nr = (e = {}) => ({
	name: e.name ?? "",
	volume: e.volume ?? 100,
	pitch: e.pitch ?? 100,
	pan: e.pan ?? 0
});
export { wn as $, Oe as $n, p as $t, an as A, O as An, Se as Ar, Ge as At, fn as B, A as Bn, m as Bt, Nn as C, _e as Cn, D as Cr, Ft as Ct, vn as D, _t as Dn, i as Dr, xt as Dt, rn as E, ge as En, a as Er, Mt as Et, pn as F, Ne as Fn, Te as Fr, c as Ft, Mn as G, me as Gn, ot as Gt, Yn as H, w as Hn, mt as Ht, sn as I, j as In, N as Ir, Be as It, Vn as J, Ce as Jn, ye as Jt, jn as K, le as Kn, tt as Kt, mn as L, P as Ln, y as Lr, u as Lt, on as M, de as Mn, re as Mr, We as Mt, ln as N, M as Nn, oe as Nr, lt as Nt, hn as O, gt as On, t as Or, Ue as Ot, un as P, ke as Pn, Ie as Pr, rt as Pt, Tn as Q, wt as Qn, Re as Qt, cn as R, bt as Rn, xe as Rr, ct as Rt, Kn as S, ce as Sn, E as Sr, Pt as St, zn as T, ve as Tn, r as Tr, F as Tt, Rn as U, ee as Un, ht as Ut, Jn as V, He as Vn, pt as Vt, Ln as W, pe as Wn, Ct as Wt, Un as X, e as Xn, o as Xt, Wn as Y, Xe as Yn, Ze as Yt, En as Z, St as Zn, nt as Zt, W as _, g as _n, b as _r, Ut as _t, J as a, l as an, At as ar, Sn as at, Pn as b, fe as bn, Je as br, Lt as bt, q as c, f as cn, Et as cr, yn as ct, Xn as d, $e as dn, Dt as dr, nn as dt, Qe as en, Me as er, Dn as et, H as f, T as fn, Ot as fr, B as ft, G as g, s as gn, C as gr, qt as gt, K as h, d as hn, x as hr, Qt as ht, Z as i, it as in, kt as ir, On as it, gn as j, Ee as jn, ne as jr, Ke as jt, _n as k, vt as kn, n as kr, qe as kt, Zn as l, at as ln, we as lr, In as lt, V as m, ut as mn, te as mr, en as mt, tr as n, dt as nn, Le as nr, bn as nt, Y as o, k as on, et as or, kn as ot, Q as p, v as pn, S as pr, tn as pt, Hn as q, ue as qn, h as qt, $n as r, Ve as rn, Fe as rr, xn as rt, X as s, ft as sn, je as sr, Cn as st, nr as t, st as tn, Pe as tr, An as tt, U as u, ze as un, Ae as ur, Fn as ut, Qn as v, ae as vn, De as vr, zt as vt, Bn as w, he as wn, yt as wr, Nt as wt, Gn as x, se as xn, Ye as xr, jt as xt, qn as y, ie as yn, be as yr, It as yt, dn as z, Tt as zn, _ as zt };
