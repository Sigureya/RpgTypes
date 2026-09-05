import { movePictureValues, showPictureValues } from "./command";
import type {
  Picture_MoveParams,
  Picture_ShowParams,
  Store_Picture,
} from "./types";

/**
 * showPictureValues のファサード。
 * 値の並びではなく名前で渡す。呼び違いを型で防ぐのはこちらの役目。
 */
export const showPicture = (
  store: Store_Picture,
  params: Picture_ShowParams,
): Store_Picture =>
  showPictureValues(
    store,
    params.name,
    params.origin,
    params.x,
    params.y,
    params.scaleX,
    params.scaleY,
    params.opacity,
    params.blendMode,
  );

/** movePictureValues のファサード。 */
export const movePicture = (
  store: Store_Picture,
  params: Picture_MoveParams,
): Store_Picture =>
  movePictureValues(
    store,
    params.origin,
    params.x,
    params.y,
    params.scaleX,
    params.scaleY,
    params.opacity,
    params.blendMode,
    params.duration,
    params.easingType,
  );
