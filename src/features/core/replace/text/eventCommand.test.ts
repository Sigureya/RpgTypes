import { describe, expect, test } from "vitest";
import type {
  Command_ShowMessageHeader,
  Command_ChangeActorName,
  Command_ChangeActorProfile,
  Command_ChangeActorNickName,
  Command_ShowMessageBody,
  Command_ShowChoices,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  makeCommandShowMessage,
  SHOW_CHOICES,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";

describe("replaceTextForCommand2", () => {
  test("replaces text in parameters[0]", () => {
    const map = new Map([["foo", "bar"]]);
    const command: Command_ShowMessageBody = {
      code: SHOW_MESSAGE_BODY,
      indent: 1,
      parameters: ["foo"],
    };
    const result = replaceEventCommandTexts(command, (key) => map.get(key));
    expect(result.parameters[0]).toBe("bar");
  });
});

describe("replaceTextForCommandShowMessage", () => {
  test("replaces speakerName", () => {
    const map = new Map([["Speaker", "Narrator"]]);
    const command: Command_ShowMessageHeader = makeCommandShowMessage(
      {
        facename: "face",
        faceIndex: 1,
        background: 0,
        positionType: 2,
        speakerName: "Speaker",
      },
      0
    );
    const expected: Command_ShowMessageHeader = {
      code: SHOW_MESSAGE,
      indent: 0,
      parameters: ["face", 1, 0, 2, "Narrator"],
    };
    const result = replaceEventCommandTexts(command, (key) => map.get(key));
    expect(result).toEqual(expected);
  });
});

describe("replaceTextForCommandActor", () => {
  test("replaces actor name", () => {
    const map = new Map([["Alice", "Bob"]]);
    const command: Command_ChangeActorName = {
      code: CHANGE_NAME,
      indent: 0,
      parameters: [1, "Alice"],
    };

    const expected: Command_ChangeActorName = {
      code: CHANGE_NAME,
      indent: 0,
      parameters: [1, "Bob"],
    };

    const result = replaceEventCommandTexts(command, (key) => map.get(key));
    expect(result).toEqual(expected);
  });
  test("replaces actor nickname", () => {
    const map = new Map([["Nick", "Nickname"]]);
    const command: Command_ChangeActorNickName = {
      code: CHANGE_NICKNAME,
      indent: 0,
      parameters: [1, "Nick"],
    };

    const expected: Command_ChangeActorNickName = {
      code: CHANGE_NICKNAME,
      indent: 0,
      parameters: [1, "Nickname"],
    };

    const result = replaceEventCommandTexts(command, (key) => map.get(key));
    expect(result).toEqual(expected);
  });
  test("replaces actor profile", () => {
    const map = new Map([["Profile text", "New profile text"]]);
    const command: Command_ChangeActorProfile = {
      code: CHANGE_PROFILE,
      indent: 0,
      parameters: [1, "Profile text"],
    };

    const expected: Command_ChangeActorProfile = {
      code: CHANGE_PROFILE,
      indent: 0,
      parameters: [1, "New profile text"],
    };

    const result = replaceEventCommandTexts(command, (key) => map.get(key));
    expect(result).toEqual(expected);
  });
});

describe("replaceTextForCommandShowChoices", () => {
  test("replaces choices", () => {
    const map = new Map([["Choice1", "OptionA"]]);
    const command: Command_ShowChoices = {
      code: SHOW_CHOICES,
      indent: 0,
      parameters: [["Choice1", "Choice2"], 0, 0, 0, 0],
    };
    const expected: Command_ShowChoices = {
      code: SHOW_CHOICES,
      indent: 0,
      parameters: [["OptionA", "Choice2"], 0, 0, 0, 0],
    };
    const result = replaceEventCommandTexts(command, (key) => map.get(key));
    expect(result).toEqual(expected);
  });
});
