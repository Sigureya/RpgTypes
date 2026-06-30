import type { Data_SystemTexts } from "@RpgTypes/rmmz";
import type {
  AssetFilesBundle,
  AudioFilesSet,
  ImageFilesSet,
  OtherFilesSet,
} from "./asset";
import type { RawGameData2, ReadSystemResult } from "./data";

export interface FileReadBundle extends AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
  data: RawGameData2;
  system: ReadSystemResult<Data_SystemTexts>;
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

export interface TextFileEntry {
  filename: string;
  dir: string;
  subDir: string;
  text: string;
}

export interface FileEntryBundle {
  dataJSON: FileEntry[];
  scriptJS: TextFileEntry[];
}
