import { g as be } from "../../shared/_commonjsHelpers.es.js";
var ke, he = { exports: {} };
const Ee = be(function() {
  if (ke) return he.exports;
  ke = 1, he.exports = f, he.exports.default = f;
  const J = { properties: {
    code: { enum: [320, 324, 325] }
  } };
  function f(g, { instancePath: m = "", parentData: l, parentDataProperty: s, rootData: Pe = g } = {}) {
    if (!g || typeof g != "object" || Array.isArray(g)) return f.errors = [{
      instancePath: m,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let t;
      if (g.code === void 0 && (t = "code") || g.parameters === void 0 && (t = "parameters") || g.indent === void 0 && (t = "indent")) return f.errors = [{
        instancePath: m,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t },
        message: "must have required property '" + t + "'"
      }], !1;
      for (const e in g) if (e !== "code" && e !== "indent" && e !== "parameters") return f.errors = [{
        instancePath: m,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (g.code !== void 0) {
        let e = g.code;
        const p = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return f.errors = [{
          instancePath: m + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 320 && e !== 324 && e !== 325) return f.errors = [{
          instancePath: m + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: J.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var L = p === 0;
      } else L = !0;
      if (L) {
        if (g.indent !== void 0) {
          let e = g.indent;
          const p = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return f.errors = [{ instancePath: m + "/indent", schemaPath: "#/properties/indent/type", keyword: "type", params: {
            type: "integer"
          }, message: "must be integer" }], !1;
          L = p === 0;
        } else L = !0;
        if (L) if (g.parameters !== void 0) {
          let e = g.parameters;
          const p = 0;
          if (!Array.isArray(e)) return f.errors = [{
            instancePath: m + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 2) return f.errors = [{
            instancePath: m + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 2 },
            message: "must NOT have more than 2 items"
          }], !1;
          if (e.length < 2) return f.errors = [{
            instancePath: m + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 2 },
            message: "must NOT have fewer than 2 items"
          }], !1;
          {
            const w = e.length;
            if (w > 0) {
              let V = e[0];
              const b = 0;
              if (typeof V != "number" || !isFinite(V)) return f.errors = [{
                instancePath: m + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number"
              }], !1;
              var B = b === 0;
            }
            if (B && w > 1) {
              if (typeof e[1] != "string") return f.errors = [{
                instancePath: m + "/parameters/1",
                schemaPath: "#/properties/parameters/items/1/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], !1;
              B = !0;
            }
          }
          L = p === 0;
        } else L = !0;
      }
    }
    return f.errors = null, !0;
  }
  return he.exports;
}()), Ve = (J) => Ee(J);
var Ne, fe = { exports: {} };
const Me = be(function() {
  if (Ne) return fe.exports;
  Ne = 1, fe.exports = f, fe.exports.default = f;
  const J = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function f(g, { instancePath: m = "", parentData: l, parentDataProperty: s, rootData: Pe = g } = {}) {
    if (!g || typeof g != "object" || Array.isArray(g)) return f.errors = [{
      instancePath: m,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], !1;
    {
      let t;
      if (g.code === void 0 && (t = "code") || g.parameters === void 0 && (t = "parameters") || g.indent === void 0 && (t = "indent")) return f.errors = [{
        instancePath: m,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t },
        message: "must have required property '" + t + "'"
      }], !1;
      for (const e in g) if (e !== "code" && e !== "indent" && e !== "parameters") return f.errors = [{
        instancePath: m,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e },
        message: "must NOT have additional properties"
      }], !1;
      if (g.code !== void 0) {
        let e = g.code;
        const p = 0;
        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return f.errors = [{
          instancePath: m + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], !1;
        if (e !== 132 && e !== 133 && e !== 139 && e !== 241 && e !== 245 && e !== 249 && e !== 250) return f.errors = [{
          instancePath: m + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: J.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], !1;
        var L = p === 0;
      } else L = !0;
      if (L) {
        if (g.indent !== void 0) {
          let e = g.indent;
          const p = 0;
          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return f.errors = [{
            instancePath: m + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], !1;
          L = p === 0;
        } else L = !0;
        if (L) if (g.parameters !== void 0) {
          let e = g.parameters;
          const p = 0;
          if (!Array.isArray(e)) return f.errors = [{
            instancePath: m + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], !1;
          if (e.length > 1) return f.errors = [{
            instancePath: m + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], !1;
          if (e.length < 1) return f.errors = [{
            instancePath: m + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], !1;
          if (e.length > 0) {
            let w = e[0];
            if (!w || typeof w != "object" || Array.isArray(w)) return f.errors = [{
              instancePath: m + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], !1;
            {
              let V;
              if (w.name === void 0 && (V = "name") || w.volume === void 0 && (V = "volume") || w.pitch === void 0 && (V = "pitch") || w.pan === void 0 && (V = "pan")) return f.errors = [{
                instancePath: m + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: V },
                message: "must have required property '" + V + "'"
              }], !1;
              for (const b in w) if (b !== "name" && b !== "volume" && b !== "pitch" && b !== "pan") return f.errors = [{
                instancePath: m + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: b },
                message: "must NOT have additional properties"
              }], !1;
              if (w.name !== void 0) {
                if (typeof w.name != "string") return f.errors = [{
                  instancePath: m + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], !1;
                var B = !0;
              } else B = !0;
              if (B) {
                if (w.volume !== void 0) {
                  let b = w.volume;
                  const M = 0;
                  if (typeof b != "number" || b % 1 || isNaN(b) || !isFinite(b)) return f.errors = [{
                    instancePath: m + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  B = M === 0;
                } else B = !0;
                if (B) {
                  if (w.pitch !== void 0) {
                    let b = w.pitch;
                    const M = 0;
                    if (typeof b != "number" || b % 1 || isNaN(b) || !isFinite(b)) return f.errors = [{
                      instancePath: m + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    B = M === 0;
                  } else B = !0;
                  if (B) if (w.pan !== void 0) {
                    let b = w.pan;
                    const M = 0;
                    if (typeof b != "number" || b % 1 || isNaN(b) || !isFinite(b)) return f.errors = [{
                      instancePath: m + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    B = M === 0;
                  } else B = !0;
                }
              }
            }
          }
          L = p === 0;
        } else L = !0;
      }
    }
    return f.errors = null, !0;
  }
  return fe.exports;
}()), Se = (J) => Me(J);
var Oe, ue = {
  exports: {}
};
const Ae = be(function() {
  if (Oe) return ue.exports;
  Oe = 1, ue.exports = m, ue.exports.default = m;
  const J = { properties: {
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
    height: { minimum: 0, type: "integer" },
    note: { type: "string" },
    parallaxLoopX: { type: "boolean" },
    parallaxLoopY: { type: "boolean" },
    parallaxName: { type: "string" },
    parallaxShow: { type: "boolean" },
    parallaxSx: { type: "integer" },
    parallaxSy: { type: "integer" },
    tilesetId: { type: "integer" },
    width: { minimum: 0, type: "integer" },
    x: { minimum: 0, type: "integer" },
    y: { minimum: 0, type: "integer" },
    encounterStep: { type: "integer" },
    scrollType: { type: "integer" },
    specifyBattleback: { type: "boolean" }
  } }, f = { items: { oneOf: [{ type: "null" }, { required: ["id", "name", "x", "y", "pages", "note"], type: "object", properties: { id: {
    type: "integer"
  }, name: { type: "string" }, note: { type: "string" }, pages: { type: "array", items: {
    additionalProperties: !1,
    required: ["conditions", "image", "list", "moveRoute", "directionFix", "priorityType", "moveFrequency"],
    type: "object",
    properties: {
      stepAnime: { type: "boolean" },
      walkAnime: { type: "boolean" },
      through: { type: "boolean" },
      priorityType: { type: "integer" },
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
        properties: { list: { items: { additionalProperties: !1, properties: { code: { type: "integer" }, parameters: { items: { oneOf: [{ type: "string" }, { type: "number" }, {
          additionalProperties: !1,
          properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } },
          required: ["name", "pan", "pitch", "volume"],
          type: "object"
        }] }, type: "array" } }, required: ["code", "parameters"], type: "object" }, type: "array" }, repeat: { type: "boolean" }, skippable: { type: "boolean" }, wait: { type: "boolean" } },
        required: ["wait", "repeat", "skippable", "list"],
        type: "object"
      }
    }
  } }, x: { type: "integer" }, y: { type: "integer" } } }] } }, g = Object.prototype.hasOwnProperty;
  function m(l, { instancePath: s = "", parentData: Pe, parentDataProperty: L, rootData: B = l } = {}) {
    let t = null, e = 0;
    if (e === 0) {
      if (!l || typeof l != "object" || Array.isArray(l)) return m.errors = [{
        instancePath: s,
        schemaPath: "#/type",
        keyword: "type",
        params: { type: "object" },
        message: "must be object"
      }], !1;
      {
        let $;
        if (l.battleback1Name === void 0 && ($ = "battleback1Name") || l.battleback2Name === void 0 && ($ = "battleback2Name") || l.note === void 0 && ($ = "note") || l.width === void 0 && ($ = "width") || l.height === void 0 && ($ = "height") || l.x === void 0 && ($ = "x") || l.y === void 0 && ($ = "y") || l.parallaxSy === void 0 && ($ = "parallaxSy") || l.parallaxSx === void 0 && ($ = "parallaxSx") || l.parallaxLoopY === void 0 && ($ = "parallaxLoopY") || l.parallaxLoopX === void 0 && ($ = "parallaxLoopX") || l.disableDashing === void 0 && ($ = "disableDashing") || l.parallaxName === void 0 && ($ = "parallaxName") || l.parallaxShow === void 0 && ($ = "parallaxShow") || l.displayName === void 0 && ($ = "displayName") || l.data === void 0 && ($ = "data") || l.autoplayBgm === void 0 && ($ = "autoplayBgm") || l.bgm === void 0 && ($ = "bgm") || l.autoplayBgs === void 0 && ($ = "autoplayBgs") || l.bgs === void 0 && ($ = "bgs") || l.tilesetId === void 0 && ($ = "tilesetId") || l.encounterList === void 0 && ($ = "encounterList") || l.events === void 0 && ($ = "events") || l.encounterStep === void 0 && ($ = "encounterStep") || l.scrollType === void 0 && ($ = "scrollType") || l.specifyBattleback === void 0 && ($ = "specifyBattleback")) return m.errors = [{
          instancePath: s,
          schemaPath: "#/required",
          keyword: "required",
          params: { missingProperty: $ },
          message: "must have required property '" + $ + "'"
        }], !1;
        {
          const $e = e;
          for (const i in l) if (!g.call(J.properties, i)) return m.errors = [{
            instancePath: s,
            schemaPath: "#/additionalProperties",
            keyword: "additionalProperties",
            params: { additionalProperty: i },
            message: "must NOT have additional properties"
          }], !1;
          if ($e === e) {
            if (l.autoplayBgm !== void 0) {
              const i = e;
              if (typeof l.autoplayBgm != "boolean") return m.errors = [{
                instancePath: s + "/autoplayBgm",
                schemaPath: "#/properties/autoplayBgm/type",
                keyword: "type",
                params: { type: "boolean" },
                message: "must be boolean"
              }], !1;
              var p = i === e;
            } else p = !0;
            if (p) {
              if (l.autoplayBgs !== void 0) {
                const i = e;
                if (typeof l.autoplayBgs != "boolean") return m.errors = [{
                  instancePath: s + "/autoplayBgs",
                  schemaPath: "#/properties/autoplayBgs/type",
                  keyword: "type",
                  params: { type: "boolean" },
                  message: "must be boolean"
                }], !1;
                p = i === e;
              } else p = !0;
              if (p) {
                if (l.battleback1Name !== void 0) {
                  const i = e;
                  if (typeof l.battleback1Name != "string") return m.errors = [{
                    instancePath: s + "/battleback1Name",
                    schemaPath: "#/properties/battleback1Name/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], !1;
                  p = i === e;
                } else p = !0;
                if (p) {
                  if (l.battleback2Name !== void 0) {
                    const i = e;
                    if (typeof l.battleback2Name != "string") return m.errors = [{
                      instancePath: s + "/battleback2Name",
                      schemaPath: "#/properties/battleback2Name/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], !1;
                    p = i === e;
                  } else p = !0;
                  if (p) {
                    if (l.bgm !== void 0) {
                      let i = l.bgm;
                      const v = e;
                      if (e === e) {
                        if (!i || typeof i != "object" || Array.isArray(i)) return m.errors = [{
                          instancePath: s + "/bgm",
                          schemaPath: "#/$defs/AudioFileParams/type",
                          keyword: "type",
                          params: { type: "object" },
                          message: "must be object"
                        }], !1;
                        {
                          let S;
                          if (i.name === void 0 && (S = "name") || i.pan === void 0 && (S = "pan") || i.pitch === void 0 && (S = "pitch") || i.volume === void 0 && (S = "volume")) return m.errors = [{
                            instancePath: s + "/bgm",
                            schemaPath: "#/$defs/AudioFileParams/required",
                            keyword: "required",
                            params: { missingProperty: S },
                            message: "must have required property '" + S + "'"
                          }], !1;
                          {
                            const o = e;
                            for (const n in i) if (n !== "name" && n !== "pan" && n !== "pitch" && n !== "volume") return m.errors = [{
                              instancePath: s + "/bgm",
                              schemaPath: "#/$defs/AudioFileParams/additionalProperties",
                              keyword: "additionalProperties",
                              params: { additionalProperty: n },
                              message: "must NOT have additional properties"
                            }], !1;
                            if (o === e) {
                              if (i.name !== void 0) {
                                const n = e;
                                if (typeof i.name != "string") return m.errors = [{
                                  instancePath: s + "/bgm/name",
                                  schemaPath: "#/$defs/AudioFileParams/properties/name/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string"
                                }], !1;
                                var w = n === e;
                              } else w = !0;
                              if (w) {
                                if (i.pan !== void 0) {
                                  let n = i.pan;
                                  const R = e;
                                  if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                    instancePath: s + "/bgm/pan",
                                    schemaPath: "#/$defs/AudioFileParams/properties/pan/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  w = R === e;
                                } else w = !0;
                                if (w) {
                                  if (i.pitch !== void 0) {
                                    let n = i.pitch;
                                    const R = e;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                      instancePath: s + "/bgm/pitch",
                                      schemaPath: "#/$defs/AudioFileParams/properties/pitch/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    w = R === e;
                                  } else w = !0;
                                  if (w) if (i.volume !== void 0) {
                                    let n = i.volume;
                                    const R = e;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                      instancePath: s + "/bgm/volume",
                                      schemaPath: "#/$defs/AudioFileParams/properties/volume/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    w = R === e;
                                  } else w = !0;
                                }
                              }
                            }
                          }
                        }
                      }
                      p = v === e;
                    } else p = !0;
                    if (p) {
                      if (l.bgs !== void 0) {
                        let i = l.bgs;
                        const v = e;
                        if (e === e) {
                          if (!i || typeof i != "object" || Array.isArray(i)) return m.errors = [{
                            instancePath: s + "/bgs",
                            schemaPath: "#/$defs/AudioFileParams/type",
                            keyword: "type",
                            params: { type: "object" },
                            message: "must be object"
                          }], !1;
                          {
                            let S;
                            if (i.name === void 0 && (S = "name") || i.pan === void 0 && (S = "pan") || i.pitch === void 0 && (S = "pitch") || i.volume === void 0 && (S = "volume")) return m.errors = [{
                              instancePath: s + "/bgs",
                              schemaPath: "#/$defs/AudioFileParams/required",
                              keyword: "required",
                              params: { missingProperty: S },
                              message: "must have required property '" + S + "'"
                            }], !1;
                            {
                              const o = e;
                              for (const n in i) if (n !== "name" && n !== "pan" && n !== "pitch" && n !== "volume") return m.errors = [{
                                instancePath: s + "/bgs",
                                schemaPath: "#/$defs/AudioFileParams/additionalProperties",
                                keyword: "additionalProperties",
                                params: { additionalProperty: n },
                                message: "must NOT have additional properties"
                              }], !1;
                              if (o === e) {
                                if (i.name !== void 0) {
                                  const n = e;
                                  if (typeof i.name != "string") return m.errors = [{
                                    instancePath: s + "/bgs/name",
                                    schemaPath: "#/$defs/AudioFileParams/properties/name/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], !1;
                                  var V = n === e;
                                } else V = !0;
                                if (V) {
                                  if (i.pan !== void 0) {
                                    let n = i.pan;
                                    const R = e;
                                    if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                      instancePath: s + "/bgs/pan",
                                      schemaPath: "#/$defs/AudioFileParams/properties/pan/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    V = R === e;
                                  } else V = !0;
                                  if (V) {
                                    if (i.pitch !== void 0) {
                                      let n = i.pitch;
                                      const R = e;
                                      if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                        instancePath: s + "/bgs/pitch",
                                        schemaPath: "#/$defs/AudioFileParams/properties/pitch/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      V = R === e;
                                    } else V = !0;
                                    if (V) if (i.volume !== void 0) {
                                      let n = i.volume;
                                      const R = e;
                                      if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                        instancePath: s + "/bgs/volume",
                                        schemaPath: "#/$defs/AudioFileParams/properties/volume/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      V = R === e;
                                    } else V = !0;
                                  }
                                }
                              }
                            }
                          }
                        }
                        p = v === e;
                      } else p = !0;
                      if (p) {
                        if (l.data !== void 0) {
                          let i = l.data;
                          const v = e;
                          if (e === v) {
                            if (!Array.isArray(i)) return m.errors = [{ instancePath: s + "/data", schemaPath: "#/properties/data/type", keyword: "type", params: {
                              type: "array"
                            }, message: "must be array" }], !1;
                            {
                              const S = i.length;
                              for (let o = 0; o < S; o++) {
                                let n = i[o];
                                const R = e;
                                if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return m.errors = [{
                                  instancePath: s + "/data/" + o,
                                  schemaPath: "#/properties/data/items/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (R !== e) break;
                              }
                            }
                          }
                          p = v === e;
                        } else p = !0;
                        if (p) {
                          if (l.disableDashing !== void 0) {
                            const i = e;
                            if (typeof l.disableDashing != "boolean") return m.errors = [{
                              instancePath: s + "/disableDashing",
                              schemaPath: "#/properties/disableDashing/type",
                              keyword: "type",
                              params: { type: "boolean" },
                              message: "must be boolean"
                            }], !1;
                            p = i === e;
                          } else p = !0;
                          if (p) {
                            if (l.displayName !== void 0) {
                              const i = e;
                              if (typeof l.displayName != "string") return m.errors = [{
                                instancePath: s + "/displayName",
                                schemaPath: "#/properties/displayName/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string"
                              }], !1;
                              p = i === e;
                            } else p = !0;
                            if (p) {
                              if (l.encounterList !== void 0) {
                                let i = l.encounterList;
                                const v = e;
                                if (e === e) {
                                  if (!Array.isArray(i)) return m.errors = [{
                                    instancePath: s + "/encounterList",
                                    schemaPath: "#/$defs/EncounterList/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], !1;
                                  {
                                    const S = i.length;
                                    for (let o = 0; o < S; o++) {
                                      let n = i[o];
                                      const R = e;
                                      if (e === R) {
                                        if (!n || typeof n != "object" || Array.isArray(n)) return m.errors = [{
                                          instancePath: s + "/encounterList/" + o,
                                          schemaPath: "#/$defs/EncounterList/items/type",
                                          keyword: "type",
                                          params: { type: "object" },
                                          message: "must be object"
                                        }], !1;
                                        {
                                          let Z;
                                          if (n.regionSet === void 0 && (Z = "regionSet") || n.troopId === void 0 && (Z = "troopId") || n.weight === void 0 && (Z = "weight")) return m.errors = [{
                                            instancePath: s + "/encounterList/" + o,
                                            schemaPath: "#/$defs/EncounterList/items/required",
                                            keyword: "required",
                                            params: { missingProperty: Z },
                                            message: "must have required property '" + Z + "'"
                                          }], !1;
                                          {
                                            const re = e;
                                            for (const F in n) if (F !== "regionSet" && F !== "troopId" && F !== "weight") return m.errors = [{
                                              instancePath: s + "/encounterList/" + o,
                                              schemaPath: "#/$defs/EncounterList/items/additionalProperties",
                                              keyword: "additionalProperties",
                                              params: { additionalProperty: F },
                                              message: "must NOT have additional properties"
                                            }], !1;
                                            if (re === e) {
                                              if (n.regionSet !== void 0) {
                                                let F = n.regionSet;
                                                const ee = e;
                                                if (e === ee) {
                                                  if (!Array.isArray(F)) return m.errors = [{
                                                    instancePath: s + "/encounterList/" + o + "/regionSet",
                                                    schemaPath: "#/$defs/EncounterList/items/properties/regionSet/type",
                                                    keyword: "type",
                                                    params: { type: "array" },
                                                    message: "must be array"
                                                  }], !1;
                                                  {
                                                    const le = F.length;
                                                    for (let A = 0; A < le; A++) {
                                                      let k = F[A];
                                                      const T = e;
                                                      if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) return m.errors = [{
                                                        instancePath: s + "/encounterList/" + o + "/regionSet/" + A,
                                                        schemaPath: "#/$defs/EncounterList/items/properties/regionSet/items/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      if (T !== e) break;
                                                    }
                                                  }
                                                }
                                                var b = ee === e;
                                              } else b = !0;
                                              if (b) {
                                                if (n.troopId !== void 0) {
                                                  let F = n.troopId;
                                                  const ee = e;
                                                  if (typeof F != "number" || F % 1 || isNaN(F) || !isFinite(F)) return m.errors = [{
                                                    instancePath: s + "/encounterList/" + o + "/troopId",
                                                    schemaPath: "#/$defs/EncounterList/items/properties/troopId/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  b = ee === e;
                                                } else b = !0;
                                                if (b) if (n.weight !== void 0) {
                                                  let F = n.weight;
                                                  const ee = e;
                                                  if (typeof F != "number" || F % 1 || isNaN(F) || !isFinite(F)) return m.errors = [{
                                                    instancePath: s + "/encounterList/" + o + "/weight",
                                                    schemaPath: "#/$defs/EncounterList/items/properties/weight/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  b = ee === e;
                                                } else b = !0;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (R !== e) break;
                                    }
                                  }
                                }
                                p = v === e;
                              } else p = !0;
                              if (p) {
                                if (l.events !== void 0) {
                                  let i = l.events;
                                  const v = e;
                                  if (e === e) {
                                    if (!Array.isArray(i)) return m.errors = [{
                                      instancePath: s + "/events",
                                      schemaPath: "#/$defs/MapEvents/type",
                                      keyword: "type",
                                      params: { type: "array" },
                                      message: "must be array"
                                    }], !1;
                                    {
                                      const S = i.length;
                                      for (let o = 0; o < S; o++) {
                                        let n = i[o];
                                        const R = e, Z = e;
                                        let re = !1, F = null;
                                        const ee = e;
                                        if (n !== null) {
                                          const A = {
                                            instancePath: s + "/events/" + o,
                                            schemaPath: "#/$defs/MapEvents/items/oneOf/0/type",
                                            keyword: "type",
                                            params: { type: "null" },
                                            message: "must be null"
                                          };
                                          t === null ? t = [A] : t.push(A), e++;
                                        }
                                        (ge = ee === e) && (re = !0, F = 0);
                                        const le = e;
                                        if (e === le) if (n && typeof n == "object" && !Array.isArray(n)) {
                                          let A;
                                          if (n.id === void 0 && (A = "id") || n.name === void 0 && (A = "name") || n.x === void 0 && (A = "x") || n.y === void 0 && (A = "y") || n.pages === void 0 && (A = "pages") || n.note === void 0 && (A = "note")) {
                                            const k = {
                                              instancePath: s + "/events/" + o,
                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/required",
                                              keyword: "required",
                                              params: { missingProperty: A },
                                              message: "must have required property '" + A + "'"
                                            };
                                            t === null ? t = [k] : t.push(k), e++;
                                          } else {
                                            if (n.id !== void 0) {
                                              let k = n.id;
                                              const T = e;
                                              if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) {
                                                const C = {
                                                  instancePath: s + "/events/" + o + "/id",
                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/id/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                };
                                                t === null ? t = [C] : t.push(C), e++;
                                              }
                                              var M = T === e;
                                            } else M = !0;
                                            if (M) {
                                              if (n.name !== void 0) {
                                                const k = e;
                                                if (typeof n.name != "string") {
                                                  const T = {
                                                    instancePath: s + "/events/" + o + "/name",
                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/name/type",
                                                    keyword: "type",
                                                    params: { type: "string" },
                                                    message: "must be string"
                                                  };
                                                  t === null ? t = [T] : t.push(T), e++;
                                                }
                                                M = k === e;
                                              } else M = !0;
                                              if (M) {
                                                if (n.note !== void 0) {
                                                  const k = e;
                                                  if (typeof n.note != "string") {
                                                    const T = { instancePath: s + "/events/" + o + "/note", schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/note/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                    t === null ? t = [T] : t.push(T), e++;
                                                  }
                                                  M = k === e;
                                                } else M = !0;
                                                if (M) {
                                                  if (n.pages !== void 0) {
                                                    let k = n.pages;
                                                    const T = e;
                                                    if (e === T) if (Array.isArray(k)) {
                                                      const C = k.length;
                                                      for (let y = 0; y < C; y++) {
                                                        let P = k[y];
                                                        const we = e;
                                                        if (e === we) if (P && typeof P == "object" && !Array.isArray(P)) {
                                                          let z;
                                                          if (P.conditions === void 0 && (z = "conditions") || P.image === void 0 && (z = "image") || P.list === void 0 && (z = "list") || P.moveRoute === void 0 && (z = "moveRoute") || P.directionFix === void 0 && (z = "directionFix") || P.priorityType === void 0 && (z = "priorityType") || P.moveFrequency === void 0 && (z = "moveFrequency")) {
                                                            const ce = {
                                                              instancePath: s + "/events/" + o + "/pages/" + y,
                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/required",
                                                              keyword: "required",
                                                              params: { missingProperty: z },
                                                              message: "must have required property '" + z + "'"
                                                            };
                                                            t === null ? t = [ce] : t.push(ce), e++;
                                                          } else {
                                                            const ce = e;
                                                            for (const r in P) if (!g.call(f.items.oneOf[1].properties.pages.items.properties, r)) {
                                                              const N = { instancePath: s + "/events/" + o + "/pages/" + y, schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/additionalProperties", keyword: "additionalProperties", params: {
                                                                additionalProperty: r
                                                              }, message: "must NOT have additional properties" };
                                                              t === null ? t = [N] : t.push(N), e++;
                                                              break;
                                                            }
                                                            if (ce === e) {
                                                              if (P.stepAnime !== void 0) {
                                                                const r = e;
                                                                if (typeof P.stepAnime != "boolean") {
                                                                  const N = {
                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/stepAnime",
                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/stepAnime/type",
                                                                    keyword: "type",
                                                                    params: { type: "boolean" },
                                                                    message: "must be boolean"
                                                                  };
                                                                  t === null ? t = [N] : t.push(N), e++;
                                                                }
                                                                var O = r === e;
                                                              } else O = !0;
                                                              if (O) {
                                                                if (P.walkAnime !== void 0) {
                                                                  const r = e;
                                                                  if (typeof P.walkAnime != "boolean") {
                                                                    const N = {
                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/walkAnime",
                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/walkAnime/type",
                                                                      keyword: "type",
                                                                      params: {
                                                                        type: "boolean"
                                                                      },
                                                                      message: "must be boolean"
                                                                    };
                                                                    t === null ? t = [N] : t.push(N), e++;
                                                                  }
                                                                  O = r === e;
                                                                } else O = !0;
                                                                if (O) {
                                                                  if (P.through !== void 0) {
                                                                    const r = e;
                                                                    if (typeof P.through != "boolean") {
                                                                      const N = {
                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/through",
                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/through/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                          type: "boolean"
                                                                        },
                                                                        message: "must be boolean"
                                                                      };
                                                                      t === null ? t = [N] : t.push(N), e++;
                                                                    }
                                                                    O = r === e;
                                                                  } else O = !0;
                                                                  if (O) {
                                                                    if (P.priorityType !== void 0) {
                                                                      let r = P.priorityType;
                                                                      const N = e;
                                                                      if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                        const h = {
                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/priorityType",
                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/priorityType/type",
                                                                          keyword: "type",
                                                                          params: { type: "integer" },
                                                                          message: "must be integer"
                                                                        };
                                                                        t === null ? t = [h] : t.push(h), e++;
                                                                      }
                                                                      O = N === e;
                                                                    } else O = !0;
                                                                    if (O) {
                                                                      if (P.conditions !== void 0) {
                                                                        let r = P.conditions;
                                                                        const N = e;
                                                                        if (e === N) if (r && typeof r == "object" && !Array.isArray(r)) {
                                                                          let h;
                                                                          if (r.switch1Id === void 0 && (h = "switch1Id") || r.switch1Valid === void 0 && (h = "switch1Valid") || r.switch2Id === void 0 && (h = "switch2Id") || r.switch2Valid === void 0 && (h = "switch2Valid") || r.variableId === void 0 && (h = "variableId") || r.variableValid === void 0 && (h = "variableValid") || r.selfSwitchCh === void 0 && (h = "selfSwitchCh") || r.selfSwitchValid === void 0 && (h = "selfSwitchValid") || r.variableValue === void 0 && (h = "variableValue") || r.itemId === void 0 && (h = "itemId") || r.itemValid === void 0 && (h = "itemValid") || r.actorId === void 0 && (h = "actorId") || r.actorValid === void 0 && (h = "actorValid")) {
                                                                            const I = {
                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/conditions",
                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/required",
                                                                              keyword: "required",
                                                                              params: { missingProperty: h },
                                                                              message: "must have required property '" + h + "'"
                                                                            };
                                                                            t === null ? t = [I] : t.push(I), e++;
                                                                          } else {
                                                                            const I = e;
                                                                            for (const a in r) if (!g.call(f.items.oneOf[1].properties.pages.items.properties.conditions.properties, a)) {
                                                                              const c = {
                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/conditions",
                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/additionalProperties",
                                                                                keyword: "additionalProperties",
                                                                                params: { additionalProperty: a },
                                                                                message: "must NOT have additional properties"
                                                                              };
                                                                              t === null ? t = [c] : t.push(c), e++;
                                                                              break;
                                                                            }
                                                                            if (I === e) {
                                                                              if (r.switch1Id !== void 0) {
                                                                                let a = r.switch1Id;
                                                                                const c = e;
                                                                                if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                  const d = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/switch1Id",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch1Id/type",
                                                                                    keyword: "type",
                                                                                    params: { type: "integer" },
                                                                                    message: "must be integer"
                                                                                  };
                                                                                  t === null ? t = [d] : t.push(d), e++;
                                                                                }
                                                                                if (e === c && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) {
                                                                                  const d = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/switch1Id",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch1Id/minimum",
                                                                                    keyword: "minimum",
                                                                                    params: { comparison: ">=", limit: 0 },
                                                                                    message: "must be >= 0"
                                                                                  };
                                                                                  t === null ? t = [d] : t.push(d), e++;
                                                                                }
                                                                                var u = c === e;
                                                                              } else u = !0;
                                                                              if (u) {
                                                                                if (r.switch1Valid !== void 0) {
                                                                                  const a = e;
                                                                                  if (typeof r.switch1Valid != "boolean") {
                                                                                    const c = {
                                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/switch1Valid",
                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch1Valid/type",
                                                                                      keyword: "type",
                                                                                      params: { type: "boolean" },
                                                                                      message: "must be boolean"
                                                                                    };
                                                                                    t === null ? t = [c] : t.push(c), e++;
                                                                                  }
                                                                                  u = a === e;
                                                                                } else u = !0;
                                                                                if (u) {
                                                                                  if (r.switch2Id !== void 0) {
                                                                                    let a = r.switch2Id;
                                                                                    const c = e;
                                                                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                      const d = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/switch2Id",
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch2Id/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "integer" },
                                                                                        message: "must be integer"
                                                                                      };
                                                                                      t === null ? t = [d] : t.push(d), e++;
                                                                                    }
                                                                                    if (e === c && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) {
                                                                                      const d = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/switch2Id",
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch2Id/minimum",
                                                                                        keyword: "minimum",
                                                                                        params: { comparison: ">=", limit: 0 },
                                                                                        message: "must be >= 0"
                                                                                      };
                                                                                      t === null ? t = [d] : t.push(d), e++;
                                                                                    }
                                                                                    u = c === e;
                                                                                  } else u = !0;
                                                                                  if (u) {
                                                                                    if (r.switch2Valid !== void 0) {
                                                                                      const a = e;
                                                                                      if (typeof r.switch2Valid != "boolean") {
                                                                                        const c = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/switch2Valid",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/switch2Valid/type",
                                                                                          keyword: "type",
                                                                                          params: { type: "boolean" },
                                                                                          message: "must be boolean"
                                                                                        };
                                                                                        t === null ? t = [c] : t.push(c), e++;
                                                                                      }
                                                                                      u = a === e;
                                                                                    } else u = !0;
                                                                                    if (u) {
                                                                                      if (r.variableId !== void 0) {
                                                                                        let a = r.variableId;
                                                                                        const c = e;
                                                                                        if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                          const d = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/variableId",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableId/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "integer" },
                                                                                            message: "must be integer"
                                                                                          };
                                                                                          t === null ? t = [d] : t.push(d), e++;
                                                                                        }
                                                                                        if (e === c && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) {
                                                                                          const d = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/variableId",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableId/minimum",
                                                                                            keyword: "minimum",
                                                                                            params: { comparison: ">=", limit: 0 },
                                                                                            message: "must be >= 0"
                                                                                          };
                                                                                          t === null ? t = [d] : t.push(d), e++;
                                                                                        }
                                                                                        u = c === e;
                                                                                      } else u = !0;
                                                                                      if (u) {
                                                                                        if (r.variableValid !== void 0) {
                                                                                          const a = e;
                                                                                          if (typeof r.variableValid != "boolean") {
                                                                                            const c = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/variableValid",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableValid/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "boolean" },
                                                                                              message: "must be boolean"
                                                                                            };
                                                                                            t === null ? t = [c] : t.push(c), e++;
                                                                                          }
                                                                                          u = a === e;
                                                                                        } else u = !0;
                                                                                        if (u) {
                                                                                          if (r.selfSwitchCh !== void 0) {
                                                                                            const a = e;
                                                                                            if (typeof r.selfSwitchCh != "string") {
                                                                                              const c = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/selfSwitchCh",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/selfSwitchCh/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "string" },
                                                                                                message: "must be string"
                                                                                              };
                                                                                              t === null ? t = [c] : t.push(c), e++;
                                                                                            }
                                                                                            u = a === e;
                                                                                          } else u = !0;
                                                                                          if (u) {
                                                                                            if (r.selfSwitchValid !== void 0) {
                                                                                              const a = e;
                                                                                              if (typeof r.selfSwitchValid != "boolean") {
                                                                                                const c = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/selfSwitchValid",
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/selfSwitchValid/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "boolean" },
                                                                                                  message: "must be boolean"
                                                                                                };
                                                                                                t === null ? t = [c] : t.push(c), e++;
                                                                                              }
                                                                                              u = a === e;
                                                                                            } else u = !0;
                                                                                            if (u) {
                                                                                              if (r.variableValue !== void 0) {
                                                                                                let a = r.variableValue;
                                                                                                const c = e;
                                                                                                if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                                  const d = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/variableValue",
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/variableValue/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "integer" },
                                                                                                    message: "must be integer"
                                                                                                  };
                                                                                                  t === null ? t = [d] : t.push(d), e++;
                                                                                                }
                                                                                                u = c === e;
                                                                                              } else u = !0;
                                                                                              if (u) {
                                                                                                if (r.itemId !== void 0) {
                                                                                                  let a = r.itemId;
                                                                                                  const c = e;
                                                                                                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                                    const d = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/itemId",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/itemId/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "integer" },
                                                                                                      message: "must be integer"
                                                                                                    };
                                                                                                    t === null ? t = [d] : t.push(d), e++;
                                                                                                  }
                                                                                                  if (e === c && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) {
                                                                                                    const d = {
                                                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/itemId",
                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/itemId/minimum",
                                                                                                      keyword: "minimum",
                                                                                                      params: { comparison: ">=", limit: 0 },
                                                                                                      message: "must be >= 0"
                                                                                                    };
                                                                                                    t === null ? t = [d] : t.push(d), e++;
                                                                                                  }
                                                                                                  u = c === e;
                                                                                                } else u = !0;
                                                                                                if (u) {
                                                                                                  if (r.itemValid !== void 0) {
                                                                                                    const a = e;
                                                                                                    if (typeof r.itemValid != "boolean") {
                                                                                                      const c = {
                                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/itemValid",
                                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/itemValid/type",
                                                                                                        keyword: "type",
                                                                                                        params: { type: "boolean" },
                                                                                                        message: "must be boolean"
                                                                                                      };
                                                                                                      t === null ? t = [c] : t.push(c), e++;
                                                                                                    }
                                                                                                    u = a === e;
                                                                                                  } else u = !0;
                                                                                                  if (u) {
                                                                                                    if (r.actorId !== void 0) {
                                                                                                      let a = r.actorId;
                                                                                                      const c = e;
                                                                                                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                                        const d = {
                                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/actorId",
                                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/actorId/type",
                                                                                                          keyword: "type",
                                                                                                          params: { type: "integer" },
                                                                                                          message: "must be integer"
                                                                                                        };
                                                                                                        t === null ? t = [d] : t.push(d), e++;
                                                                                                      }
                                                                                                      u = c === e;
                                                                                                    } else u = !0;
                                                                                                    if (u) if (r.actorValid !== void 0) {
                                                                                                      const a = e;
                                                                                                      if (typeof r.actorValid != "boolean") {
                                                                                                        const c = {
                                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/conditions/actorValid",
                                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/properties/actorValid/type",
                                                                                                          keyword: "type",
                                                                                                          params: { type: "boolean" },
                                                                                                          message: "must be boolean"
                                                                                                        };
                                                                                                        t === null ? t = [c] : t.push(c), e++;
                                                                                                      }
                                                                                                      u = a === e;
                                                                                                    } else u = !0;
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
                                                                          const h = {
                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/conditions",
                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/conditions/type",
                                                                            keyword: "type",
                                                                            params: { type: "object" },
                                                                            message: "must be object"
                                                                          };
                                                                          t === null ? t = [h] : t.push(h), e++;
                                                                        }
                                                                        O = N === e;
                                                                      } else O = !0;
                                                                      if (O) {
                                                                        if (P.directionFix !== void 0) {
                                                                          const r = e;
                                                                          if (typeof P.directionFix != "boolean") {
                                                                            const N = {
                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/directionFix",
                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/directionFix/type",
                                                                              keyword: "type",
                                                                              params: {
                                                                                type: "boolean"
                                                                              },
                                                                              message: "must be boolean"
                                                                            };
                                                                            t === null ? t = [N] : t.push(N), e++;
                                                                          }
                                                                          O = r === e;
                                                                        } else O = !0;
                                                                        if (O) {
                                                                          if (P.image !== void 0) {
                                                                            let r = P.image;
                                                                            const N = e;
                                                                            if (e === N) if (r && typeof r == "object" && !Array.isArray(r)) {
                                                                              let h;
                                                                              if (r.characterIndex === void 0 && (h = "characterIndex") || r.characterName === void 0 && (h = "characterName") || r.direction === void 0 && (h = "direction") || r.pattern === void 0 && (h = "pattern") || r.tileId === void 0 && (h = "tileId")) {
                                                                                const I = { instancePath: s + "/events/" + o + "/pages/" + y + "/image", schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/required", keyword: "required", params: {
                                                                                  missingProperty: h
                                                                                }, message: "must have required property '" + h + "'" };
                                                                                t === null ? t = [I] : t.push(I), e++;
                                                                              } else {
                                                                                const I = e;
                                                                                for (const a in r) if (a !== "characterIndex" && a !== "characterName" && a !== "direction" && a !== "pattern" && a !== "tileId") {
                                                                                  const c = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/image",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/additionalProperties",
                                                                                    keyword: "additionalProperties",
                                                                                    params: { additionalProperty: a },
                                                                                    message: "must NOT have additional properties"
                                                                                  };
                                                                                  t === null ? t = [c] : t.push(c), e++;
                                                                                  break;
                                                                                }
                                                                                if (I === e) {
                                                                                  if (r.characterIndex !== void 0) {
                                                                                    let a = r.characterIndex;
                                                                                    const c = e;
                                                                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                      const d = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/image/characterIndex",
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/characterIndex/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "integer" },
                                                                                        message: "must be integer"
                                                                                      };
                                                                                      t === null ? t = [d] : t.push(d), e++;
                                                                                    }
                                                                                    if (e === c && typeof a == "number" && isFinite(a) && (a < 0 || isNaN(a))) {
                                                                                      const d = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/image/characterIndex",
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/characterIndex/minimum",
                                                                                        keyword: "minimum",
                                                                                        params: { comparison: ">=", limit: 0 },
                                                                                        message: "must be >= 0"
                                                                                      };
                                                                                      t === null ? t = [d] : t.push(d), e++;
                                                                                    }
                                                                                    var D = c === e;
                                                                                  } else D = !0;
                                                                                  if (D) {
                                                                                    if (r.characterName !== void 0) {
                                                                                      const a = e;
                                                                                      if (typeof r.characterName != "string") {
                                                                                        const c = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/image/characterName",
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/characterName/type",
                                                                                          keyword: "type",
                                                                                          params: { type: "string" },
                                                                                          message: "must be string"
                                                                                        };
                                                                                        t === null ? t = [c] : t.push(c), e++;
                                                                                      }
                                                                                      D = a === e;
                                                                                    } else D = !0;
                                                                                    if (D) {
                                                                                      if (r.direction !== void 0) {
                                                                                        let a = r.direction;
                                                                                        const c = e;
                                                                                        if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                          const d = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/image/direction",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/direction/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "integer" },
                                                                                            message: "must be integer"
                                                                                          };
                                                                                          t === null ? t = [d] : t.push(d), e++;
                                                                                        }
                                                                                        if (a !== 2 && a !== 4 && a !== 6 && a !== 8) {
                                                                                          const d = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/image/direction",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/direction/enum",
                                                                                            keyword: "enum",
                                                                                            params: {
                                                                                              allowedValues: f.items.oneOf[1].properties.pages.items.properties.image.properties.direction.enum
                                                                                            },
                                                                                            message: "must be equal to one of the allowed values"
                                                                                          };
                                                                                          t === null ? t = [d] : t.push(d), e++;
                                                                                        }
                                                                                        D = c === e;
                                                                                      } else D = !0;
                                                                                      if (D) {
                                                                                        if (r.pattern !== void 0) {
                                                                                          let a = r.pattern;
                                                                                          const c = e;
                                                                                          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                            const d = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/image/pattern",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/pattern/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "integer" },
                                                                                              message: "must be integer"
                                                                                            };
                                                                                            t === null ? t = [d] : t.push(d), e++;
                                                                                          }
                                                                                          D = c === e;
                                                                                        } else D = !0;
                                                                                        if (D) if (r.tileId !== void 0) {
                                                                                          let a = r.tileId;
                                                                                          const c = e;
                                                                                          if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) {
                                                                                            const d = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/image/tileId",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/properties/tileId/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "integer" },
                                                                                              message: "must be integer"
                                                                                            };
                                                                                            t === null ? t = [d] : t.push(d), e++;
                                                                                          }
                                                                                          D = c === e;
                                                                                        } else D = !0;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            } else {
                                                                              const h = {
                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/image",
                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/image/type",
                                                                                keyword: "type",
                                                                                params: { type: "object" },
                                                                                message: "must be object"
                                                                              };
                                                                              t === null ? t = [h] : t.push(h), e++;
                                                                            }
                                                                            O = N === e;
                                                                          } else O = !0;
                                                                          if (O) {
                                                                            if (P.list !== void 0) {
                                                                              let r = P.list;
                                                                              const N = e;
                                                                              if (e === N) if (Array.isArray(r)) {
                                                                                const h = r.length;
                                                                                for (let I = 0; I < h; I++) {
                                                                                  let a = r[I];
                                                                                  const c = e;
                                                                                  if (e === c) if (a && typeof a == "object" && !Array.isArray(a)) {
                                                                                    let d;
                                                                                    if (a.code === void 0 && (d = "code") || a.parameters === void 0 && (d = "parameters") || a.indent === void 0 && (d = "indent")) {
                                                                                      const E = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/list/" + I,
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/required",
                                                                                        keyword: "required",
                                                                                        params: {
                                                                                          missingProperty: d
                                                                                        },
                                                                                        message: "must have required property '" + d + "'"
                                                                                      };
                                                                                      t === null ? t = [E] : t.push(E), e++;
                                                                                    } else {
                                                                                      const E = e;
                                                                                      for (const x in a) if (x !== "code" && x !== "indent" && x !== "parameters") {
                                                                                        const G = {
                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/list/" + I,
                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/additionalProperties",
                                                                                          keyword: "additionalProperties",
                                                                                          params: { additionalProperty: x },
                                                                                          message: "must NOT have additional properties"
                                                                                        };
                                                                                        t === null ? t = [G] : t.push(G), e++;
                                                                                        break;
                                                                                      }
                                                                                      if (E === e) {
                                                                                        if (a.code !== void 0) {
                                                                                          let x = a.code;
                                                                                          const G = e;
                                                                                          if (typeof x != "number" || x % 1 || isNaN(x) || !isFinite(x)) {
                                                                                            const X = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/list/" + I + "/code",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/properties/code/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "integer" },
                                                                                              message: "must be integer"
                                                                                            };
                                                                                            t === null ? t = [X] : t.push(X), e++;
                                                                                          }
                                                                                          var ae = G === e;
                                                                                        } else ae = !0;
                                                                                        if (ae) {
                                                                                          if (a.indent !== void 0) {
                                                                                            let x = a.indent;
                                                                                            const G = e;
                                                                                            if (typeof x != "number" || x % 1 || isNaN(x) || !isFinite(x)) {
                                                                                              const X = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/list/" + I + "/indent",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/properties/indent/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "integer" },
                                                                                                message: "must be integer"
                                                                                              };
                                                                                              t === null ? t = [X] : t.push(X), e++;
                                                                                            }
                                                                                            ae = G === e;
                                                                                          } else ae = !0;
                                                                                          if (ae) if (a.parameters !== void 0) {
                                                                                            const x = e;
                                                                                            if (e === x && !Array.isArray(a.parameters)) {
                                                                                              const G = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/list/" + I + "/parameters",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/properties/parameters/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "array" },
                                                                                                message: "must be array"
                                                                                              };
                                                                                              t === null ? t = [G] : t.push(G), e++;
                                                                                            }
                                                                                            ae = x === e;
                                                                                          } else ae = !0;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  } else {
                                                                                    const d = {
                                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/list/" + I,
                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/items/type",
                                                                                      keyword: "type",
                                                                                      params: { type: "object" },
                                                                                      message: "must be object"
                                                                                    };
                                                                                    t === null ? t = [d] : t.push(d), e++;
                                                                                  }
                                                                                  if (c !== e) break;
                                                                                }
                                                                              } else {
                                                                                const h = {
                                                                                  instancePath: s + "/events/" + o + "/pages/" + y + "/list",
                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/list/type",
                                                                                  keyword: "type",
                                                                                  params: { type: "array" },
                                                                                  message: "must be array"
                                                                                };
                                                                                t === null ? t = [h] : t.push(h), e++;
                                                                              }
                                                                              O = N === e;
                                                                            } else O = !0;
                                                                            if (O) {
                                                                              if (P.moveFrequency !== void 0) {
                                                                                let r = P.moveFrequency;
                                                                                const N = e;
                                                                                if (typeof r != "number" || r % 1 || isNaN(r) || !isFinite(r)) {
                                                                                  const h = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/moveFrequency",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveFrequency/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                      type: "integer"
                                                                                    },
                                                                                    message: "must be integer"
                                                                                  };
                                                                                  t === null ? t = [h] : t.push(h), e++;
                                                                                }
                                                                                O = N === e;
                                                                              } else O = !0;
                                                                              if (O) if (P.moveRoute !== void 0) {
                                                                                let r = P.moveRoute;
                                                                                const N = e;
                                                                                if (e === N) if (r && typeof r == "object" && !Array.isArray(r)) {
                                                                                  let h;
                                                                                  if (r.wait === void 0 && (h = "wait") || r.repeat === void 0 && (h = "repeat") || r.skippable === void 0 && (h = "skippable") || r.list === void 0 && (h = "list")) {
                                                                                    const I = {
                                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute",
                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/required",
                                                                                      keyword: "required",
                                                                                      params: {
                                                                                        missingProperty: h
                                                                                      },
                                                                                      message: "must have required property '" + h + "'"
                                                                                    };
                                                                                    t === null ? t = [I] : t.push(I), e++;
                                                                                  } else {
                                                                                    const I = e;
                                                                                    for (const a in r) if (a !== "list" && a !== "repeat" && a !== "skippable" && a !== "wait") {
                                                                                      const c = {
                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute",
                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/additionalProperties",
                                                                                        keyword: "additionalProperties",
                                                                                        params: { additionalProperty: a },
                                                                                        message: "must NOT have additional properties"
                                                                                      };
                                                                                      t === null ? t = [c] : t.push(c), e++;
                                                                                      break;
                                                                                    }
                                                                                    if (I === e) {
                                                                                      if (r.list !== void 0) {
                                                                                        let a = r.list;
                                                                                        const c = e;
                                                                                        if (e === c) if (Array.isArray(a)) {
                                                                                          const d = a.length;
                                                                                          for (let E = 0; E < d; E++) {
                                                                                            let x = a[E];
                                                                                            const G = e;
                                                                                            if (e === G) if (x && typeof x == "object" && !Array.isArray(x)) {
                                                                                              let X;
                                                                                              if (x.code === void 0 && (X = "code") || x.parameters === void 0 && (X = "parameters")) {
                                                                                                const ye = {
                                                                                                  instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E,
                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/required",
                                                                                                  keyword: "required",
                                                                                                  params: { missingProperty: X },
                                                                                                  message: "must have required property '" + X + "'"
                                                                                                };
                                                                                                t === null ? t = [ye] : t.push(ye), e++;
                                                                                              } else {
                                                                                                const ye = e;
                                                                                                for (const H in x) if (H !== "code" && H !== "parameters") {
                                                                                                  const oe = {
                                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E,
                                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/additionalProperties",
                                                                                                    keyword: "additionalProperties",
                                                                                                    params: {
                                                                                                      additionalProperty: H
                                                                                                    },
                                                                                                    message: "must NOT have additional properties"
                                                                                                  };
                                                                                                  t === null ? t = [oe] : t.push(oe), e++;
                                                                                                  break;
                                                                                                }
                                                                                                if (ye === e) {
                                                                                                  if (x.code !== void 0) {
                                                                                                    let H = x.code;
                                                                                                    const oe = e;
                                                                                                    if (typeof H != "number" || H % 1 || isNaN(H) || !isFinite(H)) {
                                                                                                      const pe = {
                                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/code",
                                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/code/type",
                                                                                                        keyword: "type",
                                                                                                        params: { type: "integer" },
                                                                                                        message: "must be integer"
                                                                                                      };
                                                                                                      t === null ? t = [pe] : t.push(pe), e++;
                                                                                                    }
                                                                                                    var me = oe === e;
                                                                                                  } else me = !0;
                                                                                                  if (me) if (x.parameters !== void 0) {
                                                                                                    let H = x.parameters;
                                                                                                    const oe = e;
                                                                                                    if (e === oe) if (Array.isArray(H)) {
                                                                                                      const pe = H.length;
                                                                                                      for (let Y = 0; Y < pe; Y++) {
                                                                                                        let j = H[Y];
                                                                                                        const xe = e, ve = e;
                                                                                                        let te = !1, se = null;
                                                                                                        const Fe = e;
                                                                                                        if (typeof j != "string") {
                                                                                                          const K = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y,
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/0/type",
                                                                                                            keyword: "type",
                                                                                                            params: {
                                                                                                              type: "string"
                                                                                                            },
                                                                                                            message: "must be string"
                                                                                                          };
                                                                                                          t === null ? t = [K] : t.push(K), e++;
                                                                                                        }
                                                                                                        (ne = Fe === e) && (te = !0, se = 0);
                                                                                                        const Ie = e;
                                                                                                        if (typeof j != "number" || !isFinite(j)) {
                                                                                                          const K = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y,
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/1/type",
                                                                                                            keyword: "type",
                                                                                                            params: {
                                                                                                              type: "number"
                                                                                                            },
                                                                                                            message: "must be number"
                                                                                                          };
                                                                                                          t === null ? t = [K] : t.push(K), e++;
                                                                                                        }
                                                                                                        if ((ne = Ie === e) && te) te = !1, se = [se, 1];
                                                                                                        else {
                                                                                                          ne && (te = !0, se = 1);
                                                                                                          const K = e;
                                                                                                          if (e === K) if (j && typeof j == "object" && !Array.isArray(j)) {
                                                                                                            let _;
                                                                                                            if (j.name === void 0 && (_ = "name") || j.pan === void 0 && (_ = "pan") || j.pitch === void 0 && (_ = "pitch") || j.volume === void 0 && (_ = "volume")) {
                                                                                                              const de = {
                                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y,
                                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/required",
                                                                                                                keyword: "required",
                                                                                                                params: { missingProperty: _ },
                                                                                                                message: "must have required property '" + _ + "'"
                                                                                                              };
                                                                                                              t === null ? t = [de] : t.push(de), e++;
                                                                                                            } else {
                                                                                                              const de = e;
                                                                                                              for (const q in j) if (q !== "name" && q !== "pan" && q !== "pitch" && q !== "volume") {
                                                                                                                const Q = {
                                                                                                                  instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y,
                                                                                                                  schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/additionalProperties",
                                                                                                                  keyword: "additionalProperties",
                                                                                                                  params: { additionalProperty: q },
                                                                                                                  message: "must NOT have additional properties"
                                                                                                                };
                                                                                                                t === null ? t = [Q] : t.push(Q), e++;
                                                                                                                break;
                                                                                                              }
                                                                                                              if (de === e) {
                                                                                                                if (j.name !== void 0) {
                                                                                                                  const q = e;
                                                                                                                  if (typeof j.name != "string") {
                                                                                                                    const Q = {
                                                                                                                      instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y + "/name",
                                                                                                                      schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/name/type",
                                                                                                                      keyword: "type",
                                                                                                                      params: { type: "string" },
                                                                                                                      message: "must be string"
                                                                                                                    };
                                                                                                                    t === null ? t = [Q] : t.push(Q), e++;
                                                                                                                  }
                                                                                                                  var U = q === e;
                                                                                                                } else U = !0;
                                                                                                                if (U) {
                                                                                                                  if (j.pan !== void 0) {
                                                                                                                    let q = j.pan;
                                                                                                                    const Q = e;
                                                                                                                    if (typeof q != "number" || q % 1 || isNaN(q) || !isFinite(q)) {
                                                                                                                      const ie = {
                                                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y + "/pan",
                                                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/pan/type",
                                                                                                                        keyword: "type",
                                                                                                                        params: { type: "integer" },
                                                                                                                        message: "must be integer"
                                                                                                                      };
                                                                                                                      t === null ? t = [ie] : t.push(ie), e++;
                                                                                                                    }
                                                                                                                    U = Q === e;
                                                                                                                  } else U = !0;
                                                                                                                  if (U) {
                                                                                                                    if (j.pitch !== void 0) {
                                                                                                                      let q = j.pitch;
                                                                                                                      const Q = e;
                                                                                                                      if (typeof q != "number" || q % 1 || isNaN(q) || !isFinite(q)) {
                                                                                                                        const ie = {
                                                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y + "/pitch",
                                                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/pitch/type",
                                                                                                                          keyword: "type",
                                                                                                                          params: { type: "integer" },
                                                                                                                          message: "must be integer"
                                                                                                                        };
                                                                                                                        t === null ? t = [ie] : t.push(ie), e++;
                                                                                                                      }
                                                                                                                      U = Q === e;
                                                                                                                    } else U = !0;
                                                                                                                    if (U) if (j.volume !== void 0) {
                                                                                                                      let q = j.volume;
                                                                                                                      const Q = e;
                                                                                                                      if (typeof q != "number" || q % 1 || isNaN(q) || !isFinite(q)) {
                                                                                                                        const ie = {
                                                                                                                          instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y + "/volume",
                                                                                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/properties/volume/type",
                                                                                                                          keyword: "type",
                                                                                                                          params: { type: "integer" },
                                                                                                                          message: "must be integer"
                                                                                                                        };
                                                                                                                        t === null ? t = [ie] : t.push(ie), e++;
                                                                                                                      }
                                                                                                                      U = Q === e;
                                                                                                                    } else U = !0;
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          } else {
                                                                                                            const _ = {
                                                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y,
                                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf/2/type",
                                                                                                              keyword: "type",
                                                                                                              params: {
                                                                                                                type: "object"
                                                                                                              },
                                                                                                              message: "must be object"
                                                                                                            };
                                                                                                            t === null ? t = [_] : t.push(_), e++;
                                                                                                          }
                                                                                                          var ne;
                                                                                                          (ne = K === e) && te ? (te = !1, se = [se, 2]) : ne && (te = !0, se = 2);
                                                                                                        }
                                                                                                        if (te) e = ve, t !== null && (ve ? t.length = ve : t = null);
                                                                                                        else {
                                                                                                          const K = {
                                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters/" + Y,
                                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/items/oneOf",
                                                                                                            keyword: "oneOf",
                                                                                                            params: {
                                                                                                              passingSchemas: se
                                                                                                            },
                                                                                                            message: "must match exactly one schema in oneOf"
                                                                                                          };
                                                                                                          t === null ? t = [K] : t.push(K), e++;
                                                                                                        }
                                                                                                        if (xe !== e) break;
                                                                                                      }
                                                                                                    } else {
                                                                                                      const pe = {
                                                                                                        instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E + "/parameters",
                                                                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/properties/parameters/type",
                                                                                                        keyword: "type",
                                                                                                        params: { type: "array" },
                                                                                                        message: "must be array"
                                                                                                      };
                                                                                                      t === null ? t = [pe] : t.push(pe), e++;
                                                                                                    }
                                                                                                    me = oe === e;
                                                                                                  } else me = !0;
                                                                                                }
                                                                                              }
                                                                                            } else {
                                                                                              const X = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list/" + E,
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/items/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "object" },
                                                                                                message: "must be object"
                                                                                              };
                                                                                              t === null ? t = [X] : t.push(X), e++;
                                                                                            }
                                                                                            if (G !== e) break;
                                                                                          }
                                                                                        } else {
                                                                                          const d = {
                                                                                            instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/list",
                                                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/list/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "array" },
                                                                                            message: "must be array"
                                                                                          };
                                                                                          t === null ? t = [d] : t.push(d), e++;
                                                                                        }
                                                                                        var W = c === e;
                                                                                      } else W = !0;
                                                                                      if (W) {
                                                                                        if (r.repeat !== void 0) {
                                                                                          const a = e;
                                                                                          if (typeof r.repeat != "boolean") {
                                                                                            const c = {
                                                                                              instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/repeat",
                                                                                              schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/repeat/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "boolean" },
                                                                                              message: "must be boolean"
                                                                                            };
                                                                                            t === null ? t = [c] : t.push(c), e++;
                                                                                          }
                                                                                          W = a === e;
                                                                                        } else W = !0;
                                                                                        if (W) {
                                                                                          if (r.skippable !== void 0) {
                                                                                            const a = e;
                                                                                            if (typeof r.skippable != "boolean") {
                                                                                              const c = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/skippable",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/skippable/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "boolean" },
                                                                                                message: "must be boolean"
                                                                                              };
                                                                                              t === null ? t = [c] : t.push(c), e++;
                                                                                            }
                                                                                            W = a === e;
                                                                                          } else W = !0;
                                                                                          if (W) if (r.wait !== void 0) {
                                                                                            const a = e;
                                                                                            if (typeof r.wait != "boolean") {
                                                                                              const c = {
                                                                                                instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute/wait",
                                                                                                schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/properties/wait/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "boolean" },
                                                                                                message: "must be boolean"
                                                                                              };
                                                                                              t === null ? t = [c] : t.push(c), e++;
                                                                                            }
                                                                                            W = a === e;
                                                                                          } else W = !0;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  const h = {
                                                                                    instancePath: s + "/events/" + o + "/pages/" + y + "/moveRoute",
                                                                                    schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/properties/moveRoute/type",
                                                                                    keyword: "type",
                                                                                    params: { type: "object" },
                                                                                    message: "must be object"
                                                                                  };
                                                                                  t === null ? t = [h] : t.push(h), e++;
                                                                                }
                                                                                O = N === e;
                                                                              } else O = !0;
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
                                                            instancePath: s + "/events/" + o + "/pages/" + y,
                                                            schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/items/type",
                                                            keyword: "type",
                                                            params: { type: "object" },
                                                            message: "must be object"
                                                          };
                                                          t === null ? t = [z] : t.push(z), e++;
                                                        }
                                                        if (we !== e) break;
                                                      }
                                                    } else {
                                                      const C = {
                                                        instancePath: s + "/events/" + o + "/pages",
                                                        schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/pages/type",
                                                        keyword: "type",
                                                        params: { type: "array" },
                                                        message: "must be array"
                                                      };
                                                      t === null ? t = [C] : t.push(C), e++;
                                                    }
                                                    M = T === e;
                                                  } else M = !0;
                                                  if (M) {
                                                    if (n.x !== void 0) {
                                                      let k = n.x;
                                                      const T = e;
                                                      if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) {
                                                        const C = {
                                                          instancePath: s + "/events/" + o + "/x",
                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/x/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        };
                                                        t === null ? t = [C] : t.push(C), e++;
                                                      }
                                                      M = T === e;
                                                    } else M = !0;
                                                    if (M) if (n.y !== void 0) {
                                                      let k = n.y;
                                                      const T = e;
                                                      if (typeof k != "number" || k % 1 || isNaN(k) || !isFinite(k)) {
                                                        const C = {
                                                          instancePath: s + "/events/" + o + "/y",
                                                          schemaPath: "#/$defs/MapEvents/items/oneOf/1/properties/y/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        };
                                                        t === null ? t = [C] : t.push(C), e++;
                                                      }
                                                      M = T === e;
                                                    } else M = !0;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          const A = { instancePath: s + "/events/" + o, schemaPath: "#/$defs/MapEvents/items/oneOf/1/type", keyword: "type", params: {
                                            type: "object"
                                          }, message: "must be object" };
                                          t === null ? t = [A] : t.push(A), e++;
                                        }
                                        var ge;
                                        if ((ge = le === e) && re ? (re = !1, F = [F, 1]) : ge && (re = !0, F = 1), !re) {
                                          const A = {
                                            instancePath: s + "/events/" + o,
                                            schemaPath: "#/$defs/MapEvents/items/oneOf",
                                            keyword: "oneOf",
                                            params: { passingSchemas: F },
                                            message: "must match exactly one schema in oneOf"
                                          };
                                          return t === null ? t = [A] : t.push(A), e++, m.errors = t, !1;
                                        }
                                        if (e = Z, t !== null && (Z ? t.length = Z : t = null), R !== e) break;
                                      }
                                    }
                                  }
                                  p = v === e;
                                } else p = !0;
                                if (p) {
                                  if (l.height !== void 0) {
                                    let i = l.height;
                                    const v = e;
                                    if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                      instancePath: s + "/height",
                                      schemaPath: "#/properties/height/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    if (e === v && typeof i == "number" && isFinite(i) && (i < 0 || isNaN(i))) return m.errors = [{
                                      instancePath: s + "/height",
                                      schemaPath: "#/properties/height/minimum",
                                      keyword: "minimum",
                                      params: { comparison: ">=", limit: 0 },
                                      message: "must be >= 0"
                                    }], !1;
                                    p = v === e;
                                  } else p = !0;
                                  if (p) {
                                    if (l.note !== void 0) {
                                      const i = e;
                                      if (typeof l.note != "string") return m.errors = [{
                                        instancePath: s + "/note",
                                        schemaPath: "#/properties/note/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string"
                                      }], !1;
                                      p = i === e;
                                    } else p = !0;
                                    if (p) {
                                      if (l.parallaxLoopX !== void 0) {
                                        const i = e;
                                        if (typeof l.parallaxLoopX != "boolean") return m.errors = [{ instancePath: s + "/parallaxLoopX", schemaPath: "#/properties/parallaxLoopX/type", keyword: "type", params: {
                                          type: "boolean"
                                        }, message: "must be boolean" }], !1;
                                        p = i === e;
                                      } else p = !0;
                                      if (p) {
                                        if (l.parallaxLoopY !== void 0) {
                                          const i = e;
                                          if (typeof l.parallaxLoopY != "boolean") return m.errors = [{
                                            instancePath: s + "/parallaxLoopY",
                                            schemaPath: "#/properties/parallaxLoopY/type",
                                            keyword: "type",
                                            params: { type: "boolean" },
                                            message: "must be boolean"
                                          }], !1;
                                          p = i === e;
                                        } else p = !0;
                                        if (p) {
                                          if (l.parallaxName !== void 0) {
                                            const i = e;
                                            if (typeof l.parallaxName != "string") return m.errors = [{
                                              instancePath: s + "/parallaxName",
                                              schemaPath: "#/properties/parallaxName/type",
                                              keyword: "type",
                                              params: { type: "string" },
                                              message: "must be string"
                                            }], !1;
                                            p = i === e;
                                          } else p = !0;
                                          if (p) {
                                            if (l.parallaxShow !== void 0) {
                                              const i = e;
                                              if (typeof l.parallaxShow != "boolean") return m.errors = [{
                                                instancePath: s + "/parallaxShow",
                                                schemaPath: "#/properties/parallaxShow/type",
                                                keyword: "type",
                                                params: { type: "boolean" },
                                                message: "must be boolean"
                                              }], !1;
                                              p = i === e;
                                            } else p = !0;
                                            if (p) {
                                              if (l.parallaxSx !== void 0) {
                                                let i = l.parallaxSx;
                                                const v = e;
                                                if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                                  instancePath: s + "/parallaxSx",
                                                  schemaPath: "#/properties/parallaxSx/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                p = v === e;
                                              } else p = !0;
                                              if (p) {
                                                if (l.parallaxSy !== void 0) {
                                                  let i = l.parallaxSy;
                                                  const v = e;
                                                  if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                                    instancePath: s + "/parallaxSy",
                                                    schemaPath: "#/properties/parallaxSy/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  p = v === e;
                                                } else p = !0;
                                                if (p) {
                                                  if (l.tilesetId !== void 0) {
                                                    let i = l.tilesetId;
                                                    const v = e;
                                                    if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{ instancePath: s + "/tilesetId", schemaPath: "#/properties/tilesetId/type", keyword: "type", params: {
                                                      type: "integer"
                                                    }, message: "must be integer" }], !1;
                                                    p = v === e;
                                                  } else p = !0;
                                                  if (p) {
                                                    if (l.width !== void 0) {
                                                      let i = l.width;
                                                      const v = e;
                                                      if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                                        instancePath: s + "/width",
                                                        schemaPath: "#/properties/width/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      if (e === v && typeof i == "number" && isFinite(i) && (i < 0 || isNaN(i))) return m.errors = [{
                                                        instancePath: s + "/width",
                                                        schemaPath: "#/properties/width/minimum",
                                                        keyword: "minimum",
                                                        params: { comparison: ">=", limit: 0 },
                                                        message: "must be >= 0"
                                                      }], !1;
                                                      p = v === e;
                                                    } else p = !0;
                                                    if (p) {
                                                      if (l.x !== void 0) {
                                                        let i = l.x;
                                                        const v = e;
                                                        if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                                          instancePath: s + "/x",
                                                          schemaPath: "#/properties/x/type",
                                                          keyword: "type",
                                                          params: { type: "integer" },
                                                          message: "must be integer"
                                                        }], !1;
                                                        if (e === v && typeof i == "number" && isFinite(i) && (i < 0 || isNaN(i))) return m.errors = [{
                                                          instancePath: s + "/x",
                                                          schemaPath: "#/properties/x/minimum",
                                                          keyword: "minimum",
                                                          params: { comparison: ">=", limit: 0 },
                                                          message: "must be >= 0"
                                                        }], !1;
                                                        p = v === e;
                                                      } else p = !0;
                                                      if (p) {
                                                        if (l.y !== void 0) {
                                                          let i = l.y;
                                                          const v = e;
                                                          if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                                            instancePath: s + "/y",
                                                            schemaPath: "#/properties/y/type",
                                                            keyword: "type",
                                                            params: { type: "integer" },
                                                            message: "must be integer"
                                                          }], !1;
                                                          if (e === v && typeof i == "number" && isFinite(i) && (i < 0 || isNaN(i))) return m.errors = [{
                                                            instancePath: s + "/y",
                                                            schemaPath: "#/properties/y/minimum",
                                                            keyword: "minimum",
                                                            params: { comparison: ">=", limit: 0 },
                                                            message: "must be >= 0"
                                                          }], !1;
                                                          p = v === e;
                                                        } else p = !0;
                                                        if (p) {
                                                          if (l.encounterStep !== void 0) {
                                                            let i = l.encounterStep;
                                                            const v = e;
                                                            if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{ instancePath: s + "/encounterStep", schemaPath: "#/properties/encounterStep/type", keyword: "type", params: {
                                                              type: "integer"
                                                            }, message: "must be integer" }], !1;
                                                            p = v === e;
                                                          } else p = !0;
                                                          if (p) {
                                                            if (l.scrollType !== void 0) {
                                                              let i = l.scrollType;
                                                              const v = e;
                                                              if (typeof i != "number" || i % 1 || isNaN(i) || !isFinite(i)) return m.errors = [{
                                                                instancePath: s + "/scrollType",
                                                                schemaPath: "#/properties/scrollType/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], !1;
                                                              p = v === e;
                                                            } else p = !0;
                                                            if (p) if (l.specifyBattleback !== void 0) {
                                                              const i = e;
                                                              if (typeof l.specifyBattleback != "boolean") return m.errors = [{
                                                                instancePath: s + "/specifyBattleback",
                                                                schemaPath: "#/properties/specifyBattleback/type",
                                                                keyword: "type",
                                                                params: { type: "boolean" },
                                                                message: "must be boolean"
                                                              }], !1;
                                                              p = i === e;
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
      }
    }
    return m.errors = t, e === 0;
  }
  return ue.exports;
}()), je = (J) => Ae(J);
export {
  Ve as isActorTextCommand,
  Se as isAudioCommand,
  je as isDataMap
};
