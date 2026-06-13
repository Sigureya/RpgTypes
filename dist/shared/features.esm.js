import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as ee } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { Ai as p, At as m, Bo as h, Ci as g, Di as _, Et as te, Hs as ne, Si as v, St as y, Vs as re, ji as ie, jt as ae, ki as oe, nt as se, s as ce } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as le, createPluginParamDictionary as ue, extractPluginCommandWithExtractor as de, filterPluginSchemaByFn as fe, filterPluginSchemaStringParams as pe, generatePluginAnnotationText as me, parseDeepRecord as he } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as ge } from "jsonpath-js";
var b = (e, t, n, r, i, a) => {
	if (e.code === 357) return ve(e, t, n, i, a);
	let o = f(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: _e(e)
	};
}, _e = (e) => `code:${e.code}`, ve = (e, t, n, r, i) => {
	let a = f(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${ye(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, ye = (e) => `${e.commandName}.${e.argTitle}`, be = (e, t, n, r) => t.flatMap(((t) => xe(e, t, n, r))), xe = (e, t, n, r) => t.commands.filter(Ce).map(((i) => b(i, t.eventId, e, r, n, [t.name]))), Se = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => b(a, e.eventId, t, n, r, [i])));
})), Ce = (e) => e.value.length > 0, we = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), Te = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), Ee = (e, t, n, r, i) => {
	let a = Array.from(Oe(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(De);
}, De = (e) => e !== null && e.key.length > 0, Oe = (e, t, n, r) => {
	let i = ke(e), a = r.map(Ae), o = je(t), s = Me(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, ke = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), Ae = (e) => v(e, Ne), je = (e) => _(e, Ne), Me = (e) => p(e, Ne), Ne = ({ list: e }) => e.filter(Pe).map(((e) => e.parameters[1])), Pe = (e) => e.code === 320 || e.code === 325 || e.code === 324, x = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Fe(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Fe = (e) => ae(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), Ie = (e) => x(e, [
	"name",
	"nickname",
	"profile"
]), Le = (e) => x(e, ["name"]), Re = (e) => x(e, ["name"]), ze = (e) => x(e, [
	"name",
	"description",
	"message1",
	"message2"
]), Be = (e) => x(e, ["name", "description"]), Ve = (e) => x(e, ["name", "description"]), He = (e) => x(e, ["name", "description"]), Ue = (e) => x(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), We = (e, t, n, r) => S(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), S = (e, t, n, r) => e.map(((e) => Ge(e, t, n, r))), Ge = (e, t, n, r) => ({
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
	note: Ke(e.note, t, n, r)
}), Ke = (e, t, n, r) => e.map(((e) => ({
	kind: `${n.note}:${e.key}`,
	baseText: e.value,
	filename: t,
	id: e.id,
	uuid: r(e.value),
	dataKey: "note",
	otherData: [e.key]
}))), qe = (e, t, n, r) => [
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
	...C(t, e.equipTypes, "equipTypes", n.equipTypes, r),
	...C(t, e.weaponTypes, "weaponTypes", n.weaponTypes, r),
	...C(t, e.armorTypes, "armorTypes", n.armorTypes, r)
], C = (e, t, n, r, i) => t.filter(((e) => e.length > 0)).map(((t, a) => {
	let o = f(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), w = (e, t) => {
	let n = T(e.actors, Ie), r = Ze(e.armors), i = T(e.classes, Re), a = T(e.enemies, Le), o = T(e.items, Be), s = T(e.mapInfos, ((e) => e)), c = T(e.skills, ze), l = T(e.states, Ue), u = T(e.weapons, Ve), d = Qe(e.commonEvents, t), ee = $e(e.troops, t), f = et(e.mapFiles, t), p = Je(e.system), m = Ye([
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
	]).concat(Xe(e.mapFiles, e.system));
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
}, Je = (e) => e.system === null ? {
	message: e.message,
	system: null
} : {
	message: e.message,
	system: ce(e.system)
}, T = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), Ye = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), Xe = (e, t) => [
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
], Ze = (e) => T(e, He), Qe = (e, t) => T(e, ((e) => t.extractCommonEventText(e))), $e = (e, t) => T(e, ((e) => t.extractBattleText(e))), et = (e, t) => {
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
}, tt = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, nt = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, rt = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, E = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, D = (e, t) => {
	let n = it(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: ot(st(n, t)),
		values: n.map(at)
	})));
}, it = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, at = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), ot = (e) => [
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
].filter(((e) => e !== null)), st = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
	isBoolean: e.isBoolean && nt(i.value),
	isNumber: e.isNumber && rt(i.value),
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
	isScript: e.isScript && se(i.value)
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
}), ct = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(ut), ...e.map.events.map(lt).flat()]
}), lt = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), ut = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), dt = (e, t) => ({
	eventId: e.eventId,
	name: e.name,
	pageIndex: e.pageIndex,
	commands: e.commands,
	note: e.note,
	noteItems: e.noteItems.filter(t)
}), O = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(ft), ft = (e) => e.note.length > 0 || e.main.length > 0, k = (e, t) => {
	let n = bt(e.value.mainData, t), r = xt(e.value.mapFiles.validMaps, t);
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
}, pt = (e, t) => {
	let n = (e) => t.has(e.key);
	return {
		actors: O(e.actors, n),
		enemies: O(e.enemies, n),
		weapons: O(e.weapons, n),
		armors: O(e.armors, n),
		skills: O(e.skills, n),
		states: O(e.states, n),
		items: O(e.items, n),
		classes: O(e.classes, n)
	};
}, mt = (e, t) => _t(e, E(j(e, t))), ht = (e, t) => E(vt(e, t)), gt = (e, t) => pt(e, ht(e, t)), _t = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => dt(e, r)))
		})
	};
	var n, r;
})), vt = (e, t) => D(yt(e), t), yt = (n) => [
	A(t, n.actors),
	A(a, n.skills),
	A(o, n.items),
	A(u, n.weapons),
	A(r, n.armors),
	A(i, n.classes),
	A(s, n.states),
	A(e, n.enemies)
], A = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), j = (e, t) => D(e.map(ct), t), bt = (e, t) => {
	let n = vt(e, t), r = E(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: pt(e, r)
	};
}, xt = (e, t) => {
	let n = j(e, t);
	return {
		noteSummary: n,
		validMaps: _t(e, E(n))
	};
}, St = (e, t) => e.params.filter(Ct).map(((n) => Tt(e.pluginName, n, t))).filter(((e) => e !== void 0)), M = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && se(e)), Ct = (e) => typeof e.value == "string" && e.value.length !== 0 && !!wt(e) && !!M(e.value), wt = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", Tt = (e, t, n) => {
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
}, Et = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Dt = (e) => {
	let t = le(e);
	return { extractArgs(e, n) {
		let r = de(e, t, n);
		return r.args.map(((e) => Et(r, e)));
	} };
}, Ot = (e, t, n, r, i, a, o) => {
	let s = k(w(e.data, o), e);
	return jt(e.data.actors.data, t, s, n, r, i, a);
}, kt = Ot, At = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], jt = (c, l, d, f, p, m, h) => {
	let { eventData: g, mainData: _, mapFiles: te, system: ne } = d.data.value;
	return {
		noteSummaries: At(d),
		pluginParams: l.flatMap(((e) => St(e, m))),
		map: Mt(te, m, h),
		commonEvents: be(ee, g.commonEvents, m, h),
		troops: Se(g.troops, n, h, m),
		armors: S(_.armors, r, p, m),
		system: Pt(ne, m, f),
		actors: {
			texts: S(_.actors, t, p, m),
			controlChars: ie(c)
		},
		classes: S(_.classes, i, p, m),
		enemies: S(_.enemies, e, p, m),
		items: S(_.items, o, p, m),
		skills: S(_.skills, a, p, m),
		states: We(_.states, s, p, m),
		weapons: S(_.weapons, u, p, m)
	};
}, Mt = (e, t, n) => e.validMaps.map(((e) => Nt(e, t, n))).flat(3), Nt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = tt(e);
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
	}))), e.commands.filter(Ce).map(((o) => b(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Pt = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: qe(e.system, l, n, t)
} : {
	gameTitle: "",
	filename: l,
	texts: []
}, Ft = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: It(i, a),
		actorTexts: Ee(e, t, n, r, o)
	};
}, It = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Lt = (e) => {
	let t = E(e);
	return Array.from(t);
}, N = "HonyakuEx", Rt = (e, t = {
	description: "書き換え用辞書データ",
	outputDirectory: "translation",
	dictionaryName: "TranslationDictionary",
	pluginSnapshotName: "pluginSnapshot"
}) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: Bt(e)
}), zt = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), Bt = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		Ut("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		zt(N, "Setup", t),
		zt(N, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, Vt = (e) => [
	Ut("プラグインコマンド書き換えプラグイン"),
	"(function(){",
	"\"use strict\";",
	"const data = ",
	`${JSON.stringify(e)};`,
	"PluginManager.callCommand(null,",
	`"${N}",`,
	"\"ReadPlugins\",",
	"data",
	");",
	"})()"
].join("\n"), Ht = (e) => [
	{
		name: `${e.outputDirectory}/${N}`,
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
], Ut = (e) => me({
	pluginName: "",
	locale: "",
	target: "MZ",
	dependencies: {
		base: [N],
		orderAfter: [N],
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
}), Wt = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, Gt = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), Kt = (e) => [{
	data: e,
	filename: c
}], qt = (e) => Yt(Jt(e)), Jt = (e) => e.reduce(((e, t) => {
	let n = Xt(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), Yt = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), Xt = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), Zt = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, Qt = (e) => {
	let t = [
		P(e.actors.texts),
		P(e.skills),
		P(e.items),
		P(e.weapons),
		P(e.armors),
		P(e.classes),
		P(e.states),
		P(e.enemies)
	];
	return [
		...e.system.texts,
		...t.flat(3),
		...e.commonEvents,
		...e.map,
		...e.troops,
		...e.pluginParams
	];
}, P = (e) => e.map(((e) => [e.main, e.note])), F = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => en(e, t, n))), $t = {
	127: "weapon",
	128: "armor",
	126: "item"
}, en = (e, t, n) => {
	let r = ne(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: $t[e.code],
		dataId: re(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, tn = (e, t, n) => v(e.map, ((e, r, i) => ({
	...nn(e),
	commands: F(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), nn = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, rn = (e, t, n) => g(e, ((e, r, i) => ({
	commands: F(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), an = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, I = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, L = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, R = (e, t) => {
	let n = (e) => t.replaceText(e), r = y(e.note, t), i = I(e.name, n), a = I(e.nickname, n), o = I(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, z = (e, t) => {
	let n = y(e.note, t), r = L(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, B = (e, t) => {
	let n = y(e.note, t), r = L(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, on = (e, t) => {
	let n = y(e.note, t), r = L(e.name, t), i = L(e.description, t), a = L(e.message1, t), o = L(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, V = (e, t) => {
	let n = y(e.note, t), r = L(e.name, t), i = L(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, sn = (e, t) => {
	let n = y(e.note, t), r = L(e.name, t), i = L(e.message1, t), a = L(e.message2, t), o = L(e.message3, t), s = L(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, cn = (e, t) => {
	switch (e.code) {
		case 101: return un(e, t);
		case 102: return fn(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return ln(e, t);
		case 320:
		case 324:
		case 325: return dn(e, t);
		default: return e;
	}
}, ln = (e, t) => {
	let n = I(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, un = (e, t) => {
	let n = e.parameters[4] ? I(e.parameters[4], t) : "";
	return h({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, dn = (e, t) => {
	let n = I(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, fn = (e, t) => {
	let n = e.parameters[0].map(((e) => I(e, t)));
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
}, pn = (e, t, n = "\n") => mn(e, ((e) => t.get(e)), n), mn = (e, t, n = "\n") => te(e.note, ((e) => I(e.value, t)), n), hn = (e, t) => gn(e, ((e) => an(e, t))), gn = (e, t) => ({
	params: yn(e.params, ((e) => I(e, t))),
	messages: bn(e.messages, ((e) => I(e, t))),
	basic: _n(e.basic, ((e) => I(e, t))),
	commands: vn(e.commands, ((e) => I(e, t)))
}), _n = (e, t) => [
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
], vn = (e, t) => [
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
], yn = (e, t) => [
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
], bn = (e, t) => ({
	actionFailure: t(e.actionFailure),
	actorDamage: t(e.actorDamage),
	actorDrain: t(e.actorDrain),
	actorGain: t(e.actorGain),
	actorLoss: t(e.actorLoss),
	actorNoDamage: t(e.actorNoDamage),
	actorNoHit: t(e.actorNoHit),
	actorRecovery: t(e.actorRecovery),
	alwaysDash: t(e.alwaysDash),
	autosave: t(e.autosave),
	bgmVolume: t(e.bgmVolume),
	bgsVolume: t(e.bgsVolume),
	buffAdd: t(e.buffAdd),
	buffRemove: t(e.buffRemove),
	commandRemember: t(e.commandRemember),
	counterAttack: t(e.counterAttack),
	criticalToActor: t(e.criticalToActor),
	criticalToEnemy: t(e.criticalToEnemy),
	defeat: t(e.defeat),
	debuffAdd: t(e.debuffAdd),
	emerge: t(e.emerge),
	enemyDamage: t(e.enemyDamage),
	enemyDrain: t(e.enemyDrain),
	enemyGain: t(e.enemyGain),
	enemyLoss: t(e.enemyLoss),
	enemyNoDamage: t(e.enemyNoDamage),
	enemyNoHit: t(e.enemyNoHit),
	enemyRecovery: t(e.enemyRecovery),
	escapeFailure: t(e.escapeFailure),
	escapeStart: t(e.escapeStart),
	evasion: t(e.evasion),
	expNext: t(e.expNext),
	expTotal: t(e.expTotal),
	file: t(e.file),
	loadMessage: t(e.loadMessage),
	levelUp: t(e.levelUp),
	magicEvasion: t(e.magicEvasion),
	magicReflection: t(e.magicReflection),
	meVolume: t(e.meVolume),
	obtainExp: t(e.obtainExp),
	obtainGold: t(e.obtainGold),
	obtainItem: t(e.obtainItem),
	obtainSkill: t(e.obtainSkill),
	partyName: t(e.partyName),
	possession: t(e.possession),
	preemptive: t(e.preemptive),
	saveMessage: t(e.saveMessage),
	seVolume: t(e.seVolume),
	substitute: t(e.substitute),
	surprise: t(e.surprise),
	touchUI: t(e.touchUI),
	useItem: t(e.useItem),
	victory: t(e.victory)
}), xn = (e, t) => ({
	...e,
	gameTitle: I(e.gameTitle, t),
	currencyUnit: I(e.currencyUnit, t),
	elements: H(e.elements, t),
	skillTypes: H(e.skillTypes, t),
	weaponTypes: H(e.weaponTypes, t),
	armorTypes: H(e.armorTypes, t),
	equipTypes: H(e.equipTypes, t),
	terms: gn(e.terms, t)
}), H = (e, t) => e.map(((e) => I(e, t))), Sn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Cn = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return Sn(this.joinCommandBodies());
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
}, wn = class {
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
		return Sn(this.bodies);
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
}, U = (e, t, n, r) => {
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
}, Tn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return En(r) ? new wn(408, r, n) : new Cn(r, n);
}, En = (e) => e.parameters[0] === "選択肢ヘルプ", Dn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new wn(401, r, n);
}, On = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Cn(r, n);
}, kn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new wn(405, r, n);
}, An = {
	101: (e, t, n) => n.showMessage(Dn(e, t), t, e),
	355: (e, t, n) => n.script(On(e, t), t, e),
	108: (e, t, n) => n.comment(Tn(e, t), t, e),
	105: (e, t, n) => n.showScrollingText(kn(e, t), t, e)
}, jn = (e) => An[e], Mn = (e, t, n, r) => {
	if (e.code === 401 || e.code === 405 || e.code === 408) return;
	let i = jn(e.code);
	return i ? i(n, t, r) : e.code === 102 ? Nn(e) : e.code === 320 || e.code === 324 || e.code === 325 ? Pn(e) : e.code === 655 ? void 0 : e;
}, Nn = (e) => ({
	code: 102,
	indent: e.indent,
	parameters: [
		e.parameters[0].map(((e) => e.trimEnd())),
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Pn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), Fn = (e) => ({
	code: 355,
	indent: e.header.indent,
	parameters: [e.getBodyText().trimEnd()]
}), In = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 401,
		indent: e.header.indent,
		parameters: [t]
	};
	return [Rn(e.header), n];
}, Ln = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 405,
		indent: e.header.indent,
		parameters: [t]
	};
	return [e.header, n];
}, Rn = (e) => {
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
}, W = (e, t) => {
	let n = (e) => t.replaceText(e);
	return ((e) => {
		let t = {
			comment: (e) => e.normalizedCommands(),
			script: Fn,
			showMessage: In,
			showScrollingText: Ln
		};
		return e.map(((n, r) => n.code === 357 ? n : Mn(n, r, e, t))).filter(((e) => e !== void 0)).flat();
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : cn(e, n)));
}, zn = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: W(e.list, t)
	})))
}), Bn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: W(e.list, t)
}), Vn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: W(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), Hn = (e, t) => Wn(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), Un = (e, t) => Wn(e, t), Wn = (e, t) => ({
	note: y(e.note, t),
	displayName: L(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: y(e.note, t),
		pages: e.pages.map(((e) => ({
			...e,
			list: W(e.list, t)
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
}), Gn = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, Kn = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => Gn(e, t)))
}), qn = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? Kn(e, t) : null))
}), Jn = (e, t) => e.map(((e) => Gn(e, t))), Yn = (e, t) => e.map(((e) => Kn(e, t))), Xn = (e) => Zn(e, (() => [])), G = (e, t) => Zn(e, t), Zn = (e, t) => e.flatMap(((n, r) => Qn(n, r, e, t))).filter(((e) => e !== null)), Qn = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return Te(e);
	let i = jn(e.code);
	if (i) {
		let e = i(n, t, $n);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? we(e) : null;
}, $n = {
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
}, er = (e) => e.list.filter(nr), tr = (e) => e.pages.flatMap(((e) => e.list.filter(nr))), nr = (e) => e.code === 357, rr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: G(e.list, t)
}), ir = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: G(n.list, t)
}))), ar = (e, t = () => []) => ({
	note: e.note,
	noteItems: m(e.note),
	displayedName: e.displayName,
	events: or(e, t)
}), or = (e, t) => v(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: G(e.list, t),
	note: r.note,
	noteItems: m(r.note),
	name: r.name
}))), K = (e, t) => `${e}:${t}`, sr = (e) => K(e.parameters[0], e.parameters[1]), cr = (e) => [
	...e.commonEvents.data.flatMap(er),
	...e.troops.data.flatMap(tr),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => oe(e, ((e) => e.list.filter(nr))))(e.map).flat(2)))
], lr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = sr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, q = (e, t) => M(e.default), ur = (e, t, n = q) => {
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
}, dr = (e, t = q) => fe(pe(e), ((e, n) => ur(e, n, t))), fr = (e, t, n = q) => ue(e, dr(t, n)), pr = (e, t = q) => e.map(((e) => fr(e.pluginName, e.schema, t))), mr = (e, t = q) => pr(e, t), hr = (e, t, n = q) => {
	let r = mr(t, n), i = J(e);
	return r.flatMap(((e) => e.commands.map(((t) => {
		let n = K(e.pluginName, t.commandName);
		return {
			key: n,
			pluginName: e.pluginName,
			commandName: t.commandName,
			argsPath: t.argsPath,
			commands: i.get(n) ?? []
		};
	})))).filter(((e) => e.commands.length > 0));
}, J = (e) => lr(cr(e)), gr = (e, t, n = q) => {
	let r = mr(t, n), i = J(e);
	return {
		params: r,
		commandPaths: r.flatMap(((e) => e.commands.map(((t) => {
			let n = K(e.pluginName, t.commandName);
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
}, _r = (e) => e.kind.endsWith("[]"), vr = (e) => _r(e.attr), yr = (e) => e.kind === "struct", br = (e) => e.attr.kind === "struct[]", xr = (e) => Cr[e.kind.replace("[]", "")].type === "number", Sr = (e) => Cr[e.kind.replace("[]", "")].type === "string", Y = {
	type: "string",
	hasText: !0
}, X = {
	type: "number",
	hasText: !1
}, Z = {
	type: "number",
	hasText: !1
}, Cr = {
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
function wr(e) {
	return Tr(e, ((e) => !0), ((e) => !0));
}
var Tr = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (yr(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (br(e)) i.push(e);
		else if (vr(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function Er(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var Dr = (e) => new Map(e.map(((e) => [e.struct, wr(e.params)]))), Or = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, kr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Ar = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function jr(e, t, n, r) {
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
					objectSchema: Er(e.scalars),
					name: n,
					scalarArrays: kr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Or(e.scalars, t) : void 0
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
var Mr = (e, t, n, r = Ar) => jr(e.attr.struct, `${t}["${e.name}"]`, n, r), Nr = (e, t, n, r = Ar) => jr(e.attr.struct, `${t}["${e.name}"][*]`, n, r), Pr = (e, t, n, r) => ((e) => yr(e.attr))(n) ? Lr(e, n, r) : br(n) ? Rr(e, n, r) : vr(n) ? Fr(e, t, n) : Ir(e, t, n), Fr = (e, t, n) => ({
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
}), Ir = (e, t, n) => ({
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
}), Lr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Mr(t, "$", n)
}), Rr = (e, t, n) => ({
	structArrays: Nr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), zr = (e, t) => t.map(((t) => Br(e, t))).flat(3), Br = (e, t) => [
	t.top ? Vr(t, e, t.top, "") : [],
	t.structs.map(((n) => Vr(t, e, n))),
	t.structArrays.map(((n) => Vr(t, e, n)))
], Vr = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return Sr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : xr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), Hr = (e, t) => {
	let n = Ur(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, Ur = (e, t) => {
	let n = [], r = e.scalars ? Wr(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => Wr(e, "struct", t, n))), a = e.structArrays.items.map(((e) => Wr(e, "structArray", t, n)));
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
}, Wr = (e, t, n, r) => {
	let i = Gr(e.scalarArrays, e.name, t, n, r);
	return e.scalarsPath ? {
		bundleName: e.name,
		arrays: i,
		scalar: Kr(e.scalarsPath, e.objectSchema, t, n, r)
	} : {
		bundleName: e.name,
		arrays: i
	};
}, Gr = (e, t, n, r, i) => e.flatMap(((e) => {
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
})), Kr = (e, t, n, r, i) => {
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
}, qr = (e, t, n, r) => ({
	pluginName: e,
	commandName: t.command,
	desc: t.desc ?? "",
	text: t.text ?? "",
	extractors: Jr(t, n, r)
}), Jr = (e, t, n) => e.args.map(((r) => Hr(Pr("args", e.command, r, t), n))), Yr = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: zr(e, t.extractors)
}), Xr = (e, t) => {
	let n = Dr(e.schema.structs);
	return Zr(e.pluginName, e.schema.commands, n, t);
}, Zr = (e, t, n, r) => t.map(((t) => [Qr(e, t.command), qr(e, t, n, r)])), Qr = (e, t) => `${e}:${t}`, $r = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? Yr(he(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, ei = (e) => new ri(new Map(e)), ti = () => new ri(/* @__PURE__ */ new Map()), ni = (e) => {
	let t = e.flatMap(((e) => Xr(e, ((e) => new ge(e)))));
	return new ri(new Map(t));
}, ri = class {
	_commandMap;
	constructor(e) {
		this._commandMap = e;
	}
	pluginCommandKeys() {
		return Array.from(this._commandMap.keys());
	}
	extractMapTexts(e) {
		return ar(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return ir(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return rr(e, ((e) => this.extractArgs(e)));
	}
	extractArgs(e) {
		let t = $r(e, this._commandMap);
		return t.args.filter(ii).map(((e) => ({
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
		return G(e, ((e) => this.extractArgs(e)));
	}
}, ii = (e) => typeof e.value == "string", ai = (e) => ({
	key: "battlerName",
	image: e.battlerName,
	id: e.id
}), oi = (e, t, n) => ({
	folder: n,
	key: t,
	image: e[t],
	id: e.id
}), si = (e) => [
	oi(e, "faceName", "faces"),
	oi(e, "characterName", "characters"),
	oi(e, "battlerName", "sv_actors")
], ci = (e, t, n) => ({
	tilesets: e.tilesets,
	animations: e.animations,
	actors: Q(e.actors, ((e) => R(e, t))),
	armors: Q(e.armors, ((e) => V(e, t))),
	classes: Q(e.classes, ((e) => B(e, t))),
	commonEvents: Q(e.commonEvents, ((e) => Bn(e, t))),
	enemies: Q(e.enemies, ((e) => z(e, t))),
	items: Q(e.items, ((e) => V(e, t))),
	mapInfos: e.mapInfos,
	skills: Q(e.skills, ((e) => on(e, t))),
	states: Q(e.states, ((e) => sn(e, t))),
	system: {
		message: e.system.message,
		system: xn(e.system.system, n)
	},
	troops: Q(e.troops, ((e) => zn(e, t))),
	weapons: Q(e.weapons, ((e) => V(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: Un(e.map, t)
		})))
	}
}), Q = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), li = (e, t, n, r, i) => {
	let a = k(w(e, n), {
		audioFiles: t.audioFiles,
		imageFiles: t.imageFiles,
		otherFiles: t.otherFiles
	});
	return {
		data: ci(e, ui(a.nonTextNoteKeys, r), i),
		note: a
	};
}, ui = (e, t) => ({
	pluginCommand: (e) => t.pluginCommand(e),
	scriptCommand: (e) => t.scriptCommand(e),
	replaceText: (e) => t.replaceText(e),
	isReplaceTargetNote: (n) => !!e.has(n.key) && t.isReplaceTargetNote(n)
}), di = (e, t) => Un(e, {
	replaceText: (e) => t.textDictionary.get(e),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), fi = (e, t) => {
	let n = {
		replaceText: (e) => t.textDictionary.get(e),
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
	};
	return {
		actors: e.actors.map(((e) => R(e, n))),
		armors: e.armors.map(((e) => V(e, n))),
		classes: e.classes.map(((e) => B(e, n))),
		enemies: e.enemies.map(((e) => z(e, n))),
		items: e.items.map(((e) => V(e, n))),
		skills: e.skills.map(((e) => on(e, n))),
		states: e.states.map(((e) => sn(e, n))),
		troops: e.troops.map(((e) => zn(e, n))),
		weapons: e.weapons.map(((e) => V(e, n))),
		commonEvents: e.commonEvents.map(((e) => Bn(e, n)))
	};
}, pi = (e, t) => d(mi(e, t)), mi = (e, t) => li(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}, ((t) => e.dictionary.get(t))).data, hi = (e, t, n) => {
	let r = $(e, t, n);
	return {
		dataJSON: d(r.main),
		scriptJS: [Rt(r.aux)]
	};
}, gi = (e, t, n) => {
	let r = $(e, t, n);
	return [...d(r.main), ...Kt(r.aux)];
}, $ = (e, t, n) => {
	let { data: r, assetBundle: i, dictionary: a, textKeys: o } = e, s = li(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => o.has(e.key)
	}, ((e) => e.trimEnd())), c = Ft(r.actors.data, r.commonEvents.data, r.troops.data, r.mapFiles.validMaps.map(((e) => e.map)), a, ((e) => n(e.trimEnd())));
	return {
		main: s.data,
		aux: {
			actorTexts: c.actorTexts,
			targetNoteKeys: Lt([...s.note.dataNoteSummary, ...s.note.mapNoteSummary]),
			textDictionary: c.textDictionary,
			systemTexts: ce(r.system.system)
		}
	};
};
export { V as $, Se as $t, rr as A, nt as At, Vn as B, x as Bt, pr as C, Ct, q as D, gt as Dt, lr as E, ht as Et, Gn as F, qe as Ft, xn as G, Be as Gt, Un as H, He as Ht, qn as I, Ge as It, pn as J, Ve as Jt, hn as K, ze as Kt, Kn as L, S as Lt, Xn as M, E as Mt, G as N, D as Nt, ur as O, mt as Ot, Jn as P, w as Pt, z as Q, Te as Qt, Yn as R, We as Rt, sr as S, St, dr as T, k as Tt, Hn as U, Re as Ut, W as V, Ie as Vt, zn as W, Le as Wt, R as X, Oe as Xt, cn as Y, Ee as Yt, B as Z, we as Zt, mr as _, Lt as _t, hi as a, en as at, cr as b, Dt as bt, ci as c, Qt as ct, ai as d, Kt as dt, be as en, on as et, ti as f, Wt as ft, hr as g, Ft as gt, $r as h, Rt as ht, gi as i, rn as it, ar as j, rt as jt, ir as k, j as kt, li as l, qt as lt, ni as m, Vt as mt, pi as n, an as nt, fi as o, F as ot, ei as p, Ht as pt, mn as q, Ue as qt, $ as r, tn as rt, di as s, Zt as st, mi as t, Ce as tn, sn as tt, si as u, Gt as ut, gr as v, Ot as vt, fr as w, M as wt, K as x, Et as xt, J as y, kt as yt, Bn as z, Fe as zt };
