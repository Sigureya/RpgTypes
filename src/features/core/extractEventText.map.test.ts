import { test, expect, describe, vi } from "vitest";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs/eventCommand";
import type {
  Command_PluginCommandMZ,
  Data_Map,
  EventCommand,
  MapEvent,
  NoteReadResult,
} from "@RpgTypes/rmmz";
import {
  makeEventPageCondition,
  makeMapData,
  makeMapEvent,
  makeMapEventPage,
  readNote,
} from "@RpgTypes/rmmz";
import type {
  ExtractedMapEventTexts,
  PluginCommandMzParameter,
} from "./extract/text/eventCommand";
import { extractMapText } from "./extractEventText";

const dummyPluginResult: PluginCommandMzParameter = {
  code: PLUGIN_COMMAND_MZ,
  value: "PluginCommand",
  paramIndex: 3,
  commandName: "CommandA",
  pluginName: "MockPlugin",
  argName: "arg1",
  argTitle: "Argument 1",
};

interface ParameterAdditional extends PluginCommandMzParameter {
  additionalInfo: string;
}

const evalutePluginCommand = (): PluginCommandMzParameter[] => [
  dummyPluginResult,
];
interface TestCase<
  T extends PluginCommandMzParameter = PluginCommandMzParameter,
> {
  caseName: string;
  input: Data_Map<EventCommand>;
  expectedEvents: ExtractedMapEventTexts<T>[];
  expectedCalls: Command_PluginCommandMZ[];
}

const runTestCase = <T extends PluginCommandMzParameter>(
  testCase: TestCase<T>,
) => {
  describe(testCase.caseName, () => {
    test("result", () => {
      const result = extractMapText(testCase.input, evalutePluginCommand);
      expect(result.events).toEqual(testCase.expectedEvents);
      expect(result.displayedName).toBe(testCase.input.displayName);
      expect(result.note).toBe(testCase.input.note);
      const expectedNoteItems: NoteReadResult[] = readNote(testCase.input.note);
      expect(result.noteItems).toEqual(expectedNoteItems);
    });
    test("calles", () => {
      const mockFn = vi.fn(evalutePluginCommand);
      extractMapText(testCase.input, mockFn);
      expect(mockFn).toHaveBeenCalledTimes(testCase.expectedCalls.length);
      testCase.expectedCalls.forEach((command, index) => {
        expect(mockFn).toHaveBeenNthCalledWith(index + 1, command);
      });
    });
  });
};

const mockPluginCommandA: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["CommandA", "param1", "", { text: "Hello", value: "123" }],
};

const mockPluginCommandB: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["CommandB", "param2", "", { text: "World", value: "456" }],
};

const mockPluginCommandC: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["CommandC", "param3", "", { text: "Foo", value: "789" }],
};

const mockPluginCommandD: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["CommandD", "param4", "", { text: "Bar", value: "000" }],
};

interface EventGen {
  id: number;
  name: string;
  list: Command_PluginCommandMZ[][];
  note?: string;
}

const createEvent = ({
  id,
  name,
  list: commandsList,
  note = "",
}: EventGen): MapEvent<EventCommand> => {
  return makeMapEvent({
    id,
    name,
    note: note,
    pages: commandsList.map((commands) => makeMapEventPage({ list: commands })),
  });
};

const mockEvent: MapEvent<EventCommand> = {
  x: 0,
  y: 0,
  id: 1,
  name: "Event1",
  note: "",
  pages: [
    {
      stepAnime: false,
      walkAnime: false,
      through: false,
      priorityType: 1,
      conditions: makeEventPageCondition(),
      directionFix: false,
      image: {
        characterIndex: 0,
        characterName: "",
        direction: 2,
        pattern: 0,
        tileId: 0,
      },
      moveSpeed: 3,
      moveType: 0,
      trigger: 0,
      list: [mockPluginCommandA],
      moveFrequency: 3,
      moveRoute: { list: [], repeat: true, skippable: false, wait: false },
    },
  ],
};

const testCases: TestCase[] = [
  {
    caseName: "emptyMap 1",
    input: makeMapData({
      note: "<warp:x=0 y=0>",
      events: [],
    }),
    expectedEvents: [],
    expectedCalls: [],
  },
  {
    caseName: "emptyMap 2",
    input: makeMapData({
      note: "",
      events: [
        null,
        { id: 1, name: "Test Event", note: "", x: 4, y: 5, pages: [] },
        null,
      ],
    }),
    expectedEvents: [],
    expectedCalls: [],
  },
  {
    caseName: "emptyMap 3",
    input: makeMapData({
      note: "",
      events: [
        null,
        makeMapEvent({
          id: 1,
          pages: [makeMapEventPage({ list: [] })],
        }),
        makeMapEvent({
          id: 1,
          pages: [
            makeMapEventPage({ list: [] }),
            makeMapEventPage({ list: [] }),
          ],
        }),
      ],
    }),
    expectedEvents: [
      {
        eventId: 1,
        name: "",
        pageIndex: 0,
        commands: [],
        note: "",
        noteItems: [],
      },
      {
        eventId: 1,
        name: "",
        pageIndex: 0,
        commands: [],
        note: "",
        noteItems: [],
      },
      {
        eventId: 1,
        name: "",
        pageIndex: 1,
        commands: [],
        note: "",
        noteItems: [],
      },
    ],
    expectedCalls: [],
  },
  {
    caseName: "withEvents",
    input: makeMapData({
      note: "<mapNote:abc>",
      displayName: "MyMap",
      events: [null, mockEvent],
    }),
    expectedEvents: [
      {
        eventId: 1,
        name: "Event1",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
    ],
    expectedCalls: [mockPluginCommandA],
  },
  {
    caseName: "singleEventMultiplePages",
    input: makeMapData({
      note: "",
      events: [
        null,
        createEvent({
          id: 10,
          name: "MultiPageEvent",
          list: [
            [mockPluginCommandA],
            [mockPluginCommandB],
            [mockPluginCommandC],
          ],
        }),
      ],
    }),
    expectedEvents: [
      {
        eventId: 10,
        name: "MultiPageEvent",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 10,
        name: "MultiPageEvent",
        pageIndex: 1,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 10,
        name: "MultiPageEvent",
        pageIndex: 2,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
    ],
    expectedCalls: [mockPluginCommandA, mockPluginCommandB, mockPluginCommandC],
  },
  {
    caseName: "multipleEventsSinglePageEach",
    input: makeMapData({
      note: "",
      events: [
        null,
        createEvent({ id: 20, name: "EventA", list: [[mockPluginCommandA]] }),
        createEvent({ id: 21, name: "EventB", list: [[mockPluginCommandB]] }),
        createEvent({ id: 22, name: "EventC", list: [[mockPluginCommandC]] }),
      ],
    }),
    expectedEvents: [
      {
        eventId: 20,
        name: "EventA",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 21,
        name: "EventB",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 22,
        name: "EventC",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
    ],
    expectedCalls: [mockPluginCommandA, mockPluginCommandB, mockPluginCommandC],
  },
  {
    caseName: "multipleEventsMixedPageCounts",
    input: makeMapData({
      note: "",
      events: [
        null,
        createEvent({ id: 30, name: "EventOne", list: [[mockPluginCommandA]] }),
        createEvent({
          id: 31,
          name: "EventTwo",
          list: [
            [mockPluginCommandB],
            [mockPluginCommandC],
            [mockPluginCommandD],
          ],
        }),
        createEvent({
          id: 32,
          name: "EventThree",
          list: [[mockPluginCommandA], [mockPluginCommandB]],
        }),
      ],
    }),
    expectedEvents: [
      {
        eventId: 30,
        name: "EventOne",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 31,
        name: "EventTwo",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 31,
        name: "EventTwo",
        pageIndex: 1,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 31,
        name: "EventTwo",
        pageIndex: 2,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 32,
        name: "EventThree",
        pageIndex: 0,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
      {
        eventId: 32,
        name: "EventThree",
        pageIndex: 1,
        commands: [dummyPluginResult],
        note: "",
        noteItems: [],
      },
    ],
    expectedCalls: [
      mockPluginCommandA,
      mockPluginCommandB,
      mockPluginCommandC,
      mockPluginCommandD,
      mockPluginCommandA,
      mockPluginCommandB,
    ],
  },
];

describe("extractMapText", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
  describe("others", () => {
    test("readnote", () => {
      const note = ["<mapNote:abc>", "<test:123>", "normal text"].join("\n");
      const result = readNote(note);
      const expected: NoteReadResult[] = [
        { key: "mapNote", value: "abc" },
        { key: "test", value: "123" },
      ];
      expect(result).toEqual(expected);
    });
    test("preserves additional plugin parameter fields", () => {
      type Result = ExtractedMapEventTexts<ParameterAdditional>[];
      const map = makeMapData({
        note: "<mapNote:abc>",
        displayName: "MyMap",
        events: [null, mockEvent],
      });
      const mockFn = vi.fn<
        (cmd: Command_PluginCommandMZ) => ParameterAdditional[]
      >(() => [
        {
          ...dummyPluginResult,
          additionalInfo: "additional",
        },
      ]);
      const result = extractMapText(map, mockFn);
      const expected: Result = [
        {
          eventId: 1,
          name: "Event1",
          pageIndex: 0,
          commands: [
            {
              ...dummyPluginResult,
              additionalInfo: "additional",
            },
          ],
          note: "",
          noteItems: [],
        },
      ];
      expect(result.events).toEqual(expected);
    });
  });
});
