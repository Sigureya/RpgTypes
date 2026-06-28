import type {
  Rmmz_BattleManager_Audio,
  Rmmz_BattleManage_Display,
  Facade,
  Process,
  Rmmz_BattleManager_State,
} from "./interface";
import type { Battle_Reward } from "./interface/reward";

export interface Rmmz_BattleManager
  extends
    Rmmz_BattleManager_Audio,
    Rmmz_BattleManage_Display,
    Process,
    Facade,
    Rmmz_BattleManager_State {
  _rewards: Battle_Reward;
  setup(troopId: number, canEscape: boolean, canLose: boolean): void;
}
