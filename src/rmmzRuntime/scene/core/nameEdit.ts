import type { Rectangle } from "@RpgTypes/libs";

export interface Rmmz_Scene_Name {
  initialize(): void;
  prepare(actorId: number, maxLength: number): void;
  create(): void;
  start(): void;
  createEditWindow(): void;
  editWindowRect(): Rectangle;
  createInputWindow(): void;
  inputWindowRect(): Rectangle;
  onInputOk(): void;
}
