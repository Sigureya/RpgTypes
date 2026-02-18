import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import {
  makeCommandChangeTileset,
  type Command_ChangeTileset,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Tileset } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_ImageManager, Rmmz_Map } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

type FakeMap = Pick<Rmmz_Map, "mapId" | "changeTileset">;
type FakeImageManager = Pick<Rmmz_ImageManager, "loadTileset">;
type FakeTileset = Pick<Data_Tileset, "tilesetNames">;

interface FakeBitmap {
  isReady(): boolean;
}

const makeMockMap = (): MockedObject<FakeMap> => ({
  mapId: vi.fn().mockReturnValue(123),
  changeTileset: vi.fn(),
});

const mockBitmap = (filename: string): FakeBitmap => ({
  isReady: () => filename === "ok" || filename === "good",
});

const mockImageManager = (): MockedObject<FakeImageManager> => ({
  loadTileset: vi.fn((filename) => mockBitmap(filename)),
});

interface MockBundle {
  map: MockedObject<FakeMap>;
  imageManager: MockedObject<FakeImageManager>;
}

const createMocks = (): MockBundle => {
  return {
    map: makeMockMap(),
    imageManager: mockImageManager(),
  };
};

const mockTilesets: (FakeTileset | null)[] = [
  null,
  { tilesetNames: ["ok", "good"] },
  { tilesetNames: ["ok", "bad"] },
  { tilesetNames: ["bad1", "bad2", "bad3"] },
];

const setupGloablMocks = (bundle: MockBundle): void => {
  vi.stubGlobal("$gameMap", bundle.map);
  vi.stubGlobal("ImageManager", bundle.imageManager);
  vi.stubGlobal("$dataTilesets", mockTilesets);
};

describe("", () => {
  describe("successfully changes tileset", () => {
    const command: Command_ChangeTileset = {
      code: 282,
      indent: 0,
      parameters: [1],
    };
    test("make", () => {
      const newCommand = makeCommandChangeTileset({ tilesetId: 1 });
      expect(newCommand).toEqual(command);
    });
    test("exec", () => {
      const mocks = createMocks();
      setupGloablMocks(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      const result = interpreter.executeCommand();
      expect(result).toBe(true);
      expect(mocks.map.mapId).toHaveBeenCalledOnce();
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("ok");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("good");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledTimes(2);
      expect(mocks.map.changeTileset).toHaveBeenCalledWith(1);
      expect(mocks.map.changeTileset).toHaveBeenCalledOnce();
    });
  });
  describe("fails to change tileset when tileset data is null or bitmap is not ready", () => {
    const command: Command_ChangeTileset = {
      code: 282,
      indent: 0,
      parameters: [0],
    };

    test("make", () => {
      const newCommand = makeCommandChangeTileset({ tilesetId: 0 });
      expect(newCommand).toEqual(command);
    });
    test("exec", () => {
      const mocks = createMocks();
      setupGloablMocks(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      expect(() => interpreter.executeCommand()).toThrow();
      expect(mocks.imageManager.loadTileset).not.toHaveBeenCalled();
      expect(mocks.map.changeTileset).not.toHaveBeenCalled();
    });
  });
  describe("fails to change tileset when tileset data is null or bitmap is not ready", () => {
    const command: Command_ChangeTileset = {
      code: 282,
      indent: 0,
      parameters: [mockTilesets.length],
    };
    test("make", () => {
      const newCommand = makeCommandChangeTileset({
        tilesetId: mockTilesets.length,
      });
      expect(newCommand).toEqual(command);
    });
    test("exec", () => {
      const mocks = createMocks();
      setupGloablMocks(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      expect(() => interpreter.executeCommand()).toThrow();
      expect(mocks.imageManager.loadTileset).not.toHaveBeenCalled();
      expect(mocks.map.changeTileset).not.toHaveBeenCalled();
    });
  });
  describe("fails to change tileset when bitmap is not ready", () => {
    const command: Command_ChangeTileset = {
      code: 282,
      indent: 0,
      parameters: [2],
    };
    test("make", () => {
      const newCommand = makeCommandChangeTileset({ tilesetId: 2 });
      expect(newCommand).toEqual(command);
    });
    test("exec", () => {
      const mocks = createMocks();
      setupGloablMocks(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      const reuslt = interpreter.executeCommand();
      expect(reuslt).toBe(false);
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("ok");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("bad");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledTimes(2);
      expect(mocks.map.changeTileset).not.toHaveBeenCalled();
    });
  });
  describe("fails to change tileset when multiple bitmaps are not ready and throws after checking all of them", () => {
    const command: Command_ChangeTileset = {
      code: 282,
      indent: 0,
      parameters: [3],
    };
    test("make", () => {
      const newCommand = makeCommandChangeTileset({ tilesetId: 3 });
      expect(newCommand).toEqual(command);
    });
    test("exec", () => {
      const mocks = createMocks();
      setupGloablMocks(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      const reuslt = interpreter.executeCommand();
      expect(reuslt).toBe(false);
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("bad1");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("bad2");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledWith("bad3");
      expect(mocks.imageManager.loadTileset).toHaveBeenCalledTimes(3);
      expect(mocks.map.changeTileset).not.toHaveBeenCalled();
    });
  });
});
