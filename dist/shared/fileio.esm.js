import { $c as e, Bt as t, Ft as n, Ht as r, It as i, Lt as a, Rc as o, Rt as s, Uo as c, Vt as l, Wo as ee, _i as u, bi as d, d as f, di as p, el as m, fi as h, i as g, o as _, ol as te, ss as ne, xi as re, zt as ie } from "./rmmz.esm.js";
var ae = "bgm", oe = "se", se = "me", ce = "bgs", le = "img", ue = "audio", de = (e) => [
	...v(e.bgm, {
		asset: "audio",
		subDir: "bgm"
	}),
	...v(e.bgs, {
		asset: "audio",
		subDir: "bgs"
	}),
	...v(e.me, {
		asset: "audio",
		subDir: "me"
	}),
	...v(e.se, {
		asset: "audio",
		subDir: "se"
	})
], fe = (e) => [
	...v(e.characters, {
		asset: "img",
		subDir: "characters"
	}),
	...v(e.faces, {
		asset: "img",
		subDir: "faces"
	}),
	...v(e.svEnemy, {
		asset: "img",
		subDir: "sv_enemies"
	}),
	...v(e.svActors, {
		asset: "img",
		subDir: "sv_actors"
	}),
	...v(e.enemies, {
		asset: "img",
		subDir: "enemies"
	})
], v = (e, t) => Array.from(e).sort().map(((e) => ({
	asset: t.asset,
	subDir: t.subDir,
	symbol: e
}))), pe = "battlebacks1", me = "battlebacks2", he = "characters", ge = "enemies", _e = "faces", ve = "parallaxes", ye = "pictures", be = "sv_actors", xe = "sv_enemies", Se = "system", Ce = "tilesets", we = "titles1", Te = "titles2", Ee = "ActorTexts.json", De = "Dictionary.json", y = async (e, t, n, r) => n(t).then(((n) => Oe(n, t, e, r))).catch((() => ({
	success: !1,
	fileName: t,
	data: [],
	error: e.jsonParseError
}))), Oe = (e, t, n, r) => {
	try {
		let i = JSON.parse(e);
		return Array.isArray(i) ? {
			success: !0,
			fileName: t,
			data: i.filter(r),
			error: ""
		} : {
			success: !1,
			fileName: t,
			data: [],
			error: n.notArray
		};
	} catch {
		return {
			success: !1,
			fileName: t,
			data: [],
			error: n.jsonParseError
		};
	}
}, b = "Actors.json", x = "Classes.json", S = "Skills.json", C = "Items.json", w = "Weapons.json", T = "Armors.json", E = "Enemies.json", D = "Troops.json", O = "States.json", k = "Animations.json", A = "Tilesets.json", j = "CommonEvents.json", M = "MapInfos.json", N = (e, t, n) => y(e, b, t, n), P = (e, t, n) => y(e, x, t, n), F = (e, t, n) => y(e, S, t, n), I = (e, t, n) => y(e, C, t, n), ke = (e, t, n) => y(e, w, t, n), L = (e, t, n) => y(e, T, t, n), Ae = (e, t, n) => y(e, E, t, n), je = (e, t, n) => y(e, D, t, n), Me = (e, t, n) => y(e, O, t, n), Ne = (e, t, n) => y(e, k, t, n), Pe = (e, t, n) => y(e, A, t, n), Fe = (e, t, n) => y(e, j, t, n), Ie = (e, t, n) => y(e, M, t, n), R = (e, t, n) => n(e, JSON.stringify(t)), z = (e, t) => Promise.all([
	R(b, e.actors, t),
	R(x, e.classes, t),
	R(S, e.skills, t),
	R(C, e.items, t),
	R(w, e.weapons, t),
	R(T, e.armors, t),
	R(E, e.enemies, t),
	R(D, e.troops, t),
	R(O, e.states, t),
	R(k, e.animations, t),
	R(A, e.tilesets, t),
	R(j, e.commonEvents, t),
	R(M, e.mapInfos, t)
]), Le = (e) => ({
	main: Re(e),
	map: e.mapFiles.invalidMaps.map(((e) => ({
		fileName: e.filename,
		error: e.message
	})))
}), Re = (e) => {
	let t = [
		e.actors,
		e.armors,
		e.classes,
		e.commonEvents,
		e.enemies,
		e.items,
		e.skills,
		e.states,
		e.troops,
		e.weapons,
		e.mapInfos
	].filter(((e) => !e.success)).map(((e) => ({
		fileName: e.fileName,
		error: e.error
	})));
	return e.system.system === null ? [{
		fileName: e.system.message,
		error: e.system.message
	}, ...t] : t;
}, ze = (t) => [
	c({
		facename: t.image,
		faceIndex: 0,
		speakerName: t.text
	}),
	ee(t.text),
	te({
		actorId: 1,
		characterName: t.image,
		characterIndex: 0,
		battlerName: t.image,
		faceName: t.image,
		faceIndex: 0
	}),
	e({
		name: t.text,
		actorId: 1
	}),
	m({
		nickname: t.text,
		actorId: 1
	}),
	ne(t.text)
], Be = (e) => h({
	note: e.note,
	displayName: e.text,
	bgm: {
		name: e.audio,
		pan: 0,
		pitch: 100,
		volume: 100
	},
	bgs: {
		name: e.audio,
		pan: 0,
		pitch: 100,
		volume: 100
	},
	battleback1Name: e.image,
	battleback2Name: e.image,
	parallaxName: e.image,
	events: [null, {
		id: 1,
		name: "",
		note: e.note,
		x: 0,
		y: 0,
		pages: [Ve(e), He(e)]
	}]
}), Ve = (e) => u({
	image: {
		characterName: e.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: o(e)
}), He = (e) => u({
	image: {
		characterIndex: 0,
		characterName: e.image,
		tileId: 0,
		direction: 4,
		pattern: 0
	},
	list: ze(e)
}), Ue = (e) => {
	let { message: o } = e;
	return {
		actors: V(n(e), o, b),
		classes: V(a(e), o, x),
		armors: V(i(e), o, T),
		weapons: V(r(e), o, w),
		items: V(ie(e), o, C),
		enemies: V(s(e), o, E),
		skills: V(t(e), o, S),
		states: V(l(e), o, O),
		troops: V(re({
			id: 1,
			name: e.nonReplaceableText
		}), o, D),
		commonEvents: V(d({
			id: 1,
			name: e.nonReplaceableText
		}), o, j),
		mapInfos: B(o, M),
		animations: B(o, k),
		tilesets: B(o, A),
		system: {
			system: _(e),
			message: o
		},
		mapFiles: {
			info: { success: !0 },
			invalidMaps: [],
			validMaps: [We(e)]
		}
	};
}, We = (e) => ({
	filename: "Map001",
	editingName: "Test Map",
	map: Be(e)
}), B = (e, t) => ({
	data: [],
	error: e,
	fileName: t,
	success: !0
}), V = (e, t, n) => ({
	data: [e],
	error: t,
	fileName: n,
	success: !0
}), Ge = (e, t, n, r) => n(qe(e)).then(((n) => Ke(n, e, t, r))).catch((() => H(e, t.fileNotFound))), Ke = (e, t, n, r) => {
	try {
		let i = JSON.parse(e);
		return r(i) ? {
			map: i,
			filename: Je(t),
			editingName: t.name
		} : H(t, n.invalidStructure);
	} catch {
		return H(t, n.jsonParseError);
	}
}, qe = (e) => `Map${p(e.id)}.json`, Je = (e) => `Map${p(e.id)}`, H = (e, t) => ({
	map: null,
	message: t,
	filename: Je(e),
	editingName: e.name
}), Ye = (e, t, n, r) => U(e, t, n, r, ((e) => e.map)), U = async (e, t, n, r, i) => Ze(await Promise.all(e.map((async (e) => Xe(e, t, n, i, r))))), Xe = async (e, t, n, r, i) => {
	let a = await Ge(e, t, n, i);
	return a.map === null ? a : {
		editingName: a.editingName,
		filename: a.filename,
		map: r(a)
	};
}, Ze = (e) => ({
	info: { success: !0 },
	validMaps: e.filter(((e) => e.map !== null)),
	invalidMaps: e.filter(((e) => e.map === null)).map(((e) => ({
		filename: e.filename,
		message: e.message,
		map: null,
		editingName: e.editingName
	})))
}), Qe = (e, t) => t(`${e.filename}.json`, JSON.stringify(e.map)), W = (e, t) => Promise.all(e.map(((e) => Qe(e, t)))), G = "System.json", K = async (e, t, n) => {
	try {
		return $e(await t(G), e, n);
	} catch {
		return q(e.fileNotFound);
	}
}, q = (e) => ({
	system: null,
	message: e
}), $e = (e, t, n) => {
	try {
		return et(JSON.parse(e), t, n);
	} catch {
		return q(t.jsonParseError);
	}
}, et = (e, t, n) => {
	try {
		return n.validateSystemMz(e) ? {
			system: e,
			message: ""
		} : n.validateSystemMv && n.validateSystemMv(e) ? {
			system: g(e),
			message: t.mvAsMz
		} : q(t.invalidStructure);
	} catch {
		return q(t.validateFunctionError);
	}
}, tt = (e) => e.system.system !== null, nt = async (e, t, n) => Y(e, t, {
	readMap: rt,
	readActors: J,
	readArmors: J,
	readClasses: J,
	readCommonEvents: J,
	readEnemies: J,
	readItems: J,
	readSkills: J,
	readStates: J,
	readSystem: J,
	readTroops: J,
	readWeapons: J,
	readAnimations: J,
	readTilesets: J
}, n, (() => [])), rt = (e) => e.map, J = (e) => e, it = (e, t, n, r) => Y(e, t, r, n, (() => [])), at = (e, t, n, r) => Y(e, t, r, n, (() => null)), Y = async (e, t, n, r, i) => {
	let [a, o, s, c, l, ee, u, d, f, p, m, h, g, _] = await Promise.all([
		Fe(e, t, ((e) => r.validateCommonEvent(e))),
		je(e, t, ((e) => r.validateTroop(e))),
		Ae(e, t, ((e) => r.validateEnemy(e))),
		P(e, t, ((e) => r.validateClass(e))),
		F(e, t, ((e) => r.validateSkill(e))),
		I(e, t, ((e) => r.validateItem(e))),
		ke(e, t, ((e) => r.validateWeapon(e))),
		L(e, t, ((e) => r.validateArmor(e))),
		Me(e, t, ((e) => r.validateState(e))),
		N(e, t, ((e) => r.validateActor(e))),
		Ne(e, t, ((e) => r.validateAnimation(e))),
		Pe(e, t, ((e) => r.validateTileset(e))),
		Ie(e, t, ((e) => r.validateMapInfo(e))),
		K(e, t, {
			validateSystemMz: (e) => r.validateSystem(e),
			validateSystemMv: r.validateSystemMV
		})
	]);
	return {
		mapFiles: g.success ? await st(g.data, e, n, t, r.validateMap) : ot(g),
		actors: X(p, e, n.readActors, i),
		armors: X(d, e, n.readArmors, i),
		classes: X(c, e, n.readClasses, i),
		commonEvents: X(a, e, n.readCommonEvents, i),
		enemies: X(s, e, n.readEnemies, i),
		items: X(ee, e, n.readItems, i),
		mapInfos: g,
		skills: X(l, e, n.readSkills, i),
		states: X(f, e, n.readStates, i),
		system: ct(_, e, n.readSystem),
		troops: X(o, e, n.readTroops, i),
		weapons: X(u, e, n.readWeapons, i),
		animations: X(m, e, n.readAnimations, i),
		tilesets: X(h, e, n.readTilesets, i)
	};
}, ot = (e) => ({
	info: {
		filename: e.fileName,
		message: e.error,
		success: !1
	},
	validMaps: [],
	invalidMaps: []
}), st = async (e, t, n, r, i) => await U(e, t, (async (e) => r(e)), i, ((e) => n.readMap(e))), ct = (e, t, n) => {
	if (e.system === null) return {
		message: e.message,
		system: null
	};
	try {
		return {
			message: e.message,
			system: n(e.system, G)
		};
	} catch {
		return {
			message: t.dataConvertError,
			system: null
		};
	}
}, X = (e, t, n, r) => {
	if (!e.success) return {
		fileName: e.fileName,
		success: !1,
		error: e.error,
		data: r()
	};
	try {
		return {
			fileName: e.fileName,
			success: !0,
			error: "",
			data: n(e.data, e.fileName)
		};
	} catch {
		return {
			fileName: e.fileName,
			success: !1,
			error: t.dataConvertError,
			data: r()
		};
	}
}, lt = (e) => e, ut = (e, t = () => f({})) => [
	{
		filename: G,
		data: e.system.system ? e.system.system : t()
	},
	Z(b, e.actors.data),
	Z(x, e.classes.data),
	Z(S, e.skills.data),
	Z(C, e.items.data),
	Z(w, e.weapons.data),
	Z(T, e.armors.data),
	Z(E, e.enemies.data),
	Z(D, e.troops.data),
	Z(O, e.states.data),
	Z(k, e.animations.data),
	Z(A, e.tilesets.data),
	Z(j, e.commonEvents.data),
	Z(M, e.mapInfos.data),
	...dt(e.mapFiles.validMaps)
], dt = (e) => e.map(((e) => ({
	filename: `${e.filename}.json`,
	data: e.map
}))), Z = (e, t) => ({
	filename: e,
	data: [null, ...t]
}), Q = (e, t) => t(G, JSON.stringify(e)), ft = (e, t, n) => Promise.all([
	z(mt(e), n),
	Q(e.system, n),
	W(t.validMaps, n)
]).then((() => {})), pt = (e, t) => {
	let n = [z(ht(e), t), W(e.mapFiles.validMaps, t)];
	return e.system.system && n.push(Q(e.system.system, t)), Promise.all(n).then((() => {}));
}, $ = (e) => [null, ...e], mt = (e) => ({
	actors: $(e.actors),
	classes: $(e.classes),
	skills: $(e.skills),
	items: $(e.items),
	weapons: $(e.weapons),
	armors: $(e.armors),
	enemies: $(e.enemies),
	troops: $(e.troops),
	states: $(e.states),
	animations: $(e.animations),
	tilesets: $(e.tilesets),
	commonEvents: $(e.commonEvents),
	mapInfos: $(e.mapInfos)
}), ht = (e) => ({
	actors: $(e.actors.data),
	classes: $(e.classes.data),
	skills: $(e.skills.data),
	items: $(e.items.data),
	weapons: $(e.weapons.data),
	armors: $(e.armors.data),
	enemies: $(e.enemies.data),
	troops: $(e.troops.data),
	states: $(e.states.data),
	animations: $(e.animations.data),
	tilesets: $(e.tilesets.data),
	commonEvents: $(e.commonEvents.data),
	mapInfos: $(e.mapInfos.data)
}), gt = "data", _t = "js";
export { he as $, F as A, E as B, Ne as C, Ae as D, Fe as E, b as F, A as G, M as H, k as I, y as J, D as K, T as L, Pe as M, je as N, I as O, ke as P, me as Q, x as R, N as S, P as T, S as U, C as V, O as W, De as X, Ee as Y, pe as Z, Ye as _, oe as _t, pt as a, xe as at, Le as b, tt as c, we as ct, nt as d, fe as dt, ge as et, K as f, ue as ft, Ge as g, se as gt, W as h, ce as ht, ft as i, be as it, Me as j, Ie as k, it as l, Te as lt, Qe as m, ae as mt, _t as n, ve as nt, Q as o, Se as ot, G as p, le as pt, w as q, ut as r, ye as rt, lt as s, Ce as st, gt as t, _e as tt, at as u, de as ut, U as v, L as w, z as x, Ue as y, j as z };
