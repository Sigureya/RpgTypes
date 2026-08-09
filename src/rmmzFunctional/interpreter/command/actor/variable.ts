/* eslint-disable @functional/no-return-void */
import type {
  Command_ChangeActorHP,
  Command_ChangeActorLevel,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  Command_ChangeExp,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Provider_GameActor,
  Provider_Target,
  Rmmz_Actor,
  Rmmz_BattlerContainer_Readonly,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { operateValue } from "@RpgTypes/rmmzRuntime";

export const commandChangeActorHp = (
  command: Command_ChangeActorHP,
  provider: Provider_Target<Rmmz_Actor>,
  party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, party, provider, variables, (actor, value) => {
    actor.gainHp(value, command.parameters[5]);
  });
};

export const commandChangeActorMp = (
  command: Command_ChangeActorMP,
  provider: Provider_GameActor<Rmmz_Actor>,
  party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, party, provider, variables, (actor, value) => {
    actor.gainMp(value);
  });
};

export const commandChangeActorTp = (
  command: Command_ChangeActorTP,
  provider: Provider_Target<Rmmz_Actor>,
  party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, party, provider, variables, (actor, value) => {
    actor.gainTp(value);
  });
};

export const commandChangeActorExp = (
  command: Command_ChangeExp,
  provider: Provider_Target<Rmmz_Actor>,
  party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, party, provider, variables, (actor, value) => {
    const current = actor.currentExp();
    actor.changeExp(current + value, command.parameters[5]);
  });
};

export const commandChangeActorLevel = (
  command: Command_ChangeActorLevel,
  provider: Provider_Target<Rmmz_Actor>,
  party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>,
  variables: Rmmz_Variables,
) => {
  cmdx(command, party, provider, variables, (actor, value) => {
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
  party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>,
  provider: Provider_GameActor<Rmmz_Actor>,
  variables: Rmmz_Variables,
  callBack: (actor: Rmmz_Actor, value: number) => void,
): void => {
  const targets = resolveTargets(
    command.parameters[0],
    command.parameters[1],
    party,
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

const resolveTargets = <T>(
  param1: 0 | 1,
  param2: number,
  party: Rmmz_BattlerContainer_Readonly<T>,
  provider: Provider_GameActor<T>,
  variables: Rmmz_Variables,
): T[] => {
  if (param1 === 0) {
    return party.allMembers();
  }
  const actorId = variables.value(param2);
  return actorsById(provider, party, actorId);
};

const actorsById = <T>(
  provider: Provider_GameActor<T>,
  party: Rmmz_BattlerContainer_Readonly<T>,
  actorId: number,
): T[] => {
  if (actorId === 0) {
    return party.allMembers();
  }
  const actor = provider.gameActor(actorId);
  if (actor) {
    return [actor];
  }
  return [];
};
