import { describe, test, expect } from "vitest";
import {
  resolveItemEffectLabels,
  defineEffectAddBuff,
  defineEffectAddDebuff,
  defineEffectAddState,
  defineEffectCommonEvent,
  defineEffectGainTp,
  defineEffectGrow,
  defineEffectLearnSkill,
  defineEffectRecoverHp,
  defineEffectRecoverMp,
  defineEffectRemoveBuff,
  defineEffectRemoveDebuff,
  defineEffectRemoveState,
} from "./define";
import type { EffectLabelDefinition } from "./labels";
import { LABEL_SET_ITEM_EFFECT } from "./labels";
import type { ItemEffectDescriptor } from "./itemEffectDescriptor";

const test2 = (
  label: EffectLabelDefinition,
  s: (labels: EffectLabelDefinition) => ItemEffectDescriptor
) => {
  test("", () => {
    const result1 = s(label);
    const result2 = s(label);
    expect(result1).toEqual(result2);
    expect(result1).not.toBe(result2);
    expect(result1.dataSource).toEqual(result2.dataSource);
    if (result1.dataSource) {
      expect(result1.dataSource).not.toBe(result2.dataSource);
    }
  });
};

describe("resolveItemEffectLabels", () => {
  const result: ItemEffectDescriptor[] = resolveItemEffectLabels(
    LABEL_SET_ITEM_EFFECT
  );
  const codeList = result.map((item) => item.codeId);
  test("", () => {
    expect(codeList).toEqual(codeList.toSorted());
  });
  test("should ensure that all codes are unique", () => {
    const set = new Set(codeList);
    expect(set.size).toBe(codeList.length);
  });
});

describe("defineEffectRecoverHp ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.recoverHp, defineEffectRecoverHp);
});

describe("defineEffectRecoverMp ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.recoverMp, defineEffectRecoverMp);
});

describe("defineEffectGainTp ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.gainTp, defineEffectGainTp);
});

describe("defineEffectAddState ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.addState, defineEffectAddState);
});

describe("defineEffectRemoveState ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.removeState, defineEffectRemoveState);
});

describe("defineEffectAddBuff ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.addBuff, defineEffectAddBuff);
});

describe("defineEffectRemoveBuff ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.removeBuff, defineEffectRemoveBuff);
});

describe("defineEffectAddDebuff ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.addDebuff, defineEffectAddDebuff);
});

describe("defineEffectRemoveDebuff ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.removeDebuff, defineEffectRemoveDebuff);
});

describe("defineEffectLearnSkill ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.learnSkill, defineEffectLearnSkill);
});

describe("defineEffectCommonEvent ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.commonEvent, defineEffectCommonEvent);
});

describe("defineEffectGrow ", () => {
  test2(LABEL_SET_ITEM_EFFECT.options.grow, defineEffectGrow);
});
