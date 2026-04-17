import { describe, expect, test, vi } from "vitest";
import type { MapFileInfo } from "@RpgTypes/rmmz";
import { writeMapData, writeMapFiles } from "./write";

interface TestMap {
  displayName: string;
}

const map1: MapFileInfo<TestMap> = {
  filename: "Map001",
  editingName: "FirstMap",
  map: { displayName: "first" },
};

const map2: MapFileInfo<TestMap> = {
  filename: "Map002",
  editingName: "SecondMap",
  map: { displayName: "second" },
};

describe("writeMapData", () => {
  test("MapFileInfo の filename に .json を付けて書き込む", async () => {
    const fileWriteFn = vi.fn(async () => undefined);

    await writeMapData(map1, fileWriteFn);

    expect(fileWriteFn).toHaveBeenCalledTimes(1);
    expect(fileWriteFn).toHaveBeenCalledWith(
      "Map001.json",
      JSON.stringify(map1.map),
    );
  });

  test("複数マップをまとめて書き込む", async () => {
    const fileWriteFn = vi.fn(async () => undefined);

    await writeMapFiles([map1, map2], fileWriteFn);

    expect(fileWriteFn).toHaveBeenCalledTimes(2);
    expect(fileWriteFn).toHaveBeenNthCalledWith(
      1,
      "Map001.json",
      JSON.stringify(map1.map),
    );
    expect(fileWriteFn).toHaveBeenNthCalledWith(
      2,
      "Map002.json",
      JSON.stringify(map2.map),
    );
  });
});
