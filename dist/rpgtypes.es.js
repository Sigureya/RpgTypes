const E = 0, _ = 1, O = 2, T = 3, R = 32, o = 48, t = 0, c = 101, n = 401, s = 102, A = 402, N = 103, C = 104, U = 105, S = 405, I = 108, L = 408, M = 109, H = 111, G = 411, P = 112, F = 113, D = 115, W = 117, V = 118, B = 119, Y = 121, K = 122, X = 123, J = 124, e = 125, p = 126, r = 127, x = 128, Q = 129, Z = 132, a = 133, b = 134, d = 135, f = 136, g = 137, h = 138, i = 139, j = 140, k = 201, l = 202, m = 203, q = 204, u = 205, v = 206, w = 211, y = 212, z = 213, $ = 214, EE = 216, _E = 217, OE = 221, TE = 222, RE = 223, oE = 224, tE = 225, cE = 230, nE = 231, sE = 232, AE = 233, NE = 234, CE = 235, UE = 236, SE = 241, IE = 242, LE = 243, ME = 244, HE = 245, GE = 249, PE = 250, FE = 282, DE = 283, WE = 284, VE = 301, BE = 302, YE = 605, KE = 303, XE = 311, JE = 312, eE = 313, pE = 320, rE = 322, xE = 323, QE = 324, ZE = 325, aE = 355, bE = 655, dE = 356, fE = 357, gE = 0, hE = 1, iE = 2, jE = 3, kE = 4, lE = 5, mE = 6, qE = 7, uE = 8, vE = 9, wE = 10, yE = 11, zE = 12, $E = 13, E_ = 14, __ = 15, O_ = 16, T_ = 17, R_ = 18, o_ = 19, t_ = 20, c_ = 21, n_ = 22, s_ = 23, A_ = 24, N_ = 25, C_ = 26, U_ = 27, S_ = 28, I_ = 29, L_ = 30, M_ = 31, H_ = 32, G_ = 33, P_ = 34, F_ = 35, D_ = 36, W_ = 37, V_ = 38, B_ = 39, Y_ = 40, K_ = 41, X_ = 42, J_ = 43, e_ = 44, p_ = 45;
export {
  VE as BATTLE_PROCESSING,
  rE as CHANGE_ACTOR_IMAGES,
  x as CHANGE_ARMORS,
  DE as CHANGE_BATTLE_BACKGROUND,
  Z as CHANGE_BATTLE_BGM,
  i as CHANGE_DEFEAT_ME,
  f as CHANGE_ENCOUNTER,
  g as CHANGE_FORMATION_ACCESS,
  e as CHANGE_GOLD,
  XE as CHANGE_HP,
  p as CHANGE_ITEMS,
  d as CHANGE_MENU_ACCESS,
  JE as CHANGE_MP,
  pE as CHANGE_NAME,
  QE as CHANGE_NICKNAME,
  WE as CHANGE_PARALLAX,
  Q as CHANGE_PARTY_MEMBER,
  EE as CHANGE_PLAYER_FOLLOWERS,
  ZE as CHANGE_PROFILE,
  b as CHANGE_SAVE_ACCESS,
  FE as CHANGE_TILESET,
  eE as CHANGE_TP,
  w as CHANGE_TRANSPARENCY,
  xE as CHANGE_VEHICLE_IMAGE,
  j as CHANGE_VEHICLE_ME,
  a as CHANGE_VICTORY_ME,
  r as CHANGE_WEAPONS,
  h as CHANGE_WINDOW_COLOR,
  I as COMMENT,
  L as COMMENT_BODY,
  W as COMMON_EVENT,
  H as CONDITIONAL_BRANCH,
  G as CONDITIONAL_BRANCH_ELSE,
  X as CONTROL_SELF_SWITCH,
  Y as CONTROL_SWITCHES,
  J as CONTROL_TIMER,
  K as CONTROL_VARIABLES,
  $ as ERASE_EVENT,
  CE as ERASE_PICTURE,
  D as EXIT_EVENT_PROCESSING,
  TE as FADEIN_SCREEN,
  IE as FADEOUT_BGM,
  OE as FADEOUT_SCREEN,
  E as FLAG_ID_AUTO_BATTLE,
  _ as FLAG_ID_GUARD,
  T as FLAG_ID_PRESERVE_TP,
  O as FLAG_ID_SUBSTITUTE,
  oE as FLASH_SCREEN,
  _E as GATHER_FOLLOWERS,
  v as GET_ONOFF_VEHICLE,
  R as ICON_BUFF_START,
  o as ICON_DEBUFF_START,
  N as INPUT_NUMBER,
  V as LABEL,
  B as LABEL_JUMP,
  P as LOOP,
  F as LOOP_BREAK,
  sE as MOVE_PICTURE,
  KE as NAME_INPUT_PROCESSING,
  t as NO_OPERATION,
  SE as PLAY_BGM,
  HE as PLAY_BGS,
  GE as PLAY_ME,
  PE as PLAY_SE,
  dE as PLUGIN_COMMAND_MV,
  fE as PLUGIN_COMMAND_MZ,
  ME as RESUME_BGM,
  AE as ROTATE_PICTURE,
  J_ as ROUTE_CHANGE_BLEND_MODE,
  L_ as ROUTE_CHANGE_FREQ,
  K_ as ROUTE_CHANGE_IMAGE,
  X_ as ROUTE_CHANGE_OPACITY,
  I_ as ROUTE_CHANGE_SPEED,
  D_ as ROUTE_DIR_FIX_OFF,
  F_ as ROUTE_DIR_FIX_ON,
  gE as ROUTE_END,
  E_ as ROUTE_JUMP,
  yE as ROUTE_MOVE_AWAY,
  $E as ROUTE_MOVE_BACKWARD,
  hE as ROUTE_MOVE_DOWN,
  zE as ROUTE_MOVE_FORWARD,
  iE as ROUTE_MOVE_LEFT,
  lE as ROUTE_MOVE_LOWER_L,
  mE as ROUTE_MOVE_LOWER_R,
  vE as ROUTE_MOVE_RANDOM,
  jE as ROUTE_MOVE_RIGHT,
  wE as ROUTE_MOVE_TOWARD,
  kE as ROUTE_MOVE_UP,
  qE as ROUTE_MOVE_UPPER_L,
  uE as ROUTE_MOVE_UPPER_R,
  e_ as ROUTE_PLAY_SE,
  p_ as ROUTE_SCRIPT,
  P_ as ROUTE_STEP_ANIME_OFF,
  G_ as ROUTE_STEP_ANIME_ON,
  S_ as ROUTE_SWITCH_OFF,
  U_ as ROUTE_SWITCH_ON,
  V_ as ROUTE_THROUGH_OFF,
  W_ as ROUTE_THROUGH_ON,
  Y_ as ROUTE_TRANSPARENT_OFF,
  B_ as ROUTE_TRANSPARENT_ON,
  n_ as ROUTE_TURN_180D,
  c_ as ROUTE_TURN_90D_L,
  t_ as ROUTE_TURN_90D_R,
  s_ as ROUTE_TURN_90D_R_L,
  C_ as ROUTE_TURN_AWAY,
  O_ as ROUTE_TURN_DOWN,
  T_ as ROUTE_TURN_LEFT,
  A_ as ROUTE_TURN_RANDOM,
  R_ as ROUTE_TURN_RIGHT,
  N_ as ROUTE_TURN_TOWARD,
  o_ as ROUTE_TURN_UP,
  __ as ROUTE_WAIT,
  H_ as ROUTE_WALK_ANIME_OFF,
  M_ as ROUTE_WALK_ANIME_ON,
  LE as SAVE_BGM,
  aE as SCRIPT_EVAL,
  bE as SCRIPT_EVAL_BODY,
  q as SCROLL_MAP,
  C as SELECT_ITEM,
  m as SET_EVENT_LOCATION,
  u as SET_MOVEMENT_ROUTE,
  l as SET_VEHICLE_LOCATION,
  UE as SET_WEATHER_EFFECT,
  tE as SHAKE_SCREEN,
  BE as SHOP_PROCESSING,
  YE as SHOP_PROCESSING_BODY,
  y as SHOW_ANIMATION,
  z as SHOW_BALLOON_ICON,
  s as SHOW_CHOICES,
  A as SHOW_CHOICES_ITEM,
  c as SHOW_MESSAGE,
  n as SHOW_MESSAGE_BODY,
  nE as SHOW_PICTURE,
  U as SHOW_SCROLLING_TEXT,
  S as SHOW_SCROLLING_TEXT_BODY,
  M as SKIP,
  NE as TINT_PICTURE,
  RE as TINT_SCREEN,
  k as TRANSFER_PLAYER,
  cE as WAIT
};
//# sourceMappingURL=rpgtypes.es.js.map
