import type { AudioFolders } from "@RpgTypes/fileIO";
import type { CommandUnion_AnyAudio } from ".";

const TABLE = {
  132: "bgm",
  133: "me",
  139: "me",
  241: "bgm",
  245: "bgs",
  249: "me",
  250: "se",
} as const satisfies Record<CommandUnion_AnyAudio["code"], AudioFolders>;

export const assetDirectoryName = (
  code: CommandUnion_AnyAudio["code"],
): AudioFolders => {
  return TABLE[code];
};
