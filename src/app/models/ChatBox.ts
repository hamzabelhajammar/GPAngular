import {Chat} from "./Chat";

export class ChatBox {
  id: number;
  idUser1: number;
  idUser2: number;
  date: Date; // LocalDate should be replaced with Date
  chats: Chat[] = []; // Initialize the array

  constructor(
    id: number,
    idUser1: number,
    idUser2: number,
    date: Date,
    chats: Chat[]
  ) {
    this.id = id;
    this.idUser1 = idUser1;
    this.idUser2 = idUser2;
    this.date = date;
    this.chats = chats;
  }
  static createEmpty(): ChatBox {
    return new ChatBox(0, 0, 0, new Date(), []);
  }
}
