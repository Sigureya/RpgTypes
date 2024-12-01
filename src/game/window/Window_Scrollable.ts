import type { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_Scrollable
//
// The window class with scroll functions.

export declare class Window_Scrollable extends Window_Base {
  clearScrollStatus(): void;

  scrollX(): number;

  scrollY(): number;

  scrollBaseX(): number;

  scrollBaseY(): number;

  scrollTo(x: number, y: number): void;

  scrollBy(x: number, y: number): void;

  smoothScrollTo(x: number, y: number): void;

  smoothScrollBy(x: number, y: number): void;

  setScrollAccel(x: number, y: number): void;

  overallWidth(): number;

  overallHeight(): number;

  maxScrollX(): number;

  maxScrollY(): number;

  scrollBlockWidth(): number;

  scrollBlockHeight(): number;

  smoothScrollDown(n: number): void;

  smoothScrollUp(n: number): void;

  update(): void;

  processWheelScroll(): void;

  processTouchScroll(): void;

  isWheelScrollEnabled(): boolean;

  isTouchScrollEnabled(): boolean;

  isScrollEnabled(): boolean;

  isTouchedInsideFrame(): boolean;

  onTouchScrollStart(): void;

  onTouchScroll(): void;

  onTouchScrollEnd(): void;

  updateSmoothScroll(): void;

  updateScrollAccel(): void;

  updateArrows(): void;

  updateOrigin(): void;

  updateScrollBase(baseX: number, baseY: number): void;

  paint(): void;
}
