import type { SystemTexts } from "@RpgTypes/rmmz";
import validate from "./termsValidate";

export const isSystemTexts = (value: unknown): value is SystemTexts => {
  return validate(value);
};
