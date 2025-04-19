const O = "bgm", C = "se", S = "me", I = "bgs", N = "battlebacks1", L = "battlebacks2", P = "characters", M = "enemies", U = "faces", e = "parallaxes", G = "pictures", F = "sv_actors", D = "sv_enemies", H = "system", r = "tilesets", a = "titles1", Y = "titles2", B = "System.json", m = 11, V = 12, i = 13, p = 14, W = 21, l = 22, K = 23, u = 31, y = 32, X = 33, d = 34, g = 35, f = 41, b = 42, k = 43, v = 44, Q = 51, h = 52, w = 53, j = 54, q = 55, x = 61, z = 62, J = 63, Z = 64, $ = 0, __ = 1, E_ = 2, A_ = 3, s_ = 0, T_ = 1, t_ = 2, n_ = 3, R_ = 4, o_ = 5, c_ = 0, O_ = 1, C_ = 2, S_ = 3, I_ = 0, N_ = 1, L_ = 2, P_ = 3, M_ = 4, U_ = 5, e_ = 6, G_ = 7, F_ = 8, D_ = 9, H_ = 0, r_ = 1, a_ = 2, Y_ = 3, B_ = 4, m_ = 5, V_ = 6, i_ = 7, p_ = 0, W_ = 1, l_ = 2, K_ = 3, u_ = 4, y_ = 5, X_ = 6, d_ = 7, g_ = 8, f_ = 9, b_ = 0, k_ = 1, v_ = 2, Q_ = 0, h_ = 11, w_ = 12, j_ = 13, q_ = 21, x_ = 22, z_ = 31, J_ = 32, Z_ = 33, $_ = 34, _E = 41, EE = 42, AE = 43, sE = 44, TE = 0, tE = 101, nE = 401, RE = 102, oE = 402, cE = 103, OE = 104, CE = 105, SE = 405, IE = 108, NE = 408, LE = 109, PE = 111, ME = 411, UE = 112, eE = 113, GE = 115, FE = 117, DE = 118, HE = 119, rE = 121, aE = 122, YE = 123, BE = 124, mE = 125, VE = 126, iE = 127, pE = 128, WE = 129, lE = 132, KE = 133, uE = 134, yE = 135, XE = 136, dE = 137, gE = 138, fE = 139, bE = 140, kE = 201, vE = 202, QE = 203, hE = 204, wE = 205, jE = 206, qE = 211, xE = 212, zE = 213, JE = 214, ZE = 216, $E = 217, _A = 221, EA = 222, AA = 223, sA = 224, TA = 225, tA = 230, nA = 231, RA = 232, oA = 233, cA = 234, OA = 235, CA = 236, SA = 241, IA = 242, NA = 243, LA = 244, PA = 245, MA = 246, UA = 249, eA = 250, GA = 251, FA = 261, DA = 282, HA = 283, rA = 284, aA = 285, YA = 301, BA = 302, mA = 605, VA = 303, iA = 311, pA = 312, WA = 313, lA = 314, KA = 315, uA = 320, yA = 321, XA = 322, dA = 323, gA = 324, fA = 325, bA = 331, kA = 332, vA = 333, QA = 334, hA = 335, wA = 336, jA = 337, qA = 339, xA = 340, zA = 351, JA = 342, ZA = 352, $A = 353, _s = 354, Es = 355, As = 655, ss = 356, Ts = 357, ts = 0, ns = 1, Rs = 2, os = 3, cs = 4, Os = 5, Cs = 6, Ss = 7, Is = 8, Ns = 9, Ls = 10, Ps = 11, Ms = 12, Us = 13, es = 14, Gs = 15, Fs = 16, Ds = 17, Hs = 18, rs = 19, as = 20, Ys = 21, Bs = 22, ms = 23, Vs = 24, is = 25, ps = 26, Ws = 27, ls = 28, Ks = 29, us = 30, ys = 31, Xs = 32, ds = 33, gs = 34, fs = 35, bs = 36, ks = 37, vs = 38, Qs = 39, hs = 40, ws = 41, js = 42, qs = 43, xs = 44, zs = 45, R = /^[a-zA-Z0-9]+$/, Js = (_) => R.test(_) ? _ : void 0, n = (_) => typeof _ == "string" ? R.test(_) : !1, Zs = (_) => [_.author, _.module, _.sourceKey].join("."), $s = (_) => n(_.author) && n(_.module) && n(_.sourceKey), _T = "params", ET = "xparams", AT = "sparams", sT = "collaps", TT = "partyAbiility", tT = "sflag", nT = "actors", RT = "variables", oT = "map", cT = "enemy", OT = "state", CT = "skill", ST = "items", IT = "weapon", NT = "armor", LT = "class", PT = "common_event", MT = "troop", UT = "colors", eT = "weaponTypes", GT = "armorTypes", FT = "equipTypes", DT = "switches", HT = "skillTypes", rT = "elements", o = (_, E) => {
  const T = { ..._ };
  for (const s in _) {
    const t = E[s];
    typeof t == "string" && (T[s] = t);
  }
  return T;
}, aT = (_, E) => ({
  domainName: E.domainName ?? _.domainName,
  options: o(_.options, E.options ?? {})
}), YT = (_, E) => {
  const T = {};
  for (const s in _) {
    const t = _[s], c = E[s] ?? {};
    T[s] = o(
      t,
      c
    );
  }
  return T;
}, A = (_, E) => ({
  name: _,
  id: E
}), BT = (_) => _.variables.map(A), mT = (_) => _.elements.map(A), VT = (_) => _.equipTypes.map(A), iT = (_) => _.skillTypes.map(A), pT = (_) => _.weaponTypes.map(A), WT = (_) => _.armorTypes.map(A), lT = (_) => _.terms.params.map(A);
export {
  xA as ABORT_BATTLE,
  YA as BATTLE_PROCESSING,
  XA as CHANGE_ACTOR_IMAGES,
  pE as CHANGE_ARMORS,
  HA as CHANGE_BATTLE_BACKGROUND,
  lE as CHANGE_BATTLE_BGM,
  yA as CHANGE_CLASS,
  fE as CHANGE_DEFEAT_ME,
  XE as CHANGE_ENCOUNTER,
  bA as CHANGE_ENEMY_HP,
  kA as CHANGE_ENEMY_MP,
  vA as CHANGE_ENEMY_STATE,
  JA as CHANGE_ENEMY_TP,
  KA as CHANGE_EXP,
  dE as CHANGE_FORMATION_ACCESS,
  mE as CHANGE_GOLD,
  iA as CHANGE_HP,
  VE as CHANGE_ITEMS,
  yE as CHANGE_MENU_ACCESS,
  pA as CHANGE_MP,
  uA as CHANGE_NAME,
  gA as CHANGE_NICKNAME,
  rA as CHANGE_PARALLAX,
  WE as CHANGE_PARTY_MEMBER,
  ZE as CHANGE_PLAYER_FOLLOWERS,
  fA as CHANGE_PROFILE,
  uE as CHANGE_SAVE_ACCESS,
  DA as CHANGE_TILESET,
  WA as CHANGE_TP,
  qE as CHANGE_TRANSPARENCY,
  bE as CHANGE_VEHICLE_BGM,
  dA as CHANGE_VEHICLE_IMAGE,
  KE as CHANGE_VICTORY_ME,
  iE as CHANGE_WEAPONS,
  gE as CHANGE_WINDOW_COLOR,
  __ as COLLAPS_BOSS,
  E_ as COLLAPS_INSTANT,
  A_ as COLLAPS_NONE,
  $ as COLLAPS_NORMAL,
  IE as COMMENT,
  NE as COMMENT_BODY,
  FE as COMMON_EVENT,
  PE as CONDITIONAL_BRANCH,
  ME as CONDITIONAL_BRANCH_ELSE,
  YE as CONTROL_SELF_SWITCH,
  rE as CONTROL_SWITCHES,
  BE as CONTROL_TIMER,
  aE as CONTROL_VARIABLES,
  z_ as EFFECT_ADD_BUFF,
  J_ as EFFECT_ADD_DEBUFF,
  q_ as EFFECT_ADD_STATE,
  sE as EFFECT_COMMON_EVENT,
  j_ as EFFECT_GAIN_TP,
  EE as EFFECT_GROW,
  AE as EFFECT_LEARN_SKILL,
  h_ as EFFECT_RECOVER_HP,
  w_ as EFFECT_RECOVER_MP,
  Z_ as EFFECT_REMOVE_BUFF,
  $_ as EFFECT_REMOVE_DEBUFF,
  x_ as EFFECT_REMOVE_STATE,
  _E as EFFECT_SPECIAL,
  hA as ENEMY_APPEAR,
  QA as ENEMY_RECOVER_ALL,
  wA as ENEMY_TRANSFORM,
  JE as ERASE_EVENT,
  OA as ERASE_PICTURE,
  GE as EXIT_EVENT_PROCESSING,
  P_ as EXTRA_PARAM_CEV,
  e_ as EXTRA_PARAM_CNT,
  L_ as EXTRA_PARAM_CRI,
  N_ as EXTRA_PARAM_EVA,
  I_ as EXTRA_PARAM_HIT,
  G_ as EXTRA_PARAM_HRG,
  M_ as EXTRA_PARAM_MEV,
  U_ as EXTRA_PARAM_MRF,
  F_ as EXTRA_PARAM_MRG,
  D_ as EXTRA_PARAM_TRG,
  EA as FADEIN_SCREEN,
  IA as FADEOUT_BGM,
  MA as FADEOUT_BGS,
  _A as FADEOUT_SCREEN,
  B as FILENAME_SYSTEM,
  c_ as FLAG_ID_AUTO_BATTLE,
  O_ as FLAG_ID_GUARD,
  S_ as FLAG_ID_PRESERVE_TP,
  C_ as FLAG_ID_SUBSTITUTE,
  sA as FLASH_SCREEN,
  O as FOLDER_AUDIO_BGM,
  I as FOLDER_AUDIO_BGS,
  S as FOLDER_AUDIO_ME,
  C as FOLDER_AUDIO_SE,
  N as FOLDER_IMG_BATTLEBACK1,
  L as FOLDER_IMG_BATTLEBACK2,
  P as FOLDER_IMG_CHACTERS,
  M as FOLDER_IMG_ENEMIES,
  U as FOLDER_IMG_FACES,
  e as FOLDER_IMG_PARALLACES,
  G as FOLDER_IMG_PICTURES,
  F as FOLDER_IMG_SV_ACTORS,
  D as FOLDER_IMG_SV_ENEMIES,
  H as FOLDER_IMG_SYSTEM,
  r as FOLDER_IMG_TILESETS,
  a as FOLDER_IMG_TITLES1,
  Y as FOLDER_IMG_TITLES2,
  qA as FORCE_ACTION,
  $A as GAME_OVER,
  $E as GATHER_FOLLOWERS,
  aA as GET_LOCATION_INFO,
  jE as GET_ONOFF_VEHICLE,
  b_ as HITTYPE_CERTAIN,
  v_ as HITTYPE_MAGICAL,
  k_ as HITTYPE_PHYSICAL,
  cE as INPUT_NUMBER,
  DE as LABEL,
  HE as LABEL_JUMP,
  UE as LOOP,
  eE as LOOP_BREAK,
  RA as MOVE_PICTURE,
  VA as NAME_INPUT_PROCESSING,
  TE as NO_OPERATION,
  zA as OPEN_MENU_SCREEN,
  ZA as OPEN_SAVE_SCREEN,
  t_ as PARTY_ABILITY_CANCEL_SURPRISE,
  o_ as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  s_ as PARTY_ABILITY_ENCOUNTER_HALF,
  T_ as PARTY_ABILITY_ENCOUNTER_NONE,
  R_ as PARTY_ABILITY_GOLD_DOUBLE,
  n_ as PARTY_ABILITY_RAISE_PREEMPTIVE,
  SA as PLAY_BGM,
  PA as PLAY_BGS,
  UA as PLAY_ME,
  FA as PLAY_MOVIE,
  eA as PLAY_SE,
  ss as PLUGIN_COMMAND_MV,
  Ts as PLUGIN_COMMAND_MZ,
  lA as RECOVER_ALL,
  V_ as REGULAR_PARAM_AGI,
  a_ as REGULAR_PARAM_ATK,
  Y_ as REGULAR_PARAM_DEF,
  i_ as REGULAR_PARAM_LUK,
  B_ as REGULAR_PARAM_MATK,
  H_ as REGULAR_PARAM_MAX_HP,
  r_ as REGULAR_PARAM_MAX_MP,
  m_ as REGULAR_PARAM_MDEF,
  LA as RESUME_BGM,
  _s as RETURN_TO_TITLE_SCREEN,
  oA as ROTATE_PICTURE,
  qs as ROUTE_CHANGE_BLEND_MODE,
  us as ROUTE_CHANGE_FREQ,
  ws as ROUTE_CHANGE_IMAGE,
  js as ROUTE_CHANGE_OPACITY,
  Ks as ROUTE_CHANGE_SPEED,
  bs as ROUTE_DIR_FIX_OFF,
  fs as ROUTE_DIR_FIX_ON,
  ts as ROUTE_END,
  es as ROUTE_JUMP,
  Ps as ROUTE_MOVE_AWAY,
  Us as ROUTE_MOVE_BACKWARD,
  ns as ROUTE_MOVE_DOWN,
  Ms as ROUTE_MOVE_FORWARD,
  Rs as ROUTE_MOVE_LEFT,
  Os as ROUTE_MOVE_LOWER_L,
  Cs as ROUTE_MOVE_LOWER_R,
  Ns as ROUTE_MOVE_RANDOM,
  os as ROUTE_MOVE_RIGHT,
  Ls as ROUTE_MOVE_TOWARD,
  cs as ROUTE_MOVE_UP,
  Ss as ROUTE_MOVE_UPPER_L,
  Is as ROUTE_MOVE_UPPER_R,
  xs as ROUTE_PLAY_SE,
  zs as ROUTE_SCRIPT,
  gs as ROUTE_STEP_ANIME_OFF,
  ds as ROUTE_STEP_ANIME_ON,
  ls as ROUTE_SWITCH_OFF,
  Ws as ROUTE_SWITCH_ON,
  vs as ROUTE_THROUGH_OFF,
  ks as ROUTE_THROUGH_ON,
  hs as ROUTE_TRANSPARENT_OFF,
  Qs as ROUTE_TRANSPARENT_ON,
  Bs as ROUTE_TURN_180D,
  Ys as ROUTE_TURN_90D_L,
  as as ROUTE_TURN_90D_R,
  ms as ROUTE_TURN_90D_R_L,
  ps as ROUTE_TURN_AWAY,
  Fs as ROUTE_TURN_DOWN,
  Ds as ROUTE_TURN_LEFT,
  Vs as ROUTE_TURN_RANDOM,
  Hs as ROUTE_TURN_RIGHT,
  is as ROUTE_TURN_TOWARD,
  rs as ROUTE_TURN_UP,
  Gs as ROUTE_WAIT,
  Xs as ROUTE_WALK_ANIME_OFF,
  ys as ROUTE_WALK_ANIME_ON,
  NA as SAVE_BGM,
  Es as SCRIPT_EVAL,
  As as SCRIPT_EVAL_BODY,
  hE as SCROLL_MAP,
  OE as SELECT_ITEM,
  QE as SET_EVENT_LOCATION,
  wE as SET_MOVEMENT_ROUTE,
  vE as SET_VEHICLE_LOCATION,
  CA as SET_WEATHER_EFFECT,
  TA as SHAKE_SCREEN,
  BA as SHOP_PROCESSING,
  mA as SHOP_PROCESSING_BODY,
  xE as SHOW_ANIMATION,
  zE as SHOW_BALLOON_ICON,
  jA as SHOW_BATTLE_ANIMATION,
  RE as SHOW_CHOICES,
  oE as SHOW_CHOICES_ITEM,
  tE as SHOW_MESSAGE,
  nE as SHOW_MESSAGE_BODY,
  nA as SHOW_PICTURE,
  CE as SHOW_SCROLLING_TEXT,
  SE as SHOW_SCROLLING_TEXT_BODY,
  LE as SKIP,
  Q_ as SPECIAL_EFFECT_ESCAPE,
  f_ as SPECIAL_PARAM_EXR,
  g_ as SPECIAL_PARAM_FDR,
  W_ as SPECIAL_PARAM_GRD,
  u_ as SPECIAL_PARAM_MCR,
  d_ as SPECIAL_PARAM_MDR,
  X_ as SPECIAL_PARAM_PDR,
  K_ as SPECIAL_PARAM_PHA,
  l_ as SPECIAL_PARAM_REC,
  y_ as SPECIAL_PARAM_TCR,
  p_ as SPECIAL_PARAM_TGR,
  GT as SRC_ARMOR_TYPES,
  UT as SRC_COLOR,
  PT as SRC_COMMON_EVNET,
  nT as SRC_DATA_ACTOR,
  NT as SRC_DATA_ARMOR,
  LT as SRC_DATA_CLASS,
  cT as SRC_DATA_ENEMY,
  ST as SRC_DATA_ITEMS,
  oT as SRC_DATA_MAP,
  CT as SRC_DATA_SKILL,
  OT as SRC_DATA_STATE,
  RT as SRC_DATA_VARIABLE,
  IT as SRC_DATA_WEAPON,
  rT as SRC_ELEMENTS,
  FT as SRC_EQUIP_TYPES,
  ET as SRC_PARAMS_EXTRA,
  _T as SRC_PARAMS_REGULAR,
  AT as SRC_PARAMS_SPECIAL,
  HT as SRC_SKILL_TYPES,
  DT as SRC_SWITCHES,
  sT as SRC_TRAIT_COLLAPS,
  TT as SRC_TRAIT_PARTY_ABILITY,
  tT as SRC_TRAIT_SPECIAL_FLAG,
  MT as SRC_TROOP,
  eT as SRC_WEAPON_TYPES,
  GA as STOP_SE,
  cA as TINT_PICTURE,
  AA as TINT_SCREEN,
  x as TRAIT_ACTION_PLUS,
  u as TRAIT_ATTACK_ELEMENT,
  g as TRAIT_ATTACK_SKILL,
  X as TRAIT_ATTACK_SPEED,
  y as TRAIT_ATTACK_STATE,
  d as TRAIT_ATTACK_TIMES,
  J as TRAIT_COLLAPSE_TYPE,
  V as TRAIT_DEBUFF_RATE,
  m as TRAIT_ELEMENT_RATE,
  h as TRAIT_EQUIP_ATYPE,
  w as TRAIT_EQUIP_LOCK,
  j as TRAIT_EQUIP_SEAL,
  Q as TRAIT_EQUIP_WTYPE,
  W as TRAIT_PARAM,
  Z as TRAIT_PARTY_ABILITY,
  k as TRAIT_SKILL_ADD,
  v as TRAIT_SKILL_SEAL,
  q as TRAIT_SLOT_TYPE,
  K as TRAIT_SPARAM,
  z as TRAIT_SPECIAL_FLAG,
  i as TRAIT_STATE_RATE,
  p as TRAIT_STATE_RESIST,
  f as TRAIT_STYPE_ADD,
  b as TRAIT_STYPE_SEAL,
  l as TRAIT_XPARAM,
  kE as TRANSFER_PLAYER,
  tA as WAIT,
  WT as getArmorTypes,
  mT as getElementTypes,
  VT as getEquipTypes,
  lT as getParamNames,
  iT as getSkillTypes,
  BT as getVariableNames,
  pT as getWeaponTypes,
  $s as isValid,
  Zs as joinSourceKey,
  aT as mergeDomainLabel,
  YT as mergeNestedPrimitiveRecords,
  o as mergeWithDefaults,
  Js as sanitizeKey,
  n as testUnknonwKey
};
//# sourceMappingURL=rpgTypes.es.js.map
