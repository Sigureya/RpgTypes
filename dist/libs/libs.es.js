import { A as ka, B as ya, C as wa, a as xa, b as ba, c as Ka, d as Xa, e as za, f as Ja, g as Za, h as ja, i as qa, j as Qa, k as $a, l as aE, m as EE, n as sE, o as eE, p as _E, q as OE, r as TE, s as RE, t as AE, u as rE, v as NE, w as oE, x as CE, y as tE, z as mE, D as nE, E as ME, F as SE, G as LE, H as IE, I as UE, J as HE, K as PE, L as cE, M as GE, N as dE, O as pE, P as iE, Q as lE, R as uE, S as gE, T as DE, U as FE, V as hE, W as VE, X as vE, Y as WE, Z as BE, _ as fE, $ as YE, a0 as kE, a1 as yE, a2 as wE, a3 as xE, a4 as bE, a5 as KE, a6 as XE, a7 as zE, a8 as JE, a9 as ZE, aa as jE, ab as qE, ac as QE, ad as $E, ae as as, af as Es, ag as ss, ah as es, ai as _s, aj as Os, ak as Ts, al as Rs, am as As, an as rs, ao as Ns, ap as os, aq as Cs, ar as ts, as as ms, at as ns, au as Ms, av as Ss, aw as Ls, ax as Is, ay as Us, az as Hs, aA as Ps, aB as cs, aC as Gs, aD as ds, aE as ps, aF as is, aG as ls, aH as us, aI as gs, aJ as Ds, aK as Fs, aL as hs, aM as Vs, aN as vs, aO as Ws, aP as Bs, aQ as fs, aR as Ys, aS as ks, aT as ys, aU as ws, aV as xs, aW as bs, aX as Ks, aY as Xs, aZ as zs } from "../shared/makeAudio.es.js";
import { h as o, i as C } from "../shared/applyFormat.es.js";
import { O as Zs, a as js, b as qs, c as Qs, d as $s, e as ae, f as Ee, g as se } from "../shared/applyFormat.es.js";
import { n as _e } from "../shared/normalText.es.js";
import { v as Te } from "../shared/validateWithErrors.es.js";
const v = "rmmz", W = "colors", r = (a) => `${a.author}.${a.module}.${a.kind}`, B = (a, E, s, e = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => a.pattern.length >= e.formatMaxLength ? {
  formatLabel: a.label,
  syntaxErrors: [{ message: s.formatVeryLong, reason: a.pattern.slice(0, e.formatMaxLength) }],
  semanticErrors: []
} : {
  formatLabel: a.label,
  semanticErrors: m(a, E, s),
  syntaxErrors: t(a.pattern, E, s, e.placeHolderMaxLength)
}, t = (a, E, s, e) => {
  const _ = Array.from(a.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), O = o(E);
  return _.reduce(((T, N) => {
    const R = N[1];
    return R.length === 0 ? T : R.length > e ? (T.push({ message: s.longPlaceHolder, reason: R.slice(0, e) }), T) : (O.has(R) || T.push({ message: s.extraPlaceHolder, reason: R }), T);
  }), []);
}, m = (a, E, s) => C(E).reduce(((e, _) => {
  const O = n(a, _, s);
  return O && e.push(O), e;
}), []), n = (a, E, s) => {
  const e = a.pattern.includes(E.placeHolder), _ = !!a.dataSource;
  return !e && _ ? {
    message: s.missingName,
    reason: E.placeHolder
  } : e && !_ ? { message: s.missingSourceId, reason: E.placeHolder } : void 0;
}, f = (a, E) => {
  const s = L(E);
  return a.reduce(((e, _) => {
    const O = M(_, s);
    return e.set(_.kindId, O), e;
  }), /* @__PURE__ */ new Map());
}, M = (a, E) => {
  const s = S(a.dataSource, E);
  return { patternCompiled: a.pattern, label: a.label, data: s ? s.items : void 0 };
}, S = (a, E) => {
  if (a) return E.get(r(a));
}, L = (a) => a.reduce(((E, s) => {
  const e = { items: I(s.items), source: s.source, label: s.label };
  return E.set(r(s.source), e), E;
}), /* @__PURE__ */ new Map()), I = (a) => a.map(((E) => ({
  id: E.id,
  name: E.name
}))), Y = (a) => Object.entries(a).map((([, E]) => E.title)), U = (a, E, s) => E.map(((e) => s(e, a[e], a))), k = (a, E, s) => U(a, E, s), y = (a) => typeof a == "number" && !Number.isNaN(a), w = 0, x = 1, b = 2, K = 3, X = 4, z = 5, J = 6, Z = 7, j = 8, q = 9, Q = 10, $ = 11, aa = 12, Ea = 13, sa = 14, ea = 15, _a = 16, Oa = 17, Ta = 18, Ra = 19, Aa = 20, ra = 21, Na = 22, oa = 23, Ca = 24, ta = 25, ma = 26, na = 27, Ma = 28, Sa = 29, La = 30, Ia = 31, Ua = 32, Ha = 33, Pa = 34, ca = 35, Ga = 36, da = 37, pa = 38, ia = 39, la = 40, ua = 41, ga = 42, Da = 43, Fa = 44, ha = 45, Va = (a) => ({
  code: A[a]
}), va = (a) => ({ code: A[a] }), H = (a) => ({ code: A[a] }), Wa = (a) => a.map(((E) => ({ code: A[E] }))), P = (a) => ({ code: 44, parameters: [a] }), c = (a, E) => ({ code: 14, parameters: [a, E] }), G = (a) => ({
  code: 15,
  parameters: [a]
}), d = (a) => ({ code: 27, parameters: [a] }), p = (a) => ({ code: 28, parameters: [a] }), i = (a) => ({ code: 29, parameters: [a] }), l = (a) => ({ code: 30, parameters: [a] }), u = (a, E) => ({
  code: 41,
  parameters: [a, E]
}), g = (a) => ({ code: 42, parameters: [a] }), D = (a) => ({ code: 43, parameters: [a] }), F = (a) => ({ code: 45, parameters: [a] }), A = {
  moveDown: 1,
  moveLeft: 2,
  moveRight: 3,
  moveUp: 4,
  moveLowerLeft: 5,
  moveLowerRight: 6,
  moveUpperLeft: 7,
  moveUpperRight: 8,
  moveRandom: 9,
  moveToward: 10,
  moveAway: 11,
  moveForward: 12,
  moveBackward: 13,
  turnDown: 16,
  turnLeft: 17,
  turnRight: 18,
  turnUp: 19,
  turn90DegreesRight: 20,
  turn90DegreesLeft: 21,
  turn180Degrees: 22,
  turn90DegreesRightOrLeft: 23,
  turnRandom: 24,
  turnToward: 25,
  turnAway: 26
}, Ba = (a) => a.flatMap(((E) => h(E))), h = (a) => {
  const E = a[0];
  if (E === 44 || E === "playSe") {
    const s = a[1];
    return P({ name: s.name, volume: s.volume, pitch: s.pitch, pan: s.pan });
  }
  return E === 41 || E === "changeImage" ? u(a[1], a[2]) : E === 45 || E === "script" ? F(a[1]) : E === 14 || E === "jump" ? c(a[1], a[2]) : E === 15 || E === "wait" ? G(a[1]) : E === 27 || E === "switchOn" ? d(a[1]) : E === 28 || E === "switchOff" ? p(a[1]) : E === 29 || E === "changeSpeed" ? i(a[1]) : E === 30 || E === "changeFrequency" ? l(a[1]) : E === 42 || E === "changeOpacity" ? g(a[1]) : E === 43 || E === "changeBlendMode" ? D(a[1]) : typeof E == "number" ? Array.from({
    length: a[1]
  }, (() => ({ code: E }))) : typeof E == "string" ? Array.from({ length: a[1] }, (() => H(E))) : [];
};
export {
  ka as ABORT_BATTLE,
  v as AUTHOR_RMMZ,
  ya as BATTLE_PROCESSING,
  wa as CHANGE_ACTOR_IMAGES,
  xa as CHANGE_ACTOR_STATE,
  ba as CHANGE_ARMORS,
  Ka as CHANGE_BATTLE_BACKGROUND,
  Xa as CHANGE_BATTLE_BGM,
  za as CHANGE_CLASS,
  Ja as CHANGE_DEFEAT_ME,
  Za as CHANGE_ENCOUNTER,
  ja as CHANGE_ENEMY_HP,
  qa as CHANGE_ENEMY_MP,
  Qa as CHANGE_ENEMY_STATE,
  $a as CHANGE_ENEMY_TP,
  aE as CHANGE_EQUIP,
  EE as CHANGE_EXP,
  sE as CHANGE_FORMATION_ACCESS,
  eE as CHANGE_GOLD,
  _E as CHANGE_HP,
  OE as CHANGE_ITEMS,
  TE as CHANGE_LEVEL,
  RE as CHANGE_MAP_NAME_DISPLAY,
  AE as CHANGE_MENU_ACCESS,
  rE as CHANGE_MP,
  NE as CHANGE_NAME,
  oE as CHANGE_NICKNAME,
  CE as CHANGE_PARALLAX,
  tE as CHANGE_PARAMETER,
  mE as CHANGE_PARTY_MEMBER,
  nE as CHANGE_PLAYER_FOLLOWERS,
  ME as CHANGE_PROFILE,
  SE as CHANGE_SAVE_ACCESS,
  LE as CHANGE_SKILL,
  IE as CHANGE_TILESET,
  UE as CHANGE_TP,
  HE as CHANGE_TRANSPARENCY,
  PE as CHANGE_VEHICLE_BGM,
  cE as CHANGE_VEHICLE_IMAGE,
  GE as CHANGE_VICTORY_ME,
  dE as CHANGE_WEAPONS,
  pE as CHANGE_WINDOW_COLOR,
  iE as COMMENT_BODY,
  lE as COMMENT_HEAD,
  uE as COMMON_EVENT,
  gE as CONDITIONAL_BRANCH,
  DE as CONDITIONAL_BRANCH_ELSE,
  FE as CONTROL_SELF_SWITCH,
  hE as CONTROL_SWITCHES,
  VE as CONTROL_TIMER,
  vE as CONTROL_VARIABLES,
  WE as ENEMY_APPEAR,
  BE as ENEMY_RECOVER_ALL,
  fE as ENEMY_TRANSFORM,
  YE as ERASE_EVENT,
  kE as ERASE_PICTURE,
  yE as EXIT_EVENT_PROCESSING,
  wE as FADEIN_SCREEN,
  xE as FADEOUT_BGM,
  bE as FADEOUT_BGS,
  KE as FADEOUT_SCREEN,
  XE as FLASH_SCREEN,
  zE as FORCE_ACTION,
  JE as GAME_OVER,
  ZE as GATHER_FOLLOWERS,
  jE as GET_LOCATION_INFO,
  qE as GET_ONOFF_VEHICLE,
  QE as INPUT_NUMBER,
  $E as LABEL,
  as as LABEL_JUMP,
  Es as LOOP,
  ss as LOOP_BREAK,
  es as MOVE_PICTURE,
  _s as NAME_INPUT_PROCESSING,
  Os as NO_OPERATION,
  Ts as OPEN_MENU_SCREEN,
  Rs as OPEN_SAVE_SCREEN,
  Zs as OPERATION_ADD,
  js as OPERATION_DIVIDE,
  qs as OPERATION_MOD,
  Qs as OPERATION_MULTIPLY,
  $s as OPERATION_SET,
  ae as OPERATION_SUBTRACT,
  As as PLAY_BGM,
  rs as PLAY_BGS,
  Ns as PLAY_ME,
  os as PLAY_MOVIE,
  Cs as PLAY_SE,
  ts as PLUGIN_COMMAND_MV,
  ms as PLUGIN_COMMAND_MZ,
  ns as RECOVER_ALL,
  Ms as RESUME_BGM,
  Ss as RETURN_TO_TITLE_SCREEN,
  Ls as ROTATE_PICTURE,
  Da as ROUTE_CHANGE_BLEND_MODE,
  La as ROUTE_CHANGE_FREQ,
  ua as ROUTE_CHANGE_IMAGE,
  ga as ROUTE_CHANGE_OPACITY,
  Sa as ROUTE_CHANGE_SPEED,
  Ga as ROUTE_DIR_FIX_OFF,
  ca as ROUTE_DIR_FIX_ON,
  w as ROUTE_END,
  sa as ROUTE_JUMP,
  $ as ROUTE_MOVE_AWAY,
  Ea as ROUTE_MOVE_BACKWARD,
  x as ROUTE_MOVE_DOWN,
  aa as ROUTE_MOVE_FORWARD,
  b as ROUTE_MOVE_LEFT,
  z as ROUTE_MOVE_LOWER_L,
  J as ROUTE_MOVE_LOWER_R,
  q as ROUTE_MOVE_RANDOM,
  K as ROUTE_MOVE_RIGHT,
  Q as ROUTE_MOVE_TOWARD,
  X as ROUTE_MOVE_UP,
  Z as ROUTE_MOVE_UPPER_L,
  j as ROUTE_MOVE_UPPER_R,
  Fa as ROUTE_PLAY_SE,
  ha as ROUTE_SCRIPT,
  Pa as ROUTE_STEP_ANIME_OFF,
  Ha as ROUTE_STEP_ANIME_ON,
  Ma as ROUTE_SWITCH_OFF,
  na as ROUTE_SWITCH_ON,
  pa as ROUTE_THROUGH_OFF,
  da as ROUTE_THROUGH_ON,
  la as ROUTE_TRANSPARENT_OFF,
  ia as ROUTE_TRANSPARENT_ON,
  Na as ROUTE_TURN_180D,
  ra as ROUTE_TURN_90D_L,
  Aa as ROUTE_TURN_90D_R,
  oa as ROUTE_TURN_90D_R_L,
  ma as ROUTE_TURN_AWAY,
  _a as ROUTE_TURN_DOWN,
  Oa as ROUTE_TURN_LEFT,
  Ca as ROUTE_TURN_RANDOM,
  Ta as ROUTE_TURN_RIGHT,
  ta as ROUTE_TURN_TOWARD,
  Ra as ROUTE_TURN_UP,
  ea as ROUTE_WAIT,
  Ua as ROUTE_WALK_ANIME_OFF,
  Ia as ROUTE_WALK_ANIME_ON,
  Is as SAVE_BGM,
  Us as SCRIPT_EVAL,
  Hs as SCRIPT_EVAL_BODY,
  Ps as SCROLL_MAP,
  cs as SELECT_ITEM,
  Gs as SET_EVENT_LOCATION,
  ds as SET_MOVEMENT_ROUTE,
  ps as SET_VEHICLE_LOCATION,
  is as SET_WEATHER_EFFECT,
  ls as SHAKE_SCREEN,
  us as SHOP_PROCESSING,
  gs as SHOP_PROCESSING_BODY,
  Ds as SHOW_ANIMATION,
  Fs as SHOW_BALLOON_ICON,
  hs as SHOW_BATTLE_ANIMATION,
  Vs as SHOW_CHOICES,
  vs as SHOW_CHOICES_ITEM,
  Ws as SHOW_MESSAGE,
  Bs as SHOW_MESSAGE_BODY,
  fs as SHOW_PICTURE,
  Ys as SHOW_SCROLLING_TEXT,
  ks as SHOW_SCROLLING_TEXT_BODY,
  ys as SKIP,
  W as SRC_COLOR,
  ws as STOP_SE,
  xs as TINT_PICTURE,
  bs as TINT_SCREEN,
  Ks as TRANSFER_PLAYER,
  Xs as WAIT,
  Ee as applyFormatRule,
  se as compileFormatRule,
  B as detectFormatErrors,
  Y as domainNames,
  y as isValidNumber,
  zs as makeAudioFileParams,
  D as makeMoveCommandChangeBlendMode,
  l as makeMoveCommandChangeFrequency,
  u as makeMoveCommandChangeImage,
  g as makeMoveCommandChangeOpacity,
  i as makeMoveCommandChangeSpeed,
  va as makeMoveCommandDirection,
  c as makeMoveCommandJump,
  Va as makeMoveCommandMove,
  P as makeMoveCommandPlaySE,
  F as makeMoveCommandScript,
  H as makeMoveCommandSingleEx,
  p as makeMoveCommandSwitchOff,
  d as makeMoveCommandSwitchOn,
  G as makeMoveCommandWait,
  Ba as makeMoveCommands,
  Wa as makeMoveCommandsSimple,
  f as mergeItemsSource,
  _e as normarizeText,
  U as pickPropertys,
  k as pickString,
  Te as validateWithErros
};
