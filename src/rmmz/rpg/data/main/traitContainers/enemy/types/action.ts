export interface Enemy_Action {
  conditionParam1: number;
  conditionParam2: number;
  conditionType: number;
  skillId: number;
  rating: number;
}

export interface Enemy_Action_Base {
  skillId: number;
  rating: number;
}

export interface Enemy_Action_Turn extends Enemy_Action_Base {
  skillId: number;
  rating: number;
  turnA: number;
  turnB: number;
}
