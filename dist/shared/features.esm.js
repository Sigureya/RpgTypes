import { B as e, G as t, H as n, I as r, J as i, R as a, V as o, W as s, Z as c, l, q as ee, r as u, z as d } from "./fileio.esm.js";
import { n as f } from "./libs.esm.js";
import { $i as p, Ki as m, Nt as h, Pt as g, Tt as _, Zi as v, at as te, c as ne, ds as y, ea as re, fc as ie, kt as ae, pc as oe, qi as se, s as ce, sa as le, ta as ue, u as de } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as fe, createPluginParamDictionary as pe, extractPluginCommandWithExtractor as me, filterPluginSchemaByFn as he, filterPluginSchemaStringParams as ge, generatePluginAnnotationText as _e, parseDeepRecord as ve } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as ye } from "jsonpath-js";
var be = (e, t, n, r, i, a) => {
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
}, Ce = (e) => `${e.commandName}.${e.argTitle}`, we = (e, t, n, r) => t.flatMap(((t) => Te(e, t, n, r))), Te = (e, t, n, r) => t.commands.filter(De).map(((i) => be(i, t.eventId, e, r, n, [t.name]))), Ee = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => be(a, e.eventId, t, n, r, [i])));
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
])), Pe = (e) => m(e, b), Fe = (e) => v(e, b), Ie = (e) => re(e, b), b = ({ list: e }) => e.filter(Le).map(((e) => e.parameters[1])), Le = (e) => e.code === 320 || e.code === 325 || e.code === 324, x = (e, t) => ({
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
})), T = (e, t) => {
	let n = E(e.actors, ze), r = it(e.armors), i = E(e.classes, Ve), a = E(e.enemies, Be), o = E(e.items, Ue), s = E(e.mapInfos, ((e) => e)), c = E(e.skills, He), l = E(e.states, Ke), ee = E(e.weapons, We), u = at(e.commonEvents, t), d = ot(e.troops, t), f = st(e.mapFiles, t), p = nt([
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
	]).concat(rt(e.mapFiles));
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
}), O = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(bt), bt = (e) => e.note.length > 0 || e.main.length > 0, k = (e, t) => {
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
				eventData: e.value.eventData
			}
		}
	};
}, xt = (e, t) => {
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
}, St = (e, t) => Tt(e, D(j(e, t))), Ct = (e, t) => D(Et(e, t)), wt = (e, t) => xt(e, Ct(e, t)), Tt = (e, t) => e.map(((e) => {
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
})), Et = (e, t) => dt(Dt(e), t), Dt = (e) => [
	A(r, e.actors),
	A(s, e.skills),
	A(n, e.items),
	A(i, e.weapons),
	A(a, e.armors),
	A(d, e.classes),
	A(t, e.states),
	A(o, e.enemies)
], A = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), j = (e, t) => dt(e.map(gt), t), Ot = (e, t) => {
	let n = Et(e, t), r = D(n);
	return {
		noteSummary: n,
		nonTextNoteKeys: r,
		mainData: xt(e, r)
	};
}, kt = (e, t) => {
	let n = j(e, t);
	return {
		noteSummary: n,
		validMaps: Tt(e, D(n))
	};
}, At = (e, t) => e.params.filter(jt).map(((n) => Nt(e.pluginName, n, t))).filter(((e) => e !== void 0)), M = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && te(e)), jt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Mt(e) && !!M(e.value), Mt = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", Nt = (e, t, n) => {
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
	let t = fe(e);
	return { extractArgs(e, n) {
		let r = me(e, t, n);
		return r.args.map(((e) => Pt(r, e)));
	} };
}, It = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], Lt = (e) => {
	let t = e.filter(Rt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Rt = (e) => e.code === 401 && !!e.speaker && !le(e.speaker), zt = (e, t, n, r, i, a, o) => {
	let s = k(T(e.data, o), e);
	return Ht(e.data.actors.data, e.system, t, s, n, r, i, a);
}, Bt = zt, Vt = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Ht = (c, l, u, f, p, m, h, g) => {
	let { eventData: _, mainData: v, mapFiles: te } = f.data.value;
	return {
		speakers: (ne = f.data.value, y = h, Lt(It(ne)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: y(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Vt(f),
		pluginParams: u.flatMap(((e) => At(e, h))),
		map: Ut(te, h, g),
		commonEvents: we(e, _.commonEvents, h, g),
		troops: Ee(_.troops, ee, g, h),
		armors: S(v.armors, a, m, h),
		system: Gt(l, h, p),
		actors: {
			texts: S(v.actors, r, m, h),
			controlChars: ue(c)
		},
		classes: S(v.classes, d, m, h),
		enemies: S(v.enemies, o, m, h),
		items: S(v.items, n, m, h),
		skills: S(v.skills, s, m, h),
		states: qe(v.states, t, m, h),
		weapons: S(v.weapons, i, m, h)
	};
	var ne, y;
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
	}))), e.commands.filter(De).map(((o) => be(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), Gt = (e, t, n) => {
	if (e.system) {
		let r = ce(e.system);
		return {
			gameTitle: e.system.gameTitle,
			filename: l,
			texts: tt(r, l, n, t)
		};
	}
	return {
		gameTitle: "",
		filename: l,
		texts: []
	};
}, Kt = (e, t, n, r, i, a) => {
	let o = {
		hashText: a,
		newText: (e) => i.get(e) ?? e
	};
	return {
		textDictionary: qt(i, a),
		actorTexts: Ae(e, t, n, r, o)
	};
}, qt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Jt = (e) => {
	let t = D(e);
	return Array.from(t);
}, N = "HonyakuEx", Yt = (e, t) => ({
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
		Xt(N, "Setup", t),
		Xt(N, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, Qt = (e) => [
	en("プラグインコマンド書き換えプラグイン"),
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
].join("\n"), $t = (e) => [{
	name: `${e.outputDirectory}/${N}`,
	description: e.description,
	status: !0,
	parameters: {}
}, {
	name: `${e.outputDirectory}/${e.dictionaryName}`,
	description: e.description,
	status: !0,
	parameters: {}
}], en = (e) => _e({
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
}), tn = (e, t) => {
	let n = t.actorTextDictionary.get(e);
	if (n) return t.textDictionary.get(n);
}, nn = (e) => ({
	targetNoteKeys: new Set(e.targetNoteKeys),
	textDictionary: new Map(e.textDictionary.map((({ key: e, value: t }) => [e, t]))),
	actorTextDictionary: new Map(e.actorTexts.map((({ key: e, value: t }) => [e, t])))
}), rn = (e, t = c) => [{
	data: e,
	filename: t
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
}, P = (e) => e.map(((e) => [e.main, e.note])), dn = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => pn(e, t, n))), fn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, pn = (e, t, n) => {
	let r = oe(e) ? {
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
}, mn = (e, t, n) => m(e.map, ((e, r, i) => ({
	...hn(e),
	commands: dn(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), hn = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, gn = (e, t, n) => se(e, ((e, r, i) => ({
	commands: dn(e.list, t, n),
	eventName: i.name,
	troopId: i.id,
	pageIndex: r
}))), _n = (e, t) => {
	let n = e.trimEnd(), r = t.get(n);
	return r ? r.trimEnd() : n;
}, F = (e, t) => {
	let n = e.trimEnd(), r = t(n);
	return r ? r.trimEnd() : n;
}, I = (e, t) => {
	let n = e.trimEnd(), r = t.replaceText(n);
	return r ? r.trimEnd() : n;
}, L = (e, t) => {
	let n = (e) => t.replaceText(e), r = _(e.note, t), i = F(e.name, n), a = F(e.nickname, n), o = F(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, R = (e, t) => {
	let n = _(e.note, t), r = I(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, z = (e, t) => {
	let n = _(e.note, t), r = I(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, B = (e, t) => {
	let n = _(e.note, t), r = I(e.name, t), i = I(e.description, t), a = I(e.message1, t), o = I(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, V = (e, t) => {
	let n = _(e.note, t), r = I(e.name, t), i = I(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, H = (e, t) => {
	let n = _(e.note, t), r = I(e.name, t), i = I(e.message1, t), a = I(e.message2, t), o = I(e.message3, t), s = I(e.message4, t);
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
	let n = F(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, bn = (e, t) => {
	let n = e.parameters[4] ? F(e.parameters[4], t) : "";
	return y({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, xn = (e, t) => {
	let n = F(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, Sn = (e, t) => {
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
}, Cn = (e, t, n = "\n") => wn(e, ((e) => t.get(e)), n), wn = (e, t, n = "\n") => ae(e.note, ((e) => F(e.value, t)), n), Tn = (e, t) => En(e, ((e) => _n(e, t))), En = (e, t) => ({
	params: kn(e.params, ((e) => F(e, t))),
	messages: ne(e.messages, ((e) => F(e, t))),
	basic: Dn(e.basic, ((e) => F(e, t))),
	commands: On(e.commands, ((e) => F(e, t)))
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
	gameTitle: F(e.gameTitle, t),
	currencyUnit: F(e.currencyUnit, t),
	elements: U(e.elements, t),
	skillTypes: U(e.skillTypes, t),
	weaponTypes: U(e.weaponTypes, t),
	armorTypes: U(e.armorTypes, t),
	equipTypes: U(e.equipTypes, t),
	terms: En(e.terms, t)
}), U = (e, t) => e.map(((e) => F(e, t))), jn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Mn = class {
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
}, Nn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return Pn(r) ? new W(408, r, n) : new Mn(r, n);
}, Pn = (e) => e.parameters[0] === "選択肢ヘルプ", Fn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new W(401, r, n);
}, In = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Mn(r, n);
}, Ln = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => G(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new W(405, r, n);
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
}, K = (e, t) => {
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
}, qn = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: K(e.list, t)
	})))
}), Jn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: K(e.list, t)
}), Yn = (e, t) => ({
	id: e.id,
	name: e.name,
	trigger: e.trigger,
	switchId: e.switchId,
	list: K(e.list, {
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		replaceText: t
	})
}), Xn = (e, t) => Qn(e, {
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	replaceText: t,
	isReplaceTargetNote: () => !1
}), Zn = (e, t) => Qn(e, t), Qn = (e, t) => ({
	note: _(e.note, t),
	displayName: I(e.displayName, t),
	events: e.events.map(((e) => e ? ((e, t) => ({
		id: e.id,
		name: e.name,
		x: e.x,
		y: e.y,
		note: _(e.note, t),
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
}), $n = (e, t) => {
	let n = t(e.list);
	return {
		...e,
		list: n
	};
}, er = (e, t) => ({
	...e,
	pages: e.pages.map(((e) => $n(e, t)))
}), tr = (e, t) => ({
	...e,
	events: e.events.map(((e) => e ? er(e, t) : null))
}), nr = (e, t) => e.map(((e) => $n(e, t))), rr = (e, t) => e.map(((e) => er(e, t))), ir = (e) => ar(e, (() => [])), q = (e, t) => ar(e, t), ar = (e, t) => e.flatMap(((n, r) => or(n, r, e, t))).filter(((e) => e !== null)), or = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return ke(e);
	let i = zn(e.code);
	if (i) {
		let e = i(n, t, sr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Oe(e) : null;
}, sr = {
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
}, cr = (e) => e.list.filter(ur), lr = (e) => e.pages.flatMap(((e) => e.list.filter(ur))), ur = (e) => e.code === 357, dr = (e, t = () => []) => ({
	eventId: e.id,
	name: e.name,
	commands: q(e.list, t)
}), fr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: q(n.list, t)
}))), pr = (e, t = () => []) => ({
	note: e.note,
	noteItems: h(e.note),
	displayedName: e.displayName,
	events: mr(e, t)
}), mr = (e, t) => m(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: q(e.list, t),
	note: r.note,
	noteItems: h(r.note),
	name: r.name
}))), J = (e, t) => `${e}:${t}`, hr = (e) => J(e.parameters[0], e.parameters[1]), gr = (e) => [
	...e.commonEvents.data.flatMap(cr),
	...e.troops.data.flatMap(lr),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => p(e, ((e) => e.list.filter(ur))))(e.map).flat(2)))
], _r = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = hr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, Y = (e, t) => M(e.default), vr = (e, t, n = Y) => {
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
}, yr = (e, t = Y) => he(ge(e), ((e, n) => vr(e, n, t))), br = (e, t, n = Y) => pe(e, yr(t, n)), xr = (e, t = Y) => e.map(((e) => br(e.pluginName, e.schema, t))), Sr = (e, t = Y) => xr(e, t), Cr = (e, t, n = Y) => {
	let r = Sr(t, n), i = wr(e);
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
}, wr = (e) => _r(gr(e)), Tr = (e, t, n = Y) => {
	let r = Sr(t, n), i = wr(e);
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
}, Er = (e) => e.kind.endsWith("[]"), Dr = (e) => Er(e.attr), Or = (e) => e.kind === "struct", kr = (e) => e.attr.kind === "struct[]", Ar = (e) => Mr[e.kind.replace("[]", "")].type === "number", jr = (e) => Mr[e.kind.replace("[]", "")].type === "string", X = {
	type: "string",
	hasText: !0
}, Z = {
	type: "number",
	hasText: !1
}, Q = {
	type: "number",
	hasText: !1
}, Mr = {
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
function Nr(e) {
	return Pr(e, ((e) => !0), ((e) => !0));
}
var Pr = (e, t, n) => {
	let r = [], i = [], a = [], o = [];
	return e.forEach(((e) => {
		if (Or(e.attr)) r.push({
			name: e.name,
			attr: e.attr
		});
		else if (kr(e)) i.push(e);
		else if (Dr(e)) {
			if (n(e)) return void o.push(e);
		} else t(e) && a.push(e);
	})), {
		structs: r,
		structArrays: i,
		scalars: a,
		scalarArrays: o
	};
};
function Fr(e) {
	let t = e.map(((e) => [e.name, e.attr]));
	return Object.fromEntries(t);
}
var Ir = (e) => new Map(e.map(((e) => [e.struct, Nr(e.params)]))), Lr = (e, t) => {
	if (e.length !== 0) return `${t}[${e.map(((e) => `"${e.name}"`)).join(",")}]`;
}, Rr = (e, t) => e.map(((e) => ({
	path: `${t}["${e.name}"][*]`,
	param: e
}))), zr = {
	undefinedStruct: "undefined_struct",
	cyclicStruct: "cyclic_struct"
};
function Br(e, t, n, r) {
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
					objectSchema: Fr(e.scalars),
					name: n,
					scalarArrays: Rr(e.scalarArrays, t),
					scalarsPath: e.scalars.length > 0 ? Lr(e.scalars, t) : void 0
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
var Vr = (e, t, n, r = zr) => Br(e.attr.struct, `${t}["${e.name}"]`, n, r), Hr = (e, t, n, r = zr) => Br(e.attr.struct, `${t}["${e.name}"][*]`, n, r), Ur = (e, t, n, r) => ((e) => Or(e.attr))(n) ? Kr(e, n, r) : kr(n) ? qr(e, n, r) : Dr(n) ? Wr(e, t, n) : Gr(e, t, n), Wr = (e, t, n) => ({
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
}), Gr = (e, t, n) => ({
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
}), Kr = (e, t, n) => ({
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structArrays: {
		items: [],
		errors: []
	},
	structs: Vr(t, "$", n)
}), qr = (e, t, n) => ({
	structArrays: Hr(t, "$", n),
	rootName: t.name,
	rootCategory: e,
	scalars: void 0,
	structs: {
		items: [],
		errors: []
	}
}), Jr = (e, t) => t.map(((t) => Yr(e, t))).flat(3), Yr = (e, t) => [
	t.top ? Xr(t, e, t.top, "") : [],
	t.structs.map(((n) => Xr(t, e, n))),
	t.structArrays.map(((n) => Xr(t, e, n)))
], Xr = (e, t, n, r = n.bundleName) => [n.scalar ? ((e, t, n, r, i) => r.pathSegments(n).map((({ value: n, segments: r }) => ((e, t, n, r, i) => {
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
	return jr(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "string")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : Ar(a) ? ((e, t, n, r) => t.filter(((e) => typeof e == "number")).map(((t) => ({
		rootName: e.rootName,
		rootType: e.rootCategory,
		value: t,
		structName: n,
		param: r
	}))))(e, i, t, r.schema) : [];
})(e, r, t, n)))].flat(2), Zr = (e, t) => {
	let n = Qr(e, {
		createReader: (e) => t(e),
		errorAtPath() {}
	});
	if (n.errors.length > 0) throw n.errors[0].error;
	return n.extractor;
}, Qr = (e, t) => {
	let n = [], r = e.scalars ? $r(e.scalars, "scalar", t, n) : void 0, i = e.structs.items.map(((e) => $r(e, "struct", t, n))), a = e.structArrays.items.map(((e) => $r(e, "structArray", t, n)));
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
}, $r = (e, t, n, r) => {
	let i = ei(e.scalarArrays, e.name, t, n, r);
	return e.scalarsPath ? {
		bundleName: e.name,
		arrays: i,
		scalar: ti(e.scalarsPath, e.objectSchema, t, n, r)
	} : {
		bundleName: e.name,
		arrays: i
	};
}, ei = (e, t, n, r, i) => e.flatMap(((e) => {
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
})), ti = (e, t, n, r, i) => {
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
}, ni = (e, t, n, r) => ({
	pluginName: e,
	commandName: t.command,
	desc: t.desc ?? "",
	text: t.text ?? "",
	extractors: ri(t, n, r)
}), ri = (e, t, n) => e.args.map(((r) => Zr(Ur("args", e.command, r, t), n))), ii = (e, t) => ({
	pluginName: t.pluginName,
	commandName: t.commandName,
	args: Jr(e, t.extractors)
}), ai = (e, t) => {
	let n = Ir(e.schema.structs);
	return oi(e.pluginName, e.schema.commands, n, t);
}, oi = (e, t, n, r) => t.map(((t) => [si(e, t.command), ni(e, t, n, r)])), si = (e, t) => `${e}:${t}`, ci = (e, t) => {
	let [n, r] = e.parameters, i = `${n}:${r}`, a = t.get(i);
	return a ? ii(ve(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, li = (e) => new fi(new Map(e)), ui = () => new fi(/* @__PURE__ */ new Map()), di = (e) => {
	let t = e.flatMap(((e) => ai(e, ((e) => new ye(e)))));
	return new fi(new Map(t));
}, fi = class {
	_commandMap;
	constructor(e) {
		this._commandMap = e;
	}
	pluginCommandKeys() {
		return Array.from(this._commandMap.keys());
	}
	extractMapTexts(e) {
		return pr(e, ((e) => this.extractArgs(e)));
	}
	extractBattleText(e) {
		return fr(e, ((e) => this.extractArgs(e)));
	}
	extractCommonEventText(e) {
		return dr(e, ((e) => this.extractArgs(e)));
	}
	extractArgs(e) {
		let t = ci(e, this._commandMap);
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
		return q(e, ((e) => this.extractArgs(e)));
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
	actors: $(e.actors, ((e) => L(e, t))),
	armors: $(e.armors, ((e) => V(e, t))),
	classes: $(e.classes, ((e) => z(e, t))),
	commonEvents: $(e.commonEvents, ((e) => Jn(e, t))),
	enemies: $(e.enemies, ((e) => R(e, t))),
	items: $(e.items, ((e) => V(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => B(e, t))),
	states: $(e.states, ((e) => H(e, t))),
	troops: $(e.troops, ((e) => qn(e, t))),
	weapons: $(e.weapons, ((e) => V(e, t))),
	mapFiles: {
		info: e.mapFiles.info,
		invalidMaps: e.mapFiles.invalidMaps,
		validMaps: e.mapFiles.validMaps.map(((e) => ({
			filename: e.filename,
			editingName: e.editingName,
			map: Zn(e.map, t)
		})))
	}
}), $ = (e, t) => ({
	success: e.success,
	fileName: e.fileName,
	error: e.error,
	data: e.success ? e.data.map(t) : []
}), vi = (e, t, n, r) => {
	let i = k(T(e, n), {
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
}), bi = (e, t) => Zn(e, {
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
		actors: e.actors.map(((e) => L(e, n))),
		armors: e.armors.map(((e) => V(e, n))),
		classes: e.classes.map(((e) => z(e, n))),
		enemies: e.enemies.map(((e) => R(e, n))),
		items: e.items.map(((e) => V(e, n))),
		skills: e.skills.map(((e) => B(e, n))),
		states: e.states.map(((e) => H(e, n))),
		troops: e.troops.map(((e) => qn(e, n))),
		weapons: e.weapons.map(((e) => V(e, n))),
		commonEvents: e.commonEvents.map(((e) => Jn(e, n)))
	};
}, Si = (e, t) => u(Ci(e, t)), Ci = (e, t) => vi(e.data, e.assetBundle, t, {
	replaceText: (t) => e.dictionary.get(t),
	pluginCommand: (e) => e,
	scriptCommand: (e) => e,
	isReplaceTargetNote: (t) => e.textKeys.has(t.key)
}).data, wi = (e, t, n) => {
	let r = Ei(e, t, n);
	return {
		dataJSON: u(r.main),
		scriptJS: [Yt(r.aux, {
			description: "書き換え用辞書データ",
			outputDirectory: "translation",
			dictionaryName: "TranslationDictionary"
		}), Yt(r.originLike, {
			description: "翻訳前のオリジナル辞書データ",
			outputDirectory: "translation",
			dictionaryName: "OriginalDictionary"
		})]
	};
}, Ti = (e, t, n) => {
	let r = Ei(e, t, n);
	return [...u(r.main), ...rn(r.aux)];
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
	let a = Kt(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((e) => e.map)), r, ((e) => i(e.trimEnd())));
	return {
		systemTexts: de(ce(t), ((e) => {
			let t = e.trimEnd();
			return r.get(t);
		})),
		actorTexts: a.actorTexts,
		targetNoteKeys: Jt([...n.dataNoteSummary, ...n.mapNoteSummary]),
		textDictionary: a.textDictionary
	};
};
export { V as $, Ee as $t, dr as A, lt as At, Yn as B, x as Bt, xr as C, jt as Ct, Y as D, wt as Dt, _r as E, Ct as Et, $n as F, tt as Ft, An as G, Ue as Gt, Zn as H, Ge as Ht, tr as I, Je as It, Cn as J, We as Jt, Tn as K, He as Kt, er as L, S as Lt, ir as M, D as Mt, q as N, dt as Nt, vr as O, St as Ot, nr as P, T as Pt, R as Q, ke as Qt, rr as R, qe as Rt, hr as S, At as St, yr as T, k as Tt, Xn as U, Ve as Ut, K as V, ze as Vt, qn as W, Be as Wt, L as X, Me as Xt, vn as Y, Ae as Yt, z as Z, Oe as Zt, Sr as _, Jt as _t, wi as a, pn as at, gr as b, Ft as bt, _i as c, un as ct, mi as d, rn as dt, we as en, B as et, ui as f, tn as ft, Cr as g, Kt as gt, ci as h, Yt as ht, Ti as i, gn as it, pr as j, ut as jt, fr as k, j as kt, vi as l, an as lt, di as m, Qt as mt, Si as n, _n as nt, xi as o, dn as ot, li as p, $t as pt, wn as q, Ke as qt, Ei as r, mn as rt, bi as s, ln as st, Ci as t, De as tn, H as tt, gi as u, nn as ut, Tr as v, zt as vt, br as w, M as wt, J as x, Pt as xt, wr as y, Bt as yt, Jn as z, Re as zt };
