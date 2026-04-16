import { FILENAME_SYSTEM } from './system';
import type * as Name from "./arrayData/constants/fileNames";
export type DataFileNames = (typeof Name)[keyof typeof Name] | typeof FILENAME_SYSTEM;
