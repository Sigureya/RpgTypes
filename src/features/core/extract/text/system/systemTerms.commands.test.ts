import { describe, expect, test, vi } from "vitest";
import type { Terms_GameCommands } from "@RpgTypes/rmmz";
import { gameCommands } from "./systemTerms";
import type { ExtractedGameCommandsTextItem } from "./types";

type UUID = "test-uuid";
const MockUUID = "test-uuid" as const satisfies UUID;
const filename = "system.json" as const;

const commands: Terms_GameCommands = {
  fight: "Fight",
  escape: "Escape",
  attack: "Attack",
  guard: "Guard",
  item: "Item",
  skill: "Skill",
  equip: "Equip",
  status: "Status",
  formation: "Formation",
  save: "Save",
  gameEnd: "Game End",
  options: "Options",
  weapon: "Weapon",
  armor: "Armor",
  keyItem: "Key Item",
  equip2: "Equip2",
  optimize: "Optimize",
  clear: "Clear",
  newGame: "New Game",
  continueGame: "Continue",
  toTitle: "To Title",
  cancel: "Cancel",
  buy: "Buy",
  sell: "Sell",
};

const kindCommands: Terms_GameCommands = {
  fight: "戦う",
  escape: "逃げる",
  attack: "攻撃",
  guard: "防御",
  item: "アイテム",
  skill: "スキル",
  equip: "装備",
  status: "ステータス",
  formation: "フォーメーション",
  save: "セーブ",
  gameEnd: "ゲーム終了",
  options: "オプション",
  weapon: "武器",
  armor: "防具",
  keyItem: "キーアイテム",
  equip2: "装備2",
  optimize: "最適化",
  clear: "クリア",
  newGame: "ニューゲーム",
  continueGame: "続きから",
  toTitle: "タイトルへ戻る",
  cancel: "キャンセル",
  buy: "買う",
  sell: "売る",
};

const expectedCommands: ExtractedGameCommandsTextItem<UUID>[] = [
  {
    baseText: commands.fight,
    filename,
    id: 0,
    kind: kindCommands.fight,
    uuid: "test-uuid",
    dataKey: "commands.fight",
  },
  {
    baseText: commands.escape,
    filename,
    id: 0,
    kind: kindCommands.escape,
    uuid: "test-uuid",
    dataKey: "commands.escape",
  },
  {
    baseText: commands.attack,
    filename,
    id: 0,
    kind: kindCommands.attack,
    uuid: "test-uuid",
    dataKey: "commands.attack",
  },
  {
    baseText: commands.guard,
    filename,
    id: 0,
    kind: kindCommands.guard,
    uuid: "test-uuid",
    dataKey: "commands.guard",
  },
  {
    baseText: commands.item,
    filename,
    id: 0,
    kind: kindCommands.item,
    uuid: "test-uuid",
    dataKey: "commands.item",
  },
  {
    baseText: commands.skill,
    filename,
    id: 0,
    kind: kindCommands.skill,
    uuid: "test-uuid",
    dataKey: "commands.skill",
  },
  {
    baseText: commands.equip,
    filename,
    id: 0,
    kind: kindCommands.equip,
    uuid: "test-uuid",
    dataKey: "commands.equip",
  },
  {
    baseText: commands.status,
    filename,
    id: 0,
    kind: kindCommands.status,
    uuid: "test-uuid",
    dataKey: "commands.status",
  },
  {
    baseText: commands.formation,
    filename,
    id: 0,
    kind: kindCommands.formation,
    uuid: "test-uuid",
    dataKey: "commands.formation",
  },
  {
    baseText: commands.save,
    filename,
    id: 0,
    kind: kindCommands.save,
    uuid: "test-uuid",
    dataKey: "commands.save",
  },
  {
    baseText: commands.gameEnd,
    filename,
    id: 0,
    kind: kindCommands.gameEnd,
    uuid: "test-uuid",
    dataKey: "commands.gameEnd",
  },
  {
    baseText: commands.options,
    filename,
    id: 0,
    kind: kindCommands.options,
    uuid: "test-uuid",
    dataKey: "commands.options",
  },
  {
    baseText: commands.weapon,
    filename,
    id: 0,
    kind: kindCommands.weapon,
    uuid: "test-uuid",
    dataKey: "commands.weapon",
  },
  {
    baseText: commands.armor,
    filename,
    id: 0,
    kind: kindCommands.armor,
    uuid: "test-uuid",
    dataKey: "commands.armor",
  },
  {
    baseText: commands.keyItem,
    filename,
    id: 0,
    kind: kindCommands.keyItem,
    uuid: "test-uuid",
    dataKey: "commands.keyItem",
  },
  {
    baseText: "Equip2",
    dataKey: "commands.equip2",
    filename: "system.json",
    id: 0,
    kind: "装備2",
    uuid: "test-uuid",
  },
  {
    baseText: "Optimize",
    dataKey: "commands.optimize",
    filename: "system.json",
    id: 0,
    kind: "最適化",
    uuid: "test-uuid",
  },
  {
    baseText: "Clear",
    dataKey: "commands.clear",
    filename: "system.json",
    id: 0,
    kind: "クリア",
    uuid: "test-uuid",
  },
  {
    baseText: "New Game",
    dataKey: "commands.newGame",
    filename: "system.json",
    id: 0,
    kind: "ニューゲーム",
    uuid: "test-uuid",
  },
  {
    baseText: "Continue",
    dataKey: "commands.continueGame",
    filename: "system.json",
    id: 0,
    kind: "続きから",
    uuid: "test-uuid",
  },
  {
    baseText: "To Title",
    dataKey: "commands.toTitle",
    filename: "system.json",
    id: 0,
    kind: "タイトルへ戻る",
    uuid: "test-uuid",
  },
  {
    baseText: "Cancel",
    dataKey: "commands.cancel",
    filename: "system.json",
    id: 0,
    kind: "キャンセル",
    uuid: "test-uuid",
  },
  {
    baseText: "Buy",
    dataKey: "commands.buy",
    filename: "system.json",
    id: 0,
    kind: "買う",
    uuid: "test-uuid",
  },
  {
    baseText: "Sell",
    dataKey: "commands.sell",
    filename: "system.json",
    id: 0,
    kind: "売る",
    uuid: "test-uuid",
  },
];

describe("gameCommands", () => {
  const mockFnUUID = vi.fn(() => MockUUID);
  const result = gameCommands<UUID>(
    commands,
    filename,
    mockFnUUID,
    (key) => kindCommands[key],
  );

  test("should extract game commands", () => {
    expect(result).toEqual(expectedCommands);
  });

  test("should call UUID function for each command", () => {
    expect(mockFnUUID).toHaveBeenCalledTimes(expectedCommands.length);
  });
});
