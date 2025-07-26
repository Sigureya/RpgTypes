import type { EventCommandGroup, TextCommandBody } from "./types";
import { textFromJoinedBodies } from "./utils/join";

// 注釈やコメントなどの先頭とbodyが同じパラメータ型のパターン
export class CombinedEventCommandGroup<
  Header extends TextCommandBody,
  Body extends TextCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(public readonly header: Header, public readonly bodies: Body[]) {}

  getBodyText(): string {
    return textFromJoinedBodies(this.joinCommandBodies());
  }
  mergedBody(): Header {
    return {
      code: this.header.code,
      indent: this.header.indent,
      parameters: [this.getBodyText()],
    } as Header;
  }
  joinCommandBodies(): [Header, ...Body[]] {
    return [this.header, ...this.bodies];
  }

  normalizedCommands(): [Header] {
    return [this.mergedBody()];
  }
}
