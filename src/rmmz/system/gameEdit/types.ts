import type { EditorSettings } from "./editor";
import type { System_TestBattle } from "./testPlay";
import type { TestBattler } from "./testPlay";

export interface System_GameEditorBundleRMMZ
  extends System_TestBattle,
    System_EditorTemporary {
  editor: EditorSettings;

  testBattlers: TestBattler[];
  testTroopId: number;

  battleback1Name: string;
  battleback2Name: string;

  editMapId: number;
  battlerHue: number;
  battlerName: string;
}

export interface System_EditorTemporary {
  editMapId: number;
  battlerHue: number;
  battlerName: string;
}
