import { OtherFilesSet } from '../features';
import { AudioFilesSet } from './audio';
import { ImageFilesSet } from './image';
export interface AssetFilesBundle {
    audioFiles: AudioFilesSet;
    imageFiles: ImageFilesSet;
    otherFiles: OtherFilesSet;
}
