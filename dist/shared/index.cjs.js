"use strict";
function e(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var r, t = { exports: {} };
const a = e(function() {
  if (r) return t.exports;
  r = 1, t.exports = a2, t.exports.default = a2;
  const e2 = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function a2(r2, { instancePath: t2 = "", parentData: s, parentDataProperty: i, rootData: o = r2 } = {}) {
    if (!r2 || "object" != typeof r2 || Array.isArray(r2)) return a2.errors = [{
      instancePath: t2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s2;
      if (void 0 === r2.code && (s2 = "code") || void 0 === r2.parameters && (s2 = "parameters") || void 0 === r2.indent && (s2 = "indent")) return a2.errors = [{
        instancePath: t2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: s2 },
        message: "must have required property '" + s2 + "'"
      }], false;
      for (const e3 in r2) if ("code" !== e3 && "indent" !== e3 && "parameters" !== e3) return a2.errors = [{
        instancePath: t2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e3 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== r2.code) {
        let s3 = r2.code;
        const i2 = 0;
        if ("number" != typeof s3 || s3 % 1 || isNaN(s3) || !isFinite(s3)) return a2.errors = [{
          instancePath: t2 + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], false;
        if (132 !== s3 && 133 !== s3 && 139 !== s3 && 241 !== s3 && 245 !== s3 && 249 !== s3 && 250 !== s3) return a2.errors = [{
          instancePath: t2 + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: e2.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], false;
        var p = 0 === i2;
      } else p = true;
      if (p) {
        if (void 0 !== r2.indent) {
          let e3 = r2.indent;
          const s3 = 0;
          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return a2.errors = [{
            instancePath: t2 + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          p = 0 === s3;
        } else p = true;
        if (p) if (void 0 !== r2.parameters) {
          let e3 = r2.parameters;
          const s3 = 0;
          if (!Array.isArray(e3)) return a2.errors = [{
            instancePath: t2 + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], false;
          if (e3.length > 1) return a2.errors = [{
            instancePath: t2 + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], false;
          if (e3.length < 1) return a2.errors = [{
            instancePath: t2 + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], false;
          if (e3.length > 0) {
            let r3 = e3[0];
            if (!r3 || "object" != typeof r3 || Array.isArray(r3)) return a2.errors = [{
              instancePath: t2 + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], false;
            {
              let e4;
              if (void 0 === r3.name && (e4 = "name") || void 0 === r3.volume && (e4 = "volume") || void 0 === r3.pitch && (e4 = "pitch") || void 0 === r3.pan && (e4 = "pan")) return a2.errors = [{
                instancePath: t2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: e4 },
                message: "must have required property '" + e4 + "'"
              }], false;
              for (const e5 in r3) if ("name" !== e5 && "volume" !== e5 && "pitch" !== e5 && "pan" !== e5) return a2.errors = [{
                instancePath: t2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: e5 },
                message: "must NOT have additional properties"
              }], false;
              if (void 0 !== r3.name) {
                const e5 = 0;
                if ("string" != typeof r3.name) return a2.errors = [{
                  instancePath: t2 + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                var n = 0 === e5;
              } else n = true;
              if (n) {
                if (void 0 !== r3.volume) {
                  let e5 = r3.volume;
                  const s4 = 0;
                  if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return a2.errors = [{
                    instancePath: t2 + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  n = 0 === s4;
                } else n = true;
                if (n) {
                  if (void 0 !== r3.pitch) {
                    let e5 = r3.pitch;
                    const s4 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return a2.errors = [{
                      instancePath: t2 + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    n = 0 === s4;
                  } else n = true;
                  if (n) if (void 0 !== r3.pan) {
                    let e5 = r3.pan;
                    const s4 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return a2.errors = [{
                      instancePath: t2 + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    n = 0 === s4;
                  } else n = true;
                }
              }
            }
          }
          p = 0 === s3;
        } else p = true;
      }
    }
    return a2.errors = null, true;
  }
  return t.exports;
}());
exports.getDefaultExportFromCjs = e, exports.isAudioCommand = (e2) => a(e2);
//# sourceMappingURL=index.cjs.js.map
