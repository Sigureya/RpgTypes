import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type { IdentifiedItems } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandGainActorHP } from "@RpgTypes/rmmz/eventCommand";
import type { Data_Actor, Data_Enemy } from "@RpgTypes/rmmz/rpg";
import { makeParamArray } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actors } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorsTemplate } from "@RpgTypes/rmmzRuntime/objects/core/battler/actors";
import type { Rmmz_Unit } from "@RpgTypes/rmmzRuntime/objects/core/unit/unit";
import { createFakeMap } from "./fakes/map";
import type { FakeUnit, FakeMap, FakeBattler, ActorKeys } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const mockBirdman: Data_Enemy = {
  name: "birdman",
  battlerName: "Birdman",
  battlerHue: 0,
  actions: [],
  dropItems: [],
  exp: 257,
  gold: 123,
  id: 1,
  note: "",
  params: makeParamArray({
    mhp: 80,
    atk: 120,
    def: 70,
    mat: 110,
    mdf: 70,
    agi: 80,
    mmp: 99,
    luk: 77,
  }),
  traits: [],
};

const mockEnemies: IdentifiedItems<Data_Enemy> = [null, mockBirdman];

globalThis.$dataEnemies = mockEnemies;
globalThis.$gameMap = createFakeMap();

declare global {
  var $dataActors: IdentifiedItems<Data_Actor>;
  var $gameParty: FakeUnit;
  var $gameMap: Partial<FakeMap>;
  var $gameActors: Rmmz_Actors;
}

const makeMockBattler = () => {
  return {
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
  actor: FakeBattler
): Rmmz_ActorsTemplate<FakeBattler> => ({
  _data: [],
  actor: vi.fn(() => actor),
  initialize: vi.fn(),
});

const makeMockParty = (
  battles: FakeBattler[]
): MockedObject<Pick<Rmmz_Unit<FakeBattler>, "members">> => ({
  members: vi.fn(() => battles),
});

const makeMocks = () => {
  const mockBattler = makeMockBattler();
  const mockActors = makeMockActors(mockBattler);
  const mockMap = makeMockMap();
  const mockParty = makeMockParty([mockBattler]);

  return { mockBattler, mockActors, mockMap, mockParty };
};

interface TestCase {
  command: EventCommand;
  key: ActorKeys;
  value: number;
  targetIds: number[];
  xx: (globalThis: typeof global) => void;
}

const makeInterpreter = () => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "operateValue");
  vi.spyOn(interpreter, "iterateActorEx");
  return interpreter;
};

const runCommandTest = ({ command, key, value }: TestCase) => {
  const { mockActors, mockBattler, mockMap, mockParty } = makeMocks();
  globalThis.$gameActors = mockActors as Rmmz_Actors;
  globalThis.$gameMap = mockMap;
  globalThis.$gameParty = mockParty as unknown as FakeUnit;
  const interpreter = makeInterpreter();
  test(key, () => {
    interpreter.setup([command], 0);
    const result = interpreter.executeCommand();
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

    expect(result).toBe(true);
    expect(mockBattler[key]).toBeDefined();
    expect(mockBattler[key]).toHaveBeenCalledWith(value);
  });
};

const testCases: TestCase[] = [
  {
    command: makeCommandGainActorHP({
      allowDeath: false,
      operand: {
        mode: "direct",
        value: 123,
      },
      targetType: "direct",
      target: 1,
    }),
    targetIds: [1],
    key: "gainHp",
    value: 123,
    xx: (g) => {},
  },
];

describe("", () => {
  testCases.forEach(runCommandTest);
});
