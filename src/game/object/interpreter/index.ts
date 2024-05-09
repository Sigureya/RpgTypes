import type { CommandParameters } from "@schema/paramaters";
import type * as $ from "@schema/codes";

// TODO: イベントコマンド以外のメソッドは、必要になったら書き足す
export declare class Game_Interpreter {
  command101(param: CommandParameters[typeof $.SHOW_MESSAGE]): boolean;
  command102(param: CommandParameters[typeof $.SHOW_CHOICES]): boolean;
  command103(param: CommandParameters[typeof $.INPUT_NUMBER]): boolean;
  command104(param: CommandParameters[typeof $.SELECT_ITEM]): boolean;
  command105(param: CommandParameters[typeof $.SHOW_SCROLLING_TEXT]): boolean;
  command108(param: CommandParameters[typeof $.COMMENT]): boolean;

  command109(param: CommandParameters[typeof $.SKIP]): boolean;
  command111(param: CommandParameters[typeof $.CONDITIONAL_BRANCH]): boolean;
  command112(param: CommandParameters[typeof $.LOOP]): boolean;
  command113(param: CommandParameters[typeof $.LOOP_BREAK]): boolean;
  command115(param: CommandParameters[typeof $.EXIT_EVENT_PROCESSING]): boolean;
  command117(param: CommandParameters[typeof $.COMMON_EVENT]): boolean;
  command118(param: CommandParameters[typeof $.LABEL]): boolean;
  command119(param: CommandParameters[typeof $.LABEL_JUMP]): boolean;

  command121(param: CommandParameters[typeof $.CONTROL_SWITCHES]): boolean;
  command122(param: CommandParameters[typeof $.CONTROL_VARIABLES]): boolean;
  command123(param: CommandParameters[typeof $.CONTROL_SELF_SWITCH]): boolean;
  command124(param: CommandParameters[typeof $.CONTROL_TIMER]): boolean;

  command125(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command126(param: CommandParameters[typeof $.CHANGE_ITEMS]): boolean;
  command127(param: CommandParameters[typeof $.CHANGE_WEAPONS]): boolean;
  command128(param: CommandParameters[typeof $.CHANGE_ARMORS]): boolean;
  command129(param: CommandParameters[typeof $.CHANGE_PARTY_MEMBER]): boolean;
  command132(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command132(param: CommandParameters[typeof $.CHANGE_BATTLE_BGM]): boolean;
  command133(param: CommandParameters[typeof $.CHANGE_VICTORY_ME]): boolean;
  command134(param: CommandParameters[typeof $.CHANGE_SAVE_ACCESS]): boolean;
  command135(param: CommandParameters[typeof $.CHANGE_MENU_ACCESS]): boolean;
  command136(param: CommandParameters[typeof $.CHANGE_ENCOUNTER]): boolean;
  command137(
    param: CommandParameters[typeof $.CHANGE_FORMATION_ACCESS]
  ): boolean;

  command231(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command241(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command250(param: CommandParameters[typeof $.PLAY_SE]): boolean;

  command320(param: CommandParameters[typeof $.CHANGE_NAME]): boolean;
  command324(param: CommandParameters[typeof $.CHANGE_NICKNAME]): boolean;
  command325(param: CommandParameters[typeof $.CHANGE_PROFILE]): boolean;

  command357(param: CommandParameters[typeof $.PLUGIN_COMMAND_MZ]): boolean;
}
