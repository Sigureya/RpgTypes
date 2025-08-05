import type {
  Command_BattleProcessing,
  Command_ChangeActorImages,
  Command_ChangeArmors,
  Command_ChangeBattleBackground,
  Command_ChangeClaass,
  Command_ChangeEncounter,
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  Command_ChangeFormationAccess,
  Command_ChangeGold,
  Command_ChangeItems,
  Command_ChangeMenuAccess,
  Command_ChangeParallax,
  Command_ChangePartyMember,
  Command_ChangePlayerFollowers,
  Command_ChangeSaveAccess,
  Command_ChangeTileset,
  Command_ChangeTransparency,
  Command_ChangeVehicleImage,
  Command_ChangeWeapons,
  Command_ChangeWindowColor,
  Command_ConditionalBranch,
  Command_MovePicture,
  Command_ScrollMap,
  Command_SelectItem,
  Command_SetEventLocation,
  Command_SetMovementRoute,
  Command_SetVehicleLocation,
  Command_SetWeatherEffect,
  Command_ShopProcessingBody,
  Command_ShowAnimation,
  Command_ShowBalloonIcon,
  Command_ShowPicture,
} from "../rpg";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
  Command_ChangeBattleBGM,
  Command_ChangeDefeatME,
  Command_ChangeVehicleBGM,
  Command_ChangeVictoryME,
  Command_CommentBody,
  Command_CommentHeader,
  Command_ConditionalBranchElse,
  Command_SaveBGM,
  Command_ScriptBody,
  Command_ScriptHeader,
  Command_ScrollTextBody,
  Command_ScrollTextHeader,
  Command_ShowChoices,
  Command_ShowChoiceWhen,
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "./commands";

export interface EventCommandTable2 {
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
  changePlayerFollowers: Command_ChangePlayerFollowers;
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
}
