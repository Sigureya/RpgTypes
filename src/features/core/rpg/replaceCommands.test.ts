import { describe, expect, test } from "vitest";
import type {
  Data_CommonEvent,
  EventCommand,
  EventCommand2,
  ExtractCommandByParam,
  MapEventContainer,
} from "@RpgTypes/rmmz";
import type { CommandContainer } from "./map";
import {
  replaceEventCommands,
  replacePages,
  replaceMapEvents,
  replaceCommonEvents,
} from "./replaceCommands";
import type { ReplaceableEventPage } from "./types";

// Helper function to create a mock EventCommand
const createMockCommand = (
  code: ExtractCommandByParam<[]>["code"]
): ExtractCommandByParam<[]> => ({
  code,
  indent: 0,
  parameters: [],
});

// Simple transformation function: increments command code
const mockTransform = (
  commands: ReadonlyArray<EventCommand2>
): EventCommand2[] =>
  commands.map((cmd) => ({
    ...cmd,
    indent: 8,
  }));

describe("replaceEventCommands", () => {
  test("should replace commands using the provided function", () => {
    const event = {
      list: [createMockCommand(221), createMockCommand(217)],
    } as const satisfies CommandContainer<EventCommand2>;
    const result = replaceEventCommands(event, mockTransform);

    const expected: EventCommand2[] = [
      { code: 221, indent: 8, parameters: [] },
      { code: 217, indent: 8, parameters: [] },
    ];

    expect(result.list).toEqual(expected);
  });

  test("should return a new object with modified list", () => {
    const event = {
      list: [createMockCommand(251)],
    } as const satisfies CommandContainer<EventCommand2>;
    const result = replaceEventCommands(event, mockTransform);

    expect(result).not.toBe(event);
    expect(result.list).not.toBe(event.list);
  });
});

describe("replacePages", () => {
  test("should replace commands across multiple pages", () => {
    const container = {
      id: 0,
      pages: [
        { list: [createMockCommand(113)] },
        { list: [createMockCommand(115)] },
      ],
    } as const satisfies ReplaceableEventPage;
    const result = replacePages(container, mockTransform);
    const expected: ReplaceableEventPage = {
      id: 0,
      pages: [
        { list: [{ code: 113, indent: 8, parameters: [] }] },
        { list: [{ code: 115, indent: 8, parameters: [] }] },
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("replaceMapEvents", () => {
  test("should replace commands for all map events", () => {
    const map: MapEventContainer<EventCommand2> = {
      events: [
        { id: 2, pages: [{ list: [createMockCommand(353)] }] },
        null,
        { id: 5, pages: [{ list: [createMockCommand(109)] }] },
      ],
    };
    const result: MapEventContainer<EventCommand2> = replaceMapEvents(
      map,
      mockTransform
    );

    const expected: MapEventContainer<EventCommand2> = {
      events: [
        {
          id: 2,
          pages: [{ list: [{ code: 353, indent: 8, parameters: [] }] }],
        },
        null,
        {
          id: 5,
          pages: [{ list: [{ code: 109, indent: 8, parameters: [] }] }],
        },
      ],
    };

    expect(result).toEqual(expected);
  });

  test("should preserve null values in event list", () => {
    const map = {
      events: [
        null,
        {
          id: 0,
          pages: [{ list: [{ code: 213, indent: 0, parameters: [] }] }],
        },
      ],
    } as const satisfies MapEventContainer<EventCommand>;
    const result = replaceMapEvents(map, mockTransform);

    expect(result.events[0]).toBeNull();
    expect(result.events[1]?.pages[0].list[0].code).toBe(213);
  });
});

describe("replaceCommonEvents", () => {
  test("should replace commands in common events", () => {
    const events: Data_CommonEvent<EventCommand2>[] = [
      {
        id: 1,
        list: [createMockCommand(221)],
        name: "to-kai",
        trigger: 0,
        switchId: 0,
      },
      {
        id: 2,
        list: [createMockCommand(217)],
        name: "yokosuka",
        trigger: 0,
        switchId: 0,
      },
    ];
    const result = replaceCommonEvents(events, mockTransform);
    const expected: Data_CommonEvent<EventCommand2>[] = [
      {
        id: 1,
        list: [{ code: 221, indent: 8, parameters: [] }],
        name: "to-kai",
        trigger: 0,
        switchId: 0,
      },
      {
        id: 2,
        list: [{ code: 217, indent: 8, parameters: [] }],
        name: "yokosuka",
        trigger: 0,
        switchId: 0,
      },
    ];

    expect(result).toEqual(expected);
  });
});
// Troopはデータが複雑なので後回しにする
// describe("replaceTroops", () => {
//   test("should replace commands in troop pages", () => {
//     const troops: Data_Troop[] = [
//       {
//         id: 10,
//         members: [],
//         pages: [
//           {
//             list: [createMockCommand(251)],
//             conditions: {
//               actorHp: 0,
//               actorId: 0,
//             },

//             span: 0,
//           },
//         ],
//         name: "to-kai",
//       },
//       { id: 11, pages: [{ list: [createMockCommand(701)] }] },
//     ];
//     const result = replaceTroops([null, ...troops], mockTransform);

//     expect(result).toMatchObject([
//       null,
//       { id: 10, pages: [{ list: [{ code: 701, indent: 8, parameters: [] }] }] },
//       { id: 11, pages: [{ list: [{ code: 702, indent: 8, parameters: [] }] }] },
//     ]);
//   });
// });
