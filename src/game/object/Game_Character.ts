import type { Game_CharacterBase } from "./Game_CharacterBase";
import type {
  IDisplayableCharacter,
  MoveRouteCommand,
} from "./types/interface/character";
import type { IMoveRouteExecter } from "./types/interface/character/moveRouteCharacter";

export declare class Game_Character
  extends Game_CharacterBase
  implements IDisplayableCharacter, IMoveRouteExecter
{
  processRouteEnd(): void;
  moveRandom(): void;
  moveTowardPlayer(): void;
  moveAwayFromPlayer(): void;
  moveForward(): void;
  moveBackward(): void;
  turnRight90(): void;
  turnLeft90(): void;
  turn180(): void;
  turnRandom(): void;
  turnTowardPlayer(): void;
  turnAwayFromPlayer(): void;
  memorizeMoveRoute(): void;
  restoreMoveRoute(): void;
  isMoveRouteForcing(): boolean;
  processMoveCommand(command: MoveRouteCommand): void;
}
