import type { AudioFilesSet, AudioFolders } from "./audio";
import type { FOLDER_IMG, FOLDER_AUDIO } from "./constants";
import type { ImageFilesSet, ImageFolders } from "./image";

export interface OtherFilesSet {
  movies: ReadonlySet<string>;
}

export interface AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
}

export interface ImgXX {
  asset: typeof FOLDER_IMG;
  subDir: ImageFolders;
}

export interface AudioXX {
  asset: typeof FOLDER_AUDIO;
  subDir: AudioFolders;
}
