import type { CommandParameter } from "@RpgTypes/rmmz";

export interface ImageCommandParameter extends CommandParameter<string> {
  dir: string;
}
