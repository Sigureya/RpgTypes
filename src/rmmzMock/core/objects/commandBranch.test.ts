import { describe, test, vi, type MockedObject } from "vitest";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const createMockSwitch = (
  trueSwitchId: number,
): MockedObject<Rmmz_Switches> => {
  return {
    setValue: vi.fn(),
    value: vi.fn((id: number): boolean => id === trueSwitchId),
  };
};

const setup = () => {
  const fakeMap: FakeMap = {
    mapId: () => 1,
  };
  vi.stubGlobal("$gameMap", fakeMap);
  const inter = new Game_Interpreter();
};

describe.skip("", () => {
  test("", () => {
    
  });
});
