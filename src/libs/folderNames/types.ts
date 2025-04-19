import type * as Images from "./asset/images";
import type * as Audio from "./asset/audio";

export type ImageFolders = (typeof Images)[keyof typeof Images];

export type AudioFolders = (typeof Audio)[keyof typeof Audio];
