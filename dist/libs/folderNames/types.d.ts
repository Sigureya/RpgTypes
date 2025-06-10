import type * as Audio from "./asset/audio";
import type * as Images from "./asset/images";
export type ImageFolders = (typeof Images)[keyof typeof Images];
export type AudioFolders = (typeof Audio)[keyof typeof Audio];
