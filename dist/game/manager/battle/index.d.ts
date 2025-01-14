import type { Audio, Display, Facade, Process } from "./interface";
import type { Battle_Reward } from "./interface/reward";
export interface Manager_Battle extends Audio, Display, Process, Facade {
    _rewards: Battle_Reward;
}
