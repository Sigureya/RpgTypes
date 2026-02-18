import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ScrollMap } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandScrollMap } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Map, Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

type FakeMap = Pick<Rmmz_Map, "mapId" | "isScrolling" | "startScroll">;
type FakeParty = Pick<Rmmz_Party, "inBattle">;

const createMockParty = (value: boolean): MockedObject<FakeParty> => ({
  inBattle: vi.fn().mockReturnValue(value),
});

const createMockedMap = (isScroolling: boolean): MockedObject<FakeMap> => {
  return {
    mapId: vi.fn().mockReturnValue(123),
    isScrolling: vi.fn().mockReturnValue(isScroolling),
    startScroll: vi.fn(),
  };
};

const stubGlobalObjects = (
  map: MockedObject<FakeMap>,
  party: MockedObject<FakeParty>,
) => {
  vi.stubGlobal("$gameMap", map);
  vi.stubGlobal("$gameParty", party);
};

const createInterprter = (command: Command_ScrollMap) => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "setWaitMode");
  interpreter.setup([command], 0);
  return interpreter;
};

describe("CommandMapScroll", () => {
  describe("successfully starts scrolling and waits if not already scrolling and not in battle", () => {
    const DIRECTION = 2;
    const DISTANCE = 10;
    const SPEED = 4;
    const command: Command_ScrollMap = {
      code: 204,
      indent: 0,
      parameters: [DIRECTION, DISTANCE, SPEED, true],
    };
    test("make", () => {
      const newCommand: Command_ScrollMap = makeCommandScrollMap({
        direction: DIRECTION,
        distance: DISTANCE,
        speed: SPEED,
        waiting: true,
      });
      expect(newCommand).toEqual(command);
    });
    test("execute with relevant map calls", () => {
      const map = createMockedMap(false);
      const party = createMockParty(false);
      stubGlobalObjects(map, party);
      const interpreter = createInterprter(command);
      interpreter.executeCommand();
      expect(party.inBattle).toHaveBeenCalledOnce();
      expect(map.isScrolling).toHaveBeenCalledOnce();
      expect(map.startScroll).toHaveBeenCalledWith(DIRECTION, DISTANCE, SPEED);
      expect(interpreter.setWaitMode).toHaveBeenCalledOnce();
    });
  });
  describe("does not start scrolling or wait if already scrolling or in battle", () => {
    const DIRECTION = 8;
    const DISTANCE = 17;
    const SPEED = 5;
    const command: Command_ScrollMap = {
      code: 204,
      indent: 0,
      parameters: [DIRECTION, DISTANCE, SPEED, false],
    };
    test("make", () => {
      const newCommand: Command_ScrollMap = makeCommandScrollMap({
        direction: DIRECTION,
        distance: DISTANCE,
        speed: SPEED,
        waiting: false,
      });
      expect(newCommand).toEqual(command);
    });
    test("execute with relevant map calls", () => {
      const map = createMockedMap(true);
      const party = createMockParty(true);
      stubGlobalObjects(map, party);
      const interpreter = createInterprter(command);
      interpreter.executeCommand();
      expect(party.inBattle).toHaveBeenCalledOnce();
      expect(map.isScrolling).not.toHaveBeenCalled();
      expect(map.startScroll).not.toHaveBeenCalled();
      expect(interpreter.setWaitMode).not.toHaveBeenCalled();
    });
  });
});
