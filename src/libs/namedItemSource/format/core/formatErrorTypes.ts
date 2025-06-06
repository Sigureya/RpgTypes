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
  formatLabel: string;
  syntaxErrors: FormatErrorItem[];
  semanticErrors: FormatErrorItem[];
}
