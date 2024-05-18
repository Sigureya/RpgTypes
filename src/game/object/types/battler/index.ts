import { IBattlerBase } from "./base";
import { TimeProgressBattle } from "./method/timeProgressBattle";

export interface IBattler extends IBattlerBase, TimeProgressBattle {}
