/* eslint-disable @functional/no-return-void */
import type {
  Command_ChangeActorHP,
  Command_ChangeActorLevel,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  Command_ChangeExp,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Provider_Target,
  Rmmz_Actor,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { operateValue, resolveTargets } from "@RpgTypes/rmmzRuntime";

export const commandChangeActorHp = (
  command: Command_ChangeActorHP,
  provider: Provider_Target<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, provider, variables, (actor, value) => {
    actor.gainHp(value, command.parameters[5]);
  });
};

export const commandChangeActorMp = (
  command: Command_ChangeActorMP,
  provider: Provider_Target<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, provider, variables, (actor, value) => {
    actor.gainMp(value);
  });
};

export const commandChangeActorTp = (
  command: Command_ChangeActorTP,
  provider: Provider_Target<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, provider, variables, (actor, value) => {
    actor.gainTp(value);
  });
};

export const commandChangeActorExp = (
  command: Command_ChangeExp,
  provider: Provider_Target<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, provider, variables, (actor, value) => {
    const current = actor.currentExp();
    actor.changeExp(current + value, command.parameters[5]);
  });
};

export const commandChangeActorLevel = (
  command: Command_ChangeActorLevel,
  provider: Provider_Target<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, provider, variables, (actor, value) => {
    const current = actor.level;
    actor.changeLevel(current + value, command.parameters[5]);
  });
};

const cmdx = (
  command:
    | Command_ChangeActorHP
    | Command_ChangeActorMP
    | Command_ChangeActorTP
    | Command_ChangeExp
    | Command_ChangeActorLevel,
  provider: Provider_Target<Rmmz_Actor>,
  variables: Rmmz_Variables,
  callBack: (actor: Rmmz_Actor, value: number) => void,
): void => {
  const targets = resolveTargets(
    command.parameters[0],
    command.parameters[1],
    provider,
    variables,
  );
  if (targets.length === 0) {
    return;
  }
  const value = resolveCommandValueByActor(command, variables);
  targets.forEach((actor) => {
    callBack(actor, value);
  });
};

const resolveCommandValueByActor = (
  {
    parameters,
  }:
    | Command_ChangeActorHP
    | Command_ChangeActorMP
    | Command_ChangeActorTP
    | Command_ChangeExp
    | Command_ChangeActorLevel,
  variables: Rmmz_Variables,
): number => {
  return operateValue(variables, parameters[2], parameters[3], parameters[4]);
};
