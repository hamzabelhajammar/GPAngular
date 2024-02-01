import {User} from "./User";
import {ChatBox} from "./ChatBox";

export class UserChatInfo {
  user: User ;
  chatBox: ChatBox ;
  constructor(
    user: User,
    chatBox: ChatBox
  ) {
    this.user = user;
    this.chatBox = chatBox;
  }
  static createEmpty(): UserChatInfo {
    return new UserChatInfo(new User(), ChatBox.createEmpty());
  }
}
