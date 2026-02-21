const s = (r, o) => o(r) ? { errors: [], data: r, ok: !0 } : { ok: !1, errors: o.errors || [] };
export {
  s as v
};
