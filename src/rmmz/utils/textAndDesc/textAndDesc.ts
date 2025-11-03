export interface TextAndDesc {
  text: string;
  desc: string;
}

export const textAndDesc = (
  command: Partial<TextAndDesc>
): Partial<TextAndDesc> => {
  return {
    ...(command.text ? { text: command.text } : {}),
    ...(command.desc ? { desc: command.desc } : {}),
  };
};
