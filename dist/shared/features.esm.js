import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as ee } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { Gs as p, Mi as m, Mt as h, Ni as te, Nt as g, Ot as _, Ti as ne, Uo as re, Ws as ie, c as ae, it as oe, ji as se, ki as ce, s as le, u as ue, wi as de, wt as v, zi as fe } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as pe, createPluginParamDictionary as me, extractPluginCommandWithExtractor as he, filterPluginSchemaByFn as ge, filterPluginSchemaStringParams as _e, generatePluginAnnotationText as ve, parseDeepRecord as ye } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as be } from "jsonpath-js";
var y = (e, t, n, r, i, a) => {
	if (e.code === 357) return Se(e, t, n, i, a);
	let o = f(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: xe(e)
	};
}, xe = (e) => `code:${e.code}`, Se = (e, t, n, r, i) => {
	let a = f(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${Ce(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, Ce = (e) => `${e.commandName}.${e.argTitle}`, we = (e, t, n, r) => t.flatMap(((t) => Te(e, t, n, r))), Te = (e, t, n, r) => t.commands.filter(De).map(((i) => y(i, t.eventId, e, r, n, [t.name]))), Ee = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => y(a, e.eventId, t, n, r, [i])));
})), De = (e) => e.value.length > 0, Oe = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), ke = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), Ae = (e, t, n, r, i) => {
	let a = Array.from(Me(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(je);
}, je = (e) => e !== null && e.key.length > 0, Me = (e, t, n, r) => {
	let i = Ne(e), a = r.map(Pe), o = Fe(t), s = Ie(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, Ne = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), Pe = (e) => de(e, b), Fe = (e) => ce(e, b), Ie = (e) => m(e, b), b = ({ list: e }) => e.filter(Le).map(((e) => e.parameters[1])), Le = (e) => e.code === 320 || e.code === 325 || e.code === 324, x = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Re(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Re = (e) => g(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), ze = (e) => x(e, [
	"name",
	"nickname",
	"profile"
]), Be = (e) => x(e, ["name"]), Ve = (e) => x(e, ["name"]), He = (e) => x(e, [
	"name",
	"description",
	"message1",
	"message2"
]), Ue = (e) => x(e, ["name", "description"]), We = (e) => x(e, ["name", "description"]), Ge = (e) => x(e, ["name", "description"]), Ke = (e) => x(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), qe = (e, t, n, r) => S(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), S = (e, t, n, r) => e.map(((e) => Je(e, t, n, r))), Je = (e, t, n, r) => ({
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
	note: Ye(e.note, t, n, r)
}), Ye = (e, t, n, r) => e.map(((e) => ({
	kind: `${n.note}:${e.key}`,
	baseText: e.value,
	filename: t,
	id: e.id,
	uuid: r(e.value),
	dataKey: "note",
	otherData: [e.key]
}))), C = (e, t, n, r, i, a) => {
	let o = f(t[r]);
	return {
		filename: n,
		id: 0,
		uuid: i(o),
		baseText: o,
		kind: a(r),
		dataKey: `${e}.${r}`
	};
}, Xe = (e, t, n, r, i, a) => [
	...$e(t.basic, e, n, r),
	...Ze(t.commands, e, n, i),
	...Qe(t.messages, e, n, a),
	...et(t.params, e, n, ((e) => `params.${e}`))
], Ze = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => C("commands", e, t, i, n, r))), Qe = (e, t, n, r) => (/* @__PURE__ */ "alwaysDash.commandRemember.touchUI.bgmVolume.bgsVolume.meVolume.seVolume.possession.expTotal.expNext.saveMessage.loadMessage.file.autosave.partyName.emerge.preemptive.surprise.escapeStart.escapeFailure.victory.defeat.obtainExp.obtainGold.obtainItem.levelUp.obtainSkill.useItem.criticalToEnemy.criticalToActor.actorDamage.actorRecovery.actorGain.actorLoss.actorDrain.actorNoDamage.actorNoHit.enemyDamage.enemyRecovery.enemyGain.enemyLoss.enemyDrain.enemyNoDamage.enemyNoHit.evasion.magicEvasion.magicReflection.counterAttack.substitute.buffAdd.debuffAdd.buffRemove.actionFailure".split(".")).filter(((t) => e[t] !== "")).map(((i) => C("messages", e, t, i, n, r))), $e = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => C("basic", e, t, i, n, r))), et = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => C("params", e, t, i, n, r))), tt = (e, t, n, r) => [
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
	...Xe(t, e.terms, r, ((e) => `basic.${e}`), ((e) => `commands.${e}`), ((e) => `messages.${e}`)),
	...w(t, e.elements, "elements", n.elements, r),
	...w(t, e.equipTypes, "equipTypes", n.equipTypes, r),
	...w(t, e.weaponTypes, "weaponTypes", n.weaponTypes, r),
	...w(t, e.armorTypes, "armorTypes", n.armorTypes, r),
	...w(t, e.skillTypes, "skillTypes", n.skillTypes, r)
], w = (e, t, n, r, i) => t.filter(((e) => e.length > 0)).map(((t, a) => {
	let o = f(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), nt = (e, t) => {
	let n = T(e.actors, ze), r = ot(e.armors), i = T(e.classes, Ve), a = T(e.enemies, Be), o = T(e.items, Ue), s = T(e.mapInfos, ((e) => e)), c = T(e.skills, He), l = T(e.states, Ke), u = T(e.weapons, We), d = st(e.commonEvents, t), ee = ct(e.troops, t), f = lt(e.mapFiles, t), p = rt(e.system), m = it([
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
	]).concat(at(e.mapFiles, e.system));
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
}, rt = (e) => e.system === null ? {
	message: e.message,
	system: null
} : {
	message: e.message,
	system: le(e.system)
}, T = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), it = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), at = (e, t) => [
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
], ot = (e) => T(e, Ge), st = (e, t) => T(e, ((e) => t.extractCommonEventText(e))), ct = (e, t) => T(e, ((e) => t.extractBattleText(e))), lt = (e, t) => {
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
}, ut = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, dt = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, ft = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, E = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, D = (e, t) => {
	let n = pt(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: ht(gt(n, t)),
		values: n.map(mt)
	})));
}, pt = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, mt = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), ht = (e) => [
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
].filter(((e) => e !== null)), gt = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
	isBoolean: e.isBoolean && dt(i.value),
	isNumber: e.isNumber && ft(i.value),
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
}), _t = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(yt), ...e.map.events.map(vt).flat()]
}), vt = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), yt = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), bt = (e, t) => ({
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
})).filter(xt), xt = (e) => e.note.length > 0 || e.main.length > 0, k = (e, t) => {
	let n = At(e.value.mainData, t), r = jt(e.value.mapFiles.validMaps, t);
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
}, St = (e, t) => {
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
}, Ct = (e, t) => Et(e, E(kt(e, t))), wt = (e, t) => E(Dt(e, t)), Tt = (e, t) => St(e, wt(e, t)), Et = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => bt(e, r)))
		})
	};
	var n, r;
})), Dt = (e, t) => D(Ot(e), t), Ot = (n) => [
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
}), kt = (e, t) => D(e.map(_t), t), At = (e, t) => {
	let n = Dt(e, t), r = E(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: St(e, r)
	};
}, jt = (e, t) => {
	let n = kt(e, t);
	return {
		noteSummary: n,
		validMaps: Et(e, E(n))
	};
}, Mt = (e, t) => e.params.filter(Pt).map(((n) => It(e.pluginName, n, t))).filter(((e) => e !== void 0)), Nt = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && oe(e)), Pt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Ft(e) && !!Nt(e.value), Ft = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", It = (e, t, n) => {
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
}, Lt = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Rt = (e) => {
	let t = pe(e);
	return { extractArgs(e, n) {
		let r = he(e, t, n);
		return r.args.map(((e) => Lt(r, e)));
	} };
}, zt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Bt = (e) => {
	let t = e.filter(Vt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Vt = (e) => e.code === 401 && !!e.speaker && !fe(e.speaker), Ht = (e, t, n, r, i, a, o) => {
	let s = k(nt(e.data, o), e);
	return Gt(e.data.actors.data, t, s, n, r, i, a);
}, Ut = Ht, Wt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Gt = (c, l, d, f, p, m, h) => {
	let { eventData: g, mainData: _, mapFiles: ne, system: re } = d.data.value;
	return {
		speakers: (ie = d.data.value, ae = m, Bt(zt(ie)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: ae(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Wt(d),
		pluginParams: l.flatMap(((e) => Mt(e, m))),
		map: Kt(ne, m, h),
		commonEvents: we(ee, g.commonEvents, m, h),
		troops: Ee(g.troops, n, h, m),
		armors: S(_.armors, r, p, m),
		system: Jt(re, m, f),
		actors: {
			texts: S(_.actors, t, p, m),
			controlChars: te(c)
		},
		classes: S(_.classes, i, p, m),
		enemies: S(_.enemies, e, p, m),
		items: S(_.items, o, p, m),
		skills: S(_.skills, a, p, m),
		states: qe(_.states, s, p, m),
		weapons: S(_.weapons, u, p, m)
	};
	var ie, ae;
}, Kt = (e, t, n) => e.validMaps.map(((e) => qt(e, t, n))).flat(3), qt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = ut(e);
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
	}))), e.commands.filter(De).map(((o) => y(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Jt = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: tt(e.system, l, n, t)
} : {
	gameTitle: "",
	filename: l,
	texts: []
}, Yt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: Xt(i, a),
		actorTexts: Ae(e, t, n, r, o)
	};
}, Xt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Zt = (e) => {
	let t = E(e);
	return Array.from(t);
}, j = "HonyakuEx", Qt = (e, t = {
	description: "書き換え用辞書データ",
	outputDirectory: "translation",
	dictionaryName: "TranslationDictionary",
	pluginSnapshotName: "pluginSnapshot"
}) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: en(e)
}), $t = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), en = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		rn("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		$t(j, "Setup", t),
		$t(j, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, tn = (e) => [
	rn("プラグインコマンド書き換えプラグイン"),
	"(function(){",
	"\"use strict\";",
	"const data = ",
	`${JSON.stringify(e)};`,
	"PluginManager.callCommand(null,",
	`"${j}",`,
	"\"ReadPlugins\",",
	"data",
	");",
	"})()"
].join("\n"), nn = (e) => [
	{
		name: `${e.outputDirectory}/${j}`,
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
], rn = (e) => ve({
	pluginName: "",
	locale: "",
	target: "MZ",
	dependencies: {
		base: [j],
		orderAfter: [j],
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
}), an = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, on = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), sn = (e) => [{
	data: e,
	filename: c
}], cn = (e) => un(ln(e)), ln = (e) => e.reduce(((e, t) => {
	let n = dn(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), un = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), dn = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), fn = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, pn = (e) => {
	let t = [
		M(e.actors.texts),
		M(e.skills),
		M(e.items),
		M(e.weapons),
		M(e.armors),
		M(e.classes),
		M(e.states),
		M(e.enemies)
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
}, M = (e) => e.map(((e) => [e.main, e.note])), N = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => hn(e, t, n))), mn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, hn = (e, t, n) => {
	let r = p(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: mn[e.code],
		dataId: ie(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, gn = (e, t, n) => de(e.map, ((e, r, i) => ({
	..._n(e),
	commands: N(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), _n = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, vn = (e, t, n) => ne(e, ((e, r, i) => ({
	commands: N(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), yn = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, P = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, F = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, I = (e, t) => {
	let n = (e) => t.replaceText(e), r = v(e.note, t), i = P(e.name, n), a = P(e.nickname, n), o = P(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, L = (e, t) => {
	let n = v(e.note, t), r = F(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, R = (e, t) => {
	let n = v(e.note, t), r = F(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, z = (e, t) => {
	let n = v(e.note, t), r = F(e.name, t), i = F(e.description, t), a = F(e.message1, t), o = F(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, B = (e, t) => {
	let n = v(e.note, t), r = F(e.name, t), i = F(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, V = (e, t) => {
	let n = v(e.note, t), r = F(e.name, t), i = F(e.message1, t), a = F(e.message2, t), o = F(e.message3, t), s = F(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, bn = (e, t) => {
	switch (e.code) {
		case 101: return Sn(e, t);
		case 102: return wn(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return xn(e, t);
		case 320:
		case 324:
		case 325: return Cn(e, t);
		default: return e;
	}
}, xn = (e, t) => {
	let n = P(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, Sn = (e, t) => {
	let n = e.parameters[4] ? P(e.parameters[4], t) : "";
	return re({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, Cn = (e, t) => {
	let n = P(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, wn = (e, t) => {
	let n = e.parameters[0].map(((e) => P(e, t)));
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
}, Tn = (e, t, n = "\n") => En(e, ((e) => t.get(e)), n), En = (e, t, n = "\n") => _(e.note, ((e) => P(e.value, t)), n), Dn = (e, t) => On(e, ((e) => yn(e, t))), On = (e, t) => ({
	params: jn(e.params, ((e) => P(e, t))),
	messages: ae(e.messages, ((e) => P(e, t))),
	basic: kn(e.basic, ((e) => P(e, t))),
	commands: An(e.commands, ((e) => P(e, t)))
}), kn = (e, t) => [
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
], jn = (e, t) => [
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
], Mn = (e, t) => ({
	...e,
	gameTitle: P(e.gameTitle, t),
	currencyUnit: P(e.currencyUnit, t),
	elements: H(e.elements, t),
	skillTypes: H(e.skillTypes, t),
	weaponTypes: H(e.weaponTypes, t),
	armorTypes: H(e.armorTypes, t),
	equipTypes: H(e.equipTypes, t),
	terms: On(e.terms, t)
}), H = (e, t) => e.map(((e) => P(e, t))), Nn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Pn = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return Nn(this.joinCommandBodies());
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
}, U = class {
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
		return Nn(this.bodies);
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
	return In(r) ? new U(408, r, n) : new Pn(r, n);
}, In = (e) => e.parameters[0] === "選択肢ヘルプ", Ln = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new U(401, r, n);
}, Rn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Pn(r, n);
}, zn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new U(405, r, n);
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
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : bn(e, n)));
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
	note: v(e.note, t),
	displayName: F(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: v(e.note, t),
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
	if (e.code === 102) return ke(e);
	let i = Vn(e.code);
	if (i) {
		let e = i(n, t, lr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Oe(e) : null;
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
}), gr = (e, t) => de(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: K(e.list, t),
	note: r.note,
	noteItems: h(r.note),
	name: r.name
}))), q = (e, t) => `${e}:${t}`, _r = (e) => q(e.parameters[0], e.parameters[1]), vr = (e) => [
	...e.commonEvents.data.flatMap(ur),
	...e.troops.data.flatMap(dr),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => se(e, ((e) => e.list.filter(fr))))(e.map).flat(2)))
], yr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = _r(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, J = (e, t) => Nt(e.default), br = (e, t, n = J) => {
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
}, xr = (e, t = J) => ge(_e(e), ((e, n) => br(e, n, t))), Sr = (e, t, n = J) => me(e, xr(t, n)), Cr = (e, t = J) => e.map(((e) => Sr(e.pluginName, e.schema, t))), wr = (e, t = J) => Cr(e, t), Tr = (e, t, n = J) => {
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
	let n = [], r = e.scalars ? ti(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => ti(e, "struct", t, n))), a = e.structArrays.items.map(((e) => ti(e, "structArray", t, n)));
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
}, ti = (e, t, n, r) => {
	let i = ni(e.scalarArrays, e.name, t, n, r);
	return e.scalarsPath ? {
		bundleName: e.name,
		arrays: i,
		scalar: ri(e.scalarsPath, e.objectSchema, t, n, r)
	} : {
		bundleName: e.name,
		arrays: i
	};
}, ni = (e, t, n, r, i) => e.flatMap(((e) => {
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
})), ri = (e, t, n, r, i) => {
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
}, ii = (e, t, n, r) => ({
	pluginName: e,
	commandName: t.command,
	desc: t.desc ?? "",
	text: t.text ?? "",
	extractors: ai(t, n, r)
}), ai = (e, t, n) => e.args.map(((r) => $r(Gr("args", e.command, r, t), n))), oi = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Xr(e, t.extractors)
}), si = (e, t) => {
	let n = Rr(e.schema.structs);
	return ci(e.pluginName, e.schema.commands, n, t);
}, ci = (e, t, n, r) => t.map(((t) => [li(e, t.command), ii(e, t, n, r)])), li = (e, t) => `${e}:${t}`, ui = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? oi(ye(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, di = (e) => new mi(new Map(e)), fi = () => new mi(/* @__PURE__ */ new Map()), pi = (e) => {
	let t = e.flatMap(((e) => si(e, ((e) => new be(e)))));
	return new mi(new Map(t));
}, mi = class {
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
		let t = ui(e, this._commandMap);
		return t.args.filter(hi).map(((e) => ({
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
}, hi = (e) => typeof e.value == "string", gi = (e) => ({
	key: "battlerName",
	image: e.battlerName,
	id: e.id
}), _i = (e, t, n) => ({
	folder: n,
	key: t,
	image: e[t],
	id: e.id
}), vi = (e) => [
	_i(e, "faceName", "faces"),
	_i(e, "characterName", "characters"),
	_i(e, "battlerName", "sv_actors")
], yi = (e, t, n) => ({
	tilesets: e.tilesets,
	animations: e.animations,
	actors: Q(e.actors, ((e) => I(e, t))),
	armors: Q(e.armors, ((e) => B(e, t))),
	classes: Q(e.classes, ((e) => R(e, t))),
	commonEvents: Q(e.commonEvents, ((e) => Xn(e, t))),
	enemies: Q(e.enemies, ((e) => L(e, t))),
	items: Q(e.items, ((e) => B(e, t))),
	mapInfos: e.mapInfos,
	skills: Q(e.skills, ((e) => z(e, t))),
	states: Q(e.states, ((e) => V(e, t))),
	system: {
		message: e.system.message,
		system: Mn(e.system.system, n)
	},
	troops: Q(e.troops, ((e) => Yn(e, t))),
	weapons: Q(e.weapons, ((e) => B(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: $n(e.map, t)
		})))
	}
}), Q = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), bi = (e, t, n, r, i) => {
	let a = k(nt(e, n), {
		audioFiles: t.audioFiles,
		imageFiles: t.imageFiles,
		otherFiles: t.otherFiles
	});
	return {
		data: yi(e, xi(a.nonTextNoteKeys, r), i),
		note: a
	};
}, xi = (e, t) => ({
	pluginCommand: (e) => t.pluginCommand(e),
	scriptCommand: (e) => t.scriptCommand(e),
	replaceText: (e) => t.replaceText(e),
	isReplaceTargetNote: (n) => !!e.has(n.key) && t.isReplaceTargetNote(n)
}), Si = (e, t) => $n(e, {
	replaceText: (e) => t.textDictionary.get(e),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), Ci = (e, t) => {
	let n = {
		replaceText: (e) => t.textDictionary.get(e),
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
	};
	return {
		actors: e.actors.map(((e) => I(e, n))),
		armors: e.armors.map(((e) => B(e, n))),
		classes: e.classes.map(((e) => R(e, n))),
		enemies: e.enemies.map(((e) => L(e, n))),
		items: e.items.map(((e) => B(e, n))),
		skills: e.skills.map(((e) => z(e, n))),
		states: e.states.map(((e) => V(e, n))),
		troops: e.troops.map(((e) => Yn(e, n))),
		weapons: e.weapons.map(((e) => B(e, n))),
		commonEvents: e.commonEvents.map(((e) => Xn(e, n)))
	};
}, wi = (e, t) => d(Ti(e, t)), Ti = (e, t) => bi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}, ((t) => e.dictionary.get(t))).data, Ei = (e, t, n) => {
	let r = $(e, t, n);
	return {
		dataJSON: d(r.main),
		scriptJS: [Qt(r.aux)]
	};
}, Di = (e, t, n) => {
	let r = $(e, t, n);
	return [...d(r.main), ...sn(r.aux)];
}, $ = (e, t, n) => {
	let { data: r, dictionary: i } = e, a = Oi(e, t, n);
	return {
		main: a.data,
		aux: ki(r, a.note, i, n),
		originLike: ki(r, a.note, /* @__PURE__ */ new Map(), n)
	};
}, Oi = (e, t, n) => {
	let { data: r, assetBundle: i, textKeys: a } = e;
	return bi(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => a.has(e.key)
	}, ((e) => e.trimEnd()));
}, ki = (e, t, n, r) => {
	let i = Yt(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((e) => e.map)), n, ((e) => r(e.trimEnd())));
	return {
		systemTexts: ue(le(e.system.system), ((e) => {
			let t = e.trimEnd();
			return n.get(t);
		})),
		actorTexts: i.actorTexts,
		targetNoteKeys: Zt([...t.dataNoteSummary, ...t.mapNoteSummary]),
		textDictionary: i.textDictionary
	};
};
export { B as $, Ee as $t, pr as A, dt as At, Zn as B, x as Bt, Cr as C, Pt as Ct, J as D, Tt as Dt, yr as E, wt as Et, tr as F, tt as Ft, Mn as G, Ue as Gt, $n as H, Ge as Ht, rr as I, Je as It, Tn as J, We as Jt, Dn as K, He as Kt, nr as L, S as Lt, or as M, E as Mt, K as N, D as Nt, br as O, Ct as Ot, ir as P, nt as Pt, L as Q, ke as Qt, ar as R, qe as Rt, _r as S, Mt as St, xr as T, k as Tt, Qn as U, Ve as Ut, G as V, ze as Vt, Yn as W, Be as Wt, I as X, Me as Xt, bn as Y, Ae as Yt, R as Z, Oe as Zt, wr as _, Zt as _t, Ei as a, hn as at, vr as b, Rt as bt, yi as c, pn as ct, gi as d, sn as dt, we as en, z as et, fi as f, an as ft, Tr as g, Yt as gt, ui as h, Qt as ht, Di as i, vn as it, hr as j, ft as jt, mr as k, kt, bi as l, cn as lt, pi as m, tn as mt, wi as n, yn as nt, Ci as o, N as ot, di as p, nn as pt, En as q, Ke as qt, $ as r, gn as rt, Si as s, fn as st, Ti as t, De as tn, V as tt, vi as u, on as ut, Dr as v, Ht as vt, Sr as w, Nt as wt, q as x, Lt as xt, Er as y, Ut as yt, Xn as z, Re as zt };
