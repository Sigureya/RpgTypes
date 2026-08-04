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
}), $n = (e, t = 0) => ({
	code: 101,
	indent: t,
	parameters: [
		e?.facename ?? "",
		e?.faceIndex ?? 0,
		e?.background ?? 0,
		e?.positionType ?? 2,
		e?.speakerName ?? ""
	]
}), er = (e) => ({
	facename: e[0],
	faceIndex: e[1],
	background: e[2],
	positionType: e[3],
	speakerName: e[4] ?? ""
}), tr = (e) => [
	e.facename,
	e.faceIndex,
	e.background,
	e.positionType,
	e.speakerName
], nr = (e, t = 0) => ({
	code: 401,
	indent: t,
	parameters: [e]
}), rr = (e, t = 0) => ({
	code: 261,
	indent: t,
	parameters: [e.filename]
}), ir = (e) => ({ filename: e[0] }), ar = ({ args: e = {}, commandName: t, commandTitle: n = "", pluginName: r }, i = 0) => ({
	code: 357,
	indent: i,
	parameters: [
		r,
		t,
		n,
		{ ...e }
	]
}), or = (e) => ({
	pluginName: e[0],
	commandName: e[1],
	commandTitle: e[2],
	args: { ...e[3] }
}), sr = (e, t = 0) => ({
	code: 129,
	parameters: [0, e.actorId],
	indent: t
}), cr = (e, t = 0) => ({
	code: 129,
	parameters: [1, e.actorId],
	indent: t
}), lr = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		0,
		e.value
	],
	indent: t
}), ur = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		0,
		e.value
	],
	indent: t
}), dr = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		1,
		e.variableId
	],
	indent: t
}), fr = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		1,
		e.variableId
	],
	indent: t
}), pr = ({ pictureId: e = 0, origin: t = 0, name: n = "", x: r = 0, y: i = 0, scaleX: a = 100, scaleY: o = 100, opacity: s = 255, blendMode: c = 0 }) => ({
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
}), mr = ({ pictureId: e, origin: t, x: n, y: r, scaleX: i, scaleY: a, opacity: o, blendMode: s, wait: c = !1, easingType: ee = 0 }) => ({
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
}), hr = (e, t = 0) => ({
	code: 236,
	indent: t,
	parameters: [
		e.type ?? "none",
		e.power ?? 0,
		e.duration ?? 0,
		e.wait ?? !1
	]
}), gr = (e = 0) => ({
	code: 222,
	indent: e,
	parameters: []
}), _r = (e = 0) => ({
	code: 221,
	indent: e,
	parameters: []
}), vr = (e, t = 0) => ({
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
}), yr = (e, t = 0) => ({
	code: 225,
	indent: t,
	parameters: [
		e.power ?? 5,
		e.speed ?? 5,
		e.duration ?? 60,
		e.wait ?? !1
	]
}), br = (e, t = 0) => ({
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
}), xr = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), Sr = (e, t = 0) => ({
	code: 655,
	indent: t,
	parameters: [e]
}), Cr = (e, t = 0) => e.map(((e, n) => n === 0 ? xr(e, t) : Sr(e, t))), wr = 1, Tr = 0, m = {
	item: 0,
	weapon: 1,
	armors: 2
}, Er = ({ goods: e, buyOnly: t = !1 }, n = 0) => e.map(((e, r) => {
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
})), Dr = 0, Or = 1, kr = 2, Ar = 3, jr = 4, Mr = 0, Nr = 1, Pr = 2, Fr = (e) => e.parameters[3] === 1, Ir = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Lr(e)
}), Lr = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	1,
	e.variableId
], Rr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 0)
}), zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 1)
}), Br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 2)
}), Vr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 3)
}), Hr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 12)
}), Ur = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 4)
}), Wr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 5)
}), Gr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 6)
}), Kr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 7)
}), qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 8)
}), Jr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 9)
}), Yr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: h(e, 10)
}), Xr = (e, t = 0) => ({
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
], Zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 0)
}), Qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 1)
}), $r = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 10)
}), ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 2)
}), ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 3)
}), ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 4)
}), ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 5)
}), ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 6)
}), ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 7)
}), oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 8)
}), si = (e, t = 0) => ({
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
], ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: di(e)
}), li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: fi(e)
}), ui = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: pi(e)
}), di = (e) => [
	e.variableId,
	e.variableId,
	e.operation ?? 0,
	3,
	0,
	e.itemId
], fi = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	1,
	e.weaponId
], pi = (e) => [
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
}, mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.X)
}), hi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.Y)
}), gi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.DIRECTION)
}), _i = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.SCREEN_X)
}), vi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v(e, _.SCREEN_Y)
}), yi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.X)
}), bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.Y)
}), xi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.DIRECTION)
}), Si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: v({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, _.SCREEN_X)
}), Ci = (e, t = 0) => ({
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
], wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 0)
}), Ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 4)
}), Ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 5)
}), Di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 6)
}), Oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 7)
}), ki = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, 8)
}), Ai = (e, t = 0) => ({
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
], ji = (e, t = 0) => ({
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
}), Mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 0)
}), Ni = (e, t = 0) => ({
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
}), Pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 2)
}), Fi = (e, t = 0) => ({
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
}, Ua = (e, t, n) => t >= 0 && n >= 0 && t < e.width && n < e.height, Wa = (e, t, n, r) => {
	let i = e.width, a = e.height;
	return e.data[(r * a + n) * i + t] || 0;
}, Ga = (e, t, n) => [
	3,
	2,
	1,
	0
].map(((r) => Wa(e, t, n, r))), T = (e) => e.scrollType === 2 || e.scrollType === 3, E = (e) => e.scrollType === 1 || e.scrollType === 3, Ka = (e, t) => T(e) ? no(t, e.width) : t, qa = (e, t) => E(e) ? no(t, e.height) : t, Ja = (e, t) => e + (t === 6 ? 1 : t === 4 ? -1 : 0), Ya = (e, t) => e + (t === 2 ? 1 : t === 8 ? -1 : 0), Xa = (e, t, n) => Ka(e, Ja(t, n)), Za = (e, t, n) => qa(e, Ya(t, n)), Qa = (e, t, n) => {
	let r = t - n;
	return T(e) && Math.abs(r) > e.width / 2 ? r < 0 ? r + e.width : r - e.width : r;
}, $a = (e, t, n) => {
	let r = t - n;
	return E(e) && Math.abs(r) > e.height / 2 ? r < 0 ? r + e.height : r - e.height : r;
}, eo = (e, t, n, r, i) => Math.abs(Qa(e, t, r)) + Math.abs($a(e, n, i)), to = (e, t, n, r) => {
	let i = ((e, t, n) => Ua(e, t, n) ? Wa(e, t, n, 5) : 0)(e, t, n);
	return ((e, t, n) => {
		let r = e.filter(t);
		if (r.length === 0) return null;
		let i = r.reduce(Va, 0);
		return i <= 0 ? null : Ha(n(i), r);
	})(e.encounterList, ((e) => e.regionSet.includes(i)), r);
}, no = (e, t) => {
	let n = e % t;
	return n >= 0 ? n : n + t;
}, ro = (e) => e.toString().padStart(3, "0"), io = (e = { id: 0 }) => ({
	name: e.name ?? ro(e.id),
	id: e.id,
	expanded: e.expanded ?? !1,
	order: e.order ?? 0,
	parentId: e.parentId ?? 0,
	scrollX: e.scrollX ?? 0,
	scrollY: e.scrollY ?? 0
}), ao = (e, t) => e.map(((e) => e ? {
	...e,
	pages: oo(e, t)
} : null)), oo = (e, t) => e.pages.map(((e) => ({
	...e,
	list: t(e.list)
}))), so = (e, t) => [
	co(e.skills, t),
	lo(e.actors, t),
	uo(e.states, t),
	fo(e.armors, t),
	po(e.classes, t),
	mo(e.enemies, t),
	ho(e.items, t),
	go(e.weapons, t),
	_o(e.commonEvents, t)
], co = (e, t) => ({
	label: t.skill.title,
	items: e,
	source: {
		author: "rmmz",
		module: "data",
		kind: "skill"
	}
}), lo = (e, t) => ({
	items: e,
	label: t.actor.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "actor"
	}
}), uo = (e, t) => ({
	items: e,
	label: t.state.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "state"
	}
}), fo = (e, t) => ({
	items: e,
	label: t.armor.title,
	source: {
		author: "rmmz",
		kind: "armor",
		module: "data"
	}
}), po = (e, t) => ({
	items: e,
	label: t.class.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "class"
	}
}), mo = (e, t) => ({
	items: e,
	label: t.enemy.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "enemy"
	}
}), ho = (e, t) => ({
	items: e,
	label: t.item.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "item"
	}
}), go = (e, t) => ({
	items: e,
	label: t.weapon.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "weapon"
	}
}), _o = (e, t) => ({
	items: e,
	label: t.commonEvent.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "common_event"
	}
}), vo = {
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
}, yo = (e = {}) => ({
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
}), bo = (e) => ({
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
}), xo = (e = {}) => ({
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
}), So = 0, Co = 1, wo = 2, To = 3, Eo = 4, Do = 5, Oo = 6, ko = 7, D = ({ mhp: e = 0, mmp: t = 0, atk: n = 0, def: r = 0, mat: i = 0, mdf: a = 0, agi: o = 0, luk: s = 0 }) => [
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
], O = "{name}", k = "{name} * {value}%", Ec = "{name} + {value}%", Dc = "{value}", Oc = {
	title: "特徴",
	options: {
		regularParam: {
			title: "基本能力値",
			format: k,
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
			format: k,
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
			format: O,
			options: {
				autoBattle: "自動戦闘",
				guard: "防御",
				substitute: "身代わり",
				preventEscape: "逃走防止"
			}
		},
		collaps: {
			title: "消滅エフェクト",
			format: O,
			options: {
				bossCollaps: "ボス崩壊",
				instantCollaps: "即時崩壊",
				noneCollaps: "崩壊なし"
			}
		},
		partyAbility: {
			title: "パーティ能力",
			format: O,
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
			format: k
		},
		debuffRate: {
			title: "弱体有効度",
			format: k
		},
		stateRate: {
			title: "ステート有効度",
			format: k
		},
		stateResist: {
			title: "ステート無効",
			format: O
		},
		attackElement: {
			title: "攻撃属性",
			format: O
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
			format: k
		},
		attackSkill: {
			title: "攻撃スキル",
			format: O
		},
		equipWeaponType: {
			title: "装備武器タイプ",
			format: O
		},
		equipArmorType: {
			title: "装備防具タイプ",
			format: O
		},
		equipLock: {
			title: "装備固定",
			format: O
		},
		equipSeal: {
			title: "装備封印",
			format: O
		},
		slotType: {
			title: "スロットタイプ",
			format: O
		},
		skillAdd: {
			title: "スキル追加",
			format: O
		},
		skillSeal: {
			title: "スキルタイプ封印",
			format: O
		},
		skillTypeAdd: {
			title: "スキルタイプ追加",
			format: O
		},
		skillTypeSeal: {
			title: "スキルタイプ封印",
			format: O
		}
	}
}, kc = (e, t) => [
	Xs(e.regularParam),
	zs(e.extraParam),
	lc(e.specialParam),
	Ds(e.collaps, t),
	wc(e.specialFlag),
	vc(e.partyAbility)
], A = (e, t, n) => e.reduce(((e, r) => r.code === t && r.dataId === n ? e * r.value : e), 1), j = (e, t, n) => e.reduce(((e, r) => r.code === t && r.dataId === n ? e + r.value : e), 0), M = (e, t) => e.reduce(((e, n) => n.code === t ? e + n.value : e), 0), N = (e, t) => e.filter(((e) => e.code === t)).map(((e) => e.dataId)), P = (e, t, n) => e.some(((e) => e.code === t && e.dataId === n)), Ac = (e) => N(e, 31), jc = (e) => N(e, 32), Mc = (e, t) => j(e, 32, t), Nc = (e) => M(e, 33), Pc = (e) => Math.max(0, M(e, 34)), Fc = (e) => e.reduce(Ic, 1), Ic = (e, t) => t.code === 35 ? Math.max(e, t.dataId) : e, F = (e, t, n) => e.some(((e) => e.code === t && e.dataId === n)), Lc = (e, t) => F(e, 51, t), Rc = (e, t) => F(e, 52, t), zc = (e, t) => F(e, 53, t), Bc = (e, t) => F(e, 54, t), Vc = (e) => e.some(((e) => e.code === 62 && e.dataId === 3)), Hc = (e) => e.reduce(Uc, 0), Uc = (e, t) => t.code === 63 ? Math.max(e, t.dataId) : e, I = (e, t) => A(e, 21, t), Wc = (e, t) => A(e, 23, t), Gc = (e, t) => A(e, 11, t), Kc = (e, t) => A(e, 12, t), qc = (e, t) => A(e, 13, t), Jc = (e) => {
	let t = N(e, 35);
	return t.length > 0 ? Math.max(...t) : 1;
}, Yc = (e) => N(e, 41), Xc = (e, t) => P(e, 42, t), Zc = (e) => N(e, 43), Qc = (e, t) => P(e, 44, t), $c = (e) => A(e, 23, 0), el = (e) => A(e, 23, 1), tl = (e) => A(e, 23, 2), nl = (e) => A(e, 23, 3), L = (e) => A(e, 23, 4), rl = (e) => A(e, 23, 5), il = (e) => A(e, 23, 6), al = (e) => A(e, 23, 7), ol = (e) => A(e, 23, 8), sl = (e) => A(e, 23, 9), cl = (e, t) => j(e, 22, t), ll = (e) => j(e, 22, 0), ul = (e) => j(e, 22, 1), dl = (e) => j(e, 22, 2), fl = (e) => j(e, 22, 3), pl = (e) => j(e, 22, 4), ml = (e) => j(e, 22, 5), hl = (e) => j(e, 22, 6), gl = (e) => j(e, 22, 7), _l = (e) => j(e, 22, 8), vl = (e) => j(e, 22, 9), yl = {
	itemMapper: {
		placeHolder: "name",
		dataIdKey: "dataId",
		kindKey: "code"
	},
	placeHolder: { numbers: ["value"] }
}, bl = (t, r, i) => e(r, i, n(yl), t.pattern, ((e) => e.dataId)), xl = (e) => e.reduce(Sl, jo(1)), Sl = (e, t) => t.code === 21 ? t.dataId === 0 ? (e.mhp *= t.value, e) : t.dataId === 1 ? (e.mmp *= t.value, e) : t.dataId === 2 ? (e.atk *= t.value, e) : t.dataId === 3 ? (e.def *= t.value, e) : t.dataId === 4 ? (e.mat *= t.value, e) : t.dataId === 5 ? (e.mdf *= t.value, e) : t.dataId === 6 ? (e.agi *= t.value, e) : (t.dataId === 7 && (e.luk *= t.value), e) : e, Cl = (e, t, n, r, i, a, o) => (wl(e, t, n) + i[e]) * I(r, e) * Dl(e, a, o), wl = (e, t, n) => {
	let r = t.params[e];
	return r === void 0 ? 0 : r[Math.max(0, Math.min(n, r.length - 1))];
}, Tl = (e, t, n, r, i, a) => El(e, t, r) * I(n, e) * Dl(e, i, a), El = (e, t, n) => Math.max(0, t.params[e] + n[e]), Dl = (e, t, n) => t[e] * n.buffRateStep + n.baseBuffRate, Ol = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ?? Al(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), kl = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: e.traits ?? [],
	note: e.note ?? "",
	params: e.params ? jl(e.params) : Al(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), Al = () => [
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0]
], jl = (e) => {
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
}, Ml = 0, Nl = 1, Pl = 2, Fl = 3, Il = 4, Ll = 5, Rl = 6, zl = (e = {}) => ({
	dataId: e.dataId ?? 0,
	denominator: e.denominator ?? 0,
	kind: e.kind ?? 0
}), Bl = (e = {}) => ({
	conditionParam1: e.conditionParam1 ?? 0,
	conditionParam2: e.conditionParam2 ?? 0,
	conditionType: e.conditionType ?? 0,
	rating: e.rating ?? 0,
	skillId: e.skillId ?? 0
}), Vl = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	battlerHue: e.battlerHue ?? 0,
	dropItems: e.dropItems?.map((() => zl())) ?? [],
	exp: e.exp ?? 0,
	gold: e.gold ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ? [...e.params] : D({
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
}), Hl = (e) => D(Ul(e)), Ul = (e) => e.reduce(((e, t) => (e.mhp += t.params[0], e.mmp += t.params[1], e.atk += t.params[2], e.def += t.params[3], e.mat += t.params[4], e.mdf += t.params[5], e.agi += t.params[6], e.luk += t.params[7], e)), {
	mhp: 0,
	mmp: 0,
	atk: 0,
	def: 0,
	mat: 0,
	mdf: 0,
	agi: 0,
	luk: 0
}), Wl = (e) => e.filter(((e) => e.iconIndex > 0)).map(((e) => e.iconIndex)), Gl = (e) => e.every(Kl), Kl = (e) => e.restriction < 4, R = (e) => 1 <= e.restriction && e.restriction <= 3, ql = (e) => e.some(R), Jl = (e) => e.reduce(Yl, 0), Yl = (e, t) => R(t) ? Math.max(e, t.restriction) : e, Xl = (e = {}) => ({
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
}), Zl = {
	title: "ダメージ",
	options: {}
}, z = (e = {}) => ({
	type: e.type ?? 0,
	elementId: e.elementId ?? 0,
	formula: e.formula ?? "",
	variance: e.variance ?? 0,
	critical: e.critical ?? !1
}), Ql = (e = {}) => ({
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
	damage: z(e.damage ?? {}),
	wtypeId: e.wtypeId ?? 0
}), $l = {
	title: "武器",
	options: { weaponTypeId: "武器タイプID" }
}, eu = (e, t) => iu(e, t, tu), tu = (e, t) => t.code === 51 && t.dataId === e.wtypeId, nu = (e, t) => iu(e, t, ru), ru = (e, t) => t.code === 52 && t.dataId === e.atypeId, iu = (e, t, n) => {
	let r = t.find(((t) => t.code === 54 ? t.dataId === e.etypeId : !!n(e, t)));
	return !!r && r.code !== 54 && t.every(((t) => t.code !== 54 || t.dataId !== e.etypeId));
}, au = (e, t) => {
	let n = new Set(N(e, 51)), r = new Set(N(e, 54));
	return t.filter(((e) => n.has(e.wtypeId) && !r.has(e.etypeId)));
}, ou = (e, t) => {
	let n = new Set(N(e, 52)), r = new Set(N(e, 54));
	return t.filter(((e) => n.has(e.atypeId) && !r.has(e.etypeId)));
}, su = 0, cu = 1, lu = 2, uu = 11, du = 12, fu = 13, pu = 21, mu = 22, hu = 31, gu = 32, _u = 33, vu = 34, yu = 41, bu = 42, xu = 43, Su = 44, Cu = (e) => [
	Tu(e),
	Eu(e),
	Du(e),
	Ou(e),
	ku(e),
	Au(e),
	ju(e),
	Mu(e),
	Nu(e),
	wu(e),
	Pu(e),
	Fu(e),
	Iu(e)
], B = (e, t, n) => ({
	kindId: e,
	label: t.domainName,
	pattern: t.format,
	description: t.desc,
	dataSource: n
}), wu = (e) => B(41, e.special), Tu = (e) => B(11, e.recoverHp), Eu = (e) => B(12, e.recoverMp), Du = (e) => B(13, e.gainTp), Ou = (e) => B(21, e.addState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), ku = (e) => B(22, e.removeState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), Au = (e) => B(31, e.addBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), ju = (e) => B(32, e.addDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Mu = (e) => B(33, e.removeBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Nu = (e) => B(34, e.removeDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Pu = (e) => B(42, e.grow, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), Fu = (e) => B(43, e.learnSkill, {
	author: "rmmz",
	module: "data",
	kind: "skill"
}), Iu = (e) => B(44, e.commonEvent, {
	author: "rmmz",
	module: "data",
	kind: "common_event"
}), Lu = "{name} {value1}%", V = "{value1}% + {value2}", Ru = "{name} {value1}ターン", H = "{name}", zu = {
	title: "使用効果",
	options: {
		addBuff: {
			desc: "バフを付与する",
			domainName: "バフ付与",
			format: Ru
		},
		addDebuff: {
			desc: "デバフを付与する",
			domainName: "デバフ付与",
			format: Ru
		},
		gainTp: {
			desc: "TPを指定した量だけ増加させます。",
			domainName: "TP増加",
			format: V
		},
		grow: {
			desc: "成長効果",
			domainName: "成長効果",
			format: "{name} + {value1}"
		},
		learnSkill: {
			desc: "スキルを習得する",
			domainName: "スキル習得",
			format: H
		},
		recoverHp: {
			desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "HP回復",
			format: V
		},
		recoverMp: {
			desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "MP回復",
			format: V
		},
		removeBuff: {
			desc: "バフを解除する",
			domainName: "バフ解除",
			format: H
		},
		removeDebuff: {
			desc: "デバフを解除する",
			domainName: "デバフ解除",
			format: H
		},
		removeState: {
			desc: "指定したステートを付加します。",
			domainName: "ステート付加",
			format: Lu
		},
		special: {
			desc: "特殊効果",
			domainName: "特殊効果",
			format: H
		},
		addState: {
			desc: "状態異常を解除する",
			domainName: "ステート解除",
			format: Lu
		},
		commonEvent: {
			desc: "コモンイベントを実行する",
			domainName: "コモンイベント",
			format: H
		}
	}
}, Bu = 0, Vu = (e, t, n) => {
	let r = n.find(((e) => e.id === t.dataId)), i = r ? r.name : "Unknown Item";
	return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", i);
}, Hu = {
	title: "アイテム",
	options: { consumable: "消耗品" }
}, Uu = {
	title: "スキル",
	options: {
		requiredWeaponTypeId1: "必要武器タイプ1",
		requiredWeaponTypeId2: "必要武器タイプ2",
		mpCost: "MP消費",
		tpCost: "TP消費"
	}
}, Wu = {
	title: "",
	options: {
		scope: "範囲",
		speed: "速度補正",
		successRate: "成功率"
	}
}, Gu = (e = {}) => ({
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
	damage: z(e.damage ?? {}),
	effects: [],
	price: 0
}), Ku = 1, qu = 2, Ju = 3, Yu = 4, Xu = 5, Zu = 6, Qu = 7, $u = 8, ed = 9, td = 10, nd = 11, rd = 12, id = 13, ad = 14, od = (e) => e.scope === 11, sd = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12 || e === 3 || e === 11, cd = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12, ld = ({ scope: e }) => e === 1 || e === 2 || e === 3 || e === 4 || e === 5 || e === 6 || e === 14, ud = ({ scope: e }) => e === 7 || e === 8 || e === 9 || e === 10 || e === 12 || e === 13 || e === 14 || e === 11, dd = ({ scope: e }) => e === 9 || e === 10, fd = ({ scope: e }) => e === 7 || e === 8 || e === 14 || e === 11, pd = ({ scope: e }) => e === 14, md = (e = {}) => ({
	stypeId: e.stypeId ?? 0,
	requiredWtypeId1: e.requiredWtypeId1 ?? 0,
	requiredWtypeId2: e.requiredWtypeId2 ?? 0,
	animationId: e.animationId ?? 0,
	damage: z(e.damage ?? {}),
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
}), hd = (e) => e.occasion === 0 || e.occasion === 1, gd = (e) => e.occasion === 0 || e.occasion === 2, _d = (e) => yo({
	battlerName: e.image,
	characterName: e.image,
	faceName: e.image,
	name: e.text,
	profile: e.text,
	nickname: e.text,
	note: e.note
}), vd = (e) => Ol({
	name: e.text,
	note: e.note
}), yd = (e) => Ql({
	name: e.text,
	note: e.note,
	description: e.text
}), bd = (e) => xo({
	name: e.text,
	note: e.note,
	description: e.text
}), xd = (e) => Vl({
	name: e.text,
	note: e.note,
	battlerName: e.image
}), Sd = (e) => Xl({
	name: e.text,
	note: e.note,
	message1: e.text,
	message2: e.text,
	message3: e.text,
	message4: e.text
}), Cd = (e) => md({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text,
	message1: e.text,
	message2: e.text
}), wd = (e) => Gu({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text
}), Td = (e, t) => {
	let n = L(e);
	return Math.floor(t.mpCost * n);
}, Ed = (e, t, n) => {
	let r = Td(t, n);
	return e.mp >= r && e.tp >= n.tpCost;
}, Dd = (e, t) => t.requiredWtypeId1 === 0 && t.requiredWtypeId2 === 0 || e.length !== 0 && e.some(((e) => e.wtypeId === t.requiredWtypeId1 || e.wtypeId === t.requiredWtypeId2)), Od = (e, t) => e.some(((e) => e.code === 42 && e.dataId === t.stypeId || e.code === 44 && e.dataId === t.id)), U = (e) => e.filter(kd), kd = (e) => e.code === 42 || e.code === 23 && e.dataId === 4 || e.code === 44, W = (e, t, n, r) => {
	if (t.tp < n.tpCost) return !1;
	let i = Math.floor(n.mpCost * e);
	return !(t.mp < i) && !Od(r, n);
}, Ad = (e, t, n, r) => {
	let i = e.filter(((e) => Dd(n, e)));
	return i.length === 0 ? [] : Md(i, t, r);
}, jd = (e, t, n, r) => {
	let i = U(t), a = L(i);
	return e.filter(((e) => {
		let t = r(e);
		return !!t && W(a, n, t, i);
	}));
}, Md = (e, t, n) => {
	let r = U(t), i = L(r);
	return e.filter(((e) => W(i, n, e, r)));
}, Nd = (e, t, n) => {
	let r = U(t), i = L(r);
	return e.map(((e) => ({
		skill: e,
		usable: W(i, n, e, r)
	})));
}, Pd = (e, t) => G(e.note, ((n, r) => t(n, r, e))), Fd = (e) => G(e, ((e, t) => ({
	key: e,
	value: t
}))), G = (e, t) => Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g), ((e) => t(e[1], e[2]))), Id = (e, t = "\n") => [...e.items.map(((e) => `<${e.key}:${e.value}>`)), e.note].join(t).trim(), Ld = (e) => ({
	note: Rd(e),
	items: Fd(e)
}), Rd = (e) => {
	if (e.length >= 3e4) throw Error("Note text is too long. Please shorten it.");
	return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, zd = (e, t) => `<${e}:${t}>`, Bd = (e, t, n = "\n") => {
	let r = Ld(e), i = r.items.map(((e) => ({
		key: e.key,
		value: t(e)
	})));
	return Id({
		note: r.note,
		items: i
	}, n);
}, Vd = (e, t) => {
	let n = Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).find(((e) => e[1] === t));
	return n ? n[2] : void 0;
}, Hd = (e, t, n) => e.replace(/<([^<>:]{1,100}):([^>]{1,1000})>/g, ((e, r) => r === t ? zd(r, n) : e)), Ud = (e) => Array.from(e.note.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).map(((t) => ({
	key: t[1],
	value: t[2],
	id: e.id,
	name: e.name
}))), Wd = (e, t, n = "\n") => {
	let r = Ld(e), i = r.items.reduce(((e, n) => {
		let r = t.isReplaceTargetNote(n), i = r ? {
			key: n.key,
			value: t.replaceText(n.value) ?? n.value
		} : n;
		return e.items.push(i), e.hasTarget = e.hasTarget || r, e;
	}), {
		hasTarget: !1,
		items: []
	});
	return i.hasTarget ? Id({
		note: r.note,
		items: i.items
	}, n) : e;
}, Gd = "data", Kd = "actor", qd = "map", Jd = "enemy", Yd = "state", Xd = "skill", Zd = "item", Qd = "weapon", $d = "armor", ef = "class", tf = "common_event", nf = "troop", rf = (e) => [
	af(e.elementRate),
	of(e.debuffRate),
	sf(e.stateRate),
	cf(e.stateResist),
	lf(e.regularParam),
	uf(e.extraParam),
	df(e.specialParam),
	ff(e.attackElement),
	pf(e.attackState),
	mf(e.attackSpeed),
	hf(e.attackTimes),
	gf(e.attackSkill),
	_f(e.skillTypeAdd),
	vf(e.skillTypeSeal),
	yf(e.skillAdd),
	bf(e.skillSeal),
	xf(e.equipWeaponType),
	Sf(e.equipArmorType),
	Cf(e.equipLock),
	wf(e.equipSeal),
	Tf(e.slotType),
	Ef(e.actionPlus),
	Df(e.specialFlag),
	Of(e.collaps),
	kf(e.partyAbility)
], af = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 11,
	dataSource: Mf()
}), of = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 12,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), sf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 13,
	dataSource: Af()
}), cf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 14,
	dataSource: Af()
}), lf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 21,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), uf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 22,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), df = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 23,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), ff = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 31,
	dataSource: Mf()
}), pf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 32,
	dataSource: Af()
}), mf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 33
}), hf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 34
}), gf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 35,
	dataSource: jf()
}), _f = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 41,
	dataSource: Nf()
}), vf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 42,
	dataSource: Nf()
}), yf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 43,
	dataSource: jf()
}), bf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 44,
	dataSource: jf()
}), xf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 51,
	dataSource: Pf()
}), Sf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 52,
	dataSource: Ff()
}), Cf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 53,
	dataSource: If()
}), wf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 54,
	dataSource: If()
}), Tf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 55,
	dataSource: If()
}), Ef = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 61
}), Df = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 62,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), Of = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 63,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), kf = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 64,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), Af = () => ({
	author: "rmmz",
	module: "data",
	kind: "state"
}), jf = () => ({
	author: "rmmz",
	module: "data",
	kind: "skill"
}), Mf = () => ({
	author: "rmmz",
	module: "system",
	kind: "elements"
}), Nf = () => ({
	author: "rmmz",
	module: "system",
	kind: "skillTypes"
}), Pf = () => ({
	author: "rmmz",
	module: "system",
	kind: "weaponTypes"
}), Ff = () => ({
	author: "rmmz",
	module: "system",
	kind: "armorTypes"
}), If = () => ({
	author: "rmmz",
	module: "system",
	kind: "equipTypes"
}), Lf = {
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
}, Rf = () => ({
	rpg: {
		damage: Zl,
		data: vo,
		traits: Oc,
		itemEffect: zu
	},
	global: Lf
}), zf = [
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
], Bf = [
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
], Vf = [
	"SceneManager",
	"AudioManager",
	"ImageManager",
	"DataManager",
	"PluginManager"
], Hf = ["Math.max", "Math.min"], Uf = (e) => K(e, zf) || K(e, Bf) || K(e, Vf) || K(e, Hf), K = (e, t) => t.some(((t) => e.includes(t))), Wf = (e = {}) => ({
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
}), Gf = (e = {}) => [
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
], Kf = (e) => ({
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
}), qf = (e) => ({
	item: Jf(e),
	skill: Yf(e),
	equip: Xf(e),
	status: Zf(e),
	formation: Qf(e),
	save: $f(e)
}), Jf = (e) => e.menuCommands[0], Yf = (e) => e.menuCommands[1], Xf = (e) => e.menuCommands[2], Zf = (e) => e.menuCommands[3], Qf = (e) => e.menuCommands[4], $f = (e) => e.menuCommands[5], ep = (e) => e.itemCategories[0], tp = (e) => e.itemCategories[1], np = (e) => e.itemCategories[2], rp = (e) => e.itemCategories[3], ip = (e = {}) => [
	e.item ?? !0,
	e.weapon ?? !0,
	e.armor ?? !0,
	e.keyItem ?? !0
], ap = (e) => ({
	item: e[0],
	weapon: e[1],
	armor: e[2],
	keyItem: e[3]
}), op = (e = {}) => [
	e.item ?? !0,
	e.skill ?? !0,
	e.equip ?? !0,
	e.status ?? !0,
	e.formation ?? !0,
	e.save ?? !0
], sp = (e) => ({
	item: e[0],
	skill: e[1],
	equip: e[2],
	status: e[3],
	formation: e[4],
	save: e[5]
}), cp = (e = {}) => ({
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
}), lp = (e = {}) => ({
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0,
	partyMembers: e.partyMembers ? Array.from(e.partyMembers) : [1]
}), q = (e, t) => ({
	name: e,
	id: t
}), up = (e) => e.variables.map(q), dp = (e) => e.elements.map(q), fp = (e) => e.equipTypes.map(q), pp = (e) => e.skillTypes.map(q), mp = (e) => e.weaponTypes.map(q), hp = (e) => e.armorTypes.map(q), gp = (e) => e.switches.map(q), _p = (e, t) => [
	yp(e, t),
	bp(e, t),
	wp(e, t),
	xp(e, t),
	vp(e, t),
	Sp(e, t),
	Cp(e, t)
], vp = (e, t) => ({
	items: hp(e),
	label: t.options.armorTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "armorTypes"
	}
}), yp = (e, t) => ({
	items: dp(e),
	label: t.options.elements,
	source: {
		author: "rmmz",
		module: "system",
		kind: "elements"
	}
}), bp = (e, t) => ({
	items: fp(e),
	label: t.options.equipTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "equipTypes"
	}
}), xp = (e, t) => ({
	items: pp(e),
	label: t.options.skillTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "skillTypes"
	}
}), Sp = (e, t) => ({
	items: up(e),
	label: t.options.variables,
	source: {
		author: "rmmz",
		module: "system",
		kind: "variable"
	}
}), Cp = (e, t) => ({
	items: gp(e),
	label: t.options.switches,
	source: {
		author: "rmmz",
		module: "system",
		kind: "switch"
	}
}), wp = (e, t) => ({
	items: mp(e),
	label: t.options.weaponTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "weaponTypes"
	}
}), Tp = (e) => ({
	armorTypes: J(e.armorTypes),
	elements: J(e.elements),
	equipTypes: J(e.equipTypes),
	weaponTypes: J(e.weaponTypes),
	skillTypes: J(e.skillTypes),
	variables: J(e.variables),
	switches: J(e.switches)
}), J = (e) => e ? [...e] : [], Y = (e, t) => typeof e == "string" ? e : t, Ep = (e) => ({
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
}), Dp = (e) => ({
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
}), Op = (e) => e.terms.params.map(((e, t) => ({
	name: e,
	id: t
}))), kp = (e) => [
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
], Ap = (e) => ({
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
}), jp = (e) => [
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
], X = (e) => ({
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
}), Mp = (e) => Np(e, ""), Np = (e, t) => [
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
], Pp = (e) => ({
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
}), Fp = (e) => ({
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
}), Ip = (e = {}) => ({
	jsonFormatLevel: e.jsonFormatLevel ?? 0,
	messageWidth1: e.messageWidth1 ?? 816,
	messageWidth2: e.messageWidth2 ?? 816
}), Lp = (e) => ({
	gameTitle: e.texts?.gameTitle ?? "",
	currencyUnit: e.texts?.currencyUnit ?? "",
	armorTypes: $(e.dataNames?.armorTypes),
	equipTypes: $(e.dataNames?.equipTypes),
	elements: $(e.dataNames?.elements),
	skillTypes: $(e.dataNames?.skillTypes),
	weaponTypes: $(e.dataNames?.weaponTypes),
	switches: $(e.dataNames?.switches),
	variables: $(e.dataNames?.variables),
	terms: Rp(e.terms ?? {})
}), Q = (e) => {
	let n = zp(e.size);
	return {
		...cp(e.options),
		titleCommandWindow: Fp(e.titleCommandWindow ?? {}),
		currencyUnit: e.texts?.currencyUnit ?? "",
		gameTitle: e.texts?.gameTitle ?? "",
		sounds: Gf(e.sounds),
		editor: Ip(e.editing),
		advanced: Wf(e.advanced),
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
		testBattlers: Bp(e.battleTest?.testBattlers, Vp),
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
		terms: Rp(e.terms ?? {}),
		itemCategories: ip(e.itemCategories),
		partyMembers: $(e.gameInit?.partyMembers),
		battlerHue: 0,
		menuCommands: op(e.menuCommands)
	};
}, Rp = (e) => ({
	basic: jp(e.basic ?? {}),
	commands: Mp(e.commands ?? {}),
	params: kp(e.params ?? {}),
	messages: Ep(e.messages ?? {})
}), $ = (e) => e ? [...e] : [], zp = (e) => e ? {
	tileSize: e.tileSize ?? 48,
	faceSize: e.faceSize ?? 144,
	iconSize: e.iconSize ?? 32
} : {
	tileSize: 48,
	faceSize: 144,
	iconSize: 32
}, Bp = (e, t) => e ? e.map(t) : [], Vp = (e) => e ? {
	actorId: e.actorId,
	equips: $(e.equips),
	level: e.level
} : {
	actorId: 0,
	equips: [],
	level: 1
}, Hp = {
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
}, Up = {
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
}, Wp = {
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
}, Gp = {
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
}, Kp = (e, t) => {
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
			messages: Qp(e.terms.messages, n),
			basic: qp(e.terms.basic, n),
			params: Jp(e.terms.params, n),
			commands: Yp(e.terms.commands, n)
		}
	};
}, qp = (e, t) => ({
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
}), Jp = (e, t) => ({
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
}), Yp = (e, t) => ({
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
}), Xp = (e) => ({
	gameTitle: e.gameTitle,
	currencyUnit: e.currencyUnit,
	equipTypes: [...e.equipTypes],
	armorTypes: [...e.armorTypes],
	weaponTypes: [...e.weaponTypes],
	elements: [...e.elements],
	skillTypes: [...e.skillTypes],
	terms: {
		basic: X(e.terms.basic),
		commands: Pp(e.terms.commands),
		messages: Ep(e.terms.messages),
		params: Ap(e.terms.params)
	}
}), Zp = (e, t) => Q({
	locale: e.locale,
	versionId: e.versionId,
	options: e,
	advanced: e.advanced,
	vehicles: e,
	editing: e.editor,
	sounds: Kf(e.sounds),
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
	itemCategories: ap(e.itemCategories),
	menuCommands: sp(e.menuCommands),
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
}), Qp = (e, t) => ({
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
}), $p = (e = Q({})) => ({
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
		messages: Dp(e.terms.messages)
	}
}), em = (e) => Q({
	versionId: e.versionId,
	menuCommands: qf(e),
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
	sounds: Kf(e.sounds),
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
		basic: X(e.terms.basic),
		commands: Pp(e.terms.commands),
		params: Ap(e.terms.params),
		messages: e.terms.messages
	}
}), tm = ({ audio: e, image: n, systemText: r, switches: i, variables: a }) => Q({
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
	terms: nm(r),
	sounds: rm(e)
}), nm = (e) => ({
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
}), rm = (e) => {
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
}, im = (e) => ({
	...e.text ? { text: e.text } : {},
	...e.desc ? { desc: e.desc } : {}
}), am = {
	LEFT: 4,
	UP: 8,
	DOWN: 2,
	RIGHT: 6
}, om = (e) => {
	let t = e.split("/");
	return t[t.length - 1];
};
export { Yf as $, rs as $a, Pr as $c, je as $d, Zs as $i, Pn as $l, Ql as $n, Ra as $o, Jc as $r, Li as $s, hd as $t, Mt as $u, Tp as A, ms as Aa, Qr as Ac, nt as Ad, r as Af, vc as Ai, rr as Al, zu as An, yo as Ao, dl as Ar, la as As, Hd as At, rn as Au, cp as B, Zo as Ba, zr as Bc, qe as Bd, uc as Bi, Xn as Bl, du as Bn, T as Bo, ol as Br, Xi as Bs, Ad as Bt, Xt as Bu, jp as C, ws as Ca, _ as Cc, pt as Cd, re as Cf, Oc as Ci, dr as Cl, cd as Cn, To as Co, Cl as Cr, ha as Cs, nf as Ct, sn as Cu, Op as D, gs as Da, oi as Dc, ot as Dd, ie as Df, xc as Di, or as Dl, Hu as Dn, Co as Do, bl as Dr, C as Ds, Vd as Dt, en as Du, Ap as E, Cs as Ea, li as Ec, it as Ed, ne as Ef, bc as Ei, cr as El, Uu as En, So as Eo, wl as Er, S as Es, zd as Et, un as Eu, pp as F, xs as Fa, ei as Fc, et as Fd, te as Ff, pc as Fi, Qn as Fl, Su as Fn, io as Fo, ml as Fr, ra as Fs, Pd as Ft, Kt as Fu, qf as G, Ho as Ga, Kr as Gc, He as Gd, oc as Gi, Hn as Gl, su as Gn, Za as Go, il as Gr, Ki as Gs, _d as Gt, zt as Gu, sp as H, Qo as Ha, Rr as Hc, Ve as Hd, sc as Hi, Wn as Hl, vu as Hn, Ka as Ho, al as Hr, ea as Hs, Od as Ht, Wt as Hu, gp as I, Ss as Ia, ti as Ic, Ye as Id, c as If, gc as Ii, Yn as Il, fu as In, ro as Io, _l as Ir, ta as Is, Ed as It, Gt as Iu, Qf as J, ss as Ja, Ur as Jc, Le as Jd, tc as Ji, In as Jl, nu as Jn, to as Jo, rl as Jr, zi as Js, xd as Jt, Lt as Ju, np as K, as as Ka, Xr as Kc, Be as Kd, ac as Ki, Un as Kl, lu as Kn, Ja as Ko, tl as Kr, Wi as Ks, bd as Kt, Vt as Ku, up as L, ls as La, ai as Lc, Xe as Ld, hc as Li, qn as Ll, bu as Ln, Qa as Lo, vl as Lr, na as Ls, U as Lt, qt as Lu, hp as M, bs as Ma, ri as Mc, d as Md, s as Mf, mc as Mi, $n as Ml, hu as Mn, vo as Mo, ll as Mr, aa as Ms, Ld as Mt, on as Mu, dp as N, _s as Na, si as Nc, $e as Nd, o as Nf, _c as Ni, nr as Nl, gu as Nn, so as No, gl as Nr, ca as Ns, Fd as Nt, $t as Nu, Dp as O, ys as Oa, ni as Oc, at as Od, oe as Of, Cc as Oi, ar as Ol, Vu as On, Do as Oo, hl as Or, ua as Os, Ud as Ot, tn as Ou, fp as P, vs as Pa, ii as Pc, tt as Pd, i as Pf, fc as Pi, tr as Pl, pu as Pn, ao as Po, pl as Pr, ia as Ps, G as Pt, Qt as Pu, $f as Q, ns as Qa, Ir as Qc, Ie as Qd, Qs as Qi, zn as Ql, $l as Qn, za as Qo, Yc as Qr, Ri as Qs, yd as Qt, Ft as Qu, mp as R, Yo as Ra, Yr as Rc, Ze as Rd, lc as Ri, Zn as Rl, xu as Rn, $a as Ro, cl as Rr, Qi as Rs, Md as Rt, Jt as Ru, Pp as S, Ds as Sa, bi as Sc, ft as Sd, ue as Sf, kc as Si, lr as Sl, ld as Sn, wo as So, kl as Sr, ma as Ss, Yd as St, dn as Su, kp as T, Es as Ta, ci as Tc, lt as Td, se as Tf, Tc as Ti, fr as Tl, Wu as Tn, Eo as To, xl as Tr, da as Ts, Wd as Tt, ln as Tu, ip as U, ds as Ua, Vr as Uc, We as Ud, ec as Ui, Vn as Ul, mu as Un, Xa as Uo, L as Ur, Yi as Us, Nd as Ut, Ht as Uu, op as V, Xo as Va, Br as Vc, Ke as Vd, cc as Vi, Jn as Vl, _u as Vn, E as Vo, el as Vr, $i as Vs, Dd as Vt, Zt as Vu, ap as W, Uo as Wa, Hr as Wc, Ue as Wd, rc as Wi, Gn as Wl, yu as Wn, qa as Wo, nl as Wr, qi as Ws, Td as Wt, Ut as Wu, Jf as X, Ko as Xa, Jr as Xc, Pe as Xd, $s as Xi, Ln as Xl, ou as Xn, Ga as Xo, Xc as Xr, Vi as Xs, Cd as Xt, Rt as Xu, ep as Y, is as Ya, Wr as Yc, Fe as Yd, ic as Yi, Rn as Yl, eu as Yn, Ua as Yo, Qc as Yr, Bi as Ys, wd as Yt, It as Yu, rp as Z, fs as Za, Fr as Zc, Re as Zd, Xs as Zi, p as Zl, au as Zn, Ba as Zo, Zc as Zr, Hi as Zs, Sd as Zt, Pt as Zu, Ip as _, Ns as _a, hi as _c, gt as _d, le as _f, P as _i, yr as _l, fd as _n, Mo as _o, Ll as _r, wa as _s, tf as _t, _n as _u, $p as a, Hs as aa, Fi as ac, jt as ad, Te as af, Hc as ai, jr as al, id as an, Wo as ao, R as ar, Na as as, Uf as at, Dn as au, Mp as b, Rs as ba, Ci as bc, ct as bd, ce as bf, j as bi, pr as bl, ud as bn, Ao as bo, Nl as br, ya as bs, qd as bt, hn as bu, Qp as c, zs as ca, wi as cc, Ct as cd, Se as cf, zc as ci, wr as cl, Yu as cn, Vo as co, Wl as cr, Da as cs, Vf as ct, bn as cu, Hp as d, Ms as da, Ei as dc, St as dd, ve as df, Ac as di, Sr as dl, nd as dn, Io as do, zl as dr, ka as ds, Lf as dt, Cn as du, Js as ea, Ii as ec, kt as ed, Ae as ef, Kc as ei, Mr as el, gd as en, es as eo, z as er, Fa as es, Zf as et, An as eu, Up as f, Fs as fa, ki as fc, bt as fd, ge as ff, Fc as fi, xr as fl, Qu as fn, zo as fo, Bl as fr, Oa as fs, rf as ft, vn as fu, Lp as g, Is as ga, mi as gc, _t as gd, _e as gf, Nc as gi, hr as gl, od as gn, Lo as go, Ml as gr, _a as gs, ef as gt, pn as gu, Q as h, ks as ha, vi as hc, vt as hd, ye as hf, Pc as hi, vr as hl, Ku as hn, Po as ho, Fl as hr, va as hs, $d as ht, Tn as hu, em as i, Ks as ia, Ni as ic, Nt as id, we as if, qc as ii, kr as il, td as in, us as io, ql as ir, ja as is, Wf as it, Nn as iu, _p as j, ps as ja, $r as jc, Je as jd, ee as jf, yc as ji, er as jl, Cu as jn, bo as jo, ul as jr, oa as js, Id as jt, an as ju, Ep as k, hs as ka, Zr as kc, rt as kd, a as kf, Sc as ki, ir as kl, Bu as kn, xo as ko, fl as kr, fa as ks, Bd as kt, nn as ku, Zp as l, Vs as la, Ti as lc, xt as ld, be as lf, Bc as li, Tr as ll, Xu as ln, Bo as lo, Hl as lr, Ta as ls, Hf as lt, xn as lu, Gp as m, As as ma, _i as mc, f as md, he as mf, jc as mi, _r as ml, rd as mn, Fo as mo, Pl as mr, Sa as ms, Kd as mt, wn as mu, am as n, Gs as na, ji as nc, Ot as nd, Oe as nf, I as ni, Dr as nl, ad as nn, cs as no, Gl as nr, La as ns, Gf as nt, Fn as nu, tm as o, Us as oa, Oi as oc, Et as od, Ee as of, Vc as oi, Or as ol, qu as on, Go as oo, Kl as or, Aa as os, Bf as ot, kn as ou, Wp as p, js as pa, gi as pc, yt as pd, me as pf, Mc as pi, gr as pl, ed as pn, Ro as po, Vl as pr, ba as ps, Gd as pt, yn as pu, Xf as q, os as qa, qr as qc, Ne as qd, nc as qi, Bn as ql, cu as qn, Ya as qo, $c as qr, Ui as qs, vd as qt, Bt as qu, im as r, Ys as ra, Pi as rc, At as rd, ke as rf, Wc as ri, Ar as rl, $u as rn, Jo as ro, Jl as rr, Pa as rs, Kf as rt, jn as ru, Xp as s, qs as sa, Ai as sc, Tt as sd, Ce as sf, Rc as si, Er as sl, Ju as sn, qo as so, Xl as sr, Ma as ss, zf as st, On as su, om as t, Ws as ta, Mi as tc, Dt as td, De as tf, Gc as ti, Nr as tl, md as tn, ts as to, Zl as tr, Ia as ts, tp as tt, Mn as tu, Kp as u, Bs as ua, Di as uc, wt as ud, xe as uf, Lc as ui, Cr as ul, Zu as un, No as uo, Ul as ur, Ea as us, Rf as ut, Sn as uu, Z as v, Ps as va, xi as vc, st as vd, pe as vf, A as vi, br as vl, dd as vn, jo as vo, Il as vr, Ca as vs, Jd as vt, gn as vu, X as w, Ts as wa, ui as wc, dt as wd, ae as wf, wc as wi, ur as wl, Gu as wn, ko as wo, Tl as wr, pa as ws, Qd as wt, cn as wu, Np as x, Os as xa, yi as xc, ut as xd, fe as xf, M as xi, sr as xl, sd as xn, Oo as xo, Ol as xr, xa as xs, Xd as xt, fn as xu, Fp as y, Ls as ya, Si as yc, mt as yd, de as yf, N as yi, mr as yl, pd as yn, D as yo, Rl as yr, w as ys, Zd as yt, mn as yu, lp as z, $o as za, Gr as zc, Qe as zd, dc as zi, Kn as zl, uu as zn, eo as zo, sl as zr, Zi as zs, jd as zt, Yt as zu };
