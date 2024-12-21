import type { Data_NamedItem, Data_TraitContainer, Trait } from "./bases";

export interface Data_State extends Data_NamedItem, Data_TraitContainer {
  name: string;
  id: number;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  traits: Trait[];
  note: string;
}
