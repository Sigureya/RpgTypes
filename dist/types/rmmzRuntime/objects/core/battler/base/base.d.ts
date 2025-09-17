import { Rmmz_BattlerBuffs } from './buff';
import { Rmmz_Equipable } from './equipable';
import { Rmmz_ItemUser } from './itemUser';
import { Rmmz_StatusParams } from './param';
import { Rmmz_Stateable } from './state';
export interface Rmmz_BattlerBase extends Rmmz_BattlerBuffs, Rmmz_Equipable, Rmmz_ItemUser, Rmmz_Stateable, Rmmz_StatusParams {
    get mhp(): number;
    get mmp(): number;
    get atk(): number;
    get def(): number;
    get mat(): number;
    get mdf(): number;
    get agi(): number;
    get luk(): number;
    get hp(): number;
    get mp(): number;
    get tp(): number;
}
