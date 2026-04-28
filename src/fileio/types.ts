import type { OtherFilesSet } from "@RpgTypes/features";
import type { AudioFilesSet } from "./audio";
import type { ImageFilesSet } from "./image";

export interface AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
}
