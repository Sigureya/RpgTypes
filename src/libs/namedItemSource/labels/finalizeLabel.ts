import type { LabelRegistry } from "@RpgTypes/schema";
import type { DeepPartial } from "@RpgTypes/utils";
import { mergeNestedPrimitiveRecords, mergeWithDefaults } from "./mergeLabel";

// export const finalizeLabelRegistry = (
//   base: LabelRegistry,
//   label: DeepPartial<LabelRegistry>
// ): LabelRegistry => ({
//   rpg: mergeNestedPrimitiveRecords(base.rpg, label.rpg ?? {}),
//   global: mergeWithDefaults(base.global, label.global ?? {}),
// });
