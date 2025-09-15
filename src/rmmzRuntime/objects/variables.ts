import type { Rmmz_Variables } from "./core/variables";

export declare class Game_Variables implements Rmmz_Variables {
  clear(): void;
  value(id: number): number;
  setValue(id: number, value: number): void;
  onChange(): void;
  _data: (number | string)[];
}
