import type {
  Command_ChangeActorImages,
  Command_ChangeClaass,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Actor,
  Rmmz_ActorsReadonly,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";

export const commandChangeActorClass = (
  command: Command_ChangeClaass,
  provider: Rmmz_ActorsReadonly<Rmmz_Actor>,
): boolean => {
  const actor = provider.actor(command.parameters[0]);
  if (actor) {
    const classId = command.parameters[1];
    const keepExp = command.parameters[2];
    actor.changeClass(classId, keepExp);
  }
  return true;
};

export const commandChangeActorImages = (
  { parameters }: Command_ChangeActorImages,
  provider: Rmmz_ActorsReadonly<Rmmz_Actor>,
  gamePlayer: Rmmz_PlayerCharactor,
): boolean => {
  const actor = provider.actor(parameters[0]);
  if (actor) {
    actor.setCharacterImage(parameters[1], parameters[2]);
    actor.setFaceImage(parameters[3], parameters[4]);
    actor.setBattlerImage(parameters[5]);
  }
  gamePlayer.refresh();
  return true;
};
