import { describe, test, expect } from "vitest";
import {
  isCommandAudio,
  isCommandCommonEvent,
  isCommandInputNumber,
  isCommandShowChoiceItem,
  isCommandShowChoices,
  isCommandShowMessage,
} from "./validate";
import type { AudioFileParams } from "@RpgTypes/utils";
import { makeCommandInputNumber } from "./commands/message/inputNumber/make";
import {
  makeCommandSetupChoice,
  makeCommand2_ShowChoiceItem,
} from "./commands/message/setupChoice";
import { makeCommandShowMessage } from "./commands/message/showMessage/convert";
import { makeCommand2_CommonEvent } from "./commands/callCommonEvent/make";
import type { Command2_CommonEvent } from "./commands/callCommonEvent/types";
import type {
  Command2_PlayBGM,
  Command2_PlayBGS,
  Command2_PlayME,
  Command2_PlaySE,
  Command2_ChangeBattleBGM,
} from "./commands/audio";
import {
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlayME,
  makeCommandPlaySE,
  makeCommandChangeBattleBGM,
} from "./commands/audio";

describe("isCommandCommonEvent", () => {
  test("Valid command", () => {
    const command: Command2_CommonEvent = makeCommand2_CommonEvent({
      eventId: 1,
    });
    expect(isCommandCommonEvent(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandCommonEvent(invalidCommand)).toBe(false);
  });
});

describe("isCommandShowChoices", () => {
  test("Valid command", () => {
    const command = makeCommandSetupChoice({
      choices: [],
      cancelType: 0,
      defaultType: 0,
      positionType: 2,
      background: 0,
    });
    expect(isCommandShowChoices(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandShowChoices(invalidCommand)).toBe(false);
  });
});

describe("isCommandShowChoiceItem", () => {
  test("Valid command", () => {
    const command = makeCommand2_ShowChoiceItem({
      index: 0,
      name: "Choice",
    });
    expect(isCommandShowChoiceItem(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandShowChoiceItem(invalidCommand)).toBe(false);
  });
});
describe("isCommandInputNumber", () => {
  test("Valid command", () => {
    const command = makeCommandInputNumber({
      variableId: 1,
      digits: 2,
    });
    expect(isCommandInputNumber(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandInputNumber(invalidCommand)).toBe(false);
  });
});

describe("isCommandShowMessage", () => {
  test("Valid command", () => {
    const command = makeCommandShowMessage({
      positionType: 0,
      facename: "Face",
      faceIndex: 0,
    });
    expect(isCommandShowMessage(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandShowMessage(invalidCommand)).toBe(false);
  });
});

describe("isCommandAudio", () => {
  const MockAudio: AudioFileParams = {
    name: "test",
    volume: 100,
    pitch: 100,
    pan: 0,
  };
  test("Play BGM", () => {
    const command: Command2_PlayBGM = makeCommandPlayBGM(MockAudio);

    expect(isCommandAudio(command)).toBe(true);
  });
  test("Play BGS", () => {
    const command: Command2_PlayBGS = makeCommandPlayBGS(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
  test("Play ME", () => {
    const command: Command2_PlayME = makeCommandPlayME(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
  test("Play SE", () => {
    const command: Command2_PlaySE = makeCommandPlaySE(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
  test("Change Battle BGM", () => {
    const command: Command2_ChangeBattleBGM =
      makeCommandChangeBattleBGM(MockAudio);
    expect(isCommandAudio(command)).toBe(true);
  });
});
