import { Audio, Display, Facade, Process } from './interface';
import { Battle_Reward } from './interface/reward';
export interface Rmmz_BattleManager extends Audio, Display, Process, Facade {
    _rewards: Battle_Reward;
}
