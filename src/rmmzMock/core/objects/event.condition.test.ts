import type { MockedObject } from "vitest";
import { afterEach, describe, expect, test, vi } from "vitest";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import type {
  Data_Item,
  MapEventPage,
  MapEvent_PageCondition,
  Provider_RpgItems,
} from "@RpgTypes/rmmz/rpg";
import { makeEventPageCondition } from "@RpgTypes/rmmz/rpg";
import type { MapEvent_SelfSwitchReader } from "@RpgTypes/rmmzFunctional/map/event";
import {
  mapEventFindProperPageIndex,
  mapEventMeetsCondition,
} from "@RpgTypes/rmmzFunctional/map/event";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_BranchSourceParty,
  Rmmz_Switches,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { Game_Event } from "./rmmz_objects";

const MAP_ID = 3;
const EVENT_ID = 7;
const TRUE_SWITCH = 11;
const ACTOR_ID = 2;
const VARIABLE_VALUE = 40;
const ITEM = { id: 5, name: "Potion" } as Data_Item;

/** 条件判定は仲間かどうかしか見ないので、判別できれば足りる */
interface FakeActor {
  actorId: number;
}

const MOCK_ACTOR: FakeActor = { actorId: ACTOR_ID };

/** ページ条件が世界から読む値。コア側と純粋関数側の両方をここから作る */
interface World {
  trueSwitchIds: number[];
  variableValue: number;
  selfSwitchOn: boolean;
  hasItem: boolean;
  inParty: boolean;
}

const DEFAULT_WORLD: World = {
  trueSwitchIds: [TRUE_SWITCH],
  variableValue: VARIABLE_VALUE,
  selfSwitchOn: true,
  hasItem: true,
  inParty: true,
};

const createSwitches = (
  trueSwitchIds: number[],
): MockedObject<Rmmz_Switches> => {
  return {
    value: vi.fn((switchId: number) => trueSwitchIds.includes(switchId)),
    setValue: vi.fn().mockThrow(new Error("setValue should not be called")),
  };
};

const createVariables = (value: number): MockedObject<Rmmz_Variables> => {
  return {
    value: vi.fn(() => value),
    setValue: vi.fn().mockThrow(new Error("setValue should not be called")),
    clear: vi.fn().mockThrow(new Error("clear should not be called")),
    onChange: vi.fn().mockThrow(new Error("onChange should not be called")),
  };
};

const createActors = (
  actor: FakeActor | null,
): MockedObject<Rmmz_ActorsReadonly<FakeActor>> => {
  return {
    actor: vi.fn(() => actor),
  };
};

const createParty = (
  members: FakeActor[],
  hasItem: boolean,
): MockedObject<Rmmz_BranchSourceParty<FakeActor>> => {
  return {
    members: vi.fn(() => members),
    hasItem: vi.fn(() => hasItem),
    gold: vi.fn().mockThrow(new Error("gold should not be called")),
  };
};

const createItemProvider = (): MockedObject<Provider_RpgItems> => {
  return {
    dataItem: vi.fn(() => ITEM),
    dataWeapon: vi.fn().mockThrow(new Error("dataWeapon should not be called")),
    dataArmor: vi.fn().mockThrow(new Error("dataArmor should not be called")),
  };
};

const createSelfSwitch = (
  isOn: boolean,
): MockedObject<MapEvent_SelfSwitchReader> => {
  return vi.fn(() => isOn);
};

interface TestContext {
  itemProvider: MockedObject<Provider_RpgItems>;
  actors: MockedObject<Rmmz_ActorsReadonly<FakeActor>>;
  party: MockedObject<Rmmz_BranchSourceParty<FakeActor>>;
  variables: MockedObject<Rmmz_Variables>;
  switches: MockedObject<Rmmz_Switches>;
  selfSwitch: MockedObject<MapEvent_SelfSwitchReader>;
}

const createTestContext = (world: World): TestContext => {
  return {
    itemProvider: createItemProvider(),
    actors: createActors(world.inParty ? MOCK_ACTOR : null),
    party: createParty(world.inParty ? [MOCK_ACTOR] : [], world.hasItem),
    variables: createVariables(world.variableValue),
    switches: createSwitches(world.trueSwitchIds),
    selfSwitch: createSelfSwitch(world.selfSwitchOn),
  };
};

const meetsCondition = (
  condition: MapEvent_PageCondition,
  context: TestContext,
): boolean => {
  return mapEventMeetsCondition(
    condition,
    context.itemProvider,
    context.actors,
    context.party,
    context.variables,
    context.switches,
    context.selfSwitch,
  );
};

/** 条件だけを持つページ。meetsConditions は conditions しか読まない */
const page = (condition: MapEvent_PageCondition): MapEventPage<EventCommand> =>
  ({ conditions: condition }) as MapEventPage<EventCommand>;

/** Game_Event.meetsConditions が読むグローバルだけを差し替える */
interface FakeGlobals {
  $gameSwitches: Pick<Rmmz_Switches, "value">;
  $gameVariables: Pick<Rmmz_Variables, "value">;
  $gameSelfSwitches: { value(key: [number, number, string]): boolean };
  $gameParty: Pick<Rmmz_BranchSourceParty<FakeActor>, "members" | "hasItem">;
  $gameActors: Rmmz_ActorsReadonly<FakeActor>;
  $dataItems: Record<number, Data_Item>;
}

const GLOBAL_KEYS: (keyof FakeGlobals)[] = [
  "$gameSwitches",
  "$gameVariables",
  "$gameSelfSwitches",
  "$gameParty",
  "$gameActors",
  "$dataItems",
];

const createGlobals = (world: World): FakeGlobals => {
  const members = world.inParty ? [MOCK_ACTOR] : [];
  return {
    $gameSwitches: { value: (id: number) => world.trueSwitchIds.includes(id) },
    $gameVariables: { value: () => world.variableValue },
    $gameSelfSwitches: { value: () => world.selfSwitchOn },
    $gameParty: { members: () => members, hasItem: () => world.hasItem },
    $gameActors: { actor: () => (world.inParty ? MOCK_ACTOR : null) },
    $dataItems: { [ITEM.id]: ITEM },
  };
};

/** コア側。this は _mapId / _eventId しか読まれない */
interface FakeEvent {
  _mapId: number;
  _eventId: number;
  meetsConditions(page: MapEventPage<EventCommand>): boolean;
}

const createCoreEvent = (world: World): FakeEvent => {
  Object.assign(globalThis, createGlobals(world));
  return {
    _mapId: MAP_ID,
    _eventId: EVENT_ID,
    meetsConditions: Game_Event.prototype.meetsConditions,
  };
};

afterEach(() => {
  GLOBAL_KEYS.forEach((key) => {
    delete (globalThis as unknown as Record<string, unknown>)[key];
  });
});

type ConditionKey =
  | "none"
  | "switch1Ok"
  | "switch1Ng"
  | "switch2Ng"
  | "variableOk"
  | "variableNg"
  | "selfSwitch"
  | "item"
  | "actor"
  | "all";

interface ConditionCase {
  key: ConditionKey;
  name: string;
  condition: MapEvent_PageCondition;
}

const conditionCases: ConditionCase[] = [
  { key: "none", name: "条件なし", condition: makeEventPageCondition({}) },
  {
    key: "switch1Ok",
    name: "スイッチ 1 (成立)",
    condition: makeEventPageCondition({ switch1Id: TRUE_SWITCH }),
  },
  {
    key: "switch1Ng",
    name: "スイッチ 1 (不成立)",
    condition: makeEventPageCondition({ switch1Id: 99 }),
  },
  {
    key: "switch2Ng",
    name: "スイッチ 2 (不成立)",
    condition: makeEventPageCondition({ switch2Id: 99 }),
  },
  {
    key: "variableOk",
    name: "変数 (以上で成立)",
    condition: makeEventPageCondition({
      variableId: 1,
      variableValue: VARIABLE_VALUE,
    }),
  },
  {
    key: "variableNg",
    name: "変数 (不足)",
    condition: makeEventPageCondition({
      variableId: 1,
      variableValue: VARIABLE_VALUE + 1,
    }),
  },
  {
    key: "selfSwitch",
    name: "セルフスイッチ A",
    condition: makeEventPageCondition({ selfSwitchCh: "A" }),
  },
  { key: "item", name: "アイテム", condition: makeEventPageCondition({ itemId: ITEM.id }) },
  { key: "actor", name: "アクター", condition: makeEventPageCondition({ actorId: ACTOR_ID }) },
  {
    key: "all",
    name: "全部",
    condition: makeEventPageCondition({
      switch1Id: TRUE_SWITCH,
      variableId: 1,
      variableValue: VARIABLE_VALUE,
      selfSwitchCh: "B",
      itemId: ITEM.id,
      actorId: ACTOR_ID,
    }),
  },
];

interface WorldCase {
  name: string;
  world: World;
  expected: Record<ConditionKey, boolean>;
}

/** 条件を 1 つも満たさない世界でも成立するもの (条件が無い / 不足しない変数) */
const ALWAYS_TRUE = {
  none: true,
  switch1Ng: false,
  switch2Ng: false,
  variableOk: true,
  variableNg: false,
} as const;

const worldCases: WorldCase[] = [
  {
    name: "全部そろっている",
    world: DEFAULT_WORLD,
    expected: {
      ...ALWAYS_TRUE,
      switch1Ok: true,
      selfSwitch: true,
      item: true,
      actor: true,
      all: true,
    },
  },
  {
    name: "セルフスイッチが立っていない",
    world: { ...DEFAULT_WORLD, selfSwitchOn: false },
    expected: {
      ...ALWAYS_TRUE,
      switch1Ok: true,
      selfSwitch: false,
      item: true,
      actor: true,
      all: false,
    },
  },
  {
    name: "アイテムを持っていない",
    world: { ...DEFAULT_WORLD, hasItem: false },
    expected: {
      ...ALWAYS_TRUE,
      switch1Ok: true,
      selfSwitch: true,
      item: false,
      actor: true,
      all: false,
    },
  },
  {
    name: "アクターが仲間にいない",
    world: { ...DEFAULT_WORLD, inParty: false },
    expected: {
      ...ALWAYS_TRUE,
      switch1Ok: true,
      selfSwitch: true,
      item: true,
      actor: false,
      all: false,
    },
  },
  {
    name: "スイッチが全部オフ",
    world: { ...DEFAULT_WORLD, trueSwitchIds: [] },
    expected: {
      ...ALWAYS_TRUE,
      switch1Ok: false,
      selfSwitch: true,
      item: true,
      actor: true,
      all: false,
    },
  },
];

const runTestCase = ({ name, world, expected }: WorldCase): void => {
  describe(name, () => {
    describe("function", () => {
      conditionCases.forEach((conditionCase) => {
        test(conditionCase.name, () => {
          const result: boolean = meetsCondition(
            conditionCase.condition,
            createTestContext(world),
          );
          expect(result).toBe(expected[conditionCase.key]);
        });
      });
    });

    describe("Event", () => {
      conditionCases.forEach((conditionCase) => {
        test(conditionCase.name, () => {
          const result: boolean = createCoreEvent(world).meetsConditions(
            page(conditionCase.condition),
          );
          expect(result).toBe(expected[conditionCase.key]);
        });
      });
    });
  });
};

worldCases.forEach(runTestCase);

describe("条件に無いものは読まない", () => {
  test("条件なしなら何も引かない", () => {
    const context = createTestContext(DEFAULT_WORLD);
    meetsCondition(makeEventPageCondition({}), context);
    expect(context.switches.value).not.toHaveBeenCalled();
    expect(context.variables.value).not.toHaveBeenCalled();
    expect(context.selfSwitch).not.toHaveBeenCalled();
    expect(context.itemProvider.dataItem).not.toHaveBeenCalled();
    expect(context.actors.actor).not.toHaveBeenCalled();
  });

  test("セルフスイッチの条件では文字だけを渡す", () => {
    const context = createTestContext(DEFAULT_WORLD);
    meetsCondition(makeEventPageCondition({ selfSwitchCh: "C" }), context);
    expect(context.selfSwitch).toHaveBeenCalledOnce();
    expect(context.selfSwitch).toHaveBeenCalledWith("C");
  });

  test("不成立が決まった時点で残りを読まない", () => {
    const context = createTestContext({ ...DEFAULT_WORLD, trueSwitchIds: [] });
    const condition = makeEventPageCondition({
      switch1Id: 99,
      selfSwitchCh: "A",
      itemId: ITEM.id,
      actorId: ACTOR_ID,
    });
    expect(meetsCondition(condition, context)).toBe(false);
    expect(context.selfSwitch).not.toHaveBeenCalled();
    expect(context.itemProvider.dataItem).not.toHaveBeenCalled();
    expect(context.actors.actor).not.toHaveBeenCalled();
  });
});

describe("mapEventFindProperPageIndex", () => {
  const findIndex = (
    pages: MapEventPage<EventCommand>[],
    context: TestContext,
  ): number => {
    return mapEventFindProperPageIndex(
      pages,
      context.itemProvider,
      context.actors,
      context.party,
      context.variables,
      context.switches,
      context.selfSwitch,
    );
  };

  const pages: MapEventPage<EventCommand>[] = [
    page(makeEventPageCondition({})),
    page(makeEventPageCondition({ switch1Id: TRUE_SWITCH })),
    page(makeEventPageCondition({ switch1Id: 99 })),
  ];

  test("後ろから探して最初に成立したページを返す", () => {
    const result = findIndex(pages, createTestContext(DEFAULT_WORLD));
    expect(result).toBe(1);
  });

  test("どれも成立しなければ -1", () => {
    const context = createTestContext({ ...DEFAULT_WORLD, trueSwitchIds: [] });
    const result = findIndex([pages[2]], context);
    expect(result).toBe(-1);
  });

  test("ページが無ければ -1", () => {
    const result = findIndex([], createTestContext(DEFAULT_WORLD));
    expect(result).toBe(-1);
  });
});
