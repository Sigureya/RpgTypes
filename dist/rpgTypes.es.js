const e = "bgm", P = "se", O = "me", C = "bgs", M = "battlebacks1", L = "battlebacks2", S = "characters", I = "enemies", N = "faces", a = "parallaxes", r = "pictures", U = "sv_actors", G = "sv_enemies", D = "system", i = "tilesets", F = "titles1", H = "titles2", m = "System.json", u = 11, Y = 12, B = 13, d = 14, V = 21, X = 22, g = 23, W = 31, p = 32, K = 33, f = 34, y = 35, h = 41, v = 42, k = 43, l = 44, w = 51, Q = 52, $ = 53, j = 54, q = 55, z = 61, J = 62, Z = 63, x = 64, b = 0, __ = 1, A_ = 2, E_ = 3, R_ = 0, t_ = 1, n_ = 2, T_ = 3, s_ = 4, c_ = 5, o_ = 0, e_ = 1, P_ = 2, O_ = 3, C_ = 0, M_ = 1, L_ = 2, S_ = 3, I_ = 4, N_ = 5, a_ = 6, r_ = 7, U_ = 8, G_ = 9, D_ = 0, i_ = 1, F_ = 2, H_ = 3, m_ = 4, u_ = 5, Y_ = 6, B_ = 7, d_ = 0, V_ = 1, X_ = 2, g_ = 3, W_ = 4, p_ = 5, K_ = 6, f_ = 7, y_ = 8, h_ = 9, v_ = 0, k_ = 1, l_ = 2, w_ = 0, Q_ = 11, $_ = 12, j_ = 13, q_ = 21, z_ = 22, J_ = 31, Z_ = 32, x_ = 33, b_ = 34, _A = 41, AA = 42, EA = 43, RA = 44, tA = 0, nA = 101, TA = 401, sA = 102, cA = 402, oA = 103, eA = 104, PA = 105, OA = 405, CA = 108, MA = 408, LA = 109, SA = 111, IA = 411, NA = 112, aA = 113, rA = 115, UA = 117, GA = 118, DA = 119, iA = 121, FA = 122, HA = 123, mA = 124, uA = 125, YA = 126, BA = 127, dA = 128, VA = 129, XA = 132, gA = 133, WA = 134, pA = 135, KA = 136, fA = 137, yA = 138, hA = 139, vA = 140, kA = 201, lA = 202, wA = 203, QA = 204, $A = 205, jA = 206, qA = 211, zA = 212, JA = 213, ZA = 214, xA = 216, bA = 217, _E = 221, AE = 222, EE = 223, RE = 224, tE = 225, nE = 230, TE = 231, sE = 232, cE = 233, oE = 234, eE = 235, PE = 236, OE = 241, CE = 242, ME = 243, LE = 244, SE = 245, IE = 246, NE = 249, aE = 250, rE = 251, UE = 261, GE = 282, DE = 283, iE = 284, FE = 285, HE = 301, mE = 302, uE = 605, YE = 303, BE = 311, dE = 312, VE = 313, XE = 314, gE = 315, WE = 320, pE = 321, KE = 322, fE = 323, yE = 324, hE = 325, vE = 331, kE = 332, lE = 333, wE = 334, QE = 335, $E = 336, jE = 337, qE = 339, zE = 340, JE = 351, ZE = 342, xE = 352, bE = 353, _R = 354, AR = 355, ER = 655, RR = 356, tR = 357, nR = 0, TR = 1, sR = 2, cR = 3, oR = 4, eR = 5, PR = 6, OR = 7, CR = 8, MR = 9, LR = 10, SR = 11, IR = 12, NR = 13, aR = 14, rR = 15, UR = 16, GR = 17, DR = 18, iR = 19, FR = 20, HR = 21, mR = 22, uR = 23, YR = 24, BR = 25, dR = 26, VR = 27, XR = 28, gR = 29, WR = 30, pR = 31, KR = 32, fR = 33, yR = 34, hR = 35, vR = 36, kR = 37, lR = 38, wR = 39, QR = 40, $R = 41, jR = 42, qR = 43, zR = 44, JR = 45, s = /^[a-zA-Z0-9]+$/, ZR = (_) => s.test(_) ? _ : void 0, T = (_) => typeof _ == "string" ? s.test(_) : !1, xR = (_) => [_.author, _.module, _.sourceKey].join("."), bR = (_) => T(_.author) && T(_.module) && T(_.sourceKey), _t = "params", At = "xparams", Et = "sparams", Rt = "collaps", tt = "partyAbiility", nt = "sflag", Tt = "actors", st = "variables", ct = "map", ot = "enemy", et = "state", Pt = "skill", Ot = "items", Ct = "weapon", Mt = "armor", Lt = "class", St = "common_event", It = "troop", Nt = "colors", at = "weaponTypes", rt = "armorTypes", Ut = "equipTypes", Gt = "switches", Dt = "skillTypes", it = "elements", o = (_, A) => {
  const t = { ..._ };
  for (const R in _) {
    const n = A[R];
    typeof n == "string" && (t[R] = n);
  }
  return t;
}, Ft = (_, A) => {
  const t = {};
  for (const R in _) {
    const n = _[R], c = A[R] ?? {};
    t[R] = o(
      n,
      c
    );
  }
  return t;
}, E = (_, A) => ({
  name: _,
  id: A
}), Ht = (_) => _.variables.map(E), mt = (_) => _.elements.map(E), ut = (_) => _.equipTypes.map(E), Yt = (_) => _.skillTypes.map(E), Bt = (_) => _.weaponTypes.map(E), dt = (_) => _.armorTypes.map(E), Vt = (_) => _.terms.params.map(E), Xt = (_, A) => {
  switch (_) {
    case 0:
      return A.maxHp;
    case 1:
      return A.maxMp;
    case 2:
      return A.atk;
    case 3:
      return A.def;
    case 4:
      return A.matk;
    case 5:
      return A.mdef;
    case 6:
      return A.agi;
    case 7:
      return A.luk;
    default:
      return `?rparams[${_}]`;
  }
}, gt = (_, A) => {
  switch (_) {
    case 3:
      return A.criticalEvasionRate;
    case 1:
      return A.evasionRate;
    case 6:
      return A.counterAttackRate;
    case 2:
      return A.criticalRate;
    case 0:
      return A.hitRate;
    case 7:
      return A.hpRegenerationRate;
    case 4:
      return A.magicEvasionRate;
    case 5:
      return A.magicReflectionRate;
    case 8:
      return A.mpRegenerationRate;
    case 9:
      return A.tpRegenerationRate;
  }
  return `?xparams[${_}]`;
}, Wt = (_, A) => {
  switch (_) {
    case 9:
      return A.experienceRate;
    case 0:
      return A.targetRate;
    case 8:
      return A.floorDamageRate;
    case 1:
      return A.guradEffectRate;
    case 4:
      return A.mpCostRate;
    case 5:
      return A.tpChargeRate;
    case 6:
      return A.physicalDamageRate;
    case 7:
      return A.magicDamageRate;
    case 3:
      return A.pharmacology;
    case 2:
      return A.recoveryEffectRate;
  }
  return `?sparams[${_}]`;
}, pt = (_, A) => [
  {
    id: 0,
    name: A.normal
  },
  {
    id: 1,
    name: _.bossCollaps
  },
  {
    id: 2,
    name: _.instantCollaps
  },
  {
    id: 3,
    name: _.noneCollaps
  }
], Kt = (_) => [
  {
    id: 0,
    name: _.encounterHalf
  },
  {
    id: 1,
    name: _.encounterNone
  },
  {
    id: 2,
    name: _.cancelSurprise
  },
  {
    id: 3,
    name: _.raisePreemptive
  },
  {
    id: 4,
    name: _.goldDouble
  },
  {
    id: 5,
    name: _.dropItemDouble
  }
], ft = (_) => [
  { id: 0, name: _.maxHp },
  { id: 1, name: _.maxMp },
  { id: 2, name: _.atk },
  { id: 3, name: _.def },
  { id: 4, name: _.matk },
  { id: 5, name: _.mdef },
  { id: 6, name: _.agi },
  { id: 7, name: _.luk }
], yt = (_) => [
  {
    id: 0,
    name: _.hitRate
  },
  {
    id: 1,
    name: _.evasionRate
  },
  {
    id: 2,
    name: _.criticalRate
  },
  {
    id: 3,
    name: _.criticalEvasionRate
  },
  {
    id: 4,
    name: _.magicEvasionRate
  },
  {
    id: 5,
    name: _.magicReflectionRate
  },
  {
    id: 6,
    name: _.counterAttackRate
  },
  {
    id: 7,
    name: _.hpRegenerationRate
  },
  {
    id: 8,
    name: _.mpRegenerationRate
  },
  {
    id: 9,
    name: _.tpRegenerationRate
  }
], ht = (_) => [
  {
    id: 0,
    name: _.targetRate
  },
  {
    id: 1,
    name: _.guradEffectRate
  },
  {
    id: 2,
    name: _.recoveryEffectRate
  },
  {
    id: 3,
    name: _.pharmacology
  },
  {
    id: 4,
    name: _.mpCostRate
  },
  {
    id: 5,
    name: _.tpChargeRate
  },
  {
    id: 6,
    name: _.physicalDamageRate
  },
  {
    id: 7,
    name: _.magicDamageRate
  },
  {
    id: 8,
    name: _.floorDamageRate
  },
  {
    id: 9,
    name: _.experienceRate
  }
];
export {
  zE as ABORT_BATTLE,
  HE as BATTLE_PROCESSING,
  KE as CHANGE_ACTOR_IMAGES,
  dA as CHANGE_ARMORS,
  DE as CHANGE_BATTLE_BACKGROUND,
  XA as CHANGE_BATTLE_BGM,
  pE as CHANGE_CLASS,
  hA as CHANGE_DEFEAT_ME,
  KA as CHANGE_ENCOUNTER,
  vE as CHANGE_ENEMY_HP,
  kE as CHANGE_ENEMY_MP,
  lE as CHANGE_ENEMY_STATE,
  ZE as CHANGE_ENEMY_TP,
  gE as CHANGE_EXP,
  fA as CHANGE_FORMATION_ACCESS,
  uA as CHANGE_GOLD,
  BE as CHANGE_HP,
  YA as CHANGE_ITEMS,
  pA as CHANGE_MENU_ACCESS,
  dE as CHANGE_MP,
  WE as CHANGE_NAME,
  yE as CHANGE_NICKNAME,
  iE as CHANGE_PARALLAX,
  VA as CHANGE_PARTY_MEMBER,
  xA as CHANGE_PLAYER_FOLLOWERS,
  hE as CHANGE_PROFILE,
  WA as CHANGE_SAVE_ACCESS,
  GE as CHANGE_TILESET,
  VE as CHANGE_TP,
  qA as CHANGE_TRANSPARENCY,
  vA as CHANGE_VEHICLE_BGM,
  fE as CHANGE_VEHICLE_IMAGE,
  gA as CHANGE_VICTORY_ME,
  BA as CHANGE_WEAPONS,
  yA as CHANGE_WINDOW_COLOR,
  __ as COLLAPS_BOSS,
  A_ as COLLAPS_INSTANT,
  E_ as COLLAPS_NONE,
  b as COLLAPS_NORMAL,
  CA as COMMENT,
  MA as COMMENT_BODY,
  UA as COMMON_EVENT,
  SA as CONDITIONAL_BRANCH,
  IA as CONDITIONAL_BRANCH_ELSE,
  HA as CONTROL_SELF_SWITCH,
  iA as CONTROL_SWITCHES,
  mA as CONTROL_TIMER,
  FA as CONTROL_VARIABLES,
  J_ as EFFECT_ADD_BUFF,
  Z_ as EFFECT_ADD_DEBUFF,
  q_ as EFFECT_ADD_STATE,
  RA as EFFECT_COMMON_EVENT,
  j_ as EFFECT_GAIN_TP,
  AA as EFFECT_GROW,
  EA as EFFECT_LEARN_SKILL,
  Q_ as EFFECT_RECOVER_HP,
  $_ as EFFECT_RECOVER_MP,
  x_ as EFFECT_REMOVE_BUFF,
  b_ as EFFECT_REMOVE_DEBUFF,
  z_ as EFFECT_REMOVE_STATE,
  _A as EFFECT_SPECIAL,
  QE as ENEMY_APPEAR,
  wE as ENEMY_RECOVER_ALL,
  $E as ENEMY_TRANSFORM,
  ZA as ERASE_EVENT,
  eE as ERASE_PICTURE,
  rA as EXIT_EVENT_PROCESSING,
  S_ as EXTRA_PARAM_CEV,
  a_ as EXTRA_PARAM_CNT,
  L_ as EXTRA_PARAM_CRI,
  M_ as EXTRA_PARAM_EVA,
  C_ as EXTRA_PARAM_HIT,
  r_ as EXTRA_PARAM_HRG,
  I_ as EXTRA_PARAM_MEV,
  N_ as EXTRA_PARAM_MRF,
  U_ as EXTRA_PARAM_MRG,
  G_ as EXTRA_PARAM_TRG,
  AE as FADEIN_SCREEN,
  CE as FADEOUT_BGM,
  IE as FADEOUT_BGS,
  _E as FADEOUT_SCREEN,
  m as FILENAME_SYSTEM,
  o_ as FLAG_ID_AUTO_BATTLE,
  e_ as FLAG_ID_GUARD,
  O_ as FLAG_ID_PRESERVE_TP,
  P_ as FLAG_ID_SUBSTITUTE,
  RE as FLASH_SCREEN,
  e as FOLDER_AUDIO_BGM,
  C as FOLDER_AUDIO_BGS,
  O as FOLDER_AUDIO_ME,
  P as FOLDER_AUDIO_SE,
  M as FOLDER_IMG_BATTLEBACK1,
  L as FOLDER_IMG_BATTLEBACK2,
  S as FOLDER_IMG_CHACTERS,
  I as FOLDER_IMG_ENEMIES,
  N as FOLDER_IMG_FACES,
  a as FOLDER_IMG_PARALLACES,
  r as FOLDER_IMG_PICTURES,
  U as FOLDER_IMG_SV_ACTORS,
  G as FOLDER_IMG_SV_ENEMIES,
  D as FOLDER_IMG_SYSTEM,
  i as FOLDER_IMG_TILESETS,
  F as FOLDER_IMG_TITLES1,
  H as FOLDER_IMG_TITLES2,
  qE as FORCE_ACTION,
  bE as GAME_OVER,
  bA as GATHER_FOLLOWERS,
  FE as GET_LOCATION_INFO,
  jA as GET_ONOFF_VEHICLE,
  v_ as HITTYPE_CERTAIN,
  l_ as HITTYPE_MAGICAL,
  k_ as HITTYPE_PHYSICAL,
  oA as INPUT_NUMBER,
  GA as LABEL,
  DA as LABEL_JUMP,
  NA as LOOP,
  aA as LOOP_BREAK,
  sE as MOVE_PICTURE,
  YE as NAME_INPUT_PROCESSING,
  tA as NO_OPERATION,
  JE as OPEN_MENU_SCREEN,
  xE as OPEN_SAVE_SCREEN,
  n_ as PARTY_ABILITY_CANCEL_SURPRISE,
  c_ as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  R_ as PARTY_ABILITY_ENCOUNTER_HALF,
  t_ as PARTY_ABILITY_ENCOUNTER_NONE,
  s_ as PARTY_ABILITY_GOLD_DOUBLE,
  T_ as PARTY_ABILITY_RAISE_PREEMPTIVE,
  OE as PLAY_BGM,
  SE as PLAY_BGS,
  NE as PLAY_ME,
  UE as PLAY_MOVIE,
  aE as PLAY_SE,
  RR as PLUGIN_COMMAND_MV,
  tR as PLUGIN_COMMAND_MZ,
  XE as RECOVER_ALL,
  Y_ as REGULAR_PARAM_AGI,
  F_ as REGULAR_PARAM_ATK,
  H_ as REGULAR_PARAM_DEF,
  B_ as REGULAR_PARAM_LUK,
  m_ as REGULAR_PARAM_MATK,
  D_ as REGULAR_PARAM_MAX_HP,
  i_ as REGULAR_PARAM_MAX_MP,
  u_ as REGULAR_PARAM_MDEF,
  LE as RESUME_BGM,
  _R as RETURN_TO_TITLE_SCREEN,
  cE as ROTATE_PICTURE,
  qR as ROUTE_CHANGE_BLEND_MODE,
  WR as ROUTE_CHANGE_FREQ,
  $R as ROUTE_CHANGE_IMAGE,
  jR as ROUTE_CHANGE_OPACITY,
  gR as ROUTE_CHANGE_SPEED,
  vR as ROUTE_DIR_FIX_OFF,
  hR as ROUTE_DIR_FIX_ON,
  nR as ROUTE_END,
  aR as ROUTE_JUMP,
  SR as ROUTE_MOVE_AWAY,
  NR as ROUTE_MOVE_BACKWARD,
  TR as ROUTE_MOVE_DOWN,
  IR as ROUTE_MOVE_FORWARD,
  sR as ROUTE_MOVE_LEFT,
  eR as ROUTE_MOVE_LOWER_L,
  PR as ROUTE_MOVE_LOWER_R,
  MR as ROUTE_MOVE_RANDOM,
  cR as ROUTE_MOVE_RIGHT,
  LR as ROUTE_MOVE_TOWARD,
  oR as ROUTE_MOVE_UP,
  OR as ROUTE_MOVE_UPPER_L,
  CR as ROUTE_MOVE_UPPER_R,
  zR as ROUTE_PLAY_SE,
  JR as ROUTE_SCRIPT,
  yR as ROUTE_STEP_ANIME_OFF,
  fR as ROUTE_STEP_ANIME_ON,
  XR as ROUTE_SWITCH_OFF,
  VR as ROUTE_SWITCH_ON,
  lR as ROUTE_THROUGH_OFF,
  kR as ROUTE_THROUGH_ON,
  QR as ROUTE_TRANSPARENT_OFF,
  wR as ROUTE_TRANSPARENT_ON,
  mR as ROUTE_TURN_180D,
  HR as ROUTE_TURN_90D_L,
  FR as ROUTE_TURN_90D_R,
  uR as ROUTE_TURN_90D_R_L,
  dR as ROUTE_TURN_AWAY,
  UR as ROUTE_TURN_DOWN,
  GR as ROUTE_TURN_LEFT,
  YR as ROUTE_TURN_RANDOM,
  DR as ROUTE_TURN_RIGHT,
  BR as ROUTE_TURN_TOWARD,
  iR as ROUTE_TURN_UP,
  rR as ROUTE_WAIT,
  KR as ROUTE_WALK_ANIME_OFF,
  pR as ROUTE_WALK_ANIME_ON,
  ME as SAVE_BGM,
  AR as SCRIPT_EVAL,
  ER as SCRIPT_EVAL_BODY,
  QA as SCROLL_MAP,
  eA as SELECT_ITEM,
  wA as SET_EVENT_LOCATION,
  $A as SET_MOVEMENT_ROUTE,
  lA as SET_VEHICLE_LOCATION,
  PE as SET_WEATHER_EFFECT,
  tE as SHAKE_SCREEN,
  mE as SHOP_PROCESSING,
  uE as SHOP_PROCESSING_BODY,
  zA as SHOW_ANIMATION,
  JA as SHOW_BALLOON_ICON,
  jE as SHOW_BATTLE_ANIMATION,
  sA as SHOW_CHOICES,
  cA as SHOW_CHOICES_ITEM,
  nA as SHOW_MESSAGE,
  TA as SHOW_MESSAGE_BODY,
  TE as SHOW_PICTURE,
  PA as SHOW_SCROLLING_TEXT,
  OA as SHOW_SCROLLING_TEXT_BODY,
  LA as SKIP,
  w_ as SPECIAL_EFFECT_ESCAPE,
  h_ as SPECIAL_PARAM_EXR,
  y_ as SPECIAL_PARAM_FDR,
  V_ as SPECIAL_PARAM_GRD,
  W_ as SPECIAL_PARAM_MCR,
  f_ as SPECIAL_PARAM_MDR,
  K_ as SPECIAL_PARAM_PDR,
  g_ as SPECIAL_PARAM_PHA,
  X_ as SPECIAL_PARAM_REC,
  p_ as SPECIAL_PARAM_TCR,
  d_ as SPECIAL_PARAM_TGR,
  rt as SRC_ARMOR_TYPES,
  Nt as SRC_COLOR,
  St as SRC_COMMON_EVNET,
  Tt as SRC_DATA_ACTOR,
  Mt as SRC_DATA_ARMOR,
  Lt as SRC_DATA_CLASS,
  ot as SRC_DATA_ENEMY,
  Ot as SRC_DATA_ITEMS,
  ct as SRC_DATA_MAP,
  Pt as SRC_DATA_SKILL,
  et as SRC_DATA_STATE,
  st as SRC_DATA_VARIABLE,
  Ct as SRC_DATA_WEAPON,
  it as SRC_ELEMENTS,
  Ut as SRC_EQUIP_TYPES,
  At as SRC_PARAMS_EXTRA,
  _t as SRC_PARAMS_REGULAR,
  Et as SRC_PARAMS_SPECIAL,
  Dt as SRC_SKILL_TYPES,
  Gt as SRC_SWITCHES,
  Rt as SRC_TRAIT_COLLAPS,
  tt as SRC_TRAIT_PARTY_ABILITY,
  nt as SRC_TRAIT_SPECIAL_FLAG,
  It as SRC_TROOP,
  at as SRC_WEAPON_TYPES,
  rE as STOP_SE,
  oE as TINT_PICTURE,
  EE as TINT_SCREEN,
  z as TRAIT_ACTION_PLUS,
  W as TRAIT_ATTACK_ELEMENT,
  y as TRAIT_ATTACK_SKILL,
  K as TRAIT_ATTACK_SPEED,
  p as TRAIT_ATTACK_STATE,
  f as TRAIT_ATTACK_TIMES,
  Z as TRAIT_COLLAPSE_TYPE,
  Y as TRAIT_DEBUFF_RATE,
  u as TRAIT_ELEMENT_RATE,
  Q as TRAIT_EQUIP_ATYPE,
  $ as TRAIT_EQUIP_LOCK,
  j as TRAIT_EQUIP_SEAL,
  w as TRAIT_EQUIP_WTYPE,
  V as TRAIT_PARAM,
  x as TRAIT_PARTY_ABILITY,
  k as TRAIT_SKILL_ADD,
  l as TRAIT_SKILL_SEAL,
  q as TRAIT_SLOT_TYPE,
  g as TRAIT_SPARAM,
  J as TRAIT_SPECIAL_FLAG,
  B as TRAIT_STATE_RATE,
  d as TRAIT_STATE_RESIST,
  h as TRAIT_STYPE_ADD,
  v as TRAIT_STYPE_SEAL,
  X as TRAIT_XPARAM,
  kA as TRANSFER_PLAYER,
  nE as WAIT,
  gt as extraParamName,
  pt as foldCollapsOptions,
  yt as foldExtraParam,
  Kt as foldPartyAbilityOptions,
  ft as foldRegularParam,
  ht as foldSpecialParams,
  dt as getArmorTypes,
  mt as getElements,
  ut as getEquipTypes,
  Vt as getParamNames,
  Yt as getSkillTypes,
  Ht as getVariableNames,
  Bt as getWeaponTypes,
  bR as isValid,
  xR as joinSourceKey,
  Ft as mergeNestedPrimitiveRecords,
  o as mergeWithDefaults,
  Xt as regularParamName,
  ZR as sanitizeKey,
  Wt as specialParamName,
  T as testUnknonwKey
};
//# sourceMappingURL=rpgTypes.es.js.map
