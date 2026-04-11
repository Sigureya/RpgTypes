import type {
  MoveCommand_Direction,
  MoveCommand_Move,
} from "./nonParamCommnads";
import type {
  MoveRouteCommand_ChangeBlendMode,
  MoveRouteCommand_ChangeImage,
  MoveRouteCommand_ChangeOpacity,
  MoveRouteCommand_ChangeSpeed,
  MoveRouteCommand_ChangeFrequency,
  MoveRouteCommand_Jump,
  MoveRouteCommand_SwitchOff,
  MoveRouteCommand_SwitchOn,
  MoveRouteCommand_Wait,
  MoveRouteCommand_Script,
} from "./paramedCommands";

export type MoveRouteCommandBasic =
  | MoveCommand_Move
  | MoveCommand_Direction
  | MoveRouteCommand_ChangeBlendMode
  | MoveRouteCommand_ChangeImage
  | MoveRouteCommand_ChangeOpacity
  | MoveRouteCommand_ChangeSpeed
  | MoveRouteCommand_ChangeFrequency
  | MoveRouteCommand_Jump
  | MoveRouteCommand_SwitchOff
  | MoveRouteCommand_SwitchOn
  | MoveRouteCommand_Wait
  | MoveRouteCommand_Script;
