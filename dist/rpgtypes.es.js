const _ = 11, A = 12, t = 13, T = 14, s = 21, R = 22, n = 23, c = 31, o = 32, O = 33, I = 34, L = 35, C = 41, N = 42, S = 43, M = 44, P = 51, U = 52, G = 53, e = 54, F = 55, D = 61, H = 62, r = 63, a = 64, B = 0, Y = 1, V = 2, g = 3, l = 0, W = 1, m = 2, b = 3, p = 4, K = 5, u = 0, X = 1, i = 2, f = 3, y = 0, Q = 1, d = 2, k = 3, x = 4, v = 5, J = 6, h = 7, j = 8, w = 9, Z = 0, q = 1, z = 2, $ = 3, EE = 4, _E = 5, AE = 6, tE = 7, TE = 0, sE = 1, RE = 2, nE = 3, cE = 4, oE = 5, OE = 6, IE = 7, LE = 8, CE = 9, NE = 0, SE = 1, ME = 2, PE = 0, UE = 11, GE = 12, eE = 13, FE = 21, DE = 22, HE = 31, rE = 32, aE = 33, BE = 34, YE = 41, VE = 42, gE = 43, lE = 44, WE = 0, mE = 101, bE = 401, pE = 102, KE = 402, uE = 103, XE = 104, iE = 105, fE = 405, yE = 108, QE = 408, dE = 109, kE = 111, xE = 411, vE = 112, JE = 113, hE = 115, jE = 117, wE = 118, ZE = 119, qE = 121, zE = 122, $E = 123, E_ = 124, __ = 125, A_ = 126, t_ = 127, T_ = 128, s_ = 129, R_ = 132, n_ = 133, c_ = 134, o_ = 135, O_ = 136, I_ = 137, L_ = 138, C_ = 139, N_ = 140, S_ = 201, M_ = 202, P_ = 203, U_ = 204, G_ = 205, e_ = 206, F_ = 211, D_ = 212, H_ = 213, r_ = 214, a_ = 216, B_ = 217, Y_ = 221, V_ = 222, g_ = 223, l_ = 224, W_ = 225, m_ = 230, b_ = 231, p_ = 232, K_ = 233, u_ = 234, X_ = 235, i_ = 236, f_ = 241, y_ = 242, Q_ = 243, d_ = 244, k_ = 245, x_ = 246, v_ = 249, J_ = 250, h_ = 251, j_ = 261, w_ = 282, Z_ = 283, q_ = 284, z_ = 285, $_ = 301, EA = 302, _A = 605, AA = 303, tA = 311, TA = 312, sA = 313, RA = 314, nA = 315, cA = 320, oA = 321, OA = 322, IA = 323, LA = 324, CA = 325, NA = 331, SA = 332, MA = 333, PA = 334, UA = 335, GA = 336, eA = 337, FA = 339, DA = 340, HA = 351, rA = 342, aA = 352, BA = 353, YA = 354, VA = 355, gA = 655, lA = 356, WA = 357, mA = 0, bA = 1, pA = 2, KA = 3, uA = 4, XA = 5, iA = 6, fA = 7, yA = 8, QA = 9, dA = 10, kA = 11, xA = 12, vA = 13, JA = 14, hA = 15, jA = 16, wA = 17, ZA = 18, qA = 19, zA = 20, $A = 21, Et = 22, _t = 23, At = 24, tt = 25, Tt = 26, st = 27, Rt = 28, nt = 29, ct = 30, ot = 31, Ot = 32, It = 33, Lt = 34, Ct = 35, Nt = 36, St = 37, Mt = 38, Pt = 39, Ut = 40, Gt = 41, et = 42, Ft = 43, Dt = 44, Ht = 45, rt = "bgm", at = "se", Bt = "me", Yt = "bgs", Vt = "battlebacks1", gt = "battlebacks2", lt = "characters", Wt = "enemies", mt = "faces", bt = "parallaxes", pt = "pictures", Kt = "sv_actors", ut = "sv_enemies", Xt = "system", it = "tilesets", ft = "titles1", yt = "titles2", Qt = "System.json", dt = (E) => E.rpg.paramRegular, kt = (E) => E.rpg.paramSpecial, xt = (E) => E.rpg.paramExtra, vt = (E) => E.rpg.trait, Jt = (E) => E.rpg.itemEffect, ht = (E) => E.global, jt = (E) => E.rpg.item, wt = (E) => E.rpg.skill, Zt = (E) => E.rpg.actor, qt = (E) => E.rpg.class, zt = (E) => E.rpg.state, $t = (E) => E.rpg.enemy, ET = (E) => E.rpg.armor, _T = (E) => E.rpg.weapon, AT = (E) => E.rpg.usableItem, tT = (E) => E.rpg.itemEffect, TT = (E) => E.rpg.namedItem, sT = (E) => E.rpg.damage;
export {
  DA as ABORT_BATTLE,
  $_ as BATTLE_PROCESSING,
  OA as CHANGE_ACTOR_IMAGES,
  T_ as CHANGE_ARMORS,
  Z_ as CHANGE_BATTLE_BACKGROUND,
  R_ as CHANGE_BATTLE_BGM,
  oA as CHANGE_CLASS,
  C_ as CHANGE_DEFEAT_ME,
  O_ as CHANGE_ENCOUNTER,
  NA as CHANGE_ENEMY_HP,
  SA as CHANGE_ENEMY_MP,
  MA as CHANGE_ENEMY_STATE,
  rA as CHANGE_ENEMY_TP,
  nA as CHANGE_EXP,
  I_ as CHANGE_FORMATION_ACCESS,
  __ as CHANGE_GOLD,
  tA as CHANGE_HP,
  A_ as CHANGE_ITEMS,
  o_ as CHANGE_MENU_ACCESS,
  TA as CHANGE_MP,
  cA as CHANGE_NAME,
  LA as CHANGE_NICKNAME,
  q_ as CHANGE_PARALLAX,
  s_ as CHANGE_PARTY_MEMBER,
  a_ as CHANGE_PLAYER_FOLLOWERS,
  CA as CHANGE_PROFILE,
  c_ as CHANGE_SAVE_ACCESS,
  w_ as CHANGE_TILESET,
  sA as CHANGE_TP,
  F_ as CHANGE_TRANSPARENCY,
  N_ as CHANGE_VEHICLE_BGM,
  IA as CHANGE_VEHICLE_IMAGE,
  n_ as CHANGE_VICTORY_ME,
  t_ as CHANGE_WEAPONS,
  L_ as CHANGE_WINDOW_COLOR,
  Y as COLLAPS_BOSS,
  V as COLLAPS_INSTANT,
  g as COLLAPS_NONE,
  B as COLLAPS_NORMAL,
  yE as COMMENT,
  QE as COMMENT_BODY,
  jE as COMMON_EVENT,
  kE as CONDITIONAL_BRANCH,
  xE as CONDITIONAL_BRANCH_ELSE,
  $E as CONTROL_SELF_SWITCH,
  qE as CONTROL_SWITCHES,
  E_ as CONTROL_TIMER,
  zE as CONTROL_VARIABLES,
  HE as EFFECT_ADD_BUFF,
  rE as EFFECT_ADD_DEBUFF,
  FE as EFFECT_ADD_STATE,
  lE as EFFECT_COMMON_EVENT,
  eE as EFFECT_GAIN_TP,
  VE as EFFECT_GROW,
  gE as EFFECT_LEARN_SKILL,
  UE as EFFECT_RECOVER_HP,
  GE as EFFECT_RECOVER_MP,
  aE as EFFECT_REMOVE_BUFF,
  BE as EFFECT_REMOVE_DEBUFF,
  DE as EFFECT_REMOVE_STATE,
  YE as EFFECT_SPECIAL,
  UA as ENEMY_APPEAR,
  PA as ENEMY_RECOVER_ALL,
  GA as ENEMY_TRANSFORM,
  r_ as ERASE_EVENT,
  X_ as ERASE_PICTURE,
  hE as EXIT_EVENT_PROCESSING,
  k as EXTRA_PARAM_CEV,
  J as EXTRA_PARAM_CNT,
  d as EXTRA_PARAM_CRI,
  Q as EXTRA_PARAM_EVA,
  y as EXTRA_PARAM_HIT,
  h as EXTRA_PARAM_HRG,
  x as EXTRA_PARAM_MEV,
  v as EXTRA_PARAM_MRF,
  j as EXTRA_PARAM_MRG,
  w as EXTRA_PARAM_TRG,
  V_ as FADEIN_SCREEN,
  y_ as FADEOUT_BGM,
  x_ as FADEOUT_BGS,
  Y_ as FADEOUT_SCREEN,
  Qt as FILENAME_SYSTEM,
  u as FLAG_ID_AUTO_BATTLE,
  X as FLAG_ID_GUARD,
  f as FLAG_ID_PRESERVE_TP,
  i as FLAG_ID_SUBSTITUTE,
  l_ as FLASH_SCREEN,
  rt as FOLDER_AUDIO_BGM,
  Yt as FOLDER_AUDIO_BGS,
  Bt as FOLDER_AUDIO_ME,
  at as FOLDER_AUDIO_SE,
  Vt as FOLDER_IMG_BATTLEBACK1,
  gt as FOLDER_IMG_BATTLEBACK2,
  lt as FOLDER_IMG_CHACTERS,
  Wt as FOLDER_IMG_ENEMIES,
  mt as FOLDER_IMG_FACES,
  bt as FOLDER_IMG_PARALLACES,
  pt as FOLDER_IMG_PICTURES,
  Kt as FOLDER_IMG_SV_ACTORS,
  ut as FOLDER_IMG_SV_ENEMIES,
  Xt as FOLDER_IMG_SYSTEM,
  it as FOLDER_IMG_TILESETS,
  ft as FOLDER_IMG_TITLES1,
  yt as FOLDER_IMG_TITLES2,
  FA as FORCE_ACTION,
  BA as GAME_OVER,
  B_ as GATHER_FOLLOWERS,
  z_ as GET_LOCATION_INFO,
  e_ as GET_ONOFF_VEHICLE,
  NE as HITTYPE_CERTAIN,
  ME as HITTYPE_MAGICAL,
  SE as HITTYPE_PHYSICAL,
  uE as INPUT_NUMBER,
  wE as LABEL,
  ZE as LABEL_JUMP,
  vE as LOOP,
  JE as LOOP_BREAK,
  p_ as MOVE_PICTURE,
  AA as NAME_INPUT_PROCESSING,
  WE as NO_OPERATION,
  HA as OPEN_MENU_SCREEN,
  aA as OPEN_SAVE_SCREEN,
  m as PARTY_ABILITY_CANCEL_SURPRISE,
  K as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  l as PARTY_ABILITY_ENCOUNTER_HALF,
  W as PARTY_ABILITY_ENCOUNTER_NONE,
  p as PARTY_ABILITY_GOLD_DOUBLE,
  b as PARTY_ABILITY_RAISE_PREEMPTIVE,
  f_ as PLAY_BGM,
  k_ as PLAY_BGS,
  v_ as PLAY_ME,
  j_ as PLAY_MOVIE,
  J_ as PLAY_SE,
  lA as PLUGIN_COMMAND_MV,
  WA as PLUGIN_COMMAND_MZ,
  RA as RECOVER_ALL,
  AE as REGULAR_PARAM_AGI,
  z as REGULAR_PARAM_ATK,
  $ as REGULAR_PARAM_DEF,
  tE as REGULAR_PARAM_LUK,
  EE as REGULAR_PARAM_MATK,
  Z as REGULAR_PARAM_MAX_HP,
  q as REGULAR_PARAM_MAX_MP,
  _E as REGULAR_PARAM_MDEF,
  d_ as RESUME_BGM,
  YA as RETURN_TO_TITLE_SCREEN,
  K_ as ROTATE_PICTURE,
  Ft as ROUTE_CHANGE_BLEND_MODE,
  ct as ROUTE_CHANGE_FREQ,
  Gt as ROUTE_CHANGE_IMAGE,
  et as ROUTE_CHANGE_OPACITY,
  nt as ROUTE_CHANGE_SPEED,
  Nt as ROUTE_DIR_FIX_OFF,
  Ct as ROUTE_DIR_FIX_ON,
  mA as ROUTE_END,
  JA as ROUTE_JUMP,
  kA as ROUTE_MOVE_AWAY,
  vA as ROUTE_MOVE_BACKWARD,
  bA as ROUTE_MOVE_DOWN,
  xA as ROUTE_MOVE_FORWARD,
  pA as ROUTE_MOVE_LEFT,
  XA as ROUTE_MOVE_LOWER_L,
  iA as ROUTE_MOVE_LOWER_R,
  QA as ROUTE_MOVE_RANDOM,
  KA as ROUTE_MOVE_RIGHT,
  dA as ROUTE_MOVE_TOWARD,
  uA as ROUTE_MOVE_UP,
  fA as ROUTE_MOVE_UPPER_L,
  yA as ROUTE_MOVE_UPPER_R,
  Dt as ROUTE_PLAY_SE,
  Ht as ROUTE_SCRIPT,
  Lt as ROUTE_STEP_ANIME_OFF,
  It as ROUTE_STEP_ANIME_ON,
  Rt as ROUTE_SWITCH_OFF,
  st as ROUTE_SWITCH_ON,
  Mt as ROUTE_THROUGH_OFF,
  St as ROUTE_THROUGH_ON,
  Ut as ROUTE_TRANSPARENT_OFF,
  Pt as ROUTE_TRANSPARENT_ON,
  Et as ROUTE_TURN_180D,
  $A as ROUTE_TURN_90D_L,
  zA as ROUTE_TURN_90D_R,
  _t as ROUTE_TURN_90D_R_L,
  Tt as ROUTE_TURN_AWAY,
  jA as ROUTE_TURN_DOWN,
  wA as ROUTE_TURN_LEFT,
  At as ROUTE_TURN_RANDOM,
  ZA as ROUTE_TURN_RIGHT,
  tt as ROUTE_TURN_TOWARD,
  qA as ROUTE_TURN_UP,
  hA as ROUTE_WAIT,
  Ot as ROUTE_WALK_ANIME_OFF,
  ot as ROUTE_WALK_ANIME_ON,
  Q_ as SAVE_BGM,
  VA as SCRIPT_EVAL,
  gA as SCRIPT_EVAL_BODY,
  U_ as SCROLL_MAP,
  XE as SELECT_ITEM,
  P_ as SET_EVENT_LOCATION,
  G_ as SET_MOVEMENT_ROUTE,
  M_ as SET_VEHICLE_LOCATION,
  i_ as SET_WEATHER_EFFECT,
  W_ as SHAKE_SCREEN,
  EA as SHOP_PROCESSING,
  _A as SHOP_PROCESSING_BODY,
  D_ as SHOW_ANIMATION,
  H_ as SHOW_BALLOON_ICON,
  eA as SHOW_BATTLE_ANIMATION,
  pE as SHOW_CHOICES,
  KE as SHOW_CHOICES_ITEM,
  mE as SHOW_MESSAGE,
  bE as SHOW_MESSAGE_BODY,
  b_ as SHOW_PICTURE,
  iE as SHOW_SCROLLING_TEXT,
  fE as SHOW_SCROLLING_TEXT_BODY,
  dE as SKIP,
  PE as SPECIAL_EFFECT_ESCAPE,
  CE as SPECIAL_PARAM_EXR,
  LE as SPECIAL_PARAM_FDR,
  sE as SPECIAL_PARAM_GRD,
  cE as SPECIAL_PARAM_MCR,
  IE as SPECIAL_PARAM_MDR,
  OE as SPECIAL_PARAM_PDR,
  nE as SPECIAL_PARAM_PHA,
  RE as SPECIAL_PARAM_REC,
  oE as SPECIAL_PARAM_TCR,
  TE as SPECIAL_PARAM_TGR,
  h_ as STOP_SE,
  u_ as TINT_PICTURE,
  g_ as TINT_SCREEN,
  D as TRAIT_ACTION_PLUS,
  c as TRAIT_ATTACK_ELEMENT,
  L as TRAIT_ATTACK_SKILL,
  O as TRAIT_ATTACK_SPEED,
  o as TRAIT_ATTACK_STATE,
  I as TRAIT_ATTACK_TIMES,
  r as TRAIT_COLLAPSE_TYPE,
  A as TRAIT_DEBUFF_RATE,
  _ as TRAIT_ELEMENT_RATE,
  U as TRAIT_EQUIP_ATYPE,
  G as TRAIT_EQUIP_LOCK,
  e as TRAIT_EQUIP_SEAL,
  P as TRAIT_EQUIP_WTYPE,
  s as TRAIT_PARAM,
  a as TRAIT_PARTY_ABILITY,
  S as TRAIT_SKILL_ADD,
  M as TRAIT_SKILL_SEAL,
  F as TRAIT_SLOT_TYPE,
  n as TRAIT_SPARAM,
  H as TRAIT_SPECIAL_FLAG,
  t as TRAIT_STATE_RATE,
  T as TRAIT_STATE_RESIST,
  C as TRAIT_STYPE_ADD,
  N as TRAIT_STYPE_SEAL,
  R as TRAIT_XPARAM,
  S_ as TRANSFER_PLAYER,
  m_ as WAIT,
  Zt as getActorLabels,
  ET as getArmorLabels,
  qt as getClassLabels,
  sT as getDamageLabels,
  $t as getEnemyLabels,
  xt as getExtraParamLabels,
  ht as getGlobalLabel,
  tT as getItemCodeLabels,
  Jt as getItemEffectTypeLabels,
  jt as getItemLabels,
  TT as getNamedItemLabels,
  dt as getRegularParamLabels,
  wt as getSkillLabels,
  kt as getSpecialParamLabels,
  zt as getStateLabels,
  vt as getTraitLabels,
  AT as getUsableItemLabels,
  _T as getWeaponLabels
};
//# sourceMappingURL=rpgtypes.es.js.map
