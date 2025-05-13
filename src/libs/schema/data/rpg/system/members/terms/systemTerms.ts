import type { Terms_BasicArray } from "./basic";
import type { Terms_CommandArray } from "./commands";
import type { Terms_Messages } from "./messages";

export interface System_Terms {
  messages: Terms_Messages;
  commands: Terms_CommandArray;
  params: Terms_ParamNamesArray;
  basic: Terms_BasicArray;
}

export type Terms_ParamNamesArray = [
  mhp: string,
  mmp: string,
  atk: string,
  def: string,
  mat: string,
  mdf: string,
  agi: string,
  luk: string,
  hit: string,
  eva: string
];
