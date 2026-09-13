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
  currncyUnit: string = "",
): string => {
  return convertEscapeCharacters(
    text,
    (value) => variables.value(value),
    (ctrl, value) =>
      rmmzObjectsHandling(ctrl, value, actors, variables, party, currncyUnit),
  );
};

const rmmzObjectsHandling = (
  ctrl: string,
  value: number,
  actors: Rmmz_ActorsReadonly<HasName>,
  variables: Rmmz_Variables,
  party: Rmmz_Members<HasName>,
  currncyUnit: string,
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
    return resolvePartyMemberName(value, party);
  }
  if (ctrl === "G") {
    return currncyUnit;
  }

  return undefined;
};

const resolvePartyMemberName = (
  value: number,
  party: Rmmz_Members<HasName>,
): string => {
  const members = party.members();
  const index = value - 1;
  if (value <= 0) {
    return "";
  }
  if (index >= members.length) {
    return "";
  }
  const member = members[index];
  return member.name();
};

export const convertEscapeCharacters = (
  text: string,
  variableFn: (valiableId: number) => string | number,
  textFn: (ctrl: string, value: number) => string | undefined,
): string => {
  const backSlashEscaped: string = text
    .replace(/\\/g, "\x1b")
    .replace(/\x1b\x1b/g, "\\");
  const variableConverted = replaceVariableTextFixedTwice(
    backSlashEscaped,
    variableFn,
  );
  return replaceName(variableConverted, textFn).replace(/\x1b/g, "\\");
};

const replaceName = (
  text: string,
  fn: (ctrl: string, value: number) => string | undefined,
): string => {
  return text.replace(
    /\x1b(?!V\b)([A-Z]{1,16})\[(\d+)\]/gi,
    (match, ctrl: string, value: string) => {
      const replaced = fn(ctrl.toUpperCase(), Number(value));
      return replaced !== undefined ? replaced : match;
    },
  );
};

const replaceVariableTextOnce = (
  text: string,
  fn: (value: number) => string | number,
): string => {
  return text.replace(/\x1bV\[(\d+)\]/gi, (_, value) => {
    return String(fn(Number(value)));
  });
};

const replaceVariableTextFixedTwice = (
  text: string,
  fn: (value: number) => string | number,
): string => {
  const t1 = replaceVariableTextOnce(text, fn);
  return replaceVariableTextOnce(t1, fn);
};
