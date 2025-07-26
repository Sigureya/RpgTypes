import type { Data_Actor, ImageFolders } from "@RpgTypes/rmmz";

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

export type ImageExtractableActor = Pick<
  Data_Actor,
  "id" | "faceName" | "battlerName" | "characterName"
>;
