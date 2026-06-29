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
	code: 117,
	indent: t,
	parameters: Ot(e ?? {})
}), Dt = (e) => ({ eventId: e[0] }), Ot = (e) => [e.eventId ?? 0], kt = (e) => ({
	min: e[0],
	max: e[1],
	value: e[2]
}), At = (e) => [
	e.min,
	e.max,
	e.value
], jt = (e, t = 0) => ({
	code: 121,
	indent: t,
	parameters: At(e)
}), Mt = (e, t = 0) => ({
	code: 103,
	parameters: [e.variableId, e.maxDigits],
	indent: t
}), Nt = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], Pt = (e) => ({
	variableId: e[0],
	maxDigits: e[1]
}), Ft = (e) => e.parameters[3] === 1, It = (e) => ({
	operation: e[1],
	itemId: e[0],
	value: e[3],
	operand: e[2]
}), Lt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		e.operation,
		e.operand,
		e.value
	]
}), Rt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		0,
		e.value
	]
}), zt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		1,
		e.variableId
	]
}), Bt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		0,
		e.value
	]
}), Vt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		1,
		e.variableId
	]
}), Ht = (e) => e.parameters[2] === 1, Ut = (e) => e.parameters[0], Wt = (e) => ({
	operation: e[1],
	weaponId: e[0],
	value: e[3],
	operand: e[2],
	includesEquip: e[4]
}), Gt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		e.operation,
		e.operand,
		e.value,
		e.includesEquip
	]
}), Kt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		0,
		e.value,
		!1
	]
}), qt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		1,
		e.variableId,
		!1
	]
}), Jt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		0,
		e.value,
		!1
	]
}), Yt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		1,
		e.variableId,
		!1
	]
}), Xt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		0,
		e.value,
		!1
	]
}), Zt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		1,
		e.variableId,
		!1
	]
}), Qt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		0,
		e.value,
		!1
	]
}), $t = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		1,
		e.variableId,
		!1
	]
}), en = (e, t = 0) => ({
	code: 104,
	parameters: [e.variableId, e.itemType],
	indent: t
}), tn = (e) => ({
	variableId: e[0],
	itemType: e[1]
}), nn = (e, t = 0) => ({
	code: 284,
	indent: t,
	parameters: [
		e.parallaxName,
		e.loopX,
		e.loopY,
		e.sx,
		e.sy
	]
}), rn = (e, t = 0) => ({
	code: 204,
	indent: t,
	parameters: [
		e.direction,
		e.distance,
		e.speed,
		e.waiting
	]
}), an = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [0]
}), on = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [1]
}), sn = (e = {}, t = 0) => ({
	code: 282,
	indent: t,
	parameters: [e.tilesetId ?? 0]
}), cn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		1,
		e.x,
		e.y
	]
}), ln = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		0,
		e.x,
		e.y
	]
}), un = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		1,
		e.x,
		e.y
	]
}), dn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		0,
		e.x,
		e.y
	]
}), fn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		1,
		e.x,
		e.y
	]
}), pn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		0,
		e.x,
		e.y
	]
}), mn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		gn[e.layer] ?? 2,
		1,
		e.x,
		e.y
	]
}), hn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		gn[e.layer] ?? 2,
		0,
		e.x,
		e.y
	]
}), gn = {
	1: 2,
	2: 3,
	3: 4,
	4: 5
}, _n = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		0,
		e.x,
		e.y,
		e.direction
	]
}), vn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		1,
		e.xVariableId,
		e.yVariableId,
		e.direction
	]
}), yn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		2,
		e.exchangeCharacterId,
		0,
		e.direction
	]
}), bn = (e = 0) => ({
	code: 135,
	parameters: [1],
	indent: e
}), xn = (e = 0) => ({
	code: 135,
	parameters: [0],
	indent: e
}), Sn = (e = 0) => ({
	code: 134,
	parameters: [1],
	indent: e
}), Cn = (e = 0) => ({
	code: 134,
	parameters: [0],
	indent: e
}), wn = (e = 0) => ({
	code: 137,
	parameters: [1],
	indent: e
}), Tn = (e = 0) => ({
	code: 137,
	parameters: [0],
	indent: e
}), m = (e) => [e], En = (e) => ({ comment: e[0] }), Dn = (e, t = 0) => ({
	code: 108,
	indent: t,
	parameters: m(e)
}), On = (e, t = 0) => ({
	code: 408,
	indent: t,
	parameters: m(e)
}), kn = (e, t = 0) => e.map(((e, n) => n === 0 ? Dn(e, t) : On(e, t))), An = (e = {}) => [e?.speed ?? 4, e?.skip ?? !1], jn = (e) => ({
	speed: e[0],
	skip: e[1]
}), Mn = (e = {}, t = 0) => ({
	code: 105,
	indent: t,
	parameters: An(e)
}), Nn = (e = "") => [e], Pn = (e) => ({ content: e[0] }), Fn = (e = "", t = 0) => ({
	code: 405,
	indent: t ?? 0,
	parameters: Nn(e)
}), In = (e, t = 0) => ({
	code: 402,
	indent: t,
	parameters: [e?.index ?? 0, e?.name ?? ""]
}), Ln = (e) => ({
	index: e[0],
	name: e[1]
}), Rn = (e) => [e.index ?? 0, e.name ?? ""], zn = (e) => ({
	choices: e[0],
	cancelType: e[1],
	defaultType: e[2],
	positionType: e[3],
	background: e[4]
}), Bn = (e) => [
	e.choices ?? [],
	e.cancelType ?? 0,
	e.defaultType ?? 0,
	e.positionType ?? 2,
	e.background ?? 0
], Vn = (e, t = 0) => ({
	code: 102,
	indent: t,
	parameters: [
		e?.choices ?? [],
		e?.cancelType ?? 0,
		e?.defaultType ?? 0,
		e?.positionType ?? 2,
		e?.background ?? 0
	]
}), Hn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [
		[...e.parameters[0]],
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), Un = (e, t = 0) => ({
	code: 101,
	indent: t,
	parameters: [
		e?.facename ?? "",
		e?.faceIndex ?? 0,
		e?.background ?? 0,
		e?.positionType ?? 2,
		e?.speakerName ?? ""
	]
}), Wn = (e) => ({
	facename: e[0],
	faceIndex: e[1],
	background: e[2],
	positionType: e[3],
	speakerName: e[4] ?? ""
}), Gn = (e) => [
	e.facename,
	e.faceIndex,
	e.background,
	e.positionType,
	e.speakerName
], Kn = (e, t = 0) => ({
	code: 401,
	indent: t,
	parameters: [e]
}), qn = (e, t = 0) => ({
	code: 261,
	indent: t,
	parameters: [e.filename]
}), Jn = (e) => ({ filename: e[0] }), Yn = ({ args: e = {}, commandName: t, commandTitle: n = "", pluginName: r }, i = 0) => ({
	code: 357,
	indent: i,
	parameters: [
		r,
		t,
		n,
		{ ...e }
	]
}), Xn = (e) => ({
	pluginName: e[0],
	commandName: e[1],
	commandTitle: e[2],
	args: { ...e[3] }
}), Zn = (e, t = 0) => ({
	code: 129,
	parameters: [0, e.actorId],
	indent: t
}), Qn = (e, t = 0) => ({
	code: 129,
	parameters: [1, e.actorId],
	indent: t
}), $n = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		0,
		e.value
	],
	indent: t
}), er = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		0,
		e.value
	],
	indent: t
}), tr = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		1,
		e.variableId
	],
	indent: t
}), nr = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		1,
		e.variableId
	],
	indent: t
}), rr = ({ pictureId: e = 0, origin: t = 0, name: n = "", x: r = 0, y: i = 0, scaleX: a = 100, scaleY: o = 100, opacity: s = 255, blendMode: c = 0 }) => ({
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
}), ir = ({ pictureId: e, origin: t, x: n, y: r, scaleX: i, scaleY: a, opacity: o, blendMode: s, wait: c = !1, easingType: l = 0 }) => ({
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
}), ar = (e, t = 0) => ({
	code: 236,
	indent: t,
	parameters: [
		e.type ?? "none",
		e.power ?? 0,
		e.duration ?? 0,
		e.wait ?? !1
	]
}), or = (e = 0) => ({
	code: 222,
	indent: e,
	parameters: []
}), sr = (e = 0) => ({
	code: 221,
	indent: e,
	parameters: []
}), cr = (e, t = 0) => ({
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
}), lr = (e, t = 0) => ({
	code: 225,
	indent: t,
	parameters: [
		e.power ?? 5,
		e.speed ?? 5,
		e.duration ?? 60,
		e.wait ?? !1
	]
}), ur = (e, t = 0) => ({
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
}), dr = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), fr = (e, t = 0) => ({
	code: 655,
	indent: t,
	parameters: [e]
}), pr = (e, t = 0) => e.map(((e, n) => n === 0 ? dr(e, t) : fr(e, t))), mr = 1, hr = 0, h = {
	item: 0,
	weapon: 1,
	armors: 2
}, gr = ({ goods: e, buyOnly: t = !1 }, n = 0) => e.map(((e, r) => {
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
})), _r = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 0)
}), vr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 1)
}), yr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 2)
}), br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 3)
}), xr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 12)
}), Sr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 4)
}), Cr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 5)
}), wr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 6)
}), Tr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 7)
}), Er = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 8)
}), Dr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 9)
}), Or = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 10)
}), kr = (e, t = 0) => ({
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
], Ar = 0, jr = 1, Mr = 2, Nr = 3, Pr = 4, Fr = 0, Ir = 1, Lr = 2, Rr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 0)
}), zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 1)
}), Br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 10)
}), Vr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 2)
}), Hr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 3)
}), Ur = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 4)
}), Wr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 5)
}), Gr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 6)
}), Kr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 7)
}), qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 8)
}), Jr = (e, t = 0) => ({
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
], Yr = (e) => e.parameters[3] === 1, Xr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Zr(e)
}), Zr = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	1,
	e.variableId
], Qr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: ti(e)
}), $r = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: ni(e)
}), ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: ri(e)
}), ti = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	0,
	e.itemId
], ni = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	1,
	e.weaponId
], ri = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	2,
	e.armorId
], ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: ai(e)
}), ai = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	0,
	e.value
], v = {
	X: 0,
	Y: 1,
	DIRECTION: 2,
	SCREEN_X: 3,
	SCREEN_Y: 4
}, oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.X)
}), si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.Y)
}), ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.DIRECTION)
}), li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.SCREEN_X)
}), ui = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.SCREEN_Y)
}), di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.X)
}), fi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.Y)
}), pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.DIRECTION)
}), mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.SCREEN_X)
}), hi = (e, t = 0) => ({
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
], gi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 0)
}), _i = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 1)
}), vi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 2)
}), yi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 3)
}), b = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	7,
	t
], bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: xi(e)
}), xi = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	2,
	e.min,
	e.max
], Si = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), Ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 0)
}), wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 1)
}), Ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 2)
}), Ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 3)
}), Di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 4)
}), Oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 5)
}), ki = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 6)
}), Ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 7)
}), ji = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 8)
}), Mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 9)
}), x = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	7,
	t
], Ni = {
	USED_SKILL_ID: 0,
	USED_ITEM_ID: 1,
	ACTION_ACTOR_ID: 2,
	ACTION_ENEMY_INDEX: 3,
	TARGET_ACTOR_ID: 4,
	TARGET_ENEMY_INDEX: 5
}, Pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 0)
}), Fi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 1)
}), Ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 2)
}), Li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 3)
}), Ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 4)
}), zi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 5)
}), S = (e, t) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	8,
	t
], Bi = (e = 0) => ({
	code: 206,
	indent: e,
	parameters: []
}), Vi = (e, t = 0) => ({
	code: 323,
	indent: t,
	parameters: [
		e.vehicleId,
		e.characterImage,
		e.characterIndex
	]
}), Hi = (e, n = 0) => ({
	code: 140,
	indent: n,
	parameters: [e.vheicleId, t(e.bgm)]
}), Ui = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		0,
		e.mapId,
		e.x,
		e.y
	]
}), Wi = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		1,
		e.variableMapId,
		e.variableX,
		e.variableY
	]
}), Gi = 0, Ki = 1, qi = 2, Ji = (e) => e.code === 241 || e.code === 245 || e.code === 249 || e.code === 250 || e.code === 132 || e.code === 133 || e.code === 139, Yi = (e) => [...e], Xi = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: Yi(e.parameters)
}), Zi = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Qi = (e) => e.parameters.every(Zi), $i = (e) => ({
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
}), ea = (e) => {
	let t = e.trim();
	return /^\\[NnVv]\[\d+\]$/.test(t);
}, C = (e, t) => `\\${e}[${t}]`, w = (e, t) => t.map(((t, n) => ({
	text: t,
	controlChar: C(e, n)
}))), ta = (e) => w("N", e), na = (e) => w("V", e), ra = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
	char: e[1],
	id: parseInt(e[2], 10)
}))), ia = (e) => e.map(((e) => ({
	text: e.name,
	controlChar: C("N", e.id)
}))), aa = (e) => e.variables.map(((e, t) => ({
	text: e || "",
	controlChar: C("V", t)
}))).filter(((e) => e.text !== "")), oa = (e) => !!e, sa = (e, t, n) => ({
	data: e,
	eventId: t,
	pageIndex: n
}), ca = (e, t, n) => e.list.map(((e) => ({
	data: e,
	eventId: n.id,
	pageIndex: t
}))), T = (e, t) => e.pages.map(((n, r) => t(n, r, e))), la = (e, t) => e.events.filter(oa).map(((e) => T(e, t))), ua = (e, t) => e.events.filter(oa).flatMap(((e) => T(e, t))), da = (e, t) => e.map(((e) => T(e, t))), fa = (e, t) => e.flatMap(((e) => T(e, t))), pa = (e, t) => e.map(((e) => t(e, 0, e))), ma = (e) => la(e, ca).flat(2), ha = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	trigger: e.trigger ?? 0,
	list: e.list ?? [],
	switchId: e.switchId ?? 0
}), ga = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	members: e.members ?? [],
	pages: e.pages ?? []
}), _a = (e) => ({
	span: e.span ?? 0,
	conditions: ya(e.conditions ?? {}),
	list: e.list ?? []
}), va = (e = {}) => ({
	enemyId: e.enemyId ?? 0,
	x: e.x ?? 0,
	y: e.y ?? 0,
	hidden: e.hidden ?? !1
}), ya = (e = {}) => ({
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
}), ba = (e = {}) => ({
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
}), E = ({ id: e = 1, name: t = "", pages: n = [], note: r = "", x: i = 0, y: a = 0 } = {}) => ({
	id: e,
	name: t,
	pages: n,
	note: r,
	x: i,
	y: a
}), D = ({ characterIndex: e = 0, characterName: t = "", direction: n = 2, pattern: r = 0, tileId: i = 0 } = {}) => ({
	characterIndex: e,
	characterName: t,
	direction: n,
	pattern: r,
	tileId: i
}), O = ({ list: e = [], conditions: t = ba(), image: n = D(), moveFrequency: r = 5, directionFix: i = !1, moveRoute: a = {
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
}), xa = (e, t) => ({
	map: t,
	filename: `Map${e.id.toString().padStart(3, "0")}`,
	editingName: e.name
}), Sa = (e) => Ca({ events: [E({ pages: [O({ list: e })] })] }), Ca = (e = {}) => ({
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
}), wa = (e) => e.toString().padStart(3, "0"), Ta = (e = { id: 0 }) => ({
	name: e.name ?? wa(e.id),
	id: e.id,
	expanded: e.expanded ?? !1,
	order: e.order ?? 0,
	parentId: e.parentId ?? 0,
	scrollX: e.scrollX ?? 0,
	scrollY: e.scrollY ?? 0
}), Ea = (e, t) => e.map(((e) => e ? {
	...e,
	pages: Da(e, t)
} : null)), Da = (e, t) => e.pages.map(((e) => ({
	...e,
	list: t(e.list)
}))), Oa = (e, t) => [
	ka(e.skills, t),
	Aa(e.actors, t),
	ja(e.states, t),
	Ma(e.armors, t),
	Na(e.classes, t),
	Pa(e.enemies, t),
	Fa(e.items, t),
	Ia(e.weapons, t),
	La(e.commonEvents, t)
], ka = (e, t) => ({
	label: t.skill.title,
	items: e,
	source: {
		author: "rmmz",
		module: "data",
		kind: "skill"
	}
}), Aa = (e, t) => ({
	items: e,
	label: t.actor.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "actor"
	}
}), ja = (e, t) => ({
	items: e,
	label: t.state.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "state"
	}
}), Ma = (e, t) => ({
	items: e,
	label: t.armor.title,
	source: {
		author: "rmmz",
		kind: "armor",
		module: "data"
	}
}), Na = (e, t) => ({
	items: e,
	label: t.class.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "class"
	}
}), Pa = (e, t) => ({
	items: e,
	label: t.enemy.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "enemy"
	}
}), Fa = (e, t) => ({
	items: e,
	label: t.item.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "item"
	}
}), Ia = (e, t) => ({
	items: e,
	label: t.weapon.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "weapon"
	}
}), La = (e, t) => ({
	items: e,
	label: t.commonEvent.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "common_event"
	}
}), Ra = {
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
}, za = (e = {}) => ({
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
}), Ba = (e) => ({
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
}), Va = (e = {}) => ({
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
}), Ha = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ?? Wa(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), Ua = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: e.traits ?? [],
	note: e.note ?? "",
	params: e.params ? Ga(e.params) : Wa(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), Wa = () => [
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0]
], Ga = (e) => {
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
}, Ka = ({ mhp: e = 0, mmp: t = 0, atk: n = 0, def: r = 0, mat: i = 0, mdf: a = 0, agi: o = 0, luk: s = 0 }) => [
	e,
	t,
	n,
	r,
	i,
	a,
	o,
	s
], qa = (e) => {
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
}, Ja = (e = {}) => ({
	dataId: e.dataId ?? 0,
	denominator: e.denominator ?? 0,
	kind: e.kind ?? 0
}), Ya = (e = {}) => ({
	conditionParam1: e.conditionParam1 ?? 0,
	conditionParam2: e.conditionParam2 ?? 0,
	conditionType: e.conditionType ?? 0,
	rating: e.rating ?? 0,
	skillId: e.skillId ?? 0
}), Xa = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	battlerHue: e.battlerHue ?? 0,
	dropItems: e.dropItems?.map((() => Ja())) ?? [],
	exp: e.exp ?? 0,
	gold: e.gold ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ? [...e.params] : Ka({
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
}), Za = (e = {}) => ({
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
}), Qa = 11, $a = 12, eo = 13, to = 14, no = 21, ro = 22, io = 23, ao = 31, oo = 32, so = 33, co = 34, lo = 35, uo = 41, fo = 42, po = 43, mo = 44, ho = 51, go = 52, _o = 53, vo = 54, yo = 55, bo = 61, xo = 62, So = 63, Co = 64, wo = 0, To = 1, Eo = 2, Do = 3, Oo = (e, t) => ({
	items: ko(e.options, t),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), ko = (e, t) => [
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
], Ao = 0, jo = 1, Mo = 2, No = 3, Po = 4, Fo = 5, Io = 6, Lo = 7, Ro = 8, zo = 9, Bo = (e) => ({
	items: Vo(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), Vo = (e) => [
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
], Ho = (e, t) => {
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
}, Uo = 0, Wo = 1, Go = 2, Ko = 3, qo = 4, Jo = 5, Yo = 6, Xo = 7, Zo = (e) => ({
	items: Qo(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Qo = (e) => [
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
], $o = (e, t) => {
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
}, es = 0, ts = 1, ns = 2, rs = 3, is = 4, as = 5, os = 6, ss = 7, cs = 8, ls = 9, us = (e) => ({
	items: ds(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), ds = (e) => [
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
], fs = (e, t) => {
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
}, ps = 0, ms = 1, hs = 2, gs = 3, _s = 4, vs = 5, ys = (e) => ({
	items: bs(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), bs = (e) => [
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
], xs = 0, Ss = 1, Cs = 2, ws = 3, Ts = (e) => ({
	items: Es(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), Es = (e) => [
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
], k = "{name}", A = "{name} * {value}%", Ds = "{name} + {value}%", Os = "{value}", ks = {
	title: "特徴",
	options: {
		regularParam: {
			title: "基本能力値",
			format: A,
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
			format: Ds,
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
			format: A,
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
			format: k,
			options: {
				autoBattle: "自動戦闘",
				guard: "防御",
				substitute: "身代わり",
				preventEscape: "逃走防止"
			}
		},
		collaps: {
			title: "消滅エフェクト",
			format: k,
			options: {
				bossCollaps: "ボス崩壊",
				instantCollaps: "即時崩壊",
				noneCollaps: "崩壊なし"
			}
		},
		partyAbility: {
			title: "パーティ能力",
			format: k,
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
			format: A
		},
		debuffRate: {
			title: "弱体有効度",
			format: A
		},
		stateRate: {
			title: "ステート有効度",
			format: A
		},
		stateResist: {
			title: "ステート無効",
			format: k
		},
		attackElement: {
			title: "攻撃属性",
			format: k
		},
		attackState: {
			title: "攻撃ステート",
			format: Ds
		},
		attackSpeed: {
			title: "攻撃速度補正",
			format: Os
		},
		attackTimes: {
			title: "攻撃追加回数",
			format: Os
		},
		actionPlus: {
			title: "行動追加",
			format: A
		},
		attackSkill: {
			title: "攻撃スキル",
			format: k
		},
		equipWeaponType: {
			title: "装備武器タイプ",
			format: k
		},
		equipArmorType: {
			title: "装備防具タイプ",
			format: k
		},
		equipLock: {
			title: "装備固定",
			format: k
		},
		equipSeal: {
			title: "装備封印",
			format: k
		},
		slotType: {
			title: "スロットタイプ",
			format: k
		},
		skillAdd: {
			title: "スキル追加",
			format: k
		},
		skillSeal: {
			title: "スキルタイプ封印",
			format: k
		},
		skillTypeAdd: {
			title: "スキルタイプ追加",
			format: k
		},
		skillTypeSeal: {
			title: "スキルタイプ封印",
			format: k
		}
	}
}, As = (e, t) => [
	Zo(e.regularParam),
	Bo(e.extraParam),
	us(e.specialParam),
	Oo(e.collaps, t),
	Ts(e.specialFlag),
	ys(e.partyAbility)
], js = {
	itemMapper: {
		placeHolder: "name",
		dataIdKey: "dataId",
		kindKey: "code"
	},
	placeHolder: { numbers: ["value"] }
}, Ms = (t, r, i) => e(r, i, n(js), t.pattern, ((e) => e.dataId)), Ns = {
	title: "ダメージ",
	options: {}
}, j = (e = {}) => ({
	type: e.type ?? 0,
	elementId: e.elementId ?? 0,
	formula: e.formula ?? "",
	variance: e.variance ?? 0,
	critical: e.critical ?? !1
}), Ps = (e = {}) => ({
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
	damage: j(e.damage ?? {}),
	wtypeId: e.wtypeId ?? 0
}), Fs = {
	title: "武器",
	options: { weaponTypeId: "武器タイプID" }
}, Is = 0, Ls = 1, Rs = 2, zs = 11, Bs = 12, Vs = 13, Hs = 21, Us = 22, Ws = 31, Gs = 32, Ks = 33, qs = 34, Js = 41, Ys = 42, Xs = 43, Zs = 44, Qs = (e) => [
	ec(e),
	tc(e),
	nc(e),
	rc(e),
	ic(e),
	ac(e),
	oc(e),
	sc(e),
	cc(e),
	$s(e),
	lc(e),
	uc(e),
	dc(e)
], M = (e, t, n) => ({
	kindId: e,
	label: t.domainName,
	pattern: t.format,
	description: t.desc,
	dataSource: n
}), $s = (e) => M(41, e.special), ec = (e) => M(11, e.recoverHp), tc = (e) => M(12, e.recoverMp), nc = (e) => M(13, e.gainTp), rc = (e) => M(21, e.addState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), ic = (e) => M(22, e.removeState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), ac = (e) => M(31, e.addBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), oc = (e) => M(32, e.addDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), sc = (e) => M(33, e.removeBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), cc = (e) => M(34, e.removeDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), lc = (e) => M(42, e.grow, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), uc = (e) => M(43, e.learnSkill, {
	author: "rmmz",
	module: "data",
	kind: "skill"
}), dc = (e) => M(44, e.commonEvent, {
	author: "rmmz",
	module: "data",
	kind: "common_event"
}), fc = "{name} {value1}%", N = "{value1}% + {value2}", pc = "{name} {value1}ターン", P = "{name}", mc = {
	title: "使用効果",
	options: {
		addBuff: {
			desc: "バフを付与する",
			domainName: "バフ付与",
			format: pc
		},
		addDebuff: {
			desc: "デバフを付与する",
			domainName: "デバフ付与",
			format: pc
		},
		gainTp: {
			desc: "TPを指定した量だけ増加させます。",
			domainName: "TP増加",
			format: N
		},
		grow: {
			desc: "成長効果",
			domainName: "成長効果",
			format: "{name} + {value1}"
		},
		learnSkill: {
			desc: "スキルを習得する",
			domainName: "スキル習得",
			format: P
		},
		recoverHp: {
			desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "HP回復",
			format: N
		},
		recoverMp: {
			desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
			domainName: "MP回復",
			format: N
		},
		removeBuff: {
			desc: "バフを解除する",
			domainName: "バフ解除",
			format: P
		},
		removeDebuff: {
			desc: "デバフを解除する",
			domainName: "デバフ解除",
			format: P
		},
		removeState: {
			desc: "指定したステートを付加します。",
			domainName: "ステート付加",
			format: fc
		},
		special: {
			desc: "特殊効果",
			domainName: "特殊効果",
			format: P
		},
		addState: {
			desc: "状態異常を解除する",
			domainName: "ステート解除",
			format: fc
		},
		commonEvent: {
			desc: "コモンイベントを実行する",
			domainName: "コモンイベント",
			format: P
		}
	}
}, hc = 0, gc = (e, t, n) => {
	let r = n.find(((e) => e.id === t.dataId)), i = r ? r.name : "Unknown Item";
	return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", i);
}, _c = {
	title: "アイテム",
	options: { consumable: "消耗品" }
}, vc = {
	title: "スキル",
	options: {
		requiredWeaponTypeId1: "必要武器タイプ1",
		requiredWeaponTypeId2: "必要武器タイプ2",
		mpCost: "MP消費",
		tpCost: "TP消費"
	}
}, yc = {
	title: "",
	options: {
		scope: "範囲",
		speed: "速度補正",
		successRate: "成功率"
	}
}, bc = (e = {}) => ({
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
	damage: j(e.damage ?? {}),
	effects: [],
	price: 0
}), xc = 1, Sc = 2, Cc = 3, wc = 4, Tc = 5, Ec = 6, Dc = 7, Oc = 8, kc = 9, Ac = 10, jc = 11, Mc = 12, Nc = 13, Pc = 14, Fc = (e) => e.scope === 11, Ic = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12 || e === 3 || e === 11, Lc = ({ scope: e }) => e === 1 || e === 7 || e === 9 || e === 12, Rc = ({ scope: e }) => e === 1 || e === 2 || e === 3 || e === 4 || e === 5 || e === 6 || e === 14, zc = ({ scope: e }) => e === 7 || e === 8 || e === 9 || e === 10 || e === 12 || e === 13 || e === 14 || e === 11, Bc = ({ scope: e }) => e === 9 || e === 10, Vc = ({ scope: e }) => e === 7 || e === 8 || e === 14 || e === 11, Hc = ({ scope: e }) => e === 14, Uc = (e = {}) => ({
	stypeId: e.stypeId ?? 0,
	requiredWtypeId1: e.requiredWtypeId1 ?? 0,
	requiredWtypeId2: e.requiredWtypeId2 ?? 0,
	animationId: e.animationId ?? 0,
	damage: j(e.damage ?? {}),
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
}), Wc = (e) => za({
	battlerName: e.image,
	characterName: e.image,
	faceName: e.image,
	name: e.text,
	profile: e.text,
	nickname: e.text,
	note: e.note
}), Gc = (e) => Ha({
	name: e.text,
	note: e.note
}), Kc = (e) => Ps({
	name: e.text,
	note: e.note,
	description: e.text
}), qc = (e) => Va({
	name: e.text,
	note: e.note,
	description: e.text
}), Jc = (e) => Xa({
	name: e.text,
	note: e.note,
	battlerName: e.image
}), Yc = (e) => Za({
	name: e.text,
	note: e.note,
	message1: e.text,
	message2: e.text,
	message3: e.text,
	message4: e.text
}), Xc = (e) => Uc({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text,
	message1: e.text,
	message2: e.text
}), Zc = (e) => bc({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text
}), Qc = (e, t) => I(e.note, ((n, r) => t(n, r, e))), F = (e) => I(e, ((e, t) => ({
	key: e,
	value: t
}))), I = (e, t) => Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g), ((e) => t(e[1], e[2]))), L = (e, t = "\n") => [...e.items.map(((e) => `<${e.key}:${e.value}>`)), e.note].join(t).trim(), R = (e) => ({
	note: $c(e),
	items: F(e)
}), $c = (e) => {
	if (e.length >= 3e4) throw Error("Note text is too long. Please shorten it.");
	return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, el = (e, t) => `<${e}:${t}>`, tl = (e, t, n = "\n") => {
	let r = R(e), i = r.items.map(((e) => ({
		key: e.key,
		value: t(e)
	})));
	return L({
		note: r.note,
		items: i
	}, n);
}, nl = (e, t) => {
	let n = Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).find(((e) => e[1] === t));
	return n ? n[2] : void 0;
}, rl = (e, t, n) => e.replace(/<([^<>:]{1,100}):([^>]{1,1000})>/g, ((e, r) => r === t ? el(r, n) : e)), il = (e) => Array.from(e.note.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).map(((t) => ({
	key: t[1],
	value: t[2],
	id: e.id,
	name: e.name
}))), al = (e, t, n = "\n") => {
	let r = R(e), i = r.items.reduce(((e, n) => {
		let r = t.isReplaceTargetNote(n), i = r ? {
			key: n.key,
			value: t.replaceText(n.value) ?? n.value
		} : n;
		return e.items.push(i), e.hasTarget = e.hasTarget || r, e;
	}), {
		hasTarget: !1,
		items: []
	});
	return i.hasTarget ? L({
		note: r.note,
		items: i.items
	}, n) : e;
}, ol = "data", sl = "actor", cl = "map", ll = "enemy", ul = "state", dl = "skill", fl = "item", pl = "weapon", ml = "armor", hl = "class", gl = "common_event", _l = "troop", vl = (e) => [
	yl(e.elementRate),
	bl(e.debuffRate),
	xl(e.stateRate),
	Sl(e.stateResist),
	Cl(e.regularParam),
	wl(e.extraParam),
	Tl(e.specialParam),
	El(e.attackElement),
	Dl(e.attackState),
	Ol(e.attackSpeed),
	kl(e.attackTimes),
	Al(e.attackSkill),
	jl(e.skillTypeAdd),
	Ml(e.skillTypeSeal),
	Nl(e.skillAdd),
	Pl(e.skillSeal),
	Fl(e.equipWeaponType),
	Il(e.equipArmorType),
	Ll(e.equipLock),
	Rl(e.equipSeal),
	zl(e.slotType),
	Bl(e.actionPlus),
	Vl(e.specialFlag),
	Hl(e.collaps),
	Ul(e.partyAbility)
], yl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 11,
	dataSource: Wl()
}), bl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 12,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), xl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 13,
	dataSource: z()
}), Sl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 14,
	dataSource: z()
}), Cl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 21,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), wl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 22,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), Tl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 23,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), El = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 31,
	dataSource: Wl()
}), Dl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 32,
	dataSource: z()
}), Ol = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 33
}), kl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 34
}), Al = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 35,
	dataSource: B()
}), jl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 41,
	dataSource: Gl()
}), Ml = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 42,
	dataSource: Gl()
}), Nl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 43,
	dataSource: B()
}), Pl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 44,
	dataSource: B()
}), Fl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 51,
	dataSource: Kl()
}), Il = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 52,
	dataSource: ql()
}), Ll = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 53,
	dataSource: V()
}), Rl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 54,
	dataSource: V()
}), zl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 55,
	dataSource: V()
}), Bl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 61
}), Vl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 62,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), Hl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 63,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), Ul = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 64,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), z = () => ({
	author: "rmmz",
	module: "data",
	kind: "state"
}), B = () => ({
	author: "rmmz",
	module: "data",
	kind: "skill"
}), Wl = () => ({
	author: "rmmz",
	module: "system",
	kind: "elements"
}), Gl = () => ({
	author: "rmmz",
	module: "system",
	kind: "skillTypes"
}), Kl = () => ({
	author: "rmmz",
	module: "system",
	kind: "weaponTypes"
}), ql = () => ({
	author: "rmmz",
	module: "system",
	kind: "armorTypes"
}), V = () => ({
	author: "rmmz",
	module: "system",
	kind: "equipTypes"
}), Jl = {
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
}, Yl = () => ({
	rpg: {
		damage: Ns,
		data: Ra,
		traits: ks,
		itemEffect: mc
	},
	global: Jl
}), Xl = [
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
], Zl = [
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
], Ql = [
	"SceneManager",
	"AudioManager",
	"ImageManager",
	"DataManager",
	"PluginManager"
], $l = ["Math.max", "Math.min"], eu = (e) => H(e, Xl) || H(e, Zl) || H(e, Ql) || H(e, $l), H = (e, t) => t.some(((t) => e.includes(t))), tu = (e = {}) => ({
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
}), nu = (e = {}) => [
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
], U = (e) => ({
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
}), ru = (e) => ({
	item: iu(e),
	skill: au(e),
	equip: ou(e),
	status: su(e),
	formation: cu(e),
	save: lu(e)
}), iu = (e) => e.menuCommands[0], au = (e) => e.menuCommands[1], ou = (e) => e.menuCommands[2], su = (e) => e.menuCommands[3], cu = (e) => e.menuCommands[4], lu = (e) => e.menuCommands[5], uu = (e) => e.itemCategories[0], du = (e) => e.itemCategories[1], fu = (e) => e.itemCategories[2], pu = (e) => e.itemCategories[3], mu = (e = {}) => [
	e.item ?? !0,
	e.weapon ?? !0,
	e.armor ?? !0,
	e.keyItem ?? !0
], hu = (e) => ({
	item: e[0],
	weapon: e[1],
	armor: e[2],
	keyItem: e[3]
}), gu = (e = {}) => [
	e.item ?? !0,
	e.skill ?? !0,
	e.equip ?? !0,
	e.status ?? !0,
	e.formation ?? !0,
	e.save ?? !0
], _u = (e) => ({
	item: e[0],
	skill: e[1],
	equip: e[2],
	status: e[3],
	formation: e[4],
	save: e[5]
}), vu = (e = {}) => ({
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
}), yu = (e = {}) => ({
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0,
	partyMembers: e.partyMembers ? Array.from(e.partyMembers) : [1]
}), W = (e, t) => ({
	name: e,
	id: t
}), bu = (e) => e.variables.map(W), xu = (e) => e.elements.map(W), Su = (e) => e.equipTypes.map(W), Cu = (e) => e.skillTypes.map(W), wu = (e) => e.weaponTypes.map(W), Tu = (e) => e.armorTypes.map(W), Eu = (e) => e.switches.map(W), Du = (e, t) => [
	ku(e, t),
	Au(e, t),
	Pu(e, t),
	ju(e, t),
	Ou(e, t),
	Mu(e, t),
	Nu(e, t)
], Ou = (e, t) => ({
	items: Tu(e),
	label: t.options.armorTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "armorTypes"
	}
}), ku = (e, t) => ({
	items: xu(e),
	label: t.options.elements,
	source: {
		author: "rmmz",
		module: "system",
		kind: "elements"
	}
}), Au = (e, t) => ({
	items: Su(e),
	label: t.options.equipTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "equipTypes"
	}
}), ju = (e, t) => ({
	items: Cu(e),
	label: t.options.skillTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "skillTypes"
	}
}), Mu = (e, t) => ({
	items: bu(e),
	label: t.options.variables,
	source: {
		author: "rmmz",
		module: "system",
		kind: "variable"
	}
}), Nu = (e, t) => ({
	items: Eu(e),
	label: t.options.switches,
	source: {
		author: "rmmz",
		module: "system",
		kind: "switch"
	}
}), Pu = (e, t) => ({
	items: wu(e),
	label: t.options.weaponTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "weaponTypes"
	}
}), Fu = (e) => ({
	armorTypes: G(e.armorTypes),
	elements: G(e.elements),
	equipTypes: G(e.equipTypes),
	weaponTypes: G(e.weaponTypes),
	skillTypes: G(e.skillTypes),
	variables: G(e.variables),
	switches: G(e.switches)
}), G = (e) => e ? [...e] : [], K = (e, t) => typeof e == "string" ? e : t, q = (e) => ({
	actionFailure: K(e.actionFailure, "Action failed."),
	actorDamage: K(e.actorDamage, "%1 took %2 damage."),
	actorRecovery: K(e.actorRecovery, "%1 recovered %2 HP."),
	actorGain: K(e.actorGain, "%1 gained %2."),
	actorLoss: K(e.actorLoss, "%1 lost %2."),
	actorDrain: K(e.actorDrain, "%1 drained %2 HP."),
	actorNoDamage: K(e.actorNoDamage, "%1 was not damaged."),
	actorNoHit: K(e.actorNoHit, "%1 was not hit."),
	alwaysDash: K(e.alwaysDash, "Always dash."),
	bgmVolume: K(e.bgmVolume, "BGM volume"),
	bgsVolume: K(e.bgsVolume, "BGS volume"),
	commandRemember: K(e.commandRemember, "Command remember."),
	criticalToActor: K(e.criticalToActor, "%1 dealt %2 damage to %3."),
	criticalToEnemy: K(e.criticalToEnemy, "%1 dealt %2 damage to %3."),
	counterAttack: K(e.counterAttack, "%1 countered!"),
	debuffAdd: K(e.debuffAdd, "%1's %2 was lowered."),
	defeat: K(e.defeat, "Defeat."),
	enemyDamage: K(e.enemyDamage, "%1 took %2 damage."),
	enemyDrain: K(e.enemyDrain, "%1 drained %2 HP."),
	enemyGain: K(e.enemyGain, "%1 gained %2."),
	enemyLoss: K(e.enemyLoss, "%1 lost %2."),
	enemyNoDamage: K(e.enemyNoDamage, "%1 was not damaged."),
	enemyNoHit: K(e.enemyNoHit, "%1 was not hit."),
	enemyRecovery: K(e.enemyRecovery, "%1 recovered %2 HP."),
	evasion: K(e.evasion, "%1 evaded the attack!"),
	autosave: K(e.autosave, "Autosave"),
	escapeFailure: K(e.escapeFailure, "Escape failed."),
	escapeStart: K(e.escapeStart, "%1 started to escape!"),
	emerge: K(e.emerge, "%1 appeared!"),
	expNext: K(e.expNext, "Next level in %1 EXP."),
	expTotal: K(e.expTotal, "Total EXP: %1"),
	file: K(e.file, "File"),
	buffAdd: K(e.buffAdd, "%1's %2 was raised."),
	buffRemove: K(e.buffRemove, "%1's %2 was lowered."),
	obtainExp: K(e.obtainExp, "%1 EXP obtained."),
	obtainGold: K(e.obtainGold, "%1 gold obtained."),
	obtainItem: K(e.obtainItem, "%1 obtained %2."),
	obtainSkill: K(e.obtainSkill, "%1 learned %2."),
	levelUp: K(e.levelUp, "%1 leveled up!"),
	partyName: K(e.partyName, "Party"),
	loadMessage: K(e.loadMessage, "Load %1?"),
	meVolume: K(e.meVolume, "ME volume"),
	possession: K(e.possession, "Possession"),
	preemptive: K(e.preemptive, "%1 attacked first!"),
	saveMessage: K(e.saveMessage, "Save %1?"),
	seVolume: K(e.seVolume, "SE volume"),
	magicEvasion: K(e.magicEvasion, "%1 evaded the magic!"),
	magicReflection: K(e.magicReflection, "%1 reflected the magic!"),
	substitute: K(e.substitute, "%1 took the hit!"),
	surprise: K(e.surprise, "%1 surprised the enemy!"),
	touchUI: K(e.touchUI, "Touch UI"),
	useItem: K(e.useItem, "%1 used %2."),
	victory: K(e.victory, "Victory!")
}), Iu = (e) => ({
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
}), Lu = (e) => e.terms.params.map(((e, t) => ({
	name: e,
	id: t
}))), Ru = (e) => [
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
], J = (e) => ({
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
}), zu = (e) => [
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
], Y = (e) => ({
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
}), Bu = (e) => Vu(e, ""), Vu = (e, t) => [
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
}), Hu = (e) => ({
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
}), Uu = (e = {}) => ({
	jsonFormatLevel: e.jsonFormatLevel ?? 0,
	messageWidth1: e.messageWidth1 ?? 816,
	messageWidth2: e.messageWidth2 ?? 816
}), Wu = {
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
}, Gu = {
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
}, Ku = {
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
}, qu = {
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
}, Q = (e) => {
	let n = Yu(e.size);
	return {
		...vu(e.options),
		titleCommandWindow: Hu(e.titleCommandWindow ?? {}),
		currencyUnit: e.texts?.currencyUnit ?? "",
		gameTitle: e.texts?.gameTitle ?? "",
		sounds: nu(e.sounds),
		editor: Uu(e.editing),
		advanced: tu(e.advanced),
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
		testBattlers: Xu(e.battleTest?.testBattlers, Zu),
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
		terms: Ju(e.terms ?? {}),
		itemCategories: mu(e.itemCategories),
		partyMembers: $(e.gameInit?.partyMembers),
		battlerHue: 0,
		menuCommands: gu(e.menuCommands)
	};
}, Ju = (e) => ({
	basic: zu(e.basic ?? {}),
	commands: Bu(e.commands ?? {}),
	params: Ru(e.params ?? {}),
	messages: q(e.messages ?? {})
}), $ = (e) => e ? [...e] : [], Yu = (e) => e ? {
	tileSize: e.tileSize ?? 48,
	faceSize: e.faceSize ?? 144,
	iconSize: e.iconSize ?? 32
} : {
	tileSize: 48,
	faceSize: 144,
	iconSize: 32
}, Xu = (e, t) => e ? e.map(t) : [], Zu = (e) => e ? {
	actorId: e.actorId,
	equips: $(e.equips),
	level: e.level
} : {
	actorId: 0,
	equips: [],
	level: 1
}, Qu = (e, t) => {
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
			messages: id(e.terms.messages, n),
			basic: $u(e.terms.basic, n),
			params: ed(e.terms.params, n),
			commands: td(e.terms.commands, n)
		}
	};
}, $u = (e, t) => ({
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
}), ed = (e, t) => ({
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
}), td = (e, t) => ({
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
}), nd = (e) => ({
	gameTitle: e.gameTitle,
	currencyUnit: e.currencyUnit,
	equipTypes: [...e.equipTypes],
	armorTypes: [...e.armorTypes],
	weaponTypes: [...e.weaponTypes],
	elements: [...e.elements],
	skillTypes: [...e.skillTypes],
	terms: {
		basic: Y(e.terms.basic),
		commands: X(e.terms.commands),
		messages: q(e.terms.messages),
		params: J(e.terms.params)
	}
}), rd = (e, t) => Q({
	locale: e.locale,
	versionId: e.versionId,
	options: e,
	advanced: e.advanced,
	vehicles: e,
	editing: e.editor,
	sounds: U(e.sounds),
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
	itemCategories: hu(e.itemCategories),
	menuCommands: _u(e.menuCommands),
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
}), id = (e, t) => ({
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
}), ad = (e = Q({})) => ({
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
		messages: Iu(e.terms.messages)
	}
}), od = (e) => Q({
	versionId: e.versionId,
	menuCommands: ru(e),
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
	sounds: U(e.sounds),
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
		basic: Y(e.terms.basic),
		commands: X(e.terms.commands),
		params: J(e.terms.params),
		messages: e.terms.messages
	}
}), sd = ({ audio: e, image: n, systemText: r, switches: i, variables: a }) => Q({
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
	terms: cd(r),
	sounds: ld(e)
}), cd = (e) => ({
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
}), ld = (e) => {
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
}, ud = (e) => ({
	...e.text ? { text: e.text } : {},
	...e.desc ? { desc: e.desc } : {}
}), dd = {
	LEFT: 4,
	UP: 8,
	DOWN: 2,
	RIGHT: 6
}, fd = (e) => {
	let t = e.split("/");
	return t[t.length - 1];
};
export { su as $, fi as $a, tt as $c, da as $i, r as $l, ps as $n, Zn as $o, $a as $r, tn as $s, jc as $t, Du as A, Ti as Aa, wt as Ac, Ea as Ai, Se as Al, qs as An, _r as Ao, No as Ar, kn as As, L as At, gu as B, gi as Ba, ht as Bc, _a as Bi, ce as Bl, Ms as Bn, mr as Bo, ko as Br, un as Bs, Xc as Bt, Y as C, Ri as Ca, kt as Cc, Ha as Ci, ke as Cl, Zs as Cn, Mr as Co, qo as Cr, Mn as Cs, pl as Ct, Iu as D, Ni as Da, Et as Dc, Ba as Di, Ce as Dl, zs as Dn, wr as Do, Bo as Dr, On as Ds, il as Dt, Lu as E, Pi as Ea, Dt as Ec, za as Ei, Oe as El, Xs as En, Or as Eo, Jo as Er, En as Es, nl as Et, Eu as F, Ei as Fa, yt as Fc, xa as Fi, he as Fl, Ls as Fn, Er as Fo, Lo as Fr, xn as Fs, Wc as Ft, fu as G, li as Ga, dt as Gc, ua as Gi, le as Gl, xs as Gn, or as Go, wo as Gr, ln as Gs, Oc as Gt, mu as H, _i as Ha, pt as Hc, ga as Hi, ue as Hl, ks as Hn, pr as Ho, To as Hr, fn as Hs, Kc as Ht, bu as I, Oi as Ia, vt as Ic, E as Ii, pe as Il, Fs as In, Sr as Io, Po as Ir, Cn as Is, qc as It, uu as J, si as Ja, ct as Jc, sa as Ji, oe as Jl, Cs as Jn, ar as Jo, lo as Jr, nn as Js, Sc as Jt, ou as K, ui as Ka, ft as Kc, fa as Ki, ne as Kl, Ss as Kn, sr as Ko, bo as Kr, mn as Ks, Ac as Kt, wu as L, ji as La, p as Lc, D as Li, me as Ll, Ps as Ln, Cr as Lo, Fo as Lr, _n as Ls, Gc as Lt, xu as M, wi as Ma, bt as Mc, wa as Mi, ye as Ml, Js as Mn, xr as Mo, Mo as Mr, bn as Ms, F as Mt, Su as N, Di as Na, Ct as Nc, Ca as Ni, be as Nl, Is as Nn, Tr as No, jo as Nr, Sn as Ns, I as Nt, q as O, Ai as Oa, Ot as Oc, Ra as Oi, we as Ol, Bs as On, vr as Oo, Ho as Or, Dn as Os, tl as Ot, Cu as P, ki as Pa, xt as Pc, Sa as Pi, _e as Pl, Rs as Pn, kr as Po, Ao as Pr, Tn as Ps, Qc as Pt, au as Q, di as Qa, nt as Qc, la as Qi, a as Ql, vs as Qn, rr as Qo, So as Qr, an as Qs, Ec as Qt, yu as R, Si as Ra, _t as Rc, O as Ri, ve as Rl, j as Rn, Dr as Ro, Ro as Rr, yn as Rs, Jc as Rt, zu as S, Li as Sa, Nt as Sc, qa as Si, Ae as Sl, Hs as Sn, Nr as So, Xo as Sr, Fn as Ss, _l as St, J as T, Fi as Ta, At as Tc, Va as Ti, De as Tl, Ys as Tn, jr as To, Wo as Tr, An as Ts, el as Tt, hu as U, yi as Ua, st as Uc, ya as Ui, se as Ul, Ts as Un, fr as Uo, Eo as Ur, pn as Us, Uc as Ut, _u as V, vi as Va, ot as Vc, ha as Vi, fe as Vl, As as Vn, hr as Vo, Oo as Vr, dn as Vs, Yc as Vt, ru as W, ci as Wa, lt as Wc, va as Wi, de as Wl, Es as Wn, dr as Wo, Do as Wr, cn as Ws, Pc as Wt, pu as X, mi as Xa, at as Xc, pa as Xi, re as Xl, bs as Xn, ur as Xo, oo as Xr, on as Xs, wc as Xt, iu as Y, pi as Ya, rt as Yc, ma as Yi, te as Yl, ys as Yn, lr as Yo, so as Yr, sn as Ys, Cc as Yt, lu as Z, hi as Za, it as Zc, T as Zi, ae as Zl, hs as Zn, ir as Zo, co as Zr, rn as Zs, Tc as Zt, Z as _, Vi as _a, zt as _c, Za as _i, Ie as _l, hc as _n, Kr as _o, $o as _r, In as _s, ll as _t, ad as a, w as aa, Wt as ac, no as ai, Je as al, Vc as an, Yr as ao, ds as ar, Xn as as, Zl as at, c as au, Vu as b, Wi as ba, Pt as bc, Xa as bi, Le as bl, Ws as bn, Ir as bo, Go as br, Pn as bs, dl as bt, id as c, $i as ca, qt as cc, mo as ci, Ze as cl, zc as cn, Ur as co, ts as cr, qn as cs, $l as ct, Q as d, Qi as da, Ut as dc, yo as di, Be as dl, Lc as dn, Br as do, os as dr, Kn as ds, vl as dt, ia as ea, en as ec, Qa as ei, qe as el, Dc as en, v as eo, ms as er, $n as es, du as et, l as eu, Wu as f, Ji as fa, Ht as fc, io as fi, Ue as fl, bc as fn, Wr as fo, rs as fr, Gn as fs, ol as ft, Uu as g, Hi as ga, Rt as gc, ro as gi, Me as gl, gc as gn, Hr as go, Zo as gr, Vn as gs, gl as gt, qu as h, Ki as ha, Lt as hc, to as hi, ze as hl, _c as hn, Vr as ho, es as hr, Ln as hs, hl as ht, od as i, C as ia, $t as ic, ho as ii, $e as il, Fc as in, $r as io, fs as ir, Qn as is, eu as it, ee as iu, Tu as j, Ci as ja, St as jc, Ta as ji, xe as jl, Us as jn, br as jo, Io as jr, wn as js, R as jt, Fu as k, Mi as ka, Tt as kc, Oa as ki, Te as kl, Ks as kn, yr as ko, Vo as kr, m as ks, rl as kt, rd as l, Xi as la, Jt as lc, uo as li, Ke as ll, Ic as ln, Rr as lo, is as lr, Wn as ls, Yl as lt, Ku as m, Gi as ma, Ft as mc, eo as mi, Ve as ml, vc as mn, Gr as mo, as as mr, zn as ms, ml as mt, dd as n, ra as na, Zt as nc, _o as ni, Qe as nl, Mc as nn, ei as no, gs as nr, er as ns, U as nt, o as nu, sd as o, ea as oa, Gt as oc, Co as oi, Ye as ol, Bc as on, Xr as oo, ls as or, Yn as os, Xl as ot, Gu as p, qi as pa, It as pc, xo as pi, He as pl, yc as pn, Jr as po, ns as pr, Hn as ps, sl as pt, cu as q, oi as qa, ut as qc, ca as qi, ie as ql, ws as qn, cr as qo, ao as qr, hn as qs, Nc as qt, ud as r, ta as ra, Qt as rc, vo as ri, et as rl, xc as rn, Qr as ro, us as rr, nr as rs, tu as rt, i as ru, nd as s, na as sa, Kt as sc, po as si, Xe as sl, Hc as sn, qr as so, cs as sr, Jn as ss, Ql as st, fd as t, aa as ta, Xt as tc, go as ti, f as tl, kc as tn, ii as to, _s as tr, tr as ts, nu as tt, s as tu, Qu as u, Yi as ua, Yt as uc, fo as ui, Ge as ul, Rc as un, zr as uo, ss as ur, Un as us, Jl as ut, Hu as v, Bi as va, Bt as vc, Ja as vi, Pe as vl, mc as vn, Lr as vo, Qo as vr, Bn as vs, fl as vt, Ru as w, zi as wa, jt as wc, Ua as wi, Ee as wl, Vs as wn, Pr as wo, Uo as wr, Nn as ws, al as wt, X as x, Ii as xa, Mt as xc, Ka as xi, Fe as xl, Gs as xn, Ar as xo, Ko as xr, jn as xs, ul as xt, Bu as y, Ui as ya, Vt as yc, Ya as yi, Ne as yl, Qs as yn, Fr as yo, Yo as yr, Rn as ys, cl as yt, vu as z, bi as za, gt as zc, ba as zi, ge as zl, Ns as zn, gr as zo, zo as zr, vn as zs, Zc as zt };
