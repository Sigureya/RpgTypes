import type { AudioFileParams, ColorRGBA } from "@RpgTypes/libs";
import type { EventCode } from "../rpg";
import type {
  ParamArray_InputNumber,
  ParamArray_SetupChoice,
  ParamArray_ShowMessage,
  ParamArray_ChangeArmors,
  ParamArray_ChangeItems,
  ParamArray_ChangeWeapons,
  ParamArray_Comment,
  ParamArray_CommonEvent,
  ParamArray_ControlSwitches,
  ParamArray_ControlVariables,
  ParamArray_ScrollTextHeader,
  Command_ShopProcessingBody,
  Command_ShowMessageBody,
  Command_ScrollTextBody,
  Command_CommentBody,
  Command_CommentHeader,
  ParamArray_Label,
  ParamArray_SelfSwitch,
  ParamArray_ChangeEnabled,
  ParamArray_SetVehicleLocation,
  ExtractCommandByCode,
  ParamArray_SetEventLocation,
  ParamArray_ScrollMap,
  ParamArray_MovementRoute,
  ParamArray_ShowAnimation,
  ParamArray_ShowBalloonIcon,
} from "./commands";
import type { ParamArray_ChangeActorImages } from "./commands/actor/changeImages/types";
import type { ParamArray_ChangeActorHP } from "./commands/actor/changeValues/types";
import type { ParamArray_ControlTimer } from "./commands/controlTimer/types";
import type { BranchParameters } from "./commands/flow/branch/types/branchParams";
import type { ParamArray_SelectItem } from "./commands/item/select/types";
import type { ParamArray_TransferPlayer } from "./commands/mapPlayer/transferPlayer/types";
import type { ParamArray_ChangePartyMember } from "./commands/party/changeMember/types";
import type { ParamArray_ChangeTransparency } from "./commands/transparency/types";
import type { EventCommand } from "./commands/union";

type MainCommands = Exclude<EventCommand, Command_ShopProcessingBody>;

type XXXCommands =
  | Command_ShopProcessingBody
  | Command_ShowMessageBody
  | Command_ScrollTextBody
  | Command_CommentHeader
  | Command_CommentBody;

type CommandTypeAssert = {
  [K in Exclude<EventCode, 0 | XXXCommands["code"]> as `command${K}`]: Extract<
    MainCommands,
    { code: K }
  > extends undefined
    ? never
    : (param: Extract<MainCommands, { code: K }>["parameters"]) => boolean;
};

export interface EventCommandMapper extends CommandTypeAssert {
  command101: (param: ParamArray_ShowMessage) => boolean;
  command102: (param: ParamArray_SetupChoice) => boolean;
  command103: (param: ParamArray_InputNumber) => boolean;
  command104: (param: ParamArray_SelectItem) => boolean;
  command105: (param: ParamArray_ScrollTextHeader) => boolean;
  command108: (param: ParamArray_Comment) => boolean;
  command111: (param: BranchParameters) => boolean;
  command112: (params: []) => boolean;
  command113: (params: []) => boolean;
  command115: (params: []) => boolean;
  command117: (param: ParamArray_CommonEvent) => boolean;
  command118: (param: ParamArray_Label) => boolean;
  command119: (param: ParamArray_Label) => boolean;

  command121: (param: ParamArray_ControlSwitches) => boolean;
  command122: (param: ParamArray_ControlVariables) => boolean;
  command123: (param: ParamArray_SelfSwitch) => boolean;
  command124: (param: ParamArray_ControlTimer) => boolean;
  command126: (param: ParamArray_ChangeItems) => boolean;
  command127: (param: ParamArray_ChangeWeapons) => boolean;
  command128: (param: ParamArray_ChangeArmors) => boolean;
  command129: (param: ParamArray_ChangePartyMember) => boolean;

  command132: (params: [AudioFileParams]) => boolean;
  command133: (params: [AudioFileParams]) => boolean;
  command134: (params: ParamArray_ChangeEnabled) => boolean;
  command135: (params: ParamArray_ChangeEnabled) => boolean;
  command136: (params: ParamArray_ChangeEnabled) => boolean;
  command137: (params: ParamArray_ChangeEnabled) => boolean;
  command138: (params: [ColorRGBA]) => boolean;
  command139: (params: [AudioFileParams]) => boolean;
  command201: (param: ParamArray_TransferPlayer) => boolean;
  command202: (param: ParamArray_SetVehicleLocation) => boolean;
  command203: (params: ParamArray_SetEventLocation) => boolean;

  command204: (param: ParamArray_ScrollMap) => boolean;
  command205: (params: ParamArray_MovementRoute) => boolean;
  command206: (params: []) => boolean;
  command211: (params: ParamArray_ChangeTransparency) => boolean;
  command212: (params: ParamArray_ShowAnimation) => boolean;
  command213: (params: ParamArray_ShowBalloonIcon) => boolean;

  command311: (param: ParamArray_ChangeActorHP) => boolean;
  command322: (param: ParamArray_ChangeActorImages) => boolean;
}

// const ee: ExtractCommandByCode<213> = {};

const xx2: Partial<CommandTypeAssert> = {
  command101: (param) => true,
  command129: (param) => true,

  command201: (param) => true,
  command204: (param) => true,
  // command203
  // command111,
};
