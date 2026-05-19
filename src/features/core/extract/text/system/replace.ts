import type { Data_System } from "@RpgTypes/rmmz";
import {
  makeSystemData,
  makeSoundsObject,
  makeMenuCommandsEnabledFromArray,
  makeItemCategoriesFromArray,
} from "@RpgTypes/rmmz";
import type { ExtractedSystemTexts } from "./types";

export const replaceSystemTextEx = (
  system: Data_System,
  texts: ExtractedSystemTexts,
): Data_System => {
  return makeSystemData({
    locale: system.locale,
    versionId: system.versionId,
    options: system,
    advanced: system.advanced,
    vehicles: system,
    editing: system.editor,
    sounds: makeSoundsObject(system.sounds),
    images: {
      title1Name: system.title1Name,
      title2Name: system.title2Name,
    },
    bgm: {
      titleBgm: system.titleBgm,
      battleBgm: system.battleBgm,
    },
    me: {
      defeatMe: system.defeatMe,
      gameoverMe: system.gameoverMe,
      victoryMe: system.victoryMe,
    },
    texts: {
      gameTitle: texts.gameTitle,
      currencyUnit: texts.currencyUnit,
    },
    dataNames: {
      variables: system.variables,
      switches: system.switches,
      armorTypes: texts.armorTypes,
      elements: texts.elements,
      equipTypes: texts.equipTypes,
      weaponTypes: texts.weaponTypes,
      skillTypes: texts.skillTypes,
    },
    terms: {
      basic: texts.terms.basic,
      commands: texts.terms.commands,
      messages: texts.terms.messages,
      params: texts.terms.params,
    },
    itemCategories: makeItemCategoriesFromArray(system.itemCategories),
    menuCommands: makeMenuCommandsEnabledFromArray(system.menuCommands),
    titleCommandWindow: system.titleCommandWindow,
    size: {
      tileSize: system.tileSize,
      faceSize: system.faceSize,
      iconSize: system.iconSize,
    },
    gameInit: {
      startMapId: system.startMapId,
      startX: system.startX,
      startY: system.startY,
      partyMembers: system.partyMembers,
    },
    editorTemporary: {
      editMapId: system.editMapId,
      battlerName: system.battlerName,
    },
    attackMotion: system.attackMotions,
    battle: {
      battleSystem: system.battleSystem,
      magicSkills: system.magicSkills,
    },
    battleTest: {
      battleback1Name: system.battleback1Name,
      battleback2Name: system.battleback2Name,
      testBattlers: system.testBattlers,
      testTroopId: system.testTroopId,
    },
  });
};
