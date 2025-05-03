import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
import type { EffectDefinitionResolved } from "./labels";
import type { ItemEffect } from "./itemEffect";

const PLACEHOLDER_VALUE1 = "{value1}";
const PLACEHOLDER_VALUE2 = "{value2}";
const PLACEHOLDER_NAME = "{name}";

export class ItemEffectDescriptor implements EffectDefinitionResolved {
  constructor(
    public readonly codeId: number,
    public readonly label: string,
    public readonly format: string,
    public readonly description: string,
    public readonly dataSource?: SourceIdentifier
  ) {}
  formatText(
    effect: ItemEffect,
    resolveName: (
      dataSource: Readonly<SourceIdentifier>,
      dataId: number
    ) => string
  ) {
    const text = this.format
      .replaceAll(PLACEHOLDER_VALUE1, effect.value1.toString())
      .replaceAll(PLACEHOLDER_VALUE2, effect.value2.toString());
    if (!this.dataSource) {
      return text;
    }
    return text.replaceAll(
      PLACEHOLDER_NAME,
      resolveName(this.dataSource, effect.dataId)
    );
  }
  requiresValue1(): boolean {
    return this.format.includes(PLACEHOLDER_VALUE1);
  }
  requiresValue2(): boolean {
    return this.format.includes(PLACEHOLDER_VALUE2);
  }
  requiresName(): boolean {
    return this.format.includes(PLACEHOLDER_NAME);
  }
  invalidPlaceHolder(): string[] {
    const allowed = ["value1", "value2", "name"];
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
}
