import { Gs as e, Ir as t, Jo as n, Jr as r, Nr as i, Xo as a, Yo as o, qs as s, ss as c, zt as l } from "../shared/rmmz.esm.js";
var u = (e, t, n, r, i) => l(e, t.allTraits(), {
	mp: t.mp,
	tp: t.tp
}, ((e) => f(e, t, n, r) ? i(e) : null)), d = (e, t = 3) => {
	let n = e.reduce(ee, 0) - t;
	return e.filter(((e) => e.rating > n));
}, ee = (e, t) => Math.max(e, t.rating), f = (e, t, n, r) => {
	switch (e.conditionType) {
		case 1: return re(e, t.turnCount());
		case 2: return p(e, t.hpRate());
		case 3: return p(e, t.mpRate());
		case 5: return te(e, n);
		case 4: return t.isStateAffected(e.conditionParam1);
		case 6: return ne(e, r);
	}
	return !0;
}, te = (e, t) => t.highestLevel() >= e.conditionParam1, ne = (e, t) => t.value(e.conditionParam1), re = ({ conditionParam1: e, conditionParam2: t }, n) => t === 0 ? n === e : n > 0 && n >= e && n % t === e % t, p = (e, t) => e.conditionParam1 <= t && t <= e.conditionParam2, m = (e) => e.reduce(((e, t) => Math.max(e, t.rating)), 0), h = (e, t = 3) => m(e) - t, g = (e, t) => e.filter(((e) => e.rating > t)), _ = (e, t) => e.reduce(((e, n) => e + Math.max(0, n.rating - t)), 0), v = (e, t, n) => {
	let r = _(e, t);
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
}, ie = (e, t, n, r = 3) => {
	let i = h(e, r), a = g(e, i);
	return Array.from({ length: Math.max(0, t) }, (() => v(a, i, n)));
}, ae = (e, t) => {
	let n = t.gameActor(e.parameters[0]);
	if (n) {
		let t = e.parameters[1], r = e.parameters[2];
		n.changeClass(t, r);
	}
	return !0;
}, oe = ({ parameters: e }, t, n) => {
	let r = t.gameActor(e[0]);
	return r && (r.setCharacterImage(e[1], e[2]), r.setFaceImage(e[3], e[4]), r.setBattlerImage(e[5])), n.refresh(), !0;
}, se = ({ parameters: e }, t) => {
	let n = t.gameActor(e[0]);
	return n && n.setName(e[1]), !0;
}, ce = (e, t) => {
	let n = t.gameActor(e.parameters[0]);
	return n && n.setNickname(e.parameters[1]), !0;
}, y = (e, t) => {
	let n = t.gameActor(e.parameters[0]);
	return n && n.setProfile(e.parameters[1]), !0;
}, b = (e, t) => {
	if (t === 0) return e.allMembers();
	let n = e.gameActor(t);
	return n ? [n] : [];
}, x = (e, t, n) => {
	T(e, t, n, ((t, n) => {
		t.gainHp(n, e.parameters[5]);
	}));
}, S = (e, t, n) => {
	T(e, t, n, ((e, t) => {
		e.gainMp(t);
	}));
}, C = (e, t, n) => {
	T(e, t, n, ((e, t) => {
		e.gainTp(t);
	}));
}, w = (e, t, n) => {
	T(e, t, n, ((t, n) => {
		let r = t.currentExp();
		t.changeExp(r + n, e.parameters[5]);
	}));
}, le = (e, t, n) => {
	T(e, t, n, ((t, n) => {
		let r = t.level;
		t.changeLevel(r + n, e.parameters[5]);
	}));
}, T = (e, t, n, r) => {
	let i = ((e, t, n, r) => e === 0 ? n.allMembers() : b(n, r.value(t)))(e.parameters[0], e.parameters[1], t, n);
	if (i.length === 0) return;
	let a = ue(e, n);
	i.forEach(((e) => {
		r(e, a);
	}));
}, ue = ({ parameters: e }, t) => ((e, t, n, r) => {
	let i = n === 0 ? r : e.value(r);
	return t === 0 ? i : -i;
})(t, e[2], e[3], e[4]), de = ({ parameters: e }, t, r, i, a) => {
	if (e[0] === 0) return e[1];
	if (e[0] === 1) return t.value(e[1]);
	if (e[0] === 2) {
		let e = r.x, t = r.y, o = n(i, e, t, a);
		if (o) return o.troopId;
	}
}, E = (e, t, n) => {
	let r = n.gameActor(e[1]);
	if (!r) return !1;
	switch (e[2]) {
		case 0: return t.members().includes(r);
		case 1: return fe(e, r);
		case 2: return pe(e, r, n);
		case 3: return me(e, r);
		case 4: return he(e, r, n);
		case 5: return ge(e, r, n);
		case 6: return r.isStateAffected(e[3]);
		default: return !1;
	}
}, fe = (e, t) => {
	let n = e[3];
	return t.name() === n;
}, pe = (e, t, n) => {
	let r = n.classData(e[3]);
	return t.isClass(r);
}, me = (e, t) => t.hasSkill(e[3]), he = (e, t, n) => {
	let r = n.weaponData(e[3]);
	return t.hasWeapon(r);
}, ge = (e, t, n) => t.hasArmor(n.armorData(e[3])), D = (e, t) => {
	let n = t.gold(), r = e[1];
	switch (e[2]) {
		case 0: return n >= r;
		case 1: return n <= r;
		case 2: return n < r;
	}
}, O = (e, t, n) => {
	let r = n(e[1]);
	return !!r && t.hasItem(r);
}, k = (e, t, n) => {
	let r = n(e[1]);
	return !!r && t.hasItem(r, e[2]);
}, A = (e, t, n) => {
	let r = n(e[1]);
	return !!r && t.hasItem(r, e[2]);
}, j = (e, t) => t.value(e[1]) === (e[2] === 0), M = (e, t, n) => {
	let r = [
		n,
		n,
		e[1]
	];
	return t.value(r) === (e[2] === 0);
}, N = (e, t) => {
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
}, P = (e, { parameters: t }, n, r, i, a, o, s) => {
	switch (t[0]) {
		case 0: return j(t, i);
		case 1: return N(t, o);
		case 2: return M(t, a, e);
		case 3: return F(t, s);
		case 4: return E(t, r, n);
		case 5: return I(t, n);
		case 6: return L(t, n);
		case 7: return D(t, r);
		case 8: return O(t, r, ((e) => n.itemData(e)));
		case 9: return k(t, r, ((e) => n.weaponData(e)));
		case 10: return A(t, r, ((e) => n.armorData(e)));
	}
	return !1;
}, F = (e, t) => {
	if (!t.isWorking()) return !1;
	let n = t.seconds() / 60;
	return e[2] === 0 ? n >= e[1] : n <= e[1];
}, I = (e, t) => {
	let n = t.gameEnemy(e[1]);
	if (!n) return !1;
	switch (e[2]) {
		case 0: return n.isAlive();
		case 1: return n.isStateAffected(e[3]);
		default: return !1;
	}
}, L = (e, t) => {
	let n = t.mapCharacter(e[1]);
	return !!n && n.direction() === e[2];
}, _e = (e, t) => (t.setDefeatMe(e.parameters[0]), !0), ve = (e, t) => (t.setVictoryMe(e.parameters[0]), !0), ye = (e, t) => (t.setBattleBgm(e.parameters[0]), !0), be = (e) => (e.saveBgm(), !0), xe = ({ parameters: t }, n, r, i, a, o, c, l, u = 0) => {
	switch (t[3]) {
		case 0: return s(t);
		case 1: return r.value(t[4]);
		case 2: return e(t, ((e, t) => n.random(e, t)));
	}
	return t[3] === 3 ? R(t, n, i, a, o, c, l, u) : u;
}, R = (e, t, n, r, i, a, o, s = 0) => {
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
	}
	return s;
}, Se = (e, t, n, r) => c(e, t, n).filter(((e) => {
	let t = r.activePage(e);
	return !!t && !t.through;
})), Ce = (e, t, n, r) => c(e, t, n).flatMap(((e) => {
	let t = r.activePage(e);
	if (!t || t.priorityType !== 0) return [];
	let n = t.image.tileId;
	return n > 0 ? [n] : [];
})), z = (e, t, n, r) => [...r.tileEventTileIds(e, t, n), ...a(e, t, n)], B = (e, t, n, r, i) => {
	let a = i.tilesetFlags(e), o = z(e, t, n, i).find(((e) => {
		let t = a[e] ?? 0;
		if (16 & t) return !1;
		let n = t & r;
		return n === 0 || n === r;
	}));
	return o !== void 0 && ((a[o] ?? 0) & r) === 0;
}, V = (e, t, n, r, i) => {
	let o = i.tilesetFlags(e);
	return a(e, t, n).some(((e) => ((o[e] ?? 0) & r) !== 0));
}, we = (e, t, n, r, i) => B(e, t, n, 1 << r / 2 - 1 & 15, i), Te = (e, t, n, r) => B(e, t, n, 512, r), Ee = (e, t, n, r) => B(e, t, n, 1024, r), De = (e, t, n, r) => B(e, t, n, 2048, r) && B(e, t, n, 15, r), Oe = (e, t, n, r) => o(e, t, n) && V(e, t, n, 32, r), ke = (e, t, n, r) => o(e, t, n) && V(e, t, n, 64, r), Ae = (e, t, n, r) => o(e, t, n) && V(e, t, n, 128, r), je = (e, t, n, r) => o(e, t, n) && V(e, t, n, 256, r), Me = (e, t, n, r) => {
	if (!o(e, t, n)) return 0;
	let i = r.tilesetFlags(e), s = a(e, t, n).find(((e) => (i[e] ?? 0) >> 12 > 0));
	return s === void 0 ? 0 : (i[s] ?? 0) >> 12;
}, Ne = (e, t) => {
	let n = i(e);
	return Math.floor(t * n);
}, Pe = (e, n) => {
	let r = t(e);
	return Math.floor(n * r);
}, Fe = (e, t) => {
	let n = r(e);
	return Math.floor(t * n);
}, H = /^(ja|zh|ko)/, U = /* @__PURE__ */ " A. B. C. D. E. F. G. H. I. J. K. L. M. N. O. P. Q. R. S. T. U. V. W. X. Y. Z".split("."), W = /* @__PURE__ */ "Ａ.Ｂ.Ｃ.Ｄ.Ｅ.Ｆ.Ｇ.Ｈ.Ｉ.Ｊ.Ｋ.Ｌ.Ｍ.Ｎ.Ｏ.Ｐ.Ｑ.Ｒ.Ｓ.Ｔ.Ｕ.Ｖ.Ｗ.Ｘ.Ｙ.Ｚ".split("."), G = (e, t) => Q(e.troopData(t)), K = (e, t) => Q(e.enemyData(t)), q = (e) => e.systemData().partyMembers.filter(((e) => e > 0)), Ie = (e) => q(e).map(((t) => Q(e.actorData(t)))).filter(Z), Le = (e) => G(e, e.systemData().testTroopId), J = (e) => e.members.map(((e) => e.enemyId)), Y = (e, t) => J(e).map(((e) => K(t, e))).filter(Z), Re = (e, t) => $(Y(e, t).map(((e) => e.name))), X = (e) => Ve(e.systemData().locale) ? W : U, ze = (e, t) => {
	let n = X(t), r = Y(e, t), i = Be(r), a = {};
	return r.map(((e) => {
		let t = a[e.name] ?? 0;
		return a[e.name] = t + 1, {
			enemyId: e.id,
			name: e.name,
			letter: n[t % n.length],
			plural: (i[e.name] ?? 0) >= 2
		};
	}));
}, Z = (e) => e != null, Q = (e) => e ?? void 0, $ = (e) => [...new Set(e)], Be = (e) => e.reduce(((e, t) => (e[t.name] = (e[t.name] ?? 0) + 1, e)), {}), Ve = (e) => H.test(e);
export { H as CJK_LOCALE_REGEXP, W as TROOP_LETTER_TABLE_FULL, U as TROOP_LETTER_TABLE_HALF, Le as battleTestTroop, Ne as calculateHpRegenerate, Pe as calculateMpRegenerate, Fe as calculateTpRegenerate, ae as commandChangeActorClass, w as commandChangeActorExp, x as commandChangeActorHp, oe as commandChangeActorImages, le as commandChangeActorLevel, S as commandChangeActorMp, se as commandChangeActorName, ce as commandChangeActorNickName, y as commandChangeActorProfile, C as commandChangeActorTp, ye as commandChangeBattleBgm, _e as commandChangeDefeatMe, ve as commandChangeVictoryMe, be as commmandSaveBgm, K as dataEnemy, G as dataTroop, f as enemyActionMeetsCondition, m as enemyActionRatingMax, h as enemyActionRatingZero, _ as enemyActionWeightTotal, E as evaluateActorBranch, A as evaluteBranchByArmor, L as evaluteBranchByCharacter, I as evaluteBranchByEnemy, D as evaluteBranchByGold, O as evaluteBranchByItem, F as evaluteBranchByTimer, N as evaluteBranchByVariable, k as evaluteBranchByWeapon, P as evaluteBranchCommand, M as evaluteSelfSwitchBranch, j as evaluteSwitchBranch, d as filterEnemyActionByRating, g as filterEnemyActionsByRating, u as filterUsableEnemyActions, q as initialPartyActorIds, Ie as initialPartyActors, z as mapAllTiles, V as mapCheckLayeredTilesFlags, B as mapCheckPassage, Se as mapEventsXyNt, De as mapIsAirshipLandOk, Te as mapIsBoatPassable, ke as mapIsBush, Ae as mapIsCounter, je as mapIsDamageFloor, Oe as mapIsLadder, we as mapIsPassable, Ee as mapIsShipPassable, Me as mapTerrainTag, Ce as mapTileEventTileIds, de as resolveTroopIdByCommand, v as selectEnemyActionByWeight, ie as selectEnemyActions, Y as troopEnemies, J as troopEnemyIds, ze as troopEnemyLabels, Re as troopEnemyNames, X as troopLetterTable, xe as variableFromCommand, R as variableFromGameData };
