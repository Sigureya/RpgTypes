export const KEYWORD_GAME_VALIABLES = [
  "$gameVariables",
  "$gameSystem",
  "$gameScreen",
  "$gameTimer",
  "$gameMessage",
  "$gameSwitches",
  "$gameSelfSwitches",
  "$gameActors",
  "$gameParty",
  "$gameTroop",
  "$gameMap",
  "$gamePlayer",
  "$gameTemp",
] as const;

export const KEYWORD_GAME_OBJECTS = [
  "$dataActors",
  "$dataClasses",
  "$dataSkills",
  "$dataItems",
  "$dataEnemies",
  "$dataWeapons",
  "$dataArmors",
  "$dataEnemies",
  "$dataTroops",
  "$dataStates",
  "$dataAnimations",
  "$dataTilesets",
  "$dataCommonEvents",
] as const;

export const KEYWORD_MANAGER = [
  "SceneManager",
  "AudioManager",
  "ImageManager",
  "DataManager",
  "PluginManager",
] as const;

export const KEYWORD_MATH = ["Math.max", "Math.min"] as const;
