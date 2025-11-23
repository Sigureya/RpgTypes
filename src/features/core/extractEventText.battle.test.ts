import { test, expect, describe, vi } from "vitest";
import type { Data_Troop } from "@RpgTypes/rmmz";
import type { ExtractedBattleEventText } from "./extract/text/eventCommand";
import { extractBattleEventTexts } from "./extractEventText";

describe("extractBattleEventTexts", () => {
  test("emptyTroops", () => {
    const mockTroops: Data_Troop[] = [
      {
        id: 1,
        name: "Troop 1",
        members: [],
        pages: [],
      },
    ];
    const mockFn = vi.fn(() => []);
    const result = extractBattleEventTexts(mockTroops, mockFn);
    expect(mockFn).not.toHaveBeenCalled();
    const expected: ExtractedBattleEventText[][] = [[]];
    expect(result).toEqual(expected);
  });
});
