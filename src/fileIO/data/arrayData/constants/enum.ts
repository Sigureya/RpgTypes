import type * as Name from "./fileNames";
export type FileNames = (typeof Name)[keyof typeof Name];
