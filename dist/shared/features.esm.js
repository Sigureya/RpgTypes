import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as ee } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { $i as p, Ki as m, Nt as h, Pt as te, Tt as g, Zi as ne, at as re, c as _, ds as v, ea as ie, fc as ae, kt as oe, pc as se, qi as ce, s as le, sa as ue, ta as de, u as fe } from "./rmmz.esm.js";
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
}, Ce = (e) => `${e.commandName}.${e.argTitle}`, we = (e, t, n, r) => t.flatMap(((t) => Te(e, t, n, r))), Te = (e, t, n, r) => t.commands.filter(b).map(((i) => y(i, t.eventId, e, r, n, [t.name]))), Ee = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => y(a, e.eventId, t, n, r, [i])));
})), b = (e) => e.value.length > 0, De = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), Oe = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), ke = (e, t, n, r, i) => {
	let a = Array.from(je(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(Ae);
}, Ae = (e) => e !== null && e.key.length > 0, je = (e, t, n, r) => {
	let i = Me(e), a = r.map(Ne), o = Pe(t), s = Fe(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, Me = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), Ne = (e) => m(e, Ie), Pe = (e) => ne(e, Ie), Fe = (e) => ie(e, Ie), Ie = ({ list: e }) => e.filter(Le).map(((e) => e.parameters[1])), Le = (e) => e.code === 320 || e.code === 325 || e.code === 324, x = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Re(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Re = (e) => te(e.note, ((t, n) => ({
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
})), T = (e, t) => {
	let n = E(e.actors, ze), r = it(e.armors), i = E(e.classes, Ve), a = E(e.enemies, Be), o = E(e.items, Ue), s = E(e.mapInfos, ((e) => e)), c = E(e.skills, He), l = E(e.states, Ke), u = E(e.weapons, We), d = at(e.commonEvents, t), ee = ot(e.troops, t), f = st(e.mapFiles, t), p = nt([
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
	]).concat(rt(e.mapFiles));
	return {
		value: {
			eventData: {
				commonEvents: d.data,
				troops: ee.data.flat()
			},
			mapFiles: f,
			system: {
				message: "",
				system: null
			},
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
		errors: p
	};
}, E = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), nt = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), rt = (e) => [...!1 === e.info.success ? [{
	fileName: e.info.filename,
	error: e.info.message
}] : [], ...e.invalidMaps.map(((e) => ({
	fileName: e.filename,
	error: e.message
})))], it = (e) => E(e, Ge), at = (e, t) => E(e, ((e) => t.extractCommonEventText(e))), ot = (e, t) => E(e, ((e) => t.extractBattleText(e))), st = (e, t) => {
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
}, D = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, O = (e, t) => {
	let n = dt(e);
	return Array.from(n.entries()).map((([e, n]) => ({
		key: e,
		kinds: pt(mt(n, t)),
		values: n.map(ft)
	})));
}, dt = (e) => {
	let t = e.flatMap(((e) => e.notes.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: t.name,
		soruce: e.source
	})))));
	return Map.groupBy(t, ((e) => e.key));
}, ft = (e) => ({
	value: e.value,
	id: e.id,
	soruce: e.soruce,
	name: e.name
}), pt = (e) => [
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
].filter(((e) => e !== null)), mt = (e, { audioFiles: t, imageFiles: n, otherFiles: r }) => e.reduce(((e, i) => ({
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
	isScript: e.isScript && re(i.value)
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
}), ht = (e) => ({
	source: e.filename,
	notes: [...e.map.noteItems.map(_t), ...e.map.events.map(gt).flat()]
}), gt = (e) => e.noteItems.map(((t) => ({
	id: e.eventId,
	key: t.key,
	value: t.value,
	name: e.name
}))), _t = (e) => ({
	id: 0,
	key: e.key,
	value: e.value,
	name: ""
}), vt = (e, t) => ({
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
})).filter(yt), yt = (e) => e.note.length > 0 || e.main.length > 0, bt = (e, t) => {
	let n = kt(e.value.mainData, t), r = At(e.value.mapFiles.validMaps, t);
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
		actors: k(e.actors, n),
		enemies: k(e.enemies, n),
		weapons: k(e.weapons, n),
		armors: k(e.armors, n),
		skills: k(e.skills, n),
		states: k(e.states, n),
		items: k(e.items, n),
		classes: k(e.classes, n)
	};
}, St = (e, t) => Tt(e, D(Ot(e, t))), Ct = (e, t) => D(Et(e, t)), wt = (e, t) => xt(e, Ct(e, t)), Tt = (e, t) => e.map(((e) => {
	return {
		filename: e.filename,
		editingName: e.editingName,
		map: (n = e.map, r = (e) => t.has(e.key), {
			displayedName: n.displayedName,
			note: n.note,
			noteItems: n.noteItems.filter(r),
			events: n.events.map(((e) => vt(e, r)))
		})
	};
	var n, r;
})), Et = (e, t) => O(Dt(e), t), Dt = (n) => [
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
}), Ot = (e, t) => O(e.map(ht), t), kt = (e, t) => {
	let n = Et(e, t), r = D(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: xt(e, r)
	};
}, At = (e, t) => {
	let n = Ot(e, t);
	return {
		noteSummary: n,
		validMaps: Tt(e, D(n))
	};
}, jt = (e, t) => e.params.filter(Nt).map(((n) => Ft(e.pluginName, n, t))).filter(((e) => e !== void 0)), Mt = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && re(e)), Nt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Pt(e) && !!Mt(e.value), Pt = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", Ft = (e, t, n) => {
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
}, It = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Lt = (e) => {
	let t = pe(e);
	return { extractArgs(e, n) {
		let r = he(e, t, n);
		return r.args.map(((e) => It(r, e)));
	} };
}, Rt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], zt = (e) => {
	let t = e.filter(Bt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Bt = (e) => e.code === 401 && !!e.speaker && !ue(e.speaker), Vt = (e, t, n, r, i, a, o) => {
	let s = bt(T(e.data, o), e);
	return Wt(e.data.actors.data, t, s, n, r, i, a);
}, Ht = Vt, Ut = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Wt = (c, l, d, f, p, m, h) => {
	let { eventData: te, mainData: g, mapFiles: ne, system: re } = d.data.value;
	return {
		speakers: (_ = d.data.value, v = m, zt(Rt(_)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: v(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Ut(d),
		pluginParams: l.flatMap(((e) => jt(e, m))),
		map: Gt(ne, m, h),
		commonEvents: we(ee, te.commonEvents, m, h),
		troops: Ee(te.troops, n, h, m),
		armors: S(g.armors, r, p, m),
		system: qt(re, m, f),
		actors: {
			texts: S(g.actors, t, p, m),
			controlChars: de(c)
		},
		classes: S(g.classes, i, p, m),
		enemies: S(g.enemies, e, p, m),
		items: S(g.items, o, p, m),
		skills: S(g.skills, a, p, m),
		states: qe(g.states, s, p, m),
		weapons: S(g.weapons, u, p, m)
	};
	var _, v;
}, Gt = (e, t, n) => e.validMaps.map(((e) => Kt(e, t, n))).flat(3), Kt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
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
	}))), e.commands.filter(b).map(((o) => y(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), qt = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: tt(e.system, l, n, t)
} : {
	gameTitle: "",
	filename: l,
	texts: []
}, Jt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: Yt(i, a),
		actorTexts: ke(e, t, n, r, o)
	};
}, Yt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Xt = (e) => {
	let t = D(e);
	return Array.from(t);
}, j = "HonyakuEx", Zt = (e, t) => ({
	dir: "js/plugins",
	subDir: t.outputDirectory,
	filename: `${t.dictionaryName}.js`,
	text: $t(e)
}), Qt = (e, t, n) => [
	"(() => {",
	"const data = ",
	`${JSON.stringify(n, null, 2)};`,
	"PluginManager.callCommand(null,",
	`"${e}",`,
	`"${t}",`,
	"data",
	");",
	"})();"
].join("\n"), $t = (e) => {
	let t = {
		actorTexts: e.actorTexts,
		textDictionary: e.textDictionary,
		targetNoteKeys: e.targetNoteKeys
	};
	return [
		nn("辞書データプラグイン。JSONの代わりです。"),
		"(function(){",
		"\"use strict\";",
		Qt(j, "Setup", t),
		Qt(j, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, en = (e) => [
	nn("プラグインコマンド書き換えプラグイン"),
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
].join("\n"), tn = (e) => [{
	name: `${e.outputDirectory}/${j}`,
	description: e.description,
	status: !0,
	parameters: {}
}, {
	name: `${e.outputDirectory}/${e.dictionaryName}`,
	description: e.description,
	status: !0,
	parameters: {}
}], nn = (e) => ve({
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
}), rn = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, an = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), on = (e, t = c) => [{
	data: e,
	filename: t
}], sn = (e) => ln(cn(e)), cn = (e) => e.reduce(((e, t) => {
	let n = un(t);
	return n.key.length === 0 || n.value.length === 0 || (e.validEntries.push({
		source: t,
		normalized: n
	}), e.rawKeys.add(t.key)), e;
}), {
	validEntries: [],
	rawKeys: /* @__PURE__ */ new Set()
}), ln = (e) => e.validEntries.reduce(((t, n) => (/\s$/.test(n.source.key) && e.rawKeys.has(n.normalized.key) ? t.errorItems.push(n.source) : t.items.push(n.normalized), t)), {
	errorItems: [],
	items: []
}), un = (e) => ({
	key: e.key.trimEnd(),
	value: e.value.trimEnd()
}), dn = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach(((e, n) => {
		t.has(e.baseText) || t.set(e.baseText, n);
	})), t;
}, fn = (e) => {
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
}, M = (e) => e.map(((e) => [e.main, e.note])), pn = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => hn(e, t, n))), mn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, hn = (e, t, n) => {
	let r = se(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: mn[e.code],
		dataId: ae(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, gn = (e, t, n) => m(e.map, ((e, r, i) => ({
	..._n(e),
	commands: pn(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), _n = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, vn = (e, t, n) => ce(e, ((e, r, i) => ({
	commands: pn(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), yn = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, N = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, P = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, F = (e, t) => {
	let n = (e) => t.replaceText(e), r = g(e.note, t), i = N(e.name, n), a = N(e.nickname, n), o = N(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, I = (e, t) => {
	let n = g(e.note, t), r = P(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, L = (e, t) => {
	let n = g(e.note, t), r = P(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, R = (e, t) => {
	let n = g(e.note, t), r = P(e.name, t), i = P(e.description, t), a = P(e.message1, t), o = P(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, z = (e, t) => {
	let n = g(e.note, t), r = P(e.name, t), i = P(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, B = (e, t) => {
	let n = g(e.note, t), r = P(e.name, t), i = P(e.message1, t), a = P(e.message2, t), o = P(e.message3, t), s = P(e.message4, t);
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
	let n = N(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, Sn = (e, t) => {
	let n = e.parameters[4] ? N(e.parameters[4], t) : "";
	return v({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, Cn = (e, t) => {
	let n = N(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, wn = (e, t) => {
	let n = e.parameters[0].map(((e) => N(e, t)));
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
}, Tn = (e, t, n = "\n") => En(e, ((e) => t.get(e)), n), En = (e, t, n = "\n") => oe(e.note, ((e) => N(e.value, t)), n), Dn = (e, t) => On(e, ((e) => yn(e, t))), On = (e, t) => ({
	params: jn(e.params, ((e) => N(e, t))),
	messages: _(e.messages, ((e) => N(e, t))),
	basic: kn(e.basic, ((e) => N(e, t))),
	commands: An(e.commands, ((e) => N(e, t)))
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
	gameTitle: N(e.gameTitle, t),
	currencyUnit: N(e.currencyUnit, t),
	elements: V(e.elements, t),
	skillTypes: V(e.skillTypes, t),
	weaponTypes: V(e.weaponTypes, t),
	armorTypes: V(e.armorTypes, t),
	equipTypes: V(e.equipTypes, t),
	terms: On(e.terms, t)
}), V = (e, t) => e.map(((e) => N(e, t))), Nn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Pn = class {
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
}, H = class {
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
}, Fn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return In(r) ? new H(408, r, n) : new Pn(r, n);
}, In = (e) => e.parameters[0] === "選択肢ヘルプ", Ln = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new H(401, r, n);
}, Rn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Pn(r, n);
}, zn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new H(405, r, n);
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
}, W = (e, t) => {
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
}, G = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: W(e.list, t)
	})))
}), Yn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: W(e.list, t)
}), Xn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: W(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), Zn = (e, t) => $n(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), Qn = (e, t) => $n(e, t), $n = (e, t) => ({
	note: g(e.note, t),
	displayName: P(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: g(e.note, t),
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
}), er = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, tr = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => er(e, t)))
}), nr = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? tr(e, t) : null))
}), rr = (e, t) => e.map(((e) => er(e, t))), ir = (e, t) => e.map(((e) => tr(e, t))), ar = (e) => or(e, (() => [])), K = (e, t) => or(e, t), or = (e, t) => e.flatMap(((n, r) => sr(n, r, e, t))).filter(((e) => e !== null)), sr = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return Oe(e);
	let i = Vn(e.code);
	if (i) {
		let e = i(n, t, cr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? De(e) : null;
}, cr = {
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
}, lr = (e) => e.list.filter(dr), ur = (e) => e.pages.flatMap(((e) => e.list.filter(dr))), dr = (e) => e.code === 357, fr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: K(e.list, t)
}), pr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: K(n.list, t)
}))), mr = (e, t = () => []) => ({
	note: e.note,
	noteItems: h(e.note),
	displayedName: e.displayName,
	events: hr(e, t)
}), hr = (e, t) => m(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: K(e.list, t),
	note: r.note,
	noteItems: h(r.note),
	name: r.name
}))), q = (e, t) => `${e}:${t}`, gr = (e) => q(e.parameters[0], e.parameters[1]), _r = (e) => [
	...e.commonEvents.data.flatMap(lr),
	...e.troops.data.flatMap(ur),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => p(e, ((e) => e.list.filter(dr))))(e.map).flat(2)))
], vr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = gr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, J = (e, t) => Mt(e.default), yr = (e, t, n = J) => {
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
}, br = (e, t = J) => ge(_e(e), ((e, n) => yr(e, n, t))), xr = (e, t, n = J) => me(e, br(t, n)), Sr = (e, t = J) => e.map(((e) => xr(e.pluginName, e.schema, t))), Cr = (e, t = J) => Sr(e, t), wr = (e, t, n = J) => {
	let r = Cr(t, n), i = Tr(e);
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
}, Tr = (e) => vr(_r(e)), Er = (e, t, n = J) => {
	let r = Cr(t, n), i = Tr(e);
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
}, Dr = (e) => e.kind.endsWith("[]"), Or = (e) => Dr(e.attr), kr = (e) => e.kind === "struct", Ar = (e) => e.attr.kind === "struct[]", jr = (e) => Nr[e.kind.replace("[]", "")].type === "number", Mr = (e) => Nr[e.kind.replace("[]", "")].type === "string", Y = {
	type: "string",
	hasText: !0
}, X = {
	type: "number",
	hasText: !1
}, Z = {
	type: "number",
	hasText: !1
}, Nr = {
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
function Pr(e) {
	return Fr(e, ((e) => !0), ((e) => !0));
}
var Fr = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (kr(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (Ar(e)) i.push(e);
		else if (Or(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function Ir(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var Lr = (e) => new Map(e.map(((e) => [e.struct, Pr(e.params)]))), Rr = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, zr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), Br = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Vr(e, t, n, r) {
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
					objectSchema: Ir(e.scalars),
					name: n,
					scalarArrays: zr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Rr(e.scalars, t) : void 0
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
var Hr = (e, t, n, r = Br) => Vr(e.attr.struct, `${t}["${e.name}"]`, n, r), Ur = (e, t, n, r = Br) => Vr(e.attr.struct, `${t}["${e.name}"][*]`, n, r), Wr = (e, t, n, r) => ((e) => kr(e.attr))(n) ? qr(e, n, r) : Ar(n) ? Jr(e, n, r) : Or(n) ? Gr(e, t, n) : Kr(e, t, n), Gr = (e, t, n) => ({
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
}), Kr = (e, t, n) => ({
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
}), qr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Hr(t, "$", n)
}), Jr = (e, t, n) => ({
	structArrays: Ur(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Yr = (e, t) => t.map(((t) => Xr(e, t))).flat(3), Xr = (e, t) => [
	t.top ? Zr(t, e, t.top, "") : [],
	t.structs.map(((n) => Zr(t, e, n))),
	t.structArrays.map(((n) => Zr(t, e, n)))
], Zr = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return Mr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : jr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), Qr = (e, t) => {
	let n = $r(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, $r = (e, t) => {
	let n = [], r = e.scalars ? ei(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => ei(e, "struct", t, n))), a = e.structArrays.items.map(((e) => ei(e, "structArray", t, n)));
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
}, ei = (e, t, n, r) => {
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
}), ii = (e, t, n) => e.args.map(((r) => Qr(Wr("args", e.command, r, t), n))), ai = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Yr(e, t.extractors)
}), oi = (e, t) => {
	let n = Lr(e.schema.structs);
	return si(e.pluginName, e.schema.commands, n, t);
}, si = (e, t, n, r) => t.map(((t) => [ci(e, t.command), ri(e, t, n, r)])), ci = (e, t) => `${e}:${t}`, li = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? ai(ye(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, ui = (e) => new Q(new Map(e)), di = () => new Q(/* @__PURE__ */ new Map()), fi = (e) => {
	let t = e.flatMap(((e) => oi(e, ((e) => new be(e)))));
	return new Q(new Map(t));
}, Q = class {
	_commandMap;
	constructor(e) {
		this._commandMap = e;
	}
	pluginCommandKeys() {
		return Array.from(this._commandMap.keys());
	}
	extractMapTexts(e) {
		return mr(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return pr(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return fr(e, ((e) => this.extractArgs(e)));
	}
	extractArgs(e) {
		let t = li(e, this._commandMap);
		return t.args.filter(pi).map(((e) => ({
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
}, pi = (e) => typeof e.value == "string", mi = (e) => ({
	key: "battlerName",
	image: e.battlerName,
	id: e.id
}), hi = (e, t, n) => ({
	folder: n,
	key: t,
	image: e[t],
	id: e.id
}), gi = (e) => [
	hi(e, "faceName", "faces"),
	hi(e, "characterName", "characters"),
	hi(e, "battlerName", "sv_actors")
], _i = (e, t) => ({
	tilesets: e.tilesets,
	animations: e.animations,
	actors: $(e.actors, ((e) => F(e, t))),
	armors: $(e.armors, ((e) => z(e, t))),
	classes: $(e.classes, ((e) => L(e, t))),
	commonEvents: $(e.commonEvents, ((e) => Yn(e, t))),
	enemies: $(e.enemies, ((e) => I(e, t))),
	items: $(e.items, ((e) => z(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => R(e, t))),
	states: $(e.states, ((e) => B(e, t))),
	troops: $(e.troops, ((e) => G(e, t))),
	weapons: $(e.weapons, ((e) => z(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: Qn(e.map, t)
		})))
	}
}), $ = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), vi = (e, t, n, r) => {
	let i = bt(T(e, n), {
		audioFiles: t.audioFiles,
		imageFiles: t.imageFiles,
		otherFiles: t.otherFiles
	});
	return {
		data: _i(e, yi(i.nonTextNoteKeys, r)),
		note: i
	};
}, yi = (e, t) => ({
	pluginCommand: (e) => t.pluginCommand(e),
	scriptCommand: (e) => t.scriptCommand(e),
	replaceText: (e) => t.replaceText(e),
	isReplaceTargetNote: (n) => !!e.has(n.key) && t.isReplaceTargetNote(n)
}), bi = (e, t) => Qn(e, {
	replaceText: (e) => t.textDictionary.get(e),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
}), xi = (e, t) => {
	let n = {
		replaceText: (e) => t.textDictionary.get(e),
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => t.targetNoteKeys.has(e.key)
	};
	return {
		actors: e.actors.map(((e) => F(e, n))),
		armors: e.armors.map(((e) => z(e, n))),
		classes: e.classes.map(((e) => L(e, n))),
		enemies: e.enemies.map(((e) => I(e, n))),
		items: e.items.map(((e) => z(e, n))),
		skills: e.skills.map(((e) => R(e, n))),
		states: e.states.map(((e) => B(e, n))),
		troops: e.troops.map(((e) => G(e, n))),
		weapons: e.weapons.map(((e) => z(e, n))),
		commonEvents: e.commonEvents.map(((e) => Yn(e, n)))
	};
}, Si = (e, t) => d(Ci(e, t)), Ci = (e, t) => vi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}).data, wi = (e, t, n) => {
	let r = Ei(e, t, n);
	return {
		dataJSON: d(r.main),
		scriptJS: [Zt(r.aux, {
			description: "書き換え用辞書データ",
			outputDirectory: "translation",
			dictionaryName: "TranslationDictionary"
		}), Zt(r.originLike, {
			description: "翻訳前のオリジナル辞書データ",
			outputDirectory: "translation",
			dictionaryName: "OriginalDictionary"
		})]
	};
}, Ti = (e, t, n) => {
	let r = Ei(e, t, n);
	return [...d(r.main), ...on(r.aux)];
}, Ei = (e, t, n) => {
	let { data: r, dictionary: i, system: a } = e, o = Di(e, t, n), s = Array.from(i.keys()).map(((e) => [e, e]));
	return {
		main: o.data,
		aux: Oi(r, a, o.note, i, n),
		originLike: Oi(r, a, o.note, new Map(s), n)
	};
}, Di = (e, t, n) => {
	let { data: r, assetBundle: i, textKeys: a } = e;
	return vi(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => a.has(e.key)
	});
}, Oi = (e, t, n, r, i) => {
	let a = Jt(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((e) => e.map)), r, ((e) => i(e.trimEnd())));
	return {
		systemTexts: fe(le(t), ((e) => {
			let t = e.trimEnd();
			return r.get(t);
		})),
		actorTexts: a.actorTexts,
		targetNoteKeys: Xt([...n.dataNoteSummary, ...n.mapNoteSummary]),
		textDictionary: a.textDictionary
	};
};
export { z as $, Ee as $t, fr as A, lt as At, Xn as B, x as Bt, Sr as C, Nt as Ct, J as D, wt as Dt, vr as E, Ct as Et, er as F, tt as Ft, Mn as G, Ue as Gt, Qn as H, Ge as Ht, nr as I, Je as It, Tn as J, We as Jt, Dn as K, He as Kt, tr as L, S as Lt, ar as M, D as Mt, K as N, O as Nt, yr as O, St as Ot, rr as P, T as Pt, I as Q, Oe as Qt, ir as R, qe as Rt, gr as S, jt as St, br as T, bt as Tt, Zn as U, Ve as Ut, W as V, ze as Vt, G as W, Be as Wt, F as X, je as Xt, bn as Y, ke as Yt, L as Z, De as Zt, Cr as _, Xt as _t, wi as a, hn as at, _r as b, Lt as bt, _i as c, fn as ct, mi as d, on as dt, we as en, R as et, di as f, rn as ft, wr as g, Jt as gt, li as h, Zt as ht, Ti as i, vn as it, mr as j, ut as jt, pr as k, Ot as kt, vi as l, sn as lt, fi as m, en as mt, Si as n, yn as nt, xi as o, pn as ot, ui as p, tn as pt, En as q, Ke as qt, Ei as r, gn as rt, bi as s, dn as st, Ci as t, b as tn, B as tt, gi as u, an as ut, Er as v, Vt as vt, xr as w, Mt as wt, q as x, It as xt, Tr as y, Ht as yt, Yn as z, Re as zt };
