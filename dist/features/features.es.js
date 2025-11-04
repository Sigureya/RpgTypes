var ga = Object.defineProperty;
var cr = (e) => {
  throw TypeError(e);
};
var ya = (e, t, o) => t in e ? ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var ur = (e, t, o) => ya(e, typeof t != "symbol" ? t + "" : t, o), ba = (e, t, o) => t.has(e) || cr("Cannot " + o);
var lr = (e, t, o) => t.has(e) ? cr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o);
var mr = (e, t, o) => (ba(e, t, "access private method"), o);
import { cZ as xa, cY as va, c$ as Aa, B as Tr, z as Fr, A as wr, cF as Ca, aK as Nr, aJ as Sr, aF as kr, i as Ce, j as Xe, C as Se, c as Te, d as et, S as tt, m as Ta, b as Fa, a_ as wa, aZ as rt, h as Er, b0 as Na, cB as $r, cC as Sa, cR as ka, cX as Ea, cW as $a, cT as Ia, b2 as ja, b1 as Pa, cP as La, r as Ma, cl as Da } from "../shared/make.es3.js";
import { m as Ir } from "../shared/mergeItemsSource.es.js";
import { t as pr, y as Oa, x as Ba, m as Ra } from "../shared/lookupRpgDataKind.es.js";
const jr = (e, t, o) => e.reduce((l, i) => (i.code !== Tr && i.code !== Fr && i.code !== wr || l.push(qa(i, t, o)), l), []), _a = { [wr]: "weapon", [Tr]: "armor", [Fr]: "item" }, qa = (e, t, o) => {
  const l = e.parameters[3] === xa ? {
    direct: !0,
    value: e.parameters[2]
  } : { direct: !1, variableId: e.parameters[2] }, i = e.parameters[0] === va ? t.gain : e.parameters[0] === Aa ? t.lose : t.unknown, d = typeof e.parameters[4] == "boolean" ? {
    includesEquip: e.parameters[4]
  } : {};
  return { itemKind: _a[e.code], dataId: e.parameters[1], code: e.code, commandNameMZ: o(e.code), operation: i, ...d, ...l };
}, Ua = (e) => !!e, nt = (e, t) => e.pages.map((o, l) => t(o, l, e)), Pr = (e, t) => e.events.filter(Ua).flatMap((o) => nt(o, t)), po = (e, t, o) => Pr(e.map, (l, i, d) => ({
  ...Va(l),
  commands: jr(l.list, t, o),
  eventName: d.name,
  pageIndex: i
})), Va = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, fo = (e, t, o) => {
  return l = (i, d, h) => ({
    commands: jr(i.list, t, o),
    eventName: h.name,
    troopId: h.id,
    pageIndex: d
  }), e.flatMap((i) => nt(i, l));
  var l;
}, m = (e, t) => {
  const o = e.trimEnd(), l = t.get(o);
  return l ? l.trimEnd() : o;
}, ne = (e, t, o = `
`) => Ca(e.note, (l) => m(l.value, t), o), ho = (e, t) => {
  const o = ne(e, t), l = m(e.name, t), i = m(e.nickname, t), d = m(e.profile, t);
  return { ...e, name: l, nickname: i, profile: d, note: o };
}, go = (e, t) => {
  const o = ne(e, t), l = m(e.name, t);
  return { ...e, name: l, note: o };
}, yo = (e, t) => {
  const o = ne(e, t), l = m(e.name, t);
  return { ...e, name: l, note: o };
}, bo = (e, t) => {
  const o = ne(e, t), l = m(e.name, t), i = m(e.description, t), d = m(e.message1, t), h = m(e.message2, t);
  return { ...e, name: l, description: i, message1: d, message2: h, note: o };
}, xo = (e, t) => {
  const o = ne(e, t), l = m(e.name, t), i = m(e.description, t);
  return { ...e, name: l, description: i, note: o };
}, vo = (e, t) => {
  const o = ne(e, t), l = m(e.name, t), i = m(e.message1, t), d = m(e.message2, t), h = m(e.message3, t), r = m(e.message4, t);
  return { ...e, name: l, message1: i, message2: d, message3: h, message4: r, note: o };
}, at = (e, t) => e.map((o) => {
  switch (o.code) {
    case tt:
      return Ja(o, t);
    case et:
      return Wa(o, t);
    case Te:
    case Se:
    case Xe:
    case Ce:
      return za(o, t);
    case kr:
    case Sr:
    case Nr:
      return Ga(o, t);
    default:
      return o;
  }
}), za = (e, t) => {
  const o = m(e.parameters[0], t);
  return { code: e.code, indent: e.indent, parameters: [o] };
}, Ja = (e, t) => {
  const o = e.parameters[4] ? m(e.parameters[4], t) : "";
  return Ta({
    facename: e.parameters[0],
    faceIndex: e.parameters[1],
    background: e.parameters[2],
    positionType: e.parameters[3],
    speakerName: o
  }, e.indent);
}, Ga = (e, t) => {
  const o = m(e.parameters[1], t);
  return {
    code: e.code,
    indent: e.indent,
    parameters: [e.parameters[0], o]
  };
}, Wa = (e, t) => {
  const o = e.parameters[0].map((l) => m(l, t));
  return {
    code: et,
    indent: e.indent,
    parameters: [o, e.parameters[1], e.parameters[2], e.parameters[3], e.parameters[4]]
  };
}, Ao = (e, t) => {
  const o = e.pages.map((l) => ({ list: at(l.list, t), conditions: l.conditions, span: l.span }));
  return { ...e, pages: o };
}, Co = (e, t) => ({ ...e, list: at(e.list, t) }), To = (e, t) => {
  const o = m(e.displayName, t), l = ne(e, t), i = { displayName: o, events: Fa(e, (d) => at(d, t)), note: l };
  return { ...e, ...i };
}, Za = (e, t) => ({
  params: Xa(e.params, t),
  messages: Qa(e.messages, t),
  commands: Ka(e.commands, t),
  basic: Ha(e.basic, t)
}), Ha = (e, t) => [m(e[0], t), m(e[1], t), m(e[2], t), m(e[3], t), m(e[4], t), m(e[5], t), m(e[6], t), m(e[7], t), m(e[8], t), m(e[9], t)], Ka = (e, t) => [m(e[0], t), m(e[1], t), m(e[2], t), m(e[3], t), m(e[4], t), m(e[5], t), m(e[6], t), m(e[7], t), m(e[8], t), m(e[9], t), m(e[10], t), m(e[11], t), m(e[12], t), m(e[13], t), m(e[14], t), m(e[15], t), m(e[16], t), m(e[17], t), m(e[18], t), m(e[19], t), "", m(e[21], t), m(e[22], t), "", m(e[24], t), m(e[25], t)], Xa = (e, t) => [m(e[0], t), m(e[1], t), m(e[2], t), m(e[3], t), m(e[4], t), m(e[5], t), m(e[6], t), m(e[7], t), m(e[8], t), m(e[9], t)], Qa = (e, t) => ({
  actionFailure: m(e.actionFailure, t),
  actorDamage: m(e.actorDamage, t),
  actorDrain: m(e.actorDrain, t),
  actorGain: m(e.actorGain, t),
  actorLoss: m(e.actorLoss, t),
  actorNoDamage: m(e.actorNoDamage, t),
  actorNoHit: m(e.actorNoHit, t),
  actorRecovery: m(e.actorRecovery, t),
  alwaysDash: m(e.alwaysDash, t),
  autosave: m(e.autosave, t),
  bgmVolume: m(e.bgmVolume, t),
  bgsVolume: m(e.bgsVolume, t),
  buffAdd: m(e.buffAdd, t),
  buffRemove: m(e.buffRemove, t),
  commandRemember: m(e.commandRemember, t),
  counterAttack: m(e.counterAttack, t),
  criticalToActor: m(e.criticalToActor, t),
  criticalToEnemy: m(e.criticalToEnemy, t),
  defeat: m(e.defeat, t),
  debuffAdd: m(e.debuffAdd, t),
  emerge: m(e.emerge, t),
  enemyDamage: m(e.enemyDamage, t),
  enemyDrain: m(e.enemyDrain, t),
  enemyGain: m(e.enemyGain, t),
  enemyLoss: m(e.enemyLoss, t),
  enemyNoDamage: m(e.enemyNoDamage, t),
  enemyNoHit: m(e.enemyNoHit, t),
  enemyRecovery: m(e.enemyRecovery, t),
  escapeFailure: m(e.escapeFailure, t),
  escapeStart: m(e.escapeStart, t),
  evasion: m(e.evasion, t),
  expNext: m(e.expNext, t),
  expTotal: m(e.expTotal, t),
  file: m(e.file, t),
  loadMessage: m(e.loadMessage, t),
  levelUp: m(e.levelUp, t),
  magicEvasion: m(e.magicEvasion, t),
  magicReflection: m(e.magicReflection, t),
  meVolume: m(e.meVolume, t),
  obtainExp: m(e.obtainExp, t),
  obtainGold: m(e.obtainGold, t),
  obtainItem: m(e.obtainItem, t),
  obtainSkill: m(e.obtainSkill, t),
  partyName: m(e.partyName, t),
  possession: m(e.possession, t),
  preemptive: m(e.preemptive, t),
  saveMessage: m(e.saveMessage, t),
  seVolume: m(e.seVolume, t),
  substitute: m(e.substitute, t),
  surprise: m(e.surprise, t),
  touchUI: m(e.touchUI, t),
  useItem: m(e.useItem, t),
  victory: m(e.victory, t)
}), Fo = (e, t) => ({
  ...e,
  gameTitle: m(e.gameTitle, t),
  currencyUnit: m(e.currencyUnit, t),
  elements: ue(e.elements, t),
  skillTypes: ue(e.skillTypes, t),
  weaponTypes: ue(e.weaponTypes, t),
  armorTypes: ue(e.armorTypes, t),
  equipTypes: ue(e.equipTypes, t),
  terms: Za(e.terms, t)
}), ue = (e, t) => e.map((o) => m(o, t)), Lr = (e) => e.map((t) => t.parameters[0].trimEnd()).join(`
`).trimEnd();
class Mr {
  constructor(t, o) {
    this.header = t, this.bodies = o;
  }
  getBodyText() {
    return Lr(this.joinCommandBodies());
  }
  mergedBody() {
    return { code: this.header.code, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
  joinCommandBodies() {
    return [this.header, ...this.bodies];
  }
  normalizedCommands() {
    return [this.mergedBody()];
  }
}
class st {
  constructor(t, o, l) {
    this.bodyCode = t, this.header = o, this.bodies = l;
  }
  normalizedCommands() {
    const t = { ...this.header, code: this.header.code, indent: this.header.indent, parameters: [...this.header.parameters] };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  getBodyText() {
    return Lr(this.bodies);
  }
  joinCommandBodies() {
    return this.bodies;
  }
  mergedBody() {
    return { code: this.bodyCode, indent: this.header.indent, parameters: [this.getBodyText()] };
  }
}
const ke = (e, t, o, l) => {
  const i = e[t];
  if (!o(i)) throw new Error(`Invalid head at index ${t}: ${JSON.stringify(i)}`);
  const d = [];
  for (let h = t + 1; h < e.length; h++) {
    const r = e[h];
    if (!l(r)) break;
    d.push(r);
  }
  return { header: i, bodies: d };
}, Ya = (e, t) => {
  const { bodies: o, header: l } = ((i, d) => ke(i, d, (h) => h.code === Se, (h) => h.code === Xe))(e, t);
  return es(l) ? new st(Xe, l, o) : new Mr(l, o);
}, es = (e) => e.parameters[0] === "選択肢ヘルプ", ts = (e, t) => {
  const { bodies: o, header: l } = ((i, d) => ke(i, d, (h) => h.code === tt, (h) => h.code === Te))(e, t);
  return new st(Te, l, o);
}, rs = (e, t) => {
  const { bodies: o, header: l } = ((i, d) => ke(i, d, (h) => h.code === rt, (h) => h.code === wa))(e, t);
  return new Mr(l, o);
}, ns = (e, t) => {
  const { bodies: o, header: l } = ((i, d) => ke(i, d, (h) => h.code === Er, (h) => h.code === Ce))(e, t);
  return new st(Ce, l, o);
}, as = {
  [tt]: (e, t, o) => o.showMessage(ts(e, t), t, e),
  [rt]: (e, t, o) => o.script(rs(e, t), t, e),
  [Se]: (e, t, o) => o.comment(Ya(e, t), t, e),
  [Er]: (e, t, o) => o.showScrollingText(ns(e, t), t, e)
}, He = (e) => ((t, o) => ({
  code: t.code,
  paramIndex: o,
  value: t.parameters[o]
}))(e, 1), ss = (e) => e.parameters[0].map((t, o) => ({ code: 102, paramIndex: o, value: t })), wo = (e) => Dr(e, () => []), ot = (e, t) => Dr(e, t), Dr = (e, t) => e.reduce((o, l, i) => {
  if (l.code === et) return [...o, ...ss(l)];
  const d = (h = l.code, as[h]);
  var h;
  if (d) {
    const r = d(e, i, os);
    if (r !== void 0) return [...o, r];
  }
  if (l.code === Sr) return [...o, He(l)];
  if (l.code === kr) return [...o, He(l)];
  if (l.code === Nr) return [...o, He(l)];
  if (l.code === Na) {
    const r = t(l);
    return r.length === 0 ? o : [...o, ...r];
  }
  return o;
}, []), os = { comment: (e) => ({
  code: Se,
  paramIndex: 0,
  value: e.getBodyText()
}), showMessage: (e) => {
  return { code: Te, paramIndex: 0, value: (t = e).getBodyText(), speaker: (o = t.header, o.parameters[4] ? o.parameters[4].trimEnd() : "") };
  var t, o;
}, script: (e) => ((t) => ({ code: rt, paramIndex: 0, value: t.getBodyText() }))(e), showScrollingText: (e) => ((t) => ({ code: Ce, paramIndex: 0, value: t.getBodyText() }))(e) }, No = (e, t = () => []) => {
  return o = (l, i, { id: d }) => ({ eventId: d, commands: ot(l.list, t) }), e.map((l) => o(l, 0, l));
  var o;
}, So = (e, t = () => []) => ((o, l) => o.map((i) => nt(i, l)))(e, (o, l, { id: i }) => ({
  eventId: i,
  pageIndex: l,
  commands: ot(o.list, t)
})), ko = (e, t = () => []) => ({ note: e.note, noteItems: $r(e.note), displayedName: e.displayName, events: is(e, t) }), is = (e, t) => Pr(e, (o, l, i) => ({
  eventId: i.id,
  pageIndex: l,
  commands: ot(o.list, t),
  note: i.note,
  noteItems: $r(i.note),
  name: i.name
})), Eo = (e) => ({ key: "battlerName", image: e.battlerName, id: e.id }), Ke = (e, t, o) => ({
  folder: o,
  key: t,
  image: e[t],
  id: e.id
}), $o = (e) => [Ke(e, "faceName", "faces"), Ke(e, "characterName", "characters"), Ke(e, "battlerName", "sv_actors")], ee = (e, t) => ({
  note: cs(e),
  main: t.map((o) => ({ key: o, text: e[o], id: e.id }))
}), cs = (e) => Sa(e.note, (t, o) => ({
  key: t,
  text: o,
  id: e.id
})), Io = (e) => ee(e, ["name", "nickname", "profile"]), jo = (e) => ee(e, ["name"]), Po = (e) => ee(e, ["name"]), Lo = (e) => ee(e, ["name", "description", "message1", "message2"]), Mo = (e) => ee(e, ["name", "description"]), Do = (e) => ee(e, ["name", "description"]), Oo = (e) => ee(e, ["name", "description"]), Bo = (e) => ee(e, ["name", "message1", "message2", "message3", "message4"]), Ro = (e) => ({
  gameTitle: e.gameTitle,
  currencyUnit: e.currencyUnit,
  equipTypes: [...e.equipTypes],
  armorTypes: [...e.armorTypes],
  weaponTypes: [...e.weaponTypes],
  terms: {
    basic: Ia(e.terms.basic),
    commands: $a(e.terms.commands),
    messages: Ea(e.terms.messages),
    params: ka(e.terms.params)
  }
}), _o = (e, t, o, l, i, d) => [...ja(o, l), ...Pa(e, t), ...La(i, d)], qo = (e, t) => Ir(Ma(t), e), Uo = (e, t, o) => {
  const l = Da(t);
  return Ir(o ? [...l, ...o] : l, e);
}, us = (e, t) => `${t}[${e.map((o) => `"${o.name}"`).join(",")}]`, Or = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct"
}, ls = (e, t, o, l) => {
  if (o.scalas.length > 0 || o.scalaArrays.length > 0) {
    const i = ((d, { path: h, structName: r }) => {
      return {
        arraySchema: pr(d.scalaArrays),
        objectSchema: pr(d.scalas),
        structName: r,
        scalaArrays: (v = d.scalaArrays, j = h, v.map((D) => ({ path: `${j}.${D.name}[*]`, param: D }))),
        scalas: d.scalas.length > 0 ? us(d.scalas, h) : void 0
      };
      var v, j;
    })(o, {
      path: t.basePath,
      structName: t.schemaName
    });
    return { frames: [...e.frames, ...l], items: [...e.items, i], errs: e.errs };
  }
  return l.length > 0 ? { frames: [...e.frames, ...l], items: e.items, errs: e.errs } : e;
};
function Br(e, t, o, l) {
  const i = { items: [], errs: [], frames: [{ schemaName: e, basePath: t, ancestry: [] }] }, d = Math.max(1, 3 * o.size + 5), h = Array.from({
    length: d
  }).reduce((r) => r.frames.length === 0 ? r : ((v, j, D) => {
    if (v.frames.length === 0) return v;
    const I = v.frames.pop();
    if (I.ancestry.includes(I.schemaName)) return {
      frames: v.frames,
      items: v.items,
      errs: [...v.errs, { code: D.cyclicStruct, path: I.basePath }]
    };
    const O = j.get(I.schemaName);
    if (!O) return { frames: v.frames, items: v.items, errs: [...v.errs, {
      code: D.undefinedStruct,
      path: I.basePath
    }] };
    const V = ((E, S) => {
      const z = E.ancestry.concat(E.schemaName), W = E.basePath;
      return [...S.structs.map((te) => ({
        schemaName: te.attr.struct,
        basePath: `${W}.${te.name}`,
        ancestry: z
      })), ...S.structArrays.map((te) => ({ schemaName: te.attr.struct, basePath: `${W}.${te.name}[*]`, ancestry: z }))].reverse();
    })(I, O);
    return ls(v, I, O, V);
  })(r, o, l), i);
  return {
    items: h.items,
    errors: h.errs
  };
}
function Vo(e, t, o, l = Or) {
  const i = e.map((d) => Br(d.attr.struct, `${t}.${d.name}`, o, l));
  return { items: i.flatMap((d) => d.items), errors: i.flatMap((d) => d.errors) };
}
function zo(e, t, o, l = Or) {
  return Br(e, t, o, l);
}
var dr, Ae, ms = Object.create, fr = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, ds = Object.getOwnPropertyNames, fs = Object.getPrototypeOf, hs = Object.prototype.hasOwnProperty, gs = (dr = (e, t) => {
  function o(i, d) {
    return d.reduce(function(h, r) {
      return { type: "LogicalBinary", operator: r[1], left: h, right: r[3] };
    }, i);
  }
  var l = class extends SyntaxError {
    constructor(i, d, h, r) {
      super(i), this.expected = d, this.found = h, this.location = r, this.name = "SyntaxError";
    }
    format(i) {
      let d = "Error: " + this.message;
      if (this.location) {
        let h = null, r = i.find((I) => I.source === this.location.source);
        r && (h = r.text.split(/\r\n|\n|\r/g));
        let v = this.location.start, j = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(v) : v, D = this.location.source + ":" + j.line + ":" + j.column;
        if (h) {
          let I = this.location.end, O = "".padEnd(j.line.toString().length, " "), V = h[v.line - 1], E = (v.line === I.line ? I.column : V.length + 1) - v.column || 1;
          d += `
 --> ` + D + `
` + O + ` |
` + j.line + " | " + V + `
` + O + " | " + "".padEnd(v.column - 1, " ") + "".padEnd(E, "^");
        } else d += `
 at ` + D;
      }
      return d;
    }
    static buildMessage(i, d) {
      function h(E) {
        return E.codePointAt(0).toString(16).toUpperCase();
      }
      let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
      function v(E) {
        return r ? E.replace(r, (S) => "\\u{" + h(S) + "}") : E;
      }
      function j(E) {
        return v(E.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (S) => "\\x0" + h(S)).replace(/[\x10-\x1F\x7F-\x9F]/g, (S) => "\\x" + h(S)));
      }
      function D(E) {
        return v(E.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (S) => "\\x0" + h(S)).replace(/[\x10-\x1F\x7F-\x9F]/g, (S) => "\\x" + h(S)));
      }
      let I = {
        literal: (E) => '"' + j(E.text) + '"',
        class(E) {
          let S = E.parts.map((z) => Array.isArray(z) ? D(z[0]) + "-" + D(z[1]) : D(z));
          return "[" + (E.inverted ? "^" : "") + S.join("") + "]" + (E.unicode ? "u" : "");
        },
        any: () => "any character",
        end: () => "end of input",
        other: (E) => E.description
      };
      function O(E) {
        return I[E.type](E);
      }
      return "Expected " + function(E) {
        let S = E.map(O);
        if (S.sort(), S.length > 0) {
          let z = 1;
          for (let W = 1; W < S.length; W++) S[W - 1] !== S[W] && (S[z] = S[W], z++);
          S.length = z;
        }
        switch (S.length) {
          case 1:
            return S[0];
          case 2:
            return S[0] + " or " + S[1];
          default:
            return S.slice(0, -1).join(", ") + ", or " + S[S.length - 1];
        }
      }(i) + " but " + ((V = d) ? '"' + j(V) + '"' : "end of input") + " found.";
      var V;
    }
  };
  t.exports = {
    StartRules: ["JsonpathQuery"],
    SyntaxError: l,
    parse: function(i, d) {
      let h, r = {}, v = (d = d !== void 0 ? d : {}).grammarSource, j = {
        JsonpathQuery: Re
      }, D = Re, I = "$", O = '"', V = "'", E = "\\", S = "b", z = "f", W = "n", te = "r", on = "t", cn = "/", dt = "u", $e = "d", un = "*", ln = "0", mn = "-", ft = ":", pn = "?", pe = "||", de = "&&", ht = "(", gt = ")", dn = "!", fn = "@", yt = "==", bt = "!=", xt = "<=", vt = ">=", Ie = "[", je = "]", Pe = ".", At = "-0", hn = "e", Ct = "true", Tt = "false", Ft = "null", fe = ",", wt = "..", gn = /^[\t-\n\r ]/, yn = /^[ -!#-&(-[\]-\uD7FF\uE000-\uFFFF]/, Nt = /^[\uD800-\uDBFF]/, St = /^[\uDC00-\uDFFF]/, bn = /^[ABCEF]/i, xn = /^[0-7]/, vn = /^[89AB]/i, An = /^[CDEF]/i, Cn = /^[ABCDEF]/i, Tn = /^[1-9]/, Fn = /^[<>]/, wn = /^[\-+]/, Nn = /^[0-9_a-z]/, Sn = /^[a-z]/, kn = /^[_\x80-\uD7FF\uE000-\uFFFF]/, En = /^[0-9]/, $n = /^[a-z]/i, In = _([["	", `
`], "\r", " "], !1, !1, !1), jn = F("$", !1), he = F('"', !1), ge = F("'", !1), Le = F("\\", !1), Pn = _([[" ", "!"], ["#", "&"], ["(", "["], ["]", "퟿"], ["", "￿"]], !1, !1, !1), kt = _([["\uD800", "\uDBFF"]], !1, !1, !1), Et = _([["\uDC00", "\uDFFF"]], !1, !1, !1), Ln = F("b", !1), Mn = F("f", !1), Dn = F("n", !1), On = F("r", !1), Bn = F("t", !1), Rn = F("/", !1), $t = F("u", !1), _n = _(["A", "B", "C", "E", "F"], !1, !0, !1), Me = F("D", !0), qn = _([["0", "7"]], !1, !1, !1), Un = _(["8", "9", "A", "B"], !1, !0, !1), Vn = _(["C", "D", "E", "F"], !1, !0, !1), zn = _(["A", "B", "C", "D", "E", "F"], !1, !0, !1), Jn = F("*", !1), Gn = F("0", !1), Wn = F("-", !1), Zn = _([["1", "9"]], !1, !1, !1), It = F(":", !1), Hn = F("?", !1), jt = F("||", !1), Pt = F("&&", !1), Lt = F("(", !1), Mt = F(")", !1), Kn = F("!", !1), Xn = F("@", !1), Qn = F("==", !1), Yn = F("!=", !1), ea = F("<=", !1), ta = F(">=", !1), ra = _(["<", ">"], !1, !1, !1), De = F("[", !1), Oe = F("]", !1), Be = F(".", !1), na = F("-0", !1), aa = F("e", !0), sa = _(["-", "+"], !1, !1, !1), oa = F("true", !1), ia = F("false", !1), ca = F("null", !1), ua = _([["0", "9"], "_", ["a", "z"]], !1, !1, !1), la = _([["a", "z"]], !1, !1, !1), ye = F(",", !1), ma = _(["_", ["", "퟿"], ["", "￿"]], !1, !1, !1), pa = _([["0", "9"]], !1, !1, !1), da = _([["a", "z"]], !1, !0, !1), fa = F("..", !1), n = 0 | d.peg$currPos, C = n, ae = [{
        line: 1,
        column: 1
      }], G = n, be = d.peg$maxFailExpected || [], y = 0 | d.peg$silentFails;
      if (d.startRule) {
        if (!(d.startRule in j)) throw new Error(`Can't start parsing from rule "` + d.startRule + '".');
        D = j[d.startRule];
      }
      function se() {
        return i.substring(C, n);
      }
      function F(a, s) {
        return {
          type: "literal",
          text: a,
          ignoreCase: s
        };
      }
      function _(a, s, c, u) {
        return { type: "class", parts: a, inverted: s, ignoreCase: c, unicode: u };
      }
      function Dt(a) {
        let s, c = ae[a];
        if (c) return c;
        if (a >= ae.length) s = ae.length - 1;
        else for (s = a; !ae[--s]; ) ;
        for (c = ae[s], c = { line: c.line, column: c.column }; s < a; ) i.charCodeAt(s) === 10 ? (c.line++, c.column = 1) : c.column++, s++;
        return ae[a] = c, c;
      }
      function Ot(a, s, c) {
        let u = Dt(a), p = Dt(s);
        return { source: v, start: { offset: a, line: u.line, column: u.column }, end: { offset: s, line: p.line, column: p.column } };
      }
      function g(a) {
        n < G || (n > G && (G = n, be = []), be.push(a));
      }
      function Re() {
        let a, s, c;
        return a = n, s = _t(), s !== r ? (c = Bt(), C = a, a = /* @__PURE__ */ function(u) {
          return { type: "Root", segments: u };
        }(c)) : (n = a, a = r), a;
      }
      function Bt() {
        let a, s, c;
        for (a = [], s = n, k(), c = nr(), c !== r ? s = c : (n = s, s = r); s !== r; ) a.push(s), s = n, k(), c = nr(), c !== r ? s = c : (n = s, s = r);
        return a;
      }
      function k() {
        let a, s;
        for (a = [], s = Rt(); s !== r; ) a.push(s), s = Rt();
        return a;
      }
      function Rt() {
        let a;
        return a = i.charAt(n), gn.test(a) ? n++ : (a = r, y === 0 && g(In)), a;
      }
      function _t() {
        let a;
        return i.charCodeAt(n) === 36 ? (a = I, n++) : (a = r, y === 0 && g(jn)), a;
      }
      function _e() {
        let a;
        return a = qt(), a === r && (a = qe(), a === r && (a = function() {
          let s, c, u, p, f, b, x, w;
          return s = n, c = n, u = ce(), u !== r ? (k(), c = u) : (n = c, c = r), c === r && (c = null), i.charCodeAt(n) === 58 ? (u = ft, n++) : (u = r, y === 0 && g(It)), u !== r ? (k(), p = n, f = ce(), f !== r ? (b = k(), p = f) : (n = p, p = r), p === r && (p = null), f = n, i.charCodeAt(n) === 58 ? (b = ft, n++) : (b = r, y === 0 && g(It)), b !== r ? (x = n, k(), w = ce(), w !== r ? x = w : (n = x, x = r), x === r && (x = null), f = x) : (n = f, f = r), f === r && (f = null), C = s, s = /* @__PURE__ */ function(P, A, N) {
            return {
              type: "SliceSelector",
              start: P,
              end: A,
              step: N
            };
          }(c, p, f)) : (n = s, s = r), s;
        }(), a === r && (a = Wt(), a === r && (a = function() {
          let s, c, u;
          return s = n, i.charCodeAt(n) === 63 ? (c = pn, n++) : (c = r, y === 0 && g(Hn)), c !== r ? (k(), u = Ue(), u !== r ? (C = s, s = /* @__PURE__ */ function(p) {
            return { type: "FilterSelector", expr: p };
          }(u)) : (n = s, s = r)) : (n = s, s = r), s;
        }())))), a;
      }
      function qt() {
        let a, s;
        return a = n, s = Ut(), s !== r && (C = a, s = /* @__PURE__ */ function(c) {
          return {
            type: "NameSelector",
            member: c
          };
        }(s)), a = s, a;
      }
      function Ut() {
        let a, s, c, u;
        if (a = n, i.charCodeAt(n) === 34 ? (s = O, n++) : (s = r, y === 0 && g(he)), s !== r) {
          for (c = [], u = Vt(); u !== r; ) c.push(u), u = Vt();
          i.charCodeAt(n) === 34 ? (u = O, n++) : (u = r, y === 0 && g(he)), u !== r ? (C = a, a = function(p) {
            return p.join("");
          }(c)) : (n = a, a = r);
        } else n = a, a = r;
        if (a === r) if (a = n, i.charCodeAt(n) === 39 ? (s = V, n++) : (s = r, y === 0 && g(ge)), s !== r) {
          for (c = [], u = zt(); u !== r; ) c.push(u), u = zt();
          i.charCodeAt(n) === 39 ? (u = V, n++) : (u = r, y === 0 && g(ge)), u !== r ? (C = a, a = function(p) {
            return p.join("");
          }(c)) : (n = a, a = r);
        } else n = a, a = r;
        return a;
      }
      function Vt() {
        let a, s, c;
        return a = Jt(), a === r && (i.charCodeAt(n) === 39 ? (a = V, n++) : (a = r, y === 0 && g(ge)), a === r && (a = n, s = xe(), s !== r ? (i.charCodeAt(n) === 34 ? (c = O, n++) : (c = r, y === 0 && g(he)), c !== r ? a = c : (n = a, a = r)) : (n = a, a = r), a === r && (a = n, s = xe(), s !== r ? (c = Gt(), c !== r ? a = c : (n = a, a = r)) : (n = a, a = r)))), a;
      }
      function zt() {
        let a, s, c;
        return a = Jt(), a === r && (i.charCodeAt(n) === 34 ? (a = O, n++) : (a = r, y === 0 && g(he)), a === r && (a = n, s = xe(), s !== r ? (i.charCodeAt(n) === 39 ? (c = V, n++) : (c = r, y === 0 && g(ge)), c !== r ? a = c : (n = a, a = r)) : (n = a, a = r), a === r && (a = n, s = xe(), s !== r ? (c = Gt(), c !== r ? a = c : (n = a, a = r)) : (n = a, a = r)))), a;
      }
      function xe() {
        let a;
        return i.charCodeAt(n) === 92 ? (a = E, n++) : (a = r, y === 0 && g(Le)), a;
      }
      function Jt() {
        let a, s, c, u;
        return a = i.charAt(n), yn.test(a) ? n++ : (a = r, y === 0 && g(Pn)), a === r && (a = n, s = n, c = i.charAt(n), Nt.test(c) ? n++ : (c = r, y === 0 && g(kt)), c !== r ? (u = i.charAt(n), St.test(u) ? n++ : (u = r, y === 0 && g(Et)), u !== r ? (c = [c, u], s = c) : (n = s, s = r)) : (n = s, s = r), a = s !== r ? i.substring(a, n) : s), a;
      }
      function Gt() {
        let a, s, c, u;
        return a = n, i.charCodeAt(n) === 98 ? (s = S, n++) : (s = r, y === 0 && g(Ln)), s !== r && (C = a, s = "\b"), a = s, a === r && (a = n, i.charCodeAt(n) === 102 ? (s = z, n++) : (s = r, y === 0 && g(Mn)), s !== r && (C = a, s = "\f"), a = s, a === r && (a = n, i.charCodeAt(n) === 110 ? (s = W, n++) : (s = r, y === 0 && g(Dn)), s !== r && (C = a, s = `
`), a = s, a === r && (a = n, i.charCodeAt(n) === 114 ? (s = te, n++) : (s = r, y === 0 && g(On)), s !== r && (C = a, s = "\r"), a = s, a === r && (a = n, i.charCodeAt(n) === 116 ? (s = on, n++) : (s = r, y === 0 && g(Bn)), s !== r && (C = a, s = "	"), a = s, a === r && (a = n, i.charCodeAt(n) === 47 ? (s = cn, n++) : (s = r, y === 0 && g(Rn)), s !== r && (C = a, s = "/"), a = s, a === r && (a = n, i.charCodeAt(n) === 92 ? (s = E, n++) : (s = r, y === 0 && g(Le)), s !== r && (C = a, s = "\\"), a = s, a === r && (a = n, s = n, i.charCodeAt(n) === 117 ? (c = dt, n++) : (c = r, y === 0 && g($t)), c !== r ? (u = function() {
          let p, f, b, x, w, P;
          return p = n, f = function() {
            let A, N, $, L, M, B, ve;
            if (A = n, N = n, $ = H(), $ === r && ($ = i.charAt(n), bn.test($) ? n++ : ($ = r, y === 0 && g(_n))), $ !== r) {
              for (L = n, M = [], B = X(); B !== r; ) M.push(B), B = M.length >= 3 ? r : X();
              M.length < 3 ? (n = L, L = r) : L = M, L !== r ? ($ = [$, L], N = $) : (n = N, N = r);
            } else n = N, N = r;
            if (N !== r && (C = A, N = parseInt(se(), 16)), A = N, A === r) {
              if (A = n, N = n, $ = i.charAt(n), $.toLowerCase() === $e ? n++ : ($ = r, y === 0 && g(Me)), $ !== r) if (L = i.charAt(n), xn.test(L) ? n++ : (L = r, y === 0 && g(qn)), L !== r) {
                for (M = n, B = [], ve = X(); ve !== r; ) B.push(ve), ve = B.length >= 2 ? r : X();
                B.length < 2 ? (n = M, M = r) : M = B, M !== r ? ($ = [$, L, M], N = $) : (n = N, N = r);
              } else n = N, N = r;
              else n = N, N = r;
              N !== r && (C = A, N = parseInt(se(), 16)), A = N;
            }
            return A;
          }(), f !== r && (C = p, f = /* @__PURE__ */ function(A) {
            return [A];
          }(f)), p = f, p === r && (p = n, f = n, b = function() {
            let A, N, $, L, M, B;
            if (A = n, N = i.charAt(n), N.toLowerCase() === $e ? n++ : (N = r, y === 0 && g(Me)), N !== r) if ($ = i.charAt(n), vn.test($) ? n++ : ($ = r, y === 0 && g(Un)), $ !== r) {
              for (L = n, M = [], B = X(); B !== r; ) M.push(B), B = M.length >= 2 ? r : X();
              M.length < 2 ? (n = L, L = r) : L = M, L !== r ? (C = A, A = parseInt(se(), 16)) : (n = A, A = r);
            } else n = A, A = r;
            else n = A, A = r;
            return A;
          }(), b !== r ? (i.charCodeAt(n) === 92 ? (x = E, n++) : (x = r, y === 0 && g(Le)), x !== r ? (i.charCodeAt(n) === 117 ? (w = dt, n++) : (w = r, y === 0 && g($t)), w !== r ? (P = function() {
            let A, N, $, L, M, B;
            if (A = n, N = i.charAt(n), N.toLowerCase() === $e ? n++ : (N = r, y === 0 && g(Me)), N !== r) if ($ = i.charAt(n), An.test($) ? n++ : ($ = r, y === 0 && g(Vn)), $ !== r) {
              for (L = n, M = [], B = X(); B !== r; ) M.push(B), B = M.length >= 2 ? r : X();
              M.length < 2 ? (n = L, L = r) : L = M, L !== r ? (C = A, A = parseInt(se(), 16)) : (n = A, A = r);
            } else n = A, A = r;
            else n = A, A = r;
            return A;
          }(), P !== r ? f = [b, P] : (n = f, f = r)) : (n = f, f = r)) : (n = f, f = r)) : (n = f, f = r), f !== r && (C = p), p = f), p;
        }(), u !== r ? s = u : (n = s, s = r)) : (n = s, s = r), s !== r && (C = a, s = function(p) {
          return String.fromCharCode(...p);
        }(s)), a = s))))))), a;
      }
      function X() {
        let a;
        return a = H(), a === r && (a = i.charAt(n), Cn.test(a) ? n++ : (a = r, y === 0 && g(zn))), a;
      }
      function qe() {
        let a, s;
        return a = n, i.charCodeAt(n) === 42 ? (s = un, n++) : (s = r, y === 0 && g(Jn)), s !== r && (C = a, s = { type: "WildcardSelector" }), a = s, a;
      }
      function Wt() {
        let a, s;
        return a = n, s = ce(), s !== r && (C = a, s = /* @__PURE__ */ function(c) {
          return { type: "IndexSelector", index: c };
        }(s)), a = s, a;
      }
      function ce() {
        let a, s, c, u, p, f;
        if (a = n, i.charCodeAt(n) === 48 ? (s = ln, n++) : (s = r, y === 0 && g(Gn)), s !== r && (C = a, s = 0), a = s, a === r) {
          if (a = n, s = n, i.charCodeAt(n) === 45 ? (c = mn, n++) : (c = r, y === 0 && g(Wn)), c === r && (c = null), u = function() {
            let b;
            return b = i.charAt(n), Tn.test(b) ? n++ : (b = r, y === 0 && g(Zn)), b;
          }(), u !== r) {
            for (p = [], f = H(); f !== r; ) p.push(f), f = H();
            c = [c, u, p], s = c;
          } else n = s, s = r;
          s !== r && (C = a, s = function() {
            let b = parseInt(se());
            if (Number.MIN_SAFE_INTEGER <= b && b <= Number.MAX_SAFE_INTEGER) return b;
            throw new Error(`Index must be within the range of I-JSON: ${b}`);
          }()), a = s;
        }
        return a;
      }
      function Ue() {
        let a, s, c, u, p, f, b, x;
        if (a = n, s = Ve(), s !== r) {
          for (c = [], u = n, p = k(), i.substr(n, 2) === pe ? (f = pe, n += 2) : (f = r, y === 0 && g(jt)), f !== r ? (b = k(), x = Ve(), x !== r ? (p = [p, f, b, x], u = p) : (n = u, u = r)) : (n = u, u = r); u !== r; ) c.push(u), u = n, p = k(), i.substr(n, 2) === pe ? (f = pe, n += 2) : (f = r, y === 0 && g(jt)), f !== r ? (b = k(), x = Ve(), x !== r ? (p = [p, f, b, x], u = p) : (n = u, u = r)) : (n = u, u = r);
          C = a, a = function(w, P) {
            return o(w, P);
          }(s, c);
        } else n = a, a = r;
        return a;
      }
      function Ve() {
        let a, s, c, u, p, f, b, x;
        if (a = n, s = ze(), s !== r) {
          for (c = [], u = n, p = k(), i.substr(n, 2) === de ? (f = de, n += 2) : (f = r, y === 0 && g(Pt)), f !== r ? (b = k(), x = ze(), x !== r ? (p = [p, f, b, x], u = p) : (n = u, u = r)) : (n = u, u = r); u !== r; ) c.push(u), u = n, p = k(), i.substr(n, 2) === de ? (f = de, n += 2) : (f = r, y === 0 && g(Pt)), f !== r ? (b = k(), x = ze(), x !== r ? (p = [p, f, b, x], u = p) : (n = u, u = r)) : (n = u, u = r);
          C = a, a = function(w, P) {
            return o(w, P);
          }(s, c);
        } else n = a, a = r;
        return a;
      }
      function ze() {
        let a;
        return a = function() {
          let s, c, u, p, f;
          return s = n, c = n, u = Zt(), u !== r ? (k(), c = u) : (n = c, c = r), c === r && (c = null), i.charCodeAt(n) === 40 ? (u = ht, n++) : (u = r, y === 0 && g(Lt)), u !== r ? (k(), p = Ue(), p !== r ? (k(), i.charCodeAt(n) === 41 ? (f = gt, n++) : (f = r, y === 0 && g(Mt)), f !== r ? (C = s, s = /* @__PURE__ */ function(b, x) {
            return b ? { type: "LogicalUnary", operator: "!", expr: x } : x;
          }(c, p)) : (n = s, s = r)) : (n = s, s = r)) : (n = s, s = r), s;
        }(), a === r && (a = function() {
          let s, c, u, p;
          return s = n, c = Qt(), c !== r ? (k(), u = function() {
            let f;
            return i.substr(n, 2) === yt ? (f = yt, n += 2) : (f = r, y === 0 && g(Qn)), f === r && (i.substr(n, 2) === bt ? (f = bt, n += 2) : (f = r, y === 0 && g(Yn)), f === r && (i.substr(n, 2) === xt ? (f = xt, n += 2) : (f = r, y === 0 && g(ea)), f === r && (i.substr(n, 2) === vt ? (f = vt, n += 2) : (f = r, y === 0 && g(ta)), f === r && (f = i.charAt(n), Fn.test(f) ? n++ : (f = r, y === 0 && g(ra)))))), f;
          }(), u !== r ? (k(), p = Qt(), p !== r ? (C = s, s = /* @__PURE__ */ function(f, b, x) {
            return { type: "ComparisonExpr", left: f, operator: b, right: x };
          }(c, u, p)) : (n = s, s = r)) : (n = s, s = r)) : (n = s, s = r), s;
        }(), a === r && (a = function() {
          let s, c, u;
          return s = n, c = n, u = Zt(), u !== r ? (k(), c = u) : (n = c, c = r), c === r && (c = null), u = Ht(), u === r && (u = Je()), u !== r ? (C = s, s = /* @__PURE__ */ function(p, f) {
            return /* @__PURE__ */ function(b, x) {
              return b ? { type: "LogicalUnary", operator: "!", expr: x } : x;
            }(p, { type: "TestExpr", query: f });
          }(c, u)) : (n = s, s = r), s;
        }())), a;
      }
      function Zt() {
        let a;
        return i.charCodeAt(n) === 33 ? (a = dn, n++) : (a = r, y === 0 && g(Kn)), a;
      }
      function Ht() {
        let a;
        return a = function() {
          let s, c, u;
          return s = n, c = Kt(), c !== r ? (u = Bt(), u !== r ? (C = s, s = /* @__PURE__ */ function(p) {
            return { type: "CurrentNode", segments: p };
          }(u)) : (n = s, s = r)) : (n = s, s = r), s;
        }(), a === r && (a = Re()), a;
      }
      function Kt() {
        let a;
        return i.charCodeAt(n) === 64 ? (a = fn, n++) : (a = r, y === 0 && g(Xn)), a;
      }
      function Xt() {
        let a, s;
        return a = n, s = function() {
          let c, u, p, f;
          return c = n, u = ce(), u === r && (i.substr(n, 2) === At ? (u = At, n += 2) : (u = r, y === 0 && g(na))), u !== r ? (p = function() {
            let b, x, w, P, A;
            if (b = n, x = n, i.charCodeAt(n) === 46 ? (w = Pe, n++) : (w = r, y === 0 && g(Be)), w !== r) {
              if (P = [], A = H(), A !== r) for (; A !== r; ) P.push(A), A = H();
              else P = r;
              P !== r ? (w = [w, P], x = w) : (n = x, x = r);
            } else n = x, x = r;
            return b = x !== r ? i.substring(b, n) : x, b;
          }(), p === r && (p = null), f = function() {
            let b, x, w, P, A;
            if (b = n, x = i.charAt(n), x.toLowerCase() === hn ? n++ : (x = r, y === 0 && g(aa)), x !== r) {
              if (w = i.charAt(n), wn.test(w) ? n++ : (w = r, y === 0 && g(sa)), w === r && (w = null), P = [], A = H(), A !== r) for (; A !== r; ) P.push(A), A = H();
              else P = r;
              P !== r ? (C = b, b = function(N, $) {
                return parseInt(`${N || ""}${$.join("")}`);
              }(w, P)) : (n = b, b = r);
            } else n = b, b = r;
            return b;
          }(), f === r && (f = null), C = c, c = function(b, x, w) {
            return parseFloat(`${b}${x ?? ""}${w ? `e${w}` : ""}`);
          }(u, p, f)) : (n = c, c = r), c;
        }(), s === r && (s = Ut(), s === r && (s = function() {
          let c, u;
          return c = n, i.substr(n, 4) === Ct ? (u = Ct, n += 4) : (u = r, y === 0 && g(oa)), u !== r && (C = c, u = !0), c = u, c;
        }(), s === r && (s = function() {
          let c, u;
          return c = n, i.substr(n, 5) === Tt ? (u = Tt, n += 5) : (u = r, y === 0 && g(ia)), u !== r && (C = c, u = !1), c = u, c;
        }(), s === r && (s = function() {
          let c, u;
          return c = n, i.substr(n, 4) === Ft ? (u = Ft, n += 4) : (u = r, y === 0 && g(ca)), u !== r && (C = c, u = null), c = u, c;
        }())))), s !== r && (C = a, s = /* @__PURE__ */ function(c) {
          return { type: "Literal", member: c };
        }(s)), a = s, a;
      }
      function Qt() {
        let a;
        return a = Xt(), a === r && (a = function() {
          let s;
          return s = function() {
            let c, u, p;
            return c = n, u = Kt(), u !== r ? (p = Yt(), C = c, c = /* @__PURE__ */ function(f) {
              return { type: "CurrentNode", segments: f };
            }(p)) : (n = c, c = r), c;
          }(), s === r && (s = function() {
            let c, u, p;
            return c = n, u = _t(), u !== r ? (p = Yt(), C = c, c = /* @__PURE__ */ function(f) {
              return { type: "Root", segments: f };
            }(p)) : (n = c, c = r), c;
          }()), s;
        }(), a === r && (a = Je())), a;
      }
      function Yt() {
        let a, s, c, u;
        for (a = n, s = [], c = n, k(), u = er(), u === r && (u = tr()), u !== r ? c = u : (n = c, c = r); c !== r; ) s.push(c), c = n, k(), u = er(), u === r && (u = tr()), u !== r ? c = u : (n = c, c = r);
        return C = a, a = s, a;
      }
      function er() {
        let a, s, c, u;
        return a = n, i.charCodeAt(n) === 91 ? (s = Ie, n++) : (s = r, y === 0 && g(De)), s !== r ? (c = qt(), c !== r ? (i.charCodeAt(n) === 93 ? (u = je, n++) : (u = r, y === 0 && g(Oe)), u !== r ? (C = a, a = /* @__PURE__ */ function(p) {
          return [p];
        }(c)) : (n = a, a = r)) : (n = a, a = r)) : (n = a, a = r), a === r && (a = n, i.charCodeAt(n) === 46 ? (s = Pe, n++) : (s = r, y === 0 && g(Be)), s !== r ? (c = We(), c !== r ? (C = a, a = /* @__PURE__ */ function(p) {
          return [p];
        }(c)) : (n = a, a = r)) : (n = a, a = r)), a;
      }
      function tr() {
        let a, s, c, u;
        return a = n, i.charCodeAt(n) === 91 ? (s = Ie, n++) : (s = r, y === 0 && g(De)), s !== r ? (c = Wt(), c !== r ? (i.charCodeAt(n) === 93 ? (u = je, n++) : (u = r, y === 0 && g(Oe)), u !== r ? (C = a, a = /* @__PURE__ */ function(p) {
          return [p];
        }(c)) : (n = a, a = r)) : (n = a, a = r)) : (n = a, a = r), a;
      }
      function ha() {
        let a, s, c, u, p;
        if (a = n, s = n, c = function() {
          let f;
          return f = i.charAt(n), Sn.test(f) ? n++ : (f = r, y === 0 && g(la)), f;
        }(), c !== r) {
          for (u = [], p = rr(); p !== r; ) u.push(p), p = rr();
          c = [c, u], s = c;
        } else n = s, s = r;
        return a = s !== r ? i.substring(a, n) : s, a;
      }
      function rr() {
        let a;
        return a = i.charAt(n), Nn.test(a) ? n++ : (a = r, y === 0 && g(ua)), a;
      }
      function Je() {
        let a, s, c, u, p, f, b, x, w;
        if (a = n, s = ha(), s !== r) if (i.charCodeAt(n) === 40 ? (c = ht, n++) : (c = r, y === 0 && g(Lt)), c !== r) {
          if (k(), u = n, p = Ge(), p !== r) {
            for (f = [], b = n, k(), i.charCodeAt(n) === 44 ? (x = fe, n++) : (x = r, y === 0 && g(ye)), x !== r ? (k(), w = Ge(), w !== r ? b = w : (n = b, b = r)) : (n = b, b = r); b !== r; ) f.push(b), b = n, k(), i.charCodeAt(n) === 44 ? (x = fe, n++) : (x = r, y === 0 && g(ye)), x !== r ? (k(), w = Ge(), w !== r ? b = w : (n = b, b = r)) : (n = b, b = r);
            u = [p, f];
          } else n = u, u = r;
          u === r && (u = null), p = k(), i.charCodeAt(n) === 41 ? (f = gt, n++) : (f = r, y === 0 && g(Mt)), f !== r ? (C = a, a = function(P, A) {
            let N = A[0], $ = A[1];
            return { type: "FunctionExpr", name: P, args: [N].concat($) };
          }(s, u)) : (n = a, a = r);
        } else n = a, a = r;
        else n = a, a = r;
        return a;
      }
      function Ge() {
        let a;
        return a = Xt(), a === r && (a = Ht(), a === r && (a = Je(), a === r && (a = Ue()))), a;
      }
      function nr() {
        let a;
        return a = function() {
          let s, c, u;
          return s = ar(), s === r && (s = n, i.charCodeAt(n) === 46 ? (c = Pe, n++) : (c = r, y === 0 && g(Be)), c !== r ? (u = qe(), u === r && (u = We()), u !== r ? (C = s, s = /* @__PURE__ */ function(p) {
            return [p];
          }(u)) : (n = s, s = r)) : (n = s, s = r)), s;
        }(), a === r && (a = function() {
          let s, c, u;
          return s = n, i.substr(n, 2) === wt ? (c = wt, n += 2) : (c = r, y === 0 && g(fa)), c !== r ? (u = ar(), u === r && (u = qe(), u === r && (u = We())), u !== r ? (C = s, s = function(p) {
            return Array.isArray(p) ? {
              type: "DescendantSegment",
              selectors: p
            } : { type: "DescendantSegment", selectors: [p] };
          }(u)) : (n = s, s = r)) : (n = s, s = r), s;
        }()), a;
      }
      function ar() {
        let a, s, c, u, p, f, b, x;
        if (a = n, i.charCodeAt(n) === 91 ? (s = Ie, n++) : (s = r, y === 0 && g(De)), s !== r) if (k(), c = _e(), c !== r) {
          for (u = [], p = n, f = k(), i.charCodeAt(n) === 44 ? (b = fe, n++) : (b = r, y === 0 && g(ye)), b !== r ? (k(), x = _e(), x !== r ? p = x : (n = p, p = r)) : (n = p, p = r); p !== r; ) u.push(p), p = n, f = k(), i.charCodeAt(n) === 44 ? (b = fe, n++) : (b = r, y === 0 && g(ye)), b !== r ? (k(), x = _e(), x !== r ? p = x : (n = p, p = r)) : (n = p, p = r);
          p = k(), i.charCodeAt(n) === 93 ? (f = je, n++) : (f = r, y === 0 && g(Oe)), f !== r ? (C = a, a = function(w, P) {
            return [w].concat(P);
          }(c, u)) : (n = a, a = r);
        } else n = a, a = r;
        else n = a, a = r;
        return a;
      }
      function We() {
        let a, s, c, u;
        if (a = n, s = sr(), s !== r) {
          for (c = [], u = or(); u !== r; ) c.push(u), u = or();
          C = a, a = { type: "MemberNameShorthand", member: se() };
        } else n = a, a = r;
        return a;
      }
      function sr() {
        let a, s, c, u;
        return a = function() {
          let p;
          return p = i.charAt(n), $n.test(p) ? n++ : (p = r, y === 0 && g(da)), p;
        }(), a === r && (a = i.charAt(n), kn.test(a) ? n++ : (a = r, y === 0 && g(ma)), a === r && (a = n, s = n, c = i.charAt(n), Nt.test(c) ? n++ : (c = r, y === 0 && g(kt)), c !== r ? (u = i.charAt(n), St.test(u) ? n++ : (u = r, y === 0 && g(Et)), u !== r ? (c = [c, u], s = c) : (n = s, s = r)) : (n = s, s = r), a = s !== r ? i.substring(a, n) : s)), a;
      }
      function or() {
        let a;
        return a = H(), a === r && (a = sr()), a;
      }
      function H() {
        let a;
        return a = i.charAt(n), En.test(a) ? n++ : (a = r, y === 0 && g(pa)), a;
      }
      h = D();
      let Ze = h !== r && n === i.length;
      function ir() {
        throw h !== r && n < i.length && g({ type: "end" }), a = be, s = G < i.length ? function(u = n) {
          let p = i.codePointAt(u);
          return p === void 0 ? "" : String.fromCodePoint(p);
        }(G) : null, c = G < i.length ? Ot(G, G + 1) : Ot(G, G), new l(l.buildMessage(a, s), a, s, c);
        var a, s, c;
      }
      return d.peg$library ? {
        peg$result: h,
        peg$currPos: n,
        peg$FAILED: r,
        peg$maxFailExpected: be,
        peg$maxFailPos: G,
        peg$success: Ze,
        peg$throw: Ze ? void 0 : ir
      } : Ze ? h : void ir();
    }
  };
}, () => (Ae || dr((Ae = { exports: {} }).exports, Ae), Ae.exports)), ys = ((e, t, o) => (o = e != null ? ms(fs(e)) : {}, ((l, i, d, h) => {
  if (i && typeof i == "object" || typeof i == "function") for (let r of ds(i)) !hs.call(l, r) && r !== d && fr(l, r, { get: () => i[r], enumerable: !(h = ps(i, r)) || h.enumerable });
  return l;
})(e && e.__esModule ? o : fr(o, "default", { value: e, enumerable: !0 }), e)))(gs()), Rr = Symbol("NodeType");
function it(e, t) {
  return { [Rr]: void 0, value: e, path: t };
}
function ct(e, t, o) {
  return it(t, [...e.path, o]);
}
function me(e, t, o) {
  return it(t, [...e.path, o]);
}
function _r(e) {
  return typeof e == "object" && e !== null && Rr in e;
}
function qr(e) {
  return !!Array.isArray(e) && e.every(_r);
}
var oe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ut = (e) => e === null || e === !0 || e === !1 || typeof e == "string" || typeof e == "number", Qe = (e) => Array.isArray(e);
function Ur(e) {
  let { value: t } = e;
  return ut(t) ? [] : Qe(t) ? t.map((o, l) => me(e, o, l)) : oe(t) ? Object.entries(t).map(([o, l]) => ct(e, l, o)) : [];
}
var Vr = (e) => {
  let t = [];
  t.push(e);
  for (let o of Ur(e)) t.push(...Vr(o));
  return t;
};
function bs(e, t) {
  if (!Array.isArray(t.value)) return [];
  let o = e.step ?? 1, l = e.start ?? (o >= 0 ? 0 : t.value.length - 1), i = e.end ?? (o >= 0 ? t.value.length : -t.value.length - 1), d = [], [h, r] = function(v, j, D, I) {
    let O, V, E = hr(v, I), S = hr(j, I);
    return D >= 0 ? (O = Math.min(Math.max(E, 0), I), V = Math.min(Math.max(S, 0), I)) : (V = Math.min(Math.max(E, -1), I - 1), O = Math.min(Math.max(S, -1), I - 1)), [O, V];
  }(l, i, o, t.value.length);
  if (o > 0) for (let v = h; v < r; v += o) d.push(me(t, t.value[v], v));
  else if (o < 0) for (let v = r; h < v; v += o) d.push(me(t, t.value[v], v));
  return d;
}
function hr(e, t) {
  return e >= 0 ? e : t + e;
}
function Q(e, t) {
  return Ye(e, t);
}
function Ye(e, t, o = /* @__PURE__ */ new WeakMap()) {
  if (e === t) return !0;
  if (typeof e != typeof t || e === null || t === null) return !1;
  if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((l, i) => Ye(l, t[i], o));
  if (Array.isArray(e) || Array.isArray(t)) return !1;
  if (typeof e == "object" && typeof t == "object") {
    if (o.has(e)) return o.get(e) === t;
    o.set(e, t);
    let l = Object.keys(e), i = Object.keys(t);
    return l.length === i.length && l.every((d) => Ye(e[d], t[d], o));
  }
  return !1;
}
var J, gr, xs = {
  "==": (e, t) => Q(e, t),
  "!=": (e, t) => !Q(e, t),
  "<": () => !1,
  "<=": (e, t) => Q(e, t),
  ">": () => !1,
  ">=": (e, t) => Q(e, t)
}, vs = { "==": (e, t) => e === t, "!=": (e, t) => e !== t, "<": () => !1, "<=": (e, t) => e === t, ">": () => !1, ">=": (e, t) => e === t }, R = { __type: "Nothing" }, As = {
  "==": (e, t) => (e === R || t === R) && e === t,
  "!=": (e, t) => (e === R || t === R) && e !== t,
  "<": () => !1,
  "<=": (e, t) => (e === R || t === R) && e === t,
  ">": () => !1,
  ">=": (e, t) => (e === R || t === R) && e === t
}, Cs = {
  "==": (e, t) => e === t,
  "!=": (e, t) => e !== t,
  "<": () => !1,
  "<=": (e, t) => e === t,
  ">": () => !1,
  ">=": (e, t) => e === t
}, Ts = {
  "==": (e, t) => e === t,
  "!=": (e, t) => e !== t,
  "<": (e, t) => typeof t == "number" && e < t,
  "<=": (e, t) => typeof t == "number" && e <= t,
  ">": (e, t) => typeof t == "number" && e > t,
  ">=": (e, t) => typeof t == "number" && e >= t
}, Fs = {
  "==": (e, t) => Q(e, t),
  "!=": (e, t) => !Q(e, t),
  "<": () => !1,
  "<=": (e, t) => Q(e, t),
  ">": () => !1,
  ">=": (e, t) => Q(e, t)
}, ws = { "==": (e, t) => e === t, "!=": (e, t) => e !== t, "<": (e, t) => e < t, "<=": (e, t) => e <= t, ">": (e, t) => e > t, ">=": (e, t) => e >= t };
(gr = J || (J = {})).LogicalTrue = { type: "LogicalType" }, gr.LogicalFalse = { type: "LogicalFalse" };
var zr = (e) => e ? J.LogicalTrue : J.LogicalFalse, yr = (e) => e === J.LogicalTrue || e === J.LogicalFalse, Y = {
  type: "ValueType",
  convert: (e) => {
    if (e === R || ut(e)) return e;
    if (_r(e)) return e.value;
    if (qr(e)) {
      if (e.length === 0) return R;
      if (e.length === 1) return e[0].value;
    }
    throw new Error(`Invalid argument type "${JSON.stringify(e)}" is not a ValueType`);
  }
}, Jr = { type: "NodesType", convert: (e) => {
  if (qr(e)) return e;
  throw new Error(`Invalid argument type "${JSON.stringify(e)}" is not a NodesType`);
} }, Gr = { type: "LogicalType", convert: (e) => {
  if (e === !0) return J.LogicalTrue;
  if (e === !1) return J.LogicalFalse;
  if (Array.isArray(e)) {
    if (e.length === 0) return J.LogicalFalse;
    if (e.length >= 1) return J.LogicalTrue;
  }
  throw new Error(`Invalid argument type "${JSON.stringify(e)}" is not a LogicalType`);
} }, le = (e, t) => {
  let o = e.args;
  if (t.length !== o.length) throw new Error(`Invalid number of arguments: ${e.name} function requires ${o.length} arguments but received ${t.length}`);
  return o.map((l, i) => l.convert(t[i]));
}, Ns = { name: "length", args: [Jr], return: Y, function: (e) => e.length }, Ss = {
  name: "length",
  args: [Y],
  return: Y,
  function: (e) => e === R ? R : typeof e == "string" || Array.isArray(e) ? e.length : oe(e) ? Object.keys(e).length : R
}, Wr = (e) => {
  let t = "", o = !1, l = !1;
  for (let i = 0; i < e.length; i++) {
    let d = e[i];
    l ? (t += `\\${d}`, l = !1) : d !== "\\" ? d !== "[" ? d !== "]" ? t += d !== "." || o || l ? d : "[^\\n\\r]" : (o = !1, t += d) : (o = !0, t += d) : l = !0;
  }
  if (l) throw new Error("Invalid I-Regexp: ends with a backslash escape.");
  return t;
}, ks = {
  name: "match",
  args: [Y, Y],
  return: Gr,
  function: (e, t) => {
    if (typeof e != "string" || typeof t != "string") return J.LogicalFalse;
    let o = Wr(t), l = new RegExp(`^(?:${o})$`, "u").test(e);
    return zr(l);
  }
}, Es = { name: "search", args: [Y, Y], return: Gr, function: (e, t) => {
  if (typeof e != "string" || typeof t != "string") return J.LogicalFalse;
  let o = Wr(t), l = new RegExp(o, "u").test(e);
  return zr(l);
} }, $s = { name: "value", args: [Jr], return: Y, function: (e) => e.length === 1 ? e[0].value : R }, Z = { length: Ss, count: Ns, match: ks, search: Es, value: $s }, lt = (e, t, o) => {
  let l = e.args.map((i) => Is(i, t, o));
  switch (e.name) {
    case "length": {
      let i = le(Z.length, l);
      return Z.length.function.call(void 0, ...i);
    }
    case "count": {
      let i = le(Z.count, l);
      return Z.count.function.call(void 0, ...i);
    }
    case "match": {
      let i = le(Z.match, l);
      return Z.match.function.call(void 0, ...i);
    }
    case "search": {
      let i = le(Z.search, l);
      return Z.search.function.call(void 0, ...i);
    }
    case "value": {
      let i = le(Z.value, l);
      return Z.value.function.call(void 0, ...i);
    }
  }
  return R;
}, Is = (e, t, o) => {
  switch (e.type) {
    case "Literal":
      return e.member;
    case "CurrentNode":
      return mt(e, t, [o]);
    case "Root":
      return Ee(e, t);
    case "FunctionExpr":
      return lt(e, t, o);
    default:
      throw new Error(`Unknown argument type "${e.type}"`);
  }
}, ie = (e, t, o) => {
  switch (e.type) {
    case "ComparisonExpr":
      return js(e, t, o);
    case "TestExpr":
      return Ls(e, t, o);
    case "LogicalBinary":
    case "LogicalUnary":
      return Ds(e, t, o);
  }
  return !1;
}, js = (e, t, o) => {
  let l = br(e.left, t, o), i = br(e.right, t, o);
  return Ps(l, i, e.operator);
}, Ps = (e, t, o) => {
  if (e === R || t === R) return As[o](e, t);
  let l = e, i = t;
  if (yr(l) || yr(i)) throw new Error("LogicalType can't be compared");
  return oe(l) && oe(i) ? Fs[o](l, i) : Qe(l) && Qe(i) ? xs[o](l, i) : typeof l == "number" && typeof i == "number" ? Ts[o](l, i) : typeof l == "string" && typeof i == "string" ? ws[o](l, i) : typeof l == "boolean" && typeof i == "boolean" ? vs[o](l, i) : l === null && i === null ? Cs[o](l, i) : o === "!=";
}, mt = (e, t, o) => Zr(e.segments, t, o), br = (e, t, o) => {
  var l;
  switch (e.type) {
    case "Literal":
      return e.member;
    case "CurrentNode": {
      let i = mt(e, t, [o]);
      return i[0] === void 0 ? R : i[0].value;
    }
    case "Root":
      return ((l = Ee(e, t)[0]) == null ? void 0 : l.value) ?? R;
    case "FunctionExpr":
      return lt(e, t, o);
  }
}, Ls = (e, t, o) => Ms(e.query, t, o), Ms = (e, t, o) => {
  switch (e.type) {
    case "FunctionExpr": {
      let l = lt(e, t, o);
      if (l === J.LogicalTrue) return !0;
      if (l === J.LogicalFalse) return !1;
      if (Array.isArray(l)) return l.length > 0;
      throw new Error(`Function ${e.name} result must be compared`);
    }
    case "CurrentNode":
      return mt(e, t, [o]).length > 0;
    case "Root":
      return Ee(e, t).length > 0;
  }
  return !1;
}, Ds = (e, t, o) => {
  switch (e.operator) {
    case "||":
      return Os(e, t, o);
    case "&&":
      return Bs(e, t, o);
    case "!":
      return Rs(e, t, o);
  }
}, Os = (e, t, o) => {
  let l = ie(e.left, t, o), i = ie(e.right, t, o);
  return l || i;
}, Bs = (e, t, o) => {
  let l = ie(e.left, t, o), i = ie(e.right, t, o);
  return l && i;
}, Rs = (e, t, o) => !ie(e.expr, t, o);
function Ee(e, t) {
  return Zr(e.segments, t, [t]);
}
function Zr(e, t, o) {
  return e.reduce((l, i) => l.flatMap((d) => function(h, r, v) {
    return Array.isArray(h) ? h.map((j) => xr(j, r, v)).flat().filter((j) => j !== void 0) : Vr(v).flatMap((j) => h.selectors.flatMap((D) => xr(D, r, j)));
  }(i, t, d)), o);
}
function xr(e, t, o) {
  let l = e.type;
  switch (l) {
    case "WildcardSelector":
      return function(i, d) {
        let h = [], r = d.value;
        if (Array.isArray(r)) for (let v in r) Object.hasOwn(r, v) && h.push(me(d, r[v], Number(v)));
        else if (oe(r)) for (let v in r) Object.hasOwn(r, v) && h.push(ct(d, r[v], v));
        return h;
      }(0, o);
    case "IndexSelector":
      return function(i, d) {
        if (Array.isArray(d.value)) {
          let h = i.index < 0 ? d.value.length + i.index : i.index;
          if (0 <= h && h < d.value.length) {
            let r = d.value.at(h);
            return r === void 0 ? [] : [me(d, r, h)];
          }
          return [];
        }
        return [];
      }(e, o);
    case "SliceSelector":
      return bs(e, o);
    case "MemberNameShorthand":
    case "NameSelector":
      return _s(e, o);
    case "FilterSelector":
      return function(i, d, h) {
        return ut(h.value) ? [] : Ur(h).filter((r) => ie(i.expr, d, r));
      }(e, t, o);
    default:
      return l;
  }
}
function _s(e, t) {
  return oe(t.value) && e.member in t.value ? [ct(t, t.value[e.member], e.member)] : [];
}
function vr(e, t) {
  return Ee(t, it(e, ["$"]));
}
var Ne, Kr, Cr, Hr = (Cr = class {
  constructor(e) {
    lr(this, Ne);
    ur(this, "rootNode");
    let t = (0, ys.parse)(e);
    this.rootNode = t;
  }
  find(e) {
    return vr(e, this.rootNode).filter((t) => t !== void 0).map((t) => t.value);
  }
  paths(e) {
    return this.pathSegments(e).map((t) => ({ value: t.value, path: "$" + t.segments.map((o) => mr(this, Ne, Kr).call(this, o)).join("") }));
  }
  pathSegments(e) {
    return vr(e, this.rootNode).filter((t) => t !== void 0).map((t) => ({ value: t.value, segments: t.path.slice(1) }));
  }
}, Ne = new WeakSet(), Kr = function(e) {
  return typeof e == "string" ? e === "$" ? "$" : `['${((t) => t.replace(/['\\\b\f\n\r\t\u0000-\u001F]/g, (o) => {
    switch (o) {
      case "'":
        return "\\'";
      case "\\":
        return "\\\\";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      default:
        return `\\u${o.charCodeAt(0).toString(16).padStart(4, "0")}`;
    }
  }))(e)}']` : `[${e}]`;
}, Cr);
const Jo = (e, t) => {
  if (!t.scalas) return [];
  const o = new Hr(t.scalas).pathSegments(e);
  return qs(o, t, t.structName);
}, qs = (e, t, o) => e.reduce((l, { segments: i, value: d }) => {
  if (typeof d == "object") return l;
  const h = i[i.length - 1];
  if (typeof h == "number") return l;
  const r = t.objectSchema[h];
  if (!r) return l;
  const v = { value: d, structName: o, param: { name: h, attr: r } };
  return [...l, v];
}, []), Go = (e, t) => t.scalaArrays.map((o) => ((l, i) => {
  const d = new Hr(i.path).find(l);
  if (!Array.isArray(d)) return null;
  const h = i.param.attr;
  return Oa(h) ? { values: d.filter((v) => typeof v == "string"), valueKind: "string", param: { name: i.param.name, attr: h } } : Ba(h) ? {
    values: d.filter((v) => typeof v == "number"),
    valueKind: "number",
    param: { name: i.param.name, attr: h }
  } : null;
})(e, o)).filter((o) => o !== null), Wo = (e) => e.filter((t) => Us(t)).reduce((t, o) => ({
  ...t,
  [o.structName]: o.schema
}), {}), Us = (e) => (e.data.kind === "struct_def" || e.data.kind === "struct_def[]") && !!e.data.struct, Xr = (e, t) => ({ type: "array", items: t, ...q(e), ...U(e.default) }), q = (e) => ({
  ...typeof e.text == "string" ? { title: e.text } : {},
  ...typeof e.desc == "string" ? { description: e.desc } : {}
}), U = (e) => e !== void 0 ? { default: e } : {}, Vs = "x-rpg-param", re = (e, t) => ({ [Vs]: {
  kind: e.kind,
  ...e.parent ? { parent: e.parent } : {},
  data: t
} }), zs = (e) => re(e, {
  ...typeof e.on == "string" ? { on: e.on } : {},
  ...typeof e.off == "string" ? { off: e.off } : {}
}), Fe = (e) => e === void 0 || e === 0, Ar = (e) => re(e, typeof e.decimals == "number" ? { decimals: e.decimals } : {}), Qr = (e) => ({ $ref: `#/definitions/${e.struct}`, ...q(e) }), Yr = (e) => Xr(e, {
  type: "string"
}), en = (e) => Xr(e, { type: "integer" }), tn = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((t) => ({ type: "string", ...q(t), ...U(t.default) }))(e);
    case "file":
    case "combo":
      return ((t) => ({ type: "string", ...U(t.default), ...q(t) }))(e);
    case "select":
      return ((t) => ({ type: "string", ...U(t.default), ...q(t), ...t.options ? { enum: t.options.map((o) => o.value) } : {} }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Yr(e);
    case "number[]":
      return ((t) => ({
        type: "array",
        items: { type: Fe(t.decimals) ? "integer" : "number" },
        ...U(t.default),
        ...q(t)
      }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return en(e);
    case "number":
      return ((t) => ({
        type: Fe(t.decimals) ? "integer" : "number",
        ...U(t.default),
        ...q(t)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((t) => ({ type: "integer", ...U(t.default), ...q(t) }))(e);
    case "boolean":
      return ((t) => ({ type: "boolean", ...U(t.default), ...q(t) }))(e);
    case "struct":
      return Qr(e);
    default:
      return {};
  }
}, Js = (e) => {
  switch (e.kind) {
    case "string":
    case "multiline_string":
      return ((t) => ({ type: "string", ...q(t), ...U(t.default), ...re(t, {}) }))(e);
    case "file":
      return ((t) => ({
        type: "string",
        ...U(t.default),
        ...q(t),
        ...re(t, { dir: t.dir })
      }))(e);
    case "combo":
      return ((t) => ({ type: "string", ...U(t.default), ...q(t), ...re(t, { options: [...t.options] }) }))(e);
    case "select":
      return ((t) => ({ type: "string", ...U(t.default), ...q(t), enum: t.options.map((o) => o.value), ...re(t, { options: t.options.map((o) => ({ value: o.value, option: o.option })) }) }))(e);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Yr(e);
    case "number[]":
      return ((t) => ({ type: "array", items: { type: Fe(t.decimals) ? "integer" : "number" }, ...U(t.default), ...q(t), ...Ar(t) }))(e);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return en(e);
    case "number":
      return ((t) => ({
        type: Fe(t.decimals) ? "integer" : "number",
        ...U(t.default),
        ...q(t),
        ...Ar(t)
      }))(e);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((t) => ({ type: "integer", ...U(t.default), ...q(t), ...re(t, Ra(t.kind)) }))(e);
    case "boolean":
      return ((t) => ({ type: "boolean", ...U(t.default), ...q(t), ...zs(t) }))(e);
    case "struct":
      return Qr(e);
    default:
      return {};
  }
}, Gs = (e) => {
  const t = Object.entries(e).reduce((o, [l, i]) => {
    const d = tn(i);
    return { ...o, [l]: d };
  }, {});
  return {
    type: "object",
    properties: t,
    required: Object.keys(t),
    additionalProperties: !1
  };
}, pt = (e, t, o, l) => {
  const { properties: i, logs: d } = Ws(o, e, l);
  return { schema: {
    type: "object",
    title: t,
    properties: i,
    required: Object.keys(o),
    additionalProperties: !1
  }, logs: d };
}, rn = (e) => e.kind === "struct_def", nn = (e) => e.kind === "struct_def[]", Ws = (e, t, o) => Object.entries(e).reduce((l, i) => ((d, [h, r], v, j) => {
  const D = `${v}.${h}`, I = Zs(D, r, j);
  return { properties: { ...d.properties, [h]: I.schema }, logs: [...d.logs, ...I.logs, {
    structName: (O = r, nn(O) || rn(O) ? O.struct : ""),
    path: D,
    data: r,
    schema: I.schema
  }] };
  var O;
})(l, i, t, o), { properties: {}, logs: [] }), Zs = (e, t, o) => rn(t) ? an(e, t, o) : nn(t) ? Hs(e, t, o) : {
  schema: o.options.kindData ? Js(t) : tn(t),
  logs: []
}, an = (e, t, o) => pt(e, t.struct, t.params, o), Hs = (e, t, o) => {
  const l = an(`${e}[]`, { params: t.params, struct: t.struct }, o);
  return { schema: {
    type: "array",
    ...l.schema ? { items: l.schema } : {},
    ...U(t.default)
  }, logs: l.logs };
}, Zo = (e, { args: t, command: o }, l) => pt(`${e.moduleName}.command.${o}`, o, t, { options: l }), Ho = (e, { params: t, struct: o }, l) => pt(`${e.moduleName}.${o}`, o, t, {
  options: l
}), T = { type: "string", nullable: !0, maxLength: 100 }, K = { type: "string", default: "", nullable: !1 }, we = { type: "number", nullable: !0 }, Ko = () => ({ type: "object", discriminator: {
  propertyName: "kind"
}, oneOf: [Ks, ro, to, no, ao, Xs, Qs, io, so, oo, Ys, eo] }), Ks = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "boolean"
}, default: { type: "boolean", default: !0 }, on: T, off: T, desc: T, text: T, parent: T } }, Xs = { type: "object", required: ["kind", "default"], properties: { decimals: {
  type: "integer",
  minimum: 0,
  default: 0,
  nullable: !0
}, min: we, max: we, default: { type: "number", default: 0 }, kind: { type: "string", const: "number" }, desc: T, text: T, parent: T } }, Qs = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default"],
  properties: { kind: { type: "string", const: "number[]" }, default: { type: "array", items: { type: "number", default: 0 }, default: [] }, decimals: {
    type: "integer",
    minimum: 0,
    default: 0,
    nullable: !0
  }, min: we, max: we, desc: T, text: T, parent: T }
}, Ys = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string"
}, default: K, desc: T, text: T, parent: T } }, eo = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  const: "string[]"
}, default: { type: "array", items: K, default: [] }, desc: T, text: T, parent: T } }, to = { additionalProperties: !1, type: "object", required: ["kind", "default"], properties: { kind: {
  type: "string",
  enum: ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"]
}, default: { type: "integer", default: 0 }, desc: T, text: T, parent: T } }, ro = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "default", "options"],
  properties: { kind: { type: "string", const: "combo" }, default: K, options: {
    type: "array",
    items: { type: "string" },
    default: []
  }, desc: T, text: T, parent: T }
}, no = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: {
  kind: { type: "string", const: "file" },
  default: K,
  dir: K,
  desc: T,
  text: T,
  parent: T
} }, ao = { additionalProperties: !1, type: "object", required: ["kind", "default", "dir"], properties: { kind: { type: "string", const: "file[]" }, default: {
  type: "array",
  items: { type: "string" },
  default: []
}, dir: K, desc: T, text: T, parent: T } }, sn = { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$", minLength: 1, maxLength: 48 }, so = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct" }, default: { type: "object", default: {}, nullable: !0 }, desc: T, text: T, parent: T, struct: sn }
}, oo = {
  additionalProperties: !1,
  type: "object",
  required: ["kind", "struct"],
  properties: { kind: { type: "string", const: "struct[]" }, struct: sn, default: {
    type: "array",
    items: { type: "object" },
    default: [],
    nullable: !0
  }, desc: T, text: T, parent: T }
}, io = { additionalProperties: !1, type: "object", required: ["kind", "default", "options"], properties: {
  kind: { type: "string", const: "select" },
  default: K,
  options: { type: "array", items: { type: "object", properties: { value: K, option: K }, required: ["value", "option"] }, default: [] },
  desc: T,
  text: T,
  parent: T
} }, Xo = (e) => Gs(e);
export {
  _o as buildReferenceItemSources,
  Gs as compileFlatStruct,
  Uo as compileItemEffectDisplayData,
  Zo as compilePluginCommand,
  Ho as compilePluginStruct,
  tn as compilePrimitiveField,
  Js as compilePrimitiveFieldWithXParam,
  pt as compileStructDetail,
  qo as compileTraitDisplayData,
  Wo as defineStructs,
  Go as extractArrayValuesFromJson,
  So as extractBattleEventTexts,
  No as extractCommonEventTexts,
  $o as extractImageFromActor,
  Eo as extractImageFromEnemy,
  qa as extractItemChangeData,
  jr as extractItemCommands,
  po as extractItemFromMap,
  fo as extractItemFromTroop,
  ko as extractMapText,
  cs as extractNoteText,
  Jo as extractScalaValuesFromJson,
  ee as extractTextData,
  Io as extractTextFromActor,
  Oo as extractTextFromArmor,
  Po as extractTextFromClass,
  jo as extractTextFromEnemy,
  wo as extractTextFromEventCommands,
  Mo as extractTextFromItem,
  Lo as extractTextFromSkill,
  Bo as extractTextFromState,
  Ro as extractTextFromSystem,
  Do as extractTextFromWeapon,
  Vo as getPathFromStructParam,
  zo as getPathFromStructSchema,
  Ko as makePluginParamSchema,
  ho as replaceActorText,
  xo as replaceArmorText,
  yo as replaceClassText,
  Co as replaceCommonEventTexts,
  go as replaceEnemyText,
  at as replaceEventCommandTexts,
  xo as replaceItemText,
  To as replaceMapDataTexts,
  ne as replaceNoteTextByMap,
  bo as replaceSkillText,
  vo as replaceStateText,
  Za as replaceSystemTerms,
  Fo as replaceSystemText,
  m as replaceTextByMap,
  za as replaceTextForCommand,
  Ga as replaceTextForCommandActor,
  Wa as replaceTextForCommandShowChoices,
  Ja as replaceTextForCommandShowMessage,
  Ao as replaceTroopTexts,
  xo as replaceWeaponText,
  Xo as structToJSONSchema
};
