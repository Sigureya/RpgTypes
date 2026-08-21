import { Dc as e, Ds as t, Es as n, Rs as r, Tc as i, Ts as a, Vt as o } from "../shared/rmmz.esm.js";
var s = (e, t, n, r, i) => o(e, t.allTraits(), {
	mp: t.mp,
	tp: t.tp
}, ((e) => u(e, t, n, r) ? i(e) : null)), c = (e, t = 3) => {
	let n = e.reduce(l, 0) - t;
	return e.filter(((e) => e.rating > n));
}, l = (e, t) => Math.max(e, t.rating), u = (e, t, n, r) => {
	switch (e.conditionType) {
		case 1: return ne(e, t.turnCount());
		case 2: return d(e, t.hpRate());
		case 3: return d(e, t.mpRate());
		case 5: return ee(e, n);
		case 4: return t.isStateAffected(e.conditionParam1);
		case 6: return te(e, r);
	}
	return !0;
}, ee = (e, t) => t.highestLevel() >= e.conditionParam1, te = (e, t) => t.value(e.conditionParam1), ne = ({ conditionParam1: e, conditionParam2: t }, n) => t === 0 ? n === e : n > 0 && n >= e && n % t === e % t, d = (e, t) => e.conditionParam1 <= t && t <= e.conditionParam2, f = (e) => e.reduce(((e, t) => Math.max(e, t.rating)), 0), p = (e, t = 3) => f(e) - t, m = (e, t) => e.filter(((e) => e.rating > t)), h = (e, t) => e.reduce(((e, n) => e + Math.max(0, n.rating - t)), 0), g = (e, t, n) => {
	let r = h(e, t);
	if (r <= 0) return null;
	let i = n(r);
	return e.reduce(((e, n) => {
		if (e.selected) return e;
		let r = Math.max(0, n.rating - t), i = e.rest - r;
		return i < 0 ? {
			rest: i,
			selected: n
		} : {
			rest: i,
			selected: null
		};
	}), {
		rest: i,
		selected: null
	}).selected;
}, re = (e, t, n, r = 3) => {
	let i = p(e, r), a = m(e, i);
	return Array.from({ length: Math.max(0, t) }, (() => g(a, i, n)));
}, ie = (e, t) => {
	let n = t.actor(e.parameters[0]);
	if (n) {
		let t = e.parameters[1], r = e.parameters[2];
		n.changeClass(t, r);
	}
	return !0;
}, ae = ({ parameters: e }, t, n) => {
	let r = t.actor(e[0]);
	return r && (r.setCharacterImage(e[1], e[2]), r.setFaceImage(e[3], e[4]), r.setBattlerImage(e[5])), n.refresh(), !0;
}, oe = ({ parameters: e }, t) => {
	let n = t.actor(e[0]);
	return n && n.setName(e[1]), !0;
}, se = (e, t) => {
	let n = t.actor(e.parameters[0]);
	return n && n.setNickname(e.parameters[1]), !0;
}, _ = (e, t) => {
	let n = t.actor(e.parameters[0]);
	return n && n.setProfile(e.parameters[1]), !0;
}, v = (e, t, n, r) => (C(e, n, t, r, ((t, n) => {
	t.gainHp(n, e.parameters[5]);
})), !0), y = (e, t, n, r) => (C(e, n, t, r, ((e, t) => {
	e.gainMp(t);
})), !0), b = (e, t, n, r) => (C(e, n, t, r, ((e, t) => {
	e.gainTp(t);
})), !0), x = (e, t, n, r) => (C(e, n, t, r, ((t, n) => {
	let r = t.currentExp();
	t.changeExp(r + n, e.parameters[5]);
})), !0), S = (e, t, n, r) => (C(e, n, t, r, ((t, n) => {
	let r = t.level;
	t.changeLevel(r + n, e.parameters[5]);
})), !0), C = (e, t, n, r, i) => {
	let a = le(e.parameters[0], e.parameters[1], t, n, r);
	if (a.length === 0) return;
	let o = ce(e, r);
	a.forEach(((e) => {
		i(e, o);
	}));
}, ce = ({ parameters: e }, t) => ((e, t, n, r) => {
	let i = n === 0 ? r : e.value(r);
	return t === 0 ? i : -i;
})(t, e[2], e[3], e[4]), le = (e, t, n, r, i) => e === 0 ? n.allMembers() : ue(r, n, i.value(t)), ue = (e, t, n) => {
	if (n === 0) return t.allMembers();
	let r = e.actor(n);
	return r ? [r] : [];
}, de = ({ parameters: e }, t, n, r, i) => {
	if (e[0] === 0) return e[1];
	if (e[0] === 1) return t.value(e[1]);
	if (e[0] === 2) {
		let e = n.x, t = n.y, o = a(r, e, t, i);
		if (o) return o.troopId;
	}
}, w = (e, t, n, r) => {
	let i = n.actor(e[1]);
	if (!i) return !1;
	switch (e[2]) {
		case 0: return t.members().includes(i);
		case 1: return fe(e, i);
		case 2: return pe(e, i, r);
		case 3: return me(e, i);
		case 4: return he(e, i, r);
		case 5: return ge(e, i, r);
		case 6: return i.isStateAffected(e[3]);
		default: return !1;
	}
}, fe = (e, t) => {
	let n = e[3];
	return t.name() === n;
}, pe = (e, t, n) => {
	let r = n.classData(e[3]);
	return t.isClass(r);
}, me = (e, t) => t.hasSkill(e[3]), he = (e, t, n) => {
	let r = n.dataWeapon(e[3]);
	return t.hasWeapon(r);
}, ge = (e, t, n) => t.hasArmor(n.dataArmor(e[3])), T = (e, t) => {
	let n = t.gold(), r = e[1];
	switch (e[2]) {
		case 0: return n >= r;
		case 1: return n <= r;
		case 2: return n < r;
	}
}, E = (e, t, n) => {
	let r = n.dataItem(e[1]);
	return !!r && t.hasItem(r);
}, D = (e, t, n) => {
	let r = n.dataWeapon(e[1]);
	return !!r && t.hasItem(r, e[2]);
}, O = (e, t, n) => {
	let r = n.dataArmor(e[1]);
	return !!r && t.hasItem(r, e[2]);
}, k = (e, t) => t.value(e[1]) === (e[2] === 0), A = (e, t, n) => {
	let r = [
		n,
		n,
		e[1]
	];
	return t.value(r) === (e[2] === 0);
}, j = (e, t) => {
	let n = t.value(e[1]), r = e[2] === 0 ? e[3] : t.value(e[3]);
	switch (e[4]) {
		case 0: return n === r;
		case 1: return n >= r;
		case 2: return n <= r;
		case 3: return n > r;
		case 4: return n < r;
		case 5: return n !== r;
		default: return !1;
	}
}, M = (e, { parameters: t }, n, r, { actors: i, party: a, variables: o, switches: s, timer: c, selfSwitches: l }) => {
	switch (t[0]) {
		case 0: return k(t, s);
		case 1: return j(t, o);
		case 2: return A(t, l, e);
		case 3: return N(t, c);
		case 4: return w(t, a, i, n);
		case 5: return P(t, r);
		case 6: return F(t, r);
		case 7: return T(t, a);
		case 8: return E(t, a, n);
		case 9: return D(t, a, n);
		case 10: return O(t, a, n);
	}
	return !1;
}, N = (e, t) => {
	if (!t.isWorking()) return !1;
	let n = t.seconds() / 60;
	return e[2] === 0 ? n >= e[1] : n <= e[1];
}, P = (e, t) => {
	let n = t.gameEnemy(e[1]);
	if (!n) return !1;
	switch (e[2]) {
		case 0: return n.isAlive();
		case 1: return n.isStateAffected(e[3]);
		default: return !1;
	}
}, F = (e, t) => {
	let n = t.mapCharacter(e[1]);
	return !!n && n.direction() === e[2];
}, I = (e, t) => (t.setDefeatMe(e.parameters[0]), !0), L = (e, t) => (t.setVictoryMe(e.parameters[0]), !0), _e = (e, t) => (t.setBattleBgm(e.parameters[0]), !0), ve = (e) => (e.saveBgm(), !0), R = ({ parameters: t }, n, r, a, o, s, c, l, u = 0) => {
	switch (t[3]) {
		case 0: return e(t);
		case 1: return r.value(t[4]);
		case 2: return i(t, ((e, t) => n.random(e, t)));
		case 3: return z(t, n, a, o, s, c, l, u);
		default: return u;
	}
}, z = (e, t, n, r, i, a, o, s = 0) => {
	switch (e[4]) {
		case 0: return ((e, t, n) => {
			let r = n.dataItem(e[5]);
			return r ? t.numItems(r) : 0;
		})(e, i, t);
		case 1: return ((e, t, n) => {
			let r = n.dataWeapon(e[5]);
			return r ? t.numItems(r) : 0;
		})(e, i, t);
		case 2: return ((e, t, n) => {
			let r = n.dataArmor(e[5]);
			return r ? t.numItems(r) : 0;
		})(e, i, t);
		case 3: return ((e, t, n) => {
			let r = n.gameActor(e[5]);
			if (!r) return t;
			let i = e[6];
			if (i >= 4 && i <= 11) {
				let e = i - 4;
				return r.param(e);
			}
			switch (i) {
				case 0: return r.level;
				case 1: return r.currentExp();
				case 2: return r.hp;
				case 3: return r.mp;
				case 12: return r.tp;
			}
			return t;
		})(e, s, t);
		case 4: return ((e, t, n) => {
			let r = n.gameEnemy(e[5]);
			if (!r) return t;
			let i = e[6];
			if (i >= 2 && i <= 9) {
				let e = i - 2;
				return r.param(e);
			}
			switch (i) {
				case 0: return r.hp;
				case 1: return r.mp;
				case 10: return r.tp;
			}
			return t;
		})(e, s, t);
		case 5: return ((e, t, n) => {
			let r = n.character(e[5]);
			if (!r) return t;
			switch (e[6]) {
				case 0: return r.x;
				case 1: return r.y;
				case 2: return r.direction();
				case 3: return r.screenX();
				case 4: return r.screenY();
			}
			return t;
		})(e, s, t);
		case 6: return ((e, t) => {
			let n = t.members()[e[5]];
			return n ? n.actorId() : 0;
		})(e, i);
		case 7: return ((e, t, n, r, i, a = 0) => {
			switch (e[5]) {
				case 0: return t.mapId();
				case 1: return n.size();
				case 2: return n.gold();
				case 3: return n.steps();
				case 4: return r.playtime();
				case 5: return i.seconds();
				case 6: return r.saveCount();
				case 7: return r.battleCount();
				case 8: return r.winCount();
				case 9: return r.escapeCount();
			}
			return a;
		})(e, r, i, a, o, s);
		case 8: return ((e, t) => t.lastActionData(e[5]))(e, n);
		default: return s;
	}
}, ye = (e, t, n, i) => r(e, t, n).filter(((e) => {
	let t = i.activePage(e);
	return !!t && !t.through;
})), be = (e, t, n, i) => r(e, t, n).flatMap(((e) => {
	let t = i.activePage(e);
	if (!t || t.priorityType !== 0) return [];
	let n = t.image.tileId;
	return n > 0 ? [n] : [];
})), B = (e, n, r, i) => [...i.tileEventTileIds(e, n, r), ...t(e, n, r)], V = (e, t, n, r, i) => {
	let a = i.tilesetFlags(e), o = B(e, t, n, i).find(((e) => {
		let t = a[e] ?? 0;
		if (16 & t) return !1;
		let n = t & r;
		return n === 0 || n === r;
	}));
	return o !== void 0 && ((a[o] ?? 0) & r) === 0;
}, H = (e, n, r, i, a) => {
	let o = a.tilesetFlags(e);
	return t(e, n, r).some(((e) => ((o[e] ?? 0) & i) !== 0));
}, xe = (e, t, n, r, i) => V(e, t, n, 1 << r / 2 - 1 & 15, i), Se = (e, t, n, r) => V(e, t, n, 512, r), Ce = (e, t, n, r) => V(e, t, n, 1024, r), we = (e, t, n, r) => V(e, t, n, 2048, r) && V(e, t, n, 15, r), Te = (e, t, r, i) => n(e, t, r) && H(e, t, r, 32, i), Ee = (e, t, r, i) => n(e, t, r) && H(e, t, r, 64, i), De = (e, t, r, i) => n(e, t, r) && H(e, t, r, 128, i), Oe = (e, t, r, i) => n(e, t, r) && H(e, t, r, 256, i), ke = (e, r, i, a) => {
	if (!n(e, r, i)) return 0;
	let o = a.tilesetFlags(e), s = t(e, r, i).find(((e) => (o[e] ?? 0) >> 12 > 0));
	return s === void 0 ? 0 : (o[s] ?? 0) >> 12;
}, U = /^(ja|zh|ko)/, W = /* @__PURE__ */ " A. B. C. D. E. F. G. H. I. J. K. L. M. N. O. P. Q. R. S. T. U. V. W. X. Y. Z".split("."), G = /* @__PURE__ */ "Ａ.Ｂ.Ｃ.Ｄ.Ｅ.Ｆ.Ｇ.Ｈ.Ｉ.Ｊ.Ｋ.Ｌ.Ｍ.Ｎ.Ｏ.Ｐ.Ｑ.Ｒ.Ｓ.Ｔ.Ｕ.Ｖ.Ｗ.Ｘ.Ｙ.Ｚ".split("."), K = (e, t) => $(e.troopData(t)), q = (e, t) => $(e.enemyData(t)), J = (e) => e.systemData().partyMembers.filter(((e) => e > 0)), Ae = (e) => J(e).map(((t) => $(e.actorData(t)))).filter(Q), je = (e) => K(e, e.systemData().testTroopId), Y = (e) => e.members.map(((e) => e.enemyId)), X = (e, t) => Y(e).map(((e) => q(t, e))).filter(Q), Me = (e, t) => Pe(X(e, t).map(((e) => e.name))), Z = (e) => Ie(e.systemData().locale) ? G : W, Ne = (e, t) => {
	let n = Z(t), r = X(e, t), i = Fe(r), a = {};
	return r.map(((e) => {
		let t = a[e.name] ?? 0;
		return a[e.name] = t + 1, {
			enemyId: e.id,
			name: e.name,
			letter: n[t % n.length],
			plural: (i[e.name] ?? 0) >= 2
		};
	}));
}, Q = (e) => e != null, $ = (e) => e ?? void 0, Pe = (e) => [...new Set(e)], Fe = (e) => e.reduce(((e, t) => (e[t.name] = (e[t.name] ?? 0) + 1, e)), {}), Ie = (e) => U.test(e);
export { U as CJK_LOCALE_REGEXP, G as TROOP_LETTER_TABLE_FULL, W as TROOP_LETTER_TABLE_HALF, je as battleTestTroop, ie as commandChangeActorClass, x as commandChangeActorExp, v as commandChangeActorHp, ae as commandChangeActorImages, S as commandChangeActorLevel, y as commandChangeActorMp, oe as commandChangeActorName, se as commandChangeActorNickName, _ as commandChangeActorProfile, b as commandChangeActorTp, _e as commandChangeBattleBgm, I as commandChangeDefeatMe, L as commandChangeVictoryMe, ve as commmandSaveBgm, q as dataEnemy, K as dataTroop, u as enemyActionMeetsCondition, f as enemyActionRatingMax, p as enemyActionRatingZero, h as enemyActionWeightTotal, w as evaluateBranchByActor, O as evaluteBranchByArmor, F as evaluteBranchByCharacter, P as evaluteBranchByEnemy, T as evaluteBranchByGold, E as evaluteBranchByItem, N as evaluteBranchByTimer, j as evaluteBranchByVariable, D as evaluteBranchByWeapon, M as evaluteBranchCommand, A as evaluteSelfSwitchBranch, k as evaluteSwitchBranch, c as filterEnemyActionByRating, m as filterEnemyActionsByRating, s as filterUsableEnemyActions, J as initialPartyActorIds, Ae as initialPartyActors, B as mapAllTiles, H as mapCheckLayeredTilesFlags, V as mapCheckPassage, ye as mapEventsXyNt, we as mapIsAirshipLandOk, Se as mapIsBoatPassable, Ee as mapIsBush, De as mapIsCounter, Oe as mapIsDamageFloor, Te as mapIsLadder, xe as mapIsPassable, Ce as mapIsShipPassable, ke as mapTerrainTag, be as mapTileEventTileIds, de as resolveTroopIdByCommand, g as selectEnemyActionByWeight, re as selectEnemyActions, X as troopEnemies, Y as troopEnemyIds, Ne as troopEnemyLabels, Me as troopEnemyNames, Z as troopLetterTable, R as variableFromCommand, z as variableFromGameData };
