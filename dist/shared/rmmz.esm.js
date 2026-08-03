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
}), l = (e, t = 0) => ({
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
}), ee = (e, t = 0) => ({
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
}), te = (e, t = 0) => ({
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
}), ne = (e, t = 0) => ({
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
}), re = (e, t = 0) => ({
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
}), ie = (e, t = 0) => ({
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
}), ae = (e, t = 0) => ({
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
}), oe = (e, t = 0) => ({
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
}), se = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		e.skillId
	]
}), ce = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		e.skillId
	]
}), le = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		0,
		0,
		e.skillId
	]
}), ue = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		0,
		0,
		1,
		e.skillId
	]
}), de = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		1,
		e.variableId,
		0,
		e.skillId
	]
}), fe = (e, t = 0) => ({
	code: 318,
	indent: t,
	parameters: [
		1,
		e.variableId,
		1,
		e.skillId
	]
}), pe = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		e.actorId,
		0,
		e.stateId
	]
}), me = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		e.actorId,
		1,
		e.stateId
	]
}), he = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		0,
		0,
		e.stateId
	]
}), ge = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		0,
		0,
		1,
		e.stateId
	]
}), _e = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		1,
		e.actorIdVariable,
		0,
		e.stateId
	]
}), ve = (e, t = 0) => ({
	code: 313,
	indent: t,
	parameters: [
		1,
		e.actorIdVariable,
		1,
		e.stateId
	]
}), ye = (e, t = 0) => ({
	code: 321,
	parameters: [
		e.actorId,
		e.classId,
		e.keepExp
	],
	indent: t
}), be = (e, t = 0) => ({
	code: 319,
	parameters: [
		e.actorId,
		e.equipType,
		e.equipId
	],
	indent: t
}), xe = ({ actorId: e = 1, faceIndex: t = 0, faceName: n = "", characterIndex: r = 0, characterName: i = "", battlerName: a = "" } = {}, o = 0) => ({
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
}), Se = (e, t = 0) => ({
	code: 303,
	indent: t,
	parameters: [e.actorId, e.maxLength]
}), Ce = (e = 0) => ({
	code: 314,
	indent: e,
	parameters: [0, 0]
}), we = (e, t = 0) => ({
	code: 314,
	indent: t,
	parameters: [0, e.targetActorId]
}), Te = (e, t = 0) => ({
	code: 314,
	indent: t,
	parameters: [1, e.variableId]
}), Ee = (e, t = 0) => ({
	code: 320,
	parameters: [e.actorId, e.name],
	indent: t
}), De = (e, t = 0) => ({
	code: 324,
	parameters: [e.actorId, e.nickname],
	indent: t
}), Oe = (e, t = 0) => ({
	code: 325,
	parameters: [e.actorId, e.profile],
	indent: t
}), ke = (e, t = 0) => ({
	code: 317,
	indent: t,
	parameters: je(e, 0)
}), Ae = (e, t = 0) => ({
	code: 317,
	indent: t,
	parameters: je(e, 1)
}), je = (e, t) => [
	e.actorId,
	e.paramId,
	t,
	e.value
], u = {
	direct: 0,
	variable: 1
}, Me = (e, t = 0) => ({
	code: 311,
	indent: t,
	parameters: Re(0, e)
}), Ne = (e, t = 0) => ({
	code: 311,
	indent: t,
	parameters: Re(1, e)
}), Pe = (e, t = 0) => ({
	code: 326,
	indent: t,
	parameters: d(0, e)
}), Fe = (e, t = 0) => ({
	code: 326,
	indent: t,
	parameters: d(1, e)
}), Ie = (e, t = 0) => ({
	code: 312,
	indent: t,
	parameters: d(0, e)
}), Le = (e, t = 0) => ({
	code: 312,
	indent: t,
	parameters: d(1, e)
}), d = (e, t) => [
	t.targetType === "variable" ? u.variable : u.direct,
	t.targetType === "each" ? 0 : t.target,
	e,
	u[t.operand.mode],
	t.operand.value
], Re = (e, t) => [
	t.targetType === "variable" ? u.variable : u.direct,
	t.targetType === "each" ? 0 : t.target,
	e,
	u[t.operand.mode],
	t.operand.value,
	t.allowDeath
], ze = (e = {}, t = 0) => ({
	code: 212,
	indent: t,
	parameters: [
		e.characterId ?? 0,
		e.animationId ?? 0,
		e.waiting ?? !1
	]
}), Be = (e, t = 0) => ({
	code: 242,
	indent: t,
	parameters: [e.duration]
}), Ve = (e = 0) => ({
	code: 243,
	indent: e,
	parameters: []
}), He = (e = 0) => ({
	code: 244,
	indent: e,
	parameters: []
}), Ue = (e, t = 0) => ({
	code: 246,
	indent: t,
	parameters: [e.duration]
}), We = {
	132: "bgm",
	133: "me",
	139: "me",
	241: "bgm",
	245: "bgs",
	249: "me",
	250: "se"
}, Ge = (e) => We[e], Ke = ({ audio: e }) => [
	Je(t({ name: e })),
	Ye(t({ name: e })),
	Xe(t({ name: e })),
	Ze(t({ name: e })),
	Qe(t({ name: e })),
	$e(t({ name: e })),
	et(t({ name: e }))
], qe = (e, n) => f(e, t({ name: n })), f = (e, n, r = 0) => ({
	code: e,
	parameters: [t(n)],
	indent: r
}), Je = (e, t = 0) => f(241, e, t), Ye = (e, t = 0) => f(245, e, t), Xe = (e, t = 0) => f(249, e, t), Ze = (e, t = 0) => f(250, e, t), Qe = (e, t = 0) => f(132, e, t), $e = (e, t = 0) => f(133, e, t), et = (e, t = 0) => f(139, e, t), tt = (e, t = 0) => ({
	code: 213,
	indent: t,
	parameters: [
		e.characterId,
		e.balloonId,
		e.waiting
	]
}), nt = (e = {}, t = 0) => ({
	code: 283,
	indent: t,
	parameters: [e.background1 ?? "", e.background2 ?? ""]
}), rt = 0, it = 1, at = 2, ot = (e) => e.parameters[0] === 1, st = ({ troopId: e = 0, canEscape: t = !1, canLose: n = !1 }, r = 0) => ({
	code: 301,
	indent: r,
	parameters: [
		0,
		e,
		t,
		n
	]
}), ct = ({ variableId: e = 0, canEscape: t = !1, canLose: n = !1 }, r = 0) => ({
	code: 301,
	indent: r,
	parameters: [
		1,
		e,
		t,
		n
	]
}), lt = ({ canEscape: e = !1, canLose: t = !1 }, n = 0) => ({
	code: 301,
	indent: n,
	parameters: [
		2,
		0,
		e,
		t
	]
}), ut = (e = 0) => ({
	code: 601,
	indent: e,
	parameters: []
}), dt = (e = 0) => ({
	code: 602,
	indent: e,
	parameters: []
}), ft = (e = 0) => ({
	code: 603,
	indent: e,
	parameters: []
}), pt = (e = 0) => ({
	code: 604,
	indent: e,
	parameters: []
}), mt = {
	plus: 0,
	minus: 1
}, ht = ({ operation: e, time: t }) => ({
	code: 124,
	indent: 0,
	parameters: [mt[e ?? "plus"] ?? 0, t ?? 0]
}), p = (e, t = 0) => ({
	code: 136,
	indent: t,
	parameters: [e]
}), gt = (e = 0) => p(0, e), _t = (e = 0) => p(1, e);
function vt(e, t = 0) {
	return {
		code: 336,
		parameters: [e.enemyId, e.newEnemyId],
		indent: t
	};
}
var yt = (e) => ({
	enemyId: e[0],
	newEnemyId: e[1]
}), bt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		e.enemyIndex,
		0,
		e.stateId
	]
}), xt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		e.enemyIndex,
		1,
		e.stateId
	]
}), St = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		-1,
		0,
		e.stateId
	]
}), Ct = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		-1,
		1,
		e.stateId
	]
}), wt = (e = 0) => ({
	code: 334,
	indent: e,
	parameters: [0]
}), Tt = (e, t = 0) => ({
	code: 334,
	indent: t,
	parameters: [e.enemyIndex]
}), Et = (e, t = 0) => ({
	code: 111,
	indent: t,
	parameters: [
		4,
		e,
		0
	]
}), Dt = ({ actorId: e, name: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		1,
		t
	]
}), Ot = ({ actorId: e, classId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		2,
		t
	]
}), kt = ({ actorId: e, skillId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		3,
		t
	]
}), At = ({ actorId: e, weaponId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		4,
		t
	]
}), jt = ({ actorId: e, armorId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		5,
		t
	]
}), Mt = ({ actorId: e, stateId: t }, n = 0) => ({
	code: 111,
	indent: n,
	parameters: [
		4,
		e,
		6,
		t
	]
}), Nt = ({ comparison: e, operandConstant: t, variableId: n }, r = 0) => ({
	code: 111,
	indent: r,
	parameters: [
		1,
		n,
		0,
		t,
		e
	]
}), Pt = ({ comparison: e, operandVariableId: t, variableId: n }, r = 0) => ({
	code: 111,
	indent: r,
	parameters: [
		1,
		n,
		1,
		t,
		e
	]
}), Ft = (e, t = 0) => ({
	code: 117,
	indent: t,
	parameters: Lt(e ?? {})
}), It = (e) => ({ eventId: e[0] }), Lt = (e) => [e.eventId ?? 0], Rt = (e) => ({
	min: e[0],
	max: e[1],
	value: e[2]
}), zt = (e) => [
	e.min,
	e.max,
	e.value
], Bt = (e, t = 0) => ({
	code: 121,
	indent: t,
	parameters: zt(e)
}), Vt = (e, t = 0) => ({
	code: 103,
	parameters: [e.variableId, e.maxDigits],
	indent: t
}), Ht = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], Ut = (e) => ({
	variableId: e[0],
	maxDigits: e[1]
}), Wt = (e) => e.parameters[3] === 1, Gt = (e) => ({
	operation: e[1],
	itemId: e[0],
	value: e[3],
	operand: e[2]
}), Kt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		e.operation,
		e.operand,
		e.value
	]
}), qt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		0,
		e.value
	]
}), Jt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		1,
		e.variableId
	]
}), Yt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		0,
		e.value
	]
}), Xt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		1,
		e.variableId
	]
}), Zt = (e) => e.parameters[2] === 1, Qt = (e) => e.parameters[0], $t = (e) => ({
	operation: e[1],
	weaponId: e[0],
	value: e[3],
	operand: e[2],
	includesEquip: e[4]
}), en = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		e.operation,
		e.operand,
		e.value,
		e.includesEquip
	]
}), tn = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		0,
		e.value,
		!1
	]
}), nn = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		1,
		e.variableId,
		!1
	]
}), rn = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		0,
		e.value,
		!1
	]
}), an = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		1,
		e.variableId,
		!1
	]
}), on = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		0,
		e.value,
		!1
	]
}), sn = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		1,
		e.variableId,
		!1
	]
}), cn = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		0,
		e.value,
		!1
	]
}), ln = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		1,
		e.variableId,
		!1
	]
}), un = (e, t = 0) => ({
	code: 104,
	parameters: [e.variableId, e.itemType],
	indent: t
}), dn = (e) => ({
	variableId: e[0],
	itemType: e[1]
}), fn = (e, t = 0) => ({
	code: 284,
	indent: t,
	parameters: [
		e.parallaxName,
		e.loopX,
		e.loopY,
		e.sx,
		e.sy
	]
}), pn = (e, t = 0) => ({
	code: 204,
	indent: t,
	parameters: [
		e.direction,
		e.distance,
		e.speed,
		e.waiting
	]
}), mn = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [0]
}), hn = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [1]
}), gn = (e = {}, t = 0) => ({
	code: 282,
	indent: t,
	parameters: [e.tilesetId ?? 0]
}), _n = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		1,
		e.x,
		e.y
	]
}), vn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		0,
		e.x,
		e.y
	]
}), yn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		1,
		e.x,
		e.y
	]
}), bn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		0,
		e.x,
		e.y
	]
}), xn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		1,
		e.x,
		e.y
	]
}), Sn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		0,
		e.x,
		e.y
	]
}), Cn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		Tn[e.layer] ?? 2,
		1,
		e.x,
		e.y
	]
}), wn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		Tn[e.layer] ?? 2,
		0,
		e.x,
		e.y
	]
}), Tn = {
	1: 2,
	2: 3,
	3: 4,
	4: 5
}, En = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		0,
		e.x,
		e.y,
		e.direction
	]
}), Dn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		1,
		e.xVariableId,
		e.yVariableId,
		e.direction
	]
}), On = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		2,
		e.exchangeCharacterId,
		0,
		e.direction
	]
}), kn = (e = 0) => ({
	code: 135,
	parameters: [1],
	indent: e
}), An = (e = 0) => ({
	code: 135,
	parameters: [0],
	indent: e
}), jn = (e = 0) => ({
	code: 134,
	parameters: [1],
	indent: e
}), Mn = (e = 0) => ({
	code: 134,
	parameters: [0],
	indent: e
}), Nn = (e = 0) => ({
	code: 137,
	parameters: [1],
	indent: e
}), Pn = (e = 0) => ({
	code: 137,
	parameters: [0],
	indent: e
}), m = (e) => [e], Fn = (e) => ({ comment: e[0] }), In = (e, t = 0) => ({
	code: 108,
	indent: t,
	parameters: m(e)
}), Ln = (e, t = 0) => ({
	code: 408,
	indent: t,
	parameters: m(e)
}), Rn = (e, t = 0) => e.map(((e, n) => n === 0 ? In(e, t) : Ln(e, t))), zn = (e = {}) => [e?.speed ?? 4, e?.skip ?? !1], Bn = (e) => ({
	speed: e[0],
	skip: e[1]
}), Vn = (e = {}, t = 0) => ({
	code: 105,
	indent: t,
	parameters: zn(e)
}), Hn = (e = "") => [e], Un = (e) => ({ content: e[0] }), Wn = (e = "", t = 0) => ({
	code: 405,
	indent: t ?? 0,
	parameters: Hn(e)
}), Gn = (e, t = 0) => ({
	code: 402,
	indent: t,
	parameters: [e?.index ?? 0, e?.name ?? ""]
}), Kn = (e) => ({
	index: e[0],
	name: e[1]
}), qn = (e) => [e.index ?? 0, e.name ?? ""], Jn = (e) => ({
	choices: e[0],
	cancelType: e[1],
	defaultType: e[2],
	positionType: e[3],
	background: e[4]
}), Yn = (e) => [
	e.choices ?? [],
	e.cancelType ?? 0,
	e.defaultType ?? 0,
	e.positionType ?? 2,
	e.background ?? 0
], Xn = (e, t = 0) => ({
	code: 102,
	indent: t,
	parameters: [
		e?.choices ?? [],
		e?.cancelType ?? 0,
		e?.defaultType ?? 0,
		e?.positionType ?? 2,
		e?.background ?? 0
	]
}), Zn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [
		[...e.parameters[0]],
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Qn = (e, t = 0) => ({
	code: 101,
	indent: t,
	parameters: [
		e?.facename ?? "",
		e?.faceIndex ?? 0,
		e?.background ?? 0,
		e?.positionType ?? 2,
		e?.speakerName ?? ""
	]
}), $n = (e) => ({
	facename: e[0],
	faceIndex: e[1],
	background: e[2],
	positionType: e[3],
	speakerName: e[4] ?? ""
}), er = (e) => [
	e.facename,
	e.faceIndex,
	e.background,
	e.positionType,
	e.speakerName
], tr = (e, t = 0) => ({
	code: 401,
	indent: t,
	parameters: [e]
}), nr = (e, t = 0) => ({
	code: 261,
	indent: t,
	parameters: [e.filename]
}), rr = (e) => ({ filename: e[0] }), ir = ({ args: e = {}, commandName: t, commandTitle: n = "", pluginName: r }, i = 0) => ({
	code: 357,
	indent: i,
	parameters: [
		r,
		t,
		n,
		{ ...e }
	]
}), ar = (e) => ({
	pluginName: e[0],
	commandName: e[1],
	commandTitle: e[2],
	args: { ...e[3] }
}), or = (e, t = 0) => ({
	code: 129,
	parameters: [0, e.actorId],
	indent: t
}), sr = (e, t = 0) => ({
	code: 129,
	parameters: [1, e.actorId],
	indent: t
}), cr = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		0,
		e.value
	],
	indent: t
}), lr = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		0,
		e.value
	],
	indent: t
}), ur = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		1,
		e.variableId
	],
	indent: t
}), dr = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		1,
		e.variableId
	],
	indent: t
}), fr = ({ pictureId: e = 0, origin: t = 0, name: n = "", x: r = 0, y: i = 0, scaleX: a = 100, scaleY: o = 100, opacity: s = 255, blendMode: c = 0 }) => ({
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
}), pr = ({ pictureId: e, origin: t, x: n, y: r, scaleX: i, scaleY: a, opacity: o, blendMode: s, wait: c = !1, easingType: l = 0 }) => ({
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
		l
	]
}), mr = (e, t = 0) => ({
	code: 236,
	indent: t,
	parameters: [
		e.type ?? "none",
		e.power ?? 0,
		e.duration ?? 0,
		e.wait ?? !1
	]
}), hr = (e = 0) => ({
	code: 222,
	indent: e,
	parameters: []
}), gr = (e = 0) => ({
	code: 221,
	indent: e,
	parameters: []
}), _r = (e, t = 0) => ({
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
}), vr = (e, t = 0) => ({
	code: 225,
	indent: t,
	parameters: [
		e.power ?? 5,
		e.speed ?? 5,
		e.duration ?? 60,
		e.wait ?? !1
	]
}), yr = (e, t = 0) => ({
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
}), br = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), xr = (e, t = 0) => ({
	code: 655,
	indent: t,
	parameters: [e]
}), Sr = (e, t = 0) => e.map(((e, n) => n === 0 ? br(e, t) : xr(e, t))), Cr = 1, wr = 0, h = {
	item: 0,
	weapon: 1,
	armors: 2
}, Tr = ({ goods: e, buyOnly: t = !1 }, n = 0) => e.map(((e, r) => {
	let i = +!!((e) => e.customPrice !== void 0 && e.customPrice !== 0)(e);
	return r === 0 ? {
		code: 302,
		indent: n,
		parameters: [
			h[e.itemType] ?? h.item,
			e.id,
			i,
			e.customPrice ?? 0,
			t
		]
	} : {
		code: 605,
		indent: n,
		parameters: [
			h[e.itemType] ?? h.item,
			e.id,
			i,
			e.customPrice ?? 0
		]
	};
})), Er = 0, Dr = 1, Or = 2, kr = 3, Ar = 4, jr = 0, Mr = 1, Nr = 2, Pr = (e) => e.parameters[3] === 1, Fr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Ir(e)
}), Ir = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	1,
	e.variableId
], Lr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 0)
}), Rr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 1)
}), zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 2)
}), Br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 3)
}), Vr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 12)
}), Hr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 4)
}), Ur = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 5)
}), Wr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 6)
}), Gr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 7)
}), Kr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 8)
}), qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 9)
}), Jr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 10)
}), Yr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 11)
}), g = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	3,
	e.actorId,
	t
], Xr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 0)
}), Zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 1)
}), Qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 10)
}), $r = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 2)
}), ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 3)
}), ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 4)
}), ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 5)
}), ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 6)
}), ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 7)
}), ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 8)
}), oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 9)
}), _ = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	4,
	e.enemyIndex,
	t
], si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: ui(e)
}), ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: di(e)
}), li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: fi(e)
}), ui = (e) => [
	e.variableId,
	e.variableId,
	e.operation ?? 0,
	3,
	0,
	e.itemId
], di = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	1,
	e.weaponId
], fi = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	2,
	e.armorId
], v = {
	X: 0,
	Y: 1,
	DIRECTION: 2,
	SCREEN_X: 3,
	SCREEN_Y: 4
}, pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.X)
}), mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.Y)
}), hi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.DIRECTION)
}), gi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.SCREEN_X)
}), _i = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.SCREEN_Y)
}), vi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.X)
}), yi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.Y)
}), bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.DIRECTION)
}), xi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.SCREEN_X)
}), Si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.SCREEN_Y)
}), y = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	5,
	e.charactorId ?? 0,
	t
], Ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 0)
}), wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 4)
}), Ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 5)
}), Ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 6)
}), Di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 7)
}), Oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 8)
}), ki = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 9)
}), b = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	7,
	t
], Ai = (e, t = 0) => ({
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
}), ji = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Fi(e, 0)
}), Mi = (e, t = 0) => ({
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
}), Ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Fi(e, 2)
}), Pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Fi(e, 3)
}), Fi = (e, t) => [
	e.startId,
	e.startId,
	e.operation ?? 0,
	3,
	7,
	t
], Ii = {
	USED_SKILL_ID: 0,
	USED_ITEM_ID: 1,
	ACTION_ACTOR_ID: 2,
	ACTION_ENEMY_INDEX: 3,
	TARGET_ACTOR_ID: 4,
	TARGET_ENEMY_INDEX: 5
}, Li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 0)
}), Ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 1)
}), zi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 2)
}), Bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 3)
}), Vi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 4)
}), Hi = (e, t = 0) => ({
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
], Ui = (e) => e[4], Wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Gi(e)
}), Gi = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	0,
	e.value
], Ki = (e, t) => t(e[4], e[5]), qi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Ji(e)
}), Ji = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	2,
	e.min,
	e.max
], Yi = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), Xi = (e = 0) => ({
	code: 206,
	indent: e,
	parameters: []
}), Zi = (e, t = 0) => ({
	code: 323,
	indent: t,
	parameters: [
		e.vehicleId,
		e.characterImage,
		e.characterIndex
	]
}), Qi = (e, n = 0) => ({
	code: 140,
	indent: n,
	parameters: [e.vheicleId, t(e.bgm)]
}), $i = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		0,
		e.mapId,
		e.x,
		e.y
	]
}), ea = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		1,
		e.variableMapId,
		e.variableX,
		e.variableY
	]
}), ta = 0, na = 1, ra = 2, ia = (e) => e.code === 241 || e.code === 245 || e.code === 249 || e.code === 250 || e.code === 132 || e.code === 133 || e.code === 139, aa = (e) => [...e], oa = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: aa(e.parameters)
}), sa = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", ca = (e) => e.parameters.every(sa), la = (e) => ({
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
}), ua = (e) => {
	let t = e.trim();
	return /^\\[NnVv]\[\d+\]$/.test(t);
}, S = (e, t) => `\\${e}[${t}]`, C = (e, t) => t.map(((t, n) => ({
	text: t,
	controlChar: S(e, n)
}))), da = (e) => C("N", e), fa = (e) => C("V", e), pa = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
	char: e[1],
	id: parseInt(e[2], 10)
}))), ma = (e) => e.map(((e) => ({
	text: e.name,
	controlChar: S("N", e.id)
}))), ha = (e) => e.variables.map(((e, t) => ({
	text: e || "",
	controlChar: S("V", t)
}))).filter(((e) => e.text !== "")), ga = (e) => !!e, _a = (e, t, n) => ({
	data: e,
	eventId: t,
	pageIndex: n
}), va = (e, t, n) => e.list.map(((e) => ({
	data: e,
	eventId: n.id,
	pageIndex: t
}))), w = (e, t) => e.pages.map(((n, r) => t(n, r, e))), ya = (e, t) => e.events.filter(ga).map(((e) => w(e, t))), ba = (e, t) => e.events.filter(ga).flatMap(((e) => w(e, t))), xa = (e, t) => e.map(((e) => w(e, t))), Sa = (e, t) => e.flatMap(((e) => w(e, t))), Ca = (e, t) => e.map(((e) => t(e, 0, e))), wa = (e) => ya(e, va).flat(2), Ta = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	trigger: e.trigger ?? 0,
	list: e.list ?? [],
	switchId: e.switchId ?? 0
}), Ea = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	members: e.members ?? [],
	pages: e.pages ?? []
}), Da = (e) => ({
	span: e.span ?? 0,
	conditions: ka(e.conditions ?? {}),
	list: e.list ?? []
}), Oa = (e = {}) => ({
	enemyId: e.enemyId ?? 0,
	x: e.x ?? 0,
	y: e.y ?? 0,
	hidden: e.hidden ?? !1
}), ka = (e = {}) => ({
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
}), Aa = (e) => e.events.filter(((e) => !!e)), ja = (e, t) => e.events[t] ?? void 0, Ma = (e, t, n) => Aa(e).filter(((e) => e.x === t && e.y === n)), Na = (e, t, n) => Ma(e, t, n)[0]?.id ?? 0, Pa = (e = {}) => ({
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
}), Fa = ({ id: e = 1, name: t = "", pages: n = [], note: r = "", x: i = 0, y: a = 0 } = {}) => ({
	id: e,
	name: t,
	pages: n,
	note: r,
	x: i,
	y: a
}), Ia = ({ characterIndex: e = 0, characterName: t = "", direction: n = 2, pattern: r = 0, tileId: i = 0 } = {}) => ({
	characterIndex: e,
	characterName: t,
	direction: n,
	pattern: r,
	tileId: i
}), La = ({ list: e = [], conditions: t = Pa(), image: n = Ia(), moveFrequency: r = 5, directionFix: i = !1, moveRoute: a = {
	list: [],
	repeat: !1,
	skippable: !1,
	wait: !1
}, priorityType: o = 1, stepAnime: s = !1, through: c = !1, walkAnime: l = !1, moveSpeed: ee = 3, moveType: te = 0, trigger: ne = 0 } = {}) => ({
	walkAnime: l,
	stepAnime: s,
	through: c,
	conditions: t,
	list: e,
	directionFix: i,
	image: n,
	priorityType: o,
	moveFrequency: r,
	moveSpeed: ee,
	moveType: te,
	trigger: ne,
	moveRoute: {
		list: a.list,
		repeat: a.repeat,
		skippable: a.skippable,
		wait: a.wait
	}
}), Ra = (e, t) => ({
	map: t,
	filename: `Map${e.id.toString().padStart(3, "0")}`,
	editingName: e.name
}), za = (e) => Ba({ events: [Fa({ pages: [La({ list: e })] })] }), Ba = (e = {}) => ({
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
}), Va = (e, t) => e + t.weight, Ha = (e, t) => {
	let n = e;
	for (let e of t) if (n -= e.weight, n < 0) return e;
	return null;
}, Ua = (e) => e.scrollType === 2 || e.scrollType === 3, Wa = (e) => e.scrollType === 1 || e.scrollType === 3, Ga = (e, t) => Ua(e) ? to(t, e.width) : t, Ka = (e, t) => Wa(e) ? to(t, e.height) : t, qa = (e, t) => e + (t === 6 ? 1 : t === 4 ? -1 : 0), Ja = (e, t) => e + (t === 2 ? 1 : t === 8 ? -1 : 0), Ya = (e, t, n) => Ga(e, qa(t, n)), Xa = (e, t, n) => Ka(e, Ja(t, n)), Za = (e, t, n) => {
	let r = t - n;
	return Ua(e) && Math.abs(r) > e.width / 2 ? r < 0 ? r + e.width : r - e.width : r;
}, Qa = (e, t, n) => {
	let r = t - n;
	return Wa(e) && Math.abs(r) > e.height / 2 ? r < 0 ? r + e.height : r - e.height : r;
}, $a = (e, t, n, r, i) => Math.abs(Za(e, t, r)) + Math.abs(Qa(e, n, i)), eo = (e, t, n, r) => {
	let i = ((e, t, n) => ((e, t, n) => t >= 0 && n >= 0 && t < e.width && n < e.height)(e, t, n) ? ((e, t, n, r) => {
		let i = e.width, a = e.height;
		return e.data[(r * a + n) * i + t] || 0;
	})(e, t, n, 5) : 0)(e, t, n);
	return ((e, t, n) => {
		let r = e.filter(t);
		if (r.length === 0) return null;
		let i = r.reduce(Va, 0);
		return i <= 0 ? null : Ha(n(i), r);
	})(e.encounterList, ((e) => e.regionSet.includes(i)), r);
}, to = (e, t) => {
	let n = e % t;
	return n >= 0 ? n : n + t;
}, no = (e) => e.toString().padStart(3, "0"), ro = (e = { id: 0 }) => ({
	name: e.name ?? no(e.id),
	id: e.id,
	expanded: e.expanded ?? !1,
	order: e.order ?? 0,
	parentId: e.parentId ?? 0,
	scrollX: e.scrollX ?? 0,
	scrollY: e.scrollY ?? 0
}), io = (e, t) => e.map(((e) => e ? {
	...e,
	pages: ao(e, t)
} : null)), ao = (e, t) => e.pages.map(((e) => ({
	...e,
	list: t(e.list)
}))), oo = (e, t) => [
	so(e.skills, t),
	co(e.actors, t),
	lo(e.states, t),
	uo(e.armors, t),
	fo(e.classes, t),
	po(e.enemies, t),
	mo(e.items, t),
	ho(e.weapons, t),
	go(e.commonEvents, t)
], so = (e, t) => ({
	label: t.skill.title,
	items: e,
	source: {
		author: "rmmz",
		module: "data",
		kind: "skill"
	}
}), co = (e, t) => ({
	items: e,
	label: t.actor.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "actor"
	}
}), lo = (e, t) => ({
	items: e,
	label: t.state.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "state"
	}
}), uo = (e, t) => ({
	items: e,
	label: t.armor.title,
	source: {
		author: "rmmz",
		kind: "armor",
		module: "data"
	}
}), fo = (e, t) => ({
	items: e,
	label: t.class.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "class"
	}
}), po = (e, t) => ({
	items: e,
	label: t.enemy.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "enemy"
	}
}), mo = (e, t) => ({
	items: e,
	label: t.item.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "item"
	}
}), ho = (e, t) => ({
	items: e,
	label: t.weapon.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "weapon"
	}
}), go = (e, t) => ({
	items: e,
	label: t.commonEvent.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "common_event"
	}
}), _o = {
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
}, vo = (e = {}) => ({
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
}), yo = (e) => ({
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
}), bo = (e = {}) => ({
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
}), xo = 0, So = 1, Co = 2, wo = 3, To = 4, Eo = 5, Do = 6, Oo = 7, ko = ({ mhp: e = 0, mmp: t = 0, atk: n = 0, def: r = 0, mat: i = 0, mdf: a = 0, agi: o = 0, luk: s = 0 }) => [
	e,
	t,
	n,
	r,
	i,
	a,
	o,
	s
], Ao = (e) => {
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
}, jo = (e = 0) => ({
	mhp: e,
	mmp: e,
	atk: e,
	def: e,
	mat: e,
	mdf: e,
	agi: e,
	luk: e
}), Mo = 0, No = 1, Po = 2, Fo = 3, Io = 4, Lo = 5, Ro = 6, zo = 7, Bo = 8, Vo = 9, Ho = 11, Uo = 12, Wo = 13, Go = 14, Ko = 21, qo = 22, Jo = 23, Yo = 31, Xo = 32, Zo = 33, Qo = 34, $o = 35, es = 41, ts = 42, ns = 43, rs = 44, is = 51, as = 52, os = 53, ss = 54, cs = 55, ls = 61, us = 62, ds = 63, fs = 64, ps = 0, ms = 1, hs = 2, gs = 3, _s = 4, vs = 5, ys = 6, bs = 7, xs = 8, Ss = 9, Cs = 0, ws = 1, Ts = 2, Es = 3, Ds = (e, t) => ({
	items: Os(e.options, t),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), Os = (e, t) => [
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
], ks = 0, As = 1, js = 2, Ms = 3, Ns = 4, Ps = 5, Fs = 6, Is = 7, Ls = 8, Rs = 9, zs = (e) => ({
	items: Bs(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), Bs = (e) => [
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
], Vs = (e, t) => {
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
}, Hs = 0, Us = 1, Ws = 2, Gs = 3, Ks = 4, qs = 5, Js = 6, Ys = 7, Xs = (e) => ({
	items: Zs(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Zs = (e) => [
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
], Qs = (e, t) => {
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
}, $s = 0, ec = 1, tc = 2, nc = 3, rc = 4, ic = 5, ac = 6, oc = 7, sc = 8, cc = 9, lc = (e) => ({
	items: uc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), uc = (e) => [
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
], dc = (e, t) => {
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
}, fc = 0, pc = 1, mc = 2, hc = 3, gc = 4, _c = 5, vc = (e) => ({
	items: yc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), yc = (e) => [
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
], bc = 0, xc = 1, Sc = 2, Cc = 3, wc = (e) => ({
	items: Tc(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), Tc = (e) => [
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
], T = "{name}", E = "{name} * {value}%", Ec = "{name} + {value}%", Dc = "{value}", Oc = {
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
			format: Ec,
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
			format: Ec
		},
		attackSpeed: {
			title: "攻撃速度補正",
			format: Dc
		},
		attackTimes: {
			title: "攻撃追加回数",
			format: Dc
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
}, kc = (e, t) => [
	Xs(e.regularParam),
	zs(e.extraParam),
	lc(e.specialParam),
	Ds(e.collaps, t),
	wc(e.specialFlag),
	vc(e.partyAbility)
], D = (e, t, n) => e.reduce(((e, r) => r.code === t && r.dataId === n ? e * r.value : e), 1), O = (e, t, n) => e.reduce(((e, r) => r.code === t && r.dataId === n ? e + r.value : e), 0), k = (e, t) => e.reduce(((e, n) => n.code === t ? e + n.value : e), 0), A = (e, t) => e.filter(((e) => e.code === t)).map(((e) => e.dataId)), Ac = (e, t, n) => e.some(((e) => e.code === t && e.dataId === n)), jc = (e) => A(e, 31), Mc = (e) => A(e, 32), Nc = (e, t) => O(e, 32, t), Pc = (e) => k(e, 33), Fc = (e) => Math.max(0, k(e, 34)), Ic = (e) => e.reduce(Lc, 1), Lc = (e, t) => t.code === 35 ? Math.max(e, t.dataId) : e, j = (e, t, n) => e.some(((e) => e.code === t && e.dataId === n)), Rc = (e, t) => j(e, 51, t), zc = (e, t) => j(e, 52, t), Bc = (e, t) => j(e, 53, t), Vc = (e, t) => j(e, 54, t), Hc = (e) => e.some(((e) => e.code === 62 && e.dataId === 3)), Uc = (e) => e.reduce(Wc, 0), Wc = (e, t) => t.code === 63 ? Math.max(e, t.dataId) : e, Gc = (e, t) => D(e, 21, t), Kc = (e, t) => D(e, 23, t), qc = (e, t) => D(e, 11, t), Jc = (e, t) => D(e, 12, t), Yc = (e, t) => D(e, 13, t), Xc = (e) => {
	let t = A(e, 35);
	return t.length > 0 ? Math.max(...t) : 1;
}, Zc = (e) => A(e, 41), Qc = (e, t) => Ac(e, 42, t), $c = (e) => A(e, 43), el = (e, t) => Ac(e, 44, t), tl = (e) => D(e, 23, 0), nl = (e) => D(e, 23, 1), rl = (e) => D(e, 23, 2), il = (e) => D(e, 23, 3), M = (e) => D(e, 23, 4), al = (e) => D(e, 23, 5), ol = (e) => D(e, 23, 6), sl = (e) => D(e, 23, 7), cl = (e) => D(e, 23, 8), ll = (e) => D(e, 23, 9), ul = (e, t) => O(e, 22, t), dl = (e) => O(e, 22, 0), fl = (e) => O(e, 22, 1), pl = (e) => O(e, 22, 2), ml = (e) => O(e, 22, 3), hl = (e) => O(e, 22, 4), gl = (e) => O(e, 22, 5), _l = (e) => O(e, 22, 6), vl = (e) => O(e, 22, 7), yl = (e) => O(e, 22, 8), bl = (e) => O(e, 22, 9), xl = {
	itemMapper: {
		placeHolder: "name",
		dataIdKey: "dataId",
		kindKey: "code"
	},
	placeHolder: { numbers: ["value"] }
}, Sl = (t, r, i) => e(r, i, n(xl), t.pattern, ((e) => e.dataId)), Cl = (e) => e.reduce(wl, jo(1)), wl = (e, t) => t.code === 21 ? t.dataId === 0 ? (e.mhp *= t.value, e) : t.dataId === 1 ? (e.mmp *= t.value, e) : t.dataId === 2 ? (e.atk *= t.value, e) : t.dataId === 3 ? (e.def *= t.value, e) : t.dataId === 4 ? (e.mat *= t.value, e) : t.dataId === 5 ? (e.mdf *= t.value, e) : t.dataId === 6 ? (e.agi *= t.value, e) : (t.dataId === 7 && (e.luk *= t.value), e) : e, Tl = (e, t, n, r, i, a, o) => (El(e, t, n) + i[e]) * Gc(r, e) * kl(e, a, o), El = (e, t, n) => {
	let r = t.params[e];
	return r === void 0 ? 0 : r[Math.max(0, Math.min(n, r.length - 1))];
}, Dl = (e, t, n, r, i, a) => Ol(e, t, r) * Gc(n, e) * kl(e, i, a), Ol = (e, t, n) => Math.max(0, t.params[e] + n[e]), kl = (e, t, n) => t[e] * n.buffRateStep + n.baseBuffRate, Al = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ?? Ml(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), jl = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: e.traits ?? [],
	note: e.note ?? "",
	params: e.params ? Nl(e.params) : Ml(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), Ml = () => [
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0]
], Nl = (e) => {
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
}, Pl = 0, Fl = 1, Il = 2, Ll = 3, Rl = 4, zl = 5, Bl = 6, Vl = (e = {}) => ({
	dataId: e.dataId ?? 0,
	denominator: e.denominator ?? 0,
	kind: e.kind ?? 0
}), Hl = (e = {}) => ({
	conditionParam1: e.conditionParam1 ?? 0,
	conditionParam2: e.conditionParam2 ?? 0,
	conditionType: e.conditionType ?? 0,
	rating: e.rating ?? 0,
	skillId: e.skillId ?? 0
}), Ul = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	battlerHue: e.battlerHue ?? 0,
	dropItems: e.dropItems?.map((() => Vl())) ?? [],
	exp: e.exp ?? 0,
	gold: e.gold ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ? [...e.params] : ko({
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
}), Wl = (e) => ko(Gl(e)), Gl = (e) => e.reduce(((e, t) => (e.mhp += t.params[0], e.mmp += t.params[1], e.atk += t.params[2], e.def += t.params[3], e.mat += t.params[4], e.mdf += t.params[5], e.agi += t.params[6], e.luk += t.params[7], e)), {
	mhp: 0,
	mmp: 0,
	atk: 0,
	def: 0,
	mat: 0,
	mdf: 0,
	agi: 0,
	luk: 0
}), Kl = (e) => e.filter(((e) => e.iconIndex > 0)).map(((e) => e.iconIndex)), ql = (e) => e.every(Jl), Jl = (e) => e.restriction < 4, Yl = (e) => 1 <= e.restriction && e.restriction <= 3, Xl = (e) => e.some(Yl), Zl = (e) => e.reduce(Ql, 0), Ql = (e, t) => Yl(t) ? Math.max(e, t.restriction) : e, $l = (e = {}) => ({
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
}), eu = {
	title: "ダメージ",
	options: {}
}, N = (e = {}) => ({
	type: e.type ?? 0,
	elementId: e.elementId ?? 0,
	formula: e.formula ?? "",
	variance: e.variance ?? 0,
	critical: e.critical ?? !1
}), tu = (e = {}) => ({
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
	damage: N(e.damage ?? {}),
	wtypeId: e.wtypeId ?? 0
}), nu = {
	title: "武器",
	options: { weaponTypeId: "武器タイプID" }
}, ru = (e, t) => su(e, t, iu), iu = (e, t) => t.code === 51 && t.dataId === e.wtypeId, au = (e, t) => su(e, t, ou), ou = (e, t) => t.code === 52 && t.dataId === e.atypeId, su = (e, t, n) => {
	let r = t.find(((t) => t.code === 54 ? t.dataId === e.etypeId : !!n(e, t)));
	return !!r && r.code !== 54 && t.every(((t) => t.code !== 54 || t.dataId !== e.etypeId));
}, cu = (e, t) => {
	let n = new Set(A(e, 51)), r = new Set(A(e, 54));
	return t.filter(((e) => n.has(e.wtypeId) && !r.has(e.etypeId)));
}, lu = (e, t) => {
	let n = new Set(A(e, 52)), r = new Set(A(e, 54));
	return t.filter(((e) => n.has(e.atypeId) && !r.has(e.etypeId)));
}, uu = 0, du = 1, fu = 2, pu = 11, mu = 12, hu = 13, gu = 21, _u = 22, vu = 31, yu = 32, bu = 33, xu = 34, Su = 41, Cu = 42, wu = 43, Tu = 44, Eu = (e) => [
	Ou(e),
	ku(e),
	Au(e),
	ju(e),
	Mu(e),
	Nu(e),
	Pu(e),
	Fu(e),
	Iu(e),
	Du(e),
	Lu(e),
	Ru(e),
	zu(e)
], P = (e, t, n) => ({
	kindId: e,
	label: t.domainName,
	pattern: t.format,
	description: t.desc,
	dataSource: n
}), Du = (e) => P(41, e.special), Ou = (e) => P(11, e.recoverHp), ku = (e) => P(12, e.recoverMp), Au = (e) => P(13, e.gainTp), ju = (e) => P(21, e.addState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), Mu = (e) => P(22, e.removeState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), Nu = (e) => P(31, e.addBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Pu = (e) => P(32, e.addDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Fu = (e) => P(33, e.removeBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Iu = (e) => P(34, e.removeDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Lu = (e) => P(42, e.grow, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Ru = (e) => P(43, e.learnSkill, {
	author: "rmmz",
	module: "data",
	kind: "skill"
}), zu = (e) => P(44, e.commonEvent, {
	author: "rmmz",
	module: "data",
	kind: "common_event"
}), Bu = "{name} {value1}%", F = "{value1}% + {value2}", Vu = "{name} {value1}ターン", I = "{name}", Hu = {
	title: "使用効果",
	options: {
		addBuff: {
			desc: "バフを付与する",
			domainName: "バフ付与",
			format: Vu
		},
		addDebuff: {
			desc: "デバフを付与する",
			domainName: "デバフ付与",
			format: Vu
		},
		gainTp: {
			desc: "TPを指定した量だけ増加させます。",
			domainName: "TP増加",
			format: F
		},
		grow: {
			desc: "成長効果",
			domainName: "成長効果",
			format: "{name} + {value1}"
		},
		learnSkill: {
			desc: "スキルを習得する",
			domainName: "スキル習得",
			format: I
		},
		recoverHp: {
			desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "HP回復",
			format: F
		},
		recoverMp: {
			desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "MP回復",
			format: F
		},
		removeBuff: {
			desc: "バフを解除する",
			domainName: "バフ解除",
			format: I
		},
		removeDebuff: {
			desc: "デバフを解除する",
			domainName: "デバフ解除",
			format: I
		},
		removeState: {
			desc: "指定したステートを付加します。",
			domainName: "ステート付加",
			format: Bu
		},
		special: {
			desc: "特殊効果",
			domainName: "特殊効果",
			format: I
		},
		addState: {
			desc: "状態異常を解除する",
			domainName: "ステート解除",
			format: Bu
		},
		commonEvent: {
			desc: "コモンイベントを実行する",
			domainName: "コモンイベント",
			format: I
		}
	}
}, Uu = 0, Wu = (e, t, n) => {
	let r = n.find(((e) => e.id === t.dataId)), i = r ? r.name : "Unknown Item";
	return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", i);
}, Gu = {
	title: "アイテム",
	options: { consumable: "消耗品" }
}, Ku = {
	title: "スキル",
	options: {
		requiredWeaponTypeId1: "必要武器タイプ1",
		requiredWeaponTypeId2: "必要武器タイプ2",
		mpCost: "MP消費",
		tpCost: "TP消費"
	}
}, qu = {
	title: "",
	options: {
		scope: "範囲",
		speed: "速度補正",
		successRate: "成功率"
	}
}, Ju = (e = {}) => ({
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
	damage: N(e.damage ?? {}),
	effects: [],
	price: 0
}), Yu = 1, Xu = 2, Zu = 3, Qu = 4, $u = 5, ed = 6, td = 7, nd = 8, rd = 9, id = 10, ad = 11, od = 12, sd = 13, cd = 14, ld = (e) => e.scope === 11, ud = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12 || e === 3 || e === 11, dd = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12, fd = ({ scope: e }) => e === 1 || e === 2 || e === 3 || e === 4 || e === 5 || e === 6 || e === 14, pd = ({ scope: e }) => e === 7 || e === 8 || e === 9 || e === 10 || e === 12 || e === 13 || e === 14 || e === 11, md = ({ scope: e }) => e === 9 || e === 10, hd = ({ scope: e }) => e === 7 || e === 8 || e === 14 || e === 11, gd = ({ scope: e }) => e === 14, _d = (e = {}) => ({
	stypeId: e.stypeId ?? 0,
	requiredWtypeId1: e.requiredWtypeId1 ?? 0,
	requiredWtypeId2: e.requiredWtypeId2 ?? 0,
	animationId: e.animationId ?? 0,
	damage: N(e.damage ?? {}),
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
}), vd = (e) => e.occasion === 0 || e.occasion === 1, yd = (e) => e.occasion === 0 || e.occasion === 2, bd = (e) => vo({
	battlerName: e.image,
	characterName: e.image,
	faceName: e.image,
	name: e.text,
	profile: e.text,
	nickname: e.text,
	note: e.note
}), xd = (e) => Al({
	name: e.text,
	note: e.note
}), Sd = (e) => tu({
	name: e.text,
	note: e.note,
	description: e.text
}), Cd = (e) => bo({
	name: e.text,
	note: e.note,
	description: e.text
}), wd = (e) => Ul({
	name: e.text,
	note: e.note,
	battlerName: e.image
}), Td = (e) => $l({
	name: e.text,
	note: e.note,
	message1: e.text,
	message2: e.text,
	message3: e.text,
	message4: e.text
}), Ed = (e) => _d({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text,
	message1: e.text,
	message2: e.text
}), Dd = (e) => Ju({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text
}), Od = (e, t) => {
	let n = M(e);
	return Math.floor(t.mpCost * n);
}, kd = (e, t, n) => {
	let r = Od(t, n);
	return e.mp >= r && e.tp >= n.tpCost;
}, Ad = (e, t) => t.requiredWtypeId1 === 0 && t.requiredWtypeId2 === 0 || e.length !== 0 && e.some(((e) => e.wtypeId === t.requiredWtypeId1 || e.wtypeId === t.requiredWtypeId2)), jd = (e, t) => e.some(((e) => e.code === 42 && e.dataId === t.stypeId || e.code === 44 && e.dataId === t.id)), L = (e) => e.filter(Md), Md = (e) => e.code === 42 || e.code === 23 && e.dataId === 4 || e.code === 44, R = (e, t, n, r) => {
	if (t.tp < n.tpCost) return !1;
	let i = Math.floor(n.mpCost * e);
	return !(t.mp < i) && !jd(r, n);
}, Nd = (e, t, n, r) => {
	let i = e.filter(((e) => Ad(n, e)));
	return i.length === 0 ? [] : Fd(i, t, r);
}, Pd = (e, t, n, r) => {
	let i = L(t), a = M(i);
	return e.filter(((e) => {
		let t = r(e);
		return !!t && R(a, n, t, i);
	}));
}, Fd = (e, t, n) => {
	let r = L(t), i = M(r);
	return e.filter(((e) => R(i, n, e, r)));
}, Id = (e, t, n) => {
	let r = L(t), i = M(r);
	return e.map(((e) => ({
		skill: e,
		usable: R(i, n, e, r)
	})));
}, Ld = (e, t) => z(e.note, ((n, r) => t(n, r, e))), Rd = (e) => z(e, ((e, t) => ({
	key: e,
	value: t
}))), z = (e, t) => Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g), ((e) => t(e[1], e[2]))), B = (e, t = "\n") => [...e.items.map(((e) => `<${e.key}:${e.value}>`)), e.note].join(t).trim(), V = (e) => ({
	note: zd(e),
	items: Rd(e)
}), zd = (e) => {
	if (e.length >= 3e4) throw Error("Note text is too long. Please shorten it.");
	return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, Bd = (e, t) => `<${e}:${t}>`, Vd = (e, t, n = "\n") => {
	let r = V(e), i = r.items.map(((e) => ({
		key: e.key,
		value: t(e)
	})));
	return B({
		note: r.note,
		items: i
	}, n);
}, Hd = (e, t) => {
	let n = Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).find(((e) => e[1] === t));
	return n ? n[2] : void 0;
}, Ud = (e, t, n) => e.replace(/<([^<>:]{1,100}):([^>]{1,1000})>/g, ((e, r) => r === t ? Bd(r, n) : e)), Wd = (e) => Array.from(e.note.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).map(((t) => ({
	key: t[1],
	value: t[2],
	id: e.id,
	name: e.name
}))), Gd = (e, t, n = "\n") => {
	let r = V(e), i = r.items.reduce(((e, n) => {
		let r = t.isReplaceTargetNote(n), i = r ? {
			key: n.key,
			value: t.replaceText(n.value) ?? n.value
		} : n;
		return e.items.push(i), e.hasTarget = e.hasTarget || r, e;
	}), {
		hasTarget: !1,
		items: []
	});
	return i.hasTarget ? B({
		note: r.note,
		items: i.items
	}, n) : e;
}, Kd = "data", qd = "actor", Jd = "map", Yd = "enemy", Xd = "state", Zd = "skill", Qd = "item", $d = "weapon", ef = "armor", tf = "class", nf = "common_event", rf = "troop", af = (e) => [
	of(e.elementRate),
	sf(e.debuffRate),
	cf(e.stateRate),
	lf(e.stateResist),
	uf(e.regularParam),
	df(e.extraParam),
	ff(e.specialParam),
	pf(e.attackElement),
	mf(e.attackState),
	hf(e.attackSpeed),
	gf(e.attackTimes),
	_f(e.attackSkill),
	vf(e.skillTypeAdd),
	yf(e.skillTypeSeal),
	bf(e.skillAdd),
	xf(e.skillSeal),
	Sf(e.equipWeaponType),
	Cf(e.equipArmorType),
	wf(e.equipLock),
	Tf(e.equipSeal),
	Ef(e.slotType),
	Df(e.actionPlus),
	Of(e.specialFlag),
	kf(e.collaps),
	Af(e.partyAbility)
], of = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 11,
	dataSource: jf()
}), sf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 12,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), cf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 13,
	dataSource: H()
}), lf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 14,
	dataSource: H()
}), uf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 21,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), df = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 22,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), ff = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 23,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), pf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 31,
	dataSource: jf()
}), mf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 32,
	dataSource: H()
}), hf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 33
}), gf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 34
}), _f = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 35,
	dataSource: U()
}), vf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 41,
	dataSource: Mf()
}), yf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 42,
	dataSource: Mf()
}), bf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 43,
	dataSource: U()
}), xf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 44,
	dataSource: U()
}), Sf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 51,
	dataSource: Nf()
}), Cf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 52,
	dataSource: Pf()
}), wf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 53,
	dataSource: W()
}), Tf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 54,
	dataSource: W()
}), Ef = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 55,
	dataSource: W()
}), Df = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 61
}), Of = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 62,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), kf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 63,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), Af = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 64,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), H = () => ({
	author: "rmmz",
	module: "data",
	kind: "state"
}), U = () => ({
	author: "rmmz",
	module: "data",
	kind: "skill"
}), jf = () => ({
	author: "rmmz",
	module: "system",
	kind: "elements"
}), Mf = () => ({
	author: "rmmz",
	module: "system",
	kind: "skillTypes"
}), Nf = () => ({
	author: "rmmz",
	module: "system",
	kind: "weaponTypes"
}), Pf = () => ({
	author: "rmmz",
	module: "system",
	kind: "armorTypes"
}), W = () => ({
	author: "rmmz",
	module: "system",
	kind: "equipTypes"
}), Ff = {
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
}, If = () => ({
	rpg: {
		damage: eu,
		data: _o,
		traits: Oc,
		itemEffect: Hu
	},
	global: Ff
}), Lf = [
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
], Rf = [
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
], zf = [
	"SceneManager",
	"AudioManager",
	"ImageManager",
	"DataManager",
	"PluginManager"
], Bf = ["Math.max", "Math.min"], Vf = (e) => G(e, Lf) || G(e, Rf) || G(e, zf) || G(e, Bf), G = (e, t) => t.some(((t) => e.includes(t))), Hf = (e = {}) => ({
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
}), Uf = (e = {}) => [
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
], K = (e) => ({
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
}), Wf = (e) => ({
	item: Gf(e),
	skill: Kf(e),
	equip: qf(e),
	status: Jf(e),
	formation: Yf(e),
	save: Xf(e)
}), Gf = (e) => e.menuCommands[0], Kf = (e) => e.menuCommands[1], qf = (e) => e.menuCommands[2], Jf = (e) => e.menuCommands[3], Yf = (e) => e.menuCommands[4], Xf = (e) => e.menuCommands[5], Zf = (e) => e.itemCategories[0], Qf = (e) => e.itemCategories[1], $f = (e) => e.itemCategories[2], ep = (e) => e.itemCategories[3], tp = (e = {}) => [
	e.item ?? !0,
	e.weapon ?? !0,
	e.armor ?? !0,
	e.keyItem ?? !0
], np = (e) => ({
	item: e[0],
	weapon: e[1],
	armor: e[2],
	keyItem: e[3]
}), rp = (e = {}) => [
	e.item ?? !0,
	e.skill ?? !0,
	e.equip ?? !0,
	e.status ?? !0,
	e.formation ?? !0,
	e.save ?? !0
], ip = (e) => ({
	item: e[0],
	skill: e[1],
	equip: e[2],
	status: e[3],
	formation: e[4],
	save: e[5]
}), ap = (e = {}) => ({
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
}), op = (e = {}) => ({
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0,
	partyMembers: e.partyMembers ? Array.from(e.partyMembers) : [1]
}), q = (e, t) => ({
	name: e,
	id: t
}), sp = (e) => e.variables.map(q), cp = (e) => e.elements.map(q), lp = (e) => e.equipTypes.map(q), up = (e) => e.skillTypes.map(q), dp = (e) => e.weaponTypes.map(q), fp = (e) => e.armorTypes.map(q), pp = (e) => e.switches.map(q), mp = (e, t) => [
	gp(e, t),
	_p(e, t),
	xp(e, t),
	vp(e, t),
	hp(e, t),
	yp(e, t),
	bp(e, t)
], hp = (e, t) => ({
	items: fp(e),
	label: t.options.armorTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "armorTypes"
	}
}), gp = (e, t) => ({
	items: cp(e),
	label: t.options.elements,
	source: {
		author: "rmmz",
		module: "system",
		kind: "elements"
	}
}), _p = (e, t) => ({
	items: lp(e),
	label: t.options.equipTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "equipTypes"
	}
}), vp = (e, t) => ({
	items: up(e),
	label: t.options.skillTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "skillTypes"
	}
}), yp = (e, t) => ({
	items: sp(e),
	label: t.options.variables,
	source: {
		author: "rmmz",
		module: "system",
		kind: "variable"
	}
}), bp = (e, t) => ({
	items: pp(e),
	label: t.options.switches,
	source: {
		author: "rmmz",
		module: "system",
		kind: "switch"
	}
}), xp = (e, t) => ({
	items: dp(e),
	label: t.options.weaponTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "weaponTypes"
	}
}), Sp = (e) => ({
	armorTypes: J(e.armorTypes),
	elements: J(e.elements),
	equipTypes: J(e.equipTypes),
	weaponTypes: J(e.weaponTypes),
	skillTypes: J(e.skillTypes),
	variables: J(e.variables),
	switches: J(e.switches)
}), J = (e) => e ? [...e] : [], Y = (e, t) => typeof e == "string" ? e : t, Cp = (e) => ({
	actionFailure: Y(e.actionFailure, "Action failed."),
	actorDamage: Y(e.actorDamage, "%1 took %2 damage."),
	actorRecovery: Y(e.actorRecovery, "%1 recovered %2 HP."),
	actorGain: Y(e.actorGain, "%1 gained %2."),
	actorLoss: Y(e.actorLoss, "%1 lost %2."),
	actorDrain: Y(e.actorDrain, "%1 drained %2 HP."),
	actorNoDamage: Y(e.actorNoDamage, "%1 was not damaged."),
	actorNoHit: Y(e.actorNoHit, "%1 was not hit."),
	alwaysDash: Y(e.alwaysDash, "Always dash."),
	bgmVolume: Y(e.bgmVolume, "BGM volume"),
	bgsVolume: Y(e.bgsVolume, "BGS volume"),
	commandRemember: Y(e.commandRemember, "Command remember."),
	criticalToActor: Y(e.criticalToActor, "%1 dealt %2 damage to %3."),
	criticalToEnemy: Y(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
	counterAttack: Y(e.counterAttack, "%1 countered!"),
	debuffAdd: Y(e.debuffAdd, "%1's %2 was lowered."),
	defeat: Y(e.defeat, "Defeat."),
	enemyDamage: Y(e.enemyDamage, "%1 took %2 damage."),
	enemyDrain: Y(e.enemyDrain, "%1 drained %2 HP."),
	enemyGain: Y(e.enemyGain, "%1 gained %2."),
	enemyLoss: Y(e.enemyLoss, "%1 lost %2."),
	enemyNoDamage: Y(e.enemyNoDamage, "%1 was not damaged."),
	enemyNoHit: Y(e.enemyNoHit, "%1 was not hit."),
	enemyRecovery: Y(e.enemyRecovery, "%1 recovered %2 HP."),
	evasion: Y(e.evasion, "%1 evaded the attack!"),
	autosave: Y(e.autosave, "Autosave"),
	escapeFailure: Y(e.escapeFailure, "Escape failed."),
	escapeStart: Y(e.escapeStart, "%1 started to escape!"),
	emerge: Y(e.emerge, "%1 appeared!"),
	expNext: Y(e.expNext, "Next level in %1 EXP."),
	expTotal: Y(e.expTotal, "Total EXP: %1"),
	file: Y(e.file, "File"),
	buffAdd: Y(e.buffAdd, "%1's %2 was raised."),
	buffRemove: Y(e.buffRemove, "%1's %2 was lowered."),
	obtainExp: Y(e.obtainExp, "%1 EXP obtained."),
	obtainGold: Y(e.obtainGold, "%1 gold obtained."),
	obtainItem: Y(e.obtainItem, "%1 obtained %2."),
	obtainSkill: Y(e.obtainSkill, "%1 learned %2."),
	levelUp: Y(e.levelUp, "%1 leveled up!"),
	partyName: Y(e.partyName, "Party"),
	loadMessage: Y(e.loadMessage, "Load %1?"),
	meVolume: Y(e.meVolume, "ME volume"),
	possession: Y(e.possession, "Possession"),
	preemptive: Y(e.preemptive, "%1 attacked first!"),
	saveMessage: Y(e.saveMessage, "Save %1?"),
	seVolume: Y(e.seVolume, "SE volume"),
	magicEvasion: Y(e.magicEvasion, "%1 evaded the magic!"),
	magicReflection: Y(e.magicReflection, "%1 reflected the magic!"),
	substitute: Y(e.substitute, "%1 took the hit!"),
	surprise: Y(e.surprise, "%1 surprised the enemy!"),
	touchUI: Y(e.touchUI, "Touch UI"),
	useItem: Y(e.useItem, "%1 used %2."),
	victory: Y(e.victory, "Victory!")
}), wp = (e) => ({
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
}), Tp = (e) => e.terms.params.map(((e, t) => ({
	name: e,
	id: t
}))), Ep = (e) => [
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
], Dp = (e) => ({
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
}), Op = (e) => [
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
], kp = (e) => ({
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
}), Ap = (e) => jp(e, ""), jp = (e, t) => [
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
], X = (e) => ({
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
}), Mp = (e) => ({
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
}), Np = (e = {}) => ({
	jsonFormatLevel: e.jsonFormatLevel ?? 0,
	messageWidth1: e.messageWidth1 ?? 816,
	messageWidth2: e.messageWidth2 ?? 816
}), Pp = (e) => ({
	gameTitle: e.texts?.gameTitle ?? "",
	currencyUnit: e.texts?.currencyUnit ?? "",
	armorTypes: $(e.dataNames?.armorTypes),
	equipTypes: $(e.dataNames?.equipTypes),
	elements: $(e.dataNames?.elements),
	skillTypes: $(e.dataNames?.skillTypes),
	weaponTypes: $(e.dataNames?.weaponTypes),
	switches: $(e.dataNames?.switches),
	variables: $(e.dataNames?.variables),
	terms: Fp(e.terms ?? {})
}), Q = (e) => {
	let n = Ip(e.size);
	return {
		...ap(e.options),
		titleCommandWindow: Mp(e.titleCommandWindow ?? {}),
		currencyUnit: e.texts?.currencyUnit ?? "",
		gameTitle: e.texts?.gameTitle ?? "",
		sounds: Uf(e.sounds),
		editor: Np(e.editing),
		advanced: Hf(e.advanced),
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
		testBattlers: Lp(e.battleTest?.testBattlers, Rp),
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
		terms: Fp(e.terms ?? {}),
		itemCategories: tp(e.itemCategories),
		partyMembers: $(e.gameInit?.partyMembers),
		battlerHue: 0,
		menuCommands: rp(e.menuCommands)
	};
}, Fp = (e) => ({
	basic: Op(e.basic ?? {}),
	commands: Ap(e.commands ?? {}),
	params: Ep(e.params ?? {}),
	messages: Cp(e.messages ?? {})
}), $ = (e) => e ? [...e] : [], Ip = (e) => e ? {
	tileSize: e.tileSize ?? 48,
	faceSize: e.faceSize ?? 144,
	iconSize: e.iconSize ?? 32
} : {
	tileSize: 48,
	faceSize: 144,
	iconSize: 32
}, Lp = (e, t) => e ? e.map(t) : [], Rp = (e) => e ? {
	actorId: e.actorId,
	equips: $(e.equips),
	level: e.level
} : {
	actorId: 0,
	equips: [],
	level: 1
}, zp = {
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
}, Bp = {
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
}, Vp = {
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
}, Hp = {
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
}, Up = (e, t) => {
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
			messages: Yp(e.terms.messages, n),
			basic: Wp(e.terms.basic, n),
			params: Gp(e.terms.params, n),
			commands: Kp(e.terms.commands, n)
		}
	};
}, Wp = (e, t) => ({
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
}), Gp = (e, t) => ({
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
}), Kp = (e, t) => ({
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
}), qp = (e) => ({
	gameTitle: e.gameTitle,
	currencyUnit: e.currencyUnit,
	equipTypes: [...e.equipTypes],
	armorTypes: [...e.armorTypes],
	weaponTypes: [...e.weaponTypes],
	elements: [...e.elements],
	skillTypes: [...e.skillTypes],
	terms: {
		basic: kp(e.terms.basic),
		commands: X(e.terms.commands),
		messages: Cp(e.terms.messages),
		params: Dp(e.terms.params)
	}
}), Jp = (e, t) => Q({
	locale: e.locale,
	versionId: e.versionId,
	options: e,
	advanced: e.advanced,
	vehicles: e,
	editing: e.editor,
	sounds: K(e.sounds),
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
	itemCategories: np(e.itemCategories),
	menuCommands: ip(e.menuCommands),
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
}), Yp = (e, t) => ({
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
}), Xp = (e = Q({})) => ({
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
		messages: wp(e.terms.messages)
	}
}), Zp = (e) => Q({
	versionId: e.versionId,
	menuCommands: Wf(e),
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
	sounds: K(e.sounds),
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
		basic: kp(e.terms.basic),
		commands: X(e.terms.commands),
		params: Dp(e.terms.params),
		messages: e.terms.messages
	}
}), Qp = ({ audio: e, image: n, systemText: r, switches: i, variables: a }) => Q({
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
	terms: $p(r),
	sounds: em(e)
}), $p = (e) => ({
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
}), em = (e) => {
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
}, tm = (e) => ({
	...e.text ? { text: e.text } : {},
	...e.desc ? { desc: e.desc } : {}
}), nm = {
	LEFT: 4,
	UP: 8,
	DOWN: 2,
	RIGHT: 6
}, rm = (e) => {
	let t = e.split("/");
	return t[t.length - 1];
};
export { Kf as $, rs as $a, Mr as $c, Ee as $d, Zs as $i, jn as $l, tu as $n, Ia as $o, Xc as $r, ji as $s, vd as $t, Et as $u, Sp as A, ms as Aa, ni as Ac, f as Ad, s as Af, vc as Ai, Qn as Al, Hu as An, vo as Ao, pl as Ar, aa as As, Ud as At, an as Au, ap as B, Zo as Ba, Lr as Bc, Be as Bd, uc as Bi, Un as Bl, mu as Bn, Ua as Bo, cl as Br, ea as Bs, Nd as Bt, Ut as Bu, Op as C, ws as Ca, si as Cc, ct as Cd, oe as Cf, Oc as Ci, dr as Cl, dd as Cn, wo as Co, Tl as Cr, da as Cs, rf as Ct, cn as Cu, Tp as D, gs as Da, Xr as Dc, nt as Dd, a as Df, xc as Di, rr as Dl, Gu as Dn, So as Do, Sl as Dr, fa as Ds, Hd as Dt, tn as Du, Dp as E, Cs as Ea, ti as Ec, it as Ed, ae as Ef, bc as Ei, ir as El, Ku as En, xo as Eo, El as Er, ua as Es, Bd as Et, en as Eu, up as F, xs as Fa, ii as Fc, Ye as Fd, pc as Fi, Kn as Fl, Tu as Fn, ro as Fo, gl as Fr, na as Fs, Ld as Ft, Kt as Fu, Wf as G, Ho as Ga, Kr as Gc, Me as Gd, oc as Gi, zn as Gl, uu as Gn, Xa as Go, ol as Gr, Ui as Gs, bd as Gt, zt as Gu, ip as H, Qo as Ha, Vr as Hc, He as Hd, sc as Hi, Wn as Hl, xu as Hn, Ga as Ho, sl as Hr, qi as Hs, jd as Ht, Ht as Hu, pp as I, Ss as Ia, Jr as Ic, Xe as Id, gc as Ii, Xn as Il, hu as In, no as Io, yl as Ir, Qi as Is, kd as It, qt as Iu, Yf as J, ss as Ja, qr as Jc, Ne as Jd, tc as Ji, In as Jl, au as Jn, eo as Jo, al as Jr, Vi as Js, wd as Jt, Lt as Ju, $f as K, as as Ka, Hr as Kc, Ie as Kd, ac as Ki, Fn as Kl, fu as Kn, qa as Ko, rl as Kr, zi as Ks, Cd as Kt, It as Ku, sp as L, ls as La, Wr as Lc, Ze as Ld, hc as Li, Gn as Ll, Cu as Ln, Za as Lo, bl as Lr, Zi as Ls, L as Lt, Jt as Lu, fp as M, bs as Ma, ri as Mc, et as Md, i as Mf, mc as Mi, er as Ml, vu as Mn, _o as Mo, dl as Mr, ia as Ms, V as Mt, Zt as Mu, cp as N, _s as Na, $r as Nc, $e as Nd, ee as Nf, _c as Ni, Zn as Nl, yu as Nn, oo as No, vl as Nr, ra as Ns, Rd as Nt, Gt as Nu, wp as O, ys as Oa, Zr as Oc, tt as Od, r as Of, Cc as Oi, nr as Ol, Wu as On, Eo as Oo, _l as Or, la as Os, Wd as Ot, nn as Ou, lp as P, vs as Pa, ei as Pc, Je as Pd, c as Pf, fc as Pi, Jn as Pl, gu as Pn, io as Po, hl as Pr, ta as Ps, z as Pt, Wt as Pu, Xf as Q, ns as Qa, jr as Qc, ke as Qd, Qs as Qi, kn as Ql, nu as Qn, Fa as Qo, Zc as Qr, Ii as Qs, Sd as Qt, Ot as Qu, dp as R, Yo as Ra, Rr as Rc, Ke as Rd, lc as Ri, Yn as Rl, wu as Rn, Qa as Ro, ul as Rr, Xi as Rs, Fd as Rt, Yt as Ru, X as S, Ds as Sa, li as Sc, ut as Sd, ie as Sf, kc as Si, lr as Sl, fd as Sn, Co as So, jl as Sr, pa as Ss, Xd as St, sn as Su, Ep as T, Es as Ta, ai as Tc, at as Td, re as Tf, Tc as Ti, ar as Tl, qu as Tn, To, Cl as Tr, C as Ts, Gd as Tt, $t as Tu, tp as U, ds as Ua, Gr as Uc, Ve as Ud, ec as Ui, Vn as Ul, _u as Un, Ya as Uo, M as Ur, Ki as Us, Id as Ut, Rt as Uu, rp as V, Xo as Va, Br as Vc, Ue as Vd, cc as Vi, Bn as Vl, bu as Vn, Wa as Vo, nl as Vr, Yi as Vs, Ad as Vt, Vt as Vu, np as W, Uo as Wa, Yr as Wc, ze as Wd, rc as Wi, Hn as Wl, Su as Wn, Ka as Wo, il as Wr, Wi as Ws, Od as Wt, Bt as Wu, Gf as X, Ko as Xa, Fr as Xc, Fe as Xd, $s as Xi, Rn as Xl, lu as Xn, za as Xo, Qc as Xr, Ri as Xs, Ed as Xt, Pt as Xu, Zf as Y, is as Ya, Pr as Yc, Le as Yd, ic as Yi, m as Yl, ru as Yn, Ba as Yo, el as Yr, Hi as Ys, Dd as Yt, Nt as Yu, ep as Z, fs as Za, Nr as Zc, Ae as Zd, Xs as Zi, Nn as Zl, cu as Zn, Ra as Zo, $c as Zr, Li as Zs, Td as Zt, jt as Zu, Np as _, Ns as _a, xi as _c, pt as _d, ue as _f, Ac as _i, pr as _l, hd as _n, Mo as _o, zl as _r, w as _s, nf as _t, pn as _u, Xp as a, Hs as aa, ki as ac, wt as ad, Se as af, Uc as ai, Tr as al, sd as an, Wo as ao, Yl as ar, Ma as as, Vf as at, Dn as au, Ap as b, Rs as ba, yi as bc, dt as bd, le as bf, O as bi, cr as bl, pd as bn, Ao as bo, Fl as br, ma as bs, Jd as bt, un as bu, Yp as c, zs as ca, Ei as cc, Ct as cd, be as cf, Bc as ci, Sr as cl, Qu as cn, Vo as co, Kl as cr, Ea as cs, zf as ct, xn as cu, zp as d, Ms as da, hi as dc, vt as dd, pe as df, jc as di, hr as dl, ad as dn, Io as do, Vl as dr, ba as ds, Ff as dt, vn as du, Js as ea, Ai as ec, Dt as ed, De as ef, Jc as ei, Er as el, yd as en, es as eo, N as er, La as es, Jf as et, Pn as eu, Bp as f, Fs as fa, gi as fc, p as fd, me as ff, Ic as fi, gr as fl, td as fn, zo as fo, Hl as fr, Sa as fs, af as ft, Cn as fu, Pp as g, Is as ga, bi as gc, ot as gd, fe as gf, Pc as gi, yr as gl, ld as gn, Lo as go, Pl as gr, Ca as gs, tf as gt, hn as gu, Q as h, ks as ha, mi as hc, ht as hd, ce as hf, Fc as hi, vr as hl, Yu as hn, Po as ho, Ll as hr, wa as hs, ef as ht, gn as hu, Zp as i, Ks as ia, Di as ic, Tt as id, Te as if, Yc as ii, Dr as il, id as in, us as io, Xl as ir, Aa as is, Hf as it, On as iu, mp as j, ps as ja, oi as jc, Qe as jd, o as jf, yc as ji, tr as jl, Eu as jn, yo as jo, fl as jr, ca as js, B as jt, Qt as ju, Cp as k, hs as ka, Qr as kc, qe as kd, l as kf, Sc as ki, $n as kl, Uu as kn, bo as ko, ml as kr, oa as ks, Vd as kt, rn as ku, Jp as l, Vs as la, Ti as lc, xt as ld, _e as lf, Vc as li, xr as ll, $u as ln, Bo as lo, Wl as lr, ka as ls, Bf as lt, Sn as lu, Hp as m, As as ma, pi as mc, gt as md, ge as mf, Mc as mi, mr as ml, od as mn, Fo as mo, Il as mr, _a as ms, qd as mt, fn as mu, nm as n, Gs as na, Mi as nc, Mt as nd, Ce as nf, Gc as ni, Or as nl, cd as nn, cs as no, ql as nr, ja as ns, Uf as nt, Mn as nu, Qp as o, Us as oa, Ci as oc, St as od, xe as of, Hc as oi, Cr as ol, Xu as on, Go as oo, Jl as or, Da as os, Rf as ot, yn as ou, Vp as p, js as pa, _i as pc, _t as pd, ve as pf, Nc as pi, _r as pl, rd as pn, Ro as po, Ul as pr, va as ps, Kd as pt, wn as pu, qf as q, os as qa, Ur as qc, Pe as qd, nc as qi, Ln as ql, du as qn, Ja as qo, tl as qr, Bi as qs, xd as qt, Ft as qu, tm as r, Ys as ra, Pi as rc, At as rd, we as rf, Kc as ri, Ar as rl, nd as rn, Jo as ro, Zl as rr, Na as rs, K as rt, En as ru, qp as s, qs as sa, wi as sc, bt as sd, ye as sf, zc as si, wr as sl, Zu as sn, qo as so, $l as sr, Ta as ss, Lf as st, bn as su, rm as t, Ws as ta, Ni as tc, kt as td, Oe as tf, qc as ti, kr as tl, _d as tn, ts as to, eu as tr, Pa as ts, Qf as tt, An as tu, Up as u, Bs as ua, Oi as uc, yt as ud, he as uf, Rc as ui, br as ul, ed as un, No as uo, Gl as ur, Oa as us, If as ut, _n as uu, Z as v, Ps as va, Si as vc, st as vd, se as vf, D as vi, fr as vl, md as vn, jo as vo, Rl as vr, ya as vs, Yd as vt, mn as vu, kp as w, Ts as wa, ci as wc, rt as wd, te as wf, wc as wi, sr as wl, Ju as wn, Oo as wo, Dl as wr, S as ws, $d as wt, ln as wu, jp as x, Os as xa, v as xc, ft as xd, ne as xf, k as xi, ur as xl, ud as xn, Do as xo, Al as xr, ha as xs, Zd as xt, on as xu, Mp as y, Ls as ya, vi as yc, lt as yd, de as yf, A as yi, or as yl, gd as yn, ko as yo, Bl as yr, xa as ys, Qd as yt, dn as yu, op as z, $o as za, zr as zc, Ge as zd, dc as zi, qn as zl, pu as zn, $a as zo, ll as zr, $i as zs, Pd as zt, Xt as zu };
