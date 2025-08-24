import type {
  ParamObject_PlayMovie,
  ParamArray_PlayMovie,
  Command_PlayMovie,
} from "./types";

export const makeCommandPlayMovie = (
  param: ParamObject_PlayMovie,
  indent = 0
): Command_PlayMovie => ({
  code: 261,
  indent,
  parameters: [param.filename],
});

export const fromArrayPlayMovie = (
  array: ParamArray_PlayMovie
): ParamObject_PlayMovie => ({
  filename: array[0],
});
