export interface SystemKinds {
  gameTitle: string;
  currencyUnit: string;
  equipTypes: string;
  armorTypes: string;
  weaponTypes: string;
  elements: string;
  skillTypes: string;
}

export interface ExtractedSystemKinds<UUID> {
  filename: string;
  id: number;
  baseText: string;
  uuid: UUID;
  kind: string;
  dataKey: string & keyof SystemKinds;
}
