import { describe, expect, test, vi } from "vitest";
import type { Data_Map, RpgDataBundle } from "@RpgTypes/rmmz";
import { makeMapData, makeSystemData } from "@RpgTypes/rmmz";
import type { ReadArrayResult } from "./arrayData";
import { FILENAME_ACTORS, FILENAME_MAP_INFOS } from "./arrayData";
import type { MapBatchReadResult } from "./map";
import type { RawGameData } from "./resultType";
import { FILENAME_SYSTEM } from "./system";
import { writeBundleData, writeRawGameData } from "./writeData";

const createArrayResult = <T>(data: T[]): ReadArrayResult<T> => ({
  success: true,
  fileName: "test.json",
  data,
  error: "",
});

const systemData = makeSystemData({ texts: { gameTitle: "Test Game" } });
const mapData: Data_Map = makeMapData({ displayName: "Map1" });

const bundle: RpgDataBundle = {
  actors: [{ id: 1, name: "Actor" } as RpgDataBundle["actors"][number]],
  enemies: [],
  weapons: [],
  armors: [],
  classes: [],
  items: [],
  troops: [],
  commonEvents: [],
  skills: [],
  states: [],
  animations: [],
  tilesets: [],
  mapInfos: [{ id: 1, name: "Map1" } as RpgDataBundle["mapInfos"][number]],
  system: systemData,
};

const mapFiles: MapBatchReadResult<Data_Map> = {
  info: { success: true },
  validMaps: [
    {
      filename: "Map001",
      editingName: "Map1",
      map: mapData,
    },
  ],
  invalidMaps: [],
};

const rawGameData: RawGameData = {
  actors: createArrayResult(bundle.actors),
  armors: createArrayResult(bundle.armors),
  classes: createArrayResult(bundle.classes),
  commonEvents: createArrayResult(bundle.commonEvents),
  enemies: createArrayResult(bundle.enemies),
  items: createArrayResult(bundle.items),
  mapInfos: createArrayResult(bundle.mapInfos),
  skills: createArrayResult(bundle.skills),
  states: createArrayResult(bundle.states),
  system: { system: systemData, message: "" },
  troops: createArrayResult(bundle.troops),
  weapons: createArrayResult(bundle.weapons),
  tilesets: createArrayResult(bundle.tilesets),
  animations: createArrayResult(bundle.animations),
  mapFiles,
};

describe("writeAllData", () => {
  test("main data, system, map data をまとめて書き込む", async () => {
    const fileWriteFn = vi.fn(async () => undefined);

    await writeBundleData(bundle, mapFiles, fileWriteFn);

    expect(fileWriteFn).toHaveBeenCalledWith(
      FILENAME_ACTORS,
      JSON.stringify([null, ...bundle.actors]),
    );
    expect(fileWriteFn).toHaveBeenCalledWith(
      FILENAME_MAP_INFOS,
      JSON.stringify([null, ...bundle.mapInfos]),
    );
    expect(fileWriteFn).toHaveBeenCalledWith(
      FILENAME_SYSTEM,
      JSON.stringify(systemData),
    );
    expect(fileWriteFn).toHaveBeenCalledWith(
      "Map001.json",
      JSON.stringify(mapData),
    );
  });
});

describe("writeGameData", () => {
  test("RawGameData を下位書き込み関数へ委譲する", async () => {
    const fileWriteFn = vi.fn(async () => undefined);

    await writeRawGameData(rawGameData, fileWriteFn);

    expect(fileWriteFn).toHaveBeenCalledWith(
      FILENAME_ACTORS,
      JSON.stringify([null, ...bundle.actors]),
    );
    expect(fileWriteFn).toHaveBeenCalledWith(
      FILENAME_SYSTEM,
      JSON.stringify(systemData),
    );
    expect(fileWriteFn).toHaveBeenCalledWith(
      "Map001.json",
      JSON.stringify(mapData),
    );
  });

  test("system が null の場合は System.json を書き込まない", async () => {
    const fileWriteFn = vi.fn(async () => undefined);

    await writeRawGameData(
      {
        ...rawGameData,
        system: { system: null, message: "missing" },
      },
      fileWriteFn,
    );

    expect(fileWriteFn).not.toHaveBeenCalledWith(
      FILENAME_SYSTEM,
      expect.any(String),
    );
  });
});
