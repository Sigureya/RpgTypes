import type { Rectangle } from "../window";

export declare class Scene_Name {
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
