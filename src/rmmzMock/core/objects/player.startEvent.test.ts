import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { Game_Player, Game_Map } from "./rmmz_objects";
import type { Rmmz_Event, Rmmz_MapEventContainer } from "@RpgTypes/rmmzRuntime";
import { startMapEvent } from "@RpgTypes/rmmzFunctional/map/event";

describe("player.startEvent - isEventRunning => true", () => {
  test("Game_Player", () => {
    const fakeMap: MockedGameMap = {
      events: vi.fn().mockThrow(new Error("not implemented")),
      eventsXy: vi.fn().mockThrow(new Error("not implemented")),
      isEventRunning: vi.fn().mockReturnValue(true),
    };
    vi.stubGlobal("$gameMap", fakeMap);
    Game_Player.prototype.startMapEvent.call(null, 0, 0, [1], true);
    expect(fakeMap.isEventRunning).toHaveBeenCalledOnce();
    expect(fakeMap.events).not.toHaveBeenCalled();
    expect(fakeMap.eventsXy).not.toHaveBeenCalled();
  });

  test("function", () => {
    const fakeMap: MockedGameMap = {
      events: vi.fn().mockThrow(new Error("not implemented")),
      eventsXy: vi.fn().mockThrow(new Error("not implemented")),
      isEventRunning: vi.fn().mockReturnValue(true),
    };
    startMapEvent(fakeMap, 0, 0, [1], true);
    expect(fakeMap.isEventRunning).toHaveBeenCalledOnce();
    expect(fakeMap.events).not.toHaveBeenCalled();
    expect(fakeMap.eventsXy).not.toHaveBeenCalled();
  });
});

type MockedEventLike = Pick<
  Rmmz_Event,
  "start" | "pos" | "isTriggerIn" | "isNormalPriority"
>;
type GameMapLike = Pick<
  Rmmz_MapEventContainer<MockedEventLike>,
  "isEventRunning" | "events" | "eventsXy"
>;
type MockedGameMap = MockedObject<GameMapLike>;
type MockedEvent = MockedObject<MockedEventLike>;

const createMockMap = (
  events: MockedObject<MockedEventLike>[] = [],
): MockedGameMap => {
  const baseMap = {
    isEventRunning: vi.fn().mockReturnValue(false),
    events: vi.fn().mockReturnValue(events),
  };
  return {
    isEventRunning: baseMap.isEventRunning,
    events: baseMap.events,
    eventsXy: vi.fn((x, y) => {
      return Game_Map.prototype.eventsXy.call(baseMap, x, y);
    }),
  };
};

type EventCondition = Record<Exclude<keyof MockedEventLike, "start">, boolean>;

const createMockEvent = (arg: EventCondition): MockedEvent => {
  return {
    isNormalPriority: vi.fn().mockReturnValue(arg.isNormalPriority),
    isTriggerIn: vi.fn().mockReturnValue(arg.isTriggerIn),
    pos: vi.fn().mockReturnValue(arg.pos),
    start: vi.fn(),
  };
};

interface EventPair {
  event1: MockedObject<MockedEventLike>;
  event2: MockedObject<MockedEventLike>;
}

interface StartEventTestCase {
  caseName: string;
  params: {
    triggers: ReadonlyArray<number>;
    normalPriority: boolean;
  };
  eventSrc: {
    event1: EventCondition;
    event2: EventCondition;
  };
  contextTest(events: EventPair): void;
}

const expectEventPositionCalls = (
  x: number,
  y: number,
  events: ReadonlyArray<MockedEvent>,
) => {
  events.forEach((event) => {
    expect(event.pos).toHaveBeenCalledWith(x, y);
    expect(event.pos).toHaveBeenCalledOnce();
  });
};

const MOCK_X = 315;
const MOCK_Y = 231;

const runTestCase = (testCase: StartEventTestCase) => {
  describe(testCase.caseName, () => {
    test("call", () => {
      const event1 = createMockEvent(testCase.eventSrc.event1);
      const event2 = createMockEvent(testCase.eventSrc.event2);
      const eventList = [event1, event2];
      const { normalPriority, triggers } = testCase.params;

      const fakeMap = createMockMap(eventList);
      startMapEvent(fakeMap, MOCK_X, MOCK_Y, triggers, normalPriority);
      expect(fakeMap.isEventRunning).toHaveBeenCalledOnce();
      expect(fakeMap.events).toHaveBeenCalledOnce();
      expect(fakeMap.eventsXy).not.toHaveBeenCalled();
      testCase.contextTest({ event1, event2 });
    });

    test("game_player", () => {
      const x = MOCK_X;
      const y = MOCK_Y;
      const event1 = createMockEvent(testCase.eventSrc.event1);
      const event2 = createMockEvent(testCase.eventSrc.event2);
      const eventList = [event1, event2];
      const { normalPriority, triggers } = testCase.params;
      const mockedMap = createMockMap(eventList);
      vi.stubGlobal("$gameMap", mockedMap);
      Game_Player.prototype.startMapEvent.call(
        null,
        x,
        y,
        triggers,
        normalPriority,
      );
      expect(mockedMap.isEventRunning).toHaveBeenCalledOnce();
      expect(mockedMap.events).toHaveBeenCalledOnce();
      expect(mockedMap.eventsXy).toHaveBeenCalledOnce();
      expectEventPositionCalls(x, y, eventList);
      testCase.contextTest({ event1, event2 });
    });
  });
};

const startEventTestCases: StartEventTestCase[] = [
  {
    caseName: "all true",
    eventSrc: {
      event1: { isNormalPriority: true, isTriggerIn: true, pos: true },
      event2: { isNormalPriority: true, isTriggerIn: true, pos: true },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).toHaveBeenCalledOnce();
      expect(events.event2.start).toHaveBeenCalledOnce();
      expect(events.event1.pos).toHaveBeenCalledWith(MOCK_X, MOCK_Y);
      expect(events.event2.pos).toHaveBeenCalledWith(MOCK_X, MOCK_Y);
    },
  },
  {
    caseName: "all false",
    eventSrc: {
      event1: { isNormalPriority: false, isTriggerIn: false, pos: false },
      event2: { isNormalPriority: false, isTriggerIn: false, pos: false },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).not.toHaveBeenCalled();
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "event1 true, event2 false",
    eventSrc: {
      event1: { isNormalPriority: true, isTriggerIn: true, pos: true },
      event2: { isNormalPriority: false, isTriggerIn: false, pos: false },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).toHaveBeenCalledOnce();
      expect(events.event1.pos).toHaveBeenCalledWith(MOCK_X, MOCK_Y);
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "event1 false, event2 true",
    eventSrc: {
      event1: { isNormalPriority: false, isTriggerIn: false, pos: false },
      event2: { isNormalPriority: true, isTriggerIn: true, pos: true },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).not.toHaveBeenCalled();
      expect(events.event2.start).toHaveBeenCalledOnce();
      expect(events.event2.pos).toHaveBeenCalledWith(MOCK_X, MOCK_Y);
    },
  },
  {
    caseName: "normalPriority false ,arg normalPriority false",
    eventSrc: {
      event1: { isNormalPriority: true, isTriggerIn: true, pos: true },
      event2: { isNormalPriority: true, isTriggerIn: true, pos: true },
    },
    params: { triggers: [], normalPriority: false },
    contextTest: (events) => {
      expect(events.event1.start).not.toHaveBeenCalled();
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },

  {
    caseName: "normalPriority false ,arg normalPriority true",
    eventSrc: {
      event1: { isNormalPriority: false, isTriggerIn: true, pos: true },
      event2: { isNormalPriority: false, isTriggerIn: true, pos: true },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).not.toHaveBeenCalled();
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "triggers false",
    eventSrc: {
      event1: { isNormalPriority: true, isTriggerIn: false, pos: true },
      event2: { isNormalPriority: true, isTriggerIn: false, pos: true },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).not.toHaveBeenCalled();
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "pos false",
    eventSrc: {
      event1: { isNormalPriority: true, isTriggerIn: true, pos: false },
      event2: { isNormalPriority: true, isTriggerIn: true, pos: false },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).not.toHaveBeenCalled();
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },
];

describe("player.startEvent - isEventRunning => false", () => {
  startEventTestCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
