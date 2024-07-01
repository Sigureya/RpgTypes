import { Game_Actor } from "../object";

export interface ColorManager {
  textColor(n: number): string;
  normalColor(): string;
  systemColor(): string;
  crisisColor(): string;
  deathColor(): string;
  gaugeBackColor(): string;
  hpGaugeColor1(): string;
  hpGaugeColor2(): string;
  mpGaugeColor1(): string;
  mpGaugeColor2(): string;
  mpCostColor(): string;
  powerUpColor(): string;
  powerDownColor(): string;
  ctGaugeColor1(): string;
  ctGaugeColor2(): string;
  tpGaugeColor1(): string;
  tpGaugeColor2(): string;
  tpCostColor(): string;
  pendingColor(): string;
  hpColor(actor: Game_Actor): string;
  mpColor(actor: Game_Actor): string;
  tpColor(actor: Game_Actor): string;
  paramchangeTextColor(change: number): string;
  damageColor(colorType: number): string;
  outlineColor(): string;
  dimColor1(): string;
  dimColor2(): string;
  itemBackColor1(): string;
  itemBackColor2(): string;
}