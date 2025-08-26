import type { EventCommand2, ExtractCommandByParam } from "@RpgTypes/rmmz";

export const pickCommands = <
  Head extends EventCommand2,
  Body extends ExtractCommandByParam<[string], EventCommand2>
>(
  array: ReadonlyArray<EventCommand2>,
  index: number,
  headFn: (data: EventCommand2) => data is Head,
  bodyFn: (data: EventCommand2) => data is Body
): {
  header: Head;
  bodies: Body[];
} => {
  const head = array[index];
  if (!headFn(head)) {
    throw new Error(`Invalid head at index ${index}: ${JSON.stringify(head)}`);
  }

  // どうしようもないので、ここだけeslintのルールを無効化する
  /* eslint-disable @functional/no-loop-statements */
  /* eslint-disable @functional/no-let */
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
