import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ChangePartyMember } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandAddPartyMember,
  makeCommandRemovePartyMember,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Actor,
  Rmmz_ActorsReadonly,
  Rmmz_Party,
} from "@RpgTypes/rmmzRuntime";
import { commandChangePartyMember } from "./change";

type MockedActor = MockedObject<Pick<Rmmz_Actor, "setup" | "actorId">>;

const createMockActor = (actorId: number): MockedActor => ({
  actorId: vi.fn(() => actorId),
  setup: vi.fn(),
});

const createMockActors = (
  actor: MockedActor | null,
): MockedObject<Rmmz_ActorsReadonly<MockedActor>> => ({
  actor: vi.fn(() => actor),
});

const createMockParty = (): MockedObject<
  Pick<Rmmz_Party, "addActor" | "removeActor">
> => ({
  addActor: vi.fn(),
  removeActor: vi.fn(),
});

describe("commandChangePartyMember", () => {
  test("add", () => {
    const ACTOR_ID = 7;
    const command: Command_ChangePartyMember = makeCommandAddPartyMember({
      actorId: ACTOR_ID,
    });
    const actor = createMockActor(1);
    const actors = createMockActors(actor);
    const party = createMockParty();
    commandChangePartyMember(command, actors, party);
    expect(actor.setup).not.toHaveBeenCalled();
    expect(party.addActor).toHaveBeenCalledWith(ACTOR_ID);
    expect(party.removeActor).not.toHaveBeenCalled();
    expect(actors.actor).toHaveBeenCalledWith(ACTOR_ID);
    expect(actors.actor).toHaveBeenCalledOnce();
  });

  test("add with initialize", () => {
    const ACTOR_ID = 5;
    const command: Command_ChangePartyMember = makeCommandAddPartyMember({
      actorId: ACTOR_ID,
      initialize: true,
    });
    const actor = createMockActor(1);
    const actors = createMockActors(actor);
    const party = createMockParty();
    commandChangePartyMember(command, actors, party);
    expect(actor.setup).toHaveBeenCalledWith(ACTOR_ID);
    expect(party.addActor).toHaveBeenCalledWith(ACTOR_ID);
    expect(party.removeActor).not.toHaveBeenCalled();
    expect(actors.actor).toHaveBeenCalledWith(ACTOR_ID);
    expect(actors.actor).toHaveBeenCalledOnce();
  });
  test("add but actor null", () => {
    const ACTOR_ID = 7;
    const command = makeCommandAddPartyMember({
      actorId: ACTOR_ID,
    });
    const actors = createMockActors(null);
    const party = createMockParty();
    commandChangePartyMember(command, actors, party);
    expect(party.addActor).not.toHaveBeenCalled();
    expect(party.removeActor).not.toHaveBeenCalled();
    expect(actors.actor).toHaveBeenCalledWith(ACTOR_ID);
    expect(actors.actor).toHaveBeenCalledOnce();
  });
  test("remove", () => {
    const ACTOR_ID = 7;
    const command: Command_ChangePartyMember = makeCommandRemovePartyMember({
      actorId: ACTOR_ID,
    });
    const actor = createMockActor(1);
    const actors = createMockActors(actor);
    const party = createMockParty();
    commandChangePartyMember(command, actors, party);
    expect(actors.actor).toHaveBeenCalledWith(ACTOR_ID);
    expect(actors.actor).toHaveBeenCalledOnce();
    expect(party.removeActor).toHaveBeenCalledWith(ACTOR_ID);
    expect(party.addActor).not.toHaveBeenCalled();
  });
  test("remove but actor null", () => {
    const ACTOR_ID = 7;
    const command = makeCommandRemovePartyMember({
      actorId: ACTOR_ID,
    });
    const actors = createMockActors(null);
    const party = createMockParty();
    commandChangePartyMember(command, actors, party);
    expect(party.removeActor).not.toHaveBeenCalled();
    expect(party.addActor).not.toHaveBeenCalled();
    expect(actors.actor).toHaveBeenCalledWith(ACTOR_ID);
    expect(actors.actor).toHaveBeenCalledOnce();
  });
});
