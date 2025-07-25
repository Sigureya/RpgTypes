import type { EventCommand, ExtractCommandByParam } from "@RpgTypes/rmmz";

export const pickCommands = <
  Head extends EventCommand,
  Body extends ExtractCommandByParam<[string]>
>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  headFn: (data: EventCommand) => data is Head,
  bodyFn: (data: EventCommand) => data is Body
): {
  header: Head;
  bodies: Body[];
} => {
  const head = array[index];
  if (!headFn(head)) {
    throw new Error(`Invalid head at index ${index}: ${JSON.stringify(head)}`);
  }

  // どうしようもないので、ここだけeslintのルールを無効化する
  // eslint-disable-next-line functional/no-loop-statements
  const bodys: Body[] = [];
  for (let i = index + 1; i < array.length; i++) {
    const body = array[i];
    if (bodyFn(body)) {
      bodys.push(body);
    } else {
      break;
    }
  }
  return { header: head, bodies: bodys };
};
