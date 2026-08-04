import { Bd as e, Gt as t, Io as n, Jt as r, Kt as i, Ml as a, Nl as o, Qt as s, Xl as c, Xt as l, Yt as u, Zo as d, Zt as f, cf as p, i as m, ls as h, nf as g, ns as _, qt as ee, tf as te, us as ne } from "./rmmz.esm.js";
var re = "bgm", ie = "se", ae = "me", oe = "bgs", se = "img", ce = "audio", le = (e) => [
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
], ue = (e) => [
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
}))), de = "battlebacks1", fe = "battlebacks2", pe = "characters", me = "enemies", he = "faces", ge = "parallaxes", _e = "pictures", ve = "sv_actors", ye = "sv_enemies", be = "system", xe = "tilesets", Se = "titles1", Ce = "titles2", we = "ActorTexts.json", Te = "Dictionary.json", y = async (e, t, n, r) => n(t).then(((n) => Ee(n, t, e, r))).catch((() => ({
	success: !1,
	fileName: t,
	data: [],
	error: e.jsonParseError
}))), Ee = (e, t, n, r) => {
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
}, b = "Actors.json", x = "Classes.json", S = "Skills.json", C = "Items.json", w = "Weapons.json", T = "Armors.json", E = "Enemies.json", D = "Troops.json", O = "States.json", k = "Animations.json", A = "Tilesets.json", j = "CommonEvents.json", M = "MapInfos.json", N = (e, t, n) => y(e, b, t, n), P = (e, t, n) => y(e, x, t, n), F = (e, t, n) => y(e, S, t, n), I = (e, t, n) => y(e, C, t, n), L = (e, t, n) => y(e, w, t, n), R = (e, t, n) => y(e, T, t, n), De = (e, t, n) => y(e, E, t, n), Oe = (e, t, n) => y(e, D, t, n), ke = (e, t, n) => y(e, O, t, n), Ae = (e, t, n) => y(e, k, t, n), je = (e, t, n) => y(e, A, t, n), Me = (e, t, n) => y(e, j, t, n), Ne = (e, t, n) => y(e, M, t, n), z = (e, t, n) => n(e, JSON.stringify(t)), B = (e, t) => Promise.all([
	z(b, e.actors, t),
	z(x, e.classes, t),
	z(S, e.skills, t),
	z(C, e.items, t),
	z(w, e.weapons, t),
	z(T, e.armors, t),
	z(E, e.enemies, t),
	z(D, e.troops, t),
	z(O, e.states, t),
	z(k, e.animations, t),
	z(A, e.tilesets, t),
	z(j, e.commonEvents, t),
	z(M, e.mapInfos, t)
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
	a({
		facename: e.image,
		faceIndex: 0,
		speakerName: e.text
	}),
	o(e.text),
	p({
		actorId: 1,
		characterName: e.image,
		characterIndex: 0,
		battlerName: e.image,
		faceName: e.image,
		faceIndex: 0
	}),
	te({
		name: e.text,
		actorId: 1
	}),
	g({
		nickname: e.text,
		actorId: 1
	}),
	c(e.text)
], Le = (e) => d({
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
}), Re = (t) => _({
	image: {
		characterName: t.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: e(t)
}), ze = (e) => _({
	image: {
		characterIndex: 0,
		characterName: e.image,
		tileId: 0,
		direction: 4,
		pattern: 0
	},
	list: Ie(e)
}), Be = (e) => {
	let { message: n } = e;
	return {
		actors: H(t(e), n, b),
		classes: H(ee(e), n, x),
		armors: H(i(e), n, T),
		weapons: H(s(e), n, w),
		items: H(u(e), n, C),
		enemies: H(r(e), n, E),
		skills: H(l(e), n, S),
		states: H(f(e), n, O),
		troops: H(ne({
			id: 1,
			name: e.nonReplaceableText
		}), n, D),
		commonEvents: H(h({
			id: 1,
			name: e.nonReplaceableText
		}), n, j),
		mapInfos: V(n, M),
		animations: V(n, k),
		tilesets: V(n, A),
		mapFiles: {
			info: { success: !0 },
			invalidMaps: [],
			validMaps: [Ve(e)]
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
}, We = (e) => `Map${n(e.id)}.json`, Ge = (e) => `Map${n(e.id)}`, U = (e, t) => ({
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
	let [a, o, s, c, l, u, d, f, p, m, h, g, _] = await Promise.all([
		Me(e, t, ((e) => r.validateCommonEvent(e))),
		Oe(e, t, ((e) => r.validateTroop(e))),
		De(e, t, ((e) => r.validateEnemy(e))),
		P(e, t, ((e) => r.validateClass(e))),
		F(e, t, ((e) => r.validateSkill(e))),
		I(e, t, ((e) => r.validateItem(e))),
		L(e, t, ((e) => r.validateWeapon(e))),
		R(e, t, ((e) => r.validateArmor(e))),
		ke(e, t, ((e) => r.validateState(e))),
		N(e, t, ((e) => r.validateActor(e))),
		Ae(e, t, ((e) => r.validateAnimation(e))),
		je(e, t, ((e) => r.validateTileset(e))),
		Ne(e, t, ((e) => r.validateMapInfo(e)))
	]);
	return {
		mapFiles: _.success ? await nt(_.data, e, n, t, r.validateMap) : tt(_),
		actors: J(m, e, n.readActors, i),
		armors: J(f, e, n.readArmors, i),
		classes: J(c, e, n.readClasses, i),
		commonEvents: J(a, e, n.readCommonEvents, i),
		enemies: J(s, e, n.readEnemies, i),
		items: J(u, e, n.readItems, i),
		mapInfos: _,
		skills: J(l, e, n.readSkills, i),
		states: J(p, e, n.readStates, i),
		troops: J(o, e, n.readTroops, i),
		weapons: J(d, e, n.readWeapons, i),
		animations: J(h, e, n.readAnimations, i),
		tilesets: J(g, e, n.readTilesets, i)
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
}, at = (e, t, n) => {
	try {
		let t = JSON.parse(e);
		if (n(t)) return {
			system: t,
			message: ""
		};
	} catch {}
	return X(t.jsonParseError);
}, ot = async (e, t, n) => {
	try {
		return st(await t(Y), e, n);
	} catch {
		return X(e.fileNotFound);
	}
}, X = (e) => ({
	system: null,
	message: e
}), st = (e, t, n) => {
	try {
		return ct(JSON.parse(e), t, n);
	} catch {
		return X(t.jsonParseError);
	}
}, ct = (e, t, n) => {
	try {
		return n.validateSystemMz(e) ? {
			system: e,
			message: ""
		} : n.validateSystemMv && n.validateSystemMv(e) ? {
			system: m(e),
			message: t.mvAsMz
		} : X(t.invalidStructure);
	} catch {
		return X(t.validateFunctionError);
	}
}, lt = (e) => [
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
	...ut(e.mapFiles.validMaps)
], ut = (e) => e.map(((e) => ({
	filename: `${e.filename}.json`,
	data: e.map
}))), Z = (e, t) => ({
	filename: e,
	data: [null, ...t]
}), Q = (e, t) => t(Y, JSON.stringify(e)), dt = (e, t, n) => Promise.all([
	B(pt(e), n),
	Q(e.system, n),
	G(t.validMaps, n)
]).then((() => {})), ft = (e, t) => {
	let n = [B(mt(e), t), G(e.mapFiles.validMaps, t)];
	return e.system.system && n.push(Q(e.system.system, t)), Promise.all(n).then((() => {}));
}, $ = (e) => [null, ...e], pt = (e) => ({
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
}), mt = (e) => ({
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
}), ht = "data", gt = "js";
export { fe as $, Ne as A, j as B, N as C, Me as D, P as E, L as F, O as G, C as H, b as I, w as J, A as K, k as L, ke as M, je as N, De as O, Oe as P, de as Q, T as R, B as S, R as T, M as U, E as V, S as W, we as X, y as Y, Te as Z, He as _, ae as _t, ft as a, ve as at, Be as b, it as c, xe as ct, Xe as d, le as dt, pe as et, $e as f, ue as ft, G as g, oe as gt, Ye as h, re as ht, dt as i, _e as it, F as j, I as k, Y as l, Se as lt, Ze as m, se as mt, gt as n, he as nt, Q as o, ye as ot, et as p, ce as pt, D as q, lt as r, ge as rt, ot as s, be as st, ht as t, me as tt, rt as u, Ce as ut, Ke as v, ie as vt, Ae as w, Pe as x, W as y, x as z };
