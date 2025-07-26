import type { EventCommand } from "@RpgTypes/rmmz";
import type { EventCommandGroup, TextCommandBody } from "./types";
import { textFromJoinedBodies } from "./utils/join";

//　メッセージとかscrollテキスト。ヘッダとbodyが異なるパターン
export class SimpleEventCommandGroup<
  Header extends EventCommand,
  Body extends TextCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(
    public readonly bodyCode: Body["code"],
    public readonly header: Header,
    public readonly bodies: Body[]
  ) {}
  normalizedCommands(): [Header, Body] | [Header] {
    const header: Header = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters],
    };
    if (this.bodies.length === 0) {
      return [header];
    }
    return [header, this.mergedBody()];
  }

  getBodyText(): string {
    return textFromJoinedBodies(this.bodies);
  }
  joinCommandBodies(): Body[] {
    return this.bodies;
  }
  mergedBody(): Body {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()],
    } as Body;
  }
}
