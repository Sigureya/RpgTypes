function e(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var t, r = { exports: {} };
const s = e(function() {
  if (t) return r.exports;
  t = 1, r.exports = s2, r.exports.default = s2;
  const e2 = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function s2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: i2, rootData: n2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return s2.errors = [{ instancePath: r2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
    {
      let a3;
      if (void 0 === t2.code && (a3 = "code") || void 0 === t2.parameters && (a3 = "parameters") || void 0 === t2.indent && (a3 = "indent")) return s2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      for (const e3 in t2) if ("code" !== e3 && "indent" !== e3 && "parameters" !== e3) return s2.errors = [{
        instancePath: r2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e3 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== t2.code) {
        let a4 = t2.code;
        const i3 = 0;
        if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return s2.errors = [{
          instancePath: r2 + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], false;
        if (132 !== a4 && 133 !== a4 && 139 !== a4 && 241 !== a4 && 245 !== a4 && 249 !== a4 && 250 !== a4) return s2.errors = [{
          instancePath: r2 + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: e2.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], false;
        var p2 = 0 === i3;
      } else p2 = true;
      if (p2) {
        if (void 0 !== t2.indent) {
          let e3 = t2.indent;
          const a4 = 0;
          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return s2.errors = [{
            instancePath: r2 + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          p2 = 0 === a4;
        } else p2 = true;
        if (p2) if (void 0 !== t2.parameters) {
          let e3 = t2.parameters;
          const a4 = 0;
          if (!Array.isArray(e3)) return s2.errors = [{
            instancePath: r2 + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], false;
          if (e3.length > 1) return s2.errors = [{
            instancePath: r2 + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], false;
          if (e3.length < 1) return s2.errors = [{
            instancePath: r2 + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], false;
          if (e3.length > 0) {
            let t3 = e3[0];
            if (!t3 || "object" != typeof t3 || Array.isArray(t3)) return s2.errors = [{
              instancePath: r2 + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], false;
            {
              let e4;
              if (void 0 === t3.name && (e4 = "name") || void 0 === t3.volume && (e4 = "volume") || void 0 === t3.pitch && (e4 = "pitch") || void 0 === t3.pan && (e4 = "pan")) return s2.errors = [{
                instancePath: r2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: e4 },
                message: "must have required property '" + e4 + "'"
              }], false;
              for (const e5 in t3) if ("name" !== e5 && "volume" !== e5 && "pitch" !== e5 && "pan" !== e5) return s2.errors = [{
                instancePath: r2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: e5 },
                message: "must NOT have additional properties"
              }], false;
              if (void 0 !== t3.name) {
                const e5 = 0;
                if ("string" != typeof t3.name) return s2.errors = [{
                  instancePath: r2 + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                var o2 = 0 === e5;
              } else o2 = true;
              if (o2) {
                if (void 0 !== t3.volume) {
                  let e5 = t3.volume;
                  const a5 = 0;
                  if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return s2.errors = [{
                    instancePath: r2 + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  o2 = 0 === a5;
                } else o2 = true;
                if (o2) {
                  if (void 0 !== t3.pitch) {
                    let e5 = t3.pitch;
                    const a5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return s2.errors = [{
                      instancePath: r2 + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    o2 = 0 === a5;
                  } else o2 = true;
                  if (o2) if (void 0 !== t3.pan) {
                    let e5 = t3.pan;
                    const a5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return s2.errors = [{
                      instancePath: r2 + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    o2 = 0 === a5;
                  } else o2 = true;
                }
              }
            }
          }
          p2 = 0 === a4;
        } else p2 = true;
      }
    }
    return s2.errors = null, true;
  }
  return r.exports;
}()), a = (e2) => s(e2);
var i, n = {
  exports: {}
};
const p = e(function() {
  if (i) return n.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: a2, rootData: i2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{ instancePath: r2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.nickname && (s3 = "nickname") || void 0 === t2.battlerName && (s3 = "battlerName") || void 0 === t2.characterName && (s3 = "characterName") || void 0 === t2.characterIndex && (s3 = "characterIndex") || void 0 === t2.faceName && (s3 = "faceName") || void 0 === t2.faceIndex && (s3 = "faceIndex") || void 0 === t2.classId && (s3 = "classId") || void 0 === t2.initialLevel && (s3 = "initialLevel") || void 0 === t2.maxLevel && (s3 = "maxLevel")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: s3 },
        message: "must have required property '" + s3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const s4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === s4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.battlerName) {
          const s4 = 0;
          if ("string" != typeof t2.battlerName) return e2.errors = [{
            instancePath: r2 + "/battlerName",
            schemaPath: "#/properties/battlerName/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], false;
          n2 = 0 === s4;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.characterName) {
            const s4 = 0;
            if ("string" != typeof t2.characterName) return e2.errors = [{
              instancePath: r2 + "/characterName",
              schemaPath: "#/properties/characterName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n2 = 0 === s4;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.characterIndex) {
              let s4 = t2.characterIndex;
              const a3 = 0;
              if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{ instancePath: r2 + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], false;
              n2 = 0 === a3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.faceName) {
                const s4 = 0;
                if ("string" != typeof t2.faceName) return e2.errors = [{
                  instancePath: r2 + "/faceName",
                  schemaPath: "#/properties/faceName/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                n2 = 0 === s4;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.faceIndex) {
                  let s4 = t2.faceIndex;
                  const a3 = 0;
                  if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                    instancePath: r2 + "/faceIndex",
                    schemaPath: "#/properties/faceIndex/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof s4 && isFinite(s4)) {
                    if (s4 > 7 || isNaN(s4)) return e2.errors = [{
                      instancePath: r2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 7 },
                      message: "must be <= 7"
                    }], false;
                    if (s4 < 0 || isNaN(s4)) return e2.errors = [{
                      instancePath: r2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                  }
                  n2 = 0 === a3;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.id) {
                    let s4 = t2.id;
                    const a3 = 0;
                    if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                      instancePath: r2 + "/id",
                      schemaPath: "#/properties/id/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                      instancePath: r2 + "/id",
                      schemaPath: "#/properties/id/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    n2 = 0 === a3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.nickname) {
                      const s4 = 0;
                      if ("string" != typeof t2.nickname) return e2.errors = [{
                        instancePath: r2 + "/nickname",
                        schemaPath: "#/properties/nickname/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], false;
                      n2 = 0 === s4;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.profile) {
                        const s4 = 0;
                        if ("string" != typeof t2.profile) return e2.errors = [{ instancePath: r2 + "/profile", schemaPath: "#/properties/profile/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
                        n2 = 0 === s4;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.initialLevel) {
                          let s4 = t2.initialLevel;
                          const a3 = 0;
                          if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                            instancePath: r2 + "/initialLevel",
                            schemaPath: "#/properties/initialLevel/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{ instancePath: r2 + "/initialLevel", schemaPath: "#/properties/initialLevel/minimum", keyword: "minimum", params: {
                            comparison: ">=",
                            limit: 0
                          }, message: "must be >= 0" }], false;
                          n2 = 0 === a3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.maxLevel) {
                            let s4 = t2.maxLevel;
                            const a3 = 0;
                            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                              instancePath: r2 + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === a3;
                          } else n2 = true;
                          if (n2) {
                            if (void 0 !== t2.classId) {
                              let s4 = t2.classId;
                              const a3 = 0;
                              if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                instancePath: r2 + "/classId",
                                schemaPath: "#/properties/classId/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{ instancePath: r2 + "/classId", schemaPath: "#/properties/classId/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: 0
                              }, message: "must be >= 0" }], false;
                              n2 = 0 === a3;
                            } else n2 = true;
                            if (n2) {
                              if (void 0 !== t2.equips) {
                                let s4 = t2.equips;
                                const a3 = 0;
                                if (!Array.isArray(s4)) return e2.errors = [{
                                  instancePath: r2 + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], false;
                                {
                                  const t3 = s4.length;
                                  for (let a4 = 0; a4 < t3; a4++) {
                                    let t4 = s4[a4];
                                    const i3 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/equips/" + a4, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    if (!(0 === i3)) break;
                                  }
                                }
                                n2 = 0 === a3;
                              } else n2 = true;
                              if (n2) {
                                if (void 0 !== t2.note) {
                                  const s4 = 0;
                                  if ("string" != typeof t2.note) return e2.errors = [{
                                    instancePath: r2 + "/note",
                                    schemaPath: "#/properties/note/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], false;
                                  n2 = 0 === s4;
                                } else n2 = true;
                                if (n2) if (void 0 !== t2.traits) {
                                  let s4 = t2.traits;
                                  const a3 = 0;
                                  if (!Array.isArray(s4)) return e2.errors = [{
                                    instancePath: r2 + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], false;
                                  {
                                    const t3 = s4.length;
                                    for (let a4 = 0; a4 < t3; a4++) {
                                      let t4 = s4[a4];
                                      const i3 = 0;
                                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                        instancePath: r2 + "/traits/" + a4,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], false;
                                      {
                                        let s5;
                                        if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                          instancePath: r2 + "/traits/" + a4,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: s5 },
                                          message: "must have required property '" + s5 + "'"
                                        }], false;
                                        if (void 0 !== t4.code) {
                                          let s6 = t4.code;
                                          const i4 = 0;
                                          if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                            instancePath: r2 + "/traits/" + a4 + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          var p2 = 0 === i4;
                                        } else p2 = true;
                                        if (p2) {
                                          if (void 0 !== t4.dataId) {
                                            let s6 = t4.dataId;
                                            const i4 = 0;
                                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + a4 + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            p2 = 0 === i4;
                                          } else p2 = true;
                                          if (p2) if (void 0 !== t4.value) {
                                            let s6 = t4.value;
                                            const i4 = 0;
                                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + a4 + "/value",
                                              schemaPath: "#/properties/traits/items/properties/value/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            p2 = 0 === i4;
                                          } else p2 = true;
                                        }
                                      }
                                      if (!(0 === i3)) break;
                                    }
                                  }
                                  n2 = 0 === a3;
                                } else n2 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return i = 1, n.exports = e2, n.exports.default = e2, n.exports;
}()), o = (e2) => p(e2);
var m, y = { exports: {} };
const c = e(function() {
  if (m) return y.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: a2, rootData: i2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.description && (s3 = "description") || void 0 === t2.iconIndex && (s3 = "iconIndex") || void 0 === t2.price && (s3 = "price") || void 0 === t2.params && (s3 = "params") || void 0 === t2.traits && (s3 = "traits") || void 0 === t2.note && (s3 = "note") || void 0 === t2.etypeId && (s3 = "etypeId") || void 0 === t2.atypeId && (s3 = "atypeId")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: s3 },
        message: "must have required property '" + s3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const s4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === s4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.id) {
          let s4 = t2.id;
          const a3 = 0;
          if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n2 = 0 === a3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.description) {
            const s4 = 0;
            if ("string" != typeof t2.description) return e2.errors = [{
              instancePath: r2 + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n2 = 0 === s4;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.iconIndex) {
              let s4 = t2.iconIndex;
              const a3 = 0;
              if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                instancePath: r2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], false;
              if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                instancePath: r2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], false;
              n2 = 0 === a3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.price) {
                let s4 = t2.price;
                const a3 = 0;
                if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                  instancePath: r2 + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                  instancePath: r2 + "/price",
                  schemaPath: "#/properties/price/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], false;
                n2 = 0 === a3;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.note) {
                  const s4 = 0;
                  if ("string" != typeof t2.note) return e2.errors = [{
                    instancePath: r2 + "/note",
                    schemaPath: "#/properties/note/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], false;
                  n2 = 0 === s4;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.etypeId) {
                    let s4 = t2.etypeId;
                    const a3 = 0;
                    if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                      instancePath: r2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                      instancePath: r2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    n2 = 0 === a3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.atypeId) {
                      let s4 = t2.atypeId;
                      const a3 = 0;
                      if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                        instancePath: r2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                        instancePath: r2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], false;
                      n2 = 0 === a3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.params) {
                        let s4 = t2.params;
                        const a3 = 0;
                        if (!Array.isArray(s4)) return e2.errors = [{
                          instancePath: r2 + "/params",
                          schemaPath: "#/properties/params/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        if (s4.length > 8) return e2.errors = [{
                          instancePath: r2 + "/params",
                          schemaPath: "#/properties/params/maxItems",
                          keyword: "maxItems",
                          params: { limit: 8 },
                          message: "must NOT have more than 8 items"
                        }], false;
                        if (s4.length < 8) return e2.errors = [{ instancePath: r2 + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                          limit: 8
                        }, message: "must NOT have fewer than 8 items" }], false;
                        {
                          const t3 = s4.length;
                          if (t3 > 0) {
                            let t4 = s4[0];
                            const a4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/0",
                              schemaPath: "#/properties/params/items/0/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            var p2 = 0 === a4;
                          }
                          if (p2) {
                            if (t3 > 1) {
                              let t4 = s4[1];
                              const a4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              p2 = 0 === a4;
                            }
                            if (p2) {
                              if (t3 > 2) {
                                let t4 = s4[2];
                                const a4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/2",
                                  schemaPath: "#/properties/params/items/2/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                p2 = 0 === a4;
                              }
                              if (p2) {
                                if (t3 > 3) {
                                  let t4 = s4[3];
                                  const a4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                    type: "integer"
                                  }, message: "must be integer" }], false;
                                  p2 = 0 === a4;
                                }
                                if (p2) {
                                  if (t3 > 4) {
                                    let t4 = s4[4];
                                    const a4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                      instancePath: r2 + "/params/4",
                                      schemaPath: "#/properties/params/items/4/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    p2 = 0 === a4;
                                  }
                                  if (p2) {
                                    if (t3 > 5) {
                                      let t4 = s4[5];
                                      const a4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      p2 = 0 === a4;
                                    }
                                    if (p2) {
                                      if (t3 > 6) {
                                        let t4 = s4[6];
                                        const a4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                          instancePath: r2 + "/params/6",
                                          schemaPath: "#/properties/params/items/6/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], false;
                                        p2 = 0 === a4;
                                      }
                                      if (p2 && t3 > 7) {
                                        let t4 = s4[7];
                                        const a4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], false;
                                        p2 = 0 === a4;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        n2 = 0 === a3;
                      } else n2 = true;
                      if (n2) if (void 0 !== t2.traits) {
                        let s4 = t2.traits;
                        const a3 = 0;
                        if (!Array.isArray(s4)) return e2.errors = [{
                          instancePath: r2 + "/traits",
                          schemaPath: "#/properties/traits/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const t3 = s4.length;
                          for (let a4 = 0; a4 < t3; a4++) {
                            let t4 = s4[a4];
                            const i3 = 0;
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: r2 + "/traits/" + a4, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let s5;
                              if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                instancePath: r2 + "/traits/" + a4,
                                schemaPath: "#/properties/traits/items/required",
                                keyword: "required",
                                params: { missingProperty: s5 },
                                message: "must have required property '" + s5 + "'"
                              }], false;
                              if (void 0 !== t4.code) {
                                let s6 = t4.code;
                                const i4 = 0;
                                if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                  instancePath: r2 + "/traits/" + a4 + "/code",
                                  schemaPath: "#/properties/traits/items/properties/code/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var o2 = 0 === i4;
                              } else o2 = true;
                              if (o2) {
                                if (void 0 !== t4.dataId) {
                                  let s6 = t4.dataId;
                                  const i4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + a4 + "/dataId",
                                    schemaPath: "#/properties/traits/items/properties/dataId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o2 = 0 === i4;
                                } else o2 = true;
                                if (o2) if (void 0 !== t4.value) {
                                  let s6 = t4.value;
                                  const i4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + a4 + "/value",
                                    schemaPath: "#/properties/traits/items/properties/value/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o2 = 0 === i4;
                                } else o2 = true;
                              }
                            }
                            if (!(0 === i3)) break;
                          }
                        }
                        n2 = 0 === a3;
                      } else n2 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return m = 1, y.exports = e2, y.exports.default = e2, y.exports;
}()), d = (e2) => c(e2);
var u, h = { exports: {} };
const f = e(function() {
  if (u) return h.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: a2, rootData: i2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.note && (s3 = "note") || void 0 === t2.expParams && (s3 = "expParams") || void 0 === t2.params && (s3 = "params") || void 0 === t2.learnings && (s3 = "learnings") || void 0 === t2.traits && (s3 = "traits")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: s3 },
        message: "must have required property '" + s3 + "'"
      }], false;
      for (const s4 in t2) if ("name" !== s4 && "id" !== s4 && "note" !== s4 && "expParams" !== s4 && "params" !== s4 && "learnings" !== s4 && "traits" !== s4) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: s4 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== t2.name) {
        const s4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === s4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.id) {
          let s4 = t2.id;
          const a3 = 0;
          if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n2 = 0 === a3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.note) {
            const s4 = 0;
            if ("string" != typeof t2.note) return e2.errors = [{
              instancePath: r2 + "/note",
              schemaPath: "#/properties/note/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n2 = 0 === s4;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.expParams) {
              let s4 = t2.expParams;
              const a3 = 0;
              if (!Array.isArray(s4)) return e2.errors = [{
                instancePath: r2 + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], false;
              {
                const t3 = s4.length;
                for (let a4 = 0; a4 < t3; a4++) {
                  let t4 = s4[a4];
                  const i3 = 0;
                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/expParams/" + a4, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], false;
                  if (!(0 === i3)) break;
                }
              }
              n2 = 0 === a3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.params) {
                let s4 = t2.params;
                const a3 = 0;
                if (!Array.isArray(s4)) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], false;
                if (s4.length > 8) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/maxItems",
                  keyword: "maxItems",
                  params: { limit: 8 },
                  message: "must NOT have more than 8 items"
                }], false;
                if (s4.length < 8) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/minItems",
                  keyword: "minItems",
                  params: { limit: 8 },
                  message: "must NOT have fewer than 8 items"
                }], false;
                {
                  const t3 = s4.length;
                  if (t3 > 0) {
                    let t4 = s4[0];
                    const a4 = 0;
                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                      instancePath: r2 + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    var p2 = 0 === a4;
                  }
                  if (p2) {
                    if (t3 > 1) {
                      let t4 = s4[1];
                      const a4 = 0;
                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], false;
                      p2 = 0 === a4;
                    }
                    if (p2) {
                      if (t3 > 2) {
                        let t4 = s4[2];
                        const a4 = 0;
                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                          instancePath: r2 + "/params/2",
                          schemaPath: "#/properties/params/items/2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        p2 = 0 === a4;
                      }
                      if (p2) {
                        if (t3 > 3) {
                          let t4 = s4[3];
                          const a4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          p2 = 0 === a4;
                        }
                        if (p2) {
                          if (t3 > 4) {
                            let t4 = s4[4];
                            const a4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/4",
                              schemaPath: "#/properties/params/items/4/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === a4;
                          }
                          if (p2) {
                            if (t3 > 5) {
                              let t4 = s4[5];
                              const a4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              p2 = 0 === a4;
                            }
                            if (p2) {
                              if (t3 > 6) {
                                let t4 = s4[6];
                                const a4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/6",
                                  schemaPath: "#/properties/params/items/6/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                p2 = 0 === a4;
                              }
                              if (p2 && t3 > 7) {
                                let t4 = s4[7];
                                const a4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                p2 = 0 === a4;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                n2 = 0 === a3;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.learnings) {
                  let s4 = t2.learnings;
                  const a3 = 0;
                  if (!Array.isArray(s4)) return e2.errors = [{
                    instancePath: r2 + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = s4.length;
                    for (let a4 = 0; a4 < t3; a4++) {
                      let t4 = s4[a4];
                      const i3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/learnings/" + a4,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let s5;
                        if (void 0 === t4.level && (s5 = "level") || void 0 === t4.skillId && (s5 = "skillId")) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + a4,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: s5 },
                          message: "must have required property '" + s5 + "'"
                        }], false;
                        for (const s6 in t4) if ("level" !== s6 && "skillId" !== s6 && "note" !== s6) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + a4,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: s6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.level) {
                          let s6 = t4.level;
                          const i4 = 0;
                          if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                            instancePath: r2 + "/learnings/" + a4 + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var o2 = 0 === i4;
                        } else o2 = true;
                        if (o2) {
                          if (void 0 !== t4.skillId) {
                            let s6 = t4.skillId;
                            const i4 = 0;
                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + a4 + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            o2 = 0 === i4;
                          } else o2 = true;
                          if (o2) if (void 0 !== t4.note) {
                            const s6 = 0;
                            if ("string" != typeof t4.note) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + a4 + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], false;
                            o2 = 0 === s6;
                          } else o2 = true;
                        }
                      }
                      if (!(0 === i3)) break;
                    }
                  }
                  n2 = 0 === a3;
                } else n2 = true;
                if (n2) if (void 0 !== t2.traits) {
                  let s4 = t2.traits;
                  const a3 = 0;
                  if (!Array.isArray(s4)) return e2.errors = [{
                    instancePath: r2 + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = s4.length;
                    for (let a4 = 0; a4 < t3; a4++) {
                      let t4 = s4[a4];
                      const i3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/traits/" + a4,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let s5;
                        if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                          instancePath: r2 + "/traits/" + a4,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: s5 },
                          message: "must have required property '" + s5 + "'"
                        }], false;
                        for (const s6 in t4) if ("code" !== s6 && "dataId" !== s6 && "value" !== s6) return e2.errors = [{
                          instancePath: r2 + "/traits/" + a4,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: s6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.code) {
                          let s6 = t4.code;
                          const i4 = 0;
                          if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                            instancePath: r2 + "/traits/" + a4 + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var m2 = 0 === i4;
                        } else m2 = true;
                        if (m2) {
                          if (void 0 !== t4.dataId) {
                            let s6 = t4.dataId;
                            const i4 = 0;
                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + a4 + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === i4;
                          } else m2 = true;
                          if (m2) if (void 0 !== t4.value) {
                            let s6 = t4.value;
                            const i4 = 0;
                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + a4 + "/value",
                              schemaPath: "#/properties/traits/items/properties/value/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === i4;
                          } else m2 = true;
                        }
                      }
                      if (!(0 === i3)) break;
                    }
                  }
                  n2 = 0 === a3;
                } else n2 = true;
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return u = 1, h.exports = e2, h.exports.default = e2, h.exports;
}()), l = (e2) => f(e2);
export {
  a as isAudioCommand,
  o as isDataActor,
  d as isDataArmor2,
  l as isDataClass
};
//# sourceMappingURL=validate.es.js.map
