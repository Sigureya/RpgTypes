import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromGameData } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromActorCurrentLevel,
  makeCommandVariableFromArmor,
  makeCommandVariableFromEnemyCurrentHp,
  makeCommandVariableFromItemData,
  makeCommandVariableFromLastUsedItemId,
  makeCommandVariableFromMapCharactorX,
  makeCommandVariableFromMapId,
  makeCommandVariableFromPartyAt,
  makeCommandVariableFromSystemPlayTime,
  makeCommandVariableFromWeapon,
  makeCommandVariableFromLastEnemyIndex,
  makeCommandVariableFromLastTargetActorId,
  makeCommandVariableFromLastTargetEnemyIndex,
  makeCommandVariableFromLastUsedSkillId,
  makeCommandVariableDataLastActorId,
  LAST_DATA_TARGET_ENEMY_INDEX,
  LAST_DATA_LAST_ACTOR_ID,
  LAST_DATA_LAST_ENEMY_INDEX,
  LAST_DATA_LAST_TARGET_ACTOR_ID,
  LAST_DATA_LAST_USED_ITEM_ID,
  LAST_DATA_LAST_USED_SKILL_ID,
} from "@RpgTypes/rmmz/eventCommand";
import { variableFromCommand } from "@RpgTypes/rmmzFunctional";
import type {
  Rmmz_VariableSourceEnemy,
  Rmmz_VariableSourceProvider,
} from "@RpgTypes/rmmzFunctional/interpreter/command/variable/types";
import type {
  Rmmz_Variables,
  Rmmz_MapId,
  Rmmz_VariableSourceParty,
  Rmmz_SystemCounter,
  Rmmz_Timer,
  Rmmz_Temp,
  Rmmz_Interpreter,
} from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";
import type { Data_Armor, Data_Item, Data_Weapon } from "@RpgTypes/rmmz/rpg";
import {
  makeArmorData,
  makeItemData,
  makeWeaponData,
} from "@RpgTypes/rmmz/rpg";

const MOCK_ACTOR_LEVEL = 31;
const MOCK_ACTOR_EXP = 4567;
const MOCK_ACTOR_HP = 800;
const MOCK_ACTOR_MP = 250;
const MOCK_ACTOR_TP = 45;
const MOCK_ACTOR_PARAM_BASE = 200;
const MOCK_ENEMY_HP = 700;
const MOCK_ENEMY_MP = 140;
const MOCK_ENEMY_TP = 60;
const MOCK_ENEMY_PARAM_BASE = 200;
const MOCK_FALLBACK = 777;
const MOCK_START_ID = 91;
const MOCK_ENEMY_INDEX = 2;
const MOCK_MAP_ID = 5;
const MOCK_MAP_X = 12;
const MOCK_MAP_Y = 21;
const MOCK_CHARACTER_ID = 8;
const MOCK_PARTY_MEMBER_ID = 7;
const MOCK_PARTY_SIZE = 4;
const MOCK_ITEM_COUNT = 9;
const MOCK_ITEM_ID = 151;
const MOCK_WEAPON_ID = 251;
const MOCK_ARMOR_ID = 386;

const MOCK_SYSTEM_BATTLE_COUNT = 1024;
const MOCK_SYSTEM_WIN_COUNT = 512;
const MOCK_SYSTEM_ESCAPE_COUNT = 256;
const MOCK_SYSTEM_SAVE_COUNT = 128;
const MOCK_SYSTEM_PLAYTIME = 64;

const MOCK_TEMP_LAST_ACTION_DATA = 321;

const MOCK_ITEM: Data_Item = makeItemData({
  name: "mockItem",
  id: MOCK_ITEM_ID,
});
const MOCK_WEAPON: Data_Weapon = makeWeaponData({
  name: "mockWeapon",
  id: MOCK_WEAPON_ID,
});
const MOCK_ARMOR: Data_Armor = makeArmorData({
  name: "mockArmor",
  id: MOCK_ARMOR_ID,
});

const createMockActor = (): MockedObject<{
  level: number;
  currentExp: () => number;
  hp: number;
  mp: number;
  tp: number;
  param: (paramId: number) => number;
}> => {
  return {
    level: MOCK_ACTOR_LEVEL,
    currentExp: vi.fn(() => MOCK_ACTOR_EXP),
    hp: MOCK_ACTOR_HP,
    mp: MOCK_ACTOR_MP,
    tp: MOCK_ACTOR_TP,
    param: vi.fn((paramId: number) => MOCK_ACTOR_PARAM_BASE + paramId),
  };
};

const createMockEnemy = (): MockedObject<Rmmz_VariableSourceEnemy> => {
  return {
    hp: MOCK_ENEMY_HP,
    mp: MOCK_ENEMY_MP,
    tp: MOCK_ENEMY_TP,
    param: vi.fn((paramId: number) => MOCK_ENEMY_PARAM_BASE + paramId),
  };
};

const createMockCharacter = (): MockedObject<{
  x: number;
  y: number;
  direction: () => number;
  screenX: () => number;
  screenY: () => number;
}> => ({
  x: MOCK_MAP_X,
  y: MOCK_MAP_Y,
  direction: vi.fn(() => 2),
  screenX: vi.fn(() => 40),
  screenY: vi.fn(() => 50),
});

const createMockProvider = (
  actor: ReturnType<typeof createMockActor> | null,
  enemy: Rmmz_VariableSourceEnemy | null,
  character: ReturnType<typeof createMockCharacter> | null,
): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    character: vi.fn(() => character),
    gameActor: vi.fn(() => actor),
    gameEnemy: vi.fn(() => enemy),
    random: vi.fn(() => 0),
    dataArmor: vi.fn(() => MOCK_ARMOR),
    dataItem: vi.fn(() => MOCK_ITEM),
    dataWeapon: vi.fn(() => MOCK_WEAPON),
  };
};

const createMockVariebles = (): MockedObject<Rmmz_Variables> => {
  return {
    value: vi.fn(() => 0),
    clear: vi.fn(),
    setValue: vi.fn(),
    onChange: vi.fn(),
  };
};

const createMockMap = (): MockedObject<Rmmz_MapId> => {
  return {
    mapId: vi.fn(() => MOCK_MAP_ID),
  };
};

const createMockParty = (): MockedObject<Rmmz_VariableSourceParty> => {
  return {
    gold: vi.fn(() => 0),
    steps: vi.fn(() => 0),
    numItems: vi.fn(() => MOCK_ITEM_COUNT),
    size: vi.fn(() => MOCK_PARTY_SIZE),
    members: vi.fn(() => [{ actorId: () => MOCK_PARTY_MEMBER_ID }]),
  };
};

const createMockSystem = (): MockedObject<Rmmz_SystemCounter> => {
  return {
    battleCount: vi.fn(() => MOCK_SYSTEM_BATTLE_COUNT),
    winCount: vi.fn(() => MOCK_SYSTEM_WIN_COUNT),
    escapeCount: vi.fn(() => MOCK_SYSTEM_ESCAPE_COUNT),
    saveCount: vi.fn(() => MOCK_SYSTEM_SAVE_COUNT),
    playtime: vi.fn(() => MOCK_SYSTEM_PLAYTIME),
  };
};

const createMockTimer = (): MockedObject<Rmmz_Timer> => {
  return {
    start: vi.fn(),
    stop: vi.fn(),
    isWorking: vi.fn(() => false),
    seconds: vi.fn(() => 0),
    frames: vi.fn(() => 0),
  };
};

const createMockTemp = (): MockedObject<Rmmz_Temp> => {
  return {
    lastActionData: vi.fn(() => MOCK_TEMP_LAST_ACTION_DATA),
  };
};

const createContext = (): TestContext => {
  const actor = createMockActor();
  const enemy = createMockEnemy();
  const character = createMockCharacter();

  return {
    actor,
    enemy,
    character,
    provider: createMockProvider(actor, enemy, character),
    variables: createMockVariebles(),
    map: createMockMap(),
    party: createMockParty(),
    system: createMockSystem(),
    timer: createMockTimer(),
    temp: createMockTemp(),
  };
};

type FakeInterpreter = Pick<Rmmz_Interpreter, "character">;

interface TestContext {
  actor: MockedObject<{
    level: number;
    currentExp: () => number;
    hp: number;
    mp: number;
    tp: number;
    param: (paramId: number) => number;
  }>;
  enemy: MockedObject<Rmmz_VariableSourceEnemy>;
  character: MockedObject<{
    x: number;
    y: number;
    direction: () => number;
    screenX: () => number;
    screenY: () => number;
  }>;
  temp: MockedObject<Rmmz_Temp>;
  map: MockedObject<Rmmz_MapId>;
  party: MockedObject<Rmmz_VariableSourceParty>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
  variables: MockedObject<Rmmz_Variables>;
  provider: MockedObject<Rmmz_VariableSourceProvider>;
}

interface TestCase {
  name: string;
  expected: number;
  command: Command_ControlVariables_FromGameData;
  contextTest: (objects: TestContext) => void;
}

const stubGameDataGlobals = (context: TestContext) => {
  vi.stubGlobal("$gameActors", {
    actor: vi.fn((id: number) => context.provider.gameActor(id)),
  });
  const troopMembers = Array.from(
    { length: MOCK_ENEMY_INDEX + 1 },
    (_, index) => (index === MOCK_ENEMY_INDEX ? context.enemy : null),
  );
  vi.stubGlobal("$gameTroop", {
    members: vi.fn(() => troopMembers),
  });
  vi.stubGlobal("$gameTemp", context.temp);
  vi.stubGlobal("$gameMap", context.map);
  vi.stubGlobal("$gameParty", context.party);
  vi.stubGlobal("$gameSystem", context.system);
  vi.stubGlobal("$gameTimer", context.timer);
  vi.stubGlobal("$gameVariables", context.variables);
  vi.stubGlobal("$dataItems", [null, MOCK_ITEM]);
  vi.stubGlobal("$dataWeapons", [null, null, MOCK_WEAPON]);
  vi.stubGlobal("$dataArmors", [null, null, MOCK_ARMOR]);
};

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    test("variableFromCommand", () => {
      const context = createContext();
      const result = variableFromCommand(
        testCase.command,
        context.provider,
        context.variables,
        context.temp,
        context.map,
        context.party,
        context.system,
        context.timer,
        MOCK_FALLBACK,
      );
      expect(result).toBe(testCase.expected);
      testCase.contextTest(context);
    });

    test("Game_Interpreter.prototype.gameDataOperand", () => {
      const context = createContext();
      const mockedInterpreter: MockedObject<FakeInterpreter> = {
        character: vi.fn((id) => context.provider.character(id)),
      };
      stubGameDataGlobals(context);
      const result = Game_Interpreter.prototype.gameDataOperand.call(
        mockedInterpreter,
        testCase.command.parameters[4],
        testCase.command.parameters[5] as number,
        testCase.command.parameters[6] as number,
      );
      expect(result).toBe(testCase.expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "MapId",
    command: makeCommandVariableFromMapId({ startId: MOCK_START_ID }),
    expected: MOCK_MAP_ID,
    contextTest: (context) => {
      expect(context.map.mapId).toHaveBeenCalledOnce();
    },
  },
  {
    name: "ItemCount",
    command: makeCommandVariableFromItemData({
      variableId: MOCK_START_ID,
      itemId: MOCK_ITEM_ID,
    }),
    expected: MOCK_ITEM_COUNT,
    contextTest: (context) => {
      // expect(context.provider.dataItem).toHaveBeenCalledOnce();
      // expect(context.provider.dataItem).toHaveBeenCalledWith(MOCK_ITEM_ID);
      expect(context.party.numItems).toHaveBeenCalledOnce();
    },
  },
  {
    name: "WeaponCount",
    command: makeCommandVariableFromWeapon({
      startId: MOCK_START_ID,
      weaponId: MOCK_WEAPON_ID,
    }),
    expected: MOCK_ITEM_COUNT,
    contextTest: (context) => {
      //      expect(context.provider.dataWeapon).toHaveBeenCalledOnce();
      //      expect(context.provider.dataWeapon).toHaveBeenCalledWith(MOCK_WEAPON_ID);
      expect(context.party.numItems).toHaveBeenCalledOnce();
    },
  },
  {
    name: "ArmorCount",
    command: makeCommandVariableFromArmor({
      startId: MOCK_START_ID,
      armorId: MOCK_ARMOR_ID,
    }),
    expected: MOCK_ITEM_COUNT,
    contextTest: (context) => {
      // expect(context.provider.dataArmor).toHaveBeenCalledOnce();
      // expect(context.provider.dataArmor).toHaveBeenCalledWith(MOCK_ARMOR_ID);
      expect(context.party.numItems).toHaveBeenCalledOnce();
    },
  },
  {
    name: "ActorCurrentLevel",
    command: makeCommandVariableFromActorCurrentLevel({
      startId: MOCK_START_ID,
      actorId: MOCK_PARTY_MEMBER_ID,
    }),
    expected: MOCK_ACTOR_LEVEL,
    contextTest: (context) => {
      expect(context.provider.gameActor).toHaveBeenCalledOnce();
      expect(context.provider.gameActor).toHaveBeenCalledWith(
        MOCK_PARTY_MEMBER_ID,
      );
    },
  },
  {
    name: "EnemyCurrentHp",
    command: makeCommandVariableFromEnemyCurrentHp({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    expected: MOCK_ENEMY_HP,
    contextTest: (context) => {
      expect(context.provider.gameEnemy).toHaveBeenCalledOnce();
      expect(context.provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
    },
  },
  {
    name: "MapCharactorX",
    command: makeCommandVariableFromMapCharactorX({
      startId: MOCK_START_ID,
      charactorId: MOCK_CHARACTER_ID,
    }),
    expected: MOCK_MAP_X,
    contextTest: (context) => {
      expect(context.provider.character).toHaveBeenCalledOnce();
      expect(context.provider.character).toHaveBeenCalledWith(
        MOCK_CHARACTER_ID,
      );
    },
  },
  {
    name: "PartyAt",
    command: makeCommandVariableFromPartyAt({
      variableId: MOCK_START_ID,
      memberIndex: 0,
    }),
    expected: MOCK_PARTY_MEMBER_ID,
    contextTest: (context) => {
      expect(context.party.members).toHaveBeenCalledOnce();
      expect(context.party.size).not.toHaveBeenCalled();
    },
  },
  {
    name: "SystemPlayTime",
    command: makeCommandVariableFromSystemPlayTime({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_SYSTEM_PLAYTIME,
    contextTest: (context) => {
      expect(context.system.playtime).toHaveBeenCalledOnce();
    },
  },
  {
    name: "LastUsedItemId",
    command: makeCommandVariableFromLastUsedItemId({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_TEMP_LAST_ACTION_DATA,
    contextTest: (context) => {
      expect(context.temp.lastActionData).toHaveBeenCalledOnce();
      expect(context.temp.lastActionData).toHaveBeenCalledWith(
        LAST_DATA_LAST_USED_ITEM_ID,
      );
    },
  },
  {
    name: "LastTargetActorId",
    command: makeCommandVariableFromLastTargetActorId({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_TEMP_LAST_ACTION_DATA,
    contextTest: (context) => {
      expect(context.temp.lastActionData).toHaveBeenCalledOnce();
      expect(context.temp.lastActionData).toHaveBeenCalledWith(
        LAST_DATA_LAST_TARGET_ACTOR_ID,
      );
    },
  },
  {
    name: "LastTargetEnemyIndex",
    command: makeCommandVariableFromLastTargetEnemyIndex({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_TEMP_LAST_ACTION_DATA,
    contextTest: (context) => {
      expect(context.temp.lastActionData).toHaveBeenCalledOnce();
      expect(context.temp.lastActionData).toHaveBeenCalledWith(
        LAST_DATA_TARGET_ENEMY_INDEX,
      );
    },
  },
  {
    name: "LastUsedSkillId",
    command: makeCommandVariableFromLastUsedSkillId({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_TEMP_LAST_ACTION_DATA,
    contextTest: (context) => {
      expect(context.temp.lastActionData).toHaveBeenCalledOnce();
      expect(context.temp.lastActionData).toHaveBeenCalledWith(
        LAST_DATA_LAST_USED_SKILL_ID,
      );
    },
  },
  {
    name: "LastEnemyIndex",
    command: makeCommandVariableFromLastEnemyIndex({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_TEMP_LAST_ACTION_DATA,
    contextTest: (context) => {
      expect(context.temp.lastActionData).toHaveBeenCalledOnce();
      expect(context.temp.lastActionData).toHaveBeenCalledWith(
        LAST_DATA_LAST_ENEMY_INDEX,
      );
    },
  },
  {
    name: "LastActorId",
    command: makeCommandVariableDataLastActorId({
      startId: MOCK_START_ID,
    }),
    expected: MOCK_TEMP_LAST_ACTION_DATA,
    contextTest: (context) => {
      expect(context.temp.lastActionData).toHaveBeenCalledOnce();
      expect(context.temp.lastActionData).toHaveBeenCalledWith(
        LAST_DATA_LAST_ACTOR_ID,
      );
    },
  },
];

describe("variableFromCommand - GameData", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
