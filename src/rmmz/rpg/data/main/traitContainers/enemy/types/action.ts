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
  turnStart: number;
  turnInterval: number;
}

export interface Enemy_Action_HpRate extends Enemy_Action_Base {
  hpRateA: number;
  hpRateB: number;
}

export interface Enemy_Action_MpRate extends Enemy_Action_Base {
  mpRateA: number;
  mpRateB: number;
}

export interface Enemy_Action_State extends Enemy_Action_Base {
  stateId: number;
}

export interface Enemy_Action_PartyLevel extends Enemy_Action_Base {
  partyLevel: number;
}

export interface Enemy_Action_Switch extends Enemy_Action_Base {
  switchId: number;
}
