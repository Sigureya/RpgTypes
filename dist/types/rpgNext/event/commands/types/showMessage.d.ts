export interface NewCommand_ShowMessage {
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
