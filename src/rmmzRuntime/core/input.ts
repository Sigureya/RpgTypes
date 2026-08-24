export type Rmmz_Input = Rmmz_InputState & Rmmz_InputMapper;

export interface Rmmz_InputMapper {
  keyMapper: Record<number, string>;
  gamepadMapper: Record<number, string>;
}

export interface Rmmz_InputState {
  isTriggered(symbol: string): boolean;
  isRepeated(symbol: string): boolean;
  isLongPressed(symbol: string): boolean;
  isPressed(symbol: string): boolean;
}
