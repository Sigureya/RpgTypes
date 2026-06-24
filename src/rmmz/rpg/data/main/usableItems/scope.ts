import type { Data_UsableItem } from "./core/usableItem";

export const SCOPE_TARGET_OPPONENT = 1 as const;
export const SCOPE_EACH_OPPONENT = 2 as const;
export const SCOPE_RANDOM_OPPONENT_1 = 3 as const;
export const SCOPE_RANDOM_OPPONENT_2 = 4 as const;
export const SCOPE_RANDOM_OPPONENT_3 = 5 as const;
export const SCOPE_RANDOM_OPPONENT_4 = 6 as const;
export const SCOPE_TARGET_ALIVE_FRIEND = 7 as const;
export const SCOPE_EACH_ALIVE_FRIEND = 8 as const;

export const SCOPE_TARGET_DEAD_FRIEND = 9 as const;
export const SCOPE_EACH_DEAD_FRIEND = 10 as const;
export const SCOPE_SELF = 11 as const;
export const SCOPE_TARGET_FRIEND = 12 as const;
export const SCOPE_EACH_FRIEND = 13 as const;
export const SCOPE_EACH = 14 as const;

export const scopeForUser = (item: Data_UsableItem): boolean => {
  return item.scope === SCOPE_SELF;
};

export const scopeIsForOne = ({ scope }: Data_UsableItem): boolean => {
  return (
    scope === SCOPE_TARGET_OPPONENT ||
    scope === SCOPE_TARGET_ALIVE_FRIEND ||
    scope === SCOPE_TARGET_DEAD_FRIEND ||
    scope === SCOPE_TARGET_FRIEND ||
    scope === SCOPE_RANDOM_OPPONENT_1
  );
};

export const scopeNeedsSelection = ({ scope }: Data_UsableItem): boolean => {
  return (
    scope === SCOPE_TARGET_OPPONENT ||
    scope === SCOPE_TARGET_ALIVE_FRIEND ||
    scope === SCOPE_TARGET_DEAD_FRIEND ||
    scope === SCOPE_TARGET_FRIEND
  );
};

export const scopeIsForOpponent = ({ scope }: Data_UsableItem): boolean => {
  return (
    scope === SCOPE_TARGET_OPPONENT ||
    scope === SCOPE_EACH_OPPONENT ||
    scope === SCOPE_RANDOM_OPPONENT_1 ||
    scope === SCOPE_RANDOM_OPPONENT_2 ||
    scope === SCOPE_RANDOM_OPPONENT_3 ||
    scope === SCOPE_RANDOM_OPPONENT_4 ||
    scope === SCOPE_EACH
  );
};

export const scopeIsForFriend = ({ scope }: Data_UsableItem): boolean => {
  return (
    scope === SCOPE_TARGET_ALIVE_FRIEND ||
    scope === SCOPE_EACH_ALIVE_FRIEND ||
    scope === SCOPE_TARGET_DEAD_FRIEND ||
    scope === SCOPE_EACH_DEAD_FRIEND ||
    scope === SCOPE_TARGET_FRIEND ||
    scope === SCOPE_EACH_FRIEND ||
    scope === SCOPE_EACH
  );
};

export const scopeIsForDeadFriend = ({ scope }: Data_UsableItem): boolean => {
  return scope === SCOPE_TARGET_DEAD_FRIEND || scope === SCOPE_EACH_DEAD_FRIEND;
};

export const scopeIsForAliveFriend = ({ scope }: Data_UsableItem): boolean => {
  return (
    scope === SCOPE_TARGET_ALIVE_FRIEND ||
    scope === SCOPE_EACH_ALIVE_FRIEND ||
    scope === SCOPE_EACH
  );
};

export const scopeIsForEveryone = ({ scope }: Data_UsableItem): boolean => {
  return scope === SCOPE_EACH;
};
