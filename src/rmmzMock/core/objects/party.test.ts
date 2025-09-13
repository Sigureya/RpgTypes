import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type { Command_ChangeActorHP } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandGainActorHP } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Actors } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorsTemplate } from "@RpgTypes/rmmzRuntime/objects/core/battler/actors";
import { createFakeMap } from "./fakes/map";
import type { FakeMap, FakeBattler } from "./fakes/types";
import { Game_Interpreter, Game_Party } from "./rmmz_objects";

globalThis.$gameMap = createFakeMap();

declare global {
  var $gameParty: Game_Party;
  var $gameMap: Partial<FakeMap>;
  var $gameActors: Rmmz_Actors;
}

type FakeActor = FakeBattler & { actorId(): number };

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
): MockedObject<Rmmz_ActorsTemplate<FakeBattler>> => ({
  _data: [],
  actor: vi.fn((id: number) => actor.find((a) => a.actorId() === id) || null),
  initialize: vi.fn(),
});

interface MakeMocksResult {
  mockBattler: MockedObject<FakeActor>;
  mockBattler2: MockedObject<FakeActor>;
  mockActors: ReturnType<typeof makeMockActors>;
  mockMap: ReturnType<typeof makeMockMap>;
  mockParty: Game_Party;
}

const makeMocks = (): MakeMocksResult => {
  const mockBattler = makeMockBattler(1);
  const mockBattler2 = makeMockBattler(2);
  const mockActors = makeMockActors([mockBattler, mockBattler2]);
  const mockMap = makeMockMap();
  const mockParty = new Game_Party();
  return { mockBattler, mockActors, mockMap, mockParty, mockBattler2 };
};

const makeInterpreter = () => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "operateValue");
  vi.spyOn(interpreter, "iterateActorEx");
  vi.spyOn(interpreter, "command311");
  return interpreter;
};

const setupGlobal = (mocks: MakeMocksResult) => {
  globalThis.$gameActors = mocks.mockActors as unknown as Rmmz_Actors;
  globalThis.$gameMap = mocks.mockMap;
  globalThis.$gameParty = new Game_Party();
};

const paaramCalledWith = (
  command: Command_ChangeActorHP,
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

describe("gainHp single", () => {
  const mocks = makeMocks();
  setupGlobal(mocks);
  const { mockBattler, mockBattler2, mockActors } = mocks;
  const interpreter = makeInterpreter();

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

  test("run command", () => {
    interpreter.setup([command], 0);
    const result = interpreter.executeCommand();
    paaramCalledWith(command, interpreter);
    expect(interpreter.command311).toHaveBeenCalledWith(command.parameters);
    expect(mockActors.actor).toHaveBeenCalled();

    expect(result).toBe(true);
    expect(mockBattler.gainHp).toHaveBeenCalledWith(123);
    expect(mockBattler2.gainHp).not.toHaveBeenCalled();
  });
});
