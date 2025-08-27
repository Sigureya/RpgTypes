import type { Terms_GameCommands } from "./types";
import type { Terms_CommandArray } from "./types";

export const makeTermsCommandArray = (
  param: Partial<Terms_GameCommands>
): Terms_CommandArray => {
  return makeTermsCommandArrayWithNulls(param, "");
};

export const makeTermsCommandArrayWithNulls = <T extends "" | null>(
  param: Partial<Terms_GameCommands>,
  empty: T
): Terms_CommandArray<T> => {
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
    param.continueGame ?? "Continue",
    empty,
    param.toTitle ?? "To Title",
    param.cancel ?? "Cancel",
    empty,
    param.buy ?? "Buy",
    param.sell ?? "Sell",
  ];
};

export const makeTermsCommandFromArray = <T extends "" | null = "">(
  param: Terms_CommandArray<T>
): Terms_GameCommands => {
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
    continueGame: param[19],
    toTitle: param[21],
    cancel: param[22],

    buy: param[24],
    sell: param[25],
  };
};
