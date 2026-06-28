import { describe, expect, test, vi, type MockedObject } from "vitest";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandBranchBySwitchOFF } from "@RpgTypes/rmmz/eventCommand/commands/flow/branch/make";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const createMockSwitch = (value: boolean): MockedObject<Rmmz_Switches> => {
  return {
    setValue: vi.fn(),
    value: vi.fn().mockReturnValue(value),
  };
};

const setup = (value: boolean, eventCommands: EventCommand[]) => {
  const mockSwitch = createMockSwitch(value);
  const mcokSelfSwitch = createMockSwitch(value);
  const fakeMap: FakeMap = {
    mapId: () => 1,
  };
  vi.stubGlobal("$gameMap", fakeMap);
  vi.stubGlobal("$gameSwitches", mockSwitch);
  vi.stubGlobal("$gameSelfSwitches", mcokSelfSwitch);
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "skipBranch");
  vi.spyOn(interpreter, "command111");
  interpreter.setup(eventCommands, 0);
  return { interpreter, mockSwitch, mcokSelfSwitch };
};

describe("", () => {
  describe("BranchBySwitchOFF", () => {
    const eventCommands: EventCommand[] = [
      makeCommandBranchBySwitchOFF(1),
      {
        code: 0,
        indent: 0,
        parameters: [],
      },
    ];
    test("value is false", () => {
      const { interpreter, mockSwitch, mcokSelfSwitch } = setup(
        false,
        eventCommands,
      );
      interpreter.executeCommand();
      expect(interpreter.command111).toHaveBeenCalledOnce();
      expect(interpreter.skipBranch).not.toHaveBeenCalled();
      expect(mockSwitch.value).toHaveBeenCalledOnce();
      expect(mcokSelfSwitch.value).not.toHaveBeenCalled();
    });
    test("value is true", () => {
      const { interpreter, mockSwitch, mcokSelfSwitch } = setup(
        true,
        eventCommands,
      );
      interpreter.executeCommand();
      expect(interpreter.command111).toHaveBeenCalledOnce();
      expect(interpreter.skipBranch).toHaveBeenCalledOnce();
      expect(mockSwitch.value).toHaveBeenCalledOnce();
      expect(mcokSelfSwitch.value).not.toHaveBeenCalled();
    });
  });
});
