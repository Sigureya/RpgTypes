import type { Data_Enemy, ImageFolders } from "@RpgTypes/rmmz";
import type {
  ExtractedActorImage,
  ExtractedEnemyImage,
  ImageExtractableActor,
} from "./types";

export const extractImageFromEnemy = (
  enemy: Pick<Data_Enemy, "id" | "battlerName">
): ExtractedEnemyImage => {
  return {
    key: "battlerName",
    image: enemy.battlerName,
    id: enemy.id,
  };
};

const extractActorImage = (
  actor: ImageExtractableActor,
  key: Exclude<keyof typeof actor, "id">,
  folder: ImageFolders
): ExtractedActorImage => ({
  folder: folder,
  key,
  image: actor[key],
  id: actor.id,
});

export const extractImageFromActor = (
  actor: ImageExtractableActor
): ExtractedActorImage[] => {
  return [
    extractActorImage(actor, "faceName", "faces"),
    extractActorImage(actor, "characterName", "characters"),
    extractActorImage(actor, "battlerName", "sv_actors"),
  ];
};
