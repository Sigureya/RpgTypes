import type { AudioFilesSet } from "./audio";
import type { ImageFilesSet } from "./image";

export interface OtherFilesSet {
  movies: ReadonlySet<string>;
}

export interface AssetFilesBundle {
  audioFiles: AudioFilesSet;
  imageFiles: ImageFilesSet;
  otherFiles: OtherFilesSet;
}
