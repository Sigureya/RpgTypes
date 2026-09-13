import type {
  Rmmz_ActorsReadonly,
  Rmmz_Members,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";

// ここで型を定義しているが、エディタ上の表示の都合で内部に閉じ込めている
// 公開関数で型を直書きしているのは意図的
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
    (ctrl, value) => rmmzObjectsHandling(ctrl, value, actors, variables, party),
    currncyUnit,
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
    return actorName(value, actors);
  }
  if (ctrl === "V") {
    return variebleText(value, variables);
  }
  if (ctrl === "P") {
    return resolvePartyMemberName(value, party);
  }

  return undefined;
};

const actorName = (
  value: number,
  actors: Rmmz_ActorsReadonly<HasName>,
): string => {
  const actor = actors.actor(value);
  return actor ? actor.name() : "";
};

const variebleText = (value: number, variables: Rmmz_Variables): string => {
  const variable = variables.value(value);
  return variable !== undefined ? String(variable) : "";
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
  currncyUnit: string = "",
): string => {
  const backSlashEscaped: string = text
    .replace(/\\/g, "\x1b")
    .replace(/\x1b\x1b/g, "\\");
  const variableConverted = replaceVariableTextFixedTwice(
    backSlashEscaped,
    variableFn,
  );
  // コアと同じく \x1bG を前方一致で一括して置き換える。textFn より先に処理するので G は textFn へ渡らない
  const currencyConverted = variableConverted.replace(/\x1bG/gi, currncyUnit);
  // コアと同じく、処理しなかった制御文字は \x1b のまま返す
  return replaceName(currencyConverted, textFn);
};

const replaceName = (
  text: string,
  fn: (ctrl: string, value: number) => string | undefined,
): string => {
  // 制御文字の長さは16文字に制限。無限だと何か問題が起こる
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
  // オリジナル実装と異なるが、置き換えを2回に制限している
  const t1 = replaceVariableTextOnce(text, fn);
  return replaceVariableTextOnce(t1, fn);
};
