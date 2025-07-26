import { ImageFolders } from 'src/rmmz/folderNames';
import { Data_Actor } from 'src/rmmz/rpg/data';
export interface ExtractedEnemyImage {
    key: string;
    image: string;
    id: number;
}
export interface ExtractedActorImage {
    folder: ImageFolders;
    key: string;
    image: string;
    id: number;
}
export type ImageExtractableActor = Pick<Data_Actor, "id" | "faceName" | "battlerName" | "characterName">;
