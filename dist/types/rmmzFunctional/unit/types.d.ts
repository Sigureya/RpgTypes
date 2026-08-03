import { Data_Actor, Data_Enemy, Data_System } from '../../rmmz';
import { Data_Troop } from '../../rmmz/events';
export type Rmmz_UnitSystemData = Pick<Data_System, "locale" | "partyMembers" | "testTroopId">;
export interface Rmmz_UnitDataProvider {
    troopData(troopId: number): Data_Troop | null | undefined;
    enemyData(enemyId: number): Data_Enemy | null | undefined;
    actorData(actorId: number): Data_Actor | null | undefined;
    systemData(): Rmmz_UnitSystemData;
}
export interface TroopEnemyLabel {
    enemyId: number;
    name: string;
    letter: string;
    plural: boolean;
}
