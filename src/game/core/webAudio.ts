export declare class WebAudio {
  constructor(url: string);
  clear(): void;
  isReady(): boolean;
  isError(): boolean;
  isPlaying(): boolean;
  play(loop: boolean, offset: number): void;
  stop(): void;
  destroy(): void;
  fadeIn(duration: number): void;
  fadeOut(duration: number): void;
  seek(): number;
  addLoadListener(listner: (webAudio: WebAudio) => void): void;
  addStopListener(listmer: () => void): void;
  retry(): void;
  get url(): string;
  volume: number;
  pitch: number;
  pan: number;
}
