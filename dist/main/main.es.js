import { buildReferenceItemSources, compileItemEffectDisplayData, compileTraitDisplayData } from "../features/features.es.js";
import { AUTHOR_RMMZ, SRC_COLOR, detectFormatErrors, domainNames, isValidNumber } from "../libs/libs.es.js";
import { a, c, m } from "../shared/make.es.js";
import { m as m2 } from "../shared/mergeItemsSource.es.js";
import { cB, ce, cp, bt, cb, bv, co, bC, bz, ct, cu, cv, cD, cm, bA, bq, ci, br, by, cj, cn, cr, cc, bu, bO, cs, bx, ca, ck, bK, bD, cq, bw, bs, bB, bc, bb, bj, be, bf, bo, bm, bp, bn, dD, em, dX, dY, eO, eP, dZ, cx, cw, cy, bN, b_, bi, bR, c1, c5, bQ, aA, aJ, aF, aB, aL, aG, aD, aM, aC, aI, az, aK, aH, aE, bT, aP, ai, al, ak, aj, aN, aO, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, aQ, cA, cF, bP, cd, bJ, dR, dT, dS, b7, bk, dQ, eQ, eR, bl, dC, dV, dO, bg, bh, ea, bX, ch, b2, cC, cE, O, R, Q, S, P, c0, c4, c6, c9, c7, cJ, cK, cl, c3, cG, bY, ds, de, dq, dr, dd, dk, dj, cM, c_, cX, cZ, cN, cY, cO, cR, cS, cV, cP, cW, cQ, cT, cU, dt, du, di, dh, dc, db, dm, dl, dp, dn, d6, d5, d4, d7, da, d0, d1, d8, d2, d9, d3, c$, dg, df, c2, cH, cI, bH, b8, bG, bI, bF, b$, bU, cf, cg, bL, bM, cz, b5, b6, b3, b4, bW, b9, ba, bd, dW, eb, ei, ej, ek, ed, eg, ec, ef, ee, el, eh, c8, bZ, bS, bE, bV, G, a1, a0, s, aX, aU, cL, e3, aY, dU, dN, n, o, y, D, B, I, aV, $, eA, aW, _, eu, ew, ey, es, eB, e8, eJ, ex, et, ev, ez, a2, a3, af, ae, a7, aa, a5, ah, ag, a4, a9, a8, ab, ac, ad, a6, e0, dB, dA, e1, en, e2, aT, dF, dH, c as c10, eG, dI, d, m as m3, a as a10, b, i, k, j, v, u, l, q, z, e, f, g, h, N, M, L, F, A, H, K, r, w, aZ, dE, eI, dJ, eN, dK, dL, b1, eH, eC, eD, d_, dy, dv, dw, dx, dz, eE, eF, eK, e4, d$, eq, er, dM, ep, eo, eL, a_, b0, a$, eM, dP, dG, aR, e6, e5, e7, e9, aS, t, p, x, Y, T, Z, X, V, W, U, E, C, J } from "../shared/plugin.es.js";
import { E as E2, F as F2, G as G2, D as D2, aB as aB2, aC as aC2, az as az2, aI as aI2, ay as ay2, aG as aG2, aH as aH2, aw as aw2, ax as ax2, aD as aD2, aE as aE2, aA as aA2, aF as aF2, K as K2, N as N2, J as J2, I as I2, H as H2, O as O2, L as L2, M as M2, P as P2, Q as Q2, ap as ap2, aq as aq2, as as as2, ar as ar2, aj as aj2, am as am2, ah as ah2, ai as ai2, al as al2, ak as ak2, $ as $2, X as X2, Y as Y2, a0 as a02, Z as Z2, V as V2, W as W2, _ as _2, ad as ad2, ac as ac2, a5 as a52, a8 as a82, ab as ab2, aa as aa2, a7 as a72, a6 as a62, a9 as a92, a4 as a42, x as x2, i as i2, m as m4, k as k2, j as j2, l as l2, z as z2, b as b10, T as T2, t as t2, u as u2, v as v2, s as s2, f as f2, A as A2, p as p2, q as q2, n as n2, o as o2, w as w2, h as h2, y as y2, c as c11, e as e10, g as g2, C as C2, d as d10, aQ as aQ2, B as B2, R as R2, a as a11, an as an2, a1 as a12, at as at2, ae as ae2, U as U2, S as S2, aO as aO2, aK as aK2, aL as aL2, aM as aM2, aP as aP2, aJ as aJ2, aN as aN2, ao as ao2, a3 as a32, a2 as a22, av as av2, r as r2, au as au2, ag as ag2, af as af2 } from "../shared/namedItems.es.js";
import { g as se } from "../shared/index.es.js";
import { i as i3 } from "../shared/index.es.js";
var te, re = { exports: {} };
const ie = se(function() {
  if (te) return re.exports;
  function e11(a13, { instancePath: s3 = "", parentData: t3, parentDataProperty: r3, rootData: i4 = a13 } = {}) {
    if (!a13 || "object" != typeof a13 || Array.isArray(a13)) return e11.errors = [{
      instancePath: s3,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let t4;
      if (void 0 === a13.name && (t4 = "name") || void 0 === a13.id && (t4 = "id") || void 0 === a13.nickname && (t4 = "nickname") || void 0 === a13.battlerName && (t4 = "battlerName") || void 0 === a13.characterName && (t4 = "characterName") || void 0 === a13.characterIndex && (t4 = "characterIndex") || void 0 === a13.faceName && (t4 = "faceName") || void 0 === a13.faceIndex && (t4 = "faceIndex") || void 0 === a13.classId && (t4 = "classId") || void 0 === a13.initialLevel && (t4 = "initialLevel") || void 0 === a13.maxLevel && (t4 = "maxLevel")) return e11.errors = [{
        instancePath: s3,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t4 },
        message: "must have required property '" + t4 + "'"
      }], false;
      if (void 0 !== a13.name) {
        const t5 = 0;
        if ("string" != typeof a13.name) return e11.errors = [{ instancePath: s3 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n3 = 0 === t5;
      } else n3 = true;
      if (n3) {
        if (void 0 !== a13.battlerName) {
          const t5 = 0;
          if ("string" != typeof a13.battlerName) return e11.errors = [{
            instancePath: s3 + "/battlerName",
            schemaPath: "#/properties/battlerName/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], false;
          n3 = 0 === t5;
        } else n3 = true;
        if (n3) {
          if (void 0 !== a13.characterName) {
            const t5 = 0;
            if ("string" != typeof a13.characterName) return e11.errors = [{
              instancePath: s3 + "/characterName",
              schemaPath: "#/properties/characterName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n3 = 0 === t5;
          } else n3 = true;
          if (n3) {
            if (void 0 !== a13.characterIndex) {
              let t5 = a13.characterIndex;
              const r4 = 0;
              if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{ instancePath: s3 + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], false;
              n3 = 0 === r4;
            } else n3 = true;
            if (n3) {
              if (void 0 !== a13.faceName) {
                const t5 = 0;
                if ("string" != typeof a13.faceName) return e11.errors = [{
                  instancePath: s3 + "/faceName",
                  schemaPath: "#/properties/faceName/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                n3 = 0 === t5;
              } else n3 = true;
              if (n3) {
                if (void 0 !== a13.faceIndex) {
                  let t5 = a13.faceIndex;
                  const r4 = 0;
                  if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                    instancePath: s3 + "/faceIndex",
                    schemaPath: "#/properties/faceIndex/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof t5 && isFinite(t5)) {
                    if (t5 > 7 || isNaN(t5)) return e11.errors = [{
                      instancePath: s3 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 7 },
                      message: "must be <= 7"
                    }], false;
                    if (t5 < 0 || isNaN(t5)) return e11.errors = [{
                      instancePath: s3 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                  }
                  n3 = 0 === r4;
                } else n3 = true;
                if (n3) {
                  if (void 0 !== a13.id) {
                    let t5 = a13.id;
                    const r4 = 0;
                    if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                      instancePath: s3 + "/id",
                      schemaPath: "#/properties/id/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
                      instancePath: s3 + "/id",
                      schemaPath: "#/properties/id/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    n3 = 0 === r4;
                  } else n3 = true;
                  if (n3) {
                    if (void 0 !== a13.nickname) {
                      const t5 = 0;
                      if ("string" != typeof a13.nickname) return e11.errors = [{
                        instancePath: s3 + "/nickname",
                        schemaPath: "#/properties/nickname/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], false;
                      n3 = 0 === t5;
                    } else n3 = true;
                    if (n3) {
                      if (void 0 !== a13.profile) {
                        const t5 = 0;
                        if ("string" != typeof a13.profile) return e11.errors = [{ instancePath: s3 + "/profile", schemaPath: "#/properties/profile/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
                        n3 = 0 === t5;
                      } else n3 = true;
                      if (n3) {
                        if (void 0 !== a13.initialLevel) {
                          let t5 = a13.initialLevel;
                          const r4 = 0;
                          if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                            instancePath: s3 + "/initialLevel",
                            schemaPath: "#/properties/initialLevel/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{ instancePath: s3 + "/initialLevel", schemaPath: "#/properties/initialLevel/minimum", keyword: "minimum", params: {
                            comparison: ">=",
                            limit: 0
                          }, message: "must be >= 0" }], false;
                          n3 = 0 === r4;
                        } else n3 = true;
                        if (n3) {
                          if (void 0 !== a13.maxLevel) {
                            let t5 = a13.maxLevel;
                            const r4 = 0;
                            if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                              instancePath: s3 + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n3 = 0 === r4;
                          } else n3 = true;
                          if (n3) {
                            if (void 0 !== a13.classId) {
                              let t5 = a13.classId;
                              const r4 = 0;
                              if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                                instancePath: s3 + "/classId",
                                schemaPath: "#/properties/classId/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{ instancePath: s3 + "/classId", schemaPath: "#/properties/classId/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: 0
                              }, message: "must be >= 0" }], false;
                              n3 = 0 === r4;
                            } else n3 = true;
                            if (n3) {
                              if (void 0 !== a13.equips) {
                                let t5 = a13.equips;
                                const r4 = 0;
                                if (!Array.isArray(t5)) return e11.errors = [{
                                  instancePath: s3 + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], false;
                                {
                                  const a14 = t5.length;
                                  for (let r5 = 0; r5 < a14; r5++) {
                                    let a15 = t5[r5];
                                    const i5 = 0;
                                    if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/equips/" + r5, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    if (!(0 === i5)) break;
                                  }
                                }
                                n3 = 0 === r4;
                              } else n3 = true;
                              if (n3) {
                                if (void 0 !== a13.note) {
                                  const t5 = 0;
                                  if ("string" != typeof a13.note) return e11.errors = [{
                                    instancePath: s3 + "/note",
                                    schemaPath: "#/properties/note/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], false;
                                  n3 = 0 === t5;
                                } else n3 = true;
                                if (n3) if (void 0 !== a13.traits) {
                                  let t5 = a13.traits;
                                  const r4 = 0;
                                  if (!Array.isArray(t5)) return e11.errors = [{
                                    instancePath: s3 + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], false;
                                  {
                                    const a14 = t5.length;
                                    for (let r5 = 0; r5 < a14; r5++) {
                                      let a15 = t5[r5];
                                      const i5 = 0;
                                      if (!a15 || "object" != typeof a15 || Array.isArray(a15)) return e11.errors = [{
                                        instancePath: s3 + "/traits/" + r5,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], false;
                                      {
                                        let t6;
                                        if (void 0 === a15.code && (t6 = "code") || void 0 === a15.dataId && (t6 = "dataId") || void 0 === a15.value && (t6 = "value")) return e11.errors = [{
                                          instancePath: s3 + "/traits/" + r5,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: t6 },
                                          message: "must have required property '" + t6 + "'"
                                        }], false;
                                        if (void 0 !== a15.code) {
                                          let t7 = a15.code;
                                          const i6 = 0;
                                          if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                                            instancePath: s3 + "/traits/" + r5 + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          var m5 = 0 === i6;
                                        } else m5 = true;
                                        if (m5) {
                                          if (void 0 !== a15.dataId) {
                                            let t7 = a15.dataId;
                                            const i6 = 0;
                                            if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                                              instancePath: s3 + "/traits/" + r5 + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            m5 = 0 === i6;
                                          } else m5 = true;
                                          if (m5) if (void 0 !== a15.value) {
                                            let t7 = a15.value;
                                            const i6 = 0;
                                            if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                                              instancePath: s3 + "/traits/" + r5 + "/value",
                                              schemaPath: "#/properties/traits/items/properties/value/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            m5 = 0 === i6;
                                          } else m5 = true;
                                        }
                                      }
                                      if (!(0 === i5)) break;
                                    }
                                  }
                                  n3 = 0 === r4;
                                } else n3 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e11.errors = null, true;
  }
  return te = 1, re.exports = e11, re.exports.default = e11, re.exports;
}()), ne = (e11) => ie(e11);
var me, oe = { exports: {} };
const pe = se(function() {
  if (me) return oe.exports;
  function e11(a13, { instancePath: s3 = "", parentData: t3, parentDataProperty: r3, rootData: i4 = a13 } = {}) {
    if (!a13 || "object" != typeof a13 || Array.isArray(a13)) return e11.errors = [{
      instancePath: s3,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let t4;
      if (void 0 === a13.name && (t4 = "name") || void 0 === a13.id && (t4 = "id") || void 0 === a13.description && (t4 = "description") || void 0 === a13.iconIndex && (t4 = "iconIndex") || void 0 === a13.price && (t4 = "price") || void 0 === a13.params && (t4 = "params") || void 0 === a13.traits && (t4 = "traits") || void 0 === a13.note && (t4 = "note") || void 0 === a13.etypeId && (t4 = "etypeId") || void 0 === a13.atypeId && (t4 = "atypeId")) return e11.errors = [{
        instancePath: s3,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t4 },
        message: "must have required property '" + t4 + "'"
      }], false;
      if (void 0 !== a13.name) {
        const t5 = 0;
        if ("string" != typeof a13.name) return e11.errors = [{ instancePath: s3 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n3 = 0 === t5;
      } else n3 = true;
      if (n3) {
        if (void 0 !== a13.id) {
          let t5 = a13.id;
          const r4 = 0;
          if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
            instancePath: s3 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
            instancePath: s3 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n3 = 0 === r4;
        } else n3 = true;
        if (n3) {
          if (void 0 !== a13.description) {
            const t5 = 0;
            if ("string" != typeof a13.description) return e11.errors = [{
              instancePath: s3 + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n3 = 0 === t5;
          } else n3 = true;
          if (n3) {
            if (void 0 !== a13.iconIndex) {
              let t5 = a13.iconIndex;
              const r4 = 0;
              if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                instancePath: s3 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer"
              }], false;
              if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
                instancePath: s3 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], false;
              n3 = 0 === r4;
            } else n3 = true;
            if (n3) {
              if (void 0 !== a13.price) {
                let t5 = a13.price;
                const r4 = 0;
                if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                  instancePath: s3 + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
                  instancePath: s3 + "/price",
                  schemaPath: "#/properties/price/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], false;
                n3 = 0 === r4;
              } else n3 = true;
              if (n3) {
                if (void 0 !== a13.note) {
                  const t5 = 0;
                  if ("string" != typeof a13.note) return e11.errors = [{
                    instancePath: s3 + "/note",
                    schemaPath: "#/properties/note/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], false;
                  n3 = 0 === t5;
                } else n3 = true;
                if (n3) {
                  if (void 0 !== a13.etypeId) {
                    let t5 = a13.etypeId;
                    const r4 = 0;
                    if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                      instancePath: s3 + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
                      instancePath: s3 + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    n3 = 0 === r4;
                  } else n3 = true;
                  if (n3) {
                    if (void 0 !== a13.atypeId) {
                      let t5 = a13.atypeId;
                      const r4 = 0;
                      if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
                        instancePath: s3 + "/atypeId",
                        schemaPath: "#/properties/atypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
                        instancePath: s3 + "/atypeId",
                        schemaPath: "#/properties/atypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], false;
                      n3 = 0 === r4;
                    } else n3 = true;
                    if (n3) {
                      if (void 0 !== a13.params) {
                        let t5 = a13.params;
                        const r4 = 0;
                        if (!Array.isArray(t5)) return e11.errors = [{
                          instancePath: s3 + "/params",
                          schemaPath: "#/properties/params/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        if (t5.length > 8) return e11.errors = [{
                          instancePath: s3 + "/params",
                          schemaPath: "#/properties/params/maxItems",
                          keyword: "maxItems",
                          params: { limit: 8 },
                          message: "must NOT have more than 8 items"
                        }], false;
                        if (t5.length < 8) return e11.errors = [{ instancePath: s3 + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                          limit: 8
                        }, message: "must NOT have fewer than 8 items" }], false;
                        {
                          const a14 = t5.length;
                          if (a14 > 0) {
                            let a15 = t5[0];
                            const r5 = 0;
                            if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                              instancePath: s3 + "/params/0",
                              schemaPath: "#/properties/params/items/0/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            var m5 = 0 === r5;
                          }
                          if (m5) {
                            if (a14 > 1) {
                              let a15 = t5[1];
                              const r5 = 0;
                              if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              m5 = 0 === r5;
                            }
                            if (m5) {
                              if (a14 > 2) {
                                let a15 = t5[2];
                                const r5 = 0;
                                if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                                  instancePath: s3 + "/params/2",
                                  schemaPath: "#/properties/params/items/2/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                m5 = 0 === r5;
                              }
                              if (m5) {
                                if (a14 > 3) {
                                  let a15 = t5[3];
                                  const r5 = 0;
                                  if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                    type: "integer"
                                  }, message: "must be integer" }], false;
                                  m5 = 0 === r5;
                                }
                                if (m5) {
                                  if (a14 > 4) {
                                    let a15 = t5[4];
                                    const r5 = 0;
                                    if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                                      instancePath: s3 + "/params/4",
                                      schemaPath: "#/properties/params/items/4/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    m5 = 0 === r5;
                                  }
                                  if (m5) {
                                    if (a14 > 5) {
                                      let a15 = t5[5];
                                      const r5 = 0;
                                      if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      m5 = 0 === r5;
                                    }
                                    if (m5) {
                                      if (a14 > 6) {
                                        let a15 = t5[6];
                                        const r5 = 0;
                                        if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                                          instancePath: s3 + "/params/6",
                                          schemaPath: "#/properties/params/items/6/type",
                                          keyword: "type",
                                          params: { type: "integer" },
                                          message: "must be integer"
                                        }], false;
                                        m5 = 0 === r5;
                                      }
                                      if (m5 && a14 > 7) {
                                        let a15 = t5[7];
                                        const r5 = 0;
                                        if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                          type: "integer"
                                        }, message: "must be integer" }], false;
                                        m5 = 0 === r5;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        n3 = 0 === r4;
                      } else n3 = true;
                      if (n3) if (void 0 !== a13.traits) {
                        let t5 = a13.traits;
                        const r4 = 0;
                        if (!Array.isArray(t5)) return e11.errors = [{
                          instancePath: s3 + "/traits",
                          schemaPath: "#/properties/traits/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const a14 = t5.length;
                          for (let r5 = 0; r5 < a14; r5++) {
                            let a15 = t5[r5];
                            const i5 = 0;
                            if (!a15 || "object" != typeof a15 || Array.isArray(a15)) return e11.errors = [{ instancePath: s3 + "/traits/" + r5, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let t6;
                              if (void 0 === a15.code && (t6 = "code") || void 0 === a15.dataId && (t6 = "dataId") || void 0 === a15.value && (t6 = "value")) return e11.errors = [{
                                instancePath: s3 + "/traits/" + r5,
                                schemaPath: "#/properties/traits/items/required",
                                keyword: "required",
                                params: { missingProperty: t6 },
                                message: "must have required property '" + t6 + "'"
                              }], false;
                              if (void 0 !== a15.code) {
                                let t7 = a15.code;
                                const i6 = 0;
                                if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                                  instancePath: s3 + "/traits/" + r5 + "/code",
                                  schemaPath: "#/properties/traits/items/properties/code/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var o3 = 0 === i6;
                              } else o3 = true;
                              if (o3) {
                                if (void 0 !== a15.dataId) {
                                  let t7 = a15.dataId;
                                  const i6 = 0;
                                  if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                                    instancePath: s3 + "/traits/" + r5 + "/dataId",
                                    schemaPath: "#/properties/traits/items/properties/dataId/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o3 = 0 === i6;
                                } else o3 = true;
                                if (o3) if (void 0 !== a15.value) {
                                  let t7 = a15.value;
                                  const i6 = 0;
                                  if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                                    instancePath: s3 + "/traits/" + r5 + "/value",
                                    schemaPath: "#/properties/traits/items/properties/value/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o3 = 0 === i6;
                                } else o3 = true;
                              }
                            }
                            if (!(0 === i5)) break;
                          }
                        }
                        n3 = 0 === r4;
                      } else n3 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e11.errors = null, true;
  }
  return me = 1, oe.exports = e11, oe.exports.default = e11, oe.exports;
}()), Ee = (e11) => pe(e11);
var Ae, _e = { exports: {} };
const ye = se(function() {
  if (Ae) return _e.exports;
  function e11(a13, { instancePath: s3 = "", parentData: t3, parentDataProperty: r3, rootData: i4 = a13 } = {}) {
    if (!a13 || "object" != typeof a13 || Array.isArray(a13)) return e11.errors = [{
      instancePath: s3,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let t4;
      if (void 0 === a13.name && (t4 = "name") || void 0 === a13.id && (t4 = "id") || void 0 === a13.note && (t4 = "note") || void 0 === a13.expParams && (t4 = "expParams") || void 0 === a13.params && (t4 = "params") || void 0 === a13.learnings && (t4 = "learnings") || void 0 === a13.traits && (t4 = "traits")) return e11.errors = [{
        instancePath: s3,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: t4 },
        message: "must have required property '" + t4 + "'"
      }], false;
      for (const t5 in a13) if ("name" !== t5 && "id" !== t5 && "note" !== t5 && "expParams" !== t5 && "params" !== t5 && "learnings" !== t5 && "traits" !== t5) return e11.errors = [{
        instancePath: s3,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: t5 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== a13.name) {
        const t5 = 0;
        if ("string" != typeof a13.name) return e11.errors = [{ instancePath: s3 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n3 = 0 === t5;
      } else n3 = true;
      if (n3) {
        if (void 0 !== a13.id) {
          let t5 = a13.id;
          const r4 = 0;
          if ("number" != typeof t5 || t5 % 1 || isNaN(t5) || !isFinite(t5)) return e11.errors = [{
            instancePath: s3 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof t5 && isFinite(t5) && (t5 < 0 || isNaN(t5))) return e11.errors = [{
            instancePath: s3 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n3 = 0 === r4;
        } else n3 = true;
        if (n3) {
          if (void 0 !== a13.note) {
            const t5 = 0;
            if ("string" != typeof a13.note) return e11.errors = [{
              instancePath: s3 + "/note",
              schemaPath: "#/properties/note/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n3 = 0 === t5;
          } else n3 = true;
          if (n3) {
            if (void 0 !== a13.expParams) {
              let t5 = a13.expParams;
              const r4 = 0;
              if (!Array.isArray(t5)) return e11.errors = [{
                instancePath: s3 + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], false;
              {
                const a14 = t5.length;
                for (let r5 = 0; r5 < a14; r5++) {
                  let a15 = t5[r5];
                  const i5 = 0;
                  if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/expParams/" + r5, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], false;
                  if (!(0 === i5)) break;
                }
              }
              n3 = 0 === r4;
            } else n3 = true;
            if (n3) {
              if (void 0 !== a13.params) {
                let t5 = a13.params;
                const r4 = 0;
                if (!Array.isArray(t5)) return e11.errors = [{
                  instancePath: s3 + "/params",
                  schemaPath: "#/properties/params/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], false;
                if (t5.length > 8) return e11.errors = [{
                  instancePath: s3 + "/params",
                  schemaPath: "#/properties/params/maxItems",
                  keyword: "maxItems",
                  params: { limit: 8 },
                  message: "must NOT have more than 8 items"
                }], false;
                if (t5.length < 8) return e11.errors = [{
                  instancePath: s3 + "/params",
                  schemaPath: "#/properties/params/minItems",
                  keyword: "minItems",
                  params: { limit: 8 },
                  message: "must NOT have fewer than 8 items"
                }], false;
                {
                  const a14 = t5.length;
                  if (a14 > 0) {
                    let a15 = t5[0];
                    const r5 = 0;
                    if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                      instancePath: s3 + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    var m5 = 0 === r5;
                  }
                  if (m5) {
                    if (a14 > 1) {
                      let a15 = t5[1];
                      const r5 = 0;
                      if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], false;
                      m5 = 0 === r5;
                    }
                    if (m5) {
                      if (a14 > 2) {
                        let a15 = t5[2];
                        const r5 = 0;
                        if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                          instancePath: s3 + "/params/2",
                          schemaPath: "#/properties/params/items/2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        m5 = 0 === r5;
                      }
                      if (m5) {
                        if (a14 > 3) {
                          let a15 = t5[3];
                          const r5 = 0;
                          if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          m5 = 0 === r5;
                        }
                        if (m5) {
                          if (a14 > 4) {
                            let a15 = t5[4];
                            const r5 = 0;
                            if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                              instancePath: s3 + "/params/4",
                              schemaPath: "#/properties/params/items/4/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m5 = 0 === r5;
                          }
                          if (m5) {
                            if (a14 > 5) {
                              let a15 = t5[5];
                              const r5 = 0;
                              if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              m5 = 0 === r5;
                            }
                            if (m5) {
                              if (a14 > 6) {
                                let a15 = t5[6];
                                const r5 = 0;
                                if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{
                                  instancePath: s3 + "/params/6",
                                  schemaPath: "#/properties/params/items/6/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                m5 = 0 === r5;
                              }
                              if (m5 && a14 > 7) {
                                let a15 = t5[7];
                                const r5 = 0;
                                if ("number" != typeof a15 || a15 % 1 || isNaN(a15) || !isFinite(a15)) return e11.errors = [{ instancePath: s3 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                m5 = 0 === r5;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                n3 = 0 === r4;
              } else n3 = true;
              if (n3) {
                if (void 0 !== a13.learnings) {
                  let t5 = a13.learnings;
                  const r4 = 0;
                  if (!Array.isArray(t5)) return e11.errors = [{
                    instancePath: s3 + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const a14 = t5.length;
                    for (let r5 = 0; r5 < a14; r5++) {
                      let a15 = t5[r5];
                      const i5 = 0;
                      if (!a15 || "object" != typeof a15 || Array.isArray(a15)) return e11.errors = [{
                        instancePath: s3 + "/learnings/" + r5,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let t6;
                        if (void 0 === a15.level && (t6 = "level") || void 0 === a15.skillId && (t6 = "skillId")) return e11.errors = [{
                          instancePath: s3 + "/learnings/" + r5,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: t6 },
                          message: "must have required property '" + t6 + "'"
                        }], false;
                        for (const t7 in a15) if ("level" !== t7 && "skillId" !== t7 && "note" !== t7) return e11.errors = [{
                          instancePath: s3 + "/learnings/" + r5,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: t7 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== a15.level) {
                          let t7 = a15.level;
                          const i6 = 0;
                          if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                            instancePath: s3 + "/learnings/" + r5 + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var o3 = 0 === i6;
                        } else o3 = true;
                        if (o3) {
                          if (void 0 !== a15.skillId) {
                            let t7 = a15.skillId;
                            const i6 = 0;
                            if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                              instancePath: s3 + "/learnings/" + r5 + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            o3 = 0 === i6;
                          } else o3 = true;
                          if (o3) if (void 0 !== a15.note) {
                            const t7 = 0;
                            if ("string" != typeof a15.note) return e11.errors = [{
                              instancePath: s3 + "/learnings/" + r5 + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], false;
                            o3 = 0 === t7;
                          } else o3 = true;
                        }
                      }
                      if (!(0 === i5)) break;
                    }
                  }
                  n3 = 0 === r4;
                } else n3 = true;
                if (n3) if (void 0 !== a13.traits) {
                  let t5 = a13.traits;
                  const r4 = 0;
                  if (!Array.isArray(t5)) return e11.errors = [{
                    instancePath: s3 + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const a14 = t5.length;
                    for (let r5 = 0; r5 < a14; r5++) {
                      let a15 = t5[r5];
                      const i5 = 0;
                      if (!a15 || "object" != typeof a15 || Array.isArray(a15)) return e11.errors = [{
                        instancePath: s3 + "/traits/" + r5,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let t6;
                        if (void 0 === a15.code && (t6 = "code") || void 0 === a15.dataId && (t6 = "dataId") || void 0 === a15.value && (t6 = "value")) return e11.errors = [{
                          instancePath: s3 + "/traits/" + r5,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: t6 },
                          message: "must have required property '" + t6 + "'"
                        }], false;
                        for (const t7 in a15) if ("code" !== t7 && "dataId" !== t7 && "value" !== t7) return e11.errors = [{
                          instancePath: s3 + "/traits/" + r5,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: t7 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== a15.code) {
                          let t7 = a15.code;
                          const i6 = 0;
                          if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                            instancePath: s3 + "/traits/" + r5 + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var p3 = 0 === i6;
                        } else p3 = true;
                        if (p3) {
                          if (void 0 !== a15.dataId) {
                            let t7 = a15.dataId;
                            const i6 = 0;
                            if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                              instancePath: s3 + "/traits/" + r5 + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p3 = 0 === i6;
                          } else p3 = true;
                          if (p3) if (void 0 !== a15.value) {
                            let t7 = a15.value;
                            const i6 = 0;
                            if ("number" != typeof t7 || t7 % 1 || isNaN(t7) || !isFinite(t7)) return e11.errors = [{
                              instancePath: s3 + "/traits/" + r5 + "/value",
                              schemaPath: "#/properties/traits/items/properties/value/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p3 = 0 === i6;
                          } else p3 = true;
                        }
                      }
                      if (!(0 === i5)) break;
                    }
                  }
                  n3 = 0 === r4;
                } else n3 = true;
              }
            }
          }
        }
      }
    }
    return e11.errors = null, true;
  }
  return Ae = 1, _e.exports = e11, _e.exports.default = e11, _e.exports;
}()), Te = (e11) => ye(e11);
export {
  cB as ABORT_BATTLE,
  AUTHOR_RMMZ,
  ce as BATTLE_PROCESSING,
  cp as CHANGE_ACTOR_IMAGES,
  bt as CHANGE_ARMORS,
  cb as CHANGE_BATTLE_BACKGROUND,
  bv as CHANGE_BATTLE_BGM,
  co as CHANGE_CLASS,
  bC as CHANGE_DEFEAT_ME,
  bz as CHANGE_ENCOUNTER,
  ct as CHANGE_ENEMY_HP,
  cu as CHANGE_ENEMY_MP,
  cv as CHANGE_ENEMY_STATE,
  cD as CHANGE_ENEMY_TP,
  cm as CHANGE_EXP,
  bA as CHANGE_FORMATION_ACCESS,
  bq as CHANGE_GOLD,
  ci as CHANGE_HP,
  br as CHANGE_ITEMS,
  by as CHANGE_MENU_ACCESS,
  cj as CHANGE_MP,
  cn as CHANGE_NAME,
  cr as CHANGE_NICKNAME,
  cc as CHANGE_PARALLAX,
  bu as CHANGE_PARTY_MEMBER,
  bO as CHANGE_PLAYER_FOLLOWERS,
  cs as CHANGE_PROFILE,
  bx as CHANGE_SAVE_ACCESS,
  ca as CHANGE_TILESET,
  ck as CHANGE_TP,
  bK as CHANGE_TRANSPARENCY,
  bD as CHANGE_VEHICLE_BGM,
  cq as CHANGE_VEHICLE_IMAGE,
  bw as CHANGE_VICTORY_ME,
  bs as CHANGE_WEAPONS,
  bB as CHANGE_WINDOW_COLOR,
  E2 as COLLAPS_BOSS,
  F2 as COLLAPS_INSTANT,
  G2 as COLLAPS_NONE,
  D2 as COLLAPS_NORMAL,
  bc as COMMENT_BODY,
  bb as COMMENT_HEAD,
  bj as COMMON_EVENT,
  be as CONDITIONAL_BRANCH,
  bf as CONDITIONAL_BRANCH_ELSE,
  bo as CONTROL_SELF_SWITCH,
  bm as CONTROL_SWITCHES,
  bp as CONTROL_TIMER,
  bn as CONTROL_VARIABLES,
  dD as DEFAULT_DAMAGE_LABELS,
  em as DEFAULT_GLOBAL_LABELS,
  dX as DEFAULT_ITEM_LABELS,
  dY as DEFAULT_SKILL_LABELS,
  eO as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  eP as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  dZ as DEFAULT_USABLE_ITEM_LABELS,
  aB2 as EFFECT_ADD_BUFF,
  aC2 as EFFECT_ADD_DEBUFF,
  az2 as EFFECT_ADD_STATE,
  aI2 as EFFECT_COMMON_EVENT,
  ay2 as EFFECT_GAIN_TP,
  aG2 as EFFECT_GROW,
  aH2 as EFFECT_LEARN_SKILL,
  aw2 as EFFECT_RECOVER_HP,
  ax2 as EFFECT_RECOVER_MP,
  aD2 as EFFECT_REMOVE_BUFF,
  aE2 as EFFECT_REMOVE_DEBUFF,
  aA2 as EFFECT_REMOVE_STATE,
  aF2 as EFFECT_SPECIAL,
  cx as ENEMY_APPEAR,
  cw as ENEMY_RECOVER_ALL,
  cy as ENEMY_TRANSFORM,
  bN as ERASE_EVENT,
  b_ as ERASE_PICTURE,
  bi as EXIT_EVENT_PROCESSING,
  K2 as EXTRA_PARAM_CEV,
  N2 as EXTRA_PARAM_CNT,
  J2 as EXTRA_PARAM_CRI,
  I2 as EXTRA_PARAM_EVA,
  H2 as EXTRA_PARAM_HIT,
  O2 as EXTRA_PARAM_HRG,
  L2 as EXTRA_PARAM_MEV,
  M2 as EXTRA_PARAM_MRF,
  P2 as EXTRA_PARAM_MRG,
  Q2 as EXTRA_PARAM_TRG,
  bR as FADEIN_SCREEN,
  c1 as FADEOUT_BGM,
  c5 as FADEOUT_BGS,
  bQ as FADEOUT_SCREEN,
  aA as FILENAME_ACTORS,
  aJ as FILENAME_ANIMATIONS,
  aF as FILENAME_ARMORS,
  aB as FILENAME_CLASSES,
  aL as FILENAME_COMMON_EVENTS,
  aG as FILENAME_ENEMIES,
  aD as FILENAME_ITEMS,
  aM as FILENAME_MAP_INFOS,
  aC as FILENAME_SKILLS,
  aI as FILENAME_STATES,
  az as FILENAME_SYSTEM,
  aK as FILENAME_TILESET,
  aH as FILENAME_TROOPS,
  aE as FILENAME_WEAPONS,
  ap2 as FLAG_ID_AUTO_BATTLE,
  aq2 as FLAG_ID_GUARD,
  as2 as FLAG_ID_PRESERVE_TP,
  ar2 as FLAG_ID_SUBSTITUTE,
  bT as FLASH_SCREEN,
  aP as FOLDER_AUDIO,
  ai as FOLDER_AUDIO_BGM,
  al as FOLDER_AUDIO_BGS,
  ak as FOLDER_AUDIO_ME,
  aj as FOLDER_AUDIO_SE,
  aN as FOLDER_DATA,
  aO as FOLDER_IMG,
  am as FOLDER_IMG_BATTLEBACK1,
  an as FOLDER_IMG_BATTLEBACK2,
  ao as FOLDER_IMG_CHACTERS,
  ap as FOLDER_IMG_ENEMIES,
  aq as FOLDER_IMG_FACES,
  ar as FOLDER_IMG_PARALLACES,
  as as FOLDER_IMG_PICTURES,
  at as FOLDER_IMG_SV_ACTORS,
  au as FOLDER_IMG_SV_ENEMIES,
  av as FOLDER_IMG_SYSTEM,
  aw as FOLDER_IMG_TILESETS,
  ax as FOLDER_IMG_TITLES1,
  ay as FOLDER_IMG_TITLES2,
  aQ as FOLDER_JS,
  cA as FORCE_ACTION,
  cF as GAME_OVER,
  bP as GATHER_FOLLOWERS,
  cd as GET_LOCATION_INFO,
  bJ as GET_ONOFF_VEHICLE,
  dR as HITTYPE_CERTAIN,
  dT as HITTYPE_MAGICAL,
  dS as HITTYPE_PHYSICAL,
  b7 as INPUT_NUMBER,
  bk as LABEL,
  dQ as LABELS_DATA_WEAPON,
  eQ as LABELS_SYSTEM_BATTLER_PARAMS,
  eR as LABELS_SYSTEM_GAME_COMMANDS,
  bl as LABEL_JUMP,
  dC as LABEL_SET_DATA,
  dV as LABEL_SET_ITEM_EFFECT,
  dO as LABEL_SET_TRAIT,
  bg as LOOP,
  bh as LOOP_BREAK,
  ea as MODULE_DATA,
  bX as MOVE_PICTURE,
  ch as NAME_INPUT_PROCESSING,
  b2 as NO_OPERATION,
  cC as OPEN_MENU_SCREEN,
  cE as OPEN_SAVE_SCREEN,
  O as OPERAND_CONSTANT,
  R as OPERAND_GAMEDATA,
  Q as OPERAND_RANDOM,
  S as OPERAND_SCRIPT,
  P as OPERAND_VARIABLE,
  aj2 as PARTY_ABILITY_CANCEL_SURPRISE,
  am2 as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ah2 as PARTY_ABILITY_ENCOUNTER_HALF,
  ai2 as PARTY_ABILITY_ENCOUNTER_NONE,
  al2 as PARTY_ABILITY_GOLD_DOUBLE,
  ak2 as PARTY_ABILITY_RAISE_PREEMPTIVE,
  c0 as PLAY_BGM,
  c4 as PLAY_BGS,
  c6 as PLAY_ME,
  c9 as PLAY_MOVIE,
  c7 as PLAY_SE,
  cJ as PLUGIN_COMMAND_MV,
  cK as PLUGIN_COMMAND_MZ,
  cl as RECOVER_ALL,
  $2 as REGULAR_PARAM_AGI,
  X2 as REGULAR_PARAM_ATK,
  Y2 as REGULAR_PARAM_DEF,
  a02 as REGULAR_PARAM_LUK,
  Z2 as REGULAR_PARAM_MATK,
  V2 as REGULAR_PARAM_MAX_HP,
  W2 as REGULAR_PARAM_MAX_MP,
  _2 as REGULAR_PARAM_MDEF,
  c3 as RESUME_BGM,
  cG as RETURN_TO_TITLE_SCREEN,
  bY as ROTATE_PICTURE,
  ds as ROUTE_CHANGE_BLEND_MODE,
  de as ROUTE_CHANGE_FREQ,
  dq as ROUTE_CHANGE_IMAGE,
  dr as ROUTE_CHANGE_OPACITY,
  dd as ROUTE_CHANGE_SPEED,
  dk as ROUTE_DIR_FIX_OFF,
  dj as ROUTE_DIR_FIX_ON,
  cM as ROUTE_END,
  c_ as ROUTE_JUMP,
  cX as ROUTE_MOVE_AWAY,
  cZ as ROUTE_MOVE_BACKWARD,
  cN as ROUTE_MOVE_DOWN,
  cY as ROUTE_MOVE_FORWARD,
  cO as ROUTE_MOVE_LEFT,
  cR as ROUTE_MOVE_LOWER_L,
  cS as ROUTE_MOVE_LOWER_R,
  cV as ROUTE_MOVE_RANDOM,
  cP as ROUTE_MOVE_RIGHT,
  cW as ROUTE_MOVE_TOWARD,
  cQ as ROUTE_MOVE_UP,
  cT as ROUTE_MOVE_UPPER_L,
  cU as ROUTE_MOVE_UPPER_R,
  dt as ROUTE_PLAY_SE,
  du as ROUTE_SCRIPT,
  di as ROUTE_STEP_ANIME_OFF,
  dh as ROUTE_STEP_ANIME_ON,
  dc as ROUTE_SWITCH_OFF,
  db as ROUTE_SWITCH_ON,
  dm as ROUTE_THROUGH_OFF,
  dl as ROUTE_THROUGH_ON,
  dp as ROUTE_TRANSPARENT_OFF,
  dn as ROUTE_TRANSPARENT_ON,
  d6 as ROUTE_TURN_180D,
  d5 as ROUTE_TURN_90D_L,
  d4 as ROUTE_TURN_90D_R,
  d7 as ROUTE_TURN_90D_R_L,
  da as ROUTE_TURN_AWAY,
  d0 as ROUTE_TURN_DOWN,
  d1 as ROUTE_TURN_LEFT,
  d8 as ROUTE_TURN_RANDOM,
  d2 as ROUTE_TURN_RIGHT,
  d9 as ROUTE_TURN_TOWARD,
  d3 as ROUTE_TURN_UP,
  c$ as ROUTE_WAIT,
  dg as ROUTE_WALK_ANIME_OFF,
  df as ROUTE_WALK_ANIME_ON,
  c2 as SAVE_BGM,
  cH as SCRIPT_EVAL,
  cI as SCRIPT_EVAL_BODY,
  bH as SCROLL_MAP,
  b8 as SELECT_ITEM,
  bG as SET_EVENT_LOCATION,
  bI as SET_MOVEMENT_ROUTE,
  bF as SET_VEHICLE_LOCATION,
  b$ as SET_WEATHER_EFFECT,
  bU as SHAKE_SCREEN,
  cf as SHOP_PROCESSING,
  cg as SHOP_PROCESSING_BODY,
  bL as SHOW_ANIMATION,
  bM as SHOW_BALLOON_ICON,
  cz as SHOW_BATTLE_ANIMATION,
  b5 as SHOW_CHOICES,
  b6 as SHOW_CHOICES_ITEM,
  b3 as SHOW_MESSAGE,
  b4 as SHOW_MESSAGE_BODY,
  bW as SHOW_PICTURE,
  b9 as SHOW_SCROLLING_TEXT,
  ba as SHOW_SCROLLING_TEXT_BODY,
  bd as SKIP,
  dW as SPECIAL_EFFECT_ESCAPE,
  ad2 as SPECIAL_PARAM_EXR,
  ac2 as SPECIAL_PARAM_FDR,
  a52 as SPECIAL_PARAM_GRD,
  a82 as SPECIAL_PARAM_MCR,
  ab2 as SPECIAL_PARAM_MDR,
  aa2 as SPECIAL_PARAM_PDR,
  a72 as SPECIAL_PARAM_PHA,
  a62 as SPECIAL_PARAM_REC,
  a92 as SPECIAL_PARAM_TCR,
  a42 as SPECIAL_PARAM_TGR,
  SRC_COLOR,
  eb as SRC_DATA_ACTOR,
  ei as SRC_DATA_ARMOR,
  ej as SRC_DATA_CLASS,
  ek as SRC_DATA_COMMON_EVNET,
  ed as SRC_DATA_ENEMY,
  eg as SRC_DATA_ITEMS,
  ec as SRC_DATA_MAP,
  ef as SRC_DATA_SKILL,
  ee as SRC_DATA_STATE,
  el as SRC_DATA_TROOP,
  eh as SRC_DATA_WEAPON,
  c8 as STOP_SE,
  bZ as TINT_PICTURE,
  bS as TINT_SCREEN,
  x2 as TRAIT_ACTION_PLUS,
  i2 as TRAIT_ATTACK_ELEMENT,
  m4 as TRAIT_ATTACK_SKILL,
  k2 as TRAIT_ATTACK_SPEED,
  j2 as TRAIT_ATTACK_STATE,
  l2 as TRAIT_ATTACK_TIMES,
  z2 as TRAIT_COLLAPSE_TYPE,
  b10 as TRAIT_DEBUFF_RATE,
  T2 as TRAIT_ELEMENT_RATE,
  t2 as TRAIT_EQUIP_ARMOR_TYPE,
  u2 as TRAIT_EQUIP_LOCK,
  v2 as TRAIT_EQUIP_SEAL,
  s2 as TRAIT_EQUIP_WEAPON_TYPE,
  f2 as TRAIT_PARAM,
  A2 as TRAIT_PARTY_ABILITY,
  p2 as TRAIT_SKILL_ADD,
  q2 as TRAIT_SKILL_SEAL,
  n2 as TRAIT_SKILL_TYPE_ADD,
  o2 as TRAIT_SKILL_TYPE_SEAL,
  w2 as TRAIT_SLOT_TYPE,
  h2 as TRAIT_SPARAM,
  y2 as TRAIT_SPECIAL_FLAG,
  c11 as TRAIT_STATE_RATE,
  e10 as TRAIT_STATE_RESIST,
  g2 as TRAIT_XPARAM,
  bE as TRANSFER_PLAYER,
  bV as WAIT,
  a as applyFormatRule,
  buildReferenceItemSources,
  G as cloneChoices,
  a1 as cloneEventCommand,
  a0 as cloneParameters,
  C2 as collapsOptionsToArray,
  c as compileFormatRule,
  compileItemEffectDisplayData,
  compileTraitDisplayData,
  s as convertCommentArrayToObject,
  aX as createActorControlChars,
  aU as createControlCharFormat,
  cL as createEventCommand,
  e3 as createNoteEntity,
  aY as createSystemVariableControlChars,
  d10 as defineGameDataSources,
  aQ2 as defineSystemItems,
  B2 as defineTraitCollapseType,
  R2 as defineTraitExtraParam,
  a11 as defineTraitItems,
  an2 as defineTraitPartyAbility,
  a12 as defineTraitRegularParam,
  at2 as defineTraitSpecialFlag,
  ae2 as defineTraitSpecialParam,
  detectFormatErrors,
  domainNames,
  U2 as extraParamName,
  S2 as extraParamsToArray,
  dU as formatItemEffectText,
  dN as formatTraitText,
  n as fromArrayCommonEvent,
  o as fromArrayControlSwitches,
  y as fromArrayInputNumber,
  D as fromArraySetupChoice,
  B as fromArraySetupChoiceItem,
  I as fromArrayShowMessageHeader,
  aV as fromStringArray,
  $ as getActorValue,
  eA as getArmorCategoryEnabled,
  aO2 as getArmorTypes,
  aW as getControlChars,
  aK2 as getElementTypes,
  _ as getEnemyValue,
  eu as getEquipCommandEnabled,
  aL2 as getEquipTypes,
  ew as getFormationCommandEnabled,
  ey as getItemCategoryEnabled,
  es as getItemCommandEnabled,
  eB as getKeyItemCategoryEnabled,
  e8 as getNoteValue,
  eJ as getParamNames,
  ex as getSaveCommandEnabled,
  et as getSkillCommandEnabled,
  aM2 as getSkillTypes,
  ev as getStatusCommandEnabled,
  aP2 as getSwitches,
  aJ2 as getVariableNames,
  ez as getWeaponCategoryEnabled,
  aN2 as getWeaponTypes,
  i3 as isAudioCommand,
  a2 as isCloneableCommand,
  a3 as isCommandChangeActorText,
  af as isCommandCommentBody,
  ae as isCommandCommentHeader,
  a7 as isCommandCommonEvent,
  aa as isCommandInputNumber,
  a5 as isCommandNonParam,
  ah as isCommandScriptBody,
  ag as isCommandScriptHeader,
  a4 as isCommandScrollTextHead,
  a9 as isCommandShowChoiceItem,
  a8 as isCommandShowChoices,
  ab as isCommandShowMessage,
  ac as isCommandShowMessageBody,
  ad as isCommandShowScrollingTextBody,
  a6 as isCommandTextBody,
  ne as isDataActor,
  Ee as isDataArmor2,
  Te as isDataClass,
  e0 as isDataItem,
  dB as isDataMap,
  dA as isDataMapInfo,
  e1 as isDataSkill,
  en as isDataSystem,
  e2 as isDataWeapon,
  isValidNumber,
  aT as labelsRegistry,
  dF as makeActorData,
  dH as makeArmorData,
  c10 as makeAudioCommand,
  m as makeAudioFileParams,
  eG as makeBooleanOptions,
  dI as makeClassData,
  d as makeCommandAudioAny,
  m3 as makeCommandChangeActorName,
  a10 as makeCommandChangeActorNickName,
  b as makeCommandChangeActorProfile,
  i as makeCommandChangeBattleBGM,
  k as makeCommandChangeDefeatME,
  j as makeCommandChangeVictoryME,
  v as makeCommandCommentBody,
  u as makeCommandCommentHeader,
  l as makeCommandCommonEvent,
  q as makeCommandControlSwitches,
  z as makeCommandInputNumber,
  e as makeCommandPlayBGM,
  f as makeCommandPlayBGS,
  g as makeCommandPlayME,
  h as makeCommandPlaySE,
  N as makeCommandScriptArray,
  M as makeCommandScriptBody,
  L as makeCommandScriptHeader,
  F as makeCommandSetupChoice,
  A as makeCommandShowChoiceItem,
  H as makeCommandShowMessage,
  K as makeCommandShowMessageBody,
  r as makeCommentArray,
  w as makeCommentCommandArray,
  aZ as makeCommonEventData,
  dE as makeDamage,
  eI as makeDataNames,
  dJ as makeDropItem,
  eN as makeEditorSetting,
  dK as makeEnemyAction,
  dL as makeEnemyData,
  b1 as makeEventPageCondition,
  eH as makeGameInitial,
  eC as makeItemCategories,
  eD as makeItemCategoriesFromArray,
  d_ as makeItemData,
  dy as makeMapData,
  dv as makeMapEvent,
  dw as makeMapEventIamge,
  dx as makeMapEventPage,
  dz as makeMapInfoData,
  eE as makeMenuCommandsEnabled,
  eF as makeMenuCommandsEnabledFromArray,
  eK as makeParamNamesArray,
  e4 as makeRegex,
  d$ as makeSkillData,
  eq as makeSoundsArray,
  er as makeSoundsObject,
  dM as makeStateData,
  ep as makeSystemAdvanced,
  eo as makeSystemData,
  eL as makeTitleCommandWindow,
  a_ as makeTroopData,
  b0 as makeTroopEventConditions,
  a$ as makeTroopMember,
  eM as makeVehicleData,
  dP as makeWeaponData,
  m2 as mergeItemsSource,
  dG as normalizeDataActor,
  ao2 as partyAbilityToArray,
  aR as pluginSourceToJSON,
  e6 as readNote,
  e5 as readNoteObject,
  a32 as regularParamName,
  a22 as regularParamsToArray,
  e7 as replaceNote,
  av2 as resolveItemEffectLabels,
  r2 as resolveTraitLabels,
  e9 as setNoteValue,
  au2 as specialFlagToArray,
  ag2 as specialParamName,
  af2 as specialParamsToArray,
  aS as structToJSONSchema,
  t as toArrayCommonEvent,
  p as toArrayControlSwitches,
  x as toArrayInputNumber,
  Y as toArrayOperandActorStatus,
  T as toArrayOperandConstant,
  Z as toArrayOperandEnemyStatus,
  X as toArrayOperandItemData,
  V as toArrayOperandRandom,
  W as toArrayOperandScript,
  U as toArrayOperandVariable,
  E as toArraySetupChoice,
  C as toArraySetupChoiceItem,
  J as toArrayShowMessageHeader
};
//# sourceMappingURL=main.es.js.map
