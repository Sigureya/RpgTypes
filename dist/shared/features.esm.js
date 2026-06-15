import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as ee } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { Gs as p, Mi as m, Mt as h, Ni as te, Nt as g, Ot as _, Ti as ne, Uo as re, Ws as ie, c as ae, it as oe, ji as se, ki as ce, s as le, u as ue, wi as de, wt as v, zi as fe } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as pe, createPluginParamDictionary as me, extractPluginCommandWithExtractor as he, filterPluginSchemaByFn as ge, filterPluginSchemaStringParams as _e, generatePluginAnnotationText as ve, parseDeepRecord as ye } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as be } from "jsonpath-js";
var xe = (e, t, n, r, i, a) => {
	if (e.code === 357) return Ce(e, t, n, i, a);
	let o = f(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: Se(e)
	};
}, Se = (e) => `code:${e.code}`, Ce = (e, t, n, r, i) => {
	let a = f(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${we(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, we = (e) => `${e.commandName}.${e.argTitle}`, Te = (e, t, n, r) => t.flatMap(((t) => Ee(e, t, n, r))), Ee = (e, t, n, r) => t.commands.filter(Oe).map(((i) => xe(i, t.eventId, e, r, n, [t.name]))), De = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => xe(a, e.eventId, t, n, r, [i])));
})), Oe = (e) => e.value.length > 0, ke = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), Ae = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), je = (e, t, n, r, i) => {
	let a = Array.from(Ne(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(Me);
}, Me = (e) => e !== null && e.key.length > 0, Ne = (e, t, n, r) => {
	let i = Pe(e), a = r.map(Fe), o = Ie(t), s = Le(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, Pe = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), Fe = (e) => de(e, Re), Ie = (e) => ce(e, Re), Le = (e) => m(e, Re), Re = ({ list: e }) => e.filter(ze).map(((e) => e.parameters[1])), ze = (e) => e.code === 320 || e.code === 325 || e.code === 324, y = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Be(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Be = (e) => g(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), Ve = (e) => y(e, [
	"name",
	"nickname",
	"profile"
]), He = (e) => y(e, ["name"]), Ue = (e) => y(e, ["name"]), We = (e) => y(e, [
	"name",
	"description",
	"message1",
	"message2"
]), Ge = (e) => y(e, ["name", "description"]), Ke = (e) => y(e, ["name", "description"]), qe = (e) => y(e, ["name", "description"]), Je = (e) => y(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), Ye = (e, t, n, r) => b(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), b = (e, t, n, r) => e.map(((e) => Xe(e, t, n, r))), Xe = (e, t, n, r) => ({
	main: e.main.filter(((e) => e.value !== "")).map(((e) => {
		let i = f(e.value);
		return {
			kind: n[e.key],
			baseText: i,
			id: e.id,
			dataKey: e.key,
			filename: t,
			uuid: r(i)
		};
	})),
	note: Ze(e.note, t, n, r)
}), Ze = (e, t, n, r) => e.map(((e) => ({
	kind: `${n.note}:${e.key}`,
	baseText: e.value,
	filename: t,
	id: e.id,
	uuid: r(e.value),
	dataKey: "note",
	otherData: [e.key]
}))), Qe = (e, t, n, r) => [
	{
		filename: t,
		id: 0,
		baseText: e.gameTitle,
		uuid: r(e.gameTitle),
		kind: n.gameTitle,
		dataKey: "gameTitle"
	},
	{
		filename: t,
		id: 0,
		baseText: e.currencyUnit,
		uuid: r(e.currencyUnit),
		kind: n.currencyUnit,
		dataKey: "currencyUnit"
	},
	...$e(t, e.equipTypes, "equipTypes", n.equipTypes, r),
	...$e(t, e.weaponTypes, "weaponTypes", n.weaponTypes, r),
	...$e(t, e.armorTypes, "armorTypes", n.armorTypes, r)
], $e = (e, t, n, r, i) => t.filter(((e) => e.length > 0)).map(((t, a) => {
	let o = f(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), et = (e, t) => {
	let n = x(e.actors, Ve), r = it(e.armors), i = x(e.classes, Ue), a = x(e.enemies, He), o = x(e.items, Ge), s = x(e.mapInfos, ((e) => e)), c = x(e.skills, We), l = x(e.states, Je), u = x(e.weapons, Ke), d = at(e.commonEvents, t), ee = ot(e.troops, t), f = st(e.mapFiles, t), p = tt(e.system), m = nt([
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		ee,
		d
	]).concat(rt(e.mapFiles, e.system));
	return {
		value: {
			eventData: {
				commonEvents: d.data,
				troops: ee.data.flat()
			},
			mapFiles: f,
			system: p,
			mainData: {
				actors: n.data,
				armors: r.data,
				classes: i.data,
				enemies: a.data,
				items: o.data,
				skills: c.data,
				states: l.data,
				weapons: u.data
			}
		},
		errors: m
	};
}, tt = (e) => e.system === null ? {
	message: e.message,
	system: null
} : {
	message: e.message,
	system: le(e.system)
}, x = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), nt = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), rt = (e, t) => [
	...!1 === e.info.success ? [{
		fileName: e.info.filename,
		error: e.info.message
	}] : [],
	...e.invalidMaps.map(((e) => ({
		fileName: e.filename,
		error: e.message
	}))),
	...t.system === null ? [{
		fileName: l,
		error: t.message
	}] : []
], it = (e) => x(e, qe), at = (e, t) => x(e, ((e) => t.extractCommonEventText(e))), ot = (e, t) => x(e, ((e) => t.extractBattleText(e))), st = (e, t) => {
	let n = e.validMaps.map(((e) => ({
		editingName: e.editingName,
		filename: e.filename,
		map: t.extractMapTexts(e.map)
	})));
	return {
		info: e.info,
		invalidMaps: e.invalidMaps,
		validMaps: n
	};
}, ct = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, lt = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, ut = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, S = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, dt = (e, t) => {
	let n = ft(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: mt(ht(n, t)),
		values: n.map(pt)
	})));
}, ft = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, pt = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), mt = (e) => [
	e.isBoolean ? "boolean" : null,
	e.isNumber ? "number" : null,
	e.isBgm ? "bgm" : null,
	e.isBgs ? "bgs" : null,
	e.isMe ? "me" : null,
	e.isSe ? "se" : null,
	e.isPicture ? "pictures" : null,
	e.isCharacter ? "characters" : null,
	e.isFaceset ? "faces" : null,
	e.isBattler ? "battlers" : null,
	e.isSvBattler ? "svBattlers" : null,
	e.isEnemy ? "enemies" : null,
	e.isTileset ? "tilesets" : null,
	e.isMovie ? "movies" : null,
	e.isScript ? "script" : null
].filter(((e) => e !== null)), ht = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
	isBoolean: e.isBoolean && lt(i.value),
	isNumber: e.isNumber && ut(i.value),
	isBgm: e.isBgm && t.bgm.has(i.value),
	isBgs: e.isBgs && t.bgs.has(i.value),
	isMe: e.isMe && t.me.has(i.value),
	isSe: e.isSe && t.se.has(i.value),
	isPicture: e.isPicture && n.picutures.has(i.value),
	isCharacter: e.isCharacter && n.characters.has(i.value),
	isFaceset: e.isFaceset && n.faces.has(i.value),
	isBattler: e.isBattler && n.svEnemy.has(i.value),
	isSvBattler: e.isSvBattler && n.svActors.has(i.value),
	isEnemy: e.isEnemy && n.enemies.has(i.value),
	isTileset: e.isTileset && n.tilesets.has(i.value),
	isMovie: e.isMovie && r.movies.has(i.value),
	isScript: e.isScript && oe(i.value)
})), {
	isBoolean: !0,
	isNumber: !0,
	isBgm: !0,
	isBgs: !0,
	isMe: !0,
	isSe: !0,
	isBattler: !0,
	isCharacter: !0,
	isFaceset: !0,
	isSvBattler: !0,
	isEnemy: !0,
	isPicture: !0,
	isTileset: !0,
	isMovie: !0,
	isScript: !0
}), gt = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(vt), ...e.map.events.map(_t).flat()]
}), _t = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), vt = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), yt = (e, t) => ({
	eventId: e.eventId,
	name: e.name,
	pageIndex: e.pageIndex,
	commands: e.commands,
	note: e.note,
	noteItems: e.noteItems.filter(t)
}), C = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(bt), bt = (e) => e.note.length > 0 || e.main.length > 0, w = (e, t) => {
	let n = Ot(e.value.mainData, t), r = kt(e.value.mapFiles.validMaps, t);
	return {
		nonTextNoteKeys: n.nonTextNoteKeys,
		dataNoteSummary: n.noteSummary,
		mapNoteSummary: r.noteSummary,
		data: {
			errors: e.errors,
			value: {
				mainData: n.mainData,
				mapFiles: {
					info: e.value.mapFiles.info,
					invalidMaps: e.value.mapFiles.invalidMaps,
					validMaps: r.validMaps
				},
				eventData: e.value.eventData,
				system: e.value.system
			}
		}
	};
}, xt = (e, t) => {
	let n = (e) => t.has(e.key);
	return {
		actors: C(e.actors, n),
		enemies: C(e.enemies, n),
		weapons: C(e.weapons, n),
		armors: C(e.armors, n),
		skills: C(e.skills, n),
		states: C(e.states, n),
		items: C(e.items, n),
		classes: C(e.classes, n)
	};
}, St = (e, t) => Tt(e, S(E(e, t))), Ct = (e, t) => S(Et(e, t)), wt = (e, t) => xt(e, Ct(e, t)), Tt = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => yt(e, r)))
		})
	};
	var n, r;
})), Et = (e, t) => dt(Dt(e), t), Dt = (n) => [
	T(t, n.actors),
	T(a, n.skills),
	T(o, n.items),
	T(u, n.weapons),
	T(r, n.armors),
	T(i, n.classes),
	T(s, n.states),
	T(e, n.enemies)
], T = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), E = (e, t) => dt(e.map(gt), t), Ot = (e, t) => {
	let n = Et(e, t), r = S(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: xt(e, r)
	};
}, kt = (e, t) => {
	let n = E(e, t);
	return {
		noteSummary: n,
		validMaps: Tt(e, S(n))
	};
}, At = (e, t) => e.params.filter(jt).map(((n) => Nt(e.pluginName, n, t))).filter(((e) => e !== void 0)), D = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && oe(e)), jt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Mt(e) && !!D(e.value), Mt = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", Nt = (e, t, n) => {
	let r = f(t.value);
	if (r.length !== 0) return {
		filename: e,
		id: 0,
		uuid: n(r),
		baseText: r,
		kind: t.param.attr.text || t.param.name,
		dataKey: t.param.name,
		otherData: [
			t.rootName,
			t.param.attr.kind,
			t.param.attr.desc || ""
		]
	};
}, Pt = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Ft = (e) => {
	let t = pe(e);
	return { extractArgs(e, n) {
		let r = he(e, t, n);
		return r.args.map(((e) => Pt(r, e)));
	} };
}, It = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Lt = (e) => {
	let t = e.filter(Rt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Rt = (e) => e.code === 401 && !!e.speaker && !fe(e.speaker), zt = (e, t, n, r, i, a, o) => {
	let s = w(et(e.data, o), e);
	return Ht(e.data.actors.data, t, s, n, r, i, a);
}, Bt = zt, Vt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Ht = (c, l, d, f, p, m, h) => {
	let { eventData: g, mainData: _, mapFiles: ne, system: re } = d.data.value;
	return {
		speakers: (ie = d.data.value, ae = m, Lt(It(ie)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: ae(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Vt(d),
		pluginParams: l.flatMap(((e) => At(e, m))),
		map: Ut(ne, m, h),
		commonEvents: Te(ee, g.commonEvents, m, h),
		troops: De(g.troops, n, h, m),
		armors: b(_.armors, r, p, m),
		system: Gt(re, m, f),
		actors: {
			texts: b(_.actors, t, p, m),
			controlChars: te(c)
		},
		classes: b(_.classes, i, p, m),
		enemies: b(_.enemies, e, p, m),
		items: b(_.items, o, p, m),
		skills: b(_.skills, a, p, m),
		states: Ye(_.states, s, p, m),
		weapons: b(_.weapons, u, p, m)
	};
	var ie, ae;
}, Ut = (e, t, n) => e.validMaps.map(((e) => Wt(e, t, n))).flat(3), Wt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = ct(e);
	return [e.noteItems.map(((r) => ({
		id: e.eventId,
		filename: t.filename,
		baseText: r.value,
		kind: `note:${r.key}`,
		uuid: n(r.value),
		dataKey: "note",
		otherData: [
			t.editingName,
			a,
			r.key
		]
	}))), e.commands.filter(Oe).map(((o) => xe(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Gt = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: Qe(e.system, l, n, t)
} : {
	gameTitle: "",
	filename: l,
	texts: []
}, Kt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: qt(i, a),
		actorTexts: je(e, t, n, r, o)
	};
}, qt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Jt = (e) => {
	let t = S(e);
	return Array.from(t);
}, O = "HonyakuEx", Yt = (e, t = {
	description: "書き換え用辞書データ",
	outputDirectory: "translation",
	dictionaryName: "TranslationDictionary",
	pluginSnapshotName: "pluginSnapshot"
}) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: Zt(e)
}), Xt = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), Zt = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		en("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		Xt(O, "Setup", t),
		Xt(O, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, Qt = (e) => [
	en("プラグインコマンド書き換えプラグイン"),
	"(function(){",
	"\"use strict\";",
	"const data = ",
	`${JSON.stringify(e)};`,
	"PluginManager.callCommand(null,",
	`"${O}",`,
	"\"ReadPlugins\",",
	"data",
	");",
	"})()"
].join("\n"), $t = (e) => [
	{
		name: `${e.outputDirectory}/${O}`,
		description: e.description,
		status: !0,
		parameters: {}
	},
	{
		name: `${e.outputDirectory}/${e.dictionaryName}`,
		description: e.description,
		status: !0,
		parameters: {}
	},
	{
		name: `${e.outputDirectory}/${e.pluginSnapshotName}`,
		description: e.description,
		status: !0,
		parameters: {}
	}
], en = (e) => ve({
	pluginName: "",
	locale: "",
	target: "MZ",
	dependencies: {
		base: [O],
		orderAfter: [O],
		orderBefore: []
	},
	schema: {
		commands: [],
		params: [],
		structs: []
	},
	meta: { plugindesc: e }
}, {
	structArray: (e) => JSON.stringify(e),
	struct: (e) => JSON.stringify(e),
	numberArray: (e) => JSON.stringify(e),
	stringArray: (e) => JSON.stringify(e)
}), tn = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, nn = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), rn = (e) => [{
	data: e,
	filename: c
}], an = (e) => sn(on(e)), on = (e) => e.reduce(((e, t) => {
	let n = cn(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), sn = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), cn = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), ln = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, un = (e) => {
	let t = [
		k(e.actors.texts),
		k(e.skills),
		k(e.items),
		k(e.weapons),
		k(e.armors),
		k(e.classes),
		k(e.states),
		k(e.enemies)
	];
	return [
		...e.system.texts,
		...t.flat(3),
		...e.speakers,
		...e.commonEvents,
		...e.map,
		...e.troops,
		...e.pluginParams
	];
}, k = (e) => e.map(((e) => [e.main, e.note])), dn = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => pn(e, t, n))), fn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, pn = (e, t, n) => {
	let r = p(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: fn[e.code],
		dataId: ie(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, mn = (e, t, n) => de(e.map, ((e, r, i) => ({
	...hn(e),
	commands: dn(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), hn = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, gn = (e, t, n) => ne(e, ((e, r, i) => ({
	commands: dn(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), _n = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, A = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, j = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, M = (e, t) => {
	let n = (e) => t.replaceText(e), r = v(e.note, t), i = A(e.name, n), a = A(e.nickname, n), o = A(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, N = (e, t) => {
	let n = v(e.note, t), r = j(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, P = (e, t) => {
	let n = v(e.note, t), r = j(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, F = (e, t) => {
	let n = v(e.note, t), r = j(e.name, t), i = j(e.description, t), a = j(e.message1, t), o = j(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, I = (e, t) => {
	let n = v(e.note, t), r = j(e.name, t), i = j(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, L = (e, t) => {
	let n = v(e.note, t), r = j(e.name, t), i = j(e.message1, t), a = j(e.message2, t), o = j(e.message3, t), s = j(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, vn = (e, t) => {
	switch (e.code) {
		case 101: return bn(e, t);
		case 102: return Sn(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return yn(e, t);
		case 320:
		case 324:
		case 325: return xn(e, t);
		default: return e;
	}
}, yn = (e, t) => {
	let n = A(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, bn = (e, t) => {
	let n = e.parameters[4] ? A(e.parameters[4], t) : "";
	return re({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, xn = (e, t) => {
	let n = A(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, Sn = (e, t) => {
	let n = e.parameters[0].map(((e) => A(e, t)));
	return {
		code: 102,
		indent: e.indent,
		parameters: [
			n,
			e.parameters[1],
			e.parameters[2],
			e.parameters[3],
			e.parameters[4]
		]
	};
}, Cn = (e, t, n = "\n") => wn(e, ((e) => t.get(e)), n), wn = (e, t, n = "\n") => _(e.note, ((e) => A(e.value, t)), n), Tn = (e, t) => En(e, ((e) => _n(e, t))), En = (e, t) => ({
	params: kn(e.params, ((e) => A(e, t))),
	messages: ae(e.messages, ((e) => A(e, t))),
	basic: Dn(e.basic, ((e) => A(e, t))),
	commands: On(e.commands, ((e) => A(e, t)))
}), Dn = (e, t) => [
	t(e[0]),
	t(e[1]),
	t(e[2]),
	t(e[3]),
	t(e[4]),
	t(e[5]),
	t(e[6]),
	t(e[7]),
	t(e[8]),
	t(e[9])
], On = (e, t) => [
	t(e[0]),
	t(e[1]),
	t(e[2]),
	t(e[3]),
	t(e[4]),
	t(e[5]),
	t(e[6]),
	t(e[7]),
	t(e[8]),
	t(e[9]),
	t(e[10]),
	t(e[11]),
	t(e[12]),
	t(e[13]),
	t(e[14]),
	t(e[15]),
	t(e[16]),
	t(e[17]),
	t(e[18]),
	t(e[19]),
	"",
	t(e[21]),
	t(e[22]),
	"",
	t(e[24]),
	t(e[25])
], kn = (e, t) => [
	t(e[0]),
	t(e[1]),
	t(e[2]),
	t(e[3]),
	t(e[4]),
	t(e[5]),
	t(e[6]),
	t(e[7]),
	t(e[8]),
	t(e[9])
], An = (e, t) => ({
	...e,
	gameTitle: A(e.gameTitle, t),
	currencyUnit: A(e.currencyUnit, t),
	elements: R(e.elements, t),
	skillTypes: R(e.skillTypes, t),
	weaponTypes: R(e.weaponTypes, t),
	armorTypes: R(e.armorTypes, t),
	equipTypes: R(e.equipTypes, t),
	terms: En(e.terms, t)
}), R = (e, t) => e.map(((e) => A(e, t))), jn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Mn = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return jn(this.joinCommandBodies());
	}
	mergedBody() {
		return {
			code: this.header.code,
			indent: this.header.indent,
			parameters: [this.getBodyText()]
		};
	}
	joinCommandBodies() {
		return [this.header, ...this.bodies];
	}
	normalizedCommands() {
		return [this.mergedBody()];
	}
}, z = class {
	bodyCode;
	header;
	bodies;
	constructor(e, t, n) {
		this.bodyCode = e, this.header = t, this.bodies = n;
	}
	normalizedCommands() {
		let e = {
			...this.header,
			code: this.header.code,
			indent: this.header.indent,
			parameters: [...this.header.parameters]
		};
		return this.bodies.length === 0 ? [e] : [e, this.mergedBody()];
	}
	getBodyText() {
		return jn(this.bodies);
	}
	joinCommandBodies() {
		return this.bodies;
	}
	mergedBody() {
		return {
			code: this.bodyCode,
			indent: this.header.indent,
			parameters: [this.getBodyText()]
		};
	}
}, B = (e, t, n, r) => {
	let i = e[t];
	if (!n(i)) throw Error(`Invalid head at index ${t}: ${JSON.stringify(i)}`);
	let a = [];
	for (let n = t + 1; n < e.length; n++) {
		let t = e[n];
		if (!r(t)) break;
		a.push(t);
	}
	return {
		header: i,
		bodies: a
	};
}, Nn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => B(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return Pn(r) ? new z(408, r, n) : new Mn(r, n);
}, Pn = (e) => e.parameters[0] === "選択肢ヘルプ", Fn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => B(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new z(401, r, n);
}, In = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => B(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Mn(r, n);
}, Ln = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => B(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new z(405, r, n);
}, Rn = {
	101: (e, t, n) => n.showMessage(Fn(e, t), t, e),
	355: (e, t, n) => n.script(In(e, t), t, e),
	108: (e, t, n) => n.comment(Nn(e, t), t, e),
	105: (e, t, n) => n.showScrollingText(Ln(e, t), t, e)
}, zn = (e) => Rn[e], Bn = (e, t, n, r) => {
	if (e.code === 401 || e.code === 405 || e.code === 408) return;
	let i = zn(e.code);
	return i ? i(n, t, r) : e.code === 102 ? Vn(e) : e.code === 320 || e.code === 324 || e.code === 325 ? Hn(e) : e.code === 655 ? void 0 : e;
}, Vn = (e) => ({
	code: 102,
	indent: e.indent,
	parameters: [
		e.parameters[0].map(((e) => e.trimEnd())),
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Hn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), Un = (e) => ({
	code: 355,
	indent: e.header.indent,
	parameters: [e.getBodyText().trimEnd()]
}), Wn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 401,
		indent: e.header.indent,
		parameters: [t]
	};
	return [Kn(e.header), n];
}, Gn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 405,
		indent: e.header.indent,
		parameters: [t]
	};
	return [e.header, n];
}, Kn = (e) => {
	let t = e.parameters[4] ? e.parameters[4].trimEnd() : "";
	return {
		code: e.code,
		indent: e.indent,
		parameters: [
			e.parameters[0],
			e.parameters[1],
			e.parameters[2],
			e.parameters[3],
			t
		]
	};
}, V = (e, t) => {
	let n = (e) => t.replaceText(e);
	return ((e) => {
		let t = {
			comment: (e) => e.normalizedCommands(),
			script: Un,
			showMessage: Wn,
			showScrollingText: Gn
		};
		return e.map(((n, r) => n.code === 357 ? n : Bn(n, r, e, t))).filter(((e) => e !== void 0)).flat();
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : vn(e, n)));
}, H = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: V(e.list, t)
	})))
}), U = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: V(e.list, t)
}), qn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: V(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), Jn = (e, t) => Yn(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), W = (e, t) => Yn(e, t), Yn = (e, t) => ({
	note: v(e.note, t),
	displayName: j(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: v(e.note, t),
		pages: e.pages.map(((e) => ({
			...e,
			list: V(e.list, t)
		})))
	}))(e, t) : null)),
	data: e.data,
	tilesetId: e.tilesetId,
	encounterStep: e.encounterStep,
	scrollType: e.scrollType,
	specifyBattleback: e.specifyBattleback,
	autoplayBgm: e.autoplayBgm,
	autoplayBgs: e.autoplayBgs,
	battleback1Name: e.battleback1Name,
	battleback2Name: e.battleback2Name,
	bgm: e.bgm,
	bgs: e.bgs,
	disableDashing: e.disableDashing,
	encounterList: e.encounterList,
	height: e.height,
	width: e.width,
	parallaxLoopX: e.parallaxLoopX,
	parallaxLoopY: e.parallaxLoopY,
	parallaxName: e.parallaxName,
	parallaxShow: e.parallaxShow,
	parallaxSx: e.parallaxSx,
	parallaxSy: e.parallaxSy
}), G = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, Xn = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => G(e, t)))
}), Zn = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? Xn(e, t) : null))
}), Qn = (e, t) => e.map(((e) => G(e, t))), $n = (e, t) => e.map(((e) => Xn(e, t))), er = (e) => tr(e, (() => [])), K = (e, t) => tr(e, t), tr = (e, t) => e.flatMap(((n, r) => nr(n, r, e, t))).filter(((e) => e !== null)), nr = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return Ae(e);
	let i = zn(e.code);
	if (i) {
		let e = i(n, t, rr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? ke(e) : null;
}, rr = {
	comment: (e) => ({
		code: 108,
		paramIndex: 0,
		value: e.getBodyText()
	}),
	showMessage: (e) => {
		return {
			code: 401,
			paramIndex: 0,
			value: (t = e).getBodyText(),
			speaker: (n = t.header, n.parameters[4] ? n.parameters[4].trimEnd() : "")
		};
		var t, n;
	},
	showScrollingText: (e) => ((e) => ({
		code: 405,
		paramIndex: 0,
		value: e.getBodyText()
	}))(e),
	script: (e) => {
		let t = ((e) => ({
			code: 355,
			paramIndex: 0,
			value: e.getBodyText()
		}))(e);
		if (/["`']/.test(t.value)) return t;
	}
}, ir = (e) => e.list.filter(or), ar = (e) => e.pages.flatMap(((e) => e.list.filter(or))), or = (e) => e.code === 357, sr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: K(e.list, t)
}), cr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: K(n.list, t)
}))), lr = (e, t = () => []) => ({
	note: e.note,
	noteItems: h(e.note),
	displayedName: e.displayName,
	events: ur(e, t)
}), ur = (e, t) => de(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: K(e.list, t),
	note: r.note,
	noteItems: h(r.note),
	name: r.name
}))), q = (e, t) => `${e}:${t}`, dr = (e) => q(e.parameters[0], e.parameters[1]), fr = (e) => [
	...e.commonEvents.data.flatMap(ir),
	...e.troops.data.flatMap(ar),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => se(e, ((e) => e.list.filter(or))))(e.map).flat(2)))
], pr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = dr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, J = (e, t) => D(e.default), mr = (e, t, n = J) => {
	switch (e.kind) {
		case "string":
		case "multiline_string":
		case "string[]":
		case "multiline_string[]":
		case "combo":
		case "struct":
		case "struct[]": return !0;
		case "any": return n(e, t);
		default: return !1;
	}
}, hr = (e, t = J) => ge(_e(e), ((e, n) => mr(e, n, t))), gr = (e, t, n = J) => me(e, hr(t, n)), _r = (e, t = J) => e.map(((e) => gr(e.pluginName, e.schema, t))), vr = (e, t = J) => _r(e, t), yr = (e, t, n = J) => {
	let r = vr(t, n), i = br(e);
	return r.flatMap(((e) => e.commands.map(((t) => {
		let n = q(e.pluginName, t.commandName);
		return {
			key: n,
			pluginName: e.pluginName,
			commandName: t.commandName,
			argsPath: t.argsPath,
			commands: i.get(n) ?? []
		};
	})))).filter(((e) => e.commands.length > 0));
}, br = (e) => pr(fr(e)), xr = (e, t, n = J) => {
	let r = vr(t, n), i = br(e);
	return {
		params: r,
		commandPaths: r.flatMap(((e) => e.commands.map(((t) => {
			let n = q(e.pluginName, t.commandName);
			return {
				key: n,
				pluginName: e.pluginName,
				commandName: t.commandName,
				argsPath: t.argsPath,
				commands: i.get(n) ?? []
			};
		})))).filter(((e) => e.commands.length > 0)),
		groupedCommands: i
	};
}, Sr = (e) => e.kind.endsWith("[]"), Cr = (e) => Sr(e.attr), wr = (e) => e.kind === "struct", Tr = (e) => e.attr.kind === "struct[]", Er = (e) => Or[e.kind.replace("[]", "")].type === "number", Dr = (e) => Or[e.kind.replace("[]", "")].type === "string", Y = {
	type: "string",
	hasText: !0
}, X = {
	type: "number",
	hasText: !1
}, Z = {
	type: "number",
	hasText: !1
}, Or = {
	string: Y,
	number: {
		type: "number",
		hasText: !1
	},
	boolean: { type: "boolean" },
	armor: X,
	actor: X,
	class: X,
	enemy: X,
	skill: X,
	state: X,
	item: X,
	weapon: X,
	common_event: X,
	switch: X,
	variable: X,
	troop: X,
	multiline_string: Y,
	file: {
		type: "string",
		hasText: !1
	},
	"file[]": {
		type: "string",
		hasText: !1
	},
	"multiline_string[]": Y,
	"string[]": Y,
	combo: Y,
	select: Y,
	any: Y,
	struct: { type: "struct" },
	"actor[]": Z,
	"enemy[]": Z,
	"class[]": Z,
	"skill[]": Z,
	"state[]": Z,
	"item[]": Z,
	"weapon[]": Z,
	"common_event[]": Z,
	"troop[]": Z,
	"armor[]": Z,
	"switch[]": Z,
	"variable[]": Z,
	"number[]": Z
};
function kr(e) {
	return Ar(e, ((e) => !0), ((e) => !0));
}
var Ar = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (wr(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (Tr(e)) i.push(e);
		else if (Cr(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function jr(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var Mr = (e) => new Map(e.map(((e) => [e.struct, kr(e.params)]))), Nr = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Pr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Fr = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Ir(e, t, n, r) {
	let i = {
		items: [],
		errs: [],
		frames: [{
			schemaName: e,
			basePath: t,
			ancestry: []
		}]
	}, a = Math.max(1, 3 * n.size + 5), o = Array.from({ length: a }).reduce(((e) => e.frames.length === 0 ? e : function(e, t, n) {
		if (e.frames.length === 0) return e;
		let r = e.frames[e.frames.length - 1], i = e.frames.slice(0, -1);
		if (r.ancestry.includes(r.schemaName)) return {
			frames: i,
			items: e.items,
			errs: [...e.errs, {
				code: n.cyclicStruct,
				path: r.basePath
			}]
		};
		let a = t.get(r.schemaName);
		if (!a) return {
			frames: i,
			items: e.items,
			errs: [...e.errs, {
				code: n.undefinedStruct,
				path: r.basePath
			}]
		};
		let o = function(e, t) {
			let n = e.ancestry.concat(e.schemaName), r = e.basePath;
			return [...t.structs.map(((e) => ({
				schemaName: e.attr.struct,
				basePath: `${r}["${e.name}"]`,
				ancestry: n
			}))), ...t.structArrays.map(((e) => ({
				schemaName: e.attr.struct,
				basePath: `${r}["${e.name}"][*]`,
				ancestry: n
			})))].reverse();
		}(r, a);
		if (a.scalars.length > 0 || a.scalarArrays.length > 0) {
			let t = function(e, { path: t, structName: n }) {
				return {
					category: "struct",
					objectSchema: jr(e.scalars),
					name: n,
					scalarArrays: Pr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Nr(e.scalars, t) : void 0
				};
			}(a, {
				path: r.basePath,
				structName: r.schemaName
			});
			return i.push(...o), {
				frames: i,
				items: [...e.items, t],
				errs: e.errs
			};
		}
		return i.push(...o), {
			frames: i,
			items: e.items,
			errs: e.errs
		};
	}(e, n, r)), i);
	return {
		items: o.items,
		errors: o.errs
	};
}
var Lr = (e, t, n, r = Fr) => Ir(e.attr.struct, `${t}["${e.name}"]`, n, r), Rr = (e, t, n, r = Fr) => Ir(e.attr.struct, `${t}["${e.name}"][*]`, n, r), zr = (e, t, n, r) => ((e) => wr(e.attr))(n) ? Hr(e, n, r) : Tr(n) ? Ur(e, n, r) : Cr(n) ? Br(e, t, n) : Vr(e, t, n), Br = (e, t, n) => ({
	rootCategory: e,
	rootName: t,
	scalars: {
		name: "",
		objectSchema: {},
		scalarsPath: void 0,
		scalarArrays: [{
			path: `$["${n.name}"][*]`,
			param: n
		}]
	},
	structs: {
		items: [],
		errors: []
	},
	structArrays: {
		items: [],
		errors: []
	}
}), Vr = (e, t, n) => ({
	rootCategory: e,
	rootName: t,
	scalars: {
		name: n.attr.kind,
		objectSchema: { [n.name]: n.attr },
		scalarsPath: `$["${n.name}"]`,
		scalarArrays: []
	},
	structArrays: {
		items: [],
		errors: []
	},
	structs: {
		items: [],
		errors: []
	}
}), Hr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Lr(t, "$", n)
}), Ur = (e, t, n) => ({
	structArrays: Rr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Wr = (e, t) => t.map(((t) => Gr(e, t))).flat(3), Gr = (e, t) => [
	t.top ? Q(t, e, t.top, "") : [],
	t.structs.map(((n) => Q(t, e, n))),
	t.structArrays.map(((n) => Q(t, e, n)))
], Q = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
	if (typeof n == "object" || n === null) return null;
	let a = r[r.length - 1];
	if (typeof a == "number") return null;
	let o = i[a];
	return o ? {
		rootName: e.rootName,
		rootType: e.rootCategory,
		structName: t,
		value: n,
		param: {
			name: a,
			attr: o
		}
	} : null;
})(e, t, n, r, i))).filter(((e) => e !== null)))(e, r, t, n.scalar.jsonPathJS, n.scalar.record) : [], n.arrays.map(((n) => ((e, t, n, r) => {
	let i = r.jsonPathJS.find(n);
	if (!Array.isArray(i)) return [];
	let a = r.schema.attr;
	return Dr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : Er(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), Kr = (e, t) => {
	let n = qr(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, qr = (e, t) => {
	let n = [], r = e.scalars ? Jr(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => Jr(e, "struct", t, n))), a = e.structArrays.items.map(((e) => Jr(e, "structArray", t, n)));
	return {
		extractor: {
			rootCategory: e.rootCategory,
			rootName: e.rootName,
			top: r,
			structs: i,
			structArrays: a
		},
		errors: n
	};
}, Jr = (e, t, n, r) => {
	let i = Yr(e.scalarArrays, e.name, t, n, r);
	return e.scalarsPath ? {
		bundleName: e.name,
		arrays: i,
		scalar: Xr(e.scalarsPath, e.objectSchema, t, n, r)
	} : {
		bundleName: e.name,
		arrays: i
	};
}, Yr = (e, t, n, r, i) => e.flatMap(((e) => {
	try {
		return [{
			jsonPathJS: r.createReader(e.path),
			schema: e.param,
			parentType: t
		}];
	} catch (t) {
		return i.push({
			path: e.path,
			valType: n,
			error: t,
			handledInfo: r.errorAtPath(e.path, n, t)
		}), [];
	}
})), Xr = (e, t, n, r, i) => {
	try {
		return {
			jsonPathJS: r.createReader(e),
			record: t
		};
	} catch (t) {
		i.push({
			path: e,
			valType: n,
			error: t,
			handledInfo: r.errorAtPath(e, n, t)
		});
		return;
	}
}, Zr = (e, t, n, r) => ({
	pluginName: e,
	commandName: t.command,
	desc: t.desc ?? "",
	text: t.text ?? "",
	extractors: Qr(t, n, r)
}), Qr = (e, t, n) => e.args.map(((r) => Kr(zr("args", e.command, r, t), n))), $r = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Wr(e, t.extractors)
}), ei = (e, t) => {
	let n = Mr(e.schema.structs);
	return ti(e.pluginName, e.schema.commands, n, t);
}, ti = (e, t, n, r) => t.map(((t) => [ni(e, t.command), Zr(e, t, n, r)])), ni = (e, t) => `${e}:${t}`, ri = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? $r(ye(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, ii = (e) => new si(new Map(e)), ai = () => new si(/* @__PURE__ */ new Map()), oi = (e) => {
	let t = e.flatMap(((e) => ei(e, ((e) => new be(e)))));
	return new si(new Map(t));
}, si = class {
	_commandMap;
	constructor(e) {
		this._commandMap = e;
	}
	pluginCommandKeys() {
		return Array.from(this._commandMap.keys());
	}
	extractMapTexts(e) {
		return lr(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return cr(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return sr(e, ((e) => this.extractArgs(e)));
	}
	extractArgs(e) {
		let t = ri(e, this._commandMap);
		return t.args.filter(ci).map(((e) => ({
			code: 357,
			value: e.value,
			paramIndex: 3,
			argName: e.param.name,
			argTitle: e.param.attr.text ?? e.param.name,
			commandName: t.commandName,
			pluginName: t.pluginName
		})));
	}
	extractCommandTexts(e) {
		return K(e, ((e) => this.extractArgs(e)));
	}
}, ci = (e) => typeof e.value == "string", li = (e) => ({
	key: "battlerName",
	image: e.battlerName,
	id: e.id
}), ui = (e, t, n) => ({
	folder: n,
	key: t,
	image: e[t],
	id: e.id
}), di = (e) => [
	ui(e, "faceName", "faces"),
	ui(e, "characterName", "characters"),
	ui(e, "battlerName", "sv_actors")
], fi = (e, t, n) => ({
	tilesets: e.tilesets,
	animations: e.animations,
	actors: $(e.actors, ((e) => M(e, t))),
	armors: $(e.armors, ((e) => I(e, t))),
	classes: $(e.classes, ((e) => P(e, t))),
	commonEvents: $(e.commonEvents, ((e) => U(e, t))),
	enemies: $(e.enemies, ((e) => N(e, t))),
	items: $(e.items, ((e) => I(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => F(e, t))),
	states: $(e.states, ((e) => L(e, t))),
	system: {
		message: e.system.message,
		system: An(e.system.system, n)
	},
	troops: $(e.troops, ((e) => H(e, t))),
	weapons: $(e.weapons, ((e) => I(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: W(e.map, t)
		})))
	}
}), $ = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), pi = (e, t, n, r, i) => {
	let a = w(et(e, n), {
		audioFiles: t.audioFiles,
		imageFiles: t.imageFiles,
		otherFiles: t.otherFiles
	});
	return {
		data: fi(e, mi(a.nonTextNoteKeys, r), i),
		note: a
	};
}, mi = (e, t) => ({
	pluginCommand: (e) => t.pluginCommand(e),
	scriptCommand: (e) => t.scriptCommand(e),
	replaceText: (e) => t.replaceText(e),
	isReplaceTargetNote: (n) => !!e.has(n.key) && t.isReplaceTargetNote(n)
}), hi = (e, t) => W(e, {
	replaceText: (e) => t.textDictionary.get(e),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), gi = (e, t) => {
	let n = {
		replaceText: (e) => t.textDictionary.get(e),
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
	};
	return {
		actors: e.actors.map(((e) => M(e, n))),
		armors: e.armors.map(((e) => I(e, n))),
		classes: e.classes.map(((e) => P(e, n))),
		enemies: e.enemies.map(((e) => N(e, n))),
		items: e.items.map(((e) => I(e, n))),
		skills: e.skills.map(((e) => F(e, n))),
		states: e.states.map(((e) => L(e, n))),
		troops: e.troops.map(((e) => H(e, n))),
		weapons: e.weapons.map(((e) => I(e, n))),
		commonEvents: e.commonEvents.map(((e) => U(e, n)))
	};
}, _i = (e, t) => d(vi(e, t)), vi = (e, t) => pi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}, ((t) => e.dictionary.get(t))).data, yi = (e, t, n) => {
	let r = xi(e, t, n);
	return {
		dataJSON: d(r.main),
		scriptJS: [Yt(r.aux)]
	};
}, bi = (e, t, n) => {
	let r = xi(e, t, n);
	return [...d(r.main), ...rn(r.aux)];
}, xi = (e, t, n) => {
	let { data: r, assetBundle: i, dictionary: a, textKeys: o } = e, s = pi(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => o.has(e.key)
	}, ((e) => e.trimEnd())), c = Kt(r.actors.data, r.commonEvents.data, r.troops.data, r.mapFiles.validMaps.map(((e) => e.map)), a, ((e) => n(e.trimEnd()))), l = le(r.system.system);
	return {
		main: s.data,
		aux: {
			systemTexts: ue(l, ((t) => {
				let n = t.trimEnd();
				return e.dictionary.get(n);
			})),
			actorTexts: c.actorTexts,
			targetNoteKeys: Jt([...s.note.dataNoteSummary, ...s.note.mapNoteSummary]),
			textDictionary: c.textDictionary
		}
	};
};
export { I as $, De as $t, sr as A, lt as At, qn as B, y as Bt, _r as C, jt as Ct, J as D, wt as Dt, pr as E, Ct as Et, G as F, Qe as Ft, An as G, Ge as Gt, W as H, qe as Ht, Zn as I, Xe as It, Cn as J, Ke as Jt, Tn as K, We as Kt, Xn as L, b as Lt, er as M, S as Mt, K as N, dt as Nt, mr as O, St as Ot, Qn as P, et as Pt, N as Q, Ae as Qt, $n as R, Ye as Rt, dr as S, At as St, hr as T, w as Tt, Jn as U, Ue as Ut, V, Ve as Vt, H as W, He as Wt, M as X, Ne as Xt, vn as Y, je as Yt, P as Z, ke as Zt, vr as _, Jt as _t, yi as a, pn as at, fr as b, Ft as bt, fi as c, un as ct, li as d, rn as dt, Te as en, F as et, ai as f, tn as ft, yr as g, Kt as gt, ri as h, Yt as ht, bi as i, gn as it, lr as j, ut as jt, cr as k, E as kt, pi as l, an as lt, oi as m, Qt as mt, _i as n, _n as nt, gi as o, dn as ot, ii as p, $t as pt, wn as q, Je as qt, xi as r, mn as rt, hi as s, ln as st, vi as t, Oe as tn, L as tt, di as u, nn as ut, xr as v, zt as vt, gr as w, D as wt, q as x, Pt as xt, br as y, Bt as yt, U as z, Be as zt };
