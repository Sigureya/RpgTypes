import { describe, expect, it } from "vitest";
import type { Data_Enemy } from "@RpgTypes/rmmz";
import type {
  ExtractedActorImage,
  ExtractedEnemyImage,
  ImageExtractableActor,
} from "./mainData";
import { extractImageFromEnemy, extractImageFromActor } from "./mainData";
describe("extractImageFromEnemy", () => {
  it("should extract image data from enemy", () => {
    const enemy: Pick<Data_Enemy, "id" | "battlerName"> = {
      id: 1,
      battlerName: "goblin",
    };

    const expected: ExtractedEnemyImage = {
      key: "battlerName",
      image: "goblin",
      id: 1,
    };

    expect(extractImageFromEnemy(enemy)).toEqual(expected);
  });
});

describe("extractImageFromActor", () => {
  it("should extract multiple images from actor", () => {
    const actor: ImageExtractableActor = {
      id: 2,
      faceName: "hero_face",
      characterName: "hero_char",
      battlerName: "hero_battler",
    };

    const expected: ExtractedActorImage[] = [
      { folder: "faces", key: "faceName", image: "hero_face", id: 2 },
      { folder: "characters", key: "characterName", image: "hero_char", id: 2 },
      { folder: "sv_actors", key: "battlerName", image: "hero_battler", id: 2 },
    ];

    expect(extractImageFromActor(actor)).toEqual(expected);
  });
});
