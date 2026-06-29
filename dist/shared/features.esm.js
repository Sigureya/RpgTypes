import { B as e, F as t, K as n, L as r, R as i, U as a, V as o, W as s, X as c, p as l, q as u, r as d, z as f } from "./fileio.esm.js";
import { n as p } from "./libs.esm.js";
import { $i as m, Gi as h, Ki as g, Mt as _, Nt as v, Ot as ee, Qi as te, Xi as y, c as ne, dc as re, ea as ie, fc as ae, it as oe, oa as se, s as ce, u as le, us as ue, wt as b } from "./rmmz.esm.js";
import { createCommandExtractorMapFromPipeline as de, createPluginParamDictionary as fe, extractPluginCommandWithExtractor as pe, filterPluginSchemaByFn as me, filterPluginSchemaStringParams as he, generatePluginAnnotationText as ge, parseDeepRecord as _e } from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS as ve } from "jsonpath-js";
var x = (e, t, n, r, i, a) => {
	if (e.code === 357) return be(e, t, n, i, a);
	let o = p(e.value);
	return {
		otherData: a,
		uuid: i(o),
		kind: r(e),
		baseText: o,
		filename: n,
		id: t,
		speaker: e.speaker ?? "",
		dataKey: ye(e)
	};
}, ye = (e) => `code:${e.code}`, be = (e, t, n, r, i) => {
	let a = p(e.value);
	return {
		otherData: [e.pluginName, ...i],
		uuid: r(a),
		kind: `${xe(e)}`,
		baseText: a,
		filename: n,
		id: t,
		dataKey: `code:${e.code}-${e.argName}`
	};
}, xe = (e) => `${e.commandName}.${e.argTitle}`, Se = (e, t, n, r) => t.flatMap(((t) => Ce(e, t, n, r))), Ce = (e, t, n, r) => t.commands.filter(Te).map(((i) => x(i, t.eventId, e, r, n, [t.name]))), we = (e, t, n, r) => e.filter(((e) => e.commands.length > 0)).flatMap(((e) => {
	let i = `page:${e.pageIndex + 1}`;
	return e.commands.map(((a) => x(a, e.eventId, t, n, r, [i])));
})), Te = (e) => e.value.length > 0, Ee = (e) => ((e, t) => ({
	code: e.code,
	paramIndex: t,
	value: e.parameters[t]
}))(e, 1), De = (e) => e.parameters[0].map(((e, t) => ({
	code: 102,
	paramIndex: t,
	value: e
}))), Oe = (e, t, n, r, i) => {
	let a = Array.from(Ae(e, t, n, r)).map(((e) => {
		let t = e.trimEnd();
		return t.length === 0 ? null : {
			key: t,
			value: i.hashText(t)
		};
	})), o = a.map(((e) => e === null ? null : {
		key: i.newText(e.key).trimEnd(),
		value: e.value
	}));
	return [...a, ...o].filter(ke);
}, ke = (e) => e !== null && e.key.length > 0, Ae = (e, t, n, r) => {
	let i = je(e), a = r.map(Me), o = Ne(t), s = Pe(n);
	return new Set([
		i,
		o,
		s,
		a
	].flat(4));
}, je = (e) => e.map(((e) => [
	e.name,
	e.nickname,
	e.profile
])), Me = (e) => h(e, Fe), Ne = (e) => y(e, Fe), Pe = (e) => m(e, Fe), Fe = ({ list: e }) => e.filter(Ie).map(((e) => e.parameters[1])), Ie = (e) => e.code === 320 || e.code === 325 || e.code === 324, S = (e, t) => ({
	id: e.id,
	name: e.name,
	note: Le(e),
	main: t.map(((t) => ({
		key: t,
		value: e[t],
		id: e.id
	})))
}), Le = (e) => v(e.note, ((t, n) => ({
	key: t,
	value: n,
	id: e.id
}))), Re = (e) => S(e, [
	"name",
	"nickname",
	"profile"
]), ze = (e) => S(e, ["name"]), Be = (e) => S(e, ["name"]), Ve = (e) => S(e, [
	"name",
	"description",
	"message1",
	"message2"
]), He = (e) => S(e, ["name", "description"]), Ue = (e) => S(e, ["name", "description"]), We = (e) => S(e, ["name", "description"]), Ge = (e) => S(e, [
	"name",
	"message1",
	"message2",
	"message3",
	"message4"
]), Ke = (e, t, n, r) => C(e, t, {
	message1: n.state.message1,
	message2: n.state.message2,
	message3: n.state.message3,
	message4: n.state.message4,
	name: n.name,
	note: n.note
}, r), C = (e, t, n, r) => e.map(((e) => qe(e, t, n, r))), qe = (e, t, n, r) => ({
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
	note: Je(e.note, t, n, r)
}), Je = (e, t, n, r) => e.map(((e) => ({
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
}, Ye = (e, t, n, r, i, a) => [
	...Qe(t.basic, e, n, r),
	...Xe(t.commands, e, n, i),
	...Ze(t.messages, e, n, a),
	...$e(t.params, e, n, ((e) => `params.${e}`))
], Xe = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => w("commands", e, t, i, n, r))), Ze = (e, t, n, r) => (/* @__PURE__ */ "alwaysDash.commandRemember.touchUI.bgmVolume.bgsVolume.meVolume.seVolume.possession.expTotal.expNext.saveMessage.loadMessage.file.autosave.partyName.emerge.preemptive.surprise.escapeStart.escapeFailure.victory.defeat.obtainExp.obtainGold.obtainItem.levelUp.obtainSkill.useItem.criticalToEnemy.criticalToActor.actorDamage.actorRecovery.actorGain.actorLoss.actorDrain.actorNoDamage.actorNoHit.enemyDamage.enemyRecovery.enemyGain.enemyLoss.enemyDrain.enemyNoDamage.enemyNoHit.evasion.magicEvasion.magicReflection.counterAttack.substitute.buffAdd.debuffAdd.buffRemove.actionFailure".split(".")).filter(((t) => e[t] !== "")).map(((i) => w("messages", e, t, i, n, r))), Qe = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => w("basic", e, t, i, n, r))), $e = (e, t, n, r) => [
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
].filter(((t) => e[t] !== "")).map(((i) => w("params", e, t, i, n, r))), et = (e, t, n, r) => [
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
	...Ye(t, e.terms, r, ((e) => `basic.${e}`), ((e) => `commands.${e}`), ((e) => `messages.${e}`)),
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
})), tt = (e, t) => {
	let n = E(e.actors, Re), r = at(e.armors), i = E(e.classes, Be), a = E(e.enemies, ze), o = E(e.items, He), s = E(e.mapInfos, ((e) => e)), c = E(e.skills, Ve), l = E(e.states, Ge), u = E(e.weapons, Ue), d = ot(e.commonEvents, t), f = st(e.troops, t), p = ct(e.mapFiles, t), m = nt(e.system), h = rt([
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
	]).concat(it(e.mapFiles, e.system));
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
}, nt = (e) => e.system === null ? {
	message: e.message,
	system: null
} : {
	message: e.message,
	system: ce(e.system)
}, E = (e, t) => ({
	error: e.error,
	fileName: e.fileName,
	success: e.success,
	data: e.success ? e.data.map(t) : []
}), rt = (e) => e.filter(((e) => !e.success)).map(((e) => ({
	fileName: e.fileName,
	error: e.error
}))), it = (e, t) => [
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
], at = (e) => E(e, We), ot = (e, t) => E(e, ((e) => t.extractCommonEventText(e))), st = (e, t) => E(e, ((e) => t.extractBattleText(e))), ct = (e, t) => {
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
}, lt = (e) => `${e.eventId.toString().padStart(3, "0")}:${e.name}`, ut = (e) => {
	let t = e.trim().toLowerCase();
	return t === "true" || t === "false";
}, dt = (e) => {
	let t = e.trim();
	return /^-?\d{1,16}\.?\d{0,16}$/.test(t);
}, D = (e) => {
	let t = e.filter(((e) => e.kinds.length === 0)).map(((e) => e.key));
	return new Set(t);
}, O = (e, t) => {
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
	isBoolean: e.isBoolean && ut(i.value),
	isNumber: e.isNumber && dt(i.value),
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
}), k = (e, t) => e.map(((e) => {
	let n = e.note.filter(t);
	return {
		main: e.main,
		note: n,
		id: e.id,
		name: e.name
	};
})).filter(bt), bt = (e) => e.note.length > 0 || e.main.length > 0, A = (e, t) => {
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
			events: n.events.map(((e) => yt(e, r)))
		})
	};
	var n, r;
})), Et = (e, t) => O(Dt(e), t), Dt = (n) => [
	j(t, n.actors),
	j(a, n.skills),
	j(o, n.items),
	j(u, n.weapons),
	j(r, n.armors),
	j(i, n.classes),
	j(s, n.states),
	j(e, n.enemies)
], j = (e, t) => ({
	source: e,
	notes: t.flatMap(((e) => e.note.map(((t) => ({
		key: t.key,
		value: t.value,
		id: t.id,
		name: e.name
	})))))
}), Ot = (e, t) => O(e.map(gt), t), kt = (e, t) => {
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
}, jt = (e, t) => e.params.filter(Nt).map(((n) => Ft(e.pluginName, n, t))).filter(((e) => e !== void 0)), Mt = (e) => e.length !== 0 && !/^[\d\s-\+\*/,.()=><]+$/.test(e) && !(!/["`']/.test(e) && oe(e)), Nt = (e) => typeof e.value == "string" && e.value.length !== 0 && !!Pt(e) && !!Mt(e.value), Pt = (e) => e.param.attr.kind === "string" || e.param.attr.kind === "string[]" || e.param.attr.kind === "multiline_string" || e.param.attr.kind === "multiline_string[]" || e.param.attr.kind === "combo" || e.param.attr.kind === "any", Ft = (e, t, n) => {
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
}, It = (e, t) => ({
	code: 357,
	pluginName: e.pluginName,
	commandName: e.commandName,
	argName: t.param.name,
	value: typeof t.value == "string" ? t.value : "",
	argTitle: t.param.attr.text || t.param.name,
	paramIndex: 3
}), Lt = (e) => {
	let t = de(e);
	return { extractArgs(e, n) {
		let r = pe(e, t, n);
		return r.args.map(((e) => It(r, e)));
	} };
}, Rt = (e) => [
	...e.eventData.commonEvents.flatMap(((e) => e.commands)),
	...e.eventData.troops.flatMap(((e) => e.commands)),
	...e.mapFiles.validMaps.flatMap(((e) => e.map.events.flatMap(((e) => e.commands))))
], zt = (e) => {
	let t = e.filter(Bt).map(((e) => e.speaker.trimEnd()));
	return Array.from(new Set(t));
}, Bt = (e) => e.code === 401 && !!e.speaker && !se(e.speaker), Vt = (e, t, n, r, i, a, o) => {
	let s = A(tt(e.data, o), e);
	return Wt(e.data.actors.data, t, s, n, r, i, a);
}, Ht = Vt, Ut = (e) => [...e.dataNoteSummary, ...e.mapNoteSummary], Wt = (c, l, d, p, m, h, g) => {
	let { eventData: _, mainData: v, mapFiles: ee, system: te } = d.data.value;
	return {
		speakers: (y = d.data.value, ne = h, zt(Rt(y)).map(((e) => ({
			filename: "",
			id: 0,
			uuid: ne(e),
			baseText: e,
			kind: "speaker",
			dataKey: "speaker",
			otherData: []
		})))),
		noteSummaries: Ut(d),
		pluginParams: l.flatMap(((e) => jt(e, h))),
		map: Gt(ee, h, g),
		commonEvents: Se(f, _.commonEvents, h, g),
		troops: we(_.troops, n, g, h),
		armors: C(v.armors, r, m, h),
		system: qt(te, h, p),
		actors: {
			texts: C(v.actors, t, m, h),
			controlChars: ie(c)
		},
		classes: C(v.classes, i, m, h),
		enemies: C(v.enemies, e, m, h),
		items: C(v.items, o, m, h),
		skills: C(v.skills, a, m, h),
		states: Ke(v.states, s, m, h),
		weapons: C(v.weapons, u, m, h)
	};
	var y, ne;
}, Gt = (e, t, n) => e.validMaps.map(((e) => Kt(e, t, n))).flat(3), Kt = (e, t, n) => e.map.events.map(((r) => ((e, t, n, r) => {
	let i = `page:${e.pageIndex + 1}`, a = lt(e);
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
	}))), e.commands.filter(Te).map(((o) => x(o, e.eventId, t.filename, r, n, [
		t.editingName,
		a,
		i
	])))];
})(r, e, t, n))), qt = (e, t, n) => e.system ? {
	gameTitle: e.system.gameTitle,
	filename: l,
	texts: et(e.system, l, n, t)
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
		actorTexts: Oe(e, t, n, r, o)
	};
}, Yt = (e, t) => Array.from(e.entries()).map((([e, n]) => ({
	key: t(e),
	value: n
}))), Xt = (e) => {
	let t = D(e);
	return Array.from(t);
}, M = "HonyakuEx", Zt = (e, t) => ({
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
		Qt(M, "Setup", t),
		Qt(M, "SetupSystemTexts", e.systemTexts),
		"})();"
	].join("\n");
}, en = (e) => [
	nn("プラグインコマンド書き換えプラグイン"),
	"(function(){",
	"\"use strict\";",
	"const data = ",
	`${JSON.stringify(e)};`,
	"PluginManager.callCommand(null,",
	`"${M}",`,
	"\"ReadPlugins\",",
	"data",
	");",
	"})()"
].join("\n"), tn = (e) => [{
	name: `${e.outputDirectory}/${M}`,
	description: e.description,
	status: !0,
	parameters: {}
}, {
	name: `${e.outputDirectory}/${e.dictionaryName}`,
	description: e.description,
	status: !0,
	parameters: {}
}], nn = (e) => ge({
	pluginName: "",
	locale: "",
	target: "MZ",
	dependencies: {
		base: [M],
		orderAfter: [M],
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
}, N = (e) => e.map(((e) => [e.main, e.note])), pn = (e, t, n) => e.filter(((e) => e.code === 128 || e.code === 126 || e.code === 127)).map(((e) => hn(e, t, n))), mn = {
	127: "weapon",
	128: "armor",
	126: "item"
}, hn = (e, t, n) => {
	let r = ae(e) ? {
		direct: !1,
		variableId: e.parameters[3]
	} : {
		direct: !0,
		value: e.parameters[3]
	}, i = e.parameters[1] === 0 ? t.gain : e.parameters[1] === 1 ? t.lose : t.unknown, a = typeof e.parameters[4] == "boolean" ? { includesEquip: e.parameters[4] } : {};
	return {
		itemKind: mn[e.code],
		dataId: re(e),
		code: e.code,
		commandNameMZ: n(e.code),
		operation: i,
		...a,
		...r
	};
}, gn = (e, t, n) => h(e.map, ((e, r, i) => ({
	..._n(e),
	commands: pn(e.list, t, n),
	eventName: i.name,
	pageIndex: r
}))), _n = (e) => e.conditions.itemId > 0 && e.conditions.itemValid ? { pageCondition: { itemId: e.conditions.itemId } } : {}, vn = (e, t, n) => g(e, ((e, r, i) => ({
	commands: pn(e.list, t, n),
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
}, bn = (e, t) => {
	let n = (e) => t.replaceText(e), r = b(e.note, t), i = P(e.name, n), a = P(e.nickname, n), o = P(e.profile, n);
	return {
		...e,
		name: i,
		nickname: a,
		profile: o,
		note: r
	};
}, I = (e, t) => {
	let n = b(e.note, t), r = F(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, L = (e, t) => {
	let n = b(e.note, t), r = F(e.name, t);
	return {
		...e,
		name: r,
		note: n
	};
}, R = (e, t) => {
	let n = b(e.note, t), r = F(e.name, t), i = F(e.description, t), a = F(e.message1, t), o = F(e.message2, t);
	return {
		...e,
		name: r,
		description: i,
		message1: a,
		message2: o,
		note: n
	};
}, z = (e, t) => {
	let n = b(e.note, t), r = F(e.name, t), i = F(e.description, t);
	return {
		...e,
		name: r,
		description: i,
		note: n
	};
}, B = (e, t) => {
	let n = b(e.note, t), r = F(e.name, t), i = F(e.message1, t), a = F(e.message2, t), o = F(e.message3, t), s = F(e.message4, t);
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
	let n = P(e.parameters[0], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [n]
	};
}, Cn = (e, t) => {
	let n = e.parameters[4] ? P(e.parameters[4], t) : "";
	return ue({
		facename: e.parameters[0],
		faceIndex: e.parameters[1],
		background: e.parameters[2],
		positionType: e.parameters[3],
		speakerName: n
	}, e.indent);
}, wn = (e, t) => {
	let n = P(e.parameters[1], t);
	return {
		code: e.code,
		indent: e.indent,
		parameters: [e.parameters[0], n]
	};
}, Tn = (e, t) => {
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
}, En = (e, t, n = "\n") => Dn(e, ((e) => t.get(e)), n), Dn = (e, t, n = "\n") => ee(e.note, ((e) => P(e.value, t)), n), On = (e, t) => kn(e, ((e) => yn(e, t))), kn = (e, t) => ({
	params: Mn(e.params, ((e) => P(e, t))),
	messages: ne(e.messages, ((e) => P(e, t))),
	basic: An(e.basic, ((e) => P(e, t))),
	commands: jn(e.commands, ((e) => P(e, t)))
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
	gameTitle: P(e.gameTitle, t),
	currencyUnit: P(e.currencyUnit, t),
	elements: V(e.elements, t),
	skillTypes: V(e.skillTypes, t),
	weaponTypes: V(e.weaponTypes, t),
	armorTypes: V(e.armorTypes, t),
	equipTypes: V(e.equipTypes, t),
	terms: kn(e.terms, t)
}), V = (e, t) => e.map(((e) => P(e, t))), Pn = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n").trimEnd(), Fn = class {
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
}, In = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 108), ((e) => e.code === 408)))(e, t);
	return Ln(r) ? new H(408, r, n) : new Fn(r, n);
}, Ln = (e) => e.parameters[0] === "選択肢ヘルプ", Rn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 101), ((e) => e.code === 401)))(e, t);
	return new H(401, r, n);
}, zn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 355), ((e) => e.code === 655)))(e, t);
	return new Fn(r, n);
}, Bn = (e, t) => {
	let { bodies: n, header: r } = ((e, t) => U(e, t, ((e) => e.code === 105), ((e) => e.code === 405)))(e, t);
	return new H(405, r, n);
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
}, W = (e, t) => {
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
}, G = (e, t) => ({
	members: e.members,
	id: e.id,
	name: e.name,
	pages: e.pages.map(((e) => ({
		conditions: e.conditions,
		span: e.span,
		list: W(e.list, t)
	})))
}), K = (e, t) => ({
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
	note: b(e.note, t),
	displayName: F(e.displayName, t),
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
}), rr = (e, t) => e.map(((e) => er(e, t))), ir = (e, t) => e.map(((e) => tr(e, t))), ar = (e) => or(e, (() => [])), q = (e, t) => or(e, t), or = (e, t) => e.flatMap(((n, r) => sr(n, r, e, t))).filter(((e) => e !== null)), sr = (e, t, n, r) => {
	if (e.code === 357) return r(e);
	if (e.code === 102) return De(e);
	let i = Hn(e.code);
	if (i) {
		let e = i(n, t, cr);
		if (e !== void 0) return [e];
	}
	return e.code === 324 || e.code === 320 || e.code === 325 ? Ee(e) : null;
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
	commands: q(e.list, t)
}), pr = (e, t = () => []) => e.pages.map(((n, r) => ({
	eventId: e.id,
	pageIndex: r,
	commands: q(n.list, t)
}))), mr = (e, t = () => []) => ({
	note: e.note,
	noteItems: _(e.note),
	displayedName: e.displayName,
	events: hr(e, t)
}), hr = (e, t) => h(e, ((e, n, r) => ({
	eventId: r.id,
	pageIndex: n,
	commands: q(e.list, t),
	note: r.note,
	noteItems: _(r.note),
	name: r.name
}))), J = (e, t) => `${e}:${t}`, gr = (e) => J(e.parameters[0], e.parameters[1]), _r = (e) => [
	...e.commonEvents.data.flatMap(lr),
	...e.troops.data.flatMap(ur),
	...e.mapFiles.validMaps.flatMap(((e) => ((e) => te(e, ((e) => e.list.filter(dr))))(e.map).flat(2)))
], vr = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = gr(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}, Y = (e, t) => Mt(e.default), yr = (e, t, n = Y) => {
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
}, br = (e, t = Y) => me(he(e), ((e, n) => yr(e, n, t))), xr = (e, t, n = Y) => fe(e, br(t, n)), Sr = (e, t = Y) => e.map(((e) => xr(e.pluginName, e.schema, t))), Cr = (e, t = Y) => Sr(e, t), wr = (e, t, n = Y) => {
	let r = Cr(t, n), i = Tr(e);
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
}, Tr = (e) => vr(_r(e)), Er = (e, t, n = Y) => {
	let r = Cr(t, n), i = Tr(e);
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
}, Dr = (e) => e.kind.endsWith("[]"), Or = (e) => Dr(e.attr), kr = (e) => e.kind === "struct", Ar = (e) => e.attr.kind === "struct[]", jr = (e) => Nr[e.kind.replace("[]", "")].type === "number", Mr = (e) => Nr[e.kind.replace("[]", "")].type === "string", X = {
	type: "string",
	hasText: !0
}, Z = {
	type: "number",
	hasText: !1
}, Q = {
	type: "number",
	hasText: !1
}, Nr = {
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
	return a ? ai(_e(e.parameters[3]), a) : {
		pluginName: n,
		commandName: r,
		args: []
	};
}, ui = (e) => new pi(new Map(e)), di = () => new pi(/* @__PURE__ */ new Map()), fi = (e) => {
	let t = e.flatMap(((e) => oi(e, ((e) => new ve(e)))));
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
		return q(e, ((e) => this.extractArgs(e)));
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
	actors: $(e.actors, ((e) => bn(e, t))),
	armors: $(e.armors, ((e) => z(e, t))),
	classes: $(e.classes, ((e) => L(e, t))),
	commonEvents: $(e.commonEvents, ((e) => K(e, t))),
	enemies: $(e.enemies, ((e) => I(e, t))),
	items: $(e.items, ((e) => z(e, t))),
	mapInfos: e.mapInfos,
	skills: $(e.skills, ((e) => R(e, t))),
	states: $(e.states, ((e) => B(e, t))),
	system: {
		message: e.system.message,
		system: Nn(e.system.system, n)
	},
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
}), yi = (e, t, n, r, i) => {
	let a = A(tt(e, n), {
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
}), xi = (e, t) => Qn(e, {
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
		actors: e.actors.map(((e) => bn(e, n))),
		armors: e.armors.map(((e) => z(e, n))),
		classes: e.classes.map(((e) => L(e, n))),
		enemies: e.enemies.map(((e) => I(e, n))),
		items: e.items.map(((e) => z(e, n))),
		skills: e.skills.map(((e) => R(e, n))),
		states: e.states.map(((e) => B(e, n))),
		troops: e.troops.map(((e) => G(e, n))),
		weapons: e.weapons.map(((e) => z(e, n))),
		commonEvents: e.commonEvents.map(((e) => K(e, n)))
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
}, Ei = (e, t, n) => {
	let r = Di(e, t, n);
	return [...d(r.main), ...on(r.aux)];
}, Di = (e, t, n) => {
	let { data: r, dictionary: i } = e, a = Oi(e, t, n), o = Array.from(i.keys()).map(((e) => [e, e]));
	return {
		main: a.data,
		aux: ki(r, a.note, i, n),
		originLike: ki(r, a.note, new Map(o), n)
	};
}, Oi = (e, t, n) => {
	let { data: r, assetBundle: i, textKeys: a } = e;
	return yi(r, i, t, {
		replaceText(e) {
			let t = e.trimEnd();
			return t.length === 0 ? "" : n(t);
		},
		pluginCommand: (e) => e,
		scriptCommand: (e) => e,
		isReplaceTargetNote: (e) => a.has(e.key)
	}, ((e) => e.trimEnd()));
}, ki = (e, t, n, r) => {
	let i = Jt(e.actors.data, e.commonEvents.data, e.troops.data, e.mapFiles.validMaps.map(((e) => e.map)), n, ((e) => r(e.trimEnd())));
	return {
		systemTexts: le(ce(e.system.system), ((e) => {
			let t = e.trimEnd();
			return n.get(t);
		})),
		actorTexts: i.actorTexts,
		targetNoteKeys: Xt([...t.dataNoteSummary, ...t.mapNoteSummary]),
		textDictionary: i.textDictionary
	};
};
export { z as $, we as $t, fr as A, ut as At, Xn as B, S as Bt, Sr as C, Nt as Ct, Y as D, wt as Dt, vr as E, Ct as Et, er as F, et as Ft, Nn as G, He as Gt, Qn as H, We as Ht, nr as I, qe as It, En as J, Ue as Jt, On as K, Ve as Kt, tr as L, C as Lt, ar as M, D as Mt, q as N, O as Nt, yr as O, St as Ot, rr as P, tt as Pt, I as Q, De as Qt, ir as R, Ke as Rt, gr as S, jt as St, br as T, A as Tt, Zn as U, Be as Ut, W as V, Re as Vt, G as W, ze as Wt, bn as X, Ae as Xt, xn as Y, Oe as Yt, L as Z, Ee as Zt, Cr as _, Xt as _t, Ti as a, hn as at, _r as b, Lt as bt, vi as c, fn as ct, hi as d, on as dt, Se as en, R as et, di as f, rn as ft, wr as g, Jt as gt, li as h, Zt as ht, Ei as i, vn as it, mr as j, dt as jt, pr as k, Ot as kt, yi as l, sn as lt, fi as m, en as mt, Ci as n, yn as nt, Si as o, pn as ot, ui as p, tn as pt, Dn as q, Ge as qt, Di as r, gn as rt, xi as s, dn as st, wi as t, Te as tn, B as tt, _i as u, an as ut, Er as v, Vt as vt, xr as w, Mt as wt, J as x, It as xt, Tr as y, Ht as yt, K as z, Le as zt };
