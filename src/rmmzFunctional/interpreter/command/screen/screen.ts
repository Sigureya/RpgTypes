import type {
  Command_FlashScreen,
  Command_SetWeatherEffect,
  Command_ShakeScreen,
  Command_TintScreen,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Screen } from "@RpgTypes/rmmzRuntime/objects/core/screeen";

export const commandTintScreen = (
  command: Command_TintScreen,
  screen: Rmmz_Screen,
): boolean => {
  screen.startTint(command.parameters[0], command.parameters[1]);
  return true;
};

export const commandFlashScreen = (
  command: Command_FlashScreen,
  screen: Rmmz_Screen,
): boolean => {
  screen.startFlash(command.parameters[0], command.parameters[1]);
  return true;
};

export const commandShakeScreen = (
  command: Command_ShakeScreen,
  screen: Rmmz_Screen,
): boolean => {
  screen.startShake(
    command.parameters[0],
    command.parameters[1],
    command.parameters[2],
  );
  return true;
};

export const commandSetWeatherEffect = (
  command: Command_SetWeatherEffect,
  screen: Rmmz_Screen,
): boolean => {
  screen.changeWeather(
    command.parameters[0],
    command.parameters[1],
    command.parameters[2],
  );
  return true;
};
