import { Command_ShowPicture2, ParamObject_ParamsMovePicture, Command_MovePicture2, ParamObject_ParamsShowPicture } from './types';
export declare const makeCommandShowPicture: ({ pictureId, origin, name, x, y, scaleX, scaleY, opacity, blendMode, }: Partial<ParamObject_ParamsShowPicture>) => Command_ShowPicture2;
export declare const makeCommandMovePicture: ({ pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, wait, easingType, }: ParamObject_ParamsMovePicture) => Command_MovePicture2;
