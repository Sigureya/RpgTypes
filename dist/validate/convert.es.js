import { g as l } from "../shared/_commonjsHelpers.es.js";
var g, d = { exports: {} };
const P = l((function() {
  if (g) return d.exports;
  function r(a, { instancePath: s = "", parentData: x, parentDataProperty: v, rootData: k = a } = {}) {
    if (!a || typeof a != "object" || Array.isArray(a)) return r.errors = [{
      instancePath: s,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let p;
      if (a.targetNoteKeys === void 0 && (p = "targetNoteKeys") || a.textDictionary === void 0 && (p = "textDictionary") || a.actorTexts === void 0 && (p = "actorTexts")) return r.errors = [{
        instancePath: s,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: p },
        message: "must have required property '" + p + "'"
      }], !1;
      if (a.targetNoteKeys !== void 0) {
        let i = a.targetNoteKeys;
        const c = 0;
        if (!Array.isArray(i)) return r.errors = [{
          instancePath: s + "/targetNoteKeys",
          schemaPath: "#/properties/targetNoteKeys/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array"
        }], !1;
        {
          const m = i.length;
          for (let e = 0; e < m; e++)
            if (typeof i[e] != "string") return r.errors = [{
              instancePath: s + "/targetNoteKeys/" + e,
              schemaPath: "#/properties/targetNoteKeys/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
        }
        var n = c === 0;
      } else n = !0;
      if (n) {
        if (a.textDictionary !== void 0) {
          let i = a.textDictionary;
          const c = 0;
          if (!Array.isArray(i)) return r.errors = [{
            instancePath: s + "/textDictionary",
            schemaPath: "#/properties/textDictionary/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          {
            const m = i.length;
            for (let e = 0; e < m; e++) {
              let t = i[e];
              const f = 0;
              if (!t || typeof t != "object" || Array.isArray(t)) return r.errors = [{ instancePath: s + "/textDictionary/" + e, schemaPath: "#/properties/textDictionary/items/type", keyword: "type", params: {
                type: "object"
              }, message: "must be object" }], !1;
              {
                let y;
                if (t.key === void 0 && (y = "key") || t.value === void 0 && (y = "value")) return r.errors = [{
                  instancePath: s + "/textDictionary/" + e,
                  schemaPath: "#/properties/textDictionary/items/required",
                  keyword: "required",
                  params: { missingProperty: y },
                  message: "must have required property '" + y + "'"
                }], !1;
                for (const o in t) if (o !== "key" && o !== "value") return r.errors = [{
                  instancePath: s + "/textDictionary/" + e,
                  schemaPath: "#/properties/textDictionary/items/additionalProperties",
                  keyword: "additionalProperties",
                  params: { additionalProperty: o },
                  message: "must NOT have additional properties"
                }], !1;
                if (t.key !== void 0) {
                  if (typeof t.key != "string") return r.errors = [{ instancePath: s + "/textDictionary/" + e + "/key", schemaPath: "#/properties/textDictionary/items/properties/key/type", keyword: "type", params: {
                    type: "string"
                  }, message: "must be string" }], !1;
                  var u = !0;
                } else u = !0;
                if (u) if (t.value !== void 0) {
                  if (typeof t.value != "string") return r.errors = [{
                    instancePath: s + "/textDictionary/" + e + "/value",
                    schemaPath: "#/properties/textDictionary/items/properties/value/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  u = !0;
                } else u = !0;
              }
              if (f !== 0) break;
            }
          }
          n = c === 0;
        } else n = !0;
        if (n) if (a.actorTexts !== void 0) {
          let i = a.actorTexts;
          const c = 0;
          if (!Array.isArray(i)) return r.errors = [{
            instancePath: s + "/actorTexts",
            schemaPath: "#/properties/actorTexts/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          {
            const m = i.length;
            for (let e = 0; e < m; e++) {
              let t = i[e];
              const f = 0;
              if (!t || typeof t != "object" || Array.isArray(t)) return r.errors = [{
                instancePath: s + "/actorTexts/" + e,
                schemaPath: "#/properties/actorTexts/items/type",
                keyword: "type",
                params: { type: "object" },
                message: "must be object"
              }], !1;
              {
                let y;
                if (t.key === void 0 && (y = "key") || t.value === void 0 && (y = "value")) return r.errors = [{
                  instancePath: s + "/actorTexts/" + e,
                  schemaPath: "#/properties/actorTexts/items/required",
                  keyword: "required",
                  params: { missingProperty: y },
                  message: "must have required property '" + y + "'"
                }], !1;
                for (const o in t) if (o !== "key" && o !== "value") return r.errors = [{
                  instancePath: s + "/actorTexts/" + e,
                  schemaPath: "#/properties/actorTexts/items/additionalProperties",
                  keyword: "additionalProperties",
                  params: { additionalProperty: o },
                  message: "must NOT have additional properties"
                }], !1;
                if (t.key !== void 0) {
                  if (typeof t.key != "string") return r.errors = [{ instancePath: s + "/actorTexts/" + e + "/key", schemaPath: "#/properties/actorTexts/items/properties/key/type", keyword: "type", params: {
                    type: "string"
                  }, message: "must be string" }], !1;
                  var h = !0;
                } else h = !0;
                if (h) if (t.value !== void 0) {
                  if (typeof t.value != "string") return r.errors = [{
                    instancePath: s + "/actorTexts/" + e + "/value",
                    schemaPath: "#/properties/actorTexts/items/properties/value/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  h = !0;
                } else h = !0;
              }
              if (f !== 0) break;
            }
          }
          n = c === 0;
        } else n = !0;
      }
    }
    return r.errors = null, !0;
  }
  return g = 1, d.exports = r, d.exports.default = r, d.exports;
})()), D = (r) => P(r);
export {
  D as isRuntimeDictionary
};
