import { $c as e, Bt as t, Ft as n, Ho as r, Ht as i, It as a, Lc as o, Lt as s, Qc as ee, Rt as c, Uo as l, Vt as u, al as d, bi as f, d as p, di as m, gi as h, i as g, o as _, os as te, ui as v, yi as ne, zt as re } from "./rmmz.esm.js";
var ie = "bgm", ae = "se", oe = "me", se = "bgs", ce = "img", le = "audio", ue = (e) => [
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
], de = (e) => [
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
}))), fe = "battlebacks1", pe = "battlebacks2", me = "characters", he = "enemies", ge = "faces", _e = "parallaxes", ve = "pictures", ye = "sv_actors", be = "sv_enemies", xe = "system", Se = "tilesets", Ce = "titles1", we = "titles2", Te = "ActorTexts.json", Ee = "Dictionary.json", b = async (e, t, n, r) => n(t).then(((n) => De(n, t, e, r))).catch((() => ({
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
}, x = "Actors.json", S = "Classes.json", C = "Skills.json", w = "Items.json", T = "Weapons.json", E = "Armors.json", D = "Enemies.json", O = "Troops.json", k = "States.json", A = "Animations.json", j = "Tilesets.json", M = "CommonEvents.json", N = "MapInfos.json", P = (e, t, n) => b(e, x, t, n), F = (e, t, n) => b(e, S, t, n), I = (e, t, n) => b(e, C, t, n), Oe = (e, t, n) => b(e, w, t, n), ke = (e, t, n) => b(e, T, t, n), L = (e, t, n) => b(e, E, t, n), Ae = (e, t, n) => b(e, D, t, n), je = (e, t, n) => b(e, O, t, n), Me = (e, t, n) => b(e, k, t, n), Ne = (e, t, n) => b(e, A, t, n), Pe = (e, t, n) => b(e, j, t, n), Fe = (e, t, n) => b(e, M, t, n), Ie = (e, t, n) => b(e, N, t, n), R = (e, t, n) => n(e, JSON.stringify(t)), z = (e, t) => Promise.all([
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
	r({
		facename: t.image,
		faceIndex: 0,
		speakerName: t.text
	}),
	l(t.text),
	d({
		actorId: 1,
		characterName: t.image,
		characterIndex: 0,
		battlerName: t.image,
		faceName: t.image,
		faceIndex: 0
	}),
	ee({
		name: t.text,
		actorId: 1
	}),
	e({
		nickname: t.text,
		actorId: 1
	}),
	te(t.text)
], Be = (e) => m({
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
}), Ve = (e) => h({
	image: {
		characterName: e.image,
		tileId: 0,
		characterIndex: 0,
		direction: 2,
		pattern: 0
	},
	list: o(e)
}), He = (e) => h({
	image: {
		characterIndex: 0,
		characterName: e.image,
		tileId: 0,
		direction: 4,
		pattern: 0
	},
	list: ze(e)
}), Ue = (e) => {
	let { message: r } = e;
	return {
		actors: V(n(e), r, x),
		classes: V(s(e), r, S),
		armors: V(a(e), r, E),
		weapons: V(i(e), r, T),
		items: V(re(e), r, w),
		enemies: V(c(e), r, D),
		skills: V(t(e), r, C),
		states: V(u(e), r, k),
		troops: V(f({
			id: 1,
			name: e.nonReplaceableText
		}), r, O),
		commonEvents: V(ne({
			id: 1,
			name: e.nonReplaceableText
		}), r, M),
		mapInfos: B(r, N),
		animations: B(r, A),
		tilesets: B(r, j),
		system: {
			system: _(e),
			message: r
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
}, qe = (e) => `Map${v(e.id)}.json`, Je = (e) => `Map${v(e.id)}`, H = (e, t) => ({
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
	let [a, o, s, ee, c, l, u, d, f, p, m, h, g, _] = await Promise.all([
		Fe(e, t, ((e) => r.validateCommonEvent(e))),
		je(e, t, ((e) => r.validateTroop(e))),
		Ae(e, t, ((e) => r.validateEnemy(e))),
		F(e, t, ((e) => r.validateClass(e))),
		I(e, t, ((e) => r.validateSkill(e))),
		Oe(e, t, ((e) => r.validateItem(e))),
		ke(e, t, ((e) => r.validateWeapon(e))),
		L(e, t, ((e) => r.validateArmor(e))),
		Me(e, t, ((e) => r.validateState(e))),
		P(e, t, ((e) => r.validateActor(e))),
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
		classes: X(ee, e, n.readClasses, i),
		commonEvents: X(a, e, n.readCommonEvents, i),
		enemies: X(s, e, n.readEnemies, i),
		items: X(l, e, n.readItems, i),
		mapInfos: g,
		skills: X(c, e, n.readSkills, i),
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
}, lt = (e) => e, ut = (e, t = () => p({})) => [
	{
		filename: G,
		data: e.system.system ? e.system.system : t()
	},
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
export { me as $, I as A, D as B, Ne as C, Ae as D, Fe as E, x as F, j as G, N as H, A as I, b as J, O as K, E as L, Pe as M, je as N, Oe as O, ke as P, pe as Q, S as R, P as S, F as T, C as U, w as V, k as W, Ee as X, Te as Y, fe as Z, Ye as _, ae as _t, pt as a, be as at, Le as b, tt as c, Ce as ct, nt as d, de as dt, he as et, K as f, le as ft, Ge as g, oe as gt, W as h, se as ht, ft as i, ye as it, Me as j, Ie as k, it as l, we as lt, Qe as m, ie as mt, _t as n, _e as nt, Q as o, xe as ot, G as p, ce as pt, T as q, ut as r, ve as rt, lt as s, Se as st, gt as t, ge as tt, at as u, ue as ut, U as v, L as w, z as x, Ue as y, M as z };
