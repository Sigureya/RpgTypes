import { B as e, G as t, H as n, I as r, J as i, R as a, V as o, W as s, Z as c, l, q as u, r as d, z as f } from "./fileio.esm.js";
import { n as p } from "./libs.esm.js";
import { Al as m, Es as h, Mu as g, Nt as _, Pt as ee, Tt as v, at as te, bs as ne, c as re, ds as y, fs as ie, gs as ae, ju as oe, kt as se, s as ce, u as le, vs as ue, ys as de } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as fe, createPluginCommandMap as pe, createPluginParamDictionary as me, createTextParamDictionary as he, extractPluginCommandWithExtractor as ge, filterPluginSchemaByFn as _e, filterPluginSchemaStringParams as ve, generatePluginAnnotationText as ye, parseDeepRecord as be, replaceRuntimePluginCommand as xe } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as Se } from "jsonpath-js";
var Ce = (e, t, n, r, i, a) => {
	if (e.code === 357) return Te(e, t, n, i, a);
	let o = p(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: we(e)
	};
}, we = (e) => `code:${e.code}`, Te = (e, t, n, r, i) => {
	let a = p(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${Ee(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, Ee = (e) => `${e.commandName}.${e.argTitle}`, De = (e, t, n, r) => t.flatMap(((t) => Oe(e, t, n, r))), Oe = (e, t, n, r) => t.commands.filter(b).map(((i) => Ce(i, t.eventId, e, r, n, [t.name]))), ke = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => Ce(a, e.eventId, t, n, r, [i])));
})), b = (e) => e.value.length > 0, Ae = (e) => ((e, t) => ({
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
])), Ie = (e) => y(e, x), Le = (e) => ae(e, x), Re = (e) => de(e, x), x = ({ list: e }) => e.filter(ze).map(((e) => e.parameters[1])), ze = (e) => e.code === 320 || e.code === 325 || e.code === 324, S = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Be(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Be = (e) => ee(e.note, ((t, n) => ({
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
	let o = p(t[r]);
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
	let o = p(t);
	return {
		filename: e,
		id: a,
		baseText: o,
		uuid: i(o),
		kind: r,
		dataKey: n
	};
})), it = (e, t) => {
	let n = E(e.actors, Ve), r = st(e.armors), i = E(e.classes, Ue), a = E(e.enemies, He), o = E(e.items, Ge), s = E(e.mapInfos, ((e) => e)), c = E(e.skills, We), l = E(e.states, Je), u = E(e.weapons, Ke), d = ct(e.commonEvents, t), f = lt(e.troops, t), p = ut(e.mapFiles, t), m = at([
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
	]).concat(ot(e.mapFiles));
	return {
		value: {
			eventData: {
				commonEvents: d.data,
				troops: f.data.flat()
			},
			mapFiles: p,
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
}, O = (e, t) => {
	let n = mt(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: gt(_t(n, t)),
		values: n.map(ht)
	})));
}, mt = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, ht = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), gt = (e) => [
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
].filter(((e) => e !== null)), _t = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
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
	isScript: e.isScript && te(i.value)
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
}), vt = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(bt), ...e.map.events.map(yt).flat()]
}), yt = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), bt = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), xt = (e, t) => ({
	eventId: e.eventId,
	name: e.name,
	pageIndex: e.pageIndex,
	commands: e.commands,
	note: e.note,
	noteItems: e.noteItems.filter(t)
}), k = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(St), St = (e) => e.note.length > 0 || e.main.length > 0, A = (e, t) => {
	let n = jt(e.value.mainData, t), r = Mt(e.value.mapFiles.validMaps, t);
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
}, Ct = (e, t) => {
	let n = (e) => t.has(e.key);
	return {
		actors: k(e.actors, n),
		enemies: k(e.enemies, n),
		weapons: k(e.weapons, n),
		armors: k(e.armors, n),
		skills: k(e.skills, n),
		states: k(e.states, n),
		items: k(e.items, n),
		classes: k(e.classes, n)
	};
}, wt = (e, t) => Dt(e, D(At(e, t))), Tt = (e, t) => D(Ot(e, t)), Et = (e, t) => Ct(e, Tt(e, t)), Dt = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => xt(e, r)))
		})
	};
	var n, r;
})), Ot = (e, t) => O(kt(e), t), kt = (e) => [
	j(r, e.actors),
	j(s, e.skills),
	j(n, e.items),
	j(i, e.weapons),
	j(a, e.armors),
	j(f, e.classes),
	j(t, e.states),
	j(o, e.enemies)
], j = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), At = (e, t) => O(e.map(vt), t), jt = (e, t) => {
	let n = Ot(e, t), r = D(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: Ct(e, r)
	};
}, Mt = (e, t) => {
	let n = At(e, t);
	return {
		noteSummary: n,
		validMaps: Dt(e, D(n))
	};
}, Nt = (e, t) => e.params.filter(Pt).map(((n) => It(e.pluginName, n, t))).filter(((e) => e !== void 0)), M = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && te(e)), Pt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Ft(e) && !!M(e.value), Ft = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", It = (e, t, n) => {
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
}, Lt = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Rt = (e) => {
	let t = fe(e);
	return { extractArgs(e, n) {
		let r = ge(e, t, n);
		return r.args.map(((e) => Lt(r, e)));
	} };
}, zt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Bt = (e) => {
	let t = e.filter(Vt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Vt = (e) => e.code === 401 && !!e.speaker && !h(e.speaker), Ht = (e, t, n, r, i, a, o) => {
	let s = A(it(e.data, o), e);
	return Gt(e.data.actors.data, e.system, t, s, n, r, i, a);
}, Ut = Ht, Wt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Gt = (c, l, d, p, m, h, g, _) => {
	let { eventData: ee, mainData: v, mapFiles: te } = p.data.value;
	return {
		speakers: (re = p.data.value, y = g, Bt(zt(re)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: y(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Wt(p),
		pluginParams: d.flatMap(((e) => Nt(e, g))),
		map: Kt(te, g, _),
		commonEvents: De(e, ee.commonEvents, g, _),
		troops: ke(ee.troops, u, _, g),
		armors: C(v.armors, a, h, g),
		system: Jt(l, g, m),
		actors: {
			texts: C(v.actors, r, h, g),
			controlChars: ne(c)
		},
		classes: C(v.classes, f, h, g),
		enemies: C(v.enemies, o, h, g),
		items: C(v.items, n, h, g),
		skills: C(v.skills, s, h, g),
		states: Ye(v.states, t, h, g),
		weapons: C(v.weapons, i, h, g)
	};
	var re, y;
}, Kt = (e, t, n) => e.validMaps.map(((e) => qt(e, t, n))).flat(3), qt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
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
	}))), e.commands.filter(b).map(((o) => Ce(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Jt = (e, t, n) => {
	if (e.system) {
		let r = ce(e.system);
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
}, Yt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: Xt(i, a),
		actorTexts: Me(e, t, n, r, o)
	};
}, Xt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Zt = (e) => {
	let t = D(e);
	return Array.from(t);
}, N = "HonyakuEx", Qt = (e, t) => ({
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
		$t(N, "Setup", t),
		$t(N, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, tn = (e) => [
	rn("プラグインコマンド書き換えプラグイン"),
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
].join("\n"), nn = (e) => [{
	name: `${e.outputDirectory}/${N}`,
	description: e.description,
	status: !0,
	parameters: {}
}, {
	name: `${e.outputDirectory}/${e.dictionaryName}`,
	description: e.description,
	status: !0,
	parameters: {}
}], rn = (e) => ye({
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
}), an = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, on = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), sn = (e, t = c) => [{
	data: e,
	filename: t
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
		...e.speakers,
		...e.commonEvents,
		...e.map,
		...e.troops,
		...e.pluginParams
	];
}, P = (e) => e.map(((e) => [e.main, e.note])), mn = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => gn(e, t, n))), hn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, gn = (e, t, n) => {
	let r = g(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: hn[e.code],
		dataId: oe(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, _n = (e, t, n) => y(e.map, ((e, r, i) => ({
	...vn(e),
	commands: mn(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), vn = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, yn = (e, t, n) => ie(e, ((e, r, i) => ({
	commands: mn(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), bn = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, F = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, I = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, L = (e, t) => {
	let n = (e) => t.replaceText(e), r = v(e.note, t), i = F(e.name, n), a = F(e.nickname, n), o = F(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, R = (e, t) => {
	let n = v(e.note, t), r = I(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, z = (e, t) => {
	let n = v(e.note, t), r = I(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, B = (e, t) => {
	let n = v(e.note, t), r = I(e.name, t), i = I(e.description, t), a = I(e.message1, t), o = I(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, V = (e, t) => {
	let n = v(e.note, t), r = I(e.name, t), i = I(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, H = (e, t) => {
	let n = v(e.note, t), r = I(e.name, t), i = I(e.message1, t), a = I(e.message2, t), o = I(e.message3, t), s = I(e.message4, t);
	return {
		...e,
		name: r,
		message1: i,
		message2: a,
		message3: o,
		message4: s,
		note: n
	};
}, xn = (e, t) => {
	switch (e.code) {
		case 101: return Cn(e, t);
		case 102: return Tn(e, t);
		case 401:
		case 108:
		case 408:
		case 405: return Sn(e, t);
		case 320:
		case 324:
		case 325: return wn(e, t);
		default: return e;
	}
}, Sn = (e, t) => {
	let n = F(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, Cn = (e, t) => {
	let n = e.parameters[4] ? F(e.parameters[4], t) : "";
	return m({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, wn = (e, t) => {
	let n = F(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, Tn = (e, t) => {
	let n = e.parameters[0].map(((e) => F(e, t)));
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
}, En = (e, t, n = "\n") => Dn(e, ((e) => t.get(e)), n), Dn = (e, t, n = "\n") => se(e.note, ((e) => F(e.value, t)), n), On = (e, t) => kn(e, ((e) => bn(e, t))), kn = (e, t) => ({
	params: Mn(e.params, ((e) => F(e, t))),
	messages: re(e.messages, ((e) => F(e, t))),
	basic: An(e.basic, ((e) => F(e, t))),
	commands: jn(e.commands, ((e) => F(e, t)))
}), An = (e, t) => [
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
	t(e[9])
], Nn = (e, t) => ({
	...e,
	gameTitle: F(e.gameTitle, t),
	currencyUnit: F(e.currencyUnit, t),
	elements: U(e.elements, t),
	skillTypes: U(e.skillTypes, t),
	weaponTypes: U(e.weaponTypes, t),
	armorTypes: U(e.armorTypes, t),
	equipTypes: U(e.equipTypes, t),
	terms: kn(e.terms, t)
}), U = (e, t) => e.map(((e) => F(e, t))), Pn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Fn = class {
	header;
	bodies;
	constructor(e, t) {
		this.header = e, this.bodies = t;
	}
	getBodyText() {
		return Pn(this.joinCommandBodies());
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
}, W = class {
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
		return Pn(this.bodies);
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
}, G = (e, t, n, r) => {
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
}, In = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return Ln(r) ? new W(408, r, n) : new Fn(r, n);
}, Ln = (e) => e.parameters[0] === "選択肢ヘルプ", Rn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new W(401, r, n);
}, zn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Fn(r, n);
}, Bn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new W(405, r, n);
}, Vn = {
	101: (e, t, n) => n.showMessage(Rn(e, t), t, e),
	355: (e, t, n) => n.script(zn(e, t), t, e),
	108: (e, t, n) => n.comment(In(e, t), t, e),
	105: (e, t, n) => n.showScrollingText(Bn(e, t), t, e)
}, Hn = (e) => Vn[e], Un = (e, t, n, r) => {
	if (e.code === 401 || e.code === 405 || e.code === 408) return;
	let i = Hn(e.code);
	return i ? i(n, t, r) : e.code === 102 ? Wn(e) : e.code === 320 || e.code === 324 || e.code === 325 ? Gn(e) : e.code === 655 ? void 0 : e;
}, Wn = (e) => ({
	code: 102,
	indent: e.indent,
	parameters: [
		e.parameters[0].map(((e) => e.trimEnd())),
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Gn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [e.parameters[0], e.parameters[1].trimEnd()]
}), Kn = (e) => ({
	code: 355,
	indent: e.header.indent,
	parameters: [e.getBodyText().trimEnd()]
}), qn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 401,
		indent: e.header.indent,
		parameters: [t]
	};
	return [Yn(e.header), n];
}, Jn = (e) => {
	let t = e.getBodyText().trimEnd(), n = {
		code: 405,
		indent: e.header.indent,
		parameters: [t]
	};
	return [e.header, n];
}, Yn = (e) => {
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
}, K = (e, t) => {
	let n = (e) => t.replaceText(e);
	return ((e) => {
		let t = {
			comment: (e) => e.normalizedCommands(),
			script: Kn,
			showMessage: qn,
			showScrollingText: Jn
		};
		return e.map(((n, r) => n.code === 357 ? n : Un(n, r, e, t))).filter(((e) => e !== void 0)).flat();
	})(e).map(((e) => e.code === 357 ? t.pluginCommand(e) : e.code === 355 ? t.scriptCommand(e) : xn(e, n)));
}, Xn = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: K(e.list, t)
	})))
}), Zn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: K(e.list, t)
}), Qn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: K(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), $n = (e, t) => tr(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), er = (e, t) => tr(e, t), tr = (e, t) => ({
	note: v(e.note, t),
	displayName: I(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: v(e.note, t),
		pages: e.pages.map(((e) => ({
			...e,
			list: K(e.list, t)
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
}), nr = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, rr = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => nr(e, t)))
}), ir = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? rr(e, t) : null))
}), ar = (e, t) => e.map(((e) => nr(e, t))), or = (e, t) => e.map(((e) => rr(e, t))), sr = (e) => cr(e, (() => [])), q = (e, t) => cr(e, t), cr = (e, t) => e.flatMap(((n, r) => lr(n, r, e, t))).filter(((e) => e !== null)), lr = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return je(e);
	let i = Hn(e.code);
	if (i) {
		let e = i(n, t, ur);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Ae(e) : null;
}, ur = {
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
}, dr = (e) => e.list.filter(pr), fr = (e) => e.pages.flatMap(((e) => e.list.filter(pr))), pr = (e) => e.code === 357, mr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: q(e.list, t)
}), hr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: q(n.list, t)
}))), gr = (e, t = () => []) => ({
	note: e.note,
	noteItems: _(e.note),
	displayedName: e.displayName,
	events: _r(e, t)
}), _r = (e, t) => y(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: q(e.list, t),
	note: r.note,
	noteItems: _(r.note),
	name: r.name
}))), J = (e, t) => `${e}:${t}`, vr = (e) => J(e.parameters[0], e.parameters[1]), yr = (e) => [
	...e.commonEvents.data.flatMap(dr),
	...e.troops.data.flatMap(fr),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => ue(e, ((e) => e.list.filter(pr))))(e.map).flat(2)))
], br = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = vr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, Y = (e, t) => M(e.default), xr = (e, t, n = Y) => {
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
}, Sr = (e, t = Y) => _e(ve(e), ((e, n) => xr(e, n, t))), Cr = (e, t, n = Y) => me(e, Sr(t, n)), wr = (e, t = Y) => e.map(((e) => Cr(e.pluginName, e.schema, t))), Tr = (e, t = Y) => wr(e, t), Er = (e, t, n = Y) => {
	let r = Tr(t, n), i = Dr(e);
	return r.flatMap(((e) => e.commands.map(((t) => {
		let n = J(e.pluginName, t.commandName);
		return {
			key: n,
			pluginName: e.pluginName,
			commandName: t.commandName,
			argsPath: t.argsPath,
			commands: i.get(n) ?? []
		};
	})))).filter(((e) => e.commands.length > 0));
}, Dr = (e) => br(yr(e)), Or = (e, t, n = Y) => {
	let r = Tr(t, n), i = Dr(e);
	return {
		params: r,
		commandPaths: r.flatMap(((e) => e.commands.map(((t) => {
			let n = J(e.pluginName, t.commandName);
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
}, kr = (e) => e.kind.endsWith("[]"), Ar = (e) => kr(e.attr), jr = (e) => e.kind === "struct", Mr = (e) => e.attr.kind === "struct[]", Nr = (e) => Fr[e.kind.replace("[]", "")].type === "number", Pr = (e) => Fr[e.kind.replace("[]", "")].type === "string", X = {
	type: "string",
	hasText: !0
}, Z = {
	type: "number",
	hasText: !1
}, Q = {
	type: "number",
	hasText: !1
}, Fr = {
	string: X,
	number: {
		type: "number",
		hasText: !1
	},
	boolean: { type: "boolean" },
	armor: Z,
	actor: Z,
	class: Z,
	enemy: Z,
	skill: Z,
	state: Z,
	item: Z,
	weapon: Z,
	common_event: Z,
	switch: Z,
	variable: Z,
	troop: Z,
	multiline_string: X,
	file: {
		type: "string",
		hasText: !1
	},
	"file[]": {
		type: "string",
		hasText: !1
	},
	"multiline_string[]": X,
	"string[]": X,
	combo: X,
	select: X,
	any: X,
	struct: { type: "struct" },
	"actor[]": Q,
	"enemy[]": Q,
	"class[]": Q,
	"skill[]": Q,
	"state[]": Q,
	"item[]": Q,
	"weapon[]": Q,
	"common_event[]": Q,
	"troop[]": Q,
	"armor[]": Q,
	"switch[]": Q,
	"variable[]": Q,
	"number[]": Q
};
function Ir(e) {
	return Lr(e, ((e) => !0), ((e) => !0));
}
var Lr = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (jr(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (Mr(e)) i.push(e);
		else if (Ar(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function Rr(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var zr = (e) => new Map(e.map(((e) => [e.struct, Ir(e.params)]))), Br = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Vr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Hr = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Ur(e, t, n, r) {
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
					objectSchema: Rr(e.scalars),
					name: n,
					scalarArrays: Vr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Br(e.scalars, t) : void 0
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
var Wr = (e, t, n, r = Hr) => Ur(e.attr.struct, `${t}["${e.name}"]`, n, r), Gr = (e, t, n, r = Hr) => Ur(e.attr.struct, `${t}["${e.name}"][*]`, n, r), Kr = (e, t, n, r) => ((e) => jr(e.attr))(n) ? Yr(e, n, r) : Mr(n) ? Xr(e, n, r) : Ar(n) ? qr(e, t, n) : Jr(e, t, n), qr = (e, t, n) => ({
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
}), Jr = (e, t, n) => ({
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
}), Yr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Wr(t, "$", n)
}), Xr = (e, t, n) => ({
	structArrays: Gr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Zr = (e, t) => t.map(((t) => Qr(e, t))).flat(3), Qr = (e, t) => [
	t.top ? $r(t, e, t.top, "") : [],
	t.structs.map(((n) => $r(t, e, n))),
	t.structArrays.map(((n) => $r(t, e, n)))
], $r = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return Pr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : Nr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), ei = (e, t) => {
	let n = ti(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, ti = (e, t) => {
	let n = [], r = e.scalars ? ni(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => ni(e, "struct", t, n))), a = e.structArrays.items.map(((e) => ni(e, "structArray", t, n)));
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
}, ni = (e, t, n, r) => {
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
}), oi = (e, t, n) => e.args.map(((r) => ei(Kr("args", e.command, r, t), n))), si = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Zr(e, t.extractors)
}), ci = (e, t) => {
	let n = zr(e.schema.structs);
	return li(e.pluginName, e.schema.commands, n, t);
}, li = (e, t, n, r) => t.map(((t) => [ui(e, t.command), ai(e, t, n, r)])), ui = (e, t) => `${e}:${t}`, di = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? si(be(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, fi = (e) => new hi(new Map(e)), pi = () => new hi(/* @__PURE__ */ new Map()), mi = (e) => {
	let t = e.flatMap(((e) => ci(e, ((e) => new Se(e)))));
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
		return gr(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return hr(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return mr(e, ((e) => this.extractArgs(e)));
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
		return q(e, ((e) => this.extractArgs(e)));
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
	actors: $(e.actors, ((e) => L(e, t))),
	armors: $(e.armors, ((e) => V(e, t))),
	classes: $(e.classes, ((e) => z(e, t))),
	commonEvents: $(e.commonEvents, ((e) => Zn(e, t))),
	enemies: $(e.enemies, ((e) => R(e, t))),
	items: $(e.items, ((e) => V(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => B(e, t))),
	states: $(e.states, ((e) => H(e, t))),
	troops: $(e.troops, ((e) => Xn(e, t))),
	weapons: $(e.weapons, ((e) => V(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: er(e.map, t)
		})))
	}
}), $ = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), xi = (e, t, n, r) => {
	let i = A(it(e, n), {
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
}), Ci = (e, t) => er(e, {
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
		actors: e.actors.map(((e) => L(e, n))),
		armors: e.armors.map(((e) => V(e, n))),
		classes: e.classes.map(((e) => z(e, n))),
		enemies: e.enemies.map(((e) => R(e, n))),
		items: e.items.map(((e) => V(e, n))),
		skills: e.skills.map(((e) => B(e, n))),
		states: e.states.map(((e) => H(e, n))),
		troops: e.troops.map(((e) => Xn(e, n))),
		weapons: e.weapons.map(((e) => V(e, n))),
		commonEvents: e.commonEvents.map(((e) => Zn(e, n)))
	};
}, Ti = (e, t) => d(Ei(e, t)), Ei = (e, t) => xi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}).data, Di = (e) => he(e, ((e) => e.default.length === 0 || M(e.default))), Oi = (e, t, n) => {
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
		dataJSON: d(r.main),
		scriptJS: [Qt(r.aux, {
			description: "書き換え用辞書データ",
			outputDirectory: "translation",
			dictionaryName: "TranslationDictionary"
		}), Qt(r.originLike, {
			description: "翻訳前のオリジナル辞書データ",
			outputDirectory: "translation",
			dictionaryName: "OriginalDictionary"
		})]
	};
}, Ai = (e, t, n) => {
	let r = ji(e, t, n);
	return [...d(r.main), ...sn(r.aux)];
}, ji = (e, t, n) => {
	let { data: r, dictionary: i, system: a } = e, o = Mi(r, e.assetBundle, e.textKeys, [], t, n), s = Array.from(i.keys()).map(((e) => [e, e]));
	return {
		main: o.data,
		aux: Ni(r, a, o.note, i, n),
		originLike: Ni(r, a, o.note, new Map(s), n)
	};
}, Mi = (e, t, n, r, i, a) => {
	let o = ((e) => pe(e.map(Di)))(r);
	return xi(e, t, i, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : a(t);
		},
		isReplaceTargetNote: (e) => n.has(e.key),
		pluginCommand: (e) => xe(e, o, a),
		scriptCommand: (e) => e
	});
}, Ni = (e, t, n, r, i) => {
	let a = Yt(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((e) => e.map)), r, ((e) => i(e.trimEnd())));
	return {
		systemTexts: le(ce(t), ((e) => {
			let t = e.trimEnd();
			return r.get(t);
		})),
		actorTexts: a.actorTexts,
		targetNoteKeys: Zt([...n.dataNoteSummary, ...n.mapNoteSummary]),
		textDictionary: a.textDictionary
	};
};
export { R as $, je as $t, hr as A, At, Zn as B, Be as Bt, vr as C, Nt as Ct, br as D, Tt as Dt, Sr as E, A as Et, ar as F, it as Ft, Xn as G, He as Gt, K as H, Ve as Ht, nr as I, rt as It, Dn as J, Je as Jt, Nn as K, Ge as Kt, ir as L, Xe as Lt, gr as M, pt as Mt, sr as N, D as Nt, Y as O, Et as Ot, q as P, O as Pt, z as Q, Ae as Qt, rr as R, C as Rt, J as S, Lt as St, Cr as T, M as Tt, er as U, qe as Ut, Qn as V, S as Vt, $n as W, Ue as Wt, xn as X, Me as Xt, En as Y, Ke as Yt, L as Z, Pe as Zt, Er as _, Yt as _t, Oi as a, yn as at, Dr as b, Ut as bt, Ci as c, fn as ct, yi as d, on as dt, ke as en, V as et, _i as f, sn as ft, di as g, Qt as gt, mi as h, tn as ht, Ai as i, _n as it, mr as j, ft as jt, xr as k, wt as kt, bi as l, pn as lt, fi as m, nn as mt, Ti as n, b as nn, H as nt, ki as o, gn as ot, pi as p, an as pt, On as q, We as qt, ji as r, bn as rt, wi as s, mn as st, Ei as t, De as tn, B as tt, xi as u, cn as ut, Tr as v, Zt as vt, wr as w, Pt as wt, yr as x, Rt as xt, Or as y, Ht as yt, or as z, Ye as zt };
