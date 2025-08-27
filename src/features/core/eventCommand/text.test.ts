import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
  Command_ShowChoices,
  EventCommand,
} from "@RpgTypes/rmmz";
import { handlerDispatch } from "./text";
import type { TextCommandMapper } from "./textCommandMapper";

const createMockMapper = (): MockedObject<TextCommandMapper<void>> => ({
  showMessage: vi.fn(),
  showScrollingText: vi.fn(),
  comment: vi.fn(),

  script: vi.fn(),
  showChoices: vi.fn(),
  choiceWhen: vi.fn(),
  changeName: vi.fn(),
  changeProfile: vi.fn(),
  changeNickname: vi.fn(),
  commentBody: vi.fn(),
  other: vi.fn(),
});

describe("handlerDispatch", () => {
  test("ShowChoices", () => {
    const mapper = createMockMapper();
    const command: Command_ShowChoices = {
      code: 102,
      parameters: [[], 0, 0, 0, 0],
      indent: 0,
    };
    handlerDispatch([command], 0, mapper);
    expect(mapper.showChoices).toHaveBeenCalledWith(command, 0, [command]);
  });
  test("ChangeName", () => {
    const mapper = createMockMapper();
    const command: Command_ChangeActorName = {
      code: 320,
      parameters: [1, "name"],
      indent: 0,
    };
    mapper.changeName.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.changeName).toHaveBeenCalledWith(command, 0, [command]);
  });

  test("ChangeProfile", () => {
    const mapper = createMockMapper();
    const command: Command_ChangeActorProfile = {
      code: 325,
      parameters: [1, "profile"],
      indent: 0,
    };
    mapper.changeProfile.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.changeProfile).toHaveBeenCalledWith(command, 0, [command]);
  });

  test("changeNickname", () => {
    const mapper = createMockMapper();
    const command: Command_ChangeActorNickName = {
      code: 324,
      parameters: [1, "nickname"],
      indent: 0,
    };
    mapper.changeNickname.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.changeNickname).toHaveBeenCalledWith(command, 0, [command]);
  });

  // test("other", () => {
  //   const mapper = createMockMapper();
  //   const command: EventCommand = { code: 0, parameters: [], indent: 0 };
  //   mapper.other.mockReturnValue(undefined);
  //   handlerDispatch([command], 0, mapper);
  //   expect(mapper.other).toHaveBeenCalledWith(command, 0, [command]);
  // });
});
