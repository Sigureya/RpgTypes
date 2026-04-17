import { v as je } from "../../shared/validateWithErrors.es.js";
import { g as ce } from "../../shared/_commonjsHelpers.es.js";
var Oe, ge = { exports: {} };
const Ve = ce((function() {
  if (Oe) return ge.exports;
  Oe = 1, ge.exports = l, ge.exports.default = l;
  const h = { properties: { code: { enum: [320, 324, 325] } } };
  function l(m, { instancePath: d = "", parentData: y, parentDataProperty: s, rootData: j = m } = {}) {
    if (!m || typeof m != "object" || Array.isArray(m)) return l.errors = [{ instancePath: d, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let t;
      if (m.code === void 0 && (t = "code") || m.parameters === void 0 && (t = "parameters") || m.indent === void 0 && (t = "indent")) return l.errors = [{
        instancePath: d,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t },
        message: "must have required property '" + t + "'"
      }], !1;
      for (const e in m) if (e !== "code" && e !== "indent" && e !== "parameters") return l.errors = [{
        instancePath: d,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (m.code !== void 0) {
        let e = m.code;
        const p = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return l.errors = [{
          instancePath: d + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 320 && e !== 324 && e !== 325) return l.errors = [{
          instancePath: d + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: h.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var I = p === 0;
      } else I = !0;
      if (I) {
        if (m.indent !== void 0) {
          let e = m.indent;
          const p = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return l.errors = [{ instancePath: d + "/indent", schemaPath: "#/properties/indent/type", keyword: "type", params: {
            type: "integer"
          }, message: "must be integer" }], !1;
          I = p === 0;
        } else I = !0;
        if (I) if (m.parameters !== void 0) {
          let e = m.parameters;
          const p = 0;
          if (!Array.isArray(e)) return l.errors = [{
            instancePath: d + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 2) return l.errors = [{
            instancePath: d + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 2 },
            message: "must NOT have more than 2 items"
          }], !1;
          if (e.length < 2) return l.errors = [{
            instancePath: d + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 2 },
            message: "must NOT have fewer than 2 items"
          }], !1;
          {
            const P = e.length;
            if (P > 0) {
              let x = e[0];
              const F = 0;
              if (typeof x != "number" || !isFinite(x)) return l.errors = [{
                instancePath: d + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number"
              }], !1;
              var $ = F === 0;
            }
            if ($ && P > 1) {
              if (typeof e[1] != "string") return l.errors = [{
                instancePath: d + "/parameters/1",
                schemaPath: "#/properties/parameters/items/1/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], !1;
              $ = !0;
            }
          }
          I = p === 0;
        } else I = !0;
      }
    }
    return l.errors = null, !0;
  }
  return ge.exports;
})()), Be = (h) => Ve(h);
var xe, ve = { exports: {} };
const Se = ce((function() {
  if (xe) return ve.exports;
  xe = 1, ve.exports = l, ve.exports.default = l;
  const h = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function l(m, { instancePath: d = "", parentData: y, parentDataProperty: s, rootData: j = m } = {}) {
    if (!m || typeof m != "object" || Array.isArray(m)) return l.errors = [{
      instancePath: d,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let t;
      if (m.code === void 0 && (t = "code") || m.parameters === void 0 && (t = "parameters") || m.indent === void 0 && (t = "indent")) return l.errors = [{
        instancePath: d,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t },
        message: "must have required property '" + t + "'"
      }], !1;
      for (const e in m) if (e !== "code" && e !== "indent" && e !== "parameters") return l.errors = [{
        instancePath: d,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (m.code !== void 0) {
        let e = m.code;
        const p = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return l.errors = [{
          instancePath: d + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 132 && e !== 133 && e !== 139 && e !== 241 && e !== 245 && e !== 249 && e !== 250) return l.errors = [{
          instancePath: d + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: h.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var I = p === 0;
      } else I = !0;
      if (I) {
        if (m.indent !== void 0) {
          let e = m.indent;
          const p = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return l.errors = [{
            instancePath: d + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          I = p === 0;
        } else I = !0;
        if (I) if (m.parameters !== void 0) {
          let e = m.parameters;
          const p = 0;
          if (!Array.isArray(e)) return l.errors = [{
            instancePath: d + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 1) return l.errors = [{
            instancePath: d + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], !1;
          if (e.length < 1) return l.errors = [{
            instancePath: d + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], !1;
          if (e.length > 0) {
            let P = e[0];
            if (!P || typeof P != "object" || Array.isArray(P)) return l.errors = [{
              instancePath: d + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], !1;
            {
              let x;
              if (P.name === void 0 && (x = "name") || P.volume === void 0 && (x = "volume") || P.pitch === void 0 && (x = "pitch") || P.pan === void 0 && (x = "pan")) return l.errors = [{
                instancePath: d + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: x },
                message: "must have required property '" + x + "'"
              }], !1;
              for (const F in P) if (F !== "name" && F !== "volume" && F !== "pitch" && F !== "pan") return l.errors = [{
                instancePath: d + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: F },
                message: "must NOT have additional properties"
              }], !1;
              if (P.name !== void 0) {
                if (typeof P.name != "string") return l.errors = [{
                  instancePath: d + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                var $ = !0;
              } else $ = !0;
              if ($) {
                if (P.volume !== void 0) {
                  let F = P.volume;
                  const g = 0;
                  if (typeof F != "number" || F % 1 || isNaN(F) || !isFinite(F)) return l.errors = [{
                    instancePath: d + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  $ = g === 0;
                } else $ = !0;
                if ($) {
                  if (P.pitch !== void 0) {
                    let F = P.pitch;
                    const g = 0;
                    if (typeof F != "number" || F % 1 || isNaN(F) || !isFinite(F)) return l.errors = [{
                      instancePath: d + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    $ = g === 0;
                  } else $ = !0;
                  if ($) if (P.pan !== void 0) {
                    let F = P.pan;
                    const g = 0;
                    if (typeof F != "number" || F % 1 || isNaN(F) || !isFinite(F)) return l.errors = [{
                      instancePath: d + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    $ = g === 0;
                  } else $ = !0;
                }
              }
            }
          }
          I = p === 0;
        } else I = !0;
      }
    }
    return l.errors = null, !0;
  }
  return ve.exports;
})()), Ce = (h) => Se(h);
var Fe, be = {
  exports: {}
};
const $e = ce((function() {
  if (Fe) return be.exports;
  Fe = 1, be.exports = d, be.exports.default = d;
  const h = {
    properties: {
      autoplayBgm: { type: "boolean" },
      autoplayBgs: { type: "boolean" },
      battleback1Name: { type: "string" },
      battleback2Name: { type: "string" },
      bgm: { $ref: "#/$defs/AudioFileParams" },
      bgs: { $ref: "#/$defs/AudioFileParams" },
      data: {
        items: { type: "integer" },
        type: "array"
      },
      disableDashing: { type: "boolean" },
      displayName: { type: "string" },
      encounterList: { $ref: "#/$defs/EncounterList" },
      events: { $ref: "#/$defs/MapEvents" },
      width: { minimum: 0, type: "integer" },
      height: { minimum: 0, type: "integer" },
      note: { type: "string" },
      parallaxLoopX: { type: "boolean" },
      parallaxLoopY: { type: "boolean" },
      parallaxName: { type: "string" },
      parallaxShow: { type: "boolean" },
      parallaxSx: { type: "integer" },
      parallaxSy: { type: "integer" },
      tilesetId: { type: "integer" },
      encounterStep: { type: "integer" },
      scrollType: { type: "integer" },
      specifyBattleback: { type: "boolean" }
    }
  }, l = { items: { oneOf: [{ type: "null" }, { required: ["id", "name", "x", "y", "pages", "note"], type: "object", properties: { id: { type: "integer" }, name: { type: "string" }, note: { type: "string" }, pages: {
    type: "array",
    items: {
      additionalProperties: !1,
      required: ["conditions", "image", "list", "moveRoute", "directionFix", "priorityType", "moveFrequency", "walkAnime", "stepAnime", "through", "moveSpeed", "moveType", "trigger"],
      type: "object",
      properties: {
        stepAnime: { type: "boolean" },
        walkAnime: { type: "boolean" },
        through: { type: "boolean" },
        priorityType: { type: "integer" },
        moveSpeed: { type: "integer" },
        moveType: { type: "integer" },
        trigger: { type: "integer" },
        conditions: {
          additionalProperties: !1,
          type: "object",
          required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"],
          properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: {
            type: "integer",
            minimum: 0
          }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: {
            type: "boolean"
          }, actorId: { type: "integer" }, actorValid: { type: "boolean" } }
        },
        directionFix: { type: "boolean" },
        image: {
          additionalProperties: !1,
          properties: { characterIndex: {
            minimum: 0,
            type: "integer"
          }, characterName: { type: "string" }, direction: { enum: [2, 4, 6, 8], type: "integer" }, pattern: { type: "integer" }, tileId: { type: "integer" } },
          required: ["characterIndex", "characterName", "direction", "pattern", "tileId"],
          type: "object"
        },
        list: { type: "array", items: {
          additionalProperties: !1,
          type: "object",
          required: ["code", "parameters", "indent"],
          properties: { code: { type: "integer" }, indent: { type: "integer" }, parameters: { type: "array", items: {} } }
        } },
        moveFrequency: { type: "integer" },
        moveRoute: {
          additionalProperties: !1,
          properties: {
            list: { items: { additionalProperties: !0, properties: { code: { type: "integer" }, parameters: { nullable: !0, type: "array", items: { oneOf: [{ type: "string" }, {
              type: "number"
            }, {
              additionalProperties: !1,
              properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } },
              required: ["name", "pan", "pitch", "volume"],
              type: "object"
            }] } } }, required: ["code"], type: "object" }, type: "array" },
            repeat: { type: "boolean" },
            skippable: { type: "boolean" },
            wait: { type: "boolean" }
          },
          required: ["wait", "repeat", "skippable", "list"],
          type: "object"
        }
      }
    }
  }, x: { type: "integer" }, y: { type: "integer" } } }] } }, m = Object.prototype.hasOwnProperty;
  function d(y, { instancePath: s = "", parentData: j, parentDataProperty: I, rootData: $ = y } = {}) {
    let t = null, e = 0;
    if (e === 0) {
      if (!y || typeof y != "object" || Array.isArray(y)) return d.errors = [{
        instancePath: s,
        schemaPath: "#/type",
        keyword: "type",
        params: { type: "object" },
        message: "must be object"
      }], !1;
      {
        let E;
        if (y.battleback1Name === void 0 && (E = "battleback1Name") || y.battleback2Name === void 0 && (E = "battleback2Name") || y.note === void 0 && (E = "note") || y.width === void 0 && (E = "width") || y.height === void 0 && (E = "height") || y.parallaxSy === void 0 && (E = "parallaxSy") || y.parallaxSx === void 0 && (E = "parallaxSx") || y.parallaxLoopY === void 0 && (E = "parallaxLoopY") || y.parallaxLoopX === void 0 && (E = "parallaxLoopX") || y.disableDashing === void 0 && (E = "disableDashing") || y.parallaxName === void 0 && (E = "parallaxName") || y.parallaxShow === void 0 && (E = "parallaxShow") || y.displayName === void 0 && (E = "displayName") || y.data === void 0 && (E = "data") || y.autoplayBgm === void 0 && (E = "autoplayBgm") || y.bgm === void 0 && (E = "bgm") || y.autoplayBgs === void 0 && (E = "autoplayBgs") || y.bgs === void 0 && (E = "bgs") || y.tilesetId === void 0 && (E = "tilesetId") || y.encounterList === void 0 && (E = "encounterList") || y.events === void 0 && (E = "events") || y.encounterStep === void 0 && (E = "encounterStep") || y.scrollType === void 0 && (E = "scrollType") || y.specifyBattleback === void 0 && (E = "specifyBattleback")) return d.errors = [{
          instancePath: s,
          schemaPath: "#/required",
          keyword: "required",
          params: { missingProperty: E },
          message: "must have required property '" + E + "'"
        }], !1;
        {
          const Z = e;
          for (const a in y) if (!m.call(h.properties, a)) return d.errors = [{
            instancePath: s,
            schemaPath: "#/additionalProperties",
            keyword: "additionalProperties",
            params: { additionalProperty: a },
            message: "must NOT have additional properties"
          }], !1;
          if (Z === e) {
            if (y.autoplayBgm !== void 0) {
              const a = e;
              if (typeof y.autoplayBgm != "boolean") return d.errors = [{
                instancePath: s + "/autoplayBgm",
                schemaPath: "#/properties/autoplayBgm/type",
                keyword: "type",
                params: { type: "boolean" },
                message: "must be boolean"
              }], !1;
              var p = a === e;
            } else p = !0;
            if (p) {
              if (y.autoplayBgs !== void 0) {
                const a = e;
                if (typeof y.autoplayBgs != "boolean") return d.errors = [{
                  instancePath: s + "/autoplayBgs",
                  schemaPath: "#/properties/autoplayBgs/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean"
                }], !1;
                p = a === e;
              } else p = !0;
              if (p) {
                if (y.battleback1Name !== void 0) {
                  const a = e;
                  if (typeof y.battleback1Name != "string") return d.errors = [{
                    instancePath: s + "/battleback1Name",
                    schemaPath: "#/properties/battleback1Name/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  p = a === e;
                } else p = !0;
                if (p) {
                  if (y.battleback2Name !== void 0) {
                    const a = e;
                    if (typeof y.battleback2Name != "string") return d.errors = [{
                      instancePath: s + "/battleback2Name",
                      schemaPath: "#/properties/battleback2Name/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], !1;
                    p = a === e;
                  } else p = !0;
                  if (p) {
                    if (y.bgm !== void 0) {
                      let a = y.bgm;
                      const S = e;
                      if (e === e) {
                        if (!a || typeof a != "object" || Array.isArray(a)) return d.errors = [{
                          instancePath: s + "/bgm",
                          schemaPath: "#/$defs/AudioFileParams/type",
                          keyword: "type",
                          params: { type: "object" },
                          message: "must be object"
                        }], !1;
                        {
                          let X;
                          if (a.name === void 0 && (X = "name") || a.pan === void 0 && (X = "pan") || a.pitch === void 0 && (X = "pitch") || a.volume === void 0 && (X = "volume")) return d.errors = [{
                            instancePath: s + "/bgm",
                            schemaPath: "#/$defs/AudioFileParams/required",
                            keyword: "required",
                            params: { missingProperty: X },
                            message: "must have required property '" + X + "'"
                          }], !1;
                          {
                            const o = e;
                            for (const n in a) if (n !== "name" && n !== "pan" && n !== "pitch" && n !== "volume") return d.errors = [{
                              instancePath: s + "/bgm",
                              schemaPath: "#/$defs/AudioFileParams/additionalProperties",
                              keyword: "additionalProperties",
                              params: { additionalProperty: n },
                              message: "must NOT have additional properties"
                            }], !1;
                            if (o === e) {
                              if (a.name !== void 0) {
                                const n = e;
                                if (typeof a.name != "string") return d.errors = [{
                                  instancePath: s + "/bgm/name",
                                  schemaPath: "#/$defs/AudioFileParams/properties/name/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string"
                                }], !1;
                                var P = n === e;
                              } else P = !0;
                              if (P) {
                                if (a.pan !== void 0) {
                                  let n = a.pan;
                                  const W = e;
                                  if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                    instancePath: s + "/bgm/pan",
                                    schemaPath: "#/$defs/AudioFileParams/properties/pan/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  P = W === e;
                                } else P = !0;
                                if (P) {
                                  if (a.pitch !== void 0) {
                                    let n = a.pitch;
                                    const W = e;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                      instancePath: s + "/bgm/pitch",
                                      schemaPath: "#/$defs/AudioFileParams/properties/pitch/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    P = W === e;
                                  } else P = !0;
                                  if (P) if (a.volume !== void 0) {
                                    let n = a.volume;
                                    const W = e;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                      instancePath: s + "/bgm/volume",
                                      schemaPath: "#/$defs/AudioFileParams/properties/volume/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    P = W === e;
                                  } else P = !0;
                                }
                              }
                            }
                          }
                        }
                      }
                      p = S === e;
                    } else p = !0;
                    if (p) {
                      if (y.bgs !== void 0) {
                        let a = y.bgs;
                        const S = e;
                        if (e === e) {
                          if (!a || typeof a != "object" || Array.isArray(a)) return d.errors = [{
                            instancePath: s + "/bgs",
                            schemaPath: "#/$defs/AudioFileParams/type",
                            keyword: "type",
                            params: { type: "object" },
                            message: "must be object"
                          }], !1;
                          {
                            let X;
                            if (a.name === void 0 && (X = "name") || a.pan === void 0 && (X = "pan") || a.pitch === void 0 && (X = "pitch") || a.volume === void 0 && (X = "volume")) return d.errors = [{
                              instancePath: s + "/bgs",
                              schemaPath: "#/$defs/AudioFileParams/required",
                              keyword: "required",
                              params: { missingProperty: X },
                              message: "must have required property '" + X + "'"
                            }], !1;
                            {
                              const o = e;
                              for (const n in a) if (n !== "name" && n !== "pan" && n !== "pitch" && n !== "volume") return d.errors = [{
                                instancePath: s + "/bgs",
                                schemaPath: "#/$defs/AudioFileParams/additionalProperties",
                                keyword: "additionalProperties",
                                params: { additionalProperty: n },
                                message: "must NOT have additional properties"
                              }], !1;
                              if (o === e) {
                                if (a.name !== void 0) {
                                  const n = e;
                                  if (typeof a.name != "string") return d.errors = [{
                                    instancePath: s + "/bgs/name",
                                    schemaPath: "#/$defs/AudioFileParams/properties/name/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], !1;
                                  var x = n === e;
                                } else x = !0;
                                if (x) {
                                  if (a.pan !== void 0) {
                                    let n = a.pan;
                                    const W = e;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                      instancePath: s + "/bgs/pan",
                                      schemaPath: "#/$defs/AudioFileParams/properties/pan/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    x = W === e;
                                  } else x = !0;
                                  if (x) {
                                    if (a.pitch !== void 0) {
                                      let n = a.pitch;
                                      const W = e;
                                      if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                        instancePath: s + "/bgs/pitch",
                                        schemaPath: "#/$defs/AudioFileParams/properties/pitch/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      x = W === e;
                                    } else x = !0;
                                    if (x) if (a.volume !== void 0) {
                                      let n = a.volume;
                                      const W = e;
                                      if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                        instancePath: s + "/bgs/volume",
                                        schemaPath: "#/$defs/AudioFileParams/properties/volume/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      x = W === e;
                                    } else x = !0;
                                  }
                                }
                              }
                            }
                          }
                        }
                        p = S === e;
                      } else p = !0;
                      if (p) {
                        if (y.data !== void 0) {
                          let a = y.data;
                          const S = e;
                          if (e === S) {
                            if (!Array.isArray(a)) return d.errors = [{ instancePath: s + "/data", schemaPath: "#/properties/data/type", keyword: "type", params: {
                              type: "array"
                            }, message: "must be array" }], !1;
                            {
                              const X = a.length;
                              for (let o = 0; o < X; o++) {
                                let n = a[o];
                                const W = e;
                                if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return d.errors = [{
                                  instancePath: s + "/data/" + o,
                                  schemaPath: "#/properties/data/items/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (W !== e) break;
                              }
                            }
                          }
                          p = S === e;
                        } else p = !0;
                        if (p) {
                          if (y.disableDashing !== void 0) {
                            const a = e;
                            if (typeof y.disableDashing != "boolean") return d.errors = [{
                              instancePath: s + "/disableDashing",
                              schemaPath: "#/properties/disableDashing/type",
                              keyword: "type",
                              params: { type: "boolean" },
                              message: "must be boolean"
                            }], !1;
                            p = a === e;
                          } else p = !0;
                          if (p) {
                            if (y.displayName !== void 0) {
                              const a = e;
                              if (typeof y.displayName != "string") return d.errors = [{
                                instancePath: s + "/displayName",
                                schemaPath: "#/properties/displayName/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string"
                              }], !1;
                              p = a === e;
                            } else p = !0;
                            if (p) {
                              if (y.encounterList !== void 0) {
                                let a = y.encounterList;
                                const S = e;
                                if (e === e) {
                                  if (!Array.isArray(a)) return d.errors = [{
                                    instancePath: s + "/encounterList",
                                    schemaPath: "#/$defs/EncounterList/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], !1;
                                  {
                                    const X = a.length;
                                    for (let o = 0; o < X; o++) {
                                      let n = a[o];
                                      const W = e;
                                      if (e === W) {
                                        if (!n || typeof n != "object" || Array.isArray(n)) return d.errors = [{
                                          instancePath: s + "/encounterList/" + o,
                                          schemaPath: "#/$defs/EncounterList/items/type",
                                          keyword: "type",
                                          params: { type: "object" },
                                          message: "must be object"
                                        }], !1;
                                        {
                                          let re;
                                          if (n.regionSet === void 0 && (re = "regionSet") || n.troopId === void 0 && (re = "troopId") || n.weight === void 0 && (re = "weight")) return d.errors = [{
                                            instancePath: s + "/encounterList/" + o,
                                            schemaPath: "#/$defs/EncounterList/items/required",
                                            keyword: "required",
                                            params: { missingProperty: re },
                                            message: "must have required property '" + re + "'"
                                          }], !1;
                                          {
                                            const me = e;
                                            for (const T in n) if (T !== "regionSet" && T !== "troopId" && T !== "weight") return d.errors = [{
                                              instancePath: s + "/encounterList/" + o,
                                              schemaPath: "#/$defs/EncounterList/items/additionalProperties",
                                              keyword: "additionalProperties",
                                              params: { additionalProperty: T },
                                              message: "must NOT have additional properties"
                                            }], !1;
                                            if (me === e) {
                                              if (n.regionSet !== void 0) {
                                                let T = n.regionSet;
                                                const ae = e;
                                                if (e === ae) {
                                                  if (!Array.isArray(T)) return d.errors = [{
                                                    instancePath: s + "/encounterList/" + o + "/regionSet",
                                                    schemaPath: "#/$defs/EncounterList/items/properties/regionSet/type",
                                                    keyword: "type",
                                                    params: { type: "array" },
                                                    message: "must be array"
                                                  }], !1;
                                                  {
                                                    const le = T.length;
                                                    for (let D = 0; D < le; D++) {
                                                      let M = T[D];
                                                      const J = e;
                                                      if (typeof M != "number" || M % 1 || isNaN(M) || !isFinite(M)) return d.errors = [{
                                                        instancePath: s + "/encounterList/" + o + "/regionSet/" + D,
                                                        schemaPath: "#/$defs/EncounterList/items/properties/regionSet/items/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      if (J !== e) break;
                                                    }
                                                  }
                                                }
                                                var F = ae === e;
                                              } else F = !0;
                                              if (F) {
                                                if (n.troopId !== void 0) {
                                                  let T = n.troopId;
                                                  const ae = e;
                                                  if (typeof T != "number" || T % 1 || isNaN(T) || !isFinite(T)) return d.errors = [{
                                                    instancePath: s + "/encounterList/" + o + "/troopId",
                                                    schemaPath: "#/$defs/EncounterList/items/properties/troopId/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  F = ae === e;
                                                } else F = !0;
                                                if (F) if (n.weight !== void 0) {
                                                  let T = n.weight;
                                                  const ae = e;
                                                  if (typeof T != "number" || T % 1 || isNaN(T) || !isFinite(T)) return d.errors = [{
                                                    instancePath: s + "/encounterList/" + o + "/weight",
                                                    schemaPath: "#/$defs/EncounterList/items/properties/weight/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  F = ae === e;
                                                } else F = !0;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (W !== e) break;
                                    }
                                  }
                                }
                                p = S === e;
                              } else p = !0;
                              if (p) {
                                if (y.events !== void 0) {
                                  let a = y.events;
                                  const S = e;
                                  if (e === e) {
                                    if (!Array.isArray(a)) return d.errors = [{
                                      instancePath: s + "/events",
                                      schemaPath: "#/$defs/MapEvents/type",
                                      keyword: "type",
                                      params: { type: "array" },
                                      message: "must be array"
                                    }], !1;
                                    {
                                      const X = a.length;
                                      for (let o = 0; o < X; o++) {
                                        let n = a[o];
                                        const W = e, re = e;
                                        let me = !1, T = null;
                                        const ae = e;
                                        if (n !== null) {
                                          const D = {
                                            instancePath: s + "/events/" + o,
                                            schemaPath: "#/$defs/MapEvents/items/oneOf/0/type",
                                            keyword: "type",
                                            params: { type: "null" },
                                            message: "must be null"
                                          };
                                          t === null ? t = [D] : t.push(D), e++;
                                        }
                                        (ye = ae === e) && (me = !0, T = 0);
                                        const le = e;
                                        if (e === le) if (n && typeof n == "object" && !Array.isArray(n)) {
                                          let D;
                                          if (n.id === void 0 && (D = "id") || n.name === void 0 && (D = "name") || n.x === void 0 && (D = "x") || n.y === void 0 && (D = "y") || n.pages === void 0 && (D = "pages") || n.note === void 0 && (D = "note")) {
                                            const M = {
                                              instancePath: s + "/events/" + o,
                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/required",
                                              keyword: "required",
                                              params: { missingProperty: D },
                                              message: "must have required property '" + D + "'"
                                            };
                                            t === null ? t = [M] : t.push(M), e++;
                                          } else {
                                            if (n.id !== void 0) {
                                              let M = n.id;
                                              const J = e;
                                              if (typeof M != "number" || M % 1 || isNaN(M) || !isFinite(M)) {
                                                const K = {
                                                  instancePath: s + "/events/" + o + "/id",
                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/id/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                };
                                                t === null ? t = [K] : t.push(K), e++;
                                              }
                                              var g = J === e;
                                            } else g = !0;
                                            if (g) {
                                              if (n.name !== void 0) {
                                                const M = e;
                                                if (typeof n.name != "string") {
                                                  const J = {
                                                    instancePath: s + "/events/" + o + "/name",
                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/name/type",
                                                    keyword: "type",
                                                    params: { type: "string" },
                                                    message: "must be string"
                                                  };
                                                  t === null ? t = [J] : t.push(J), e++;
                                                }
                                                g = M === e;
                                              } else g = !0;
                                              if (g) {
                                                if (n.note !== void 0) {
                                                  const M = e;
                                                  if (typeof n.note != "string") {
                                                    const J = { instancePath: s + "/events/" + o + "/note", schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/note/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                    t === null ? t = [J] : t.push(J), e++;
                                                  }
                                                  g = M === e;
                                                } else g = !0;
                                                if (g) {
                                                  if (n.pages !== void 0) {
                                                    let M = n.pages;
                                                    const J = e;
                                                    if (e === J) if (Array.isArray(M)) {
                                                      const K = M.length;
                                                      for (let u = 0; u < K; u++) {
                                                        let O = M[u];
                                                        const Ne = e;
                                                        if (e === Ne) if (O && typeof O == "object" && !Array.isArray(O)) {
                                                          let z;
                                                          if (O.conditions === void 0 && (z = "conditions") || O.image === void 0 && (z = "image") || O.list === void 0 && (z = "list") || O.moveRoute === void 0 && (z = "moveRoute") || O.directionFix === void 0 && (z = "directionFix") || O.priorityType === void 0 && (z = "priorityType") || O.moveFrequency === void 0 && (z = "moveFrequency") || O.walkAnime === void 0 && (z = "walkAnime") || O.stepAnime === void 0 && (z = "stepAnime") || O.through === void 0 && (z = "through") || O.moveSpeed === void 0 && (z = "moveSpeed") || O.moveType === void 0 && (z = "moveType") || O.trigger === void 0 && (z = "trigger")) {
                                                            const he = {
                                                              instancePath: s + "/events/" + o + "/pages/" + u,
                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/required",
                                                              keyword: "required",
                                                              params: { missingProperty: z },
                                                              message: "must have required property '" + z + "'"
                                                            };
                                                            t === null ? t = [he] : t.push(he), e++;
                                                          } else {
                                                            const he = e;
                                                            for (const i in O) if (!m.call(l.items.oneOf[1].properties.pages.items.properties, i)) {
                                                              const A = { instancePath: s + "/events/" + o + "/pages/" + u, schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/additionalProperties", keyword: "additionalProperties", params: {
                                                                additionalProperty: i
                                                              }, message: "must NOT have additional properties" };
                                                              t === null ? t = [A] : t.push(A), e++;
                                                              break;
                                                            }
                                                            if (he === e) {
                                                              if (O.stepAnime !== void 0) {
                                                                const i = e;
                                                                if (typeof O.stepAnime != "boolean") {
                                                                  const A = {
                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/stepAnime",
                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/stepAnime/type",
                                                                    keyword: "type",
                                                                    params: { type: "boolean" },
                                                                    message: "must be boolean"
                                                                  };
                                                                  t === null ? t = [A] : t.push(A), e++;
                                                                }
                                                                var c = i === e;
                                                              } else c = !0;
                                                              if (c) {
                                                                if (O.walkAnime !== void 0) {
                                                                  const i = e;
                                                                  if (typeof O.walkAnime != "boolean") {
                                                                    const A = {
                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/walkAnime",
                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/walkAnime/type",
                                                                      keyword: "type",
                                                                      params: {
                                                                        type: "boolean"
                                                                      },
                                                                      message: "must be boolean"
                                                                    };
                                                                    t === null ? t = [A] : t.push(A), e++;
                                                                  }
                                                                  c = i === e;
                                                                } else c = !0;
                                                                if (c) {
                                                                  if (O.through !== void 0) {
                                                                    const i = e;
                                                                    if (typeof O.through != "boolean") {
                                                                      const A = {
                                                                        instancePath: s + "/events/" + o + "/pages/" + u + "/through",
                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/through/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                          type: "boolean"
                                                                        },
                                                                        message: "must be boolean"
                                                                      };
                                                                      t === null ? t = [A] : t.push(A), e++;
                                                                    }
                                                                    c = i === e;
                                                                  } else c = !0;
                                                                  if (c) {
                                                                    if (O.priorityType !== void 0) {
                                                                      let i = O.priorityType;
                                                                      const A = e;
                                                                      if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) {
                                                                        const b = {
                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/priorityType",
                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/priorityType/type",
                                                                          keyword: "type",
                                                                          params: { type: "integer" },
                                                                          message: "must be integer"
                                                                        };
                                                                        t === null ? t = [b] : t.push(b), e++;
                                                                      }
                                                                      c = A === e;
                                                                    } else c = !0;
                                                                    if (c) {
                                                                      if (O.moveSpeed !== void 0) {
                                                                        let i = O.moveSpeed;
                                                                        const A = e;
                                                                        if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) {
                                                                          const b = {
                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/moveSpeed",
                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveSpeed/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                              type: "integer"
                                                                            },
                                                                            message: "must be integer"
                                                                          };
                                                                          t === null ? t = [b] : t.push(b), e++;
                                                                        }
                                                                        c = A === e;
                                                                      } else c = !0;
                                                                      if (c) {
                                                                        if (O.moveType !== void 0) {
                                                                          let i = O.moveType;
                                                                          const A = e;
                                                                          if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) {
                                                                            const b = {
                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/moveType",
                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveType/type",
                                                                              keyword: "type",
                                                                              params: { type: "integer" },
                                                                              message: "must be integer"
                                                                            };
                                                                            t === null ? t = [b] : t.push(b), e++;
                                                                          }
                                                                          c = A === e;
                                                                        } else c = !0;
                                                                        if (c) {
                                                                          if (O.trigger !== void 0) {
                                                                            let i = O.trigger;
                                                                            const A = e;
                                                                            if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) {
                                                                              const b = {
                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/trigger",
                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/trigger/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                  type: "integer"
                                                                                },
                                                                                message: "must be integer"
                                                                              };
                                                                              t === null ? t = [b] : t.push(b), e++;
                                                                            }
                                                                            c = A === e;
                                                                          } else c = !0;
                                                                          if (c) {
                                                                            if (O.conditions !== void 0) {
                                                                              let i = O.conditions;
                                                                              const A = e;
                                                                              if (e === A) if (i && typeof i == "object" && !Array.isArray(i)) {
                                                                                let b;
                                                                                if (i.switch1Id === void 0 && (b = "switch1Id") || i.switch1Valid === void 0 && (b = "switch1Valid") || i.switch2Id === void 0 && (b = "switch2Id") || i.switch2Valid === void 0 && (b = "switch2Valid") || i.variableId === void 0 && (b = "variableId") || i.variableValid === void 0 && (b = "variableValid") || i.selfSwitchCh === void 0 && (b = "selfSwitchCh") || i.selfSwitchValid === void 0 && (b = "selfSwitchValid") || i.variableValue === void 0 && (b = "variableValue") || i.itemId === void 0 && (b = "itemId") || i.itemValid === void 0 && (b = "itemValid") || i.actorId === void 0 && (b = "actorId") || i.actorValid === void 0 && (b = "actorValid")) {
                                                                                  const L = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/conditions",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/required",
                                                                                    keyword: "required",
                                                                                    params: { missingProperty: b },
                                                                                    message: "must have required property '" + b + "'"
                                                                                  };
                                                                                  t === null ? t = [L] : t.push(L), e++;
                                                                                } else {
                                                                                  const L = e;
                                                                                  for (const r in i) if (!m.call(l.items.oneOf[1].properties.pages.items.properties.conditions.properties, r)) {
                                                                                    const f = {
                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/conditions",
                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/additionalProperties",
                                                                                      keyword: "additionalProperties",
                                                                                      params: { additionalProperty: r },
                                                                                      message: "must NOT have additional properties"
                                                                                    };
                                                                                    t === null ? t = [f] : t.push(f), e++;
                                                                                    break;
                                                                                  }
                                                                                  if (L === e) {
                                                                                    if (i.switch1Id !== void 0) {
                                                                                      let r = i.switch1Id;
                                                                                      const f = e;
                                                                                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                        const v = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/switch1Id",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch1Id/type",
                                                                                          keyword: "type",
                                                                                          params: { type: "integer" },
                                                                                          message: "must be integer"
                                                                                        };
                                                                                        t === null ? t = [v] : t.push(v), e++;
                                                                                      }
                                                                                      if (e === f && typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) {
                                                                                        const v = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/switch1Id",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch1Id/minimum",
                                                                                          keyword: "minimum",
                                                                                          params: { comparison: ">=", limit: 0 },
                                                                                          message: "must be >= 0"
                                                                                        };
                                                                                        t === null ? t = [v] : t.push(v), e++;
                                                                                      }
                                                                                      var N = f === e;
                                                                                    } else N = !0;
                                                                                    if (N) {
                                                                                      if (i.switch1Valid !== void 0) {
                                                                                        const r = e;
                                                                                        if (typeof i.switch1Valid != "boolean") {
                                                                                          const f = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/switch1Valid",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch1Valid/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "boolean" },
                                                                                            message: "must be boolean"
                                                                                          };
                                                                                          t === null ? t = [f] : t.push(f), e++;
                                                                                        }
                                                                                        N = r === e;
                                                                                      } else N = !0;
                                                                                      if (N) {
                                                                                        if (i.switch2Id !== void 0) {
                                                                                          let r = i.switch2Id;
                                                                                          const f = e;
                                                                                          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                            const v = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/switch2Id",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch2Id/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "integer" },
                                                                                              message: "must be integer"
                                                                                            };
                                                                                            t === null ? t = [v] : t.push(v), e++;
                                                                                          }
                                                                                          if (e === f && typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) {
                                                                                            const v = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/switch2Id",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch2Id/minimum",
                                                                                              keyword: "minimum",
                                                                                              params: { comparison: ">=", limit: 0 },
                                                                                              message: "must be >= 0"
                                                                                            };
                                                                                            t === null ? t = [v] : t.push(v), e++;
                                                                                          }
                                                                                          N = f === e;
                                                                                        } else N = !0;
                                                                                        if (N) {
                                                                                          if (i.switch2Valid !== void 0) {
                                                                                            const r = e;
                                                                                            if (typeof i.switch2Valid != "boolean") {
                                                                                              const f = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/switch2Valid",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch2Valid/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "boolean" },
                                                                                                message: "must be boolean"
                                                                                              };
                                                                                              t === null ? t = [f] : t.push(f), e++;
                                                                                            }
                                                                                            N = r === e;
                                                                                          } else N = !0;
                                                                                          if (N) {
                                                                                            if (i.variableId !== void 0) {
                                                                                              let r = i.variableId;
                                                                                              const f = e;
                                                                                              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                const v = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/variableId",
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableId/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "integer" },
                                                                                                  message: "must be integer"
                                                                                                };
                                                                                                t === null ? t = [v] : t.push(v), e++;
                                                                                              }
                                                                                              if (e === f && typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) {
                                                                                                const v = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/variableId",
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableId/minimum",
                                                                                                  keyword: "minimum",
                                                                                                  params: { comparison: ">=", limit: 0 },
                                                                                                  message: "must be >= 0"
                                                                                                };
                                                                                                t === null ? t = [v] : t.push(v), e++;
                                                                                              }
                                                                                              N = f === e;
                                                                                            } else N = !0;
                                                                                            if (N) {
                                                                                              if (i.variableValid !== void 0) {
                                                                                                const r = e;
                                                                                                if (typeof i.variableValid != "boolean") {
                                                                                                  const f = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/variableValid",
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableValid/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "boolean" },
                                                                                                    message: "must be boolean"
                                                                                                  };
                                                                                                  t === null ? t = [f] : t.push(f), e++;
                                                                                                }
                                                                                                N = r === e;
                                                                                              } else N = !0;
                                                                                              if (N) {
                                                                                                if (i.selfSwitchCh !== void 0) {
                                                                                                  const r = e;
                                                                                                  if (typeof i.selfSwitchCh != "string") {
                                                                                                    const f = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/selfSwitchCh",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/selfSwitchCh/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "string" },
                                                                                                      message: "must be string"
                                                                                                    };
                                                                                                    t === null ? t = [f] : t.push(f), e++;
                                                                                                  }
                                                                                                  N = r === e;
                                                                                                } else N = !0;
                                                                                                if (N) {
                                                                                                  if (i.selfSwitchValid !== void 0) {
                                                                                                    const r = e;
                                                                                                    if (typeof i.selfSwitchValid != "boolean") {
                                                                                                      const f = {
                                                                                                        instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/selfSwitchValid",
                                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/selfSwitchValid/type",
                                                                                                        keyword: "type",
                                                                                                        params: { type: "boolean" },
                                                                                                        message: "must be boolean"
                                                                                                      };
                                                                                                      t === null ? t = [f] : t.push(f), e++;
                                                                                                    }
                                                                                                    N = r === e;
                                                                                                  } else N = !0;
                                                                                                  if (N) {
                                                                                                    if (i.variableValue !== void 0) {
                                                                                                      let r = i.variableValue;
                                                                                                      const f = e;
                                                                                                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                        const v = {
                                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/variableValue",
                                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableValue/type",
                                                                                                          keyword: "type",
                                                                                                          params: { type: "integer" },
                                                                                                          message: "must be integer"
                                                                                                        };
                                                                                                        t === null ? t = [v] : t.push(v), e++;
                                                                                                      }
                                                                                                      N = f === e;
                                                                                                    } else N = !0;
                                                                                                    if (N) {
                                                                                                      if (i.itemId !== void 0) {
                                                                                                        let r = i.itemId;
                                                                                                        const f = e;
                                                                                                        if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                          const v = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/itemId",
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/itemId/type",
                                                                                                            keyword: "type",
                                                                                                            params: { type: "integer" },
                                                                                                            message: "must be integer"
                                                                                                          };
                                                                                                          t === null ? t = [v] : t.push(v), e++;
                                                                                                        }
                                                                                                        if (e === f && typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) {
                                                                                                          const v = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/itemId",
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/itemId/minimum",
                                                                                                            keyword: "minimum",
                                                                                                            params: { comparison: ">=", limit: 0 },
                                                                                                            message: "must be >= 0"
                                                                                                          };
                                                                                                          t === null ? t = [v] : t.push(v), e++;
                                                                                                        }
                                                                                                        N = f === e;
                                                                                                      } else N = !0;
                                                                                                      if (N) {
                                                                                                        if (i.itemValid !== void 0) {
                                                                                                          const r = e;
                                                                                                          if (typeof i.itemValid != "boolean") {
                                                                                                            const f = {
                                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/itemValid",
                                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/itemValid/type",
                                                                                                              keyword: "type",
                                                                                                              params: { type: "boolean" },
                                                                                                              message: "must be boolean"
                                                                                                            };
                                                                                                            t === null ? t = [f] : t.push(f), e++;
                                                                                                          }
                                                                                                          N = r === e;
                                                                                                        } else N = !0;
                                                                                                        if (N) {
                                                                                                          if (i.actorId !== void 0) {
                                                                                                            let r = i.actorId;
                                                                                                            const f = e;
                                                                                                            if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                              const v = {
                                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/actorId",
                                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/actorId/type",
                                                                                                                keyword: "type",
                                                                                                                params: { type: "integer" },
                                                                                                                message: "must be integer"
                                                                                                              };
                                                                                                              t === null ? t = [v] : t.push(v), e++;
                                                                                                            }
                                                                                                            N = f === e;
                                                                                                          } else N = !0;
                                                                                                          if (N) if (i.actorValid !== void 0) {
                                                                                                            const r = e;
                                                                                                            if (typeof i.actorValid != "boolean") {
                                                                                                              const f = {
                                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/conditions/actorValid",
                                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/actorValid/type",
                                                                                                                keyword: "type",
                                                                                                                params: { type: "boolean" },
                                                                                                                message: "must be boolean"
                                                                                                              };
                                                                                                              t === null ? t = [f] : t.push(f), e++;
                                                                                                            }
                                                                                                            N = r === e;
                                                                                                          } else N = !0;
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
                                                                              } else {
                                                                                const b = {
                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/conditions",
                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/type",
                                                                                  keyword: "type",
                                                                                  params: { type: "object" },
                                                                                  message: "must be object"
                                                                                };
                                                                                t === null ? t = [b] : t.push(b), e++;
                                                                              }
                                                                              c = A === e;
                                                                            } else c = !0;
                                                                            if (c) {
                                                                              if (O.directionFix !== void 0) {
                                                                                const i = e;
                                                                                if (typeof O.directionFix != "boolean") {
                                                                                  const A = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/directionFix",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/directionFix/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                      type: "boolean"
                                                                                    },
                                                                                    message: "must be boolean"
                                                                                  };
                                                                                  t === null ? t = [A] : t.push(A), e++;
                                                                                }
                                                                                c = i === e;
                                                                              } else c = !0;
                                                                              if (c) {
                                                                                if (O.image !== void 0) {
                                                                                  let i = O.image;
                                                                                  const A = e;
                                                                                  if (e === A) if (i && typeof i == "object" && !Array.isArray(i)) {
                                                                                    let b;
                                                                                    if (i.characterIndex === void 0 && (b = "characterIndex") || i.characterName === void 0 && (b = "characterName") || i.direction === void 0 && (b = "direction") || i.pattern === void 0 && (b = "pattern") || i.tileId === void 0 && (b = "tileId")) {
                                                                                      const L = { instancePath: s + "/events/" + o + "/pages/" + u + "/image", schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/required", keyword: "required", params: {
                                                                                        missingProperty: b
                                                                                      }, message: "must have required property '" + b + "'" };
                                                                                      t === null ? t = [L] : t.push(L), e++;
                                                                                    } else {
                                                                                      const L = e;
                                                                                      for (const r in i) if (r !== "characterIndex" && r !== "characterName" && r !== "direction" && r !== "pattern" && r !== "tileId") {
                                                                                        const f = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/image",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/additionalProperties",
                                                                                          keyword: "additionalProperties",
                                                                                          params: { additionalProperty: r },
                                                                                          message: "must NOT have additional properties"
                                                                                        };
                                                                                        t === null ? t = [f] : t.push(f), e++;
                                                                                        break;
                                                                                      }
                                                                                      if (L === e) {
                                                                                        if (i.characterIndex !== void 0) {
                                                                                          let r = i.characterIndex;
                                                                                          const f = e;
                                                                                          if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                            const v = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/image/characterIndex",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/characterIndex/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "integer" },
                                                                                              message: "must be integer"
                                                                                            };
                                                                                            t === null ? t = [v] : t.push(v), e++;
                                                                                          }
                                                                                          if (e === f && typeof r == "number" && isFinite(r) && (r < 0 || isNaN(r))) {
                                                                                            const v = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/image/characterIndex",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/characterIndex/minimum",
                                                                                              keyword: "minimum",
                                                                                              params: { comparison: ">=", limit: 0 },
                                                                                              message: "must be >= 0"
                                                                                            };
                                                                                            t === null ? t = [v] : t.push(v), e++;
                                                                                          }
                                                                                          var V = f === e;
                                                                                        } else V = !0;
                                                                                        if (V) {
                                                                                          if (i.characterName !== void 0) {
                                                                                            const r = e;
                                                                                            if (typeof i.characterName != "string") {
                                                                                              const f = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/image/characterName",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/characterName/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "string" },
                                                                                                message: "must be string"
                                                                                              };
                                                                                              t === null ? t = [f] : t.push(f), e++;
                                                                                            }
                                                                                            V = r === e;
                                                                                          } else V = !0;
                                                                                          if (V) {
                                                                                            if (i.direction !== void 0) {
                                                                                              let r = i.direction;
                                                                                              const f = e;
                                                                                              if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                const v = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/image/direction",
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/direction/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "integer" },
                                                                                                  message: "must be integer"
                                                                                                };
                                                                                                t === null ? t = [v] : t.push(v), e++;
                                                                                              }
                                                                                              if (r !== 2 && r !== 4 && r !== 6 && r !== 8) {
                                                                                                const v = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/image/direction",
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/direction/enum",
                                                                                                  keyword: "enum",
                                                                                                  params: {
                                                                                                    allowedValues: l.items.oneOf[1].properties.pages.items.properties.image.properties.direction.enum
                                                                                                  },
                                                                                                  message: "must be equal to one of the allowed values"
                                                                                                };
                                                                                                t === null ? t = [v] : t.push(v), e++;
                                                                                              }
                                                                                              V = f === e;
                                                                                            } else V = !0;
                                                                                            if (V) {
                                                                                              if (i.pattern !== void 0) {
                                                                                                let r = i.pattern;
                                                                                                const f = e;
                                                                                                if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                  const v = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/image/pattern",
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/pattern/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "integer" },
                                                                                                    message: "must be integer"
                                                                                                  };
                                                                                                  t === null ? t = [v] : t.push(v), e++;
                                                                                                }
                                                                                                V = f === e;
                                                                                              } else V = !0;
                                                                                              if (V) if (i.tileId !== void 0) {
                                                                                                let r = i.tileId;
                                                                                                const f = e;
                                                                                                if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                                  const v = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/image/tileId",
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/tileId/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "integer" },
                                                                                                    message: "must be integer"
                                                                                                  };
                                                                                                  t === null ? t = [v] : t.push(v), e++;
                                                                                                }
                                                                                                V = f === e;
                                                                                              } else V = !0;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  } else {
                                                                                    const b = {
                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/image",
                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/type",
                                                                                      keyword: "type",
                                                                                      params: { type: "object" },
                                                                                      message: "must be object"
                                                                                    };
                                                                                    t === null ? t = [b] : t.push(b), e++;
                                                                                  }
                                                                                  c = A === e;
                                                                                } else c = !0;
                                                                                if (c) {
                                                                                  if (O.list !== void 0) {
                                                                                    let i = O.list;
                                                                                    const A = e;
                                                                                    if (e === A) if (Array.isArray(i)) {
                                                                                      const b = i.length;
                                                                                      for (let L = 0; L < b; L++) {
                                                                                        let r = i[L];
                                                                                        const f = e;
                                                                                        if (e === f) if (r && typeof r == "object" && !Array.isArray(r)) {
                                                                                          let v;
                                                                                          if (r.code === void 0 && (v = "code") || r.parameters === void 0 && (v = "parameters") || r.indent === void 0 && (v = "indent")) {
                                                                                            const B = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/list/" + L,
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/required",
                                                                                              keyword: "required",
                                                                                              params: {
                                                                                                missingProperty: v
                                                                                              },
                                                                                              message: "must have required property '" + v + "'"
                                                                                            };
                                                                                            t === null ? t = [B] : t.push(B), e++;
                                                                                          } else {
                                                                                            const B = e;
                                                                                            for (const R in r) if (R !== "code" && R !== "indent" && R !== "parameters") {
                                                                                              const _ = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/list/" + L,
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/additionalProperties",
                                                                                                keyword: "additionalProperties",
                                                                                                params: { additionalProperty: R },
                                                                                                message: "must NOT have additional properties"
                                                                                              };
                                                                                              t === null ? t = [_] : t.push(_), e++;
                                                                                              break;
                                                                                            }
                                                                                            if (B === e) {
                                                                                              if (r.code !== void 0) {
                                                                                                let R = r.code;
                                                                                                const _ = e;
                                                                                                if (typeof R != "number" || R % 1 || isNaN(R) || !isFinite(R)) {
                                                                                                  const ee = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/list/" + L + "/code",
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/properties/code/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "integer" },
                                                                                                    message: "must be integer"
                                                                                                  };
                                                                                                  t === null ? t = [ee] : t.push(ee), e++;
                                                                                                }
                                                                                                var w = _ === e;
                                                                                              } else w = !0;
                                                                                              if (w) {
                                                                                                if (r.indent !== void 0) {
                                                                                                  let R = r.indent;
                                                                                                  const _ = e;
                                                                                                  if (typeof R != "number" || R % 1 || isNaN(R) || !isFinite(R)) {
                                                                                                    const ee = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/list/" + L + "/indent",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/properties/indent/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "integer" },
                                                                                                      message: "must be integer"
                                                                                                    };
                                                                                                    t === null ? t = [ee] : t.push(ee), e++;
                                                                                                  }
                                                                                                  w = _ === e;
                                                                                                } else w = !0;
                                                                                                if (w) if (r.parameters !== void 0) {
                                                                                                  const R = e;
                                                                                                  if (e === R && !Array.isArray(r.parameters)) {
                                                                                                    const _ = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/list/" + L + "/parameters",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/properties/parameters/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "array" },
                                                                                                      message: "must be array"
                                                                                                    };
                                                                                                    t === null ? t = [_] : t.push(_), e++;
                                                                                                  }
                                                                                                  w = R === e;
                                                                                                } else w = !0;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        } else {
                                                                                          const v = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/list/" + L,
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "object" },
                                                                                            message: "must be object"
                                                                                          };
                                                                                          t === null ? t = [v] : t.push(v), e++;
                                                                                        }
                                                                                        if (f !== e) break;
                                                                                      }
                                                                                    } else {
                                                                                      const b = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + u + "/list",
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "array" },
                                                                                        message: "must be array"
                                                                                      };
                                                                                      t === null ? t = [b] : t.push(b), e++;
                                                                                    }
                                                                                    c = A === e;
                                                                                  } else c = !0;
                                                                                  if (c) {
                                                                                    if (O.moveFrequency !== void 0) {
                                                                                      let i = O.moveFrequency;
                                                                                      const A = e;
                                                                                      if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) {
                                                                                        const b = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/moveFrequency",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveFrequency/type",
                                                                                          keyword: "type",
                                                                                          params: {
                                                                                            type: "integer"
                                                                                          },
                                                                                          message: "must be integer"
                                                                                        };
                                                                                        t === null ? t = [b] : t.push(b), e++;
                                                                                      }
                                                                                      c = A === e;
                                                                                    } else c = !0;
                                                                                    if (c) if (O.moveRoute !== void 0) {
                                                                                      let i = O.moveRoute;
                                                                                      const A = e;
                                                                                      if (e === A) if (i && typeof i == "object" && !Array.isArray(i)) {
                                                                                        let b;
                                                                                        if (i.wait === void 0 && (b = "wait") || i.repeat === void 0 && (b = "repeat") || i.skippable === void 0 && (b = "skippable") || i.list === void 0 && (b = "list")) {
                                                                                          const L = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/required",
                                                                                            keyword: "required",
                                                                                            params: {
                                                                                              missingProperty: b
                                                                                            },
                                                                                            message: "must have required property '" + b + "'"
                                                                                          };
                                                                                          t === null ? t = [L] : t.push(L), e++;
                                                                                        } else {
                                                                                          const L = e;
                                                                                          for (const r in i) if (r !== "list" && r !== "repeat" && r !== "skippable" && r !== "wait") {
                                                                                            const f = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/additionalProperties",
                                                                                              keyword: "additionalProperties",
                                                                                              params: { additionalProperty: r },
                                                                                              message: "must NOT have additional properties"
                                                                                            };
                                                                                            t === null ? t = [f] : t.push(f), e++;
                                                                                            break;
                                                                                          }
                                                                                          if (L === e) {
                                                                                            if (i.list !== void 0) {
                                                                                              let r = i.list;
                                                                                              const f = e;
                                                                                              if (e === f) if (Array.isArray(r)) {
                                                                                                const v = r.length;
                                                                                                for (let B = 0; B < v; B++) {
                                                                                                  let R = r[B];
                                                                                                  const _ = e;
                                                                                                  if (e === _) if (R && typeof R == "object" && !Array.isArray(R)) {
                                                                                                    let ee;
                                                                                                    if (R.code === void 0 && (ee = "code")) {
                                                                                                      const Q = {
                                                                                                        instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B,
                                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/required",
                                                                                                        keyword: "required",
                                                                                                        params: { missingProperty: ee },
                                                                                                        message: "must have required property '" + ee + "'"
                                                                                                      };
                                                                                                      t === null ? t = [Q] : t.push(Q), e++;
                                                                                                    } else {
                                                                                                      if (R.code !== void 0) {
                                                                                                        let Q = R.code;
                                                                                                        const ue = e;
                                                                                                        if (typeof Q != "number" || Q % 1 || isNaN(Q) || !isFinite(Q)) {
                                                                                                          const de = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/code",
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/code/type",
                                                                                                            keyword: "type",
                                                                                                            params: { type: "integer" },
                                                                                                            message: "must be integer"
                                                                                                          };
                                                                                                          t === null ? t = [de] : t.push(de), e++;
                                                                                                        }
                                                                                                        var G = ue === e;
                                                                                                      } else G = !0;
                                                                                                      if (G) if (R.parameters !== void 0) {
                                                                                                        let Q = R.parameters;
                                                                                                        const ue = e;
                                                                                                        if (!Array.isArray(Q) && Q !== null) {
                                                                                                          const de = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters",
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/type",
                                                                                                            keyword: "type",
                                                                                                            params: { type: "array" },
                                                                                                            message: "must be array"
                                                                                                          };
                                                                                                          t === null ? t = [de] : t.push(de), e++;
                                                                                                        }
                                                                                                        if (e === ue && Array.isArray(Q)) {
                                                                                                          const de = Q.length;
                                                                                                          for (let U = 0; U < de; U++) {
                                                                                                            let Y = Q[U];
                                                                                                            const Ee = e, ke = e;
                                                                                                            let oe = !1, pe = null;
                                                                                                            const qe = e;
                                                                                                            if (typeof Y != "string") {
                                                                                                              const te = {
                                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U,
                                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/0/type",
                                                                                                                keyword: "type",
                                                                                                                params: {
                                                                                                                  type: "string"
                                                                                                                },
                                                                                                                message: "must be string"
                                                                                                              };
                                                                                                              t === null ? t = [te] : t.push(te), e++;
                                                                                                            }
                                                                                                            (k = qe === e) && (oe = !0, pe = 0);
                                                                                                            const Me = e;
                                                                                                            if (typeof Y != "number" || !isFinite(Y)) {
                                                                                                              const te = {
                                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U,
                                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/1/type",
                                                                                                                keyword: "type",
                                                                                                                params: {
                                                                                                                  type: "number"
                                                                                                                },
                                                                                                                message: "must be number"
                                                                                                              };
                                                                                                              t === null ? t = [te] : t.push(te), e++;
                                                                                                            }
                                                                                                            if ((k = Me === e) && oe) oe = !1, pe = [pe, 1];
                                                                                                            else {
                                                                                                              k && (oe = !0, pe = 1);
                                                                                                              const te = e;
                                                                                                              if (e === te) if (Y && typeof Y == "object" && !Array.isArray(Y)) {
                                                                                                                let ie;
                                                                                                                if (Y.name === void 0 && (ie = "name") || Y.pan === void 0 && (ie = "pan") || Y.pitch === void 0 && (ie = "pitch") || Y.volume === void 0 && (ie = "volume")) {
                                                                                                                  const fe = {
                                                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U,
                                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/required",
                                                                                                                    keyword: "required",
                                                                                                                    params: { missingProperty: ie },
                                                                                                                    message: "must have required property '" + ie + "'"
                                                                                                                  };
                                                                                                                  t === null ? t = [fe] : t.push(fe), e++;
                                                                                                                } else {
                                                                                                                  const fe = e;
                                                                                                                  for (const C in Y) if (C !== "name" && C !== "pan" && C !== "pitch" && C !== "volume") {
                                                                                                                    const se = {
                                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U,
                                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/additionalProperties",
                                                                                                                      keyword: "additionalProperties",
                                                                                                                      params: { additionalProperty: C },
                                                                                                                      message: "must NOT have additional properties"
                                                                                                                    };
                                                                                                                    t === null ? t = [se] : t.push(se), e++;
                                                                                                                    break;
                                                                                                                  }
                                                                                                                  if (fe === e) {
                                                                                                                    if (Y.name !== void 0) {
                                                                                                                      const C = e;
                                                                                                                      if (typeof Y.name != "string") {
                                                                                                                        const se = {
                                                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U + "/name",
                                                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/name/type",
                                                                                                                          keyword: "type",
                                                                                                                          params: { type: "string" },
                                                                                                                          message: "must be string"
                                                                                                                        };
                                                                                                                        t === null ? t = [se] : t.push(se), e++;
                                                                                                                      }
                                                                                                                      var H = C === e;
                                                                                                                    } else H = !0;
                                                                                                                    if (H) {
                                                                                                                      if (Y.pan !== void 0) {
                                                                                                                        let C = Y.pan;
                                                                                                                        const se = e;
                                                                                                                        if (typeof C != "number" || C % 1 || isNaN(C) || !isFinite(C)) {
                                                                                                                          const ne = {
                                                                                                                            instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U + "/pan",
                                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/pan/type",
                                                                                                                            keyword: "type",
                                                                                                                            params: { type: "integer" },
                                                                                                                            message: "must be integer"
                                                                                                                          };
                                                                                                                          t === null ? t = [ne] : t.push(ne), e++;
                                                                                                                        }
                                                                                                                        H = se === e;
                                                                                                                      } else H = !0;
                                                                                                                      if (H) {
                                                                                                                        if (Y.pitch !== void 0) {
                                                                                                                          let C = Y.pitch;
                                                                                                                          const se = e;
                                                                                                                          if (typeof C != "number" || C % 1 || isNaN(C) || !isFinite(C)) {
                                                                                                                            const ne = {
                                                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U + "/pitch",
                                                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/pitch/type",
                                                                                                                              keyword: "type",
                                                                                                                              params: { type: "integer" },
                                                                                                                              message: "must be integer"
                                                                                                                            };
                                                                                                                            t === null ? t = [ne] : t.push(ne), e++;
                                                                                                                          }
                                                                                                                          H = se === e;
                                                                                                                        } else H = !0;
                                                                                                                        if (H) if (Y.volume !== void 0) {
                                                                                                                          let C = Y.volume;
                                                                                                                          const se = e;
                                                                                                                          if (typeof C != "number" || C % 1 || isNaN(C) || !isFinite(C)) {
                                                                                                                            const ne = {
                                                                                                                              instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U + "/volume",
                                                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/volume/type",
                                                                                                                              keyword: "type",
                                                                                                                              params: { type: "integer" },
                                                                                                                              message: "must be integer"
                                                                                                                            };
                                                                                                                            t === null ? t = [ne] : t.push(ne), e++;
                                                                                                                          }
                                                                                                                          H = se === e;
                                                                                                                        } else H = !0;
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              } else {
                                                                                                                const ie = {
                                                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U,
                                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/type",
                                                                                                                  keyword: "type",
                                                                                                                  params: {
                                                                                                                    type: "object"
                                                                                                                  },
                                                                                                                  message: "must be object"
                                                                                                                };
                                                                                                                t === null ? t = [ie] : t.push(ie), e++;
                                                                                                              }
                                                                                                              var k;
                                                                                                              (k = te === e) && oe ? (oe = !1, pe = [pe, 2]) : k && (oe = !0, pe = 2);
                                                                                                            }
                                                                                                            if (oe) e = ke, t !== null && (ke ? t.length = ke : t = null);
                                                                                                            else {
                                                                                                              const te = {
                                                                                                                instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B + "/parameters/" + U,
                                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf",
                                                                                                                keyword: "oneOf",
                                                                                                                params: {
                                                                                                                  passingSchemas: pe
                                                                                                                },
                                                                                                                message: "must match exactly one schema in oneOf"
                                                                                                              };
                                                                                                              t === null ? t = [te] : t.push(te), e++;
                                                                                                            }
                                                                                                            if (Ee !== e) break;
                                                                                                          }
                                                                                                        }
                                                                                                        G = ue === e;
                                                                                                      } else G = !0;
                                                                                                    }
                                                                                                  } else {
                                                                                                    const ee = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list/" + B,
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "object" },
                                                                                                      message: "must be object"
                                                                                                    };
                                                                                                    t === null ? t = [ee] : t.push(ee), e++;
                                                                                                  }
                                                                                                  if (_ !== e) break;
                                                                                                }
                                                                                              } else {
                                                                                                const v = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/list",
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "array" },
                                                                                                  message: "must be array"
                                                                                                };
                                                                                                t === null ? t = [v] : t.push(v), e++;
                                                                                              }
                                                                                              var q = f === e;
                                                                                            } else q = !0;
                                                                                            if (q) {
                                                                                              if (i.repeat !== void 0) {
                                                                                                const r = e;
                                                                                                if (typeof i.repeat != "boolean") {
                                                                                                  const f = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/repeat",
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/repeat/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "boolean" },
                                                                                                    message: "must be boolean"
                                                                                                  };
                                                                                                  t === null ? t = [f] : t.push(f), e++;
                                                                                                }
                                                                                                q = r === e;
                                                                                              } else q = !0;
                                                                                              if (q) {
                                                                                                if (i.skippable !== void 0) {
                                                                                                  const r = e;
                                                                                                  if (typeof i.skippable != "boolean") {
                                                                                                    const f = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/skippable",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/skippable/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "boolean" },
                                                                                                      message: "must be boolean"
                                                                                                    };
                                                                                                    t === null ? t = [f] : t.push(f), e++;
                                                                                                  }
                                                                                                  q = r === e;
                                                                                                } else q = !0;
                                                                                                if (q) if (i.wait !== void 0) {
                                                                                                  const r = e;
                                                                                                  if (typeof i.wait != "boolean") {
                                                                                                    const f = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute/wait",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/wait/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "boolean" },
                                                                                                      message: "must be boolean"
                                                                                                    };
                                                                                                    t === null ? t = [f] : t.push(f), e++;
                                                                                                  }
                                                                                                  q = r === e;
                                                                                                } else q = !0;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      } else {
                                                                                        const b = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + u + "/moveRoute",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/type",
                                                                                          keyword: "type",
                                                                                          params: {
                                                                                            type: "object"
                                                                                          },
                                                                                          message: "must be object"
                                                                                        };
                                                                                        t === null ? t = [b] : t.push(b), e++;
                                                                                      }
                                                                                      c = A === e;
                                                                                    } else c = !0;
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
                                                        } else {
                                                          const z = {
                                                            instancePath: s + "/events/" + o + "/pages/" + u,
                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/type",
                                                            keyword: "type",
                                                            params: { type: "object" },
                                                            message: "must be object"
                                                          };
                                                          t === null ? t = [z] : t.push(z), e++;
                                                        }
                                                        if (Ne !== e) break;
                                                      }
                                                    } else {
                                                      const K = {
                                                        instancePath: s + "/events/" + o + "/pages",
                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/type",
                                                        keyword: "type",
                                                        params: { type: "array" },
                                                        message: "must be array"
                                                      };
                                                      t === null ? t = [K] : t.push(K), e++;
                                                    }
                                                    g = J === e;
                                                  } else g = !0;
                                                  if (g) {
                                                    if (n.x !== void 0) {
                                                      let M = n.x;
                                                      const J = e;
                                                      if (typeof M != "number" || M % 1 || isNaN(M) || !isFinite(M)) {
                                                        const K = {
                                                          instancePath: s + "/events/" + o + "/x",
                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/x/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        };
                                                        t === null ? t = [K] : t.push(K), e++;
                                                      }
                                                      g = J === e;
                                                    } else g = !0;
                                                    if (g) if (n.y !== void 0) {
                                                      let M = n.y;
                                                      const J = e;
                                                      if (typeof M != "number" || M % 1 || isNaN(M) || !isFinite(M)) {
                                                        const K = {
                                                          instancePath: s + "/events/" + o + "/y",
                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/y/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        };
                                                        t === null ? t = [K] : t.push(K), e++;
                                                      }
                                                      g = J === e;
                                                    } else g = !0;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          const D = { instancePath: s + "/events/" + o, schemaPath: "#/$defs/MapEvents/items/oneOf/1/type", keyword: "type", params: {
                                            type: "object"
                                          }, message: "must be object" };
                                          t === null ? t = [D] : t.push(D), e++;
                                        }
                                        var ye;
                                        if ((ye = le === e) && me ? (me = !1, T = [T, 1]) : ye && (me = !0, T = 1), !me) {
                                          const D = {
                                            instancePath: s + "/events/" + o,
                                            schemaPath: "#/$defs/MapEvents/items/oneOf",
                                            keyword: "oneOf",
                                            params: { passingSchemas: T },
                                            message: "must match exactly one schema in oneOf"
                                          };
                                          return t === null ? t = [D] : t.push(D), e++, d.errors = t, !1;
                                        }
                                        if (e = re, t !== null && (re ? t.length = re : t = null), W !== e) break;
                                      }
                                    }
                                  }
                                  p = S === e;
                                } else p = !0;
                                if (p) {
                                  if (y.width !== void 0) {
                                    let a = y.width;
                                    const S = e;
                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{
                                      instancePath: s + "/width",
                                      schemaPath: "#/properties/width/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    if (e === S && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return d.errors = [{
                                      instancePath: s + "/width",
                                      schemaPath: "#/properties/width/minimum",
                                      keyword: "minimum",
                                      params: { comparison: ">=", limit: 0 },
                                      message: "must be >= 0"
                                    }], !1;
                                    p = S === e;
                                  } else p = !0;
                                  if (p) {
                                    if (y.height !== void 0) {
                                      let a = y.height;
                                      const S = e;
                                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{
                                        instancePath: s + "/height",
                                        schemaPath: "#/properties/height/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      if (e === S && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) return d.errors = [{
                                        instancePath: s + "/height",
                                        schemaPath: "#/properties/height/minimum",
                                        keyword: "minimum",
                                        params: { comparison: ">=", limit: 0 },
                                        message: "must be >= 0"
                                      }], !1;
                                      p = S === e;
                                    } else p = !0;
                                    if (p) {
                                      if (y.note !== void 0) {
                                        const a = e;
                                        if (typeof y.note != "string") return d.errors = [{
                                          instancePath: s + "/note",
                                          schemaPath: "#/properties/note/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string"
                                        }], !1;
                                        p = a === e;
                                      } else p = !0;
                                      if (p) {
                                        if (y.parallaxLoopX !== void 0) {
                                          const a = e;
                                          if (typeof y.parallaxLoopX != "boolean") return d.errors = [{ instancePath: s + "/parallaxLoopX", schemaPath: "#/properties/parallaxLoopX/type", keyword: "type", params: {
                                            type: "boolean"
                                          }, message: "must be boolean" }], !1;
                                          p = a === e;
                                        } else p = !0;
                                        if (p) {
                                          if (y.parallaxLoopY !== void 0) {
                                            const a = e;
                                            if (typeof y.parallaxLoopY != "boolean") return d.errors = [{
                                              instancePath: s + "/parallaxLoopY",
                                              schemaPath: "#/properties/parallaxLoopY/type",
                                              keyword: "type",
                                              params: { type: "boolean" },
                                              message: "must be boolean"
                                            }], !1;
                                            p = a === e;
                                          } else p = !0;
                                          if (p) {
                                            if (y.parallaxName !== void 0) {
                                              const a = e;
                                              if (typeof y.parallaxName != "string") return d.errors = [{
                                                instancePath: s + "/parallaxName",
                                                schemaPath: "#/properties/parallaxName/type",
                                                keyword: "type",
                                                params: { type: "string" },
                                                message: "must be string"
                                              }], !1;
                                              p = a === e;
                                            } else p = !0;
                                            if (p) {
                                              if (y.parallaxShow !== void 0) {
                                                const a = e;
                                                if (typeof y.parallaxShow != "boolean") return d.errors = [{
                                                  instancePath: s + "/parallaxShow",
                                                  schemaPath: "#/properties/parallaxShow/type",
                                                  keyword: "type",
                                                  params: { type: "boolean" },
                                                  message: "must be boolean"
                                                }], !1;
                                                p = a === e;
                                              } else p = !0;
                                              if (p) {
                                                if (y.parallaxSx !== void 0) {
                                                  let a = y.parallaxSx;
                                                  const S = e;
                                                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{
                                                    instancePath: s + "/parallaxSx",
                                                    schemaPath: "#/properties/parallaxSx/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  p = S === e;
                                                } else p = !0;
                                                if (p) {
                                                  if (y.parallaxSy !== void 0) {
                                                    let a = y.parallaxSy;
                                                    const S = e;
                                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{
                                                      instancePath: s + "/parallaxSy",
                                                      schemaPath: "#/properties/parallaxSy/type",
                                                      keyword: "type",
                                                      params: { type: "integer" },
                                                      message: "must be integer"
                                                    }], !1;
                                                    p = S === e;
                                                  } else p = !0;
                                                  if (p) {
                                                    if (y.tilesetId !== void 0) {
                                                      let a = y.tilesetId;
                                                      const S = e;
                                                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{ instancePath: s + "/tilesetId", schemaPath: "#/properties/tilesetId/type", keyword: "type", params: {
                                                        type: "integer"
                                                      }, message: "must be integer" }], !1;
                                                      p = S === e;
                                                    } else p = !0;
                                                    if (p) {
                                                      if (y.encounterStep !== void 0) {
                                                        let a = y.encounterStep;
                                                        const S = e;
                                                        if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{ instancePath: s + "/encounterStep", schemaPath: "#/properties/encounterStep/type", keyword: "type", params: {
                                                          type: "integer"
                                                        }, message: "must be integer" }], !1;
                                                        p = S === e;
                                                      } else p = !0;
                                                      if (p) {
                                                        if (y.scrollType !== void 0) {
                                                          let a = y.scrollType;
                                                          const S = e;
                                                          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return d.errors = [{
                                                            instancePath: s + "/scrollType",
                                                            schemaPath: "#/properties/scrollType/type",
                                                            keyword: "type",
                                                            params: { type: "integer" },
                                                            message: "must be integer"
                                                          }], !1;
                                                          p = S === e;
                                                        } else p = !0;
                                                        if (p) if (y.specifyBattleback !== void 0) {
                                                          const a = e;
                                                          if (typeof y.specifyBattleback != "boolean") return d.errors = [{
                                                            instancePath: s + "/specifyBattleback",
                                                            schemaPath: "#/properties/specifyBattleback/type",
                                                            keyword: "type",
                                                            params: { type: "boolean" },
                                                            message: "must be boolean"
                                                          }], !1;
                                                          p = a === e;
                                                        } else p = !0;
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
        }
      }
    }
    return d.errors = t, e === 0;
  }
  return be.exports;
})()), He = (h) => $e(h), Xe = (h) => je(h, $e);
var Ae, Pe = { exports: {} };
const Re = ce((function() {
  if (Ae) return Pe.exports;
  function h(l, { instancePath: m = "", parentData: d, parentDataProperty: y, rootData: s = l } = {}) {
    if (!l || typeof l != "object" || Array.isArray(l)) return h.errors = [{
      instancePath: m,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let $;
      if (l.trigger === void 0 && ($ = "trigger") || l.id === void 0 && ($ = "id") || l.name === void 0 && ($ = "name") || l.list === void 0 && ($ = "list") || l.switchId === void 0 && ($ = "switchId")) return h.errors = [{
        instancePath: m,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: $ },
        message: "must have required property '" + $ + "'"
      }], !1;
      if (l.trigger !== void 0) {
        let t = l.trigger;
        const e = 0;
        if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return h.errors = [{ instancePath: m + "/trigger", schemaPath: "#/properties/trigger/type", keyword: "type", params: {
          type: "integer"
        }, message: "must be integer" }], !1;
        if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return h.errors = [{
          instancePath: m + "/trigger",
          schemaPath: "#/properties/trigger/minimum",
          keyword: "minimum",
          params: { comparison: ">=", limit: 0 },
          message: "must be >= 0"
        }], !1;
        var j = e === 0;
      } else j = !0;
      if (j) {
        if (l.id !== void 0) {
          let t = l.id;
          const e = 0;
          if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return h.errors = [{
            instancePath: m + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return h.errors = [{
            instancePath: m + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], !1;
          j = e === 0;
        } else j = !0;
        if (j) {
          if (l.name !== void 0) {
            if (typeof l.name != "string") return h.errors = [{
              instancePath: m + "/name",
              schemaPath: "#/properties/name/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], !1;
            j = !0;
          } else j = !0;
          if (j) {
            if (l.list !== void 0) {
              let t = l.list;
              const e = 0;
              if (!Array.isArray(t)) return h.errors = [{
                instancePath: m + "/list",
                schemaPath: "#/properties/list/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], !1;
              {
                const p = t.length;
                for (let P = 0; P < p; P++) {
                  let x = t[P];
                  const F = 0;
                  if (!x || typeof x != "object" || Array.isArray(x)) return h.errors = [{
                    instancePath: m + "/list/" + P,
                    schemaPath: "#/properties/list/items/type",
                    keyword: "type",
                    params: { type: "object" },
                    message: "must be object"
                  }], !1;
                  {
                    let g;
                    if (x.code === void 0 && (g = "code") || x.indent === void 0 && (g = "indent") || x.parameters === void 0 && (g = "parameters")) return h.errors = [{
                      instancePath: m + "/list/" + P,
                      schemaPath: "#/properties/list/items/required",
                      keyword: "required",
                      params: { missingProperty: g },
                      message: "must have required property '" + g + "'"
                    }], !1;
                    if (x.code !== void 0) {
                      let c = x.code;
                      const N = 0;
                      if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return h.errors = [{
                        instancePath: m + "/list/" + P + "/code",
                        schemaPath: "#/properties/list/items/properties/code/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      var I = N === 0;
                    } else I = !0;
                    if (I) {
                      if (x.indent !== void 0) {
                        let c = x.indent;
                        const N = 0;
                        if (typeof c != "number" || c % 1 || isNaN(c) || !isFinite(c)) return h.errors = [{
                          instancePath: m + "/list/" + P + "/indent",
                          schemaPath: "#/properties/list/items/properties/indent/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        I = N === 0;
                      } else I = !0;
                      if (I) if (x.parameters !== void 0) {
                        if (!Array.isArray(x.parameters)) return h.errors = [{
                          instancePath: m + "/list/" + P + "/parameters",
                          schemaPath: "#/properties/list/items/properties/parameters/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], !1;
                        I = !0;
                      } else I = !0;
                    }
                  }
                  if (F !== 0) break;
                }
              }
              j = e === 0;
            } else j = !0;
            if (j) if (l.switchId !== void 0) {
              let t = l.switchId;
              const e = 0;
              if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return h.errors = [{
                instancePath: m + "/switchId",
                schemaPath: "#/properties/switchId/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], !1;
              if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return h.errors = [{ instancePath: m + "/switchId", schemaPath: "#/properties/switchId/minimum", keyword: "minimum", params: {
                comparison: ">=",
                limit: 0
              }, message: "must be >= 0" }], !1;
              j = e === 0;
            } else j = !0;
          }
        }
      }
    }
    return h.errors = null, !0;
  }
  return Ae = 1, Pe.exports = h, Pe.exports.default = h, Pe.exports;
})()), Ye = (h) => Re(h);
var Ie, we = {
  exports: {}
};
const Te = ce((function() {
  if (Ie) return we.exports;
  function h(l, { instancePath: m = "", parentData: d, parentDataProperty: y, rootData: s = l } = {}) {
    if (!l || typeof l != "object" || Array.isArray(l)) return h.errors = [{ instancePath: m, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let p;
      if (l.id === void 0 && (p = "id") || l.name === void 0 && (p = "name") || l.members === void 0 && (p = "members") || l.pages === void 0 && (p = "pages")) return h.errors = [{
        instancePath: m,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: p },
        message: "must have required property '" + p + "'"
      }], !1;
      if (l.id !== void 0) {
        let P = l.id;
        const x = 0;
        if (typeof P != "number" || P % 1 || isNaN(P) || !isFinite(P)) return h.errors = [{
          instancePath: m + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (typeof P == "number" && isFinite(P) && (P < 0 || isNaN(P))) return h.errors = [{
          instancePath: m + "/id",
          schemaPath: "#/properties/id/minimum",
          keyword: "minimum",
          params: { comparison: ">=", limit: 0 },
          message: "must be >= 0"
        }], !1;
        var j = x === 0;
      } else j = !0;
      if (j) {
        if (l.name !== void 0) {
          if (typeof l.name != "string") return h.errors = [{
            instancePath: m + "/name",
            schemaPath: "#/properties/name/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], !1;
          j = !0;
        } else j = !0;
        if (j) {
          if (l.members !== void 0) {
            let P = l.members;
            const x = 0;
            if (!Array.isArray(P)) return h.errors = [{
              instancePath: m + "/members",
              schemaPath: "#/properties/members/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array"
            }], !1;
            {
              const F = P.length;
              for (let g = 0; g < F; g++) {
                let c = P[g];
                const N = 0;
                if (!c || typeof c != "object" || Array.isArray(c)) return h.errors = [{
                  instancePath: m + "/members/" + g,
                  schemaPath: "#/properties/members/items/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object"
                }], !1;
                {
                  let V;
                  if (c.enemyId === void 0 && (V = "enemyId") || c.x === void 0 && (V = "x") || c.y === void 0 && (V = "y") || c.hidden === void 0 && (V = "hidden")) return h.errors = [{
                    instancePath: m + "/members/" + g,
                    schemaPath: "#/properties/members/items/required",
                    keyword: "required",
                    params: { missingProperty: V },
                    message: "must have required property '" + V + "'"
                  }], !1;
                  if (c.enemyId !== void 0) {
                    let w = c.enemyId;
                    const G = 0;
                    if (typeof w != "number" || w % 1 || isNaN(w) || !isFinite(w)) return h.errors = [{
                      instancePath: m + "/members/" + g + "/enemyId",
                      schemaPath: "#/properties/members/items/properties/enemyId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    if (typeof w == "number" && isFinite(w) && (w < 0 || isNaN(w))) return h.errors = [{
                      instancePath: m + "/members/" + g + "/enemyId",
                      schemaPath: "#/properties/members/items/properties/enemyId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], !1;
                    var I = G === 0;
                  } else I = !0;
                  if (I) {
                    if (c.x !== void 0) {
                      let w = c.x;
                      const G = 0;
                      if (typeof w != "number" || w % 1 || isNaN(w) || !isFinite(w)) return h.errors = [{
                        instancePath: m + "/members/" + g + "/x",
                        schemaPath: "#/properties/members/items/properties/x/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      I = G === 0;
                    } else I = !0;
                    if (I) {
                      if (c.y !== void 0) {
                        let w = c.y;
                        const G = 0;
                        if (typeof w != "number" || w % 1 || isNaN(w) || !isFinite(w)) return h.errors = [{
                          instancePath: m + "/members/" + g + "/y",
                          schemaPath: "#/properties/members/items/properties/y/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        I = G === 0;
                      } else I = !0;
                      if (I) if (c.hidden !== void 0) {
                        if (typeof c.hidden != "boolean") return h.errors = [{
                          instancePath: m + "/members/" + g + "/hidden",
                          schemaPath: "#/properties/members/items/properties/hidden/type",
                          keyword: "type",
                          params: { type: "boolean" },
                          message: "must be boolean"
                        }], !1;
                        I = !0;
                      } else I = !0;
                    }
                  }
                }
                if (N !== 0) break;
              }
            }
            j = x === 0;
          } else j = !0;
          if (j) if (l.pages !== void 0) {
            let P = l.pages;
            const x = 0;
            if (!Array.isArray(P)) return h.errors = [{
              instancePath: m + "/pages",
              schemaPath: "#/properties/pages/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array"
            }], !1;
            {
              const F = P.length;
              for (let g = 0; g < F; g++) {
                let c = P[g];
                const N = 0;
                if (!c || typeof c != "object" || Array.isArray(c)) return h.errors = [{
                  instancePath: m + "/pages/" + g,
                  schemaPath: "#/properties/pages/items/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object"
                }], !1;
                {
                  let V;
                  if (c.conditions === void 0 && (V = "conditions") || c.list === void 0 && (V = "list") || c.span === void 0 && (V = "span")) return h.errors = [{
                    instancePath: m + "/pages/" + g,
                    schemaPath: "#/properties/pages/items/required",
                    keyword: "required",
                    params: { missingProperty: V },
                    message: "must have required property '" + V + "'"
                  }], !1;
                  if (c.conditions !== void 0) {
                    let w = c.conditions;
                    const G = 0;
                    if (!w || typeof w != "object" || Array.isArray(w)) return h.errors = [{
                      instancePath: m + "/pages/" + g + "/conditions",
                      schemaPath: "#/properties/pages/items/properties/conditions/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object"
                    }], !1;
                    {
                      let H;
                      if (w.actorHp === void 0 && (H = "actorHp") || w.actorId === void 0 && (H = "actorId") || w.enemyValid === void 0 && (H = "enemyValid") || w.switchValid === void 0 && (H = "switchValid")) return h.errors = [{
                        instancePath: m + "/pages/" + g + "/conditions",
                        schemaPath: "#/properties/pages/items/properties/conditions/required",
                        keyword: "required",
                        params: { missingProperty: H },
                        message: "must have required property '" + H + "'"
                      }], !1;
                      if (w.actorHp !== void 0) {
                        let k = w.actorHp;
                        const q = 0;
                        if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) return h.errors = [{
                          instancePath: m + "/pages/" + g + "/conditions/actorHp",
                          schemaPath: "#/properties/pages/items/properties/conditions/properties/actorHp/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        if (typeof k == "number" && isFinite(k) && (k < 0 || isNaN(k))) return h.errors = [{
                          instancePath: m + "/pages/" + g + "/conditions/actorHp",
                          schemaPath: "#/properties/pages/items/properties/conditions/properties/actorHp/minimum",
                          keyword: "minimum",
                          params: { comparison: ">=", limit: 0 },
                          message: "must be >= 0"
                        }], !1;
                        var $ = q === 0;
                      } else $ = !0;
                      if ($) {
                        if (w.actorId !== void 0) {
                          let k = w.actorId;
                          const q = 0;
                          if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) return h.errors = [{
                            instancePath: m + "/pages/" + g + "/conditions/actorId",
                            schemaPath: "#/properties/pages/items/properties/conditions/properties/actorId/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (typeof k == "number" && isFinite(k) && (k < 0 || isNaN(k))) return h.errors = [{
                            instancePath: m + "/pages/" + g + "/conditions/actorId",
                            schemaPath: "#/properties/pages/items/properties/conditions/properties/actorId/minimum",
                            keyword: "minimum",
                            params: { comparison: ">=", limit: 0 },
                            message: "must be >= 0"
                          }], !1;
                          $ = q === 0;
                        } else $ = !0;
                        if ($) {
                          if (w.enemyValid !== void 0) {
                            let k = w.enemyValid;
                            const q = 0;
                            if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) return h.errors = [{
                              instancePath: m + "/pages/" + g + "/conditions/enemyValid",
                              schemaPath: "#/properties/pages/items/properties/conditions/properties/enemyValid/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            if (typeof k == "number" && isFinite(k) && (k < 0 || isNaN(k))) return h.errors = [{
                              instancePath: m + "/pages/" + g + "/conditions/enemyValid",
                              schemaPath: "#/properties/pages/items/properties/conditions/properties/enemyValid/minimum",
                              keyword: "minimum",
                              params: { comparison: ">=", limit: 0 },
                              message: "must be >= 0"
                            }], !1;
                            $ = q === 0;
                          } else $ = !0;
                          if ($) if (w.switchValid !== void 0) {
                            let k = w.switchValid;
                            const q = 0;
                            if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) return h.errors = [{
                              instancePath: m + "/pages/" + g + "/conditions/switchValid",
                              schemaPath: "#/properties/pages/items/properties/conditions/properties/switchValid/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            if (typeof k == "number" && isFinite(k) && (k < 0 || isNaN(k))) return h.errors = [{
                              instancePath: m + "/pages/" + g + "/conditions/switchValid",
                              schemaPath: "#/properties/pages/items/properties/conditions/properties/switchValid/minimum",
                              keyword: "minimum",
                              params: { comparison: ">=", limit: 0 },
                              message: "must be >= 0"
                            }], !1;
                            $ = q === 0;
                          } else $ = !0;
                        }
                      }
                    }
                    var t = G === 0;
                  } else t = !0;
                  if (t) {
                    if (c.list !== void 0) {
                      let w = c.list;
                      const G = 0;
                      if (!Array.isArray(w)) return h.errors = [{
                        instancePath: m + "/pages/" + g + "/list",
                        schemaPath: "#/properties/pages/items/properties/list/type",
                        keyword: "type",
                        params: { type: "array" },
                        message: "must be array"
                      }], !1;
                      {
                        const H = w.length;
                        for (let k = 0; k < H; k++) {
                          let q = w[k];
                          const ye = 0;
                          if (!q || typeof q != "object" || Array.isArray(q)) return h.errors = [{
                            instancePath: m + "/pages/" + g + "/list/" + k,
                            schemaPath: "#/properties/pages/items/properties/list/items/type",
                            keyword: "type",
                            params: { type: "object" },
                            message: "must be object"
                          }], !1;
                          {
                            let E;
                            if (q.code === void 0 && (E = "code") || q.indent === void 0 && (E = "indent") || q.parameters === void 0 && (E = "parameters")) return h.errors = [{
                              instancePath: m + "/pages/" + g + "/list/" + k,
                              schemaPath: "#/properties/pages/items/properties/list/items/required",
                              keyword: "required",
                              params: { missingProperty: E },
                              message: "must have required property '" + E + "'"
                            }], !1;
                            if (q.code !== void 0) {
                              let Z = q.code;
                              const a = 0;
                              if (typeof Z != "number" || Z % 1 || isNaN(Z) || !isFinite(Z)) return h.errors = [{
                                instancePath: m + "/pages/" + g + "/list/" + k + "/code",
                                schemaPath: "#/properties/pages/items/properties/list/items/properties/code/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              var e = a === 0;
                            } else e = !0;
                            if (e) {
                              if (q.indent !== void 0) {
                                let Z = q.indent;
                                const a = 0;
                                if (typeof Z != "number" || Z % 1 || isNaN(Z) || !isFinite(Z)) return h.errors = [{
                                  instancePath: m + "/pages/" + g + "/list/" + k + "/indent",
                                  schemaPath: "#/properties/pages/items/properties/list/items/properties/indent/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                e = a === 0;
                              } else e = !0;
                              if (e) if (q.parameters !== void 0) {
                                if (!Array.isArray(q.parameters)) return h.errors = [{
                                  instancePath: m + "/pages/" + g + "/list/" + k + "/parameters",
                                  schemaPath: "#/properties/pages/items/properties/list/items/properties/parameters/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], !1;
                                e = !0;
                              } else e = !0;
                            }
                          }
                          if (ye !== 0) break;
                        }
                      }
                      t = G === 0;
                    } else t = !0;
                    if (t) if (c.span !== void 0) {
                      let w = c.span;
                      const G = 0;
                      if (typeof w != "number" || w % 1 || isNaN(w) || !isFinite(w)) return h.errors = [{
                        instancePath: m + "/pages/" + g + "/span",
                        schemaPath: "#/properties/pages/items/properties/span/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      if (typeof w == "number" && isFinite(w) && (w < 0 || isNaN(w))) return h.errors = [{
                        instancePath: m + "/pages/" + g + "/span",
                        schemaPath: "#/properties/pages/items/properties/span/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], !1;
                      t = G === 0;
                    } else t = !0;
                  }
                }
                if (N !== 0) break;
              }
            }
            j = x === 0;
          } else j = !0;
        }
      }
    }
    return h.errors = null, !0;
  }
  return Ie = 1, we.exports = h, we.exports.default = h, we.exports;
})()), We = (h) => Te(h);
export {
  Be as isActorTextCommand,
  Ce as isAudioCommand,
  Ye as isDataCommonEvent,
  He as isDataMap,
  We as isDataTroop,
  Xe as validateMapWithErrors
};
