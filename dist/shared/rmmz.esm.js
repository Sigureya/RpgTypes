import { ht as e, t, vt as n } from "./libs.esm.js";
var r = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		0,
		e.exp,
		e.showMessaage
	]
}), i = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		0,
		e.exp,
		e.showMessaage
	]
}), a = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		1,
		e.variableId,
		e.showMessaage
	]
}), o = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		1,
		e.variableId,
		e.showMessaage
	]
}), s = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		1,
		e.targetVariableId,
		0,
		0,
		e.value,
		e.showMessaage
	]
}), c = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		1,
		e.targetVariableId,
		1,
		0,
		e.value,
		e.showMessaage
	]
}), ee = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		1,
		e.targetVariableId,
		0,
		1,
		e.operandVariableId,
		e.showMessaage
	]
}), te = (e, t = 0) => ({
	code: 315,
	indent: t,
	parameters: [
		1,
		e.targetVariableId,
		1,
		1,
		e.operandVariableId,
		e.showMessaage
	]
}), ne = (e, t = 0) => ({
	code: 316,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		0,
		e.level,
		e.showMessaage
	]
}), re = (e, t = 0) => ({
	code: 316,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		0,
		e.level,
		e.showMessaage
	]
}), ie = (e, t = 0) => ({
	code: 316,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		1,
		e.variableId,
		e.showMessaage
	]
}), ae = (e, t = 0) => ({
	code: 316,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		1,
		e.variableId,
		e.showMessaage
	]
}), oe = (e, t = 0) => ({
	code: 316,
	indent: t,
	parameters: [
		0,
		0,
		0,
		0,
		e.level,
		e.showMessaage
	]
}), se = (e, t = 0) => ({
	code: 316,
	indent: t,
	parameters: [
		0,
		0,
		1,
		0,
		e.level,
		e.showMessaage
	]
}), ce = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		e.skillId
	]
}), le = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		e.skillId
	]
}), ue = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		0,
		0,
		e.skillId
	]
}), de = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		0,
		1,
		e.skillId
	]
}), fe = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		1,
		e.variableId,
		0,
		e.skillId
	]
}), pe = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		1,
		e.variableId,
		1,
		e.skillId
	]
}), me = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		e.stateId
	]
}), he = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		e.stateId
	]
}), ge = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		0,
		0,
		e.stateId
	]
}), _e = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		0,
		1,
		e.stateId
	]
}), ve = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		1,
		e.actorIdVariable,
		0,
		e.stateId
	]
}), ye = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		1,
		e.actorIdVariable,
		1,
		e.stateId
	]
}), be = (e, t = 0) => ({
	code: 321,
	parameters: [
		e.actorId,
		e.classId,
		e.keepExp
	],
	indent: t
}), xe = (e, t = 0) => ({
	code: 319,
	parameters: [
		e.actorId,
		e.equipType,
		e.equipId
	],
	indent: t
}), Se = ({ actorId: e = 1, faceIndex: t = 0, faceName: n = "", characterIndex: r = 0, characterName: i = "", battlerName: a = "" } = {}, o = 0) => ({
	code: 322,
	indent: o,
	parameters: [
		e,
		i,
		r,
		n,
		t,
		a
	]
}), Ce = (e, t = 0) => ({
	code: 303,
	indent: t,
	parameters: [e.actorId, e.maxLength]
}), we = (e = 0) => ({
	code: 314,
	indent: e,
	parameters: [0, 0]
}), Te = (e, t = 0) => ({
	code: 314,
	indent: t,
	parameters: [0, e.targetActorId]
}), Ee = (e, t = 0) => ({
	code: 314,
	indent: t,
	parameters: [1, e.variableId]
}), De = (e, t = 0) => ({
	code: 320,
	parameters: [e.actorId, e.name],
	indent: t
}), Oe = (e, t = 0) => ({
	code: 324,
	parameters: [e.actorId, e.nickname],
	indent: t
}), ke = (e, t = 0) => ({
	code: 325,
	parameters: [e.actorId, e.profile],
	indent: t
}), Ae = (e, t = 0) => ({
	code: 317,
	indent: t,
	parameters: Me(e, 0)
}), je = (e, t = 0) => ({
	code: 317,
	indent: t,
	parameters: Me(e, 1)
}), Me = (e, t) => [
	e.actorId,
	e.paramId,
	t,
	e.value
], l = {
	direct: 0,
	variable: 1
}, Ne = (e, t = 0) => ({
	code: 311,
	indent: t,
	parameters: ze(0, e)
}), Pe = (e, t = 0) => ({
	code: 311,
	indent: t,
	parameters: ze(1, e)
}), Fe = (e, t = 0) => ({
	code: 326,
	indent: t,
	parameters: u(0, e)
}), Ie = (e, t = 0) => ({
	code: 326,
	indent: t,
	parameters: u(1, e)
}), Le = (e, t = 0) => ({
	code: 312,
	indent: t,
	parameters: u(0, e)
}), Re = (e, t = 0) => ({
	code: 312,
	indent: t,
	parameters: u(1, e)
}), u = (e, t) => [
	t.targetType === "variable" ? l.variable : l.direct,
	t.targetType === "each" ? 0 : t.target,
	e,
	l[t.operand.mode],
	t.operand.value
], ze = (e, t) => [
	t.targetType === "variable" ? l.variable : l.direct,
	t.targetType === "each" ? 0 : t.target,
	e,
	l[t.operand.mode],
	t.operand.value,
	t.allowDeath
], Be = (e = {}, t = 0) => ({
	code: 212,
	indent: t,
	parameters: [
		e.characterId ?? 0,
		e.animationId ?? 0,
		e.waiting ?? !1
	]
}), Ve = (e, t = 0) => ({
	code: 242,
	indent: t,
	parameters: [e.duration]
}), He = (e = 0) => ({
	code: 243,
	indent: e,
	parameters: []
}), Ue = (e = 0) => ({
	code: 244,
	indent: e,
	parameters: []
}), We = (e, t = 0) => ({
	code: 246,
	indent: t,
	parameters: [e.duration]
}), Ge = {
	132: "bgm",
	133: "me",
	139: "me",
	241: "bgm",
	245: "bgs",
	249: "me",
	250: "se"
}, Ke = (e) => Ge[e], qe = ({ audio: e }) => [
	Ye(t({ name: e })),
	Xe(t({ name: e })),
	Ze(t({ name: e })),
	Qe(t({ name: e })),
	$e(t({ name: e })),
	et(t({ name: e })),
	tt(t({ name: e }))
], Je = (e, n) => d(e, t({ name: n })), d = (e, n, r = 0) => ({
	code: e,
	parameters: [t(n)],
	indent: r
}), Ye = (e, t = 0) => d(241, e, t), Xe = (e, t = 0) => d(245, e, t), Ze = (e, t = 0) => d(249, e, t), Qe = (e, t = 0) => d(250, e, t), $e = (e, t = 0) => d(132, e, t), et = (e, t = 0) => d(133, e, t), tt = (e, t = 0) => d(139, e, t), nt = (e, t = 0) => ({
	code: 213,
	indent: t,
	parameters: [
		e.characterId,
		e.balloonId,
		e.waiting
	]
}), rt = (e = {}, t = 0) => ({
	code: 283,
	indent: t,
	parameters: [e.background1 ?? "", e.background2 ?? ""]
}), it = 0, at = 1, ot = 2, st = (e) => e.parameters[0] === 1, ct = ({ troopId: e = 0, canEscape: t = !1, canLose: n = !1 }, r = 0) => ({
	code: 301,
	indent: r,
	parameters: [
		0,
		e,
		t,
		n
	]
}), lt = ({ variableId: e = 0, canEscape: t = !1, canLose: n = !1 }, r = 0) => ({
	code: 301,
	indent: r,
	parameters: [
		1,
		e,
		t,
		n
	]
}), ut = ({ canEscape: e = !1, canLose: t = !1 }, n = 0) => ({
	code: 301,
	indent: n,
	parameters: [
		2,
		0,
		e,
		t
	]
}), dt = (e = 0) => ({
	code: 601,
	indent: e,
	parameters: []
}), ft = (e = 0) => ({
	code: 602,
	indent: e,
	parameters: []
}), pt = (e = 0) => ({
	code: 603,
	indent: e,
	parameters: []
}), mt = (e = 0) => ({
	code: 604,
	indent: e,
	parameters: []
}), ht = {
	plus: 0,
	minus: 1
}, gt = ({ operation: e, time: t }) => ({
	code: 124,
	indent: 0,
	parameters: [ht[e ?? "plus"] ?? 0, t ?? 0]
}), f = (e, t = 0) => ({
	code: 136,
	indent: t,
	parameters: [e]
}), _t = (e = 0) => f(0, e), vt = (e = 0) => f(1, e);
function yt(e, t = 0) {
	return {
		code: 336,
		parameters: [e.enemyId, e.newEnemyId],
		indent: t
	};
}
var bt = (e) => ({
	enemyId: e[0],
	newEnemyId: e[1]
}), xt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		e.enemyIndex,
		0,
		e.stateId
	]
}), St = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		e.enemyIndex,
		1,
		e.stateId
	]
}), Ct = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		-1,
		0,
		e.stateId
	]
}), wt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		-1,
		1,
		e.stateId
	]
}), Tt = (e = 0) => ({
	code: 334,
	indent: e,
	parameters: [0]
}), Et = (e, t = 0) => ({
	code: 334,
	indent: t,
	parameters: [e.enemyIndex]
}), Dt = (e, t = 0) => ({
	code: 111,
	indent: t,
	parameters: [
		4,
		e,
		0
	]
}), Ot = ({ actorId: e, name: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		1,
		t
	]
}), kt = ({ actorId: e, classId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		2,
		t
	]
}), At = ({ actorId: e, skillId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		3,
		t
	]
}), jt = ({ actorId: e, weaponId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		4,
		t
	]
}), Mt = ({ actorId: e, armorId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		5,
		t
	]
}), Nt = ({ actorId: e, stateId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		6,
		t
	]
}), Pt = ({ comparison: e, operandConstant: t, variableId: n }, r = 0) => ({
	code: 111,
	indent: r,
	parameters: [
		1,
		n,
		0,
		t,
		e
	]
}), Ft = ({ comparison: e, operandVariableId: t, variableId: n }, r = 0) => ({
	code: 111,
	indent: r,
	parameters: [
		1,
		n,
		1,
		t,
		e
	]
}), It = (e, t = 0) => ({
	code: 117,
	indent: t,
	parameters: Rt(e ?? {})
}), Lt = (e) => ({ eventId: e[0] }), Rt = (e) => [e.eventId ?? 0], zt = (e) => ({
	min: e[0],
	max: e[1],
	value: e[2]
}), Bt = (e) => [
	e.min,
	e.max,
	e.value
], Vt = (e, t = 0) => ({
	code: 121,
	indent: t,
	parameters: Bt(e)
}), Ht = (e, t = 0) => ({
	code: 103,
	parameters: [e.variableId, e.maxDigits],
	indent: t
}), Ut = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], Wt = (e) => ({
	variableId: e[0],
	maxDigits: e[1]
}), Gt = (e) => e.parameters[3] === 1, Kt = (e) => ({
	operation: e[1],
	itemId: e[0],
	value: e[3],
	operand: e[2]
}), qt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		e.operation,
		e.operand,
		e.value
	]
}), Jt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		0,
		e.value
	]
}), Yt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		1,
		e.variableId
	]
}), Xt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		0,
		e.value
	]
}), Zt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		1,
		e.variableId
	]
}), Qt = (e) => e.parameters[2] === 1, $t = (e) => e.parameters[0], en = (e) => ({
	operation: e[1],
	weaponId: e[0],
	value: e[3],
	operand: e[2],
	includesEquip: e[4]
}), tn = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		e.operation,
		e.operand,
		e.value,
		e.includesEquip
	]
}), nn = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		0,
		e.value,
		!1
	]
}), rn = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		1,
		e.variableId,
		!1
	]
}), an = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		0,
		e.value,
		!1
	]
}), on = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		1,
		e.variableId,
		!1
	]
}), sn = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		0,
		e.value,
		!1
	]
}), cn = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		1,
		e.variableId,
		!1
	]
}), ln = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		0,
		e.value,
		!1
	]
}), un = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		1,
		e.variableId,
		!1
	]
}), dn = (e, t = 0) => ({
	code: 104,
	parameters: [e.variableId, e.itemType],
	indent: t
}), fn = (e) => ({
	variableId: e[0],
	itemType: e[1]
}), pn = (e, t = 0) => ({
	code: 284,
	indent: t,
	parameters: [
		e.parallaxName,
		e.loopX,
		e.loopY,
		e.sx,
		e.sy
	]
}), mn = (e, t = 0) => ({
	code: 204,
	indent: t,
	parameters: [
		e.direction,
		e.distance,
		e.speed,
		e.waiting
	]
}), hn = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [0]
}), gn = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [1]
}), _n = (e = {}, t = 0) => ({
	code: 282,
	indent: t,
	parameters: [e.tilesetId ?? 0]
}), vn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		1,
		e.x,
		e.y
	]
}), yn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		0,
		e.x,
		e.y
	]
}), bn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		1,
		e.x,
		e.y
	]
}), xn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		0,
		e.x,
		e.y
	]
}), Sn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		1,
		e.x,
		e.y
	]
}), Cn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		0,
		e.x,
		e.y
	]
}), wn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		En[e.layer] ?? 2,
		1,
		e.x,
		e.y
	]
}), Tn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		En[e.layer] ?? 2,
		0,
		e.x,
		e.y
	]
}), En = {
	1: 2,
	2: 3,
	3: 4,
	4: 5
}, Dn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		0,
		e.x,
		e.y,
		e.direction
	]
}), On = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		1,
		e.xVariableId,
		e.yVariableId,
		e.direction
	]
}), kn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		2,
		e.exchangeCharacterId,
		0,
		e.direction
	]
}), An = (e = 0) => ({
	code: 135,
	parameters: [1],
	indent: e
}), jn = (e = 0) => ({
	code: 135,
	parameters: [0],
	indent: e
}), Mn = (e = 0) => ({
	code: 134,
	parameters: [1],
	indent: e
}), Nn = (e = 0) => ({
	code: 134,
	parameters: [0],
	indent: e
}), Pn = (e = 0) => ({
	code: 137,
	parameters: [1],
	indent: e
}), Fn = (e = 0) => ({
	code: 137,
	parameters: [0],
	indent: e
}), p = (e) => [e], In = (e) => ({ comment: e[0] }), Ln = (e, t = 0) => ({
	code: 108,
	indent: t,
	parameters: p(e)
}), Rn = (e, t = 0) => ({
	code: 408,
	indent: t,
	parameters: p(e)
}), zn = (e, t = 0) => e.map(((e, n) => n === 0 ? Ln(e, t) : Rn(e, t))), Bn = (e = {}) => [e?.speed ?? 4, e?.skip ?? !1], Vn = (e) => ({
	speed: e[0],
	skip: e[1]
}), Hn = (e = {}, t = 0) => ({
	code: 105,
	indent: t,
	parameters: Bn(e)
}), Un = (e = "") => [e], Wn = (e) => ({ content: e[0] }), Gn = (e = "", t = 0) => ({
	code: 405,
	indent: t ?? 0,
	parameters: Un(e)
}), Kn = (e, t = 0) => ({
	code: 402,
	indent: t,
	parameters: [e?.index ?? 0, e?.name ?? ""]
}), qn = (e) => ({
	index: e[0],
	name: e[1]
}), Jn = (e) => [e.index ?? 0, e.name ?? ""], Yn = (e) => ({
	choices: e[0],
	cancelType: e[1],
	defaultType: e[2],
	positionType: e[3],
	background: e[4]
}), Xn = (e) => [
	e.choices ?? [],
	e.cancelType ?? 0,
	e.defaultType ?? 0,
	e.positionType ?? 2,
	e.background ?? 0
], Zn = (e, t = 0) => ({
	code: 102,
	indent: t,
	parameters: [
		e?.choices ?? [],
		e?.cancelType ?? 0,
		e?.defaultType ?? 0,
		e?.positionType ?? 2,
		e?.background ?? 0
	]
}), Qn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [
		[...e.parameters[0]],
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), $n = (e) => {
	let t = e.parameters[0], n = e.parameters[1];
	return n < t.length ? n : -2;
}, er = (e) => e.parameters.length > 2 ? e.parameters[2] : 0, tr = (e) => e.parameters.length > 3 ? e.parameters[3] : 2, nr = (e) => e.parameters.length > 4 ? e.parameters[4] : 0, rr = (e, t = 0) => ({
	code: 101,
	indent: t,
	parameters: [
		e?.facename ?? "",
		e?.faceIndex ?? 0,
		e?.background ?? 0,
		e?.positionType ?? 2,
		e?.speakerName ?? ""
	]
}), ir = (e) => ({
	facename: e[0],
	faceIndex: e[1],
	background: e[2],
	positionType: e[3],
	speakerName: e[4] ?? ""
}), ar = (e) => [
	e.facename,
	e.faceIndex,
	e.background,
	e.positionType,
	e.speakerName
], or = (e, t = 0) => ({
	code: 401,
	indent: t,
	parameters: [e]
}), sr = (e, t = 0) => ({
	code: 261,
	indent: t,
	parameters: [e.filename]
}), cr = (e) => ({ filename: e[0] }), lr = ({ args: e = {}, commandName: t, commandTitle: n = "", pluginName: r }, i = 0) => ({
	code: 357,
	indent: i,
	parameters: [
		r,
		t,
		n,
		{ ...e }
	]
}), ur = (e) => ({
	pluginName: e[0],
	commandName: e[1],
	commandTitle: e[2],
	args: { ...e[3] }
}), dr = (e, t = 0) => ({
	code: 129,
	parameters: [0, e.actorId],
	indent: t
}), fr = (e, t = 0) => ({
	code: 129,
	parameters: [1, e.actorId],
	indent: t
}), pr = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		0,
		e.value
	],
	indent: t
}), mr = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		0,
		e.value
	],
	indent: t
}), hr = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		1,
		e.variableId
	],
	indent: t
}), gr = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		1,
		e.variableId
	],
	indent: t
}), _r = ({ pictureId: e = 0, origin: t = 0, name: n = "", x: r = 0, y: i = 0, scaleX: a = 100, scaleY: o = 100, opacity: s = 255, blendMode: c = 0 }) => ({
	code: 231,
	indent: 0,
	parameters: [
		e,
		n,
		t,
		r,
		i,
		a,
		o,
		s,
		c
	]
}), vr = ({ pictureId: e, origin: t, x: n, y: r, scaleX: i, scaleY: a, opacity: o, blendMode: s, wait: c = !1, easingType: ee = 0 }) => ({
	code: 232,
	indent: 0,
	parameters: [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		ee
	]
}), yr = (e, t = 0) => ({
	code: 236,
	indent: t,
	parameters: [
		e.type ?? "none",
		e.power ?? 0,
		e.duration ?? 0,
		e.wait ?? !1
	]
}), br = (e = 0) => ({
	code: 222,
	indent: e,
	parameters: []
}), xr = (e = 0) => ({
	code: 221,
	indent: e,
	parameters: []
}), Sr = (e, t = 0) => ({
	code: 224,
	indent: t,
	parameters: [
		e.color ? [
			e.color[0],
			e.color[1],
			e.color[2],
			e.color[3]
		] : [
			255,
			255,
			255,
			255
		],
		e.duration ?? 0,
		e.wait ?? !1
	]
}), Cr = (e, t = 0) => ({
	code: 225,
	indent: t,
	parameters: [
		e.power ?? 5,
		e.speed ?? 5,
		e.duration ?? 60,
		e.wait ?? !1
	]
}), wr = (e, t = 0) => ({
	code: 223,
	indent: t,
	parameters: [
		e.color ? [
			e.color[0],
			e.color[1],
			e.color[2],
			e.color[3]
		] : [
			0,
			0,
			0,
			0
		],
		e.duration ?? 60,
		e.wait ?? !1
	]
}), Tr = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), Er = (e, t = 0) => ({
	code: 655,
	indent: t,
	parameters: [e]
}), Dr = (e, t = 0) => e.map(((e, n) => n === 0 ? Tr(e, t) : Er(e, t))), Or = 1, kr = 0, m = {
	item: 0,
	weapon: 1,
	armors: 2
}, Ar = ({ goods: e, buyOnly: t = !1 }, n = 0) => e.map(((e, r) => {
	let i = +!!((e) => e.customPrice !== void 0 && e.customPrice !== 0)(e);
	return r === 0 ? {
		code: 302,
		indent: n,
		parameters: [
			m[e.itemType] ?? m.item,
			e.id,
			i,
			e.customPrice ?? 0,
			t
		]
	} : {
		code: 605,
		indent: n,
		parameters: [
			m[e.itemType] ?? m.item,
			e.id,
			i,
			e.customPrice ?? 0
		]
	};
})), jr = 0, Mr = 1, Nr = 2, Pr = 3, Fr = 4, Ir = 0, Lr = 1, Rr = 2, zr = (e) => e.parameters[3] === 1, Br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Vr(e)
}), Vr = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	1,
	e.variableId
], Hr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 0)
}), Ur = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 1)
}), Wr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 2)
}), Gr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 3)
}), Kr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 12)
}), qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 4)
}), Jr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 5)
}), Yr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 6)
}), Xr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 7)
}), Zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 8)
}), Qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 9)
}), $r = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 10)
}), ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 11)
}), h = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	3,
	e.actorId,
	t
], ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 0)
}), ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 1)
}), ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 10)
}), ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 2)
}), ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 3)
}), oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 4)
}), si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 5)
}), ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 6)
}), li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 7)
}), ui = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 8)
}), di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 9)
}), g = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	4,
	e.enemyIndex,
	t
], fi = (e) => e.parameters[5], pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: gi(e)
}), mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _i(e)
}), hi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: vi(e)
}), gi = (e) => [
	e.variableId,
	e.variableId,
	e.operation ?? 0,
	3,
	0,
	e.itemId
], _i = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	1,
	e.weaponId
], vi = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	2,
	e.armorId
], _ = {
	X: 0,
	Y: 1,
	DIRECTION: 2,
	SCREEN_X: 3,
	SCREEN_Y: 4
}, yi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.X)
}), bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.Y)
}), xi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.DIRECTION)
}), Si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.SCREEN_X)
}), Ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.SCREEN_Y)
}), wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.X)
}), Ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.Y)
}), Ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.DIRECTION)
}), Di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.SCREEN_X)
}), Oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.SCREEN_Y)
}), v = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	5,
	e.charactorId ?? 0,
	t
], ki = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 0)
}), Ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 4)
}), ji = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 5)
}), Mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 6)
}), Ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 7)
}), Pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 8)
}), Fi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 9)
}), y = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	7,
	t
], Ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: [
		e.variableId,
		e.variableId,
		0,
		3,
		6,
		e.memberIndex
	]
}), Li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 0)
}), Ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: [
		e.startId,
		e.startId,
		e.operation ?? 0,
		3,
		7,
		1
	]
}), zi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 2)
}), Bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 3)
}), b = (e, t) => [
	e.startId,
	e.startId,
	e.operation ?? 0,
	3,
	7,
	t
], Vi = {
	USED_SKILL_ID: 0,
	USED_ITEM_ID: 1,
	ACTION_ACTOR_ID: 2,
	ACTION_ENEMY_INDEX: 3,
	TARGET_ACTOR_ID: 4,
	TARGET_ENEMY_INDEX: 5
}, Hi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 0)
}), Ui = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 1)
}), Wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 2)
}), Gi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 3)
}), Ki = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 4)
}), qi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 5)
}), x = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	8,
	t
], Ji = (e) => e[4], Yi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Xi(e)
}), Xi = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	0,
	e.value
], Zi = (e, t) => t(e[4], e[5]), Qi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: $i(e)
}), $i = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	2,
	e.min,
	e.max
], ea = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), ta = (e = 0) => ({
	code: 206,
	indent: e,
	parameters: []
}), na = (e, t = 0) => ({
	code: 323,
	indent: t,
	parameters: [
		e.vehicleId,
		e.characterImage,
		e.characterIndex
	]
}), ra = (e, n = 0) => ({
	code: 140,
	indent: n,
	parameters: [e.vheicleId, t(e.bgm)]
}), ia = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		0,
		e.mapId,
		e.x,
		e.y
	]
}), aa = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		1,
		e.variableMapId,
		e.variableX,
		e.variableY
	]
}), oa = 0, sa = 1, ca = 2, la = (e) => {
	let t = or(ua(e.bodies), e.header.indent);
	return [e.header, t];
}, ua = (e) => e.map(((e) => e.parameters[0].trimEnd())).join("\n"), da = (e, t) => fa(e, t, ((e) => e.code === 101), ((e) => e.code === 401)), fa = (e, t, n, r) => {
	let i = e[t];
	if (!n(i)) return null;
	let a = [];
	for (let n = t + 1; n < e.length; n++) {
		let t = e[n];
		if (!r(t)) return {
			header: i,
			bodies: a
		};
		a.push(t);
	}
	return {
		header: i,
		bodies: a
	};
}, pa = (e) => e.code === 241 || e.code === 245 || e.code === 249 || e.code === 250 || e.code === 132 || e.code === 133 || e.code === 139, ma = (e) => [...e], ha = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: ma(e.parameters)
}), ga = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", _a = (e) => e.parameters.every(ga), va = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	effectName: e.effectName ?? "",
	displayType: e.displayType ?? 0,
	offsetX: e.offsetX ?? 0,
	offsetY: e.offsetY ?? 0,
	scale: e.scale ?? 100,
	speed: e.speed ?? 100,
	rotation: e.rotation ?? {
		x: 0,
		y: 0,
		z: 0
	},
	soundTimings: e.soundTimings ?? [],
	flashTimings: e.flashTimings ?? []
}), ya = (e) => {
	let t = e.trim();
	return /^\\[NnVv]\[\d+\]$/.test(t);
}, S = (e, t) => `\\${e}[${t}]`, ba = (e, t) => t.map(((t, n) => ({
	text: t,
	controlChar: S(e, n)
}))), xa = (e) => ba("N", e), Sa = (e) => ba("V", e), Ca = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
	char: e[1],
	id: parseInt(e[2], 10)
}))), wa = (e) => e.map(((e) => ({
	text: e.name,
	controlChar: S("N", e.id)
}))), Ta = (e) => e.variables.map(((e, t) => ({
	text: e || "",
	controlChar: S("V", t)
}))).filter(((e) => e.text !== "")), Ea = (e) => !!e, Da = (e, t, n) => ({
	data: e,
	eventId: t,
	pageIndex: n
}), Oa = (e, t, n) => e.list.map(((e) => ({
	data: e,
	eventId: n.id,
	pageIndex: t
}))), C = (e, t) => e.pages.map(((n, r) => t(n, r, e))), ka = (e, t) => e.events.filter(Ea).map(((e) => C(e, t))), Aa = (e, t) => e.events.filter(Ea).flatMap(((e) => C(e, t))), ja = (e, t) => e.map(((e) => C(e, t))), Ma = (e, t) => e.flatMap(((e) => C(e, t))), Na = (e, t) => e.map(((e) => t(e, 0, e))), Pa = (e) => ka(e, Oa).flat(2), Fa = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	trigger: e.trigger ?? 0,
	list: e.list ?? [],
	switchId: e.switchId ?? 0
}), Ia = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	members: e.members ?? [],
	pages: e.pages ?? []
}), La = (e) => ({
	span: e.span ?? 0,
	conditions: za(e.conditions ?? {}),
	list: e.list ?? []
}), Ra = (e = {}) => ({
	enemyId: e.enemyId ?? 0,
	x: e.x ?? 0,
	y: e.y ?? 0,
	hidden: e.hidden ?? !1
}), za = (e = {}) => ({
	actorHp: e.actorHp ?? 0,
	actorId: e.actorId ?? 0,
	enemyValid: e.enemyValid ?? !1,
	switchValid: e.switchValid ?? !1,
	turnEnding: e.turnEnding ?? !1,
	turnValid: e.turnValid ?? !1,
	enemyIndex: e.enemyIndex ?? 0,
	enemyHp: e.enemyHp ?? 0,
	actorValid: e.actorValid ?? !1,
	switchId: e.switchId ?? 0,
	turnA: e.turnA ?? 0,
	turnB: e.turnB ?? 0
}), Ba = (e, t, n) => {
	let r = e.filter(t);
	if (r.length === 0) return null;
	let i = r.reduce(Va, 0);
	return i <= 0 ? null : Ha(n(i), r);
}, Va = (e, t) => e + t.weight, Ha = (e, t) => {
	let n = e;
	for (let e of t) if (n -= e.weight, n < 0) return e;
	return null;
}, Ua = (e) => e.events.filter(((e) => !!e)), Wa = (e, t) => e.events[t] ?? void 0, Ga = (e, t, n) => Ua(e).filter(((e) => e.x === t && e.y === n)), Ka = (e, t, n) => Ga(e, t, n)[0]?.id ?? 0, qa = (e = {}) => ({
	switch1Id: e.switch1Id ?? 0,
	switch1Valid: e.switch1Id !== void 0,
	switch2Id: e.switch2Id ?? 0,
	switch2Valid: e.switch2Id !== void 0,
	variableId: e.variableId ?? 0,
	variableValid: e.variableId !== void 0,
	variableValue: e.variableValue ?? 0,
	selfSwitchCh: e.selfSwitchCh ?? "A",
	selfSwitchValid: e.selfSwitchCh !== void 0,
	itemId: e.itemId ?? 0,
	itemValid: e.itemId !== void 0,
	actorId: e.actorId ?? 0,
	actorValid: e.actorId !== void 0
}), Ja = ({ id: e = 1, name: t = "", pages: n = [], note: r = "", x: i = 0, y: a = 0 } = {}) => ({
	id: e,
	name: t,
	pages: n,
	note: r,
	x: i,
	y: a
}), Ya = ({ characterIndex: e = 0, characterName: t = "", direction: n = 2, pattern: r = 0, tileId: i = 0 } = {}) => ({
	characterIndex: e,
	characterName: t,
	direction: n,
	pattern: r,
	tileId: i
}), Xa = ({ list: e = [], conditions: t = qa(), image: n = Ya(), moveFrequency: r = 5, directionFix: i = !1, moveRoute: a = {
	list: [],
	repeat: !1,
	skippable: !1,
	wait: !1
}, priorityType: o = 1, stepAnime: s = !1, through: c = !1, walkAnime: ee = !1, moveSpeed: te = 3, moveType: ne = 0, trigger: re = 0 } = {}) => ({
	walkAnime: ee,
	stepAnime: s,
	through: c,
	conditions: t,
	list: e,
	directionFix: i,
	image: n,
	priorityType: o,
	moveFrequency: r,
	moveSpeed: te,
	moveType: ne,
	trigger: re,
	moveRoute: {
		list: a.list,
		repeat: a.repeat,
		skippable: a.skippable,
		wait: a.wait
	}
}), Za = (e, t) => ({
	map: t,
	filename: `Map${e.id.toString().padStart(3, "0")}`,
	editingName: e.name
}), Qa = (e) => $a({ events: [Ja({ pages: [Xa({ list: e })] })] }), $a = (e = {}) => ({
	tilesetId: e.tilesetId ?? 1,
	data: e.data ?? [],
	battleback1Name: e.battleback1Name ?? "",
	battleback2Name: e.battleback2Name ?? "",
	autoplayBgm: e.autoplayBgm ?? !1,
	autoplayBgs: e.autoplayBgs ?? !1,
	parallaxLoopX: e.parallaxLoopX ?? !1,
	parallaxLoopY: e.parallaxLoopY ?? !1,
	parallaxName: e.parallaxName ?? "",
	parallaxShow: e.parallaxShow ?? !1,
	parallaxSx: e.parallaxSx ?? 0,
	parallaxSy: e.parallaxSy ?? 0,
	encounterStep: e.encounterStep ?? 30,
	scrollType: e.scrollType ?? 0,
	specifyBattleback: e.specifyBattleback ?? !1,
	width: e.width ?? 0,
	height: e.height ?? 0,
	note: e.note ?? "",
	bgm: e.bgm ?? {
		name: "",
		pan: 0,
		pitch: 100,
		volume: 100
	},
	bgs: e.bgs ?? {
		name: "",
		pan: 0,
		pitch: 100,
		volume: 100
	},
	disableDashing: e.disableDashing ?? !1,
	displayName: e.displayName ?? "",
	encounterList: e.encounterList ?? [],
	events: e.events ?? []
}), eo = (e, t, n) => t >= 0 && n >= 0 && t < e.width && n < e.height, to = (e, t, n, r) => {
	let i = e.width, a = e.height;
	return e.data[(r * a + n) * i + t] || 0;
}, no = (e, t, n) => [
	3,
	2,
	1,
	0
].map(((r) => to(e, t, n, r))), w = (e) => e.scrollType === 2 || e.scrollType === 3, ro = (e) => e.scrollType === 1 || e.scrollType === 3, io = (e, t) => w(e) ? ho(t, e.width) : t, ao = (e, t) => ro(e) ? ho(t, e.height) : t, oo = (e, t) => e + (t === 6 ? 1 : t === 4 ? -1 : 0), so = (e, t) => e + (t === 2 ? 1 : t === 8 ? -1 : 0), co = (e, t, n) => io(e, oo(t, n)), lo = (e, t, n) => ao(e, so(t, n)), uo = (e, t, n) => {
	let r = t - n;
	return w(e) && Math.abs(r) > e.width / 2 ? r < 0 ? r + e.width : r - e.width : r;
}, fo = (e, t, n) => {
	let r = t - n;
	return ro(e) && Math.abs(r) > e.height / 2 ? r < 0 ? r + e.height : r - e.height : r;
}, po = (e, t, n, r, i) => Math.abs(uo(e, t, r)) + Math.abs(fo(e, n, i)), mo = (e, t, n, r) => {
	let i = ((e, t, n) => eo(e, t, n) ? to(e, t, n, 5) : 0)(e, t, n);
	return Ba(e.encounterList, ((e) => e.regionSet.includes(i)), r);
}, ho = (e, t) => {
	let n = e % t;
	return n >= 0 ? n : n + t;
}, go = (e) => e.toString().padStart(3, "0"), _o = (e = { id: 0 }) => ({
	name: e.name ?? go(e.id),
	id: e.id,
	expanded: e.expanded ?? !1,
	order: e.order ?? 0,
	parentId: e.parentId ?? 0,
	scrollX: e.scrollX ?? 0,
	scrollY: e.scrollY ?? 0
}), vo = (e, t) => e.map(((e) => e ? {
	...e,
	pages: yo(e, t)
} : null)), yo = (e, t) => e.pages.map(((e) => ({
	...e,
	list: t(e.list)
}))), bo = (e, t) => [
	xo(e.skills, t),
	So(e.actors, t),
	Co(e.states, t),
	wo(e.armors, t),
	To(e.classes, t),
	Eo(e.enemies, t),
	Do(e.items, t),
	Oo(e.weapons, t),
	ko(e.commonEvents, t)
], xo = (e, t) => ({
	label: t.skill.title,
	items: e,
	source: {
		author: "rmmz",
		module: "data",
		kind: "skill"
	}
}), So = (e, t) => ({
	items: e,
	label: t.actor.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "actor"
	}
}), Co = (e, t) => ({
	items: e,
	label: t.state.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "state"
	}
}), wo = (e, t) => ({
	items: e,
	label: t.armor.title,
	source: {
		author: "rmmz",
		kind: "armor",
		module: "data"
	}
}), To = (e, t) => ({
	items: e,
	label: t.class.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "class"
	}
}), Eo = (e, t) => ({
	items: e,
	label: t.enemy.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "enemy"
	}
}), Do = (e, t) => ({
	items: e,
	label: t.item.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "item"
	}
}), Oo = (e, t) => ({
	items: e,
	label: t.weapon.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "weapon"
	}
}), ko = (e, t) => ({
	items: e,
	label: t.commonEvent.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "common_event"
	}
}), Ao = {
	actor: {
		title: "アクター",
		options: {
			initialEquipments: "初期装備",
			faceImage: "顔画像",
			characterImage: "キャラクター画像",
			svBattlerImage: "SVバトラー画像",
			nickname: "ニックネーム",
			profile: "プロフィール",
			classId: "職業ID",
			initialLevel: "初期レベル",
			maxLevel: "最大レベル"
		}
	},
	class: {
		title: "職業",
		options: {
			params: "パラメータ",
			learnings: "習得スキル",
			expParams: "経験値パラメータ"
		}
	},
	armor: {
		title: "防具",
		options: {
			armorTypeId: "防具タイプID",
			slotTypeId: "スロットタイプID"
		}
	},
	enemy: {
		title: "敵キャラ",
		options: {
			dropItems: "ドロップアイテム",
			battlerHue: "バトラーヒュー",
			battlerName: "バトラー名",
			gold: "ゴールド"
		}
	},
	item: {
		title: "アイテム",
		options: { consumable: "消耗品" }
	},
	skill: {
		title: "スキル",
		options: {
			requiredWeaponTypeId1: "必要武器タイプ1",
			requiredWeaponTypeId2: "必要武器タイプ2",
			mpCost: "MP消費",
			tpCost: "TP消費"
		}
	},
	state: {
		title: "ステート",
		options: {
			restriction: "制約",
			priority: "優先度",
			motion: "モーション",
			overlay: "オーバーレイ",
			removeAtBattleEnd: "戦闘終了時解除",
			removeByRestriction: "制約による解除",
			autoRemovalTiming: "自動解除タイミング",
			minTurns: "最小ターン数",
			maxTurns: "最大ターン数",
			removeByDamage: "ダメージによる解除",
			chanceByDamage: "ダメージによる解除確率",
			removeByWalking: "歩行による解除",
			stepsToRemove: "解除までの歩数"
		}
	},
	weapon: {
		title: "武器",
		options: { weaponTypeId: "武器タイプID" }
	},
	usableItem: {
		title: "",
		options: {
			scope: "範囲",
			speed: "速度補正",
			successRate: "成功率"
		}
	},
	commonEvent: {
		title: "コモンイベント",
		options: {
			trigger: "トリガー",
			switchId: "スイッチID",
			name: "名前",
			id: "ID",
			list: "コマンドリスト"
		}
	}
}, jo = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	characterName: e.characterName ?? "",
	characterIndex: e.characterIndex ?? 0,
	faceName: e.faceName ?? "",
	faceIndex: e.faceIndex ?? 0,
	traits: [],
	note: e.note ?? "",
	classId: e.classId ?? 0,
	nickname: e.nickname ?? "",
	profile: e.profile ?? "",
	equips: [],
	initialLevel: e.initialLevel ?? 0,
	maxLevel: e.maxLevel ?? 0
}), Mo = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	characterName: e.characterName ?? "",
	characterIndex: e.characterIndex ?? 0,
	faceName: e.faceName ?? "",
	faceIndex: e.faceIndex ?? 0,
	traits: [],
	note: e.note ?? "",
	classId: e.classId ?? 0,
	nickname: e.nickname ?? "",
	profile: e.profile ?? "",
	equips: [],
	initialLevel: e.initialLevel ?? 0,
	maxLevel: e.maxLevel ?? 0
}), No = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	iconIndex: e.iconIndex ?? 0,
	description: e.description ?? "",
	traits: e.traits ?? [],
	note: e.note ?? "",
	atypeId: e.atypeId ?? 0,
	params: e.params ?? [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	etypeId: e.etypeId ?? 0,
	price: e.price ?? 0
}), Po = 0, Fo = 1, Io = 2, Lo = 3, Ro = 4, zo = 5, Bo = 6, Vo = 7, Ho = ({ mhp: e = 0, mmp: t = 0, atk: n = 0, def: r = 0, mat: i = 0, mdf: a = 0, agi: o = 0, luk: s = 0 }) => [
	e,
	t,
	n,
	r,
	i,
	a,
	o,
	s
], Uo = (e) => {
	let [t, n, r, i, a, o, s, c] = e;
	return {
		mhp: t,
		mmp: n,
		atk: r,
		def: i,
		mat: a,
		mdf: o,
		agi: s,
		luk: c
	};
}, Wo = (e = 0) => ({
	mhp: e,
	mmp: e,
	atk: e,
	def: e,
	mat: e,
	mdf: e,
	agi: e,
	luk: e
}), Go = 0, Ko = 1, qo = 2, Jo = 3, Yo = 4, Xo = 5, Zo = 6, Qo = 7, $o = 8, es = 9, ts = 11, ns = 12, rs = 13, is = 14, as = 21, os = 22, ss = 23, cs = 31, ls = 32, us = 33, ds = 34, fs = 35, ps = 41, ms = 42, hs = 43, gs = 44, _s = 51, vs = 52, ys = 53, bs = 54, xs = 55, Ss = 61, Cs = 62, ws = 63, Ts = 64, Es = 0, Ds = 1, Os = 2, ks = 3, As = 4, js = 5, Ms = 6, Ns = 7, Ps = 8, Fs = 9, Is = 0, Ls = 1, Rs = 2, zs = 3, Bs = (e, t) => ({
	items: Vs(e.options, t),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), Vs = (e, t) => [
	{
		id: 0,
		name: t.normal
	},
	{
		id: 1,
		name: e.bossCollaps
	},
	{
		id: 2,
		name: e.instantCollaps
	},
	{
		id: 3,
		name: e.noneCollaps
	}
], Hs = 0, Us = 1, Ws = 2, Gs = 3, Ks = 4, qs = 5, Js = 6, Ys = 7, Xs = 8, Zs = 9, Qs = (e) => ({
	items: $s(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), $s = (e) => [
	{
		id: 0,
		name: e.hitRate
	},
	{
		id: 1,
		name: e.evasionRate
	},
	{
		id: 2,
		name: e.criticalRate
	},
	{
		id: 3,
		name: e.criticalEvasionRate
	},
	{
		id: 4,
		name: e.magicEvasionRate
	},
	{
		id: 5,
		name: e.magicReflectionRate
	},
	{
		id: 6,
		name: e.counterAttackRate
	},
	{
		id: 7,
		name: e.hpRegenerationRate
	},
	{
		id: 8,
		name: e.mpRegenerationRate
	},
	{
		id: 9,
		name: e.tpRegenerationRate
	}
], ec = (e, t) => {
	switch (e) {
		case 3: return t.criticalEvasionRate;
		case 1: return t.evasionRate;
		case 6: return t.counterAttackRate;
		case 2: return t.criticalRate;
		case 0: return t.hitRate;
		case 7: return t.hpRegenerationRate;
		case 4: return t.magicEvasionRate;
		case 5: return t.magicReflectionRate;
		case 8: return t.mpRegenerationRate;
		case 9: return t.tpRegenerationRate;
	}
	return `?xparams[${e}]`;
}, tc = 0, nc = 1, rc = 2, ic = 3, ac = 4, oc = 5, sc = 6, cc = 7, lc = (e) => ({
	items: uc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), uc = (e) => [
	{
		id: 0,
		name: e.maxHp
	},
	{
		id: 1,
		name: e.maxMp
	},
	{
		id: 2,
		name: e.atk
	},
	{
		id: 3,
		name: e.def
	},
	{
		id: 4,
		name: e.matk
	},
	{
		id: 5,
		name: e.mdef
	},
	{
		id: 6,
		name: e.agi
	},
	{
		id: 7,
		name: e.luk
	}
], dc = (e, t) => {
	switch (e) {
		case 0: return t.maxHp;
		case 1: return t.maxMp;
		case 2: return t.atk;
		case 3: return t.def;
		case 4: return t.matk;
		case 5: return t.mdef;
		case 6: return t.agi;
		case 7: return t.luk;
		default: return `?rparams[${e}]`;
	}
}, fc = 0, pc = 1, mc = 2, hc = 3, gc = 4, _c = 5, vc = 6, yc = 7, bc = 8, xc = 9, Sc = (e) => ({
	items: Cc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), Cc = (e) => [
	{
		id: 0,
		name: e.targetRate
	},
	{
		id: 1,
		name: e.guardEffectRate
	},
	{
		id: 2,
		name: e.recoveryEffectRate
	},
	{
		id: 3,
		name: e.pharmacology
	},
	{
		id: 4,
		name: e.mpCostRate
	},
	{
		id: 5,
		name: e.tpChargeRate
	},
	{
		id: 6,
		name: e.physicalDamageRate
	},
	{
		id: 7,
		name: e.magicDamageRate
	},
	{
		id: 8,
		name: e.floorDamageRate
	},
	{
		id: 9,
		name: e.experienceRate
	}
], wc = (e, t) => {
	switch (e) {
		case 9: return t.experienceRate;
		case 0: return t.targetRate;
		case 8: return t.floorDamageRate;
		case 1: return t.guardEffectRate;
		case 4: return t.mpCostRate;
		case 5: return t.tpChargeRate;
		case 6: return t.physicalDamageRate;
		case 7: return t.magicDamageRate;
		case 3: return t.pharmacology;
		case 2: return t.recoveryEffectRate;
	}
	return `?sparams[${e}]`;
}, Tc = 0, Ec = 1, Dc = 2, Oc = 3, kc = 4, Ac = 5, jc = (e) => ({
	items: Mc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), Mc = (e) => [
	{
		id: 0,
		name: e.encounterHalf
	},
	{
		id: 1,
		name: e.encounterNone
	},
	{
		id: 2,
		name: e.cancelSurprise
	},
	{
		id: 3,
		name: e.raisePreemptive
	},
	{
		id: 4,
		name: e.goldDouble
	},
	{
		id: 5,
		name: e.dropItemDouble
	}
], Nc = 0, Pc = 1, Fc = 2, Ic = 3, Lc = (e) => ({
	items: Rc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), Rc = (e) => [
	{
		id: 0,
		name: e.autoBattle
	},
	{
		id: 1,
		name: e.guard
	},
	{
		id: 2,
		name: e.substitute
	},
	{
		id: 3,
		name: e.preventEscape
	}
], T = "{name}", E = "{name} * {value}%", zc = "{name} + {value}%", Bc = "{value}", Vc = {
	title: "特徴",
	options: {
		regularParam: {
			title: "基本能力値",
			format: E,
			options: {
				maxHp: "最大HP",
				maxMp: "最大MP",
				atk: "攻撃力",
				def: "防御力",
				matk: "魔法攻撃力",
				mdef: "魔法防御力",
				agi: "敏捷性",
				luk: "運"
			}
		},
		extraParam: {
			title: "追加能力値",
			format: zc,
			options: {
				hitRate: "命中率",
				evasionRate: "回避率",
				criticalRate: "クリティカル率",
				criticalEvasionRate: "クリティカル回避率",
				magicEvasionRate: "魔法回避率",
				magicReflectionRate: "魔法反射率",
				counterAttackRate: "反撃率",
				hpRegenerationRate: "HP再生率",
				mpRegenerationRate: "MP再生率",
				tpRegenerationRate: "TP再生率"
			}
		},
		specialParam: {
			title: "特殊能力値",
			format: E,
			options: {
				targetRate: "狙われ率",
				guardEffectRate: "防御効果率",
				recoveryEffectRate: "回復効果率",
				pharmacology: "薬の知識",
				mpCostRate: "MP消費率",
				tpChargeRate: "TPチャージ率",
				physicalDamageRate: "物理ダメージ率",
				magicDamageRate: "魔法ダメージ率",
				floorDamageRate: "床ダメージ率",
				experienceRate: "経験値率"
			}
		},
		specialFlag: {
			title: "特殊フラグ",
			format: T,
			options: {
				autoBattle: "自動戦闘",
				guard: "防御",
				substitute: "身代わり",
				preventEscape: "逃走防止"
			}
		},
		collaps: {
			title: "消滅エフェクト",
			format: T,
			options: {
				bossCollaps: "ボス崩壊",
				instantCollaps: "即時崩壊",
				noneCollaps: "崩壊なし"
			}
		},
		partyAbility: {
			title: "パーティ能力",
			format: T,
			options: {
				cancelSurprise: "不意打ち無効",
				dropItemDouble: "アイテムドロップ2倍",
				encounterHalf: "エンカウント半減",
				encounterNone: "エンカウントなし",
				goldDouble: "ゴールド2倍",
				raisePreemptive: "先制攻撃率アップ"
			}
		},
		elementRate: {
			title: "属性有効度",
			format: E
		},
		debuffRate: {
			title: "弱体有効度",
			format: E
		},
		stateRate: {
			title: "ステート有効度",
			format: E
		},
		stateResist: {
			title: "ステート無効",
			format: T
		},
		attackElement: {
			title: "攻撃属性",
			format: T
		},
		attackState: {
			title: "攻撃ステート",
			format: zc
		},
		attackSpeed: {
			title: "攻撃速度補正",
			format: Bc
		},
		attackTimes: {
			title: "攻撃追加回数",
			format: Bc
		},
		actionPlus: {
			title: "行動追加",
			format: E
		},
		attackSkill: {
			title: "攻撃スキル",
			format: T
		},
		equipWeaponType: {
			title: "装備武器タイプ",
			format: T
		},
		equipArmorType: {
			title: "装備防具タイプ",
			format: T
		},
		equipLock: {
			title: "装備固定",
			format: T
		},
		equipSeal: {
			title: "装備封印",
			format: T
		},
		slotType: {
			title: "スロットタイプ",
			format: T
		},
		skillAdd: {
			title: "スキル追加",
			format: T
		},
		skillSeal: {
			title: "スキルタイプ封印",
			format: T
		},
		skillTypeAdd: {
			title: "スキルタイプ追加",
			format: T
		},
		skillTypeSeal: {
			title: "スキルタイプ封印",
			format: T
		}
	}
}, Hc = (e, t) => [
	lc(e.regularParam),
	Qs(e.extraParam),
	Sc(e.specialParam),
	Bs(e.collaps, t),
	Lc(e.specialFlag),
	jc(e.partyAbility)
], Uc = (e) => e.code === 32, D = (e, t, n) => e.reduce(((e, r) => r.code === t && r.dataId === n ? e * r.value : e), 1), O = (e, t, n) => e.reduce(((e, r) => r.code === t && r.dataId === n ? e + r.value : e), 0), Wc = (e, t) => e.reduce(((e, n) => n.code === t ? e + n.value : e), 0), k = (e, t) => e.filter(((e) => e.code === t)).map(((e) => e.dataId)), A = (e, t, n) => e.some(((e) => e.code === t && e.dataId === n)), Gc = (e) => k(e, 31), Kc = (e) => k(e, 32), qc = (e, t) => O(e, 32, t), Jc = (e) => Wc(e, 33), Yc = (e) => Math.max(0, Wc(e, 34)), Xc = (e) => e.reduce(Zc, 1), Zc = (e, t) => t.code === 35 ? Math.max(e, t.dataId) : e, Qc = (e) => e.filter(((e) => e.code === 61)).map(((e) => e.value)), $c = (e) => e.some(((e) => e.code === 62 && e.value === 0)), el = (e) => e.some(((e) => e.code === 62 && e.value === 1)), tl = (e) => k(e, 41), nl = (e, t) => A(e, 42, t), rl = (e) => k(e, 43), il = (e, t) => A(e, 44, t), al = (e, t) => {
	let n = 0, r = !1;
	for (let i of t) i.dataId === e && (i.code === 35 && (r = !0), i.code === 34 && (n += i.value));
	return r ? n : 0;
}, j = (e, t, n) => e.some(((e) => e.code === t && e.dataId === n)), ol = (e, t) => j(e, 51, t), sl = (e, t) => j(e, 52, t), cl = (e, t) => j(e, 53, t), ll = (e, t) => j(e, 54, t), ul = (e) => e.some(((e) => e.code === 62 && e.dataId === 3)), dl = (e) => e.reduce(fl, 0), fl = (e, t) => t.code === 63 ? Math.max(e, t.dataId) : e, M = (e, t) => D(e, 21, t), pl = (e, t) => D(e, 23, t), ml = (e, t) => D(e, 11, t), hl = (e, t) => D(e, 12, t), gl = (e, t) => D(e, 13, t), _l = (e) => D(e, 23, 0), vl = (e) => D(e, 23, 1), yl = (e) => D(e, 23, 2), bl = (e) => D(e, 23, 3), N = (e) => D(e, 23, 4), xl = (e) => D(e, 23, 5), Sl = (e) => D(e, 23, 6), Cl = (e) => D(e, 23, 7), wl = (e) => D(e, 23, 8), Tl = (e) => D(e, 23, 9), El = (e, t) => O(e, 22, t), Dl = (e) => O(e, 22, 0), Ol = (e) => O(e, 22, 1), kl = (e) => O(e, 22, 2), Al = (e) => O(e, 22, 3), jl = (e) => O(e, 22, 4), Ml = (e) => O(e, 22, 5), Nl = (e) => O(e, 22, 6), Pl = (e) => O(e, 22, 7), Fl = (e) => O(e, 22, 8), Il = (e) => O(e, 22, 9), Ll = (e, t) => {
	let n = Pl(e);
	return Math.floor(t * n);
}, Rl = (e, t) => {
	let n = Fl(e);
	return Math.floor(t * n);
}, zl = (e, t) => {
	let n = xl(e);
	return Math.floor(t * n);
}, Bl = (e, t) => e.every(((e) => !(e.code === 14 && e.dataId === t))), Vl = {
	itemMapper: {
		placeHolder: "name",
		dataIdKey: "dataId",
		kindKey: "code"
	},
	placeHolder: { numbers: ["value"] }
}, Hl = (t, r, i) => e(r, i, n(Vl), t.pattern, ((e) => e.dataId)), Ul = (e) => e.reduce(Kl, Wo(1)), Wl = (e) => e.reduce(Gl, {
	agi: 1,
	atk: 1,
	def: 1,
	mat: 1,
	mdf: 1,
	mhp: 1,
	mmp: 1,
	luk: 1,
	hit: 1,
	eva: 1,
	cri: 1,
	cev: 1,
	mev: 1,
	mrf: 1,
	cnt: 1,
	hrg: 1,
	mrg: 1,
	trg: 1,
	tgr: 1,
	grd: 1
}), Gl = (e, t) => ql(Kl(e, t), t), Kl = (e, t) => t.code === 21 ? t.dataId === 0 ? (e.mhp *= t.value, e) : t.dataId === 1 ? (e.mmp *= t.value, e) : t.dataId === 2 ? (e.atk *= t.value, e) : t.dataId === 3 ? (e.def *= t.value, e) : t.dataId === 4 ? (e.mat *= t.value, e) : t.dataId === 5 ? (e.mdf *= t.value, e) : t.dataId === 6 ? (e.agi *= t.value, e) : (t.dataId === 7 && (e.luk *= t.value), e) : e, ql = (e, t) => (t.code !== 22 || (t.dataId === 0 && (e.hit *= t.value), t.dataId === 1 && (e.eva *= t.value), t.dataId === 2 && (e.cri *= t.value)), e), Jl = (e, t, n, r, i, a, o) => (Yl(e, t, n) + i[e]) * M(r, e) * Ql(e, a, o), Yl = (e, t, n) => {
	let r = t.params[e];
	return r === void 0 ? 0 : r[Math.max(0, Math.min(n, r.length - 1))];
}, Xl = (e, t, n, r, i, a) => Zl(e, t, r) * M(n, e) * Ql(e, i, a), Zl = (e, t, n) => Math.max(0, t.params[e] + n[e]), Ql = (e, t, n) => t[e] * n.buffRateStep + n.baseBuffRate, $l = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ?? tu(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), eu = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: e.traits ?? [],
	note: e.note ?? "",
	params: e.params ? nu(e.params) : tu(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), tu = () => [
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0]
], nu = (e) => {
	let t = e.map(((e) => e.atk)), n = e.map(((e) => e.def)), r = e.map(((e) => e.mat)), i = e.map(((e) => e.mdf)), a = e.map(((e) => e.agi)), o = e.map(((e) => e.luk));
	return [
		e.map(((e) => e.mhp)),
		e.map(((e) => e.mmp)),
		t,
		n,
		r,
		i,
		a,
		o
	];
}, ru = 0, iu = 1, au = 2, ou = 3, su = 4, cu = 5, lu = 6, uu = (e = {}) => ({
	dataId: e.dataId ?? 0,
	denominator: e.denominator ?? 0,
	kind: e.kind ?? 0
}), du = (e = {}) => ({
	conditionParam1: e.conditionParam1 ?? 0,
	conditionParam2: e.conditionParam2 ?? 0,
	conditionType: e.conditionType ?? 0,
	rating: e.rating ?? 0,
	skillId: e.skillId ?? 0
}), fu = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	battlerHue: e.battlerHue ?? 0,
	dropItems: e.dropItems?.map((() => uu())) ?? [],
	exp: e.exp ?? 0,
	gold: e.gold ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ? [...e.params] : Ho({
		mhp: 0,
		mmp: 0,
		atk: 0,
		def: 0,
		mat: 0,
		mdf: 0,
		agi: 0,
		luk: 0
	}),
	actions: []
}), pu = (e) => Ho(mu(e)), mu = (e) => e.reduce(((e, t) => (e.mhp += t.params[0], e.mmp += t.params[1], e.atk += t.params[2], e.def += t.params[3], e.mat += t.params[4], e.mdf += t.params[5], e.agi += t.params[6], e.luk += t.params[7], e)), {
	mhp: 0,
	mmp: 0,
	atk: 0,
	def: 0,
	mat: 0,
	mdf: 0,
	agi: 0,
	luk: 0
}), hu = (e) => e.filter(((e) => e.iconIndex > 0)).map(((e) => e.iconIndex)), gu = (e) => e.every(_u), _u = (e) => e.restriction < 4, P = (e) => 1 <= e.restriction && e.restriction <= 3, vu = (e) => e.some(P), yu = (e) => e.reduce(bu, 0), bu = (e, t) => P(t) ? Math.max(e, t.restriction) : e, xu = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	iconIndex: e.iconIndex ?? 0,
	message1: e.message1 ?? "",
	message2: e.message2 ?? "",
	message3: e.message3 ?? "",
	message4: e.message4 ?? "",
	traits: [],
	note: e.note ?? "",
	messageType: e.messageType ?? 0,
	releaseByDamage: e.releaseByDamage ?? !1,
	restriction: e.restriction ?? 0,
	priority: e.priority ?? 0,
	motion: e.motion ?? 0,
	overlay: e.overlay ?? 0,
	removeAtBattleEnd: e.removeAtBattleEnd ?? !1,
	removeByRestriction: e.removeByRestriction ?? !1,
	autoRemovalTiming: e.autoRemovalTiming ?? 0,
	minTurns: e.minTurns ?? 0,
	maxTurns: e.maxTurns ?? 0,
	removeByDamage: e.removeByDamage ?? !1,
	chanceByDamage: e.chanceByDamage ?? 0,
	removeByWalking: e.removeByWalking ?? !1,
	stepsToRemove: e.stepsToRemove ?? 0
}), Su = {
	title: "ダメージ",
	options: {}
}, F = (e = {}) => ({
	type: e.type ?? 0,
	elementId: e.elementId ?? 0,
	formula: e.formula ?? "",
	variance: e.variance ?? 0,
	critical: e.critical ?? !1
}), Cu = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	iconIndex: e.iconIndex ?? 0,
	description: e.description ?? "",
	traits: e.traits ?? [],
	note: e.note ?? "",
	animationId: e.animationId ?? 0,
	params: e.params ?? [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	etypeId: e.etypeId ?? 0,
	price: e.price ?? 0,
	damage: F(e.damage ?? {}),
	wtypeId: e.wtypeId ?? 0
}), wu = {
	title: "武器",
	options: { weaponTypeId: "武器タイプID" }
}, Tu = (e, t) => ku(e, t, Eu), Eu = (e, t) => t.code === 51 && t.dataId === e.wtypeId, Du = (e, t) => ku(e, t, Ou), Ou = (e, t) => t.code === 52 && t.dataId === e.atypeId, ku = (e, t, n) => {
	let r = t.find(((t) => t.code === 54 ? t.dataId === e.etypeId : !!n(e, t)));
	return !!r && r.code !== 54 && t.every(((t) => t.code !== 54 || t.dataId !== e.etypeId));
}, Au = (e, t) => {
	let n = new Set(k(e, 51)), r = new Set(k(e, 54));
	return t.filter(((e) => n.has(e.wtypeId) && !r.has(e.etypeId)));
}, ju = (e, t) => {
	let n = new Set(k(e, 52)), r = new Set(k(e, 54));
	return t.filter(((e) => n.has(e.atypeId) && !r.has(e.etypeId)));
}, Mu = 11, Nu = 12, Pu = 13, Fu = 21, Iu = 22, Lu = 31, Ru = 32, zu = 33, Bu = 34, Vu = 41, Hu = 42, Uu = 43, Wu = 44, Gu = (e) => [
	qu(e),
	Ju(e),
	Yu(e),
	Xu(e),
	Zu(e),
	Qu(e),
	$u(e),
	ed(e),
	td(e),
	Ku(e),
	nd(e),
	rd(e),
	id(e)
], I = (e, t, n) => ({
	kindId: e,
	label: t.domainName,
	pattern: t.format,
	description: t.desc,
	dataSource: n
}), Ku = (e) => I(41, e.special), qu = (e) => I(11, e.recoverHp), Ju = (e) => I(12, e.recoverMp), Yu = (e) => I(13, e.gainTp), Xu = (e) => I(21, e.addState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), Zu = (e) => I(22, e.removeState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), Qu = (e) => I(31, e.addBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), $u = (e) => I(32, e.addDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), ed = (e) => I(33, e.removeBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), td = (e) => I(34, e.removeDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), nd = (e) => I(42, e.grow, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), rd = (e) => I(43, e.learnSkill, {
	author: "rmmz",
	module: "data",
	kind: "skill"
}), id = (e) => I(44, e.commonEvent, {
	author: "rmmz",
	module: "data",
	kind: "common_event"
}), ad = "{name} {value1}%", L = "{value1}% + {value2}", od = "{name} {value1}ターン", R = "{name}", sd = {
	title: "使用効果",
	options: {
		addBuff: {
			desc: "バフを付与する",
			domainName: "バフ付与",
			format: od
		},
		addDebuff: {
			desc: "デバフを付与する",
			domainName: "デバフ付与",
			format: od
		},
		gainTp: {
			desc: "TPを指定した量だけ増加させます。",
			domainName: "TP増加",
			format: L
		},
		grow: {
			desc: "成長効果",
			domainName: "成長効果",
			format: "{name} + {value1}"
		},
		learnSkill: {
			desc: "スキルを習得する",
			domainName: "スキル習得",
			format: R
		},
		recoverHp: {
			desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "HP回復",
			format: L
		},
		recoverMp: {
			desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "MP回復",
			format: L
		},
		removeBuff: {
			desc: "バフを解除する",
			domainName: "バフ解除",
			format: R
		},
		removeDebuff: {
			desc: "デバフを解除する",
			domainName: "デバフ解除",
			format: R
		},
		removeState: {
			desc: "指定したステートを付加します。",
			domainName: "ステート付加",
			format: ad
		},
		special: {
			desc: "特殊効果",
			domainName: "特殊効果",
			format: R
		},
		addState: {
			desc: "状態異常を解除する",
			domainName: "ステート解除",
			format: ad
		},
		commonEvent: {
			desc: "コモンイベントを実行する",
			domainName: "コモンイベント",
			format: R
		}
	}
}, cd = 0, ld = (e, t, n) => {
	let r = n.find(((e) => e.id === t.dataId)), i = r ? r.name : "Unknown Item";
	return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", i);
}, ud = {
	title: "アイテム",
	options: { consumable: "消耗品" }
}, dd = {
	title: "スキル",
	options: {
		requiredWeaponTypeId1: "必要武器タイプ1",
		requiredWeaponTypeId2: "必要武器タイプ2",
		mpCost: "MP消費",
		tpCost: "TP消費"
	}
}, fd = {
	title: "",
	options: {
		scope: "範囲",
		speed: "速度補正",
		successRate: "成功率"
	}
}, pd = 1, md = 2, hd = 3, gd = 4, _d = 5, vd = 6, yd = (e) => e.damage.type === 1 || e.damage.type === 5 || e.damage.type === 3, bd = (e) => e.damage.type === 2 || e.damage.type === 6 || e.damage.type === 4, xd = (e) => e.damage.type === 1 || e.damage.type === 2, Sd = (e) => e.damage.type === 3 || e.damage.type === 4, Cd = (e) => e.damage.type === 5 || e.damage.type === 6, wd = (e) => e.damage.type === 3, Td = (e) => e.damage.type === 4, Ed = (e) => e.damage.type === 3, Dd = (e) => e.damage.type === 4, Od = (e = {}) => ({
	animationId: e.animationId ?? 0,
	id: e.id ?? 0,
	name: e.name ?? "",
	iconIndex: e.iconIndex ?? 0,
	description: e.description ?? "",
	itypeId: e.itypeId ?? 0,
	note: e.note ?? "",
	consumable: e.consumable ?? !1,
	scope: e.scope ?? 0,
	occasion: e.occasion ?? 0,
	speed: e.speed ?? 0,
	successRate: e.successRate ?? 0,
	repeats: e.repeats ?? 0,
	tpGain: e.tpGain ?? 0,
	hitType: e.hitType ?? 0,
	damage: F(e.damage ?? {}),
	effects: [],
	price: 0
}), kd = 1, Ad = 2, jd = 3, Md = 4, Nd = 5, Pd = 6, Fd = 7, Id = 8, Ld = 9, Rd = 10, zd = 11, Bd = 12, Vd = 13, Hd = 14, Ud = (e) => e.scope === 11, Wd = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12 || e === 3 || e === 11, Gd = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12, Kd = ({ scope: e }) => e === 1 || e === 2 || e === 3 || e === 4 || e === 5 || e === 6 || e === 14, qd = ({ scope: e }) => e === 7 || e === 8 || e === 9 || e === 10 || e === 12 || e === 13 || e === 14 || e === 11, Jd = ({ scope: e }) => e === 9 || e === 10, Yd = ({ scope: e }) => e === 7 || e === 8 || e === 14 || e === 11, Xd = ({ scope: e }) => e === 14, Zd = ({ scope: e }) => e === 3 || e === 4 || e === 5 || e === 6, Qd = (e) => Zd(e) ? e.scope - 2 : 0, $d = (e = {}) => ({
	stypeId: e.stypeId ?? 0,
	requiredWtypeId1: e.requiredWtypeId1 ?? 0,
	requiredWtypeId2: e.requiredWtypeId2 ?? 0,
	animationId: e.animationId ?? 0,
	damage: F(e.damage ?? {}),
	description: e.description ?? "",
	effects: [],
	hitType: e.hitType ?? 0,
	iconIndex: e.iconIndex ?? 0,
	id: e.id ?? 0,
	message1: e.message1 ?? "",
	message2: e.message2 ?? "",
	messageType: e.messageType ?? 0,
	name: e.name ?? "",
	note: e.note ?? "",
	mpCost: e.mpCost ?? 0,
	occasion: e.occasion ?? 0,
	repeats: e.repeats ?? 0,
	scope: e.scope ?? 0,
	speed: e.speed ?? 0,
	successRate: e.successRate ?? 0,
	tpCost: e.tpCost ?? 0,
	tpGain: e.tpGain ?? 0
}), ef = (e) => e.occasion === 0 || e.occasion === 1, tf = (e) => e.occasion === 0 || e.occasion === 2, nf = 0, rf = 1, af = 2, of = (e) => e.hitType === 0, sf = (e) => e.hitType === 1, cf = (e) => e.hitType === 2, lf = (e) => jo({
	battlerName: e.image,
	characterName: e.image,
	faceName: e.image,
	name: e.text,
	profile: e.text,
	nickname: e.text,
	note: e.note
}), uf = (e) => $l({
	name: e.text,
	note: e.note
}), df = (e) => Cu({
	name: e.text,
	note: e.note,
	description: e.text
}), ff = (e) => No({
	name: e.text,
	note: e.note,
	description: e.text
}), pf = (e) => fu({
	name: e.text,
	note: e.note,
	battlerName: e.image
}), mf = (e) => xu({
	name: e.text,
	note: e.note,
	message1: e.text,
	message2: e.text,
	message3: e.text,
	message4: e.text
}), hf = (e) => $d({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text,
	message1: e.text,
	message2: e.text
}), gf = (e) => Od({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text
}), _f = (e, t) => {
	let n = N(e);
	return Math.floor(t.mpCost * n);
}, vf = (e, t, n) => {
	let r = _f(t, n);
	return e.mp >= r && e.tp >= n.tpCost;
}, yf = (e, t) => t.requiredWtypeId1 === 0 && t.requiredWtypeId2 === 0 || e.length !== 0 && e.some(((e) => e.wtypeId === t.requiredWtypeId1 || e.wtypeId === t.requiredWtypeId2)), bf = (e, t) => e.some(((e) => e.code === 42 && e.dataId === t.stypeId || e.code === 44 && e.dataId === t.id)), z = (e) => e.filter(xf), xf = (e) => e.code === 42 || e.code === 23 && e.dataId === 4 || e.code === 44, B = (e, t, n, r) => {
	if (t.tp < n.tpCost) return !1;
	let i = Math.floor(n.mpCost * e);
	return !(t.mp < i) && !bf(r, n);
}, Sf = (e, t, n, r) => {
	let i = e.filter(((e) => yf(n, e)));
	return i.length === 0 ? [] : wf(i, t, r);
}, Cf = (e, t, n, r) => {
	let i = z(t), a = N(i);
	return e.filter(((e) => {
		let t = r(e);
		return !!t && B(a, n, t, i);
	}));
}, wf = (e, t, n) => {
	let r = z(t), i = N(r);
	return e.filter(((e) => B(i, n, e, r)));
}, Tf = (e, t, n) => {
	let r = z(t), i = N(r);
	return e.map(((e) => ({
		skill: e,
		usable: B(i, n, e, r)
	})));
}, Ef = (e, t) => e.some(Df) ? t.filter(Uc) : [], Df = (e) => e.code === 21 && e.value1 === 0, Of = (e, t) => V(e.note, ((n, r) => t(n, r, e))), kf = (e) => V(e, ((e, t) => ({
	key: e,
	value: t
}))), V = (e, t) => Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g), ((e) => t(e[1], e[2]))), H = (e, t = "\n") => [...e.items.map(((e) => `<${e.key}:${e.value}>`)), e.note].join(t).trim(), U = (e) => ({
	note: Af(e),
	items: kf(e)
}), Af = (e) => {
	if (e.length >= 3e4) throw Error("Note text is too long. Please shorten it.");
	return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, jf = (e, t) => `<${e}:${t}>`, Mf = (e, t, n = "\n") => {
	let r = U(e), i = r.items.map(((e) => ({
		key: e.key,
		value: t(e)
	})));
	return H({
		note: r.note,
		items: i
	}, n);
}, Nf = (e, t) => {
	let n = Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).find(((e) => e[1] === t));
	return n ? n[2] : void 0;
}, Pf = (e, t, n) => e.replace(/<([^<>:]{1,100}):([^>]{1,1000})>/g, ((e, r) => r === t ? jf(r, n) : e)), Ff = (e) => Array.from(e.note.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).map(((t) => ({
	key: t[1],
	value: t[2],
	id: e.id,
	name: e.name
}))), If = (e, t, n = "\n") => {
	let r = U(e), i = r.items.reduce(((e, n) => {
		let r = t.isReplaceTargetNote(n), i = r ? {
			key: n.key,
			value: t.replaceText(n.value) ?? n.value
		} : n;
		return e.items.push(i), e.hasTarget = e.hasTarget || r, e;
	}), {
		hasTarget: !1,
		items: []
	});
	return i.hasTarget ? H({
		note: r.note,
		items: i.items
	}, n) : e;
}, Lf = "data", Rf = "actor", zf = "map", Bf = "enemy", Vf = "state", Hf = "skill", Uf = "item", Wf = "weapon", Gf = "armor", Kf = "class", qf = "common_event", Jf = "troop", Yf = (e) => [
	Xf(e.elementRate),
	Zf(e.debuffRate),
	Qf(e.stateRate),
	$f(e.stateResist),
	ep(e.regularParam),
	tp(e.extraParam),
	np(e.specialParam),
	rp(e.attackElement),
	ip(e.attackState),
	ap(e.attackSpeed),
	op(e.attackTimes),
	sp(e.attackSkill),
	cp(e.skillTypeAdd),
	lp(e.skillTypeSeal),
	up(e.skillAdd),
	dp(e.skillSeal),
	fp(e.equipWeaponType),
	pp(e.equipArmorType),
	mp(e.equipLock),
	hp(e.equipSeal),
	gp(e.slotType),
	_p(e.actionPlus),
	vp(e.specialFlag),
	yp(e.collaps),
	bp(e.partyAbility)
], Xf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 11,
	dataSource: xp()
}), Zf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 12,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Qf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 13,
	dataSource: W()
}), $f = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 14,
	dataSource: W()
}), ep = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 21,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), tp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 22,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), np = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 23,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), rp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 31,
	dataSource: xp()
}), ip = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 32,
	dataSource: W()
}), ap = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 33
}), op = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 34
}), sp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 35,
	dataSource: G()
}), cp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 41,
	dataSource: Sp()
}), lp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 42,
	dataSource: Sp()
}), up = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 43,
	dataSource: G()
}), dp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 44,
	dataSource: G()
}), fp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 51,
	dataSource: Cp()
}), pp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 52,
	dataSource: wp()
}), mp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 53,
	dataSource: K()
}), hp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 54,
	dataSource: K()
}), gp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 55,
	dataSource: K()
}), _p = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 61
}), vp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 62,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), yp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 63,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), bp = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 64,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), W = () => ({
	author: "rmmz",
	module: "data",
	kind: "state"
}), G = () => ({
	author: "rmmz",
	module: "data",
	kind: "skill"
}), xp = () => ({
	author: "rmmz",
	module: "system",
	kind: "elements"
}), Sp = () => ({
	author: "rmmz",
	module: "system",
	kind: "skillTypes"
}), Cp = () => ({
	author: "rmmz",
	module: "system",
	kind: "weaponTypes"
}), wp = () => ({
	author: "rmmz",
	module: "system",
	kind: "armorTypes"
}), K = () => ({
	author: "rmmz",
	module: "system",
	kind: "equipTypes"
}), Tp = {
	id: "識別子",
	name: "名前",
	note: "メモ",
	description: "説明",
	iconIndex: "アイコンインデックス",
	occasion: "使用タイミング",
	params: "パラメータ",
	repeats: "繰り返し回数",
	scope: "範囲",
	speed: "速度補正",
	successRate: "成功率",
	animationId: "アニメーションID",
	displayType: "表示タイプ",
	characterIndex: "キャラクターインデックス",
	characterName: "キャラクター名",
	effectName: "効果名",
	faceIndex: "顔グラフィックインデックス",
	faceName: "顔グラフィック名",
	flashTimings: "フラッシュタイミング",
	list: "リスト",
	messageType: "メッセージタイプ",
	offsetX: "オフセットX",
	offsetY: "オフセットY",
	overlay: "オーバーレイ",
	priority: "優先度",
	restriction: "制約",
	rotation: "回転",
	scale: "スケール",
	soundTimings: "サウンドタイミング",
	stepsToRemove: "解除までの歩数",
	type: "タイプ",
	variance: "分散度",
	unknownCode: "不明なコード",
	content: "内容",
	apply: "適用",
	turn: "ターン",
	commonEvent: "コモンイベント",
	normal: "通常",
	dualWield: "二刀流",
	bossCollaps: "ボス崩壊",
	instantCollaps: "即時崩壊",
	noneCollaps: "崩壊なし",
	escape: "逃走"
}, Ep = () => ({
	rpg: {
		damage: Su,
		data: Ao,
		traits: Vc,
		itemEffect: sd
	},
	global: Tp
}), Dp = [
	"$gameVariables",
	"$gameSystem",
	"$gameScreen",
	"$gameTimer",
	"$gameMessage",
	"$gameSwitches",
	"$gameSelfSwitches",
	"$gameActors",
	"$gameParty",
	"$gameTroop",
	"$gameMap",
	"$gamePlayer",
	"$gameTemp"
], Op = [
	"$dataActors",
	"$dataClasses",
	"$dataSkills",
	"$dataItems",
	"$dataEnemies",
	"$dataWeapons",
	"$dataArmors",
	"$dataEnemies",
	"$dataTroops",
	"$dataStates",
	"$dataAnimations",
	"$dataTilesets",
	"$dataCommonEvents"
], kp = [
	"SceneManager",
	"AudioManager",
	"ImageManager",
	"DataManager",
	"PluginManager"
], Ap = ["Math.max", "Math.min"], jp = (e) => q(e, Dp) || q(e, Op) || q(e, kp) || q(e, Ap), q = (e, t) => t.some(((t) => e.includes(t))), Mp = (e = {}) => ({
	gameId: e.gameId ?? 0,
	screenWidth: e.screenWidth ?? 0,
	screenHeight: e.screenHeight ?? 0,
	uiAreaWidth: e.uiAreaWidth ?? 0,
	uiAreaHeight: e.uiAreaHeight ?? 0,
	windowOpacity: e.windowOpacity ?? 0,
	screenScale: e.screenScale ?? 1,
	numberFontFilename: e.numberFontFilename ?? "",
	mainFontFilename: e.mainFontFilename ?? "",
	fallbackFonts: e.fallbackFonts ?? "",
	fontSize: e.fontSize ?? 28,
	picturesUpperLimit: e.picturesUpperLimit ?? 100
}), Np = (e = {}) => [
	t(e.cursor),
	t(e.ok),
	t(e.cancel),
	t(e.buzzer),
	t(e.equip),
	t(e.save),
	t(e.load),
	t(e.battleStart),
	t(e.escape),
	t(e.enemyAttack),
	t(e.enemyDamage),
	t(e.enemyCollapse),
	t(e.bossCollapes1),
	t(e.bossCollapes2),
	t(e.actorDamage),
	t(e.actorCollapse),
	t(e.playRecovery),
	t(e.playMiss),
	t(e.playEvasion),
	t(e.playMagicEvasion),
	t(e.playReflection),
	t(e.shop),
	t(e.useItem),
	t(e.useSkill)
], Pp = (e) => ({
	cursor: e[0],
	ok: e[1],
	cancel: e[2],
	buzzer: e[3],
	equip: e[4],
	save: e[5],
	load: e[6],
	battleStart: e[7],
	escape: e[8],
	enemyAttack: e[9],
	enemyDamage: e[10],
	enemyCollapse: e[11],
	bossCollapes1: e[12],
	bossCollapes2: e[13],
	actorDamage: e[14],
	actorCollapse: e[15],
	playRecovery: e[16],
	playMiss: e[17],
	playEvasion: e[18],
	playMagicEvasion: e[19],
	playReflection: e[20],
	shop: e[21],
	useItem: e[22],
	useSkill: e[23]
}), Fp = (e) => ({
	item: Ip(e),
	skill: Lp(e),
	equip: Rp(e),
	status: zp(e),
	formation: Bp(e),
	save: Vp(e)
}), Ip = (e) => e.menuCommands[0], Lp = (e) => e.menuCommands[1], Rp = (e) => e.menuCommands[2], zp = (e) => e.menuCommands[3], Bp = (e) => e.menuCommands[4], Vp = (e) => e.menuCommands[5], Hp = (e) => e.itemCategories[0], Up = (e) => e.itemCategories[1], Wp = (e) => e.itemCategories[2], Gp = (e) => e.itemCategories[3], Kp = (e = {}) => [
	e.item ?? !0,
	e.weapon ?? !0,
	e.armor ?? !0,
	e.keyItem ?? !0
], qp = (e) => ({
	item: e[0],
	weapon: e[1],
	armor: e[2],
	keyItem: e[3]
}), Jp = (e = {}) => [
	e.item ?? !0,
	e.skill ?? !0,
	e.equip ?? !0,
	e.status ?? !0,
	e.formation ?? !0,
	e.save ?? !0
], Yp = (e) => ({
	item: e[0],
	skill: e[1],
	equip: e[2],
	status: e[3],
	formation: e[4],
	save: e[5]
}), Xp = (e = {}) => ({
	optAutosave: e.optAutosave ?? !0,
	optDisplayTp: e.optDisplayTp ?? !0,
	optDrawTitle: e.optDrawTitle ?? !0,
	optExtraExp: e.optExtraExp ?? !0,
	optFloorDeath: e.optFloorDeath ?? !0,
	optFollowers: e.optFollowers ?? !0,
	optKeyItemsNumber: e.optKeyItemsNumber ?? !0,
	optSideView: e.optSideView ?? !0,
	optSlipDeath: e.optSlipDeath ?? !0,
	optTransparent: e.optTransparent ?? !0,
	optMessageSkip: e.optMessageSkip ?? !0,
	optSplashScreen: e.optSplashScreen ?? !0
}), Zp = (e = {}) => ({
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0,
	partyMembers: e.partyMembers ? Array.from(e.partyMembers) : [1]
}), J = (e, t) => ({
	name: e,
	id: t
}), Qp = (e) => e.variables.map(J), $p = (e) => e.elements.map(J), em = (e) => e.equipTypes.map(J), tm = (e) => e.skillTypes.map(J), nm = (e) => e.weaponTypes.map(J), rm = (e) => e.armorTypes.map(J), im = (e) => e.switches.map(J), am = (e, t) => [
	sm(e, t),
	cm(e, t),
	fm(e, t),
	lm(e, t),
	om(e, t),
	um(e, t),
	dm(e, t)
], om = (e, t) => ({
	items: rm(e),
	label: t.options.armorTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "armorTypes"
	}
}), sm = (e, t) => ({
	items: $p(e),
	label: t.options.elements,
	source: {
		author: "rmmz",
		module: "system",
		kind: "elements"
	}
}), cm = (e, t) => ({
	items: em(e),
	label: t.options.equipTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "equipTypes"
	}
}), lm = (e, t) => ({
	items: tm(e),
	label: t.options.skillTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "skillTypes"
	}
}), um = (e, t) => ({
	items: Qp(e),
	label: t.options.variables,
	source: {
		author: "rmmz",
		module: "system",
		kind: "variable"
	}
}), dm = (e, t) => ({
	items: im(e),
	label: t.options.switches,
	source: {
		author: "rmmz",
		module: "system",
		kind: "switch"
	}
}), fm = (e, t) => ({
	items: nm(e),
	label: t.options.weaponTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "weaponTypes"
	}
}), pm = (e) => ({
	armorTypes: Y(e.armorTypes),
	elements: Y(e.elements),
	equipTypes: Y(e.equipTypes),
	weaponTypes: Y(e.weaponTypes),
	skillTypes: Y(e.skillTypes),
	variables: Y(e.variables),
	switches: Y(e.switches)
}), Y = (e) => e ? [...e] : [], X = (e, t) => typeof e == "string" ? e : t, mm = (e) => ({
	actionFailure: X(e.actionFailure, "Action failed."),
	actorDamage: X(e.actorDamage, "%1 took %2 damage."),
	actorRecovery: X(e.actorRecovery, "%1 recovered %2 HP."),
	actorGain: X(e.actorGain, "%1 gained %2."),
	actorLoss: X(e.actorLoss, "%1 lost %2."),
	actorDrain: X(e.actorDrain, "%1 drained %2 HP."),
	actorNoDamage: X(e.actorNoDamage, "%1 was not damaged."),
	actorNoHit: X(e.actorNoHit, "%1 was not hit."),
	alwaysDash: X(e.alwaysDash, "Always dash."),
	bgmVolume: X(e.bgmVolume, "BGM volume"),
	bgsVolume: X(e.bgsVolume, "BGS volume"),
	commandRemember: X(e.commandRemember, "Command remember."),
	criticalToActor: X(e.criticalToActor, "%1 dealt %2 damage to %3."),
	criticalToEnemy: X(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
	counterAttack: X(e.counterAttack, "%1 countered!"),
	debuffAdd: X(e.debuffAdd, "%1's %2 was lowered."),
	defeat: X(e.defeat, "Defeat."),
	enemyDamage: X(e.enemyDamage, "%1 took %2 damage."),
	enemyDrain: X(e.enemyDrain, "%1 drained %2 HP."),
	enemyGain: X(e.enemyGain, "%1 gained %2."),
	enemyLoss: X(e.enemyLoss, "%1 lost %2."),
	enemyNoDamage: X(e.enemyNoDamage, "%1 was not damaged."),
	enemyNoHit: X(e.enemyNoHit, "%1 was not hit."),
	enemyRecovery: X(e.enemyRecovery, "%1 recovered %2 HP."),
	evasion: X(e.evasion, "%1 evaded the attack!"),
	autosave: X(e.autosave, "Autosave"),
	escapeFailure: X(e.escapeFailure, "Escape failed."),
	escapeStart: X(e.escapeStart, "%1 started to escape!"),
	emerge: X(e.emerge, "%1 appeared!"),
	expNext: X(e.expNext, "Next level in %1 EXP."),
	expTotal: X(e.expTotal, "Total EXP: %1"),
	file: X(e.file, "File"),
	buffAdd: X(e.buffAdd, "%1's %2 was raised."),
	buffRemove: X(e.buffRemove, "%1's %2 was lowered."),
	obtainExp: X(e.obtainExp, "%1 EXP obtained."),
	obtainGold: X(e.obtainGold, "%1 gold obtained."),
	obtainItem: X(e.obtainItem, "%1 obtained %2."),
	obtainSkill: X(e.obtainSkill, "%1 learned %2."),
	levelUp: X(e.levelUp, "%1 leveled up!"),
	partyName: X(e.partyName, "Party"),
	loadMessage: X(e.loadMessage, "Load %1?"),
	meVolume: X(e.meVolume, "ME volume"),
	possession: X(e.possession, "Possession"),
	preemptive: X(e.preemptive, "%1 attacked first!"),
	saveMessage: X(e.saveMessage, "Save %1?"),
	seVolume: X(e.seVolume, "SE volume"),
	magicEvasion: X(e.magicEvasion, "%1 evaded the magic!"),
	magicReflection: X(e.magicReflection, "%1 reflected the magic!"),
	substitute: X(e.substitute, "%1 took the hit!"),
	surprise: X(e.surprise, "%1 surprised the enemy!"),
	touchUI: X(e.touchUI, "Touch UI"),
	useItem: X(e.useItem, "%1 used %2."),
	victory: X(e.victory, "Victory!")
}), hm = (e) => ({
	actionFailure: e.actionFailure,
	actorDamage: e.actorDamage,
	actorRecovery: e.actorRecovery,
	actorGain: e.actorGain,
	actorLoss: e.actorLoss,
	actorDrain: e.actorDrain,
	actorNoDamage: e.actorNoDamage,
	actorNoHit: e.actorNoHit,
	alwaysDash: e.alwaysDash,
	bgmVolume: e.bgmVolume,
	bgsVolume: e.bgsVolume,
	commandRemember: e.commandRemember,
	criticalToActor: e.criticalToActor,
	criticalToEnemy: e.criticalToEnemy,
	counterAttack: e.counterAttack,
	debuffAdd: e.debuffAdd,
	defeat: e.defeat,
	enemyDamage: e.enemyDamage,
	enemyDrain: e.enemyDrain,
	enemyGain: e.enemyGain,
	enemyLoss: e.enemyLoss,
	enemyNoDamage: e.enemyNoDamage,
	enemyNoHit: e.enemyNoHit,
	enemyRecovery: e.enemyRecovery,
	evasion: e.evasion,
	escapeFailure: e.escapeFailure,
	escapeStart: e.escapeStart,
	emerge: e.emerge,
	expNext: e.expNext,
	expTotal: e.expTotal,
	file: e.file,
	buffAdd: e.buffAdd,
	buffRemove: e.buffRemove,
	obtainExp: e.obtainExp,
	obtainGold: e.obtainGold,
	obtainItem: e.obtainItem,
	obtainSkill: e.obtainSkill,
	levelUp: e.levelUp,
	partyName: e.partyName,
	loadMessage: e.loadMessage,
	meVolume: e.meVolume,
	possession: e.possession,
	magicEvasion: e.magicEvasion,
	magicReflection: e.magicReflection,
	substitute: e.substitute,
	surprise: e.surprise,
	useItem: e.useItem,
	victory: e.victory,
	preemptive: e.preemptive,
	saveMessage: e.saveMessage,
	seVolume: e.seVolume
}), gm = (e) => e.terms.params.map(((e, t) => ({
	name: e,
	id: t
}))), _m = (e) => [
	e.mhp ?? "",
	e.mmp ?? "",
	e.atk ?? "",
	e.def ?? "",
	e.mat ?? "",
	e.mdf ?? "",
	e.agi ?? "",
	e.luk ?? "",
	e.hit ?? "",
	e.eva ?? ""
], vm = (e) => ({
	mhp: e[0],
	mmp: e[1],
	atk: e[2],
	def: e[3],
	mat: e[4],
	mdf: e[5],
	agi: e[6],
	luk: e[7],
	hit: e[8],
	eva: e[9]
}), ym = (e) => [
	e.level ?? "Level",
	e.levelA ?? "Level",
	e.hp ?? "HP",
	e.hpA ?? "HP",
	e.mp ?? "MP",
	e.mpA ?? "MP",
	e.tp ?? "TP",
	e.tpA ?? "TP",
	e.experience ?? "EXP",
	e.exp ?? "EXP"
], bm = (e) => ({
	level: e[0],
	levelA: e[1],
	hp: e[2],
	hpA: e[3],
	mp: e[4],
	mpA: e[5],
	tp: e[6],
	tpA: e[7],
	experience: e[8],
	exp: e[9]
}), xm = (e) => Sm(e, ""), Sm = (e, t) => [
	e.fight ?? "Fight",
	e.escape ?? "Escape",
	e.attack ?? "Attack",
	e.guard ?? "Guard",
	e.item ?? "Item",
	e.skill ?? "Skill",
	e.equip ?? "Equip",
	e.status ?? "Status",
	e.formation ?? "Formation",
	e.save ?? "Save",
	e.gameEnd ?? "Game End",
	e.options ?? "Options",
	e.weapon ?? "Weapon",
	e.armor ?? "Armor",
	e.keyItem ?? "Key Item",
	e.equip2 ?? "Equip2",
	e.optimize ?? "Optimize",
	e.clear ?? "Clear",
	e.newGame ?? "New Game",
	e.continueGame ?? "Continue",
	t,
	e.toTitle ?? "To Title",
	e.cancel ?? "Cancel",
	t,
	e.buy ?? "Buy",
	e.sell ?? "Sell"
], Cm = (e) => ({
	fight: e[0],
	escape: e[1],
	attack: e[2],
	guard: e[3],
	item: e[4],
	skill: e[5],
	equip: e[6],
	status: e[7],
	formation: e[8],
	save: e[9],
	gameEnd: e[10],
	options: e[11],
	weapon: e[12],
	armor: e[13],
	keyItem: e[14],
	equip2: e[15],
	optimize: e[16],
	clear: e[17],
	newGame: e[18],
	continueGame: e[19],
	toTitle: e[21],
	cancel: e[22],
	buy: e[24],
	sell: e[25]
}), wm = (e) => ({
	background: e.background ?? 0,
	offsetX: e.offsetX ?? 0,
	offsetY: e.offsetY ?? 0
}), Z = (e = {}) => ({
	characterIndex: e.characterIndex ?? 0,
	characterName: e.characterName ?? "",
	bgm: t(e.bgm ?? {}),
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0
}), Tm = (e = {}) => ({
	jsonFormatLevel: e.jsonFormatLevel ?? 0,
	messageWidth1: e.messageWidth1 ?? 816,
	messageWidth2: e.messageWidth2 ?? 816
}), Em = (e) => ({
	gameTitle: e.texts?.gameTitle ?? "",
	currencyUnit: e.texts?.currencyUnit ?? "",
	armorTypes: $(e.dataNames?.armorTypes),
	equipTypes: $(e.dataNames?.equipTypes),
	elements: $(e.dataNames?.elements),
	skillTypes: $(e.dataNames?.skillTypes),
	weaponTypes: $(e.dataNames?.weaponTypes),
	switches: $(e.dataNames?.switches),
	variables: $(e.dataNames?.variables),
	terms: Dm(e.terms ?? {})
}), Q = (e) => {
	let n = Om(e.size);
	return {
		...Xp(e.options),
		titleCommandWindow: wm(e.titleCommandWindow ?? {}),
		currencyUnit: e.texts?.currencyUnit ?? "",
		gameTitle: e.texts?.gameTitle ?? "",
		sounds: Np(e.sounds),
		editor: Tm(e.editing),
		advanced: Mp(e.advanced),
		title1Name: e.images?.title1Name ?? "",
		title2Name: e.images?.title2Name ?? "",
		armorTypes: $(e.dataNames?.armorTypes),
		equipTypes: $(e.dataNames?.equipTypes),
		elements: $(e.dataNames?.elements),
		skillTypes: $(e.dataNames?.skillTypes),
		weaponTypes: $(e.dataNames?.weaponTypes),
		switches: $(e.dataNames?.switches),
		variables: $(e.dataNames?.variables),
		magicSkills: $(e.battle?.magicSkills),
		battleSystem: e.battle?.battleSystem ?? 0,
		airship: Z(e.vehicles?.airship),
		boat: Z(e.vehicles?.boat),
		ship: Z(e.vehicles?.ship),
		defeatMe: t(e.me?.defeatMe),
		gameoverMe: t(e.me?.gameoverMe),
		titleBgm: t(e.bgm?.titleBgm),
		tileSize: n.tileSize,
		faceSize: n.faceSize,
		iconSize: n.iconSize,
		versionId: e.versionId ?? 1,
		attackMotions: e.attackMotion ? [...e.attackMotion] : [],
		battleback1Name: e.battleTest?.battleback1Name ?? "",
		battleback2Name: e.battleTest?.battleback2Name ?? "",
		testTroopId: e.battleTest?.testTroopId ?? 0,
		testBattlers: km(e.battleTest?.testBattlers, Am),
		battleBgm: t(e.bgm?.battleBgm),
		victoryMe: t(e.me?.victoryMe),
		editMapId: e.editorTemporary?.editMapId ?? 0,
		battlerName: e.editorTemporary?.battlerName ?? "",
		locale: e.locale ?? "en-US",
		startMapId: e.gameInit?.startMapId ?? 0,
		startX: e.gameInit?.startX ?? 0,
		startY: e.gameInit?.startY ?? 0,
		windowTone: [
			0,
			0,
			0,
			0
		],
		terms: Dm(e.terms ?? {}),
		itemCategories: Kp(e.itemCategories),
		partyMembers: $(e.gameInit?.partyMembers),
		battlerHue: 0,
		menuCommands: Jp(e.menuCommands)
	};
}, Dm = (e) => ({
	basic: ym(e.basic ?? {}),
	commands: xm(e.commands ?? {}),
	params: _m(e.params ?? {}),
	messages: mm(e.messages ?? {})
}), $ = (e) => e ? [...e] : [], Om = (e) => e ? {
	tileSize: e.tileSize ?? 48,
	faceSize: e.faceSize ?? 144,
	iconSize: e.iconSize ?? 32
} : {
	tileSize: 48,
	faceSize: 144,
	iconSize: 32
}, km = (e, t) => e ? e.map(t) : [], Am = (e) => e ? {
	actorId: e.actorId,
	equips: $(e.equips),
	level: e.level
} : {
	actorId: 0,
	equips: [],
	level: 1
}, jm = {
	title: "オプション",
	options: {
		optDrawTitle: "ゲームタイトルの描画",
		optDisplayTp: "ウィンドウにTPを表示",
		optFloorDeath: "床ダメージで戦闘不能",
		optSlipDeath: "スリップダメージで戦闘不能",
		optAutosave: "オートセーブを有効化",
		optExtraExp: "控えメンバーも経験値を獲得",
		optFollowers: "隊列歩行",
		optSideView: "戦闘をサイドビューにする",
		optKeyItemsNumber: "大事なものの個数を表示",
		optTransparent: "透明状態で開始",
		optMessageSkip: "メッセージスキップを有効化",
		optSplashScreen: "スプラッシュ画面を表示"
	}
}, Mm = {
	title: "タイプ",
	format: "{name}",
	options: {
		elements: "属性",
		equipTypes: "装備タイプ",
		skillTypes: "スキルタイプ",
		weaponTypes: "武器タイプ",
		armorTypes: "防具タイプ",
		switches: "スイッチ",
		variables: "変数"
	}
}, Nm = {
	title: "能力値",
	options: {
		agi: "敏捷",
		atk: "攻撃力",
		def: "防御力",
		eva: "回避",
		hit: "命中",
		luk: "運",
		mat: "魔法攻撃力",
		mdf: "魔法防御力",
		mhp: "最大HP",
		mmp: "最大MP"
	}
}, Pm = {
	title: "コマンド",
	options: {
		item: "アイテム",
		skill: "スキル",
		equip: "装備",
		status: "ステータス",
		formation: "編成",
		options: "オプション",
		save: "セーブ",
		gameEnd: "ゲーム終了",
		armor: "防具",
		weapon: "武器",
		newGame: "ニューゲーム",
		attack: "攻撃",
		guard: "防御",
		escape: "逃げる",
		fight: "戦う",
		buy: "買う",
		sell: "売る",
		cancel: "キャンセル",
		clear: "クリア",
		continueGame: "続きから",
		equip2: "装備2",
		keyItem: "大事なもの",
		optimize: "最強装備",
		toTitle: "タイトルへ戻る"
	}
}, Fm = (e, t) => {
	let n = (e) => t(e) ?? e;
	return {
		gameTitle: n(e.gameTitle),
		currencyUnit: n(e.currencyUnit),
		equipTypes: e.equipTypes.map(n),
		armorTypes: e.armorTypes.map(n),
		weaponTypes: e.weaponTypes.map(n),
		elements: e.elements.map(n),
		skillTypes: e.skillTypes.map(n),
		terms: {
			messages: Vm(e.terms.messages, n),
			basic: Im(e.terms.basic, n),
			params: Lm(e.terms.params, n),
			commands: Rm(e.terms.commands, n)
		}
	};
}, Im = (e, t) => ({
	level: t(e.level),
	levelA: t(e.levelA),
	hp: t(e.hp),
	hpA: t(e.hpA),
	mp: t(e.mp),
	mpA: t(e.mpA),
	tp: t(e.tp),
	tpA: t(e.tpA),
	experience: t(e.experience),
	exp: t(e.exp)
}), Lm = (e, t) => ({
	mhp: t(e.mhp),
	mmp: t(e.mmp),
	atk: t(e.atk),
	def: t(e.def),
	mat: t(e.mat),
	mdf: t(e.mdf),
	agi: t(e.agi),
	luk: t(e.luk),
	hit: t(e.hit),
	eva: t(e.eva)
}), Rm = (e, t) => ({
	item: t(e.item),
	skill: t(e.skill),
	equip: t(e.equip),
	status: t(e.status),
	formation: t(e.formation),
	save: t(e.save),
	gameEnd: t(e.gameEnd),
	options: t(e.options),
	weapon: t(e.weapon),
	armor: t(e.armor),
	keyItem: t(e.keyItem),
	equip2: t(e.equip2),
	optimize: t(e.optimize),
	clear: t(e.clear),
	newGame: t(e.newGame),
	continueGame: t(e.continueGame),
	toTitle: t(e.toTitle),
	cancel: t(e.cancel),
	buy: t(e.buy),
	sell: t(e.sell),
	attack: t(e.attack),
	guard: t(e.guard),
	escape: t(e.escape),
	fight: t(e.fight)
}), zm = (e) => ({
	gameTitle: e.gameTitle,
	currencyUnit: e.currencyUnit,
	equipTypes: [...e.equipTypes],
	armorTypes: [...e.armorTypes],
	weaponTypes: [...e.weaponTypes],
	elements: [...e.elements],
	skillTypes: [...e.skillTypes],
	terms: {
		basic: bm(e.terms.basic),
		commands: Cm(e.terms.commands),
		messages: mm(e.terms.messages),
		params: vm(e.terms.params)
	}
}), Bm = (e, t) => Q({
	locale: e.locale,
	versionId: e.versionId,
	options: e,
	advanced: e.advanced,
	vehicles: e,
	editing: e.editor,
	sounds: Pp(e.sounds),
	images: {
		title1Name: e.title1Name,
		title2Name: e.title2Name
	},
	bgm: {
		titleBgm: e.titleBgm,
		battleBgm: e.battleBgm
	},
	me: {
		defeatMe: e.defeatMe,
		gameoverMe: e.gameoverMe,
		victoryMe: e.victoryMe
	},
	texts: {
		gameTitle: t.gameTitle,
		currencyUnit: t.currencyUnit
	},
	dataNames: {
		variables: e.variables,
		switches: e.switches,
		armorTypes: t.armorTypes,
		elements: t.elements,
		equipTypes: t.equipTypes,
		weaponTypes: t.weaponTypes,
		skillTypes: t.skillTypes
	},
	terms: {
		basic: t.terms.basic,
		commands: t.terms.commands,
		messages: t.terms.messages,
		params: t.terms.params
	},
	itemCategories: qp(e.itemCategories),
	menuCommands: Yp(e.menuCommands),
	titleCommandWindow: e.titleCommandWindow,
	size: {
		tileSize: e.tileSize,
		faceSize: e.faceSize,
		iconSize: e.iconSize
	},
	gameInit: {
		startMapId: e.startMapId,
		startX: e.startX,
		startY: e.startY,
		partyMembers: e.partyMembers
	},
	editorTemporary: {
		editMapId: e.editMapId,
		battlerName: e.battlerName
	},
	attackMotion: e.attackMotions,
	battle: {
		battleSystem: e.battleSystem,
		magicSkills: e.magicSkills
	},
	battleTest: {
		battleback1Name: e.battleback1Name,
		battleback2Name: e.battleback2Name,
		testBattlers: e.testBattlers,
		testTroopId: e.testTroopId
	}
}), Vm = (e, t) => ({
	actionFailure: t(e.actionFailure),
	actorDamage: t(e.actorDamage),
	actorDrain: t(e.actorDrain),
	actorGain: t(e.actorGain),
	actorLoss: t(e.actorLoss),
	actorNoDamage: t(e.actorNoDamage),
	actorNoHit: t(e.actorNoHit),
	actorRecovery: t(e.actorRecovery),
	alwaysDash: t(e.alwaysDash),
	autosave: t(e.autosave),
	bgmVolume: t(e.bgmVolume),
	bgsVolume: t(e.bgsVolume),
	buffAdd: t(e.buffAdd),
	buffRemove: t(e.buffRemove),
	commandRemember: t(e.commandRemember),
	counterAttack: t(e.counterAttack),
	criticalToActor: t(e.criticalToActor),
	criticalToEnemy: t(e.criticalToEnemy),
	defeat: t(e.defeat),
	debuffAdd: t(e.debuffAdd),
	emerge: t(e.emerge),
	enemyDamage: t(e.enemyDamage),
	enemyDrain: t(e.enemyDrain),
	enemyGain: t(e.enemyGain),
	enemyLoss: t(e.enemyLoss),
	enemyNoDamage: t(e.enemyNoDamage),
	enemyNoHit: t(e.enemyNoHit),
	enemyRecovery: t(e.enemyRecovery),
	escapeFailure: t(e.escapeFailure),
	escapeStart: t(e.escapeStart),
	evasion: t(e.evasion),
	expNext: t(e.expNext),
	expTotal: t(e.expTotal),
	file: t(e.file),
	loadMessage: t(e.loadMessage),
	levelUp: t(e.levelUp),
	magicEvasion: t(e.magicEvasion),
	magicReflection: t(e.magicReflection),
	meVolume: t(e.meVolume),
	obtainExp: t(e.obtainExp),
	obtainGold: t(e.obtainGold),
	obtainItem: t(e.obtainItem),
	obtainSkill: t(e.obtainSkill),
	partyName: t(e.partyName),
	possession: t(e.possession),
	preemptive: t(e.preemptive),
	saveMessage: t(e.saveMessage),
	seVolume: t(e.seVolume),
	substitute: t(e.substitute),
	surprise: t(e.surprise),
	touchUI: t(e.touchUI),
	useItem: t(e.useItem),
	victory: t(e.victory)
}), Hm = (e = Q({})) => ({
	versionId: e.versionId,
	menuCommands: e.menuCommands,
	locale: e.locale,
	startMapId: e.startMapId,
	startX: e.startX,
	startY: e.startY,
	partyMembers: e.partyMembers,
	magicSkills: e.magicSkills,
	title1Name: e.title1Name,
	title2Name: e.title2Name,
	gameTitle: e.gameTitle,
	currencyUnit: e.currencyUnit,
	windowTone: e.windowTone,
	battleback1Name: e.battleback1Name,
	battleback2Name: e.battleback2Name,
	testTroopId: e.testTroopId,
	testBattlers: e.testBattlers,
	attackMotions: e.attackMotions,
	battlerHue: e.battlerHue,
	battlerName: e.battlerName,
	airship: e.airship,
	boat: e.boat,
	ship: e.ship,
	defeatMe: e.defeatMe,
	gameoverMe: e.gameoverMe,
	optDisplayTp: e.optDisplayTp,
	optDrawTitle: e.optDrawTitle,
	optExtraExp: e.optExtraExp,
	optFloorDeath: e.optFloorDeath,
	optSideView: e.optSideView,
	optFollowers: e.optFollowers,
	optSlipDeath: e.optSlipDeath,
	optTransparent: e.optTransparent,
	skillTypes: e.skillTypes,
	weaponTypes: e.weaponTypes,
	armorTypes: e.armorTypes,
	elements: e.elements,
	equipTypes: e.equipTypes,
	switches: e.switches,
	variables: e.variables,
	titleBgm: e.titleBgm,
	battleBgm: e.battleBgm,
	victoryMe: e.victoryMe,
	editMapId: e.editMapId,
	sounds: e.sounds,
	terms: {
		basic: e.terms.basic,
		commands: e.terms.commands,
		params: e.terms.params,
		messages: hm(e.terms.messages)
	}
}), Um = (e) => Q({
	versionId: e.versionId,
	menuCommands: Fp(e),
	locale: e.locale,
	gameInit: {
		startMapId: e.startMapId,
		startX: e.startX,
		startY: e.startY,
		partyMembers: e.partyMembers
	},
	battle: { magicSkills: e.magicSkills },
	bgm: {
		titleBgm: e.titleBgm,
		battleBgm: e.battleBgm
	},
	options: e,
	vehicles: {
		airship: e.airship,
		boat: e.boat,
		ship: e.ship
	},
	images: {
		title1Name: e.title1Name,
		title2Name: e.title2Name
	},
	me: {
		defeatMe: e.defeatMe,
		gameoverMe: e.gameoverMe,
		victoryMe: e.victoryMe
	},
	battleTest: {
		battleback1Name: e.battleback1Name,
		battleback2Name: e.battleback2Name,
		testTroopId: e.testTroopId,
		testBattlers: e.testBattlers
	},
	attackMotion: e.attackMotions,
	sounds: Pp(e.sounds),
	dataNames: {
		skillTypes: e.skillTypes,
		weaponTypes: e.weaponTypes,
		armorTypes: e.armorTypes,
		elements: e.elements,
		equipTypes: e.equipTypes,
		switches: e.switches,
		variables: e.variables
	},
	texts: {
		currencyUnit: e.currencyUnit,
		gameTitle: e.gameTitle
	},
	editorTemporary: {
		editMapId: e.editMapId,
		battlerName: e.battlerName,
		battlerHue: e.battlerHue
	},
	terms: {
		basic: bm(e.terms.basic),
		commands: Cm(e.terms.commands),
		params: vm(e.terms.params),
		messages: e.terms.messages
	}
}), Wm = ({ audio: e, image: n, systemText: r, switches: i, variables: a }) => Q({
	me: {
		defeatMe: t({
			name: e,
			volume: 90,
			pitch: 100
		}),
		gameoverMe: t({
			name: e,
			volume: 90,
			pitch: 100
		}),
		victoryMe: t({
			name: e,
			volume: 100,
			pitch: 100
		})
	},
	dataNames: {
		armorTypes: [r, r],
		equipTypes: [r, r],
		elements: [r, r],
		skillTypes: [r, r],
		weaponTypes: [r, r],
		switches: [i, i],
		variables: [a, a]
	},
	bgm: {
		titleBgm: t({
			name: e,
			volume: 90,
			pitch: 100
		}),
		battleBgm: t({
			name: e,
			volume: 90,
			pitch: 100
		})
	},
	vehicles: {
		airship: Z({
			bgm: t({
				name: e,
				volume: 90,
				pitch: 100
			}),
			characterName: n
		}),
		boat: Z({
			bgm: t({
				name: e,
				volume: 90,
				pitch: 100
			}),
			characterName: n
		}),
		ship: Z({
			bgm: t({
				name: e,
				volume: 90,
				pitch: 100
			}),
			characterName: n
		})
	},
	images: {
		title1Name: n,
		title2Name: n
	},
	texts: {
		gameTitle: r,
		currencyUnit: r
	},
	terms: Gm(r),
	sounds: Km(e)
}), Gm = (e) => ({
	basic: {
		exp: e,
		experience: e,
		hp: e,
		mp: e,
		hpA: e,
		mpA: e,
		level: e,
		levelA: e,
		tp: e,
		tpA: e
	},
	messages: {
		actionFailure: e,
		actorDamage: e,
		actorDrain: e,
		actorGain: e,
		actorLoss: e,
		actorNoDamage: e,
		actorNoHit: e,
		actorRecovery: e,
		alwaysDash: e,
		autosave: e,
		bgmVolume: e,
		bgsVolume: e,
		buffAdd: e,
		buffRemove: e,
		commandRemember: e,
		criticalToActor: e,
		criticalToEnemy: e,
		counterAttack: e,
		debuffAdd: e,
		defeat: e,
		escapeFailure: e,
		emerge: e,
		evasion: e,
		expNext: e,
		expTotal: e,
		file: e,
		enemyDamage: e,
		enemyDrain: e,
		enemyGain: e,
		enemyLoss: e,
		enemyNoDamage: e,
		enemyNoHit: e,
		enemyRecovery: e,
		escapeStart: e,
		levelUp: e,
		possession: e,
		saveMessage: e,
		loadMessage: e,
		surprise: e,
		victory: e,
		magicEvasion: e,
		magicReflection: e,
		preemptive: e,
		meVolume: e,
		useItem: e,
		obtainExp: e,
		obtainGold: e,
		obtainItem: e,
		obtainSkill: e,
		partyName: e,
		touchUI: e,
		seVolume: e,
		substitute: e
	},
	params: {
		agi: e,
		atk: e,
		def: e,
		mat: e,
		mdf: e,
		luk: e,
		eva: e,
		hit: e,
		mhp: e,
		mmp: e
	},
	commands: {
		armor: e,
		item: e,
		skill: e,
		equip: e,
		status: e,
		formation: e,
		options: e,
		save: e,
		gameEnd: e,
		cancel: e,
		attack: e,
		guard: e,
		buy: e,
		sell: e,
		escape: e,
		clear: e,
		newGame: e,
		toTitle: e,
		continueGame: e,
		equip2: e,
		fight: e,
		keyItem: e,
		optimize: e,
		weapon: e
	}
}), Km = (e) => {
	let n = t({
		name: e,
		volume: 90,
		pitch: 100
	});
	return {
		cursor: n,
		actorCollapse: n,
		actorDamage: n,
		battleStart: n,
		buzzer: n,
		enemyAttack: n,
		bossCollapes1: n,
		bossCollapes2: n,
		enemyCollapse: n,
		enemyDamage: n,
		escape: n,
		playEvasion: n,
		playMagicEvasion: n,
		playMiss: n,
		playRecovery: n,
		save: n,
		shop: n,
		cancel: n,
		useItem: n,
		useSkill: n,
		load: n,
		equip: n,
		ok: n,
		playReflection: n
	};
}, qm = (e) => ({
	...e.text ? { text: e.text } : {},
	...e.desc ? { desc: e.desc } : {}
}), Jm = {
	LEFT: 4,
	UP: 8,
	DOWN: 2,
	RIGHT: 6
}, Ym = (e) => {
	let t = e.split("/");
	return t[t.length - 1];
}, Xm = (e) => e.parameters[4] ?? "";
export { Vp as $, Bs as $a, Di as $c, f as $d, he as $f, Hc as $i, wr as $l, ld as $n, Io as $o, Rl as $r, ja as $s, mf as $t, wn as $u, mm as A, uc as Aa, Ki as Ac, zt as Ad, He as Af, cl as Ai, Jr as Al, Zd as An, gs as Ao, hu as Ar, Za as As, Mf as At, Hn as Au, Zp as B, ec as Ba, Ni as Bc, Dt as Bd, De as Bf, qc as Bi, Fr as Bl, gd as Bn, $o as Bo, su as Br, La as Bs, wf as Bt, Mn as Bu, Cm as C, vc as Ca, ea as Cc, Jt as Cd, Ze as Cf, ml as Ci, Hr as Cl, kd as Cn, vs as Co, Su as Cr, oo as Cs, Vf as Ct, Zn as Cu, vm as D, fc as Da, Ji as Dc, Wt as Dd, Ve as Df, dl as Di, ei as Dl, qd as Dn, as as Do, P as Dr, no as Ds, jf as Dt, Wn as Du, _m as E, _c as Ea, Yi as Ec, Zt as Ed, Ke as Ef, gl as Ei, Xr as El, Xd as En, _s as Eo, vu as Er, eo as Es, If as Et, Jn as Eu, em as F, ac as Fa, Li as Fc, Rt as Fd, Pe as Ff, nl as Fi, Ir as Fl, pd as Fn, Cs as Fo, fu as Fr, Wa as Fs, V as Ft, Ln as Fu, qp as G, Us as Ga, ji as Gc, Et as Gd, Ee as Gf, el as Gi, Dr as Gl, Ed as Gn, Jo as Go, Jl as Gr, Aa as Gs, Tf as Gt, kn as Gu, Jp as H, Gs as Ha, ki as Hc, At as Hd, ke as Hf, Yc as Hi, Ar as Hl, Cd as Hn, Yo as Ho, iu as Hr, Ia as Hs, Sf as Ht, jn as Hu, tm as I, tc as Ia, Ii as Ic, Pt as Id, Re as If, Qc as Ii, Lr as Il, _d as In, rs as Io, au as Ir, Ka as Is, Of as It, p as Iu, Rp as J, Ks as Ja, Si as Jc, xt as Jd, be as Jf, A as Ji, br as Jl, Dd as Jn, Go as Jo, Ul as Jr, Da as Js, ff as Jt, xn as Ju, Fp as K, Hs as Ka, Pi as Kc, Tt as Kd, Ce as Kf, tl as Ki, Er as Kl, bd as Kn, qo as Ko, Xl as Kr, Ma as Ks, _f as Kt, On as Ku, im as L, nc as La, zi as Lc, Ft as Ld, Ie as Lf, rl as Li, jr as Ll, hd as Ln, is as Lo, ou as Lr, Ua as Ls, Ef as Lt, zn as Lu, am as M, rc as Ma, Ui as Mc, Bt as Md, Ne as Mf, ol as Mi, zr as Ml, Gd as Mn, ms as Mo, mu as Mr, Ya as Ms, H as Mt, Bn as Mu, rm as N, ic as Na, Hi as Nc, Lt as Nd, Le as Nf, al as Ni, Br as Nl, Qd as Nn, xs as No, uu as Nr, Xa as Ns, U as Nt, In as Nu, gm as O, lc as Oa, Wi as Oc, Ht as Od, We as Of, ul as Oi, Zr as Ol, Wd as On, Ts as Oo, _u as Or, $a as Os, Nf as Ot, Vn as Ou, $p as P, cc as Pa, Vi as Pc, It as Pd, Fe as Pf, il as Pi, Rr as Pl, Od as Pn, ss as Po, du as Pr, qa as Ps, kf as Pt, Rn as Pu, Gp as Q, Vs as Qa, Ei as Qc, yt as Qd, me as Qf, Wc as Qi, Cr as Ql, ud as Qn, Bo as Qo, Ll as Qr, ka as Qs, hf as Qt, yn as Qu, Qp as R, oc as Ra, Ri as Rc, Mt as Rd, je as Rf, Gc as Ri, Pr as Rl, md as Rn, os as Ro, ru as Rr, Ga as Rs, vf as Rt, Pn as Ru, Sm as S, yc as Sa, aa as Sc, qt as Sd, Xe as Sf, hl as Si, Wr as Sl, Bd as Sn, ts as So, F as Sr, lo as Ss, Hf as St, qn as Su, bm as T, mc as Ta, Zi as Tc, Xt as Td, qe as Tf, pl as Ti, Kr as Tl, Jd as Tn, bs as To, yu as Tr, mo as Ts, Wf as Tt, Xn as Tu, Yp as U, Js as Ua, Ai as Uc, Nt as Ud, we as Uf, Jc as Ui, Or as Ul, yd as Un, Qo as Uo, $l as Ur, za as Us, yf as Ut, Nn as Uu, Xp as V, $s as Va, Fi as Vc, Ot as Vd, Oe as Vf, Kc as Vi, Mr as Vl, xd as Vn, Ko as Vo, lu as Vr, Fa as Vs, Cf as Vt, Fn as Vu, Kp as W, Ws as Wa, Mi as Wc, jt as Wd, Te as Wf, $c as Wi, kr as Wl, wd as Wn, Zo as Wo, eu as Wr, Ra as Ws, bf as Wt, Dn as Wu, Hp as X, Xs as Xa, yi as Xc, St as Xd, ve as Xf, k as Xi, Sr as Xl, fd as Xn, Ho as Xo, Hl as Xr, Na as Xs, pf as Xt, Cn as Xu, Bp as Y, qs as Ya, Ci as Yc, wt as Yd, xe as Yf, D as Yi, xr as Yl, Sd as Yn, Wo as Yo, Yl as Yr, Pa as Ys, uf as Yt, Sn as Yu, Ip as Z, Zs as Za, bi as Zc, bt as Zd, ge as Zf, O as Zi, yr as Zl, dd as Zn, Uo as Zo, Bl as Zr, C as Zs, gf as Zt, vn as Zu, Em as _, Cc as _a, sa as _c, on as _d, d as _f, bl as _i, ai as _l, Nd as _n, us as _o, s as _p, Tu as _r, w as _s, Kf as _t, $n as _u, Um as a, Ic as aa, ba as ac, hn as ad, ct as af, Dl as ai, pi as al, cf as an, Ms as ao, ce as ap, Fu as ar, zo as as, Mp as at, mr as au, wm as b, pc as ba, ta as bc, Kt as bd, et as bf, _l as bi, Yr as bl, Fd as bn, ws as bo, te as bp, wu as br, co as bs, Uf as bt, Qn as bu, zm as c, Mc as ca, va as cc, sn as cd, pt as cf, Ml as ci, ui as cl, tf as cn, Es as co, re as cp, Hu as cr, Mo as cs, Dp as ct, ur as cu, Fm as d, Tc as da, _a as dc, un as dd, it as df, El as di, ni as dl, Id as dn, js as do, ne as dp, Nu as dr, vo as ds, Ep as dt, sr as du, Vc as ea, wa as ec, Tn as ed, vt as ef, zl as ei, Oi as el, df as en, Ls as eo, ye as ep, cd as er, Lo as es, Lp as et, vr as eu, jm as f, Ec as fa, pa as fc, en as fd, ot as ff, Tl as fi, ri as fl, Rd as fn, Ps as fo, ie as fp, zu as fr, _o as fs, Tp as ft, ir as fu, Q as g, wc as ga, oa as gc, an as gd, Je as gf, N as gi, ii as gl, Md as gn, fs as go, ee as gp, Du as gr, po as gs, Gf as gt, nr as gu, Pm as h, Sc as ha, ca as hc, rn as hd, nt as hf, Cl as hi, ci as hl, jd as hn, cs as ho, r as hp, Vu as hr, fo as hs, Rf as ht, ar as hu, qm as i, Pc as ia, S as ic, mn as id, mt as if, Ol as ii, hi as il, of as in, ks as io, de as ip, Ru as ir, Fo as is, Pp as it, hr as iu, pm as j, sc as ja, qi as jc, Vt as jd, Be as jf, ll as ji, Qr as jl, Ud as jn, ps as jo, pu as jr, Ja as js, Pf as jt, Un as ju, hm as k, dc as ka, Gi as kc, Ut as kd, Ue as kf, sl as ki, qr as kl, Kd as kn, hs as ko, xu as kr, Qa as ks, Ff as kt, Gn as ku, Vm as l, Dc as la, ha as lc, cn as ld, dt as lf, Fl as li, oi as ll, $d as ln, Ns as lo, ae as lp, Uu as lr, Ao as ls, kp as lt, lr as lu, Nm as m, Oc as ma, la as mc, nn as md, rt as mf, vl as mi, di as ml, Ad as mn, Ss as mo, a as mp, Iu as mr, uo as ms, Lf as mt, or as mu, Ym as n, Rc as na, Ca as nc, _n as nd, gt as nf, Al as ni, Ti as nl, af as nn, zs as no, le as np, Gu as nr, Ro as ns, Up as nt, dr as nu, Hm as o, Fc as oa, ya as oc, fn as od, ut as of, Pl as oi, mi as ol, sf as on, Os as oo, fe as op, Wu as or, No as os, jp as ot, gr as ou, Mm as p, kc as pa, da as pc, tn as pd, at as pf, wl as pi, si as pl, Vd as pn, Fs as po, oe as pp, Bu as pr, go as ps, Yf as pt, rr as pu, Wp as q, Ys as qa, xi as qc, Ct as qd, Se as qf, Uc as qi, Tr as ql, Td as qn, Xo as qo, Wl as qr, Oa as qs, lf as qt, bn as qu, Jm as r, Nc as ra, xa as rc, gn as rd, st as rf, kl as ri, _ as rl, rf as rn, Is as ro, pe as rp, Lu as rr, Po as rs, Np as rt, pr as ru, Wm as s, jc as sa, Sa as sc, dn as sd, ft as sf, jl as si, fi as sl, ef as sn, Ds as so, ue as sp, Pu as sr, jo as ss, Op as st, fr as su, Xm as t, Lc as ta, Ta as tc, pn as td, _t as tf, Nl as ti, wi as tl, nf as tn, Rs as to, _e as tp, sd as tr, Vo as ts, zp as tt, _r as tu, Bm as u, Ac as ua, ma as uc, ln as ud, lt as uf, Il as ui, ti as ul, Hd as un, As as uo, se as up, Mu as ur, bo as us, Ap as ut, cr as uu, Tm as v, xc as va, ra as vc, $t as vd, $e as vf, Sl as vi, li as vl, Pd as vn, ls as vo, o as vp, ju as vr, ro as vs, qf as vt, er as vu, ym as w, hc as wa, Qi as wc, Yt as wd, Qe as wf, M as wi, Gr as wl, Yd as wn, ys as wo, gu as wr, so as ws, Jf as wt, Kn as wu, xm as x, gc as xa, ia as xc, Gt as xd, Ye as xf, xl as xi, Ur as xl, Ld as xn, ns as xo, c as xp, Cu as xr, ao as xs, zf as xt, Yn as xu, Z as y, bc as ya, na as yc, Qt as yd, tt as yf, yl as yi, $r as yl, zd as yn, ds as yo, i as yp, Au as yr, io as ys, Bf as yt, tr as yu, nm as z, Qs as za, Bi as zc, kt as zd, Ae as zf, Xc as zi, Nr as zl, vd as zn, es as zo, cu as zr, Ba as zs, z as zt, An as zu };
