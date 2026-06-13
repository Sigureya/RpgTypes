var e = 0, t = 101, n = 401, r = 102, i = 402, a = 103, ee = 104, te = 105, ne = 405, re = 108, ie = 408, ae = 109, oe = 111, se = 411, ce = 112, le = 113, ue = 115, de = 117, fe = 118, pe = 119, me = 121, he = 122, ge = 123, _e = 124, ve = 125, ye = 126, o = 127, s = 128, c = 129, l = 132, u = 133, d = 134, f = 135, p = 136, m = 137, h = 138, g = 139, _ = 140, v = 201, y = 202, b = 203, x = 204, S = 205, C = 206, w = 211, T = 212, E = 213, D = 214, O = 216, k = 217, A = 221, j = 222, M = 223, N = 224, P = 225, be = 230, xe = 231, Se = 232, Ce = 233, we = 234, Te = 235, Ee = 236, De = 241, Oe = 242, ke = 243, Ae = 244, je = 245, Me = 246, Ne = 249, Pe = 250, Fe = 251, Ie = 261, Le = 281, Re = 282, ze = 283, Be = 284, Ve = 285, He = 301, Ue = 302, We = 605, Ge = 303, Ke = 311, qe = 312, Je = 326, Ye = 314, Xe = 315, Ze = 316, Qe = 313, $e = 317, et = 318, tt = 319, nt = 320, rt = 321, it = 322, at = 323, ot = 324, st = 325, ct = 331, lt = 332, ut = 333, dt = 334, ft = 335, pt = 336, mt = 337, ht = 339, gt = 340, _t = 351, vt = 342, yt = 352, bt = 353, xt = 354, St = 355, Ct = 655, wt = 356, Tt = 357, Et = 0, F = 1, Dt = 2, Ot = 3, kt = 4, At = 5, jt = "rmmz", Mt = "colors", I = (e) => e.map(((e) => ({
	dataKey: e,
	placeHolder: `{${e}}`
}))), Nt = (e) => ({
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
}, Pt = (e, t = []) => {
	return {
		itemMappers: [...R(e), ...t].map(Ft),
		fallbackFormat: {
			text: It(e),
			label: Lt(e)
		},
		properties: (n = e.placeHolder ?? {}, {
			numbers: n.numbers ? I(n.numbers) : [],
			strings: n.strings ? I(n.strings) : []
		}),
		arrayIndex: e.arrayIndex ? e.arrayIndex.map(Nt) : []
	};
	var n;
}, Ft = (e) => ({
	placeHolder: `{${e.placeHolder}}`,
	kindKey: e.kindKey,
	dataIdKey: e.dataIdKey
}), It = (e) => {
	if (e.fallbackFormat && e.fallbackFormat.text !== void 0) return e.fallbackFormat.text;
	let t = ((e) => new Set([
		...e.placeHolder?.numbers ?? [],
		...e.placeHolder?.strings ?? [],
		...e.arrayIndex?.map(((e) => e.dataIdKey)) ?? []
	]))(e);
	return t.size === 0 ? "value not found" : Array.from(t).map(((e) => `${e}:{${e}}`)).join(", ");
}, Lt = (e) => e.fallbackFormat?.label === void 0 ? "unknown key:{key}" : e.fallbackFormat.label, z = (e, t, n) => {
	let r = t[n.dataKey];
	return r == null ? e : e.replaceAll(n.placeHolder, String(r));
}, Rt = (e, t, n, r = {
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
	semanticErrors: Bt(e, t, n),
	syntaxErrors: zt(e.pattern, t, n, r.placeHolderMaxLength)
}, zt = (e, t, n, r) => {
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
}, Bt = (e, t, n) => R(t).reduce(((t, r) => {
	let i = Vt(e, r, n);
	return i && t.push(i), t;
}), []), Vt = (e, t, n) => {
	let r = e.pattern.includes(t.placeHolder), i = !!e.dataSource;
	return !r && i ? {
		message: n.missingName,
		reason: t.placeHolder
	} : r && !i ? {
		message: n.missingSourceId,
		reason: t.placeHolder
	} : void 0;
}, Ht = (e, t) => {
	let n = Gt(t);
	return e.reduce(((e, t) => {
		let r = Ut(t, n);
		return e.set(t.kindId, r), e;
	}), /* @__PURE__ */ new Map());
}, Ut = (e, t) => {
	let n = Wt(e.dataSource, t);
	return {
		patternCompiled: e.pattern,
		label: e.label,
		data: n ? n.items : void 0
	};
}, Wt = (e, t) => {
	if (e) return t.get(L(e));
}, Gt = (e) => e.reduce(((e, t) => {
	let n = {
		items: Kt(t.items),
		source: t.source,
		label: t.label
	};
	return e.set(L(t.source), n), e;
}), /* @__PURE__ */ new Map()), Kt = (e) => e.map(((e) => ({
	id: e.id,
	name: e.name
}))), qt = (e, t, n, r, i) => {
	let a = ((e, t, n) => {
		let r = n.properties.numbers.reduce(((e, n) => z(e, t, n)), e);
		return n.properties.strings.reduce(((e, n) => z(e, t, n)), r);
	})(r, e, n);
	return t ? Jt(a, e, n, t, i) : a;
}, Jt = (e, t, n, r, i) => {
	let a = ((e, t) => {
		let n = ((e, t) => {
			let n = t[e];
			return n && n.id === e ? n : t.find(((t) => t.id === e));
		})(t, e);
		return n ? n.name : `?data[${t}]`;
	})(r, i(t));
	return n.itemMappers.reduce(((e, t) => e.replaceAll(t.placeHolder, a)), e);
}, Yt = (e) => Object.entries(e).map((([, e]) => e.title)), B = (e, t, n) => t.map(((t) => n(t, e[t], e))), Xt = (e, t, n) => B(e, t, n), Zt = (e) => typeof e == "number" && !Number.isNaN(e), Qt = 0, $t = 1, en = 2, tn = 3, nn = 4, rn = 5, an = 6, on = 7, sn = 8, cn = 9, ln = 10, un = 11, dn = 12, fn = 13, pn = 14, mn = 15, hn = 16, gn = 17, _n = 18, vn = 19, yn = 20, bn = 21, xn = 22, Sn = 23, Cn = 24, wn = 25, Tn = 26, En = 27, Dn = 28, On = 29, kn = 30, An = 31, jn = 32, Mn = 33, Nn = 34, Pn = 35, Fn = 36, In = 37, Ln = 38, Rn = 39, zn = 40, Bn = 41, Vn = 42, Hn = 43, Un = 44, Wn = 45, Gn = (e) => ({ code: $[e] }), Kn = (e) => ({ code: $[e] }), V = (e) => ({ code: $[e] }), qn = (e) => e.map(((e) => ({ code: $[e] }))), H = (e) => ({
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
}, Jn = (e) => e.flatMap(((e) => Yn(e))), Yn = (e) => {
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
}, Xn = (e) => e.trimEnd(), Zn = (e = {}) => ({
	name: e.name ?? "",
	volume: e.volume ?? 100,
	pitch: e.pitch ?? 100,
	pan: e.pan ?? 0
});
export { yn as $, Pe as $n, Be as $t, $t as A, Oe as An, we as Ar, Qe as At, sn as B, fe as Bn, vt as Bt, On as C, ft as Cn, t as Cr, At as Ct, pn as D, Te as Dn, ne as Dr, gt as Dt, Qt as E, D as En, te as Er, Dt as Et, cn as F, bt as Fn, g as Ft, Dn as G, Ge as Gn, Ke as Gt, Wn as H, ce as Hn, Xe as Ht, tn as I, k as In, p as It, In as J, yt as Jn, Le as Jt, En as K, e as Kn, ye as Kt, ln as L, Ve as Ln, ct as Lt, en as M, A as Mn, v as Mr, ze as Mt, rn as N, N as Nn, be as Nr, l as Nt, un as O, ue as On, ae as Or, He as Ot, an as P, ht as Pn, rt as Pt, bn as Q, Ie as Qn, ot as Qt, nn as R, C as Rn, lt as Rt, Vn as S, he as Sn, i as Sr, kt as St, Pn as T, pt as Tn, xe as Tr, Et as Tt, Nn as U, le as Un, m as Ut, Un as V, pe as Vn, tt as Vt, Mn as W, Se as Wn, ve as Wt, Rn as X, je as Xn, qe as Xt, zn as Y, De as Yn, f as Yt, xn as Z, Ne as Zn, nt as Zt, W as _, oe as _n, We as _r, Rt as _t, J as a, et as an, Ce as ar, _n as at, kn as b, me as bn, mt as br, Mt as bt, q as c, w as cn, Ct as cr, mn as ct, Gn as d, u as dn, b as dr, Zt as dt, $e as en, wt as er, Sn as et, H as f, o as fn, S as fr, B as ft, G as g, de as gn, Ue as gr, Ht as gt, K as h, re as hn, P as hr, qt as ht, Z as i, d as in, xt as ir, Cn as it, dn as j, Me as jn, M as jr, s as jt, fn as k, j as kn, Fe as kr, it as kt, Kn as l, _ as ln, x as lr, jn as lt, V as m, ie as mn, Ee as mr, Yt as mt, Xn as n, O as nn, Ye as nr, hn as nt, Y as o, Re as on, ke as or, wn as ot, Q as p, h as pn, y as pr, Xt as pt, Ln as q, _t as qn, Ze as qt, Jn as r, st as rn, Ae as rr, gn as rt, X as s, Je as sn, St as sr, vn as st, Zn as t, c as tn, Tt as tr, Tn as tt, U as u, at as un, ee as ur, An as ut, qn as v, se as vn, T as vr, Pt as vt, Fn as w, dt as wn, n as wr, Ot as wt, Bn as x, _e as xn, r as xr, F as xt, Hn as y, ge as yn, E as yr, jt as yt, on as z, a as zn, ut as zt };
