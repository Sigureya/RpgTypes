import type { OtherFilesSet } from "./asset";
import type { AudioFilesSet } from "./audio";
import type { RawGameData } from "./data";
import type { ImageFilesSet } from "./image";

export interface AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
}

export interface FileReadBundle extends AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
  data: RawGameData;
}

export interface FileReadFailed {
  success: false;
  message: string;
  filename: string;
}
