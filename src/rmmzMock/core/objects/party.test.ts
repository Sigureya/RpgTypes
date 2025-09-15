import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainActorHP,
  makeCommandGainActorMP,
  makeCommandGainActorTP,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Actors, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorsTemplate } from "@RpgTypes/rmmzRuntime/objects/core/battler/actors";
import type { FakeMap, FakeBattler } from "./fakes/types";
import { Game_Interpreter, Game_Party } from "./rmmz_objects";

declare global {
  var $gameParty: Game_Party;
  var $gameMap: Partial<FakeMap>;
  var $gameActors: Rmmz_Actors;
}

type FakeActor = FakeBattler & { actorId(): number };

type MockedActors = MockedObject<Rmmz_ActorsTemplate<FakeBattler>>;

const makeMockBattler = (id: number): MockedObject<FakeActor> => {
  return {
    actorId: vi.fn(() => id),
    loseHp: vi.fn(),
    loseMp: vi.fn(),
    loseTp: vi.fn(),
    gainHp: vi.fn(),
    gainMp: vi.fn(),
    gainTp: vi.fn(),
    isAlive: vi.fn(() => true),
    isDead: vi.fn(() => false),
  };
};

const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

const makeMockActors = (
  actor: ({ actorId(): number } & FakeBattler)[]
): MockedActors => ({
  actor: vi.fn((id: number) => actor.find((a) => a.actorId() === id) || null),
  initialize: vi.fn(),
});

interface MakeMocksResult {
  mockBattler: MockedObject<FakeActor>;
  mockBattler2: MockedObject<FakeActor>;
  mockActors: MockedActors;
  mockMap: FakeMap;
  mockParty: Game_Party;
  mockVariables: MockedObject<Rmmz_Variables>;
}

const makeMockVariables = (
  values: Record<number, number>
): MockedObject<Rmmz_Variables> => {
  return {
    clear: vi.fn(),
    value: vi.fn((id: number) => values[id] || 0),
    setValue: vi.fn(),
    onChange: vi.fn(),
  };
};

interface MockParam {
  variables?: Record<number, number>;
}

const makeMocks = ({ variables = {} }: MockParam = {}): MakeMocksResult => {
  const mockBattler = makeMockBattler(1);
  const mockBattler2 = makeMockBattler(2);
  const mockActors = makeMockActors([mockBattler, mockBattler2]);
  const mockMap = makeMockMap();
  const mockParty = new Game_Party();
  // メンバーを加える必要がある
  mockParty._actors = [1, 2];
  const mockVariables = makeMockVariables(variables);
  return {
    mockBattler,
    mockActors,
    mockMap,
    mockParty,
    mockBattler2,
    mockVariables,
  };
};

const makeInterpreter = (command: EventCommand) => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "operateValue");
  vi.spyOn(interpreter, "iterateActorEx");
  vi.spyOn(interpreter, "iterateActorId");

  vi.spyOn(interpreter, "command311");
  vi.spyOn(interpreter, "command312");
  vi.spyOn(interpreter, "command326");
  interpreter.setup([command], 0);
  return interpreter;
};

const setupGlobal = (mocks: MakeMocksResult) => {
  vi.stubGlobal("$gameActors", mocks.mockActors);
  vi.stubGlobal("$gameParty", mocks.mockParty);
  vi.stubGlobal("$gameMap", mocks.mockMap);
  vi.stubGlobal("$gameVariables", mocks.mockVariables);
};

const paramCalledWith = (
  command:
    | Command_ChangeActorHP
    | Command_ChangeActorMP
    | Command_ChangeActorTP,
  interpreter: Game_Interpreter
) => {
  expect(interpreter.iterateActorEx).toHaveBeenCalledWith(
    command.parameters[0],
    command.parameters[1],
    expect.any(Function)
  );
  expect(interpreter.operateValue).toHaveBeenCalledWith(
    command.parameters[2],
    command.parameters[3],
    command.parameters[4]
  );
};

describe("gain HP", () => {
  describe("single", () => {
    const command: Command_ChangeActorHP = {
      code: 311,
      indent: 0,
      parameters: [0, 1, 0, 0, 123, false],
    };
    test("make command", () => {
      const newCommand = makeCommandGainActorHP({
        allowDeath: false,
        target: 1,
        operand: { mode: "direct", value: 123 },
        targetType: "direct",
      });
      expect(newCommand).toEqual(command);
    });

    test("should call gainHp on the correct actor", () => {
      const mocks = makeMocks();
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors } = mocks;
      const interpreter = makeInterpreter(command);

      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);
      expect(interpreter.command311).toHaveBeenCalledWith(command.parameters);
      expect(interpreter.iterateActorId).toHaveBeenCalledWith(
        1,
        expect.any(Function)
      );
      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
      expect(mockBattler.gainHp).toHaveBeenCalledWith(123);
      expect(mockBattler2.gainHp).not.toHaveBeenCalled();
    });
  });
  describe("target each", () => {
    const command: Command_ChangeActorHP = {
      code: 311,
      indent: 0,
      parameters: [0, 0, 0, 0, 123, false],
    };
    test("make command", () => {
      const newCommand: Command_ChangeActorHP = makeCommandGainActorHP({
        allowDeath: false,
        targetType: "each",
        target: 0,
        operand: { mode: "direct", value: 123 },
      });
      expect(newCommand).toEqual(command);
    });
    test("exec command", () => {
      const mocks = makeMocks();
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors } = mocks;
      const interpreter = makeInterpreter(command);

      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);

      expect(interpreter.command311).toHaveBeenCalledWith(command.parameters);

      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(mockActors.actor).toHaveBeenCalledWith(2);

      expect(result).toBe(true);
      expect(mockBattler.gainHp).toHaveBeenCalledWith(123);
      expect(mockBattler2.gainHp).toHaveBeenCalledWith(123);
    });
  });
});

describe("gain MP", () => {
  describe("target single", () => {
    const MP_CONST = 456 as const;
    const command: Command_ChangeActorMP = {
      code: 312,
      indent: 0,
      parameters: [0, 1, 0, 0, MP_CONST],
    };
    test("make command", () => {
      const newCommand = makeCommandGainActorMP({
        target: 1,
        operand: { mode: "direct", value: MP_CONST },
        targetType: "direct",
      });
      expect(newCommand).toEqual(command);
    });

    test("exec", () => {
      const mocks = makeMocks();
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors } = mocks;
      const interpreter = makeInterpreter(command);

      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);
      expect(interpreter.command312).toHaveBeenCalledWith(command.parameters);
      expect(interpreter.iterateActorId).toHaveBeenCalledWith(
        1,
        expect.any(Function)
      );
      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
      expect(mockBattler.gainMp).toHaveBeenCalledWith(MP_CONST);
      expect(mockBattler2.gainHp).not.toHaveBeenCalled();
    });
  });
  describe("target each", () => {
    const command: Command_ChangeActorMP = {
      code: 312,
      indent: 0,
      parameters: [0, 0, 0, 0, 123],
    };
    test("make command", () => {
      const newCommand: Command_ChangeActorMP = makeCommandGainActorMP({
        targetType: "each",
        target: 0,
        operand: { mode: "direct", value: 123 },
      });
      expect(newCommand).toEqual(command);
    });
    test("exec command", () => {
      const mocks = makeMocks();
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors, mockVariables } = mocks;
      const interpreter = makeInterpreter(command);

      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);

      expect(interpreter.command312).toHaveBeenCalledWith(command.parameters);

      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(mockActors.actor).toHaveBeenCalledWith(2);

      expect(result).toBe(true);
      expect(mockBattler.gainMp).toHaveBeenCalledWith(123);
      expect(mockBattler2.gainMp).toHaveBeenCalledWith(123);
      expect(mockVariables.value).not.toHaveBeenCalled();
    });
  });
});

describe("gain TP", () => {
  describe("target single", () => {
    const TP_CONST = 789 as const;
    const command: Command_ChangeActorTP = {
      code: 326,
      indent: 0,
      parameters: [0, 1, 0, 0, TP_CONST],
    };
    test("make command", () => {
      const newCommand = makeCommandGainActorTP({
        target: 1,
        operand: { mode: "direct", value: TP_CONST },
        targetType: "direct",
      });
      expect(newCommand).toEqual(command);
    });
    test("exec", () => {
      const mocks = makeMocks();
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors, mockVariables } = mocks;
      const interpreter = makeInterpreter(command);
      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);
      expect(interpreter.command326).toHaveBeenCalledWith(command.parameters);
      expect(interpreter.iterateActorId).toHaveBeenCalledWith(
        1,
        expect.any(Function)
      );
      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
      expect(mockBattler.gainTp).toHaveBeenCalledWith(TP_CONST);
      expect(mockBattler2.gainTp).not.toHaveBeenCalled();
      expect(mockVariables.value).not.toHaveBeenCalled();
    });
  });
  describe("target each", () => {
    const command: Command_ChangeActorTP = {
      code: 326,
      indent: 0,
      parameters: [0, 0, 0, 0, 123],
    };
    test("make command", () => {
      const newCommand: Command_ChangeActorTP = makeCommandGainActorTP({
        targetType: "each",
        target: 0,
        operand: { mode: "direct", value: 123 },
      });
      expect(newCommand).toEqual(command);
    });
    test("exec command", () => {
      const mocks = makeMocks();
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors, mockVariables } = mocks;
      const interpreter = makeInterpreter(command);
      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);
      expect(interpreter.command326).toHaveBeenCalledWith(command.parameters);
      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(mockActors.actor).toHaveBeenCalledWith(2);
      expect(result).toBe(true);
      expect(mockBattler.gainTp).toHaveBeenCalledWith(123);
      expect(mockBattler2.gainTp).toHaveBeenCalledWith(123);
      expect(mockVariables.value).not.toHaveBeenCalled();
    });
  });

  describe("target select variable", () => {
    const command: Command_ChangeActorTP = {
      code: 326,
      indent: 0,
      parameters: [1, 251, 0, 1, 252],
    };

    const variables = { 251: 1, 252: 493 } as const;

    test("exec command", () => {
      const mocks = makeMocks({ variables });
      setupGlobal(mocks);
      const { mockBattler, mockBattler2, mockActors, mockVariables } = mocks;
      const interpreter = makeInterpreter(command);
      const result = interpreter.executeCommand();
      paramCalledWith(command, interpreter);
      expect(mockVariables.value).toReturnWith(variables[251]);
      expect(mockVariables.value).toReturnWith(variables[252]);

      expect(interpreter.command326).toHaveBeenCalledWith(command.parameters);
      expect(mockActors.actor).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
      expect(mockBattler.gainTp).toHaveBeenCalledWith(variables[252]);
      expect(mockBattler2.gainTp).not.toHaveBeenCalled();
    });
  });
});
