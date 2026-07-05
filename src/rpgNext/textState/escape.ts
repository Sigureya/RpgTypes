import type {
  Rmmz_ActorsReadonly,
  Rmmz_Members,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";

interface HasName {
  name(): string;
}

export const convertEscapeCharactersMzStyle = (
  text: string,
  actors: Rmmz_ActorsReadonly<{
    name(): string;
  }>,
  party: Rmmz_Members<{
    name(): string;
  }>,
  variables: Rmmz_Variables,
): string => {
  return convertEscapeCharacters(
    text,
    (value) => variables.value(value),
    (ctrl, value) => rmmzObjectsHandling(ctrl, value, actors, variables, party),
  );
};

const rmmzObjectsHandling = (
  ctrl: string,
  value: number,
  actors: Rmmz_ActorsReadonly<HasName>,
  variables: Rmmz_Variables,
  party: Rmmz_Members<HasName>,
): string | undefined => {
  if (ctrl === "N") {
    const actor = actors.actor(value);
    return actor ? actor.name() : "";
  }
  if (ctrl === "V") {
    const variable = variables.value(value);
    return variable !== undefined ? String(variable) : "";
  }
  if (ctrl === "P") {
    const member = party.members()[value - 1];
    return member ? member.name() : "";
  }

  return undefined;
};

export const convertEscapeCharacters = (
  text: string,
  variableFn: (valiableId: number) => string | number,
  textFn: (ctrl: string, value: number) => string | undefined,
): string => {
  const ttx = text.replace(/\\/g, "\x1b").replace(/\x1b\x1b/g, "\\");
  const vex = replaceVariableText(ttx, variableFn);
  return replaceName(vex, textFn);
};

const replaceName = (
  text: string,
  fn: (key: string, value: number) => string | undefined,
): string => {
  return text
    .matchAll(/\x1b([A-Z]{1,16})\[(\d+)\]/gi)
    .reduce((acc, match): string => {
      const p1 = parseInt(match[2]);
      const vText = fn(match[1], p1);
      if (vText === undefined) {
        return acc;
      }
      return acc.replaceAll(match[0], vText);
    }, text);
};

const replaceVariableText = (
  text: string,
  fn: (value: number) => string | number,
): string => {
  return text.matchAll(/\x1bV\[(\d+)\]/gi).reduce((acc, match): string => {
    const p1 = parseInt(match[1]);
    const vText = fn(p1);
    return acc.replaceAll(match[0], `${vText}`);
  }, text);
};
