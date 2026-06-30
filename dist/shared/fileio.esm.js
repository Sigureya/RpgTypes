import { Bt as e, El as t, Hi as n, Ht as r, It as i, Lt as a, Ml as o, Ni as s, Pi as c, Rt as ee, Tl as l, Ui as u, Ut as d, Vt as f, ds as p, fs as m, i as h, ks as g, ul as te, zi as _, zt as ne } from "./rmmz.esm.js";
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
}, b = "Actors.json", x = "Classes.json", S = "Skills.json", C = "Items.json", w = "Weapons.json", T = "Armors.json", E = "Enemies.json", D = "Troops.json", O = "States.json", k = "Animations.json", A = "Tilesets.json", j = "CommonEvents.json", M = "MapInfos.json", N = (e, t, n) => y(e, b, t, n), P = (e, t, n) => y(e, x, t, n), F = (e, t, n) => y(e, S, t, n), I = (e, t, n) => y(e, C, t, n), L = (e, t, n) => y(e, w, t, n), De = (e, t, n) => y(e, T, t, n), Oe = (e, t, n) => y(e, E, t, n), ke = (e, t, n) => y(e, D, t, n), Ae = (e, t, n) => y(e, O, t, n), je = (e, t, n) => y(e, k, t, n), Me = (e, t, n) => y(e, A, t, n), Ne = (e, t, n) => y(e, j, t, n), Pe = (e, t, n) => y(e, M, t, n), R = (e, t, n) => n(e, JSON.stringify(t)), z = (e, t) => Promise.all([
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
]), Fe = (e) => ({
	main: Ie(e),
	map: e.mapFiles.invalidMaps.map(((e) => ({
		fileName: e.filename,
		error: e.message
	})))
}), Ie = (e) => [
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
}))), Le = (e) => [
	p({
		facename: e.image,
		faceIndex: 0,
		speakerName: e.text
	}),
	m(e.text),
	o({
		actorId: 1,
		characterName: e.image,
		characterIndex: 0,
		battlerName: e.image,
		faceName: e.image,
		faceIndex: 0
	}),
	l({
		name: e.text,
		actorId: 1
	}),
	t({
		nickname: e.text,
		actorId: 1
	}),
	g(e.text)
], Re = (e) => c({
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
		pages: [ze(e), Be(e)]
	}]
}), ze = (e) => _({
	image: {
		characterName: e.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: te(e)
}), Be = (e) => _({
	image: {
		characterIndex: 0,
		characterName: e.image,
		tileId: 0,
		direction: 4,
		pattern: 0
	},
	list: Le(e)
}), Ve = (t) => {
	let { message: o } = t;
	return {
		actors: V(i(t), o, b),
		classes: V(ee(t), o, x),
		armors: V(a(t), o, T),
		weapons: V(d(t), o, w),
		items: V(e(t), o, C),
		enemies: V(ne(t), o, E),
		skills: V(f(t), o, S),
		states: V(r(t), o, O),
		troops: V(u({
			id: 1,
			name: t.nonReplaceableText
		}), o, D),
		commonEvents: V(n({
			id: 1,
			name: t.nonReplaceableText
		}), o, j),
		mapInfos: B(o, M),
		animations: B(o, k),
		tilesets: B(o, A),
		mapFiles: {
			info: { success: !0 },
			invalidMaps: [],
			validMaps: [He(t)]
		}
	};
}, He = (e) => ({
	filename: "Map001",
	editingName: "Test Map",
	map: Re(e)
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
}), Ue = (e, t, n, r) => n(Ge(e)).then(((n) => We(n, e, t, r))).catch((() => H(e, t.fileNotFound))), We = (e, t, n, r) => {
	try {
		let i = JSON.parse(e);
		return r(i) ? {
			map: i,
			filename: Ke(t),
			editingName: t.name
		} : H(t, n.invalidStructure);
	} catch {
		return H(t, n.jsonParseError);
	}
}, Ge = (e) => `Map${s(e.id)}.json`, Ke = (e) => `Map${s(e.id)}`, H = (e, t) => ({
	map: null,
	message: t,
	filename: Ke(e),
	editingName: e.name
}), qe = (e, t, n, r) => U(e, t, n, r, ((e) => e.map)), U = async (e, t, n, r, i) => Ye(await Promise.all(e.map((async (e) => Je(e, t, n, i, r))))), Je = async (e, t, n, r, i) => {
	let a = await Ue(e, t, n, i);
	return a.map === null ? a : {
		editingName: a.editingName,
		filename: a.filename,
		map: r(a)
	};
}, Ye = (e) => ({
	info: { success: !0 },
	validMaps: e.filter(((e) => e.map !== null)),
	invalidMaps: e.filter(((e) => e.map === null)).map(((e) => ({
		filename: e.filename,
		message: e.message,
		map: null,
		editingName: e.editingName
	})))
}), W = (e, t) => t(`${e.filename}.json`, JSON.stringify(e.map)), G = (e, t) => Promise.all(e.map(((e) => W(e, t)))), Xe = (e) => e.system.system !== null, Ze = async (e, t, n) => q(e, t, {
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
	let [a, o, s, c, ee, l, u, d, f, p, m, h, g] = await Promise.all([
		Ne(e, t, ((e) => r.validateCommonEvent(e))),
		ke(e, t, ((e) => r.validateTroop(e))),
		Oe(e, t, ((e) => r.validateEnemy(e))),
		P(e, t, ((e) => r.validateClass(e))),
		F(e, t, ((e) => r.validateSkill(e))),
		I(e, t, ((e) => r.validateItem(e))),
		L(e, t, ((e) => r.validateWeapon(e))),
		De(e, t, ((e) => r.validateArmor(e))),
		Ae(e, t, ((e) => r.validateState(e))),
		N(e, t, ((e) => r.validateActor(e))),
		je(e, t, ((e) => r.validateAnimation(e))),
		Me(e, t, ((e) => r.validateTileset(e))),
		Pe(e, t, ((e) => r.validateMapInfo(e)))
	]);
	return {
		mapFiles: g.success ? await nt(g.data, e, n, t, r.validateMap) : tt(g),
		actors: J(p, e, n.readActors, i),
		armors: J(d, e, n.readArmors, i),
		classes: J(c, e, n.readClasses, i),
		commonEvents: J(a, e, n.readCommonEvents, i),
		enemies: J(s, e, n.readEnemies, i),
		items: J(l, e, n.readItems, i),
		mapInfos: g,
		skills: J(ee, e, n.readSkills, i),
		states: J(f, e, n.readStates, i),
		troops: J(o, e, n.readTroops, i),
		weapons: J(u, e, n.readWeapons, i),
		animations: J(m, e, n.readAnimations, i),
		tilesets: J(h, e, n.readTilesets, i)
	};
}, tt = (e) => ({
	info: {
		filename: e.fileName,
		message: e.error,
		success: !1
	},
	validMaps: [],
	invalidMaps: []
}), nt = async (e, t, n, r, i) => await U(e, t, (async (e) => r(e)), i, ((e) => n.readMap(e))), J = (e, t, n, r) => {
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
			system: h(e),
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
	z(pt(e), n),
	Q(e.system, n),
	G(t.validMaps, n)
]).then((() => {})), ft = (e, t) => {
	let n = [z(mt(e), t), G(e.mapFiles.validMaps, t)];
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
export { fe as $, Pe as A, j as B, N as C, Ne as D, P as E, L as F, O as G, C as H, b as I, w as J, A as K, k as L, Ae as M, Me as N, Oe as O, ke as P, de as Q, T as R, z as S, De as T, M as U, E as V, S as W, we as X, y as Y, Te as Z, Ue as _, ae as _t, ft as a, ve as at, Ve as b, it as c, xe as ct, Xe as d, le as dt, pe as et, $e as f, ue as ft, G as g, oe as gt, W as h, re as ht, dt as i, _e as it, F as j, I as k, Y as l, Se as lt, Ze as m, se as mt, gt as n, he as nt, Q as o, ye as ot, et as p, ce as pt, D as q, lt as r, ge as rt, ot as s, be as st, ht as t, me as tt, rt as u, Ce as ut, qe as v, ie as vt, je as w, Fe as x, U as y, x as z };
