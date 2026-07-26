import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz/eventCommand";
import type { Provider_Target, Rmmz_Actor } from "@RpgTypes/rmmzRuntime";

export const commandChangeActorName = (
  { parameters }: Command_ChangeActorName,
  provider: Provider_Target<Rmmz_Actor>,
): boolean => {
  const actor = provider.gameActor(parameters[0]);
  if (actor) {
    actor.setName(parameters[1]);
  }
  return true;
};

export const commandChangeActorNickName = (
  command: Command_ChangeActorNickName,
  provider: Provider_Target<Rmmz_Actor>,
): boolean => {
  const actor = provider.gameActor(command.parameters[0]);
  if (actor) {
    actor.setNickname(command.parameters[1]);
  }
  return true;
};

export const commandChangeActorProfile = (
  command: Command_ChangeActorProfile,
  provider: Provider_Target<Rmmz_Actor>,
): boolean => {
  const actor = provider.gameActor(command.parameters[0]);
  if (actor) {
    actor.setProfile(command.parameters[1]);
  }
  return true;
};
