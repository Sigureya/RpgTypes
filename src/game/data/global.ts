import { IdentifiedItems } from "@utils/types";
import { Data_CommonEvent } from "./commonEvent";
import { Data_State } from "./state";
import { Data_Armor, Data_Weapon } from "./item";
import { Data_Skill } from "./item/skill";
import { Data_Item } from "./item/item";

export declare let $dataCommonEvents: IdentifiedItems<Data_CommonEvent>;
export declare let $dataStates: IdentifiedItems<Data_State>;
export declare let $dataWeapons: IdentifiedItems<Data_Weapon>;
export declare let $dataArmors: IdentifiedItems<Data_Armor>;
export declare let $dataItems: IdentifiedItems<Data_Item>;
export declare let $dataSkills: IdentifiedItems<Data_Skill>;
