import { describe, expect, test } from "vitest";
import type { ExtractedSystemImage } from "./system";
import { extractImageFromSystem } from "./system";

describe("extractImageFromSystem", () => {
  test("systemから画像を取得する", () => {
    const system = {
      title1Name: "title1",
      title2Name: "title2",
      boat: { characterName: "boat" },
      ship: { characterName: "ship" },
      airship: { characterName: "airship" },
    };
    const result: ExtractedSystemImage[] = extractImageFromSystem(system);
    const expected: ExtractedSystemImage[] = [
      { folder: "titles1", key: "title1Name", image: "title1" },
      { folder: "titles2", key: "title2Name", image: "title2" },
      { folder: "characters", key: "boat", image: "boat" },
      { folder: "characters", key: "ship", image: "ship" },
      { folder: "characters", key: "airship", image: "airship" },
    ];

    expect(result).toEqual(expected);
  });
});
