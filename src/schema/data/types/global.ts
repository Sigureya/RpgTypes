import type { IdentifiedItems } from "../../../types/types";
import type { Data_Actor } from "./actor";
import type { Data_Animation } from "./animation";
import type { Data_Armor } from "./armor";
import type { Data_Class } from "./class";
import type { Data_CommonEvent } from "./commonEvent";
import type { Data_Enemy } from "./enemy";
import type { Data_Item } from "./item";
import type { Data_MapInfo } from "./mapInfo";
import type { Data_Skill } from "./skill";
import type { Data_State } from "./state";
import type { Data_System } from "./system/";
import type { Data_Tileset } from "./tileset";
import type { Data_Weapon } from "./weapon";

export declare let $dataActors: IdentifiedItems<Data_Actor>;
export declare let $dataArmors: IdentifiedItems<Data_Armor>;
export declare let $dataAnimations: IdentifiedItems<Data_Animation>;
export declare let $dataClasses: IdentifiedItems<Data_Class>;
export declare let $dataCommonEvents: IdentifiedItems<Data_CommonEvent>;
export declare let $dataEnemies: IdentifiedItems<Data_Enemy>;
export declare let $dataItems: IdentifiedItems<Data_Item>;
export declare let $dataStates: IdentifiedItems<Data_State>;
export declare let $dataSkills: IdentifiedItems<Data_Skill>;
export declare let $dataSystem: Data_System;
export declare let $dataTilesets: IdentifiedItems<Data_Tileset>;
export declare let $dataMapinfos: IdentifiedItems<Data_MapInfo>;
export declare let $dataWeapons: IdentifiedItems<Data_Weapon>;
