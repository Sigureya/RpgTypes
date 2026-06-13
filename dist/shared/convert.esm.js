import { n as e, t } from "./chunk.esm.js";
var n = e(t(((e, t) => {
	function n(e, { instancePath: t = "", parentData: r, parentDataProperty: i, rootData: a = e } = {}) {
		if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
			instancePath: t,
			schemaPath: "#/type",
			keyword: "type",
			params: { type: "object" },
			message: "must be object"
		}], !1;
		{
			let r;
			if (e.targetNoteKeys === void 0 && (r = "targetNoteKeys") || e.textDictionary === void 0 && (r = "textDictionary") || e.actorTexts === void 0 && (r = "actorTexts")) return n.errors = [{
				instancePath: t,
				schemaPath: "#/required",
				keyword: "required",
				params: { missingProperty: r },
				message: "must have required property '" + r + "'"
			}], !1;
			if (e.targetNoteKeys !== void 0) {
				let r = e.targetNoteKeys;
				if (!Array.isArray(r)) return n.errors = [{
					instancePath: t + "/targetNoteKeys",
					schemaPath: "#/properties/targetNoteKeys/type",
					keyword: "type",
					params: { type: "array" },
					message: "must be array"
				}], !1;
				{
					let e = r.length;
					for (let i = 0; i < e; i++) if (typeof r[i] != "string") return n.errors = [{
						instancePath: t + "/targetNoteKeys/" + i,
						schemaPath: "#/properties/targetNoteKeys/items/type",
						keyword: "type",
						params: { type: "string" },
						message: "must be string"
					}], !1;
				}
				var o = !0;
			} else o = !0;
			if (o) {
				if (e.textDictionary !== void 0) {
					let r = e.textDictionary;
					if (!Array.isArray(r)) return n.errors = [{
						instancePath: t + "/textDictionary",
						schemaPath: "#/properties/textDictionary/type",
						keyword: "type",
						params: { type: "array" },
						message: "must be array"
					}], !1;
					{
						let e = r.length;
						for (let i = 0; i < e; i++) {
							let e = r[i];
							if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
								instancePath: t + "/textDictionary/" + i,
								schemaPath: "#/properties/textDictionary/items/type",
								keyword: "type",
								params: { type: "object" },
								message: "must be object"
							}], !1;
							{
								let r;
								if (e.key === void 0 && (r = "key") || e.value === void 0 && (r = "value")) return n.errors = [{
									instancePath: t + "/textDictionary/" + i,
									schemaPath: "#/properties/textDictionary/items/required",
									keyword: "required",
									params: { missingProperty: r },
									message: "must have required property '" + r + "'"
								}], !1;
								for (let r in e) if (r !== "key" && r !== "value") return n.errors = [{
									instancePath: t + "/textDictionary/" + i,
									schemaPath: "#/properties/textDictionary/items/additionalProperties",
									keyword: "additionalProperties",
									params: { additionalProperty: r },
									message: "must NOT have additional properties"
								}], !1;
								if (e.key !== void 0) {
									if (typeof e.key != "string") return n.errors = [{
										instancePath: t + "/textDictionary/" + i + "/key",
										schemaPath: "#/properties/textDictionary/items/properties/key/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
									var s = !0;
								} else s = !0;
								if (s) if (e.value !== void 0) {
									if (typeof e.value != "string") return n.errors = [{
										instancePath: t + "/textDictionary/" + i + "/value",
										schemaPath: "#/properties/textDictionary/items/properties/value/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
									s = !0;
								} else s = !0;
							}
						}
					}
					o = !0;
				} else o = !0;
				if (o) if (e.actorTexts !== void 0) {
					let r = e.actorTexts;
					if (!Array.isArray(r)) return n.errors = [{
						instancePath: t + "/actorTexts",
						schemaPath: "#/properties/actorTexts/type",
						keyword: "type",
						params: { type: "array" },
						message: "must be array"
					}], !1;
					{
						let e = r.length;
						for (let i = 0; i < e; i++) {
							let e = r[i];
							if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
								instancePath: t + "/actorTexts/" + i,
								schemaPath: "#/properties/actorTexts/items/type",
								keyword: "type",
								params: { type: "object" },
								message: "must be object"
							}], !1;
							{
								let r;
								if (e.key === void 0 && (r = "key") || e.value === void 0 && (r = "value")) return n.errors = [{
									instancePath: t + "/actorTexts/" + i,
									schemaPath: "#/properties/actorTexts/items/required",
									keyword: "required",
									params: { missingProperty: r },
									message: "must have required property '" + r + "'"
								}], !1;
								for (let r in e) if (r !== "key" && r !== "value") return n.errors = [{
									instancePath: t + "/actorTexts/" + i,
									schemaPath: "#/properties/actorTexts/items/additionalProperties",
									keyword: "additionalProperties",
									params: { additionalProperty: r },
									message: "must NOT have additional properties"
								}], !1;
								if (e.key !== void 0) {
									if (typeof e.key != "string") return n.errors = [{
										instancePath: t + "/actorTexts/" + i + "/key",
										schemaPath: "#/properties/actorTexts/items/properties/key/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
									var c = !0;
								} else c = !0;
								if (c) if (e.value !== void 0) {
									if (typeof e.value != "string") return n.errors = [{
										instancePath: t + "/actorTexts/" + i + "/value",
										schemaPath: "#/properties/actorTexts/items/properties/value/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
									c = !0;
								} else c = !0;
							}
						}
					}
					o = !0;
				} else o = !0;
			}
		}
		return n.errors = null, !0;
	}
	t.exports = n, t.exports.default = n;
}))()), r = (e) => (0, n.default)(e);
export { r as t };
