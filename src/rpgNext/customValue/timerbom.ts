import type { ActionHandlers } from "./customValue";

interface TimerBombState {
  damage: number;
  startTurn: number;
  mpx: number;
}

interface TimerBombArg {
  bomb: boolean;
}

const createTimerBombHandlers = (): Partial<
  ActionHandlers<TimerBombArg, TimerBombState>
> => {
  return {
    canUse: (data, context) => {
      return true;
    },
    additionalCost: (data, context) => {
      return [];
    },
    additionalEffects: (data, context) => {
      return [];
    },
  };
};
