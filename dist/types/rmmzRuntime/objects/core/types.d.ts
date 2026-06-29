import { EventCommand } from '../../../rmmz/eventCommand';
import { Rmmz_ActionBase, Rmmz_Actor, Rmmz_Battler, Rmmz_Enemy, Rmmz_Unit } from './battle';
import { InterpreterMapper, Rmmz_EventCommandRunner } from './interpreter';
import { Rmmz_InterpreterBattler } from './interpreter/types/actor';
export interface Rmmz_Action<Subject = Rmmz_Battler> extends Rmmz_ActionBase<Rmmz_Battler, Rmmz_Unit<Rmmz_Battler>> {
    setSubject(subject: Subject): void;
    subject(): Subject;
}
export interface Rmmz_Interpreter extends Rmmz_EventCommandRunner<EventCommand>, InterpreterMapper, Rmmz_InterpreterBattler<Rmmz_Actor, Rmmz_Enemy> {
    character(id: number): unknown;
}
