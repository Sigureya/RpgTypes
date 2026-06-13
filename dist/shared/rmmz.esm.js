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
}), ut = {
	plus: 0,
	minus: 1
}, dt = ({ operation: e, time: t }) => ({
	code: 124,
	indent: 0,
	parameters: [ut[e ?? "plus"] ?? 0, t ?? 0]
}), p = (e, t = 0) => ({
	code: 136,
	indent: t,
	parameters: [e]
}), ft = (e = 0) => p(0, e), pt = (e = 0) => p(1, e);
function mt(e, t = 0) {
	return {
		code: 336,
		parameters: [e.enemyId, e.newEnemyId],
		indent: t
	};
}
var ht = (e) => ({
	enemyId: e[0],
	newEnemyId: e[1]
}), gt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		e.enemyIndex,
		0,
		e.stateId
	]
}), _t = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		e.enemyIndex,
		1,
		e.stateId
	]
}), vt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		-1,
		0,
		e.stateId
	]
}), yt = (e, t = 0) => ({
	code: 333,
	indent: t,
	parameters: [
		-1,
		1,
		e.stateId
	]
}), bt = (e = 0) => ({
	code: 334,
	indent: e,
	parameters: [0]
}), xt = (e, t = 0) => ({
	code: 334,
	indent: t,
	parameters: [e.enemyIndex]
}), St = (e, t = 0) => ({
	code: 117,
	indent: t,
	parameters: wt(e ?? {})
}), Ct = (e) => ({ eventId: e[0] }), wt = (e) => [e.eventId ?? 0], Tt = (e) => ({
	min: e[0],
	max: e[1],
	value: e[2]
}), Et = (e) => [
	e.min,
	e.max,
	e.value
], Dt = (e, t = 0) => ({
	code: 121,
	indent: t,
	parameters: Et(e)
}), Ot = (e, t = 0) => ({
	code: 103,
	parameters: [e.variableId, e.maxDigits],
	indent: t
}), kt = (e) => [e.variableId ?? 0, e.maxDigits ?? 0], At = (e) => ({
	variableId: e[0],
	maxDigits: e[1]
}), jt = (e) => e.parameters[3] === 1, Mt = (e) => ({
	operation: e[1],
	itemId: e[0],
	value: e[3],
	operand: e[2]
}), Nt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		e.operation,
		e.operand,
		e.value
	]
}), Pt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		0,
		e.value
	]
}), Ft = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		0,
		1,
		e.variableId
	]
}), It = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		0,
		e.value
	]
}), Lt = (e, t = 0) => ({
	code: 126,
	indent: t,
	parameters: [
		e.itemId,
		1,
		1,
		e.variableId
	]
}), Rt = (e) => e.parameters[2] === 1, zt = (e) => e.parameters[0], Bt = (e) => ({
	operation: e[1],
	weaponId: e[0],
	value: e[3],
	operand: e[2],
	includesEquip: e[4]
}), Vt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		e.operation,
		e.operand,
		e.value,
		e.includesEquip
	]
}), Ht = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		0,
		e.value,
		!1
	]
}), Ut = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		0,
		1,
		e.variableId,
		!1
	]
}), Wt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		0,
		e.value,
		!1
	]
}), Gt = (e, t = 0) => ({
	code: 127,
	indent: t,
	parameters: [
		e.weaponId,
		1,
		1,
		e.variableId,
		!1
	]
}), Kt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		0,
		e.value,
		!1
	]
}), qt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		0,
		1,
		e.variableId,
		!1
	]
}), Jt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		0,
		e.value,
		!1
	]
}), Yt = (e, t = 0) => ({
	code: 128,
	indent: t,
	parameters: [
		e.armorId,
		1,
		1,
		e.variableId,
		!1
	]
}), Xt = (e, t = 0) => ({
	code: 104,
	parameters: [e.variableId, e.itemType],
	indent: t
}), Zt = (e) => ({
	variableId: e[0],
	itemType: e[1]
}), Qt = (e, t = 0) => ({
	code: 284,
	indent: t,
	parameters: [
		e.parallaxName,
		e.loopX,
		e.loopY,
		e.sx,
		e.sy
	]
}), $t = (e, t = 0) => ({
	code: 204,
	indent: t,
	parameters: [
		e.direction,
		e.distance,
		e.speed,
		e.waiting
	]
}), en = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [0]
}), tn = (e = 0) => ({
	code: 281,
	indent: e,
	parameters: [1]
}), nn = (e = {}, t = 0) => ({
	code: 282,
	indent: t,
	parameters: [e.tilesetId ?? 0]
}), rn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		1,
		e.x,
		e.y
	]
}), an = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		0,
		0,
		e.x,
		e.y
	]
}), on = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		1,
		e.x,
		e.y
	]
}), sn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		1,
		0,
		e.x,
		e.y
	]
}), cn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		1,
		e.x,
		e.y
	]
}), ln = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		6,
		0,
		e.x,
		e.y
	]
}), un = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		fn[e.layer] ?? 2,
		1,
		e.x,
		e.y
	]
}), dn = (e, t = 0) => ({
	code: 285,
	indent: t,
	parameters: [
		e.variableId,
		fn[e.layer] ?? 2,
		0,
		e.x,
		e.y
	]
}), fn = {
	1: 2,
	2: 3,
	3: 4,
	4: 5
}, pn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		0,
		e.x,
		e.y,
		e.direction
	]
}), mn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		1,
		e.xVariableId,
		e.yVariableId,
		e.direction
	]
}), hn = (e, t = 0) => ({
	code: 203,
	indent: t,
	parameters: [
		e.targetCharacterId,
		2,
		e.exchangeCharacterId,
		0,
		e.direction
	]
}), gn = (e = 0) => ({
	code: 135,
	parameters: [1],
	indent: e
}), _n = (e = 0) => ({
	code: 135,
	parameters: [0],
	indent: e
}), vn = (e = 0) => ({
	code: 134,
	parameters: [1],
	indent: e
}), yn = (e = 0) => ({
	code: 134,
	parameters: [0],
	indent: e
}), bn = (e = 0) => ({
	code: 137,
	parameters: [1],
	indent: e
}), xn = (e = 0) => ({
	code: 137,
	parameters: [0],
	indent: e
}), m = (e) => [e], Sn = (e) => ({ comment: e[0] }), Cn = (e, t = 0) => ({
	code: 108,
	indent: t,
	parameters: m(e)
}), wn = (e, t = 0) => ({
	code: 408,
	indent: t,
	parameters: m(e)
}), Tn = (e, t = 0) => e.map(((e, n) => n === 0 ? Cn(e, t) : wn(e, t))), En = (e = {}) => [e?.speed ?? 4, e?.skip ?? !1], Dn = (e) => ({
	speed: e[0],
	skip: e[1]
}), On = (e = {}, t = 0) => ({
	code: 105,
	indent: t,
	parameters: En(e)
}), kn = (e = "") => [e], An = (e) => ({ content: e[0] }), jn = (e = "", t = 0) => ({
	code: 405,
	indent: t ?? 0,
	parameters: kn(e)
}), Mn = (e, t = 0) => ({
	code: 402,
	indent: t,
	parameters: [e?.index ?? 0, e?.name ?? ""]
}), Nn = (e) => ({
	index: e[0],
	name: e[1]
}), Pn = (e) => [e.index ?? 0, e.name ?? ""], Fn = (e) => ({
	choices: e[0],
	cancelType: e[1],
	defaultType: e[2],
	positionType: e[3],
	background: e[4]
}), In = (e) => [
	e.choices ?? [],
	e.cancelType ?? 0,
	e.defaultType ?? 0,
	e.positionType ?? 2,
	e.background ?? 0
], Ln = (e, t = 0) => ({
	code: 102,
	indent: t,
	parameters: [
		e?.choices ?? [],
		e?.cancelType ?? 0,
		e?.defaultType ?? 0,
		e?.positionType ?? 2,
		e?.background ?? 0
	]
}), Rn = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: [
		[...e.parameters[0]],
		e.parameters[1],
		e.parameters[2],
		e.parameters[3],
		e.parameters[4]
	]
}), zn = (e, t = 0) => ({
	code: 101,
	indent: t,
	parameters: [
		e?.facename ?? "",
		e?.faceIndex ?? 0,
		e?.background ?? 0,
		e?.positionType ?? 2,
		e?.speakerName ?? ""
	]
}), Bn = (e) => ({
	facename: e[0],
	faceIndex: e[1],
	background: e[2],
	positionType: e[3],
	speakerName: e[4] ?? ""
}), Vn = (e) => [
	e.facename,
	e.faceIndex,
	e.background,
	e.positionType,
	e.speakerName
], Hn = (e, t = 0) => ({
	code: 401,
	indent: t,
	parameters: [e]
}), Un = (e, t = 0) => ({
	code: 261,
	indent: t,
	parameters: [e.filename]
}), Wn = (e) => ({ filename: e[0] }), Gn = ({ args: e = {}, commandName: t, commandTitle: n = "", pluginName: r }, i = 0) => ({
	code: 357,
	indent: i,
	parameters: [
		r,
		t,
		n,
		{ ...e }
	]
}), Kn = (e) => ({
	pluginName: e[0],
	commandName: e[1],
	commandTitle: e[2],
	args: { ...e[3] }
}), qn = (e, t = 0) => ({
	code: 129,
	parameters: [0, e.actorId],
	indent: t
}), Jn = (e, t = 0) => ({
	code: 129,
	parameters: [1, e.actorId],
	indent: t
}), Yn = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		0,
		e.value
	],
	indent: t
}), Xn = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		0,
		e.value
	],
	indent: t
}), Zn = (e, t = 0) => ({
	code: 125,
	parameters: [
		0,
		1,
		e.variableId
	],
	indent: t
}), Qn = (e, t = 0) => ({
	code: 125,
	parameters: [
		1,
		1,
		e.variableId
	],
	indent: t
}), $n = ({ pictureId: e = 0, origin: t = 0, name: n = "", x: r = 0, y: i = 0, scaleX: a = 100, scaleY: o = 100, opacity: s = 255, blendMode: c = 0 }) => ({
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
}), er = ({ pictureId: e, origin: t, x: n, y: r, scaleX: i, scaleY: a, opacity: o, blendMode: s, wait: c = !1, easingType: l = 0 }) => ({
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
}), tr = (e, t = 0) => ({
	code: 236,
	indent: t,
	parameters: [
		e.type ?? "none",
		e.power ?? 0,
		e.duration ?? 0,
		e.wait ?? !1
	]
}), nr = (e = 0) => ({
	code: 222,
	indent: e,
	parameters: []
}), rr = (e = 0) => ({
	code: 221,
	indent: e,
	parameters: []
}), ir = (e, t = 0) => ({
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
}), ar = (e, t = 0) => ({
	code: 225,
	indent: t,
	parameters: [
		e.power ?? 5,
		e.speed ?? 5,
		e.duration ?? 60,
		e.wait ?? !1
	]
}), or = (e, t = 0) => ({
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
}), sr = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), cr = (e, t = 0) => ({
	code: 655,
	indent: t,
	parameters: [e]
}), lr = (e, t = 0) => e.map(((e, n) => n === 0 ? sr(e, t) : cr(e, t))), ur = 1, dr = 0, h = {
	item: 0,
	weapon: 1,
	armors: 2
}, fr = ({ goods: e, buyOnly: t = !1 }, n = 0) => e.map(((e, r) => {
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
})), pr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 0)
}), mr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 1)
}), hr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 2)
}), gr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 3)
}), _r = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 12)
}), vr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 4)
}), yr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 5)
}), br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 6)
}), xr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 7)
}), Sr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 8)
}), Cr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 9)
}), wr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: g(e, 10)
}), Tr = (e, t = 0) => ({
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
], Er = 0, Dr = 1, Or = 2, kr = 3, Ar = 4, jr = 0, Mr = 1, Nr = 2, Pr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 0)
}), Fr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 1)
}), Ir = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 10)
}), Lr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 2)
}), Rr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 3)
}), zr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 4)
}), Br = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 5)
}), Vr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 6)
}), Hr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 7)
}), Ur = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _(e, 8)
}), Wr = (e, t = 0) => ({
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
], Gr = (e) => e.parameters[3] === 1, Kr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: qr(e)
}), qr = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	1,
	e.variableId
], Jr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Zr(e)
}), Yr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: Qr(e)
}), Xr = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: $r(e)
}), Zr = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	0,
	e.itemId
], Qr = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	1,
	e.weaponId
], $r = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	3,
	2,
	e.armorId
], ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: ti(e)
}), ti = (e) => [
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
}, ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.X)
}), ri = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.Y)
}), ii = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.DIRECTION)
}), ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.SCREEN_X)
}), oi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y(e, v.SCREEN_Y)
}), si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.X)
}), ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.Y)
}), li = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.DIRECTION)
}), ui = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: y({
		startId: e.startId,
		endId: e.endId,
		operation: e.operation,
		charactorId: -1
	}, v.SCREEN_X)
}), di = (e, t = 0) => ({
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
], fi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 0)
}), pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 1)
}), mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: b(e, 2)
}), hi = (e, t = 0) => ({
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
], gi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: _i(e)
}), _i = (e) => [
	e.startId,
	e.endId ?? e.startId,
	e.operation ?? 0,
	2,
	e.min,
	e.max
], vi = (e, t = 0) => ({
	code: 355,
	indent: t,
	parameters: [e]
}), yi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 0)
}), bi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 1)
}), xi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 2)
}), Si = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 3)
}), Ci = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 4)
}), wi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 5)
}), Ti = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 6)
}), Ei = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 7)
}), Di = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: x(e, 8)
}), Oi = (e, t = 0) => ({
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
], ki = {
	USED_SKILL_ID: 0,
	USED_ITEM_ID: 1,
	ACTION_ACTOR_ID: 2,
	ACTION_ENEMY_INDEX: 3,
	TARGET_ACTOR_ID: 4,
	TARGET_ENEMY_INDEX: 5
}, Ai = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 0)
}), ji = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 1)
}), Mi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 2)
}), Ni = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 3)
}), Pi = (e, t = 0) => ({
	code: 122,
	indent: t,
	parameters: S(e, 4)
}), Fi = (e, t = 0) => ({
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
], Ii = (e = 0) => ({
	code: 206,
	indent: e,
	parameters: []
}), Li = (e, t = 0) => ({
	code: 323,
	indent: t,
	parameters: [
		e.vehicleId,
		e.characterImage,
		e.characterIndex
	]
}), Ri = (e, n = 0) => ({
	code: 140,
	indent: n,
	parameters: [e.vheicleId, t(e.bgm)]
}), zi = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		0,
		e.mapId,
		e.x,
		e.y
	]
}), Bi = (e, t = 0) => ({
	code: 202,
	indent: t,
	parameters: [
		e.vehicleId,
		1,
		e.variableMapId,
		e.variableX,
		e.variableY
	]
}), Vi = 0, Hi = 1, Ui = 2, Wi = (e) => e.code === 241 || e.code === 245 || e.code === 249 || e.code === 250 || e.code === 132 || e.code === 133 || e.code === 139, Gi = (e) => [...e], Ki = (e) => ({
	code: e.code,
	indent: e.indent,
	parameters: Gi(e.parameters)
}), qi = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Ji = (e) => e.parameters.every(qi), Yi = (e) => ({
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
}), C = (e, t) => `\\${e}[${t}]`, w = (e, t) => t.map(((t, n) => ({
	text: t,
	controlChar: C(e, n)
}))), Xi = (e) => w("N", e), Zi = (e) => w("V", e), Qi = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
	char: e[1],
	id: parseInt(e[2], 10)
}))), $i = (e) => e.map(((e) => ({
	text: e.name,
	controlChar: C("N", e.id)
}))), ea = (e) => e.variables.map(((e, t) => ({
	text: e || "",
	controlChar: C("V", t)
}))).filter(((e) => e.text !== "")), ta = (e) => !!e, na = (e, t, n) => ({
	data: e,
	eventId: t,
	pageIndex: n
}), ra = (e, t, n) => e.list.map(((e) => ({
	data: e,
	eventId: n.id,
	pageIndex: t
}))), T = (e, t) => e.pages.map(((n, r) => t(n, r, e))), ia = (e, t) => e.events.filter(ta).map(((e) => T(e, t))), aa = (e, t) => e.events.filter(ta).flatMap(((e) => T(e, t))), oa = (e, t) => e.map(((e) => T(e, t))), sa = (e, t) => e.flatMap(((e) => T(e, t))), ca = (e, t) => e.map(((e) => t(e, 0, e))), la = (e) => ia(e, ra).flat(2), ua = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	trigger: e.trigger ?? 0,
	list: e.list ?? [],
	switchId: e.switchId ?? 0
}), da = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	members: e.members ?? [],
	pages: e.pages ?? []
}), fa = (e) => ({
	span: e.span ?? 0,
	conditions: ma(e.conditions ?? {}),
	list: e.list ?? []
}), pa = (e = {}) => ({
	enemyId: e.enemyId ?? 0,
	x: e.x ?? 0,
	y: e.y ?? 0,
	hidden: e.hidden ?? !1
}), ma = (e = {}) => ({
	actorHp: e.actorHp ?? 0,
	actorId: e.actorId ?? 0,
	enemyValid: e.enemyValid ?? 0,
	switchValid: e.switchValid ?? 0
}), ha = (e = {}) => ({
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
}), O = ({ list: e = [], conditions: t = ha(), image: n = D(), moveFrequency: r = 5, directionFix: i = !1, moveRoute: a = {
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
}), ga = (e, t) => ({
	map: t,
	filename: `Map${e.id.toString().padStart(3, "0")}`,
	editingName: e.name
}), _a = (e) => va({ events: [E({ pages: [O({ list: e })] })] }), va = (e = {}) => ({
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
}), ya = (e) => e.toString().padStart(3, "0"), ba = (e = { id: 0 }) => ({
	name: e.name ?? ya(e.id),
	id: e.id,
	expanded: e.expanded ?? !1,
	order: e.order ?? 0,
	parentId: e.parentId ?? 0,
	scrollX: e.scrollX ?? 0,
	scrollY: e.scrollY ?? 0
}), xa = (e, t) => e.map(((e) => e ? {
	...e,
	pages: Sa(e, t)
} : null)), Sa = (e, t) => e.pages.map(((e) => ({
	...e,
	list: t(e.list)
}))), Ca = (e, t) => [
	wa(e.skills, t),
	Ta(e.actors, t),
	Ea(e.states, t),
	Da(e.armors, t),
	Oa(e.classes, t),
	ka(e.enemies, t),
	Aa(e.items, t),
	ja(e.weapons, t),
	Ma(e.commonEvents, t)
], wa = (e, t) => ({
	label: t.skill.title,
	items: e,
	source: {
		author: "rmmz",
		module: "data",
		kind: "skill"
	}
}), Ta = (e, t) => ({
	items: e,
	label: t.actor.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "actor"
	}
}), Ea = (e, t) => ({
	items: e,
	label: t.state.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "state"
	}
}), Da = (e, t) => ({
	items: e,
	label: t.armor.title,
	source: {
		author: "rmmz",
		kind: "armor",
		module: "data"
	}
}), Oa = (e, t) => ({
	items: e,
	label: t.class.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "class"
	}
}), ka = (e, t) => ({
	items: e,
	label: t.enemy.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "enemy"
	}
}), Aa = (e, t) => ({
	items: e,
	label: t.item.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "item"
	}
}), ja = (e, t) => ({
	items: e,
	label: t.weapon.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "weapon"
	}
}), Ma = (e, t) => ({
	items: e,
	label: t.commonEvent.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "common_event"
	}
}), Na = {
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
}, Pa = (e = {}) => ({
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
}), Fa = (e) => ({
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
}), Ia = (e = {}) => ({
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
}), La = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ?? za(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), Ra = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: e.traits ?? [],
	note: e.note ?? "",
	params: e.params ? Ba(e.params) : za(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), za = () => [
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0]
], Ba = (e) => {
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
}, Va = ({ mhp: e = 0, mmp: t = 0, atk: n = 0, def: r = 0, mat: i = 0, mdf: a = 0, agi: o = 0, luk: s = 0 }) => [
	e,
	t,
	n,
	r,
	i,
	a,
	o,
	s
], Ha = (e) => {
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
}, Ua = (e = {}) => ({
	dataId: e.dataId ?? 0,
	denominator: e.denominator ?? 0,
	kind: e.kind ?? 0
}), Wa = (e = {}) => ({
	conditionParam1: e.conditionParam1 ?? 0,
	conditionParam2: e.conditionParam2 ?? 0,
	conditionType: e.conditionType ?? 0,
	rating: e.rating ?? 0,
	skillId: e.skillId ?? 0
}), Ga = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	battlerHue: e.battlerHue ?? 0,
	dropItems: e.dropItems?.map((() => Ua())) ?? [],
	exp: e.exp ?? 0,
	gold: e.gold ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ? [...e.params] : Va({
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
}), Ka = (e = {}) => ({
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
}), qa = 11, Ja = 12, Ya = 13, Xa = 14, Za = 21, Qa = 22, $a = 23, eo = 31, to = 32, no = 33, ro = 34, io = 35, ao = 41, oo = 42, so = 43, co = 44, lo = 51, uo = 52, fo = 53, po = 54, mo = 55, ho = 61, go = 62, _o = 63, vo = 64, yo = 0, bo = 1, xo = 2, So = 3, Co = (e, t) => ({
	items: wo(e.options, t),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), wo = (e, t) => [
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
], To = 0, Eo = 1, Do = 2, Oo = 3, ko = 4, Ao = 5, jo = 6, Mo = 7, No = 8, Po = 9, Fo = (e) => ({
	items: Io(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), Io = (e) => [
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
], Lo = (e, t) => {
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
}, Ro = 0, zo = 1, Bo = 2, Vo = 3, Ho = 4, Uo = 5, Wo = 6, Go = 7, Ko = (e) => ({
	items: qo(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), qo = (e) => [
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
], Jo = (e, t) => {
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
}, Yo = 0, Xo = 1, Zo = 2, Qo = 3, $o = 4, es = 5, ts = 6, ns = 7, rs = 8, is = 9, as = (e) => ({
	items: os(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), os = (e) => [
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
], ss = (e, t) => {
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
}, cs = 0, ls = 1, us = 2, ds = 3, fs = 4, ps = 5, ms = (e) => ({
	items: hs(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), hs = (e) => [
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
], gs = 0, _s = 1, vs = 2, ys = 3, bs = (e) => ({
	items: xs(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), xs = (e) => [
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
], k = "{name}", A = "{name} * {value}%", Ss = "{name} + {value}%", Cs = "{value}", ws = {
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
			format: Ss,
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
			format: Ss
		},
		attackSpeed: {
			title: "攻撃速度補正",
			format: Cs
		},
		attackTimes: {
			title: "攻撃追加回数",
			format: Cs
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
}, Ts = (e, t) => [
	Ko(e.regularParam),
	Fo(e.extraParam),
	as(e.specialParam),
	Co(e.collaps, t),
	bs(e.specialFlag),
	ms(e.partyAbility)
], Es = {
	itemMapper: {
		placeHolder: "name",
		dataIdKey: "dataId",
		kindKey: "code"
	},
	placeHolder: { numbers: ["value"] }
}, Ds = (t, r, i) => e(r, i, n(Es), t.pattern, ((e) => e.dataId)), Os = {
	title: "ダメージ",
	options: {}
}, j = (e = {}) => ({
	type: e.type ?? 0,
	elementId: e.elementId ?? 0,
	formula: e.formula ?? "",
	variance: e.variance ?? 0,
	critical: e.critical ?? !1
}), ks = (e = {}) => ({
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
}), As = {
	type: "object",
	required: [
		"name",
		"id",
		"description",
		"iconIndex",
		"price",
		"params",
		"traits",
		"note",
		"etypeId",
		"animationId"
	],
	properties: {
		name: { type: "string" },
		id: {
			type: "integer",
			minimum: 0
		},
		description: { type: "string" },
		iconIndex: {
			type: "integer",
			minimum: 0
		},
		price: {
			type: "integer",
			minimum: 0
		},
		note: { type: "string" },
		etypeId: {
			type: "integer",
			minimum: 0
		},
		wtypeId: {
			type: "integer",
			minimum: 0
		},
		animationId: {
			type: "integer",
			minimum: 0
		},
		params: {
			type: "array",
			items: [
				{ type: "integer" },
				{ type: "integer" },
				{ type: "integer" },
				{ type: "integer" },
				{ type: "integer" },
				{ type: "integer" },
				{ type: "integer" },
				{ type: "integer" }
			],
			minItems: 8,
			maxItems: 8
		},
		damage: {
			type: "object",
			properties: {
				type: {
					type: "integer",
					minimum: 0
				},
				elementId: {
					type: "integer",
					minimum: 0
				},
				formula: { type: "string" },
				variance: {
					type: "integer",
					minimum: 0,
					maximum: 100
				},
				critical: {
					type: "boolean",
					default: !1
				}
			},
			required: [
				"type",
				"elementId",
				"formula",
				"variance",
				"critical"
			]
		},
		traits: {
			type: "array",
			items: {
				type: "object",
				additionalProperties: !1,
				properties: {
					code: { type: "integer" },
					dataId: { type: "integer" },
					value: { type: "number" }
				},
				required: [
					"code",
					"dataId",
					"value"
				]
			}
		}
	}
}, js = {
	title: "武器",
	options: { weaponTypeId: "武器タイプID" }
}, Ms = 0, Ns = 1, Ps = 2, Fs = 11, Is = 12, Ls = 13, Rs = 21, zs = 22, Bs = 31, Vs = 32, Hs = 33, Us = 34, Ws = 41, Gs = 42, Ks = 43, qs = 44, Js = (e) => [
	Xs(e),
	Zs(e),
	Qs(e),
	$s(e),
	ec(e),
	tc(e),
	nc(e),
	rc(e),
	ic(e),
	Ys(e),
	ac(e),
	oc(e),
	sc(e)
], M = (e, t, n) => ({
	kindId: e,
	label: t.domainName,
	pattern: t.format,
	description: t.desc,
	dataSource: n
}), Ys = (e) => M(41, e.special), Xs = (e) => M(11, e.recoverHp), Zs = (e) => M(12, e.recoverMp), Qs = (e) => M(13, e.gainTp), $s = (e) => M(21, e.addState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), ec = (e) => M(22, e.removeState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), tc = (e) => M(31, e.addBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), nc = (e) => M(32, e.addDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), rc = (e) => M(33, e.removeBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), ic = (e) => M(34, e.removeDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), ac = (e) => M(42, e.grow, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), oc = (e) => M(43, e.learnSkill, {
	author: "rmmz",
	module: "data",
	kind: "skill"
}), sc = (e) => M(44, e.commonEvent, {
	author: "rmmz",
	module: "data",
	kind: "common_event"
}), cc = "{name} {value1}%", N = "{value1}% + {value2}", lc = "{name} {value1}ターン", P = "{name}", uc = {
	title: "使用効果",
	options: {
		addBuff: {
			desc: "バフを付与する",
			domainName: "バフ付与",
			format: lc
		},
		addDebuff: {
			desc: "デバフを付与する",
			domainName: "デバフ付与",
			format: lc
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
			format: cc
		},
		special: {
			desc: "特殊効果",
			domainName: "特殊効果",
			format: P
		},
		addState: {
			desc: "状態異常を解除する",
			domainName: "ステート解除",
			format: cc
		},
		commonEvent: {
			desc: "コモンイベントを実行する",
			domainName: "コモンイベント",
			format: P
		}
	}
}, dc = 0, fc = (e, t, n) => {
	let r = n.find(((e) => e.id === t.dataId)), i = r ? r.name : "Unknown Item";
	return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", i);
}, pc = {
	title: "アイテム",
	options: { consumable: "消耗品" }
}, mc = {
	title: "スキル",
	options: {
		requiredWeaponTypeId1: "必要武器タイプ1",
		requiredWeaponTypeId2: "必要武器タイプ2",
		mpCost: "MP消費",
		tpCost: "TP消費"
	}
}, hc = {
	title: "",
	options: {
		scope: "範囲",
		speed: "速度補正",
		successRate: "成功率"
	}
}, gc = (e = {}) => ({
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
}), _c = (e = {}) => ({
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
}), vc = (e) => Pa({
	battlerName: e.image,
	characterName: e.image,
	faceName: e.image,
	name: e.text,
	profile: e.text,
	nickname: e.text,
	note: e.note
}), yc = (e) => La({
	name: e.text,
	note: e.note
}), bc = (e) => ks({
	name: e.text,
	note: e.note,
	description: e.text
}), xc = (e) => Ia({
	name: e.text,
	note: e.note,
	description: e.text
}), Sc = (e) => Ga({
	name: e.text,
	note: e.note,
	battlerName: e.image
}), Cc = (e) => Ka({
	name: e.text,
	note: e.note,
	message1: e.text,
	message2: e.text,
	message3: e.text,
	message4: e.text
}), wc = (e) => _c({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text,
	message1: e.text,
	message2: e.text
}), Tc = (e) => gc({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text
}), Ec = (e, t) => F(e.note, ((n, r) => t(n, r, e))), Dc = (e) => F(e, ((e, t) => ({
	key: e,
	value: t
}))), F = (e, t) => Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g), ((e) => t(e[1], e[2]))), I = (e, t = "\n") => [...e.items.map(((e) => `<${e.key}:${e.value}>`)), e.note].join(t).trim(), L = (e) => ({
	note: Oc(e),
	items: Dc(e)
}), Oc = (e) => {
	if (e.length >= 3e4) throw Error("Note text is too long. Please shorten it.");
	return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, R = (e, t) => `<${e}:${t}>`, kc = (e, t, n = "\n") => {
	let r = L(e), i = r.items.map(((e) => ({
		key: e.key,
		value: t(e)
	})));
	return I({
		note: r.note,
		items: i
	}, n);
}, Ac = (e, t) => {
	let n = Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).find(((e) => e[1] === t));
	return n ? n[2] : void 0;
}, jc = (e, t, n) => e.replace(/<([^<>:]{1,100}):([^>]{1,1000})>/g, ((e, r) => r === t ? R(r, n) : e)), Mc = (e) => Array.from(e.note.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).map(((t) => ({
	key: t[1],
	value: t[2],
	id: e.id,
	name: e.name
}))), Nc = (e, t, n = "\n") => {
	let r = L(e), i = r.items.reduce(((e, n) => {
		let r = t.isReplaceTargetNote(n), i = r ? {
			key: n.key,
			value: t.replaceText(n.value) ?? n.value
		} : n;
		return e.items.push(i), e.hasTarget = e.hasTarget || r, e;
	}), {
		hasTarget: !1,
		items: []
	});
	return i.hasTarget ? I({
		note: r.note,
		items: i.items
	}, n) : e;
}, Pc = "data", Fc = "actor", Ic = "map", Lc = "enemy", Rc = "state", zc = "skill", Bc = "item", Vc = "weapon", Hc = "armor", Uc = "class", Wc = "common_event", Gc = "troop", Kc = (e) => [
	qc(e.elementRate),
	Jc(e.debuffRate),
	Yc(e.stateRate),
	Xc(e.stateResist),
	Zc(e.regularParam),
	Qc(e.extraParam),
	$c(e.specialParam),
	el(e.attackElement),
	tl(e.attackState),
	nl(e.attackSpeed),
	rl(e.attackTimes),
	il(e.attackSkill),
	al(e.skillTypeAdd),
	ol(e.skillTypeSeal),
	sl(e.skillAdd),
	cl(e.skillSeal),
	ll(e.equipWeaponType),
	ul(e.equipArmorType),
	dl(e.equipLock),
	fl(e.equipSeal),
	pl(e.slotType),
	ml(e.actionPlus),
	hl(e.specialFlag),
	gl(e.collaps),
	_l(e.partyAbility)
], qc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 11,
	dataSource: vl()
}), Jc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 12,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Yc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 13,
	dataSource: z()
}), Xc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 14,
	dataSource: z()
}), Zc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 21,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Qc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 22,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), $c = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 23,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), el = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 31,
	dataSource: vl()
}), tl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 32,
	dataSource: z()
}), nl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 33
}), rl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 34
}), il = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 35,
	dataSource: B()
}), al = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 41,
	dataSource: yl()
}), ol = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 42,
	dataSource: yl()
}), sl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 43,
	dataSource: B()
}), cl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 44,
	dataSource: B()
}), ll = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 51,
	dataSource: bl()
}), ul = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 52,
	dataSource: xl()
}), dl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 53,
	dataSource: V()
}), fl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 54,
	dataSource: V()
}), pl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 55,
	dataSource: V()
}), ml = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 61
}), hl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 62,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), gl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 63,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), _l = (e) => ({
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
}), vl = () => ({
	author: "rmmz",
	module: "system",
	kind: "elements"
}), yl = () => ({
	author: "rmmz",
	module: "system",
	kind: "skillTypes"
}), bl = () => ({
	author: "rmmz",
	module: "system",
	kind: "weaponTypes"
}), xl = () => ({
	author: "rmmz",
	module: "system",
	kind: "armorTypes"
}), V = () => ({
	author: "rmmz",
	module: "system",
	kind: "equipTypes"
}), Sl = {
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
}, Cl = () => ({
	rpg: {
		damage: Os,
		data: Na,
		traits: ws,
		itemEffect: uc
	},
	global: Sl
}), wl = [
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
], Tl = [
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
], El = [
	"SceneManager",
	"AudioManager",
	"ImageManager",
	"DataManager",
	"PluginManager"
], Dl = ["Math.max", "Math.min"], Ol = (e) => H(e, wl) || H(e, Tl) || H(e, El) || H(e, Dl), H = (e, t) => t.some(((t) => e.includes(t))), kl = (e = {}) => ({
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
}), Al = (e = {}) => [
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
}), jl = (e) => ({
	item: Ml(e),
	skill: Nl(e),
	equip: Pl(e),
	status: Fl(e),
	formation: Il(e),
	save: Ll(e)
}), Ml = (e) => e.menuCommands[0], Nl = (e) => e.menuCommands[1], Pl = (e) => e.menuCommands[2], Fl = (e) => e.menuCommands[3], Il = (e) => e.menuCommands[4], Ll = (e) => e.menuCommands[5], Rl = (e) => e.itemCategories[0], zl = (e) => e.itemCategories[1], Bl = (e) => e.itemCategories[2], Vl = (e) => e.itemCategories[3], Hl = (e = {}) => [
	e.item ?? !0,
	e.weapon ?? !0,
	e.armor ?? !0,
	e.keyItem ?? !0
], Ul = (e) => ({
	item: e[0],
	weapon: e[1],
	armor: e[2],
	keyItem: e[3]
}), Wl = (e = {}) => [
	e.item ?? !0,
	e.skill ?? !0,
	e.equip ?? !0,
	e.status ?? !0,
	e.formation ?? !0,
	e.save ?? !0
], Gl = (e) => ({
	item: e[0],
	skill: e[1],
	equip: e[2],
	status: e[3],
	formation: e[4],
	save: e[5]
}), Kl = (e = {}) => ({
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
}), ql = (e = {}) => ({
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0,
	partyMembers: e.partyMembers ? Array.from(e.partyMembers) : [1]
}), W = (e, t) => ({
	name: e,
	id: t
}), Jl = (e) => e.variables.map(W), Yl = (e) => e.elements.map(W), Xl = (e) => e.equipTypes.map(W), Zl = (e) => e.skillTypes.map(W), Ql = (e) => e.weaponTypes.map(W), $l = (e) => e.armorTypes.map(W), eu = (e) => e.switches.map(W), tu = (e, t) => [
	ru(e, t),
	iu(e, t),
	cu(e, t),
	au(e, t),
	nu(e, t),
	ou(e, t),
	su(e, t)
], nu = (e, t) => ({
	items: $l(e),
	label: t.options.armorTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "armorTypes"
	}
}), ru = (e, t) => ({
	items: Yl(e),
	label: t.options.elements,
	source: {
		author: "rmmz",
		module: "system",
		kind: "elements"
	}
}), iu = (e, t) => ({
	items: Xl(e),
	label: t.options.equipTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "equipTypes"
	}
}), au = (e, t) => ({
	items: Zl(e),
	label: t.options.skillTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "skillTypes"
	}
}), ou = (e, t) => ({
	items: Jl(e),
	label: t.options.variables,
	source: {
		author: "rmmz",
		module: "system",
		kind: "variable"
	}
}), su = (e, t) => ({
	items: eu(e),
	label: t.options.switches,
	source: {
		author: "rmmz",
		module: "system",
		kind: "switch"
	}
}), cu = (e, t) => ({
	items: Ql(e),
	label: t.options.weaponTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "weaponTypes"
	}
}), lu = (e) => ({
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
}), uu = (e) => ({
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
}), du = (e) => e.terms.params.map(((e, t) => ({
	name: e,
	id: t
}))), fu = (e) => [
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
}), pu = (e) => [
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
}), mu = (e) => hu(e, ""), hu = (e, t) => [
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
}), gu = (e) => ({
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
}), _u = (e = {}) => ({
	jsonFormatLevel: e.jsonFormatLevel ?? 0,
	messageWidth1: e.messageWidth1 ?? 816,
	messageWidth2: e.messageWidth2 ?? 816
}), vu = {
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
}, yu = {
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
}, bu = {
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
}, xu = {
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
	let n = Cu(e.size);
	return {
		...Kl(e.options),
		titleCommandWindow: gu(e.titleCommandWindow ?? {}),
		currencyUnit: e.texts?.currencyUnit ?? "",
		gameTitle: e.texts?.gameTitle ?? "",
		sounds: Al(e.sounds),
		editor: _u(e.editing),
		advanced: kl(e.advanced),
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
		testBattlers: wu(e.battleTest?.testBattlers, Tu),
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
		terms: Su(e.terms ?? {}),
		itemCategories: Hl(e.itemCategories),
		partyMembers: $(e.gameInit?.partyMembers),
		battlerHue: 0,
		menuCommands: Wl(e.menuCommands)
	};
}, Su = (e) => ({
	basic: pu(e.basic ?? {}),
	commands: mu(e.commands ?? {}),
	params: fu(e.params ?? {}),
	messages: q(e.messages ?? {})
}), $ = (e) => e ? [...e] : [], Cu = (e) => e ? {
	tileSize: e.tileSize ?? 48,
	faceSize: e.faceSize ?? 144,
	iconSize: e.iconSize ?? 32
} : {
	tileSize: 48,
	faceSize: 144,
	iconSize: 32
}, wu = (e, t) => e ? e.map(t) : [], Tu = (e) => e ? {
	actorId: e.actorId,
	equips: $(e.equips),
	level: e.level
} : {
	actorId: 0,
	equips: [],
	level: 1
}, Eu = (e) => ({
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
}), Du = (e, t) => Q({
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
	itemCategories: Ul(e.itemCategories),
	menuCommands: Gl(e.menuCommands),
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
}), Ou = (e = Q({})) => ({
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
		messages: uu(e.terms.messages)
	}
}), ku = (e) => Q({
	versionId: e.versionId,
	menuCommands: jl(e),
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
}), Au = ({ audio: e, image: n, systemText: r, switches: i, variables: a }) => Q({
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
	terms: ju(r),
	sounds: Mu(e)
}), ju = (e) => ({
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
}), Mu = (e) => {
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
}, Nu = (e) => ({
	...e.text ? { text: e.text } : {},
	...e.desc ? { desc: e.desc } : {}
}), Pu = {
	LEFT: 4,
	UP: 8,
	DOWN: 2,
	RIGHT: 6
}, Fu = (e) => {
	let t = e.split("/");
	return t[t.length - 1];
};
export { Al as $, Or as $a, Ce as $c, Pi as $i, Go as $n, On as $o, Ha as $r, Tt as $s, qs as $t, Yl as A, v as Aa, $e as Ac, oa as Ai, ee as Al, cs as An, Yn as Ao, Ja as Ar, Xt as As, Dc as At, Hl as B, Fr as Ba, Ve as Bc, Gi as Bi, $o as Bn, zn as Bo, ao as Br, Gt as Bs, bc as Bt, J as C, ni as Ca, it as Cc, sa as Ci, ae as Cl, _s as Cn, ir as Co, ho as Cr, dn as Cs, R as Ct, lu as D, di as Da, f as Dc, ca as Di, s as Dl, hs as Dn, er as Do, to as Dr, $t as Ds, jc as Dt, q as E, ui as Ea, qe as Ec, la as Ei, l as El, ms as En, or as Eo, no as Er, tn as Es, kc as Et, Ql as F, Gr as Fa, Ke as Fc, C as Fi, ss as Fn, Kn as Fo, lo as Fr, Bt as Fs, yc as Ft, Il as G, Lr as Ga, Ne as Gc, Hi as Gi, es as Gn, Nn as Go, Ya as Gr, Nt as Gs, pc as Gt, jl as H, Br as Ha, Me as Hc, Wi as Hi, ts as Hn, Vn as Ho, mo as Hr, Rt as Hs, gc as Ht, ql as I, Kr as Ia, Ge as Ic, w as Ii, os as In, Gn as Io, Za as Ir, Vt as Is, Sc as It, Vl as J, Nr as Ja, Ae as Jc, Ii as Ji, Jo as Jn, In as Jo, Ka as Jr, It as Js, uc as Jt, Rl as K, Rr as Ka, Le as Kc, Ri as Ki, Yo as Kn, Ln as Ko, Xa as Kr, Pt as Ks, fc as Kt, Kl as L, Ur as La, Be as Lc, Zi as Li, is as Ln, Wn as Lo, vo as Lr, Ht as Ls, Tc as Lt, Zl as M, Xr as Ma, Ye as Mc, ea as Mi, fs as Mn, Xn as Mo, uo as Mr, qt as Ms, Ec as Mt, eu as N, Jr as Na, Xe as Nc, Qi as Ni, ds as Nn, Qn as No, fo as Nr, Jt as Ns, vc as Nt, tu as O, si as Oa, Qe as Oc, T as Oi, o as Ol, us as On, $n as Oo, ro as Or, en as Os, I as Ot, Jl as P, Yr as Pa, Ze as Pc, Xi as Pi, as as Pn, Jn as Po, po as Pr, Yt as Ps, xc as Pt, zl as Q, kr as Qa, Oe as Qc, Ni as Qi, Vo as Qn, jn as Qo, Va as Qr, kt as Qs, Rs as Qt, Wl as R, zr as Ra, Ue as Rc, Yi as Ri, rs as Rn, Un as Ro, so as Rr, Ut as Rs, wc as Rt, fu as S, oi as Sa, at as Sc, aa as Si, re as Sl, gs as Sn, rr as So, yo as Sr, un as Ss, Nc as St, uu as T, li as Ta, tt as Tc, na as Ti, r as Tl, vs as Tn, ar as To, io as Tr, nn as Ts, Mc as Tt, Bl as U, Wr as Ua, Ie as Uc, Ui, Qo as Un, Rn as Uo, $a as Ur, Mt as Us, hc as Ut, Ul as V, Ir as Va, ze as Vc, Ji as Vi, ns as Vn, Hn as Vo, oo as Vr, zt as Vs, _c as Vt, Pl as W, Vr as Wa, Pe as Wc, Vi as Wi, Zo as Wn, Fn as Wo, go as Wr, jt as Ws, mc as Wt, Nl as X, Mr as Xa, Ee as Xc, Bi as Xi, Wo as Xn, An as Xo, Wa as Xr, At as Xs, Bs as Xt, Ll as Y, jr as Ya, ke as Yc, zi as Yi, qo as Yn, Pn as Yo, Ua as Yr, Lt as Ys, Js as Yt, Fl as Z, Er as Za, De as Zc, Mi as Zi, Bo as Zn, Dn as Zo, Ga as Zr, Ot as Zs, Vs as Zt, mu as _, mi as _a, ot as _c, fa as _i, le as _l, Ds as _n, dr as _o, wo as _r, sn as _s, Ic as _t, Ou as a, Oi as aa, xt as ac, Na as ai, be as al, Hs as an, hr as ao, Lo as ar, m as as, El as at, pu as b, ii as ba, ct as bc, ma as bi, oe as bl, bs as bn, sr as bo, xo as br, rn as bs, Gc as bt, Du as c, bi as ca, gt as cc, ba as ci, pe as cl, Ws as cn, _r as co, jo as cr, gn as cs, Sl as ct, yu as d, Si as da, ht as dc, _a as di, ge as dl, Ns as dn, Sr as do, To as dr, _n as ds, Fc as dt, Fi as ea, Dt as ec, La as ei, we as el, Ls as en, Ar as eo, Ho as er, kn as es, U as et, bu as f, wi as fa, mt as fc, ga as fi, ce as fl, js as fn, vr as fo, Mo as fr, yn as fs, Hc as ft, gu as g, fi as ga, dt as gc, ha as gi, de as gl, Os as gn, ur as go, Po as gr, on as gs, Bc as gt, Z as h, gi as ha, ft as hc, O as hi, se as hl, j as hn, fr as ho, No as hr, mn as hs, Lc as ht, ku as i, Ei as ia, wt as ic, Fa as ii, ye as il, Is as in, mr as io, Fo as ir, Cn as is, wl as it, Xl as j, ei as ja, Je as jc, $i as ji, c as jl, ls as jn, Zn as jo, qa as jr, Kt as js, F as jt, $l as k, ci as ka, et as kc, ia as ki, i as kl, ps as kn, qn as ko, _o as kr, Zt as ks, L as kt, Q as l, Ci as la, yt as lc, ya as li, me as ll, Ms as ln, xr as lo, Do as lr, vn as ls, Kc as lt, _u as m, vi as ma, pt as mc, D as mi, ue as ml, ks as mn, Cr as mo, Ao as mr, hn as ms, Wc as mt, Pu as n, Ai as na, Ct as nc, Ia as ni, Se as nl, Ks as nn, wr as no, zo as nr, Sn as ns, Ol as nt, Au as o, xi as oa, bt as oc, Ca as oi, _e as ol, Us as on, pr as oo, Io as or, Tn as os, Dl as ot, xu as p, Di as pa, p as pc, E as pi, fe as pl, As as pn, yr as po, ko as pr, pn as ps, Uc as pt, Ml as q, Hr as qa, Fe as qc, Li as qi, Ko as qn, Mn as qo, Qa as qr, Ft as qs, dc as qt, Nu as r, ki as ra, St as rc, Pa as ri, xe as rl, Fs as rn, br as ro, Uo as rr, wn as rs, Tl as rt, Eu as s, yi as sa, vt as sc, xa as si, he as sl, zs as sn, gr as so, Oo as sr, bn as ss, Cl as st, Fu as t, ji as ta, Et as tc, Ra as ti, Te as tl, Gs as tn, Dr as to, Ro as tr, En as ts, kl as tt, vu as u, Ti as ua, _t as uc, va as ui, ve as ul, Ps as un, Tr as uo, Eo as ur, xn as us, Pc as ut, hu as v, pi as va, st as vc, ua as vi, ne as vl, Ts as vn, lr as vo, Co as vr, cn as vs, zc as vt, du as w, ri as wa, nt as wc, ra as wi, a as wl, ys as wn, tr as wo, eo as wr, Qt as ws, Ac as wt, Y as x, ai as xa, rt as xc, pa as xi, te as xl, xs as xn, nr as xo, So as xr, an as xs, Vc as xt, X as y, hi as ya, lt as yc, da as yi, ie as yl, ws as yn, cr as yo, bo as yr, ln as ys, Rc as yt, Gl as z, Pr as za, He as zc, Ki as zi, Xo as zn, Bn as zo, co as zr, Wt as zs, Cc as zt };
