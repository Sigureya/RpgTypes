import type { ColorRGBA } from "@RpgTypes/libs";
import type {
  FLASH_SCREEN,
  SHAKE_SCREEN,
  TINT_SCREEN,
} from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";

export interface Command_TintScreen
  extends EventCommandLike2<typeof TINT_SCREEN> {
  parameters: [color: ColorRGBA, duration: number, wait: boolean];
}

export interface Command_FlashScreen
  extends EventCommandLike2<typeof FLASH_SCREEN> {
  parameters: [color: ColorRGBA, duration: number, wait: boolean];
}

export interface Command_ShakeScreen
  extends EventCommandLike2<typeof SHAKE_SCREEN> {
  parameters: [power: number, speed: number, duration: number, wait: boolean];
}
