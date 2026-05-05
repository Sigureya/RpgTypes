import type { AudioFilesSet } from "./audio";
import type { ImageFilesSet } from "./image";
import type { AudioDir, RmmzAsset, ImageDir, AssetDirBase } from "./types";

export const flattenAudioFiles = (audio: AudioFilesSet): RmmzAsset[] => {
  return [
    ...flattenAssetSet<AudioDir>(audio.bgm, {
      asset: "audio",
      subDir: "bgm",
    }),
    ...flattenAssetSet<AudioDir>(audio.bgs, {
      asset: "audio",
      subDir: "bgs",
    }),
    ...flattenAssetSet<AudioDir>(audio.me, {
      asset: "audio",
      subDir: "me",
    }),
    ...flattenAssetSet<AudioDir>(audio.se, {
      asset: "audio",
      subDir: "se",
    }),
  ];
};

export const flattenImageFiles = (images: ImageFilesSet): RmmzAsset[] => {
  return [
    ...flattenAssetSet<ImageDir>(images.characters, {
      asset: "img",
      subDir: "characters",
    }),
    ...flattenAssetSet<ImageDir>(images.faces, {
      asset: "img",
      subDir: "faces",
    }),
    ...flattenAssetSet<ImageDir>(images.svEnemy, {
      asset: "img",
      subDir: "sv_enemies",
    }),
    ...flattenAssetSet<ImageDir>(images.svActors, {
      asset: "img",
      subDir: "sv_actors",
    }),
    ...flattenAssetSet<ImageDir>(images.enemies, {
      asset: "img",
      subDir: "enemies",
    }),
  ];
};

const flattenAssetSet = <T extends AssetDirBase>(
  set: ReadonlySet<string>,
  dir: T,
) => {
  const ar = Array.from(set);
  return ar.sort().map(
    (filename): RmmzAsset => ({
      asset: dir.asset,
      subDir: dir.subDir,
      symbol: filename,
    }),
  );
};
