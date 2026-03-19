import { g as v } from "../../shared/_commonjsHelpers.es.js";
var C, F = { exports: {} };
const K = v((function() {
  if (C) return F.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let d;
      if (e.name === void 0 && (d = "name") || e.id === void 0 && (d = "id") || e.nickname === void 0 && (d = "nickname") || e.battlerName === void 0 && (d = "battlerName") || e.characterName === void 0 && (d = "characterName") || e.characterIndex === void 0 && (d = "characterIndex") || e.faceName === void 0 && (d = "faceName") || e.faceIndex === void 0 && (d = "faceIndex") || e.classId === void 0 && (d = "classId") || e.initialLevel === void 0 && (d = "initialLevel") || e.maxLevel === void 0 && (d = "maxLevel")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: d },
        message: "must have required property '" + d + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.battlerName !== void 0) {
          if (typeof e.battlerName != "string") return t.errors = [{
            instancePath: i + "/battlerName",
            schemaPath: "#/properties/battlerName/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], !1;
          s = !0;
        } else s = !0;
        if (s) {
          if (e.characterName !== void 0) {
            if (typeof e.characterName != "string") return t.errors = [{
              instancePath: i + "/characterName",
              schemaPath: "#/properties/characterName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.characterIndex !== void 0) {
              let a = e.characterIndex;
              const r = 0;
              if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{ instancePath: i + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], !1;
              s = r === 0;
            } else s = !0;
            if (s) {
              if (e.faceName !== void 0) {
                if (typeof e.faceName != "string") return t.errors = [{
                  instancePath: i + "/faceName",
                  schemaPath: "#/properties/faceName/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                s = !0;
              } else s = !0;
              if (s) {
                if (e.faceIndex !== void 0) {
                  let a = e.faceIndex;
                  const r = 0;
                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                    instancePath: i + "/faceIndex",
                    schemaPath: "#/properties/faceIndex/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  if (typeof a == "number" && isFinite(a)) {
                    if (a > 7 || isNaN(a)) return t.errors = [{
                      instancePath: i + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 7 },
                      message: "must be <= 7"
                    }], !1;
                    if (a < 0 || isNaN(a)) return t.errors = [{
                      instancePath: i + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], !1;
                  }
                  s = r === 0;
                } else s = !0;
                if (s) {
                  if (e.id !== void 0) {
                    let a = e.id;
                    const r = 0;
                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                      instancePath: i + "/id",
                      schemaPath: "#/properties/id/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{
                      instancePath: i + "/id",
                      schemaPath: "#/properties/id/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], !1;
                    s = r === 0;
                  } else s = !0;
                  if (s) {
                    if (e.nickname !== void 0) {
                      if (typeof e.nickname != "string") return t.errors = [{
                        instancePath: i + "/nickname",
                        schemaPath: "#/properties/nickname/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], !1;
                      s = !0;
                    } else s = !0;
                    if (s) {
                      if (e.profile !== void 0) {
                        if (typeof e.profile != "string") return t.errors = [{ instancePath: i + "/profile", schemaPath: "#/properties/profile/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
                        s = !0;
                      } else s = !0;
                      if (s) {
                        if (e.initialLevel !== void 0) {
                          let a = e.initialLevel;
                          const r = 0;
                          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                            instancePath: i + "/initialLevel",
                            schemaPath: "#/properties/initialLevel/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{ instancePath: i + "/initialLevel", schemaPath: "#/properties/initialLevel/minimum", keyword: "minimum", params: {
                            comparison: ">=",
                            limit: 0
                          }, message: "must be >= 0" }], !1;
                          s = r === 0;
                        } else s = !0;
                        if (s) {
                          if (e.maxLevel !== void 0) {
                            let a = e.maxLevel;
                            const r = 0;
                            if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                              instancePath: i + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            s = r === 0;
                          } else s = !0;
                          if (s) {
                            if (e.classId !== void 0) {
                              let a = e.classId;
                              const r = 0;
                              if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                                instancePath: i + "/classId",
                                schemaPath: "#/properties/classId/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{ instancePath: i + "/classId", schemaPath: "#/properties/classId/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: 0
                              }, message: "must be >= 0" }], !1;
                              s = r === 0;
                            } else s = !0;
                            if (s) {
                              if (e.equips !== void 0) {
                                let a = e.equips;
                                const r = 0;
                                if (!Array.isArray(a)) return t.errors = [{
                                  instancePath: i + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], !1;
                                {
                                  const o = a.length;
                                  for (let y = 0; y < o; y++) {
                                    let p = a[y];
                                    const n = 0;
                                    if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{ instancePath: i + "/equips/" + y, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], !1;
                                    if (n !== 0) break;
                                  }
                                }
                                s = r === 0;
                              } else s = !0;
                              if (s) {
                                if (e.note !== void 0) {
                                  if (typeof e.note != "string") return t.errors = [{
                                    instancePath: i + "/note",
                                    schemaPath: "#/properties/note/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], !1;
                                  s = !0;
                                } else s = !0;
                                if (s) if (e.traits !== void 0) {
                                  let a = e.traits;
                                  const r = 0;
                                  if (!Array.isArray(a)) return t.errors = [{
                                    instancePath: i + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], !1;
                                  {
                                    const o = a.length;
                                    for (let y = 0; y < o; y++) {
                                      let p = a[y];
                                      const n = 0;
                                      if (!p || typeof p != "object" || Array.isArray(p)) return t.errors = [{
                                        instancePath: i + "/traits/" + y,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], !1;
                                      {
                                        let m;
                                        if (p.code === void 0 && (m = "code") || p.dataId === void 0 && (m = "dataId") || p.value === void 0 && (m = "value")) return t.errors = [{
                                          instancePath: i + "/traits/" + y,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: m },
                                          message: "must have required property '" + m + "'"
                                        }], !1;
                                        for (const c in p) if (c !== "code" && c !== "dataId" && c !== "value") return t.errors = [{
                                          instancePath: i + "/traits/" + y,
                                          schemaPath: "#/properties/traits/items/additionalProperties",
                                          keyword: "additionalProperties",
                                          params: { additionalProperty: c },
                                          message: "must NOT have additional properties"
                                        }], !1;
                                        if (p.code !== void 0) {
                                          let c = p.code;
                                          const u = 0;
                                          if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return t.errors = [{
                                            instancePath: i + "/traits/" + y + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], !1;
                                          var g = u === 0;
                                        } else g = !0;
                                        if (g) {
                                          if (p.dataId !== void 0) {
                                            let c = p.dataId;
                                            const u = 0;
                                            if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return t.errors = [{
                                              instancePath: i + "/traits/" + y + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], !1;
                                            g = u === 0;
                                          } else g = !0;
                                          if (g) if (p.value !== void 0) {
                                            let c = p.value;
                                            const u = 0;
                                            if (typeof c != "number" || !isFinite(c)) return t.errors = [{ instancePath: i + "/traits/" + y + "/value", schemaPath: "#/properties/traits/items/properties/value/type", keyword: "type", params: {
                                              type: "number"
                                            }, message: "must be number" }], !1;
                                            g = u === 0;
                                          } else g = !0;
                                        }
                                      }
                                      if (n !== 0) break;
                                    }
                                  }
                                  s = r === 0;
                                } else s = !0;
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
    return t.errors = null, !0;
  }
  return C = 1, F.exports = t, F.exports.default = t, F.exports;
})()), oe = (t) => K(t);
var L, x = { exports: {} };
const Q = v((function() {
  if (L) return x.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let o;
      if (e.name === void 0 && (o = "name") || e.id === void 0 && (o = "id") || e.effectName === void 0 && (o = "effectName") || e.displayType === void 0 && (o = "displayType") || e.offsetX === void 0 && (o = "offsetX") || e.offsetY === void 0 && (o = "offsetY") || e.scale === void 0 && (o = "scale") || e.speed === void 0 && (o = "speed") || e.rotation === void 0 && (o = "rotation") || e.soundTimings === void 0 && (o = "soundTimings") || e.flashTimings === void 0 && (o = "flashTimings")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: o },
        message: "must have required property '" + o + "'"
      }], !1;
      if (e.speed !== void 0) {
        let y = e.speed;
        const p = 0;
        if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
          instancePath: i + "/speed",
          schemaPath: "#/properties/speed/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (typeof y == "number" && isFinite(y) && (y < 1 || isNaN(y))) return t.errors = [{
          instancePath: i + "/speed",
          schemaPath: "#/properties/speed/minimum",
          keyword: "minimum",
          params: { comparison: ">=", limit: 1 },
          message: "must be >= 1"
        }], !1;
        var s = p === 0;
      } else s = !0;
      if (s) {
        if (e.displayType !== void 0) {
          let y = e.displayType;
          const p = 0;
          if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{ instancePath: i + "/displayType", schemaPath: "#/properties/displayType/type", keyword: "type", params: {
            type: "integer"
          }, message: "must be integer" }], !1;
          s = p === 0;
        } else s = !0;
        if (s) {
          if (e.effectName !== void 0) {
            if (typeof e.effectName != "string") return t.errors = [{
              instancePath: i + "/effectName",
              schemaPath: "#/properties/effectName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.id !== void 0) {
              let y = e.id;
              const p = 0;
              if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
                instancePath: i + "/id",
                schemaPath: "#/properties/id/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof y == "number" && isFinite(y) && (y < 0 || isNaN(y))) return t.errors = [{
                instancePath: i + "/id",
                schemaPath: "#/properties/id/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], !1;
              s = p === 0;
            } else s = !0;
            if (s) {
              if (e.name !== void 0) {
                if (typeof e.name != "string") return t.errors = [{
                  instancePath: i + "/name",
                  schemaPath: "#/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                s = !0;
              } else s = !0;
              if (s) {
                if (e.offsetX !== void 0) {
                  let y = e.offsetX;
                  const p = 0;
                  if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
                    instancePath: i + "/offsetX",
                    schemaPath: "#/properties/offsetX/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  s = p === 0;
                } else s = !0;
                if (s) {
                  if (e.offsetY !== void 0) {
                    let y = e.offsetY;
                    const p = 0;
                    if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
                      instancePath: i + "/offsetY",
                      schemaPath: "#/properties/offsetY/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    s = p === 0;
                  } else s = !0;
                  if (s) {
                    if (e.rotation !== void 0) {
                      let y = e.rotation;
                      const p = 0;
                      if (!y || typeof y != "object" || Array.isArray(y)) return t.errors = [{
                        instancePath: i + "/rotation",
                        schemaPath: "#/properties/rotation/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], !1;
                      {
                        let n;
                        if (y.x === void 0 && (n = "x") || y.y === void 0 && (n = "y") || y.z === void 0 && (n = "z")) return t.errors = [{
                          instancePath: i + "/rotation",
                          schemaPath: "#/properties/rotation/required",
                          keyword: "required",
                          params: { missingProperty: n },
                          message: "must have required property '" + n + "'"
                        }], !1;
                        if (y.x !== void 0) {
                          let m = y.x;
                          const c = 0;
                          if (typeof m != "number" || !isFinite(m)) return t.errors = [{
                            instancePath: i + "/rotation/x",
                            schemaPath: "#/properties/rotation/properties/x/type",
                            keyword: "type",
                            params: { type: "number" },
                            message: "must be number"
                          }], !1;
                          var g = c === 0;
                        } else g = !0;
                        if (g) {
                          if (y.y !== void 0) {
                            let m = y.y;
                            const c = 0;
                            if (typeof m != "number" || !isFinite(m)) return t.errors = [{
                              instancePath: i + "/rotation/y",
                              schemaPath: "#/properties/rotation/properties/y/type",
                              keyword: "type",
                              params: { type: "number" },
                              message: "must be number"
                            }], !1;
                            g = c === 0;
                          } else g = !0;
                          if (g) if (y.z !== void 0) {
                            let m = y.z;
                            const c = 0;
                            if (typeof m != "number" || !isFinite(m)) return t.errors = [{
                              instancePath: i + "/rotation/z",
                              schemaPath: "#/properties/rotation/properties/z/type",
                              keyword: "type",
                              params: { type: "number" },
                              message: "must be number"
                            }], !1;
                            g = c === 0;
                          } else g = !0;
                        }
                      }
                      s = p === 0;
                    } else s = !0;
                    if (s) {
                      if (e.scale !== void 0) {
                        let y = e.scale;
                        const p = 0;
                        if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
                          instancePath: i + "/scale",
                          schemaPath: "#/properties/scale/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        if (typeof y == "number" && isFinite(y) && (y < 1 || isNaN(y))) return t.errors = [{
                          instancePath: i + "/scale",
                          schemaPath: "#/properties/scale/minimum",
                          keyword: "minimum",
                          params: { comparison: ">=", limit: 1 },
                          message: "must be >= 1"
                        }], !1;
                        s = p === 0;
                      } else s = !0;
                      if (s) {
                        if (e.flashTimings !== void 0) {
                          let y = e.flashTimings;
                          const p = 0;
                          if (!Array.isArray(y)) return t.errors = [{ instancePath: i + "/flashTimings", schemaPath: "#/properties/flashTimings/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                          {
                            const n = y.length;
                            for (let m = 0; m < n; m++) {
                              let c = y[m];
                              const u = 0;
                              if (!c || typeof c != "object" || Array.isArray(c)) return t.errors = [{
                                instancePath: i + "/flashTimings/" + m,
                                schemaPath: "#/properties/flashTimings/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], !1;
                              {
                                let f;
                                if (c.color === void 0 && (f = "color") || c.duration === void 0 && (f = "duration") || c.frame === void 0 && (f = "frame")) return t.errors = [{
                                  instancePath: i + "/flashTimings/" + m,
                                  schemaPath: "#/properties/flashTimings/items/required",
                                  keyword: "required",
                                  params: { missingProperty: f },
                                  message: "must have required property '" + f + "'"
                                }], !1;
                                if (c.color !== void 0) {
                                  let h = c.color;
                                  const l = 0;
                                  if (!Array.isArray(h)) return t.errors = [{
                                    instancePath: i + "/flashTimings/" + m + "/color",
                                    schemaPath: "#/properties/flashTimings/items/properties/color/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], !1;
                                  if (h.length > 4) return t.errors = [{
                                    instancePath: i + "/flashTimings/" + m + "/color",
                                    schemaPath: "#/properties/flashTimings/items/properties/color/maxItems",
                                    keyword: "maxItems",
                                    params: { limit: 4 },
                                    message: "must NOT have more than 4 items"
                                  }], !1;
                                  if (h.length < 4) return t.errors = [{ instancePath: i + "/flashTimings/" + m + "/color", schemaPath: "#/properties/flashTimings/items/properties/color/minItems", keyword: "minItems", params: {
                                    limit: 4
                                  }, message: "must NOT have fewer than 4 items" }], !1;
                                  {
                                    const I = h.length;
                                    for (let P = 0; P < I; P++) {
                                      let b = h[P];
                                      const J = 0;
                                      if (typeof b != "number" || b % 1 || isNaN(b) || !isFinite(b)) return t.errors = [{
                                        instancePath: i + "/flashTimings/" + m + "/color/" + P,
                                        schemaPath: "#/properties/flashTimings/items/properties/color/items/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      if (typeof b == "number" && isFinite(b)) {
                                        if (b > 255 || isNaN(b)) return t.errors = [{
                                          instancePath: i + "/flashTimings/" + m + "/color/" + P,
                                          schemaPath: "#/properties/flashTimings/items/properties/color/items/maximum",
                                          keyword: "maximum",
                                          params: { comparison: "<=", limit: 255 },
                                          message: "must be <= 255"
                                        }], !1;
                                        if (b < 0 || isNaN(b)) return t.errors = [{
                                          instancePath: i + "/flashTimings/" + m + "/color/" + P,
                                          schemaPath: "#/properties/flashTimings/items/properties/color/items/minimum",
                                          keyword: "minimum",
                                          params: { comparison: ">=", limit: 0 },
                                          message: "must be >= 0"
                                        }], !1;
                                      }
                                      if (J !== 0) break;
                                    }
                                  }
                                  var d = l === 0;
                                } else d = !0;
                                if (d) {
                                  if (c.duration !== void 0) {
                                    let h = c.duration;
                                    const l = 0;
                                    if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                      instancePath: i + "/flashTimings/" + m + "/duration",
                                      schemaPath: "#/properties/flashTimings/items/properties/duration/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    d = l === 0;
                                  } else d = !0;
                                  if (d) if (c.frame !== void 0) {
                                    let h = c.frame;
                                    const l = 0;
                                    if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                      instancePath: i + "/flashTimings/" + m + "/frame",
                                      schemaPath: "#/properties/flashTimings/items/properties/frame/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    d = l === 0;
                                  } else d = !0;
                                }
                              }
                              if (u !== 0) break;
                            }
                          }
                          s = p === 0;
                        } else s = !0;
                        if (s) if (e.soundTimings !== void 0) {
                          let y = e.soundTimings;
                          const p = 0;
                          if (!Array.isArray(y)) return t.errors = [{
                            instancePath: i + "/soundTimings",
                            schemaPath: "#/properties/soundTimings/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], !1;
                          {
                            const n = y.length;
                            for (let m = 0; m < n; m++) {
                              let c = y[m];
                              const u = 0;
                              if (!c || typeof c != "object" || Array.isArray(c)) return t.errors = [{
                                instancePath: i + "/soundTimings/" + m,
                                schemaPath: "#/properties/soundTimings/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], !1;
                              {
                                let f;
                                if (c.se === void 0 && (f = "se") || c.frame === void 0 && (f = "frame")) return t.errors = [{
                                  instancePath: i + "/soundTimings/" + m,
                                  schemaPath: "#/properties/soundTimings/items/required",
                                  keyword: "required",
                                  params: { missingProperty: f },
                                  message: "must have required property '" + f + "'"
                                }], !1;
                                if (c.frame !== void 0) {
                                  let h = c.frame;
                                  const l = 0;
                                  if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                    instancePath: i + "/soundTimings/" + m + "/frame",
                                    schemaPath: "#/properties/soundTimings/items/properties/frame/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  var a = l === 0;
                                } else a = !0;
                                if (a) if (c.se !== void 0) {
                                  let h = c.se;
                                  const l = 0;
                                  if (!h || typeof h != "object" || Array.isArray(h)) return t.errors = [{
                                    instancePath: i + "/soundTimings/" + m + "/se",
                                    schemaPath: "#/properties/soundTimings/items/properties/se/type",
                                    keyword: "type",
                                    params: { type: "object" },
                                    message: "must be object"
                                  }], !1;
                                  {
                                    let I;
                                    if (h.name === void 0 && (I = "name") || h.volume === void 0 && (I = "volume") || h.pitch === void 0 && (I = "pitch") || h.pan === void 0 && (I = "pan")) return t.errors = [{
                                      instancePath: i + "/soundTimings/" + m + "/se",
                                      schemaPath: "#/properties/soundTimings/items/properties/se/required",
                                      keyword: "required",
                                      params: { missingProperty: I },
                                      message: "must have required property '" + I + "'"
                                    }], !1;
                                    if (h.name !== void 0) {
                                      if (typeof h.name != "string") return t.errors = [{
                                        instancePath: i + "/soundTimings/" + m + "/se/name",
                                        schemaPath: "#/properties/soundTimings/items/properties/se/properties/name/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string"
                                      }], !1;
                                      var r = !0;
                                    } else r = !0;
                                    if (r) {
                                      if (h.pan !== void 0) {
                                        let P = h.pan;
                                        const b = 0;
                                        if (typeof P != "number" || P % 1 || isNaN(P) || !isFinite(P)) return t.errors = [{
                                          instancePath: i + "/soundTimings/" + m + "/se/pan",
                                          schemaPath: "#/properties/soundTimings/items/properties/se/properties/pan/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], !1;
                                        r = b === 0;
                                      } else r = !0;
                                      if (r) {
                                        if (h.pitch !== void 0) {
                                          let P = h.pitch;
                                          const b = 0;
                                          if (typeof P != "number" || P % 1 || isNaN(P) || !isFinite(P)) return t.errors = [{
                                            instancePath: i + "/soundTimings/" + m + "/se/pitch",
                                            schemaPath: "#/properties/soundTimings/items/properties/se/properties/pitch/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], !1;
                                          r = b === 0;
                                        } else r = !0;
                                        if (r) if (h.volume !== void 0) {
                                          let P = h.volume;
                                          const b = 0;
                                          if (typeof P != "number" || P % 1 || isNaN(P) || !isFinite(P)) return t.errors = [{
                                            instancePath: i + "/soundTimings/" + m + "/se/volume",
                                            schemaPath: "#/properties/soundTimings/items/properties/se/properties/volume/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], !1;
                                          r = b === 0;
                                        } else r = !0;
                                      }
                                    }
                                  }
                                  a = l === 0;
                                } else a = !0;
                              }
                              if (u !== 0) break;
                            }
                          }
                          s = p === 0;
                        } else s = !0;
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
    return t.errors = null, !0;
  }
  return L = 1, x.exports = t, x.exports.default = t, x.exports;
})()), ne = (t) => Q(t);
var G, T = { exports: {} };
const U = v((function() {
  if (G) return T.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{ instancePath: i, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let a;
      if (e.name === void 0 && (a = "name") || e.id === void 0 && (a = "id") || e.description === void 0 && (a = "description") || e.iconIndex === void 0 && (a = "iconIndex") || e.price === void 0 && (a = "price") || e.params === void 0 && (a = "params") || e.traits === void 0 && (a = "traits") || e.note === void 0 && (a = "note") || e.etypeId === void 0 && (a = "etypeId") || e.atypeId === void 0 && (a = "atypeId")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a },
        message: "must have required property '" + a + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let r = e.id;
          const o = 0;
          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = o === 0;
        } else s = !0;
        if (s) {
          if (e.description !== void 0) {
            if (typeof e.description != "string") return t.errors = [{
              instancePath: i + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.iconIndex !== void 0) {
              let r = e.iconIndex;
              const o = 0;
              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], !1;
              s = o === 0;
            } else s = !0;
            if (s) {
              if (e.price !== void 0) {
                let r = e.price;
                const o = 0;
                if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                  instancePath: i + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], !1;
                if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                  instancePath: i + "/price",
                  schemaPath: "#/properties/price/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], !1;
                s = o === 0;
              } else s = !0;
              if (s) {
                if (e.note !== void 0) {
                  if (typeof e.note != "string") return t.errors = [{
                    instancePath: i + "/note",
                    schemaPath: "#/properties/note/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  s = !0;
                } else s = !0;
                if (s) {
                  if (e.etypeId !== void 0) {
                    let r = e.etypeId;
                    const o = 0;
                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                      instancePath: i + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                      instancePath: i + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], !1;
                    s = o === 0;
                  } else s = !0;
                  if (s) {
                    if (e.atypeId !== void 0) {
                      let r = e.atypeId;
                      const o = 0;
                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                        instancePath: i + "/atypeId",
                        schemaPath: "#/properties/atypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                        instancePath: i + "/atypeId",
                        schemaPath: "#/properties/atypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], !1;
                      s = o === 0;
                    } else s = !0;
                    if (s) {
                      if (e.params !== void 0) {
                        let r = e.params;
                        const o = 0;
                        if (!Array.isArray(r)) return t.errors = [{
                          instancePath: i + "/params",
                          schemaPath: "#/properties/params/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], !1;
                        if (r.length > 8) return t.errors = [{
                          instancePath: i + "/params",
                          schemaPath: "#/properties/params/maxItems",
                          keyword: "maxItems",
                          params: { limit: 8 },
                          message: "must NOT have more than 8 items"
                        }], !1;
                        if (r.length < 8) return t.errors = [{ instancePath: i + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                          limit: 8
                        }, message: "must NOT have fewer than 8 items" }], !1;
                        {
                          const y = r.length;
                          if (y > 0) {
                            let p = r[0];
                            const n = 0;
                            if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                              instancePath: i + "/params/0",
                              schemaPath: "#/properties/params/items/0/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            var g = n === 0;
                          }
                          if (g) {
                            if (y > 1) {
                              let p = r[1];
                              const n = 0;
                              if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{ instancePath: i + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], !1;
                              g = n === 0;
                            }
                            if (g) {
                              if (y > 2) {
                                let p = r[2];
                                const n = 0;
                                if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                  instancePath: i + "/params/2",
                                  schemaPath: "#/properties/params/items/2/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                g = n === 0;
                              }
                              if (g) {
                                if (y > 3) {
                                  let p = r[3];
                                  const n = 0;
                                  if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{ instancePath: i + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                    type: "integer"
                                  }, message: "must be integer" }], !1;
                                  g = n === 0;
                                }
                                if (g) {
                                  if (y > 4) {
                                    let p = r[4];
                                    const n = 0;
                                    if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                      instancePath: i + "/params/4",
                                      schemaPath: "#/properties/params/items/4/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    g = n === 0;
                                  }
                                  if (g) {
                                    if (y > 5) {
                                      let p = r[5];
                                      const n = 0;
                                      if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{ instancePath: i + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], !1;
                                      g = n === 0;
                                    }
                                    if (g) {
                                      if (y > 6) {
                                        let p = r[6];
                                        const n = 0;
                                        if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                          instancePath: i + "/params/6",
                                          schemaPath: "#/properties/params/items/6/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], !1;
                                        g = n === 0;
                                      }
                                      if (g && y > 7) {
                                        let p = r[7];
                                        const n = 0;
                                        if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{ instancePath: i + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], !1;
                                        g = n === 0;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        s = o === 0;
                      } else s = !0;
                      if (s) if (e.traits !== void 0) {
                        let r = e.traits;
                        const o = 0;
                        if (!Array.isArray(r)) return t.errors = [{
                          instancePath: i + "/traits",
                          schemaPath: "#/properties/traits/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], !1;
                        {
                          const y = r.length;
                          for (let p = 0; p < y; p++) {
                            let n = r[p];
                            const m = 0;
                            if (!n || typeof n != "object" || Array.isArray(n)) return t.errors = [{ instancePath: i + "/traits/" + p, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], !1;
                            {
                              let c;
                              if (n.code === void 0 && (c = "code") || n.dataId === void 0 && (c = "dataId") || n.value === void 0 && (c = "value")) return t.errors = [{
                                instancePath: i + "/traits/" + p,
                                schemaPath: "#/properties/traits/items/required",
                                keyword: "required",
                                params: { missingProperty: c },
                                message: "must have required property '" + c + "'"
                              }], !1;
                              for (const u in n) if (u !== "code" && u !== "dataId" && u !== "value") return t.errors = [{
                                instancePath: i + "/traits/" + p,
                                schemaPath: "#/properties/traits/items/additionalProperties",
                                keyword: "additionalProperties",
                                params: { additionalProperty: u },
                                message: "must NOT have additional properties"
                              }], !1;
                              if (n.code !== void 0) {
                                let u = n.code;
                                const f = 0;
                                if (typeof u != "number" || u % 1 || isNaN(u) || !isFinite(u)) return t.errors = [{
                                  instancePath: i + "/traits/" + p + "/code",
                                  schemaPath: "#/properties/traits/items/properties/code/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                var d = f === 0;
                              } else d = !0;
                              if (d) {
                                if (n.dataId !== void 0) {
                                  let u = n.dataId;
                                  const f = 0;
                                  if (typeof u != "number" || u % 1 || isNaN(u) || !isFinite(u)) return t.errors = [{
                                    instancePath: i + "/traits/" + p + "/dataId",
                                    schemaPath: "#/properties/traits/items/properties/dataId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  d = f === 0;
                                } else d = !0;
                                if (d) if (n.value !== void 0) {
                                  let u = n.value;
                                  const f = 0;
                                  if (typeof u != "number" || !isFinite(u)) return t.errors = [{ instancePath: i + "/traits/" + p + "/value", schemaPath: "#/properties/traits/items/properties/value/type", keyword: "type", params: {
                                    type: "number"
                                  }, message: "must be number" }], !1;
                                  d = f === 0;
                                } else d = !0;
                              }
                            }
                            if (m !== 0) break;
                          }
                        }
                        s = o === 0;
                      } else s = !0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return t.errors = null, !0;
  }
  return G = 1, T.exports = t, T.exports.default = t, T.exports;
})()), pe = (t) => U(t);
var X, A = { exports: {} };
const V = v((function() {
  if (X) return A.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{ instancePath: i, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let r;
      if (e.name === void 0 && (r = "name") || e.id === void 0 && (r = "id") || e.note === void 0 && (r = "note") || e.expParams === void 0 && (r = "expParams") || e.params === void 0 && (r = "params") || e.learnings === void 0 && (r = "learnings") || e.traits === void 0 && (r = "traits")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: r },
        message: "must have required property '" + r + "'"
      }], !1;
      for (const o in e) if (o !== "name" && o !== "id" && o !== "note" && o !== "expParams" && o !== "params" && o !== "learnings" && o !== "traits") return t.errors = [{
        instancePath: i,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: o },
        message: "must NOT have additional properties"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let o = e.id;
          const y = 0;
          if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = y === 0;
        } else s = !0;
        if (s) {
          if (e.note !== void 0) {
            if (typeof e.note != "string") return t.errors = [{
              instancePath: i + "/note",
              schemaPath: "#/properties/note/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.expParams !== void 0) {
              let o = e.expParams;
              const y = 0;
              if (!Array.isArray(o)) return t.errors = [{
                instancePath: i + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], !1;
              {
                const p = o.length;
                for (let n = 0; n < p; n++) {
                  let m = o[n];
                  const c = 0;
                  if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{ instancePath: i + "/expParams/" + n, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], !1;
                  if (c !== 0) break;
                }
              }
              s = y === 0;
            } else s = !0;
            if (s) {
              if (e.params !== void 0) {
                let o = e.params;
                const y = 0;
                if (!Array.isArray(o)) return t.errors = [{
                  instancePath: i + "/params",
                  schemaPath: "#/properties/params/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], !1;
                if (o.length > 8) return t.errors = [{
                  instancePath: i + "/params",
                  schemaPath: "#/properties/params/maxItems",
                  keyword: "maxItems",
                  params: { limit: 8 },
                  message: "must NOT have more than 8 items"
                }], !1;
                if (o.length < 8) return t.errors = [{
                  instancePath: i + "/params",
                  schemaPath: "#/properties/params/minItems",
                  keyword: "minItems",
                  params: { limit: 8 },
                  message: "must NOT have fewer than 8 items"
                }], !1;
                {
                  const p = o.length;
                  if (p > 0) {
                    let n = o[0];
                    const m = 0;
                    if (!Array.isArray(n)) return t.errors = [{
                      instancePath: i + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "array" },
                      message: "must be array"
                    }], !1;
                    {
                      const c = n.length;
                      for (let u = 0; u < c; u++) {
                        let f = n[u];
                        const h = 0;
                        if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                          instancePath: i + "/params/0/" + u,
                          schemaPath: "#/properties/params/items/0/items/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        if (h !== 0) break;
                      }
                    }
                    var g = m === 0;
                  }
                  if (g) {
                    if (p > 1) {
                      let n = o[1];
                      const m = 0;
                      if (!Array.isArray(n)) return t.errors = [{
                        instancePath: i + "/params/1",
                        schemaPath: "#/properties/params/items/1/type",
                        keyword: "type",
                        params: { type: "array" },
                        message: "must be array"
                      }], !1;
                      {
                        const c = n.length;
                        for (let u = 0; u < c; u++) {
                          let f = n[u];
                          const h = 0;
                          if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                            instancePath: i + "/params/1/" + u,
                            schemaPath: "#/properties/params/items/1/items/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (h !== 0) break;
                        }
                      }
                      g = m === 0;
                    }
                    if (g) {
                      if (p > 2) {
                        let n = o[2];
                        const m = 0;
                        if (!Array.isArray(n)) return t.errors = [{ instancePath: i + "/params/2", schemaPath: "#/properties/params/items/2/type", keyword: "type", params: {
                          type: "array"
                        }, message: "must be array" }], !1;
                        {
                          const c = n.length;
                          for (let u = 0; u < c; u++) {
                            let f = n[u];
                            const h = 0;
                            if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                              instancePath: i + "/params/2/" + u,
                              schemaPath: "#/properties/params/items/2/items/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            if (h !== 0) break;
                          }
                        }
                        g = m === 0;
                      }
                      if (g) {
                        if (p > 3) {
                          let n = o[3];
                          const m = 0;
                          if (!Array.isArray(n)) return t.errors = [{ instancePath: i + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "array"
                          }, message: "must be array" }], !1;
                          {
                            const c = n.length;
                            for (let u = 0; u < c; u++) {
                              let f = n[u];
                              const h = 0;
                              if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                instancePath: i + "/params/3/" + u,
                                schemaPath: "#/properties/params/items/3/items/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              if (h !== 0) break;
                            }
                          }
                          g = m === 0;
                        }
                        if (g) {
                          if (p > 4) {
                            let n = o[4];
                            const m = 0;
                            if (!Array.isArray(n)) return t.errors = [{ instancePath: i + "/params/4", schemaPath: "#/properties/params/items/4/type", keyword: "type", params: {
                              type: "array"
                            }, message: "must be array" }], !1;
                            {
                              const c = n.length;
                              for (let u = 0; u < c; u++) {
                                let f = n[u];
                                const h = 0;
                                if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                  instancePath: i + "/params/4/" + u,
                                  schemaPath: "#/properties/params/items/4/items/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (h !== 0) break;
                              }
                            }
                            g = m === 0;
                          }
                          if (g) {
                            if (p > 5) {
                              let n = o[5];
                              const m = 0;
                              if (!Array.isArray(n)) return t.errors = [{ instancePath: i + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "array"
                              }, message: "must be array" }], !1;
                              {
                                const c = n.length;
                                for (let u = 0; u < c; u++) {
                                  let f = n[u];
                                  const h = 0;
                                  if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                    instancePath: i + "/params/5/" + u,
                                    schemaPath: "#/properties/params/items/5/items/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  if (h !== 0) break;
                                }
                              }
                              g = m === 0;
                            }
                            if (g) {
                              if (p > 6) {
                                let n = o[6];
                                const m = 0;
                                if (!Array.isArray(n)) return t.errors = [{ instancePath: i + "/params/6", schemaPath: "#/properties/params/items/6/type", keyword: "type", params: {
                                  type: "array"
                                }, message: "must be array" }], !1;
                                {
                                  const c = n.length;
                                  for (let u = 0; u < c; u++) {
                                    let f = n[u];
                                    const h = 0;
                                    if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                      instancePath: i + "/params/6/" + u,
                                      schemaPath: "#/properties/params/items/6/items/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    if (h !== 0) break;
                                  }
                                }
                                g = m === 0;
                              }
                              if (g && p > 7) {
                                let n = o[7];
                                const m = 0;
                                if (!Array.isArray(n)) return t.errors = [{ instancePath: i + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "array"
                                }, message: "must be array" }], !1;
                                {
                                  const c = n.length;
                                  for (let u = 0; u < c; u++) {
                                    let f = n[u];
                                    const h = 0;
                                    if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                      instancePath: i + "/params/7/" + u,
                                      schemaPath: "#/properties/params/items/7/items/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    if (h !== 0) break;
                                  }
                                }
                                g = m === 0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                s = y === 0;
              } else s = !0;
              if (s) {
                if (e.learnings !== void 0) {
                  let o = e.learnings;
                  const y = 0;
                  if (!Array.isArray(o)) return t.errors = [{
                    instancePath: i + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], !1;
                  {
                    const p = o.length;
                    for (let n = 0; n < p; n++) {
                      let m = o[n];
                      const c = 0;
                      if (!m || typeof m != "object" || Array.isArray(m)) return t.errors = [{
                        instancePath: i + "/learnings/" + n,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], !1;
                      {
                        let u;
                        if (m.level === void 0 && (u = "level") || m.skillId === void 0 && (u = "skillId")) return t.errors = [{
                          instancePath: i + "/learnings/" + n,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: u },
                          message: "must have required property '" + u + "'"
                        }], !1;
                        for (const f in m) if (f !== "level" && f !== "skillId" && f !== "note") return t.errors = [{
                          instancePath: i + "/learnings/" + n,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: f },
                          message: "must NOT have additional properties"
                        }], !1;
                        if (m.level !== void 0) {
                          let f = m.level;
                          const h = 0;
                          if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                            instancePath: i + "/learnings/" + n + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          var d = h === 0;
                        } else d = !0;
                        if (d) {
                          if (m.skillId !== void 0) {
                            let f = m.skillId;
                            const h = 0;
                            if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                              instancePath: i + "/learnings/" + n + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            d = h === 0;
                          } else d = !0;
                          if (d) if (m.note !== void 0) {
                            if (typeof m.note != "string") return t.errors = [{
                              instancePath: i + "/learnings/" + n + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], !1;
                            d = !0;
                          } else d = !0;
                        }
                      }
                      if (c !== 0) break;
                    }
                  }
                  s = y === 0;
                } else s = !0;
                if (s) if (e.traits !== void 0) {
                  let o = e.traits;
                  const y = 0;
                  if (!Array.isArray(o)) return t.errors = [{
                    instancePath: i + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], !1;
                  {
                    const p = o.length;
                    for (let n = 0; n < p; n++) {
                      let m = o[n];
                      const c = 0;
                      if (!m || typeof m != "object" || Array.isArray(m)) return t.errors = [{
                        instancePath: i + "/traits/" + n,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], !1;
                      {
                        let u;
                        if (m.code === void 0 && (u = "code") || m.dataId === void 0 && (u = "dataId") || m.value === void 0 && (u = "value")) return t.errors = [{
                          instancePath: i + "/traits/" + n,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: u },
                          message: "must have required property '" + u + "'"
                        }], !1;
                        for (const f in m) if (f !== "code" && f !== "dataId" && f !== "value") return t.errors = [{
                          instancePath: i + "/traits/" + n,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: f },
                          message: "must NOT have additional properties"
                        }], !1;
                        if (m.code !== void 0) {
                          let f = m.code;
                          const h = 0;
                          if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                            instancePath: i + "/traits/" + n + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          var a = h === 0;
                        } else a = !0;
                        if (a) {
                          if (m.dataId !== void 0) {
                            let f = m.dataId;
                            const h = 0;
                            if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                              instancePath: i + "/traits/" + n + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            a = h === 0;
                          } else a = !0;
                          if (a) if (m.value !== void 0) {
                            let f = m.value;
                            const h = 0;
                            if (typeof f != "number" || !isFinite(f)) return t.errors = [{ instancePath: i + "/traits/" + n + "/value", schemaPath: "#/properties/traits/items/properties/value/type", keyword: "type", params: {
                              type: "number"
                            }, message: "must be number" }], !1;
                            a = h === 0;
                          } else a = !0;
                        }
                      }
                      if (c !== 0) break;
                    }
                  }
                  s = y === 0;
                } else s = !0;
              }
            }
          }
        }
      }
    }
    return t.errors = null, !0;
  }
  return X = 1, A.exports = t, A.exports.default = t, A.exports;
})()), me = (t) => V(t);
var Y, q = { exports: {} };
const Z = v((function() {
  if (Y) return q.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{ instancePath: i, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let d;
      if (e.trigger === void 0 && (d = "trigger") || e.id === void 0 && (d = "id") || e.name === void 0 && (d = "name") || e.list === void 0 && (d = "list") || e.switchId === void 0 && (d = "switchId")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: d },
        message: "must have required property '" + d + "'"
      }], !1;
      if (e.trigger !== void 0) {
        let a = e.trigger;
        const r = 0;
        if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{ instancePath: i + "/trigger", schemaPath: "#/properties/trigger/type", keyword: "type", params: {
          type: "integer"
        }, message: "must be integer" }], !1;
        if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{
          instancePath: i + "/trigger",
          schemaPath: "#/properties/trigger/minimum",
          keyword: "minimum",
          params: { comparison: ">=", limit: 0 },
          message: "must be >= 0"
        }], !1;
        var s = r === 0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let a = e.id;
          const r = 0;
          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = r === 0;
        } else s = !0;
        if (s) {
          if (e.name !== void 0) {
            if (typeof e.name != "string") return t.errors = [{
              instancePath: i + "/name",
              schemaPath: "#/properties/name/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.list !== void 0) {
              let a = e.list;
              const r = 0;
              if (!Array.isArray(a)) return t.errors = [{
                instancePath: i + "/list",
                schemaPath: "#/properties/list/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], !1;
              {
                const o = a.length;
                for (let y = 0; y < o; y++) {
                  let p = a[y];
                  const n = 0;
                  if (!p || typeof p != "object" || Array.isArray(p)) return t.errors = [{
                    instancePath: i + "/list/" + y,
                    schemaPath: "#/properties/list/items/type",
                    keyword: "type",
                    params: { type: "object" },
                    message: "must be object"
                  }], !1;
                  {
                    let m;
                    if (p.code === void 0 && (m = "code") || p.indent === void 0 && (m = "indent") || p.parameters === void 0 && (m = "parameters")) return t.errors = [{
                      instancePath: i + "/list/" + y,
                      schemaPath: "#/properties/list/items/required",
                      keyword: "required",
                      params: { missingProperty: m },
                      message: "must have required property '" + m + "'"
                    }], !1;
                    if (p.code !== void 0) {
                      let c = p.code;
                      const u = 0;
                      if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return t.errors = [{
                        instancePath: i + "/list/" + y + "/code",
                        schemaPath: "#/properties/list/items/properties/code/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      var g = u === 0;
                    } else g = !0;
                    if (g) {
                      if (p.indent !== void 0) {
                        let c = p.indent;
                        const u = 0;
                        if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return t.errors = [{
                          instancePath: i + "/list/" + y + "/indent",
                          schemaPath: "#/properties/list/items/properties/indent/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        g = u === 0;
                      } else g = !0;
                      if (g) if (p.parameters !== void 0) {
                        if (!Array.isArray(p.parameters)) return t.errors = [{
                          instancePath: i + "/list/" + y + "/parameters",
                          schemaPath: "#/properties/list/items/properties/parameters/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], !1;
                        g = !0;
                      } else g = !0;
                    }
                  }
                  if (n !== 0) break;
                }
              }
              s = r === 0;
            } else s = !0;
            if (s) if (e.switchId !== void 0) {
              let a = e.switchId;
              const r = 0;
              if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                instancePath: i + "/switchId",
                schemaPath: "#/properties/switchId/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{ instancePath: i + "/switchId", schemaPath: "#/properties/switchId/minimum", keyword: "minimum", params: {
                comparison: ">=",
                limit: 0
              }, message: "must be >= 0" }], !1;
              s = r === 0;
            } else s = !0;
          }
        }
      }
    }
    return t.errors = null, !0;
  }
  return Y = 1, q.exports = t, q.exports.default = t, q.exports;
})()), ye = (t) => Z(t);
var E, j = {
  exports: {}
};
const $ = v((function() {
  if (E) return j.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{ instancePath: i, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let o;
      if (e.name === void 0 && (o = "name") || e.id === void 0 && (o = "id") || e.battlerName === void 0 && (o = "battlerName") || e.battlerHue === void 0 && (o = "battlerHue") || e.exp === void 0 && (o = "exp") || e.gold === void 0 && (o = "gold") || e.note === void 0 && (o = "note") || e.params === void 0 && (o = "params") || e.dropItems === void 0 && (o = "dropItems") || e.traits === void 0 && (o = "traits") || e.actions === void 0 && (o = "actions")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: o },
        message: "must have required property '" + o + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let y = e.id;
          const p = 0;
          if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          s = p === 0;
        } else s = !0;
        if (s) {
          if (e.battlerHue !== void 0) {
            let y = e.battlerHue;
            const p = 0;
            if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{ instancePath: i + "/battlerHue", schemaPath: "#/properties/battlerHue/type", keyword: "type", params: {
              type: "integer"
            }, message: "must be integer" }], !1;
            s = p === 0;
          } else s = !0;
          if (s) {
            if (e.battlerName !== void 0) {
              if (typeof e.battlerName != "string") return t.errors = [{
                instancePath: i + "/battlerName",
                schemaPath: "#/properties/battlerName/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], !1;
              s = !0;
            } else s = !0;
            if (s) {
              if (e.exp !== void 0) {
                let y = e.exp;
                const p = 0;
                if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
                  instancePath: i + "/exp",
                  schemaPath: "#/properties/exp/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], !1;
                s = p === 0;
              } else s = !0;
              if (s) {
                if (e.gold !== void 0) {
                  let y = e.gold;
                  const p = 0;
                  if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return t.errors = [{
                    instancePath: i + "/gold",
                    schemaPath: "#/properties/gold/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  s = p === 0;
                } else s = !0;
                if (s) {
                  if (e.note !== void 0) {
                    if (typeof e.note != "string") return t.errors = [{
                      instancePath: i + "/note",
                      schemaPath: "#/properties/note/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], !1;
                    s = !0;
                  } else s = !0;
                  if (s) {
                    if (e.params !== void 0) {
                      let y = e.params;
                      const p = 0;
                      if (!Array.isArray(y)) return t.errors = [{ instancePath: i + "/params", schemaPath: "#/properties/params/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                      if (y.length > 8) return t.errors = [{ instancePath: i + "/params", schemaPath: "#/properties/params/maxItems", keyword: "maxItems", params: { limit: 8 }, message: "must NOT have more than 8 items" }], !1;
                      if (y.length < 8) return t.errors = [{
                        instancePath: i + "/params",
                        schemaPath: "#/properties/params/minItems",
                        keyword: "minItems",
                        params: { limit: 8 },
                        message: "must NOT have fewer than 8 items"
                      }], !1;
                      {
                        const n = y.length;
                        if (n > 0) {
                          let m = y[0];
                          const c = 0;
                          if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{
                            instancePath: i + "/params/0",
                            schemaPath: "#/properties/params/items/0/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          var g = c === 0;
                        }
                        if (g) {
                          if (n > 1) {
                            let m = y[1];
                            const c = 0;
                            if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{ instancePath: i + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                              type: "integer"
                            }, message: "must be integer" }], !1;
                            g = c === 0;
                          }
                          if (g) {
                            if (n > 2) {
                              let m = y[2];
                              const c = 0;
                              if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{
                                instancePath: i + "/params/2",
                                schemaPath: "#/properties/params/items/2/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              g = c === 0;
                            }
                            if (g) {
                              if (n > 3) {
                                let m = y[3];
                                const c = 0;
                                if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{ instancePath: i + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], !1;
                                g = c === 0;
                              }
                              if (g) {
                                if (n > 4) {
                                  let m = y[4];
                                  const c = 0;
                                  if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{
                                    instancePath: i + "/params/4",
                                    schemaPath: "#/properties/params/items/4/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  g = c === 0;
                                }
                                if (g) {
                                  if (n > 5) {
                                    let m = y[5];
                                    const c = 0;
                                    if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{ instancePath: i + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], !1;
                                    g = c === 0;
                                  }
                                  if (g) {
                                    if (n > 6) {
                                      let m = y[6];
                                      const c = 0;
                                      if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{
                                        instancePath: i + "/params/6",
                                        schemaPath: "#/properties/params/items/6/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      g = c === 0;
                                    }
                                    if (g && n > 7) {
                                      let m = y[7];
                                      const c = 0;
                                      if (typeof m != "number" || m % 1 || isNaN(m) || !isFinite(m)) return t.errors = [{ instancePath: i + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], !1;
                                      g = c === 0;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      s = p === 0;
                    } else s = !0;
                    if (s) {
                      if (e.actions !== void 0) {
                        let y = e.actions;
                        const p = 0;
                        if (!Array.isArray(y)) return t.errors = [{
                          instancePath: i + "/actions",
                          schemaPath: "#/properties/actions/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], !1;
                        {
                          const n = y.length;
                          for (let m = 0; m < n; m++) {
                            let c = y[m];
                            const u = 0;
                            if (!c || typeof c != "object" || Array.isArray(c)) return t.errors = [{ instancePath: i + "/actions/" + m, schemaPath: "#/properties/actions/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], !1;
                            {
                              let f;
                              if (c.conditionParam1 === void 0 && (f = "conditionParam1") || c.conditionParam2 === void 0 && (f = "conditionParam2") || c.conditionType === void 0 && (f = "conditionType") || c.skillId === void 0 && (f = "skillId") || c.rating === void 0 && (f = "rating")) return t.errors = [{
                                instancePath: i + "/actions/" + m,
                                schemaPath: "#/properties/actions/items/required",
                                keyword: "required",
                                params: { missingProperty: f },
                                message: "must have required property '" + f + "'"
                              }], !1;
                              if (c.conditionParam1 !== void 0) {
                                let h = c.conditionParam1;
                                const l = 0;
                                if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                  instancePath: i + "/actions/" + m + "/conditionParam1",
                                  schemaPath: "#/properties/actions/items/properties/conditionParam1/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                var d = l === 0;
                              } else d = !0;
                              if (d) {
                                if (c.conditionParam2 !== void 0) {
                                  let h = c.conditionParam2;
                                  const l = 0;
                                  if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                    instancePath: i + "/actions/" + m + "/conditionParam2",
                                    schemaPath: "#/properties/actions/items/properties/conditionParam2/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  d = l === 0;
                                } else d = !0;
                                if (d) {
                                  if (c.conditionType !== void 0) {
                                    let h = c.conditionType;
                                    const l = 0;
                                    if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                      instancePath: i + "/actions/" + m + "/conditionType",
                                      schemaPath: "#/properties/actions/items/properties/conditionType/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    d = l === 0;
                                  } else d = !0;
                                  if (d) {
                                    if (c.skillId !== void 0) {
                                      let h = c.skillId;
                                      const l = 0;
                                      if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                        instancePath: i + "/actions/" + m + "/skillId",
                                        schemaPath: "#/properties/actions/items/properties/skillId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      d = l === 0;
                                    } else d = !0;
                                    if (d) if (c.rating !== void 0) {
                                      let h = c.rating;
                                      const l = 0;
                                      if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                        instancePath: i + "/actions/" + m + "/rating",
                                        schemaPath: "#/properties/actions/items/properties/rating/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      d = l === 0;
                                    } else d = !0;
                                  }
                                }
                              }
                            }
                            if (u !== 0) break;
                          }
                        }
                        s = p === 0;
                      } else s = !0;
                      if (s) {
                        if (e.traits !== void 0) {
                          let y = e.traits;
                          const p = 0;
                          if (!Array.isArray(y)) return t.errors = [{
                            instancePath: i + "/traits",
                            schemaPath: "#/properties/traits/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], !1;
                          {
                            const n = y.length;
                            for (let m = 0; m < n; m++) {
                              let c = y[m];
                              const u = 0;
                              if (!c || typeof c != "object" || Array.isArray(c)) return t.errors = [{
                                instancePath: i + "/traits/" + m,
                                schemaPath: "#/properties/traits/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], !1;
                              {
                                let f;
                                if (c.code === void 0 && (f = "code") || c.dataId === void 0 && (f = "dataId") || c.value === void 0 && (f = "value")) return t.errors = [{
                                  instancePath: i + "/traits/" + m,
                                  schemaPath: "#/properties/traits/items/required",
                                  keyword: "required",
                                  params: { missingProperty: f },
                                  message: "must have required property '" + f + "'"
                                }], !1;
                                for (const h in c) if (h !== "code" && h !== "dataId" && h !== "value") return t.errors = [{
                                  instancePath: i + "/traits/" + m,
                                  schemaPath: "#/properties/traits/items/additionalProperties",
                                  keyword: "additionalProperties",
                                  params: { additionalProperty: h },
                                  message: "must NOT have additional properties"
                                }], !1;
                                if (c.code !== void 0) {
                                  let h = c.code;
                                  const l = 0;
                                  if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                    instancePath: i + "/traits/" + m + "/code",
                                    schemaPath: "#/properties/traits/items/properties/code/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  var a = l === 0;
                                } else a = !0;
                                if (a) {
                                  if (c.dataId !== void 0) {
                                    let h = c.dataId;
                                    const l = 0;
                                    if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                      instancePath: i + "/traits/" + m + "/dataId",
                                      schemaPath: "#/properties/traits/items/properties/dataId/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    a = l === 0;
                                  } else a = !0;
                                  if (a) if (c.value !== void 0) {
                                    let h = c.value;
                                    const l = 0;
                                    if (typeof h != "number" || !isFinite(h)) return t.errors = [{ instancePath: i + "/traits/" + m + "/value", schemaPath: "#/properties/traits/items/properties/value/type", keyword: "type", params: {
                                      type: "number"
                                    }, message: "must be number" }], !1;
                                    a = l === 0;
                                  } else a = !0;
                                }
                              }
                              if (u !== 0) break;
                            }
                          }
                          s = p === 0;
                        } else s = !0;
                        if (s) if (e.dropItems !== void 0) {
                          let y = e.dropItems;
                          const p = 0;
                          if (!Array.isArray(y)) return t.errors = [{ instancePath: i + "/dropItems", schemaPath: "#/properties/dropItems/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                          {
                            const n = y.length;
                            for (let m = 0; m < n; m++) {
                              let c = y[m];
                              const u = 0;
                              if (!c || typeof c != "object" || Array.isArray(c)) return t.errors = [{
                                instancePath: i + "/dropItems/" + m,
                                schemaPath: "#/properties/dropItems/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], !1;
                              {
                                let f;
                                if (c.kind === void 0 && (f = "kind") || c.dataId === void 0 && (f = "dataId") || c.denominator === void 0 && (f = "denominator")) return t.errors = [{
                                  instancePath: i + "/dropItems/" + m,
                                  schemaPath: "#/properties/dropItems/items/required",
                                  keyword: "required",
                                  params: { missingProperty: f },
                                  message: "must have required property '" + f + "'"
                                }], !1;
                                if (c.kind !== void 0) {
                                  let h = c.kind;
                                  const l = 0;
                                  if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                    instancePath: i + "/dropItems/" + m + "/kind",
                                    schemaPath: "#/properties/dropItems/items/properties/kind/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  var r = l === 0;
                                } else r = !0;
                                if (r) {
                                  if (c.dataId !== void 0) {
                                    let h = c.dataId;
                                    const l = 0;
                                    if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                      instancePath: i + "/dropItems/" + m + "/dataId",
                                      schemaPath: "#/properties/dropItems/items/properties/dataId/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    r = l === 0;
                                  } else r = !0;
                                  if (r) {
                                    if (c.denominator !== void 0) {
                                      let h = c.denominator;
                                      const l = 0;
                                      if (typeof h != "number" || h % 1 || isNaN(h) || !isFinite(h)) return t.errors = [{
                                        instancePath: i + "/dropItems/" + m + "/denominator",
                                        schemaPath: "#/properties/dropItems/items/properties/denominator/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      r = l === 0;
                                    } else r = !0;
                                    if (r) if (c.rate !== void 0) {
                                      let h = c.rate;
                                      const l = 0;
                                      if (typeof h != "number" || !isFinite(h)) return t.errors = [{
                                        instancePath: i + "/dropItems/" + m + "/rate",
                                        schemaPath: "#/properties/dropItems/items/properties/rate/type",
                                        keyword: "type",
                                        params: { type: "number" },
                                        message: "must be number"
                                      }], !1;
                                      r = l === 0;
                                    } else r = !0;
                                  }
                                }
                              }
                              if (u !== 0) break;
                            }
                          }
                          s = p === 0;
                        } else s = !0;
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
    return t.errors = null, !0;
  }
  return E = 1, j.exports = t, j.exports.default = t, j.exports;
})()), ce = (t) => $(t);
var z, D = { exports: {} };
const ee = v((function() {
  if (z) return D.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let a;
      if (e.name === void 0 && (a = "name") || e.id === void 0 && (a = "id") || e.description === void 0 && (a = "description") || e.iconIndex === void 0 && (a = "iconIndex") || e.note === void 0 && (a = "note") || e.animationId === void 0 && (a = "animationId") || e.hitType === void 0 && (a = "hitType") || e.occasion === void 0 && (a = "occasion") || e.repeats === void 0 && (a = "repeats") || e.scope === void 0 && (a = "scope") || e.speed === void 0 && (a = "speed") || e.successRate === void 0 && (a = "successRate") || e.tpGain === void 0 && (a = "tpGain") || e.consumable === void 0 && (a = "consumable") || e.price === void 0 && (a = "price") || e.effects === void 0 && (a = "effects")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a },
        message: "must have required property '" + a + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let r = e.id;
          const o = 0;
          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = o === 0;
        } else s = !0;
        if (s) {
          if (e.description !== void 0) {
            if (typeof e.description != "string") return t.errors = [{
              instancePath: i + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.iconIndex !== void 0) {
              let r = e.iconIndex;
              const o = 0;
              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], !1;
              s = o === 0;
            } else s = !0;
            if (s) {
              if (e.note !== void 0) {
                if (typeof e.note != "string") return t.errors = [{
                  instancePath: i + "/note",
                  schemaPath: "#/properties/note/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                s = !0;
              } else s = !0;
              if (s) {
                if (e.animationId !== void 0) {
                  let r = e.animationId;
                  const o = 0;
                  if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                    instancePath: i + "/animationId",
                    schemaPath: "#/properties/animationId/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                    instancePath: i + "/animationId",
                    schemaPath: "#/properties/animationId/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 0 },
                    message: "must be >= 0"
                  }], !1;
                  s = o === 0;
                } else s = !0;
                if (s) {
                  if (e.hitType !== void 0) {
                    let r = e.hitType;
                    const o = 0;
                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                      instancePath: i + "/hitType",
                      schemaPath: "#/properties/hitType/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    s = o === 0;
                  } else s = !0;
                  if (s) {
                    if (e.occasion !== void 0) {
                      let r = e.occasion;
                      const o = 0;
                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                        instancePath: i + "/occasion",
                        schemaPath: "#/properties/occasion/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      s = o === 0;
                    } else s = !0;
                    if (s) {
                      if (e.repeats !== void 0) {
                        let r = e.repeats;
                        const o = 0;
                        if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                          instancePath: i + "/repeats",
                          schemaPath: "#/properties/repeats/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        s = o === 0;
                      } else s = !0;
                      if (s) {
                        if (e.scope !== void 0) {
                          let r = e.scope;
                          const o = 0;
                          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{ instancePath: i + "/scope", schemaPath: "#/properties/scope/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], !1;
                          s = o === 0;
                        } else s = !0;
                        if (s) {
                          if (e.speed !== void 0) {
                            let r = e.speed;
                            const o = 0;
                            if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                              instancePath: i + "/speed",
                              schemaPath: "#/properties/speed/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            s = o === 0;
                          } else s = !0;
                          if (s) {
                            if (e.successRate !== void 0) {
                              let r = e.successRate;
                              const o = 0;
                              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{ instancePath: i + "/successRate", schemaPath: "#/properties/successRate/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], !1;
                              s = o === 0;
                            } else s = !0;
                            if (s) {
                              if (e.tpGain !== void 0) {
                                let r = e.tpGain;
                                const o = 0;
                                if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                  instancePath: i + "/tpGain",
                                  schemaPath: "#/properties/tpGain/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                s = o === 0;
                              } else s = !0;
                              if (s) {
                                if (e.consumable !== void 0) {
                                  if (typeof e.consumable != "boolean") return t.errors = [{
                                    instancePath: i + "/consumable",
                                    schemaPath: "#/properties/consumable/type",
                                    keyword: "type",
                                    params: { type: "boolean" },
                                    message: "must be boolean"
                                  }], !1;
                                  s = !0;
                                } else s = !0;
                                if (s) {
                                  if (e.price !== void 0) {
                                    let r = e.price;
                                    const o = 0;
                                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                      instancePath: i + "/price",
                                      schemaPath: "#/properties/price/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                                      instancePath: i + "/price",
                                      schemaPath: "#/properties/price/minimum",
                                      keyword: "minimum",
                                      params: { comparison: ">=", limit: 0 },
                                      message: "must be >= 0"
                                    }], !1;
                                    s = o === 0;
                                  } else s = !0;
                                  if (s) {
                                    if (e.itypeId !== void 0) {
                                      let r = e.itypeId;
                                      const o = 0;
                                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                        instancePath: i + "/itypeId",
                                        schemaPath: "#/properties/itypeId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                                        instancePath: i + "/itypeId",
                                        schemaPath: "#/properties/itypeId/minimum",
                                        keyword: "minimum",
                                        params: { comparison: ">=", limit: 0 },
                                        message: "must be >= 0"
                                      }], !1;
                                      s = o === 0;
                                    } else s = !0;
                                    if (s) {
                                      if (e.effects !== void 0) {
                                        let r = e.effects;
                                        const o = 0;
                                        if (!Array.isArray(r)) return t.errors = [{ instancePath: i + "/effects", schemaPath: "#/properties/effects/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                                        {
                                          const y = r.length;
                                          for (let p = 0; p < y; p++) {
                                            let n = r[p];
                                            const m = 0;
                                            if (!n || typeof n != "object" || Array.isArray(n)) return t.errors = [{
                                              instancePath: i + "/effects/" + p,
                                              schemaPath: "#/properties/effects/items/type",
                                              keyword: "type",
                                              params: { type: "object" },
                                              message: "must be object"
                                            }], !1;
                                            {
                                              let c;
                                              if (n.code === void 0 && (c = "code") || n.dataId === void 0 && (c = "dataId") || n.value1 === void 0 && (c = "value1") || n.value2 === void 0 && (c = "value2")) return t.errors = [{
                                                instancePath: i + "/effects/" + p,
                                                schemaPath: "#/properties/effects/items/required",
                                                keyword: "required",
                                                params: { missingProperty: c },
                                                message: "must have required property '" + c + "'"
                                              }], !1;
                                              for (const u in n) if (u !== "code" && u !== "dataId" && u !== "value1" && u !== "value2") return t.errors = [{
                                                instancePath: i + "/effects/" + p,
                                                schemaPath: "#/properties/effects/items/additionalProperties",
                                                keyword: "additionalProperties",
                                                params: { additionalProperty: u },
                                                message: "must NOT have additional properties"
                                              }], !1;
                                              if (n.code !== void 0) {
                                                let u = n.code;
                                                const f = 0;
                                                if (typeof u != "number" || u % 1 || isNaN(u) || !isFinite(u)) return t.errors = [{
                                                  instancePath: i + "/effects/" + p + "/code",
                                                  schemaPath: "#/properties/effects/items/properties/code/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                var g = f === 0;
                                              } else g = !0;
                                              if (g) {
                                                if (n.dataId !== void 0) {
                                                  let u = n.dataId;
                                                  const f = 0;
                                                  if (typeof u != "number" || u % 1 || isNaN(u) || !isFinite(u)) return t.errors = [{
                                                    instancePath: i + "/effects/" + p + "/dataId",
                                                    schemaPath: "#/properties/effects/items/properties/dataId/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  g = f === 0;
                                                } else g = !0;
                                                if (g) {
                                                  if (n.value1 !== void 0) {
                                                    let u = n.value1;
                                                    const f = 0;
                                                    if (typeof u != "number" || !isFinite(u)) return t.errors = [{
                                                      instancePath: i + "/effects/" + p + "/value1",
                                                      schemaPath: "#/properties/effects/items/properties/value1/type",
                                                      keyword: "type",
                                                      params: { type: "number" },
                                                      message: "must be number"
                                                    }], !1;
                                                    g = f === 0;
                                                  } else g = !0;
                                                  if (g) if (n.value2 !== void 0) {
                                                    let u = n.value2;
                                                    const f = 0;
                                                    if (typeof u != "number" || !isFinite(u)) return t.errors = [{
                                                      instancePath: i + "/effects/" + p + "/value2",
                                                      schemaPath: "#/properties/effects/items/properties/value2/type",
                                                      keyword: "type",
                                                      params: { type: "number" },
                                                      message: "must be number"
                                                    }], !1;
                                                    g = f === 0;
                                                  } else g = !0;
                                                }
                                              }
                                            }
                                            if (m !== 0) break;
                                          }
                                        }
                                        s = o === 0;
                                      } else s = !0;
                                      if (s) if (e.damage !== void 0) {
                                        let r = e.damage;
                                        const o = 0;
                                        if (!r || typeof r != "object" || Array.isArray(r)) return t.errors = [{
                                          instancePath: i + "/damage",
                                          schemaPath: "#/properties/damage/type",
                                          keyword: "type",
                                          params: { type: "object" },
                                          message: "must be object"
                                        }], !1;
                                        {
                                          let y;
                                          if (r.type === void 0 && (y = "type") || r.elementId === void 0 && (y = "elementId") || r.formula === void 0 && (y = "formula") || r.variance === void 0 && (y = "variance") || r.critical === void 0 && (y = "critical")) return t.errors = [{
                                            instancePath: i + "/damage",
                                            schemaPath: "#/properties/damage/required",
                                            keyword: "required",
                                            params: { missingProperty: y },
                                            message: "must have required property '" + y + "'"
                                          }], !1;
                                          for (const p in r) if (p !== "type" && p !== "elementId" && p !== "formula" && p !== "variance" && p !== "critical") return t.errors = [{
                                            instancePath: i + "/damage",
                                            schemaPath: "#/properties/damage/additionalProperties",
                                            keyword: "additionalProperties",
                                            params: { additionalProperty: p },
                                            message: "must NOT have additional properties"
                                          }], !1;
                                          if (r.type !== void 0) {
                                            let p = r.type;
                                            const n = 0;
                                            if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                              instancePath: i + "/damage/type",
                                              schemaPath: "#/properties/damage/properties/type/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], !1;
                                            var d = n === 0;
                                          } else d = !0;
                                          if (d) {
                                            if (r.elementId !== void 0) {
                                              let p = r.elementId;
                                              const n = 0;
                                              if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                                instancePath: i + "/damage/elementId",
                                                schemaPath: "#/properties/damage/properties/elementId/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], !1;
                                              if (typeof p == "number" && isFinite(p) && (p < 0 || isNaN(p))) return t.errors = [{
                                                instancePath: i + "/damage/elementId",
                                                schemaPath: "#/properties/damage/properties/elementId/minimum",
                                                keyword: "minimum",
                                                params: { comparison: ">=", limit: 0 },
                                                message: "must be >= 0"
                                              }], !1;
                                              d = n === 0;
                                            } else d = !0;
                                            if (d) {
                                              if (r.formula !== void 0) {
                                                if (typeof r.formula != "string") return t.errors = [{
                                                  instancePath: i + "/damage/formula",
                                                  schemaPath: "#/properties/damage/properties/formula/type",
                                                  keyword: "type",
                                                  params: { type: "string" },
                                                  message: "must be string"
                                                }], !1;
                                                d = !0;
                                              } else d = !0;
                                              if (d) {
                                                if (r.variance !== void 0) {
                                                  let p = r.variance;
                                                  const n = 0;
                                                  if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                                    instancePath: i + "/damage/variance",
                                                    schemaPath: "#/properties/damage/properties/variance/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  d = n === 0;
                                                } else d = !0;
                                                if (d) if (r.critical !== void 0) {
                                                  if (typeof r.critical != "boolean") return t.errors = [{
                                                    instancePath: i + "/damage/critical",
                                                    schemaPath: "#/properties/damage/properties/critical/type",
                                                    keyword: "type",
                                                    params: { type: "boolean" },
                                                    message: "must be boolean"
                                                  }], !1;
                                                  d = !0;
                                                } else d = !0;
                                              }
                                            }
                                          }
                                        }
                                        s = o === 0;
                                      } else s = !0;
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
    return t.errors = null, !0;
  }
  return z = 1, D.exports = t, D.exports.default = t, D.exports;
})()), de = (t) => ee(t);
var H, B = { exports: {} };
const te = v((function() {
  if (H) return B.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let g;
      if (e.name === void 0 && (g = "name") || e.id === void 0 && (g = "id") || e.order === void 0 && (g = "order") || e.expanded === void 0 && (g = "expanded") || e.scrollX === void 0 && (g = "scrollX") || e.scrollY === void 0 && (g = "scrollY") || e.parentId === void 0 && (g = "parentId")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: g },
        message: "must have required property '" + g + "'"
      }], !1;
      if (e.id !== void 0) {
        let d = e.id;
        const a = 0;
        if (typeof d != "number" || d % 1 || isNaN(d) || !isFinite(d)) return t.errors = [{
          instancePath: i + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (typeof d == "number" && isFinite(d) && (d < 0 || isNaN(d))) return t.errors = [{
          instancePath: i + "/id",
          schemaPath: "#/properties/id/minimum",
          keyword: "minimum",
          params: { comparison: ">=", limit: 0 },
          message: "must be >= 0"
        }], !1;
        var s = a === 0;
      } else s = !0;
      if (s) {
        if (e.name !== void 0) {
          if (typeof e.name != "string") return t.errors = [{
            instancePath: i + "/name",
            schemaPath: "#/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], !1;
          s = !0;
        } else s = !0;
        if (s) {
          if (e.displayName !== void 0) {
            if (typeof e.displayName != "string") return t.errors = [{
              instancePath: i + "/displayName",
              schemaPath: "#/properties/displayName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.order !== void 0) {
              let d = e.order;
              const a = 0;
              if (typeof d != "number" || d % 1 || isNaN(d) || !isFinite(d)) return t.errors = [{
                instancePath: i + "/order",
                schemaPath: "#/properties/order/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              s = a === 0;
            } else s = !0;
            if (s) {
              if (e.expanded !== void 0) {
                if (typeof e.expanded != "boolean") return t.errors = [{
                  instancePath: i + "/expanded",
                  schemaPath: "#/properties/expanded/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean"
                }], !1;
                s = !0;
              } else s = !0;
              if (s) {
                if (e.scrollX !== void 0) {
                  let d = e.scrollX;
                  const a = 0;
                  if (typeof d != "number" || !isFinite(d)) return t.errors = [{
                    instancePath: i + "/scrollX",
                    schemaPath: "#/properties/scrollX/type",
                    keyword: "type",
                    params: { type: "number" },
                    message: "must be number"
                  }], !1;
                  s = a === 0;
                } else s = !0;
                if (s) {
                  if (e.scrollY !== void 0) {
                    let d = e.scrollY;
                    const a = 0;
                    if (typeof d != "number" || !isFinite(d)) return t.errors = [{ instancePath: i + "/scrollY", schemaPath: "#/properties/scrollY/type", keyword: "type", params: {
                      type: "number"
                    }, message: "must be number" }], !1;
                    s = a === 0;
                  } else s = !0;
                  if (s) if (e.parentId !== void 0) {
                    let d = e.parentId;
                    const a = 0;
                    if (typeof d != "number" || d % 1 || isNaN(d) || !isFinite(d)) return t.errors = [{
                      instancePath: i + "/parentId",
                      schemaPath: "#/properties/parentId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    if (typeof d == "number" && isFinite(d) && (d < 0 || isNaN(d))) return t.errors = [{
                      instancePath: i + "/parentId",
                      schemaPath: "#/properties/parentId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], !1;
                    s = a === 0;
                  } else s = !0;
                }
              }
            }
          }
        }
      }
    }
    return t.errors = null, !0;
  }
  return H = 1, B.exports = t, B.exports.default = t, B.exports;
})()), ue = (t) => te(t);
var S, R = { exports: {} };
const se = v((function() {
  if (S) return R.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{ instancePath: i, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let a;
      if (e.name === void 0 && (a = "name") || e.id === void 0 && (a = "id") || e.description === void 0 && (a = "description") || e.iconIndex === void 0 && (a = "iconIndex") || e.message1 === void 0 && (a = "message1") || e.message2 === void 0 && (a = "message2") || e.mpCost === void 0 && (a = "mpCost") || e.requiredWtypeId1 === void 0 && (a = "requiredWtypeId1") || e.requiredWtypeId2 === void 0 && (a = "requiredWtypeId2") || e.stypeId === void 0 && (a = "stypeId") || e.tpCost === void 0 && (a = "tpCost") || e.animationId === void 0 && (a = "animationId") || e.hitType === void 0 && (a = "hitType") || e.occasion === void 0 && (a = "occasion") || e.repeats === void 0 && (a = "repeats") || e.scope === void 0 && (a = "scope") || e.speed === void 0 && (a = "speed") || e.successRate === void 0 && (a = "successRate") || e.tpGain === void 0 && (a = "tpGain") || e.note === void 0 && (a = "note") || e.effects === void 0 && (a = "effects")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: a },
        message: "must have required property '" + a + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let r = e.id;
          const o = 0;
          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = o === 0;
        } else s = !0;
        if (s) {
          if (e.description !== void 0) {
            if (typeof e.description != "string") return t.errors = [{
              instancePath: i + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.iconIndex !== void 0) {
              let r = e.iconIndex;
              const o = 0;
              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], !1;
              s = o === 0;
            } else s = !0;
            if (s) {
              if (e.message1 !== void 0) {
                if (typeof e.message1 != "string") return t.errors = [{
                  instancePath: i + "/message1",
                  schemaPath: "#/properties/message1/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                s = !0;
              } else s = !0;
              if (s) {
                if (e.message2 !== void 0) {
                  if (typeof e.message2 != "string") return t.errors = [{
                    instancePath: i + "/message2",
                    schemaPath: "#/properties/message2/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  s = !0;
                } else s = !0;
                if (s) {
                  if (e.mpCost !== void 0) {
                    let r = e.mpCost;
                    const o = 0;
                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                      instancePath: i + "/mpCost",
                      schemaPath: "#/properties/mpCost/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    s = o === 0;
                  } else s = !0;
                  if (s) {
                    if (e.requiredWtypeId1 !== void 0) {
                      let r = e.requiredWtypeId1;
                      const o = 0;
                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{ instancePath: i + "/requiredWtypeId1", schemaPath: "#/properties/requiredWtypeId1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], !1;
                      if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                        instancePath: i + "/requiredWtypeId1",
                        schemaPath: "#/properties/requiredWtypeId1/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], !1;
                      s = o === 0;
                    } else s = !0;
                    if (s) {
                      if (e.requiredWtypeId2 !== void 0) {
                        let r = e.requiredWtypeId2;
                        const o = 0;
                        if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                          instancePath: i + "/requiredWtypeId2",
                          schemaPath: "#/properties/requiredWtypeId2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                          instancePath: i + "/requiredWtypeId2",
                          schemaPath: "#/properties/requiredWtypeId2/minimum",
                          keyword: "minimum",
                          params: { comparison: ">=", limit: 0 },
                          message: "must be >= 0"
                        }], !1;
                        s = o === 0;
                      } else s = !0;
                      if (s) {
                        if (e.stypeId !== void 0) {
                          let r = e.stypeId;
                          const o = 0;
                          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                            instancePath: i + "/stypeId",
                            schemaPath: "#/properties/stypeId/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                            instancePath: i + "/stypeId",
                            schemaPath: "#/properties/stypeId/minimum",
                            keyword: "minimum",
                            params: { comparison: ">=", limit: 0 },
                            message: "must be >= 0"
                          }], !1;
                          s = o === 0;
                        } else s = !0;
                        if (s) {
                          if (e.tpCost !== void 0) {
                            let r = e.tpCost;
                            const o = 0;
                            if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                              instancePath: i + "/tpCost",
                              schemaPath: "#/properties/tpCost/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            s = o === 0;
                          } else s = !0;
                          if (s) {
                            if (e.animationId !== void 0) {
                              let r = e.animationId;
                              const o = 0;
                              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{ instancePath: i + "/animationId", schemaPath: "#/properties/animationId/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], !1;
                              if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                                instancePath: i + "/animationId",
                                schemaPath: "#/properties/animationId/minimum",
                                keyword: "minimum",
                                params: { comparison: ">=", limit: 0 },
                                message: "must be >= 0"
                              }], !1;
                              s = o === 0;
                            } else s = !0;
                            if (s) {
                              if (e.hitType !== void 0) {
                                let r = e.hitType;
                                const o = 0;
                                if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                  instancePath: i + "/hitType",
                                  schemaPath: "#/properties/hitType/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{
                                  instancePath: i + "/hitType",
                                  schemaPath: "#/properties/hitType/minimum",
                                  keyword: "minimum",
                                  params: { comparison: ">=", limit: 0 },
                                  message: "must be >= 0"
                                }], !1;
                                s = o === 0;
                              } else s = !0;
                              if (s) {
                                if (e.occasion !== void 0) {
                                  let r = e.occasion;
                                  const o = 0;
                                  if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                    instancePath: i + "/occasion",
                                    schemaPath: "#/properties/occasion/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  s = o === 0;
                                } else s = !0;
                                if (s) {
                                  if (e.repeats !== void 0) {
                                    let r = e.repeats;
                                    const o = 0;
                                    if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                      instancePath: i + "/repeats",
                                      schemaPath: "#/properties/repeats/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    if (typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) return t.errors = [{ instancePath: i + "/repeats", schemaPath: "#/properties/repeats/minimum", keyword: "minimum", params: {
                                      comparison: ">=",
                                      limit: 0
                                    }, message: "must be >= 0" }], !1;
                                    s = o === 0;
                                  } else s = !0;
                                  if (s) {
                                    if (e.scope !== void 0) {
                                      let r = e.scope;
                                      const o = 0;
                                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                        instancePath: i + "/scope",
                                        schemaPath: "#/properties/scope/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      s = o === 0;
                                    } else s = !0;
                                    if (s) {
                                      if (e.speed !== void 0) {
                                        let r = e.speed;
                                        const o = 0;
                                        if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                          instancePath: i + "/speed",
                                          schemaPath: "#/properties/speed/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], !1;
                                        s = o === 0;
                                      } else s = !0;
                                      if (s) {
                                        if (e.successRate !== void 0) {
                                          let r = e.successRate;
                                          const o = 0;
                                          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{
                                            instancePath: i + "/successRate",
                                            schemaPath: "#/properties/successRate/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], !1;
                                          s = o === 0;
                                        } else s = !0;
                                        if (s) {
                                          if (e.tpGain !== void 0) {
                                            let r = e.tpGain;
                                            const o = 0;
                                            if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) return t.errors = [{ instancePath: i + "/tpGain", schemaPath: "#/properties/tpGain/type", keyword: "type", params: {
                                              type: "integer"
                                            }, message: "must be integer" }], !1;
                                            s = o === 0;
                                          } else s = !0;
                                          if (s) {
                                            if (e.note !== void 0) {
                                              if (typeof e.note != "string") return t.errors = [{
                                                instancePath: i + "/note",
                                                schemaPath: "#/properties/note/type",
                                                keyword: "type",
                                                params: { type: "string" },
                                                message: "must be string"
                                              }], !1;
                                              s = !0;
                                            } else s = !0;
                                            if (s) {
                                              if (e.effects !== void 0) {
                                                let r = e.effects;
                                                const o = 0;
                                                if (!Array.isArray(r)) return t.errors = [{ instancePath: i + "/effects", schemaPath: "#/properties/effects/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                                                {
                                                  const y = r.length;
                                                  for (let p = 0; p < y; p++) {
                                                    let n = r[p];
                                                    const m = 0;
                                                    if (!n || typeof n != "object" || Array.isArray(n)) return t.errors = [{
                                                      instancePath: i + "/effects/" + p,
                                                      schemaPath: "#/properties/effects/items/type",
                                                      keyword: "type",
                                                      params: { type: "object" },
                                                      message: "must be object"
                                                    }], !1;
                                                    {
                                                      let c;
                                                      if (n.code === void 0 && (c = "code") || n.dataId === void 0 && (c = "dataId") || n.value1 === void 0 && (c = "value1") || n.value2 === void 0 && (c = "value2")) return t.errors = [{
                                                        instancePath: i + "/effects/" + p,
                                                        schemaPath: "#/properties/effects/items/required",
                                                        keyword: "required",
                                                        params: { missingProperty: c },
                                                        message: "must have required property '" + c + "'"
                                                      }], !1;
                                                      for (const u in n) if (u !== "code" && u !== "dataId" && u !== "value1" && u !== "value2") return t.errors = [{
                                                        instancePath: i + "/effects/" + p,
                                                        schemaPath: "#/properties/effects/items/additionalProperties",
                                                        keyword: "additionalProperties",
                                                        params: { additionalProperty: u },
                                                        message: "must NOT have additional properties"
                                                      }], !1;
                                                      if (n.code !== void 0) {
                                                        let u = n.code;
                                                        const f = 0;
                                                        if (typeof u != "number" || u % 1 || isNaN(u) || !isFinite(u)) return t.errors = [{
                                                          instancePath: i + "/effects/" + p + "/code",
                                                          schemaPath: "#/properties/effects/items/properties/code/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        }], !1;
                                                        var g = f === 0;
                                                      } else g = !0;
                                                      if (g) {
                                                        if (n.dataId !== void 0) {
                                                          let u = n.dataId;
                                                          const f = 0;
                                                          if (typeof u != "number" || u % 1 || isNaN(u) || !isFinite(u)) return t.errors = [{
                                                            instancePath: i + "/effects/" + p + "/dataId",
                                                            schemaPath: "#/properties/effects/items/properties/dataId/type",
                                                            keyword: "type",
                                                            params: { type: "integer" },
                                                            message: "must be integer"
                                                          }], !1;
                                                          g = f === 0;
                                                        } else g = !0;
                                                        if (g) {
                                                          if (n.value1 !== void 0) {
                                                            let u = n.value1;
                                                            const f = 0;
                                                            if (typeof u != "number" || !isFinite(u)) return t.errors = [{
                                                              instancePath: i + "/effects/" + p + "/value1",
                                                              schemaPath: "#/properties/effects/items/properties/value1/type",
                                                              keyword: "type",
                                                              params: { type: "number" },
                                                              message: "must be number"
                                                            }], !1;
                                                            g = f === 0;
                                                          } else g = !0;
                                                          if (g) if (n.value2 !== void 0) {
                                                            let u = n.value2;
                                                            const f = 0;
                                                            if (typeof u != "number" || !isFinite(u)) return t.errors = [{
                                                              instancePath: i + "/effects/" + p + "/value2",
                                                              schemaPath: "#/properties/effects/items/properties/value2/type",
                                                              keyword: "type",
                                                              params: { type: "number" },
                                                              message: "must be number"
                                                            }], !1;
                                                            g = f === 0;
                                                          } else g = !0;
                                                        }
                                                      }
                                                    }
                                                    if (m !== 0) break;
                                                  }
                                                }
                                                s = o === 0;
                                              } else s = !0;
                                              if (s) {
                                                if (e.damage !== void 0) {
                                                  let r = e.damage;
                                                  const o = 0;
                                                  if (!r || typeof r != "object" || Array.isArray(r)) return t.errors = [{
                                                    instancePath: i + "/damage",
                                                    schemaPath: "#/properties/damage/type",
                                                    keyword: "type",
                                                    params: { type: "object" },
                                                    message: "must be object"
                                                  }], !1;
                                                  {
                                                    let y;
                                                    if (r.type === void 0 && (y = "type") || r.elementId === void 0 && (y = "elementId") || r.formula === void 0 && (y = "formula") || r.variance === void 0 && (y = "variance") || r.critical === void 0 && (y = "critical")) return t.errors = [{
                                                      instancePath: i + "/damage",
                                                      schemaPath: "#/properties/damage/required",
                                                      keyword: "required",
                                                      params: { missingProperty: y },
                                                      message: "must have required property '" + y + "'"
                                                    }], !1;
                                                    for (const p in r) if (p !== "type" && p !== "elementId" && p !== "formula" && p !== "variance" && p !== "critical") return t.errors = [{
                                                      instancePath: i + "/damage",
                                                      schemaPath: "#/properties/damage/additionalProperties",
                                                      keyword: "additionalProperties",
                                                      params: { additionalProperty: p },
                                                      message: "must NOT have additional properties"
                                                    }], !1;
                                                    if (r.type !== void 0) {
                                                      let p = r.type;
                                                      const n = 0;
                                                      if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                                        instancePath: i + "/damage/type",
                                                        schemaPath: "#/properties/damage/properties/type/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      var d = n === 0;
                                                    } else d = !0;
                                                    if (d) {
                                                      if (r.elementId !== void 0) {
                                                        let p = r.elementId;
                                                        const n = 0;
                                                        if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                                          instancePath: i + "/damage/elementId",
                                                          schemaPath: "#/properties/damage/properties/elementId/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        }], !1;
                                                        if (typeof p == "number" && isFinite(p) && (p < 0 || isNaN(p))) return t.errors = [{
                                                          instancePath: i + "/damage/elementId",
                                                          schemaPath: "#/properties/damage/properties/elementId/minimum",
                                                          keyword: "minimum",
                                                          params: { comparison: ">=", limit: 0 },
                                                          message: "must be >= 0"
                                                        }], !1;
                                                        d = n === 0;
                                                      } else d = !0;
                                                      if (d) {
                                                        if (r.formula !== void 0) {
                                                          if (typeof r.formula != "string") return t.errors = [{
                                                            instancePath: i + "/damage/formula",
                                                            schemaPath: "#/properties/damage/properties/formula/type",
                                                            keyword: "type",
                                                            params: { type: "string" },
                                                            message: "must be string"
                                                          }], !1;
                                                          d = !0;
                                                        } else d = !0;
                                                        if (d) {
                                                          if (r.variance !== void 0) {
                                                            let p = r.variance;
                                                            const n = 0;
                                                            if (typeof p != "number" || p % 1 || isNaN(p) || !isFinite(p)) return t.errors = [{
                                                              instancePath: i + "/damage/variance",
                                                              schemaPath: "#/properties/damage/properties/variance/type",
                                                              keyword: "type",
                                                              params: { type: "integer" },
                                                              message: "must be integer"
                                                            }], !1;
                                                            d = n === 0;
                                                          } else d = !0;
                                                          if (d) if (r.critical !== void 0) {
                                                            if (typeof r.critical != "boolean") return t.errors = [{
                                                              instancePath: i + "/damage/critical",
                                                              schemaPath: "#/properties/damage/properties/critical/type",
                                                              keyword: "type",
                                                              params: { type: "boolean" },
                                                              message: "must be boolean"
                                                            }], !1;
                                                            d = !0;
                                                          } else d = !0;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  s = o === 0;
                                                } else s = !0;
                                                if (s) if (e.messageType !== void 0) {
                                                  let r = e.messageType;
                                                  const o = 0;
                                                  if ((typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) && r !== null) return t.errors = [{
                                                    instancePath: i + "/messageType",
                                                    schemaPath: "#/properties/messageType/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  s = o === 0;
                                                } else s = !0;
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
    return t.errors = null, !0;
  }
  return S = 1, R.exports = t, R.exports.default = t, R.exports;
})()), fe = (t) => se(t);
var M, W = { exports: {} };
const re = v((function() {
  if (M) return W.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let d;
      if (e.name === void 0 && (d = "name") || e.id === void 0 && (d = "id") || e.iconIndex === void 0 && (d = "iconIndex") || e.message1 === void 0 && (d = "message1") || e.message2 === void 0 && (d = "message2") || e.message3 === void 0 && (d = "message3") || e.message4 === void 0 && (d = "message4") || e.restriction === void 0 && (d = "restriction") || e.priority === void 0 && (d = "priority") || e.motion === void 0 && (d = "motion") || e.overlay === void 0 && (d = "overlay") || e.removeAtBattleEnd === void 0 && (d = "removeAtBattleEnd") || e.removeByDamage === void 0 && (d = "removeByDamage") || e.removeByWalking === void 0 && (d = "removeByWalking") || e.removeByRestriction === void 0 && (d = "removeByRestriction") || e.autoRemovalTiming === void 0 && (d = "autoRemovalTiming") || e.minTurns === void 0 && (d = "minTurns") || e.maxTurns === void 0 && (d = "maxTurns") || e.chanceByDamage === void 0 && (d = "chanceByDamage") || e.stepsToRemove === void 0 && (d = "stepsToRemove") || e.note === void 0 && (d = "note")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: d },
        message: "must have required property '" + d + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let a = e.id;
          const r = 0;
          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = r === 0;
        } else s = !0;
        if (s) {
          if (e.iconIndex !== void 0) {
            let a = e.iconIndex;
            const r = 0;
            if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
              instancePath: i + "/iconIndex",
              schemaPath: "#/properties/iconIndex/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer"
            }], !1;
            if (typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return t.errors = [{ instancePath: i + "/iconIndex", schemaPath: "#/properties/iconIndex/minimum", keyword: "minimum", params: {
              comparison: ">=",
              limit: 0
            }, message: "must be >= 0" }], !1;
            s = r === 0;
          } else s = !0;
          if (s) {
            if (e.message1 !== void 0) {
              if (typeof e.message1 != "string") return t.errors = [{
                instancePath: i + "/message1",
                schemaPath: "#/properties/message1/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], !1;
              s = !0;
            } else s = !0;
            if (s) {
              if (e.message2 !== void 0) {
                if (typeof e.message2 != "string") return t.errors = [{ instancePath: i + "/message2", schemaPath: "#/properties/message2/type", keyword: "type", params: {
                  type: "string"
                }, message: "must be string" }], !1;
                s = !0;
              } else s = !0;
              if (s) {
                if (e.message3 !== void 0) {
                  if (typeof e.message3 != "string") return t.errors = [{
                    instancePath: i + "/message3",
                    schemaPath: "#/properties/message3/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  s = !0;
                } else s = !0;
                if (s) {
                  if (e.message4 !== void 0) {
                    if (typeof e.message4 != "string") return t.errors = [{
                      instancePath: i + "/message4",
                      schemaPath: "#/properties/message4/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], !1;
                    s = !0;
                  } else s = !0;
                  if (s) {
                    if (e.restriction !== void 0) {
                      let a = e.restriction;
                      const r = 0;
                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                        instancePath: i + "/restriction",
                        schemaPath: "#/properties/restriction/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      s = r === 0;
                    } else s = !0;
                    if (s) {
                      if (e.priority !== void 0) {
                        let a = e.priority;
                        const r = 0;
                        if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                          instancePath: i + "/priority",
                          schemaPath: "#/properties/priority/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        s = r === 0;
                      } else s = !0;
                      if (s) {
                        if (e.motion !== void 0) {
                          let a = e.motion;
                          const r = 0;
                          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                            instancePath: i + "/motion",
                            schemaPath: "#/properties/motion/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          s = r === 0;
                        } else s = !0;
                        if (s) {
                          if (e.overlay !== void 0) {
                            let a = e.overlay;
                            const r = 0;
                            if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                              instancePath: i + "/overlay",
                              schemaPath: "#/properties/overlay/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            s = r === 0;
                          } else s = !0;
                          if (s) {
                            if (e.removeAtBattleEnd !== void 0) {
                              if (typeof e.removeAtBattleEnd != "boolean") return t.errors = [{
                                instancePath: i + "/removeAtBattleEnd",
                                schemaPath: "#/properties/removeAtBattleEnd/type",
                                keyword: "type",
                                params: { type: "boolean" },
                                message: "must be boolean"
                              }], !1;
                              s = !0;
                            } else s = !0;
                            if (s) {
                              if (e.removeByDamage !== void 0) {
                                if (typeof e.removeByDamage != "boolean") return t.errors = [{ instancePath: i + "/removeByDamage", schemaPath: "#/properties/removeByDamage/type", keyword: "type", params: {
                                  type: "boolean"
                                }, message: "must be boolean" }], !1;
                                s = !0;
                              } else s = !0;
                              if (s) {
                                if (e.removeByWalking !== void 0) {
                                  if (typeof e.removeByWalking != "boolean") return t.errors = [{
                                    instancePath: i + "/removeByWalking",
                                    schemaPath: "#/properties/removeByWalking/type",
                                    keyword: "type",
                                    params: { type: "boolean" },
                                    message: "must be boolean"
                                  }], !1;
                                  s = !0;
                                } else s = !0;
                                if (s) {
                                  if (e.removeByRestriction !== void 0) {
                                    if (typeof e.removeByRestriction != "boolean") return t.errors = [{
                                      instancePath: i + "/removeByRestriction",
                                      schemaPath: "#/properties/removeByRestriction/type",
                                      keyword: "type",
                                      params: { type: "boolean" },
                                      message: "must be boolean"
                                    }], !1;
                                    s = !0;
                                  } else s = !0;
                                  if (s) {
                                    if (e.messageType !== void 0) {
                                      let a = e.messageType;
                                      const r = 0;
                                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                                        instancePath: i + "/messageType",
                                        schemaPath: "#/properties/messageType/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      s = r === 0;
                                    } else s = !0;
                                    if (s) {
                                      if (e.releaseByDamage !== void 0) {
                                        if (typeof e.releaseByDamage != "boolean") return t.errors = [{
                                          instancePath: i + "/releaseByDamage",
                                          schemaPath: "#/properties/releaseByDamage/type",
                                          keyword: "type",
                                          params: { type: "boolean" },
                                          message: "must be boolean"
                                        }], !1;
                                        s = !0;
                                      } else s = !0;
                                      if (s) {
                                        if (e.autoRemovalTiming !== void 0) {
                                          let a = e.autoRemovalTiming;
                                          const r = 0;
                                          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{ instancePath: i + "/autoRemovalTiming", schemaPath: "#/properties/autoRemovalTiming/type", keyword: "type", params: {
                                            type: "integer"
                                          }, message: "must be integer" }], !1;
                                          s = r === 0;
                                        } else s = !0;
                                        if (s) {
                                          if (e.minTurns !== void 0) {
                                            let a = e.minTurns;
                                            const r = 0;
                                            if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                                              instancePath: i + "/minTurns",
                                              schemaPath: "#/properties/minTurns/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], !1;
                                            s = r === 0;
                                          } else s = !0;
                                          if (s) {
                                            if (e.maxTurns !== void 0) {
                                              let a = e.maxTurns;
                                              const r = 0;
                                              if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                                                instancePath: i + "/maxTurns",
                                                schemaPath: "#/properties/maxTurns/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], !1;
                                              s = r === 0;
                                            } else s = !0;
                                            if (s) {
                                              if (e.chanceByDamage !== void 0) {
                                                let a = e.chanceByDamage;
                                                const r = 0;
                                                if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                                                  instancePath: i + "/chanceByDamage",
                                                  schemaPath: "#/properties/chanceByDamage/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                s = r === 0;
                                              } else s = !0;
                                              if (s) {
                                                if (e.stepsToRemove !== void 0) {
                                                  let a = e.stepsToRemove;
                                                  const r = 0;
                                                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return t.errors = [{
                                                    instancePath: i + "/stepsToRemove",
                                                    schemaPath: "#/properties/stepsToRemove/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  s = r === 0;
                                                } else s = !0;
                                                if (s) {
                                                  if (e.note !== void 0) {
                                                    if (typeof e.note != "string") return t.errors = [{
                                                      instancePath: i + "/note",
                                                      schemaPath: "#/properties/note/type",
                                                      keyword: "type",
                                                      params: { type: "string" },
                                                      message: "must be string"
                                                    }], !1;
                                                    s = !0;
                                                  } else s = !0;
                                                  if (s) if (e.traits !== void 0) {
                                                    let a = e.traits;
                                                    const r = 0;
                                                    if (!Array.isArray(a)) return t.errors = [{
                                                      instancePath: i + "/traits",
                                                      schemaPath: "#/properties/traits/type",
                                                      keyword: "type",
                                                      params: { type: "array" },
                                                      message: "must be array"
                                                    }], !1;
                                                    {
                                                      const o = a.length;
                                                      for (let y = 0; y < o; y++) {
                                                        let p = a[y];
                                                        const n = 0;
                                                        if (!p || typeof p != "object" || Array.isArray(p)) return t.errors = [{
                                                          instancePath: i + "/traits/" + y,
                                                          schemaPath: "#/properties/traits/items/type",
                                                          keyword: "type",
                                                          params: { type: "object" },
                                                          message: "must be object"
                                                        }], !1;
                                                        {
                                                          let m;
                                                          if (p.code === void 0 && (m = "code") || p.dataId === void 0 && (m = "dataId") || p.value === void 0 && (m = "value")) return t.errors = [{
                                                            instancePath: i + "/traits/" + y,
                                                            schemaPath: "#/properties/traits/items/required",
                                                            keyword: "required",
                                                            params: { missingProperty: m },
                                                            message: "must have required property '" + m + "'"
                                                          }], !1;
                                                          for (const c in p) if (c !== "code" && c !== "dataId" && c !== "value") return t.errors = [{
                                                            instancePath: i + "/traits/" + y,
                                                            schemaPath: "#/properties/traits/items/additionalProperties",
                                                            keyword: "additionalProperties",
                                                            params: { additionalProperty: c },
                                                            message: "must NOT have additional properties"
                                                          }], !1;
                                                          if (p.code !== void 0) {
                                                            let c = p.code;
                                                            const u = 0;
                                                            if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return t.errors = [{
                                                              instancePath: i + "/traits/" + y + "/code",
                                                              schemaPath: "#/properties/traits/items/properties/code/type",
                                                              keyword: "type",
                                                              params: { type: "integer" },
                                                              message: "must be integer"
                                                            }], !1;
                                                            var g = u === 0;
                                                          } else g = !0;
                                                          if (g) {
                                                            if (p.dataId !== void 0) {
                                                              let c = p.dataId;
                                                              const u = 0;
                                                              if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return t.errors = [{
                                                                instancePath: i + "/traits/" + y + "/dataId",
                                                                schemaPath: "#/properties/traits/items/properties/dataId/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], !1;
                                                              g = u === 0;
                                                            } else g = !0;
                                                            if (g) if (p.value !== void 0) {
                                                              let c = p.value;
                                                              const u = 0;
                                                              if (typeof c != "number" || !isFinite(c)) return t.errors = [{ instancePath: i + "/traits/" + y + "/value", schemaPath: "#/properties/traits/items/properties/value/type", keyword: "type", params: {
                                                                type: "number"
                                                              }, message: "must be number" }], !1;
                                                              g = u === 0;
                                                            } else g = !0;
                                                          }
                                                        }
                                                        if (n !== 0) break;
                                                      }
                                                    }
                                                    s = r === 0;
                                                  } else s = !0;
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
    return t.errors = null, !0;
  }
  return M = 1, W.exports = t, W.exports.default = t, W.exports;
})()), he = (t) => re(t);
var _, O = { exports: {} };
const ie = v((function() {
  if (_) return O.exports;
  function t(e, { instancePath: i = "", parentData: N, parentDataProperty: k, rootData: w = e } = {}) {
    if (!e || typeof e != "object" || Array.isArray(e)) return t.errors = [{
      instancePath: i,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let r;
      if (e.name === void 0 && (r = "name") || e.id === void 0 && (r = "id") || e.description === void 0 && (r = "description") || e.iconIndex === void 0 && (r = "iconIndex") || e.price === void 0 && (r = "price") || e.params === void 0 && (r = "params") || e.traits === void 0 && (r = "traits") || e.note === void 0 && (r = "note") || e.etypeId === void 0 && (r = "etypeId") || e.animationId === void 0 && (r = "animationId")) return t.errors = [{
        instancePath: i,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: r },
        message: "must have required property '" + r + "'"
      }], !1;
      if (e.name !== void 0) {
        if (typeof e.name != "string") return t.errors = [{ instancePath: i + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], !1;
        var s = !0;
      } else s = !0;
      if (s) {
        if (e.id !== void 0) {
          let o = e.id;
          const y = 0;
          if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
            instancePath: i + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          s = y === 0;
        } else s = !0;
        if (s) {
          if (e.description !== void 0) {
            if (typeof e.description != "string") return t.errors = [{
              instancePath: i + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            s = !0;
          } else s = !0;
          if (s) {
            if (e.iconIndex !== void 0) {
              let o = e.iconIndex;
              const y = 0;
              if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
                instancePath: i + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], !1;
              s = y === 0;
            } else s = !0;
            if (s) {
              if (e.price !== void 0) {
                let o = e.price;
                const y = 0;
                if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
                  instancePath: i + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], !1;
                if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
                  instancePath: i + "/price",
                  schemaPath: "#/properties/price/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], !1;
                s = y === 0;
              } else s = !0;
              if (s) {
                if (e.note !== void 0) {
                  if (typeof e.note != "string") return t.errors = [{
                    instancePath: i + "/note",
                    schemaPath: "#/properties/note/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  s = !0;
                } else s = !0;
                if (s) {
                  if (e.etypeId !== void 0) {
                    let o = e.etypeId;
                    const y = 0;
                    if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
                      instancePath: i + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
                      instancePath: i + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], !1;
                    s = y === 0;
                  } else s = !0;
                  if (s) {
                    if (e.wtypeId !== void 0) {
                      let o = e.wtypeId;
                      const y = 0;
                      if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
                        instancePath: i + "/wtypeId",
                        schemaPath: "#/properties/wtypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
                        instancePath: i + "/wtypeId",
                        schemaPath: "#/properties/wtypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], !1;
                      s = y === 0;
                    } else s = !0;
                    if (s) {
                      if (e.animationId !== void 0) {
                        let o = e.animationId;
                        const y = 0;
                        if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return t.errors = [{
                          instancePath: i + "/animationId",
                          schemaPath: "#/properties/animationId/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        if (typeof o == "number" && isFinite(o) && (o < 0 || isNaN(o))) return t.errors = [{
                          instancePath: i + "/animationId",
                          schemaPath: "#/properties/animationId/minimum",
                          keyword: "minimum",
                          params: { comparison: ">=", limit: 0 },
                          message: "must be >= 0"
                        }], !1;
                        s = y === 0;
                      } else s = !0;
                      if (s) {
                        if (e.params !== void 0) {
                          let o = e.params;
                          const y = 0;
                          if (!Array.isArray(o)) return t.errors = [{
                            instancePath: i + "/params",
                            schemaPath: "#/properties/params/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], !1;
                          if (o.length > 8) return t.errors = [{
                            instancePath: i + "/params",
                            schemaPath: "#/properties/params/maxItems",
                            keyword: "maxItems",
                            params: { limit: 8 },
                            message: "must NOT have more than 8 items"
                          }], !1;
                          if (o.length < 8) return t.errors = [{ instancePath: i + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                            limit: 8
                          }, message: "must NOT have fewer than 8 items" }], !1;
                          {
                            const p = o.length;
                            if (p > 0) {
                              let n = o[0];
                              const m = 0;
                              if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                instancePath: i + "/params/0",
                                schemaPath: "#/properties/params/items/0/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              var g = m === 0;
                            }
                            if (g) {
                              if (p > 1) {
                                let n = o[1];
                                const m = 0;
                                if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{ instancePath: i + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], !1;
                                g = m === 0;
                              }
                              if (g) {
                                if (p > 2) {
                                  let n = o[2];
                                  const m = 0;
                                  if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                    instancePath: i + "/params/2",
                                    schemaPath: "#/properties/params/items/2/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  g = m === 0;
                                }
                                if (g) {
                                  if (p > 3) {
                                    let n = o[3];
                                    const m = 0;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{ instancePath: i + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], !1;
                                    g = m === 0;
                                  }
                                  if (g) {
                                    if (p > 4) {
                                      let n = o[4];
                                      const m = 0;
                                      if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                        instancePath: i + "/params/4",
                                        schemaPath: "#/properties/params/items/4/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      g = m === 0;
                                    }
                                    if (g) {
                                      if (p > 5) {
                                        let n = o[5];
                                        const m = 0;
                                        if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{ instancePath: i + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], !1;
                                        g = m === 0;
                                      }
                                      if (g) {
                                        if (p > 6) {
                                          let n = o[6];
                                          const m = 0;
                                          if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                            instancePath: i + "/params/6",
                                            schemaPath: "#/properties/params/items/6/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], !1;
                                          g = m === 0;
                                        }
                                        if (g && p > 7) {
                                          let n = o[7];
                                          const m = 0;
                                          if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{ instancePath: i + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                            type: "integer"
                                          }, message: "must be integer" }], !1;
                                          g = m === 0;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          s = y === 0;
                        } else s = !0;
                        if (s) {
                          if (e.damage !== void 0) {
                            let o = e.damage;
                            const y = 0;
                            if (!o || typeof o != "object" || Array.isArray(o)) return t.errors = [{
                              instancePath: i + "/damage",
                              schemaPath: "#/properties/damage/type",
                              keyword: "type",
                              params: { type: "object" },
                              message: "must be object"
                            }], !1;
                            {
                              let p;
                              if (o.type === void 0 && (p = "type") || o.elementId === void 0 && (p = "elementId") || o.formula === void 0 && (p = "formula") || o.variance === void 0 && (p = "variance") || o.critical === void 0 && (p = "critical")) return t.errors = [{
                                instancePath: i + "/damage",
                                schemaPath: "#/properties/damage/required",
                                keyword: "required",
                                params: { missingProperty: p },
                                message: "must have required property '" + p + "'"
                              }], !1;
                              if (o.type !== void 0) {
                                let n = o.type;
                                const m = 0;
                                if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                  instancePath: i + "/damage/type",
                                  schemaPath: "#/properties/damage/properties/type/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return t.errors = [{
                                  instancePath: i + "/damage/type",
                                  schemaPath: "#/properties/damage/properties/type/minimum",
                                  keyword: "minimum",
                                  params: { comparison: ">=", limit: 0 },
                                  message: "must be >= 0"
                                }], !1;
                                var d = m === 0;
                              } else d = !0;
                              if (d) {
                                if (o.elementId !== void 0) {
                                  let n = o.elementId;
                                  const m = 0;
                                  if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                    instancePath: i + "/damage/elementId",
                                    schemaPath: "#/properties/damage/properties/elementId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return t.errors = [{
                                    instancePath: i + "/damage/elementId",
                                    schemaPath: "#/properties/damage/properties/elementId/minimum",
                                    keyword: "minimum",
                                    params: { comparison: ">=", limit: 0 },
                                    message: "must be >= 0"
                                  }], !1;
                                  d = m === 0;
                                } else d = !0;
                                if (d) {
                                  if (o.formula !== void 0) {
                                    if (typeof o.formula != "string") return t.errors = [{
                                      instancePath: i + "/damage/formula",
                                      schemaPath: "#/properties/damage/properties/formula/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string"
                                    }], !1;
                                    d = !0;
                                  } else d = !0;
                                  if (d) {
                                    if (o.variance !== void 0) {
                                      let n = o.variance;
                                      const m = 0;
                                      if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return t.errors = [{
                                        instancePath: i + "/damage/variance",
                                        schemaPath: "#/properties/damage/properties/variance/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      if (typeof n == "number" && isFinite(n)) {
                                        if (n > 100 || isNaN(n)) return t.errors = [{
                                          instancePath: i + "/damage/variance",
                                          schemaPath: "#/properties/damage/properties/variance/maximum",
                                          keyword: "maximum",
                                          params: { comparison: "<=", limit: 100 },
                                          message: "must be <= 100"
                                        }], !1;
                                        if (n < 0 || isNaN(n)) return t.errors = [{
                                          instancePath: i + "/damage/variance",
                                          schemaPath: "#/properties/damage/properties/variance/minimum",
                                          keyword: "minimum",
                                          params: { comparison: ">=", limit: 0 },
                                          message: "must be >= 0"
                                        }], !1;
                                      }
                                      d = m === 0;
                                    } else d = !0;
                                    if (d) if (o.critical !== void 0) {
                                      if (typeof o.critical != "boolean") return t.errors = [{
                                        instancePath: i + "/damage/critical",
                                        schemaPath: "#/properties/damage/properties/critical/type",
                                        keyword: "type",
                                        params: { type: "boolean" },
                                        message: "must be boolean"
                                      }], !1;
                                      d = !0;
                                    } else d = !0;
                                  }
                                }
                              }
                            }
                            s = y === 0;
                          } else s = !0;
                          if (s) if (e.traits !== void 0) {
                            let o = e.traits;
                            const y = 0;
                            if (!Array.isArray(o)) return t.errors = [{ instancePath: i + "/traits", schemaPath: "#/properties/traits/type", keyword: "type", params: {
                              type: "array"
                            }, message: "must be array" }], !1;
                            {
                              const p = o.length;
                              for (let n = 0; n < p; n++) {
                                let m = o[n];
                                const c = 0;
                                if (!m || typeof m != "object" || Array.isArray(m)) return t.errors = [{
                                  instancePath: i + "/traits/" + n,
                                  schemaPath: "#/properties/traits/items/type",
                                  keyword: "type",
                                  params: { type: "object" },
                                  message: "must be object"
                                }], !1;
                                {
                                  let u;
                                  if (m.code === void 0 && (u = "code") || m.dataId === void 0 && (u = "dataId") || m.value === void 0 && (u = "value")) return t.errors = [{
                                    instancePath: i + "/traits/" + n,
                                    schemaPath: "#/properties/traits/items/required",
                                    keyword: "required",
                                    params: { missingProperty: u },
                                    message: "must have required property '" + u + "'"
                                  }], !1;
                                  for (const f in m) if (f !== "code" && f !== "dataId" && f !== "value") return t.errors = [{
                                    instancePath: i + "/traits/" + n,
                                    schemaPath: "#/properties/traits/items/additionalProperties",
                                    keyword: "additionalProperties",
                                    params: { additionalProperty: f },
                                    message: "must NOT have additional properties"
                                  }], !1;
                                  if (m.code !== void 0) {
                                    let f = m.code;
                                    const h = 0;
                                    if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                      instancePath: i + "/traits/" + n + "/code",
                                      schemaPath: "#/properties/traits/items/properties/code/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    var a = h === 0;
                                  } else a = !0;
                                  if (a) {
                                    if (m.dataId !== void 0) {
                                      let f = m.dataId;
                                      const h = 0;
                                      if (typeof f != "number" || f % 1 || isNaN(f) || !isFinite(f)) return t.errors = [{
                                        instancePath: i + "/traits/" + n + "/dataId",
                                        schemaPath: "#/properties/traits/items/properties/dataId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      a = h === 0;
                                    } else a = !0;
                                    if (a) if (m.value !== void 0) {
                                      let f = m.value;
                                      const h = 0;
                                      if (typeof f != "number" || !isFinite(f)) return t.errors = [{ instancePath: i + "/traits/" + n + "/value", schemaPath: "#/properties/traits/items/properties/value/type", keyword: "type", params: {
                                        type: "number"
                                      }, message: "must be number" }], !1;
                                      a = h === 0;
                                    } else a = !0;
                                  }
                                }
                                if (c !== 0) break;
                              }
                            }
                            s = y === 0;
                          } else s = !0;
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
    return t.errors = null, !0;
  }
  return _ = 1, O.exports = t, O.exports.default = t, O.exports;
})()), ge = (t) => ie(t);
export {
  oe as isDataActor,
  ne as isDataAnimation,
  pe as isDataArmor,
  me as isDataClass,
  ye as isDataCommonEvent,
  ce as isDataEnemy,
  de as isDataItem,
  ue as isDataMapInfo,
  fe as isDataSkill,
  he as isDataState,
  ge as isDataWeapon
};
