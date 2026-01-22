import { g as U } from "../../shared/_commonjsHelpers.es.js";
var L, R, E = { exports: {} }, O = {};
const K = U(function() {
  if (R) return E.exports;
  R = 1, E.exports = s, E.exports.default = s;
  const M = {
    properties: { gameId: { type: "integer" }, screenWidth: { type: "integer" }, screenHeight: { type: "integer" }, uiAreaWidth: { type: "integer" }, uiAreaHeight: { type: "integer" }, windowOpacity: {
      type: "integer"
    }, screenScale: { type: "number" }, numberFontFilename: { type: "string" }, mainFontFilename: { type: "string" }, fallbackFonts: { type: "string" }, fontSize: { type: "integer" } }
  }, z = {
    properties: {
      actionFailure: { type: "string" },
      actorDamage: { type: "string" },
      actorDrain: { type: "string" },
      actorGain: { type: "string" },
      actorLoss: { type: "string" },
      actorNoDamage: { type: "string" },
      actorNoHit: { type: "string" },
      actorRecovery: { type: "string" },
      alwaysDash: { type: "string" },
      autosave: { type: "string" },
      bgmVolume: { type: "string" },
      bgsVolume: { type: "string" },
      buffAdd: {
        type: "string"
      },
      buffRemove: { type: "string" },
      commandRemember: { type: "string" },
      counterAttack: { type: "string" },
      criticalToActor: { type: "string" },
      criticalToEnemy: { type: "string" },
      debuffAdd: {
        type: "string"
      },
      defeat: { type: "string" },
      emerge: { type: "string" },
      enemyDamage: { type: "string" },
      enemyDrain: { type: "string" },
      enemyGain: { type: "string" },
      enemyLoss: { type: "string" },
      enemyNoDamage: { type: "string" },
      enemyNoHit: { type: "string" },
      enemyRecovery: { type: "string" },
      escapeFailure: { type: "string" },
      escapeStart: { type: "string" },
      evasion: { type: "string" },
      expNext: {
        type: "string"
      },
      expTotal: { type: "string" },
      file: { type: "string" },
      levelUp: { type: "string" },
      loadMessage: { type: "string" },
      magicEvasion: { type: "string" },
      magicReflection: { type: "string" },
      meVolume: { type: "string" },
      obtainExp: { type: "string" },
      obtainGold: { type: "string" },
      obtainItem: { type: "string" },
      obtainSkill: { type: "string" },
      partyName: { type: "string" },
      possession: {
        type: "string"
      },
      preemptive: { type: "string" },
      saveMessage: { type: "string" },
      seVolume: { type: "string" },
      substitute: { type: "string" },
      surprise: { type: "string" },
      touchUI: { type: "string" },
      useItem: {
        type: "string"
      },
      victory: { type: "string" }
    }
  }, W = Object.prototype.hasOwnProperty, q = function() {
    if (L) return O;
    function i(r) {
      const X = r.length;
      let D, Y = 0, m = 0;
      for (; m < X; ) Y++, D = r.charCodeAt(m++), D >= 55296 && D <= 56319 && m < X && (D = r.charCodeAt(m), (64512 & D) == 56320 && m++);
      return Y;
    }
    return L = 1, Object.defineProperty(O, "__esModule", { value: !0 }), O.default = i, i.code = 'require("ajv/dist/runtime/ucs2length").default', O;
  }().default;
  function s(i, { instancePath: r = "", parentData: X, parentDataProperty: D, rootData: Y = i } = {}) {
    if (!i || typeof i != "object" || Array.isArray(i)) return s.errors = [{ instancePath: r, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], !1;
    {
      let h;
      if (i.gameTitle === void 0 && (h = "gameTitle") || i.currencyUnit === void 0 && (h = "currencyUnit") || i.terms === void 0 && (h = "terms") || i.ship === void 0 && (h = "ship") || i.boat === void 0 && (h = "boat") || i.airship === void 0 && (h = "airship") || i.advanced === void 0 && (h = "advanced") || i.titleBgm === void 0 && (h = "titleBgm") || i.battleBgm === void 0 && (h = "battleBgm") || i.gameoverMe === void 0 && (h = "gameoverMe") || i.victoryMe === void 0 && (h = "victoryMe") || i.defeatMe === void 0 && (h = "defeatMe") || i.attackMotions === void 0 && (h = "attackMotions") || i.optAutosave === void 0 && (h = "optAutosave") || i.optDisplayTp === void 0 && (h = "optDisplayTp") || i.optFloorDeath === void 0 && (h = "optFloorDeath") || i.optFollowers === void 0 && (h = "optFollowers") || i.optKeyItemsNumber === void 0 && (h = "optKeyItemsNumber") || i.optSideView === void 0 && (h = "optSideView") || i.optSlipDeath === void 0 && (h = "optSlipDeath") || i.optTransparent === void 0 && (h = "optTransparent") || i.optSplashScreen === void 0 && (h = "optSplashScreen") || i.optDrawTitle === void 0 && (h = "optDrawTitle") || i.optExtraExp === void 0 && (h = "optExtraExp") || i.optMessageSkip === void 0 && (h = "optMessageSkip") || i.startMapId === void 0 && (h = "startMapId") || i.startX === void 0 && (h = "startX") || i.startY === void 0 && (h = "startY") || i.faceSize === void 0 && (h = "faceSize") || i.tileSize === void 0 && (h = "tileSize") || i.iconSize === void 0 && (h = "iconSize") || i.battleSystem === void 0 && (h = "battleSystem") || i.elements === void 0 && (h = "elements") || i.weaponTypes === void 0 && (h = "weaponTypes") || i.armorTypes === void 0 && (h = "armorTypes") || i.equipTypes === void 0 && (h = "equipTypes") || i.skillTypes === void 0 && (h = "skillTypes") || i.switches === void 0 && (h = "switches") || i.variables === void 0 && (h = "variables") || i.magicSkills === void 0 && (h = "magicSkills") || i.battleback1Name === void 0 && (h = "battleback1Name") || i.battleback2Name === void 0 && (h = "battleback2Name") || i.testTroopId === void 0 && (h = "testTroopId") || i.partyMembersArray === void 0 && (h = "partyMembersArray") || i.editor === void 0 && (h = "editor") || i.testBattlers === void 0 && (h = "testBattlers") || i.editMapId === void 0 && (h = "editMapId") || i.battlerHue === void 0 && (h = "battlerHue") || i.battlerName === void 0 && (h = "battlerName") || i.sounds === void 0 && (h = "sounds") || i.title1Name === void 0 && (h = "title1Name") || i.title2Name === void 0 && (h = "title2Name") || i.versionId === void 0 && (h = "versionId") || i.locale === void 0 && (h = "locale") || i.windowTone === void 0 && (h = "windowTone")) return s.errors = [{
        instancePath: r,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: h },
        message: "must have required property '" + h + "'"
      }], !1;
      if (i.gameTitle !== void 0) {
        if (typeof i.gameTitle != "string") return s.errors = [{
          instancePath: r + "/gameTitle",
          schemaPath: "#/properties/gameTitle/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string"
        }], !1;
        var m = !0;
      } else m = !0;
      if (m) {
        if (i.currencyUnit !== void 0) {
          if (typeof i.currencyUnit != "string") return s.errors = [{
            instancePath: r + "/currencyUnit",
            schemaPath: "#/properties/currencyUnit/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], !1;
          m = !0;
        } else m = !0;
        if (m) {
          if (i.editor !== void 0) {
            let t = i.editor;
            const c = 0;
            if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
              instancePath: r + "/editor",
              schemaPath: "#/$defs/Editor/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], !1;
            {
              let p;
              if (t.messageWidth1 === void 0 && (p = "messageWidth1") || t.messageWidth2 === void 0 && (p = "messageWidth2") || t.jsonFormatLevel === void 0 && (p = "jsonFormatLevel")) return s.errors = [{
                instancePath: r + "/editor",
                schemaPath: "#/$defs/Editor/required",
                keyword: "required",
                params: { missingProperty: p },
                message: "must have required property '" + p + "'"
              }], !1;
              for (const e in t) if (e !== "messageWidth1" && e !== "messageWidth2" && e !== "jsonFormatLevel") return s.errors = [{
                instancePath: r + "/editor",
                schemaPath: "#/$defs/Editor/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: e },
                message: "must NOT have additional properties"
              }], !1;
              if (t.messageWidth1 !== void 0) {
                let e = t.messageWidth1;
                const o = 0;
                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                  instancePath: r + "/editor/messageWidth1",
                  schemaPath: "#/$defs/Editor/properties/messageWidth1/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], !1;
                if (typeof e == "number" && isFinite(e)) {
                  if (e > 1e3 || isNaN(e)) return s.errors = [{
                    instancePath: r + "/editor/messageWidth1",
                    schemaPath: "#/$defs/Editor/properties/messageWidth1/maximum",
                    keyword: "maximum",
                    params: { comparison: "<=", limit: 1e3 },
                    message: "must be <= 1000"
                  }], !1;
                  if (e < 0 || isNaN(e)) return s.errors = [{ instancePath: r + "/editor/messageWidth1", schemaPath: "#/$defs/Editor/properties/messageWidth1/minimum", keyword: "minimum", params: {
                    comparison: ">=",
                    limit: 0
                  }, message: "must be >= 0" }], !1;
                }
                var V = o === 0;
              } else V = !0;
              if (V) {
                if (t.messageWidth2 !== void 0) {
                  let e = t.messageWidth2;
                  const o = 0;
                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                    instancePath: r + "/editor/messageWidth2",
                    schemaPath: "#/$defs/Editor/properties/messageWidth2/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  if (typeof e == "number" && isFinite(e)) {
                    if (e > 1e3 || isNaN(e)) return s.errors = [{
                      instancePath: r + "/editor/messageWidth2",
                      schemaPath: "#/$defs/Editor/properties/messageWidth2/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 1e3 },
                      message: "must be <= 1000"
                    }], !1;
                    if (e < 0 || isNaN(e)) return s.errors = [{ instancePath: r + "/editor/messageWidth2", schemaPath: "#/$defs/Editor/properties/messageWidth2/minimum", keyword: "minimum", params: {
                      comparison: ">=",
                      limit: 0
                    }, message: "must be >= 0" }], !1;
                  }
                  V = o === 0;
                } else V = !0;
                if (V) if (t.jsonFormatLevel !== void 0) {
                  let e = t.jsonFormatLevel;
                  const o = 0;
                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                    instancePath: r + "/editor/jsonFormatLevel",
                    schemaPath: "#/$defs/Editor/properties/jsonFormatLevel/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], !1;
                  if (typeof e == "number" && isFinite(e)) {
                    if (e > 4 || isNaN(e)) return s.errors = [{
                      instancePath: r + "/editor/jsonFormatLevel",
                      schemaPath: "#/$defs/Editor/properties/jsonFormatLevel/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 4 },
                      message: "must be <= 4"
                    }], !1;
                    if (e < 0 || isNaN(e)) return s.errors = [{ instancePath: r + "/editor/jsonFormatLevel", schemaPath: "#/$defs/Editor/properties/jsonFormatLevel/minimum", keyword: "minimum", params: {
                      comparison: ">=",
                      limit: 0
                    }, message: "must be >= 0" }], !1;
                  }
                  V = o === 0;
                } else V = !0;
              }
            }
            m = c === 0;
          } else m = !0;
          if (m) {
            if (i.advanced !== void 0) {
              let t = i.advanced;
              const c = 0;
              if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                instancePath: r + "/advanced",
                schemaPath: "#/$defs/Advanced/type",
                keyword: "type",
                params: { type: "object" },
                message: "must be object"
              }], !1;
              {
                let p;
                if (t.gameId === void 0 && (p = "gameId") || t.screenWidth === void 0 && (p = "screenWidth") || t.screenHeight === void 0 && (p = "screenHeight") || t.uiAreaWidth === void 0 && (p = "uiAreaWidth") || t.uiAreaHeight === void 0 && (p = "uiAreaHeight") || t.windowOpacity === void 0 && (p = "windowOpacity") || t.screenScale === void 0 && (p = "screenScale") || t.numberFontFilename === void 0 && (p = "numberFontFilename") || t.mainFontFilename === void 0 && (p = "mainFontFilename") || t.fallbackFonts === void 0 && (p = "fallbackFonts") || t.fontSize === void 0 && (p = "fontSize")) return s.errors = [{
                  instancePath: r + "/advanced",
                  schemaPath: "#/$defs/Advanced/required",
                  keyword: "required",
                  params: { missingProperty: p },
                  message: "must have required property '" + p + "'"
                }], !1;
                for (const e in t) if (!W.call(M.properties, e)) return s.errors = [{ instancePath: r + "/advanced", schemaPath: "#/$defs/Advanced/additionalProperties", keyword: "additionalProperties", params: {
                  additionalProperty: e
                }, message: "must NOT have additional properties" }], !1;
                if (t.gameId !== void 0) {
                  let e = t.gameId;
                  const o = 0;
                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{ instancePath: r + "/advanced/gameId", schemaPath: "#/$defs/Advanced/properties/gameId/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], !1;
                  var u = o === 0;
                } else u = !0;
                if (u) {
                  if (t.screenWidth !== void 0) {
                    let e = t.screenWidth;
                    const o = 0;
                    if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                      instancePath: r + "/advanced/screenWidth",
                      schemaPath: "#/$defs/Advanced/properties/screenWidth/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], !1;
                    u = o === 0;
                  } else u = !0;
                  if (u) {
                    if (t.screenHeight !== void 0) {
                      let e = t.screenHeight;
                      const o = 0;
                      if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                        instancePath: r + "/advanced/screenHeight",
                        schemaPath: "#/$defs/Advanced/properties/screenHeight/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], !1;
                      u = o === 0;
                    } else u = !0;
                    if (u) {
                      if (t.uiAreaWidth !== void 0) {
                        let e = t.uiAreaWidth;
                        const o = 0;
                        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                          instancePath: r + "/advanced/uiAreaWidth",
                          schemaPath: "#/$defs/Advanced/properties/uiAreaWidth/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        u = o === 0;
                      } else u = !0;
                      if (u) {
                        if (t.uiAreaHeight !== void 0) {
                          let e = t.uiAreaHeight;
                          const o = 0;
                          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                            instancePath: r + "/advanced/uiAreaHeight",
                            schemaPath: "#/$defs/Advanced/properties/uiAreaHeight/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          u = o === 0;
                        } else u = !0;
                        if (u) {
                          if (t.windowOpacity !== void 0) {
                            let e = t.windowOpacity;
                            const o = 0;
                            if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                              instancePath: r + "/advanced/windowOpacity",
                              schemaPath: "#/$defs/Advanced/properties/windowOpacity/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            u = o === 0;
                          } else u = !0;
                          if (u) {
                            if (t.screenScale !== void 0) {
                              let e = t.screenScale;
                              const o = 0;
                              if (typeof e != "number" || !isFinite(e)) return s.errors = [{ instancePath: r + "/advanced/screenScale", schemaPath: "#/$defs/Advanced/properties/screenScale/type", keyword: "type", params: {
                                type: "number"
                              }, message: "must be number" }], !1;
                              u = o === 0;
                            } else u = !0;
                            if (u) {
                              if (t.numberFontFilename !== void 0) {
                                if (typeof t.numberFontFilename != "string") return s.errors = [{
                                  instancePath: r + "/advanced/numberFontFilename",
                                  schemaPath: "#/$defs/Advanced/properties/numberFontFilename/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string"
                                }], !1;
                                u = !0;
                              } else u = !0;
                              if (u) {
                                if (t.mainFontFilename !== void 0) {
                                  if (typeof t.mainFontFilename != "string") return s.errors = [{
                                    instancePath: r + "/advanced/mainFontFilename",
                                    schemaPath: "#/$defs/Advanced/properties/mainFontFilename/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], !1;
                                  u = !0;
                                } else u = !0;
                                if (u) {
                                  if (t.fallbackFonts !== void 0) {
                                    if (typeof t.fallbackFonts != "string") return s.errors = [{
                                      instancePath: r + "/advanced/fallbackFonts",
                                      schemaPath: "#/$defs/Advanced/properties/fallbackFonts/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string"
                                    }], !1;
                                    u = !0;
                                  } else u = !0;
                                  if (u) if (t.fontSize !== void 0) {
                                    let e = t.fontSize;
                                    const o = 0;
                                    if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                      instancePath: r + "/advanced/fontSize",
                                      schemaPath: "#/$defs/Advanced/properties/fontSize/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], !1;
                                    u = o === 0;
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
              m = c === 0;
            } else m = !0;
            if (m) {
              if (i.attackMotions !== void 0) {
                let t = i.attackMotions;
                const c = 0;
                if (!Array.isArray(t)) return s.errors = [{
                  instancePath: r + "/attackMotions",
                  schemaPath: "#/properties/attackMotions/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], !1;
                {
                  const p = t.length;
                  for (let e = 0; e < p; e++) {
                    let o = t[e];
                    const d = 0;
                    if (!o || typeof o != "object" || Array.isArray(o)) return s.errors = [{
                      instancePath: r + "/attackMotions/" + e,
                      schemaPath: "#/$defs/AttackMotion/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object"
                    }], !1;
                    {
                      let a;
                      if (o.type === void 0 && (a = "type") || o.weaponImageId === void 0 && (a = "weaponImageId")) return s.errors = [{
                        instancePath: r + "/attackMotions/" + e,
                        schemaPath: "#/$defs/AttackMotion/required",
                        keyword: "required",
                        params: { missingProperty: a },
                        message: "must have required property '" + a + "'"
                      }], !1;
                      for (const y in o) if (y !== "type" && y !== "weaponImageId") return s.errors = [{
                        instancePath: r + "/attackMotions/" + e,
                        schemaPath: "#/$defs/AttackMotion/additionalProperties",
                        keyword: "additionalProperties",
                        params: { additionalProperty: y },
                        message: "must NOT have additional properties"
                      }], !1;
                      if (o.type !== void 0) {
                        let y = o.type;
                        const g = 0;
                        if (typeof y != "number" || !isFinite(y)) return s.errors = [{ instancePath: r + "/attackMotions/" + e + "/type", schemaPath: "#/$defs/AttackMotion/properties/type/type", keyword: "type", params: {
                          type: "number"
                        }, message: "must be number" }], !1;
                        var j = g === 0;
                      } else j = !0;
                      if (j) if (o.weaponImageId !== void 0) {
                        let y = o.weaponImageId;
                        const g = 0;
                        if (typeof y != "number" || !isFinite(y)) return s.errors = [{
                          instancePath: r + "/attackMotions/" + e + "/weaponImageId",
                          schemaPath: "#/$defs/AttackMotion/properties/weaponImageId/type",
                          keyword: "type",
                          params: { type: "number" },
                          message: "must be number"
                        }], !1;
                        j = g === 0;
                      } else j = !0;
                    }
                    if (d !== 0) break;
                  }
                }
                m = c === 0;
              } else m = !0;
              if (m) {
                if (i.titleBgm !== void 0) {
                  let t = i.titleBgm;
                  const c = 0;
                  if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                    instancePath: r + "/titleBgm",
                    schemaPath: "#/$defs/Audio/type",
                    keyword: "type",
                    params: { type: "object" },
                    message: "must be object"
                  }], !1;
                  {
                    let p;
                    if (t.name === void 0 && (p = "name") || t.volume === void 0 && (p = "volume") || t.pitch === void 0 && (p = "pitch") || t.pan === void 0 && (p = "pan")) return s.errors = [{
                      instancePath: r + "/titleBgm",
                      schemaPath: "#/$defs/Audio/required",
                      keyword: "required",
                      params: { missingProperty: p },
                      message: "must have required property '" + p + "'"
                    }], !1;
                    for (const e in t) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
                      instancePath: r + "/titleBgm",
                      schemaPath: "#/$defs/Audio/additionalProperties",
                      keyword: "additionalProperties",
                      params: { additionalProperty: e },
                      message: "must NOT have additional properties"
                    }], !1;
                    if (t.name !== void 0) {
                      if (typeof t.name != "string") return s.errors = [{
                        instancePath: r + "/titleBgm/name",
                        schemaPath: "#/$defs/Audio/properties/name/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], !1;
                      var v = !0;
                    } else v = !0;
                    if (v) {
                      if (t.volume !== void 0) {
                        let e = t.volume;
                        const o = 0;
                        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                          instancePath: r + "/titleBgm/volume",
                          schemaPath: "#/$defs/Audio/properties/volume/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], !1;
                        if (typeof e == "number" && isFinite(e)) {
                          if (e > 100 || isNaN(e)) return s.errors = [{
                            instancePath: r + "/titleBgm/volume",
                            schemaPath: "#/$defs/Audio/properties/volume/maximum",
                            keyword: "maximum",
                            params: { comparison: "<=", limit: 100 },
                            message: "must be <= 100"
                          }], !1;
                          if (e < 0 || isNaN(e)) return s.errors = [{
                            instancePath: r + "/titleBgm/volume",
                            schemaPath: "#/$defs/Audio/properties/volume/minimum",
                            keyword: "minimum",
                            params: { comparison: ">=", limit: 0 },
                            message: "must be >= 0"
                          }], !1;
                        }
                        v = o === 0;
                      } else v = !0;
                      if (v) {
                        if (t.pitch !== void 0) {
                          let e = t.pitch;
                          const o = 0;
                          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                            instancePath: r + "/titleBgm/pitch",
                            schemaPath: "#/$defs/Audio/properties/pitch/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (typeof e == "number" && isFinite(e)) {
                            if (e > 150 || isNaN(e)) return s.errors = [{
                              instancePath: r + "/titleBgm/pitch",
                              schemaPath: "#/$defs/Audio/properties/pitch/maximum",
                              keyword: "maximum",
                              params: { comparison: "<=", limit: 150 },
                              message: "must be <= 150"
                            }], !1;
                            if (e < 50 || isNaN(e)) return s.errors = [{
                              instancePath: r + "/titleBgm/pitch",
                              schemaPath: "#/$defs/Audio/properties/pitch/minimum",
                              keyword: "minimum",
                              params: { comparison: ">=", limit: 50 },
                              message: "must be >= 50"
                            }], !1;
                          }
                          v = o === 0;
                        } else v = !0;
                        if (v) if (t.pan !== void 0) {
                          let e = t.pan;
                          const o = 0;
                          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                            instancePath: r + "/titleBgm/pan",
                            schemaPath: "#/$defs/Audio/properties/pan/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (typeof e == "number" && isFinite(e)) {
                            if (e > 100 || isNaN(e)) return s.errors = [{
                              instancePath: r + "/titleBgm/pan",
                              schemaPath: "#/$defs/Audio/properties/pan/maximum",
                              keyword: "maximum",
                              params: { comparison: "<=", limit: 100 },
                              message: "must be <= 100"
                            }], !1;
                            if (e < -100 || isNaN(e)) return s.errors = [{ instancePath: r + "/titleBgm/pan", schemaPath: "#/$defs/Audio/properties/pan/minimum", keyword: "minimum", params: {
                              comparison: ">=",
                              limit: -100
                            }, message: "must be >= -100" }], !1;
                          }
                          v = o === 0;
                        } else v = !0;
                      }
                    }
                  }
                  m = c === 0;
                } else m = !0;
                if (m) {
                  if (i.battleBgm !== void 0) {
                    let t = i.battleBgm;
                    const c = 0;
                    if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                      instancePath: r + "/battleBgm",
                      schemaPath: "#/$defs/Audio/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object"
                    }], !1;
                    {
                      let p;
                      if (t.name === void 0 && (p = "name") || t.volume === void 0 && (p = "volume") || t.pitch === void 0 && (p = "pitch") || t.pan === void 0 && (p = "pan")) return s.errors = [{
                        instancePath: r + "/battleBgm",
                        schemaPath: "#/$defs/Audio/required",
                        keyword: "required",
                        params: { missingProperty: p },
                        message: "must have required property '" + p + "'"
                      }], !1;
                      for (const e in t) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
                        instancePath: r + "/battleBgm",
                        schemaPath: "#/$defs/Audio/additionalProperties",
                        keyword: "additionalProperties",
                        params: { additionalProperty: e },
                        message: "must NOT have additional properties"
                      }], !1;
                      if (t.name !== void 0) {
                        if (typeof t.name != "string") return s.errors = [{
                          instancePath: r + "/battleBgm/name",
                          schemaPath: "#/$defs/Audio/properties/name/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string"
                        }], !1;
                        var w = !0;
                      } else w = !0;
                      if (w) {
                        if (t.volume !== void 0) {
                          let e = t.volume;
                          const o = 0;
                          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                            instancePath: r + "/battleBgm/volume",
                            schemaPath: "#/$defs/Audio/properties/volume/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], !1;
                          if (typeof e == "number" && isFinite(e)) {
                            if (e > 100 || isNaN(e)) return s.errors = [{
                              instancePath: r + "/battleBgm/volume",
                              schemaPath: "#/$defs/Audio/properties/volume/maximum",
                              keyword: "maximum",
                              params: { comparison: "<=", limit: 100 },
                              message: "must be <= 100"
                            }], !1;
                            if (e < 0 || isNaN(e)) return s.errors = [{
                              instancePath: r + "/battleBgm/volume",
                              schemaPath: "#/$defs/Audio/properties/volume/minimum",
                              keyword: "minimum",
                              params: { comparison: ">=", limit: 0 },
                              message: "must be >= 0"
                            }], !1;
                          }
                          w = o === 0;
                        } else w = !0;
                        if (w) {
                          if (t.pitch !== void 0) {
                            let e = t.pitch;
                            const o = 0;
                            if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                              instancePath: r + "/battleBgm/pitch",
                              schemaPath: "#/$defs/Audio/properties/pitch/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            if (typeof e == "number" && isFinite(e)) {
                              if (e > 150 || isNaN(e)) return s.errors = [{
                                instancePath: r + "/battleBgm/pitch",
                                schemaPath: "#/$defs/Audio/properties/pitch/maximum",
                                keyword: "maximum",
                                params: { comparison: "<=", limit: 150 },
                                message: "must be <= 150"
                              }], !1;
                              if (e < 50 || isNaN(e)) return s.errors = [{
                                instancePath: r + "/battleBgm/pitch",
                                schemaPath: "#/$defs/Audio/properties/pitch/minimum",
                                keyword: "minimum",
                                params: { comparison: ">=", limit: 50 },
                                message: "must be >= 50"
                              }], !1;
                            }
                            w = o === 0;
                          } else w = !0;
                          if (w) if (t.pan !== void 0) {
                            let e = t.pan;
                            const o = 0;
                            if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                              instancePath: r + "/battleBgm/pan",
                              schemaPath: "#/$defs/Audio/properties/pan/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            if (typeof e == "number" && isFinite(e)) {
                              if (e > 100 || isNaN(e)) return s.errors = [{
                                instancePath: r + "/battleBgm/pan",
                                schemaPath: "#/$defs/Audio/properties/pan/maximum",
                                keyword: "maximum",
                                params: { comparison: "<=", limit: 100 },
                                message: "must be <= 100"
                              }], !1;
                              if (e < -100 || isNaN(e)) return s.errors = [{ instancePath: r + "/battleBgm/pan", schemaPath: "#/$defs/Audio/properties/pan/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: -100
                              }, message: "must be >= -100" }], !1;
                            }
                            w = o === 0;
                          } else w = !0;
                        }
                      }
                    }
                    m = c === 0;
                  } else m = !0;
                  if (m) {
                    if (i.gameoverMe !== void 0) {
                      let t = i.gameoverMe;
                      const c = 0;
                      if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                        instancePath: r + "/gameoverMe",
                        schemaPath: "#/$defs/Audio/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], !1;
                      {
                        let p;
                        if (t.name === void 0 && (p = "name") || t.volume === void 0 && (p = "volume") || t.pitch === void 0 && (p = "pitch") || t.pan === void 0 && (p = "pan")) return s.errors = [{
                          instancePath: r + "/gameoverMe",
                          schemaPath: "#/$defs/Audio/required",
                          keyword: "required",
                          params: { missingProperty: p },
                          message: "must have required property '" + p + "'"
                        }], !1;
                        for (const e in t) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
                          instancePath: r + "/gameoverMe",
                          schemaPath: "#/$defs/Audio/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: e },
                          message: "must NOT have additional properties"
                        }], !1;
                        if (t.name !== void 0) {
                          if (typeof t.name != "string") return s.errors = [{
                            instancePath: r + "/gameoverMe/name",
                            schemaPath: "#/$defs/Audio/properties/name/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string"
                          }], !1;
                          var k = !0;
                        } else k = !0;
                        if (k) {
                          if (t.volume !== void 0) {
                            let e = t.volume;
                            const o = 0;
                            if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                              instancePath: r + "/gameoverMe/volume",
                              schemaPath: "#/$defs/Audio/properties/volume/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], !1;
                            if (typeof e == "number" && isFinite(e)) {
                              if (e > 100 || isNaN(e)) return s.errors = [{
                                instancePath: r + "/gameoverMe/volume",
                                schemaPath: "#/$defs/Audio/properties/volume/maximum",
                                keyword: "maximum",
                                params: { comparison: "<=", limit: 100 },
                                message: "must be <= 100"
                              }], !1;
                              if (e < 0 || isNaN(e)) return s.errors = [{
                                instancePath: r + "/gameoverMe/volume",
                                schemaPath: "#/$defs/Audio/properties/volume/minimum",
                                keyword: "minimum",
                                params: { comparison: ">=", limit: 0 },
                                message: "must be >= 0"
                              }], !1;
                            }
                            k = o === 0;
                          } else k = !0;
                          if (k) {
                            if (t.pitch !== void 0) {
                              let e = t.pitch;
                              const o = 0;
                              if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                instancePath: r + "/gameoverMe/pitch",
                                schemaPath: "#/$defs/Audio/properties/pitch/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              if (typeof e == "number" && isFinite(e)) {
                                if (e > 150 || isNaN(e)) return s.errors = [{
                                  instancePath: r + "/gameoverMe/pitch",
                                  schemaPath: "#/$defs/Audio/properties/pitch/maximum",
                                  keyword: "maximum",
                                  params: { comparison: "<=", limit: 150 },
                                  message: "must be <= 150"
                                }], !1;
                                if (e < 50 || isNaN(e)) return s.errors = [{
                                  instancePath: r + "/gameoverMe/pitch",
                                  schemaPath: "#/$defs/Audio/properties/pitch/minimum",
                                  keyword: "minimum",
                                  params: { comparison: ">=", limit: 50 },
                                  message: "must be >= 50"
                                }], !1;
                              }
                              k = o === 0;
                            } else k = !0;
                            if (k) if (t.pan !== void 0) {
                              let e = t.pan;
                              const o = 0;
                              if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                instancePath: r + "/gameoverMe/pan",
                                schemaPath: "#/$defs/Audio/properties/pan/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              if (typeof e == "number" && isFinite(e)) {
                                if (e > 100 || isNaN(e)) return s.errors = [{
                                  instancePath: r + "/gameoverMe/pan",
                                  schemaPath: "#/$defs/Audio/properties/pan/maximum",
                                  keyword: "maximum",
                                  params: { comparison: "<=", limit: 100 },
                                  message: "must be <= 100"
                                }], !1;
                                if (e < -100 || isNaN(e)) return s.errors = [{ instancePath: r + "/gameoverMe/pan", schemaPath: "#/$defs/Audio/properties/pan/minimum", keyword: "minimum", params: {
                                  comparison: ">=",
                                  limit: -100
                                }, message: "must be >= -100" }], !1;
                              }
                              k = o === 0;
                            } else k = !0;
                          }
                        }
                      }
                      m = c === 0;
                    } else m = !0;
                    if (m) {
                      if (i.victoryMe !== void 0) {
                        let t = i.victoryMe;
                        const c = 0;
                        if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                          instancePath: r + "/victoryMe",
                          schemaPath: "#/$defs/Audio/type",
                          keyword: "type",
                          params: { type: "object" },
                          message: "must be object"
                        }], !1;
                        {
                          let p;
                          if (t.name === void 0 && (p = "name") || t.volume === void 0 && (p = "volume") || t.pitch === void 0 && (p = "pitch") || t.pan === void 0 && (p = "pan")) return s.errors = [{
                            instancePath: r + "/victoryMe",
                            schemaPath: "#/$defs/Audio/required",
                            keyword: "required",
                            params: { missingProperty: p },
                            message: "must have required property '" + p + "'"
                          }], !1;
                          for (const e in t) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
                            instancePath: r + "/victoryMe",
                            schemaPath: "#/$defs/Audio/additionalProperties",
                            keyword: "additionalProperties",
                            params: { additionalProperty: e },
                            message: "must NOT have additional properties"
                          }], !1;
                          if (t.name !== void 0) {
                            if (typeof t.name != "string") return s.errors = [{
                              instancePath: r + "/victoryMe/name",
                              schemaPath: "#/$defs/Audio/properties/name/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], !1;
                            var N = !0;
                          } else N = !0;
                          if (N) {
                            if (t.volume !== void 0) {
                              let e = t.volume;
                              const o = 0;
                              if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                instancePath: r + "/victoryMe/volume",
                                schemaPath: "#/$defs/Audio/properties/volume/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], !1;
                              if (typeof e == "number" && isFinite(e)) {
                                if (e > 100 || isNaN(e)) return s.errors = [{
                                  instancePath: r + "/victoryMe/volume",
                                  schemaPath: "#/$defs/Audio/properties/volume/maximum",
                                  keyword: "maximum",
                                  params: { comparison: "<=", limit: 100 },
                                  message: "must be <= 100"
                                }], !1;
                                if (e < 0 || isNaN(e)) return s.errors = [{
                                  instancePath: r + "/victoryMe/volume",
                                  schemaPath: "#/$defs/Audio/properties/volume/minimum",
                                  keyword: "minimum",
                                  params: { comparison: ">=", limit: 0 },
                                  message: "must be >= 0"
                                }], !1;
                              }
                              N = o === 0;
                            } else N = !0;
                            if (N) {
                              if (t.pitch !== void 0) {
                                let e = t.pitch;
                                const o = 0;
                                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                  instancePath: r + "/victoryMe/pitch",
                                  schemaPath: "#/$defs/Audio/properties/pitch/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (typeof e == "number" && isFinite(e)) {
                                  if (e > 150 || isNaN(e)) return s.errors = [{
                                    instancePath: r + "/victoryMe/pitch",
                                    schemaPath: "#/$defs/Audio/properties/pitch/maximum",
                                    keyword: "maximum",
                                    params: { comparison: "<=", limit: 150 },
                                    message: "must be <= 150"
                                  }], !1;
                                  if (e < 50 || isNaN(e)) return s.errors = [{
                                    instancePath: r + "/victoryMe/pitch",
                                    schemaPath: "#/$defs/Audio/properties/pitch/minimum",
                                    keyword: "minimum",
                                    params: { comparison: ">=", limit: 50 },
                                    message: "must be >= 50"
                                  }], !1;
                                }
                                N = o === 0;
                              } else N = !0;
                              if (N) if (t.pan !== void 0) {
                                let e = t.pan;
                                const o = 0;
                                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                  instancePath: r + "/victoryMe/pan",
                                  schemaPath: "#/$defs/Audio/properties/pan/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (typeof e == "number" && isFinite(e)) {
                                  if (e > 100 || isNaN(e)) return s.errors = [{
                                    instancePath: r + "/victoryMe/pan",
                                    schemaPath: "#/$defs/Audio/properties/pan/maximum",
                                    keyword: "maximum",
                                    params: { comparison: "<=", limit: 100 },
                                    message: "must be <= 100"
                                  }], !1;
                                  if (e < -100 || isNaN(e)) return s.errors = [{ instancePath: r + "/victoryMe/pan", schemaPath: "#/$defs/Audio/properties/pan/minimum", keyword: "minimum", params: {
                                    comparison: ">=",
                                    limit: -100
                                  }, message: "must be >= -100" }], !1;
                                }
                                N = o === 0;
                              } else N = !0;
                            }
                          }
                        }
                        m = c === 0;
                      } else m = !0;
                      if (m) {
                        if (i.defeatMe !== void 0) {
                          let t = i.defeatMe;
                          const c = 0;
                          if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                            instancePath: r + "/defeatMe",
                            schemaPath: "#/$defs/Audio/type",
                            keyword: "type",
                            params: { type: "object" },
                            message: "must be object"
                          }], !1;
                          {
                            let p;
                            if (t.name === void 0 && (p = "name") || t.volume === void 0 && (p = "volume") || t.pitch === void 0 && (p = "pitch") || t.pan === void 0 && (p = "pan")) return s.errors = [{
                              instancePath: r + "/defeatMe",
                              schemaPath: "#/$defs/Audio/required",
                              keyword: "required",
                              params: { missingProperty: p },
                              message: "must have required property '" + p + "'"
                            }], !1;
                            for (const e in t) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
                              instancePath: r + "/defeatMe",
                              schemaPath: "#/$defs/Audio/additionalProperties",
                              keyword: "additionalProperties",
                              params: { additionalProperty: e },
                              message: "must NOT have additional properties"
                            }], !1;
                            if (t.name !== void 0) {
                              if (typeof t.name != "string") return s.errors = [{
                                instancePath: r + "/defeatMe/name",
                                schemaPath: "#/$defs/Audio/properties/name/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string"
                              }], !1;
                              var $ = !0;
                            } else $ = !0;
                            if ($) {
                              if (t.volume !== void 0) {
                                let e = t.volume;
                                const o = 0;
                                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                  instancePath: r + "/defeatMe/volume",
                                  schemaPath: "#/$defs/Audio/properties/volume/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], !1;
                                if (typeof e == "number" && isFinite(e)) {
                                  if (e > 100 || isNaN(e)) return s.errors = [{
                                    instancePath: r + "/defeatMe/volume",
                                    schemaPath: "#/$defs/Audio/properties/volume/maximum",
                                    keyword: "maximum",
                                    params: { comparison: "<=", limit: 100 },
                                    message: "must be <= 100"
                                  }], !1;
                                  if (e < 0 || isNaN(e)) return s.errors = [{
                                    instancePath: r + "/defeatMe/volume",
                                    schemaPath: "#/$defs/Audio/properties/volume/minimum",
                                    keyword: "minimum",
                                    params: { comparison: ">=", limit: 0 },
                                    message: "must be >= 0"
                                  }], !1;
                                }
                                $ = o === 0;
                              } else $ = !0;
                              if ($) {
                                if (t.pitch !== void 0) {
                                  let e = t.pitch;
                                  const o = 0;
                                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                    instancePath: r + "/defeatMe/pitch",
                                    schemaPath: "#/$defs/Audio/properties/pitch/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  if (typeof e == "number" && isFinite(e)) {
                                    if (e > 150 || isNaN(e)) return s.errors = [{
                                      instancePath: r + "/defeatMe/pitch",
                                      schemaPath: "#/$defs/Audio/properties/pitch/maximum",
                                      keyword: "maximum",
                                      params: { comparison: "<=", limit: 150 },
                                      message: "must be <= 150"
                                    }], !1;
                                    if (e < 50 || isNaN(e)) return s.errors = [{
                                      instancePath: r + "/defeatMe/pitch",
                                      schemaPath: "#/$defs/Audio/properties/pitch/minimum",
                                      keyword: "minimum",
                                      params: { comparison: ">=", limit: 50 },
                                      message: "must be >= 50"
                                    }], !1;
                                  }
                                  $ = o === 0;
                                } else $ = !0;
                                if ($) if (t.pan !== void 0) {
                                  let e = t.pan;
                                  const o = 0;
                                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                    instancePath: r + "/defeatMe/pan",
                                    schemaPath: "#/$defs/Audio/properties/pan/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], !1;
                                  if (typeof e == "number" && isFinite(e)) {
                                    if (e > 100 || isNaN(e)) return s.errors = [{
                                      instancePath: r + "/defeatMe/pan",
                                      schemaPath: "#/$defs/Audio/properties/pan/maximum",
                                      keyword: "maximum",
                                      params: { comparison: "<=", limit: 100 },
                                      message: "must be <= 100"
                                    }], !1;
                                    if (e < -100 || isNaN(e)) return s.errors = [{ instancePath: r + "/defeatMe/pan", schemaPath: "#/$defs/Audio/properties/pan/minimum", keyword: "minimum", params: {
                                      comparison: ">=",
                                      limit: -100
                                    }, message: "must be >= -100" }], !1;
                                  }
                                  $ = o === 0;
                                } else $ = !0;
                              }
                            }
                          }
                          m = c === 0;
                        } else m = !0;
                        if (m) {
                          if (i.sounds !== void 0) {
                            let t = i.sounds;
                            const c = 0;
                            if (!Array.isArray(t)) return s.errors = [{ instancePath: r + "/sounds", schemaPath: "#/properties/sounds/type", keyword: "type", params: { type: "array" }, message: "must be array" }], !1;
                            if (t.length > 24) return s.errors = [{
                              instancePath: r + "/sounds",
                              schemaPath: "#/properties/sounds/maxItems",
                              keyword: "maxItems",
                              params: { limit: 24 },
                              message: "must NOT have more than 24 items"
                            }], !1;
                            if (t.length < 24) return s.errors = [{
                              instancePath: r + "/sounds",
                              schemaPath: "#/properties/sounds/minItems",
                              keyword: "minItems",
                              params: { limit: 24 },
                              message: "must NOT have fewer than 24 items"
                            }], !1;
                            {
                              const p = t.length;
                              for (let e = 0; e < p; e++) {
                                let o = t[e];
                                const d = 0;
                                if (!o || typeof o != "object" || Array.isArray(o)) return s.errors = [{
                                  instancePath: r + "/sounds/" + e,
                                  schemaPath: "#/$defs/Audio/type",
                                  keyword: "type",
                                  params: { type: "object" },
                                  message: "must be object"
                                }], !1;
                                {
                                  let a;
                                  if (o.name === void 0 && (a = "name") || o.volume === void 0 && (a = "volume") || o.pitch === void 0 && (a = "pitch") || o.pan === void 0 && (a = "pan")) return s.errors = [{
                                    instancePath: r + "/sounds/" + e,
                                    schemaPath: "#/$defs/Audio/required",
                                    keyword: "required",
                                    params: { missingProperty: a },
                                    message: "must have required property '" + a + "'"
                                  }], !1;
                                  for (const y in o) if (y !== "name" && y !== "volume" && y !== "pitch" && y !== "pan") return s.errors = [{
                                    instancePath: r + "/sounds/" + e,
                                    schemaPath: "#/$defs/Audio/additionalProperties",
                                    keyword: "additionalProperties",
                                    params: { additionalProperty: y },
                                    message: "must NOT have additional properties"
                                  }], !1;
                                  if (o.name !== void 0) {
                                    if (typeof o.name != "string") return s.errors = [{
                                      instancePath: r + "/sounds/" + e + "/name",
                                      schemaPath: "#/$defs/Audio/properties/name/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string"
                                    }], !1;
                                    var T = !0;
                                  } else T = !0;
                                  if (T) {
                                    if (o.volume !== void 0) {
                                      let y = o.volume;
                                      const g = 0;
                                      if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return s.errors = [{
                                        instancePath: r + "/sounds/" + e + "/volume",
                                        schemaPath: "#/$defs/Audio/properties/volume/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      if (typeof y == "number" && isFinite(y)) {
                                        if (y > 100 || isNaN(y)) return s.errors = [{
                                          instancePath: r + "/sounds/" + e + "/volume",
                                          schemaPath: "#/$defs/Audio/properties/volume/maximum",
                                          keyword: "maximum",
                                          params: { comparison: "<=", limit: 100 },
                                          message: "must be <= 100"
                                        }], !1;
                                        if (y < 0 || isNaN(y)) return s.errors = [{
                                          instancePath: r + "/sounds/" + e + "/volume",
                                          schemaPath: "#/$defs/Audio/properties/volume/minimum",
                                          keyword: "minimum",
                                          params: { comparison: ">=", limit: 0 },
                                          message: "must be >= 0"
                                        }], !1;
                                      }
                                      T = g === 0;
                                    } else T = !0;
                                    if (T) {
                                      if (o.pitch !== void 0) {
                                        let y = o.pitch;
                                        const g = 0;
                                        if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return s.errors = [{
                                          instancePath: r + "/sounds/" + e + "/pitch",
                                          schemaPath: "#/$defs/Audio/properties/pitch/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], !1;
                                        if (typeof y == "number" && isFinite(y)) {
                                          if (y > 150 || isNaN(y)) return s.errors = [{
                                            instancePath: r + "/sounds/" + e + "/pitch",
                                            schemaPath: "#/$defs/Audio/properties/pitch/maximum",
                                            keyword: "maximum",
                                            params: { comparison: "<=", limit: 150 },
                                            message: "must be <= 150"
                                          }], !1;
                                          if (y < 50 || isNaN(y)) return s.errors = [{
                                            instancePath: r + "/sounds/" + e + "/pitch",
                                            schemaPath: "#/$defs/Audio/properties/pitch/minimum",
                                            keyword: "minimum",
                                            params: { comparison: ">=", limit: 50 },
                                            message: "must be >= 50"
                                          }], !1;
                                        }
                                        T = g === 0;
                                      } else T = !0;
                                      if (T) if (o.pan !== void 0) {
                                        let y = o.pan;
                                        const g = 0;
                                        if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return s.errors = [{
                                          instancePath: r + "/sounds/" + e + "/pan",
                                          schemaPath: "#/$defs/Audio/properties/pan/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], !1;
                                        if (typeof y == "number" && isFinite(y)) {
                                          if (y > 100 || isNaN(y)) return s.errors = [{
                                            instancePath: r + "/sounds/" + e + "/pan",
                                            schemaPath: "#/$defs/Audio/properties/pan/maximum",
                                            keyword: "maximum",
                                            params: { comparison: "<=", limit: 100 },
                                            message: "must be <= 100"
                                          }], !1;
                                          if (y < -100 || isNaN(y)) return s.errors = [{ instancePath: r + "/sounds/" + e + "/pan", schemaPath: "#/$defs/Audio/properties/pan/minimum", keyword: "minimum", params: {
                                            comparison: ">=",
                                            limit: -100
                                          }, message: "must be >= -100" }], !1;
                                        }
                                        T = g === 0;
                                      } else T = !0;
                                    }
                                  }
                                }
                                if (d !== 0) break;
                              }
                            }
                            m = c === 0;
                          } else m = !0;
                          if (m) {
                            if (i.itemCategories !== void 0) {
                              let t = i.itemCategories;
                              const c = 0;
                              if (!Array.isArray(t)) return s.errors = [{
                                instancePath: r + "/itemCategories",
                                schemaPath: "#/$defs/ItemCategories/type",
                                keyword: "type",
                                params: { type: "array" },
                                message: "must be array"
                              }], !1;
                              if (t.length > 4) return s.errors = [{
                                instancePath: r + "/itemCategories",
                                schemaPath: "#/$defs/ItemCategories/maxItems",
                                keyword: "maxItems",
                                params: { limit: 4 },
                                message: "must NOT have more than 4 items"
                              }], !1;
                              if (t.length < 4) return s.errors = [{
                                instancePath: r + "/itemCategories",
                                schemaPath: "#/$defs/ItemCategories/minItems",
                                keyword: "minItems",
                                params: { limit: 4 },
                                message: "must NOT have fewer than 4 items"
                              }], !1;
                              {
                                const p = t.length;
                                for (let e = 0; e < p; e++)
                                  if (typeof t[e] != "boolean") return s.errors = [{
                                    instancePath: r + "/itemCategories/" + e,
                                    schemaPath: "#/$defs/ItemCategories/items/type",
                                    keyword: "type",
                                    params: { type: "boolean" },
                                    message: "must be boolean"
                                  }], !1;
                              }
                              m = c === 0;
                            } else m = !0;
                            if (m) {
                              if (i.menuCommands !== void 0) {
                                let t = i.menuCommands;
                                const c = 0;
                                if (!Array.isArray(t)) return s.errors = [{
                                  instancePath: r + "/menuCommands",
                                  schemaPath: "#/$defs/MenuCommands/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], !1;
                                if (t.length > 6) return s.errors = [{
                                  instancePath: r + "/menuCommands",
                                  schemaPath: "#/$defs/MenuCommands/maxItems",
                                  keyword: "maxItems",
                                  params: { limit: 6 },
                                  message: "must NOT have more than 6 items"
                                }], !1;
                                if (t.length < 6) return s.errors = [{
                                  instancePath: r + "/menuCommands",
                                  schemaPath: "#/$defs/MenuCommands/minItems",
                                  keyword: "minItems",
                                  params: { limit: 6 },
                                  message: "must NOT have fewer than 6 items"
                                }], !1;
                                {
                                  const p = t.length;
                                  for (let e = 0; e < p; e++)
                                    if (typeof t[e] != "boolean") return s.errors = [{ instancePath: r + "/menuCommands/" + e, schemaPath: "#/$defs/MenuCommands/items/type", keyword: "type", params: {
                                      type: "boolean"
                                    }, message: "must be boolean" }], !1;
                                }
                                m = c === 0;
                              } else m = !0;
                              if (m) {
                                if (i.ship !== void 0) {
                                  let t = i.ship;
                                  const c = 0;
                                  if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                                    instancePath: r + "/ship",
                                    schemaPath: "#/$defs/Vehicle/type",
                                    keyword: "type",
                                    params: { type: "object" },
                                    message: "must be object"
                                  }], !1;
                                  {
                                    let p;
                                    if (t.characterIndex === void 0 && (p = "characterIndex") || t.characterName === void 0 && (p = "characterName") || t.bgm === void 0 && (p = "bgm") || t.startMapId === void 0 && (p = "startMapId") || t.startX === void 0 && (p = "startX") || t.startY === void 0 && (p = "startY")) return s.errors = [{
                                      instancePath: r + "/ship",
                                      schemaPath: "#/$defs/Vehicle/required",
                                      keyword: "required",
                                      params: { missingProperty: p },
                                      message: "must have required property '" + p + "'"
                                    }], !1;
                                    for (const e in t) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return s.errors = [{
                                      instancePath: r + "/ship",
                                      schemaPath: "#/$defs/Vehicle/additionalProperties",
                                      keyword: "additionalProperties",
                                      params: { additionalProperty: e },
                                      message: "must NOT have additional properties"
                                    }], !1;
                                    if (t.characterIndex !== void 0) {
                                      let e = t.characterIndex;
                                      const o = 0;
                                      if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                        instancePath: r + "/ship/characterIndex",
                                        schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], !1;
                                      if (typeof e == "number" && isFinite(e)) {
                                        if (e > 7 || isNaN(e)) return s.errors = [{ instancePath: r + "/ship/characterIndex", schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum", keyword: "maximum", params: {
                                          comparison: "<=",
                                          limit: 7
                                        }, message: "must be <= 7" }], !1;
                                        if (e < 0 || isNaN(e)) return s.errors = [{
                                          instancePath: r + "/ship/characterIndex",
                                          schemaPath: "#/$defs/Vehicle/properties/characterIndex/minimum",
                                          keyword: "minimum",
                                          params: { comparison: ">=", limit: 0 },
                                          message: "must be >= 0"
                                        }], !1;
                                      }
                                      var l = o === 0;
                                    } else l = !0;
                                    if (l) {
                                      if (t.characterName !== void 0) {
                                        let e = t.characterName;
                                        const o = 0;
                                        if (typeof e != "string") return s.errors = [{
                                          instancePath: r + "/ship/characterName",
                                          schemaPath: "#/$defs/Vehicle/properties/characterName/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string"
                                        }], !1;
                                        if (q(e) < 1) return s.errors = [{
                                          instancePath: r + "/ship/characterName",
                                          schemaPath: "#/$defs/Vehicle/properties/characterName/minLength",
                                          keyword: "minLength",
                                          params: { limit: 1 },
                                          message: "must NOT have fewer than 1 characters"
                                        }], !1;
                                        l = o === 0;
                                      } else l = !0;
                                      if (l) {
                                        if (t.bgm !== void 0) {
                                          let e = t.bgm;
                                          const o = 0;
                                          if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
                                            instancePath: r + "/ship/bgm",
                                            schemaPath: "#/$defs/Vehicle/properties/bgm/type",
                                            keyword: "type",
                                            params: { type: "object" },
                                            message: "must be object"
                                          }], !1;
                                          {
                                            let d;
                                            if (e.name === void 0 && (d = "name") || e.volume === void 0 && (d = "volume") || e.pitch === void 0 && (d = "pitch") || e.pan === void 0 && (d = "pan")) return s.errors = [{
                                              instancePath: r + "/ship/bgm",
                                              schemaPath: "#/$defs/Vehicle/properties/bgm/required",
                                              keyword: "required",
                                              params: { missingProperty: d },
                                              message: "must have required property '" + d + "'"
                                            }], !1;
                                            for (const a in e) if (a !== "name" && a !== "volume" && a !== "pitch" && a !== "pan") return s.errors = [{
                                              instancePath: r + "/ship/bgm",
                                              schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
                                              keyword: "additionalProperties",
                                              params: { additionalProperty: a },
                                              message: "must NOT have additional properties"
                                            }], !1;
                                            if (e.name !== void 0) {
                                              if (typeof e.name != "string") return s.errors = [{ instancePath: r + "/ship/bgm/name", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type", keyword: "type", params: {
                                                type: "string"
                                              }, message: "must be string" }], !1;
                                              var A = !0;
                                            } else A = !0;
                                            if (A) {
                                              if (e.volume !== void 0) {
                                                let a = e.volume;
                                                const y = 0;
                                                if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                  instancePath: r + "/ship/bgm/volume",
                                                  schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                if (typeof a == "number" && isFinite(a)) {
                                                  if (a > 100 || isNaN(a)) return s.errors = [{
                                                    instancePath: r + "/ship/bgm/volume",
                                                    schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/maximum",
                                                    keyword: "maximum",
                                                    params: { comparison: "<=", limit: 100 },
                                                    message: "must be <= 100"
                                                  }], !1;
                                                  if (a < 0 || isNaN(a)) return s.errors = [{
                                                    instancePath: r + "/ship/bgm/volume",
                                                    schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/minimum",
                                                    keyword: "minimum",
                                                    params: { comparison: ">=", limit: 0 },
                                                    message: "must be >= 0"
                                                  }], !1;
                                                }
                                                A = y === 0;
                                              } else A = !0;
                                              if (A) {
                                                if (e.pitch !== void 0) {
                                                  let a = e.pitch;
                                                  const y = 0;
                                                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                    instancePath: r + "/ship/bgm/pitch",
                                                    schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  if (typeof a == "number" && isFinite(a)) {
                                                    if (a > 150 || isNaN(a)) return s.errors = [{ instancePath: r + "/ship/bgm/pitch", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/maximum", keyword: "maximum", params: {
                                                      comparison: "<=",
                                                      limit: 150
                                                    }, message: "must be <= 150" }], !1;
                                                    if (a < 50 || isNaN(a)) return s.errors = [{
                                                      instancePath: r + "/ship/bgm/pitch",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/minimum",
                                                      keyword: "minimum",
                                                      params: { comparison: ">=", limit: 50 },
                                                      message: "must be >= 50"
                                                    }], !1;
                                                  }
                                                  A = y === 0;
                                                } else A = !0;
                                                if (A) if (e.pan !== void 0) {
                                                  let a = e.pan;
                                                  const y = 0;
                                                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                    instancePath: r + "/ship/bgm/pan",
                                                    schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  if (typeof a == "number" && isFinite(a)) {
                                                    if (a > 100 || isNaN(a)) return s.errors = [{ instancePath: r + "/ship/bgm/pan", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/maximum", keyword: "maximum", params: {
                                                      comparison: "<=",
                                                      limit: 100
                                                    }, message: "must be <= 100" }], !1;
                                                    if (a < -100 || isNaN(a)) return s.errors = [{
                                                      instancePath: r + "/ship/bgm/pan",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/minimum",
                                                      keyword: "minimum",
                                                      params: { comparison: ">=", limit: -100 },
                                                      message: "must be >= -100"
                                                    }], !1;
                                                  }
                                                  A = y === 0;
                                                } else A = !0;
                                              }
                                            }
                                          }
                                          l = o === 0;
                                        } else l = !0;
                                        if (l) {
                                          if (t.startMapId !== void 0) {
                                            let e = t.startMapId;
                                            const o = 0;
                                            if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                              instancePath: r + "/ship/startMapId",
                                              schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], !1;
                                            if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
                                              instancePath: r + "/ship/startMapId",
                                              schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
                                              keyword: "minimum",
                                              params: { comparison: ">=", limit: 0 },
                                              message: "must be >= 0"
                                            }], !1;
                                            l = o === 0;
                                          } else l = !0;
                                          if (l) {
                                            if (t.startX !== void 0) {
                                              let e = t.startX;
                                              const o = 0;
                                              if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                                instancePath: r + "/ship/startX",
                                                schemaPath: "#/$defs/Vehicle/properties/startX/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], !1;
                                              if (typeof e == "number" && isFinite(e)) {
                                                if (e > 5e3 || isNaN(e)) return s.errors = [{
                                                  instancePath: r + "/ship/startX",
                                                  schemaPath: "#/$defs/Vehicle/properties/startX/maximum",
                                                  keyword: "maximum",
                                                  params: { comparison: "<=", limit: 5e3 },
                                                  message: "must be <= 5000"
                                                }], !1;
                                                if (e < 0 || isNaN(e)) return s.errors = [{ instancePath: r + "/ship/startX", schemaPath: "#/$defs/Vehicle/properties/startX/minimum", keyword: "minimum", params: {
                                                  comparison: ">=",
                                                  limit: 0
                                                }, message: "must be >= 0" }], !1;
                                              }
                                              l = o === 0;
                                            } else l = !0;
                                            if (l) if (t.startY !== void 0) {
                                              let e = t.startY;
                                              const o = 0;
                                              if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{ instancePath: r + "/ship/startY", schemaPath: "#/$defs/Vehicle/properties/startY/type", keyword: "type", params: {
                                                type: "integer"
                                              }, message: "must be integer" }], !1;
                                              if (typeof e == "number" && isFinite(e)) {
                                                if (e > 5e3 || isNaN(e)) return s.errors = [{
                                                  instancePath: r + "/ship/startY",
                                                  schemaPath: "#/$defs/Vehicle/properties/startY/maximum",
                                                  keyword: "maximum",
                                                  params: { comparison: "<=", limit: 5e3 },
                                                  message: "must be <= 5000"
                                                }], !1;
                                                if (e < 0 || isNaN(e)) return s.errors = [{
                                                  instancePath: r + "/ship/startY",
                                                  schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
                                                  keyword: "minimum",
                                                  params: { comparison: ">=", limit: 0 },
                                                  message: "must be >= 0"
                                                }], !1;
                                              }
                                              l = o === 0;
                                            } else l = !0;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  m = c === 0;
                                } else m = !0;
                                if (m) {
                                  if (i.boat !== void 0) {
                                    let t = i.boat;
                                    const c = 0;
                                    if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                                      instancePath: r + "/boat",
                                      schemaPath: "#/$defs/Vehicle/type",
                                      keyword: "type",
                                      params: { type: "object" },
                                      message: "must be object"
                                    }], !1;
                                    {
                                      let p;
                                      if (t.characterIndex === void 0 && (p = "characterIndex") || t.characterName === void 0 && (p = "characterName") || t.bgm === void 0 && (p = "bgm") || t.startMapId === void 0 && (p = "startMapId") || t.startX === void 0 && (p = "startX") || t.startY === void 0 && (p = "startY")) return s.errors = [{
                                        instancePath: r + "/boat",
                                        schemaPath: "#/$defs/Vehicle/required",
                                        keyword: "required",
                                        params: { missingProperty: p },
                                        message: "must have required property '" + p + "'"
                                      }], !1;
                                      for (const e in t) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return s.errors = [{
                                        instancePath: r + "/boat",
                                        schemaPath: "#/$defs/Vehicle/additionalProperties",
                                        keyword: "additionalProperties",
                                        params: { additionalProperty: e },
                                        message: "must NOT have additional properties"
                                      }], !1;
                                      if (t.characterIndex !== void 0) {
                                        let e = t.characterIndex;
                                        const o = 0;
                                        if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                          instancePath: r + "/boat/characterIndex",
                                          schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], !1;
                                        if (typeof e == "number" && isFinite(e)) {
                                          if (e > 7 || isNaN(e)) return s.errors = [{ instancePath: r + "/boat/characterIndex", schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum", keyword: "maximum", params: {
                                            comparison: "<=",
                                            limit: 7
                                          }, message: "must be <= 7" }], !1;
                                          if (e < 0 || isNaN(e)) return s.errors = [{
                                            instancePath: r + "/boat/characterIndex",
                                            schemaPath: "#/$defs/Vehicle/properties/characterIndex/minimum",
                                            keyword: "minimum",
                                            params: { comparison: ">=", limit: 0 },
                                            message: "must be >= 0"
                                          }], !1;
                                        }
                                        var b = o === 0;
                                      } else b = !0;
                                      if (b) {
                                        if (t.characterName !== void 0) {
                                          let e = t.characterName;
                                          const o = 0;
                                          if (typeof e != "string") return s.errors = [{
                                            instancePath: r + "/boat/characterName",
                                            schemaPath: "#/$defs/Vehicle/properties/characterName/type",
                                            keyword: "type",
                                            params: { type: "string" },
                                            message: "must be string"
                                          }], !1;
                                          if (q(e) < 1) return s.errors = [{
                                            instancePath: r + "/boat/characterName",
                                            schemaPath: "#/$defs/Vehicle/properties/characterName/minLength",
                                            keyword: "minLength",
                                            params: { limit: 1 },
                                            message: "must NOT have fewer than 1 characters"
                                          }], !1;
                                          b = o === 0;
                                        } else b = !0;
                                        if (b) {
                                          if (t.bgm !== void 0) {
                                            let e = t.bgm;
                                            const o = 0;
                                            if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
                                              instancePath: r + "/boat/bgm",
                                              schemaPath: "#/$defs/Vehicle/properties/bgm/type",
                                              keyword: "type",
                                              params: { type: "object" },
                                              message: "must be object"
                                            }], !1;
                                            {
                                              let d;
                                              if (e.name === void 0 && (d = "name") || e.volume === void 0 && (d = "volume") || e.pitch === void 0 && (d = "pitch") || e.pan === void 0 && (d = "pan")) return s.errors = [{
                                                instancePath: r + "/boat/bgm",
                                                schemaPath: "#/$defs/Vehicle/properties/bgm/required",
                                                keyword: "required",
                                                params: { missingProperty: d },
                                                message: "must have required property '" + d + "'"
                                              }], !1;
                                              for (const a in e) if (a !== "name" && a !== "volume" && a !== "pitch" && a !== "pan") return s.errors = [{
                                                instancePath: r + "/boat/bgm",
                                                schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
                                                keyword: "additionalProperties",
                                                params: { additionalProperty: a },
                                                message: "must NOT have additional properties"
                                              }], !1;
                                              if (e.name !== void 0) {
                                                if (typeof e.name != "string") return s.errors = [{ instancePath: r + "/boat/bgm/name", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type", keyword: "type", params: {
                                                  type: "string"
                                                }, message: "must be string" }], !1;
                                                var F = !0;
                                              } else F = !0;
                                              if (F) {
                                                if (e.volume !== void 0) {
                                                  let a = e.volume;
                                                  const y = 0;
                                                  if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                    instancePath: r + "/boat/bgm/volume",
                                                    schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  if (typeof a == "number" && isFinite(a)) {
                                                    if (a > 100 || isNaN(a)) return s.errors = [{
                                                      instancePath: r + "/boat/bgm/volume",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/maximum",
                                                      keyword: "maximum",
                                                      params: { comparison: "<=", limit: 100 },
                                                      message: "must be <= 100"
                                                    }], !1;
                                                    if (a < 0 || isNaN(a)) return s.errors = [{
                                                      instancePath: r + "/boat/bgm/volume",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/minimum",
                                                      keyword: "minimum",
                                                      params: { comparison: ">=", limit: 0 },
                                                      message: "must be >= 0"
                                                    }], !1;
                                                  }
                                                  F = y === 0;
                                                } else F = !0;
                                                if (F) {
                                                  if (e.pitch !== void 0) {
                                                    let a = e.pitch;
                                                    const y = 0;
                                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                      instancePath: r + "/boat/bgm/pitch",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
                                                      keyword: "type",
                                                      params: { type: "integer" },
                                                      message: "must be integer"
                                                    }], !1;
                                                    if (typeof a == "number" && isFinite(a)) {
                                                      if (a > 150 || isNaN(a)) return s.errors = [{ instancePath: r + "/boat/bgm/pitch", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/maximum", keyword: "maximum", params: {
                                                        comparison: "<=",
                                                        limit: 150
                                                      }, message: "must be <= 150" }], !1;
                                                      if (a < 50 || isNaN(a)) return s.errors = [{
                                                        instancePath: r + "/boat/bgm/pitch",
                                                        schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/minimum",
                                                        keyword: "minimum",
                                                        params: { comparison: ">=", limit: 50 },
                                                        message: "must be >= 50"
                                                      }], !1;
                                                    }
                                                    F = y === 0;
                                                  } else F = !0;
                                                  if (F) if (e.pan !== void 0) {
                                                    let a = e.pan;
                                                    const y = 0;
                                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                      instancePath: r + "/boat/bgm/pan",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
                                                      keyword: "type",
                                                      params: { type: "integer" },
                                                      message: "must be integer"
                                                    }], !1;
                                                    if (typeof a == "number" && isFinite(a)) {
                                                      if (a > 100 || isNaN(a)) return s.errors = [{ instancePath: r + "/boat/bgm/pan", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/maximum", keyword: "maximum", params: {
                                                        comparison: "<=",
                                                        limit: 100
                                                      }, message: "must be <= 100" }], !1;
                                                      if (a < -100 || isNaN(a)) return s.errors = [{
                                                        instancePath: r + "/boat/bgm/pan",
                                                        schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/minimum",
                                                        keyword: "minimum",
                                                        params: { comparison: ">=", limit: -100 },
                                                        message: "must be >= -100"
                                                      }], !1;
                                                    }
                                                    F = y === 0;
                                                  } else F = !0;
                                                }
                                              }
                                            }
                                            b = o === 0;
                                          } else b = !0;
                                          if (b) {
                                            if (t.startMapId !== void 0) {
                                              let e = t.startMapId;
                                              const o = 0;
                                              if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                                instancePath: r + "/boat/startMapId",
                                                schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], !1;
                                              if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
                                                instancePath: r + "/boat/startMapId",
                                                schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
                                                keyword: "minimum",
                                                params: { comparison: ">=", limit: 0 },
                                                message: "must be >= 0"
                                              }], !1;
                                              b = o === 0;
                                            } else b = !0;
                                            if (b) {
                                              if (t.startX !== void 0) {
                                                let e = t.startX;
                                                const o = 0;
                                                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                                  instancePath: r + "/boat/startX",
                                                  schemaPath: "#/$defs/Vehicle/properties/startX/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                if (typeof e == "number" && isFinite(e)) {
                                                  if (e > 5e3 || isNaN(e)) return s.errors = [{
                                                    instancePath: r + "/boat/startX",
                                                    schemaPath: "#/$defs/Vehicle/properties/startX/maximum",
                                                    keyword: "maximum",
                                                    params: { comparison: "<=", limit: 5e3 },
                                                    message: "must be <= 5000"
                                                  }], !1;
                                                  if (e < 0 || isNaN(e)) return s.errors = [{ instancePath: r + "/boat/startX", schemaPath: "#/$defs/Vehicle/properties/startX/minimum", keyword: "minimum", params: {
                                                    comparison: ">=",
                                                    limit: 0
                                                  }, message: "must be >= 0" }], !1;
                                                }
                                                b = o === 0;
                                              } else b = !0;
                                              if (b) if (t.startY !== void 0) {
                                                let e = t.startY;
                                                const o = 0;
                                                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{ instancePath: r + "/boat/startY", schemaPath: "#/$defs/Vehicle/properties/startY/type", keyword: "type", params: {
                                                  type: "integer"
                                                }, message: "must be integer" }], !1;
                                                if (typeof e == "number" && isFinite(e)) {
                                                  if (e > 5e3 || isNaN(e)) return s.errors = [{
                                                    instancePath: r + "/boat/startY",
                                                    schemaPath: "#/$defs/Vehicle/properties/startY/maximum",
                                                    keyword: "maximum",
                                                    params: { comparison: "<=", limit: 5e3 },
                                                    message: "must be <= 5000"
                                                  }], !1;
                                                  if (e < 0 || isNaN(e)) return s.errors = [{
                                                    instancePath: r + "/boat/startY",
                                                    schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
                                                    keyword: "minimum",
                                                    params: { comparison: ">=", limit: 0 },
                                                    message: "must be >= 0"
                                                  }], !1;
                                                }
                                                b = o === 0;
                                              } else b = !0;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    m = c === 0;
                                  } else m = !0;
                                  if (m) {
                                    if (i.airship !== void 0) {
                                      let t = i.airship;
                                      const c = 0;
                                      if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                                        instancePath: r + "/airship",
                                        schemaPath: "#/$defs/Vehicle/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], !1;
                                      {
                                        let p;
                                        if (t.characterIndex === void 0 && (p = "characterIndex") || t.characterName === void 0 && (p = "characterName") || t.bgm === void 0 && (p = "bgm") || t.startMapId === void 0 && (p = "startMapId") || t.startX === void 0 && (p = "startX") || t.startY === void 0 && (p = "startY")) return s.errors = [{
                                          instancePath: r + "/airship",
                                          schemaPath: "#/$defs/Vehicle/required",
                                          keyword: "required",
                                          params: { missingProperty: p },
                                          message: "must have required property '" + p + "'"
                                        }], !1;
                                        for (const e in t) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return s.errors = [{
                                          instancePath: r + "/airship",
                                          schemaPath: "#/$defs/Vehicle/additionalProperties",
                                          keyword: "additionalProperties",
                                          params: { additionalProperty: e },
                                          message: "must NOT have additional properties"
                                        }], !1;
                                        if (t.characterIndex !== void 0) {
                                          let e = t.characterIndex;
                                          const o = 0;
                                          if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                            instancePath: r + "/airship/characterIndex",
                                            schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], !1;
                                          if (typeof e == "number" && isFinite(e)) {
                                            if (e > 7 || isNaN(e)) return s.errors = [{ instancePath: r + "/airship/characterIndex", schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum", keyword: "maximum", params: {
                                              comparison: "<=",
                                              limit: 7
                                            }, message: "must be <= 7" }], !1;
                                            if (e < 0 || isNaN(e)) return s.errors = [{
                                              instancePath: r + "/airship/characterIndex",
                                              schemaPath: "#/$defs/Vehicle/properties/characterIndex/minimum",
                                              keyword: "minimum",
                                              params: { comparison: ">=", limit: 0 },
                                              message: "must be >= 0"
                                            }], !1;
                                          }
                                          var P = o === 0;
                                        } else P = !0;
                                        if (P) {
                                          if (t.characterName !== void 0) {
                                            let e = t.characterName;
                                            const o = 0;
                                            if (typeof e != "string") return s.errors = [{
                                              instancePath: r + "/airship/characterName",
                                              schemaPath: "#/$defs/Vehicle/properties/characterName/type",
                                              keyword: "type",
                                              params: { type: "string" },
                                              message: "must be string"
                                            }], !1;
                                            if (q(e) < 1) return s.errors = [{
                                              instancePath: r + "/airship/characterName",
                                              schemaPath: "#/$defs/Vehicle/properties/characterName/minLength",
                                              keyword: "minLength",
                                              params: { limit: 1 },
                                              message: "must NOT have fewer than 1 characters"
                                            }], !1;
                                            P = o === 0;
                                          } else P = !0;
                                          if (P) {
                                            if (t.bgm !== void 0) {
                                              let e = t.bgm;
                                              const o = 0;
                                              if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
                                                instancePath: r + "/airship/bgm",
                                                schemaPath: "#/$defs/Vehicle/properties/bgm/type",
                                                keyword: "type",
                                                params: { type: "object" },
                                                message: "must be object"
                                              }], !1;
                                              {
                                                let d;
                                                if (e.name === void 0 && (d = "name") || e.volume === void 0 && (d = "volume") || e.pitch === void 0 && (d = "pitch") || e.pan === void 0 && (d = "pan")) return s.errors = [{
                                                  instancePath: r + "/airship/bgm",
                                                  schemaPath: "#/$defs/Vehicle/properties/bgm/required",
                                                  keyword: "required",
                                                  params: { missingProperty: d },
                                                  message: "must have required property '" + d + "'"
                                                }], !1;
                                                for (const a in e) if (a !== "name" && a !== "volume" && a !== "pitch" && a !== "pan") return s.errors = [{
                                                  instancePath: r + "/airship/bgm",
                                                  schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
                                                  keyword: "additionalProperties",
                                                  params: { additionalProperty: a },
                                                  message: "must NOT have additional properties"
                                                }], !1;
                                                if (e.name !== void 0) {
                                                  if (typeof e.name != "string") return s.errors = [{
                                                    instancePath: r + "/airship/bgm/name",
                                                    schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
                                                    keyword: "type",
                                                    params: { type: "string" },
                                                    message: "must be string"
                                                  }], !1;
                                                  var x = !0;
                                                } else x = !0;
                                                if (x) {
                                                  if (e.volume !== void 0) {
                                                    let a = e.volume;
                                                    const y = 0;
                                                    if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                      instancePath: r + "/airship/bgm/volume",
                                                      schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
                                                      keyword: "type",
                                                      params: { type: "integer" },
                                                      message: "must be integer"
                                                    }], !1;
                                                    if (typeof a == "number" && isFinite(a)) {
                                                      if (a > 100 || isNaN(a)) return s.errors = [{
                                                        instancePath: r + "/airship/bgm/volume",
                                                        schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/maximum",
                                                        keyword: "maximum",
                                                        params: { comparison: "<=", limit: 100 },
                                                        message: "must be <= 100"
                                                      }], !1;
                                                      if (a < 0 || isNaN(a)) return s.errors = [{ instancePath: r + "/airship/bgm/volume", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/minimum", keyword: "minimum", params: {
                                                        comparison: ">=",
                                                        limit: 0
                                                      }, message: "must be >= 0" }], !1;
                                                    }
                                                    x = y === 0;
                                                  } else x = !0;
                                                  if (x) {
                                                    if (e.pitch !== void 0) {
                                                      let a = e.pitch;
                                                      const y = 0;
                                                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                        instancePath: r + "/airship/bgm/pitch",
                                                        schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      if (typeof a == "number" && isFinite(a)) {
                                                        if (a > 150 || isNaN(a)) return s.errors = [{
                                                          instancePath: r + "/airship/bgm/pitch",
                                                          schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/maximum",
                                                          keyword: "maximum",
                                                          params: { comparison: "<=", limit: 150 },
                                                          message: "must be <= 150"
                                                        }], !1;
                                                        if (a < 50 || isNaN(a)) return s.errors = [{ instancePath: r + "/airship/bgm/pitch", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/minimum", keyword: "minimum", params: {
                                                          comparison: ">=",
                                                          limit: 50
                                                        }, message: "must be >= 50" }], !1;
                                                      }
                                                      x = y === 0;
                                                    } else x = !0;
                                                    if (x) if (e.pan !== void 0) {
                                                      let a = e.pan;
                                                      const y = 0;
                                                      if (typeof a != "number" || a % 1 || isNaN(a) || !isFinite(a)) return s.errors = [{
                                                        instancePath: r + "/airship/bgm/pan",
                                                        schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      if (typeof a == "number" && isFinite(a)) {
                                                        if (a > 100 || isNaN(a)) return s.errors = [{
                                                          instancePath: r + "/airship/bgm/pan",
                                                          schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/maximum",
                                                          keyword: "maximum",
                                                          params: { comparison: "<=", limit: 100 },
                                                          message: "must be <= 100"
                                                        }], !1;
                                                        if (a < -100 || isNaN(a)) return s.errors = [{ instancePath: r + "/airship/bgm/pan", schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/minimum", keyword: "minimum", params: {
                                                          comparison: ">=",
                                                          limit: -100
                                                        }, message: "must be >= -100" }], !1;
                                                      }
                                                      x = y === 0;
                                                    } else x = !0;
                                                  }
                                                }
                                              }
                                              P = o === 0;
                                            } else P = !0;
                                            if (P) {
                                              if (t.startMapId !== void 0) {
                                                let e = t.startMapId;
                                                const o = 0;
                                                if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                                  instancePath: r + "/airship/startMapId",
                                                  schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
                                                  instancePath: r + "/airship/startMapId",
                                                  schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
                                                  keyword: "minimum",
                                                  params: { comparison: ">=", limit: 0 },
                                                  message: "must be >= 0"
                                                }], !1;
                                                P = o === 0;
                                              } else P = !0;
                                              if (P) {
                                                if (t.startX !== void 0) {
                                                  let e = t.startX;
                                                  const o = 0;
                                                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
                                                    instancePath: r + "/airship/startX",
                                                    schemaPath: "#/$defs/Vehicle/properties/startX/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  if (typeof e == "number" && isFinite(e)) {
                                                    if (e > 5e3 || isNaN(e)) return s.errors = [{
                                                      instancePath: r + "/airship/startX",
                                                      schemaPath: "#/$defs/Vehicle/properties/startX/maximum",
                                                      keyword: "maximum",
                                                      params: { comparison: "<=", limit: 5e3 },
                                                      message: "must be <= 5000"
                                                    }], !1;
                                                    if (e < 0 || isNaN(e)) return s.errors = [{ instancePath: r + "/airship/startX", schemaPath: "#/$defs/Vehicle/properties/startX/minimum", keyword: "minimum", params: {
                                                      comparison: ">=",
                                                      limit: 0
                                                    }, message: "must be >= 0" }], !1;
                                                  }
                                                  P = o === 0;
                                                } else P = !0;
                                                if (P) if (t.startY !== void 0) {
                                                  let e = t.startY;
                                                  const o = 0;
                                                  if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{ instancePath: r + "/airship/startY", schemaPath: "#/$defs/Vehicle/properties/startY/type", keyword: "type", params: {
                                                    type: "integer"
                                                  }, message: "must be integer" }], !1;
                                                  if (typeof e == "number" && isFinite(e)) {
                                                    if (e > 5e3 || isNaN(e)) return s.errors = [{
                                                      instancePath: r + "/airship/startY",
                                                      schemaPath: "#/$defs/Vehicle/properties/startY/maximum",
                                                      keyword: "maximum",
                                                      params: { comparison: "<=", limit: 5e3 },
                                                      message: "must be <= 5000"
                                                    }], !1;
                                                    if (e < 0 || isNaN(e)) return s.errors = [{
                                                      instancePath: r + "/airship/startY",
                                                      schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
                                                      keyword: "minimum",
                                                      params: { comparison: ">=", limit: 0 },
                                                      message: "must be >= 0"
                                                    }], !1;
                                                  }
                                                  P = o === 0;
                                                } else P = !0;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      m = c === 0;
                                    } else m = !0;
                                    if (m) {
                                      if (i.testBattlers !== void 0) {
                                        let t = i.testBattlers;
                                        const c = 0;
                                        if (!Array.isArray(t)) return s.errors = [{
                                          instancePath: r + "/testBattlers",
                                          schemaPath: "#/properties/testBattlers/type",
                                          keyword: "type",
                                          params: { type: "array" },
                                          message: "must be array"
                                        }], !1;
                                        {
                                          const p = t.length;
                                          for (let e = 0; e < p; e++) {
                                            let o = t[e];
                                            const d = 0;
                                            if (!o || typeof o != "object" || Array.isArray(o)) return s.errors = [{
                                              instancePath: r + "/testBattlers/" + e,
                                              schemaPath: "#/$defs/TestBattler/type",
                                              keyword: "type",
                                              params: { type: "object" },
                                              message: "must be object"
                                            }], !1;
                                            {
                                              let a;
                                              if (o.actorId === void 0 && (a = "actorId") || o.level === void 0 && (a = "level") || o.equips === void 0 && (a = "equips")) return s.errors = [{
                                                instancePath: r + "/testBattlers/" + e,
                                                schemaPath: "#/$defs/TestBattler/required",
                                                keyword: "required",
                                                params: { missingProperty: a },
                                                message: "must have required property '" + a + "'"
                                              }], !1;
                                              for (const y in o) if (y !== "actorId" && y !== "equips" && y !== "level") return s.errors = [{
                                                instancePath: r + "/testBattlers/" + e,
                                                schemaPath: "#/$defs/TestBattler/additionalProperties",
                                                keyword: "additionalProperties",
                                                params: { additionalProperty: y },
                                                message: "must NOT have additional properties"
                                              }], !1;
                                              if (o.actorId !== void 0) {
                                                let y = o.actorId;
                                                const g = 0;
                                                if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return s.errors = [{
                                                  instancePath: r + "/testBattlers/" + e + "/actorId",
                                                  schemaPath: "#/$defs/TestBattler/properties/actorId/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], !1;
                                                if (typeof y == "number" && isFinite(y) && (y < 0 || isNaN(y))) return s.errors = [{
                                                  instancePath: r + "/testBattlers/" + e + "/actorId",
                                                  schemaPath: "#/$defs/TestBattler/properties/actorId/minimum",
                                                  keyword: "minimum",
                                                  params: { comparison: ">=", limit: 0 },
                                                  message: "must be >= 0"
                                                }], !1;
                                                var S = g === 0;
                                              } else S = !0;
                                              if (S) {
                                                if (o.equips !== void 0) {
                                                  let y = o.equips;
                                                  const g = 0;
                                                  if (!Array.isArray(y)) return s.errors = [{
                                                    instancePath: r + "/testBattlers/" + e + "/equips",
                                                    schemaPath: "#/$defs/TestBattler/properties/equips/type",
                                                    keyword: "type",
                                                    params: { type: "array" },
                                                    message: "must be array"
                                                  }], !1;
                                                  {
                                                    const H = y.length;
                                                    for (let B = 0; B < H; B++) {
                                                      let C = y[B];
                                                      const G = 0;
                                                      if (typeof C != "number" || C % 1 || isNaN(C) || !isFinite(C)) return s.errors = [{
                                                        instancePath: r + "/testBattlers/" + e + "/equips/" + B,
                                                        schemaPath: "#/$defs/TestBattler/properties/equips/items/type",
                                                        keyword: "type",
                                                        params: { type: "integer" },
                                                        message: "must be integer"
                                                      }], !1;
                                                      if (G !== 0) break;
                                                    }
                                                  }
                                                  S = g === 0;
                                                } else S = !0;
                                                if (S) if (o.level !== void 0) {
                                                  let y = o.level;
                                                  const g = 0;
                                                  if (typeof y != "number" || y % 1 || isNaN(y) || !isFinite(y)) return s.errors = [{
                                                    instancePath: r + "/testBattlers/" + e + "/level",
                                                    schemaPath: "#/$defs/TestBattler/properties/level/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], !1;
                                                  if (typeof y == "number" && isFinite(y) && (y < 0 || isNaN(y))) return s.errors = [{
                                                    instancePath: r + "/testBattlers/" + e + "/level",
                                                    schemaPath: "#/$defs/TestBattler/properties/level/minimum",
                                                    keyword: "minimum",
                                                    params: { comparison: ">=", limit: 0 },
                                                    message: "must be >= 0"
                                                  }], !1;
                                                  S = g === 0;
                                                } else S = !0;
                                              }
                                            }
                                            if (d !== 0) break;
                                          }
                                        }
                                        m = c === 0;
                                      } else m = !0;
                                      if (m) {
                                        if (i.terms !== void 0) {
                                          let t = i.terms;
                                          const c = 0;
                                          if (!t || typeof t != "object" || Array.isArray(t)) return s.errors = [{
                                            instancePath: r + "/terms",
                                            schemaPath: "#/properties/terms/type",
                                            keyword: "type",
                                            params: { type: "object" },
                                            message: "must be object"
                                          }], !1;
                                          {
                                            let p;
                                            if (t.messages === void 0 && (p = "messages") || t.commands === void 0 && (p = "commands") || t.basic === void 0 && (p = "basic") || t.params === void 0 && (p = "params")) return s.errors = [{
                                              instancePath: r + "/terms",
                                              schemaPath: "#/properties/terms/required",
                                              keyword: "required",
                                              params: { missingProperty: p },
                                              message: "must have required property '" + p + "'"
                                            }], !1;
                                            for (const e in t) if (e !== "messages" && e !== "commands" && e !== "basic" && e !== "params") return s.errors = [{
                                              instancePath: r + "/terms",
                                              schemaPath: "#/properties/terms/additionalProperties",
                                              keyword: "additionalProperties",
                                              params: { additionalProperty: e },
                                              message: "must NOT have additional properties"
                                            }], !1;
                                            if (t.messages !== void 0) {
                                              let e = t.messages;
                                              const o = 0;
                                              if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
                                                instancePath: r + "/terms/messages",
                                                schemaPath: "#/$defs/TermsMessages/type",
                                                keyword: "type",
                                                params: { type: "object" },
                                                message: "must be object"
                                              }], !1;
                                              {
                                                let d;
                                                if (e.actionFailure === void 0 && (d = "actionFailure") || e.actorDamage === void 0 && (d = "actorDamage") || e.actorNoDamage === void 0 && (d = "actorNoDamage") || e.actorRecovery === void 0 && (d = "actorRecovery") || e.actorGain === void 0 && (d = "actorGain") || e.actorLoss === void 0 && (d = "actorLoss") || e.actorDrain === void 0 && (d = "actorDrain") || e.alwaysDash === void 0 && (d = "alwaysDash") || e.bgmVolume === void 0 && (d = "bgmVolume") || e.bgsVolume === void 0 && (d = "bgsVolume") || e.commandRemember === void 0 && (d = "commandRemember") || e.criticalToActor === void 0 && (d = "criticalToActor") || e.criticalToEnemy === void 0 && (d = "criticalToEnemy") || e.counterAttack === void 0 && (d = "counterAttack") || e.debuffAdd === void 0 && (d = "debuffAdd") || e.defeat === void 0 && (d = "defeat") || e.enemyDamage === void 0 && (d = "enemyDamage") || e.enemyNoDamage === void 0 && (d = "enemyNoDamage") || e.enemyRecovery === void 0 && (d = "enemyRecovery") || e.enemyGain === void 0 && (d = "enemyGain") || e.enemyLoss === void 0 && (d = "enemyLoss") || e.enemyDrain === void 0 && (d = "enemyDrain") || e.evasion === void 0 && (d = "evasion") || e.expNext === void 0 && (d = "expNext") || e.expTotal === void 0 && (d = "expTotal") || e.escapeFailure === void 0 && (d = "escapeFailure") || e.escapeStart === void 0 && (d = "escapeStart") || e.file === void 0 && (d = "file") || e.loadMessage === void 0 && (d = "loadMessage") || e.meVolume === void 0 && (d = "meVolume") || e.magicEvasion === void 0 && (d = "magicEvasion") || e.magicReflection === void 0 && (d = "magicReflection") || e.obtainExp === void 0 && (d = "obtainExp") || e.obtainGold === void 0 && (d = "obtainGold") || e.obtainItem === void 0 && (d = "obtainItem") || e.obtainSkill === void 0 && (d = "obtainSkill") || e.partyName === void 0 && (d = "partyName") || e.preemptive === void 0 && (d = "preemptive") || e.saveMessage === void 0 && (d = "saveMessage") || e.seVolume === void 0 && (d = "seVolume") || e.substitute === void 0 && (d = "substitute") || e.touchUI === void 0 && (d = "touchUI") || e.victory === void 0 && (d = "victory") || e.useItem === void 0 && (d = "useItem")) return s.errors = [{
                                                  instancePath: r + "/terms/messages",
                                                  schemaPath: "#/$defs/TermsMessages/required",
                                                  keyword: "required",
                                                  params: { missingProperty: d },
                                                  message: "must have required property '" + d + "'"
                                                }], !1;
                                                for (const a in e) if (!W.call(z.properties, a)) return s.errors = [{
                                                  instancePath: r + "/terms/messages",
                                                  schemaPath: "#/$defs/TermsMessages/additionalProperties",
                                                  keyword: "additionalProperties",
                                                  params: { additionalProperty: a },
                                                  message: "must NOT have additional properties"
                                                }], !1;
                                                if (e.actionFailure !== void 0) {
                                                  if (typeof e.actionFailure != "string") return s.errors = [{
                                                    instancePath: r + "/terms/messages/actionFailure",
                                                    schemaPath: "#/$defs/TermsMessages/properties/actionFailure/type",
                                                    keyword: "type",
                                                    params: { type: "string" },
                                                    message: "must be string"
                                                  }], !1;
                                                  var n = !0;
                                                } else n = !0;
                                                if (n) {
                                                  if (e.actorDamage !== void 0) {
                                                    if (typeof e.actorDamage != "string") return s.errors = [{
                                                      instancePath: r + "/terms/messages/actorDamage",
                                                      schemaPath: "#/$defs/TermsMessages/properties/actorDamage/type",
                                                      keyword: "type",
                                                      params: { type: "string" },
                                                      message: "must be string"
                                                    }], !1;
                                                    n = !0;
                                                  } else n = !0;
                                                  if (n) {
                                                    if (e.actorDrain !== void 0) {
                                                      if (typeof e.actorDrain != "string") return s.errors = [{
                                                        instancePath: r + "/terms/messages/actorDrain",
                                                        schemaPath: "#/$defs/TermsMessages/properties/actorDrain/type",
                                                        keyword: "type",
                                                        params: { type: "string" },
                                                        message: "must be string"
                                                      }], !1;
                                                      n = !0;
                                                    } else n = !0;
                                                    if (n) {
                                                      if (e.actorGain !== void 0) {
                                                        if (typeof e.actorGain != "string") return s.errors = [{
                                                          instancePath: r + "/terms/messages/actorGain",
                                                          schemaPath: "#/$defs/TermsMessages/properties/actorGain/type",
                                                          keyword: "type",
                                                          params: { type: "string" },
                                                          message: "must be string"
                                                        }], !1;
                                                        n = !0;
                                                      } else n = !0;
                                                      if (n) {
                                                        if (e.actorLoss !== void 0) {
                                                          if (typeof e.actorLoss != "string") return s.errors = [{
                                                            instancePath: r + "/terms/messages/actorLoss",
                                                            schemaPath: "#/$defs/TermsMessages/properties/actorLoss/type",
                                                            keyword: "type",
                                                            params: { type: "string" },
                                                            message: "must be string"
                                                          }], !1;
                                                          n = !0;
                                                        } else n = !0;
                                                        if (n) {
                                                          if (e.actorNoDamage !== void 0) {
                                                            if (typeof e.actorNoDamage != "string") return s.errors = [{
                                                              instancePath: r + "/terms/messages/actorNoDamage",
                                                              schemaPath: "#/$defs/TermsMessages/properties/actorNoDamage/type",
                                                              keyword: "type",
                                                              params: { type: "string" },
                                                              message: "must be string"
                                                            }], !1;
                                                            n = !0;
                                                          } else n = !0;
                                                          if (n) {
                                                            if (e.actorNoHit !== void 0) {
                                                              if (typeof e.actorNoHit != "string") return s.errors = [{
                                                                instancePath: r + "/terms/messages/actorNoHit",
                                                                schemaPath: "#/$defs/TermsMessages/properties/actorNoHit/type",
                                                                keyword: "type",
                                                                params: { type: "string" },
                                                                message: "must be string"
                                                              }], !1;
                                                              n = !0;
                                                            } else n = !0;
                                                            if (n) {
                                                              if (e.actorRecovery !== void 0) {
                                                                if (typeof e.actorRecovery != "string") return s.errors = [{
                                                                  instancePath: r + "/terms/messages/actorRecovery",
                                                                  schemaPath: "#/$defs/TermsMessages/properties/actorRecovery/type",
                                                                  keyword: "type",
                                                                  params: { type: "string" },
                                                                  message: "must be string"
                                                                }], !1;
                                                                n = !0;
                                                              } else n = !0;
                                                              if (n) {
                                                                if (e.alwaysDash !== void 0) {
                                                                  if (typeof e.alwaysDash != "string") return s.errors = [{
                                                                    instancePath: r + "/terms/messages/alwaysDash",
                                                                    schemaPath: "#/$defs/TermsMessages/properties/alwaysDash/type",
                                                                    keyword: "type",
                                                                    params: { type: "string" },
                                                                    message: "must be string"
                                                                  }], !1;
                                                                  n = !0;
                                                                } else n = !0;
                                                                if (n) {
                                                                  if (e.autosave !== void 0) {
                                                                    if (typeof e.autosave != "string") return s.errors = [{
                                                                      instancePath: r + "/terms/messages/autosave",
                                                                      schemaPath: "#/$defs/TermsMessages/properties/autosave/type",
                                                                      keyword: "type",
                                                                      params: { type: "string" },
                                                                      message: "must be string"
                                                                    }], !1;
                                                                    n = !0;
                                                                  } else n = !0;
                                                                  if (n) {
                                                                    if (e.bgmVolume !== void 0) {
                                                                      if (typeof e.bgmVolume != "string") return s.errors = [{
                                                                        instancePath: r + "/terms/messages/bgmVolume",
                                                                        schemaPath: "#/$defs/TermsMessages/properties/bgmVolume/type",
                                                                        keyword: "type",
                                                                        params: { type: "string" },
                                                                        message: "must be string"
                                                                      }], !1;
                                                                      n = !0;
                                                                    } else n = !0;
                                                                    if (n) {
                                                                      if (e.bgsVolume !== void 0) {
                                                                        if (typeof e.bgsVolume != "string") return s.errors = [{
                                                                          instancePath: r + "/terms/messages/bgsVolume",
                                                                          schemaPath: "#/$defs/TermsMessages/properties/bgsVolume/type",
                                                                          keyword: "type",
                                                                          params: { type: "string" },
                                                                          message: "must be string"
                                                                        }], !1;
                                                                        n = !0;
                                                                      } else n = !0;
                                                                      if (n) {
                                                                        if (e.buffAdd !== void 0) {
                                                                          if (typeof e.buffAdd != "string") return s.errors = [{
                                                                            instancePath: r + "/terms/messages/buffAdd",
                                                                            schemaPath: "#/$defs/TermsMessages/properties/buffAdd/type",
                                                                            keyword: "type",
                                                                            params: { type: "string" },
                                                                            message: "must be string"
                                                                          }], !1;
                                                                          n = !0;
                                                                        } else n = !0;
                                                                        if (n) {
                                                                          if (e.buffRemove !== void 0) {
                                                                            if (typeof e.buffRemove != "string") return s.errors = [{
                                                                              instancePath: r + "/terms/messages/buffRemove",
                                                                              schemaPath: "#/$defs/TermsMessages/properties/buffRemove/type",
                                                                              keyword: "type",
                                                                              params: { type: "string" },
                                                                              message: "must be string"
                                                                            }], !1;
                                                                            n = !0;
                                                                          } else n = !0;
                                                                          if (n) {
                                                                            if (e.commandRemember !== void 0) {
                                                                              if (typeof e.commandRemember != "string") return s.errors = [{
                                                                                instancePath: r + "/terms/messages/commandRemember",
                                                                                schemaPath: "#/$defs/TermsMessages/properties/commandRemember/type",
                                                                                keyword: "type",
                                                                                params: { type: "string" },
                                                                                message: "must be string"
                                                                              }], !1;
                                                                              n = !0;
                                                                            } else n = !0;
                                                                            if (n) {
                                                                              if (e.counterAttack !== void 0) {
                                                                                if (typeof e.counterAttack != "string") return s.errors = [{
                                                                                  instancePath: r + "/terms/messages/counterAttack",
                                                                                  schemaPath: "#/$defs/TermsMessages/properties/counterAttack/type",
                                                                                  keyword: "type",
                                                                                  params: { type: "string" },
                                                                                  message: "must be string"
                                                                                }], !1;
                                                                                n = !0;
                                                                              } else n = !0;
                                                                              if (n) {
                                                                                if (e.criticalToActor !== void 0) {
                                                                                  if (typeof e.criticalToActor != "string") return s.errors = [{
                                                                                    instancePath: r + "/terms/messages/criticalToActor",
                                                                                    schemaPath: "#/$defs/TermsMessages/properties/criticalToActor/type",
                                                                                    keyword: "type",
                                                                                    params: { type: "string" },
                                                                                    message: "must be string"
                                                                                  }], !1;
                                                                                  n = !0;
                                                                                } else n = !0;
                                                                                if (n) {
                                                                                  if (e.criticalToEnemy !== void 0) {
                                                                                    if (typeof e.criticalToEnemy != "string") return s.errors = [{
                                                                                      instancePath: r + "/terms/messages/criticalToEnemy",
                                                                                      schemaPath: "#/$defs/TermsMessages/properties/criticalToEnemy/type",
                                                                                      keyword: "type",
                                                                                      params: { type: "string" },
                                                                                      message: "must be string"
                                                                                    }], !1;
                                                                                    n = !0;
                                                                                  } else n = !0;
                                                                                  if (n) {
                                                                                    if (e.debuffAdd !== void 0) {
                                                                                      if (typeof e.debuffAdd != "string") return s.errors = [{
                                                                                        instancePath: r + "/terms/messages/debuffAdd",
                                                                                        schemaPath: "#/$defs/TermsMessages/properties/debuffAdd/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "string" },
                                                                                        message: "must be string"
                                                                                      }], !1;
                                                                                      n = !0;
                                                                                    } else n = !0;
                                                                                    if (n) {
                                                                                      if (e.defeat !== void 0) {
                                                                                        if (typeof e.defeat != "string") return s.errors = [{ instancePath: r + "/terms/messages/defeat", schemaPath: "#/$defs/TermsMessages/properties/defeat/type", keyword: "type", params: {
                                                                                          type: "string"
                                                                                        }, message: "must be string" }], !1;
                                                                                        n = !0;
                                                                                      } else n = !0;
                                                                                      if (n) {
                                                                                        if (e.emerge !== void 0) {
                                                                                          if (typeof e.emerge != "string") return s.errors = [{
                                                                                            instancePath: r + "/terms/messages/emerge",
                                                                                            schemaPath: "#/$defs/TermsMessages/properties/emerge/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "string" },
                                                                                            message: "must be string"
                                                                                          }], !1;
                                                                                          n = !0;
                                                                                        } else n = !0;
                                                                                        if (n) {
                                                                                          if (e.enemyDamage !== void 0) {
                                                                                            if (typeof e.enemyDamage != "string") return s.errors = [{
                                                                                              instancePath: r + "/terms/messages/enemyDamage",
                                                                                              schemaPath: "#/$defs/TermsMessages/properties/enemyDamage/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "string" },
                                                                                              message: "must be string"
                                                                                            }], !1;
                                                                                            n = !0;
                                                                                          } else n = !0;
                                                                                          if (n) {
                                                                                            if (e.enemyDrain !== void 0) {
                                                                                              if (typeof e.enemyDrain != "string") return s.errors = [{
                                                                                                instancePath: r + "/terms/messages/enemyDrain",
                                                                                                schemaPath: "#/$defs/TermsMessages/properties/enemyDrain/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "string" },
                                                                                                message: "must be string"
                                                                                              }], !1;
                                                                                              n = !0;
                                                                                            } else n = !0;
                                                                                            if (n) {
                                                                                              if (e.enemyGain !== void 0) {
                                                                                                if (typeof e.enemyGain != "string") return s.errors = [{
                                                                                                  instancePath: r + "/terms/messages/enemyGain",
                                                                                                  schemaPath: "#/$defs/TermsMessages/properties/enemyGain/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "string" },
                                                                                                  message: "must be string"
                                                                                                }], !1;
                                                                                                n = !0;
                                                                                              } else n = !0;
                                                                                              if (n) {
                                                                                                if (e.enemyLoss !== void 0) {
                                                                                                  if (typeof e.enemyLoss != "string") return s.errors = [{
                                                                                                    instancePath: r + "/terms/messages/enemyLoss",
                                                                                                    schemaPath: "#/$defs/TermsMessages/properties/enemyLoss/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "string" },
                                                                                                    message: "must be string"
                                                                                                  }], !1;
                                                                                                  n = !0;
                                                                                                } else n = !0;
                                                                                                if (n) {
                                                                                                  if (e.enemyNoDamage !== void 0) {
                                                                                                    if (typeof e.enemyNoDamage != "string") return s.errors = [{
                                                                                                      instancePath: r + "/terms/messages/enemyNoDamage",
                                                                                                      schemaPath: "#/$defs/TermsMessages/properties/enemyNoDamage/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "string" },
                                                                                                      message: "must be string"
                                                                                                    }], !1;
                                                                                                    n = !0;
                                                                                                  } else n = !0;
                                                                                                  if (n) {
                                                                                                    if (e.enemyNoHit !== void 0) {
                                                                                                      if (typeof e.enemyNoHit != "string") return s.errors = [{
                                                                                                        instancePath: r + "/terms/messages/enemyNoHit",
                                                                                                        schemaPath: "#/$defs/TermsMessages/properties/enemyNoHit/type",
                                                                                                        keyword: "type",
                                                                                                        params: { type: "string" },
                                                                                                        message: "must be string"
                                                                                                      }], !1;
                                                                                                      n = !0;
                                                                                                    } else n = !0;
                                                                                                    if (n) {
                                                                                                      if (e.enemyRecovery !== void 0) {
                                                                                                        if (typeof e.enemyRecovery != "string") return s.errors = [{
                                                                                                          instancePath: r + "/terms/messages/enemyRecovery",
                                                                                                          schemaPath: "#/$defs/TermsMessages/properties/enemyRecovery/type",
                                                                                                          keyword: "type",
                                                                                                          params: { type: "string" },
                                                                                                          message: "must be string"
                                                                                                        }], !1;
                                                                                                        n = !0;
                                                                                                      } else n = !0;
                                                                                                      if (n) {
                                                                                                        if (e.escapeFailure !== void 0) {
                                                                                                          if (typeof e.escapeFailure != "string") return s.errors = [{
                                                                                                            instancePath: r + "/terms/messages/escapeFailure",
                                                                                                            schemaPath: "#/$defs/TermsMessages/properties/escapeFailure/type",
                                                                                                            keyword: "type",
                                                                                                            params: { type: "string" },
                                                                                                            message: "must be string"
                                                                                                          }], !1;
                                                                                                          n = !0;
                                                                                                        } else n = !0;
                                                                                                        if (n) {
                                                                                                          if (e.escapeStart !== void 0) {
                                                                                                            if (typeof e.escapeStart != "string") return s.errors = [{
                                                                                                              instancePath: r + "/terms/messages/escapeStart",
                                                                                                              schemaPath: "#/$defs/TermsMessages/properties/escapeStart/type",
                                                                                                              keyword: "type",
                                                                                                              params: { type: "string" },
                                                                                                              message: "must be string"
                                                                                                            }], !1;
                                                                                                            n = !0;
                                                                                                          } else n = !0;
                                                                                                          if (n) {
                                                                                                            if (e.evasion !== void 0) {
                                                                                                              if (typeof e.evasion != "string") return s.errors = [{
                                                                                                                instancePath: r + "/terms/messages/evasion",
                                                                                                                schemaPath: "#/$defs/TermsMessages/properties/evasion/type",
                                                                                                                keyword: "type",
                                                                                                                params: { type: "string" },
                                                                                                                message: "must be string"
                                                                                                              }], !1;
                                                                                                              n = !0;
                                                                                                            } else n = !0;
                                                                                                            if (n) {
                                                                                                              if (e.expNext !== void 0) {
                                                                                                                if (typeof e.expNext != "string") return s.errors = [{
                                                                                                                  instancePath: r + "/terms/messages/expNext",
                                                                                                                  schemaPath: "#/$defs/TermsMessages/properties/expNext/type",
                                                                                                                  keyword: "type",
                                                                                                                  params: { type: "string" },
                                                                                                                  message: "must be string"
                                                                                                                }], !1;
                                                                                                                n = !0;
                                                                                                              } else n = !0;
                                                                                                              if (n) {
                                                                                                                if (e.expTotal !== void 0) {
                                                                                                                  if (typeof e.expTotal != "string") return s.errors = [{
                                                                                                                    instancePath: r + "/terms/messages/expTotal",
                                                                                                                    schemaPath: "#/$defs/TermsMessages/properties/expTotal/type",
                                                                                                                    keyword: "type",
                                                                                                                    params: { type: "string" },
                                                                                                                    message: "must be string"
                                                                                                                  }], !1;
                                                                                                                  n = !0;
                                                                                                                } else n = !0;
                                                                                                                if (n) {
                                                                                                                  if (e.file !== void 0) {
                                                                                                                    if (typeof e.file != "string") return s.errors = [{ instancePath: r + "/terms/messages/file", schemaPath: "#/$defs/TermsMessages/properties/file/type", keyword: "type", params: {
                                                                                                                      type: "string"
                                                                                                                    }, message: "must be string" }], !1;
                                                                                                                    n = !0;
                                                                                                                  } else n = !0;
                                                                                                                  if (n) {
                                                                                                                    if (e.levelUp !== void 0) {
                                                                                                                      if (typeof e.levelUp != "string") return s.errors = [{
                                                                                                                        instancePath: r + "/terms/messages/levelUp",
                                                                                                                        schemaPath: "#/$defs/TermsMessages/properties/levelUp/type",
                                                                                                                        keyword: "type",
                                                                                                                        params: { type: "string" },
                                                                                                                        message: "must be string"
                                                                                                                      }], !1;
                                                                                                                      n = !0;
                                                                                                                    } else n = !0;
                                                                                                                    if (n) {
                                                                                                                      if (e.loadMessage !== void 0) {
                                                                                                                        if (typeof e.loadMessage != "string") return s.errors = [{
                                                                                                                          instancePath: r + "/terms/messages/loadMessage",
                                                                                                                          schemaPath: "#/$defs/TermsMessages/properties/loadMessage/type",
                                                                                                                          keyword: "type",
                                                                                                                          params: { type: "string" },
                                                                                                                          message: "must be string"
                                                                                                                        }], !1;
                                                                                                                        n = !0;
                                                                                                                      } else n = !0;
                                                                                                                      if (n) {
                                                                                                                        if (e.magicEvasion !== void 0) {
                                                                                                                          if (typeof e.magicEvasion != "string") return s.errors = [{
                                                                                                                            instancePath: r + "/terms/messages/magicEvasion",
                                                                                                                            schemaPath: "#/$defs/TermsMessages/properties/magicEvasion/type",
                                                                                                                            keyword: "type",
                                                                                                                            params: { type: "string" },
                                                                                                                            message: "must be string"
                                                                                                                          }], !1;
                                                                                                                          n = !0;
                                                                                                                        } else n = !0;
                                                                                                                        if (n) {
                                                                                                                          if (e.magicReflection !== void 0) {
                                                                                                                            if (typeof e.magicReflection != "string") return s.errors = [{
                                                                                                                              instancePath: r + "/terms/messages/magicReflection",
                                                                                                                              schemaPath: "#/$defs/TermsMessages/properties/magicReflection/type",
                                                                                                                              keyword: "type",
                                                                                                                              params: { type: "string" },
                                                                                                                              message: "must be string"
                                                                                                                            }], !1;
                                                                                                                            n = !0;
                                                                                                                          } else n = !0;
                                                                                                                          if (n) {
                                                                                                                            if (e.meVolume !== void 0) {
                                                                                                                              if (typeof e.meVolume != "string") return s.errors = [{
                                                                                                                                instancePath: r + "/terms/messages/meVolume",
                                                                                                                                schemaPath: "#/$defs/TermsMessages/properties/meVolume/type",
                                                                                                                                keyword: "type",
                                                                                                                                params: { type: "string" },
                                                                                                                                message: "must be string"
                                                                                                                              }], !1;
                                                                                                                              n = !0;
                                                                                                                            } else n = !0;
                                                                                                                            if (n) {
                                                                                                                              if (e.obtainExp !== void 0) {
                                                                                                                                if (typeof e.obtainExp != "string") return s.errors = [{
                                                                                                                                  instancePath: r + "/terms/messages/obtainExp",
                                                                                                                                  schemaPath: "#/$defs/TermsMessages/properties/obtainExp/type",
                                                                                                                                  keyword: "type",
                                                                                                                                  params: { type: "string" },
                                                                                                                                  message: "must be string"
                                                                                                                                }], !1;
                                                                                                                                n = !0;
                                                                                                                              } else n = !0;
                                                                                                                              if (n) {
                                                                                                                                if (e.obtainGold !== void 0) {
                                                                                                                                  if (typeof e.obtainGold != "string") return s.errors = [{
                                                                                                                                    instancePath: r + "/terms/messages/obtainGold",
                                                                                                                                    schemaPath: "#/$defs/TermsMessages/properties/obtainGold/type",
                                                                                                                                    keyword: "type",
                                                                                                                                    params: { type: "string" },
                                                                                                                                    message: "must be string"
                                                                                                                                  }], !1;
                                                                                                                                  n = !0;
                                                                                                                                } else n = !0;
                                                                                                                                if (n) {
                                                                                                                                  if (e.obtainItem !== void 0) {
                                                                                                                                    if (typeof e.obtainItem != "string") return s.errors = [{
                                                                                                                                      instancePath: r + "/terms/messages/obtainItem",
                                                                                                                                      schemaPath: "#/$defs/TermsMessages/properties/obtainItem/type",
                                                                                                                                      keyword: "type",
                                                                                                                                      params: { type: "string" },
                                                                                                                                      message: "must be string"
                                                                                                                                    }], !1;
                                                                                                                                    n = !0;
                                                                                                                                  } else n = !0;
                                                                                                                                  if (n) {
                                                                                                                                    if (e.obtainSkill !== void 0) {
                                                                                                                                      if (typeof e.obtainSkill != "string") return s.errors = [{
                                                                                                                                        instancePath: r + "/terms/messages/obtainSkill",
                                                                                                                                        schemaPath: "#/$defs/TermsMessages/properties/obtainSkill/type",
                                                                                                                                        keyword: "type",
                                                                                                                                        params: { type: "string" },
                                                                                                                                        message: "must be string"
                                                                                                                                      }], !1;
                                                                                                                                      n = !0;
                                                                                                                                    } else n = !0;
                                                                                                                                    if (n) {
                                                                                                                                      if (e.partyName !== void 0) {
                                                                                                                                        if (typeof e.partyName != "string") return s.errors = [{
                                                                                                                                          instancePath: r + "/terms/messages/partyName",
                                                                                                                                          schemaPath: "#/$defs/TermsMessages/properties/partyName/type",
                                                                                                                                          keyword: "type",
                                                                                                                                          params: { type: "string" },
                                                                                                                                          message: "must be string"
                                                                                                                                        }], !1;
                                                                                                                                        n = !0;
                                                                                                                                      } else n = !0;
                                                                                                                                      if (n) {
                                                                                                                                        if (e.possession !== void 0) {
                                                                                                                                          if (typeof e.possession != "string") return s.errors = [{
                                                                                                                                            instancePath: r + "/terms/messages/possession",
                                                                                                                                            schemaPath: "#/$defs/TermsMessages/properties/possession/type",
                                                                                                                                            keyword: "type",
                                                                                                                                            params: { type: "string" },
                                                                                                                                            message: "must be string"
                                                                                                                                          }], !1;
                                                                                                                                          n = !0;
                                                                                                                                        } else n = !0;
                                                                                                                                        if (n) {
                                                                                                                                          if (e.preemptive !== void 0) {
                                                                                                                                            if (typeof e.preemptive != "string") return s.errors = [{
                                                                                                                                              instancePath: r + "/terms/messages/preemptive",
                                                                                                                                              schemaPath: "#/$defs/TermsMessages/properties/preemptive/type",
                                                                                                                                              keyword: "type",
                                                                                                                                              params: { type: "string" },
                                                                                                                                              message: "must be string"
                                                                                                                                            }], !1;
                                                                                                                                            n = !0;
                                                                                                                                          } else n = !0;
                                                                                                                                          if (n) {
                                                                                                                                            if (e.saveMessage !== void 0) {
                                                                                                                                              if (typeof e.saveMessage != "string") return s.errors = [{
                                                                                                                                                instancePath: r + "/terms/messages/saveMessage",
                                                                                                                                                schemaPath: "#/$defs/TermsMessages/properties/saveMessage/type",
                                                                                                                                                keyword: "type",
                                                                                                                                                params: { type: "string" },
                                                                                                                                                message: "must be string"
                                                                                                                                              }], !1;
                                                                                                                                              n = !0;
                                                                                                                                            } else n = !0;
                                                                                                                                            if (n) {
                                                                                                                                              if (e.seVolume !== void 0) {
                                                                                                                                                if (typeof e.seVolume != "string") return s.errors = [{
                                                                                                                                                  instancePath: r + "/terms/messages/seVolume",
                                                                                                                                                  schemaPath: "#/$defs/TermsMessages/properties/seVolume/type",
                                                                                                                                                  keyword: "type",
                                                                                                                                                  params: { type: "string" },
                                                                                                                                                  message: "must be string"
                                                                                                                                                }], !1;
                                                                                                                                                n = !0;
                                                                                                                                              } else n = !0;
                                                                                                                                              if (n) {
                                                                                                                                                if (e.substitute !== void 0) {
                                                                                                                                                  if (typeof e.substitute != "string") return s.errors = [{
                                                                                                                                                    instancePath: r + "/terms/messages/substitute",
                                                                                                                                                    schemaPath: "#/$defs/TermsMessages/properties/substitute/type",
                                                                                                                                                    keyword: "type",
                                                                                                                                                    params: { type: "string" },
                                                                                                                                                    message: "must be string"
                                                                                                                                                  }], !1;
                                                                                                                                                  n = !0;
                                                                                                                                                } else n = !0;
                                                                                                                                                if (n) {
                                                                                                                                                  if (e.surprise !== void 0) {
                                                                                                                                                    if (typeof e.surprise != "string") return s.errors = [{
                                                                                                                                                      instancePath: r + "/terms/messages/surprise",
                                                                                                                                                      schemaPath: "#/$defs/TermsMessages/properties/surprise/type",
                                                                                                                                                      keyword: "type",
                                                                                                                                                      params: { type: "string" },
                                                                                                                                                      message: "must be string"
                                                                                                                                                    }], !1;
                                                                                                                                                    n = !0;
                                                                                                                                                  } else n = !0;
                                                                                                                                                  if (n) {
                                                                                                                                                    if (e.touchUI !== void 0) {
                                                                                                                                                      if (typeof e.touchUI != "string") return s.errors = [{
                                                                                                                                                        instancePath: r + "/terms/messages/touchUI",
                                                                                                                                                        schemaPath: "#/$defs/TermsMessages/properties/touchUI/type",
                                                                                                                                                        keyword: "type",
                                                                                                                                                        params: { type: "string" },
                                                                                                                                                        message: "must be string"
                                                                                                                                                      }], !1;
                                                                                                                                                      n = !0;
                                                                                                                                                    } else n = !0;
                                                                                                                                                    if (n) {
                                                                                                                                                      if (e.useItem !== void 0) {
                                                                                                                                                        if (typeof e.useItem != "string") return s.errors = [{
                                                                                                                                                          instancePath: r + "/terms/messages/useItem",
                                                                                                                                                          schemaPath: "#/$defs/TermsMessages/properties/useItem/type",
                                                                                                                                                          keyword: "type",
                                                                                                                                                          params: { type: "string" },
                                                                                                                                                          message: "must be string"
                                                                                                                                                        }], !1;
                                                                                                                                                        n = !0;
                                                                                                                                                      } else n = !0;
                                                                                                                                                      if (n) if (e.victory !== void 0) {
                                                                                                                                                        if (typeof e.victory != "string") return s.errors = [{
                                                                                                                                                          instancePath: r + "/terms/messages/victory",
                                                                                                                                                          schemaPath: "#/$defs/TermsMessages/properties/victory/type",
                                                                                                                                                          keyword: "type",
                                                                                                                                                          params: { type: "string" },
                                                                                                                                                          message: "must be string"
                                                                                                                                                        }], !1;
                                                                                                                                                        n = !0;
                                                                                                                                                      } else n = !0;
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
                                              var I = o === 0;
                                            } else I = !0;
                                            if (I) {
                                              if (t.commands !== void 0) {
                                                let e = t.commands;
                                                const o = 0;
                                                if (!Array.isArray(e)) return s.errors = [{
                                                  instancePath: r + "/terms/commands",
                                                  schemaPath: "#/$defs/TermsCommands/type",
                                                  keyword: "type",
                                                  params: { type: "array" },
                                                  message: "must be array"
                                                }], !1;
                                                if (e.length > 26) return s.errors = [{
                                                  instancePath: r + "/terms/commands",
                                                  schemaPath: "#/$defs/TermsCommands/maxItems",
                                                  keyword: "maxItems",
                                                  params: { limit: 26 },
                                                  message: "must NOT have more than 26 items"
                                                }], !1;
                                                if (e.length < 26) return s.errors = [{
                                                  instancePath: r + "/terms/commands",
                                                  schemaPath: "#/$defs/TermsCommands/minItems",
                                                  keyword: "minItems",
                                                  params: { limit: 26 },
                                                  message: "must NOT have fewer than 26 items"
                                                }], !1;
                                                {
                                                  const d = e.length;
                                                  if (d > 0) {
                                                    if (typeof e[0] != "string") return s.errors = [{ instancePath: r + "/terms/commands/0", schemaPath: "#/$defs/TermsCommands/items/0/type", keyword: "type", params: {
                                                      type: "string"
                                                    }, message: "must be string" }], !1;
                                                    var f = !0;
                                                  }
                                                  if (f) {
                                                    if (d > 1) {
                                                      if (typeof e[1] != "string") return s.errors = [{
                                                        instancePath: r + "/terms/commands/1",
                                                        schemaPath: "#/$defs/TermsCommands/items/1/type",
                                                        keyword: "type",
                                                        params: { type: "string" },
                                                        message: "must be string"
                                                      }], !1;
                                                      f = !0;
                                                    }
                                                    if (f) {
                                                      if (d > 2) {
                                                        if (typeof e[2] != "string") return s.errors = [{
                                                          instancePath: r + "/terms/commands/2",
                                                          schemaPath: "#/$defs/TermsCommands/items/2/type",
                                                          keyword: "type",
                                                          params: { type: "string" },
                                                          message: "must be string"
                                                        }], !1;
                                                        f = !0;
                                                      }
                                                      if (f) {
                                                        if (d > 3) {
                                                          if (typeof e[3] != "string") return s.errors = [{
                                                            instancePath: r + "/terms/commands/3",
                                                            schemaPath: "#/$defs/TermsCommands/items/3/type",
                                                            keyword: "type",
                                                            params: { type: "string" },
                                                            message: "must be string"
                                                          }], !1;
                                                          f = !0;
                                                        }
                                                        if (f) {
                                                          if (d > 4) {
                                                            if (typeof e[4] != "string") return s.errors = [{
                                                              instancePath: r + "/terms/commands/4",
                                                              schemaPath: "#/$defs/TermsCommands/items/4/type",
                                                              keyword: "type",
                                                              params: { type: "string" },
                                                              message: "must be string"
                                                            }], !1;
                                                            f = !0;
                                                          }
                                                          if (f) {
                                                            if (d > 5) {
                                                              if (typeof e[5] != "string") return s.errors = [{
                                                                instancePath: r + "/terms/commands/5",
                                                                schemaPath: "#/$defs/TermsCommands/items/5/type",
                                                                keyword: "type",
                                                                params: { type: "string" },
                                                                message: "must be string"
                                                              }], !1;
                                                              f = !0;
                                                            }
                                                            if (f) {
                                                              if (d > 6) {
                                                                if (typeof e[6] != "string") return s.errors = [{
                                                                  instancePath: r + "/terms/commands/6",
                                                                  schemaPath: "#/$defs/TermsCommands/items/6/type",
                                                                  keyword: "type",
                                                                  params: { type: "string" },
                                                                  message: "must be string"
                                                                }], !1;
                                                                f = !0;
                                                              }
                                                              if (f) {
                                                                if (d > 7) {
                                                                  if (typeof e[7] != "string") return s.errors = [{
                                                                    instancePath: r + "/terms/commands/7",
                                                                    schemaPath: "#/$defs/TermsCommands/items/7/type",
                                                                    keyword: "type",
                                                                    params: { type: "string" },
                                                                    message: "must be string"
                                                                  }], !1;
                                                                  f = !0;
                                                                }
                                                                if (f) {
                                                                  if (d > 8) {
                                                                    if (typeof e[8] != "string") return s.errors = [{
                                                                      instancePath: r + "/terms/commands/8",
                                                                      schemaPath: "#/$defs/TermsCommands/items/8/type",
                                                                      keyword: "type",
                                                                      params: { type: "string" },
                                                                      message: "must be string"
                                                                    }], !1;
                                                                    f = !0;
                                                                  }
                                                                  if (f) {
                                                                    if (d > 9) {
                                                                      if (typeof e[9] != "string") return s.errors = [{
                                                                        instancePath: r + "/terms/commands/9",
                                                                        schemaPath: "#/$defs/TermsCommands/items/9/type",
                                                                        keyword: "type",
                                                                        params: { type: "string" },
                                                                        message: "must be string"
                                                                      }], !1;
                                                                      f = !0;
                                                                    }
                                                                    if (f) {
                                                                      if (d > 10) {
                                                                        if (typeof e[10] != "string") return s.errors = [{
                                                                          instancePath: r + "/terms/commands/10",
                                                                          schemaPath: "#/$defs/TermsCommands/items/10/type",
                                                                          keyword: "type",
                                                                          params: { type: "string" },
                                                                          message: "must be string"
                                                                        }], !1;
                                                                        f = !0;
                                                                      }
                                                                      if (f) {
                                                                        if (d > 11) {
                                                                          if (typeof e[11] != "string") return s.errors = [{
                                                                            instancePath: r + "/terms/commands/11",
                                                                            schemaPath: "#/$defs/TermsCommands/items/11/type",
                                                                            keyword: "type",
                                                                            params: { type: "string" },
                                                                            message: "must be string"
                                                                          }], !1;
                                                                          f = !0;
                                                                        }
                                                                        if (f) {
                                                                          if (d > 12) {
                                                                            if (typeof e[12] != "string") return s.errors = [{
                                                                              instancePath: r + "/terms/commands/12",
                                                                              schemaPath: "#/$defs/TermsCommands/items/12/type",
                                                                              keyword: "type",
                                                                              params: { type: "string" },
                                                                              message: "must be string"
                                                                            }], !1;
                                                                            f = !0;
                                                                          }
                                                                          if (f) {
                                                                            if (d > 13) {
                                                                              if (typeof e[13] != "string") return s.errors = [{
                                                                                instancePath: r + "/terms/commands/13",
                                                                                schemaPath: "#/$defs/TermsCommands/items/13/type",
                                                                                keyword: "type",
                                                                                params: { type: "string" },
                                                                                message: "must be string"
                                                                              }], !1;
                                                                              f = !0;
                                                                            }
                                                                            if (f) {
                                                                              if (d > 14) {
                                                                                if (typeof e[14] != "string") return s.errors = [{
                                                                                  instancePath: r + "/terms/commands/14",
                                                                                  schemaPath: "#/$defs/TermsCommands/items/14/type",
                                                                                  keyword: "type",
                                                                                  params: { type: "string" },
                                                                                  message: "must be string"
                                                                                }], !1;
                                                                                f = !0;
                                                                              }
                                                                              if (f) {
                                                                                if (d > 15) {
                                                                                  if (typeof e[15] != "string") return s.errors = [{
                                                                                    instancePath: r + "/terms/commands/15",
                                                                                    schemaPath: "#/$defs/TermsCommands/items/15/type",
                                                                                    keyword: "type",
                                                                                    params: { type: "string" },
                                                                                    message: "must be string"
                                                                                  }], !1;
                                                                                  f = !0;
                                                                                }
                                                                                if (f) {
                                                                                  if (d > 16) {
                                                                                    if (typeof e[16] != "string") return s.errors = [{
                                                                                      instancePath: r + "/terms/commands/16",
                                                                                      schemaPath: "#/$defs/TermsCommands/items/16/type",
                                                                                      keyword: "type",
                                                                                      params: { type: "string" },
                                                                                      message: "must be string"
                                                                                    }], !1;
                                                                                    f = !0;
                                                                                  }
                                                                                  if (f) {
                                                                                    if (d > 17) {
                                                                                      if (typeof e[17] != "string") return s.errors = [{
                                                                                        instancePath: r + "/terms/commands/17",
                                                                                        schemaPath: "#/$defs/TermsCommands/items/17/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "string" },
                                                                                        message: "must be string"
                                                                                      }], !1;
                                                                                      f = !0;
                                                                                    }
                                                                                    if (f) {
                                                                                      if (d > 18) {
                                                                                        if (typeof e[18] != "string") return s.errors = [{
                                                                                          instancePath: r + "/terms/commands/18",
                                                                                          schemaPath: "#/$defs/TermsCommands/items/18/type",
                                                                                          keyword: "type",
                                                                                          params: { type: "string" },
                                                                                          message: "must be string"
                                                                                        }], !1;
                                                                                        f = !0;
                                                                                      }
                                                                                      if (f) {
                                                                                        if (d > 19) {
                                                                                          if (typeof e[19] != "string") return s.errors = [{
                                                                                            instancePath: r + "/terms/commands/19",
                                                                                            schemaPath: "#/$defs/TermsCommands/items/19/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "string" },
                                                                                            message: "must be string"
                                                                                          }], !1;
                                                                                          f = !0;
                                                                                        }
                                                                                        if (f) {
                                                                                          if (d > 20) {
                                                                                            let a = e[20];
                                                                                            const y = 0;
                                                                                            if (typeof a != "string" && a !== null) return s.errors = [{
                                                                                              instancePath: r + "/terms/commands/20",
                                                                                              schemaPath: "#/$defs/TermsCommands/items/20/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "string" },
                                                                                              message: "must be string"
                                                                                            }], !1;
                                                                                            f = y === 0;
                                                                                          }
                                                                                          if (f) {
                                                                                            if (d > 21) {
                                                                                              if (typeof e[21] != "string") return s.errors = [{
                                                                                                instancePath: r + "/terms/commands/21",
                                                                                                schemaPath: "#/$defs/TermsCommands/items/21/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "string" },
                                                                                                message: "must be string"
                                                                                              }], !1;
                                                                                              f = !0;
                                                                                            }
                                                                                            if (f) {
                                                                                              if (d > 22) {
                                                                                                if (typeof e[22] != "string") return s.errors = [{
                                                                                                  instancePath: r + "/terms/commands/22",
                                                                                                  schemaPath: "#/$defs/TermsCommands/items/22/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "string" },
                                                                                                  message: "must be string"
                                                                                                }], !1;
                                                                                                f = !0;
                                                                                              }
                                                                                              if (f) {
                                                                                                if (d > 23) {
                                                                                                  let a = e[23];
                                                                                                  const y = 0;
                                                                                                  if (typeof a != "string" && a !== null) return s.errors = [{
                                                                                                    instancePath: r + "/terms/commands/23",
                                                                                                    schemaPath: "#/$defs/TermsCommands/items/23/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "string" },
                                                                                                    message: "must be string"
                                                                                                  }], !1;
                                                                                                  f = y === 0;
                                                                                                }
                                                                                                if (f) {
                                                                                                  if (d > 24) {
                                                                                                    if (typeof e[24] != "string") return s.errors = [{
                                                                                                      instancePath: r + "/terms/commands/24",
                                                                                                      schemaPath: "#/$defs/TermsCommands/items/24/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "string" },
                                                                                                      message: "must be string"
                                                                                                    }], !1;
                                                                                                    f = !0;
                                                                                                  }
                                                                                                  if (f && d > 25) {
                                                                                                    if (typeof e[25] != "string") return s.errors = [{
                                                                                                      instancePath: r + "/terms/commands/25",
                                                                                                      schemaPath: "#/$defs/TermsCommands/items/25/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "string" },
                                                                                                      message: "must be string"
                                                                                                    }], !1;
                                                                                                    f = !0;
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
                                                I = o === 0;
                                              } else I = !0;
                                              if (I) {
                                                if (t.basic !== void 0) {
                                                  let e = t.basic;
                                                  const o = 0;
                                                  if (!Array.isArray(e)) return s.errors = [{ instancePath: r + "/terms/basic", schemaPath: "#/$defs/TermsBasic/type", keyword: "type", params: {
                                                    type: "array"
                                                  }, message: "must be array" }], !1;
                                                  if (e.length > 10) return s.errors = [{ instancePath: r + "/terms/basic", schemaPath: "#/$defs/TermsBasic/maxItems", keyword: "maxItems", params: {
                                                    limit: 10
                                                  }, message: "must NOT have more than 10 items" }], !1;
                                                  if (e.length < 10) return s.errors = [{
                                                    instancePath: r + "/terms/basic",
                                                    schemaPath: "#/$defs/TermsBasic/minItems",
                                                    keyword: "minItems",
                                                    params: { limit: 10 },
                                                    message: "must NOT have fewer than 10 items"
                                                  }], !1;
                                                  {
                                                    const d = e.length;
                                                    for (let a = 0; a < d; a++)
                                                      if (typeof e[a] != "string") return s.errors = [{
                                                        instancePath: r + "/terms/basic/" + a,
                                                        schemaPath: "#/$defs/TermsBasic/items/type",
                                                        keyword: "type",
                                                        params: { type: "string" },
                                                        message: "must be string"
                                                      }], !1;
                                                  }
                                                  I = o === 0;
                                                } else I = !0;
                                                if (I) if (t.params !== void 0) {
                                                  let e = t.params;
                                                  const o = 0;
                                                  if (!Array.isArray(e)) return s.errors = [{
                                                    instancePath: r + "/terms/params",
                                                    schemaPath: "#/$defs/TermsParams/type",
                                                    keyword: "type",
                                                    params: { type: "array" },
                                                    message: "must be array"
                                                  }], !1;
                                                  if (e.length > 10) return s.errors = [{
                                                    instancePath: r + "/terms/params",
                                                    schemaPath: "#/$defs/TermsParams/maxItems",
                                                    keyword: "maxItems",
                                                    params: { limit: 10 },
                                                    message: "must NOT have more than 10 items"
                                                  }], !1;
                                                  if (e.length < 10) return s.errors = [{
                                                    instancePath: r + "/terms/params",
                                                    schemaPath: "#/$defs/TermsParams/minItems",
                                                    keyword: "minItems",
                                                    params: { limit: 10 },
                                                    message: "must NOT have fewer than 10 items"
                                                  }], !1;
                                                  {
                                                    const d = e.length;
                                                    for (let a = 0; a < d; a++) {
                                                      let y = e[a];
                                                      const g = 0;
                                                      if (typeof y != "string") return s.errors = [{
                                                        instancePath: r + "/terms/params/" + a,
                                                        schemaPath: "#/$defs/TermsParams/items/type",
                                                        keyword: "type",
                                                        params: { type: "string" },
                                                        message: "must be string"
                                                      }], !1;
                                                      if (q(y) < 0) return s.errors = [{
                                                        instancePath: r + "/terms/params/" + a,
                                                        schemaPath: "#/$defs/TermsParams/items/minLength",
                                                        keyword: "minLength",
                                                        params: { limit: 0 },
                                                        message: "must NOT have fewer than 0 characters"
                                                      }], !1;
                                                      if (g !== 0) break;
                                                    }
                                                  }
                                                  I = o === 0;
                                                } else I = !0;
                                              }
                                            }
                                          }
                                          m = c === 0;
                                        } else m = !0;
                                        if (m) {
                                          if (i.optAutosave !== void 0) {
                                            if (typeof i.optAutosave != "boolean") return s.errors = [{
                                              instancePath: r + "/optAutosave",
                                              schemaPath: "#/properties/optAutosave/type",
                                              keyword: "type",
                                              params: { type: "boolean" },
                                              message: "must be boolean"
                                            }], !1;
                                            m = !0;
                                          } else m = !0;
                                          if (m) {
                                            if (i.optDisplayTp !== void 0) {
                                              if (typeof i.optDisplayTp != "boolean") return s.errors = [{
                                                instancePath: r + "/optDisplayTp",
                                                schemaPath: "#/properties/optDisplayTp/type",
                                                keyword: "type",
                                                params: { type: "boolean" },
                                                message: "must be boolean"
                                              }], !1;
                                              m = !0;
                                            } else m = !0;
                                            if (m) {
                                              if (i.optFloorDeath !== void 0) {
                                                if (typeof i.optFloorDeath != "boolean") return s.errors = [{
                                                  instancePath: r + "/optFloorDeath",
                                                  schemaPath: "#/properties/optFloorDeath/type",
                                                  keyword: "type",
                                                  params: { type: "boolean" },
                                                  message: "must be boolean"
                                                }], !1;
                                                m = !0;
                                              } else m = !0;
                                              if (m) {
                                                if (i.optFollowers !== void 0) {
                                                  if (typeof i.optFollowers != "boolean") return s.errors = [{
                                                    instancePath: r + "/optFollowers",
                                                    schemaPath: "#/properties/optFollowers/type",
                                                    keyword: "type",
                                                    params: { type: "boolean" },
                                                    message: "must be boolean"
                                                  }], !1;
                                                  m = !0;
                                                } else m = !0;
                                                if (m) {
                                                  if (i.optKeyItemsNumber !== void 0) {
                                                    if (typeof i.optKeyItemsNumber != "boolean") return s.errors = [{ instancePath: r + "/optKeyItemsNumber", schemaPath: "#/properties/optKeyItemsNumber/type", keyword: "type", params: {
                                                      type: "boolean"
                                                    }, message: "must be boolean" }], !1;
                                                    m = !0;
                                                  } else m = !0;
                                                  if (m) {
                                                    if (i.optSideView !== void 0) {
                                                      if (typeof i.optSideView != "boolean") return s.errors = [{
                                                        instancePath: r + "/optSideView",
                                                        schemaPath: "#/properties/optSideView/type",
                                                        keyword: "type",
                                                        params: { type: "boolean" },
                                                        message: "must be boolean"
                                                      }], !1;
                                                      m = !0;
                                                    } else m = !0;
                                                    if (m) {
                                                      if (i.optSlipDeath !== void 0) {
                                                        if (typeof i.optSlipDeath != "boolean") return s.errors = [{
                                                          instancePath: r + "/optSlipDeath",
                                                          schemaPath: "#/properties/optSlipDeath/type",
                                                          keyword: "type",
                                                          params: { type: "boolean" },
                                                          message: "must be boolean"
                                                        }], !1;
                                                        m = !0;
                                                      } else m = !0;
                                                      if (m) {
                                                        if (i.optTransparent !== void 0) {
                                                          if (typeof i.optTransparent != "boolean") return s.errors = [{
                                                            instancePath: r + "/optTransparent",
                                                            schemaPath: "#/properties/optTransparent/type",
                                                            keyword: "type",
                                                            params: { type: "boolean" },
                                                            message: "must be boolean"
                                                          }], !1;
                                                          m = !0;
                                                        } else m = !0;
                                                        if (m) {
                                                          if (i.optSplashScreen !== void 0) {
                                                            if (typeof i.optSplashScreen != "boolean") return s.errors = [{
                                                              instancePath: r + "/optSplashScreen",
                                                              schemaPath: "#/properties/optSplashScreen/type",
                                                              keyword: "type",
                                                              params: { type: "boolean" },
                                                              message: "must be boolean"
                                                            }], !1;
                                                            m = !0;
                                                          } else m = !0;
                                                          if (m) {
                                                            if (i.optDrawTitle !== void 0) {
                                                              if (typeof i.optDrawTitle != "boolean") return s.errors = [{
                                                                instancePath: r + "/optDrawTitle",
                                                                schemaPath: "#/properties/optDrawTitle/type",
                                                                keyword: "type",
                                                                params: { type: "boolean" },
                                                                message: "must be boolean"
                                                              }], !1;
                                                              m = !0;
                                                            } else m = !0;
                                                            if (m) {
                                                              if (i.optExtraExp !== void 0) {
                                                                if (typeof i.optExtraExp != "boolean") return s.errors = [{
                                                                  instancePath: r + "/optExtraExp",
                                                                  schemaPath: "#/properties/optExtraExp/type",
                                                                  keyword: "type",
                                                                  params: { type: "boolean" },
                                                                  message: "must be boolean"
                                                                }], !1;
                                                                m = !0;
                                                              } else m = !0;
                                                              if (m) {
                                                                if (i.optMessageSkip !== void 0) {
                                                                  if (typeof i.optMessageSkip != "boolean") return s.errors = [{
                                                                    instancePath: r + "/optMessageSkip",
                                                                    schemaPath: "#/properties/optMessageSkip/type",
                                                                    keyword: "type",
                                                                    params: { type: "boolean" },
                                                                    message: "must be boolean"
                                                                  }], !1;
                                                                  m = !0;
                                                                } else m = !0;
                                                                if (m) {
                                                                  if (i.startMapId !== void 0) {
                                                                    let t = i.startMapId;
                                                                    const c = 0;
                                                                    if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                      instancePath: r + "/startMapId",
                                                                      schemaPath: "#/properties/startMapId/type",
                                                                      keyword: "type",
                                                                      params: { type: "integer" },
                                                                      message: "must be integer"
                                                                    }], !1;
                                                                    if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{ instancePath: r + "/startMapId", schemaPath: "#/properties/startMapId/minimum", keyword: "minimum", params: {
                                                                      comparison: ">=",
                                                                      limit: 0
                                                                    }, message: "must be >= 0" }], !1;
                                                                    m = c === 0;
                                                                  } else m = !0;
                                                                  if (m) {
                                                                    if (i.startX !== void 0) {
                                                                      let t = i.startX;
                                                                      const c = 0;
                                                                      if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                        instancePath: r + "/startX",
                                                                        schemaPath: "#/properties/startX/type",
                                                                        keyword: "type",
                                                                        params: { type: "integer" },
                                                                        message: "must be integer"
                                                                      }], !1;
                                                                      if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{
                                                                        instancePath: r + "/startX",
                                                                        schemaPath: "#/properties/startX/minimum",
                                                                        keyword: "minimum",
                                                                        params: { comparison: ">=", limit: 0 },
                                                                        message: "must be >= 0"
                                                                      }], !1;
                                                                      m = c === 0;
                                                                    } else m = !0;
                                                                    if (m) {
                                                                      if (i.startY !== void 0) {
                                                                        let t = i.startY;
                                                                        const c = 0;
                                                                        if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                          instancePath: r + "/startY",
                                                                          schemaPath: "#/properties/startY/type",
                                                                          keyword: "type",
                                                                          params: { type: "integer" },
                                                                          message: "must be integer"
                                                                        }], !1;
                                                                        if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{
                                                                          instancePath: r + "/startY",
                                                                          schemaPath: "#/properties/startY/minimum",
                                                                          keyword: "minimum",
                                                                          params: { comparison: ">=", limit: 0 },
                                                                          message: "must be >= 0"
                                                                        }], !1;
                                                                        m = c === 0;
                                                                      } else m = !0;
                                                                      if (m) {
                                                                        if (i.faceSize !== void 0) {
                                                                          let t = i.faceSize;
                                                                          const c = 0;
                                                                          if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                            instancePath: r + "/faceSize",
                                                                            schemaPath: "#/properties/faceSize/type",
                                                                            keyword: "type",
                                                                            params: { type: "integer" },
                                                                            message: "must be integer"
                                                                          }], !1;
                                                                          if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{
                                                                            instancePath: r + "/faceSize",
                                                                            schemaPath: "#/properties/faceSize/minimum",
                                                                            keyword: "minimum",
                                                                            params: { comparison: ">=", limit: 0 },
                                                                            message: "must be >= 0"
                                                                          }], !1;
                                                                          m = c === 0;
                                                                        } else m = !0;
                                                                        if (m) {
                                                                          if (i.tileSize !== void 0) {
                                                                            let t = i.tileSize;
                                                                            const c = 0;
                                                                            if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                              instancePath: r + "/tileSize",
                                                                              schemaPath: "#/properties/tileSize/type",
                                                                              keyword: "type",
                                                                              params: { type: "integer" },
                                                                              message: "must be integer"
                                                                            }], !1;
                                                                            if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{
                                                                              instancePath: r + "/tileSize",
                                                                              schemaPath: "#/properties/tileSize/minimum",
                                                                              keyword: "minimum",
                                                                              params: { comparison: ">=", limit: 0 },
                                                                              message: "must be >= 0"
                                                                            }], !1;
                                                                            m = c === 0;
                                                                          } else m = !0;
                                                                          if (m) {
                                                                            if (i.iconSize !== void 0) {
                                                                              let t = i.iconSize;
                                                                              const c = 0;
                                                                              if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                                instancePath: r + "/iconSize",
                                                                                schemaPath: "#/properties/iconSize/type",
                                                                                keyword: "type",
                                                                                params: { type: "integer" },
                                                                                message: "must be integer"
                                                                              }], !1;
                                                                              if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{
                                                                                instancePath: r + "/iconSize",
                                                                                schemaPath: "#/properties/iconSize/minimum",
                                                                                keyword: "minimum",
                                                                                params: { comparison: ">=", limit: 0 },
                                                                                message: "must be >= 0"
                                                                              }], !1;
                                                                              m = c === 0;
                                                                            } else m = !0;
                                                                            if (m) {
                                                                              if (i.battleSystem !== void 0) {
                                                                                let t = i.battleSystem;
                                                                                const c = 0;
                                                                                if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{ instancePath: r + "/battleSystem", schemaPath: "#/properties/battleSystem/type", keyword: "type", params: {
                                                                                  type: "integer"
                                                                                }, message: "must be integer" }], !1;
                                                                                if (typeof t == "number" && isFinite(t)) {
                                                                                  if (t > 2 || isNaN(t)) return s.errors = [{
                                                                                    instancePath: r + "/battleSystem",
                                                                                    schemaPath: "#/properties/battleSystem/maximum",
                                                                                    keyword: "maximum",
                                                                                    params: { comparison: "<=", limit: 2 },
                                                                                    message: "must be <= 2"
                                                                                  }], !1;
                                                                                  if (t < 0 || isNaN(t)) return s.errors = [{
                                                                                    instancePath: r + "/battleSystem",
                                                                                    schemaPath: "#/properties/battleSystem/minimum",
                                                                                    keyword: "minimum",
                                                                                    params: { comparison: ">=", limit: 0 },
                                                                                    message: "must be >= 0"
                                                                                  }], !1;
                                                                                }
                                                                                m = c === 0;
                                                                              } else m = !0;
                                                                              if (m) {
                                                                                if (i.elements !== void 0) {
                                                                                  let t = i.elements;
                                                                                  const c = 0;
                                                                                  if (!Array.isArray(t)) return s.errors = [{
                                                                                    instancePath: r + "/elements",
                                                                                    schemaPath: "#/properties/elements/type",
                                                                                    keyword: "type",
                                                                                    params: { type: "array" },
                                                                                    message: "must be array"
                                                                                  }], !1;
                                                                                  {
                                                                                    const p = t.length;
                                                                                    for (let e = 0; e < p; e++)
                                                                                      if (typeof t[e] != "string") return s.errors = [{
                                                                                        instancePath: r + "/elements/" + e,
                                                                                        schemaPath: "#/properties/elements/items/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "string" },
                                                                                        message: "must be string"
                                                                                      }], !1;
                                                                                  }
                                                                                  m = c === 0;
                                                                                } else m = !0;
                                                                                if (m) {
                                                                                  if (i.weaponTypes !== void 0) {
                                                                                    let t = i.weaponTypes;
                                                                                    const c = 0;
                                                                                    if (!Array.isArray(t)) return s.errors = [{
                                                                                      instancePath: r + "/weaponTypes",
                                                                                      schemaPath: "#/properties/weaponTypes/type",
                                                                                      keyword: "type",
                                                                                      params: { type: "array" },
                                                                                      message: "must be array"
                                                                                    }], !1;
                                                                                    {
                                                                                      const p = t.length;
                                                                                      for (let e = 0; e < p; e++)
                                                                                        if (typeof t[e] != "string") return s.errors = [{
                                                                                          instancePath: r + "/weaponTypes/" + e,
                                                                                          schemaPath: "#/properties/weaponTypes/items/type",
                                                                                          keyword: "type",
                                                                                          params: { type: "string" },
                                                                                          message: "must be string"
                                                                                        }], !1;
                                                                                    }
                                                                                    m = c === 0;
                                                                                  } else m = !0;
                                                                                  if (m) {
                                                                                    if (i.armorTypes !== void 0) {
                                                                                      let t = i.armorTypes;
                                                                                      const c = 0;
                                                                                      if (!Array.isArray(t)) return s.errors = [{
                                                                                        instancePath: r + "/armorTypes",
                                                                                        schemaPath: "#/properties/armorTypes/type",
                                                                                        keyword: "type",
                                                                                        params: { type: "array" },
                                                                                        message: "must be array"
                                                                                      }], !1;
                                                                                      {
                                                                                        const p = t.length;
                                                                                        for (let e = 0; e < p; e++)
                                                                                          if (typeof t[e] != "string") return s.errors = [{
                                                                                            instancePath: r + "/armorTypes/" + e,
                                                                                            schemaPath: "#/properties/armorTypes/items/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "string" },
                                                                                            message: "must be string"
                                                                                          }], !1;
                                                                                      }
                                                                                      m = c === 0;
                                                                                    } else m = !0;
                                                                                    if (m) {
                                                                                      if (i.equipTypes !== void 0) {
                                                                                        let t = i.equipTypes;
                                                                                        const c = 0;
                                                                                        if (!Array.isArray(t)) return s.errors = [{
                                                                                          instancePath: r + "/equipTypes",
                                                                                          schemaPath: "#/properties/equipTypes/type",
                                                                                          keyword: "type",
                                                                                          params: { type: "array" },
                                                                                          message: "must be array"
                                                                                        }], !1;
                                                                                        {
                                                                                          const p = t.length;
                                                                                          for (let e = 0; e < p; e++)
                                                                                            if (typeof t[e] != "string") return s.errors = [{
                                                                                              instancePath: r + "/equipTypes/" + e,
                                                                                              schemaPath: "#/properties/equipTypes/items/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "string" },
                                                                                              message: "must be string"
                                                                                            }], !1;
                                                                                        }
                                                                                        m = c === 0;
                                                                                      } else m = !0;
                                                                                      if (m) {
                                                                                        if (i.skillTypes !== void 0) {
                                                                                          let t = i.skillTypes;
                                                                                          const c = 0;
                                                                                          if (!Array.isArray(t)) return s.errors = [{
                                                                                            instancePath: r + "/skillTypes",
                                                                                            schemaPath: "#/properties/skillTypes/type",
                                                                                            keyword: "type",
                                                                                            params: { type: "array" },
                                                                                            message: "must be array"
                                                                                          }], !1;
                                                                                          {
                                                                                            const p = t.length;
                                                                                            for (let e = 0; e < p; e++)
                                                                                              if (typeof t[e] != "string") return s.errors = [{
                                                                                                instancePath: r + "/skillTypes/" + e,
                                                                                                schemaPath: "#/properties/skillTypes/items/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "string" },
                                                                                                message: "must be string"
                                                                                              }], !1;
                                                                                          }
                                                                                          m = c === 0;
                                                                                        } else m = !0;
                                                                                        if (m) {
                                                                                          if (i.switches !== void 0) {
                                                                                            let t = i.switches;
                                                                                            const c = 0;
                                                                                            if (!Array.isArray(t)) return s.errors = [{
                                                                                              instancePath: r + "/switches",
                                                                                              schemaPath: "#/properties/switches/type",
                                                                                              keyword: "type",
                                                                                              params: { type: "array" },
                                                                                              message: "must be array"
                                                                                            }], !1;
                                                                                            {
                                                                                              const p = t.length;
                                                                                              for (let e = 0; e < p; e++)
                                                                                                if (typeof t[e] != "string") return s.errors = [{
                                                                                                  instancePath: r + "/switches/" + e,
                                                                                                  schemaPath: "#/properties/switches/items/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "string" },
                                                                                                  message: "must be string"
                                                                                                }], !1;
                                                                                            }
                                                                                            m = c === 0;
                                                                                          } else m = !0;
                                                                                          if (m) {
                                                                                            if (i.variables !== void 0) {
                                                                                              let t = i.variables;
                                                                                              const c = 0;
                                                                                              if (!Array.isArray(t)) return s.errors = [{
                                                                                                instancePath: r + "/variables",
                                                                                                schemaPath: "#/properties/variables/type",
                                                                                                keyword: "type",
                                                                                                params: { type: "array" },
                                                                                                message: "must be array"
                                                                                              }], !1;
                                                                                              {
                                                                                                const p = t.length;
                                                                                                for (let e = 0; e < p; e++)
                                                                                                  if (typeof t[e] != "string") return s.errors = [{
                                                                                                    instancePath: r + "/variables/" + e,
                                                                                                    schemaPath: "#/properties/variables/items/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "string" },
                                                                                                    message: "must be string"
                                                                                                  }], !1;
                                                                                              }
                                                                                              m = c === 0;
                                                                                            } else m = !0;
                                                                                            if (m) {
                                                                                              if (i.magicSkills !== void 0) {
                                                                                                let t = i.magicSkills;
                                                                                                const c = 0;
                                                                                                if (!Array.isArray(t)) return s.errors = [{
                                                                                                  instancePath: r + "/magicSkills",
                                                                                                  schemaPath: "#/properties/magicSkills/type",
                                                                                                  keyword: "type",
                                                                                                  params: { type: "array" },
                                                                                                  message: "must be array"
                                                                                                }], !1;
                                                                                                {
                                                                                                  const p = t.length;
                                                                                                  for (let e = 0; e < p; e++) {
                                                                                                    let o = t[e];
                                                                                                    const d = 0;
                                                                                                    if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return s.errors = [{
                                                                                                      instancePath: r + "/magicSkills/" + e,
                                                                                                      schemaPath: "#/properties/magicSkills/items/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "integer" },
                                                                                                      message: "must be integer"
                                                                                                    }], !1;
                                                                                                    if (d !== 0) break;
                                                                                                  }
                                                                                                }
                                                                                                m = c === 0;
                                                                                              } else m = !0;
                                                                                              if (m) {
                                                                                                if (i.battleback1Name !== void 0) {
                                                                                                  if (typeof i.battleback1Name != "string") return s.errors = [{
                                                                                                    instancePath: r + "/battleback1Name",
                                                                                                    schemaPath: "#/properties/battleback1Name/type",
                                                                                                    keyword: "type",
                                                                                                    params: { type: "string" },
                                                                                                    message: "must be string"
                                                                                                  }], !1;
                                                                                                  m = !0;
                                                                                                } else m = !0;
                                                                                                if (m) {
                                                                                                  if (i.battleback2Name !== void 0) {
                                                                                                    if (typeof i.battleback2Name != "string") return s.errors = [{
                                                                                                      instancePath: r + "/battleback2Name",
                                                                                                      schemaPath: "#/properties/battleback2Name/type",
                                                                                                      keyword: "type",
                                                                                                      params: { type: "string" },
                                                                                                      message: "must be string"
                                                                                                    }], !1;
                                                                                                    m = !0;
                                                                                                  } else m = !0;
                                                                                                  if (m) {
                                                                                                    if (i.testTroopId !== void 0) {
                                                                                                      let t = i.testTroopId;
                                                                                                      const c = 0;
                                                                                                      if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                                                        instancePath: r + "/testTroopId",
                                                                                                        schemaPath: "#/properties/testTroopId/type",
                                                                                                        keyword: "type",
                                                                                                        params: { type: "integer" },
                                                                                                        message: "must be integer"
                                                                                                      }], !1;
                                                                                                      if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{ instancePath: r + "/testTroopId", schemaPath: "#/properties/testTroopId/minimum", keyword: "minimum", params: {
                                                                                                        comparison: ">=",
                                                                                                        limit: 0
                                                                                                      }, message: "must be >= 0" }], !1;
                                                                                                      m = c === 0;
                                                                                                    } else m = !0;
                                                                                                    if (m) {
                                                                                                      if (i.partyMembersArray !== void 0) {
                                                                                                        let t = i.partyMembersArray;
                                                                                                        const c = 0;
                                                                                                        if (!Array.isArray(t)) return s.errors = [{
                                                                                                          instancePath: r + "/partyMembersArray",
                                                                                                          schemaPath: "#/properties/partyMembersArray/type",
                                                                                                          keyword: "type",
                                                                                                          params: { type: "array" },
                                                                                                          message: "must be array"
                                                                                                        }], !1;
                                                                                                        {
                                                                                                          const p = t.length;
                                                                                                          for (let e = 0; e < p; e++) {
                                                                                                            let o = t[e];
                                                                                                            const d = 0;
                                                                                                            if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return s.errors = [{
                                                                                                              instancePath: r + "/partyMembersArray/" + e,
                                                                                                              schemaPath: "#/properties/partyMembersArray/items/type",
                                                                                                              keyword: "type",
                                                                                                              params: { type: "integer" },
                                                                                                              message: "must be integer"
                                                                                                            }], !1;
                                                                                                            if (d !== 0) break;
                                                                                                          }
                                                                                                        }
                                                                                                        m = c === 0;
                                                                                                      } else m = !0;
                                                                                                      if (m) {
                                                                                                        if (i.editMapId !== void 0) {
                                                                                                          let t = i.editMapId;
                                                                                                          const c = 0;
                                                                                                          if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                                                            instancePath: r + "/editMapId",
                                                                                                            schemaPath: "#/properties/editMapId/type",
                                                                                                            keyword: "type",
                                                                                                            params: { type: "integer" },
                                                                                                            message: "must be integer"
                                                                                                          }], !1;
                                                                                                          if (typeof t == "number" && isFinite(t) && (t < 0 || isNaN(t))) return s.errors = [{ instancePath: r + "/editMapId", schemaPath: "#/properties/editMapId/minimum", keyword: "minimum", params: {
                                                                                                            comparison: ">=",
                                                                                                            limit: 0
                                                                                                          }, message: "must be >= 0" }], !1;
                                                                                                          m = c === 0;
                                                                                                        } else m = !0;
                                                                                                        if (m) {
                                                                                                          if (i.battlerHue !== void 0) {
                                                                                                            let t = i.battlerHue;
                                                                                                            const c = 0;
                                                                                                            if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{
                                                                                                              instancePath: r + "/battlerHue",
                                                                                                              schemaPath: "#/properties/battlerHue/type",
                                                                                                              keyword: "type",
                                                                                                              params: { type: "integer" },
                                                                                                              message: "must be integer"
                                                                                                            }], !1;
                                                                                                            m = c === 0;
                                                                                                          } else m = !0;
                                                                                                          if (m) {
                                                                                                            if (i.battlerName !== void 0) {
                                                                                                              if (typeof i.battlerName != "string") return s.errors = [{
                                                                                                                instancePath: r + "/battlerName",
                                                                                                                schemaPath: "#/properties/battlerName/type",
                                                                                                                keyword: "type",
                                                                                                                params: { type: "string" },
                                                                                                                message: "must be string"
                                                                                                              }], !1;
                                                                                                              m = !0;
                                                                                                            } else m = !0;
                                                                                                            if (m) {
                                                                                                              if (i.title1Name !== void 0) {
                                                                                                                if (typeof i.title1Name != "string") return s.errors = [{
                                                                                                                  instancePath: r + "/title1Name",
                                                                                                                  schemaPath: "#/properties/title1Name/type",
                                                                                                                  keyword: "type",
                                                                                                                  params: { type: "string" },
                                                                                                                  message: "must be string"
                                                                                                                }], !1;
                                                                                                                m = !0;
                                                                                                              } else m = !0;
                                                                                                              if (m) {
                                                                                                                if (i.title2Name !== void 0) {
                                                                                                                  if (typeof i.title2Name != "string") return s.errors = [{
                                                                                                                    instancePath: r + "/title2Name",
                                                                                                                    schemaPath: "#/properties/title2Name/type",
                                                                                                                    keyword: "type",
                                                                                                                    params: { type: "string" },
                                                                                                                    message: "must be string"
                                                                                                                  }], !1;
                                                                                                                  m = !0;
                                                                                                                } else m = !0;
                                                                                                                if (m) {
                                                                                                                  if (i.versionId !== void 0) {
                                                                                                                    let t = i.versionId;
                                                                                                                    const c = 0;
                                                                                                                    if (typeof t != "number" || t % 1 || isNaN(t) || !isFinite(t)) return s.errors = [{ instancePath: r + "/versionId", schemaPath: "#/properties/versionId/type", keyword: "type", params: {
                                                                                                                      type: "integer"
                                                                                                                    }, message: "must be integer" }], !1;
                                                                                                                    m = c === 0;
                                                                                                                  } else m = !0;
                                                                                                                  if (m) {
                                                                                                                    if (i.locale !== void 0) {
                                                                                                                      if (typeof i.locale != "string") return s.errors = [{
                                                                                                                        instancePath: r + "/locale",
                                                                                                                        schemaPath: "#/properties/locale/type",
                                                                                                                        keyword: "type",
                                                                                                                        params: { type: "string" },
                                                                                                                        message: "must be string"
                                                                                                                      }], !1;
                                                                                                                      m = !0;
                                                                                                                    } else m = !0;
                                                                                                                    if (m) if (i.windowTone !== void 0) {
                                                                                                                      let t = i.windowTone;
                                                                                                                      const c = 0;
                                                                                                                      if (!Array.isArray(t)) return s.errors = [{
                                                                                                                        instancePath: r + "/windowTone",
                                                                                                                        schemaPath: "#/properties/windowTone/type",
                                                                                                                        keyword: "type",
                                                                                                                        params: { type: "array" },
                                                                                                                        message: "must be array"
                                                                                                                      }], !1;
                                                                                                                      {
                                                                                                                        const p = t.length;
                                                                                                                        for (let e = 0; e < p; e++) {
                                                                                                                          let o = t[e];
                                                                                                                          const d = 0;
                                                                                                                          if (typeof o != "number" || o % 1 || isNaN(o) || !isFinite(o)) return s.errors = [{
                                                                                                                            instancePath: r + "/windowTone/" + e,
                                                                                                                            schemaPath: "#/properties/windowTone/items/type",
                                                                                                                            keyword: "type",
                                                                                                                            params: { type: "integer" },
                                                                                                                            message: "must be integer"
                                                                                                                          }], !1;
                                                                                                                          if (typeof o == "number" && isFinite(o)) {
                                                                                                                            if (o > 255 || isNaN(o)) return s.errors = [{
                                                                                                                              instancePath: r + "/windowTone/" + e,
                                                                                                                              schemaPath: "#/properties/windowTone/items/maximum",
                                                                                                                              keyword: "maximum",
                                                                                                                              params: { comparison: "<=", limit: 255 },
                                                                                                                              message: "must be <= 255"
                                                                                                                            }], !1;
                                                                                                                            if (o < 0 || isNaN(o)) return s.errors = [{
                                                                                                                              instancePath: r + "/windowTone/" + e,
                                                                                                                              schemaPath: "#/properties/windowTone/items/minimum",
                                                                                                                              keyword: "minimum",
                                                                                                                              params: { comparison: ">=", limit: 0 },
                                                                                                                              message: "must be >= 0"
                                                                                                                            }], !1;
                                                                                                                          }
                                                                                                                          if (d !== 0) break;
                                                                                                                        }
                                                                                                                      }
                                                                                                                      m = c === 0;
                                                                                                                    } else m = !0;
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
    return s.errors = null, !0;
  }
  return E.exports;
}()), J = (M) => K(M);
export {
  J as isDataSystem
};
