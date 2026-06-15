import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as ee } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { Gs as p, Mi as m, Mt as h, Ni as te, Nt as g, Ot as _, Ti as ne, Uo as re, Ws as v, c as y, it as ie, ji as ae, ki as oe, s as se, u as ce, wi as b, wt as x, zi as le } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as ue, createPluginParamDictionary as de, extractPluginCommandWithExtractor as fe, filterPluginSchemaByFn as pe, filterPluginSchemaStringParams as me, generatePluginAnnotationText as he, parseDeepRecord as ge } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as _e } from "jsonpath-js";
var S = (e, t, n, r, i, a) => {
	if (e.code === 357) return ye(e, t, n, i, a);
	let o = f(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: ve(e)
	};
}, ve = (e) => `code:${e.code}`, ye = (e, t, n, r, i) => {
	let a = f(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${be(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, be = (e) => `${e.commandName}.${e.argTitle}`, xe = (e, t, n, r) => t.flatMap(((t) => Se(e, t, n, r))), Se = (e, t, n, r) => t.commands.filter(we).map(((i) => S(i, t.eventId, e, r, n, [t.name]))), Ce = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => S(a, e.eventId, t, n, r, [i])));
})), we = (e) => e.value.length > 0, Te = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), Ee = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), De = (e, t, n, r, i) => {
	let a = Array.from(ke(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(Oe);
}, Oe = (e) => e !== null && e.key.length > 0, ke = (e, t, n, r) => {
	let i = Ae(e), a = r.map(je), o = Me(t), s = Ne(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, Ae = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), je = (e) => b(e, Pe), Me = (e) => oe(e, Pe), Ne = (e) => m(e, Pe), Pe = ({ list: e }) => e.filter(Fe).map(((e) => e.parameters[1])), Fe = (e) => e.code === 320 || e.code === 325 || e.code === 324, C = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Ie(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Ie = (e) => g(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), Le = (e) => C(e, [
	"name",
	"nickname",
	"profile"
]), Re = (e) => C(e, ["name"]), ze = (e) => C(e, ["name"]), Be = (e) => C(e, [
	"name",
	"description",
	"message1",
	"message2"
]), Ve = (e) => C(e, ["name", "description"]), He = (e) => C(e, ["name", "description"]), Ue = (e) => C(e, ["name", "description"]), We = (e) => C(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), Ge = (e, t, n, r) => w(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), w = (e, t, n, r) => e.map(((e) => Ke(e, t, n, r))), Ke = (e, t, n, r) => ({
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
	note: qe(e.note, t, n, r)
}), qe = (e, t, n, r) => e.map(((e) => ({
	kind: `${n.note}:${e.key}`,
	baseText: e.value,
	filename: t,
	id: e.id,
	uuid: r(e.value),
	dataKey: "note",
	otherData: [e.key]
}))), T = (e, t, n, r, i, a) => {
	let o = f(t[r]);
	return {
		filename: n,
		id: 0,
		uuid: i(o),
		baseText: o,
		kind: a(r),
		dataKey: `${e}.${r}`
	};
}, Je = (e, t, n, r, i, a) => [
	...Ze(t.basic, e, n, r),
	...Ye(t.commands, e, n, i),
	...Xe(t.messages, e, n, a),
	...Qe(t.params, e, n, ((e) => `params.${e}`))
], Ye = (e, t, n, r) => [
	"fight",
	"escape",
	"attack",
	"guard",
	"item",
	"skill",
	"equip",
	"status",
	"formation",
	"save",
	"gameEnd",
	"options",
	"weapon",
	"armor",
	"keyItem",
	"equip2",
	"optimize",
	"clear",
	"newGame",
	"continueGame",
	"toTitle",
	"cancel",
	"buy",
	"sell"
].filter(((t) => e[t] !== "")).map(((i) => T("commands", e, t, i, n, r))), Xe = (e, t, n, r) => (/* @__PURE__ */ "alwaysDash.commandRemember.touchUI.bgmVolume.bgsVolume.meVolume.seVolume.possession.expTotal.expNext.saveMessage.loadMessage.file.autosave.partyName.emerge.preemptive.surprise.escapeStart.escapeFailure.victory.defeat.obtainExp.obtainGold.obtainItem.levelUp.obtainSkill.useItem.criticalToEnemy.criticalToActor.actorDamage.actorRecovery.actorGain.actorLoss.actorDrain.actorNoDamage.actorNoHit.enemyDamage.enemyRecovery.enemyGain.enemyLoss.enemyDrain.enemyNoDamage.enemyNoHit.evasion.magicEvasion.magicReflection.counterAttack.substitute.buffAdd.debuffAdd.buffRemove.actionFailure".split(".")).filter(((t) => e[t] !== "")).map(((i) => T("messages", e, t, i, n, r))), Ze = (e, t, n, r) => [
	"level",
	"levelA",
	"hp",
	"hpA",
	"mp",
	"mpA",
	"tp",
	"tpA",
	"experience",
	"exp"
].filter(((t) => e[t] !== "")).map(((i) => T("basic", e, t, i, n, r))), Qe = (e, t, n, r) => [
	"mhp",
	"mmp",
	"atk",
	"def",
	"mat",
	"mdf",
	"agi",
	"luk",
	"hit",
	"eva"
].filter(((t) => e[t] !== "")).map(((i) => T("params", e, t, i, n, r))), $e = (e, t, n, r) => [
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
	...Je(t, e.terms, r, ((e) => `basic.${e}`), ((e) => `commands.${e}`), ((e) => `messages.${e}`)),
	...E(t, e.elements, "elements", n.elements, r),
	...E(t, e.equipTypes, "equipTypes", n.equipTypes, r),
	...E(t, e.weaponTypes, "weaponTypes", n.weaponTypes, r),
	...E(t, e.armorTypes, "armorTypes", n.armorTypes, r),
	...E(t, e.skillTypes, "skillTypes", n.skillTypes, r)
], E = (e, t, n, r, i) => t.filter(((e) => e.length > 0)).map(((t, a) => {
	let o = f(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), D = (e, t) => {
	let n = O(e.actors, Le), r = rt(e.armors), i = O(e.classes, ze), a = O(e.enemies, Re), o = O(e.items, Ve), s = O(e.mapInfos, ((e) => e)), c = O(e.skills, Be), l = O(e.states, We), u = O(e.weapons, He), d = it(e.commonEvents, t), ee = at(e.troops, t), f = ot(e.mapFiles, t), p = et(e.system), m = tt([
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
	]).concat(nt(e.mapFiles, e.system));
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
}, et = (e) => e.system === null ? {
	message: e.message,
	system: null
} : {
	message: e.message,
	system: se(e.system)
}, O = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), tt = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), nt = (e, t) => [
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
], rt = (e) => O(e, Ue), it = (e, t) => O(e, ((e) => t.extractCommonEventText(e))), at = (e, t) => O(e, ((e) => t.extractBattleText(e))), ot = (e, t) => {
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
}, st = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, ct = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, lt = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, k = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, A = (e, t) => {
	let n = ut(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: ft(pt(n, t)),
		values: n.map(dt)
	})));
}, ut = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, dt = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), ft = (e) => [
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
].filter(((e) => e !== null)), pt = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
	isBoolean: e.isBoolean && ct(i.value),
	isNumber: e.isNumber && lt(i.value),
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
	isScript: e.isScript && ie(i.value)
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
}), mt = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(gt), ...e.map.events.map(ht).flat()]
}), ht = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), gt = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), _t = (e, t) => ({
	eventId: e.eventId,
	name: e.name,
	pageIndex: e.pageIndex,
	commands: e.commands,
	note: e.note,
	noteItems: e.noteItems.filter(t)
}), j = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(vt), vt = (e) => e.note.length > 0 || e.main.length > 0, M = (e, t) => {
	let n = Et(e.value.mainData, t), r = Dt(e.value.mapFiles.validMaps, t);
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
}, yt = (e, t) => {
	let n = (e) => t.has(e.key);
	return {
		actors: j(e.actors, n),
		enemies: j(e.enemies, n),
		weapons: j(e.weapons, n),
		armors: j(e.armors, n),
		skills: j(e.skills, n),
		states: j(e.states, n),
		items: j(e.items, n),
		classes: j(e.classes, n)
	};
}, bt = (e, t) => Ct(e, k(P(e, t))), xt = (e, t) => k(wt(e, t)), St = (e, t) => yt(e, xt(e, t)), Ct = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => _t(e, r)))
		})
	};
	var n, r;
})), wt = (e, t) => A(Tt(e), t), Tt = (n) => [
	N(t, n.actors),
	N(a, n.skills),
	N(o, n.items),
	N(u, n.weapons),
	N(r, n.armors),
	N(i, n.classes),
	N(s, n.states),
	N(e, n.enemies)
], N = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), P = (e, t) => A(e.map(mt), t), Et = (e, t) => {
	let n = wt(e, t), r = k(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: yt(e, r)
	};
}, Dt = (e, t) => {
	let n = P(e, t);
	return {
		noteSummary: n,
		validMaps: Ct(e, k(n))
	};
}, Ot = (e, t) => e.params.filter(kt).map(((n) => jt(e.pluginName, n, t))).filter(((e) => e !== void 0)), F = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && ie(e)), kt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!At(e) && !!F(e.value), At = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", jt = (e, t, n) => {
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
}, Mt = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Nt = (e) => {
	let t = ue(e);
	return { extractArgs(e, n) {
		let r = fe(e, t, n);
		return r.args.map(((e) => Mt(r, e)));
	} };
}, Pt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Ft = (e) => {
	let t = e.filter(It).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, It = (e) => e.code === 401 && !!e.speaker && !le(e.speaker), Lt = (e, t, n, r, i, a, o) => {
	let s = M(D(e.data, o), e);
	return Bt(e.data.actors.data, t, s, n, r, i, a);
}, Rt = Lt, zt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Bt = (c, l, d, f, p, m, h) => {
	let { eventData: g, mainData: _, mapFiles: ne, system: re } = d.data.value;
	return {
		speakers: (v = d.data.value, y = m, Ft(Pt(v)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: y(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: zt(d),
		pluginParams: l.flatMap(((e) => Ot(e, m))),
		map: Vt(ne, m, h),
		commonEvents: xe(ee, g.commonEvents, m, h),
		troops: Ce(g.troops, n, h, m),
		armors: w(_.armors, r, p, m),
		system: Ut(re, m, f),
		actors: {
			texts: w(_.actors, t, p, m),
			controlChars: te(c)
		},
		classes: w(_.classes, i, p, m),
		enemies: w(_.enemies, e, p, m),
		items: w(_.items, o, p, m),
		skills: w(_.skills, a, p, m),
		states: Ge(_.states, s, p, m),
		weapons: w(_.weapons, u, p, m)
	};
	var v, y;
}, Vt = (e, t, n) => e.validMaps.map(((e) => Ht(e, t, n))).flat(3), Ht = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = st(e);
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
	}))), e.commands.filter(we).map(((o) => S(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Ut = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: $e(e.system, l, n, t)
} : {
	gameTitle: "",
	filename: l,
	texts: []
}, Wt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: Gt(i, a),
		actorTexts: De(e, t, n, r, o)
	};
}, Gt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Kt = (e) => {
	let t = k(e);
	return Array.from(t);
}, I = "HonyakuEx", qt = (e, t = {
	description: "書き換え用辞書データ",
	outputDirectory: "translation",
	dictionaryName: "TranslationDictionary",
	pluginSnapshotName: "pluginSnapshot"
}) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: Yt(e)
}), Jt = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), Yt = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		Qt("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		Jt(I, "Setup", t),
		Jt(I, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, Xt = (e) => [
	Qt("プラグインコマンド書き換えプラグイン"),
	"(function(){",
	"\"use strict\";",
	"const data = ",
	`${JSON.stringify(e)};`,
	"PluginManager.callCommand(null,",
	`"${I}",`,
	"\"ReadPlugins\",",
	"data",
	");",
	"})()"
].join("\n"), Zt = (e) => [
	{
		name: `${e.outputDirectory}/${I}`,
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
], Qt = (e) => he({
	pluginName: "",
	locale: "",
	target: "MZ",
	dependencies: {
		base: [I],
		orderAfter: [I],
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
}), $t = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, en = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), tn = (e) => [{
	data: e,
	filename: c
}], nn = (e) => an(rn(e)), rn = (e) => e.reduce(((e, t) => {
	let n = on(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), an = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), on = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), sn = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, cn = (e) => {
	let t = [
		L(e.actors.texts),
		L(e.skills),
		L(e.items),
		L(e.weapons),
		L(e.armors),
		L(e.classes),
		L(e.states),
		L(e.enemies)
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
}, L = (e) => e.map(((e) => [e.main, e.note])), R = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => un(e, t, n))), ln = {
	127: "weapon",
	128: "armor",
	126: "item"
}, un = (e, t, n) => {
	let r = p(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: ln[e.code],
		dataId: v(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, dn = (e, t, n) => b(e.map, ((e, r, i) => ({
	...fn(e),
	commands: R(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), fn = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, pn = (e, t, n) => ne(e, ((e, r, i) => ({
	commands: R(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), mn = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, z = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, B = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, V = (e, t) => {
	let n = (e) => t.replaceText(e), r = x(e.note, t), i = z(e.name, n), a = z(e.nickname, n), o = z(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, hn = (e, t) => {
	let n = x(e.note, t), r = B(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, gn = (e, t) => {
	let n = x(e.note, t), r = B(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, _n = (e, t) => {
	let n = x(e.note, t), r = B(e.name, t), i = B(e.description, t), a = B(e.message1, t), o = B(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, H = (e, t) => {
	let n = x(e.note, t), r = B(e.name, t), i = B(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, vn = (e, t) => {
	let n = x(e.note, t), r = B(e.name, t), i = B(e.message1, t), a = B(e.message2, t), o = B(e.message3, t), s = B(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, yn = (e, t) => {
	switch (e.code) {
		case 101: return xn(e, t);
		case 102: return Cn(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return bn(e, t);
		case 320:
		case 324:
		case 325: return Sn(e, t);
		default: return e;
	}
}, bn = (e, t) => {
	let n = z(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, xn = (e, t) => {
	let n = e.parameters[4] ? z(e.parameters[4], t) : "";
	return re({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, Sn = (e, t) => {
	let n = z(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, Cn = (e, t) => {
	let n = e.parameters[0].map(((e) => z(e, t)));
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
}, wn = (e, t, n = "\n") => Tn(e, ((e) => t.get(e)), n), Tn = (e, t, n = "\n") => _(e.note, ((e) => z(e.value, t)), n), En = (e, t) => Dn(e, ((e) => mn(e, t))), Dn = (e, t) => ({
	params: An(e.params, ((e) => z(e, t))),
	messages: y(e.messages, ((e) => z(e, t))),
	basic: On(e.basic, ((e) => z(e, t))),
	commands: kn(e.commands, ((e) => z(e, t)))
}), On = (e, t) => [
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
], An = (e, t) => [
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
], jn = (e, t) => ({
	...e,
	gameTitle: z(e.gameTitle, t),
	currencyUnit: z(e.currencyUnit, t),
	elements: U(e.elements, t),
	skillTypes: U(e.skillTypes, t),
	weaponTypes: U(e.weaponTypes, t),
	armorTypes: U(e.armorTypes, t),
	equipTypes: U(e.equipTypes, t),
	terms: Dn(e.terms, t)
}), U = (e, t) => e.map(((e) => z(e, t))), Mn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Nn = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return Mn(this.joinCommandBodies());
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
}, Pn = class {
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
		return Mn(this.bodies);
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
}, W = (e, t, n, r) => {
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
}, Fn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return In(r) ? new Pn(408, r, n) : new Nn(r, n);
}, In = (e) => e.parameters[0] === "選択肢ヘルプ", Ln = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new Pn(401, r, n);
}, Rn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Nn(r, n);
}, zn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new Pn(405, r, n);
}, Bn = {
	101: (e, t, n) => n.showMessage(Ln(e, t), t, e),
	355: (e, t, n) => n.script(Rn(e, t), t, e),
	108: (e, t, n) => n.comment(Fn(e, t), t, e),
	105: (e, t, n) => n.showScrollingText(zn(e, t), t, e)
}, Vn = (e) => Bn[e], Hn = (e, t, n, r) => {
	if (e.code === 401 || e.code === 405 || e.code === 408) return;
	let i = Vn(e.code);
	return i ? i(n, t, r) : e.code === 102 ? Un(e) : e.code === 320 || e.code === 324 || e.code === 325 ? Wn(e) : e.code === 655 ? void 0 : e;
}, Un = (e) => ({
	code: 102,
	indent: e.indent,
	parameters: [
		e.parameters[0].map(((e) => e.trimEnd())),
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Wn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), Gn = (e) => ({
	code: 355,
	indent: e.header.indent,
	parameters: [e.getBodyText().trimEnd()]
}), Kn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 401,
		indent: e.header.indent,
		parameters: [t]
	};
	return [Jn(e.header), n];
}, qn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 405,
		indent: e.header.indent,
		parameters: [t]
	};
	return [e.header, n];
}, Jn = (e) => {
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
}, G = (e, t) => {
	let n = (e) => t.replaceText(e);
	return ((e) => {
		let t = {
			comment: (e) => e.normalizedCommands(),
			script: Gn,
			showMessage: Kn,
			showScrollingText: qn
		};
		return e.map(((n, r) => n.code === 357 ? n : Hn(n, r, e, t))).filter(((e) => e !== void 0)).flat();
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : yn(e, n)));
}, Yn = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: G(e.list, t)
	})))
}), Xn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: G(e.list, t)
}), Zn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: G(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), Qn = (e, t) => er(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), $n = (e, t) => er(e, t), er = (e, t) => ({
	note: x(e.note, t),
	displayName: B(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: x(e.note, t),
		pages: e.pages.map(((e) => ({
			...e,
			list: G(e.list, t)
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
}), tr = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, nr = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => tr(e, t)))
}), rr = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? nr(e, t) : null))
}), ir = (e, t) => e.map(((e) => tr(e, t))), ar = (e, t) => e.map(((e) => nr(e, t))), or = (e) => sr(e, (() => [])), K = (e, t) => sr(e, t), sr = (e, t) => e.flatMap(((n, r) => cr(n, r, e, t))).filter(((e) => e !== null)), cr = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return Ee(e);
	let i = Vn(e.code);
	if (i) {
		let e = i(n, t, lr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Te(e) : null;
}, lr = {
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
}, ur = (e) => e.list.filter(fr), dr = (e) => e.pages.flatMap(((e) => e.list.filter(fr))), fr = (e) => e.code === 357, pr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: K(e.list, t)
}), mr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: K(n.list, t)
}))), hr = (e, t = () => []) => ({
	note: e.note,
	noteItems: h(e.note),
	displayedName: e.displayName,
	events: gr(e, t)
}), gr = (e, t) => b(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: K(e.list, t),
	note: r.note,
	noteItems: h(r.note),
	name: r.name
}))), q = (e, t) => `${e}:${t}`, _r = (e) => q(e.parameters[0], e.parameters[1]), vr = (e) => [
	...e.commonEvents.data.flatMap(ur),
	...e.troops.data.flatMap(dr),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => ae(e, ((e) => e.list.filter(fr))))(e.map).flat(2)))
], yr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = _r(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, J = (e, t) => F(e.default), br = (e, t, n = J) => {
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
}, xr = (e, t = J) => pe(me(e), ((e, n) => br(e, n, t))), Sr = (e, t, n = J) => de(e, xr(t, n)), Cr = (e, t = J) => e.map(((e) => Sr(e.pluginName, e.schema, t))), wr = (e, t = J) => Cr(e, t), Tr = (e, t, n = J) => {
	let r = wr(t, n), i = Er(e);
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
}, Er = (e) => yr(vr(e)), Dr = (e, t, n = J) => {
	let r = wr(t, n), i = Er(e);
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
}, Or = (e) => e.kind.endsWith("[]"), kr = (e) => Or(e.attr), Ar = (e) => e.kind === "struct", jr = (e) => e.attr.kind === "struct[]", Mr = (e) => Pr[e.kind.replace("[]", "")].type === "number", Nr = (e) => Pr[e.kind.replace("[]", "")].type === "string", Y = {
	type: "string",
	hasText: !0
}, X = {
	type: "number",
	hasText: !1
}, Z = {
	type: "number",
	hasText: !1
}, Pr = {
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
function Fr(e) {
	return Ir(e, ((e) => !0), ((e) => !0));
}
var Ir = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (Ar(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (jr(e)) i.push(e);
		else if (kr(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function Lr(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var Rr = (e) => new Map(e.map(((e) => [e.struct, Fr(e.params)]))), zr = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Br = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Vr = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Hr(e, t, n, r) {
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
					objectSchema: Lr(e.scalars),
					name: n,
					scalarArrays: Br(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? zr(e.scalars, t) : void 0
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
var Ur = (e, t, n, r = Vr) => Hr(e.attr.struct, `${t}["${e.name}"]`, n, r), Wr = (e, t, n, r = Vr) => Hr(e.attr.struct, `${t}["${e.name}"][*]`, n, r), Gr = (e, t, n, r) => ((e) => Ar(e.attr))(n) ? Jr(e, n, r) : jr(n) ? Yr(e, n, r) : kr(n) ? Kr(e, t, n) : qr(e, t, n), Kr = (e, t, n) => ({
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
}), qr = (e, t, n) => ({
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
}), Jr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Ur(t, "$", n)
}), Yr = (e, t, n) => ({
	structArrays: Wr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Xr = (e, t) => t.map(((t) => Zr(e, t))).flat(3), Zr = (e, t) => [
	t.top ? Qr(t, e, t.top, "") : [],
	t.structs.map(((n) => Qr(t, e, n))),
	t.structArrays.map(((n) => Qr(t, e, n)))
], Qr = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return Nr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : Mr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), $r = (e, t) => {
	let n = ei(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, ei = (e, t) => {
	let n = [], r = e.scalars ? Q(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => Q(e, "struct", t, n))), a = e.structArrays.items.map(((e) => Q(e, "structArray", t, n)));
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
}, Q = (e, t, n, r) => {
	let i = ti(e.scalarArrays, e.name, t, n, r);
	return e.scalarsPath ? {
		bundleName: e.name,
		arrays: i,
		scalar: ni(e.scalarsPath, e.objectSchema, t, n, r)
	} : {
		bundleName: e.name,
		arrays: i
	};
}, ti = (e, t, n, r, i) => e.flatMap(((e) => {
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
})), ni = (e, t, n, r, i) => {
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
}, ri = (e, t, n, r) => ({
	pluginName: e,
	commandName: t.command,
	desc: t.desc ?? "",
	text: t.text ?? "",
	extractors: ii(t, n, r)
}), ii = (e, t, n) => e.args.map(((r) => $r(Gr("args", e.command, r, t), n))), ai = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Xr(e, t.extractors)
}), oi = (e, t) => {
	let n = Rr(e.schema.structs);
	return si(e.pluginName, e.schema.commands, n, t);
}, si = (e, t, n, r) => t.map(((t) => [ci(e, t.command), ri(e, t, n, r)])), ci = (e, t) => `${e}:${t}`, li = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? ai(ge(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, ui = (e) => new pi(new Map(e)), di = () => new pi(/* @__PURE__ */ new Map()), fi = (e) => {
	let t = e.flatMap(((e) => oi(e, ((e) => new _e(e)))));
	return new pi(new Map(t));
}, pi = class {
	_commandMap;
	constructor(e) {
		this._commandMap = e;
	}
	pluginCommandKeys() {
		return Array.from(this._commandMap.keys());
	}
	extractMapTexts(e) {
		return hr(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return mr(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return pr(e, ((e) => this.extractArgs(e)));
	}
	extractArgs(e) {
		let t = li(e, this._commandMap);
		return t.args.filter(mi).map(((e) => ({
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
}, mi = (e) => typeof e.value == "string", hi = (e) => ({
	key: "battlerName",
	image: e.battlerName,
	id: e.id
}), gi = (e, t, n) => ({
	folder: n,
	key: t,
	image: e[t],
	id: e.id
}), _i = (e) => [
	gi(e, "faceName", "faces"),
	gi(e, "characterName", "characters"),
	gi(e, "battlerName", "sv_actors")
], vi = (e, t, n) => ({
	tilesets: e.tilesets,
	animations: e.animations,
	actors: $(e.actors, ((e) => V(e, t))),
	armors: $(e.armors, ((e) => H(e, t))),
	classes: $(e.classes, ((e) => gn(e, t))),
	commonEvents: $(e.commonEvents, ((e) => Xn(e, t))),
	enemies: $(e.enemies, ((e) => hn(e, t))),
	items: $(e.items, ((e) => H(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => _n(e, t))),
	states: $(e.states, ((e) => vn(e, t))),
	system: {
		message: e.system.message,
		system: jn(e.system.system, n)
	},
	troops: $(e.troops, ((e) => Yn(e, t))),
	weapons: $(e.weapons, ((e) => H(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: $n(e.map, t)
		})))
	}
}), $ = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), yi = (e, t, n, r, i) => {
	let a = M(D(e, n), {
		audioFiles: t.audioFiles,
		imageFiles: t.imageFiles,
		otherFiles: t.otherFiles
	});
	return {
		data: vi(e, bi(a.nonTextNoteKeys, r), i),
		note: a
	};
}, bi = (e, t) => ({
	pluginCommand: (e) => t.pluginCommand(e),
	scriptCommand: (e) => t.scriptCommand(e),
	replaceText: (e) => t.replaceText(e),
	isReplaceTargetNote: (n) => !!e.has(n.key) && t.isReplaceTargetNote(n)
}), xi = (e, t) => $n(e, {
	replaceText: (e) => t.textDictionary.get(e),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), Si = (e, t) => {
	let n = {
		replaceText: (e) => t.textDictionary.get(e),
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
	};
	return {
		actors: e.actors.map(((e) => V(e, n))),
		armors: e.armors.map(((e) => H(e, n))),
		classes: e.classes.map(((e) => gn(e, n))),
		enemies: e.enemies.map(((e) => hn(e, n))),
		items: e.items.map(((e) => H(e, n))),
		skills: e.skills.map(((e) => _n(e, n))),
		states: e.states.map(((e) => vn(e, n))),
		troops: e.troops.map(((e) => Yn(e, n))),
		weapons: e.weapons.map(((e) => H(e, n))),
		commonEvents: e.commonEvents.map(((e) => Xn(e, n)))
	};
}, Ci = (e, t) => d(wi(e, t)), wi = (e, t) => yi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}, ((t) => e.dictionary.get(t))).data, Ti = (e, t, n) => {
	let r = Di(e, t, n);
	return {
		dataJSON: d(r.main),
		scriptJS: [qt(r.aux)]
	};
}, Ei = (e, t, n) => {
	let r = Di(e, t, n);
	return [...d(r.main), ...tn(r.aux)];
}, Di = (e, t, n) => {
	let { data: r, assetBundle: i, dictionary: a, textKeys: o } = e, s = yi(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => o.has(e.key)
	}, ((e) => e.trimEnd())), c = Wt(r.actors.data, r.commonEvents.data, r.troops.data, r.mapFiles.validMaps.map(((e) => e.map)), a, ((e) => n(e.trimEnd()))), l = se(r.system.system);
	return {
		main: s.data,
		aux: {
			systemTexts: ce(l, ((t) => {
				let n = t.trimEnd();
				return e.dictionary.get(n);
			})),
			actorTexts: c.actorTexts,
			targetNoteKeys: Kt([...s.note.dataNoteSummary, ...s.note.mapNoteSummary]),
			textDictionary: c.textDictionary
		}
	};
};
export { H as $, Ce as $t, pr as A, ct as At, Zn as B, C as Bt, Cr as C, kt as Ct, J as D, St as Dt, yr as E, xt as Et, tr as F, $e as Ft, jn as G, Ve as Gt, $n as H, Ue as Ht, rr as I, Ke as It, wn as J, He as Jt, En as K, Be as Kt, nr as L, w as Lt, or as M, k as Mt, K as N, A as Nt, br as O, bt as Ot, ir as P, D as Pt, hn as Q, Ee as Qt, ar as R, Ge as Rt, _r as S, Ot as St, xr as T, M as Tt, Qn as U, ze as Ut, G as V, Le as Vt, Yn as W, Re as Wt, V as X, ke as Xt, yn as Y, De as Yt, gn as Z, Te as Zt, wr as _, Kt as _t, Ti as a, un as at, vr as b, Nt as bt, vi as c, cn as ct, hi as d, tn as dt, xe as en, _n as et, di as f, $t as ft, Tr as g, Wt as gt, li as h, qt as ht, Ei as i, pn as it, hr as j, lt as jt, mr as k, P as kt, yi as l, nn as lt, fi as m, Xt as mt, Ci as n, mn as nt, Si as o, R as ot, ui as p, Zt as pt, Tn as q, We as qt, Di as r, dn as rt, xi as s, sn as st, wi as t, we as tn, vn as tt, _i as u, en as ut, Dr as v, Lt as vt, Sr as w, F as wt, q as x, Mt as xt, Er as y, Rt as yt, Xn as z, Ie as zt };
