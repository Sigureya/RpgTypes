function e(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var t, r = { exports: {} };
const s = e(function() {
  if (t) return r.exports;
  t = 1, r.exports = s2, r.exports.default = s2;
  const e2 = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function s2(t2, { instancePath: r2 = "", parentData: i2, parentDataProperty: a2, rootData: n2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return s2.errors = [{ instancePath: r2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
    {
      let i3;
      if (void 0 === t2.code && (i3 = "code") || void 0 === t2.parameters && (i3 = "parameters") || void 0 === t2.indent && (i3 = "indent")) return s2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: i3 },
        message: "must have required property '" + i3 + "'"
      }], false;
      for (const e3 in t2) if ("code" !== e3 && "indent" !== e3 && "parameters" !== e3) return s2.errors = [{
        instancePath: r2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e3 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== t2.code) {
        let i4 = t2.code;
        const a3 = 0;
        if ("number" != typeof i4 || i4 % 1 || isNaN(i4) || !isFinite(i4)) return s2.errors = [{
          instancePath: r2 + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], false;
        if (132 !== i4 && 133 !== i4 && 139 !== i4 && 241 !== i4 && 245 !== i4 && 249 !== i4 && 250 !== i4) return s2.errors = [{
          instancePath: r2 + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: e2.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], false;
        var o2 = 0 === a3;
      } else o2 = true;
      if (o2) {
        if (void 0 !== t2.indent) {
          let e3 = t2.indent;
          const i4 = 0;
          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return s2.errors = [{
            instancePath: r2 + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          o2 = 0 === i4;
        } else o2 = true;
        if (o2) if (void 0 !== t2.parameters) {
          let e3 = t2.parameters;
          const i4 = 0;
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
                var p2 = 0 === e5;
              } else p2 = true;
              if (p2) {
                if (void 0 !== t3.volume) {
                  let e5 = t3.volume;
                  const i5 = 0;
                  if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return s2.errors = [{
                    instancePath: r2 + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  p2 = 0 === i5;
                } else p2 = true;
                if (p2) {
                  if (void 0 !== t3.pitch) {
                    let e5 = t3.pitch;
                    const i5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return s2.errors = [{
                      instancePath: r2 + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    p2 = 0 === i5;
                  } else p2 = true;
                  if (p2) if (void 0 !== t3.pan) {
                    let e5 = t3.pan;
                    const i5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return s2.errors = [{
                      instancePath: r2 + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    p2 = 0 === i5;
                  } else p2 = true;
                }
              }
            }
          }
          o2 = 0 === i4;
        } else o2 = true;
      }
    }
    return s2.errors = null, true;
  }
  return r.exports;
}()), i = (e2) => s(e2);
var a, n = {
  exports: {}
};
const o = e(function() {
  if (a) return n.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
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
              const i3 = 0;
              if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{ instancePath: r2 + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], false;
              n2 = 0 === i3;
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
                  const i3 = 0;
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
                  n2 = 0 === i3;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.id) {
                    let s4 = t2.id;
                    const i3 = 0;
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
                    n2 = 0 === i3;
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
                          const i3 = 0;
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
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.maxLevel) {
                            let s4 = t2.maxLevel;
                            const i3 = 0;
                            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                              instancePath: r2 + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === i3;
                          } else n2 = true;
                          if (n2) {
                            if (void 0 !== t2.classId) {
                              let s4 = t2.classId;
                              const i3 = 0;
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
                              n2 = 0 === i3;
                            } else n2 = true;
                            if (n2) {
                              if (void 0 !== t2.equips) {
                                let s4 = t2.equips;
                                const i3 = 0;
                                if (!Array.isArray(s4)) return e2.errors = [{
                                  instancePath: r2 + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], false;
                                {
                                  const t3 = s4.length;
                                  for (let i4 = 0; i4 < t3; i4++) {
                                    let t4 = s4[i4];
                                    const a3 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/equips/" + i4, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    if (!(0 === a3)) break;
                                  }
                                }
                                n2 = 0 === i3;
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
                                  const i3 = 0;
                                  if (!Array.isArray(s4)) return e2.errors = [{
                                    instancePath: r2 + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], false;
                                  {
                                    const t3 = s4.length;
                                    for (let i4 = 0; i4 < t3; i4++) {
                                      let t4 = s4[i4];
                                      const a3 = 0;
                                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                        instancePath: r2 + "/traits/" + i4,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], false;
                                      {
                                        let s5;
                                        if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                          instancePath: r2 + "/traits/" + i4,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: s5 },
                                          message: "must have required property '" + s5 + "'"
                                        }], false;
                                        if (void 0 !== t4.code) {
                                          let s6 = t4.code;
                                          const a4 = 0;
                                          if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                            instancePath: r2 + "/traits/" + i4 + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          var o2 = 0 === a4;
                                        } else o2 = true;
                                        if (o2) {
                                          if (void 0 !== t4.dataId) {
                                            let s6 = t4.dataId;
                                            const a4 = 0;
                                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + i4 + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            o2 = 0 === a4;
                                          } else o2 = true;
                                          if (o2) if (void 0 !== t4.value) {
                                            let s6 = t4.value;
                                            const a4 = 0;
                                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + i4 + "/value",
                                              schemaPath: "#/properties/traits/items/properties/value/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            o2 = 0 === a4;
                                          } else o2 = true;
                                        }
                                      }
                                      if (!(0 === a3)) break;
                                    }
                                  }
                                  n2 = 0 === i3;
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
  return a = 1, n.exports = e2, n.exports.default = e2, n.exports;
}()), p = (e2) => o(e2);
var m, y = { exports: {} };
const c = e(function() {
  if (m) return y.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
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
          const i3 = 0;
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
          n2 = 0 === i3;
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
              const i3 = 0;
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
              n2 = 0 === i3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.price) {
                let s4 = t2.price;
                const i3 = 0;
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
                n2 = 0 === i3;
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
                    const i3 = 0;
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
                    n2 = 0 === i3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.atypeId) {
                      let s4 = t2.atypeId;
                      const i3 = 0;
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
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.params) {
                        let s4 = t2.params;
                        const i3 = 0;
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
                            const i4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/0",
                              schemaPath: "#/properties/params/items/0/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            var o2 = 0 === i4;
                          }
                          if (o2) {
                            if (t3 > 1) {
                              let t4 = s4[1];
                              const i4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              o2 = 0 === i4;
                            }
                            if (o2) {
                              if (t3 > 2) {
                                let t4 = s4[2];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/2",
                                  schemaPath: "#/properties/params/items/2/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                o2 = 0 === i4;
                              }
                              if (o2) {
                                if (t3 > 3) {
                                  let t4 = s4[3];
                                  const i4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                    type: "integer"
                                  }, message: "must be integer" }], false;
                                  o2 = 0 === i4;
                                }
                                if (o2) {
                                  if (t3 > 4) {
                                    let t4 = s4[4];
                                    const i4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                      instancePath: r2 + "/params/4",
                                      schemaPath: "#/properties/params/items/4/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    o2 = 0 === i4;
                                  }
                                  if (o2) {
                                    if (t3 > 5) {
                                      let t4 = s4[5];
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      o2 = 0 === i4;
                                    }
                                    if (o2) {
                                      if (t3 > 6) {
                                        let t4 = s4[6];
                                        const i4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                          instancePath: r2 + "/params/6",
                                          schemaPath: "#/properties/params/items/6/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], false;
                                        o2 = 0 === i4;
                                      }
                                      if (o2 && t3 > 7) {
                                        let t4 = s4[7];
                                        const i4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], false;
                                        o2 = 0 === i4;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) if (void 0 !== t2.traits) {
                        let s4 = t2.traits;
                        const i3 = 0;
                        if (!Array.isArray(s4)) return e2.errors = [{
                          instancePath: r2 + "/traits",
                          schemaPath: "#/properties/traits/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const t3 = s4.length;
                          for (let i4 = 0; i4 < t3; i4++) {
                            let t4 = s4[i4];
                            const a3 = 0;
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: r2 + "/traits/" + i4, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let s5;
                              if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                instancePath: r2 + "/traits/" + i4,
                                schemaPath: "#/properties/traits/items/required",
                                keyword: "required",
                                params: { missingProperty: s5 },
                                message: "must have required property '" + s5 + "'"
                              }], false;
                              if (void 0 !== t4.code) {
                                let s6 = t4.code;
                                const a4 = 0;
                                if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                  instancePath: r2 + "/traits/" + i4 + "/code",
                                  schemaPath: "#/properties/traits/items/properties/code/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var p2 = 0 === a4;
                              } else p2 = true;
                              if (p2) {
                                if (void 0 !== t4.dataId) {
                                  let s6 = t4.dataId;
                                  const a4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + i4 + "/dataId",
                                    schemaPath: "#/properties/traits/items/properties/dataId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  p2 = 0 === a4;
                                } else p2 = true;
                                if (p2) if (void 0 !== t4.value) {
                                  let s6 = t4.value;
                                  const a4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + i4 + "/value",
                                    schemaPath: "#/properties/traits/items/properties/value/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  p2 = 0 === a4;
                                } else p2 = true;
                              }
                            }
                            if (!(0 === a3)) break;
                          }
                        }
                        n2 = 0 === i3;
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
var u, f = { exports: {} };
const h = e(function() {
  if (u) return f.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
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
          const i3 = 0;
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
          n2 = 0 === i3;
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
              const i3 = 0;
              if (!Array.isArray(s4)) return e2.errors = [{
                instancePath: r2 + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], false;
              {
                const t3 = s4.length;
                for (let i4 = 0; i4 < t3; i4++) {
                  let t4 = s4[i4];
                  const a3 = 0;
                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/expParams/" + i4, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], false;
                  if (!(0 === a3)) break;
                }
              }
              n2 = 0 === i3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.params) {
                let s4 = t2.params;
                const i3 = 0;
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
                    const i4 = 0;
                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                      instancePath: r2 + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    var o2 = 0 === i4;
                  }
                  if (o2) {
                    if (t3 > 1) {
                      let t4 = s4[1];
                      const i4 = 0;
                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], false;
                      o2 = 0 === i4;
                    }
                    if (o2) {
                      if (t3 > 2) {
                        let t4 = s4[2];
                        const i4 = 0;
                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                          instancePath: r2 + "/params/2",
                          schemaPath: "#/properties/params/items/2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        o2 = 0 === i4;
                      }
                      if (o2) {
                        if (t3 > 3) {
                          let t4 = s4[3];
                          const i4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          o2 = 0 === i4;
                        }
                        if (o2) {
                          if (t3 > 4) {
                            let t4 = s4[4];
                            const i4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/4",
                              schemaPath: "#/properties/params/items/4/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            o2 = 0 === i4;
                          }
                          if (o2) {
                            if (t3 > 5) {
                              let t4 = s4[5];
                              const i4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              o2 = 0 === i4;
                            }
                            if (o2) {
                              if (t3 > 6) {
                                let t4 = s4[6];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/6",
                                  schemaPath: "#/properties/params/items/6/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                o2 = 0 === i4;
                              }
                              if (o2 && t3 > 7) {
                                let t4 = s4[7];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                o2 = 0 === i4;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                n2 = 0 === i3;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.learnings) {
                  let s4 = t2.learnings;
                  const i3 = 0;
                  if (!Array.isArray(s4)) return e2.errors = [{
                    instancePath: r2 + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = s4.length;
                    for (let i4 = 0; i4 < t3; i4++) {
                      let t4 = s4[i4];
                      const a3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/learnings/" + i4,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let s5;
                        if (void 0 === t4.level && (s5 = "level") || void 0 === t4.skillId && (s5 = "skillId")) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + i4,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: s5 },
                          message: "must have required property '" + s5 + "'"
                        }], false;
                        for (const s6 in t4) if ("level" !== s6 && "skillId" !== s6 && "note" !== s6) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + i4,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: s6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.level) {
                          let s6 = t4.level;
                          const a4 = 0;
                          if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                            instancePath: r2 + "/learnings/" + i4 + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var p2 = 0 === a4;
                        } else p2 = true;
                        if (p2) {
                          if (void 0 !== t4.skillId) {
                            let s6 = t4.skillId;
                            const a4 = 0;
                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + i4 + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === a4;
                          } else p2 = true;
                          if (p2) if (void 0 !== t4.note) {
                            const s6 = 0;
                            if ("string" != typeof t4.note) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + i4 + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], false;
                            p2 = 0 === s6;
                          } else p2 = true;
                        }
                      }
                      if (!(0 === a3)) break;
                    }
                  }
                  n2 = 0 === i3;
                } else n2 = true;
                if (n2) if (void 0 !== t2.traits) {
                  let s4 = t2.traits;
                  const i3 = 0;
                  if (!Array.isArray(s4)) return e2.errors = [{
                    instancePath: r2 + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = s4.length;
                    for (let i4 = 0; i4 < t3; i4++) {
                      let t4 = s4[i4];
                      const a3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/traits/" + i4,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let s5;
                        if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                          instancePath: r2 + "/traits/" + i4,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: s5 },
                          message: "must have required property '" + s5 + "'"
                        }], false;
                        for (const s6 in t4) if ("code" !== s6 && "dataId" !== s6 && "value" !== s6) return e2.errors = [{
                          instancePath: r2 + "/traits/" + i4,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: s6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.code) {
                          let s6 = t4.code;
                          const a4 = 0;
                          if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                            instancePath: r2 + "/traits/" + i4 + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var m2 = 0 === a4;
                        } else m2 = true;
                        if (m2) {
                          if (void 0 !== t4.dataId) {
                            let s6 = t4.dataId;
                            const a4 = 0;
                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + i4 + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === a4;
                          } else m2 = true;
                          if (m2) if (void 0 !== t4.value) {
                            let s6 = t4.value;
                            const a4 = 0;
                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + i4 + "/value",
                              schemaPath: "#/properties/traits/items/properties/value/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === a4;
                          } else m2 = true;
                        }
                      }
                      if (!(0 === a3)) break;
                    }
                  }
                  n2 = 0 === i3;
                } else n2 = true;
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return u = 1, f.exports = e2, f.exports.default = e2, f.exports;
}()), g = (e2) => h(e2);
var l, P = { exports: {} };
const b = e(function() {
  if (l) return P.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.battlerName && (s3 = "battlerName") || void 0 === t2.battlerHue && (s3 = "battlerHue") || void 0 === t2.exp && (s3 = "exp") || void 0 === t2.gold && (s3 = "gold") || void 0 === t2.note && (s3 = "note") || void 0 === t2.params && (s3 = "params") || void 0 === t2.dropItems && (s3 = "dropItems") || void 0 === t2.traits && (s3 = "traits") || void 0 === t2.actions && (s3 = "actions")) return e2.errors = [{
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
          const i3 = 0;
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
          n2 = 0 === i3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.battlerHue) {
            let s4 = t2.battlerHue;
            const i3 = 0;
            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
              instancePath: r2 + "/battlerHue",
              schemaPath: "#/properties/battlerHue/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer"
            }], false;
            if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{ instancePath: r2 + "/battlerHue", schemaPath: "#/properties/battlerHue/minimum", keyword: "minimum", params: {
              comparison: ">=",
              limit: 0
            }, message: "must be >= 0" }], false;
            n2 = 0 === i3;
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
              if (void 0 !== t2.exp) {
                let s4 = t2.exp;
                const i3 = 0;
                if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                  instancePath: r2 + "/exp",
                  schemaPath: "#/properties/exp/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                  instancePath: r2 + "/exp",
                  schemaPath: "#/properties/exp/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], false;
                n2 = 0 === i3;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.gold) {
                  let s4 = t2.gold;
                  const i3 = 0;
                  if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                    instancePath: r2 + "/gold",
                    schemaPath: "#/properties/gold/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                    instancePath: r2 + "/gold",
                    schemaPath: "#/properties/gold/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 0 },
                    message: "must be >= 0"
                  }], false;
                  n2 = 0 === i3;
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
                    if (void 0 !== t2.params) {
                      let s4 = t2.params;
                      const i3 = 0;
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
                          const i4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                            instancePath: r2 + "/params/0",
                            schemaPath: "#/properties/params/items/0/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var o2 = 0 === i4;
                        }
                        if (o2) {
                          if (t3 > 1) {
                            let t4 = s4[1];
                            const i4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                              type: "integer"
                            }, message: "must be integer" }], false;
                            o2 = 0 === i4;
                          }
                          if (o2) {
                            if (t3 > 2) {
                              let t4 = s4[2];
                              const i4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                instancePath: r2 + "/params/2",
                                schemaPath: "#/properties/params/items/2/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              o2 = 0 === i4;
                            }
                            if (o2) {
                              if (t3 > 3) {
                                let t4 = s4[3];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                o2 = 0 === i4;
                              }
                              if (o2) {
                                if (t3 > 4) {
                                  let t4 = s4[4];
                                  const i4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                    instancePath: r2 + "/params/4",
                                    schemaPath: "#/properties/params/items/4/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o2 = 0 === i4;
                                }
                                if (o2) {
                                  if (t3 > 5) {
                                    let t4 = s4[5];
                                    const i4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    o2 = 0 === i4;
                                  }
                                  if (o2) {
                                    if (t3 > 6) {
                                      let t4 = s4[6];
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                        instancePath: r2 + "/params/6",
                                        schemaPath: "#/properties/params/items/6/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      o2 = 0 === i4;
                                    }
                                    if (o2 && t3 > 7) {
                                      let t4 = s4[7];
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      o2 = 0 === i4;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.actions) {
                        let s4 = t2.actions;
                        const i3 = 0;
                        if (!Array.isArray(s4)) return e2.errors = [{
                          instancePath: r2 + "/actions",
                          schemaPath: "#/properties/actions/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const t3 = s4.length;
                          for (let i4 = 0; i4 < t3; i4++) {
                            let t4 = s4[i4];
                            const a3 = 0;
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: r2 + "/actions/" + i4, schemaPath: "#/properties/actions/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let s5;
                              if (void 0 === t4.conditionParam1 && (s5 = "conditionParam1") || void 0 === t4.conditionParam2 && (s5 = "conditionParam2") || void 0 === t4.conditionType && (s5 = "conditionType") || void 0 === t4.skillId && (s5 = "skillId") || void 0 === t4.rating && (s5 = "rating")) return e2.errors = [{
                                instancePath: r2 + "/actions/" + i4,
                                schemaPath: "#/properties/actions/items/required",
                                keyword: "required",
                                params: { missingProperty: s5 },
                                message: "must have required property '" + s5 + "'"
                              }], false;
                              if (void 0 !== t4.conditionParam1) {
                                let s6 = t4.conditionParam1;
                                const a4 = 0;
                                if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                  instancePath: r2 + "/actions/" + i4 + "/conditionParam1",
                                  schemaPath: "#/properties/actions/items/properties/conditionParam1/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var p2 = 0 === a4;
                              } else p2 = true;
                              if (p2) {
                                if (void 0 !== t4.conditionParam2) {
                                  let s6 = t4.conditionParam2;
                                  const a4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/actions/" + i4 + "/conditionParam2",
                                    schemaPath: "#/properties/actions/items/properties/conditionParam2/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  p2 = 0 === a4;
                                } else p2 = true;
                                if (p2) {
                                  if (void 0 !== t4.conditionType) {
                                    let s6 = t4.conditionType;
                                    const a4 = 0;
                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                      instancePath: r2 + "/actions/" + i4 + "/conditionType",
                                      schemaPath: "#/properties/actions/items/properties/conditionType/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    p2 = 0 === a4;
                                  } else p2 = true;
                                  if (p2) {
                                    if (void 0 !== t4.skillId) {
                                      let s6 = t4.skillId;
                                      const a4 = 0;
                                      if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                        instancePath: r2 + "/actions/" + i4 + "/skillId",
                                        schemaPath: "#/properties/actions/items/properties/skillId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      p2 = 0 === a4;
                                    } else p2 = true;
                                    if (p2) if (void 0 !== t4.rating) {
                                      let s6 = t4.rating;
                                      const a4 = 0;
                                      if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                        instancePath: r2 + "/actions/" + i4 + "/rating",
                                        schemaPath: "#/properties/actions/items/properties/rating/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      p2 = 0 === a4;
                                    } else p2 = true;
                                  }
                                }
                              }
                            }
                            if (!(0 === a3)) break;
                          }
                        }
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.traits) {
                          let s4 = t2.traits;
                          const i3 = 0;
                          if (!Array.isArray(s4)) return e2.errors = [{
                            instancePath: r2 + "/traits",
                            schemaPath: "#/properties/traits/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], false;
                          {
                            const t3 = s4.length;
                            for (let i4 = 0; i4 < t3; i4++) {
                              let t4 = s4[i4];
                              const a3 = 0;
                              if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                instancePath: r2 + "/traits/" + i4,
                                schemaPath: "#/properties/traits/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], false;
                              {
                                let s5;
                                if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                  instancePath: r2 + "/traits/" + i4,
                                  schemaPath: "#/properties/traits/items/required",
                                  keyword: "required",
                                  params: { missingProperty: s5 },
                                  message: "must have required property '" + s5 + "'"
                                }], false;
                                if (void 0 !== t4.code) {
                                  let s6 = t4.code;
                                  const a4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + i4 + "/code",
                                    schemaPath: "#/properties/traits/items/properties/code/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  var m2 = 0 === a4;
                                } else m2 = true;
                                if (m2) {
                                  if (void 0 !== t4.dataId) {
                                    let s6 = t4.dataId;
                                    const a4 = 0;
                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                      instancePath: r2 + "/traits/" + i4 + "/dataId",
                                      schemaPath: "#/properties/traits/items/properties/dataId/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    m2 = 0 === a4;
                                  } else m2 = true;
                                  if (m2) if (void 0 !== t4.value) {
                                    let s6 = t4.value;
                                    const a4 = 0;
                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                      instancePath: r2 + "/traits/" + i4 + "/value",
                                      schemaPath: "#/properties/traits/items/properties/value/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    m2 = 0 === a4;
                                  } else m2 = true;
                                }
                              }
                              if (!(0 === a3)) break;
                            }
                          }
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) if (void 0 !== t2.dropItems) {
                          let s4 = t2.dropItems;
                          const i3 = 0;
                          if (!Array.isArray(s4)) return e2.errors = [{
                            instancePath: r2 + "/dropItems",
                            schemaPath: "#/properties/dropItems/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], false;
                          {
                            const t3 = s4.length;
                            for (let i4 = 0; i4 < t3; i4++) {
                              let t4 = s4[i4];
                              const a3 = 0;
                              if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                instancePath: r2 + "/dropItems/" + i4,
                                schemaPath: "#/properties/dropItems/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], false;
                              {
                                let s5;
                                if (void 0 === t4.kind && (s5 = "kind") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.denominator && (s5 = "denominator")) return e2.errors = [{
                                  instancePath: r2 + "/dropItems/" + i4,
                                  schemaPath: "#/properties/dropItems/items/required",
                                  keyword: "required",
                                  params: { missingProperty: s5 },
                                  message: "must have required property '" + s5 + "'"
                                }], false;
                                if (void 0 !== t4.kind) {
                                  let s6 = t4.kind;
                                  const a4 = 0;
                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                    instancePath: r2 + "/dropItems/" + i4 + "/kind",
                                    schemaPath: "#/properties/dropItems/items/properties/kind/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  var y2 = 0 === a4;
                                } else y2 = true;
                                if (y2) {
                                  if (void 0 !== t4.dataId) {
                                    let s6 = t4.dataId;
                                    const a4 = 0;
                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                      instancePath: r2 + "/dropItems/" + i4 + "/dataId",
                                      schemaPath: "#/properties/dropItems/items/properties/dataId/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    y2 = 0 === a4;
                                  } else y2 = true;
                                  if (y2) {
                                    if (void 0 !== t4.denominator) {
                                      let s6 = t4.denominator;
                                      const a4 = 0;
                                      if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                        instancePath: r2 + "/dropItems/" + i4 + "/denominator",
                                        schemaPath: "#/properties/dropItems/items/properties/denominator/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      if ("number" == typeof s6 && isFinite(s6) && (s6 < 0 || isNaN(s6))) return e2.errors = [{
                                        instancePath: r2 + "/dropItems/" + i4 + "/denominator",
                                        schemaPath: "#/properties/dropItems/items/properties/denominator/minimum",
                                        keyword: "minimum",
                                        params: { comparison: ">=", limit: 0 },
                                        message: "must be >= 0"
                                      }], false;
                                      y2 = 0 === a4;
                                    } else y2 = true;
                                    if (y2) if (void 0 !== t4.rate) {
                                      let s6 = t4.rate;
                                      const a4 = 0;
                                      if ("number" != typeof s6 || !isFinite(s6)) return e2.errors = [{
                                        instancePath: r2 + "/dropItems/" + i4 + "/rate",
                                        schemaPath: "#/properties/dropItems/items/properties/rate/type",
                                        keyword: "type",
                                        params: { type: "number" },
                                        message: "must be number"
                                      }], false;
                                      y2 = 0 === a4;
                                    } else y2 = true;
                                  }
                                }
                              }
                              if (!(0 === a3)) break;
                            }
                          }
                          n2 = 0 === i3;
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
    return e2.errors = null, true;
  }
  return l = 1, P.exports = e2, P.exports.default = e2, P.exports;
}()), v = (e2) => b(e2);
var N, k = { exports: {} };
const w = e(function() {
  if (N) return k.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.description && (s3 = "description") || void 0 === t2.iconIndex && (s3 = "iconIndex") || void 0 === t2.note && (s3 = "note") || void 0 === t2.animationId && (s3 = "animationId") || void 0 === t2.hitType && (s3 = "hitType") || void 0 === t2.occasion && (s3 = "occasion") || void 0 === t2.repeats && (s3 = "repeats") || void 0 === t2.scope && (s3 = "scope") || void 0 === t2.speed && (s3 = "speed") || void 0 === t2.successRate && (s3 = "successRate") || void 0 === t2.tpGain && (s3 = "tpGain") || void 0 === t2.consumable && (s3 = "consumable") || void 0 === t2.price && (s3 = "price") || void 0 === t2.effects && (s3 = "effects")) return e2.errors = [{
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
          const i3 = 0;
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
          n2 = 0 === i3;
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
              const i3 = 0;
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
              n2 = 0 === i3;
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
                if (void 0 !== t2.animationId) {
                  let s4 = t2.animationId;
                  const i3 = 0;
                  if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                    instancePath: r2 + "/animationId",
                    schemaPath: "#/properties/animationId/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                    instancePath: r2 + "/animationId",
                    schemaPath: "#/properties/animationId/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 0 },
                    message: "must be >= 0"
                  }], false;
                  n2 = 0 === i3;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.hitType) {
                    let s4 = t2.hitType;
                    const i3 = 0;
                    if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                      instancePath: r2 + "/hitType",
                      schemaPath: "#/properties/hitType/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    n2 = 0 === i3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.occasion) {
                      let s4 = t2.occasion;
                      const i3 = 0;
                      if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                        instancePath: r2 + "/occasion",
                        schemaPath: "#/properties/occasion/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.repeats) {
                        let s4 = t2.repeats;
                        const i3 = 0;
                        if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                          instancePath: r2 + "/repeats",
                          schemaPath: "#/properties/repeats/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.scope) {
                          let s4 = t2.scope;
                          const i3 = 0;
                          if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{ instancePath: r2 + "/scope", schemaPath: "#/properties/scope/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.speed) {
                            let s4 = t2.speed;
                            const i3 = 0;
                            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                              instancePath: r2 + "/speed",
                              schemaPath: "#/properties/speed/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === i3;
                          } else n2 = true;
                          if (n2) {
                            if (void 0 !== t2.successRate) {
                              let s4 = t2.successRate;
                              const i3 = 0;
                              if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{ instancePath: r2 + "/successRate", schemaPath: "#/properties/successRate/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              n2 = 0 === i3;
                            } else n2 = true;
                            if (n2) {
                              if (void 0 !== t2.tpGain) {
                                let s4 = t2.tpGain;
                                const i3 = 0;
                                if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                  instancePath: r2 + "/tpGain",
                                  schemaPath: "#/properties/tpGain/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                n2 = 0 === i3;
                              } else n2 = true;
                              if (n2) {
                                if (void 0 !== t2.consumable) {
                                  const s4 = 0;
                                  if ("boolean" != typeof t2.consumable) return e2.errors = [{
                                    instancePath: r2 + "/consumable",
                                    schemaPath: "#/properties/consumable/type",
                                    keyword: "type",
                                    params: { type: "boolean" },
                                    message: "must be boolean"
                                  }], false;
                                  n2 = 0 === s4;
                                } else n2 = true;
                                if (n2) {
                                  if (void 0 !== t2.price) {
                                    let s4 = t2.price;
                                    const i3 = 0;
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
                                    n2 = 0 === i3;
                                  } else n2 = true;
                                  if (n2) {
                                    if (void 0 !== t2.itypeId) {
                                      let s4 = t2.itypeId;
                                      const i3 = 0;
                                      if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                        instancePath: r2 + "/itypeId",
                                        schemaPath: "#/properties/itypeId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                                        instancePath: r2 + "/itypeId",
                                        schemaPath: "#/properties/itypeId/minimum",
                                        keyword: "minimum",
                                        params: { comparison: ">=", limit: 0 },
                                        message: "must be >= 0"
                                      }], false;
                                      n2 = 0 === i3;
                                    } else n2 = true;
                                    if (n2) {
                                      if (void 0 !== t2.effects) {
                                        let s4 = t2.effects;
                                        const i3 = 0;
                                        if (!Array.isArray(s4)) return e2.errors = [{ instancePath: r2 + "/effects", schemaPath: "#/properties/effects/type", keyword: "type", params: { type: "array" }, message: "must be array" }], false;
                                        {
                                          const t3 = s4.length;
                                          for (let i4 = 0; i4 < t3; i4++) {
                                            let t4 = s4[i4];
                                            const a3 = 0;
                                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                              instancePath: r2 + "/effects/" + i4,
                                              schemaPath: "#/properties/effects/items/type",
                                              keyword: "type",
                                              params: { type: "object" },
                                              message: "must be object"
                                            }], false;
                                            {
                                              let s5;
                                              if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value1 && (s5 = "value1") || void 0 === t4.value2 && (s5 = "value2")) return e2.errors = [{
                                                instancePath: r2 + "/effects/" + i4,
                                                schemaPath: "#/properties/effects/items/required",
                                                keyword: "required",
                                                params: { missingProperty: s5 },
                                                message: "must have required property '" + s5 + "'"
                                              }], false;
                                              for (const s6 in t4) if ("code" !== s6 && "dataId" !== s6 && "value1" !== s6 && "value2" !== s6) return e2.errors = [{
                                                instancePath: r2 + "/effects/" + i4,
                                                schemaPath: "#/properties/effects/items/additionalProperties",
                                                keyword: "additionalProperties",
                                                params: { additionalProperty: s6 },
                                                message: "must NOT have additional properties"
                                              }], false;
                                              if (void 0 !== t4.code) {
                                                let s6 = t4.code;
                                                const a4 = 0;
                                                if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                  instancePath: r2 + "/effects/" + i4 + "/code",
                                                  schemaPath: "#/properties/effects/items/properties/code/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], false;
                                                var o2 = 0 === a4;
                                              } else o2 = true;
                                              if (o2) {
                                                if (void 0 !== t4.dataId) {
                                                  let s6 = t4.dataId;
                                                  const a4 = 0;
                                                  if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                    instancePath: r2 + "/effects/" + i4 + "/dataId",
                                                    schemaPath: "#/properties/effects/items/properties/dataId/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], false;
                                                  if ("number" == typeof s6 && isFinite(s6) && (s6 < 0 || isNaN(s6))) return e2.errors = [{
                                                    instancePath: r2 + "/effects/" + i4 + "/dataId",
                                                    schemaPath: "#/properties/effects/items/properties/dataId/minimum",
                                                    keyword: "minimum",
                                                    params: { comparison: ">=", limit: 0 },
                                                    message: "must be >= 0"
                                                  }], false;
                                                  o2 = 0 === a4;
                                                } else o2 = true;
                                                if (o2) {
                                                  if (void 0 !== t4.value1) {
                                                    let s6 = t4.value1;
                                                    const a4 = 0;
                                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                      instancePath: r2 + "/effects/" + i4 + "/value1",
                                                      schemaPath: "#/properties/effects/items/properties/value1/type",
                                                      keyword: "type",
                                                      params: { type: "integer" },
                                                      message: "must be integer"
                                                    }], false;
                                                    o2 = 0 === a4;
                                                  } else o2 = true;
                                                  if (o2) if (void 0 !== t4.value2) {
                                                    let s6 = t4.value2;
                                                    const a4 = 0;
                                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                      instancePath: r2 + "/effects/" + i4 + "/value2",
                                                      schemaPath: "#/properties/effects/items/properties/value2/type",
                                                      keyword: "type",
                                                      params: { type: "integer" },
                                                      message: "must be integer"
                                                    }], false;
                                                    o2 = 0 === a4;
                                                  } else o2 = true;
                                                }
                                              }
                                            }
                                            if (!(0 === a3)) break;
                                          }
                                        }
                                        n2 = 0 === i3;
                                      } else n2 = true;
                                      if (n2) if (void 0 !== t2.damage) {
                                        let s4 = t2.damage;
                                        const i3 = 0;
                                        if (!s4 || "object" != typeof s4 || Array.isArray(s4)) return e2.errors = [{
                                          instancePath: r2 + "/damage",
                                          schemaPath: "#/properties/damage/type",
                                          keyword: "type",
                                          params: { type: "object" },
                                          message: "must be object"
                                        }], false;
                                        {
                                          let t3;
                                          if (void 0 === s4.type && (t3 = "type") || void 0 === s4.elementId && (t3 = "elementId") || void 0 === s4.formula && (t3 = "formula") || void 0 === s4.variance && (t3 = "variance") || void 0 === s4.critical && (t3 = "critical")) return e2.errors = [{
                                            instancePath: r2 + "/damage",
                                            schemaPath: "#/properties/damage/required",
                                            keyword: "required",
                                            params: { missingProperty: t3 },
                                            message: "must have required property '" + t3 + "'"
                                          }], false;
                                          for (const t4 in s4) if ("type" !== t4 && "elementId" !== t4 && "formula" !== t4 && "variance" !== t4 && "critical" !== t4) return e2.errors = [{
                                            instancePath: r2 + "/damage",
                                            schemaPath: "#/properties/damage/additionalProperties",
                                            keyword: "additionalProperties",
                                            params: { additionalProperty: t4 },
                                            message: "must NOT have additional properties"
                                          }], false;
                                          if (void 0 !== s4.type) {
                                            let t4 = s4.type;
                                            const i4 = 0;
                                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                              instancePath: r2 + "/damage/type",
                                              schemaPath: "#/properties/damage/properties/type/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            var p2 = 0 === i4;
                                          } else p2 = true;
                                          if (p2) {
                                            if (void 0 !== s4.elementId) {
                                              let t4 = s4.elementId;
                                              const i4 = 0;
                                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                                instancePath: r2 + "/damage/elementId",
                                                schemaPath: "#/properties/damage/properties/elementId/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], false;
                                              if ("number" == typeof t4 && isFinite(t4) && (t4 < 0 || isNaN(t4))) return e2.errors = [{
                                                instancePath: r2 + "/damage/elementId",
                                                schemaPath: "#/properties/damage/properties/elementId/minimum",
                                                keyword: "minimum",
                                                params: { comparison: ">=", limit: 0 },
                                                message: "must be >= 0"
                                              }], false;
                                              p2 = 0 === i4;
                                            } else p2 = true;
                                            if (p2) {
                                              if (void 0 !== s4.formula) {
                                                const t4 = 0;
                                                if ("string" != typeof s4.formula) return e2.errors = [{
                                                  instancePath: r2 + "/damage/formula",
                                                  schemaPath: "#/properties/damage/properties/formula/type",
                                                  keyword: "type",
                                                  params: { type: "string" },
                                                  message: "must be string"
                                                }], false;
                                                p2 = 0 === t4;
                                              } else p2 = true;
                                              if (p2) {
                                                if (void 0 !== s4.variance) {
                                                  let t4 = s4.variance;
                                                  const i4 = 0;
                                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                                    instancePath: r2 + "/damage/variance",
                                                    schemaPath: "#/properties/damage/properties/variance/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], false;
                                                  p2 = 0 === i4;
                                                } else p2 = true;
                                                if (p2) if (void 0 !== s4.critical) {
                                                  const t4 = 0;
                                                  if ("boolean" != typeof s4.critical) return e2.errors = [{
                                                    instancePath: r2 + "/damage/critical",
                                                    schemaPath: "#/properties/damage/properties/critical/type",
                                                    keyword: "type",
                                                    params: { type: "boolean" },
                                                    message: "must be boolean"
                                                  }], false;
                                                  p2 = 0 === t4;
                                                } else p2 = true;
                                              }
                                            }
                                          }
                                        }
                                        n2 = 0 === i3;
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
        }
      }
    }
    return e2.errors = null, true;
  }
  return N = 1, k.exports = e2, k.exports.default = e2, k.exports;
}()), I = (e2) => w(e2);
var F, x = { exports: {} };
const q = e(function() {
  if (F) return x.exports;
  F = 1, x.exports = r2, x.exports.default = r2;
  const e2 = { properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    message1: {
      type: "string"
    },
    message2: { type: "string" },
    messageType: { type: "integer", minimum: 0 },
    mpCost: { type: "integer" },
    requiredWtypeId1: { type: "integer", minimum: 0 },
    requiredWtypeId2: { type: "integer", minimum: 0 },
    stypeId: { type: "integer", minimum: 0 },
    tpCost: { type: "integer" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer", minimum: 0 },
    occasion: { type: "integer" },
    repeats: {
      type: "integer",
      minimum: 0
    },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: { type: "array", items: {
      type: "object",
      properties: { code: { type: "integer" }, dataId: { type: "integer", minimum: 0 }, value1: { type: "integer" }, value2: { type: "integer" } },
      required: ["code", "dataId", "value1", "value2"],
      additionalProperties: false
    } },
    damage: { type: "object", properties: { type: { type: "integer" }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer" }, critical: {
      type: "boolean"
    } }, required: ["type", "elementId", "formula", "variance", "critical"], additionalProperties: false }
  } }, t2 = Object.prototype.hasOwnProperty;
  function r2(s2, { instancePath: i2 = "", parentData: a2, parentDataProperty: n2, rootData: o2 = s2 } = {}) {
    if (!s2 || "object" != typeof s2 || Array.isArray(s2)) return r2.errors = [{
      instancePath: i2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let a3;
      if (void 0 === s2.name && (a3 = "name") || void 0 === s2.id && (a3 = "id") || void 0 === s2.description && (a3 = "description") || void 0 === s2.iconIndex && (a3 = "iconIndex") || void 0 === s2.message1 && (a3 = "message1") || void 0 === s2.message2 && (a3 = "message2") || void 0 === s2.messageType && (a3 = "messageType") || void 0 === s2.mpCost && (a3 = "mpCost") || void 0 === s2.requiredWtypeId1 && (a3 = "requiredWtypeId1") || void 0 === s2.requiredWtypeId2 && (a3 = "requiredWtypeId2") || void 0 === s2.stypeId && (a3 = "stypeId") || void 0 === s2.tpCost && (a3 = "tpCost") || void 0 === s2.animationId && (a3 = "animationId") || void 0 === s2.hitType && (a3 = "hitType") || void 0 === s2.occasion && (a3 = "occasion") || void 0 === s2.repeats && (a3 = "repeats") || void 0 === s2.scope && (a3 = "scope") || void 0 === s2.speed && (a3 = "speed") || void 0 === s2.successRate && (a3 = "successRate") || void 0 === s2.tpGain && (a3 = "tpGain") || void 0 === s2.note && (a3 = "note") || void 0 === s2.effects && (a3 = "effects")) return r2.errors = [{
        instancePath: i2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      for (const a4 in s2) if (!t2.call(e2.properties, a4)) return r2.errors = [{
        instancePath: i2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: a4 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== s2.name) {
        const e3 = 0;
        if ("string" != typeof s2.name) return r2.errors = [{
          instancePath: i2 + "/name",
          schemaPath: "#/properties/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string"
        }], false;
        var p2 = 0 === e3;
      } else p2 = true;
      if (p2) {
        if (void 0 !== s2.id) {
          let e3 = s2.id;
          const t3 = 0;
          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
            instancePath: i2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
            instancePath: i2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          p2 = 0 === t3;
        } else p2 = true;
        if (p2) {
          if (void 0 !== s2.description) {
            const e3 = 0;
            if ("string" != typeof s2.description) return r2.errors = [{
              instancePath: i2 + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            p2 = 0 === e3;
          } else p2 = true;
          if (p2) {
            if (void 0 !== s2.iconIndex) {
              let e3 = s2.iconIndex;
              const t3 = 0;
              if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                instancePath: i2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], false;
              if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{ instancePath: i2 + "/iconIndex", schemaPath: "#/properties/iconIndex/minimum", keyword: "minimum", params: {
                comparison: ">=",
                limit: 0
              }, message: "must be >= 0" }], false;
              p2 = 0 === t3;
            } else p2 = true;
            if (p2) {
              if (void 0 !== s2.message1) {
                const e3 = 0;
                if ("string" != typeof s2.message1) return r2.errors = [{
                  instancePath: i2 + "/message1",
                  schemaPath: "#/properties/message1/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                p2 = 0 === e3;
              } else p2 = true;
              if (p2) {
                if (void 0 !== s2.message2) {
                  const e3 = 0;
                  if ("string" != typeof s2.message2) return r2.errors = [{ instancePath: i2 + "/message2", schemaPath: "#/properties/message2/type", keyword: "type", params: {
                    type: "string"
                  }, message: "must be string" }], false;
                  p2 = 0 === e3;
                } else p2 = true;
                if (p2) {
                  if (void 0 !== s2.messageType) {
                    let e3 = s2.messageType;
                    const t3 = 0;
                    if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{ instancePath: i2 + "/messageType", schemaPath: "#/properties/messageType/type", keyword: "type", params: {
                      type: "integer"
                    }, message: "must be integer" }], false;
                    if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
                      instancePath: i2 + "/messageType",
                      schemaPath: "#/properties/messageType/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    p2 = 0 === t3;
                  } else p2 = true;
                  if (p2) {
                    if (void 0 !== s2.mpCost) {
                      let e3 = s2.mpCost;
                      const t3 = 0;
                      if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                        instancePath: i2 + "/mpCost",
                        schemaPath: "#/properties/mpCost/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      p2 = 0 === t3;
                    } else p2 = true;
                    if (p2) {
                      if (void 0 !== s2.requiredWtypeId1) {
                        let e3 = s2.requiredWtypeId1;
                        const t3 = 0;
                        if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{ instancePath: i2 + "/requiredWtypeId1", schemaPath: "#/properties/requiredWtypeId1/type", keyword: "type", params: {
                          type: "integer"
                        }, message: "must be integer" }], false;
                        if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
                          instancePath: i2 + "/requiredWtypeId1",
                          schemaPath: "#/properties/requiredWtypeId1/minimum",
                          keyword: "minimum",
                          params: { comparison: ">=", limit: 0 },
                          message: "must be >= 0"
                        }], false;
                        p2 = 0 === t3;
                      } else p2 = true;
                      if (p2) {
                        if (void 0 !== s2.requiredWtypeId2) {
                          let e3 = s2.requiredWtypeId2;
                          const t3 = 0;
                          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                            instancePath: i2 + "/requiredWtypeId2",
                            schemaPath: "#/properties/requiredWtypeId2/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
                            instancePath: i2 + "/requiredWtypeId2",
                            schemaPath: "#/properties/requiredWtypeId2/minimum",
                            keyword: "minimum",
                            params: { comparison: ">=", limit: 0 },
                            message: "must be >= 0"
                          }], false;
                          p2 = 0 === t3;
                        } else p2 = true;
                        if (p2) {
                          if (void 0 !== s2.stypeId) {
                            let e3 = s2.stypeId;
                            const t3 = 0;
                            if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                              instancePath: i2 + "/stypeId",
                              schemaPath: "#/properties/stypeId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
                              instancePath: i2 + "/stypeId",
                              schemaPath: "#/properties/stypeId/minimum",
                              keyword: "minimum",
                              params: { comparison: ">=", limit: 0 },
                              message: "must be >= 0"
                            }], false;
                            p2 = 0 === t3;
                          } else p2 = true;
                          if (p2) {
                            if (void 0 !== s2.tpCost) {
                              let e3 = s2.tpCost;
                              const t3 = 0;
                              if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                instancePath: i2 + "/tpCost",
                                schemaPath: "#/properties/tpCost/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              p2 = 0 === t3;
                            } else p2 = true;
                            if (p2) {
                              if (void 0 !== s2.animationId) {
                                let e3 = s2.animationId;
                                const t3 = 0;
                                if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{ instancePath: i2 + "/animationId", schemaPath: "#/properties/animationId/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
                                  instancePath: i2 + "/animationId",
                                  schemaPath: "#/properties/animationId/minimum",
                                  keyword: "minimum",
                                  params: { comparison: ">=", limit: 0 },
                                  message: "must be >= 0"
                                }], false;
                                p2 = 0 === t3;
                              } else p2 = true;
                              if (p2) {
                                if (void 0 !== s2.hitType) {
                                  let e3 = s2.hitType;
                                  const t3 = 0;
                                  if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                    instancePath: i2 + "/hitType",
                                    schemaPath: "#/properties/hitType/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{
                                    instancePath: i2 + "/hitType",
                                    schemaPath: "#/properties/hitType/minimum",
                                    keyword: "minimum",
                                    params: { comparison: ">=", limit: 0 },
                                    message: "must be >= 0"
                                  }], false;
                                  p2 = 0 === t3;
                                } else p2 = true;
                                if (p2) {
                                  if (void 0 !== s2.occasion) {
                                    let e3 = s2.occasion;
                                    const t3 = 0;
                                    if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                      instancePath: i2 + "/occasion",
                                      schemaPath: "#/properties/occasion/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    p2 = 0 === t3;
                                  } else p2 = true;
                                  if (p2) {
                                    if (void 0 !== s2.repeats) {
                                      let e3 = s2.repeats;
                                      const t3 = 0;
                                      if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                        instancePath: i2 + "/repeats",
                                        schemaPath: "#/properties/repeats/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      if ("number" == typeof e3 && isFinite(e3) && (e3 < 0 || isNaN(e3))) return r2.errors = [{ instancePath: i2 + "/repeats", schemaPath: "#/properties/repeats/minimum", keyword: "minimum", params: {
                                        comparison: ">=",
                                        limit: 0
                                      }, message: "must be >= 0" }], false;
                                      p2 = 0 === t3;
                                    } else p2 = true;
                                    if (p2) {
                                      if (void 0 !== s2.scope) {
                                        let e3 = s2.scope;
                                        const t3 = 0;
                                        if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                          instancePath: i2 + "/scope",
                                          schemaPath: "#/properties/scope/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], false;
                                        p2 = 0 === t3;
                                      } else p2 = true;
                                      if (p2) {
                                        if (void 0 !== s2.speed) {
                                          let e3 = s2.speed;
                                          const t3 = 0;
                                          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                            instancePath: i2 + "/speed",
                                            schemaPath: "#/properties/speed/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          p2 = 0 === t3;
                                        } else p2 = true;
                                        if (p2) {
                                          if (void 0 !== s2.successRate) {
                                            let e3 = s2.successRate;
                                            const t3 = 0;
                                            if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{
                                              instancePath: i2 + "/successRate",
                                              schemaPath: "#/properties/successRate/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            p2 = 0 === t3;
                                          } else p2 = true;
                                          if (p2) {
                                            if (void 0 !== s2.tpGain) {
                                              let e3 = s2.tpGain;
                                              const t3 = 0;
                                              if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return r2.errors = [{ instancePath: i2 + "/tpGain", schemaPath: "#/properties/tpGain/type", keyword: "type", params: {
                                                type: "integer"
                                              }, message: "must be integer" }], false;
                                              p2 = 0 === t3;
                                            } else p2 = true;
                                            if (p2) {
                                              if (void 0 !== s2.note) {
                                                const e3 = 0;
                                                if ("string" != typeof s2.note) return r2.errors = [{
                                                  instancePath: i2 + "/note",
                                                  schemaPath: "#/properties/note/type",
                                                  keyword: "type",
                                                  params: { type: "string" },
                                                  message: "must be string"
                                                }], false;
                                                p2 = 0 === e3;
                                              } else p2 = true;
                                              if (p2) {
                                                if (void 0 !== s2.effects) {
                                                  let e3 = s2.effects;
                                                  const t3 = 0;
                                                  if (!Array.isArray(e3)) return r2.errors = [{ instancePath: i2 + "/effects", schemaPath: "#/properties/effects/type", keyword: "type", params: { type: "array" }, message: "must be array" }], false;
                                                  {
                                                    const t4 = e3.length;
                                                    for (let s3 = 0; s3 < t4; s3++) {
                                                      let t5 = e3[s3];
                                                      const a4 = 0;
                                                      if (!t5 || "object" != typeof t5 || Array.isArray(t5)) return r2.errors = [{
                                                        instancePath: i2 + "/effects/" + s3,
                                                        schemaPath: "#/properties/effects/items/type",
                                                        keyword: "type",
                                                        params: { type: "object" },
                                                        message: "must be object"
                                                      }], false;
                                                      {
                                                        let e4;
                                                        if (void 0 === t5.code && (e4 = "code") || void 0 === t5.dataId && (e4 = "dataId") || void 0 === t5.value1 && (e4 = "value1") || void 0 === t5.value2 && (e4 = "value2")) return r2.errors = [{
                                                          instancePath: i2 + "/effects/" + s3,
                                                          schemaPath: "#/properties/effects/items/required",
                                                          keyword: "required",
                                                          params: { missingProperty: e4 },
                                                          message: "must have required property '" + e4 + "'"
                                                        }], false;
                                                        for (const e5 in t5) if ("code" !== e5 && "dataId" !== e5 && "value1" !== e5 && "value2" !== e5) return r2.errors = [{
                                                          instancePath: i2 + "/effects/" + s3,
                                                          schemaPath: "#/properties/effects/items/additionalProperties",
                                                          keyword: "additionalProperties",
                                                          params: { additionalProperty: e5 },
                                                          message: "must NOT have additional properties"
                                                        }], false;
                                                        if (void 0 !== t5.code) {
                                                          let e5 = t5.code;
                                                          const a5 = 0;
                                                          if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return r2.errors = [{
                                                            instancePath: i2 + "/effects/" + s3 + "/code",
                                                            schemaPath: "#/properties/effects/items/properties/code/type",
                                                            keyword: "type",
                                                            params: { type: "integer" },
                                                            message: "must be integer"
                                                          }], false;
                                                          var m2 = 0 === a5;
                                                        } else m2 = true;
                                                        if (m2) {
                                                          if (void 0 !== t5.dataId) {
                                                            let e5 = t5.dataId;
                                                            const a5 = 0;
                                                            if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return r2.errors = [{
                                                              instancePath: i2 + "/effects/" + s3 + "/dataId",
                                                              schemaPath: "#/properties/effects/items/properties/dataId/type",
                                                              keyword: "type",
                                                              params: { type: "integer" },
                                                              message: "must be integer"
                                                            }], false;
                                                            if ("number" == typeof e5 && isFinite(e5) && (e5 < 0 || isNaN(e5))) return r2.errors = [{
                                                              instancePath: i2 + "/effects/" + s3 + "/dataId",
                                                              schemaPath: "#/properties/effects/items/properties/dataId/minimum",
                                                              keyword: "minimum",
                                                              params: { comparison: ">=", limit: 0 },
                                                              message: "must be >= 0"
                                                            }], false;
                                                            m2 = 0 === a5;
                                                          } else m2 = true;
                                                          if (m2) {
                                                            if (void 0 !== t5.value1) {
                                                              let e5 = t5.value1;
                                                              const a5 = 0;
                                                              if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return r2.errors = [{
                                                                instancePath: i2 + "/effects/" + s3 + "/value1",
                                                                schemaPath: "#/properties/effects/items/properties/value1/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], false;
                                                              m2 = 0 === a5;
                                                            } else m2 = true;
                                                            if (m2) if (void 0 !== t5.value2) {
                                                              let e5 = t5.value2;
                                                              const a5 = 0;
                                                              if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return r2.errors = [{
                                                                instancePath: i2 + "/effects/" + s3 + "/value2",
                                                                schemaPath: "#/properties/effects/items/properties/value2/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], false;
                                                              m2 = 0 === a5;
                                                            } else m2 = true;
                                                          }
                                                        }
                                                      }
                                                      if (!(0 === a4)) break;
                                                    }
                                                  }
                                                  p2 = 0 === t3;
                                                } else p2 = true;
                                                if (p2) if (void 0 !== s2.damage) {
                                                  let e3 = s2.damage;
                                                  const t3 = 0;
                                                  if (!e3 || "object" != typeof e3 || Array.isArray(e3)) return r2.errors = [{
                                                    instancePath: i2 + "/damage",
                                                    schemaPath: "#/properties/damage/type",
                                                    keyword: "type",
                                                    params: { type: "object" },
                                                    message: "must be object"
                                                  }], false;
                                                  {
                                                    let t4;
                                                    if (void 0 === e3.type && (t4 = "type") || void 0 === e3.elementId && (t4 = "elementId") || void 0 === e3.formula && (t4 = "formula") || void 0 === e3.variance && (t4 = "variance") || void 0 === e3.critical && (t4 = "critical")) return r2.errors = [{
                                                      instancePath: i2 + "/damage",
                                                      schemaPath: "#/properties/damage/required",
                                                      keyword: "required",
                                                      params: { missingProperty: t4 },
                                                      message: "must have required property '" + t4 + "'"
                                                    }], false;
                                                    for (const t5 in e3) if ("type" !== t5 && "elementId" !== t5 && "formula" !== t5 && "variance" !== t5 && "critical" !== t5) return r2.errors = [{
                                                      instancePath: i2 + "/damage",
                                                      schemaPath: "#/properties/damage/additionalProperties",
                                                      keyword: "additionalProperties",
                                                      params: { additionalProperty: t5 },
                                                      message: "must NOT have additional properties"
                                                    }], false;
                                                    if (void 0 !== e3.type) {
                                                      let t5 = e3.type;
                                                      const s3 = 0;
                                                      if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return r2.errors = [{
                                                        instancePath: i2 + "/damage/type",
                                                        schemaPath: "#/properties/damage/properties/type/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], false;
                                                      var y2 = 0 === s3;
                                                    } else y2 = true;
                                                    if (y2) {
                                                      if (void 0 !== e3.elementId) {
                                                        let t5 = e3.elementId;
                                                        const s3 = 0;
                                                        if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return r2.errors = [{
                                                          instancePath: i2 + "/damage/elementId",
                                                          schemaPath: "#/properties/damage/properties/elementId/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        }], false;
                                                        if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return r2.errors = [{
                                                          instancePath: i2 + "/damage/elementId",
                                                          schemaPath: "#/properties/damage/properties/elementId/minimum",
                                                          keyword: "minimum",
                                                          params: { comparison: ">=", limit: 0 },
                                                          message: "must be >= 0"
                                                        }], false;
                                                        y2 = 0 === s3;
                                                      } else y2 = true;
                                                      if (y2) {
                                                        if (void 0 !== e3.formula) {
                                                          const t5 = 0;
                                                          if ("string" != typeof e3.formula) return r2.errors = [{
                                                            instancePath: i2 + "/damage/formula",
                                                            schemaPath: "#/properties/damage/properties/formula/type",
                                                            keyword: "type",
                                                            params: { type: "string" },
                                                            message: "must be string"
                                                          }], false;
                                                          y2 = 0 === t5;
                                                        } else y2 = true;
                                                        if (y2) {
                                                          if (void 0 !== e3.variance) {
                                                            let t5 = e3.variance;
                                                            const s3 = 0;
                                                            if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return r2.errors = [{
                                                              instancePath: i2 + "/damage/variance",
                                                              schemaPath: "#/properties/damage/properties/variance/type",
                                                              keyword: "type",
                                                              params: { type: "integer" },
                                                              message: "must be integer"
                                                            }], false;
                                                            y2 = 0 === s3;
                                                          } else y2 = true;
                                                          if (y2) if (void 0 !== e3.critical) {
                                                            const t5 = 0;
                                                            if ("boolean" != typeof e3.critical) return r2.errors = [{
                                                              instancePath: i2 + "/damage/critical",
                                                              schemaPath: "#/properties/damage/properties/critical/type",
                                                              keyword: "type",
                                                              params: { type: "boolean" },
                                                              message: "must be boolean"
                                                            }], false;
                                                            y2 = 0 === t5;
                                                          } else y2 = true;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  p2 = 0 === t3;
                                                } else p2 = true;
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
                  }
                }
              }
            }
          }
        }
      }
    }
    return r2.errors = null, true;
  }
  return x.exports;
}()), A = (e2) => q(e2);
var T, j = { exports: {} };
const D = e(function() {
  if (T) return j.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.iconIndex && (s3 = "iconIndex") || void 0 === t2.message1 && (s3 = "message1") || void 0 === t2.message2 && (s3 = "message2") || void 0 === t2.message3 && (s3 = "message3") || void 0 === t2.message4 && (s3 = "message4") || void 0 === t2.restriction && (s3 = "restriction") || void 0 === t2.priority && (s3 = "priority") || void 0 === t2.motion && (s3 = "motion") || void 0 === t2.overlay && (s3 = "overlay") || void 0 === t2.removeAtBattleEnd && (s3 = "removeAtBattleEnd") || void 0 === t2.removeByDamage && (s3 = "removeByDamage") || void 0 === t2.removeByWalking && (s3 = "removeByWalking") || void 0 === t2.removeByRestriction && (s3 = "removeByRestriction") || void 0 === t2.autoRemovalTiming && (s3 = "autoRemovalTiming") || void 0 === t2.minTurns && (s3 = "minTurns") || void 0 === t2.maxTurns && (s3 = "maxTurns") || void 0 === t2.chanceByDamage && (s3 = "chanceByDamage") || void 0 === t2.stepsToRemove && (s3 = "stepsToRemove") || void 0 === t2.note && (s3 = "note")) return e2.errors = [{
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
          const i3 = 0;
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
          n2 = 0 === i3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.iconIndex) {
            let s4 = t2.iconIndex;
            const i3 = 0;
            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
              instancePath: r2 + "/iconIndex",
              schemaPath: "#/properties/iconIndex/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer"
            }], false;
            if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{ instancePath: r2 + "/iconIndex", schemaPath: "#/properties/iconIndex/minimum", keyword: "minimum", params: {
              comparison: ">=",
              limit: 0
            }, message: "must be >= 0" }], false;
            n2 = 0 === i3;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.message1) {
              const s4 = 0;
              if ("string" != typeof t2.message1) return e2.errors = [{
                instancePath: r2 + "/message1",
                schemaPath: "#/properties/message1/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], false;
              n2 = 0 === s4;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.message2) {
                const s4 = 0;
                if ("string" != typeof t2.message2) return e2.errors = [{ instancePath: r2 + "/message2", schemaPath: "#/properties/message2/type", keyword: "type", params: {
                  type: "string"
                }, message: "must be string" }], false;
                n2 = 0 === s4;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.message3) {
                  const s4 = 0;
                  if ("string" != typeof t2.message3) return e2.errors = [{
                    instancePath: r2 + "/message3",
                    schemaPath: "#/properties/message3/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], false;
                  n2 = 0 === s4;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.message4) {
                    const s4 = 0;
                    if ("string" != typeof t2.message4) return e2.errors = [{
                      instancePath: r2 + "/message4",
                      schemaPath: "#/properties/message4/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], false;
                    n2 = 0 === s4;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.restriction) {
                      let s4 = t2.restriction;
                      const i3 = 0;
                      if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                        instancePath: r2 + "/restriction",
                        schemaPath: "#/properties/restriction/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.priority) {
                        let s4 = t2.priority;
                        const i3 = 0;
                        if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                          instancePath: r2 + "/priority",
                          schemaPath: "#/properties/priority/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.motion) {
                          let s4 = t2.motion;
                          const i3 = 0;
                          if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                            instancePath: r2 + "/motion",
                            schemaPath: "#/properties/motion/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.overlay) {
                            let s4 = t2.overlay;
                            const i3 = 0;
                            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                              instancePath: r2 + "/overlay",
                              schemaPath: "#/properties/overlay/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === i3;
                          } else n2 = true;
                          if (n2) {
                            if (void 0 !== t2.removeAtBattleEnd) {
                              const s4 = 0;
                              if ("boolean" != typeof t2.removeAtBattleEnd) return e2.errors = [{
                                instancePath: r2 + "/removeAtBattleEnd",
                                schemaPath: "#/properties/removeAtBattleEnd/type",
                                keyword: "type",
                                params: { type: "boolean" },
                                message: "must be boolean"
                              }], false;
                              n2 = 0 === s4;
                            } else n2 = true;
                            if (n2) {
                              if (void 0 !== t2.removeByDamage) {
                                const s4 = 0;
                                if ("boolean" != typeof t2.removeByDamage) return e2.errors = [{ instancePath: r2 + "/removeByDamage", schemaPath: "#/properties/removeByDamage/type", keyword: "type", params: {
                                  type: "boolean"
                                }, message: "must be boolean" }], false;
                                n2 = 0 === s4;
                              } else n2 = true;
                              if (n2) {
                                if (void 0 !== t2.removeByWalking) {
                                  const s4 = 0;
                                  if ("boolean" != typeof t2.removeByWalking) return e2.errors = [{
                                    instancePath: r2 + "/removeByWalking",
                                    schemaPath: "#/properties/removeByWalking/type",
                                    keyword: "type",
                                    params: { type: "boolean" },
                                    message: "must be boolean"
                                  }], false;
                                  n2 = 0 === s4;
                                } else n2 = true;
                                if (n2) {
                                  if (void 0 !== t2.removeByRestriction) {
                                    const s4 = 0;
                                    if ("boolean" != typeof t2.removeByRestriction) return e2.errors = [{
                                      instancePath: r2 + "/removeByRestriction",
                                      schemaPath: "#/properties/removeByRestriction/type",
                                      keyword: "type",
                                      params: { type: "boolean" },
                                      message: "must be boolean"
                                    }], false;
                                    n2 = 0 === s4;
                                  } else n2 = true;
                                  if (n2) {
                                    if (void 0 !== t2.messageType) {
                                      let s4 = t2.messageType;
                                      const i3 = 0;
                                      if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                        instancePath: r2 + "/messageType",
                                        schemaPath: "#/properties/messageType/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      n2 = 0 === i3;
                                    } else n2 = true;
                                    if (n2) {
                                      if (void 0 !== t2.releaseByDamage) {
                                        const s4 = 0;
                                        if ("boolean" != typeof t2.releaseByDamage) return e2.errors = [{
                                          instancePath: r2 + "/releaseByDamage",
                                          schemaPath: "#/properties/releaseByDamage/type",
                                          keyword: "type",
                                          params: { type: "boolean" },
                                          message: "must be boolean"
                                        }], false;
                                        n2 = 0 === s4;
                                      } else n2 = true;
                                      if (n2) {
                                        if (void 0 !== t2.autoRemovalTiming) {
                                          let s4 = t2.autoRemovalTiming;
                                          const i3 = 0;
                                          if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{ instancePath: r2 + "/autoRemovalTiming", schemaPath: "#/properties/autoRemovalTiming/type", keyword: "type", params: {
                                            type: "integer"
                                          }, message: "must be integer" }], false;
                                          n2 = 0 === i3;
                                        } else n2 = true;
                                        if (n2) {
                                          if (void 0 !== t2.minTurns) {
                                            let s4 = t2.minTurns;
                                            const i3 = 0;
                                            if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                              instancePath: r2 + "/minTurns",
                                              schemaPath: "#/properties/minTurns/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            n2 = 0 === i3;
                                          } else n2 = true;
                                          if (n2) {
                                            if (void 0 !== t2.maxTurns) {
                                              let s4 = t2.maxTurns;
                                              const i3 = 0;
                                              if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                                instancePath: r2 + "/maxTurns",
                                                schemaPath: "#/properties/maxTurns/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], false;
                                              n2 = 0 === i3;
                                            } else n2 = true;
                                            if (n2) {
                                              if (void 0 !== t2.chanceByDamage) {
                                                let s4 = t2.chanceByDamage;
                                                const i3 = 0;
                                                if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                                  instancePath: r2 + "/chanceByDamage",
                                                  schemaPath: "#/properties/chanceByDamage/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], false;
                                                n2 = 0 === i3;
                                              } else n2 = true;
                                              if (n2) {
                                                if (void 0 !== t2.stepsToRemove) {
                                                  let s4 = t2.stepsToRemove;
                                                  const i3 = 0;
                                                  if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                                                    instancePath: r2 + "/stepsToRemove",
                                                    schemaPath: "#/properties/stepsToRemove/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], false;
                                                  n2 = 0 === i3;
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
                                                    const i3 = 0;
                                                    if (!Array.isArray(s4)) return e2.errors = [{
                                                      instancePath: r2 + "/traits",
                                                      schemaPath: "#/properties/traits/type",
                                                      keyword: "type",
                                                      params: { type: "array" },
                                                      message: "must be array"
                                                    }], false;
                                                    {
                                                      const t3 = s4.length;
                                                      for (let i4 = 0; i4 < t3; i4++) {
                                                        let t4 = s4[i4];
                                                        const a3 = 0;
                                                        if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                                          instancePath: r2 + "/traits/" + i4,
                                                          schemaPath: "#/properties/traits/items/type",
                                                          keyword: "type",
                                                          params: { type: "object" },
                                                          message: "must be object"
                                                        }], false;
                                                        {
                                                          let s5;
                                                          if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                                            instancePath: r2 + "/traits/" + i4,
                                                            schemaPath: "#/properties/traits/items/required",
                                                            keyword: "required",
                                                            params: { missingProperty: s5 },
                                                            message: "must have required property '" + s5 + "'"
                                                          }], false;
                                                          if (void 0 !== t4.code) {
                                                            let s6 = t4.code;
                                                            const a4 = 0;
                                                            if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                              instancePath: r2 + "/traits/" + i4 + "/code",
                                                              schemaPath: "#/properties/traits/items/properties/code/type",
                                                              keyword: "type",
                                                              params: { type: "integer" },
                                                              message: "must be integer"
                                                            }], false;
                                                            var o2 = 0 === a4;
                                                          } else o2 = true;
                                                          if (o2) {
                                                            if (void 0 !== t4.dataId) {
                                                              let s6 = t4.dataId;
                                                              const a4 = 0;
                                                              if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                                instancePath: r2 + "/traits/" + i4 + "/dataId",
                                                                schemaPath: "#/properties/traits/items/properties/dataId/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], false;
                                                              o2 = 0 === a4;
                                                            } else o2 = true;
                                                            if (o2) if (void 0 !== t4.value) {
                                                              let s6 = t4.value;
                                                              const a4 = 0;
                                                              if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                                                instancePath: r2 + "/traits/" + i4 + "/value",
                                                                schemaPath: "#/properties/traits/items/properties/value/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], false;
                                                              o2 = 0 === a4;
                                                            } else o2 = true;
                                                          }
                                                        }
                                                        if (!(0 === a3)) break;
                                                      }
                                                    }
                                                    n2 = 0 === i3;
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
  return T = 1, j.exports = e2, j.exports.default = e2, j.exports;
}()), B = (e2) => D(e2);
var R, O = { exports: {} };
const W = e(function() {
  if (R) return O.exports;
  function e2(t2, { instancePath: r2 = "", parentData: s2, parentDataProperty: i2, rootData: a2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let s3;
      if (void 0 === t2.name && (s3 = "name") || void 0 === t2.id && (s3 = "id") || void 0 === t2.description && (s3 = "description") || void 0 === t2.iconIndex && (s3 = "iconIndex") || void 0 === t2.price && (s3 = "price") || void 0 === t2.params && (s3 = "params") || void 0 === t2.traits && (s3 = "traits") || void 0 === t2.note && (s3 = "note") || void 0 === t2.etypeId && (s3 = "etypeId") || void 0 === t2.animationId && (s3 = "animationId")) return e2.errors = [{
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
          const i3 = 0;
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
          n2 = 0 === i3;
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
              const i3 = 0;
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
              n2 = 0 === i3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.price) {
                let s4 = t2.price;
                const i3 = 0;
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
                n2 = 0 === i3;
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
                    const i3 = 0;
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
                    n2 = 0 === i3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.wtypeId) {
                      let s4 = t2.wtypeId;
                      const i3 = 0;
                      if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                        instancePath: r2 + "/wtypeId",
                        schemaPath: "#/properties/wtypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                        instancePath: r2 + "/wtypeId",
                        schemaPath: "#/properties/wtypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], false;
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.animationId) {
                        let s4 = t2.animationId;
                        const i3 = 0;
                        if ("number" != typeof s4 || s4 % 1 || isNaN(s4) || !isFinite(s4)) return e2.errors = [{
                          instancePath: r2 + "/animationId",
                          schemaPath: "#/properties/animationId/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        if ("number" == typeof s4 && isFinite(s4) && (s4 < 0 || isNaN(s4))) return e2.errors = [{
                          instancePath: r2 + "/animationId",
                          schemaPath: "#/properties/animationId/minimum",
                          keyword: "minimum",
                          params: { comparison: ">=", limit: 0 },
                          message: "must be >= 0"
                        }], false;
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.params) {
                          let s4 = t2.params;
                          const i3 = 0;
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
                              const i4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                instancePath: r2 + "/params/0",
                                schemaPath: "#/properties/params/items/0/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              var o2 = 0 === i4;
                            }
                            if (o2) {
                              if (t3 > 1) {
                                let t4 = s4[1];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                o2 = 0 === i4;
                              }
                              if (o2) {
                                if (t3 > 2) {
                                  let t4 = s4[2];
                                  const i4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                    instancePath: r2 + "/params/2",
                                    schemaPath: "#/properties/params/items/2/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o2 = 0 === i4;
                                }
                                if (o2) {
                                  if (t3 > 3) {
                                    let t4 = s4[3];
                                    const i4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    o2 = 0 === i4;
                                  }
                                  if (o2) {
                                    if (t3 > 4) {
                                      let t4 = s4[4];
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                        instancePath: r2 + "/params/4",
                                        schemaPath: "#/properties/params/items/4/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      o2 = 0 === i4;
                                    }
                                    if (o2) {
                                      if (t3 > 5) {
                                        let t4 = s4[5];
                                        const i4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], false;
                                        o2 = 0 === i4;
                                      }
                                      if (o2) {
                                        if (t3 > 6) {
                                          let t4 = s4[6];
                                          const i4 = 0;
                                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                            instancePath: r2 + "/params/6",
                                            schemaPath: "#/properties/params/items/6/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          o2 = 0 === i4;
                                        }
                                        if (o2 && t3 > 7) {
                                          let t4 = s4[7];
                                          const i4 = 0;
                                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                            type: "integer"
                                          }, message: "must be integer" }], false;
                                          o2 = 0 === i4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.damage) {
                            let s4 = t2.damage;
                            const i3 = 0;
                            if (!s4 || "object" != typeof s4 || Array.isArray(s4)) return e2.errors = [{
                              instancePath: r2 + "/damage",
                              schemaPath: "#/properties/damage/type",
                              keyword: "type",
                              params: { type: "object" },
                              message: "must be object"
                            }], false;
                            {
                              let t3;
                              if (void 0 === s4.type && (t3 = "type") || void 0 === s4.elementId && (t3 = "elementId") || void 0 === s4.formula && (t3 = "formula") || void 0 === s4.variance && (t3 = "variance") || void 0 === s4.critical && (t3 = "critical")) return e2.errors = [{
                                instancePath: r2 + "/damage",
                                schemaPath: "#/properties/damage/required",
                                keyword: "required",
                                params: { missingProperty: t3 },
                                message: "must have required property '" + t3 + "'"
                              }], false;
                              if (void 0 !== s4.type) {
                                let t4 = s4.type;
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/damage/type",
                                  schemaPath: "#/properties/damage/properties/type/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                if ("number" == typeof t4 && isFinite(t4) && (t4 < 0 || isNaN(t4))) return e2.errors = [{
                                  instancePath: r2 + "/damage/type",
                                  schemaPath: "#/properties/damage/properties/type/minimum",
                                  keyword: "minimum",
                                  params: { comparison: ">=", limit: 0 },
                                  message: "must be >= 0"
                                }], false;
                                var p2 = 0 === i4;
                              } else p2 = true;
                              if (p2) {
                                if (void 0 !== s4.elementId) {
                                  let t4 = s4.elementId;
                                  const i4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                    instancePath: r2 + "/damage/elementId",
                                    schemaPath: "#/properties/damage/properties/elementId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  if ("number" == typeof t4 && isFinite(t4) && (t4 < 0 || isNaN(t4))) return e2.errors = [{
                                    instancePath: r2 + "/damage/elementId",
                                    schemaPath: "#/properties/damage/properties/elementId/minimum",
                                    keyword: "minimum",
                                    params: { comparison: ">=", limit: 0 },
                                    message: "must be >= 0"
                                  }], false;
                                  p2 = 0 === i4;
                                } else p2 = true;
                                if (p2) {
                                  if (void 0 !== s4.formula) {
                                    const t4 = 0;
                                    if ("string" != typeof s4.formula) return e2.errors = [{
                                      instancePath: r2 + "/damage/formula",
                                      schemaPath: "#/properties/damage/properties/formula/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string"
                                    }], false;
                                    p2 = 0 === t4;
                                  } else p2 = true;
                                  if (p2) {
                                    if (void 0 !== s4.variance) {
                                      let t4 = s4.variance;
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                        instancePath: r2 + "/damage/variance",
                                        schemaPath: "#/properties/damage/properties/variance/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      if ("number" == typeof t4 && isFinite(t4)) {
                                        if (t4 > 100 || isNaN(t4)) return e2.errors = [{
                                          instancePath: r2 + "/damage/variance",
                                          schemaPath: "#/properties/damage/properties/variance/maximum",
                                          keyword: "maximum",
                                          params: { comparison: "<=", limit: 100 },
                                          message: "must be <= 100"
                                        }], false;
                                        if (t4 < 0 || isNaN(t4)) return e2.errors = [{
                                          instancePath: r2 + "/damage/variance",
                                          schemaPath: "#/properties/damage/properties/variance/minimum",
                                          keyword: "minimum",
                                          params: { comparison: ">=", limit: 0 },
                                          message: "must be >= 0"
                                        }], false;
                                      }
                                      p2 = 0 === i4;
                                    } else p2 = true;
                                    if (p2) if (void 0 !== s4.critical) {
                                      const t4 = 0;
                                      if ("boolean" != typeof s4.critical) return e2.errors = [{
                                        instancePath: r2 + "/damage/critical",
                                        schemaPath: "#/properties/damage/properties/critical/type",
                                        keyword: "type",
                                        params: { type: "boolean" },
                                        message: "must be boolean"
                                      }], false;
                                      p2 = 0 === t4;
                                    } else p2 = true;
                                  }
                                }
                              }
                            }
                            n2 = 0 === i3;
                          } else n2 = true;
                          if (n2) if (void 0 !== t2.traits) {
                            let s4 = t2.traits;
                            const i3 = 0;
                            if (!Array.isArray(s4)) return e2.errors = [{ instancePath: r2 + "/traits", schemaPath: "#/properties/traits/type", keyword: "type", params: {
                              type: "array"
                            }, message: "must be array" }], false;
                            {
                              const t3 = s4.length;
                              for (let i4 = 0; i4 < t3; i4++) {
                                let t4 = s4[i4];
                                const a3 = 0;
                                if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                  instancePath: r2 + "/traits/" + i4,
                                  schemaPath: "#/properties/traits/items/type",
                                  keyword: "type",
                                  params: { type: "object" },
                                  message: "must be object"
                                }], false;
                                {
                                  let s5;
                                  if (void 0 === t4.code && (s5 = "code") || void 0 === t4.dataId && (s5 = "dataId") || void 0 === t4.value && (s5 = "value")) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + i4,
                                    schemaPath: "#/properties/traits/items/required",
                                    keyword: "required",
                                    params: { missingProperty: s5 },
                                    message: "must have required property '" + s5 + "'"
                                  }], false;
                                  if (void 0 !== t4.code) {
                                    let s6 = t4.code;
                                    const a4 = 0;
                                    if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                      instancePath: r2 + "/traits/" + i4 + "/code",
                                      schemaPath: "#/properties/traits/items/properties/code/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    var m2 = 0 === a4;
                                  } else m2 = true;
                                  if (m2) {
                                    if (void 0 !== t4.dataId) {
                                      let s6 = t4.dataId;
                                      const a4 = 0;
                                      if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                        instancePath: r2 + "/traits/" + i4 + "/dataId",
                                        schemaPath: "#/properties/traits/items/properties/dataId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      m2 = 0 === a4;
                                    } else m2 = true;
                                    if (m2) if (void 0 !== t4.value) {
                                      let s6 = t4.value;
                                      const a4 = 0;
                                      if ("number" != typeof s6 || s6 % 1 || isNaN(s6) || !isFinite(s6)) return e2.errors = [{
                                        instancePath: r2 + "/traits/" + i4 + "/value",
                                        schemaPath: "#/properties/traits/items/properties/value/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      m2 = 0 === a4;
                                    } else m2 = true;
                                  }
                                }
                                if (!(0 === a3)) break;
                              }
                            }
                            n2 = 0 === i3;
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
    return e2.errors = null, true;
  }
  return R = 1, O.exports = e2, O.exports.default = e2, O.exports;
}()), C = (e2) => W(e2);
export {
  i as isAudioCommand,
  p as isDataActor,
  d as isDataArmor,
  g as isDataClass,
  v as isDataEnemy,
  I as isDataItem,
  A as isDataSkill,
  B as isDataState,
  C as isDataWeapon
};
//# sourceMappingURL=validate.es.js.map
