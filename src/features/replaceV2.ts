import type { AssetFilesBundle, RawGameData } from "@RpgTypes/fileio";
import {
  buildRawGameDataNoteNormalization,
  extractTextFromRawGameData,
} from "./core/extract";
import type { MapDataReplaceHandlers } from "./core/replace";
import type { EventContainerExtractor } from "./extractText";

const gff = (
  data: RawGameData,
  assetBundle: AssetFilesBundle,
  extractor: EventContainerExtractor,
  handlers: MapDataReplaceHandlers,
) => {
  // まずテキストを抽出し
  const e = extractTextFromRawGameData(data, extractor);
  // 正規化済みノートを取得
  const n = buildRawGameDataNoteNormalization(
    e,
    assetBundle.audioFiles,
    assetBundle.imageFiles,
    assetBundle.otherFiles,
  );
  // ハンドラを微修正。
  // noteから自動算出した非テキストノートキーをisReplaceTargetNoteで弾くようにする
  const h2 = hx(n.nonTextNoteKeys, handlers);
};

const hx = (
  ssx: ReadonlySet<string>,
  handlers: MapDataReplaceHandlers,
): MapDataReplaceHandlers => ({
  pluginCommand(command) {
    return handlers.pluginCommand(command);
  },
  scriptCommand(command) {
    return handlers.scriptCommand(command);
  },
  replaceText(key) {
    return handlers.replaceText(key);
  },
  isReplaceTargetNote(item): boolean {
    if (ssx.has(item.key)) {
      return false;
    }
    return handlers.isReplaceTargetNote(item);
  },
});
