var d, r = {};
function a() {
  if (d) return r;
  function u(n) {
    const o = n.length;
    let e, c = 0, t = 0;
    for (; t < o; ) c++, e = n.charCodeAt(t++), e >= 55296 && e <= 56319 && t < o && (e = n.charCodeAt(t), (64512 & e) == 56320 && t++);
    return c;
  }
  return d = 1, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = u, u.code = 'require("ajv/dist/runtime/ucs2length").default', r;
}
export {
  a as r
};
