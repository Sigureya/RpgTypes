var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (o, s, c) => (c = o == null ? {} : e(i(o)), ((e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c, l = r(i), u = 0, d = l.length; u < d; u++) c = l[u], a.call(e, c) || c === o || t(e, c, {
		get: ((e) => i[e]).bind(null, c),
		enumerable: !(s = n(i, c)) || s.enumerable
	});
	return e;
})(!s && o && o.__esModule ? c : t(c, "default", {
	value: o,
	enumerable: !0
}), o));
export { s as n, o as t };
