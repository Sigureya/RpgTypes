import { describe, test, expect } from "vitest";
import type { Data_Tileset } from "@RpgTypes/rmmz/rpg";
const validate = require("./tilesetValidate.cjs");

const isDataTileset = (data: unknown): data is Data_Tileset => {
  return validate(data);
};

describe("isDataTileset", () => {
  test("valid Data_Tileset", () => {
    const tileset: Data_Tileset = {
      id: 1,
      name: "Dungeon",
      note: "",
      flags: [0, 1, 2],
      mode: 0,
      tilesetNames: [
        "TileA1",
        "TileA2",
        "TileA3",
        "TileA4",
        "TileA5",
        "TileB",
        "TileC",
        "TileD",
        "TileE",
      ],
    };
    expect(tileset).toSatisfy(isDataTileset);
  });

  test("invalid Data_Tileset", () => {
    expect({}).not.toSatisfy(isDataTileset);
    expect({
      id: "1",
      name: "x",
      note: "",
      flags: [],
      mode: 0,
      tilesetNames: [],
    }).not.toSatisfy(isDataTileset);
    expect(null).not.toSatisfy(isDataTileset);
    expect(undefined).not.toSatisfy(isDataTileset);
  });
});
