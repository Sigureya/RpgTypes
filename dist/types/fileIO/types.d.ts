import { OtherFilesSet } from './asset';
import { AudioFilesSet } from './audio';
import { ImageFilesSet } from './image';
export interface AssetFilesBundle {
    audioFiles: AudioFilesSet;
    imageFiles: ImageFilesSet;
    otherFiles: OtherFilesSet;
}
