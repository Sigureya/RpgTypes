import { IdentifiedItems } from '../libs';
import { EventCommand } from '../rmmz/eventCommand';
import { Data_CommonEvent, Data_Troop } from '../rmmz/events';
import { Data_Actor, Data_Armor, Data_Class, Data_Enemy, Data_Item, Data_Skill, Data_State, Data_Weapon, Data_Map } from '../rmmz/rpg';
import { Data_System } from '../rmmz/system';
import { Rmmz_Actors, Rmmz_Map, Rmmz_Message, Rmmz_System } from './objects';
declare global {
    var $dataActors: IdentifiedItems<Data_Actor>;
    var $dataArmors: IdentifiedItems<Data_Armor>;
    var $dataClasses: IdentifiedItems<Data_Class>;
    var $dataEnemies: IdentifiedItems<Data_Enemy>;
    var $dataCommonEvents: IdentifiedItems<Data_CommonEvent>;
    var $dataItems: IdentifiedItems<Data_Item>;
    var $dataSkills: IdentifiedItems<Data_Skill>;
    var $dataStates: IdentifiedItems<Data_State>;
    var $dataSystem: Data_System;
    var $dataWeapons: IdentifiedItems<Data_Weapon>;
    var $dataTroops: IdentifiedItems<Data_Troop>;
    var $dataMap: Data_Map<EventCommand>;
}
declare global {
    var $gameActors: Rmmz_Actors;
    var $gameMessage: Rmmz_Message;
    var $gameMap: Rmmz_Map;
    var $gameSystem: Rmmz_System;
}
export {};
