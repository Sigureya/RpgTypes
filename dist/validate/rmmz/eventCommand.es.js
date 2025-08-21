import { g as P } from "../../shared/_commonjsHelpers.es.js";
var f, y = { exports: {} };
const w = P(function() {
  if (f) return y.exports;
  f = 1, y.exports = r, y.exports.default = r;
  const c = { properties: {
    code: { enum: [320, 324, 325] }
  } };
  function r(t, { instancePath: s = "", parentData: g, parentDataProperty: v, rootData: b = t } = {}) {
    if (!t || typeof t != "object" || Array.isArray(t)) return r.errors = [{
      instancePath: s,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let p;
      if (t.code === void 0 && (p = "code") || t.parameters === void 0 && (p = "parameters") || t.indent === void 0 && (p = "indent")) return r.errors = [{
        instancePath: s,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: p },
        message: "must have required property '" + p + "'"
      }], !1;
      for (const e in t) if (e !== "code" && e !== "indent" && e !== "parameters") return r.errors = [{
        instancePath: s,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (t.code !== void 0) {
        let e = t.code;
        const m = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return r.errors = [{
          instancePath: s + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 320 && e !== 324 && e !== 325) return r.errors = [{
          instancePath: s + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: c.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var n = m === 0;
      } else n = !0;
      if (n) {
        if (t.indent !== void 0) {
          let e = t.indent;
          const m = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return r.errors = [{ instancePath: s + "/indent", schemaPath: "#/properties/indent/type", keyword: "type", params: {
            type: "integer"
          }, message: "must be integer" }], !1;
          n = m === 0;
        } else n = !0;
        if (n) if (t.parameters !== void 0) {
          let e = t.parameters;
          const m = 0;
          if (!Array.isArray(e)) return r.errors = [{
            instancePath: s + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 2) return r.errors = [{
            instancePath: s + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 2 },
            message: "must NOT have more than 2 items"
          }], !1;
          if (e.length < 2) return r.errors = [{
            instancePath: s + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 2 },
            message: "must NOT have fewer than 2 items"
          }], !1;
          {
            const i = e.length;
            if (i > 0) {
              let d = e[0];
              const a = 0;
              if (typeof d != "number" || !isFinite(d)) return r.errors = [{
                instancePath: s + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number"
              }], !1;
              var o = a === 0;
            }
            if (o && i > 1) {
              if (typeof e[1] != "string") return r.errors = [{
                instancePath: s + "/parameters/1",
                schemaPath: "#/properties/parameters/items/1/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], !1;
              o = !0;
            }
          }
          n = m === 0;
        } else n = !0;
      }
    }
    return r.errors = null, !0;
  }
  return y.exports;
}()), x = (c) => w(c);
var l, u = { exports: {} };
const k = P(function() {
  if (l) return u.exports;
  l = 1, u.exports = r, u.exports.default = r;
  const c = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function r(t, { instancePath: s = "", parentData: g, parentDataProperty: v, rootData: b = t } = {}) {
    if (!t || typeof t != "object" || Array.isArray(t)) return r.errors = [{
      instancePath: s,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let p;
      if (t.code === void 0 && (p = "code") || t.parameters === void 0 && (p = "parameters") || t.indent === void 0 && (p = "indent")) return r.errors = [{
        instancePath: s,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: p },
        message: "must have required property '" + p + "'"
      }], !1;
      for (const e in t) if (e !== "code" && e !== "indent" && e !== "parameters") return r.errors = [{
        instancePath: s,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (t.code !== void 0) {
        let e = t.code;
        const m = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return r.errors = [{
          instancePath: s + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 132 && e !== 133 && e !== 139 && e !== 241 && e !== 245 && e !== 249 && e !== 250) return r.errors = [{
          instancePath: s + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: c.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var n = m === 0;
      } else n = !0;
      if (n) {
        if (t.indent !== void 0) {
          let e = t.indent;
          const m = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return r.errors = [{
            instancePath: s + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          n = m === 0;
        } else n = !0;
        if (n) if (t.parameters !== void 0) {
          let e = t.parameters;
          const m = 0;
          if (!Array.isArray(e)) return r.errors = [{
            instancePath: s + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 1) return r.errors = [{
            instancePath: s + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], !1;
          if (e.length < 1) return r.errors = [{
            instancePath: s + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], !1;
          if (e.length > 0) {
            let i = e[0];
            if (!i || typeof i != "object" || Array.isArray(i)) return r.errors = [{
              instancePath: s + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], !1;
            {
              let d;
              if (i.name === void 0 && (d = "name") || i.volume === void 0 && (d = "volume") || i.pitch === void 0 && (d = "pitch") || i.pan === void 0 && (d = "pan")) return r.errors = [{
                instancePath: s + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: d },
                message: "must have required property '" + d + "'"
              }], !1;
              for (const a in i) if (a !== "name" && a !== "volume" && a !== "pitch" && a !== "pan") return r.errors = [{
                instancePath: s + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: a },
                message: "must NOT have additional properties"
              }], !1;
              if (i.name !== void 0) {
                if (typeof i.name != "string") return r.errors = [{
                  instancePath: s + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                var o = !0;
              } else o = !0;
              if (o) {
                if (i.volume !== void 0) {
                  let a = i.volume;
                  const h = 0;
                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return r.errors = [{
                    instancePath: s + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  o = h === 0;
                } else o = !0;
                if (o) {
                  if (i.pitch !== void 0) {
                    let a = i.pitch;
                    const h = 0;
                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return r.errors = [{
                      instancePath: s + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    o = h === 0;
                  } else o = !0;
                  if (o) if (i.pan !== void 0) {
                    let a = i.pan;
                    const h = 0;
                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return r.errors = [{
                      instancePath: s + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    o = h === 0;
                  } else o = !0;
                }
              }
            }
          }
          n = m === 0;
        } else n = !0;
      }
    }
    return r.errors = null, !0;
  }
  return u.exports;
}()), A = (c) => k(c);
export {
  x as isActorTextCommand,
  A as isAudioCommand
};
