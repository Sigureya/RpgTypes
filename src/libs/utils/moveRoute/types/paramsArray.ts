export type MoveRouteParamTable2<SoundParamType> = {
  jump: [x: number, y: number];
  changeImage: [characterName: string, characterIndex: number];
  wait: [frames: number];
  switchOn: [switchId: number];
  switchOff: [switchId: number];
  changeSpeed: [speed: number];
  changeFrequency: [frequency: number];
  changeOpacity: [opacity: number];
  changeBlendMode: [blendMode: number];
  playSoundEffect: [se: SoundParamType];
  script: [script: string];
};
