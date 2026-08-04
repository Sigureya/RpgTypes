import { B as e, G as t, H as n, I as r, J as i, R as a, V as o, W as s, Z as c, l, q as ee, r as u, z as d } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { Ml as te, Nt as p, Nu as m, Os as h, Pt as ne, Pu as g, Ss as re, Tt as _, at as v, bs as y, c as ie, kt as ae, ms as oe, ps as b, s as se, u as ce, vs as le, xs as ue } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as de, createPluginCommandMap as fe, createPluginParamDictionary as pe, createTextParamDictionary as me, extractPluginCommandWithExtractor as he, filterPluginSchemaByFn as ge, filterPluginSchemaStringParams as _e, generatePluginAnnotationText as ve, parseDeepRecord as ye, replaceRuntimePluginCommand as be } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as xe } from "jsonpath-js";
var Se = (e, t, n, r, i, a) => {
	if (e.code === 357) return we(e, t, n, i, a);
	let o = f(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: Ce(e)
	};
}, Ce = (e) => `code:${e.code}`, we = (e, t, n, r, i) => {
	let a = f(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${Te(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, Te = (e) => `${e.commandName}.${e.argTitle}`, Ee = (e, t, n, r) => t.flatMap(((t) => De(e, t, n, r))), De = (e, t, n, r) => t.commands.filter(ke).map(((i) => Se(i, t.eventId, e, r, n, [t.name]))), Oe = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => Se(a, e.eventId, t, n, r, [i])));
})), ke = (e) => e.value.length > 0, Ae = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), je = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), Me = (e, t, n, r, i) => {
	let a = Array.from(Pe(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(Ne);
}, Ne = (e) => e !== null && e.key.length > 0, Pe = (e, t, n, r) => {
	let i = Fe(e), a = r.map(Ie), o = Le(t), s = Re(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, Fe = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), Ie = (e) => b(e, x), Le = (e) => le(e, x), Re = (e) => ue(e, x), x = ({ list: e }) => e.filter(ze).map(((e) => e.parameters[1])), ze = (e) => e.code === 320 || e.code === 325 || e.code === 324, S = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Be(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Be = (e) => ne(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), Ve = (e) => S(e, [
	"name",
	"nickname",
	"profile"
]), He = (e) => S(e, ["name"]), Ue = (e) => S(e, ["name"]), We = (e) => S(e, [
	"name",
	"description",
	"message1",
	"message2"
]), Ge = (e) => S(e, ["name", "description"]), Ke = (e) => S(e, ["name", "description"]), qe = (e) => S(e, ["name", "description"]), Je = (e) => S(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), Ye = (e, t, n, r) => C(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), C = (e, t, n, r) => e.map(((e) => Xe(e, t, n, r))), Xe = (e, t, n, r) => ({
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
}))), w = (e, t, n, r, i, a) => {
	let o = f(t[r]);
	return {
		filename: n,
		id: 0,
		uuid: i(o),
		baseText: o,
		kind: a(r),
		dataKey: `${e}.${r}`
	};
}, Qe = (e, t, n, r, i, a) => [
	...tt(t.basic, e, n, r),
	...$e(t.commands, e, n, i),
	...et(t.messages, e, n, a),
	...nt(t.params, e, n, ((e) => `params.${e}`))
], $e = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => w("commands", e, t, i, n, r))), et = (e, t, n, r) => (/* @__PURE__ */ "alwaysDash.commandRemember.touchUI.bgmVolume.bgsVolume.meVolume.seVolume.possession.expTotal.expNext.saveMessage.loadMessage.file.autosave.partyName.emerge.preemptive.surprise.escapeStart.escapeFailure.victory.defeat.obtainExp.obtainGold.obtainItem.levelUp.obtainSkill.useItem.criticalToEnemy.criticalToActor.actorDamage.actorRecovery.actorGain.actorLoss.actorDrain.actorNoDamage.actorNoHit.enemyDamage.enemyRecovery.enemyGain.enemyLoss.enemyDrain.enemyNoDamage.enemyNoHit.evasion.magicEvasion.magicReflection.counterAttack.substitute.buffAdd.debuffAdd.buffRemove.actionFailure".split(".")).filter(((t) => e[t] !== "")).map(((i) => w("messages", e, t, i, n, r))), tt = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => w("basic", e, t, i, n, r))), nt = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => w("params", e, t, i, n, r))), rt = (e, t, n, r) => [
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
	...Qe(t, e.terms, r, ((e) => `basic.${e}`), ((e) => `commands.${e}`), ((e) => `messages.${e}`)),
	...T(t, e.elements, "elements", n.elements, r),
	...T(t, e.equipTypes, "equipTypes", n.equipTypes, r),
	...T(t, e.weaponTypes, "weaponTypes", n.weaponTypes, r),
	...T(t, e.armorTypes, "armorTypes", n.armorTypes, r),
	...T(t, e.skillTypes, "skillTypes", n.skillTypes, r)
], T = (e, t, n, r, i) => t.filter(((e) => e.length > 0)).map(((t, a) => {
	let o = f(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), it = (e, t) => {
	let n = E(e.actors, Ve), r = st(e.armors), i = E(e.classes, Ue), a = E(e.enemies, He), o = E(e.items, Ge), s = E(e.mapInfos, ((e) => e)), c = E(e.skills, We), l = E(e.states, Je), ee = E(e.weapons, Ke), u = ct(e.commonEvents, t), d = lt(e.troops, t), f = ut(e.mapFiles, t), te = at([
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		ee,
		d,
		u
	]).concat(ot(e.mapFiles));
	return {
		value: {
			eventData: {
				commonEvents: u.data,
				troops: d.data.flat()
			},
			mapFiles: f,
			mainData: {
				actors: n.data,
				armors: r.data,
				classes: i.data,
				enemies: a.data,
				items: o.data,
				skills: c.data,
				states: l.data,
				weapons: ee.data
			}
		},
		errors: te
	};
}, E = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), at = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), ot = (e) => [...!1 === e.info.success ? [{
	fileName: e.info.filename,
	error: e.info.message
}] : [], ...e.invalidMaps.map(((e) => ({
	fileName: e.filename,
	error: e.message
})))], st = (e) => E(e, qe), ct = (e, t) => E(e, ((e) => t.extractCommonEventText(e))), lt = (e, t) => E(e, ((e) => t.extractBattleText(e))), ut = (e, t) => {
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
}, dt = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, ft = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, pt = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, D = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, mt = (e, t) => {
	let n = ht(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: _t(vt(n, t)),
		values: n.map(gt)
	})));
}, ht = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, gt = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), _t = (e) => [
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
].filter(((e) => e !== null)), vt = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
	isBoolean: e.isBoolean && ft(i.value),
	isNumber: e.isNumber && pt(i.value),
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
	isScript: e.isScript && v(i.value)
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
}), yt = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(xt), ...e.map.events.map(bt).flat()]
}), bt = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), xt = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), St = (e, t) => ({
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
})).filter(Ct), Ct = (e) => e.note.length > 0 || e.main.length > 0, wt = (e, t) => {
	let n = Nt(e.value.mainData, t), r = Pt(e.value.mapFiles.validMaps, t);
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
				eventData: e.value.eventData
			}
		}
	};
}, Tt = (e, t) => {
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
}, Et = (e, t) => kt(e, D(Mt(e, t))), Dt = (e, t) => D(At(e, t)), Ot = (e, t) => Tt(e, Dt(e, t)), kt = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => St(e, r)))
		})
	};
	var n, r;
})), At = (e, t) => mt(jt(e), t), jt = (e) => [
	k(r, e.actors),
	k(s, e.skills),
	k(n, e.items),
	k(i, e.weapons),
	k(a, e.armors),
	k(d, e.classes),
	k(t, e.states),
	k(o, e.enemies)
], k = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), Mt = (e, t) => mt(e.map(yt), t), Nt = (e, t) => {
	let n = At(e, t), r = D(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: Tt(e, r)
	};
}, Pt = (e, t) => {
	let n = Mt(e, t);
	return {
		noteSummary: n,
		validMaps: kt(e, D(n))
	};
}, Ft = (e, t) => e.params.filter(It).map(((n) => Rt(e.pluginName, n, t))).filter(((e) => e !== void 0)), A = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && v(e)), It = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Lt(e) && !!A(e.value), Lt = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", Rt = (e, t, n) => {
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
}, zt = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Bt = (e) => {
	let t = de(e);
	return { extractArgs(e, n) {
		let r = he(e, t, n);
		return r.args.map(((e) => zt(r, e)));
	} };
}, Vt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Ht = (e) => {
	let t = e.filter(Ut).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Ut = (e) => e.code === 401 && !!e.speaker && !h(e.speaker), Wt = (e, t, n, r, i, a, o) => {
	let s = wt(it(e.data, o), e);
	return qt(e.data.actors.data, e.system, t, s, n, r, i, a);
}, Gt = Wt, Kt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], qt = (c, l, u, f, te, p, m, h) => {
	let { eventData: ne, mainData: g, mapFiles: _ } = f.data.value;
	return {
		speakers: (v = f.data.value, y = m, Ht(Vt(v)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: y(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Kt(f),
		pluginParams: u.flatMap(((e) => Ft(e, m))),
		map: Jt(_, m, h),
		commonEvents: Ee(e, ne.commonEvents, m, h),
		troops: Oe(ne.troops, ee, h, m),
		armors: C(g.armors, a, p, m),
		system: Xt(l, m, te),
		actors: {
			texts: C(g.actors, r, p, m),
			controlChars: re(c)
		},
		classes: C(g.classes, d, p, m),
		enemies: C(g.enemies, o, p, m),
		items: C(g.items, n, p, m),
		skills: C(g.skills, s, p, m),
		states: Ye(g.states, t, p, m),
		weapons: C(g.weapons, i, p, m)
	};
	var v, y;
}, Jt = (e, t, n) => e.validMaps.map(((e) => Yt(e, t, n))).flat(3), Yt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = dt(e);
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
	}))), e.commands.filter(ke).map(((o) => Se(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Xt = (e, t, n) => {
	if (e.system) {
		let r = se(e.system);
		return {
			gameTitle: e.system.gameTitle,
			filename: l,
			texts: rt(r, l, n, t)
		};
	}
	return {
		gameTitle: "",
		filename: l,
		texts: []
	};
}, Zt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: Qt(i, a),
		actorTexts: Me(e, t, n, r, o)
	};
}, Qt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), $t = (e) => {
	let t = D(e);
	return Array.from(t);
}, j = "HonyakuEx", M = (e, t) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: tn(e)
}), en = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), tn = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		an("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		en(j, "Setup", t),
		en(j, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, nn = (e) => [
	an("プラグインコマンド書き換えプラグイン"),
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
].join("\n"), rn = (e) => [{
	name: `${e.outputDirectory}/${j}`,
	description: e.description,
	status: !0,
	parameters: {}
}, {
	name: `${e.outputDirectory}/${e.dictionaryName}`,
	description: e.description,
	status: !0,
	parameters: {}
}], an = (e) => ve({
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
}), on = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, sn = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), cn = (e, t = c) => [{
	data: e,
	filename: t
}], ln = (e) => dn(un(e)), un = (e) => e.reduce(((e, t) => {
	let n = fn(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), dn = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), fn = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), pn = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, mn = (e) => {
	let t = [
		N(e.actors.texts),
		N(e.skills),
		N(e.items),
		N(e.weapons),
		N(e.armors),
		N(e.classes),
		N(e.states),
		N(e.enemies)
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
}, N = (e) => e.map(((e) => [e.main, e.note])), hn = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => _n(e, t, n))), gn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, _n = (e, t, n) => {
	let r = g(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: gn[e.code],
		dataId: m(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, vn = (e, t, n) => b(e.map, ((e, r, i) => ({
	...yn(e),
	commands: hn(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), yn = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, bn = (e, t, n) => oe(e, ((e, r, i) => ({
	commands: hn(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), xn = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, P = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, F = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, I = (e, t) => {
	let n = (e) => t.replaceText(e), r = _(e.note, t), i = P(e.name, n), a = P(e.nickname, n), o = P(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, L = (e, t) => {
	let n = _(e.note, t), r = F(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, R = (e, t) => {
	let n = _(e.note, t), r = F(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, z = (e, t) => {
	let n = _(e.note, t), r = F(e.name, t), i = F(e.description, t), a = F(e.message1, t), o = F(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, B = (e, t) => {
	let n = _(e.note, t), r = F(e.name, t), i = F(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, V = (e, t) => {
	let n = _(e.note, t), r = F(e.name, t), i = F(e.message1, t), a = F(e.message2, t), o = F(e.message3, t), s = F(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, Sn = (e, t) => {
	switch (e.code) {
		case 101: return wn(e, t);
		case 102: return En(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return Cn(e, t);
		case 320:
		case 324:
		case 325: return Tn(e, t);
		default: return e;
	}
}, Cn = (e, t) => {
	let n = P(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, wn = (e, t) => {
	let n = e.parameters[4] ? P(e.parameters[4], t) : "";
	return te({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, Tn = (e, t) => {
	let n = P(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, En = (e, t) => {
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
}, Dn = (e, t, n = "\n") => On(e, ((e) => t.get(e)), n), On = (e, t, n = "\n") => ae(e.note, ((e) => P(e.value, t)), n), kn = (e, t) => An(e, ((e) => xn(e, t))), An = (e, t) => ({
	params: Nn(e.params, ((e) => P(e, t))),
	messages: ie(e.messages, ((e) => P(e, t))),
	basic: jn(e.basic, ((e) => P(e, t))),
	commands: Mn(e.commands, ((e) => P(e, t)))
}), jn = (e, t) => [
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
], Mn = (e, t) => [
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
], Nn = (e, t) => [
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
], Pn = (e, t) => ({
	...e,
	gameTitle: P(e.gameTitle, t),
	currencyUnit: P(e.currencyUnit, t),
	elements: H(e.elements, t),
	skillTypes: H(e.skillTypes, t),
	weaponTypes: H(e.weaponTypes, t),
	armorTypes: H(e.armorTypes, t),
	equipTypes: H(e.equipTypes, t),
	terms: An(e.terms, t)
}), H = (e, t) => e.map(((e) => P(e, t))), Fn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), In = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return Fn(this.joinCommandBodies());
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
		return Fn(this.bodies);
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
}, Ln = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return Rn(r) ? new U(408, r, n) : new In(r, n);
}, Rn = (e) => e.parameters[0] === "選択肢ヘルプ", zn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new U(401, r, n);
}, Bn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new In(r, n);
}, Vn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => W(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new U(405, r, n);
}, Hn = {
	101: (e, t, n) => n.showMessage(zn(e, t), t, e),
	355: (e, t, n) => n.script(Bn(e, t), t, e),
	108: (e, t, n) => n.comment(Ln(e, t), t, e),
	105: (e, t, n) => n.showScrollingText(Vn(e, t), t, e)
}, Un = (e) => Hn[e], Wn = (e, t, n, r) => {
	if (e.code === 401 || e.code === 405 || e.code === 408) return;
	let i = Un(e.code);
	return i ? i(n, t, r) : e.code === 102 ? Gn(e) : e.code === 320 || e.code === 324 || e.code === 325 ? Kn(e) : e.code === 655 ? void 0 : e;
}, Gn = (e) => ({
	code: 102,
	indent: e.indent,
	parameters: [
		e.parameters[0].map(((e) => e.trimEnd())),
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Kn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), qn = (e) => ({
	code: 355,
	indent: e.header.indent,
	parameters: [e.getBodyText().trimEnd()]
}), Jn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 401,
		indent: e.header.indent,
		parameters: [t]
	};
	return [Xn(e.header), n];
}, Yn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 405,
		indent: e.header.indent,
		parameters: [t]
	};
	return [e.header, n];
}, Xn = (e) => {
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
			script: qn,
			showMessage: Jn,
			showScrollingText: Yn
		};
		return e.map(((n, r) => n.code === 357 ? n : Wn(n, r, e, t))).filter(((e) => e !== void 0)).flat();
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : Sn(e, n)));
}, Zn = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: G(e.list, t)
	})))
}), Qn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: G(e.list, t)
}), $n = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: G(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), er = (e, t) => nr(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), tr = (e, t) => nr(e, t), nr = (e, t) => ({
	note: _(e.note, t),
	displayName: F(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: _(e.note, t),
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
}), rr = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, ir = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => rr(e, t)))
}), ar = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? ir(e, t) : null))
}), or = (e, t) => e.map(((e) => rr(e, t))), sr = (e, t) => e.map(((e) => ir(e, t))), cr = (e) => lr(e, (() => [])), K = (e, t) => lr(e, t), lr = (e, t) => e.flatMap(((n, r) => ur(n, r, e, t))).filter(((e) => e !== null)), ur = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return je(e);
	let i = Un(e.code);
	if (i) {
		let e = i(n, t, dr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Ae(e) : null;
}, dr = {
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
}, fr = (e) => e.list.filter(mr), pr = (e) => e.pages.flatMap(((e) => e.list.filter(mr))), mr = (e) => e.code === 357, hr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: K(e.list, t)
}), gr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: K(n.list, t)
}))), _r = (e, t = () => []) => ({
	note: e.note,
	noteItems: p(e.note),
	displayedName: e.displayName,
	events: vr(e, t)
}), vr = (e, t) => b(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: K(e.list, t),
	note: r.note,
	noteItems: p(r.note),
	name: r.name
}))), q = (e, t) => `${e}:${t}`, yr = (e) => q(e.parameters[0], e.parameters[1]), br = (e) => [
	...e.commonEvents.data.flatMap(fr),
	...e.troops.data.flatMap(pr),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => y(e, ((e) => e.list.filter(mr))))(e.map).flat(2)))
], xr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = yr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, J = (e, t) => A(e.default), Sr = (e, t, n = J) => {
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
}, Cr = (e, t = J) => ge(_e(e), ((e, n) => Sr(e, n, t))), wr = (e, t, n = J) => pe(e, Cr(t, n)), Tr = (e, t = J) => e.map(((e) => wr(e.pluginName, e.schema, t))), Er = (e, t = J) => Tr(e, t), Dr = (e, t, n = J) => {
	let r = Er(t, n), i = Or(e);
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
}, Or = (e) => xr(br(e)), kr = (e, t, n = J) => {
	let r = Er(t, n), i = Or(e);
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
}, Ar = (e) => e.kind.endsWith("[]"), jr = (e) => Ar(e.attr), Mr = (e) => e.kind === "struct", Nr = (e) => e.attr.kind === "struct[]", Pr = (e) => Ir[e.kind.replace("[]", "")].type === "number", Fr = (e) => Ir[e.kind.replace("[]", "")].type === "string", Y = {
	type: "string",
	hasText: !0
}, X = {
	type: "number",
	hasText: !1
}, Z = {
	type: "number",
	hasText: !1
}, Ir = {
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
function Lr(e) {
	return Rr(e, ((e) => !0), ((e) => !0));
}
var Rr = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (Mr(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (Nr(e)) i.push(e);
		else if (jr(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function zr(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var Br = (e) => new Map(e.map(((e) => [e.struct, Lr(e.params)]))), Vr = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Hr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Ur = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Wr(e, t, n, r) {
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
					objectSchema: zr(e.scalars),
					name: n,
					scalarArrays: Hr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Vr(e.scalars, t) : void 0
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
var Gr = (e, t, n, r = Ur) => Wr(e.attr.struct, `${t}["${e.name}"]`, n, r), Kr = (e, t, n, r = Ur) => Wr(e.attr.struct, `${t}["${e.name}"][*]`, n, r), qr = (e, t, n, r) => ((e) => Mr(e.attr))(n) ? Xr(e, n, r) : Nr(n) ? Zr(e, n, r) : jr(n) ? Jr(e, t, n) : Yr(e, t, n), Jr = (e, t, n) => ({
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
}), Yr = (e, t, n) => ({
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
}), Xr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Gr(t, "$", n)
}), Zr = (e, t, n) => ({
	structArrays: Kr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Qr = (e, t) => t.map(((t) => $r(e, t))).flat(3), $r = (e, t) => [
	t.top ? ei(t, e, t.top, "") : [],
	t.structs.map(((n) => ei(t, e, n))),
	t.structArrays.map(((n) => ei(t, e, n)))
], ei = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return Fr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : Pr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), ti = (e, t) => {
	let n = ni(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, ni = (e, t) => {
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
	let i = ri(e.scalarArrays, e.name, t, n, r);
	return e.scalarsPath ? {
		bundleName: e.name,
		arrays: i,
		scalar: ii(e.scalarsPath, e.objectSchema, t, n, r)
	} : {
		bundleName: e.name,
		arrays: i
	};
}, ri = (e, t, n, r, i) => e.flatMap(((e) => {
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
})), ii = (e, t, n, r, i) => {
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
}, ai = (e, t, n, r) => ({
	pluginName: e,
	commandName: t.command,
	desc: t.desc ?? "",
	text: t.text ?? "",
	extractors: oi(t, n, r)
}), oi = (e, t, n) => e.args.map(((r) => ti(qr("args", e.command, r, t), n))), si = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Qr(e, t.extractors)
}), ci = (e, t) => {
	let n = Br(e.schema.structs);
	return li(e.pluginName, e.schema.commands, n, t);
}, li = (e, t, n, r) => t.map(((t) => [ui(e, t.command), ai(e, t, n, r)])), ui = (e, t) => `${e}:${t}`, di = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? si(ye(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, fi = (e) => new hi(new Map(e)), pi = () => new hi(/* @__PURE__ */ new Map()), mi = (e) => {
	let t = e.flatMap(((e) => ci(e, ((e) => new xe(e)))));
	return new hi(new Map(t));
}, hi = class {
	_commandMap;
	constructor(e) {
		this._commandMap = e;
	}
	pluginCommandKeys() {
		return Array.from(this._commandMap.keys());
	}
	extractMapTexts(e) {
		return _r(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return gr(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return hr(e, ((e) => this.extractArgs(e)));
	}
	extractArgs(e) {
		let t = di(e, this._commandMap);
		return t.args.filter(gi).map(((e) => ({
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
}, gi = (e) => typeof e.value == "string", _i = (e) => ({
	key: "battlerName",
	image: e.battlerName,
	id: e.id
}), vi = (e, t, n) => ({
	folder: n,
	key: t,
	image: e[t],
	id: e.id
}), yi = (e) => [
	vi(e, "faceName", "faces"),
	vi(e, "characterName", "characters"),
	vi(e, "battlerName", "sv_actors")
], bi = (e, t) => ({
	tilesets: e.tilesets,
	animations: e.animations,
	actors: $(e.actors, ((e) => I(e, t))),
	armors: $(e.armors, ((e) => B(e, t))),
	classes: $(e.classes, ((e) => R(e, t))),
	commonEvents: $(e.commonEvents, ((e) => Qn(e, t))),
	enemies: $(e.enemies, ((e) => L(e, t))),
	items: $(e.items, ((e) => B(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => z(e, t))),
	states: $(e.states, ((e) => V(e, t))),
	troops: $(e.troops, ((e) => Zn(e, t))),
	weapons: $(e.weapons, ((e) => B(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: tr(e.map, t)
		})))
	}
}), $ = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), xi = (e, t, n, r) => {
	let i = wt(it(e, n), {
		audioFiles: t.audioFiles,
		imageFiles: t.imageFiles,
		otherFiles: t.otherFiles
	});
	return {
		data: bi(e, Si(i.nonTextNoteKeys, r)),
		note: i
	};
}, Si = (e, t) => ({
	pluginCommand: (e) => t.pluginCommand(e),
	scriptCommand: (e) => t.scriptCommand(e),
	replaceText: (e) => t.replaceText(e),
	isReplaceTargetNote: (n) => !!e.has(n.key) && t.isReplaceTargetNote(n)
}), Ci = (e, t) => tr(e, {
	replaceText: (e) => t.textDictionary.get(e),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), wi = (e, t) => {
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
		troops: e.troops.map(((e) => Zn(e, n))),
		weapons: e.weapons.map(((e) => B(e, n))),
		commonEvents: e.commonEvents.map(((e) => Qn(e, n)))
	};
}, Ti = (e, t) => u(Ei(e, t)), Ei = (e, t) => xi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}).data, Di = (e) => me(e, ((e) => e.default.length === 0 || A(e.default))), Oi = (e, t, n) => {
	let r = Mi(e.data, e.assetBundle, e.textKeys, [], t, n), i = e.dictionary.map(((t) => ({
		locale: t.locale,
		dictionary: Ni(e.data, e.system, r.note, t.dictionary, n)
	})));
	return {
		main: r.data,
		dictionaries: i
	};
}, ki = (e, t, n) => {
	let r = ji(e, t, n);
	return {
		dataJSON: u(r.main),
		scriptJS: [M(r.aux, {
			description: "書き換え用辞書データ",
			outputDirectory: "translation",
			dictionaryName: "TranslationDictionary"
		}), M(r.originLike, {
			description: "翻訳前のオリジナル辞書データ",
			outputDirectory: "translation",
			dictionaryName: "OriginalDictionary"
		})]
	};
}, Ai = (e, t, n) => {
	let r = ji(e, t, n);
	return [...u(r.main), ...cn(r.aux)];
}, ji = (e, t, n) => {
	let { data: r, dictionary: i, system: a } = e, o = Mi(r, e.assetBundle, e.textKeys, [], t, n), s = Array.from(i.keys()).map(((e) => [e, e]));
	return {
		main: o.data,
		aux: Ni(r, a, o.note, i, n),
		originLike: Ni(r, a, o.note, new Map(s), n)
	};
}, Mi = (e, t, n, r, i, a) => {
	let o = ((e) => fe(e.map(Di)))(r);
	return xi(e, t, i, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : a(t);
		},
		isReplaceTargetNote: (e) => n.has(e.key),
		pluginCommand: (e) => be(e, o, a),
		scriptCommand: (e) => e
	});
}, Ni = (e, t, n, r, i) => {
	let a = Zt(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((e) => e.map)), r, ((e) => i(e.trimEnd())));
	return {
		systemTexts: ce(se(t), ((e) => {
			let t = e.trimEnd();
			return r.get(t);
		})),
		actorTexts: a.actorTexts,
		targetNoteKeys: $t([...n.dataNoteSummary, ...n.mapNoteSummary]),
		textDictionary: a.textDictionary
	};
};
export { L as $, je as $t, gr as A, Mt as At, Qn as B, Be as Bt, yr as C, Ft as Ct, xr as D, Dt, Cr as E, wt as Et, or as F, it as Ft, Zn as G, He as Gt, G as H, Ve as Ht, rr as I, rt as It, On as J, Je as Jt, Pn as K, Ge as Kt, ar as L, Xe as Lt, _r as M, pt as Mt, cr as N, D as Nt, J as O, Ot, K as P, mt as Pt, R as Q, Ae as Qt, ir as R, C as Rt, q as S, zt as St, wr as T, A as Tt, tr as U, qe as Ut, $n as V, S as Vt, er as W, Ue as Wt, Sn as X, Me as Xt, Dn as Y, Ke as Yt, I as Z, Pe as Zt, Dr as _, Zt as _t, Oi as a, bn as at, Or as b, Gt as bt, Ci as c, pn as ct, yi as d, sn as dt, Oe as en, B as et, _i as f, cn as ft, di as g, M as gt, mi as h, nn as ht, Ai as i, vn as it, hr as j, ft as jt, Sr as k, Et as kt, bi as l, mn as lt, fi as m, rn as mt, Ti as n, ke as nn, V as nt, ki as o, _n as ot, pi as p, on as pt, kn as q, We as qt, ji as r, xn as rt, wi as s, hn as st, Ei as t, Ee as tn, z as tt, xi as u, ln as ut, Er as v, $t as vt, Tr as w, It as wt, br as x, Bt as xt, kr as y, Wt as yt, sr as z, Ye as zt };
