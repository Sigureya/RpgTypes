import type { EditorSettings } from "./editor";
import type { System_TestBattle } from "./testPlay";
import type { TestBattler } from "./testPlay";

export interface System_GameEditorRMMZ extends System_TestBattle {
  testBattlers: TestBattler[];
  testTroopId: number;
  editor: EditorSettings;
}
