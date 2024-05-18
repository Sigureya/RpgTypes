///<reference path="./index.ts" />
// 新規にコードを追加した場合、上記のindex.tsへ追記すること
export const SHOW_MESSAGE = 101 as const;
export const SHOW_MESSAGE_BODY = 401 as const;
export const SHOW_CHOICES = 102 as const;
export const SHOW_CHOICES_ITEM = 402 as const;
export const INPUT_NUMBER = 103 as const;
export const SELECT_ITEM = 104 as const;
export const SHOW_SCROLLING_TEXT = 105 as const;
export const SHOW_SCROLLING_TEXT_BODY = 405 as const;
export const COMMENT = 108 as const;
export const COMMENT_BODY = 408 as const;
export const SKIP = 109 as const;
export const CONDITIONAL_BRANCH = 111 as const;
export const CONDITIONAL_BRANCH_ELSE = 411 as const;
export const LOOP = 112 as const;
export const LOOP_BREAK = 113 as const;
export const EXIT_EVENT_PROCESSING = 115 as const;
export const COMMON_EVENT = 117 as const;
export const LABEL = 118 as const;
export const LABEL_JUMP = 119 as const;
export const CONTROL_SWITCHES = 121 as const;
export const CONTROL_VARIABLES = 122 as const;
export const CONTROL_SELF_SWITCH = 123 as const;
export const CONTROL_TIMER = 124 as const;
export const CHANGE_GOLD = 125 as const;
export const CHANGE_ITEMS = 126 as const;
export const CHANGE_WEAPONS = 127 as const;
export const CHANGE_ARMORS = 128 as const;
export const CHANGE_PARTY_MEMBER = 129 as const;
export const CHANGE_BATTLE_BGM = 132 as const;
export const CHANGE_VICTORY_ME = 133 as const;
export const CHANGE_SAVE_ACCESS = 134 as const;
export const CHANGE_MENU_ACCESS = 135 as const;
export const CHANGE_ENCOUNTER = 136 as const;
export const CHANGE_FORMATION_ACCESS = 137 as const;
export const SHOW_PICTURE = 231 as const;
export const PLAY_BGM = 241 as const;
export const PLAY_SE = 250 as const;

export const SHOP_PROCESSING = 302 as const;
export const SHOP_PROCESSING_BODY = 605 as const;
export const NAME_INPUT_PROCESSING = 303 as const;
export const CHANGE_HP = 311 as const;
export const CHANGE_MP = 312 as const;
export const CHANGE_TP = 313 as const;

export const CHANGE_NAME = 320 as const;
export const CHANGE_NICKNAME = 324 as const;
export const CHANGE_PROFILE = 325 as const;
export const PLUGIN_COMMAND_MZ = 357 as const;