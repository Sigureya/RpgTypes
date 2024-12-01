import type { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_ScrollText
//
// The window for displaying scrolling text. No frame is displayed, but it
// is handled as a window for convenience.
export declare class Window_ScrollText extends Window_Base {
  update(): void;

  startMessage(): void;

  refresh(): void;

  updatePlacement(): void;

  contentsHeight(): number;

  updateMessage(): void;

  scrollSpeed(): void;

  isFastForward(): boolean;

  fastForwardRate(): void;

  terminateMessage(): void;
}
