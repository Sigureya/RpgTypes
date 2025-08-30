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
  Command_ChangeActorImages,
  ParamArray_ChangeActorImages,
  ParamObject_ChangeActorImages,
} from "./changeImages/types";
export type {
  Command_ChangeClaass,
  ParamArray_ChangeClass,
} from "./changeClass/types";
export type {
  Command_ChangeExp,
  ParamArray_ChangeExp,
} from "./changeExp/types";
export { makeCommandChangeActorImages } from "./changeImages/make";
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
