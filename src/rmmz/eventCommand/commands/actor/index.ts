export type {
  CommandUnion_ChangeActorText,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
  ParamArray_ChangeActorText,
  ParamObject_ChangeActorName,
  ParamObject_ChangeActorNickName,
} from "./changeText/types";
export type {
  Command_ChangeActorImages,
  ParamArray_ChangeActorImages,
  ParamObject_ChangeActorImages,
} from "./changeImages/types";
export {
  Command_ChangeActorLevel,
  ParamArray_ChangeActorLevel,
} from "./changeLevel/types";
export {
  Command_ChangeActorState,
  ParamArray_ChangeActorState,
} from "./changeState/types";

export type {
  Command_ChangeClaass,
  ParamArray_ChangeClass,
} from "./changeClass/types";
export type {
  Command_ChangeExp,
  ParamArray_ChangeExp,
} from "./changeExp/types";
export {
  Command_ChangeSkill,
  ParamArray_ChangeSkill,
} from "./changeSkill/types";
export type {
  Command_NameInputProcessing,
  ParamArray_NameInputProcessing,
} from "./nameInput/types";

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
