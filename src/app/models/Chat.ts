import {ChatBox} from "./ChatBox";
import {User} from "./User";

export class Chat {
  id: number;
  type: MessageType;
  content: string;
  sender: number;
  fromm: number;
  date: Date; // LocalDateTime should be replaced with Date
  text: string;
  chatBox: ChatBox; // Assuming ChatBox is a class as well

  constructor(
    id: number,
    type: MessageType,
    content: string,
    sender: number,
    fromm: number,
    date: Date,
    text: string,
    chatBox: ChatBox
  ) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.sender = sender;
    this.fromm = fromm;
    this.date = date;
    this.text = text;
    this.chatBox = chatBox;
  }
  static createEmpty(): Chat {
    return new Chat(
      0,
      MessageType.CHAT,
      '',
      0,
      0,
      new Date(),
      '',
      ChatBox.createEmpty() // Use ChatBox.createEmpty() to create an empty ChatBox instance
    );
  }
}

export enum MessageType {
  CHAT = 'CHAT',
  JOIN = 'JOIN',
  LEAVE = 'LEAVE'
}
