import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_ActorTexts,
} from "@RpgTypes/rmmzRuntime";

export const commandChangeActorName = (
  { parameters }: Command_ChangeActorName,
  provider: Rmmz_ActorsReadonly<Rmmz_ActorTexts>,
): void => {
  const actor = provider.actor(parameters[0]);
  if (actor) {
    actor.setName(parameters[1]);
  }
};

export const commandChangeActorNickName = (
  command: Command_ChangeActorNickName,
  provider: Rmmz_ActorsReadonly<Rmmz_ActorTexts>,
): void => {
  const actor = provider.actor(command.parameters[0]);
  if (actor) {
    actor.setNickname(command.parameters[1]);
  }
};

export const commandChangeActorProfile = (
  command: Command_ChangeActorProfile,
  provider: Rmmz_ActorsReadonly<Rmmz_ActorTexts>,
): void => {
  const actor = provider.actor(command.parameters[0]);
  if (actor) {
    actor.setProfile(command.parameters[1]);
  }
};
