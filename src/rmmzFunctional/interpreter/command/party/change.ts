import type { Command_ChangePartyMember } from "@RpgTypes/rmmz/eventCommand";
import {
  isPartyRemoveCommand,
  requiredActorInitialize,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Actor,
  Rmmz_ActorsReadonly,
  Rmmz_Party,
} from "@RpgTypes/rmmzRuntime";

export const commandChangePartyMember = (
  command: Command_ChangePartyMember,
  actors: Rmmz_ActorsReadonly<Pick<Rmmz_Actor, "setup" | "actorId">>,
  party: Pick<Rmmz_Party, "addActor" | "removeActor">,
): void => {
  const actorId: number = command.parameters[1];
  const actor = actors.actor(actorId);
  if (!actor) {
    return;
  }
  if (isPartyRemoveCommand(command)) {
    party.removeActor(actorId);
    return;
  }
  if (requiredActorInitialize(command)) {
    actor.setup(actorId);
  }
  party.addActor(actorId);
};
