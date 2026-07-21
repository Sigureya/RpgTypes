import type { Data_Skill } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBuffs } from "./buff";
import type { Rmmz_Equipable } from "./equipable";
import type { Rmmz_ItemUser } from "./itemUser";
import type { Rmmz_StatusParams } from "./param";
import type { Rmmz_Stateable } from "./state";
import type { Rmmz_TraitContainer } from "./trait";
import type { Rmmz_BattlerBase_Values } from "./values";

export interface Rmmz_BattlerBase
  extends
    Rmmz_BattlerBuffs,
    Rmmz_Equipable,
    Rmmz_ItemUser,
    Rmmz_Stateable,
    Rmmz_StatusParams,
    Rmmz_TraitContainer,
    Rmmz_BattlerBase_Values {
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
  get tgr(): number;
  get rec(): number;
  get mcr(): number;
  get hit(): number;
  get eva(): number;
  get cri(): number;
  get cev(): number;
  get mev(): number;
  get cnt(): number;
  get hrg(): number;
  get mrg(): number;
  get trg(): number;
  get grd(): number;
  get mrf(): number;
  skillMpCost(skill: Data_Skill): number;
  skillTpCost(skill: Data_Skill): number;
  canPaySkillCost(skill: Data_Skill): boolean;
  setMp(value: number): void;
  setTp(value: number): void;
  addParam(paramId: number, value: number): void;
  _tp: number;
  _mp: number;
}
