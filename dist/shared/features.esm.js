import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as f } from "./fileio.esm.js";
import { n as p } from "./libs.esm.js";
import { Ai as m, At as h, Ci as g, Di as _, Et as v, Hs as ee, Li as te, Si as y, St as b, Us as ne, Vo as re, ji as ie, jt as ae, ki as oe, nt as se, s as ce } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as le, createPluginParamDictionary as ue, extractPluginCommandWithExtractor as de, filterPluginSchemaByFn as fe, filterPluginSchemaStringParams as pe, generatePluginAnnotationText as me, parseDeepRecord as he } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as ge } from "jsonpath-js";
var x = (e, t, n, r, i, a) => {
	if (e.code === 357) return ve(e, t, n, i, a);
	let o = p(e.value);
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
	let a = p(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${ye(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, ye = (e) => `${e.commandName}.${e.argTitle}`, be = (e, t, n, r) => t.flatMap(((t) => xe(e, t, n, r))), xe = (e, t, n, r) => t.commands.filter(S).map(((i) => x(i, t.eventId, e, r, n, [t.name]))), Se = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => x(a, e.eventId, t, n, r, [i])));
})), S = (e) => e.value.length > 0, Ce = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), we = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), Te = (e, t, n, r, i) => {
	let a = Array.from(De(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(Ee);
}, Ee = (e) => e !== null && e.key.length > 0, De = (e, t, n, r) => {
	let i = Oe(e), a = r.map(ke), o = Ae(t), s = je(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, Oe = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), ke = (e) => y(e, Me), Ae = (e) => _(e, Me), je = (e) => m(e, Me), Me = ({ list: e }) => e.filter(Ne).map(((e) => e.parameters[1])), Ne = (e) => e.code === 320 || e.code === 325 || e.code === 324, C = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Pe(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Pe = (e) => ae(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), Fe = (e) => C(e, [
	"name",
	"nickname",
	"profile"
]), Ie = (e) => C(e, ["name"]), Le = (e) => C(e, ["name"]), Re = (e) => C(e, [
	"name",
	"description",
	"message1",
	"message2"
]), ze = (e) => C(e, ["name", "description"]), Be = (e) => C(e, ["name", "description"]), Ve = (e) => C(e, ["name", "description"]), He = (e) => C(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), Ue = (e, t, n, r) => w(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), w = (e, t, n, r) => e.map(((e) => We(e, t, n, r))), We = (e, t, n, r) => ({
	main: e.main.filter(((e) => e.value !== "")).map(((e) => {
		let i = p(e.value);
		return {
			kind: n[e.key],
			baseText: i,
			id: e.id,
			dataKey: e.key,
			filename: t,
			uuid: r(i)
		};
	})),
	note: Ge(e.note, t, n, r)
}), Ge = (e, t, n, r) => e.map(((e) => ({
	kind: `${n.note}:${e.key}`,
	baseText: e.value,
	filename: t,
	id: e.id,
	uuid: r(e.value),
	dataKey: "note",
	otherData: [e.key]
}))), Ke = (e, t, n, r) => [
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
	...T(t, e.equipTypes, "equipTypes", n.equipTypes, r),
	...T(t, e.weaponTypes, "weaponTypes", n.weaponTypes, r),
	...T(t, e.armorTypes, "armorTypes", n.armorTypes, r)
], T = (e, t, n, r, i) => t.filter(((e) => e.length > 0)).map(((t, a) => {
	let o = p(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), E = (e, t) => {
	let n = D(e.actors, Fe), r = Xe(e.armors), i = D(e.classes, Le), a = D(e.enemies, Ie), o = D(e.items, ze), s = D(e.mapInfos, ((e) => e)), c = D(e.skills, Re), l = D(e.states, He), u = D(e.weapons, Be), d = Ze(e.commonEvents, t), f = Qe(e.troops, t), p = $e(e.mapFiles, t), m = qe(e.system), h = Je([
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		f,
		d
	]).concat(Ye(e.mapFiles, e.system));
	return {
		value: {
			eventData: {
				commonEvents: d.data,
				troops: f.data.flat()
			},
			mapFiles: p,
			system: m,
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
		errors: h
	};
}, qe = (e) => e.system === null ? {
	message: e.message,
	system: null
} : {
	message: e.message,
	system: ce(e.system)
}, D = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), Je = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), Ye = (e, t) => [
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
], Xe = (e) => D(e, Ve), Ze = (e, t) => D(e, ((e) => t.extractCommonEventText(e))), Qe = (e, t) => D(e, ((e) => t.extractBattleText(e))), $e = (e, t) => {
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
}, et = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, tt = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, nt = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, O = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, k = (e, t) => {
	let n = rt(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: at(ot(n, t)),
		values: n.map(it)
	})));
}, rt = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, it = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), at = (e) => [
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
].filter(((e) => e !== null)), ot = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
	isBoolean: e.isBoolean && tt(i.value),
	isNumber: e.isNumber && nt(i.value),
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
}), st = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(lt), ...e.map.events.map(ct).flat()]
}), ct = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), lt = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), ut = (e, t) => ({
	eventId: e.eventId,
	name: e.name,
	pageIndex: e.pageIndex,
	commands: e.commands,
	note: e.note,
	noteItems: e.noteItems.filter(t)
}), A = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(dt), dt = (e) => e.note.length > 0 || e.main.length > 0, j = (e, t) => {
	let n = yt(e.value.mainData, t), r = bt(e.value.mapFiles.validMaps, t);
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
}, ft = (e, t) => {
	let n = (e) => t.has(e.key);
	return {
		actors: A(e.actors, n),
		enemies: A(e.enemies, n),
		weapons: A(e.weapons, n),
		armors: A(e.armors, n),
		skills: A(e.skills, n),
		states: A(e.states, n),
		items: A(e.items, n),
		classes: A(e.classes, n)
	};
}, pt = (e, t) => gt(e, O(N(e, t))), mt = (e, t) => O(_t(e, t)), ht = (e, t) => ft(e, mt(e, t)), gt = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => ut(e, r)))
		})
	};
	var n, r;
})), _t = (e, t) => k(vt(e), t), vt = (n) => [
	M(t, n.actors),
	M(a, n.skills),
	M(o, n.items),
	M(u, n.weapons),
	M(r, n.armors),
	M(i, n.classes),
	M(s, n.states),
	M(e, n.enemies)
], M = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), N = (e, t) => k(e.map(st), t), yt = (e, t) => {
	let n = _t(e, t), r = O(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: ft(e, r)
	};
}, bt = (e, t) => {
	let n = N(e, t);
	return {
		noteSummary: n,
		validMaps: gt(e, O(n))
	};
}, xt = (e, t) => e.params.filter(St).map(((n) => wt(e.pluginName, n, t))).filter(((e) => e !== void 0)), P = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && se(e)), St = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Ct(e) && !!P(e.value), Ct = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", wt = (e, t, n) => {
	let r = p(t.value);
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
}, Tt = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Et = (e) => {
	let t = le(e);
	return { extractArgs(e, n) {
		let r = de(e, t, n);
		return r.args.map(((e) => Tt(r, e)));
	} };
}, Dt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Ot = (e) => {
	let t = e.filter(kt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, kt = (e) => e.code === 401 && !!e.speaker && !te(e.speaker), At = (e, t, n, r, i, a, o) => {
	let s = j(E(e.data, o), e);
	return Nt(e.data.actors.data, t, s, n, r, i, a);
}, jt = At, Mt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Nt = (c, l, d, p, m, h, g) => {
	let { eventData: _, mainData: v, mapFiles: ee, system: te } = d.data.value;
	return {
		speakers: (y = d.data.value, b = h, Ot(Dt(y)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: b(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Mt(d),
		pluginParams: l.flatMap(((e) => xt(e, h))),
		map: Pt(ee, h, g),
		commonEvents: be(f, _.commonEvents, h, g),
		troops: Se(_.troops, n, g, h),
		armors: w(v.armors, r, m, h),
		system: It(te, h, p),
		actors: {
			texts: w(v.actors, t, m, h),
			controlChars: ie(c)
		},
		classes: w(v.classes, i, m, h),
		enemies: w(v.enemies, e, m, h),
		items: w(v.items, o, m, h),
		skills: w(v.skills, a, m, h),
		states: Ue(v.states, s, m, h),
		weapons: w(v.weapons, u, m, h)
	};
	var y, b;
}, Pt = (e, t, n) => e.validMaps.map(((e) => Ft(e, t, n))).flat(3), Ft = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = et(e);
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
	}))), e.commands.filter(S).map(((o) => x(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), It = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: Ke(e.system, l, n, t)
} : {
	gameTitle: "",
	filename: l,
	texts: []
}, Lt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: Rt(i, a),
		actorTexts: Te(e, t, n, r, o)
	};
}, Rt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), zt = (e) => {
	let t = O(e);
	return Array.from(t);
}, F = "HonyakuEx", Bt = (e, t = {
	description: "書き換え用辞書データ",
	outputDirectory: "translation",
	dictionaryName: "TranslationDictionary",
	pluginSnapshotName: "pluginSnapshot"
}) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: Ht(e)
}), Vt = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), Ht = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		Gt("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		Vt(F, "Setup", t),
		Vt(F, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, Ut = (e) => [
	Gt("プラグインコマンド書き換えプラグイン"),
	"(function(){",
	"\"use strict\";",
	"const data = ",
	`${JSON.stringify(e)};`,
	"PluginManager.callCommand(null,",
	`"${F}",`,
	"\"ReadPlugins\",",
	"data",
	");",
	"})()"
].join("\n"), Wt = (e) => [
	{
		name: `${e.outputDirectory}/${F}`,
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
], Gt = (e) => me({
	pluginName: "",
	locale: "",
	target: "MZ",
	dependencies: {
		base: [F],
		orderAfter: [F],
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
}), Kt = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, qt = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), Jt = (e) => [{
	data: e,
	filename: c
}], Yt = (e) => Zt(Xt(e)), Xt = (e) => e.reduce(((e, t) => {
	let n = Qt(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), Zt = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), Qt = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), $t = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, en = (e) => {
	let t = [
		I(e.actors.texts),
		I(e.skills),
		I(e.items),
		I(e.weapons),
		I(e.armors),
		I(e.classes),
		I(e.states),
		I(e.enemies)
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
}, I = (e) => e.map(((e) => [e.main, e.note])), L = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => nn(e, t, n))), tn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, nn = (e, t, n) => {
	let r = ne(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: tn[e.code],
		dataId: ee(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, rn = (e, t, n) => y(e.map, ((e, r, i) => ({
	...an(e),
	commands: L(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), an = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, on = (e, t, n) => g(e, ((e, r, i) => ({
	commands: L(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), sn = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, R = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, z = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, B = (e, t) => {
	let n = (e) => t.replaceText(e), r = b(e.note, t), i = R(e.name, n), a = R(e.nickname, n), o = R(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, cn = (e, t) => {
	let n = b(e.note, t), r = z(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, ln = (e, t) => {
	let n = b(e.note, t), r = z(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, un = (e, t) => {
	let n = b(e.note, t), r = z(e.name, t), i = z(e.description, t), a = z(e.message1, t), o = z(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, V = (e, t) => {
	let n = b(e.note, t), r = z(e.name, t), i = z(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, dn = (e, t) => {
	let n = b(e.note, t), r = z(e.name, t), i = z(e.message1, t), a = z(e.message2, t), o = z(e.message3, t), s = z(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, fn = (e, t) => {
	switch (e.code) {
		case 101: return mn(e, t);
		case 102: return gn(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return pn(e, t);
		case 320:
		case 324:
		case 325: return hn(e, t);
		default: return e;
	}
}, pn = (e, t) => {
	let n = R(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, mn = (e, t) => {
	let n = e.parameters[4] ? R(e.parameters[4], t) : "";
	return re({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, hn = (e, t) => {
	let n = R(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, gn = (e, t) => {
	let n = e.parameters[0].map(((e) => R(e, t)));
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
}, _n = (e, t, n = "\n") => vn(e, ((e) => t.get(e)), n), vn = (e, t, n = "\n") => v(e.note, ((e) => R(e.value, t)), n), yn = (e, t) => bn(e, ((e) => sn(e, t))), bn = (e, t) => ({
	params: Cn(e.params, ((e) => R(e, t))),
	messages: wn(e.messages, ((e) => R(e, t))),
	basic: xn(e.basic, ((e) => R(e, t))),
	commands: Sn(e.commands, ((e) => R(e, t)))
}), xn = (e, t) => [
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
], Sn = (e, t) => [
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
], Cn = (e, t) => [
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
], wn = (e, t) => ({
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
}), Tn = (e, t) => ({
	...e,
	gameTitle: R(e.gameTitle, t),
	currencyUnit: R(e.currencyUnit, t),
	elements: H(e.elements, t),
	skillTypes: H(e.skillTypes, t),
	weaponTypes: H(e.weaponTypes, t),
	armorTypes: H(e.armorTypes, t),
	equipTypes: H(e.equipTypes, t),
	terms: bn(e.terms, t)
}), H = (e, t) => e.map(((e) => R(e, t))), En = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Dn = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return En(this.joinCommandBodies());
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
}, On = class {
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
		return En(this.bodies);
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
}, kn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return An(r) ? new On(408, r, n) : new Dn(r, n);
}, An = (e) => e.parameters[0] === "選択肢ヘルプ", jn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new On(401, r, n);
}, Mn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Dn(r, n);
}, Nn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new On(405, r, n);
}, Pn = {
	101: (e, t, n) => n.showMessage(jn(e, t), t, e),
	355: (e, t, n) => n.script(Mn(e, t), t, e),
	108: (e, t, n) => n.comment(kn(e, t), t, e),
	105: (e, t, n) => n.showScrollingText(Nn(e, t), t, e)
}, Fn = (e) => Pn[e], In = (e, t, n, r) => {
	if (e.code === 401 || e.code === 405 || e.code === 408) return;
	let i = Fn(e.code);
	return i ? i(n, t, r) : e.code === 102 ? Ln(e) : e.code === 320 || e.code === 324 || e.code === 325 ? Rn(e) : e.code === 655 ? void 0 : e;
}, Ln = (e) => ({
	code: 102,
	indent: e.indent,
	parameters: [
		e.parameters[0].map(((e) => e.trimEnd())),
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Rn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), zn = (e) => ({
	code: 355,
	indent: e.header.indent,
	parameters: [e.getBodyText().trimEnd()]
}), Bn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 401,
		indent: e.header.indent,
		parameters: [t]
	};
	return [Hn(e.header), n];
}, Vn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 405,
		indent: e.header.indent,
		parameters: [t]
	};
	return [e.header, n];
}, Hn = (e) => {
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
			script: zn,
			showMessage: Bn,
			showScrollingText: Vn
		};
		return e.map(((n, r) => n.code === 357 ? n : In(n, r, e, t))).filter(((e) => e !== void 0)).flat();
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : fn(e, n)));
}, Un = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: W(e.list, t)
	})))
}), Wn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: W(e.list, t)
}), Gn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: W(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), Kn = (e, t) => Jn(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), qn = (e, t) => Jn(e, t), Jn = (e, t) => ({
	note: b(e.note, t),
	displayName: z(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: b(e.note, t),
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
}), Yn = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, Xn = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => Yn(e, t)))
}), Zn = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? Xn(e, t) : null))
}), Qn = (e, t) => e.map(((e) => Yn(e, t))), $n = (e, t) => e.map(((e) => Xn(e, t))), er = (e) => tr(e, (() => [])), G = (e, t) => tr(e, t), tr = (e, t) => e.flatMap(((n, r) => nr(n, r, e, t))).filter(((e) => e !== null)), nr = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return we(e);
	let i = Fn(e.code);
	if (i) {
		let e = i(n, t, rr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Ce(e) : null;
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
	commands: G(e.list, t)
}), cr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: G(n.list, t)
}))), lr = (e, t = () => []) => ({
	note: e.note,
	noteItems: h(e.note),
	displayedName: e.displayName,
	events: ur(e, t)
}), ur = (e, t) => y(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: G(e.list, t),
	note: r.note,
	noteItems: h(r.note),
	name: r.name
}))), K = (e, t) => `${e}:${t}`, dr = (e) => K(e.parameters[0], e.parameters[1]), fr = (e) => [
	...e.commonEvents.data.flatMap(ir),
	...e.troops.data.flatMap(ar),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => oe(e, ((e) => e.list.filter(or))))(e.map).flat(2)))
], pr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = dr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, q = (e, t) => P(e.default), mr = (e, t, n = q) => {
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
}, hr = (e, t = q) => fe(pe(e), ((e, n) => mr(e, n, t))), gr = (e, t, n = q) => ue(e, hr(t, n)), _r = (e, t = q) => e.map(((e) => gr(e.pluginName, e.schema, t))), vr = (e, t = q) => _r(e, t), yr = (e, t, n = q) => {
	let r = vr(t, n), i = J(e);
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
}, J = (e) => pr(fr(e)), br = (e, t, n = q) => {
	let r = vr(t, n), i = J(e);
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
}, xr = (e) => e.kind.endsWith("[]"), Sr = (e) => xr(e.attr), Cr = (e) => e.kind === "struct", wr = (e) => e.attr.kind === "struct[]", Tr = (e) => Dr[e.kind.replace("[]", "")].type === "number", Er = (e) => Dr[e.kind.replace("[]", "")].type === "string", Y = {
	type: "string",
	hasText: !0
}, X = {
	type: "number",
	hasText: !1
}, Z = {
	type: "number",
	hasText: !1
}, Dr = {
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
function Or(e) {
	return kr(e, ((e) => !0), ((e) => !0));
}
var kr = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (Cr(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (wr(e)) i.push(e);
		else if (Sr(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function Ar(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var jr = (e) => new Map(e.map(((e) => [e.struct, Or(e.params)]))), Mr = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Nr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Pr = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Fr(e, t, n, r) {
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
					objectSchema: Ar(e.scalars),
					name: n,
					scalarArrays: Nr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Mr(e.scalars, t) : void 0
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
var Ir = (e, t, n, r = Pr) => Fr(e.attr.struct, `${t}["${e.name}"]`, n, r), Lr = (e, t, n, r = Pr) => Fr(e.attr.struct, `${t}["${e.name}"][*]`, n, r), Rr = (e, t, n, r) => ((e) => Cr(e.attr))(n) ? Vr(e, n, r) : wr(n) ? Hr(e, n, r) : Sr(n) ? zr(e, t, n) : Br(e, t, n), zr = (e, t, n) => ({
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
}), Br = (e, t, n) => ({
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
}), Vr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Ir(t, "$", n)
}), Hr = (e, t, n) => ({
	structArrays: Lr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Ur = (e, t) => t.map(((t) => Wr(e, t))).flat(3), Wr = (e, t) => [
	t.top ? Gr(t, e, t.top, "") : [],
	t.structs.map(((n) => Gr(t, e, n))),
	t.structArrays.map(((n) => Gr(t, e, n)))
], Gr = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return Er(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : Tr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
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
}), Qr = (e, t, n) => e.args.map(((r) => Kr(Rr("args", e.command, r, t), n))), $r = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Ur(e, t.extractors)
}), ei = (e, t) => {
	let n = jr(e.schema.structs);
	return ti(e.pluginName, e.schema.commands, n, t);
}, ti = (e, t, n, r) => t.map(((t) => [ni(e, t.command), Zr(e, t, n, r)])), ni = (e, t) => `${e}:${t}`, ri = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? $r(he(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, ii = (e) => new si(new Map(e)), ai = () => new si(/* @__PURE__ */ new Map()), oi = (e) => {
	let t = e.flatMap(((e) => ei(e, ((e) => new ge(e)))));
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
		return G(e, ((e) => this.extractArgs(e)));
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
	actors: Q(e.actors, ((e) => B(e, t))),
	armors: Q(e.armors, ((e) => V(e, t))),
	classes: Q(e.classes, ((e) => ln(e, t))),
	commonEvents: Q(e.commonEvents, ((e) => Wn(e, t))),
	enemies: Q(e.enemies, ((e) => cn(e, t))),
	items: Q(e.items, ((e) => V(e, t))),
	mapInfos: e.mapInfos,
	skills: Q(e.skills, ((e) => un(e, t))),
	states: Q(e.states, ((e) => dn(e, t))),
	system: {
		message: e.system.message,
		system: Tn(e.system.system, n)
	},
	troops: Q(e.troops, ((e) => Un(e, t))),
	weapons: Q(e.weapons, ((e) => V(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: qn(e.map, t)
		})))
	}
}), Q = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), pi = (e, t, n, r, i) => {
	let a = j(E(e, n), {
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
}), hi = (e, t) => qn(e, {
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
		actors: e.actors.map(((e) => B(e, n))),
		armors: e.armors.map(((e) => V(e, n))),
		classes: e.classes.map(((e) => ln(e, n))),
		enemies: e.enemies.map(((e) => cn(e, n))),
		items: e.items.map(((e) => V(e, n))),
		skills: e.skills.map(((e) => un(e, n))),
		states: e.states.map(((e) => dn(e, n))),
		troops: e.troops.map(((e) => Un(e, n))),
		weapons: e.weapons.map(((e) => V(e, n))),
		commonEvents: e.commonEvents.map(((e) => Wn(e, n)))
	};
}, _i = (e, t) => d(vi(e, t)), vi = (e, t) => pi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}, ((t) => e.dictionary.get(t))).data, yi = (e, t, n) => {
	let r = $(e, t, n);
	return {
		dataJSON: d(r.main),
		scriptJS: [Bt(r.aux)]
	};
}, bi = (e, t, n) => {
	let r = $(e, t, n);
	return [...d(r.main), ...Jt(r.aux)];
}, $ = (e, t, n) => {
	let { data: r, assetBundle: i, dictionary: a, textKeys: o } = e, s = pi(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => o.has(e.key)
	}, ((e) => e.trimEnd())), c = Lt(r.actors.data, r.commonEvents.data, r.troops.data, r.mapFiles.validMaps.map(((e) => e.map)), a, ((e) => n(e.trimEnd())));
	return {
		main: s.data,
		aux: {
			actorTexts: c.actorTexts,
			targetNoteKeys: zt([...s.note.dataNoteSummary, ...s.note.mapNoteSummary]),
			textDictionary: c.textDictionary,
			systemTexts: ce(r.system.system)
		}
	};
};
export { V as $, Se as $t, sr as A, tt as At, Gn as B, C as Bt, _r as C, St as Ct, q as D, ht as Dt, pr as E, mt as Et, Yn as F, Ke as Ft, Tn as G, ze as Gt, qn as H, Ve as Ht, Zn as I, We as It, _n as J, Be as Jt, yn as K, Re as Kt, Xn as L, w as Lt, er as M, O as Mt, G as N, k as Nt, mr as O, pt as Ot, Qn as P, E as Pt, cn as Q, we as Qt, $n as R, Ue as Rt, dr as S, xt as St, hr as T, j as Tt, Kn as U, Le as Ut, W as V, Fe as Vt, Un as W, Ie as Wt, B as X, De as Xt, fn as Y, Te as Yt, ln as Z, Ce as Zt, vr as _, zt as _t, yi as a, nn as at, fr as b, Et as bt, fi as c, en as ct, li as d, Jt as dt, be as en, un as et, ai as f, Kt as ft, yr as g, Lt as gt, ri as h, Bt as ht, bi as i, on as it, lr as j, nt as jt, cr as k, N as kt, pi as l, Yt as lt, oi as m, Ut as mt, _i as n, sn as nt, gi as o, L as ot, ii as p, Wt as pt, vn as q, He as qt, $ as r, rn as rt, hi as s, $t as st, vi as t, S as tn, dn as tt, di as u, qt as ut, br as v, At as vt, gr as w, P as wt, K as x, Tt as xt, J as y, jt as yt, Wn as z, Pe as zt };
