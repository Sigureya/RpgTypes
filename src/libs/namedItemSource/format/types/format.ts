import type { SourceIdentifier } from "./types";

export interface FormatWithSource {
  format: string;
  dataSource?: SourceIdentifier;
}

export interface FormatRule<T extends object> {
  itemNamePlaceHolder?: string;
  placeHolders: Extract<keyof T, string>[];
}

export interface FormatErrorLabels {
  missingName: string;
  missingSourceId: string;
  extraPlaceHolder: string;
}

export interface FormatError {
  message: string;
  reason: string;
}

export interface FormatResult {
  label: string;
  text: string;
}
