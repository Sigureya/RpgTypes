import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_ActionBase,
  Rmmz_Actor,
  Rmmz_Battler,
  Rmmz_Enemy,
} from "./battle";
import type { InterpreterMapper, Rmmz_EventCommandRunner } from "./interpreter";
import type { Rmmz_InterpreterBattler } from "./interpreter/types/actor";

export interface Rmmz_Action extends Rmmz_ActionBase<Rmmz_Battler, {}> {}

export interface Rmmz_Interpreter
  extends
    Rmmz_EventCommandRunner<EventCommand>,
    InterpreterMapper,
    Rmmz_InterpreterBattler<Rmmz_Actor, Rmmz_Enemy> {}
