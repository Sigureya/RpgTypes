import type { SourceIdentifier } from "./sourceIdentifier";

export interface FormatWithSource {
  format: string;
  dataSource?: SourceIdentifier;
}

export interface FormatErrorLabels {
  missingName: string;
  missingSourceId: string;
  extraPlaceHolder: string;
  longPlaceHolder: string;
  formatVeryLong: string;
}

export interface FormatLimits {
  placeHolderMaxLength: number;
  formatMaxLength: number;
}

export interface FormatErrorItem {
  message: string;
  reason: string;
}

export interface FormatErrorGroup {
  syntaxErrors: FormatErrorItem[];
  semanticErrors: FormatErrorItem[];
}

export interface FormatResult {
  label: string;
  text: string;
}
