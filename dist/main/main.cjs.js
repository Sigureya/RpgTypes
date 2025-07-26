"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("../features/features.cjs.js"), t = require("../libs/libs.cjs.js"), r = require("../shared/make.cjs.js"), a = require("../shared/mergeItemsSource.cjs.js"), s = require("../shared/plugin.cjs.js"), o = require("../shared/namedItems.cjs.js"), i = require("../shared/index.cjs.js");
var p, m = { exports: {} };
var E = function() {
  if (p) return m.exports;
  function e2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: s2, rootData: o2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{ instancePath: r2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
    {
      let a3;
      if (void 0 === t2.name && (a3 = "name") || void 0 === t2.id && (a3 = "id") || void 0 === t2.nickname && (a3 = "nickname") || void 0 === t2.battlerName && (a3 = "battlerName") || void 0 === t2.characterName && (a3 = "characterName") || void 0 === t2.characterIndex && (a3 = "characterIndex") || void 0 === t2.faceName && (a3 = "faceName") || void 0 === t2.faceIndex && (a3 = "faceIndex") || void 0 === t2.classId && (a3 = "classId") || void 0 === t2.initialLevel && (a3 = "initialLevel") || void 0 === t2.maxLevel && (a3 = "maxLevel")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const a4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var i2 = 0 === a4;
      } else i2 = true;
      if (i2) {
        if (void 0 !== t2.battlerName) {
          const a4 = 0;
          if ("string" != typeof t2.battlerName) return e2.errors = [{
            instancePath: r2 + "/battlerName",
            schemaPath: "#/properties/battlerName/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], false;
          i2 = 0 === a4;
        } else i2 = true;
        if (i2) {
          if (void 0 !== t2.characterName) {
            const a4 = 0;
            if ("string" != typeof t2.characterName) return e2.errors = [{
              instancePath: r2 + "/characterName",
              schemaPath: "#/properties/characterName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            i2 = 0 === a4;
          } else i2 = true;
          if (i2) {
            if (void 0 !== t2.characterIndex) {
              let a4 = t2.characterIndex;
              const s3 = 0;
              if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{ instancePath: r2 + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], false;
              i2 = 0 === s3;
            } else i2 = true;
            if (i2) {
              if (void 0 !== t2.faceName) {
                const a4 = 0;
                if ("string" != typeof t2.faceName) return e2.errors = [{
                  instancePath: r2 + "/faceName",
                  schemaPath: "#/properties/faceName/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                i2 = 0 === a4;
              } else i2 = true;
              if (i2) {
                if (void 0 !== t2.faceIndex) {
                  let a4 = t2.faceIndex;
                  const s3 = 0;
                  if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                    instancePath: r2 + "/faceIndex",
                    schemaPath: "#/properties/faceIndex/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof a4 && isFinite(a4)) {
                    if (a4 > 7 || isNaN(a4)) return e2.errors = [{
                      instancePath: r2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 7 },
                      message: "must be <= 7"
                    }], false;
                    if (a4 < 0 || isNaN(a4)) return e2.errors = [{
                      instancePath: r2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                  }
                  i2 = 0 === s3;
                } else i2 = true;
                if (i2) {
                  if (void 0 !== t2.id) {
                    let a4 = t2.id;
                    const s3 = 0;
                    if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                      instancePath: r2 + "/id",
                      schemaPath: "#/properties/id/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                      instancePath: r2 + "/id",
                      schemaPath: "#/properties/id/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    i2 = 0 === s3;
                  } else i2 = true;
                  if (i2) {
                    if (void 0 !== t2.nickname) {
                      const a4 = 0;
                      if ("string" != typeof t2.nickname) return e2.errors = [{
                        instancePath: r2 + "/nickname",
                        schemaPath: "#/properties/nickname/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], false;
                      i2 = 0 === a4;
                    } else i2 = true;
                    if (i2) {
                      if (void 0 !== t2.profile) {
                        const a4 = 0;
                        if ("string" != typeof t2.profile) return e2.errors = [{ instancePath: r2 + "/profile", schemaPath: "#/properties/profile/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
                        i2 = 0 === a4;
                      } else i2 = true;
                      if (i2) {
                        if (void 0 !== t2.initialLevel) {
                          let a4 = t2.initialLevel;
                          const s3 = 0;
                          if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                            instancePath: r2 + "/initialLevel",
                            schemaPath: "#/properties/initialLevel/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{ instancePath: r2 + "/initialLevel", schemaPath: "#/properties/initialLevel/minimum", keyword: "minimum", params: {
                            comparison: ">=",
                            limit: 0
                          }, message: "must be >= 0" }], false;
                          i2 = 0 === s3;
                        } else i2 = true;
                        if (i2) {
                          if (void 0 !== t2.maxLevel) {
                            let a4 = t2.maxLevel;
                            const s3 = 0;
                            if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                              instancePath: r2 + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            i2 = 0 === s3;
                          } else i2 = true;
                          if (i2) {
                            if (void 0 !== t2.classId) {
                              let a4 = t2.classId;
                              const s3 = 0;
                              if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                                instancePath: r2 + "/classId",
                                schemaPath: "#/properties/classId/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{ instancePath: r2 + "/classId", schemaPath: "#/properties/classId/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: 0
                              }, message: "must be >= 0" }], false;
                              i2 = 0 === s3;
                            } else i2 = true;
                            if (i2) {
                              if (void 0 !== t2.equips) {
                                let a4 = t2.equips;
                                const s3 = 0;
                                if (!Array.isArray(a4)) return e2.errors = [{
                                  instancePath: r2 + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], false;
                                {
                                  const t3 = a4.length;
                                  for (let s4 = 0; s4 < t3; s4++) {
                                    let t4 = a4[s4];
                                    const o3 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/equips/" + s4, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    if (!(0 === o3)) break;
                                  }
                                }
                                i2 = 0 === s3;
                              } else i2 = true;
                              if (i2) {
                                if (void 0 !== t2.note) {
                                  const a4 = 0;
                                  if ("string" != typeof t2.note) return e2.errors = [{
                                    instancePath: r2 + "/note",
                                    schemaPath: "#/properties/note/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], false;
                                  i2 = 0 === a4;
                                } else i2 = true;
                                if (i2) if (void 0 !== t2.traits) {
                                  let a4 = t2.traits;
                                  const s3 = 0;
                                  if (!Array.isArray(a4)) return e2.errors = [{
                                    instancePath: r2 + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], false;
                                  {
                                    const t3 = a4.length;
                                    for (let s4 = 0; s4 < t3; s4++) {
                                      let t4 = a4[s4];
                                      const o3 = 0;
                                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                        instancePath: r2 + "/traits/" + s4,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], false;
                                      {
                                        let a5;
                                        if (void 0 === t4.code && (a5 = "code") || void 0 === t4.dataId && (a5 = "dataId") || void 0 === t4.value && (a5 = "value")) return e2.errors = [{
                                          instancePath: r2 + "/traits/" + s4,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: a5 },
                                          message: "must have required property '" + a5 + "'"
                                        }], false;
                                        if (void 0 !== t4.code) {
                                          let a6 = t4.code;
                                          const o4 = 0;
                                          if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                            instancePath: r2 + "/traits/" + s4 + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          var p2 = 0 === o4;
                                        } else p2 = true;
                                        if (p2) {
                                          if (void 0 !== t4.dataId) {
                                            let a6 = t4.dataId;
                                            const o4 = 0;
                                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + s4 + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            p2 = 0 === o4;
                                          } else p2 = true;
                                          if (p2) if (void 0 !== t4.value) {
                                            let a6 = t4.value;
                                            const o4 = 0;
                                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                              instancePath: r2 + "/traits/" + s4 + "/value",
                                              schemaPath: "#/properties/traits/items/properties/value/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            p2 = 0 === o4;
                                          } else p2 = true;
                                        }
                                      }
                                      if (!(0 === o3)) break;
                                    }
                                  }
                                  i2 = 0 === s3;
                                } else i2 = true;
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
  return p = 1, m.exports = e2, m.exports.default = e2, m.exports;
}();
const n = i.getDefaultExportFromCjs(E);
var _, A = { exports: {} };
var T = function() {
  if (_) return A.exports;
  function e2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: s2, rootData: o2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let a3;
      if (void 0 === t2.name && (a3 = "name") || void 0 === t2.id && (a3 = "id") || void 0 === t2.description && (a3 = "description") || void 0 === t2.iconIndex && (a3 = "iconIndex") || void 0 === t2.price && (a3 = "price") || void 0 === t2.params && (a3 = "params") || void 0 === t2.traits && (a3 = "traits") || void 0 === t2.note && (a3 = "note") || void 0 === t2.etypeId && (a3 = "etypeId") || void 0 === t2.atypeId && (a3 = "atypeId")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const a4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var i2 = 0 === a4;
      } else i2 = true;
      if (i2) {
        if (void 0 !== t2.id) {
          let a4 = t2.id;
          const s3 = 0;
          if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          i2 = 0 === s3;
        } else i2 = true;
        if (i2) {
          if (void 0 !== t2.description) {
            const a4 = 0;
            if ("string" != typeof t2.description) return e2.errors = [{
              instancePath: r2 + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            i2 = 0 === a4;
          } else i2 = true;
          if (i2) {
            if (void 0 !== t2.iconIndex) {
              let a4 = t2.iconIndex;
              const s3 = 0;
              if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                instancePath: r2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], false;
              if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                instancePath: r2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], false;
              i2 = 0 === s3;
            } else i2 = true;
            if (i2) {
              if (void 0 !== t2.price) {
                let a4 = t2.price;
                const s3 = 0;
                if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                  instancePath: r2 + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                  instancePath: r2 + "/price",
                  schemaPath: "#/properties/price/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], false;
                i2 = 0 === s3;
              } else i2 = true;
              if (i2) {
                if (void 0 !== t2.note) {
                  const a4 = 0;
                  if ("string" != typeof t2.note) return e2.errors = [{
                    instancePath: r2 + "/note",
                    schemaPath: "#/properties/note/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], false;
                  i2 = 0 === a4;
                } else i2 = true;
                if (i2) {
                  if (void 0 !== t2.etypeId) {
                    let a4 = t2.etypeId;
                    const s3 = 0;
                    if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                      instancePath: r2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                      instancePath: r2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    i2 = 0 === s3;
                  } else i2 = true;
                  if (i2) {
                    if (void 0 !== t2.atypeId) {
                      let a4 = t2.atypeId;
                      const s3 = 0;
                      if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
                        instancePath: r2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
                        instancePath: r2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], false;
                      i2 = 0 === s3;
                    } else i2 = true;
                    if (i2) {
                      if (void 0 !== t2.params) {
                        let a4 = t2.params;
                        const s3 = 0;
                        if (!Array.isArray(a4)) return e2.errors = [{
                          instancePath: r2 + "/params",
                          schemaPath: "#/properties/params/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        if (a4.length > 8) return e2.errors = [{
                          instancePath: r2 + "/params",
                          schemaPath: "#/properties/params/maxItems",
                          keyword: "maxItems",
                          params: { limit: 8 },
                          message: "must NOT have more than 8 items"
                        }], false;
                        if (a4.length < 8) return e2.errors = [{ instancePath: r2 + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                          limit: 8
                        }, message: "must NOT have fewer than 8 items" }], false;
                        {
                          const t3 = a4.length;
                          if (t3 > 0) {
                            let t4 = a4[0];
                            const s4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/0",
                              schemaPath: "#/properties/params/items/0/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            var p2 = 0 === s4;
                          }
                          if (p2) {
                            if (t3 > 1) {
                              let t4 = a4[1];
                              const s4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              p2 = 0 === s4;
                            }
                            if (p2) {
                              if (t3 > 2) {
                                let t4 = a4[2];
                                const s4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/2",
                                  schemaPath: "#/properties/params/items/2/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                p2 = 0 === s4;
                              }
                              if (p2) {
                                if (t3 > 3) {
                                  let t4 = a4[3];
                                  const s4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                    type: "integer"
                                  }, message: "must be integer" }], false;
                                  p2 = 0 === s4;
                                }
                                if (p2) {
                                  if (t3 > 4) {
                                    let t4 = a4[4];
                                    const s4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                      instancePath: r2 + "/params/4",
                                      schemaPath: "#/properties/params/items/4/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    p2 = 0 === s4;
                                  }
                                  if (p2) {
                                    if (t3 > 5) {
                                      let t4 = a4[5];
                                      const s4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      p2 = 0 === s4;
                                    }
                                    if (p2) {
                                      if (t3 > 6) {
                                        let t4 = a4[6];
                                        const s4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                          instancePath: r2 + "/params/6",
                                          schemaPath: "#/properties/params/items/6/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], false;
                                        p2 = 0 === s4;
                                      }
                                      if (p2 && t3 > 7) {
                                        let t4 = a4[7];
                                        const s4 = 0;
                                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], false;
                                        p2 = 0 === s4;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        i2 = 0 === s3;
                      } else i2 = true;
                      if (i2) if (void 0 !== t2.traits) {
                        let a4 = t2.traits;
                        const s3 = 0;
                        if (!Array.isArray(a4)) return e2.errors = [{
                          instancePath: r2 + "/traits",
                          schemaPath: "#/properties/traits/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const t3 = a4.length;
                          for (let s4 = 0; s4 < t3; s4++) {
                            let t4 = a4[s4];
                            const o3 = 0;
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: r2 + "/traits/" + s4, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let a5;
                              if (void 0 === t4.code && (a5 = "code") || void 0 === t4.dataId && (a5 = "dataId") || void 0 === t4.value && (a5 = "value")) return e2.errors = [{
                                instancePath: r2 + "/traits/" + s4,
                                schemaPath: "#/properties/traits/items/required",
                                keyword: "required",
                                params: { missingProperty: a5 },
                                message: "must have required property '" + a5 + "'"
                              }], false;
                              if (void 0 !== t4.code) {
                                let a6 = t4.code;
                                const o4 = 0;
                                if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                  instancePath: r2 + "/traits/" + s4 + "/code",
                                  schemaPath: "#/properties/traits/items/properties/code/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var m2 = 0 === o4;
                              } else m2 = true;
                              if (m2) {
                                if (void 0 !== t4.dataId) {
                                  let a6 = t4.dataId;
                                  const o4 = 0;
                                  if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + s4 + "/dataId",
                                    schemaPath: "#/properties/traits/items/properties/dataId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  m2 = 0 === o4;
                                } else m2 = true;
                                if (m2) if (void 0 !== t4.value) {
                                  let a6 = t4.value;
                                  const o4 = 0;
                                  if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                                    instancePath: r2 + "/traits/" + s4 + "/value",
                                    schemaPath: "#/properties/traits/items/properties/value/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  m2 = 0 === o4;
                                } else m2 = true;
                              }
                            }
                            if (!(0 === o3)) break;
                          }
                        }
                        i2 = 0 === s3;
                      } else i2 = true;
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
  return _ = 1, A.exports = e2, A.exports.default = e2, A.exports;
}();
const R = i.getDefaultExportFromCjs(T);
var C, y = { exports: {} };
var d = function() {
  if (C) return y.exports;
  function e2(t2, { instancePath: r2 = "", parentData: a2, parentDataProperty: s2, rootData: o2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let a3;
      if (void 0 === t2.name && (a3 = "name") || void 0 === t2.id && (a3 = "id") || void 0 === t2.note && (a3 = "note") || void 0 === t2.expParams && (a3 = "expParams") || void 0 === t2.params && (a3 = "params") || void 0 === t2.learnings && (a3 = "learnings") || void 0 === t2.traits && (a3 = "traits")) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a3 },
        message: "must have required property '" + a3 + "'"
      }], false;
      for (const a4 in t2) if ("name" !== a4 && "id" !== a4 && "note" !== a4 && "expParams" !== a4 && "params" !== a4 && "learnings" !== a4 && "traits" !== a4) return e2.errors = [{
        instancePath: r2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: a4 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== t2.name) {
        const a4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: r2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var i2 = 0 === a4;
      } else i2 = true;
      if (i2) {
        if (void 0 !== t2.id) {
          let a4 = t2.id;
          const s3 = 0;
          if ("number" != typeof a4 || a4 % 1 || isNaN(a4) || !isFinite(a4)) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof a4 && isFinite(a4) && (a4 < 0 || isNaN(a4))) return e2.errors = [{
            instancePath: r2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          i2 = 0 === s3;
        } else i2 = true;
        if (i2) {
          if (void 0 !== t2.note) {
            const a4 = 0;
            if ("string" != typeof t2.note) return e2.errors = [{
              instancePath: r2 + "/note",
              schemaPath: "#/properties/note/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            i2 = 0 === a4;
          } else i2 = true;
          if (i2) {
            if (void 0 !== t2.expParams) {
              let a4 = t2.expParams;
              const s3 = 0;
              if (!Array.isArray(a4)) return e2.errors = [{
                instancePath: r2 + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], false;
              {
                const t3 = a4.length;
                for (let s4 = 0; s4 < t3; s4++) {
                  let t4 = a4[s4];
                  const o3 = 0;
                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/expParams/" + s4, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], false;
                  if (!(0 === o3)) break;
                }
              }
              i2 = 0 === s3;
            } else i2 = true;
            if (i2) {
              if (void 0 !== t2.params) {
                let a4 = t2.params;
                const s3 = 0;
                if (!Array.isArray(a4)) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], false;
                if (a4.length > 8) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/maxItems",
                  keyword: "maxItems",
                  params: { limit: 8 },
                  message: "must NOT have more than 8 items"
                }], false;
                if (a4.length < 8) return e2.errors = [{
                  instancePath: r2 + "/params",
                  schemaPath: "#/properties/params/minItems",
                  keyword: "minItems",
                  params: { limit: 8 },
                  message: "must NOT have fewer than 8 items"
                }], false;
                {
                  const t3 = a4.length;
                  if (t3 > 0) {
                    let t4 = a4[0];
                    const s4 = 0;
                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                      instancePath: r2 + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    var p2 = 0 === s4;
                  }
                  if (p2) {
                    if (t3 > 1) {
                      let t4 = a4[1];
                      const s4 = 0;
                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], false;
                      p2 = 0 === s4;
                    }
                    if (p2) {
                      if (t3 > 2) {
                        let t4 = a4[2];
                        const s4 = 0;
                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                          instancePath: r2 + "/params/2",
                          schemaPath: "#/properties/params/items/2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        p2 = 0 === s4;
                      }
                      if (p2) {
                        if (t3 > 3) {
                          let t4 = a4[3];
                          const s4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          p2 = 0 === s4;
                        }
                        if (p2) {
                          if (t3 > 4) {
                            let t4 = a4[4];
                            const s4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: r2 + "/params/4",
                              schemaPath: "#/properties/params/items/4/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === s4;
                          }
                          if (p2) {
                            if (t3 > 5) {
                              let t4 = a4[5];
                              const s4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              p2 = 0 === s4;
                            }
                            if (p2) {
                              if (t3 > 6) {
                                let t4 = a4[6];
                                const s4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: r2 + "/params/6",
                                  schemaPath: "#/properties/params/items/6/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                p2 = 0 === s4;
                              }
                              if (p2 && t3 > 7) {
                                let t4 = a4[7];
                                const s4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: r2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                p2 = 0 === s4;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                i2 = 0 === s3;
              } else i2 = true;
              if (i2) {
                if (void 0 !== t2.learnings) {
                  let a4 = t2.learnings;
                  const s3 = 0;
                  if (!Array.isArray(a4)) return e2.errors = [{
                    instancePath: r2 + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = a4.length;
                    for (let s4 = 0; s4 < t3; s4++) {
                      let t4 = a4[s4];
                      const o3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/learnings/" + s4,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let a5;
                        if (void 0 === t4.level && (a5 = "level") || void 0 === t4.skillId && (a5 = "skillId")) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + s4,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: a5 },
                          message: "must have required property '" + a5 + "'"
                        }], false;
                        for (const a6 in t4) if ("level" !== a6 && "skillId" !== a6 && "note" !== a6) return e2.errors = [{
                          instancePath: r2 + "/learnings/" + s4,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: a6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.level) {
                          let a6 = t4.level;
                          const o4 = 0;
                          if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                            instancePath: r2 + "/learnings/" + s4 + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var m2 = 0 === o4;
                        } else m2 = true;
                        if (m2) {
                          if (void 0 !== t4.skillId) {
                            let a6 = t4.skillId;
                            const o4 = 0;
                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + s4 + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === o4;
                          } else m2 = true;
                          if (m2) if (void 0 !== t4.note) {
                            const a6 = 0;
                            if ("string" != typeof t4.note) return e2.errors = [{
                              instancePath: r2 + "/learnings/" + s4 + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], false;
                            m2 = 0 === a6;
                          } else m2 = true;
                        }
                      }
                      if (!(0 === o3)) break;
                    }
                  }
                  i2 = 0 === s3;
                } else i2 = true;
                if (i2) if (void 0 !== t2.traits) {
                  let a4 = t2.traits;
                  const s3 = 0;
                  if (!Array.isArray(a4)) return e2.errors = [{
                    instancePath: r2 + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = a4.length;
                    for (let s4 = 0; s4 < t3; s4++) {
                      let t4 = a4[s4];
                      const o3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: r2 + "/traits/" + s4,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let a5;
                        if (void 0 === t4.code && (a5 = "code") || void 0 === t4.dataId && (a5 = "dataId") || void 0 === t4.value && (a5 = "value")) return e2.errors = [{
                          instancePath: r2 + "/traits/" + s4,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: a5 },
                          message: "must have required property '" + a5 + "'"
                        }], false;
                        for (const a6 in t4) if ("code" !== a6 && "dataId" !== a6 && "value" !== a6) return e2.errors = [{
                          instancePath: r2 + "/traits/" + s4,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: a6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.code) {
                          let a6 = t4.code;
                          const o4 = 0;
                          if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                            instancePath: r2 + "/traits/" + s4 + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var E2 = 0 === o4;
                        } else E2 = true;
                        if (E2) {
                          if (void 0 !== t4.dataId) {
                            let a6 = t4.dataId;
                            const o4 = 0;
                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + s4 + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            E2 = 0 === o4;
                          } else E2 = true;
                          if (E2) if (void 0 !== t4.value) {
                            let a6 = t4.value;
                            const o4 = 0;
                            if ("number" != typeof a6 || a6 % 1 || isNaN(a6) || !isFinite(a6)) return e2.errors = [{
                              instancePath: r2 + "/traits/" + s4 + "/value",
                              schemaPath: "#/properties/traits/items/properties/value/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            E2 = 0 === o4;
                          } else E2 = true;
                        }
                      }
                      if (!(0 === o3)) break;
                    }
                  }
                  i2 = 0 === s3;
                } else i2 = true;
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return C = 1, y.exports = e2, y.exports.default = e2, y.exports;
}();
const N = i.getDefaultExportFromCjs(d);
exports.buildReferenceItemSources = e.buildReferenceItemSources, exports.compileItemEffectDisplayData = e.compileItemEffectDisplayData, exports.compileTraitDisplayData = e.compileTraitDisplayData, exports.AUTHOR_RMMZ = t.AUTHOR_RMMZ, exports.SRC_COLOR = t.SRC_COLOR, exports.detectFormatErrors = t.detectFormatErrors, exports.domainNames = t.domainNames, exports.isValidNumber = t.isValidNumber, exports.applyFormatRule = r.applyFormatRule, exports.compileFormatRule = r.compileFormatRule, exports.makeAudioFileParams = r.makeAudioFileParams, exports.mergeItemsSource = a.mergeItemsSource, exports.ABORT_BATTLE = s.ABORT_BATTLE, exports.BATTLE_PROCESSING = s.BATTLE_PROCESSING, exports.CHANGE_ACTOR_IMAGES = s.CHANGE_ACTOR_IMAGES, exports.CHANGE_ARMORS = s.CHANGE_ARMORS, exports.CHANGE_BATTLE_BACKGROUND = s.CHANGE_BATTLE_BACKGROUND, exports.CHANGE_BATTLE_BGM = s.CHANGE_BATTLE_BGM, exports.CHANGE_CLASS = s.CHANGE_CLASS, exports.CHANGE_DEFEAT_ME = s.CHANGE_DEFEAT_ME, exports.CHANGE_ENCOUNTER = s.CHANGE_ENCOUNTER, exports.CHANGE_ENEMY_HP = s.CHANGE_ENEMY_HP, exports.CHANGE_ENEMY_MP = s.CHANGE_ENEMY_MP, exports.CHANGE_ENEMY_STATE = s.CHANGE_ENEMY_STATE, exports.CHANGE_ENEMY_TP = s.CHANGE_ENEMY_TP, exports.CHANGE_EXP = s.CHANGE_EXP, exports.CHANGE_FORMATION_ACCESS = s.CHANGE_FORMATION_ACCESS, exports.CHANGE_GOLD = s.CHANGE_GOLD, exports.CHANGE_HP = s.CHANGE_HP, exports.CHANGE_ITEMS = s.CHANGE_ITEMS, exports.CHANGE_MENU_ACCESS = s.CHANGE_MENU_ACCESS, exports.CHANGE_MP = s.CHANGE_MP, exports.CHANGE_NAME = s.CHANGE_NAME, exports.CHANGE_NICKNAME = s.CHANGE_NICKNAME, exports.CHANGE_PARALLAX = s.CHANGE_PARALLAX, exports.CHANGE_PARTY_MEMBER = s.CHANGE_PARTY_MEMBER, exports.CHANGE_PLAYER_FOLLOWERS = s.CHANGE_PLAYER_FOLLOWERS, exports.CHANGE_PROFILE = s.CHANGE_PROFILE, exports.CHANGE_SAVE_ACCESS = s.CHANGE_SAVE_ACCESS, exports.CHANGE_TILESET = s.CHANGE_TILESET, exports.CHANGE_TP = s.CHANGE_TP, exports.CHANGE_TRANSPARENCY = s.CHANGE_TRANSPARENCY, exports.CHANGE_VEHICLE_BGM = s.CHANGE_VEHICLE_BGM, exports.CHANGE_VEHICLE_IMAGE = s.CHANGE_VEHICLE_IMAGE, exports.CHANGE_VICTORY_ME = s.CHANGE_VICTORY_ME, exports.CHANGE_WEAPONS = s.CHANGE_WEAPONS, exports.CHANGE_WINDOW_COLOR = s.CHANGE_WINDOW_COLOR, exports.COMMENT_BODY = s.COMMENT_BODY, exports.COMMENT_HEAD = s.COMMENT_HEAD, exports.COMMON_EVENT = s.COMMON_EVENT, exports.CONDITIONAL_BRANCH = s.CONDITIONAL_BRANCH, exports.CONDITIONAL_BRANCH_ELSE = s.CONDITIONAL_BRANCH_ELSE, exports.CONTROL_SELF_SWITCH = s.CONTROL_SELF_SWITCH, exports.CONTROL_SWITCHES = s.CONTROL_SWITCHES, exports.CONTROL_TIMER = s.CONTROL_TIMER, exports.CONTROL_VARIABLES = s.CONTROL_VARIABLES, exports.DEFAULT_DAMAGE_LABELS = s.DEFAULT_DAMAGE_LABELS, exports.DEFAULT_GLOBAL_LABELS = s.DEFAULT_GLOBAL_LABELS, exports.DEFAULT_ITEM_LABELS = s.DEFAULT_ITEM_LABELS, exports.DEFAULT_SKILL_LABELS = s.DEFAULT_SKILL_LABELS, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = s.DEFAULT_SYSTEM_LABELS_BOOLEAN, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = s.DEFAULT_SYSTEM_LABELS_DATA_TYPES, exports.DEFAULT_USABLE_ITEM_LABELS = s.DEFAULT_USABLE_ITEM_LABELS, exports.ENEMY_APPEAR = s.ENEMY_APPEAR, exports.ENEMY_RECOVER_ALL = s.ENEMY_RECOVER_ALL, exports.ENEMY_TRANSFORM = s.ENEMY_TRANSFORM, exports.ERASE_EVENT = s.ERASE_EVENT, exports.ERASE_PICTURE = s.ERASE_PICTURE, exports.EXIT_EVENT_PROCESSING = s.EXIT_EVENT_PROCESSING, exports.FADEIN_SCREEN = s.FADEIN_SCREEN, exports.FADEOUT_BGM = s.FADEOUT_BGM, exports.FADEOUT_BGS = s.FADEOUT_BGS, exports.FADEOUT_SCREEN = s.FADEOUT_SCREEN, exports.FILENAME_ACTORS = s.FILENAME_ACTORS, exports.FILENAME_ANIMATIONS = s.FILENAME_ANIMATIONS, exports.FILENAME_ARMORS = s.FILENAME_ARMORS, exports.FILENAME_CLASSES = s.FILENAME_CLASSES, exports.FILENAME_COMMON_EVENTS = s.FILENAME_COMMON_EVENTS, exports.FILENAME_ENEMIES = s.FILENAME_ENEMIES, exports.FILENAME_ITEMS = s.FILENAME_ITEMS, exports.FILENAME_MAP_INFOS = s.FILENAME_MAP_INFOS, exports.FILENAME_SKILLS = s.FILENAME_SKILLS, exports.FILENAME_STATES = s.FILENAME_STATES, exports.FILENAME_SYSTEM = s.FILENAME_SYSTEM, exports.FILENAME_TILESET = s.FILENAME_TILESET, exports.FILENAME_TROOPS = s.FILENAME_TROOPS, exports.FILENAME_WEAPONS = s.FILENAME_WEAPONS, exports.FLASH_SCREEN = s.FLASH_SCREEN, exports.FOLDER_AUDIO = s.FOLDER_AUDIO, exports.FOLDER_AUDIO_BGM = s.FOLDER_AUDIO_BGM, exports.FOLDER_AUDIO_BGS = s.FOLDER_AUDIO_BGS, exports.FOLDER_AUDIO_ME = s.FOLDER_AUDIO_ME, exports.FOLDER_AUDIO_SE = s.FOLDER_AUDIO_SE, exports.FOLDER_DATA = s.FOLDER_DATA, exports.FOLDER_IMG = s.FOLDER_IMG, exports.FOLDER_IMG_BATTLEBACK1 = s.FOLDER_IMG_BATTLEBACK1, exports.FOLDER_IMG_BATTLEBACK2 = s.FOLDER_IMG_BATTLEBACK2, exports.FOLDER_IMG_CHACTERS = s.FOLDER_IMG_CHACTERS, exports.FOLDER_IMG_ENEMIES = s.FOLDER_IMG_ENEMIES, exports.FOLDER_IMG_FACES = s.FOLDER_IMG_FACES, exports.FOLDER_IMG_PARALLACES = s.FOLDER_IMG_PARALLACES, exports.FOLDER_IMG_PICTURES = s.FOLDER_IMG_PICTURES, exports.FOLDER_IMG_SV_ACTORS = s.FOLDER_IMG_SV_ACTORS, exports.FOLDER_IMG_SV_ENEMIES = s.FOLDER_IMG_SV_ENEMIES, exports.FOLDER_IMG_SYSTEM = s.FOLDER_IMG_SYSTEM, exports.FOLDER_IMG_TILESETS = s.FOLDER_IMG_TILESETS, exports.FOLDER_IMG_TITLES1 = s.FOLDER_IMG_TITLES1, exports.FOLDER_IMG_TITLES2 = s.FOLDER_IMG_TITLES2, exports.FOLDER_JS = s.FOLDER_JS, exports.FORCE_ACTION = s.FORCE_ACTION, exports.GAME_OVER = s.GAME_OVER, exports.GATHER_FOLLOWERS = s.GATHER_FOLLOWERS, exports.GET_LOCATION_INFO = s.GET_LOCATION_INFO, exports.GET_ONOFF_VEHICLE = s.GET_ONOFF_VEHICLE, exports.HITTYPE_CERTAIN = s.HITTYPE_CERTAIN, exports.HITTYPE_MAGICAL = s.HITTYPE_MAGICAL, exports.HITTYPE_PHYSICAL = s.HITTYPE_PHYSICAL, exports.INPUT_NUMBER = s.INPUT_NUMBER, exports.LABEL = s.LABEL, exports.LABELS_DATA_WEAPON = s.LABELS_DATA_WEAPON, exports.LABELS_SYSTEM_BATTLER_PARAMS = s.LABELS_SYSTEM_BATTLER_PARAMS, exports.LABELS_SYSTEM_GAME_COMMANDS = s.LABELS_SYSTEM_GAME_COMMANDS, exports.LABEL_JUMP = s.LABEL_JUMP, exports.LABEL_SET_DATA = s.LABEL_SET_DATA, exports.LABEL_SET_ITEM_EFFECT = s.LABEL_SET_ITEM_EFFECT, exports.LABEL_SET_TRAIT = s.LABEL_SET_TRAIT, exports.LOOP = s.LOOP, exports.LOOP_BREAK = s.LOOP_BREAK, exports.MODULE_DATA = s.MODULE_DATA, exports.MOVE_PICTURE = s.MOVE_PICTURE, exports.NAME_INPUT_PROCESSING = s.NAME_INPUT_PROCESSING, exports.NO_OPERATION = s.NO_OPERATION, exports.OPEN_MENU_SCREEN = s.OPEN_MENU_SCREEN, exports.OPEN_SAVE_SCREEN = s.OPEN_SAVE_SCREEN, exports.OPERAND_CONSTANT = s.OPERAND_CONSTANT, exports.OPERAND_GAMEDATA = s.OPERAND_GAMEDATA, exports.OPERAND_RANDOM = s.OPERAND_RANDOM, exports.OPERAND_SCRIPT = s.OPERAND_SCRIPT, exports.OPERAND_VARIABLE = s.OPERAND_VARIABLE, exports.PLAY_BGM = s.PLAY_BGM, exports.PLAY_BGS = s.PLAY_BGS, exports.PLAY_ME = s.PLAY_ME, exports.PLAY_MOVIE = s.PLAY_MOVIE, exports.PLAY_SE = s.PLAY_SE, exports.PLUGIN_COMMAND_MV = s.PLUGIN_COMMAND_MV, exports.PLUGIN_COMMAND_MZ = s.PLUGIN_COMMAND_MZ, exports.RECOVER_ALL = s.RECOVER_ALL, exports.RESUME_BGM = s.RESUME_BGM, exports.RETURN_TO_TITLE_SCREEN = s.RETURN_TO_TITLE_SCREEN, exports.ROTATE_PICTURE = s.ROTATE_PICTURE, exports.ROUTE_CHANGE_BLEND_MODE = s.ROUTE_CHANGE_BLEND_MODE, exports.ROUTE_CHANGE_FREQ = s.ROUTE_CHANGE_FREQ, exports.ROUTE_CHANGE_IMAGE = s.ROUTE_CHANGE_IMAGE, exports.ROUTE_CHANGE_OPACITY = s.ROUTE_CHANGE_OPACITY, exports.ROUTE_CHANGE_SPEED = s.ROUTE_CHANGE_SPEED, exports.ROUTE_DIR_FIX_OFF = s.ROUTE_DIR_FIX_OFF, exports.ROUTE_DIR_FIX_ON = s.ROUTE_DIR_FIX_ON, exports.ROUTE_END = s.ROUTE_END, exports.ROUTE_JUMP = s.ROUTE_JUMP, exports.ROUTE_MOVE_AWAY = s.ROUTE_MOVE_AWAY, exports.ROUTE_MOVE_BACKWARD = s.ROUTE_MOVE_BACKWARD, exports.ROUTE_MOVE_DOWN = s.ROUTE_MOVE_DOWN, exports.ROUTE_MOVE_FORWARD = s.ROUTE_MOVE_FORWARD, exports.ROUTE_MOVE_LEFT = s.ROUTE_MOVE_LEFT, exports.ROUTE_MOVE_LOWER_L = s.ROUTE_MOVE_LOWER_L, exports.ROUTE_MOVE_LOWER_R = s.ROUTE_MOVE_LOWER_R, exports.ROUTE_MOVE_RANDOM = s.ROUTE_MOVE_RANDOM, exports.ROUTE_MOVE_RIGHT = s.ROUTE_MOVE_RIGHT, exports.ROUTE_MOVE_TOWARD = s.ROUTE_MOVE_TOWARD, exports.ROUTE_MOVE_UP = s.ROUTE_MOVE_UP, exports.ROUTE_MOVE_UPPER_L = s.ROUTE_MOVE_UPPER_L, exports.ROUTE_MOVE_UPPER_R = s.ROUTE_MOVE_UPPER_R, exports.ROUTE_PLAY_SE = s.ROUTE_PLAY_SE, exports.ROUTE_SCRIPT = s.ROUTE_SCRIPT, exports.ROUTE_STEP_ANIME_OFF = s.ROUTE_STEP_ANIME_OFF, exports.ROUTE_STEP_ANIME_ON = s.ROUTE_STEP_ANIME_ON, exports.ROUTE_SWITCH_OFF = s.ROUTE_SWITCH_OFF, exports.ROUTE_SWITCH_ON = s.ROUTE_SWITCH_ON, exports.ROUTE_THROUGH_OFF = s.ROUTE_THROUGH_OFF, exports.ROUTE_THROUGH_ON = s.ROUTE_THROUGH_ON, exports.ROUTE_TRANSPARENT_OFF = s.ROUTE_TRANSPARENT_OFF, exports.ROUTE_TRANSPARENT_ON = s.ROUTE_TRANSPARENT_ON, exports.ROUTE_TURN_180D = s.ROUTE_TURN_180D, exports.ROUTE_TURN_90D_L = s.ROUTE_TURN_90D_L, exports.ROUTE_TURN_90D_R = s.ROUTE_TURN_90D_R, exports.ROUTE_TURN_90D_R_L = s.ROUTE_TURN_90D_R_L, exports.ROUTE_TURN_AWAY = s.ROUTE_TURN_AWAY, exports.ROUTE_TURN_DOWN = s.ROUTE_TURN_DOWN, exports.ROUTE_TURN_LEFT = s.ROUTE_TURN_LEFT, exports.ROUTE_TURN_RANDOM = s.ROUTE_TURN_RANDOM, exports.ROUTE_TURN_RIGHT = s.ROUTE_TURN_RIGHT, exports.ROUTE_TURN_TOWARD = s.ROUTE_TURN_TOWARD, exports.ROUTE_TURN_UP = s.ROUTE_TURN_UP, exports.ROUTE_WAIT = s.ROUTE_WAIT, exports.ROUTE_WALK_ANIME_OFF = s.ROUTE_WALK_ANIME_OFF, exports.ROUTE_WALK_ANIME_ON = s.ROUTE_WALK_ANIME_ON, exports.SAVE_BGM = s.SAVE_BGM, exports.SCRIPT_EVAL = s.SCRIPT_EVAL, exports.SCRIPT_EVAL_BODY = s.SCRIPT_EVAL_BODY, exports.SCROLL_MAP = s.SCROLL_MAP, exports.SELECT_ITEM = s.SELECT_ITEM, exports.SET_EVENT_LOCATION = s.SET_EVENT_LOCATION, exports.SET_MOVEMENT_ROUTE = s.SET_MOVEMENT_ROUTE, exports.SET_VEHICLE_LOCATION = s.SET_VEHICLE_LOCATION, exports.SET_WEATHER_EFFECT = s.SET_WEATHER_EFFECT, exports.SHAKE_SCREEN = s.SHAKE_SCREEN, exports.SHOP_PROCESSING = s.SHOP_PROCESSING, exports.SHOP_PROCESSING_BODY = s.SHOP_PROCESSING_BODY, exports.SHOW_ANIMATION = s.SHOW_ANIMATION, exports.SHOW_BALLOON_ICON = s.SHOW_BALLOON_ICON, exports.SHOW_BATTLE_ANIMATION = s.SHOW_BATTLE_ANIMATION, exports.SHOW_CHOICES = s.SHOW_CHOICES, exports.SHOW_CHOICES_ITEM = s.SHOW_CHOICES_ITEM, exports.SHOW_MESSAGE = s.SHOW_MESSAGE, exports.SHOW_MESSAGE_BODY = s.SHOW_MESSAGE_BODY, exports.SHOW_PICTURE = s.SHOW_PICTURE, exports.SHOW_SCROLLING_TEXT = s.SHOW_SCROLLING_TEXT, exports.SHOW_SCROLLING_TEXT_BODY = s.SHOW_SCROLLING_TEXT_BODY, exports.SKIP = s.SKIP, exports.SPECIAL_EFFECT_ESCAPE = s.SPECIAL_EFFECT_ESCAPE, exports.SRC_DATA_ACTOR = s.SRC_DATA_ACTOR, exports.SRC_DATA_ARMOR = s.SRC_DATA_ARMOR, exports.SRC_DATA_CLASS = s.SRC_DATA_CLASS, exports.SRC_DATA_COMMON_EVNET = s.SRC_DATA_COMMON_EVNET, exports.SRC_DATA_ENEMY = s.SRC_DATA_ENEMY, exports.SRC_DATA_ITEMS = s.SRC_DATA_ITEMS, exports.SRC_DATA_MAP = s.SRC_DATA_MAP, exports.SRC_DATA_SKILL = s.SRC_DATA_SKILL, exports.SRC_DATA_STATE = s.SRC_DATA_STATE, exports.SRC_DATA_TROOP = s.SRC_DATA_TROOP, exports.SRC_DATA_WEAPON = s.SRC_DATA_WEAPON, exports.STOP_SE = s.STOP_SE, exports.TINT_PICTURE = s.TINT_PICTURE, exports.TINT_SCREEN = s.TINT_SCREEN, exports.TRANSFER_PLAYER = s.TRANSFER_PLAYER, exports.WAIT = s.WAIT, exports.cloneChoices = s.cloneChoices, exports.cloneEventCommand = s.cloneEventCommand, exports.cloneParameters = s.cloneParameters, exports.convertCommentArrayToObject = s.convertCommentArrayToObject, exports.createActorControlChars = s.createActorControlChars, exports.createControlCharFormat = s.createControlCharFormat, exports.createEventCommand = s.createEventCommand, exports.createNoteEntity = s.createNoteEntity, exports.createSystemVariableControlChars = s.createSystemVariableControlChars, exports.formatItemEffectText = s.formatItemEffectText, exports.formatTraitText = s.formatTraitText, exports.fromArrayCommonEvent = s.fromArrayCommonEvent, exports.fromArrayControlSwitches = s.fromArrayControlSwitches, exports.fromArrayInputNumber = s.fromArrayInputNumber, exports.fromArraySetupChoice = s.fromArraySetupChoice, exports.fromArraySetupChoiceItem = s.fromArraySetupChoiceItem, exports.fromArrayShowMessageHeader = s.fromArrayShowMessageHeader, exports.fromStringArray = s.fromStringArray, exports.getActorValue = s.getActorValue, exports.getArmorCategoryEnabled = s.getArmorCategoryEnabled, exports.getControlChars = s.getControlChars, exports.getEnemyValue = s.getEnemyValue, exports.getEquipCommandEnabled = s.getEquipCommandEnabled, exports.getFormationCommandEnabled = s.getFormationCommandEnabled, exports.getItemCategoryEnabled = s.getItemCategoryEnabled, exports.getItemCommandEnabled = s.getItemCommandEnabled, exports.getKeyItemCategoryEnabled = s.getKeyItemCategoryEnabled, exports.getNoteValue = s.getNoteValue, exports.getParamNames = s.getParamNames, exports.getSaveCommandEnabled = s.getSaveCommandEnabled, exports.getSkillCommandEnabled = s.getSkillCommandEnabled, exports.getStatusCommandEnabled = s.getStatusCommandEnabled, exports.getWeaponCategoryEnabled = s.getWeaponCategoryEnabled, exports.isCloneableCommand = s.isCloneableCommand, exports.isCommandChangeActorText = s.isCommandChangeActorText, exports.isCommandCommentBody = s.isCommandCommentBody, exports.isCommandCommentHeader = s.isCommandCommentHeader, exports.isCommandCommonEvent = s.isCommandCommonEvent, exports.isCommandInputNumber = s.isCommandInputNumber, exports.isCommandNonParam = s.isCommandNonParam, exports.isCommandScriptBody = s.isCommandScriptBody, exports.isCommandScriptHeader = s.isCommandScriptHeader, exports.isCommandScrollTextHead = s.isCommandScrollTextHead, exports.isCommandShowChoiceItem = s.isCommandShowChoiceItem, exports.isCommandShowChoices = s.isCommandShowChoices, exports.isCommandShowMessage = s.isCommandShowMessage, exports.isCommandShowMessageBody = s.isCommandShowMessageBody, exports.isCommandShowScrollingTextBody = s.isCommandShowScrollingTextBody, exports.isCommandTextBody = s.isCommandTextBody, exports.isDataItem = s.isDataItem, exports.isDataMap = s.isDataMap, exports.isDataMapInfo = s.isDataMapInfo, exports.isDataSkill = s.isDataSkill, exports.isDataSystem = s.isDataSystem, exports.isDataWeapon = s.isDataWeapon, exports.labelsRegistry = s.labelsRegistry, exports.makeActorData = s.makeActorData, exports.makeArmorData = s.makeArmorData, exports.makeAudioCommand = s.makeAudioCommand, exports.makeBooleanOptions = s.makeBooleanOptions, exports.makeClassData = s.makeClassData, exports.makeCommandAudioAny = s.makeCommandAudioAny, exports.makeCommandChangeActorName = s.makeCommandChangeActorName, exports.makeCommandChangeActorNickName = s.makeCommandChangeActorNickName, exports.makeCommandChangeActorProfile = s.makeCommandChangeActorProfile, exports.makeCommandChangeBattleBGM = s.makeCommandChangeBattleBGM, exports.makeCommandChangeDefeatME = s.makeCommandChangeDefeatME, exports.makeCommandChangeVictoryME = s.makeCommandChangeVictoryME, exports.makeCommandCommentBody = s.makeCommandCommentBody, exports.makeCommandCommentHeader = s.makeCommandCommentHeader, exports.makeCommandCommonEvent = s.makeCommandCommonEvent, exports.makeCommandControlSwitches = s.makeCommandControlSwitches, exports.makeCommandInputNumber = s.makeCommandInputNumber, exports.makeCommandPlayBGM = s.makeCommandPlayBGM, exports.makeCommandPlayBGS = s.makeCommandPlayBGS, exports.makeCommandPlayME = s.makeCommandPlayME, exports.makeCommandPlaySE = s.makeCommandPlaySE, exports.makeCommandScriptArray = s.makeCommandScriptArray, exports.makeCommandScriptBody = s.makeCommandScriptBody, exports.makeCommandScriptHeader = s.makeCommandScriptHeader, exports.makeCommandSetupChoice = s.makeCommandSetupChoice, exports.makeCommandShowChoiceItem = s.makeCommandShowChoiceItem, exports.makeCommandShowMessage = s.makeCommandShowMessage, exports.makeCommandShowMessageBody = s.makeCommandShowMessageBody, exports.makeCommentArray = s.makeCommentArray, exports.makeCommentCommandArray = s.makeCommentCommandArray, exports.makeCommonEventData = s.makeCommonEventData, exports.makeDamage = s.makeDamage, exports.makeDataNames = s.makeDataNames, exports.makeDropItem = s.makeDropItem, exports.makeEditorSetting = s.makeEditorSetting, exports.makeEnemyAction = s.makeEnemyAction, exports.makeEnemyData = s.makeEnemyData, exports.makeEventPageCondition = s.makeEventPageCondition, exports.makeGameInitial = s.makeGameInitial, exports.makeItemCategories = s.makeItemCategories, exports.makeItemCategoriesFromArray = s.makeItemCategoriesFromArray, exports.makeItemData = s.makeItemData, exports.makeMapData = s.makeMapData, exports.makeMapEvent = s.makeMapEvent, exports.makeMapEventIamge = s.makeMapEventIamge, exports.makeMapEventPage = s.makeMapEventPage, exports.makeMapInfoData = s.makeMapInfoData, exports.makeMenuCommandsEnabled = s.makeMenuCommandsEnabled, exports.makeMenuCommandsEnabledFromArray = s.makeMenuCommandsEnabledFromArray, exports.makeParamNamesArray = s.makeParamNamesArray, exports.makeRegex = s.makeRegex, exports.makeSkillData = s.makeSkillData, exports.makeSoundsArray = s.makeSoundsArray, exports.makeSoundsObject = s.makeSoundsObject, exports.makeStateData = s.makeStateData, exports.makeSystemAdvanced = s.makeSystemAdvanced, exports.makeSystemData = s.makeSystemData, exports.makeTitleCommandWindow = s.makeTitleCommandWindow, exports.makeTroopData = s.makeTroopData, exports.makeTroopEventConditions = s.makeTroopEventConditions, exports.makeTroopMember = s.makeTroopMember, exports.makeVehicleData = s.makeVehicleData, exports.makeWeaponData = s.makeWeaponData, exports.normalizeDataActor = s.normalizeDataActor, exports.pluginSourceToJSON = s.pluginSourceToJSON, exports.readNote = s.readNote, exports.readNoteObject = s.readNoteObject, exports.replaceNote = s.replaceNote, exports.setNoteValue = s.setNoteValue, exports.structToJSONSchema = s.structToJSONSchema, exports.toArrayCommonEvent = s.toArrayCommonEvent, exports.toArrayControlSwitches = s.toArrayControlSwitches, exports.toArrayInputNumber = s.toArrayInputNumber, exports.toArrayOperandActorStatus = s.toArrayOperandActorStatus, exports.toArrayOperandConstant = s.toArrayOperandConstant, exports.toArrayOperandEnemyStatus = s.toArrayOperandEnemyStatus, exports.toArrayOperandItemData = s.toArrayOperandItemData, exports.toArrayOperandRandom = s.toArrayOperandRandom, exports.toArrayOperandScript = s.toArrayOperandScript, exports.toArrayOperandVariable = s.toArrayOperandVariable, exports.toArraySetupChoice = s.toArraySetupChoice, exports.toArraySetupChoiceItem = s.toArraySetupChoiceItem, exports.toArrayShowMessageHeader = s.toArrayShowMessageHeader, exports.COLLAPS_BOSS = o.COLLAPS_BOSS, exports.COLLAPS_INSTANT = o.COLLAPS_INSTANT, exports.COLLAPS_NONE = o.COLLAPS_NONE, exports.COLLAPS_NORMAL = o.COLLAPS_NORMAL, exports.EFFECT_ADD_BUFF = o.EFFECT_ADD_BUFF, exports.EFFECT_ADD_DEBUFF = o.EFFECT_ADD_DEBUFF, exports.EFFECT_ADD_STATE = o.EFFECT_ADD_STATE, exports.EFFECT_COMMON_EVENT = o.EFFECT_COMMON_EVENT, exports.EFFECT_GAIN_TP = o.EFFECT_GAIN_TP, exports.EFFECT_GROW = o.EFFECT_GROW, exports.EFFECT_LEARN_SKILL = o.EFFECT_LEARN_SKILL, exports.EFFECT_RECOVER_HP = o.EFFECT_RECOVER_HP, exports.EFFECT_RECOVER_MP = o.EFFECT_RECOVER_MP, exports.EFFECT_REMOVE_BUFF = o.EFFECT_REMOVE_BUFF, exports.EFFECT_REMOVE_DEBUFF = o.EFFECT_REMOVE_DEBUFF, exports.EFFECT_REMOVE_STATE = o.EFFECT_REMOVE_STATE, exports.EFFECT_SPECIAL = o.EFFECT_SPECIAL, exports.EXTRA_PARAM_CEV = o.EXTRA_PARAM_CEV, exports.EXTRA_PARAM_CNT = o.EXTRA_PARAM_CNT, exports.EXTRA_PARAM_CRI = o.EXTRA_PARAM_CRI, exports.EXTRA_PARAM_EVA = o.EXTRA_PARAM_EVA, exports.EXTRA_PARAM_HIT = o.EXTRA_PARAM_HIT, exports.EXTRA_PARAM_HRG = o.EXTRA_PARAM_HRG, exports.EXTRA_PARAM_MEV = o.EXTRA_PARAM_MEV, exports.EXTRA_PARAM_MRF = o.EXTRA_PARAM_MRF, exports.EXTRA_PARAM_MRG = o.EXTRA_PARAM_MRG, exports.EXTRA_PARAM_TRG = o.EXTRA_PARAM_TRG, exports.FLAG_ID_AUTO_BATTLE = o.FLAG_ID_AUTO_BATTLE, exports.FLAG_ID_GUARD = o.FLAG_ID_GUARD, exports.FLAG_ID_PRESERVE_TP = o.FLAG_ID_PRESERVE_TP, exports.FLAG_ID_SUBSTITUTE = o.FLAG_ID_SUBSTITUTE, exports.PARTY_ABILITY_CANCEL_SURPRISE = o.PARTY_ABILITY_CANCEL_SURPRISE, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = o.PARTY_ABILITY_DROP_ITEM_DOUBLE, exports.PARTY_ABILITY_ENCOUNTER_HALF = o.PARTY_ABILITY_ENCOUNTER_HALF, exports.PARTY_ABILITY_ENCOUNTER_NONE = o.PARTY_ABILITY_ENCOUNTER_NONE, exports.PARTY_ABILITY_GOLD_DOUBLE = o.PARTY_ABILITY_GOLD_DOUBLE, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = o.PARTY_ABILITY_RAISE_PREEMPTIVE, exports.REGULAR_PARAM_AGI = o.REGULAR_PARAM_AGI, exports.REGULAR_PARAM_ATK = o.REGULAR_PARAM_ATK, exports.REGULAR_PARAM_DEF = o.REGULAR_PARAM_DEF, exports.REGULAR_PARAM_LUK = o.REGULAR_PARAM_LUK, exports.REGULAR_PARAM_MATK = o.REGULAR_PARAM_MATK, exports.REGULAR_PARAM_MAX_HP = o.REGULAR_PARAM_MAX_HP, exports.REGULAR_PARAM_MAX_MP = o.REGULAR_PARAM_MAX_MP, exports.REGULAR_PARAM_MDEF = o.REGULAR_PARAM_MDEF, exports.SPECIAL_PARAM_EXR = o.SPECIAL_PARAM_EXR, exports.SPECIAL_PARAM_FDR = o.SPECIAL_PARAM_FDR, exports.SPECIAL_PARAM_GRD = o.SPECIAL_PARAM_GRD, exports.SPECIAL_PARAM_MCR = o.SPECIAL_PARAM_MCR, exports.SPECIAL_PARAM_MDR = o.SPECIAL_PARAM_MDR, exports.SPECIAL_PARAM_PDR = o.SPECIAL_PARAM_PDR, exports.SPECIAL_PARAM_PHA = o.SPECIAL_PARAM_PHA, exports.SPECIAL_PARAM_REC = o.SPECIAL_PARAM_REC, exports.SPECIAL_PARAM_TCR = o.SPECIAL_PARAM_TCR, exports.SPECIAL_PARAM_TGR = o.SPECIAL_PARAM_TGR, exports.TRAIT_ACTION_PLUS = o.TRAIT_ACTION_PLUS, exports.TRAIT_ATTACK_ELEMENT = o.TRAIT_ATTACK_ELEMENT, exports.TRAIT_ATTACK_SKILL = o.TRAIT_ATTACK_SKILL, exports.TRAIT_ATTACK_SPEED = o.TRAIT_ATTACK_SPEED, exports.TRAIT_ATTACK_STATE = o.TRAIT_ATTACK_STATE, exports.TRAIT_ATTACK_TIMES = o.TRAIT_ATTACK_TIMES, exports.TRAIT_COLLAPSE_TYPE = o.TRAIT_COLLAPSE_TYPE, exports.TRAIT_DEBUFF_RATE = o.TRAIT_DEBUFF_RATE, exports.TRAIT_ELEMENT_RATE = o.TRAIT_ELEMENT_RATE, exports.TRAIT_EQUIP_ARMOR_TYPE = o.TRAIT_EQUIP_ARMOR_TYPE, exports.TRAIT_EQUIP_LOCK = o.TRAIT_EQUIP_LOCK, exports.TRAIT_EQUIP_SEAL = o.TRAIT_EQUIP_SEAL, exports.TRAIT_EQUIP_WEAPON_TYPE = o.TRAIT_EQUIP_WEAPON_TYPE, exports.TRAIT_PARAM = o.TRAIT_PARAM, exports.TRAIT_PARTY_ABILITY = o.TRAIT_PARTY_ABILITY, exports.TRAIT_SKILL_ADD = o.TRAIT_SKILL_ADD, exports.TRAIT_SKILL_SEAL = o.TRAIT_SKILL_SEAL, exports.TRAIT_SKILL_TYPE_ADD = o.TRAIT_SKILL_TYPE_ADD, exports.TRAIT_SKILL_TYPE_SEAL = o.TRAIT_SKILL_TYPE_SEAL, exports.TRAIT_SLOT_TYPE = o.TRAIT_SLOT_TYPE, exports.TRAIT_SPARAM = o.TRAIT_SPARAM, exports.TRAIT_SPECIAL_FLAG = o.TRAIT_SPECIAL_FLAG, exports.TRAIT_STATE_RATE = o.TRAIT_STATE_RATE, exports.TRAIT_STATE_RESIST = o.TRAIT_STATE_RESIST, exports.TRAIT_XPARAM = o.TRAIT_XPARAM, exports.collapsOptionsToArray = o.collapsOptionsToArray, exports.defineGameDataSources = o.defineGameDataSources, exports.defineSystemItems = o.defineSystemItems, exports.defineTraitCollapseType = o.defineTraitCollapseType, exports.defineTraitExtraParam = o.defineTraitExtraParam, exports.defineTraitItems = o.defineTraitItems, exports.defineTraitPartyAbility = o.defineTraitPartyAbility, exports.defineTraitRegularParam = o.defineTraitRegularParam, exports.defineTraitSpecialFlag = o.defineTraitSpecialFlag, exports.defineTraitSpecialParam = o.defineTraitSpecialParam, exports.extraParamName = o.extraParamName, exports.extraParamsToArray = o.extraParamsToArray, exports.getArmorTypes = o.getArmorTypes, exports.getElementTypes = o.getElementTypes, exports.getEquipTypes = o.getEquipTypes, exports.getSkillTypes = o.getSkillTypes, exports.getSwitches = o.getSwitches, exports.getVariableNames = o.getVariableNames, exports.getWeaponTypes = o.getWeaponTypes, exports.partyAbilityToArray = o.partyAbilityToArray, exports.regularParamName = o.regularParamName, exports.regularParamsToArray = o.regularParamsToArray, exports.resolveItemEffectLabels = o.resolveItemEffectLabels, exports.resolveTraitLabels = o.resolveTraitLabels, exports.specialFlagToArray = o.specialFlagToArray, exports.specialParamName = o.specialParamName, exports.specialParamsToArray = o.specialParamsToArray, exports.isAudioCommand = i.isAudioCommand, exports.isDataActor = (e2) => n(e2), exports.isDataArmor2 = (e2) => R(e2), exports.isDataClass = (e2) => N(e2);
//# sourceMappingURL=main.cjs.js.map
