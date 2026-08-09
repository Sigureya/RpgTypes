import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Actors } from "@RpgTypes/rmmzRuntime";

export const commandChangeActorName = (
  { parameters }: Command_ChangeActorName,
  provider: Rmmz_Actors,
): boolean => {
  const actor = provider.actor(parameters[0]);
  if (actor) {
    actor.setName(parameters[1]);
  }
  return true;
};

export const commandChangeActorNickName = (
  command: Command_ChangeActorNickName,
  provider: Rmmz_Actors,
): boolean => {
  const actor = provider.actor(command.parameters[0]);
  if (actor) {
    actor.setNickname(command.parameters[1]);
  }
  return true;
};

export const commandChangeActorProfile = (
  command: Command_ChangeActorProfile,
  provider: Rmmz_Actors,
): boolean => {
  const actor = provider.actor(command.parameters[0]);
  if (actor) {
    actor.setProfile(command.parameters[1]);
  }
  return true;
};
