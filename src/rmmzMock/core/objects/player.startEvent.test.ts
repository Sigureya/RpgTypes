import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { Game_Player, Game_Map } from "./rmmz_objects";
import type { Rmmz_Event, Rmmz_MapEventContainer } from "@RpgTypes/rmmzRuntime";
import { startMapEvent } from "@RpgTypes/rmmzFunctional/map/event";

describe("player.startEvent - isEventRunting => true", () => {
  test("Game_Player", () => {
    const fakeMap: MockedMap = {
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
    const fakeMap: MockedMap = {
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

type FakeEvent = Pick<
  Rmmz_Event,
  "start" | "pos" | "isTriggerIn" | "isNormalPriority"
>;
type FakeMap = Pick<
  Rmmz_MapEventContainer<FakeEvent>,
  "isEventRunning" | "events" | "eventsXy"
>;
type MockedMap = MockedObject<FakeMap>;
type MockedEvent = MockedObject<FakeEvent>;

const createMockedMap = (events: MockedObject<FakeEvent>[] = []): MockedMap => {
  const bb = {
    isEventRunning: vi.fn().mockReturnValue(false),
    events: vi.fn().mockReturnValue(events),
  };
  return {
    isEventRunning: bb.isEventRunning,
    events: bb.events,
    eventsXy: vi.fn((x, y) => {
      return Game_Map.prototype.eventsXy.call(bb, x, y);
    }),
  };
};

type EventArg = Record<Exclude<keyof FakeEvent, "start">, boolean>;
const createMockedEvent = (arg: EventArg): MockedEvent => {
  return {
    isNormalPriority: vi.fn().mockReturnValue(arg.isNormalPriority),
    isTriggerIn: vi.fn().mockReturnValue(arg.isTriggerIn),
    pos: vi.fn().mockReturnValue(arg.pos),
    start: vi.fn(),
  };
};

interface GGG {
  event1: MockedObject<FakeEvent>;
  event2: MockedObject<FakeEvent>;
}

interface TestCase {
  params: {
    triggers: ReadonlyArray<number>;
    normalPriority: boolean;
  };
  eventSrc: {
    event1: EventArg;
    event2: EventArg;
  };
  contextTest(events: GGG, map: MockedMap): void;
}

const xyxy = (x: number, y: number, events: ReadonlyArray<MockedEvent>) => {
  events.forEach((event) => {
    expect(event.pos).toHaveBeenCalledWith(x, y);
    expect(event.pos).toHaveBeenCalledOnce();
  });
};

const runTestCase = (testCase: TestCase) => {
  describe("", () => {
    test("call", () => {
      const x = 315;
      const y = 231;
      const event1 = createMockedEvent(testCase.eventSrc.event1);
      const event2 = createMockedEvent(testCase.eventSrc.event2);
      const eventList = [event1, event2];
      const { normalPriority, triggers } = testCase.params;

      const fakeMap = createMockedMap(eventList);
      startMapEvent(fakeMap, x, y, triggers, normalPriority);
      expect(fakeMap.isEventRunning).toHaveBeenCalledOnce();
      expect(fakeMap.events).toHaveBeenCalledOnce();
      expect(fakeMap.eventsXy).not.toHaveBeenCalled();
      xyxy(x, y, eventList);
      testCase.contextTest({ event1, event2 }, fakeMap);
    });
    test("game_player", () => {
      const x = 217;
      const y = 235;
      const event1 = createMockedEvent(testCase.eventSrc.event1);
      const event2 = createMockedEvent(testCase.eventSrc.event2);
      const eventList = [event1, event2];
      const { normalPriority, triggers } = testCase.params;
      const mockedMap = createMockedMap(eventList);
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
      xyxy(x, y, eventList);
      testCase.contextTest({ event1, event2 }, mockedMap);
    });
  });
};

const testCases: TestCase[] = [
  {
    eventSrc: {
      event1: { isNormalPriority: true, isTriggerIn: true, pos: true },
      event2: { isNormalPriority: true, isTriggerIn: true, pos: false },
    },
    params: { triggers: [], normalPriority: true },
    contextTest: (events) => {
      expect(events.event1.start).toHaveBeenCalledOnce();
      expect(events.event2.start).not.toHaveBeenCalled();
    },
  },
];

testCases.forEach((testCase) => {
  runTestCase(testCase);
});
