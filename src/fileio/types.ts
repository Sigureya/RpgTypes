import type { OtherFilesSet } from "./asset";
import type { AudioFilesSet } from "./audio";
import type { ImageFilesSet } from "./image";

export interface AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
}
