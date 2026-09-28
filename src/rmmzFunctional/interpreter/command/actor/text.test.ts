import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_ActorTexts,
} from "@RpgTypes/rmmzRuntime";
import {
  commandChangeActorName,
  commandChangeActorNickName,
  commandChangeActorProfile,
} from "./text";

type MockActor = MockedObject<Rmmz_ActorTexts>;

const createActor = (): MockActor => ({
  setName: vi.fn(),
  setNickname: vi.fn(),
  setProfile: vi.fn(),
  name: vi.fn(),
  nickname: vi.fn(),
  profile: vi.fn(),
});

const createProvider = (
  actor: MockActor | null,
): MockedObject<Rmmz_ActorsReadonly<MockActor>> => ({
  actor: vi.fn(() => actor),
});

describe("commandChangeActorName", () => {
  test("sets actor name when actor exists", () => {
    const actor = createActor();
    const provider = createProvider(actor);
    const command: Command_ChangeActorName = {
      code: 320,
      indent: 0,
      parameters: [1, "Alice"],
    };

    commandChangeActorName(command, provider);

    expect(provider.actor).toHaveBeenCalledWith(1);
    expect(actor.setName).toHaveBeenCalledWith("Alice");
  });

  test("ignores missing actor", () => {
    const provider = createProvider(null);
    const command: Command_ChangeActorName = {
      code: 320,
      indent: 0,
      parameters: [99, "Ghost"],
    };

    commandChangeActorName(command, provider);

    expect(provider.actor).toHaveBeenCalledWith(99);
  });
});

describe("commandChangeActorNickName", () => {
  test("sets actor nickname", () => {
    const actor = createActor();
    const provider = createProvider(actor);
    const command: Command_ChangeActorNickName = {
      code: 324,
      indent: 0,
      parameters: [2, "Hero"],
    };

    commandChangeActorNickName(command, provider);

    expect(actor.setNickname).toHaveBeenCalledWith("Hero");
  });
});

describe("commandChangeActorProfile", () => {
  test("sets actor profile", () => {
    const actor = createActor();
    const provider = createProvider(actor);
    const command: Command_ChangeActorProfile = {
      code: 325,
      indent: 0,
      parameters: [3, "A brave adventurer"],
    };

    commandChangeActorProfile(command, provider);

    expect(actor.setProfile).toHaveBeenCalledWith("A brave adventurer");
  });
});
