import { g as f } from "../../../shared/_commonjsHelpers.es.js";
var u, h = { exports: {} };
const l = f(function() {
  if (u) return h.exports;
  u = 1, h.exports = t, h.exports.default = t;
  const y = { properties: {
    code: { enum: [132, 133, 139, 241, 245, 249, 250] }
  } };
  function t(i, { instancePath: a = "", parentData: P, parentDataProperty: g, rootData: v = i } = {}) {
    if (!i || typeof i != "object" || Array.isArray(i)) return t.errors = [{ instancePath: a, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let n;
      if (i.code === void 0 && (n = "code") || i.parameters === void 0 && (n = "parameters") || i.indent === void 0 && (n = "indent")) return t.errors = [{
        instancePath: a,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: n },
        message: "must have required property '" + n + "'"
      }], !1;
      for (const e in i) if (e !== "code" && e !== "indent" && e !== "parameters") return t.errors = [{
        instancePath: a,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (i.code !== void 0) {
        let e = i.code;
        const d = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return t.errors = [{
          instancePath: a + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 132 && e !== 133 && e !== 139 && e !== 241 && e !== 245 && e !== 249 && e !== 250) return t.errors = [{
          instancePath: a + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: y.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var o = d === 0;
      } else o = !0;
      if (o) {
        if (i.indent !== void 0) {
          let e = i.indent;
          const d = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return t.errors = [{
            instancePath: a + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          o = d === 0;
        } else o = !0;
        if (o) if (i.parameters !== void 0) {
          let e = i.parameters;
          const d = 0;
          if (!Array.isArray(e)) return t.errors = [{
            instancePath: a + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 1) return t.errors = [{
            instancePath: a + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], !1;
          if (e.length < 1) return t.errors = [{
            instancePath: a + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], !1;
          if (e.length > 0) {
            let s = e[0];
            if (!s || typeof s != "object" || Array.isArray(s)) return t.errors = [{
              instancePath: a + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], !1;
            {
              let m;
              if (s.name === void 0 && (m = "name") || s.volume === void 0 && (m = "volume") || s.pitch === void 0 && (m = "pitch") || s.pan === void 0 && (m = "pan")) return t.errors = [{
                instancePath: a + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: m },
                message: "must have required property '" + m + "'"
              }], !1;
              for (const r in s) if (r !== "name" && r !== "volume" && r !== "pitch" && r !== "pan") return t.errors = [{
                instancePath: a + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: r },
                message: "must NOT have additional properties"
              }], !1;
              if (s.name !== void 0) {
                if (typeof s.name != "string") return t.errors = [{
                  instancePath: a + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                var p = !0;
              } else p = !0;
              if (p) {
                if (s.volume !== void 0) {
                  let r = s.volume;
                  const c = 0;
                  if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                    instancePath: a + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  p = c === 0;
                } else p = !0;
                if (p) {
                  if (s.pitch !== void 0) {
                    let r = s.pitch;
                    const c = 0;
                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                      instancePath: a + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    p = c === 0;
                  } else p = !0;
                  if (p) if (s.pan !== void 0) {
                    let r = s.pan;
                    const c = 0;
                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                      instancePath: a + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    p = c === 0;
                  } else p = !0;
                }
              }
            }
          }
          o = d === 0;
        } else o = !0;
      }
    }
    return t.errors = null, !0;
  }
  return h.exports;
}()), w = (y) => l(y);
export {
  w as isAudioCommand
};
