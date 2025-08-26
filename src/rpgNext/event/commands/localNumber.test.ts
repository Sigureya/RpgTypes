import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import {} from "./core/types/define";
import { writeResult } from "./core/nextState";
import type { FunctionsTable } from "./core/types/functions";
import type { EventState } from "./core/types/state";
import { LOCAL_NUMBER } from "./localNumber";
import type { NewCommand_LocalNumberLiteral } from "./types/localNumber";

const createEmptyState = (): EventState => ({
  currentIndex: 0,
  localValiables: {
    numbers: {},
    strings: {},
  },
  wait: null,
  child: null,
  params: {},
  picutres: {},
});

describe("", () => {
  const state = createEmptyState();
  const command: NewCommand_LocalNumberLiteral = {
    code: "localNumber",
    vvv: "aaa",
    arg: { value: 123 },
  };

  const mockFunctions: MockedObject<FunctionsTable> = {
    callBoolean: vi.fn(),
    callNumber: vi.fn().mockReturnValue(456),
    callString: vi.fn().mockReturnValue("hoge"),
    callObject: vi.fn(),
    wait: vi.fn().mockReturnValue(false),
  };

  const mockedLocal: MockedObject<typeof LOCAL_NUMBER> = {
    execute: vi.fn((a, b, c) => LOCAL_NUMBER.execute(a, b, c)),
  };

  const commandMap = new Map([["localNumber", mockedLocal]]);
  const newState = writeResult(1, command, state, mockFunctions, commandMap);

  test("LOCAL_NUMBER", () => {
    const expected: EventState = {
      currentIndex: 1,
      localValiables: {
        numbers: { aaa: 123 },
        strings: {},
      },
      wait: null,
      child: null,
      params: {},
      picutres: {},
    };
    expect(newState.newState).toEqual(expected);
    expect(newState.newState).not.toBe(state);
  });
  test("call LOCAL_NUMBER.execute", () => {
    expect(mockedLocal.execute).toBeCalledTimes(1);
    expect(mockedLocal.execute).toBeCalledWith(command, state, mockFunctions);
  });
  test("not call other function", () => {
    expect(mockFunctions.callBoolean).not.toBeCalled();
    expect(mockFunctions.callNumber).not.toBeCalled();
    expect(mockFunctions.callString).not.toBeCalled();
    expect(mockFunctions.callObject).not.toBeCalled();
    expect(mockFunctions.wait).not.toBeCalled();
  });
});
