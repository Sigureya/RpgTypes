import type { EditorSettings } from "./editor";
import type { System_TestPlay } from "./testPlay";
import type { TestBattler } from "./testPlay";

export interface System_GameEditorRMMZ extends System_TestPlay {
  testBattlers: TestBattler[];
  testTroopId: number;
  editor: EditorSettings;
}
