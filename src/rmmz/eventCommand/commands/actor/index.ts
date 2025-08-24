export * from "./changeImages/make";
export type {
  CommandUnion_ChangeActorText,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
  ParamArray_ChangeActorText,
  ParamObject_ChangeActorName,
  ParamObject_ChangeActorNickName,
} from "./changeText/types";
export {
  makeCommandChangeActorName,
  makeCommandChangeActorNickName,
  makeCommandChangeActorProfile,
} from "./changeText/make";
export {
  makeCommandGainActorHP,
  makeCommandGainActorMP,
  makeCommandGainActorTP,
  makeCommandLoseActorHP,
  makeCommandLoseActorMP,
  makeCommandLoseActorTP,
} from "./changeValues/changeValues";
