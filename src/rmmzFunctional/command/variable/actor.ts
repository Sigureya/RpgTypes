import type { Command_ControlVariables_FromActor } from "@RpgTypes/rmmz/eventCommand";
import type { ParamID } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor } from "@RpgTypes/rmmzRuntime";

interface Provider {
  gameActor(actorId: number): Rmmz_Actor | null | undefined;
}

export const variableFromActor = (
  command: Command_ControlVariables_FromActor,
  fallback: number,
  provider: Provider,
): number => {
  const actor = provider.gameActor(command.parameters[5]);
  if (!actor) {
    return fallback;
  }

  const mode: number = command.parameters[6];
  if (mode >= 4 && mode <= 11) {
    const paramId: number = mode - 4;
    return actor.param(paramId as ParamID);
  }

  switch (mode) {
    case 0:
      return actor.level;
    case 1:
      return actor.currentExp();
    case 2:
      return actor.hp;
    case 3:
      return actor.mp;
    case 12:
      return actor.tp;
  }

  return fallback;
};
