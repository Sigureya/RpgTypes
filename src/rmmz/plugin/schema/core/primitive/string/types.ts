export interface RmmzParamCore_String {
  type: "string" | "multiline_string";
  default: string;
}

export interface RmmzParamCore_Combo {
  default: string;
  type: "combo";
  options: string[];
}

export interface RmmzParamCore_FilePath {
  type: "file";
  default: string;
  dir: string;
}
