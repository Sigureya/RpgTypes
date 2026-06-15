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
}), Xi = (e) => {
	let t = e.trim();
	return /^\\[NnVv]\[\d+\]$/.test(t);
}, C = (e, t) => `\\${e}[${t}]`, w = (e, t) => t.map(((t, n) => ({
	text: t,
	controlChar: C(e, n)
}))), Zi = (e) => w("N", e), Qi = (e) => w("V", e), $i = (e) => Array.from(e.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map(((e) => ({
	char: e[1],
	id: parseInt(e[2], 10)
}))), ea = (e) => e.map(((e) => ({
	text: e.name,
	controlChar: C("N", e.id)
}))), ta = (e) => e.variables.map(((e, t) => ({
	text: e || "",
	controlChar: C("V", t)
}))).filter(((e) => e.text !== "")), na = (e) => !!e, ra = (e, t, n) => ({
	data: e,
	eventId: t,
	pageIndex: n
}), ia = (e, t, n) => e.list.map(((e) => ({
	data: e,
	eventId: n.id,
	pageIndex: t
}))), T = (e, t) => e.pages.map(((n, r) => t(n, r, e))), aa = (e, t) => e.events.filter(na).map(((e) => T(e, t))), oa = (e, t) => e.events.filter(na).flatMap(((e) => T(e, t))), sa = (e, t) => e.map(((e) => T(e, t))), ca = (e, t) => e.flatMap(((e) => T(e, t))), la = (e, t) => e.map(((e) => t(e, 0, e))), ua = (e) => aa(e, ia).flat(2), da = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	trigger: e.trigger ?? 0,
	list: e.list ?? [],
	switchId: e.switchId ?? 0
}), fa = (e = {}) => ({
	id: e.id ?? 0,
	name: e.name ?? "",
	members: e.members ?? [],
	pages: e.pages ?? []
}), pa = (e) => ({
	span: e.span ?? 0,
	conditions: ha(e.conditions ?? {}),
	list: e.list ?? []
}), ma = (e = {}) => ({
	enemyId: e.enemyId ?? 0,
	x: e.x ?? 0,
	y: e.y ?? 0,
	hidden: e.hidden ?? !1
}), ha = (e = {}) => ({
	actorHp: e.actorHp ?? 0,
	actorId: e.actorId ?? 0,
	enemyValid: e.enemyValid ?? 0,
	switchValid: e.switchValid ?? 0
}), ga = (e = {}) => ({
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
}), O = ({ list: e = [], conditions: t = ga(), image: n = D(), moveFrequency: r = 5, directionFix: i = !1, moveRoute: a = {
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
}), _a = (e, t) => ({
	map: t,
	filename: `Map${e.id.toString().padStart(3, "0")}`,
	editingName: e.name
}), va = (e) => ya({ events: [E({ pages: [O({ list: e })] })] }), ya = (e = {}) => ({
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
}), ba = (e) => e.toString().padStart(3, "0"), xa = (e = { id: 0 }) => ({
	name: e.name ?? ba(e.id),
	id: e.id,
	expanded: e.expanded ?? !1,
	order: e.order ?? 0,
	parentId: e.parentId ?? 0,
	scrollX: e.scrollX ?? 0,
	scrollY: e.scrollY ?? 0
}), Sa = (e, t) => e.map(((e) => e ? {
	...e,
	pages: Ca(e, t)
} : null)), Ca = (e, t) => e.pages.map(((e) => ({
	...e,
	list: t(e.list)
}))), wa = (e, t) => [
	Ta(e.skills, t),
	Ea(e.actors, t),
	Da(e.states, t),
	Oa(e.armors, t),
	ka(e.classes, t),
	Aa(e.enemies, t),
	ja(e.items, t),
	Ma(e.weapons, t),
	Na(e.commonEvents, t)
], Ta = (e, t) => ({
	label: t.skill.title,
	items: e,
	source: {
		author: "rmmz",
		module: "data",
		kind: "skill"
	}
}), Ea = (e, t) => ({
	items: e,
	label: t.actor.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "actor"
	}
}), Da = (e, t) => ({
	items: e,
	label: t.state.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "state"
	}
}), Oa = (e, t) => ({
	items: e,
	label: t.armor.title,
	source: {
		author: "rmmz",
		kind: "armor",
		module: "data"
	}
}), ka = (e, t) => ({
	items: e,
	label: t.class.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "class"
	}
}), Aa = (e, t) => ({
	items: e,
	label: t.enemy.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "enemy"
	}
}), ja = (e, t) => ({
	items: e,
	label: t.item.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "item"
	}
}), Ma = (e, t) => ({
	items: e,
	label: t.weapon.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "weapon"
	}
}), Na = (e, t) => ({
	items: e,
	label: t.commonEvent.title,
	source: {
		author: "rmmz",
		module: "data",
		kind: "common_event"
	}
}), Pa = {
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
}, Fa = (e = {}) => ({
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
}), Ia = (e) => ({
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
}), La = (e = {}) => ({
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
}), Ra = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ?? Ba(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), za = (e) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	traits: e.traits ?? [],
	note: e.note ?? "",
	params: e.params ? Va(e.params) : Ba(),
	learnings: e.learnings ?? [],
	expParams: e.expParams ?? []
}), Ba = () => [
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0],
	[0]
], Va = (e) => {
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
}, Ha = ({ mhp: e = 0, mmp: t = 0, atk: n = 0, def: r = 0, mat: i = 0, mdf: a = 0, agi: o = 0, luk: s = 0 }) => [
	e,
	t,
	n,
	r,
	i,
	a,
	o,
	s
], Ua = (e) => {
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
}, Wa = (e = {}) => ({
	dataId: e.dataId ?? 0,
	denominator: e.denominator ?? 0,
	kind: e.kind ?? 0
}), Ga = (e = {}) => ({
	conditionParam1: e.conditionParam1 ?? 0,
	conditionParam2: e.conditionParam2 ?? 0,
	conditionType: e.conditionType ?? 0,
	rating: e.rating ?? 0,
	skillId: e.skillId ?? 0
}), Ka = (e = {}) => ({
	name: e.name ?? "",
	id: e.id ?? 0,
	battlerName: e.battlerName ?? "",
	battlerHue: e.battlerHue ?? 0,
	dropItems: e.dropItems?.map((() => Wa())) ?? [],
	exp: e.exp ?? 0,
	gold: e.gold ?? 0,
	traits: [],
	note: e.note ?? "",
	params: e.params ? [...e.params] : Ha({
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
}), qa = (e = {}) => ({
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
}), Ja = 11, Ya = 12, Xa = 13, Za = 14, Qa = 21, $a = 22, eo = 23, to = 31, no = 32, ro = 33, io = 34, ao = 35, oo = 41, so = 42, co = 43, lo = 44, uo = 51, fo = 52, po = 53, mo = 54, ho = 55, go = 61, _o = 62, vo = 63, yo = 64, bo = 0, xo = 1, So = 2, Co = 3, wo = (e, t) => ({
	items: To(e.options, t),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), To = (e, t) => [
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
], Eo = 0, Do = 1, Oo = 2, ko = 3, Ao = 4, jo = 5, Mo = 6, No = 7, Po = 8, Fo = 9, Io = (e) => ({
	items: Lo(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), Lo = (e) => [
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
], Ro = (e, t) => {
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
}, zo = 0, Bo = 1, Vo = 2, Ho = 3, Uo = 4, Wo = 5, Go = 6, Ko = 7, qo = (e) => ({
	items: Jo(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Jo = (e) => [
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
], Yo = (e, t) => {
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
}, Xo = 0, Zo = 1, Qo = 2, $o = 3, es = 4, ts = 5, ns = 6, rs = 7, is = 8, as = 9, os = (e) => ({
	items: ss(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), ss = (e) => [
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
], cs = (e, t) => {
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
}, ls = 0, us = 1, ds = 2, fs = 3, ps = 4, ms = 5, hs = (e) => ({
	items: gs(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "partyAbility"
	}
}), gs = (e) => [
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
], _s = 0, vs = 1, ys = 2, bs = 3, xs = (e) => ({
	items: Ss(e.options),
	label: e.title,
	source: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), Ss = (e) => [
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
], k = "{name}", A = "{name} * {value}%", Cs = "{name} + {value}%", ws = "{value}", Ts = {
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
			format: Cs,
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
			format: Cs
		},
		attackSpeed: {
			title: "攻撃速度補正",
			format: ws
		},
		attackTimes: {
			title: "攻撃追加回数",
			format: ws
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
}, Es = (e, t) => [
	qo(e.regularParam),
	Io(e.extraParam),
	os(e.specialParam),
	wo(e.collaps, t),
	xs(e.specialFlag),
	hs(e.partyAbility)
], Ds = {
	itemMapper: {
		placeHolder: "name",
		dataIdKey: "dataId",
		kindKey: "code"
	},
	placeHolder: { numbers: ["value"] }
}, Os = (t, r, i) => e(r, i, n(Ds), t.pattern, ((e) => e.dataId)), ks = {
	title: "ダメージ",
	options: {}
}, j = (e = {}) => ({
	type: e.type ?? 0,
	elementId: e.elementId ?? 0,
	formula: e.formula ?? "",
	variance: e.variance ?? 0,
	critical: e.critical ?? !1
}), As = (e = {}) => ({
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
}), js = {
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
}, Ms = {
	title: "武器",
	options: { weaponTypeId: "武器タイプID" }
}, Ns = 0, Ps = 1, Fs = 2, Is = 11, Ls = 12, Rs = 13, zs = 21, Bs = 22, Vs = 31, Hs = 32, Us = 33, Ws = 34, Gs = 41, Ks = 42, qs = 43, Js = 44, Ys = (e) => [
	Zs(e),
	Qs(e),
	$s(e),
	ec(e),
	tc(e),
	nc(e),
	rc(e),
	ic(e),
	ac(e),
	Xs(e),
	oc(e),
	sc(e),
	cc(e)
], M = (e, t, n) => ({
	kindId: e,
	label: t.domainName,
	pattern: t.format,
	description: t.desc,
	dataSource: n
}), Xs = (e) => M(41, e.special), Zs = (e) => M(11, e.recoverHp), Qs = (e) => M(12, e.recoverMp), $s = (e) => M(13, e.gainTp), ec = (e) => M(21, e.addState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), tc = (e) => M(22, e.removeState, {
	author: "rmmz",
	module: "data",
	kind: "state"
}), nc = (e) => M(31, e.addBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), rc = (e) => M(32, e.addDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), ic = (e) => M(33, e.removeBuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), ac = (e) => M(34, e.removeDebuff, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), oc = (e) => M(42, e.grow, {
	author: "rmmz",
	module: "trait",
	kind: "params"
}), sc = (e) => M(43, e.learnSkill, {
	author: "rmmz",
	module: "data",
	kind: "skill"
}), cc = (e) => M(44, e.commonEvent, {
	author: "rmmz",
	module: "data",
	kind: "common_event"
}), lc = "{name} {value1}%", N = "{value1}% + {value2}", uc = "{name} {value1}ターン", P = "{name}", dc = {
	title: "使用効果",
	options: {
		addBuff: {
			desc: "バフを付与する",
			domainName: "バフ付与",
			format: uc
		},
		addDebuff: {
			desc: "デバフを付与する",
			domainName: "デバフ付与",
			format: uc
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
			format: lc
		},
		special: {
			desc: "特殊効果",
			domainName: "特殊効果",
			format: P
		},
		addState: {
			desc: "状態異常を解除する",
			domainName: "ステート解除",
			format: lc
		},
		commonEvent: {
			desc: "コモンイベントを実行する",
			domainName: "コモンイベント",
			format: P
		}
	}
}, fc = 0, pc = (e, t, n) => {
	let r = n.find(((e) => e.id === t.dataId)), i = r ? r.name : "Unknown Item";
	return e.pattern.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", i);
}, mc = {
	title: "アイテム",
	options: { consumable: "消耗品" }
}, hc = {
	title: "スキル",
	options: {
		requiredWeaponTypeId1: "必要武器タイプ1",
		requiredWeaponTypeId2: "必要武器タイプ2",
		mpCost: "MP消費",
		tpCost: "TP消費"
	}
}, gc = {
	title: "",
	options: {
		scope: "範囲",
		speed: "速度補正",
		successRate: "成功率"
	}
}, _c = (e = {}) => ({
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
}), vc = (e = {}) => ({
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
}), yc = (e) => Fa({
	battlerName: e.image,
	characterName: e.image,
	faceName: e.image,
	name: e.text,
	profile: e.text,
	nickname: e.text,
	note: e.note
}), bc = (e) => Ra({
	name: e.text,
	note: e.note
}), xc = (e) => As({
	name: e.text,
	note: e.note,
	description: e.text
}), Sc = (e) => La({
	name: e.text,
	note: e.note,
	description: e.text
}), Cc = (e) => Ka({
	name: e.text,
	note: e.note,
	battlerName: e.image
}), wc = (e) => qa({
	name: e.text,
	note: e.note,
	message1: e.text,
	message2: e.text,
	message3: e.text,
	message4: e.text
}), Tc = (e) => vc({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text,
	message1: e.text,
	message2: e.text
}), Ec = (e) => _c({
	name: e.text,
	note: e.note,
	iconIndex: 0,
	description: e.text
}), Dc = (e, t) => F(e.note, ((n, r) => t(n, r, e))), Oc = (e) => F(e, ((e, t) => ({
	key: e,
	value: t
}))), F = (e, t) => Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g), ((e) => t(e[1], e[2]))), I = (e, t = "\n") => [...e.items.map(((e) => `<${e.key}:${e.value}>`)), e.note].join(t).trim(), L = (e) => ({
	note: kc(e),
	items: Oc(e)
}), kc = (e) => {
	if (e.length >= 3e4) throw Error("Note text is too long. Please shorten it.");
	return e.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, "");
}, R = (e, t) => `<${e}:${t}>`, Ac = (e, t, n = "\n") => {
	let r = L(e), i = r.items.map(((e) => ({
		key: e.key,
		value: t(e)
	})));
	return I({
		note: r.note,
		items: i
	}, n);
}, jc = (e, t) => {
	let n = Array.from(e.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).find(((e) => e[1] === t));
	return n ? n[2] : void 0;
}, Mc = (e, t, n) => e.replace(/<([^<>:]{1,100}):([^>]{1,1000})>/g, ((e, r) => r === t ? R(r, n) : e)), Nc = (e) => Array.from(e.note.matchAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g)).map(((t) => ({
	key: t[1],
	value: t[2],
	id: e.id,
	name: e.name
}))), Pc = (e, t, n = "\n") => {
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
}, Fc = "data", Ic = "actor", Lc = "map", Rc = "enemy", zc = "state", Bc = "skill", Vc = "item", Hc = "weapon", Uc = "armor", Wc = "class", Gc = "common_event", Kc = "troop", qc = (e) => [
	Jc(e.elementRate),
	Yc(e.debuffRate),
	Xc(e.stateRate),
	Zc(e.stateResist),
	Qc(e.regularParam),
	$c(e.extraParam),
	el(e.specialParam),
	tl(e.attackElement),
	nl(e.attackState),
	rl(e.attackSpeed),
	il(e.attackTimes),
	al(e.attackSkill),
	ol(e.skillTypeAdd),
	sl(e.skillTypeSeal),
	cl(e.skillAdd),
	ll(e.skillSeal),
	ul(e.equipWeaponType),
	dl(e.equipArmorType),
	fl(e.equipLock),
	pl(e.equipSeal),
	ml(e.slotType),
	hl(e.actionPlus),
	gl(e.specialFlag),
	_l(e.collaps),
	vl(e.partyAbility)
], Jc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 11,
	dataSource: yl()
}), Yc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 12,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), Xc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 13,
	dataSource: z()
}), Zc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 14,
	dataSource: z()
}), Qc = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 21,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "params"
	}
}), $c = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 22,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "xparams"
	}
}), el = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 23,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sparams"
	}
}), tl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 31,
	dataSource: yl()
}), nl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 32,
	dataSource: z()
}), rl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 33
}), il = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 34
}), al = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 35,
	dataSource: B()
}), ol = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 41,
	dataSource: bl()
}), sl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 42,
	dataSource: bl()
}), cl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 43,
	dataSource: B()
}), ll = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 44,
	dataSource: B()
}), ul = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 51,
	dataSource: xl()
}), dl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 52,
	dataSource: Sl()
}), fl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 53,
	dataSource: V()
}), pl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 54,
	dataSource: V()
}), ml = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 55,
	dataSource: V()
}), hl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 61
}), gl = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 62,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "sflag"
	}
}), _l = (e) => ({
	pattern: e.format,
	label: e.title,
	kindId: 63,
	dataSource: {
		author: "rmmz",
		module: "trait",
		kind: "collaps"
	}
}), vl = (e) => ({
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
}), yl = () => ({
	author: "rmmz",
	module: "system",
	kind: "elements"
}), bl = () => ({
	author: "rmmz",
	module: "system",
	kind: "skillTypes"
}), xl = () => ({
	author: "rmmz",
	module: "system",
	kind: "weaponTypes"
}), Sl = () => ({
	author: "rmmz",
	module: "system",
	kind: "armorTypes"
}), V = () => ({
	author: "rmmz",
	module: "system",
	kind: "equipTypes"
}), Cl = {
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
}, wl = () => ({
	rpg: {
		damage: ks,
		data: Pa,
		traits: Ts,
		itemEffect: dc
	},
	global: Cl
}), Tl = [
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
], El = [
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
], Dl = [
	"SceneManager",
	"AudioManager",
	"ImageManager",
	"DataManager",
	"PluginManager"
], Ol = ["Math.max", "Math.min"], kl = (e) => H(e, Tl) || H(e, El) || H(e, Dl) || H(e, Ol), H = (e, t) => t.some(((t) => e.includes(t))), Al = (e = {}) => ({
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
}), jl = (e = {}) => [
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
}), Ml = (e) => ({
	item: Nl(e),
	skill: Pl(e),
	equip: Fl(e),
	status: Il(e),
	formation: Ll(e),
	save: Rl(e)
}), Nl = (e) => e.menuCommands[0], Pl = (e) => e.menuCommands[1], Fl = (e) => e.menuCommands[2], Il = (e) => e.menuCommands[3], Ll = (e) => e.menuCommands[4], Rl = (e) => e.menuCommands[5], zl = (e) => e.itemCategories[0], Bl = (e) => e.itemCategories[1], Vl = (e) => e.itemCategories[2], Hl = (e) => e.itemCategories[3], Ul = (e = {}) => [
	e.item ?? !0,
	e.weapon ?? !0,
	e.armor ?? !0,
	e.keyItem ?? !0
], Wl = (e) => ({
	item: e[0],
	weapon: e[1],
	armor: e[2],
	keyItem: e[3]
}), Gl = (e = {}) => [
	e.item ?? !0,
	e.skill ?? !0,
	e.equip ?? !0,
	e.status ?? !0,
	e.formation ?? !0,
	e.save ?? !0
], Kl = (e) => ({
	item: e[0],
	skill: e[1],
	equip: e[2],
	status: e[3],
	formation: e[4],
	save: e[5]
}), ql = (e = {}) => ({
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
}), Jl = (e = {}) => ({
	startMapId: e.startMapId ?? 0,
	startX: e.startX ?? 0,
	startY: e.startY ?? 0,
	partyMembers: e.partyMembers ? Array.from(e.partyMembers) : [1]
}), W = (e, t) => ({
	name: e,
	id: t
}), Yl = (e) => e.variables.map(W), Xl = (e) => e.elements.map(W), Zl = (e) => e.equipTypes.map(W), Ql = (e) => e.skillTypes.map(W), $l = (e) => e.weaponTypes.map(W), eu = (e) => e.armorTypes.map(W), tu = (e) => e.switches.map(W), nu = (e, t) => [
	iu(e, t),
	au(e, t),
	lu(e, t),
	ou(e, t),
	ru(e, t),
	su(e, t),
	cu(e, t)
], ru = (e, t) => ({
	items: eu(e),
	label: t.options.armorTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "armorTypes"
	}
}), iu = (e, t) => ({
	items: Xl(e),
	label: t.options.elements,
	source: {
		author: "rmmz",
		module: "system",
		kind: "elements"
	}
}), au = (e, t) => ({
	items: Zl(e),
	label: t.options.equipTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "equipTypes"
	}
}), ou = (e, t) => ({
	items: Ql(e),
	label: t.options.skillTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "skillTypes"
	}
}), su = (e, t) => ({
	items: Yl(e),
	label: t.options.variables,
	source: {
		author: "rmmz",
		module: "system",
		kind: "variable"
	}
}), cu = (e, t) => ({
	items: tu(e),
	label: t.options.switches,
	source: {
		author: "rmmz",
		module: "system",
		kind: "switch"
	}
}), lu = (e, t) => ({
	items: $l(e),
	label: t.options.weaponTypes,
	source: {
		author: "rmmz",
		module: "system",
		kind: "weaponTypes"
	}
}), uu = (e) => ({
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
}), du = (e) => ({
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
}), fu = (e) => e.terms.params.map(((e, t) => ({
	name: e,
	id: t
}))), pu = (e) => [
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
}), mu = (e) => [
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
}), hu = (e) => gu(e, ""), gu = (e, t) => [
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
}), _u = (e) => ({
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
}), vu = (e = {}) => ({
	jsonFormatLevel: e.jsonFormatLevel ?? 0,
	messageWidth1: e.messageWidth1 ?? 816,
	messageWidth2: e.messageWidth2 ?? 816
}), yu = {
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
}, bu = {
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
}, xu = {
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
}, Su = {
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
	let n = wu(e.size);
	return {
		...ql(e.options),
		titleCommandWindow: _u(e.titleCommandWindow ?? {}),
		currencyUnit: e.texts?.currencyUnit ?? "",
		gameTitle: e.texts?.gameTitle ?? "",
		sounds: jl(e.sounds),
		editor: vu(e.editing),
		advanced: Al(e.advanced),
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
		testBattlers: Tu(e.battleTest?.testBattlers, Eu),
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
		terms: Cu(e.terms ?? {}),
		itemCategories: Ul(e.itemCategories),
		partyMembers: $(e.gameInit?.partyMembers),
		battlerHue: 0,
		menuCommands: Gl(e.menuCommands)
	};
}, Cu = (e) => ({
	basic: mu(e.basic ?? {}),
	commands: hu(e.commands ?? {}),
	params: pu(e.params ?? {}),
	messages: q(e.messages ?? {})
}), $ = (e) => e ? [...e] : [], wu = (e) => e ? {
	tileSize: e.tileSize ?? 48,
	faceSize: e.faceSize ?? 144,
	iconSize: e.iconSize ?? 32
} : {
	tileSize: 48,
	faceSize: 144,
	iconSize: 32
}, Tu = (e, t) => e ? e.map(t) : [], Eu = (e) => e ? {
	actorId: e.actorId,
	equips: $(e.equips),
	level: e.level
} : {
	actorId: 0,
	equips: [],
	level: 1
}, Du = (e, t) => {
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
			messages: Nu(e.terms.messages, n),
			basic: Ou(e.terms.basic, n),
			params: ku(e.terms.params, n),
			commands: Au(e.terms.commands, n)
		}
	};
}, Ou = (e, t) => ({
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
}), ku = (e, t) => ({
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
}), Au = (e, t) => ({
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
}), ju = (e) => ({
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
}), Mu = (e, t) => Q({
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
	itemCategories: Wl(e.itemCategories),
	menuCommands: Kl(e.menuCommands),
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
}), Nu = (e, t) => ({
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
}), Pu = (e = Q({})) => ({
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
		messages: du(e.terms.messages)
	}
}), Fu = (e) => Q({
	versionId: e.versionId,
	menuCommands: Ml(e),
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
}), Iu = ({ audio: e, image: n, systemText: r, switches: i, variables: a }) => Q({
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
	terms: Lu(r),
	sounds: Ru(e)
}), Lu = (e) => ({
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
}), Ru = (e) => {
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
}, zu = (e) => ({
	...e.text ? { text: e.text } : {},
	...e.desc ? { desc: e.desc } : {}
}), Bu = {
	LEFT: 4,
	UP: 8,
	DOWN: 2,
	RIGHT: 6
}, Vu = (e) => {
	let t = e.split("/");
	return t[t.length - 1];
};
export { Il as $, Mr as $a, Ee as $c, Bi as $i, Vo as $n, An as $o, Ka as $r, At as $s, Hs as $t, nu as A, di as Aa, f as Ac, T as Ai, s as Al, ds as An, er as Ao, io as Ar, $t as As, I as At, Gl as B, Ur as Ba, Be as Bc, Qi as Bi, is as Bn, Wn as Bo, co as Br, Ht as Bs, Tc as Bt, Y as C, ii as Ca, ct as Cc, ma as Ci, oe as Cl, Ss as Cn, sr as Co, Co as Cr, rn as Cs, Hc as Ct, du as D, ri as Da, nt as Dc, ra as Di, a as Dl, ys as Dn, tr as Do, ao as Dr, Qt as Ds, Nc as Dt, fu as E, ni as Ea, it as Ec, ia as Ei, ae as El, bs as En, ir as Eo, to as Er, dn as Es, jc as Et, tu as F, Xr as Fa, Ye as Fc, $i as Fi, fs as Fn, Xn as Fo, po as Fr, qt as Fs, yc as Ft, Vl as G, Br as Ga, Me as Gc, Wi as Gi, $o as Gn, Vn as Go, eo as Gr, Rt as Gs, gc as Gt, Ul as H, Pr as Ha, He as Hc, Ki as Hi, es as Hn, Bn as Ho, oo as Hr, Wt as Hs, xc as Ht, Yl as I, Jr as Ia, Xe as Ic, Zi as Ii, os as In, Qn as Io, mo as Ir, Jt as Is, Sc as It, zl as J, Lr as Ja, Ne as Jc, Hi as Ji, Xo as Jn, Nn as Jo, Za as Jr, Nt as Js, pc as Jt, Fl as K, Wr as Ka, Ie as Kc, Ui as Ki, Qo as Kn, Rn as Ko, _o as Kr, Mt as Ks, hc as Kt, $l as L, Yr as La, Ze as Lc, C as Li, cs as Ln, Jn as Lo, uo as Lr, Yt as Ls, bc as Lt, Xl as M, ci as Ma, et as Mc, sa as Mi, i as Ml, ls as Mn, qn as Mo, Ya as Mr, Zt as Ms, Oc as Mt, Zl as N, v as Na, $e as Nc, ea as Ni, ee as Nl, us as Nn, Yn as No, Ja as Nr, Xt as Ns, F as Nt, q as O, li as Oa, tt as Oc, ua as Oi, r as Ol, hs as On, ar as Oo, ro as Or, nn as Os, Ac as Ot, Ql as P, ei as Pa, Je as Pc, ta as Pi, c as Pl, ps as Pn, Zn as Po, fo as Pr, Kt as Ps, Dc as Pt, Pl as Q, jr as Qa, ke as Qc, zi as Qi, Go as Qn, Pn as Qo, Ga as Qr, Lt as Qs, Vs as Qt, Jl as R, Gr as Ra, Ke as Rc, w as Ri, ss as Rn, Kn as Ro, Qa as Rr, Bt as Rs, Cc as Rt, mu as S, hi as Sa, lt as Sc, ha as Si, ie as Sl, xs as Sn, cr as So, So as Sr, ln as Ss, Kc as St, J as T, oi as Ta, at as Tc, ca as Ti, re as Tl, vs as Tn, rr as To, go as Tr, un as Ts, R as Tt, Wl as U, Fr as Ua, Ve as Uc, Gi as Ui, rs as Un, zn as Uo, so as Ur, Gt as Us, vc as Ut, Kl as V, zr as Va, Ue as Vc, Yi as Vi, Zo as Vn, Un as Vo, lo as Vr, Ut as Vs, wc as Vt, Ml as W, Ir as Wa, ze as Wc, Ji as Wi, ns as Wn, Hn as Wo, ho as Wr, zt as Ws, _c as Wt, Hl as X, Hr as Xa, Fe as Xc, Li as Xi, Yo as Xn, Mn as Xo, qa as Xr, Ft as Xs, dc as Xt, Nl as Y, Rr as Ya, Le as Yc, Ri as Yi, qo as Yn, Ln as Yo, $a as Yr, Pt as Ys, fc as Yt, Rl as Z, Nr as Za, Ae as Zc, Ii as Zi, Jo as Zn, In as Zo, Wa as Zr, It as Zs, Ys as Zt, Z as _, vi as _a, pt as _c, O as _i, ue as _l, j as _n, Cr as _o, Po as _r, hn as _s, Rc as _t, Pu as a, Ai as aa, Ct as ac, Fa as ai, Se as al, Is as an, wr as ao, Wo as ar, Sn as as, El as at, gu as b, mi as ba, ot as bc, da as bi, le as bl, Es as bn, dr as bo, wo as br, sn as bs, Bc as bt, Nu as c, Oi as ca, xt as cc, wa as ci, be as cl, Ws as cn, hr as co, Lo as cr, m as cs, Ol as ct, Q as d, bi as da, gt as dc, ba as di, pe as dl, Ns as dn, _r as do, Oo as dr, gn as ds, qc as dt, Mi as ea, Ot as ec, Ha as ei, De as el, zs as en, Er as eo, Ho as er, Dn as es, Bl as et, yu as f, Ci as fa, yt as fc, ya as fi, me as fl, Fs as fn, xr as fo, Do as fr, vn as fs, Fc as ft, vu as g, Di as ga, p as gc, D as gi, fe as gl, As as gn, yr as go, jo as gr, pn as gs, Gc as gt, Su as h, wi as ha, mt as hc, E as hi, ce as hl, js as hn, vr as ho, Ao as hr, yn as hs, Wc as ht, Fu as i, ji as ia, Et as ic, La as ii, Te as il, qs as in, Dr as io, Bo as ir, En as is, kl as it, eu as j, si as ja, Qe as jc, aa as ji, o as jl, ms as jn, $n as jo, vo as jr, en as js, L as jt, uu as k, ui as ka, qe as kc, la as ki, l as kl, gs as kn, or as ko, no as kr, tn as ks, Mc as kt, Mu as l, xi as la, bt as lc, Sa as li, _e as ll, Bs as ln, pr as lo, ko as lr, Tn as ls, wl as lt, xu as m, Si as ma, ht as mc, _a as mi, ge as ml, Ms as mn, Sr as mo, No as mr, _n as ms, Uc as mt, Bu as n, Pi as na, Tt as nc, Ra as ni, Ce as nl, Rs as nn, Or as no, Uo as nr, On as ns, U as nt, Iu as o, ki as oa, St as oc, Ia as oi, xe as ol, Ls as on, br as oo, Io as or, wn as os, Tl as ot, bu as p, Ti as pa, _t as pc, va as pi, ve as pl, Ps as pn, Tr as po, Eo as pr, xn as ps, Ic as pt, Ll as q, Vr as qa, Pe as qc, Vi as qi, ts as qn, Fn as qo, Xa as qr, jt as qs, mc as qt, zu as r, Fi as ra, Dt as rc, za as ri, we as rl, Ks as rn, Ar as ro, zo as rr, kn as rs, Al as rt, ju as s, Ei as sa, wt as sc, Pa as si, ye as sl, Us as sn, mr as so, Ro as sr, Cn as ss, Dl as st, Vu as t, Ni as ta, kt as tc, Ua as ti, Oe as tl, Js as tn, kr as to, Ko as tr, jn as ts, jl as tt, Du as u, yi as ua, vt as uc, xa as ui, he as ul, Gs as un, gr as uo, Mo as ur, bn as us, Cl as ut, _u as v, gi as va, ft as vc, ga as vi, se as vl, ks as vn, fr as vo, Fo as vr, mn as vs, Vc as vt, pu as w, ai as wa, rt as wc, oa as wi, te as wl, _s as wn, nr as wo, bo as wr, an as ws, Pc as wt, X as x, pi as xa, st as xc, fa as xi, ne as xl, Ts as xn, lr as xo, xo as xr, cn as xs, zc as xt, hu as y, fi as ya, dt as yc, pa as yi, de as yl, Os as yn, ur as yo, To as yr, on as ys, Lc as yt, ql as z, Kr as za, Ge as zc, Xi as zi, as as zn, Gn as zo, yo as zr, Vt as zs, Ec as zt };
