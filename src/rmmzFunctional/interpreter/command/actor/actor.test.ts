import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeActorImages,
  Command_ChangeClaass,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Actor,
  Rmmz_ActorsReadonly,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";
import { commandChangeActorClass, commandChangeActorImages } from "./actor";

type MockActor = MockedObject<
  Pick<
    Rmmz_Actor,
    "changeClass" | "setCharacterImage" | "setFaceImage" | "setBattlerImage"
  >
>;

const createActor = (): MockActor => ({
  changeClass: vi.fn(),
  setCharacterImage: vi.fn(),
  setFaceImage: vi.fn(),
  setBattlerImage: vi.fn(),
});

const createActorProvider = (
  actor: MockActor | null,
): MockedObject<Rmmz_ActorsReadonly<MockActor>> => ({
  actor: vi.fn(() => actor),
});

const createPlayer = (): MockedObject<Rmmz_PlayerCharactor> =>
  ({
    refresh: vi.fn(),
  }) as MockedObject<Rmmz_PlayerCharactor>;

describe("commandChangeActorClass", () => {
  test("updates class when actor exists", () => {
    const actor = createActor();
    const actors = createActorProvider(actor);
    const command: Command_ChangeClaass = {
      code: 321,
      indent: 0,
      parameters: [3, 7, true],
    };

    commandChangeActorClass(command, actors);

    expect(actors.actor).toHaveBeenCalledWith(3);
    expect(actor.changeClass).toHaveBeenCalledWith(7, true);
  });

  test("does nothing when actor does not exist", () => {
    const actors = createActorProvider(null);
    const command: Command_ChangeClaass = {
      code: 321,
      indent: 0,
      parameters: [99, 3, false],
    };

    commandChangeActorClass(command, actors);

    expect(actors.actor).toHaveBeenCalledWith(99);
    expect(actors.actor).toHaveBeenCalledOnce();
  });
});

describe("commandChangeActorImages", () => {
  test("updates actor images and refreshes player", () => {
    const actor = createActor();
    const actors = createActorProvider(actor);
    const player = createPlayer();
    const command: Command_ChangeActorImages = {
      code: 322,
      indent: 0,
      parameters: [1, "charName", 2, "faceName", 3, "battlerName"],
    };

    commandChangeActorImages(command, actors, player);

    expect(actors.actor).toHaveBeenCalledWith(1);
    expect(actor.setCharacterImage).toHaveBeenCalledWith("charName", 2);
    expect(actor.setFaceImage).toHaveBeenCalledWith("faceName", 3);
    expect(actor.setBattlerImage).toHaveBeenCalledWith("battlerName");
    expect(player.refresh).toHaveBeenCalledOnce();
  });

  test("still refreshes player even when actor does not exist", () => {
    const actors = createActorProvider(null);
    const player = createPlayer();
    const command: Command_ChangeActorImages = {
      code: 322,
      indent: 0,
      parameters: [7, "x", 0, "y", 1, "z"],
    };

    commandChangeActorImages(command, actors, player);

    expect(actors.actor).toHaveBeenCalledWith(7);
    expect(player.refresh).toHaveBeenCalledOnce();
  });
});
