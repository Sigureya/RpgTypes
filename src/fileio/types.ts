import type {
  AssetFilesBundle,
  AudioFilesSet,
  ImageFilesSet,
  OtherFilesSet,
} from "./asset";
import type { RawGameData } from "./data";

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

export interface FileEntry {
  filename: string;
  data: object;
}
