import { removeNull } from "@app/textFetch/utils";
import type { IdentifiedItems } from "@mzt/utils";
import type { RPG } from "@niokasgami/rpg-maker-mz-typescript";
import * as fsp from "fs/promises";
import type { DataTroop } from "@mzt/event/troop";
import type { DataCommonEvent } from "@mzt/event/common";

function parseAs<T>(text: string) {
  try {
    const obj = JSON.parse(text) as T;
    return obj;
  } catch (error) {
    throw error;
  }
}

function loadObject<T>(filePath: string): Promise<T> {
  return fsp
    .readFile(filePath, { encoding: "utf8" })
    .then((text) => parseAs<T>(text));
}

function loadObjectEx<T>(dirPath: string, filename: string) {
  const path = `${dirPath}/${filename}`;
  return loadObject<IdentifiedItems<T>>(path).then((list) => removeNull(list));
}

interface RpgData {
  Actors: RPG.DataActor[];
  Armors: RPG.DataArmor[];
  Classes: RPG.DataClass[];
  Enemies: RPG.DataEnemy[];
  Items: RPG.DataConsumable[];
  Skills: RPG.DataSkill[];
  States: RPG.DataState[];
  Troops: DataTroop[];
  Weapons: RPG.DataWeapon[];
  CommonEvents: DataCommonEvent[];
  System?: RPG.DataSystem;
}

export function loadAllData(dirPath: string): Promise<RpgData> {
  const result: RpgData = {
    Actors: [],
    Enemies: [],
    Skills: [],
    Items: [],
    Weapons: [],
    Armors: [],
    States: [],
    Classes: [],
    Troops: [],
    CommonEvents: [],
  };
  const promissList = [
    loadObjectEx<RPG.DataActor>(dirPath, "Actors.json").then((data) => {
      result.Actors = data;
    }),
    loadObjectEx<RPG.DataEnemy>(dirPath, "Enemies.json").then((data) => {
      result.Enemies = data;
    }),
    loadObjectEx<RPG.DataSkill>(dirPath, "Skills.json").then((data) => {
      result.Skills = data;
    }),
    loadObjectEx<RPG.DataConsumable>(dirPath, "Items.json").then((data) => {
      result.Items = data;
    }),
    loadObjectEx<RPG.DataWeapon>(dirPath, "Weapons.json").then((data) => {
      result.Weapons = data;
    }),
    loadObjectEx<RPG.DataArmor>(dirPath, "Armors.json").then((data) => {
      result.Armors = data;
    }),
    loadObjectEx<RPG.DataState>(dirPath, "States.json").then((data) => {
      result.States = data;
    }),
    loadObjectEx<RPG.DataClass>(dirPath, "Classes.json").then((data) => {
      result.Classes = data;
    }),
    loadObjectEx<DataTroop>(dirPath, "Troops.json").then((data) => {
      result.Troops = data;
    }),
    loadObjectEx<DataCommonEvent>(dirPath, "CommonEvents.json").then((data) => {
      result.CommonEvents = data;
    }),
  ];

  return Promise.allSettled(promissList).then(() => {
    return result;
  });
}
