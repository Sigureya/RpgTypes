export interface ShowMessage {
  code: "showMessage";
  arg: {
    faceId: number;
    faceName: string;
    background: number;
    position: number;
    text: string;
    voice: {};
  };
}
