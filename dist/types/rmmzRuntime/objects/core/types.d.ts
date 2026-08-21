import { EventCommand } from '../../../rmmz/eventCommand';
import { Rmmz_ActionBase, Rmmz_Actor, Rmmz_Battler, Rmmz_Enemy, Rmmz_Unit } from './battle';
import { InterpreterMapper, Rmmz_EventCommandRunner } from './interpreter';
import { Rmmz_InterpreterBattler } from './interpreter/types/actor';
import { Data_Item, Data_Skill, Data_UsableItem } from '../../../rmmz/rpg';
export interface Rmmz_Action<Subject = Rmmz_Battler, Item extends Data_UsableItem = Data_UsableItem> extends Rmmz_ActionBase<Rmmz_Battler, Rmmz_Unit<Rmmz_Battler>> {
    setSubject(subject: Subject): void;
    subject(): Subject;
    item(): Item | null;
    isSkill(): this is Rmmz_Action<Subject, Data_Skill>;
    isItem(): this is Rmmz_Action<Subject, Data_Item>;
    setSkill(skillId: number): asserts this is Rmmz_Action<Subject, Data_Skill>;
    setItem(itemId: number): asserts this is Rmmz_Action<Subject, Data_Item>;
}
export interface Rmmz_Interpreter extends Rmmz_EventCommandRunner<EventCommand>, InterpreterMapper, Rmmz_InterpreterBattler<Rmmz_Actor, Rmmz_Enemy> {
    character(id: number): unknown;
}
