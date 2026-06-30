import { Bt as e, El as t, Hi as n, Ht as r, It as i, Lt as a, Ml as o, Ni as s, Pi as c, Rt as l, Tl as ee, Ui as te, Ut as ne, Vt as re, ds as ie, fs as ae, i as oe, ks as u, ul as se, zi as ce, zt as le } from "./rmmz.esm.js";
var ue = "bgm", de = "se", fe = "me", pe = "bgs", me = "img", he = "audio", ge = (e) => [
	...d(e.bgm, {
		asset: "audio",
		subDir: "bgm"
	}),
	...d(e.bgs, {
		asset: "audio",
		subDir: "bgs"
	}),
	...d(e.me, {
		asset: "audio",
		subDir: "me"
	}),
	...d(e.se, {
		asset: "audio",
		subDir: "se"
	})
], _e = (e) => [
	...d(e.characters, {
		asset: "img",
		subDir: "characters"
	}),
	...d(e.faces, {
		asset: "img",
		subDir: "faces"
	}),
	...d(e.svEnemy, {
		asset: "img",
		subDir: "sv_enemies"
	}),
	...d(e.svActors, {
		asset: "img",
		subDir: "sv_actors"
	}),
	...d(e.enemies, {
		asset: "img",
		subDir: "enemies"
	})
], d = (e, t) => Array.from(e).sort().map(((e) => ({
	asset: t.asset,
	subDir: t.subDir,
	symbol: e
}))), ve = "battlebacks1", ye = "battlebacks2", be = "characters", xe = "enemies", Se = "faces", Ce = "parallaxes", we = "pictures", Te = "sv_actors", Ee = "sv_enemies", De = "system", Oe = "tilesets", ke = "titles1", Ae = "titles2", je = "ActorTexts.json", Me = "Dictionary.json", f = async (e, t, n, r) => n(t).then(((n) => Ne(n, t, e, r))).catch((() => ({
	success: !1,
	fileName: t,
	data: [],
	error: e.jsonParseError
}))), Ne = (e, t, n, r) => {
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
}, p = "Actors.json", m = "Classes.json", h = "Skills.json", g = "Items.json", _ = "Weapons.json", v = "Armors.json", y = "Enemies.json", b = "Troops.json", x = "States.json", S = "Animations.json", C = "Tilesets.json", w = "CommonEvents.json", T = "MapInfos.json", E = (e, t, n) => f(e, p, t, n), D = (e, t, n) => f(e, m, t, n), O = (e, t, n) => f(e, h, t, n), k = (e, t, n) => f(e, g, t, n), A = (e, t, n) => f(e, _, t, n), j = (e, t, n) => f(e, v, t, n), M = (e, t, n) => f(e, y, t, n), N = (e, t, n) => f(e, b, t, n), P = (e, t, n) => f(e, x, t, n), F = (e, t, n) => f(e, S, t, n), I = (e, t, n) => f(e, C, t, n), L = (e, t, n) => f(e, w, t, n), R = (e, t, n) => f(e, T, t, n), z = (e, t, n) => n(e, JSON.stringify(t)), B = (e, t) => Promise.all([
	z(p, e.actors, t),
	z(m, e.classes, t),
	z(h, e.skills, t),
	z(g, e.items, t),
	z(_, e.weapons, t),
	z(v, e.armors, t),
	z(y, e.enemies, t),
	z(b, e.troops, t),
	z(x, e.states, t),
	z(S, e.animations, t),
	z(C, e.tilesets, t),
	z(w, e.commonEvents, t),
	z(T, e.mapInfos, t)
]), Pe = (e) => ({
	main: Fe(e),
	map: e.mapFiles.invalidMaps.map(((e) => ({
		fileName: e.filename,
		error: e.message
	})))
}), Fe = (e) => [
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
}))), Ie = (e) => [
	ie({
		facename: e.image,
		faceIndex: 0,
		speakerName: e.text
	}),
	ae(e.text),
	o({
		actorId: 1,
		characterName: e.image,
		characterIndex: 0,
		battlerName: e.image,
		faceName: e.image,
		faceIndex: 0
	}),
	ee({
		name: e.text,
		actorId: 1
	}),
	t({
		nickname: e.text,
		actorId: 1
	}),
	u(e.text)
], Le = (e) => c({
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
		pages: [Re(e), ze(e)]
	}]
}), Re = (e) => ce({
	image: {
		characterName: e.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: se(e)
}), ze = (e) => ce({
	image: {
		characterIndex: 0,
		characterName: e.image,
		tileId: 0,
		direction: 4,
		pattern: 0
	},
	list: Ie(e)
}), Be = (t) => {
	let { message: o } = t;
	return {
		actors: H(i(t), o, p),
		classes: H(l(t), o, m),
		armors: H(a(t), o, v),
		weapons: H(ne(t), o, _),
		items: H(e(t), o, g),
		enemies: H(le(t), o, y),
		skills: H(re(t), o, h),
		states: H(r(t), o, x),
		troops: H(te({
			id: 1,
			name: t.nonReplaceableText
		}), o, b),
		commonEvents: H(n({
			id: 1,
			name: t.nonReplaceableText
		}), o, w),
		mapInfos: V(o, T),
		animations: V(o, S),
		tilesets: V(o, C),
		mapFiles: {
			info: { success: !0 },
			invalidMaps: [],
			validMaps: [Ve(t)]
		}
	};
}, Ve = (e) => ({
	filename: "Map001",
	editingName: "Test Map",
	map: Le(e)
}), V = (e, t) => ({
	data: [],
	error: e,
	fileName: t,
	success: !0
}), H = (e, t, n) => ({
	data: [e],
	error: t,
	fileName: n,
	success: !0
}), He = (e, t, n, r) => n(We(e)).then(((n) => Ue(n, e, t, r))).catch((() => U(e, t.fileNotFound))), Ue = (e, t, n, r) => {
	try {
		let i = JSON.parse(e);
		return r(i) ? {
			map: i,
			filename: Ge(t),
			editingName: t.name
		} : U(t, n.invalidStructure);
	} catch {
		return U(t, n.jsonParseError);
	}
}, We = (e) => `Map${s(e.id)}.json`, Ge = (e) => `Map${s(e.id)}`, U = (e, t) => ({
	map: null,
	message: t,
	filename: Ge(e),
	editingName: e.name
}), Ke = (e, t, n, r) => W(e, t, n, r, ((e) => e.map)), W = async (e, t, n, r, i) => Je(await Promise.all(e.map((async (e) => qe(e, t, n, i, r))))), qe = async (e, t, n, r, i) => {
	let a = await He(e, t, n, i);
	return a.map === null ? a : {
		editingName: a.editingName,
		filename: a.filename,
		map: r(a)
	};
}, Je = (e) => ({
	info: { success: !0 },
	validMaps: e.filter(((e) => e.map !== null)),
	invalidMaps: e.filter(((e) => e.map === null)).map(((e) => ({
		filename: e.filename,
		message: e.message,
		map: null,
		editingName: e.editingName
	})))
}), Ye = (e, t) => t(`${e.filename}.json`, JSON.stringify(e.map)), G = (e, t) => Promise.all(e.map(((e) => Ye(e, t)))), Xe = (e) => e.system.system !== null, Ze = async (e, t, n) => q(e, t, {
	readMap: Qe,
	readActors: K,
	readArmors: K,
	readClasses: K,
	readCommonEvents: K,
	readEnemies: K,
	readItems: K,
	readSkills: K,
	readStates: K,
	readTroops: K,
	readWeapons: K,
	readAnimations: K,
	readTilesets: K
}, n, (() => [])), Qe = (e) => e.map, K = (e) => e, $e = (e, t, n, r) => q(e, t, r, n, (() => [])), et = (e, t, n, r) => q(e, t, r, n, (() => null)), q = async (e, t, n, r, i) => {
	let [a, o, s, c, l, ee, te, ne, re, ie, ae, oe, u] = await Promise.all([
		L(e, t, ((e) => r.validateCommonEvent(e))),
		N(e, t, ((e) => r.validateTroop(e))),
		M(e, t, ((e) => r.validateEnemy(e))),
		D(e, t, ((e) => r.validateClass(e))),
		O(e, t, ((e) => r.validateSkill(e))),
		k(e, t, ((e) => r.validateItem(e))),
		A(e, t, ((e) => r.validateWeapon(e))),
		j(e, t, ((e) => r.validateArmor(e))),
		P(e, t, ((e) => r.validateState(e))),
		E(e, t, ((e) => r.validateActor(e))),
		F(e, t, ((e) => r.validateAnimation(e))),
		I(e, t, ((e) => r.validateTileset(e))),
		R(e, t, ((e) => r.validateMapInfo(e)))
	]);
	return {
		mapFiles: u.success ? await nt(u.data, e, n, t, r.validateMap) : tt(u),
		actors: J(ie, e, n.readActors, i),
		armors: J(ne, e, n.readArmors, i),
		classes: J(c, e, n.readClasses, i),
		commonEvents: J(a, e, n.readCommonEvents, i),
		enemies: J(s, e, n.readEnemies, i),
		items: J(ee, e, n.readItems, i),
		mapInfos: u,
		skills: J(l, e, n.readSkills, i),
		states: J(re, e, n.readStates, i),
		troops: J(o, e, n.readTroops, i),
		weapons: J(te, e, n.readWeapons, i),
		animations: J(ae, e, n.readAnimations, i),
		tilesets: J(oe, e, n.readTilesets, i)
	};
}, tt = (e) => ({
	info: {
		filename: e.fileName,
		message: e.error,
		success: !1
	},
	validMaps: [],
	invalidMaps: []
}), nt = async (e, t, n, r, i) => await W(e, t, (async (e) => r(e)), i, ((e) => n.readMap(e))), J = (e, t, n, r) => {
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
}, rt = (e) => e, Y = "System.json", it = async (e, t, n) => {
	try {
		return at(await t(Y), e, n);
	} catch {
		return X(e.fileNotFound);
	}
}, X = (e) => ({
	system: null,
	message: e
}), at = (e, t, n) => {
	try {
		return ot(JSON.parse(e), t, n);
	} catch {
		return X(t.jsonParseError);
	}
}, ot = (e, t, n) => {
	try {
		return n.validateSystemMz(e) ? {
			system: e,
			message: ""
		} : n.validateSystemMv && n.validateSystemMv(e) ? {
			system: oe(e),
			message: t.mvAsMz
		} : X(t.invalidStructure);
	} catch {
		return X(t.validateFunctionError);
	}
}, st = (e) => [
	Z(p, e.actors.data),
	Z(m, e.classes.data),
	Z(h, e.skills.data),
	Z(g, e.items.data),
	Z(_, e.weapons.data),
	Z(v, e.armors.data),
	Z(y, e.enemies.data),
	Z(b, e.troops.data),
	Z(x, e.states.data),
	Z(S, e.animations.data),
	Z(C, e.tilesets.data),
	Z(w, e.commonEvents.data),
	Z(T, e.mapInfos.data),
	...ct(e.mapFiles.validMaps)
], ct = (e) => e.map(((e) => ({
	filename: `${e.filename}.json`,
	data: e.map
}))), Z = (e, t) => ({
	filename: e,
	data: [null, ...t]
}), Q = (e, t) => t(Y, JSON.stringify(e)), lt = (e, t, n) => Promise.all([
	B(dt(e), n),
	Q(e.system, n),
	G(t.validMaps, n)
]).then((() => {})), ut = (e, t) => {
	let n = [B(ft(e), t), G(e.mapFiles.validMaps, t)];
	return e.system.system && n.push(Q(e.system.system, t)), Promise.all(n).then((() => {}));
}, $ = (e) => [null, ...e], dt = (e) => ({
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
}), ft = (e) => ({
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
}), pt = "data", mt = "js";
export { be as $, O as A, y as B, F as C, M as D, L as E, p as F, C as G, T as H, S as I, f as J, b as K, v as L, I as M, N, k as O, A as P, ye as Q, m as R, E as S, D as T, h as U, g as V, x as W, Me as X, je as Y, ve as Z, Ke as _, de as _t, ut as a, Ee as at, Pe as b, Y as c, ke as ct, $e as d, _e as dt, xe as et, et as f, he as ft, He as g, fe as gt, G as h, pe as ht, lt as i, Te as it, P as j, R as k, rt as l, Ae as lt, Ye as m, ue as mt, mt as n, Ce as nt, Q as o, De as ot, Ze as p, me as pt, _ as q, st as r, we as rt, it as s, Oe as st, pt as t, Se as tt, Xe as u, ge as ut, W as v, j as w, B as x, Be as y, w as z };
