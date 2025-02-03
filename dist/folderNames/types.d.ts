import type * as Images from "./images";
import type * as Audio from "./audio";
export type ImageFolders = (typeof Images)[keyof typeof Images];
export type AudioFolders = (typeof Audio)[keyof typeof Audio];
