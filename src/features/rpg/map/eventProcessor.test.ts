import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeNickName,
  Command_CommonEvent,
  EventCommand,
  MapEventContainer,
} from "@sigureya/rpgtypes";
import {
  createEventContext,
  createCommandContext,
  processEventPages,
  processMapEvents,
  gatherEventCommandContext,
} from "./eventProcessor";

// Mock Data
const mockCommandA: Command_ChangeNickName = {
  code: 324,
  indent: 0,
  parameters: [0, "nickName"],
};
const mockCommandB: Command_CommonEvent = {
  code: 117,
  indent: 1,
  parameters: [39],
};

const mockEvent1 = {
  id: 1,
  pages: [{ list: [mockCommandA] }],
};
const mockEvent2 = {
  id: 2,
  pages: [
    { list: [mockCommandA, mockCommandB] },
    { list: [mockCommandB] },
    { list: [mockCommandA, mockCommandA] },
  ],
};
const mockEvent3 = {
  id: 3,
  pages: [{ list: [mockCommandB] }],
};

const mockMap = Object.freeze<MapEventContainer<EventCommand>>({
  events: [mockEvent1, null, mockEvent2, mockEvent3, null],
});

// Tests
describe("createEventContext", () => {
  test("should create a valid event context", () => {
    const result = createEventContext([mockCommandA], 1, 0);
    expect(result).toEqual({ data: [mockCommandA], eventId: 1, pageIndex: 0 });
  });
});

describe("createCommandContext", () => {
  test("should map event commands to context", () => {
    const result = createCommandContext(mockEvent1.pages[0], 0, mockEvent1);
    expect(result).toEqual([{ data: mockCommandA, eventId: 1, pageIndex: 0 }]);
  });
});

describe("processEventPages", () => {
  test("should process all event pages with a provided function", () => {
    const mockFn = vi.fn((page) => page.list.length);
    const result = processEventPages(mockEvent2, mockFn);

    expect(result).toEqual([2, 1, 2]);
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenCalledWith(mockEvent2.pages[0], 0, mockEvent2);
    expect(mockFn).toHaveBeenCalledWith(mockEvent2.pages[1], 1, mockEvent2);
    expect(mockFn).toHaveBeenCalledWith(mockEvent2.pages[2], 2, mockEvent2);
  });
});

describe("processMapEvents", () => {
  test("should process all events and their pages correctly", () => {
    const mockFn = vi.fn((page) => page.list.length);
    const result = processMapEvents(mockMap, mockFn);

    expect(result).toEqual([[1], [2, 1, 2], [1]]);
    expect(mockFn).toHaveBeenCalledTimes(5); // Total pages processed (1+3+1)
  });
});

describe("gatherEventCommandContext", () => {
  test("should collect all event command contexts", () => {
    const result = gatherEventCommandContext(mockMap);

    expect(result).toHaveLength(7); // Total number of event commands
    expect(result).toContainEqual({
      data: mockCommandA,
      eventId: 1,
      pageIndex: 0,
    });
    expect(result).toContainEqual({
      data: mockCommandB,
      eventId: 3,
      pageIndex: 0,
    });
  });

  test("should correctly track function calls", () => {
    const mockFn = vi.fn(createCommandContext);
    processMapEvents(mockMap, mockFn);

    expect(mockFn).toHaveBeenCalledTimes(5); // Total number of pages processed
  });
});
