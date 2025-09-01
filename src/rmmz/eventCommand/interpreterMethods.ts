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
  ParamArray_SetEventLocation,
  ParamArray_ScrollMap,
  ParamArray_MovementRoute,
  ParamArray_ShowAnimation,
  ParamArray_ShowBalloonIcon,
  ParamArray_EraseEvent,
  ParamArray_TintScreen,
  ParamArray_Wait,
  ParamsArray_ShowPicture,
  ParamsArray_MovePicture,
  ParamArray_RotatePicture,
  ParamArray_TintPicture,
  ParamArray_WeatherEffect,
  ParamArray_FadeOutAudio,
  ParamArray_PlayMovie,
  ParamArray_GetLocationInfo,
  ParamArray_ChangeBattleBackground,
  ParamArray_ChangeParallax,
  ParamArray_BattleProcessing,
  ParamArray_ShopProcessing,
  ParamArray_ChangeActorState,
  ParamArray_ChangeExp,
  ParamArray_ChangeSkill,
  ParamArray_ChangeClass,
  ParamArray_ChangeVehicleImage,
  ParamArray_ChangeActorText,
  ParamArray_ChangeEnemyParameters,
  ParamArray_EnemyTransfrom,
  ParamArray_EnemyAppear,
  ParamArray_Script,
  ParamArray_PluginCommandMV,
  Command_ShowChoiceWhen,
  ParamArray_BranchElse,
  ParamArray_NameInputProcessing,
  ParamArray_ChangeGold,
  ParamArray_ChangeVehicleBGM,
} from "./commands";
import type { ParamArray_ChangeActorImages } from "./commands/actor/changeImages/types";
import type { ParamArray_ChangeActorLevel } from "./commands/actor/changeLevel/types";
import type { ParamArray_ChangeParam } from "./commands/actor/changeParam/types";
import type {
  ParamArray_ChangeActorHP,
  ParamArray_ChangeActorMP,
  ParamArray_ChangeActorTP,
} from "./commands/actor/changeValues/types";
import type { ParamArray_ShowBattleAnimation } from "./commands/battle/showAnimation/types";
import type { ParamArray_ControlTimer } from "./commands/controlTimer/types";
import type { ParamArray_EnemyRecoverAll } from "./commands/enemy/recoverAll/types";
import type { ParamArray_ChangeEnemyState } from "./commands/enemy/state/types";
import type { BranchParameters } from "./commands/flow/branch/types/branchParams";
import type { ParamArray_SelectItem } from "./commands/item/select/types";
import type { ParamArray_ChangeMapNameDisplay } from "./commands/map/changeMapNameDisplay/types";
import type { ParamArray_ChangePlayerFollowers } from "./commands/mapFollwer/types";
import type { ParamArray_TransferPlayer } from "./commands/mapPlayer/transferPlayer/types";
import type { ParamArray_OpenMenu } from "./commands/menu/open/types";
import type { ParamArray_PluginCommandMZ } from "./commands/mz";
import type { ParamArray_ChangePartyMember } from "./commands/party/changeMember/types";
import type { ParamArray_RecoverAll } from "./commands/party/types/recoverAll";
import type { ParamArray_ErasePicture } from "./commands/picture/erase/types";
import type { ParamArray_ShakeScreen } from "./commands/screen/shake/types";
import type { ParamArray_ChangeTileset } from "./commands/tileset/types";
import type { ParamArray_ChangeTransparency } from "./commands/transparency/types";
import type { EventCommand } from "./commands/union";

type SubCommands =
  | Command_ShopProcessingBody
  | Command_ShowMessageBody
  | Command_ScrollTextBody
  | Command_CommentHeader
  | Command_CommentBody
  | Command_ShopProcessingBody
  | Command_ShowChoiceWhen;

type CommandTypeAssert = {
  [K in Exclude<
    EventCode,
    0 | SubCommands["code"] | 655
  > as `command${K}`]: Extract<EventCommand, { code: K }> extends undefined
    ? never
    : (params: Extract<EventCommand, { code: K }>["parameters"]) => boolean;
};

export interface InterpreterMapper extends CommandTypeAssert {
  command101: (showMessage: ParamArray_ShowMessage) => boolean;
  command102: (setupChoice: ParamArray_SetupChoice) => boolean;
  command103: (params: ParamArray_InputNumber) => boolean;
  command104: (params: ParamArray_SelectItem) => boolean;
  command105: (params: ParamArray_ScrollTextHeader) => boolean;
  command108: (params: ParamArray_Comment) => boolean;
  command109: (skip: []) => boolean;
  command111: (params: BranchParameters) => boolean;
  command112: (params: []) => boolean;
  command113: (params: []) => boolean;
  command115: (params: []) => boolean;
  command117: (params: ParamArray_CommonEvent) => boolean;
  command118: (params: ParamArray_Label) => boolean;
  command119: (params: ParamArray_Label) => boolean;

  command121: (params: ParamArray_ControlSwitches) => boolean;
  command122: (params: ParamArray_ControlVariables) => boolean;
  command123: (params: ParamArray_SelfSwitch) => boolean;
  command124: (params: ParamArray_ControlTimer) => boolean;
  command125: (params: ParamArray_ChangeGold) => boolean;
  command126: (params: ParamArray_ChangeItems) => boolean;
  command127: (params: ParamArray_ChangeWeapons) => boolean;
  command128: (params: ParamArray_ChangeArmors) => boolean;
  command129: (params: ParamArray_ChangePartyMember) => boolean;

  command132: (params: [AudioFileParams]) => boolean;
  command133: (params: [AudioFileParams]) => boolean;
  command134: (params: ParamArray_ChangeEnabled) => boolean;
  command135: (params: ParamArray_ChangeEnabled) => boolean;
  command136: (params: ParamArray_ChangeEnabled) => boolean;
  command137: (params: ParamArray_ChangeEnabled) => boolean;
  command138: (params: [ColorRGBA]) => boolean;
  command139: (params: [AudioFileParams]) => boolean;
  command140: (params: ParamArray_ChangeVehicleBGM) => boolean;
  command201: (params: ParamArray_TransferPlayer) => boolean;
  command202: (params: ParamArray_SetVehicleLocation) => boolean;
  command203: (params: ParamArray_SetEventLocation) => boolean;

  command204: (params: ParamArray_ScrollMap) => boolean;
  command205: (params: ParamArray_MovementRoute) => boolean;
  command206: (params: []) => boolean;

  command211: (params: ParamArray_ChangeTransparency) => boolean;
  command212: (params: ParamArray_ShowAnimation) => boolean;
  command213: (params: ParamArray_ShowBalloonIcon) => boolean;
  command214: (params: ParamArray_EraseEvent) => boolean;
  command216: (params: ParamArray_ChangePlayerFollowers) => boolean;
  command217: (params: []) => boolean;

  command221: (fadeoutScreen: []) => boolean;
  command222: (fadeinScreen: []) => boolean;
  command223: (params: ParamArray_TintScreen) => boolean;
  command224: (params: ParamArray_TintScreen) => boolean;
  command225: (params: ParamArray_ShakeScreen) => boolean;

  command230: (params: ParamArray_Wait) => boolean;
  command231: (params: ParamsArray_ShowPicture) => boolean;
  command232: (params: ParamsArray_MovePicture) => boolean;
  command233: (params: ParamArray_RotatePicture) => boolean;
  command234: (params: ParamArray_TintPicture) => boolean;
  command235: (params: ParamArray_ErasePicture) => boolean;
  command236: (params: ParamArray_WeatherEffect) => boolean;

  command241: (playBgm: [AudioFileParams]) => boolean;
  command242: (fadeoutBgm: ParamArray_FadeOutAudio) => boolean;
  command243: (params: []) => boolean;
  command244: (params: []) => boolean;
  command245: (params: [AudioFileParams]) => boolean;
  command246: (params: ParamArray_FadeOutAudio) => boolean;

  command249: (playME: [AudioFileParams]) => boolean;
  command250: (playSE: [AudioFileParams]) => boolean;
  command251: (stopSE: []) => boolean;
  command261: (playMove: ParamArray_PlayMovie) => boolean;

  command281: (params: ParamArray_ChangeMapNameDisplay) => boolean;
  command282: (params: ParamArray_ChangeTileset) => boolean;
  command283: (params: ParamArray_ChangeBattleBackground) => boolean;
  command284: (params: ParamArray_ChangeParallax) => boolean;
  command285: (params: ParamArray_GetLocationInfo) => boolean;

  command301: (params: ParamArray_BattleProcessing) => boolean;
  command302: (params: ParamArray_ShopProcessing) => boolean;
  command303: (params: ParamArray_NameInputProcessing) => boolean;
  command311: (params: ParamArray_ChangeActorHP) => boolean;
  command312: (changeMP: ParamArray_ChangeActorMP) => boolean;
  command326: (changeTP: ParamArray_ChangeActorTP) => boolean;
  command313: (params: ParamArray_ChangeActorState) => boolean;
  command314: (params: ParamArray_RecoverAll) => boolean;
  command315: (params: ParamArray_ChangeExp) => boolean;
  command316: (changeLevel: ParamArray_ChangeActorLevel) => boolean;
  command317: (params: ParamArray_ChangeParam) => boolean;
  command318: (params: ParamArray_ChangeSkill) => boolean;
  command320: (params: [number, string]) => boolean;
  command321: (params: ParamArray_ChangeClass) => boolean;
  command322: (params: ParamArray_ChangeActorImages) => boolean;
  command323: (params: ParamArray_ChangeVehicleImage) => boolean;
  command324: (changeNickname: ParamArray_ChangeActorText) => boolean;
  command325: (changeProfile: ParamArray_ChangeActorText) => boolean;

  command331: (changeEnemyHP: ParamArray_ChangeEnemyParameters) => boolean;
  command332: (changeEnemyMP: ParamArray_ChangeEnemyParameters) => boolean;
  command343: (changeEnemyTP: ParamArray_ChangeEnemyParameters) => boolean;
  command333: (params: ParamArray_ChangeEnemyState) => boolean;
  command334: (params: ParamArray_EnemyRecoverAll) => boolean;
  command335: (param: ParamArray_EnemyAppear) => boolean;
  command336: (params: ParamArray_EnemyTransfrom) => boolean;
  command337: (params: ParamArray_ShowBattleAnimation) => boolean;
  command340: (abortBattle: []) => boolean;
  command342: (params: ParamArray_ChangeEnemyParameters) => boolean;
  command351: (params: ParamArray_OpenMenu) => boolean;
  command352: (openSaveScreen: []) => boolean;
  command353: (gameOver: []) => boolean;
  command354: (returnToTitleScreen: []) => boolean;
  command355: (params: ParamArray_Script) => boolean;
  command356: (params: ParamArray_PluginCommandMV) => boolean;
  command357: (params: ParamArray_PluginCommandMZ) => boolean;

  command411: (params: ParamArray_BranchElse) => boolean;
}
