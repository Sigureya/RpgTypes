import type { SourceIdentifier } from "./sourceIdentifier";

export interface FormatWithSource {
  format: string;
  dataSource?: SourceIdentifier;
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
