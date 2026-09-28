import type {
  Command_ChangeActorImages,
  Command_ChangeClaass,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Actor,
  Rmmz_ActorsReadonly,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorImages } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/actorBase";

export const commandChangeActorClass = (
  command: Command_ChangeClaass,
  provider: Rmmz_ActorsReadonly<Pick<Rmmz_Actor, "changeClass">>,
): void => {
  const actor = provider.actor(command.parameters[0]);
  if (actor) {
    const classId = command.parameters[1];
    const keepExp = command.parameters[2];
    actor.changeClass(classId, keepExp);
  }
};

export const commandChangeActorImages = (
  { parameters }: Command_ChangeActorImages,
  provider: Rmmz_ActorsReadonly<Rmmz_ActorImages>,
  gamePlayer: Pick<Rmmz_PlayerCharactor, "refresh">,
): void => {
  const actor = provider.actor(parameters[0]);
  if (actor) {
    actor.setCharacterImage(parameters[1], parameters[2]);
    actor.setFaceImage(parameters[3], parameters[4]);
    actor.setBattlerImage(parameters[5]);
  }
  gamePlayer.refresh();
};
