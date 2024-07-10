import {
  Data_CommonEvent,
  AnimationRequest,
  BallonRequest,
  AnimationTarget,
} from "src/schema";
import { Game_Character } from "./Game_Character";
import { LAST_ACTION_TYPES } from "./constant/gameTemp";
import { Game_Battler } from "./Game_Battler";

export declare class Game_Temp {
  _isPlaytest: boolean;
  _destinationX: null | number;
  _destinationY: null | number;
  _touchTarget: null | Game_Battler;
  _touchState: string;
  _needsBattleRefresh: boolean;
  _lastActionData: number[];
  _commonEventQueue: number[];
  _animationQueue: AnimationRequest<AnimationTarget>[];
  _balloonQueue: BallonRequest[];
  constructor();
  initialize(): void;
  isPlaytest(): boolean;
  setDestination(x: number, y: number): void;
  clearDestination(): void;
  isDestinationValid(): boolean;
  destinationX(): number | null;
  destinationY(): number | null;
  setTouchState(target: null, state: string): void;
  clearTouchState(): void;
  touchTarget(): Game_Battler | null;
  touchState(): string;
  requestBattleRefresh(): void;
  clearBattleRefreshRequest(): void;
  isBattleRefreshRequested(): boolean;
  reserveCommonEvent(commonEventId: number): void;
  retrieveCommonEvent(): Data_CommonEvent;
  clearCommonEventReservation(): void;
  isCommonEventReserved(): boolean;
  requestAnimation(
    targets: AnimationTarget[],
    animationId: number,
    mirror?: boolean
  ): void;

  retrieveAnimation(): AnimationRequest<AnimationTarget> | undefined;
  requestBalloon(target: Game_Character, balloonId: number): void;
  retrieveBalloon(): BallonRequest | undefined;
  lastActionData(type: LAST_ACTION_TYPES): number;
  setLastActionData(type: LAST_ACTION_TYPES, value: number): void;
  setLastUsedSkillId(skillID: number): void;
  setLastUsedItemId(itemID: number): void;
  setLastSubjectActorId(actorID: number): void;
  setLastSubjectEnemyIndex(enemyIndex: number): void;
  setLastTargetActorId(actorID: number): void;
  setLastTargetEnemyIndex(enemyIndex: number): void;
}
