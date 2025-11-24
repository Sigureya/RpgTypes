import { test, expect, describe, vi } from "vitest";
import type { Data_CommonEvent } from "@RpgTypes/rmmz";
import type { ExtractedCommonEventText } from "./extract/text/eventCommand";
import { extractCommonEventTexts } from "./extractEventText";

describe("extractCommonEventTexts", () => {
  test("emptyCommonEvents", () => {
    const mock: Data_CommonEvent[] = [
      {
        id: 1,
        name: "Common Event 1",
        trigger: 0,
        switchId: 0,
        list: [],
      },
    ];
    const mockFn = vi.fn(() => []);
    const result: ExtractedCommonEventText[] = extractCommonEventTexts(
      mock,
      mockFn
    );
    expect(mockFn).not.toHaveBeenCalled();
    const expected: ExtractedCommonEventText[] = [{ eventId: 1, commands: [] }];
    expect(result).toEqual(expected);
  });
});
