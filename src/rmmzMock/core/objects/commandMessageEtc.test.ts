import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  ParamArray_InputNumber,
  ParamArray_SelectItem,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Message } from "@RpgTypes/rmmzRuntime/objects";
import { Game_Interpreter } from "./rmmz_objects";

type FakeMessage = Pick<
  Rmmz_Message,
  "isBusy" | "setNumberInput" | "setItemChoice"
>;

const makeMockMessage = (
  param: { busy?: boolean } = {}
): MockedObject<FakeMessage> => ({
  isBusy: vi.fn(() => param.busy ?? false),
  setNumberInput: vi.fn(),
  setItemChoice: vi.fn(),
});

const makeMockedInterpreter = () => {
  const keys: (keyof Game_Interpreter)[] = [
    "command103",
    "command104",
    "setupNumInput",
    "setupItemChoice",
    "setWaitMode",
  ];
  const inter = new Game_Interpreter();
  keys.forEach((k) => {
    vi.spyOn(inter, k);
  });
  return inter;
};

describe("command103 (Input Number)", () => {
  test("should call setNumberInput and setWaitMode when not busy", () => {
    const message = makeMockMessage({ busy: false });
    vi.stubGlobal("$gameMessage", message);
    const interpreter = makeMockedInterpreter();
    const params: ParamArray_InputNumber = [5, 2];
    const result = interpreter.command103(params);
    expect(result).toBe(true);
    expect(message.isBusy).toHaveBeenCalled();
    expect(interpreter.setupNumInput).toHaveBeenCalledWith(params);
    expect(message.setNumberInput).toHaveBeenCalledWith(5, 2);
    expect(interpreter.setWaitMode).toHaveBeenCalledWith("message");
  });

  test("should not call setNumberInput if message is busy", () => {
    const message = makeMockMessage({ busy: true });
    vi.stubGlobal("$gameMessage", message);
    const interpreter = makeMockedInterpreter();
    const params: ParamArray_InputNumber = [3, 1];
    const result = interpreter.command103(params);
    expect(result).toBe(false);
    expect(message.isBusy).toHaveBeenCalled();
    expect(interpreter.setupNumInput).not.toHaveBeenCalled();
    expect(message.setNumberInput).not.toHaveBeenCalled();
    expect(interpreter.setWaitMode).not.toHaveBeenCalled();
  });
});

describe("command104 (Select Item)", () => {
  test("should call setItemChoice and setWaitMode when not busy", () => {
    const message = makeMockMessage({ busy: false });
    vi.stubGlobal("$gameMessage", message);
    const interpreter = makeMockedInterpreter();
    const params: ParamArray_SelectItem = [7, 1];
    const result = interpreter.command104(params);
    expect(result).toBe(true);
    expect(message.isBusy).toHaveBeenCalled();
    expect(interpreter.setupItemChoice).toHaveBeenCalledWith(params);
    expect(message.setItemChoice).toHaveBeenCalledWith(7, 1);
    expect(interpreter.setWaitMode).toHaveBeenCalledWith("message");
  });

  test("should not call setItemChoice if message is busy", () => {
    const message = makeMockMessage({ busy: true });
    vi.stubGlobal("$gameMessage", message);
    const interpreter = makeMockedInterpreter();
    const params: ParamArray_SelectItem = [2, 0];
    const result = interpreter.command104(params);
    expect(result).toBe(false);
    expect(message.isBusy).toHaveBeenCalled();
    expect(interpreter.setupItemChoice).not.toHaveBeenCalled();
    expect(message.setItemChoice).not.toHaveBeenCalled();
    expect(interpreter.setWaitMode).not.toHaveBeenCalled();
  });
});
