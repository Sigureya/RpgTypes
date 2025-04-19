import type {
  System_DataNames,
  System_Images,
  System_Text,
  System_Bgm,
  System_BoolanOptions,
} from "./system";

type XX<T> = {
  [K in keyof T]: string;
};

export type SystemLabel_DataNames = XX<System_DataNames>;
export type SystemLabel_Images = XX<System_Images>;
export type SystemLabel_Text = XX<System_Text>;
export type SystemLabel_Bgm = XX<System_Bgm>;
export type SystemLabel_BoolanOptions = XX<System_BoolanOptions>;
