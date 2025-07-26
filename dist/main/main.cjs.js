"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("../app/app.cjs.js"), t = require("../shared/index.cjs.js"), r = require("../libs/libs.cjs.js"), a = require("../shared/make.cjs.js"), s = require("../shared/mergeItemsSource.cjs.js"), o = require("../shared/plugin.cjs.js"), i = require("../shared/namedItems.cjs.js");
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
const n = t.getDefaultExportFromCjs(E);
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
const R = t.getDefaultExportFromCjs(T);
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
const N = t.getDefaultExportFromCjs(d);
exports.buildReferenceItemSources = e.buildReferenceItemSources, exports.compileItemEffectDisplayData = e.compileItemEffectDisplayData, exports.compileTraitDisplayData = e.compileTraitDisplayData, exports.isAudioCommand = t.isAudioCommand, exports.AUTHOR_RMMZ = r.AUTHOR_RMMZ, exports.SRC_COLOR = r.SRC_COLOR, exports.detectFormatErrors = r.detectFormatErrors, exports.domainNames = r.domainNames, exports.isValidNumber = r.isValidNumber, exports.applyFormatRule = a.applyFormatRule, exports.compileFormatRule = a.compileFormatRule, exports.makeAudioFileParams = a.makeAudioFileParams, exports.mergeItemsSource = s.mergeItemsSource, exports.ABORT_BATTLE = o.ABORT_BATTLE, exports.BATTLE_PROCESSING = o.BATTLE_PROCESSING, exports.CHANGE_ACTOR_IMAGES = o.CHANGE_ACTOR_IMAGES, exports.CHANGE_ARMORS = o.CHANGE_ARMORS, exports.CHANGE_BATTLE_BACKGROUND = o.CHANGE_BATTLE_BACKGROUND, exports.CHANGE_BATTLE_BGM = o.CHANGE_BATTLE_BGM, exports.CHANGE_CLASS = o.CHANGE_CLASS, exports.CHANGE_DEFEAT_ME = o.CHANGE_DEFEAT_ME, exports.CHANGE_ENCOUNTER = o.CHANGE_ENCOUNTER, exports.CHANGE_ENEMY_HP = o.CHANGE_ENEMY_HP, exports.CHANGE_ENEMY_MP = o.CHANGE_ENEMY_MP, exports.CHANGE_ENEMY_STATE = o.CHANGE_ENEMY_STATE, exports.CHANGE_ENEMY_TP = o.CHANGE_ENEMY_TP, exports.CHANGE_EXP = o.CHANGE_EXP, exports.CHANGE_FORMATION_ACCESS = o.CHANGE_FORMATION_ACCESS, exports.CHANGE_GOLD = o.CHANGE_GOLD, exports.CHANGE_HP = o.CHANGE_HP, exports.CHANGE_ITEMS = o.CHANGE_ITEMS, exports.CHANGE_MENU_ACCESS = o.CHANGE_MENU_ACCESS, exports.CHANGE_MP = o.CHANGE_MP, exports.CHANGE_NAME = o.CHANGE_NAME, exports.CHANGE_NICKNAME = o.CHANGE_NICKNAME, exports.CHANGE_PARALLAX = o.CHANGE_PARALLAX, exports.CHANGE_PARTY_MEMBER = o.CHANGE_PARTY_MEMBER, exports.CHANGE_PLAYER_FOLLOWERS = o.CHANGE_PLAYER_FOLLOWERS, exports.CHANGE_PROFILE = o.CHANGE_PROFILE, exports.CHANGE_SAVE_ACCESS = o.CHANGE_SAVE_ACCESS, exports.CHANGE_TILESET = o.CHANGE_TILESET, exports.CHANGE_TP = o.CHANGE_TP, exports.CHANGE_TRANSPARENCY = o.CHANGE_TRANSPARENCY, exports.CHANGE_VEHICLE_BGM = o.CHANGE_VEHICLE_BGM, exports.CHANGE_VEHICLE_IMAGE = o.CHANGE_VEHICLE_IMAGE, exports.CHANGE_VICTORY_ME = o.CHANGE_VICTORY_ME, exports.CHANGE_WEAPONS = o.CHANGE_WEAPONS, exports.CHANGE_WINDOW_COLOR = o.CHANGE_WINDOW_COLOR, exports.COMMENT_BODY = o.COMMENT_BODY, exports.COMMENT_HEAD = o.COMMENT_HEAD, exports.COMMON_EVENT = o.COMMON_EVENT, exports.CONDITIONAL_BRANCH = o.CONDITIONAL_BRANCH, exports.CONDITIONAL_BRANCH_ELSE = o.CONDITIONAL_BRANCH_ELSE, exports.CONTROL_SELF_SWITCH = o.CONTROL_SELF_SWITCH, exports.CONTROL_SWITCHES = o.CONTROL_SWITCHES, exports.CONTROL_TIMER = o.CONTROL_TIMER, exports.CONTROL_VARIABLES = o.CONTROL_VARIABLES, exports.DEFAULT_DAMAGE_LABELS = o.DEFAULT_DAMAGE_LABELS, exports.DEFAULT_GLOBAL_LABELS = o.DEFAULT_GLOBAL_LABELS, exports.DEFAULT_ITEM_LABELS = o.DEFAULT_ITEM_LABELS, exports.DEFAULT_SKILL_LABELS = o.DEFAULT_SKILL_LABELS, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = o.DEFAULT_SYSTEM_LABELS_BOOLEAN, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = o.DEFAULT_SYSTEM_LABELS_DATA_TYPES, exports.DEFAULT_USABLE_ITEM_LABELS = o.DEFAULT_USABLE_ITEM_LABELS, exports.ENEMY_APPEAR = o.ENEMY_APPEAR, exports.ENEMY_RECOVER_ALL = o.ENEMY_RECOVER_ALL, exports.ENEMY_TRANSFORM = o.ENEMY_TRANSFORM, exports.ERASE_EVENT = o.ERASE_EVENT, exports.ERASE_PICTURE = o.ERASE_PICTURE, exports.EXIT_EVENT_PROCESSING = o.EXIT_EVENT_PROCESSING, exports.FADEIN_SCREEN = o.FADEIN_SCREEN, exports.FADEOUT_BGM = o.FADEOUT_BGM, exports.FADEOUT_BGS = o.FADEOUT_BGS, exports.FADEOUT_SCREEN = o.FADEOUT_SCREEN, exports.FILENAME_ACTORS = o.FILENAME_ACTORS, exports.FILENAME_ANIMATIONS = o.FILENAME_ANIMATIONS, exports.FILENAME_ARMORS = o.FILENAME_ARMORS, exports.FILENAME_CLASSES = o.FILENAME_CLASSES, exports.FILENAME_COMMON_EVENTS = o.FILENAME_COMMON_EVENTS, exports.FILENAME_ENEMIES = o.FILENAME_ENEMIES, exports.FILENAME_ITEMS = o.FILENAME_ITEMS, exports.FILENAME_MAP_INFOS = o.FILENAME_MAP_INFOS, exports.FILENAME_SKILLS = o.FILENAME_SKILLS, exports.FILENAME_STATES = o.FILENAME_STATES, exports.FILENAME_SYSTEM = o.FILENAME_SYSTEM, exports.FILENAME_TILESET = o.FILENAME_TILESET, exports.FILENAME_TROOPS = o.FILENAME_TROOPS, exports.FILENAME_WEAPONS = o.FILENAME_WEAPONS, exports.FLASH_SCREEN = o.FLASH_SCREEN, exports.FOLDER_AUDIO = o.FOLDER_AUDIO, exports.FOLDER_AUDIO_BGM = o.FOLDER_AUDIO_BGM, exports.FOLDER_AUDIO_BGS = o.FOLDER_AUDIO_BGS, exports.FOLDER_AUDIO_ME = o.FOLDER_AUDIO_ME, exports.FOLDER_AUDIO_SE = o.FOLDER_AUDIO_SE, exports.FOLDER_DATA = o.FOLDER_DATA, exports.FOLDER_IMG = o.FOLDER_IMG, exports.FOLDER_IMG_BATTLEBACK1 = o.FOLDER_IMG_BATTLEBACK1, exports.FOLDER_IMG_BATTLEBACK2 = o.FOLDER_IMG_BATTLEBACK2, exports.FOLDER_IMG_CHACTERS = o.FOLDER_IMG_CHACTERS, exports.FOLDER_IMG_ENEMIES = o.FOLDER_IMG_ENEMIES, exports.FOLDER_IMG_FACES = o.FOLDER_IMG_FACES, exports.FOLDER_IMG_PARALLACES = o.FOLDER_IMG_PARALLACES, exports.FOLDER_IMG_PICTURES = o.FOLDER_IMG_PICTURES, exports.FOLDER_IMG_SV_ACTORS = o.FOLDER_IMG_SV_ACTORS, exports.FOLDER_IMG_SV_ENEMIES = o.FOLDER_IMG_SV_ENEMIES, exports.FOLDER_IMG_SYSTEM = o.FOLDER_IMG_SYSTEM, exports.FOLDER_IMG_TILESETS = o.FOLDER_IMG_TILESETS, exports.FOLDER_IMG_TITLES1 = o.FOLDER_IMG_TITLES1, exports.FOLDER_IMG_TITLES2 = o.FOLDER_IMG_TITLES2, exports.FOLDER_JS = o.FOLDER_JS, exports.FORCE_ACTION = o.FORCE_ACTION, exports.GAME_OVER = o.GAME_OVER, exports.GATHER_FOLLOWERS = o.GATHER_FOLLOWERS, exports.GET_LOCATION_INFO = o.GET_LOCATION_INFO, exports.GET_ONOFF_VEHICLE = o.GET_ONOFF_VEHICLE, exports.HITTYPE_CERTAIN = o.HITTYPE_CERTAIN, exports.HITTYPE_MAGICAL = o.HITTYPE_MAGICAL, exports.HITTYPE_PHYSICAL = o.HITTYPE_PHYSICAL, exports.INPUT_NUMBER = o.INPUT_NUMBER, exports.LABEL = o.LABEL, exports.LABELS_DATA_WEAPON = o.LABELS_DATA_WEAPON, exports.LABELS_SYSTEM_BATTLER_PARAMS = o.LABELS_SYSTEM_BATTLER_PARAMS, exports.LABELS_SYSTEM_GAME_COMMANDS = o.LABELS_SYSTEM_GAME_COMMANDS, exports.LABEL_JUMP = o.LABEL_JUMP, exports.LABEL_SET_DATA = o.LABEL_SET_DATA, exports.LABEL_SET_ITEM_EFFECT = o.LABEL_SET_ITEM_EFFECT, exports.LABEL_SET_TRAIT = o.LABEL_SET_TRAIT, exports.LOOP = o.LOOP, exports.LOOP_BREAK = o.LOOP_BREAK, exports.MODULE_DATA = o.MODULE_DATA, exports.MOVE_PICTURE = o.MOVE_PICTURE, exports.NAME_INPUT_PROCESSING = o.NAME_INPUT_PROCESSING, exports.NO_OPERATION = o.NO_OPERATION, exports.OPEN_MENU_SCREEN = o.OPEN_MENU_SCREEN, exports.OPEN_SAVE_SCREEN = o.OPEN_SAVE_SCREEN, exports.OPERAND_CONSTANT = o.OPERAND_CONSTANT, exports.OPERAND_GAMEDATA = o.OPERAND_GAMEDATA, exports.OPERAND_RANDOM = o.OPERAND_RANDOM, exports.OPERAND_SCRIPT = o.OPERAND_SCRIPT, exports.OPERAND_VARIABLE = o.OPERAND_VARIABLE, exports.PLAY_BGM = o.PLAY_BGM, exports.PLAY_BGS = o.PLAY_BGS, exports.PLAY_ME = o.PLAY_ME, exports.PLAY_MOVIE = o.PLAY_MOVIE, exports.PLAY_SE = o.PLAY_SE, exports.PLUGIN_COMMAND_MV = o.PLUGIN_COMMAND_MV, exports.PLUGIN_COMMAND_MZ = o.PLUGIN_COMMAND_MZ, exports.RECOVER_ALL = o.RECOVER_ALL, exports.RESUME_BGM = o.RESUME_BGM, exports.RETURN_TO_TITLE_SCREEN = o.RETURN_TO_TITLE_SCREEN, exports.ROTATE_PICTURE = o.ROTATE_PICTURE, exports.ROUTE_CHANGE_BLEND_MODE = o.ROUTE_CHANGE_BLEND_MODE, exports.ROUTE_CHANGE_FREQ = o.ROUTE_CHANGE_FREQ, exports.ROUTE_CHANGE_IMAGE = o.ROUTE_CHANGE_IMAGE, exports.ROUTE_CHANGE_OPACITY = o.ROUTE_CHANGE_OPACITY, exports.ROUTE_CHANGE_SPEED = o.ROUTE_CHANGE_SPEED, exports.ROUTE_DIR_FIX_OFF = o.ROUTE_DIR_FIX_OFF, exports.ROUTE_DIR_FIX_ON = o.ROUTE_DIR_FIX_ON, exports.ROUTE_END = o.ROUTE_END, exports.ROUTE_JUMP = o.ROUTE_JUMP, exports.ROUTE_MOVE_AWAY = o.ROUTE_MOVE_AWAY, exports.ROUTE_MOVE_BACKWARD = o.ROUTE_MOVE_BACKWARD, exports.ROUTE_MOVE_DOWN = o.ROUTE_MOVE_DOWN, exports.ROUTE_MOVE_FORWARD = o.ROUTE_MOVE_FORWARD, exports.ROUTE_MOVE_LEFT = o.ROUTE_MOVE_LEFT, exports.ROUTE_MOVE_LOWER_L = o.ROUTE_MOVE_LOWER_L, exports.ROUTE_MOVE_LOWER_R = o.ROUTE_MOVE_LOWER_R, exports.ROUTE_MOVE_RANDOM = o.ROUTE_MOVE_RANDOM, exports.ROUTE_MOVE_RIGHT = o.ROUTE_MOVE_RIGHT, exports.ROUTE_MOVE_TOWARD = o.ROUTE_MOVE_TOWARD, exports.ROUTE_MOVE_UP = o.ROUTE_MOVE_UP, exports.ROUTE_MOVE_UPPER_L = o.ROUTE_MOVE_UPPER_L, exports.ROUTE_MOVE_UPPER_R = o.ROUTE_MOVE_UPPER_R, exports.ROUTE_PLAY_SE = o.ROUTE_PLAY_SE, exports.ROUTE_SCRIPT = o.ROUTE_SCRIPT, exports.ROUTE_STEP_ANIME_OFF = o.ROUTE_STEP_ANIME_OFF, exports.ROUTE_STEP_ANIME_ON = o.ROUTE_STEP_ANIME_ON, exports.ROUTE_SWITCH_OFF = o.ROUTE_SWITCH_OFF, exports.ROUTE_SWITCH_ON = o.ROUTE_SWITCH_ON, exports.ROUTE_THROUGH_OFF = o.ROUTE_THROUGH_OFF, exports.ROUTE_THROUGH_ON = o.ROUTE_THROUGH_ON, exports.ROUTE_TRANSPARENT_OFF = o.ROUTE_TRANSPARENT_OFF, exports.ROUTE_TRANSPARENT_ON = o.ROUTE_TRANSPARENT_ON, exports.ROUTE_TURN_180D = o.ROUTE_TURN_180D, exports.ROUTE_TURN_90D_L = o.ROUTE_TURN_90D_L, exports.ROUTE_TURN_90D_R = o.ROUTE_TURN_90D_R, exports.ROUTE_TURN_90D_R_L = o.ROUTE_TURN_90D_R_L, exports.ROUTE_TURN_AWAY = o.ROUTE_TURN_AWAY, exports.ROUTE_TURN_DOWN = o.ROUTE_TURN_DOWN, exports.ROUTE_TURN_LEFT = o.ROUTE_TURN_LEFT, exports.ROUTE_TURN_RANDOM = o.ROUTE_TURN_RANDOM, exports.ROUTE_TURN_RIGHT = o.ROUTE_TURN_RIGHT, exports.ROUTE_TURN_TOWARD = o.ROUTE_TURN_TOWARD, exports.ROUTE_TURN_UP = o.ROUTE_TURN_UP, exports.ROUTE_WAIT = o.ROUTE_WAIT, exports.ROUTE_WALK_ANIME_OFF = o.ROUTE_WALK_ANIME_OFF, exports.ROUTE_WALK_ANIME_ON = o.ROUTE_WALK_ANIME_ON, exports.SAVE_BGM = o.SAVE_BGM, exports.SCRIPT_EVAL = o.SCRIPT_EVAL, exports.SCRIPT_EVAL_BODY = o.SCRIPT_EVAL_BODY, exports.SCROLL_MAP = o.SCROLL_MAP, exports.SELECT_ITEM = o.SELECT_ITEM, exports.SET_EVENT_LOCATION = o.SET_EVENT_LOCATION, exports.SET_MOVEMENT_ROUTE = o.SET_MOVEMENT_ROUTE, exports.SET_VEHICLE_LOCATION = o.SET_VEHICLE_LOCATION, exports.SET_WEATHER_EFFECT = o.SET_WEATHER_EFFECT, exports.SHAKE_SCREEN = o.SHAKE_SCREEN, exports.SHOP_PROCESSING = o.SHOP_PROCESSING, exports.SHOP_PROCESSING_BODY = o.SHOP_PROCESSING_BODY, exports.SHOW_ANIMATION = o.SHOW_ANIMATION, exports.SHOW_BALLOON_ICON = o.SHOW_BALLOON_ICON, exports.SHOW_BATTLE_ANIMATION = o.SHOW_BATTLE_ANIMATION, exports.SHOW_CHOICES = o.SHOW_CHOICES, exports.SHOW_CHOICES_ITEM = o.SHOW_CHOICES_ITEM, exports.SHOW_MESSAGE = o.SHOW_MESSAGE, exports.SHOW_MESSAGE_BODY = o.SHOW_MESSAGE_BODY, exports.SHOW_PICTURE = o.SHOW_PICTURE, exports.SHOW_SCROLLING_TEXT = o.SHOW_SCROLLING_TEXT, exports.SHOW_SCROLLING_TEXT_BODY = o.SHOW_SCROLLING_TEXT_BODY, exports.SKIP = o.SKIP, exports.SPECIAL_EFFECT_ESCAPE = o.SPECIAL_EFFECT_ESCAPE, exports.SRC_DATA_ACTOR = o.SRC_DATA_ACTOR, exports.SRC_DATA_ARMOR = o.SRC_DATA_ARMOR, exports.SRC_DATA_CLASS = o.SRC_DATA_CLASS, exports.SRC_DATA_COMMON_EVNET = o.SRC_DATA_COMMON_EVNET, exports.SRC_DATA_ENEMY = o.SRC_DATA_ENEMY, exports.SRC_DATA_ITEMS = o.SRC_DATA_ITEMS, exports.SRC_DATA_MAP = o.SRC_DATA_MAP, exports.SRC_DATA_SKILL = o.SRC_DATA_SKILL, exports.SRC_DATA_STATE = o.SRC_DATA_STATE, exports.SRC_DATA_TROOP = o.SRC_DATA_TROOP, exports.SRC_DATA_WEAPON = o.SRC_DATA_WEAPON, exports.STOP_SE = o.STOP_SE, exports.TINT_PICTURE = o.TINT_PICTURE, exports.TINT_SCREEN = o.TINT_SCREEN, exports.TRANSFER_PLAYER = o.TRANSFER_PLAYER, exports.WAIT = o.WAIT, exports.cloneChoices = o.cloneChoices, exports.cloneEventCommand = o.cloneEventCommand, exports.cloneParameters = o.cloneParameters, exports.convertCommentArrayToObject = o.convertCommentArrayToObject, exports.createActorControlChars = o.createActorControlChars, exports.createControlCharFormat = o.createControlCharFormat, exports.createEventCommand = o.createEventCommand, exports.createNoteEntity = o.createNoteEntity, exports.createSystemVariableControlChars = o.createSystemVariableControlChars, exports.formatItemEffectText = o.formatItemEffectText, exports.formatTraitText = o.formatTraitText, exports.fromArrayCommonEvent = o.fromArrayCommonEvent, exports.fromArrayControlSwitches = o.fromArrayControlSwitches, exports.fromArrayInputNumber = o.fromArrayInputNumber, exports.fromArraySetupChoice = o.fromArraySetupChoice, exports.fromArraySetupChoiceItem = o.fromArraySetupChoiceItem, exports.fromArrayShowMessageHeader = o.fromArrayShowMessageHeader, exports.fromStringArray = o.fromStringArray, exports.getActorValue = o.getActorValue, exports.getArmorCategoryEnabled = o.getArmorCategoryEnabled, exports.getControlChars = o.getControlChars, exports.getEnemyValue = o.getEnemyValue, exports.getEquipCommandEnabled = o.getEquipCommandEnabled, exports.getFormationCommandEnabled = o.getFormationCommandEnabled, exports.getItemCategoryEnabled = o.getItemCategoryEnabled, exports.getItemCommandEnabled = o.getItemCommandEnabled, exports.getKeyItemCategoryEnabled = o.getKeyItemCategoryEnabled, exports.getNoteValue = o.getNoteValue, exports.getParamNames = o.getParamNames, exports.getSaveCommandEnabled = o.getSaveCommandEnabled, exports.getSkillCommandEnabled = o.getSkillCommandEnabled, exports.getStatusCommandEnabled = o.getStatusCommandEnabled, exports.getWeaponCategoryEnabled = o.getWeaponCategoryEnabled, exports.isCloneableCommand = o.isCloneableCommand, exports.isCommandChangeActorText = o.isCommandChangeActorText, exports.isCommandCommentBody = o.isCommandCommentBody, exports.isCommandCommentHeader = o.isCommandCommentHeader, exports.isCommandCommonEvent = o.isCommandCommonEvent, exports.isCommandInputNumber = o.isCommandInputNumber, exports.isCommandNonParam = o.isCommandNonParam, exports.isCommandScriptBody = o.isCommandScriptBody, exports.isCommandScriptHeader = o.isCommandScriptHeader, exports.isCommandScrollTextHead = o.isCommandScrollTextHead, exports.isCommandShowChoiceItem = o.isCommandShowChoiceItem, exports.isCommandShowChoices = o.isCommandShowChoices, exports.isCommandShowMessage = o.isCommandShowMessage, exports.isCommandShowMessageBody = o.isCommandShowMessageBody, exports.isCommandShowScrollingTextBody = o.isCommandShowScrollingTextBody, exports.isCommandTextBody = o.isCommandTextBody, exports.isDataItem = o.isDataItem, exports.isDataMap = o.isDataMap, exports.isDataMapInfo = o.isDataMapInfo, exports.isDataSkill = o.isDataSkill, exports.isDataSystem = o.isDataSystem, exports.isDataWeapon = o.isDataWeapon, exports.labelsRegistry = o.labelsRegistry, exports.makeActorData = o.makeActorData, exports.makeArmorData = o.makeArmorData, exports.makeAudioCommand = o.makeAudioCommand, exports.makeBooleanOptions = o.makeBooleanOptions, exports.makeClassData = o.makeClassData, exports.makeCommandAudioAny = o.makeCommandAudioAny, exports.makeCommandChangeActorName = o.makeCommandChangeActorName, exports.makeCommandChangeActorNickName = o.makeCommandChangeActorNickName, exports.makeCommandChangeActorProfile = o.makeCommandChangeActorProfile, exports.makeCommandChangeBattleBGM = o.makeCommandChangeBattleBGM, exports.makeCommandChangeDefeatME = o.makeCommandChangeDefeatME, exports.makeCommandChangeVictoryME = o.makeCommandChangeVictoryME, exports.makeCommandCommentBody = o.makeCommandCommentBody, exports.makeCommandCommentHeader = o.makeCommandCommentHeader, exports.makeCommandCommonEvent = o.makeCommandCommonEvent, exports.makeCommandControlSwitches = o.makeCommandControlSwitches, exports.makeCommandInputNumber = o.makeCommandInputNumber, exports.makeCommandPlayBGM = o.makeCommandPlayBGM, exports.makeCommandPlayBGS = o.makeCommandPlayBGS, exports.makeCommandPlayME = o.makeCommandPlayME, exports.makeCommandPlaySE = o.makeCommandPlaySE, exports.makeCommandScriptArray = o.makeCommandScriptArray, exports.makeCommandScriptBody = o.makeCommandScriptBody, exports.makeCommandScriptHeader = o.makeCommandScriptHeader, exports.makeCommandSetupChoice = o.makeCommandSetupChoice, exports.makeCommandShowChoiceItem = o.makeCommandShowChoiceItem, exports.makeCommandShowMessage = o.makeCommandShowMessage, exports.makeCommandShowMessageBody = o.makeCommandShowMessageBody, exports.makeCommentArray = o.makeCommentArray, exports.makeCommentCommandArray = o.makeCommentCommandArray, exports.makeCommonEventData = o.makeCommonEventData, exports.makeDamage = o.makeDamage, exports.makeDataNames = o.makeDataNames, exports.makeDropItem = o.makeDropItem, exports.makeEditorSetting = o.makeEditorSetting, exports.makeEnemyAction = o.makeEnemyAction, exports.makeEnemyData = o.makeEnemyData, exports.makeEventPageCondition = o.makeEventPageCondition, exports.makeGameInitial = o.makeGameInitial, exports.makeItemCategories = o.makeItemCategories, exports.makeItemCategoriesFromArray = o.makeItemCategoriesFromArray, exports.makeItemData = o.makeItemData, exports.makeMapData = o.makeMapData, exports.makeMapEvent = o.makeMapEvent, exports.makeMapEventIamge = o.makeMapEventIamge, exports.makeMapEventPage = o.makeMapEventPage, exports.makeMapInfoData = o.makeMapInfoData, exports.makeMenuCommandsEnabled = o.makeMenuCommandsEnabled, exports.makeMenuCommandsEnabledFromArray = o.makeMenuCommandsEnabledFromArray, exports.makeParamNamesArray = o.makeParamNamesArray, exports.makeRegex = o.makeRegex, exports.makeSkillData = o.makeSkillData, exports.makeSoundsArray = o.makeSoundsArray, exports.makeSoundsObject = o.makeSoundsObject, exports.makeStateData = o.makeStateData, exports.makeSystemAdvanced = o.makeSystemAdvanced, exports.makeSystemData = o.makeSystemData, exports.makeTitleCommandWindow = o.makeTitleCommandWindow, exports.makeTroopData = o.makeTroopData, exports.makeTroopEventConditions = o.makeTroopEventConditions, exports.makeTroopMember = o.makeTroopMember, exports.makeVehicleData = o.makeVehicleData, exports.makeWeaponData = o.makeWeaponData, exports.normalizeDataActor = o.normalizeDataActor, exports.pluginSourceToJSON = o.pluginSourceToJSON, exports.readNote = o.readNote, exports.readNoteObject = o.readNoteObject, exports.replaceNote = o.replaceNote, exports.setNoteValue = o.setNoteValue, exports.structToJSONSchema = o.structToJSONSchema, exports.toArrayCommonEvent = o.toArrayCommonEvent, exports.toArrayControlSwitches = o.toArrayControlSwitches, exports.toArrayInputNumber = o.toArrayInputNumber, exports.toArrayOperandActorStatus = o.toArrayOperandActorStatus, exports.toArrayOperandConstant = o.toArrayOperandConstant, exports.toArrayOperandEnemyStatus = o.toArrayOperandEnemyStatus, exports.toArrayOperandItemData = o.toArrayOperandItemData, exports.toArrayOperandRandom = o.toArrayOperandRandom, exports.toArrayOperandScript = o.toArrayOperandScript, exports.toArrayOperandVariable = o.toArrayOperandVariable, exports.toArraySetupChoice = o.toArraySetupChoice, exports.toArraySetupChoiceItem = o.toArraySetupChoiceItem, exports.toArrayShowMessageHeader = o.toArrayShowMessageHeader, exports.COLLAPS_BOSS = i.COLLAPS_BOSS, exports.COLLAPS_INSTANT = i.COLLAPS_INSTANT, exports.COLLAPS_NONE = i.COLLAPS_NONE, exports.COLLAPS_NORMAL = i.COLLAPS_NORMAL, exports.EFFECT_ADD_BUFF = i.EFFECT_ADD_BUFF, exports.EFFECT_ADD_DEBUFF = i.EFFECT_ADD_DEBUFF, exports.EFFECT_ADD_STATE = i.EFFECT_ADD_STATE, exports.EFFECT_COMMON_EVENT = i.EFFECT_COMMON_EVENT, exports.EFFECT_GAIN_TP = i.EFFECT_GAIN_TP, exports.EFFECT_GROW = i.EFFECT_GROW, exports.EFFECT_LEARN_SKILL = i.EFFECT_LEARN_SKILL, exports.EFFECT_RECOVER_HP = i.EFFECT_RECOVER_HP, exports.EFFECT_RECOVER_MP = i.EFFECT_RECOVER_MP, exports.EFFECT_REMOVE_BUFF = i.EFFECT_REMOVE_BUFF, exports.EFFECT_REMOVE_DEBUFF = i.EFFECT_REMOVE_DEBUFF, exports.EFFECT_REMOVE_STATE = i.EFFECT_REMOVE_STATE, exports.EFFECT_SPECIAL = i.EFFECT_SPECIAL, exports.EXTRA_PARAM_CEV = i.EXTRA_PARAM_CEV, exports.EXTRA_PARAM_CNT = i.EXTRA_PARAM_CNT, exports.EXTRA_PARAM_CRI = i.EXTRA_PARAM_CRI, exports.EXTRA_PARAM_EVA = i.EXTRA_PARAM_EVA, exports.EXTRA_PARAM_HIT = i.EXTRA_PARAM_HIT, exports.EXTRA_PARAM_HRG = i.EXTRA_PARAM_HRG, exports.EXTRA_PARAM_MEV = i.EXTRA_PARAM_MEV, exports.EXTRA_PARAM_MRF = i.EXTRA_PARAM_MRF, exports.EXTRA_PARAM_MRG = i.EXTRA_PARAM_MRG, exports.EXTRA_PARAM_TRG = i.EXTRA_PARAM_TRG, exports.FLAG_ID_AUTO_BATTLE = i.FLAG_ID_AUTO_BATTLE, exports.FLAG_ID_GUARD = i.FLAG_ID_GUARD, exports.FLAG_ID_PRESERVE_TP = i.FLAG_ID_PRESERVE_TP, exports.FLAG_ID_SUBSTITUTE = i.FLAG_ID_SUBSTITUTE, exports.PARTY_ABILITY_CANCEL_SURPRISE = i.PARTY_ABILITY_CANCEL_SURPRISE, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = i.PARTY_ABILITY_DROP_ITEM_DOUBLE, exports.PARTY_ABILITY_ENCOUNTER_HALF = i.PARTY_ABILITY_ENCOUNTER_HALF, exports.PARTY_ABILITY_ENCOUNTER_NONE = i.PARTY_ABILITY_ENCOUNTER_NONE, exports.PARTY_ABILITY_GOLD_DOUBLE = i.PARTY_ABILITY_GOLD_DOUBLE, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = i.PARTY_ABILITY_RAISE_PREEMPTIVE, exports.REGULAR_PARAM_AGI = i.REGULAR_PARAM_AGI, exports.REGULAR_PARAM_ATK = i.REGULAR_PARAM_ATK, exports.REGULAR_PARAM_DEF = i.REGULAR_PARAM_DEF, exports.REGULAR_PARAM_LUK = i.REGULAR_PARAM_LUK, exports.REGULAR_PARAM_MATK = i.REGULAR_PARAM_MATK, exports.REGULAR_PARAM_MAX_HP = i.REGULAR_PARAM_MAX_HP, exports.REGULAR_PARAM_MAX_MP = i.REGULAR_PARAM_MAX_MP, exports.REGULAR_PARAM_MDEF = i.REGULAR_PARAM_MDEF, exports.SPECIAL_PARAM_EXR = i.SPECIAL_PARAM_EXR, exports.SPECIAL_PARAM_FDR = i.SPECIAL_PARAM_FDR, exports.SPECIAL_PARAM_GRD = i.SPECIAL_PARAM_GRD, exports.SPECIAL_PARAM_MCR = i.SPECIAL_PARAM_MCR, exports.SPECIAL_PARAM_MDR = i.SPECIAL_PARAM_MDR, exports.SPECIAL_PARAM_PDR = i.SPECIAL_PARAM_PDR, exports.SPECIAL_PARAM_PHA = i.SPECIAL_PARAM_PHA, exports.SPECIAL_PARAM_REC = i.SPECIAL_PARAM_REC, exports.SPECIAL_PARAM_TCR = i.SPECIAL_PARAM_TCR, exports.SPECIAL_PARAM_TGR = i.SPECIAL_PARAM_TGR, exports.TRAIT_ACTION_PLUS = i.TRAIT_ACTION_PLUS, exports.TRAIT_ATTACK_ELEMENT = i.TRAIT_ATTACK_ELEMENT, exports.TRAIT_ATTACK_SKILL = i.TRAIT_ATTACK_SKILL, exports.TRAIT_ATTACK_SPEED = i.TRAIT_ATTACK_SPEED, exports.TRAIT_ATTACK_STATE = i.TRAIT_ATTACK_STATE, exports.TRAIT_ATTACK_TIMES = i.TRAIT_ATTACK_TIMES, exports.TRAIT_COLLAPSE_TYPE = i.TRAIT_COLLAPSE_TYPE, exports.TRAIT_DEBUFF_RATE = i.TRAIT_DEBUFF_RATE, exports.TRAIT_ELEMENT_RATE = i.TRAIT_ELEMENT_RATE, exports.TRAIT_EQUIP_ARMOR_TYPE = i.TRAIT_EQUIP_ARMOR_TYPE, exports.TRAIT_EQUIP_LOCK = i.TRAIT_EQUIP_LOCK, exports.TRAIT_EQUIP_SEAL = i.TRAIT_EQUIP_SEAL, exports.TRAIT_EQUIP_WEAPON_TYPE = i.TRAIT_EQUIP_WEAPON_TYPE, exports.TRAIT_PARAM = i.TRAIT_PARAM, exports.TRAIT_PARTY_ABILITY = i.TRAIT_PARTY_ABILITY, exports.TRAIT_SKILL_ADD = i.TRAIT_SKILL_ADD, exports.TRAIT_SKILL_SEAL = i.TRAIT_SKILL_SEAL, exports.TRAIT_SKILL_TYPE_ADD = i.TRAIT_SKILL_TYPE_ADD, exports.TRAIT_SKILL_TYPE_SEAL = i.TRAIT_SKILL_TYPE_SEAL, exports.TRAIT_SLOT_TYPE = i.TRAIT_SLOT_TYPE, exports.TRAIT_SPARAM = i.TRAIT_SPARAM, exports.TRAIT_SPECIAL_FLAG = i.TRAIT_SPECIAL_FLAG, exports.TRAIT_STATE_RATE = i.TRAIT_STATE_RATE, exports.TRAIT_STATE_RESIST = i.TRAIT_STATE_RESIST, exports.TRAIT_XPARAM = i.TRAIT_XPARAM, exports.collapsOptionsToArray = i.collapsOptionsToArray, exports.defineGameDataSources = i.defineGameDataSources, exports.defineSystemItems = i.defineSystemItems, exports.defineTraitCollapseType = i.defineTraitCollapseType, exports.defineTraitExtraParam = i.defineTraitExtraParam, exports.defineTraitItems = i.defineTraitItems, exports.defineTraitPartyAbility = i.defineTraitPartyAbility, exports.defineTraitRegularParam = i.defineTraitRegularParam, exports.defineTraitSpecialFlag = i.defineTraitSpecialFlag, exports.defineTraitSpecialParam = i.defineTraitSpecialParam, exports.extraParamName = i.extraParamName, exports.extraParamsToArray = i.extraParamsToArray, exports.getArmorTypes = i.getArmorTypes, exports.getElementTypes = i.getElementTypes, exports.getEquipTypes = i.getEquipTypes, exports.getSkillTypes = i.getSkillTypes, exports.getSwitches = i.getSwitches, exports.getVariableNames = i.getVariableNames, exports.getWeaponTypes = i.getWeaponTypes, exports.partyAbilityToArray = i.partyAbilityToArray, exports.regularParamName = i.regularParamName, exports.regularParamsToArray = i.regularParamsToArray, exports.resolveItemEffectLabels = i.resolveItemEffectLabels, exports.resolveTraitLabels = i.resolveTraitLabels, exports.specialFlagToArray = i.specialFlagToArray, exports.specialParamName = i.specialParamName, exports.specialParamsToArray = i.specialParamsToArray, exports.isDataActor = (e2) => n(e2), exports.isDataArmor2 = (e2) => R(e2), exports.isDataClass = (e2) => N(e2);
//# sourceMappingURL=main.cjs.js.map
