export type {
  ExtractedActorImage,
  ExtractedEnemyImage,
  ImageExtractableActor,
} from "./image/mainData";
export { ExtractedSystemImage, extractImageFromSystem } from "./image/system";

export type {
  ExtractedText,
  ExtractedTextItem,
  TextExtractable,
} from "./text/mainData";
export { extractImageFromActor, extractImageFromEnemy } from "./image/mainData";

export {
  extractNoteText,
  extractTextData,
  extractTextFromActor,
  extractTextFromArmor,
  extractTextFromClass,
  extractTextFromEnemy,
  extractTextFromItem,
  extractTextFromSkill,
  extractTextFromState,
  extractTextFromWeapon,
} from "./text/mainData";
