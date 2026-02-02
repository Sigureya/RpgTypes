import type { Command_ChangeClaass } from "./actor/changeClass/types";
import type { Command_ChangeExp } from "./actor/changeExp/types";
import type { Command_ChangeActorImages } from "./actor/changeImages/types";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "./actor/changeText/types";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
} from "./actor/changeValues/types";
import type { Command_RecoverAll } from "./actor/recoverAll/types";
import type { Command_ShowAnimation } from "./animation/types";
import type {
  Command_FadeOutBGM,
  Command_FadeOutBGS,
  Command_ResumeBGM,
  Command_SaveBGM,
} from "./audio/other/types";
import type {
  Command_ChangeBattleBGM,
  Command_ChangeDefeatME,
  Command_ChangeVictoryME,
  Command_PlayBGM,
  Command_PlayBGS,
  Command_PlayME,
  Command_PlaySE,
} from "./audio/play/types";
import type { Command_StopSE } from "./audio/stop";
import type { Command_ShowBalloonIcon } from "./balloon/types";
import type { Command_ChangeBattleBackground } from "./battle/background/types";
import type { Command_BattleProcessing } from "./battle/battleProcessing/types";
import type { Command_ControlTimer } from "./controlTimer/types";
import type { Command_ChangeEncounter } from "./encounter/types";
import type {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
} from "./enemy/change/types";
import type { Command_ChangeEnemyState } from "./enemy/state/types";
import type { Command_EnemyTransform } from "./enemy/transform/types";
import type {
  Command_ConditionalBranch,
  Command_ConditionalBranchElse,
} from "./flow/branch/commandTypes";
import type { Command_CommonEvent } from "./flow/callCommonEvent";
import type { Command_ControlSwitches } from "./flow/controlSwtches";
import type { Command_ExitEventProcessing } from "./flow/exitEvent/types";
import type { Command_Label, Command_LabelJump } from "./flow/label/types";
import type { Command_Loop, Command_LoopBreak } from "./flow/loop/types";
import type { Command_ControlSelfSwitch } from "./flow/selfSwitch/types";
import type { Command_InputNumber } from "./inputNumber/types";
import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "./item/change";
import type { Command_SelectItem } from "./item/select/types";
import type { Command_ChangeParallax } from "./map/parallax/types";
import type { Command_ScrollMap } from "./map/scroll/types";
import type { Command_EraseEvent } from "./mapEvent/eraseEvent/types";
import type { Command_GetLocationInfo } from "./mapEvent/getLocationInfo/types";
import type { Command_SetEventLocation } from "./mapEvent/setLocation/types";
import type { Command_ChangePlayerFollowers } from "./mapFollwer/types";
import type { Command_TransferPlayer } from "./mapPlayer/transferPlayer/types";
import type { Command_OpenSaveScreen } from "./menu/save/types";
import type {
  Command_ChangeFormationAccess,
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
} from "./menu/types";
import type {
  Command_CommentBody,
  Command_CommentHeader,
} from "./message/comment/types";
import type {
  Command_ScrollTextBody,
  Command_ScrollTextHeader,
} from "./message/scrollText";
import type {
  Command_ShowChoiceWhen,
  Command_ShowChoices,
} from "./message/setupChoice";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "./message/showMessage";
import type { Command_SetMovementRoute } from "./movementRoute/command";
import type { Command_PlayMovie } from "./movie/types";
import type { Command_PluginCommandMV } from "./mv/pluginCommandMV";
import type {
  Command_GameOver,
  Command_GatherFollowers,
  Command_ReturnToTitleScreen,
} from "./nonParam/types";
import type { Command_NoOperation } from "./noOperation";
import type { Command_ChangeGold, Command_ChangePartyMember } from "./party";
import type {
  Command_MovePicture,
  Command_RotatePicture,
  Command_ShowPicture,
  Command_TintPicture,
} from "./picture";
import type { Command_ErasePicture } from "./picture/erase/types";
import type {
  Command_FlashScreen,
  Command_TintScreen,
  Command_FadeOutScreen,
  Command_ShakeScreen,
  Command_SetWeatherEffect,
  Command_FadeInScreen,
} from "./screen/types";
import type { Command_ScriptBody, Command_ScriptHeader } from "./script/types";
import type {
  Command_ShopProcessing,
  Command_ShopProcessingBody,
} from "./shop/types";
import type { Command_Skip } from "./skip/types";
import type { Command_ChangeTileset } from "./tileset/types";
import type { Command_ChangeTransparency } from "./transparency";
import type { Command_ControlVariables } from "./variable";
import type {
  Command_ChangeVehicleBGM,
  Command_ChangeVehicleImage,
  Command_SetVehicleLocation,
  Command_GetOnOffVehicle,
} from "./vehicle";
import type { Command_Wait } from "./wait/types";
import type { Command_ChangeWindowColor } from "./window/changeWindowColor/types";

export interface EventCommandTable {
  noOperation: Command_NoOperation;
  showMessage: Command_ShowMessageHeader;
  showChoices: Command_ShowChoices;
  showChoicesItem: Command_ShowChoiceWhen;
  showScrollingText: Command_ScrollTextHeader;
  showScrollingTextBody: Command_ScrollTextBody;
  showPicture: Command_ShowPicture;
  movePicture: Command_MovePicture;
  showBalloonIcon: Command_ShowBalloonIcon;
  showAnimation: Command_ShowAnimation;
  showMessageBody: Command_ShowMessageBody;
  showMessageHeader: Command_ShowMessageHeader;
  battleProcessing: Command_BattleProcessing;
  changeActorImages: Command_ChangeActorImages;
  changeArmors: Command_ChangeArmors;
  changeBattleBackground: Command_ChangeBattleBackground;
  changeBattleBgm: Command_ChangeBattleBGM;
  changeClass: Command_ChangeClaass;
  changeDefeatMe: Command_ChangeDefeatME;
  changeEncounter: Command_ChangeEncounter;
  changeEnemyHp: Command_ChangeEnemyHP;
  changeEnemyMp: Command_ChangeEnemyMP;
  changeFormationAccess: Command_ChangeFormationAccess;
  changeGold: Command_ChangeGold;
  changeItems: Command_ChangeItems;
  changeMenuAccess: Command_ChangeMenuAccess;
  changeMp: Command_ChangeEnemyMP;
  changeName: Command_ChangeActorName;
  changeNickname: Command_ChangeActorNickName;
  changeParallax: Command_ChangeParallax;
  changePartyMember: Command_ChangePartyMember;
  changeProfile: Command_ChangeActorProfile;
  changeSaveAccess: Command_ChangeSaveAccess;
  changeTileset: Command_ChangeTileset;
  changeTransparency: Command_ChangeTransparency;
  changeVehicleBgm: Command_ChangeVehicleBGM;
  changeVehicleImage: Command_ChangeVehicleImage;
  changeVictoryMe: Command_ChangeVictoryME;
  changeWeapons: Command_ChangeWeapons;
  changeWindowColor: Command_ChangeWindowColor;
  conditionalBranch: Command_ConditionalBranch;
  conditionalBranchElse: Command_ConditionalBranchElse;
  commentHead: Command_CommentHeader;
  commentBody: Command_CommentBody;
  shopProcessingBody: Command_ShopProcessingBody;
  scriptEval: Command_ScriptHeader;
  scriptEvalBody: Command_ScriptBody;
  scrollMap: Command_ScrollMap;
  setEventLocation: Command_SetEventLocation;
  setMovementRoute: Command_SetMovementRoute;
  setVehicleLocation: Command_SetVehicleLocation;
  selectItem: Command_SelectItem;
  setWeatherEffect: Command_SetWeatherEffect;
  saveBgm: Command_SaveBGM;
  resumeBgm: Command_ResumeBGM;
  recoverAll: Command_RecoverAll;
  playMovie: Command_PlayMovie;
  playBgm: Command_PlayBGM;
  playBgs: Command_PlayBGS;
  playMe: Command_PlayME;
  playSe: Command_PlaySE;
  pluginCommandMv: Command_PluginCommandMV;
  inputNumber: Command_InputNumber;
  getOnOffVehicle: Command_GetOnOffVehicle;
  getLocationInfo: Command_GetLocationInfo;
  fadeOutBgm: Command_FadeOutBGM;
  fadeOutBgs: Command_FadeOutBGS;
  fadeOutScreen: Command_FadeOutScreen;
  fadeInScreen: Command_FadeInScreen;
  exitEventProcessing: Command_ExitEventProcessing;
  eraseEvent: Command_EraseEvent;
  erasePicture: Command_ErasePicture;
  enemyTransform: Command_EnemyTransform;
  endBranch: Command_ConditionalBranchElse;
  loopBreak: Command_LoopBreak;
  controlSwitches: Command_ControlSwitches;
  controlVariables: Command_ControlVariables;
  controlSelfSwitch: Command_ControlSelfSwitch;
  controlTimer: Command_ControlTimer;
  commonEvent: Command_CommonEvent;
  gatherFollowers: Command_GatherFollowers;
  gameOver: Command_GameOver;
  label: Command_Label;
  labelJump: Command_LabelJump;
  loop: Command_Loop;
  movePictureRotate: Command_RotatePicture;
  movePictureTint: Command_TintPicture;
  openSaveScreen: Command_OpenSaveScreen;
  recoverParty: Command_RecoverAll;
  returnToTitleScreen: Command_ReturnToTitleScreen;
  script: Command_ScriptBody;
  shopProcessing: Command_ShopProcessing;
  skip: Command_Skip;
  stopSe: Command_StopSE;
  wait: Command_Wait;
  shakeScreen: Command_ShakeScreen;
  flashScreen: Command_FlashScreen;
  tintScreen: Command_TintScreen;
  playSE: Command_PlaySE;
  playBGS: Command_PlayBGS;
  playBGM: Command_PlayBGM;
  playME: Command_PlayME;
  fadeOutBGS: Command_FadeOutBGS;
  fadeOutBGM: Command_FadeOutBGM;
  saveBGM: Command_SaveBGM;
  resumeBGM: Command_ResumeBGM;
  changeActorHP: Command_ChangeActorHP;
  changeActorMP: Command_ChangeActorMP;
  changeActorTP: Command_ChangeActorTP;
  changeExp: Command_ChangeExp;
  changeEnemyState: Command_ChangeEnemyState;
  transferPlayer: Command_TransferPlayer;
  changePlayerFollowers: Command_ChangePlayerFollowers;
}
