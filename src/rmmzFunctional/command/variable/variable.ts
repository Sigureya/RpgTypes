import type {
  Command_ControlVariables,
  ParamArray_Variable_FromGameData,
} from "@RpgTypes/rmmz/eventCommand";
import {
  variableFromLiteral,
  variableFromRandom,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_SystemCounter,
  Rmmz_Temp,
  Rmmz_Timer,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import {
  variableFromActor,
  variableFromEnemy,
  variableFromMapCharactor,
} from "./battler";
import { variableFromLastData, variableFromOther } from "./other";
import {
  variableFromItem,
  variableFromArmor,
  variableFromWeapon,
  variableFromParty,
} from "./party";
import type {
  Rmmz_VariabeSourceParty,
  Rmmz_VariableSourceProvider,
} from "./types";

export const variableFromCommand = (
  { parameters }: Command_ControlVariables,
  provider: Rmmz_VariableSourceProvider,
  variables: Rmmz_Variables,
  temp: Rmmz_Temp,
  map: Rmmz_MapId,
  party: Rmmz_VariabeSourceParty,
  system: Rmmz_SystemCounter,
  timer: Rmmz_Timer,
  fallback: number = 0,
): number => {
  switch (parameters[3]) {
    case 0:
      return variableFromLiteral(parameters);
    case 1:
      return variables.value(parameters[4]);
    case 2:
      return variableFromRandom(parameters, (min, max) =>
        provider.random(min, max),
      );
  }
  // 長いのでここはifで分岐する
  if (parameters[3] === 3) {
    return variableFromGameData(
      parameters,
      provider,
      temp,
      map,
      party,
      system,
      timer,
      fallback,
    );
  }
  return fallback;
};

export const variableFromGameData = (
  params: ParamArray_Variable_FromGameData,
  provider: Rmmz_VariableSourceProvider,
  temp: Rmmz_Temp,
  map: Rmmz_MapId,
  party: Rmmz_VariabeSourceParty,
  system: Rmmz_SystemCounter,
  timer: Rmmz_Timer,
  fallback: number = 0,
): number => {
  switch (params[4]) {
    case 0:
      return variableFromItem(params, party, provider);
    case 1:
      return variableFromWeapon(params, party, provider);
    case 2:
      return variableFromArmor(params, party, provider);
    case 3:
      return variableFromActor(params, fallback, provider);
    case 4:
      return variableFromEnemy(params, fallback, provider);
    case 5:
      return variableFromMapCharactor(params, fallback, provider);
    case 6:
      return variableFromParty(params, party);
    case 7:
      return variableFromOther(params, map, party, system, timer, fallback);
    case 8:
      return variableFromLastData(params, temp);
  }
  // 不正データで到達する恐れがあるので、fallbackを返す
  return fallback;
};
