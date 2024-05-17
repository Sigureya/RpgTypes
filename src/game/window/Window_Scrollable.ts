import { Rectangle } from "src/types/rectangle";
import { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_Scrollable
//
// The window class with scroll functions.

export declare class Window_Scrollable extends Window_Base {
  initialize(rect: Rectangle): void;

  clearScrollStatus(): any;

  scrollX(): number;

  scrollY(): number;

  scrollBaseX(): number;

  scrollBaseY(): number;

  scrollTo(x: number, y: number): any;

  scrollBy(x: number, y: number): any;

  smoothScrollTo(x: number, y: number): any;

  smoothScrollBy(x: number, y: number): any;

  setScrollAccel(x: number, y: number): void;

  overallWidth(): number;

  overallHeight(): number;

  maxScrollX(): number;

  maxScrollY(): number;

  scrollBlockWidth(): number;

  scrollBlockHeight(): number;

  smoothScrollDown(n: number): any;

  smoothScrollUp(n: number): any;

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

  paint(): any;
}
