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

export interface AssetDirBase {
  asset: string;
  subDir: string;
}

export interface ImageDir extends AssetDirBase {
  asset: typeof FOLDER_IMG;
  subDir: ImageFolders;
}

export interface ImageAsset extends ImageDir {
  symbol: string;
}
export interface AudioDir extends AssetDirBase {
  asset: typeof FOLDER_AUDIO;
  subDir: AudioFolders;
}

export interface RmmzAsset {
  asset: string;
  subDir: string;
  symbol: string;
}
