import type * as WaitModeEnum from ".//waitMode";
export type WaitMode = (typeof WaitModeEnum)[keyof typeof WaitModeEnum];
