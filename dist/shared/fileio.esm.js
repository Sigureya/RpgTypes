import { Bt as e, El as t, Hi as n, Ht as r, It as i, Lt as a, Ml as o, Ni as s, Pi as c, Rt as ee, Tl as l, Ui as u, Ut as d, Vt as f, ds as p, fs as m, i as h, ks as g, ul as _, zi as v, zt as te } from "./rmmz.esm.js";
var ne = "bgm", re = "se", ie = "me", ae = "bgs", oe = "img", se = "audio", ce = (e) => [
	...y(e.bgm, {
		asset: "audio",
		subDir: "bgm"
	}),
	...y(e.bgs, {
		asset: "audio",
		subDir: "bgs"
	}),
	...y(e.me, {
		asset: "audio",
		subDir: "me"
	}),
	...y(e.se, {
		asset: "audio",
		subDir: "se"
	})
], le = (e) => [
	...y(e.characters, {
		asset: "img",
		subDir: "characters"
	}),
	...y(e.faces, {
		asset: "img",
		subDir: "faces"
	}),
	...y(e.svEnemy, {
		asset: "img",
		subDir: "sv_enemies"
	}),
	...y(e.svActors, {
		asset: "img",
		subDir: "sv_actors"
	}),
	...y(e.enemies, {
		asset: "img",
		subDir: "enemies"
	})
], y = (e, t) => Array.from(e).sort().map(((e) => ({
	asset: t.asset,
	subDir: t.subDir,
	symbol: e
}))), ue = "battlebacks1", de = "battlebacks2", fe = "characters", pe = "enemies", me = "faces", he = "parallaxes", ge = "pictures", _e = "sv_actors", ve = "sv_enemies", ye = "system", be = "tilesets", xe = "titles1", Se = "titles2", Ce = "ActorTexts.json", we = "Dictionary.json", b = async (e, t, n, r) => n(t).then(((n) => Te(n, t, e, r))).catch((() => ({
	success: !1,
	fileName: t,
	data: [],
	error: e.jsonParseError
}))), Te = (e, t, n, r) => {
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
}, x = "Actors.json", S = "Classes.json", C = "Skills.json", w = "Items.json", T = "Weapons.json", E = "Armors.json", D = "Enemies.json", O = "Troops.json", k = "States.json", A = "Animations.json", j = "Tilesets.json", M = "CommonEvents.json", N = "MapInfos.json", P = (e, t, n) => b(e, x, t, n), F = (e, t, n) => b(e, S, t, n), I = (e, t, n) => b(e, C, t, n), Ee = (e, t, n) => b(e, w, t, n), L = (e, t, n) => b(e, T, t, n), De = (e, t, n) => b(e, E, t, n), Oe = (e, t, n) => b(e, D, t, n), ke = (e, t, n) => b(e, O, t, n), Ae = (e, t, n) => b(e, k, t, n), je = (e, t, n) => b(e, A, t, n), Me = (e, t, n) => b(e, j, t, n), Ne = (e, t, n) => b(e, M, t, n), Pe = (e, t, n) => b(e, N, t, n), R = (e, t, n) => n(e, JSON.stringify(t)), z = (e, t) => Promise.all([
	R(x, e.actors, t),
	R(S, e.classes, t),
	R(C, e.skills, t),
	R(w, e.items, t),
	R(T, e.weapons, t),
	R(E, e.armors, t),
	R(D, e.enemies, t),
	R(O, e.troops, t),
	R(k, e.states, t),
	R(A, e.animations, t),
	R(j, e.tilesets, t),
	R(M, e.commonEvents, t),
	R(N, e.mapInfos, t)
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
}), ze = (e) => v({
	image: {
		characterName: e.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: _(e)
}), Be = (e) => v({
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
		actors: V(i(t), o, x),
		classes: V(ee(t), o, S),
		armors: V(a(t), o, E),
		weapons: V(d(t), o, T),
		items: V(e(t), o, w),
		enemies: V(te(t), o, D),
		skills: V(f(t), o, C),
		states: V(r(t), o, k),
		troops: V(u({
			id: 1,
			name: t.nonReplaceableText
		}), o, O),
		commonEvents: V(n({
			id: 1,
			name: t.nonReplaceableText
		}), o, M),
		mapInfos: B(o, N),
		animations: B(o, A),
		tilesets: B(o, j),
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
}), Xe = (e, t) => t(`${e.filename}.json`, JSON.stringify(e.map)), W = (e, t) => Promise.all(e.map(((e) => Xe(e, t)))), G = "System.json", K = async (e, t, n) => {
	try {
		return Ze(await t(G), e, n);
	} catch {
		return q(e.fileNotFound);
	}
}, q = (e) => ({
	system: null,
	message: e
}), Ze = (e, t, n) => {
	try {
		return Qe(JSON.parse(e), t, n);
	} catch {
		return q(t.jsonParseError);
	}
}, Qe = (e, t, n) => {
	try {
		return n.validateSystemMz(e) ? {
			system: e,
			message: ""
		} : n.validateSystemMv && n.validateSystemMv(e) ? {
			system: h(e),
			message: t.mvAsMz
		} : q(t.invalidStructure);
	} catch {
		return q(t.validateFunctionError);
	}
}, $e = (e) => e.system.system !== null, et = async (e, t, n) => Y(e, t, {
	readMap: tt,
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
}, n, (() => [])), tt = (e) => e.map, J = (e) => e, nt = (e, t, n, r) => Y(e, t, r, n, (() => [])), rt = (e, t, n, r) => Y(e, t, r, n, (() => null)), Y = async (e, t, n, r, i) => {
	let [a, o, s, c, ee, l, u, d, f, p, m, h, g, _] = await Promise.all([
		Ne(e, t, ((e) => r.validateCommonEvent(e))),
		ke(e, t, ((e) => r.validateTroop(e))),
		Oe(e, t, ((e) => r.validateEnemy(e))),
		F(e, t, ((e) => r.validateClass(e))),
		I(e, t, ((e) => r.validateSkill(e))),
		Ee(e, t, ((e) => r.validateItem(e))),
		L(e, t, ((e) => r.validateWeapon(e))),
		De(e, t, ((e) => r.validateArmor(e))),
		Ae(e, t, ((e) => r.validateState(e))),
		P(e, t, ((e) => r.validateActor(e))),
		je(e, t, ((e) => r.validateAnimation(e))),
		Me(e, t, ((e) => r.validateTileset(e))),
		Pe(e, t, ((e) => r.validateMapInfo(e))),
		K(e, t, {
			validateSystemMz: (e) => r.validateSystem(e),
			validateSystemMv: r.validateSystemMV
		})
	]);
	return {
		mapFiles: g.success ? await at(g.data, e, n, t, r.validateMap) : it(g),
		actors: X(p, e, n.readActors, i),
		armors: X(d, e, n.readArmors, i),
		classes: X(c, e, n.readClasses, i),
		commonEvents: X(a, e, n.readCommonEvents, i),
		enemies: X(s, e, n.readEnemies, i),
		items: X(l, e, n.readItems, i),
		mapInfos: g,
		skills: X(ee, e, n.readSkills, i),
		states: X(f, e, n.readStates, i),
		system: ot(_, e, n.readSystem),
		troops: X(o, e, n.readTroops, i),
		weapons: X(u, e, n.readWeapons, i),
		animations: X(m, e, n.readAnimations, i),
		tilesets: X(h, e, n.readTilesets, i)
	};
}, it = (e) => ({
	info: {
		filename: e.fileName,
		message: e.error,
		success: !1
	},
	validMaps: [],
	invalidMaps: []
}), at = async (e, t, n, r, i) => await U(e, t, (async (e) => r(e)), i, ((e) => n.readMap(e))), ot = (e, t, n) => {
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
}, st = (e) => e, ct = (e) => [
	Z(x, e.actors.data),
	Z(S, e.classes.data),
	Z(C, e.skills.data),
	Z(w, e.items.data),
	Z(T, e.weapons.data),
	Z(E, e.armors.data),
	Z(D, e.enemies.data),
	Z(O, e.troops.data),
	Z(k, e.states.data),
	Z(A, e.animations.data),
	Z(j, e.tilesets.data),
	Z(M, e.commonEvents.data),
	Z(N, e.mapInfos.data),
	...lt(e.mapFiles.validMaps)
], lt = (e) => e.map(((e) => ({
	filename: `${e.filename}.json`,
	data: e.map
}))), Z = (e, t) => ({
	filename: e,
	data: [null, ...t]
}), Q = (e, t) => t(G, JSON.stringify(e)), ut = (e, t, n) => Promise.all([
	z(ft(e), n),
	Q(e.system, n),
	W(t.validMaps, n)
]).then((() => {})), dt = (e, t) => {
	let n = [z(pt(e), t), W(e.mapFiles.validMaps, t)];
	return e.system.system && n.push(Q(e.system.system, t)), Promise.all(n).then((() => {}));
}, $ = (e) => [null, ...e], ft = (e) => ({
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
}), pt = (e) => ({
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
}), mt = "data", ht = "js";
export { fe as $, I as A, D as B, je as C, Oe as D, Ne as E, x as F, j as G, N as H, A as I, b as J, O as K, E as L, Me as M, ke as N, Ee as O, L as P, de as Q, S as R, P as S, F as T, C as U, w as V, k as W, we as X, Ce as Y, ue as Z, qe as _, re as _t, dt as a, ve as at, Fe as b, $e as c, xe as ct, et as d, le as dt, pe as et, K as f, se as ft, Ue as g, ie as gt, W as h, ae as ht, ut as i, _e as it, Ae as j, Pe as k, nt as l, Se as lt, Xe as m, ne as mt, ht as n, he as nt, Q as o, ye as ot, G as p, oe as pt, T as q, ct as r, ge as rt, st as s, be as st, mt as t, me as tt, rt as u, ce as ut, U as v, De as w, z as x, Ve as y, M as z };
