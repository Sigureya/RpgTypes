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
): void => {
  screen.startTint(command.parameters[0], command.parameters[1]);
};

export const commandFlashScreen = (
  command: Command_FlashScreen,
  screen: Rmmz_Screen,
): void => {
  screen.startFlash(command.parameters[0], command.parameters[1]);
};

export const commandShakeScreen = (
  command: Command_ShakeScreen,
  screen: Rmmz_Screen,
): void => {
  screen.startShake(
    command.parameters[0],
    command.parameters[1],
    command.parameters[2],
  );
};

export const commandSetWeatherEffect = (
  command: Command_SetWeatherEffect,
  screen: Rmmz_Screen,
): void => {
  screen.changeWeather(
    command.parameters[0],
    command.parameters[1],
    command.parameters[2],
  );
};
