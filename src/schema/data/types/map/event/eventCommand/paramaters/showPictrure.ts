export type PicutureBlendMode = 0 | 1 | 2 | 3;

export type ShowPicture = [
  pictureId: number,
  filename: string,
  origin: 0 | 1,
  x: number,
  y: number,
  scaleX: number,
  scaleY: number,
  opacity: number,
  blendMode: PicutureBlendMode
];

export type MovePicture = [
  pictureId: number,
  origin: 0 | 1,
  x: number,
  y: number,
  scaleX: number,
  scaleY: number,
  opacity: number,
  blendMode: PicutureBlendMode,
  wait: boolean,
  easingType: number
];
