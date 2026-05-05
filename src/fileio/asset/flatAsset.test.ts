import { describe, expect, test } from "vitest";
import type { AudioFilesSet } from "./audio";
import { flattenAudioFiles, flattenImageFiles } from "./flatAsset";
import type { ImageFilesSet } from "./image";
import type { RmmzAsset } from "./types";

const emptyAudio: AudioFilesSet = {
  bgm: new Set(),
  bgs: new Set(),
  me: new Set(),
  se: new Set(),
};

const emptyImages: ImageFilesSet = {
  characters: new Set(),
  faces: new Set(),
  svEnemy: new Set(),
  svActors: new Set(),
  enemies: new Set(),
  picutures: new Set(),
  tilesets: new Set(),
};

describe("flattenAudioFiles", () => {
  test("全て空のとき空配列を返す", () => {
    expect(flattenAudioFiles(emptyAudio)).toEqual([]);
  });

  test("bgmのファイルをフラット化する", () => {
    const audio: AudioFilesSet = {
      ...emptyAudio,
      bgm: new Set(["battle", "field"]),
    };
    const expected: RmmzAsset[] = [
      { asset: "audio", subDir: "bgm", symbol: "battle" },
      { asset: "audio", subDir: "bgm", symbol: "field" },
    ];
    const result = flattenAudioFiles(audio);
    expect(result).toEqual(expected);
  });

  test("複数カテゴリのファイルをまとめてフラット化する", () => {
    const audio: AudioFilesSet = {
      ...emptyAudio,
      bgm: new Set(["bgm1"]),
      se: new Set(["se1"]),
    };
    const result = flattenAudioFiles(audio);
    expect(result).toContainEqual({
      asset: "audio",
      subDir: "bgm",
      symbol: "bgm1",
    });
    expect(result).toContainEqual({
      asset: "audio",
      subDir: "se",
      symbol: "se1",
    });
  });

  test("ファイル名がソートされて返る", () => {
    const audio: AudioFilesSet = {
      ...emptyAudio,
      bgm: new Set(["zzz", "aaa", "mmm"]),
    };
    const result = flattenAudioFiles(audio);
    expect(result.map((r) => r.symbol)).toEqual(["aaa", "mmm", "zzz"]);
  });
});

describe("flattenImageFiles", () => {
  test("全て空のとき空配列を返す", () => {
    expect(flattenImageFiles(emptyImages)).toEqual([]);
  });

  test("charactersのファイルをフラット化する", () => {
    const images: ImageFilesSet = {
      ...emptyImages,
      characters: new Set(["Actor1", "Actor2"]),
    };
    const expected: RmmzAsset[] = [
      { asset: "img", subDir: "characters", symbol: "Actor1" },
      { asset: "img", subDir: "characters", symbol: "Actor2" },
    ];
    const result = flattenImageFiles(images);
    expect(result).toEqual(expected);
  });

  test("複数カテゴリのファイルをまとめてフラット化する", () => {
    const images: ImageFilesSet = {
      ...emptyImages,
      faces: new Set(["face1"]),
      enemies: new Set(["enemy1"]),
    };
    const result = flattenImageFiles(images);
    expect(result).toContainEqual({
      asset: "img",
      subDir: "faces",
      symbol: "face1",
    });
    expect(result).toContainEqual({
      asset: "img",
      subDir: "enemies",
      symbol: "enemy1",
    });
  });

  test("ファイル名がソートされて返る", () => {
    const images: ImageFilesSet = {
      ...emptyImages,
      svActors: new Set(["sv_c", "sv_a", "sv_b"]),
    };
    const result = flattenImageFiles(images);
    expect(result.map((r) => r.symbol)).toEqual(["sv_a", "sv_b", "sv_c"]);
  });
});
