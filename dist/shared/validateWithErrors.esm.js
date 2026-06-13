var e = (e, t) => t(e) ? {
	errors: [],
	data: e,
	ok: !0
} : {
	ok: !1,
	errors: t.errors || []
};
export { e as t };
