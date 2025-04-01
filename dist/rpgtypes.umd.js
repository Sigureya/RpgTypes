(function(_,E){typeof exports=="object"&&typeof module<"u"?E(exports):typeof define=="function"&&define.amd?define(["exports"],E):(_=typeof globalThis<"u"?globalThis:_||self,E(_.RpgTypes={}))})(this,function(_){"use strict";const A="bgm",T="se",R="me",O="bgs",I="battlebacks1",N="battlebacks2",C="characters",S="enemies",M="faces",L="parallaxes",P="pictures",U="sv_actors",F="sv_enemies",G="system",n="tilesets",c="titles1",H="titles2";_.ABORT_BATTLE=340,_.BATTLE_PROCESSING=301,_.CHANGE_ACTOR_IMAGES=322,_.CHANGE_ARMORS=128,_.CHANGE_BATTLE_BACKGROUND=283,_.CHANGE_BATTLE_BGM=132,_.CHANGE_CLASS=321,_.CHANGE_DEFEAT_ME=139,_.CHANGE_ENCOUNTER=136,_.CHANGE_ENEMY_HP=331,_.CHANGE_ENEMY_MP=332,_.CHANGE_ENEMY_STATE=333,_.CHANGE_ENEMY_TP=342,_.CHANGE_EXP=315,_.CHANGE_FORMATION_ACCESS=137,_.CHANGE_GOLD=125,_.CHANGE_HP=311,_.CHANGE_ITEMS=126,_.CHANGE_MENU_ACCESS=135,_.CHANGE_MP=312,_.CHANGE_NAME=320,_.CHANGE_NICKNAME=324,_.CHANGE_PARALLAX=284,_.CHANGE_PARTY_MEMBER=129,_.CHANGE_PLAYER_FOLLOWERS=216,_.CHANGE_PROFILE=325,_.CHANGE_SAVE_ACCESS=134,_.CHANGE_TILESET=282,_.CHANGE_TP=313,_.CHANGE_TRANSPARENCY=211,_.CHANGE_VEHICLE_BGM=140,_.CHANGE_VEHICLE_IMAGE=323,_.CHANGE_VICTORY_ME=133,_.CHANGE_WEAPONS=127,_.CHANGE_WINDOW_COLOR=138,_.COLLAPS_BOSS=1,_.COLLAPS_INSTANT=2,_.COLLAPS_NONE=3,_.COLLAPS_NORMAL=0,_.COMMENT=108,_.COMMENT_BODY=408,_.COMMON_EVENT=117,_.CONDITIONAL_BRANCH=111,_.CONDITIONAL_BRANCH_ELSE=411,_.CONTROL_SELF_SWITCH=123,_.CONTROL_SWITCHES=121,_.CONTROL_TIMER=124,_.CONTROL_VARIABLES=122,_.EFFECT_ADD_BUFF=31,_.EFFECT_ADD_DEBUFF=32,_.EFFECT_ADD_STATE=21,_.EFFECT_COMMON_EVENT=44,_.EFFECT_GAIN_TP=13,_.EFFECT_GROW=42,_.EFFECT_LEARN_SKILL=43,_.EFFECT_RECOVER_HP=11,_.EFFECT_RECOVER_MP=12,_.EFFECT_REMOVE_BUFF=33,_.EFFECT_REMOVE_DEBUFF=34,_.EFFECT_REMOVE_STATE=22,_.EFFECT_SPECIAL=41,_.ENEMY_APPEAR=335,_.ENEMY_RECOVER_ALL=334,_.ENEMY_TRANSFORM=336,_.ERASE_EVENT=214,_.ERASE_PICTURE=235,_.EXIT_EVENT_PROCESSING=115,_.EXTRA_PARAM_CEV=3,_.EXTRA_PARAM_CNT=6,_.EXTRA_PARAM_CRI=2,_.EXTRA_PARAM_EVA=1,_.EXTRA_PARAM_HIT=0,_.EXTRA_PARAM_HRG=7,_.EXTRA_PARAM_MEV=4,_.EXTRA_PARAM_MRF=5,_.EXTRA_PARAM_MRG=8,_.EXTRA_PARAM_TRG=9,_.FADEIN_SCREEN=222,_.FADEOUT_BGM=242,_.FADEOUT_BGS=246,_.FADEOUT_SCREEN=221,_.FLAG_ID_AUTO_BATTLE=0,_.FLAG_ID_GUARD=1,_.FLAG_ID_PRESERVE_TP=3,_.FLAG_ID_SUBSTITUTE=2,_.FLASH_SCREEN=224,_.FOLDER_AUDIO_BGM=A,_.FOLDER_AUDIO_BGS=O,_.FOLDER_AUDIO_ME=R,_.FOLDER_AUDIO_SE=T,_.FOLDER_IMG_BATTLEBACK1=I,_.FOLDER_IMG_BATTLEBACK2=N,_.FOLDER_IMG_CHACTERS=C,_.FOLDER_IMG_ENEMIES=S,_.FOLDER_IMG_FACES=M,_.FOLDER_IMG_PARALLACES=L,_.FOLDER_IMG_PICTURES=P,_.FOLDER_IMG_SV_ACTORS=U,_.FOLDER_IMG_SV_ENEMIES=F,_.FOLDER_IMG_SYSTEM=G,_.FOLDER_IMG_TILESETS=n,_.FOLDER_IMG_TITLES1=c,_.FOLDER_IMG_TITLES2=H,_.FORCE_ACTION=339,_.GAME_OVER=353,_.GATHER_FOLLOWERS=217,_.GET_LOCATION_INFO=285,_.GET_ONOFF_VEHICLE=206,_.HITTYPE_CERTAIN=0,_.HITTYPE_MAGICAL=2,_.HITTYPE_PHYSICAL=1,_.INPUT_NUMBER=103,_.LABEL=118,_.LABEL_JUMP=119,_.LOOP=112,_.LOOP_BREAK=113,_.MAIN_PARAM_AGI=6,_.MAIN_PARAM_ATK=2,_.MAIN_PARAM_DEF=3,_.MAIN_PARAM_LUK=7,_.MAIN_PARAM_MATK=4,_.MAIN_PARAM_MAX_HP=0,_.MAIN_PARAM_MAX_MP=1,_.MAIN_PARAM_MDEF=5,_.MOVE_PICTURE=232,_.NAME_INPUT_PROCESSING=303,_.NO_OPERATION=0,_.OPEN_MENU_SCREEN=351,_.OPEN_SAVE_SCREEN=352,_.PARTY_ABILITY_CANCEL_SURPRISE=2,_.PARTY_ABILITY_DROP_ITEM_DOUBLE=5,_.PARTY_ABILITY_ENCOUNTER_HALF=0,_.PARTY_ABILITY_ENCOUNTER_NONE=1,_.PARTY_ABILITY_GOLD_DOUBLE=4,_.PARTY_ABILITY_RAISE_PREEMPTIVE=3,_.PLAY_BGM=241,_.PLAY_BGS=245,_.PLAY_ME=249,_.PLAY_MOVIE=261,_.PLAY_SE=250,_.PLUGIN_COMMAND_MV=356,_.PLUGIN_COMMAND_MZ=357,_.RECOVER_ALL=314,_.RESUME_BGM=244,_.RETURN_TO_TITLE_SCREEN=354,_.ROTATE_PICTURE=233,_.ROUTE_CHANGE_BLEND_MODE=43,_.ROUTE_CHANGE_FREQ=30,_.ROUTE_CHANGE_IMAGE=41,_.ROUTE_CHANGE_OPACITY=42,_.ROUTE_CHANGE_SPEED=29,_.ROUTE_DIR_FIX_OFF=36,_.ROUTE_DIR_FIX_ON=35,_.ROUTE_END=0,_.ROUTE_JUMP=14,_.ROUTE_MOVE_AWAY=11,_.ROUTE_MOVE_BACKWARD=13,_.ROUTE_MOVE_DOWN=1,_.ROUTE_MOVE_FORWARD=12,_.ROUTE_MOVE_LEFT=2,_.ROUTE_MOVE_LOWER_L=5,_.ROUTE_MOVE_LOWER_R=6,_.ROUTE_MOVE_RANDOM=9,_.ROUTE_MOVE_RIGHT=3,_.ROUTE_MOVE_TOWARD=10,_.ROUTE_MOVE_UP=4,_.ROUTE_MOVE_UPPER_L=7,_.ROUTE_MOVE_UPPER_R=8,_.ROUTE_PLAY_SE=44,_.ROUTE_SCRIPT=45,_.ROUTE_STEP_ANIME_OFF=34,_.ROUTE_STEP_ANIME_ON=33,_.ROUTE_SWITCH_OFF=28,_.ROUTE_SWITCH_ON=27,_.ROUTE_THROUGH_OFF=38,_.ROUTE_THROUGH_ON=37,_.ROUTE_TRANSPARENT_OFF=40,_.ROUTE_TRANSPARENT_ON=39,_.ROUTE_TURN_180D=22,_.ROUTE_TURN_90D_L=21,_.ROUTE_TURN_90D_R=20,_.ROUTE_TURN_90D_R_L=23,_.ROUTE_TURN_AWAY=26,_.ROUTE_TURN_DOWN=16,_.ROUTE_TURN_LEFT=17,_.ROUTE_TURN_RANDOM=24,_.ROUTE_TURN_RIGHT=18,_.ROUTE_TURN_TOWARD=25,_.ROUTE_TURN_UP=19,_.ROUTE_WAIT=15,_.ROUTE_WALK_ANIME_OFF=32,_.ROUTE_WALK_ANIME_ON=31,_.SAVE_BGM=243,_.SCRIPT_EVAL=355,_.SCRIPT_EVAL_BODY=655,_.SCROLL_MAP=204,_.SELECT_ITEM=104,_.SET_EVENT_LOCATION=203,_.SET_MOVEMENT_ROUTE=205,_.SET_VEHICLE_LOCATION=202,_.SET_WEATHER_EFFECT=236,_.SHAKE_SCREEN=225,_.SHOP_PROCESSING=302,_.SHOP_PROCESSING_BODY=605,_.SHOW_ANIMATION=212,_.SHOW_BALLOON_ICON=213,_.SHOW_BATTLE_ANIMATION=337,_.SHOW_CHOICES=102,_.SHOW_CHOICES_ITEM=402,_.SHOW_MESSAGE=101,_.SHOW_MESSAGE_BODY=401,_.SHOW_PICTURE=231,_.SHOW_SCROLLING_TEXT=105,_.SHOW_SCROLLING_TEXT_BODY=405,_.SKIP=109,_.SPECIAL_EFFECT_ESCAPE=0,_.SPECIAL_PARAM_EXR=9,_.SPECIAL_PARAM_FDR=8,_.SPECIAL_PARAM_GRD=1,_.SPECIAL_PARAM_MCR=4,_.SPECIAL_PARAM_MDR=7,_.SPECIAL_PARAM_PDR=6,_.SPECIAL_PARAM_PHA=3,_.SPECIAL_PARAM_REC=2,_.SPECIAL_PARAM_TCR=5,_.SPECIAL_PARAM_TGR=0,_.STOP_SE=251,_.TINT_PICTURE=234,_.TINT_SCREEN=223,_.TRAIT_ACTION_PLUS=61,_.TRAIT_ATTACK_ELEMENT=31,_.TRAIT_ATTACK_SKILL=35,_.TRAIT_ATTACK_SPEED=33,_.TRAIT_ATTACK_STATE=32,_.TRAIT_ATTACK_TIMES=34,_.TRAIT_COLLAPSE_TYPE=63,_.TRAIT_DEBUFF_RATE=12,_.TRAIT_ELEMENT_RATE=11,_.TRAIT_EQUIP_ATYPE=52,_.TRAIT_EQUIP_LOCK=53,_.TRAIT_EQUIP_SEAL=54,_.TRAIT_EQUIP_WTYPE=51,_.TRAIT_PARAM=21,_.TRAIT_PARTY_ABILITY=64,_.TRAIT_SKILL_ADD=43,_.TRAIT_SKILL_SEAL=44,_.TRAIT_SLOT_TYPE=55,_.TRAIT_SPARAM=23,_.TRAIT_SPECIAL_FLAG=62,_.TRAIT_STATE_RATE=13,_.TRAIT_STATE_RESIST=14,_.TRAIT_STYPE_ADD=41,_.TRAIT_STYPE_SEAL=42,_.TRAIT_XPARAM=22,_.TRANSFER_PLAYER=201,_.WAIT=230,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=rpgtypes.umd.js.map
