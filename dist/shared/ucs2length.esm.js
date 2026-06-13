import { t as e } from "./chunk.esm.js";
var t = e(((e) => {
	function t(e) {
		let t = e.length, n, r = 0, i = 0;
		for (; i < t;) r++, n = e.charCodeAt(i++), n >= 55296 && n <= 56319 && i < t && (n = e.charCodeAt(i), (64512 & n) == 56320 && i++);
		return r;
	}
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t, t.code = "require(\"ajv/dist/runtime/ucs2length\").default";
}));
export { t };
