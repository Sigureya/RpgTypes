export interface Command_Message {
  code: "message";
  indent: number;
  args: {
    speaker: string;
    message: string;
    emotion: string;
    voiceId?: string;
    postionType: "top" | "middle" | "bottom";
    backgroundType: "black" | "dim" | "transparent";
  };
  note: Record<string, string>;
}
