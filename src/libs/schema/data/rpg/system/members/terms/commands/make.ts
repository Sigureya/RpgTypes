import type { Terms_Command } from "./types";
import type { Terms_CommandArray } from "./types";

export const makeTermsCommand = (
  param: Partial<Terms_Command>
): Terms_CommandArray => {
  return [
    param.fight ?? "Fight",
    param.escape ?? "Escape",
    param.attack ?? "Attack",
    param.guard ?? "Guard",
    param.item ?? "Item",
    param.skill ?? "Skill",
    param.equip ?? "Equip",
    param.status ?? "Status",
    param.formation ?? "Formation",
    param.save ?? "Save",
    param.gameEnd ?? "Game End",
    param.options ?? "Options",
    param.weapon ?? "Weapon",
    param.armor ?? "Armor",
    param.keyItem ?? "Key Item",
    param.equip2 ?? "Equip2",
    param.optimize ?? "Optimize",
    param.clear ?? "Clear",
    param.newGame ?? "New Game",
    param.continue_ ?? "Continue",
    "",
    param.toTitle ?? "To Title",
    param.cancel ?? "Cancel",
    "",
    param.buy ?? "Buy",
    param.sell ?? "Sell",
  ];
};

export const makeTermsCommandFromArray = (
  param: Terms_CommandArray
): Terms_Command => {
  return {
    fight: param[0],
    escape: param[1],
    attack: param[2],
    guard: param[3],
    item: param[4],
    skill: param[5],
    equip: param[6],
    status: param[7],
    formation: param[8],
    save: param[9],
    gameEnd: param[10],
    options: param[11],
    weapon: param[12],
    armor: param[13],
    keyItem: param[14],
    equip2: param[15],
    optimize: param[16],
    clear: param[17],
    newGame: param[18],
    continue_: param[19],
    toTitle: param[21],
    cancel: param[22],
    buy: param[23],
    sell: param[24],
  };
};
