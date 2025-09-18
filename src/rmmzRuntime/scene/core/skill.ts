import type { Rectangle } from "@RpgTypes/libs";

export interface Rmmz_Scene_Skill<Actor> {
  createSkillTypeWindow(): void;
  skillTypeWindowRect(): Rectangle;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createItemWindow(): void;
  itemWindowRect(): Rectangle;
  needsPageButtons(): boolean;
  arePageButtonsEnabled(): boolean;
  refreshActor(): void;
  user(): Actor;
  commandSkill(): void;
  onItemOk(): void;
  onItemCancel(): void;
  playSeForItem(): void;
  useItem(): void;
  onActorChange(): void;
}
