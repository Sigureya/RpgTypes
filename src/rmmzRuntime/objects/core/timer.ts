export interface Rmmz_Timer {
  start(count: number): void;
  stop(): void;
  isWorking(): boolean;
  seconds(): number;
  frames(): number;
}
