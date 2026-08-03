import { $d as e, Al as t, Gt as n, Io as r, Jl as i, Jt as a, Kt as o, Qt as s, Rd as ee, Xt as c, Yo as l, Yt as u, Zt as d, cs as f, ef as p, es as m, i as h, jl as g, of as te, qt as ne, ss as re } from "./rmmz.esm.js";
var ie = "bgm", ae = "se", oe = "me", se = "bgs", ce = "img", le = "audio", ue = (e) => [
	..._(e.bgm, {
		asset: "audio",
		subDir: "bgm"
	}),
	..._(e.bgs, {
		asset: "audio",
		subDir: "bgs"
	}),
	..._(e.me, {
		asset: "audio",
		subDir: "me"
	}),
	..._(e.se, {
		asset: "audio",
		subDir: "se"
	})
], de = (e) => [
	..._(e.characters, {
		asset: "img",
		subDir: "characters"
	}),
	..._(e.faces, {
		asset: "img",
		subDir: "faces"
	}),
	..._(e.svEnemy, {
		asset: "img",
		subDir: "sv_enemies"
	}),
	..._(e.svActors, {
		asset: "img",
		subDir: "sv_actors"
	}),
	..._(e.enemies, {
		asset: "img",
		subDir: "enemies"
	})
], _ = (e, t) => Array.from(e).sort().map(((e) => ({
	asset: t.asset,
	subDir: t.subDir,
	symbol: e
}))), fe = "battlebacks1", pe = "battlebacks2", me = "characters", he = "enemies", ge = "faces", _e = "parallaxes", ve = "pictures", ye = "sv_actors", be = "sv_enemies", xe = "system", Se = "tilesets", Ce = "titles1", we = "titles2", Te = "ActorTexts.json", Ee = "Dictionary.json", v = async (e, t, n, r) => n(t).then(((n) => De(n, t, e, r))).catch((() => ({
	success: !1,
	fileName: t,
	data: [],
	error: e.jsonParseError
}))), De = (e, t, n, r) => {
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
}, y = "Actors.json", b = "Classes.json", x = "Skills.json", S = "Items.json", C = "Weapons.json", w = "Armors.json", T = "Enemies.json", E = "Troops.json", D = "States.json", O = "Animations.json", k = "Tilesets.json", A = "CommonEvents.json", j = "MapInfos.json", M = (e, t, n) => v(e, y, t, n), N = (e, t, n) => v(e, b, t, n), P = (e, t, n) => v(e, x, t, n), F = (e, t, n) => v(e, S, t, n), I = (e, t, n) => v(e, C, t, n), L = (e, t, n) => v(e, w, t, n), Oe = (e, t, n) => v(e, T, t, n), ke = (e, t, n) => v(e, E, t, n), Ae = (e, t, n) => v(e, D, t, n), je = (e, t, n) => v(e, O, t, n), Me = (e, t, n) => v(e, k, t, n), Ne = (e, t, n) => v(e, A, t, n), Pe = (e, t, n) => v(e, j, t, n), R = (e, t, n) => n(e, JSON.stringify(t)), z = (e, t) => Promise.all([
	R(y, e.actors, t),
	R(b, e.classes, t),
	R(x, e.skills, t),
	R(S, e.items, t),
	R(C, e.weapons, t),
	R(w, e.armors, t),
	R(T, e.enemies, t),
	R(E, e.troops, t),
	R(D, e.states, t),
	R(O, e.animations, t),
	R(k, e.tilesets, t),
	R(A, e.commonEvents, t),
	R(j, e.mapInfos, t)
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
}))), Le = (n) => [
	t({
		facename: n.image,
		faceIndex: 0,
		speakerName: n.text
	}),
	g(n.text),
	te({
		actorId: 1,
		characterName: n.image,
		characterIndex: 0,
		battlerName: n.image,
		faceName: n.image,
		faceIndex: 0
	}),
	e({
		name: n.text,
		actorId: 1
	}),
	p({
		nickname: n.text,
		actorId: 1
	}),
	i(n.text)
], Re = (e) => l({
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
}), ze = (e) => m({
	image: {
		characterName: e.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: ee(e)
}), Be = (e) => m({
	image: {
		characterIndex: 0,
		characterName: e.image,
		tileId: 0,
		direction: 4,
		pattern: 0
	},
	list: Le(e)
}), Ve = (e) => {
	let { message: t } = e;
	return {
		actors: V(n(e), t, y),
		classes: V(ne(e), t, b),
		armors: V(o(e), t, w),
		weapons: V(s(e), t, C),
		items: V(u(e), t, S),
		enemies: V(a(e), t, T),
		skills: V(c(e), t, x),
		states: V(d(e), t, D),
		troops: V(f({
			id: 1,
			name: e.nonReplaceableText
		}), t, E),
		commonEvents: V(re({
			id: 1,
			name: e.nonReplaceableText
		}), t, A),
		mapInfos: B(t, j),
		animations: B(t, O),
		tilesets: B(t, k),
		mapFiles: {
			info: { success: !0 },
			invalidMaps: [],
			validMaps: [He(e)]
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
}, Ge = (e) => `Map${r(e.id)}.json`, Ke = (e) => `Map${r(e.id)}`, H = (e, t) => ({
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
	let [a, o, s, ee, c, l, u, d, f, p, m, h, g] = await Promise.all([
		Ne(e, t, ((e) => r.validateCommonEvent(e))),
		ke(e, t, ((e) => r.validateTroop(e))),
		Oe(e, t, ((e) => r.validateEnemy(e))),
		N(e, t, ((e) => r.validateClass(e))),
		P(e, t, ((e) => r.validateSkill(e))),
		F(e, t, ((e) => r.validateItem(e))),
		I(e, t, ((e) => r.validateWeapon(e))),
		L(e, t, ((e) => r.validateArmor(e))),
		Ae(e, t, ((e) => r.validateState(e))),
		M(e, t, ((e) => r.validateActor(e))),
		je(e, t, ((e) => r.validateAnimation(e))),
		Me(e, t, ((e) => r.validateTileset(e))),
		Pe(e, t, ((e) => r.validateMapInfo(e)))
	]);
	return {
		mapFiles: g.success ? await nt(g.data, e, n, t, r.validateMap) : tt(g),
		actors: J(p, e, n.readActors, i),
		armors: J(d, e, n.readArmors, i),
		classes: J(ee, e, n.readClasses, i),
		commonEvents: J(a, e, n.readCommonEvents, i),
		enemies: J(s, e, n.readEnemies, i),
		items: J(l, e, n.readItems, i),
		mapInfos: g,
		skills: J(c, e, n.readSkills, i),
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
	Z(y, e.actors.data),
	Z(b, e.classes.data),
	Z(x, e.skills.data),
	Z(S, e.items.data),
	Z(C, e.weapons.data),
	Z(w, e.armors.data),
	Z(T, e.enemies.data),
	Z(E, e.troops.data),
	Z(D, e.states.data),
	Z(O, e.animations.data),
	Z(k, e.tilesets.data),
	Z(A, e.commonEvents.data),
	Z(j, e.mapInfos.data),
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
export { pe as $, Pe as A, A as B, M as C, Ne as D, N as E, I as F, D as G, S as H, y as I, C as J, k as K, O as L, Ae as M, Me as N, Oe as O, ke as P, fe as Q, w as R, z as S, L as T, j as U, T as V, x as W, Te as X, v as Y, Ee as Z, Ue as _, oe as _t, ft as a, ye as at, Ve as b, it as c, Se as ct, Xe as d, ue as dt, me as et, $e as f, de as ft, G as g, se as gt, W as h, ie as ht, dt as i, ve as it, P as j, F as k, Y as l, Ce as lt, Ze as m, ce as mt, gt as n, ge as nt, Q as o, be as ot, et as p, le as pt, E as q, lt as r, _e as rt, ot as s, xe as st, ht as t, he as tt, rt as u, we as ut, qe as v, ae as vt, je as w, Fe as x, U as y, b as z };
