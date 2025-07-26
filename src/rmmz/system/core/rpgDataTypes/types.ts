import type { DomainName } from "src/libs";

export interface System_RPG_DataNames {
  weaponTypes: string[];
  skillTypes: string[];
  elements: string[];
  variables: string[];
  equipTypes: string[];
  switches: string[];
  armorTypes: string[];
}

export interface SystemLabel_DataNames extends DomainName {
  title: string;
  format: string;
  options: Record<keyof System_RPG_DataNames, string>;
}
