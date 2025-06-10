export interface System_DataNames {
  weaponTypes: string[];
  skillTypes: string[];
  elements: string[];
  variables: string[];
  equipTypes: string[];
  switches: string[];
  armorTypes: string[];
}

export type SystemLabel_DataNames = Record<
  keyof System_DataNames,
  { format: string; domainName: string }
>;
