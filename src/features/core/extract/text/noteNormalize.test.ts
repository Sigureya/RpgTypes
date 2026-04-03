import { test, expect, describe } from "vitest";
import type { ExtractedDataBundle } from "./mainData/types";
import type { AudioFilesSet, ImageFilesSet, OtherFilesSet } from "./note/types";
import { normalizeBundleNoteTexts } from "./noteNormarize";

const BGM1 = "bgm1";
const BGM2 = "bgm2";
const BGS1 = "bgs1";
const BGS2 = "bgs2";

const ME1 = "me1";
const ME2 = "me2";
const SE1 = "se1";
const SE2 = "se2";

const audioFiles: AudioFilesSet = {
  bgm: new Set([BGM1, BGM2]),
  bgs: new Set([BGS1, BGS2]),
  me: new Set([ME1, ME2]),
  se: new Set([SE1, SE2]),
};

const CHARACTER1 = "character1";
const CHARACTER2 = "character2";
const FACE1 = "face1";
const FACE2 = "face2";
const BATTLE1 = "battle1";
const BATTLE2 = "battle2";
const SV_BATTLE1 = "svBattle1";
const SV_BATTLE2 = "svBattle2";
const ENEMY1 = "enemy1";
const PICTURE1 = "picture1";
const PICTURE2 = "picture2";
const TILESET1 = "tileset1";
const TILESET2 = "tileset2";

const imageFiles: ImageFilesSet = {
  characters: new Set([CHARACTER1, CHARACTER2]),
  faces: new Set([FACE1, FACE2]),
  svEnemy: new Set([BATTLE1, BATTLE2]),
  svActors: new Set([SV_BATTLE1, SV_BATTLE2]),
  enemies: new Set([ENEMY1]),
  picutures: new Set([PICTURE1, PICTURE2]),
  tilesets: new Set([TILESET1, TILESET2]),
};

const MOVIE1 = "movie1";

const ohterFiles: OtherFilesSet = {
  movies: new Set([MOVIE1]),
};

const MESSAGE1 = "message1";

const KEY_POWER = "power";

const bundle: ExtractedDataBundle = {
  actors: [
    { main: [], note: [{ id: 1, key: "sv", value: SV_BATTLE1 }] },
    { main: [], note: [{ id: 2, key: "b", value: "true" }] },
    { main: [], note: [{ id: 3, key: "b", value: "false" }] },
  ],
  enemies: [
    {
      main: [],
      note: [
        { id: 4, key: "image", value: ENEMY1 },
        { id: 5, key: "power", value: "12345" },
      ],
    },
  ],
  weapons: [{ main: [], note: [{ id: 5, key: KEY_POWER, value: "10" }] }],
  armors: [{ main: [], note: [{ id: 6, key: KEY_POWER, value: "15" }] }],
  skills: [{ main: [], note: [{ id: 8, key: "movie", value: MOVIE1 }] }],
  states: [
    {
      main: [],
      note: [
        { id: 9, key: "face", value: FACE1 },
        { id: 10, key: "face", value: FACE2 },
      ],
    },
  ],
  items: [
    {
      main: [],
      note: [{ id: 7, key: "message", value: MESSAGE1 }],
    },
  ],
  classes: [{ main: [], note: [] }],
};

const bundle2: ExtractedDataBundle = {
  actors: [
    {
      main: [
        { id: 1, key: "name", value: "Actor1" },
        { id: 1, key: "nickname", value: "A1" },
        { id: 1, key: "profile", value: "Profile of Actor1" },
      ],
      note: [
        { id: 1, key: "ex-profile", value: "some text" },
        { id: 1, key: "ex-name", value: "some name" },
      ],
    },
    {
      main: [
        { id: 2, key: "name", value: "Actor1" },
        { id: 2, key: "nickname", value: "A1" },
        { id: 2, key: "profile", value: "Profile of Actor1" },
      ],
      note: [
        { id: 2, key: "ex-profile", value: "true" },
        { id: 2, key: "ex-name", value: "false" },
      ],
    },
  ],
  enemies: [
    {
      main: [{ id: 3, key: "name", value: "Enemy1" }],
      note: [{ id: 3, key: "desc", value: "it is enemy" }],
    },
    {
      main: [{ id: 4, key: "name", value: "Enemy2" }],
      note: [{ id: 4, key: "desc", value: "12345" }],
    },
  ],
  weapons: [
    {
      main: [
        { id: 5, key: "name", value: "Weapon1" },
        { id: 5, key: "description", value: "This is a powerful weapon." },
      ],
      note: [{ id: 5, key: "special", value: "xyz" }],
    },
  ],
  armors: [
    {
      main: [
        { id: 6, key: "name", value: "Armor1" },
        { id: 6, key: "description", value: "This is a sturdy armor." },
      ],
      note: [{ id: 6, key: "special", value: "abc" }],
    },
  ],

  skills: [],
  states: [],
  items: [],
  classes: [],
};

describe("ddd", () => {
  test("no matching kinds", () => {
    const result = normalizeBundleNoteTexts(
      bundle,
      audioFiles,
      imageFiles,
      ohterFiles,
    );
    const expected: ExtractedDataBundle = {
      actors: [],
      enemies: [],
      weapons: [],
      armors: [],
      skills: [],
      states: [],
      items: [],
      classes: [],
    };
    expect(result).toEqual(expected);
  });
  test("matching kinds and values are filtered correctly", () => {
    const result = normalizeBundleNoteTexts(
      bundle2,
      audioFiles,
      imageFiles,
      ohterFiles,
    );
    expect(result).toEqual(bundle2);
  });
});
