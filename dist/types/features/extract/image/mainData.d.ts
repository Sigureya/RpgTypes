import { Data_Actor, Data_Enemy, ImageFolders } from '../../../rmmz';
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
export declare const extractImageFromEnemy: (enemy: Pick<Data_Enemy, "id" | "battlerName">) => ExtractedEnemyImage;
export declare const extractImageFromActor: (actor: ImageExtractableActor) => ExtractedActorImage[];
