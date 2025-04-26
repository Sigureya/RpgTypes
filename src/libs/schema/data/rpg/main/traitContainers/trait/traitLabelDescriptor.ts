import type { SourceIdentifier } from "@RpgTypes/schema";
import type { TraitLabelResolved } from "./options";
import type { Trait } from "./types";
const PLACEHOLDER_VALUE = "{value}";
const PLACEHOLDER_NAME = "{name}";

export class TraitLabelDescriptor implements TraitLabelResolved {
  constructor(
    public readonly code: number,
    public readonly label: string,
    public readonly format: string,
    public readonly dataSource?: Readonly<SourceIdentifier>
  ) {}
  match(trait: Trait): boolean {
    return this.code === trait.code;
  }
  testTraitCode(trait: Trait) {
    if (this.match(trait)) {
      return;
    }
    throw new Error(
      `${this.label} Trait code mismatch.  this.code:${this.code} trait.code:${trait.code}`
    );
  }
  formatText(
    trait: Trait,
    resolveName: (
      dataSource: Readonly<SourceIdentifier>,
      dataId: number
    ) => string
  ): string {
    this.testTraitCode(trait);
    const text = this.format.replaceAll(
      PLACEHOLDER_VALUE,
      trait.value.toString()
    );
    if (!this.dataSource) {
      return text;
    }
    return text.replaceAll(
      PLACEHOLDER_NAME,
      resolveName(this.dataSource, trait.dataId)
    );
  }
  requiresValue(): boolean {
    return this.format.includes(PLACEHOLDER_VALUE);
  }
  requiresName(): boolean {
    return this.format.includes(PLACEHOLDER_NAME);
  }

  invalidPlaceHolder(): string[] {
    const allowed = ["value", "name"];
    const matches: RegExpExecArray[] = [
      ...this.format.matchAll(/\{([^}]+)\}/g),
    ];
    return matches.map((m) => m[1]).filter((key) => !allowed.includes(key));
  }
  isFormatValidForDataSource(): boolean {
    if (this.dataSource && !this.requiresName()) {
      return false;
    }
    return true;
  }
  diagnose(): TraitLabelDiagnostic {
    const soruceError = !this.isFormatValidForDataSource();
    const nameError = this.requiresName() && !this.dataSource;
    const invalidPlaceHolder = this.invalidPlaceHolder();

    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: soruceError || nameError || invalidPlaceHolder.length > 0,
      missingDataSourceError: soruceError,
      sourceMismatchError: nameError,
      invalidPlaceHolders: invalidPlaceHolder,
    };
  }
}

export interface TraitLabelDiagnostic {
  format: string;
  code: number;
  label: string;
  hasError: boolean;
  missingDataSourceError: boolean;
  sourceMismatchError: boolean;
  invalidPlaceHolders: string[];
}
